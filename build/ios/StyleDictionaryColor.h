
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 15 Feb 2024 03:32:25 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorSurfaceLight,
ColorSurfaceBase,
ColorSurfaceMid,
ColorSurfaceDim,
ColorSurfaceGradient,
ColorBorderPrimary,
ColorContentPrimary,
ColorContentSecondary,
ColorActionBase,
ColorActionAccent,
ColorActionHover,
ColorActionFocus,
ColorActionActive,
ColorActionFocusRing,
ColorActionDisabled,
ColorActionLinkDisabled,
ColorFormBase,
ColorFormBackground,
ColorFormAccent,
ColorFormHover,
ColorFormFocus,
ColorFormFocusRing,
ColorFormError,
ColorFormErrorFocusRing,
ColorFormDisabled,
ColorBoxShadowBase,
ColorBoxShadowShade,
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
