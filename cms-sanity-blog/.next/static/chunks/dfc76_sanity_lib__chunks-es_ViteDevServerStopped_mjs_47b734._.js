(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/dfc76_sanity_lib__chunks-es_ViteDevServerStopped_mjs_47b734._.js", {

"[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DetectViteDevServerStopped": (()=>DetectViteDevServerStopped),
    "DevServerStoppedErrorScreen": (()=>DevServerStoppedErrorScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-compiler-runtime@19.0.0-beta-37ed2a7-20241206_react@18.3.1/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+ui@2.10.11_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._ccsk5b3hndd6hinnl5rn7x46ou/node_modules/@sanity/ui/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
const import_meta = {}, ERROR_TITLE = "Dev server stopped", ERROR_DESCRIPTION = "The development server has stopped. You may need to restart it to continue working.";
class ViteDevServerStoppedError extends Error {
    constructor(){
        super(ERROR_TITLE), this.name = "ViteDevServerStoppedError", this.ViteDevServerStoppedError = !0;
    }
}
const serverHot = import_meta.hot, isViteServer = (hot)=>!!hot, useDetectViteDevServerStopped = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), [devServerStopped, setDevServerStopped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>setDevServerStopped(!0), $[0] = t0) : t0 = $[0];
    const markDevServerStopped = t0;
    let t1, t2;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>{
        isViteServer(serverHot) && serverHot.on("vite:ws:disconnect", markDevServerStopped);
    }, t2 = [
        markDevServerStopped
    ], $[1] = t1, $[2] = t2) : (t1 = $[1], t2 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    return $[3] !== devServerStopped ? (t3 = {
        devServerStopped
    }, $[3] = devServerStopped, $[4] = t3) : t3 = $[4], t3;
}, ThrowViteServerStopped = ()=>{
    const { devServerStopped } = useDetectViteDevServerStopped();
    if (devServerStopped) throw new ViteDevServerStoppedError();
    return null;
}, DetectViteDevServerStopped = ()=>isViteServer(serverHot) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThrowViteServerStopped, {}) : null, DevServerStoppedErrorScreen = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        height: "fill",
        overflow: "auto",
        paddingY: [
            4,
            5,
            6,
            7
        ],
        paddingX: 4,
        sizing: "border",
        tone: "critical",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            width: 3,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                space: 4,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        children: ERROR_TITLE
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        border: !0,
                        radius: 2,
                        overflow: "auto",
                        padding: 4,
                        tone: "inherit",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                            space: 4,
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$2$2e$10$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$2d$is$40$18$2e$3$2e$_ccsk5b3hndd6hinnl5rn7x46ou$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: 2,
                                children: ERROR_DESCRIPTION
                            })
                        })
                    })
                ]
            })
        })
    });
;
 //# sourceMappingURL=ViteDevServerStopped.mjs.map
}}),
}]);

//# sourceMappingURL=dfc76_sanity_lib__chunks-es_ViteDevServerStopped_mjs_47b734._.js.map