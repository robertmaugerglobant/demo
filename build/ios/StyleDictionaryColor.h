
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Fri, 23 Feb 2024 04:22:24 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseGrayLight,
ColorBaseGrayMedium,
ColorBaseGrayDark,
ColorBaseRed,
ColorBaseGreen,
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary,
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
ColorBrandSecondaryGreenForest
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
