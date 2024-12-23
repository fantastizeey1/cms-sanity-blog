module.exports = {

"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/transports/fetch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "makeFetchTransport": (()=>makeFetchTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry-internal+browser-utils@8.46.0/node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$transports$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/transports/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-ssr] (ecmascript)");
;
;
/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */ function makeFetchTransport(options, nativeFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeImplementation"])('fetch')) {
    let pendingBodySize = 0;
    let pendingCount = 0;
    function makeRequest(request) {
        const requestSize = request.body.length;
        pendingBodySize += requestSize;
        pendingCount++;
        const requestOptions = {
            body: request.body,
            method: 'POST',
            referrerPolicy: 'origin',
            headers: options.headers,
            // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
            // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
            // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
            // frequently sending events right before the user is switching pages (eg. when finishing navigation transactions).
            // Gotchas:
            // - `keepalive` isn't supported by Firefox
            // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
            //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
            //   We will therefore only activate the flag when we're below that limit.
            // There is also a limit of requests that can be open at the same time, so we also limit this to 15
            // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
            keepalive: pendingBodySize <= 60000 && pendingCount < 15,
            ...options.fetchOptions
        };
        if (!nativeFetch) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCachedImplementation"])('fetch');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])('No fetch implementation available');
        }
        try {
            // TODO: This may need a `suppressTracing` call in the future when we switch the browser SDK to OTEL
            return nativeFetch(options.url, requestOptions).then((response)=>{
                pendingBodySize -= requestSize;
                pendingCount--;
                return {
                    statusCode: response.status,
                    headers: {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After')
                    }
                };
            });
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCachedImplementation"])('fetch');
            pendingBodySize -= requestSize;
            pendingCount--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])(e);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$transports$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])(options, makeRequest);
}
;
 //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WINDOW": (()=>WINDOW),
    "ignoreNextOnError": (()=>ignoreNextOnError),
    "shouldIgnoreOnError": (()=>shouldIgnoreOnError),
    "wrap": (()=>wrap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/exports.js [app-ssr] (ecmascript)");
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
let ignoreOnError = 0;
/**
 * @hidden
 */ function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */ function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError++;
    setTimeout(()=>{
        ignoreOnError--;
    });
}
// eslint-disable-next-line @typescript-eslint/ban-types
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */ function wrap(fn, options = {}) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    function isFunction(fn) {
        return typeof fn === 'function';
    }
    if (!isFunction(fn)) {
        return fn;
    }
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        const wrapper = fn.__sentry_wrapped__;
        if (wrapper) {
            if (typeof wrapper === 'function') {
                return wrapper;
            } else {
                // If we find that the `__sentry_wrapped__` function is not a function at the time of accessing it, it means
                // that something messed with it. In that case we want to return the originally passed function.
                return fn;
            }
        }
        // We don't wanna wrap it twice
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOriginalFunction"])(fn)) {
            return fn;
        }
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    // Wrap the function itself
    // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
    const sentryWrapped = function(...args) {
        try {
            // Also wrap arguments that are themselves functions
            const wrappedArguments = args.map((arg)=>wrap(arg, options));
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        } catch (ex) {
            ignoreNextOnError();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
                scope.addEventProcessor((event)=>{
                    if (options.mechanism) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, undefined, undefined);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, options.mechanism);
                    }
                    event.extra = {
                        ...event.extra,
                        arguments: args
                    };
                    return event;
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureException"])(ex);
            });
            throw ex;
        }
    };
    // Wrap the wrapped function in a proxy, to ensure any other properties of the original function remain available
    try {
        for(const property in fn){
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    } catch (e2) {
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    }
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markFunctionWrapped"])(sentryWrapped, fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(fn, '__sentry_wrapped__', sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get () {
                    return fn.name;
                }
            });
        }
    } catch (e3) {
    // This may throw if e.g. the descriptor does not exist, or a browser does not allow redefining `name`.
    // to save some bytes we simply try-catch this
    }
    return sentryWrapped;
}
;
 //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "browserApiErrorsIntegration": (()=>browserApiErrorsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-ssr] (ecmascript)");
;
;
const DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'BroadcastChannel',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'SharedWorker',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload'
];
const INTEGRATION_NAME = 'BrowserApiErrors';
const _browserApiErrorsIntegration = (options = {})=>{
    const _options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        // TODO: This currently only works for the first client this is setup
        // We may want to adjust this to check for client etc.
        setupOnce () {
            if (_options.setTimeout) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"], 'setTimeout', _wrapTimeFunction);
            }
            if (_options.setInterval) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"], 'setInterval', _wrapTimeFunction);
            }
            if (_options.requestAnimationFrame) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"], 'requestAnimationFrame', _wrapRAF);
            }
            if (_options.XMLHttpRequest && 'XMLHttpRequest' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(XMLHttpRequest.prototype, 'send', _wrapXHR);
            }
            const eventTargetOption = _options.eventTarget;
            if (eventTargetOption) {
                const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
                eventTarget.forEach(_wrapEventTarget);
            }
        }
    };
};
/**
 * Wrap timer functions and event targets to catch errors and provide better meta data.
 */ const browserApiErrorsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
    return function(...args) {
        const originalCallback = args[0];
        args[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(originalCallback, {
            mechanism: {
                data: {
                    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                },
                handled: false,
                type: 'instrument'
            }
        });
        return original.apply(this, args);
    };
}
function _wrapRAF(original) {
    return function(callback) {
        return original.apply(this, [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                    },
                    handled: false,
                    type: 'instrument'
                }
            })
        ]);
    };
}
function _wrapXHR(originalSend) {
    return function(...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const xhr = this;
        const xmlHttpRequestProps = [
            'onload',
            'onerror',
            'onprogress',
            'onreadystatechange'
        ];
        xmlHttpRequestProps.forEach((prop)=>{
            if (prop in xhr && typeof xhr[prop] === 'function') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(xhr, prop, function(original) {
                    const wrapOptions = {
                        mechanism: {
                            data: {
                                function: prop,
                                handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                            },
                            handled: false,
                            type: 'instrument'
                        }
                    };
                    // If Instrument integration has been called before BrowserApiErrors, get the name of original function
                    const originalFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOriginalFunction"])(original);
                    if (originalFunction) {
                        wrapOptions.mechanism.data.handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(originalFunction);
                    }
                    // Otherwise wrap directly
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(original, wrapOptions);
                });
            }
        });
        return originalSend.apply(this, args);
    };
}
function _wrapEventTarget(target) {
    const globalObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"];
    const targetObj = globalObject[target];
    const proto = targetObj && targetObj.prototype;
    // eslint-disable-next-line no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(proto, 'addEventListener', function(original) {
        return function(eventName, fn, options) {
            try {
                if (isEventListenerObject(fn)) {
                    // ESlint disable explanation:
                    //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
                    //  introduce a bug here, because bind returns a new function that doesn't have our
                    //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
                    //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    fn.handleEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(fn.handleEvent, {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(fn),
                                target
                            },
                            handled: false,
                            type: 'instrument'
                        }
                    });
                }
            } catch (e2) {
            // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.apply(this, [
                eventName,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(fn),
                            target
                        },
                        handled: false,
                        type: 'instrument'
                    }
                }),
                options
            ]);
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"])(proto, 'removeEventListener', function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
            /**
       * There are 2 possible scenarios here:
       *
       * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
       * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
       * as a pass-through, and call original `removeEventListener` with it.
       *
       * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
       * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
       * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
       * in order for us to make a distinction between wrapped/non-wrapped functions possible.
       * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
       *
       * When someone adds a handler prior to initialization, and then do it again, but after,
       * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
       * to get rid of the initial handler and it'd stick there forever.
       */ try {
                const originalEventHandler = fn.__sentry_wrapped__;
                if (originalEventHandler) {
                    originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                }
            } catch (e) {
            // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, fn, options);
        };
    });
}
function isEventListenerObject(obj) {
    return typeof obj.handleEvent === 'function';
}
;
 //# sourceMappingURL=browserapierrors.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ __turbopack_esm__({
    "DEBUG_BUILD": (()=>DEBUG_BUILD)
});
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
 //# sourceMappingURL=debug-build.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "breadcrumbsIntegration": (()=>breadcrumbsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$console$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry-internal+browser-utils@8.46.0/node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry-internal+browser-utils@8.46.0/node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry-internal+browser-utils@8.46.0/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/breadcrumbs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$severity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/severity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
;
;
;
;
/* eslint-disable max-lines */ /** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */ const MAX_ALLOWED_STRING_LENGTH = 1024;
const INTEGRATION_NAME = 'Breadcrumbs';
const _breadcrumbsIntegration = (options = {})=>{
    const _options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            if (_options.console) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$console$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addConsoleInstrumentationHandler"])(_getConsoleBreadcrumbHandler(client));
            }
            if (_options.dom) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addClickKeypressInstrumentationHandler"])(_getDomBreadcrumbHandler(client, _options.dom));
            }
            if (_options.xhr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addXhrInstrumentationHandler"])(_getXhrBreadcrumbHandler(client));
            }
            if (_options.fetch) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addFetchInstrumentationHandler"])(_getFetchBreadcrumbHandler(client));
            }
            if (_options.history) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addHistoryInstrumentationHandler"])(_getHistoryBreadcrumbHandler(client));
            }
            if (_options.sentry) {
                client.on('beforeSendEvent', _getSentryBreadcrumbHandler(client));
            }
        }
    };
};
const breadcrumbsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(_breadcrumbsIntegration);
/**
 * Adds a breadcrumb for Sentry events or transactions if this option is enabled.
 */ function _getSentryBreadcrumbHandler(client) {
    return function addSentryBreadcrumb(event) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: `sentry.${event.type === 'transaction' ? 'transaction' : 'event'}`,
            event_id: event.event_id,
            level: event.level,
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventDescription"])(event)
        }, {
            event
        });
    };
}
/**
 * A HOC that creates a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */ function _getDomBreadcrumbHandler(client, dom) {
    return function _innerDomBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        let target;
        let componentName;
        let keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;
        let maxStringLength = typeof dom === 'object' && typeof dom.maxStringLength === 'number' ? dom.maxStringLength : undefined;
        if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn(`\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`);
            maxStringLength = MAX_ALLOWED_STRING_LENGTH;
        }
        if (typeof keyAttrs === 'string') {
            keyAttrs = [
                keyAttrs
            ];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            const event = handlerData.event;
            const element = _isEvent(event) ? event.target : event;
            target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(element, {
                keyAttrs,
                maxStringLength
            });
            componentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComponentName"])(element);
        } catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        const breadcrumb = {
            category: `ui.${handlerData.name}`,
            message: target
        };
        if (componentName) {
            breadcrumb.data = {
                'ui.component_name': componentName
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global
        });
    };
}
/**
 * Creates breadcrumbs from console API calls
 */ function _getConsoleBreadcrumbHandler(client) {
    return function _consoleBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console'
            },
            level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$severity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["severityLevelFromString"])(handlerData.level),
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJoin"])(handlerData.args, ' ')
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = `Assertion failed: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert'}`;
                breadcrumb.data.arguments = handlerData.args.slice(1);
            } else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level
        });
    };
}
/**
 * Creates breadcrumbs from XHR API calls
 */ function _getXhrBreadcrumbHandler(client) {
    return function _xhrBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const { startTimestamp, endTimestamp } = handlerData;
        const sentryXhrData = handlerData.xhr[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SENTRY_XHR_DATA_KEY"]];
        // We only capture complete, non-sentry requests
        if (!startTimestamp || !endTimestamp || !sentryXhrData) {
            return;
        }
        const { method, url, status_code, body } = sentryXhrData;
        const data = {
            method,
            url,
            status_code
        };
        const hint = {
            xhr: handlerData.xhr,
            input: body,
            startTimestamp,
            endTimestamp
        };
        const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreadcrumbLogLevelFromHttpStatusCode"])(status_code);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: 'xhr',
            data,
            type: 'http',
            level
        }, hint);
    };
}
/**
 * Creates breadcrumbs from fetch API calls
 */ function _getFetchBreadcrumbHandler(client) {
    return function _fetchBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const { startTimestamp, endTimestamp } = handlerData;
        // We only capture complete fetch requests
        if (!endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        if (handlerData.error) {
            const data = handlerData.fetchData;
            const hint = {
                data: handlerData.error,
                input: handlerData.args,
                startTimestamp,
                endTimestamp
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
                category: 'fetch',
                data,
                level: 'error',
                type: 'http'
            }, hint);
        } else {
            const response = handlerData.response;
            const data = {
                ...handlerData.fetchData,
                status_code: response && response.status
            };
            const hint = {
                input: handlerData.args,
                response,
                startTimestamp,
                endTimestamp
            };
            const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreadcrumbLogLevelFromHttpStatusCode"])(data.status_code);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
                category: 'fetch',
                data,
                type: 'http',
                level
            }, hint);
        }
    };
}
/**
 * Creates breadcrumbs from history API calls
 */ function _getHistoryBreadcrumbHandler(client) {
    return function _historyBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        let from = handlerData.from;
        let to = handlerData.to;
        const parsedLoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location.href);
        let parsedFrom = from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUrl"])(from) : undefined;
        const parsedTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUrl"])(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom || !parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: 'navigation',
            data: {
                from,
                to
            }
        });
    };
}
function _isEvent(event) {
    return !!event && !!event.target;
}
;
 //# sourceMappingURL=breadcrumbs.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "eventFromException": (()=>eventFromException),
    "eventFromMessage": (()=>eventFromMessage),
    "eventFromUnknownInput": (()=>eventFromUnknownInput),
    "exceptionFromError": (()=>exceptionFromError),
    "extractMessage": (()=>extractMessage),
    "extractType": (()=>extractType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-ssr] (ecmascript)");
;
/**
 * This function creates an exception from a JavaScript Error
 */ function exceptionFromError(stackParser, ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    const frames = parseStackFrames(stackParser, ex);
    const exception = {
        type: extractType(ex),
        value: extractMessage(ex)
    };
    if (frames.length) {
        exception.stacktrace = {
            frames
        };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])();
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    // If we can, we extract an exception from the object properties
    const errorFromProp = getErrorPropertyFromObject(exception);
    const extra = {
        __serialized__: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToSize"])(exception, normalizeDepth)
    };
    if (errorFromProp) {
        return {
            exception: {
                values: [
                    exceptionFromError(stackParser, errorFromProp)
                ]
            },
            extra
        };
    }
    const event = {
        exception: {
            values: [
                {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEvent"])(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
                    value: getNonErrorObjectExceptionValue(exception, {
                        isUnhandledRejection
                    })
                }
            ]
        },
        extra
    };
    if (syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
            // event.exception.values[0] has been set above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            event.exception.values[0].stacktrace = {
                frames
            };
        }
    }
    return event;
}
function eventFromError(stackParser, ex) {
    return {
        exception: {
            values: [
                exceptionFromError(stackParser, ex)
            ]
        }
    };
}
/** Parses stack frames from an error */ function parseStackFrames(stackParser, ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    const stacktrace = ex.stacktrace || ex.stack || '';
    const skipLines = getSkipFirstStackStringLines(ex);
    const framesToPop = getPopFirstTopFrames(ex);
    try {
        return stackParser(stacktrace, skipLines, framesToPop);
    } catch (e) {
    // no-empty
    }
    return [];
}
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
const reactMinifiedRegexp = /Minified React error #\d+;/i;
/**
 * Certain known React errors contain links that would be falsely
 * parsed as frames. This function check for these errors and
 * returns number of the stack string lines to skip.
 */ function getSkipFirstStackStringLines(ex) {
    if (ex && reactMinifiedRegexp.test(ex.message)) {
        return 1;
    }
    return 0;
}
/**
 * If error has `framesToPop` property, it means that the
 * creator tells us the first x frames will be useless
 * and should be discarded. Typically error from wrapper function
 * which don't point to the actual location in the developer's code.
 *
 * Example: https://github.com/zertosh/invariant/blob/master/invariant.js#L46
 */ function getPopFirstTopFrames(ex) {
    if (typeof ex.framesToPop === 'number') {
        return ex.framesToPop;
    }
    return 0;
}
// https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Exception
// @ts-expect-error - WebAssembly.Exception is a valid class
function isWebAssemblyException(exception) {
    // Check for support
    // @ts-expect-error - WebAssembly.Exception is a valid class
    if (typeof WebAssembly !== 'undefined' && typeof WebAssembly.Exception !== 'undefined') {
        // @ts-expect-error - WebAssembly.Exception is a valid class
        return exception instanceof WebAssembly.Exception;
    } else {
        return false;
    }
}
/**
 * Extracts from errors what we use as the exception `type` in error events.
 *
 * Usually, this is the `name` property on Error objects but WASM errors need to be treated differently.
 */ function extractType(ex) {
    const name = ex && ex.name;
    // The name for WebAssembly.Exception Errors needs to be extracted differently.
    // Context: https://github.com/getsentry/sentry-javascript/issues/13787
    if (!name && isWebAssemblyException(ex)) {
        // Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
        const hasTypeInMessage = ex.message && Array.isArray(ex.message) && ex.message.length == 2;
        return hasTypeInMessage ? ex.message[0] : 'WebAssembly.Exception';
    }
    return name;
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */ function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    // Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
    if (isWebAssemblyException(ex) && Array.isArray(ex.message) && ex.message.length == 2) {
        return ex.message[1];
    }
    return message;
}
/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */ function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || undefined;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event); // defaults to { type: 'generic', handled: true }
    event.level = 'error';
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */ function eventFromMessage(stackParser, message, level = 'info', hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || undefined;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(event);
}
/**
 * @hidden
 */ function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErrorEvent"])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        const errorEvent = exception;
        return eventFromError(stackParser, errorEvent.error);
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOMError"])(exception) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOMException"])(exception)) {
        const domException = exception;
        if ('stack' in exception) {
            event = eventFromError(stackParser, exception);
        } else {
            const name = domException.name || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
            const message = domException.message ? `${name}: ${domException.message}` : name;
            event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, message);
        }
        if ('code' in domException) {
            // eslint-disable-next-line deprecation/deprecation
            event.tags = {
                ...event.tags,
                'DOMException.code': `${domException.code}`
            };
        }
        return event;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isError"])(exception)) {
        // we have a real Error object, do nothing
        return eventFromError(stackParser, exception);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(exception) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEvent"])(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        const objectException = exception;
        event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
            synthetic: true
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, `${exception}`, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
        synthetic: true
    });
    return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
    const event = {};
    if (attachStacktrace && syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
            event.exception = {
                values: [
                    {
                        value: message,
                        stacktrace: {
                            frames
                        }
                    }
                ]
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
            synthetic: true
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isParameterizedString"])(message)) {
        const { __sentry_template_string__, __sentry_template_values__ } = message;
        event.logentry = {
            message: __sentry_template_string__,
            params: __sentry_template_values__
        };
        return event;
    }
    event.message = message;
    return event;
}
function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractExceptionKeysForMessage"])(exception);
    const captureType = isUnhandledRejection ? 'promise rejection' : 'exception';
    // Some ErrorEvent instances do not have an `error` property, which is why they are not handled before
    // We still want to try to get a decent message for these cases
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErrorEvent"])(exception)) {
        return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEvent"])(exception)) {
        const className = getObjectClassName(exception);
        return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
    }
    return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
    try {
        const prototype = Object.getPrototypeOf(obj);
        return prototype ? prototype.constructor.name : undefined;
    } catch (e) {
    // ignore errors here
    }
}
/** If a plain object has a property that is an `Error`, return this error. */ function getErrorPropertyFromObject(obj) {
    for(const prop in obj){
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            const value = obj[prop];
            if (value instanceof Error) {
                return value;
            }
        }
    }
    return undefined;
}
;
 //# sourceMappingURL=eventbuilder.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "globalHandlersIntegration": (()=>globalHandlersIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-ssr] (ecmascript)");
;
;
;
;
const INTEGRATION_NAME = 'GlobalHandlers';
const _globalHandlersIntegration = (options = {})=>{
    const _options = {
        onerror: true,
        onunhandledrejection: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            Error.stackTraceLimit = 50;
        },
        setup (client) {
            if (_options.onerror) {
                _installGlobalOnErrorHandler(client);
                globalHandlerLog('onerror');
            }
            if (_options.onunhandledrejection) {
                _installGlobalOnUnhandledRejectionHandler(client);
                globalHandlerLog('onunhandledrejection');
            }
        }
    };
};
const globalHandlersIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addGlobalErrorInstrumentationHandler"])((data)=>{
        const { stackParser, attachStacktrace } = getOptions();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldIgnoreOnError"])()) {
            return;
        }
        const { msg, url, line, column, error } = data;
        const event = _enhanceEventWithInitialFrame((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFromUnknownInput"])(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
        event.level = 'error';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureEvent"])(event, {
            originalException: error,
            mechanism: {
                handled: false,
                type: 'onerror'
            }
        });
    });
}
function _installGlobalOnUnhandledRejectionHandler(client) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addGlobalUnhandledRejectionInstrumentationHandler"])((e)=>{
        const { stackParser, attachStacktrace } = getOptions();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])() !== client || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldIgnoreOnError"])()) {
            return;
        }
        const error = _getUnhandledRejectionError(e);
        const event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitive"])(error) ? _eventFromRejectionWithPrimitive(error) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFromUnknownInput"])(stackParser, error, undefined, attachStacktrace, true);
        event.level = 'error';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureEvent"])(event, {
            originalException: error,
            mechanism: {
                handled: false,
                type: 'onunhandledrejection'
            }
        });
    });
}
function _getUnhandledRejectionError(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitive"])(error)) {
        return error;
    }
    // dig the object of the rejection out of known event types
    try {
        // PromiseRejectionEvents store the object of the rejection under 'reason'
        // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
        if ('reason' in error) {
            return error.reason;
        }
        // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
        // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
        // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
        // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
        // https://github.com/getsentry/sentry-javascript/issues/2380
        if ('detail' in error && 'reason' in error.detail) {
            return error.detail.reason;
        }
    } catch (e2) {} // eslint-disable-line no-empty
    return error;
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */ function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: 'UnhandledRejection',
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: `Non-Error promise rejection captured with value: ${String(reason)}`
                }
            ]
        }
    };
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    const e = event.exception = event.exception || {};
    // event.exception.values
    const ev = e.values = e.values || [];
    // event.exception.values[0]
    const ev0 = ev[0] = ev[0] || {};
    // event.exception.values[0].stacktrace
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    // event.exception.values[0].stacktrace.frames
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = column;
    const lineno = line;
    const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(url) && url.length > 0 ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocationHref"])();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) {
        ev0sf.push({
            colno,
            filename,
            function: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"],
            in_app: true,
            lineno
        });
    }
    return event;
}
function globalHandlerLog(type) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].log(`Global Handler attached: ${type}`);
}
function getOptions() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])();
    const options = client && client.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: false
    };
    return options;
}
;
 //# sourceMappingURL=globalhandlers.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "linkedErrorsIntegration": (()=>linkedErrorsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$aggregate$2d$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
;
;
const DEFAULT_KEY = 'cause';
const DEFAULT_LIMIT = 5;
const INTEGRATION_NAME = 'LinkedErrors';
const _linkedErrorsIntegration = (options = {})=>{
    const limit = options.limit || DEFAULT_LIMIT;
    const key = options.key || DEFAULT_KEY;
    return {
        name: INTEGRATION_NAME,
        preprocessEvent (event, hint, client) {
            const options = client.getOptions();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$aggregate$2d$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyAggregateErrorsToEvent"])(// This differs from the LinkedErrors integration in core by using a different exceptionFromError function
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exceptionFromError"], options.stackParser, options.maxValueLength, key, limit, event, hint);
        }
    };
};
/**
 * Aggregrate linked errors in an event.
 */ const linkedErrorsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(_linkedErrorsIntegration);
;
 //# sourceMappingURL=linkederrors.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "httpContextIntegration": (()=>httpContextIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
;
;
/**
 * Collects information about HTTP request headers and
 * attaches them to the event.
 */ const httpContextIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(()=>{
    return {
        name: 'HttpContext',
        preprocessEvent (event) {
            // if none of the information we want exists, don't bother
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].navigator && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document) {
                return;
            }
            // grab as much info as exists and add it to the event
            const url = event.request && event.request.url || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location.href;
            const { referrer } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document || {};
            const { userAgent } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].navigator || {};
            const headers = {
                ...event.request && event.request.headers,
                ...referrer && {
                    Referer: referrer
                },
                ...userAgent && {
                    'User-Agent': userAgent
                }
            };
            const request = {
                ...event.request,
                ...url && {
                    url
                },
                headers
            };
            event.request = request;
        }
    };
});
;
 //# sourceMappingURL=httpcontext.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "browserSessionIntegration": (()=>browserSessionIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry-internal+browser-utils@8.46.0/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * When added, automatically creates sessions which allow you to track adoption and crashes (crash free rate) in your Releases in Sentry.
 * More information: https://docs.sentry.io/product/releases/health/
 *
 * Note: In order for session tracking to work, you need to set up Releases: https://docs.sentry.io/product/releases/
 */ const browserSessionIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineIntegration"])(()=>{
    return {
        name: 'BrowserSession',
        setupOnce () {
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document === 'undefined') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn('Using the `browserSessionIntegration` in non-browser environments is not supported.');
                return;
            }
            // The session duration for browser sessions does not track a meaningful
            // concept that can be used as a metric.
            // Automatically captured sessions are akin to page views, and thus we
            // discard their duration.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startSession"])({
                ignoreDuration: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureSession"])();
            // We want to create a session for every navigation as well
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2d$internal$2b$browser$2d$utils$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addHistoryInstrumentationHandler"])(({ from, to })=>{
                // Don't create an additional session for the initial route or if the location did not change
                if (from !== undefined && from !== to) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startSession"])({
                        ignoreDuration: true
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureSession"])();
                }
            });
        }
    };
});
;
 //# sourceMappingURL=browsersession.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/stack-parsers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "chromeStackLineParser": (()=>chromeStackLineParser),
    "defaultStackLineParsers": (()=>defaultStackLineParsers),
    "defaultStackParser": (()=>defaultStackParser),
    "geckoStackLineParser": (()=>geckoStackLineParser),
    "opera10StackLineParser": (()=>opera10StackLineParser),
    "opera11StackLineParser": (()=>opera11StackLineParser),
    "winjsStackLineParser": (()=>winjsStackLineParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-ssr] (ecmascript)");
;
// This was originally forked from https://github.com/csnover/TraceKit, and was largely
// re - written as part of raven - js.
//
// This code was later copied to the JavaScript mono - repo and further modified and
// refactored over the years.
const OPERA10_PRIORITY = 10;
const OPERA11_PRIORITY = 20;
const CHROME_PRIORITY = 30;
const WINJS_PRIORITY = 40;
const GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
    const frame = {
        filename,
        function: func === '<anonymous>' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"] : func,
        in_app: true
    };
    if (lineno !== undefined) {
        frame.lineno = lineno;
    }
    if (colno !== undefined) {
        frame.colno = colno;
    }
    return frame;
}
// This regex matches frames that have no function name (ie. are at the top level of a module).
// For example "at http://localhost:5000//script.js:1:126"
// Frames _with_ function names usually look as follows: "at commitLayoutEffects (react-dom.development.js:23426:1)"
const chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
// This regex matches all the frames that have a function name.
const chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
// We cannot call this variable `chrome` because it can conflict with global `chrome` variable in certain environments
// See: https://github.com/getsentry/sentry-javascript/issues/6880
const chromeStackParserFn = (line)=>{
    // If the stack line has no function name, we need to parse it differently
    const noFnParts = chromeRegexNoFnName.exec(line);
    if (noFnParts) {
        const [, filename, line, col] = noFnParts;
        return createFrame(filename, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +line, +col);
    }
    const parts = chromeRegex.exec(line);
    if (parts) {
        const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval) {
            const subMatch = chromeEvalRegex.exec(parts[2]);
            if (subMatch) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = subMatch[1]; // url
                parts[3] = subMatch[2]; // line
                parts[4] = subMatch[3]; // column
            }
        }
        // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
        // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
        const [func, filename] = extractSafariExtensionDetails(parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], parts[2]);
        return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }
    return;
};
const chromeStackLineParser = [
    CHROME_PRIORITY,
    chromeStackParserFn
];
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
const geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const gecko = (line)=>{
    const parts = geckoREgex.exec(line);
    if (parts) {
        const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval) {
            const subMatch = geckoEvalRegex.exec(parts[3]);
            if (subMatch) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || 'eval';
                parts[3] = subMatch[1];
                parts[4] = subMatch[2];
                parts[5] = ''; // no column when eval
            }
        }
        let filename = parts[3];
        let func = parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"];
        [func, filename] = extractSafariExtensionDetails(func, filename);
        return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }
    return;
};
const geckoStackLineParser = [
    GECKO_PRIORITY,
    gecko
];
const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const winjs = (line)=>{
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
const winjsStackLineParser = [
    WINJS_PRIORITY,
    winjs
];
const opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const opera10 = (line)=>{
    const parts = opera10Regex.exec(line);
    return parts ? createFrame(parts[2], parts[3] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[1]) : undefined;
};
const opera10StackLineParser = [
    OPERA10_PRIORITY,
    opera10
];
const opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const opera11 = (line)=>{
    const parts = opera11Regex.exec(line);
    return parts ? createFrame(parts[5], parts[3] || parts[4] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[1], +parts[2]) : undefined;
};
const opera11StackLineParser = [
    OPERA11_PRIORITY,
    opera11
];
const defaultStackLineParsers = [
    chromeStackLineParser,
    geckoStackLineParser
];
const defaultStackParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStackParser"])(...defaultStackLineParsers);
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */ const extractSafariExtensionDetails = (func, filename)=>{
    const isSafariExtension = func.indexOf('safari-extension') !== -1;
    const isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension ? [
        func.indexOf('@') !== -1 ? func.split('@')[0] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"],
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [
        func,
        filename
    ];
};
;
 //# sourceMappingURL=stack-parsers.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/userfeedback.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createUserFeedbackEnvelope": (()=>createUserFeedbackEnvelope)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/dsn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/envelope.js [app-ssr] (ecmascript)");
;
/**
 * Creates an envelope from a user feedback.
 */ function createUserFeedbackEnvelope(feedback, { metadata, tunnel, dsn }) {
    const headers = {
        event_id: feedback.event_id,
        sent_at: new Date().toISOString(),
        ...metadata && metadata.sdk && {
            sdk: {
                name: metadata.sdk.name,
                version: metadata.sdk.version
            }
        },
        ...!!tunnel && !!dsn && {
            dsn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$dsn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)
        }
    };
    const item = createUserFeedbackEnvelopeItem(feedback);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$envelope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnvelope"])(headers, [
        item
    ]);
}
function createUserFeedbackEnvelopeItem(feedback) {
    const feedbackHeaders = {
        type: 'user_report'
    };
    return [
        feedbackHeaders,
        feedback
    ];
}
;
 //# sourceMappingURL=userfeedback.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/client.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BrowserClient": (()=>BrowserClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$userfeedback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/userfeedback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$baseclient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/baseclient.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * Configuration options for the Sentry Browser SDK.
 * @see @sentry/core Options for more information.
 */ /**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */ class BrowserClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$baseclient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseClient"] {
    /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */ constructor(options){
        const opts = {
            // We default this to true, as it is the safer scenario
            parentSpanIsAlwaysRootSpan: true,
            ...options
        };
        const sdkSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_SDK_SOURCE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSDKSource"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'browser', [
            'browser'
        ], sdkSource);
        super(opts);
        if (opts.sendClientReports && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener('visibilitychange', ()=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document.visibilityState === 'hidden') {
                    this._flushOutcomes();
                }
            });
        }
    }
    /**
   * @inheritDoc
   */ eventFromException(exception, hint) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFromException"])(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ eventFromMessage(message, level = 'info', hint) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventFromMessage"])(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    /**
   * Sends user feedback to Sentry.
   *
   * @deprecated Use `captureFeedback` instead.
   */ captureUserFeedback(feedback) {
        if (!this._isEnabled()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn('SDK not enabled, will not capture user feedback.');
            return;
        }
        const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$userfeedback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserFeedbackEnvelope"])(feedback, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        // sendEnvelope should not throw
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.sendEnvelope(envelope);
    }
    /**
   * @inheritDoc
   */ _prepareEvent(event, hint, scope) {
        event.platform = event.platform || 'javascript';
        return super._prepareEvent(event, hint, scope);
    }
}
;
 //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/sdk.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "captureUserFeedback": (()=>captureUserFeedback),
    "forceLoad": (()=>forceLoad),
    "getDefaultIntegrations": (()=>getDefaultIntegrations),
    "init": (()=>init),
    "onLoad": (()=>onLoad),
    "showReportDialog": (()=>showReportDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$inboundfilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integrations/inboundfilters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$functiontostring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integrations/functiontostring.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browserapierrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$globalhandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$linkederrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$dedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integrations/dedupe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$httpcontext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browsersession$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$supports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/supports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$stack$2d$parsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/stack-parsers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/integration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$transports$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/transports/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/sdk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+browser@8.46.0/node_modules/@sentry/browser/build/npm/esm/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@sentry+core@8.46.0/node_modules/@sentry/core/build/esm/api.js [app-ssr] (ecmascript)");
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
/** Get the default integrations for the browser SDK. */ function getDefaultIntegrations(options) {
    /**
   * Note: Please make sure this stays in sync with Angular SDK, which re-exports
   * `getDefaultIntegrations` but with an adjusted set of integrations.
   */ const integrations = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$inboundfilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inboundFiltersIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$functiontostring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionToStringIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browserapierrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserApiErrorsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breadcrumbsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$globalhandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalHandlersIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$linkederrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linkedErrorsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$dedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dedupeIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$httpcontext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["httpContextIntegration"])()
    ];
    // eslint-disable-next-line deprecation/deprecation
    if (options.autoSessionTracking !== false) {
        integrations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browsersession$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserSessionIntegration"])());
    }
    return integrations;
}
function applyDefaultOptions(optionsArg = {}) {
    const defaultOptions = {
        defaultIntegrations: getDefaultIntegrations(optionsArg),
        release: typeof __SENTRY_RELEASE__ === 'string' // This allows build tooling to find-and-replace __SENTRY_RELEASE__ to inject a release value
         ? __SENTRY_RELEASE__ : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_RELEASE && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_RELEASE.id // This supports the variable that sentry-webpack-plugin injects
         ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_RELEASE.id : undefined,
        autoSessionTracking: true,
        sendClientReports: true
    };
    // TODO: Instead of dropping just `defaultIntegrations`, we should simply
    // call `dropUndefinedKeys` on the entire `optionsArg`.
    // However, for this to work we need to adjust the `hasTracingEnabled()` logic
    // first as it differentiates between `undefined` and the key not being in the object.
    if (optionsArg.defaultIntegrations == null) {
        delete optionsArg.defaultIntegrations;
    }
    return {
        ...defaultOptions,
        ...optionsArg
    };
}
function shouldShowBrowserExtensionError() {
    const windowWithMaybeExtension = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].window !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"];
    if (!windowWithMaybeExtension) {
        // No need to show the error if we're not in a browser window environment (e.g. service workers)
        return false;
    }
    const extensionKey = windowWithMaybeExtension.chrome ? 'chrome' : 'browser';
    const extensionObject = windowWithMaybeExtension[extensionKey];
    const runtimeId = extensionObject && extensionObject.runtime && extensionObject.runtime.id;
    const href = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].location.href || '';
    const extensionProtocols = [
        'chrome-extension:',
        'moz-extension:',
        'ms-browser-extension:',
        'safari-web-extension:'
    ];
    // Running the SDK in a dedicated extension page and calling Sentry.init is fine; no risk of data leakage
    const isDedicatedExtensionPage = !!runtimeId && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].top && extensionProtocols.some((protocol)=>href.startsWith(`${protocol}//`));
    // Running the SDK in NW.js, which appears like a browser extension but isn't, is also fine
    // see: https://github.com/getsentry/sentry-javascript/issues/12668
    const isNWjs = typeof windowWithMaybeExtension.nw !== 'undefined';
    return !!runtimeId && !isDedicatedExtensionPage && !isNWjs;
}
/**
 * A magic string that build tooling can leverage in order to inject a release value into the SDK.
 */ /**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */ function init(browserOptions = {}) {
    const options = applyDefaultOptions(browserOptions);
    if (!options.skipBrowserExtensionCheck && shouldShowBrowserExtensionError()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            // eslint-disable-next-line no-console
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
        return;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$supports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsFetch"])()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
        }
    }
    const clientOptions = {
        ...options,
        stackParser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stackParserFromStackParserOptions"])(options.stackParser || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$stack$2d$parsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultStackParser"]),
        integrations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntegrationsToSetup"])(options),
        transport: options.transport || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$transports$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeFetchTransport"]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initAndBind"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserClient"], clientOptions);
}
/**
 * All properties the report dialog supports
 */ /**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */ function showReportDialog(options = {}) {
    // doesn't work without a document (React Native)
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Global document not defined in showReportDialog call');
        return;
    }
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const client = scope.getClient();
    const dsn = client && client.getDsn();
    if (!dsn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('DSN not configured for showReportDialog call');
        return;
    }
    if (scope) {
        options.user = {
            ...scope.getUser(),
            ...options.user
        };
    }
    if (!options.eventId) {
        const eventId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lastEventId"])();
        if (eventId) {
            options.eventId = eventId;
        }
    }
    const script = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportDialogEndpoint"])(dsn, options);
    if (options.onLoad) {
        script.onload = options.onLoad;
    }
    const { onClose } = options;
    if (onClose) {
        const reportDialogClosedMessageHandler = (event)=>{
            if (event.data === '__sentry_reportdialog_closed__') {
                try {
                    onClose();
                } finally{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].removeEventListener('message', reportDialogClosedMessageHandler);
                }
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].addEventListener('message', reportDialogClosedMessageHandler);
    }
    const injectionPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document.head || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WINDOW"].document.body;
    if (injectionPoint) {
        injectionPoint.appendChild(script);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$browser$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Not injecting report dialog. No injection point found in HTML');
    }
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function forceLoad() {
// Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function onLoad(callback) {
    callback();
}
/**
 * Captures user feedback and sends it to Sentry.
 *
 * @deprecated Use `captureFeedback` instead.
 */ function captureUserFeedback(feedback) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$8$2e$46$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        // eslint-disable-next-line deprecation/deprecation
        client.captureUserFeedback(feedback);
    }
}
;
 //# sourceMappingURL=sdk.js.map
}}),

};

//# sourceMappingURL=b99c0_%40sentry_browser_build_npm_esm_f9d335._.js.map