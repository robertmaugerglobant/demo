
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 27 Feb 2024 23:12:03 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorGradientBlue,
ColorGradientTeal,
ColorGradientCarbon,
ColorGradientCream,
ColorGradientDevx,
ColorBrandPrimaryBlueCloud,
ColorBrandPrimaryBlueSky,
ColorBrandPrimaryBlueCobalt,
ColorBrandPrimaryTealTurquoise,
ColorBrandPrimaryTealSeafoam,
ColorBrandPrimaryTealOcean,
ColorBrandPrimaryNeutralSnow,
ColorBrandPrimaryNeutralCream,
ColorBrandPrimaryNeutralSand,
ColorBrandPrimaryNeutralGravel,
ColorBrandPrimaryNeutralSlate,
ColorBrandPrimaryNeutralCarbon,
ColorBrandSecondaryPurpleLilac,
ColorBrandSecondaryPurpleViolet,
ColorBrandSecondaryPurpleEggplant,
ColorBrandSecondaryAmberWheat,
ColorBrandSecondaryAmberGoldenrod,
ColorBrandSecondaryAmberWalnut,
ColorBrandSecondaryOrangeMelon,
ColorBrandSecondaryOrangeTangerine,
ColorBrandSecondaryOrangeClay,
ColorBrandSecondaryGreenPistachio,
ColorBrandSecondaryGreenEmerald,
ColorBrandSecondaryGreenForest,
ColorContentPrimaryInverse,
ColorBoxShadowShade,
ColorBoxShadowBase
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
