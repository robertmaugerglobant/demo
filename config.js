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
     let fileName = filePath.replace(/^.*[\\/]/, '');
     let myArray = fileName.split(".");
     myArray = myArray[0];
     myArray = myArray.split(" ").join("");;
     let pathParts; 
      if(filePath.includes("Brand Base") 
      || filePath.includes("Brand Dim Alt") 
      || filePath.includes("Brand Dim")
      || filePath.includes("Brand Mid") 
      || filePath.includes("Primary Base") 
      || filePath.includes("Primary Base") 
      || fileName === 'large.json' 
      || fileName === 'medium.json' 
      || fileName === 'small.json' 
      || fileName === 'x-large.json' 
      || fileName === 'x-small.json' 
      || fileName === 'xx-large.json' 
      || fileName === 'xx-small.json'){
        pathParts = myArray + "-"
      }

      else{
        pathParts = ""
      }

      const output = {};

      for (const key in object) {
        if (object.hasOwnProperty(key) ) {
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
         "format": "scss/variables",
         "options": {
          outputReferences: false
        }
       }]
     }
     ,
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