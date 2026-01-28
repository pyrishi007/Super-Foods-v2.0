// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"1jbAx":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "116894fd0259e7a3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"4dg1N":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a905 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a905.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _shimmer = require("../ShimmerUI/Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _banner = require("./Banner");
var _bannerDefault = parcelHelpers.interopDefault(_banner);
var _useRestroMenu = require("../../Hooks/useRestroMenu");
var _useRestroMenuDefault = parcelHelpers.interopDefault(_useRestroMenu);
var _menuCardCategories = require("./MenuCardCategories");
var _menuCardCategoriesDefault = parcelHelpers.interopDefault(_menuCardCategories);
var _s = $RefreshSig$();
const MenuPage = ()=>{
    _s();
    const { loading, bannerInfo, menuCategories } = (0, _useRestroMenuDefault.default)();
    const menuItems = menuCategories.filter((eachCategories)=>eachCategories?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //Testing
    // console.log(menuItems);
    return loading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
        fileName: "src/Components/MenuPage/MenuPage.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "menu-container px-4 py-10 bg-white",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _bannerDefault.default), {
                prop: bannerInfo
            }, void 0, false, {
                fileName: "src/Components/MenuPage/MenuPage.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, undefined),
            menuItems.map((data)=>{
                //Key
                const { categoryId } = data?.card?.card || {};
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuCardCategoriesDefault.default), {
                    data: data
                }, categoryId, false, {
                    fileName: "src/Components/MenuPage/MenuPage.jsx",
                    lineNumber: 27,
                    columnNumber: 16
                }, undefined);
            })
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuPage/MenuPage.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, undefined);
};
_s(MenuPage, "zums5KOzVejYvQDQVU1fFPYgb6U=", false, function() {
    return [
        (0, _useRestroMenuDefault.default)
    ];
});
_c = MenuPage;
exports.default = MenuPage;
var _c;
$RefreshReg$(_c, "MenuPage");

  $parcel$ReactRefreshHelpers$a905.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../ShimmerUI/Shimmer":"6GP1n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","../../Hooks/useRestroMenu":"iUj9H","./Banner":"78Mmv","./MenuCardCategories":"74IXR"}],"iUj9H":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9ca9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9ca9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _swiggy = require("../api/swiggy");
var _s = $RefreshSig$();
const useRestroMenu = ()=>{
    _s();
    const [menuCategories, SetMenuCategories] = (0, _react.useState)([]); //Catagories
    const [bannerInfo, setBannerInfo] = (0, _react.useState)([]); //Banner
    const [loading, setLoading] = (0, _react.useState)(true); //Shimmer Phase
    const { resID } = (0, _reactRouterDom.useParams)(); //Restro ID = ResID
    (0, _react.useEffect)(()=>{
        const fetchAPI = async ()=>{
            const respose = await (0, _swiggy.fetchRestrouantsMenu_Api)(resID);
            //Banner Data
            const banner = respose?.data?.cards[2]?.card?.card?.info || {};
            //Menu Item Catgories data
            const categories = respose?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
            //Caragories Data
            SetMenuCategories(categories);
            //Banner Data
            setBannerInfo(banner);
            //Shimmer Phase
            setLoading(false);
        };
        fetchAPI();
    }, [
        resID
    ]);
    return {
        loading,
        bannerInfo,
        menuCategories
    };
};
_s(useRestroMenu, "hwJXwpsGdAZ76cv6mQJI1BdUM40=", false, function() {
    return [
        (0, _reactRouterDom.useParams)
    ];
});
exports.default = useRestroMenu;

  $parcel$ReactRefreshHelpers$9ca9.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"9xmpe","../api/swiggy":"lLltR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"78Mmv":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$fe48 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$fe48.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _starPng = require("../../Assets/star.png");
var _starPngDefault = parcelHelpers.interopDefault(_starPng);
var _constants = require("../../utils/constants");
const Banner = (props)=>{
    const bannerInfo = props?.prop;
    const { cloudinaryImageId, name, city, locality, avgRating, totalRatingsString, costForTwoMessage, cuisines } = bannerInfo;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex items-center w-[90%] lg:w-[70%] m-10 p-6 lg:p-10 rounded-2xl bg-gradient-to-r from-purple-100 to-violet-300 shadow-[0_8px_24px_rgba(0,0,0,0.08)]   ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "restro-image flex-shrink-0 rounded-xl overflow-hidden shadow-md",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: (0, _constants.CDN_LINK) + cloudinaryImageId,
                        alt: name,
                        className: "w-72 h-60 object-cover"
                    }, void 0, false, {
                        fileName: "src/Components/MenuPage/Banner.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/Components/MenuPage/Banner.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "p-6 lg:p-10 ml-6 lg:ml-10 flex-1",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            className: "restro-name text-2xl lg:text-5xl font-extrabold text-slate-900",
                            children: name
                        }, void 0, false, {
                            fileName: "src/Components/MenuPage/Banner.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "restro-location mt-3 text-base font-normal text-slate-600",
                            children: [
                                city,
                                " \u2022 ",
                                locality
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/MenuPage/Banner.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "mt-3 text-xl text-slate-700 font-semibold",
                            children: cuisines.join(", ")
                        }, void 0, false, {
                            fileName: "src/Components/MenuPage/Banner.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center mt-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "flex items-center gap-2 bg-gradient-to-r from-slate-700 to-gray-900 text-white px-3 py-1 rounded-[6px_6px_6px_0px] shadow-sm shadow-black/30   ",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            src: (0, _starPngDefault.default),
                                            alt: "star",
                                            className: "w-3 h-3 invert"
                                        }, void 0, false, {
                                            fileName: "src/Components/MenuPage/Banner.jsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "pl-1 font-mono ",
                                            children: avgRating
                                        }, void 0, false, {
                                            fileName: "src/Components/MenuPage/Banner.jsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/MenuPage/Banner.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "divider px-5 text-black",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "src/Components/MenuPage/Banner.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-sm px-4 py-1 font-mono bg-gradient-to-r from-violet-600 via-rose-500 to-amber-400 rounded-[6px_6px_6px_0px] text-white",
                                    children: totalRatingsString
                                }, void 0, false, {
                                    fileName: "src/Components/MenuPage/Banner.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "divider px-5 text-black",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "src/Components/MenuPage/Banner.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-sm px-4 py-1 font-mono bg-gradient-to-r from-green-600 to-green-700 rounded-[6px_6px_6px_0px]np text-white",
                                    children: costForTwoMessage
                                }, void 0, false, {
                                    fileName: "src/Components/MenuPage/Banner.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/MenuPage/Banner.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/MenuPage/Banner.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/Components/MenuPage/Banner.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/Components/MenuPage/Banner.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, undefined);
};
_c = Banner;
exports.default = Banner;
var _c;
$RefreshReg$(_c, "Banner");

  $parcel$ReactRefreshHelpers$fe48.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../Hooks/useRestroMenu":"iUj9H","../../Assets/star.png":"l4YCV","../../utils/constants":"2V7fL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"l4YCV":[function(require,module,exports,__globalThis) {
module.exports = require("a7b26d08570ce29c").getBundleURL('1uFeS') + "star.574ac487.png" + "?" + Date.now();

},{"a7b26d08570ce29c":"lgJ39"}],"74IXR":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$aa28 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$aa28.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _menuCategoryItems = require("./MenuCategoryItems");
var _menuCategoryItemsDefault = parcelHelpers.interopDefault(_menuCategoryItems);
var _react = require("react");
var _s = $RefreshSig$();
const MenuCardCategories = (props)=>{
    _s();
    //Accordions
    const [Accordions, setAccordions] = (0, _react.useState)(false);
    //Extractring Data
    const { title, itemCards } = props?.data?.card?.card || {};
    const handleClick = ()=>{
        setAccordions(!Accordions);
    };
    //
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-6/12 m-auto px-5 py-2",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                onClick: handleClick,
                className: "flex items-center justify-between cursor-pointer rounded-lg  px-3 py-2 my-2 border-b-2 border-gray-200 ",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "font-bold text-gray-900 text-2xl",
                        children: [
                            title,
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "ml-2 text-lg font-bold text-gray-700",
                                children: [
                                    "(",
                                    itemCards.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: `text-gray-700 transition-transform duration-200 ${Accordions ? "rotate-180" : ""}`,
                        children: "\u2304"
                    }, void 0, false, {
                        fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, undefined),
            Accordions && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "bg-white rounded-md",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuCategoryItemsDefault.default), {
                    data: itemCards
                }, void 0, false, {
                    fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuPage/MenuCardCategories.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, undefined);
};
_s(MenuCardCategories, "KrGX0FiCFIOauFXxNvkfSnxzFMo=");
_c = MenuCardCategories;
exports.default = MenuCardCategories;
var _c;
$RefreshReg$(_c, "MenuCardCategories");

  $parcel$ReactRefreshHelpers$aa28.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","./MenuCategoryItems":"aLrtO"}],"aLrtO":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$23d5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$23d5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constants = require("../../utils/constants");
const MenuCategoryItems = (props)=>{
    //Testing
    console.log(props);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: props?.data.map((eachItems)=>{
            //Extractring Data
            const { name, price, description, imageId } = eachItems?.card?.info || {};
            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-12/12 m-auto flex items-center justify-between border-b border-gray-200/70 bg-white p-2 text-left",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-8/12",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-baseline",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-lg  font-bold text-gray-900 tracking-wide leading-snug",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                        lineNumber: 18,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "px-2 text-lg font-semibold text-gray-700",
                                        children: [
                                            "- \u20B9",
                                            price / 100
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-sm font-medium text-gray-500 leading-relaxed",
                                children: description
                            }, void 0, false, {
                                fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative shrink-0",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "w-36 h-36 rounded-lg object-cover shadow-sm",
                                src: (0, _constants.CDN_LINK) + imageId,
                                alt: name
                            }, void 0, false, {
                                fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: "absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 py-1.5 rounded-lg bg-white text-green-700 text-sm font-semibold border border-green-600 shadow-md hover:bg-green-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 font-mono",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
                lineNumber: 15,
                columnNumber: 11
            }, undefined);
        })
    }, void 0, false, {
        fileName: "src/Components/MenuPage/MenuCategoryItems.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, undefined);
};
_c = MenuCategoryItems;
exports.default = MenuCategoryItems;
var _c;
$RefreshReg$(_c, "MenuCategoryItems");

  $parcel$ReactRefreshHelpers$23d5.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../utils/constants":"2V7fL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["aQL8O","1jbAx"], null, "parcelRequire94c2")

//# sourceMappingURL=MenuPage.0259e7a3.js.map
