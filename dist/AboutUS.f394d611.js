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

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"iSGEK":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9d74e141f394d611";
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

},{}],"iCGan":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a24c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a24c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _aboutUSCss = require("./AboutUS.css");
var _freelanceCreativePortfolioWebsite2Png = require("../../Assets/Freelance Creative Portfolio Website_2.png");
var _freelanceCreativePortfolioWebsite2PngDefault = parcelHelpers.interopDefault(_freelanceCreativePortfolioWebsite2Png);
var _sharedUtlityBasedInfo = require("../../utils/SharedUtlityBasedInfo");
var _reactSlick = require("react-slick");
var _reactSlickDefault = parcelHelpers.interopDefault(_reactSlick);
var _slickCss = require("slick-carousel/slick/slick.css");
var _slickThemeCss = require("slick-carousel/slick/slick-theme.css");
const AboutUS = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "AboutUs-page",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "page",
                    src: (0, _freelanceCreativePortfolioWebsite2PngDefault.default),
                    alt: "",
                    srcset: ""
                }, void 0, false, {
                    fileName: "src/Components/AboutUs/AboutUS.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Components/AboutUs/AboutUS.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page",
                id: "page-2",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "upper-card-contanier",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "cards-carousel",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactSlickDefault.default), {
                            ...settings,
                            children: (0, _sharedUtlityBasedInfo.SharedUtlityBasedInfo)[0]?.about_usCardsinfo?.map((eachCard)=>{
                                const { image, title, info } = eachCard //Object Destruturing
                                ;
                                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "upper-whole-carousel-card",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "whole-carousel-card",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "img-card",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "card-image",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                        src: image,
                                                        alt: "",
                                                        srcset: ""
                                                    }, void 0, false, {
                                                        fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 27
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 25
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                lineNumber: 31,
                                                columnNumber: 23
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "card-info",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                        id: "text",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                        lineNumber: 37,
                                                        columnNumber: 25
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                        id: "info",
                                                        children: info
                                                    }, void 0, false, {
                                                        fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 25
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/AboutUs/AboutUS.jsx",
                                                lineNumber: 36,
                                                columnNumber: 23
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/AboutUs/AboutUS.jsx",
                                        lineNumber: 30,
                                        columnNumber: 21
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/Components/AboutUs/AboutUS.jsx",
                                    lineNumber: 29,
                                    columnNumber: 19
                                }, undefined);
                            })
                        }, void 0, false, {
                            fileName: "src/Components/AboutUs/AboutUS.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/Components/AboutUs/AboutUS.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/Components/AboutUs/AboutUS.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Components/AboutUs/AboutUS.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_c = AboutUS;
exports.default = AboutUS;
var _c;
$RefreshReg$(_c, "AboutUS");

  $parcel$ReactRefreshHelpers$a24c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./AboutUS.css":"8t89n","../../Assets/Freelance Creative Portfolio Website_2.png":"4tUTA","../../utils/SharedUtlityBasedInfo":"geaKk","react-slick":"1g9sW","slick-carousel/slick/slick.css":"gyhyx","slick-carousel/slick/slick-theme.css":"eyap3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8t89n":[function() {},{}],"4tUTA":[function(require,module,exports,__globalThis) {
module.exports = require("fc914e0532a0f8aa").getBundleURL('dw8wS') + "Freelance Creative Portfolio Website_2.0e479e08.png" + "?" + Date.now();

},{"fc914e0532a0f8aa":"lgJ39"}],"geaKk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SharedUtlityBasedInfo", ()=>SharedUtlityBasedInfo);
var _timeFastPng = require("../Assets/time-fast.png");
var _timeFastPngDefault = parcelHelpers.interopDefault(_timeFastPng);
var _holdingHandDinnerPng = require("../Assets/holding-hand-dinner.png");
var _holdingHandDinnerPngDefault = parcelHelpers.interopDefault(_holdingHandDinnerPng);
var _plateWheatPng = require("../Assets/plate-wheat.png");
var _plateWheatPngDefault = parcelHelpers.interopDefault(_plateWheatPng);
var _snapPng = require("../Assets/snap.png");
var _snapPngDefault = parcelHelpers.interopDefault(_snapPng);
var _cloudMoonRainPng = require("../Assets/cloud-moon-rain.png");
var _cloudMoonRainPngDefault = parcelHelpers.interopDefault(_cloudMoonRainPng);
var _mapMarkerHomePng = require("../Assets/map-marker-home.png");
var _mapMarkerHomePngDefault = parcelHelpers.interopDefault(_mapMarkerHomePng);
var _reliabilityPng = require("../Assets/reliability.png");
var _reliabilityPngDefault = parcelHelpers.interopDefault(_reliabilityPng);
var _subscriptionModelPng = require("../Assets/subscription-model.png");
var _subscriptionModelPngDefault = parcelHelpers.interopDefault(_subscriptionModelPng);
var _spicesPng = require("../Assets/spices.png");
var _spicesPngDefault = parcelHelpers.interopDefault(_spicesPng);
var _customerServicePng = require("../Assets/customer-service.png");
var _customerServicePngDefault = parcelHelpers.interopDefault(_customerServicePng);
var _lovePng = require("../Assets/love.png");
var _lovePngDefault = parcelHelpers.interopDefault(_lovePng);
var _returnOfInvestmentPng = require("../Assets/return-of-investment.png");
var _returnOfInvestmentPngDefault = parcelHelpers.interopDefault(_returnOfInvestmentPng);
var _starPng = require("../Assets/star.png");
var _starPngDefault = parcelHelpers.interopDefault(_starPng);
var _housePng = require("../Assets/house.png");
var _housePngDefault = parcelHelpers.interopDefault(_housePng);
var _onlineShoppingPng = require("../Assets/online-shopping.png");
var _onlineShoppingPngDefault = parcelHelpers.interopDefault(_onlineShoppingPng);
var _discountPng = require("../Assets/discount.png");
var _discountPngDefault = parcelHelpers.interopDefault(_discountPng);
var _informationPng = require("../Assets/information.png");
var _informationPngDefault = parcelHelpers.interopDefault(_informationPng);
var _conversationPng = require("../Assets/conversation.png");
var _conversationPngDefault = parcelHelpers.interopDefault(_conversationPng);
// Stock utilty elements
const SharedUtlityBasedInfo = [
    {
        about_usCardsinfo: [
            {
                title: "Freshly Cooked Meals",
                info: "Every meal is prepared fresh with love, Just for you. No shortcuts, No compromises only the warmth of a home cooked meal. Every bite should make you smile and feel cared for",
                image: (0, _holdingHandDinnerPngDefault.default)
            },
            {
                title: "Healthy & Nourishing Choices",
                info: "We care about your health as much as your taste buds. Nutritious, Wholesome meals crafted to energize and comfort you. Eating well should feel personal, loving, and joyful every day.",
                image: (0, _plateWheatPngDefault.default)
            },
            {
                title: "Super Fast Delivery",
                info: "No waiting, No worries meals delivered with care. We make sure your food arrives hot, perfect, and ready to delight.You deserve the happiness of a meal that feels like a hug",
                image: (0, _timeFastPngDefault.default)
            },
            {
                title: "Effortless Ordering",
                info: "Ordering food should be a moment of joy, not stress. Simple taps, smooth service, and your favorites delivered with love. Every meal experience should feel thoughtful and personal",
                image: (0, _snapPngDefault.default)
            },
            {
                title: "Home-Style Cooking",
                info: "Some flavors stay in your heart forever. Our chefs craft dishes that feel like they're made in your own kitchen. Every bite is infused with love, nostalgia, and care.",
                image: (0, _mapMarkerHomePngDefault.default)
            },
            {
                title: "Seasonal & Special Delights ",
                info: "Life is better with surprises that delight the soul. We bring seasonal flavors and special dishes to spark joy in every meal. Every bite is a little celebration made just for you.",
                image: (0, _cloudMoonRainPngDefault.default)
            },
            {
                title: "Premium Quality Ingredients",
                info: "Only the best makes it to your plate. Fresh, high-quality ingredients crafted with care and respect for your health.Every meal deserves the love and attention it takes to shine.",
                image: (0, _reliabilityPngDefault.default)
            },
            {
                title: "Meal Subscriptions & Rewards",
                info: "Consistency with love meals delivered the way you like them. Order 7 meals, and get one meal worth \u20B9599 free as a token of care. Nourishing you should feel thoughtful, easy, and heartfelt",
                image: (0, _subscriptionModelPngDefault.default)
            },
            {
                title: "Locally Sourced Freshness",
                info: "Good food starts with people we care about. We partner with local farmers and producers to bring fresh, trustworthy meals. Every bite supports a community and carries love to table.",
                image: (0, _spicesPngDefault.default)
            },
            {
                title: "Caring Customer Support",
                info: "We listen, we care, we act. Every concern is treated personally, because you matter to us. Food isn't just fuel it's an experience, and your happiness counts.",
                image: (0, _customerServicePngDefault.default)
            },
            {
                title: "Transparent & Honest Pricing",
                info: "No hidden charges, no surprises just honest love for your meal. We believe trust is the most important ingredient in every bite. Paying fairly should feel as good as eating well.",
                image: (0, _lovePngDefault.default)
            },
            {
                title: "Return & Refund Guarantee",
                info: "Your happiness matters most. If a meal doesn't meet your expectations, we make it right fast and fair. Every Super Bite should leave your heart full and your taste buds happy.",
                image: (0, _returnOfInvestmentPngDefault.default)
            }
        ]
    },
    {
        stockImages: [
            {
                home_page: (0, _housePngDefault.default),
                cart: (0, _onlineShoppingPngDefault.default),
                discount_offer: (0, _discountPngDefault.default),
                About_page: (0, _informationPngDefault.default),
                connect_us: (0, _conversationPngDefault.default),
                star: (0, _starPngDefault.default)
            }
        ]
    }
];

},{"../Assets/time-fast.png":"4Ihnu","../Assets/holding-hand-dinner.png":"jtpsc","../Assets/plate-wheat.png":"lKGgM","../Assets/snap.png":"8vTq0","../Assets/cloud-moon-rain.png":"aE09L","../Assets/map-marker-home.png":"1vUM0","../Assets/reliability.png":"lugjJ","../Assets/subscription-model.png":"3uPlu","../Assets/spices.png":"fKkUE","../Assets/customer-service.png":"asIRL","../Assets/love.png":"eHKAj","../Assets/return-of-investment.png":"9hVSf","../Assets/star.png":"ibGBo","../Assets/house.png":"6ae3O","../Assets/online-shopping.png":"h4HmX","../Assets/discount.png":"9ZaTK","../Assets/information.png":"l3EEn","../Assets/conversation.png":"r96nL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ihnu":[function(require,module,exports,__globalThis) {
module.exports = require("b59bd8a72a5ed610").getBundleURL('dw8wS') + "time-fast.46605bef.png" + "?" + Date.now();

},{"b59bd8a72a5ed610":"lgJ39"}],"jtpsc":[function(require,module,exports,__globalThis) {
module.exports = require("1a450230612206f9").getBundleURL('dw8wS') + "holding-hand-dinner.0afb11f4.png" + "?" + Date.now();

},{"1a450230612206f9":"lgJ39"}],"lKGgM":[function(require,module,exports,__globalThis) {
module.exports = require("5fe36e6c9c6c5532").getBundleURL('dw8wS') + "plate-wheat.4f02c123.png" + "?" + Date.now();

},{"5fe36e6c9c6c5532":"lgJ39"}],"8vTq0":[function(require,module,exports,__globalThis) {
module.exports = require("63823c95675e3859").getBundleURL('dw8wS') + "snap.ec51793f.png" + "?" + Date.now();

},{"63823c95675e3859":"lgJ39"}],"aE09L":[function(require,module,exports,__globalThis) {
module.exports = require("fd6f7f1dbb67df7c").getBundleURL('dw8wS') + "cloud-moon-rain.89031b83.png" + "?" + Date.now();

},{"fd6f7f1dbb67df7c":"lgJ39"}],"1vUM0":[function(require,module,exports,__globalThis) {
module.exports = require("e1d9346f3c3b8868").getBundleURL('dw8wS') + "map-marker-home.6fa01996.png" + "?" + Date.now();

},{"e1d9346f3c3b8868":"lgJ39"}],"lugjJ":[function(require,module,exports,__globalThis) {
module.exports = require("3b1c0767c325cb8").getBundleURL('dw8wS') + "reliability.5bffc4c7.png" + "?" + Date.now();

},{"3b1c0767c325cb8":"lgJ39"}],"3uPlu":[function(require,module,exports,__globalThis) {
module.exports = require("c271927887b75944").getBundleURL('dw8wS') + "subscription-model.5a25ec22.png" + "?" + Date.now();

},{"c271927887b75944":"lgJ39"}],"fKkUE":[function(require,module,exports,__globalThis) {
module.exports = require("ad5e13a162300c99").getBundleURL('dw8wS') + "spices.c57e4ebe.png" + "?" + Date.now();

},{"ad5e13a162300c99":"lgJ39"}],"asIRL":[function(require,module,exports,__globalThis) {
module.exports = require("7fef8dadf6d71ecf").getBundleURL('dw8wS') + "customer-service.70fb6176.png" + "?" + Date.now();

},{"7fef8dadf6d71ecf":"lgJ39"}],"eHKAj":[function(require,module,exports,__globalThis) {
module.exports = require("1db94b2d4b3c2d8d").getBundleURL('dw8wS') + "love.65eb5ced.png" + "?" + Date.now();

},{"1db94b2d4b3c2d8d":"lgJ39"}],"9hVSf":[function(require,module,exports,__globalThis) {
module.exports = require("ec31fad7b3c0e9d1").getBundleURL('dw8wS') + "return-of-investment.d6bee04a.png" + "?" + Date.now();

},{"ec31fad7b3c0e9d1":"lgJ39"}],"ibGBo":[function(require,module,exports,__globalThis) {
module.exports = require("5a175c1041d22d32").getBundleURL('dw8wS') + "star.574ac487.png" + "?" + Date.now();

},{"5a175c1041d22d32":"lgJ39"}],"6ae3O":[function(require,module,exports,__globalThis) {
module.exports = require("c4792f86b51c90db").getBundleURL('dw8wS') + "house.d21f1da6.png" + "?" + Date.now();

},{"c4792f86b51c90db":"lgJ39"}],"h4HmX":[function(require,module,exports,__globalThis) {
module.exports = require("5636ac3a2ba20e61").getBundleURL('dw8wS') + "online-shopping.64281cb6.png" + "?" + Date.now();

},{"5636ac3a2ba20e61":"lgJ39"}],"9ZaTK":[function(require,module,exports,__globalThis) {
module.exports = require("88e926570dccc42c").getBundleURL('dw8wS') + "discount.3bf8936d.png" + "?" + Date.now();

},{"88e926570dccc42c":"lgJ39"}],"l3EEn":[function(require,module,exports,__globalThis) {
module.exports = require("ffd4d65f8d1692be").getBundleURL('dw8wS') + "information.e1b5f467.png" + "?" + Date.now();

},{"ffd4d65f8d1692be":"lgJ39"}],"r96nL":[function(require,module,exports,__globalThis) {
module.exports = require("bdc2f792147a2c86").getBundleURL('dw8wS') + "conversation.06337fe9.png" + "?" + Date.now();

},{"bdc2f792147a2c86":"lgJ39"}],"1g9sW":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _slider = _interopRequireDefault(require("9979a4576cedc989"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
var _default = exports["default"] = _slider["default"];

},{"9979a4576cedc989":"legde"}],"legde":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("d5f25664f484c73b"));
var _innerSlider = require("c0bc1cb421796ebb");
var _json2mq = _interopRequireDefault(require("2c2898a9cec42a96"));
var _defaultProps = _interopRequireDefault(require("181bf7076f5b1914"));
var _innerSliderUtils = require("78f0427e141bfee3");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Slider = exports["default"] = /*#__PURE__*/ function(_React$Component) {
    _inherits(Slider, _React$Component);
    var _super = _createSuper(Slider);
    function Slider(props) {
        var _this;
        _classCallCheck(this, Slider);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function(ref) {
            return _this.innerSlider = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
            return _this.innerSlider.slickPrev();
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
            return _this.innerSlider.slickNext();
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _this.innerSlider.slickGoTo(slide, dontAnimate);
        });
        _defineProperty(_assertThisInitialized(_this), "slickPause", function() {
            return _this.innerSlider.pause("paused");
        });
        _defineProperty(_assertThisInitialized(_this), "slickPlay", function() {
            return _this.innerSlider.autoPlay("play");
        });
        _this.state = {
            breakpoint: null
        };
        _this._responsiveMediaHandlers = [];
        return _this;
    }
    _createClass(Slider, [
        {
            key: "media",
            value: function media(query, handler) {
                // javascript handler for  css media query
                var mql = window.matchMedia(query);
                var listener = function listener(_ref) {
                    var matches = _ref.matches;
                    if (matches) handler();
                };
                mql.addListener(listener);
                this._responsiveMediaHandlers.push({
                    mql: mql,
                    query: query,
                    listener: listener
                });
            } // handles responsive breakpoints
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                // performance monitoring
                //if (process.env.NODE_ENV !== 'production') {
                //const { whyDidYouUpdate } = require('why-did-you-update')
                //whyDidYouUpdate(React)
                //}
                if (this.props.responsive) {
                    var breakpoints = this.props.responsive.map(function(breakpt) {
                        return breakpt.breakpoint;
                    });
                    // sort them in increasing order of their numerical value
                    breakpoints.sort(function(x, y) {
                        return x - y;
                    });
                    breakpoints.forEach(function(breakpoint, index) {
                        // media query for each breakpoint
                        var bQuery;
                        if (index === 0) bQuery = (0, _json2mq["default"])({
                            minWidth: 0,
                            maxWidth: breakpoint
                        });
                        else bQuery = (0, _json2mq["default"])({
                            minWidth: breakpoints[index - 1] + 1,
                            maxWidth: breakpoint
                        });
                        // when not using server side rendering
                        (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
                            _this2.setState({
                                breakpoint: breakpoint
                            });
                        });
                    });
                    // Register media query for full screen. Need to support resize from small to large
                    // convert javascript object to media query string
                    var query = (0, _json2mq["default"])({
                        minWidth: breakpoints.slice(-1)[0]
                    });
                    (0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
                        _this2.setState({
                            breakpoint: null
                        });
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._responsiveMediaHandlers.forEach(function(obj) {
                    obj.mql.removeListener(obj.listener);
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var settings;
                var newProps;
                if (this.state.breakpoint) {
                    newProps = this.props.responsive.filter(function(resp) {
                        return resp.breakpoint === _this3.state.breakpoint;
                    });
                    settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
                } else settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
                // force scrolling by one if centerMode is on
                if (settings.centerMode) {
                    if (settings.slidesToScroll > 1 && true) console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
                    settings.slidesToScroll = 1;
                }
                // force showing one slide and scrolling by one if the fade mode is on
                if (settings.fade) {
                    if (settings.slidesToShow > 1 && true) console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
                    if (settings.slidesToScroll > 1 && true) console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
                    settings.slidesToShow = 1;
                    settings.slidesToScroll = 1;
                }
                // makes sure that children is an array, even when there is only 1 child
                var children = _react["default"].Children.toArray(this.props.children);
                // Children may contain false or null, so we should filter them
                // children may also contain string filled with spaces (in certain cases where we use jsx strings)
                children = children.filter(function(child) {
                    if (typeof child === "string") return !!child.trim();
                    return !!child;
                });
                // rows and slidesPerRow logic is handled here
                if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
                    console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
                    settings.variableWidth = false;
                }
                var newChildren = [];
                var currentWidth = null;
                for(var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow){
                    var newSlide = [];
                    for(var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow){
                        var row = [];
                        for(var k = j; k < j + settings.slidesPerRow; k += 1){
                            if (settings.variableWidth && children[k].props.style) currentWidth = children[k].props.style.width;
                            if (k >= children.length) break;
                            row.push(/*#__PURE__*/ _react["default"].cloneElement(children[k], {
                                key: 100 * i + 10 * j + k,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / settings.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                        }
                        newSlide.push(/*#__PURE__*/ _react["default"].createElement("div", {
                            key: 10 * i + j
                        }, row));
                    }
                    if (settings.variableWidth) newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", {
                        key: i,
                        style: {
                            width: currentWidth
                        }
                    }, newSlide));
                    else newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", {
                        key: i
                    }, newSlide));
                }
                if (settings === "unslick") {
                    var className = "regular slider " + (this.props.className || "");
                    return /*#__PURE__*/ _react["default"].createElement("div", {
                        className: className
                    }, children);
                } else if (newChildren.length <= settings.slidesToShow) settings.unslick = true;
                return /*#__PURE__*/ _react["default"].createElement(_innerSlider.InnerSlider, _extends({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0, _innerSliderUtils.filterSettings)(settings)), newChildren);
            }
        }
    ]);
    return Slider;
}(_react["default"].Component);

},{"d5f25664f484c73b":"21dqq","c0bc1cb421796ebb":"jejyB","2c2898a9cec42a96":"8z8hu","181bf7076f5b1914":"7XPrs","78f0427e141bfee3":"ev9yO"}],"jejyB":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InnerSlider = void 0;
var _react = _interopRequireDefault(require("a744de6232be7c25"));
var _initialState = _interopRequireDefault(require("ec04a66cb5b7550f"));
var _lodash = _interopRequireDefault(require("e07f3edf2807989a"));
var _classnames = _interopRequireDefault(require("ee3210644527e9e9"));
var _innerSliderUtils = require("4ebb59180c49e814");
var _track = require("9f8f34cb7b12be47");
var _dots = require("af97d575a5098923");
var _arrows = require("82f66b119f4b28ee");
var _resizeObserverPolyfill = _interopRequireDefault(require("3f6176ff557d3716"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var InnerSlider = exports.InnerSlider = /*#__PURE__*/ function(_React$Component) {
    _inherits(InnerSlider, _React$Component);
    var _super = _createSuper(InnerSlider);
    function InnerSlider(props) {
        var _this;
        _classCallCheck(this, InnerSlider);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
            return _this.list = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
            return _this.track = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
            if (_this.props.adaptiveHeight && _this.list) {
                var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
                _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
            }
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
            _this.props.onInit && _this.props.onInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
                }
            }
            var spec = _objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props);
            _this.updateState(spec, true, function() {
                _this.adaptHeight();
                _this.props.autoplay && _this.autoPlay("update");
            });
            if (_this.props.lazyLoad === "progressive") _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
            _this.ro = new _resizeObserverPolyfill["default"](function() {
                if (_this.state.animating) {
                    _this.onWindowResized(false); // don't set trackStyle hence don't break animation
                    _this.callbackTimers.push(setTimeout(function() {
                        return _this.onWindowResized();
                    }, _this.props.speed));
                } else _this.onWindowResized();
            });
            _this.ro.observe(_this.list);
            document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
                slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
                slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
            });
            if (window.addEventListener) window.addEventListener("resize", _this.onWindowResized);
            else window.attachEvent("onresize", _this.onWindowResized);
        });
        _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
            if (_this.animationEndCallback) clearTimeout(_this.animationEndCallback);
            if (_this.lazyLoadTimer) clearInterval(_this.lazyLoadTimer);
            if (_this.callbackTimers.length) {
                _this.callbackTimers.forEach(function(timer) {
                    return clearTimeout(timer);
                });
                _this.callbackTimers = [];
            }
            if (window.addEventListener) window.removeEventListener("resize", _this.onWindowResized);
            else window.detachEvent("onresize", _this.onWindowResized);
            if (_this.autoplayTimer) clearInterval(_this.autoplayTimer);
            _this.ro.disconnect();
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
            _this.checkImagesLoad();
            _this.props.onReInit && _this.props.onReInit();
            if (_this.props.lazyLoad) {
                var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
                if (slidesToLoad.length > 0) {
                    _this.setState(function(prevState) {
                        return {
                            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                        };
                    });
                    if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
                }
            }
            // if (this.props.onLazyLoad) {
            //   this.props.onLazyLoad([leftMostSlide])
            // }
            _this.adaptHeight();
            var spec = _objectSpread(_objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            var setTrackStyle = _this.didPropsChange(prevProps);
            setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
                if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) _this.changeSlide({
                    message: "index",
                    index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
                    currentSlide: _this.state.currentSlide
                });
                if (_this.props.autoplay) _this.autoPlay("update");
                else _this.pause("paused");
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
            if (_this.debouncedResize) _this.debouncedResize.cancel();
            _this.debouncedResize = (0, _lodash["default"])(function() {
                return _this.resizeWindow(setTrackStyle);
            }, 50);
            _this.debouncedResize();
        });
        _defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
            var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var isTrackMounted = Boolean(_this.track && _this.track.node);
            // prevent warning: setting state on unmounted component (server side rendering)
            if (!isTrackMounted) return;
            var spec = _objectSpread(_objectSpread({
                listRef: _this.list,
                trackRef: _this.track
            }, _this.props), _this.state);
            _this.updateState(spec, setTrackStyle, function() {
                if (_this.props.autoplay) _this.autoPlay("update");
                else _this.pause("paused");
            });
            // animating state should be cleared while resizing, otherwise autoplay stops working
            _this.setState({
                animating: false
            });
            clearTimeout(_this.animationEndCallback);
            delete _this.animationEndCallback;
        });
        _defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
            var updatedState = (0, _innerSliderUtils.initializedState)(spec);
            spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
                slideIndex: updatedState.currentSlide
            });
            var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
            spec = _objectSpread(_objectSpread({}, spec), {}, {
                left: targetLeft
            });
            var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
            if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) updatedState["trackStyle"] = trackStyle;
            _this.setState(updatedState, callback);
        });
        _defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
            if (_this.props.variableWidth) {
                var _trackWidth = 0, _trackLeft = 0;
                var childrenWidths = [];
                var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                    slideCount: _this.props.children.length
                }));
                _this.props.children.forEach(function(child) {
                    childrenWidths.push(child.props.style.width);
                    _trackWidth += child.props.style.width;
                });
                for(var i = 0; i < preClones; i++){
                    _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
                    _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
                }
                for(var _i = 0; _i < postClones; _i++)_trackWidth += childrenWidths[_i];
                for(var _i2 = 0; _i2 < _this.state.currentSlide; _i2++)_trackLeft += childrenWidths[_i2];
                var _trackStyle = {
                    width: _trackWidth + "px",
                    left: -_trackLeft + "px"
                };
                if (_this.props.centerMode) {
                    var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
                    _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
                }
                return {
                    trackStyle: _trackStyle
                };
            }
            var childrenCount = _react["default"].Children.count(_this.props.children);
            var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                slideCount: childrenCount
            });
            var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
            var trackWidth = 100 / _this.props.slidesToShow * slideCount;
            var slideWidth = 100 / slideCount;
            var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
            if (_this.props.centerMode) trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
            var trackStyle = {
                width: trackWidth + "%",
                left: trackLeft + "%"
            };
            return {
                slideWidth: slideWidth + "%",
                trackStyle: trackStyle
            };
        });
        _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
            var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
            var imagesCount = images.length, loadedCount = 0;
            Array.prototype.forEach.call(images, function(image) {
                var handler = function handler() {
                    return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
                };
                if (!image.onclick) image.onclick = function() {
                    return image.parentNode.focus();
                };
                else {
                    var prevClickHandler = image.onclick;
                    image.onclick = function(e) {
                        prevClickHandler(e);
                        image.parentNode.focus();
                    };
                }
                if (!image.onload) {
                    if (_this.props.lazyLoad) image.onload = function() {
                        _this.adaptHeight();
                        _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
                    };
                    else {
                        image.onload = handler;
                        image.onerror = function() {
                            handler();
                            _this.props.onLazyLoadError && _this.props.onLazyLoadError();
                        };
                    }
                }
            });
        });
        _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
            var slidesToLoad = [];
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            for(var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++)if (_this.state.lazyLoadedList.indexOf(index) < 0) {
                slidesToLoad.push(index);
                break;
            }
            for(var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--)if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
                slidesToLoad.push(_index);
                break;
            }
            if (slidesToLoad.length > 0) {
                _this.setState(function(state) {
                    return {
                        lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
                    };
                });
                if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
            } else if (_this.lazyLoadTimer) {
                clearInterval(_this.lazyLoadTimer);
                delete _this.lazyLoadTimer;
            }
        });
        _defineProperty(_assertThisInitialized(_this), "slideHandler", function(index) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange; // capture currentslide before state is updated
            var currentSlide = _this.state.currentSlide;
            var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
                index: index
            }, _this.props), _this.state), {}, {
                trackRef: _this.track,
                useCSS: _this.props.useCSS && !dontAnimate
            })), state = _slideHandler.state, nextState = _slideHandler.nextState;
            if (!state) return;
            beforeChange && beforeChange(currentSlide, state.currentSlide);
            var slidesToLoad = state.lazyLoadedList.filter(function(value) {
                return _this.state.lazyLoadedList.indexOf(value) < 0;
            });
            onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
            if (!_this.props.waitForAnimate && _this.animationEndCallback) {
                clearTimeout(_this.animationEndCallback);
                afterChange && afterChange(currentSlide);
                delete _this.animationEndCallback;
            }
            _this.setState(state, function() {
                // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
                if (asNavFor && _this.asNavForIndex !== index) {
                    _this.asNavForIndex = index;
                    asNavFor.innerSlider.slideHandler(index);
                }
                if (!nextState) return;
                _this.animationEndCallback = setTimeout(function() {
                    var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, [
                        "animating"
                    ]);
                    _this.setState(firstBatch, function() {
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.setState({
                                animating: animating
                            });
                        }, 10));
                        afterChange && afterChange(state.currentSlide);
                        delete _this.animationEndCallback;
                    });
                }, speed);
            });
        });
        _defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
            if (targetSlide !== 0 && !targetSlide) return;
            if (dontAnimate === true) _this.slideHandler(targetSlide, dontAnimate);
            else _this.slideHandler(targetSlide);
            _this.props.autoplay && _this.autoPlay("update");
            if (_this.props.focusOnSelect) {
                var nodes = _this.list.querySelectorAll(".slick-current");
                nodes[0] && nodes[0].focus();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(e) {
            if (_this.clickable === false) {
                e.stopPropagation();
                e.preventDefault();
            }
            _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "keyHandler", function(e) {
            var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
            dir !== "" && _this.changeSlide({
                message: dir
            });
        });
        _defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
            _this.changeSlide(options);
        });
        _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
            var preventDefault = function preventDefault(e) {
                e = e || window.event;
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            };
            window.ontouchmove = preventDefault;
        });
        _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
            window.ontouchmove = null;
        });
        _defineProperty(_assertThisInitialized(_this), "swipeStart", function(e) {
            if (_this.props.verticalSwiping) _this.disableBodyScroll();
            var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
            state !== "" && _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeMove", function(e) {
            var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            if (state["swiping"]) _this.clickable = false;
            _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e) {
            var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
                trackRef: _this.track,
                listRef: _this.list,
                slideIndex: _this.state.currentSlide
            }));
            if (!state) return;
            var triggerSlideHandler = state["triggerSlideHandler"];
            delete state["triggerSlideHandler"];
            _this.setState(state);
            if (triggerSlideHandler === undefined) return;
            _this.slideHandler(triggerSlideHandler);
            if (_this.props.verticalSwiping) _this.enableBodyScroll();
        });
        _defineProperty(_assertThisInitialized(_this), "touchEnd", function(e) {
            _this.swipeEnd(e);
            _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
            // this and fellow methods are wrapped in setTimeout
            // to make sure initialize setState has happened before
            // any of such methods are called
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "previous"
                });
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "next"
                });
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
            var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            slide = Number(slide);
            if (isNaN(slide)) return "";
            _this.callbackTimers.push(setTimeout(function() {
                return _this.changeSlide({
                    message: "index",
                    index: slide,
                    currentSlide: _this.state.currentSlide
                }, dontAnimate);
            }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "play", function() {
            var nextIndex;
            if (_this.props.rtl) nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
            else {
                if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
                else return false;
            }
            _this.slideHandler(nextIndex);
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
            if (_this.autoplayTimer) clearInterval(_this.autoplayTimer);
            var autoplaying = _this.state.autoplaying;
            if (playType === "update") {
                if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") return;
            } else if (playType === "leave") {
                if (autoplaying === "paused" || autoplaying === "focused") return;
            } else if (playType === "blur") {
                if (autoplaying === "paused" || autoplaying === "hovered") return;
            }
            _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
            _this.setState({
                autoplaying: "playing"
            });
        });
        _defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
            if (_this.autoplayTimer) {
                clearInterval(_this.autoplayTimer);
                _this.autoplayTimer = null;
            }
            var autoplaying = _this.state.autoplaying;
            if (pauseType === "paused") _this.setState({
                autoplaying: "paused"
            });
            else if (pauseType === "focused") {
                if (autoplaying === "hovered" || autoplaying === "playing") _this.setState({
                    autoplaying: "focused"
                });
            } else // pauseType  is 'hovered'
            if (autoplaying === "playing") _this.setState({
                autoplaying: "hovered"
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
            return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
            return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
            return _this.props.autoplay && _this.pause("focused");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
            return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
        });
        _defineProperty(_assertThisInitialized(_this), "render", function() {
            var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
                "slick-vertical": _this.props.vertical,
                "slick-initialized": true
            });
            var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
            var trackProps = (0, _innerSliderUtils.extractObject)(spec, [
                "fade",
                "cssEase",
                "speed",
                "infinite",
                "centerMode",
                "focusOnSelect",
                "currentSlide",
                "lazyLoad",
                "lazyLoadedList",
                "rtl",
                "slideWidth",
                "slideHeight",
                "listHeight",
                "vertical",
                "slidesToShow",
                "slidesToScroll",
                "slideCount",
                "trackStyle",
                "variableWidth",
                "unslick",
                "centerPadding",
                "targetSlide",
                "useCSS"
            ]);
            var pauseOnHover = _this.props.pauseOnHover;
            trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
                onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
                onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
                onMouseOver: pauseOnHover ? _this.onTrackOver : null,
                focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
            });
            var dots;
            if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
                var dotProps = (0, _innerSliderUtils.extractObject)(spec, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots"
                ]);
                var pauseOnDotsHover = _this.props.pauseOnDotsHover;
                dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
                    clickHandler: _this.changeSlide,
                    onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
                    onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
                    onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
                });
                dots = /*#__PURE__*/ _react["default"].createElement(_dots.Dots, dotProps);
            }
            var prevArrow, nextArrow;
            var arrowProps = (0, _innerSliderUtils.extractObject)(spec, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow"
            ]);
            arrowProps.clickHandler = _this.changeSlide;
            if (_this.props.arrows) {
                prevArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
                nextArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.NextArrow, arrowProps);
            }
            var verticalHeightStyle = null;
            if (_this.props.vertical) verticalHeightStyle = {
                height: _this.state.listHeight
            };
            var centerPaddingStyle = null;
            if (_this.props.vertical === false) {
                if (_this.props.centerMode === true) centerPaddingStyle = {
                    padding: "0px " + _this.props.centerPadding
                };
            } else if (_this.props.centerMode === true) centerPaddingStyle = {
                padding: _this.props.centerPadding + " 0px"
            };
            var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
            var touchMove = _this.props.touchMove;
            var listProps = {
                className: "slick-list",
                style: listStyle,
                onClick: _this.clickHandler,
                onMouseDown: touchMove ? _this.swipeStart : null,
                onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onMouseUp: touchMove ? _this.swipeEnd : null,
                onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onTouchStart: touchMove ? _this.swipeStart : null,
                onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                onTouchEnd: touchMove ? _this.touchEnd : null,
                onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                onKeyDown: _this.props.accessibility ? _this.keyHandler : null
            };
            var innerSliderProps = {
                className: className,
                dir: "ltr",
                style: _this.props.style
            };
            if (_this.props.unslick) {
                listProps = {
                    className: "slick-list"
                };
                innerSliderProps = {
                    className: className,
                    style: _this.props.style
                };
            }
            return /*#__PURE__*/ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/ _react["default"].createElement("div", _extends({
                ref: _this.listRefHandler
            }, listProps), /*#__PURE__*/ _react["default"].createElement(_track.Track, _extends({
                ref: _this.trackRefHandler
            }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
        });
        _this.list = null;
        _this.track = null;
        _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
            currentSlide: _this.props.initialSlide,
            targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
            slideCount: _react["default"].Children.count(_this.props.children)
        });
        _this.callbackTimers = [];
        _this.clickable = true;
        _this.debouncedResize = null;
        var ssrState = _this.ssrInit();
        _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
        return _this;
    }
    _createClass(InnerSlider, [
        {
            key: "didPropsChange",
            value: function didPropsChange(prevProps) {
                var setTrackStyle = false;
                for(var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++){
                    var key = _Object$keys[_i3];
                    if (!prevProps.hasOwnProperty(key)) {
                        setTrackStyle = true;
                        break;
                    }
                    if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) continue;
                    if (prevProps[key] !== this.props[key]) {
                        setTrackStyle = true;
                        break;
                    }
                }
                return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
            }
        }
    ]);
    return InnerSlider;
}(_react["default"].Component);

},{"a744de6232be7c25":"21dqq","ec04a66cb5b7550f":"8UbqH","e07f3edf2807989a":"3JP5n","ee3210644527e9e9":"jocGM","4ebb59180c49e814":"ev9yO","9f8f34cb7b12be47":"83iv8","af97d575a5098923":"clYrc","82f66b119f4b28ee":"ltiCX","3f6176ff557d3716":"6kpvB"}],"8UbqH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var initialState = {
    animating: false,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: false,
    edgeDragged: false,
    initialized: false,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: false,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: false,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: false,
    touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
};
var _default = exports["default"] = initialState;

},{}],"3JP5n":[function(require,module,exports,__globalThis) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var global = arguments[3];
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') return value === 0 ? value : +value;
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

},{}],"jocGM":[function(require,module,exports,__globalThis) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) classes = appendClass(classes, parseValue(arg));
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') return arg;
        if (typeof arg !== 'object') return '';
        if (Array.isArray(arg)) return classNames.apply(null, arg);
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
        var classes = '';
        for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) return value;
        if (value) return value + ' ' + newClass;
        return value + newClass;
    }
    if (0, module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) // register as 'classnames', consistent with npm package name
    define('classnames', [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"ev9yO":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
exports.clamp = clamp;
exports.extractObject = void 0;
exports.filterSettings = filterSettings;
exports.validSettings = exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = void 0;
var _react = _interopRequireDefault(require("3ab8721118ae41bb"));
var _defaultProps = _interopRequireDefault(require("48c35957d6532c8b"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function clamp(number, lowerBound, upperBound) {
    return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = exports.safePreventDefault = function safePreventDefault(event) {
    var passiveEvents = [
        "onTouchStart",
        "onTouchMove",
        "onWheel"
    ];
    if (!passiveEvents.includes(event._reactName)) event.preventDefault();
};
var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
    var onDemandSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++)if (spec.lazyLoadedList.indexOf(slideIndex) < 0) onDemandSlides.push(slideIndex);
    return onDemandSlides;
};
// return list of slides that need to be present
var getRequiredLazySlides = exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
    var requiredSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for(var slideIndex = startIndex; slideIndex < endIndex; slideIndex++)requiredSlides.push(slideIndex);
    return requiredSlides;
};
// startIndex that needs to be present
var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
    return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
    return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = exports.lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
    return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = exports.lazySlidesOnRight = function lazySlidesOnRight(spec) {
    return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
// get width of an element
var getWidth = exports.getWidth = function getWidth(elem) {
    return elem && elem.offsetWidth || 0;
};
var getHeight = exports.getHeight = function getHeight(elem) {
    return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
    var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var xDist, yDist, r, swipeAngle;
    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) return "left";
    if (swipeAngle >= 135 && swipeAngle <= 225) return "right";
    if (verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) return "up";
        else return "down";
    }
    return "vertical";
};
// whether or not we can go next
var canGoNext = exports.canGoNext = function canGoNext(spec) {
    var canGo = true;
    if (!spec.infinite) {
        if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) canGo = false;
        else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) canGo = false;
    }
    return canGo;
};
// given an object and a list of keys, return new object with given keys
var extractObject = exports.extractObject = function extractObject(spec, keys) {
    var newObject = {};
    keys.forEach(function(key) {
        return newObject[key] = spec[key];
    });
    return newObject;
};
// get initialized state
var initializedState = exports.initializedState = function initializedState(spec) {
    // spec also contains listRef, trackRef
    var slideCount = _react["default"].Children.count(spec.children);
    var listNode = spec.listRef;
    var listWidth = Math.ceil(getWidth(listNode));
    var trackNode = spec.trackRef && spec.trackRef.node;
    var trackWidth = Math.ceil(getWidth(trackNode));
    var slideWidth;
    if (!spec.vertical) {
        var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
        if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") centerPaddingAdj *= listWidth / 100;
        slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
    } else slideWidth = listWidth;
    var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * spec.slidesToShow;
    var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
    if (spec.rtl && spec.currentSlide === undefined) currentSlide = slideCount - 1 - spec.initialSlide;
    var lazyLoadedList = spec.lazyLoadedList || [];
    var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: currentSlide,
        lazyLoadedList: lazyLoadedList
    }));
    lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
    var state = {
        slideCount: slideCount,
        slideWidth: slideWidth,
        listWidth: listWidth,
        trackWidth: trackWidth,
        currentSlide: currentSlide,
        slideHeight: slideHeight,
        listHeight: listHeight,
        lazyLoadedList: lazyLoadedList
    };
    if (spec.autoplaying === null && spec.autoplay) state["autoplaying"] = "playing";
    return state;
};
var slideHandler = exports.slideHandler = function slideHandler(spec) {
    var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
    var lazyLoadedList = spec.lazyLoadedList;
    if (waitForAnimate && animating) return {};
    var animationSlide = index, finalSlide, animationLeft, finalLeft;
    var state = {}, nextState = {};
    var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
    if (fade) {
        if (!infinite && (index < 0 || index >= slideCount)) return {};
        if (index < 0) animationSlide = index + slideCount;
        else if (index >= slideCount) animationSlide = index - slideCount;
        if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) lazyLoadedList = lazyLoadedList.concat(animationSlide);
        state = {
            animating: true,
            currentSlide: animationSlide,
            lazyLoadedList: lazyLoadedList,
            targetSlide: animationSlide
        };
        nextState = {
            animating: false,
            targetSlide: animationSlide
        };
    } else {
        finalSlide = animationSlide;
        if (animationSlide < 0) {
            finalSlide = animationSlide + slideCount;
            if (!infinite) finalSlide = 0;
            else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
        } else if (!canGoNext(spec) && animationSlide > currentSlide) animationSlide = finalSlide = currentSlide;
        else if (centerMode && animationSlide >= slideCount) {
            animationSlide = infinite ? slideCount : slideCount - 1;
            finalSlide = infinite ? 0 : slideCount - 1;
        } else if (animationSlide >= slideCount) {
            finalSlide = animationSlide - slideCount;
            if (!infinite) finalSlide = slideCount - slidesToShow;
            else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
        }
        if (!infinite && animationSlide + slidesToShow >= slideCount) finalSlide = slideCount - slidesToShow;
        animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
            slideIndex: animationSlide
        }));
        finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
            slideIndex: finalSlide
        }));
        if (!infinite) {
            if (animationLeft === finalLeft) animationSlide = finalSlide;
            animationLeft = finalLeft;
        }
        if (lazyLoad) lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
            currentSlide: animationSlide
        })));
        if (!useCSS) state = {
            currentSlide: finalSlide,
            trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
                left: finalLeft
            })),
            lazyLoadedList: lazyLoadedList,
            targetSlide: targetSlide
        };
        else {
            state = {
                animating: true,
                currentSlide: finalSlide,
                trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
                    left: animationLeft
                })),
                lazyLoadedList: lazyLoadedList,
                targetSlide: targetSlide
            };
            nextState = {
                animating: false,
                currentSlide: finalSlide,
                trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
                    left: finalLeft
                })),
                swipeLeft: null,
                targetSlide: targetSlide
            };
        }
    }
    return {
        state: state,
        nextState: nextState
    };
};
var changeSlide = exports.changeSlide = function changeSlide(spec, options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
    if (options.message === "previous") {
        slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
        targetSlide = currentSlide - slideOffset;
        if (lazyLoad && !infinite) {
            previousInt = currentSlide - slideOffset;
            targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
        }
        if (!infinite) targetSlide = previousTargetSlide - slidesToScroll;
    } else if (options.message === "next") {
        slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
        targetSlide = currentSlide + slideOffset;
        if (lazyLoad && !infinite) targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
        if (!infinite) targetSlide = previousTargetSlide + slidesToScroll;
    } else if (options.message === "dots") // Click on dots
    targetSlide = options.index * options.slidesToScroll;
    else if (options.message === "children") {
        // Click on the slides
        targetSlide = options.index;
        if (infinite) {
            var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
                targetSlide: targetSlide
            }));
            if (targetSlide > options.currentSlide && direction === "left") targetSlide = targetSlide - slideCount;
            else if (targetSlide < options.currentSlide && direction === "right") targetSlide = targetSlide + slideCount;
        }
    } else if (options.message === "index") targetSlide = Number(options.index);
    return targetSlide;
};
var keyHandler = exports.keyHandler = function keyHandler(e, accessibility, rtl) {
    if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
    if (e.keyCode === 37) return rtl ? "next" : "previous";
    if (e.keyCode === 39) return rtl ? "previous" : "next";
    return "";
};
var swipeStart = exports.swipeStart = function swipeStart(e, swipe, draggable) {
    e.target.tagName === "IMG" && safePreventDefault(e);
    if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
    return {
        dragging: true,
        touchObject: {
            startX: e.touches ? e.touches[0].pageX : e.clientX,
            startY: e.touches ? e.touches[0].pageY : e.clientY,
            curX: e.touches ? e.touches[0].pageX : e.clientX,
            curY: e.touches ? e.touches[0].pageY : e.clientY
        }
    };
};
var swipeMove = exports.swipeMove = function swipeMove(e, spec) {
    // spec also contains, trackRef and slideIndex
    var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
    if (scrolling) return;
    if (animating) return safePreventDefault(e);
    if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
    var swipeLeft, state = {};
    var curLeft = getTrackLeft(spec);
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    if (!verticalSwiping && !swiping && verticalSwipeLength > 10) return {
        scrolling: true
    };
    if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
    var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    var dotCount = Math.ceil(slideCount / slidesToScroll);
    var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
    var touchSwipeLength = touchObject.swipeLength;
    if (!infinite) {
        if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
            touchSwipeLength = touchObject.swipeLength * edgeFriction;
            if (edgeDragged === false && onEdge) {
                onEdge(swipeDirection);
                state["edgeDragged"] = true;
            }
        }
    }
    if (!swiped && swipeEvent) {
        swipeEvent(swipeDirection);
        state["swiped"] = true;
    }
    if (!vertical) {
        if (!rtl) swipeLeft = curLeft + touchSwipeLength * positionOffset;
        else swipeLeft = curLeft - touchSwipeLength * positionOffset;
    } else swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
    if (verticalSwiping) swipeLeft = curLeft + touchSwipeLength * positionOffset;
    state = _objectSpread(_objectSpread({}, state), {}, {
        touchObject: touchObject,
        swipeLeft: swipeLeft,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
            left: swipeLeft
        }))
    });
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) return state;
    if (touchObject.swipeLength > 10) {
        state["swiping"] = true;
        safePreventDefault(e);
    }
    return state;
};
var swipeEnd = exports.swipeEnd = function swipeEnd(e, spec) {
    var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
    if (!dragging) {
        if (swipe) safePreventDefault(e);
        return {};
    }
    var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
    var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
    // reset the state of touch related state variables.
    var state = {
        dragging: false,
        edgeDragged: false,
        scrolling: false,
        swiping: false,
        swiped: false,
        swipeLeft: null,
        touchObject: {}
    };
    if (scrolling) return state;
    if (!touchObject.swipeLength) return state;
    if (touchObject.swipeLength > minSwipe) {
        safePreventDefault(e);
        if (onSwipe) onSwipe(swipeDirection);
        var slideCount, newSlide;
        var activeSlide = infinite ? currentSlide : targetSlide;
        switch(swipeDirection){
            case "left":
            case "up":
                newSlide = activeSlide + getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 0;
                break;
            case "right":
            case "down":
                newSlide = activeSlide - getSlideCount(spec);
                slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                state["currentDirection"] = 1;
                break;
            default:
                slideCount = activeSlide;
        }
        state["triggerSlideHandler"] = slideCount;
    } else {
        // Adjust the track back to it's original position.
        var currentLeft = getTrackLeft(spec);
        state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
            left: currentLeft
        }));
    }
    return state;
};
var getNavigableIndexes = exports.getNavigableIndexes = function getNavigableIndexes(spec) {
    var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
    var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
    var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
    var indexes = [];
    while(breakpoint < max){
        indexes.push(breakpoint);
        breakpoint = counter + spec.slidesToScroll;
        counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
    }
    return indexes;
};
var checkNavigable = exports.checkNavigable = function checkNavigable(spec, index) {
    var navigables = getNavigableIndexes(spec);
    var prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1];
    else for(var n in navigables){
        if (index < navigables[n]) {
            index = prevNavigable;
            break;
        }
        prevNavigable = navigables[n];
    }
    return index;
};
var getSlideCount = exports.getSlideCount = function getSlideCount(spec) {
    var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
    if (spec.swipeToSlide) {
        var swipedSlide;
        var slickList = spec.listRef;
        var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
        Array.from(slides).every(function(slide) {
            if (!spec.vertical) {
                if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            } else if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
                swipedSlide = slide;
                return false;
            }
            return true;
        });
        if (!swipedSlide) return 0;
        var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
        var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
        return slidesTraversed;
    } else return spec.slidesToScroll;
};
var checkSpecKeys = exports.checkSpecKeys = function checkSpecKeys(spec, keysArray) {
    return keysArray.reduce(function(value, key) {
        return value && spec.hasOwnProperty(key);
    }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth"
    ]);
    var trackWidth, trackHeight;
    if (!spec.vertical) trackWidth = getTotalSlides(spec) * spec.slideWidth;
    else {
        var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
        trackHeight = trackChildren * spec.slideHeight;
    }
    var style = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
    };
    if (spec.useTransform) {
        var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
        style = _objectSpread(_objectSpread({}, style), {}, {
            WebkitTransform: WebkitTransform,
            transform: transform,
            msTransform: msTransform
        });
    } else if (spec.vertical) style["top"] = spec.left;
    else style["left"] = spec.left;
    if (spec.fade) style = {
        opacity: 1
    };
    if (trackWidth) style.width = trackWidth;
    if (trackHeight) style.height = trackHeight;
    // Fallback for IE8
    if (window && !window.addEventListener && window.attachEvent) {
        if (!spec.vertical) style.marginLeft = spec.left + "px";
        else style.marginTop = spec.left + "px";
    }
    return style;
};
var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
    checkSpecKeys(spec, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth",
        "speed",
        "cssEase"
    ]);
    var style = getTrackCSS(spec);
    // useCSS is true by default so it can be undefined
    if (spec.useTransform) {
        style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
        style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
    } else if (spec.vertical) style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    else style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    return style;
};
var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
    if (spec.unslick) return 0;
    checkSpecKeys(spec, [
        "slideIndex",
        "trackRef",
        "infinite",
        "centerMode",
        "slideCount",
        "slidesToShow",
        "slidesToScroll",
        "slideWidth",
        "listWidth",
        "variableWidth",
        "slideHeight"
    ]);
    var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
    var slideOffset = 0;
    var targetLeft;
    var targetSlide;
    var verticalOffset = 0;
    if (fade || spec.slideCount === 1) return 0;
    var slidesToOffset = 0;
    if (infinite) {
        slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
        // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
        // shift current slide to center of the frame
        if (centerMode) slidesToOffset += parseInt(slidesToShow / 2);
    } else {
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) slidesToOffset = slidesToShow - slideCount % slidesToScroll;
        if (centerMode) slidesToOffset = parseInt(slidesToShow / 2);
    }
    slideOffset = slidesToOffset * slideWidth;
    verticalOffset = slidesToOffset * slideHeight;
    if (!vertical) targetLeft = slideIndex * slideWidth * -1 + slideOffset;
    else targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
    if (variableWidth === true) {
        var targetSlideIndex;
        var trackElem = trackRef && trackRef.node;
        targetSlideIndex = slideIndex + getPreClones(spec);
        targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (centerMode === true) {
            targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
            targetSlide = trackElem && trackElem.children[targetSlideIndex];
            targetLeft = 0;
            for(var slide = 0; slide < targetSlideIndex; slide++)targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
            targetLeft -= parseInt(spec.centerPadding);
            targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
        }
    }
    return targetLeft;
};
var getPreClones = exports.getPreClones = function getPreClones(spec) {
    if (spec.unslick || !spec.infinite) return 0;
    if (spec.variableWidth) return spec.slideCount;
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = exports.getPostClones = function getPostClones(spec) {
    if (spec.unslick || !spec.infinite) return 0;
    if (spec.variableWidth) return spec.slideCount;
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
    return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = exports.siblingDirection = function siblingDirection(spec) {
    if (spec.targetSlide > spec.currentSlide) {
        if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) return "left";
        return "right";
    } else {
        if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) return "right";
        return "left";
    }
};
var slidesOnRight = exports.slidesOnRight = function slidesOnRight(_ref) {
    var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
    // returns no of slides on the right of active slide
    if (centerMode) {
        var right = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) right += 1;
        if (rtl && slidesToShow % 2 === 0) right += 1;
        return right;
    }
    if (rtl) return 0;
    return slidesToShow - 1;
};
var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(_ref2) {
    var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
    // returns no of slides on the left of active slide
    if (centerMode) {
        var left = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0) left += 1;
        if (!rtl && slidesToShow % 2 === 0) left += 1;
        return left;
    }
    if (rtl) return slidesToShow - 1;
    return 0;
};
var canUseDOM = exports.canUseDOM = function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = exports.validSettings = Object.keys(_defaultProps["default"]);
function filterSettings(settings) {
    return validSettings.reduce(function(acc, settingName) {
        if (settings.hasOwnProperty(settingName)) acc[settingName] = settings[settingName];
        return acc;
    }, {});
}

},{"3ab8721118ae41bb":"21dqq","48c35957d6532c8b":"7XPrs"}],"7XPrs":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("a5d7371194f14278"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
var defaultProps = {
    accessibility: true,
    adaptiveHeight: false,
    afterChange: null,
    appendDots: function appendDots(dots) {
        return /*#__PURE__*/ _react["default"].createElement("ul", {
            style: {
                display: "block"
            }
        }, dots);
    },
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: null,
    centerMode: false,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function customPaging(i) {
        return /*#__PURE__*/ _react["default"].createElement("button", null, i + 1);
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeEvent: null,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    waitForAnimate: true,
    asNavFor: null,
    unslick: false
};
var _default = exports["default"] = defaultProps;

},{"a5d7371194f14278":"21dqq"}],"83iv8":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Track = void 0;
var _react = _interopRequireDefault(require("ca0e742d783b68d8"));
var _classnames = _interopRequireDefault(require("162867a42a38a6a8"));
var _innerSliderUtils = require("edf4e495037ff39f");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
    var slickActive, slickCenter, slickCloned;
    var centerOffset, index;
    if (spec.rtl) index = spec.slideCount - 1 - spec.index;
    else index = spec.index;
    slickCloned = index < 0 || index >= spec.slideCount;
    if (spec.centerMode) {
        centerOffset = Math.floor(spec.slidesToShow / 2);
        slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
        if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) slickActive = true;
    } else slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
    var focusedSlide;
    if (spec.targetSlide < 0) focusedSlide = spec.targetSlide + spec.slideCount;
    else if (spec.targetSlide >= spec.slideCount) focusedSlide = spec.targetSlide - spec.slideCount;
    else focusedSlide = spec.targetSlide;
    var slickCurrent = index === focusedSlide;
    return {
        "slick-slide": true,
        "slick-active": slickActive,
        "slick-center": slickCenter,
        "slick-cloned": slickCloned,
        "slick-current": slickCurrent // dubious in case of RTL
    };
};
var getSlideStyle = function getSlideStyle(spec) {
    var style = {};
    if (spec.variableWidth === undefined || spec.variableWidth === false) style.width = spec.slideWidth;
    if (spec.fade) {
        style.position = "relative";
        if (spec.vertical) style.top = -spec.index * parseInt(spec.slideHeight);
        else style.left = -spec.index * parseInt(spec.slideWidth);
        style.opacity = spec.currentSlide === spec.index ? 1 : 0;
        style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
        if (spec.useCSS) style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
    return style;
};
var getKey = function getKey(child, fallbackKey) {
    return child.key || fallbackKey;
};
var renderSlides = function renderSlides(spec) {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var childrenCount = _react["default"].Children.count(spec.children);
    var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
    var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
    _react["default"].Children.forEach(spec.children, function(elem, index) {
        var child;
        var childOnClickOptions = {
            message: "children",
            index: index,
            slidesToScroll: spec.slidesToScroll,
            currentSlide: spec.currentSlide
        };
        // in case of lazyLoad, whether or not we want to fetch the slide
        if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) child = elem;
        else child = /*#__PURE__*/ _react["default"].createElement("div", null);
        var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
            index: index
        }));
        var slideClass = child.props.className || "";
        var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
            index: index
        }));
        // push a cloned element of the desired slide
        slides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
            key: "original" + getKey(child, index),
            "data-index": index,
            className: (0, _classnames["default"])(slideClasses, slideClass),
            tabIndex: "-1",
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread(_objectSpread({
                outline: "none"
            }, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);
                if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
            }
        }));
        // if slide needs to be precloned or postcloned
        if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
            var preCloneNo = childrenCount - index;
            if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec)) {
                key = -preCloneNo;
                if (key >= startIndex) child = elem;
                slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
                    index: key
                }));
                preCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
                    key: "precloned" + getKey(child, key),
                    "data-index": key,
                    tabIndex: "-1",
                    className: (0, _classnames["default"])(slideClasses, slideClass),
                    "aria-hidden": !slideClasses["slick-active"],
                    style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
                    onClick: function onClick(e) {
                        child.props && child.props.onClick && child.props.onClick(e);
                        if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
                    }
                }));
            }
            if (index < (0, _innerSliderUtils.getPostClones)(spec)) {
                key = childrenCount + index;
                if (key < endIndex) child = elem;
                slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
                    index: key
                }));
                postCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
                    key: "postcloned" + getKey(child, key),
                    "data-index": key,
                    tabIndex: "-1",
                    className: (0, _classnames["default"])(slideClasses, slideClass),
                    "aria-hidden": !slideClasses["slick-active"],
                    style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
                    onClick: function onClick(e) {
                        child.props && child.props.onClick && child.props.onClick(e);
                        if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
                    }
                }));
            }
        }
    });
    if (spec.rtl) return preCloneSlides.concat(slides, postCloneSlides).reverse();
    else return preCloneSlides.concat(slides, postCloneSlides);
};
var Track = exports.Track = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(Track, _React$PureComponent);
    var _super = _createSuper(Track);
    function Track() {
        var _this;
        _classCallCheck(this, Track);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "node", null);
        _defineProperty(_assertThisInitialized(_this), "handleRef", function(ref) {
            _this.node = ref;
        });
        return _this;
    }
    _createClass(Track, [
        {
            key: "render",
            value: function render() {
                var slides = renderSlides(this.props);
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                return /*#__PURE__*/ _react["default"].createElement("div", _extends({
                    ref: this.handleRef,
                    className: "slick-track",
                    style: this.props.trackStyle
                }, mouseEvents), slides);
            }
        }
    ]);
    return Track;
}(_react["default"].PureComponent);

},{"ca0e742d783b68d8":"21dqq","162867a42a38a6a8":"jocGM","edf4e495037ff39f":"ev9yO"}],"clYrc":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dots = void 0;
var _react = _interopRequireDefault(require("696021bbf1f8a31c"));
var _classnames = _interopRequireDefault(require("732d2371253fe197"));
var _innerSliderUtils = require("dd59b1a16b1aa887");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
var getDotCount = function getDotCount(spec) {
    var dots;
    if (spec.infinite) dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
    else dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
    return dots;
};
var Dots = exports.Dots = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(Dots, _React$PureComponent);
    var _super = _createSuper(Dots);
    function Dots() {
        _classCallCheck(this, Dots);
        return _super.apply(this, arguments);
    }
    _createClass(Dots, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                // In Autoplay the focus stays on clicked button even after transition
                // to next slide. That only goes away by click somewhere outside
                e.preventDefault();
                this.props.clickHandler(options);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
                var dotCount = getDotCount({
                    slideCount: slideCount,
                    slidesToScroll: slidesToScroll,
                    slidesToShow: slidesToShow,
                    infinite: infinite
                });
                var mouseEvents = {
                    onMouseEnter: onMouseEnter,
                    onMouseOver: onMouseOver,
                    onMouseLeave: onMouseLeave
                };
                var dots = [];
                for(var i = 0; i < dotCount; i++){
                    var _rightBound = (i + 1) * slidesToScroll - 1;
                    var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
                    var _leftBound = rightBound - (slidesToScroll - 1);
                    var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
                    var className = (0, _classnames["default"])({
                        "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
                    });
                    var dotOptions = {
                        message: "dots",
                        index: i,
                        slidesToScroll: slidesToScroll,
                        currentSlide: currentSlide
                    };
                    var onClick = this.clickHandler.bind(this, dotOptions);
                    dots = dots.concat(/*#__PURE__*/ _react["default"].createElement("li", {
                        key: i,
                        className: className
                    }, /*#__PURE__*/ _react["default"].cloneElement(this.props.customPaging(i), {
                        onClick: onClick
                    })));
                }
                return /*#__PURE__*/ _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
                    className: this.props.dotsClass
                }, mouseEvents));
            }
        }
    ]);
    return Dots;
}(_react["default"].PureComponent);

},{"696021bbf1f8a31c":"21dqq","732d2371253fe197":"jocGM","dd59b1a16b1aa887":"ev9yO"}],"ltiCX":[function(require,module,exports,__globalThis) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(require("485e7abcce9f07ce"));
var _classnames = _interopRequireDefault(require("3c953a04dbb6b2ea"));
var _innerSliderUtils = require("7e3c25fee8d08e51");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
var PrevArrow = exports.PrevArrow = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(PrevArrow, _React$PureComponent);
    var _super = _createSuper(PrevArrow);
    function PrevArrow() {
        _classCallCheck(this, PrevArrow);
        return _super.apply(this, arguments);
    }
    _createClass(PrevArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) e.preventDefault();
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var prevClasses = {
                    "slick-arrow": true,
                    "slick-prev": true
                };
                var prevHandler = this.clickHandler.bind(this, {
                    message: "previous"
                });
                if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
                    prevClasses["slick-disabled"] = true;
                    prevHandler = null;
                }
                var prevArrowProps = {
                    key: "0",
                    "data-role": "none",
                    className: (0, _classnames["default"])(prevClasses),
                    style: {
                        display: "block"
                    },
                    onClick: prevHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var prevArrow;
                if (this.props.prevArrow) prevArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
                else prevArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
                    key: "0",
                    type: "button"
                }, prevArrowProps), " ", "Previous");
                return prevArrow;
            }
        }
    ]);
    return PrevArrow;
}(_react["default"].PureComponent);
var NextArrow = exports.NextArrow = /*#__PURE__*/ function(_React$PureComponent2) {
    _inherits(NextArrow, _React$PureComponent2);
    var _super2 = _createSuper(NextArrow);
    function NextArrow() {
        _classCallCheck(this, NextArrow);
        return _super2.apply(this, arguments);
    }
    _createClass(NextArrow, [
        {
            key: "clickHandler",
            value: function clickHandler(options, e) {
                if (e) e.preventDefault();
                this.props.clickHandler(options, e);
            }
        },
        {
            key: "render",
            value: function render() {
                var nextClasses = {
                    "slick-arrow": true,
                    "slick-next": true
                };
                var nextHandler = this.clickHandler.bind(this, {
                    message: "next"
                });
                if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
                    nextClasses["slick-disabled"] = true;
                    nextHandler = null;
                }
                var nextArrowProps = {
                    key: "1",
                    "data-role": "none",
                    className: (0, _classnames["default"])(nextClasses),
                    style: {
                        display: "block"
                    },
                    onClick: nextHandler
                };
                var customProps = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                };
                var nextArrow;
                if (this.props.nextArrow) nextArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
                else nextArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
                    key: "1",
                    type: "button"
                }, nextArrowProps), " ", "Next");
                return nextArrow;
            }
        }
    ]);
    return NextArrow;
}(_react["default"].PureComponent);

},{"485e7abcce9f07ce":"21dqq","3c953a04dbb6b2ea":"jocGM","7e3c25fee8d08e51":"ev9yO"}],"6kpvB":[function(require,module,exports,__globalThis) {
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var MapShim = function() {
    if (typeof Map !== 'undefined') return Map;
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) this.__entries__[index][1] = value;
            else this.__entries__.push([
                key,
                value
            ]);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) entries.splice(index, 1);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) ctx = null;
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
// Returns global object of a current environment.
var global$1 = function() {
    if (typeof global !== 'undefined' && global.Math === Math) return global;
    if (typeof self !== 'undefined' && self.Math === Math) return self;
    if (typeof window !== 'undefined' && window.Math === Math) return window;
    // eslint-disable-next-line no-new-func
    return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === 'function') // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) proxy();
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) return;
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight'
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var ResizeObserverController = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) this.observers_.push(observer);
        // Add listeners if they haven't been added yet.
        if (!this.connected_) this.connect_();
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) observers.splice(index, 1);
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) this.disconnect_();
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) this.refresh();
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) return;
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) return;
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) this.mutationsObserver_.disconnect();
        if (this.mutationEventsAdded_) document.removeEventListener('DOMSubtreeModified', this.refresh);
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) this.refresh();
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) this.instance_ = new ResizeObserverController();
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};
// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++)positions[_i - 1] = arguments[_i];
    return positions.reduce(function(size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function getPaddings(styles) {
    var positions = [
        'top',
        'right',
        'bottom',
        'left'
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) return emptyRect;
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) width -= getBordersSize(styles, 'left', 'right') + horizPad;
        if (Math.round(height + vertPad) !== clientHeight) height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) width -= vertScrollbar;
        if (Math.abs(horizScrollbar) !== 1) height -= horizScrollbar;
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function getContentRect(target) {
    if (!isBrowser) return emptyRect;
    if (isSVGGraphicsElement(target)) return getSVGContentRect(target);
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var ResizeObservation = /** @class */ function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserverEntry = /** @class */ function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserverSPI = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new MapShim();
        if (typeof callback !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) return;
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) return;
        observations.delete(target);
        if (!observations.size) this.controller_.removeObserver(this);
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) _this.activeObservations_.push(observation);
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) return;
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var ResizeObserver = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});
var index = function() {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') return global$1.ResizeObserver;
    return ResizeObserver;
}();
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8z8hu":[function(require,module,exports,__globalThis) {
var camel2hyphen = require("7373665823bd5d3d");
var isDimension = function(feature) {
    var re = /[height|width]$/;
    return re.test(feature);
};
var obj2mq = function(obj) {
    var mq = '';
    var features = Object.keys(obj);
    features.forEach(function(feature, index) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        // Add px to dimension features
        if (isDimension(feature) && typeof value === 'number') value = value + 'px';
        if (value === true) mq += feature;
        else if (value === false) mq += 'not ' + feature;
        else mq += '(' + feature + ': ' + value + ')';
        if (index < features.length - 1) mq += ' and ';
    });
    return mq;
};
var json2mq = function(query) {
    var mq = '';
    if (typeof query === 'string') return query;
    // Handling array of media queries
    if (query instanceof Array) {
        query.forEach(function(q, index) {
            mq += obj2mq(q);
            if (index < query.length - 1) mq += ', ';
        });
        return mq;
    }
    // Handling single media query
    return obj2mq(query);
};
module.exports = json2mq;

},{"7373665823bd5d3d":"fSU4H"}],"fSU4H":[function(require,module,exports,__globalThis) {
var camel2hyphen = function(str) {
    return str.replace(/[A-Z]/g, function(match) {
        return '-' + match.toLowerCase();
    }).toLowerCase();
};
module.exports = camel2hyphen;

},{}],"gyhyx":[function() {},{}],"eyap3":[function() {},{}]},["aQL8O","iSGEK"], null, "parcelRequire94c2")

//# sourceMappingURL=AboutUS.f394d611.js.map
