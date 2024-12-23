(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/14286_@sanity_ui_dist_4a9f88._.js", {

"[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/_chunks-es/getTheme_v2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultThemeConfig": (()=>defaultThemeConfig),
    "getTheme_v2": (()=>getTheme_v2),
    "themeColor_v0_v2": (()=>themeColor_v0_v2)
});
const defaultThemeConfig = {
    _version: 2,
    avatar: {
        sizes: [
            {
                distance: -4,
                size: 19
            },
            {
                distance: -4,
                size: 25
            },
            {
                distance: -8,
                size: 33
            },
            {
                distance: -12,
                size: 49
            }
        ],
        focusRing: {
            offset: 1,
            width: 1
        }
    },
    button: {
        textWeight: "medium",
        border: {
            width: 1
        },
        focusRing: {
            offset: -1,
            width: 1
        }
    },
    card: {
        border: {
            width: 1
        },
        focusRing: {
            offset: -1,
            width: 1
        },
        shadow: {
            outline: 0.5
        }
    },
    container: [
        320,
        640,
        960,
        1280,
        1600,
        1920
    ],
    media: [
        360,
        600,
        900,
        1200,
        1800,
        2400
    ],
    layer: {
        dialog: {
            zOffset: 600
        },
        popover: {
            zOffset: 400
        },
        tooltip: {
            zOffset: 200
        }
    },
    radius: [
        0,
        1,
        3,
        6,
        9,
        12,
        21
    ],
    shadow: [
        null,
        {
            umbra: [
                0,
                0,
                0,
                0
            ],
            penumbra: [
                0,
                0,
                0,
                0
            ],
            ambient: [
                0,
                0,
                0,
                0
            ]
        },
        {
            umbra: [
                0,
                3,
                5,
                -2
            ],
            penumbra: [
                0,
                6,
                10,
                0
            ],
            ambient: [
                0,
                1,
                18,
                1
            ]
        },
        {
            umbra: [
                0,
                7,
                8,
                -4
            ],
            penumbra: [
                0,
                12,
                17,
                2
            ],
            ambient: [
                0,
                5,
                22,
                4
            ]
        },
        {
            umbra: [
                0,
                9,
                11,
                -5
            ],
            penumbra: [
                0,
                18,
                28,
                2
            ],
            ambient: [
                0,
                7,
                34,
                6
            ]
        },
        {
            umbra: [
                0,
                11,
                15,
                -7
            ],
            penumbra: [
                0,
                24,
                38,
                3
            ],
            ambient: [
                0,
                9,
                46,
                8
            ]
        }
    ],
    space: [
        0,
        4,
        8,
        12,
        20,
        32,
        52,
        84,
        136,
        220
    ],
    input: {
        border: {
            width: 1
        },
        checkbox: {
            size: 17,
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        radio: {
            size: 17,
            markSize: 9,
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        switch: {
            width: 25,
            height: 17,
            padding: 5,
            transitionDurationMs: 150,
            transitionTimingFunction: "ease-out",
            focusRing: {
                offset: 1,
                width: 1
            }
        },
        select: {
            focusRing: {
                offset: -1,
                width: 1
            }
        },
        text: {
            focusRing: {
                offset: -1,
                width: 1
            }
        }
    },
    style: {
        button: {
            root: {
                transition: "background-color 100ms,border-color 100ms,color 100ms"
            }
        }
    }
};
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$1 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b))__propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    return a;
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b));
const cache$1 = /* @__PURE__ */ new WeakMap();
function themeColor_v0_v2(color_v0) {
    var _a, _b, _c;
    const cached_v2 = cache$1.get(color_v0);
    if (cached_v2) return cached_v2;
    const base = stateThemeColor_v0_v2(color_v0, color_v0.card.enabled), color_v2 = {
        _blend: color_v0._blend || (color_v0.dark ? "screen" : "multiply"),
        _dark: color_v0.dark,
        accent: base.accent,
        avatar: base.avatar,
        backdrop: color_v0.base.shadow.ambient,
        badge: base.badge,
        bg: color_v0.base.bg,
        border: color_v0.base.border,
        button: {
            default: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.default),
            ghost: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.ghost),
            bleed: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.bleed)
        },
        code: base.code,
        fg: color_v0.base.fg,
        focusRing: color_v0.base.focusRing,
        icon: base.muted.fg,
        input: {
            default: inputStatesThemeColor_v0_v2(color_v0.input.default),
            invalid: inputStatesThemeColor_v0_v2(color_v0.input.invalid)
        },
        kbd: base.kbd,
        link: base.link,
        muted: __spreadProps$1(__spreadValues$1({}, base.muted), {
            bg: ((_a = color_v0.selectable) == null ? void 0 : _a.default.enabled.bg2) || color_v0.base.bg
        }),
        selectable: stateTonesThemeColor_v0_v2(color_v0, color_v0.selectable || color_v0.muted),
        shadow: color_v0.base.shadow,
        skeleton: {
            from: ((_b = color_v0.skeleton) == null ? void 0 : _b.from) || color_v0.base.border,
            to: ((_c = color_v0.skeleton) == null ? void 0 : _c.to) || color_v0.base.border
        },
        syntax: color_v0.syntax
    };
    return cache$1.set(color_v0, color_v2), color_v2;
}
function stateTonesThemeColor_v0_v2(v0, t) {
    return {
        default: {
            enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
            selected: stateThemeColor_v0_v2(v0, t.default.selected),
            disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
        },
        neutral: {
            enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
            selected: stateThemeColor_v0_v2(v0, t.default.selected),
            disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
        },
        primary: {
            enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
            selected: stateThemeColor_v0_v2(v0, t.primary.selected),
            disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
        },
        suggest: {
            enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
            selected: stateThemeColor_v0_v2(v0, t.primary.selected),
            disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
        },
        positive: {
            enabled: stateThemeColor_v0_v2(v0, t.positive.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.positive.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.positive.pressed),
            selected: stateThemeColor_v0_v2(v0, t.positive.selected),
            disabled: stateThemeColor_v0_v2(v0, t.positive.disabled)
        },
        caution: {
            enabled: stateThemeColor_v0_v2(v0, t.caution.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.caution.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.caution.pressed),
            selected: stateThemeColor_v0_v2(v0, t.caution.selected),
            disabled: stateThemeColor_v0_v2(v0, t.caution.disabled)
        },
        critical: {
            enabled: stateThemeColor_v0_v2(v0, t.critical.enabled),
            hovered: stateThemeColor_v0_v2(v0, t.critical.hovered),
            pressed: stateThemeColor_v0_v2(v0, t.critical.pressed),
            selected: stateThemeColor_v0_v2(v0, t.critical.selected),
            disabled: stateThemeColor_v0_v2(v0, t.critical.disabled)
        }
    };
}
function stateThemeColor_v0_v2(v0, state) {
    var _a, _b;
    return __spreadProps$1(__spreadValues$1({}, state), {
        avatar: {
            gray: {
                bg: v0.spot.gray,
                fg: v0.base.bg
            },
            blue: {
                bg: v0.spot.blue,
                fg: v0.base.bg
            },
            purple: {
                bg: v0.spot.purple,
                fg: v0.base.bg
            },
            magenta: {
                bg: v0.spot.magenta,
                fg: v0.base.bg
            },
            red: {
                bg: v0.spot.red,
                fg: v0.base.bg
            },
            orange: {
                bg: v0.spot.orange,
                fg: v0.base.bg
            },
            yellow: {
                bg: v0.spot.yellow,
                fg: v0.base.bg
            },
            green: {
                bg: v0.spot.green,
                fg: v0.base.bg
            },
            cyan: {
                bg: v0.spot.cyan,
                fg: v0.base.bg
            }
        },
        badge: {
            default: {
                bg: v0.muted.default.enabled.bg,
                fg: v0.muted.default.enabled.fg,
                dot: v0.muted.default.enabled.muted.fg,
                icon: v0.muted.default.enabled.muted.fg
            },
            neutral: {
                bg: v0.muted.transparent.enabled.bg,
                fg: v0.muted.transparent.enabled.fg,
                dot: v0.muted.transparent.enabled.muted.fg,
                icon: v0.muted.transparent.enabled.muted.fg
            },
            primary: {
                bg: v0.muted.primary.enabled.bg,
                fg: v0.muted.primary.enabled.fg,
                dot: v0.muted.primary.enabled.muted.fg,
                icon: v0.muted.primary.enabled.muted.fg
            },
            suggest: {
                bg: v0.muted.primary.enabled.bg,
                fg: v0.muted.primary.enabled.fg,
                dot: v0.muted.primary.enabled.muted.fg,
                icon: v0.muted.primary.enabled.muted.fg
            },
            positive: {
                bg: v0.muted.positive.enabled.bg,
                fg: v0.muted.positive.enabled.fg,
                dot: v0.muted.positive.enabled.muted.fg,
                icon: v0.muted.positive.enabled.muted.fg
            },
            caution: {
                bg: v0.muted.caution.enabled.bg,
                fg: v0.muted.caution.enabled.fg,
                dot: v0.muted.caution.enabled.muted.fg,
                icon: v0.muted.caution.enabled.muted.fg
            },
            critical: {
                bg: v0.muted.critical.enabled.bg,
                fg: v0.muted.critical.enabled.fg,
                dot: v0.muted.critical.enabled.muted.fg,
                icon: v0.muted.critical.enabled.muted.fg
            }
        },
        kbd: {
            bg: v0.muted.default.enabled.bg,
            fg: v0.muted.default.enabled.fg,
            border: v0.muted.default.enabled.border
        },
        muted: __spreadProps$1(__spreadValues$1({}, v0.muted.default.enabled.muted), {
            bg: state.bg2 || state.bg
        }),
        skeleton: {
            from: ((_a = state.skeleton) == null ? void 0 : _a.from) || state.border,
            to: ((_b = state.skeleton) == null ? void 0 : _b.to) || state.border
        }
    });
}
function inputStatesThemeColor_v0_v2(states) {
    return {
        enabled: inputStateThemeColor_v0_v2(states.enabled),
        disabled: inputStateThemeColor_v0_v2(states.disabled),
        readOnly: inputStateThemeColor_v0_v2(states.readOnly),
        hovered: inputStateThemeColor_v0_v2(states.hovered)
    };
}
function inputStateThemeColor_v0_v2(state) {
    return {
        bg: state.bg,
        border: state.border,
        fg: state.fg,
        muted: {
            bg: state.bg2
        },
        placeholder: state.placeholder
    };
}
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
const cache = /* @__PURE__ */ new WeakMap();
function getTheme_v2(theme) {
    var _a, _b;
    if ((_a = theme.sanity.v2) != null && _a._resolved) return theme.sanity.v2;
    const cached_v2 = cache.get(theme);
    if (cached_v2) return cached_v2;
    const v2 = {
        _version: 2,
        _resolved: !0,
        avatar: __spreadValues(__spreadValues({}, defaultThemeConfig.avatar), theme.sanity.avatar),
        button: __spreadValues(__spreadValues({}, defaultThemeConfig.button), theme.sanity.button),
        card: defaultThemeConfig.card,
        color: themeColor_v0_v2(theme.sanity.color),
        container: theme.sanity.container,
        font: theme.sanity.fonts,
        input: __spreadProps(__spreadValues(__spreadValues({}, defaultThemeConfig.input), theme.sanity.input), {
            checkbox: __spreadValues(__spreadValues({}, defaultThemeConfig.input.checkbox), theme.sanity.input.checkbox),
            radio: __spreadValues(__spreadValues({}, defaultThemeConfig.input.radio), theme.sanity.input.radio),
            switch: __spreadValues(__spreadValues({}, defaultThemeConfig.input.switch), theme.sanity.input.switch)
        }),
        layer: (_b = theme.sanity.layer) != null ? _b : defaultThemeConfig.layer,
        media: theme.sanity.media,
        radius: theme.sanity.radius,
        shadow: theme.sanity.shadows,
        space: theme.sanity.space,
        style: theme.sanity.styles
    };
    return cache.set(theme, v2), v2;
}
;
 //# sourceMappingURL=getTheme_v2.mjs.map
}}),
"[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/theme.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "COLOR_CONFIG_AVATAR_COLORS": (()=>COLOR_CONFIG_AVATAR_COLORS),
    "COLOR_CONFIG_BLEND_KEYS": (()=>COLOR_CONFIG_BLEND_KEYS),
    "COLOR_CONFIG_CARD_KEYS": (()=>COLOR_CONFIG_CARD_KEYS),
    "COLOR_CONFIG_CARD_TONES": (()=>COLOR_CONFIG_CARD_TONES),
    "COLOR_CONFIG_INPUT_MODES": (()=>COLOR_CONFIG_INPUT_MODES),
    "COLOR_CONFIG_INPUT_STATES": (()=>COLOR_CONFIG_INPUT_STATES),
    "COLOR_CONFIG_STATES": (()=>COLOR_CONFIG_STATES),
    "COLOR_CONFIG_STATE_KEYS": (()=>COLOR_CONFIG_STATE_KEYS),
    "COLOR_CONFIG_STATE_TONES": (()=>COLOR_CONFIG_STATE_TONES),
    "THEME_COLOR_AVATAR_COLORS": (()=>THEME_COLOR_AVATAR_COLORS),
    "THEME_COLOR_BLEND_MODES": (()=>THEME_COLOR_BLEND_MODES),
    "THEME_COLOR_BUTTON_MODES": (()=>THEME_COLOR_BUTTON_MODES),
    "THEME_COLOR_CARD_TONES": (()=>THEME_COLOR_CARD_TONES),
    "THEME_COLOR_INPUT_MODES": (()=>THEME_COLOR_INPUT_MODES),
    "THEME_COLOR_INPUT_STATES": (()=>THEME_COLOR_INPUT_STATES),
    "THEME_COLOR_SCHEMES": (()=>THEME_COLOR_SCHEMES),
    "THEME_COLOR_STATES": (()=>THEME_COLOR_STATES),
    "THEME_COLOR_STATE_TONES": (()=>THEME_COLOR_STATE_TONES),
    "buildTheme": (()=>buildTheme),
    "createColorTheme": (()=>createColorTheme),
    "getContrastRatio": (()=>getContrastRatio),
    "getScopedTheme": (()=>getScopedTheme),
    "hexToRgb": (()=>hexToRgb),
    "hslToRgb": (()=>hslToRgb),
    "isColorBlendModeValue": (()=>isColorBlendModeValue),
    "isColorButtonMode": (()=>isColorButtonMode),
    "isColorConfigBaseKey": (()=>isColorConfigBaseKey),
    "isColorConfigBaseTone": (()=>isColorConfigBaseTone),
    "isColorConfigBlendKey": (()=>isColorConfigBlendKey),
    "isColorConfigStateKey": (()=>isColorConfigStateKey),
    "isColorConfigStateTone": (()=>isColorConfigStateTone),
    "isColorHueKey": (()=>isColorHueKey),
    "isColorOpacityValue": (()=>isColorOpacityValue),
    "isColorTintKey": (()=>isColorTintKey),
    "isColorTokenValue": (()=>isColorTokenValue),
    "isColorValue": (()=>isColorValue),
    "is_v0": (()=>is_v0),
    "is_v2": (()=>is_v2),
    "mix": (()=>mix),
    "multiply": (()=>multiply),
    "parseColor": (()=>parseColor),
    "parseTokenKey": (()=>parseTokenKey),
    "parseTokenValue": (()=>parseTokenValue),
    "rgbToHex": (()=>rgbToHex),
    "rgbToHsl": (()=>rgbToHsl),
    "rgba": (()=>rgba),
    "rgbaToRGBA": (()=>rgbaToRGBA),
    "screen": (()=>screen),
    "v0_v2": (()=>v0_v2),
    "v2_v0": (()=>v2_v0)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/_chunks-es/getTheme_v2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+color@3.0.6/node_modules/@sanity/color/dist/index.js [app-client] (ecmascript)");
;
;
;
function createSelectableTones(opts, base, dark, solid, muted) {
    return {
        default: _createSelectableStates(opts, base, dark, solid, muted, "default"),
        primary: _createSelectableStates(opts, base, dark, solid, muted, "primary"),
        positive: _createSelectableStates(opts, base, dark, solid, muted, "positive"),
        caution: _createSelectableStates(opts, base, dark, solid, muted, "caution"),
        critical: _createSelectableStates(opts, base, dark, solid, muted, "critical")
    };
}
function _createSelectableStates(opts, base, dark, solid, muted, tone) {
    return {
        enabled: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "enabled",
            tone
        }),
        hovered: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "hovered",
            tone
        }),
        pressed: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "pressed",
            tone
        }),
        selected: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "selected",
            tone
        }),
        disabled: opts.selectable({
            base,
            dark,
            solid,
            muted,
            state: "disabled",
            tone
        })
    };
}
function createSolidTones(opts, base, dark, name) {
    return {
        default: {
            enabled: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "default",
                name,
                state: "selected"
            })
        },
        transparent: {
            enabled: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "transparent",
                name,
                state: "selected"
            })
        },
        primary: {
            enabled: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "primary",
                name,
                state: "selected"
            })
        },
        positive: {
            enabled: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "positive",
                name,
                state: "selected"
            })
        },
        caution: {
            enabled: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "caution",
                name,
                state: "selected"
            })
        },
        critical: {
            enabled: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "enabled"
            }),
            disabled: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "disabled"
            }),
            hovered: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "hovered"
            }),
            pressed: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "pressed"
            }),
            selected: opts.solid({
                base,
                dark,
                tone: "critical",
                name,
                state: "selected"
            })
        }
    };
}
function createButtonTones(opts, base, dark, solid, muted, mode) {
    return {
        default: opts.button({
            base,
            dark,
            solid: solid.default,
            muted: muted.default,
            mode
        }),
        primary: opts.button({
            base,
            dark,
            solid: solid.primary,
            muted: muted.primary,
            mode
        }),
        positive: opts.button({
            base,
            dark,
            solid: solid.positive,
            muted: muted.positive,
            mode
        }),
        caution: opts.button({
            base,
            dark,
            solid: solid.caution,
            muted: muted.caution,
            mode
        }),
        critical: opts.button({
            base,
            dark,
            solid: solid.critical,
            muted: muted.critical,
            mode
        })
    };
}
function createButtonModes(opts, base, dark, solid, muted) {
    return {
        default: createButtonTones(opts, base, dark, solid, muted, "default"),
        ghost: createButtonTones(opts, base, dark, solid, muted, "ghost"),
        bleed: createButtonTones(opts, base, dark, solid, muted, "bleed")
    };
}
function createCardStates(opts, base, dark, name, solid, muted) {
    return {
        enabled: opts.card({
            base,
            dark,
            name,
            state: "enabled",
            solid,
            muted
        }),
        disabled: opts.card({
            base,
            dark,
            name,
            state: "disabled",
            solid,
            muted
        }),
        hovered: opts.card({
            base,
            dark,
            name,
            state: "hovered",
            solid,
            muted
        }),
        pressed: opts.card({
            base,
            dark,
            name,
            state: "pressed",
            solid,
            muted
        }),
        selected: opts.card({
            base,
            dark,
            name,
            state: "selected",
            solid,
            muted
        })
    };
}
var __defProp$8 = Object.defineProperty, __defProps$7 = Object.defineProperties, __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$8 = Object.getOwnPropertySymbols, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __propIsEnum$8 = Object.prototype.propertyIsEnumerable, __defNormalProp$8 = (obj, key, value)=>key in obj ? __defProp$8(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$8 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(b))__propIsEnum$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    return a;
}, __spreadProps$7 = (a, b)=>__defProps$7(a, __getOwnPropDescs$7(b));
const black = "hsl(0, 0%, 0%)", white = "hsl(0, 0%, 100%)", colors = {
    default: {
        lightest: "hsl(0, 0%, 95%)",
        lighter: "hsl(0, 0%, 70%)",
        light: "hsl(0, 0%, 65%)",
        base: "hsl(0, 0%, 50%)",
        dark: "hsl(0, 0%, 35%)",
        darker: "hsl(0, 0%, 20%)",
        darkest: "hsl(0, 0%, 5%)"
    },
    transparent: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    primary: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    positive: {
        lightest: "hsl(120, 100%, 95%)",
        lighter: "hsl(120, 100%, 70%)",
        light: "hsl(120, 100%, 65%)",
        base: "hsl(120, 100%, 50%)",
        dark: "hsl(120, 100%, 35%)",
        darker: "hsl(120, 100%, 20%)",
        darkest: "hsl(120, 100%, 5%)"
    },
    caution: {
        lightest: "hsl(60, 100%, 95%)",
        lighter: "hsl(60, 100%, 70%)",
        light: "hsl(60, 100%, 65%)",
        base: "hsl(60, 100%, 50%)",
        dark: "hsl(60, 100%, 35%)",
        darker: "hsl(60, 100%, 20%)",
        darkest: "hsl(60, 100%, 5%)"
    },
    critical: {
        lightest: "hsl(0, 100%, 95%)",
        lighter: "hsl(0, 100%, 70%)",
        light: "hsl(0, 100%, 65%)",
        base: "hsl(0, 100%, 50%)",
        dark: "hsl(0, 100%, 35%)",
        darker: "hsl(0, 100%, 20%)",
        darkest: "hsl(0, 100%, 5%)"
    }
}, spots = {
    gray: "hsl(0, 0%, 50%)",
    red: "hsl(0, 100%, 50%)",
    orange: "hsl(30, 100%, 50%)",
    yellow: "hsl(60, 100%, 50%)",
    green: "hsl(120, 100%, 50%)",
    cyan: "hsl(180, 100%, 50%)",
    blue: "hsl(240, 100%, 50%)",
    purple: "hsl(270, 100%, 50%)",
    magenta: "hsl(300, 100%, 50%)"
}, tones = {
    transparent: {
        bg: [
            colors.transparent.darkest,
            colors.transparent.lightest
        ],
        fg: [
            colors.transparent.lightest,
            colors.transparent.darkest
        ],
        border: [
            colors.transparent.darker,
            colors.transparent.lighter
        ],
        focusRing: [
            colors.transparent.base,
            colors.transparent.base
        ]
    },
    primary: {
        bg: [
            colors.primary.darkest,
            colors.primary.lightest
        ],
        fg: [
            colors.primary.lightest,
            colors.primary.darkest
        ],
        border: [
            colors.primary.darker,
            colors.primary.lighter
        ],
        focusRing: [
            colors.primary.base,
            colors.primary.base
        ]
    },
    positive: {
        bg: [
            colors.positive.darkest,
            colors.positive.lightest
        ],
        fg: [
            colors.positive.lightest,
            colors.positive.darkest
        ],
        border: [
            colors.positive.darker,
            colors.positive.lighter
        ],
        focusRing: [
            colors.positive.base,
            colors.positive.base
        ]
    },
    caution: {
        bg: [
            colors.caution.darkest,
            colors.caution.lightest
        ],
        fg: [
            colors.caution.lightest,
            colors.caution.darkest
        ],
        border: [
            colors.caution.darker,
            colors.caution.lighter
        ],
        focusRing: [
            colors.caution.base,
            colors.caution.base
        ]
    },
    critical: {
        bg: [
            colors.critical.darkest,
            colors.critical.lightest
        ],
        fg: [
            colors.critical.lightest,
            colors.critical.darkest
        ],
        border: [
            colors.critical.darker,
            colors.critical.lighter
        ],
        focusRing: [
            colors.critical.base,
            colors.critical.base
        ]
    }
}, defaultOpts = {
    base: ({ dark, name })=>name === "default" ? {
            bg: dark ? black : white,
            fg: dark ? white : black,
            border: dark ? colors.default.darkest : colors.default.lightest,
            focusRing: colors.primary.base,
            shadow: {
                outline: black,
                umbra: black,
                penumbra: black,
                ambient: black
            },
            skeleton: {
                from: dark ? white : black,
                to: dark ? white : black
            }
        } : {
            bg: tones[name].bg[dark ? 0 : 1],
            fg: tones[name].fg[dark ? 0 : 1],
            border: tones[name].border[dark ? 0 : 1],
            focusRing: tones[name].focusRing[dark ? 0 : 1],
            shadow: {
                outline: black,
                umbra: black,
                penumbra: black,
                ambient: black
            },
            skeleton: {
                from: dark ? white : black,
                to: dark ? white : black
            }
        },
    solid: ({ base, dark, state, tone })=>{
        const color2 = colors[tone];
        return state === "hovered" ? {
            bg: dark ? color2.light : color2.dark,
            bg2: dark ? color2.light : color2.dark,
            border: dark ? color2.lighter : color2.darker,
            fg: dark ? color2.darkest : color2.lightest,
            icon: dark ? color2.darkest : color2.lightest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        } : {
            bg: color2.base,
            bg2: color2.base,
            border: dark ? color2.light : color2.dark,
            fg: dark ? color2.darkest : color2.lightest,
            icon: dark ? color2.darkest : color2.lightest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        };
    },
    muted: ({ base, dark, state, tone })=>{
        const color2 = colors[tone];
        return state === "hovered" ? {
            bg: dark ? color2.darker : color2.lighter,
            bg2: dark ? color2.darker : color2.lighter,
            border: dark ? color2.lighter : color2.darker,
            fg: dark ? color2.lightest : color2.darkest,
            icon: dark ? color2.lightest : color2.darkest,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        } : {
            bg: dark ? color2.darkest : color2.lightest,
            bg2: dark ? color2.darkest : color2.lightest,
            border: dark ? color2.darker : color2.lighter,
            fg: dark ? color2.lighter : color2.darker,
            icon: dark ? color2.lighter : color2.darker,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        };
    },
    button: ({ base, mode, muted, solid })=>mode === "bleed" ? __spreadProps$7(__spreadValues$8({}, muted), {
            enabled: {
                bg: "transparent",
                bg2: "transparent",
                fg: muted.enabled.fg,
                icon: muted.enabled.fg,
                border: "transparent",
                muted: {
                    fg: black
                },
                accent: {
                    fg: black
                },
                link: {
                    fg: black
                },
                code: {
                    bg: black,
                    fg: black
                },
                skeleton: base.skeleton
            },
            hovered: {
                bg: muted.enabled.bg,
                bg2: muted.enabled.bg,
                fg: muted.hovered.fg,
                icon: muted.hovered.fg,
                border: "transparent",
                muted: {
                    fg: black
                },
                accent: {
                    fg: black
                },
                link: {
                    fg: black
                },
                code: {
                    bg: black,
                    fg: black
                },
                skeleton: base.skeleton
            }
        }) : mode === "ghost" ? __spreadProps$7(__spreadValues$8({}, solid), {
            enabled: muted.enabled
        }) : solid,
    card: ({ base })=>({
            bg: black,
            bg2: black,
            fg: black,
            icon: black,
            border: black,
            muted: {
                fg: black
            },
            accent: {
                fg: black
            },
            link: {
                fg: black
            },
            code: {
                bg: black,
                fg: black
            },
            skeleton: base.skeleton
        }),
    input: ()=>({
            bg: black,
            bg2: black,
            fg: black,
            border: black,
            placeholder: black
        }),
    selectable: ({ muted, state, tone })=>muted[tone][state],
    spot: ({ key })=>spots[key],
    syntax: ()=>({
            atrule: black,
            attrName: black,
            attrValue: black,
            attribute: black,
            boolean: black,
            builtin: black,
            cdata: black,
            char: black,
            class: black,
            className: black,
            comment: black,
            constant: black,
            deleted: black,
            doctype: black,
            entity: black,
            function: black,
            hexcode: black,
            id: black,
            important: black,
            inserted: black,
            keyword: black,
            number: black,
            operator: black,
            prolog: black,
            property: black,
            pseudoClass: black,
            pseudoElement: black,
            punctuation: black,
            regex: black,
            selector: black,
            string: black,
            symbol: black,
            tag: black,
            unit: black,
            url: black,
            variable: black
        })
};
function createInputModes(opts, base, dark, solid, muted) {
    return {
        default: {
            enabled: opts.input({
                base,
                dark,
                mode: "default",
                state: "enabled",
                solid: solid.default,
                muted: muted.default
            }),
            disabled: opts.input({
                base,
                dark,
                mode: "default",
                state: "disabled",
                solid: solid.default,
                muted: muted.default
            }),
            hovered: opts.input({
                base,
                dark,
                mode: "default",
                state: "hovered",
                solid: solid.default,
                muted: muted.default
            }),
            readOnly: opts.input({
                base,
                dark,
                mode: "default",
                state: "readOnly",
                solid: solid.default,
                muted: muted.default
            })
        },
        invalid: {
            enabled: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "enabled",
                solid: solid.default,
                muted: muted.default
            }),
            disabled: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "disabled",
                solid: solid.default,
                muted: muted.default
            }),
            hovered: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "hovered",
                solid: solid.default,
                muted: muted.default
            }),
            readOnly: opts.input({
                base,
                dark,
                mode: "invalid",
                state: "readOnly",
                solid: solid.default,
                muted: muted.default
            })
        }
    };
}
function createMutedTones(opts, base, dark, name) {
    return {
        default: {
            enabled: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "default",
                name,
                state: "selected"
            })
        },
        transparent: {
            enabled: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "transparent",
                name,
                state: "selected"
            })
        },
        primary: {
            enabled: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "primary",
                name,
                state: "selected"
            })
        },
        positive: {
            enabled: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "positive",
                name,
                state: "selected"
            })
        },
        caution: {
            enabled: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "caution",
                name,
                state: "selected"
            })
        },
        critical: {
            enabled: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "enabled"
            }),
            disabled: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "disabled"
            }),
            hovered: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "hovered"
            }),
            pressed: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "pressed"
            }),
            selected: opts.muted({
                base,
                dark,
                tone: "critical",
                name,
                state: "selected"
            })
        }
    };
}
function createSpot(opts, base, dark) {
    return {
        gray: opts.spot({
            base,
            dark,
            key: "gray"
        }),
        blue: opts.spot({
            base,
            dark,
            key: "blue"
        }),
        purple: opts.spot({
            base,
            dark,
            key: "purple"
        }),
        magenta: opts.spot({
            base,
            dark,
            key: "magenta"
        }),
        red: opts.spot({
            base,
            dark,
            key: "red"
        }),
        orange: opts.spot({
            base,
            dark,
            key: "orange"
        }),
        yellow: opts.spot({
            base,
            dark,
            key: "yellow"
        }),
        green: opts.spot({
            base,
            dark,
            key: "green"
        }),
        cyan: opts.spot({
            base,
            dark,
            key: "cyan"
        })
    };
}
var __defProp$7 = Object.defineProperty, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$7 = (obj, key, value)=>key in obj ? __defProp$7(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$7 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(b))__propIsEnum$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    return a;
};
function createColorTheme(partialOpts = {}) {
    const builders = __spreadValues$7(__spreadValues$7({}, defaultOpts), partialOpts);
    return {
        light: _createColorScheme(builders, !1),
        dark: _createColorScheme(builders, !0)
    };
}
function _createColorScheme(opts, dark) {
    return {
        default: _createColor(opts, dark, "default"),
        transparent: _createColor(opts, dark, "transparent"),
        primary: _createColor(opts, dark, "primary"),
        positive: _createColor(opts, dark, "positive"),
        caution: _createColor(opts, dark, "caution"),
        critical: _createColor(opts, dark, "critical")
    };
}
function _createColor(opts, dark, name) {
    const base = opts.base({
        dark,
        name
    }), solid = createSolidTones(opts, base, dark, name), muted = createMutedTones(opts, base, dark, name);
    return {
        base,
        button: createButtonModes(opts, base, dark, solid, muted),
        card: createCardStates(opts, base, dark, name, solid, muted),
        dark,
        input: createInputModes(opts, base, dark, solid, muted),
        selectable: createSelectableTones(opts, base, dark, solid, muted),
        spot: createSpot(opts, base, dark),
        syntax: opts.syntax({
            base,
            dark
        }),
        solid,
        muted
    };
}
const defaultThemeFonts = {
    code: {
        family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
        weights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        sizes: [
            {
                ascenderHeight: 4,
                descenderHeight: 4,
                fontSize: 10,
                iconSize: 17,
                lineHeight: 15,
                letterSpacing: 0
            },
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 21,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 16,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 19,
                iconSize: 29,
                lineHeight: 27,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 22,
                iconSize: 33,
                lineHeight: 31,
                letterSpacing: 0
            }
        ]
    },
    heading: {
        family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
        weights: {
            regular: 700,
            medium: 800,
            semibold: 900,
            bold: 900
        },
        sizes: [
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 17,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 16,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 21,
                iconSize: 33,
                lineHeight: 29,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 27,
                iconSize: 41,
                lineHeight: 35,
                letterSpacing: 0
            },
            {
                ascenderHeight: 9.5,
                descenderHeight: 8.5,
                fontSize: 33,
                iconSize: 49,
                lineHeight: 41,
                letterSpacing: 0
            },
            {
                ascenderHeight: 10.5,
                descenderHeight: 9.5,
                fontSize: 38,
                iconSize: 53,
                lineHeight: 47,
                letterSpacing: 0
            }
        ]
    },
    label: {
        family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',
        weights: {
            regular: 600,
            medium: 700,
            semibold: 800,
            bold: 900
        },
        sizes: [
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 8.1,
                iconSize: 13,
                lineHeight: 10,
                letterSpacing: 0.5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 9.5,
                iconSize: 15,
                lineHeight: 11,
                letterSpacing: 0.5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 10.8,
                iconSize: 17,
                lineHeight: 12,
                letterSpacing: 0.5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 12.25,
                iconSize: 19,
                lineHeight: 13,
                letterSpacing: 0.5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 13.6,
                iconSize: 21,
                lineHeight: 14,
                letterSpacing: 0.5
            },
            {
                ascenderHeight: 2,
                descenderHeight: 2,
                fontSize: 15,
                iconSize: 23,
                lineHeight: 15,
                letterSpacing: 0.5
            }
        ]
    },
    text: {
        family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
        weights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        sizes: [
            {
                ascenderHeight: 4,
                descenderHeight: 4,
                fontSize: 10,
                iconSize: 17,
                lineHeight: 15,
                letterSpacing: 0
            },
            {
                ascenderHeight: 5,
                descenderHeight: 5,
                fontSize: 13,
                iconSize: 21,
                lineHeight: 19,
                letterSpacing: 0
            },
            {
                ascenderHeight: 6,
                descenderHeight: 6,
                fontSize: 15,
                iconSize: 25,
                lineHeight: 23,
                letterSpacing: 0
            },
            {
                ascenderHeight: 7,
                descenderHeight: 7,
                fontSize: 18,
                iconSize: 29,
                lineHeight: 27,
                letterSpacing: 0
            },
            {
                ascenderHeight: 8,
                descenderHeight: 8,
                fontSize: 21,
                iconSize: 33,
                lineHeight: 31,
                letterSpacing: 0
            }
        ]
    }
};
function is_v0(themeProp) {
    return themeProp._version === 0;
}
function is_v2(themeProp) {
    return themeProp._version === 2;
}
var __defProp$6 = Object.defineProperty, __defProps$6 = Object.defineProperties, __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __defNormalProp$6 = (obj, key, value)=>key in obj ? __defProp$6(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$6 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(b))__propIsEnum$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    return a;
}, __spreadProps$6 = (a, b)=>__defProps$6(a, __getOwnPropDescs$6(b));
const cache$2 = /* @__PURE__ */ new WeakMap();
function v0_v2(v0) {
    if (v0.v2) return v0.v2;
    const cached_v2 = cache$2.get(v0);
    if (cached_v2) return cached_v2;
    const { avatar, button, color: color2, container, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    focusRing: _unused_focusRing, fonts: font, input, layer, media, radius, shadows: shadow, space, styles: style } = v0, v2 = {
        _version: 2,
        avatar: __spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].avatar), avatar),
        button: __spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].button), button),
        card: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].card,
        color: {
            light: {
                transparent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.transparent),
                default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.default),
                neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.transparent),
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.primary),
                suggest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.primary),
                positive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.positive),
                caution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.caution),
                critical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.light.critical)
            },
            dark: {
                transparent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.transparent),
                default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.default),
                neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.transparent),
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.primary),
                suggest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.primary),
                positive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.positive),
                caution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.caution),
                critical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColor_v0_v2"])(color2.dark.critical)
            }
        },
        container,
        font,
        input: __spreadProps$6(__spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].input), input), {
            checkbox: __spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].input.checkbox), input.checkbox),
            radio: __spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].input.radio), input.radio),
            switch: __spreadValues$6(__spreadValues$6({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].input.switch), input.switch)
        }),
        layer: layer != null ? layer : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].layer,
        media,
        radius,
        shadow,
        space,
        style
    };
    return cache$2.set(v0, v2), v2;
}
var __defProp$5 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key, value)=>key in obj ? __defProp$5(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(b))__propIsEnum$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
}, __spreadProps$5 = (a, b)=>__defProps$5(a, __getOwnPropDescs$5(b));
const cache$1 = /* @__PURE__ */ new WeakMap();
function v2_v0(v2) {
    const cachedTheme = cache$1.get(v2);
    if (cachedTheme) return cachedTheme;
    const { avatar, button, color: color2, container, font: fonts, input, media, radius, shadow: shadows, space, style: styles } = v2;
    return {
        _version: 0,
        avatar,
        button,
        container,
        color: {
            light: {
                transparent: themeColor_v2_v0(color2.light.transparent),
                default: themeColor_v2_v0(color2.light.default),
                primary: themeColor_v2_v0(color2.light.primary),
                positive: themeColor_v2_v0(color2.light.positive),
                caution: themeColor_v2_v0(color2.light.caution),
                critical: themeColor_v2_v0(color2.light.critical)
            },
            dark: {
                transparent: themeColor_v2_v0(color2.dark.transparent),
                default: themeColor_v2_v0(color2.dark.default),
                primary: themeColor_v2_v0(color2.dark.primary),
                positive: themeColor_v2_v0(color2.dark.positive),
                caution: themeColor_v2_v0(color2.dark.caution),
                critical: themeColor_v2_v0(color2.dark.critical)
            }
        },
        focusRing: input.text.focusRing,
        fonts,
        input,
        media,
        radius,
        shadows,
        space,
        styles,
        v2
    };
}
function themeColor_v2_v0(color_v2) {
    return {
        base: {
            bg: color_v2.bg,
            fg: color_v2.fg,
            border: color_v2.border,
            focusRing: color_v2.focusRing,
            shadow: color_v2.shadow
        },
        button: color_v2.button,
        card: color_v2.selectable.default,
        dark: color_v2._dark,
        input: {
            default: inputStatesThemeColor_v2_v0(color_v2.input.default),
            invalid: inputStatesThemeColor_v2_v0(color_v2.input.invalid)
        },
        muted: __spreadProps$5(__spreadValues$5({}, color_v2.button.ghost), {
            transparent: color_v2.button.ghost.default
        }),
        solid: __spreadProps$5(__spreadValues$5({}, color_v2.button.default), {
            transparent: color_v2.button.default.default
        }),
        selectable: color_v2.selectable,
        spot: {
            gray: color_v2.avatar.gray.bg,
            blue: color_v2.avatar.blue.bg,
            purple: color_v2.avatar.purple.bg,
            magenta: color_v2.avatar.magenta.bg,
            red: color_v2.avatar.red.bg,
            orange: color_v2.avatar.orange.bg,
            yellow: color_v2.avatar.yellow.bg,
            green: color_v2.avatar.green.bg,
            cyan: color_v2.avatar.cyan.bg
        },
        syntax: color_v2.syntax
    };
}
function inputStatesThemeColor_v2_v0(t) {
    return {
        enabled: inputStateThemeColor_v2_v0(t.enabled),
        disabled: inputStateThemeColor_v2_v0(t.disabled),
        readOnly: inputStateThemeColor_v2_v0(t.readOnly),
        hovered: inputStateThemeColor_v2_v0(t.hovered)
    };
}
function inputStateThemeColor_v2_v0(t) {
    return {
        bg: t.bg,
        bg2: t.muted.bg,
        border: t.border,
        fg: t.fg,
        placeholder: t.placeholder
    };
}
const THEME_COLOR_SCHEMES = [
    "light",
    "dark"
], THEME_COLOR_BLEND_MODES = [
    "multiply",
    "screen"
], THEME_COLOR_CARD_TONES = [
    "transparent",
    "default",
    "neutral",
    "primary",
    // deprecated
    "suggest",
    "positive",
    "caution",
    "critical"
], THEME_COLOR_STATE_TONES = [
    "default",
    "neutral",
    "primary",
    // deprecated
    "suggest",
    "positive",
    "caution",
    "critical"
], THEME_COLOR_STATES = [
    "enabled",
    "hovered",
    "pressed",
    "selected",
    "disabled"
], THEME_COLOR_BUTTON_MODES = [
    "default",
    "ghost",
    "bleed"
], THEME_COLOR_INPUT_MODES = [
    "default",
    "invalid"
], THEME_COLOR_INPUT_STATES = [
    "enabled",
    "hovered",
    "readOnly",
    "disabled"
], THEME_COLOR_AVATAR_COLORS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"];
function isColorBlendModeValue(str) {
    return THEME_COLOR_BLEND_MODES.includes(str);
}
function isColorHueKey(str) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"].includes(str);
}
function isColorTintKey(str) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TINTS"].includes(str);
}
function isColorButtonMode(str) {
    return THEME_COLOR_BUTTON_MODES.includes(str);
}
const COLOR_CONFIG_STATE_KEYS = [
    "_hue",
    "bg",
    "fg",
    "border",
    "focusRing",
    "muted/fg",
    "accent/fg",
    "link/fg",
    "code/bg",
    "code/fg",
    "skeleton/from",
    "skeleton/to",
    "status/dot",
    "status/icon"
], COLOR_CONFIG_CARD_KEYS = [
    ...COLOR_CONFIG_STATE_KEYS,
    "_hue",
    "bg",
    "fg",
    "border",
    "focusRing",
    "shadow/outline",
    "shadow/umbra",
    "shadow/penumbra",
    "shadow/ambient"
], COLOR_CONFIG_BLEND_KEYS = [
    "_blend"
], COLOR_CONFIG_AVATAR_COLORS = [
    "*",
    ...THEME_COLOR_AVATAR_COLORS
], COLOR_CONFIG_CARD_TONES = [
    "*",
    ...THEME_COLOR_CARD_TONES
], COLOR_CONFIG_STATE_TONES = [
    "*",
    ...THEME_COLOR_STATE_TONES
], COLOR_CONFIG_STATES = [
    "*",
    ...THEME_COLOR_STATES
], COLOR_CONFIG_INPUT_MODES = [
    "*",
    ...THEME_COLOR_INPUT_MODES
], COLOR_CONFIG_INPUT_STATES = [
    "*",
    ...THEME_COLOR_INPUT_STATES
];
function parseTokenKey(str) {
    const segments = str.split("/"), segment0 = segments.shift() || "";
    if (isColorConfigBaseTone(segment0)) {
        const key = segments.join("/");
        if (isColorConfigBaseKey(key)) return {
            type: "base",
            tone: segment0,
            key
        };
        if (isColorConfigBlendKey(key)) return {
            type: "base",
            tone: segment0,
            key
        };
    }
    if (segment0 === "button") {
        const segment1 = segments.shift() || "";
        if (isColorConfigStateTone(segment1)) {
            const segment2 = segments.shift() || "";
            if (isColorButtonMode(segment2)) {
                const key = segments.join("/");
                if (isColorConfigStateKey(key)) return {
                    type: "button",
                    tone: segment1,
                    mode: segment2,
                    key
                };
                if (isColorConfigBlendKey(key)) return {
                    type: "button",
                    tone: segment1,
                    mode: segment2,
                    key
                };
            }
        }
    }
}
function isColorMixPercentValue(str) {
    return /^\d+%$/.test(str);
}
function parseTokenValue(str) {
    const segments = str.split("/");
    let nextSegment = segments.shift() || "";
    const [segment0, segment0mix] = nextSegment.split(" ");
    if (isColorTintKey(segment0)) {
        const tint = segment0, segment1 = segments.shift() || "";
        if (isColorMixPercentValue(segment0mix)) {
            const mix2 = Number(segment0mix.slice(0, -1)) / 100;
            return {
                type: "color",
                tint,
                mix: mix2
            };
        }
        if (isColorOpacityValue(segment1)) {
            const opacity = Number(segment1);
            return {
                type: "color",
                tint,
                opacity
            };
        }
        return {
            type: "color",
            tint
        };
    }
    if (isColorValue(segment0)) {
        const key = segment0, segment1 = segments.shift() || "";
        if (isColorMixPercentValue(segment0mix)) {
            const mix2 = Number(segment0mix.slice(0, -1)) / 100;
            return {
                type: "color",
                key,
                mix: mix2
            };
        }
        if (isColorOpacityValue(segment1)) {
            const opacity = Number(segment1);
            return {
                type: "color",
                key,
                opacity
            };
        }
        return {
            type: "color",
            key
        };
    }
    if (isColorHueKey(segment0)) {
        const hue = segment0;
        nextSegment = segments.shift() || "";
        const [segment1, segment1mix] = nextSegment.split(" ");
        if (isColorTintKey(segment1)) {
            const tint = segment1, segment2 = segments.shift() || "";
            if (isColorMixPercentValue(segment1mix)) {
                const mix2 = Number(segment1mix.slice(0, -1)) / 100;
                return {
                    type: "color",
                    hue,
                    tint,
                    mix: mix2
                };
            }
            if (isColorOpacityValue(segment2)) {
                const opacity = Number(segment2);
                return {
                    type: "color",
                    hue,
                    tint,
                    opacity
                };
            }
            return {
                type: "color",
                hue,
                tint
            };
        }
        return {
            type: "hue",
            value: hue
        };
    }
    if (isColorBlendModeValue(segment0)) return {
        type: "blendMode",
        value: segment0
    };
}
function isColorConfigBaseTone(str) {
    return COLOR_CONFIG_CARD_TONES.includes(str);
}
function isColorConfigBaseKey(str) {
    return COLOR_CONFIG_CARD_KEYS.includes(str);
}
function isColorConfigStateKey(str) {
    return COLOR_CONFIG_STATE_KEYS.includes(str);
}
function isColorConfigStateTone(str) {
    return COLOR_CONFIG_STATE_TONES.includes(str);
}
function isColorConfigBlendKey(str) {
    return COLOR_CONFIG_BLEND_KEYS.includes(str);
}
function isColorTokenValue(str) {
    var _a, _b;
    return ((_a = parseTokenValue(str)) == null ? void 0 : _a.type) === "color" || ((_b = parseTokenValue(str)) == null ? void 0 : _b.type) === "hue";
}
function isColorValue(str) {
    return str === "black" || str === "white";
}
function isColorOpacityValue(str) {
    return str === "0" || /^0\.[0-9]+$/.test(str) || str === "1";
}
function compileColorTokenValue(node) {
    let key = "";
    return node.key === "black" || node.key === "white" ? key = node.key : key = `${node.hue}/${node.tint}`, node.mix !== void 0 ? `${key} ${node.mix * 100}%` : (node.opacity !== void 0 && (key += `/${node.opacity}`), key);
}
var __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (obj, key, value)=>key in obj ? __defProp$4(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$4 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(b))__propIsEnum$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    return a;
}, __spreadProps$4 = (a, b)=>__defProps$4(a, __getOwnPropDescs$4(b));
const DEFAULT_COLOR_TOKEN_VALUE = [
    "500",
    "500"
];
function resolveColorTokenValue(context, value = DEFAULT_COLOR_TOKEN_VALUE) {
    const { hue, scheme } = context, node = parseTokenValue(value[scheme === "light" ? 0 : 1]);
    if (!node || node.type !== "color") throw new Error(`Invalid color token: ${value[0]}`);
    return compileColorTokenValue(__spreadProps$4(__spreadValues$4({}, node), {
        hue: node.hue || hue
    }));
}
const defaultColorTokens = {
    base: {
        "*": {
            _blend: [
                "multiply",
                "screen"
            ],
            accent: {
                fg: [
                    "purple/600",
                    "purple/400"
                ]
            },
            avatar: {
                "*": {
                    _blend: [
                        "screen",
                        "multiply"
                    ],
                    bg: [
                        "500",
                        "400"
                    ],
                    fg: [
                        "white",
                        "black"
                    ]
                }
            },
            backdrop: [
                "gray/200/0.5",
                "black/0.5"
            ],
            badge: {
                "*": {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "600",
                        "400"
                    ],
                    icon: [
                        "500",
                        "500"
                    ],
                    dot: [
                        "500",
                        "500"
                    ]
                },
                positive: {
                    bg: [
                        "200 50%",
                        "900"
                    ],
                    fg: [
                        "600",
                        "500"
                    ]
                },
                caution: {
                    bg: [
                        "200 50%",
                        "900"
                    ],
                    fg: [
                        "600",
                        "500"
                    ]
                }
            },
            bg: [
                "50",
                "950"
            ],
            border: [
                "200",
                "800"
            ],
            code: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "600",
                    "400"
                ]
            },
            fg: [
                "800",
                "200"
            ],
            focusRing: [
                "blue/500",
                "blue/500"
            ],
            icon: [
                "600",
                "400"
            ],
            kbd: {
                bg: [
                    "white",
                    "black"
                ],
                fg: [
                    "600",
                    "400"
                ],
                border: [
                    "200",
                    "800"
                ]
            },
            link: {
                fg: [
                    "blue/600",
                    "blue/300"
                ]
            },
            muted: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "700 75%",
                    "300 75%"
                ]
            },
            shadow: {
                outline: [
                    "500/0.3",
                    "500/0.4"
                ],
                umbra: [
                    "gray/500/0.1",
                    "black/0.2"
                ],
                penumbra: [
                    "gray/500/0.07",
                    "black/0.14"
                ],
                ambient: [
                    "gray/500/0.06",
                    "black/0.12"
                ]
            },
            skeleton: {
                from: [
                    "100",
                    "900"
                ],
                to: [
                    "100 50%",
                    "900 50%"
                ]
            }
        },
        transparent: {
            bg: [
                "50",
                "black"
            ]
        },
        default: {
            bg: [
                "white",
                "950"
            ],
            fg: [
                "800",
                "200"
            ],
            muted: {
                fg: [
                    "600",
                    "400"
                ]
            }
        },
        primary: {
            _hue: "blue"
        },
        suggest: {
            _hue: "purple"
        },
        positive: {
            _hue: "green",
            shadow: {
                outline: [
                    "500/0.4",
                    "500/0.4"
                ]
            }
        },
        caution: {
            _hue: "yellow",
            shadow: {
                outline: [
                    "600/0.3",
                    "500/0.4"
                ]
            }
        },
        critical: {
            _hue: "red"
        }
    },
    button: {
        default: {
            "*": {
                "*": {
                    _blend: [
                        "screen",
                        "multiply"
                    ],
                    accent: {
                        fg: [
                            "purple/300",
                            "purple/700"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "900",
                                "100"
                            ],
                            fg: [
                                "400",
                                "600"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "500",
                        "400"
                    ],
                    border: [
                        "500/0",
                        "400/0"
                    ],
                    code: {
                        bg: [
                            "500 20%",
                            "400 20%"
                        ],
                        fg: [
                            "200",
                            "600"
                        ]
                    },
                    fg: [
                        "white",
                        "black"
                    ],
                    icon: [
                        "100 70%",
                        "900 70%"
                    ],
                    kbd: {
                        bg: [
                            "black",
                            "white"
                        ],
                        fg: [
                            "200",
                            "600"
                        ],
                        border: [
                            "800",
                            "200"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/200",
                            "blue/600"
                        ]
                    },
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "900",
                            "100"
                        ],
                        to: [
                            "900 50%",
                            "100 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "600",
                        "300"
                    ],
                    border: [
                        "700/0",
                        "300/0"
                    ]
                },
                pressed: {
                    bg: [
                        "700",
                        "300"
                    ]
                },
                selected: {
                    bg: [
                        "700",
                        "300"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/500",
                                "gray/400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "gray/700",
                                "gray/300"
                            ],
                            fg: [
                                "white",
                                "black"
                            ],
                            dot: [
                                "white",
                                "black"
                            ],
                            icon: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    bg: [
                        "300",
                        "600"
                    ],
                    code: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "300",
                            "600"
                        ]
                    },
                    fg: [
                        "300",
                        "600"
                    ],
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "300",
                            "600"
                        ]
                    },
                    kbd: {
                        bg: [
                            "black",
                            "white"
                        ],
                        fg: [
                            "white",
                            "black"
                        ],
                        border: [
                            "700",
                            "300"
                        ]
                    },
                    link: {
                        fg: [
                            "100 70%",
                            "900 70%"
                        ]
                    }
                }
            },
            default: {
                "*": {
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    bg: [
                        "800",
                        "200"
                    ],
                    muted: {
                        bg: [
                            "950",
                            "50"
                        ],
                        fg: [
                            "400",
                            "600"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "900",
                        "100"
                    ]
                },
                pressed: {
                    bg: [
                        "black",
                        "white"
                    ]
                },
                selected: {
                    bg: [
                        "black",
                        "white"
                    ]
                }
            }
        },
        ghost: {
            "*": {
                "*": {
                    _blend: [
                        "multiply",
                        "screen"
                    ],
                    accent: {
                        fg: [
                            "purple/700 60%",
                            "purple/300 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "100",
                                "900"
                            ],
                            fg: [
                                "600",
                                "400"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "50",
                        "950"
                    ],
                    border: [
                        "100",
                        "900"
                    ],
                    code: {
                        bg: [
                            "500 10%",
                            "400 10%"
                        ],
                        fg: [
                            "700 60%",
                            "400 60%"
                        ]
                    },
                    fg: [
                        "600",
                        "400"
                    ],
                    icon: [
                        "700 60%",
                        "300 60%"
                    ],
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "600",
                            "400"
                        ],
                        border: [
                            "200",
                            "800"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/700 60%",
                            "blue/300 60%"
                        ]
                    },
                    muted: {
                        bg: [
                            "100",
                            "950"
                        ],
                        fg: [
                            "700 60%",
                            "300 60%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "100",
                            "900"
                        ],
                        to: [
                            "100 50%",
                            "900 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "700",
                        "300"
                    ]
                },
                pressed: {
                    bg: [
                        "200",
                        "800"
                    ],
                    fg: [
                        "800",
                        "200"
                    ]
                },
                selected: {
                    bg: [
                        "200",
                        "800"
                    ],
                    fg: [
                        "800",
                        "200"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/100",
                                "gray/900"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: [
                                "50",
                                "950"
                            ],
                            fg: [
                                "gray/200",
                                "gray/800"
                            ],
                            dot: [
                                "gray/200",
                                "gray/800"
                            ],
                            icon: [
                                "gray/200",
                                "gray/800"
                            ]
                        }
                    },
                    border: [
                        "100",
                        "900"
                    ],
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    fg: [
                        "400",
                        "600"
                    ],
                    icon: [
                        "300",
                        "700"
                    ],
                    muted: {
                        fg: [
                            "300",
                            "700"
                        ]
                    },
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "200",
                            "800"
                        ],
                        border: [
                            "100",
                            "900"
                        ]
                    },
                    link: {
                        fg: [
                            "200",
                            "800"
                        ]
                    }
                }
            },
            positive: {
                "*": {
                    border: [
                        "600 20%",
                        "800"
                    ]
                }
            },
            caution: {
                "*": {
                    border: [
                        "600 20%",
                        "800"
                    ]
                }
            }
        },
        bleed: {
            "*": {
                "*": {
                    _blend: [
                        "multiply",
                        "screen"
                    ],
                    accent: {
                        fg: [
                            "purple/700 70%",
                            "purple/300 70%"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "500",
                                "400"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            bg: [
                                "100",
                                "900"
                            ],
                            fg: [
                                "600",
                                "400"
                            ],
                            dot: [
                                "500",
                                "500"
                            ],
                            icon: [
                                "500",
                                "500"
                            ]
                        }
                    },
                    bg: [
                        "white",
                        "black"
                    ],
                    border: [
                        "white/0",
                        "black/0"
                    ],
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "700 75%",
                            "300 75%"
                        ]
                    },
                    fg: [
                        "700",
                        "300"
                    ],
                    icon: [
                        "700 75%",
                        "300 75%"
                    ],
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "700",
                            "300"
                        ],
                        border: [
                            "200",
                            "800"
                        ]
                    },
                    link: {
                        fg: [
                            "blue/700 70%",
                            "blue/300 70%"
                        ]
                    },
                    muted: {
                        bg: [
                            "100",
                            "950"
                        ],
                        fg: [
                            "700 75%",
                            "300 75%"
                        ]
                    },
                    skeleton: {
                        from: [
                            "100",
                            "900"
                        ],
                        to: [
                            "100 50%",
                            "900 50%"
                        ]
                    }
                },
                hovered: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 70%",
                        "300 70%"
                    ]
                },
                pressed: {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 70%",
                        "200 70%"
                    ]
                },
                selected: {
                    bg: [
                        "100",
                        "900"
                    ],
                    fg: [
                        "800",
                        "200"
                    ],
                    icon: [
                        "800 60%",
                        "200 60%"
                    ]
                },
                disabled: {
                    _hue: "gray",
                    accent: {
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    avatar: {
                        "*": {
                            _blend: [
                                "screen",
                                "multiply"
                            ],
                            bg: [
                                "gray/100",
                                "gray/900"
                            ],
                            fg: [
                                "white",
                                "black"
                            ]
                        }
                    },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: [
                                "50",
                                "950"
                            ],
                            fg: [
                                "gray/200",
                                "gray/800"
                            ],
                            dot: [
                                "gray/200",
                                "gray/800"
                            ],
                            icon: [
                                "gray/200",
                                "gray/800"
                            ]
                        }
                    },
                    code: {
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "200",
                            "800"
                        ]
                    },
                    fg: [
                        "400",
                        "600"
                    ],
                    icon: [
                        "300",
                        "700"
                    ],
                    muted: {
                        fg: [
                            "400",
                            "600"
                        ]
                    },
                    kbd: {
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "200",
                            "800"
                        ],
                        border: [
                            "100",
                            "900"
                        ]
                    },
                    link: {
                        fg: [
                            "200",
                            "800"
                        ]
                    }
                }
            }
        }
    },
    input: {
        "*": {
            "*": {
                _blend: [
                    "multiply",
                    "screen"
                ],
                bg: [
                    "white",
                    "black"
                ],
                border: [
                    "200",
                    "700"
                ],
                fg: [
                    "black",
                    "200"
                ],
                muted: {
                    bg: [
                        "50",
                        "950"
                    ]
                },
                placeholder: [
                    "400",
                    "600"
                ]
            },
            hovered: {
                border: [
                    "300",
                    "700"
                ]
            },
            readOnly: {
                bg: [
                    "50",
                    "950"
                ],
                border: [
                    "200",
                    "800"
                ],
                fg: [
                    "800",
                    "200"
                ]
            },
            disabled: {
                bg: [
                    "50",
                    "950"
                ],
                fg: [
                    "400",
                    "600"
                ],
                border: [
                    "100",
                    "900"
                ],
                placeholder: [
                    "200",
                    "800 50%"
                ]
            }
        },
        invalid: {
            "*": {
                _hue: "red",
                bg: [
                    "100",
                    "950"
                ]
            }
        }
    },
    selectable: {
        "*": {
            "*": {
                _blend: [
                    "multiply",
                    "screen"
                ],
                accent: {
                    fg: [
                        "purple/700 70%",
                        "purple/300 70%"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "screen",
                            "multiply"
                        ],
                        bg: [
                            "500",
                            "400"
                        ],
                        fg: [
                            "white",
                            "black"
                        ]
                    }
                },
                badge: {
                    "*": {
                        bg: [
                            "100",
                            "900"
                        ],
                        fg: [
                            "600",
                            "400"
                        ],
                        dot: [
                            "500",
                            "500"
                        ],
                        icon: [
                            "500",
                            "500"
                        ]
                    }
                },
                bg: [
                    "white",
                    "black"
                ],
                border: [
                    "200",
                    "800"
                ],
                code: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "600",
                        "400"
                    ]
                },
                fg: [
                    "700",
                    "300"
                ],
                icon: [
                    "700 75%",
                    "300 75%"
                ],
                kbd: {
                    bg: [
                        "white",
                        "black"
                    ],
                    fg: [
                        "600",
                        "400"
                    ],
                    border: [
                        "200",
                        "800"
                    ]
                },
                link: {
                    fg: [
                        "blue/700 70%",
                        "blue/300 70%"
                    ]
                },
                muted: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "700 75%",
                        "300 75%"
                    ]
                },
                skeleton: {
                    from: [
                        "100",
                        "900"
                    ],
                    to: [
                        "100 50%",
                        "900 50%"
                    ]
                }
            },
            hovered: {
                bg: [
                    "50",
                    "950"
                ]
            },
            pressed: {
                bg: [
                    "100",
                    "900"
                ]
            },
            selected: {
                _blend: [
                    "screen",
                    "multiply"
                ],
                accent: {
                    fg: [
                        "purple/300",
                        "purple/700"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "multiply",
                            "screen"
                        ],
                        bg: [
                            "white",
                            "black"
                        ],
                        fg: [
                            "black",
                            "white"
                        ]
                    }
                },
                badge: {
                    "*": {
                        bg: [
                            "900",
                            "100"
                        ],
                        fg: [
                            "400",
                            "600"
                        ],
                        dot: [
                            "500",
                            "500"
                        ],
                        icon: [
                            "500",
                            "500"
                        ]
                    }
                },
                bg: [
                    "500",
                    "400"
                ],
                border: [
                    "500 20%",
                    "400 20%"
                ],
                code: {
                    bg: [
                        "500 20%",
                        "400 20%"
                    ],
                    fg: [
                        "200",
                        "600"
                    ]
                },
                fg: [
                    "white",
                    "black"
                ],
                icon: [
                    "100 70%",
                    "900 70%"
                ],
                kbd: {
                    bg: [
                        "black",
                        "white"
                    ],
                    fg: [
                        "200",
                        "600"
                    ],
                    border: [
                        "800",
                        "200"
                    ]
                },
                link: {
                    fg: [
                        "blue/200",
                        "blue/600"
                    ]
                },
                muted: {
                    bg: [
                        "500 10%",
                        "400 10%"
                    ],
                    fg: [
                        "100 70%",
                        "900 70%"
                    ]
                },
                skeleton: {
                    from: [
                        "900",
                        "100"
                    ],
                    to: [
                        "900 50%",
                        "100 50%"
                    ]
                }
            },
            disabled: {
                _hue: "gray",
                accent: {
                    fg: [
                        "200",
                        "800"
                    ]
                },
                avatar: {
                    "*": {
                        _blend: [
                            "screen",
                            "multiply"
                        ],
                        bg: [
                            "gray/100",
                            "gray/900"
                        ],
                        fg: [
                            "white",
                            "black"
                        ]
                    }
                },
                badge: {
                    "*": {
                        _hue: "gray",
                        bg: [
                            "50",
                            "950"
                        ],
                        fg: [
                            "gray/200",
                            "gray/800"
                        ],
                        dot: [
                            "gray/200",
                            "gray/800"
                        ],
                        icon: [
                            "gray/200",
                            "gray/800"
                        ]
                    }
                },
                border: [
                    "100",
                    "900"
                ],
                code: {
                    bg: [
                        "50",
                        "950"
                    ],
                    fg: [
                        "200",
                        "800"
                    ]
                },
                fg: [
                    "200",
                    "800"
                ],
                icon: [
                    "200",
                    "800"
                ],
                kbd: {
                    bg: [
                        "white",
                        "black"
                    ],
                    fg: [
                        "200",
                        "800"
                    ],
                    border: [
                        "100",
                        "900"
                    ]
                },
                link: {
                    fg: [
                        "200",
                        "800"
                    ]
                },
                muted: {
                    bg: [
                        "50 50%",
                        "950 50%"
                    ],
                    fg: [
                        "200",
                        "800"
                    ]
                }
            }
        },
        default: {
            selected: {
                _hue: "blue"
            }
        },
        critical: {
            disabled: {
                bg: [
                    "50 50%",
                    "950 50%"
                ]
            }
        }
    },
    syntax: {
        atrule: [
            "purple/600",
            "purple/400"
        ],
        attrName: [
            "green/600",
            "green/400"
        ],
        attrValue: [
            "yellow/600",
            "yellow/400"
        ],
        attribute: [
            "yellow/600",
            "yellow/400"
        ],
        boolean: [
            "purple/600",
            "purple/400"
        ],
        builtin: [
            "purple/600",
            "purple/400"
        ],
        cdata: [
            "yellow/600",
            "yellow/400"
        ],
        char: [
            "yellow/600",
            "yellow/400"
        ],
        class: [
            "orange/600",
            "orange/400"
        ],
        className: [
            "cyan/600",
            "cyan/400"
        ],
        comment: [
            "gray/400",
            "gray/600"
        ],
        constant: [
            "purple/600",
            "purple/400"
        ],
        deleted: [
            "red/600",
            "red/400"
        ],
        entity: [
            "red/600",
            "red/400"
        ],
        function: [
            "green/600",
            "green/400"
        ],
        hexcode: [
            "blue/600",
            "blue/400"
        ],
        id: [
            "purple/600",
            "purple/400"
        ],
        important: [
            "purple/600",
            "purple/400"
        ],
        inserted: [
            "yellow/600",
            "yellow/400"
        ],
        keyword: [
            "magenta/600",
            "magenta/400"
        ],
        number: [
            "purple/600",
            "purple/400"
        ],
        operator: [
            "magenta/600",
            "magenta/400"
        ],
        property: [
            "blue/600",
            "blue/400"
        ],
        pseudoClass: [
            "yellow/600",
            "yellow/400"
        ],
        pseudoElement: [
            "yellow/600",
            "yellow/400"
        ],
        punctuation: [
            "gray/600",
            "gray/400"
        ],
        regex: [
            "blue/600",
            "blue/400"
        ],
        selector: [
            "red/600",
            "red/400"
        ],
        string: [
            "yellow/600",
            "yellow/400"
        ],
        symbol: [
            "purple/600",
            "purple/400"
        ],
        tag: [
            "red/600",
            "red/400"
        ],
        unit: [
            "orange/600",
            "orange/400"
        ],
        url: [
            "red/600",
            "red/400"
        ],
        variable: [
            "red/600",
            "red/400"
        ]
    }
};
function isRecord(value) {
    return !!(value && typeof value == "object" && !Array.isArray(value));
}
function merge(...records) {
    const _records = records.filter(Boolean);
    return _records.length === 0 ? {} : _records.reduce(_merge, {});
}
function _merge(acc, source) {
    for (const key of Object.keys(source)){
        const prevValue = acc[key], nextValue = source[key];
        isRecord(prevValue) && isRecord(nextValue) ? acc[key] = merge(prevValue, nextValue) : acc[key] = nextValue;
    }
    return acc;
}
var __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (obj, key, value)=>key in obj ? __defProp$3(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$3 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    if (__getOwnPropSymbols$3) for (var prop of __getOwnPropSymbols$3(b))__propIsEnum$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    return a;
}, __spreadProps$3 = (a, b)=>__defProps$3(a, __getOwnPropDescs$3(b));
function resolveColorTokens(inputTokens) {
    const tokens = merge(defaultColorTokens, inputTokens);
    return {
        base: resolveBaseColorTokens(tokens),
        button: resolveButtonColorTokens(tokens),
        input: resolveInputColorTokens(tokens),
        selectable: resolveSelectableColorTokens(tokens),
        syntax: tokens.syntax
    };
}
function resolveBaseColorTokens(sparseTokens) {
    const tokens = {};
    for (const tone of THEME_COLOR_CARD_TONES)tokens[tone] = resolveBaseColorTones(sparseTokens, tone);
    return tokens;
}
function resolveBaseColorTones(inputTokens, tone) {
    var _a, _b, _c, _d;
    const spec = merge((_a = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _a["*"], (_b = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _b[tone]), hue = spec._hue || ((_d = (_c = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _c[tone]) == null ? void 0 : _d._hue) || "gray";
    return __spreadProps$3(__spreadValues$3({}, spec), {
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue2)=>{
            var _a2, _b2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [hue2]: merge({
                    _hue: hue2
                }, (_a2 = spec.avatar) == null ? void 0 : _a2["*"], (_b2 = spec.avatar) == null ? void 0 : _b2[hue2])
            });
        }, {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone2)=>{
            var _a2, _b2, _c2, _d2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [tone2]: __spreadValues$3(__spreadValues$3({
                    _hue: ((_b2 = (_a2 = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _a2[tone2]) == null ? void 0 : _b2._hue) || hue
                }, (_c2 = spec.badge) == null ? void 0 : _c2["*"]), (_d2 = spec.badge) == null ? void 0 : _d2[tone2])
            });
        }, {})
    });
}
function resolveButtonColorTokens(inputTokens) {
    const tokens = {};
    for (const mode of THEME_COLOR_BUTTON_MODES)tokens[mode] = resolveButtonToneColorTokens(inputTokens, mode);
    return tokens;
}
function resolveButtonToneColorTokens(inputTokens, mode) {
    const tokens = {};
    for (const tone of THEME_COLOR_STATE_TONES)tokens[tone] = resolveButtonModeColorTokens(inputTokens, mode, tone);
    return tokens;
}
function resolveButtonModeColorTokens(inputTokens, mode, tone) {
    const tokens = {};
    for (const state of THEME_COLOR_STATES)tokens[state] = resolveButtonStateColorTokens(inputTokens, tone, mode, state);
    return tokens;
}
function resolveButtonStateColorTokens(inputTokens, tone, mode, state) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const spec = merge((_c = (_b = (_a = inputTokens == null ? void 0 : inputTokens.button) == null ? void 0 : _a[mode]) == null ? void 0 : _b["*"]) == null ? void 0 : _c["*"], (_f = (_e = (_d = inputTokens == null ? void 0 : inputTokens.button) == null ? void 0 : _d[mode]) == null ? void 0 : _e[tone]) == null ? void 0 : _f["*"], (_i = (_h = (_g = inputTokens == null ? void 0 : inputTokens.button) == null ? void 0 : _g[mode]) == null ? void 0 : _h["*"]) == null ? void 0 : _i[state], (_l = (_k = (_j = inputTokens == null ? void 0 : inputTokens.button) == null ? void 0 : _j[mode]) == null ? void 0 : _k[tone]) == null ? void 0 : _l[state]), hue = spec._hue || ((_n = (_m = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _m[tone]) == null ? void 0 : _n._hue);
    return __spreadProps$3(__spreadValues$3({}, spec), {
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue2)=>{
            var _a2, _b2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [hue2]: merge({
                    _hue: hue2
                }, (_a2 = spec.avatar) == null ? void 0 : _a2["*"], (_b2 = spec.avatar) == null ? void 0 : _b2[hue2])
            });
        }, {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone2)=>{
            var _a2, _b2, _c2, _d2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [tone2]: __spreadValues$3(__spreadValues$3({
                    _hue: ((_b2 = (_a2 = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _a2[tone2]) == null ? void 0 : _b2._hue) || hue
                }, (_c2 = spec.badge) == null ? void 0 : _c2["*"]), (_d2 = spec.badge) == null ? void 0 : _d2[tone2])
            });
        }, {})
    });
}
function resolveInputColorTokens(inputTokens) {
    const tokens = {};
    for (const mode of THEME_COLOR_INPUT_MODES)tokens[mode] = resolveInputModeColorTokens(inputTokens, mode);
    return tokens;
}
function resolveInputModeColorTokens(inputTokens, mode) {
    const states = {};
    for (const state of THEME_COLOR_INPUT_STATES)states[state] = resolveInputStateColorTokens(inputTokens, mode, state);
    return states;
}
function resolveInputStateColorTokens(inputTokens, mode, state) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const spec = merge((_b = (_a = inputTokens == null ? void 0 : inputTokens.input) == null ? void 0 : _a["*"]) == null ? void 0 : _b["*"], (_d = (_c = inputTokens == null ? void 0 : inputTokens.input) == null ? void 0 : _c[mode]) == null ? void 0 : _d["*"], (_f = (_e = inputTokens == null ? void 0 : inputTokens.input) == null ? void 0 : _e["*"]) == null ? void 0 : _f[state], (_h = (_g = inputTokens == null ? void 0 : inputTokens.input) == null ? void 0 : _g[mode]) == null ? void 0 : _h[state]), hue = spec._hue || ((_j = (_i = inputTokens == null ? void 0 : inputTokens.input) == null ? void 0 : _i[mode]) == null ? void 0 : _j._hue);
    return __spreadProps$3(__spreadValues$3({}, spec), {
        _hue: hue
    });
}
function resolveSelectableColorTokens(inputTokens) {
    const tokens = {};
    for (const tone of THEME_COLOR_STATE_TONES)tokens[tone] = resolveSelectableToneColorTokens(inputTokens, tone);
    return tokens;
}
function resolveSelectableToneColorTokens(inputTokens, tone) {
    var _a, _b, _c, _d;
    const states = {
        _hue: ((_b = (_a = inputTokens == null ? void 0 : inputTokens.selectable) == null ? void 0 : _a[tone]) == null ? void 0 : _b._hue) || ((_d = (_c = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _c[tone]) == null ? void 0 : _d._hue)
    };
    for (const state of THEME_COLOR_STATES)states[state] = resolveSelectableStateColorTokens(inputTokens, tone, state);
    return states;
}
function resolveSelectableStateColorTokens(inputTokens, tone, state) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const spec = merge((_b = (_a = inputTokens == null ? void 0 : inputTokens.selectable) == null ? void 0 : _a["*"]) == null ? void 0 : _b["*"], (_d = (_c = inputTokens == null ? void 0 : inputTokens.selectable) == null ? void 0 : _c[tone]) == null ? void 0 : _d["*"], (_f = (_e = inputTokens == null ? void 0 : inputTokens.selectable) == null ? void 0 : _e["*"]) == null ? void 0 : _f[state], (_h = (_g = inputTokens == null ? void 0 : inputTokens.selectable) == null ? void 0 : _g[tone]) == null ? void 0 : _h[state]), hue = spec._hue || ((_j = (_i = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _i[tone]) == null ? void 0 : _j._hue);
    return __spreadProps$3(__spreadValues$3({}, spec), {
        _hue: hue,
        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"].reduce((acc, hue2)=>{
            var _a2, _b2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [hue2]: merge({
                    _hue: hue2
                }, (_a2 = spec.avatar) == null ? void 0 : _a2["*"], (_b2 = spec.avatar) == null ? void 0 : _b2[hue2])
            });
        }, {}),
        badge: THEME_COLOR_STATE_TONES.reduce((acc, tone2)=>{
            var _a2, _b2, _c2, _d2;
            return __spreadProps$3(__spreadValues$3({}, acc), {
                [tone2]: __spreadValues$3(__spreadValues$3({
                    _hue: ((_b2 = (_a2 = inputTokens == null ? void 0 : inputTokens.base) == null ? void 0 : _a2[tone2]) == null ? void 0 : _b2._hue) || hue
                }, (_c2 = spec.badge) == null ? void 0 : _c2["*"]), (_d2 = spec.badge) == null ? void 0 : _d2[tone2])
            });
        }, {})
    });
}
var __defProp$2 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (obj, key, value)=>key in obj ? __defProp$2(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$2 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b))__propIsEnum$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    return a;
}, __spreadProps$2 = (a, b)=>__defProps$2(a, __getOwnPropDescs$2(b));
function buildColorTheme(config) {
    const resolvedConfig = __spreadProps$2(__spreadValues$2({}, config), {
        color: resolveColorTokens(config == null ? void 0 : config.color)
    });
    return {
        light: buildColorScheme({
            scheme: "light"
        }, resolvedConfig),
        dark: buildColorScheme({
            scheme: "dark"
        }, resolvedConfig)
    };
}
function buildColorScheme(options, config) {
    const { scheme } = options, colorScheme = {};
    for (const tone of THEME_COLOR_CARD_TONES)colorScheme[tone] = buildCardColorTheme({
        scheme,
        tone
    }, config);
    return colorScheme;
}
function buildCardColorTheme(options, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const { scheme, tone } = options, tokens = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[tone], context = {
        hue: (tokens == null ? void 0 : tokens._hue) || "gray",
        scheme
    };
    return {
        _blend: ((tokens == null ? void 0 : tokens._blend) || [
            "multiply",
            "screen"
        ])[scheme === "light" ? 0 : 1],
        _dark: scheme === "dark",
        accent: {
            fg: resolveColorTokenValue(context, (_c = tokens == null ? void 0 : tokens.accent) == null ? void 0 : _c.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        backdrop: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.backdrop),
        badge: buildBadgeColorTheme(tokens == null ? void 0 : tokens.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        border: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.border),
        button: buildButtonColorTheme({
            scheme,
            tone
        }, config),
        code: {
            bg: resolveColorTokenValue(context, (_d = tokens == null ? void 0 : tokens.code) == null ? void 0 : _d.bg),
            fg: resolveColorTokenValue(context, (_e = tokens == null ? void 0 : tokens.code) == null ? void 0 : _e.fg)
        },
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg),
        focusRing: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.focusRing),
        icon: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.icon),
        input: buildInputColorTheme({
            scheme,
            tone
        }, config),
        kbd: {
            bg: resolveColorTokenValue(context, (_f = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _f.bg),
            fg: resolveColorTokenValue(context, (_g = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _g.fg),
            border: resolveColorTokenValue(context, (_h = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _h.border)
        },
        link: {
            fg: resolveColorTokenValue(context, (_i = tokens == null ? void 0 : tokens.link) == null ? void 0 : _i.fg)
        },
        muted: {
            bg: resolveColorTokenValue(context, (_j = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _j.bg),
            fg: resolveColorTokenValue(context, (_k = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _k.fg)
        },
        selectable: buildSelectableColorTheme({
            scheme,
            tone
        }, config),
        shadow: buildShadowColorTheme({
            scheme,
            tone
        }, config),
        skeleton: {
            from: resolveColorTokenValue(context, (_l = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _l.from),
            to: resolveColorTokenValue(context, (_m = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _m.to)
        },
        syntax: buildSyntaxColorTheme({
            scheme
        }, config)
    };
}
function buildShadowColorTheme(options, config) {
    var _a, _b, _c, _d, _e, _f;
    const { scheme, tone } = options, tokens = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[tone], context = {
        hue: (tokens == null ? void 0 : tokens._hue) || "gray",
        scheme
    };
    return {
        outline: resolveColorTokenValue(context, (_c = tokens == null ? void 0 : tokens.shadow) == null ? void 0 : _c.outline),
        umbra: resolveColorTokenValue(context, (_d = tokens == null ? void 0 : tokens.shadow) == null ? void 0 : _d.umbra),
        penumbra: resolveColorTokenValue(context, (_e = tokens == null ? void 0 : tokens.shadow) == null ? void 0 : _e.penumbra),
        ambient: resolveColorTokenValue(context, (_f = tokens == null ? void 0 : tokens.shadow) == null ? void 0 : _f.ambient)
    };
}
function buildAvatarColorTheme(options, stateTokens) {
    const { scheme } = options;
    return {
        gray: _buildAvatarColorTheme({
            color: "gray",
            scheme
        }, stateTokens),
        blue: _buildAvatarColorTheme({
            color: "blue",
            scheme
        }, stateTokens),
        purple: _buildAvatarColorTheme({
            color: "purple",
            scheme
        }, stateTokens),
        magenta: _buildAvatarColorTheme({
            color: "magenta",
            scheme
        }, stateTokens),
        red: _buildAvatarColorTheme({
            color: "red",
            scheme
        }, stateTokens),
        orange: _buildAvatarColorTheme({
            color: "orange",
            scheme
        }, stateTokens),
        yellow: _buildAvatarColorTheme({
            color: "yellow",
            scheme
        }, stateTokens),
        green: _buildAvatarColorTheme({
            color: "green",
            scheme
        }, stateTokens),
        cyan: _buildAvatarColorTheme({
            color: "cyan",
            scheme
        }, stateTokens)
    };
}
function _buildAvatarColorTheme(options, stateTokens) {
    var _a;
    const { color: color2, scheme } = options, tokens = (_a = stateTokens == null ? void 0 : stateTokens.avatar) == null ? void 0 : _a[color2], context = {
        hue: (tokens == null ? void 0 : tokens._hue) || "gray",
        scheme
    };
    return {
        _blend: ((tokens == null ? void 0 : tokens._blend) || [
            "screen",
            "multiply"
        ])[scheme === "light" ? 0 : 1],
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg)
    };
}
function buildBadgeColorTheme(tokens, options, config) {
    const { scheme } = options, colorBadge = {};
    for (const tone of THEME_COLOR_STATE_TONES)colorBadge[tone] = _buildBadgeColorTheme(tokens, {
        scheme,
        tone
    }, config);
    return colorBadge;
}
function _buildBadgeColorTheme(parentTokens, options, config) {
    var _a, _b, _c;
    const { scheme, tone } = options, tokens = parentTokens == null ? void 0 : parentTokens[tone], context = {
        hue: (tokens == null ? void 0 : tokens._hue) || ((_c = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[tone]) == null ? void 0 : _c._hue) || "gray",
        scheme
    };
    return {
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg),
        dot: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.dot),
        icon: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.icon)
    };
}
function buildButtonColorTheme(options, config) {
    const { scheme, tone: cardTone } = options, modes = {};
    for (const mode of THEME_COLOR_BUTTON_MODES)modes[mode] = buildButtonTonesColorTheme({
        cardTone,
        scheme,
        mode
    }, config);
    return modes;
}
function buildButtonTonesColorTheme(options, config) {
    const { cardTone, mode, scheme } = options, tones2 = {};
    for (const tone of THEME_COLOR_STATE_TONES)tones2[tone] = buildButtonStatesColorTheme({
        cardTone,
        mode,
        scheme,
        tone
    }, config);
    return tones2;
}
function buildButtonStatesColorTheme(options, config) {
    const { cardTone, mode, scheme, tone } = options, states = {};
    for (const state of THEME_COLOR_STATES)states[state] = buildButtonStateColorTheme({
        cardTone,
        mode,
        tone,
        scheme,
        state
    }, config);
    return states;
}
function buildButtonStateColorTheme(options, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    const { cardTone, mode, tone, scheme, state } = options, cardTokens = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[cardTone], tokens = (_f = (_e = (_d = (_c = config == null ? void 0 : config.color) == null ? void 0 : _c.button) == null ? void 0 : _d[mode]) == null ? void 0 : _e[tone]) == null ? void 0 : _f[state], hue = (tokens == null ? void 0 : tokens._hue) || (cardTokens == null ? void 0 : cardTokens._hue) || "gray", blendMode = (tokens == null ? void 0 : tokens._blend) || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        accent: {
            fg: resolveColorTokenValue(context, (_g = tokens == null ? void 0 : tokens.accent) == null ? void 0 : _g.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        badge: buildBadgeColorTheme(tokens == null ? void 0 : tokens.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        border: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.border),
        code: {
            bg: resolveColorTokenValue(context, (_h = tokens == null ? void 0 : tokens.code) == null ? void 0 : _h.bg),
            fg: resolveColorTokenValue(context, (_i = tokens == null ? void 0 : tokens.code) == null ? void 0 : _i.fg)
        },
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg),
        icon: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.icon),
        muted: {
            bg: resolveColorTokenValue(context, (_j = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _j.bg),
            fg: resolveColorTokenValue(context, (_k = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _k.fg)
        },
        kbd: {
            bg: resolveColorTokenValue(context, (_l = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _l.bg),
            fg: resolveColorTokenValue(context, (_m = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _m.fg),
            border: resolveColorTokenValue(context, (_n = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _n.border)
        },
        link: {
            fg: resolveColorTokenValue(context, (_o = tokens == null ? void 0 : tokens.link) == null ? void 0 : _o.fg)
        },
        skeleton: {
            from: resolveColorTokenValue(context, (_p = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _p.from),
            to: resolveColorTokenValue(context, (_q = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _q.to)
        }
    };
}
function buildInputColorTheme(options, config) {
    const { scheme, tone } = options;
    return {
        default: buildInputStatesColorTheme({
            mode: "default",
            scheme,
            tone
        }, config),
        invalid: buildInputStatesColorTheme({
            mode: "invalid",
            scheme,
            tone
        }, config)
    };
}
function buildInputStatesColorTheme(options, config) {
    const { mode, scheme, tone } = options;
    return {
        enabled: buildInputStateColorTheme({
            mode,
            scheme,
            state: "enabled",
            cardTone: tone
        }, config),
        hovered: buildInputStateColorTheme({
            mode,
            scheme,
            state: "hovered",
            cardTone: tone
        }, config),
        readOnly: buildInputStateColorTheme({
            mode,
            scheme,
            state: "readOnly",
            cardTone: tone
        }, config),
        disabled: buildInputStateColorTheme({
            mode,
            scheme,
            state: "disabled",
            cardTone: tone
        }, config)
    };
}
function buildInputStateColorTheme(options, config) {
    var _a, _b, _c, _d, _e, _f;
    const { cardTone, mode, scheme, state } = options, cardTokens = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[cardTone], tokens = (_e = (_d = (_c = config == null ? void 0 : config.color) == null ? void 0 : _c.input) == null ? void 0 : _d[mode]) == null ? void 0 : _e[state], hue = (tokens == null ? void 0 : tokens._hue) || (cardTokens == null ? void 0 : cardTokens._hue) || "gray", blendMode = (tokens == null ? void 0 : tokens._blend) || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        border: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.border),
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg),
        muted: {
            bg: resolveColorTokenValue(context, (_f = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _f.bg)
        },
        placeholder: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.placeholder)
    };
}
function buildSelectableColorTheme(options, config) {
    const { scheme, tone: cardTone } = options, tones2 = {};
    for (const tone of THEME_COLOR_STATE_TONES)tones2[tone] = buildSelectableStatesColorTheme({
        cardTone,
        scheme,
        tone
    }, config);
    return tones2;
}
function buildSelectableStatesColorTheme(options, config) {
    const { cardTone, scheme, tone } = options, states = {};
    for (const state of THEME_COLOR_STATES)states[state] = buildSelectableStateColorTheme({
        cardTone,
        tone,
        scheme,
        state
    }, config);
    return states;
}
function buildSelectableStateColorTheme(options, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const { cardTone, scheme, state, tone } = options, cardTokens = (_b = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.base) == null ? void 0 : _b[cardTone], tokens = (_e = (_d = (_c = config == null ? void 0 : config.color) == null ? void 0 : _c.selectable) == null ? void 0 : _d[tone]) == null ? void 0 : _e[state], hue = (tokens == null ? void 0 : tokens._hue) || (cardTokens == null ? void 0 : cardTokens._hue) || "gray", blendMode = (tokens == null ? void 0 : tokens._blend) || [
        "screen",
        "multiply"
    ], context = {
        hue,
        scheme
    };
    return {
        _blend: blendMode[scheme === "light" ? 0 : 1],
        accent: {
            fg: resolveColorTokenValue(context, (_f = tokens == null ? void 0 : tokens.accent) == null ? void 0 : _f.fg)
        },
        avatar: buildAvatarColorTheme({
            scheme
        }, tokens),
        badge: buildBadgeColorTheme(tokens == null ? void 0 : tokens.badge, {
            scheme
        }, config),
        bg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.bg),
        border: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.border),
        code: {
            bg: resolveColorTokenValue(context, (_g = tokens == null ? void 0 : tokens.code) == null ? void 0 : _g.bg),
            fg: resolveColorTokenValue(context, (_h = tokens == null ? void 0 : tokens.code) == null ? void 0 : _h.fg)
        },
        fg: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.fg),
        icon: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.icon),
        muted: {
            bg: resolveColorTokenValue(context, (_i = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _i.bg),
            fg: resolveColorTokenValue(context, (_j = tokens == null ? void 0 : tokens.muted) == null ? void 0 : _j.fg)
        },
        kbd: {
            bg: resolveColorTokenValue(context, (_k = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _k.bg),
            fg: resolveColorTokenValue(context, (_l = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _l.fg),
            border: resolveColorTokenValue(context, (_m = tokens == null ? void 0 : tokens.kbd) == null ? void 0 : _m.border)
        },
        link: {
            fg: resolveColorTokenValue(context, (_n = tokens == null ? void 0 : tokens.link) == null ? void 0 : _n.fg)
        },
        skeleton: {
            from: resolveColorTokenValue(context, (_o = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _o.from),
            to: resolveColorTokenValue(context, (_p = tokens == null ? void 0 : tokens.skeleton) == null ? void 0 : _p.to)
        }
    };
}
function buildSyntaxColorTheme(options, config) {
    var _a;
    const { scheme } = options, tokens = (_a = config == null ? void 0 : config.color) == null ? void 0 : _a.syntax, context = {
        hue: "gray",
        scheme
    };
    return {
        atrule: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.atrule),
        attrName: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.attrName),
        attrValue: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.attrValue),
        attribute: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.attribute),
        boolean: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.boolean),
        builtin: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.builtin),
        cdata: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.cdata),
        char: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.char),
        class: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.class),
        className: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.className),
        comment: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.comment),
        constant: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.constant),
        deleted: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.deleted),
        doctype: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.doctype),
        entity: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.entity),
        function: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.function),
        hexcode: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.hexcode),
        id: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.id),
        important: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.important),
        inserted: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.inserted),
        keyword: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.keyword),
        number: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.number),
        operator: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.operator),
        prolog: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.prolog),
        property: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.property),
        pseudoClass: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.pseudoClass),
        pseudoElement: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.pseudoElement),
        punctuation: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.punctuation),
        regex: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.regex),
        selector: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.selector),
        string: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.string),
        symbol: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.symbol),
        tag: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.tag),
        unit: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.unit),
        url: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.url),
        variable: resolveColorTokenValue(context, tokens == null ? void 0 : tokens.variable)
    };
}
const defaultColorPalette = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"];
function mixChannel(b, s, weight) {
    const delta = (s - b) * weight;
    return b + delta;
}
function mix(b, s, weight) {
    return {
        r: mixChannel(b.r, s.r, weight),
        g: mixChannel(b.g, s.g, weight),
        b: mixChannel(b.b, s.b, weight)
    };
}
function multiplyChannel(b, s) {
    return b * s;
}
function multiply(b, s) {
    return {
        r: multiplyChannel(b.r / 255, s.r / 255) * 255,
        g: multiplyChannel(b.g / 255, s.g / 255) * 255,
        b: multiplyChannel(b.b / 255, s.b / 255) * 255
    };
}
function screenChannel(b, s) {
    return b + s - b * s;
}
function screen(b, s) {
    return {
        r: screenChannel(b.r / 255, s.r / 255) * 255,
        g: screenChannel(b.g / 255, s.g / 255) * 255,
        b: screenChannel(b.b / 255, s.b / 255) * 255
    };
}
function lerp(x, y, a) {
    return x * (1 - a) + y * a;
}
function invlerp(x, y, a) {
    return clamp((a - x) / (y - x));
}
function clamp(a, min = 0, max = 1) {
    return Math.min(max, Math.max(min, a));
}
function range(x1, y1, x2, y2, a) {
    return lerp(x2, y2, invlerp(x1, y1, a));
}
function round(value) {
    return Math.round(value);
}
function hexToRgb(hex) {
    if (hex.length === 4) {
        const hexR = hex.slice(1, 2), hexG = hex.slice(2, 3), hexB = hex.slice(3, 4);
        return {
            r: parseInt(hexR + hexR, 16),
            g: parseInt(hexG + hexG, 16),
            b: parseInt(hexB + hexB, 16)
        };
    }
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}
function rgbaToRGBA(rgba2) {
    const values = rgba2.replace(/rgba\(|\)/g, "").split(",");
    return {
        r: parseInt(values[0]),
        g: parseInt(values[1]),
        b: parseInt(values[2]),
        a: parseFloat(values[3])
    };
}
function rgbToHex(color2) {
    const r = round(clamp(Math.round(color2.r), 0, 255)), g = round(clamp(Math.round(color2.g), 0, 255)), b = round(clamp(Math.round(color2.b), 0, 255));
    return "a" in color2 ? `rgba(${r},${g},${b},${color2.a})` : "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgbToHsl({ r, g, b }) {
    r /= 255, g /= 255, b /= 255;
    const cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin;
    let h = 0, s = 0, l = 0;
    return delta == 0 ? h = 0 : cmax == r ? h = (g - b) / delta % 6 : cmax == g ? h = (b - r) / delta + 2 : h = (r - g) / delta + 4, h = Math.round(h * 60), h < 0 && (h += 360), l = (cmax + cmin) / 2, s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)), s = +(s * 100).toFixed(1), l = +(l * 100).toFixed(1), {
        h,
        s,
        l
    };
}
function hslToRgb(hsl) {
    const s = hsl.s / 100, l = hsl.l / 100, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(hsl.h / 60 % 2 - 1)), m = l - c / 2;
    let r = 0, g = 0, b = 0;
    return 0 <= hsl.h && hsl.h < 60 ? (r = c, g = x, b = 0) : 60 <= hsl.h && hsl.h < 120 ? (r = x, g = c, b = 0) : 120 <= hsl.h && hsl.h < 180 ? (r = 0, g = c, b = x) : 180 <= hsl.h && hsl.h < 240 ? (r = 0, g = x, b = c) : 240 <= hsl.h && hsl.h < 300 ? (r = x, g = 0, b = c) : 300 <= hsl.h && hsl.h < 360 && (r = c, g = 0, b = x), {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}
const HEX_CHARS = "0123456789ABCDEFabcdef", HSL_RE = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
function isHexChars(str) {
    for (const c of str)if (HEX_CHARS.indexOf(c) === -1) return !1;
    return !0;
}
function isHex(str) {
    return str[0] !== "#" || !(str.length === 4 || str.length === 7) ? !1 : isHexChars(str.slice(1));
}
function parseHsl(str) {
    const res = HSL_RE.exec(str);
    if (!res) throw new Error(`parseHsl: string is not a HSL color: "${str}"`);
    return {
        h: parseInt(res[1]),
        s: parseFloat(res[3]),
        l: parseFloat(res[5])
    };
}
function parseColor(color2) {
    if (!color2) return {
        r: 0,
        g: 0,
        b: 0
    };
    if (typeof color2 != "string") throw new Error("parseColor: expected a string");
    if (isHex(color2)) return hexToRgb(color2);
    if (color2.startsWith("hsl(")) return hslToRgb(parseHsl(color2));
    if (color2.startsWith("rgba(")) return rgbaToRGBA(color2);
    throw new Error(`parseColor: unexpected color format: "${color2}"`);
}
function getContrastRatio(bg, fg) {
    const rgb1 = parseColor(bg), rgb2 = parseColor(fg), c1 = rgb_lrgb(rgb1), c2 = rgb_lrgb(rgb2), l1 = lrgb_luminance(c1), l2 = lrgb_luminance(c2);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function rgb_lrgb({ r, g, b }) {
    return [
        rgb_lrgb1(r / 255),
        rgb_lrgb1(g / 255),
        rgb_lrgb1(b / 255)
    ];
}
function rgb_lrgb1(v) {
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}
function lrgb_luminance([r, g, b]) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function rgba(color2, a) {
    const rgb = parseColor(color2);
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}
const RGB_RANGE = [
    0,
    255
];
function mixThemeColor(value, options) {
    const { blendMode } = options, color2 = parseColor(value), black2 = parseColor(options.black), white2 = parseColor(options.white), bg = options.bg ? parseColor(options.bg) : blendMode === "multiply" ? white2 : black2, paletteRange = {
        r: [
            black2.r,
            white2.r
        ],
        g: [
            black2.g,
            white2.g
        ],
        b: [
            black2.b,
            white2.b
        ]
    }, convertedBgColor = {
        r: clamp(range(...paletteRange.r, ...RGB_RANGE, bg.r), ...RGB_RANGE),
        g: clamp(range(...paletteRange.g, ...RGB_RANGE, bg.g), ...RGB_RANGE),
        b: clamp(range(...paletteRange.b, ...RGB_RANGE, bg.b), ...RGB_RANGE)
    }, convertedColor = {
        r: clamp(range(...paletteRange.r, ...RGB_RANGE, color2.r), ...RGB_RANGE),
        g: clamp(range(...paletteRange.g, ...RGB_RANGE, color2.g), ...RGB_RANGE),
        b: clamp(range(...paletteRange.b, ...RGB_RANGE, color2.b), ...RGB_RANGE)
    }, resultColor = blendMode === "multiply" ? multiply(convertedBgColor, convertedColor) : screen(convertedBgColor, convertedColor), v = {
        r: clamp(range(...RGB_RANGE, ...paletteRange.r, resultColor.r), ...paletteRange.r),
        g: clamp(range(...RGB_RANGE, ...paletteRange.g, resultColor.g), ...paletteRange.g),
        b: clamp(range(...RGB_RANGE, ...paletteRange.b, resultColor.b), ...paletteRange.b)
    };
    return rgbToHex(v);
}
function renderColorValue(str, options) {
    const { bg, blendMode, colorPalette } = options;
    if (bg === "white") throw new Error("Cannot blend with white background");
    const node = parseTokenValue(str);
    if (!node || node.type !== "color") throw new Error(`Invalid color token value: ${str}`);
    let hex = "";
    if (node.key === "black" && (hex = renderColorHex(colorPalette.black)), node.key === "white" && (hex = renderColorHex(colorPalette.white)), node.hue && node.tint && (hex = renderColorHex(colorPalette[node.hue][node.tint])), !hex) throw new Error(`Invalid color token value: ${str}`);
    const hexBeforeMix = hex, mixOptions = {
        blendMode,
        bg,
        black: renderColorHex(colorPalette.black),
        // opacity: node.opacity,
        white: renderColorHex(colorPalette.white)
    };
    try {
        if (hex = mixThemeColor(hex, mixOptions), bg && node.mix !== void 0) {
            const from = hexToRgb(bg), to = hexToRgb(hex);
            hex = rgbToHex(mix(from, to, node.mix));
        }
    } catch (err) {
        throw console.warn("could not blend", hex, mixOptions), err;
    }
    return hex === "#aN" && (console.warn(`invalid color token value: ${str}`), hex = hexBeforeMix), node.opacity !== void 0 && (hex = rgba(hex, node.opacity)), hex;
}
function renderColorHex(color2) {
    return typeof color2 == "string" ? color2 : color2.hex;
}
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$1 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b))__propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    return a;
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b));
function renderThemeColorSchemes(value, config) {
    var _a;
    const colorPalette = (_a = config == null ? void 0 : config.palette) != null ? _a : defaultColorPalette;
    return {
        light: renderThemeColorScheme(colorPalette, value.light),
        dark: renderThemeColorScheme(colorPalette, value.dark)
    };
}
function renderThemeColorScheme(colorPalette, value) {
    const toneEntries = Object.entries(value), [, transparentTone] = toneEntries.find(([k])=>k === "transparent"), [, defaultTone] = toneEntries.find(([k])=>k === "default"), renderedTransparentTone = renderThemeColor(transparentTone, {
        colorPalette
    }), renderedDefaultTone = renderThemeColor(defaultTone, {
        colorPalette
    }), bg = renderedDefaultTone.bg;
    if (bg === "white") throw new Error("Cannot blend with white background");
    return Object.fromEntries([
        [
            "transparent",
            renderedTransparentTone
        ],
        [
            "default",
            renderedDefaultTone
        ],
        ...toneEntries.filter(([k])=>k !== "default" && k !== "transparent").map(([k, v])=>[
                k,
                renderThemeColor(v, {
                    bg,
                    colorPalette
                })
            ])
    ]);
}
function renderThemeColor(value, options) {
    const { colorPalette, bg } = options, blendMode = value._blend || "multiply", baseBg = renderColorValue(value.bg, {
        colorPalette,
        bg,
        blendMode
    }), colorOptions = {
        colorPalette,
        bg: baseBg,
        blendMode
    }, button = renderThemeColorButton(value.button, {
        baseBg,
        blendMode,
        colorPalette
    }), selectable = renderThemeColorSelectable(value.selectable, {
        colorPalette,
        baseBg,
        blendMode
    }), shadow = {
        outline: renderColorValue(value.shadow.outline, colorOptions),
        umbra: renderColorValue(value.shadow.umbra, __spreadProps$1(__spreadValues$1({}, colorOptions), {
            bg: void 0,
            colorPalette: __spreadProps$1(__spreadValues$1({}, colorPalette), {
                black: "#000000"
            })
        })),
        penumbra: renderColorValue(value.shadow.penumbra, __spreadProps$1(__spreadValues$1({}, colorOptions), {
            bg: void 0,
            colorPalette: __spreadProps$1(__spreadValues$1({}, colorPalette), {
                black: "#000000"
            })
        })),
        ambient: renderColorValue(value.shadow.ambient, __spreadProps$1(__spreadValues$1({}, colorOptions), {
            bg: void 0,
            colorPalette: __spreadProps$1(__spreadValues$1({}, colorPalette), {
                black: "#000000"
            })
        }))
    };
    return {
        _blend: blendMode,
        _dark: value._dark,
        accent: {
            fg: renderColorValue(value.accent.fg, colorOptions)
        },
        avatar: renderThemeColorAvatar(value.avatar, {
            baseBg,
            colorPalette,
            blendMode
        }),
        backdrop: renderColorValue(value.backdrop, colorOptions),
        badge: renderThemeColorBadge(value.badge, {
            baseBg,
            colorPalette,
            blendMode
        }),
        bg: baseBg,
        border: renderColorValue(value.border, colorOptions),
        button,
        code: {
            bg: renderColorValue(value.code.bg, colorOptions),
            fg: renderColorValue(value.code.fg, colorOptions)
        },
        fg: renderColorValue(value.fg, colorOptions),
        focusRing: renderColorValue(value.focusRing, colorOptions),
        icon: renderColorValue(value.icon, colorOptions),
        input: renderThemeColorInput(value.input, {
            baseBg,
            colorPalette,
            blendMode
        }),
        kbd: renderThemeColorKBD(value.kbd, {
            baseBg,
            colorPalette,
            blendMode
        }),
        link: {
            fg: renderColorValue(value.link.fg, colorOptions)
        },
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions),
            fg: renderColorValue(value.muted.fg, colorOptions)
        },
        shadow,
        skeleton: {
            from: renderColorValue(value.skeleton.from, colorOptions),
            to: renderColorValue(value.skeleton.to, colorOptions)
        },
        syntax: renderSyntaxColorTheme(value.syntax, {
            baseBg,
            colorPalette,
            blendMode
        }),
        selectable
    };
}
function renderThemeColorKBD(value, options) {
    const { baseBg, blendMode, colorPalette } = options, rootOptions = {
        bg: baseBg,
        blendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        bg,
        fg: renderColorValue(value.fg, colorOptions),
        border: renderColorValue(value.border, colorOptions)
    };
}
function renderThemeColorAvatar(value, options) {
    const colorAvatar = {};
    for (const hue of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$color$40$3$2e$0$2e$6$2f$node_modules$2f40$sanity$2f$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_HUES"])colorAvatar[hue] = renderThemeColorAvatarColor(value[hue], options);
    return colorAvatar;
}
function renderThemeColorAvatarColor(value, options) {
    const { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        _blend: blendMode,
        bg,
        fg: renderColorValue(value.fg, colorOptions)
    };
}
function renderThemeColorBadge(value, options) {
    const colorBadge = {};
    for (const tone of THEME_COLOR_STATE_TONES)colorBadge[tone] = renderThemeColorBadgeColor(value[tone], options);
    return colorBadge;
}
function renderThemeColorBadgeColor(value, options) {
    const { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = rootBlendMode, rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        bg,
        dot: renderColorValue(value.dot, colorOptions),
        fg: renderColorValue(value.fg, colorOptions),
        icon: renderColorValue(value.icon, colorOptions)
    };
}
function renderThemeColorButton(value, options) {
    return {
        default: renderThemeColorButtonTones(value.default, options),
        ghost: renderThemeColorButtonTones(value.ghost, options),
        bleed: renderThemeColorButtonTones(value.bleed, options)
    };
}
function renderThemeColorButtonTones(value, options) {
    const colorButtonMode = {};
    for (const tone of THEME_COLOR_STATE_TONES)colorButtonMode[tone] = renderThemeColorButtonStates(value[tone], options);
    return colorButtonMode;
}
function renderThemeColorButtonStates(value, options) {
    return {
        enabled: renderThemeColorState(value.enabled, options),
        hovered: renderThemeColorState(value.hovered, options),
        pressed: renderThemeColorState(value.pressed, options),
        selected: renderThemeColorState(value.selected, options),
        disabled: renderThemeColorState(value.disabled, options)
    };
}
function renderThemeColorState(value, options) {
    var _a, _b;
    const { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        bg: baseBg,
        blendMode: rootBlendMode,
        colorPalette
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        bg,
        blendMode,
        colorPalette
    };
    return {
        _blend: blendMode,
        accent: {
            fg: renderColorValue(value.accent.fg, colorOptions)
        },
        avatar: renderThemeColorAvatar(value.avatar, {
            baseBg: bg,
            colorPalette,
            blendMode
        }),
        badge: renderThemeColorBadge(value.badge, {
            baseBg: bg,
            colorPalette,
            blendMode
        }),
        bg,
        border: renderColorValue(value.border, colorOptions),
        code: {
            bg: renderColorValue(value.code.bg, colorOptions),
            fg: renderColorValue(value.code.fg, colorOptions)
        },
        fg: renderColorValue(value.fg, colorOptions),
        icon: renderColorValue(value.icon, colorOptions),
        link: {
            fg: renderColorValue(value.link.fg, colorOptions)
        },
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions),
            fg: renderColorValue(value.muted.fg, colorOptions)
        },
        kbd: {
            bg: renderColorValue(value.kbd.bg, colorOptions),
            fg: renderColorValue(value.kbd.fg, colorOptions),
            border: renderColorValue(value.kbd.border, colorOptions)
        },
        skeleton: {
            from: renderColorValue((_a = value.skeleton) == null ? void 0 : _a.from, colorOptions),
            to: renderColorValue((_b = value.skeleton) == null ? void 0 : _b.to, colorOptions)
        }
    };
}
function renderThemeColorInput(value, options) {
    return {
        default: renderInputStatesColorTheme(value.default, options),
        invalid: renderInputStatesColorTheme(value.invalid, options)
    };
}
function renderInputStatesColorTheme(value, options) {
    return {
        enabled: renderInputStateColorTheme(value.enabled, options),
        hovered: renderInputStateColorTheme(value.hovered, options),
        readOnly: renderInputStateColorTheme(value.readOnly, options),
        disabled: renderInputStateColorTheme(value.disabled, options)
    };
}
function renderInputStateColorTheme(value, options) {
    const { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
        colorPalette,
        bg: baseBg,
        blendMode: rootBlendMode
    }, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
        colorPalette,
        bg,
        blendMode
    };
    return {
        _blend: blendMode,
        bg,
        border: renderColorValue(value.border, colorOptions),
        fg: renderColorValue(value.fg, colorOptions),
        muted: {
            bg: renderColorValue(value.muted.bg, colorOptions)
        },
        placeholder: renderColorValue(value.placeholder, colorOptions)
    };
}
function renderThemeColorSelectable(value, options) {
    const colorSelectable = {};
    for (const tone of THEME_COLOR_STATE_TONES)colorSelectable[tone] = renderThemeColorSelectableStates(value[tone], options);
    return colorSelectable;
}
function renderThemeColorSelectableStates(value, options) {
    return {
        enabled: renderThemeColorState(value.enabled, options),
        hovered: renderThemeColorState(value.hovered, options),
        pressed: renderThemeColorState(value.pressed, options),
        selected: renderThemeColorState(value.selected, options),
        disabled: renderThemeColorState(value.disabled, options)
    };
}
function renderSyntaxColorTheme(value, options) {
    const { colorPalette, baseBg, blendMode } = options, colorOptions = {
        colorPalette,
        bg: baseBg,
        blendMode
    };
    return {
        atrule: renderColorValue(value.atrule, colorOptions),
        attrName: renderColorValue(value.attrName, colorOptions),
        attrValue: renderColorValue(value.attrValue, colorOptions),
        attribute: renderColorValue(value.attribute, colorOptions),
        boolean: renderColorValue(value.boolean, colorOptions),
        builtin: renderColorValue(value.builtin, colorOptions),
        cdata: renderColorValue(value.cdata, colorOptions),
        char: renderColorValue(value.char, colorOptions),
        class: renderColorValue(value.class, colorOptions),
        className: renderColorValue(value.className, colorOptions),
        comment: renderColorValue(value.comment, colorOptions),
        constant: renderColorValue(value.constant, colorOptions),
        deleted: renderColorValue(value.deleted, colorOptions),
        doctype: renderColorValue(value.doctype, colorOptions),
        entity: renderColorValue(value.entity, colorOptions),
        function: renderColorValue(value.function, colorOptions),
        hexcode: renderColorValue(value.hexcode, colorOptions),
        id: renderColorValue(value.id, colorOptions),
        important: renderColorValue(value.important, colorOptions),
        inserted: renderColorValue(value.inserted, colorOptions),
        keyword: renderColorValue(value.keyword, colorOptions),
        number: renderColorValue(value.number, colorOptions),
        operator: renderColorValue(value.operator, colorOptions),
        prolog: renderColorValue(value.prolog, colorOptions),
        property: renderColorValue(value.property, colorOptions),
        pseudoClass: renderColorValue(value.pseudoClass, colorOptions),
        pseudoElement: renderColorValue(value.pseudoElement, colorOptions),
        punctuation: renderColorValue(value.punctuation, colorOptions),
        regex: renderColorValue(value.regex, colorOptions),
        selector: renderColorValue(value.selector, colorOptions),
        string: renderColorValue(value.string, colorOptions),
        symbol: renderColorValue(value.symbol, colorOptions),
        tag: renderColorValue(value.tag, colorOptions),
        unit: renderColorValue(value.unit, colorOptions),
        url: renderColorValue(value.url, colorOptions),
        variable: renderColorValue(value.variable, colorOptions)
    };
}
function buildTheme(config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const colorTheme = buildColorTheme(config), v2 = {
        _version: 2,
        avatar: (_a = config == null ? void 0 : config.avatar) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].avatar,
        button: (_b = config == null ? void 0 : config.button) != null ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].button,
        card: (_c = config == null ? void 0 : config.card) != null ? _c : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].card,
        // How colors are generated:
        // 1. Merge custom tokens with default tokens
        // 2. Generate tree of color keys (gray/500, black, white, etc.)
        // 3. Apply mixing and render to hex values
        // render(build(mergeWithDefaults()))
        color: renderThemeColorSchemes(colorTheme, config),
        container: (_d = config == null ? void 0 : config.container) != null ? _d : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].container,
        font: (_e = config == null ? void 0 : config.font) != null ? _e : defaultThemeFonts,
        input: (_f = config == null ? void 0 : config.input) != null ? _f : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].input,
        layer: (_g = config == null ? void 0 : config.layer) != null ? _g : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].layer,
        media: (_h = config == null ? void 0 : config.media) != null ? _h : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].media,
        radius: (_i = config == null ? void 0 : config.radius) != null ? _i : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].radius,
        shadow: (_j = config == null ? void 0 : config.shadow) != null ? _j : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].shadow,
        space: (_k = config == null ? void 0 : config.space) != null ? _k : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].space,
        style: (_l = config == null ? void 0 : config.style) != null ? _l : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].style
    };
    return v2_v0(v2);
}
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
const cache = /* @__PURE__ */ new Map();
function getScopedTheme(themeProp, scheme, tone) {
    const cachedTheme = _getCachedTheme(themeProp, scheme, tone);
    if (cachedTheme) return cachedTheme;
    const v0 = is_v2(themeProp) ? v2_v0(themeProp) : themeProp, v2 = is_v2(themeProp) ? themeProp : v0_v2(themeProp), colorScheme_v0 = v0.color[scheme] || v0.color.light, color_v0 = colorScheme_v0[tone] || colorScheme_v0.default, layer_v0 = v0.layer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].layer, colorScheme_v2 = v2.color[scheme] || v2.color.light, color_v2 = colorScheme_v2[tone] || colorScheme_v2.default, layer_v2 = v2.layer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeConfig"].layer, theme = {
        sanity: __spreadProps(__spreadValues({}, v0), {
            color: color_v0,
            layer: layer_v0,
            v2: __spreadProps(__spreadValues({}, v2), {
                _resolved: !0,
                color: color_v2,
                layer: layer_v2
            })
        })
    };
    return _setCachedTheme(themeProp, scheme, tone, theme), theme;
}
function _getCachedTheme(rootTheme, scheme, tone) {
    const schemeCache = cache.get(scheme);
    if (!schemeCache) return;
    const toneCache = schemeCache.get(tone);
    if (toneCache) return toneCache.get(rootTheme);
}
function _setCachedTheme(rootTheme, scheme, tone, theme) {
    cache.has(scheme) || cache.set(scheme, /* @__PURE__ */ new Map());
    const schemeCache = cache.get(scheme);
    schemeCache.has(tone) || schemeCache.set(tone, /* @__PURE__ */ new WeakMap()), schemeCache.get(tone).set(rootTheme, theme);
}
;
 //# sourceMappingURL=theme.mjs.map
}}),
"[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Arrow": (()=>Arrow),
    "Autocomplete": (()=>Autocomplete),
    "Avatar": (()=>Avatar),
    "AvatarCounter": (()=>AvatarCounter),
    "AvatarStack": (()=>AvatarStack),
    "Badge": (()=>Badge),
    "BoundaryElementProvider": (()=>BoundaryElementProvider),
    "Box": (()=>Box),
    "Breadcrumbs": (()=>Breadcrumbs),
    "Button": (()=>Button),
    "Card": (()=>Card),
    "Checkbox": (()=>Checkbox),
    "Code": (()=>Code),
    "CodeSkeleton": (()=>CodeSkeleton),
    "ConditionalWrapper": (()=>ConditionalWrapper),
    "Container": (()=>Container),
    "Dialog": (()=>Dialog),
    "DialogContext": (()=>DialogContext),
    "DialogProvider": (()=>DialogProvider),
    "ElementQuery": (()=>ElementQuery),
    "ErrorBoundary": (()=>ErrorBoundary),
    "Flex": (()=>Flex),
    "Grid": (()=>Grid),
    "Heading": (()=>Heading),
    "HeadingSkeleton": (()=>HeadingSkeleton),
    "Hotkeys": (()=>Hotkeys),
    "Inline": (()=>Inline),
    "KBD": (()=>KBD),
    "Label": (()=>Label),
    "LabelSkeleton": (()=>LabelSkeleton),
    "Layer": (()=>Layer),
    "LayerProvider": (()=>LayerProvider),
    "Menu": (()=>Menu),
    "MenuButton": (()=>MenuButton),
    "MenuDivider": (()=>MenuDivider),
    "MenuGroup": (()=>MenuGroup),
    "MenuItem": (()=>MenuItem),
    "Popover": (()=>Popover),
    "Portal": (()=>Portal),
    "PortalProvider": (()=>PortalProvider),
    "Radio": (()=>Radio),
    "Select": (()=>Select),
    "Skeleton": (()=>Skeleton),
    "Spinner": (()=>Spinner),
    "SrOnly": (()=>SrOnly),
    "Stack": (()=>Stack),
    "Switch": (()=>Switch),
    "Tab": (()=>Tab),
    "TabList": (()=>TabList),
    "TabPanel": (()=>TabPanel),
    "Text": (()=>Text),
    "TextArea": (()=>TextArea),
    "TextInput": (()=>TextInput),
    "TextSkeleton": (()=>TextSkeleton),
    "ThemeColorProvider": (()=>ThemeColorProvider),
    "ThemeProvider": (()=>ThemeProvider),
    "Toast": (()=>Toast),
    "ToastProvider": (()=>ToastProvider),
    "Tooltip": (()=>Tooltip),
    "TooltipDelayGroupContext": (()=>TooltipDelayGroupContext),
    "TooltipDelayGroupProvider": (()=>TooltipDelayGroupProvider),
    "Tree": (()=>Tree),
    "TreeItem": (()=>TreeItem),
    "VirtualList": (()=>VirtualList),
    "_ResizeObserver": (()=>_ResizeObserver),
    "_elementSizeObserver": (()=>_elementSizeObserver),
    "_fillCSSObject": (()=>_fillCSSObject),
    "_getArrayProp": (()=>_getArrayProp),
    "_getResponsiveSpace": (()=>_getResponsiveSpace),
    "_hasFocus": (()=>_hasFocus),
    "_isEnterToClickElement": (()=>_isEnterToClickElement),
    "_isScrollable": (()=>_isScrollable),
    "_raf": (()=>_raf),
    "_raf2": (()=>_raf2),
    "_responsive": (()=>_responsive),
    "attemptFocus": (()=>attemptFocus),
    "containsOrEqualsElement": (()=>containsOrEqualsElement),
    "createColorTheme": (()=>createColorTheme),
    "focusFirstDescendant": (()=>focusFirstDescendant),
    "focusLastDescendant": (()=>focusLastDescendant),
    "hexToRgb": (()=>hexToRgb),
    "hslToRgb": (()=>hslToRgb),
    "isFocusable": (()=>isFocusable),
    "isHTMLAnchorElement": (()=>isHTMLAnchorElement),
    "isHTMLButtonElement": (()=>isHTMLButtonElement),
    "isHTMLElement": (()=>isHTMLElement),
    "isHTMLInputElement": (()=>isHTMLInputElement),
    "isHTMLSelectElement": (()=>isHTMLSelectElement),
    "isHTMLTextAreaElement": (()=>isHTMLTextAreaElement),
    "multiply": (()=>multiply),
    "parseColor": (()=>parseColor),
    "rem": (()=>rem),
    "responsiveCodeFontStyle": (()=>responsiveCodeFontStyle),
    "responsiveHeadingFont": (()=>responsiveHeadingFont),
    "responsiveLabelFont": (()=>responsiveLabelFont),
    "responsiveTextAlignStyle": (()=>responsiveTextAlignStyle),
    "responsiveTextFont": (()=>responsiveTextFont),
    "rgbToHex": (()=>rgbToHex),
    "rgbToHsl": (()=>rgbToHsl),
    "rgba": (()=>rgba),
    "screen": (()=>screen),
    "studioTheme": (()=>studioTheme),
    "useArrayProp": (()=>useArrayProp),
    "useBoundaryElement": (()=>useBoundaryElement),
    "useClickOutside": (()=>useClickOutside),
    "useClickOutsideEvent": (()=>useClickOutsideEvent),
    "useCustomValidity": (()=>useCustomValidity),
    "useDialog": (()=>useDialog),
    "useElementRect": (()=>useElementRect),
    "useElementSize": (()=>useElementSize),
    "useForwardedRef": (()=>useForwardedRef),
    "useGlobalKeyDown": (()=>useGlobalKeyDown),
    "useLayer": (()=>useLayer),
    "useMatchMedia": (()=>useMatchMedia),
    "useMediaIndex": (()=>useMediaIndex),
    "usePortal": (()=>usePortal),
    "usePrefersDark": (()=>usePrefersDark),
    "usePrefersReducedMotion": (()=>usePrefersReducedMotion),
    "useRootTheme": (()=>useRootTheme),
    "useTheme": (()=>useTheme),
    "useTheme_v2": (()=>useTheme_v2),
    "useToast": (()=>useToast),
    "useTooltipDelayGroup": (()=>useTooltipDelayGroup),
    "useTree": (()=>useTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-compiler-runtime@19.0.0-beta-201e55d-20241215_react@18.3.1/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$refractor$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$refractor$2f$lib$2f$Refractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-refractor@2.2.0_react@18.3.1/node_modules/react-refractor/lib/Refractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+icons@3.5.3_react@18.3.1/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/theme.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/_chunks-es/getTheme_v2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-effect-event@1.0.2_react@18.3.1/node_modules/use-effect-event/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$12$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@floating-ui+dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.15.0_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.15.0_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const createColorTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createColorTheme"], hexToRgb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexToRgb"], hslToRgb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hslToRgb"], multiply = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multiply"], parseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseColor"], rgbToHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgbToHex"], rgbToHsl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgbToHsl"], rgba = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rgba"], screen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["screen"], studioTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildTheme"])(), EMPTY_ARRAY = [], EMPTY_RECORD = {}, POPOVER_MOTION_CONTENT_OPACITY_PROPERTY = "--motion-content-opacity", POPOVER_MOTION_PROPS = {
    initial: {
        opacity: 0.5,
        [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: 0,
        scale: 0.97,
        willChange: "transform"
    },
    animate: {
        opacity: [
            null,
            1,
            1
        ],
        [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: [
            null,
            null,
            1
        ],
        scale: 1
    },
    exit: {
        // @ts-expect-error -- passing null a second time is valid: https://github.com/framer/motion/blob/b9ce4c42914c3916ea523609c5b032dfc72718bb/packages/framer-motion/src/animation/utils/keyframes.ts#L34C22-L34C22
        opacity: [
            null,
            null,
            0
        ],
        [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: [
            null,
            0,
            0
        ],
        scale: 0.97
    },
    transition: {
        duration: 0.4,
        type: "spring"
    }
};
function _fillCSSObject(keys, value) {
    return keys.reduce((style, key2)=>(style[key2] = value, style), {});
}
function rem(pixelValue) {
    return pixelValue === 0 ? 0 : `${pixelValue / 16}rem`;
}
function _responsive(media, values, callback) {
    return ((values == null ? void 0 : values.map(callback)) || []).map((statement, mediaIndex)=>mediaIndex === 0 ? statement : {
            [`@media screen and (min-width: ${media[mediaIndex - 1]}px)`]: statement
        });
}
function _getArrayProp(val, defaultVal) {
    return val === void 0 ? defaultVal || EMPTY_ARRAY : Array.isArray(val) ? val : [
        val
    ];
}
function _getResponsiveSpace(theme, props, spaceIndexes = EMPTY_ARRAY) {
    if (!Array.isArray(spaceIndexes)) throw new Error("the property must be array of numbers");
    if (spaceIndexes.length === 0) return null;
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(theme);
    return _responsive(media, spaceIndexes, (spaceIndex)=>_fillCSSObject(props, rem(space[spaceIndex])));
}
function responsiveFont(fontKey, props) {
    const { $size, $weight } = props, { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), { family, sizes, weights } = font[fontKey], fontWeight = $weight && weights[$weight] || weights.regular, defaultSize = sizes[2], base = {
        position: "relative",
        fontFamily: family,
        fontWeight,
        padding: "1px 0",
        margin: 0,
        "&:before": {
            content: '""',
            display: "block",
            height: 0
        },
        "&:after": {
            content: '""',
            display: "block",
            height: 0
        },
        "& > code, & > span": {
            display: "block"
        },
        "&:not([hidden])": {
            display: "block"
        }
    };
    if (!$size) return responsiveFont.warned || (console.warn("No size specified for responsive font", {
        fontKey,
        $size,
        props,
        base
    }), responsiveFont.warned = !0), [
        base
    ];
    const resp = _responsive(media, $size, (sizeIndex)=>fontSize(sizes[sizeIndex] || defaultSize));
    return [
        base,
        ...resp
    ];
}
function fontSize(size2) {
    const { ascenderHeight, descenderHeight, fontSize: fontSize2, iconSize, letterSpacing, lineHeight } = size2, negHeight = ascenderHeight + descenderHeight, capHeight = lineHeight - negHeight, iconOffset = (capHeight - iconSize) / 2, customIconSize = Math.floor(fontSize2 * 1.125 / 2) * 2 + 1, customIconOffset = (capHeight - customIconSize) / 2;
    return {
        fontSize: rem(fontSize2),
        lineHeight: `calc(${lineHeight} / ${fontSize2})`,
        letterSpacing: rem(letterSpacing),
        transform: `translateY(${rem(descenderHeight)})`,
        "&:before": {
            marginTop: `calc(${rem(0 - negHeight)} - 1px)`
        },
        "&:after": {
            marginBottom: "-1px"
        },
        "& svg:not([data-sanity-icon])": {
            fontSize: `calc(${customIconSize} / 16 * 1rem)`,
            margin: rem(customIconOffset)
        },
        "& [data-sanity-icon]": {
            fontSize: `calc(${iconSize} / 16 * 1rem)`,
            margin: rem(iconOffset)
        }
    };
}
function responsiveCodeFontStyle(props) {
    return responsiveFont("code", props);
}
function responsiveHeadingFont(props) {
    return responsiveFont("heading", props);
}
function responsiveLabelFont(props) {
    return responsiveFont("label", props);
}
function responsiveTextAlignStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$align, (textAlign)=>({
            textAlign
        }));
}
function responsiveTextFont(props) {
    return responsiveFont("text", props);
}
function useArrayProp(val, defaultVal) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    let t0;
    $[0] !== defaultVal || $[1] !== val ? (t0 = ()=>[
            _getArrayProp(val, defaultVal),
            JSON.stringify(val != null ? val : defaultVal)
        ], $[0] = defaultVal, $[1] = val, $[2] = t0) : t0 = $[2];
    const [t1, setCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0), [cachedVal, cachedHash] = t1, hash = JSON.stringify(val != null ? val : defaultVal);
    return hash !== cachedHash && setCache([
        _getArrayProp(val, defaultVal),
        hash
    ]), cachedVal;
}
function _getElements(element, elementsArg) {
    const ret = [
        element
    ];
    for (const el of elementsArg)Array.isArray(el) ? ret.push(...el) : ret.push(el);
    return ret.filter(Boolean);
}
function useClickOutside(listener, t0, boundaryElement) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12), elementsArg = t0 === void 0 ? EMPTY_ARRAY : t0, [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    $[0] !== element || $[1] !== elementsArg ? (t1 = ()=>_getElements(element, elementsArg), $[0] = element, $[1] = elementsArg, $[2] = t1) : t1 = $[2];
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1), elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(elements);
    let t2, t3;
    $[3] !== element || $[4] !== elementsArg ? (t2 = ()=>{
        const prevElements = elementsRef.current, nextElements = _getElements(element, elementsArg);
        if (prevElements.length !== nextElements.length) {
            setElements(nextElements), elementsRef.current = nextElements;
            return;
        }
        for (const el of prevElements)if (!nextElements.includes(el)) {
            setElements(nextElements), elementsRef.current = nextElements;
            return;
        }
        for (const el_0 of nextElements)if (!prevElements.includes(el_0)) {
            setElements(nextElements), elementsRef.current = nextElements;
            return;
        }
    }, t3 = [
        element,
        elementsArg
    ], $[3] = element, $[4] = elementsArg, $[5] = t2, $[6] = t3) : (t2 = $[5], t3 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4, t5;
    return $[7] !== boundaryElement || $[8] !== elements || $[9] !== listener ? (t4 = ()=>{
        if (!listener) return;
        const handleWindowMouseDown = (evt)=>{
            const target = evt.target;
            if (target instanceof Node && !(boundaryElement && !boundaryElement.contains(target))) {
                for (const el_1 of elements)if (target === el_1 || el_1.contains(target)) return;
                listener(evt);
            }
        };
        return window.addEventListener("mousedown", handleWindowMouseDown), ()=>{
            window.removeEventListener("mousedown", handleWindowMouseDown);
        };
    }, t5 = [
        boundaryElement,
        listener,
        elements
    ], $[7] = boundaryElement, $[8] = elements, $[9] = listener, $[10] = t4, $[11] = t5) : (t4 = $[10], t5 = $[11]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5), setElement;
}
function useClickOutsideEvent(listener, t0, boundaryElement) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), elementsArg = t0 === void 0 ? _temp$b : t0;
    let t1;
    $[0] !== boundaryElement || $[1] !== elementsArg || $[2] !== listener ? (t1 = (evt)=>{
        if (!listener) return;
        const target = evt.target;
        if (!(target instanceof Node)) return;
        const resolvedBoundaryElement = boundaryElement == null ? void 0 : boundaryElement();
        if (resolvedBoundaryElement && !resolvedBoundaryElement.contains(target)) return;
        const elements = elementsArg().flat();
        for (const el of elements)if (el && (target === el || el.contains(target))) return;
        listener(evt);
    }, $[0] = boundaryElement, $[1] = elementsArg, $[2] = listener, $[3] = t1) : t1 = $[3];
    const onEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t1), hasListener = !!listener;
    let t2, t3;
    $[4] !== hasListener || $[5] !== onEvent ? (t2 = ()=>{
        if (!hasListener) return;
        const handleEvent = (evt_0)=>onEvent(evt_0);
        return document.addEventListener("mousedown", handleEvent), ()=>{
            document.removeEventListener("mousedown", handleEvent);
        };
    }, t3 = [
        hasListener,
        onEvent
    ], $[4] = hasListener, $[5] = onEvent, $[6] = t2, $[7] = t3) : (t2 = $[6], t3 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(listener ? "MouseDown On" : "MouseDown Off");
}
function _temp$b() {
    return EMPTY_ARRAY;
}
function useCustomValidity(ref, customValidity) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    let t0;
    $[0] !== customValidity || $[1] !== ref.current ? (t0 = ()=>{
        var _a;
        (_a = ref.current) == null || _a.setCustomValidity(customValidity || "");
    }, $[0] = customValidity, $[1] = ref.current, $[2] = t0) : t0 = $[2];
    let t1;
    $[3] !== customValidity || $[4] !== ref ? (t1 = [
        customValidity,
        ref
    ], $[3] = customValidity, $[4] = ref, $[5] = t1) : t1 = $[5], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
var resizeObservers = [], hasActiveObservations = function() {
    return resizeObservers.some(function(ro) {
        return ro.activeTargets.length > 0;
    });
}, hasSkippedObservations = function() {
    return resizeObservers.some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
}, msg = "ResizeObserver loop completed with undelivered notifications.", deliverResizeLoopError = function() {
    var event;
    typeof ErrorEvent == "function" ? event = new ErrorEvent("error", {
        message: msg
    }) : (event = document.createEvent("Event"), event.initEvent("error", !1, !1), event.message = msg), window.dispatchEvent(event);
}, ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
    ResizeObserverBoxOptions2.BORDER_BOX = "border-box", ResizeObserverBoxOptions2.CONTENT_BOX = "content-box", ResizeObserverBoxOptions2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(obj) {
    return Object.freeze(obj);
}, ResizeObserverSize = /* @__PURE__ */ function() {
    function ResizeObserverSize2(inlineSize, blockSize) {
        this.inlineSize = inlineSize, this.blockSize = blockSize, freeze(this);
    }
    return ResizeObserverSize2;
}(), DOMRectReadOnly = function() {
    function DOMRectReadOnly2(x, y, width, height) {
        return this.x = x, this.y = y, this.width = width, this.height = height, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, freeze(this);
    }
    return DOMRectReadOnly2.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return {
            x,
            y,
            top,
            right,
            bottom,
            left,
            width,
            height
        };
    }, DOMRectReadOnly2.fromRect = function(rectangle) {
        return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }, DOMRectReadOnly2;
}(), isSVG = function(target) {
    return target instanceof SVGElement && "getBBox" in target;
}, isHidden = function(target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
}, isElement = function(obj) {
    var _a;
    if (obj instanceof Element) return !0;
    var scope = (_a = obj == null ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
}, isReplacedElement = function(target) {
    switch(target.tagName){
        case "INPUT":
            if (target.type !== "image") break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
            return !0;
    }
    return !1;
}, global$1 = typeof window < "u" ? window : {}, cache = /* @__PURE__ */ new WeakMap(), scrollRegexp = /auto|scroll/, verticalRegexp = /^tb|vertical/, IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent), parseDimension = function(pixel) {
    return parseFloat(pixel || "0");
}, size$1 = function(inlineSize, blockSize, switchSizes) {
    return inlineSize === void 0 && (inlineSize = 0), blockSize === void 0 && (blockSize = 0), switchSizes === void 0 && (switchSizes = !1), new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
}, zeroBoxes = freeze({
    devicePixelContentBoxSize: size$1(),
    borderBoxSize: size$1(),
    contentBoxSize: size$1(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
}), calculateBoxSizes = function(target, forceRecalculation) {
    if (forceRecalculation === void 0 && (forceRecalculation = !1), cache.has(target) && !forceRecalculation) return cache.get(target);
    if (isHidden(target)) return cache.set(target, zeroBoxes), zeroBoxes;
    var cs = getComputedStyle(target), svg = isSVG(target) && target.ownerSVGElement && target.getBBox(), removePadding = !IE && cs.boxSizing === "border-box", switchSizes = verticalRegexp.test(cs.writingMode || ""), canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || ""), canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || ""), paddingTop = svg ? 0 : parseDimension(cs.paddingTop), paddingRight = svg ? 0 : parseDimension(cs.paddingRight), paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom), paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft), borderTop2 = svg ? 0 : parseDimension(cs.borderTopWidth), borderRight2 = svg ? 0 : parseDimension(cs.borderRightWidth), borderBottom2 = svg ? 0 : parseDimension(cs.borderBottomWidth), borderLeft2 = svg ? 0 : parseDimension(cs.borderLeftWidth), horizontalPadding = paddingLeft + paddingRight, verticalPadding = paddingTop + paddingBottom, horizontalBorderArea = borderLeft2 + borderRight2, verticalBorderArea = borderTop2 + borderBottom2, horizontalScrollbarThickness = canScrollHorizontally ? target.offsetHeight - verticalBorderArea - target.clientHeight : 0, verticalScrollbarThickness = canScrollVertically ? target.offsetWidth - horizontalBorderArea - target.clientWidth : 0, widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0, heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0, contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness, contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness, borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea, borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea, boxes = freeze({
        devicePixelContentBoxSize: size$1(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size$1(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size$1(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    return cache.set(target, boxes), boxes;
}, calculateBoxSize = function(target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
}, ResizeObserverEntry = /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target, this.contentRect = boxes.contentRect, this.borderBoxSize = freeze([
            boxes.borderBoxSize
        ]), this.contentBoxSize = freeze([
            boxes.contentBoxSize
        ]), this.devicePixelContentBoxSize = freeze([
            boxes.devicePixelContentBoxSize
        ]);
    }
    return ResizeObserverEntry2;
}(), calculateDepthForNode = function(node) {
    if (isHidden(node)) return 1 / 0;
    for(var depth = 0, parent = node.parentNode; parent;)depth += 1, parent = parent.parentNode;
    return depth;
}, broadcastActiveObservations = function() {
    var shallowestDepth = 1 / 0, callbacks2 = [];
    resizeObservers.forEach(function(ro) {
        if (ro.activeTargets.length !== 0) {
            var entries = [];
            ro.activeTargets.forEach(function(ot) {
                var entry = new ResizeObserverEntry(ot.target), targetDepth = calculateDepthForNode(ot.target);
                entries.push(entry), ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox), targetDepth < shallowestDepth && (shallowestDepth = targetDepth);
            }), callbacks2.push(function() {
                ro.callback.call(ro.observer, entries, ro.observer);
            }), ro.activeTargets.splice(0, ro.activeTargets.length);
        }
    });
    for(var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++){
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
}, gatherActiveObservationsAtDepth = function(depth) {
    resizeObservers.forEach(function(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length), ro.skippedTargets.splice(0, ro.skippedTargets.length), ro.observationTargets.forEach(function(ot) {
            ot.isActive() && (calculateDepthForNode(ot.target) > depth ? ro.activeTargets.push(ot) : ro.skippedTargets.push(ot));
        });
    });
}, process = function() {
    var depth = 0;
    for(gatherActiveObservationsAtDepth(depth); hasActiveObservations();)depth = broadcastActiveObservations(), gatherActiveObservationsAtDepth(depth);
    return hasSkippedObservations() && deliverResizeLoopError(), depth > 0;
}, trigger, callbacks = [], notify = function() {
    return callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
}, queueMicroTask = function(callback) {
    if (!trigger) {
        var toggle_1 = 0, el_1 = document.createTextNode(""), config = {
            characterData: !0
        };
        new MutationObserver(function() {
            return notify();
        }).observe(el_1, config), trigger = function() {
            el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    callbacks.push(callback), trigger();
}, queueResizeObserver = function(cb) {
    queueMicroTask(function() {
        requestAnimationFrame(cb);
    });
}, watching = 0, isWatching = function() {
    return !!watching;
}, CATCH_PERIOD = 250, observerConfig = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
}, events = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus"
], time = function(timeout) {
    return timeout === void 0 && (timeout = 0), Date.now() + timeout;
}, scheduled = !1, Scheduler = function() {
    function Scheduler2() {
        var _this = this;
        this.stopped = !0, this.listener = function() {
            return _this.schedule();
        };
    }
    return Scheduler2.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0 && (timeout = CATCH_PERIOD), !scheduled) {
            scheduled = !0;
            var until = time(timeout);
            queueResizeObserver(function() {
                var elementsHaveResized = !1;
                try {
                    elementsHaveResized = process();
                } finally{
                    if (scheduled = !1, timeout = until - time(), !isWatching()) return;
                    elementsHaveResized ? _this.run(1e3) : timeout > 0 ? _this.run(timeout) : _this.start();
                }
            });
        }
    }, Scheduler2.prototype.schedule = function() {
        this.stop(), this.run();
    }, Scheduler2.prototype.observe = function() {
        var _this = this, cb = function() {
            return _this.observer && _this.observer.observe(document.body, observerConfig);
        };
        document.body ? cb() : global$1.addEventListener("DOMContentLoaded", cb);
    }, Scheduler2.prototype.start = function() {
        var _this = this;
        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), events.forEach(function(name) {
            return global$1.addEventListener(name, _this.listener, !0);
        }));
    }, Scheduler2.prototype.stop = function() {
        var _this = this;
        this.stopped || (this.observer && this.observer.disconnect(), events.forEach(function(name) {
            return global$1.removeEventListener(name, _this.listener, !0);
        }), this.stopped = !0);
    }, Scheduler2;
}(), scheduler = new Scheduler(), updateCount = function(n) {
    !watching && n > 0 && scheduler.start(), watching += n, !watching && scheduler.stop();
}, skipNotifyOnElement = function(target) {
    return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
}, ResizeObservation = function() {
    function ResizeObservation2(target, observedBox) {
        this.target = target, this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    return ResizeObservation2.prototype.isActive = function() {
        var size2 = calculateBoxSize(this.target, this.observedBox, !0);
        return skipNotifyOnElement(this.target) && (this.lastReportedSize = size2), this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize;
    }, ResizeObservation2;
}(), ResizeObserverDetail = /* @__PURE__ */ function() {
    function ResizeObserverDetail2(resizeObserver, callback) {
        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = resizeObserver, this.callback = callback;
    }
    return ResizeObserverDetail2;
}(), observerMap = /* @__PURE__ */ new WeakMap(), getObservationIndex = function(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1)if (observationTargets[i].target === target) return i;
    return -1;
}, ResizeObserverController = function() {
    function ResizeObserverController2() {}
    return ResizeObserverController2.connect = function(resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    }, ResizeObserverController2.observe = function(resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver), firstObservation = detail.observationTargets.length === 0;
        getObservationIndex(detail.observationTargets, target) < 0 && (firstObservation && resizeObservers.push(detail), detail.observationTargets.push(new ResizeObservation(target, options && options.box)), updateCount(1), scheduler.schedule());
    }, ResizeObserverController2.unobserve = function(resizeObserver, target) {
        var detail = observerMap.get(resizeObserver), index = getObservationIndex(detail.observationTargets, target), lastObservation = detail.observationTargets.length === 1;
        index >= 0 && (lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1), detail.observationTargets.splice(index, 1), updateCount(-1));
    }, ResizeObserverController2.disconnect = function(resizeObserver) {
        var _this = this, detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        }), detail.activeTargets.splice(0, detail.activeTargets.length);
    }, ResizeObserverController2;
}(), ResizeObserver = function() {
    function ResizeObserver2(callback) {
        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof callback != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        ResizeObserverController.connect(this, callback);
    }
    return ResizeObserver2.prototype.observe = function(target, options) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!isElement(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        ResizeObserverController.observe(this, target, options);
    }, ResizeObserver2.prototype.unobserve = function(target) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!isElement(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        ResizeObserverController.unobserve(this, target);
    }, ResizeObserver2.prototype.disconnect = function() {
        ResizeObserverController.disconnect(this);
    }, ResizeObserver2.toString = function() {
        return "function ResizeObserver () { [polyfill code] }";
    }, ResizeObserver2;
}();
const _ResizeObserver = typeof document < "u" && typeof window < "u" && window.ResizeObserver ? window.ResizeObserver : ResizeObserver, _elementSizeObserver = _createElementSizeObserver();
function _createElementRectValueListener() {
    return {
        subscribe (element, subscriber) {
            const resizeObserver = new _ResizeObserver(([entry])=>{
                subscriber({
                    _contentRect: entry.contentRect,
                    border: {
                        width: entry.borderBoxSize[0].inlineSize,
                        height: entry.borderBoxSize[0].blockSize
                    },
                    content: {
                        width: entry.contentRect.width,
                        height: entry.contentRect.height
                    }
                });
            });
            return resizeObserver.observe(element), ()=>{
                resizeObserver.unobserve(element), resizeObserver.disconnect();
            };
        }
    };
}
function _createElementSizeObserver() {
    const disposeCache = /* @__PURE__ */ new WeakMap(), subscribersCache = /* @__PURE__ */ new WeakMap();
    return {
        subscribe (element, subscriber) {
            const subscribers = subscribersCache.get(element) || [];
            let dispose = disposeCache.get(element);
            return subscribersCache.has(element) || (subscribersCache.set(element, subscribers), dispose = _createElementRectValueListener().subscribe(element, (elementRect)=>{
                for (const sub of subscribers)sub(elementRect);
            })), subscribers.push(subscriber), ()=>{
                const idx = subscribers.indexOf(subscriber);
                idx > -1 && subscribers.splice(idx, 1), subscribers.length === 0 && dispose && dispose();
            };
        }
    };
}
function useElementSize(element) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), [size2, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0, t1;
    return $[0] !== element ? (t0 = ()=>{
        if (element) return _elementSizeObserver.subscribe(element, setSize);
    }, t1 = [
        element
    ], $[0] = element, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), size2;
}
function useElementRect(element) {
    const elementSize = useElementSize(element);
    return (elementSize == null ? void 0 : elementSize._contentRect) || null;
}
function useForwardedRef(ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1), innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    return $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>innerRef.current, $[0] = t0) : t0 = $[0], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, t0), innerRef;
}
function useGlobalKeyDown(onKeyDown) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    let t0;
    $[0] !== onKeyDown ? (t0 = (event)=>onKeyDown(event), $[0] = onKeyDown, $[1] = t0) : t0 = $[1];
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t0);
    let t1, t2;
    $[2] !== handleKeyDown ? (t1 = ()=>{
        const handler = (event_0)=>handleKeyDown(event_0);
        return window.addEventListener("keydown", handler), ()=>window.removeEventListener("keydown", handler);
    }, t2 = [
        handleKeyDown
    ], $[2] = handleKeyDown, $[3] = t1, $[4] = t2) : (t1 = $[3], t2 = $[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
}
function useMatchMedia(mediaQueryString, getServerSnapshot2) {
    const { subscribe: subscribe2, getSnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMatchMedia.useMemo": ()=>{
            let MEDIA_QUERY_CACHE;
            const getMatchMedia = {
                "useMatchMedia.useMemo.getMatchMedia": ()=>(MEDIA_QUERY_CACHE || (MEDIA_QUERY_CACHE = window.matchMedia(mediaQueryString)), MEDIA_QUERY_CACHE)
            }["useMatchMedia.useMemo.getMatchMedia"];
            return {
                subscribe: ({
                    "useMatchMedia.useMemo": (onStoreChange)=>{
                        const matchMedia = getMatchMedia();
                        return matchMedia.addEventListener("change", onStoreChange), ({
                            "useMatchMedia.useMemo": ()=>matchMedia.removeEventListener("change", onStoreChange)
                        })["useMatchMedia.useMemo"];
                    }
                })["useMatchMedia.useMemo"],
                getSnapshot: ({
                    "useMatchMedia.useMemo": ()=>getMatchMedia().matches
                })["useMatchMedia.useMemo"]
            };
        }
    }["useMatchMedia.useMemo"], [
        mediaQueryString
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(mediaQueryString), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe2, getSnapshot, getServerSnapshot2);
}
function getGlobalScope() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof window < "u") return window;
    if (typeof self < "u") return self;
    if (typeof global < "u") return global;
    throw new Error("@sanity/ui: could not locate global scope");
}
const globalScope = getGlobalScope();
function createGlobalScopedContext(key2, defaultValue) {
    const symbol = Symbol.for(key2);
    return typeof document > "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue) : (globalScope[symbol] = globalScope[symbol] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue), globalScope[symbol]);
}
const ThemeContext = createGlobalScopedContext("@sanity/ui/context/theme", null);
function ThemeProvider(props) {
    var _a, _b, _c2;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15), parentTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext), { children } = props, scheme = (_a = props.scheme) != null ? _a : (parentTheme == null ? void 0 : parentTheme.scheme) || "light", rootTheme = (_b = props.theme) != null ? _b : (parentTheme == null ? void 0 : parentTheme.theme) || null, tone = (_c2 = props.tone) != null ? _c2 : (parentTheme == null ? void 0 : parentTheme.tone) || "default";
    let t0;
    bb0: {
        if (!rootTheme) {
            t0 = null;
            break bb0;
        }
        let t12;
        $[0] !== rootTheme || $[1] !== scheme || $[2] !== tone ? (t12 = {
            version: 0,
            theme: rootTheme,
            scheme,
            tone
        }, $[0] = rootTheme, $[1] = scheme, $[2] = tone, $[3] = t12) : t12 = $[3], t0 = t12;
    }
    const themeContext = t0;
    let t1;
    bb1: {
        if (!rootTheme) {
            t1 = null;
            break bb1;
        }
        let t22;
        $[4] !== rootTheme || $[5] !== scheme || $[6] !== tone ? (t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getScopedTheme"])(rootTheme, scheme, tone), $[4] = rootTheme, $[5] = scheme, $[6] = tone, $[7] = t22) : t22 = $[7], t1 = t22;
    }
    const theme = t1;
    if (!theme) {
        let t22;
        return $[8] === Symbol.for("react.memo_cache_sentinel") ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pre", {
            children: 'ThemeProvider: no "theme" property provided'
        }), $[8] = t22) : t22 = $[8], t22;
    }
    let t2;
    $[9] !== children || $[10] !== theme ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme,
        children
    }), $[9] = children, $[10] = theme, $[11] = t2) : t2 = $[11];
    let t3;
    return $[12] !== t2 || $[13] !== themeContext ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThemeContext.Provider, {
        value: themeContext,
        children: t2
    }), $[12] = t2, $[13] = themeContext, $[14] = t3) : t3 = $[14], t3;
}
ThemeProvider.displayName = "ThemeProvider";
function useRootTheme() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!value) throw new Error("useRootTheme(): missing context value");
    return value;
}
function ThemeColorProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { children, scheme, tone } = props, root = useRootTheme(), t0 = scheme || root.scheme;
    let t1;
    return $[0] !== children || $[1] !== root.theme || $[2] !== t0 || $[3] !== tone ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThemeProvider, {
        scheme: t0,
        theme: root.theme,
        tone,
        children
    }), $[0] = children, $[1] = root.theme, $[2] = t0, $[3] = tone, $[4] = t1) : t1 = $[4], t1;
}
ThemeColorProvider.displayName = "ThemeColorProvider";
function useTheme() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
}
function useTheme_v2() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2), t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    let t1;
    return $[0] !== t0 ? (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(t0), $[0] = t0, $[1] = t1) : t1 = $[1], t1;
}
function _getMediaQuery(media, index) {
    return index === 0 ? `screen and (max-width: ${media[index] - 1}px)` : index === media.length ? `screen and (min-width: ${media[index - 1]}px)` : `screen and (min-width: ${media[index - 1]}px) and (max-width: ${media[index] - 1}px)`;
}
function _createMediaStore(media) {
    const mediaLen = media.length;
    let sizes;
    const getSizes = ()=>{
        if (!sizes) {
            sizes = [];
            for(let index = mediaLen; index > -1; index -= 1){
                const mediaQuery = _getMediaQuery(media, index);
                sizes.push({
                    index,
                    mq: window.matchMedia(mediaQuery)
                });
            }
        }
        return sizes;
    };
    return {
        getSnapshot: ()=>{
            for (const { index, mq } of getSizes())if (mq.matches) return index;
            return 0;
        },
        subscribe: (onStoreChange)=>{
            const disposeFns = [];
            for (const { mq } of getSizes()){
                const handleChange = ()=>{
                    mq.matches && onStoreChange();
                };
                mq.addEventListener("change", handleChange), disposeFns.push(()=>mq.removeEventListener("change", handleChange));
            }
            return ()=>{
                for (const disposeFn of disposeFns)disposeFn();
            };
        }
    };
}
function getServerSnapshot() {
    return 0;
}
function useMediaIndex() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2), { media } = useTheme_v2();
    let t0, t1;
    $[0] !== media ? (t1 = _createMediaStore(media), $[0] = media, $[1] = t1) : t1 = $[1], t0 = t1;
    const store = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getSnapshot, getServerSnapshot);
}
function usePrefersDark(t0) {
    return useMatchMedia("(prefers-color-scheme: dark)", t0 === void 0 ? _temp$a : t0);
}
function _temp$a() {
    return !1;
}
function usePrefersReducedMotion(t0) {
    return useMatchMedia("(prefers-reduced-motion: reduce)", t0 === void 0 ? _temp$9 : t0);
}
function _temp$9() {
    return !1;
}
function responsiveBorderStyle() {
    return [
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft
    ];
}
function border(props) {
    var _a, _b;
    const { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), borderStyle = `${(_b = (_a = card.border) == null ? void 0 : _a.width) != null ? _b : 1}px solid var(--card-border-color)`;
    return _responsive(media, props.$border, (value)=>value ? {
            "&&": {
                border: borderStyle
            }
        } : {
            "&&": {
                border: 0
            }
        });
}
function borderTop(props) {
    var _a, _b;
    const { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), borderStyle = `${(_b = (_a = card.border) == null ? void 0 : _a.width) != null ? _b : 1}px solid var(--card-border-color)`;
    return _responsive(media, props.$borderTop, (value)=>value ? {
            "&&": {
                borderTop: borderStyle
            }
        } : {
            "&&": {
                borderTop: 0
            }
        });
}
function borderRight(props) {
    var _a, _b;
    const { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), borderStyle = `${(_b = (_a = card.border) == null ? void 0 : _a.width) != null ? _b : 1}px solid var(--card-border-color)`;
    return _responsive(media, props.$borderRight, (value)=>value ? {
            "&&": {
                borderRight: borderStyle
            }
        } : {
            "&&": {
                borderRight: 0
            }
        });
}
function borderBottom(props) {
    var _a, _b;
    const { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), borderStyle = `${(_b = (_a = card.border) == null ? void 0 : _a.width) != null ? _b : 1}px solid var(--card-border-color)`;
    return _responsive(media, props.$borderBottom, (value)=>value ? {
            "&&": {
                borderBottom: borderStyle
            }
        } : {
            "&&": {
                borderBottom: 0
            }
        });
}
function borderLeft(props) {
    var _a, _b;
    const { card, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), borderStyle = `${(_b = (_a = card.border) == null ? void 0 : _a.width) != null ? _b : 1}px solid var(--card-border-color)`;
    return _responsive(media, props.$borderLeft, (value)=>value ? {
            "&&": {
                borderLeft: borderStyle
            }
        } : {
            "&&": {
                borderLeft: 0
            }
        });
}
const BASE_STYLE$4 = {
    '&[data-as="ul"],&[data-as="ol"]': {
        listStyle: "none"
    }
}, BOX_SIZING = {
    content: "content-box",
    border: "border-box"
}, BOX_HEIGHT = {
    stretch: "stretch",
    fill: "100%"
};
function boxStyle() {
    return BASE_STYLE$4;
}
function responsiveBoxStyle() {
    return [
        responsiveBoxSizingStyle,
        responsiveBoxHeightStyle,
        responsiveBoxOverflowStyle,
        responsiveBoxDisplayStyle
    ];
}
function responsiveBoxDisplayStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$display, (display)=>({
            "&:not([hidden])": {
                display
            }
        }));
}
function responsiveBoxSizingStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$sizing, (sizing)=>({
            boxSizing: BOX_SIZING[sizing]
        }));
}
function responsiveBoxHeightStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$height, (height)=>({
            height: BOX_HEIGHT[height]
        }));
}
function responsiveBoxOverflowStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$overflow, (overflow)=>({
            overflow
        }));
}
const BASE_STYLE$3 = {
    "&&:not([hidden])": {
        display: "flex"
    }
};
function responsiveFlexStyle() {
    return [
        BASE_STYLE$3,
        responsiveFlexAlignStyle,
        responsiveFlexGapStyle,
        responsiveFlexWrapStyle,
        responsiveFlexJustifyStyle,
        responsiveFlexDirectionStyle
    ];
}
function responsiveFlexAlignStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$align, (align)=>({
            alignItems: align
        }));
}
function responsiveFlexGapStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$gap, (gap)=>({
            gap: gap ? rem(space[gap]) : void 0
        }));
}
function responsiveFlexWrapStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$wrap, (wrap)=>({
            flexWrap: wrap
        }));
}
function responsiveFlexJustifyStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$justify, (justify)=>({
            justifyContent: justify
        }));
}
function responsiveFlexDirectionStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$direction, (direction)=>({
            flexDirection: direction
        }));
}
const BASE_STYLE$2 = {
    minWidth: 0,
    minHeight: 0
};
function flexItemStyle() {
    return [
        BASE_STYLE$2,
        responsiveFlexItemStyle
    ];
}
function responsiveFlexItemStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return props.$flex ? _responsive(media, props.$flex, (flex)=>({
            flex
        })) : EMPTY_ARRAY;
}
function focusRingBorderStyle(border2) {
    return `inset 0 0 0 ${border2.width}px ${border2.color}`;
}
function focusRingStyle(opts) {
    const { base, border: border2, focusRing } = opts, focusRingOutsetWidth = focusRing.offset + focusRing.width, focusRingInsetWidth = 0 - focusRing.offset, bgColor = base ? base.bg : "var(--card-bg-color)";
    return [
        focusRingInsetWidth > 0 && `inset 0 0 0 ${focusRingInsetWidth}px var(--card-focus-ring-color)`,
        border2 && focusRingBorderStyle(border2),
        focusRingInsetWidth < 0 && `0 0 0 ${0 - focusRingInsetWidth}px ${bgColor}`,
        focusRingOutsetWidth > 0 && `0 0 0 ${focusRingOutsetWidth}px var(--card-focus-ring-color)`
    ].filter(Boolean).join(",");
}
const GRID_CSS = {
    "&&:not([hidden])": {
        display: "grid"
    },
    '&[data-as="ul"],&[data-as="ol"]': {
        listStyle: "none"
    }
}, GRID_AUTO_COLUMS = {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
}, GRID_AUTO_ROWS = {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
};
function responsiveGridStyle() {
    return [
        GRID_CSS,
        responsiveGridAutoFlowStyle,
        responsiveGridAutoRowsStyle,
        responsiveGridAutoColsStyle,
        responsiveGridColumnsStyle,
        responsiveGridRowsStyle,
        responsiveGridGapStyle,
        responsiveGridGapXStyle,
        responsiveGridGapYStyle
    ];
}
function responsiveGridAutoFlowStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$autoFlow, (autoFlow)=>({
            gridAutoFlow: autoFlow
        }));
}
function responsiveGridAutoRowsStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$autoRows, (autoRows)=>({
            gridAutoRows: autoRows && GRID_AUTO_ROWS[autoRows]
        }));
}
function responsiveGridAutoColsStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$autoCols, (autoCols)=>({
            gridAutoColumns: autoCols && GRID_AUTO_COLUMS[autoCols]
        }));
}
function responsiveGridColumnsStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$columns, (columns)=>({
            gridTemplateColumns: columns && `repeat(${columns},minmax(0,1fr));`
        }));
}
function responsiveGridRowsStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$rows, (rows)=>({
            gridTemplateRows: rows && `repeat(${rows},minmax(0,1fr));`
        }));
}
function responsiveGridGapStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$gap, (gap)=>({
            gridGap: gap ? rem(space[gap]) : void 0
        }));
}
function responsiveGridGapXStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$gapX, (gapX)=>({
            columnGap: gapX ? rem(space[gapX]) : void 0
        }));
}
function responsiveGridGapYStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$gapY, (gapY)=>({
            rowGap: gapY ? rem(space[gapY]) : void 0
        }));
}
function responsiveGridItemStyle() {
    return [
        responsiveGridItemRowStyle,
        responsiveGridItemRowStartStyle,
        responsiveGridItemRowEndStyle,
        responsiveGridItemColumnStyle,
        responsiveGridItemColumnStartStyle,
        responsiveGridItemColumnEndStyle
    ];
}
const GRID_ITEM_ROW = {
    auto: "auto",
    full: "1 / -1"
}, GRID_ITEM_COLUMN = {
    auto: "auto",
    full: "1 / -1"
};
function responsiveGridItemRowStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$row, (row)=>typeof row == "number" ? {
            gridRow: `span ${row} / span ${row}`
        } : {
            gridRow: GRID_ITEM_ROW[row]
        });
}
function responsiveGridItemRowStartStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$rowStart, (rowStart)=>({
            gridRowStart: rowStart
        }));
}
function responsiveGridItemRowEndStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$rowEnd, (rowEnd)=>({
            gridRowEnd: rowEnd
        }));
}
function responsiveGridItemColumnStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$column, (column)=>typeof column == "number" ? {
            gridColumn: `span ${column} / span ${column}`
        } : {
            gridColumn: GRID_ITEM_COLUMN[column]
        });
}
function responsiveGridItemColumnStartStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$columnStart, (columnStart)=>({
            gridColumnStart: columnStart
        }));
}
function responsiveGridItemColumnEndStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$columnEnd, (columnEnd)=>({
            gridColumnEnd: columnEnd
        }));
}
var __defProp$R = Object.defineProperty, __defProps$P = Object.defineProperties, __getOwnPropDescs$P = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$Q = Object.getOwnPropertySymbols, __hasOwnProp$Q = Object.prototype.hasOwnProperty, __propIsEnum$Q = Object.prototype.propertyIsEnumerable, __defNormalProp$R = (obj, key2, value)=>key2 in obj ? __defProp$R(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$Q = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$Q.call(b, prop) && __defNormalProp$R(a, prop, b[prop]);
    if (__getOwnPropSymbols$Q) for (var prop of __getOwnPropSymbols$Q(b))__propIsEnum$Q.call(b, prop) && __defNormalProp$R(a, prop, b[prop]);
    return a;
}, __spreadProps$P = (a, b)=>__defProps$P(a, __getOwnPropDescs$P(b));
function responsiveInputPaddingStyle(props) {
    const { $fontSize, $iconLeft, $iconRight, $padding, $space } = props, { font, media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), len = Math.max($padding.length, $space.length, $fontSize.length), _padding = [], _space = [], _fontSize = [];
    for(let i = 0; i < len; i += 1)_fontSize[i] = $fontSize[i] === void 0 ? _fontSize[i - 1] : $fontSize[i], _padding[i] = $padding[i] === void 0 ? _padding[i - 1] : $padding[i], _space[i] = $space[i] === void 0 ? _space[i - 1] : $space[i];
    return _responsive(media, _padding, (_, i)=>{
        const size2 = font.text.sizes[_fontSize[i]] || font.text.sizes[2], emSize = size2.lineHeight - size2.ascenderHeight - size2.descenderHeight, p = space[_padding[i]], s = space[_space[i]], styles = {
            paddingTop: rem(p - size2.ascenderHeight),
            paddingRight: rem(p),
            paddingBottom: rem(p - size2.descenderHeight),
            paddingLeft: rem(p)
        };
        return $iconRight && (styles.paddingRight = rem(p + emSize + s)), $iconLeft && (styles.paddingLeft = rem(p + emSize + s)), styles;
    });
}
function responsiveInputPaddingIconRightStyle(props) {
    return responsiveInputPaddingStyle(__spreadProps$P(__spreadValues$Q({}, props), {
        $iconRight: !0
    }));
}
const ROOT_STYLE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;
function textInputRootStyle() {
    return ROOT_STYLE;
}
function textInputBaseStyle(props) {
    const { $scheme, $tone, $weight } = props, { color, font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${font.text.family};
    font-weight: ${$weight && font.text.weights[$weight] || font.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${$scheme}'][data-tone='${$tone}'] {
      --input-fg-color: ${color.input.default.enabled.fg};
      --input-placeholder-color: ${color.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${color.input.default.enabled.fg};
        --input-placeholder-color: ${color.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${color.input.default.disabled.fg};
        --input-placeholder-color: ${color.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${color.input.invalid.enabled.fg};
        --input-placeholder-color: ${color.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${color.input.default.readOnly.fg};
        --input-placeholder-color: ${color.input.default.readOnly.placeholder};
      }
    }
  `;
}
function textInputFontSizeStyle(props) {
    const { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$fontSize, (sizeIndex)=>{
        const size2 = font.text.sizes[sizeIndex] || font.text.sizes[2];
        return {
            fontSize: rem(size2.fontSize),
            lineHeight: size2.lineHeight / size2.fontSize
        };
    });
}
function textInputRepresentationStyle(props) {
    const { $hasPrefix, $hasSuffix, $scheme, $tone, $unstableDisableFocusRing } = props, { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${$hasPrefix ? 0 : void 0};
    border-bottom-left-radius: ${$hasPrefix ? 0 : void 0};
    border-top-right-radius: ${$hasSuffix ? 0 : void 0};
    border-bottom-right-radius: ${$hasSuffix ? 0 : void 0};

    &[data-scheme='${$scheme}'][data-tone='${$tone}'] {
      --card-bg-color: ${color.input.default.enabled.bg};
      --card-fg-color: ${color.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${color.input.invalid.enabled.bg};
        --card-fg-color: ${color.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.invalid.enabled.border,
        width: input.border.width
    })};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${$unstableDisableFocusRing ? void 0 : focusRingStyle({
        border: {
            color: color.input.default.enabled.border,
            width: input.border.width
        },
        focusRing: input.text.focusRing
    })};
        }

        &:not([data-border]) {
          --input-box-shadow: ${$unstableDisableFocusRing ? void 0 : focusRingStyle({
        focusRing: input.text.focusRing
    })};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${color.input.default.disabled.bg} !important;
        --card-fg-color: ${color.input.default.disabled.fg} !important;
        --card-icon-color: ${color.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.default.disabled.border,
        width: input.border.width
    })};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${color.input.invalid.disabled.bg} !important;
        --card-fg-color: ${color.input.invalid.disabled.fg} !important;
        --card-icon-color: ${color.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.invalid.disabled.border,
        width: input.border.width
    })};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${color.input.default.readOnly.bg} !important;
        --card-fg-color: ${color.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${color.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${color.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${color.input.default.hovered.bg};
          --card-fg-color: ${color.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${color.input.invalid.hovered.bg};
          --card-fg-color: ${color.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.default.hovered.border,
        width: input.border.width
    })};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${focusRingBorderStyle({
        color: color.input.invalid.hovered.border,
        width: input.border.width
    })};
        }
      }
    }
  `;
}
function responsiveMarginStyle(props) {
    const { theme } = props;
    return [
        _getResponsiveSpace(theme, [
            "margin"
        ], props.$margin),
        _getResponsiveSpace(theme, [
            "marginLeft",
            "marginRight"
        ], props.$marginX),
        _getResponsiveSpace(theme, [
            "marginTop",
            "marginBottom"
        ], props.$marginY),
        _getResponsiveSpace(theme, [
            "marginTop"
        ], props.$marginTop),
        _getResponsiveSpace(theme, [
            "marginRight"
        ], props.$marginRight),
        _getResponsiveSpace(theme, [
            "marginBottom"
        ], props.$marginBottom),
        _getResponsiveSpace(theme, [
            "marginLeft"
        ], props.$marginLeft)
    ].filter(Boolean);
}
function responsivePaddingStyle(props) {
    const { theme } = props;
    return [
        _getResponsiveSpace(theme, [
            "padding"
        ], props.$padding),
        _getResponsiveSpace(theme, [
            "paddingLeft",
            "paddingRight"
        ], props.$paddingX),
        _getResponsiveSpace(theme, [
            "paddingTop",
            "paddingBottom"
        ], props.$paddingY),
        _getResponsiveSpace(theme, [
            "paddingTop"
        ], props.$paddingTop),
        _getResponsiveSpace(theme, [
            "paddingRight"
        ], props.$paddingRight),
        _getResponsiveSpace(theme, [
            "paddingBottom"
        ], props.$paddingBottom),
        _getResponsiveSpace(theme, [
            "paddingLeft"
        ], props.$paddingLeft)
    ].filter(Boolean);
}
function responsiveRadiusStyle(props) {
    const { media, radius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$radius, (value)=>{
        let borderRadius = 0;
        return typeof value == "number" && (borderRadius = rem(radius[value])), value === "full" && (borderRadius = "9999px"), {
            borderRadius
        };
    });
}
function toBoxShadow(shadow, color) {
    return `${shadow.map(rem).join(" ")} ${color}`;
}
function shadowStyle(shadow, outlineWidth = 1) {
    if (!shadow) return EMPTY_RECORD;
    const outline = `0 0 0 ${rem(outlineWidth)} var(--card-shadow-outline-color)`, umbra = toBoxShadow(shadow.umbra, "var(--card-shadow-umbra-color)"), penumbra = toBoxShadow(shadow.penumbra, "var(--card-shadow-penumbra-color)"), ambient = toBoxShadow(shadow.ambient, "var(--card-shadow-ambient-color)");
    return {
        boxShadow: `${outline}, ${umbra}, ${penumbra}, ${ambient}`
    };
}
function responsiveShadowStyle(props) {
    const { card, media, shadow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$shadow, (index)=>shadowStyle(shadow[index], card.shadow.outline));
}
function labelBaseStyle(props) {
    const { $accent, $muted } = props, { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    text-transform: uppercase;

    ${$accent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-accent-fg-color);
    `}

    ${$muted && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${font.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
}
var __defProp$Q = Object.defineProperty, __defProps$O = Object.defineProperties, __getOwnPropDescs$O = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$P = Object.getOwnPropertySymbols, __hasOwnProp$P = Object.prototype.hasOwnProperty, __propIsEnum$P = Object.prototype.propertyIsEnumerable, __defNormalProp$Q = (obj, key2, value)=>key2 in obj ? __defProp$Q(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$P = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$P.call(b, prop) && __defNormalProp$Q(a, prop, b[prop]);
    if (__getOwnPropSymbols$P) for (var prop of __getOwnPropSymbols$P(b))__propIsEnum$P.call(b, prop) && __defNormalProp$Q(a, prop, b[prop]);
    return a;
}, __spreadProps$O = (a, b)=>__defProps$O(a, __getOwnPropDescs$O(b)), __objRest$J = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$P.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$P) for (var prop of __getOwnPropSymbols$P(source))exclude.indexOf(prop) < 0 && __propIsEnum$P.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(responsiveLabelFont, responsiveTextAlignStyle, labelBaseStyle), SpanWithTextOverflow$2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`, Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    let accent, align, childrenProp, restProps, t0, t1, textOverflow, weight;
    $[0] !== props ? (_a = props, { accent, align, children: childrenProp, muted: t0, size: t1, textOverflow, weight } = _a, restProps = __objRest$J(_a, [
        "accent",
        "align",
        "children",
        "muted",
        "size",
        "textOverflow",
        "weight"
    ]), $[0] = props, $[1] = accent, $[2] = align, $[3] = childrenProp, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = textOverflow, $[8] = weight) : (accent = $[1], align = $[2], childrenProp = $[3], restProps = $[4], t0 = $[5], t1 = $[6], textOverflow = $[7], weight = $[8]);
    const muted = t0 === void 0 ? !1 : t0, size2 = t1 === void 0 ? 2 : t1;
    let children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t22;
        $[9] !== children ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SpanWithTextOverflow$2, {
            children
        }), $[9] = children, $[10] = t22) : t22 = $[10], children = t22;
    } else {
        let t22;
        $[11] !== children ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children
        }), $[11] = children, $[12] = t22) : t22 = $[12], children = t22;
    }
    const t2 = useArrayProp(align), t3 = useArrayProp(size2);
    let t4;
    return $[13] !== accent || $[14] !== children || $[15] !== muted || $[16] !== ref || $[17] !== restProps || $[18] !== t2 || $[19] !== t3 || $[20] !== weight ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$C, __spreadProps$O(__spreadValues$P({
        "data-ui": "Label"
    }, restProps), {
        $accent: accent,
        $align: t2,
        $muted: muted,
        $size: t3,
        $weight: weight,
        ref,
        children
    })), $[13] = accent, $[14] = children, $[15] = muted, $[16] = ref, $[17] = restProps, $[18] = t2, $[19] = t3, $[20] = weight, $[21] = t4) : t4 = $[21], t4;
});
Label.displayName = "ForwardRef(Label)";
const avatarStyle = {
    root: avatarRootStyle,
    arrow: avatarArrowStyle,
    bgStroke: avatarBgStrokeStyle,
    stroke: avatarStrokeStyle,
    initials: avatarInitialsStyle,
    image: avatarImageStyle
};
function avatarArrowStyle() {
    return {
        position: "absolute",
        boxSizing: "border-box",
        zIndex: 0,
        opacity: 0,
        transition: "all 0.2s linear",
        transform: "rotate(-90deg) translate3d(0, 6px, 0)",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "& > svg": {
            width: "11px",
            height: "7px",
            position: "absolute",
            top: "-5px",
            left: "50%",
            transform: "translateX(-6px)",
            "&:not([hidden])": {
                display: "block"
            }
        },
        "[data-arrow-position='inside'] > &": {
            transform: "rotate(-90deg) translate3d(0, 6px, 0)",
            opacity: 0
        },
        "[data-arrow-position='top'] > &": {
            opacity: 1,
            transform: "rotate(0deg)"
        },
        "[data-arrow-position='bottom'] > &": {
            opacity: 1,
            transform: "rotate(-180deg)"
        }
    };
}
function avatarRootStyle(props) {
    const { $color } = props, { avatar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return {
        "--avatar-bg-color": `var(--card-avatar-${$color}-bg-color)`,
        "--avatar-fg-color": `var(--card-avatar-${$color}-fg-color)`,
        backgroundColor: "var(--avatar-bg-color)",
        position: "relative",
        boxSizing: "border-box",
        userSelect: "none",
        boxShadow: "0 0 0 1px var(--card-bg-color)",
        '&[data-status="inactive"]': {
            opacity: 0.5
        },
        "&>svg": {
            "&:not([hidden])": {
                display: "block"
            }
        },
        /* &:is(button) */ '&[data-as="button"]': {
            WebkitFontSmoothing: "inherit",
            appearance: "none",
            margin: 0,
            padding: 0,
            border: 0,
            font: "inherit",
            color: "inherit",
            outline: "none",
            "&:focus": {
                boxShadow: focusRingStyle({
                    focusRing: avatar.focusRing
                })
            },
            "&:focus:not(:focus-visible)": {
                boxShadow: "none"
            }
        }
    };
}
function responsiveAvatarSizeStyle(props) {
    const { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$size, (size2)=>{
        const avatarSize = avatar.sizes[size2] || avatar.sizes[0];
        return {
            width: rem(avatarSize.size),
            height: rem(avatarSize.size),
            borderRadius: rem(avatarSize.size / 2),
            "&>svg": {
                width: rem(avatarSize.size),
                height: rem(avatarSize.size),
                borderRadius: rem(avatarSize.size / 2)
            }
        };
    });
}
function avatarImageStyle() {
    return {
        position: "relative"
    };
}
function avatarInitialsStyle() {
    return {
        width: "100%",
        height: "100%",
        color: "var(--avatar-fg-color)",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        textAlign: "center",
        borderRadius: "50%",
        "&:not([hidden])": {
            display: "flex"
        }
    };
}
function avatarBgStrokeStyle() {
    return {
        strokeWidth: "4px",
        stroke: "var(--card-bg-color)"
    };
}
function avatarStrokeStyle() {
    return {
        strokeWidth: "2px",
        stroke: "var(--avatar-bg-color)",
        '[data-status="editing"] &': {
            strokeDasharray: "2 4",
            strokeLinecap: "round"
        }
    };
}
var __defProp$P = Object.defineProperty, __defProps$N = Object.defineProperties, __getOwnPropDescs$N = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$O = Object.getOwnPropertySymbols, __hasOwnProp$O = Object.prototype.hasOwnProperty, __propIsEnum$O = Object.prototype.propertyIsEnumerable, __defNormalProp$P = (obj, key2, value)=>key2 in obj ? __defProp$P(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$O = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$O.call(b, prop) && __defNormalProp$P(a, prop, b[prop]);
    if (__getOwnPropSymbols$O) for (var prop of __getOwnPropSymbols$O(b))__propIsEnum$O.call(b, prop) && __defNormalProp$P(a, prop, b[prop]);
    return a;
}, __spreadProps$N = (a, b)=>__defProps$N(a, __getOwnPropDescs$N(b)), __objRest$I = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$O.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$O) for (var prop of __getOwnPropSymbols$O(source))exclude.indexOf(prop) < 0 && __propIsEnum$O.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(responsiveAvatarSizeStyle, avatarStyle.root), Arrow$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(avatarStyle.arrow), BgStroke = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].ellipse(avatarStyle.bgStroke), Stroke = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].ellipse(avatarStyle.stroke), Initials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(avatarStyle.initials), InitialsLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Label)({
    color: "inherit"
}), Image = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].svg(avatarStyle.image), Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    let __unstable_hideInnerStroke, animateArrowFrom, arrowPositionProp, asProp, initials, onImageLoadError, restProps, src, t0, t1, t2, title;
    $[0] !== props ? (_a = props, { __unstable_hideInnerStroke, as: asProp, color: t0, src, title, initials, onImageLoadError, arrowPosition: arrowPositionProp, animateArrowFrom, status: t1, size: t2 } = _a, restProps = __objRest$I(_a, [
        "__unstable_hideInnerStroke",
        "as",
        "color",
        "src",
        "title",
        "initials",
        "onImageLoadError",
        "arrowPosition",
        "animateArrowFrom",
        "status",
        "size"
    ]), $[0] = props, $[1] = __unstable_hideInnerStroke, $[2] = animateArrowFrom, $[3] = arrowPositionProp, $[4] = asProp, $[5] = initials, $[6] = onImageLoadError, $[7] = restProps, $[8] = src, $[9] = t0, $[10] = t1, $[11] = t2, $[12] = title) : (__unstable_hideInnerStroke = $[1], animateArrowFrom = $[2], arrowPositionProp = $[3], asProp = $[4], initials = $[5], onImageLoadError = $[6], restProps = $[7], src = $[8], t0 = $[9], t1 = $[10], t2 = $[11], title = $[12]);
    const color = t0 === void 0 ? "gray" : t0, status = t1 === void 0 ? "online" : t1, sizeProp = t2 === void 0 ? 1 : t2, { avatar } = useTheme_v2(), as = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElementType(asProp) ? asProp : "div", size2 = useArrayProp(sizeProp), _sizeRem = (avatar.sizes[size2[0]] || avatar.sizes[0]).size, _radius = _sizeRem / 2, elementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), [arrowPosition, setArrowPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(animateArrowFrom || arrowPositionProp || "inside"), [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), imageId = `avatar-image-${elementId}`;
    let t3, t4;
    $[13] !== arrowPosition || $[14] !== arrowPositionProp ? (t3 = ()=>{
        if (arrowPosition === arrowPositionProp) return;
        const raf = requestAnimationFrame(()=>setArrowPosition(arrowPositionProp));
        return ()=>cancelAnimationFrame(raf);
    }, t4 = [
        arrowPosition,
        arrowPositionProp
    ], $[13] = arrowPosition, $[14] = arrowPositionProp, $[15] = t3, $[16] = t4) : (t3 = $[15], t4 = $[16]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5, t6;
    $[17] !== src ? (t5 = ()=>{
        src && setImageFailed(!1);
    }, t6 = [
        src
    ], $[17] = src, $[18] = t5, $[19] = t6) : (t5 = $[18], t6 = $[19]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    $[20] !== onImageLoadError ? (t7 = ()=>{
        setImageFailed(!0), onImageLoadError && onImageLoadError(new Error("Avatar: the image failed to load"));
    }, $[20] = onImageLoadError, $[21] = t7) : t7 = $[21];
    const handleImageError = t7;
    let t8, t9;
    $[22] !== size2 ? (t9 = size2.map(_temp$8), $[22] = size2, $[23] = t9) : t9 = $[23], t8 = t9;
    const initialsSize = t8, t10 = typeof as == "string" ? as : void 0;
    let t11;
    $[24] !== color ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Arrow$1, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            width: "11",
            height: "7",
            viewBox: "0 0 11 7",
            fill: "none",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
                fill: color
            })
        })
    }), $[24] = color, $[25] = t11) : t11 = $[25];
    let t12;
    $[26] !== __unstable_hideInnerStroke || $[27] !== _radius || $[28] !== _sizeRem || $[29] !== handleImageError || $[30] !== imageFailed || $[31] !== imageId || $[32] !== src ? (t12 = !imageFailed && src && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Image, {
        viewBox: `0 0 ${_sizeRem} ${_sizeRem}`,
        fill: "none",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pattern", {
                    id: imageId,
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("image", {
                        href: src,
                        width: "1",
                        height: "1",
                        onError: handleImageError
                    })
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                cx: _radius,
                cy: _radius,
                r: _radius,
                fill: `url(#${imageId})`
            }),
            !__unstable_hideInnerStroke && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BgStroke, {
                cx: _radius,
                cy: _radius,
                rx: _radius,
                ry: _radius,
                vectorEffect: "non-scaling-stroke"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stroke, {
                cx: _radius,
                cy: _radius,
                rx: _radius,
                ry: _radius,
                vectorEffect: "non-scaling-stroke"
            })
        ]
    }), $[26] = __unstable_hideInnerStroke, $[27] = _radius, $[28] = _sizeRem, $[29] = handleImageError, $[30] = imageFailed, $[31] = imageId, $[32] = src, $[33] = t12) : t12 = $[33];
    let t13;
    $[34] !== imageFailed || $[35] !== initials || $[36] !== initialsSize || $[37] !== src ? (t13 = (imageFailed || !src) && initials && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Initials, {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InitialsLabel, {
                forwardedAs: "span",
                size: initialsSize,
                weight: "medium",
                children: initials
            })
        })
    }), $[34] = imageFailed, $[35] = initials, $[36] = initialsSize, $[37] = src, $[38] = t13) : t13 = $[38];
    let t14;
    return $[39] !== arrowPosition || $[40] !== as || $[41] !== color || $[42] !== ref || $[43] !== restProps || $[44] !== size2 || $[45] !== status || $[46] !== t10 || $[47] !== t11 || $[48] !== t12 || $[49] !== t13 || $[50] !== title ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$B, __spreadProps$N(__spreadValues$O({
        as,
        "data-as": t10,
        "data-ui": "Avatar"
    }, restProps), {
        $color: color,
        $size: size2,
        "aria-label": title,
        "data-arrow-position": arrowPosition,
        "data-status": status,
        ref,
        title,
        children: [
            t11,
            t12,
            t13
        ]
    })), $[39] = arrowPosition, $[40] = as, $[41] = color, $[42] = ref, $[43] = restProps, $[44] = size2, $[45] = status, $[46] = t10, $[47] = t11, $[48] = t12, $[49] = t13, $[50] = title, $[51] = t14) : t14 = $[51], t14;
});
Avatar.displayName = "ForwardRef(Avatar)";
function _temp$8(s) {
    return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
function _responsiveAvatarCounterSizeStyle(props) {
    const { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$size, (size2)=>{
        const avatarSize = avatar.sizes[size2];
        return avatarSize ? {
            borderRadius: rem(avatarSize.size / 2),
            minWidth: rem(avatarSize.size),
            height: rem(avatarSize.size)
        } : EMPTY_RECORD;
    });
}
function _avatarCounterBaseStyle(props) {
    const { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${rem(space[2])};

    &:not([hidden]) {
      display: flex;
    }
  `;
}
const Root$A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_responsiveAvatarCounterSizeStyle, _avatarCounterBaseStyle), AvatarCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9), { count, size: t0 } = props, size2 = useArrayProp(t0 === void 0 ? 1 : t0);
    let t1, t2;
    $[0] !== size2 ? (t2 = size2.map(_temp$7), $[0] = size2, $[1] = t2) : t2 = $[1], t1 = t2;
    const fontSize2 = t1;
    let t3;
    $[2] !== count || $[3] !== fontSize2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Label, {
        as: "span",
        size: fontSize2,
        weight: "medium",
        children: count
    }), $[2] = count, $[3] = fontSize2, $[4] = t3) : t3 = $[4];
    let t4;
    return $[5] !== ref || $[6] !== size2 || $[7] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$A, {
        $size: size2,
        "data-ui": "AvatarCounter",
        ref,
        children: t3
    }), $[5] = ref, $[6] = size2, $[7] = t3, $[8] = t4) : t4 = $[8], t4;
});
AvatarCounter.displayName = "ForwardRef(AvatarCounter)";
function _temp$7(s) {
    return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
var __defProp$O = Object.defineProperty, __defProps$M = Object.defineProperties, __getOwnPropDescs$M = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$N = Object.getOwnPropertySymbols, __hasOwnProp$N = Object.prototype.hasOwnProperty, __propIsEnum$N = Object.prototype.propertyIsEnumerable, __defNormalProp$O = (obj, key2, value)=>key2 in obj ? __defProp$O(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$N = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$N.call(b, prop) && __defNormalProp$O(a, prop, b[prop]);
    if (__getOwnPropSymbols$N) for (var prop of __getOwnPropSymbols$N(b))__propIsEnum$N.call(b, prop) && __defNormalProp$O(a, prop, b[prop]);
    return a;
}, __spreadProps$M = (a, b)=>__defProps$M(a, __getOwnPropDescs$M(b)), __objRest$H = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$N.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$N) for (var prop of __getOwnPropSymbols$N(source))exclude.indexOf(prop) < 0 && __propIsEnum$N.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const BASE_STYLES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`;
function avatarStackStyle() {
    return BASE_STYLES;
}
function responsiveAvatarStackSizeStyle(props) {
    const { avatar, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$size, (size2)=>{
        const avatarSize = avatar.sizes[size2];
        return avatarSize ? {
            "& > div + div": {
                marginLeft: rem(avatarSize.distance)
            }
        } : EMPTY_RECORD;
    });
}
const Root$z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(responsiveAvatarStackSizeStyle, avatarStackStyle), AvatarStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    let childrenProp, restProps, t0, t1;
    $[0] !== props ? (_a = props, { children: childrenProp, maxLength: t0, size: t1 } = _a, restProps = __objRest$H(_a, [
        "children",
        "maxLength",
        "size"
    ]), $[0] = props, $[1] = childrenProp, $[2] = restProps, $[3] = t0, $[4] = t1) : (childrenProp = $[1], restProps = $[2], t0 = $[3], t1 = $[4]);
    const maxLengthProp = t0 === void 0 ? 4 : t0, sizeProp = t1 === void 0 ? 1 : t1, children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(childrenProp).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"]), maxLength = Math.max(maxLengthProp, 0), size2 = useArrayProp(sizeProp), len = children.length, visibleCount = maxLength - 1, extraCount = len - visibleCount, visibleChildren = extraCount > 1 ? children.slice(extraCount, len) : children, T0 = Root$z, t2 = "AvatarStack", t3 = len === 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarCounter, {
            count: len,
            size: size2
        })
    }), t4 = len !== 0 && extraCount > 1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarCounter, {
            count: extraCount,
            size: size2
        })
    });
    let t5;
    $[5] !== size2 ? (t5 = (child, childIndex)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                size: size2
            })
        }, String(childIndex)), $[5] = size2, $[6] = t5) : t5 = $[6];
    const t6 = visibleChildren.map(t5);
    let t7;
    return $[7] !== T0 || $[8] !== ref || $[9] !== restProps || $[10] !== size2 || $[11] !== t3 || $[12] !== t4 || $[13] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(T0, __spreadProps$M(__spreadValues$N({
        "data-ui": t2
    }, restProps), {
        ref,
        $size: size2,
        children: [
            t3,
            t4,
            t6
        ]
    })), $[7] = T0, $[8] = ref, $[9] = restProps, $[10] = size2, $[11] = t3, $[12] = t4, $[13] = t6, $[14] = t7) : t7 = $[14], t7;
});
AvatarStack.displayName = "ForwardRef(AvatarStack)";
var __defProp$N = Object.defineProperty, __defProps$L = Object.defineProperties, __getOwnPropDescs$L = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$M = Object.getOwnPropertySymbols, __hasOwnProp$M = Object.prototype.hasOwnProperty, __propIsEnum$M = Object.prototype.propertyIsEnumerable, __defNormalProp$N = (obj, key2, value)=>key2 in obj ? __defProp$N(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$M = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$M.call(b, prop) && __defNormalProp$N(a, prop, b[prop]);
    if (__getOwnPropSymbols$M) for (var prop of __getOwnPropSymbols$M(b))__propIsEnum$M.call(b, prop) && __defNormalProp$N(a, prop, b[prop]);
    return a;
}, __spreadProps$L = (a, b)=>__defProps$L(a, __getOwnPropDescs$L(b)), __objRest$G = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$M.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$M) for (var prop of __getOwnPropSymbols$M(source))exclude.indexOf(prop) < 0 && __propIsEnum$M.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(boxStyle, flexItemStyle, responsiveBoxStyle, responsiveGridItemStyle, responsiveMarginStyle, responsivePaddingStyle), Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    let column, columnEnd, columnStart, flex, height, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, overflow, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, restProps, row, rowEnd, rowStart, sizing, t0, t1, t2, t3;
    $[0] !== props ? (_a = props, { as: t0, column, columnStart, columnEnd, display: t1, flex, height, margin: t2, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft, overflow, padding: t3, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, row, rowStart, rowEnd, sizing } = _a, restProps = __objRest$G(_a, [
        "as",
        "column",
        "columnStart",
        "columnEnd",
        "display",
        "flex",
        "height",
        "margin",
        "marginX",
        "marginY",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "overflow",
        "padding",
        "paddingX",
        "paddingY",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "row",
        "rowStart",
        "rowEnd",
        "sizing"
    ]), $[0] = props, $[1] = column, $[2] = columnEnd, $[3] = columnStart, $[4] = flex, $[5] = height, $[6] = marginBottom, $[7] = marginLeft, $[8] = marginRight, $[9] = marginTop, $[10] = marginX, $[11] = marginY, $[12] = overflow, $[13] = paddingBottom, $[14] = paddingLeft, $[15] = paddingRight, $[16] = paddingTop, $[17] = paddingX, $[18] = paddingY, $[19] = restProps, $[20] = row, $[21] = rowEnd, $[22] = rowStart, $[23] = sizing, $[24] = t0, $[25] = t1, $[26] = t2, $[27] = t3) : (column = $[1], columnEnd = $[2], columnStart = $[3], flex = $[4], height = $[5], marginBottom = $[6], marginLeft = $[7], marginRight = $[8], marginTop = $[9], marginX = $[10], marginY = $[11], overflow = $[12], paddingBottom = $[13], paddingLeft = $[14], paddingRight = $[15], paddingTop = $[16], paddingX = $[17], paddingY = $[18], restProps = $[19], row = $[20], rowEnd = $[21], rowStart = $[22], sizing = $[23], t0 = $[24], t1 = $[25], t2 = $[26], t3 = $[27]);
    const asProp = t0 === void 0 ? "div" : t0, display = t1 === void 0 ? "block" : t1, margin = t2 === void 0 ? 0 : t2, padding = t3 === void 0 ? 0 : t3, t4 = typeof asProp == "string" ? asProp : void 0, t5 = useArrayProp(column), t6 = useArrayProp(columnStart), t7 = useArrayProp(columnEnd), t8 = useArrayProp(display), t9 = useArrayProp(flex), t10 = useArrayProp(height), t11 = useArrayProp(margin), t12 = useArrayProp(marginX), t13 = useArrayProp(marginY), t14 = useArrayProp(marginTop), t15 = useArrayProp(marginRight), t16 = useArrayProp(marginBottom), t17 = useArrayProp(marginLeft), t18 = useArrayProp(overflow), t19 = useArrayProp(padding), t20 = useArrayProp(paddingX), t21 = useArrayProp(paddingY), t22 = useArrayProp(paddingTop), t23 = useArrayProp(paddingRight), t24 = useArrayProp(paddingBottom), t25 = useArrayProp(paddingLeft), t26 = useArrayProp(row), t27 = useArrayProp(rowStart), t28 = useArrayProp(rowEnd), t29 = useArrayProp(sizing);
    let t30;
    return $[28] !== asProp || $[29] !== props.children || $[30] !== ref || $[31] !== restProps || $[32] !== t10 || $[33] !== t11 || $[34] !== t12 || $[35] !== t13 || $[36] !== t14 || $[37] !== t15 || $[38] !== t16 || $[39] !== t17 || $[40] !== t18 || $[41] !== t19 || $[42] !== t20 || $[43] !== t21 || $[44] !== t22 || $[45] !== t23 || $[46] !== t24 || $[47] !== t25 || $[48] !== t26 || $[49] !== t27 || $[50] !== t28 || $[51] !== t29 || $[52] !== t4 || $[53] !== t5 || $[54] !== t6 || $[55] !== t7 || $[56] !== t8 || $[57] !== t9 ? (t30 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$y, __spreadProps$L(__spreadValues$M({
        "data-as": t4,
        "data-ui": "Box"
    }, restProps), {
        $column: t5,
        $columnStart: t6,
        $columnEnd: t7,
        $display: t8,
        $flex: t9,
        $height: t10,
        $margin: t11,
        $marginX: t12,
        $marginY: t13,
        $marginTop: t14,
        $marginRight: t15,
        $marginBottom: t16,
        $marginLeft: t17,
        $overflow: t18,
        $padding: t19,
        $paddingX: t20,
        $paddingY: t21,
        $paddingTop: t22,
        $paddingRight: t23,
        $paddingBottom: t24,
        $paddingLeft: t25,
        $row: t26,
        $rowStart: t27,
        $rowEnd: t28,
        $sizing: t29,
        as: asProp,
        ref,
        children: props.children
    })), $[28] = asProp, $[29] = props.children, $[30] = ref, $[31] = restProps, $[32] = t10, $[33] = t11, $[34] = t12, $[35] = t13, $[36] = t14, $[37] = t15, $[38] = t16, $[39] = t17, $[40] = t18, $[41] = t19, $[42] = t20, $[43] = t21, $[44] = t22, $[45] = t23, $[46] = t24, $[47] = t25, $[48] = t26, $[49] = t27, $[50] = t28, $[51] = t29, $[52] = t4, $[53] = t5, $[54] = t6, $[55] = t7, $[56] = t8, $[57] = t9, $[58] = t30) : t30 = $[58], t30;
});
Box.displayName = "ForwardRef(Box)";
function textBaseStyle(props) {
    const { $accent, $muted } = props, { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    color: var(--card-fg-color);

    ${$accent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-accent-fg-color);
    `}

    ${$muted && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${font.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${font.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `;
}
var __defProp$M = Object.defineProperty, __defProps$K = Object.defineProperties, __getOwnPropDescs$K = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$L = Object.getOwnPropertySymbols, __hasOwnProp$L = Object.prototype.hasOwnProperty, __propIsEnum$L = Object.prototype.propertyIsEnumerable, __defNormalProp$M = (obj, key2, value)=>key2 in obj ? __defProp$M(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$L = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$L.call(b, prop) && __defNormalProp$M(a, prop, b[prop]);
    if (__getOwnPropSymbols$L) for (var prop of __getOwnPropSymbols$L(b))__propIsEnum$L.call(b, prop) && __defNormalProp$M(a, prop, b[prop]);
    return a;
}, __spreadProps$K = (a, b)=>__defProps$K(a, __getOwnPropDescs$K(b)), __objRest$F = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$L.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$L) for (var prop of __getOwnPropSymbols$L(source))exclude.indexOf(prop) < 0 && __propIsEnum$L.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(responsiveTextFont, responsiveTextAlignStyle, textBaseStyle), SpanWithTextOverflow$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`, Text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    let align, childrenProp, restProps, t0, t1, t2, textOverflow, weight;
    $[0] !== props ? (_a = props, { accent: t0, align, children: childrenProp, muted: t1, size: t2, textOverflow, weight } = _a, restProps = __objRest$F(_a, [
        "accent",
        "align",
        "children",
        "muted",
        "size",
        "textOverflow",
        "weight"
    ]), $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = textOverflow, $[8] = weight) : (align = $[1], childrenProp = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], textOverflow = $[7], weight = $[8]);
    const accent = t0 === void 0 ? !1 : t0, muted = t1 === void 0 ? !1 : t1, size2 = t2 === void 0 ? 2 : t2;
    let children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t32;
        $[9] !== children ? (t32 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SpanWithTextOverflow$1, {
            children
        }), $[9] = children, $[10] = t32) : t32 = $[10], children = t32;
    }
    const t3 = useArrayProp(align), t4 = useArrayProp(size2);
    let t5;
    $[11] !== children ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children
    }), $[11] = children, $[12] = t5) : t5 = $[12];
    let t6;
    return $[13] !== accent || $[14] !== muted || $[15] !== ref || $[16] !== restProps || $[17] !== t3 || $[18] !== t4 || $[19] !== t5 || $[20] !== weight ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$x, __spreadProps$K(__spreadValues$L({
        "data-ui": "Text"
    }, restProps), {
        $accent: accent,
        $align: t3,
        $muted: muted,
        ref,
        $size: t4,
        $weight: weight,
        children: t5
    })), $[13] = accent, $[14] = muted, $[15] = ref, $[16] = restProps, $[17] = t3, $[18] = t4, $[19] = t5, $[20] = weight, $[21] = t6) : t6 = $[21], t6;
});
Text.displayName = "ForwardRef(Text)";
function badgeStyle(props) {
    const { $tone } = props;
    return {
        "--card-bg-color": `var(--card-badge-${$tone}-bg-color)`,
        "--card-fg-color": `var(--card-badge-${$tone}-fg-color)`,
        backgroundColor: "var(--card-bg-color)",
        cursor: "default",
        "&:not([hidden])": {
            display: "inline-block",
            verticalAlign: "top"
        }
    };
}
var __defProp$L = Object.defineProperty, __defProps$J = Object.defineProperties, __getOwnPropDescs$J = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$K = Object.getOwnPropertySymbols, __hasOwnProp$K = Object.prototype.hasOwnProperty, __propIsEnum$K = Object.prototype.propertyIsEnumerable, __defNormalProp$L = (obj, key2, value)=>key2 in obj ? __defProp$L(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$K = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$K.call(b, prop) && __defNormalProp$L(a, prop, b[prop]);
    if (__getOwnPropSymbols$K) for (var prop of __getOwnPropSymbols$K(b))__propIsEnum$K.call(b, prop) && __defNormalProp$L(a, prop, b[prop]);
    return a;
}, __spreadProps$J = (a, b)=>__defProps$J(a, __getOwnPropDescs$J(b)), __objRest$E = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$K.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$K) for (var prop of __getOwnPropSymbols$K(source))exclude.indexOf(prop) < 0 && __propIsEnum$K.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(responsiveRadiusStyle, badgeStyle), Badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    let children, restProps, t0, t1, t2, t3;
    if ($[0] !== props) {
        const _a = props, { children: t42, fontSize: t52, mode: _deprecated_mode, padding: t62, radius: t72, tone: t8 } = _a, t9 = __objRest$E(_a, [
            "children",
            "fontSize",
            "mode",
            "padding",
            "radius",
            "tone"
        ]);
        children = t42, t0 = t52, t1 = t62, t2 = t72, t3 = t8, restProps = t9, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0, $[4] = t1, $[5] = t2, $[6] = t3;
    } else children = $[1], restProps = $[2], t0 = $[3], t1 = $[4], t2 = $[5], t3 = $[6];
    const fontSize2 = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? "full" : t2, tone = t3 === void 0 ? "default" : t3, t4 = useArrayProp(radius), t5 = useArrayProp(padding);
    let t6;
    $[7] !== children || $[8] !== fontSize2 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        size: fontSize2,
        children
    }), $[7] = children, $[8] = fontSize2, $[9] = t6) : t6 = $[9];
    let t7;
    return $[10] !== ref || $[11] !== restProps || $[12] !== t4 || $[13] !== t5 || $[14] !== t6 || $[15] !== tone ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$w, __spreadProps$J(__spreadValues$K({
        "data-ui": "Badge"
    }, restProps), {
        $tone: tone,
        $radius: t4,
        padding: t5,
        ref,
        children: t6
    })), $[10] = ref, $[11] = restProps, $[12] = t4, $[13] = t5, $[14] = t6, $[15] = tone, $[16] = t7) : t7 = $[16], t7;
});
Badge.displayName = "ForwardRef(Badge)";
var __defProp$K = Object.defineProperty, __defProps$I = Object.defineProperties, __getOwnPropDescs$I = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$J = Object.getOwnPropertySymbols, __hasOwnProp$J = Object.prototype.hasOwnProperty, __propIsEnum$J = Object.prototype.propertyIsEnumerable, __defNormalProp$K = (obj, key2, value)=>key2 in obj ? __defProp$K(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$J = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$J.call(b, prop) && __defNormalProp$K(a, prop, b[prop]);
    if (__getOwnPropSymbols$J) for (var prop of __getOwnPropSymbols$J(b))__propIsEnum$J.call(b, prop) && __defNormalProp$K(a, prop, b[prop]);
    return a;
}, __spreadProps$I = (a, b)=>__defProps$I(a, __getOwnPropDescs$I(b)), __objRest$D = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$J.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$J) for (var prop of __getOwnPropSymbols$J(source))exclude.indexOf(prop) < 0 && __propIsEnum$J.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(flexItemStyle, responsiveFlexStyle), Flex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    let align, as, gap, justify, restProps, t0, wrap;
    $[0] !== props ? (_a = props, { align, as, direction: t0, gap, justify, wrap } = _a, restProps = __objRest$D(_a, [
        "align",
        "as",
        "direction",
        "gap",
        "justify",
        "wrap"
    ]), $[0] = props, $[1] = align, $[2] = as, $[3] = gap, $[4] = justify, $[5] = restProps, $[6] = t0, $[7] = wrap) : (align = $[1], as = $[2], gap = $[3], justify = $[4], restProps = $[5], t0 = $[6], wrap = $[7]);
    const direction = t0 === void 0 ? "row" : t0, t1 = useArrayProp(align), t2 = useArrayProp(direction), t3 = useArrayProp(gap), t4 = useArrayProp(justify), t5 = useArrayProp(wrap);
    let t6;
    return $[8] !== as || $[9] !== ref || $[10] !== restProps || $[11] !== t1 || $[12] !== t2 || $[13] !== t3 || $[14] !== t4 || $[15] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$v, __spreadProps$I(__spreadValues$J({
        "data-ui": "Flex"
    }, restProps), {
        $align: t1,
        $direction: t2,
        $gap: t3,
        $justify: t4,
        $wrap: t5,
        forwardedAs: as,
        ref
    })), $[8] = as, $[9] = ref, $[10] = restProps, $[11] = t1, $[12] = t2, $[13] = t3, $[14] = t4, $[15] = t5, $[16] = t6) : t6 = $[16], t6;
});
Flex.displayName = "ForwardRef(Flex)";
var __defProp$J = Object.defineProperty, __defProps$H = Object.defineProperties, __getOwnPropDescs$H = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$I = Object.getOwnPropertySymbols, __hasOwnProp$I = Object.prototype.hasOwnProperty, __propIsEnum$I = Object.prototype.propertyIsEnumerable, __defNormalProp$J = (obj, key2, value)=>key2 in obj ? __defProp$J(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$I = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$I.call(b, prop) && __defNormalProp$J(a, prop, b[prop]);
    if (__getOwnPropSymbols$I) for (var prop of __getOwnPropSymbols$I(b))__propIsEnum$I.call(b, prop) && __defNormalProp$J(a, prop, b[prop]);
    return a;
}, __spreadProps$H = (a, b)=>__defProps$H(a, __getOwnPropDescs$H(b));
const rotate$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, Root$u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Text)`
  & > span > svg {
    animation: ${rotate$1} 500ms linear infinite;
  }
`, Spinner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"], {}), $[0] = t0) : t0 = $[0];
    let t1;
    return $[1] !== props || $[2] !== ref ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$u, __spreadProps$H(__spreadValues$I({
        "data-ui": "Spinner"
    }, props), {
        ref,
        children: t0
    })), $[1] = props, $[2] = ref, $[3] = t1) : t1 = $[3], t1;
});
Spinner.displayName = "ForwardRef(Spinner)";
function _cardColorStyle(base, color, checkered = !1) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
        // from base
        "--card-backdrop-color": base.backdrop,
        "--card-focus-ring-color": base.focusRing,
        "--card-shadow-outline-color": base.shadow.outline,
        "--card-shadow-umbra-color": base.shadow.umbra,
        "--card-shadow-penumbra-color": base.shadow.penumbra,
        "--card-shadow-ambient-color": base.shadow.ambient,
        // from state
        "--card-accent-fg-color": color.accent.fg,
        "--card-avatar-gray-bg-color": color.avatar.gray.bg,
        "--card-avatar-gray-fg-color": color.avatar.gray.fg,
        "--card-avatar-blue-bg-color": color.avatar.blue.bg,
        "--card-avatar-blue-fg-color": color.avatar.blue.fg,
        "--card-avatar-purple-bg-color": color.avatar.purple.bg,
        "--card-avatar-purple-fg-color": color.avatar.purple.fg,
        "--card-avatar-magenta-bg-color": color.avatar.magenta.bg,
        "--card-avatar-magenta-fg-color": color.avatar.magenta.fg,
        "--card-avatar-red-bg-color": color.avatar.red.bg,
        "--card-avatar-red-fg-color": color.avatar.red.fg,
        "--card-avatar-orange-bg-color": color.avatar.orange.bg,
        "--card-avatar-orange-fg-color": color.avatar.orange.fg,
        "--card-avatar-yellow-bg-color": color.avatar.yellow.bg,
        "--card-avatar-yellow-fg-color": color.avatar.yellow.fg,
        "--card-avatar-green-bg-color": color.avatar.green.bg,
        "--card-avatar-green-fg-color": color.avatar.green.fg,
        "--card-avatar-cyan-bg-color": color.avatar.cyan.bg,
        "--card-avatar-cyan-fg-color": color.avatar.cyan.fg,
        "--card-bg-color": color.bg,
        "--card-bg-image": checkered ? `repeating-conic-gradient(${color.bg} 0% 25%, ${color.muted.bg} 0% 50%)` : void 0,
        "--card-border-color": color.border,
        "--card-badge-default-bg-color": color.badge.default.bg,
        "--card-badge-default-dot-color": color.badge.default.dot,
        "--card-badge-default-fg-color": color.badge.default.fg,
        "--card-badge-default-icon-color": color.badge.default.icon,
        "--card-badge-neutral-bg-color": (_a = color.badge.neutral) == null ? void 0 : _a.bg,
        "--card-badge-neutral-dot-color": (_b = color.badge.neutral) == null ? void 0 : _b.dot,
        "--card-badge-neutral-fg-color": (_c = color.badge.neutral) == null ? void 0 : _c.fg,
        "--card-badge-neutral-icon-color": (_d = color.badge.neutral) == null ? void 0 : _d.icon,
        "--card-badge-primary-bg-color": color.badge.primary.bg,
        "--card-badge-primary-dot-color": color.badge.primary.dot,
        "--card-badge-primary-fg-color": color.badge.primary.fg,
        "--card-badge-primary-icon-color": color.badge.primary.icon,
        "--card-badge-suggest-bg-color": (_e = color.badge.suggest) == null ? void 0 : _e.bg,
        "--card-badge-suggest-dot-color": (_f = color.badge.suggest) == null ? void 0 : _f.dot,
        "--card-badge-suggest-fg-color": (_g = color.badge.suggest) == null ? void 0 : _g.fg,
        "--card-badge-suggest-icon-color": (_h = color.badge.suggest) == null ? void 0 : _h.icon,
        "--card-badge-positive-bg-color": color.badge.positive.bg,
        "--card-badge-positive-dot-color": color.badge.positive.dot,
        "--card-badge-positive-fg-color": color.badge.positive.fg,
        "--card-badge-positive-icon-color": color.badge.positive.icon,
        "--card-badge-caution-bg-color": color.badge.caution.bg,
        "--card-badge-caution-dot-color": color.badge.caution.dot,
        "--card-badge-caution-fg-color": color.badge.caution.fg,
        "--card-badge-caution-icon-color": color.badge.caution.icon,
        "--card-badge-critical-bg-color": color.badge.critical.bg,
        "--card-badge-critical-dot-color": color.badge.critical.dot,
        "--card-badge-critical-fg-color": color.badge.critical.fg,
        "--card-badge-critical-icon-color": color.badge.critical.icon,
        "--card-code-bg-color": color.code.bg,
        "--card-code-fg-color": color.code.fg,
        "--card-fg-color": color.fg,
        "--card-icon-color": color.icon,
        "--card-kbd-bg-color": color.kbd.bg,
        "--card-kbd-border-color": color.kbd.border,
        "--card-kbd-fg-color": color.kbd.fg,
        "--card-link-fg-color": color.link.fg,
        "--card-muted-bg-color": color.muted.bg,
        "--card-muted-fg-color": color.muted.fg,
        "--card-skeleton-color-from": color.skeleton.from,
        "--card-skeleton-color-to": color.skeleton.to,
        // deprecated variables (kept for legacy)
        "--card-bg2-color": color.muted.bg,
        "--card-link-color": color.link.fg,
        "--card-hairline-soft-color": color.border,
        "--card-hairline-hard-color": color.border
    };
}
function buttonBaseStyles(props) {
    const { $width } = props, { style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${style == null ? void 0 : style.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${$width === "fill" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `;
}
function combineBoxShadow(...boxShadows) {
    return boxShadows.filter(Boolean).join(",");
}
function buttonColorStyles(props) {
    var _a;
    const { $mode } = props, { button, color: baseColor, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), shadow = props.$mode === "ghost", mode = baseColor.button[$mode] || baseColor.button.default, color = mode[props.$tone] || mode.default, border2 = {
        width: button.border.width,
        color: "var(--card-border-color)"
    }, defaultBoxShadow = void 0;
    return [
        _cardColorStyle(baseColor, color.enabled),
        {
            backgroundColor: "var(--card-bg-color)",
            color: "var(--card-fg-color)",
            boxShadow: focusRingBorderStyle(border2),
            '&:disabled, &[data-disabled="true"]': _cardColorStyle(baseColor, color.disabled),
            "&:not([data-disabled='true'])": {
                boxShadow: combineBoxShadow(focusRingBorderStyle(border2), shadow ? defaultBoxShadow : void 0),
                "&:focus": {
                    boxShadow: focusRingStyle({
                        base: baseColor,
                        border: {
                            width: 2,
                            color: baseColor.bg
                        },
                        focusRing: button.focusRing
                    })
                },
                "&:focus:not(:focus-visible)": {
                    boxShadow: combineBoxShadow(focusRingBorderStyle(border2), shadow ? defaultBoxShadow : void 0)
                },
                "@media (hover: hover)": {
                    "&:hover": _cardColorStyle(baseColor, color.hovered),
                    "&:active": _cardColorStyle(baseColor, color.pressed),
                    "&[data-hovered]": _cardColorStyle(baseColor, color.hovered)
                },
                "&[data-selected]": _cardColorStyle(baseColor, color.pressed)
            }
        },
        (_a = style == null ? void 0 : style.button) == null ? void 0 : _a.root
    ].filter(Boolean);
}
var __defProp$I = Object.defineProperty, __defProps$G = Object.defineProperties, __getOwnPropDescs$G = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$H = Object.getOwnPropertySymbols, __hasOwnProp$H = Object.prototype.hasOwnProperty, __propIsEnum$H = Object.prototype.propertyIsEnumerable, __defNormalProp$I = (obj, key2, value)=>key2 in obj ? __defProp$I(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$H = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$H.call(b, prop) && __defNormalProp$I(a, prop, b[prop]);
    if (__getOwnPropSymbols$H) for (var prop of __getOwnPropSymbols$H(b))__propIsEnum$H.call(b, prop) && __defNormalProp$I(a, prop, b[prop]);
    return a;
}, __spreadProps$G = (a, b)=>__defProps$G(a, __getOwnPropDescs$G(b)), __objRest$C = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$H.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$H) for (var prop of __getOwnPropSymbols$H(source))exclude.indexOf(prop) < 0 && __propIsEnum$H.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].button(responsiveRadiusStyle, buttonBaseStyles, buttonColorStyles), LoadingBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`, Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    let IconComponent, IconRightComponent, children, disabled, loading, paddingBottomProp, paddingLeftProp, paddingRightProp, paddingTopProp, paddingXProp, paddingYProp, restProps, selected, t0, t1, t2, t3, t4, t5, t6, t7, t8, text, textAlign, width;
    $[0] !== props ? (_a = props, { children, disabled, fontSize: t0, icon: IconComponent, iconRight: IconRightComponent, justify: t1, loading, mode: t2, padding: t3, paddingX: paddingXProp, paddingY: paddingYProp, paddingTop: paddingTopProp, paddingBottom: paddingBottomProp, paddingLeft: paddingLeftProp, paddingRight: paddingRightProp, radius: t4, selected, space: t5, text, textAlign, tone: t6, type: t7, muted: t8, width } = _a, restProps = __objRest$C(_a, [
        "children",
        "disabled",
        "fontSize",
        "icon",
        "iconRight",
        "justify",
        "loading",
        "mode",
        "padding",
        "paddingX",
        "paddingY",
        "paddingTop",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "radius",
        "selected",
        "space",
        "text",
        "textAlign",
        "tone",
        "type",
        "muted",
        "width"
    ]), $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = loading, $[6] = paddingBottomProp, $[7] = paddingLeftProp, $[8] = paddingRightProp, $[9] = paddingTopProp, $[10] = paddingXProp, $[11] = paddingYProp, $[12] = restProps, $[13] = selected, $[14] = t0, $[15] = t1, $[16] = t2, $[17] = t3, $[18] = t4, $[19] = t5, $[20] = t6, $[21] = t7, $[22] = t8, $[23] = text, $[24] = textAlign, $[25] = width) : (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], loading = $[5], paddingBottomProp = $[6], paddingLeftProp = $[7], paddingRightProp = $[8], paddingTopProp = $[9], paddingXProp = $[10], paddingYProp = $[11], restProps = $[12], selected = $[13], t0 = $[14], t1 = $[15], t2 = $[16], t3 = $[17], t4 = $[18], t5 = $[19], t6 = $[20], t7 = $[21], t8 = $[22], text = $[23], textAlign = $[24], width = $[25]);
    const fontSize2 = t0 === void 0 ? 1 : t0, justifyProp = t1 === void 0 ? "center" : t1, mode = t2 === void 0 ? "default" : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, spaceProp = t5 === void 0 ? 3 : t5, tone = t6 === void 0 ? "default" : t6, type = t7 === void 0 ? "button" : t7, muted = t8 === void 0 ? !1 : t8, { button } = useTheme_v2(), justify = useArrayProp(justifyProp), padding = useArrayProp(paddingProp), paddingX = useArrayProp(paddingXProp), paddingY = useArrayProp(paddingYProp), paddingTop = useArrayProp(paddingTopProp), paddingBottom = useArrayProp(paddingBottomProp), paddingLeft = useArrayProp(paddingLeftProp), paddingRight = useArrayProp(paddingRightProp), radius = useArrayProp(radiusProp), space = useArrayProp(spaceProp);
    let t9, t10;
    $[26] !== padding || $[27] !== paddingBottom || $[28] !== paddingLeft || $[29] !== paddingRight || $[30] !== paddingTop || $[31] !== paddingX || $[32] !== paddingY ? (t10 = {
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
    }, $[26] = padding, $[27] = paddingBottom, $[28] = paddingLeft, $[29] = paddingRight, $[30] = paddingTop, $[31] = paddingX, $[32] = paddingY, $[33] = t10) : t10 = $[33], t9 = t10;
    const boxProps = t9, t11 = !!(loading || disabled), t12 = selected ? "" : void 0, t13 = !!(loading || disabled);
    let t14;
    $[34] !== loading ? (t14 = !!loading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LoadingBox, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Spinner, {})
    }), $[34] = loading, $[35] = t14) : t14 = $[35];
    let t15;
    $[36] !== IconComponent || $[37] !== IconRightComponent || $[38] !== boxProps || $[39] !== button || $[40] !== fontSize2 || $[41] !== justify || $[42] !== muted || $[43] !== space || $[44] !== text || $[45] !== textAlign ? (t15 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, __spreadProps$G(__spreadValues$H({
        as: "span"
    }, boxProps), {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, {
            as: "span",
            justify,
            gap: space,
            children: [
                IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
                    size: fontSize2,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
                    ]
                }),
                text && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                        muted,
                        align: textAlign,
                        size: fontSize2,
                        textOverflow: "ellipsis",
                        weight: button.textWeight,
                        children: text
                    })
                }),
                IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
                    size: fontSize2,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
                    ]
                })
            ]
        })
    })), $[36] = IconComponent, $[37] = IconRightComponent, $[38] = boxProps, $[39] = button, $[40] = fontSize2, $[41] = justify, $[42] = muted, $[43] = space, $[44] = text, $[45] = textAlign, $[46] = t15) : t15 = $[46];
    let t16;
    $[47] !== boxProps || $[48] !== children ? (t16 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, __spreadProps$G(__spreadValues$H({
        as: "span"
    }, boxProps), {
        children
    })), $[47] = boxProps, $[48] = children, $[49] = t16) : t16 = $[49];
    let t17;
    return $[50] !== mode || $[51] !== radius || $[52] !== ref || $[53] !== restProps || $[54] !== t11 || $[55] !== t12 || $[56] !== t13 || $[57] !== t14 || $[58] !== t15 || $[59] !== t16 || $[60] !== tone || $[61] !== type || $[62] !== width ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$t, __spreadProps$G(__spreadValues$H({
        "data-ui": "Button"
    }, restProps), {
        $mode: mode,
        $radius: radius,
        $tone: tone,
        "data-disabled": t11,
        "data-selected": t12,
        disabled: t13,
        ref,
        type,
        $width: width,
        children: [
            t14,
            t15,
            t16
        ]
    })), $[50] = mode, $[51] = radius, $[52] = ref, $[53] = restProps, $[54] = t11, $[55] = t12, $[56] = t13, $[57] = t14, $[58] = t15, $[59] = t16, $[60] = tone, $[61] = type, $[62] = width, $[63] = t17) : t17 = $[63], t17;
});
Button.displayName = "ForwardRef(Button)";
function cardStyle(props) {
    return [
        cardBaseStyle(props),
        cardColorStyle(props)
    ];
}
function cardBaseStyle(props) {
    const { $checkered } = props, { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${$checkered && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background-size: ${space[3]}px ${space[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `;
}
function cardColorStyle(props) {
    var _a;
    const { $checkered, $focusRing, $muted } = props, { card, color, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), border2 = {
        width: card.border.width,
        color: "var(--card-border-color)"
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    color-scheme: ${color._dark ? "dark" : "light"};

    ${_cardColorStyle(color, color, $checkered)}

    background-color: ${$muted ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}
        }

        &[data-selected] {
          ${_cardColorStyle(color, color.selectable.default.selected, $checkered)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}
            }

            &:active {
              ${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${$focusRing ? focusRingStyle({
        base: color,
        border: border2,
        focusRing: card.focusRing
    }) : void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}
        }

        &[data-selected] {
          ${_cardColorStyle(color, color.selectable.default.selected, $checkered)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}
            }

            &:active {
              ${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${$focusRing ? focusRingStyle({
        base: color,
        border: border2,
        focusRing: card.focusRing
    }) : void 0};
        }
      }
    }

    ${(_a = style == null ? void 0 : style.card) == null ? void 0 : _a.root}
  `;
}
var __defProp$H = Object.defineProperty, __defProps$F = Object.defineProperties, __getOwnPropDescs$F = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$G = Object.getOwnPropertySymbols, __hasOwnProp$G = Object.prototype.hasOwnProperty, __propIsEnum$G = Object.prototype.propertyIsEnumerable, __defNormalProp$H = (obj, key2, value)=>key2 in obj ? __defProp$H(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$G = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$G.call(b, prop) && __defNormalProp$H(a, prop, b[prop]);
    if (__getOwnPropSymbols$G) for (var prop of __getOwnPropSymbols$G(b))__propIsEnum$G.call(b, prop) && __defNormalProp$H(a, prop, b[prop]);
    return a;
}, __spreadProps$F = (a, b)=>__defProps$F(a, __getOwnPropDescs$F(b)), __objRest$B = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$G.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$G) for (var prop of __getOwnPropSymbols$G(source))exclude.indexOf(prop) < 0 && __propIsEnum$G.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(responsiveBorderStyle, responsiveRadiusStyle, responsiveShadowStyle, cardStyle), Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    let asProp, border2, borderBottom2, borderLeft2, borderRight2, borderTop2, muted, pressed, restProps, scheme, selected, shadow, t0, t1, t2, t3;
    $[0] !== props ? (_a = props, { __unstable_checkered: t0, __unstable_focusRing: t1, as: asProp, border: border2, borderTop: borderTop2, borderRight: borderRight2, borderBottom: borderBottom2, borderLeft: borderLeft2, muted, pressed, radius: t2, scheme, selected, shadow, tone: t3 } = _a, restProps = __objRest$B(_a, [
        "__unstable_checkered",
        "__unstable_focusRing",
        "as",
        "border",
        "borderTop",
        "borderRight",
        "borderBottom",
        "borderLeft",
        "muted",
        "pressed",
        "radius",
        "scheme",
        "selected",
        "shadow",
        "tone"
    ]), $[0] = props, $[1] = asProp, $[2] = border2, $[3] = borderBottom2, $[4] = borderLeft2, $[5] = borderRight2, $[6] = borderTop2, $[7] = muted, $[8] = pressed, $[9] = restProps, $[10] = scheme, $[11] = selected, $[12] = shadow, $[13] = t0, $[14] = t1, $[15] = t2, $[16] = t3) : (asProp = $[1], border2 = $[2], borderBottom2 = $[3], borderLeft2 = $[4], borderRight2 = $[5], borderTop2 = $[6], muted = $[7], pressed = $[8], restProps = $[9], scheme = $[10], selected = $[11], shadow = $[12], t0 = $[13], t1 = $[14], t2 = $[15], t3 = $[16]);
    const checkered = t0 === void 0 ? !1 : t0, focusRing = t1 === void 0 ? !1 : t1, radius = t2 === void 0 ? 0 : t2, toneProp = t3 === void 0 ? "default" : t3, as = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(asProp) ? asProp : "div", rootTheme = useRootTheme(), tone = toneProp === "inherit" ? rootTheme.tone : toneProp, t4 = typeof as == "string" ? as : void 0, t5 = rootTheme.scheme, t6 = useArrayProp(border2), t7 = useArrayProp(borderTop2), t8 = useArrayProp(borderRight2), t9 = useArrayProp(borderBottom2), t10 = useArrayProp(borderLeft2), t11 = useArrayProp(radius), t12 = useArrayProp(shadow), t13 = checkered ? "" : void 0, t14 = pressed ? "" : void 0, t15 = selected ? "" : void 0;
    let t16;
    $[17] !== as || $[18] !== checkered || $[19] !== focusRing || $[20] !== muted || $[21] !== ref || $[22] !== restProps || $[23] !== rootTheme.scheme || $[24] !== selected || $[25] !== t10 || $[26] !== t11 || $[27] !== t12 || $[28] !== t13 || $[29] !== t14 || $[30] !== t15 || $[31] !== t4 || $[32] !== t6 || $[33] !== t7 || $[34] !== t8 || $[35] !== t9 || $[36] !== tone ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$s, __spreadProps$F(__spreadValues$G({
        "data-as": t4,
        "data-scheme": t5,
        "data-ui": "Card",
        "data-tone": tone
    }, restProps), {
        $border: t6,
        $borderTop: t7,
        $borderRight: t8,
        $borderBottom: t9,
        $borderLeft: t10,
        $checkered: checkered,
        $focusRing: focusRing,
        $muted: muted,
        $radius: t11,
        $shadow: t12,
        $tone: tone,
        "data-checkered": t13,
        "data-pressed": t14,
        "data-selected": t15,
        forwardedAs: as,
        ref,
        selected
    })), $[17] = as, $[18] = checkered, $[19] = focusRing, $[20] = muted, $[21] = ref, $[22] = restProps, $[23] = rootTheme.scheme, $[24] = selected, $[25] = t10, $[26] = t11, $[27] = t12, $[28] = t13, $[29] = t14, $[30] = t15, $[31] = t4, $[32] = t6, $[33] = t7, $[34] = t8, $[35] = t9, $[36] = tone, $[37] = t16) : t16 = $[37];
    let t17;
    return $[38] !== scheme || $[39] !== t16 || $[40] !== tone ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThemeColorProvider, {
        scheme,
        tone,
        children: t16
    }), $[38] = scheme, $[39] = t16, $[40] = tone, $[41] = t17) : t17 = $[41], t17;
});
Card.displayName = "ForwardRef(Card)";
function checkboxBaseStyles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: relative;
    display: inline-block;
  `;
}
function inputElementStyles(props) {
    const { color, input, radius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), { focusRing } = input.checkbox;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${rem(input.checkbox.size)};
      width: ${rem(input.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};
      border-radius: ${rem(radius[2])};
      line-height: 1;
      background-color: ${color.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${color.input.default.enabled.fg};
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.fg,
        width: input.border.width
    })};
      color: ${color.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${focusRingStyle({
        focusRing
    })};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${focusRingStyle({
        focusRing: {
            width: 1,
            offset: 1
        }
    })};
    }

    &[data-error] + span {
      background-color: ${color.input.invalid.enabled.border};
      box-shadow: ${focusRingBorderStyle({
        width: input.border.width,
        color: color.input.invalid.enabled.muted.bg
    })};
      color: ${color.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${color.input.invalid.enabled.muted.bg};
      color: ${color.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${focusRingStyle({
        border: {
            width: input.border.width,
            color: color.input.invalid.readOnly.muted.bg
        },
        focusRing: {
            width: 1,
            offset: 1
        }
    })};
    }

    &:disabled + span {
      background-color: ${color.input.default.disabled.bg};
      box-shadow: ${focusRingBorderStyle({
        width: input.border.width,
        color: color.input.default.disabled.border
    })};
      color: ${color.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${color.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${color.input.default.readOnly.bg};
      box-shadow: ${focusRingBorderStyle({
        width: input.border.width,
        color: color.input.default.readOnly.border
    })};
      color: ${color.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${color.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `;
}
var __defProp$G = Object.defineProperty, __defProps$E = Object.defineProperties, __getOwnPropDescs$E = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$F = Object.getOwnPropertySymbols, __hasOwnProp$F = Object.prototype.hasOwnProperty, __propIsEnum$F = Object.prototype.propertyIsEnumerable, __defNormalProp$G = (obj, key2, value)=>key2 in obj ? __defProp$G(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$F = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$F.call(b, prop) && __defNormalProp$G(a, prop, b[prop]);
    if (__getOwnPropSymbols$F) for (var prop of __getOwnPropSymbols$F(b))__propIsEnum$F.call(b, prop) && __defNormalProp$G(a, prop, b[prop]);
    return a;
}, __spreadProps$E = (a, b)=>__defProps$E(a, __getOwnPropDescs$E(b)), __objRest$A = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$F.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$F) for (var prop of __getOwnPropSymbols$F(source))exclude.indexOf(prop) < 0 && __propIsEnum$F.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(checkboxBaseStyles), Input$5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].input(inputElementStyles), Checkbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    let checked, className, customValidity, disabled, indeterminate, readOnly, restProps, style;
    $[0] !== props ? (_a = props, { checked, className, disabled, indeterminate, customValidity, readOnly, style } = _a, restProps = __objRest$A(_a, [
        "checked",
        "className",
        "disabled",
        "indeterminate",
        "customValidity",
        "readOnly",
        "style"
    ]), $[0] = props, $[1] = checked, $[2] = className, $[3] = customValidity, $[4] = disabled, $[5] = indeterminate, $[6] = readOnly, $[7] = restProps, $[8] = style) : (checked = $[1], className = $[2], customValidity = $[3], disabled = $[4], indeterminate = $[5], readOnly = $[6], restProps = $[7], style = $[8]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[9] = t0) : t0 = $[9], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0);
    let t1, t2;
    $[10] !== indeterminate ? (t1 = ()=>{
        ref.current && (ref.current.indeterminate = indeterminate || !1);
    }, t2 = [
        indeterminate
    ], $[10] = indeterminate, $[11] = t1, $[12] = t2) : (t1 = $[11], t2 = $[12]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2), useCustomValidity(ref, customValidity);
    const t3 = !disabled && readOnly ? "" : void 0, t4 = customValidity ? "" : void 0, t5 = disabled || readOnly;
    let t6;
    $[13] !== checked || $[14] !== readOnly || $[15] !== restProps || $[16] !== t3 || $[17] !== t4 || $[18] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input$5, __spreadProps$E(__spreadValues$F({
        "data-read-only": t3,
        "data-error": t4
    }, restProps), {
        checked,
        disabled: t5,
        type: "checkbox",
        readOnly,
        ref
    })), $[13] = checked, $[14] = readOnly, $[15] = restProps, $[16] = t3, $[17] = t4, $[18] = t5, $[19] = t6) : t6 = $[19];
    let t7;
    $[20] === Symbol.for("react.memo_cache_sentinel") ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkIcon"], {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveIcon"], {})
        ]
    }), $[20] = t7) : t7 = $[20];
    let t8;
    return $[21] !== className || $[22] !== style || $[23] !== t6 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$r, {
        className,
        "data-ui": "Checkbox",
        style,
        children: [
            t6,
            t7
        ]
    }), $[21] = className, $[22] = style, $[23] = t6, $[24] = t8) : t8 = $[24], t8;
});
Checkbox.displayName = "ForwardRef(Checkbox)";
function codeSyntaxHighlightingStyle({ theme }) {
    const { color: { syntax: color } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(theme);
    return {
        "&.atrule": {
            color: color.atrule
        },
        "&.attr-name": {
            color: color.attrName
        },
        "&.attr-value": {
            color: color.attrValue
        },
        "&.attribute": {
            color: color.attribute
        },
        "&.boolean": {
            color: color.boolean
        },
        "&.builtin": {
            color: color.builtin
        },
        "&.cdata": {
            color: color.cdata
        },
        "&.char": {
            color: color.char
        },
        "&.class": {
            color: color.class
        },
        "&.class-name": {
            color: color.className
        },
        "&.comment": {
            color: color.comment
        },
        "&.constant": {
            color: color.constant
        },
        "&.deleted": {
            color: color.deleted
        },
        "&.doctype": {
            color: color.doctype
        },
        "&.entity": {
            color: color.entity
        },
        "&.function": {
            color: color.function
        },
        "&.hexcode": {
            color: color.hexcode
        },
        "&.id": {
            color: color.id
        },
        "&.important": {
            color: color.important
        },
        "&.inserted": {
            color: color.inserted
        },
        "&.keyword": {
            color: color.keyword
        },
        "&.number": {
            color: color.number
        },
        "&.operator": {
            color: color.operator
        },
        "&.prolog": {
            color: color.prolog
        },
        "&.property": {
            color: color.property
        },
        "&.pseudo-class": {
            color: color.pseudoClass
        },
        "&.pseudo-element": {
            color: color.pseudoElement
        },
        "&.punctuation": {
            color: color.punctuation
        },
        "&.regex": {
            color: color.regex
        },
        "&.selector": {
            color: color.selector
        },
        "&.string": {
            color: color.string
        },
        "&.symbol": {
            color: color.symbol
        },
        "&.tag": {
            color: color.tag
        },
        "&.unit": {
            color: color.unit
        },
        "&.url": {
            color: color.url
        },
        "&.variable": {
            color: color.variable
        }
    };
}
function codeBaseStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${codeSyntaxHighlightingStyle}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
}
var __defProp$F = Object.defineProperty, __defProps$D = Object.defineProperties, __getOwnPropDescs$D = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$E = Object.getOwnPropertySymbols, __hasOwnProp$E = Object.prototype.hasOwnProperty, __propIsEnum$E = Object.prototype.propertyIsEnumerable, __defNormalProp$F = (obj, key2, value)=>key2 in obj ? __defProp$F(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$E = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$E.call(b, prop) && __defNormalProp$F(a, prop, b[prop]);
    if (__getOwnPropSymbols$E) for (var prop of __getOwnPropSymbols$E(b))__propIsEnum$E.call(b, prop) && __defNormalProp$F(a, prop, b[prop]);
    return a;
}, __spreadProps$D = (a, b)=>__defProps$D(a, __getOwnPropDescs$D(b)), __objRest$z = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$E.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$E) for (var prop of __getOwnPropSymbols$E(source))exclude.indexOf(prop) < 0 && __propIsEnum$E.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].pre(codeBaseStyle, responsiveCodeFontStyle), Code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    let children, languageProp, restProps, t0, weight;
    $[0] !== props ? (_a = props, { children, language: languageProp, size: t0, weight } = _a, restProps = __objRest$z(_a, [
        "children",
        "language",
        "size",
        "weight"
    ]), $[0] = props, $[1] = children, $[2] = languageProp, $[3] = restProps, $[4] = t0, $[5] = weight) : (children = $[1], languageProp = $[2], restProps = $[3], t0 = $[4], weight = $[5]);
    const size2 = t0 === void 0 ? 2 : t0, language = typeof languageProp == "string" ? languageProp : void 0;
    let t1;
    $[6] !== language ? (t1 = language ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$refractor$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$refractor$2f$lib$2f$Refractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasLanguage(language) : !1, $[6] = language, $[7] = t1) : t1 = $[7];
    const registered = t1, t2 = useArrayProp(size2);
    let t3;
    $[8] !== children || $[9] !== language || $[10] !== registered ? (t3 = !(language && registered) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("code", {
        children
    }), $[8] = children, $[9] = language, $[10] = registered, $[11] = t3) : t3 = $[11];
    let t4;
    $[12] !== children || $[13] !== language || $[14] !== registered ? (t4 = language && registered && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$refractor$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$refractor$2f$lib$2f$Refractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        inline: !0,
        language,
        value: String(children)
    }), $[12] = children, $[13] = language, $[14] = registered, $[15] = t4) : t4 = $[15];
    let t5;
    return $[16] !== ref || $[17] !== restProps || $[18] !== t2 || $[19] !== t3 || $[20] !== t4 || $[21] !== weight ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$q, __spreadProps$D(__spreadValues$E({
        "data-ui": "Code"
    }, restProps), {
        $size: t2,
        $weight: weight,
        ref,
        children: [
            t3,
            t4
        ]
    })), $[16] = ref, $[17] = restProps, $[18] = t2, $[19] = t3, $[20] = t4, $[21] = weight, $[22] = t5) : t5 = $[22], t5;
});
Code.displayName = "ForwardRef(Code)";
const BASE_STYLE$1 = {
    width: "100%",
    margin: "0 auto"
};
function containerBaseStyle() {
    return BASE_STYLE$1;
}
function responsiveContainerWidthStyle(props) {
    const { container, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$width, (val)=>({
            maxWidth: val === "auto" ? "none" : rem(container[val])
        }));
}
var __defProp$E = Object.defineProperty, __defProps$C = Object.defineProperties, __getOwnPropDescs$C = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$D = Object.getOwnPropertySymbols, __hasOwnProp$D = Object.prototype.hasOwnProperty, __propIsEnum$D = Object.prototype.propertyIsEnumerable, __defNormalProp$E = (obj, key2, value)=>key2 in obj ? __defProp$E(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$D = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$D.call(b, prop) && __defNormalProp$E(a, prop, b[prop]);
    if (__getOwnPropSymbols$D) for (var prop of __getOwnPropSymbols$D(b))__propIsEnum$D.call(b, prop) && __defNormalProp$E(a, prop, b[prop]);
    return a;
}, __spreadProps$C = (a, b)=>__defProps$C(a, __getOwnPropDescs$C(b)), __objRest$y = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$D.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$D) for (var prop of __getOwnPropSymbols$D(source))exclude.indexOf(prop) < 0 && __propIsEnum$D.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(containerBaseStyle, responsiveContainerWidthStyle), Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    let as, restProps, t0;
    $[0] !== props ? (_a = props, { as, width: t0 } = _a, restProps = __objRest$y(_a, [
        "as",
        "width"
    ]), $[0] = props, $[1] = as, $[2] = restProps, $[3] = t0) : (as = $[1], restProps = $[2], t0 = $[3]);
    const t1 = useArrayProp(t0 === void 0 ? 2 : t0);
    let t2;
    return $[4] !== as || $[5] !== ref || $[6] !== restProps || $[7] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$p, __spreadProps$C(__spreadValues$D({
        "data-ui": "Container"
    }, restProps), {
        $width: t1,
        forwardedAs: as,
        ref
    })), $[4] = as, $[5] = ref, $[6] = restProps, $[7] = t1, $[8] = t2) : t2 = $[8], t2;
});
Container.displayName = "ForwardRef(Container)";
var __defProp$D = Object.defineProperty, __defProps$B = Object.defineProperties, __getOwnPropDescs$B = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$C = Object.getOwnPropertySymbols, __hasOwnProp$C = Object.prototype.hasOwnProperty, __propIsEnum$C = Object.prototype.propertyIsEnumerable, __defNormalProp$D = (obj, key2, value)=>key2 in obj ? __defProp$D(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$C = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$C.call(b, prop) && __defNormalProp$D(a, prop, b[prop]);
    if (__getOwnPropSymbols$C) for (var prop of __getOwnPropSymbols$C(b))__propIsEnum$C.call(b, prop) && __defNormalProp$D(a, prop, b[prop]);
    return a;
}, __spreadProps$B = (a, b)=>__defProps$B(a, __getOwnPropDescs$B(b)), __objRest$x = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$C.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$C) for (var prop of __getOwnPropSymbols$C(source))exclude.indexOf(prop) < 0 && __propIsEnum$C.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(responsiveGridStyle), Grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    let as, autoCols, autoFlow, autoRows, children, columns, gap, gapX, gapY, restProps, rows;
    $[0] !== props ? (_a = props, { as, autoRows, autoCols, autoFlow, columns, gap, gapX, gapY, rows, children } = _a, restProps = __objRest$x(_a, [
        "as",
        "autoRows",
        "autoCols",
        "autoFlow",
        "columns",
        "gap",
        "gapX",
        "gapY",
        "rows",
        "children"
    ]), $[0] = props, $[1] = as, $[2] = autoCols, $[3] = autoFlow, $[4] = autoRows, $[5] = children, $[6] = columns, $[7] = gap, $[8] = gapX, $[9] = gapY, $[10] = restProps, $[11] = rows) : (as = $[1], autoCols = $[2], autoFlow = $[3], autoRows = $[4], children = $[5], columns = $[6], gap = $[7], gapX = $[8], gapY = $[9], restProps = $[10], rows = $[11]);
    const t0 = typeof as == "string" ? as : void 0, t1 = useArrayProp(autoRows), t2 = useArrayProp(autoCols), t3 = useArrayProp(autoFlow), t4 = useArrayProp(columns), t5 = useArrayProp(gap), t6 = useArrayProp(gapX), t7 = useArrayProp(gapY), t8 = useArrayProp(rows);
    let t9;
    return $[12] !== as || $[13] !== children || $[14] !== ref || $[15] !== restProps || $[16] !== t0 || $[17] !== t1 || $[18] !== t2 || $[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t6 || $[23] !== t7 || $[24] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$o, __spreadProps$B(__spreadValues$C({
        "data-as": t0,
        "data-ui": "Grid"
    }, restProps), {
        $autoRows: t1,
        $autoCols: t2,
        $autoFlow: t3,
        $columns: t4,
        $gap: t5,
        $gapX: t6,
        $gapY: t7,
        $rows: t8,
        forwardedAs: as,
        ref,
        children
    })), $[12] = as, $[13] = children, $[14] = ref, $[15] = restProps, $[16] = t0, $[17] = t1, $[18] = t2, $[19] = t3, $[20] = t4, $[21] = t5, $[22] = t6, $[23] = t7, $[24] = t8, $[25] = t9) : t9 = $[25], t9;
});
Grid.displayName = "ForwardRef(Grid)";
function headingBaseStyle(props) {
    const { $accent, $muted } = props, { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${$accent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-accent-fg-color);
    `}

    ${$muted && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${font.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${font.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `;
}
var __defProp$C = Object.defineProperty, __defProps$A = Object.defineProperties, __getOwnPropDescs$A = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$B = Object.getOwnPropertySymbols, __hasOwnProp$B = Object.prototype.hasOwnProperty, __propIsEnum$B = Object.prototype.propertyIsEnumerable, __defNormalProp$C = (obj, key2, value)=>key2 in obj ? __defProp$C(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$B = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$B.call(b, prop) && __defNormalProp$C(a, prop, b[prop]);
    if (__getOwnPropSymbols$B) for (var prop of __getOwnPropSymbols$B(b))__propIsEnum$B.call(b, prop) && __defNormalProp$C(a, prop, b[prop]);
    return a;
}, __spreadProps$A = (a, b)=>__defProps$A(a, __getOwnPropDescs$A(b)), __objRest$w = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$B.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$B) for (var prop of __getOwnPropSymbols$B(source))exclude.indexOf(prop) < 0 && __propIsEnum$B.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(headingBaseStyle, responsiveTextAlignStyle, responsiveHeadingFont), SpanWithTextOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`, Heading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    let align, childrenProp, restProps, t0, t1, t2, textOverflow, weight;
    $[0] !== props ? (_a = props, { accent: t0, align, children: childrenProp, muted: t1, size: t2, textOverflow, weight } = _a, restProps = __objRest$w(_a, [
        "accent",
        "align",
        "children",
        "muted",
        "size",
        "textOverflow",
        "weight"
    ]), $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = textOverflow, $[8] = weight) : (align = $[1], childrenProp = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], textOverflow = $[7], weight = $[8]);
    const accent = t0 === void 0 ? !1 : t0, muted = t1 === void 0 ? !1 : t1, size2 = t2 === void 0 ? 2 : t2;
    let children = childrenProp;
    if (textOverflow === "ellipsis") {
        let t32;
        $[9] !== children ? (t32 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SpanWithTextOverflow, {
            children
        }), $[9] = children, $[10] = t32) : t32 = $[10], children = t32;
    }
    const t3 = useArrayProp(align), t4 = useArrayProp(size2);
    let t5;
    $[11] !== children ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children
    }), $[11] = children, $[12] = t5) : t5 = $[12];
    let t6;
    return $[13] !== accent || $[14] !== muted || $[15] !== ref || $[16] !== restProps || $[17] !== t3 || $[18] !== t4 || $[19] !== t5 || $[20] !== weight ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$n, __spreadProps$A(__spreadValues$B({
        "data-ui": "Heading"
    }, restProps), {
        $accent: accent,
        $align: t3,
        $muted: muted,
        $size: t4,
        $weight: weight,
        ref,
        children: t5
    })), $[13] = accent, $[14] = muted, $[15] = ref, $[16] = restProps, $[17] = t3, $[18] = t4, $[19] = t5, $[20] = weight, $[21] = t6) : t6 = $[21], t6;
});
Heading.displayName = "ForwardRef(Heading)";
function inlineBaseStyle() {
    return {
        lineHeight: 0,
        "&&:not([hidden])": {
            display: "block"
        },
        "& > div": {
            display: "inline-block",
            verticalAlign: "middle"
        }
    };
}
function inlineSpaceStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$space, (spaceIndex)=>{
        const _space = rem(spaceIndex === 0.5 ? space[1] / 2 : space[spaceIndex]);
        return {
            margin: `-${_space} 0 0 -${_space}`,
            "& > div": {
                padding: `${_space} 0 0 ${_space}`
            }
        };
    });
}
var __defProp$B = Object.defineProperty, __defProps$z = Object.defineProperties, __getOwnPropDescs$z = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$A = Object.getOwnPropertySymbols, __hasOwnProp$A = Object.prototype.hasOwnProperty, __propIsEnum$A = Object.prototype.propertyIsEnumerable, __defNormalProp$B = (obj, key2, value)=>key2 in obj ? __defProp$B(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$A = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$A.call(b, prop) && __defNormalProp$B(a, prop, b[prop]);
    if (__getOwnPropSymbols$A) for (var prop of __getOwnPropSymbols$A(b))__propIsEnum$A.call(b, prop) && __defNormalProp$B(a, prop, b[prop]);
    return a;
}, __spreadProps$z = (a, b)=>__defProps$z(a, __getOwnPropDescs$z(b)), __objRest$v = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$A.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$A) for (var prop of __getOwnPropSymbols$A(source))exclude.indexOf(prop) < 0 && __propIsEnum$A.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(inlineBaseStyle, inlineSpaceStyle), Inline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    let as, childrenProp, restProps, space;
    $[0] !== props ? (_a = props, { as, children: childrenProp, space } = _a, restProps = __objRest$v(_a, [
        "as",
        "children",
        "space"
    ]), $[0] = props, $[1] = as, $[2] = childrenProp, $[3] = restProps, $[4] = space) : (as = $[1], childrenProp = $[2], restProps = $[3], space = $[4]);
    let t0, t1;
    $[5] !== childrenProp ? (t1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(childrenProp, _temp$6), $[5] = childrenProp, $[6] = t1) : t1 = $[6], t0 = t1;
    const children = t0, t2 = useArrayProp(space);
    let t3;
    return $[7] !== as || $[8] !== children || $[9] !== restProps || $[10] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$m, __spreadProps$z(__spreadValues$A({
        "data-ui": "Inline"
    }, restProps), {
        $space: t2,
        forwardedAs: as,
        ref,
        children
    })), $[7] = as, $[8] = children, $[9] = restProps, $[10] = t2, $[11] = t3) : t3 = $[11], t3;
});
Inline.displayName = "ForwardRef(Inline)";
function _temp$6(child) {
    return child && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: child
    });
}
var __defProp$A = Object.defineProperty, __defProps$y = Object.defineProperties, __getOwnPropDescs$y = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$z = Object.getOwnPropertySymbols, __hasOwnProp$z = Object.prototype.hasOwnProperty, __propIsEnum$z = Object.prototype.propertyIsEnumerable, __defNormalProp$A = (obj, key2, value)=>key2 in obj ? __defProp$A(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$z = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$z.call(b, prop) && __defNormalProp$A(a, prop, b[prop]);
    if (__getOwnPropSymbols$z) for (var prop of __getOwnPropSymbols$z(b))__propIsEnum$z.call(b, prop) && __defNormalProp$A(a, prop, b[prop]);
    return a;
}, __spreadProps$y = (a, b)=>__defProps$y(a, __getOwnPropDescs$y(b)), __objRest$u = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$z.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$z) for (var prop of __getOwnPropSymbols$z(source))exclude.indexOf(prop) < 0 && __propIsEnum$z.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
function kbdStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `;
}
const Root$l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].kbd(responsiveRadiusStyle, kbdStyle), KBD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    let children, restProps, t0, t1, t2;
    $[0] !== props ? (_a = props, { children, fontSize: t0, padding: t1, radius: t2 } = _a, restProps = __objRest$u(_a, [
        "children",
        "fontSize",
        "padding",
        "radius"
    ]), $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0, $[4] = t1, $[5] = t2) : (children = $[1], restProps = $[2], t0 = $[3], t1 = $[4], t2 = $[5]);
    const fontSize2 = t0 === void 0 ? 0 : t0, padding = t1 === void 0 ? 1 : t1, t3 = useArrayProp(t2 === void 0 ? 2 : t2);
    let t4;
    $[6] !== children || $[7] !== fontSize2 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        as: "span",
        size: fontSize2,
        weight: "semibold",
        children
    }), $[6] = children, $[7] = fontSize2, $[8] = t4) : t4 = $[8];
    let t5;
    $[9] !== padding || $[10] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
        as: "span",
        padding,
        children: t4
    }), $[9] = padding, $[10] = t4, $[11] = t5) : t5 = $[11];
    let t6;
    return $[12] !== ref || $[13] !== restProps || $[14] !== t3 || $[15] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$l, __spreadProps$y(__spreadValues$z({
        "data-ui": "KBD"
    }, restProps), {
        $radius: t3,
        ref,
        children: t5
    })), $[12] = ref, $[13] = restProps, $[14] = t3, $[15] = t5, $[16] = t6) : t6 = $[16], t6;
});
KBD.displayName = "ForwardRef(KBD)";
const origin = {
    name: "@sanity/ui/origin",
    fn ({ middlewareData, placement, rects }) {
        var _a, _b;
        const [side] = placement.split("-"), floatingWidth = rects.floating.width, floatingHeight = rects.floating.height, shiftX = ((_a = middlewareData.shift) == null ? void 0 : _a.x) || 0, shiftY = ((_b = middlewareData.shift) == null ? void 0 : _b.y) || 0;
        if (floatingWidth <= 0 || floatingHeight <= 0) return {};
        const isVerticalPlacement = [
            "bottom",
            "top"
        ].includes(side), { originX, originY } = isVerticalPlacement ? {
            originX: clamp(0.5 - shiftX / floatingWidth, 0, 1),
            originY: side === "bottom" ? 0 : 1
        } : {
            originX: side === "left" ? 1 : 0,
            originY: clamp(0.5 - shiftY / floatingHeight, 0, 1)
        };
        return {
            data: {
                originX,
                originY
            }
        };
    }
};
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
var __defProp$z = Object.defineProperty, __getOwnPropSymbols$y = Object.getOwnPropertySymbols, __hasOwnProp$y = Object.prototype.hasOwnProperty, __propIsEnum$y = Object.prototype.propertyIsEnumerable, __defNormalProp$z = (obj, key2, value)=>key2 in obj ? __defProp$z(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$y = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$y.call(b, prop) && __defNormalProp$z(a, prop, b[prop]);
    if (__getOwnPropSymbols$y) for (var prop of __getOwnPropSymbols$y(b))__propIsEnum$y.call(b, prop) && __defNormalProp$z(a, prop, b[prop]);
    return a;
};
function moveTowardsLength(movingPoint, targetPoint, amount) {
    const width = targetPoint.x - movingPoint.x, height = targetPoint.y - movingPoint.y, distance = Math.sqrt(width * width + height * height);
    return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
}
function moveTowardsFractional(movingPoint, targetPoint, fraction) {
    return {
        x: movingPoint.x + (targetPoint.x - movingPoint.x) * fraction,
        y: movingPoint.y + (targetPoint.y - movingPoint.y) * fraction
    };
}
function getRoundedCommands(points) {
    const len = points.length, cmds = [];
    for(let i = 0; i < len; i += 1){
        const point = points[i], prevPoint = points[i - 1], nextPoint = points[i + 1];
        if (prevPoint && point.radius) {
            const curveStart = moveTowardsLength(point, prevPoint, point.radius), curveEnd = moveTowardsLength(point, nextPoint, point.radius), startControl = moveTowardsFractional(curveStart, point, 0.5), endControl = moveTowardsFractional(point, curveEnd, 0.5);
            cmds.push(__spreadValues$y({
                type: "point"
            }, curveStart)), cmds.push({
                type: "curve",
                curveEnd,
                startControl,
                endControl
            });
        } else cmds.push(__spreadValues$y({
            type: "point"
        }, point));
    }
    return cmds;
}
function compileCommands(cmds) {
    return cmds.map((n, idx)=>n.type === "point" ? `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}` : n.type === "curve" ? `C ${n.startControl.x} ${n.startControl.y} ${n.endControl.x} ${n.endControl.y} ${n.curveEnd.x} ${n.curveEnd.y}` : "").join(" ");
}
var __defProp$y = Object.defineProperty, __defProps$x = Object.defineProperties, __getOwnPropDescs$x = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$x = Object.getOwnPropertySymbols, __hasOwnProp$x = Object.prototype.hasOwnProperty, __propIsEnum$x = Object.prototype.propertyIsEnumerable, __defNormalProp$y = (obj, key2, value)=>key2 in obj ? __defProp$y(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$x = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$x.call(b, prop) && __defNormalProp$y(a, prop, b[prop]);
    if (__getOwnPropSymbols$x) for (var prop of __getOwnPropSymbols$x(b))__propIsEnum$x.call(b, prop) && __defNormalProp$y(a, prop, b[prop]);
    return a;
}, __spreadProps$x = (a, b)=>__defProps$x(a, __getOwnPropDescs$x(b)), __objRest$t = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$x.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$x) for (var prop of __getOwnPropSymbols$x(source))exclude.indexOf(prop) < 0 && __propIsEnum$x.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(({ $w: w })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: absolute;
    width: ${w}px;
    height: ${w}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${w / 2}px ${w / 2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${w}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${w}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${w}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${w}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `), StrokePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].path`
  stroke: var(--card-shadow-outline-color);
`, ShapePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].path`
  fill: var(--card-bg-color);
`, Arrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    let h, restProps, t0, w;
    $[0] !== props ? (_a = props, { width: w, height: h, radius: t0 } = _a, restProps = __objRest$t(_a, [
        "width",
        "height",
        "radius"
    ]), $[0] = props, $[1] = h, $[2] = restProps, $[3] = t0, $[4] = w) : (h = $[1], restProps = $[2], t0 = $[3], w = $[4]);
    const radius = t0 === void 0 ? 0 : t0, { card } = useTheme_v2(), strokeWidth = card.shadow.outline, center = w / 2, points = [
        {
            x: 0,
            y: 0
        },
        {
            x: radius,
            y: 0,
            radius
        },
        {
            x: center,
            y: h - 1,
            radius
        },
        {
            x: w - radius,
            y: 0,
            radius
        },
        {
            x: w,
            y: 0
        }
    ], cmds = getRoundedCommands(points), path = compileCommands(cmds), strokePath = `${path}`, fillPath = `${path} M ${w} -1 M 0 -1 Z`, t1 = `0 0 ${w} ${w}`;
    let t2;
    $[5] !== strokeWidth || $[6] !== w ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("mask", {
        id: "stroke-mask",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
            x: 0,
            y: strokeWidth,
            width: w,
            height: w,
            fill: "white"
        })
    }), $[5] = strokeWidth, $[6] = w, $[7] = t2) : t2 = $[7];
    const t3 = strokeWidth * 2;
    let t4;
    $[8] !== strokePath || $[9] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(StrokePath, {
        d: strokePath,
        mask: "url(#stroke-mask)",
        strokeWidth: t3
    }), $[8] = strokePath, $[9] = t3, $[10] = t4) : t4 = $[10];
    let t5;
    $[11] !== fillPath ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ShapePath, {
        d: fillPath
    }), $[11] = fillPath, $[12] = t5) : t5 = $[12];
    let t6;
    $[13] !== t1 || $[14] !== t2 || $[15] !== t4 || $[16] !== t5 || $[17] !== w ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        width: w,
        height: w,
        viewBox: t1,
        children: [
            t2,
            t4,
            t5
        ]
    }), $[13] = t1, $[14] = t2, $[15] = t4, $[16] = t5, $[17] = w, $[18] = t6) : t6 = $[18];
    let t7;
    return $[19] !== ref || $[20] !== restProps || $[21] !== t6 || $[22] !== w ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$k, __spreadProps$x(__spreadValues$x({}, restProps), {
        $w: w,
        ref,
        children: t6
    })), $[19] = ref, $[20] = restProps, $[21] = t6, $[22] = w, $[23] = t7) : t7 = $[23], t7;
});
Arrow.displayName = "ForwardRef(Arrow)";
const BoundaryElementContext = createGlobalScopedContext("@sanity/ui/context/boundaryElement", null);
function BoundaryElementProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { children, element } = props;
    let t0, t1;
    $[0] !== element ? (t1 = {
        version: 0,
        element
    }, $[0] = element, $[1] = t1) : t1 = $[1], t0 = t1;
    const value = t0;
    let t2;
    return $[2] !== children || $[3] !== value ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoundaryElementContext.Provider, {
        value,
        children
    }), $[2] = children, $[3] = value, $[4] = t2) : t2 = $[4], t2;
}
BoundaryElementProvider.displayName = "BoundaryElementProvider";
function isRecord(value) {
    return !!(value && typeof value == "object" && !Array.isArray(value));
}
const DEFAULT_VALUE = {
    version: 0,
    element: null
};
function useBoundaryElement() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BoundaryElementContext);
    if (value && (!isRecord(value) || value.version !== 0)) throw new Error("useBoundaryElement(): the context value is not compatible");
    return value || DEFAULT_VALUE;
}
function ConditionalWrapper({ children, condition, wrapper }) {
    return condition ? wrapper(children) : children;
}
ConditionalWrapper.displayName = "ConditionalWrapper";
function findMaxBreakpoints(media, width) {
    const ret = [];
    for(let i = 0; i < media.length; i += 1)media[i] > width && ret.push(i);
    return ret;
}
function findMinBreakpoints(media, width) {
    const ret = [];
    for(let i = 0; i < media.length; i += 1)media[i] <= width && ret.push(i);
    return ret;
}
var __defProp$x = Object.defineProperty, __defProps$w = Object.defineProperties, __getOwnPropDescs$w = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$w = Object.getOwnPropertySymbols, __hasOwnProp$w = Object.prototype.hasOwnProperty, __propIsEnum$w = Object.prototype.propertyIsEnumerable, __defNormalProp$x = (obj, key2, value)=>key2 in obj ? __defProp$x(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$w = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$w.call(b, prop) && __defNormalProp$x(a, prop, b[prop]);
    if (__getOwnPropSymbols$w) for (var prop of __getOwnPropSymbols$w(b))__propIsEnum$w.call(b, prop) && __defNormalProp$x(a, prop, b[prop]);
    return a;
}, __spreadProps$w = (a, b)=>__defProps$w(a, __getOwnPropDescs$w(b)), __objRest$s = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$w.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$w) for (var prop of __getOwnPropSymbols$w(source))exclude.indexOf(prop) < 0 && __propIsEnum$w.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const ElementQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a, _b;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18), theme = useTheme_v2();
    let _media, children, restProps;
    $[0] !== props ? (_a = props, { children, media: _media } = _a, restProps = __objRest$s(_a, [
        "children",
        "media"
    ]), $[0] = props, $[1] = _media, $[2] = children, $[3] = restProps) : (_media = $[1], children = $[2], restProps = $[3]);
    const media = _media != null ? _media : theme.media, [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), elementSize = useElementSize(element);
    let t0;
    t0 = (_b = elementSize == null ? void 0 : elementSize.border.width) != null ? _b : window.innerWidth;
    const width = t0;
    let t1, t2;
    if ($[4] !== media || $[5] !== width) {
        const eq = findMaxBreakpoints(media, width);
        t2 = eq.length ? eq.join(" ") : void 0, $[4] = media, $[5] = width, $[6] = t2;
    } else t2 = $[6];
    t1 = t2;
    const max = t1;
    let t3, t4;
    if ($[7] !== media || $[8] !== width) {
        const eq_0 = findMinBreakpoints(media, width);
        t4 = eq_0.length ? eq_0.join(" ") : void 0, $[7] = media, $[8] = width, $[9] = t4;
    } else t4 = $[9];
    t3 = t4;
    const min = t3;
    let t5, t6;
    $[10] !== element ? (t5 = ()=>element, t6 = [
        element
    ], $[10] = element, $[11] = t5, $[12] = t6) : (t5 = $[11], t6 = $[12]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t5, t6);
    let t7;
    return $[13] !== children || $[14] !== max || $[15] !== min || $[16] !== restProps ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", __spreadProps$w(__spreadValues$w({
        "data-ui": "ElementQuery"
    }, restProps), {
        "data-eq-max": max,
        "data-eq-min": min,
        ref: setElement,
        children
    })), $[13] = children, $[14] = max, $[15] = min, $[16] = restProps, $[17] = t7) : t7 = $[17], t7;
});
ElementQuery.displayName = "ForwardRef(ElementQuery)";
var __defProp$w = Object.defineProperty, __defNormalProp$w = (obj, key2, value)=>key2 in obj ? __defProp$w(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __publicField = (obj, key2, value)=>__defNormalProp$w(obj, key2 + "", value);
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments), __publicField(this, "state", {
            error: null
        });
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, info) {
        this.props.onCatch({
            error,
            info
        });
    }
    render() {
        const { error } = this.state;
        if (error) {
            const message = typeof (error == null ? void 0 : error.message) == "string" ? error.message : "Error";
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Code, {
                children: message
            });
        }
        return this.props.children;
    }
}
function getLayerContext(contextValue) {
    if (!isRecord(contextValue) || contextValue.version !== 0) throw new Error("the context value is not compatible");
    if (!contextValue) throw new Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
    if (contextValue.version === 0) return contextValue;
    throw new Error("could not get layer context");
}
const LayerContext = createGlobalScopedContext("@sanity/ui/context/layer", null);
function useLayer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2), value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LayerContext);
    if (!value) throw new Error("useLayer(): missing context value");
    try {
        let t1;
        return $[0] !== value ? (t1 = getLayerContext(value), $[0] = value, $[1] = t1) : t1 = $[1], t1;
    } catch (t0) {
        const err = t0;
        throw err instanceof Error ? new Error(`useLayer(): ${err.message}`) : new Error(`useLayer(): ${err}`);
    }
}
function _raf(fn) {
    const frameId = requestAnimationFrame(fn);
    return ()=>{
        cancelAnimationFrame(frameId);
    };
}
function _raf2(fn) {
    let innerDispose = null;
    const outerDispose = _raf(()=>{
        innerDispose = _raf(fn);
    });
    return ()=>{
        innerDispose && innerDispose(), outerDispose();
    };
}
function _isEnterToClickElement(element) {
    return isHTMLAnchorElement(element) || isHTMLButtonElement(element);
}
function isHTMLElement(node) {
    return node instanceof Node && node.nodeType === Node.ELEMENT_NODE;
}
function isHTMLAnchorElement(element) {
    return isHTMLElement(element) && element.nodeName === "A";
}
function isHTMLInputElement(element) {
    return isHTMLElement(element) && element.nodeName === "INPUT";
}
function isHTMLButtonElement(element) {
    return isHTMLElement(element) && element.nodeName === "BUTTON";
}
function isHTMLSelectElement(element) {
    return isHTMLElement(element) && element.nodeName === "SELECT";
}
function isHTMLTextAreaElement(element) {
    return isHTMLElement(element) && element.nodeName === "TEXTAREA";
}
function containsOrEqualsElement(element, node) {
    return element.contains(node) || element === node;
}
function _hasFocus(element) {
    return !!document.activeElement && element.contains(document.activeElement);
}
function isFocusable(element) {
    return element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null ? !0 : isHTMLAnchorElement(element) ? !!element.href && element.rel !== "ignore" : isHTMLInputElement(element) ? element.type !== "hidden" && element.type !== "file" && !element.disabled : isHTMLButtonElement(element) || isHTMLSelectElement(element) || isHTMLTextAreaElement(element) ? !element.disabled : !1;
}
function attemptFocus(element) {
    if (!isFocusable(element)) return !1;
    try {
        element.focus();
    } catch (_) {}
    return document.activeElement === element;
}
function focusFirstDescendant(element) {
    for(let i = 0; i < element.childNodes.length; i++){
        const child = element.childNodes[i];
        if (isHTMLElement(child) && (attemptFocus(child) || focusFirstDescendant(child))) return !0;
    }
    return !1;
}
function focusLastDescendant(element) {
    for(let i = element.childNodes.length - 1; i >= 0; i--){
        const child = element.childNodes[i];
        if (isHTMLElement(child) && (attemptFocus(child) || focusLastDescendant(child))) return !0;
    }
    return !1;
}
function _isScrollable(el) {
    if (!(el instanceof Element)) return !1;
    const style = window.getComputedStyle(el);
    return style.overflowX.includes("auto") || style.overflowX.includes("scroll") || style.overflowY.includes("auto") || style.overflowY.includes("scroll");
}
var __defProp$v = Object.defineProperty, __defProps$v = Object.defineProperties, __getOwnPropDescs$v = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$v = Object.getOwnPropertySymbols, __hasOwnProp$v = Object.prototype.hasOwnProperty, __propIsEnum$v = Object.prototype.propertyIsEnumerable, __defNormalProp$v = (obj, key2, value)=>key2 in obj ? __defProp$v(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$v = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$v.call(b, prop) && __defNormalProp$v(a, prop, b[prop]);
    if (__getOwnPropSymbols$v) for (var prop of __getOwnPropSymbols$v(b))__propIsEnum$v.call(b, prop) && __defNormalProp$v(a, prop, b[prop]);
    return a;
}, __spreadProps$v = (a, b)=>__defProps$v(a, __getOwnPropDescs$v(b));
function LayerProvider(props) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19), { children, zOffset: t0 } = props, zOffsetProp = t0 === void 0 ? 0 : t0, parentContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LayerContext);
    let t1;
    $[0] !== parentContextValue ? (t1 = parentContextValue && getLayerContext(parentContextValue), $[0] = parentContextValue, $[1] = t1) : t1 = $[1];
    const parent = t1, parentRegisterChild = parent == null ? void 0 : parent.registerChild, level = ((_a = parent == null ? void 0 : parent.level) != null ? _a : 0) + 1, zOffset = useArrayProp(zOffsetProp), maxMediaIndex = zOffset.length - 1, mediaIndex = Math.min(useMediaIndex(), maxMediaIndex), zIndex = parent ? parent.zIndex + zOffset[mediaIndex] : zOffset[mediaIndex];
    let t2;
    $[2] === Symbol.for("react.memo_cache_sentinel") ? (t2 = {}, $[2] = t2) : t2 = $[2];
    const [, setChildLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2), [size2, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), isTopLayer = size2 === 0;
    let t3;
    $[3] !== parentRegisterChild || $[4] !== setChildLayers ? (t3 = (childLevel)=>{
        const parentDispose = parentRegisterChild == null ? void 0 : parentRegisterChild(childLevel);
        return childLevel !== void 0 ? setChildLayers((state)=>{
            var _a2;
            const prevLen = (_a2 = state[childLevel]) != null ? _a2 : 0, nextState = __spreadProps$v(__spreadValues$v({}, state), {
                [childLevel]: prevLen + 1
            });
            return setSize(Object.keys(nextState).length), nextState;
        }) : setSize(_temp$5), ()=>{
            childLevel !== void 0 ? setChildLayers((state_0)=>{
                const nextState_0 = __spreadValues$v({}, state_0);
                return nextState_0[childLevel] === 1 ? (delete nextState_0[childLevel], setSize(Object.keys(nextState_0).length)) : nextState_0[childLevel] = nextState_0[childLevel] - 1, nextState_0;
            }) : setSize(_temp2$3), parentDispose == null || parentDispose();
        };
    }, $[3] = parentRegisterChild, $[4] = setChildLayers, $[5] = t3) : t3 = $[5];
    const registerChild = t3;
    let t4, t5;
    $[6] !== level || $[7] !== parentRegisterChild ? (t4 = ()=>parentRegisterChild == null ? void 0 : parentRegisterChild(level), t5 = [
        level,
        parentRegisterChild
    ], $[6] = level, $[7] = parentRegisterChild, $[8] = t4, $[9] = t5) : (t4 = $[8], t5 = $[9]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6, t7;
    $[10] !== isTopLayer || $[11] !== level || $[12] !== registerChild || $[13] !== size2 || $[14] !== zIndex ? (t7 = {
        version: 0,
        isTopLayer,
        level,
        registerChild,
        size: size2,
        zIndex
    }, $[10] = isTopLayer, $[11] = level, $[12] = registerChild, $[13] = size2, $[14] = zIndex, $[15] = t7) : t7 = $[15], t6 = t7;
    const value = t6;
    let t8;
    return $[16] !== children || $[17] !== value ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LayerContext.Provider, {
        value,
        children
    }), $[16] = children, $[17] = value, $[18] = t8) : t8 = $[18], t8;
}
function _temp2$3(v_0) {
    return v_0 - 1;
}
function _temp$5(v) {
    return v + 1;
}
LayerProvider.displayName = "LayerProvider";
var __defProp$u = Object.defineProperty, __defProps$u = Object.defineProperties, __getOwnPropDescs$u = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$u = Object.getOwnPropertySymbols, __hasOwnProp$u = Object.prototype.hasOwnProperty, __propIsEnum$u = Object.prototype.propertyIsEnumerable, __defNormalProp$u = (obj, key2, value)=>key2 in obj ? __defProp$u(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$u = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$u.call(b, prop) && __defNormalProp$u(a, prop, b[prop]);
    if (__getOwnPropSymbols$u) for (var prop of __getOwnPropSymbols$u(b))__propIsEnum$u.call(b, prop) && __defNormalProp$u(a, prop, b[prop]);
    return a;
}, __spreadProps$u = (a, b)=>__defProps$u(a, __getOwnPropDescs$u(b)), __objRest$r = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$u.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$u) for (var prop of __getOwnPropSymbols$u(source))exclude.indexOf(prop) < 0 && __propIsEnum$u.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div({
    position: "relative"
}), LayerChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    let children, onActivate, onFocus, restProps, t0;
    $[0] !== props ? (_a = props, { children, onActivate, onFocus, style: t0 } = _a, restProps = __objRest$r(_a, [
        "children",
        "onActivate",
        "onFocus",
        "style"
    ]), $[0] = props, $[1] = children, $[2] = onActivate, $[3] = onFocus, $[4] = restProps, $[5] = t0) : (children = $[1], onActivate = $[2], onFocus = $[3], restProps = $[4], t0 = $[5]);
    const style = t0 === void 0 ? EMPTY_RECORD : t0, { zIndex, isTopLayer } = useLayer(), lastFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), isTopLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isTopLayer);
    let t1;
    $[6] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>ref.current, $[6] = t1) : t1 = $[6], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t1);
    let t2, t3;
    $[7] !== isTopLayer || $[8] !== onActivate ? (t2 = ()=>{
        isTopLayerRef.current !== isTopLayer && isTopLayer && (onActivate == null || onActivate({
            activeElement: lastFocusedRef.current
        })), isTopLayerRef.current = isTopLayer;
    }, t3 = [
        isTopLayer,
        onActivate
    ], $[7] = isTopLayer, $[8] = onActivate, $[9] = t2, $[10] = t3) : (t2 = $[9], t3 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[11] !== isTopLayer || $[12] !== onFocus ? (t4 = (event)=>{
        onFocus == null || onFocus(event);
        const rootElement = ref.current, target = document.activeElement;
        !isTopLayer || !rootElement || !target || isHTMLElement(target) && containsOrEqualsElement(rootElement, target) && (lastFocusedRef.current = target);
    }, $[11] = isTopLayer, $[12] = onFocus, $[13] = t4) : t4 = $[13];
    const handleFocus = t4;
    let t5;
    $[14] !== style || $[15] !== zIndex ? (t5 = __spreadProps$u(__spreadValues$u({}, style), {
        zIndex
    }), $[14] = style, $[15] = zIndex, $[16] = t5) : t5 = $[16];
    let t6;
    return $[17] !== children || $[18] !== handleFocus || $[19] !== restProps || $[20] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$j, __spreadProps$u(__spreadValues$u({}, restProps), {
        "data-ui": "Layer",
        onFocus: handleFocus,
        ref,
        style: t5,
        children
    })), $[17] = children, $[18] = handleFocus, $[19] = restProps, $[20] = t5, $[21] = t6) : t6 = $[21], t6;
}), Layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    let children, restProps, t0;
    $[0] !== props ? (_a = props, { children, zOffset: t0 } = _a, restProps = __objRest$r(_a, [
        "children",
        "zOffset"
    ]), $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0) : (children = $[1], restProps = $[2], t0 = $[3]);
    const zOffset = t0 === void 0 ? 1 : t0;
    let t1;
    $[4] !== children || $[5] !== ref || $[6] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LayerChildren, __spreadProps$u(__spreadValues$u({}, restProps), {
        ref,
        children
    })), $[4] = children, $[5] = ref, $[6] = restProps, $[7] = t1) : t1 = $[7];
    let t2;
    return $[8] !== t1 || $[9] !== zOffset ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LayerProvider, {
        zOffset,
        children: t1
    }), $[8] = t1, $[9] = zOffset, $[10] = t2) : t2 = $[10], t2;
});
Layer.displayName = "ForwardRef(Layer)";
const key = "@sanity/ui/context/portal", elementKey = Symbol.for(`${key}/element`);
globalScope[elementKey] = null;
const defaultContextValue = {
    version: 0,
    boundaryElement: null,
    get element () {
        return typeof document > "u" ? null : (globalScope[elementKey] || (globalScope[elementKey] = document.createElement("div"), globalScope[elementKey].setAttribute("data-portal", ""), document.body.appendChild(globalScope[elementKey])), globalScope[elementKey]);
    }
}, PortalContext = createGlobalScopedContext(key, defaultContextValue);
function usePortal() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PortalContext);
    if (!value) throw new Error("usePortal(): missing context value");
    if (!isRecord(value) || value.version !== 0) throw new Error("usePortal(): the context value is not compatible");
    return value;
}
function Portal(props) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), { children, __unstable_name: name } = props, portal = usePortal(), portalElement = (name ? portal.elements && portal.elements[name] : portal.element) || ((_a = portal.elements) == null ? void 0 : _a.default);
    if (!portalElement) return null;
    let t0;
    return $[0] !== children || $[1] !== portalElement ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, portalElement), $[0] = children, $[1] = portalElement, $[2] = t0) : t0 = $[2], t0;
}
Portal.displayName = "Portal";
function PortalProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), { boundaryElement, children, element, __unstable_elements: elementsProp } = props, elements = useUnique(elementsProp), fallbackElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(emptySubscribe, _temp$4, _temp2$2);
    let t0;
    const t1 = boundaryElement || null, t2 = element || fallbackElement;
    let t3;
    $[0] !== elements || $[1] !== t1 || $[2] !== t2 ? (t3 = {
        version: 0,
        boundaryElement: t1,
        element: t2,
        elements
    }, $[0] = elements, $[1] = t1, $[2] = t2, $[3] = t3) : t3 = $[3], t0 = t3;
    const value = t0;
    let t4;
    return $[4] !== children || $[5] !== value ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalContext.Provider, {
        value,
        children
    }), $[4] = children, $[5] = value, $[6] = t4) : t4 = $[6], t4;
}
function _temp2$2() {
    return null;
}
function _temp$4() {
    return document.body;
}
PortalProvider.displayName = "PortalProvider";
const emptySubscribe = ()=>()=>{};
function useUnique(value) {
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    return _isEqual(valueRef.current, value) || (valueRef.current = value), valueRef.current;
}
function _isEqual(objA, objB) {
    if (!objA || !objB) return objA === objB;
    const keysA = Object.keys(objA), keysB = Object.keys(objB);
    return keysA.length !== keysB.length ? !1 : keysA.every((key2)=>objA[key2] === objB[key2]);
}
const Root$i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`, SrOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { as, children } = props;
    let t0;
    return $[0] !== as || $[1] !== children || $[2] !== ref ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$i, {
        "aria-hidden": !0,
        as,
        "data-ui": "SrOnly",
        ref,
        children
    }), $[0] = as, $[1] = children, $[2] = ref, $[3] = t0) : t0 = $[3], t0;
});
SrOnly.displayName = "ForwardRef(SrOnly)";
var __defProp$t = Object.defineProperty, __defProps$t = Object.defineProperties, __getOwnPropDescs$t = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$t = Object.getOwnPropertySymbols, __hasOwnProp$t = Object.prototype.hasOwnProperty, __propIsEnum$t = Object.prototype.propertyIsEnumerable, __defNormalProp$t = (obj, key2, value)=>key2 in obj ? __defProp$t(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$t = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$t.call(b, prop) && __defNormalProp$t(a, prop, b[prop]);
    if (__getOwnPropSymbols$t) for (var prop of __getOwnPropSymbols$t(b))__propIsEnum$t.call(b, prop) && __defNormalProp$t(a, prop, b[prop]);
    return a;
}, __spreadProps$t = (a, b)=>__defProps$t(a, __getOwnPropDescs$t(b)), __objRest$q = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$t.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$t) for (var prop of __getOwnPropSymbols$t(source))exclude.indexOf(prop) < 0 && __propIsEnum$t.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  position: relative;
`, ItemWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  position: absolute;
  left: 0;
  right: 0;
`, VirtualList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    let getItemKey, onChange, renderItem, restProps, t0, t1, t2;
    $[0] !== props ? (_a = props, { as: t0, gap: t1, getItemKey, items: t2, onChange, renderItem } = _a, restProps = __objRest$q(_a, [
        "as",
        "gap",
        "getItemKey",
        "items",
        "onChange",
        "renderItem"
    ]), $[0] = props, $[1] = getItemKey, $[2] = onChange, $[3] = renderItem, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2) : (getItemKey = $[1], onChange = $[2], renderItem = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7]);
    const as = t0 === void 0 ? "div" : t0, gap = t1 === void 0 ? 0 : t1;
    let t3;
    $[8] !== t2 ? (t3 = t2 === void 0 ? [] : t2, $[8] = t2, $[9] = t3) : t3 = $[9];
    const items = t3, { space } = useTheme_v2(), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [scrollTop, setScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [scrollHeight, setScrollHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [itemHeight, setItemHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    let t4;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[10] = t4) : t4 = $[10], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4);
    let t5;
    $[11] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>{
        if (!wrapperRef.current) return;
        const firstElement = wrapperRef.current.firstChild;
        firstElement instanceof HTMLElement && setItemHeight(firstElement.offsetHeight);
    }, $[11] = t5) : t5 = $[11];
    let t6;
    $[12] !== renderItem ? (t6 = [
        renderItem
    ], $[12] = renderItem, $[13] = t6) : t6 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    $[14] === Symbol.for("react.memo_cache_sentinel") ? (t7 = ()=>{
        if (!ref.current) return;
        let _scrollEl = ref.current.parentNode;
        for(; _scrollEl && !_isScrollable(_scrollEl);)_scrollEl = _scrollEl.parentNode;
        if (_scrollEl) {
            const scrollEl = _scrollEl;
            if (!(scrollEl instanceof HTMLElement)) return;
            const handleScroll = ()=>{
                setScrollTop(scrollEl.scrollTop);
            };
            scrollEl.addEventListener("scroll", handleScroll, {
                passive: !0
            });
            const ro = new _ResizeObserver((entries)=>{
                setScrollHeight(entries[0].contentRect.height);
            });
            return ro.observe(scrollEl), handleScroll(), ()=>{
                scrollEl.removeEventListener("scroll", handleScroll), ro.unobserve(scrollEl), ro.disconnect();
            };
        }
        const handleScroll_0 = ()=>{
            setScrollTop(window.scrollY);
        }, handleResize = ()=>{
            setScrollHeight(window.innerHeight);
        };
        return window.addEventListener("scroll", handleScroll_0, {
            passive: !0
        }), window.addEventListener("resize", handleResize), setScrollHeight(window.innerHeight), handleScroll_0(), ()=>{
            window.removeEventListener("scroll", handleScroll_0), window.removeEventListener("resize", handleResize);
        };
    }, t8 = [], $[14] = t7, $[15] = t8) : (t7 = $[14], t8 = $[15]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const len = items.length, height = itemHeight ? len * (itemHeight + space[gap]) - space[gap] : 0, fromIndex = height ? Math.max(Math.floor(scrollTop / height * len) - 2, 0) : 0, toIndex = height ? Math.ceil((scrollTop + scrollHeight) / height * len) + 1 : 0;
    let t10, t9;
    $[16] !== fromIndex || $[17] !== gap || $[18] !== itemHeight || $[19] !== onChange || $[20] !== scrollHeight || $[21] !== scrollTop || $[22] !== space || $[23] !== toIndex ? (t9 = ()=>{
        onChange && onChange({
            fromIndex,
            gap: space[gap],
            itemHeight,
            scrollHeight,
            scrollTop,
            toIndex
        });
    }, t10 = [
        fromIndex,
        gap,
        itemHeight,
        onChange,
        scrollHeight,
        scrollTop,
        space,
        toIndex
    ], $[16] = fromIndex, $[17] = gap, $[18] = itemHeight, $[19] = onChange, $[20] = scrollHeight, $[21] = scrollTop, $[22] = space, $[23] = toIndex, $[24] = t10, $[25] = t9) : (t10 = $[24], t9 = $[25]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    bb0: {
        if (!renderItem || items.length === 0) {
            t11 = null;
            break bb0;
        }
        if (itemHeight === -1) {
            const t123 = items[0];
            let t132;
            $[26] !== renderItem || $[27] !== t123 ? (t132 = renderItem(t123), $[26] = renderItem, $[27] = t123, $[28] = t132) : t132 = $[28];
            let t142;
            $[29] !== t132 ? (t142 = [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ItemWrapper, {
                    children: t132
                }, 0)
            ], $[29] = t132, $[30] = t142) : t142 = $[30], t11 = t142;
            break bb0;
        }
        let t122;
        if ($[31] !== fromIndex || $[32] !== gap || $[33] !== getItemKey || $[34] !== itemHeight || $[35] !== items || $[36] !== renderItem || $[37] !== space || $[38] !== toIndex) {
            let t132;
            $[40] !== fromIndex || $[41] !== gap || $[42] !== getItemKey || $[43] !== itemHeight || $[44] !== renderItem || $[45] !== space ? (t132 = (item, _itemIndex)=>{
                const itemIndex = fromIndex + _itemIndex, node = renderItem(item), key2 = getItemKey ? getItemKey(item, itemIndex) : itemIndex;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ItemWrapper, {
                    style: {
                        top: itemIndex * (itemHeight + space[gap])
                    },
                    children: node
                }, key2);
            }, $[40] = fromIndex, $[41] = gap, $[42] = getItemKey, $[43] = itemHeight, $[44] = renderItem, $[45] = space, $[46] = t132) : t132 = $[46], t122 = items.slice(fromIndex, toIndex).map(t132), $[31] = fromIndex, $[32] = gap, $[33] = getItemKey, $[34] = itemHeight, $[35] = items, $[36] = renderItem, $[37] = space, $[38] = toIndex, $[39] = t122;
        } else t122 = $[39];
        t11 = t122;
    }
    const children = t11;
    let t12, t13;
    $[47] !== height ? (t13 = {
        height
    }, $[47] = height, $[48] = t13) : t13 = $[48], t12 = t13;
    const wrapperStyle = t12;
    let t14;
    $[49] !== children || $[50] !== wrapperStyle ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: wrapperRef,
        style: wrapperStyle,
        children
    }), $[49] = children, $[50] = wrapperStyle, $[51] = t14) : t14 = $[51];
    let t15;
    return $[52] !== as || $[53] !== restProps || $[54] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$h, __spreadProps$t(__spreadValues$t({
        as,
        "data-ui": "VirtualList"
    }, restProps), {
        ref,
        children: t14
    })), $[52] = as, $[53] = restProps, $[54] = t14, $[55] = t15) : t15 = $[55], t15;
});
VirtualList.displayName = "ForwardRef(VirtualList)";
const DEFAULT_POPOVER_DISTANCE = 4, DEFAULT_POPOVER_PADDING = 4, DEFAULT_POPOVER_ARROW_WIDTH = 19, DEFAULT_POPOVER_ARROW_HEIGHT = 8, DEFAULT_POPOVER_ARROW_RADIUS = 2, DEFAULT_POPOVER_MARGINS = [
    0,
    0,
    0,
    0
], DEFAULT_FALLBACK_PLACEMENTS$1 = {
    top: [
        "bottom",
        "left",
        "right"
    ],
    "top-start": [
        "bottom-start",
        "left-start",
        "right-start"
    ],
    "top-end": [
        "bottom-end",
        "left-end",
        "right-end"
    ],
    bottom: [
        "top",
        "left",
        "right"
    ],
    "bottom-start": [
        "top-start",
        "left-start",
        "right-start"
    ],
    "bottom-end": [
        "top-end",
        "left-end",
        "right-end"
    ],
    left: [
        "right",
        "top",
        "bottom"
    ],
    "left-start": [
        "right-start",
        "top-start",
        "bottom-start"
    ],
    "left-end": [
        "right-end",
        "top-end",
        "bottom-end"
    ],
    right: [
        "left",
        "top",
        "bottom"
    ],
    "right-start": [
        "left-start",
        "top-start",
        "bottom-start"
    ],
    "right-end": [
        "left-end",
        "top-end",
        "bottom-end"
    ]
};
function size(options) {
    const { apply, margins, padding = 0 } = options;
    return {
        name: "@sanity/ui/size",
        async fn (args) {
            const { elements, placement, platform, rects } = args, { floating, reference } = rects, overflow = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$12$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(args, {
                altBoundary: !0,
                boundary: options.boundaryElement || void 0,
                elementContext: "floating",
                padding,
                rootBoundary: "viewport"
            });
            let maxWidth = 1 / 0, maxHeight = 1 / 0;
            const floatingW = floating.width, floatingH = floating.height;
            placement.includes("top") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.top), placement.includes("right") && (maxWidth = floatingW - overflow.right, maxHeight = floatingH - (overflow.top + overflow.bottom)), placement.includes("bottom") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.bottom), placement.includes("left") && (maxWidth = floatingW - overflow.left, maxHeight = floatingH - (overflow.top + overflow.bottom)), apply({
                availableWidth: maxWidth - margins[1] - margins[3],
                availableHeight: maxHeight - margins[0] - margins[2],
                elements,
                referenceWidth: reference.width - margins[1] - margins[3]
            });
            const nextDimensions = await platform.getDimensions(elements.floating), targetH = nextDimensions.height, targetW = nextDimensions.width;
            return floatingW !== targetW || floatingH !== targetH ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
}
function calcCurrentWidth(params) {
    const { container, mediaIndex, width } = params, w = width[mediaIndex], currentWidth = w === void 0 ? width[width.length - 1] : w;
    return typeof currentWidth == "number" ? container[currentWidth] : void 0;
}
function calcMaxWidth(params) {
    const { boundaryWidth, currentWidth } = params;
    if (!(currentWidth === void 0 && boundaryWidth === void 0)) return Math.min(currentWidth != null ? currentWidth : 1 / 0, (boundaryWidth || 1 / 0) - DEFAULT_POPOVER_PADDING * 2);
}
var __defProp$s = Object.defineProperty, __defProps$s = Object.defineProperties, __getOwnPropDescs$s = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$s = Object.getOwnPropertySymbols, __hasOwnProp$s = Object.prototype.hasOwnProperty, __propIsEnum$s = Object.prototype.propertyIsEnumerable, __defNormalProp$s = (obj, key2, value)=>key2 in obj ? __defProp$s(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$s = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$s.call(b, prop) && __defNormalProp$s(a, prop, b[prop]);
    if (__getOwnPropSymbols$s) for (var prop of __getOwnPropSymbols$s(b))__propIsEnum$s.call(b, prop) && __defNormalProp$s(a, prop, b[prop]);
    return a;
}, __spreadProps$s = (a, b)=>__defProps$s(a, __getOwnPropDescs$s(b)), __objRest$p = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$s.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$s) for (var prop of __getOwnPropSymbols$s(source))exclude.indexOf(prop) < 0 && __propIsEnum$s.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const MotionCard$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(Card))`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
  & > * {
    opacity: var(${POPOVER_MOTION_CONTENT_OPACITY_PROPERTY}, 1);
    will-change: opacity;
  }
`, PopoverCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    let animate, arrow2, arrowRef, arrowX, arrowY, children, marginsProp, originX, originY, overflow, padding, placement, radius, restProps, scheme, shadow, strategy, style, tone, width, xProp, yProp;
    $[0] !== props ? (_a = props, { __unstable_margins: marginsProp, animate, arrow: arrow2, arrowRef, arrowX, arrowY, children, padding, placement, originX, originY, overflow, radius, scheme, shadow, strategy, style, tone, width, x: xProp, y: yProp } = _a, restProps = __objRest$p(_a, [
        "__unstable_margins",
        "animate",
        "arrow",
        "arrowRef",
        "arrowX",
        "arrowY",
        "children",
        "padding",
        "placement",
        "originX",
        "originY",
        "overflow",
        "radius",
        "scheme",
        "shadow",
        "strategy",
        "style",
        "tone",
        "width",
        "x",
        "y"
    ]), $[0] = props, $[1] = animate, $[2] = arrow2, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = marginsProp, $[8] = originX, $[9] = originY, $[10] = overflow, $[11] = padding, $[12] = placement, $[13] = radius, $[14] = restProps, $[15] = scheme, $[16] = shadow, $[17] = strategy, $[18] = style, $[19] = tone, $[20] = width, $[21] = xProp, $[22] = yProp) : (animate = $[1], arrow2 = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], marginsProp = $[7], originX = $[8], originY = $[9], overflow = $[10], padding = $[11], placement = $[12], radius = $[13], restProps = $[14], scheme = $[15], shadow = $[16], strategy = $[17], style = $[18], tone = $[19], width = $[20], xProp = $[21], yProp = $[22]);
    const { zIndex } = useLayer();
    let t0;
    t0 = marginsProp || DEFAULT_POPOVER_MARGINS;
    const margins = t0, x = (xProp != null ? xProp : 0) + margins[3], y = (yProp != null ? yProp : 0) + margins[0];
    let t1;
    const t2 = animate ? "transform" : void 0;
    let t3;
    $[23] !== originX || $[24] !== originY || $[25] !== strategy || $[26] !== style || $[27] !== t2 || $[28] !== width || $[29] !== x || $[30] !== y || $[31] !== zIndex ? (t3 = __spreadValues$s({
        left: x,
        originX,
        originY,
        position: strategy,
        top: y,
        width,
        zIndex,
        willChange: t2
    }, style), $[23] = originX, $[24] = originY, $[25] = strategy, $[26] = style, $[27] = t2, $[28] = width, $[29] = x, $[30] = y, $[31] = zIndex, $[32] = t3) : t3 = $[32], t1 = t3;
    const rootStyle2 = t1;
    let t4;
    const t5 = arrowX !== null ? arrowX : void 0, t6 = arrowY !== null ? arrowY : void 0;
    let t7;
    $[33] !== t5 || $[34] !== t6 ? (t7 = {
        left: t5,
        top: t6,
        right: void 0,
        bottom: void 0
    }, $[33] = t5, $[34] = t6, $[35] = t7) : t7 = $[35], t4 = t7;
    const arrowStyle = t4, t8 = restProps;
    let t9;
    $[36] !== animate ? (t9 = animate ? POPOVER_MOTION_PROPS : {}, $[36] = animate, $[37] = t9) : t9 = $[37];
    let t10;
    $[38] !== children || $[39] !== padding ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Flex, {
        direction: "column",
        flex: 1,
        padding,
        children
    }), $[38] = children, $[39] = padding, $[40] = t10) : t10 = $[40];
    let t11;
    $[41] !== overflow || $[42] !== t10 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Flex, {
        "data-ui": "Popover__wrapper",
        direction: "column",
        flex: 1,
        overflow,
        children: t10
    }), $[41] = overflow, $[42] = t10, $[43] = t11) : t11 = $[43];
    let t12;
    $[44] !== arrow2 || $[45] !== arrowRef || $[46] !== arrowStyle ? (t12 = arrow2 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Arrow, {
        ref: arrowRef,
        style: arrowStyle,
        width: DEFAULT_POPOVER_ARROW_WIDTH,
        height: DEFAULT_POPOVER_ARROW_HEIGHT,
        radius: DEFAULT_POPOVER_ARROW_RADIUS
    }), $[44] = arrow2, $[45] = arrowRef, $[46] = arrowStyle, $[47] = t12) : t12 = $[47];
    let t13;
    return $[48] !== placement || $[49] !== radius || $[50] !== ref || $[51] !== rootStyle2 || $[52] !== scheme || $[53] !== shadow || $[54] !== t11 || $[55] !== t12 || $[56] !== t8 || $[57] !== t9 || $[58] !== tone ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(MotionCard$1, __spreadProps$s(__spreadValues$s(__spreadProps$s(__spreadValues$s({
        "data-ui": "Popover"
    }, t8), {
        "data-placement": placement,
        radius,
        ref,
        scheme,
        shadow,
        sizing: "border",
        style: rootStyle2,
        tone
    }), t9), {
        children: [
            t11,
            t12
        ]
    })), $[48] = placement, $[49] = radius, $[50] = ref, $[51] = rootStyle2, $[52] = scheme, $[53] = shadow, $[54] = t11, $[55] = t12, $[56] = t8, $[57] = t9, $[58] = tone, $[59] = t13) : t13 = $[59], t13;
}));
PopoverCard.displayName = "Memo(ForwardRef(PopoverCard))";
var __defProp$r = Object.defineProperty, __defProps$r = Object.defineProperties, __getOwnPropDescs$r = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$r = Object.getOwnPropertySymbols, __hasOwnProp$r = Object.prototype.hasOwnProperty, __propIsEnum$r = Object.prototype.propertyIsEnumerable, __defNormalProp$r = (obj, key2, value)=>key2 in obj ? __defProp$r(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$r = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$r.call(b, prop) && __defNormalProp$r(a, prop, b[prop]);
    if (__getOwnPropSymbols$r) for (var prop of __getOwnPropSymbols$r(b))__propIsEnum$r.call(b, prop) && __defNormalProp$r(a, prop, b[prop]);
    return a;
}, __spreadProps$r = (a, b)=>__defProps$r(a, __getOwnPropDescs$r(b)), __objRest$o = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$r.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$r) for (var prop of __getOwnPropSymbols$r(source))exclude.indexOf(prop) < 0 && __propIsEnum$r.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Popover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a, _b, _c, _d, _f, _g, _h, _i, _j, _k;
    const { container, layer } = useTheme_v2(), boundaryElementContext = useBoundaryElement(), _e = props, { __unstable_margins: margins = DEFAULT_POPOVER_MARGINS, animate: _animate = !1, arrow: arrowProp = !1, boundaryElement = boundaryElementContext.element, children: childProp, constrainSize = !1, content, disabled, fallbackPlacements = (_b = props.fallbackPlacements) != null ? _b : DEFAULT_FALLBACK_PLACEMENTS$1[(_a = props.placement) != null ? _a : "bottom"], matchReferenceWidth, floatingBoundary = (_c = props.boundaryElement) != null ? _c : boundaryElementContext.element, onActivate, open, overflow = "hidden", padding: paddingProp, placement: placementProp = "bottom", portal, preventOverflow = !0, radius: radiusProp = 3, referenceBoundary = (_d = props.boundaryElement) != null ? _d : boundaryElementContext.element, referenceElement, scheme, shadow: shadowProp = 3, tone = "inherit", width: widthProp = "auto", zOffset: zOffsetProp = layer.popover.zOffset, updateRef } = _e, restProps = __objRest$o(_e, [
        "__unstable_margins",
        "animate",
        "arrow",
        "boundaryElement",
        "children",
        "constrainSize",
        "content",
        "disabled",
        "fallbackPlacements",
        "matchReferenceWidth",
        "floatingBoundary",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        "onActivate",
        "open",
        "overflow",
        "padding",
        "placement",
        "portal",
        "preventOverflow",
        "radius",
        "referenceBoundary",
        "referenceElement",
        "scheme",
        "shadow",
        "tone",
        "width",
        "zOffset",
        "updateRef"
    ]), animate = usePrefersReducedMotion() ? !1 : _animate, boundarySize = (_f = useElementSize(boundaryElement)) == null ? void 0 : _f.border, padding = useArrayProp(paddingProp), radius = useArrayProp(radiusProp), shadow = useArrayProp(shadowProp), widthArrayProp = useArrayProp(widthProp), zOffset = useArrayProp(zOffsetProp), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), rootBoundary = "viewport";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
        "Popover.useImperativeHandle": ()=>ref.current
    }["Popover.useImperativeHandle"]);
    const mediaIndex = useMediaIndex(), boundaryWidth = constrainSize || preventOverflow ? boundarySize == null ? void 0 : boundarySize.width : void 0, width = calcCurrentWidth({
        container,
        mediaIndex,
        width: widthArrayProp
    }), widthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(width);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popover.useEffect": ()=>{
            widthRef.current = width;
        }
    }["Popover.useEffect"], [
        width
    ]);
    const maxWidth = calcMaxWidth({
        boundaryWidth,
        currentWidth: width
    }), maxWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(maxWidth);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popover.useEffect": ()=>{
            maxWidthRef.current = maxWidth;
        }
    }["Popover.useEffect"], [
        maxWidth
    ]);
    const referenceWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popover.useEffect": ()=>{
            const floatingElement = ref.current;
            if (!open || !floatingElement) return;
            const referenceWidth = referenceWidthRef.current;
            matchReferenceWidth ? referenceWidth !== void 0 && (floatingElement.style.width = `${referenceWidth}px`) : width !== void 0 && (floatingElement.style.width = `${width}px`), typeof maxWidth == "number" && (floatingElement.style.maxWidth = `${maxWidth}px`);
        }
    }["Popover.useEffect"], [
        width,
        matchReferenceWidth,
        maxWidth,
        open
    ]);
    const middleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popover.useMemo[middleware]": ()=>{
            const ret = [];
            return (constrainSize || preventOverflow) && ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                boundary: floatingBoundary || void 0,
                fallbackPlacements,
                padding: DEFAULT_POPOVER_PADDING,
                rootBoundary
            })), ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: DEFAULT_POPOVER_DISTANCE
            })), (constrainSize || matchReferenceWidth) && ret.push(size({
                apply ({ availableWidth, availableHeight, elements, referenceWidth: referenceWidth_0 }) {
                    referenceWidthRef.current = referenceWidth_0;
                    const _currentWidth = widthRef.current, _maxWidth = maxWidthRef.current;
                    matchReferenceWidth ? elements.floating.style.width = `${referenceWidth_0}px` : _currentWidth !== void 0 && (elements.floating.style.width = `${_currentWidth}px`), constrainSize && (elements.floating.style.maxWidth = `${Math.min(availableWidth, _maxWidth != null ? _maxWidth : 1 / 0)}px`, elements.floating.style.maxHeight = `${availableHeight}px`);
                },
                boundaryElement: floatingBoundary || void 0,
                constrainSize,
                margins,
                matchReferenceWidth,
                padding: DEFAULT_POPOVER_PADDING
            })), preventOverflow && ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                boundary: floatingBoundary || void 0,
                rootBoundary,
                padding: DEFAULT_POPOVER_PADDING
            })), arrowProp && ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrowRef,
                padding: DEFAULT_POPOVER_PADDING
            })), animate && ret.push(origin), ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
                boundary: referenceBoundary || void 0,
                padding: DEFAULT_POPOVER_PADDING,
                strategy: "referenceHidden"
            })), ret;
        }
    }["Popover.useMemo[middleware]"], [
        animate,
        arrowProp,
        constrainSize,
        fallbackPlacements,
        floatingBoundary,
        margins,
        matchReferenceWidth,
        preventOverflow,
        referenceBoundary
    ]), { x, y, middlewareData, placement, refs, strategy, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        middleware,
        placement: placementProp,
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$12$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"],
        elements: referenceElement ? {
            reference: referenceElement
        } : void 0
    }), referenceHidden = (_g = middlewareData.hide) == null ? void 0 : _g.referenceHidden, arrowX = (_h = middlewareData.arrow) == null ? void 0 : _h.x, arrowY = (_i = middlewareData.arrow) == null ? void 0 : _i.y, originX = (_j = middlewareData["@sanity/ui/origin"]) == null ? void 0 : _j.originX, originY = (_k = middlewareData["@sanity/ui/origin"]) == null ? void 0 : _k.originY, setArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Popover.useCallback[setArrow]": (arrowEl)=>{
            arrowRef.current = arrowEl;
        }
    }["Popover.useCallback[setArrow]"], []), setFloating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Popover.useCallback[setFloating]": (node)=>{
            ref.current = node, refs.setFloating(node);
        }
    }["Popover.useCallback[setFloating]"], [
        refs
    ]), setReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Popover.useCallback[setReference]": (node_0)=>{
            refs.setReference(node_0);
            const childRef = getElementRef(childProp);
            typeof childRef == "function" ? childRef(node_0) : childRef && (childRef.current = node_0);
        }
    }["Popover.useCallback[setReference]"], [
        childProp,
        refs
    ]), child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popover.useMemo[child]": ()=>referenceElement ? childProp : childProp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(childProp, {
                ref: setReference
            }) : null
    }["Popover.useMemo[child]"], [
        childProp,
        referenceElement,
        setReference
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popover.useEffect": ()=>{
            updateRef && (typeof updateRef == "function" ? updateRef(update) : updateRef && (updateRef.current = update));
        }
    }["Popover.useEffect"], [
        update,
        updateRef
    ]), disabled) return childProp || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {});
    const popover = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LayerProvider, {
        zOffset,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverCard, __spreadProps$r(__spreadValues$r({}, restProps), {
            __unstable_margins: margins,
            animate,
            arrow: arrowProp,
            arrowRef: setArrow,
            arrowX,
            arrowY,
            hidden: referenceHidden,
            overflow,
            padding,
            placement,
            radius,
            ref: setFloating,
            scheme,
            shadow,
            originX,
            originY,
            strategy,
            tone,
            width: matchReferenceWidth ? referenceWidthRef.current : width,
            x,
            y,
            children: content
        }))
    }), children = open && (portal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Portal, {
        __unstable_name: typeof portal == "string" ? portal : void 0,
        children: popover
    }) : popover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            animate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children
            }) : children,
            child
        ]
    });
}));
Popover.displayName = "Memo(ForwardRef(Popover))";
function getElementRef(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    return mayWarn ? element.ref : (getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning, mayWarn ? element.props.ref : element.props.ref || element.ref);
}
function radioBaseStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `;
}
function inputElementStyle(props) {
    const { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), dist = (input.radio.size - input.radio.markSize) / 2;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${rem(input.radio.size / 2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${rem(input.radio.size)};
      width: ${rem(input.radio.size)};
      border-radius: ${rem(input.radio.size / 2)};
      background: ${color.input.default.enabled.bg};
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};

      &::after {
        content: '';
        position: absolute;
        top: ${rem(dist)};
        left: ${rem(dist)};
        height: ${rem(input.radio.markSize)};
        width: ${rem(input.radio.markSize)};
        border-radius: ${rem(input.radio.markSize / 2)};
        background: ${color.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${focusRingStyle({
        border: {
            width: input.border.width,
            color: color.input.default.enabled.border
        },
        focusRing: input.radio.focusRing
    })};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${color.input.invalid.enabled.border};
      box-shadow: ${focusRingBorderStyle({
        width: input.border.width,
        color: color.input.invalid.enabled.muted.bg
    })};
      &::after {
        background: ${color.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${color.input.default.readOnly.border};
      background: ${color.input.default.readOnly.bg};

      &::after {
        background: ${color.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${color.input.default.disabled.border};
      background: ${color.input.default.disabled.bg};

      &::after {
        background: ${color.input.default.disabled.border};
      }
    }
  `;
}
var __defProp$q = Object.defineProperty, __defProps$q = Object.defineProperties, __getOwnPropDescs$q = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$q = Object.getOwnPropertySymbols, __hasOwnProp$q = Object.prototype.hasOwnProperty, __propIsEnum$q = Object.prototype.propertyIsEnumerable, __defNormalProp$q = (obj, key2, value)=>key2 in obj ? __defProp$q(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$q = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$q.call(b, prop) && __defNormalProp$q(a, prop, b[prop]);
    if (__getOwnPropSymbols$q) for (var prop of __getOwnPropSymbols$q(b))__propIsEnum$q.call(b, prop) && __defNormalProp$q(a, prop, b[prop]);
    return a;
}, __spreadProps$q = (a, b)=>__defProps$q(a, __getOwnPropDescs$q(b)), __objRest$n = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$q.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$q) for (var prop of __getOwnPropSymbols$q(source))exclude.indexOf(prop) < 0 && __propIsEnum$q.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(radioBaseStyle), Input$4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].input(inputElementStyle), Radio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    let className, customValidity, disabled, readOnly, restProps, style;
    $[0] !== props ? (_a = props, { className, disabled, style, customValidity, readOnly } = _a, restProps = __objRest$n(_a, [
        "className",
        "disabled",
        "style",
        "customValidity",
        "readOnly"
    ]), $[0] = props, $[1] = className, $[2] = customValidity, $[3] = disabled, $[4] = readOnly, $[5] = restProps, $[6] = style) : (className = $[1], customValidity = $[2], disabled = $[3], readOnly = $[4], restProps = $[5], style = $[6]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    $[7] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[7] = t0) : t0 = $[7], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0), useCustomValidity(ref, customValidity);
    const t1 = !disabled && readOnly ? "" : void 0, t2 = customValidity ? "" : void 0, t3 = disabled || readOnly;
    let t4;
    $[8] !== readOnly || $[9] !== restProps || $[10] !== t1 || $[11] !== t2 || $[12] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input$4, __spreadProps$q(__spreadValues$q({
        "data-read-only": t1,
        "data-error": t2
    }, restProps), {
        disabled: t3,
        readOnly,
        ref,
        type: "radio"
    })), $[8] = readOnly, $[9] = restProps, $[10] = t1, $[11] = t2, $[12] = t3, $[13] = t4) : t4 = $[13];
    let t5;
    $[14] === Symbol.for("react.memo_cache_sentinel") ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {}), $[14] = t5) : t5 = $[14];
    let t6;
    return $[15] !== className || $[16] !== style || $[17] !== t4 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$g, {
        className,
        "data-ui": "Radio",
        style,
        children: [
            t4,
            t5
        ]
    }), $[15] = className, $[16] = style, $[17] = t4, $[18] = t6) : t6 = $[18], t6;
});
Radio.displayName = "ForwardRef(Radio)";
function rootStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `;
}
function inputBaseStyle(props) {
    const { font } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${font.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `;
}
function inputColorStyle(props) {
    const { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    /* enabled */
    background-color: ${color.input.default.enabled.bg};
    color: ${color.input.default.enabled.fg};
    box-shadow: ${focusRingBorderStyle({
        color: color.input.default.enabled.border,
        width: input.border.width
    })};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${color.input.default.hovered.bg};
        color: ${color.input.default.hovered.fg};
        box-shadow: ${focusRingBorderStyle({
        color: color.input.default.hovered.border,
        width: input.border.width
    })};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${focusRingStyle({
        border: {
            width: input.border.width,
            color: color.input.default.enabled.border
        },
        focusRing: input.select.focusRing
    })};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${color.input.default.readOnly.bg};
      color: ${color.input.default.readOnly.fg};
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.readOnly.border,
        width: input.border.width
    })};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${color.input.default.disabled.bg};
      color: ${color.input.default.disabled.fg};
      box-shadow: ${focusRingBorderStyle({
        color: color.input.default.disabled.border,
        width: input.border.width
    })};
    }
  `;
}
function textSize(size2) {
    return {
        fontSize: rem(size2.fontSize),
        lineHeight: rem(size2.lineHeight)
    };
}
function inputTextSizeStyle(props) {
    const { $fontSize } = props, { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, $fontSize, (sizeIndex)=>textSize(font.text.sizes[sizeIndex] || font.text.sizes[2]));
}
function inputStyle() {
    return [
        responsiveRadiusStyle,
        inputBaseStyle,
        inputColorStyle,
        inputTextSizeStyle,
        responsiveInputPaddingIconRightStyle
    ];
}
function iconBoxStyle(props) {
    const { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${color.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${color.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${color.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${color.input.default.readOnly.fg};
    }
  `;
}
const selectStyle = {
    root: rootStyle,
    input: inputStyle,
    iconBox: iconBoxStyle
};
var __defProp$p = Object.defineProperty, __defProps$p = Object.defineProperties, __getOwnPropDescs$p = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$p = Object.getOwnPropertySymbols, __hasOwnProp$p = Object.prototype.hasOwnProperty, __propIsEnum$p = Object.prototype.propertyIsEnumerable, __defNormalProp$p = (obj, key2, value)=>key2 in obj ? __defProp$p(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$p = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$p.call(b, prop) && __defNormalProp$p(a, prop, b[prop]);
    if (__getOwnPropSymbols$p) for (var prop of __getOwnPropSymbols$p(b))__propIsEnum$p.call(b, prop) && __defNormalProp$p(a, prop, b[prop]);
    return a;
}, __spreadProps$p = (a, b)=>__defProps$p(a, __getOwnPropDescs$p(b)), __objRest$m = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$p.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$p) for (var prop of __getOwnPropSymbols$p(source))exclude.indexOf(prop) < 0 && __propIsEnum$p.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(selectStyle.root), Input$3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].select(selectStyle.input), IconBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(selectStyle.iconBox), Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    let children, customValidity, disabled, readOnly, restProps, t0, t1, t2, t3;
    $[0] !== props ? (_a = props, { children, customValidity, disabled, fontSize: t0, padding: t1, radius: t2, readOnly, space: t3 } = _a, restProps = __objRest$m(_a, [
        "children",
        "customValidity",
        "disabled",
        "fontSize",
        "padding",
        "radius",
        "readOnly",
        "space"
    ]), $[0] = props, $[1] = children, $[2] = customValidity, $[3] = disabled, $[4] = readOnly, $[5] = restProps, $[6] = t0, $[7] = t1, $[8] = t2, $[9] = t3) : (children = $[1], customValidity = $[2], disabled = $[3], readOnly = $[4], restProps = $[5], t0 = $[6], t1 = $[7], t2 = $[8], t3 = $[9]);
    const fontSize2 = t0 === void 0 ? 2 : t0, padding = t1 === void 0 ? 3 : t1, radius = t2 === void 0 ? 2 : t2, space = t3 === void 0 ? 3 : t3, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t4;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ()=>ref.current, $[10] = t4) : t4 = $[10], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t4), useCustomValidity(ref, customValidity);
    const t5 = !disabled && readOnly ? "" : void 0, t6 = useArrayProp(fontSize2), t7 = useArrayProp(padding), t8 = useArrayProp(radius), t9 = useArrayProp(space), t10 = disabled || readOnly;
    let t11;
    $[11] !== children || $[12] !== restProps || $[13] !== t10 || $[14] !== t5 || $[15] !== t6 || $[16] !== t7 || $[17] !== t8 || $[18] !== t9 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input$3, __spreadProps$p(__spreadValues$p({
        "data-read-only": t5,
        "data-ui": "Select"
    }, restProps), {
        $fontSize: t6,
        $padding: t7,
        $radius: t8,
        $space: t9,
        disabled: t10,
        ref,
        children
    })), $[11] = children, $[12] = restProps, $[13] = t10, $[14] = t5, $[15] = t6, $[16] = t7, $[17] = t8, $[18] = t9, $[19] = t11) : t11 = $[19];
    let t12;
    $[20] === Symbol.for("react.memo_cache_sentinel") ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {}), $[20] = t12) : t12 = $[20];
    let t13;
    $[21] !== fontSize2 ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        size: fontSize2,
        children: t12
    }), $[21] = fontSize2, $[22] = t13) : t13 = $[22];
    let t14;
    $[23] !== padding || $[24] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconBox, {
        padding,
        children: t13
    }), $[23] = padding, $[24] = t13, $[25] = t14) : t14 = $[25];
    let t15;
    return $[26] !== t11 || $[27] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$f, {
        "data-ui": "Select",
        children: [
            t11,
            t14
        ]
    }), $[26] = t11, $[27] = t14, $[28] = t15) : t15 = $[28], t15;
});
Select.displayName = "ForwardRef(Select)";
const BASE_STYLE = {
    "&&:not([hidden])": {
        display: "grid"
    },
    '&[data-as="ul"],&[data-as="ol"]': {
        listStyle: "none"
    },
    gridTemplateColumns: "minmax(0, 1fr)",
    gridAutoRows: "min-content"
};
function stackBaseStyle() {
    return BASE_STYLE;
}
function responsiveStackSpaceStyle(props) {
    const { media, space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$space, (spaceIndex)=>({
            gridGap: rem(space[spaceIndex])
        }));
}
var __defProp$o = Object.defineProperty, __defProps$o = Object.defineProperties, __getOwnPropDescs$o = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$o = Object.getOwnPropertySymbols, __hasOwnProp$o = Object.prototype.hasOwnProperty, __propIsEnum$o = Object.prototype.propertyIsEnumerable, __defNormalProp$o = (obj, key2, value)=>key2 in obj ? __defProp$o(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$o = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$o.call(b, prop) && __defNormalProp$o(a, prop, b[prop]);
    if (__getOwnPropSymbols$o) for (var prop of __getOwnPropSymbols$o(b))__propIsEnum$o.call(b, prop) && __defNormalProp$o(a, prop, b[prop]);
    return a;
}, __spreadProps$o = (a, b)=>__defProps$o(a, __getOwnPropDescs$o(b)), __objRest$l = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$o.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$o) for (var prop of __getOwnPropSymbols$o(source))exclude.indexOf(prop) < 0 && __propIsEnum$o.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(stackBaseStyle, responsiveStackSpaceStyle), Stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    let as, restProps, space;
    $[0] !== props ? (_a = props, { as, space } = _a, restProps = __objRest$l(_a, [
        "as",
        "space"
    ]), $[0] = props, $[1] = as, $[2] = restProps, $[3] = space) : (as = $[1], restProps = $[2], space = $[3]);
    const t0 = typeof as == "string" ? as : void 0, t1 = useArrayProp(space);
    let t2;
    return $[4] !== as || $[5] !== ref || $[6] !== restProps || $[7] !== t0 || $[8] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$e, __spreadProps$o(__spreadValues$o({
        "data-as": t0,
        "data-ui": "Stack"
    }, restProps), {
        $space: t1,
        forwardedAs: as,
        ref
    })), $[4] = as, $[5] = ref, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2) : t2 = $[9], t2;
});
Stack.displayName = "ForwardRef(Stack)";
function switchBaseStyles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `;
}
function switchInputStyles() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `;
}
function switchRepresentationStyles(props) {
    const { color, input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    --switch-bg-color: ${color.input.default.enabled.border};
    --switch-fg-color: ${color.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${rem(input.switch.width)};
    height: ${rem(input.switch.height)};
    border-radius: ${rem(input.switch.height / 2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${focusRingStyle({
        focusRing: input.switch.focusRing
    })};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${color.input.default.enabled.fg};
      --switch-fg-color: ${color.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${color.input.default.hovered.border};
        --switch-fg-color: ${color.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${color.input.default.enabled.fg};
        --switch-fg-color: ${color.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${color.input.default.disabled.border};
      --switch-fg-color: ${color.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${color.input.default.readOnly.border};
      --switch-fg-color: ${color.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${color.input.default.readOnly.fg};
      --switch-fg-color: ${color.input.default.readOnly.bg};
    }
  `;
}
function switchTrackStyles(props) {
    const { input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${rem(input.switch.width)};
    height: ${rem(input.switch.height)};
    border-radius: ${rem(input.switch.height / 2)};
  `;
}
function switchThumbStyles(props) {
    const { $indeterminate } = props, { input } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), trackWidth = input.switch.width, trackHeight = input.switch.height, trackPadding = input.switch.padding, size2 = trackHeight - input.switch.padding * 2, checkedOffset = trackWidth - trackPadding * 2 - size2, indeterminateOffset = trackWidth / 2 - size2 / 2 - trackPadding, checked = $indeterminate !== !0 && props.$checked === !0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${rem(trackPadding)};
    top: ${rem(trackPadding)};
    height: ${rem(size2)};
    width: ${rem(size2)};
    border-radius: ${rem(size2 / 2)};
    transition-property: transform;
    transition-duration: ${input.switch.transitionDurationMs}ms;
    transition-timing-function: ${input.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${checked && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      transform: translate3d(${checkedOffset}px, 0, 0);
    `}

    ${$indeterminate && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      transform: translate3d(${indeterminateOffset}px, 0, 0);
    `}
  `;
}
var __defProp$n = Object.defineProperty, __defProps$n = Object.defineProperties, __getOwnPropDescs$n = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$n = Object.getOwnPropertySymbols, __hasOwnProp$n = Object.prototype.hasOwnProperty, __propIsEnum$n = Object.prototype.propertyIsEnumerable, __defNormalProp$n = (obj, key2, value)=>key2 in obj ? __defProp$n(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$n = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$n.call(b, prop) && __defNormalProp$n(a, prop, b[prop]);
    if (__getOwnPropSymbols$n) for (var prop of __getOwnPropSymbols$n(b))__propIsEnum$n.call(b, prop) && __defNormalProp$n(a, prop, b[prop]);
    return a;
}, __spreadProps$n = (a, b)=>__defProps$n(a, __getOwnPropDescs$n(b)), __objRest$k = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$n.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$n) for (var prop of __getOwnPropSymbols$n(source))exclude.indexOf(prop) < 0 && __propIsEnum$n.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(switchBaseStyles), Input$2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].input(switchInputStyles), Representation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(switchRepresentationStyles), Track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(switchTrackStyles), Thumb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(switchThumbStyles), Switch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    let checked, className, disabled, indeterminate, readOnly, restProps, style;
    $[0] !== props ? (_a = props, { checked, className, disabled, indeterminate, readOnly, style } = _a, restProps = __objRest$k(_a, [
        "checked",
        "className",
        "disabled",
        "indeterminate",
        "readOnly",
        "style"
    ]), $[0] = props, $[1] = checked, $[2] = className, $[3] = disabled, $[4] = indeterminate, $[5] = readOnly, $[6] = restProps, $[7] = style) : (checked = $[1], className = $[2], disabled = $[3], indeterminate = $[4], readOnly = $[5], restProps = $[6], style = $[7]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    $[8] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[8] = t0) : t0 = $[8], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0);
    let t1, t2;
    $[9] !== indeterminate ? (t1 = ()=>{
        ref.current && (ref.current.indeterminate = indeterminate || !1);
    }, t2 = [
        indeterminate
    ], $[9] = indeterminate, $[10] = t1, $[11] = t2) : (t1 = $[10], t2 = $[11]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = !disabled && readOnly ? "" : void 0, t4 = indeterminate !== !0 && checked, t5 = disabled || readOnly;
    let t6;
    $[12] !== restProps || $[13] !== t3 || $[14] !== t4 || $[15] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input$2, __spreadProps$n(__spreadValues$n({
        "data-read-only": t3
    }, restProps), {
        checked: t4,
        disabled: t5,
        type: "checkbox",
        ref
    })), $[12] = restProps, $[13] = t3, $[14] = t4, $[15] = t5, $[16] = t6) : t6 = $[16];
    let t7;
    $[17] === Symbol.for("react.memo_cache_sentinel") ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Track, {}), $[17] = t7) : t7 = $[17];
    let t8;
    $[18] !== checked || $[19] !== indeterminate ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Representation, {
        "aria-hidden": !0,
        "data-name": "representation",
        children: [
            t7,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Thumb, {
                $checked: checked,
                $indeterminate: indeterminate
            })
        ]
    }), $[18] = checked, $[19] = indeterminate, $[20] = t8) : t8 = $[20];
    let t9;
    return $[21] !== className || $[22] !== style || $[23] !== t6 || $[24] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$d, {
        className,
        "data-ui": "Switch",
        style,
        children: [
            t6,
            t8
        ]
    }), $[21] = className, $[22] = style, $[23] = t6, $[24] = t8, $[25] = t9) : t9 = $[25], t9;
});
Switch.displayName = "ForwardRef(Switch)";
var __defProp$m = Object.defineProperty, __defProps$m = Object.defineProperties, __getOwnPropDescs$m = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$m = Object.getOwnPropertySymbols, __hasOwnProp$m = Object.prototype.hasOwnProperty, __propIsEnum$m = Object.prototype.propertyIsEnumerable, __defNormalProp$m = (obj, key2, value)=>key2 in obj ? __defProp$m(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$m = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$m.call(b, prop) && __defNormalProp$m(a, prop, b[prop]);
    if (__getOwnPropSymbols$m) for (var prop of __getOwnPropSymbols$m(b))__propIsEnum$m.call(b, prop) && __defNormalProp$m(a, prop, b[prop]);
    return a;
}, __spreadProps$m = (a, b)=>__defProps$m(a, __getOwnPropDescs$m(b)), __objRest$j = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$m.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$m) for (var prop of __getOwnPropSymbols$m(source))exclude.indexOf(prop) < 0 && __propIsEnum$m.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(textInputRootStyle), InputRoot$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`, Input$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].textarea(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle), Presentation$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(responsiveRadiusStyle, textInputRepresentationStyle), TextArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    let __unstable_disableFocusRing, customValidity, restProps, t0, t1, t2, t3, t4, weight;
    $[0] !== props ? (_a = props, { border: t0, customValidity, disabled: t1, fontSize: t2, padding: t3, radius: t4, weight, __unstable_disableFocusRing } = _a, restProps = __objRest$j(_a, [
        "border",
        "customValidity",
        "disabled",
        "fontSize",
        "padding",
        "radius",
        "weight",
        "__unstable_disableFocusRing"
    ]), $[0] = props, $[1] = __unstable_disableFocusRing, $[2] = customValidity, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = t3, $[8] = t4, $[9] = weight) : (__unstable_disableFocusRing = $[1], customValidity = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], t3 = $[7], t4 = $[8], weight = $[9]);
    const border2 = t0 === void 0 ? !0 : t0, disabled = t1 === void 0 ? !1 : t1, fontSize2 = t2 === void 0 ? 2 : t2, padding = t3 === void 0 ? 3 : t3, radius = t4 === void 0 ? 2 : t4, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), rootTheme = useRootTheme();
    let t5;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>ref.current, $[10] = t5) : t5 = $[10], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t5), useCustomValidity(ref, customValidity);
    const t6 = rootTheme.scheme, t7 = rootTheme.tone, t8 = useArrayProp(fontSize2), t9 = useArrayProp(padding), t10 = rootTheme.scheme, t11 = useArrayProp(0);
    let t12;
    $[11] !== disabled || $[12] !== restProps || $[13] !== rootTheme.scheme || $[14] !== rootTheme.tone || $[15] !== t11 || $[16] !== t8 || $[17] !== t9 || $[18] !== weight ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input$1, __spreadProps$m(__spreadValues$m({
        "data-as": "textarea",
        "data-scheme": t6,
        "data-tone": t7
    }, restProps), {
        $fontSize: t8,
        $padding: t9,
        $scheme: t10,
        $space: t11,
        $tone: rootTheme.tone,
        $weight: weight,
        disabled,
        ref
    })), $[11] = disabled, $[12] = restProps, $[13] = rootTheme.scheme, $[14] = rootTheme.tone, $[15] = t11, $[16] = t8, $[17] = t9, $[18] = weight, $[19] = t12) : t12 = $[19];
    const t13 = useArrayProp(radius), t14 = border2 ? "" : void 0;
    let t15;
    $[20] !== __unstable_disableFocusRing || $[21] !== rootTheme.scheme || $[22] !== rootTheme.tone || $[23] !== t13 || $[24] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Presentation$1, {
        $radius: t13,
        $unstableDisableFocusRing: __unstable_disableFocusRing,
        $scheme: rootTheme.scheme,
        $tone: rootTheme.tone,
        "data-border": t14,
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone
    }), $[20] = __unstable_disableFocusRing, $[21] = rootTheme.scheme, $[22] = rootTheme.tone, $[23] = t13, $[24] = t14, $[25] = t15) : t15 = $[25];
    let t16;
    return $[26] !== t12 || $[27] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$c, {
        "data-ui": "TextArea",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(InputRoot$1, {
            children: [
                t12,
                t15
            ]
        })
    }), $[26] = t12, $[27] = t15, $[28] = t16) : t16 = $[28], t16;
});
TextArea.displayName = "ForwardRef(TextArea)";
var __defProp$l = Object.defineProperty, __defProps$l = Object.defineProperties, __getOwnPropDescs$l = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$l = Object.getOwnPropertySymbols, __hasOwnProp$l = Object.prototype.hasOwnProperty, __propIsEnum$l = Object.prototype.propertyIsEnumerable, __defNormalProp$l = (obj, key2, value)=>key2 in obj ? __defProp$l(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$l = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$l.call(b, prop) && __defNormalProp$l(a, prop, b[prop]);
    if (__getOwnPropSymbols$l) for (var prop of __getOwnPropSymbols$l(b))__propIsEnum$l.call(b, prop) && __defNormalProp$l(a, prop, b[prop]);
    return a;
}, __spreadProps$l = (a, b)=>__defProps$l(a, __getOwnPropDescs$l(b)), __objRest$i = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$l.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$l) for (var prop of __getOwnPropSymbols$l(source))exclude.indexOf(prop) < 0 && __propIsEnum$l.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const CLEAR_BUTTON_BOX_STYLE = {
    zIndex: 2
}, Root$b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card).attrs({
    forwardedAs: "span"
})(textInputRootStyle), InputRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`, Prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card).attrs({
    forwardedAs: "span"
})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`, Suffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card).attrs({
    forwardedAs: "span"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`, Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].input(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle), Presentation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(responsiveRadiusStyle, textInputRepresentationStyle), LeftBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  position: absolute;
  top: 0;
  left: 0;
`, RightBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  position: absolute;
  top: 0;
  right: 0;
`, RightCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card)`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`, TextInputClearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Button)({
    "&:not([hidden])": {
        display: "block"
    }
}), TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    let IconComponent, IconRightComponent, __unstable_disableFocusRing, clearButton, customValidity, onClear, prefix, readOnly, restProps, suffix, t0, t1, t2, t3, t4, t5, t6, weight;
    $[0] !== props ? (_a = props, { __unstable_disableFocusRing, border: t0, clearButton, disabled: t1, fontSize: t2, icon: IconComponent, iconRight: IconRightComponent, onClear, padding: t3, prefix, radius: t4, readOnly, space: t5, suffix, customValidity, type: t6, weight } = _a, restProps = __objRest$i(_a, [
        "__unstable_disableFocusRing",
        "border",
        "clearButton",
        "disabled",
        "fontSize",
        "icon",
        "iconRight",
        "onClear",
        "padding",
        "prefix",
        "radius",
        "readOnly",
        "space",
        "suffix",
        "customValidity",
        "type",
        "weight"
    ]), $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = __unstable_disableFocusRing, $[4] = clearButton, $[5] = customValidity, $[6] = onClear, $[7] = prefix, $[8] = readOnly, $[9] = restProps, $[10] = suffix, $[11] = t0, $[12] = t1, $[13] = t2, $[14] = t3, $[15] = t4, $[16] = t5, $[17] = t6, $[18] = weight) : (IconComponent = $[1], IconRightComponent = $[2], __unstable_disableFocusRing = $[3], clearButton = $[4], customValidity = $[5], onClear = $[6], prefix = $[7], readOnly = $[8], restProps = $[9], suffix = $[10], t0 = $[11], t1 = $[12], t2 = $[13], t3 = $[14], t4 = $[15], t5 = $[16], t6 = $[17], weight = $[18]);
    const border2 = t0 === void 0 ? !0 : t0, disabled = t1 === void 0 ? !1 : t1, fontSizeProp = t2 === void 0 ? 2 : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, spaceProp = t5 === void 0 ? 3 : t5, type = t6 === void 0 ? "text" : t6, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), rootTheme = useRootTheme(), fontSize2 = useArrayProp(fontSizeProp), padding = useArrayProp(paddingProp), radius = useArrayProp(radiusProp), space = useArrayProp(spaceProp), $hasClearButton = !!clearButton, $hasIcon = !!IconComponent, $hasIconRight = !!IconRightComponent, $hasSuffix = !!suffix, $hasPrefix = !!prefix;
    let t7;
    $[19] === Symbol.for("react.memo_cache_sentinel") ? (t7 = ()=>ref.current, $[19] = t7) : t7 = $[19], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t7), useCustomValidity(ref, customValidity);
    const handleClearMouseDown = _temp$3;
    let t8;
    $[20] !== onClear ? (t8 = (event_0)=>{
        var _a2;
        event_0.preventDefault(), event_0.stopPropagation(), onClear && onClear(), (_a2 = ref.current) == null || _a2.focus();
    }, $[20] = onClear, $[21] = t8) : t8 = $[21];
    const handleClearClick = t8;
    let t9, t10;
    $[22] !== prefix || $[23] !== radius ? (t10 = prefix && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Prefix, {
        borderTop: !0,
        borderLeft: !0,
        borderBottom: !0,
        radius,
        sizing: "border",
        tone: "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children: prefix
        })
    }), $[22] = prefix, $[23] = radius, $[24] = t10) : t10 = $[24], t9 = t10;
    const prefixNode = t9;
    let t11;
    const t12 = border2 ? "" : void 0;
    let t13;
    $[25] !== IconComponent || $[26] !== fontSize2 || $[27] !== padding ? (t13 = IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LeftBox, {
        padding,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
            size: fontSize2,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
            ]
        })
    }), $[25] = IconComponent, $[26] = fontSize2, $[27] = padding, $[28] = t13) : t13 = $[28];
    let t14;
    $[29] !== $hasClearButton || $[30] !== IconRightComponent || $[31] !== fontSize2 || $[32] !== padding ? (t14 = !$hasClearButton && IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RightBox, {
        padding,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
            size: fontSize2,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
            ]
        })
    }), $[29] = $hasClearButton, $[30] = IconRightComponent, $[31] = fontSize2, $[32] = padding, $[33] = t14) : t14 = $[33];
    let t15;
    $[34] !== $hasPrefix || $[35] !== $hasSuffix || $[36] !== __unstable_disableFocusRing || $[37] !== radius || $[38] !== rootTheme.scheme || $[39] !== rootTheme.tone || $[40] !== t12 || $[41] !== t13 || $[42] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Presentation, {
        $hasPrefix,
        $unstableDisableFocusRing: __unstable_disableFocusRing,
        $hasSuffix,
        $radius: radius,
        $scheme: rootTheme.scheme,
        $tone: rootTheme.tone,
        "data-border": t12,
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone,
        children: [
            t13,
            t14
        ]
    }), $[34] = $hasPrefix, $[35] = $hasSuffix, $[36] = __unstable_disableFocusRing, $[37] = radius, $[38] = rootTheme.scheme, $[39] = rootTheme.tone, $[40] = t12, $[41] = t13, $[42] = t14, $[43] = t15) : t15 = $[43], t11 = t15;
    const presentationNode = t11;
    let t16, t17;
    $[44] !== padding ? (t17 = padding.map(_temp2$1), $[44] = padding, $[45] = t17) : t17 = $[45], t16 = t17;
    const clearButtonBoxPadding = t16;
    let t18, t19;
    $[46] !== padding ? (t19 = padding.map(_temp3), $[46] = padding, $[47] = t19) : t19 = $[47], t18 = t19;
    const clearButtonPadding = t18;
    let t20;
    t20 = typeof clearButton == "object" ? clearButton : EMPTY_RECORD;
    const clearButtonProps = t20;
    let t21, t22;
    $[48] !== clearButton || $[49] !== clearButtonBoxPadding || $[50] !== clearButtonPadding || $[51] !== clearButtonProps || $[52] !== customValidity || $[53] !== disabled || $[54] !== fontSize2 || $[55] !== handleClearClick || $[56] !== radius || $[57] !== readOnly ? (t22 = !disabled && !readOnly && clearButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RightCard, {
        forwardedAs: "span",
        padding: clearButtonBoxPadding,
        style: CLEAR_BUTTON_BOX_STYLE,
        tone: customValidity ? "critical" : "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TextInputClearButton, __spreadProps$l(__spreadValues$l({
            "aria-label": "Clear",
            "data-qa": "clear-button",
            fontSize: fontSize2,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"],
            mode: "bleed",
            padding: clearButtonPadding,
            radius
        }, clearButtonProps), {
            onClick: handleClearClick,
            onMouseDown: handleClearMouseDown
        }))
    }), $[48] = clearButton, $[49] = clearButtonBoxPadding, $[50] = clearButtonPadding, $[51] = clearButtonProps, $[52] = customValidity, $[53] = disabled, $[54] = fontSize2, $[55] = handleClearClick, $[56] = radius, $[57] = readOnly, $[58] = t22) : t22 = $[58], t21 = t22;
    const clearButtonNode = t21;
    let t23, t24;
    $[59] !== radius || $[60] !== suffix ? (t24 = suffix && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Suffix, {
        borderTop: !0,
        borderRight: !0,
        borderBottom: !0,
        radius,
        sizing: "border",
        tone: "inherit",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            children: suffix
        })
    }), $[59] = radius, $[60] = suffix, $[61] = t24) : t24 = $[61], t23 = t24;
    const suffixNode = t23, t25 = $hasIconRight || $hasClearButton;
    let t26;
    $[62] !== $hasIcon || $[63] !== disabled || $[64] !== fontSize2 || $[65] !== padding || $[66] !== readOnly || $[67] !== restProps || $[68] !== rootTheme.scheme || $[69] !== rootTheme.tone || $[70] !== space || $[71] !== t25 || $[72] !== type || $[73] !== weight ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Input, __spreadProps$l(__spreadValues$l({
        "data-as": "input",
        "data-scheme": rootTheme.scheme,
        "data-tone": rootTheme.tone
    }, restProps), {
        $fontSize: fontSize2,
        $iconLeft: $hasIcon,
        $iconRight: t25,
        $padding: padding,
        $scheme: rootTheme.scheme,
        $space: space,
        $tone: rootTheme.tone,
        $weight: weight,
        disabled,
        readOnly,
        ref,
        type
    })), $[62] = $hasIcon, $[63] = disabled, $[64] = fontSize2, $[65] = padding, $[66] = readOnly, $[67] = restProps, $[68] = rootTheme.scheme, $[69] = rootTheme.tone, $[70] = space, $[71] = t25, $[72] = type, $[73] = weight, $[74] = t26) : t26 = $[74];
    let t27;
    $[75] !== clearButtonNode || $[76] !== presentationNode || $[77] !== t26 ? (t27 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(InputRoot, {
        children: [
            t26,
            presentationNode,
            clearButtonNode
        ]
    }), $[75] = clearButtonNode, $[76] = presentationNode, $[77] = t26, $[78] = t27) : t27 = $[78];
    let t28;
    return $[79] !== prefixNode || $[80] !== rootTheme.tone || $[81] !== suffixNode || $[82] !== t27 ? (t28 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$b, {
        "data-ui": "TextInput",
        tone: rootTheme.tone,
        children: [
            prefixNode,
            t27,
            suffixNode
        ]
    }), $[79] = prefixNode, $[80] = rootTheme.tone, $[81] = suffixNode, $[82] = t27, $[83] = t28) : t28 = $[83], t28;
});
TextInput.displayName = "ForwardRef(TextInput)";
function _temp$3(event) {
    event.preventDefault(), event.stopPropagation();
}
function _temp2$1(v) {
    return v === 0 ? 0 : v === 1 || v === 2 ? 1 : v - 2;
}
function _temp3(v_0) {
    return v_0 === 0 || v_0 === 1 ? 0 : v_0 === 2 ? 1 : v_0 - 1;
}
function useDelayedState(initialState) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState), delayedAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = (nextState, delay)=>{
        const action = ()=>{
            setState(nextState);
        };
        if (delayedAction.current && (clearTimeout(delayedAction.current), delayedAction.current = void 0), !delay) return action();
        delayedAction.current = setTimeout(action, delay);
    }, $[0] = t0) : t0 = $[0];
    const onStateChange = t0;
    let t1;
    return $[1] !== state ? (t1 = [
        state,
        onStateChange
    ], $[1] = state, $[2] = t1) : t1 = $[2], t1;
}
const DEFAULT_TOOLTIP_ARROW_WIDTH = 15, DEFAULT_TOOLTIP_ARROW_HEIGHT = 6, DEFAULT_TOOLTIP_ARROW_RADIUS = 2, DEFAULT_TOOLTIP_DISTANCE = 4, DEFAULT_TOOLTIP_PADDING = 4, DEFAULT_FALLBACK_PLACEMENTS = {
    top: [
        "top-end",
        "top-start",
        "bottom",
        "left",
        "right"
    ],
    "top-start": [
        "top",
        "top-end",
        "bottom-start",
        "left-start",
        "right-start"
    ],
    "top-end": [
        "top",
        "top-start",
        "bottom-end",
        "left-end",
        "right-end"
    ],
    bottom: [
        "bottom-end",
        "bottom-start",
        "top",
        "left",
        "right"
    ],
    "bottom-start": [
        "bottom",
        "bottom-end",
        "top-start",
        "left-start",
        "right-start"
    ],
    "bottom-end": [
        "bottom",
        "bottom-start",
        "top-end",
        "left-end",
        "right-end"
    ],
    left: [
        "left-end",
        "left-start",
        "right",
        "top",
        "bottom"
    ],
    "left-start": [
        "left",
        "left-end",
        "right-start",
        "top-start",
        "bottom-start"
    ],
    "left-end": [
        "left",
        "left-start",
        "right-end",
        "top-end",
        "bottom-end"
    ],
    right: [
        "right-end",
        "right-start",
        "left",
        "top",
        "bottom"
    ],
    "right-start": [
        "right",
        "right-end",
        "left-start",
        "top-start",
        "bottom-start"
    ],
    "right-end": [
        "right",
        "right-start",
        "left-end",
        "top-end",
        "bottom-end"
    ]
};
var __defProp$k = Object.defineProperty, __defProps$k = Object.defineProperties, __getOwnPropDescs$k = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$k = Object.getOwnPropertySymbols, __hasOwnProp$k = Object.prototype.hasOwnProperty, __propIsEnum$k = Object.prototype.propertyIsEnumerable, __defNormalProp$k = (obj, key2, value)=>key2 in obj ? __defProp$k(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$k = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$k.call(b, prop) && __defNormalProp$k(a, prop, b[prop]);
    if (__getOwnPropSymbols$k) for (var prop of __getOwnPropSymbols$k(b))__propIsEnum$k.call(b, prop) && __defNormalProp$k(a, prop, b[prop]);
    return a;
}, __spreadProps$k = (a, b)=>__defProps$k(a, __getOwnPropDescs$k(b)), __objRest$h = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$k.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$k) for (var prop of __getOwnPropSymbols$k(source))exclude.indexOf(prop) < 0 && __propIsEnum$k.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const MotionCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(Card))`
  & > * {
    opacity: var(${POPOVER_MOTION_CONTENT_OPACITY_PROPERTY}, 1);
    will-change: opacity;
  }
`, TooltipCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    let animate, arrow2, arrowRef, arrowX, arrowY, children, originX, originY, padding, placement, radius, restProps, scheme, shadow, style;
    $[0] !== props ? (_a = props, { animate, arrow: arrow2, arrowRef, arrowX, arrowY, children, originX, originY, padding, placement, radius, scheme, shadow, style } = _a, restProps = __objRest$h(_a, [
        "animate",
        "arrow",
        "arrowRef",
        "arrowX",
        "arrowY",
        "children",
        "originX",
        "originY",
        "padding",
        "placement",
        "radius",
        "scheme",
        "shadow",
        "style"
    ]), $[0] = props, $[1] = animate, $[2] = arrow2, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = originX, $[8] = originY, $[9] = padding, $[10] = placement, $[11] = radius, $[12] = restProps, $[13] = scheme, $[14] = shadow, $[15] = style) : (animate = $[1], arrow2 = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], originX = $[7], originY = $[8], padding = $[9], placement = $[10], radius = $[11], restProps = $[12], scheme = $[13], shadow = $[14], style = $[15]);
    let t0;
    const t1 = animate ? "transform" : void 0;
    let t2;
    $[16] !== originX || $[17] !== originY || $[18] !== style || $[19] !== t1 ? (t2 = __spreadValues$k({
        originX,
        originY,
        willChange: t1
    }, style), $[16] = originX, $[17] = originY, $[18] = style, $[19] = t1, $[20] = t2) : t2 = $[20], t0 = t2;
    const rootStyle2 = t0;
    let t3;
    const t4 = arrowX !== null ? arrowX : void 0, t5 = arrowY !== null ? arrowY : void 0;
    let t6;
    $[21] !== t4 || $[22] !== t5 ? (t6 = {
        left: t4,
        top: t5,
        right: void 0,
        bottom: void 0
    }, $[21] = t4, $[22] = t5, $[23] = t6) : t6 = $[23], t3 = t6;
    const arrowStyle = t3, t7 = restProps;
    let t8;
    $[24] !== animate ? (t8 = animate ? POPOVER_MOTION_PROPS : {}, $[24] = animate, $[25] = t8) : t8 = $[25];
    let t9;
    $[26] !== arrow2 || $[27] !== arrowRef || $[28] !== arrowStyle ? (t9 = arrow2 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Arrow, {
        ref: arrowRef,
        style: arrowStyle,
        width: DEFAULT_TOOLTIP_ARROW_WIDTH,
        height: DEFAULT_TOOLTIP_ARROW_HEIGHT,
        radius: DEFAULT_TOOLTIP_ARROW_RADIUS
    }), $[26] = arrow2, $[27] = arrowRef, $[28] = arrowStyle, $[29] = t9) : t9 = $[29];
    let t10;
    return $[30] !== children || $[31] !== padding || $[32] !== placement || $[33] !== radius || $[34] !== ref || $[35] !== rootStyle2 || $[36] !== scheme || $[37] !== shadow || $[38] !== t7 || $[39] !== t8 || $[40] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(MotionCard, __spreadProps$k(__spreadValues$k(__spreadProps$k(__spreadValues$k({
        "data-ui": "Tooltip__card"
    }, t7), {
        "data-placement": placement,
        padding,
        radius,
        ref,
        scheme,
        shadow,
        style: rootStyle2
    }), t8), {
        children: [
            children,
            t9
        ]
    })), $[30] = children, $[31] = padding, $[32] = placement, $[33] = radius, $[34] = ref, $[35] = rootStyle2, $[36] = scheme, $[37] = shadow, $[38] = t7, $[39] = t8, $[40] = t9, $[41] = t10) : t10 = $[41], t10;
}));
TooltipCard.displayName = "Memo(ForwardRef(TooltipCard))";
const TooltipDelayGroupContext = createGlobalScopedContext("@sanity/ui/context/tooltipDelayGroup", null);
function useTooltipDelayGroup() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TooltipDelayGroupContext);
}
function TooltipDelayGroupProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10), { children, delay } = props, [isGroupActive, setIsGroupActive] = useDelayedState(!1), [openTooltipId, setOpenTooltipId] = useDelayedState(null), openDelay = typeof delay == "number" ? delay : (delay == null ? void 0 : delay.open) || 0, closeDelay = typeof delay == "number" ? delay : (delay == null ? void 0 : delay.close) || 0;
    let t0;
    const t1 = isGroupActive ? 1 : openDelay;
    let t2;
    $[0] !== closeDelay || $[1] !== isGroupActive || $[2] !== openTooltipId || $[3] !== setIsGroupActive || $[4] !== setOpenTooltipId || $[5] !== t1 ? (t2 = {
        isGroupActive,
        setIsGroupActive,
        openTooltipId,
        setOpenTooltipId,
        openDelay: t1,
        closeDelay
    }, $[0] = closeDelay, $[1] = isGroupActive, $[2] = openTooltipId, $[3] = setIsGroupActive, $[4] = setOpenTooltipId, $[5] = t1, $[6] = t2) : t2 = $[6], t0 = t2;
    const value = t0;
    let t3;
    return $[7] !== children || $[8] !== value ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipDelayGroupContext.Provider, {
        value,
        children
    }), $[7] = children, $[8] = value, $[9] = t3) : t3 = $[9], t3;
}
TooltipDelayGroupProvider.displayName = "TooltipDelayGroupProvider";
var __defProp$j = Object.defineProperty, __defProps$j = Object.defineProperties, __getOwnPropDescs$j = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$j = Object.getOwnPropertySymbols, __hasOwnProp$j = Object.prototype.hasOwnProperty, __propIsEnum$j = Object.prototype.propertyIsEnumerable, __defNormalProp$j = (obj, key2, value)=>key2 in obj ? __defProp$j(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$j = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$j.call(b, prop) && __defNormalProp$j(a, prop, b[prop]);
    if (__getOwnPropSymbols$j) for (var prop of __getOwnPropSymbols$j(b))__propIsEnum$j.call(b, prop) && __defNormalProp$j(a, prop, b[prop]);
    return a;
}, __spreadProps$j = (a, b)=>__defProps$j(a, __getOwnPropDescs$j(b)), __objRest$g = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$j.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$j) for (var prop of __getOwnPropSymbols$j(source))exclude.indexOf(prop) < 0 && __propIsEnum$j.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Layer)`
  pointer-events: none;
`, Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a, _b, _d, _e, _f, _g, _h;
    const boundaryElementContext = useBoundaryElement(), { layer } = useTheme_v2(), _c2 = props, { animate: _animate = !1, arrow: arrowProp = !1, boundaryElement = boundaryElementContext == null ? void 0 : boundaryElementContext.element, children: childProp, content, disabled, fallbackPlacements: fallbackPlacementsProp = (_b = props.fallbackPlacements) != null ? _b : DEFAULT_FALLBACK_PLACEMENTS[(_a = props.placement) != null ? _a : "bottom"], padding = 2, placement: placementProp = "bottom", portal: portalProp, radius = 2, scheme, shadow = 2, zOffset = layer.tooltip.zOffset, delay } = _c2, restProps = __objRest$g(_c2, [
        "animate",
        "arrow",
        "boundaryElement",
        "children",
        "content",
        "disabled",
        "fallbackPlacements",
        "padding",
        "placement",
        "portal",
        "radius",
        "scheme",
        "shadow",
        "zOffset",
        "delay"
    ]), animate = usePrefersReducedMotion() ? !1 : _animate, fallbackPlacements = useArrayProp(fallbackPlacementsProp), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [referenceElement, setReferenceElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), rootBoundary = "viewport", [tooltipMaxWidth, setTooltipMaxWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
        "Tooltip.useImperativeHandle": ()=>ref.current
    }["Tooltip.useImperativeHandle"]);
    const portal = usePortal(), portalElement = typeof portalProp == "string" ? ((_d = portal.elements) == null ? void 0 : _d[portalProp]) || null : portal.element, middleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tooltip.useMemo[middleware]": ()=>{
            const ret = [];
            return ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                boundary: boundaryElement || void 0,
                fallbackPlacements,
                padding: DEFAULT_TOOLTIP_PADDING,
                rootBoundary
            })), ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: DEFAULT_TOOLTIP_DISTANCE
            })), ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                boundary: boundaryElement || void 0,
                rootBoundary,
                padding: DEFAULT_TOOLTIP_PADDING
            })), arrowProp && ret.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrowRef,
                padding: DEFAULT_TOOLTIP_PADDING
            })), animate && ret.push(origin), ret;
        }
    }["Tooltip.useMemo[middleware]"], [
        animate,
        arrowProp,
        boundaryElement,
        fallbackPlacements
    ]), { floatingStyles, placement, middlewareData, refs, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        middleware,
        placement: placementProp,
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$12$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"],
        elements: {
            reference: referenceElement
        }
    }), arrowX = (_e = middlewareData.arrow) == null ? void 0 : _e.x, arrowY = (_f = middlewareData.arrow) == null ? void 0 : _f.y, originX = (_g = middlewareData["@sanity/ui/origin"]) == null ? void 0 : _g.originX, originY = (_h = middlewareData["@sanity/ui/origin"]) == null ? void 0 : _h.originY, tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), [isOpen, setIsOpen] = useDelayedState(!1), delayGroupContext = useTooltipDelayGroup(), showTooltip = isOpen || (delayGroupContext == null ? void 0 : delayGroupContext.openTooltipId) === tooltipId, isInsideGroup = delayGroupContext !== null, openDelayProp = typeof delay == "number" ? delay : (delay == null ? void 0 : delay.open) || 0, closeDelayProp = typeof delay == "number" ? delay : (delay == null ? void 0 : delay.close) || 0, openDelay = isInsideGroup ? delayGroupContext.openDelay : openDelayProp, closeDelay = isInsideGroup ? delayGroupContext.closeDelay : closeDelayProp, handleIsOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleIsOpenChange]": (open, immediate)=>{
            if (isInsideGroup) if (open) {
                const groupedOpenDelay = immediate ? 0 : openDelay;
                delayGroupContext.setIsGroupActive(open, groupedOpenDelay), delayGroupContext.setOpenTooltipId(tooltipId, groupedOpenDelay);
            } else {
                const groupDeactivateDelay = closeDelay > 200 ? closeDelay : 200;
                delayGroupContext.setIsGroupActive(open, groupDeactivateDelay), delayGroupContext.setOpenTooltipId(null, immediate ? 0 : closeDelay);
            }
            else setIsOpen(open, immediate ? 0 : open ? openDelay : closeDelay);
        }
    }["Tooltip.useCallback[handleIsOpenChange]"], [
        isInsideGroup,
        delayGroupContext,
        openDelay,
        tooltipId,
        closeDelay,
        setIsOpen
    ]), handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleBlur]": (e)=>{
            var _a2, _b2;
            handleIsOpenChange(!1), (_b2 = (_a2 = childProp == null ? void 0 : childProp.props) == null ? void 0 : _a2.onBlur) == null || _b2.call(_a2, e);
        }
    }["Tooltip.useCallback[handleBlur]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]), handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleClick]": (e_0)=>{
            var _a2, _b2;
            handleIsOpenChange(!1, !0), (_b2 = childProp == null ? void 0 : (_a2 = childProp.props).onClick) == null || _b2.call(_a2, e_0);
        }
    }["Tooltip.useCallback[handleClick]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]), handleContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleContextMenu]": (e_1)=>{
            var _a2, _b2;
            handleIsOpenChange(!1, !0), (_b2 = childProp == null ? void 0 : (_a2 = childProp.props).onContextMenu) == null || _b2.call(_a2, e_1);
        }
    }["Tooltip.useCallback[handleContextMenu]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]), handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleFocus]": (e_2)=>{
            var _a2, _b2;
            handleIsOpenChange(!0), (_b2 = (_a2 = childProp == null ? void 0 : childProp.props) == null ? void 0 : _a2.onFocus) == null || _b2.call(_a2, e_2);
        }
    }["Tooltip.useCallback[handleFocus]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]), handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleMouseEnter]": (e_3)=>{
            var _a2, _b2;
            handleIsOpenChange(!0), (_b2 = (_a2 = childProp == null ? void 0 : childProp.props) == null ? void 0 : _a2.onMouseEnter) == null || _b2.call(_a2, e_3);
        }
    }["Tooltip.useCallback[handleMouseEnter]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]), handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[handleMouseLeave]": (e_4)=>{
            var _a2, _b2;
            handleIsOpenChange(!1), (_b2 = (_a2 = childProp == null ? void 0 : childProp.props) == null ? void 0 : _a2.onMouseLeave) == null || _b2.call(_a2, e_4);
        }
    }["Tooltip.useCallback[handleMouseLeave]"], [
        childProp == null ? void 0 : childProp.props,
        handleIsOpenChange
    ]);
    useCloseOnMouseLeave({
        handleIsOpenChange,
        referenceElement,
        showTooltip
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            disabled && showTooltip && handleIsOpenChange(!1);
        }
    }["Tooltip.useEffect"], [
        disabled,
        handleIsOpenChange,
        showTooltip
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            !content && showTooltip && handleIsOpenChange(!1);
        }
    }["Tooltip.useEffect"], [
        content,
        handleIsOpenChange,
        showTooltip
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            if (!showTooltip) return;
            function handleWindowKeyDown(event) {
                event.key === "Escape" && handleIsOpenChange(!1, !0);
            }
            return window.addEventListener("keydown", handleWindowKeyDown), ({
                "Tooltip.useEffect": ()=>{
                    window.removeEventListener("keydown", handleWindowKeyDown);
                }
            })["Tooltip.useEffect"];
        }
    }["Tooltip.useEffect"], [
        handleIsOpenChange,
        showTooltip
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Tooltip.useLayoutEffect": ()=>{
            const availableWidths = [
                ...boundaryElement ? [
                    boundaryElement.offsetWidth
                ] : [],
                (portalElement == null ? void 0 : portalElement.offsetWidth) || document.body.offsetWidth
            ];
            setTooltipMaxWidth(Math.min(...availableWidths) - DEFAULT_TOOLTIP_PADDING * 2);
        }
    }["Tooltip.useLayoutEffect"], [
        boundaryElement,
        portalElement
    ]);
    const setArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[setArrow]": (arrowEl)=>{
            arrowRef.current = arrowEl, update();
        }
    }["Tooltip.useCallback[setArrow]"], [
        update
    ]), setFloating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[setFloating]": (node)=>{
            ref.current = node, refs.setFloating(node);
        }
    }["Tooltip.useCallback[setFloating]"], [
        refs
    ]), childRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(childProp == null ? void 0 : childProp.ref, {
        "Tooltip.useImperativeHandle": ()=>childRef.current
    }["Tooltip.useImperativeHandle"]);
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Tooltip.useMemo[child]": ()=>childProp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(childProp, {
                onBlur: handleBlur,
                onFocus: handleFocus,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                onClick: handleClick,
                onContextMenu: handleContextMenu,
                ref: childRef
            }) : null
    }["Tooltip.useMemo[child]"], [
        childProp,
        handleBlur,
        handleClick,
        handleContextMenu,
        handleFocus,
        handleMouseEnter,
        handleMouseLeave
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            if (child) return setReferenceElement(childRef.current), ({
                "Tooltip.useEffect": ()=>setReferenceElement(null)
            })["Tooltip.useEffect"];
        }
    }["Tooltip.useEffect"], [
        child
    ]), !child) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {});
    if (disabled) return child;
    const tooltip = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$a, __spreadProps$j(__spreadValues$j({
        "data-ui": "Tooltip"
    }, restProps), {
        ref: setFloating,
        style: __spreadProps$j(__spreadValues$j({}, floatingStyles), {
            maxWidth: tooltipMaxWidth > 0 ? `${tooltipMaxWidth}px` : void 0
        }),
        zOffset,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipCard, __spreadProps$j(__spreadValues$j({}, restProps), {
            animate,
            arrow: arrowProp,
            arrowRef: setArrow,
            arrowX,
            arrowY,
            originX,
            originY,
            padding,
            placement,
            radius,
            ref: setFloating,
            scheme,
            shadow,
            children: content
        }))
    })), children = showTooltip && (portalProp ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Portal, {
        __unstable_name: typeof portalProp == "string" ? portalProp : void 0,
        children: tooltip
    }) : tooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            animate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children
            }) : children,
            child
        ]
    });
});
Tooltip.displayName = "ForwardRef(Tooltip)";
function useCloseOnMouseLeave(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), { handleIsOpenChange, referenceElement, showTooltip } = t0;
    let t1;
    $[0] !== handleIsOpenChange || $[1] !== referenceElement ? (t1 = (target, teardown)=>{
        referenceElement && (referenceElement === target || target instanceof Node && referenceElement.contains(target) || (handleIsOpenChange(!1), teardown()));
    }, $[0] = handleIsOpenChange, $[1] = referenceElement, $[2] = t1) : t1 = $[2];
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t1);
    let t2, t3;
    $[3] !== onMouseMove || $[4] !== showTooltip ? (t2 = ()=>{
        if (!showTooltip) return;
        const handleMouseMove = (event)=>{
            onMouseMove(event.target, ()=>window.removeEventListener("mousemove", handleMouseMove));
        };
        return window.addEventListener("mousemove", handleMouseMove), ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, t3 = [
        onMouseMove,
        showTooltip
    ], $[3] = onMouseMove, $[4] = showTooltip, $[5] = t2, $[6] = t3) : (t2 = $[5], t3 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
}
const Root$9 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  line-height: 0;
`, ListBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`, rotate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, AnimatedSpinnerIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"])`
  animation: ${rotate} 500ms linear infinite;
`;
function AutocompleteOption(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { children, id, onSelect, selected, value } = props;
    let t0;
    $[0] !== onSelect || $[1] !== value ? (t0 = ()=>{
        setTimeout(()=>{
            onSelect(value);
        }, 0);
    }, $[0] = onSelect, $[1] = value, $[2] = t0) : t0 = $[2];
    const handleClick = t0;
    let t1;
    $[3] !== handleClick ? (t1 = (event)=>{
        event.key === "Enter" && !_isEnterToClickElement(event.currentTarget) && handleClick();
    }, $[3] = handleClick, $[4] = t1) : t1 = $[4];
    const handleKeyDown = t1;
    let t2;
    return $[5] !== children || $[6] !== handleClick || $[7] !== handleKeyDown || $[8] !== id || $[9] !== selected ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
        "aria-selected": selected,
        "data-ui": "AutocompleteOption",
        id,
        role: "option",
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        children
    }), $[5] = children, $[6] = handleClick, $[7] = handleKeyDown, $[8] = id, $[9] = selected, $[10] = t2) : t2 = $[10], t2;
}
var __defProp$i = Object.defineProperty, __defProps$i = Object.defineProperties, __getOwnPropDescs$i = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$i = Object.getOwnPropertySymbols, __hasOwnProp$i = Object.prototype.hasOwnProperty, __propIsEnum$i = Object.prototype.propertyIsEnumerable, __defNormalProp$i = (obj, key2, value)=>key2 in obj ? __defProp$i(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$i = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$i.call(b, prop) && __defNormalProp$i(a, prop, b[prop]);
    if (__getOwnPropSymbols$i) for (var prop of __getOwnPropSymbols$i(b))__propIsEnum$i.call(b, prop) && __defNormalProp$i(a, prop, b[prop]);
    return a;
}, __spreadProps$i = (a, b)=>__defProps$i(a, __getOwnPropDescs$i(b));
function autocompleteReducer(state, msg2) {
    return msg2.type === "input/change" ? __spreadProps$i(__spreadValues$i({}, state), {
        activeValue: null,
        focused: !0,
        query: msg2.query
    }) : msg2.type === "input/focus" ? __spreadProps$i(__spreadValues$i({}, state), {
        focused: !0
    }) : msg2.type === "root/blur" ? __spreadProps$i(__spreadValues$i({}, state), {
        focused: !1,
        query: null
    }) : msg2.type === "root/clear" ? __spreadProps$i(__spreadValues$i({}, state), {
        activeValue: null,
        query: null,
        value: null
    }) : msg2.type === "root/escape" ? __spreadProps$i(__spreadValues$i({}, state), {
        focused: !1,
        query: null
    }) : msg2.type === "root/open" ? __spreadProps$i(__spreadValues$i({}, state), {
        query: state.query || msg2.query
    }) : msg2.type === "root/setActiveValue" ? __spreadProps$i(__spreadValues$i({}, state), {
        activeValue: msg2.value,
        listFocused: msg2.listFocused || state.listFocused
    }) : msg2.type === "root/setListFocused" ? __spreadProps$i(__spreadValues$i({}, state), {
        listFocused: msg2.listFocused
    }) : msg2.type === "value/change" ? __spreadProps$i(__spreadValues$i({}, state), {
        activeValue: msg2.value,
        query: null,
        value: msg2.value
    }) : state;
}
const AUTOCOMPLETE_LISTBOX_IGNORE_KEYS = [
    "Control",
    "Shift",
    "Alt",
    "Enter",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "Meta",
    "Tab",
    "CapsLock"
], AUTOCOMPLETE_POPOVER_PLACEMENT = "bottom-start", AUTOCOMPLETE_POPOVER_FALLBACK_PLACEMENTS = [
    "bottom-start",
    "top-start"
];
var __defProp$h = Object.defineProperty, __defProps$h = Object.defineProperties, __getOwnPropDescs$h = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$h = Object.getOwnPropertySymbols, __hasOwnProp$h = Object.prototype.hasOwnProperty, __propIsEnum$h = Object.prototype.propertyIsEnumerable, __defNormalProp$h = (obj, key2, value)=>key2 in obj ? __defProp$h(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$h = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$h.call(b, prop) && __defNormalProp$h(a, prop, b[prop]);
    if (__getOwnPropSymbols$h) for (var prop of __getOwnPropSymbols$h(b))__propIsEnum$h.call(b, prop) && __defNormalProp$h(a, prop, b[prop]);
    return a;
}, __spreadProps$h = (a, b)=>__defProps$h(a, __getOwnPropDescs$h(b)), __objRest$f = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$h.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$h) for (var prop of __getOwnPropSymbols$h(source))exclude.indexOf(prop) < 0 && __propIsEnum$h.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const DEFAULT_RENDER_VALUE = (value, option)=>option ? option.value : value, DEFAULT_FILTER_OPTION = (query, option)=>option.value.toLowerCase().indexOf(query.toLowerCase()) > -1, InnerAutocomplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    const _a = props, { border: border2 = !0, customValidity, disabled, filterOption: filterOptionProp, fontSize: fontSize2 = 2, icon, id, listBox = EMPTY_RECORD, loading, onBlur, onChange, onFocus, onQueryChange, onSelect, openButton, openOnFocus, options: optionsProp, padding: paddingProp = 3, popover = EMPTY_RECORD, prefix, radius = 2, readOnly, relatedElements, renderOption: renderOptionProp, renderPopover, renderValue = DEFAULT_RENDER_VALUE, suffix, value: valueProp } = _a, restProps = __objRest$f(_a, [
        "border",
        "customValidity",
        "disabled",
        "filterOption",
        "fontSize",
        "icon",
        "id",
        "listBox",
        "loading",
        "onBlur",
        "onChange",
        "onFocus",
        "onQueryChange",
        "onSelect",
        "openButton",
        "openOnFocus",
        "options",
        "padding",
        "popover",
        "prefix",
        "radius",
        "readOnly",
        "relatedElements",
        "renderOption",
        "renderPopover",
        "renderValue",
        "suffix",
        "value"
    ]), [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(autocompleteReducer, {
        activeValue: valueProp || null,
        focused: !1,
        listFocused: !1,
        query: null,
        value: valueProp || null
    }), { activeValue, focused, listFocused, query, value } = state, defaultRenderOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[defaultRenderOption]": ({ value: value_0 })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Card, {
                "data-as": "button",
                padding: paddingProp,
                radius: 2,
                tone: "inherit",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                    size: fontSize2,
                    textOverflow: "ellipsis",
                    children: value_0
                })
            })
    }["InnerAutocomplete.useCallback[defaultRenderOption]"], [
        fontSize2,
        paddingProp
    ]), renderOption = typeof renderOptionProp == "function" ? renderOptionProp : defaultRenderOption, filterOption = typeof filterOptionProp == "function" ? filterOptionProp : DEFAULT_FILTER_OPTION, rootElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), resultsPopoverElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), inputElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), listBoxElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), listFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value), valuePropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(valueProp), popoverMouseWithinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
        "InnerAutocomplete.useImperativeHandle": ()=>inputElementRef.current
    }["InnerAutocomplete.useImperativeHandle"]);
    const listBoxId = `${id}-listbox`, options = Array.isArray(optionsProp) ? optionsProp : EMPTY_ARRAY, padding = useArrayProp(paddingProp), currentOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[currentOption]": ()=>value !== null ? options.find({
                "InnerAutocomplete.useMemo[currentOption]": (o)=>o.value === value
            }["InnerAutocomplete.useMemo[currentOption]"]) : void 0
    }["InnerAutocomplete.useMemo[currentOption]"], [
        options,
        value
    ]), filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[filteredOptions]": ()=>options.filter({
                "InnerAutocomplete.useMemo[filteredOptions]": (option)=>query ? filterOption(query, option) : !0
            }["InnerAutocomplete.useMemo[filteredOptions]"])
    }["InnerAutocomplete.useMemo[filteredOptions]"], [
        filterOption,
        options,
        query
    ]), filteredOptionsLen = filteredOptions.length, activeItemId = activeValue ? `${id}-option-${activeValue}` : void 0, expanded = query !== null && loading || focused && query !== null, handleRootBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleRootBlur]": (event)=>{
            setTimeout({
                "InnerAutocomplete.useCallback[handleRootBlur]": ()=>{
                    if (popoverMouseWithinRef.current) return;
                    const elements = (relatedElements || []).concat(rootElementRef.current ? [
                        rootElementRef.current
                    ] : [], resultsPopoverElementRef.current ? [
                        resultsPopoverElementRef.current
                    ] : []);
                    let focusInside = !1;
                    if (document.activeElement) {
                        for (const e of elements)if (e === document.activeElement || e.contains(document.activeElement)) {
                            focusInside = !0;
                            break;
                        }
                    }
                    focusInside === !1 && (dispatch({
                        type: "root/blur"
                    }), popoverMouseWithinRef.current = !1, onQueryChange && onQueryChange(null), onBlur && onBlur(event));
                }
            }["InnerAutocomplete.useCallback[handleRootBlur]"], 0);
        }
    }["InnerAutocomplete.useCallback[handleRootBlur]"], [
        onBlur,
        onQueryChange,
        relatedElements
    ]), handleRootFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleRootFocus]": (event_0)=>{
            const listBoxElement = listBoxElementRef.current, focusedElement = event_0.target instanceof HTMLElement ? event_0.target : null, listFocused_0 = (listBoxElement == null ? void 0 : listBoxElement.contains(focusedElement)) || !1;
            listFocused_0 !== listFocusedRef.current && (listFocusedRef.current = listFocused_0, dispatch({
                type: "root/setListFocused",
                listFocused: listFocused_0
            }));
        }
    }["InnerAutocomplete.useCallback[handleRootFocus]"], []), handleOptionSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleOptionSelect]": (v)=>{
            var _a2;
            dispatch({
                type: "value/change",
                value: v
            }), popoverMouseWithinRef.current = !1, onSelect && onSelect(v), valueRef.current = v, onChange && onChange(v), onQueryChange && onQueryChange(null), (_a2 = inputElementRef.current) == null || _a2.focus();
        }
    }["InnerAutocomplete.useCallback[handleOptionSelect]"], [
        onChange,
        onSelect,
        onQueryChange
    ]), handleRootKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleRootKeyDown]": (event_1)=>{
            var _a2, _b;
            if (event_1.key === "ArrowDown") {
                if (event_1.preventDefault(), !filteredOptionsLen) return;
                const activeOption = filteredOptions.find({
                    "InnerAutocomplete.useCallback[handleRootKeyDown].activeOption": (o_0)=>o_0.value === activeValue
                }["InnerAutocomplete.useCallback[handleRootKeyDown].activeOption"]), activeIndex = activeOption ? filteredOptions.indexOf(activeOption) : -1, nextActiveOption = filteredOptions[(activeIndex + 1) % filteredOptionsLen];
                nextActiveOption && dispatch({
                    type: "root/setActiveValue",
                    value: nextActiveOption.value,
                    listFocused: !0
                });
                return;
            }
            if (event_1.key === "ArrowUp") {
                if (event_1.preventDefault(), !filteredOptionsLen) return;
                const activeOption_0 = filteredOptions.find({
                    "InnerAutocomplete.useCallback[handleRootKeyDown].activeOption_0": (o_1)=>o_1.value === activeValue
                }["InnerAutocomplete.useCallback[handleRootKeyDown].activeOption_0"]), activeIndex_0 = activeOption_0 ? filteredOptions.indexOf(activeOption_0) : -1, nextActiveOption_0 = filteredOptions[activeIndex_0 === -1 ? filteredOptionsLen - 1 : (filteredOptionsLen + activeIndex_0 - 1) % filteredOptionsLen];
                nextActiveOption_0 && dispatch({
                    type: "root/setActiveValue",
                    value: nextActiveOption_0.value,
                    listFocused: !0
                });
                return;
            }
            if (event_1.key === "Escape") {
                dispatch({
                    type: "root/escape"
                }), popoverMouseWithinRef.current = !1, onQueryChange && onQueryChange(null), (_a2 = inputElementRef.current) == null || _a2.focus();
                return;
            }
            const target = event_1.target, listEl = listBoxElementRef.current;
            if ((listEl === target || listEl != null && listEl.contains(target)) && !AUTOCOMPLETE_LISTBOX_IGNORE_KEYS.includes(event_1.key)) {
                (_b = inputElementRef.current) == null || _b.focus();
                return;
            }
        }
    }["InnerAutocomplete.useCallback[handleRootKeyDown]"], [
        activeValue,
        filteredOptions,
        filteredOptionsLen,
        onQueryChange
    ]), handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleInputChange]": (event_2)=>{
            const nextQuery = event_2.currentTarget.value;
            dispatch({
                type: "input/change",
                query: nextQuery
            }), onQueryChange && onQueryChange(nextQuery);
        }
    }["InnerAutocomplete.useCallback[handleInputChange]"], [
        onQueryChange
    ]), dispatchOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[dispatchOpen]": ()=>{
            dispatch({
                type: "root/open",
                query: value ? renderValue(value, currentOption) : ""
            });
        }
    }["InnerAutocomplete.useCallback[dispatchOpen]"], [
        currentOption,
        renderValue,
        value
    ]), handleInputFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleInputFocus]": (event_3)=>{
            focused || (dispatch({
                type: "input/focus"
            }), onFocus && onFocus(event_3), openOnFocus && dispatchOpen());
        }
    }["InnerAutocomplete.useCallback[handleInputFocus]"], [
        focused,
        onFocus,
        openOnFocus,
        dispatchOpen
    ]), handlePopoverMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handlePopoverMouseEnter]": ()=>{
            popoverMouseWithinRef.current = !0;
        }
    }["InnerAutocomplete.useCallback[handlePopoverMouseEnter]"], []), handlePopoverMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handlePopoverMouseLeave]": ()=>{
            popoverMouseWithinRef.current = !1;
        }
    }["InnerAutocomplete.useCallback[handlePopoverMouseLeave]"], []), handleClearButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleClearButtonClick]": ()=>{
            var _a2;
            dispatch({
                type: "root/clear"
            }), valueRef.current = "", onChange && onChange(""), onQueryChange && onQueryChange(null), (_a2 = inputElementRef.current) == null || _a2.focus();
        }
    }["InnerAutocomplete.useCallback[handleClearButtonClick]"], [
        onChange,
        onQueryChange
    ]), handleClearButtonFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleClearButtonFocus]": ()=>{
            dispatch({
                type: "input/focus"
            });
        }
    }["InnerAutocomplete.useCallback[handleClearButtonFocus]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InnerAutocomplete.useEffect": ()=>{
            if (valueProp !== valuePropRef.current) {
                valuePropRef.current = valueProp, valueProp !== void 0 && (dispatch({
                    type: "value/change",
                    value: valueProp
                }), valueRef.current = valueProp);
                return;
            }
            valueProp !== valueRef.current && (valueRef.current = valueProp || null, dispatch({
                type: "value/change",
                value: valueProp || null
            }));
        }
    }["InnerAutocomplete.useEffect"], [
        valueProp
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InnerAutocomplete.useEffect": ()=>{
            !focused && valueRef.current && dispatch({
                type: "root/setActiveValue",
                value: valueRef.current
            });
        }
    }["InnerAutocomplete.useEffect"], [
        focused
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InnerAutocomplete.useEffect": ()=>{
            const listElement = listBoxElementRef.current;
            if (!listElement) return;
            const activeOption_1 = filteredOptions.find({
                "InnerAutocomplete.useEffect.activeOption_1": (o_2)=>o_2.value === activeValue
            }["InnerAutocomplete.useEffect.activeOption_1"]);
            if (activeOption_1) {
                const activeIndex_1 = filteredOptions.indexOf(activeOption_1), activeItemElement = listElement.childNodes[activeIndex_1];
                if (activeItemElement) {
                    if (_hasFocus(activeItemElement)) return;
                    focusFirstDescendant(activeItemElement);
                }
            }
        }
    }["InnerAutocomplete.useEffect"], [
        activeValue,
        filteredOptions
    ]);
    const clearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[clearButton]": ()=>{
            if (!loading && !disabled && value) return {
                "aria-label": "Clear",
                onFocus: handleClearButtonFocus
            };
        }
    }["InnerAutocomplete.useMemo[clearButton]"], [
        disabled,
        handleClearButtonFocus,
        loading,
        value
    ]), openButtonBoxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[openButtonBoxPadding]": ()=>padding.map({
                "InnerAutocomplete.useMemo[openButtonBoxPadding]": (v_0)=>v_0 === 0 ? 0 : v_0 === 1 || v_0 === 2 ? 1 : v_0 - 2
            }["InnerAutocomplete.useMemo[openButtonBoxPadding]"])
    }["InnerAutocomplete.useMemo[openButtonBoxPadding]"], [
        padding
    ]), openButtonPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[openButtonPadding]": ()=>padding.map({
                "InnerAutocomplete.useMemo[openButtonPadding]": (v_1)=>Math.max(v_1 - 1, 0)
            }["InnerAutocomplete.useMemo[openButtonPadding]"])
    }["InnerAutocomplete.useMemo[openButtonPadding]"], [
        padding
    ]), openButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[openButtonProps]": ()=>typeof openButton == "object" ? openButton : EMPTY_RECORD
    }["InnerAutocomplete.useMemo[openButtonProps]"], [
        openButton
    ]), handleOpenClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleOpenClick]": (event_4)=>{
            dispatchOpen(), openButtonProps.onClick && openButtonProps.onClick(event_4), _raf({
                "InnerAutocomplete.useCallback[handleOpenClick]": ()=>{
                    var _a2;
                    return (_a2 = inputElementRef.current) == null ? void 0 : _a2.focus();
                }
            }["InnerAutocomplete.useCallback[handleOpenClick]"]);
        }
    }["InnerAutocomplete.useCallback[handleOpenClick]"], [
        openButtonProps,
        dispatchOpen
    ]), openButtonNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[openButtonNode]": ()=>!disabled && !readOnly && openButton ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                "aria-hidden": expanded,
                padding: openButtonBoxPadding,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Button, __spreadProps$h(__spreadValues$h({
                    "aria-label": "Open",
                    disabled: expanded,
                    fontSize: fontSize2,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDownIcon"],
                    mode: "bleed",
                    padding: openButtonPadding
                }, openButtonProps), {
                    onClick: handleOpenClick
                }))
            }) : void 0
    }["InnerAutocomplete.useMemo[openButtonNode]"], [
        disabled,
        expanded,
        fontSize2,
        handleOpenClick,
        openButton,
        openButtonBoxPadding,
        openButtonPadding,
        openButtonProps,
        readOnly
    ]), inputValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[inputValue]": ()=>query === null ? value !== null ? renderValue(value, currentOption) : "" : query
    }["InnerAutocomplete.useMemo[inputValue]"], [
        currentOption,
        query,
        renderValue,
        value
    ]), input = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TextInput, __spreadProps$h(__spreadValues$h({}, restProps), {
        "aria-activedescendant": activeItemId,
        "aria-autocomplete": "list",
        "aria-expanded": expanded,
        "aria-owns": listBoxId,
        autoCapitalize: "off",
        autoComplete: "off",
        autoCorrect: "off",
        border: border2,
        clearButton,
        customValidity,
        disabled,
        fontSize: fontSize2,
        icon,
        iconRight: loading && AnimatedSpinnerIcon,
        id,
        inputMode: "search",
        onChange: handleInputChange,
        onClear: handleClearButtonClick,
        onFocus: handleInputFocus,
        padding,
        prefix,
        radius,
        readOnly,
        ref: inputElementRef,
        role: "combobox",
        spellCheck: !1,
        suffix: suffix || openButtonNode,
        value: inputValue
    })), handleListBoxKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InnerAutocomplete.useCallback[handleListBoxKeyDown]": (event_5)=>{
            var _a2;
            event_5.key === "Tab" && listFocused && ((_a2 = inputElementRef.current) == null || _a2.focus());
        }
    }["InnerAutocomplete.useCallback[handleListBoxKeyDown]"], [
        listFocused
    ]), content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[content]": ()=>filteredOptions.length === 0 ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ListBox, __spreadProps$h(__spreadValues$h({
                "data-ui": "AutoComplete__results",
                onKeyDown: handleListBoxKeyDown,
                padding: 1
            }, listBox), {
                tabIndex: -1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stack, {
                    as: "ul",
                    "aria-multiselectable": !1,
                    "data-ui": "AutoComplete__resultsList",
                    id: listBoxId,
                    ref: listBoxElementRef,
                    role: "listbox",
                    space: 1,
                    children: filteredOptions.map({
                        "InnerAutocomplete.useMemo[content]": (option_0)=>{
                            const active = activeValue !== null ? option_0.value === activeValue : currentOption === option_0;
                            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AutocompleteOption, {
                                id: `${id}-option-${option_0.value}`,
                                onSelect: handleOptionSelect,
                                selected: active,
                                value: option_0.value,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(renderOption(option_0), {
                                    disabled: loading,
                                    selected: active,
                                    tabIndex: listFocused && active ? 0 : -1
                                })
                            }, option_0.value);
                        }
                    }["InnerAutocomplete.useMemo[content]"])
                })
            }))
    }["InnerAutocomplete.useMemo[content]"], [
        activeValue,
        currentOption,
        filteredOptions,
        handleOptionSelect,
        handleListBoxKeyDown,
        id,
        listBox,
        listBoxId,
        listFocused,
        loading,
        renderOption
    ]), results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InnerAutocomplete.useMemo[results]": ()=>renderPopover ? renderPopover({
                content,
                hidden: !expanded,
                inputElement: inputElementRef.current,
                onMouseEnter: handlePopoverMouseEnter,
                onMouseLeave: handlePopoverMouseLeave
            }, resultsPopoverElementRef) : filteredOptionsLen === 0 ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Popover, __spreadValues$h({
                arrow: !1,
                constrainSize: !0,
                content,
                fallbackPlacements: AUTOCOMPLETE_POPOVER_FALLBACK_PLACEMENTS,
                matchReferenceWidth: !0,
                onMouseEnter: handlePopoverMouseEnter,
                onMouseLeave: handlePopoverMouseLeave,
                open: expanded,
                overflow: "auto",
                placement: AUTOCOMPLETE_POPOVER_PLACEMENT,
                portal: !0,
                radius,
                ref: resultsPopoverElementRef,
                referenceElement: inputElementRef.current
            }, popover))
    }["InnerAutocomplete.useMemo[results]"], [
        content,
        expanded,
        filteredOptionsLen,
        handlePopoverMouseEnter,
        handlePopoverMouseLeave,
        popover,
        radius,
        renderPopover
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$9, {
        "data-ui": "Autocomplete",
        onBlur: handleRootBlur,
        onFocus: handleRootFocus,
        onKeyDown: handleRootKeyDown,
        ref: rootElementRef,
        children: [
            input,
            results
        ]
    });
});
InnerAutocomplete.displayName = "ForwardRef(Autocomplete)";
const Autocomplete = InnerAutocomplete, Root$8 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].ol`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`, ExpandButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Button)`
  appearance: none;
  margin: -4px;
`;
var __defProp$g = Object.defineProperty, __defProps$g = Object.defineProperties, __getOwnPropDescs$g = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$g = Object.getOwnPropertySymbols, __hasOwnProp$g = Object.prototype.hasOwnProperty, __propIsEnum$g = Object.prototype.propertyIsEnumerable, __defNormalProp$g = (obj, key2, value)=>key2 in obj ? __defProp$g(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$g = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$g.call(b, prop) && __defNormalProp$g(a, prop, b[prop]);
    if (__getOwnPropSymbols$g) for (var prop of __getOwnPropSymbols$g(b))__propIsEnum$g.call(b, prop) && __defNormalProp$g(a, prop, b[prop]);
    return a;
}, __spreadProps$g = (a, b)=>__defProps$g(a, __getOwnPropDescs$g(b)), __objRest$e = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$g) for (var prop of __getOwnPropSymbols$g(source))exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Breadcrumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const _a = props, { children, maxLength, separator, space: spaceRaw = 2 } = _a, restProps = __objRest$e(_a, [
        "children",
        "maxLength",
        "separator",
        "space"
    ]), space = useArrayProp(spaceRaw), [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), expandElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), popoverElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), collapse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Breadcrumbs.useCallback[collapse]": ()=>setOpen(!1)
    }["Breadcrumbs.useCallback[collapse]"], []), expand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Breadcrumbs.useCallback[expand]": ()=>setOpen(!0)
    }["Breadcrumbs.useCallback[expand]"], []);
    useClickOutsideEvent(collapse, {
        "Breadcrumbs.useClickOutsideEvent": ()=>[
                expandElementRef.current,
                popoverElementRef.current
            ]
    }["Breadcrumbs.useClickOutsideEvent"]);
    const rawItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Breadcrumbs.useMemo[rawItems]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])
    }["Breadcrumbs.useMemo[rawItems]"], [
        children
    ]), items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Breadcrumbs.useMemo[items]": ()=>{
            const len = rawItems.length;
            if (maxLength && len > maxLength) {
                const beforeLength = Math.ceil(maxLength / 2), afterLength = Math.floor(maxLength / 2);
                return [
                    ...rawItems.slice(0, beforeLength - 1),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Popover, {
                        constrainSize: !0,
                        content: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stack, {
                            as: "ol",
                            overflow: "auto",
                            padding: space,
                            space,
                            children: rawItems.slice(beforeLength - 1, len - afterLength)
                        }),
                        open,
                        placement: "top",
                        portal: !0,
                        ref: popoverElementRef,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ExpandButton, {
                            fontSize: 1,
                            mode: "bleed",
                            onClick: open ? collapse : expand,
                            padding: 1,
                            ref: expandElementRef,
                            selected: open,
                            text: "\u2026"
                        })
                    }, "button"),
                    ...rawItems.slice(len - afterLength)
                ];
            }
            return rawItems;
        }
    }["Breadcrumbs.useMemo[items]"], [
        collapse,
        expand,
        maxLength,
        open,
        rawItems,
        space
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$8, __spreadProps$g(__spreadValues$g({
        "data-ui": "Breadcrumbs"
    }, restProps), {
        ref,
        children: items.map((item, itemIndex)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    itemIndex > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                        "aria-hidden": !0,
                        as: "li",
                        paddingX: space,
                        children: separator || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                            muted: !0,
                            children: "/"
                        })
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                        as: "li",
                        children: item
                    })
                ]
            }, itemIndex))
    }));
});
Breadcrumbs.displayName = "ForwardRef(Breadcrumbs)";
function dialogStyle({ theme }) {
    const { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(theme);
    return {
        "&:not([hidden])": {
            display: "flex"
        },
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        background: color.backdrop
    };
}
function responsiveDialogPositionStyle(props) {
    const { media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return _responsive(media, props.$position, (position)=>({
            "&&": {
                position
            }
        }));
}
function animationDialogStyle(props) {
    return props.$animate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]``;
}
const DialogContext = createGlobalScopedContext("@sanity/ui/context/dialog", {
    version: 0
});
function useDialog() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DialogContext);
}
var __defProp$f = Object.defineProperty, __defProps$f = Object.defineProperties, __getOwnPropDescs$f = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$f = Object.getOwnPropertySymbols, __hasOwnProp$f = Object.prototype.hasOwnProperty, __propIsEnum$f = Object.prototype.propertyIsEnumerable, __defNormalProp$f = (obj, key2, value)=>key2 in obj ? __defProp$f(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$f = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$f.call(b, prop) && __defNormalProp$f(a, prop, b[prop]);
    if (__getOwnPropSymbols$f) for (var prop of __getOwnPropSymbols$f(b))__propIsEnum$f.call(b, prop) && __defNormalProp$f(a, prop, b[prop]);
    return a;
}, __spreadProps$f = (a, b)=>__defProps$f(a, __getOwnPropDescs$f(b)), __objRest$d = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$f) for (var prop of __getOwnPropSymbols$f(source))exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
function isTargetWithinScope(boundaryElement, portalElement, target) {
    return !boundaryElement || !portalElement ? !0 : containsOrEqualsElement(boundaryElement, target) || containsOrEqualsElement(portalElement, target);
}
const Root$7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Layer)(responsivePaddingStyle, dialogStyle, responsiveDialogPositionStyle, animationDialogStyle), DialogContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Container)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`, DialogCardRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`, DialogLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Flex)`
  flex: 1;
  min-height: 0;
  width: 100%;
`, DialogHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  position: relative;
  z-index: 2;
`, DialogContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`, DialogFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  position: relative;
  z-index: 3;
`, DialogCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38), { __unstable_autoFocus: autoFocus, __unstable_hideCloseButton: hideCloseButton, children, contentRef: forwardedContentRef, footer, header, id, onClickOutside, onClose, portal: portalProp, radius: radiusProp, scheme, shadow: shadowProp, width: widthProp } = props, portal = usePortal(), portalElement = portalProp ? ((_a = portal.elements) == null ? void 0 : _a[portalProp]) || null : portal.element, boundaryElement = useBoundaryElement().element, radius = useArrayProp(radiusProp), shadow = useArrayProp(shadowProp), width = useArrayProp(widthProp), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), layer = useLayer(), { isTopLayer } = layer, labelId = `${id}_label`, showCloseButton = !!onClose && hideCloseButton === !1, showHeader = !!header || showCloseButton;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>ref.current, $[0] = t0) : t0 = $[0], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t0);
    let t1;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>contentRef.current, $[1] = t1) : t1 = $[1], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedContentRef, t1);
    let t2, t3;
    $[2] !== autoFocus ? (t2 = ()=>{
        autoFocus && ref.current && focusFirstDescendant(ref.current);
    }, t3 = [
        autoFocus,
        ref
    ], $[2] = autoFocus, $[3] = t2, $[4] = t3) : (t2 = $[3], t3 = $[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[5] !== boundaryElement || $[6] !== isTopLayer || $[7] !== onClose || $[8] !== portalElement ? (t4 = (event)=>{
        if (!isTopLayer || !onClose) return;
        const target = document.activeElement;
        target && !isTargetWithinScope(boundaryElement, portalElement, target) || event.key === "Escape" && (event.preventDefault(), event.stopPropagation(), onClose());
    }, $[5] = boundaryElement, $[6] = isTopLayer, $[7] = onClose, $[8] = portalElement, $[9] = t4) : t4 = $[9], useGlobalKeyDown(t4);
    let t5;
    $[10] !== boundaryElement || $[11] !== isTopLayer || $[12] !== onClickOutside || $[13] !== portalElement ? (t5 = isTopLayer && onClickOutside && ((event_0)=>{
        const target_0 = event_0.target;
        target_0 && !isTargetWithinScope(boundaryElement, portalElement, target_0) || onClickOutside();
    }), $[10] = boundaryElement, $[11] = isTopLayer, $[12] = onClickOutside, $[13] = portalElement, $[14] = t5) : t5 = $[14];
    let t6;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t6 = ()=>[
            ref.current
        ], $[15] = t6) : t6 = $[15], useClickOutsideEvent(t5, t6);
    let t7;
    $[16] !== header || $[17] !== labelId || $[18] !== onClose || $[19] !== showCloseButton || $[20] !== showHeader ? (t7 = showHeader && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogHeader, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, {
            align: "flex-start",
            padding: 3,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                    flex: 1,
                    padding: 2,
                    children: header && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                        id: labelId,
                        size: 1,
                        weight: "semibold",
                        children: header
                    })
                }),
                showCloseButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                    flex: "none",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Button, {
                        "aria-label": "Close dialog",
                        disabled: !onClose,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"],
                        mode: "bleed",
                        onClick: onClose,
                        padding: 2
                    })
                })
            ]
        })
    }), $[16] = header, $[17] = labelId, $[18] = onClose, $[19] = showCloseButton, $[20] = showHeader, $[21] = t7) : t7 = $[21];
    let t8;
    $[22] !== children ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContent, {
        flex: 1,
        ref: contentRef,
        tabIndex: -1,
        children
    }), $[22] = children, $[23] = t8) : t8 = $[23];
    let t9;
    $[24] !== footer ? (t9 = footer && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogFooter, {
        children: footer
    }), $[24] = footer, $[25] = t9) : t9 = $[25];
    let t10;
    $[26] !== t7 || $[27] !== t8 || $[28] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DialogLayout, {
        direction: "column",
        children: [
            t7,
            t8,
            t9
        ]
    }), $[26] = t7, $[27] = t8, $[28] = t9, $[29] = t10) : t10 = $[29];
    let t11;
    $[30] !== radius || $[31] !== scheme || $[32] !== shadow || $[33] !== t10 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogCardRoot, {
        radius,
        ref,
        scheme,
        shadow,
        children: t10
    }), $[30] = radius, $[31] = scheme, $[32] = shadow, $[33] = t10, $[34] = t11) : t11 = $[34];
    let t12;
    return $[35] !== t11 || $[36] !== width ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContainer, {
        "data-ui": "DialogCard",
        width,
        children: t11
    }), $[35] = t11, $[36] = width, $[37] = t12) : t12 = $[37], t12;
});
DialogCard.displayName = "ForwardRef(DialogCard)";
const Dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a, _b;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60), dialog = useDialog(), { layer } = useTheme_v2();
    let _positionProp, _zOffsetProp, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, portalProp, restProps, scheme, t0, t1, t2, t3, t4, t5, t6;
    $[0] !== props ? (_a = props, { __unstable_autoFocus: t0, __unstable_hideCloseButton: t1, cardRadius: t2, cardShadow: t3, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, padding: t4, portal: portalProp, position: _positionProp, scheme, width: t5, zOffset: _zOffsetProp, animate: t6 } = _a, restProps = __objRest$d(_a, [
        "__unstable_autoFocus",
        "__unstable_hideCloseButton",
        "cardRadius",
        "cardShadow",
        "children",
        "contentRef",
        "footer",
        "header",
        "id",
        "onActivate",
        "onClickOutside",
        "onClose",
        "onFocus",
        "padding",
        "portal",
        "position",
        "scheme",
        "width",
        "zOffset",
        "animate"
    ]), $[0] = props, $[1] = _positionProp, $[2] = _zOffsetProp, $[3] = children, $[4] = contentRef, $[5] = footer, $[6] = header, $[7] = id, $[8] = onActivate, $[9] = onClickOutside, $[10] = onClose, $[11] = onFocus, $[12] = portalProp, $[13] = restProps, $[14] = scheme, $[15] = t0, $[16] = t1, $[17] = t2, $[18] = t3, $[19] = t4, $[20] = t5, $[21] = t6) : (_positionProp = $[1], _zOffsetProp = $[2], children = $[3], contentRef = $[4], footer = $[5], header = $[6], id = $[7], onActivate = $[8], onClickOutside = $[9], onClose = $[10], onFocus = $[11], portalProp = $[12], restProps = $[13], scheme = $[14], t0 = $[15], t1 = $[16], t2 = $[17], t3 = $[18], t4 = $[19], t5 = $[20], t6 = $[21]);
    const autoFocus = t0 === void 0 ? !0 : t0, hideCloseButton = t1 === void 0 ? !1 : t1, cardRadiusProp = t2 === void 0 ? 4 : t2, cardShadow = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, widthProp = t5 === void 0 ? 0 : t5, _animate = t6 === void 0 ? !1 : t6, positionProp = _positionProp != null ? _positionProp : dialog.position || "fixed", zOffsetProp = _zOffsetProp != null ? _zOffsetProp : dialog.zOffset || layer.dialog.zOffset, animate = usePrefersReducedMotion() ? !1 : _animate, portal = usePortal(), portalElement = portalProp ? ((_b = portal.elements) == null ? void 0 : _b[portalProp]) || null : portal.element, boundaryElement = useBoundaryElement().element, cardRadius = useArrayProp(cardRadiusProp), padding = useArrayProp(paddingProp), position = useArrayProp(positionProp), width = useArrayProp(widthProp), zOffset = useArrayProp(zOffsetProp), preDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), postDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), focusedElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t7;
    $[22] !== onFocus ? (t7 = (event)=>{
        onFocus == null || onFocus(event);
        const target = event.target, cardElement = cardRef.current;
        if (cardElement && target === preDivRef.current) {
            focusLastDescendant(cardElement);
            return;
        }
        if (cardElement && target === postDivRef.current) {
            focusFirstDescendant(cardElement);
            return;
        }
        isHTMLElement(event.target) && (focusedElementRef.current = event.target);
    }, $[22] = onFocus, $[23] = t7) : t7 = $[23];
    const handleFocus = t7, labelId = `${id}_label`, rootClickTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t8;
    $[24] !== boundaryElement || $[25] !== portalElement ? (t8 = ()=>{
        rootClickTimeoutRef.current && clearTimeout(rootClickTimeoutRef.current), rootClickTimeoutRef.current = setTimeout(()=>{
            const activeElement = document.activeElement;
            if (activeElement && !isTargetWithinScope(boundaryElement, portalElement, activeElement)) {
                const target_0 = focusedElementRef.current;
                if (!target_0 || !document.body.contains(target_0)) {
                    const cardElement_0 = cardRef.current;
                    cardElement_0 && focusFirstDescendant(cardElement_0);
                    return;
                }
                target_0.focus();
            }
        }, 0);
    }, $[24] = boundaryElement, $[25] = portalElement, $[26] = t8) : t8 = $[26];
    const handleRootClick = t8;
    let t9;
    $[27] === Symbol.for("react.memo_cache_sentinel") ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: preDivRef,
        tabIndex: 0
    }), $[27] = t9) : t9 = $[27];
    let t10;
    $[28] !== autoFocus || $[29] !== cardRadius || $[30] !== cardShadow || $[31] !== children || $[32] !== contentRef || $[33] !== footer || $[34] !== header || $[35] !== hideCloseButton || $[36] !== id || $[37] !== onClickOutside || $[38] !== onClose || $[39] !== portalProp || $[40] !== scheme || $[41] !== width ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogCard, {
        __unstable_autoFocus: autoFocus,
        __unstable_hideCloseButton: hideCloseButton,
        contentRef,
        footer,
        header,
        id,
        onClickOutside,
        onClose,
        portal: portalProp,
        radius: cardRadius,
        ref: cardRef,
        scheme,
        shadow: cardShadow,
        width,
        children
    }), $[28] = autoFocus, $[29] = cardRadius, $[30] = cardShadow, $[31] = children, $[32] = contentRef, $[33] = footer, $[34] = header, $[35] = hideCloseButton, $[36] = id, $[37] = onClickOutside, $[38] = onClose, $[39] = portalProp, $[40] = scheme, $[41] = width, $[42] = t10) : t10 = $[42];
    let t11;
    $[43] === Symbol.for("react.memo_cache_sentinel") ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: postDivRef,
        tabIndex: 0
    }), $[43] = t11) : t11 = $[43];
    let t12;
    $[44] !== animate || $[45] !== handleFocus || $[46] !== handleRootClick || $[47] !== id || $[48] !== labelId || $[49] !== onActivate || $[50] !== padding || $[51] !== position || $[52] !== ref || $[53] !== restProps || $[54] !== t10 || $[55] !== zOffset ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root$7, __spreadProps$f(__spreadValues$f({}, restProps), {
        $animate: animate,
        $padding: padding,
        $position: position,
        "aria-labelledby": labelId,
        "aria-modal": !0,
        "data-ui": "Dialog",
        id,
        onActivate,
        onClick: handleRootClick,
        onFocus: handleFocus,
        ref,
        role: "dialog",
        zOffset,
        children: [
            t9,
            t10,
            t11
        ]
    })), $[44] = animate, $[45] = handleFocus, $[46] = handleRootClick, $[47] = id, $[48] = labelId, $[49] = onActivate, $[50] = padding, $[51] = position, $[52] = ref, $[53] = restProps, $[54] = t10, $[55] = zOffset, $[56] = t12) : t12 = $[56];
    let t13;
    return $[57] !== portalProp || $[58] !== t12 ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Portal, {
        __unstable_name: portalProp,
        children: t12
    }), $[57] = portalProp, $[58] = t12, $[59] = t13) : t13 = $[59], t13;
});
Dialog.displayName = "ForwardRef(Dialog)";
function DialogProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6), { children, position, zOffset } = props;
    let t0, t1;
    $[0] !== position || $[1] !== zOffset ? (t1 = {
        version: 0,
        position,
        zOffset
    }, $[0] = position, $[1] = zOffset, $[2] = t1) : t1 = $[2], t0 = t1;
    const contextValue = t0;
    let t2;
    return $[3] !== children || $[4] !== contextValue ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContext.Provider, {
        value: contextValue,
        children
    }), $[3] = children, $[4] = contextValue, $[5] = t2) : t2 = $[5], t2;
}
DialogProvider.displayName = "DialogProvider";
var __defProp$e = Object.defineProperty, __defProps$e = Object.defineProperties, __getOwnPropDescs$e = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$e = Object.getOwnPropertySymbols, __hasOwnProp$e = Object.prototype.hasOwnProperty, __propIsEnum$e = Object.prototype.propertyIsEnumerable, __defNormalProp$e = (obj, key2, value)=>key2 in obj ? __defProp$e(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$e = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$e.call(b, prop) && __defNormalProp$e(a, prop, b[prop]);
    if (__getOwnPropSymbols$e) for (var prop of __getOwnPropSymbols$e(b))__propIsEnum$e.call(b, prop) && __defNormalProp$e(a, prop, b[prop]);
    return a;
}, __spreadProps$e = (a, b)=>__defProps$e(a, __getOwnPropDescs$e(b)), __objRest$c = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$e) for (var prop of __getOwnPropSymbols$e(source))exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$6 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].kbd`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`, Key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(KBD)`
  &:not([hidden]) {
    display: block;
  }
`, Hotkeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    let fontSize2, keys, padding, radius, restProps, t0;
    $[0] !== props ? (_a = props, { fontSize: fontSize2, keys, padding, radius, space: t0 } = _a, restProps = __objRest$c(_a, [
        "fontSize",
        "keys",
        "padding",
        "radius",
        "space"
    ]), $[0] = props, $[1] = fontSize2, $[2] = keys, $[3] = padding, $[4] = radius, $[5] = restProps, $[6] = t0) : (fontSize2 = $[1], keys = $[2], padding = $[3], radius = $[4], restProps = $[5], t0 = $[6]);
    const space = useArrayProp(t0 === void 0 ? 0.5 : t0);
    if (!keys || keys.length === 0) {
        let t12;
        return $[7] === Symbol.for("react.memo_cache_sentinel") ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}), $[7] = t12) : t12 = $[7], t12;
    }
    let t1;
    if ($[8] !== fontSize2 || $[9] !== keys || $[10] !== padding || $[11] !== radius) {
        let t22;
        $[13] !== fontSize2 || $[14] !== padding || $[15] !== radius ? (t22 = (key2, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Key, {
                fontSize: fontSize2,
                padding,
                radius,
                children: key2
            }, i), $[13] = fontSize2, $[14] = padding, $[15] = radius, $[16] = t22) : t22 = $[16], t1 = keys.map(t22), $[8] = fontSize2, $[9] = keys, $[10] = padding, $[11] = radius, $[12] = t1;
    } else t1 = $[12];
    let t2;
    $[17] !== space || $[18] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Inline, {
        as: "span",
        space,
        children: t1
    }), $[17] = space, $[18] = t1, $[19] = t2) : t2 = $[19];
    let t3;
    return $[20] !== ref || $[21] !== restProps || $[22] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$6, __spreadProps$e(__spreadValues$e({
        "data-ui": "Hotkeys"
    }, restProps), {
        ref,
        children: t2
    })), $[20] = ref, $[21] = restProps, $[22] = t2, $[23] = t3) : t3 = $[23], t3;
});
Hotkeys.displayName = "ForwardRef(Hotkeys)";
const MenuContext = createGlobalScopedContext("@sanity/ui/context/menu", null);
function _isFocusable(element) {
    return isHTMLAnchorElement(element) && element.getAttribute("data-disabled") !== "true" || isHTMLButtonElement(element) && !element.disabled;
}
function _getFocusableElements(elements) {
    return elements.filter(_isFocusable);
}
function _getDOMPath(rootElement, el) {
    const path = [];
    let e = el;
    for(; e !== rootElement;){
        const parentElement = e.parentElement;
        if (!parentElement) return path;
        const index = Array.from(parentElement.childNodes).indexOf(e);
        if (path.unshift(index), parentElement === rootElement) return path;
        e = parentElement;
    }
    return path;
}
const EMPTY_PATH = [];
function _sortElements(rootElement, elements) {
    if (!rootElement) return;
    const map = /* @__PURE__ */ new WeakMap();
    for (const el of elements)map.set(el, _getDOMPath(rootElement, el));
    const _sort = (a, b)=>{
        const _a = map.get(a) || EMPTY_PATH, _b = map.get(b) || EMPTY_PATH, len = Math.max(_a.length, _b.length);
        for(let i = 0; i < len; i += 1){
            const aIndex = _a[i] || -1, bIndex = _b[i] || -1;
            if (aIndex !== bIndex) return aIndex - bIndex;
        }
        return 0;
    };
    elements.sort(_sort);
}
function useMenuController(props) {
    const { onKeyDown, originElement, shouldFocus, rootElementRef } = props, elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), [activeIndex, _setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1), activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeIndex), activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMenuController.useMemo[activeElement]": ()=>elementsRef.current[activeIndex] || null
    }["useMenuController.useMemo[activeElement]"], [
        activeIndex
    ]), mounted = !!rootElementRef.current, setActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuController.useCallback[setActiveIndex]": (nextActiveIndex)=>{
            _setActiveIndex(nextActiveIndex), activeIndexRef.current = nextActiveIndex;
        }
    }["useMenuController.useCallback[setActiveIndex]"], []), mount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuController.useCallback[mount]": (element, selected)=>{
            if (!element) return ({
                "useMenuController.useCallback[mount]": ()=>{}
            })["useMenuController.useCallback[mount]"];
            if (elementsRef.current.indexOf(element) === -1 && (elementsRef.current.push(element), _sortElements(rootElementRef.current, elementsRef.current)), selected) {
                const selectedIndex = elementsRef.current.indexOf(element);
                setActiveIndex(selectedIndex);
            }
            return ({
                "useMenuController.useCallback[mount]": ()=>{
                    const idx = elementsRef.current.indexOf(element);
                    idx > -1 && elementsRef.current.splice(idx, 1);
                }
            })["useMenuController.useCallback[mount]"];
        }
    }["useMenuController.useCallback[mount]"], [
        rootElementRef,
        setActiveIndex
    ]), handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuController.useCallback[handleKeyDown]": (event)=>{
            if (event.key === "Tab") {
                originElement && originElement.focus();
                return;
            }
            if (event.key === "Home") {
                event.preventDefault(), event.stopPropagation();
                const el = _getFocusableElements(elementsRef.current)[0];
                if (!el) return;
                const currentIndex = elementsRef.current.indexOf(el);
                setActiveIndex(currentIndex);
                return;
            }
            if (event.key === "End") {
                event.preventDefault(), event.stopPropagation();
                const focusableElements_0 = _getFocusableElements(elementsRef.current), el_0 = focusableElements_0[focusableElements_0.length - 1];
                if (!el_0) return;
                const currentIndex_0 = elementsRef.current.indexOf(el_0);
                setActiveIndex(currentIndex_0);
                return;
            }
            if (event.key === "ArrowUp") {
                event.preventDefault(), event.stopPropagation();
                const focusableElements_1 = _getFocusableElements(elementsRef.current), focusableLen = focusableElements_1.length;
                if (focusableLen === 0) return;
                const focusedElement = elementsRef.current[activeIndexRef.current];
                let focusedIndex = focusableElements_1.indexOf(focusedElement);
                focusedIndex = (focusedIndex - 1 + focusableLen) % focusableLen;
                const el_1 = focusableElements_1[focusedIndex], currentIndex_1 = elementsRef.current.indexOf(el_1);
                setActiveIndex(currentIndex_1);
                return;
            }
            if (event.key === "ArrowDown") {
                event.preventDefault(), event.stopPropagation();
                const focusableElements_2 = _getFocusableElements(elementsRef.current), focusableLen_0 = focusableElements_2.length;
                if (focusableLen_0 === 0) return;
                const focusedElement_0 = elementsRef.current[activeIndexRef.current];
                let focusedIndex_0 = focusableElements_2.indexOf(focusedElement_0);
                focusedIndex_0 = (focusedIndex_0 + 1) % focusableLen_0;
                const el_2 = focusableElements_2[focusedIndex_0], currentIndex_2 = elementsRef.current.indexOf(el_2);
                setActiveIndex(currentIndex_2);
                return;
            }
            onKeyDown && onKeyDown(event);
        }
    }["useMenuController.useCallback[handleKeyDown]"], [
        onKeyDown,
        originElement,
        setActiveIndex
    ]), handleItemMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuController.useCallback[handleItemMouseEnter]": (event_0)=>{
            const element_0 = event_0.currentTarget, currentIndex_3 = elementsRef.current.indexOf(element_0);
            setActiveIndex(currentIndex_3);
        }
    }["useMenuController.useCallback[handleItemMouseEnter]"], [
        setActiveIndex
    ]), handleItemMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuController.useCallback[handleItemMouseLeave]": ()=>{
            var _a;
            setActiveIndex(-2), (_a = rootElementRef.current) == null || _a.focus();
        }
    }["useMenuController.useCallback[handleItemMouseLeave]"], [
        rootElementRef,
        setActiveIndex
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMenuController.useEffect": ()=>{
            if (!mounted) return;
            const rafId = requestAnimationFrame({
                "useMenuController.useEffect.rafId": ()=>{
                    if (activeIndex === -1) {
                        if (shouldFocus === "first") {
                            const el_3 = _getFocusableElements(elementsRef.current)[0];
                            if (el_3) {
                                const currentIndex_4 = elementsRef.current.indexOf(el_3);
                                setActiveIndex(currentIndex_4);
                            }
                        }
                        if (shouldFocus === "last") {
                            const focusableElements_4 = _getFocusableElements(elementsRef.current), el_4 = focusableElements_4[focusableElements_4.length - 1];
                            if (el_4) {
                                const currentIndex_5 = elementsRef.current.indexOf(el_4);
                                setActiveIndex(currentIndex_5);
                            }
                        }
                        return;
                    }
                    const element_1 = elementsRef.current[activeIndex] || null;
                    element_1 == null || element_1.focus();
                }
            }["useMenuController.useEffect.rafId"]);
            return ({
                "useMenuController.useEffect": ()=>cancelAnimationFrame(rafId)
            })["useMenuController.useEffect"];
        }
    }["useMenuController.useEffect"], [
        activeIndex,
        mounted,
        setActiveIndex,
        shouldFocus
    ]), {
        activeElement,
        activeIndex,
        handleItemMouseEnter,
        handleItemMouseLeave,
        handleKeyDown,
        mount
    };
}
var __defProp$d = Object.defineProperty, __defProps$d = Object.defineProperties, __getOwnPropDescs$d = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$d = Object.getOwnPropertySymbols, __hasOwnProp$d = Object.prototype.hasOwnProperty, __propIsEnum$d = Object.prototype.propertyIsEnumerable, __defNormalProp$d = (obj, key2, value)=>key2 in obj ? __defProp$d(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$d = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$d.call(b, prop) && __defNormalProp$d(a, prop, b[prop]);
    if (__getOwnPropSymbols$d) for (var prop of __getOwnPropSymbols$d(b))__propIsEnum$d.call(b, prop) && __defNormalProp$d(a, prop, b[prop]);
    return a;
}, __spreadProps$d = (a, b)=>__defProps$d(a, __getOwnPropDescs$d(b)), __objRest$b = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$d.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$d) for (var prop of __getOwnPropSymbols$d(source))exclude.indexOf(prop) < 0 && __propIsEnum$d.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)`
  outline: none;
  overflow: auto;
`, Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    let _shouldFocus, children, onClickOutside, onEscape, onItemClick, onItemSelect, onKeyDown, originElement, registerElement, restProps, t0, t1;
    if ($[0] !== props) {
        const _a = props, { children: t22, focusFirst, focusLast, onClickOutside: t32, onEscape: t42, onItemClick: t52, onItemSelect: t62, onKeyDown: t72, originElement: t82, padding: t92, registerElement: t102, shouldFocus: t112, space: t122 } = _a, t132 = __objRest$b(_a, [
            "children",
            "focusFirst",
            "focusLast",
            "onClickOutside",
            "onEscape",
            "onItemClick",
            "onItemSelect",
            "onKeyDown",
            "originElement",
            "padding",
            "registerElement",
            "shouldFocus",
            "space"
        ]);
        children = t22, onClickOutside = t32, onEscape = t42, onItemClick = t52, onItemSelect = t62, onKeyDown = t72, originElement = t82, t0 = t92, registerElement = t102, _shouldFocus = t112, t1 = t122, restProps = t132, $[0] = props, $[1] = _shouldFocus, $[2] = children, $[3] = onClickOutside, $[4] = onEscape, $[5] = onItemClick, $[6] = onItemSelect, $[7] = onKeyDown, $[8] = originElement, $[9] = registerElement, $[10] = restProps, $[11] = t0, $[12] = t1;
    } else _shouldFocus = $[1], children = $[2], onClickOutside = $[3], onEscape = $[4], onItemClick = $[5], onItemSelect = $[6], onKeyDown = $[7], originElement = $[8], registerElement = $[9], restProps = $[10], t0 = $[11], t1 = $[12];
    const padding = t0 === void 0 ? 1 : t0, space = t1 === void 0 ? 1 : t1, shouldFocus = _shouldFocus != null ? _shouldFocus : props.focusFirst && "first" || props.focusLast && "last" || null, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    $[13] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>ref.current, $[13] = t2) : t2 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t2);
    const { isTopLayer } = useLayer();
    let t3;
    $[14] !== onKeyDown || $[15] !== originElement || $[16] !== shouldFocus ? (t3 = {
        onKeyDown,
        originElement,
        shouldFocus,
        rootElementRef: ref
    }, $[14] = onKeyDown, $[15] = originElement, $[16] = shouldFocus, $[17] = t3) : t3 = $[17];
    const { activeElement, activeIndex, handleItemMouseEnter, handleItemMouseLeave, handleKeyDown, mount } = useMenuController(t3), unregisterElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t4;
    $[18] !== registerElement ? (t4 = (el)=>{
        unregisterElementRef.current && (unregisterElementRef.current(), unregisterElementRef.current = null), ref.current = el, ref.current && registerElement && (unregisterElementRef.current = registerElement(ref.current));
    }, $[18] = registerElement, $[19] = t4) : t4 = $[19];
    const handleRefChange = t4;
    let t5, t6;
    $[20] !== activeIndex || $[21] !== onItemSelect ? (t5 = ()=>{
        onItemSelect && onItemSelect(activeIndex);
    }, t6 = [
        activeIndex,
        onItemSelect
    ], $[20] = activeIndex, $[21] = onItemSelect, $[22] = t5, $[23] = t6) : (t5 = $[22], t6 = $[23]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    $[24] === Symbol.for("react.memo_cache_sentinel") ? (t7 = ()=>[
            ref.current
        ], $[24] = t7) : t7 = $[24], useClickOutsideEvent(isTopLayer && onClickOutside, t7);
    let t8;
    $[25] !== isTopLayer || $[26] !== onEscape ? (t8 = (event)=>{
        isTopLayer && event.key === "Escape" && (event.stopPropagation(), onEscape && onEscape());
    }, $[25] = isTopLayer, $[26] = onEscape, $[27] = t8) : t8 = $[27], useGlobalKeyDown(t8);
    let t9, t10;
    $[28] !== activeElement || $[29] !== activeIndex || $[30] !== handleItemMouseEnter || $[31] !== handleItemMouseLeave || $[32] !== mount || $[33] !== onClickOutside || $[34] !== onEscape || $[35] !== onItemClick || $[36] !== registerElement ? (t10 = {
        version: 0,
        activeElement,
        activeIndex,
        mount,
        onClickOutside,
        onEscape,
        onItemClick,
        onItemMouseEnter: handleItemMouseEnter,
        onItemMouseLeave: handleItemMouseLeave,
        registerElement,
        onMouseEnter: handleItemMouseEnter,
        onMouseLeave: handleItemMouseLeave
    }, $[28] = activeElement, $[29] = activeIndex, $[30] = handleItemMouseEnter, $[31] = handleItemMouseLeave, $[32] = mount, $[33] = onClickOutside, $[34] = onEscape, $[35] = onItemClick, $[36] = registerElement, $[37] = t10) : t10 = $[37], t9 = t10;
    const value = t9;
    let t11;
    $[38] !== children || $[39] !== space ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stack, {
        space,
        children
    }), $[38] = children, $[39] = space, $[40] = t11) : t11 = $[40];
    let t12;
    $[41] !== handleKeyDown || $[42] !== handleRefChange || $[43] !== padding || $[44] !== restProps || $[45] !== t11 ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$5, __spreadProps$d(__spreadValues$d({
        "data-ui": "Menu"
    }, restProps), {
        onKeyDown: handleKeyDown,
        padding,
        ref: handleRefChange,
        role: "menu",
        tabIndex: -1,
        children: t11
    })), $[41] = handleKeyDown, $[42] = handleRefChange, $[43] = padding, $[44] = restProps, $[45] = t11, $[46] = t12) : t12 = $[46];
    let t13;
    return $[47] !== t12 || $[48] !== value ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuContext.Provider, {
        value,
        children: t12
    }), $[47] = t12, $[48] = value, $[49] = t13) : t13 = $[49], t13;
});
Menu.displayName = "ForwardRef(Menu)";
var __defProp$c = Object.defineProperty, __defProps$c = Object.defineProperties, __getOwnPropDescs$c = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$c = Object.getOwnPropertySymbols, __hasOwnProp$c = Object.prototype.hasOwnProperty, __propIsEnum$c = Object.prototype.propertyIsEnumerable, __defNormalProp$c = (obj, key2, value)=>key2 in obj ? __defProp$c(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$c = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$c.call(b, prop) && __defNormalProp$c(a, prop, b[prop]);
    if (__getOwnPropSymbols$c) for (var prop of __getOwnPropSymbols$c(b))__propIsEnum$c.call(b, prop) && __defNormalProp$c(a, prop, b[prop]);
    return a;
}, __spreadProps$c = (a, b)=>__defProps$c(a, __getOwnPropDescs$c(b));
const MenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62), { __unstable_disableRestoreFocusOnClose: t0, boundaryElement: deprecated_boundaryElement, button: buttonProp, id, menu: menuProp, onClose, onOpen, placement: deprecated_placement, popoverScheme: deprecated_popoverScheme, portal: t1, popover, popoverRadius: deprecated_popoverRadius, preventOverflow: deprecated_preventOverflow } = props, disableRestoreFocusOnClose = t0 === void 0 ? !1 : t0, deprecated_portal = t1 === void 0 ? !0 : t1, [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [shouldFocus, setShouldFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [buttonElement, setButtonElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[0] = t2) : t2 = $[0];
    const [menuElements, setChildMenuElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2), openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(open);
    let t3, t4;
    $[1] !== onOpen || $[2] !== open ? (t3 = ()=>{
        onOpen && open && !openRef.current && onOpen();
    }, t4 = [
        onOpen,
        open
    ], $[1] = onOpen, $[2] = open, $[3] = t3, $[4] = t4) : (t3 = $[3], t4 = $[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5, t6;
    $[5] !== onClose || $[6] !== open ? (t5 = ()=>{
        onClose && !open && openRef.current && onClose();
    }, t6 = [
        onClose,
        open
    ], $[5] = onClose, $[6] = open, $[7] = t5, $[8] = t6) : (t5 = $[7], t6 = $[8]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    $[9] !== open ? (t7 = ()=>{
        openRef.current = open;
    }, t8 = [
        open
    ], $[9] = open, $[10] = t7, $[11] = t8) : (t7 = $[10], t8 = $[11]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[12] === Symbol.for("react.memo_cache_sentinel") ? (t9 = ()=>{
        setOpen(_temp$2), setShouldFocus(null);
    }, $[12] = t9) : t9 = $[12];
    const handleButtonClick = t9;
    let t10;
    $[13] !== open ? (t10 = (event)=>{
        open && event.preventDefault();
    }, $[13] = open, $[14] = t10) : t10 = $[14];
    const handleMouseDown = t10;
    let t11;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t11 = (event_0)=>{
        if (event_0.key === "ArrowDown" || event_0.key === "Enter" || event_0.key === " ") {
            event_0.preventDefault(), setOpen(!0), setShouldFocus("first");
            return;
        }
        if (event_0.key === "ArrowUp") {
            event_0.preventDefault(), setOpen(!0), setShouldFocus("last");
            return;
        }
    }, $[15] = t11) : t11 = $[15];
    const handleButtonKeyDown = t11;
    let t12;
    $[16] !== buttonElement || $[17] !== menuElements ? (t12 = (event_1)=>{
        const target = event_1.target;
        if (target instanceof Node && !(buttonElement && (target === buttonElement || buttonElement.contains(target)))) {
            for (const el of menuElements)if (target === el || el.contains(target)) return;
            setOpen(!1);
        }
    }, $[16] = buttonElement, $[17] = menuElements, $[18] = t12) : t12 = $[18];
    const handleMenuClickOutside = t12;
    let t13;
    $[19] !== buttonElement || $[20] !== disableRestoreFocusOnClose ? (t13 = ()=>{
        setOpen(!1), !disableRestoreFocusOnClose && buttonElement && buttonElement.focus();
    }, $[19] = buttonElement, $[20] = disableRestoreFocusOnClose, $[21] = t13) : t13 = $[21];
    const handleMenuEscape = t13;
    let t14;
    $[22] !== menuElements ? (t14 = (event_2)=>{
        const target_0 = event_2.relatedTarget;
        if (target_0 instanceof Node) {
            for (const el_0 of menuElements)if (el_0 === target_0 || el_0.contains(target_0)) return;
            setOpen(!1);
        }
    }, $[22] = menuElements, $[23] = t14) : t14 = $[23];
    const handleBlur = t14;
    let t15;
    $[24] !== buttonElement || $[25] !== disableRestoreFocusOnClose ? (t15 = ()=>{
        setOpen(!1), !disableRestoreFocusOnClose && buttonElement && buttonElement.focus();
    }, $[24] = buttonElement, $[25] = disableRestoreFocusOnClose, $[26] = t15) : t15 = $[26];
    const handleItemClick = t15;
    let t16;
    $[27] === Symbol.for("react.memo_cache_sentinel") ? (t16 = (el_1)=>(setChildMenuElements((els)=>els.concat([
                el_1
            ])), ()=>setChildMenuElements((els_0)=>els_0.filter((_el)=>_el !== el_1))), $[27] = t16) : t16 = $[27];
    const registerElement = t16;
    let t17;
    $[28] !== buttonElement || $[29] !== handleBlur || $[30] !== handleItemClick || $[31] !== handleMenuClickOutside || $[32] !== handleMenuEscape || $[33] !== id || $[34] !== menuProp || $[35] !== shouldFocus ? (t17 = menuProp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(menuProp, {
        "aria-labelledby": id,
        onBlurCapture: handleBlur,
        onClickOutside: handleMenuClickOutside,
        onEscape: handleMenuEscape,
        onItemClick: handleItemClick,
        originElement: buttonElement,
        registerElement,
        shouldFocus
    }), $[28] = buttonElement, $[29] = handleBlur, $[30] = handleItemClick, $[31] = handleMenuClickOutside, $[32] = handleMenuEscape, $[33] = id, $[34] = menuProp, $[35] = shouldFocus, $[36] = t17) : t17 = $[36];
    const menu = t17;
    let t18, t19;
    $[37] !== buttonProp || $[38] !== handleMouseDown || $[39] !== id || $[40] !== open ? (t19 = buttonProp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(buttonProp, {
        "data-ui": "MenuButton",
        id,
        onClick: handleButtonClick,
        onKeyDown: handleButtonKeyDown,
        onMouseDown: handleMouseDown,
        "aria-haspopup": !0,
        "aria-expanded": open,
        ref: setButtonElement,
        selected: (_a = buttonProp.props.selected) != null ? _a : open
    }), $[37] = buttonProp, $[38] = handleMouseDown, $[39] = id, $[40] = open, $[41] = t19) : t19 = $[41], t18 = t19;
    const button = t18;
    let t20, t21;
    $[42] !== buttonElement ? (t20 = ()=>buttonElement, t21 = [
        buttonElement
    ], $[42] = buttonElement, $[43] = t20, $[44] = t21) : (t20 = $[43], t21 = $[44]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t20, t21);
    let t22, t23;
    $[45] !== popover ? (t23 = popover || {}, $[45] = popover, $[46] = t23) : t23 = $[46];
    let t24;
    $[47] !== deprecated_boundaryElement || $[48] !== deprecated_placement || $[49] !== deprecated_popoverRadius || $[50] !== deprecated_popoverScheme || $[51] !== deprecated_portal || $[52] !== deprecated_preventOverflow || $[53] !== t23 ? (t24 = __spreadValues$c({
        boundaryElement: deprecated_boundaryElement,
        overflow: "auto",
        placement: deprecated_placement,
        portal: deprecated_portal,
        preventOverflow: deprecated_preventOverflow,
        radius: deprecated_popoverRadius,
        scheme: deprecated_popoverScheme
    }, t23), $[47] = deprecated_boundaryElement, $[48] = deprecated_placement, $[49] = deprecated_popoverRadius, $[50] = deprecated_popoverScheme, $[51] = deprecated_portal, $[52] = deprecated_preventOverflow, $[53] = t23, $[54] = t24) : t24 = $[54], t22 = t24;
    const popoverProps = t22;
    let t25;
    $[55] !== button ? (t25 = button || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}), $[55] = button, $[56] = t25) : t25 = $[56];
    let t26;
    return $[57] !== menu || $[58] !== open || $[59] !== popoverProps || $[60] !== t25 ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Popover, __spreadProps$c(__spreadValues$c({
        "data-ui": "MenuButton__popover"
    }, popoverProps), {
        content: menu,
        open,
        children: t25
    })), $[57] = menu, $[58] = open, $[59] = popoverProps, $[60] = t25, $[61] = t26) : t26 = $[61], t26;
});
MenuButton.displayName = "ForwardRef(MenuButton)";
function _temp$2(v) {
    return !v;
}
const MenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`;
MenuDivider.displayName = "MenuDivider";
function selectableBaseStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `;
}
function selectableColorStyle(props) {
    var _a;
    const { $tone } = props, { color, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), tone = color.selectable[$tone];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${_cardColorStyle(color, tone.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${_cardColorStyle(color, tone.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${_cardColorStyle(color, tone.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${_cardColorStyle(color, tone.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${_cardColorStyle(color, tone.hovered)}
            }

            &:active {
              ${_cardColorStyle(color, tone.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${_cardColorStyle(color, tone.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${_cardColorStyle(color, tone.pressed)}
        }

        &[data-selected] {
          ${_cardColorStyle(color, tone.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${_cardColorStyle(color, tone.hovered)}
            }
            &:active {
              ${_cardColorStyle(color, tone.pressed)}
            }
          }
        }
      }
    }

    ${(_a = style == null ? void 0 : style.card) == null ? void 0 : _a.root}
  `;
}
const Selectable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(responsiveRadiusStyle, selectableBaseStyle, selectableColorStyle);
Selectable.displayName = "Selectable";
function useMenu() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MenuContext);
    if (!value) throw new Error("useMenu(): missing context value");
    if (!isRecord(value) || value.version !== 0) throw new Error("useMenu(): the context value is not compatible");
    return value;
}
var __defProp$b = Object.defineProperty, __defProps$b = Object.defineProperties, __getOwnPropDescs$b = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$b = Object.getOwnPropertySymbols, __hasOwnProp$b = Object.prototype.hasOwnProperty, __propIsEnum$b = Object.prototype.propertyIsEnumerable, __defNormalProp$b = (obj, key2, value)=>key2 in obj ? __defProp$b(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$b = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$b.call(b, prop) && __defNormalProp$b(a, prop, b[prop]);
    if (__getOwnPropSymbols$b) for (var prop of __getOwnPropSymbols$b(b))__propIsEnum$b.call(b, prop) && __defNormalProp$b(a, prop, b[prop]);
    return a;
}, __spreadProps$b = (a, b)=>__defProps$b(a, __getOwnPropDescs$b(b)), __objRest$a = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$b.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$b) for (var prop of __getOwnPropSymbols$b(source))exclude.indexOf(prop) < 0 && __propIsEnum$b.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
function MenuGroup(props) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    let IconComponent, children, onClick, popover, restProps, t0, t1, t2, t3, t4, t5, text;
    $[0] !== props ? (_a = props, { as: t0, children, fontSize: t1, icon: IconComponent, onClick, padding: t2, popover, radius: t3, space: t4, text, tone: t5 } = _a, restProps = __objRest$a(_a, [
        "as",
        "children",
        "fontSize",
        "icon",
        "onClick",
        "padding",
        "popover",
        "radius",
        "space",
        "text",
        "tone"
    ]), $[0] = props, $[1] = IconComponent, $[2] = children, $[3] = onClick, $[4] = popover, $[5] = restProps, $[6] = t0, $[7] = t1, $[8] = t2, $[9] = t3, $[10] = t4, $[11] = t5, $[12] = text) : (IconComponent = $[1], children = $[2], onClick = $[3], popover = $[4], restProps = $[5], t0 = $[6], t1 = $[7], t2 = $[8], t3 = $[9], t4 = $[10], t5 = $[11], text = $[12]);
    const as = t0 === void 0 ? "button" : t0, fontSize2 = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, space = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, menu = useMenu(), { scheme } = useRootTheme(), { activeElement, mount, onClickOutside, onEscape, onItemClick, onItemMouseEnter: _onItemMouseEnter, registerElement } = menu, onItemMouseEnter = _onItemMouseEnter != null ? _onItemMouseEnter : menu.onMouseEnter, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [shouldFocus, setShouldFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), active = !!activeElement && activeElement === rootElement, [withinMenu, setWithinMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t6;
    $[13] !== onItemMouseEnter ? (t6 = (event)=>{
        setWithinMenu(!1), onItemMouseEnter(event), setOpen(!0);
    }, $[13] = onItemMouseEnter, $[14] = t6) : t6 = $[14];
    const handleMouseEnter = t6;
    let t7;
    $[15] !== rootElement ? (t7 = (event_0)=>{
        event_0.key === "ArrowLeft" && (event_0.stopPropagation(), setOpen(!1), requestAnimationFrame(()=>{
            rootElement == null || rootElement.focus();
        }));
    }, $[15] = rootElement, $[16] = t7) : t7 = $[16];
    const handleMenuKeyDown = t7;
    let t8;
    $[17] !== onClick ? (t8 = (event_1)=>{
        onClick == null || onClick(event_1), setShouldFocus("first"), setOpen(!0);
    }, $[17] = onClick, $[18] = t8) : t8 = $[18];
    const handleClick = t8;
    let t9;
    $[19] !== onItemClick ? (t9 = ()=>{
        setOpen(!1), onItemClick == null || onItemClick();
    }, $[19] = onItemClick, $[20] = t9) : t9 = $[20];
    const handleChildItemClick = t9;
    let t10;
    $[21] === Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>setWithinMenu(!0), $[21] = t10) : t10 = $[21];
    const handleMenuMouseEnter = t10;
    let t11, t12;
    $[22] !== mount || $[23] !== rootElement ? (t11 = ()=>mount(rootElement), t12 = [
        mount,
        rootElement
    ], $[22] = mount, $[23] = rootElement, $[24] = t11, $[25] = t12) : (t11 = $[24], t12 = $[25]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13, t14;
    $[26] !== active ? (t13 = ()=>{
        active || setOpen(!1);
    }, t14 = [
        active
    ], $[26] = active, $[27] = t13, $[28] = t14) : (t13 = $[27], t14 = $[28]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15, t16;
    $[29] !== open ? (t15 = ()=>{
        open || setWithinMenu(!1);
    }, t16 = [
        open
    ], $[29] = open, $[30] = t15, $[31] = t16) : (t15 = $[30], t16 = $[31]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16);
    let t17, t18;
    $[32] !== shouldFocus ? (t17 = ()=>{
        if (!shouldFocus) return;
        const rafId = requestAnimationFrame(()=>setShouldFocus(null));
        return ()=>cancelAnimationFrame(rafId);
    }, t18 = [
        shouldFocus
    ], $[32] = shouldFocus, $[33] = t17, $[34] = t18) : (t17 = $[33], t18 = $[34]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t17, t18);
    let t19;
    $[35] !== children || $[36] !== handleChildItemClick || $[37] !== handleMenuKeyDown || $[38] !== onClickOutside || $[39] !== onEscape || $[40] !== registerElement || $[41] !== shouldFocus ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Menu, {
        onClickOutside,
        onEscape,
        onItemClick: handleChildItemClick,
        onKeyDown: handleMenuKeyDown,
        onMouseEnter: handleMenuMouseEnter,
        registerElement,
        shouldFocus,
        children
    }), $[35] = children, $[36] = handleChildItemClick, $[37] = handleMenuKeyDown, $[38] = onClickOutside, $[39] = onEscape, $[40] = registerElement, $[41] = shouldFocus, $[42] = t19) : t19 = $[42];
    const childMenu = t19;
    let t20;
    $[43] === Symbol.for("react.memo_cache_sentinel") ? (t20 = (event_2)=>{
        const target = event_2.currentTarget;
        if (document.activeElement === target && event_2.key === "ArrowRight") {
            setShouldFocus("first"), setOpen(!0), setWithinMenu(!0);
            return;
        }
    }, $[43] = t20) : t20 = $[43];
    const handleKeyDown = t20, t21 = as === "button" ? withinMenu : void 0, t22 = as !== "button" ? withinMenu : void 0, t23 = !withinMenu && active ? "" : void 0, t24 = useArrayProp(radius), t25 = as === "button" ? "button" : void 0;
    let t26;
    $[44] !== IconComponent || $[45] !== fontSize2 ? (t26 = IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
        size: fontSize2,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
        ]
    }), $[44] = IconComponent, $[45] = fontSize2, $[46] = t26) : t26 = $[46];
    let t27;
    $[47] !== fontSize2 || $[48] !== text ? (t27 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
        flex: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
            size: fontSize2,
            textOverflow: "ellipsis",
            weight: "medium",
            children: text
        })
    }), $[47] = fontSize2, $[48] = text, $[49] = t27) : t27 = $[49];
    let t28;
    $[50] === Symbol.for("react.memo_cache_sentinel") ? (t28 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {}), $[50] = t28) : t28 = $[50];
    let t29;
    $[51] !== fontSize2 ? (t29 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        size: fontSize2,
        children: t28
    }), $[51] = fontSize2, $[52] = t29) : t29 = $[52];
    let t30;
    $[53] !== padding || $[54] !== space || $[55] !== t26 || $[56] !== t27 || $[57] !== t29 ? (t30 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, {
        gap: space,
        padding,
        children: [
            t26,
            t27,
            t29
        ]
    }), $[53] = padding, $[54] = space, $[55] = t26, $[56] = t27, $[57] = t29, $[58] = t30) : t30 = $[58];
    let t31;
    $[59] !== as || $[60] !== handleClick || $[61] !== handleMouseEnter || $[62] !== restProps || $[63] !== scheme || $[64] !== t21 || $[65] !== t22 || $[66] !== t23 || $[67] !== t24 || $[68] !== t25 || $[69] !== t30 || $[70] !== tone ? (t31 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Selectable, __spreadProps$b(__spreadValues$b({
        "data-as": as,
        "data-ui": "MenuGroup",
        forwardedAs: as
    }, restProps), {
        "aria-pressed": t21,
        "data-pressed": t22,
        "data-selected": t23,
        $radius: t24,
        $tone: tone,
        $scheme: scheme,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        onMouseEnter: handleMouseEnter,
        ref: setRootElement,
        tabIndex: -1,
        type: t25,
        children: t30
    })), $[59] = as, $[60] = handleClick, $[61] = handleMouseEnter, $[62] = restProps, $[63] = scheme, $[64] = t21, $[65] = t22, $[66] = t23, $[67] = t24, $[68] = t25, $[69] = t30, $[70] = tone, $[71] = t31) : t31 = $[71];
    let t32;
    return $[72] !== childMenu || $[73] !== open || $[74] !== popover || $[75] !== t31 ? (t32 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Popover, __spreadProps$b(__spreadValues$b({}, popover), {
        content: childMenu,
        "data-ui": "MenuGroup__popover",
        open,
        children: t31
    })), $[72] = childMenu, $[73] = open, $[74] = popover, $[75] = t31, $[76] = t32) : t32 = $[76], t32;
}
MenuGroup.displayName = "MenuGroup";
var __defProp$a = Object.defineProperty, __defProps$a = Object.defineProperties, __getOwnPropDescs$a = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$a = Object.getOwnPropertySymbols, __hasOwnProp$a = Object.prototype.hasOwnProperty, __propIsEnum$a = Object.prototype.propertyIsEnumerable, __defNormalProp$a = (obj, key2, value)=>key2 in obj ? __defProp$a(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$a = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    if (__getOwnPropSymbols$a) for (var prop of __getOwnPropSymbols$a(b))__propIsEnum$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    return a;
}, __spreadProps$a = (a, b)=>__defProps$a(a, __getOwnPropDescs$a(b)), __objRest$9 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$a.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$a) for (var prop of __getOwnPropSymbols$a(source))exclude.indexOf(prop) < 0 && __propIsEnum$a.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const MenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    let IconComponent, IconRightComponent, children, disabled, hotkeys, onClick, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, pressed, restProps, selectedProp, t0, t1, t2, t3, t4, t5, text;
    $[0] !== props ? (_a = props, { as: t0, children, disabled, fontSize: t1, hotkeys, icon: IconComponent, iconRight: IconRightComponent, onClick, padding: t2, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, pressed, radius: t3, selected: selectedProp, space: t4, text, tone: t5 } = _a, restProps = __objRest$9(_a, [
        "as",
        "children",
        "disabled",
        "fontSize",
        "hotkeys",
        "icon",
        "iconRight",
        "onClick",
        "padding",
        "paddingX",
        "paddingY",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "pressed",
        "radius",
        "selected",
        "space",
        "text",
        "tone"
    ]), $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = hotkeys, $[6] = onClick, $[7] = paddingBottom, $[8] = paddingLeft, $[9] = paddingRight, $[10] = paddingTop, $[11] = paddingX, $[12] = paddingY, $[13] = pressed, $[14] = restProps, $[15] = selectedProp, $[16] = t0, $[17] = t1, $[18] = t2, $[19] = t3, $[20] = t4, $[21] = t5, $[22] = text) : (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], hotkeys = $[5], onClick = $[6], paddingBottom = $[7], paddingLeft = $[8], paddingRight = $[9], paddingTop = $[10], paddingX = $[11], paddingY = $[12], pressed = $[13], restProps = $[14], selectedProp = $[15], t0 = $[16], t1 = $[17], t2 = $[18], t3 = $[19], t4 = $[20], t5 = $[21], text = $[22]);
    const as = t0 === void 0 ? "button" : t0, fontSize2 = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, space = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, { scheme } = useRootTheme(), menu = useMenu(), { activeElement, mount, onItemClick, onItemMouseEnter: _onItemMouseEnter, onItemMouseLeave: _onItemMouseLeave } = menu, onItemMouseEnter = _onItemMouseEnter != null ? _onItemMouseEnter : menu.onMouseEnter, onItemMouseLeave = _onItemMouseLeave != null ? _onItemMouseLeave : menu.onMouseLeave, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), active = !!activeElement && activeElement === rootElement, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6;
    $[23] === Symbol.for("react.memo_cache_sentinel") ? (t6 = ()=>ref.current, $[23] = t6) : t6 = $[23], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t6);
    let t7, t8;
    $[24] !== mount || $[25] !== rootElement || $[26] !== selectedProp ? (t7 = ()=>mount(rootElement, selectedProp), t8 = [
        mount,
        rootElement,
        selectedProp
    ], $[24] = mount, $[25] = rootElement, $[26] = selectedProp, $[27] = t7, $[28] = t8) : (t7 = $[27], t8 = $[28]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[29] !== disabled || $[30] !== onClick || $[31] !== onItemClick ? (t9 = (event)=>{
        disabled || (onClick && onClick(event), onItemClick && onItemClick());
    }, $[29] = disabled, $[30] = onClick, $[31] = onItemClick, $[32] = t9) : t9 = $[32];
    const handleClick = t9;
    let t10, t11;
    $[33] !== padding || $[34] !== paddingBottom || $[35] !== paddingLeft || $[36] !== paddingRight || $[37] !== paddingTop || $[38] !== paddingX || $[39] !== paddingY ? (t11 = {
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    }, $[33] = padding, $[34] = paddingBottom, $[35] = paddingLeft, $[36] = paddingRight, $[37] = paddingTop, $[38] = paddingX, $[39] = paddingY, $[40] = t11) : t11 = $[40], t10 = t11;
    const paddingProps = t10, t12 = useArrayProp(fontSize2);
    let t13;
    $[41] !== t12 ? (t13 = t12.map(_temp$1), $[41] = t12, $[42] = t13) : t13 = $[42];
    const hotkeysFontSize = t13;
    let t14;
    $[43] === Symbol.for("react.memo_cache_sentinel") ? (t14 = (el)=>{
        ref.current = el, setRootElement(el);
    }, $[43] = t14) : t14 = $[43];
    const setRef = t14, t15 = as === "button" && pressed, t16 = as !== "button" && pressed ? "" : void 0, t17 = active ? "" : void 0, t18 = disabled ? "" : void 0, t19 = useArrayProp(radius), t20 = useArrayProp(0), t21 = disabled ? "default" : tone, t22 = as === "button" ? "button" : void 0;
    let t23;
    $[44] !== IconComponent || $[45] !== IconRightComponent || $[46] !== fontSize2 || $[47] !== hotkeys || $[48] !== hotkeysFontSize || $[49] !== paddingProps || $[50] !== space || $[51] !== text ? (t23 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, __spreadProps$a(__spreadValues$a({
        as: "span",
        gap: space,
        align: "center"
    }, paddingProps), {
        children: [
            IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
                size: fontSize2,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconComponent) && IconComponent,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
                ]
            }),
            text && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                flex: 1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                    size: fontSize2,
                    textOverflow: "ellipsis",
                    weight: "medium",
                    children: text
                })
            }),
            hotkeys && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Hotkeys, {
                fontSize: hotkeysFontSize,
                keys: hotkeys,
                style: {
                    marginTop: -4,
                    marginBottom: -4
                }
            }),
            IconRightComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Text, {
                size: fontSize2,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconRightComponent) && IconRightComponent,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRightComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconRightComponent, {})
                ]
            })
        ]
    })), $[44] = IconComponent, $[45] = IconRightComponent, $[46] = fontSize2, $[47] = hotkeys, $[48] = hotkeysFontSize, $[49] = paddingProps, $[50] = space, $[51] = text, $[52] = t23) : t23 = $[52];
    let t24;
    $[53] !== children || $[54] !== paddingProps ? (t24 = children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, __spreadProps$a(__spreadValues$a({
        as: "span"
    }, paddingProps), {
        children
    })), $[53] = children, $[54] = paddingProps, $[55] = t24) : t24 = $[55];
    let t25;
    return $[56] !== as || $[57] !== disabled || $[58] !== handleClick || $[59] !== onItemMouseEnter || $[60] !== onItemMouseLeave || $[61] !== restProps || $[62] !== scheme || $[63] !== t15 || $[64] !== t16 || $[65] !== t17 || $[66] !== t18 || $[67] !== t19 || $[68] !== t20 || $[69] !== t21 || $[70] !== t22 || $[71] !== t23 || $[72] !== t24 ? (t25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Selectable, __spreadProps$a(__spreadValues$a({
        "data-ui": "MenuItem",
        role: "menuitem"
    }, restProps), {
        "aria-pressed": t15,
        "data-pressed": t16,
        "data-selected": t17,
        "data-disabled": t18,
        forwardedAs: as,
        $radius: t19,
        $padding: t20,
        $tone: t21,
        $scheme: scheme,
        disabled,
        onClick: handleClick,
        onMouseEnter: onItemMouseEnter,
        onMouseLeave: onItemMouseLeave,
        ref: setRef,
        tabIndex: -1,
        type: t22,
        children: [
            t23,
            t24
        ]
    })), $[56] = as, $[57] = disabled, $[58] = handleClick, $[59] = onItemMouseEnter, $[60] = onItemMouseLeave, $[61] = restProps, $[62] = scheme, $[63] = t15, $[64] = t16, $[65] = t17, $[66] = t18, $[67] = t19, $[68] = t20, $[69] = t21, $[70] = t22, $[71] = t23, $[72] = t24, $[73] = t25) : t25 = $[73], t25;
});
MenuItem.displayName = "ForwardRef(MenuItem)";
function _temp$1(s) {
    return s - 1;
}
const keyframe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`, animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${keyframe};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`, skeletonStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  opacity: ${({ $visible })=>$visible ? 1 : 0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({ $animated })=>$animated ? animation : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`;
var __defProp$9 = Object.defineProperty, __defProps$9 = Object.defineProperties, __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$9 = Object.getOwnPropertySymbols, __hasOwnProp$9 = Object.prototype.hasOwnProperty, __propIsEnum$9 = Object.prototype.propertyIsEnumerable, __defNormalProp$9 = (obj, key2, value)=>key2 in obj ? __defProp$9(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$9 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    if (__getOwnPropSymbols$9) for (var prop of __getOwnPropSymbols$9(b))__propIsEnum$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    return a;
}, __spreadProps$9 = (a, b)=>__defProps$9(a, __getOwnPropDescs$9(b)), __objRest$8 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$9) for (var prop of __getOwnPropSymbols$9(source))exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box)(responsiveRadiusStyle, skeletonStyle), Skeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    let delay, radius, restProps, t0;
    $[0] !== props ? (_a = props, { animated: t0, delay, radius } = _a, restProps = __objRest$8(_a, [
        "animated",
        "delay",
        "radius"
    ]), $[0] = props, $[1] = delay, $[2] = radius, $[3] = restProps, $[4] = t0) : (delay = $[1], radius = $[2], restProps = $[3], t0 = $[4]);
    const animated = t0 === void 0 ? !1 : t0, [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!delay);
    let t1, t2;
    $[5] !== delay ? (t1 = ()=>{
        if (!delay) return setVisible(!0);
        const timeout = setTimeout(()=>{
            setVisible(!0);
        }, delay);
        return ()=>{
            clearTimeout(timeout);
        };
    }, t2 = [
        delay
    ], $[5] = delay, $[6] = t1, $[7] = t2) : (t1 = $[6], t2 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = useArrayProp(radius);
    let t4;
    return $[8] !== animated || $[9] !== ref || $[10] !== restProps || $[11] !== t3 || $[12] !== visible ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$4, __spreadProps$9(__spreadValues$9({}, restProps), {
        $animated: animated,
        $radius: t3,
        $visible: visible,
        ref
    })), $[8] = animated, $[9] = ref, $[10] = restProps, $[11] = t3, $[12] = visible, $[13] = t4) : t4 = $[13], t4;
});
Skeleton.displayName = "ForwardRef(Skeleton)";
var __defProp$8 = Object.defineProperty, __defProps$8 = Object.defineProperties, __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$8 = Object.getOwnPropertySymbols, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __propIsEnum$8 = Object.prototype.propertyIsEnumerable, __defNormalProp$8 = (obj, key2, value)=>key2 in obj ? __defProp$8(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$8 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(b))__propIsEnum$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    return a;
}, __spreadProps$8 = (a, b)=>__defProps$8(a, __getOwnPropDescs$8(b)), __objRest$7 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(source))exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root$3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Skeleton)((props)=>{
    const { $size, $style } = props, { font, media } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), fontStyle = font[$style];
    return _responsive(media, $size, (sizeIndex)=>{
        const fontSize2 = fontStyle.sizes[sizeIndex];
        return {
            height: fontSize2.lineHeight - fontSize2.ascenderHeight - fontSize2.descenderHeight
        };
    });
}), TextSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let restProps, t0;
    $[0] !== props ? (_a = props, { size: t0 } = _a, restProps = __objRest$7(_a, [
        "size"
    ]), $[0] = props, $[1] = restProps, $[2] = t0) : (restProps = $[1], t0 = $[2]);
    const $size = useArrayProp(t0 === void 0 ? 2 : t0);
    let t1;
    return $[3] !== $size || $[4] !== ref || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, __spreadProps$8(__spreadValues$8({}, restProps), {
        $size,
        ref,
        $style: "text"
    })), $[3] = $size, $[4] = ref, $[5] = restProps, $[6] = t1) : t1 = $[6], t1;
});
TextSkeleton.displayName = "ForwardRef(TextSkeleton)";
const LabelSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let restProps, t0;
    $[0] !== props ? (_a = props, { size: t0 } = _a, restProps = __objRest$7(_a, [
        "size"
    ]), $[0] = props, $[1] = restProps, $[2] = t0) : (restProps = $[1], t0 = $[2]);
    const $size = useArrayProp(t0 === void 0 ? 2 : t0);
    let t1;
    return $[3] !== $size || $[4] !== ref || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, __spreadProps$8(__spreadValues$8({}, restProps), {
        $size,
        ref,
        $style: "label"
    })), $[3] = $size, $[4] = ref, $[5] = restProps, $[6] = t1) : t1 = $[6], t1;
});
LabelSkeleton.displayName = "ForwardRef(LabelSkeleton)";
const HeadingSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let restProps, t0;
    $[0] !== props ? (_a = props, { size: t0 } = _a, restProps = __objRest$7(_a, [
        "size"
    ]), $[0] = props, $[1] = restProps, $[2] = t0) : (restProps = $[1], t0 = $[2]);
    const $size = useArrayProp(t0 === void 0 ? 2 : t0);
    let t1;
    return $[3] !== $size || $[4] !== ref || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, __spreadProps$8(__spreadValues$8({}, restProps), {
        $size,
        ref,
        $style: "heading"
    })), $[3] = $size, $[4] = ref, $[5] = restProps, $[6] = t1) : t1 = $[6], t1;
});
HeadingSkeleton.displayName = "ForwardRef(HeadingSkeleton)";
const CodeSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let restProps, t0;
    $[0] !== props ? (_a = props, { size: t0 } = _a, restProps = __objRest$7(_a, [
        "size"
    ]), $[0] = props, $[1] = restProps, $[2] = t0) : (restProps = $[1], t0 = $[2]);
    const $size = useArrayProp(t0 === void 0 ? 2 : t0);
    let t1;
    return $[3] !== $size || $[4] !== ref || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, __spreadProps$8(__spreadValues$8({}, restProps), {
        $size,
        ref,
        $style: "code"
    })), $[3] = $size, $[4] = ref, $[5] = restProps, $[6] = t1) : t1 = $[6], t1;
});
CodeSkeleton.displayName = "ForwardRef(CodeSkeleton)";
var __defProp$7 = Object.defineProperty, __defProps$7 = Object.defineProperties, __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$7 = (obj, key2, value)=>key2 in obj ? __defProp$7(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$7 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(b))__propIsEnum$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    return a;
}, __spreadProps$7 = (a, b)=>__defProps$7(a, __getOwnPropDescs$7(b)), __objRest$6 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(source))exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const CustomButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Button)`
  max-width: 100%;
`, Tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    let focused, icon, id, label, onClick, onFocus, restProps, selected, t0, t1;
    $[0] !== props ? (_a = props, { icon, id, focused, fontSize: t0, label, onClick, onFocus, padding: t1, selected } = _a, restProps = __objRest$6(_a, [
        "icon",
        "id",
        "focused",
        "fontSize",
        "label",
        "onClick",
        "onFocus",
        "padding",
        "selected"
    ]), $[0] = props, $[1] = focused, $[2] = icon, $[3] = id, $[4] = label, $[5] = onClick, $[6] = onFocus, $[7] = restProps, $[8] = selected, $[9] = t0, $[10] = t1) : (focused = $[1], icon = $[2], id = $[3], label = $[4], onClick = $[5], onFocus = $[6], restProps = $[7], selected = $[8], t0 = $[9], t1 = $[10]);
    const fontSize2 = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 2 : t1, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), focusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    let t2;
    $[11] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>ref.current, $[11] = t2) : t2 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t2);
    let t3;
    $[12] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ()=>{
        focusedRef.current = !1;
    }, $[12] = t3) : t3 = $[12];
    const handleBlur = t3;
    let t4;
    $[13] !== onFocus ? (t4 = (event)=>{
        focusedRef.current = !0, onFocus && onFocus(event);
    }, $[13] = onFocus, $[14] = t4) : t4 = $[14];
    const handleFocus = t4;
    let t5, t6;
    $[15] !== focused ? (t5 = ()=>{
        focused && !focusedRef.current && (ref.current && ref.current.focus(), focusedRef.current = !0);
    }, t6 = [
        focused
    ], $[15] = focused, $[16] = t5, $[17] = t6) : (t5 = $[16], t6 = $[17]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const t7 = selected ? "true" : "false", t8 = selected ? 0 : -1;
    let t9;
    return $[18] !== fontSize2 || $[19] !== handleFocus || $[20] !== icon || $[21] !== id || $[22] !== label || $[23] !== onClick || $[24] !== padding || $[25] !== restProps || $[26] !== selected || $[27] !== t7 || $[28] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CustomButton, __spreadProps$7(__spreadValues$7({
        "data-ui": "Tab"
    }, restProps), {
        "aria-selected": t7,
        fontSize: fontSize2,
        icon,
        id,
        mode: "bleed",
        onClick,
        onBlur: handleBlur,
        onFocus: handleFocus,
        padding,
        ref,
        role: "tab",
        selected,
        tabIndex: t8,
        text: label,
        type: "button"
    })), $[18] = fontSize2, $[19] = handleFocus, $[20] = icon, $[21] = id, $[22] = label, $[23] = onClick, $[24] = padding, $[25] = restProps, $[26] = selected, $[27] = t7, $[28] = t8, $[29] = t9) : t9 = $[29], t9;
});
Tab.displayName = "ForwardRef(Tab)";
var __defProp$6 = Object.defineProperty, __defProps$6 = Object.defineProperties, __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __defNormalProp$6 = (obj, key2, value)=>key2 in obj ? __defProp$6(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$6 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(b))__propIsEnum$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    return a;
}, __spreadProps$6 = (a, b)=>__defProps$6(a, __getOwnPropDescs$6(b)), __objRest$5 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(source))exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const CustomInline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Inline)`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`, TabList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    let childrenProp, restProps;
    $[0] !== props ? (_a = props, { children: childrenProp } = _a, restProps = __objRest$5(_a, [
        "children"
    ]), $[0] = props, $[1] = childrenProp, $[2] = restProps) : (childrenProp = $[1], restProps = $[2]);
    const [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    let t0;
    if ($[3] !== childrenProp || $[4] !== focusedIndex) {
        const children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(childrenProp).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"]);
        let t12;
        $[6] !== focusedIndex ? (t12 = (child, childIndex)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                focused: focusedIndex === childIndex,
                key: childIndex,
                onFocus: ()=>setFocusedIndex(childIndex)
            }), $[6] = focusedIndex, $[7] = t12) : t12 = $[7], t0 = children.map(t12), $[3] = childrenProp, $[4] = focusedIndex, $[5] = t0;
    } else t0 = $[5];
    const tabs = t0, numTabs = tabs.length;
    let t1;
    $[8] !== numTabs ? (t1 = (event)=>{
        event.key === "ArrowLeft" && setFocusedIndex((prevIndex)=>(prevIndex + numTabs - 1) % numTabs), event.key === "ArrowRight" && setFocusedIndex((prevIndex_0)=>(prevIndex_0 + 1) % numTabs);
    }, $[8] = numTabs, $[9] = t1) : t1 = $[9];
    const handleKeyDown = t1;
    let t2;
    return $[10] !== handleKeyDown || $[11] !== ref || $[12] !== restProps || $[13] !== tabs ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CustomInline, __spreadProps$6(__spreadValues$6({
        "data-ui": "TabList"
    }, restProps), {
        onKeyDown: handleKeyDown,
        ref,
        role: "tablist",
        children: tabs
    })), $[10] = handleKeyDown, $[11] = ref, $[12] = restProps, $[13] = tabs, $[14] = t2) : t2 = $[14], t2;
});
TabList.displayName = "ForwardRef(TabList)";
var __defProp$5 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key2, value)=>key2 in obj ? __defProp$5(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(b))__propIsEnum$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
}, __spreadProps$5 = (a, b)=>__defProps$5(a, __getOwnPropDescs$5(b)), __objRest$4 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(source))exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const TabPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    let flex, restProps;
    $[0] !== props ? (_a = props, { flex } = _a, restProps = __objRest$4(_a, [
        "flex"
    ]), $[0] = props, $[1] = flex, $[2] = restProps) : (flex = $[1], restProps = $[2]);
    const t0 = props.tabIndex === void 0 ? 0 : props.tabIndex;
    let t1;
    return $[3] !== flex || $[4] !== props.children || $[5] !== ref || $[6] !== restProps || $[7] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, __spreadProps$5(__spreadValues$5({
        "data-ui": "TabPanel"
    }, restProps), {
        flex,
        ref,
        role: "tabpanel",
        tabIndex: t0,
        children: props.children
    })), $[3] = flex, $[4] = props.children, $[5] = ref, $[6] = restProps, $[7] = t0, $[8] = t1) : t1 = $[8], t1;
});
TabPanel.displayName = "ForwardRef(TabPanel)";
const TextBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Flex)`
  overflow-x: auto;
`, loadingAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`, LOADING_BAR_HEIGHT = 2;
function rootStyles(props) {
    const { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), loadingBarColor = color.button.default[props.tone].enabled.bg;
    return props.$duration ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${LOADING_BAR_HEIGHT}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${LOADING_BAR_HEIGHT}px;
      background: ${loadingBarColor};
      animation-name: ${loadingAnimation};
      animation-duration: ${props.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${POPOVER_MOTION_CONTENT_OPACITY_PROPERTY}, 1);
      will-change: opacity;
    }
  ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      pointer-events: all;
      & > * {
        opacity: var(${POPOVER_MOTION_CONTENT_OPACITY_PROPERTY}, 1);
        will-change: opacity;
      }
    `;
}
var __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (obj, key2, value)=>key2 in obj ? __defProp$4(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$4 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(b))__propIsEnum$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    return a;
}, __spreadProps$4 = (a, b)=>__defProps$4(a, __getOwnPropDescs$4(b)), __objRest$3 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(source))exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const STATUS_CARD_TONE = {
    error: "critical",
    warning: "caution",
    success: "positive",
    info: "neutral"
}, BUTTON_TONE = {
    error: "critical",
    warning: "caution",
    success: "positive",
    info: "neutral"
}, ROLES = {
    error: "alert",
    warning: "alert",
    success: "alert",
    info: "alert"
}, Root$2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Card)(rootStyles);
function Toast(props) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    let closable, description, duration, onClose, restProps, status, t0, title;
    $[0] !== props ? (_a = props, { closable, description, duration, onClose, radius: t0, title, status } = _a, restProps = __objRest$3(_a, [
        "closable",
        "description",
        "duration",
        "onClose",
        "radius",
        "title",
        "status"
    ]), $[0] = props, $[1] = closable, $[2] = description, $[3] = duration, $[4] = onClose, $[5] = restProps, $[6] = status, $[7] = t0, $[8] = title) : (closable = $[1], description = $[2], duration = $[3], onClose = $[4], restProps = $[5], status = $[6], t0 = $[7], title = $[8]);
    const radius = t0 === void 0 ? 3 : t0, cardTone = status ? STATUS_CARD_TONE[status] : "default", buttonTone = status ? BUTTON_TONE[status] : "default", role = status ? ROLES[status] : "status";
    let t1;
    $[9] !== title ? (t1 = title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        size: 1,
        weight: "medium",
        children: title
    }), $[9] = title, $[10] = t1) : t1 = $[10];
    let t2;
    $[11] !== description ? (t2 = description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
        muted: !0,
        size: 1,
        children: description
    }), $[11] = description, $[12] = t2) : t2 = $[12];
    let t3;
    $[13] !== t1 || $[14] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TextBox, {
        flex: 1,
        padding: 3,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Stack, {
            space: 3,
            children: [
                t1,
                t2
            ]
        })
    }), $[13] = t1, $[14] = t2, $[15] = t3) : t3 = $[15];
    let t4;
    $[16] !== buttonTone || $[17] !== closable || $[18] !== onClose ? (t4 = closable && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
        padding: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Button, {
            as: "button",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"],
            mode: "bleed",
            padding: 2,
            tone: buttonTone,
            onClick: onClose,
            style: {
                verticalAlign: "top"
            }
        })
    }), $[16] = buttonTone, $[17] = closable, $[18] = onClose, $[19] = t4) : t4 = $[19];
    let t5;
    $[20] !== t3 || $[21] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, {
        align: "flex-start",
        children: [
            t3,
            t4
        ]
    }), $[20] = t3, $[21] = t4, $[22] = t5) : t5 = $[22];
    let t6;
    return $[23] !== cardTone || $[24] !== duration || $[25] !== radius || $[26] !== restProps || $[27] !== role || $[28] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$2, __spreadProps$4(__spreadValues$4({
        "data-ui": "Toast",
        role
    }, restProps), {
        marginTop: 3,
        radius,
        shadow: 2,
        tone: cardTone,
        $duration: duration,
        children: t5
    })), $[23] = cardTone, $[24] = duration, $[25] = radius, $[26] = restProps, $[27] = role, $[28] = t5, $[29] = t6) : t6 = $[29], t6;
}
Toast.displayName = "Toast";
function useMounted() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, _temp, _temp2);
}
function _temp2() {
    return !1;
}
function _temp() {
    return !0;
}
const subscribe = ()=>()=>{}, ToastContext = createGlobalScopedContext("@sanity/ui/context/toast", null);
let toastId = 0;
function generateToastId() {
    return String(toastId++);
}
var __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (obj, key2, value)=>key2 in obj ? __defProp$3(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$3 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    if (__getOwnPropSymbols$3) for (var prop of __getOwnPropSymbols$3(b))__propIsEnum$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    return a;
}, __spreadProps$3 = (a, b)=>__defProps$3(a, __getOwnPropDescs$3(b));
const Root$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Layer)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`, ToastContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`;
function ToastProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24), { children, padding: t0, paddingX, paddingY, zOffset } = props, padding = t0 === void 0 ? 4 : t0;
    let t1;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [], $[0] = t1) : t1 = $[0];
    const [state, _setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t2 = {}, $[1] = t2) : t2 = $[1];
    const toastsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2), mounted = useMounted(), prefersReducedMotion = usePrefersReducedMotion();
    let t3, t4, t5;
    $[2] === Symbol.for("react.memo_cache_sentinel") ? (t4 = {
        opacity: 0,
        [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: 0,
        y: 32,
        scale: 0.25,
        willChange: "transform"
    }, t5 = [
        0,
        1,
        1
    ], $[2] = t4, $[3] = t5) : (t4 = $[2], t5 = $[3]);
    let t6, t7;
    $[4] === Symbol.for("react.memo_cache_sentinel") ? (t6 = {
        opacity: t5,
        [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: [
            0,
            0,
            1
        ],
        y: 0,
        scale: 1
    }, t7 = [
        1,
        1,
        0
    ], $[4] = t6, $[5] = t7) : (t6 = $[4], t7 = $[5]);
    let t8;
    $[6] === Symbol.for("react.memo_cache_sentinel") ? (t8 = [
        1,
        0,
        0
    ], $[6] = t8) : t8 = $[6];
    const t9 = prefersReducedMotion ? 0 : 0.2;
    let t10;
    $[7] !== t9 ? (t10 = {
        initial: t4,
        animate: t6,
        exit: {
            opacity: t7,
            [POPOVER_MOTION_CONTENT_OPACITY_PROPERTY]: t8,
            scale: 0.5,
            transition: {
                duration: t9
            }
        }
    }, $[7] = t9, $[8] = t10) : t10 = $[8], t3 = t10;
    const variants = t3;
    let t11, t12;
    $[9] === Symbol.for("react.memo_cache_sentinel") ? (t12 = {
        version: 0,
        push: (params)=>{
            const setState = (state_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>_setState(state_0)), id = params.id || generateToastId(), duration = params.duration || 5e3, dismiss = ()=>{
                var _a;
                const timeoutId = (_a = toastsRef.current[id]) == null ? void 0 : _a.timeoutId;
                setState((prevState)=>{
                    const idx = prevState.findIndex((t)=>t.id === id);
                    if (idx > -1) {
                        const toasts = prevState.slice(0);
                        return toasts.splice(idx, 1), toasts;
                    }
                    return prevState;
                }), timeoutId !== void 0 && (clearTimeout(timeoutId), delete toastsRef.current[id]);
            };
            return setState((prevState_0)=>prevState_0.filter((t_0)=>t_0.id !== id).concat([
                    {
                        dismiss,
                        id,
                        params: __spreadProps$3(__spreadValues$3({}, params), {
                            duration
                        })
                    }
                ])), toastsRef.current[id] && (clearTimeout(toastsRef.current[id].timeoutId), delete toastsRef.current[id]), toastsRef.current[id] = {
                timeoutId: setTimeout(dismiss, duration)
            }, id;
        }
    }, $[9] = t12) : t12 = $[9], t11 = t12;
    const value = t11;
    let t13, t14;
    $[10] === Symbol.for("react.memo_cache_sentinel") ? (t13 = ()=>()=>{
            for (const { timeoutId: timeoutId_0 } of Object.values(toastsRef.current))clearTimeout(timeoutId_0);
            toastsRef.current = {};
        }, t14 = [], $[10] = t13, $[11] = t14) : (t13 = $[10], t14 = $[11]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15;
    $[12] !== mounted || $[13] !== padding || $[14] !== paddingX || $[15] !== paddingY || $[16] !== prefersReducedMotion || $[17] !== state || $[18] !== variants || $[19] !== zOffset ? (t15 = mounted && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$1, {
        "data-ui": "ToastProvider",
        zOffset,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ToastContainer, {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                padding,
                paddingX,
                paddingY,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: !1,
                    children: state.map((t162)=>{
                        const { dismiss: dismiss_0, id: id_0, params: params_0 } = t162;
                        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$15$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: "position",
                            initial: "initial",
                            animate: "animate",
                            exit: "exit",
                            variants,
                            transition: prefersReducedMotion ? {
                                duration: 0
                            } : {
                                type: "spring",
                                damping: 30,
                                stiffness: 400
                            },
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Toast, {
                                closable: params_0.closable,
                                description: params_0.description,
                                onClose: dismiss_0,
                                status: params_0.status,
                                title: params_0.title,
                                duration: params_0.duration
                            })
                        }, id_0);
                    })
                })
            })
        })
    }), $[12] = mounted, $[13] = padding, $[14] = paddingX, $[15] = paddingY, $[16] = prefersReducedMotion, $[17] = state, $[18] = variants, $[19] = zOffset, $[20] = t15) : t15 = $[20];
    let t16;
    return $[21] !== children || $[22] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ToastContext.Provider, {
        value,
        children: [
            children,
            t15
        ]
    }), $[21] = children, $[22] = t15, $[23] = t16) : t16 = $[23], t16;
}
ToastProvider.displayName = "ToastProvider";
function useToast() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!value) throw new Error("useToast(): missing context value");
    if (!isRecord(value) || value.version !== 0) throw new Error("useToast(): the context value is not compatible");
    return value;
}
function _findPrevItemElement(state, itemElements, focusedElement) {
    var _a;
    const idx = itemElements.indexOf(focusedElement), els = itemElements.slice(0, idx), len = els.length;
    for(let i = len - 1; i >= 0; i -= 1){
        const itemKey = els[i].getAttribute("data-tree-key");
        if (!itemKey) continue;
        const segments = itemKey.split("/");
        segments.pop();
        const p = [];
        let expanded = !0;
        for(let j = 0; j < segments.length; j += 1){
            p.push(segments[j]);
            const k = p.join("/");
            if (!((_a = state[k]) != null && _a.expanded)) {
                expanded = !1;
                break;
            }
        }
        if (expanded) return els[i];
    }
    return null;
}
function _findNextItemElement(state, itemElements, focusedElement) {
    var _a;
    const idx = itemElements.indexOf(focusedElement), els = itemElements.slice(idx), len = itemElements.length;
    for(let i = 1; i < len; i += 1){
        if (!els[i]) continue;
        const itemKey = els[i].getAttribute("data-tree-key");
        if (!itemKey) continue;
        const segments = itemKey.split("/");
        segments.pop();
        const p = [];
        let expanded = !0;
        for(let j = 0; j < segments.length; j += 1){
            p.push(segments[j]);
            const k = p.join("/");
            if (!((_a = state[k]) != null && _a.expanded)) {
                expanded = !1;
                break;
            }
        }
        if (expanded) return els[i];
    }
    return null;
}
function _focusItemElement(el) {
    if (el.getAttribute("role") === "treeitem" && el.focus(), el.getAttribute("role") === "none") {
        const firstChild = el.firstChild;
        firstChild && firstChild instanceof HTMLElement && firstChild.focus();
    }
}
const TreeContext = createGlobalScopedContext("@sanity/ui/context/tree", null);
var __defProp$2 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (obj, key2, value)=>key2 in obj ? __defProp$2(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$2 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b))__propIsEnum$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    return a;
}, __spreadProps$2 = (a, b)=>__defProps$2(a, __getOwnPropDescs$2(b)), __objRest$2 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(source))exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    let children, onFocus, restProps, t0;
    $[0] !== props ? (_a = props, { children, space: t0, onFocus } = _a, restProps = __objRest$2(_a, [
        "children",
        "space",
        "onFocus"
    ]), $[0] = props, $[1] = children, $[2] = onFocus, $[3] = restProps, $[4] = t0) : (children = $[1], onFocus = $[2], restProps = $[3], t0 = $[4]);
    const space = t0 === void 0 ? 1 : t0, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [focusedElement, setFocusedElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), focusedElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(focusedElement);
    let t1, t2;
    $[5] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[5] = t2) : t2 = $[5], t1 = t2;
    const path = t1;
    let t3;
    $[6] === Symbol.for("react.memo_cache_sentinel") ? (t3 = [], $[6] = t3) : t3 = $[6];
    const [itemElements, setItemElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    $[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = {}, $[7] = t4) : t4 = $[7];
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4), stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(state);
    let t5;
    $[8] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>ref.current, $[8] = t5) : t5 = $[8], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, t5);
    let t6, t7;
    $[9] !== focusedElement ? (t6 = ()=>{
        focusedElementRef.current = focusedElement;
    }, t7 = [
        focusedElement
    ], $[9] = focusedElement, $[10] = t6, $[11] = t7) : (t6 = $[10], t7 = $[11]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8, t9;
    $[12] !== state ? (t8 = ()=>{
        stateRef.current = state;
    }, t9 = [
        state
    ], $[12] = state, $[13] = t8, $[14] = t9) : (t8 = $[13], t9 = $[14]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t10 = (element, path_0, expanded, selected)=>(setState((s)=>__spreadProps$2(__spreadValues$2({}, s), {
                [path_0]: {
                    element,
                    expanded
                }
            })), selected && setFocusedElement(element), ()=>{
            setState((s_0)=>{
                const newState = __spreadValues$2({}, s_0);
                return delete newState[path_0], newState;
            });
        }), $[15] = t10) : t10 = $[15];
    const registerItem = t10;
    let t11;
    $[16] === Symbol.for("react.memo_cache_sentinel") ? (t11 = (path_1, expanded_0)=>{
        setState((s_1)=>{
            const itemState = s_1[path_1];
            return itemState ? __spreadProps$2(__spreadValues$2({}, s_1), {
                [path_1]: __spreadProps$2(__spreadValues$2({}, itemState), {
                    expanded: expanded_0
                })
            }) : s_1;
        });
    }, $[16] = t11) : t11 = $[16];
    const setExpanded = t11;
    let t12;
    const t13 = focusedElement || itemElements[0] || null;
    let t14;
    $[17] !== space || $[18] !== state || $[19] !== t13 ? (t14 = {
        version: 0,
        focusedElement: t13,
        level: 0,
        path,
        registerItem,
        setExpanded,
        setFocusedElement,
        space,
        state
    }, $[17] = space, $[18] = state, $[19] = t13, $[20] = t14) : t14 = $[20], t12 = t14;
    const contextValue = t12;
    let t15;
    $[21] !== itemElements ? (t15 = (event)=>{
        var _a2;
        if (focusedElementRef.current) {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                const nextEl = _findNextItemElement(stateRef.current, itemElements, focusedElementRef.current);
                nextEl && (_focusItemElement(nextEl), setFocusedElement(nextEl));
                return;
            }
            if (event.key === "ArrowUp") {
                event.preventDefault();
                const prevEl = _findPrevItemElement(stateRef.current, itemElements, focusedElementRef.current);
                prevEl && (_focusItemElement(prevEl), setFocusedElement(prevEl));
                return;
            }
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                const itemKey = focusedElementRef.current.getAttribute("data-tree-key");
                if (!itemKey) return;
                const itemState_0 = stateRef.current[itemKey];
                if (!itemState_0) return;
                if (itemState_0.expanded) setState((s_2)=>{
                    const itemState_1 = s_2[itemKey];
                    return itemState_1 ? __spreadProps$2(__spreadValues$2({}, s_2), {
                        [itemKey]: __spreadProps$2(__spreadValues$2({}, itemState_1), {
                            expanded: !1
                        })
                    }) : s_2;
                });
                else {
                    const itemPath = itemKey.split("/");
                    itemPath.pop();
                    const parentKey = itemPath.join("/"), parentState = parentKey && stateRef.current[parentKey];
                    parentState && (parentState.element.focus(), setFocusedElement(parentState.element));
                }
                return;
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                const focusedKey = focusedElementRef.current.getAttribute("data-tree-key");
                if (!focusedKey) return;
                (_a2 = stateRef.current[focusedKey]) != null && _a2.expanded || setState((s_3)=>{
                    const itemState_2 = s_3[focusedKey];
                    return itemState_2 ? __spreadProps$2(__spreadValues$2({}, s_3), {
                        [focusedKey]: __spreadProps$2(__spreadValues$2({}, itemState_2), {
                            expanded: !0
                        })
                    }) : s_3;
                });
                return;
            }
        }
    }, $[21] = itemElements, $[22] = t15) : t15 = $[22];
    const handleKeyDown = t15;
    let t16;
    $[23] !== onFocus ? (t16 = (event_0)=>{
        setFocusedElement(event_0.target), onFocus == null || onFocus(event_0);
    }, $[23] = onFocus, $[24] = t16) : t16 = $[24];
    const handleFocus = t16;
    let t17;
    $[25] === Symbol.for("react.memo_cache_sentinel") ? (t17 = ()=>{
        if (!ref.current) return;
        const _itemElements = Array.from(ref.current.querySelectorAll('[data-ui="TreeItem"]'));
        setItemElements(_itemElements);
    }, $[25] = t17) : t17 = $[25];
    let t18;
    $[26] !== children ? (t18 = [
        children
    ], $[26] = children, $[27] = t18) : t18 = $[27], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t17, t18);
    let t19;
    $[28] !== children || $[29] !== handleFocus || $[30] !== handleKeyDown || $[31] !== restProps || $[32] !== space ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stack, __spreadProps$2(__spreadValues$2({
        as: "ul",
        "data-ui": "Tree"
    }, restProps), {
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        ref,
        role: "tree",
        space,
        children
    })), $[28] = children, $[29] = handleFocus, $[30] = handleKeyDown, $[31] = restProps, $[32] = space, $[33] = t19) : t19 = $[33];
    let t20;
    return $[34] !== contextValue || $[35] !== t19 ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
        value: contextValue,
        children: t19
    }), $[34] = contextValue, $[35] = t19, $[36] = t20) : t20 = $[36], t20;
}));
Tree.displayName = "Memo(ForwardRef(Tree))";
function treeItemRootStyle() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `;
}
function treeItemRootColorStyle(props) {
    const $tone = "default", { color } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme), tone = color.selectable[$tone];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    &[role='none'] {
      & > [role='treeitem'] {
        ${_cardColorStyle(color, tone.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${_cardColorStyle(color, tone.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${_cardColorStyle(color, tone.hovered)}
        }

        & > [role='treeitem']:focus {
          ${_cardColorStyle(color, tone.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${_cardColorStyle(color, tone.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${_cardColorStyle(color, tone.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${_cardColorStyle(color, tone.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${_cardColorStyle(color, tone.selected)}
        }
      }
    }
  `;
}
function treeItemBoxStyle(props) {
    const { $level } = props, { space } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$getTheme_v2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme_v2"])(props.theme);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    padding-left: ${rem(space[2] * $level)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `;
}
function useTree() {
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TreeContext);
    if (!tree) throw new Error("Tree: missing context value");
    return tree;
}
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (obj, key2, value)=>key2 in obj ? __defProp$1(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues$1 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b))__propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    return a;
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b)), __objRest$1 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(source))exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const TreeGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    let children, restProps, t0;
    $[0] !== props ? (_a = props, { children, expanded: t0 } = _a, restProps = __objRest$1(_a, [
        "children",
        "expanded"
    ]), $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0) : (children = $[1], restProps = $[2], t0 = $[3]);
    const expanded = t0 === void 0 ? !1 : t0, tree = useTree(), t1 = !expanded;
    let t2;
    return $[4] !== children || $[5] !== restProps || $[6] !== t1 || $[7] !== tree.space ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Stack, __spreadProps$1(__spreadValues$1({
        as: "ul",
        "data-ui": "TreeGroup"
    }, restProps), {
        hidden: t1,
        marginTop: tree.space,
        role: "group",
        space: tree.space,
        children
    })), $[4] = children, $[5] = restProps, $[6] = t1, $[7] = tree.space, $[8] = t2) : t2 = $[8], t2;
});
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key2, value)=>key2 in obj ? __defProp(obj, key2, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key2] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b)), __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source))exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].li(treeItemRootStyle, treeItemRootColorStyle)), TreeItemBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Box).attrs({
    forwardedAs: "a"
})(treeItemBoxStyle), ToggleArrowText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(Text)`
  & > svg {
    transition: transform 100ms;
  }
`, TreeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    const _a = props, { children, expanded: expandedProp = !1, fontSize: fontSize2 = 1, href, icon: IconComponent, id: idProp, linkAs, muted, onClick, padding = 2, selected = !1, space = 2, text, weight } = _a, restProps = __objRest(_a, [
        "children",
        "expanded",
        "fontSize",
        "href",
        "icon",
        "id",
        "linkAs",
        "muted",
        "onClick",
        "padding",
        "selected",
        "space",
        "text",
        "weight"
    ]), rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), treeitemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), tree = useTree(), { path, registerItem, setExpanded, setFocusedElement } = tree, _id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), id = idProp || _id, itemPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TreeItem.useMemo[itemPath]": ()=>path.concat([
                id || ""
            ])
    }["TreeItem.useMemo[itemPath]"], [
        id,
        path
    ]), itemKey = itemPath.join("/"), itemState = tree.state[itemKey], focused = tree.focusedElement === rootRef.current, expanded = (itemState == null ? void 0 : itemState.expanded) === void 0 ? expandedProp : (itemState == null ? void 0 : itemState.expanded) || !1, tabIndex = tree.focusedElement && tree.focusedElement === rootRef.current ? 0 : -1, contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TreeItem.useMemo[contextValue]": ()=>__spreadProps(__spreadValues({}, tree), {
                level: tree.level + 1,
                path: itemPath
            })
    }["TreeItem.useMemo[contextValue]"], [
        itemPath,
        tree
    ]), handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TreeItem.useCallback[handleClick]": (event)=>{
            onClick && onClick(event);
            const target = event.target;
            target instanceof HTMLElement && (target.getAttribute("data-ui") === "TreeItem" || target.closest('[data-ui="TreeItem__box"]')) && (event.stopPropagation(), setExpanded(itemKey, !expanded), setFocusedElement(rootRef.current));
        }
    }["TreeItem.useCallback[handleClick]"], [
        expanded,
        itemKey,
        onClick,
        setExpanded,
        setFocusedElement
    ]), handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TreeItem.useCallback[handleKeyDown]": (event_0)=>{
            if (focused && event_0.key === "Enter") {
                const el = treeitemRef.current || rootRef.current;
                el == null || el.click();
            }
        }
    }["TreeItem.useCallback[handleKeyDown]"], [
        focused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TreeItem.useEffect": ()=>{
            if (rootRef.current) return registerItem(rootRef.current, itemPath.join("/"), expanded, selected);
        }
    }["TreeItem.useEffect"], [
        expanded,
        itemPath,
        registerItem,
        selected
    ]);
    const content = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Flex, {
        padding,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Box, {
                marginRight: space,
                style: {
                    visibility: IconComponent || children ? "visible" : "hidden",
                    pointerEvents: "none"
                },
                children: [
                    IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                        muted,
                        size: fontSize2,
                        weight,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconComponent, {})
                    }),
                    !IconComponent && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ToggleArrowText, {
                        muted,
                        size: fontSize2,
                        weight,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleArrowRightIcon"], {
                            style: {
                                transform: expanded ? "rotate(90deg)" : void 0
                            }
                        })
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Box, {
                flex: 1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Text, {
                    muted,
                    size: fontSize2,
                    textOverflow: "ellipsis",
                    weight,
                    children: text
                })
            })
        ]
    });
    return href ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root, __spreadProps(__spreadValues({
        "data-selected": selected ? "" : void 0,
        "data-tree-id": id,
        "data-tree-key": itemKey,
        "data-ui": "TreeItem"
    }, restProps), {
        onClick: handleClick,
        ref: rootRef,
        role: "none",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeItemBox, {
                $level: tree.level,
                "aria-expanded": expanded,
                as: linkAs,
                "data-ui": "TreeItem__box",
                href,
                ref: treeitemRef,
                role: "treeitem",
                tabIndex,
                children: content
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
                value: contextValue,
                children: children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeGroup, {
                    hidden: !expanded,
                    children
                })
            })
        ]
    })) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root, __spreadProps(__spreadValues({
        "data-selected": selected ? "" : void 0,
        "data-ui": "TreeItem",
        "data-tree-id": id,
        "data-tree-key": itemKey
    }, restProps), {
        "aria-expanded": expanded,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ref: rootRef,
        role: "treeitem",
        tabIndex,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeItemBox, {
                $level: tree.level,
                as: "div",
                "data-ui": "TreeItem__box",
                children: content
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeContext.Provider, {
                value: contextValue,
                children: children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TreeGroup, {
                    expanded,
                    children
                })
            })
        ]
    }));
});
TreeItem.displayName = "Memo(TreeItem)";
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=14286_%40sanity_ui_dist_4a9f88._.js.map