(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/dfc76_sanity_lib_263101._.js", {

"[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_createContext.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createContext": (()=>createGlobalScopedContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_chunks-es/version.mjs [app-client] (ecmascript)");
;
;
const MISSING_CONTEXT_HELP_URL = "https://www.sanity.io/help/missing-context-error";
function createGlobalScopedContext(key, defaultValue) {
    const symbol = Symbol.for(key);
    if (typeof document > "u") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue);
    if (!globalScope[symbol]) globalScope[symbol] = {
        context: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]
    };
    else {
        if (globalScope[symbol].version !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]) throw new TypeError(`Duplicate instances of context "${key}" with incompatible versions detected: Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]} but got ${globalScope[symbol].version}.

For more information, please visit ${MISSING_CONTEXT_HELP_URL}`);
        warned.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]) || (console.warn(`Duplicate instances of context "${key}" detected. This is likely a mistake and may cause unexpected behavior.

For more information, please visit ${MISSING_CONTEXT_HELP_URL}`), warned.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]));
    }
    return globalScope[symbol].context;
}
const warned = /* @__PURE__ */ new Set();
function getGlobalScope() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof window < "u") return window;
    if (typeof self < "u") return self;
    if (typeof global < "u") return global;
    throw new Error("sanity: could not locate global scope");
}
const globalScope = getGlobalScope();
;
 //# sourceMappingURL=_createContext.mjs.map
}}),
"[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_singletons.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ActiveWorkspaceMatcherContext": (()=>ActiveWorkspaceMatcherContext),
    "AddonDatasetContext": (()=>AddonDatasetContext),
    "CalendarContext": (()=>CalendarContext),
    "ChangeIndicatorTrackerContextGetSnapshot": (()=>ChangeIndicatorTrackerContextGetSnapshot),
    "ChangeIndicatorTrackerContextStore": (()=>ChangeIndicatorTrackerContextStore),
    "ColorSchemeSetValueContext": (()=>ColorSchemeSetValueContext),
    "ColorSchemeValueContext": (()=>ColorSchemeValueContext),
    "CommentInputContext": (()=>CommentInputContext),
    "CommentsAuthoringPathContext": (()=>CommentsAuthoringPathContext),
    "CommentsContext": (()=>CommentsContext),
    "CommentsEnabledContext": (()=>CommentsEnabledContext),
    "CommentsIntentContext": (()=>CommentsIntentContext),
    "CommentsOnboardingContext": (()=>CommentsOnboardingContext),
    "CommentsSelectedPathContext": (()=>CommentsSelectedPathContext),
    "CommentsUpsellContext": (()=>CommentsUpsellContext),
    "ConnectorContext": (()=>ConnectorContext),
    "CopyPasteContext": (()=>CopyPasteContext),
    "DiffContext": (()=>DiffContext),
    "DocumentActionPropsContext": (()=>DocumentActionPropsContext),
    "DocumentChangeContext": (()=>DocumentChangeContext),
    "DocumentFieldActionsContext": (()=>DocumentFieldActionsContext),
    "DocumentIdContext": (()=>DocumentIdContext),
    "DocumentPaneContext": (()=>DocumentPaneContext),
    "DocumentSheetListContext": (()=>DocumentSheetListContext),
    "FieldActionsContext": (()=>FieldActionsContext),
    "FormBuilderContext": (()=>FormBuilderContext),
    "FormCallbacksContext": (()=>FormCallbacksContext),
    "FormFieldPresenceContext": (()=>FormFieldPresenceContext),
    "FormValueContext": (()=>FormValueContext),
    "FreeTrialContext": (()=>FreeTrialContext),
    "GetFormValueContext": (()=>GetFormValueContext),
    "HoveredFieldContext": (()=>HoveredFieldContext),
    "IsLastPaneContext": (()=>IsLastPaneContext),
    "LocaleContext": (()=>LocaleContext),
    "MentionUserContext": (()=>MentionUserContext),
    "NavbarContext": (()=>NavbarContext),
    "PaneContext": (()=>PaneContext),
    "PaneLayoutContext": (()=>PaneLayoutContext),
    "PaneRouterContext": (()=>PaneRouterContext),
    "PortableTextMarkersContext": (()=>PortableTextMarkersContext),
    "PortableTextMemberItemElementRefsContext": (()=>PortableTextMemberItemElementRefsContext),
    "PortableTextMemberItemsContext": (()=>PortableTextMemberItemsContext),
    "PresenceContext": (()=>PresenceContext),
    "PresenceTrackerContextGetSnapshot": (()=>PresenceTrackerContextGetSnapshot),
    "PresenceTrackerContextStore": (()=>PresenceTrackerContextStore),
    "PreviewCardContext": (()=>PreviewCardContext),
    "ReferenceInputOptionsContext": (()=>ReferenceInputOptionsContext),
    "ReferenceItemRefContext": (()=>ReferenceItemRefContext),
    "ResourceCacheContext": (()=>ResourceCacheContext),
    "ReviewChangesContext": (()=>ReviewChangesContext),
    "RouterContext": (()=>RouterContext),
    "RouterHistoryContext": (()=>RouterHistoryContext),
    "SanityCreateConfigContext": (()=>SanityCreateConfigContext),
    "SchedulePublishUpsellContext": (()=>SchedulePublishUpsellContext),
    "ScheduledPublishingEnabledContext": (()=>ScheduledPublishingEnabledContext),
    "SchedulesContext": (()=>SchedulesContext),
    "ScrollContext": (()=>ScrollContext),
    "SearchContext": (()=>SearchContext),
    "SortableItemIdContext": (()=>SortableItemIdContext),
    "SourceContext": (()=>SourceContext),
    "StructureToolContext": (()=>StructureToolContext),
    "StudioAnnouncementContext": (()=>StudioAnnouncementContext),
    "TasksContext": (()=>TasksContext),
    "TasksEnabledContext": (()=>TasksEnabledContext),
    "TasksNavigationContext": (()=>TasksNavigationContext),
    "TasksUpsellContext": (()=>TasksUpsellContext),
    "TreeEditingEnabledContext": (()=>TreeEditingEnabledContext),
    "UserColorManagerContext": (()=>UserColorManagerContext),
    "ValidationContext": (()=>ValidationContext),
    "VirtualizerScrollInstanceContext": (()=>VirtualizerScrollInstanceContext),
    "WorkspaceContext": (()=>WorkspaceContext),
    "WorkspacesContext": (()=>WorkspacesContext),
    "ZIndexContext": (()=>ZIndexContext),
    "zIndexContextDefaults": (()=>zIndexContextDefaults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_createContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$1$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$BehaviorSubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js [app-client] (ecmascript)");
;
;
const ActiveWorkspaceMatcherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/active-workspace-matcher", null), AddonDatasetContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/addon-dataset", null), CalendarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/calendar", void 0), ChangeIndicatorTrackerContextStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/change-indicator-tracker-store", null), ChangeIndicatorTrackerContextGetSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/change-indicator-tracker-get-snapshot", null), ColorSchemeSetValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/color-scheme-set-value", null), ColorSchemeValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/color-scheme-value", null), CommentInputContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comment-input", null), CommentsAuthoringPathContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-authoring-path", null), CommentsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments", null), CommentsEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-enabled", {
    enabled: !1,
    mode: null
}), CommentsIntentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-intent", void 0), CommentsOnboardingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-onboarding", null), CommentsSelectedPathContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-selected-path", null), CommentsUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-upsell", null), ConnectorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/connector", {
    isReviewChangesOpen: !1,
    onOpenReviewChanges: ()=>{},
    onSetFocus: ()=>{}
}), CopyPasteContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/copy-paste", null), DiffContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/diff", {
    path: []
}), DocumentActionPropsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-action-props", void 0), DocumentChangeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-change", null), DocumentFieldActionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-field-actions", null), DocumentIdContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-id", null), DocumentPaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-pane", null), DocumentSheetListContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-sheet-list", void 0), FieldActionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/field-actions", {
    actions: [],
    focused: !1,
    hovered: !1,
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{}
}), FormBuilderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-builder", null), FormCallbacksContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-callbacks", null), FormFieldPresenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-field-presence", []), FormValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-value", null), FreeTrialContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/free-trial", void 0), GetFormValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/get-form-value", null), HoveredFieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/hovered-field", {
    hoveredStack: [],
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{}
}), IsLastPaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/is-last-pane", !1), LocaleContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/locale", void 0), MentionUserContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/mention-user", null), NavbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/navbar", {
    onSearchFullscreenOpenChange: ()=>"",
    onSearchOpenChange: ()=>"",
    searchFullscreenOpen: !1,
    searchFullscreenPortalEl: null,
    searchOpen: !1
}), PaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane", null), PaneLayoutContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane-layout", null);
function missingContext() {
    throw new Error("Pane is missing router context");
}
const PaneRouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane-router", {
    index: 0,
    groupIndex: 0,
    siblingIndex: 0,
    payload: void 0,
    params: {},
    hasGroupSiblings: !1,
    groupLength: 0,
    routerPanesState: [],
    BackLink: ()=>missingContext(),
    ChildLink: ()=>missingContext(),
    ReferenceChildLink: ()=>missingContext(),
    handleEditReference: ()=>missingContext(),
    ParameterizedLink: ()=>missingContext(),
    replaceCurrent: ()=>missingContext(),
    closeCurrentAndAfter: ()=>missingContext(),
    closeCurrent: ()=>missingContext(),
    duplicateCurrent: ()=>missingContext(),
    setView: ()=>missingContext(),
    setParams: ()=>missingContext(),
    setPayload: ()=>missingContext(),
    navigateIntent: ()=>missingContext(),
    createPathWithParams: ()=>missingContext()
}), PortableTextMarkersContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-markers", []), PortableTextMemberItemElementRefsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-member-item-element-refs", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$1$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$BehaviorSubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BehaviorSubject"]({})), PortableTextMemberItemsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-member-items", []), PresenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence", []), PresenceTrackerContextStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence-tracker-store", null), PresenceTrackerContextGetSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence-tracker-get-snapshot", null), PreviewCardContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/preview-card", {
    selected: !1
}), ReferenceInputOptionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/reference-input-options", {}), ReferenceItemRefContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/reference-item-ref", null), ResourceCacheContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/resource-cache", null), ReviewChangesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/review-changes", null), RouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/router", null), RouterHistoryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/router-history", null), SanityCreateConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/start-in-create-enabled", {
    startInCreateEnabled: !1
}), ScheduledPublishingEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/scheduled-publishing-enabled", null), SchedulePublishUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/schedule-publish-upsell", {
    upsellData: null,
    handleOpenDialog: ()=>null,
    upsellDialogOpen: !1,
    telemetryLogs: {
        dialogSecondaryClicked: ()=>null,
        dialogPrimaryClicked: ()=>null,
        panelViewed: ()=>null,
        panelDismissed: ()=>null,
        panelPrimaryClicked: ()=>null,
        panelSecondaryClicked: ()=>null
    }
}), SchedulesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/schedules", void 0), ScrollContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/scroll", null), SearchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/search", void 0), SortableItemIdContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/sortable-item-id", null), SourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/source", null), StructureToolContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/structure-tool", null), StudioAnnouncementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/studioAnnouncements", void 0), TasksContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks", null), TasksEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-enabled", {
    enabled: !1,
    mode: null
}), TasksNavigationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-navigation", null), TasksUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-upsell", null), TreeEditingEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tree-editing-enabled", {
    enabled: !1,
    legacyEditing: !1
}), UserColorManagerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/user-color-manager", null), ValidationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/validation", []), VirtualizerScrollInstanceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/virtualizer-scroll-instance", null), WorkspaceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/workspace", null), WorkspacesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/workspaces", null), zIndexContextDefaults = {
    navbar: 200,
    navbarPopover: 5e5,
    navbarDialog: 500001,
    // pane
    pane: 100,
    paneHeader: [
        110,
        15e3
    ],
    paneFooter: [
        120,
        2e4
    ],
    paneResizer: [
        130,
        25e3
    ],
    paneDialog: [
        140,
        5e3
    ],
    //
    popover: 200,
    modal: 200,
    movingItem: 1e4,
    drawershade: 1e6,
    drawer: 1000001,
    fullscreen: 12e5,
    toast: [
        100,
        11e3
    ],
    // NOT IN USE
    portal: 200,
    dropdown: 200,
    navbarFixed: 1010,
    fullscreenEdit: 1050,
    popoverBackground: 1060,
    tooltip: 200,
    modalBackground: 2e3,
    spinner: 3e3
}, ZIndexContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/z-index", zIndexContextDefaults);
;
 //# sourceMappingURL=_singletons.mjs.map
}}),
"[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/router.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IntentLink": (()=>IntentLink),
    "Link": (()=>Link),
    "RouteScope": (()=>RouteScope),
    "RouterProvider": (()=>RouterProvider),
    "StateLink": (()=>StateLink),
    "WithRouter": (()=>WithRouter),
    "_createNode": (()=>_createNode),
    "decodeJsonParams": (()=>decodeJsonParams),
    "encodeJsonParams": (()=>encodeJsonParams),
    "route": (()=>route),
    "useIntentLink": (()=>useIntentLink),
    "useLink": (()=>useLink),
    "useRouter": (()=>useRouter),
    "useRouterState": (()=>useRouterState),
    "useStateLink": (()=>useStateLink),
    "withRouter": (()=>withRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.2_@types+node@22.10.2_@types+react@18.3.17_react-dom_5ydo4m4kut47iawfyfyzcg2twu/node_modules/sanity/lib/_singletons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-compiler-runtime@19.0.0-beta-37ed2a7-20241206_react@18.3.1/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$intersection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/intersection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/difference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js [app-client] (ecmascript)");
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
function useRouter() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"]);
    if (!router) throw new Error("Router: missing context value");
    return router;
}
function isLeftClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { onClick: onClickProp, href, target, replace: t0 } = options, replace = t0 === void 0 ? !1 : t0, { navigateUrl } = useRouter();
    let t1;
    $[0] !== href || $[1] !== navigateUrl || $[2] !== onClickProp || $[3] !== replace || $[4] !== target ? (t1 = (event)=>{
        event.isDefaultPrevented() || href && (onClickProp && onClickProp(event), !(isModifiedEvent(event) || !isLeftClickEvent(event)) && (target || (event.preventDefault(), navigateUrl({
            path: href,
            replace
        }))));
    }, $[0] = href, $[1] = navigateUrl, $[2] = onClickProp, $[3] = replace, $[4] = target, $[5] = t1) : t1 = $[5];
    const onClick = t1;
    let t2;
    return $[6] !== onClick ? (t2 = {
        onClick
    }, $[6] = onClick, $[7] = t2) : t2 = $[7], t2;
}
function useIntentLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13), { intent, onClick: onClickProp, params, replace, target, searchParams } = options, { resolveIntentLink } = useRouter();
    let t0, t1;
    $[0] !== intent || $[1] !== params || $[2] !== resolveIntentLink || $[3] !== searchParams ? (t1 = resolveIntentLink(intent, params, searchParams), $[0] = intent, $[1] = params, $[2] = resolveIntentLink, $[3] = searchParams, $[4] = t1) : t1 = $[4], t0 = t1;
    const href = t0;
    let t2;
    $[5] !== href || $[6] !== onClickProp || $[7] !== replace || $[8] !== target ? (t2 = {
        href,
        onClick: onClickProp,
        replace,
        target
    }, $[5] = href, $[6] = onClickProp, $[7] = replace, $[8] = target, $[9] = t2) : t2 = $[9];
    const { onClick } = useLink(t2);
    let t3;
    return $[10] !== href || $[11] !== onClick ? (t3 = {
        onClick,
        href
    }, $[10] = href, $[11] = onClick, $[12] = t3) : t3 = $[12], t3;
}
var __defProp$6 = Object.defineProperty, __defProps$5 = Object.defineProperties, __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$7 = Object.getOwnPropertySymbols, __hasOwnProp$7 = Object.prototype.hasOwnProperty, __propIsEnum$7 = Object.prototype.propertyIsEnumerable, __defNormalProp$6 = (obj, key, value)=>key in obj ? __defProp$6(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$6 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$7.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(b))__propIsEnum$7.call(b, prop) && __defNormalProp$6(a, prop, b[prop]);
    return a;
}, __spreadProps$5 = (a, b)=>__defProps$5(a, __getOwnPropDescs$5(b)), __objRest$4 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$7) for (var prop of __getOwnPropSymbols$7(source))exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const IntentLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    let intent, params, restProps, searchParams, target;
    $[0] !== props ? (_a = props, { intent, params, target, searchParams } = _a, restProps = __objRest$4(_a, [
        "intent",
        "params",
        "target",
        "searchParams"
    ]), $[0] = props, $[1] = intent, $[2] = params, $[3] = restProps, $[4] = searchParams, $[5] = target) : (intent = $[1], params = $[2], restProps = $[3], searchParams = $[4], target = $[5]);
    let t0;
    $[6] !== intent || $[7] !== params || $[8] !== props.onClick || $[9] !== searchParams || $[10] !== target ? (t0 = {
        intent,
        params,
        target,
        onClick: props.onClick,
        searchParams
    }, $[6] = intent, $[7] = params, $[8] = props.onClick, $[9] = searchParams, $[10] = target, $[11] = t0) : t0 = $[11];
    const { onClick, href } = useIntentLink(t0);
    let t1;
    return $[12] !== href || $[13] !== onClick || $[14] !== ref || $[15] !== restProps || $[16] !== target ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", __spreadProps$5(__spreadValues$6({}, restProps), {
        href,
        onClick,
        ref,
        target
    })), $[12] = href, $[13] = onClick, $[14] = ref, $[15] = restProps, $[16] = target, $[17] = t1) : t1 = $[17], t1;
});
var __defProp$5 = Object.defineProperty, __defProps$4 = Object.defineProperties, __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$6 = Object.getOwnPropertySymbols, __hasOwnProp$6 = Object.prototype.hasOwnProperty, __propIsEnum$6 = Object.prototype.propertyIsEnumerable, __defNormalProp$5 = (obj, key, value)=>key in obj ? __defProp$5(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$5 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$6.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(b))__propIsEnum$6.call(b, prop) && __defNormalProp$5(a, prop, b[prop]);
    return a;
}, __spreadProps$4 = (a, b)=>__defProps$4(a, __getOwnPropDescs$4(b)), __objRest$3 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$6) for (var prop of __getOwnPropSymbols$6(source))exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    let href, onClickProp, replace, restProps, target;
    $[0] !== props ? (_a = props, { onClick: onClickProp, href, target, replace } = _a, restProps = __objRest$3(_a, [
        "onClick",
        "href",
        "target",
        "replace"
    ]), $[0] = props, $[1] = href, $[2] = onClickProp, $[3] = replace, $[4] = restProps, $[5] = target) : (href = $[1], onClickProp = $[2], replace = $[3], restProps = $[4], target = $[5]);
    let t0;
    $[6] !== href || $[7] !== onClickProp || $[8] !== replace || $[9] !== target ? (t0 = {
        onClick: onClickProp,
        href,
        target,
        replace
    }, $[6] = href, $[7] = onClickProp, $[8] = replace, $[9] = target, $[10] = t0) : t0 = $[10];
    const { onClick } = useLink(t0);
    let t1;
    return $[11] !== href || $[12] !== onClick || $[13] !== ref || $[14] !== restProps || $[15] !== target ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", __spreadProps$4(__spreadValues$5({}, restProps), {
        onClick,
        href,
        target,
        ref
    })), $[11] = href, $[12] = onClick, $[13] = ref, $[14] = restProps, $[15] = target, $[16] = t1) : t1 = $[16], t1;
}), VALID_PARAM_SEGMENT = /^[a-zA-Z0-9_-]+$/;
function createSegment(segment) {
    if (!segment) return null;
    if (segment.startsWith(":")) {
        const paramName = segment.slice(1);
        if (!VALID_PARAM_SEGMENT.test(paramName)) {
            const addendum = segment.includes("*") ? " Splats are not supported. Consider using child routes instead" : "";
            console.error(new Error(`Warning: Param segments "${segment}" includes invalid characters.${addendum}`));
        }
        return {
            type: "param",
            name: paramName
        };
    }
    return {
        type: "dir",
        name: segment
    };
}
function _parseRoute(route2) {
    const [pathname] = route2.split("?"), segments = pathname.split("/").map(createSegment).filter(Boolean);
    return {
        raw: route2,
        segments
    };
}
function arrayify(val) {
    return Array.isArray(val) ? val : val ? [
        val
    ] : [];
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols, __hasOwnProp$5 = Object.prototype.hasOwnProperty, __propIsEnum$5 = Object.prototype.propertyIsEnumerable, __objRest$2 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$5) for (var prop of __getOwnPropSymbols$5(source))exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
function isRecord(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
}
function createMatchError(node, missingKeys, unmappableStateKeys) {
    return {
        type: "error",
        node,
        missingKeys,
        unmappableStateKeys
    };
}
function createMatchOk(node, matchedState, searchParams, child) {
    return {
        type: "ok",
        node,
        matchedState,
        searchParams,
        child
    };
}
function _findMatchingRoutes(node, _state) {
    if (!_state) return createMatchOk(node, {}, []);
    const _a = (node.scope ? _state[node.scope] : _state) || {}, { _searchParams: searchParams = [] } = _a, state = __objRest$2(_a, [
        "_searchParams"
    ]), requiredParams = node.route.segments.filter((seg)=>seg.type === "param").map((seg)=>seg.name), stateKeys = isRecord(state) ? Object.keys(state) : [], consumedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$intersection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stateKeys, requiredParams), missingParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requiredParams, consumedParams), remainingParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stateKeys, consumedParams);
    if (missingParams.length > 0) return createMatchError(node, missingParams, []);
    const scopedParams = searchParams.map(([key, value])=>[
            [
                key
            ],
            value
        ]), consumedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, consumedParams);
    if (remainingParams.length === 0) return createMatchOk(node, consumedState, scopedParams);
    const children = arrayify((typeof node.children == "function" ? node.children(isRecord(state) ? state : {}) : node.children) || []);
    if (remainingParams.length > 0 && children.length === 0) return createMatchError(node, [], remainingParams);
    const remainingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, remainingParams), found = children.map((childNode)=>_findMatchingRoutes(childNode, remainingState)).find((res)=>res.type === "ok");
    return found ? createMatchOk(node, consumedState, scopedParams, found) : createMatchError(node, [], remainingParams);
}
function encodeURIComponentExcept(uriComponent, unescaped) {
    const chars = [
        ...String(uriComponent)
    ];
    let res = "";
    for(let i = 0; i < chars.length; i++){
        const char = chars[i];
        unescaped.includes(char) ? res += char : res += encodeURIComponent(char);
    }
    return res;
}
const debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debug$40$4$2e$4$2e$0$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("state-router");
function _resolvePathFromState(node, _state) {
    debug("Resolving path from state %o", _state);
    const match = _findMatchingRoutes(node, _state);
    if (match.type === "error") {
        const unmappable = match.unmappableStateKeys;
        if (unmappable.length > 0) throw new Error(`Unable to find matching route for state. Could not map the following state key${unmappable.length == 1 ? "" : "s"} to a valid url: ${unmappable.map(quote).join(", ")}`);
        const missingKeys = match.missingKeys;
        throw new Error(`Unable to find matching route for state. State object is missing the following key${missingKeys.length == 1 ? "" : "s"} defined in route: ${missingKeys.map(quote).join(", ")}`);
    }
    const { path, searchParams } = pathFromMatchResult(match), search = searchParams.length > 0 ? encodeParams$1(searchParams) : "";
    return `/${path.join("/")}${search ? `?${search}` : ""}`;
}
function bracketify(value) {
    return `[${value}]`;
}
function encodeParams$1(params) {
    return params.flatMap(([key, value])=>value === void 0 ? [] : [
            encodeSearchParamKey(serializeScopedPath(key)),
            encodeSearchParamValue(value)
        ].join("=")).join("&");
}
function serializeScopedPath(scopedPath) {
    const [head, ...tail] = scopedPath;
    return tail.length > 0 ? [
        head,
        ...tail.map(bracketify)
    ].join("") : head;
}
function encodeSearchParamValue(value) {
    return encodeURIComponentExcept(value, "/");
}
function encodeSearchParamKey(value) {
    return encodeURIComponentExcept(value, "[]");
}
function pathFromMatchResult(match) {
    const matchedState = match.matchedState, base = match.node.route.segments.map((segment)=>{
        if (segment.type === "dir") return segment.name;
        const transform = match.node.transform && match.node.transform[segment.name];
        return transform ? transform.toPath(matchedState[segment.name]) : matchedState[segment.name];
    }), childMatch = match.child ? pathFromMatchResult(match.child) : void 0, searchParams = childMatch != null && childMatch.searchParams ? [
        ...match.searchParams,
        ...childMatch.searchParams
    ] : match.searchParams;
    return {
        searchParams: addNodeScope(match.node, searchParams),
        path: [
            ...base || [],
            ...(childMatch == null ? void 0 : childMatch.path) || []
        ]
    };
}
function addNodeScope(node, searchParams) {
    const scope = node.scope;
    return scope && !node.__unsafe_disableScopedSearchParams ? searchParams.map(([namespaces, value])=>[
            [
                scope,
                ...namespaces
            ],
            value
        ]) : searchParams;
}
function quote(value) {
    return `"${value}"`;
}
function parseScopedParams(params) {
    return params.map(([key, value])=>[
            parse(key),
            value
        ]);
}
const OPEN = 1, CLOSED = 0;
function parse(str) {
    const result = [];
    let i = 0, state = CLOSED;
    for(; i < str.length;){
        const nextBracketIdx = str.indexOf("[", i);
        if (nextBracketIdx === -1) {
            result.push(str.slice(i, str.length));
            break;
        }
        if (state === OPEN) throw new Error("Nested brackets not supported");
        state = OPEN, nextBracketIdx > i && (result.push(str.slice(i, nextBracketIdx)), i = nextBracketIdx);
        const nextClosing = str.indexOf("]", nextBracketIdx);
        if (nextClosing === -1) {
            if (state === OPEN) throw new Error("Unclosed bracket");
            break;
        }
        state = CLOSED, result.push(str.slice(i + 1, nextClosing)), i = nextClosing + 1;
    }
    return result;
}
var __defProp$4 = Object.defineProperty, __getOwnPropSymbols$4 = Object.getOwnPropertySymbols, __hasOwnProp$4 = Object.prototype.hasOwnProperty, __propIsEnum$4 = Object.prototype.propertyIsEnumerable, __defNormalProp$4 = (obj, key, value)=>key in obj ? __defProp$4(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$4 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4) for (var prop of __getOwnPropSymbols$4(b))__propIsEnum$4.call(b, prop) && __defNormalProp$4(a, prop, b[prop]);
    return a;
};
function matchPath(node, path, searchParams) {
    const parts = path.split("/").filter(Boolean), segmentsLength = node.route.segments.length;
    if (parts.length < segmentsLength) return null;
    const state = {};
    if (!node.route.segments.every((segment, i)=>{
        if (segment.type === "dir") return segment.name === parts[i];
        const transform = node.transform && node.transform[segment.name];
        return state[segment.name] = transform ? transform.toState(parts[i]) : parts[i], !0;
    })) return null;
    const rest = parts.slice(segmentsLength);
    let childState = null;
    const children = typeof node.children == "function" ? arrayify(node.children(state)) : node.children, unscopedParams = removeScope(node.scope, searchParams);
    if (children.some((childNode)=>{
        if (childNode) {
            const childParams = childNode.scope ? unscopedParams.filter(([namespaces])=>childNode.scope === namespaces[0]) : unscopedParams;
            return childState = matchPath(childNode, rest.join("/"), childParams), childState;
        }
    }), rest.length > 0 && !childState) return null;
    const selfParams = unscopedParams.flatMap(([namespace, value])=>namespace.length === 1 ? [
            [
                namespace[0],
                value
            ]
        ] : []), mergedState = __spreadValues$4(__spreadValues$4(__spreadValues$4({}, state), childState || {}), selfParams.length > 0 ? {
        _searchParams: selfParams
    } : {});
    return node.scope ? {
        [node.scope]: mergedState
    } : mergedState;
}
function _resolveStateFromPath(node, path) {
    debug("resolving state from path %s", path);
    const [pathname, search] = path.split("?"), urlSearchParams = Array.from(new URLSearchParams(search).entries()), pathMatch = matchPath(node, pathname, parseScopedParams(urlSearchParams));
    return debug("resolved: %o", pathMatch || null), pathMatch || null;
}
function removeScope(scope, searchParams) {
    return scope ? searchParams.map(([namespaces, value])=>[
            namespaces[0] === scope ? namespaces.slice(1) : namespaces,
            value
        ]) : searchParams;
}
function encodeBase64Url(str) {
    return encodeBase64(str).replace(/\//g, "_").replace(/\+/g, "-").replace(/[=]+$/, "");
}
function decodeBase64Url(str) {
    return decodeBase64(str.replace(/-/g, "+").replace(/_/g, "/"));
}
function percentToByte(p) {
    return String.fromCharCode(parseInt(p.slice(1), 16));
}
function encodeBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%[0-9A-F]{2}/g, percentToByte));
}
function byteToPercent(b) {
    return `%${`00${b.charCodeAt(0).toString(16)}`.slice(-2)}`;
}
function decodeBase64(str) {
    return decodeURIComponent(Array.from(atob(str), byteToPercent).join(""));
}
function decodeJsonParams(pathSegment = "") {
    const segment = decodeURIComponent(pathSegment);
    if (!segment) return {};
    try {
        return JSON.parse(decodeBase64Url(segment));
    } catch (err) {}
    try {
        return JSON.parse(atob(segment));
    } catch (err) {}
    try {
        return JSON.parse(segment);
    } catch (err) {
        console.warn("Failed to parse JSON parameters");
    }
    return {};
}
function encodeJsonParams(params) {
    return params ? encodeBase64Url(JSON.stringify(params)) : "";
}
function decodeParams(pathSegment) {
    return pathSegment.split(";").reduce((params, pair)=>{
        const [key, value] = pair.split("=");
        return params[decodeURIComponent(key)] = decodeURIComponent(value), params;
    }, {});
}
function encodeParams(params) {
    return Object.entries(params).filter(([, value])=>value != null).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join(";");
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
const route = {
    create: (routeOrOpts, childrenOrOpts, children)=>_createNode(normalizeArgs(routeOrOpts, childrenOrOpts, children)),
    intents: (base)=>{
        const basePath = normalize(base).join("/");
        return route.create(`${basePath}/:intent`, [
            route.create(":params", {
                transform: {
                    params: {
                        toState: decodeParams,
                        toPath: encodeParams
                    }
                }
            }, [
                route.create(":payload", {
                    transform: {
                        payload: {
                            toState: decodeJsonParams,
                            toPath: encodeJsonParams
                        }
                    }
                })
            ])
        ]);
    },
    scope (scopeName, routeOrOpts, childrenOrOpts, children) {
        const options = normalizeArgs(routeOrOpts, childrenOrOpts, children);
        return _createNode(__spreadProps$3(__spreadValues$3({}, options), {
            scope: scopeName
        }));
    }
};
function normalizeChildren(children) {
    return Array.isArray(children) || typeof children == "function" ? children : children ? [
        children
    ] : [];
}
function isRoute(val) {
    return val && "_isRoute" in val;
}
function normalizeArgs(path, childrenOrOpts, children) {
    return typeof path == "object" ? path : Array.isArray(childrenOrOpts) || typeof childrenOrOpts == "function" || isRoute(childrenOrOpts) ? {
        path,
        children: normalizeChildren(childrenOrOpts)
    } : children ? __spreadProps$3(__spreadValues$3({
        path
    }, childrenOrOpts), {
        children: normalizeChildren(children)
    }) : __spreadValues$3({
        path
    }, childrenOrOpts);
}
function normalize(...paths) {
    return paths.reduce((acc, path)=>acc.concat(path.split("/")), []).filter(Boolean);
}
const EMPTY_STATE$1 = {};
function isRoot(pathname) {
    return pathname.split("/").every((segment)=>!segment);
}
function _createNode(options) {
    const { path, scope, transform, children, __unsafe_disableScopedSearchParams } = options;
    if (!path) throw new TypeError("Missing path");
    const parsedRoute = _parseRoute(path);
    return {
        _isRoute: !0,
        // todo: make a Router class instead
        scope,
        // eslint-disable-next-line camelcase
        __unsafe_disableScopedSearchParams,
        route: parsedRoute,
        children: children || [],
        transform,
        encode (state) {
            return _resolvePathFromState(this, state);
        },
        decode (_path) {
            return _resolveStateFromPath(this, _path);
        },
        isRoot,
        isNotFound (pathname) {
            return this.decode(pathname) === null;
        },
        getBasePath () {
            return this.encode(EMPTY_STATE$1);
        },
        getRedirectBase (pathname) {
            if (isRoot(pathname)) {
                const basePath = this.getBasePath();
                if (pathname !== basePath) return basePath;
            }
            return null;
        }
    };
}
function RouterProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20), { onNavigate, router: routerProp, state } = props;
    let t0;
    $[0] !== routerProp ? (t0 = (intentName, parameters, _searchParams)=>{
        const [params, payload] = Array.isArray(parameters) ? parameters : [
            parameters
        ];
        return routerProp.encode({
            intent: intentName,
            params,
            payload,
            _searchParams
        });
    }, $[0] = routerProp, $[1] = t0) : t0 = $[1];
    const resolveIntentLink = t0;
    let t1;
    $[2] !== routerProp ? (t1 = (nextState)=>routerProp.encode(nextState), $[2] = routerProp, $[3] = t1) : t1 = $[3];
    const resolvePathFromState = t1;
    let t2;
    $[4] !== onNavigate || $[5] !== resolvePathFromState ? (t2 = (nextState_0, t32)=>{
        const options = t32 === void 0 ? {} : t32;
        onNavigate({
            path: resolvePathFromState(nextState_0),
            replace: options.replace
        });
    }, $[4] = onNavigate, $[5] = resolvePathFromState, $[6] = t2) : t2 = $[6];
    const navigate = t2;
    let t3;
    $[7] !== onNavigate || $[8] !== resolveIntentLink ? (t3 = (intentName_0, params_0, t42)=>{
        const options_0 = t42 === void 0 ? {} : t42;
        onNavigate({
            path: resolveIntentLink(intentName_0, params_0),
            replace: options_0.replace
        });
    }, $[7] = onNavigate, $[8] = resolveIntentLink, $[9] = t3) : t3 = $[9];
    const navigateIntent = t3;
    let t4, t5;
    $[10] !== navigate || $[11] !== navigateIntent || $[12] !== onNavigate || $[13] !== resolveIntentLink || $[14] !== resolvePathFromState || $[15] !== state ? (t5 = {
        navigate,
        navigateIntent,
        navigateUrl: onNavigate,
        resolveIntentLink,
        resolvePathFromState,
        state
    }, $[10] = navigate, $[11] = navigateIntent, $[12] = onNavigate, $[13] = resolveIntentLink, $[14] = resolvePathFromState, $[15] = state, $[16] = t5) : t5 = $[16], t4 = t5;
    const router = t4;
    let t6;
    return $[17] !== props.children || $[18] !== router ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"].Provider, {
        value: router,
        children: props.children
    }), $[17] = props.children, $[18] = router, $[19] = t6) : t6 = $[19], t6;
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
}, __spreadProps$2 = (a, b)=>__defProps$2(a, __getOwnPropDescs$2(b)), __objRest$1 = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(source))exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
function addScope(routerState, scope, scopedState) {
    return scopedState && __spreadProps$2(__spreadValues$2({}, routerState), {
        [scope]: scopedState
    });
}
function RouteScope(props) {
    const { children, scope, __unsafe_disableScopedSearchParams } = props, parentRouter = useRouter(), { resolvePathFromState: parent_resolvePathFromState, navigate: parent_navigate } = parentRouter, parentStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(parentRouter.state);
    parentStateRef.current = parentRouter.state;
    const resolveNextParentState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteScope.useCallback[resolveNextParentState]": (_nextState)=>{
            const _a = _nextState, { _searchParams } = _a, nextState = __objRest$1(_a, [
                "_searchParams"
            ]), nextParentState = addScope(parentStateRef.current, scope, nextState);
            return __unsafe_disableScopedSearchParams ? nextParentState._searchParams = _searchParams : nextParentState[scope]._searchParams = _searchParams, nextParentState;
        }
    }["RouteScope.useCallback[resolveNextParentState]"], [
        scope,
        __unsafe_disableScopedSearchParams
    ]), resolvePathFromState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteScope.useCallback[resolvePathFromState]": (nextState_0)=>parent_resolvePathFromState(resolveNextParentState(nextState_0))
    }["RouteScope.useCallback[resolvePathFromState]"], [
        parent_resolvePathFromState,
        resolveNextParentState
    ]), navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RouteScope.useCallback[navigate]": (nextState_1, options)=>parent_navigate(resolveNextParentState(nextState_1), options)
    }["RouteScope.useCallback[navigate]"], [
        parent_navigate,
        resolveNextParentState
    ]), childRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RouteScope.useMemo[childRouter]": ()=>{
            const parentState = parentRouter.state, childState = __spreadValues$2({}, parentState[scope] || {});
            return __unsafe_disableScopedSearchParams && (childState._searchParams = parentState._searchParams), __spreadProps$2(__spreadValues$2({}, parentRouter), {
                navigate,
                resolvePathFromState,
                state: childState
            });
        }
    }["RouteScope.useMemo[childRouter]"], [
        scope,
        parentRouter,
        navigate,
        resolvePathFromState,
        __unsafe_disableScopedSearchParams
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanity$40$3$2e$67$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$types$2b$node$40$22$2e$10$2e$2_$40$types$2b$react$40$18$2e$3$2e$17_react$2d$dom_5ydo4m4kut47iawfyfyzcg2twu$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"].Provider, {
        value: childRouter,
        children
    });
}
const EMPTY_STATE = {};
function useStateLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { onClick: onClickProp, replace, state, target, toIndex: t0 } = options, toIndex = t0 === void 0 ? !1 : t0;
    if (state && toIndex) throw new Error("Passing both `state` and `toIndex={true}` as props to StateLink is invalid");
    !state && !toIndex && console.error(new Error("No state passed to StateLink. If you want to link to an empty state, its better to use the the `toIndex` property"));
    const { resolvePathFromState } = useRouter();
    let t1;
    const t2 = toIndex ? EMPTY_STATE : state || EMPTY_STATE;
    let t3;
    $[0] !== resolvePathFromState || $[1] !== t2 ? (t3 = resolvePathFromState(t2), $[0] = resolvePathFromState, $[1] = t2, $[2] = t3) : t3 = $[2], t1 = t3;
    const href = t1;
    let t4;
    $[3] !== href || $[4] !== onClickProp || $[5] !== replace || $[6] !== target ? (t4 = {
        href,
        onClick: onClickProp,
        replace,
        target
    }, $[3] = href, $[4] = onClickProp, $[5] = replace, $[6] = target, $[7] = t4) : t4 = $[7];
    const { onClick } = useLink(t4);
    let t5;
    return $[8] !== href || $[9] !== onClick ? (t5 = {
        onClick,
        href
    }, $[8] = href, $[9] = onClick, $[10] = t5) : t5 = $[10], t5;
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
}, __spreadProps$1 = (a, b)=>__defProps$1(a, __getOwnPropDescs$1(b)), __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
    if (source != null && __getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(source))exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop) && (target[prop] = source[prop]);
    return target;
};
const StateLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var _a;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    let onClickProp, replace, restProps, state, t0, target;
    $[0] !== props ? (_a = props, { onClick: onClickProp, replace, state, target, toIndex: t0 } = _a, restProps = __objRest(_a, [
        "onClick",
        "replace",
        "state",
        "target",
        "toIndex"
    ]), $[0] = props, $[1] = onClickProp, $[2] = replace, $[3] = restProps, $[4] = state, $[5] = t0, $[6] = target) : (onClickProp = $[1], replace = $[2], restProps = $[3], state = $[4], t0 = $[5], target = $[6]);
    const toIndex = t0 === void 0 ? !1 : t0;
    let t1;
    $[7] !== onClickProp || $[8] !== replace || $[9] !== state || $[10] !== target || $[11] !== toIndex ? (t1 = {
        onClick: onClickProp,
        replace,
        state,
        target,
        toIndex
    }, $[7] = onClickProp, $[8] = replace, $[9] = state, $[10] = target, $[11] = toIndex, $[12] = t1) : t1 = $[12];
    const { onClick, href } = useStateLink(t1);
    let t2;
    return $[13] !== href || $[14] !== onClick || $[15] !== ref || $[16] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", __spreadProps$1(__spreadValues$1({}, restProps), {
        href,
        onClick,
        ref
    })), $[13] = href, $[14] = onClick, $[15] = ref, $[16] = restProps, $[17] = t2) : t2 = $[17], t2;
});
function useRouterState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), selector = t0 === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : t0, { state } = useRouter();
    let t1, t2;
    return $[0] !== selector || $[1] !== state ? (t2 = selector(state), $[0] = selector, $[1] = state, $[2] = t2) : t2 = $[2], t1 = t2, t1;
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
function withRouter(Component) {
    function WithRouter2(props) {
        const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$0$2e$0$2d$beta$2d$37ed2a7$2d$20241206_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), router = useRouter(), t0 = props;
        let t1;
        return $[0] !== router || $[1] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, __spreadProps(__spreadValues({}, t0), {
            router
        })), $[0] = router, $[1] = t0, $[2] = t1) : t1 = $[2], t1;
    }
    return WithRouter2.displayName = `withRouter(${Component.displayName || Component.name})`, WithRouter2;
}
const WithRouter = withRouter((props)=>props.children(props.router));
;
 //# sourceMappingURL=router.mjs.map
}}),
}]);

//# sourceMappingURL=dfc76_sanity_lib_263101._.js.map