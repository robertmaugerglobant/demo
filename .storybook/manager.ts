import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    sidebar: {
        showRoots: true,
    },
    theme: create({ 
        base: "light",
        brandTitle: "Okta Design System",
        brandUrl: "https://www.okta.com",
        brandImage: "../stories/assets/okta_logo.svg",
        brandTarget: '_self',
    }),
});