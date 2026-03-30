import { core } from "./core";

export const semantic = {
    colors: {
        primary: core.colors.blue500,
        primaryHover: core.colors.blue600,
        textPrimary: core.colors.gray900,
        textOnPrimary: core.colors.white,
    },
} as const;
