import StyleDictionary from "style-dictionary-utils";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
    parsers: [{
    pattern: /\.json$/,
    parse: ({contents, filePath}) => {

    try {
      const object = JSON.parse(contents);
      console.log(filePath);
      
      let pathParts;
      if(filePath.includes("Brand Base")){
        pathParts = "bran-base-"
      }
      else if(filePath.includes("Brand Dim Alt")){
        pathParts = "brand-base-alt-"
      }
      else if(filePath.includes("Brand Dim")){
        pathParts = "brand-dim-"
      }
      else if(filePath.includes("Brand Mid")){
        pathParts = "brand-mid-"
      }
      else if(filePath.includes("Primary Base")){
        pathParts = "primary-base-"
      }
// -=-=-=-=-=-=
else if(filePath.includes("large")){
  pathParts = "large-"
}
else if(filePath.includes("medium")){
  pathParts = "medium-"
}
else if(filePath.includes("small")){
  console.log('SMALL');
  pathParts = "small-"
}
else if(filePath.includes("x/-large")){
  console.log('X LARGE');
  pathParts = "x-large-"
}
else if(filePath.includes("x-small")){
  pathParts = "x-small-"
}
else if(filePath.includes("xx-large")){
  pathParts = "xx-large-"
}
else if(filePath.includes("xx-small")){
  pathParts = "xx-small-"
}




// -=-=-=-=-=



      else{
        pathParts = ""
      }

      const output = {};

      for (const key in object) {
        if (object.hasOwnProperty(key) && !filePath.includes("box-shadow") ) {
          console.log(key);
          const element = object[key];
          output[`${pathParts}${key}`] = element;
        }
      }
      return output;
      
    } catch (error) {
      console.log(error);
    }
    }
   }],
   "source": ["tokens/**/*.json"],
   "platforms": {
     "scss": {
       "transformGroup": "scss",
       "buildPath": "build/scss/",
       "files": [{
         "destination": "_variables.scss",
         "format": "scss/variables"
       }]
     },
     "android": {
       "transformGroup": "android",
       "buildPath": "build/android/",
       "files": [{
         "destination": "font_dimens.xml",
         "format": "android/fontDimens"
       },{
         "destination": "colors.xml",
         "format": "android/colors"
       }]
     },
     "compose": {
       "transformGroup": "compose",
       "buildPath": "build/compose/",
       "files": [{
         "destination": "StyleDictionaryColor.kt",
         "format": "compose/object",
         "className": "StyleDictionaryColor",
         "packageName": "StyleDictionaryColor",
         "filter": {
           "attributes": {
             "category": "color"
           }
         }
       },{
         "destination": "StyleDictionarySize.kt",
         "format": "compose/object",
         "className": "StyleDictionarySize",
         "packageName": "StyleDictionarySize",
         "type": "float",
         "filter": {
           "attributes": {
             "category": "size"
           }
         }
       }]
     },
     "ios": {
       "transformGroup": "ios",
       "buildPath": "build/ios/",
       "files": [{
         "destination": "StyleDictionaryColor.h",
         "format": "ios/colors.h",
         "className": "StyleDictionaryColor",
         "type": "StyleDictionaryColorName",
         "filter": {
           "attributes": {
             "category": "color"
           }
         }
       },{
         "destination": "StyleDictionaryColor.m",
         "format": "ios/colors.m",
         "className": "StyleDictionaryColor",
         "type": "StyleDictionaryColorName",
         "filter": {
           "attributes": {
             "category": "color"
           }
         }
       },{
         "destination": "StyleDictionarySize.h",
         "format": "ios/static.h",
         "className": "StyleDictionarySize",
         "type": "float",
         "filter": {
           "attributes": {
             "category": "size"
           }
         }
       },{
         "destination": "StyleDictionarySize.m",
         "format": "ios/static.m",
         "className": "StyleDictionarySize",
         "type": "float",
         "filter": {
           "attributes": {
             "category": "size"
           }
         }
       }]
     },
     "ios-swift": {
       "transformGroup": "ios-swift",
       "buildPath": "build/ios-swift/",
       "files": [{
         "destination": "StyleDictionary+Class.swift",
         "format": "ios-swift/class.swift",
         "className": "StyleDictionaryClass",
         "filter": {}
       },{
         "destination": "StyleDictionary+Enum.swift",
         "format": "ios-swift/enum.swift",
         "className": "StyleDictionaryEnum",
         "filter": {}
       },{
         "destination": "StyleDictionary+Struct.swift",
         "format": "ios-swift/any.swift",
         "className": "StyleDictionaryStruct",
         "filter": {},
         "options": {
           "imports": "SwiftUI",
           "objectType": "struct",
           "accessControl": "internal"
         }
       }]
     },
     "ios-swift-separate-enums": {
       "transformGroup": "ios-swift-separate",
       "buildPath": "build/ios-swift/",
       "files": [{
         "destination": "StyleDictionaryColor.swift",
         "format": "ios-swift/enum.swift",
         "className": "StyleDictionaryColor",
         "filter": {
           "attributes": {
             "category": "color"
           }
         }
       },{
         "destination": "StyleDictionarySize.swift",
         "format": "ios-swift/enum.swift",
         "className": "StyleDictionarySize",
         "filter": {
           "attributes": {
             "category": "size"
           }
         }
       }]
     }
   }
};



const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();