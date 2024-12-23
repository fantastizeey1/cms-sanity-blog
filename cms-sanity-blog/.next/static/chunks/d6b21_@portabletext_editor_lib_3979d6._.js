(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/d6b21_@portabletext_editor_lib_3979d6._.js", {

"[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/_chunks-es/selector.is-selection-collapsed.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createGuards": (()=>createGuards),
    "getFirstBlock": (()=>getFirstBlock),
    "getFocusBlock": (()=>getFocusBlock),
    "getFocusBlockObject": (()=>getFocusBlockObject),
    "getFocusChild": (()=>getFocusChild),
    "getFocusListBlock": (()=>getFocusListBlock),
    "getFocusSpan": (()=>getFocusSpan),
    "getFocusTextBlock": (()=>getFocusTextBlock),
    "getLastBlock": (()=>getLastBlock),
    "getNextBlock": (()=>getNextBlock),
    "getPreviousBlock": (()=>getPreviousBlock),
    "getSelectedBlocks": (()=>getSelectedBlocks),
    "getSelectionEndBlock": (()=>getSelectionEndBlock),
    "getSelectionStartBlock": (()=>getSelectionStartBlock),
    "isSelectionCollapsed": (()=>isSelectionCollapsed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
;
function createGuards({ schema }) {
    function isListBlock(block) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextListBlock"])(block) && block._type === schema.block.name;
    }
    function isTextBlock(block) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(block) && block._type === schema.block.name;
    }
    return {
        isListBlock,
        isTextBlock
    };
}
const getFocusBlock = ({ context })=>{
    const key = context.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[0]) ? context.selection.focus.path[0]._key : void 0, node = key ? context.value.find((block)=>block._key === key) : void 0;
    return node && key ? {
        node,
        path: [
            {
                _key: key
            }
        ]
    } : void 0;
}, getFocusListBlock = ({ context })=>{
    const guards = createGuards(context), focusBlock = getFocusBlock({
        context
    });
    return focusBlock && guards.isListBlock(focusBlock.node) ? {
        node: focusBlock.node,
        path: focusBlock.path
    } : void 0;
}, getFocusTextBlock = ({ context })=>{
    const focusBlock = getFocusBlock({
        context
    });
    return focusBlock && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(focusBlock.node) ? {
        node: focusBlock.node,
        path: focusBlock.path
    } : void 0;
}, getFocusBlockObject = ({ context })=>{
    const focusBlock = getFocusBlock({
        context
    });
    return focusBlock && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(focusBlock.node) ? {
        node: focusBlock.node,
        path: focusBlock.path
    } : void 0;
}, getFocusChild = ({ context })=>{
    const focusBlock = getFocusTextBlock({
        context
    });
    if (!focusBlock) return;
    const key = context.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[2]) ? context.selection.focus.path[2]._key : void 0, node = key ? focusBlock.node.children.find((span)=>span._key === key) : void 0;
    return node && key ? {
        node,
        path: [
            ...focusBlock.path,
            "children",
            {
                _key: key
            }
        ]
    } : void 0;
}, getFocusSpan = ({ context })=>{
    const focusChild = getFocusChild({
        context
    });
    return focusChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(focusChild.node) ? {
        node: focusChild.node,
        path: focusChild.path
    } : void 0;
}, getFirstBlock = ({ context })=>{
    const node = context.value[0];
    return node ? {
        node,
        path: [
            {
                _key: node._key
            }
        ]
    } : void 0;
}, getLastBlock = ({ context })=>{
    const node = context.value[context.value.length - 1] ? context.value[context.value.length - 1] : void 0;
    return node ? {
        node,
        path: [
            {
                _key: node._key
            }
        ]
    } : void 0;
}, getSelectedBlocks = ({ context })=>{
    if (!context.selection) return [];
    const selectedBlocks = [], startKey = context.selection.backward ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[0]) ? context.selection.focus.path[0]._key : void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.anchor.path[0]) ? context.selection.anchor.path[0]._key : void 0, endKey = context.selection.backward ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.anchor.path[0]) ? context.selection.anchor.path[0]._key : void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[0]) ? context.selection.focus.path[0]._key : void 0;
    if (!startKey || !endKey) return selectedBlocks;
    for (const block of context.value){
        if (block._key === startKey) {
            if (selectedBlocks.push({
                node: block,
                path: [
                    {
                        _key: block._key
                    }
                ]
            }), startKey === endKey) break;
            continue;
        }
        if (block._key === endKey) {
            selectedBlocks.push({
                node: block,
                path: [
                    {
                        _key: block._key
                    }
                ]
            });
            break;
        }
        selectedBlocks.length > 0 && selectedBlocks.push({
            node: block,
            path: [
                {
                    _key: block._key
                }
            ]
        });
    }
    return selectedBlocks;
}, getSelectionStartBlock = ({ context })=>{
    if (!context.selection) return;
    const key = context.selection.backward ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[0]) ? context.selection.focus.path[0]._key : void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.anchor.path[0]) ? context.selection.anchor.path[0]._key : void 0, node = key ? context.value.find((block)=>block._key === key) : void 0;
    return node && key ? {
        node,
        path: [
            {
                _key: key
            }
        ]
    } : void 0;
}, getSelectionEndBlock = ({ context })=>{
    if (!context.selection) return;
    const key = context.selection.backward ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.anchor.path[0]) ? context.selection.anchor.path[0]._key : void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(context.selection.focus.path[0]) ? context.selection.focus.path[0]._key : void 0, node = key ? context.value.find((block)=>block._key === key) : void 0;
    return node && key ? {
        node,
        path: [
            {
                _key: key
            }
        ]
    } : void 0;
}, getPreviousBlock = ({ context })=>{
    let previousBlock;
    const selectionStartBlock = getSelectionStartBlock({
        context
    });
    if (!selectionStartBlock) return;
    let foundSelectionStartBlock = !1;
    for (const block of context.value){
        if (block._key === selectionStartBlock.node._key) {
            foundSelectionStartBlock = !0;
            break;
        }
        previousBlock = {
            node: block,
            path: [
                {
                    _key: block._key
                }
            ]
        };
    }
    if (foundSelectionStartBlock && previousBlock) return previousBlock;
}, getNextBlock = ({ context })=>{
    let nextBlock;
    const selectionEndBlock = getSelectionEndBlock({
        context
    });
    if (!selectionEndBlock) return;
    let foundSelectionEndBlock = !1;
    for (const block of context.value){
        if (block._key === selectionEndBlock.node._key) {
            foundSelectionEndBlock = !0;
            continue;
        }
        if (foundSelectionEndBlock) {
            nextBlock = {
                node: block,
                path: [
                    {
                        _key: block._key
                    }
                ]
            };
            break;
        }
    }
    if (foundSelectionEndBlock && nextBlock) return nextBlock;
}, isSelectionCollapsed = ({ context })=>{
    var _a, _b, _c, _d;
    return JSON.stringify((_a = context.selection) == null ? void 0 : _a.anchor.path) === JSON.stringify((_b = context.selection) == null ? void 0 : _b.focus.path) && ((_c = context.selection) == null ? void 0 : _c.anchor.offset) === ((_d = context.selection) == null ? void 0 : _d.focus.offset);
};
;
 //# sourceMappingURL=selector.is-selection-collapsed.js.map
}}),
"[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/_chunks-es/behavior.core.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "blockOffsetToSpanSelectionPoint": (()=>blockOffsetToSpanSelectionPoint),
    "coreBehavior": (()=>coreBehavior),
    "coreBehaviors": (()=>coreBehaviors),
    "defineBehavior": (()=>defineBehavior),
    "getTextBlockText": (()=>getTextBlockText),
    "isHotkey": (()=>isHotkey),
    "spanSelectionPointToBlockOffset": (()=>spanSelectionPointToBlockOffset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/_chunks-es/selector.is-selection-collapsed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
;
;
function blockOffsetToSpanSelectionPoint({ value, blockOffset }) {
    let offsetLeft = blockOffset.offset, selectionPoint;
    for (const block of value)if (block._key === blockOffset.path[0]._key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(block)) {
        for (const child of block.children)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(child)) {
            if (offsetLeft === 0) {
                selectionPoint = {
                    path: [
                        ...blockOffset.path,
                        "children",
                        {
                            _key: child._key
                        }
                    ],
                    offset: 0
                };
                break;
            }
            if (offsetLeft <= child.text.length) {
                selectionPoint = {
                    path: [
                        ...blockOffset.path,
                        "children",
                        {
                            _key: child._key
                        }
                    ],
                    offset: offsetLeft
                };
                break;
            }
            offsetLeft -= child.text.length;
        }
    }
    return selectionPoint;
}
function spanSelectionPointToBlockOffset({ value, selectionPoint }) {
    let offset = 0;
    for (const block of value)if (block._key === selectionPoint.path[0]._key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(block)) {
        for (const child of block.children)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(child)) {
            if (child._key === selectionPoint.path[2]._key) return {
                path: [
                    {
                        _key: block._key
                    }
                ],
                offset: offset + selectionPoint.offset
            };
            offset += child.text.length;
        }
    }
}
function isEmptyTextBlock(block) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(block)) return !1;
    const onlyText = block.children.every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"]), blockText = getTextBlockText(block);
    return onlyText && blockText === "";
}
function getTextBlockText(block) {
    return block.children.map((child)=>{
        var _a;
        return (_a = child.text) != null ? _a : "";
    }).join("");
}
const IS_MAC = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.userAgent), modifiers = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
}, aliases = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: IS_MAC ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
}, keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    f13: 124,
    f14: 125,
    f15: 126,
    f16: 127,
    f17: 128,
    f18: 129,
    f19: 130,
    f20: 131
};
function isHotkey(hotkey, event) {
    return compareHotkey(parseHotkey(hotkey), event);
}
function parseHotkey(hotkey) {
    const parsedHotkey = {
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        shiftKey: !1
    }, hotkeySegments = hotkey.replace("++", "+add").split("+");
    for (const rawHotkeySegment of hotkeySegments){
        const optional = rawHotkeySegment.endsWith("?") && rawHotkeySegment.length > 1, hotkeySegment = optional ? rawHotkeySegment.slice(0, -1) : rawHotkeySegment, keyName = toKeyName(hotkeySegment), modifier = modifiers[keyName], alias = aliases[hotkeySegment], code = keyCodes[keyName];
        if (hotkeySegment.length > 1 && modifier === void 0 && alias === void 0 && code === void 0) throw new TypeError(`Unknown modifier: "${hotkeySegment}"`);
        (hotkeySegments.length === 1 || modifier === void 0) && (parsedHotkey.key = keyName, parsedHotkey.keyCode = toKeyCode(hotkeySegment)), modifier !== void 0 && (parsedHotkey[modifier] = optional ? null : !0);
    }
    return parsedHotkey;
}
function compareHotkey(parsedHotkey, event) {
    return (parsedHotkey.altKey == null || parsedHotkey.altKey === event.altKey) && (parsedHotkey.ctrlKey == null || parsedHotkey.ctrlKey === event.ctrlKey) && (parsedHotkey.metaKey == null || parsedHotkey.metaKey === event.metaKey) && (parsedHotkey.shiftKey == null || parsedHotkey.shiftKey === event.shiftKey) ? parsedHotkey.keyCode !== void 0 && event.keyCode !== void 0 ? parsedHotkey.keyCode === 91 && event.keyCode === 93 ? !0 : parsedHotkey.keyCode === event.keyCode : parsedHotkey.keyCode === event.keyCode || parsedHotkey.key === event.key.toLowerCase() : !1;
}
function toKeyCode(name) {
    var _a;
    const keyName = toKeyName(name);
    return (_a = keyCodes[keyName]) != null ? _a : keyName.toUpperCase().charCodeAt(0);
}
function toKeyName(name) {
    var _a;
    const keyName = name.toLowerCase();
    return (_a = aliases[keyName]) != null ? _a : keyName;
}
function defineBehavior(behavior) {
    return behavior;
}
const arrowDownOnLonelyBlockObject = {
    on: "key.down",
    guard: ({ context, event })=>{
        const isArrowDown = isHotkey("ArrowDown", event.keyboardEvent), focusBlockObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusBlockObject"])({
            context
        }), nextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextBlock"])({
            context
        });
        return isArrowDown && focusBlockObject && !nextBlock;
    },
    actions: [
        ()=>[
                {
                    type: "insert.text block",
                    placement: "after"
                }
            ]
    ]
}, arrowUpOnLonelyBlockObject = {
    on: "key.down",
    guard: ({ context, event })=>{
        const isArrowUp = isHotkey("ArrowUp", event.keyboardEvent), focusBlockObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusBlockObject"])({
            context
        }), previousBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousBlock"])({
            context
        });
        return isArrowUp && focusBlockObject && !previousBlock;
    },
    actions: [
        ()=>[
                {
                    type: "insert.text block",
                    placement: "before"
                },
                {
                    type: "select.previous block"
                }
            ]
    ]
}, breakingBlockObject = {
    on: "insert.break",
    guard: ({ context })=>{
        const focusBlockObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusBlockObject"])({
            context
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }) && focusBlockObject !== void 0;
    },
    actions: [
        ()=>[
                {
                    type: "insert.text block",
                    placement: "after"
                }
            ]
    ]
}, deletingEmptyTextBlockAfterBlockObject = {
    on: "delete.backward",
    guard: ({ context })=>{
        const focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusTextBlock"])({
            context
        }), selectionCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }), previousBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousBlock"])({
            context
        });
        return !focusTextBlock || !selectionCollapsed || !previousBlock ? !1 : isEmptyTextBlock(focusTextBlock.node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(previousBlock.node) ? {
            focusTextBlock,
            previousBlock
        } : !1;
    },
    actions: [
        (_, { focusTextBlock, previousBlock })=>[
                {
                    type: "delete.block",
                    blockPath: focusTextBlock.path
                },
                {
                    type: "select",
                    selection: {
                        anchor: {
                            path: previousBlock.path,
                            offset: 0
                        },
                        focus: {
                            path: previousBlock.path,
                            offset: 0
                        }
                    }
                }
            ]
    ]
}, deletingEmptyTextBlockBeforeBlockObject = {
    on: "delete.forward",
    guard: ({ context })=>{
        const focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusTextBlock"])({
            context
        }), selectionCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }), nextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextBlock"])({
            context
        });
        return !focusTextBlock || !selectionCollapsed || !nextBlock ? !1 : isEmptyTextBlock(focusTextBlock.node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(nextBlock.node) ? {
            focusTextBlock,
            nextBlock
        } : !1;
    },
    actions: [
        (_, { focusTextBlock, nextBlock })=>[
                {
                    type: "delete.block",
                    blockPath: focusTextBlock.path
                },
                {
                    type: "select",
                    selection: {
                        anchor: {
                            path: nextBlock.path,
                            offset: 0
                        },
                        focus: {
                            path: nextBlock.path,
                            offset: 0
                        }
                    }
                }
            ]
    ]
}, coreBlockObjectBehaviors = {
    arrowDownOnLonelyBlockObject,
    arrowUpOnLonelyBlockObject,
    breakingBlockObject,
    deletingEmptyTextBlockAfterBlockObject,
    deletingEmptyTextBlockBeforeBlockObject
}, decoratorAdd = {
    on: "decorator.add",
    actions: [
        ({ event })=>[
                event,
                {
                    type: "reselect"
                }
            ]
    ]
}, decoratorRemove = {
    on: "decorator.remove",
    guard: ({ event })=>({
            decorator: event.decorator
        }),
    actions: [
        ({ event })=>[
                event,
                {
                    type: "reselect"
                }
            ]
    ]
}, decoratorToggle = {
    on: "decorator.toggle",
    guard: ({ event })=>({
            decorator: event.decorator
        }),
    actions: [
        ({ event })=>[
                event,
                {
                    type: "reselect"
                }
            ]
    ]
}, coreDecoratorBehaviors = {
    decoratorAdd,
    decoratorRemove,
    decoratorToggle
}, MAX_LIST_LEVEL = 10, clearListOnBackspace = {
    on: "delete.backward",
    guard: ({ context })=>{
        var _a;
        const selectionCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }), focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusTextBlock"])({
            context
        }), focusSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusSpan"])({
            context
        });
        return !selectionCollapsed || !focusTextBlock || !focusSpan ? !1 : focusTextBlock.node.children[0]._key === focusSpan.node._key && ((_a = context.selection) == null ? void 0 : _a.focus.offset) === 0 && focusTextBlock.node.level === 1 ? {
            focusTextBlock
        } : !1;
    },
    actions: [
        (_, { focusTextBlock })=>[
                {
                    type: "text block.unset",
                    props: [
                        "listItem",
                        "level"
                    ],
                    at: focusTextBlock.path
                }
            ]
    ]
}, unindentListOnBackspace = {
    on: "delete.backward",
    guard: ({ context })=>{
        var _a;
        const selectionCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }), focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusTextBlock"])({
            context
        }), focusSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusSpan"])({
            context
        });
        return !selectionCollapsed || !focusTextBlock || !focusSpan ? !1 : focusTextBlock.node.children[0]._key === focusSpan.node._key && ((_a = context.selection) == null ? void 0 : _a.focus.offset) === 0 && focusTextBlock.node.level !== void 0 && focusTextBlock.node.level > 1 ? {
            focusTextBlock,
            level: focusTextBlock.node.level - 1
        } : !1;
    },
    actions: [
        (_, { focusTextBlock, level })=>[
                {
                    type: "text block.set",
                    level,
                    at: focusTextBlock.path
                }
            ]
    ]
}, clearListOnEnter = {
    on: "insert.break",
    guard: ({ context })=>{
        const selectionCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCollapsed"])({
            context
        }), focusListBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusListBlock"])({
            context
        });
        return !selectionCollapsed || !focusListBlock || !isEmptyTextBlock(focusListBlock.node) ? !1 : {
            focusListBlock
        };
    },
    actions: [
        (_, { focusListBlock })=>[
                {
                    type: "text block.unset",
                    props: [
                        "listItem",
                        "level"
                    ],
                    at: focusListBlock.path
                }
            ]
    ]
}, indentListOnTab = {
    on: "key.down",
    guard: ({ context, event })=>{
        if (!isHotkey("Tab", event.keyboardEvent)) return !1;
        const selectedBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedBlocks"])({
            context
        }), guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedListBlocks = selectedBlocks.flatMap((block)=>guards.isListBlock(block.node) ? [
                {
                    node: block.node,
                    path: block.path
                }
            ] : []);
        return selectedListBlocks.length === selectedBlocks.length ? {
            selectedListBlocks
        } : !1;
    },
    actions: [
        (_, { selectedListBlocks })=>selectedListBlocks.map((selectedListBlock)=>({
                    type: "text block.set",
                    level: Math.min(MAX_LIST_LEVEL, Math.max(1, selectedListBlock.node.level + 1)),
                    at: selectedListBlock.path
                }))
    ]
}, unindentListOnShiftTab = {
    on: "key.down",
    guard: ({ context, event })=>{
        if (!isHotkey("Shift+Tab", event.keyboardEvent)) return !1;
        const selectedBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectedBlocks"])({
            context
        }), guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedListBlocks = selectedBlocks.flatMap((block)=>guards.isListBlock(block.node) ? [
                {
                    node: block.node,
                    path: block.path
                }
            ] : []);
        return selectedListBlocks.length === selectedBlocks.length ? {
            selectedListBlocks
        } : !1;
    },
    actions: [
        (_, { selectedListBlocks })=>selectedListBlocks.map((selectedListBlock)=>({
                    type: "text block.set",
                    level: Math.min(MAX_LIST_LEVEL, Math.max(1, selectedListBlock.node.level - 1)),
                    at: selectedListBlock.path
                }))
    ]
}, coreListBehaviors = {
    clearListOnBackspace,
    unindentListOnBackspace,
    clearListOnEnter,
    indentListOnTab,
    unindentListOnShiftTab
}, softReturn = {
    on: "insert.soft break",
    actions: [
        ()=>[
                {
                    type: "insert.text",
                    text: `
`
                }
            ]
    ]
}, coreBehaviors = [
    softReturn,
    coreDecoratorBehaviors.decoratorAdd,
    coreDecoratorBehaviors.decoratorRemove,
    coreDecoratorBehaviors.decoratorToggle,
    coreBlockObjectBehaviors.arrowDownOnLonelyBlockObject,
    coreBlockObjectBehaviors.arrowUpOnLonelyBlockObject,
    coreBlockObjectBehaviors.breakingBlockObject,
    coreBlockObjectBehaviors.deletingEmptyTextBlockAfterBlockObject,
    coreBlockObjectBehaviors.deletingEmptyTextBlockBeforeBlockObject,
    coreListBehaviors.clearListOnBackspace,
    coreListBehaviors.unindentListOnBackspace,
    coreListBehaviors.clearListOnEnter,
    coreListBehaviors.indentListOnTab,
    coreListBehaviors.unindentListOnShiftTab
], coreBehavior = {
    softReturn,
    decorators: coreDecoratorBehaviors,
    blockObjects: coreBlockObjectBehaviors,
    lists: coreListBehaviors
};
;
 //# sourceMappingURL=behavior.core.js.map
}}),
"[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EditorEventListener": (()=>EditorEventListener),
    "EditorProvider": (()=>EditorProvider),
    "PortableTextEditable": (()=>PortableTextEditable),
    "PortableTextEditor": (()=>PortableTextEditor),
    "defineSchema": (()=>defineSchema),
    "editorMachine": (()=>editorMachine),
    "keyGenerator": (()=>defaultKeyGenerator),
    "useEditor": (()=>useEditor),
    "useEditorSelector": (()=>useEditorSelector),
    "usePortableTextEditor": (()=>usePortableTextEditor),
    "usePortableTextEditorSelection": (()=>usePortableTextEditorSelection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$startcase$40$4$2e$4$2e$0$2f$node_modules$2f$lodash$2e$startcase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash.startcase@4.4.0/node_modules/lodash.startcase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-compiler-runtime@19.0.0-beta-201e55d-20241215_react@18.3.1/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatten.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isUndefined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omitBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omitBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+types@3.67.1_debug@4.4.0/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+schema@3.67.1_debug@4.4.0/node_modules/@sanity/schema/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/slate@0.112.0/node_modules/slate/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/slate-react@0.112.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_slate-dom@0.111.0_slate@0.112.0__slate@0.112.0/node_modules/slate-react/dist/index.es.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js [app-client] (ecmascript) <export e as emit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@portabletext+patches@1.1.0/node_modules/@portabletext/patches/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@xstate+react@5.0.0_@types+react@18.3.17_react@18.3.1_xstate@5.19.0/node_modules/@xstate/react/dist/xstate-react.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/_chunks-es/selector.is-selection-collapsed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@portabletext+editor@1.16.4_@sanity+block-tools@3.67.1_debug@4.4.0__@sanity+schema@3.67.1_deb_pqbrot4cbdikphuxn54dfeocvu/node_modules/@portabletext/editor/lib/_chunks-es/behavior.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__enqueueActions$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js [app-client] (ecmascript) <export b as enqueueActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$get$2d$random$2d$values$2d$esm$40$1$2e$0$2e$2$2f$node_modules$2f$get$2d$random$2d$values$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/get-random-values-esm@1.0.2/node_modules/get-random-values-esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$1db27a82$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__createActor$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js [app-client] (ecmascript) <export A as createActor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$1$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-effect-event@1.0.2_react@18.3.1/node_modules/use-effect-event/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$block$2d$tools$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sanity+block-tools@3.67.1_debug@4.4.0/node_modules/@sanity/block-tools/lib/index.mjs [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
};
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
;
function createEditorSchema(portableTextType) {
    var _a, _b, _c;
    if (!portableTextType) throw new Error("Parameter 'portabletextType' missing (required)");
    const blockType = (_a = portableTextType.of) == null ? void 0 : _a.find(findBlockType);
    if (!blockType) throw new Error("Block type is not defined in this schema (required)");
    const childrenField = (_b = blockType.fields) == null ? void 0 : _b.find((field)=>field.name === "children");
    if (!childrenField) throw new Error("Children field for block type found in schema (required)");
    const ofType = childrenField.type.of;
    if (!ofType) throw new Error("Valid types for block children not found in schema (required)");
    const spanType = ofType.find((memberType)=>memberType.name === "span");
    if (!spanType) throw new Error("Span type not found in schema (required)");
    const inlineObjectTypes = ofType.filter((memberType)=>memberType.name !== "span") || [], blockObjectTypes = ((_c = portableTextType.of) == null ? void 0 : _c.filter((field)=>field.name !== blockType.name)) || [];
    return {
        styles: resolveEnabledStyles(blockType),
        decorators: resolveEnabledDecorators(spanType),
        lists: resolveEnabledListItems(blockType),
        block: blockType,
        span: spanType,
        portableText: portableTextType,
        inlineObjects: inlineObjectTypes,
        blockObjects: blockObjectTypes,
        annotations: spanType.annotations
    };
}
function resolveEnabledStyles(blockType) {
    var _a, _b, _c;
    const styleField = (_a = blockType.fields) == null ? void 0 : _a.find((btField)=>btField.name === "style");
    if (!styleField) throw new Error("A field with name 'style' is not defined in the block type (required).");
    const textStyles = ((_b = styleField.type.options) == null ? void 0 : _b.list) && ((_c = styleField.type.options.list) == null ? void 0 : _c.filter((style)=>style.value));
    if (!textStyles || textStyles.length === 0) throw new Error("The style fields need at least one style defined. I.e: {title: 'Normal', value: 'normal'}.");
    return textStyles;
}
function resolveEnabledDecorators(spanType) {
    return spanType.decorators;
}
function resolveEnabledListItems(blockType) {
    var _a, _b;
    const listField = (_a = blockType.fields) == null ? void 0 : _a.find((btField)=>btField.name === "listItem");
    if (!listField) throw new Error("A field with name 'listItem' is not defined in the block type (required).");
    const listItems = ((_b = listField.type.options) == null ? void 0 : _b.list) && listField.type.options.list.filter((list)=>list.value);
    if (!listItems) throw new Error("The list field need at least to be an empty array");
    return listItems;
}
function findBlockType(type) {
    return type.type ? findBlockType(type.type) : type.name === "block" ? type : null;
}
var __defProp$q = Object.defineProperty, __defProps$j = Object.defineProperties, __getOwnPropDescs$j = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$q = Object.getOwnPropertySymbols, __hasOwnProp$q = Object.prototype.hasOwnProperty, __propIsEnum$q = Object.prototype.propertyIsEnumerable, __defNormalProp$q = (obj, key, value)=>key in obj ? __defProp$q(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$q = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$q.call(b, prop) && __defNormalProp$q(a, prop, b[prop]);
    if (__getOwnPropSymbols$q) for (var prop of __getOwnPropSymbols$q(b))__propIsEnum$q.call(b, prop) && __defNormalProp$q(a, prop, b[prop]);
    return a;
}, __spreadProps$j = (a, b)=>__defProps$j(a, __getOwnPropDescs$j(b));
function defineSchema(definition) {
    return definition;
}
function compileSchemaDefinition(definition) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const blockObjects = (_b = (_a = definition == null ? void 0 : definition.blockObjects) == null ? void 0 : _a.map((blockObject)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
            type: "object",
            // Very naive way to work around `SanitySchema.compile` adding default
            // fields to objects with the name `image`
            name: blockObject.name === "image" ? "tmp-image" : blockObject.name,
            title: blockObject.title,
            icon: blockObject.icon,
            fields: []
        }))) != null ? _b : [], inlineObjects = (_d = (_c = definition == null ? void 0 : definition.inlineObjects) == null ? void 0 : _c.map((inlineObject)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
            type: "object",
            name: inlineObject.name,
            title: inlineObject.title,
            icon: inlineObject.icon,
            fields: []
        }))) != null ? _d : [], portableTextSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
        type: "array",
        name: "portable-text",
        of: [
            ...blockObjects.map((blockObject)=>({
                    type: blockObject.name
                })),
            {
                type: "block",
                name: "block",
                of: inlineObjects.map((inlineObject)=>({
                        type: inlineObject.name
                    })),
                marks: {
                    decorators: (_f = (_e = definition == null ? void 0 : definition.decorators) == null ? void 0 : _e.map((decorator)=>{
                        var _a2;
                        return {
                            title: (_a2 = decorator.title) != null ? _a2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$startcase$40$4$2e$4$2e$0$2f$node_modules$2f$lodash$2e$startcase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(decorator.name),
                            value: decorator.name,
                            icon: decorator.icon
                        };
                    })) != null ? _f : [],
                    annotations: (_h = (_g = definition == null ? void 0 : definition.annotations) == null ? void 0 : _g.map((annotation)=>({
                            name: annotation.name,
                            type: "object",
                            title: annotation.title,
                            icon: annotation.icon
                        }))) != null ? _h : []
                },
                lists: (_j = (_i = definition == null ? void 0 : definition.lists) == null ? void 0 : _i.map((list)=>{
                    var _a2;
                    return {
                        value: list.name,
                        title: (_a2 = list.title) != null ? _a2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$startcase$40$4$2e$4$2e$0$2f$node_modules$2f$lodash$2e$startcase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(list.name),
                        icon: list.icon
                    };
                })) != null ? _j : [],
                styles: (_l = (_k = definition == null ? void 0 : definition.styles) == null ? void 0 : _k.map((style)=>{
                    var _a2;
                    return {
                        value: style.name,
                        title: (_a2 = style.title) != null ? _a2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$startcase$40$4$2e$4$2e$0$2f$node_modules$2f$lodash$2e$startcase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(style.name),
                        icon: style.icon
                    };
                })) != null ? _l : []
            }
        ]
    }), schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"].compile({
        types: [
            portableTextSchema,
            ...blockObjects,
            ...inlineObjects
        ]
    }).get("portable-text"), pteSchema = createEditorSchema(schema);
    return __spreadProps$j(__spreadValues$q({}, pteSchema), {
        blockObjects: pteSchema.blockObjects.map((blockObject)=>blockObject.name === "tmp-image" ? __spreadProps$j(__spreadValues$q({}, blockObject), {
                name: "image",
                type: __spreadProps$j(__spreadValues$q({}, blockObject.type), {
                    name: "image"
                })
            }) : blockObject)
    });
}
const rootName = "sanity-pte:";
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootName);
function debugWithName(name) {
    const namespace = `${rootName}${name}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enabled(namespace) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(namespace) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootName);
}
function createKeyedPath(point, value, types) {
    const blockPath = [
        point.path[0]
    ];
    if (!value) return null;
    const block = value[blockPath[0]];
    if (!block) return null;
    const keyedBlockPath = [
        {
            _key: block._key
        }
    ];
    if (block._type !== types.block.name) return keyedBlockPath;
    let keyedChildPath;
    const childPath = point.path.slice(0, 2), child = Array.isArray(block.children) && block.children[childPath[1]];
    return child && (keyedChildPath = [
        "children",
        {
            _key: child._key
        }
    ]), keyedChildPath ? [
        ...keyedBlockPath,
        ...keyedChildPath
    ] : keyedBlockPath;
}
function toSlatePath(path, editor) {
    if (!editor) return [];
    const [block, blockPath] = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
        at: [],
        match: (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(path[0]) && n._key === path[0]._key
    }))[0] || [
        void 0,
        void 0
    ];
    if (!block || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block)) return [];
    if (editor.isVoid(block)) return [
        blockPath[0],
        0
    ];
    const childPath = [
        path[2]
    ], childIndex = block.children.findIndex((child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            {
                _key: child._key
            }
        ], childPath));
    if (childIndex >= 0 && block.children[childIndex]) {
        const child = block.children[childIndex];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(child) && editor.isVoid(child) ? blockPath.concat(childIndex).concat(0) : blockPath.concat(childIndex);
    }
    return blockPath;
}
function toPortableTextRange(value, range, types) {
    if (!range) return null;
    let anchor = null, focus = null;
    const anchorPath = range.anchor && createKeyedPath(range.anchor, value, types);
    anchorPath && range.anchor && (anchor = {
        path: anchorPath,
        offset: range.anchor.offset
    });
    const focusPath = range.focus && createKeyedPath(range.focus, value, types);
    focusPath && range.focus && (focus = {
        path: focusPath,
        offset: range.focus.offset
    });
    const backward = !!(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isRange(range) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isBackward(range));
    return anchor && focus ? {
        anchor,
        focus,
        backward
    } : null;
}
function toSlateRange(selection, editor) {
    if (!selection || !editor) return null;
    const anchor = {
        path: toSlatePath(selection.anchor.path, editor),
        offset: selection.anchor.offset
    }, focus = {
        path: toSlatePath(selection.focus.path, editor),
        offset: selection.focus.offset
    };
    return focus.path.length === 0 || anchor.path.length === 0 ? null : anchor && focus ? {
        anchor,
        focus
    } : null;
}
function moveRangeByOperation(range, operation) {
    const anchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].transform(range.anchor, operation), focus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].transform(range.focus, operation);
    return anchor === null || focus === null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].equals(anchor, range.anchor) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].equals(focus, range.focus) ? range : {
        anchor,
        focus
    };
}
function normalizePoint(point, value) {
    if (!point || !value) return null;
    const newPath = [];
    let newOffset = point.offset || 0;
    const blockKey = typeof point.path[0] == "object" && "_key" in point.path[0] && point.path[0]._key, childKey = typeof point.path[2] == "object" && "_key" in point.path[2] && point.path[2]._key, block = value.find((blk)=>blk._key === blockKey);
    if (block) newPath.push({
        _key: block._key
    });
    else return null;
    if (block && point.path[1] === "children") {
        if (!block.children || Array.isArray(block.children) && block.children.length === 0) return null;
        const child = Array.isArray(block.children) && block.children.find((cld)=>cld._key === childKey);
        if (child) newPath.push("children"), newPath.push({
            _key: child._key
        }), newOffset = child.text && child.text.length >= point.offset ? point.offset : child.text && child.text.length || 0;
        else return null;
    }
    return {
        path: newPath,
        offset: newOffset
    };
}
function normalizeSelection(selection, value) {
    if (!selection || !value || value.length === 0) return null;
    let newAnchor = null, newFocus = null;
    const { anchor, focus } = selection;
    return anchor && value.find((blk)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            _key: blk._key
        }, anchor.path[0])) && (newAnchor = normalizePoint(anchor, value)), focus && value.find((blk)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            _key: blk._key
        }, focus.path[0])) && (newFocus = normalizePoint(focus, value)), newAnchor && newFocus ? {
        anchor: newAnchor,
        focus: newFocus,
        backward: selection.backward
    } : null;
}
var __defProp$p = Object.defineProperty, __defProps$i = Object.defineProperties, __getOwnPropDescs$i = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$p = Object.getOwnPropertySymbols, __hasOwnProp$p = Object.prototype.hasOwnProperty, __propIsEnum$p = Object.prototype.propertyIsEnumerable, __defNormalProp$p = (obj, key, value)=>key in obj ? __defProp$p(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$p = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$p.call(b, prop) && __defNormalProp$p(a, prop, b[prop]);
    if (__getOwnPropSymbols$p) for (var prop of __getOwnPropSymbols$p(b))__propIsEnum$p.call(b, prop) && __defNormalProp$p(a, prop, b[prop]);
    return a;
}, __spreadProps$i = (a, b)=>__defProps$i(a, __getOwnPropDescs$i(b)), __objRest$3 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$p.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$p) for (var prop of __getOwnPropSymbols$p(source))exclude.indexOf(prop) < 0 && __propIsEnum$p.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const VOID_CHILD_KEY = "void-child";
function keepObjectEquality(object, keyMap) {
    const value = keyMap[object._key];
    return value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, value) ? value : (keyMap[object._key] = object, object);
}
function toSlateValue(value, { schemaTypes }, keyMap = {}) {
    return value && Array.isArray(value) ? value.map((block)=>{
        const _a = block, { _type, _key } = _a, rest = __objRest$3(_a, [
            "_type",
            "_key"
        ]), voidChildren = [
            {
                _key: VOID_CHILD_KEY,
                _type: "span",
                text: "",
                marks: []
            }
        ];
        if (block && block._type === schemaTypes.block.name) {
            const textBlock = block;
            let hasInlines = !1;
            const hasMissingStyle = typeof textBlock.style > "u", hasMissingMarkDefs = typeof textBlock.markDefs > "u", hasMissingChildren = typeof textBlock.children > "u", children = (textBlock.children || []).map((child)=>{
                const _a2 = child, { _type: cType, _key: cKey } = _a2, cRest = __objRest$3(_a2, [
                    "_type",
                    "_key"
                ]);
                return cType !== "span" ? (hasInlines = !0, keepObjectEquality({
                    _type: cType,
                    _key: cKey,
                    children: voidChildren,
                    value: cRest,
                    __inline: !0
                }, keyMap)) : child;
            });
            return !hasMissingStyle && !hasMissingMarkDefs && !hasMissingChildren && !hasInlines && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block) ? block : (hasMissingStyle && (rest.style = schemaTypes.styles[0].value), keepObjectEquality(__spreadProps$i(__spreadValues$p({
                _type,
                _key
            }, rest), {
                children
            }), keyMap));
        }
        return keepObjectEquality({
            _type,
            _key,
            children: voidChildren,
            value: rest
        }, keyMap);
    }) : [];
}
function fromSlateValue(value, textBlockType, keyMap = {}) {
    return value.map((block)=>{
        const { _key, _type } = block;
        if (!_key || !_type) throw new Error("Not a valid block");
        if (_type === textBlockType && "children" in block && Array.isArray(block.children) && _key) {
            let hasInlines = !1;
            const children = block.children.map((child)=>{
                const { _type: _cType } = child;
                if ("value" in child && _cType !== "span") {
                    hasInlines = !0;
                    const _a = child, { value: v, _key: k, _type: t, __inline: _i, children: _c } = _a, rest = __objRest$3(_a, [
                        "value",
                        "_key",
                        "_type",
                        "__inline",
                        "children"
                    ]);
                    return keepObjectEquality(__spreadProps$i(__spreadValues$p(__spreadValues$p({}, rest), v), {
                        _key: k,
                        _type: t
                    }), keyMap);
                }
                return child;
            });
            return hasInlines ? keepObjectEquality(__spreadProps$i(__spreadValues$p({}, block), {
                children,
                _key,
                _type
            }), keyMap) : block;
        }
        const blockValue = "value" in block && block.value;
        return keepObjectEquality(__spreadValues$p({
            _key,
            _type
        }, typeof blockValue == "object" ? blockValue : {}), keyMap);
    });
}
function isEqualToEmptyEditor(children, schemaTypes) {
    var _a;
    return children === void 0 || children && Array.isArray(children) && children.length === 0 || children && Array.isArray(children) && children.length === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(children[0]) && children[0]._type === schemaTypes.block.name && "style" in children[0] && children[0].style === schemaTypes.styles[0].value && !("listItem" in children[0]) && Array.isArray(children[0].children) && children[0].children.length === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(children[0].children[0]) && children[0].children[0]._type === "span" && !((_a = children[0].children[0].marks) != null && _a.join("")) && children[0].children[0].text === "";
}
const IS_PROCESSING_REMOTE_CHANGES = /* @__PURE__ */ new WeakMap(), IS_DRAGGING = /* @__PURE__ */ new WeakMap(), IS_DRAGGING_BLOCK_ELEMENT = /* @__PURE__ */ new WeakMap(), IS_DRAGGING_ELEMENT_TARGET = /* @__PURE__ */ new WeakMap(), IS_DRAGGING_BLOCK_TARGET_POSITION = /* @__PURE__ */ new WeakMap(), KEY_TO_SLATE_ELEMENT = /* @__PURE__ */ new WeakMap(), KEY_TO_VALUE_ELEMENT = /* @__PURE__ */ new WeakMap(), SLATE_TO_PORTABLE_TEXT_RANGE = /* @__PURE__ */ new WeakMap(), DefaultObject = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    let t0;
    $[0] !== props.value ? (t0 = JSON.stringify(props.value, null, 2), $[0] = props.value, $[1] = t0) : t0 = $[1];
    let t1;
    return $[2] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pre", {
            children: t0
        })
    }), $[2] = t0, $[3] = t1) : t1 = $[3], t1;
};
DefaultObject.displayName = "DefaultObject";
const DefaultBlockObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  user-select: none;
  border: ${(props)=>props.selected ? "1px solid blue" : "1px solid transparent"};
`;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  background: #999;
  border: ${(props)=>props.selected ? "1px solid blue" : "1px solid transparent"};
`;
const DefaultListItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div`
  &.pt-list-item {
    width: fit-content;
    position: relative;
    display: block;

    /* Important 'transform' in order to force refresh the ::before and ::after rules
      in Webkit: https://stackoverflow.com/a/21947628/831480
    */
    transform: translateZ(0);
    margin-left: ${(props)=>getLeftPositionForListLevel(props.listLevel)};
  }
  &.pt-list-item > .pt-list-item-inner {
    display: flex;
    margin: 0;
    padding: 0;
    &:before {
      justify-content: flex-start;
      vertical-align: top;
    }
  }
  &.pt-list-item-bullet > .pt-list-item-inner:before {
      content: '${(props)=>getContentForListLevelAndStyle(props.listLevel, props.listStyle)}';
      font-size: 0.4375rem; /* 7px */
      line-height: 1.5rem; /* Same as body text */
      /* Optical alignment */
      position: relative;
    }
  }
  &.pt-list-item-bullet > .pt-list-item-inner {
    &:before {
      min-width: 1.5rem; /* Make sure space between bullet and text never shrinks */
    }
  }
  &.pt-list-item-number {
    counter-increment: ${(props)=>getCounterIncrementForListLevel(props.listLevel)};
    counter-reset: ${(props)=>getCounterResetForListLevel(props.listLevel)};
  }
  & + :not(.pt-list-item-number) {
    counter-reset: listItemNumber;
  }
  &.pt-list-item-number > .pt-list-item-inner:before {
    content: ${(props)=>getCounterContentForListLevel(props.listLevel)};
    min-width: 1.5rem; /* Make sure space between number and text never shrinks */
    /* Optical alignment */
    position: relative;
    top: 1px;
  }
`, DefaultListItemInner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$13_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div``;
function getLeftPositionForListLevel(level) {
    switch(Number(level)){
        case 1:
            return "1.5em";
        case 2:
            return "3em";
        case 3:
            return "4.5em";
        case 4:
            return "6em";
        case 5:
            return "7.5em";
        case 6:
            return "9em";
        case 7:
            return "10.5em";
        case 8:
            return "12em";
        case 9:
            return "13.5em";
        case 10:
            return "15em";
        default:
            return "0em";
    }
}
const bullets = [
    "\u25CF",
    "\u25CB",
    "\u25A0"
];
function getContentForListLevelAndStyle(level, style) {
    const normalizedLevel = (level - 1) % 3;
    return style === "bullet" ? bullets[normalizedLevel] : "*";
}
function getCounterIncrementForListLevel(level) {
    switch(level){
        case 1:
            return "listItemNumber";
        case 2:
            return "listItemAlpha";
        case 3:
            return "listItemRoman";
        case 4:
            return "listItemNumberNext";
        case 5:
            return "listItemLetterNext";
        case 6:
            return "listItemRomanNext";
        case 7:
            return "listItemNumberNextNext";
        case 8:
            return "listItemAlphaNextNext";
        case 9:
            return "listItemRomanNextNext";
        default:
            return "listItemNumberNextNextNext";
    }
}
function getCounterResetForListLevel(level) {
    switch(level){
        case 1:
            return "listItemAlpha";
        case 2:
            return "listItemRoman";
        case 3:
            return "listItemNumberNext";
        case 4:
            return "listItemLetterNext";
        case 5:
            return "listItemRomanNext";
        case 6:
            return "listItemNumberNextNext";
        case 7:
            return "listItemAlphaNextNext";
        case 8:
            return "listItemRomanNextNext";
        case 9:
            return "listItemNumberNextNextNext";
        default:
            return "listItemNumberNextNextNext";
    }
}
function getCounterContentForListLevel(level) {
    switch(level){
        case 1:
            return "counter(listItemNumber) '. '";
        case 2:
            return "counter(listItemAlpha, lower-alpha) '. '";
        case 3:
            return "counter(listItemRoman, lower-roman) '. '";
        case 4:
            return "counter(listItemNumberNext) '. '";
        case 5:
            return "counter(listItemLetterNext, lower-alpha) '. '";
        case 6:
            return "counter(listItemRomanNext, lower-roman) '. '";
        case 7:
            return "counter(listItemNumberNextNext) '. '";
        case 8:
            return "counter(listItemAlphaNextNext, lower-alpha) '. '";
        case 9:
            return "counter(listItemRomanNextNext, lower-roman) '. '";
        default:
            return "counter(listItemNumberNextNextNext) '. '";
    }
}
const debug$k = debugWithName("components:DraggableBlock"), DraggableBlock = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51), { children, element, readOnly, blockRef } = t0, editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSlateStatic"])(), dragGhostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0), [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t1, t2;
    $[0] !== editor || $[1] !== element ? (t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, element), $[0] = editor, $[1] = element, $[2] = t2) : t2 = $[2], t1 = t2;
    const isVoid = t1;
    let t3, t4;
    $[3] !== editor || $[4] !== element ? (t4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isInline(editor, element), $[3] = editor, $[4] = element, $[5] = t4) : t4 = $[5], t3 = t4;
    const isInline = t3, [blockElement, setBlockElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t5, t6;
    $[6] !== blockRef || $[7] !== editor || $[8] !== element ? (t5 = ()=>setBlockElement(blockRef ? blockRef.current : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMNode(editor, element)), t6 = [
        editor,
        element,
        blockRef
    ], $[6] = blockRef, $[7] = editor, $[8] = element, $[9] = t5, $[10] = t6) : (t5 = $[9], t6 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    $[11] !== blockElement || $[12] !== editor || $[13] !== element ? (t7 = (event)=>{
        const isMyDragOver = IS_DRAGGING_BLOCK_ELEMENT.get(editor);
        if (!isMyDragOver || !blockElement) return;
        event.preventDefault(), event.dataTransfer.dropEffect = "move", IS_DRAGGING_ELEMENT_TARGET.set(editor, element);
        const elementRect = blockElement.getBoundingClientRect(), offset = elementRect.top, height = elementRect.height, Y = event.pageY, loc = Math.abs(offset - Y);
        if (element === editor.children[0] || (loc < height / 2 ? IS_DRAGGING_BLOCK_TARGET_POSITION.set(editor, "top") : IS_DRAGGING_BLOCK_TARGET_POSITION.set(editor, "bottom")), isMyDragOver === element) {
            event.dataTransfer.dropEffect = "none";
            return;
        }
        setIsDragOver(!0);
    }, $[11] = blockElement, $[12] = editor, $[13] = element, $[14] = t7) : t7 = $[14];
    const handleDragOver = t7;
    let t8;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t8 = ()=>{
        setIsDragOver(!1);
    }, $[15] = t8) : t8 = $[15];
    const handleDragLeave = t8;
    let t9;
    $[16] !== editor || $[17] !== element ? (t9 = (event_0)=>{
        const targetBlock = IS_DRAGGING_ELEMENT_TARGET.get(editor);
        if (targetBlock) {
            IS_DRAGGING.set(editor, !1), event_0.preventDefault(), event_0.stopPropagation(), IS_DRAGGING_ELEMENT_TARGET.delete(editor), dragGhostRef.current && (debug$k("Removing drag ghost"), document.body.removeChild(dragGhostRef.current));
            const dragPosition = IS_DRAGGING_BLOCK_TARGET_POSITION.get(editor);
            IS_DRAGGING_BLOCK_TARGET_POSITION.delete(editor);
            let targetPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].findPath(editor, targetBlock);
            const myPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].findPath(editor, element), isBefore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].isBefore(myPath, targetPath);
            if (dragPosition === "bottom" && !isBefore) {
                if (targetPath[0] >= editor.children.length - 1) {
                    debug$k("target is already at the bottom, not moving");
                    return;
                }
                const originalPath = targetPath;
                targetPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].next(targetPath), debug$k(`Adjusting targetPath from ${JSON.stringify(originalPath)} to ${JSON.stringify(targetPath)}`);
            }
            if (dragPosition === "top" && isBefore && targetPath[0] !== editor.children.length - 1) {
                const originalPath_0 = targetPath;
                targetPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].previous(targetPath), debug$k(`Adjusting targetPath from ${JSON.stringify(originalPath_0)} to ${JSON.stringify(targetPath)}`);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(targetPath, myPath)) {
                event_0.preventDefault(), debug$k("targetPath and myPath is the same, not moving");
                return;
            }
            debug$k(`Moving element ${element._key} from path ${JSON.stringify(myPath)} to ${JSON.stringify(targetPath)} (${dragPosition})`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].moveNodes(editor, {
                at: myPath,
                to: targetPath
            }), editor.onChange();
            return;
        }
        debug$k("No target element, not doing anything");
    }, $[16] = editor, $[17] = element, $[18] = t9) : t9 = $[18];
    const handleDragEnd = t9;
    let t10;
    $[19] !== editor || $[20] !== element ? (t10 = (event_1)=>{
        IS_DRAGGING_BLOCK_ELEMENT.get(editor) && (debug$k("On drop (prevented)", element), event_1.preventDefault(), event_1.stopPropagation(), setIsDragOver(!1));
    }, $[19] = editor, $[20] = element, $[21] = t10) : t10 = $[21];
    const handleDrop = t10;
    let t11;
    $[22] !== editor || $[23] !== element || $[24] !== isVoid ? (t11 = (event_2)=>{
        if (!isVoid) {
            IS_DRAGGING_BLOCK_ELEMENT.delete(editor);
            return;
        }
        IS_DRAGGING.set(editor, !0), IS_DRAGGING_BLOCK_ELEMENT.set(editor, element), event_2.stopPropagation();
        const target = event_2.target;
        target instanceof HTMLElement && (target.style.opacity = "1");
    }, $[22] = editor, $[23] = element, $[24] = isVoid, $[25] = t11) : t11 = $[25];
    const handleDrag = t11;
    let t12;
    $[26] !== blockElement || $[27] !== editor || $[28] !== handleDrag || $[29] !== isInline || $[30] !== isVoid ? (t12 = (event_3)=>{
        if (!isVoid || isInline) {
            debug$k("Not dragging block"), IS_DRAGGING_BLOCK_ELEMENT.delete(editor), IS_DRAGGING.set(editor, !1);
            return;
        }
        if (debug$k("Drag start"), IS_DRAGGING.set(editor, !0), event_3.dataTransfer && (event_3.dataTransfer.setData("application/portable-text", "something"), event_3.dataTransfer.effectAllowed = "move"), blockElement && blockElement instanceof HTMLElement) {
            let dragGhost = blockElement.cloneNode(!0);
            const customGhost = dragGhost.querySelector("[data-pt-drag-ghost-element]");
            if (customGhost && (dragGhost = customGhost), dragGhost.setAttribute("data-dragged", ""), document.body) {
                dragGhostRef.current = dragGhost, dragGhost.style.position = "absolute", dragGhost.style.left = "-99999px", dragGhost.style.boxSizing = "border-box", document.body.appendChild(dragGhost);
                const rect = blockElement.getBoundingClientRect(), x = event_3.clientX - rect.left, y = event_3.clientY - rect.top;
                dragGhost.style.width = `${rect.width}px`, dragGhost.style.height = `${rect.height}px`, event_3.dataTransfer.setDragImage(dragGhost, x, y);
            }
        }
        handleDrag(event_3);
    }, $[26] = blockElement, $[27] = editor, $[28] = handleDrag, $[29] = isInline, $[30] = isVoid, $[31] = t12) : t12 = $[31];
    const handleDragStart = t12;
    let t13;
    $[32] !== editor || $[33] !== isDragOver ? (t13 = isDragOver && editor.children[0] === IS_DRAGGING_ELEMENT_TARGET.get(editor), $[32] = editor, $[33] = isDragOver, $[34] = t13) : t13 = $[34];
    const isDraggingOverFirstBlock = t13;
    let t14;
    $[35] !== editor || $[36] !== isDragOver ? (t14 = isDragOver && editor.children[editor.children.length - 1] === IS_DRAGGING_ELEMENT_TARGET.get(editor), $[35] = editor, $[36] = isDragOver, $[37] = t14) : t14 = $[37];
    const isDraggingOverLastBlock = t14, dragPosition_0 = IS_DRAGGING_BLOCK_TARGET_POSITION.get(editor), isDraggingOverTop = isDraggingOverFirstBlock || isDragOver && !isDraggingOverFirstBlock && !isDraggingOverLastBlock && dragPosition_0 === "top", isDraggingOverBottom = isDraggingOverLastBlock || isDragOver && !isDraggingOverFirstBlock && !isDraggingOverLastBlock && dragPosition_0 === "bottom";
    let t15, t16;
    $[38] === Symbol.for("react.memo_cache_sentinel") ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "pt-drop-indicator",
        style: {
            position: "absolute",
            width: "100%",
            height: 1,
            borderBottom: "1px solid currentColor",
            zIndex: 5
        }
    }), $[38] = t16) : t16 = $[38], t15 = t16;
    const dropIndicator = t15;
    if (readOnly) {
        let t172;
        return $[39] !== children ? (t172 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        }), $[39] = children, $[40] = t172) : t172 = $[40], t172;
    }
    const t17 = isDraggingOverTop && dropIndicator, t18 = isDraggingOverBottom && dropIndicator;
    let t19;
    return $[41] !== children || $[42] !== handleDrag || $[43] !== handleDragEnd || $[44] !== handleDragOver || $[45] !== handleDragStart || $[46] !== handleDrop || $[47] !== isVoid || $[48] !== t17 || $[49] !== t18 ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        draggable: isVoid,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDragEnd: handleDragEnd,
        onDrop: handleDrop,
        children: [
            t17,
            children,
            t18
        ]
    }), $[41] = children, $[42] = handleDrag, $[43] = handleDragEnd, $[44] = handleDragOver, $[45] = handleDragStart, $[46] = handleDrop, $[47] = isVoid, $[48] = t17, $[49] = t18, $[50] = t19) : t19 = $[50], t19;
};
DraggableBlock.displayName = "DraggableBlock";
var __defProp$o = Object.defineProperty, __defProps$h = Object.defineProperties, __getOwnPropDescs$h = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$o = Object.getOwnPropertySymbols, __hasOwnProp$o = Object.prototype.hasOwnProperty, __propIsEnum$o = Object.prototype.propertyIsEnumerable, __defNormalProp$o = (obj, key, value)=>key in obj ? __defProp$o(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$o = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$o.call(b, prop) && __defNormalProp$o(a, prop, b[prop]);
    if (__getOwnPropSymbols$o) for (var prop of __getOwnPropSymbols$o(b))__propIsEnum$o.call(b, prop) && __defNormalProp$o(a, prop, b[prop]);
    return a;
}, __spreadProps$h = (a, b)=>__defProps$h(a, __getOwnPropDescs$h(b));
debugWithName("components:Element");
const EMPTY_ANNOTATIONS = [], inlineBlockStyle = {
    display: "inline-block"
}, Element = ({ attributes, children, element, schemaTypes, readOnly, renderBlock, renderChild, renderListItem, renderStyle, spellCheck })=>{
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSlateStatic"])(), selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSelected"])(), blockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), inlineBlockObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), focused = selected && editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection) || !1, value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Element.useMemo[value]": ()=>fromSlateValue([
                element
            ], schemaTypes.block.name, KEY_TO_VALUE_ELEMENT.get(editor))[0]
    }["Element.useMemo[value]"], [
        editor,
        element,
        schemaTypes.block.name
    ]);
    let renderedBlock = children, className;
    const blockPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Element.useMemo[blockPath]": ()=>[
                {
                    _key: element._key
                }
            ]
    }["Element.useMemo[blockPath]"], [
        element
    ]);
    if (typeof element._type != "string") throw new Error("Expected element to have a _type property");
    if (typeof element._key != "string") throw new Error("Expected element to have a _key property");
    if (editor.isInline(element)) {
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].findPath(editor, element), [block] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, path, {
            depth: 1
        }), schemaType = schemaTypes.inlineObjects.find((_type)=>_type.name === element._type);
        if (!schemaType) throw new Error("Could not find type for inline block element");
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block)) {
            const elmPath = [
                {
                    _key: block._key
                },
                "children",
                {
                    _key: element._key
                }
            ];
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", __spreadProps$h(__spreadValues$o({}, attributes), {
                children: [
                    children,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                        draggable: !readOnly,
                        className: "pt-inline-object",
                        "data-testid": "pt-inline-object",
                        ref: inlineBlockObjectRef,
                        style: inlineBlockStyle,
                        contentEditable: !1,
                        children: [
                            renderChild && renderChild({
                                annotations: EMPTY_ANNOTATIONS,
                                // These inline objects currently doesn't support annotations. This is a limitation of the current PT spec/model.
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultObject, {
                                    value
                                }),
                                editorElementRef: inlineBlockObjectRef,
                                focused,
                                path: elmPath,
                                schemaType,
                                selected,
                                type: schemaType,
                                value
                            }),
                            !renderChild && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultObject, {
                                value
                            })
                        ]
                    }, element._key)
                ]
            }));
        }
        throw new Error("Block not found!");
    }
    if (element._type === schemaTypes.block.name) {
        className = "pt-block pt-text-block";
        const isListItem = "listItem" in element, style = "style" in element && element.style || "normal";
        className = `pt-block pt-text-block pt-text-block-style-${style}`;
        const blockStyleType = schemaTypes.styles.find((item)=>item.value === style);
        renderStyle && blockStyleType && (renderedBlock = renderStyle({
            block: element,
            children,
            focused,
            selected,
            value: style,
            path: blockPath,
            schemaType: blockStyleType,
            editorElementRef: blockRef
        }));
        let level;
        if (isListItem && (typeof element.level == "number" && (level = element.level), className += ` pt-list-item pt-list-item-${element.listItem} pt-list-item-level-${level || 1}`), editor.isListBlock(value) && isListItem && element.listItem) {
            const listType = schemaTypes.lists.find((item_0)=>item_0.value === element.listItem);
            renderListItem && listType ? renderedBlock = renderListItem({
                block: value,
                children: renderedBlock,
                focused,
                selected,
                value: element.listItem,
                path: blockPath,
                schemaType: listType,
                level: value.level || 1,
                editorElementRef: blockRef
            }) : renderedBlock = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultListItem, {
                listStyle: value.listItem || schemaTypes.lists[0].value,
                listLevel: value.level || 1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultListItemInner, {
                    children: renderedBlock
                })
            });
        }
        const renderProps = Object.defineProperty({
            children: renderedBlock,
            editorElementRef: blockRef,
            focused,
            level,
            listItem: isListItem ? element.listItem : void 0,
            path: blockPath,
            selected,
            style,
            schemaType: schemaTypes.block,
            value
        }, "type", {
            enumerable: !1,
            get () {
                return console.warn("Property 'type' is deprecated, use 'schemaType' instead."), schemaTypes.block;
            }
        }), propsOrDefaultRendered = renderBlock ? renderBlock(renderProps) : children;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", __spreadProps$h(__spreadValues$o({}, attributes), {
            className,
            spellCheck,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DraggableBlock, {
                element,
                readOnly,
                blockRef,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: blockRef,
                    children: propsOrDefaultRendered
                })
            })
        }), element._key);
    }
    const schemaType_0 = schemaTypes.blockObjects.find((_type_0)=>_type_0.name === element._type);
    if (!schemaType_0) throw new Error(`Could not find schema type for block element of _type ${element._type}`);
    className = "pt-block pt-object-block";
    const block_0 = fromSlateValue([
        element
    ], schemaTypes.block.name, KEY_TO_VALUE_ELEMENT.get(editor))[0];
    let renderedBlockFromProps;
    if (renderBlock) {
        const _props = Object.defineProperty({
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultObject, {
                value
            }),
            editorElementRef: blockRef,
            focused,
            path: blockPath,
            schemaType: schemaType_0,
            selected,
            value: block_0
        }, "type", {
            enumerable: !1,
            get () {
                return console.warn("Property 'type' is deprecated, use 'schemaType' instead."), schemaType_0;
            }
        });
        renderedBlockFromProps = renderBlock(_props);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", __spreadProps$h(__spreadValues$o({}, attributes), {
        className,
        children: [
            children,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(DraggableBlock, {
                element,
                readOnly,
                blockRef,
                children: [
                    renderedBlockFromProps && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ref: blockRef,
                        contentEditable: !1,
                        children: renderedBlockFromProps
                    }),
                    !renderedBlockFromProps && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultBlockObject, {
                        selected,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultObject, {
                            value
                        })
                    })
                ]
            })
        ]
    }), element._key);
};
Element.displayName = "Element";
const PortableTextEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), usePortableTextEditor = ()=>{
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PortableTextEditorContext);
    if (!editor) throw new Error("The `usePortableTextEditor` hook must be used inside the <PortableTextEditor> component's context.");
    return editor;
};
function DefaultAnnotation(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    let t0;
    $[0] !== props.annotation ? (t0 = ()=>alert(JSON.stringify(props.annotation)), $[0] = props.annotation, $[1] = t0) : t0 = $[1];
    const handleClick = t0;
    let t1;
    $[2] === Symbol.for("react.memo_cache_sentinel") ? (t1 = {
        color: "blue"
    }, $[2] = t1) : t1 = $[2];
    let t2;
    return $[3] !== handleClick || $[4] !== props.children ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        style: t1,
        onClick: handleClick,
        children: props.children
    }), $[3] = handleClick, $[4] = props.children, $[5] = t2) : t2 = $[5], t2;
}
DefaultAnnotation.displayName = "DefaultAnnotation";
function compileType(rawType) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$schema$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$schema$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"].compile({
        name: "blockTypeSchema",
        types: [
            rawType
        ]
    }).get(rawType.name);
}
const FLUSH_PATCHES_THROTTLED_MS = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1e3, mutationMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {
        context: {},
        events: {},
        input: {},
        emitted: {}
    },
    actions: {
        "emit has pending patches": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
            type: "has pending patches"
        }),
        "emit mutation": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ context })=>({
                type: "mutation",
                patches: context.pendingPatches,
                snapshot: fromSlateValue(context.slateEditor.children, context.schema.block.name, KEY_TO_VALUE_ELEMENT.get(context.slateEditor))
            })),
        "clear pending patches": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingPatches: []
        }),
        "defer patch": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingPatches: ({ context, event })=>[
                    ...context.pendingPatches,
                    event.patch
                ]
        })
    },
    guards: {
        "slate is normalizing": ({ context })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isNormalizing(context.slateEditor)
    }
}).createMachine({
    id: "mutation",
    context: ({ input })=>({
            pendingPatches: [],
            schema: input.schema,
            slateEditor: input.slateEditor
        }),
    initial: "idle",
    states: {
        idle: {
            on: {
                patch: {
                    actions: [
                        "defer patch",
                        "emit has pending patches"
                    ],
                    target: "has pending patches"
                }
            }
        },
        "has pending patches": {
            after: {
                [FLUSH_PATCHES_THROTTLED_MS]: [
                    {
                        guard: "slate is normalizing",
                        target: "idle",
                        actions: [
                            "emit mutation",
                            "clear pending patches"
                        ]
                    },
                    {
                        reenter: !0
                    }
                ]
            },
            on: {
                patch: {
                    actions: [
                        "defer patch"
                    ],
                    reenter: !0
                }
            }
        }
    }
});
var __defProp$n = Object.defineProperty, __defProps$g = Object.defineProperties, __getOwnPropDescs$g = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$n = Object.getOwnPropertySymbols, __hasOwnProp$n = Object.prototype.hasOwnProperty, __propIsEnum$n = Object.prototype.propertyIsEnumerable, __defNormalProp$n = (obj, key, value)=>key in obj ? __defProp$n(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$n = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$n.call(b, prop) && __defNormalProp$n(a, prop, b[prop]);
    if (__getOwnPropSymbols$n) for (var prop of __getOwnPropSymbols$n(b))__propIsEnum$n.call(b, prop) && __defNormalProp$n(a, prop, b[prop]);
    return a;
}, __spreadProps$g = (a, b)=>__defProps$g(a, __getOwnPropDescs$g(b));
function validateValue(value, types, keyGenerator) {
    let resolution = null, valid = !0;
    const validChildTypes = [
        types.span.name,
        ...types.inlineObjects.map((t)=>t.name)
    ], validBlockTypes = [
        types.block.name,
        ...types.blockObjects.map((t)=>t.name)
    ];
    return value === void 0 ? {
        valid: !0,
        resolution: null,
        value
    } : !Array.isArray(value) || value.length === 0 ? {
        valid: !1,
        resolution: {
            patches: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([])
            ],
            description: "Editor value must be an array of Portable Text blocks, or undefined.",
            action: "Unset the value",
            item: value,
            i18n: {
                description: "inputs.portable-text.invalid-value.not-an-array.description",
                action: "inputs.portable-text.invalid-value.not-an-array.action"
            }
        },
        value
    } : (value.some((blk, index)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(blk)) return resolution = {
            patches: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                    index
                ])
            ],
            description: `Block must be an object, got ${String(blk)}`,
            action: "Unset invalid item",
            item: blk,
            i18n: {
                description: "inputs.portable-text.invalid-value.not-an-object.description",
                action: "inputs.portable-text.invalid-value.not-an-object.action",
                values: {
                    index
                }
            }
        }, !0;
        if (!blk._key || typeof blk._key != "string") return resolution = {
            patches: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(__spreadProps$g(__spreadValues$n({}, blk), {
                    _key: keyGenerator()
                }), [
                    index
                ])
            ],
            description: `Block at index ${index} is missing required _key.`,
            action: "Set the block with a random _key value",
            item: blk,
            i18n: {
                description: "inputs.portable-text.invalid-value.missing-key.description",
                action: "inputs.portable-text.invalid-value.missing-key.action",
                values: {
                    index
                }
            }
        }, !0;
        if (!blk._type || !validBlockTypes.includes(blk._type)) {
            if (blk._type === "block") {
                const currentBlockTypeName = types.block.name;
                return resolution = {
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(__spreadProps$g(__spreadValues$n({}, blk), {
                            _type: currentBlockTypeName
                        }), [
                            {
                                _key: blk._key
                            }
                        ])
                    ],
                    description: `Block with _key '${blk._key}' has invalid type name '${blk._type}'. According to the schema, the block type name is '${currentBlockTypeName}'`,
                    action: `Use type '${currentBlockTypeName}'`,
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.incorrect-block-type.description",
                        action: "inputs.portable-text.invalid-value.incorrect-block-type.action",
                        values: {
                            key: blk._key,
                            expectedTypeName: currentBlockTypeName
                        }
                    }
                }, !0;
            }
            return !blk._type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(__spreadProps$g(__spreadValues$n({}, blk), {
                _type: types.block.name
            })) ? (resolution = {
                patches: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(__spreadProps$g(__spreadValues$n({}, blk), {
                        _type: types.block.name
                    }), [
                        {
                            _key: blk._key
                        }
                    ])
                ],
                description: `Block with _key '${blk._key}' is missing a type name. According to the schema, the block type name is '${types.block.name}'`,
                action: `Use type '${types.block.name}'`,
                item: blk,
                i18n: {
                    description: "inputs.portable-text.invalid-value.missing-block-type.description",
                    action: "inputs.portable-text.invalid-value.missing-block-type.action",
                    values: {
                        key: blk._key,
                        expectedTypeName: types.block.name
                    }
                }
            }, !0) : blk._type ? (resolution = {
                patches: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                        {
                            _key: blk._key
                        }
                    ])
                ],
                description: `Block with _key '${blk._key}' has invalid _type '${blk._type}'`,
                action: "Remove the block",
                item: blk,
                i18n: {
                    description: "inputs.portable-text.invalid-value.disallowed-type.description",
                    action: "inputs.portable-text.invalid-value.disallowed-type.action",
                    values: {
                        key: blk._key,
                        typeName: blk._type
                    }
                }
            }, !0) : (resolution = {
                patches: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                        {
                            _key: blk._key
                        }
                    ])
                ],
                description: `Block with _key '${blk._key}' is missing an _type property`,
                action: "Remove the block",
                item: blk,
                i18n: {
                    description: "inputs.portable-text.invalid-value.missing-type.description",
                    action: "inputs.portable-text.invalid-value.missing-type.action",
                    values: {
                        key: blk._key
                    }
                }
            }, !0);
        }
        if (blk._type === types.block.name) {
            const textBlock = blk;
            if (textBlock.children && !Array.isArray(textBlock.children)) return resolution = {
                patches: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])({
                        children: []
                    }, [
                        {
                            _key: textBlock._key
                        }
                    ])
                ],
                description: `Text block with _key '${textBlock._key}' has a invalid required property 'children'.`,
                action: "Reset the children property",
                item: textBlock,
                i18n: {
                    description: "inputs.portable-text.invalid-value.missing-or-invalid-children.description",
                    action: "inputs.portable-text.invalid-value.missing-or-invalid-children.action",
                    values: {
                        key: textBlock._key
                    }
                }
            }, !0;
            if (textBlock.children === void 0 || Array.isArray(textBlock.children) && textBlock.children.length === 0) {
                const newSpan = {
                    _type: types.span.name,
                    _key: keyGenerator(),
                    text: "",
                    marks: []
                };
                return resolution = {
                    autoResolve: !0,
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfMissing"])([], [
                            {
                                _key: blk._key
                            },
                            "children"
                        ]),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                            newSpan
                        ], "after", [
                            {
                                _key: blk._key
                            },
                            "children",
                            0
                        ])
                    ],
                    description: `Children for text block with _key '${blk._key}' is empty.`,
                    action: "Insert an empty text",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.empty-children.description",
                        action: "inputs.portable-text.invalid-value.empty-children.action",
                        values: {
                            key: blk._key
                        }
                    }
                }, !0;
            }
            const allUsedMarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(textBlock.children.filter((cld)=>cld._type === types.span.name).map((cld)=>cld.marks || [])));
            if (Array.isArray(blk.markDefs) && blk.markDefs.length > 0) {
                const unusedMarkDefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(blk.markDefs.map((def)=>def._key).filter((key)=>!allUsedMarks.includes(key)));
                if (unusedMarkDefs.length > 0) return resolution = {
                    autoResolve: !0,
                    patches: unusedMarkDefs.map((markDefKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                            {
                                _key: blk._key
                            },
                            "markDefs",
                            {
                                _key: markDefKey
                            }
                        ])),
                    description: `Block contains orphaned data (unused mark definitions): ${unusedMarkDefs.join(", ")}.`,
                    action: "Remove unused mark definition item",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.orphaned-mark-defs.description",
                        action: "inputs.portable-text.invalid-value.orphaned-mark-defs.action",
                        values: {
                            key: blk._key,
                            unusedMarkDefs: unusedMarkDefs.map((m)=>m.toString())
                        }
                    }
                }, !0;
            }
            const orphanedMarks = allUsedMarks.filter((mark)=>!types.decorators.map((dec)=>dec.value).includes(mark)).filter((mark)=>textBlock.markDefs === void 0 || !textBlock.markDefs.find((def)=>def._key === mark));
            if (orphanedMarks.length > 0) {
                const spanChildren = textBlock.children.filter((cld)=>cld._type === types.span.name && Array.isArray(cld.marks) && cld.marks.some((mark)=>orphanedMarks.includes(mark)));
                if (spanChildren) {
                    const orphaned = orphanedMarks.join(", ");
                    return resolution = {
                        autoResolve: !0,
                        patches: spanChildren.map((child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])((child.marks || []).filter((cMrk)=>!orphanedMarks.includes(cMrk)), [
                                {
                                    _key: blk._key
                                },
                                "children",
                                {
                                    _key: child._key
                                },
                                "marks"
                            ])),
                        description: `Block with _key '${blk._key}' contains marks (${orphaned}) not supported by the current content model.`,
                        action: "Remove invalid marks",
                        item: blk,
                        i18n: {
                            description: "inputs.portable-text.invalid-value.orphaned-marks.description",
                            action: "inputs.portable-text.invalid-value.orphaned-marks.action",
                            values: {
                                key: blk._key,
                                orphanedMarks: orphanedMarks.map((m)=>m.toString())
                            }
                        }
                    }, !0;
                }
            }
            textBlock.children.some((child, cIndex)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child)) return resolution = {
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                            {
                                _key: blk._key
                            },
                            "children",
                            cIndex
                        ])
                    ],
                    description: `Child at index '${cIndex}' in block with key '${blk._key}' is not an object.`,
                    action: "Remove the item",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.non-object-child.description",
                        action: "inputs.portable-text.invalid-value.non-object-child.action",
                        values: {
                            key: blk._key,
                            index: cIndex
                        }
                    }
                }, !0;
                if (!child._key || typeof child._key != "string") {
                    const newChild = __spreadProps$g(__spreadValues$n({}, child), {
                        _key: keyGenerator()
                    });
                    return resolution = {
                        autoResolve: !0,
                        patches: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(newChild, [
                                {
                                    _key: blk._key
                                },
                                "children",
                                cIndex
                            ])
                        ],
                        description: `Child at index ${cIndex} is missing required _key in block with _key ${blk._key}.`,
                        action: "Set a new random _key on the object",
                        item: blk,
                        i18n: {
                            description: "inputs.portable-text.invalid-value.missing-child-key.description",
                            action: "inputs.portable-text.invalid-value.missing-child-key.action",
                            values: {
                                key: blk._key,
                                index: cIndex
                            }
                        }
                    }, !0;
                }
                return child._type ? validChildTypes.includes(child._type) ? child._type === types.span.name && typeof child.text != "string" ? (resolution = {
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(__spreadProps$g(__spreadValues$n({}, child), {
                            text: ""
                        }), [
                            {
                                _key: blk._key
                            },
                            "children",
                            {
                                _key: child._key
                            }
                        ])
                    ],
                    description: `Child with _key '${child._key}' in block with key '${blk._key}' has missing or invalid text property!`,
                    action: "Write an empty text property to the object",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.invalid-span-text.description",
                        action: "inputs.portable-text.invalid-value.invalid-span-text.action",
                        values: {
                            key: blk._key,
                            childKey: child._key
                        }
                    }
                }, !0) : !1 : (resolution = {
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                            {
                                _key: blk._key
                            },
                            "children",
                            {
                                _key: child._key
                            }
                        ])
                    ],
                    description: `Child with _key '${child._key}' in block with key '${blk._key}' has invalid '_type' property (${child._type}).`,
                    action: "Remove the object",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.disallowed-child-type.description",
                        action: "inputs.portable-text.invalid-value.disallowed-child-type.action",
                        values: {
                            key: blk._key,
                            childKey: child._key,
                            childType: child._type
                        }
                    }
                }, !0) : (resolution = {
                    patches: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                            {
                                _key: blk._key
                            },
                            "children",
                            {
                                _key: child._key
                            }
                        ])
                    ],
                    description: `Child with _key '${child._key}' in block with key '${blk._key}' is missing '_type' property.`,
                    action: "Remove the object",
                    item: blk,
                    i18n: {
                        description: "inputs.portable-text.invalid-value.missing-child-type.description",
                        action: "inputs.portable-text.invalid-value.missing-child-type.action",
                        values: {
                            key: blk._key,
                            childKey: child._key
                        }
                    }
                }, !0);
            }) && (valid = !1);
        }
        return !1;
    }) && (valid = !1), {
        valid,
        resolution,
        value
    });
}
function withRemoteChanges(editor, fn) {
    const prev = isChangingRemotely(editor) || !1;
    IS_PROCESSING_REMOTE_CHANGES.set(editor, !0), fn(), IS_PROCESSING_REMOTE_CHANGES.set(editor, prev);
}
function isChangingRemotely(editor) {
    return IS_PROCESSING_REMOTE_CHANGES.get(editor);
}
const PATCHING = /* @__PURE__ */ new WeakMap();
function withoutPatching(editor, fn) {
    const prev = isPatching(editor);
    PATCHING.set(editor, !1), fn(), PATCHING.set(editor, prev);
}
function isPatching(editor) {
    return PATCHING.get(editor);
}
function isHighSurrogate(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 55296 && charCode <= 56319;
}
function isLowSurrogate(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 56320 && charCode <= 57343;
}
function cloneDiff(diff2) {
    const [type, patch] = diff2;
    return [
        type,
        patch
    ];
}
function getCommonOverlap(textA, textB) {
    let text1 = textA, text2 = textB;
    const text1Length = text1.length, text2Length = text2.length;
    if (text1Length === 0 || text2Length === 0) return 0;
    text1Length > text2Length ? text1 = text1.substring(text1Length - text2Length) : text1Length < text2Length && (text2 = text2.substring(0, text1Length));
    const textLength = Math.min(text1Length, text2Length);
    if (text1 === text2) return textLength;
    let best = 0, length = 1;
    for(let found = 0; found !== -1;){
        const pattern = text1.substring(textLength - length);
        if (found = text2.indexOf(pattern), found === -1) return best;
        length += found, (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) && (best = length, length++);
    }
    return best;
}
function getCommonPrefix(text1, text2) {
    if (!text1 || !text2 || text1[0] !== text2[0]) return 0;
    let pointerMin = 0, pointerMax = Math.min(text1.length, text2.length), pointerMid = pointerMax, pointerStart = 0;
    for(; pointerMin < pointerMid;)text1.substring(pointerStart, pointerMid) === text2.substring(pointerStart, pointerMid) ? (pointerMin = pointerMid, pointerStart = pointerMin) : pointerMax = pointerMid, pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    return pointerMid;
}
function getCommonSuffix(text1, text2) {
    if (!text1 || !text2 || text1[text1.length - 1] !== text2[text2.length - 1]) return 0;
    let pointerMin = 0, pointerMax = Math.min(text1.length, text2.length), pointerMid = pointerMax, pointerEnd = 0;
    for(; pointerMin < pointerMid;)text1.substring(text1.length - pointerMid, text1.length - pointerEnd) === text2.substring(text2.length - pointerMid, text2.length - pointerEnd) ? (pointerMin = pointerMid, pointerEnd = pointerMin) : pointerMax = pointerMid, pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    return pointerMid;
}
function cleanupSemantic(rawDiffs) {
    let diffs = rawDiffs.map((diff2)=>cloneDiff(diff2)), hasChanges = !1;
    const equalities = [];
    let equalitiesLength = 0, lastEquality = null, pointer = 0, lengthInsertions1 = 0, lengthDeletions1 = 0, lengthInsertions2 = 0, lengthDeletions2 = 0;
    for(; pointer < diffs.length;)diffs[pointer][0] === DIFF_EQUAL ? (equalities[equalitiesLength++] = pointer, lengthInsertions1 = lengthInsertions2, lengthDeletions1 = lengthDeletions2, lengthInsertions2 = 0, lengthDeletions2 = 0, lastEquality = diffs[pointer][1]) : (diffs[pointer][0] === DIFF_INSERT ? lengthInsertions2 += diffs[pointer][1].length : lengthDeletions2 += diffs[pointer][1].length, lastEquality && lastEquality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastEquality.length <= Math.max(lengthInsertions2, lengthDeletions2) && (diffs.splice(equalities[equalitiesLength - 1], 0, [
        DIFF_DELETE,
        lastEquality
    ]), diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT, equalitiesLength--, equalitiesLength--, pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, lengthInsertions1 = 0, lengthDeletions1 = 0, lengthInsertions2 = 0, lengthDeletions2 = 0, lastEquality = null, hasChanges = !0)), pointer++;
    for(hasChanges && (diffs = cleanupMerge(diffs)), diffs = cleanupSemanticLossless(diffs), pointer = 1; pointer < diffs.length;){
        if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
            const deletion = diffs[pointer - 1][1], insertion = diffs[pointer][1], overlapLength1 = getCommonOverlap(deletion, insertion), overlapLength2 = getCommonOverlap(insertion, deletion);
            overlapLength1 >= overlapLength2 ? (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) && (diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                insertion.substring(0, overlapLength1)
            ]), diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1), diffs[pointer + 1][1] = insertion.substring(overlapLength1), pointer++) : (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) && (diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                deletion.substring(0, overlapLength2)
            ]), diffs[pointer - 1][0] = DIFF_INSERT, diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2), diffs[pointer + 1][0] = DIFF_DELETE, diffs[pointer + 1][1] = deletion.substring(overlapLength2), pointer++), pointer++;
        }
        pointer++;
    }
    return diffs;
}
const nonAlphaNumericRegex = /[^a-zA-Z0-9]/, whitespaceRegex = /\s/, linebreakRegex = /[\r\n]/, blanklineEndRegex = /\n\r?\n$/, blanklineStartRegex = /^\r?\n\r?\n/;
function cleanupSemanticLossless(rawDiffs) {
    const diffs = rawDiffs.map((diff2)=>cloneDiff(diff2));
    function diffCleanupSemanticScore(one, two) {
        if (!one || !two) return 6;
        const char1 = one.charAt(one.length - 1), char2 = two.charAt(0), nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex), nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex), whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex), whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex), lineBreak1 = whitespace1 && char1.match(linebreakRegex), lineBreak2 = whitespace2 && char2.match(linebreakRegex), blankLine1 = lineBreak1 && one.match(blanklineEndRegex), blankLine2 = lineBreak2 && two.match(blanklineStartRegex);
        return blankLine1 || blankLine2 ? 5 : lineBreak1 || lineBreak2 ? 4 : nonAlphaNumeric1 && !whitespace1 && whitespace2 ? 3 : whitespace1 || whitespace2 ? 2 : nonAlphaNumeric1 || nonAlphaNumeric2 ? 1 : 0;
    }
    let pointer = 1;
    for(; pointer < diffs.length - 1;){
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
            let equality1 = diffs[pointer - 1][1], edit = diffs[pointer][1], equality2 = diffs[pointer + 1][1];
            const commonOffset = getCommonSuffix(equality1, edit);
            if (commonOffset) {
                const commonString = edit.substring(edit.length - commonOffset);
                equality1 = equality1.substring(0, equality1.length - commonOffset), edit = commonString + edit.substring(0, edit.length - commonOffset), equality2 = commonString + equality2;
            }
            let bestEquality1 = equality1, bestEdit = edit, bestEquality2 = equality2, bestScore = diffCleanupSemanticScore(equality1, edit) + diffCleanupSemanticScore(edit, equality2);
            for(; edit.charAt(0) === equality2.charAt(0);){
                equality1 += edit.charAt(0), edit = edit.substring(1) + equality2.charAt(0), equality2 = equality2.substring(1);
                const score = diffCleanupSemanticScore(equality1, edit) + diffCleanupSemanticScore(edit, equality2);
                score >= bestScore && (bestScore = score, bestEquality1 = equality1, bestEdit = edit, bestEquality2 = equality2);
            }
            diffs[pointer - 1][1] !== bestEquality1 && (bestEquality1 ? diffs[pointer - 1][1] = bestEquality1 : (diffs.splice(pointer - 1, 1), pointer--), diffs[pointer][1] = bestEdit, bestEquality2 ? diffs[pointer + 1][1] = bestEquality2 : (diffs.splice(pointer + 1, 1), pointer--));
        }
        pointer++;
    }
    return diffs;
}
function cleanupMerge(rawDiffs) {
    let diffs = rawDiffs.map((diff2)=>cloneDiff(diff2));
    diffs.push([
        DIFF_EQUAL,
        ""
    ]);
    let pointer = 0, countDelete = 0, countInsert = 0, textDelete = "", textInsert = "", commonlength;
    for(; pointer < diffs.length;)switch(diffs[pointer][0]){
        case DIFF_INSERT:
            countInsert++, textInsert += diffs[pointer][1], pointer++;
            break;
        case DIFF_DELETE:
            countDelete++, textDelete += diffs[pointer][1], pointer++;
            break;
        case DIFF_EQUAL:
            countDelete + countInsert > 1 ? (countDelete !== 0 && countInsert !== 0 && (commonlength = getCommonPrefix(textInsert, textDelete), commonlength !== 0 && (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL ? diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength) : (diffs.splice(0, 0, [
                DIFF_EQUAL,
                textInsert.substring(0, commonlength)
            ]), pointer++), textInsert = textInsert.substring(commonlength), textDelete = textDelete.substring(commonlength)), commonlength = getCommonSuffix(textInsert, textDelete), commonlength !== 0 && (diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1], textInsert = textInsert.substring(0, textInsert.length - commonlength), textDelete = textDelete.substring(0, textDelete.length - commonlength))), pointer -= countDelete + countInsert, diffs.splice(pointer, countDelete + countInsert), textDelete.length && (diffs.splice(pointer, 0, [
                DIFF_DELETE,
                textDelete
            ]), pointer++), textInsert.length && (diffs.splice(pointer, 0, [
                DIFF_INSERT,
                textInsert
            ]), pointer++), pointer++) : pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL ? (diffs[pointer - 1][1] += diffs[pointer][1], diffs.splice(pointer, 1)) : pointer++, countInsert = 0, countDelete = 0, textDelete = "", textInsert = "";
            break;
        default:
            throw new Error("Unknown diff operation");
    }
    diffs[diffs.length - 1][1] === "" && diffs.pop();
    let hasChanges = !1;
    for(pointer = 1; pointer < diffs.length - 1;)diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL && (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1] ? (diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length), diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1], diffs.splice(pointer - 1, 1), hasChanges = !0) : diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1] && (diffs[pointer - 1][1] += diffs[pointer + 1][1], diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1], diffs.splice(pointer + 1, 1), hasChanges = !0)), pointer++;
    return hasChanges && (diffs = cleanupMerge(diffs)), diffs;
}
function trueCount() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return args.reduce((n, bool)=>n + (bool ? 1 : 0), 0);
}
function cleanupEfficiency(rawDiffs) {
    let editCost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, diffs = rawDiffs.map((diff2)=>cloneDiff(diff2)), hasChanges = !1;
    const equalities = [];
    let equalitiesLength = 0, lastEquality = null, pointer = 0, preIns = !1, preDel = !1, postIns = !1, postDel = !1;
    for(; pointer < diffs.length;)diffs[pointer][0] === DIFF_EQUAL ? (diffs[pointer][1].length < editCost && (postIns || postDel) ? (equalities[equalitiesLength++] = pointer, preIns = postIns, preDel = postDel, lastEquality = diffs[pointer][1]) : (equalitiesLength = 0, lastEquality = null), postIns = !1, postDel = !1) : (diffs[pointer][0] === DIFF_DELETE ? postDel = !0 : postIns = !0, lastEquality && (preIns && preDel && postIns && postDel || lastEquality.length < editCost / 2 && trueCount(preIns, preDel, postIns, postDel) === 3) && (diffs.splice(equalities[equalitiesLength - 1], 0, [
        DIFF_DELETE,
        lastEquality
    ]), diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT, equalitiesLength--, lastEquality = null, preIns && preDel ? (postIns = !0, postDel = !0, equalitiesLength = 0) : (equalitiesLength--, pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, postIns = !1, postDel = !1), hasChanges = !0)), pointer++;
    return hasChanges && (diffs = cleanupMerge(diffs)), diffs;
}
function bisect(text1, text2, deadline) {
    const text1Length = text1.length, text2Length = text2.length, maxD = Math.ceil((text1Length + text2Length) / 2), vOffset = maxD, vLength = 2 * maxD, v1 = new Array(vLength), v2 = new Array(vLength);
    for(let x = 0; x < vLength; x++)v1[x] = -1, v2[x] = -1;
    v1[vOffset + 1] = 0, v2[vOffset + 1] = 0;
    const delta = text1Length - text2Length, front = delta % 2 !== 0;
    let k1start = 0, k1end = 0, k2start = 0, k2end = 0;
    for(let d = 0; d < maxD && !(Date.now() > deadline); d++){
        for(let k1 = -d + k1start; k1 <= d - k1end; k1 += 2){
            const k1Offset = vOffset + k1;
            let x1;
            k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1] ? x1 = v1[k1Offset + 1] : x1 = v1[k1Offset - 1] + 1;
            let y1 = x1 - k1;
            for(; x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1);)x1++, y1++;
            if (v1[k1Offset] = x1, x1 > text1Length) k1end += 2;
            else if (y1 > text2Length) k1start += 2;
            else if (front) {
                const k2Offset = vOffset + delta - k1;
                if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                    const x2 = text1Length - v2[k2Offset];
                    if (x1 >= x2) return bisectSplit(text1, text2, x1, y1, deadline);
                }
            }
        }
        for(let k2 = -d + k2start; k2 <= d - k2end; k2 += 2){
            const k2Offset = vOffset + k2;
            let x2;
            k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1] ? x2 = v2[k2Offset + 1] : x2 = v2[k2Offset - 1] + 1;
            let y2 = x2 - k2;
            for(; x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1);)x2++, y2++;
            if (v2[k2Offset] = x2, x2 > text1Length) k2end += 2;
            else if (y2 > text2Length) k2start += 2;
            else if (!front) {
                const k1Offset = vOffset + delta - k2;
                if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                    const x1 = v1[k1Offset], y1 = vOffset + x1 - k1Offset;
                    if (x2 = text1Length - x2, x1 >= x2) return bisectSplit(text1, text2, x1, y1, deadline);
                }
            }
        }
    }
    return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
}
function bisectSplit(text1, text2, x, y, deadline) {
    const text1a = text1.substring(0, x), text2a = text2.substring(0, y), text1b = text1.substring(x), text2b = text2.substring(y), diffs = doDiff(text1a, text2a, {
        checkLines: !1,
        deadline
    }), diffsb = doDiff(text1b, text2b, {
        checkLines: !1,
        deadline
    });
    return diffs.concat(diffsb);
}
function findHalfMatch(text1, text2) {
    if ((arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1) <= 0) return null;
    const longText = text1.length > text2.length ? text1 : text2, shortText = text1.length > text2.length ? text2 : text1;
    if (longText.length < 4 || shortText.length * 2 < longText.length) return null;
    const halfMatch1 = halfMatchI(longText, shortText, Math.ceil(longText.length / 4)), halfMatch2 = halfMatchI(longText, shortText, Math.ceil(longText.length / 2));
    let halfMatch;
    if (halfMatch1 && halfMatch2) halfMatch = halfMatch1[4].length > halfMatch2[4].length ? halfMatch1 : halfMatch2;
    else {
        if (!halfMatch1 && !halfMatch2) return null;
        halfMatch2 ? halfMatch1 || (halfMatch = halfMatch2) : halfMatch = halfMatch1;
    }
    if (!halfMatch) throw new Error("Unable to find a half match.");
    let text1A, text1B, text2A, text2B;
    text1.length > text2.length ? (text1A = halfMatch[0], text1B = halfMatch[1], text2A = halfMatch[2], text2B = halfMatch[3]) : (text2A = halfMatch[0], text2B = halfMatch[1], text1A = halfMatch[2], text1B = halfMatch[3]);
    const midCommon = halfMatch[4];
    return [
        text1A,
        text1B,
        text2A,
        text2B,
        midCommon
    ];
}
function halfMatchI(longText, shortText, i) {
    const seed = longText.slice(i, i + Math.floor(longText.length / 4));
    let j = -1, bestCommon = "", bestLongTextA, bestLongTextB, bestShortTextA, bestShortTextB;
    for(; (j = shortText.indexOf(seed, j + 1)) !== -1;){
        const prefixLength = getCommonPrefix(longText.slice(i), shortText.slice(j)), suffixLength = getCommonSuffix(longText.slice(0, i), shortText.slice(0, j));
        bestCommon.length < suffixLength + prefixLength && (bestCommon = shortText.slice(j - suffixLength, j) + shortText.slice(j, j + prefixLength), bestLongTextA = longText.slice(0, i - suffixLength), bestLongTextB = longText.slice(i + prefixLength), bestShortTextA = shortText.slice(0, j - suffixLength), bestShortTextB = shortText.slice(j + prefixLength));
    }
    return bestCommon.length * 2 >= longText.length ? [
        bestLongTextA || "",
        bestLongTextB || "",
        bestShortTextA || "",
        bestShortTextB || "",
        bestCommon || ""
    ] : null;
}
function charsToLines(diffs, lineArray) {
    for(let x = 0; x < diffs.length; x++){
        const chars = diffs[x][1], text = [];
        for(let y = 0; y < chars.length; y++)text[y] = lineArray[chars.charCodeAt(y)];
        diffs[x][1] = text.join("");
    }
}
function linesToChars(textA, textB) {
    const lineArray = [], lineHash = {};
    lineArray[0] = "";
    function diffLinesToMunge(text) {
        let chars = "", lineStart = 0, lineEnd = -1, lineArrayLength = lineArray.length;
        for(; lineEnd < text.length - 1;){
            lineEnd = text.indexOf(`
`, lineStart), lineEnd === -1 && (lineEnd = text.length - 1);
            let line = text.slice(lineStart, lineEnd + 1);
            (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) ? chars += String.fromCharCode(lineHash[line]) : (lineArrayLength === maxLines && (line = text.slice(lineStart), lineEnd = text.length), chars += String.fromCharCode(lineArrayLength), lineHash[line] = lineArrayLength, lineArray[lineArrayLength++] = line), lineStart = lineEnd + 1;
        }
        return chars;
    }
    let maxLines = 4e4;
    const chars1 = diffLinesToMunge(textA);
    maxLines = 65535;
    const chars2 = diffLinesToMunge(textB);
    return {
        chars1,
        chars2,
        lineArray
    };
}
function doLineModeDiff(textA, textB, opts) {
    let text1 = textA, text2 = textB;
    const a = linesToChars(text1, text2);
    text1 = a.chars1, text2 = a.chars2;
    const linearray = a.lineArray;
    let diffs = doDiff(text1, text2, {
        checkLines: !1,
        deadline: opts.deadline
    });
    charsToLines(diffs, linearray), diffs = cleanupSemantic(diffs), diffs.push([
        DIFF_EQUAL,
        ""
    ]);
    let pointer = 0, countDelete = 0, countInsert = 0, textDelete = "", textInsert = "";
    for(; pointer < diffs.length;){
        switch(diffs[pointer][0]){
            case DIFF_INSERT:
                countInsert++, textInsert += diffs[pointer][1];
                break;
            case DIFF_DELETE:
                countDelete++, textDelete += diffs[pointer][1];
                break;
            case DIFF_EQUAL:
                if (countDelete >= 1 && countInsert >= 1) {
                    diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert), pointer = pointer - countDelete - countInsert;
                    const aa = doDiff(textDelete, textInsert, {
                        checkLines: !1,
                        deadline: opts.deadline
                    });
                    for(let j = aa.length - 1; j >= 0; j--)diffs.splice(pointer, 0, aa[j]);
                    pointer += aa.length;
                }
                countInsert = 0, countDelete = 0, textDelete = "", textInsert = "";
                break;
            default:
                throw new Error("Unknown diff operation.");
        }
        pointer++;
    }
    return diffs.pop(), diffs;
}
function computeDiff(text1, text2, opts) {
    let diffs;
    if (!text1) return [
        [
            DIFF_INSERT,
            text2
        ]
    ];
    if (!text2) return [
        [
            DIFF_DELETE,
            text1
        ]
    ];
    const longtext = text1.length > text2.length ? text1 : text2, shorttext = text1.length > text2.length ? text2 : text1, i = longtext.indexOf(shorttext);
    if (i !== -1) return diffs = [
        [
            DIFF_INSERT,
            longtext.substring(0, i)
        ],
        [
            DIFF_EQUAL,
            shorttext
        ],
        [
            DIFF_INSERT,
            longtext.substring(i + shorttext.length)
        ]
    ], text1.length > text2.length && (diffs[0][0] = DIFF_DELETE, diffs[2][0] = DIFF_DELETE), diffs;
    if (shorttext.length === 1) return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
    const halfMatch = findHalfMatch(text1, text2);
    if (halfMatch) {
        const text1A = halfMatch[0], text1B = halfMatch[1], text2A = halfMatch[2], text2B = halfMatch[3], midCommon = halfMatch[4], diffsA = doDiff(text1A, text2A, opts), diffsB = doDiff(text1B, text2B, opts);
        return diffsA.concat([
            [
                DIFF_EQUAL,
                midCommon
            ]
        ], diffsB);
    }
    return opts.checkLines && text1.length > 100 && text2.length > 100 ? doLineModeDiff(text1, text2, opts) : bisect(text1, text2, opts.deadline);
}
const DIFF_DELETE = -1, DIFF_INSERT = 1, DIFF_EQUAL = 0;
function diff(textA, textB, opts) {
    if (textA === null || textB === null) throw new Error("Null input. (diff)");
    const diffs = doDiff(textA, textB, createInternalOpts(opts || {}));
    return adjustDiffForSurrogatePairs(diffs), diffs;
}
function doDiff(textA, textB, options) {
    let text1 = textA, text2 = textB;
    if (text1 === text2) return text1 ? [
        [
            DIFF_EQUAL,
            text1
        ]
    ] : [];
    let commonlength = getCommonPrefix(text1, text2);
    const commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength), text2 = text2.substring(commonlength), commonlength = getCommonSuffix(text1, text2);
    const commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength), text2 = text2.substring(0, text2.length - commonlength);
    let diffs = computeDiff(text1, text2, options);
    return commonprefix && diffs.unshift([
        DIFF_EQUAL,
        commonprefix
    ]), commonsuffix && diffs.push([
        DIFF_EQUAL,
        commonsuffix
    ]), diffs = cleanupMerge(diffs), diffs;
}
function createDeadLine(timeout) {
    let t = 1;
    return typeof timeout < "u" && (t = timeout <= 0 ? Number.MAX_VALUE : timeout), Date.now() + t * 1e3;
}
function createInternalOpts(opts) {
    return __spreadValues({
        checkLines: !0,
        deadline: createDeadLine(opts.timeout || 1)
    }, opts);
}
function combineChar(data, char, dir) {
    return dir === 1 ? data + char : char + data;
}
function splitChar(data, dir) {
    return dir === 1 ? [
        data.substring(0, data.length - 1),
        data[data.length - 1]
    ] : [
        data.substring(1),
        data[0]
    ];
}
function hasSharedChar(diffs, i, j, dir) {
    return dir === 1 ? diffs[i][1][diffs[i][1].length - 1] === diffs[j][1][diffs[j][1].length - 1] : diffs[i][1][0] === diffs[j][1][0];
}
function deisolateChar(diffs, i, dir) {
    const inv = dir === 1 ? -1 : 1;
    let insertIdx = null, deleteIdx = null, j = i + dir;
    for(; j >= 0 && j < diffs.length && (insertIdx === null || deleteIdx === null); j += dir){
        const [op, text2] = diffs[j];
        if (text2.length !== 0) {
            if (op === DIFF_INSERT) {
                insertIdx === null && (insertIdx = j);
                continue;
            } else if (op === DIFF_DELETE) {
                deleteIdx === null && (deleteIdx = j);
                continue;
            } else if (op === DIFF_EQUAL) {
                if (insertIdx === null && deleteIdx === null) {
                    const [rest, char2] = splitChar(diffs[i][1], dir);
                    diffs[i][1] = rest, diffs[j][1] = combineChar(diffs[j][1], char2, inv);
                    return;
                }
                break;
            }
        }
    }
    if (insertIdx !== null && deleteIdx !== null && hasSharedChar(diffs, insertIdx, deleteIdx, dir)) {
        const [insertText2, insertChar] = splitChar(diffs[insertIdx][1], inv), [deleteText] = splitChar(diffs[deleteIdx][1], inv);
        diffs[insertIdx][1] = insertText2, diffs[deleteIdx][1] = deleteText, diffs[i][1] = combineChar(diffs[i][1], insertChar, dir);
        return;
    }
    const [text, char] = splitChar(diffs[i][1], dir);
    diffs[i][1] = text, insertIdx === null ? (diffs.splice(j, 0, [
        DIFF_INSERT,
        char
    ]), deleteIdx !== null && deleteIdx >= j && deleteIdx++) : diffs[insertIdx][1] = combineChar(diffs[insertIdx][1], char, inv), deleteIdx === null ? diffs.splice(j, 0, [
        DIFF_DELETE,
        char
    ]) : diffs[deleteIdx][1] = combineChar(diffs[deleteIdx][1], char, inv);
}
function adjustDiffForSurrogatePairs(diffs) {
    for(let i = 0; i < diffs.length; i++){
        const [diffType, diffText] = diffs[i];
        if (diffText.length === 0) continue;
        const firstChar = diffText[0], lastChar = diffText[diffText.length - 1];
        isHighSurrogate(lastChar) && diffType === DIFF_EQUAL && deisolateChar(diffs, i, 1), isLowSurrogate(firstChar) && diffType === DIFF_EQUAL && deisolateChar(diffs, i, -1);
    }
    for(let i = 0; i < diffs.length; i++)diffs[i][1].length === 0 && diffs.splice(i, 1);
}
const DEFAULT_OPTIONS = {
    /**
   * At what point is no match declared (0.0 = perfection, 1.0 = very loose).
   */ threshold: 0.5,
    /**
   * How far to search for a match (0 = exact location, 1000+ = broad match).
   * A match this many characters away from the expected location will add
   * 1.0 to the score (0.0 is a perfect match).
   */ distance: 1e3
};
function applyDefaults(options) {
    return __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
}
const MAX_BITS$1 = 32;
function bitap(text, pattern, loc) {
    let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (pattern.length > MAX_BITS$1) throw new Error("Pattern too long for this browser.");
    const options = applyDefaults(opts), s = getAlphabetFromPattern(pattern);
    function getBitapScore(e, x) {
        const accuracy = e / pattern.length, proximity = Math.abs(loc - x);
        return options.distance ? accuracy + proximity / options.distance : proximity ? 1 : accuracy;
    }
    let scoreThreshold = options.threshold, bestLoc = text.indexOf(pattern, loc);
    bestLoc !== -1 && (scoreThreshold = Math.min(getBitapScore(0, bestLoc), scoreThreshold), bestLoc = text.lastIndexOf(pattern, loc + pattern.length), bestLoc !== -1 && (scoreThreshold = Math.min(getBitapScore(0, bestLoc), scoreThreshold)));
    const matchmask = 1 << pattern.length - 1;
    bestLoc = -1;
    let binMin, binMid, binMax = pattern.length + text.length, lastRd = [];
    for(let d = 0; d < pattern.length; d++){
        for(binMin = 0, binMid = binMax; binMin < binMid;)getBitapScore(d, loc + binMid) <= scoreThreshold ? binMin = binMid : binMax = binMid, binMid = Math.floor((binMax - binMin) / 2 + binMin);
        binMax = binMid;
        let start = Math.max(1, loc - binMid + 1);
        const finish = Math.min(loc + binMid, text.length) + pattern.length, rd = new Array(finish + 2);
        rd[finish + 1] = (1 << d) - 1;
        for(let j = finish; j >= start; j--){
            const charMatch = s[text.charAt(j - 1)];
            if (d === 0 ? rd[j] = (rd[j + 1] << 1 | 1) & charMatch : rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((lastRd[j + 1] | lastRd[j]) << 1 | 1) | lastRd[j + 1], rd[j] & matchmask) {
                const score = getBitapScore(d, j - 1);
                if (score <= scoreThreshold) if (scoreThreshold = score, bestLoc = j - 1, bestLoc > loc) start = Math.max(1, 2 * loc - bestLoc);
                else break;
            }
        }
        if (getBitapScore(d + 1, loc) > scoreThreshold) break;
        lastRd = rd;
    }
    return bestLoc;
}
function getAlphabetFromPattern(pattern) {
    const s = {};
    for(let i = 0; i < pattern.length; i++)s[pattern.charAt(i)] = 0;
    for(let i = 0; i < pattern.length; i++)s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
    return s;
}
function match(text, pattern, searchLocation) {
    if (text === null || pattern === null || searchLocation === null) throw new Error("Null input. (match())");
    const loc = Math.max(0, Math.min(searchLocation, text.length));
    if (text === pattern) return 0;
    if (text.length) {
        if (text.substring(loc, loc + pattern.length) === pattern) return loc;
    } else return -1;
    return bitap(text, pattern, loc);
}
function createPatchObject(start1, start2) {
    return {
        diffs: [],
        start1,
        start2,
        utf8Start1: start1,
        utf8Start2: start2,
        length1: 0,
        length2: 0,
        utf8Length1: 0,
        utf8Length2: 0
    };
}
function diffText1(diffs) {
    const text = [];
    for(let x = 0; x < diffs.length; x++)diffs[x][0] !== DIFF_INSERT && (text[x] = diffs[x][1]);
    return text.join("");
}
function diffText2(diffs) {
    const text = [];
    for(let x = 0; x < diffs.length; x++)diffs[x][0] !== DIFF_DELETE && (text[x] = diffs[x][1]);
    return text.join("");
}
function countUtf8Bytes(str) {
    let bytes = 0;
    for(let i = 0; i < str.length; i++){
        const codePoint = str.codePointAt(i);
        if (typeof codePoint > "u") throw new Error("Failed to get codepoint");
        bytes += utf8len(codePoint);
    }
    return bytes;
}
function adjustIndiciesToUcs2(patches, base) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, byteOffset = 0, idx = 0;
    function advanceTo(target) {
        for(; byteOffset < target;){
            const codePoint = base.codePointAt(idx);
            if (typeof codePoint > "u") return idx;
            byteOffset += utf8len(codePoint), codePoint > 65535 ? idx += 2 : idx += 1;
        }
        if (!options.allowExceedingIndices && byteOffset !== target) throw new Error("Failed to determine byte offset");
        return idx;
    }
    const adjusted = [];
    for (const patch of patches)adjusted.push({
        diffs: patch.diffs.map((diff2)=>cloneDiff(diff2)),
        start1: advanceTo(patch.start1),
        start2: advanceTo(patch.start2),
        utf8Start1: patch.utf8Start1,
        utf8Start2: patch.utf8Start2,
        length1: patch.length1,
        length2: patch.length2,
        utf8Length1: patch.utf8Length1,
        utf8Length2: patch.utf8Length2
    });
    return adjusted;
}
function utf8len(codePoint) {
    return codePoint <= 127 ? 1 : codePoint <= 2047 ? 2 : codePoint <= 65535 ? 3 : 4;
}
const MAX_BITS = 32, DEFAULT_MARGIN = 4;
function levenshtein(diffs) {
    let leven = 0, insertions = 0, deletions = 0;
    for(let x = 0; x < diffs.length; x++){
        const op = diffs[x][0], data = diffs[x][1];
        switch(op){
            case DIFF_INSERT:
                insertions += data.length;
                break;
            case DIFF_DELETE:
                deletions += data.length;
                break;
            case DIFF_EQUAL:
                leven += Math.max(insertions, deletions), insertions = 0, deletions = 0;
                break;
            default:
                throw new Error("Unknown diff operation.");
        }
    }
    return leven += Math.max(insertions, deletions), leven;
}
function xIndex(diffs, loc) {
    let chars1 = 0, chars2 = 0, lastChars1 = 0, lastChars2 = 0, x;
    for(x = 0; x < diffs.length && (diffs[x][0] !== DIFF_INSERT && (chars1 += diffs[x][1].length), diffs[x][0] !== DIFF_DELETE && (chars2 += diffs[x][1].length), !(chars1 > loc)); x++)lastChars1 = chars1, lastChars2 = chars2;
    return diffs.length !== x && diffs[x][0] === DIFF_DELETE ? lastChars2 : lastChars2 + (loc - lastChars1);
}
function addPadding(patches) {
    const paddingLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MARGIN;
    let nullPadding = "";
    for(let x = 1; x <= paddingLength; x++)nullPadding += String.fromCharCode(x);
    for (const p of patches)p.start1 += paddingLength, p.start2 += paddingLength, p.utf8Start1 += paddingLength, p.utf8Start2 += paddingLength;
    let patch = patches[0], diffs = patch.diffs;
    if (diffs.length === 0 || diffs[0][0] !== DIFF_EQUAL) diffs.unshift([
        DIFF_EQUAL,
        nullPadding
    ]), patch.start1 -= paddingLength, patch.start2 -= paddingLength, patch.utf8Start1 -= paddingLength, patch.utf8Start2 -= paddingLength, patch.length1 += paddingLength, patch.length2 += paddingLength, patch.utf8Length1 += paddingLength, patch.utf8Length2 += paddingLength;
    else if (paddingLength > diffs[0][1].length) {
        const firstDiffLength = diffs[0][1].length, extraLength = paddingLength - firstDiffLength;
        diffs[0][1] = nullPadding.substring(firstDiffLength) + diffs[0][1], patch.start1 -= extraLength, patch.start2 -= extraLength, patch.utf8Start1 -= extraLength, patch.utf8Start2 -= extraLength, patch.length1 += extraLength, patch.length2 += extraLength, patch.utf8Length1 += extraLength, patch.utf8Length2 += extraLength;
    }
    if (patch = patches[patches.length - 1], diffs = patch.diffs, diffs.length === 0 || diffs[diffs.length - 1][0] !== DIFF_EQUAL) diffs.push([
        DIFF_EQUAL,
        nullPadding
    ]), patch.length1 += paddingLength, patch.length2 += paddingLength, patch.utf8Length1 += paddingLength, patch.utf8Length2 += paddingLength;
    else if (paddingLength > diffs[diffs.length - 1][1].length) {
        const extraLength = paddingLength - diffs[diffs.length - 1][1].length;
        diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength), patch.length1 += extraLength, patch.length2 += extraLength, patch.utf8Length1 += extraLength, patch.utf8Length2 += extraLength;
    }
    return nullPadding;
}
function splitMax(patches) {
    let margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MARGIN;
    const patchSize = MAX_BITS;
    for(let x = 0; x < patches.length; x++){
        if (patches[x].length1 <= patchSize) continue;
        const bigpatch = patches[x];
        patches.splice(x--, 1);
        let start1 = bigpatch.start1, start2 = bigpatch.start2, preContext = "";
        for(; bigpatch.diffs.length !== 0;){
            const patch = createPatchObject(start1 - preContext.length, start2 - preContext.length);
            let empty = !0;
            if (preContext !== "") {
                const precontextByteCount = countUtf8Bytes(preContext);
                patch.length1 = preContext.length, patch.utf8Length1 = precontextByteCount, patch.length2 = preContext.length, patch.utf8Length2 = precontextByteCount, patch.diffs.push([
                    DIFF_EQUAL,
                    preContext
                ]);
            }
            for(; bigpatch.diffs.length !== 0 && patch.length1 < patchSize - margin;){
                const diffType = bigpatch.diffs[0][0];
                let diffText = bigpatch.diffs[0][1], diffTextByteCount = countUtf8Bytes(diffText);
                if (diffType === DIFF_INSERT) {
                    patch.length2 += diffText.length, patch.utf8Length2 += diffTextByteCount, start2 += diffText.length;
                    const diff2 = bigpatch.diffs.shift();
                    diff2 && patch.diffs.push(diff2), empty = !1;
                } else diffType === DIFF_DELETE && patch.diffs.length === 1 && patch.diffs[0][0] === DIFF_EQUAL && diffText.length > 2 * patchSize ? (patch.length1 += diffText.length, patch.utf8Length1 += diffTextByteCount, start1 += diffText.length, empty = !1, patch.diffs.push([
                    diffType,
                    diffText
                ]), bigpatch.diffs.shift()) : (diffText = diffText.substring(0, patchSize - patch.length1 - margin), diffTextByteCount = countUtf8Bytes(diffText), patch.length1 += diffText.length, patch.utf8Length1 += diffTextByteCount, start1 += diffText.length, diffType === DIFF_EQUAL ? (patch.length2 += diffText.length, patch.utf8Length2 += diffTextByteCount, start2 += diffText.length) : empty = !1, patch.diffs.push([
                    diffType,
                    diffText
                ]), diffText === bigpatch.diffs[0][1] ? bigpatch.diffs.shift() : bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diffText.length));
            }
            preContext = diffText2(patch.diffs), preContext = preContext.substring(preContext.length - margin);
            const postContext = diffText1(bigpatch.diffs).substring(0, margin), postContextByteCount = countUtf8Bytes(postContext);
            postContext !== "" && (patch.length1 += postContext.length, patch.length2 += postContext.length, patch.utf8Length1 += postContextByteCount, patch.utf8Length2 += postContextByteCount, patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL ? patch.diffs[patch.diffs.length - 1][1] += postContext : patch.diffs.push([
                DIFF_EQUAL,
                postContext
            ])), empty || patches.splice(++x, 0, patch);
        }
    }
}
function apply(patches, originalText) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof patches == "string") throw new Error("Patches must be an array - pass the patch to `parsePatch()` first");
    let text = originalText;
    if (patches.length === 0) return [
        text,
        []
    ];
    const parsed = adjustIndiciesToUcs2(patches, text, {
        allowExceedingIndices: opts.allowExceedingIndices
    }), margin = opts.margin || DEFAULT_MARGIN, deleteThreshold = opts.deleteThreshold || 0.4, nullPadding = addPadding(parsed, margin);
    text = nullPadding + text + nullPadding, splitMax(parsed, margin);
    let delta = 0;
    const results = [];
    for(let x = 0; x < parsed.length; x++){
        const expectedLoc = parsed[x].start2 + delta, text1 = diffText1(parsed[x].diffs);
        let startLoc, endLoc = -1;
        if (text1.length > MAX_BITS ? (startLoc = match(text, text1.substring(0, MAX_BITS), expectedLoc), startLoc !== -1 && (endLoc = match(text, text1.substring(text1.length - MAX_BITS), expectedLoc + text1.length - MAX_BITS), (endLoc === -1 || startLoc >= endLoc) && (startLoc = -1))) : startLoc = match(text, text1, expectedLoc), startLoc === -1) results[x] = !1, delta -= parsed[x].length2 - parsed[x].length1;
        else {
            results[x] = !0, delta = startLoc - expectedLoc;
            let text2;
            if (endLoc === -1 ? text2 = text.substring(startLoc, startLoc + text1.length) : text2 = text.substring(startLoc, endLoc + MAX_BITS), text1 === text2) text = text.substring(0, startLoc) + diffText2(parsed[x].diffs) + text.substring(startLoc + text1.length);
            else {
                let diffs = diff(text1, text2, {
                    checkLines: !1
                });
                if (text1.length > MAX_BITS && levenshtein(diffs) / text1.length > deleteThreshold) results[x] = !1;
                else {
                    diffs = cleanupSemanticLossless(diffs);
                    let index1 = 0, index2 = 0;
                    for(let y = 0; y < parsed[x].diffs.length; y++){
                        const mod = parsed[x].diffs[y];
                        mod[0] !== DIFF_EQUAL && (index2 = xIndex(diffs, index1)), mod[0] === DIFF_INSERT ? text = text.substring(0, startLoc + index2) + mod[1] + text.substring(startLoc + index2) : mod[0] === DIFF_DELETE && (text = text.substring(0, startLoc + index2) + text.substring(startLoc + xIndex(diffs, index1 + mod[1].length))), mod[0] !== DIFF_DELETE && (index1 += mod[1].length);
                    }
                }
            }
        }
    }
    return text = text.substring(nullPadding.length, text.length - nullPadding.length), [
        text,
        results
    ];
}
const patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
function parse(textline) {
    if (!textline) return [];
    const patches = [], lines = textline.split(`
`);
    let textPointer = 0;
    for(; textPointer < lines.length;){
        const m = lines[textPointer].match(patchHeader);
        if (!m) throw new Error("Invalid patch string: ".concat(lines[textPointer]));
        const patch = createPatchObject(toInt(m[1]), toInt(m[3]));
        for(patches.push(patch), m[2] === "" ? (patch.start1--, patch.utf8Start1--, patch.length1 = 1, patch.utf8Length1 = 1) : m[2] === "0" ? (patch.length1 = 0, patch.utf8Length1 = 0) : (patch.start1--, patch.utf8Start1--, patch.utf8Length1 = toInt(m[2]), patch.length1 = patch.utf8Length1), m[4] === "" ? (patch.start2--, patch.utf8Start2--, patch.length2 = 1, patch.utf8Length2 = 1) : m[4] === "0" ? (patch.length2 = 0, patch.utf8Length2 = 0) : (patch.start2--, patch.utf8Start2--, patch.utf8Length2 = toInt(m[4]), patch.length2 = patch.utf8Length2), textPointer++; textPointer < lines.length;){
            const currentLine = lines[textPointer], sign = currentLine.charAt(0);
            if (sign === "@") break;
            if (sign === "") {
                textPointer++;
                continue;
            }
            let line;
            try {
                line = decodeURI(currentLine.slice(1));
            } catch (ex) {
                throw new Error("Illegal escape in parse: ".concat(currentLine));
            }
            const utf8Diff = countUtf8Bytes(line) - line.length;
            if (sign === "-") patch.diffs.push([
                DIFF_DELETE,
                line
            ]), patch.length1 -= utf8Diff;
            else if (sign === "+") patch.diffs.push([
                DIFF_INSERT,
                line
            ]), patch.length2 -= utf8Diff;
            else if (sign === " ") patch.diffs.push([
                DIFF_EQUAL,
                line
            ]), patch.length1 -= utf8Diff, patch.length2 -= utf8Diff;
            else throw new Error('Invalid patch mode "'.concat(sign, '" in: ').concat(line));
            textPointer++;
        }
    }
    return patches;
}
function toInt(num) {
    return parseInt(num, 10);
}
const IS_UDOING = /* @__PURE__ */ new WeakMap(), IS_REDOING = /* @__PURE__ */ new WeakMap();
function withUndoing(editor, fn) {
    const prev = isUndoing(editor);
    IS_UDOING.set(editor, !0), fn(), IS_UDOING.set(editor, prev);
}
function isUndoing(editor) {
    var _a;
    return (_a = IS_UDOING.get(editor)) != null ? _a : !1;
}
function setIsUndoing(editor, isUndoing2) {
    IS_UDOING.set(editor, isUndoing2);
}
function withRedoing(editor, fn) {
    const prev = isRedoing(editor);
    IS_REDOING.set(editor, !0), fn(), IS_REDOING.set(editor, prev);
}
function isRedoing(editor) {
    var _a;
    return (_a = IS_REDOING.get(editor)) != null ? _a : !1;
}
function setIsRedoing(editor, isRedoing2) {
    IS_REDOING.set(editor, isRedoing2);
}
var __defProp$m = Object.defineProperty, __getOwnPropSymbols$m = Object.getOwnPropertySymbols, __hasOwnProp$m = Object.prototype.hasOwnProperty, __propIsEnum$m = Object.prototype.propertyIsEnumerable, __defNormalProp$m = (obj, key, value)=>key in obj ? __defProp$m(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$m = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$m.call(b, prop) && __defNormalProp$m(a, prop, b[prop]);
    if (__getOwnPropSymbols$m) for (var prop of __getOwnPropSymbols$m(b))__propIsEnum$m.call(b, prop) && __defNormalProp$m(a, prop, b[prop]);
    return a;
};
const debug$j = debugWithName("plugin:withUndoRedo"), debugVerbose$3 = debug$j.enabled && !1, SAVING = /* @__PURE__ */ new WeakMap(), REMOTE_PATCHES = /* @__PURE__ */ new WeakMap(), UNDO_STEP_LIMIT = 1e3, isSaving = (editor)=>{
    const state = SAVING.get(editor);
    return state === void 0 ? !0 : state;
}, getRemotePatches = (editor)=>(REMOTE_PATCHES.get(editor) || REMOTE_PATCHES.set(editor, []), REMOTE_PATCHES.get(editor) || []);
function createWithUndoRedo(options) {
    const { editorActor, blockSchemaType } = options;
    return (editor)=>{
        let previousSnapshot = fromSlateValue(editor.children, blockSchemaType.name);
        const remotePatches = getRemotePatches(editor);
        options.subscriptions.push(()=>{
            debug$j("Subscribing to patches");
            const sub = editorActor.on("patches", ({ patches, snapshot })=>{
                let reset = !1;
                patches.forEach((patch)=>{
                    if (!reset && patch.origin !== "local" && remotePatches) {
                        if (patch.type === "unset" && patch.path.length === 0) {
                            debug$j("Someone else cleared the content, resetting undo/redo history"), editor.history = {
                                undos: [],
                                redos: []
                            }, remotePatches.splice(0, remotePatches.length), SAVING.set(editor, !0), reset = !0;
                            return;
                        }
                        remotePatches.push({
                            patch,
                            time: /* @__PURE__ */ new Date(),
                            snapshot,
                            previousSnapshot
                        });
                    }
                }), previousSnapshot = snapshot;
            });
            return ()=>{
                debug$j("Unsubscribing to patches"), sub.unsubscribe();
            };
        }), editor.history = {
            undos: [],
            redos: []
        };
        const { apply: apply2 } = editor;
        return editor.apply = (op)=>{
            if (editorActor.getSnapshot().matches({
                "edit mode": "read only"
            })) {
                apply2(op);
                return;
            }
            if (isChangingRemotely(editor)) {
                apply2(op);
                return;
            }
            if (isUndoing(editor) || isRedoing(editor)) {
                apply2(op);
                return;
            }
            const { operations, history } = editor, { undos } = history, step = undos[undos.length - 1], lastOp = step && step.operations && step.operations[step.operations.length - 1], overwrite = shouldOverwrite(op, lastOp), save = isSaving(editor);
            let merge = !0;
            if (save) {
                if (step ? operations.length === 0 && (merge = shouldMerge(op, lastOp) || overwrite) : merge = !1, step && merge) step.operations.push(op);
                else {
                    const newStep = {
                        operations: [
                            ...editor.selection === null ? [] : [
                                createSelectOperation(editor)
                            ],
                            op
                        ],
                        timestamp: /* @__PURE__ */ new Date()
                    };
                    undos.push(newStep), debug$j("Created new undo step", step);
                }
                for(; undos.length > UNDO_STEP_LIMIT;)undos.shift();
                shouldClear(op) && (history.redos = []);
            }
            apply2(op);
        }, editor.undo = ()=>{
            if (editorActor.getSnapshot().matches({
                "edit mode": "read only"
            })) return;
            const { undos } = editor.history;
            if (undos.length > 0) {
                const step = undos[undos.length - 1];
                if (debug$j("Undoing", step), step.operations.length > 0) {
                    const otherPatches = remotePatches.filter((item)=>item.time >= step.timestamp);
                    let transformedOperations = step.operations;
                    otherPatches.forEach((item)=>{
                        transformedOperations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(transformedOperations.map((op)=>transformOperation(editor, item.patch, op, item.snapshot, item.previousSnapshot)));
                    });
                    const reversedOperations = transformedOperations.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Operation"].inverse).reverse();
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                            withUndoing(editor, ()=>{
                                withoutSaving(editor, ()=>{
                                    reversedOperations.forEach((op)=>{
                                        editor.apply(op);
                                    });
                                });
                            });
                        }), editor.normalize(), editor.onChange();
                    } catch (err) {
                        debug$j("Could not perform undo step", err), remotePatches.splice(0, remotePatches.length), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor), editor.history = {
                            undos: [],
                            redos: []
                        }, SAVING.set(editor, !0), setIsUndoing(editor, !1), editor.onChange();
                        return;
                    }
                    editor.history.redos.push(step), editor.history.undos.pop();
                }
            }
        }, editor.redo = ()=>{
            if (editorActor.getSnapshot().matches({
                "edit mode": "read only"
            })) return;
            const { redos } = editor.history;
            if (redos.length > 0) {
                const step = redos[redos.length - 1];
                if (debug$j("Redoing", step), step.operations.length > 0) {
                    const otherPatches = remotePatches.filter((item)=>item.time >= step.timestamp);
                    let transformedOperations = step.operations;
                    otherPatches.forEach((item)=>{
                        transformedOperations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatten$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(transformedOperations.map((op)=>transformOperation(editor, item.patch, op, item.snapshot, item.previousSnapshot)));
                    });
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                            withRedoing(editor, ()=>{
                                withoutSaving(editor, ()=>{
                                    transformedOperations.forEach((op)=>{
                                        editor.apply(op);
                                    });
                                });
                            });
                        }), editor.normalize(), editor.onChange();
                    } catch (err) {
                        debug$j("Could not perform redo step", err), remotePatches.splice(0, remotePatches.length), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor), editor.history = {
                            undos: [],
                            redos: []
                        }, SAVING.set(editor, !0), setIsRedoing(editor, !1), editor.onChange();
                        return;
                    }
                    editor.history.undos.push(step), editor.history.redos.pop();
                }
            }
        }, editor;
    };
}
function transformOperation(editor, patch, operation, snapshot, previousSnapshot) {
    debugVerbose$3 && (debug$j(`Adjusting '${operation.type}' operation paths for '${patch.type}' patch`), debug$j(`Operation ${JSON.stringify(operation)}`), debug$j(`Patch ${JSON.stringify(patch)}`));
    const transformedOperation = __spreadValues$m({}, operation);
    if (patch.type === "insert" && patch.path.length === 1) {
        const insertBlockIndex = (snapshot || []).findIndex((blk)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                _key: blk._key
            }, patch.path[0]));
        return debug$j(`Adjusting block path (+${patch.items.length}) for '${transformedOperation.type}' operation and patch '${patch.type}'`), [
            adjustBlockPath(transformedOperation, patch.items.length, insertBlockIndex)
        ];
    }
    if (patch.type === "unset" && patch.path.length === 1) {
        const unsetBlockIndex = (previousSnapshot || []).findIndex((blk)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                _key: blk._key
            }, patch.path[0]));
        return "path" in transformedOperation && Array.isArray(transformedOperation.path) && transformedOperation.path[0] === unsetBlockIndex ? (debug$j("Skipping transformation that targeted removed block"), []) : (debugVerbose$3 && (debug$j(`Selection ${JSON.stringify(editor.selection)}`), debug$j(`Adjusting block path (-1) for '${transformedOperation.type}' operation and patch '${patch.type}'`)), [
            adjustBlockPath(transformedOperation, -1, unsetBlockIndex)
        ]);
    }
    if (patch.type === "unset" && patch.path.length === 0) return debug$j(`Adjusting selection for unset everything patch and ${operation.type} operation`), [];
    if (patch.type === "diffMatchPatch") {
        const operationTargetBlock = findOperationTargetBlock(editor, transformedOperation);
        return !operationTargetBlock || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            _key: operationTargetBlock._key
        }, patch.path[0]) ? [
            transformedOperation
        ] : (parse(patch.value).forEach((diffPatch)=>{
            var _a, _b, _c, _d;
            let adjustOffsetBy = 0, changedOffset = diffPatch.utf8Start1;
            const { diffs } = diffPatch;
            if (diffs.forEach((diff2, index)=>{
                const [diffType, text] = diff2;
                diffType === DIFF_INSERT ? (adjustOffsetBy += text.length, changedOffset += text.length) : diffType === DIFF_DELETE ? (adjustOffsetBy -= text.length, changedOffset -= text.length) : diffType === DIFF_EQUAL && (diffs.slice(index).every(([dType])=>dType === DIFF_EQUAL) || (changedOffset += text.length));
            }), transformedOperation.type === "insert_text" && changedOffset < transformedOperation.offset && (transformedOperation.offset += adjustOffsetBy), transformedOperation.type === "remove_text" && changedOffset <= transformedOperation.offset - transformedOperation.text.length && (transformedOperation.offset += adjustOffsetBy), transformedOperation.type === "set_selection") {
                const currentFocus = (_a = transformedOperation.properties) != null && _a.focus ? __spreadValues$m({}, transformedOperation.properties.focus) : void 0, currentAnchor = (_b = transformedOperation == null ? void 0 : transformedOperation.properties) != null && _b.anchor ? __spreadValues$m({}, transformedOperation.properties.anchor) : void 0, newFocus = (_c = transformedOperation == null ? void 0 : transformedOperation.newProperties) != null && _c.focus ? __spreadValues$m({}, transformedOperation.newProperties.focus) : void 0, newAnchor = (_d = transformedOperation == null ? void 0 : transformedOperation.newProperties) != null && _d.anchor ? __spreadValues$m({}, transformedOperation.newProperties.anchor) : void 0;
                (currentFocus && currentAnchor || newFocus && newAnchor) && ([
                    currentFocus,
                    currentAnchor,
                    newFocus,
                    newAnchor
                ].forEach((point)=>{
                    point && changedOffset < point.offset && (point.offset += adjustOffsetBy);
                }), currentFocus && currentAnchor && (transformedOperation.properties = {
                    focus: currentFocus,
                    anchor: currentAnchor
                }), newFocus && newAnchor && (transformedOperation.newProperties = {
                    focus: newFocus,
                    anchor: newAnchor
                }));
            }
        }), [
            transformedOperation
        ]);
    }
    return [
        transformedOperation
    ];
}
function adjustBlockPath(operation, level, blockIndex) {
    var _a, _b, _c, _d;
    const transformedOperation = __spreadValues$m({}, operation);
    if (blockIndex >= 0 && transformedOperation.type !== "set_selection" && Array.isArray(transformedOperation.path) && transformedOperation.path[0] >= blockIndex + level && transformedOperation.path[0] + level > -1) {
        const newPath = [
            transformedOperation.path[0] + level,
            ...transformedOperation.path.slice(1)
        ];
        transformedOperation.path = newPath;
    }
    if (transformedOperation.type === "set_selection") {
        const currentFocus = (_a = transformedOperation.properties) != null && _a.focus ? __spreadValues$m({}, transformedOperation.properties.focus) : void 0, currentAnchor = (_b = transformedOperation == null ? void 0 : transformedOperation.properties) != null && _b.anchor ? __spreadValues$m({}, transformedOperation.properties.anchor) : void 0, newFocus = (_c = transformedOperation == null ? void 0 : transformedOperation.newProperties) != null && _c.focus ? __spreadValues$m({}, transformedOperation.newProperties.focus) : void 0, newAnchor = (_d = transformedOperation == null ? void 0 : transformedOperation.newProperties) != null && _d.anchor ? __spreadValues$m({}, transformedOperation.newProperties.anchor) : void 0;
        (currentFocus && currentAnchor || newFocus && newAnchor) && ([
            currentFocus,
            currentAnchor,
            newFocus,
            newAnchor
        ].forEach((point)=>{
            point && point.path[0] >= blockIndex + level && point.path[0] + level > -1 && (point.path = [
                point.path[0] + level,
                ...point.path.slice(1)
            ]);
        }), currentFocus && currentAnchor && (transformedOperation.properties = {
            focus: currentFocus,
            anchor: currentAnchor
        }), newFocus && newAnchor && (transformedOperation.newProperties = {
            focus: newFocus,
            anchor: newAnchor
        }));
    }
    return transformedOperation;
}
const shouldMerge = (op, prev)=>!!(op.type === "set_selection" || prev && op.type === "insert_text" && prev.type === "insert_text" && op.offset === prev.offset + prev.text.length && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(op.path, prev.path) && op.text !== " " || prev && op.type === "remove_text" && prev.type === "remove_text" && op.offset + op.text.length === prev.offset && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(op.path, prev.path)), shouldOverwrite = (op, prev)=>!!(prev && op.type === "set_selection" && prev.type === "set_selection"), shouldClear = (op)=>op.type !== "set_selection";
function withoutSaving(editor, fn) {
    const prev = isSaving(editor);
    SAVING.set(editor, !1), fn(), SAVING.set(editor, prev);
}
function createSelectOperation(editor) {
    return {
        type: "set_selection",
        properties: __spreadValues$m({}, editor.selection),
        newProperties: __spreadValues$m({}, editor.selection)
    };
}
function findOperationTargetBlock(editor, operation) {
    let block;
    return operation.type === "set_selection" && editor.selection ? block = editor.children[editor.selection.focus.path[0]] : "path" in operation && (block = editor.children[operation.path[0]]), block;
}
var __knownSymbol = (name, symbol)=>(symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name), __await = function(promise, isYieldStar) {
    this[0] = promise, this[1] = isYieldStar;
}, __asyncGenerator = (__this, __arguments, generator)=>{
    var resume = (k, v, yes, no)=>{
        try {
            var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
            Promise.resolve(isAwait ? v[0] : v).then((y)=>isAwait ? resume(k === "return" ? k : "next", v[1] ? {
                    done: y.done,
                    value: y.value
                } : y, yes, no) : yes({
                    value: y,
                    done
                })).catch((e)=>resume("throw", e, yes, no));
        } catch (e) {
            no(e);
        }
    }, method = (k)=>it[k] = (x)=>new Promise((yes, no)=>resume(k, x, yes, no)), it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = ()=>it, method("next"), method("throw"), method("return"), it;
}, __forAwait = (obj, it, method)=>(it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn)=>(fn = obj[key]) && (it[key] = (arg)=>new Promise((yes, no, done)=>(arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value)=>yes({
                        value,
                        done
                    }), no)))), method("next"), method("return"), it);
const syncValueCallback = ({ sendBack, input })=>{
    updateValue({
        context: input.context,
        sendBack,
        slateEditor: input.slateEditor,
        value: input.value,
        streamBlocks: input.streamBlocks
    });
}, syncValueLogic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromCallback"])(syncValueCallback), syncMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {
        context: {},
        input: {},
        events: {},
        emitted: {}
    },
    actions: {
        "assign initial value synced": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            initialValueSynced: !0
        }),
        "assign readOnly": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            readOnly: ({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "update readOnly"), event.readOnly)
        }),
        "assign pending value": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingValue: ({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "update value"), event.value)
        }),
        "clear pending value": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingValue: void 0
        }),
        "assign previous value": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            previousValue: ({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "done syncing"), event.value)
        }),
        "emit done syncing initial value": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
            type: "done syncing initial value"
        })
    },
    guards: {
        "initial value synced": ({ context })=>context.initialValueSynced,
        "is busy": ({ context })=>{
            var _a;
            return !context.readOnly && (context.isProcessingLocalChanges || ((_a = isChangingRemotely(context.slateEditor)) != null ? _a : !1));
        },
        "value changed while syncing": ({ context, event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "done syncing"), context.pendingValue !== event.value),
        "pending value equals previous value": ({ context })=>!(context.previousValue === void 0 && context.pendingValue === void 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(context.pendingValue, context.previousValue)
    },
    actors: {
        "sync value": syncValueLogic
    }
}).createMachine({
    id: "sync",
    context: ({ input })=>({
            initialValueSynced: !1,
            isProcessingLocalChanges: !1,
            keyGenerator: input.keyGenerator,
            schema: input.schema,
            readOnly: input.readOnly,
            slateEditor: input.slateEditor,
            pendingValue: void 0,
            previousValue: void 0
        }),
    on: {
        "has pending patches": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                isProcessingLocalChanges: !0
            })
        },
        mutation: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                isProcessingLocalChanges: !1
            })
        },
        "update readOnly": {
            actions: [
                "assign readOnly"
            ]
        }
    },
    type: "parallel",
    states: {
        "setting up": {
            initial: "syncing initial value",
            states: {
                "syncing initial value": {
                    always: {
                        guard: "initial value synced",
                        target: "done syncing initial value"
                    }
                },
                "done syncing initial value": {
                    entry: [
                        "emit done syncing initial value"
                    ],
                    type: "final"
                }
            }
        },
        syncing: {
            initial: "idle",
            states: {
                idle: {
                    on: {
                        "update value": [
                            {
                                guard: "is busy",
                                target: "busy",
                                actions: [
                                    "assign pending value"
                                ]
                            },
                            {
                                target: "syncing",
                                actions: [
                                    "assign pending value"
                                ]
                            }
                        ]
                    }
                },
                busy: {
                    after: {
                        1e3: [
                            {
                                guard: "is busy",
                                reenter: !0
                            },
                            {
                                target: "syncing"
                            }
                        ]
                    },
                    on: {
                        "update value": [
                            {
                                actions: [
                                    "assign pending value"
                                ]
                            }
                        ]
                    }
                },
                syncing: {
                    always: {
                        guard: "pending value equals previous value",
                        target: "idle",
                        actions: [
                            "clear pending value",
                            "assign initial value synced"
                        ]
                    },
                    invoke: {
                        src: "sync value",
                        id: "sync value",
                        input: ({ context })=>({
                                context: {
                                    keyGenerator: context.keyGenerator,
                                    previousValue: context.previousValue,
                                    readOnly: context.readOnly,
                                    schema: context.schema
                                },
                                slateEditor: context.slateEditor,
                                streamBlocks: !context.initialValueSynced,
                                value: context.pendingValue
                            })
                    },
                    on: {
                        "update value": {
                            actions: [
                                "assign pending value"
                            ]
                        },
                        patch: {
                            actions: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                            ]
                        },
                        "invalid value": {
                            actions: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                            ]
                        },
                        "value changed": {
                            actions: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                            ]
                        },
                        "done syncing": [
                            {
                                guard: "value changed while syncing",
                                actions: [
                                    "assign previous value",
                                    "assign initial value synced"
                                ],
                                reenter: !0
                            },
                            {
                                target: "idle",
                                actions: [
                                    "clear pending value",
                                    "assign previous value",
                                    "assign initial value synced"
                                ]
                            }
                        ]
                    }
                }
            }
        }
    }
}), debug$i = debugWithName("hook:useSyncValue");
async function updateValue({ context, sendBack, slateEditor, streamBlocks, value }) {
    let isChanged = !1, isValid = !0;
    const hadSelection = !!slateEditor.selection;
    if ((!value || value.length === 0) && (debug$i("Value is empty"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(slateEditor, ()=>{
        withoutSaving(slateEditor, ()=>{
            withoutPatching(slateEditor, ()=>{
                hadSelection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(slateEditor);
                const childrenLength = slateEditor.children.length;
                slateEditor.children.forEach((_, index)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(slateEditor, {
                        at: [
                            childrenLength - 1 - index
                        ]
                    });
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, slateEditor.pteCreateTextBlock({
                    decorators: []
                }), {
                    at: [
                        0
                    ]
                }), hadSelection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, [
                    0,
                    0
                ]);
            });
        });
    }), isChanged = !0), value && value.length > 0) {
        const slateValueFromProps = toSlateValue(value, {
            schemaTypes: context.schema
        });
        await new Promise((resolve)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(slateEditor, ()=>{
                withRemoteChanges(slateEditor, ()=>{
                    withoutPatching(slateEditor, async ()=>{
                        const childrenLength = slateEditor.children.length;
                        if (slateValueFromProps.length < childrenLength) {
                            for(let i = childrenLength - 1; i > slateValueFromProps.length - 1; i--)__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(slateEditor, {
                                at: [
                                    i
                                ]
                            });
                            isChanged = !0;
                        }
                        try {
                            for(var iter = __forAwait(getBlocks({
                                slateValue: slateValueFromProps,
                                streamBlocks
                            })), more, temp, error; more = !(temp = await iter.next()).done; more = !1){
                                const [currentBlock, currentBlockIndex] = temp.value, { blockChanged, blockValid } = syncBlock({
                                    context,
                                    sendBack,
                                    block: currentBlock,
                                    index: currentBlockIndex,
                                    slateEditor,
                                    value
                                });
                                isChanged = blockChanged || isChanged, isValid = isValid && blockValid;
                            }
                        } catch (temp2) {
                            error = [
                                temp2
                            ];
                        } finally{
                            try {
                                more && (temp = iter.return) && await temp.call(iter);
                            } finally{
                                if (error) throw error[0];
                            }
                        }
                        resolve();
                    });
                });
            });
        });
    }
    if (!isValid) {
        debug$i("Invalid value, returning"), sendBack({
            type: "done syncing",
            value
        });
        return;
    }
    if (isChanged) {
        debug$i("Server value changed, syncing editor");
        try {
            slateEditor.onChange();
        } catch (err) {
            console.error(err), sendBack({
                type: "invalid value",
                resolution: null,
                value
            }), sendBack({
                type: "done syncing",
                value
            });
            return;
        }
        hadSelection && !slateEditor.selection && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, {
            anchor: {
                path: [
                    0,
                    0
                ],
                offset: 0
            },
            focus: {
                path: [
                    0,
                    0
                ],
                offset: 0
            }
        }), slateEditor.onChange()), sendBack({
            type: "value changed",
            value
        });
    } else debug$i("Server value and editor value is equal, no need to sync.");
    sendBack({
        type: "done syncing",
        value
    });
}
function getBlocks(_0) {
    return __asyncGenerator(this, arguments, function*({ slateValue, streamBlocks }) {
        let index = 0;
        try {
            for(var iter = __forAwait(slateValue), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = !1){
                const block = temp.value;
                streamBlocks && (yield new __await(new Promise((resolve)=>setTimeout(resolve, 0)))), yield [
                    block,
                    index
                ], index++;
            }
        } catch (temp2) {
            error = [
                temp2
            ];
        } finally{
            try {
                more && (temp = iter.return) && (yield new __await(temp.call(iter)));
            } finally{
                if (error) throw error[0];
            }
        }
    });
}
function syncBlock({ context, sendBack, block, index, slateEditor, value }) {
    let blockChanged = !1, blockValid = !0;
    const currentBlock = block, currentBlockIndex = index, oldBlock = slateEditor.children[currentBlockIndex], hasChanges = oldBlock && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentBlock, oldBlock);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(slateEditor, ()=>{
        withRemoteChanges(slateEditor, ()=>{
            withoutPatching(slateEditor, ()=>{
                var _a, _b, _c, _d, _e;
                if (hasChanges && blockValid) {
                    const validationValue = [
                        value[currentBlockIndex]
                    ], validation = validateValue(validationValue, context.schema, context.keyGenerator);
                    !validation.valid && (_a = validation.resolution) != null && _a.autoResolve && ((_b = validation.resolution) == null ? void 0 : _b.patches.length) > 0 && !context.readOnly && context.previousValue && context.previousValue !== value && (console.warn(`${validation.resolution.action} for block with _key '${validationValue[0]._key}'. ${(_c = validation.resolution) == null ? void 0 : _c.description}`), validation.resolution.patches.forEach((patch)=>{
                        sendBack({
                            type: "patch",
                            patch
                        });
                    })), validation.valid || (_d = validation.resolution) != null && _d.autoResolve ? (oldBlock._key === currentBlock._key ? (debug$i.enabled && debug$i("Updating block", oldBlock, currentBlock), _updateBlock(slateEditor, currentBlock, oldBlock, currentBlockIndex)) : (debug$i.enabled && debug$i("Replacing block", oldBlock, currentBlock), _replaceBlock(slateEditor, currentBlock, currentBlockIndex)), blockChanged = !0) : (sendBack({
                        type: "invalid value",
                        resolution: validation.resolution,
                        value
                    }), blockValid = !1);
                }
                if (!oldBlock && blockValid) {
                    const validationValue = [
                        value[currentBlockIndex]
                    ], validation = validateValue(validationValue, context.schema, context.keyGenerator);
                    debug$i.enabled && debug$i("Validating and inserting new block in the end of the value", currentBlock), validation.valid || (_e = validation.resolution) != null && _e.autoResolve ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, currentBlock, {
                        at: [
                            currentBlockIndex
                        ]
                    }) : (debug$i("Invalid", validation), sendBack({
                        type: "invalid value",
                        resolution: validation.resolution,
                        value
                    }), blockValid = !1);
                }
            });
        });
    }), {
        blockChanged,
        blockValid
    };
}
function _replaceBlock(slateEditor, currentBlock, currentBlockIndex) {
    const currentSelection = slateEditor.selection, selectionFocusOnBlock = currentSelection && currentSelection.focus.path[0] === currentBlockIndex;
    selectionFocusOnBlock && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(slateEditor), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(slateEditor, {
        at: [
            currentBlockIndex
        ]
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, currentBlock, {
        at: [
            currentBlockIndex
        ]
    }), slateEditor.onChange(), selectionFocusOnBlock && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, currentSelection);
}
function _updateBlock(slateEditor, currentBlock, oldBlock, currentBlockIndex) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(slateEditor, currentBlock, {
        at: [
            currentBlockIndex
        ]
    }), slateEditor.isTextBlock(currentBlock) && slateEditor.isTextBlock(oldBlock)) {
        const oldBlockChildrenLength = oldBlock.children.length;
        currentBlock.children.length < oldBlockChildrenLength && Array.from(Array(oldBlockChildrenLength - currentBlock.children.length)).forEach((_, index)=>{
            const childIndex = oldBlockChildrenLength - 1 - index;
            childIndex > 0 && (debug$i("Removing child"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(slateEditor, {
                at: [
                    currentBlockIndex,
                    childIndex
                ]
            }));
        }), currentBlock.children.forEach((currentBlockChild, currentBlockChildIndex)=>{
            const oldBlockChild = oldBlock.children[currentBlockChildIndex], isChildChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentBlockChild, oldBlockChild), isTextChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentBlockChild.text, oldBlockChild == null ? void 0 : oldBlockChild.text), path = [
                currentBlockIndex,
                currentBlockChildIndex
            ];
            if (isChildChanged) if (currentBlockChild._key === (oldBlockChild == null ? void 0 : oldBlockChild._key)) {
                debug$i("Updating changed child", currentBlockChild, oldBlockChild), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(slateEditor, currentBlockChild, {
                    at: path
                });
                const isSpanNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(currentBlockChild) && currentBlockChild._type === "span" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(oldBlockChild) && oldBlockChild._type === "span";
                isSpanNode && isTextChanged ? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].delete(slateEditor, {
                    at: {
                        focus: {
                            path,
                            offset: 0
                        },
                        anchor: {
                            path,
                            offset: oldBlockChild.text.length
                        }
                    }
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertText(slateEditor, currentBlockChild.text, {
                    at: path
                }), slateEditor.onChange()) : isSpanNode || (debug$i("Updating changed inline object child", currentBlockChild), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(slateEditor, {
                    _key: VOID_CHILD_KEY
                }, {
                    at: [
                        ...path,
                        0
                    ],
                    voids: !0
                }));
            } else oldBlockChild ? (debug$i("Replacing child", currentBlockChild), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(slateEditor, {
                at: [
                    currentBlockIndex,
                    currentBlockChildIndex
                ]
            }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, currentBlockChild, {
                at: [
                    currentBlockIndex,
                    currentBlockChildIndex
                ]
            }), slateEditor.onChange()) : oldBlockChild || (debug$i("Inserting new child", currentBlockChild), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, currentBlockChild, {
                at: [
                    currentBlockIndex,
                    currentBlockChildIndex
                ]
            }), slateEditor.onChange());
        });
    }
}
const debug$h = debugWithName("component:PortableTextEditor:Synchronizer");
function Synchronizer(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40), { editorActor, slateEditor } = props, value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(props.editorActor, _temp), readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(props.editorActor, _temp2);
    let t0;
    $[0] !== props.editorActor ? (t0 = props.editorActor.getSnapshot(), $[0] = props.editorActor, $[1] = t0) : t0 = $[1];
    const t1 = t0.context.keyGenerator;
    let t2;
    $[2] !== props.editorActor ? (t2 = props.editorActor.getSnapshot().matches({
        "edit mode": "read only"
    }), $[2] = props.editorActor, $[3] = t2) : t2 = $[3];
    let t3;
    $[4] !== props.editorActor ? (t3 = props.editorActor.getSnapshot(), $[4] = props.editorActor, $[5] = t3) : t3 = $[5];
    let t4;
    $[6] !== slateEditor || $[7] !== t0.context.keyGenerator || $[8] !== t2 || $[9] !== t3.context.schema ? (t4 = {
        input: {
            keyGenerator: t1,
            readOnly: t2,
            schema: t3.context.schema,
            slateEditor
        }
    }, $[6] = slateEditor, $[7] = t0.context.keyGenerator, $[8] = t2, $[9] = t3.context.schema, $[10] = t4) : t4 = $[10];
    const syncActorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActorRef"])(syncMachine, t4);
    let t5;
    $[11] !== editorActor ? (t5 = editorActor.getSnapshot(), $[11] = editorActor, $[12] = t5) : t5 = $[12];
    let t6;
    $[13] !== slateEditor || $[14] !== t5.context.schema ? (t6 = {
        input: {
            schema: t5.context.schema,
            slateEditor
        }
    }, $[13] = slateEditor, $[14] = t5.context.schema, $[15] = t6) : t6 = $[15];
    const mutationActorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActorRef"])(mutationMachine, t6);
    let t7, t8;
    $[16] !== editorActor || $[17] !== mutationActorRef || $[18] !== syncActorRef ? (t7 = ()=>{
        const subscription = mutationActorRef.on("*", (event)=>{
            event.type === "has pending patches" && syncActorRef.send({
                type: "has pending patches"
            }), event.type === "mutation" && (syncActorRef.send({
                type: "mutation"
            }), editorActor.send(event));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, t8 = [
        mutationActorRef,
        syncActorRef,
        editorActor
    ], $[16] = editorActor, $[17] = mutationActorRef, $[18] = syncActorRef, $[19] = t7, $[20] = t8) : (t7 = $[19], t8 = $[20]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10, t9;
    $[21] !== props.editorActor || $[22] !== syncActorRef ? (t9 = ()=>{
        const subscription_0 = syncActorRef.on("*", (event_0)=>{
            props.editorActor.send(event_0);
        });
        return ()=>{
            subscription_0.unsubscribe();
        };
    }, t10 = [
        props.editorActor,
        syncActorRef
    ], $[21] = props.editorActor, $[22] = syncActorRef, $[23] = t10, $[24] = t9) : (t10 = $[23], t9 = $[24]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11, t12;
    $[25] !== readOnly || $[26] !== syncActorRef ? (t11 = ()=>{
        syncActorRef.send({
            type: "update readOnly",
            readOnly
        });
    }, t12 = [
        syncActorRef,
        readOnly
    ], $[25] = readOnly, $[26] = syncActorRef, $[27] = t11, $[28] = t12) : (t11 = $[27], t12 = $[28]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13, t14;
    $[29] !== syncActorRef || $[30] !== value ? (t13 = ()=>{
        debug$h("Value from props changed, syncing new value"), syncActorRef.send({
            type: "update value",
            value
        });
    }, t14 = [
        syncActorRef,
        value
    ], $[29] = syncActorRef, $[30] = value, $[31] = t13, $[32] = t14) : (t13 = $[31], t14 = $[32]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15;
    $[33] !== editorActor || $[34] !== mutationActorRef ? (t15 = ()=>{
        debug$h("Subscribing to patch events");
        const sub = editorActor.on("patch", (event_1)=>{
            mutationActorRef.send(event_1);
        });
        return ()=>{
            debug$h("Unsubscribing to patch events"), sub.unsubscribe();
        };
    }, $[33] = editorActor, $[34] = mutationActorRef, $[35] = t15) : t15 = $[35];
    let t16;
    return $[36] !== editorActor || $[37] !== mutationActorRef || $[38] !== slateEditor ? (t16 = [
        editorActor,
        mutationActorRef,
        slateEditor
    ], $[36] = editorActor, $[37] = mutationActorRef, $[38] = slateEditor, $[39] = t16) : t16 = $[39], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16), null;
}
function _temp2(s_0) {
    return s_0.matches({
        "edit mode": "read only"
    });
}
function _temp(s) {
    return s.context.value;
}
Synchronizer.displayName = "Synchronizer";
var __defProp$l = Object.defineProperty, __defProps$f = Object.defineProperties, __getOwnPropDescs$f = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$l = Object.getOwnPropertySymbols, __hasOwnProp$l = Object.prototype.hasOwnProperty, __propIsEnum$l = Object.prototype.propertyIsEnumerable, __defNormalProp$l = (obj, key, value)=>key in obj ? __defProp$l(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$l = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$l.call(b, prop) && __defNormalProp$l(a, prop, b[prop]);
    if (__getOwnPropSymbols$l) for (var prop of __getOwnPropSymbols$l(b))__propIsEnum$l.call(b, prop) && __defNormalProp$l(a, prop, b[prop]);
    return a;
}, __spreadProps$f = (a, b)=>__defProps$f(a, __getOwnPropDescs$f(b));
const debug$g = debugWithName("operationToPatches");
function createOperationToPatches(types) {
    const textBlockName = types.block.name;
    function insertTextPatch(editor, operation, beforeValue) {
        debug$g.enabled && debug$g("Operation", JSON.stringify(operation, null, 2));
        const block = editor.isTextBlock(editor.children[operation.path[0]]) && editor.children[operation.path[0]];
        if (!block) throw new Error("Could not find block");
        const textChild = editor.isTextBlock(block) && editor.isTextSpan(block.children[operation.path[1]]) && block.children[operation.path[1]];
        if (!textChild) throw new Error("Could not find child");
        const path = [
            {
                _key: block._key
            },
            "children",
            {
                _key: textChild._key
            },
            "text"
        ], prevBlock = beforeValue[operation.path[0]], prevChild = editor.isTextBlock(prevBlock) && prevBlock.children[operation.path[1]], prevText = editor.isTextSpan(prevChild) ? prevChild.text : "", patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffMatchPatch"])(prevText, textChild.text, path);
        return patch.value.length ? [
            patch
        ] : [];
    }
    function removeTextPatch(editor, operation, beforeValue) {
        const block = editor && editor.children[operation.path[0]];
        if (!block) throw new Error("Could not find block");
        const child = editor.isTextBlock(block) && block.children[operation.path[1]] || void 0, textChild = editor.isTextSpan(child) ? child : void 0;
        if (child && !textChild) throw new Error("Expected span");
        if (!textChild) throw new Error("Could not find child");
        const path = [
            {
                _key: block._key
            },
            "children",
            {
                _key: textChild._key
            },
            "text"
        ], beforeBlock = beforeValue[operation.path[0]], prevTextChild = editor.isTextBlock(beforeBlock) && beforeBlock.children[operation.path[1]], prevText = editor.isTextSpan(prevTextChild) && prevTextChild.text, patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffMatchPatch"])(prevText || "", textChild.text, path);
        return patch.value ? [
            patch
        ] : [];
    }
    function setNodePatch(editor, operation) {
        if (operation.path.length === 1) {
            const block = editor.children[operation.path[0]];
            if (typeof block._key != "string") throw new Error("Expected block to have a _key");
            const setNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omitBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__spreadValues$l(__spreadValues$l({}, editor.children[operation.path[0]]), operation.newProperties), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isUndefined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(fromSlateValue([
                    setNode
                ], textBlockName)[0], [
                    {
                        _key: block._key
                    }
                ])
            ];
        } else if (operation.path.length === 2) {
            const block = editor.children[operation.path[0]];
            if (editor.isTextBlock(block)) {
                const child = block.children[operation.path[1]];
                if (child) {
                    const blockKey = block._key, childKey = child._key, patches = [], keys = Object.keys(operation.newProperties);
                    return keys.forEach((keyName)=>{
                        if (keys.length === 1 && keyName === "_key") {
                            const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(operation.newProperties, keyName);
                            patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(val, [
                                {
                                    _key: blockKey
                                },
                                "children",
                                block.children.indexOf(child),
                                keyName
                            ]));
                        } else {
                            const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(operation.newProperties, keyName);
                            patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(val, [
                                {
                                    _key: blockKey
                                },
                                "children",
                                {
                                    _key: childKey
                                },
                                keyName
                            ]));
                        }
                    }), patches;
                }
                throw new Error("Could not find a valid child");
            }
            throw new Error("Could not find a valid block");
        } else throw new Error(`Unexpected path encountered: ${JSON.stringify(operation.path)}`);
    }
    function insertNodePatch(editor, operation, beforeValue) {
        const block = beforeValue[operation.path[0]], isTextBlock = editor.isTextBlock(block);
        if (operation.path.length === 1) {
            const position = operation.path[0] === 0 ? "before" : "after", beforeBlock = beforeValue[operation.path[0] - 1], targetKey = operation.path[0] === 0 ? block == null ? void 0 : block._key : beforeBlock == null ? void 0 : beforeBlock._key;
            return targetKey ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                    fromSlateValue([
                        operation.node
                    ], textBlockName)[0]
                ], position, [
                    {
                        _key: targetKey
                    }
                ])
            ] : [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfMissing"])(beforeValue, []),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                    fromSlateValue([
                        operation.node
                    ], textBlockName)[0]
                ], "before", [
                    operation.path[0]
                ])
            ];
        } else if (isTextBlock && operation.path.length === 2 && editor.children[operation.path[0]]) {
            const position = block.children.length === 0 || !block.children[operation.path[1] - 1] ? "before" : "after", node = __spreadValues$l({}, operation.node);
            !node._type && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(node) && (node._type = "span", node.marks = []);
            const child = fromSlateValue([
                {
                    _key: "bogus",
                    _type: textBlockName,
                    children: [
                        node
                    ]
                }
            ], textBlockName)[0].children[0];
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                    child
                ], position, [
                    {
                        _key: block._key
                    },
                    "children",
                    block.children.length <= 1 || !block.children[operation.path[1] - 1] ? 0 : {
                        _key: block.children[operation.path[1] - 1]._key
                    }
                ])
            ];
        }
        return debug$g("Something was inserted into a void block. Not producing editor patches."), [];
    }
    function splitNodePatch(editor, operation, beforeValue) {
        const patches = [], splitBlock = editor.children[operation.path[0]];
        if (!editor.isTextBlock(splitBlock)) throw new Error(`Block with path ${JSON.stringify(operation.path[0])} is not a text block and can't be split`);
        if (operation.path.length === 1) {
            const oldBlock = beforeValue[operation.path[0]];
            if (editor.isTextBlock(oldBlock)) {
                const targetValue = fromSlateValue([
                    editor.children[operation.path[0] + 1]
                ], textBlockName)[0];
                targetValue && (patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                    targetValue
                ], "after", [
                    {
                        _key: splitBlock._key
                    }
                ])), oldBlock.children.slice(operation.position).forEach((span)=>{
                    const path = [
                        {
                            _key: oldBlock._key
                        },
                        "children",
                        {
                            _key: span._key
                        }
                    ];
                    patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])(path));
                }));
            }
            return patches;
        }
        if (operation.path.length === 2) {
            const splitSpan = splitBlock.children[operation.path[1]];
            if (editor.isTextSpan(splitSpan)) {
                const targetSpans = fromSlateValue([
                    __spreadProps$f(__spreadValues$l({}, splitBlock), {
                        children: splitBlock.children.slice(operation.path[1] + 1, operation.path[1] + 2)
                    })
                ], textBlockName)[0].children;
                patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(targetSpans, "after", [
                    {
                        _key: splitBlock._key
                    },
                    "children",
                    {
                        _key: splitSpan._key
                    }
                ])), patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(splitSpan.text, [
                    {
                        _key: splitBlock._key
                    },
                    "children",
                    {
                        _key: splitSpan._key
                    },
                    "text"
                ]));
            }
            return patches;
        }
        return patches;
    }
    function removeNodePatch(editor, operation, beforeValue) {
        const block = beforeValue[operation.path[0]];
        if (operation.path.length === 1) {
            if (block && block._key) return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                    {
                        _key: block._key
                    }
                ])
            ];
            throw new Error("Block not found");
        } else if (editor.isTextBlock(block) && operation.path.length === 2) {
            const spanToRemove = block.children[operation.path[1]];
            return spanToRemove ? block.children.filter((span)=>span._key === operation.node._key).length > 1 ? (console.warn(`Multiple spans have \`_key\` ${operation.node._key}. It's ambiguous which one to remove.`, JSON.stringify(block, null, 2)), []) : [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                    {
                        _key: block._key
                    },
                    "children",
                    {
                        _key: spanToRemove._key
                    }
                ])
            ] : (debug$g("Span not found in editor trying to remove node"), []);
        } else return debug$g("Not creating patch inside object block"), [];
    }
    function mergeNodePatch(editor, operation, beforeValue) {
        const patches = [], block = beforeValue[operation.path[0]], updatedBlock = editor.children[operation.path[0]];
        if (operation.path.length === 1) if (block != null && block._key) {
            const newBlock = fromSlateValue([
                editor.children[operation.path[0] - 1]
            ], textBlockName)[0];
            patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(newBlock, [
                {
                    _key: newBlock._key
                }
            ])), patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                {
                    _key: block._key
                }
            ]));
        } else throw new Error("Target key not found!");
        else if (editor.isTextBlock(block) && editor.isTextBlock(updatedBlock) && operation.path.length === 2) {
            const updatedSpan = updatedBlock.children[operation.path[1] - 1] && editor.isTextSpan(updatedBlock.children[operation.path[1] - 1]) ? updatedBlock.children[operation.path[1] - 1] : void 0, removedSpan = block.children[operation.path[1]] && editor.isTextSpan(block.children[operation.path[1]]) ? block.children[operation.path[1]] : void 0;
            updatedSpan && (block.children.filter((span)=>span._key === updatedSpan._key).length === 1 ? patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(updatedSpan.text, [
                {
                    _key: block._key
                },
                "children",
                {
                    _key: updatedSpan._key
                },
                "text"
            ])) : console.warn(`Multiple spans have \`_key\` ${updatedSpan._key}. It's ambiguous which one to update.`, JSON.stringify(block, null, 2))), removedSpan && (block.children.filter((span)=>span._key === removedSpan._key).length === 1 ? patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                {
                    _key: block._key
                },
                "children",
                {
                    _key: removedSpan._key
                }
            ])) : console.warn(`Multiple spans have \`_key\` ${removedSpan._key}. It's ambiguous which one to remove.`, JSON.stringify(block, null, 2)));
        } else debug$g("Void nodes can't be merged, not creating any patches");
        return patches;
    }
    function moveNodePatch(editor, operation, beforeValue) {
        const patches = [], block = beforeValue[operation.path[0]], targetBlock = beforeValue[operation.newPath[0]];
        if (!targetBlock) return patches;
        if (operation.path.length === 1) {
            const position = operation.path[0] > operation.newPath[0] ? "before" : "after";
            patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                {
                    _key: block._key
                }
            ])), patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                fromSlateValue([
                    block
                ], textBlockName)[0]
            ], position, [
                {
                    _key: targetBlock._key
                }
            ]));
        } else if (operation.path.length === 2 && editor.isTextBlock(block) && editor.isTextBlock(targetBlock)) {
            const child = block.children[operation.path[1]], targetChild = targetBlock.children[operation.newPath[1]], position = operation.newPath[1] === targetBlock.children.length ? "after" : "before", childToInsert = fromSlateValue([
                block
            ], textBlockName)[0].children[operation.path[1]];
            patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([
                {
                    _key: block._key
                },
                "children",
                {
                    _key: child._key
                }
            ])), patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
                childToInsert
            ], position, [
                {
                    _key: targetBlock._key
                },
                "children",
                {
                    _key: targetChild._key
                }
            ]));
        }
        return patches;
    }
    return {
        insertNodePatch,
        insertTextPatch,
        mergeNodePatch,
        moveNodePatch,
        removeNodePatch,
        removeTextPatch,
        setNodePatch,
        splitNodePatch
    };
}
function createWithEventListeners(editorActor, subscriptions) {
    return function(editor) {
        return editorActor.getSnapshot().context.maxBlocks !== void 0 || (subscriptions.push(()=>{
            const subscription = editorActor.on("*", (event)=>{
                switch(event.type){
                    case "annotation.add":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "annotation.add",
                                    annotation: event.annotation
                                },
                                editor
                            });
                            break;
                        }
                    case "annotation.remove":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "annotation.remove",
                                    annotation: event.annotation
                                },
                                editor
                            });
                            break;
                        }
                    case "annotation.toggle":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "annotation.toggle",
                                    annotation: event.annotation
                                },
                                editor
                            });
                            break;
                        }
                    case "blur":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "blur"
                                },
                                editor
                            });
                            break;
                        }
                    case "decorator.add":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "decorator.add",
                                    decorator: event.decorator
                                },
                                editor
                            });
                            break;
                        }
                    case "decorator.remove":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "decorator.remove",
                                    decorator: event.decorator
                                },
                                editor
                            });
                            break;
                        }
                    case "decorator.toggle":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "decorator.toggle",
                                    decorator: event.decorator
                                },
                                editor
                            });
                            break;
                        }
                    case "focus":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "focus"
                                },
                                editor
                            });
                            break;
                        }
                    case "insert.block object":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "insert.block object",
                                    placement: event.placement,
                                    blockObject: event.blockObject
                                },
                                editor
                            });
                            break;
                        }
                    case "insert.inline object":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "insert.inline object",
                                    inlineObject: event.inlineObject
                                },
                                editor
                            });
                            break;
                        }
                    case "list item.toggle":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "list item.toggle",
                                    listItem: event.listItem
                                },
                                editor
                            });
                            break;
                        }
                    case "style.toggle":
                        {
                            editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "style.toggle",
                                    style: event.style
                                },
                                editor
                            });
                            break;
                        }
                }
            });
            return ()=>{
                subscription.unsubscribe();
            };
        }), editor.addMark = (mark)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "decorator.add",
                    decorator: mark
                },
                editor
            });
        }, editor.removeMark = (mark)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "decorator.remove",
                    decorator: mark
                },
                editor
            });
        }, editor.deleteBackward = (unit)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "delete.backward",
                    unit
                },
                editor
            });
        }, editor.deleteForward = (unit)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "delete.forward",
                    unit
                },
                editor
            });
        }, editor.insertBreak = ()=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "insert.break"
                },
                editor
            });
        }, editor.insertSoftBreak = ()=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "insert.soft break"
                },
                editor
            });
        }, editor.insertText = (text, options)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "insert.text",
                    text,
                    options
                },
                editor
            });
        }), editor;
    };
}
function createWithMaxBlocks(editorActor) {
    return function(editor) {
        const { apply: apply2 } = editor;
        return editor.apply = (operation)=>{
            var _a;
            if (editorActor.getSnapshot().matches({
                "edit mode": "read only"
            })) {
                apply2(operation);
                return;
            }
            if (isChangingRemotely(editor)) {
                apply2(operation);
                return;
            }
            if (isUndoing(editor) || isRedoing(editor)) {
                apply2(operation);
                return;
            }
            const rows = (_a = editorActor.getSnapshot().context.maxBlocks) != null ? _a : -1;
            rows > 0 && editor.children.length >= rows && (operation.type === "insert_node" || operation.type === "split_node") && operation.path.length === 1 || apply2(operation);
        }, editor;
    };
}
var __defProp$k = Object.defineProperty, __defProps$e = Object.defineProperties, __getOwnPropDescs$e = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$k = Object.getOwnPropertySymbols, __hasOwnProp$k = Object.prototype.hasOwnProperty, __propIsEnum$k = Object.prototype.propertyIsEnumerable, __defNormalProp$k = (obj, key, value)=>key in obj ? __defProp$k(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$k = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$k.call(b, prop) && __defNormalProp$k(a, prop, b[prop]);
    if (__getOwnPropSymbols$k) for (var prop of __getOwnPropSymbols$k(b))__propIsEnum$k.call(b, prop) && __defNormalProp$k(a, prop, b[prop]);
    return a;
}, __spreadProps$e = (a, b)=>__defProps$e(a, __getOwnPropDescs$e(b));
function createWithObjectKeys(editorActor, schemaTypes) {
    return function(editor) {
        const { apply: apply2, normalizeNode } = editor;
        return editor.apply = (operation)=>{
            if (isChangingRemotely(editor)) {
                apply2(operation);
                return;
            }
            if (isUndoing(editor) || isRedoing(editor)) {
                apply2(operation);
                return;
            }
            if (operation.type === "split_node") {
                apply2(__spreadProps$e(__spreadValues$k({}, operation), {
                    properties: __spreadProps$e(__spreadValues$k({}, operation.properties), {
                        _key: editorActor.getSnapshot().context.keyGenerator()
                    })
                }));
                return;
            }
            if (operation.type === "insert_node" && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isEditor(operation.node)) {
                apply2(__spreadProps$e(__spreadValues$k({}, operation), {
                    node: __spreadProps$e(__spreadValues$k({}, operation.node), {
                        _key: editorActor.getSnapshot().context.keyGenerator()
                    })
                }));
                return;
            }
            apply2(operation);
        }, editor.normalizeNode = (entry)=>{
            const [node, path] = entry;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && node._type === schemaTypes.block.name) {
                if (!node._key) {
                    editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        _key: editorActor.getSnapshot().context.keyGenerator()
                    }, {
                        at: path
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
                for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, path))if (!child._key) {
                    editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        _key: editorActor.getSnapshot().context.keyGenerator()
                    }, {
                        at: childPath
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
            }
            normalizeNode(entry);
        }, editor;
    };
}
var __defProp$j = Object.defineProperty, __defProps$d = Object.defineProperties, __getOwnPropDescs$d = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$j = Object.getOwnPropertySymbols, __hasOwnProp$j = Object.prototype.hasOwnProperty, __propIsEnum$j = Object.prototype.propertyIsEnumerable, __defNormalProp$j = (obj, key, value)=>key in obj ? __defProp$j(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$j = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$j.call(b, prop) && __defNormalProp$j(a, prop, b[prop]);
    if (__getOwnPropSymbols$j) for (var prop of __getOwnPropSymbols$j(b))__propIsEnum$j.call(b, prop) && __defNormalProp$j(a, prop, b[prop]);
    return a;
}, __spreadProps$d = (a, b)=>__defProps$d(a, __getOwnPropDescs$d(b)), __objRest$2 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$j.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$j) for (var prop of __getOwnPropSymbols$j(source))exclude.indexOf(prop) < 0 && __propIsEnum$j.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const debug$f = debugWithName("applyPatches"), debugVerbose$2 = debug$f.enabled && !0;
function createApplyPatch(schemaTypes) {
    return (editor, patch)=>{
        let changed = !1;
        debugVerbose$2 && (debug$f(`

NEW PATCH =============================================================`), debug$f(JSON.stringify(patch, null, 2)));
        try {
            switch(patch.type){
                case "insert":
                    changed = insertPatch(editor, patch, schemaTypes);
                    break;
                case "unset":
                    changed = unsetPatch(editor, patch);
                    break;
                case "set":
                    changed = setPatch(editor, patch);
                    break;
                case "diffMatchPatch":
                    changed = diffMatchPatch(editor, patch);
                    break;
                default:
                    debug$f("Unhandled patch", patch.type);
            }
        } catch (err) {
            console.error(err);
        }
        return changed;
    };
}
function diffMatchPatch(editor, patch) {
    const { block, child, childPath } = findBlockAndChildFromPath(editor, patch.path);
    if (!block) return debug$f("Block not found"), !1;
    if (!child || !childPath) return debug$f("Child not found"), !1;
    if (!(block && editor.isTextBlock(block) && patch.path.length === 4 && patch.path[1] === "children" && patch.path[3] === "text") || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(child)) return !1;
    const patches = parse(patch.value), [newValue] = apply(patches, child.text, {
        allowExceedingIndices: !0
    }), diff$1 = cleanupEfficiency(diff(child.text, newValue), 5);
    debugState(editor, "before");
    let offset = 0;
    for (const [op, text] of diff$1)op === DIFF_INSERT ? (editor.apply({
        type: "insert_text",
        path: childPath,
        offset,
        text
    }), offset += text.length) : op === DIFF_DELETE ? editor.apply({
        type: "remove_text",
        path: childPath,
        offset,
        text
    }) : op === DIFF_EQUAL && (offset += text.length);
    return debugState(editor, "after"), !0;
}
function insertPatch(editor, patch, schemaTypes) {
    const { block: targetBlock, child: targetChild, blockPath: targetBlockPath, childPath: targetChildPath } = findBlockAndChildFromPath(editor, patch.path);
    if (!targetBlock || !targetBlockPath) return debug$f("Block not found"), !1;
    if (patch.path.length > 1 && patch.path[1] !== "children") return debug$f("Ignoring patch targeting void value"), !1;
    if (patch.path.length === 1) {
        const { items: items2, position: position2 } = patch, blocksToInsert = toSlateValue(items2, {
            schemaTypes
        }, KEY_TO_SLATE_ELEMENT.get(editor)), targetBlockIndex = targetBlockPath[0], normalizedIdx2 = position2 === "after" ? targetBlockIndex + 1 : targetBlockIndex;
        return debug$f(`Inserting blocks at path [${normalizedIdx2}]`), debugState(editor, "before"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, blocksToInsert, {
            at: [
                normalizedIdx2
            ]
        }), debugState(editor, "after"), !0;
    }
    const { items, position } = patch;
    if (!targetChild || !targetChildPath) return debug$f("Child not found"), !1;
    const childrenToInsert = targetBlock && toSlateValue([
        __spreadProps$d(__spreadValues$j({}, targetBlock), {
            children: items
        })
    ], {
        schemaTypes
    }, KEY_TO_SLATE_ELEMENT.get(editor)), targetChildIndex = targetChildPath[1], normalizedIdx = position === "after" ? targetChildIndex + 1 : targetChildIndex, childInsertPath = [
        targetChildPath[0],
        normalizedIdx
    ];
    return debug$f(`Inserting children at path ${childInsertPath}`), debugState(editor, "before"), childrenToInsert && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(childrenToInsert[0]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, childrenToInsert[0].children, {
        at: childInsertPath
    }), debugState(editor, "after"), !0;
}
function setPatch(editor, patch) {
    let value = patch.value;
    typeof patch.path[3] == "string" && (value = {}, value[patch.path[3]] = patch.value);
    const { block, blockPath, child, childPath } = findBlockAndChildFromPath(editor, patch.path);
    if (!block) return debug$f("Block not found"), !1;
    const isTextBlock = editor.isTextBlock(block);
    if (isTextBlock && patch.path.length > 1 && patch.path[1] !== "children") return debug$f("Ignoring setting void value"), !1;
    if (debugState(editor, "before"), isTextBlock && child && childPath) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(value) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(child)) {
            const newText = child.text;
            value.text !== newText && (debug$f("Setting text property"), editor.apply({
                type: "remove_text",
                path: childPath,
                offset: 0,
                text: newText
            }), editor.apply({
                type: "insert_text",
                path: childPath,
                offset: 0,
                text: value.text
            }), editor.onChange());
        } else debug$f("Setting non-text property"), editor.apply({
            type: "set_node",
            path: childPath,
            properties: {},
            newProperties: value
        });
        return !0;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block) && patch.path.length === 1 && blockPath) {
        debug$f("Setting block property");
        const _a = value, { children } = _a, nextRest = __objRest$2(_a, [
            "children"
        ]), _b = block || {
            children: void 0
        }, prevRest = __objRest$2(_b, [
            "children"
        ]);
        editor.apply({
            type: "set_node",
            path: blockPath,
            properties: __spreadValues$j({}, prevRest),
            newProperties: nextRest
        }), debug$f("Setting children"), block.children.forEach((c2, cIndex)=>{
            editor.apply({
                type: "remove_node",
                path: blockPath.concat(block.children.length - 1 - cIndex),
                node: c2
            });
        }), Array.isArray(children) && children.forEach((c2, cIndex)=>{
            editor.apply({
                type: "insert_node",
                path: blockPath.concat(cIndex),
                node: c2
            });
        });
    } else if (block && "value" in block) {
        const newVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAll"])([
            block.value
        ], [
            patch
        ])[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, __spreadProps$d(__spreadValues$j({}, block), {
            value: newVal
        }), {
            at: blockPath
        }), !0;
    }
    return debugState(editor, "after"), !0;
}
function unsetPatch(editor, patch) {
    if (patch.path.length === 0) {
        debug$f("Removing everything"), debugState(editor, "before");
        const previousSelection = editor.selection;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor), editor.children.forEach((_child, i)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
                at: [
                    i
                ]
            });
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, editor.pteCreateTextBlock({
            decorators: []
        })), previousSelection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, {
            anchor: {
                path: [
                    0,
                    0
                ],
                offset: 0
            },
            focus: {
                path: [
                    0,
                    0
                ],
                offset: 0
            }
        }), editor.onChange(), debugState(editor, "after"), !0;
    }
    const { block, blockPath, child, childPath } = findBlockAndChildFromPath(editor, patch.path);
    if (patch.path.length === 1) {
        if (!block || !blockPath) return debug$f("Block not found"), !1;
        const blockIndex = blockPath[0];
        return debug$f(`Removing block at path [${blockIndex}]`), debugState(editor, "before"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
            at: [
                blockIndex
            ]
        }), debugState(editor, "after"), !0;
    }
    return editor.isTextBlock(block) && patch.path[1] === "children" && patch.path.length === 3 ? !child || !childPath ? (debug$f("Child not found"), !1) : (debug$f(`Unsetting child at path ${JSON.stringify(childPath)}`), debugState(editor, "before"), debugVerbose$2 && debug$f(`Removing child at path ${JSON.stringify(childPath)}`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
        at: childPath
    }), debugState(editor, "after"), !0) : !1;
}
function isKeyedSegment(segment) {
    return typeof segment == "object" && "_key" in segment;
}
function debugState(editor, stateName) {
    debugVerbose$2 && (debug$f(`Children ${stateName}:`, JSON.stringify(editor.children, null, 2)), debug$f(`Selection ${stateName}: `, JSON.stringify(editor.selection, null, 2)));
}
function findBlockFromPath(editor, path) {
    let blockIndex = -1;
    const block = editor.children.find((node, index)=>{
        const isMatch = isKeyedSegment(path[0]) ? node._key === path[0]._key : index === path[0];
        return isMatch && (blockIndex = index), isMatch;
    });
    return block ? {
        block,
        path: [
            blockIndex
        ]
    } : {};
}
function findBlockAndChildFromPath(editor, path) {
    const { block, path: blockPath } = findBlockFromPath(editor, path);
    if (!(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block) && path[1] === "children")) return {
        block,
        blockPath,
        child: void 0,
        childPath: void 0
    };
    let childIndex = -1;
    const child = block.children.find((node, index)=>{
        const isMatch = isKeyedSegment(path[2]) ? node._key === path[2]._key : index === path[2];
        return isMatch && (childIndex = index), isMatch;
    });
    return child ? {
        block,
        child,
        blockPath,
        childPath: blockPath == null ? void 0 : blockPath.concat(childIndex)
    } : {
        block,
        blockPath,
        child: void 0,
        childPath: void 0
    };
}
var __defProp$i = Object.defineProperty, __defProps$c = Object.defineProperties, __getOwnPropDescs$c = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$i = Object.getOwnPropertySymbols, __hasOwnProp$i = Object.prototype.hasOwnProperty, __propIsEnum$i = Object.prototype.propertyIsEnumerable, __defNormalProp$i = (obj, key, value)=>key in obj ? __defProp$i(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$i = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$i.call(b, prop) && __defNormalProp$i(a, prop, b[prop]);
    if (__getOwnPropSymbols$i) for (var prop of __getOwnPropSymbols$i(b))__propIsEnum$i.call(b, prop) && __defNormalProp$i(a, prop, b[prop]);
    return a;
}, __spreadProps$c = (a, b)=>__defProps$c(a, __getOwnPropDescs$c(b));
const debug$e = debugWithName("plugin:withPatches");
function createWithPatches({ editorActor, patchFunctions, schemaTypes, subscriptions }) {
    let previousChildren;
    const applyPatch = createApplyPatch(schemaTypes);
    return function(editor) {
        IS_PROCESSING_REMOTE_CHANGES.set(editor, !1), PATCHING.set(editor, !0), previousChildren = [
            ...editor.children
        ];
        const { apply: apply2 } = editor;
        let bufferedPatches = [];
        const handleBufferedRemotePatches = ()=>{
            if (bufferedPatches.length === 0) return;
            const patches = bufferedPatches;
            bufferedPatches = [];
            let changed = !1;
            withRemoteChanges(editor, ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                    withoutPatching(editor, ()=>{
                        withoutSaving(editor, ()=>{
                            patches.forEach((patch)=>{
                                debug$e.enabled && debug$e(`Handling remote patch ${JSON.stringify(patch)}`), changed = applyPatch(editor, patch);
                            });
                        });
                    });
                }), changed && (editor.normalize(), editor.onChange());
            });
        }, handlePatches = ({ patches })=>{
            const remotePatches = patches.filter((p)=>p.origin !== "local");
            remotePatches.length !== 0 && (bufferedPatches = bufferedPatches.concat(remotePatches), handleBufferedRemotePatches());
        };
        return subscriptions.push(()=>{
            debug$e("Subscribing to remote patches");
            const sub = editorActor.on("patches", handlePatches);
            return ()=>{
                debug$e("Unsubscribing to remote patches"), sub.unsubscribe();
            };
        }), editor.apply = (operation)=>{
            let patches = [];
            previousChildren = editor.children;
            const editorWasEmpty = isEqualToEmptyEditor(previousChildren, schemaTypes);
            apply2(operation);
            const editorIsEmpty = isEqualToEmptyEditor(editor.children, schemaTypes);
            if (!isPatching(editor)) return editor;
            switch(editorWasEmpty && !editorIsEmpty && operation.type !== "set_selection" && patches.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(previousChildren, "before", [
                0
            ])), operation.type){
                case "insert_text":
                    patches = [
                        ...patches,
                        ...patchFunctions.insertTextPatch(editor, operation, previousChildren)
                    ];
                    break;
                case "remove_text":
                    patches = [
                        ...patches,
                        ...patchFunctions.removeTextPatch(editor, operation, previousChildren)
                    ];
                    break;
                case "remove_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.removeNodePatch(editor, operation, previousChildren)
                    ];
                    break;
                case "split_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.splitNodePatch(editor, operation, previousChildren)
                    ];
                    break;
                case "insert_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.insertNodePatch(editor, operation, previousChildren)
                    ];
                    break;
                case "set_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.setNodePatch(editor, operation, previousChildren)
                    ];
                    break;
                case "merge_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.mergeNodePatch(editor, operation, previousChildren)
                    ];
                    break;
                case "move_node":
                    patches = [
                        ...patches,
                        ...patchFunctions.moveNodePatch(editor, operation, previousChildren)
                    ];
                    break;
            }
            return !editorWasEmpty && editorIsEmpty && [
                "merge_node",
                "set_node",
                "remove_text",
                "remove_node"
            ].includes(operation.type) && (patches = [
                ...patches,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unset"])([])
            ], editorActor.send({
                type: "unset",
                previousValue: fromSlateValue(previousChildren, schemaTypes.block.name, KEY_TO_VALUE_ELEMENT.get(editor))
            })), editorWasEmpty && patches.length > 0 && (patches = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$patches$40$1$2e$1$2e$0$2f$node_modules$2f40$portabletext$2f$patches$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfMissing"])([], []),
                ...patches
            ]), patches.length > 0 && patches.forEach((patch)=>{
                editorActor.send({
                    type: "patch",
                    patch: __spreadProps$c(__spreadValues$i({}, patch), {
                        origin: "local"
                    })
                });
            }), editor;
        }, editor;
    };
}
const debug$d = debugWithName("plugin:withPlaceholderBlock");
function createWithPlaceholderBlock(editorActor) {
    return function(editor) {
        const { apply: apply2 } = editor;
        return editor.apply = (op)=>{
            if (editorActor.getSnapshot().matches({
                "edit mode": "read only"
            })) {
                apply2(op);
                return;
            }
            if (isChangingRemotely(editor)) {
                apply2(op);
                return;
            }
            if (isUndoing(editor) || isRedoing(editor)) {
                apply2(op);
                return;
            }
            if (op.type === "remove_node") {
                const node = op.node;
                if (op.path[0] === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, node)) {
                    const nextPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].next(op.path);
                    editor.children[nextPath[0]] || (debug$d("Adding placeholder block"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertNode(editor, editor.pteCreateTextBlock({
                        decorators: []
                    })));
                }
            }
            apply2(op);
        }, editor;
    };
}
const debug$c = debugWithName("plugin:withPortableTextBlockStyle");
function createWithPortableTextBlockStyle(editorActor, types) {
    const defaultStyle = types.styles[0].value;
    return function(editor) {
        const { normalizeNode } = editor;
        return editor.normalizeNode = (nodeEntry)=>{
            const [, path] = nodeEntry;
            for (const op of editor.operations)if (op.type === "split_node" && op.path.length === 1 && editor.isTextBlock(op.properties) && op.properties.style !== defaultStyle && op.path[0] === path[0] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(path, op.path)) {
                const [child] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, [
                    op.path[0] + 1,
                    0
                ]);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(child) && child.text === "") {
                    debug$c(`Normalizing split node to ${defaultStyle} style`, op), editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        style: defaultStyle
                    }, {
                        at: [
                            op.path[0] + 1
                        ],
                        voids: !1
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
            }
            normalizeNode(nodeEntry);
        }, editor;
    };
}
function isPortableTextSpan(node) {
    return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every((mark)=>typeof mark == "string"));
}
function isPortableTextBlock(node) {
    return(// A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def)=>typeof def._key == "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child)=>typeof child == "object" && "_type" in child));
}
function getPreviousSpan({ editor, blockPath, spanPath }) {
    let previousSpan;
    for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath, {
        reverse: !0
    }))if (editor.isTextSpan(child) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].isBefore(childPath, spanPath)) {
        previousSpan = child;
        break;
    }
    return previousSpan;
}
function getNextSpan({ editor, blockPath, spanPath }) {
    let nextSpan;
    for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath))if (editor.isTextSpan(child) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].isAfter(childPath, spanPath)) {
        nextSpan = child;
        break;
    }
    return nextSpan;
}
var __defProp$h = Object.defineProperty, __defProps$b = Object.defineProperties, __getOwnPropDescs$b = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$h = Object.getOwnPropertySymbols, __hasOwnProp$h = Object.prototype.hasOwnProperty, __propIsEnum$h = Object.prototype.propertyIsEnumerable, __defNormalProp$h = (obj, key, value)=>key in obj ? __defProp$h(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$h = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$h.call(b, prop) && __defNormalProp$h(a, prop, b[prop]);
    if (__getOwnPropSymbols$h) for (var prop of __getOwnPropSymbols$h(b))__propIsEnum$h.call(b, prop) && __defNormalProp$h(a, prop, b[prop]);
    return a;
}, __spreadProps$b = (a, b)=>__defProps$b(a, __getOwnPropDescs$b(b));
const debug$b = debugWithName("plugin:withPortableTextMarkModel");
function createWithPortableTextMarkModel(editorActor, types) {
    return function(editor) {
        const { apply: apply2, normalizeNode } = editor, decorators = types.decorators.map((t)=>t.value);
        return editor.normalizeNode = (nodeEntry)=>{
            var _a, _b, _c, _d, _e, _f, _g;
            const [node, path] = nodeEntry;
            if (editor.isTextBlock(node)) {
                const children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, path);
                for (const [child, childPath] of children){
                    const nextNode = node.children[childPath[1] + 1];
                    if (editor.isTextSpan(child) && editor.isTextSpan(nextNode) && (_a = child.marks) != null && _a.every((mark)=>{
                        var _a2;
                        return (_a2 = nextNode.marks) == null ? void 0 : _a2.includes(mark);
                    }) && (_b = nextNode.marks) != null && _b.every((mark)=>{
                        var _a2;
                        return (_a2 = child.marks) == null ? void 0 : _a2.includes(mark);
                    })) {
                        debug$b("Merging spans", JSON.stringify(child, null, 2), JSON.stringify(nextNode, null, 2)), editorActor.send({
                            type: "normalizing"
                        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].mergeNodes(editor, {
                            at: [
                                childPath[0],
                                childPath[1] + 1
                            ],
                            voids: !0
                        }), editorActor.send({
                            type: "done normalizing"
                        });
                        return;
                    }
                }
            }
            if (editor.isTextBlock(node) && !Array.isArray(node.markDefs)) {
                debug$b("Adding .markDefs to block node"), editorActor.send({
                    type: "normalizing"
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    markDefs: []
                }, {
                    at: path
                }), editorActor.send({
                    type: "done normalizing"
                });
                return;
            }
            if (editor.isTextSpan(node) && !Array.isArray(node.marks)) {
                debug$b("Adding .marks to span node"), editorActor.send({
                    type: "normalizing"
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    marks: []
                }, {
                    at: path
                }), editorActor.send({
                    type: "done normalizing"
                });
                return;
            }
            if (editor.isTextSpan(node)) {
                const blockPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].parent(path), [block] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, blockPath), decorators2 = types.decorators.map((decorator)=>decorator.value), annotations = (_c = node.marks) == null ? void 0 : _c.filter((mark)=>!decorators2.includes(mark));
                if (editor.isTextBlock(block) && node.text === "" && annotations && annotations.length > 0) {
                    debug$b("Removing annotations from empty span node"), editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        marks: (_d = node.marks) == null ? void 0 : _d.filter((mark)=>decorators2.includes(mark))
                    }, {
                        at: path
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
            }
            if (editor.isTextBlock(node)) {
                const decorators2 = types.decorators.map((decorator)=>decorator.value);
                for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, path))if (editor.isTextSpan(child)) {
                    const marks = (_e = child.marks) != null ? _e : [], orphanedAnnotations = marks.filter((mark)=>{
                        var _a2;
                        return !decorators2.includes(mark) && !((_a2 = node.markDefs) != null && _a2.find((def)=>def._key === mark));
                    });
                    if (orphanedAnnotations.length > 0) {
                        debug$b("Removing orphaned annotations from span node"), editorActor.send({
                            type: "normalizing"
                        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                            marks: marks.filter((mark)=>!orphanedAnnotations.includes(mark))
                        }, {
                            at: childPath
                        }), editorActor.send({
                            type: "done normalizing"
                        });
                        return;
                    }
                }
            }
            if (editor.isTextSpan(node)) {
                const blockPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].parent(path), [block] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, blockPath);
                if (editor.isTextBlock(block)) {
                    const decorators2 = types.decorators.map((decorator)=>decorator.value), marks = (_f = node.marks) != null ? _f : [], orphanedAnnotations = marks.filter((mark)=>{
                        var _a2;
                        return !decorators2.includes(mark) && !((_a2 = block.markDefs) != null && _a2.find((def)=>def._key === mark));
                    });
                    if (orphanedAnnotations.length > 0) {
                        debug$b("Removing orphaned annotations from span node"), editorActor.send({
                            type: "normalizing"
                        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                            marks: marks.filter((mark)=>!orphanedAnnotations.includes(mark))
                        }, {
                            at: path
                        }), editorActor.send({
                            type: "done normalizing"
                        });
                        return;
                    }
                }
            }
            if (editor.isTextBlock(node)) {
                const markDefs = (_g = node.markDefs) != null ? _g : [], markDefKeys = /* @__PURE__ */ new Set(), newMarkDefs = [];
                for (const markDef of markDefs)markDefKeys.has(markDef._key) || (markDefKeys.add(markDef._key), newMarkDefs.push(markDef));
                if (markDefs.length !== newMarkDefs.length) {
                    debug$b("Removing duplicate markDefs"), editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        markDefs: newMarkDefs
                    }, {
                        at: path
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
            }
            if (editor.isTextBlock(node) && !editor.operations.some((op)=>op.type === "merge_node" && "markDefs" in op.properties && op.path.length === 1)) {
                const newMarkDefs = (node.markDefs || []).filter((def)=>node.children.find((child)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(child) && Array.isArray(child.marks) && child.marks.includes(def._key)));
                if (node.markDefs && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newMarkDefs, node.markDefs)) {
                    debug$b("Removing markDef not in use"), editorActor.send({
                        type: "normalizing"
                    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        markDefs: newMarkDefs
                    }, {
                        at: path
                    }), editorActor.send({
                        type: "done normalizing"
                    });
                    return;
                }
            }
            normalizeNode(nodeEntry);
        }, editor.apply = (op)=>{
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
            if (isChangingRemotely(editor)) {
                apply2(op);
                return;
            }
            if (isUndoing(editor) || isRedoing(editor)) {
                apply2(op);
                return;
            }
            if (op.type === "set_selection" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) && op.properties && op.newProperties && op.properties.anchor && op.properties.focus && op.newProperties.anchor && op.newProperties.focus) {
                const previousSelectionIsCollapsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed({
                    anchor: op.properties.anchor,
                    focus: op.properties.focus
                }), newSelectionIsCollapsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed({
                    anchor: op.newProperties.anchor,
                    focus: op.newProperties.focus
                });
                if (previousSelectionIsCollapsed && newSelectionIsCollapsed) {
                    const focusSpan = (_a = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                        mode: "lowest",
                        at: op.properties.focus,
                        match: (n)=>editor.isTextSpan(n),
                        voids: !1
                    }))[0]) == null ? void 0 : _a[0], newFocusSpan = (_b = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                        mode: "lowest",
                        at: op.newProperties.focus,
                        match: (n)=>editor.isTextSpan(n),
                        voids: !1
                    }))[0]) == null ? void 0 : _b[0], movedToNextSpan = focusSpan && newFocusSpan && op.newProperties.focus.path[0] === op.properties.focus.path[0] && op.newProperties.focus.path[1] === op.properties.focus.path[1] + 1 && focusSpan.text.length === op.properties.focus.offset && op.newProperties.focus.offset === 0, movedToPreviousSpan = focusSpan && newFocusSpan && op.newProperties.focus.path[0] === op.properties.focus.path[0] && op.newProperties.focus.path[1] === op.properties.focus.path[1] - 1 && op.properties.focus.offset === 0 && newFocusSpan.text.length === op.newProperties.focus.offset;
                    if (movedToNextSpan || movedToPreviousSpan) return;
                }
            }
            if (op.type === "insert_node") {
                const { selection } = editor;
                if (selection) {
                    const [_block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, selection, {
                        depth: 1
                    }), previousSpan = getPreviousSpan({
                        editor,
                        blockPath,
                        spanPath: op.path
                    }), previousSpanAnnotations = previousSpan ? (_c = previousSpan.marks) == null ? void 0 : _c.filter((mark)=>!decorators.includes(mark)) : [], nextSpan = getNextSpan({
                        editor,
                        blockPath,
                        spanPath: [
                            op.path[0],
                            op.path[1] - 1
                        ]
                    }), nextSpanAnnotations = nextSpan ? (_d = nextSpan.marks) == null ? void 0 : _d.filter((mark)=>!decorators.includes(mark)) : [], annotationsEnding = (_e = previousSpanAnnotations == null ? void 0 : previousSpanAnnotations.filter((annotation)=>!(nextSpanAnnotations != null && nextSpanAnnotations.includes(annotation)))) != null ? _e : [], atTheEndOfAnnotation = annotationsEnding.length > 0;
                    if (atTheEndOfAnnotation && isPortableTextSpan(op.node) && (_f = op.node.marks) != null && _f.some((mark)=>annotationsEnding.includes(mark))) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, __spreadProps$b(__spreadValues$h({}, op.node), {
                            marks: (_h = (_g = op.node.marks) == null ? void 0 : _g.filter((mark)=>!annotationsEnding.includes(mark))) != null ? _h : []
                        }));
                        return;
                    }
                    const annotationsStarting = (_i = nextSpanAnnotations == null ? void 0 : nextSpanAnnotations.filter((annotation)=>!(previousSpanAnnotations != null && previousSpanAnnotations.includes(annotation)))) != null ? _i : [], atTheStartOfAnnotation = annotationsStarting.length > 0;
                    if (atTheStartOfAnnotation && isPortableTextSpan(op.node) && (_j = op.node.marks) != null && _j.some((mark)=>annotationsStarting.includes(mark))) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, __spreadProps$b(__spreadValues$h({}, op.node), {
                            marks: (_l = (_k = op.node.marks) == null ? void 0 : _k.filter((mark)=>!annotationsStarting.includes(mark))) != null ? _l : []
                        }));
                        return;
                    }
                    const nextSpanDecorators = (_n = (_m = nextSpan == null ? void 0 : nextSpan.marks) == null ? void 0 : _m.filter((mark)=>decorators.includes(mark))) != null ? _n : [];
                    if (nextSpanDecorators.length > 0 && atTheEndOfAnnotation && !atTheStartOfAnnotation && isPortableTextSpan(op.node) && ((_o = op.node.marks) == null ? void 0 : _o.length) === 0) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, __spreadProps$b(__spreadValues$h({}, op.node), {
                            marks: nextSpanDecorators
                        }));
                        return;
                    }
                }
            }
            if (op.type === "insert_text") {
                const { selection } = editor, collapsedSelection = selection ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection) : !1;
                if (selection && collapsedSelection) {
                    const [_block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, selection, {
                        depth: 1
                    }), [span, spanPath] = (_p = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                        mode: "lowest",
                        at: selection.focus,
                        match: (n)=>editor.isTextSpan(n),
                        voids: !1
                    }))[0]) != null ? _p : [
                        void 0,
                        void 0
                    ], marks = (_q = span.marks) != null ? _q : [], marksWithoutAnnotations = marks.filter((mark)=>decorators.includes(mark)), spanHasAnnotations = marks.length > marksWithoutAnnotations.length, spanIsEmpty = span.text.length === 0, atTheBeginningOfSpan = selection.anchor.offset === 0, atTheEndOfSpan = selection.anchor.offset === span.text.length, previousSpan = getPreviousSpan({
                        editor,
                        blockPath,
                        spanPath
                    }), nextSpan = getNextSpan({
                        editor,
                        blockPath,
                        spanPath
                    }), nextSpanAnnotations = (_s = (_r = nextSpan == null ? void 0 : nextSpan.marks) == null ? void 0 : _r.filter((mark)=>!decorators.includes(mark))) != null ? _s : [], spanAnnotations = marks.filter((mark)=>!decorators.includes(mark)), previousSpanHasAnnotations = previousSpan ? (_t = previousSpan.marks) == null ? void 0 : _t.some((mark)=>!decorators.includes(mark)) : !1, previousSpanHasSameAnnotations = previousSpan ? (_u = previousSpan.marks) == null ? void 0 : _u.filter((mark)=>!decorators.includes(mark)).every((mark)=>marks.includes(mark)) : !1, previousSpanHasSameAnnotation = previousSpan ? (_v = previousSpan.marks) == null ? void 0 : _v.some((mark)=>!decorators.includes(mark) && marks.includes(mark)) : !1, previousSpanHasSameMarks = previousSpan ? (_w = previousSpan.marks) == null ? void 0 : _w.every((mark)=>marks.includes(mark)) : !1, nextSpanSharesSomeAnnotations = spanAnnotations.some((mark)=>nextSpanAnnotations == null ? void 0 : nextSpanAnnotations.includes(mark));
                    if (spanHasAnnotations && !spanIsEmpty) {
                        if (atTheBeginningOfSpan) {
                            if (previousSpanHasSameMarks) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                                    _type: "span",
                                    _key: editorActor.getSnapshot().context.keyGenerator(),
                                    text: op.text,
                                    marks: (_x = previousSpan == null ? void 0 : previousSpan.marks) != null ? _x : []
                                });
                                return;
                            } else if (previousSpanHasSameAnnotations) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                                    _type: "span",
                                    _key: editorActor.getSnapshot().context.keyGenerator(),
                                    text: op.text,
                                    marks: (_y = previousSpan == null ? void 0 : previousSpan.marks) != null ? _y : []
                                });
                                return;
                            } else if (previousSpanHasSameAnnotation) {
                                apply2(op);
                                return;
                            } else if (!previousSpan) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                                    _type: "span",
                                    _key: editorActor.getSnapshot().context.keyGenerator(),
                                    text: op.text,
                                    marks: []
                                });
                                return;
                            }
                        }
                        if (atTheEndOfSpan) {
                            if (nextSpan && nextSpanSharesSomeAnnotations && nextSpanAnnotations.length < spanAnnotations.length || !nextSpanSharesSomeAnnotations) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                                    _type: "span",
                                    _key: editorActor.getSnapshot().context.keyGenerator(),
                                    text: op.text,
                                    marks: (_z = nextSpan == null ? void 0 : nextSpan.marks) != null ? _z : []
                                });
                                return;
                            }
                            if (!nextSpan) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                                    _type: "span",
                                    _key: editorActor.getSnapshot().context.keyGenerator(),
                                    text: op.text,
                                    marks: []
                                });
                                return;
                            }
                        }
                    }
                    if (atTheBeginningOfSpan && !spanIsEmpty && previousSpan) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, {
                            _type: "span",
                            _key: editorActor.getSnapshot().context.keyGenerator(),
                            text: op.text,
                            marks: previousSpanHasAnnotations ? [] : ((_A = previousSpan.marks) != null ? _A : []).filter((mark)=>decorators.includes(mark))
                        });
                        return;
                    }
                }
            }
            if (op.type === "remove_text") {
                const { selection } = editor;
                if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                    const [block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, selection, {
                        depth: 1
                    }), [span, spanPath] = (_B = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                        mode: "lowest",
                        at: {
                            path: op.path,
                            offset: op.offset
                        },
                        match: (n)=>editor.isTextSpan(n),
                        voids: !1
                    }))[0]) != null ? _B : [
                        void 0,
                        void 0
                    ];
                    if (span && block && isPortableTextBlock(block)) {
                        const markDefs = (_C = block.markDefs) != null ? _C : [], marks = (_D = span.marks) != null ? _D : [], spanHasAnnotations = marks.some((mark)=>markDefs.find((markDef)=>markDef._key === mark)), deletingFromTheEnd = op.offset + op.text.length === span.text.length, deletingAllText = op.offset === 0 && deletingFromTheEnd, previousSpan = getPreviousSpan({
                            editor,
                            blockPath,
                            spanPath
                        }), nextSpan = getNextSpan({
                            editor,
                            blockPath,
                            spanPath
                        }), previousSpanHasSameAnnotation = previousSpan ? (_E = previousSpan.marks) == null ? void 0 : _E.some((mark)=>!decorators.includes(mark) && marks.includes(mark)) : !1, nextSpanHasSameAnnotation = nextSpan ? (_F = nextSpan.marks) == null ? void 0 : _F.some((mark)=>!decorators.includes(mark) && marks.includes(mark)) : !1;
                        if (spanHasAnnotations && deletingAllText && !previousSpanHasSameAnnotation && !nextSpanHasSameAnnotation) {
                            const marksWithoutAnnotationMarks = (__spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}).marks || []).filter((mark)=>decorators.includes(mark));
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                                apply2(op), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                                    marks: marksWithoutAnnotationMarks
                                }, {
                                    at: op.path
                                });
                            }), editor.onChange();
                            return;
                        }
                    }
                }
            }
            if (op.type === "merge_node" && op.path.length === 1 && "markDefs" in op.properties && op.properties._type === types.block.name && Array.isArray(op.properties.markDefs) && op.properties.markDefs.length > 0 && op.path[0] - 1 >= 0) {
                const [targetBlock, targetPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, [
                    op.path[0] - 1
                ]);
                if (editor.isTextBlock(targetBlock)) {
                    const oldDefs = Array.isArray(targetBlock.markDefs) && targetBlock.markDefs || [], newMarkDefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                        ...oldDefs,
                        ...op.properties.markDefs
                    ]);
                    debug$b("Copying markDefs over to merged block", op), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        markDefs: newMarkDefs
                    }, {
                        at: targetPath,
                        voids: !1
                    }), apply2(op);
                    return;
                }
            }
            apply2(op);
        }, editor;
    };
}
const addDecoratorActionImplementation = ({ action })=>{
    var _a;
    const editor = action.editor, mark = action.decorator;
    if (editor.selection) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(editor.selection)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {}, {
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText,
                split: !0,
                hanging: !0
            });
            const splitTextNodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isRange(editor.selection) ? [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                    at: editor.selection,
                    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText
                })
            ] : [];
            splitTextNodes.length > 1 && splitTextNodes.every((node)=>{
                var _a2;
                return (_a2 = node[0].marks) == null ? void 0 : _a2.includes(mark);
            }) ? editor.removeMark(mark) : splitTextNodes.forEach(([node, path])=>{
                const marks = [
                    ...(Array.isArray(node.marks) ? node.marks : []).filter((eMark)=>eMark !== mark),
                    mark
                ];
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    marks
                }, {
                    at: path,
                    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText,
                    split: !0,
                    hanging: !0
                });
            });
        } else {
            const [block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, editor.selection, {
                depth: 1
            }), lonelyEmptySpan = editor.isTextBlock(block) && block.children.length === 1 && editor.isTextSpan(block.children[0]) && block.children[0].text === "" ? block.children[0] : void 0;
            if (lonelyEmptySpan) {
                const existingMarks = (_a = lonelyEmptySpan.marks) != null ? _a : [], existingMarksWithoutDecorator = existingMarks.filter((existingMark)=>existingMark !== mark);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    marks: existingMarks.length === existingMarksWithoutDecorator.length ? [
                        ...existingMarks,
                        mark
                    ] : existingMarksWithoutDecorator
                }, {
                    at: blockPath,
                    match: (node)=>editor.isTextSpan(node)
                });
            } else {
                const existingMarks = __spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}).marks || [], marks = __spreadProps$b(__spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}), {
                    marks: [
                        ...existingMarks,
                        mark
                    ]
                });
                editor.marks = marks;
            }
        }
        editor.onChange();
    }
}, removeDecoratorActionImplementation = ({ action })=>{
    var _a;
    const editor = action.editor, mark = action.decorator, { selection } = editor;
    if (selection) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {}, {
        match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText,
        split: !0,
        hanging: !0
    }), editor.selection && [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection,
            match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText
        })
    ].forEach(([node, path])=>{
        const block = editor.children[path[0]];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(block) && block.children.includes(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
            marks: (Array.isArray(node.marks) ? node.marks : []).filter((eMark)=>eMark !== mark),
            _type: "span"
        }, {
            at: path
        });
    });
    else {
        const [block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, selection, {
            depth: 1
        }), lonelyEmptySpan = editor.isTextBlock(block) && block.children.length === 1 && editor.isTextSpan(block.children[0]) && block.children[0].text === "" ? block.children[0] : void 0;
        if (lonelyEmptySpan) {
            const existingMarksWithoutDecorator = ((_a = lonelyEmptySpan.marks) != null ? _a : []).filter((existingMark)=>existingMark !== mark);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                marks: existingMarksWithoutDecorator
            }, {
                at: blockPath,
                match: (node)=>editor.isTextSpan(node)
            });
        } else {
            const existingMarks = __spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}).marks || [], marks = __spreadProps$b(__spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}), {
                marks: existingMarks.filter((eMark)=>eMark !== mark)
            });
            editor.marks = {
                marks: marks.marks,
                _type: "span"
            };
        }
    }
};
function isDecoratorActive({ editor, decorator }) {
    if (!editor.selection) return !1;
    const selectedTextNodes = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
        match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText,
        at: editor.selection
    }));
    return selectedTextNodes.length === 0 ? !1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(editor.selection) ? selectedTextNodes.every((n)=>{
        var _a;
        const [node] = n;
        return (_a = node.marks) == null ? void 0 : _a.includes(decorator);
    }) : (__spreadValues$h({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}).marks || []).includes(decorator);
}
const toggleDecoratorActionImplementation = ({ context, action })=>{
    isDecoratorActive({
        editor: action.editor,
        decorator: action.decorator
    }) ? removeDecoratorActionImplementation({
        context,
        action: {
            type: "decorator.remove",
            editor: action.editor,
            decorator: action.decorator
        }
    }) : addDecoratorActionImplementation({
        context,
        action: {
            type: "decorator.add",
            editor: action.editor,
            decorator: action.decorator
        }
    });
}, debug$a = debugWithName("plugin:withPortableTextSelections"), debugVerbose$1 = debug$a.enabled && !1;
function createWithPortableTextSelections(editorActor, types) {
    let prevSelection = null;
    return function(editor) {
        const emitPortableTextSelection = ()=>{
            if (prevSelection !== editor.selection) {
                let ptRange = null;
                if (editor.selection) {
                    const existing = SLATE_TO_PORTABLE_TEXT_RANGE.get(editor.selection);
                    if (existing) ptRange = existing;
                    else {
                        const value = editor.children;
                        ptRange = toPortableTextRange(value, editor.selection, types), SLATE_TO_PORTABLE_TEXT_RANGE.set(editor.selection, ptRange);
                    }
                }
                debugVerbose$1 && debug$a(`Emitting selection ${JSON.stringify(ptRange || null)} (${JSON.stringify(editor.selection)})`), ptRange ? editorActor.send({
                    type: "selection",
                    selection: ptRange
                }) : editorActor.send({
                    type: "selection",
                    selection: null
                });
            }
            prevSelection = editor.selection;
        }, { onChange } = editor;
        return editor.onChange = ()=>{
            const hasChanges = editor.operations.length > 0;
            onChange(), hasChanges && !editorActor.getSnapshot().matches({
                setup: "setting up"
            }) && emitPortableTextSelection();
        }, editor;
    };
}
var __defProp$g = Object.defineProperty, __defProps$a = Object.defineProperties, __getOwnPropDescs$a = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$g = Object.getOwnPropertySymbols, __hasOwnProp$g = Object.prototype.hasOwnProperty, __propIsEnum$g = Object.prototype.propertyIsEnumerable, __defNormalProp$g = (obj, key, value)=>key in obj ? __defProp$g(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$g = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$g.call(b, prop) && __defNormalProp$g(a, prop, b[prop]);
    if (__getOwnPropSymbols$g) for (var prop of __getOwnPropSymbols$g(b))__propIsEnum$g.call(b, prop) && __defNormalProp$g(a, prop, b[prop]);
    return a;
}, __spreadProps$a = (a, b)=>__defProps$a(a, __getOwnPropDescs$a(b));
const debug$9 = debugWithName("plugin:withSchemaTypes");
function createWithSchemaTypes({ editorActor, schemaTypes }) {
    return function(editor) {
        editor.isTextBlock = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextTextBlock"])(value) && value._type === schemaTypes.block.name, editor.isTextSpan = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(value) && value._type === schemaTypes.span.name, editor.isListBlock = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextListBlock"])(value) && value._type === schemaTypes.block.name, editor.isVoid = (element)=>schemaTypes.block.name !== element._type && (schemaTypes.blockObjects.map((obj)=>obj.name).includes(element._type) || schemaTypes.inlineObjects.map((obj)=>obj.name).includes(element._type)), editor.isInline = (element)=>schemaTypes.inlineObjects.map((obj)=>obj.name).includes(element._type) && "__inline" in element && element.__inline === !0;
        const { normalizeNode } = editor;
        return editor.normalizeNode = (entry)=>{
            const [node, path] = entry;
            if (node._type === void 0 && path.length === 2) {
                debug$9("Setting span type on text node without a type");
                const span = node, key = span._key || editorActor.getSnapshot().context.keyGenerator();
                editorActor.send({
                    type: "normalizing"
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, __spreadProps$a(__spreadValues$g({}, span), {
                    _type: schemaTypes.span.name,
                    _key: key
                }), {
                    at: path
                }), editorActor.send({
                    type: "done normalizing"
                });
                return;
            }
            if (node._key === void 0 && (path.length === 1 || path.length === 2)) {
                debug$9("Setting missing key on child node without a key");
                const key = editorActor.getSnapshot().context.keyGenerator();
                editorActor.send({
                    type: "normalizing"
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    _key: key
                }, {
                    at: path
                }), editorActor.send({
                    type: "done normalizing"
                });
                return;
            }
            normalizeNode(entry);
        }, editor;
    };
}
var __defProp$f = Object.defineProperty, __defProps$9 = Object.defineProperties, __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$f = Object.getOwnPropertySymbols, __hasOwnProp$f = Object.prototype.hasOwnProperty, __propIsEnum$f = Object.prototype.propertyIsEnumerable, __defNormalProp$f = (obj, key, value)=>key in obj ? __defProp$f(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$f = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$f.call(b, prop) && __defNormalProp$f(a, prop, b[prop]);
    if (__getOwnPropSymbols$f) for (var prop of __getOwnPropSymbols$f(b))__propIsEnum$f.call(b, prop) && __defNormalProp$f(a, prop, b[prop]);
    return a;
}, __spreadProps$9 = (a, b)=>__defProps$9(a, __getOwnPropDescs$9(b));
const debug$8 = debugWithName("plugin:withUtils");
function createWithUtils({ editorActor, schemaTypes }) {
    return function(editor) {
        return editor.pteExpandToWord = ()=>{
            const { selection } = editor;
            if (selection && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                const [textNode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, selection.focus, {
                    depth: 2
                });
                if (!textNode || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(textNode) || textNode.text.length === 0) {
                    debug$8("pteExpandToWord: Can't expand to word here");
                    return;
                }
                const { focus } = selection, focusOffset = focus.offset, charsBefore = textNode.text.slice(0, focusOffset), charsAfter = textNode.text.slice(focusOffset, -1), isEmpty = (str)=>str.match(/\s/g), whiteSpaceBeforeIndex = charsBefore.split("").reverse().findIndex((str)=>isEmpty(str)), newStartOffset = whiteSpaceBeforeIndex > -1 ? charsBefore.length - whiteSpaceBeforeIndex : 0, whiteSpaceAfterIndex = charsAfter.split("").findIndex((obj)=>isEmpty(obj)), newEndOffset = charsBefore.length + (whiteSpaceAfterIndex > -1 ? whiteSpaceAfterIndex : charsAfter.length + 1);
                if (!(newStartOffset === newEndOffset || Number.isNaN(newStartOffset) || Number.isNaN(newEndOffset))) {
                    debug$8("pteExpandToWord: Expanding to focused word"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setSelection(editor, {
                        anchor: __spreadProps$9(__spreadValues$f({}, selection.anchor), {
                            offset: newStartOffset
                        }),
                        focus: __spreadProps$9(__spreadValues$f({}, selection.focus), {
                            offset: newEndOffset
                        })
                    });
                    return;
                }
                debug$8("pteExpandToWord: Can't expand to word here");
            }
        }, editor.pteCreateTextBlock = (options)=>toSlateValue([
                __spreadProps$9(__spreadValues$f(__spreadValues$f({
                    _type: schemaTypes.block.name,
                    _key: editorActor.getSnapshot().context.keyGenerator(),
                    style: schemaTypes.styles[0].value || "normal"
                }, options.listItem ? {
                    listItem: options.listItem
                } : {}), options.level ? {
                    level: options.level
                } : {}), {
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            _key: editorActor.getSnapshot().context.keyGenerator(),
                            text: "",
                            marks: options.decorators.filter((decorator)=>schemaTypes.decorators.find(({ value })=>value === decorator))
                        }
                    ]
                })
            ], {
                schemaTypes
            })[0], editor;
    };
}
const withPlugins = (editor, options)=>{
    const e = editor, { editorActor } = options, schemaTypes = editorActor.getSnapshot().context.schema, operationToPatches = createOperationToPatches(schemaTypes), withObjectKeys = createWithObjectKeys(editorActor, schemaTypes), withSchemaTypes = createWithSchemaTypes({
        editorActor,
        schemaTypes
    }), withPatches = createWithPatches({
        editorActor,
        patchFunctions: operationToPatches,
        schemaTypes,
        subscriptions: options.subscriptions
    }), withMaxBlocks = createWithMaxBlocks(editorActor), withUndoRedo = createWithUndoRedo({
        editorActor,
        blockSchemaType: schemaTypes.block,
        subscriptions: options.subscriptions
    }), withPortableTextMarkModel = createWithPortableTextMarkModel(editorActor, schemaTypes), withPortableTextBlockStyle = createWithPortableTextBlockStyle(editorActor, schemaTypes), withPlaceholderBlock = createWithPlaceholderBlock(editorActor), withUtils = createWithUtils({
        editorActor,
        schemaTypes
    }), withPortableTextSelections = createWithPortableTextSelections(editorActor, schemaTypes);
    return createWithEventListeners(editorActor, options.subscriptions)(withSchemaTypes(withObjectKeys(withPortableTextMarkModel(withPortableTextBlockStyle(withPlaceholderBlock(withUtils(withMaxBlocks(withUndoRedo(withPatches(withPortableTextSelections(e)))))))))));
}, debug$7 = debugWithName("component:PortableTextEditor:SlateContainer"), slateEditors = /* @__PURE__ */ new WeakMap();
function createSlateEditor(config) {
    const existingSlateEditor = slateEditors.get(config.editorActor);
    if (existingSlateEditor) return debug$7("Reusing existing Slate editor instance", config.editorActor.id), existingSlateEditor;
    debug$7("Creating new Slate editor instance", config.editorActor.id);
    const unsubscriptions = [], subscriptions = [], instance = withPlugins((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withReact"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEditor"])()), {
        editorActor: config.editorActor,
        subscriptions
    });
    KEY_TO_VALUE_ELEMENT.set(instance, {}), KEY_TO_SLATE_ELEMENT.set(instance, {});
    for (const subscription of subscriptions)unsubscriptions.push(subscription());
    const initialValue = [
        instance.pteCreateTextBlock({
            decorators: []
        })
    ], slateEditor = {
        instance,
        initialValue
    };
    return slateEditors.set(config.editorActor, slateEditor), slateEditor;
}
var __defProp$e = Object.defineProperty, __defProps$8 = Object.defineProperties, __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$e = Object.getOwnPropertySymbols, __hasOwnProp$e = Object.prototype.hasOwnProperty, __propIsEnum$e = Object.prototype.propertyIsEnumerable, __defNormalProp$e = (obj, key, value)=>key in obj ? __defProp$e(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$e = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$e.call(b, prop) && __defNormalProp$e(a, prop, b[prop]);
    if (__getOwnPropSymbols$e) for (var prop of __getOwnPropSymbols$e(b))__propIsEnum$e.call(b, prop) && __defNormalProp$e(a, prop, b[prop]);
    return a;
}, __spreadProps$8 = (a, b)=>__defProps$8(a, __getOwnPropDescs$8(b));
const toggleListItemActionImplementation = ({ context, action })=>{
    isListItemActive({
        editor: action.editor,
        listItem: action.listItem
    }) ? removeListItemActionImplementation({
        context,
        action: __spreadProps$8(__spreadValues$e({}, action), {
            type: "list item.remove"
        })
    }) : addListItemActionImplementation({
        context,
        action: __spreadProps$8(__spreadValues$e({}, action), {
            type: "list item.add"
        })
    });
}, removeListItemActionImplementation = ({ context, action })=>{
    if (!action.editor.selection) return;
    const guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
            at: action.editor.selection,
            match: (node)=>guards.isListBlock(node)
        })
    ];
    for (const [, at] of selectedBlocks)__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].unsetNodes(action.editor, [
        "listItem",
        "level"
    ], {
        at
    });
}, addListItemActionImplementation = ({ context, action })=>{
    if (!action.editor.selection) return;
    const guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
            at: action.editor.selection,
            match: (node)=>guards.isTextBlock(node)
        })
    ];
    for (const [, at] of selectedBlocks)__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(action.editor, {
        level: 1,
        listItem: action.listItem
    }, {
        at
    });
};
function isListItemActive({ editor, listItem }) {
    if (!editor.selection) return !1;
    const selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection,
            match: (node)=>editor.isTextBlock(node)
        })
    ];
    return selectedBlocks.length > 0 ? selectedBlocks.every(([node])=>editor.isListBlock(node) && node.listItem === listItem) : !1;
}
var __defProp$d = Object.defineProperty, __defProps$7 = Object.defineProperties, __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$d = Object.getOwnPropertySymbols, __hasOwnProp$d = Object.prototype.hasOwnProperty, __propIsEnum$d = Object.prototype.propertyIsEnumerable, __defNormalProp$d = (obj, key, value)=>key in obj ? __defProp$d(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$d = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$d.call(b, prop) && __defNormalProp$d(a, prop, b[prop]);
    if (__getOwnPropSymbols$d) for (var prop of __getOwnPropSymbols$d(b))__propIsEnum$d.call(b, prop) && __defNormalProp$d(a, prop, b[prop]);
    return a;
}, __spreadProps$7 = (a, b)=>__defProps$7(a, __getOwnPropDescs$7(b));
const toggleStyleActionImplementation = ({ context, action })=>{
    isStyleActive({
        editor: action.editor,
        style: action.style
    }) ? removeStyleActionImplementation({
        context,
        action: __spreadProps$7(__spreadValues$d({}, action), {
            type: "style.remove"
        })
    }) : addStyleActionImplementation({
        context,
        action: __spreadProps$7(__spreadValues$d({}, action), {
            type: "style.add"
        })
    });
}, removeStyleActionImplementation = ({ context, action })=>{
    if (!action.editor.selection) return;
    const defaultStyle = context.schema.styles[0].value, guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
            at: action.editor.selection,
            match: (node)=>guards.isTextBlock(node)
        })
    ];
    for (const [, at] of selectedBlocks)__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(action.editor, {
        style: defaultStyle
    }, {
        at
    });
}, addStyleActionImplementation = ({ context, action })=>{
    if (!action.editor.selection) return;
    const guards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selection$2d$collapsed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGuards"])(context), selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
            at: action.editor.selection,
            match: (node)=>guards.isTextBlock(node)
        })
    ];
    for (const [, at] of selectedBlocks)__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(action.editor, {
        style: action.style
    }, {
        at
    });
};
function isStyleActive({ editor, style }) {
    if (!editor.selection) return !1;
    const selectedBlocks = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection,
            match: (node)=>editor.isTextBlock(node)
        })
    ];
    return selectedBlocks.length > 0 ? selectedBlocks.every(([node])=>node.style === style) : !1;
}
var __defProp$c = Object.defineProperty, __getOwnPropSymbols$c = Object.getOwnPropertySymbols, __hasOwnProp$c = Object.prototype.hasOwnProperty, __propIsEnum$c = Object.prototype.propertyIsEnumerable, __defNormalProp$c = (obj, key, value)=>key in obj ? __defProp$c(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$c = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$c.call(b, prop) && __defNormalProp$c(a, prop, b[prop]);
    if (__getOwnPropSymbols$c) for (var prop of __getOwnPropSymbols$c(b))__propIsEnum$c.call(b, prop) && __defNormalProp$c(a, prop, b[prop]);
    return a;
};
const debug$6 = debugWithName("API:editable");
function createEditableAPI(editor, editorActor) {
    const types = editorActor.getSnapshot().context.schema;
    return {
        focus: ()=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "focus"
                },
                editor
            });
        },
        blur: ()=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "blur"
                },
                editor
            });
        },
        toggleMark: (mark)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "decorator.toggle",
                    decorator: mark
                },
                editor
            });
        },
        toggleList: (listItem)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "list item.toggle",
                    listItem
                },
                editor
            });
        },
        toggleBlockStyle: (style)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "style.toggle",
                    style
                },
                editor
            });
        },
        isMarkActive: (mark)=>{
            try {
                return isDecoratorActive({
                    editor,
                    decorator: mark
                });
            } catch (err) {
                return console.warn(err), !1;
            }
        },
        marks: ()=>__spreadValues$c({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(editor) || {}).marks || [],
        undo: ()=>editor.undo(),
        redo: ()=>editor.redo(),
        select: (selection)=>{
            const slateSelection = toSlateRange(selection, editor);
            slateSelection ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, slateSelection) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor), editor.onChange();
        },
        focusBlock: ()=>{
            if (editor.selection) {
                const block = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].descendant(editor, editor.selection.focus.path.slice(0, 1));
                if (block) return fromSlateValue([
                    block
                ], types.block.name, KEY_TO_VALUE_ELEMENT.get(editor))[0];
            }
        },
        focusChild: ()=>{
            if (editor.selection) {
                const block = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].descendant(editor, editor.selection.focus.path.slice(0, 1));
                if (block && editor.isTextBlock(block)) return fromSlateValue([
                    block
                ], types.block.name, KEY_TO_VALUE_ELEMENT.get(editor))[0].children[editor.selection.focus.path[1]];
            }
        },
        insertChild: (type, value)=>{
            var _a, _b, _c;
            if (type.name !== types.span.name) return editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "insert.inline object",
                    inlineObject: {
                        name: type.name,
                        value
                    }
                },
                editor
            }), (_b = (_a = toPortableTextRange(fromSlateValue(editor.children, types.block.name, KEY_TO_VALUE_ELEMENT.get(editor)), editor.selection, types)) == null ? void 0 : _a.focus.path) != null ? _b : [];
            if (!editor.selection) throw new Error("The editor has no selection");
            const [focusBlock] = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                at: editor.selection.focus.path.slice(0, 1),
                match: (n)=>n._type === types.block.name
            }))[0] || [
                void 0
            ];
            if (!focusBlock) throw new Error("No focused text block");
            if (type.name !== types.span.name && !types.inlineObjects.some((t)=>t.name === type.name)) throw new Error("This type cannot be inserted as a child to a text block");
            const child = toSlateValue([
                {
                    _key: editorActor.getSnapshot().context.keyGenerator(),
                    _type: types.block.name,
                    children: [
                        __spreadValues$c({
                            _key: editorActor.getSnapshot().context.keyGenerator(),
                            _type: type.name
                        }, value || {})
                    ]
                }
            ], {
                schemaTypes: editorActor.getSnapshot().context.schema
            })[0].children[0], focusChildPath = editor.selection.focus.path.slice(0, 2), isSpanNode = child._type === types.span.name, focusNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].get(editor, focusChildPath);
            return isSpanNode && focusNode._type !== types.span.name && (debug$6("Inserting span child next to inline object child, moving selection + 1"), editor.move({
                distance: 1,
                unit: "character"
            })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, child, {
                select: !0,
                at: editor.selection
            }), editor.onChange(), ((_c = toPortableTextRange(fromSlateValue(editor.children, types.block.name, KEY_TO_VALUE_ELEMENT.get(editor)), editor.selection, types)) == null ? void 0 : _c.focus.path) || [];
        },
        insertBlock: (type, value)=>{
            var _a, _b;
            return editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "insert.block object",
                    blockObject: {
                        name: type.name,
                        value
                    },
                    placement: "auto"
                },
                editor
            }), (_b = (_a = toPortableTextRange(fromSlateValue(editor.children, types.block.name, KEY_TO_VALUE_ELEMENT.get(editor)), editor.selection, types)) == null ? void 0 : _a.focus.path) != null ? _b : [];
        },
        hasBlockStyle: (style)=>{
            try {
                return isStyleActive({
                    editor,
                    style
                });
            } catch (e) {
                return !1;
            }
        },
        hasListStyle: (listItem)=>{
            try {
                return isListItemActive({
                    editor,
                    listItem
                });
            } catch (e) {
                return !1;
            }
        },
        isVoid: (element)=>![
                types.block.name,
                types.span.name
            ].includes(element._type),
        findByPath: (path)=>{
            const slatePath = toSlateRange({
                focus: {
                    path,
                    offset: 0
                },
                anchor: {
                    path,
                    offset: 0
                }
            }, editor);
            if (slatePath) {
                const [block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, slatePath.focus.path.slice(0, 1));
                if (block && blockPath && typeof block._key == "string") {
                    if (path.length === 1 && slatePath.focus.path.length === 1) return [
                        fromSlateValue([
                            block
                        ], types.block.name)[0],
                        [
                            {
                                _key: block._key
                            }
                        ]
                    ];
                    const ptBlock = fromSlateValue([
                        block
                    ], types.block.name, KEY_TO_VALUE_ELEMENT.get(editor))[0];
                    if (editor.isTextBlock(ptBlock)) {
                        const ptChild = ptBlock.children[slatePath.focus.path[1]];
                        if (ptChild) return [
                            ptChild,
                            [
                                {
                                    _key: block._key
                                },
                                "children",
                                {
                                    _key: ptChild._key
                                }
                            ]
                        ];
                    }
                }
            }
            return [
                void 0,
                void 0
            ];
        },
        findDOMNode: (element)=>{
            let node;
            try {
                const [item] = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                    at: [],
                    match: (n)=>n._key === element._key
                }) || [])[0] || [
                    void 0
                ];
                node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMNode(editor, item);
            } catch (e) {}
            return node;
        },
        activeAnnotations: ()=>{
            var _a;
            if (!editor.selection || editor.selection.focus.path.length < 2) return [];
            try {
                const activeAnnotations = [], spans = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                    at: editor.selection,
                    match: (node)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(node) && node.marks !== void 0 && Array.isArray(node.marks) && node.marks.length > 0
                });
                for (const [span, path] of spans){
                    const [block] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, path, {
                        depth: 1
                    });
                    editor.isTextBlock(block) && ((_a = block.markDefs) == null || _a.forEach((def)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(span) && span.marks && Array.isArray(span.marks) && span.marks.includes(def._key) && activeAnnotations.push(def);
                    }));
                }
                return activeAnnotations;
            } catch (e) {
                return [];
            }
        },
        isAnnotationActive: (annotationType)=>isAnnotationActive({
                editor,
                annotation: {
                    name: annotationType
                }
            }),
        addAnnotation: (type, value)=>{
            let paths;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                paths = addAnnotationActionImplementation({
                    context: {
                        keyGenerator: editorActor.getSnapshot().context.keyGenerator,
                        schema: types
                    },
                    action: {
                        type: "annotation.add",
                        annotation: {
                            name: type.name,
                            value: value != null ? value : {}
                        },
                        editor
                    }
                });
            }), editor.onChange(), paths;
        },
        delete: (selection, options)=>{
            if (selection) {
                const range = toSlateRange(selection, editor);
                if (!(range && range.anchor.path.length > 0 && range.focus.path.length > 0)) throw new Error("Invalid range");
                if (range) {
                    if (!(options != null && options.mode) || (options == null ? void 0 : options.mode) === "selected") {
                        debug$6("Deleting content in selection"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].delete(editor, {
                            at: range,
                            hanging: !0,
                            voids: !0
                        }), editor.onChange();
                        return;
                    }
                    (options == null ? void 0 : options.mode) === "blocks" && (debug$6("Deleting blocks touched by selection"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
                        at: range,
                        voids: !0,
                        match: (node)=>editor.isTextBlock(node) || !editor.isTextBlock(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node)
                    })), (options == null ? void 0 : options.mode) === "children" && (debug$6("Deleting children touched by selection"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
                        at: range,
                        voids: !0,
                        match: (node)=>node._type === types.span.name || // Text children
                            !editor.isTextBlock(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node)
                    })), editor.children.length === 0 && (editor.children = [
                        editor.pteCreateTextBlock({
                            decorators: []
                        })
                    ]), editor.onChange();
                }
            }
        },
        removeAnnotation: (type)=>{
            editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "annotation.remove",
                    annotation: {
                        name: type.name
                    }
                },
                editor
            });
        },
        getSelection: ()=>{
            let ptRange = null;
            if (editor.selection) {
                const existing = SLATE_TO_PORTABLE_TEXT_RANGE.get(editor.selection);
                if (existing) return existing;
                ptRange = toPortableTextRange(fromSlateValue(editor.children, types.block.name, KEY_TO_VALUE_ELEMENT.get(editor)), editor.selection, types), SLATE_TO_PORTABLE_TEXT_RANGE.set(editor.selection, ptRange);
            }
            return ptRange;
        },
        getValue: ()=>fromSlateValue(editor.children, types.block.name, KEY_TO_VALUE_ELEMENT.get(editor)),
        isCollapsedSelection: ()=>!!editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection),
        isExpandedSelection: ()=>!!editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(editor.selection),
        insertBreak: ()=>{
            editor.insertBreak(), editor.onChange();
        },
        getFragment: ()=>fromSlateValue(editor.getFragment(), types.block.name),
        isSelectionsOverlapping: (selectionA, selectionB)=>{
            const rangeA = toSlateRange(selectionA, editor), rangeB = toSlateRange(selectionB, editor);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isRange(rangeA) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isRange(rangeB) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].includes(rangeA, rangeB);
        }
    };
}
function isAnnotationActive({ editor, annotation }) {
    if (!editor.selection || editor.selection.focus.path.length < 2) return !1;
    try {
        const spans = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
                at: editor.selection,
                match: (node)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(node)
            })
        ];
        if (spans.length === 0 || spans.some(([span])=>{
            var _a;
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(span) || !span.marks || ((_a = span.marks) == null ? void 0 : _a.length) === 0;
        })) return !1;
        const selectionMarkDefs = spans.reduce((accMarkDefs, [, path])=>{
            const [block] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, path, {
                depth: 1
            });
            return editor.isTextBlock(block) && block.markDefs ? [
                ...accMarkDefs,
                ...block.markDefs
            ] : accMarkDefs;
        }, []);
        return spans.every(([span])=>{
            var _a;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPortableTextSpan"])(span)) return !1;
            const spanMarkDefs = (_a = span.marks) == null ? void 0 : _a.map((markKey)=>{
                var _a2;
                return (_a2 = selectionMarkDefs.find((def)=>(def == null ? void 0 : def._key) === markKey)) == null ? void 0 : _a2._type;
            });
            return spanMarkDefs == null ? void 0 : spanMarkDefs.includes(annotation.name);
        });
    } catch (e) {
        return !1;
    }
}
const addAnnotationActionImplementation = ({ context, action })=>{
    var _a, _b;
    const editor = action.editor, { selection: originalSelection } = editor;
    let paths;
    if (originalSelection && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(originalSelection) && (editor.pteExpandToWord(), editor.onChange()), editor.selection)) {
        let spanPath, markDefPath;
        const markDefPaths = [];
        if (!editor.selection) return;
        const selectedBlocks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection,
            match: (node)=>editor.isTextBlock(node),
            reverse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isBackward(editor.selection)
        });
        for (const [block, blockPath] of selectedBlocks){
            if (block.children.length === 0 || block.children.length === 1 && block.children[0].text === "") continue;
            const annotationKey = context.keyGenerator(), markDefs = (_a = block.markDefs) != null ? _a : [];
            markDefs.find((markDef)=>markDef._type === action.annotation.name && markDef._key === annotationKey) === void 0 && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                markDefs: [
                    ...markDefs,
                    __spreadValues$c({
                        _type: action.annotation.name,
                        _key: annotationKey
                    }, action.annotation.value)
                ]
            }, {
                at: blockPath
            }), markDefPath = [
                {
                    _key: block._key
                },
                "markDefs",
                {
                    _key: annotationKey
                }
            ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isBackward(editor.selection) ? markDefPaths.unshift(markDefPath) : markDefPaths.push(markDefPath)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {}, {
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText,
                split: !0
            });
            const children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath);
            for (const [span, path] of children){
                if (!editor.isTextSpan(span) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].includes(editor.selection, path)) continue;
                const marks = (_b = span.marks) != null ? _b : [], existingSameTypeAnnotations = marks.filter((mark)=>markDefs.some((markDef)=>markDef._key === mark && markDef._type === action.annotation.name));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    marks: [
                        ...marks.filter((mark)=>!existingSameTypeAnnotations.includes(mark)),
                        annotationKey
                    ]
                }, {
                    at: path
                }), spanPath = [
                    {
                        _key: block._key
                    },
                    "children",
                    {
                        _key: span._key
                    }
                ];
            }
        }
        markDefPath && spanPath && (paths = {
            markDefPath,
            markDefPaths,
            spanPath
        });
    }
    return paths;
}, removeAnnotationActionImplementation = ({ action })=>{
    var _a, _b, _c, _d, _e, _f, _g;
    const editor = action.editor;
    if (debug$6("Removing annotation", action.annotation.name), !!editor.selection) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection)) {
        const [block, blockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, editor.selection, {
            depth: 1
        });
        if (!editor.isTextBlock(block)) return;
        const potentialAnnotations = ((_a = block.markDefs) != null ? _a : []).filter((markDef)=>markDef._type === action.annotation.name), [selectedChild, selectedChildPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, editor.selection, {
            depth: 2
        });
        if (!editor.isTextSpan(selectedChild)) return;
        const annotationToRemove = (_b = selectedChild.marks) == null ? void 0 : _b.find((mark)=>potentialAnnotations.some((markDef)=>markDef._key === mark));
        if (!annotationToRemove) return;
        const previousSpansWithSameAnnotation = [];
        for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath, {
            reverse: !0
        }))if (editor.isTextSpan(child) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].isBefore(childPath, selectedChildPath)) if ((_c = child.marks) != null && _c.includes(annotationToRemove)) previousSpansWithSameAnnotation.push([
            child,
            childPath
        ]);
        else break;
        const nextSpansWithSameAnnotation = [];
        for (const [child, childPath] of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath))if (editor.isTextSpan(child) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].isAfter(childPath, selectedChildPath)) if ((_d = child.marks) != null && _d.includes(annotationToRemove)) nextSpansWithSameAnnotation.push([
            child,
            childPath
        ]);
        else break;
        for (const [child, childPath] of [
            ...previousSpansWithSameAnnotation,
            [
                selectedChild,
                selectedChildPath
            ],
            ...nextSpansWithSameAnnotation
        ])__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
            marks: (_e = child.marks) == null ? void 0 : _e.filter((mark)=>mark !== annotationToRemove)
        }, {
            at: childPath
        });
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {}, {
            match: (node)=>editor.isTextSpan(node),
            split: !0,
            hanging: !0
        });
        const blocks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection,
            match: (node)=>editor.isTextBlock(node)
        });
        for (const [block, blockPath] of blocks){
            const children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, blockPath);
            for (const [child, childPath] of children){
                if (!editor.isTextSpan(child) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].includes(editor.selection, childPath)) continue;
                const markDefs = (_f = block.markDefs) != null ? _f : [], marks = (_g = child.marks) != null ? _g : [], marksWithoutAnnotation = marks.filter((mark)=>{
                    const markDef = markDefs.find((markDef2)=>markDef2._key === mark);
                    return (markDef == null ? void 0 : markDef._type) !== action.annotation.name;
                });
                marksWithoutAnnotation.length !== marks.length && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                    marks: marksWithoutAnnotation
                }, {
                    at: childPath
                });
            }
        }
    }
}, toggleAnnotationActionImplementation = ({ context, action })=>{
    if (isAnnotationActive({
        editor: action.editor,
        annotation: {
            name: action.annotation.name
        }
    })) removeAnnotationActionImplementation({
        context,
        action: {
            type: "annotation.remove",
            annotation: action.annotation,
            editor: action.editor
        }
    });
    else return addAnnotationActionImplementation({
        context,
        action: {
            type: "annotation.add",
            annotation: action.annotation,
            editor: action.editor
        }
    });
};
function insertBlock({ block, placement, editor, schema }) {
    var _a;
    if (editor.selection) {
        const [focusBlock, focusBlockPath] = (_a = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            at: editor.selection.focus.path.slice(0, 1),
            match: (n)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isEditor(n)
        }))[0]) != null ? _a : [
            void 0,
            void 0
        ];
        if (placement === "after") {
            const nextPath = [
                focusBlockPath[0] + 1
            ];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, block, {
                at: nextPath
            }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, {
                anchor: {
                    path: [
                        nextPath[0],
                        0
                    ],
                    offset: 0
                },
                focus: {
                    path: [
                        nextPath[0],
                        0
                    ],
                    offset: 0
                }
            });
        } else placement === "before" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(editor, block, {
            at: focusBlockPath
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertNode(editor, block);
        focusBlock && isEqualToEmptyEditor([
            focusBlock
        ], schema) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
            at: focusBlockPath
        });
    } else {
        const lastBlock = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
            match: (n)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isEditor(n),
            at: [],
            reverse: !0
        }))[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertNode(editor, block), lastBlock && isEqualToEmptyEditor([
            lastBlock[0]
        ], schema) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
            at: lastBlock[1]
        });
    }
}
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
const insertBlockObjectActionImplementation = ({ context, action })=>{
    const block = toSlateValue([
        __spreadValues$b({
            _key: context.keyGenerator(),
            _type: action.blockObject.name
        }, action.blockObject.value ? action.blockObject.value : {})
    ], {
        schemaTypes: context.schema
    })[0];
    insertBlock({
        block,
        placement: action.placement,
        editor: action.editor,
        schema: context.schema
    });
};
var __defProp$a = Object.defineProperty, __defProps$6 = Object.defineProperties, __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$a = Object.getOwnPropertySymbols, __hasOwnProp$a = Object.prototype.hasOwnProperty, __propIsEnum$a = Object.prototype.propertyIsEnumerable, __defNormalProp$a = (obj, key, value)=>key in obj ? __defProp$a(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$a = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    if (__getOwnPropSymbols$a) for (var prop of __getOwnPropSymbols$a(b))__propIsEnum$a.call(b, prop) && __defNormalProp$a(a, prop, b[prop]);
    return a;
}, __spreadProps$6 = (a, b)=>__defProps$6(a, __getOwnPropDescs$6(b));
const insertBreakActionImplementation = ({ context, action })=>{
    var _a, _b, _c, _d, _e;
    const keyGenerator = context.keyGenerator, schema = context.schema, editor = action.editor;
    if (!editor.selection) return;
    const [focusSpan] = (_a = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(editor, {
        mode: "lowest",
        at: editor.selection.focus,
        match: (n)=>editor.isTextSpan(n),
        voids: !1
    }))[0]) != null ? _a : [
        void 0
    ], focusDecorators = (_c = (_b = focusSpan == null ? void 0 : focusSpan.marks) == null ? void 0 : _b.filter((mark)=>schema.decorators.some((decorator)=>decorator.value === mark))) != null ? _c : [], focusAnnotations = (_e = (_d = focusSpan == null ? void 0 : focusSpan.marks) == null ? void 0 : _d.filter((mark)=>!schema.decorators.some((decorator)=>decorator.value === mark))) != null ? _e : [], anchorBlockPath = editor.selection.anchor.path.slice(0, 1), focusBlockPath = editor.selection.focus.path.slice(0, 1), focusBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].descendant(editor, focusBlockPath);
    if (editor.isTextBlock(focusBlock)) {
        const [start, end] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].edges(editor.selection), lastFocusBlockChild = focusBlock.children[focusBlock.children.length - 1], atTheEndOfBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(start, {
            path: [
                ...focusBlockPath,
                focusBlock.children.length - 1
            ],
            offset: editor.isTextSpan(lastFocusBlockChild) ? lastFocusBlockChild.text.length : 0
        }), atTheStartOfBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(end, {
            path: [
                ...focusBlockPath,
                0
            ],
            offset: 0
        });
        if (atTheEndOfBlock && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertNode(editor, editor.pteCreateTextBlock({
                decorators: [],
                listItem: focusBlock.listItem,
                level: focusBlock.level
            }));
            return;
        }
        if (atTheStartOfBlock && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertNode(editor, editor.pteCreateTextBlock({
                decorators: focusAnnotations.length === 0 ? focusDecorators : [],
                listItem: focusBlock.listItem,
                level: focusBlock.level
            }));
            const [nextBlockPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].next(focusBlockPath);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, {
                anchor: {
                    path: [
                        nextBlockPath,
                        0
                    ],
                    offset: 0
                },
                focus: {
                    path: [
                        nextBlockPath,
                        0
                    ],
                    offset: 0
                }
            });
            return;
        }
        const selectionAcrossBlocks = anchorBlockPath[0] !== focusBlockPath[0];
        if (!atTheStartOfBlock && !atTheEndOfBlock && !selectionAcrossBlocks) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(editor, ()=>{
                var _a2;
                if (!editor.selection) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].splitNodes(editor, {
                    at: editor.selection
                });
                const [nextNode, nextNodePath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].next(focusBlockPath), {
                    depth: 1
                });
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setSelection(editor, {
                    anchor: {
                        path: [
                            ...nextNodePath,
                            0
                        ],
                        offset: 0
                    },
                    focus: {
                        path: [
                            ...nextNodePath,
                            0
                        ],
                        offset: 0
                    }
                }), editor.isTextBlock(nextNode) && nextNode.markDefs && nextNode.markDefs.length > 0) {
                    const newMarkDefKeys = /* @__PURE__ */ new Map(), prevNodeSpans = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, focusBlockPath)).map((entry)=>entry[0]).filter((node)=>editor.isTextSpan(node)), children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].children(editor, nextNodePath);
                    for (const [child, childPath] of children){
                        if (!editor.isTextSpan(child)) continue;
                        const marks = (_a2 = child.marks) != null ? _a2 : [];
                        for (const mark of marks)schema.decorators.some((decorator)=>decorator.value === mark) || prevNodeSpans.some((prevNodeSpan)=>{
                            var _a3;
                            return (_a3 = prevNodeSpan.marks) == null ? void 0 : _a3.includes(mark);
                        }) && !newMarkDefKeys.has(mark) && newMarkDefKeys.set(mark, keyGenerator());
                        const newMarks = marks.map((mark)=>{
                            var _a3;
                            return (_a3 = newMarkDefKeys.get(mark)) != null ? _a3 : mark;
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(marks, newMarks) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                            marks: newMarks
                        }, {
                            at: childPath
                        });
                    }
                    const newMarkDefs = nextNode.markDefs.map((markDef)=>{
                        var _a3;
                        return __spreadProps$6(__spreadValues$a({}, markDef), {
                            _key: (_a3 = newMarkDefKeys.get(markDef._key)) != null ? _a3 : markDef._key
                        });
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextNode.markDefs, newMarkDefs) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                        markDefs: newMarkDefs
                    }, {
                        at: nextNodePath,
                        match: (node)=>editor.isTextBlock(node)
                    });
                }
            }), editor.onChange();
            return;
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].splitNodes(editor, {
        always: !0
    });
}, insertSoftBreakActionImplementation = ({ context, action })=>{
    insertBreakActionImplementation({
        context,
        action: __spreadProps$6(__spreadValues$a({}, action), {
            type: "insert.break"
        })
    });
};
var __defProp$9 = Object.defineProperty, __getOwnPropSymbols$9 = Object.getOwnPropertySymbols, __hasOwnProp$9 = Object.prototype.hasOwnProperty, __propIsEnum$9 = Object.prototype.propertyIsEnumerable, __defNormalProp$9 = (obj, key, value)=>key in obj ? __defProp$9(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$9 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    if (__getOwnPropSymbols$9) for (var prop of __getOwnPropSymbols$9(b))__propIsEnum$9.call(b, prop) && __defNormalProp$9(a, prop, b[prop]);
    return a;
};
const insertInlineObjectActionImplementation = ({ context, action })=>{
    var _a, _b;
    if (!context.schema.inlineObjects.some((inlineObject)=>inlineObject.name === action.inlineObject.name)) {
        console.error("Unable to insert unknown inline object");
        return;
    }
    if (!action.editor.selection) {
        console.error("Unable to insert inline object without selection");
        return;
    }
    const [focusTextBlock] = (_a = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
        at: action.editor.selection.focus.path,
        match: (node)=>action.editor.isTextBlock(node)
    })).at(0)) != null ? _a : [
        void 0,
        void 0
    ];
    if (!focusTextBlock) {
        console.error("Unable to perform action without focus text block");
        return;
    }
    const block = toSlateValue([
        {
            _type: context.schema.block.name,
            _key: context.keyGenerator(),
            children: [
                __spreadValues$9({
                    _type: action.inlineObject.name,
                    _key: context.keyGenerator()
                }, (_b = action.inlineObject.value) != null ? _b : {})
            ]
        }
    ], {
        schemaTypes: context.schema
    }).at(0), child = block == null ? void 0 : block.children.at(0);
    if (!child) {
        console.error("Unable to insert inline object");
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(action.editor, child);
};
var __defProp$8 = Object.defineProperty, __getOwnPropSymbols$8 = Object.getOwnPropertySymbols, __hasOwnProp$8 = Object.prototype.hasOwnProperty, __propIsEnum$8 = Object.prototype.propertyIsEnumerable, __defNormalProp$8 = (obj, key, value)=>key in obj ? __defProp$8(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$8 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8) for (var prop of __getOwnPropSymbols$8(b))__propIsEnum$8.call(b, prop) && __defNormalProp$8(a, prop, b[prop]);
    return a;
};
const insertSpanActionImplementation = ({ context, action })=>{
    var _a, _b, _c, _d;
    if (!action.editor.selection) {
        console.error("Unable to perform action without selection", action);
        return;
    }
    const [focusBlock, focusBlockPath] = (_a = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].nodes(action.editor, {
        at: action.editor.selection.focus.path,
        match: (node)=>action.editor.isTextBlock(node)
    }))[0]) != null ? _a : [
        void 0,
        void 0
    ];
    if (!focusBlock || !focusBlockPath) {
        console.error("Unable to perform action without focus block", action);
        return;
    }
    const markDefs = (_b = focusBlock.markDefs) != null ? _b : [], annotations = action.annotations ? action.annotations.map((annotation)=>__spreadValues$8({
            _type: annotation.name,
            _key: context.keyGenerator()
        }, annotation.value)) : void 0;
    annotations && annotations.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(action.editor, {
        markDefs: [
            ...markDefs,
            ...annotations
        ]
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(action.editor, {
        _type: "span",
        _key: context.keyGenerator(),
        text: action.text,
        marks: [
            ...(_c = annotations == null ? void 0 : annotations.map((annotation)=>annotation._key)) != null ? _c : [],
            ...(_d = action.decorators) != null ? _d : []
        ]
    });
};
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
const textBlockSetActionImplementation = ({ action })=>{
    const at = toSlateRange({
        anchor: {
            path: action.at,
            offset: 0
        },
        focus: {
            path: action.at,
            offset: 0
        }
    }, action.editor);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(action.editor, __spreadValues$7(__spreadValues$7(__spreadValues$7({}, action.style ? {
        style: action.style
    } : {}), action.listItem ? {
        listItem: action.listItem
    } : {}), action.level ? {
        level: action.level
    } : {}), {
        at
    });
}, textBlockUnsetActionImplementation = ({ action })=>{
    const at = toSlateRange({
        anchor: {
            path: action.at,
            offset: 0
        },
        focus: {
            path: action.at,
            offset: 0
        }
    }, action.editor);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].unsetNodes(action.editor, action.props, {
        at
    });
};
var __defProp$6 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __defNormalProp$6 = (obj, key, value)=>key in obj ? __defProp$6(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$6 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(b))__propIsEnum$6.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    return a;
}, __spreadProps$5 = (a, b)=>__defProps$5(a, __getOwnPropDescs$5(b));
const behaviorActionImplementations = {
    "annotation.add": addAnnotationActionImplementation,
    "annotation.remove": removeAnnotationActionImplementation,
    "annotation.toggle": toggleAnnotationActionImplementation,
    blur: ({ action })=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].blur(action.editor);
    },
    "decorator.add": addDecoratorActionImplementation,
    "decorator.remove": removeDecoratorActionImplementation,
    "decorator.toggle": toggleDecoratorActionImplementation,
    focus: ({ action })=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].focus(action.editor);
    },
    "delete.backward": ({ action })=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteBackward"])(action.editor, action.unit);
    },
    "delete.forward": ({ action })=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteForward"])(action.editor, action.unit);
    },
    "delete.block": ({ action })=>{
        const range = toSlateRange({
            anchor: {
                path: action.blockPath,
                offset: 0
            },
            focus: {
                path: action.blockPath,
                offset: 0
            }
        }, action.editor);
        if (!range) {
            console.error("Unable to find Slate range from selection points");
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(action.editor, {
            at: range
        });
    },
    "delete.text": ({ context, action })=>{
        const value = fromSlateValue(action.editor.children, context.schema.block.name, KEY_TO_VALUE_ELEMENT.get(action.editor)), anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockOffsetToSpanSelectionPoint"])({
            value,
            blockOffset: action.anchor
        }), focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockOffsetToSpanSelectionPoint"])({
            value,
            blockOffset: action.focus
        });
        if (!anchor || !focus) {
            console.error("Unable to find anchor or focus selection point");
            return;
        }
        const range = toSlateRange({
            anchor,
            focus
        }, action.editor);
        if (!range) {
            console.error("Unable to find Slate range from selection points");
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].delete(action.editor, {
            at: range
        });
    },
    "insert.block object": insertBlockObjectActionImplementation,
    "insert.break": insertBreakActionImplementation,
    "insert.inline object": insertInlineObjectActionImplementation,
    "insert.soft break": insertSoftBreakActionImplementation,
    "insert.span": insertSpanActionImplementation,
    "insert.text": ({ action })=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertText"])(action.editor, action.text);
    },
    "insert.text block": ({ context, action })=>{
        var _a, _b, _c, _d;
        const block = toSlateValue([
            {
                _key: context.keyGenerator(),
                _type: context.schema.block.name,
                style: (_a = context.schema.styles[0].value) != null ? _a : "normal",
                markDefs: [],
                children: (_d = (_c = (_b = action.textBlock) == null ? void 0 : _b.children) == null ? void 0 : _c.map((child)=>__spreadProps$5(__spreadValues$6({}, child), {
                        _key: context.keyGenerator()
                    }))) != null ? _d : [
                    {
                        _type: context.schema.span.name,
                        _key: context.keyGenerator(),
                        text: ""
                    }
                ]
            }
        ], {
            schemaTypes: context.schema
        })[0];
        insertBlock({
            block,
            editor: action.editor,
            schema: context.schema,
            placement: action.placement
        });
    },
    effect: ({ action })=>{
        action.effect();
    },
    "list item.add": addListItemActionImplementation,
    "list item.remove": removeListItemActionImplementation,
    "list item.toggle": toggleListItemActionImplementation,
    "move.block": ({ action })=>{
        const at = [
            toSlatePath(action.at, action.editor)[0]
        ], to = [
            toSlatePath(action.to, action.editor)[0]
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].moveNodes(action.editor, {
            at,
            to,
            mode: "highest"
        });
    },
    "move.block down": ({ action })=>{
        const at = [
            toSlatePath(action.at, action.editor)[0]
        ], to = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].next(at)[0]
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].moveNodes(action.editor, {
            at,
            to,
            mode: "highest"
        });
    },
    "move.block up": ({ action })=>{
        const at = [
            toSlatePath(action.at, action.editor)[0]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].hasPrevious(at)) return;
        const to = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].previous(at)[0]
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].moveNodes(action.editor, {
            at,
            to,
            mode: "highest"
        });
    },
    noop: ()=>{},
    select: ({ action })=>{
        const newSelection = toSlateRange(action.selection, action.editor);
        newSelection ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(action.editor, newSelection) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(action.editor);
    },
    "select.previous block": ({ action })=>{
        if (!action.editor.selection) {
            console.error("Unable to select previous block without a selection");
            return;
        }
        const blockPath = action.editor.selection.focus.path.slice(0, 1);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].hasPrevious(blockPath)) {
            console.error("There's no previous block to select");
            return;
        }
        const previousBlockPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].previous(blockPath);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(action.editor, previousBlockPath);
    },
    "select.next block": ({ action })=>{
        if (!action.editor.selection) {
            console.error("Unable to select next block without a selection");
            return;
        }
        const nextBlockPath = [
            action.editor.selection.focus.path.slice(0, 1)[0] + 1
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(action.editor, nextBlockPath);
    },
    reselect: ({ action })=>{
        const selection = action.editor.selection;
        selection && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(action.editor, __spreadValues$6({}, selection)), action.editor.selection = __spreadValues$6({}, selection));
    },
    "style.toggle": toggleStyleActionImplementation,
    "style.add": addStyleActionImplementation,
    "style.remove": removeStyleActionImplementation,
    "text block.set": textBlockSetActionImplementation,
    "text block.unset": textBlockUnsetActionImplementation
};
function performAction({ context, action }) {
    switch(action.type){
        case "delete.block":
            {
                behaviorActionImplementations["delete.block"]({
                    context,
                    action
                });
                break;
            }
        case "delete.text":
            {
                behaviorActionImplementations["delete.text"]({
                    context,
                    action
                });
                break;
            }
        case "insert.span":
            {
                behaviorActionImplementations["insert.span"]({
                    context,
                    action
                });
                break;
            }
        case "insert.text block":
            {
                behaviorActionImplementations["insert.text block"]({
                    context,
                    action
                });
                break;
            }
        case "list item.add":
            {
                behaviorActionImplementations["list item.add"]({
                    context,
                    action
                });
                break;
            }
        case "list item.remove":
            {
                behaviorActionImplementations["list item.remove"]({
                    context,
                    action
                });
                break;
            }
        case "move.block":
            {
                behaviorActionImplementations["move.block"]({
                    context,
                    action
                });
                break;
            }
        case "move.block down":
            {
                behaviorActionImplementations["move.block down"]({
                    context,
                    action
                });
                break;
            }
        case "move.block up":
            {
                behaviorActionImplementations["move.block up"]({
                    context,
                    action
                });
                break;
            }
        case "noop":
            break;
        case "effect":
            {
                behaviorActionImplementations.effect({
                    context,
                    action
                });
                break;
            }
        case "select":
            {
                behaviorActionImplementations.select({
                    context,
                    action
                });
                break;
            }
        case "select.previous block":
            {
                behaviorActionImplementations["select.previous block"]({
                    context,
                    action
                });
                break;
            }
        case "select.next block":
            {
                behaviorActionImplementations["select.next block"]({
                    context,
                    action
                });
                break;
            }
        case "reselect":
            {
                behaviorActionImplementations.reselect({
                    context,
                    action
                });
                break;
            }
        case "style.add":
            {
                behaviorActionImplementations["style.add"]({
                    context,
                    action
                });
                break;
            }
        case "style.remove":
            {
                behaviorActionImplementations["style.remove"]({
                    context,
                    action
                });
                break;
            }
        case "text block.set":
            {
                behaviorActionImplementations["text block.set"]({
                    context,
                    action
                });
                break;
            }
        case "text block.unset":
            {
                behaviorActionImplementations["text block.unset"]({
                    context,
                    action
                });
                break;
            }
        default:
            performDefaultAction({
                context,
                action
            });
    }
}
function performDefaultAction({ context, action }) {
    switch(action.type){
        case "annotation.add":
            {
                behaviorActionImplementations["annotation.add"]({
                    context,
                    action
                });
                break;
            }
        case "annotation.remove":
            {
                behaviorActionImplementations["annotation.remove"]({
                    context,
                    action
                });
                break;
            }
        case "annotation.toggle":
            {
                behaviorActionImplementations["annotation.toggle"]({
                    context,
                    action
                });
                break;
            }
        case "blur":
            {
                behaviorActionImplementations.blur({
                    context,
                    action
                });
                break;
            }
        case "decorator.add":
            {
                behaviorActionImplementations["decorator.add"]({
                    context,
                    action
                });
                break;
            }
        case "decorator.remove":
            {
                behaviorActionImplementations["decorator.remove"]({
                    context,
                    action
                });
                break;
            }
        case "decorator.toggle":
            {
                behaviorActionImplementations["decorator.toggle"]({
                    context,
                    action
                });
                break;
            }
        case "delete.backward":
            {
                behaviorActionImplementations["delete.backward"]({
                    context,
                    action
                });
                break;
            }
        case "delete.forward":
            {
                behaviorActionImplementations["delete.forward"]({
                    context,
                    action
                });
                break;
            }
        case "focus":
            {
                behaviorActionImplementations.focus({
                    context,
                    action
                });
                break;
            }
        case "insert.block object":
            {
                behaviorActionImplementations["insert.block object"]({
                    context,
                    action
                });
                break;
            }
        case "insert.inline object":
            {
                behaviorActionImplementations["insert.inline object"]({
                    context,
                    action
                });
                break;
            }
        case "insert.break":
            {
                behaviorActionImplementations["insert.break"]({
                    context,
                    action
                });
                break;
            }
        case "insert.soft break":
            {
                behaviorActionImplementations["insert.soft break"]({
                    context,
                    action
                });
                break;
            }
        case "insert.text":
            {
                behaviorActionImplementations["insert.text"]({
                    context,
                    action
                });
                break;
            }
        case "list item.toggle":
            {
                behaviorActionImplementations["list item.toggle"]({
                    context,
                    action
                });
                break;
            }
        default:
            behaviorActionImplementations["style.toggle"]({
                context,
                action
            });
    }
}
var __defProp$5 = Object.defineProperty, __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key, value)=>key in obj ? __defProp$5(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(b))__propIsEnum$5.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
};
function getActiveDecorators({ schema, slateEditorInstance }) {
    var _a, _b;
    const decorators = schema.decorators.map((decorator)=>decorator.value);
    return ((_b = __spreadValues$5({}, (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].marks(slateEditorInstance)) != null ? _a : {}).marks) != null ? _b : []).filter((mark)=>decorators.includes(mark));
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
const editorMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {
        context: {},
        events: {},
        emitted: {},
        input: {}
    },
    actions: {
        "assign behaviors": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            behaviors: ({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "update behaviors"), event.behaviors)
        }),
        "assign schema": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            schema: ({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "update schema"), event.schema)
        }),
        "emit patch event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "patch"), event)),
        "emit mutation event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation"), event)),
        "emit read only": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
            type: "read only"
        }),
        "emit editable": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
            type: "editable"
        }),
        "defer event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingEvents: ({ context, event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                    "patch",
                    "mutation"
                ]), [
                    ...context.pendingEvents,
                    event
                ])
        }),
        "emit pending events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__enqueueActions$3e$__["enqueueActions"])(({ context, enqueue })=>{
            for (const event of context.pendingEvents)enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(event));
        }),
        "emit ready": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
            type: "ready"
        }),
        "clear pending events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            pendingEvents: []
        }),
        "handle behavior event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__enqueueActions$3e$__["enqueueActions"])(({ context, event, enqueue })=>{
            var _a;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                "behavior event"
            ]);
            const defaultAction = event.behaviorEvent.type === "copy" || event.behaviorEvent.type === "key.down" || event.behaviorEvent.type === "key.up" || event.behaviorEvent.type === "paste" ? void 0 : __spreadProps$4(__spreadValues$4({}, event.behaviorEvent), {
                editor: event.editor
            }), eventBehaviors = context.behaviors.filter((behavior)=>behavior.on === event.behaviorEvent.type);
            if (eventBehaviors.length === 0) {
                if (!defaultAction) return;
                enqueue.raise({
                    type: "behavior action intends",
                    editor: event.editor,
                    actionIntends: [
                        defaultAction
                    ]
                });
                return;
            }
            const value = fromSlateValue(event.editor.children, context.schema.block.name, KEY_TO_VALUE_ELEMENT.get(event.editor)), selection = toPortableTextRange(value, event.editor.selection, context.schema), editorContext = {
                activeDecorators: getActiveDecorators({
                    schema: context.schema,
                    slateEditorInstance: event.editor
                }),
                keyGenerator: context.keyGenerator,
                schema: context.schema,
                selection,
                value
            };
            let behaviorOverwritten = !1;
            for (const eventBehavior of eventBehaviors){
                const shouldRun = eventBehavior.guard === void 0 || eventBehavior.guard({
                    context: editorContext,
                    event: event.behaviorEvent
                });
                if (!shouldRun) continue;
                const actionIntendSets = eventBehavior.actions.map((actionSet)=>actionSet({
                        context: editorContext,
                        event: event.behaviorEvent
                    }, shouldRun));
                for (const actionIntends of actionIntendSets)behaviorOverwritten = behaviorOverwritten || actionIntends.length > 0 && actionIntends.some((actionIntend)=>actionIntend.type !== "effect"), enqueue.raise({
                    type: "behavior action intends",
                    editor: event.editor,
                    actionIntends
                });
                if (behaviorOverwritten) {
                    (_a = event.nativeEvent) == null || _a.preventDefault();
                    break;
                }
            }
            if (!behaviorOverwritten) {
                if (!defaultAction) return;
                enqueue.raise({
                    type: "behavior action intends",
                    editor: event.editor,
                    actionIntends: [
                        defaultAction
                    ]
                });
            }
        })
    }
}).createMachine({
    id: "editor",
    context: ({ input })=>{
        var _a, _b;
        return {
            behaviors: (_a = input.behaviors) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coreBehaviors"],
            keyGenerator: input.keyGenerator,
            pendingEvents: [],
            schema: input.schema,
            selection: null,
            initialReadOnly: (_b = input.readOnly) != null ? _b : !1,
            maxBlocks: input.maxBlocks,
            value: input.value
        };
    },
    on: {
        unset: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        "value changed": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        "invalid value": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        error: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        selection: {
            actions: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                    selection: ({ event })=>event.selection
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
            ]
        },
        blurred: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        focused: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        loading: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
                type: "loading"
            })
        },
        patches: {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
        },
        "done loading": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])({
                type: "done loading"
            })
        },
        "update behaviors": {
            actions: "assign behaviors"
        },
        "update schema": {
            actions: "assign schema"
        },
        "update value": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                value: ({ event })=>event.value
            })
        },
        "update maxBlocks": {
            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                maxBlocks: ({ event })=>event.maxBlocks
            })
        },
        "behavior action intends": {
            actions: [
                ({ context, event })=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].withoutNormalizing(event.editor, ()=>{
                        for (const actionIntend of event.actionIntends){
                            const action = __spreadProps$4(__spreadValues$4({}, actionIntend), {
                                editor: event.editor
                            });
                            performAction({
                                context,
                                action
                            });
                        }
                    }), event.editor.onChange();
                },
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__enqueueActions$3e$__["enqueueActions"])(({ context, event, enqueue })=>{
                    event.actionIntends.some((actionIntend)=>actionIntend.type === "reselect") && enqueue.raise({
                        type: "selection",
                        selection: toPortableTextRange(event.editor.children, event.editor.selection, context.schema)
                    });
                })
            ]
        }
    },
    type: "parallel",
    states: {
        "edit mode": {
            initial: "read only",
            states: {
                "read only": {
                    initial: "determine initial edit mode",
                    states: {
                        "determine initial edit mode": {
                            on: {
                                "done syncing initial value": [
                                    {
                                        target: "#editor.edit mode.read only.read only",
                                        guard: ({ context })=>context.initialReadOnly
                                    },
                                    {
                                        target: "#editor.edit mode.editable"
                                    }
                                ]
                            }
                        },
                        "read only": {
                            on: {
                                "update readOnly": {
                                    guard: ({ event })=>!event.readOnly,
                                    target: "#editor.edit mode.editable",
                                    actions: [
                                        "emit editable"
                                    ]
                                }
                            }
                        }
                    }
                },
                editable: {
                    on: {
                        "update readOnly": {
                            guard: ({ event })=>event.readOnly,
                            target: "#editor.edit mode.read only.read only",
                            actions: [
                                "emit read only"
                            ]
                        },
                        "behavior event": {
                            actions: "handle behavior event"
                        },
                        "annotation.add": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "annotation.remove": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "annotation.toggle": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        blur: {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "decorator.*": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        focus: {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "insert.*": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "list item.*": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        },
                        "style.*": {
                            actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event })=>event)
                        }
                    }
                }
            }
        },
        setup: {
            initial: "setting up",
            states: {
                "setting up": {
                    exit: [
                        "emit ready"
                    ],
                    on: {
                        patch: {
                            actions: "defer event"
                        },
                        mutation: {
                            actions: "defer event"
                        },
                        "done syncing initial value": {
                            target: "pristine"
                        }
                    }
                },
                pristine: {
                    initial: "idle",
                    states: {
                        idle: {
                            on: {
                                normalizing: {
                                    target: "normalizing"
                                },
                                patch: {
                                    actions: "defer event",
                                    target: "#editor.setup.dirty"
                                },
                                mutation: {
                                    actions: "defer event",
                                    target: "#editor.setup.dirty"
                                }
                            }
                        },
                        normalizing: {
                            on: {
                                "done normalizing": {
                                    target: "idle"
                                },
                                patch: {
                                    actions: "defer event"
                                },
                                mutation: {
                                    actions: "defer event"
                                }
                            }
                        }
                    }
                },
                dirty: {
                    entry: [
                        "emit pending events",
                        "clear pending events"
                    ],
                    on: {
                        patch: {
                            actions: "emit patch event"
                        },
                        mutation: {
                            actions: "emit mutation event"
                        }
                    }
                }
            }
        }
    }
}), defaultKeyGenerator = ()=>randomKey(12), getByteHexTable = /* @__PURE__ */ (()=>{
    let table;
    return ()=>{
        if (table) return table;
        table = [];
        for(let i = 0; i < 256; ++i)table[i] = (i + 256).toString(16).slice(1);
        return table;
    };
})();
function whatwgRNG(length = 16) {
    const rnds8 = new Uint8Array(length);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$get$2d$random$2d$values$2d$esm$40$1$2e$0$2e$2$2f$node_modules$2f$get$2d$random$2d$values$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rnds8), rnds8;
}
function randomKey(length) {
    const table = getByteHexTable();
    return whatwgRNG(length).reduce((str, n)=>str + table[n], "").slice(0, length);
}
function createEditor(config) {
    const editorActor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$19$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$1db27a82$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__createActor$3e$__["createActor"])(editorMachine, {
        input: editorConfigToMachineInput(config)
    });
    return editorActor.start(), createEditorFromActor(editorActor);
}
function useCreateEditor(config) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    let t0;
    $[0] !== config ? (t0 = editorConfigToMachineInput(config), $[0] = config, $[1] = t0) : t0 = $[1];
    let t1;
    $[2] !== t0 ? (t1 = {
        input: t0
    }, $[2] = t0, $[3] = t1) : t1 = $[3];
    const editorActor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActorRef"])(editorMachine, t1);
    let t2, t3;
    return $[4] !== editorActor ? (t3 = createEditorFromActor(editorActor), $[4] = editorActor, $[5] = t3) : t3 = $[5], t2 = t3, t2;
}
function editorConfigToMachineInput(config) {
    var _a;
    return {
        behaviors: config.behaviors,
        keyGenerator: (_a = config.keyGenerator) != null ? _a : defaultKeyGenerator,
        maxBlocks: config.maxBlocks,
        readOnly: config.readOnly,
        schema: config.schemaDefinition ? compileSchemaDefinition(config.schemaDefinition) : createEditorSchema(config.schema.hasOwnProperty("jsonType") ? config.schema : compileType(config.schema)),
        value: config.initialValue
    };
}
function createEditorFromActor(editorActor) {
    const slateEditor = createSlateEditor({
        editorActor
    }), editable = createEditableAPI(slateEditor.instance, editorActor);
    return {
        send: (event)=>{
            editorActor.send(event);
        },
        on: (event, listener)=>editorActor.on(event, // @ts-expect-error
            listener),
        _internal: {
            editable,
            editorActor,
            slateEditor
        }
    };
}
const EditorActorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({}), PortableTextEditorSelectionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), usePortableTextEditorSelection = ()=>{
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PortableTextEditorSelectionContext);
    if (selection === void 0) throw new Error("The `usePortableTextEditorSelection` hook must be used inside the <PortableTextEditor> component's context.");
    return selection;
}, debug$5 = debugWithName("component:PortableTextEditor:SelectionProvider"), debugVerbose = debug$5.enabled && !1;
function PortableTextEditorSelectionProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6), [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0, t1;
    $[0] !== props.editorActor ? (t0 = ()=>{
        debug$5("Subscribing to selection changes");
        const subscription = props.editorActor.on("selection", (event)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                debugVerbose && debug$5("Setting selection"), setSelection(event.selection);
            });
        });
        return ()=>{
            debug$5("Unsubscribing to selection changes"), subscription.unsubscribe();
        };
    }, t1 = [
        props.editorActor
    ], $[0] = props.editorActor, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    return $[3] !== props.children || $[4] !== selection ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortableTextEditorSelectionContext.Provider, {
        value: selection,
        children: props.children
    }), $[3] = props.children, $[4] = selection, $[5] = t2) : t2 = $[5], t2;
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
}, __spreadProps$3 = (a, b)=>__defProps$3(a, __getOwnPropDescs$3(b)), __publicField = (obj, key, value)=>__defNormalProp$3(obj, typeof key != "symbol" ? key + "" : key, value);
const debug$4 = debugWithName("component:PortableTextEditor");
class PortableTextEditor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    /**
   * A lookup table for all the relevant schema types for this portable text type.
   */ /**
   * The editor instance
   */ /*
   * The editor API (currently implemented with Slate).
   */ constructor(props){
        var _a;
        super(props), __publicField(this, "change$", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$1$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subject"]()), __publicField(this, "setEditable", (editable)=>{
            this.editor._internal.editable = __spreadValues$3(__spreadValues$3({}, this.editor._internal.editable), editable);
        }), props.editor ? this.editor = props.editor : this.editor = createEditor({
            keyGenerator: (_a = props.keyGenerator) != null ? _a : defaultKeyGenerator,
            schema: props.schemaType,
            initialValue: props.value,
            maxBlocks: props.maxBlocks === void 0 ? void 0 : Number.parseInt(props.maxBlocks.toString(), 10),
            readOnly: props.readOnly
        }), this.schemaTypes = this.editor._internal.editorActor.getSnapshot().context.schema, this.editable = this.editor._internal.editable;
    }
    componentDidUpdate(prevProps) {
        var _a;
        !this.props.editor && !prevProps.editor && this.props.schemaType !== prevProps.schemaType && (this.schemaTypes = createEditorSchema(this.props.schemaType.hasOwnProperty("jsonType") ? this.props.schemaType : compileType(this.props.schemaType)), this.editor._internal.editorActor.send({
            type: "update schema",
            schema: this.schemaTypes
        })), !this.props.editor && !prevProps.editor && (this.props.readOnly !== prevProps.readOnly && this.editor._internal.editorActor.send({
            type: "update readOnly",
            readOnly: (_a = this.props.readOnly) != null ? _a : !1
        }), this.props.maxBlocks !== prevProps.maxBlocks && this.editor._internal.editorActor.send({
            type: "update maxBlocks",
            maxBlocks: this.props.maxBlocks === void 0 ? void 0 : Number.parseInt(this.props.maxBlocks.toString(), 10)
        }), this.props.value !== prevProps.value && this.editor._internal.editorActor.send({
            type: "update value",
            value: this.props.value
        }), this.props.editorRef !== prevProps.editorRef && this.props.editorRef && (this.props.editorRef.current = this));
    }
    render() {
        var _a;
        const legacyPatches = this.props.editor ? void 0 : (_a = this.props.incomingPatches$) != null ? _a : this.props.patches$;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                legacyPatches ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RoutePatchesObservableToEditorActor, {
                    editorActor: this.editor._internal.editorActor,
                    patches$: legacyPatches
                }) : null,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RouteEventsToChanges, {
                    editorActor: this.editor._internal.editorActor,
                    onChange: (change)=>{
                        this.props.editor || this.props.onChange(change), this.change$.next(change);
                    }
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Synchronizer, {
                    editorActor: this.editor._internal.editorActor,
                    slateEditor: this.editor._internal.slateEditor.instance
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorActorContext.Provider, {
                    value: this.editor._internal.editorActor,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Slate"], {
                        editor: this.editor._internal.slateEditor.instance,
                        initialValue: this.editor._internal.slateEditor.initialValue,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortableTextEditorContext.Provider, {
                            value: this,
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortableTextEditorSelectionProvider, {
                                editorActor: this.editor._internal.editorActor,
                                children: this.props.children
                            })
                        })
                    })
                })
            ]
        });
    }
}
__publicField(PortableTextEditor, "displayName", "PortableTextEditor"), __publicField(PortableTextEditor, "activeAnnotations", (editor)=>editor && editor.editable ? editor.editable.activeAnnotations() : []), __publicField(PortableTextEditor, "isAnnotationActive", (editor, annotationType)=>editor && editor.editable ? editor.editable.isAnnotationActive(annotationType) : !1), __publicField(PortableTextEditor, "addAnnotation", (editor, type, value)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.addAnnotation(type, value);
}), __publicField(PortableTextEditor, "blur", (editor)=>{
    var _a;
    debug$4("Host blurred"), (_a = editor.editable) == null || _a.blur();
}), __publicField(PortableTextEditor, "delete", (editor, selection, options)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.delete(selection, options);
}), __publicField(PortableTextEditor, "findDOMNode", (editor, element)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.findDOMNode(element);
}), __publicField(PortableTextEditor, "findByPath", (editor, path)=>{
    var _a;
    return ((_a = editor.editable) == null ? void 0 : _a.findByPath(path)) || [];
}), __publicField(PortableTextEditor, "focus", (editor)=>{
    var _a;
    debug$4("Host requesting focus"), (_a = editor.editable) == null || _a.focus();
}), __publicField(PortableTextEditor, "focusBlock", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.focusBlock();
}), __publicField(PortableTextEditor, "focusChild", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.focusChild();
}), __publicField(PortableTextEditor, "getSelection", (editor)=>editor.editable ? editor.editable.getSelection() : null), __publicField(PortableTextEditor, "getValue", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.getValue();
}), __publicField(PortableTextEditor, "hasBlockStyle", (editor, blockStyle)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.hasBlockStyle(blockStyle);
}), __publicField(PortableTextEditor, "hasListStyle", (editor, listStyle)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.hasListStyle(listStyle);
}), __publicField(PortableTextEditor, "isCollapsedSelection", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.isCollapsedSelection();
}), __publicField(PortableTextEditor, "isExpandedSelection", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.isExpandedSelection();
}), __publicField(PortableTextEditor, "isMarkActive", (editor, mark)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.isMarkActive(mark);
}), __publicField(PortableTextEditor, "insertChild", (editor, type, value)=>{
    var _a;
    return debug$4("Host inserting child"), (_a = editor.editable) == null ? void 0 : _a.insertChild(type, value);
}), __publicField(PortableTextEditor, "insertBlock", (editor, type, value)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.insertBlock(type, value);
}), __publicField(PortableTextEditor, "insertBreak", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.insertBreak();
}), __publicField(PortableTextEditor, "isVoid", (editor, element)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.isVoid(element);
}), __publicField(PortableTextEditor, "isObjectPath", (_editor, path)=>{
    if (!path || !Array.isArray(path)) return !1;
    const isChildObjectEditPath = path.length > 3 && path[1] === "children";
    return path.length > 1 && path[1] !== "children" || isChildObjectEditPath;
}), __publicField(PortableTextEditor, "marks", (editor)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.marks();
}), __publicField(PortableTextEditor, "select", (editor, selection)=>{
    var _a;
    debug$4("Host setting selection", selection), (_a = editor.editable) == null || _a.select(selection);
}), __publicField(PortableTextEditor, "removeAnnotation", (editor, type)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.removeAnnotation(type);
}), __publicField(PortableTextEditor, "toggleBlockStyle", (editor, blockStyle)=>{
    var _a;
    return debug$4("Host is toggling block style"), (_a = editor.editable) == null ? void 0 : _a.toggleBlockStyle(blockStyle);
}), __publicField(PortableTextEditor, "toggleList", (editor, listStyle)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.toggleList(listStyle);
}), __publicField(PortableTextEditor, "toggleMark", (editor, mark)=>{
    var _a;
    debug$4("Host toggling mark", mark), (_a = editor.editable) == null || _a.toggleMark(mark);
}), __publicField(PortableTextEditor, "getFragment", (editor)=>{
    var _a;
    return debug$4("Host getting fragment"), (_a = editor.editable) == null ? void 0 : _a.getFragment();
}), __publicField(PortableTextEditor, "undo", (editor)=>{
    var _a;
    debug$4("Host undoing"), (_a = editor.editable) == null || _a.undo();
}), __publicField(PortableTextEditor, "redo", (editor)=>{
    var _a;
    debug$4("Host redoing"), (_a = editor.editable) == null || _a.redo();
}), __publicField(PortableTextEditor, "isSelectionsOverlapping", (editor, selectionA, selectionB)=>{
    var _a;
    return (_a = editor.editable) == null ? void 0 : _a.isSelectionsOverlapping(selectionA, selectionB);
});
function RoutePatchesObservableToEditorActor(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    let t0, t1;
    return $[0] !== props.editorActor || $[1] !== props.patches$ ? (t0 = ()=>{
        const subscription = props.patches$.subscribe((payload)=>{
            props.editorActor.send(__spreadValues$3({
                type: "patches"
            }, payload));
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, t1 = [
        props.editorActor,
        props.patches$
    ], $[0] = props.editorActor, $[1] = props.patches$, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
}
function RouteEventsToChanges(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    let t0;
    $[0] !== props ? (t0 = (change)=>props.onChange(change), $[0] = props, $[1] = t0) : t0 = $[1];
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t0);
    let t1, t2;
    return $[2] !== handleChange || $[3] !== props.editorActor ? (t1 = ()=>{
        debug$4("Subscribing to editor changes");
        const sub = props.editorActor.on("*", (event)=>{
            bb5: switch(event.type){
                case "blurred":
                    {
                        handleChange({
                            type: "blur",
                            event: event.event
                        });
                        break bb5;
                    }
                case "patch":
                    {
                        handleChange(event);
                        break bb5;
                    }
                case "loading":
                    {
                        handleChange({
                            type: "loading",
                            isLoading: !0
                        });
                        break bb5;
                    }
                case "done loading":
                    {
                        handleChange({
                            type: "loading",
                            isLoading: !1
                        });
                        break bb5;
                    }
                case "focused":
                    {
                        handleChange({
                            type: "focus",
                            event: event.event
                        });
                        break bb5;
                    }
                case "value changed":
                    {
                        handleChange({
                            type: "value",
                            value: event.value
                        });
                        break bb5;
                    }
                case "invalid value":
                    {
                        handleChange({
                            type: "invalidValue",
                            resolution: event.resolution,
                            value: event.value
                        });
                        break bb5;
                    }
                case "error":
                    {
                        handleChange(__spreadProps$3(__spreadValues$3({}, event), {
                            level: "warning"
                        }));
                        break bb5;
                    }
                case "annotation.add":
                case "annotation.remove":
                case "annotation.toggle":
                case "blur":
                case "decorator.add":
                case "decorator.remove":
                case "decorator.toggle":
                case "focus":
                case "insert.block object":
                case "insert.inline object":
                case "list item.toggle":
                case "style.toggle":
                case "patches":
                case "editable":
                case "read only":
                    break bb5;
                default:
                    handleChange(event);
            }
        });
        return ()=>{
            debug$4("Unsubscribing to changes"), sub.unsubscribe();
        };
    }, t2 = [
        props.editorActor,
        handleChange
    ], $[2] = handleChange, $[3] = props.editorActor, $[4] = t1, $[5] = t2) : (t1 = $[4], t2 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2), null;
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
const debug$3 = debugWithName("components:Leaf"), EMPTY_MARKS = [], Leaf = (props)=>{
    const { editorActor, attributes, children, leaf, schemaTypes, renderChild, renderDecorator, renderAnnotation } = props, spanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), portableTextEditor = usePortableTextEditor(), blockSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSelected"])(), [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), block = children.props.parent, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo[path]": ()=>block ? [
                {
                    _key: block == null ? void 0 : block._key
                },
                "children",
                {
                    _key: leaf._key
                }
            ] : []
    }["Leaf.useMemo[path]"], [
        block,
        leaf._key
    ]), decoratorValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo[decoratorValues]": ()=>schemaTypes.decorators.map({
                "Leaf.useMemo[decoratorValues]": (dec)=>dec.value
            }["Leaf.useMemo[decoratorValues]"])
    }["Leaf.useMemo[decoratorValues]"], [
        schemaTypes.decorators
    ]), marks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo[marks]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((leaf.marks || EMPTY_MARKS).filter({
                "Leaf.useMemo[marks]": (mark)=>decoratorValues.includes(mark)
            }["Leaf.useMemo[marks]"]))
    }["Leaf.useMemo[marks]"], [
        decoratorValues,
        leaf.marks
    ]), annotationMarks = Array.isArray(leaf.marks) ? leaf.marks : EMPTY_MARKS, annotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo[annotations]": ()=>annotationMarks.map({
                "Leaf.useMemo[annotations]": (mark_0)=>{
                    var _a;
                    return !decoratorValues.includes(mark_0) && ((_a = block == null ? void 0 : block.markDefs) == null ? void 0 : _a.find({
                        "Leaf.useMemo[annotations]": (def)=>def._key === mark_0
                    }["Leaf.useMemo[annotations]"]));
                }
            }["Leaf.useMemo[annotations]"]).filter(Boolean)
    }["Leaf.useMemo[annotations]"], [
        annotationMarks,
        block,
        decoratorValues
    ]), shouldTrackSelectionAndFocus = annotations.length > 0 && blockSelected;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaf.useEffect": ()=>{
            if (!shouldTrackSelectionAndFocus) {
                setFocused(!1);
                return;
            }
            const sel = PortableTextEditor.getSelection(portableTextEditor);
            sel && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sel.focus.path, path) && PortableTextEditor.isCollapsedSelection(portableTextEditor) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                "Leaf.useEffect": ()=>{
                    setFocused(!0);
                }
            }["Leaf.useEffect"]);
        }
    }["Leaf.useEffect"], [
        shouldTrackSelectionAndFocus,
        path,
        portableTextEditor
    ]);
    const setSelectedFromRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Leaf.useCallback[setSelectedFromRange]": ()=>{
            if (!shouldTrackSelectionAndFocus) return;
            debug$3("Setting selection and focus from range");
            const winSelection = window.getSelection();
            if (!winSelection) {
                setSelected(!1);
                return;
            }
            if (winSelection && winSelection.rangeCount > 0) {
                const range = winSelection.getRangeAt(0);
                spanRef.current && range.intersectsNode(spanRef.current) ? setSelected(!0) : setSelected(!1);
            } else setSelected(!1);
        }
    }["Leaf.useCallback[setSelectedFromRange]"], [
        shouldTrackSelectionAndFocus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaf.useEffect": ()=>{
            if (!shouldTrackSelectionAndFocus) return;
            const onBlur = editorActor.on("blur", {
                "Leaf.useEffect.onBlur": ()=>{
                    setFocused(!1), setSelected(!1);
                }
            }["Leaf.useEffect.onBlur"]), onFocus = editorActor.on("focus", {
                "Leaf.useEffect.onFocus": ()=>{
                    const sel_0 = PortableTextEditor.getSelection(portableTextEditor);
                    sel_0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sel_0.focus.path, path) && PortableTextEditor.isCollapsedSelection(portableTextEditor) && setFocused(!0), setSelectedFromRange();
                }
            }["Leaf.useEffect.onFocus"]), onSelection = editorActor.on("selection", {
                "Leaf.useEffect.onSelection": (event)=>{
                    event.selection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.selection.focus.path, path) && PortableTextEditor.isCollapsedSelection(portableTextEditor) ? setFocused(!0) : setFocused(!1), setSelectedFromRange();
                }
            }["Leaf.useEffect.onSelection"]);
            return ({
                "Leaf.useEffect": ()=>{
                    onBlur.unsubscribe(), onFocus.unsubscribe(), onSelection.unsubscribe();
                }
            })["Leaf.useEffect"];
        }
    }["Leaf.useEffect"], [
        editorActor,
        path,
        portableTextEditor,
        setSelectedFromRange,
        shouldTrackSelectionAndFocus
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaf.useEffect": ()=>setSelectedFromRange()
    }["Leaf.useEffect"], [
        setSelectedFromRange
    ]);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo[content]": ()=>{
            let returnedChildren = children;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText(leaf) && leaf._type === schemaTypes.span.name && (marks.forEach({
                "Leaf.useMemo[content]": (mark_1)=>{
                    const schemaType = schemaTypes.decorators.find({
                        "Leaf.useMemo[content].schemaType": (dec_0)=>dec_0.value === mark_1
                    }["Leaf.useMemo[content].schemaType"]);
                    if (schemaType && renderDecorator) {
                        const _props = Object.defineProperty({
                            children: returnedChildren,
                            editorElementRef: spanRef,
                            focused,
                            path,
                            selected,
                            schemaType,
                            value: mark_1
                        }, "type", {
                            enumerable: !1,
                            get () {
                                return console.warn("Property 'type' is deprecated, use 'schemaType' instead."), schemaType;
                            }
                        });
                        returnedChildren = renderDecorator(_props);
                    }
                }
            }["Leaf.useMemo[content]"]), block && annotations.length > 0 && annotations.forEach({
                "Leaf.useMemo[content]": (annotation)=>{
                    const schemaType_0 = schemaTypes.annotations.find({
                        "Leaf.useMemo[content].schemaType_0": (t)=>t.name === annotation._type
                    }["Leaf.useMemo[content].schemaType_0"]);
                    if (schemaType_0) if (renderAnnotation) {
                        const _props_0 = Object.defineProperty({
                            block,
                            children: returnedChildren,
                            editorElementRef: spanRef,
                            focused,
                            path,
                            selected,
                            schemaType: schemaType_0,
                            value: annotation
                        }, "type", {
                            enumerable: !1,
                            get () {
                                return console.warn("Property 'type' is deprecated, use 'schemaType' instead."), schemaType_0;
                            }
                        });
                        returnedChildren = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            ref: spanRef,
                            children: renderAnnotation(_props_0)
                        });
                    } else returnedChildren = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultAnnotation, {
                        annotation,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            ref: spanRef,
                            children: returnedChildren
                        })
                    });
                }
            }["Leaf.useMemo[content]"]), block && renderChild)) {
                const child = block.children.find({
                    "Leaf.useMemo[content].child": (_child)=>_child._key === leaf._key
                }["Leaf.useMemo[content].child"]);
                if (child) {
                    const _props_1 = Object.defineProperty({
                        annotations,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: returnedChildren
                        }),
                        editorElementRef: spanRef,
                        focused,
                        path,
                        schemaType: schemaTypes.span,
                        selected,
                        value: child
                    }, "type", {
                        enumerable: !1,
                        get () {
                            return console.warn("Property 'type' is deprecated, use 'schemaType' instead."), schemaTypes.span;
                        }
                    });
                    returnedChildren = renderChild(_props_1);
                }
            }
            return returnedChildren;
        }
    }["Leaf.useMemo[content]"], [
        annotations,
        block,
        children,
        focused,
        leaf,
        marks,
        path,
        renderAnnotation,
        renderChild,
        renderDecorator,
        schemaTypes.annotations,
        schemaTypes.decorators,
        schemaTypes.span,
        selected
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Leaf.useMemo": ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", __spreadProps$2(__spreadValues$2({}, attributes), {
                ref: spanRef,
                children: content
            }), leaf._key)
    }["Leaf.useMemo"], [
        leaf,
        attributes,
        content
    ]);
};
Leaf.displayName = "Leaf";
const debug$2 = debugWithName("plugin:withHotKeys"), DEFAULT_HOTKEYS = {
    marks: {
        "mod+b": "strong",
        "mod+i": "em",
        "mod+u": "underline",
        "mod+'": "code"
    },
    custom: {}
};
function createWithHotkeys(editorActor, portableTextEditor, hotkeysFromOptions) {
    const reservedHotkeys = [
        "enter",
        "tab",
        "shift",
        "delete",
        "end"
    ], activeHotkeys = hotkeysFromOptions || DEFAULT_HOTKEYS;
    return function(editor) {
        return editor.pteWithHotKeys = (event)=>{
            Object.keys(activeHotkeys).forEach((cat)=>{
                if (cat === "marks") for(const hotkey in activeHotkeys[cat]){
                    if (reservedHotkeys.includes(hotkey)) throw new Error(`The hotkey ${hotkey} is reserved!`);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHotkey"])(hotkey, event.nativeEvent)) {
                        event.preventDefault();
                        const possibleMark = activeHotkeys[cat];
                        if (possibleMark) {
                            const mark = possibleMark[hotkey];
                            debug$2(`HotKey ${hotkey} to toggle ${mark}`), editorActor.send({
                                type: "behavior event",
                                behaviorEvent: {
                                    type: "decorator.toggle",
                                    decorator: mark
                                },
                                editor
                            });
                        }
                    }
                }
                if (cat === "custom") for(const hotkey in activeHotkeys[cat]){
                    if (reservedHotkeys.includes(hotkey)) throw new Error(`The hotkey ${hotkey} is reserved!`);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$1$2e$16$2e$4_$40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0_$5f40$sanity$2b$schema$40$3$2e$67$2e$1_deb_pqbrot4cbdikphuxn54dfeocvu$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$behavior$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHotkey"])(hotkey, event.nativeEvent)) {
                        const possibleCommand = activeHotkeys[cat];
                        if (possibleCommand) {
                            const command = possibleCommand[hotkey];
                            command(event, portableTextEditor);
                        }
                    }
                }
            });
        }, editor;
    };
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
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b)), __objRest$1 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(source))exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const debug$1 = debugWithName("plugin:withInsertData");
function createWithInsertData(editorActor, schemaTypes) {
    return function(editor) {
        const blockTypeName = schemaTypes.block.name, spanTypeName = schemaTypes.span.name, whitespaceOnPasteMode = schemaTypes.block.options.unstable_whitespaceOnPasteMode, toPlainText = (blocks)=>blocks.map((block)=>{
                var _a;
                return editor.isTextBlock(block) ? block.children.map((child)=>{
                    var _a2;
                    return child._type === spanTypeName ? child.text : `[${((_a2 = schemaTypes.inlineObjects.find((t)=>t.name === child._type)) == null ? void 0 : _a2.title) || "Object"}]`;
                }).join("") : `[${((_a = schemaTypes.blockObjects.find((t)=>t.name === block._type)) == null ? void 0 : _a.title) || "Object"}]`;
            }).join(`

`);
        return editor.setFragmentData = (data, originEvent)=>{
            const { selection } = editor;
            if (!selection) return;
            const [start, end] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].edges(selection), startVoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                at: start.path
            }), endVoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                at: end.path
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection) && !startVoid) return;
            const domRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMRange(editor, selection);
            let contents = domRange.cloneContents();
            if (endVoid) {
                const [voidNode] = endVoid, r = domRange.cloneRange(), domNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMNode(editor, voidNode);
                r.setEndAfter(domNode), contents = r.cloneContents();
            }
            Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach((zw)=>{
                const isNewline = zw.getAttribute("data-slate-zero-width") === "n";
                zw.textContent = isNewline ? `
` : "";
            }), Array.from(contents.querySelectorAll("*")).forEach((elm)=>{
                elm.removeAttribute("contentEditable"), elm.removeAttribute("data-slate-inline"), elm.removeAttribute("data-slate-leaf"), elm.removeAttribute("data-slate-node"), elm.removeAttribute("data-slate-spacer"), elm.removeAttribute("data-slate-string"), elm.removeAttribute("data-slate-zero-width"), elm.removeAttribute("draggable");
                for(const key in elm.attributes)elm.hasAttribute(key) && elm.removeAttribute(key);
            });
            const div = contents.ownerDocument.createElement("div");
            div.appendChild(contents), div.setAttribute("hidden", "true"), contents.ownerDocument.body.appendChild(div);
            const asHTML = div.innerHTML;
            contents.ownerDocument.body.removeChild(div);
            const fragment = editor.getFragment(), portableText = fromSlateValue(fragment, blockTypeName), asJSON = JSON.stringify(portableText), asPlainText = toPlainText(portableText);
            data.clearData(), data.setData("text/plain", asPlainText), data.setData("text/html", asHTML), data.setData("application/json", asJSON), data.setData("application/x-portable-text", asJSON), debug$1("text", asPlainText), data.setData("application/x-portable-text-event-origin", originEvent || "external"), debug$1("Set fragment data", asJSON, asHTML);
        }, editor.insertPortableTextData = (data)=>{
            var _a, _b;
            if (!editor.selection) return !1;
            const pText = data.getData("application/x-portable-text"), origin = data.getData("application/x-portable-text-event-origin");
            if (debug$1(`Inserting portable text from ${origin} event`, pText), pText) {
                const parsed = JSON.parse(pText);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    const slateValue = _regenerateKeys(editor, toSlateValue(parsed, {
                        schemaTypes
                    }), editorActor.getSnapshot().context.keyGenerator, spanTypeName, schemaTypes), validation = validateValue(parsed, schemaTypes, editorActor.getSnapshot().context.keyGenerator);
                    if (!validation.valid && !((_a = validation.resolution) != null && _a.autoResolve)) {
                        const errorDescription = `${(_b = validation.resolution) == null ? void 0 : _b.description}`;
                        return editorActor.send({
                            type: "error",
                            name: "pasteError",
                            description: errorDescription,
                            data: validation
                        }), debug$1("Invalid insert result", validation), !1;
                    }
                    return _insertFragment(editor, slateValue, schemaTypes), !0;
                }
            }
            return !1;
        }, editor.insertTextOrHTMLData = (data)=>{
            var _a;
            if (!editor.selection) return debug$1("No selection, not inserting"), !1;
            const html = data.getData("text/html"), text = data.getData("text/plain");
            if (html || text) {
                debug$1("Inserting data", data);
                let portableText, fragment, insertedType;
                if (html) {
                    if (portableText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$block$2d$tools$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlToBlocks"])(html, schemaTypes.portableText, {
                        unstable_whitespaceOnPasteMode: whitespaceOnPasteMode
                    }).map((block)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$block$2d$tools$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeBlock"])(block, {
                            blockTypeName
                        })), fragment = toSlateValue(portableText, {
                        schemaTypes
                    }), insertedType = "HTML", portableText.length === 0) return !1;
                } else {
                    const textToHtml = `<html><body>${escapeHtml(text).split(/\n{2,}/).map((line)=>line ? `<p>${line.replace(/(?:\r\n|\r|\n)/g, "<br/>")}</p>` : "<p></p>").join("")}</body></html>`;
                    portableText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$block$2d$tools$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlToBlocks"])(textToHtml, schemaTypes.portableText).map((block)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$block$2d$tools$40$3$2e$67$2e$1_debug$40$4$2e$4$2e$0$2f$node_modules$2f40$sanity$2f$block$2d$tools$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeBlock"])(block, {
                            blockTypeName
                        })), fragment = toSlateValue(portableText, {
                        schemaTypes
                    }), insertedType = "text";
                }
                const validation = validateValue(portableText, schemaTypes, editorActor.getSnapshot().context.keyGenerator);
                if (!validation.valid) {
                    const errorDescription = `Could not validate the resulting portable text to insert.
${(_a = validation.resolution) == null ? void 0 : _a.description}
Try to insert as plain text (shift-paste) instead.`;
                    return editorActor.send({
                        type: "error",
                        name: "pasteError",
                        description: errorDescription,
                        data: validation
                    }), debug$1("Invalid insert result", validation), !1;
                }
                return debug$1(`Inserting ${insertedType} fragment at ${JSON.stringify(editor.selection)}`), _insertFragment(editor, fragment, schemaTypes), !0;
            }
            return !1;
        }, editor.insertData = (data)=>{
            editor.insertPortableTextData(data) || editor.insertTextOrHTMLData(data);
        }, editor.insertFragmentData = (data)=>{
            const fragment = data.getData("application/x-portable-text");
            if (fragment) {
                const parsed = JSON.parse(fragment);
                return editor.insertFragment(parsed), !0;
            }
            return !1;
        }, editor;
    };
}
const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
function escapeHtml(str) {
    return String(str).replace(/[&<>"'`=/]/g, (s)=>entityMap[s]);
}
function _regenerateKeys(editor, fragment, keyGenerator, spanTypeName, editorTypes) {
    return fragment.map((node)=>{
        const newNode = __spreadValues$1({}, node);
        if (editor.isTextBlock(newNode)) {
            const annotations = editorTypes.annotations.map((t)=>t.name);
            if (annotations.length === 0) {
                const _a = newNode, NewNodeNoDefs = __objRest$1(_a, [
                    "markDefs"
                ]);
                return __spreadProps$1(__spreadValues$1({}, NewNodeNoDefs), {
                    _key: keyGenerator()
                });
            }
            if ((newNode.markDefs || []).some((def)=>!annotations.includes(def._type))) {
                const allowedAnnotations = (newNode.markDefs || []).filter((def)=>annotations.includes(def._type));
                return __spreadProps$1(__spreadValues$1({}, newNode), {
                    markDefs: allowedAnnotations,
                    _key: keyGenerator()
                });
            }
            newNode.markDefs = (newNode.markDefs || []).map((def)=>{
                const oldKey = def._key, newKey = keyGenerator();
                return newNode.children = newNode.children.map((child)=>child._type === spanTypeName && editor.isTextSpan(child) ? __spreadProps$1(__spreadValues$1({}, child), {
                        marks: child.marks && child.marks.includes(oldKey) ? [
                            ...child.marks
                        ].filter((mark)=>mark !== oldKey).concat(newKey) : child.marks
                    }) : child), __spreadProps$1(__spreadValues$1({}, def), {
                    _key: newKey
                });
            });
        }
        const nodeWithNewKeys = __spreadProps$1(__spreadValues$1({}, newNode), {
            _key: keyGenerator()
        });
        return editor.isTextBlock(nodeWithNewKeys) && (nodeWithNewKeys.children = nodeWithNewKeys.children.map((child)=>__spreadProps$1(__spreadValues$1({}, child), {
                _key: keyGenerator()
            }))), nodeWithNewKeys;
    });
}
function _insertFragment(editor, fragment, schemaTypes) {
    editor.withoutNormalizing(()=>{
        if (!editor.selection) return;
        const [focusBlock, focusPath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].node(editor, editor.selection, {
            depth: 1
        });
        if (editor.isTextBlock(focusBlock) && editor.isTextBlock(fragment[0])) {
            const { markDefs } = focusBlock;
            debug$1("Mixing markDefs of focusBlock and fragments[0] block", markDefs, fragment[0].markDefs), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(markDefs, fragment[0].markDefs) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].setNodes(editor, {
                markDefs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                    ...fragment[0].markDefs || [],
                    ...markDefs || []
                ])
            }, {
                at: focusPath,
                mode: "lowest",
                voids: !1
            });
        }
        isEqualToEmptyEditor(editor.children, schemaTypes) ? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].splitNodes(editor, {
            at: [
                0,
                0
            ]
        }), editor.insertFragment(fragment), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].removeNodes(editor, {
            at: [
                0
            ]
        })) : editor.insertFragment(fragment);
    }), editor.onChange();
}
function withSyncRangeDecorations({ editorActor, slateEditor, syncRangeDecorations }) {
    const originalApply = slateEditor.apply;
    return slateEditor.apply = (op)=>{
        originalApply(op), !editorActor.getSnapshot().matches({
            "edit mode": "read only"
        }) && op.type !== "set_selection" && syncRangeDecorations(op);
    }, ()=>{
        slateEditor.apply = originalApply;
    };
}
var __defProp2 = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols2 = Object.getOwnPropertySymbols, __hasOwnProp2 = Object.prototype.hasOwnProperty, __propIsEnum2 = Object.prototype.propertyIsEnumerable, __defNormalProp2 = (obj, key, value)=>key in obj ? __defProp2(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues2 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(b))__propIsEnum2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
    return a;
}, __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b)), __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(source))exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const debug = debugWithName("component:Editable"), PLACEHOLDER_STYLE = {
    position: "absolute",
    userSelect: "none",
    pointerEvents: "none",
    left: 0,
    right: 0
}, PortableTextEditable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, forwardedRef) {
    const _a = props, { hotkeys, onBlur, onFocus, onBeforeInput, onPaste, onCopy, onClick, rangeDecorations, renderAnnotation, renderBlock, renderChild, renderDecorator, renderListItem, renderPlaceholder, renderStyle, selection: propsSelection, scrollSelectionIntoView, spellCheck } = _a, restProps = __objRest(_a, [
        "hotkeys",
        "onBlur",
        "onFocus",
        "onBeforeInput",
        "onPaste",
        "onCopy",
        "onClick",
        "rangeDecorations",
        "renderAnnotation",
        "renderBlock",
        "renderChild",
        "renderDecorator",
        "renderListItem",
        "renderPlaceholder",
        "renderStyle",
        "selection",
        "scrollSelectionIntoView",
        "spellCheck"
    ]), portableTextEditor = usePortableTextEditor(), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [editableElement, setEditableElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [hasInvalidValue, setHasInvalidValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [rangeDecorationState, setRangeDecorationsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
        "PortableTextEditable.useImperativeHandle": ()=>ref.current
    }["PortableTextEditable.useImperativeHandle"]);
    const rangeDecorationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(rangeDecorations), editorActor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EditorActorContext), readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(editorActor, {
        "PortableTextEditable.useSelector[readOnly]": (s)=>s.matches({
                "edit mode": "read only"
            })
    }["PortableTextEditable.useSelector[readOnly]"]), schemaTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(editorActor, {
        "PortableTextEditable.useSelector[schemaTypes]": (s_0)=>s_0.context.schema
    }["PortableTextEditable.useSelector[schemaTypes]"]), slateEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSlate"])(), blockTypeName = schemaTypes.block.name;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortableTextEditable.useMemo": ()=>{
            const withInsertData = createWithInsertData(editorActor, schemaTypes);
            if (readOnly) return debug("Editable is in read only mode"), withInsertData(slateEditor);
            const withHotKeys = createWithHotkeys(editorActor, portableTextEditor, hotkeys);
            return debug("Editable is in edit mode"), withInsertData(withHotKeys(slateEditor));
        }
    }["PortableTextEditable.useMemo"], [
        editorActor,
        hotkeys,
        portableTextEditor,
        readOnly,
        schemaTypes,
        slateEditor
    ]);
    const renderElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[renderElement]": (eProps)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Element, __spreadProps(__spreadValues2({}, eProps), {
                readOnly,
                renderBlock,
                renderChild,
                renderListItem,
                renderStyle,
                schemaTypes,
                spellCheck
            }))
    }["PortableTextEditable.useCallback[renderElement]"], [
        schemaTypes,
        spellCheck,
        readOnly,
        renderBlock,
        renderChild,
        renderListItem,
        renderStyle
    ]), renderLeaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[renderLeaf]": (lProps)=>{
            if (lProps.leaf._type === "span") {
                let rendered = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Leaf, __spreadProps(__spreadValues2({}, lProps), {
                    editorActor,
                    schemaTypes,
                    renderAnnotation,
                    renderChild,
                    renderDecorator,
                    readOnly
                }));
                if (renderPlaceholder && lProps.leaf.placeholder && lProps.text.text === "") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            style: PLACEHOLDER_STYLE,
                            contentEditable: !1,
                            children: renderPlaceholder()
                        }),
                        rendered
                    ]
                });
                const decoration = lProps.leaf.rangeDecoration;
                return decoration && (rendered = decoration.component({
                    children: rendered
                })), rendered;
            }
            return lProps.children;
        }
    }["PortableTextEditable.useCallback[renderLeaf]"], [
        editorActor,
        readOnly,
        renderAnnotation,
        renderChild,
        renderDecorator,
        renderPlaceholder,
        schemaTypes
    ]), restoreSelectionFromProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[restoreSelectionFromProps]": ()=>{
            if (propsSelection) {
                debug(`Selection from props ${JSON.stringify(propsSelection)}`);
                const normalizedSelection = normalizeSelection(propsSelection, fromSlateValue(slateEditor.children, blockTypeName));
                if (normalizedSelection !== null) {
                    debug(`Normalized selection from props ${JSON.stringify(normalizedSelection)}`);
                    const slateRange = toSlateRange(normalizedSelection, slateEditor);
                    slateRange && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, slateRange), slateEditor.operations.some({
                        "PortableTextEditable.useCallback[restoreSelectionFromProps]": (o)=>o.type === "set_selection"
                    }["PortableTextEditable.useCallback[restoreSelectionFromProps]"]) || editorActor.send({
                        type: "selection",
                        selection: normalizedSelection
                    }), slateEditor.onChange());
                }
            }
        }
    }["PortableTextEditable.useCallback[restoreSelectionFromProps]"], [
        blockTypeName,
        editorActor,
        propsSelection,
        slateEditor
    ]), syncRangeDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[syncRangeDecorations]": (operation)=>{
            if (rangeDecorations && rangeDecorations.length > 0) {
                const newSlateRanges = [];
                if (rangeDecorations.forEach({
                    "PortableTextEditable.useCallback[syncRangeDecorations]": (rangeDecorationItem)=>{
                        const slateRange_0 = toSlateRange(rangeDecorationItem.selection, slateEditor);
                        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isRange(slateRange_0)) {
                            rangeDecorationItem.onMoved && rangeDecorationItem.onMoved({
                                newSelection: null,
                                rangeDecoration: rangeDecorationItem,
                                origin: "local"
                            });
                            return;
                        }
                        let newRange;
                        if (operation && (newRange = moveRangeByOperation(slateRange_0, operation), newRange && newRange !== slateRange_0 || newRange === null && slateRange_0)) {
                            const value = PortableTextEditor.getValue(portableTextEditor), newRangeSelection = toPortableTextRange(value, newRange, schemaTypes);
                            rangeDecorationItem.onMoved && rangeDecorationItem.onMoved({
                                newSelection: newRangeSelection,
                                rangeDecoration: rangeDecorationItem,
                                origin: "local"
                            });
                        }
                        newRange !== null && newSlateRanges.push(__spreadProps(__spreadValues2({}, newRange || slateRange_0), {
                            rangeDecoration: rangeDecorationItem
                        }));
                    }
                }["PortableTextEditable.useCallback[syncRangeDecorations]"]), newSlateRanges.length > 0) {
                    setRangeDecorationsState(newSlateRanges);
                    return;
                }
            }
            setRangeDecorationsState({
                "PortableTextEditable.useCallback[syncRangeDecorations]": (rangeDecorationState_0)=>rangeDecorationState_0.length > 0 ? [] : rangeDecorationState_0
            }["PortableTextEditable.useCallback[syncRangeDecorations]"]);
        }
    }["PortableTextEditable.useCallback[syncRangeDecorations]"], [
        portableTextEditor,
        rangeDecorations,
        schemaTypes,
        slateEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            const onReady = editorActor.on("ready", {
                "PortableTextEditable.useEffect.onReady": ()=>{
                    syncRangeDecorations(), restoreSelectionFromProps();
                }
            }["PortableTextEditable.useEffect.onReady"]), onInvalidValue = editorActor.on("invalid value", {
                "PortableTextEditable.useEffect.onInvalidValue": ()=>{
                    setHasInvalidValue(!0);
                }
            }["PortableTextEditable.useEffect.onInvalidValue"]), onValueChanged = editorActor.on("value changed", {
                "PortableTextEditable.useEffect.onValueChanged": ()=>{
                    setHasInvalidValue(!1);
                }
            }["PortableTextEditable.useEffect.onValueChanged"]);
            return ({
                "PortableTextEditable.useEffect": ()=>{
                    onReady.unsubscribe(), onInvalidValue.unsubscribe(), onValueChanged.unsubscribe();
                }
            })["PortableTextEditable.useEffect"];
        }
    }["PortableTextEditable.useEffect"], [
        editorActor,
        restoreSelectionFromProps,
        syncRangeDecorations
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            propsSelection && !hasInvalidValue && restoreSelectionFromProps();
        }
    }["PortableTextEditable.useEffect"], [
        hasInvalidValue,
        propsSelection,
        restoreSelectionFromProps
    ]);
    const [syncedRangeDecorations, setSyncedRangeDecorations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            syncedRangeDecorations || (setSyncedRangeDecorations(!0), syncRangeDecorations());
        }
    }["PortableTextEditable.useEffect"], [
        syncRangeDecorations,
        syncedRangeDecorations
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rangeDecorations, rangeDecorationsRef.current) || syncRangeDecorations(), rangeDecorationsRef.current = rangeDecorations;
        }
    }["PortableTextEditable.useEffect"], [
        rangeDecorations,
        syncRangeDecorations
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            const teardown = withSyncRangeDecorations({
                editorActor,
                slateEditor,
                syncRangeDecorations
            });
            return ({
                "PortableTextEditable.useEffect": ()=>teardown()
            })["PortableTextEditable.useEffect"];
        }
    }["PortableTextEditable.useEffect"], [
        editorActor,
        slateEditor,
        syncRangeDecorations
    ]);
    const handleCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleCopy]": (event)=>{
            onCopy ? onCopy(event) !== void 0 && event.preventDefault() : event.nativeEvent.clipboardData && editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "copy",
                    data: event.nativeEvent.clipboardData
                },
                editor: slateEditor,
                nativeEvent: event
            });
        }
    }["PortableTextEditable.useCallback[handleCopy]"], [
        onCopy,
        editorActor,
        slateEditor
    ]), handlePaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handlePaste]": (event_0)=>{
            const value_0 = PortableTextEditor.getValue(portableTextEditor), ptRange = toPortableTextRange(value_0, slateEditor.selection, schemaTypes), path = (ptRange == null ? void 0 : ptRange.focus.path) || [], onPasteResult = onPaste == null ? void 0 : onPaste({
                event: event_0,
                value: value_0,
                path,
                schemaTypes
            });
            onPasteResult || !slateEditor.selection ? (event_0.preventDefault(), editorActor.send({
                type: "loading"
            }), Promise.resolve(onPasteResult).then({
                "PortableTextEditable.useCallback[handlePaste]": (result_0)=>{
                    debug("Custom paste function from client resolved", result_0), !result_0 || !result_0.insert ? (debug("No result from custom paste handler, pasting normally"), slateEditor.insertData(event_0.clipboardData)) : result_0.insert ? slateEditor.insertFragment(toSlateValue(result_0.insert, {
                        schemaTypes
                    })) : console.warn("Your onPaste function returned something unexpected:", result_0);
                }
            }["PortableTextEditable.useCallback[handlePaste]"]).catch({
                "PortableTextEditable.useCallback[handlePaste]": (error)=>(console.error(error), error)
            }["PortableTextEditable.useCallback[handlePaste]"]).finally({
                "PortableTextEditable.useCallback[handlePaste]": ()=>{
                    editorActor.send({
                        type: "done loading"
                    });
                }
            }["PortableTextEditable.useCallback[handlePaste]"])) : event_0.nativeEvent.clipboardData && editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "paste",
                    data: event_0.nativeEvent.clipboardData
                },
                editor: slateEditor,
                nativeEvent: event_0
            }), debug("No result from custom paste handler, pasting normally");
        }
    }["PortableTextEditable.useCallback[handlePaste]"], [
        editorActor,
        onPaste,
        portableTextEditor,
        schemaTypes,
        slateEditor
    ]), handleOnFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleOnFocus]": (event_1)=>{
            if (onFocus && onFocus(event_1), !event_1.isDefaultPrevented()) {
                const selection = PortableTextEditor.getSelection(portableTextEditor);
                selection === null && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].start(slateEditor, [])), slateEditor.onChange()), editorActor.send({
                    type: "focused",
                    event: event_1
                });
                const newSelection = PortableTextEditor.getSelection(portableTextEditor);
                selection === newSelection && editorActor.send({
                    type: "selection",
                    selection
                });
            }
        }
    }["PortableTextEditable.useCallback[handleOnFocus]"], [
        editorActor,
        onFocus,
        portableTextEditor,
        slateEditor
    ]), handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleClick]": (event_2)=>{
            onClick && onClick(event_2);
            const focusBlockPath = slateEditor.selection ? slateEditor.selection.focus.path.slice(0, 1) : void 0, focusBlock = focusBlockPath ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].descendant(slateEditor, focusBlockPath) : void 0, [_, lastNodePath] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].last(slateEditor, []), lastBlockPath = lastNodePath.slice(0, 1), lastNodeFocused = focusBlockPath ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(lastBlockPath, focusBlockPath) : !1, lastBlockIsVoid = focusBlock ? !slateEditor.isTextBlock(focusBlock) : !1;
            slateEditor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(slateEditor.selection) && lastNodeFocused && lastBlockIsVoid && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].insertNodes(slateEditor, slateEditor.pteCreateTextBlock({
                decorators: []
            })), slateEditor.onChange());
        }
    }["PortableTextEditable.useCallback[handleClick]"], [
        onClick,
        slateEditor
    ]), handleOnBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleOnBlur]": (event_3)=>{
            onBlur && onBlur(event_3), event_3.isPropagationStopped() || editorActor.send({
                type: "blurred",
                event: event_3
            });
        }
    }["PortableTextEditable.useCallback[handleOnBlur]"], [
        editorActor,
        onBlur
    ]), handleOnBeforeInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleOnBeforeInput]": (event_4)=>{
            onBeforeInput && onBeforeInput(event_4);
        }
    }["PortableTextEditable.useCallback[handleOnBeforeInput]"], [
        onBeforeInput
    ]), validateSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[validateSelection]": ()=>{
            if (!slateEditor.selection) return;
            const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].findDocumentOrShadowRoot(slateEditor), { activeElement } = root;
            if (ref.current !== activeElement) return;
            const domSelection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].getWindow(slateEditor).getSelection();
            if (!domSelection || domSelection.rangeCount === 0) return;
            const existingDOMRange = domSelection.getRangeAt(0);
            try {
                const newDOMRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMRange(slateEditor, slateEditor.selection);
                (newDOMRange.startOffset !== existingDOMRange.startOffset || newDOMRange.endOffset !== existingDOMRange.endOffset) && (debug("DOM range out of sync, validating selection"), domSelection == null || domSelection.removeAllRanges(), domSelection.addRange(newDOMRange));
            } catch (e) {
                debug("Could not resolve selection, selecting top document"), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(slateEditor), slateEditor.children.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(slateEditor, [
                    0,
                    0
                ]), slateEditor.onChange();
            }
        }
    }["PortableTextEditable.useCallback[validateSelection]"], [
        ref,
        slateEditor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            if (editableElement) {
                const mutationObserver = new MutationObserver(validateSelection);
                return mutationObserver.observe(editableElement, {
                    attributeOldValue: !1,
                    attributes: !1,
                    characterData: !1,
                    childList: !0,
                    subtree: !0
                }), ({
                    "PortableTextEditable.useEffect": ()=>{
                        mutationObserver.disconnect();
                    }
                })["PortableTextEditable.useEffect"];
            }
        }
    }["PortableTextEditable.useEffect"], [
        validateSelection,
        editableElement
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleKeyDown]": (event_5)=>{
            props.onKeyDown && props.onKeyDown(event_5), event_5.isDefaultPrevented() || slateEditor.pteWithHotKeys(event_5), event_5.isDefaultPrevented() || editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "key.down",
                    keyboardEvent: {
                        key: event_5.key,
                        code: event_5.code,
                        altKey: event_5.altKey,
                        ctrlKey: event_5.ctrlKey,
                        metaKey: event_5.metaKey,
                        shiftKey: event_5.shiftKey
                    }
                },
                editor: slateEditor,
                nativeEvent: event_5
            });
        }
    }["PortableTextEditable.useCallback[handleKeyDown]"], [
        props,
        editorActor,
        slateEditor
    ]), handleKeyUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[handleKeyUp]": (event_6)=>{
            props.onKeyUp && props.onKeyUp(event_6), event_6.isDefaultPrevented() || editorActor.send({
                type: "behavior event",
                behaviorEvent: {
                    type: "key.up",
                    keyboardEvent: {
                        key: event_6.key,
                        code: event_6.code,
                        altKey: event_6.altKey,
                        ctrlKey: event_6.ctrlKey,
                        metaKey: event_6.metaKey,
                        shiftKey: event_6.shiftKey
                    }
                },
                editor: slateEditor,
                nativeEvent: event_6
            });
        }
    }["PortableTextEditable.useCallback[handleKeyUp]"], [
        props,
        editorActor,
        slateEditor
    ]), scrollSelectionIntoViewToSlate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortableTextEditable.useMemo[scrollSelectionIntoViewToSlate]": ()=>{
            if (scrollSelectionIntoView !== void 0) return scrollSelectionIntoView === null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$noop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : ({
                "PortableTextEditable.useMemo[scrollSelectionIntoViewToSlate]": (_editor, domRange)=>{
                    scrollSelectionIntoView(portableTextEditor, domRange);
                }
            })["PortableTextEditable.useMemo[scrollSelectionIntoViewToSlate]"];
        }
    }["PortableTextEditable.useMemo[scrollSelectionIntoViewToSlate]"], [
        portableTextEditor,
        scrollSelectionIntoView
    ]), decorate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortableTextEditable.useCallback[decorate]": ([, path_0])=>{
            if (isEqualToEmptyEditor(slateEditor.children, schemaTypes)) return [
                {
                    anchor: {
                        path: [
                            0,
                            0
                        ],
                        offset: 0
                    },
                    focus: {
                        path: [
                            0,
                            0
                        ],
                        offset: 0
                    },
                    placeholder: !0
                }
            ];
            if (path_0.length === 0) return [];
            const result_1 = rangeDecorationState.filter({
                "PortableTextEditable.useCallback[decorate].result_1": (item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(item) ? path_0.length !== 2 ? !1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(item.focus.path, path_0) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(item.anchor.path, path_0) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersection(item, {
                        anchor: {
                            path: path_0,
                            offset: 0
                        },
                        focus: {
                            path: path_0,
                            offset: 0
                        }
                    }) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].includes(item, path_0)
            }["PortableTextEditable.useCallback[decorate].result_1"]);
            return result_1.length > 0 ? result_1 : [];
        }
    }["PortableTextEditable.useCallback[decorate]"], [
        slateEditor,
        schemaTypes,
        rangeDecorationState
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortableTextEditable.useEffect": ()=>{
            ref.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactEditor"].toDOMNode(slateEditor, slateEditor), setEditableElement(ref.current);
        }
    }["PortableTextEditable.useEffect"], [
        slateEditor,
        ref
    ]), portableTextEditor ? hasInvalidValue ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Editable"], __spreadProps(__spreadValues2({}, restProps), {
        autoFocus: !1,
        className: restProps.className || "pt-editable",
        decorate,
        onBlur: handleOnBlur,
        onCopy: handleCopy,
        onClick: handleClick,
        onDOMBeforeInput: handleOnBeforeInput,
        onFocus: handleOnFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onPaste: handlePaste,
        readOnly,
        renderPlaceholder: void 0,
        renderElement,
        renderLeaf,
        scrollSelectionIntoView: scrollSelectionIntoViewToSlate
    })) : null;
});
PortableTextEditable.displayName = "ForwardRef(PortableTextEditable)";
const EditorContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
function EditorProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28), editor = useCreateEditor(props.initialConfig), editorActor = editor._internal.editorActor, slateEditor = editor._internal.slateEditor;
    let t0, t1;
    $[0] !== editor ? (t1 = new PortableTextEditor({
        editor
    }), $[0] = editor, $[1] = t1) : t1 = $[1], t0 = t1;
    const portableTextEditor = t0;
    let t2;
    $[2] !== portableTextEditor.change$ ? (t2 = (change)=>{
        portableTextEditor.change$.next(change);
    }, $[2] = portableTextEditor.change$, $[3] = t2) : t2 = $[3];
    let t3;
    $[4] !== editorActor || $[5] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RouteEventsToChanges, {
        editorActor,
        onChange: t2
    }), $[4] = editorActor, $[5] = t2, $[6] = t3) : t3 = $[6];
    let t4;
    $[7] !== editorActor || $[8] !== slateEditor.instance ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Synchronizer, {
        editorActor,
        slateEditor: slateEditor.instance
    }), $[7] = editorActor, $[8] = slateEditor.instance, $[9] = t4) : t4 = $[9];
    let t5;
    $[10] !== editorActor || $[11] !== props.children ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortableTextEditorSelectionProvider, {
        editorActor,
        children: props.children
    }), $[10] = editorActor, $[11] = props.children, $[12] = t5) : t5 = $[12];
    let t6;
    $[13] !== portableTextEditor || $[14] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortableTextEditorContext.Provider, {
        value: portableTextEditor,
        children: t5
    }), $[13] = portableTextEditor, $[14] = t5, $[15] = t6) : t6 = $[15];
    let t7;
    $[16] !== slateEditor.initialValue || $[17] !== slateEditor.instance || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slate$2d$react$40$0$2e$112$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_slate$2d$dom$40$0$2e$111$2e$0_slate$40$0$2e$112$2e$0_$5f$slate$40$0$2e$112$2e$0$2f$node_modules$2f$slate$2d$react$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Slate"], {
        editor: slateEditor.instance,
        initialValue: slateEditor.initialValue,
        children: t6
    }), $[16] = slateEditor.initialValue, $[17] = slateEditor.instance, $[18] = t6, $[19] = t7) : t7 = $[19];
    let t8;
    $[20] !== editorActor || $[21] !== t7 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorActorContext.Provider, {
        value: editorActor,
        children: t7
    }), $[20] = editorActor, $[21] = t7, $[22] = t8) : t8 = $[22];
    let t9;
    return $[23] !== editor || $[24] !== t3 || $[25] !== t4 || $[26] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(EditorContext.Provider, {
        value: editor,
        children: [
            t3,
            t4,
            t8
        ]
    }), $[23] = editor, $[24] = t3, $[25] = t4, $[26] = t8, $[27] = t9) : t9 = $[27], t9;
}
function useEditor() {
    const editor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(EditorContext);
    if (!editor) throw new Error("No Editor set. Use EditorProvider to set one.");
    return editor;
}
function EditorEventListener(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), editor = useEditor(), on = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$effect$2d$event$40$1$2e$0$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$use$2d$effect$2d$event$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(props.on);
    let t0, t1;
    return $[0] !== editor || $[1] !== on ? (t0 = ()=>{
        const subscription = editor.on("*", on);
        return ()=>{
            subscription.unsubscribe();
        };
    }, t1 = [
        editor,
        on
    ], $[0] = editor, $[1] = on, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
}
function getValue(editor) {
    return fromSlateValue(editor._internal.slateEditor.instance.children, editor._internal.editorActor.getSnapshot().context.schema.block.name, KEY_TO_VALUE_ELEMENT.get(editor._internal.slateEditor.instance));
}
function defaultCompare(a, b) {
    return a === b;
}
function useEditorSelector(editor, selector, t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$201e55d$2d$20241215_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), compare = t0 === void 0 ? defaultCompare : t0;
    let t1;
    return $[0] !== editor || $[1] !== selector ? (t1 = (snapshot)=>{
        const context = {
            activeDecorators: getActiveDecorators({
                schema: snapshot.context.schema,
                slateEditorInstance: editor._internal.slateEditor.instance
            }),
            keyGenerator: snapshot.context.keyGenerator,
            schema: snapshot.context.schema,
            selection: snapshot.context.selection,
            value: getValue(editor)
        };
        return selector({
            context
        });
    }, $[0] = editor, $[1] = selector, $[2] = t1) : t1 = $[2], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xstate$2b$react$40$5$2e$0$2e$0_$40$types$2b$react$40$18$2e$3$2e$17_react$40$18$2e$3$2e$1_xstate$40$5$2e$19$2e$0$2f$node_modules$2f40$xstate$2f$react$2f$dist$2f$xstate$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(editor._internal.editorActor, t1, compare);
}
;
 //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=d6b21_%40portabletext_editor_lib_3979d6._.js.map