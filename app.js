const fs = require('fs');

// const jsonPath = 'C:\\Users\\robert.mauger\\new-okt-web-tokens-main\\tokens\\tokens.json';
const jsonPath = './tokens/tokens.json';
//const cssFolderPath = 'C:\\Users\\robert.mauger\\new-okt-web-tokens-main\\public\\assets\\css\\';
const cssFolderPath = 'public/assets/css/';

const json = require(jsonPath);

function processTypographyValues(values) {
  let cssContent = '';

  Object.entries(values).forEach(([property, value]) => {
    const kebabCaseProperty = property.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
    const sanitizedValue = value.replace(/{|}/g, '').replace(/\./g, '-').toLowerCase();

    cssContent += `  ${kebabCaseProperty}: var(--global-${sanitizedValue});\n`;
  });

  return cssContent;
}

function processTypography(displayObj, displayKey) {
  let cssContent = '';

  Object.entries(displayObj).forEach(([key, value]) => {
    if (key === 'value') {
      cssContent += processTypographyValues(value);
    } else if (typeof value === 'object') {
      if (displayKey.toLowerCase() === 'desktop') {
        cssContent += `@media screen and (min-width: 1312px) {\n${processTypography(value, key)}\n}\n`;
      } else if (displayKey.toLowerCase() === 'tablet') {
        cssContent += `@media screen and (max-width: 1311px) {\n${processTypography(value, key)}\n}\n`;
      } else if (displayKey.toLowerCase() === 'mobile') {
        cssContent += `@media screen and (max-width: 834px) {\n${processTypography(value, key)}\n}\n`;
      } else {
        cssContent += processTypography(value, key);
      }
    }
  });

  const lowercaseKey = displayKey.toLowerCase();

  if (lowercaseKey !== 'device' && lowercaseKey !== 'display' && lowercaseKey !== 'desktop' && lowercaseKey !== 'tablet' && lowercaseKey !== 'mobile') {
    cssContent = `@mixin ${lowercaseKey} {\n${cssContent}}\n\n`;
  }

  return cssContent;
}

function writeTypographyMixinsToFile(cssContent) {
  const mixinsFilePath = `${cssFolderPath}global-typography.css`;

  if (cssContent.trim() !== '') {
    const importStatement = `@import 'global-styles.css';\n`;
    fs.writeFileSync(mixinsFilePath, `/* Typography Mixins */\n${importStatement}\n${cssContent}`);
    console.log(`Typography mixins written to: ${mixinsFilePath}`);
  }
}

function processCategory(category, path, isGlobal) {
  let cssContent = '';

  Object.entries(category).forEach(([key, value]) => {
    const currentPath = path ? `${path}-${key}` : key;

    if (key.startsWith('$')) {
      return;
    }

    if (typeof value === 'object' && value !== null && !currentPath.startsWith('$')) {
      cssContent += processCategory(value, currentPath, isGlobal);
    } else if (key === 'value') {
      const sanitizedVariable = currentPath
        .replace(/^semantic\//, '')
        .replace(/^Components\//, '')
        .replace(/^button\//, '')
        .replace(/^demo\//, '')   
        .replace(/^System\//, '')
        .replace(/-value$/, '');

      if (isGlobal) {
        cssContent += `--${sanitizedVariable.toLowerCase()}: ${value};\n`;
      } else {
        const globalVariable = value.replace(/{|}/g, '').replace(/\./g, '-').toLowerCase();
        cssContent += `--${sanitizedVariable.toLowerCase()}: var(--global-${globalVariable});\n`;
      }
    }
  });

  return cssContent;
}

function getCSSFilePath(category) {
  if (category.startsWith('System/global')) {
    return `${cssFolderPath}global-styles.css`;
  } else if (category.startsWith('semantic/oktane')) {
    return `${cssFolderPath}oktane-theme.css`;
  } else if (category.startsWith('semantic/okta')) {
    return `${cssFolderPath}okta-theme.css`;
  } else if (category.startsWith('semantic/devx')) {
    return `${cssFolderPath}devx-theme.css`;
  } 
  else if (category.startsWith('Components/button/demo')) {
    return `${cssFolderPath}button-theme.css`;
  }
  else {
    console.log(`Unsupported category: ${category}`);
    return null;
  }
}

const topLevelCategory = Array.isArray(json) ? json[0] : json;

Object.keys(topLevelCategory).forEach((category) => {
  const isGlobal = category.startsWith('System/global');
  const cssContent = processCategory(topLevelCategory[category], category, isGlobal);
  const cssFilePath = getCSSFilePath(category);
 
  if (cssFilePath && cssContent.trim() !== '') {
    const importStatement = isGlobal ? '' : `@import 'global-styles.css';\n`;
    const importStatementNotOkta = cssFilePath === 'public/assets/css/okta-theme.css' ? '' : `@import 'okta-styles.css';\n`;
    fs.writeFileSync(cssFilePath, `${importStatement}\n${importStatementNotOkta}\n:root {\n${cssContent}\n}\n`, { flag: 'w' });
    console.log(`CSS file written to: ${cssFilePath}`);
  }
});

// Process typography separately
const typographyCategory = json['System/typography'];

if (typographyCategory) {
  let typographyContent = '';

  Object.entries(typographyCategory).forEach(([displayKey, displayObj]) => {
    typographyContent += processTypography(displayObj, displayKey);
  });

  writeTypographyMixinsToFile(typographyContent);
} else {
  console.log('Category "System/typography" not found in the JSON.');
}

console.log('Processing complete.');
