(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/26aa7_@sanity_schema_lib_7ecea2._.js", {

"[project]/node_modules/.pnpm/@sanity+schema@3.67.1_debug@4.4.0/node_modules/@sanity/schema/lib/_chunks-es/resolve.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_MAX_FIELD_DEPTH": (()=>DEFAULT_MAX_FIELD_DEPTH),
    "resolveSearchConfig": (()=>resolveSearchConfig),
    "resolveSearchConfigForBaseFieldPaths": (()=>resolveSearchConfigForBaseFieldPaths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFinite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFinite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqBy.js [app-client] (ecmascript)");
;
;
const DEFAULT_MAX_FIELD_DEPTH = 5, stringFieldsSymbols = {}, getStringFieldSymbol = (maxDepth)=>(stringFieldsSymbols[maxDepth] || (stringFieldsSymbols[maxDepth] = Symbol(`__cachedStringFields_${maxDepth}`)), stringFieldsSymbols[maxDepth]), isReference = (type)=>type.type && type.type.name === "reference", portableTextFields = [
    "style",
    "list"
], isPortableTextBlock = (type)=>type.name === "block" || type.type && isPortableTextBlock(type.type), isPortableTextArray = (type)=>type.jsonType === "array" && Array.isArray(type.of) && type.of.some(isPortableTextBlock);
function reduceType(type, reducer, acc, path = [], maxDepth) {
    if (maxDepth < 0) return acc;
    const accumulator = reducer(acc, type, path);
    return type.jsonType === "array" && Array.isArray(type.of) ? reduceArray(type, reducer, accumulator, path, maxDepth) : type.jsonType === "object" && Array.isArray(type.fields) && !isReference(type) ? reduceObject(type, reducer, accumulator, path, maxDepth) : accumulator;
}
function reduceArray(arrayType, reducer, accumulator, path, maxDepth) {
    return arrayType.of.reduce((acc, ofType)=>reduceType(ofType, reducer, acc, path, maxDepth - 1), accumulator);
}
function reduceObject(objectType, reducer, accumulator, path, maxDepth) {
    const isPtBlock = isPortableTextBlock(objectType);
    return objectType.fields.reduce((acc, field)=>{
        if (isPtBlock && portableTextFields.includes(field.name)) return acc;
        const segment = [
            field.name
        ].concat(field.type.jsonType === "array" ? [
            []
        ] : []);
        return reduceType(field.type, reducer, acc, path.concat(segment), maxDepth - 1);
    }, accumulator);
}
const BASE_WEIGHTS = [
    {
        weight: 1,
        path: [
            "_id"
        ]
    },
    {
        weight: 1,
        path: [
            "_type"
        ]
    }
], PREVIEW_FIELD_WEIGHT_MAP = {
    title: 10,
    subtitle: 5,
    description: 1.5
};
function deriveFromPreview(type, maxDepth) {
    var _a;
    const select = (_a = type == null ? void 0 : type.preview) == null ? void 0 : _a.select;
    if (!select) return [];
    const fields = [];
    for (const fieldName of Object.keys(select)){
        if (!(fieldName in PREVIEW_FIELD_WEIGHT_MAP)) continue;
        const path = select[fieldName].split(".");
        maxDepth > -1 && path.length - 1 > maxDepth || fields.push({
            weight: PREVIEW_FIELD_WEIGHT_MAP[fieldName],
            path
        });
    }
    return fields;
}
function getCachedStringFieldPaths(type, maxDepth) {
    const symbol = getStringFieldSymbol(maxDepth);
    return type[symbol] || (type[symbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        ...BASE_WEIGHTS,
        ...deriveFromPreview(type, maxDepth),
        ...getStringFieldPaths(type, maxDepth).map((path)=>({
                weight: 1,
                path
            })),
        ...getPortableTextFieldPaths(type, maxDepth).map((path)=>({
                weight: 1,
                path,
                mapWith: "pt::text"
            }))
    ], (spec)=>spec.path.join("."))), type[symbol];
}
function getCachedBaseFieldPaths(type, maxDepth) {
    const symbol = getStringFieldSymbol(maxDepth);
    return type[symbol] || (type[symbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        ...BASE_WEIGHTS,
        ...deriveFromPreview(type, maxDepth)
    ], (spec)=>spec.path.join("."))), type[symbol];
}
function getStringFieldPaths(type, maxDepth) {
    return reduceType(type, (accumulator, childType, path)=>childType.jsonType === "string" ? [
            ...accumulator,
            path
        ] : accumulator, [], [], maxDepth);
}
function getPortableTextFieldPaths(type, maxDepth) {
    return reduceType(type, (accumulator, childType, path)=>isPortableTextArray(childType) ? [
            ...accumulator,
            path
        ] : accumulator, [], [], maxDepth);
}
function resolveSearchConfigForBaseFieldPaths(type, maxDepth) {
    return getCachedBaseFieldPaths(type, normalizeMaxDepth(maxDepth));
}
function resolveSearchConfig(type, maxDepth) {
    return getCachedStringFieldPaths(type, normalizeMaxDepth(maxDepth));
}
function normalizeMaxDepth(maxDepth) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFinite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(maxDepth) || maxDepth < 1 || maxDepth > DEFAULT_MAX_FIELD_DEPTH ? DEFAULT_MAX_FIELD_DEPTH - 1 : maxDepth - 1;
}
;
 //# sourceMappingURL=resolve.mjs.map
}}),
"[project]/node_modules/.pnpm/@sanity+schema@3.67.1_debug@4.4.0/node_modules/@sanity/schema/lib/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Schema": (()=>Schema2),
    "default": (()=>DeprecatedDefaultSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/arrify@1.0.1/node_modules/arrify/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isUndefined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omitBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omitBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$castArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/castArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/startCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$toPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$_chunks$2d$es$2f$resolve$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+schema@3.67.1_debug@4.4.0/node_modules/@sanity/schema/lib/_chunks-es/resolve.mjs [app-client] (ecmascript)");
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
const DEFAULT_OVERRIDEABLE_FIELDS = [
    "jsonType",
    "type",
    "name",
    "title",
    "description",
    "options",
    "fieldsets",
    "validation",
    "readOnly",
    "hidden",
    "components",
    "diffComponent",
    "initialValue",
    "deprecated"
], OVERRIDABLE_FIELDS$e = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], ANY_CORE = {
    name: "any",
    type: null,
    jsonType: "any"
}, AnyType = {
    get () {
        return ANY_CORE;
    },
    extend (subTypeDef, extendMember) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ANY_CORE, OVERRIDABLE_FIELDS$e), subTypeDef, {
            type: ANY_CORE,
            of: subTypeDef.of.map((fieldDef)=>({
                    name: fieldDef.name,
                    type: extendMember((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fieldDef, "name"))
                }))
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.of) throw new Error('Cannot override `of` property of subtypes of "array"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$e), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
function lazyGetter(target, key, getter, config = {}) {
    return Object.defineProperty(target, key, {
        configurable: !0,
        enumerable: config.enumerable !== !1,
        get () {
            const val = getter();
            return Object.defineProperty(target, key, {
                value: val,
                writable: !!config.writable,
                configurable: !1
            }), val;
        }
    }), target;
}
const OVERRIDABLE_FIELDS$d = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], ARRAY_CORE = {
    name: "array",
    type: null,
    jsonType: "array",
    of: []
}, ArrayType = {
    get () {
        return ARRAY_CORE;
    },
    extend (subTypeDef, createMemberType) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ARRAY_CORE, OVERRIDABLE_FIELDS$d), subTypeDef, {
            type: ARRAY_CORE
        });
        return lazyGetter(parsed, "of", ()=>subTypeDef.of.map((ofTypeDef)=>createMemberType(ofTypeDef))), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.of) throw new Error('Cannot override `of` property of subtypes of "array"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$d), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
function warnIfPreviewOnOptions(type) {
    type.options && type.options.preview && console.warn(`Heads up! The preview config is no longer defined on "options", but instead on the type/field itself.
Please move {options: {preview: ...}} to {..., preview: ...} on the type/field definition of "${type.name}".
`);
}
function warnIfPreviewHasFields(type) {
    const preview = type.preview || (type.options || {}).preview;
    preview && "fields" in preview && console.warn(`Heads up! "preview.fields" should be renamed to "preview.select". Please update the preview config for "${type.name}".
`);
}
function isEmpty(object) {
    for(const key in object)if (object.hasOwnProperty(key)) return !1;
    return !0;
}
function _stringify(value, options, depth) {
    if (depth > options.maxDepth) return "...";
    if (Array.isArray(value)) {
        if (value.length === 0) return "[empty]";
        const capLength = Math.max(value.length - options.maxBreadth), asString2 = value.slice(0, options.maxBreadth).map((item, index)=>_stringify(item, options, depth + 1)).concat(capLength > 0 ? `\u2026+${capLength}` : []).join(", ");
        return depth === 0 ? asString2 : `[${asString2}]`;
    }
    if (typeof value == "object" && value !== null) {
        const keys = Object.keys(value).filter((key)=>!options.ignoreKeys.includes(key) && typeof value[key] < "u");
        if (isEmpty((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, keys))) return "{empty}";
        const asString2 = keys.slice(0, options.maxBreadth).map((key)=>`${key}: ${_stringify(value[key], options, depth + 1)}`).join(", ");
        return depth === 0 ? asString2 : `{${asString2}}`;
    }
    const asString = String(value);
    return asString === "" ? '""' : asString;
}
function stringify(value, options = {}) {
    const opts = {
        maxDepth: "maxDepth" in options ? options.maxDepth : 2,
        maxBreadth: "maxBreadth" in options ? options.maxBreadth : 2,
        ignoreKeys: "ignoreKeys" in options ? options.ignoreKeys : []
    };
    return _stringify(value, opts, 0);
}
const OPTIONS = {
    maxEntries: 2,
    maxDepth: 2,
    maxBreadth: 2,
    ignoreKeys: [
        "_id",
        "_type",
        "_key",
        "_ref"
    ]
};
function createFallbackPrepare(fieldNames) {
    return (value)=>({
            title: stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, fieldNames), OPTIONS)
        });
}
function isBlockField(field) {
    return field.type === "array" && field.of && field.of.some((member)=>member.type === "block") || !1;
}
var __defProp$8 = Object.defineProperty, __getOwnPropSymbols$8 = Object.getOwnPropertySymbols, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __propIsEnum$8 = Object.prototype.propertyIsEnumerable, __defNormalProp$8 = (obj, key, value)=>key in obj ? __defProp$8(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$7 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(b))__propIsEnum$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    return a;
};
const TITLE_CANDIDATES = [
    "title",
    "name",
    "label",
    "heading",
    "header",
    "caption"
], DESCRIPTION_CANDIDATES = [
    "description",
    ...TITLE_CANDIDATES
];
function fieldHasReferenceTo(fieldDef, refType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fieldDef.to || []).some((memberTypeDef)=>memberTypeDef.type === refType);
}
function isImageAssetField(fieldDef) {
    return fieldHasReferenceTo(fieldDef, "sanity.imageAsset");
}
function resolveImageAssetPath(typeDef) {
    const fields = typeDef.fields || [], imageAssetField = fields.find(isImageAssetField);
    if (imageAssetField) return imageAssetField.name;
    const fieldWithImageAsset = fields.find((fieldDef)=>(fieldDef.fields || []).some(isImageAssetField));
    return fieldWithImageAsset ? `${fieldWithImageAsset.name}.asset` : void 0;
}
function isFileAssetField(fieldDef) {
    return fieldHasReferenceTo(fieldDef, "sanity.fileAsset");
}
function resolveFileAssetPath(typeDef) {
    const fields = typeDef.fields || [], assetField = fields.find(isFileAssetField);
    if (assetField) return assetField.name;
    const fieldWithFileAsset = fields.find((fieldDef)=>(fieldDef.fields || []).some(isFileAssetField));
    return fieldWithFileAsset ? `${fieldWithFileAsset.name}.asset` : void 0;
}
function guessPreviewFields(rawObjectTypeDef) {
    const objectTypeDef = __spreadValues$7({
        fields: []
    }, rawObjectTypeDef), stringFieldNames = objectTypeDef.fields.filter((field)=>field.type === "string").map((field)=>field.name), blockFieldNames = objectTypeDef.fields.filter(isBlockField).map((field)=>field.name);
    let titleField = TITLE_CANDIDATES.find((candidate)=>stringFieldNames.includes(candidate) || blockFieldNames.includes(candidate)), descField = DESCRIPTION_CANDIDATES.find((candidate)=>candidate !== titleField && (stringFieldNames.includes(candidate) || blockFieldNames.includes(candidate)));
    titleField || (titleField = stringFieldNames[0] || blockFieldNames[0], descField = stringFieldNames[1] || blockFieldNames[1]);
    const mediaField = objectTypeDef.fields.find((field)=>field.type === "image"), imageAssetPath = resolveImageAssetPath(objectTypeDef);
    if (!titleField) {
        const fileAssetPath = resolveFileAssetPath(objectTypeDef);
        fileAssetPath && (titleField = `${fileAssetPath}.originalFilename`), imageAssetPath && (titleField = `${imageAssetPath}.originalFilename`);
    }
    if (!titleField && !imageAssetPath) {
        const fieldNames = objectTypeDef.fields.map((field)=>field.name);
        return {
            select: fieldNames.reduce((acc, fieldName)=>(acc[fieldName] = fieldName, acc), {}),
            prepare: createFallbackPrepare(fieldNames)
        };
    }
    return {
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omitBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            title: titleField,
            description: descField,
            media: mediaField ? mediaField.name : imageAssetPath
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
    };
}
var __defProp$7 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$7 = (obj, key, value)=>key in obj ? __defProp$7(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$6 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(b))__propIsEnum$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    return a;
}, __spreadProps$4 = (a, b)=>__defProps$4(a, __getOwnPropDescs$4(b));
function parseSelection(selection) {
    return selection.reduce((acc, field)=>(acc[field] = field, acc), {});
}
function parsePreview(preview) {
    if (!preview) return preview;
    const select = preview.select || preview.fields || {};
    return Array.isArray(select) ? __spreadProps$4(__spreadValues$6({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview, [
        "prepare",
        "component"
    ])), {
        select: parseSelection(select)
    }) : __spreadProps$4(__spreadValues$6({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview, [
        "prepare",
        "component"
    ])), {
        select
    });
}
function createPreviewGetter(objectTypeDef) {
    return function() {
        return warnIfPreviewOnOptions(objectTypeDef), warnIfPreviewHasFields(objectTypeDef), parsePreview(objectTypeDef.preview || (objectTypeDef.options || {}).preview) || guessPreviewFields(objectTypeDef);
    };
}
const DEFAULT_LINK_ANNOTATION = {
    type: "object",
    name: "link",
    title: "Link",
    i18nTitleKey: "inputs.portable-text.annotation.link",
    options: {
        modal: {
            type: "popover"
        }
    },
    fields: [
        {
            name: "href",
            type: "url",
            title: "Link",
            description: "A valid web, email, phone, or relative link.",
            validation: (Rule)=>Rule.uri({
                    scheme: [
                        "http",
                        "https",
                        "tel",
                        "mailto"
                    ],
                    allowRelative: !0
                })
        }
    ]
}, DEFAULT_TEXT_FIELD = {
    type: "text",
    name: "text",
    title: "Text"
}, DEFAULT_MARKS_FIELD = {
    name: "marks",
    type: "array",
    of: [
        {
            type: "string"
        }
    ],
    title: "Marks"
}, LIST_TYPES = {
    bullet: {
        title: "Bulleted list",
        value: "bullet",
        i18nTitleKey: "inputs.portable-text.list-type.bullet"
    },
    numbered: {
        title: "Numbered list",
        value: "number",
        i18nTitleKey: "inputs.portable-text.list-type.number"
    }
}, DEFAULT_LIST_TYPES = [
    LIST_TYPES.bullet,
    LIST_TYPES.numbered
], BLOCK_STYLES = {
    normal: {
        title: "Normal",
        value: "normal",
        i18nTitleKey: "inputs.portable-text.style.normal"
    },
    h1: {
        title: "Heading 1",
        value: "h1",
        i18nTitleKey: "inputs.portable-text.style.h1"
    },
    h2: {
        title: "Heading 2",
        value: "h2",
        i18nTitleKey: "inputs.portable-text.style.h2"
    },
    h3: {
        title: "Heading 3",
        value: "h3",
        i18nTitleKey: "inputs.portable-text.style.h3"
    },
    h4: {
        title: "Heading 4",
        value: "h4",
        i18nTitleKey: "inputs.portable-text.style.h4"
    },
    h5: {
        title: "Heading 5",
        value: "h5",
        i18nTitleKey: "inputs.portable-text.style.h5"
    },
    h6: {
        title: "Heading 6",
        value: "h6",
        i18nTitleKey: "inputs.portable-text.style.h6"
    },
    blockquote: {
        title: "Quote",
        value: "blockquote",
        i18nTitleKey: "inputs.portable-text.style.quote"
    }
}, DEFAULT_BLOCK_STYLES = [
    BLOCK_STYLES.normal,
    BLOCK_STYLES.h1,
    BLOCK_STYLES.h2,
    BLOCK_STYLES.h3,
    BLOCK_STYLES.h4,
    BLOCK_STYLES.h5,
    BLOCK_STYLES.h6,
    BLOCK_STYLES.blockquote
], DECORATOR_STRONG = {
    title: "Strong",
    value: "strong",
    i18nTitleKey: "inputs.portable-text.decorator.strong"
}, DECORATOR_EMPHASIS = {
    title: "Italic",
    value: "em",
    i18nTitleKey: "inputs.portable-text.decorator.emphasis"
}, DECORATOR_CODE = {
    title: "Code",
    value: "code",
    i18nTitleKey: "inputs.portable-text.decorator.code"
}, DECORATOR_UNDERLINE = {
    title: "Underline",
    value: "underline",
    i18nTitleKey: "inputs.portable-text.decorator.underline"
}, DECORATOR_STRIKE = {
    title: "Strike",
    value: "strike-through",
    i18nTitleKey: "inputs.portable-text.decorator.strike-through"
}, DECORATORS = {
    strong: DECORATOR_STRONG,
    em: DECORATOR_EMPHASIS,
    code: DECORATOR_CODE,
    underline: DECORATOR_UNDERLINE,
    strikeThrough: DECORATOR_STRIKE
}, DEFAULT_DECORATORS = [
    DECORATORS.strong,
    DECORATORS.em,
    DECORATORS.code,
    DECORATORS.underline,
    DECORATORS.strikeThrough
];
var __defProp$6 = Object.defineProperty, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __defNormalProp$6 = (obj, key, value)=>key in obj ? __defProp$6(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(b))__propIsEnum$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    return a;
}, __objRest$6 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(source))exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const INHERITED_FIELDS$1 = [
    "type",
    "name",
    "title",
    "jsonType",
    "description",
    "options",
    "fieldsets",
    "icon"
], BLOCK_CORE = {
    name: "block",
    title: "Block",
    type: null,
    jsonType: "object"
}, DEFAULT_OPTIONS$3 = {}, BlockType = {
    get () {
        return BLOCK_CORE;
    },
    extend (subTypeDef, extendMember) {
        const options = __spreadValues$5({}, subTypeDef.options || DEFAULT_OPTIONS$3), _a = subTypeDef, { marks, styles, lists, of } = _a, rest = __objRest$6(_a, [
            "marks",
            "styles",
            "lists",
            "of"
        ]), childrenField = createChildrenField(marks, of), styleField = createStyleField(styles), listItemField = createListItemField(lists), markDefsField = {
            name: "markDefs",
            title: "Mark definitions",
            type: "array",
            of: (marks == null ? void 0 : marks.annotations) || DEFAULT_ANNOTATIONS
        }, fields = [
            childrenField,
            styleField,
            listItemField,
            markDefsField,
            {
                name: "level",
                title: "Indentation",
                type: "number"
            }
        ].concat(subTypeDef.fields || []), parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(BLOCK_CORE, INHERITED_FIELDS$1), rest, {
            type: BLOCK_CORE,
            options
        });
        return lazyGetter(parsed, "fields", ()=>fields.map((fieldDef)=>{
                const _a2 = fieldDef, { name } = _a2, type = __objRest$6(_a2, [
                    "name"
                ]);
                return {
                    name,
                    type: extendMember(type)
                };
            })), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.fields) throw new Error('Cannot override `fields` of subtypes of "block"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, INHERITED_FIELDS$1), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
function ensureNormalStyle(styles) {
    return styles.some((style)=>style.value === "normal") ? styles : [
        BLOCK_STYLES.normal,
        ...styles
    ];
}
function createStyleField(styles) {
    return {
        name: "style",
        title: "Style",
        type: "string",
        options: {
            list: ensureNormalStyle(styles || DEFAULT_BLOCK_STYLES)
        }
    };
}
function createListItemField(lists) {
    return {
        name: "listItem",
        title: "List type",
        type: "string",
        options: {
            list: lists || DEFAULT_LIST_TYPES
        }
    };
}
const DEFAULT_ANNOTATIONS = [
    DEFAULT_LINK_ANNOTATION
];
function createChildrenField(marks, of = []) {
    return {
        name: "children",
        title: "Content",
        type: "array",
        of: [
            {
                type: "span",
                fields: [
                    DEFAULT_TEXT_FIELD,
                    DEFAULT_MARKS_FIELD
                ],
                annotations: marks && marks.annotations ? marks.annotations : DEFAULT_ANNOTATIONS,
                decorators: marks && marks.decorators ? marks.decorators : DEFAULT_DECORATORS
            },
            ...of.filter((memberType)=>memberType.type !== "span")
        ]
    };
}
var __defProp$5 = Object.defineProperty, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key, value)=>key in obj ? __defProp$5(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$4 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(b))__propIsEnum$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
}, __objRest$5 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(source))exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const INHERITED_FIELDS = [
    "type",
    "name",
    "title",
    "jsonType",
    "description",
    "options",
    "fieldsets",
    "icon"
], SPAN_CORE = {
    name: "span",
    title: "Span",
    type: null,
    jsonType: "object"
}, MARKS_FIELD = {
    name: "marks",
    title: "Marks",
    type: "array",
    of: [
        {
            type: "string"
        }
    ]
}, TEXT_FIELD = {
    name: "text",
    title: "Text",
    type: "string"
}, DEFAULT_OPTIONS$2 = {}, SpanType = {
    get () {
        return SPAN_CORE;
    },
    extend (subTypeDef, extendMember) {
        const options = __spreadValues$4({}, subTypeDef.options || DEFAULT_OPTIONS$2), { annotations = [], marks = [] } = subTypeDef, fields = [
            MARKS_FIELD,
            TEXT_FIELD
        ], parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(SPAN_CORE, INHERITED_FIELDS), subTypeDef, {
            type: SPAN_CORE,
            options
        });
        return lazyGetter(parsed, "fields", ()=>fields.map((fieldDef)=>{
                const _a = fieldDef, { name } = _a, type = __objRest$5(_a, [
                    "name"
                ]);
                return {
                    name,
                    type: extendMember(type)
                };
            })), lazyGetter(parsed, "annotations", ()=>annotations.map(extendMember)), lazyGetter(parsed, "marks", ()=>marks.map(extendMember)), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.fields) throw new Error('Cannot override `fields` of subtypes of "span"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, INHERITED_FIELDS), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
var primitivePreview = {
    prepare: (val)=>({
            title: String(val)
        })
};
const OVERRIDABLE_FIELDS$c = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], BOOLEAN_CORE = {
    name: "boolean",
    title: "Boolean",
    type: null,
    jsonType: "boolean"
}, BooleanType = {
    get () {
        return BOOLEAN_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(BOOLEAN_CORE, OVERRIDABLE_FIELDS$c), subTypeDef, {
            type: BOOLEAN_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$c), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
var __defProp$4 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (obj, key, value)=>key in obj ? __defProp$4(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$3 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(b))__propIsEnum$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    return a;
}, __spreadProps$3 = (a, b)=>__defProps$3(a, __getOwnPropDescs$3(b)), __objRest$4 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(source))exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const REF_FIELD$1 = {
    name: "_ref",
    title: "Referenced document ID",
    type: "string"
}, WEAK_FIELD$1 = {
    name: "_weak",
    title: "Weak reference marker",
    type: "boolean"
}, DATASET_FIELD = {
    name: "_dataset",
    title: "Target dataset",
    type: "string"
}, PROJECT_ID_FIELD = {
    name: "_projectId",
    title: "Target project ID",
    type: "string",
    hidden: !0
}, REFERENCE_FIELDS$1 = [
    REF_FIELD$1,
    WEAK_FIELD$1,
    DATASET_FIELD,
    PROJECT_ID_FIELD
], OVERRIDABLE_FIELDS$b = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], CROSS_DATASET_REFERENCE_CORE = {
    name: "crossDatasetReference",
    type: null,
    jsonType: "object"
};
function humanize$1(arr, conjunction) {
    const len = arr.length;
    if (len === 1) return arr[0];
    const first = arr.slice(0, len - 1), last = arr[len - 1];
    return `${first.join(", ")} ${conjunction} ${last}`;
}
function buildTitle$1(type) {
    return !type.to || type.to.length === 0 ? "Cross dataset Reference" : `Cross dataset reference to ${humanize$1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type.to).map((toType)=>toType.title || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(toType.type)), "or").toLowerCase()}`;
}
const CrossDatasetReferenceType = {
    get () {
        return CROSS_DATASET_REFERENCE_CORE;
    },
    extend (subTypeDef, createMemberType) {
        if (!subTypeDef.to) throw new Error(`Missing "to" field in cross dataset reference definition. Check the type ${subTypeDef.name}`);
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CROSS_DATASET_REFERENCE_CORE, OVERRIDABLE_FIELDS$b), subTypeDef, {
            type: CROSS_DATASET_REFERENCE_CORE
        });
        return lazyGetter(parsed, "fields", ()=>REFERENCE_FIELDS$1.map((fieldDef)=>{
                const _a = fieldDef, { name } = _a, type = __objRest$4(_a, [
                    "name"
                ]);
                return {
                    name,
                    type: createMemberType(type)
                };
            })), lazyGetter(parsed, "to", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.to).map((toType)=>__spreadProps$3(__spreadValues$3({}, toType), {
                    // eslint-disable-next-line camelcase
                    __experimental_search: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$_chunks$2d$es$2f$resolve$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSearchConfigForBaseFieldPaths"])(toType)
                }))), lazyGetter(parsed, "title", ()=>subTypeDef.title || buildTitle$1(parsed)), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.of) throw new Error('Cannot override `of` of subtypes of "reference"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$b), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS$a = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], DATE_CORE = {
    name: "date",
    title: "Datetime",
    type: null,
    jsonType: "string"
}, DateType = {
    get () {
        return DATE_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(DATE_CORE, OVERRIDABLE_FIELDS$a), subTypeDef, {
            type: DATE_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$a), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS$9 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], DATETIME_CORE = {
    name: "datetime",
    title: "Datetime",
    type: null,
    jsonType: "string"
}, DateTimeType = {
    get () {
        return DATETIME_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(DATETIME_CORE, OVERRIDABLE_FIELDS$9), subTypeDef, {
            type: DATETIME_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$9), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, CANDIDATES = [
    "title",
    "name",
    "label",
    "heading",
    "header",
    "caption",
    "description"
], PRIMITIVES = [
    "string",
    "boolean",
    "number"
], isPrimitive = (field)=>PRIMITIVES.includes(field.type);
function guessOrderingConfig(objectTypeDef) {
    let candidates = CANDIDATES.filter((candidate)=>objectTypeDef.fields.some((field)=>isPrimitive(field) && field.name === candidate));
    return candidates.length === 0 && (candidates = objectTypeDef.fields.filter(isPrimitive).map((field)=>field.name)), candidates.map((name)=>({
            name,
            i18n: {
                title: {
                    key: `default-orderings.${name}`,
                    ns: "studio"
                }
            },
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name)),
            by: [
                {
                    field: name,
                    direction: "asc"
                }
            ]
        }));
}
function normalizeSearchConfigs(configs) {
    if (!Array.isArray(configs)) throw new Error("The search config of a document type must be an array of search config objects");
    return configs.map((conf)=>{
        if (conf === "defaults") return conf;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(conf)) throw new Error("Search config must be an object of {path: string, weight: number}");
        return {
            weight: "weight" in conf ? conf.weight : 1,
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$toPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(conf.path),
            mapWith: typeof conf.mapWith == "string" ? conf.mapWith : void 0
        };
    });
}
var __defProp$3 = Object.defineProperty, __defProps$2 = Object.defineProperties, __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (obj, key, value)=>key in obj ? __defProp$3(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$2 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    if (__getOwnPropSymbols$3) for (var prop of __getOwnPropSymbols$3(b))__propIsEnum$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    return a;
}, __spreadProps$2 = (a, b)=>__defProps$2(a, __getOwnPropDescs$2(b)), __objRest$3 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$3) for (var prop of __getOwnPropSymbols$3(source))exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const OVERRIDABLE_FIELDS$8 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS,
    "orderings",
    "__experimental_search",
    "blockEditor",
    "icon"
], ObjectType = {
    get () {
        return {
            name: "object",
            title: "Object",
            type: null,
            jsonType: "object"
        };
    },
    extend (rawSubTypeDef, createMemberType) {
        const subTypeDef = __spreadValues$2({
            fields: []
        }, rawSubTypeDef), options = __spreadValues$2({}, subTypeDef.options || {}), parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.get(), OVERRIDABLE_FIELDS$8), subTypeDef, {
            type: this.get(),
            title: subTypeDef.title || (subTypeDef.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.name) : "Object"),
            options,
            orderings: subTypeDef.orderings || guessOrderingConfig(subTypeDef),
            fields: subTypeDef.fields.map((fieldDef)=>{
                const _a = fieldDef, { name, fieldset, group } = _a, rest = __objRest$3(_a, [
                    "name",
                    "fieldset",
                    "group"
                ]);
                return lazyGetter({
                    name,
                    group,
                    fieldset
                }, "type", ()=>createMemberType(__spreadProps$2(__spreadValues$2({}, rest), {
                        title: fieldDef.title || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name)
                    })));
            })
        });
        return lazyGetter(parsed, "fieldsets", ()=>createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "groups", ()=>createFieldsGroups(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), lazyGetter(parsed, "__experimental_search", ()=>{
            const userProvidedSearchConfig = subTypeDef.__experimental_search ? normalizeSearchConfigs(subTypeDef.__experimental_search) : null;
            return userProvidedSearchConfig ? userProvidedSearchConfig.map((entry)=>entry === "defaults" ? normalizeSearchConfigs(subTypeDef) : entry) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$_chunks$2d$es$2f$resolve$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSearchConfig"])(parsed);
        }, {
            enumerable: !1
        }), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.fields) throw new Error('Cannot override `fields` of subtypes of "object"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$8), {
                        title: extensionDef.title || subTypeDef.title || (subTypeDef.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.name) : "Object"),
                        type: parent
                    });
                    return lazyGetter(current, "__experimental_search", ()=>parent.__experimental_search), subtype(current);
                }
            };
        }
    }
};
function createFieldsets(typeDef, fields) {
    const fieldsetsByName = {};
    for (const fieldset of typeDef.fieldsets || []){
        if (fieldsetsByName[fieldset.name]) throw new Error(`Duplicate fieldset name "${fieldset.name}" found for type '${typeDef.title ? typeDef.title : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.name)}'`);
        fieldsetsByName[fieldset.name] = __spreadProps$2(__spreadValues$2({
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fieldset.name)
        }, fieldset), {
            fields: []
        });
    }
    const fieldsets = /* @__PURE__ */ new Set();
    for (const field of fields){
        if (!field.fieldset) {
            fieldsets.add({
                single: !0,
                field
            });
            continue;
        }
        const fieldset = fieldsetsByName[field.fieldset];
        if (!fieldset) throw new Error(`Fieldset '${field.fieldset}' is not defined in schema for type '${typeDef.name}'`);
        fieldset.fields.push(field), fieldsets.add(fieldset);
    }
    return Array.from(fieldsets);
}
function createFieldsGroups(typeDef, fields) {
    const groupsByName = {};
    let numDefaultGroups = 0;
    for (const group of typeDef.groups || []){
        if (groupsByName[group.name]) throw new Error(`Duplicate group name "${group.name}" found for type '${typeDef.title ? typeDef.title : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.name)}'`);
        if (groupsByName[group.name] = __spreadProps$2(__spreadValues$2({
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(group.name)
        }, group), {
            fields: []
        }), group.default && ++numDefaultGroups > 1) throw new Error(`More than one field group defined as default for type '${typeDef.title ? typeDef.title : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.name)}' - only 1 is supported`);
    }
    return fields.forEach((field)=>{
        const fieldGroupNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$castArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(field.group || []);
        fieldGroupNames.length !== 0 && fieldGroupNames.forEach((fieldGroupName)=>{
            const currentGroup = groupsByName[fieldGroupName];
            if (!currentGroup) throw new Error(`Field group '${fieldGroupName}' is not defined in schema for type '${typeDef.title ? typeDef.name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.name)}'`);
            currentGroup.fields.push(field);
        });
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(groupsByName).filter((group)=>group.fields.length > 0);
}
const DOCUMENT_CORE = {
    name: "document",
    title: "Document",
    type: null,
    jsonType: "object"
}, DocumentType = {
    get () {
        return DOCUMENT_CORE;
    },
    extend: ObjectType.extend
}, OVERRIDABLE_FIELDS$7 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], EMAIL_CORE = {
    name: "email",
    title: "Email",
    type: null,
    jsonType: "string"
}, EmailType = {
    get () {
        return EMAIL_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(EMAIL_CORE, OVERRIDABLE_FIELDS$7), subTypeDef, {
            type: EMAIL_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$7), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
var __defProp$2 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (obj, key, value)=>key in obj ? __defProp$2(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$1 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b))__propIsEnum$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    return a;
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b)), __objRest$2 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(source))exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const ASSET_FIELD$1 = {
    name: "asset",
    type: "reference",
    to: {
        type: "sanity.fileAsset"
    }
}, OVERRIDABLE_FIELDS$6 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], FILE_CORE = {
    name: "file",
    title: "File",
    type: null,
    jsonType: "object"
}, DEFAULT_OPTIONS$1 = {
    accept: ""
}, FileType = {
    get () {
        return FILE_CORE;
    },
    extend (rawSubTypeDef, createMemberType) {
        const options = __spreadValues$1({}, rawSubTypeDef.options || DEFAULT_OPTIONS$1), fields = [
            ASSET_FIELD$1,
            ...rawSubTypeDef.fields || []
        ], subTypeDef = __spreadProps$1(__spreadValues$1({}, rawSubTypeDef), {
            fields
        }), parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(FILE_CORE, OVERRIDABLE_FIELDS$6), subTypeDef, {
            type: FILE_CORE,
            title: subTypeDef.title || (subTypeDef.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.name) : FILE_CORE.title),
            options,
            fields: subTypeDef.fields.map((fieldDef)=>{
                const _a = fieldDef, { name, fieldset } = _a, rest = __objRest$2(_a, [
                    "name",
                    "fieldset"
                ]), compiledField = {
                    name,
                    fieldset,
                    isCustomized: !!rawSubTypeDef.fields
                };
                return lazyGetter(compiledField, "type", ()=>createMemberType(__spreadProps$1(__spreadValues$1({}, rest), {
                        title: fieldDef.title || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name)
                    })));
            })
        });
        return lazyGetter(parsed, "fieldsets", ()=>createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(Object.assign({}, subTypeDef, {
            fields
        }))), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.fields) throw new Error('Cannot override `fields` of subtypes of "file"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$6), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, ASSET_FIELD = {
    name: "asset",
    type: "reference",
    to: [
        {
            type: "sanity.imageAsset"
        }
    ]
}, HOTSPOT_FIELD = {
    name: "hotspot",
    type: "sanity.imageHotspot"
}, CROP_FIELD = {
    name: "crop",
    type: "sanity.imageCrop"
};
var __defProp$1 = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b))__propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b)), __objRest$1 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(source))exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const OVERRIDABLE_FIELDS$5 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], IMAGE_CORE = {
    name: "image",
    title: "Image",
    type: null,
    jsonType: "object"
}, DEFAULT_OPTIONS = {}, ImageType = {
    get () {
        return IMAGE_CORE;
    },
    extend (rawSubTypeDef, createMemberType) {
        const options = __spreadValues({}, rawSubTypeDef.options || DEFAULT_OPTIONS);
        let hotspotFields = [
            HOTSPOT_FIELD,
            CROP_FIELD
        ];
        options.hotspot || (hotspotFields = hotspotFields.map((field)=>__spreadProps(__spreadValues({}, field), {
                hidden: !0
            })));
        const fields = [
            ASSET_FIELD,
            ...hotspotFields,
            ...rawSubTypeDef.fields || []
        ], subTypeDef = __spreadProps(__spreadValues({}, rawSubTypeDef), {
            fields
        }), parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.get(), OVERRIDABLE_FIELDS$5), subTypeDef, {
            type: IMAGE_CORE,
            title: subTypeDef.title || (subTypeDef.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.name) : IMAGE_CORE.title),
            options,
            fields: subTypeDef.fields.map((fieldDef)=>{
                const _a = fieldDef, { name, fieldset } = _a, rest = __objRest$1(_a, [
                    "name",
                    "fieldset"
                ]), compiledField = {
                    name,
                    fieldset,
                    isCustomized: !!rawSubTypeDef.fields
                };
                return lazyGetter(compiledField, "type", ()=>createMemberType(__spreadProps(__spreadValues({}, rest), {
                        title: fieldDef.title || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name)
                    })));
            })
        });
        return lazyGetter(parsed, "fieldsets", ()=>createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(Object.assign({}, subTypeDef, {
            fields
        }))), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.fields) throw new Error('Cannot override `fields` of subtypes of "image"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$5), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS$4 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], NUMBER_CORE = {
    name: "number",
    title: "Number",
    type: null,
    jsonType: "number"
}, NumberType = {
    get () {
        return NUMBER_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(NUMBER_CORE, OVERRIDABLE_FIELDS$4), subTypeDef, {
            type: NUMBER_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$4), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
var __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source))exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const REF_FIELD = {
    name: "_ref",
    title: "Referenced document ID",
    type: "string"
}, WEAK_FIELD = {
    name: "_weak",
    title: "Weak reference",
    type: "boolean"
}, REFERENCE_FIELDS = [
    REF_FIELD,
    WEAK_FIELD
], OVERRIDABLE_FIELDS$3 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], REFERENCE_CORE = {
    name: "reference",
    title: "Reference",
    type: null,
    jsonType: "object"
};
function humanize(arr, conjunction) {
    const len = arr.length;
    if (len === 1) return arr[0];
    const first = arr.slice(0, len - 1), last = arr[len - 1];
    return `${first.join(", ")} ${conjunction} ${last}`;
}
function buildTitle(type) {
    return !type.to || type.to.length === 0 ? "Reference" : `Reference to ${humanize((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type.to).map((toType)=>toType.title), "or").toLowerCase()}`;
}
const ReferenceType = {
    get () {
        return REFERENCE_CORE;
    },
    extend (subTypeDef, createMemberType) {
        if (!subTypeDef.to) throw new Error(`Missing "to" field in reference definition. Check the type ${subTypeDef.name}`);
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(REFERENCE_CORE, OVERRIDABLE_FIELDS$3), subTypeDef, {
            type: REFERENCE_CORE
        });
        return lazyGetter(parsed, "fields", ()=>REFERENCE_FIELDS.map((fieldDef)=>{
                const _a = fieldDef, { name } = _a, type = __objRest(_a, [
                    "name"
                ]);
                return {
                    name,
                    type: createMemberType(type)
                };
            })), lazyGetter(parsed, "fieldsets", ()=>createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "to", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arrify$40$1$2e$0$2e$1$2f$node_modules$2f$arrify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subTypeDef.to).map((toType)=>createMemberType(toType))), lazyGetter(parsed, "title", ()=>subTypeDef.title || buildTitle(parsed)), subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    if (extensionDef.of) throw new Error('Cannot override `of` of subtypes of "reference"');
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$3), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS$2 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], STRING_CORE = {
    name: "string",
    title: "String",
    type: null,
    jsonType: "string"
}, StringType = {
    get () {
        return STRING_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(STRING_CORE, OVERRIDABLE_FIELDS$2), subTypeDef, {
            type: STRING_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$2), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS$1 = [
    ...DEFAULT_OVERRIDEABLE_FIELDS,
    "rows"
], TEXT_CORE = {
    name: "text",
    title: "Text",
    type: null,
    jsonType: "string"
}, TextType = {
    get () {
        return TEXT_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(TEXT_CORE, OVERRIDABLE_FIELDS$1), subTypeDef, {
            type: TEXT_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS$1), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
}, OVERRIDABLE_FIELDS = [
    ...DEFAULT_OVERRIDEABLE_FIELDS
], URL_CORE = {
    name: "url",
    title: "Url",
    type: null,
    jsonType: "string"
}, UrlType = {
    get () {
        return URL_CORE;
    },
    extend (subTypeDef) {
        const parsed = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(URL_CORE, OVERRIDABLE_FIELDS), subTypeDef, {
            type: URL_CORE,
            preview: primitivePreview
        });
        return subtype(parsed);
        "TURBOPACK unreachable";
        function subtype(parent) {
            return {
                get () {
                    return parent;
                },
                extend: (extensionDef)=>{
                    const current = Object.assign({}, parent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(extensionDef, OVERRIDABLE_FIELDS), {
                        type: parent
                    });
                    return subtype(current);
                }
            };
        }
    }
};
var types = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    any: AnyType,
    array: ArrayType,
    block: BlockType,
    boolean: BooleanType,
    crossDatasetReference: CrossDatasetReferenceType,
    date: DateType,
    datetime: DateTimeType,
    document: DocumentType,
    email: EmailType,
    file: FileType,
    image: ImageType,
    number: NumberType,
    object: ObjectType,
    reference: ReferenceType,
    span: SpanType,
    string: StringType,
    text: TextType,
    url: UrlType
}), __defProp = Object.defineProperty, __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value);
function compileRegistry(schemaDef) {
    const registry = Object.assign(/* @__PURE__ */ Object.create(null), types), defsByName = schemaDef.types.reduce((acc, def)=>{
        if (acc[def.name]) throw new Error(`Duplicate type name added to schema: ${def.name}`);
        return acc[def.name] = def, acc;
    }, {});
    return schemaDef.types.forEach(add), registry;
    "TURBOPACK unreachable";
    function ensure(typeName) {
        if (!registry[typeName]) {
            if (!defsByName[typeName]) throw new Error(`Unknown type: ${typeName}`);
            add(defsByName[typeName]);
        }
    }
    function extendMember(memberDef) {
        return ensure(memberDef.type), registry[memberDef.type].extend(memberDef, extendMember).get();
    }
    function add(typeDef) {
        ensure(typeDef.type), !registry[typeDef.name] && (registry[typeDef.name] = registry[typeDef.type].extend(typeDef, extendMember));
    }
}
let Schema$1 = class Schema {
    constructor(schemaDef){
        __publicField(this, "_original"), __publicField(this, "_registry"), this._original = schemaDef, this._registry = compileRegistry(schemaDef);
    }
    static compile(schemaDef) {
        return new Schema(schemaDef);
    }
    get name() {
        return this._original.name;
    }
    get(name) {
        return this._registry[name] && this._registry[name].get();
    }
    has(name) {
        return name in this._registry;
    }
    getTypeNames() {
        return Object.keys(this._registry);
    }
};
class DeprecatedDefaultSchema extends Schema$1 {
    static compile(schemaDef) {
        return new DeprecatedDefaultSchema(schemaDef);
    }
    constructor(schemaDef){
        super(schemaDef);
        const stack = new Error('The default export of `@sanity/schema` is deprecated. Use `import {Schema} from "@sanity/schema"` instead.').stack.replace(/^Error/, "Warning");
        console.warn(stack);
    }
}
const Schema2 = Schema$1;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@sanity+schema@3.67.1_debug@4.4.0/node_modules/@sanity/schema/lib/_internal.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "extractSchema": (()=>extractSchema),
    "groupProblems": (()=>groupProblems),
    "isActionEnabled": (()=>isActionEnabled),
    "validateSchema": (()=>validateSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$js$40$1$2e$14$2e$2$2f$node_modules$2f$groq$2d$js$2f$dist$2f$1$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/groq-js@1.14.2/node_modules/groq-js/dist/1.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/humanize-list@1.0.1/node_modules/humanize-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/partition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$leven$40$3$2e$1$2e$0$2f$node_modules$2f$leven$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/leven@3.1.0/node_modules/leven/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/object-inspect@1.13.3/node_modules/object-inspect/index.js [app-client] (ecmascript)");
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
const ACTIONS_FLAG = "__experimental_actions", DEFAULT_ACTIONS = [
    "create",
    "update",
    "delete",
    "publish"
], VALID_ACTIONS = DEFAULT_ACTIONS, readActions = (schemaType)=>ACTIONS_FLAG in schemaType ? schemaType[ACTIONS_FLAG] : DEFAULT_ACTIONS, validateActions = (typeName, actions)=>{
    if (!Array.isArray(actions)) throw new Error(`The value of <type>.${ACTIONS_FLAG} should be an array with any of the actions ${VALID_ACTIONS.join(", ")}`);
    const invalid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(actions, VALID_ACTIONS);
    if (invalid.length > 0) throw new Error(`Invalid action${invalid.length > 1 ? "s" : ""} configured for schema type "${typeName}": ${invalid.join(", ")}. Valid actions are: ${VALID_ACTIONS.join(", ")}`);
    return actions;
}, resolveEnabledActions = (schemaType)=>validateActions(schemaType.name, readActions(schemaType)), isActionEnabled = (schemaType, action)=>resolveEnabledActions(schemaType).includes(action);
var __defProp$b = Object.defineProperty, __getOwnPropSymbols$b = Object.getOwnPropertySymbols, __hasOwnProp$b = Object.prototype.hasOwnProperty, __propIsEnum$b = Object.prototype.propertyIsEnumerable, __defNormalProp$b = (obj, key, value)=>key in obj ? __defProp$b(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$b = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$b.call(b, prop) && __defNormalProp$b(a, prop, b[prop]);
    if (__getOwnPropSymbols$b) for (var prop of __getOwnPropSymbols$b(b))__propIsEnum$b.call(b, prop) && __defNormalProp$b(a, prop, b[prop]);
    return a;
};
const documentDefaultFields = (typeName)=>({
        _id: {
            type: "objectAttribute",
            value: {
                type: "string"
            }
        },
        _type: {
            type: "objectAttribute",
            value: {
                type: "string",
                value: typeName
            }
        },
        _createdAt: {
            type: "objectAttribute",
            value: {
                type: "string"
            }
        },
        _updatedAt: {
            type: "objectAttribute",
            value: {
                type: "string"
            }
        },
        _rev: {
            type: "objectAttribute",
            value: {
                type: "string"
            }
        }
    }), typesMap = /* @__PURE__ */ new Map([
    [
        "text",
        {
            type: "string"
        }
    ],
    [
        "url",
        {
            type: "string"
        }
    ],
    [
        "datetime",
        {
            type: "string"
        }
    ],
    [
        "date",
        {
            type: "string"
        }
    ],
    [
        "boolean",
        {
            type: "boolean"
        }
    ],
    [
        "email",
        {
            type: "string"
        }
    ]
]);
function extractSchema(schemaDef, extractOptions = {}) {
    const inlineFields = /* @__PURE__ */ new Set(), documentTypes = /* @__PURE__ */ new Map(), schema = [];
    sortByDependencies(schemaDef).forEach((typeName)=>{
        const schemaType = schemaDef.get(typeName);
        if (schemaType === void 0) return;
        const base = convertBaseType(schemaType);
        base !== null && (base.type === "type" && inlineFields.add(schemaType), base.type === "document" && documentTypes.set(typeName, base), schema.push(base));
    });
    function convertBaseType(schemaType) {
        let typeName;
        if (schemaType.type ? typeName = schemaType.type.name : "jsonType" in schemaType && (typeName = schemaType.jsonType), typeName === "document" && isObjectType(schemaType)) {
            const defaultAttributes = documentDefaultFields(schemaType.name), object2 = createObject(schemaType);
            return object2.type === "unknown" ? null : {
                name: schemaType.name,
                type: "document",
                attributes: __spreadValues$b(__spreadValues$b({}, defaultAttributes), object2.attributes)
            };
        }
        const value = convertSchemaType(schemaType);
        return value.type === "unknown" ? null : value.type === "object" ? {
            name: schemaType.name,
            type: "type",
            value: {
                type: "object",
                attributes: __spreadValues$b({
                    _type: {
                        type: "objectAttribute",
                        value: {
                            type: "string",
                            value: schemaType.name
                        }
                    }
                }, value.attributes)
            }
        } : {
            name: schemaType.name,
            type: "type",
            value
        };
    }
    function convertSchemaType(schemaType) {
        var _a, _b, _c;
        if (inlineFields.has(schemaType.type)) return {
            type: "inline",
            name: schemaType.type.name
        };
        if (((_b = (_a = schemaType.type) == null ? void 0 : _a.type) == null ? void 0 : _b.name) === "object") return {
            type: "inline",
            name: schemaType.type.name
        };
        if (isStringType(schemaType)) return createStringTypeNodeDefintion(schemaType);
        if (isNumberType(schemaType)) return createNumberTypeNodeDefintion(schemaType);
        if (schemaType.type && typesMap.has(schemaType.type.name)) return typesMap.get(schemaType.type.name);
        if (isCrossDatasetReferenceType(schemaType)) return {
            type: "unknown"
        };
        if (isReferenceType(schemaType)) return createReferenceTypeNodeDefintion(schemaType);
        if (isArrayType(schemaType)) return createArray(schemaType);
        if (isObjectType(schemaType)) return createObject(schemaType);
        if (((_c = lastType(schemaType)) == null ? void 0 : _c.name) === "document") {
            const doc = documentTypes.get(schemaType.name);
            return doc === void 0 ? {
                type: "unknown"
            } : {
                type: "object",
                attributes: doc == null ? void 0 : doc.attributes
            };
        }
        throw new Error(`Type "${schemaType.name}" not found`);
    }
    function createObject(schemaType) {
        var _a;
        const attributes = {}, fields = gatherFields(schemaType);
        for (const field of fields){
            const fieldIsRequired = isFieldRequired(field), value = convertSchemaType(field.type);
            if (value === null) continue;
            hasAssetRequired(field) && value.type === "object" && (value.attributes.asset.optional = !1);
            const optional = extractOptions.enforceRequiredFields ? fieldIsRequired === !1 : !0;
            attributes[field.name] = {
                type: "objectAttribute",
                value,
                optional
            };
        }
        return Object.keys(attributes).length === 0 ? {
            type: "unknown"
        } : (((_a = schemaType.type) == null ? void 0 : _a.name) !== "document" && schemaType.name !== "object" && (attributes._type = {
            type: "objectAttribute",
            value: {
                type: "string",
                value: schemaType.name
            }
        }), {
            type: "object",
            attributes
        });
    }
    function createArray(arraySchemaType) {
        const of = [];
        for (const item of arraySchemaType.of){
            const field = convertSchemaType(item);
            field.type === "inline" ? of.push({
                type: "object",
                attributes: {
                    _key: createKeyField()
                },
                rest: field
            }) : (field.type === "object" && (field.rest = {
                type: "object",
                attributes: {
                    _key: createKeyField()
                }
            }), of.push(field));
        }
        return of.length === 0 ? {
            type: "null"
        } : {
            type: "array",
            of: of.length > 1 ? {
                type: "union",
                of
            } : of[0]
        };
    }
    return schema;
}
function createKeyField() {
    return {
        type: "objectAttribute",
        value: {
            type: "string"
        }
    };
}
function isFieldRequired(field) {
    const { validation } = field.type;
    if (!validation) return !1;
    const rules = Array.isArray(validation) ? validation : [
        validation
    ];
    for (const rule of rules){
        let required = !1;
        const proxy = new Proxy({}, {
            get: (target, methodName)=>()=>(methodName === "required" && (required = !0), proxy)
        });
        if (typeof rule == "function" && (rule(proxy), required) || typeof rule == "object" && rule !== null && "_required" in rule && rule._required === "required") return !0;
    }
    return !1;
}
function hasAssetRequired(field) {
    const { validation } = field.type;
    if (!validation) return !1;
    const rules = Array.isArray(validation) ? validation : [
        validation
    ];
    for (const rule of rules){
        let assetRequired = !1;
        const proxy = new Proxy({}, {
            get: (target, methodName)=>()=>(methodName === "assetRequired" && (assetRequired = !0), proxy)
        });
        if (typeof rule == "function" && (rule(proxy), assetRequired) || typeof rule == "object" && rule !== null && "_rules" in rule && Array.isArray(rule._rules) && rule._rules.some((r)=>r.flag === "assetRequired")) return !0;
    }
    return !1;
}
function isObjectType(typeDef) {
    return isType(typeDef, "object") || typeDef.jsonType === "object" || "fields" in typeDef;
}
function isArrayType(typeDef) {
    return isType(typeDef, "array");
}
function isReferenceType(typeDef) {
    return isType(typeDef, "reference");
}
function isCrossDatasetReferenceType(typeDef) {
    return isType(typeDef, "crossDatasetReference");
}
function isStringType(typeDef) {
    return isType(typeDef, "string");
}
function isNumberType(typeDef) {
    return isType(typeDef, "number");
}
function createStringTypeNodeDefintion(stringSchemaType) {
    var _a;
    const listOptions = (_a = stringSchemaType.options) == null ? void 0 : _a.list;
    return listOptions && Array.isArray(listOptions) ? {
        type: "union",
        of: listOptions.map((v)=>({
                type: "string",
                value: typeof v == "string" ? v : v.value
            }))
    } : {
        type: "string"
    };
}
function createNumberTypeNodeDefintion(numberSchemaType) {
    var _a;
    const listOptions = (_a = numberSchemaType.options) == null ? void 0 : _a.list;
    return listOptions && Array.isArray(listOptions) ? {
        type: "union",
        of: listOptions.map((v)=>({
                type: "number",
                value: typeof v == "number" ? v : v.value
            }))
    } : {
        type: "number"
    };
}
function createReferenceTypeNodeDefintion(reference2) {
    const references = gatherReferenceNames(reference2);
    return references.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$js$40$1$2e$14$2e$2$2f$node_modules$2f$groq$2d$js$2f$dist$2f$1$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createReferenceTypeNode"])(references[0]) : {
        type: "union",
        of: references.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$groq$2d$js$40$1$2e$14$2e$2$2f$node_modules$2f$groq$2d$js$2f$dist$2f$1$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createReferenceTypeNode"])(name))
    };
}
function gatherReferenceNames(type) {
    const allReferences = gatherReferenceTypes(type);
    return [
        .../* @__PURE__ */ new Set([
            ...allReferences.map((ref)=>ref.name)
        ])
    ];
}
function gatherReferenceTypes(type) {
    const refTo = "to" in type ? type.to : [];
    return "type" in type && isReferenceType(type.type) ? [
        ...gatherReferenceTypes(type.type),
        ...refTo
    ] : refTo;
}
function gatherFields(type) {
    return "fields" in type ? type.type ? gatherFields(type.type).concat(type.fields) : type.fields : [];
}
function isType(typeDef, typeName) {
    let type = typeDef;
    for(; type;){
        if (type.name === typeName || type.type && type.type.name === typeName) return !0;
        type = type.type;
    }
    return !1;
}
function lastType(typeDef) {
    let type = typeDef;
    for(; type;){
        if (!type.type) return type;
        type = type.type;
    }
}
function sortByDependencies(compiledSchema) {
    const seen = /* @__PURE__ */ new Set();
    function walkDependencies(schemaType, dependencies) {
        if (!seen.has(schemaType)) {
            if (seen.add(schemaType), "fields" in schemaType) for (const field of gatherFields(schemaType)){
                const last = lastType(field.type);
                if (last.name === "document") {
                    dependencies.add(last);
                    continue;
                }
                let schemaTypeName;
                schemaType.type.type ? schemaTypeName = field.type.type.name : "jsonType" in schemaType.type && (schemaTypeName = field.type.jsonType), (schemaTypeName === "object" || schemaTypeName === "block") && (isReferenceType(field.type) ? field.type.to.forEach((ref)=>dependencies.add(ref.type)) : dependencies.add(field.type)), walkDependencies(field.type, dependencies);
            }
            else if ("of" in schemaType) for (const item of schemaType.of)walkDependencies(item, dependencies);
        }
    }
    const dependencyMap = /* @__PURE__ */ new Map();
    compiledSchema.getTypeNames().forEach((typeName)=>{
        const schemaType = compiledSchema.get(typeName);
        if (schemaType === void 0 || schemaType.type === null) return;
        const dependencies = /* @__PURE__ */ new Set();
        walkDependencies(schemaType, dependencies), dependencyMap.set(schemaType, dependencies), seen.clear();
    });
    const typeNames = [], currentlyVisiting = /* @__PURE__ */ new Set(), visited = /* @__PURE__ */ new Set();
    function visit(type) {
        if (visited.has(type) || currentlyVisiting.has(type)) return;
        currentlyVisiting.add(type);
        const deps = dependencyMap.get(type);
        deps !== void 0 && deps.forEach((dep)=>visit(dep)), currentlyVisiting.delete(type), visited.add(type), typeNames.includes(type.name) || typeNames.unshift(type.name);
    }
    for (const [type] of dependencyMap)visit(type);
    return typeNames;
}
const HELP_IDS = {
    TYPE_INVALID: "schema-type-invalid",
    TYPE_IS_ESM_MODULE: "schema-type-is-esm-module",
    TYPE_NAME_RESERVED: "schema-type-name-reserved",
    TYPE_MISSING_NAME: "schema-type-missing-name-or-type",
    TYPE_MISSING_TYPE: "schema-type-missing-name-or-type",
    TYPE_TITLE_RECOMMENDED: "schema-type-title-is-recommended",
    TYPE_TITLE_INVALID: "schema-type-title-is-recommended",
    OBJECT_FIELDS_INVALID: "schema-object-fields-invalid",
    OBJECT_FIELD_NOT_UNIQUE: "schema-object-fields-invalid",
    OBJECT_FIELD_NAME_INVALID: "schema-object-fields-invalid",
    OBJECT_FIELD_DEFINITION_INVALID_TYPE: "schema-object-fields-invalid",
    ARRAY_PREDEFINED_CHOICES_INVALID: "schema-predefined-choices-invalid",
    ARRAY_OF_ARRAY: "schema-array-of-array",
    ARRAY_OF_INVALID: "schema-array-of-invalid",
    ARRAY_OF_NOT_UNIQUE: "schema-array-of-invalid",
    ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT: "schema-array-of-type-global-type-conflict",
    ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT: "schema-array-of-type-builtin-type-conflict",
    REFERENCE_TO_INVALID: "schema-reference-to-invalid",
    REFERENCE_TO_NOT_UNIQUE: "schema-reference-to-invalid",
    REFERENCE_INVALID_OPTIONS: "schema-reference-invalid-options",
    REFERENCE_INVALID_OPTIONS_LOCATION: "schema-reference-options-nesting",
    REFERENCE_INVALID_FILTER_PARAMS_COMBINATION: "schema-reference-filter-params-combination",
    SLUG_SLUGIFY_FN_RENAMED: "slug-slugifyfn-renamed",
    ASSET_METADATA_FIELD_INVALID: "asset-metadata-field-invalid",
    CROSS_DATASET_REFERENCE_INVALID: "cross-dataset-reference-invalid",
    DEPRECATED_BLOCKEDITOR_KEY: "schema-deprecated-blockeditor-key",
    STANDALONE_BLOCK_TYPE: "schema-standalone-block-type"
};
function createValidationResult(severity, message, helpId) {
    if (helpId && !Object.keys(HELP_IDS).some((id)=>HELP_IDS[id] === helpId)) throw new Error(`Used the unknown helpId "${helpId}", please add it to the array in createValidationResult.js`);
    return {
        severity,
        message,
        helpId
    };
}
const error = (message, helpId)=>createValidationResult("error", message, helpId), warning = (message, helpId)=>createValidationResult("warning", message, helpId);
function groupProblems(types) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(types.map((type)=>getTypeProblems(type))).filter((type)=>type.problems.length > 0);
}
function createTypeWithMembersProblemsAccessor(memberPropertyName, getMembers = (type)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(type, memberPropertyName)) {
    return function(type, parentPath) {
        const currentPath = [
            ...parentPath,
            {
                kind: "type",
                type: type.type,
                name: type.name
            }
        ], members = getMembers(type) || [], memberProblems = Array.isArray(members) ? members.map((memberType)=>{
            const propertySegment = {
                kind: "property",
                name: memberPropertyName
            }, memberPath = [
                ...currentPath,
                propertySegment
            ];
            return getTypeProblems(memberType, memberPath);
        }) : [
            [
                {
                    path: currentPath,
                    problems: [
                        error(`Member declaration (${memberPropertyName}) is not an array`)
                    ]
                }
            ]
        ];
        return [
            {
                path: currentPath,
                problems: type._problems || []
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(memberProblems)
        ];
    };
}
const arrify = (val)=>Array.isArray(val) ? val : typeof val > "u" && [] || [
        val
    ], getObjectProblems = createTypeWithMembersProblemsAccessor("fields"), getImageProblems = createTypeWithMembersProblemsAccessor("fields"), getFileProblems = createTypeWithMembersProblemsAccessor("fields"), getArrayProblems = createTypeWithMembersProblemsAccessor("of"), getReferenceProblems = createTypeWithMembersProblemsAccessor("to", (type)=>"to" in type ? arrify(type.to) : []), getBlockAnnotationProblems = createTypeWithMembersProblemsAccessor("marks.annotations"), getBlockMemberProblems = createTypeWithMembersProblemsAccessor("of"), getBlockProblems = (type, problems)=>[
        ...getBlockAnnotationProblems(type, problems),
        ...getBlockMemberProblems(type, problems)
    ];
function getDefaultProblems(type, path = []) {
    return [
        {
            path: [
                ...path,
                {
                    kind: "type",
                    type: type.type,
                    name: type.name
                }
            ],
            problems: type._problems || []
        }
    ];
}
function getTypeProblems(type, path = []) {
    switch(type.type){
        case "object":
            return getObjectProblems(type, path);
        case "document":
            return getObjectProblems(type, path);
        case "array":
            return getArrayProblems(type, path);
        case "reference":
            return getReferenceProblems(type, path);
        case "block":
            return getBlockProblems(type, path);
        case "image":
            return getImageProblems(type, path);
        case "file":
            return getFileProblems(type, path);
        default:
            return getDefaultProblems(type, path);
    }
}
function getDupes(array2, selector = (v)=>v) {
    const dupes = array2.reduce((acc, item)=>{
        const key = selector(item);
        return acc[key] || (acc[key] = []), acc[key].push(item), acc;
    }, {});
    return Object.keys(dupes).map((key)=>dupes[key].length > 1 ? dupes[key] : null).filter(Boolean);
}
const NOOP_VISITOR = (typeDef)=>typeDef, TYPE_TYPE = {
    name: "type",
    type: null
}, FUTURE_RESERVED = [
    "any",
    "time",
    "date"
];
function traverseSchema(types = [], coreTypes2 = [], visitor = NOOP_VISITOR) {
    const coreTypesRegistry = /* @__PURE__ */ Object.create(null), registry = /* @__PURE__ */ Object.create(null), coreTypeNames2 = coreTypes2.map((typeDef)=>typeDef.name), reservedTypeNames = FUTURE_RESERVED.concat(coreTypeNames2), typeNames = types.map((typeDef)=>typeDef && typeDef.name).filter(Boolean);
    coreTypes2.forEach((coreType)=>{
        coreTypesRegistry[coreType.name] = coreType;
    }), types.forEach((type, i)=>{
        registry[type && type.name || `__unnamed_${i}`] = {};
    });
    function getType(typeName) {
        return typeName === "type" ? TYPE_TYPE : coreTypesRegistry[typeName] || registry[typeName] || null;
    }
    const duplicateNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getDupes(typeNames)));
    function isDuplicate(typeName) {
        return duplicateNames.includes(typeName);
    }
    function getTypeNames() {
        return typeNames.concat(coreTypeNames2);
    }
    function isReserved(typeName) {
        return typeName === "type" || reservedTypeNames.includes(typeName);
    }
    const visitType = (isRoot)=>(typeDef, index)=>visitor(typeDef, {
                visit: visitType(!1),
                isRoot,
                getType,
                getTypeNames,
                isReserved,
                isDuplicate,
                index
            });
    return coreTypes2.forEach((coreTypeDef)=>{
        Object.assign(coreTypesRegistry[coreTypeDef.name], visitType(coreTypeDef));
    }), types.forEach((typeDef, i)=>{
        Object.assign(registry[typeDef && typeDef.name || `__unnamed_${i}`], visitType(!0)(typeDef, i));
    }), {
        get (typeName) {
            const res = registry[typeName] || coreTypesRegistry[typeName];
            if (res) return res;
            throw new Error(`No such type: ${typeName}`);
        },
        has (typeName) {
            return typeName in registry || typeName in coreTypesRegistry;
        },
        getTypeNames () {
            return Object.keys(registry);
        },
        getTypes () {
            return this.getTypeNames().map(this.get);
        },
        toJSON () {
            return this.getTypes();
        }
    };
}
const coreTypes = [
    {
        name: "array",
        jsonType: "array",
        type: "type"
    },
    {
        name: "block",
        jsonType: "object",
        type: "type"
    },
    {
        name: "boolean",
        jsonType: "boolean",
        type: "type"
    },
    {
        name: "datetime",
        jsonType: "string",
        type: "type"
    },
    {
        name: "date",
        jsonType: "string",
        type: "type"
    },
    {
        name: "document",
        jsonType: "object",
        type: "type"
    },
    {
        name: "email",
        jsonType: "string",
        type: "type"
    },
    {
        name: "file",
        jsonType: "object",
        type: "type"
    },
    {
        name: "geopoint",
        jsonType: "object",
        type: "type"
    },
    {
        name: "image",
        jsonType: "object",
        type: "type"
    },
    {
        name: "number",
        jsonType: "number",
        type: "type"
    },
    {
        name: "object",
        jsonType: "object",
        type: "type"
    },
    {
        name: "reference",
        jsonType: "object",
        type: "type"
    },
    {
        name: "crossDatasetReference",
        jsonType: "object",
        type: "type"
    },
    {
        name: "slug",
        jsonType: "object",
        type: "type"
    },
    {
        name: "span",
        jsonType: "object",
        type: "type"
    },
    {
        name: "string",
        jsonType: "string",
        type: "type"
    },
    {
        name: "telephone",
        jsonType: "string",
        type: "type"
    },
    {
        name: "text",
        jsonType: "string",
        type: "type"
    },
    {
        name: "url",
        jsonType: "string",
        type: "type"
    }
], coreTypeNames = coreTypes.map((t)=>t.name);
function traverseSanitySchema(schemaTypes, visitor) {
    return traverseSchema(schemaTypes, coreTypes, visitor);
}
var __defProp$a = Object.defineProperty, __defProps$a = Object.defineProperties, __getOwnPropDescs$a = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$a = Object.getOwnPropertySymbols, __hasOwnProp$a = Object.prototype.hasOwnProperty, __propIsEnum$a = Object.prototype.propertyIsEnumerable, __defNormalProp$a = (obj, key, value)=>key in obj ? __defProp$a(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$a = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    if (__getOwnPropSymbols$a) for (var prop of __getOwnPropSymbols$a(b))__propIsEnum$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    return a;
}, __spreadProps$a = (a, b)=>__defProps$a(a, __getOwnPropDescs$a(b));
function isPrimitiveTypeName(typeName) {
    return typeName === "string" || typeName === "number" || typeName === "boolean";
}
function isAssignable(typeName, type) {
    return (typeof type.name == "string" ? type.name : type.type) === typeName;
}
function quote$2(n) {
    return `"${n}"`;
}
function pluralize(arr, suf = "s") {
    return arr.length === 1 ? "" : suf;
}
function format(value) {
    return Array.isArray(value) ? `array with ${value.length} entries` : typeof value == "object" && value !== null ? `object with keys ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.keys(value).map(quote$2))}` : quote$2(value);
}
var array = (typeDef, visitorContext)=>{
    var _a, _b, _c;
    const ofIsArray = Array.isArray(typeDef.of);
    if (ofIsArray) {
        const invalid = typeDef.of.reduce((errs, def, idx)=>{
            if (typeof def.name == "string" && // specifying the same name as the type is redundant, but should not be a hard error at this point
            // Consider showing a warning for this and deprecate this ability eventually
            def.name !== def.type && coreTypeNames.includes(def.name)) return errs.concat(error(`Found array member declaration with the same type name as a built-in type ("${def.name}"). Array members can not be given the same name as a built-in type.`, HELP_IDS.ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT));
            if (def.type === "object" && def.name && visitorContext.getType(def.name)) return errs.concat(warning(`Found array member declaration with the same name as the global schema type "${def.name}". It's recommended to use a unique name to avoid possibly incompatible data types that shares the same name.`, HELP_IDS.ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT));
            if (def.type === "array") return errs.concat(error('Found array member declaration of type "array" - multidimensional arrays are not currently supported by Sanity', HELP_IDS.ARRAY_OF_ARRAY));
            if (def) return errs;
            const err = `Found ${def === null ? "null" : typeof def}, expected member declaration`;
            return errs.concat(error(`Found invalid type member declaration in array at index ${idx}: ${err}`, HELP_IDS.ARRAY_OF_INVALID));
        }, []);
        if (invalid.length > 0) return __spreadProps$a(__spreadValues$a({}, typeDef), {
            of: [],
            _problems: invalid
        });
    }
    const problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        ofIsArray ? getDupes(typeDef.of, (t)=>`${t.name};${t.type}`).map((dupes)=>error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in array. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.ARRAY_OF_NOT_UNIQUE)) : error('The array type is missing or having an invalid value for the required "of" property', HELP_IDS.ARRAY_OF_INVALID)
    ]), of = ofIsArray ? typeDef.of : [], hasObjectTypesWithoutName = of.some((type)=>type.type === "object" && typeof type.name > "u");
    of.some((ofType)=>ofType.type === "block") && hasObjectTypesWithoutName && problems.push(error("The array type's 'of' property can't have an object type without a 'name' property as member, when the 'block' type is also a member of that array.", HELP_IDS.ARRAY_OF_INVALID));
    const [primitiveTypes, objectTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(of, (ofType)=>{
        var _a2;
        return isPrimitiveTypeName(ofType.type) || isPrimitiveTypeName((_a2 = visitorContext.getType(ofType.type)) == null ? void 0 : _a2.jsonType);
    }), isMixedArray = primitiveTypes.length > 0 && objectTypes.length > 0;
    if (isMixedArray) {
        const primitiveTypeNames = primitiveTypes.map((t)=>t.type), objectTypeNames = objectTypes.map((t)=>t.type);
        problems.push(error(`The array type's 'of' property can't have both object types and primitive types (found primitive type ${pluralize(primitiveTypeNames)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(primitiveTypeNames.map(quote$2))} and object type${pluralize(objectTypeNames)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(objectTypeNames.map(quote$2))})`, HELP_IDS.ARRAY_OF_INVALID));
    }
    const list = (_a = typeDef == null ? void 0 : typeDef.options) == null ? void 0 : _a.list;
    return !isMixedArray && Array.isArray(list) && (primitiveTypes.length > 0 ? list.forEach((option)=>{
        var _a2;
        const value = (_a2 = option == null ? void 0 : option.value) != null ? _a2 : option;
        if (!primitiveTypes.some((primitiveType)=>typeof value === visitorContext.getType(primitiveType.type).jsonType)) {
            const formattedTypeList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(primitiveTypes.map((t)=>t.name || t.type), {
                conjunction: "or"
            });
            problems.push(error(`An invalid entry found in options.list: ${format(value)}. Must be either a value of type ${formattedTypeList}, or an object with {title: string, value: ${formattedTypeList}}`, HELP_IDS.ARRAY_PREDEFINED_CHOICES_INVALID));
        }
    }) : list.forEach((option)=>{
        const optionTypeName = option._type || "object";
        objectTypes.some((validObjectType)=>isAssignable(optionTypeName, validObjectType)) || problems.push(error(`An invalid entry found in options.list: ${format(option)}. Must be an object with "_type" set to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(objectTypes.map((t)=>t.name || t.type).map((t)=>t === "object" ? "undefined" : quote$2(t)), {
            conjunction: "or"
        })}`, HELP_IDS.ARRAY_PREDEFINED_CHOICES_INVALID));
    })), (_b = typeDef == null ? void 0 : typeDef.options) != null && _b.list && ((_c = typeDef == null ? void 0 : typeDef.options) == null ? void 0 : _c.layout) === "tags" && problems.push(warning("Found array member declaration with both tags layout and a list of predefined values. If you want to display a list of predefined values, remove the tags layout from `options`.")), __spreadProps$a(__spreadValues$a({}, typeDef), {
        of: of.map(visitorContext.visit),
        _problems: problems
    });
};
function isJSONTypeOf(type, jsonType, visitorContext) {
    if ("jsonType" in type) return type.jsonType === jsonType;
    const parentType = visitorContext.getType(type.type);
    if (!parentType) throw new Error(`Could not resolve jsonType of ${type.name}. No parent type found`);
    return isJSONTypeOf(parentType, jsonType, visitorContext);
}
var __defProp$9 = Object.defineProperty, __defProps$9 = Object.defineProperties, __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$9 = Object.getOwnPropertySymbols, __hasOwnProp$9 = Object.prototype.hasOwnProperty, __propIsEnum$9 = Object.prototype.propertyIsEnumerable, __defNormalProp$9 = (obj, key, value)=>key in obj ? __defProp$9(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$9 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    if (__getOwnPropSymbols$9) for (var prop of __getOwnPropSymbols$9(b))__propIsEnum$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    return a;
}, __spreadProps$9 = (a, b)=>__defProps$9(a, __getOwnPropDescs$9(b));
const getTypeOf = (thing)=>Array.isArray(thing) ? "array" : typeof thing, quote$1 = (str)=>`"${str}"`, allowedKeys = [
    "components",
    "lists",
    "marks",
    "name",
    "of",
    "options",
    "styles",
    "title",
    "type",
    "validation"
], allowedMarkKeys = [
    "decorators",
    "annotations"
], allowedStyleKeys = [
    "blockEditor",
    "title",
    "value",
    "icon",
    "component"
], allowedDecoratorKeys = [
    "blockEditor",
    "title",
    "value",
    "icon",
    "component"
], allowedListKeys = [
    "title",
    "value",
    "icon",
    "component"
], supportedBuiltInObjectTypes = [
    "file",
    "image",
    "object",
    "reference"
];
function validateBlockType(typeDef, visitorContext) {
    const problems = [];
    let styles = typeDef.styles, lists = typeDef.lists, marks = typeDef.marks, members = typeDef.of;
    const disallowedKeys = Object.keys(typeDef).filter((key)=>!allowedKeys.includes(key) && !key.startsWith("_"));
    return disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for block declaration: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(disallowedKeys.map(quote$1))}`)), marks && (marks = validateMarks(typeDef.marks, visitorContext, problems)), styles && (styles = validateStyles(styles, visitorContext, problems)), lists && (lists = validateLists(lists, visitorContext, problems)), members && (members = validateMembers(members, visitorContext, problems)), __spreadProps$9(__spreadValues$9({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef, disallowedKeys)), {
        marks,
        styles,
        name: typeDef.name || typeDef.type,
        of: members,
        _problems: problems
    });
}
function validateMarks(marks, visitorContext, problems) {
    let decorators = marks.decorators, annotations = marks.annotations;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(marks)) return problems.push(error(`"marks" declaration should be an object, got ${getTypeOf(marks)}`)), problems;
    const disallowedMarkKeys = Object.keys(marks).filter((key)=>!allowedMarkKeys.includes(key) && !key.startsWith("_"));
    return disallowedMarkKeys.length > 0 && problems.push(error(`Found unknown properties for block declaration: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(disallowedMarkKeys.map(quote$1))}`)), decorators && !Array.isArray(decorators) ? problems.push(error(`"marks.decorators" declaration should be an array, got ${getTypeOf(decorators)}`)) : decorators && (decorators.filter((dec)=>!!dec.blockEditor).forEach((dec)=>{
        dec.icon = dec.blockEditor.icon, dec.component = dec.blockEditor.render;
    }), decorators = validateDecorators(decorators, visitorContext, problems)), annotations && !Array.isArray(annotations) ? problems.push(error(`"marks.annotations" declaration should be an array, got ${getTypeOf(annotations)}`)) : annotations && (annotations = validateAnnotations(annotations, visitorContext, problems)), __spreadProps$9(__spreadValues$9({}, marks), {
        decorators,
        annotations
    });
}
function validateLists(lists, visitorContext, problems) {
    return Array.isArray(lists) ? (lists.forEach((list, index)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(list)) {
            problems.push(error(`List must be an object, got ${getTypeOf(list)}`));
            return;
        }
        const name = list.value || `#${index}`, disallowedKeys = Object.keys(list).filter((key)=>!allowedListKeys.includes(key) && !key.startsWith("_"));
        disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for list ${name}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(disallowedKeys.map(quote$1))}`)), list.value ? typeof list.value != "string" ? problems.push(error(`List type #${index} has an invalid "value" property, expected string, got ${getTypeOf(list.value)}`)) : list.title || problems.push(warning(`List type ${name} is missing recommended "title" property`)) : problems.push(error(`List #${index} is missing required "value" property`));
    }), lists) : (problems.push(error(`"lists" declaration should be an array, got ${getTypeOf(lists)}`)), problems);
}
function validateStyles(styles, visitorContext, problems) {
    return Array.isArray(styles) ? (styles.forEach((style, index)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(style)) {
            problems.push(error(`Style must be an object, got ${getTypeOf(style)}`));
            return;
        }
        const name = style.value || `#${index}`, disallowedKeys = Object.keys(style).filter((key)=>!allowedStyleKeys.includes(key) && !key.startsWith("_"));
        disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for style ${name}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(disallowedKeys.map(quote$1))}`)), style.value ? typeof style.value != "string" ? problems.push(error(`Style #${index} has an invalid "value" property, expected string, got ${getTypeOf(style.value)}`)) : style.title || problems.push(warning(`Style ${name} is missing recommended "title" property`)) : problems.push(error(`Style #${index} is missing required "value" property`)), typeof style.blockEditor < "u" && (problems.push(warning('Style has deprecated key "blockEditor", please refer to the documentation on how to configure the block type for version 3.', HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), style.component = style.component || style.blockEditor.render);
    }), styles) : (problems.push(error(`"styles" declaration should be an array, got ${getTypeOf(styles)}`)), problems);
}
function validateDecorators(decorators, visitorContext, problems) {
    return decorators.forEach((decorator, index)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(decorator)) {
            problems.push(error(`Annotation must be an object, got ${getTypeOf(decorator)}`));
            return;
        }
        const name = decorator.value || `#${index}`, disallowedKeys = Object.keys(decorator).filter((key)=>!allowedDecoratorKeys.includes(key) && !key.startsWith("_"));
        disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for decorator ${name}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(disallowedKeys.map(quote$1))}`)), decorator.value ? typeof decorator.value != "string" ? problems.push(error(`Decorator #${index} has an invalid "value" property, expected string, got ${getTypeOf(decorator.value)}`)) : decorator.title || problems.push(warning(`Decorator ${name} is missing recommended "title" property`)) : problems.push(error(`Decorator #${index} is missing required "value" property`)), typeof decorator.blockEditor < "u" && (problems.push(warning(`Decorator "${name}" has deprecated key "blockEditor", please refer to the documentation on how to configure the block type for version 3.`, HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), decorator.icon = decorator.icon || decorator.blockEditor.icon, decorator.component = decorator.component || decorator.blockEditor.render);
    }), decorators;
}
function validateAnnotations(annotations, visitorContext, problems) {
    return annotations.map((annotation)=>{
        var _a, _b;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(annotation)) return __spreadProps$9(__spreadValues$9({}, annotation), {
            _problems: [
                error(`Annotation must be an object, got ${getTypeOf(annotation)}`)
            ]
        });
        const { _problems } = visitorContext.visit(annotation, visitorContext), targetType = annotation.type && visitorContext.getType(annotation.type);
        return targetType && !isJSONTypeOf(targetType, "object", visitorContext) && _problems.push(error(`Annotation cannot have type "${annotation.type}" - annotation types must inherit from object`)), typeof annotation.blockEditor < "u" && (problems.push(warning('Annotation has deprecated key "blockEditor", please refer to the documentation on how to configure the block type for version 3.', HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), annotation.icon = annotation.icon || annotation.blockEditor.icon, (_a = annotation.blockEditor) != null && _a.render && !((_b = annotation.components) != null && _b.annotation) && (annotation.components = annotation.components || {}, annotation.components.annotation = annotation.components.annotation || annotation.blockEditor.render)), __spreadProps$9(__spreadValues$9({}, annotation), {
            _problems
        });
    });
}
function validateMembers(members, visitorContext, problems) {
    if (!Array.isArray(members)) {
        problems.push(error(`"of" declaration should be an array, got ${getTypeOf(members)}`));
        return;
    }
    return members.map((member)=>{
        const { _problems } = visitorContext.visit(member, visitorContext);
        if (member.type === "object" && member.name && visitorContext.getType(member.name)) return __spreadProps$9(__spreadValues$9({}, member), {
            _problems: [
                warning(`Found array member declaration with the same name as the global schema type "${member.name}". It's recommended to use a unique name to avoid possibly incompatible data types that shares the same name.`, HELP_IDS.ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT)
            ]
        });
        let type = member;
        for(; type && !type.jsonType;)type = visitorContext.getType(type.type);
        const nonObjectCoreTypes = coreTypeNames.filter((n)=>!supportedBuiltInObjectTypes.includes(n));
        return(// Must be object-like type (to validate hoisted types)
        type && type.jsonType !== "object" || // Can't be a core type, or core object type that isn't supported (like 'span')
        nonObjectCoreTypes.some((coreName)=>coreName === member.type) ? __spreadProps$9(__spreadValues$9({}, member), {
            _problems: [
                error(`Block member types must be a supported object-like type. The following built-in types are supported: '${supportedBuiltInObjectTypes.join("', '")}'. You can also use shorthands for previously defined object types like {type: 'myObjectType'}`, HELP_IDS.ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT)
            ]
        }) : __spreadProps$9(__spreadValues$9({}, member), {
            _problems
        }));
    });
}
function validateNonObjectFieldsProp(typeDef, visitorContext) {
    if (!("fields" in typeDef)) return [];
    let type = typeDef;
    for(; type && !type.jsonType;)type = visitorContext.getType(type.type);
    return type && type.jsonType !== "object" ? [
        error('Type has propery "fields", but is not an object/document type.')
    ] : [];
}
const quote = (str)=>`"${str}"`;
function validateTypeName(typeName, visitorContext) {
    const possibleTypeNames = visitorContext.getTypeNames();
    if (!typeName) return [
        error("Type is missing a type.", HELP_IDS.TYPE_MISSING_TYPE)
    ];
    if (typeof typeName != "string") return [
        error('Type has an invalid "type"-property - should be a string.', HELP_IDS.TYPE_MISSING_TYPE)
    ];
    if (!possibleTypeNames.includes(typeName)) {
        const suggestions = possibleTypeNames.map((possibleTypeName)=>[
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$leven$40$3$2e$1$2e$0$2f$node_modules$2f$leven$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeName, possibleTypeName),
                possibleTypeName
            ]).filter(([distance])=>distance < 3).map(([_, name])=>name), suggestion = suggestions.length > 0 ? ` Did you mean ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$humanize$2d$list$40$1$2e$0$2e$1$2f$node_modules$2f$humanize$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(suggestions.map(quote), {
            conjunction: "or"
        })}?` : "";
        return [
            error(`Unknown type: ${typeName}.${suggestion}`)
        ];
    }
    return [];
}
function validateDeprecatedProperties(type) {
    var _a, _b, _c;
    const warnings = [];
    return type != null && type.inputComponent && warnings.push(warning('The "inputComponent" property is deprecated. Use "components.input" instead.')), (_a = type == null ? void 0 : type.preview) != null && _a.component && warnings.push(warning('The "preview.component" property is deprecated. Use "components.preview" instead.')), type != null && type.diffComponent && warnings.push(warning('The "diffComponent" property is deprecated. Use "components.diff" instead.')), (_b = type == null ? void 0 : type.options) != null && _b.editModal && warnings.push(warning('The "options.editModal" property is deprecated. Use "options.modal" instead.')), (_c = type == null ? void 0 : type.options) != null && _c.isHighlighted && warnings.push(warning('The "options.isHighlighted" property is deprecated. You can put fields behind a collapsed fieldset if you want to hide them from plain sight.')), warnings;
}
var __defProp$8 = Object.defineProperty, __defProps$8 = Object.defineProperties, __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$8 = Object.getOwnPropertySymbols, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __propIsEnum$8 = Object.prototype.propertyIsEnumerable, __defNormalProp$8 = (obj, key, value)=>key in obj ? __defProp$8(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$8 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(b))__propIsEnum$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    return a;
}, __spreadProps$8 = (a, b)=>__defProps$8(a, __getOwnPropDescs$8(b)), common = (typeDef, visitorContext)=>__spreadProps$8(__spreadValues$8({}, typeDef), {
        _problems: [
            ...validateTypeName(typeDef.type, visitorContext),
            ...validateNonObjectFieldsProp(typeDef, visitorContext),
            ...validateDeprecatedProperties(typeDef)
        ].filter(Boolean)
    }), __defProp$7 = Object.defineProperty, __defProps$7 = Object.defineProperties, __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$7 = (obj, key, value)=>key in obj ? __defProp$7(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$7 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(b))__propIsEnum$7.call(b, prop) && __defNormalProp$7(a, prop, b[prop]);
    return a;
}, __spreadProps$7 = (a, b)=>__defProps$7(a, __getOwnPropDescs$7(b));
function normalizeToProp$1(typeDef) {
    return Array.isArray(typeDef.to) ? typeDef.to : typeDef.to ? [
        typeDef.to
    ] : typeDef.to;
}
const VALID_DATASET = /^[a-z0-9~][-_a-z0-9]+$/;
function isValidDatasetName(name) {
    return name.length >= 2 && name.toLowerCase() === name && VALID_DATASET.test(name) || `The provided dataset "${name}" doesn't look like a valid dataset. Dataset names must be more than 2 characters, can only contain lowercase characters, numbers, underscores and dashes and can not start with a dash or an underscore`;
}
var crossDatasetReference = (typeDef, visitorContext)=>{
    const isValidTo = Array.isArray(typeDef.to) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.to), normalizedTo = normalizeToProp$1(typeDef), problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        isValidTo ? getDupes(normalizedTo, (t)=>`${t.name};${t.type}`).map((dupes)=>error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in reference. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)) : error('The cross dataset reference type is missing or having an invalid value for the required "to" property. It should be an array of accepted types.', HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)
    ]);
    if (isValidTo && normalizedTo.length === 0 && problems.push(error('The cross dataset reference type should define at least one referenced type. Please check the "to" property.', HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), normalizedTo.forEach((crossDatasetTypeDef, index)=>{
        crossDatasetTypeDef.type || problems.push(error(`The referenced type at index ${index} must be named. Specify the name of the type you want to create references to.`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(crossDatasetTypeDef.preview) || problems.push(error(`Missing required preview config for the referenced type "${crossDatasetTypeDef.type || "<unknown type>"}"`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
    }), typeof typeDef.dataset == "string") {
        const datasetValidation = isValidDatasetName(typeDef.dataset);
        datasetValidation !== !0 && problems.push(error(datasetValidation, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
    } else problems.push(error("A cross dataset reference must specify a `dataset`", HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
    return typeDef.studioUrl && typeof typeDef.studioUrl != "function" && problems.push(error('The "studioUrl" property on a cross dataset reference must be a function taking "{id, type}" as argument and returning a studio url.', HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), problems.push(...getOptionErrors$1(typeDef)), __spreadProps$7(__spreadValues$7({}, typeDef), {
        _problems: problems
    });
};
function getOptionErrors$1(typeDef) {
    const { options } = typeDef, problems = [];
    return problems.push(...[
        "filter",
        "filterParams"
    ].filter((key)=>key in typeDef).map((key)=>error(`\`${key}\` is not allowed on a reference type definition - did you mean \`options.${key}\`?`, HELP_IDS.REFERENCE_INVALID_OPTIONS_LOCATION))), options ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options) ? typeof options.filter == "function" && typeof options.filterParams < "u" ? problems.concat(error("`filterParams` cannot be used if `filter` is a function. Either statically define `filter` as a string, or return `params` from the `filter`-function.", HELP_IDS.REFERENCE_INVALID_FILTER_PARAMS_COMBINATION)) : typeof options.filter == "function" || !options.filter && !options.filterParams ? problems : typeof options.filter != "string" ? problems.concat(error(`If set, \`filter\` must be a string. Got ${typeof options.filter}`)) : typeof options.filterParams < "u" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options.filterParams) ? problems.concat(error("If set, `filterParams` must be an object.")) : options.filterParams ? problems.concat(Object.keys(options.filterParams).filter((key)=>key.startsWith("__") || key.startsWith("$")).map((key)=>error(`Filter parameter cannot be prefixed with "$" or "__". Got ${key}".`))) : problems : problems.concat(error("The reference type expects `options` to be an object", HELP_IDS.REFERENCE_INVALID_OPTIONS)) : problems;
}
const REACT_SYM_RE = /^Symbol\(react\..+\)$/;
function isComponentLike(value) {
    return typeof value == "function" || typeof (value == null ? void 0 : value.$$typeof) == "symbol" && REACT_SYM_RE.test(String(value == null ? void 0 : value.$$typeof));
}
function validateComponent(typeDef) {
    const components = "components" in typeDef ? typeDef.components : !1;
    if (!components) return [];
    const warnings = [];
    return components.input && !isComponentLike(components.input) && warnings.push(warning(`The \`components.input\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(components.input)}). If you have imported a custom input component, please verify that you have imported the correct named/default export.`)), components.field && !isComponentLike(components.field) && warnings.push(warning(`The \`components.field\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(components.field)}). If you have imported a custom field component, please verify that you have imported the correct named/default export.`)), components.item && !isComponentLike(components.item) && warnings.push(warning(`The \`components.item\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(components.item)}). If you have imported a custom item component, please verify that you have imported the correct named/default export.`)), components.preview && !isComponentLike(components.preview) && warnings.push(warning(`The \`components.preview\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(components.preview)}). If you have imported a custom preview component, please verify that you have imported the correct named/default export.`)), warnings;
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
}, __spreadProps$6 = (a, b)=>__defProps$6(a, __getOwnPropDescs$6(b)), __objRest$2 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(source))exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const VALID_FIELD_RE = /^[A-Za-z]+[0-9A-Za-z_]*$/, CONVENTIONAL_FIELD_RE = /^[A-Za-z_]+[0-9A-Za-z_]*$/;
function validateFieldName(name) {
    return typeof name != "string" ? [
        error(`Field names must be strings. Saw "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name)}"`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)
    ] : name.startsWith("_") ? [
        error(`Invalid field name "${name}". Field names cannot start with underscores "_" as it's reserved for system fields.`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)
    ] : VALID_FIELD_RE.test(name) ? CONVENTIONAL_FIELD_RE.test(name) ? [] : [
        warning("Thats an interesting field name for sure! But it is... how to put it... a bit... unconventional? It may be wise to keep special characters out of field names for easier access later on."),
        HELP_IDS.OBJECT_FIELD_NAME_INVALID
    ] : [
        error(`Invalid field name: "${name}". Fields can only contain characters from A-Z, numbers and underscores and should not start with a number (must pass the regular expression ${String(VALID_FIELD_RE)}).`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)
    ];
}
function validateField(field, _visitorContext) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(field)) return [
        error(`Incorrect type for field definition - should be an object, saw ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$object$2d$inspect$40$1$2e$13$2e$3$2f$node_modules$2f$object$2d$inspect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(field)}`, HELP_IDS.OBJECT_FIELD_DEFINITION_INVALID_TYPE)
    ];
    const problems = [];
    return problems.push(..."name" in field ? validateFieldName(field.name) : [
        error("Missing field name", HELP_IDS.OBJECT_FIELD_NAME_INVALID)
    ]), problems.push(...validateComponent(field)), problems;
}
function getDuplicateFields(array2) {
    const dupes = {};
    return array2.forEach((field)=>{
        dupes[field.name] || (dupes[field.name] = []), dupes[field.name].push(field);
    }), Object.keys(dupes).map((fieldName)=>dupes[fieldName].length > 1 ? dupes[fieldName] : null).filter(Boolean);
}
function validateFields(fields, options = {
    allowEmpty: !1
}) {
    const problems = [];
    if (!Array.isArray(fields)) return [
        error(`The "fields" property must be an array of fields. Instead saw "${typeof fields}"`, HELP_IDS.OBJECT_FIELDS_INVALID)
    ];
    const fieldsWithNames = fields.filter((field)=>typeof field.name == "string");
    getDuplicateFields(fieldsWithNames).forEach((dupes)=>{
        problems.push(error(`Found ${dupes.length} fields with name "${dupes[0].name}" in object`, HELP_IDS.OBJECT_FIELD_NOT_UNIQUE));
    }), fields.length === 0 && !options.allowEmpty && problems.push(error("Object should have at least one field", HELP_IDS.OBJECT_FIELDS_INVALID));
    const standaloneBlockFields = fields.filter((field)=>field.type === "block").map((field)=>`"${field.name}"`);
    if (standaloneBlockFields.length > 0) {
        const fmtFields = standaloneBlockFields.join(", ");
        problems.push(error(`Invalid standalone block field(s) ${fmtFields}. Block content must be defined as an array of blocks`, HELP_IDS.STANDALONE_BLOCK_TYPE));
    }
    return problems;
}
function validatePreview(preview) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview) ? typeof preview.prepare < "u" && typeof preview.prepare != "function" ? [
        error(`The "preview.prepare" property must be a function, instead saw "${typeof preview.prepare}"`)
    ] : preview.select ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview.select) ? Object.keys(preview.select).reduce((errs, key)=>typeof preview.select[key] == "string" ? errs : errs.concat(error(`The key "${key}" of "preview.select" must be a string, instead saw "${typeof preview.select[key]}"`)), []) : [
        error(`The "preview.select" property must be an object, instead saw "${typeof preview.prepare}"`)
    ] : [] : [
        error(`The "preview" property must be an object, instead saw "${typeof preview}"`)
    ];
}
var object = (typeDef, visitorContext)=>{
    let problems = validateFields(typeDef.fields), preview = typeDef.preview;
    if (preview) {
        const previewErrors = validatePreview(typeDef.preview);
        problems = problems.concat(previewErrors), preview = previewErrors.some((err)=>err.severity === "error") ? {} : preview;
    }
    return typeDef.type !== "document" && typeDef.type !== "object" && typeof typeDef.initialValue < "u" && problems.push(error('The "initialValue" property is currently only supported for document & object types.')), __spreadProps$6(__spreadValues$6({}, typeDef), {
        preview,
        fields: (Array.isArray(typeDef.fields) ? typeDef.fields : []).map((field, index)=>{
            const _a = field, { name } = _a, fieldTypeDef = __objRest$2(_a, [
                "name"
            ]), _b = visitorContext.visit(fieldTypeDef, index), { _problems } = _b, fieldType = __objRest$2(_b, [
                "_problems"
            ]);
            return __spreadProps$6(__spreadValues$6({
                name
            }, fieldType), {
                _problems: validateField(field).concat(_problems || [])
            });
        }),
        _problems: problems
    });
}, documentVisitor = (typeDefinition, visitorContext)=>{
    const typeDef = object(typeDefinition, visitorContext), { initialValue, initialValues } = typeDef;
    return typeof initialValue < "u" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialValue) && typeof initialValue != "function" && typeDef._problems.push(error('The "initialValue" property must be either a plain object or a function')), typeof initialValues < "u" && typeDef._problems.push(error('Found property "initialValues" - did you mean "initialValue"?')), typeDef;
}, __defProp$5 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key, value)=>key in obj ? __defProp$5(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(b))__propIsEnum$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
}, __spreadProps$5 = (a, b)=>__defProps$5(a, __getOwnPropDescs$5(b)), __objRest$1 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(source))exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop) && (target[prop] = source[prop]);
    return target;
}, file = (typeDef, visitorContext)=>{
    const problems = [], fields = typeDef.fields;
    fields && problems.push(...validateFields(fields, {
        allowEmpty: !0
    }));
    const invalidFieldNames = Array.isArray(fields) ? fields == null ? void 0 : fields.filter((field)=>field.name === "asset") : [];
    return typeDef.options && typeof typeDef.options.metadata < "u" && !Array.isArray(typeDef.options.metadata) ? problems.push(error("Invalid type for file `metadata` field - must be an array of strings", HELP_IDS.ASSET_METADATA_FIELD_INVALID)) : invalidFieldNames.length > 0 && problems.push(error("The name `asset` is not a valid field name for type `file`.")), __spreadProps$5(__spreadValues$5({}, typeDef), {
        fields: (Array.isArray(fields) ? fields : []).map((field, index)=>{
            const _a = field, { name } = _a, fieldTypeDef = __objRest$1(_a, [
                "name"
            ]), _b = visitorContext.visit(fieldTypeDef, index), { _problems } = _b, fieldType = __objRest$1(_b, [
                "_problems"
            ]);
            return __spreadProps$5(__spreadValues$5({
                name
            }, fieldType), {
                _problems: validateField(field).concat(_problems || [])
            });
        }),
        _problems: problems
    });
}, __defProp$4 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (obj, key, value)=>key in obj ? __defProp$4(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$4 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(b))__propIsEnum$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    return a;
}, __spreadProps$4 = (a, b)=>__defProps$4(a, __getOwnPropDescs$4(b)), __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(source))exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const autoMeta = [
    "dimensions",
    "hasAlpha",
    "isOpaque"
];
var image = (typeDef, visitorContext)=>{
    const problems = [], fields = typeDef.fields;
    fields && problems.push(...validateFields(fields, {
        allowEmpty: !0
    }));
    let options = typeDef.options;
    const metadata = options == null ? void 0 : options.metadata, superfluousMeta = Array.isArray(metadata) ? metadata.filter((meta)=>autoMeta.includes(meta)) : [], invalidFieldNames = [
        "asset",
        "hotspot",
        "crop"
    ], fieldsWithInvalidName = Array.isArray(fields) ? fields == null ? void 0 : fields.filter((field)=>invalidFieldNames.includes(field.name)) : [];
    return typeof metadata < "u" && !Array.isArray(metadata) ? problems.push(error("Invalid type for image `metadata` field - must be an array of strings", HELP_IDS.ASSET_METADATA_FIELD_INVALID)) : superfluousMeta.length > 0 ? (problems.push(warning(`Image \`metadata\` field contains superfluous properties (they are always included): ${superfluousMeta.join(", ")}`)), options = __spreadProps$4(__spreadValues$4({}, options), {
        metadata: metadata.filter((meta)=>!autoMeta.includes(meta))
    })) : fieldsWithInvalidName.length > 0 && problems.push(error(`The names \`${invalidFieldNames.join("`, `")}\` are invalid field names for type \`image\`.`)), __spreadProps$4(__spreadValues$4({}, typeDef), {
        options,
        fields: (Array.isArray(fields) ? fields : []).map((field, index)=>{
            const _a = field, { name } = _a, fieldTypeDef = __objRest(_a, [
                "name"
            ]), _b = visitorContext.visit(fieldTypeDef, index), { _problems } = _b, fieldType = __objRest(_b, [
                "_problems"
            ]);
            return __spreadProps$4(__spreadValues$4({
                name
            }, fieldType), {
                _problems: validateField(field).concat(_problems || [])
            });
        }),
        _problems: problems
    });
}, __defProp$3 = Object.defineProperty, __defProps$3 = Object.defineProperties, __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (obj, key, value)=>key in obj ? __defProp$3(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$3 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    if (__getOwnPropSymbols$3) for (var prop of __getOwnPropSymbols$3(b))__propIsEnum$3.call(b, prop) && __defNormalProp$3(a, prop, b[prop]);
    return a;
}, __spreadProps$3 = (a, b)=>__defProps$3(a, __getOwnPropDescs$3(b));
function normalizeToProp(typeDef) {
    return Array.isArray(typeDef.to) ? typeDef.to : typeDef.to ? [
        typeDef.to
    ] : typeDef.to;
}
var reference = (typeDef, visitorContext)=>{
    const isValidTo = Array.isArray(typeDef.to) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeDef.to), normalizedTo = normalizeToProp(typeDef), problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        isValidTo ? getDupes(normalizedTo, (t)=>`${t.name};${t.type}`).map((dupes)=>error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in reference. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.REFERENCE_TO_INVALID)) : error('The reference type is missing or having an invalid value for the required "to" property. It should be an array of accepted types.', HELP_IDS.REFERENCE_TO_INVALID)
    ]);
    return isValidTo && normalizedTo.length === 0 && problems.push(error('The reference type should define at least one accepted type. Please check the "to" property.', HELP_IDS.REFERENCE_TO_INVALID)), problems.push(...getOptionErrors(typeDef)), __spreadProps$3(__spreadValues$3({}, typeDef), {
        to: (isValidTo ? normalizedTo : []).map(visitorContext.visit),
        _problems: problems
    });
};
function getOptionErrors(typeDef) {
    const { options } = typeDef, problems = [];
    return problems.push(...[
        "filter",
        "filterParams"
    ].filter((key)=>key in typeDef).map((key)=>error(`\`${key}\` is not allowed on a reference type definition - did you mean \`options.${key}\`?`, HELP_IDS.REFERENCE_INVALID_OPTIONS_LOCATION))), options ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options) ? typeof options.filter == "function" && typeof options.filterParams < "u" ? problems.concat(error("`filterParams` cannot be used if `filter` is a function. Either statically define `filter` as a string, or return `params` from the `filter`-function.", HELP_IDS.REFERENCE_INVALID_FILTER_PARAMS_COMBINATION)) : typeof options.filter == "function" || !options.filter && !options.filterParams ? problems : typeof options.filter != "string" ? problems.concat(error(`If set, \`filter\` must be a string. Got ${typeof options.filter}`)) : typeof options.filterParams < "u" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options.filterParams) ? problems.concat(error("If set, `filterParams` must be an object.")) : options.filterParams ? problems.concat(Object.keys(options.filterParams).filter((key)=>key.startsWith("__") || key.startsWith("$")).map((key)=>error(`Filter parameter cannot be prefixed with "$" or "__". Got ${key}".`))) : problems : problems.concat(error("The reference type expects `options` to be an object", HELP_IDS.REFERENCE_INVALID_OPTIONS)) : problems;
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
}, __spreadProps$2 = (a, b)=>__defProps$2(a, __getOwnPropDescs$2(b)), rootType = (typeDef, visitorContext)=>{
    const hasName = !!typeDef.name;
    if (!hasName && Object.keys(typeDef).length === 1) return __spreadProps$2(__spreadValues$2({}, typeDef), {
        _problems: [
            error("Invalid/undefined type declaration, check declaration or the import/export of the schema type.", HELP_IDS.TYPE_INVALID)
        ]
    });
    const problems = [];
    return looksLikeEsmModule(typeDef) ? problems.push(error("Type appears to be an ES6 module imported through CommonJS require - use an import statement or access the `.default` property", HELP_IDS.TYPE_IS_ESM_MODULE)) : hasName ? visitorContext.isReserved(typeDef.name) && problems.push(error(`Invalid type name: "${typeDef.name}" is a reserved name.`, HELP_IDS.TYPE_NAME_RESERVED)) : problems.push(error("Missing type name", HELP_IDS.TYPE_MISSING_NAME)), visitorContext.isDuplicate(typeDef.name) && problems.push(error(`Invalid type name: A type with name "${typeDef.name}" is already defined in the schema.`)), problems.push(...validateComponent(typeDef)), "title" in typeDef && typeof typeDef.title != "string" && problems.push(warning("Type title is not a string.", HELP_IDS.TYPE_TITLE_INVALID)), __spreadProps$2(__spreadValues$2({}, typeDef), {
        _problems: problems
    });
};
function looksLikeEsmModule(typeDef) {
    return !typeDef.name && typeDef.default && (typeDef.default.name || typeDef.default.title);
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
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b)), slug = (typeDef, visitorContext)=>{
    const problems = [];
    return typeDef.options && typeDef.options.slugifyFn && (problems.push(warning('Heads up! The "slugifyFn" option has been renamed to "slugify".', HELP_IDS.SLUG_SLUGIFY_FN_RENAMED)), typeDef.options.slugify = typeDef.options.slugifyFn), __spreadProps$1(__spreadValues$1({}, typeDef), {
        _problems: problems
    });
}, __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
const typeVisitors = {
    array,
    object,
    slug,
    file,
    image,
    block: validateBlockType,
    document: documentVisitor,
    reference,
    crossDatasetReference
}, getNoopVisitor = (visitorContext)=>(schemaDef)=>__spreadProps(__spreadValues({
            name: `<unnamed_type_@_index_${visitorContext.index}>`
        }, schemaDef), {
            _problems: []
        });
function combine(...visitors) {
    return (schemaType, visitorContext)=>visitors.reduce((result, visitor)=>{
            const res = visitor(result, visitorContext);
            return __spreadProps(__spreadValues({}, res), {
                _problems: result._problems.concat(res._problems)
            });
        }, __spreadValues({
            _problems: []
        }, schemaType));
}
function validateSchema(schemaTypes) {
    return traverseSanitySchema(schemaTypes, (schemaDef, visitorContext)=>{
        const typeVisitor = schemaDef && schemaDef.type && typeVisitors[schemaDef.type] || getNoopVisitor(visitorContext);
        return visitorContext.isRoot ? combine(rootType, common, typeVisitor)(schemaDef, visitorContext) : combine(common, typeVisitor)(schemaDef, visitorContext);
    });
}
;
 //# sourceMappingURL=_internal.mjs.map
}}),
}]);

//# sourceMappingURL=26aa7_%40sanity_schema_lib_7ecea2._.js.map