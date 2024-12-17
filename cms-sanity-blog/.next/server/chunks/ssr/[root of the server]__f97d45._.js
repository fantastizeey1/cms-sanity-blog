module.exports = {

"[project]/sanity/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */ __turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId),
    "studioUrl": (()=>studioUrl)
});
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
const dataset = assertValue(("TURBOPACK compile-time value", "production"), "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
const projectId = assertValue(("TURBOPACK compile-time value", "7hhalgi8"), "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-28";
const studioUrl = "/studio";
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[project]/sanity/plugins/settings.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * This plugin contains all the logic for setting up the singletons
 */ __turbopack_esm__({
    "pageStructure": (()=>pageStructure),
    "singletonPlugin": (()=>singletonPlugin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/index.mjs [app-ssr] (ecmascript) <locals>");
;
const singletonPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["definePlugin"])((types)=>{
    return {
        name: "singletonPlugin",
        document: {
            // Hide 'Singletons (such as Settings)' from new document options
            // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
            newDocumentOptions: (prev, { creationContext, ...rest })=>{
                if (creationContext.type === "global") {
                    return prev.filter((templateItem)=>!types.includes(templateItem.templateId));
                }
                return prev;
            },
            // Removes the "duplicate" action on the Singletons (such as Home)
            actions: (prev, { schemaType })=>{
                if (types.includes(schemaType)) {
                    return prev.filter(({ action })=>action !== "duplicate");
                }
                return prev;
            }
        }
    };
});
const pageStructure = (typeDefArray)=>{
    return (S)=>{
        // Goes through all of the singletons that were provided and translates them into something the
        // Structure tool can understand
        const singletonItems = typeDefArray.map((typeDef)=>{
            return S.listItem().title(typeDef.title).icon(typeDef.icon).child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name));
        });
        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter((listItem)=>!typeDefArray.find((singleton)=>singleton.name === listItem.getId()));
        return S.list().title("Content").items([
            ...singletonItems,
            S.divider(),
            ...defaultListItems
        ]);
    };
};
}}),
"[project]/sanity/schemas/documents/author.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+icons@3.5.3_react@18.3.1/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "author",
    title: "Author",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"],
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "picture",
            title: "Picture",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    description: "Important for SEO and accessiblity.",
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.picture?.asset?._ref && !alt) {
                                return "Required";
                            }
                            return true;
                        });
                    }
                }
            ],
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: "alt"
                }
            },
            validation: (rule)=>rule.required()
        })
    ]
});
}}),
"[project]/sanity/schemas/documents/post.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemas/documents/author.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+icons@3.5.3_react@18.3.1/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "post",
    title: "Post",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentTextIcon"],
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "A slug is required for the post to show up in the preview",
            options: {
                source: "title",
                maxLength: 96,
                isUnique: (value, context)=>context.defaultIsUnique(value, context)
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "excerpt",
            title: "Excerpt",
            type: "text"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: "alt"
                }
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    description: "Important for SEO and accessiblity.",
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.coverImage?.asset?._ref && !alt) {
                                return "Required";
                            }
                            return true;
                        });
                    }
                }
            ],
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "date",
            title: "Date",
            type: "datetime",
            initialValue: ()=>new Date().toISOString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "author",
            title: "Author",
            type: "reference",
            to: [
                {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name
                }
            ]
        })
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            date: "date",
            media: "coverImage"
        },
        prepare ({ title, media, author, date }) {
            const subtitles = [
                author && `by ${author}`,
                date && `on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(date), "LLL d, yyyy")}`
            ].filter(Boolean);
            return {
                title,
                media,
                subtitle: subtitles.join(" ")
            };
        }
    }
});
}}),
"[project]/sanity/plugins/assist.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Sets up the AI Assist plugin with preset prompts for content creation
 */ __turbopack_esm__({
    "assistWithPresets": (()=>assistWithPresets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemas/documents/post.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$assist$40$3$2e$0$2e$9_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$mutator$40$3$2e$67$2e$1_react$2d$dom$40$18$2e$3$2e$1_rea_wsvpi63xybiwitbdfsbv7t3lhm$2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+assist@3.0.9_@emotion+is-prop-valid@1.2.2_@sanity+mutator@3.67.1_react-dom@18.3.1_rea_wsvpi63xybiwitbdfsbv7t3lhm/node_modules/@sanity/assist/dist/index.mjs [app-ssr] (ecmascript)");
;
;
const assistWithPresets = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$assist$40$3$2e$0$2e$9_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$mutator$40$3$2e$67$2e$1_react$2d$dom$40$18$2e$3$2e$1_rea_wsvpi63xybiwitbdfsbv7t3lhm$2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assist"])({
        __presets: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name]: {
                fields: [
                    {
                        /**
             * Creates Portable Text `content` blocks from the `title` field
             */ path: "content",
                        instructions: [
                            {
                                _key: "preset-instruction-1",
                                title: "Generate sample content",
                                icon: "block-content",
                                prompt: [
                                    {
                                        _key: "86e70087d4d5",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "Given the draft title ",
                                                _key: "6b5d5d6a63cf0"
                                            },
                                            {
                                                path: "title",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "0132742d463b"
                                            },
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: " of a blog post, generate a comprehensive and engaging sample content that spans the length of one to two A4 pages. The content should be structured, informative, and tailored to the subject matter implied by the title, whether it be travel, software engineering, fashion, politics, or any other theme. The text will be displayed below the ",
                                                _key: "a02c9ab4eb2d"
                                            },
                                            {
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "f208ef240062",
                                                path: "title"
                                            },
                                            {
                                                text: " and doesn't need to repeat it in the text. The generated text should include the following elements:",
                                                _key: "8ecfa74a8487",
                                                _type: "span",
                                                marks: []
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal"
                                    },
                                    {
                                        style: "normal",
                                        _key: "e4dded41ea89",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "1. Introduction: A brief paragraph that captures the essence of the blog post, hooks the reader with intriguing insights, and outlines the purpose of the post.",
                                                _key: "cc5ef44a2fb5"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        style: "normal",
                                        _key: "585e8de2fe35",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "2. Main Body:",
                                                _key: "fab36eb7c541"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "e96b89ef6357",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "- For thematic consistency, divide the body into several sections with subheadings that explore different facets of the topic.",
                                                _key: "b685a310a0ff"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: "- Include engaging and informative content such as personal anecdotes (for travel or fashion blogs), technical explanations or tutorials (for software engineering blogs), satirical or humorous observations (for shitposting), or well-argued positions (for political blogs).",
                                                _key: "c7468d106c91",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "ce4acdb00da9",
                                        markDefs: []
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "fb4572e65833",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "- ",
                                                _key: "5358f261dce4"
                                            },
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: " observations (for shitposting), or well-argued positions (for political blogs).",
                                                _key: "50792c6d0f77"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: "Where applicable, incorporate bullet points or numbered lists to break down complex information, steps in a process, or key highlights.",
                                                _key: "3b891d8c1dde0",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "9364b67074ce",
                                        markDefs: []
                                    },
                                    {
                                        _key: "a6ba7579cd66",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "3. Conclusion: Summarize the main points discussed in the post, offer final thoughts or calls to action, and invite readers to engage with the content through comments or social media sharing.",
                                                _key: "1280f11d499d"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal"
                                    },
                                    {
                                        style: "normal",
                                        _key: "719a79eb4c1c",
                                        markDefs: [],
                                        children: [
                                            {
                                                marks: [],
                                                text: "4. Engagement Prompts: Conclude with questions or prompts that encourage readers to share their experiences, opinions, or questions related to the blog post's topic, but keep in mind there is no Comments field below the blog post.",
                                                _key: "f1512086bab6",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "4a1c586fd44a",
                                        markDefs: [],
                                        children: [
                                            {
                                                marks: [],
                                                text: "Ensure the generated content maintains a balance between being informative and entertaining, to capture the interest of a wide audience. The sample content should serve as a solid foundation that can be further customized or expanded upon by the blog author to finalize the post.",
                                                _key: "697bbd03cb110",
                                                _type: "span"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: 'Don\'t prefix each section with "Introduction", "Main Body", "Conclusion" or "Engagement Prompts"',
                                                _key: "d20bb9a03b0d",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "b072b3c62c3c",
                                        markDefs: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        /**
             * Summarize content into the `excerpt` field
             */ path: "excerpt",
                        instructions: [
                            {
                                _key: "preset-instruction-2",
                                title: "Summarize content",
                                icon: "blockquote",
                                prompt: [
                                    {
                                        markDefs: [],
                                        children: [
                                            {
                                                _key: "650a0dcc327d",
                                                _type: "span",
                                                marks: [],
                                                text: "Create a short excerpt based on "
                                            },
                                            {
                                                path: "content",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "c62d14c73496"
                                            },
                                            {
                                                _key: "38e043efa606",
                                                _type: "span",
                                                marks: [],
                                                text: " that doesn't repeat what's already in the "
                                            },
                                            {
                                                path: "title",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "445e62dda246"
                                            },
                                            {
                                                _key: "98cce773915e",
                                                _type: "span",
                                                marks: [],
                                                text: " . Consider the UI has limited horizontal space and try to avoid too many line breaks and make it as short, terse and brief as possible. At best a single sentence, at most two sentences."
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "392c618784b0"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    });
}}),
"[project]/sanity/lib/demo.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Demo data used as placeholders and initial values for the blog
 */ __turbopack_esm__({
    "description": (()=>description),
    "ogImageTitle": (()=>ogImageTitle),
    "title": (()=>title)
});
const title = "Blog.";
const description = [
    {
        _key: "9f1a629887fd",
        _type: "block",
        children: [
            {
                _key: "4a58edd077880",
                _type: "span",
                marks: [],
                text: "A statically generated blog example using "
            },
            {
                _key: "4a58edd077881",
                _type: "span",
                marks: [
                    "ec5b66c9b1e0"
                ],
                text: "Next.js"
            },
            {
                _key: "4a58edd077882",
                _type: "span",
                marks: [],
                text: " and "
            },
            {
                _key: "4a58edd077883",
                _type: "span",
                marks: [
                    "1f8991913ea8"
                ],
                text: "Sanity"
            },
            {
                _key: "4a58edd077884",
                _type: "span",
                marks: [],
                text: "."
            }
        ],
        markDefs: [
            {
                _key: "ec5b66c9b1e0",
                _type: "link",
                href: "https://nextjs.org/"
            },
            {
                _key: "1f8991913ea8",
                _type: "link",
                href: "https://sanity.io/"
            }
        ],
        style: "normal"
    }
];
const ogImageTitle = "A Next.js Blog with a Native Authoring Experience";
}}),
"[project]/sanity/schemas/singletons/settings.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/demo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+icons@3.5.3_react@18.3.1/node_modules/@sanity/icons/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "settings",
    title: "Settings",
    type: "document",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$5$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CogIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            description: "This field is the title of your blog.",
            title: "Title",
            type: "string",
            initialValue: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.title,
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "description",
            description: "Used both for the <meta> description tag for SEO, and the blog subheader.",
            title: "Description",
            type: "array",
            initialValue: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.description,
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "block",
                    options: {},
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [],
                        annotations: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                                type: "object",
                                name: "link",
                                fields: [
                                    {
                                        type: "string",
                                        name: "href",
                                        title: "URL",
                                        validation: (rule)=>rule.required()
                                    }
                                ]
                            })
                        ]
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "footer",
            description: "This is a block of text that will be displayed at the bottom of the page.",
            title: "Footer Info",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "Link",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "Url"
                                    }
                                ]
                            }
                        ]
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            description: "Displayed on social cards and search engine results.",
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: "alt"
                }
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "alt",
                    description: "Important for accessibility and SEO.",
                    title: "Alternative text",
                    type: "string",
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.ogImage?.asset?._ref && !alt) {
                                return "Required";
                            }
                            return true;
                        });
                    }
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "metadataBase",
                    type: "url",
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase",
                        rel: "noreferrer noopener",
                        children: "More information"
                    }, void 0, false, {
                        fileName: "[project]/sanity/schemas/singletons/settings.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                })
            ]
        })
    ],
    preview: {
        prepare () {
            return {
                title: "Settings"
            };
        }
    }
});
}}),
"[project]/sanity/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveHref": (()=>resolveHref),
    "resolveOpenGraphImage": (()=>resolveOpenGraphImage),
    "urlForImage": (()=>urlForImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$image$2d$url$40$1$2e$1$2e$0$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+image-url@1.1.0/node_modules/@sanity/image-url/lib/node/index.js [app-ssr] (ecmascript)");
;
;
const imageBuilder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$image$2d$url$40$1$2e$1$2e$0$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"] || "",
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"] || ""
});
const urlForImage = (source)=>{
    // Ensure that source image contains a valid reference
    if (!source?.asset?._ref) {
        return undefined;
    }
    return imageBuilder?.image(source).auto("format").fit("max");
};
function resolveOpenGraphImage(image, width = 1200, height = 627) {
    if (!image) return;
    const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
    if (!url) return;
    return {
        url,
        alt: image?.alt,
        width,
        height
    };
}
function resolveHref(documentType, slug) {
    switch(documentType){
        case "post":
            return slug ? `/posts/${slug}` : undefined;
        default:
            console.warn("Invalid document type:", documentType);
            return undefined;
    }
}
}}),
"[project]/sanity.config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/plugins/settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$assist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/plugins/assist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemas/documents/author.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemas/documents/post.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemas/singletons/settings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$40$1$2e$19$2e$8_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$color$40$3$2e$0$2e$6_debug$40$4$2e$4$2e$0_reac_epti5vobal4q5xpl7pmbcf6wnm$2f$node_modules$2f40$sanity$2f$presentation$2f$dist$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+presentation@1.19.8_@emotion+is-prop-valid@1.2.2_@sanity+color@3.0.6_debug@4.4.0_reac_epti5vobal4q5xpl7pmbcf6wnm/node_modules/@sanity/presentation/dist/_chunks-es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_chunks-es/pane.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$40$3$2e$0$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react_v55v34oauaw6dcz443t77fozua$2f$node_modules$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity-plugin-asset-source-unsplash@3.0.1_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react_v55v34oauaw6dcz443t77fozua/node_modules/sanity-plugin-asset-source-unsplash/lib/index.js [app-ssr] (ecmascript)");
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$vision$40$3$2e$67$2e$1_$40$babel$2b$runtime$40$7$2e$26$2e$0_$40$codemirror$2b$lint$40$6$2e$8$2e$4_$40$codemirror$2b$theme$2d$one$2d$dark_t64bsigsuf5xxs4u2cqz5f4udm$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+vision@3.67.1_@babel+runtime@7.26.0_@codemirror+lint@6.8.4_@codemirror+theme-one-dark_t64bsigsuf5xxs4u2cqz5f4udm/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-ssr] (ecmascript)");
"use client";
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
const homeLocation = {
    title: "Home",
    href: "/"
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioUrl"],
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"],
    schema: {
        types: [
            // Singletons
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            // Documents
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ]
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$40$1$2e$19$2e$8_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$color$40$3$2e$0$2e$6_debug$40$4$2e$4$2e$0_reac_epti5vobal4q5xpl7pmbcf6wnm$2f$node_modules$2f40$sanity$2f$presentation$2f$dist$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presentationTool"])({
            resolve: {
                mainDocuments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$40$1$2e$19$2e$8_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$color$40$3$2e$0$2e$6_debug$40$4$2e$4$2e$0_reac_epti5vobal4q5xpl7pmbcf6wnm$2f$node_modules$2f40$sanity$2f$presentation$2f$dist$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineDocuments"])([
                    {
                        route: "/posts/:slug",
                        filter: `_type == "post" && slug.current == $slug`
                    }
                ]),
                locations: {
                    settings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$40$1$2e$19$2e$8_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$color$40$3$2e$0$2e$6_debug$40$4$2e$4$2e$0_reac_epti5vobal4q5xpl7pmbcf6wnm$2f$node_modules$2f40$sanity$2f$presentation$2f$dist$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineLocations"])({
                        locations: [
                            homeLocation
                        ],
                        message: "This document is used on all pages",
                        tone: "caution"
                    }),
                    post: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$40$1$2e$19$2e$8_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$color$40$3$2e$0$2e$6_debug$40$4$2e$4$2e$0_reac_epti5vobal4q5xpl7pmbcf6wnm$2f$node_modules$2f40$sanity$2f$presentation$2f$dist$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineLocations"])({
                        select: {
                            title: "title",
                            slug: "slug.current"
                        },
                        resolve: (doc)=>({
                                locations: [
                                    {
                                        title: doc?.title || "Untitled",
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveHref"])("post", doc?.slug)
                                    },
                                    homeLocation
                                ]
                            })
                    })
                }
            },
            previewUrl: {
                previewMode: {
                    enable: "/api/draft-mode/enable"
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageStructure"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            ])
        }),
        // Configures the global "new document" button, and document actions, to suit the Settings document singleton
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonPlugin"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name
        ]),
        // Add an image asset source for Unsplash
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$40$3$2e$0$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$18$2e$3$2e$1_react_v55v34oauaw6dcz443t77fozua$2f$node_modules$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsplashImageAsset"])(),
        // Sets up AI Assist with preset prompts
        // https://www.sanity.io/docs/ai-assist
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$assist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assistWithPresets"])(),
        // Vision lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        ("TURBOPACK compile-time value", "development") === "development" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$vision$40$3$2e$67$2e$1_$40$babel$2b$runtime$40$7$2e$26$2e$0_$40$codemirror$2b$lint$40$6$2e$8$2e$4_$40$codemirror$2b$theme$2d$one$2d$dark_t64bsigsuf5xxs4u2cqz5f4udm$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ].filter(Boolean)
});
}}),
"[project]/app/(sanity)/studio/[[...tool]]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__f97d45._.js.map