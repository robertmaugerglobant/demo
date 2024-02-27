
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 27 Feb 2024 19:00:24 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
linear-gradient(135deg, #F6F1E7 0%, #3F59E4 60%, #1A31A9 90%),
linear-gradient(135deg, #F6F1E7 0%, #4CB7A3 60%, #096256 90%),
linear-gradient(135deg, #F6F1E7 0%, #6B665F 60%, #191919 90%),
linear-gradient(135deg, #FFFEFA 0%, #F6F1E7 60%, #E8DCC7 90%),
linear-gradient(135deg, #191919 5%, #4016A1 30%, #3F59E4 50%, #F2AC84 70%, #F6F1E7 95%),
#B6C9FF,
#3F59E4,
#1A31A9,
#B1E4DE,
#4CB7A3,
#096256,
#FFFEFA,
#F6F1E7,
#E8DCC7,
#AFABA1,
#6B665F,
#191919,
#B59DFC,
#7649F2,
#4016A1,
#F4D594,
#EF9B05,
#744E00,
#F2AC84,
#E27133,
#763101,
#8FC88A,
#149750,
#0F5C34,
#B59DFC,
#B59DFC,
#B59DFC
    ];
  });

  return colorArray;
}

@end
