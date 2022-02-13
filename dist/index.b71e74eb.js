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
        this
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
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _user = require("./User");
var _company = require("./Company");
var _custumMap = require("./CustumMap");
const customMap = new _custumMap.CustomMap("map");
const user = new _user.User;
const company = new _company.Company;
customMap.addMarker(user);
customMap.addMarker(company);

},{"./CustumMap":"94hrz","./User":"amVbG","./Company":"8qDoX"}],"94hrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CustomMap", ()=>CustomMap
);
class CustomMap {
    constructor(divId){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        });
    }
    addMarker(mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener("click", ()=>{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.makerContent()
            });
            infowindow.open(this.googleMap, marker);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"amVbG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User
);
var _casualBrowserify = require("casual-browserify");
var _casualBrowserifyDefault = parcelHelpers.interopDefault(_casualBrowserify);
class User {
    constructor(){
        this.name = _casualBrowserifyDefault.default.name;
        this.location = {
            lat: parseFloat(_casualBrowserifyDefault.default.latitude),
            lng: parseFloat(_casualBrowserifyDefault.default.longitude)
        };
    }
    makerContent() {
        return `Name : ${this.name}`;
    }
}

},{"casual-browserify":"kU7Tp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kU7Tp":[function(require,module,exports) {
/* casual-browserify: this file is auto-generated by scripts/generate.js. Pull-requests should not alter this file! */ var helpers = require('./helpers');
var providerRequires = {
    address: require('./providers/address'),
    color: require('./providers/color'),
    date: require('./providers/date'),
    internet: require('./providers/internet'),
    misc: require('./providers/misc'),
    number: require('./providers/number'),
    payment: require('./providers/payment'),
    person: require('./providers/person'),
    text: require('./providers/text')
};
var localeRequires = {
    'ar_SY': {
        address: require('./providers/ar_SY/address'),
        color: require('./providers/ar_SY/color'),
        date: require('./providers/ar_SY/date'),
        person: require('./providers/ar_SY/person'),
        text: require('./providers/ar_SY/text')
    },
    'de_DE': {
        address: require('./providers/de_DE/address'),
        date: require('./providers/de_DE/date'),
        person: require('./providers/de_DE/person'),
        text: require('./providers/de_DE/text')
    },
    'en_CA': {
        address: require('./providers/en_CA/address')
    },
    'en_US': {
        address: require('./providers/en_US/address')
    },
    'fr_FR': {
        address: require('./providers/fr_FR/address'),
        person: require('./providers/fr_FR/person')
    },
    'id_ID': {
        address: require('./providers/id_ID/address')
    },
    'it_CH': {
        address: require('./providers/it_CH/address'),
        date: require('./providers/it_CH/date'),
        person: require('./providers/it_CH/person')
    },
    'it_IT': {
        address: require('./providers/it_IT/address'),
        date: require('./providers/it_IT/date'),
        person: require('./providers/it_IT/person')
    },
    'nb_NO': {
        address: require('./providers/nb_NO/address'),
        color: require('./providers/nb_NO/color'),
        date: require('./providers/nb_NO/date'),
        person: require('./providers/nb_NO/person')
    },
    'nl_NL': {
        address: require('./providers/nl_NL/address'),
        person: require('./providers/nl_NL/person')
    },
    'pt_BR': {
        address: require('./providers/pt_BR/address'),
        color: require('./providers/pt_BR/color'),
        person: require('./providers/pt_BR/person')
    },
    'ro_RO': {
        address: require('./providers/ro_RO/address'),
        date: require('./providers/ro_RO/date'),
        person: require('./providers/ro_RO/person')
    },
    'ru_RU': {
        address: require('./providers/ru_RU/address'),
        color: require('./providers/ru_RU/color'),
        internet: require('./providers/ru_RU/internet'),
        person: require('./providers/ru_RU/person'),
        text: require('./providers/ru_RU/text')
    },
    'sv_SE': {
        address: require('./providers/sv_SE/address'),
        person: require('./providers/sv_SE/person'),
        text: require('./providers/sv_SE/text')
    },
    'uk_UA': {
        address: require('./providers/uk_UA/address'),
        color: require('./providers/uk_UA/color'),
        text: require('./providers/uk_UA/text')
    }
};
var safe_require = function(locale, provider) {
    return localeRequires[locale][provider] || {
    };
};
var require_provider = function(provider) {
    return providerRequires[provider] || {
    };
};
var build_casual = function() {
    var casual1 = helpers.extend({
    }, helpers);
    casual1.functions = function() {
        var adapter = {
        };
        Object.keys(this).forEach(function(name) {
            if (name[0] === '_') adapter[name.slice(1)] = casual1[name];
        });
        return adapter;
    };
    var providers = [
        'address',
        'text',
        'internet',
        'person',
        'number',
        'date',
        'payment',
        'misc',
        'color'
    ];
    casual1.register_locale = function(locale) {
        casual1.define(locale, function() {
            var casual = build_casual();
            providers.forEach(function(provider) {
                casual.register_provider(helpers.extend(require_provider(provider), safe_require(locale, provider)));
            });
            return casual;
        });
    };
    var locales = [
        'en_US',
        'ru_RU',
        'uk_UA',
        'nl_NL',
        'en_CA',
        'fr_FR',
        'id_ID',
        'it_CH',
        'it_IT',
        'de_DE',
        'ar_SY',
        'pt_BR',
        'nb_NO',
        'ro_RO',
        'sv_SE', 
    ];
    locales.forEach(casual1.register_locale);
    return casual1;
};
// Default locale is en_US
module.exports = build_casual().en_US;

},{"./helpers":"gtLNd","./providers/address":"F9Fuw","./providers/color":"2rw89","./providers/date":"511A1","./providers/internet":"eFA8u","./providers/misc":"51Kgu","./providers/number":"4B1lU","./providers/payment":"3J87d","./providers/person":"kTSFl","./providers/text":"6LZb4","./providers/ar_SY/address":"9w0I1","./providers/ar_SY/color":"2Ku8o","./providers/ar_SY/date":"fNjtQ","./providers/ar_SY/person":"2knaR","./providers/ar_SY/text":"8S4KY","./providers/de_DE/address":"lJ0po","./providers/de_DE/date":"1SwNX","./providers/de_DE/person":"55buM","./providers/de_DE/text":"lIWCO","./providers/en_CA/address":"ihviF","./providers/en_US/address":"5lsB1","./providers/fr_FR/address":"8Tw0x","./providers/fr_FR/person":"9uVc7","./providers/id_ID/address":"rjc5J","./providers/it_CH/address":"dFFve","./providers/it_CH/date":"l6eOB","./providers/it_CH/person":"VZe1W","./providers/it_IT/address":"jDgvo","./providers/it_IT/date":"2HxSc","./providers/it_IT/person":"8mEsg","./providers/nb_NO/address":"3is4u","./providers/nb_NO/color":"d1RXh","./providers/nb_NO/date":"5Fsia","./providers/nb_NO/person":"7S9HB","./providers/nl_NL/address":"2L9Ge","./providers/nl_NL/person":"dyeNN","./providers/pt_BR/address":"jAK27","./providers/pt_BR/color":"b5hIV","./providers/pt_BR/person":"6hNaB","./providers/ro_RO/address":"3Ga3W","./providers/ro_RO/date":"axcKB","./providers/ro_RO/person":"c8VFA","./providers/ru_RU/address":"5zzYP","./providers/ru_RU/color":"buzE7","./providers/ru_RU/internet":"bVWgY","./providers/ru_RU/person":"bfCSD","./providers/ru_RU/text":"1thEP","./providers/sv_SE/address":"kjE6w","./providers/sv_SE/person":"4WPTL","./providers/sv_SE/text":"bBOGY","./providers/uk_UA/address":"bBGdV","./providers/uk_UA/color":"5uhXl","./providers/uk_UA/text":"lvHAO"}],"gtLNd":[function(require,module,exports) {
var number = require('./providers/number');
var random_element = function(array) {
    var index = this.integer(0, array.length - 1);
    return array[index];
};
var random_key = function(object) {
    var keys = Object.keys(object);
    return this.random_element(keys);
};
var random_value = function(object) {
    return object[this.random_key(object)];
};
var register_provider = function(provider) {
    for(var i in provider)this.define(i, provider[i]);
};
var extend = function(a, b) {
    for(var i in b)a[i] = b[i];
    return a;
};
var define = function(name, generator) {
    if (typeof generator != 'function') {
        this[name] = generator;
        return;
    }
    if (generator.length) this[name] = generator.bind(this);
    else Object.defineProperty(this, name, {
        get: generator,
        configurable: true
    });
    this['_' + name] = generator.bind(this);
};
var numerify = function(format) {
    return format.replace(/#/g, this._digit);
};
var letterify = function(format) {
    return format.replace(/X/g, this._letter);
};
var join = function() {
    var tokens = Array.prototype.slice.apply(arguments);
    return tokens.filter(Boolean).join(' ');
};
var populate = function(format) {
    var casual = this;
    return format.replace(/\{\{(.+?)\}\}/g, function(match, generator) {
        return casual['_' + generator]();
    });
};
var populate_one_of = function(formats) {
    return this.populate(this.random_element(formats));
};
module.exports = {
    random_element: random_element,
    random_value: random_value,
    random_key: random_key,
    register_provider: register_provider,
    extend: extend,
    define: define,
    numerify: numerify,
    letterify: letterify,
    join: join,
    populate: populate,
    populate_one_of: populate_one_of
};

},{"./providers/number":"4B1lU"}],"4B1lU":[function(require,module,exports) {
var MersenneTwister = require('mersenne-twister');
// Pseudorandom number generator
var generator = new MersenneTwister();
var array_of = function(n, generator1) {
    var result = [];
    for(var i = 0; i < n; ++i)result.push(generator1());
    return result;
};
var provider = {
    integer: function(from, to) {
        from = typeof from === 'undefined' ? -1000 : from - 0;
        to = typeof to === 'undefined' ? 1000 : to - 0;
        return Math.round(from + (to - from) * this.random);
    },
    digit: function() {
        return Math.abs(this.integer(0) % 10);
    },
    random: function() {
        return generator.random();
    },
    double: function(from, to) {
        from = typeof from === 'undefined' ? -1000 : from - 0;
        to = typeof to === 'undefined' ? 1000 : to - 0;
        return from + (to - from) * this.random;
    },
    array_of_digits: function(n) {
        n = n || 7;
        return array_of(n, this._digit);
    },
    array_of_integers: function(n) {
        n = n || 7;
        return array_of(n, this._integer);
    },
    array_of_doubles: function(n) {
        n = n || 7;
        return array_of(n, this._double);
    },
    coin_flip: function() {
        return generator.random() < 0.5;
    },
    seed: function(seed) {
        generator.init_seed(seed);
    }
};
module.exports = provider;

},{"mersenne-twister":"5yLHH"}],"5yLHH":[function(require,module,exports) {
/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/ /*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/ var MersenneTwister = function(seed) {
    if (seed == undefined) seed = new Date().getTime();
    /* Period parameters */ this.N = 624;
    this.M = 397;
    this.MATRIX_A = 2567483615; /* constant vector a */ 
    this.UPPER_MASK = 2147483648; /* most significant w-r bits */ 
    this.LOWER_MASK = 2147483647; /* least significant r bits */ 
    this.mt = new Array(this.N); /* the array for the state vector */ 
    this.mti = this.N + 1; /* mti==N+1 means mt[N] is not initialized */ 
    if (seed.constructor == Array) this.init_by_array(seed, seed.length);
    else this.init_seed(seed);
};
/* initializes mt[N] with a seed */ /* origin name init_genrand */ MersenneTwister.prototype.init_seed = function(s) {
    this.mt[0] = s >>> 0;
    for(this.mti = 1; this.mti < this.N; this.mti++){
        var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
        this.mt[this.mti] = (((s & 4294901760) >>> 16) * 1812433253 << 16) + (s & 65535) * 1812433253 + this.mti;
        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */ /* In the previous versions, MSBs of the seed affect   */ /* only MSBs of the array mt[].                        */ /* 2002/01/09 modified by Makoto Matsumoto             */ this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */ }
};
/* initialize by an array with array-length */ /* init_key is the array for initializing keys */ /* key_length is its length */ /* slight change for C++, 2004/2/26 */ MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
    var i, j, k;
    this.init_seed(19650218);
    i = 1;
    j = 0;
    k = this.N > key_length ? this.N : key_length;
    for(; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 4294901760) >>> 16) * 1664525 << 16) + (s & 65535) * 1664525) + init_key[j] + j; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        j++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
        if (j >= key_length) j = 0;
    }
    for(k = this.N - 1; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 4294901760) >>> 16) * 1566083941 << 16) + (s & 65535) * 1566083941) - i; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
    }
    this.mt[0] = 2147483648; /* MSB is 1; assuring non-zero initial array */ 
};
/* generates a random number on [0,0xffffffff]-interval */ /* origin name genrand_int32 */ MersenneTwister.prototype.random_int = function() {
    var y;
    var mag01 = new Array(0, this.MATRIX_A);
    /* mag01[x] = x * MATRIX_A  for x=0,1 */ if (this.mti >= this.N) {
        var kk;
        if (this.mti == this.N + 1) /* if init_seed() has not been called, */ this.init_seed(5489); /* a default initial seed is used */ 
        for(kk = 0; kk < this.N - this.M; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 1];
        }
        for(; kk < this.N - 1; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 1];
        }
        y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
        this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 1];
        this.mti = 0;
    }
    y = this.mt[this.mti++];
    /* Tempering */ y ^= y >>> 11;
    y ^= y << 7 & 2636928640;
    y ^= y << 15 & 4022730752;
    y ^= y >>> 18;
    return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */ /* origin name genrand_int31 */ MersenneTwister.prototype.random_int31 = function() {
    return this.random_int() >>> 1;
};
/* generates a random number on [0,1]-real-interval */ /* origin name genrand_real1 */ MersenneTwister.prototype.random_incl = function() {
    return this.random_int() * (1 / 4294967295);
/* divided by 2^32-1 */ };
/* generates a random number on [0,1)-real-interval */ MersenneTwister.prototype.random = function() {
    return this.random_int() * (1 / 4294967296);
/* divided by 2^32 */ };
/* generates a random number on (0,1)-real-interval */ /* origin name genrand_real3 */ MersenneTwister.prototype.random_excl = function() {
    return (this.random_int() + 0.5) * (1 / 4294967296);
/* divided by 2^32 */ };
/* generates a random number on [0,1) with 53-bit resolution*/ /* origin name genrand_res53 */ MersenneTwister.prototype.random_long = function() {
    var a = this.random_int() >>> 5, b = this.random_int() >>> 6;
    return (a * 67108864 + b) * (1 / 9007199254740992);
};
/* These real versions are due to Isaku Wada, 2002/01/09 added */ module.exports = MersenneTwister;

},{}],"F9Fuw":[function(require,module,exports) {
var provider = {
    city_prefixes: [
        'North',
        'East',
        'West',
        'South',
        'New',
        'Lake',
        'Port'
    ],
    city_suffixes: [
        'town',
        'ton',
        'land',
        'ville',
        'berg',
        'burgh',
        'borough',
        'bury',
        'view',
        'port',
        'mouth',
        'stad',
        'furt',
        'chester',
        'mouth',
        'fort',
        'haven',
        'side',
        'shire'
    ],
    street_suffixes: [
        'Alley',
        'Avenue',
        'Branch',
        'Bridge',
        'Brook',
        'Brooks',
        'Burg',
        'Burgs',
        'Bypass',
        'Camp',
        'Canyon',
        'Cape',
        'Causeway',
        'Center',
        'Centers',
        'Circle',
        'Circles',
        'Cliff',
        'Cliffs',
        'Club',
        'Common',
        'Corner',
        'Corners',
        'Course',
        'Court',
        'Courts',
        'Cove',
        'Coves',
        'Creek',
        'Crescent',
        'Crest',
        'Crossing',
        'Crossroad',
        'Curve',
        'Dale',
        'Dam',
        'Divide',
        'Drive',
        'Drive',
        'Drives',
        'Estate',
        'Estates',
        'Expressway',
        'Extension',
        'Extensions',
        'Fall',
        'Falls',
        'Ferry',
        'Field',
        'Fields',
        'Flat',
        'Flats',
        'Ford',
        'Fords',
        'Forest',
        'Forge',
        'Forges',
        'Fork',
        'Forks',
        'Fort',
        'Freeway',
        'Garden',
        'Gardens',
        'Gateway',
        'Glen',
        'Glens',
        'Green',
        'Greens',
        'Grove',
        'Groves',
        'Harbor',
        'Harbors',
        'Haven',
        'Heights',
        'Highway',
        'Hill',
        'Hills',
        'Hollow',
        'Inlet',
        'Inlet',
        'Island',
        'Island',
        'Islands',
        'Islands',
        'Isle',
        'Isle',
        'Junction',
        'Junctions',
        'Key',
        'Keys',
        'Knoll',
        'Knolls',
        'Lake',
        'Lakes',
        'Land',
        'Landing',
        'Lane',
        'Light',
        'Lights',
        'Loaf',
        'Lock',
        'Locks',
        'Locks',
        'Lodge',
        'Lodge',
        'Loop',
        'Mall',
        'Manor',
        'Manors',
        'Meadow',
        'Meadows',
        'Mews',
        'Mill',
        'Mills',
        'Mission',
        'Mission',
        'Motorway',
        'Mount',
        'Mountain',
        'Mountain',
        'Mountains',
        'Mountains',
        'Neck',
        'Orchard',
        'Oval',
        'Overpass',
        'Park',
        'Parks',
        'Parkway',
        'Parkways',
        'Pass',
        'Passage',
        'Path',
        'Pike',
        'Pine',
        'Pines',
        'Place',
        'Plain',
        'Plains',
        'Plains',
        'Plaza',
        'Plaza',
        'Point',
        'Points',
        'Port',
        'Port',
        'Ports',
        'Ports',
        'Prairie',
        'Prairie',
        'Radial',
        'Ramp',
        'Ranch',
        'Rapid',
        'Rapids',
        'Rest',
        'Ridge',
        'Ridges',
        'River',
        'Road',
        'Road',
        'Roads',
        'Roads',
        'Route',
        'Row',
        'Rue',
        'Run',
        'Shoal',
        'Shoals',
        'Shore',
        'Shores',
        'Skyway',
        'Spring',
        'Springs',
        'Springs',
        'Spur',
        'Spurs',
        'Square',
        'Square',
        'Squares',
        'Squares',
        'Station',
        'Station',
        'Stravenue',
        'Stravenue',
        'Stream',
        'Stream',
        'Street',
        'Street',
        'Streets',
        'Summit',
        'Summit',
        'Terrace',
        'Throughway',
        'Trace',
        'Track',
        'Trafficway',
        'Trail',
        'Trail',
        'Tunnel',
        'Tunnel',
        'Turnpike',
        'Turnpike',
        'Underpass',
        'Union',
        'Unions',
        'Valley',
        'Valleys',
        'Via',
        'Viaduct',
        'View',
        'Views',
        'Village',
        'Village',
        'Villages',
        'Ville',
        'Vista',
        'Vista',
        'Walk',
        'Walks',
        'Wall',
        'Way',
        'Ways',
        'Well',
        'Wells'
    ],
    countries: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica (the territory South of 60 deg S)',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island (Bouvetoya)',
        'Brazil',
        'British Indian Ocean Territory (Chagos Archipelago)',
        'British Virgin Islands',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Cote d\'Ivoire',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Faroe Islands',
        'Falkland Islands (Malvinas)',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and McDonald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea',
        'Korea',
        'Kuwait',
        'Kyrgyz Republic',
        'Lao People\'s Democratic Republic',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libyan Arab Jamahiriya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands Antilles',
        'Netherlands',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn Islands',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russian Federation',
        'Rwanda',
        'Saint Barthelemy',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Martin',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia (Slovak Republic)',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard & Jan Mayen Islands',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'United States Minor Outlying Islands',
        'United States Virgin Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe'
    ],
    zip_formats: [
        '#####',
        '#####-####'
    ],
    building_number_formats: [
        '##',
        '###',
        '####'
    ],
    city_formats: [
        '{{city_prefix}} {{first_name}}{{city_suffix}}',
        '{{city_prefix}} {{first_name}}',
        '{{first_name}}{{city_suffix}}',
        '{{last_name}}{{city_suffix}}'
    ],
    street_formats: [
        '{{first_name}} {{street_suffix}}',
        '{{last_name}} {{street_suffix}}'
    ],
    address1_formats: [
        '{{building_number}} {{street}}',
        '{{building_number}} {{street}} {{address2}}', 
    ],
    address2_formats: [
        'Apt. ###',
        'Suite ###'
    ],
    address_formats: [
        '{{address1}}\n{{city}}, {{state_abbr}} {{zip}}', 
    ],
    country: function() {
        return this.random_element(this.countries);
    },
    city_prefix: function() {
        return this.random_element(this.city_prefixes);
    },
    city_suffix: function() {
        return this.random_element(this.city_suffixes);
    },
    city: function() {
        return this.populate_one_of(this.city_formats);
    },
    zip: function(digits) {
        if (digits === 5) return this.numerify(this.zip_formats[0]);
        else if (digits === 9) return this.numerify(this.zip_formats[1]);
        else return this.numerify(this.random_element(this.zip_formats));
    },
    street_suffix: function() {
        return this.random_element(this.street_suffixes);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    address: function() {
        return this.populate_one_of(this.address_formats);
    },
    address1: function() {
        return this.populate_one_of(this.address1_formats);
    },
    address2: function() {
        return this.numerify(this.random_element(this.address2_formats));
    },
    latitude: function() {
        return (this.integer(1800000) / 10000 - 90).toFixed(4);
    },
    longitude: function() {
        return (this.integer(3600000) / 10000 - 180).toFixed(4);
    },
    building_number: function() {
        return this.numerify(this.random_element(this.building_number_formats));
    }
};
module.exports = provider;

},{}],"2rw89":[function(require,module,exports) {
var provider = {
    safe_color_names: [
        'black',
        'maroon',
        'green',
        'navy',
        'olive',
        'purple',
        'teal',
        'lime',
        'blue',
        'silver',
        'gray',
        'yellow',
        'fuchsia',
        'aqua',
        'white'
    ],
    color_names: [
        'AliceBlue',
        'AntiqueWhite',
        'Aqua',
        'Aquamarine',
        'Azure',
        'Beige',
        'Bisque',
        'Black',
        'BlanchedAlmond',
        'Blue',
        'BlueViolet',
        'Brown',
        'BurlyWood',
        'CadetBlue',
        'Chartreuse',
        'Chocolate',
        'Coral',
        'CornflowerBlue',
        'Cornsilk',
        'Crimson',
        'Cyan',
        'DarkBlue',
        'DarkCyan',
        'DarkGoldenRod',
        'DarkGray',
        'DarkGreen',
        'DarkKhaki',
        'DarkMagenta',
        'DarkOliveGreen',
        'Darkorange',
        'DarkOrchid',
        'DarkRed',
        'DarkSalmon',
        'DarkSeaGreen',
        'DarkSlateBlue',
        'DarkSlateGray',
        'DarkTurquoise',
        'DarkViolet',
        'DeepPink',
        'DeepSkyBlue',
        'DimGray',
        'DimGrey',
        'DodgerBlue',
        'FireBrick',
        'FloralWhite',
        'ForestGreen',
        'Fuchsia',
        'Gainsboro',
        'GhostWhite',
        'Gold',
        'GoldenRod',
        'Gray',
        'Green',
        'GreenYellow',
        'HoneyDew',
        'HotPink',
        'IndianRed ',
        'Indigo ',
        'Ivory',
        'Khaki',
        'Lavender',
        'LavenderBlush',
        'LawnGreen',
        'LemonChiffon',
        'LightBlue',
        'LightCoral',
        'LightCyan',
        'LightGoldenRodYellow',
        'LightGray',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSlateGray',
        'LightSteelBlue',
        'LightYellow',
        'Lime',
        'LimeGreen',
        'Linen',
        'Magenta',
        'Maroon',
        'MediumAquaMarine',
        'MediumBlue',
        'MediumOrchid',
        'MediumPurple',
        'MediumSeaGreen',
        'MediumSlateBlue',
        'MediumSpringGreen',
        'MediumTurquoise',
        'MediumVioletRed',
        'MidnightBlue',
        'MintCream',
        'MistyRose',
        'Moccasin',
        'NavajoWhite',
        'Navy',
        'OldLace',
        'Olive',
        'OliveDrab',
        'Orange',
        'OrangeRed',
        'Orchid',
        'PaleGoldenRod',
        'PaleGreen',
        'PaleTurquoise',
        'PaleVioletRed',
        'PapayaWhip',
        'PeachPuff',
        'Peru',
        'Pink',
        'Plum',
        'PowderBlue',
        'Purple',
        'Red',
        'RosyBrown',
        'RoyalBlue',
        'SaddleBrown',
        'Salmon',
        'SandyBrown',
        'SeaGreen',
        'SeaShell',
        'Sienna',
        'Silver',
        'SkyBlue',
        'SlateBlue',
        'SlateGray',
        'Snow',
        'SpringGreen',
        'SteelBlue',
        'Tan',
        'Teal',
        'Thistle',
        'Tomato',
        'Turquoise',
        'Violet',
        'Wheat',
        'White',
        'WhiteSmoke',
        'Yellow',
        'YellowGreen'
    ],
    color_name: function() {
        return this.random_element(this.color_names);
    },
    safe_color_name: function() {
        return this.random_element(this.safe_color_names);
    },
    rgb_hex: function() {
        return '#' + ('000000' + this.integer(0, 16777216).toString(16)).slice(-6);
    },
    rgb_array: function() {
        return [
            this.integer(0, 255),
            this.integer(0, 255),
            this.integer(0, 255)
        ];
    }
};
module.exports = provider;

},{}],"511A1":[function(require,module,exports) {
var moment = require('moment');
var provider = {
    centuries: [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
        'XI',
        'XII',
        'XIII',
        'XIV',
        'XV',
        'XVI',
        'XVII',
        'XVIII',
        'XIX',
        'XX',
        'XXI'
    ],
    timezones: [
        'Europe/Andorra',
        'Asia/Dubai',
        'Asia/Kabul',
        'America/Antigua',
        'America/Anguilla',
        'Europe/Tirane',
        'Asia/Yerevan',
        'Africa/Luanda',
        'Antarctica/McMurdo',
        'Antarctica/South_Pole',
        'Antarctica/Rothera',
        'Antarctica/Palmer',
        'Antarctica/Mawson',
        'Antarctica/Davis',
        'Antarctica/Casey',
        'Antarctica/Vostok',
        'Antarctica/DumontDUrville',
        'Antarctica/Syowa',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Cordoba',
        'America/Argentina/Salta',
        'America/Argentina/Jujuy',
        'America/Argentina/Tucuman',
        'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja',
        'America/Argentina/San_Juan',
        'America/Argentina/Mendoza',
        'America/Argentina/San_Luis',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Ushuaia',
        'Pacific/Pago_Pago',
        'Europe/Vienna',
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
        'America/Aruba',
        'Europe/Mariehamn',
        'Asia/Baku',
        'Europe/Sarajevo',
        'America/Barbados',
        'Asia/Dhaka',
        'Europe/Brussels',
        'Africa/Ouagadougou',
        'Europe/Sofia',
        'Asia/Bahrain',
        'Africa/Bujumbura',
        'Africa/Porto-Novo',
        'America/St_Barthelemy',
        'Atlantic/Bermuda',
        'Asia/Brunei',
        'America/La_Paz',
        'America/Kralendijk',
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco',
        'America/Nassau',
        'Asia/Thimphu',
        'Africa/Gaborone',
        'Europe/Minsk',
        'America/Belize',
        'America/St_Johns',
        'America/Halifax',
        'America/Glace_Bay',
        'America/Moncton',
        'America/Goose_Bay',
        'America/Blanc-Sablon',
        'America/Montreal',
        'America/Toronto',
        'America/Nipigon',
        'America/Thunder_Bay',
        'America/Iqaluit',
        'America/Pangnirtung',
        'America/Resolute',
        'America/Atikokan',
        'America/Rankin_Inlet',
        'America/Winnipeg',
        'America/Rainy_River',
        'America/Regina',
        'America/Swift_Current',
        'America/Edmonton',
        'America/Cambridge_Bay',
        'America/Yellowknife',
        'America/Inuvik',
        'America/Creston',
        'America/Dawson_Creek',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Dawson',
        'Indian/Cocos',
        'Africa/Kinshasa',
        'Africa/Lubumbashi',
        'Africa/Bangui',
        'Africa/Brazzaville',
        'Europe/Zurich',
        'Africa/Abidjan',
        'Pacific/Rarotonga',
        'America/Santiago',
        'Pacific/Easter',
        'Africa/Douala',
        'Asia/Shanghai',
        'Asia/Harbin',
        'Asia/Chongqing',
        'Asia/Urumqi',
        'Asia/Kashgar',
        'America/Bogota',
        'America/Costa_Rica',
        'America/Havana',
        'Atlantic/Cape_Verde',
        'America/Curacao',
        'Indian/Christmas',
        'Asia/Nicosia',
        'Europe/Prague',
        'Europe/Berlin',
        'Europe/Busingen',
        'Africa/Djibouti',
        'Europe/Copenhagen',
        'America/Dominica',
        'America/Santo_Domingo',
        'Africa/Algiers',
        'America/Guayaquil',
        'Pacific/Galapagos',
        'Europe/Tallinn',
        'Africa/Cairo',
        'Africa/El_Aaiun',
        'Africa/Asmara',
        'Europe/Madrid',
        'Africa/Ceuta',
        'Atlantic/Canary',
        'Africa/Addis_Ababa',
        'Europe/Helsinki',
        'Pacific/Fiji',
        'Atlantic/Stanley',
        'Pacific/Chuuk',
        'Pacific/Pohnpei',
        'Pacific/Kosrae',
        'Atlantic/Faroe',
        'Europe/Paris',
        'Africa/Libreville',
        'Europe/London',
        'America/Grenada',
        'Asia/Tbilisi',
        'America/Cayenne',
        'Europe/Guernsey',
        'Africa/Accra',
        'Europe/Gibraltar',
        'America/Godthab',
        'America/Danmarkshavn',
        'America/Scoresbysund',
        'America/Thule',
        'Africa/Banjul',
        'Africa/Conakry',
        'America/Guadeloupe',
        'Africa/Malabo',
        'Europe/Athens',
        'Atlantic/South_Georgia',
        'America/Guatemala',
        'Pacific/Guam',
        'Africa/Bissau',
        'America/Guyana',
        'Asia/Hong_Kong',
        'America/Tegucigalpa',
        'Europe/Zagreb',
        'America/Port-au-Prince',
        'Europe/Budapest',
        'Asia/Jakarta',
        'Asia/Pontianak',
        'Asia/Makassar',
        'Asia/Jayapura',
        'Europe/Dublin',
        'Asia/Jerusalem',
        'Europe/Isle_of_Man',
        'Asia/Kolkata',
        'Indian/Chagos',
        'Asia/Baghdad',
        'Asia/Tehran',
        'Atlantic/Reykjavik',
        'Europe/Rome',
        'Europe/Jersey',
        'America/Jamaica',
        'Asia/Amman',
        'Asia/Tokyo',
        'Africa/Nairobi',
        'Asia/Bishkek',
        'Asia/Phnom_Penh',
        'Pacific/Tarawa',
        'Pacific/Enderbury',
        'Pacific/Kiritimati',
        'Indian/Comoro',
        'America/St_Kitts',
        'Asia/Pyongyang',
        'Asia/Seoul',
        'Asia/Kuwait',
        'America/Cayman',
        'Asia/Almaty',
        'Asia/Qyzylorda',
        'Asia/Aqtobe',
        'Asia/Aqtau',
        'Asia/Oral',
        'Asia/Vientiane',
        'Asia/Beirut',
        'America/St_Lucia',
        'Europe/Vaduz',
        'Asia/Colombo',
        'Africa/Monrovia',
        'Africa/Maseru',
        'Europe/Vilnius',
        'Europe/Luxembourg',
        'Europe/Riga',
        'Africa/Tripoli',
        'Africa/Casablanca',
        'Europe/Monaco',
        'Europe/Chisinau',
        'Europe/Podgorica',
        'America/Marigot',
        'Indian/Antananarivo',
        'Pacific/Majuro',
        'Pacific/Kwajalein',
        'Europe/Skopje',
        'Africa/Bamako',
        'Asia/Rangoon',
        'Asia/Ulaanbaatar',
        'Asia/Hovd',
        'Asia/Choibalsan',
        'Asia/Macau',
        'Pacific/Saipan',
        'America/Martinique',
        'Africa/Nouakchott',
        'America/Montserrat',
        'Europe/Malta',
        'Indian/Mauritius',
        'Indian/Maldives',
        'Africa/Blantyre',
        'America/Mexico_City',
        'America/Cancun',
        'America/Merida',
        'America/Monterrey',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Chihuahua',
        'America/Ojinaga',
        'America/Hermosillo',
        'America/Tijuana',
        'America/Santa_Isabel',
        'America/Bahia_Banderas',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Africa/Maputo',
        'Africa/Windhoek',
        'Pacific/Noumea',
        'Africa/Niamey',
        'Pacific/Norfolk',
        'Africa/Lagos',
        'America/Managua',
        'Europe/Amsterdam',
        'Europe/Oslo',
        'Asia/Kathmandu',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Auckland',
        'Pacific/Chatham',
        'Asia/Muscat',
        'America/Panama',
        'America/Lima',
        'Pacific/Tahiti',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'Pacific/Port_Moresby',
        'Asia/Manila',
        'Asia/Karachi',
        'Europe/Warsaw',
        'America/Miquelon',
        'Pacific/Pitcairn',
        'America/Puerto_Rico',
        'Asia/Gaza',
        'Asia/Hebron',
        'Europe/Lisbon',
        'Atlantic/Madeira',
        'Atlantic/Azores',
        'Pacific/Palau',
        'America/Asuncion',
        'Asia/Qatar',
        'Indian/Reunion',
        'Europe/Bucharest',
        'Europe/Belgrade',
        'Europe/Kaliningrad',
        'Europe/Moscow',
        'Europe/Volgograd',
        'Europe/Samara',
        'Asia/Yekaterinburg',
        'Asia/Omsk',
        'Asia/Novosibirsk',
        'Asia/Novokuznetsk',
        'Asia/Krasnoyarsk',
        'Asia/Irkutsk',
        'Asia/Yakutsk',
        'Asia/Khandyga',
        'Asia/Vladivostok',
        'Asia/Sakhalin',
        'Asia/Ust-Nera',
        'Asia/Magadan',
        'Asia/Kamchatka',
        'Asia/Anadyr',
        'Africa/Kigali',
        'Asia/Riyadh',
        'Pacific/Guadalcanal',
        'Indian/Mahe',
        'Africa/Khartoum',
        'Europe/Stockholm',
        'Asia/Singapore',
        'Atlantic/St_Helena',
        'Europe/Ljubljana',
        'Arctic/Longyearbyen',
        'Europe/Bratislava',
        'Africa/Freetown',
        'Europe/San_Marino',
        'Africa/Dakar',
        'Africa/Mogadishu',
        'America/Paramaribo',
        'Africa/Juba',
        'Africa/Sao_Tome',
        'America/El_Salvador',
        'America/Lower_Princes',
        'Asia/Damascus',
        'Africa/Mbabane',
        'America/Grand_Turk',
        'Africa/Ndjamena',
        'Indian/Kerguelen',
        'Africa/Lome',
        'Asia/Bangkok',
        'Asia/Dushanbe',
        'Pacific/Fakaofo',
        'Asia/Dili',
        'Asia/Ashgabat',
        'Africa/Tunis',
        'Pacific/Tongatapu',
        'Europe/Istanbul',
        'America/Port_of_Spain',
        'Pacific/Funafuti',
        'Asia/Taipei',
        'Africa/Dar_es_Salaam',
        'Europe/Kiev',
        'Europe/Uzhgorod',
        'Europe/Zaporozhye',
        'Europe/Simferopol',
        'Africa/Kampala',
        'Pacific/Johnston',
        'Pacific/Midway',
        'Pacific/Wake',
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Shiprock',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'America/Metlakatla',
        'Pacific/Honolulu',
        'America/Montevideo',
        'Asia/Samarkand',
        'Asia/Tashkent',
        'Europe/Vatican',
        'America/St_Vincent',
        'America/Caracas',
        'America/Tortola',
        'America/St_Thomas',
        'Asia/Ho_Chi_Minh',
        'Pacific/Efate',
        'Pacific/Wallis',
        'Pacific/Apia',
        'Asia/Aden',
        'Indian/Mayotte',
        'Africa/Johannesburg',
        'Africa/Lusaka',
        'Africa/Harare'
    ],
    unix_time: function() {
        return this.integer(0, 1462369607);
    },
    moment: function() {
        return moment.unix(this.unix_time);
    },
    date: function(format) {
        format = format || 'YYYY-MM-DD';
        return this.moment.format(format);
    },
    time: function(format) {
        format = format || 'HH:mm:ss';
        return this.moment.format(format);
    },
    century: function() {
        return this.random_element(this.centuries);
    },
    am_pm: function() {
        return this.random_element([
            'am',
            'pm'
        ]);
    },
    day_of_year: function() {
        return this.moment.dayOfYear();
    },
    day_of_month: function() {
        return this.moment.format('D');
    },
    day_of_week: function() {
        return this.moment.format('d');
    },
    month_number: function() {
        return this.moment.format('M');
    },
    month_name: function() {
        return this.moment.format('MMMM');
    },
    year: function() {
        return this.moment.format('YYYY');
    },
    timezone: function() {
        return this.random_element(this.timezones);
    }
};
module.exports = provider;

},{"moment":"jwcsj"}],"jwcsj":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
})(this, function() {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for(i = 0; i < arr.length; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, 'toString')) a.toString = b.toString;
        if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentProperties.length > 0) for(i = 0; i < momentProperties.length; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) console.warn('Deprecation warning: ' + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key;
                for(i = 0; i < arguments.length; i++){
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ': ' + arguments[0][key] + ', ';
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {
    };
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this['_' + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({
        }, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {
                };
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({
        }, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {
    }, formatTokenFunctions = {
    };
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i1, length;
        for(i1 = 0, length = array.length; i1 < length; i1++)if (formatTokenFunctions[array[i1]]) array[i1] = formatTokenFunctions[array[i1]];
        else array[i1] = removeFormattingTokens(array[i1]);
        return function(mom) {
            var output = '', i;
            for(i = 0; i < length; i++)output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') return tok.slice(1);
            return tok;
        }).join('');
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d', defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal1(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {
    };
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {
        }, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {
    };
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for(i = 0; i < prioritized.length; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {
    };
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens1 = {
    };
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        for(i = 0; i < token.length; i++)tokens1[token[i]] = func;
    }
    function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token) {
            config._w = config._w || {
            };
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens1, token)) tokens1[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function() {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months['standalone'];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, 'Month');
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken('Y', 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem1(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem1('a', true);
    meridiem1('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? 'pm' : 'PM';
        else return isLower ? 'am' : 'AM';
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {
    }, localeFamilies = {
    }, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && typeof module !== 'undefined' && module && module.exports) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== 'undefined' && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ],
        [
            'YYYYMM',
            /\d{6}/,
            false
        ],
        [
            'YYYY',
            /\d{4}/,
            false
        ], 
    ], // iso time formats and regexes
    isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ], 
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDates.length; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimes.length; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10), 
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(), 
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {
    };
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {
    };
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for(i = 0; i < tokens.length; i++){
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < config._f.length; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({
            }, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') return createInvalid({
            nullInput: true
        });
        if (typeof input === 'string') config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === 'string') configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {
        };
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now1 = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond', 
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < ordering.length; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {
        };
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset1(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset(), sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset1('Z', ':');
    offset1('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {
    };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, 'm');
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {
        }, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {
            };
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {
        };
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {
            };
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, '_isValid')) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
        if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, 'add'), subtract = createAdder(-1, 'subtract');
    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse', output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff1(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 60000;
        units = normalizeUnits(units);
        switch(units){
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1000;
                break; // 1000
            case 'minute':
                output = (this - that) / 60000;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 3600000;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 86400000;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 604800000;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var func = 'moment', zone = '', prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format1(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale1(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(), 
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({
        }, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', [
        'y',
        1
    ], 'yo', 'eraYear');
    addFormatToken('y', [
        'yy',
        2
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyy',
        3
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyyy',
        4
    ], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken([
        'N',
        'NN',
        'NNN',
        'NNNN',
        'NNNNN'
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken([
        'y',
        'yy',
        'yyy',
        'yyyy'
    ], YEAR);
    addParseToken([
        'yo'
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale('en')._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case 'undefined':
                    eras[i].until = Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format){
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return '';
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return '';
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return '';
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken(0, [
        'gg',
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    // FORMATTING
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token1, getSetMillisecond;
    for(token1 = 'SSSS'; token1.length <= 9; token1 += 'S')addRegexToken(token1, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for(token1 = 'S'; token1.length <= 9; token1 += 'S')addParseToken(token1, parseMs);
    getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff1;
    proto.endOf = endOf;
    proto.format = format1;
    proto.from = from1;
    proto.fromNow = fromNow;
    proto.to = to1;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale1;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) proto[Symbol.for('nodejs.util.inspect.custom')] = function() {
        return 'Moment<' + this.format() + '>';
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal1;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || '';
        if (index != null) return get$1(format, index, field, 'month');
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format, i, field, 'month');
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) return get$1(format, (index + shift) % 7, field, 'day');
        for(i = 0; i < 7; i++)out[i] = get$1(format, (i + shift) % 7, field, 'day');
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD'
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC'
            }, 
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 86400000;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 86400000;
            months = this._months + daysToMonths(days);
            switch(units){
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case 'week':
                    return days / 7 + milliseconds / 604800000;
                case 'day':
                    return days + milliseconds / 86400000;
                case 'hour':
                    return days * 24 + milliseconds / 3600000;
                case 'minute':
                    return days * 1440 + milliseconds / 60000;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 86400000) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms'), asSeconds = makeAs('s'), asMinutes = makeAs('m'), asHours = makeAs('h'), asDays = makeAs('d'), asWeeks = makeAs('w'), asMonths = makeAs('M'), asQuarters = makeAs('Q'), asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds1 = makeGetter('milliseconds'), seconds1 = makeGetter('seconds'), minutes1 = makeGetter('minutes'), hours1 = makeGetter('hours'), days1 = makeGetter('days'), months1 = makeGetter('months'), years1 = makeGetter('years');
    function weeks1() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds1 = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as('s')), minutes = round(duration.as('m')), hours = round(duration.as('h')), days = round(duration.as('d')), months = round(duration.as('M')), weeks = round(duration.as('w')), years = round(duration.as('y')), a = seconds <= thresholds.ss && [
            's',
            seconds
        ] || seconds < thresholds.s && [
            'ss',
            seconds
        ] || minutes <= 1 && [
            'm'
        ] || minutes < thresholds.m && [
            'mm',
            minutes
        ] || hours <= 1 && [
            'h'
        ] || hours < thresholds.h && [
            'hh',
            hours
        ] || days <= 1 && [
            'd'
        ] || days < thresholds.d && [
            'dd',
            days
        ];
        if (thresholds.w != null) a = a || weeks <= 1 && [
            'w'
        ] || weeks < thresholds.w && [
            'ww',
            weeks
        ];
        a = a || months <= 1 && [
            'M'
        ] || months < thresholds.M && [
            'MM',
            months
        ] || years <= 1 && [
            'y'
        ] || [
            'yy',
            years
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds1[threshold] === undefined) return false;
        if (limit === undefined) return thresholds1[threshold];
        thresholds1[threshold] = limit;
        if (threshold === 's') thresholds1.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds1, locale, output;
        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
        if (typeof argThresholds === 'object') {
            th = Object.assign({
            }, thresholds1, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) output = locale.pastFuture(+this, output);
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign1(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds = abs$1(this._milliseconds) / 1000, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign1(this._months) !== sign1(total) ? '-' : '';
        daysSign = sign1(this._days) !== sign1(total) ? '-' : '';
        hmsSign = sign1(this._milliseconds) !== sign1(total) ? '-' : '';
        return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds1;
    proto$2.seconds = seconds1;
    proto$2.minutes = minutes1;
    proto$2.hours = hours1;
    proto$2.days = days1;
    proto$2.weeks = weeks1;
    proto$2.months = months1;
    proto$2.years = years1;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale1;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = '2.29.1';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now1;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
});

},{}],"eFA8u":[function(require,module,exports) {
var provider = {
    top_level_domains: [
        'co.uk',
        'com',
        'us',
        'net',
        'ca',
        'biz',
        'info',
        'name',
        'io',
        'org',
        'biz',
        'tv',
        'me'
    ],
    free_email_domains: [
        'gmail.com',
        'yahoo.com',
        'hotmail.com'
    ],
    email_formats: [
        '{{username}}@{{domain}}',
        '{{username}}@{{free_email_domain}}'
    ],
    url_formats: [
        'http://www.{{domain}}/',
        'http://{{domain}}/'
    ],
    domain_formats: [
        '{{first_name}}.{{top_level_domain}}',
        '{{last_name}}.{{top_level_domain}}'
    ],
    user_agents: [
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.1; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/7.1.2 Safari/537.85.11',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.1.25 (KHTML, like Gecko) QuickLook/5.0',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
        'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25',
        'Mozilla/5.0 (Windows NT 5.1; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.1.17 (KHTML, like Gecko) Version/7.1 Safari/537.85.10',
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.10 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.10',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/6.1.6 Safari/537.78.2',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/39.0.2171.65 Chrome/39.0.2171.65 Safari/537.36',
        'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.10 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.10',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/7.0.6 Safari/537.78.2',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D201 Safari/9537.53',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B436 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.45 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B440 Safari/600.1.4',
        'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
        'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.1.17 (KHTML, like Gecko) Version/6.2 Safari/537.85.10',
        'Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B440 Safari/600.1.4',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/6.2.2 Safari/537.85.11',
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/5.1.42378 Mobile/12B440 Safari/600.1.4',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0',
        'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0',
        'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 5 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4',
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0'
    ],
    free_email_domain: function() {
        return this.random_element(this.free_email_domains);
    },
    top_level_domain: function() {
        return this.random_element(this.top_level_domains);
    },
    domain: function() {
        return this.populate_one_of(this.domain_formats);
    },
    email: function() {
        return this.populate_one_of(this.email_formats);
    },
    url: function() {
        return this.populate_one_of(this.url_formats);
    },
    ip: function() {
        return [
            this.integer(0, 255),
            this.integer(0, 255),
            this.integer(0, 255),
            this.integer(0, 255)
        ].join('.');
    },
    user_agent: function() {
        return this.random_element(this.user_agents);
    }
};
module.exports = provider;

},{}],"51Kgu":[function(require,module,exports) {
var number = require('./number');
var provider = {
    language_codes: [
        'cn',
        'de',
        'en',
        'es',
        'fr',
        'it',
        'pt',
        'ru'
    ],
    country_codes: [
        'CA',
        'CN',
        'DE',
        'ES',
        'FR',
        'IE',
        'IN',
        'IT',
        'MX',
        'PT',
        'RU',
        'GB',
        'US'
    ],
    locales: [
        'aa_DJ',
        'aa_ER',
        'aa_ET',
        'af_NA',
        'af_ZA',
        'ak_GH',
        'am_ET',
        'ar_AE',
        'ar_BH',
        'ar_DZ',
        'ar_EG',
        'ar_IQ',
        'ar_JO',
        'ar_KW',
        'ar_LB',
        'ar_LY',
        'ar_MA',
        'ar_OM',
        'ar_QA',
        'ar_SA',
        'ar_SD',
        'ar_SY',
        'ar_TN',
        'ar_YE',
        'as_IN',
        'az_AZ',
        'be_BY',
        'bg_BG',
        'bn_BD',
        'bn_IN',
        'bo_CN',
        'bo_IN',
        'bs_BA',
        'byn_ER',
        'ca_ES',
        'cch_NG',
        'cs_CZ',
        'cy_GB',
        'da_DK',
        'de_AT',
        'de_BE',
        'de_CH',
        'de_DE',
        'de_LI',
        'de_LU',
        'dv_MV',
        'dz_BT',
        'ee_GH',
        'ee_TG',
        'el_CY',
        'el_GR',
        'en_AS',
        'en_AU',
        'en_BE',
        'en_BW',
        'en_BZ',
        'en_CA',
        'en_GB',
        'en_GU',
        'en_HK',
        'en_IE',
        'en_IN',
        'en_JM',
        'en_MH',
        'en_MP',
        'en_MT',
        'en_NA',
        'en_NZ',
        'en_PH',
        'en_PK',
        'en_SG',
        'en_TT',
        'en_UM',
        'en_US',
        'en_VI',
        'en_ZA',
        'en_ZW',
        'es_AR',
        'es_BO',
        'es_CL',
        'es_CO',
        'es_CR',
        'es_DO',
        'es_EC',
        'es_ES',
        'es_GT',
        'es_HN',
        'es_MX',
        'es_NI',
        'es_PA',
        'es_PE',
        'es_PR',
        'es_PY',
        'es_SV',
        'es_US',
        'es_UY',
        'es_VE',
        'et_EE',
        'eu_ES',
        'fa_AF',
        'fa_IR',
        'fi_FI',
        'fil_PH',
        'fo_FO',
        'fr_BE',
        'fr_CA',
        'fr_CH',
        'fr_FR',
        'fr_LU',
        'fr_MC',
        'fr_SN',
        'fur_IT',
        'ga_IE',
        'gaa_GH',
        'gez_ER',
        'gez_ET',
        'gl_ES',
        'gsw_CH',
        'gu_IN',
        'gv_GB',
        'ha_GH',
        'ha_NE',
        'ha_NG',
        'ha_SD',
        'haw_US',
        'he_IL',
        'hi_IN',
        'hr_HR',
        'hu_HU',
        'hy_AM',
        'id_ID',
        'ig_NG',
        'ii_CN',
        'is_IS',
        'it_CH',
        'it_IT',
        'ja_JP',
        'ka_GE',
        'kaj_NG',
        'kam_KE',
        'kcg_NG',
        'kfo_CI',
        'kk_KZ',
        'kl_GL',
        'km_KH',
        'kn_IN',
        'ko_KR',
        'kok_IN',
        'kpe_GN',
        'kpe_LR',
        'ku_IQ',
        'ku_IR',
        'ku_SY',
        'ku_TR',
        'kw_GB',
        'ky_KG',
        'ln_CD',
        'ln_CG',
        'lo_LA',
        'lt_LT',
        'lv_LV',
        'mk_MK',
        'ml_IN',
        'mn_CN',
        'mn_MN',
        'mr_IN',
        'ms_BN',
        'ms_MY',
        'mt_MT',
        'my_MM',
        'nb_NO',
        'nds_DE',
        'ne_IN',
        'ne_NP',
        'nl_BE',
        'nl_NL',
        'nn_NO',
        'nr_ZA',
        'nso_ZA',
        'ny_MW',
        'oc_FR',
        'om_ET',
        'om_KE',
        'or_IN',
        'pa_IN',
        'pa_PK',
        'pl_PL',
        'ps_AF',
        'pt_BR',
        'pt_PT',
        'ro_MD',
        'ro_RO',
        'ru_RU',
        'ru_UA',
        'rw_RW',
        'sa_IN',
        'se_FI',
        'se_NO',
        'sh_BA',
        'sh_CS',
        'sh_YU',
        'si_LK',
        'sid_ET',
        'sk_SK',
        'sl_SI',
        'so_DJ',
        'so_ET',
        'so_KE',
        'so_SO',
        'sq_AL',
        'sr_BA',
        'sr_CS',
        'sr_ME',
        'sr_RS',
        'sr_YU',
        'ss_SZ',
        'ss_ZA',
        'st_LS',
        'st_ZA',
        'sv_FI',
        'sv_SE',
        'sw_KE',
        'sw_TZ',
        'syr_SY',
        'ta_IN',
        'te_IN',
        'tg_TJ',
        'th_TH',
        'ti_ER',
        'ti_ET',
        'tig_ER',
        'tn_ZA',
        'to_TO',
        'tr_TR',
        'trv_TW',
        'ts_ZA',
        'tt_RU',
        'ug_CN',
        'uk_UA',
        'ur_IN',
        'ur_PK',
        'uz_AF',
        'uz_UZ',
        've_ZA',
        'vi_VN',
        'wal_ET',
        'wo_SN',
        'xh_ZA',
        'yo_NG',
        'zh_CN',
        'zh_HK',
        'zh_MO',
        'zh_SG',
        'zh_TW',
        'zu_ZA'
    ],
    currencies: [
        {
            symbol: "$",
            name: "US Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "USD",
            name_plural: "US dollars"
        },
        {
            symbol: "CA$",
            name: "Canadian Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "CAD",
            name_plural: "Canadian dollars"
        },
        {
            symbol: "€",
            name: "Euro",
            symbol_native: "€",
            decimal_digits: 2,
            rounding: 0,
            code: "EUR",
            name_plural: "euros"
        },
        {
            symbol: "AED",
            name: "United Arab Emirates Dirham",
            symbol_native: "د.إ.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "AED",
            name_plural: "UAE dirhams"
        },
        {
            symbol: "Af",
            name: "Afghan Afghani",
            symbol_native: "؋",
            decimal_digits: 0,
            rounding: 0,
            code: "AFN",
            name_plural: "Afghan Afghanis"
        },
        {
            symbol: "ALL",
            name: "Albanian Lek",
            symbol_native: "Lek",
            decimal_digits: 0,
            rounding: 0,
            code: "ALL",
            name_plural: "Albanian lekë"
        },
        {
            symbol: "AMD",
            name: "Armenian Dram",
            symbol_native: "դր.",
            decimal_digits: 0,
            rounding: 0,
            code: "AMD",
            name_plural: "Armenian drams"
        },
        {
            symbol: "AR$",
            name: "Argentine Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "ARS",
            name_plural: "Argentine pesos"
        },
        {
            symbol: "AU$",
            name: "Australian Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "AUD",
            name_plural: "Australian dollars"
        },
        {
            symbol: "man.",
            name: "Azerbaijani Manat",
            symbol_native: "ман.",
            decimal_digits: 2,
            rounding: 0,
            code: "AZN",
            name_plural: "Azerbaijani manats"
        },
        {
            symbol: "KM",
            name: "Bosnia-Herzegovina Convertible Mark",
            symbol_native: "KM",
            decimal_digits: 2,
            rounding: 0,
            code: "BAM",
            name_plural: "Bosnia-Herzegovina convertible marks"
        },
        {
            symbol: "Tk",
            name: "Bangladeshi Taka",
            symbol_native: "৳",
            decimal_digits: 2,
            rounding: 0,
            code: "BDT",
            name_plural: "Bangladeshi takas"
        },
        {
            symbol: "BGN",
            name: "Bulgarian Lev",
            symbol_native: "лв.",
            decimal_digits: 2,
            rounding: 0,
            code: "BGN",
            name_plural: "Bulgarian leva"
        },
        {
            symbol: "BD",
            name: "Bahraini Dinar",
            symbol_native: "د.ب.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "BHD",
            name_plural: "Bahraini dinars"
        },
        {
            symbol: "FBu",
            name: "Burundian Franc",
            symbol_native: "FBu",
            decimal_digits: 0,
            rounding: 0,
            code: "BIF",
            name_plural: "Burundian francs"
        },
        {
            symbol: "BN$",
            name: "Brunei Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "BND",
            name_plural: "Brunei dollars"
        },
        {
            symbol: "Bs",
            name: "Bolivian Boliviano",
            symbol_native: "Bs",
            decimal_digits: 2,
            rounding: 0,
            code: "BOB",
            name_plural: "Bolivian bolivianos"
        },
        {
            symbol: "R$",
            name: "Brazilian Real",
            symbol_native: "R$",
            decimal_digits: 2,
            rounding: 0,
            code: "BRL",
            name_plural: "Brazilian reals"
        },
        {
            symbol: "BWP",
            name: "Botswanan Pula",
            symbol_native: "P",
            decimal_digits: 2,
            rounding: 0,
            code: "BWP",
            name_plural: "Botswanan pulas"
        },
        {
            symbol: "BYR",
            name: "Belarusian Ruble",
            symbol_native: "BYR",
            decimal_digits: 0,
            rounding: 0,
            code: "BYR",
            name_plural: "Belarusian rubles"
        },
        {
            symbol: "BZ$",
            name: "Belize Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "BZD",
            name_plural: "Belize dollars"
        },
        {
            symbol: "CDF",
            name: "Congolese Franc",
            symbol_native: "FrCD",
            decimal_digits: 2,
            rounding: 0,
            code: "CDF",
            name_plural: "Congolese francs"
        },
        {
            symbol: "CHF",
            name: "Swiss Franc",
            symbol_native: "CHF",
            decimal_digits: 2,
            rounding: 0.05,
            code: "CHF",
            name_plural: "Swiss francs"
        },
        {
            symbol: "CL$",
            name: "Chilean Peso",
            symbol_native: "$",
            decimal_digits: 0,
            rounding: 0,
            code: "CLP",
            name_plural: "Chilean pesos"
        },
        {
            symbol: "CN¥",
            name: "Chinese Yuan",
            symbol_native: "CN¥",
            decimal_digits: 2,
            rounding: 0,
            code: "CNY",
            name_plural: "Chinese yuan"
        },
        {
            symbol: "CO$",
            name: "Colombian Peso",
            symbol_native: "$",
            decimal_digits: 0,
            rounding: 0,
            code: "COP",
            name_plural: "Colombian pesos"
        },
        {
            symbol: "₡",
            name: "Costa Rican Colón",
            symbol_native: "₡",
            decimal_digits: 0,
            rounding: 0,
            code: "CRC",
            name_plural: "Costa Rican colóns"
        },
        {
            symbol: "CV$",
            name: "Cape Verdean Escudo",
            symbol_native: "CV$",
            decimal_digits: 2,
            rounding: 0,
            code: "CVE",
            name_plural: "Cape Verdean escudos"
        },
        {
            symbol: "Kč",
            name: "Czech Republic Koruna",
            symbol_native: "Kč",
            decimal_digits: 2,
            rounding: 0,
            code: "CZK",
            name_plural: "Czech Republic korunas"
        },
        {
            symbol: "Fdj",
            name: "Djiboutian Franc",
            symbol_native: "Fdj",
            decimal_digits: 0,
            rounding: 0,
            code: "DJF",
            name_plural: "Djiboutian francs"
        },
        {
            symbol: "Dkr",
            name: "Danish Krone",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "DKK",
            name_plural: "Danish kroner"
        },
        {
            symbol: "RD$",
            name: "Dominican Peso",
            symbol_native: "RD$",
            decimal_digits: 2,
            rounding: 0,
            code: "DOP",
            name_plural: "Dominican pesos"
        },
        {
            symbol: "DA",
            name: "Algerian Dinar",
            symbol_native: "د.ج.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "DZD",
            name_plural: "Algerian dinars"
        },
        {
            symbol: "Ekr",
            name: "Estonian Kroon",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "EEK",
            name_plural: "Estonian kroons"
        },
        {
            symbol: "EGP",
            name: "Egyptian Pound",
            symbol_native: "ج.م.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "EGP",
            name_plural: "Egyptian pounds"
        },
        {
            symbol: "Nfk",
            name: "Eritrean Nakfa",
            symbol_native: "Nfk",
            decimal_digits: 2,
            rounding: 0,
            code: "ERN",
            name_plural: "Eritrean nakfas"
        },
        {
            symbol: "Br",
            name: "Ethiopian Birr",
            symbol_native: "Br",
            decimal_digits: 2,
            rounding: 0,
            code: "ETB",
            name_plural: "Ethiopian birrs"
        },
        {
            symbol: "£",
            name: "British Pound Sterling",
            symbol_native: "£",
            decimal_digits: 2,
            rounding: 0,
            code: "GBP",
            name_plural: "British pounds sterling"
        },
        {
            symbol: "GEL",
            name: "Georgian Lari",
            symbol_native: "GEL",
            decimal_digits: 2,
            rounding: 0,
            code: "GEL",
            name_plural: "Georgian laris"
        },
        {
            symbol: "GH₵",
            name: "Ghanaian Cedi",
            symbol_native: "GH₵",
            decimal_digits: 2,
            rounding: 0,
            code: "GHS",
            name_plural: "Ghanaian cedis"
        },
        {
            symbol: "FG",
            name: "Guinean Franc",
            symbol_native: "FG",
            decimal_digits: 0,
            rounding: 0,
            code: "GNF",
            name_plural: "Guinean francs"
        },
        {
            symbol: "GTQ",
            name: "Guatemalan Quetzal",
            symbol_native: "Q",
            decimal_digits: 2,
            rounding: 0,
            code: "GTQ",
            name_plural: "Guatemalan quetzals"
        },
        {
            symbol: "HK$",
            name: "Hong Kong Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "HKD",
            name_plural: "Hong Kong dollars"
        },
        {
            symbol: "HNL",
            name: "Honduran Lempira",
            symbol_native: "L",
            decimal_digits: 2,
            rounding: 0,
            code: "HNL",
            name_plural: "Honduran lempiras"
        },
        {
            symbol: "kn",
            name: "Croatian Kuna",
            symbol_native: "kn",
            decimal_digits: 2,
            rounding: 0,
            code: "HRK",
            name_plural: "Croatian kunas"
        },
        {
            symbol: "Ft",
            name: "Hungarian Forint",
            symbol_native: "Ft",
            decimal_digits: 0,
            rounding: 0,
            code: "HUF",
            name_plural: "Hungarian forints"
        },
        {
            symbol: "Rp",
            name: "Indonesian Rupiah",
            symbol_native: "Rp",
            decimal_digits: 0,
            rounding: 0,
            code: "IDR",
            name_plural: "Indonesian rupiahs"
        },
        {
            symbol: "₪",
            name: "Israeli New Sheqel",
            symbol_native: "₪",
            decimal_digits: 2,
            rounding: 0,
            code: "ILS",
            name_plural: "Israeli new sheqels"
        },
        {
            symbol: "Rs",
            name: "Indian Rupee",
            symbol_native: "টকা",
            decimal_digits: 2,
            rounding: 0,
            code: "INR",
            name_plural: "Indian rupees"
        },
        {
            symbol: "IQD",
            name: "Iraqi Dinar",
            symbol_native: "د.ع.‏",
            decimal_digits: 0,
            rounding: 0,
            code: "IQD",
            name_plural: "Iraqi dinars"
        },
        {
            symbol: "IRR",
            name: "Iranian Rial",
            symbol_native: "﷼",
            decimal_digits: 0,
            rounding: 0,
            code: "IRR",
            name_plural: "Iranian rials"
        },
        {
            symbol: "Ikr",
            name: "Icelandic Króna",
            symbol_native: "kr",
            decimal_digits: 0,
            rounding: 0,
            code: "ISK",
            name_plural: "Icelandic krónur"
        },
        {
            symbol: "J$",
            name: "Jamaican Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "JMD",
            name_plural: "Jamaican dollars"
        },
        {
            symbol: "JD",
            name: "Jordanian Dinar",
            symbol_native: "د.أ.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "JOD",
            name_plural: "Jordanian dinars"
        },
        {
            symbol: "¥",
            name: "Japanese Yen",
            symbol_native: "￥",
            decimal_digits: 0,
            rounding: 0,
            code: "JPY",
            name_plural: "Japanese yen"
        },
        {
            symbol: "Ksh",
            name: "Kenyan Shilling",
            symbol_native: "Ksh",
            decimal_digits: 2,
            rounding: 0,
            code: "KES",
            name_plural: "Kenyan shillings"
        },
        {
            symbol: "KHR",
            name: "Cambodian Riel",
            symbol_native: "៛",
            decimal_digits: 2,
            rounding: 0,
            code: "KHR",
            name_plural: "Cambodian riels"
        },
        {
            symbol: "CF",
            name: "Comorian Franc",
            symbol_native: "FC",
            decimal_digits: 0,
            rounding: 0,
            code: "KMF",
            name_plural: "Comorian francs"
        },
        {
            symbol: "₩",
            name: "South Korean Won",
            symbol_native: "₩",
            decimal_digits: 0,
            rounding: 0,
            code: "KRW",
            name_plural: "South Korean won"
        },
        {
            symbol: "KD",
            name: "Kuwaiti Dinar",
            symbol_native: "د.ك.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "KWD",
            name_plural: "Kuwaiti dinars"
        },
        {
            symbol: "KZT",
            name: "Kazakhstani Tenge",
            symbol_native: "тңг.",
            decimal_digits: 2,
            rounding: 0,
            code: "KZT",
            name_plural: "Kazakhstani tenges"
        },
        {
            symbol: "LB£",
            name: "Lebanese Pound",
            symbol_native: "ل.ل.‏",
            decimal_digits: 0,
            rounding: 0,
            code: "LBP",
            name_plural: "Lebanese pounds"
        },
        {
            symbol: "SLRs",
            name: "Sri Lankan Rupee",
            symbol_native: "SL Re",
            decimal_digits: 2,
            rounding: 0,
            code: "LKR",
            name_plural: "Sri Lankan rupees"
        },
        {
            symbol: "Lt",
            name: "Lithuanian Litas",
            symbol_native: "Lt",
            decimal_digits: 2,
            rounding: 0,
            code: "LTL",
            name_plural: "Lithuanian litai"
        },
        {
            symbol: "Ls",
            name: "Latvian Lats",
            symbol_native: "Ls",
            decimal_digits: 2,
            rounding: 0,
            code: "LVL",
            name_plural: "Latvian lati"
        },
        {
            symbol: "LD",
            name: "Libyan Dinar",
            symbol_native: "د.ل.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "LYD",
            name_plural: "Libyan dinars"
        },
        {
            symbol: "MAD",
            name: "Moroccan Dirham",
            symbol_native: "د.م.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "MAD",
            name_plural: "Moroccan dirhams"
        },
        {
            symbol: "MDL",
            name: "Moldovan Leu",
            symbol_native: "MDL",
            decimal_digits: 2,
            rounding: 0,
            code: "MDL",
            name_plural: "Moldovan lei"
        },
        {
            symbol: "MGA",
            name: "Malagasy Ariary",
            symbol_native: "MGA",
            decimal_digits: 0,
            rounding: 0,
            code: "MGA",
            name_plural: "Malagasy Ariaries"
        },
        {
            symbol: "MKD",
            name: "Macedonian Denar",
            symbol_native: "MKD",
            decimal_digits: 2,
            rounding: 0,
            code: "MKD",
            name_plural: "Macedonian denari"
        },
        {
            symbol: "MMK",
            name: "Myanma Kyat",
            symbol_native: "K",
            decimal_digits: 0,
            rounding: 0,
            code: "MMK",
            name_plural: "Myanma kyats"
        },
        {
            symbol: "MOP$",
            name: "Macanese Pataca",
            symbol_native: "MOP$",
            decimal_digits: 2,
            rounding: 0,
            code: "MOP",
            name_plural: "Macanese patacas"
        },
        {
            symbol: "MURs",
            name: "Mauritian Rupee",
            symbol_native: "MURs",
            decimal_digits: 0,
            rounding: 0,
            code: "MUR",
            name_plural: "Mauritian rupees"
        },
        {
            symbol: "MX$",
            name: "Mexican Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "MXN",
            name_plural: "Mexican pesos"
        },
        {
            symbol: "RM",
            name: "Malaysian Ringgit",
            symbol_native: "RM",
            decimal_digits: 2,
            rounding: 0,
            code: "MYR",
            name_plural: "Malaysian ringgits"
        },
        {
            symbol: "MTn",
            name: "Mozambican Metical",
            symbol_native: "MTn",
            decimal_digits: 2,
            rounding: 0,
            code: "MZN",
            name_plural: "Mozambican meticals"
        },
        {
            symbol: "N$",
            name: "Namibian Dollar",
            symbol_native: "N$",
            decimal_digits: 2,
            rounding: 0,
            code: "NAD",
            name_plural: "Namibian dollars"
        },
        {
            symbol: "₦",
            name: "Nigerian Naira",
            symbol_native: "₦",
            decimal_digits: 2,
            rounding: 0,
            code: "NGN",
            name_plural: "Nigerian nairas"
        },
        {
            symbol: "C$",
            name: "Nicaraguan Córdoba",
            symbol_native: "C$",
            decimal_digits: 2,
            rounding: 0,
            code: "NIO",
            name_plural: "Nicaraguan córdobas"
        },
        {
            symbol: "Nkr",
            name: "Norwegian Krone",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "NOK",
            name_plural: "Norwegian kroner"
        },
        {
            symbol: "NPRs",
            name: "Nepalese Rupee",
            symbol_native: "नेरू",
            decimal_digits: 2,
            rounding: 0,
            code: "NPR",
            name_plural: "Nepalese rupees"
        },
        {
            symbol: "NZ$",
            name: "New Zealand Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "NZD",
            name_plural: "New Zealand dollars"
        },
        {
            symbol: "OMR",
            name: "Omani Rial",
            symbol_native: "ر.ع.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "OMR",
            name_plural: "Omani rials"
        },
        {
            symbol: "B/.",
            name: "Panamanian Balboa",
            symbol_native: "B/.",
            decimal_digits: 2,
            rounding: 0,
            code: "PAB",
            name_plural: "Panamanian balboas"
        },
        {
            symbol: "S/.",
            name: "Peruvian Nuevo Sol",
            symbol_native: "S/.",
            decimal_digits: 2,
            rounding: 0,
            code: "PEN",
            name_plural: "Peruvian nuevos soles"
        },
        {
            symbol: "₱",
            name: "Philippine Peso",
            symbol_native: "₱",
            decimal_digits: 2,
            rounding: 0,
            code: "PHP",
            name_plural: "Philippine pesos"
        },
        {
            symbol: "PKRs",
            name: "Pakistani Rupee",
            symbol_native: "₨",
            decimal_digits: 0,
            rounding: 0,
            code: "PKR",
            name_plural: "Pakistani rupees"
        },
        {
            symbol: "zł",
            name: "Polish Zloty",
            symbol_native: "zł",
            decimal_digits: 2,
            rounding: 0,
            code: "PLN",
            name_plural: "Polish zlotys"
        },
        {
            symbol: "₲",
            name: "Paraguayan Guarani",
            symbol_native: "₲",
            decimal_digits: 0,
            rounding: 0,
            code: "PYG",
            name_plural: "Paraguayan guaranis"
        },
        {
            symbol: "QR",
            name: "Qatari Rial",
            symbol_native: "ر.ق.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "QAR",
            name_plural: "Qatari rials"
        },
        {
            symbol: "RON",
            name: "Romanian Leu",
            symbol_native: "RON",
            decimal_digits: 2,
            rounding: 0,
            code: "RON",
            name_plural: "Romanian lei"
        },
        {
            symbol: "din.",
            name: "Serbian Dinar",
            symbol_native: "дин.",
            decimal_digits: 0,
            rounding: 0,
            code: "RSD",
            name_plural: "Serbian dinars"
        },
        {
            symbol: "RUB",
            name: "Russian Ruble",
            symbol_native: "руб.",
            decimal_digits: 2,
            rounding: 0,
            code: "RUB",
            name_plural: "Russian rubles"
        },
        {
            symbol: "RWF",
            name: "Rwandan Franc",
            symbol_native: "FR",
            decimal_digits: 0,
            rounding: 0,
            code: "RWF",
            name_plural: "Rwandan francs"
        },
        {
            symbol: "SR",
            name: "Saudi Riyal",
            symbol_native: "ر.س.‏",
            decimal_digits: 2,
            rounding: 0,
            code: "SAR",
            name_plural: "Saudi riyals"
        },
        {
            symbol: "SDG",
            name: "Sudanese Pound",
            symbol_native: "SDG",
            decimal_digits: 2,
            rounding: 0,
            code: "SDG",
            name_plural: "Sudanese pounds"
        },
        {
            symbol: "Skr",
            name: "Swedish Krona",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "SEK",
            name_plural: "Swedish kronor"
        },
        {
            symbol: "S$",
            name: "Singapore Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "SGD",
            name_plural: "Singapore dollars"
        },
        {
            symbol: "Ssh",
            name: "Somali Shilling",
            symbol_native: "Ssh",
            decimal_digits: 0,
            rounding: 0,
            code: "SOS",
            name_plural: "Somali shillings"
        },
        {
            symbol: "SY£",
            name: "Syrian Pound",
            symbol_native: "ل.س.‏",
            decimal_digits: 0,
            rounding: 0,
            code: "SYP",
            name_plural: "Syrian pounds"
        },
        {
            symbol: "฿",
            name: "Thai Baht",
            symbol_native: "฿",
            decimal_digits: 2,
            rounding: 0,
            code: "THB",
            name_plural: "Thai baht"
        },
        {
            symbol: "DT",
            name: "Tunisian Dinar",
            symbol_native: "د.ت.‏",
            decimal_digits: 3,
            rounding: 0,
            code: "TND",
            name_plural: "Tunisian dinars"
        },
        {
            symbol: "T$",
            name: "Tongan Paʻanga",
            symbol_native: "T$",
            decimal_digits: 2,
            rounding: 0,
            code: "TOP",
            name_plural: "Tongan paʻanga"
        },
        {
            symbol: "TL",
            name: "Turkish Lira",
            symbol_native: "TL",
            decimal_digits: 2,
            rounding: 0,
            code: "TRY",
            name_plural: "Turkish Lira"
        },
        {
            symbol: "TT$",
            name: "Trinidad and Tobago Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "TTD",
            name_plural: "Trinidad and Tobago dollars"
        },
        {
            symbol: "NT$",
            name: "New Taiwan Dollar",
            symbol_native: "NT$",
            decimal_digits: 2,
            rounding: 0,
            code: "TWD",
            name_plural: "New Taiwan dollars"
        },
        {
            symbol: "TSh",
            name: "Tanzanian Shilling",
            symbol_native: "TSh",
            decimal_digits: 0,
            rounding: 0,
            code: "TZS",
            name_plural: "Tanzanian shillings"
        },
        {
            symbol: "₴",
            name: "Ukrainian Hryvnia",
            symbol_native: "₴",
            decimal_digits: 2,
            rounding: 0,
            code: "UAH",
            name_plural: "Ukrainian hryvnias"
        },
        {
            symbol: "USh",
            name: "Ugandan Shilling",
            symbol_native: "USh",
            decimal_digits: 0,
            rounding: 0,
            code: "UGX",
            name_plural: "Ugandan shillings"
        },
        {
            symbol: "$U",
            name: "Uruguayan Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "UYU",
            name_plural: "Uruguayan pesos"
        },
        {
            symbol: "UZS",
            name: "Uzbekistan Som",
            symbol_native: "UZS",
            decimal_digits: 0,
            rounding: 0,
            code: "UZS",
            name_plural: "Uzbekistan som"
        },
        {
            symbol: "Bs.F.",
            name: "Venezuelan Bolívar",
            symbol_native: "Bs.F.",
            decimal_digits: 2,
            rounding: 0,
            code: "VEF",
            name_plural: "Venezuelan bolívars"
        },
        {
            symbol: "₫",
            name: "Vietnamese Dong",
            symbol_native: "₫",
            decimal_digits: 0,
            rounding: 0,
            code: "VND",
            name_plural: "Vietnamese dong"
        },
        {
            symbol: "FCFA",
            name: "CFA Franc BEAC",
            symbol_native: "FCFA",
            decimal_digits: 0,
            rounding: 0,
            code: "XAF",
            name_plural: "CFA francs BEAC"
        },
        {
            symbol: "CFA",
            name: "CFA Franc BCEAO",
            symbol_native: "CFA",
            decimal_digits: 0,
            rounding: 0,
            code: "XOF",
            name_plural: "CFA francs BCEAO"
        },
        {
            symbol: "YR",
            name: "Yemeni Rial",
            symbol_native: "ر.ي.‏",
            decimal_digits: 0,
            rounding: 0,
            code: "YER",
            name_plural: "Yemeni rials"
        },
        {
            symbol: "R",
            name: "South African Rand",
            symbol_native: "R",
            decimal_digits: 2,
            rounding: 0,
            code: "ZAR",
            name_plural: "South African rand"
        },
        {
            symbol: "ZK",
            name: "Zambian Kwacha",
            symbol_native: "ZK",
            decimal_digits: 0,
            rounding: 0,
            code: "ZMK",
            name_plural: "Zambian kwachas"
        }
    ],
    /**
	 * MIME types from the apache.org file. Some types are truncated.
	 *
	 * @link http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
	 */ mime_types: {
        'application/atom+xml': 'atom',
        'application/ecmascript': 'ecma',
        'application/emma+xml': 'emma',
        'application/epub+zip': 'epub',
        'application/java-archive': 'jar',
        'application/java-vm': 'class',
        'application/javascript': 'js',
        'application/json': 'json',
        'application/jsonml+json': 'jsonml',
        'application/lost+xml': 'lostxml',
        'application/mathml+xml': 'mathml',
        'application/mets+xml': 'mets',
        'application/mods+xml': 'mods',
        'application/mp4': 'mp4s',
        'application/msword': [
            'doc',
            'dot'
        ],
        'application/octet-stream': [
            'bin',
            'dms',
            'lrf',
            'mar',
            'so',
            'dist',
            'distz',
            'pkg',
            'bpk',
            'dump',
            'elc',
            'deploy'
        ],
        'application/ogg': 'ogx',
        'application/omdoc+xml': 'omdoc',
        'application/pdf': 'pdf',
        'application/pgp-encrypted': 'pgp',
        'application/pgp-signature': [
            'asc',
            'sig'
        ],
        'application/pkix-pkipath': 'pkipath',
        'application/pkixcmp': 'pki',
        'application/pls+xml': 'pls',
        'application/postscript': [
            'ai',
            'eps',
            'ps'
        ],
        'application/pskc+xml': 'pskcxml',
        'application/rdf+xml': 'rdf',
        'application/reginfo+xml': 'rif',
        'application/rss+xml': 'rss',
        'application/rtf': 'rtf',
        'application/sbml+xml': 'sbml',
        'application/vnd.adobe.air-application-installer-package+zip': 'air',
        'application/vnd.adobe.xdp+xml': 'xdp',
        'application/vnd.adobe.xfdf': 'xfdf',
        'application/vnd.ahead.space': 'ahead',
        'application/vnd.dart': 'dart',
        'application/vnd.data-vision.rdz': 'rdz',
        'application/vnd.dece.data': [
            'uvf',
            'uvvf',
            'uvd',
            'uvvd'
        ],
        'application/vnd.dece.ttml+xml': [
            'uvt',
            'uvvt'
        ],
        'application/vnd.dece.unspecified': [
            'uvx',
            'uvvx'
        ],
        'application/vnd.dece.zip': [
            'uvz',
            'uvvz'
        ],
        'application/vnd.denovo.fcselayout-link': 'fe_launch',
        'application/vnd.dna': 'dna',
        'application/vnd.dolby.mlp': 'mlp',
        'application/vnd.dpgraph': 'dpg',
        'application/vnd.dreamfactory': 'dfac',
        'application/vnd.ds-keypoint': 'kpxx',
        'application/vnd.dvb.ait': 'ait',
        'application/vnd.dvb.service': 'svc',
        'application/vnd.dynageo': 'geo',
        'application/vnd.ecowin.chart': 'mag',
        'application/vnd.enliven': 'nml',
        'application/vnd.epson.esf': 'esf',
        'application/vnd.epson.msf': 'msf',
        'application/vnd.epson.quickanime': 'qam',
        'application/vnd.epson.salt': 'slt',
        'application/vnd.epson.ssf': 'ssf',
        'application/vnd.ezpix-album': 'ez2',
        'application/vnd.ezpix-package': 'ez3',
        'application/vnd.fdf': 'fdf',
        'application/vnd.fdsn.mseed': 'mseed',
        'application/vnd.fdsn.seed': [
            'seed',
            'dataless'
        ],
        'application/vnd.flographit': 'gph',
        'application/vnd.fluxtime.clip': 'ftc',
        'application/vnd.hal+xml': 'hal',
        'application/vnd.hydrostatix.sof-data': 'sfd-hdstx',
        'application/vnd.ibm.minipay': 'mpy',
        'application/vnd.ibm.secure-container': 'sc',
        'application/vnd.iccprofile': [
            'icc',
            'icm'
        ],
        'application/vnd.igloader': 'igl',
        'application/vnd.immervision-ivp': 'ivp',
        'application/vnd.kde.karbon': 'karbon',
        'application/vnd.kde.kchart': 'chrt',
        'application/vnd.kde.kformula': 'kfo',
        'application/vnd.kde.kivio': 'flw',
        'application/vnd.kde.kontour': 'kon',
        'application/vnd.kde.kpresenter': [
            'kpr',
            'kpt'
        ],
        'application/vnd.kde.kspread': 'ksp',
        'application/vnd.kde.kword': [
            'kwd',
            'kwt'
        ],
        'application/vnd.kenameaapp': 'htke',
        'application/vnd.kidspiration': 'kia',
        'application/vnd.kinar': [
            'kne',
            'knp'
        ],
        'application/vnd.koan': [
            'skp',
            'skd',
            'skt',
            'skm'
        ],
        'application/vnd.kodak-descriptor': 'sse',
        'application/vnd.las.las+xml': 'lasxml',
        'application/vnd.llamagraphics.life-balance.desktop': 'lbd',
        'application/vnd.llamagraphics.life-balance.exchange+xml': 'lbe',
        'application/vnd.lotus-1-2-3': '123',
        'application/vnd.lotus-approach': 'apr',
        'application/vnd.lotus-freelance': 'pre',
        'application/vnd.lotus-notes': 'nsf',
        'application/vnd.lotus-organizer': 'org',
        'application/vnd.lotus-screencam': 'scm',
        'application/vnd.mozilla.xul+xml': 'xul',
        'application/vnd.ms-artgalry': 'cil',
        'application/vnd.ms-cab-compressed': 'cab',
        'application/vnd.ms-excel': [
            'xls',
            'xlm',
            'xla',
            'xlc',
            'xlt',
            'xlw'
        ],
        'application/vnd.ms-excel.addin.macroenabled.12': 'xlam',
        'application/vnd.ms-excel.sheet.binary.macroenabled.12': 'xlsb',
        'application/vnd.ms-excel.sheet.macroenabled.12': 'xlsm',
        'application/vnd.ms-excel.template.macroenabled.12': 'xltm',
        'application/vnd.ms-fontobject': 'eot',
        'application/vnd.ms-htmlhelp': 'chm',
        'application/vnd.ms-ims': 'ims',
        'application/vnd.ms-lrm': 'lrm',
        'application/vnd.ms-officetheme': 'thmx',
        'application/vnd.ms-pki.seccat': 'cat',
        'application/vnd.ms-pki.stl': 'stl',
        'application/vnd.ms-powerpoint': [
            'ppt',
            'pps',
            'pot'
        ],
        'application/vnd.ms-powerpoint.addin.macroenabled.12': 'ppam',
        'application/vnd.ms-powerpoint.presentation.macroenabled.12': 'pptm',
        'application/vnd.ms-powerpoint.slide.macroenabled.12': 'sldm',
        'application/vnd.ms-powerpoint.slideshow.macroenabled.12': 'ppsm',
        'application/vnd.ms-powerpoint.template.macroenabled.12': 'potm',
        'application/vnd.ms-project': [
            'mpp',
            'mpt'
        ],
        'application/vnd.ms-word.document.macroenabled.12': 'docm',
        'application/vnd.ms-word.template.macroenabled.12': 'dotm',
        'application/vnd.ms-works': [
            'wps',
            'wks',
            'wcm',
            'wdb'
        ],
        'application/vnd.ms-wpl': 'wpl',
        'application/vnd.ms-xpsdocument': 'xps',
        'application/vnd.mseq': 'mseq',
        'application/vnd.musician': 'mus',
        'application/vnd.oasis.opendocument.chart': 'odc',
        'application/vnd.oasis.opendocument.chart-template': 'otc',
        'application/vnd.oasis.opendocument.database': 'odb',
        'application/vnd.oasis.opendocument.formula': 'odf',
        'application/vnd.oasis.opendocument.formula-template': 'odft',
        'application/vnd.oasis.opendocument.graphics': 'odg',
        'application/vnd.oasis.opendocument.graphics-template': 'otg',
        'application/vnd.oasis.opendocument.image': 'odi',
        'application/vnd.oasis.opendocument.image-template': 'oti',
        'application/vnd.oasis.opendocument.presentation': 'odp',
        'application/vnd.oasis.opendocument.presentation-template': 'otp',
        'application/vnd.oasis.opendocument.spreadsheet': 'ods',
        'application/vnd.oasis.opendocument.spreadsheet-template': 'ots',
        'application/vnd.oasis.opendocument.text': 'odt',
        'application/vnd.oasis.opendocument.text-master': 'odm',
        'application/vnd.oasis.opendocument.text-template': 'ott',
        'application/vnd.oasis.opendocument.text-web': 'oth',
        'application/vnd.olpc-sugar': 'xo',
        'application/vnd.oma.dd2+xml': 'dd2',
        'application/vnd.openofficeorg.extension': 'oxt',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
        'application/vnd.openxmlformats-officedocument.presentationml.slide': 'sldx',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow': 'ppsx',
        'application/vnd.openxmlformats-officedocument.presentationml.template': 'potx',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template': 'xltx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template': 'dotx',
        'application/vnd.pvi.ptid1': 'ptid',
        'application/vnd.quark.quarkxpress': [
            'qxd',
            'qxt',
            'qwd',
            'qwt',
            'qxl',
            'qxb'
        ],
        'application/vnd.realvnc.bed': 'bed',
        'application/vnd.recordare.musicxml': 'mxl',
        'application/vnd.recordare.musicxml+xml': 'musicxml',
        'application/vnd.rig.cryptonote': 'cryptonote',
        'application/vnd.rim.cod': 'cod',
        'application/vnd.rn-realmedia': 'rm',
        'application/vnd.rn-realmedia-vbr': 'rmvb',
        'application/vnd.route66.link66+xml': 'link66',
        'application/vnd.sailingtracker.track': 'st',
        'application/vnd.seemail': 'see',
        'application/vnd.sema': 'sema',
        'application/vnd.semd': 'semd',
        'application/vnd.semf': 'semf',
        'application/vnd.shana.informed.formdata': 'ifm',
        'application/vnd.shana.informed.formtemplate': 'itp',
        'application/vnd.shana.informed.interchange': 'iif',
        'application/vnd.shana.informed.package': 'ipk',
        'application/vnd.simtech-mindmapper': [
            'twd',
            'twds'
        ],
        'application/vnd.smaf': 'mmf',
        'application/vnd.stepmania.stepchart': 'sm',
        'application/vnd.sun.xml.calc': 'sxc',
        'application/vnd.sun.xml.calc.template': 'stc',
        'application/vnd.sun.xml.draw': 'sxd',
        'application/vnd.sun.xml.draw.template': 'std',
        'application/vnd.sun.xml.impress': 'sxi',
        'application/vnd.sun.xml.impress.template': 'sti',
        'application/vnd.sun.xml.math': 'sxm',
        'application/vnd.sun.xml.writer': 'sxw',
        'application/vnd.sun.xml.writer.global': 'sxg',
        'application/vnd.sun.xml.writer.template': 'stw',
        'application/vnd.sus-calendar': [
            'sus',
            'susp'
        ],
        'application/vnd.svd': 'svd',
        'application/vnd.symbian.install': [
            'sis',
            'sisx'
        ],
        'application/vnd.syncml+xml': 'xsm',
        'application/vnd.syncml.dm+wbxml': 'bdm',
        'application/vnd.syncml.dm+xml': 'xdm',
        'application/vnd.tao.intent-module-archive': 'tao',
        'application/vnd.tcpdump.pcap': [
            'pcap',
            'cap',
            'dmp'
        ],
        'application/vnd.tmobile-livetv': 'tmo',
        'application/vnd.trid.tpt': 'tpt',
        'application/vnd.triscape.mxs': 'mxs',
        'application/vnd.trueapp': 'tra',
        'application/vnd.ufdl': [
            'ufd',
            'ufdl'
        ],
        'application/vnd.uiq.theme': 'utz',
        'application/vnd.umajin': 'umj',
        'application/vnd.unity': 'unityweb',
        'application/vnd.uoml+xml': 'uoml',
        'application/vnd.vcx': 'vcx',
        'application/vnd.visio': [
            'vsd',
            'vst',
            'vss',
            'vsw'
        ],
        'application/vnd.visionary': 'vis',
        'application/vnd.vsf': 'vsf',
        'application/vnd.wap.wbxml': 'wbxml',
        'application/vnd.wap.wmlc': 'wmlc',
        'application/vnd.wap.wmlscriptc': 'wmlsc',
        'application/vnd.webturbo': 'wtb',
        'application/vnd.wolfram.player': 'nbp',
        'application/vnd.wordperfect': 'wpd',
        'application/vnd.wqd': 'wqd',
        'application/vnd.wt.stf': 'stf',
        'application/vnd.xara': 'xar',
        'application/vnd.xfdl': 'xfdl',
        'application/voicexml+xml': 'vxml',
        'application/widget': 'wgt',
        'application/winhlp': 'hlp',
        'application/wsdl+xml': 'wsdl',
        'application/wspolicy+xml': 'wspolicy',
        'application/x-7z-compressed': '7z',
        'application/x-bittorrent': 'torrent',
        'application/x-blorb': [
            'blb',
            'blorb'
        ],
        'application/x-bzip': 'bz',
        'application/x-cdlink': 'vcd',
        'application/x-cfs-compressed': 'cfs',
        'application/x-chat': 'chat',
        'application/x-chess-pgn': 'pgn',
        'application/x-conference': 'nsc',
        'application/x-cpio': 'cpio',
        'application/x-csh': 'csh',
        'application/x-debian-package': [
            'deb',
            'udeb'
        ],
        'application/x-dgc-compressed': 'dgc',
        'application/x-director': [
            'dir',
            'dcr',
            'dxr',
            'cst',
            'cct',
            'cxt',
            'w3d',
            'fgd',
            'swa'
        ],
        'application/x-font-ttf': [
            'ttf',
            'ttc'
        ],
        'application/x-font-type1': [
            'pfa',
            'pfb',
            'pfm',
            'afm'
        ],
        'application/x-font-woff': 'woff',
        'application/x-freearc': 'arc',
        'application/x-futuresplash': 'spl',
        'application/x-gca-compressed': 'gca',
        'application/x-glulx': 'ulx',
        'application/x-gnumeric': 'gnumeric',
        'application/x-gramps-xml': 'gramps',
        'application/x-gtar': 'gtar',
        'application/x-hdf': 'hdf',
        'application/x-install-instructions': 'install',
        'application/x-iso9660-image': 'iso',
        'application/x-java-jnlp-file': 'jnlp',
        'application/x-latex': 'latex',
        'application/x-lzh-compressed': [
            'lzh',
            'lha'
        ],
        'application/x-mie': 'mie',
        'application/x-mobipocket-ebook': [
            'prc',
            'mobi'
        ],
        'application/x-ms-application': 'application',
        'application/x-ms-shortcut': 'lnk',
        'application/x-ms-wmd': 'wmd',
        'application/x-ms-wmz': 'wmz',
        'application/x-ms-xbap': 'xbap',
        'application/x-msaccess': 'mdb',
        'application/x-msbinder': 'obd',
        'application/x-mscardfile': 'crd',
        'application/x-msclip': 'clp',
        'application/x-msdownload': [
            'exe',
            'dll',
            'com',
            'bat',
            'msi'
        ],
        'application/x-msmediaview': [
            'mvb',
            'm13',
            'm14'
        ],
        'application/x-msmetafile': [
            'wmf',
            'wmz',
            'emf',
            'emz'
        ],
        'application/x-rar-compressed': 'rar',
        'application/x-research-info-systems': 'ris',
        'application/x-sh': 'sh',
        'application/x-shar': 'shar',
        'application/x-shockwave-flash': 'swf',
        'application/x-silverlight-app': 'xap',
        'application/x-sql': 'sql',
        'application/x-stuffit': 'sit',
        'application/x-stuffitx': 'sitx',
        'application/x-subrip': 'srt',
        'application/x-sv4cpio': 'sv4cpio',
        'application/x-sv4crc': 'sv4crc',
        'application/x-t3vm-image': 't3',
        'application/x-tads': 'gam',
        'application/x-tar': 'tar',
        'application/x-tcl': 'tcl',
        'application/x-tex': 'tex',
        'application/x-tex-tfm': 'tfm',
        'application/x-texinfo': [
            'texinfo',
            'texi'
        ],
        'application/x-tgif': 'obj',
        'application/x-ustar': 'ustar',
        'application/x-wais-source': 'src',
        'application/x-x509-ca-cert': [
            'der',
            'crt'
        ],
        'application/x-xfig': 'fig',
        'application/x-xliff+xml': 'xlf',
        'application/x-xpinstall': 'xpi',
        'application/x-xz': 'xz',
        'application/x-zmachine': 'z1',
        'application/xaml+xml': 'xaml',
        'application/xcap-diff+xml': 'xdf',
        'application/xenc+xml': 'xenc',
        'application/xhtml+xml': [
            'xhtml',
            'xht'
        ],
        'application/xml': [
            'xml',
            'xsl'
        ],
        'application/xml-dtd': 'dtd',
        'application/xop+xml': 'xop',
        'application/xproc+xml': 'xpl',
        'application/xslt+xml': 'xslt',
        'application/xspf+xml': 'xspf',
        'application/xv+xml': [
            'mxml',
            'xhvml',
            'xvml',
            'xvm'
        ],
        'application/yang': 'yang',
        'application/yin+xml': 'yin',
        'application/zip': 'zip',
        'audio/adpcm': 'adp',
        'audio/basic': [
            'au',
            'snd'
        ],
        'audio/midi': [
            'mid',
            'midi',
            'kar',
            'rmi'
        ],
        'audio/mp4': 'mp4a',
        'audio/mpeg': [
            'mpga',
            'mp2',
            'mp2a',
            'mp3',
            'm2a',
            'm3a'
        ],
        'audio/ogg': [
            'oga',
            'ogg',
            'spx'
        ],
        'audio/vnd.dece.audio': [
            'uva',
            'uvva'
        ],
        'audio/vnd.rip': 'rip',
        'audio/webm': 'weba',
        'audio/x-aac': 'aac',
        'audio/x-aiff': [
            'aif',
            'aiff',
            'aifc'
        ],
        'audio/x-caf': 'caf',
        'audio/x-flac': 'flac',
        'audio/x-matroska': 'mka',
        'audio/x-mpegurl': 'm3u',
        'audio/x-ms-wax': 'wax',
        'audio/x-ms-wma': 'wma',
        'audio/x-pn-realaudio': [
            'ram',
            'ra'
        ],
        'audio/x-pn-realaudio-plugin': 'rmp',
        'audio/x-wav': 'wav',
        'audio/xm': 'xm',
        'image/bmp': 'bmp',
        'image/cgm': 'cgm',
        'image/g3fax': 'g3',
        'image/gif': 'gif',
        'image/ief': 'ief',
        'image/jpeg': [
            'jpeg',
            'jpg',
            'jpe'
        ],
        'image/ktx': 'ktx',
        'image/png': 'png',
        'image/prs.btif': 'btif',
        'image/sgi': 'sgi',
        'image/svg+xml': [
            'svg',
            'svgz'
        ],
        'image/tiff': [
            'tiff',
            'tif'
        ],
        'image/vnd.adobe.photoshop': 'psd',
        'image/vnd.dece.graphic': [
            'uvi',
            'uvvi',
            'uvg',
            'uvvg'
        ],
        'image/vnd.dvb.subtitle': 'sub',
        'image/vnd.djvu': [
            'djvu',
            'djv'
        ],
        'image/vnd.dwg': 'dwg',
        'image/vnd.dxf': 'dxf',
        'image/vnd.fastbidsheet': 'fbs',
        'image/vnd.fpx': 'fpx',
        'image/vnd.fst': 'fst',
        'image/vnd.fujixerox.edmics-mmr': 'mmr',
        'image/vnd.fujixerox.edmics-rlc': 'rlc',
        'image/vnd.ms-modi': 'mdi',
        'image/vnd.ms-photo': 'wdp',
        'image/vnd.net-fpx': 'npx',
        'image/vnd.wap.wbmp': 'wbmp',
        'image/vnd.xiff': 'xif',
        'image/webp': 'webp',
        'image/x-3ds': '3ds',
        'image/x-cmu-raster': 'ras',
        'image/x-cmx': 'cmx',
        'image/x-freehand': [
            'fh',
            'fhc',
            'fh4',
            'fh5',
            'fh7'
        ],
        'image/x-icon': 'ico',
        'image/x-mrsid-image': 'sid',
        'image/x-pcx': 'pcx',
        'image/x-pict': [
            'pic',
            'pct'
        ],
        'image/x-portable-anymap': 'pnm',
        'image/x-portable-bitmap': 'pbm',
        'image/x-portable-graymap': 'pgm',
        'image/x-portable-pixmap': 'ppm',
        'image/x-rgb': 'rgb',
        'image/x-tga': 'tga',
        'image/x-xbitmap': 'xbm',
        'image/x-xpixmap': 'xpm',
        'image/x-xwindowdump': 'xwd',
        'message/rfc822': [
            'eml',
            'mime'
        ],
        'model/iges': [
            'igs',
            'iges'
        ],
        'model/mesh': [
            'msh',
            'mesh',
            'silo'
        ],
        'model/vnd.collada+xml': 'dae',
        'model/vnd.dwf': 'dwf',
        'model/vnd.gdl': 'gdl',
        'model/vnd.gtw': 'gtw',
        'model/vnd.mts': 'mts',
        'model/vnd.vtu': 'vtu',
        'model/vrml': [
            'wrl',
            'vrml'
        ],
        'model/x3d+binary': 'x3db',
        'model/x3d+vrml': 'x3dv',
        'model/x3d+xml': 'x3d',
        'text/cache-manifest': 'appcache',
        'text/calendar': [
            'ics',
            'ifb'
        ],
        'text/css': 'css',
        'text/csv': 'csv',
        'text/html': [
            'html',
            'htm'
        ],
        'text/n3': 'n3',
        'text/plain': [
            'txt',
            'text',
            'conf',
            'def',
            'list',
            'log',
            'in'
        ],
        'text/prs.lines.tag': 'dsc',
        'text/richtext': 'rtx',
        'text/sgml': [
            'sgml',
            'sgm'
        ],
        'text/tab-separated-values': 'tsv',
        'text/troff': [
            't',
            'tr',
            'roff',
            'man',
            'me',
            'ms'
        ],
        'text/turtle': 'ttl',
        'text/uri-list': [
            'uri',
            'uris',
            'urls'
        ],
        'text/vcard': 'vcard',
        'text/vnd.curl': 'curl',
        'text/vnd.curl.dcurl': 'dcurl',
        'text/vnd.curl.scurl': 'scurl',
        'text/vnd.curl.mcurl': 'mcurl',
        'text/vnd.dvb.subtitle': 'sub',
        'text/vnd.fly': 'fly',
        'text/vnd.fmi.flexstor': 'flx',
        'text/vnd.graphviz': 'gv',
        'text/vnd.in3d.3dml': '3dml',
        'text/vnd.in3d.spot': 'spot',
        'text/vnd.sun.j2me.app-descriptor': 'jad',
        'text/vnd.wap.wml': 'wml',
        'text/vnd.wap.wmlscript': 'wmls',
        'text/x-asm': [
            's',
            'asm'
        ],
        'text/x-fortran': [
            'f',
            'for',
            'f77',
            'f90'
        ],
        'text/x-java-source': 'java',
        'text/x-opml': 'opml',
        'text/x-pascal': [
            'p',
            'pas'
        ],
        'text/x-nfo': 'nfo',
        'text/x-setext': 'etx',
        'text/x-sfv': 'sfv',
        'text/x-uuencode': 'uu',
        'text/x-vcalendar': 'vcs',
        'text/x-vcard': 'vcf',
        'video/3gpp': '3gp',
        'video/3gpp2': '3g2',
        'video/h261': 'h261',
        'video/h263': 'h263',
        'video/h264': 'h264',
        'video/jpeg': 'jpgv',
        'video/jpm': [
            'jpm',
            'jpgm'
        ],
        'video/mj2': 'mj2',
        'video/mp4': 'mp4',
        'video/mpeg': [
            'mpeg',
            'mpg',
            'mpe',
            'm1v',
            'm2v'
        ],
        'video/ogg': 'ogv',
        'video/quicktime': [
            'qt',
            'mov'
        ],
        'video/vnd.dece.hd': [
            'uvh',
            'uvvh'
        ],
        'video/vnd.dece.mobile': [
            'uvm',
            'uvvm'
        ],
        'video/vnd.dece.pd': [
            'uvp',
            'uvvp'
        ],
        'video/vnd.dece.sd': [
            'uvs',
            'uvvs'
        ],
        'video/vnd.dece.video': [
            'uvv',
            'uvvv'
        ],
        'video/vnd.dvb.file': 'dvb',
        'video/vnd.fvt': 'fvt',
        'video/vnd.mpegurl': [
            'mxu',
            'm4u'
        ],
        'video/vnd.ms-playready.media.pyv': 'pyv',
        'video/vnd.uvvu.mp4': [
            'uvu',
            'uvvu'
        ],
        'video/vnd.vivo': 'viv',
        'video/webm': 'webm',
        'video/x-f4v': 'f4v',
        'video/x-fli': 'fli',
        'video/x-flv': 'flv',
        'video/x-m4v': 'm4v',
        'video/x-matroska': [
            'mkv',
            'mk3d',
            'mks'
        ],
        'video/x-mng': 'mng',
        'video/x-ms-asf': [
            'asf',
            'asx'
        ],
        'video/x-ms-vob': 'vob',
        'video/x-ms-wm': 'wm',
        'video/x-ms-wmv': 'wmv',
        'video/x-ms-wmx': 'wmx',
        'video/x-ms-wvx': 'wvx',
        'video/x-msvideo': 'avi',
        'video/x-sgi-movie': 'movie'
    },
    locale: function() {
        return this.random_element(this.locales);
    },
    country_code: function() {
        return this.random_element(this.country_codes);
    },
    language_code: function() {
        return this.random_element(this.language_codes);
    },
    currency: function() {
        return this.random_element(this.currencies);
    },
    currency_code: function() {
        return this.random_element(this.currencies).code;
    },
    currency_symbol: function() {
        return this.random_element(this.currencies).symbol;
    },
    currency_name: function() {
        return this.random_element(this.currencies).name;
    },
    mime_type: function() {
        return this.random_key(this.mime_types);
    },
    file_extension: function() {
        var ext = this.random_value(this.mime_types);
        return typeof ext === 'string' ? ext : this.random_element(ext);
    },
    boolean: function() {
        return this.coin_flip;
    },
    uuid: function() {
        return (b = (function(_b) {
            function b(_x) {
                return _b.apply(this, arguments);
            }
            b.toString = function() {
                return _b.toString();
            };
            return b;
        })(function(a) {
            return a ? (a ^ number.random() * 16 >> a / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, b);
        }))();
    }
};
module.exports = provider;

},{"./number":"4B1lU"}],"3J87d":[function(require,module,exports) {
var provider = {
    card_vendors: [
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'MasterCard',
        'MasterCard',
        'MasterCard',
        'MasterCard',
        'MasterCard',
        'American Express',
        'Discover Card'
    ],
    card_params: {
        'Visa': [
            "4539############",
            "4556############",
            "4916############",
            "4532############",
            "4929############",
            "40240071########",
            "4485############",
            "4716############",
            "4###############"
        ],
        'MasterCard': [
            "51##############",
            "52##############",
            "53##############",
            "54##############",
            "55##############"
        ],
        'American Express': [
            "34#############",
            "37#############"
        ],
        'Discover Card': [
            "6011############"
        ]
    },
    card_type: function() {
        return this.random_element(this.card_vendors);
    },
    card_number: function(vendor) {
        vendor = vendor || this.card_type;
        var mask = this.random_element(this.card_params[vendor]);
        return this.numerify(mask);
    },
    card_exp: function() {
        return this.date('MM/YY');
    },
    card_data: function() {
        var type = this.card_type;
        return {
            type: type,
            number: this.card_number(type),
            exp: this.card_exp,
            holder_name: this.full_name
        };
    }
};
module.exports = provider;

},{}],"kTSFl":[function(require,module,exports) {
var glues = [
    '.',
    '-',
    '_',
    null
];
var provider = {
    phone_formats: [
        '###-###-####'
    ],
    prefix: [
        'Mr.',
        'Mrs.',
        'Ms.',
        'Miss',
        'Dr.'
    ],
    suffix: [
        'Jr.',
        'Sr.',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'MD',
        'DDS',
        'PhD',
        'DVM'
    ],
    company_suffixes: [
        'Inc',
        'and Sons',
        'LLC',
        'Group',
        'PLC',
        'Ltd'
    ],
    catch_phrase_words: [
        [
            'Adaptive',
            'Advanced',
            'Ameliorated',
            'Assimilated',
            'Automated',
            'Balanced',
            'Business-focused',
            'Centralized',
            'Cloned',
            'Compatible',
            'Configurable',
            'Cross-group',
            'Cross-platform',
            'Customer-focused',
            'Customizable',
            'Decentralized',
            'De-engineered',
            'Devolved',
            'Digitized',
            'Distributed',
            'Diverse',
            'Down-sized',
            'Enhanced',
            'Enterprise-wide',
            'Ergonomic',
            'Exclusive',
            'Expanded',
            'Extended',
            'Facetoface',
            'Focused',
            'Front-line',
            'Fully-configurable',
            'Function-based',
            'Fundamental',
            'Future-proofed',
            'Grass-roots',
            'Horizontal',
            'Implemented',
            'Innovative',
            'Integrated',
            'Intuitive',
            'Inverse',
            'Managed',
            'Mandatory',
            'Monitored',
            'Multi-channelled',
            'Multi-lateral',
            'Multi-layered',
            'Multi-tiered',
            'Networked',
            'Object-based',
            'Open-architected',
            'Open-source',
            'Operative',
            'Optimized',
            'Optional',
            'Organic',
            'Organized',
            'Persevering',
            'Persistent',
            'Phased',
            'Polarised',
            'Pre-emptive',
            'Proactive',
            'Profit-focused',
            'Profound',
            'Programmable',
            'Progressive',
            'Public-key',
            'Quality-focused',
            'Reactive',
            'Realigned',
            'Re-contextualized',
            'Re-engineered',
            'Reduced',
            'Reverse-engineered',
            'Right-sized',
            'Robust',
            'Seamless',
            'Secured',
            'Self-enabling',
            'Sharable',
            'Stand-alone',
            'Streamlined',
            'Switchable',
            'Synchronised',
            'Synergistic',
            'Synergized',
            'Team-oriented',
            'Total',
            'Triple-buffered',
            'Universal',
            'Up-sized',
            'Upgradable',
            'User-centric',
            'User-friendly',
            'Versatile',
            'Virtual',
            'Visionary',
            'Vision-oriented'
        ],
        [
            '24hour',
            '24/7',
            '3rdgeneration',
            '4thgeneration',
            '5thgeneration',
            '6thgeneration',
            'actuating',
            'analyzing',
            'assymetric',
            'asynchronous',
            'attitude-oriented',
            'background',
            'bandwidth-monitored',
            'bi-directional',
            'bifurcated',
            'bottom-line',
            'clear-thinking',
            'client-driven',
            'client-server',
            'coherent',
            'cohesive',
            'composite',
            'context-sensitive',
            'contextually-based',
            'content-based',
            'dedicated',
            'demand-driven',
            'didactic',
            'directional',
            'discrete',
            'disintermediate',
            'dynamic',
            'eco-centric',
            'empowering',
            'encompassing',
            'even-keeled',
            'executive',
            'explicit',
            'exuding',
            'fault-tolerant',
            'foreground',
            'fresh-thinking',
            'full-range',
            'global',
            'grid-enabled',
            'heuristic',
            'high-level',
            'holistic',
            'homogeneous',
            'human-resource',
            'hybrid',
            'impactful',
            'incremental',
            'intangible',
            'interactive',
            'intermediate',
            'leadingedge',
            'local',
            'logistical',
            'maximized',
            'methodical',
            'mission-critical',
            'mobile',
            'modular',
            'motivating',
            'multimedia',
            'multi-state',
            'multi-tasking',
            'national',
            'needs-based',
            'neutral',
            'nextgeneration',
            'non-volatile',
            'object-oriented',
            'optimal',
            'optimizing',
            'radical',
            'real-time',
            'reciprocal',
            'regional',
            'responsive',
            'scalable',
            'secondary',
            'solution-oriented',
            'stable',
            'static',
            'systematic',
            'systemic',
            'system-worthy',
            'tangible',
            'tertiary',
            'transitional',
            'uniform',
            'upward-trending',
            'user-facing',
            'value-added',
            'web-enabled',
            'well-modulated',
            'zeroadministration',
            'zerodefect',
            'zerotolerance'
        ],
        [
            'ability',
            'access',
            'adapter',
            'algorithm',
            'alliance',
            'analyzer',
            'application',
            'approach',
            'architecture',
            'archive',
            'artificialintelligence',
            'array',
            'attitude',
            'benchmark',
            'budgetarymanagement',
            'capability',
            'capacity',
            'challenge',
            'circuit',
            'collaboration',
            'complexity',
            'concept',
            'conglomeration',
            'contingency',
            'core',
            'customerloyalty',
            'database',
            'data-warehouse',
            'definition',
            'emulation',
            'encoding',
            'encryption',
            'extranet',
            'firmware',
            'flexibility',
            'focusgroup',
            'forecast',
            'frame',
            'framework',
            'function',
            'functionalities',
            'GraphicInterface',
            'groupware',
            'GraphicalUserInterface',
            'hardware',
            'help-desk',
            'hierarchy',
            'hub',
            'implementation',
            'info-mediaries',
            'infrastructure',
            'initiative',
            'installation',
            'instructionset',
            'interface',
            'internetsolution',
            'intranet',
            'knowledgeuser',
            'knowledgebase',
            'localareanetwork',
            'leverage',
            'matrices',
            'matrix',
            'methodology',
            'middleware',
            'migration',
            'model',
            'moderator',
            'monitoring',
            'moratorium',
            'neural-net',
            'openarchitecture',
            'opensystem',
            'orchestration',
            'paradigm',
            'parallelism',
            'policy',
            'portal',
            'pricingstructure',
            'processimprovement',
            'product',
            'productivity',
            'project',
            'projection',
            'protocol',
            'securedline',
            'service-desk',
            'software',
            'solution',
            'standardization',
            'strategy',
            'structure',
            'success',
            'superstructure',
            'support',
            'synergy',
            'systemengine',
            'task-force',
            'throughput',
            'time-frame',
            'toolset',
            'utilisation',
            'website',
            'workforce'
        ]
    ],
    first_names: [
        'Aaliyah',
        'Aaron',
        'Abagail',
        'Abbey',
        'Abbie',
        'Abbigail',
        'Abby',
        'Abdiel',
        'Abdul',
        'Abdullah',
        'Abe',
        'Abel',
        'Abelardo',
        'Abigail',
        'Abigale',
        'Abigayle',
        'Abner',
        'Abraham',
        'Ada',
        'Adah',
        'Adalberto',
        'Adaline',
        'Adam',
        'Adan',
        'Addie',
        'Addison',
        'Adela',
        'Adelbert',
        'Adele',
        'Adelia',
        'Adeline',
        'Adell',
        'Adella',
        'Adelle',
        'Aditya',
        'Adolf',
        'Adolfo',
        'Adolph',
        'Adolphus',
        'Adonis',
        'Adrain',
        'Adrian',
        'Adriana',
        'Adrianna',
        'Adriel',
        'Adrien',
        'Adrienne',
        'Afton',
        'Aglae',
        'Agnes',
        'Agustin',
        'Agustina',
        'Ahmad',
        'Ahmed',
        'Aida',
        'Aidan',
        'Aiden',
        'Aileen',
        'Aimee',
        'Aisha',
        'Aiyana',
        'Akeem',
        'Al',
        'Alaina',
        'Alan',
        'Alana',
        'Alanis',
        'Alanna',
        'Alayna',
        'Alba',
        'Albert',
        'Alberta',
        'Albertha',
        'Alberto',
        'Albin',
        'Albina',
        'Alda',
        'Alden',
        'Alec',
        'Aleen',
        'Alejandra',
        'Alejandrin',
        'Alek',
        'Alena',
        'Alene',
        'Alessandra',
        'Alessandro',
        'Alessia',
        'Aletha',
        'Alex',
        'Alexa',
        'Alexander',
        'Alexandra',
        'Alexandre',
        'Alexandrea',
        'Alexandria',
        'Alexandrine',
        'Alexandro',
        'Alexane',
        'Alexanne',
        'Alexie',
        'Alexis',
        'Alexys',
        'Alexzander',
        'Alf',
        'Alfonso',
        'Alfonzo',
        'Alford',
        'Alfred',
        'Alfreda',
        'Alfredo',
        'Ali',
        'Alia',
        'Alice',
        'Alicia',
        'Alisa',
        'Alisha',
        'Alison',
        'Alivia',
        'Aliya',
        'Aliyah',
        'Aliza',
        'Alize',
        'Allan',
        'Allen',
        'Allene',
        'Allie',
        'Allison',
        'Ally',
        'Alphonso',
        'Alta',
        'Althea',
        'Alva',
        'Alvah',
        'Alvena',
        'Alvera',
        'Alverta',
        'Alvina',
        'Alvis',
        'Alyce',
        'Alycia',
        'Alysa',
        'Alysha',
        'Alyson',
        'Alysson',
        'Amalia',
        'Amanda',
        'Amani',
        'Amara',
        'Amari',
        'Amaya',
        'Amber',
        'Ambrose',
        'Amelia',
        'Amelie',
        'Amely',
        'America',
        'Americo',
        'Amie',
        'Amina',
        'Amir',
        'Amira',
        'Amiya',
        'Amos',
        'Amparo',
        'Amy',
        'Amya',
        'Ana',
        'Anabel',
        'Anabelle',
        'Anahi',
        'Anais',
        'Anastacio',
        'Anastasia',
        'Anderson',
        'Andre',
        'Andreane',
        'Andreanne',
        'Andres',
        'Andrew',
        'Andy',
        'Angel',
        'Angela',
        'Angelica',
        'Angelina',
        'Angeline',
        'Angelita',
        'Angelo',
        'Angie',
        'Angus',
        'Anibal',
        'Anika',
        'Anissa',
        'Anita',
        'Aniya',
        'Aniyah',
        'Anjali',
        'Anna',
        'Annabel',
        'Annabell',
        'Annabelle',
        'Annalise',
        'Annamae',
        'Annamarie',
        'Anne',
        'Annetta',
        'Annette',
        'Annie',
        'Ansel',
        'Ansley',
        'Anthony',
        'Antoinette',
        'Antone',
        'Antonetta',
        'Antonette',
        'Antonia',
        'Antonietta',
        'Antonina',
        'Antonio',
        'Antwan',
        'Antwon',
        'Anya',
        'April',
        'Ara',
        'Araceli',
        'Aracely',
        'Arch',
        'Archibald',
        'Ardella',
        'Arden',
        'Ardith',
        'Arely',
        'Ari',
        'Ariane',
        'Arianna',
        'Aric',
        'Ariel',
        'Arielle',
        'Arjun',
        'Arlene',
        'Arlie',
        'Arlo',
        'Armand',
        'Armando',
        'Armani',
        'Arnaldo',
        'Arne',
        'Arno',
        'Arnold',
        'Arnoldo',
        'Arnulfo',
        'Aron',
        'Art',
        'Arthur',
        'Arturo',
        'Arvel',
        'Arvid',
        'Arvilla',
        'Aryanna',
        'Asa',
        'Asha',
        'Ashlee',
        'Ashleigh',
        'Ashley',
        'Ashly',
        'Ashlynn',
        'Ashton',
        'Ashtyn',
        'Asia',
        'Assunta',
        'Astrid',
        'Athena',
        'Aubree',
        'Aubrey',
        'Audie',
        'Audra',
        'Audreanne',
        'Audrey',
        'August',
        'Augusta',
        'Augustine',
        'Augustus',
        'Aurelia',
        'Aurelie',
        'Aurelio',
        'Aurore',
        'Austen',
        'Austin',
        'Austyn',
        'Autumn',
        'Ava',
        'Avery',
        'Avis',
        'Axel',
        'Ayana',
        'Ayden',
        'Ayla',
        'Aylin',
        'Baby',
        'Bailee',
        'Bailey',
        'Barbara',
        'Barney',
        'Baron',
        'Barrett',
        'Barry',
        'Bart',
        'Bartholome',
        'Barton',
        'Baylee',
        'Beatrice',
        'Beau',
        'Beaulah',
        'Bell',
        'Bella',
        'Belle',
        'Ben',
        'Benedict',
        'Benjamin',
        'Bennett',
        'Bennie',
        'Benny',
        'Benton',
        'Berenice',
        'Bernadette',
        'Bernadine',
        'Bernard',
        'Bernardo',
        'Berneice',
        'Bernhard',
        'Bernice',
        'Bernie',
        'Berniece',
        'Bernita',
        'Berry',
        'Bert',
        'Berta',
        'Bertha',
        'Bertram',
        'Bertrand',
        'Beryl',
        'Bessie',
        'Beth',
        'Bethany',
        'Bethel',
        'Betsy',
        'Bette',
        'Bettie',
        'Betty',
        'Bettye',
        'Beulah',
        'Beverly',
        'Bianka',
        'Bill',
        'Billie',
        'Billy',
        'Birdie',
        'Blair',
        'Blaise',
        'Blake',
        'Blanca',
        'Blanche',
        'Blaze',
        'Bo',
        'Bobbie',
        'Bobby',
        'Bonita',
        'Bonnie',
        'Boris',
        'Boyd',
        'Brad',
        'Braden',
        'Bradford',
        'Bradley',
        'Bradly',
        'Brady',
        'Braeden',
        'Brain',
        'Brandi',
        'Brando',
        'Brandon',
        'Brandt',
        'Brandy',
        'Brandyn',
        'Brannon',
        'Branson',
        'Brant',
        'Braulio',
        'Braxton',
        'Brayan',
        'Breana',
        'Breanna',
        'Breanne',
        'Brenda',
        'Brendan',
        'Brenden',
        'Brendon',
        'Brenna',
        'Brennan',
        'Brennon',
        'Brent',
        'Bret',
        'Brett',
        'Bria',
        'Brian',
        'Briana',
        'Brianne',
        'Brice',
        'Bridget',
        'Bridgette',
        'Bridie',
        'Brielle',
        'Brigitte',
        'Brionna',
        'Brisa',
        'Britney',
        'Brittany',
        'Brock',
        'Broderick',
        'Brody',
        'Brook',
        'Brooke',
        'Brooklyn',
        'Brooks',
        'Brown',
        'Bruce',
        'Bryana',
        'Bryce',
        'Brycen',
        'Bryon',
        'Buck',
        'Bud',
        'Buddy',
        'Buford',
        'Bulah',
        'Burdette',
        'Burley',
        'Burnice',
        'Buster',
        'Cade',
        'Caden',
        'Caesar',
        'Caitlyn',
        'Cale',
        'Caleb',
        'Caleigh',
        'Cali',
        'Calista',
        'Callie',
        'Camden',
        'Cameron',
        'Camila',
        'Camilla',
        'Camille',
        'Camren',
        'Camron',
        'Camryn',
        'Camylle',
        'Candace',
        'Candelario',
        'Candice',
        'Candida',
        'Candido',
        'Cara',
        'Carey',
        'Carissa',
        'Carlee',
        'Carleton',
        'Carley',
        'Carli',
        'Carlie',
        'Carlo',
        'Carlos',
        'Carlotta',
        'Carmel',
        'Carmela',
        'Carmella',
        'Carmelo',
        'Carmen',
        'Carmine',
        'Carol',
        'Carolanne',
        'Carole',
        'Carolina',
        'Caroline',
        'Carolyn',
        'Carolyne',
        'Carrie',
        'Carroll',
        'Carson',
        'Carter',
        'Cary',
        'Casandra',
        'Casey',
        'Casimer',
        'Casimir',
        'Casper',
        'Cassandra',
        'Cassandre',
        'Cassidy',
        'Cassie',
        'Catalina',
        'Caterina',
        'Catharine',
        'Catherine',
        'Cathrine',
        'Cathryn',
        'Cathy',
        'Cayla',
        'Ceasar',
        'Cecelia',
        'Cecil',
        'Cecile',
        'Cecilia',
        'Cedrick',
        'Celestine',
        'Celestino',
        'Celia',
        'Celine',
        'Cesar',
        'Chad',
        'Chadd',
        'Chadrick',
        'Chaim',
        'Chance',
        'Chandler',
        'Chanel',
        'Chanelle',
        'Charity',
        'Charlene',
        'Charles',
        'Charley',
        'Charlie',
        'Charlotte',
        'Chase',
        'Chasity',
        'Chauncey',
        'Chaya',
        'Chaz',
        'Chelsea',
        'Chelsey',
        'Chelsie',
        'Chesley',
        'Chester',
        'Chet',
        'Cheyanne',
        'Cheyenne',
        'Chloe',
        'Chris',
        'Christ',
        'Christa',
        'Christelle',
        'Christian',
        'Christiana',
        'Christina',
        'Christine',
        'Christop',
        'Christophe',
        'Christopher',
        'Christy',
        'Chyna',
        'Ciara',
        'Cicero',
        'Cielo',
        'Cierra',
        'Cindy',
        'Citlalli',
        'Clair',
        'Claire',
        'Clara',
        'Clarabelle',
        'Clare',
        'Clarissa',
        'Clark',
        'Claud',
        'Claude',
        'Claudia',
        'Claudie',
        'Claudine',
        'Clay',
        'Clemens',
        'Clement',
        'Clementina',
        'Clementine',
        'Clemmie',
        'Cleo',
        'Cleora',
        'Cleta',
        'Cletus',
        'Cleve',
        'Cleveland',
        'Clifford',
        'Clifton',
        'Clint',
        'Clinton',
        'Clotilde',
        'Clovis',
        'Cloyd',
        'Clyde',
        'Coby',
        'Cody',
        'Colby',
        'Cole',
        'Coleman',
        'Colin',
        'Colleen',
        'Collin',
        'Colt',
        'Colten',
        'Colton',
        'Columbus',
        'Concepcion',
        'Conner',
        'Connie',
        'Connor',
        'Conor',
        'Conrad',
        'Constance',
        'Constantin',
        'Consuelo',
        'Cooper',
        'Cora',
        'Coralie',
        'Corbin',
        'Cordelia',
        'Cordell',
        'Cordia',
        'Cordie',
        'Corene',
        'Corine',
        'Cornelius',
        'Cornell',
        'Corrine',
        'Cortez',
        'Cortney',
        'Cory',
        'Coty',
        'Courtney',
        'Coy',
        'Craig',
        'Crawford',
        'Creola',
        'Cristal',
        'Cristian',
        'Cristina',
        'Cristobal',
        'Cristopher',
        'Cruz',
        'Crystal',
        'Crystel',
        'Cullen',
        'Curt',
        'Curtis',
        'Cydney',
        'Cynthia',
        'Cyril',
        'Cyrus',
        'Dagmar',
        'Dahlia',
        'Daija',
        'Daisha',
        'Daisy',
        'Dakota',
        'Dale',
        'Dallas',
        'Dallin',
        'Dalton',
        'Damaris',
        'Dameon',
        'Damian',
        'Damien',
        'Damion',
        'Damon',
        'Dan',
        'Dana',
        'Dandre',
        'Dane',
        'Dangelo',
        'Danial',
        'Daniela',
        'Daniella',
        'Danielle',
        'Danika',
        'Dannie',
        'Danny',
        'Dante',
        'Danyka',
        'Daphne',
        'Daphnee',
        'Daphney',
        'Darby',
        'Daren',
        'Darian',
        'Dariana',
        'Darien',
        'Dario',
        'Darion',
        'Darius',
        'Darlene',
        'Daron',
        'Darrel',
        'Darrell',
        'Darren',
        'Darrick',
        'Darrin',
        'Darrion',
        'Darron',
        'Darryl',
        'Darwin',
        'Daryl',
        'Dashawn',
        'Dasia',
        'Dave',
        'David',
        'Davin',
        'Davion',
        'Davon',
        'Davonte',
        'Dawn',
        'Dawson',
        'Dax',
        'Dayana',
        'Dayna',
        'Dayne',
        'Dayton',
        'Dean',
        'Deangelo',
        'Deanna',
        'Deborah',
        'Declan',
        'Dedric',
        'Dedrick',
        'Dee',
        'Deion',
        'Deja',
        'Dejah',
        'Dejon',
        'Dejuan',
        'Delaney',
        'Delbert',
        'Delfina',
        'Delia',
        'Delilah',
        'Dell',
        'Della',
        'Delmer',
        'Delores',
        'Delpha',
        'Delphia',
        'Delphine',
        'Delta',
        'Demarco',
        'Demarcus',
        'Demario',
        'Demetris',
        'Demetrius',
        'Demond',
        'Dena',
        'Denis',
        'Dennis',
        'Deon',
        'Deondre',
        'Deontae',
        'Deonte',
        'Dereck',
        'Derek',
        'Derick',
        'Deron',
        'Derrick',
        'Deshaun',
        'Deshawn',
        'Desiree',
        'Desmond',
        'Dessie',
        'Destany',
        'Destin',
        'Destinee',
        'Destiney',
        'Destini',
        'Destiny',
        'Devan',
        'Devante',
        'Deven',
        'Devin',
        'Devon',
        'Devonte',
        'Devyn',
        'Dewayne',
        'Dewitt',
        'Dexter',
        'Diamond',
        'Diana',
        'Dianna',
        'Diego',
        'Dillan',
        'Dillon',
        'Dimitri',
        'Dina',
        'Dino',
        'Dion',
        'Dixie',
        'Dock',
        'Dolly',
        'Dolores',
        'Domenic',
        'Domenica',
        'Domenick',
        'Domenico',
        'Domingo',
        'Dominic',
        'Dominique',
        'Don',
        'Donald',
        'Donato',
        'Donavon',
        'Donna',
        'Donnell',
        'Donnie',
        'Donny',
        'Dora',
        'Dorcas',
        'Dorian',
        'Doris',
        'Dorothea',
        'Dorothy',
        'Dorris',
        'Dortha',
        'Dorthy',
        'Doug',
        'Douglas',
        'Dovie',
        'Doyle',
        'Drake',
        'Drew',
        'Duane',
        'Dudley',
        'Dulce',
        'Duncan',
        'Durward',
        'Dustin',
        'Dusty',
        'Dwight',
        'Dylan',
        'Earl',
        'Earlene',
        'Earline',
        'Earnest',
        'Earnestine',
        'Easter',
        'Easton',
        'Ebba',
        'Ebony',
        'Ed',
        'Eda',
        'Edd',
        'Eddie',
        'Eden',
        'Edgar',
        'Edgardo',
        'Edison',
        'Edmond',
        'Edmund',
        'Edna',
        'Eduardo',
        'Edward',
        'Edwardo',
        'Edwin',
        'Edwina',
        'Edyth',
        'Edythe',
        'Effie',
        'Efrain',
        'Efren',
        'Eileen',
        'Einar',
        'Eino',
        'Eladio',
        'Elaina',
        'Elbert',
        'Elda',
        'Eldon',
        'Eldora',
        'Eldred',
        'Eldridge',
        'Eleanora',
        'Eleanore',
        'Eleazar',
        'Electa',
        'Elena',
        'Elenor',
        'Elenora',
        'Eleonore',
        'Elfrieda',
        'Eli',
        'Elian',
        'Eliane',
        'Elias',
        'Eliezer',
        'Elijah',
        'Elinor',
        'Elinore',
        'Elisa',
        'Elisabeth',
        'Elise',
        'Eliseo',
        'Elisha',
        'Elissa',
        'Eliza',
        'Elizabeth',
        'Ella',
        'Ellen',
        'Ellie',
        'Elliot',
        'Elliott',
        'Ellis',
        'Ellsworth',
        'Elmer',
        'Elmira',
        'Elmo',
        'Elmore',
        'Elna',
        'Elnora',
        'Elody',
        'Eloisa',
        'Eloise',
        'Elouise',
        'Eloy',
        'Elroy',
        'Elsa',
        'Else',
        'Elsie',
        'Elta',
        'Elton',
        'Elva',
        'Elvera',
        'Elvie',
        'Elvis',
        'Elwin',
        'Elwyn',
        'Elyse',
        'Elyssa',
        'Elza',
        'Emanuel',
        'Emelia',
        'Emelie',
        'Emely',
        'Emerald',
        'Emerson',
        'Emery',
        'Emie',
        'Emil',
        'Emile',
        'Emilia',
        'Emiliano',
        'Emilie',
        'Emilio',
        'Emily',
        'Emma',
        'Emmalee',
        'Emmanuel',
        'Emmanuelle',
        'Emmet',
        'Emmett',
        'Emmie',
        'Emmitt',
        'Emmy',
        'Emory',
        'Ena',
        'Enid',
        'Enoch',
        'Enola',
        'Enos',
        'Enrico',
        'Enrique',
        'Ephraim',
        'Era',
        'Eriberto',
        'Eric',
        'Erica',
        'Erich',
        'Erick',
        'Ericka',
        'Erik',
        'Erika',
        'Erin',
        'Erling',
        'Erna',
        'Ernest',
        'Ernestina',
        'Ernestine',
        'Ernesto',
        'Ernie',
        'Ervin',
        'Erwin',
        'Eryn',
        'Esmeralda',
        'Esperanza',
        'Esta',
        'Esteban',
        'Estefania',
        'Estel',
        'Estell',
        'Estella',
        'Estelle',
        'Estevan',
        'Esther',
        'Estrella',
        'Etha',
        'Ethan',
        'Ethel',
        'Ethelyn',
        'Ethyl',
        'Ettie',
        'Eudora',
        'Eugene',
        'Eugenia',
        'Eula',
        'Eulah',
        'Eulalia',
        'Euna',
        'Eunice',
        'Eusebio',
        'Eva',
        'Evalyn',
        'Evan',
        'Evangeline',
        'Evans',
        'Eve',
        'Eveline',
        'Evelyn',
        'Everardo',
        'Everett',
        'Everette',
        'Evert',
        'Evie',
        'Ewald',
        'Ewell',
        'Ezekiel',
        'Ezequiel',
        'Ezra',
        'Fabian',
        'Fabiola',
        'Fae',
        'Fannie',
        'Fanny',
        'Fatima',
        'Faustino',
        'Fausto',
        'Favian',
        'Fay',
        'Faye',
        'Federico',
        'Felicia',
        'Felicita',
        'Felicity',
        'Felipa',
        'Felipe',
        'Felix',
        'Felton',
        'Fermin',
        'Fern',
        'Fernando',
        'Ferne',
        'Fidel',
        'Filiberto',
        'Filomena',
        'Finn',
        'Fiona',
        'Flavie',
        'Flavio',
        'Fleta',
        'Fletcher',
        'Flo',
        'Florence',
        'Florencio',
        'Florian',
        'Florida',
        'Florine',
        'Flossie',
        'Floy',
        'Floyd',
        'Ford',
        'Forest',
        'Forrest',
        'Foster',
        'Frances',
        'Francesca',
        'Francesco',
        'Francis',
        'Francisca',
        'Francisco',
        'Franco',
        'Frank',
        'Frankie',
        'Franz',
        'Fred',
        'Freda',
        'Freddie',
        'Freddy',
        'Frederic',
        'Frederick',
        'Frederik',
        'Frederique',
        'Fredrick',
        'Fredy',
        'Freeda',
        'Freeman',
        'Freida',
        'Frida',
        'Frieda',
        'Friedrich',
        'Fritz',
        'Furman',
        'Gabe',
        'Gabriel',
        'Gabriella',
        'Gabrielle',
        'Gaetano',
        'Gage',
        'Gail',
        'Gardner',
        'Garett',
        'Garfield',
        'Garland',
        'Garnet',
        'Garnett',
        'Garret',
        'Garrett',
        'Garrick',
        'Garrison',
        'Garry',
        'Garth',
        'Gaston',
        'Gavin',
        'Gay',
        'Gayle',
        'Gaylord',
        'Gene',
        'General',
        'Genesis',
        'Genevieve',
        'Gennaro',
        'Genoveva',
        'Geo',
        'Geoffrey',
        'George',
        'Georgette',
        'Georgiana',
        'Georgianna',
        'Geovanni',
        'Geovanny',
        'Geovany',
        'Gerald',
        'Geraldine',
        'Gerard',
        'Gerardo',
        'Gerda',
        'Gerhard',
        'Germaine',
        'German',
        'Gerry',
        'Gerson',
        'Gertrude',
        'Gia',
        'Gianni',
        'Gideon',
        'Gilbert',
        'Gilberto',
        'Gilda',
        'Giles',
        'Gillian',
        'Gina',
        'Gino',
        'Giovani',
        'Giovanna',
        'Giovanni',
        'Giovanny',
        'Gisselle',
        'Giuseppe',
        'Gladyce',
        'Gladys',
        'Glen',
        'Glenda',
        'Glenna',
        'Glennie',
        'Gloria',
        'Godfrey',
        'Golda',
        'Golden',
        'Gonzalo',
        'Gordon',
        'Grace',
        'Gracie',
        'Graciela',
        'Grady',
        'Graham',
        'Grant',
        'Granville',
        'Grayce',
        'Grayson',
        'Green',
        'Greg',
        'Gregg',
        'Gregoria',
        'Gregorio',
        'Gregory',
        'Greta',
        'Gretchen',
        'Greyson',
        'Griffin',
        'Grover',
        'Guadalupe',
        'Gudrun',
        'Guido',
        'Guillermo',
        'Guiseppe',
        'Gunnar',
        'Gunner',
        'Gus',
        'Gussie',
        'Gust',
        'Gustave',
        'Guy',
        'Gwen',
        'Gwendolyn',
        'Hadley',
        'Hailee',
        'Hailey',
        'Hailie',
        'Hal',
        'Haleigh',
        'Haley',
        'Halie',
        'Halle',
        'Hallie',
        'Hank',
        'Hanna',
        'Hannah',
        'Hans',
        'Hardy',
        'Harley',
        'Harmon',
        'Harmony',
        'Harold',
        'Harrison',
        'Harry',
        'Harvey',
        'Haskell',
        'Hassan',
        'Hassie',
        'Hattie',
        'Haven',
        'Hayden',
        'Haylee',
        'Hayley',
        'Haylie',
        'Hazel',
        'Hazle',
        'Heath',
        'Heather',
        'Heaven',
        'Heber',
        'Hector',
        'Heidi',
        'Helen',
        'Helena',
        'Helene',
        'Helga',
        'Hellen',
        'Helmer',
        'Heloise',
        'Henderson',
        'Henri',
        'Henriette',
        'Henry',
        'Herbert',
        'Herman',
        'Hermann',
        'Hermina',
        'Herminia',
        'Herminio',
        'Hershel',
        'Herta',
        'Hertha',
        'Hester',
        'Hettie',
        'Hilario',
        'Hilbert',
        'Hilda',
        'Hildegard',
        'Hillard',
        'Hillary',
        'Hilma',
        'Hilton',
        'Hipolito',
        'Hiram',
        'Hobart',
        'Holden',
        'Hollie',
        'Hollis',
        'Holly',
        'Hope',
        'Horace',
        'Horacio',
        'Hortense',
        'Hosea',
        'Houston',
        'Howard',
        'Howell',
        'Hoyt',
        'Hubert',
        'Hudson',
        'Hugh',
        'Hulda',
        'Humberto',
        'Hunter',
        'Hyman',
        'Ian',
        'Ibrahim',
        'Icie',
        'Ida',
        'Idell',
        'Idella',
        'Ignacio',
        'Ignatius',
        'Ike',
        'Ila',
        'Ilene',
        'Iliana',
        'Ima',
        'Imani',
        'Imelda',
        'Immanuel',
        'Imogene',
        'Ines',
        'Irma',
        'Irving',
        'Irwin',
        'Isaac',
        'Isabel',
        'Isabell',
        'Isabella',
        'Isabelle',
        'Isac',
        'Isadore',
        'Isai',
        'Isaiah',
        'Isaias',
        'Isidro',
        'Ismael',
        'Isobel',
        'Isom',
        'Israel',
        'Issac',
        'Itzel',
        'Iva',
        'Ivah',
        'Ivory',
        'Ivy',
        'Izabella',
        'Izaiah',
        'Jabari',
        'Jace',
        'Jacey',
        'Jacinthe',
        'Jacinto',
        'Jack',
        'Jackeline',
        'Jackie',
        'Jacklyn',
        'Jackson',
        'Jacky',
        'Jaclyn',
        'Jacquelyn',
        'Jacques',
        'Jacynthe',
        'Jada',
        'Jade',
        'Jaden',
        'Jadon',
        'Jadyn',
        'Jaeden',
        'Jaida',
        'Jaiden',
        'Jailyn',
        'Jaime',
        'Jairo',
        'Jakayla',
        'Jake',
        'Jakob',
        'Jaleel',
        'Jalen',
        'Jalon',
        'Jalyn',
        'Jamaal',
        'Jamal',
        'Jamar',
        'Jamarcus',
        'Jamel',
        'Jameson',
        'Jamey',
        'Jamie',
        'Jamil',
        'Jamir',
        'Jamison',
        'Jammie',
        'Jan',
        'Jana',
        'Janae',
        'Jane',
        'Janelle',
        'Janessa',
        'Janet',
        'Janice',
        'Janick',
        'Janie',
        'Janis',
        'Janiya',
        'Jannie',
        'Jany',
        'Jaquan',
        'Jaquelin',
        'Jaqueline',
        'Jared',
        'Jaren',
        'Jarod',
        'Jaron',
        'Jarred',
        'Jarrell',
        'Jarret',
        'Jarrett',
        'Jarrod',
        'Jarvis',
        'Jasen',
        'Jasmin',
        'Jason',
        'Jasper',
        'Jaunita',
        'Javier',
        'Javon',
        'Javonte',
        'Jay',
        'Jayce',
        'Jaycee',
        'Jayda',
        'Jayde',
        'Jayden',
        'Jaydon',
        'Jaylan',
        'Jaylen',
        'Jaylin',
        'Jaylon',
        'Jayme',
        'Jayne',
        'Jayson',
        'Jazlyn',
        'Jazmin',
        'Jazmyn',
        'Jazmyne',
        'Jean',
        'Jeanette',
        'Jeanie',
        'Jeanne',
        'Jed',
        'Jedediah',
        'Jedidiah',
        'Jeff',
        'Jefferey',
        'Jeffery',
        'Jeffrey',
        'Jeffry',
        'Jena',
        'Jenifer',
        'Jennie',
        'Jennifer',
        'Jennings',
        'Jennyfer',
        'Jensen',
        'Jerad',
        'Jerald',
        'Jeramie',
        'Jeramy',
        'Jerel',
        'Jeremie',
        'Jeremy',
        'Jermain',
        'Jermaine',
        'Jermey',
        'Jerod',
        'Jerome',
        'Jeromy',
        'Jerrell',
        'Jerrod',
        'Jerrold',
        'Jerry',
        'Jess',
        'Jesse',
        'Jessica',
        'Jessie',
        'Jessika',
        'Jessy',
        'Jessyca',
        'Jesus',
        'Jett',
        'Jettie',
        'Jevon',
        'Jewel',
        'Jewell',
        'Jillian',
        'Jimmie',
        'Jimmy',
        'Jo',
        'Joan',
        'Joana',
        'Joanie',
        'Joanne',
        'Joannie',
        'Joanny',
        'Joany',
        'Joaquin',
        'Jocelyn',
        'Jodie',
        'Jody',
        'Joe',
        'Joel',
        'Joelle',
        'Joesph',
        'Joey',
        'Johan',
        'Johann',
        'Johanna',
        'Johathan',
        'John',
        'Johnathan',
        'Johnathon',
        'Johnnie',
        'Johnny',
        'Johnpaul',
        'Johnson',
        'Jolie',
        'Jon',
        'Jonas',
        'Jonatan',
        'Jonathan',
        'Jonathon',
        'Jordan',
        'Jordane',
        'Jordi',
        'Jordon',
        'Jordy',
        'Jordyn',
        'Jorge',
        'Jose',
        'Josefa',
        'Josefina',
        'Joseph',
        'Josephine',
        'Josh',
        'Joshua',
        'Joshuah',
        'Josiah',
        'Josiane',
        'Josianne',
        'Josie',
        'Josue',
        'Jovan',
        'Jovani',
        'Jovanny',
        'Jovany',
        'Joy',
        'Joyce',
        'Juana',
        'Juanita',
        'Judah',
        'Judd',
        'Jude',
        'Judge',
        'Judson',
        'Judy',
        'Jules',
        'Julia',
        'Julian',
        'Juliana',
        'Julianne',
        'Julie',
        'Julien',
        'Juliet',
        'Julio',
        'Julius',
        'June',
        'Junior',
        'Junius',
        'Justen',
        'Justice',
        'Justina',
        'Justine',
        'Juston',
        'Justus',
        'Justyn',
        'Juvenal',
        'Juwan',
        'Kacey',
        'Kaci',
        'Kacie',
        'Kade',
        'Kaden',
        'Kadin',
        'Kaela',
        'Kaelyn',
        'Kaia',
        'Kailee',
        'Kailey',
        'Kailyn',
        'Kaitlin',
        'Kaitlyn',
        'Kale',
        'Kaleb',
        'Kaleigh',
        'Kaley',
        'Kali',
        'Kallie',
        'Kameron',
        'Kamille',
        'Kamren',
        'Kamron',
        'Kamryn',
        'Kane',
        'Kara',
        'Kareem',
        'Karelle',
        'Karen',
        'Kari',
        'Kariane',
        'Karianne',
        'Karina',
        'Karine',
        'Karl',
        'Karlee',
        'Karley',
        'Karli',
        'Karlie',
        'Karolann',
        'Karson',
        'Kasandra',
        'Kasey',
        'Kassandra',
        'Katarina',
        'Katelin',
        'Katelyn',
        'Katelynn',
        'Katharina',
        'Katherine',
        'Katheryn',
        'Kathleen',
        'Kathlyn',
        'Kathryn',
        'Kathryne',
        'Katlyn',
        'Katlynn',
        'Katrina',
        'Katrine',
        'Kattie',
        'Kavon',
        'Kay',
        'Kaya',
        'Kaycee',
        'Kayden',
        'Kayla',
        'Kaylah',
        'Kaylee',
        'Kayleigh',
        'Kayley',
        'Kayli',
        'Kaylie',
        'Kaylin',
        'Keagan',
        'Keanu',
        'Keara',
        'Keaton',
        'Keegan',
        'Keeley',
        'Keely',
        'Keenan',
        'Keira',
        'Keith',
        'Kellen',
        'Kelley',
        'Kelli',
        'Kellie',
        'Kelly',
        'Kelsi',
        'Kelsie',
        'Kelton',
        'Kelvin',
        'Ken',
        'Kendall',
        'Kendra',
        'Kendrick',
        'Kenna',
        'Kennedi',
        'Kennedy',
        'Kenneth',
        'Kennith',
        'Kenny',
        'Kenton',
        'Kenya',
        'Kenyatta',
        'Kenyon',
        'Keon',
        'Keshaun',
        'Keshawn',
        'Keven',
        'Kevin',
        'Kevon',
        'Keyon',
        'Keyshawn',
        'Khalid',
        'Khalil',
        'Kian',
        'Kiana',
        'Kianna',
        'Kiara',
        'Kiarra',
        'Kiel',
        'Kiera',
        'Kieran',
        'Kiley',
        'Kim',
        'Kimberly',
        'King',
        'Kip',
        'Kira',
        'Kirk',
        'Kirsten',
        'Kirstin',
        'Kitty',
        'Kobe',
        'Koby',
        'Kody',
        'Kolby',
        'Kole',
        'Korbin',
        'Korey',
        'Kory',
        'Kraig',
        'Kris',
        'Krista',
        'Kristian',
        'Kristin',
        'Kristina',
        'Kristofer',
        'Kristoffer',
        'Kristopher',
        'Kristy',
        'Krystal',
        'Krystel',
        'Krystina',
        'Kurt',
        'Kurtis',
        'Kyla',
        'Kyle',
        'Kylee',
        'Kyleigh',
        'Kyler',
        'Kylie',
        'Kyra',
        'Lacey',
        'Lacy',
        'Ladarius',
        'Lafayette',
        'Laila',
        'Laisha',
        'Lamar',
        'Lambert',
        'Lamont',
        'Lance',
        'Landen',
        'Lane',
        'Laney',
        'Larissa',
        'Laron',
        'Larry',
        'Larue',
        'Laura',
        'Laurel',
        'Lauren',
        'Laurence',
        'Lauretta',
        'Lauriane',
        'Laurianne',
        'Laurie',
        'Laurine',
        'Laury',
        'Lauryn',
        'Lavada',
        'Lavern',
        'Laverna',
        'Laverne',
        'Lavina',
        'Lavinia',
        'Lavon',
        'Lavonne',
        'Lawrence',
        'Lawson',
        'Layla',
        'Layne',
        'Lazaro',
        'Lea',
        'Leann',
        'Leanna',
        'Leanne',
        'Leatha',
        'Leda',
        'Lee',
        'Leif',
        'Leila',
        'Leilani',
        'Lela',
        'Lelah',
        'Leland',
        'Lelia',
        'Lempi',
        'Lemuel',
        'Lenna',
        'Lennie',
        'Lenny',
        'Lenora',
        'Lenore',
        'Leo',
        'Leola',
        'Leon',
        'Leonard',
        'Leonardo',
        'Leone',
        'Leonel',
        'Leonie',
        'Leonor',
        'Leonora',
        'Leopold',
        'Leopoldo',
        'Leora',
        'Lera',
        'Lesley',
        'Leslie',
        'Lesly',
        'Lessie',
        'Lester',
        'Leta',
        'Letha',
        'Letitia',
        'Levi',
        'Lew',
        'Lewis',
        'Lexi',
        'Lexie',
        'Lexus',
        'Lia',
        'Liam',
        'Liana',
        'Libbie',
        'Libby',
        'Lila',
        'Lilian',
        'Liliana',
        'Liliane',
        'Lilla',
        'Lillian',
        'Lilliana',
        'Lillie',
        'Lilly',
        'Lily',
        'Lilyan',
        'Lina',
        'Lincoln',
        'Linda',
        'Lindsay',
        'Lindsey',
        'Linnea',
        'Linnie',
        'Linwood',
        'Lionel',
        'Lisa',
        'Lisandro',
        'Lisette',
        'Litzy',
        'Liza',
        'Lizeth',
        'Lizzie',
        'Llewellyn',
        'Lloyd',
        'Logan',
        'Lois',
        'Lola',
        'Lolita',
        'Loma',
        'Lon',
        'London',
        'Lonie',
        'Lonnie',
        'Lonny',
        'Lonzo',
        'Lora',
        'Loraine',
        'Loren',
        'Lorena',
        'Lorenz',
        'Lorenza',
        'Lorenzo',
        'Lori',
        'Lorine',
        'Lorna',
        'Lottie',
        'Lou',
        'Louie',
        'Louisa',
        'Lourdes',
        'Louvenia',
        'Lowell',
        'Loy',
        'Loyal',
        'Loyce',
        'Lucas',
        'Luciano',
        'Lucie',
        'Lucienne',
        'Lucile',
        'Lucinda',
        'Lucio',
        'Lucious',
        'Lucius',
        'Lucy',
        'Ludie',
        'Ludwig',
        'Lue',
        'Luella',
        'Luigi',
        'Luis',
        'Luisa',
        'Lukas',
        'Lula',
        'Lulu',
        'Luna',
        'Lupe',
        'Lura',
        'Lurline',
        'Luther',
        'Luz',
        'Lyda',
        'Lydia',
        'Lyla',
        'Lynn',
        'Lyric',
        'Lysanne',
        'Mabel',
        'Mabelle',
        'Mable',
        'Mac',
        'Macey',
        'Maci',
        'Macie',
        'Mack',
        'Mackenzie',
        'Macy',
        'Madaline',
        'Madalyn',
        'Maddison',
        'Madeline',
        'Madelyn',
        'Madelynn',
        'Madge',
        'Madie',
        'Madilyn',
        'Madisen',
        'Madison',
        'Madisyn',
        'Madonna',
        'Madyson',
        'Mae',
        'Maegan',
        'Maeve',
        'Mafalda',
        'Magali',
        'Magdalen',
        'Magdalena',
        'Maggie',
        'Magnolia',
        'Magnus',
        'Maia',
        'Maida',
        'Maiya',
        'Major',
        'Makayla',
        'Makenna',
        'Makenzie',
        'Malachi',
        'Malcolm',
        'Malika',
        'Malinda',
        'Mallie',
        'Mallory',
        'Malvina',
        'Mandy',
        'Manley',
        'Manuel',
        'Manuela',
        'Mara',
        'Marc',
        'Marcel',
        'Marcelina',
        'Marcelino',
        'Marcella',
        'Marcelle',
        'Marcellus',
        'Marcelo',
        'Marcia',
        'Marco',
        'Marcos',
        'Marcus',
        'Margaret',
        'Margarete',
        'Margarett',
        'Margaretta',
        'Margarette',
        'Margarita',
        'Marge',
        'Margie',
        'Margot',
        'Margret',
        'Marguerite',
        'Maria',
        'Mariah',
        'Mariam',
        'Marian',
        'Mariana',
        'Mariane',
        'Marianna',
        'Marianne',
        'Mariano',
        'Maribel',
        'Marie',
        'Mariela',
        'Marielle',
        'Marietta',
        'Marilie',
        'Marilou',
        'Marilyne',
        'Marina',
        'Mario',
        'Marion',
        'Marisa',
        'Marisol',
        'Maritza',
        'Marjolaine',
        'Marjorie',
        'Marjory',
        'Mark',
        'Markus',
        'Marlee',
        'Marlen',
        'Marlene',
        'Marley',
        'Marlin',
        'Marlon',
        'Marques',
        'Marquis',
        'Marquise',
        'Marshall',
        'Marta',
        'Martin',
        'Martina',
        'Martine',
        'Marty',
        'Marvin',
        'Mary',
        'Maryam',
        'Maryjane',
        'Maryse',
        'Mason',
        'Mateo',
        'Mathew',
        'Mathias',
        'Mathilde',
        'Matilda',
        'Matilde',
        'Matt',
        'Matteo',
        'Mattie',
        'Maud',
        'Maude',
        'Maudie',
        'Maureen',
        'Maurice',
        'Mauricio',
        'Maurine',
        'Maverick',
        'Mavis',
        'Max',
        'Maxie',
        'Maxime',
        'Maximilian',
        'Maximillia',
        'Maximillian',
        'Maximo',
        'Maximus',
        'Maxine',
        'Maxwell',
        'May',
        'Maya',
        'Maybell',
        'Maybelle',
        'Maye',
        'Maymie',
        'Maynard',
        'Mayra',
        'Mazie',
        'Mckayla',
        'Mckenna',
        'Mckenzie',
        'Meagan',
        'Meaghan',
        'Meda',
        'Megane',
        'Meggie',
        'Meghan',
        'Mekhi',
        'Melany',
        'Melba',
        'Melisa',
        'Melissa',
        'Mellie',
        'Melody',
        'Melvin',
        'Melvina',
        'Melyna',
        'Melyssa',
        'Mercedes',
        'Meredith',
        'Merl',
        'Merle',
        'Merlin',
        'Merritt',
        'Mertie',
        'Mervin',
        'Meta',
        'Mia',
        'Micaela',
        'Micah',
        'Michael',
        'Michaela',
        'Michale',
        'Micheal',
        'Michel',
        'Michele',
        'Michelle',
        'Miguel',
        'Mikayla',
        'Mike',
        'Mikel',
        'Milan',
        'Miles',
        'Milford',
        'Miller',
        'Millie',
        'Milo',
        'Milton',
        'Mina',
        'Minerva',
        'Minnie',
        'Miracle',
        'Mireille',
        'Mireya',
        'Misael',
        'Missouri',
        'Misty',
        'Mitchel',
        'Mitchell',
        'Mittie',
        'Modesta',
        'Modesto',
        'Mohamed',
        'Mohammad',
        'Mohammed',
        'Moises',
        'Mollie',
        'Molly',
        'Mona',
        'Monica',
        'Monique',
        'Monroe',
        'Monserrat',
        'Monserrate',
        'Montana',
        'Monte',
        'Monty',
        'Morgan',
        'Moriah',
        'Morris',
        'Mortimer',
        'Morton',
        'Mose',
        'Moses',
        'Moshe',
        'Mossie',
        'Mozell',
        'Mozelle',
        'Muhammad',
        'Muriel',
        'Murl',
        'Murphy',
        'Murray',
        'Mustafa',
        'Mya',
        'Myah',
        'Mylene',
        'Myles',
        'Myra',
        'Myriam',
        'Myrl',
        'Myrna',
        'Myron',
        'Myrtice',
        'Myrtie',
        'Myrtis',
        'Myrtle',
        'Nadia',
        'Nakia',
        'Name',
        'Nannie',
        'Naomi',
        'Naomie',
        'Napoleon',
        'Narciso',
        'Nash',
        'Nasir',
        'Nat',
        'Natalia',
        'Natalie',
        'Natasha',
        'Nathan',
        'Nathanael',
        'Nathanial',
        'Nathaniel',
        'Nathen',
        'Nayeli',
        'Neal',
        'Ned',
        'Nedra',
        'Neha',
        'Neil',
        'Nelda',
        'Nella',
        'Nelle',
        'Nellie',
        'Nels',
        'Nelson',
        'Neoma',
        'Nestor',
        'Nettie',
        'Neva',
        'Newell',
        'Newton',
        'Nia',
        'Nicholas',
        'Nicholaus',
        'Nichole',
        'Nick',
        'Nicklaus',
        'Nickolas',
        'Nico',
        'Nicola',
        'Nicolas',
        'Nicole',
        'Nicolette',
        'Nigel',
        'Nikita',
        'Nikki',
        'Nikko',
        'Niko',
        'Nikolas',
        'Nils',
        'Nina',
        'Noah',
        'Noble',
        'Noe',
        'Noel',
        'Noelia',
        'Noemi',
        'Noemie',
        'Noemy',
        'Nola',
        'Nolan',
        'Nona',
        'Nora',
        'Norbert',
        'Norberto',
        'Norene',
        'Norma',
        'Norris',
        'Norval',
        'Norwood',
        'Nova',
        'Novella',
        'Nya',
        'Nyah',
        'Nyasia',
        'Obie',
        'Oceane',
        'Ocie',
        'Octavia',
        'Oda',
        'Odell',
        'Odessa',
        'Odie',
        'Ofelia',
        'Okey',
        'Ola',
        'Olaf',
        'Ole',
        'Olen',
        'Oleta',
        'Olga',
        'Olin',
        'Oliver',
        'Ollie',
        'Oma',
        'Omari',
        'Omer',
        'Ona',
        'Onie',
        'Opal',
        'Ophelia',
        'Ora',
        'Oral',
        'Oran',
        'Oren',
        'Orie',
        'Orin',
        'Orion',
        'Orland',
        'Orlando',
        'Orlo',
        'Orpha',
        'Orrin',
        'Orval',
        'Orville',
        'Osbaldo',
        'Osborne',
        'Oscar',
        'Osvaldo',
        'Oswald',
        'Oswaldo',
        'Otha',
        'Otho',
        'Otilia',
        'Otis',
        'Ottilie',
        'Ottis',
        'Otto',
        'Ova',
        'Owen',
        'Ozella',
        'Pablo',
        'Paige',
        'Palma',
        'Pamela',
        'Pansy',
        'Paolo',
        'Paris',
        'Parker',
        'Pascale',
        'Pasquale',
        'Pat',
        'Patience',
        'Patricia',
        'Patrick',
        'Patsy',
        'Pattie',
        'Paul',
        'Paula',
        'Pauline',
        'Paxton',
        'Payton',
        'Pearl',
        'Pearlie',
        'Pearline',
        'Pedro',
        'Peggie',
        'Penelope',
        'Percival',
        'Percy',
        'Perry',
        'Pete',
        'Peter',
        'Petra',
        'Peyton',
        'Philip',
        'Phoebe',
        'Phyllis',
        'Pierce',
        'Pierre',
        'Pietro',
        'Pink',
        'Pinkie',
        'Piper',
        'Polly',
        'Porter',
        'Precious',
        'Presley',
        'Preston',
        'Price',
        'Prince',
        'Princess',
        'Priscilla',
        'Providenci',
        'Prudence',
        'Queen',
        'Queenie',
        'Quentin',
        'Quincy',
        'Quinn',
        'Quinten',
        'Quinton',
        'Rachael',
        'Rachel',
        'Rachelle',
        'Rae',
        'Raegan',
        'Rafael',
        'Rafaela',
        'Raheem',
        'Rahsaan',
        'Rahul',
        'Raina',
        'Raleigh',
        'Ralph',
        'Ramiro',
        'Ramon',
        'Ramona',
        'Randal',
        'Randall',
        'Randi',
        'Randy',
        'Ransom',
        'Raoul',
        'Raphael',
        'Raphaelle',
        'Raquel',
        'Rashad',
        'Rashawn',
        'Rasheed',
        'Raul',
        'Raven',
        'Ray',
        'Raymond',
        'Raymundo',
        'Reagan',
        'Reanna',
        'Reba',
        'Rebeca',
        'Rebecca',
        'Rebeka',
        'Rebekah',
        'Reece',
        'Reed',
        'Reese',
        'Regan',
        'Reggie',
        'Reginald',
        'Reid',
        'Reilly',
        'Reina',
        'Reinhold',
        'Remington',
        'Rene',
        'Renee',
        'Ressie',
        'Reta',
        'Retha',
        'Retta',
        'Reuben',
        'Reva',
        'Rex',
        'Rey',
        'Reyes',
        'Reymundo',
        'Reyna',
        'Reynold',
        'Rhea',
        'Rhett',
        'Rhianna',
        'Rhiannon',
        'Rhoda',
        'Ricardo',
        'Richard',
        'Richie',
        'Richmond',
        'Rick',
        'Rickey',
        'Rickie',
        'Ricky',
        'Rico',
        'Rigoberto',
        'Riley',
        'Rita',
        'River',
        'Robb',
        'Robbie',
        'Robert',
        'Roberta',
        'Roberto',
        'Robin',
        'Robyn',
        'Rocio',
        'Rocky',
        'Rod',
        'Roderick',
        'Rodger',
        'Rodolfo',
        'Rodrick',
        'Rodrigo',
        'Roel',
        'Rogelio',
        'Roger',
        'Rogers',
        'Rolando',
        'Rollin',
        'Roma',
        'Romaine',
        'Roman',
        'Ron',
        'Ronaldo',
        'Ronny',
        'Roosevelt',
        'Rory',
        'Rosa',
        'Rosalee',
        'Rosalia',
        'Rosalind',
        'Rosalinda',
        'Rosalyn',
        'Rosamond',
        'Rosanna',
        'Rosario',
        'Roscoe',
        'Rose',
        'Rosella',
        'Roselyn',
        'Rosemarie',
        'Rosemary',
        'Rosendo',
        'Rosetta',
        'Rosie',
        'Rosina',
        'Roslyn',
        'Ross',
        'Rossie',
        'Rowan',
        'Rowena',
        'Rowland',
        'Roxane',
        'Roxanne',
        'Roy',
        'Royal',
        'Royce',
        'Rozella',
        'Ruben',
        'Rubie',
        'Ruby',
        'Rubye',
        'Rudolph',
        'Rudy',
        'Rupert',
        'Russ',
        'Russel',
        'Russell',
        'Rusty',
        'Ruth',
        'Ruthe',
        'Ruthie',
        'Ryan',
        'Ryann',
        'Ryder',
        'Rylan',
        'Rylee',
        'Ryleigh',
        'Ryley',
        'Sabina',
        'Sabrina',
        'Sabryna',
        'Sadie',
        'Sadye',
        'Sage',
        'Saige',
        'Sallie',
        'Sally',
        'Salma',
        'Salvador',
        'Salvatore',
        'Sam',
        'Samanta',
        'Samantha',
        'Samara',
        'Samir',
        'Sammie',
        'Sammy',
        'Samson',
        'Sandra',
        'Sandrine',
        'Sandy',
        'Sanford',
        'Santa',
        'Santiago',
        'Santina',
        'Santino',
        'Santos',
        'Sarah',
        'Sarai',
        'Sarina',
        'Sasha',
        'Saul',
        'Savanah',
        'Savanna',
        'Savannah',
        'Savion',
        'Scarlett',
        'Schuyler',
        'Scot',
        'Scottie',
        'Scotty',
        'Seamus',
        'Sean',
        'Sebastian',
        'Sedrick',
        'Selena',
        'Selina',
        'Selmer',
        'Serena',
        'Serenity',
        'Seth',
        'Shad',
        'Shaina',
        'Shakira',
        'Shana',
        'Shane',
        'Shanel',
        'Shanelle',
        'Shania',
        'Shanie',
        'Shaniya',
        'Shanna',
        'Shannon',
        'Shanny',
        'Shanon',
        'Shany',
        'Sharon',
        'Shaun',
        'Shawn',
        'Shawna',
        'Shaylee',
        'Shayna',
        'Shayne',
        'Shea',
        'Sheila',
        'Sheldon',
        'Shemar',
        'Sheridan',
        'Sherman',
        'Sherwood',
        'Shirley',
        'Shyann',
        'Shyanne',
        'Sibyl',
        'Sid',
        'Sidney',
        'Sienna',
        'Sierra',
        'Sigmund',
        'Sigrid',
        'Sigurd',
        'Silas',
        'Sim',
        'Simeon',
        'Simone',
        'Sincere',
        'Sister',
        'Skye',
        'Skyla',
        'Skylar',
        'Sofia',
        'Soledad',
        'Solon',
        'Sonia',
        'Sonny',
        'Sonya',
        'Sophia',
        'Sophie',
        'Spencer',
        'Stacey',
        'Stacy',
        'Stan',
        'Stanford',
        'Stanley',
        'Stanton',
        'Stefan',
        'Stefanie',
        'Stella',
        'Stephan',
        'Stephania',
        'Stephanie',
        'Stephany',
        'Stephen',
        'Stephon',
        'Sterling',
        'Steve',
        'Stevie',
        'Stewart',
        'Stone',
        'Stuart',
        'Summer',
        'Sunny',
        'Susan',
        'Susana',
        'Susanna',
        'Susie',
        'Suzanne',
        'Sven',
        'Syble',
        'Sydnee',
        'Sydney',
        'Sydni',
        'Sydnie',
        'Sylvan',
        'Sylvester',
        'Sylvia',
        'Tabitha',
        'Tad',
        'Talia',
        'Talon',
        'Tamara',
        'Tamia',
        'Tania',
        'Tanner',
        'Tanya',
        'Tara',
        'Taryn',
        'Tate',
        'Tatum',
        'Tatyana',
        'Taurean',
        'Tavares',
        'Taya',
        'Taylor',
        'Teagan',
        'Ted',
        'Telly',
        'Terence',
        'Teresa',
        'Terrance',
        'Terrell',
        'Terrence',
        'Terrill',
        'Terry',
        'Tess',
        'Tessie',
        'Tevin',
        'Thad',
        'Thaddeus',
        'Thalia',
        'Thea',
        'Thelma',
        'Theo',
        'Theodora',
        'Theodore',
        'Theresa',
        'Therese',
        'Theresia',
        'Theron',
        'Thomas',
        'Thora',
        'Thurman',
        'Tia',
        'Tiana',
        'Tianna',
        'Tiara',
        'Tierra',
        'Tiffany',
        'Tillman',
        'Timmothy',
        'Timmy',
        'Timothy',
        'Tina',
        'Tito',
        'Titus',
        'Tobin',
        'Toby',
        'Tod',
        'Tom',
        'Tomas',
        'Tomasa',
        'Tommie',
        'Toney',
        'Toni',
        'Tony',
        'Torey',
        'Torrance',
        'Torrey',
        'Toy',
        'Trace',
        'Tracey',
        'Tracy',
        'Travis',
        'Travon',
        'Tre',
        'Tremaine',
        'Tremayne',
        'Trent',
        'Trenton',
        'Tressa',
        'Tressie',
        'Treva',
        'Trever',
        'Trevion',
        'Trevor',
        'Trey',
        'Trinity',
        'Trisha',
        'Tristian',
        'Tristin',
        'Triston',
        'Troy',
        'Trudie',
        'Trycia',
        'Trystan',
        'Turner',
        'Twila',
        'Tyler',
        'Tyra',
        'Tyree',
        'Tyreek',
        'Tyrel',
        'Tyrell',
        'Tyrese',
        'Tyrique',
        'Tyshawn',
        'Tyson',
        'Ubaldo',
        'Ulices',
        'Ulises',
        'Una',
        'Unique',
        'Urban',
        'Uriah',
        'Uriel',
        'Ursula',
        'Vada',
        'Valentin',
        'Valentina',
        'Valentine',
        'Valerie',
        'Vallie',
        'Van',
        'Vance',
        'Vanessa',
        'Vaughn',
        'Veda',
        'Velda',
        'Vella',
        'Velma',
        'Velva',
        'Vena',
        'Verda',
        'Verdie',
        'Vergie',
        'Verla',
        'Verlie',
        'Vern',
        'Verna',
        'Verner',
        'Vernice',
        'Vernie',
        'Vernon',
        'Verona',
        'Veronica',
        'Vesta',
        'Vicenta',
        'Vicente',
        'Vickie',
        'Vicky',
        'Victor',
        'Victoria',
        'Vida',
        'Vidal',
        'Vilma',
        'Vince',
        'Vincent',
        'Vincenza',
        'Vincenzo',
        'Vinnie',
        'Viola',
        'Violet',
        'Violette',
        'Virgie',
        'Virgil',
        'Virginia',
        'Virginie',
        'Vita',
        'Vito',
        'Viva',
        'Vivian',
        'Viviane',
        'Vivianne',
        'Vivien',
        'Vivienne',
        'Vladimir',
        'Wade',
        'Waino',
        'Waldo',
        'Walker',
        'Wallace',
        'Walter',
        'Walton',
        'Wanda',
        'Ward',
        'Warren',
        'Watson',
        'Wava',
        'Waylon',
        'Wayne',
        'Webster',
        'Weldon',
        'Wellington',
        'Wendell',
        'Wendy',
        'Werner',
        'Westley',
        'Weston',
        'Whitney',
        'Wilber',
        'Wilbert',
        'Wilburn',
        'Wiley',
        'Wilford',
        'Wilfred',
        'Wilfredo',
        'Wilfrid',
        'Wilhelm',
        'Wilhelmine',
        'Will',
        'Willa',
        'Willard',
        'William',
        'Willie',
        'Willis',
        'Willow',
        'Willy',
        'Wilma',
        'Wilmer',
        'Wilson',
        'Wilton',
        'Winfield',
        'Winifred',
        'Winnifred',
        'Winona',
        'Winston',
        'Woodrow',
        'Wyatt',
        'Wyman',
        'Xander',
        'Xavier',
        'Xzavier',
        'Yadira',
        'Yasmeen',
        'Yasmin',
        'Yasmine',
        'Yazmin',
        'Yesenia',
        'Yessenia',
        'Yolanda',
        'Yoshiko',
        'Yvette',
        'Yvonne',
        'Zachariah',
        'Zachary',
        'Zachery',
        'Zack',
        'Zackary',
        'Zackery',
        'Zakary',
        'Zander',
        'Zane',
        'Zaria',
        'Zechariah',
        'Zelda',
        'Zella',
        'Zelma',
        'Zena',
        'Zetta',
        'Zion',
        'Zita',
        'Zoe',
        'Zoey',
        'Zoie',
        'Zoila',
        'Zola',
        'Zora',
        'Zula'
    ],
    last_names: [
        'Abbott',
        'Abernathy',
        'Abshire',
        'Adams',
        'Altenwerth',
        'Anderson',
        'Ankunding',
        'Armstrong',
        'Auer',
        'Aufderhar',
        'Bahringer',
        'Bailey',
        'Balistreri',
        'Barrows',
        'Bartell',
        'Bartoletti',
        'Barton',
        'Bashirian',
        'Batz',
        'Bauch',
        'Baumbach',
        'Bayer',
        'Beahan',
        'Beatty',
        'Bechtelar',
        'Becker',
        'Bednar',
        'Beer',
        'Beier',
        'Berge',
        'Bergnaum',
        'Bergstrom',
        'Bernhard',
        'Bernier',
        'Bins',
        'Blanda',
        'Blick',
        'Block',
        'Bode',
        'Boehm',
        'Bogan',
        'Bogisich',
        'Borer',
        'Bosco',
        'Botsford',
        'Boyer',
        'Boyle',
        'Bradtke',
        'Brakus',
        'Braun',
        'Breitenberg',
        'Brekke',
        'Brown',
        'Bruen',
        'Buckridge',
        'Carroll',
        'Carter',
        'Cartwright',
        'Casper',
        'Cassin',
        'Champlin',
        'Christiansen',
        'Cole',
        'Collier',
        'Collins',
        'Conn',
        'Connelly',
        'Conroy',
        'Considine',
        'Corkery',
        'Cormier',
        'Corwin',
        'Cremin',
        'Crist',
        'Crona',
        'Cronin',
        'Crooks',
        'Cruickshank',
        'Cummerata',
        'Cummings',
        'Dach',
        'Daniel',
        'Dare',
        'Daugherty',
        'Davis',
        'Deckow',
        'Denesik',
        'Dibbert',
        'Dickens',
        'Dicki',
        'Dickinson',
        'Dietrich',
        'Donnelly',
        'Dooley',
        'Douglas',
        'Doyle',
        'DuBuque',
        'Durgan',
        'Ebert',
        'Effertz',
        'Eichmann',
        'Emard',
        'Emmerich',
        'Erdman',
        'Ernser',
        'Fadel',
        'Fahey',
        'Farrell',
        'Fay',
        'Feeney',
        'Feest',
        'Feil',
        'Ferry',
        'Fisher',
        'Flatley',
        'Frami',
        'Franecki',
        'Friesen',
        'Fritsch',
        'Funk',
        'Gaylord',
        'Gerhold',
        'Gerlach',
        'Gibson',
        'Gislason',
        'Gleason',
        'Gleichner',
        'Glover',
        'Goldner',
        'Goodwin',
        'Gorczany',
        'Gottlieb',
        'Goyette',
        'Grady',
        'Graham',
        'Grant',
        'Green',
        'Greenfelder',
        'Greenholt',
        'Grimes',
        'Gulgowski',
        'Gusikowski',
        'Gutkowski',
        'Gutmann',
        'Haag',
        'Hackett',
        'Hagenes',
        'Hahn',
        'Haley',
        'Halvorson',
        'Hamill',
        'Hammes',
        'Hand',
        'Hane',
        'Hansen',
        'Harber',
        'Harris',
        'Hartmann',
        'Harvey',
        'Hauck',
        'Hayes',
        'Heaney',
        'Heathcote',
        'Hegmann',
        'Heidenreich',
        'Heller',
        'Herman',
        'Hermann',
        'Hermiston',
        'Herzog',
        'Hessel',
        'Hettinger',
        'Hickle',
        'Hilll',
        'Hills',
        'Hilpert',
        'Hintz',
        'Hirthe',
        'Hodkiewicz',
        'Hoeger',
        'Homenick',
        'Hoppe',
        'Howe',
        'Howell',
        'Hudson',
        'Huel',
        'Huels',
        'Hyatt',
        'Jacobi',
        'Jacobs',
        'Jacobson',
        'Jakubowski',
        'Jaskolski',
        'Jast',
        'Jenkins',
        'Jerde',
        'Jewess',
        'Johns',
        'Johnson',
        'Johnston',
        'Jones',
        'Kassulke',
        'Kautzer',
        'Keebler',
        'Keeling',
        'Kemmer',
        'Kerluke',
        'Kertzmann',
        'Kessler',
        'Kiehn',
        'Kihn',
        'Kilback',
        'King',
        'Kirlin',
        'Klein',
        'Kling',
        'Klocko',
        'Koch',
        'Koelpin',
        'Koepp',
        'Kohler',
        'Konopelski',
        'Koss',
        'Kovacek',
        'Kozey',
        'Krajcik',
        'Kreiger',
        'Kris',
        'Kshlerin',
        'Kub',
        'Kuhic',
        'Kuhlman',
        'Kuhn',
        'Kulas',
        'Kunde',
        'Kunze',
        'Kuphal',
        'Kutch',
        'Kuvalis',
        'Labadie',
        'Lakin',
        'Lang',
        'Langosh',
        'Langworth',
        'Larkin',
        'Larson',
        'Leannon',
        'Lebsack',
        'Ledner',
        'Leffler',
        'Legros',
        'Lehner',
        'Lemke',
        'Lesch',
        'Leuschke',
        'Lind',
        'Lindgren',
        'Littel',
        'Little',
        'Lockman',
        'Lowe',
        'Lubowitz',
        'Lueilwitz',
        'Luettgen',
        'Lynch',
        'Macejkovic',
        'Maggio',
        'Mann',
        'Mante',
        'Marks',
        'Marquardt',
        'Marvin',
        'Mayer',
        'Mayert',
        'McClure',
        'McCullough',
        'McDermott',
        'McGlynn',
        'McKenzie',
        'McLaughlin',
        'Medhurst',
        'Mertz',
        'Metz',
        'Miller',
        'Mills',
        'Mitchell',
        'Moen',
        'Mohr',
        'Monahan',
        'Moore',
        'Morar',
        'Morissette',
        'Mosciski',
        'Mraz',
        'Mueller',
        'Muller',
        'Murazik',
        'Murphy',
        'Murray',
        'Nader',
        'Nicolas',
        'Nienow',
        'Nikolaus',
        'Nitzsche',
        'Nolan',
        'Oberbrunner',
        'Okuneva',
        'Olson',
        'Ondricka',
        'Orn',
        'Ortiz',
        'Osinski',
        'Pacocha',
        'Padberg',
        'Pagac',
        'Parisian',
        'Parker',
        'Paucek',
        'Pfannerstill',
        'Pfeffer',
        'Pollich',
        'Pouros',
        'Powlowski',
        'Predovic',
        'Price',
        'Prohaska',
        'Prosacco',
        'Purdy',
        'Quigley',
        'Quitzon',
        'Rath',
        'Ratke',
        'Rau',
        'Raynor',
        'Reichel',
        'Reichert',
        'Reilly',
        'Reinger',
        'Rempel',
        'Renner',
        'Reynolds',
        'Rice',
        'Rippin',
        'Ritchie',
        'Robel',
        'Roberts',
        'Rodriguez',
        'Rogahn',
        'Rohan',
        'Rolfson',
        'Romaguera',
        'Roob',
        'Rosenbaum',
        'Rowe',
        'Ruecker',
        'Runolfsdottir',
        'Runolfsson',
        'Runte',
        'Russel',
        'Rutherford',
        'Ryan',
        'Sanford',
        'Satterfield',
        'Sauer',
        'Sawayn',
        'Schaden',
        'Schaefer',
        'Schamberger',
        'Schiller',
        'Schimmel',
        'Schinner',
        'Schmeler',
        'Schmidt',
        'Schmitt',
        'Schneider',
        'Schoen',
        'Schowalter',
        'Schroeder',
        'Schulist',
        'Schultz',
        'Schumm',
        'Schuppe',
        'Schuster',
        'Senger',
        'Shanahan',
        'Shields',
        'Simonis',
        'Sipes',
        'Skiles',
        'Smith',
        'Smitham',
        'Spencer',
        'Spinka',
        'Sporer',
        'Stamm',
        'Stanton',
        'Stark',
        'Stehr',
        'Steuber',
        'Stiedemann',
        'Stokes',
        'Stoltenberg',
        'Stracke',
        'Streich',
        'Stroman',
        'Strosin',
        'Swaniawski',
        'Swift',
        'Terry',
        'Thiel',
        'Thompson',
        'Tillman',
        'Torp',
        'Torphy',
        'Towne',
        'Toy',
        'Trantow',
        'Tremblay',
        'Treutel',
        'Tromp',
        'Turcotte',
        'Turner',
        'Ullrich',
        'Upton',
        'Vandervort',
        'Veum',
        'Volkman',
        'Von',
        'VonRueden',
        'Waelchi',
        'Walker',
        'Walsh',
        'Walter',
        'Ward',
        'Waters',
        'Watsica',
        'Weber',
        'Wehner',
        'Weimann',
        'Weissnat',
        'Welch',
        'West',
        'White',
        'Wiegand',
        'Wilderman',
        'Wilkinson',
        'Will',
        'Williamson',
        'Willms',
        'Windler',
        'Wintheiser',
        'Wisoky',
        'Wisozk',
        'Witting',
        'Wiza',
        'Wolf',
        'Wolff',
        'Wuckert',
        'Wunsch',
        'Wyman',
        'Yost',
        'Yundt',
        'Zboncak',
        'Zemlak',
        'Ziemann',
        'Zieme',
        'Zulauf'
    ],
    username_formats: [
        '{{last_name}}.{{first_name}}',
        '{{first_name}}.{{last_name}}',
        '{{first_name}}_{{last_name}}',
        '{{last_name}}_{{first_name}}'
    ],
    name_formats: [
        '{{name_prefix}} {{full_name}}'
    ],
    full_name_formats: [
        '{{first_name}} {{last_name}}'
    ],
    company_name_formats: [
        '{{last_name}} {{company_suffix}}'
    ],
    name: function() {
        return this.populate_one_of(this.name_formats);
    },
    username: function() {
        return this.populate_one_of(this.username_formats);
    },
    full_name: function() {
        return this.populate_one_of(this.full_name_formats);
    },
    first_name: function() {
        return this.random_element(this.first_names);
    },
    last_name: function() {
        return this.random_element(this.last_names);
    },
    password: function() {
        return this.numerify('#' + this.first_name + '##');
    },
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    },
    name_prefix: function() {
        return this.random_element(this.prefix);
    },
    name_suffix: function() {
        return this.random_element(this.suffix);
    },
    company_suffix: function() {
        return this.random_element(this.company_suffixes);
    },
    company_name: function() {
        return this.populate_one_of(this.company_name_formats);
    },
    catch_phrase: function() {
        var result = [];
        for(var i in this.catch_phrase_words)result.push(this.random_element(this.catch_phrase_words[i]));
        return result.join(' ');
    }
};
module.exports = provider;

},{}],"6LZb4":[function(require,module,exports) {
var first_letter_up = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
var provider = {
    words_list: [
        'alias',
        'consequatur',
        'aut',
        'perferendis',
        'sit',
        'voluptatem',
        'accusantium',
        'doloremque',
        'aperiam',
        'eaque',
        'ipsa',
        'quae',
        'ab',
        'illo',
        'inventore',
        'veritatis',
        'et',
        'quasi',
        'architecto',
        'beatae',
        'vitae',
        'dicta',
        'sunt',
        'explicabo',
        'aspernatur',
        'aut',
        'odit',
        'aut',
        'fugit',
        'sed',
        'quia',
        'consequuntur',
        'magni',
        'dolores',
        'eos',
        'qui',
        'ratione',
        'voluptatem',
        'sequi',
        'nesciunt',
        'neque',
        'dolorem',
        'ipsum',
        'quia',
        'dolor',
        'sit',
        'amet',
        'consectetur',
        'adipisci',
        'velit',
        'sed',
        'quia',
        'non',
        'numquam',
        'eius',
        'modi',
        'tempora',
        'incidunt',
        'ut',
        'labore',
        'et',
        'dolore',
        'magnam',
        'aliquam',
        'quaerat',
        'voluptatem',
        'ut',
        'enim',
        'ad',
        'minima',
        'veniam',
        'quis',
        'nostrum',
        'exercitationem',
        'ullam',
        'corporis',
        'nemo',
        'enim',
        'ipsam',
        'voluptatem',
        'quia',
        'voluptas',
        'sit',
        'suscipit',
        'laboriosam',
        'nisi',
        'ut',
        'aliquid',
        'ex',
        'ea',
        'commodi',
        'consequatur',
        'quis',
        'autem',
        'vel',
        'eum',
        'iure',
        'reprehenderit',
        'qui',
        'in',
        'ea',
        'voluptate',
        'velit',
        'esse',
        'quam',
        'nihil',
        'molestiae',
        'et',
        'iusto',
        'odio',
        'dignissimos',
        'ducimus',
        'qui',
        'blanditiis',
        'praesentium',
        'laudantium',
        'totam',
        'rem',
        'voluptatum',
        'deleniti',
        'atque',
        'corrupti',
        'quos',
        'dolores',
        'et',
        'quas',
        'molestias',
        'excepturi',
        'sint',
        'occaecati',
        'cupiditate',
        'non',
        'provident',
        'sed',
        'ut',
        'perspiciatis',
        'unde',
        'omnis',
        'iste',
        'natus',
        'error',
        'similique',
        'sunt',
        'in',
        'culpa',
        'qui',
        'officia',
        'deserunt',
        'mollitia',
        'animi',
        'id',
        'est',
        'laborum',
        'et',
        'dolorum',
        'fuga',
        'et',
        'harum',
        'quidem',
        'rerum',
        'facilis',
        'est',
        'et',
        'expedita',
        'distinctio',
        'nam',
        'libero',
        'tempore',
        'cum',
        'soluta',
        'nobis',
        'est',
        'eligendi',
        'optio',
        'cumque',
        'nihil',
        'impedit',
        'quo',
        'porro',
        'quisquam',
        'est',
        'qui',
        'minus',
        'id',
        'quod',
        'maxime',
        'placeat',
        'facere',
        'possimus',
        'omnis',
        'voluptas',
        'assumenda',
        'est',
        'omnis',
        'dolor',
        'repellendus',
        'temporibus',
        'autem',
        'quibusdam',
        'et',
        'aut',
        'consequatur',
        'vel',
        'illum',
        'qui',
        'dolorem',
        'eum',
        'fugiat',
        'quo',
        'voluptas',
        'nulla',
        'pariatur',
        'at',
        'vero',
        'eos',
        'et',
        'accusamus',
        'officiis',
        'debitis',
        'aut',
        'rerum',
        'necessitatibus',
        'saepe',
        'eveniet',
        'ut',
        'et',
        'voluptates',
        'repudiandae',
        'sint',
        'et',
        'molestiae',
        'non',
        'recusandae',
        'itaque',
        'earum',
        'rerum',
        'hic',
        'tenetur',
        'a',
        'sapiente',
        'delectus',
        'ut',
        'aut',
        'reiciendis',
        'voluptatibus',
        'maiores',
        'doloribus',
        'asperiores',
        'repellat'
    ],
    letters: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
    phonetics: [
        'Alfa',
        'Bravo',
        'Charlie',
        'Delta',
        'Echo',
        'Foxtrot',
        'Golf',
        'Hotel',
        'India',
        'Juliett',
        'Kilo',
        'Lima',
        'Mike',
        'November',
        'Oscar',
        'Papa',
        'Quebec',
        'Romeo',
        'Sierra',
        'Tango',
        'Uniform',
        'Victor',
        'Whiskey',
        'X-ray',
        'Yankee',
        'Zulu'
    ],
    title: function() {
        return first_letter_up(this.words(this.integer(2, 3)));
    },
    sentence: function() {
        return first_letter_up(this.words(this.integer(3, 10))) + '.';
    },
    text: function() {
        return this.sentences(this.integer(3, 6));
    },
    description: function() {
        return this.sentences(this.integer(2, 5));
    },
    short_description: function() {
        return this.sentence;
    },
    string: function() {
        return this.words();
    },
    sentences: function(n) {
        n = n || 3;
        var result = [];
        for(var i = 0; i < n; ++i)result.push(this.sentence);
        return result.join(' ');
    },
    word: function() {
        return this.random_element(this.words_list);
    },
    words: function(n) {
        return this.array_of_words(n).join(' ');
    },
    array_of_words: function(n) {
        n = n || 7;
        var result = [];
        for(var i = 0; i < n; ++i)result.push(this.word);
        return result;
    },
    letter: function() {
        return this.random_element(this.letters);
    },
    letter_phonetic: function() {
        return this.random_element(this.phonetics);
    }
};
module.exports = provider;

},{}],"9w0I1":[function(require,module,exports) {
var provider = {
    cities: [
        'حماه',
        'الموصل',
        'دمشق',
        'الرباط',
        'بيروت',
        'الرياض',
        'الكويت',
        'المنامة',
        ''
    ],
    countries: [
        'سوريا',
        'العراق',
        'اليمن',
        'الجزائر',
        'السعودية',
        'سلطنة عمان',
        'الأردن',
        'النمسا',
        'السويد',
        'ألمانيا',
        'موازمبيق',
        'الكويت',
        'الإمارات',
        'الولايات المتحدة',
        'المكسيك',
        'هاواي',
        'المغرب',
        'تونس',
        'ليبيا',
        'مصر',
        'فلسطين',
        'الأرجنتين',
        'البرازيل',
        'كولومبيا',
        'روسيا',
        'تركيا',
        'النرويج'
    ],
    zip_formats: [
        '#####',
        '#####-####'
    ],
    building_number_formats: [
        '##',
        '###',
        '####'
    ],
    street_formats: [
        'شارع {{first_name}} {{last_name}}',
        'شارع {{last_name}}'
    ],
    address1_formats: [
        '{{street}}، جانب {{address2}}',
        '{{street}}، جانب {{address2}}، بناء رقم {{building_number}}', 
    ],
    address2_formats: [
        'موقف {{last_name}}',
        'بقالية {{first_name}}',
        'صيدلية {{first_name}}'
    ],
    address_formats: [
        '{{city}}، {{address1}}'
    ],
    country: function() {
        return this.random_element(this.countries);
    },
    city: function() {
        return this.random_element(this.cities);
    },
    zip: function(digits) {
        if (digits === 5) return this.numerify(this.zip_formats[0]);
        else if (digits === 9) return this.numerify(this.zip_formats[1]);
        else return this.numerify(this.random_element(this.zip_formats));
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    address: function() {
        return this.populate_one_of(this.address_formats);
    },
    address1: function() {
        return this.populate_one_of(this.address1_formats);
    },
    address2: function() {
        return this.populate_one_of(this.address2_formats);
    },
    latitude: function() {
        return (this.integer(1800000) / 10000 - 90).toFixed(4);
    },
    longitude: function() {
        return (this.integer(3600000) / 10000 - 180).toFixed(4);
    },
    building_number: function() {
        return this.numerify(this.random_element(this.building_number_formats));
    }
};
module.exports = provider;

},{}],"2Ku8o":[function(require,module,exports) {
var provider = {
    safe_color_names: [
        'أسود',
        'أحمر',
        'أخضر',
        'نيلي',
        'زيتوني',
        'بنفسجي',
        'زيتي',
        'ليموني',
        'أزرق',
        'فضي',
        'رمادي',
        'أصفر',
        'فوشي',
        'تركواز',
        'أبيض'
    ],
    color_names: [
        'أسود',
        'أحمر',
        'أخضر',
        'نيلي',
        'زيتوني',
        'بنفسجي',
        'زيتي',
        'ليموني',
        'أزرق',
        'فضي',
        'رمادي',
        'أصفر',
        'فوشي',
        'تركواز',
        'أبيض'
    ],
    color_name: function() {
        return this.random_element(this.color_names);
    },
    safe_color_name: function() {
        return this.random_element(this.safe_color_names);
    },
    rgb_hex: function() {
        return '#' + this.integer(0, 16777216).toString(16);
    },
    rgb_array: function() {
        return [
            this.integer(0, 255),
            this.integer(0, 255),
            this.integer(0, 255)
        ];
    }
};
module.exports = provider;

},{}],"fNjtQ":[function(require,module,exports) {
var moment = require('moment');
moment.locale('ar');
var provider = {
    centuries: [
        'الأول',
        'الثاني',
        'الثالث',
        'الرابع',
        'الخامس',
        'السادس',
        'السابع',
        'الثامن',
        'التاسع',
        'العاشر',
        'الحادي عشر',
        'الثاني عشر',
        'الثالث عشر',
        'الرابع عشر',
        'الخامس عشر',
        'السادس عشر',
        'السابع عشر',
        'الثامن عشر',
        'التاسع عشر',
        'العشرون',
        'الواحد والعشرون'
    ],
    timezones: [
        'Europe/Andorra',
        'Asia/Dubai',
        'Asia/Kabul',
        'America/Antigua',
        'America/Anguilla',
        'Europe/Tirane',
        'Asia/Yerevan',
        'Africa/Luanda',
        'Antarctica/McMurdo',
        'Antarctica/South_Pole',
        'Antarctica/Rothera',
        'Antarctica/Palmer',
        'Antarctica/Mawson',
        'Antarctica/Davis',
        'Antarctica/Casey',
        'Antarctica/Vostok',
        'Antarctica/DumontDUrville',
        'Antarctica/Syowa',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Cordoba',
        'America/Argentina/Salta',
        'America/Argentina/Jujuy',
        'America/Argentina/Tucuman',
        'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja',
        'America/Argentina/San_Juan',
        'America/Argentina/Mendoza',
        'America/Argentina/San_Luis',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Ushuaia',
        'Pacific/Pago_Pago',
        'Europe/Vienna',
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
        'America/Aruba',
        'Europe/Mariehamn',
        'Asia/Baku',
        'Europe/Sarajevo',
        'America/Barbados',
        'Asia/Dhaka',
        'Europe/Brussels',
        'Africa/Ouagadougou',
        'Europe/Sofia',
        'Asia/Bahrain',
        'Africa/Bujumbura',
        'Africa/Porto-Novo',
        'America/St_Barthelemy',
        'Atlantic/Bermuda',
        'Asia/Brunei',
        'America/La_Paz',
        'America/Kralendijk',
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco',
        'America/Nassau',
        'Asia/Thimphu',
        'Africa/Gaborone',
        'Europe/Minsk',
        'America/Belize',
        'America/St_Johns',
        'America/Halifax',
        'America/Glace_Bay',
        'America/Moncton',
        'America/Goose_Bay',
        'America/Blanc-Sablon',
        'America/Montreal',
        'America/Toronto',
        'America/Nipigon',
        'America/Thunder_Bay',
        'America/Iqaluit',
        'America/Pangnirtung',
        'America/Resolute',
        'America/Atikokan',
        'America/Rankin_Inlet',
        'America/Winnipeg',
        'America/Rainy_River',
        'America/Regina',
        'America/Swift_Current',
        'America/Edmonton',
        'America/Cambridge_Bay',
        'America/Yellowknife',
        'America/Inuvik',
        'America/Creston',
        'America/Dawson_Creek',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Dawson',
        'Indian/Cocos',
        'Africa/Kinshasa',
        'Africa/Lubumbashi',
        'Africa/Bangui',
        'Africa/Brazzaville',
        'Europe/Zurich',
        'Africa/Abidjan',
        'Pacific/Rarotonga',
        'America/Santiago',
        'Pacific/Easter',
        'Africa/Douala',
        'Asia/Shanghai',
        'Asia/Harbin',
        'Asia/Chongqing',
        'Asia/Urumqi',
        'Asia/Kashgar',
        'America/Bogota',
        'America/Costa_Rica',
        'America/Havana',
        'Atlantic/Cape_Verde',
        'America/Curacao',
        'Indian/Christmas',
        'Asia/Nicosia',
        'Europe/Prague',
        'Europe/Berlin',
        'Europe/Busingen',
        'Africa/Djibouti',
        'Europe/Copenhagen',
        'America/Dominica',
        'America/Santo_Domingo',
        'Africa/Algiers',
        'America/Guayaquil',
        'Pacific/Galapagos',
        'Europe/Tallinn',
        'Africa/Cairo',
        'Africa/El_Aaiun',
        'Africa/Asmara',
        'Europe/Madrid',
        'Africa/Ceuta',
        'Atlantic/Canary',
        'Africa/Addis_Ababa',
        'Europe/Helsinki',
        'Pacific/Fiji',
        'Atlantic/Stanley',
        'Pacific/Chuuk',
        'Pacific/Pohnpei',
        'Pacific/Kosrae',
        'Atlantic/Faroe',
        'Europe/Paris',
        'Africa/Libreville',
        'Europe/London',
        'America/Grenada',
        'Asia/Tbilisi',
        'America/Cayenne',
        'Europe/Guernsey',
        'Africa/Accra',
        'Europe/Gibraltar',
        'America/Godthab',
        'America/Danmarkshavn',
        'America/Scoresbysund',
        'America/Thule',
        'Africa/Banjul',
        'Africa/Conakry',
        'America/Guadeloupe',
        'Africa/Malabo',
        'Europe/Athens',
        'Atlantic/South_Georgia',
        'America/Guatemala',
        'Pacific/Guam',
        'Africa/Bissau',
        'America/Guyana',
        'Asia/Hong_Kong',
        'America/Tegucigalpa',
        'Europe/Zagreb',
        'America/Port-au-Prince',
        'Europe/Budapest',
        'Asia/Jakarta',
        'Asia/Pontianak',
        'Asia/Makassar',
        'Asia/Jayapura',
        'Europe/Dublin',
        'Asia/Jerusalem',
        'Europe/Isle_of_Man',
        'Asia/Kolkata',
        'Indian/Chagos',
        'Asia/Baghdad',
        'Asia/Tehran',
        'Atlantic/Reykjavik',
        'Europe/Rome',
        'Europe/Jersey',
        'America/Jamaica',
        'Asia/Amman',
        'Asia/Tokyo',
        'Africa/Nairobi',
        'Asia/Bishkek',
        'Asia/Phnom_Penh',
        'Pacific/Tarawa',
        'Pacific/Enderbury',
        'Pacific/Kiritimati',
        'Indian/Comoro',
        'America/St_Kitts',
        'Asia/Pyongyang',
        'Asia/Seoul',
        'Asia/Kuwait',
        'America/Cayman',
        'Asia/Almaty',
        'Asia/Qyzylorda',
        'Asia/Aqtobe',
        'Asia/Aqtau',
        'Asia/Oral',
        'Asia/Vientiane',
        'Asia/Beirut',
        'America/St_Lucia',
        'Europe/Vaduz',
        'Asia/Colombo',
        'Africa/Monrovia',
        'Africa/Maseru',
        'Europe/Vilnius',
        'Europe/Luxembourg',
        'Europe/Riga',
        'Africa/Tripoli',
        'Africa/Casablanca',
        'Europe/Monaco',
        'Europe/Chisinau',
        'Europe/Podgorica',
        'America/Marigot',
        'Indian/Antananarivo',
        'Pacific/Majuro',
        'Pacific/Kwajalein',
        'Europe/Skopje',
        'Africa/Bamako',
        'Asia/Rangoon',
        'Asia/Ulaanbaatar',
        'Asia/Hovd',
        'Asia/Choibalsan',
        'Asia/Macau',
        'Pacific/Saipan',
        'America/Martinique',
        'Africa/Nouakchott',
        'America/Montserrat',
        'Europe/Malta',
        'Indian/Mauritius',
        'Indian/Maldives',
        'Africa/Blantyre',
        'America/Mexico_City',
        'America/Cancun',
        'America/Merida',
        'America/Monterrey',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Chihuahua',
        'America/Ojinaga',
        'America/Hermosillo',
        'America/Tijuana',
        'America/Santa_Isabel',
        'America/Bahia_Banderas',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Africa/Maputo',
        'Africa/Windhoek',
        'Pacific/Noumea',
        'Africa/Niamey',
        'Pacific/Norfolk',
        'Africa/Lagos',
        'America/Managua',
        'Europe/Amsterdam',
        'Europe/Oslo',
        'Asia/Kathmandu',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Auckland',
        'Pacific/Chatham',
        'Asia/Muscat',
        'America/Panama',
        'America/Lima',
        'Pacific/Tahiti',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'Pacific/Port_Moresby',
        'Asia/Manila',
        'Asia/Karachi',
        'Europe/Warsaw',
        'America/Miquelon',
        'Pacific/Pitcairn',
        'America/Puerto_Rico',
        'Asia/Gaza',
        'Asia/Hebron',
        'Europe/Lisbon',
        'Atlantic/Madeira',
        'Atlantic/Azores',
        'Pacific/Palau',
        'America/Asuncion',
        'Asia/Qatar',
        'Indian/Reunion',
        'Europe/Bucharest',
        'Europe/Belgrade',
        'Europe/Kaliningrad',
        'Europe/Moscow',
        'Europe/Volgograd',
        'Europe/Samara',
        'Asia/Yekaterinburg',
        'Asia/Omsk',
        'Asia/Novosibirsk',
        'Asia/Novokuznetsk',
        'Asia/Krasnoyarsk',
        'Asia/Irkutsk',
        'Asia/Yakutsk',
        'Asia/Khandyga',
        'Asia/Vladivostok',
        'Asia/Sakhalin',
        'Asia/Ust-Nera',
        'Asia/Magadan',
        'Asia/Kamchatka',
        'Asia/Anadyr',
        'Africa/Kigali',
        'Asia/Riyadh',
        'Pacific/Guadalcanal',
        'Indian/Mahe',
        'Africa/Khartoum',
        'Europe/Stockholm',
        'Asia/Singapore',
        'Atlantic/St_Helena',
        'Europe/Ljubljana',
        'Arctic/Longyearbyen',
        'Europe/Bratislava',
        'Africa/Freetown',
        'Europe/San_Marino',
        'Africa/Dakar',
        'Africa/Mogadishu',
        'America/Paramaribo',
        'Africa/Juba',
        'Africa/Sao_Tome',
        'America/El_Salvador',
        'America/Lower_Princes',
        'Asia/Damascus',
        'Africa/Mbabane',
        'America/Grand_Turk',
        'Africa/Ndjamena',
        'Indian/Kerguelen',
        'Africa/Lome',
        'Asia/Bangkok',
        'Asia/Dushanbe',
        'Pacific/Fakaofo',
        'Asia/Dili',
        'Asia/Ashgabat',
        'Africa/Tunis',
        'Pacific/Tongatapu',
        'Europe/Istanbul',
        'America/Port_of_Spain',
        'Pacific/Funafuti',
        'Asia/Taipei',
        'Africa/Dar_es_Salaam',
        'Europe/Kiev',
        'Europe/Uzhgorod',
        'Europe/Zaporozhye',
        'Europe/Simferopol',
        'Africa/Kampala',
        'Pacific/Johnston',
        'Pacific/Midway',
        'Pacific/Wake',
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Shiprock',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'America/Metlakatla',
        'Pacific/Honolulu',
        'America/Montevideo',
        'Asia/Samarkand',
        'Asia/Tashkent',
        'Europe/Vatican',
        'America/St_Vincent',
        'America/Caracas',
        'America/Tortola',
        'America/St_Thomas',
        'Asia/Ho_Chi_Minh',
        'Pacific/Efate',
        'Pacific/Wallis',
        'Pacific/Apia',
        'Asia/Aden',
        'Indian/Mayotte',
        'Africa/Johannesburg',
        'Africa/Lusaka',
        'Africa/Harare'
    ],
    unix_time: function() {
        return this.integer(0, moment().unix());
    },
    moment: function() {
        return moment.unix(this.unix_time);
    },
    date: function(format) {
        format = format || 'L';
        return this.moment.format(format);
    },
    time: function(format) {
        return this.moment.format(format);
    },
    century: function() {
        return this.random_element(this.centuries);
    },
    am_pm: function() {
        return this.random_element([
            'am',
            'pm'
        ]);
    },
    day_of_year: function() {
        return this.moment.dayOfYear();
    },
    day_of_month: function() {
        return this.moment.format('D');
    },
    day_of_week: function() {
        return this.moment.format('d');
    },
    month_number: function() {
        return this.moment.format('M');
    },
    month_name: function() {
        return this.moment.format('MMMM');
    },
    year: function() {
        return this.moment.format('YYYY');
    },
    timezone: function() {
        return this.random_element(this.timezones);
    }
};
module.exports = provider;

},{"moment":"jwcsj"}],"2knaR":[function(require,module,exports) {
var glues = [
    '.',
    '-',
    '_',
    null
];
var provider = {
    phone_formats: [
        '033-###-####',
        '011-###-####',
        '094#-###-###',
        '095#-###-###',
        '096#-###-###',
        '093#-###-###',
        '092#-###-###'
    ],
    prefix: [
        'السيد',
        'السيدة',
        'الآنسة',
        'د.',
        'الأستاذ',
        'الحاج',
        'الحاجة',
        'أم',
        'أبو'
    ],
    company_suffixes: [
        'المتحدة',
        'وأبناؤه',
        'محدودة المسؤولية',
        'المحدودة'
    ],
    catch_phrase_words: [
        [
            'موقع',
            'شركة',
            'مؤسسة',
            'خدمات'
        ],
        [
            'من نوع',
            'قائمة على مبدأ',
            'ذات هيكل',
            'مبني على أساس',
            'ذو'
        ],
        [
            'طيلة أيام الأسبوع',
            'فوري',
            'رائع',
            'سريع',
            'جذاب',
            'براق',
            'ممتاز',
            'لا غنى عنه'
        ]
    ],
    first_names: [
        "أبي",
        "أحمد",
        "أحنف",
        "أزهر",
        "أسامة",
        "أسد",
        "أسمر",
        "أشرف",
        "أكرم",
        "الأخضر",
        "المثنى",
        "النعمان",
        "الوليد",
        "إمام",
        "آمر",
        "أمية",
        "أمين",
        "أنصاري",
        "أنور",
        "أوس",
        "إياد",
        "إيثار",
        "أيسر",
        "أيمن",
        "إيناس",
        "إيهاب",
        "بادي",
        "باسل",
        "باشر",
        "باهر",
        "بجاد",
        "بدر",
        "بدري",
        "بدوي",
        "براء",
        "براق",
        "براك",
        "برعم",
        "برهان",
        "برهوم",
        "برئ",
        "بسام",
        "بسطام",
        "بسيم",
        "بشامة",
        "بشير",
        "بطل",
        "بكر",
        "بكري",
        "بلال",
        "بلبل",
        "بنداري",
        "بندر",
        "بهاء",
        "تامر",
        "تركي",
        "تمام",
        "تيجاني",
        "تيسير",
        "ثنيان",
        "ثواب",
        "جاسر",
        "جاسم",
        "جاهد",
        "جبير",
        "جحا",
        "جعيفر",
        "جعيل",
        "جلال",
        "جليل",
        "جمال",
        "جمعة",
        "جندل",
        "جواد",
        "جوهري",
        "حاتم",
        "حبشي",
        "حبيب",
        "حجاج",
        "حجازي",
        "حجي",
        "حداد",
        "حذيفه",
        "حسام",
        "حسان",
        "حسنين",
        "حسون",
        "حسيب",
        "حسين",
        "حفيظ",
        "حلمي",
        "حماد",
        "حمادة",
        "حمدان",
        "حمدي",
        "حمزة",
        "حمود",
        "حمودة",
        "حميدو",
        "حنبل",
        "حنظلة",
        "حنفي",
        "حيدر",
        "حيدرة",
        "خازم",
        "خالد",
        "خطاب",
        "خلدون",
        "خميس",
        "خويلد",
        "خيري",
        "داوود",
        "دريد",
        "رابح",
        "راشد",
        "ربيع",
        "رجاء",
        "رسول",
        "رشدي",
        "رضا",
        "رضوان",
        "رمضان",
        "رياض",
        "زاهد",
        "زايد",
        "زهران",
        "زياد",
        "ساري",
        "سالم",
        "سامر",
        "سامي",
        "سرحان",
        "سعد",
        "سلطان",
        "سمير",
        "سهيل",
        "شادي",
        "شكيب",
        "شهاب",
        "صابر",
        "صفوان",
        "صلاح",
        "صياح",
        "ضاحي",
        "ضرغام",
        "طارق",
        "طلال",
        "طه",
        "عادل",
        "عامر",
        "عايد",
        "عبد الإله",
        "عبد الحميد",
        "عبد الرحمن",
        "عبد الله",
        "عبد المعين",
        "عبيدة",
        "عثمان",
        "عدنان",
        "عروة",
        "عزيز",
        "علاء",
        "علي",
        "عمار",
        "غازي",
        "غسان",
        "غياث",
        "فادي",
        "فاروق",
        "فراس",
        "فهد",
        "فواز",
        "قتادة",
        "قتيبة",
        "قحطان",
        "قصي",
        "قيس",
        "كايد",
        "كمال",
        "كنعان",
        "لقمان",
        "لؤي",
        "ليث",
        "ماجد",
        "مازن",
        "مأمون",
        "محمد",
        "محمد نور",
        "مرهف",
        "مسعود",
        "مشاري",
        "مشعل",
        "مصطفى",
        "مصعب",
        "مطلق",
        "معاذ",
        "معاوية",
        "معتصم",
        "معز",
        "ممدوح",
        "مناف",
        "مهند",
        "مؤيد",
        "ناصر",
        "نايف",
        "نديم",
        "نذير",
        "نزار",
        "نعمان",
        "نواف",
        "نوفل",
        "هاني",
        "هزاع",
        "هشام",
        "هلال",
        "هواش",
        "هيثم",
        "وائل",
        "وسام",
        "وضاح",
        "وليد",
        "ياسر",
        "يامن",
        "ابتسام",
        "إبتهال",
        "أبية",
        "أرجوان",
        "أرواح",
        "أريج",
        "أريحا",
        "إسراء",
        "أسرار",
        "إسعاد",
        "أسلية",
        "إسمهان",
        "أسمى",
        "أسوة",
        "أسيل",
        "أسيمة",
        "أمة الله",
        "إشراق",
        "إشفاق",
        "أشواق",
        "أصالة",
        "أصيلة",
        "إفتكار",
        "أفراح",
        "أفكار",
        "أفنان",
        "ألحان",
        "ألطاف",
        "إلهام",
        "أليفة",
        "آمال",
        "أماني",
        "آمنة",
        "أمنية",
        "أميرة",
        "أمينة",
        "إناس",
        "إنتصار",
        "انجي",
        "إنصاف",
        "إنعام",
        "أنيسة",
        "آيات",
        "إيناس",
        "بارعة",
        "بتلاء",
        "بدوية",
        "بديعة",
        "براءة",
        "براح",
        "براعم",
        "برلنتي",
        "بريكة",
        "بريهان",
        "بريئة",
        "بشرى",
        "بصيرة",
        "بلبلة",
        "بنان",
        "بنانة",
        "بنفسج",
        "بهية",
        "بهيجة",
        "بوران",
        "بيان",
        "بيداء",
        "بيسان",
        "بيضاء",
        "بينة",
        "تحفة",
        "تحية",
        "تذكار",
        "تراث",
        "تركية",
        "تسامح",
        "تسبيح",
        "تسنيم",
        "تقاء",
        "تقوى",
        "تلال",
        "تماضر",
        "تهامة",
        "تهاني",
        "تهنيد",
        "توحيدة",
        "تودد",
        "توسل",
        "توفيقة",
        "تي",
        "تيجان",
        "تيماء",
        "ثابتة",
        "ثائرة",
        "ثراء",
        "ثناء",
        "جلاء",
        "جمانة",
        "جميلة",
        "جهام",
        "جهراء",
        "جورية",
        "جويرية",
        "جيهان",
        "حاكمة",
        "حبيبة",
        "حسناء",
        "حصة",
        "حلا",
        "حميدة",
        "حنان",
        "حوراء",
        "حياة",
        "خاتون",
        "ختام",
        "خديجة",
        "خلود",
        "خواطر",
        "خولة",
        "خيرية",
        "دانة",
        "دانية",
        "درية",
        "دعاء",
        "دعد",
        "دلال",
        "ديمة",
        "ذكرى",
        "راغدة",
        "رامه",
        "رامية",
        "رانية",
        "راوية",
        "ربى",
        "رحاب",
        "رزان",
        "رشا",
        "رضوى",
        "رفيف",
        "رقية",
        "رمزية",
        "رهام",
        "رهف",
        "روضة",
        "روعة",
        "رؤى",
        "ريم",
        "ريما",
        "زكية",
        "زمردة",
        "زينب",
        "سارة",
        "سالي",
        "سحر",
        "سلوى",
        "سماهر",
        "سمر",
        "سمية",
        "سناء",
        "سهى",
        "سهير",
        "شادية",
        "شذى",
        "شمائل",
        "شيماء",
        "صابرين",
        "صبا",
        "عاتكة",
        "عبلة",
        "عبير",
        "عزة",
        "عصمت",
        "عفاف",
        "علا",
        "عنود",
        "غادة",
        "غزل",
        "غيداء",
        "فاتن",
        "فاطمة",
        "فتحية",
        "فدوى",
        "فريال",
        "فهمية",
        "فوزية",
        "فيحاء",
        "كوثر",
        "لبنى",
        "لمى",
        "لؤلؤة",
        "ليلى",
        "ماجدة",
        "محاسن",
        "مرام",
        "مرح",
        "مروة",
        "مريم",
        "مزنة",
        "مسرة",
        "منال",
        "منى",
        "منيرة",
        "مها",
        "مي",
        "ميادة",
        "ميساء",
        "ميسون",
        "نابغة",
        "نادية",
        "نبيلة",
        "نجود",
        "ندى",
        "نرمين",
        "نشوى",
        "نغم",
        "نهى",
        "نوال",
        "نورا",
        "نوفة",
        "هالة",
        "هبة",
        "هدى",
        "هديل",
        "هلا",
        "هنادي",
        "هند",
        "هيفاء",
        "وداد",
        "وعد",
        "ولاء",
        "يمنى"
    ],
    last_names: [
        "أسعد",
        "الأحمد",
        "الأسعد",
        "البشير",
        "البكور",
        "الحداد",
        "الحسني",
        "الحسين",
        "الحسيني",
        "الحلبوني",
        "الحلبي",
        "الحمصي",
        "الحمود",
        "الحموي",
        "الروح",
        "السحار",
        "الشامي",
        "الشققي",
        "الصالح",
        "الطويل",
        "العمر",
        "القيسي",
        "المصري",
        "المنجد",
        "الموصلي",
        "النجار",
        "باذنجان",
        "بارودي",
        "بكور",
        "تركاوي",
        "حديد",
        "حسين",
        "حوراني",
        "خليل",
        "دياب",
        "ريس",
        "زكار",
        "شعار",
        "عبد الرؤوف",
        "عثمان",
        "عرابي",
        "عمر",
        "قصاب",
        "قطان",
        "لاذقاني",
        "مؤذن"
    ],
    username_formats: [
        '{{first_name}}.{{last_name}}',
        '{{first_name}}_{{last_name}}'
    ],
    name_formats: [
        '{{name_prefix}} {{full_name}}'
    ],
    full_name_formats: [
        '{{first_name}} {{last_name}}'
    ],
    company_name_formats: [
        '{{last_name}} {{company_suffix}}'
    ],
    name: function() {
        return this.populate_one_of(this.name_formats);
    },
    username: function() {
        return this.populate_one_of(this.username_formats);
    },
    full_name: function() {
        return this.populate_one_of(this.full_name_formats);
    },
    first_name: function() {
        return this.random_element(this.first_names);
    },
    last_name: function() {
        return this.random_element(this.last_names);
    },
    password: function() {
        return this.numerify('#' + this.first_name + '##');
    },
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    },
    name_prefix: function() {
        return this.random_element(this.prefix);
    },
    name_suffix: function() {
        return this.random_element(this.suffix);
    },
    company_suffix: function() {
        return this.random_element(this.company_suffixes);
    },
    company_name: function() {
        return this.populate_one_of(this.company_name_formats);
    },
    catch_phrase: function() {
        var result = [];
        for(var i in this.catch_phrase_words)result.push(this.random_element(this.catch_phrase_words[i]));
        return result.join(' ');
    }
};
module.exports = provider;

},{}],"8S4KY":[function(require,module,exports) {
var provider = {
    words_list: [
        "هذا",
        "النص",
        "هو",
        "مثال",
        "لنص",
        "يمكن",
        "أن",
        "يستبدل",
        "في",
        "نفس",
        "المساحة",
        "لقد",
        "تم",
        "توليد",
        "هذا",
        "النص",
        "من",
        "مولد",
        "النص",
        "العربى،",
        "حيث",
        "يمكنك",
        "أن",
        "تولد",
        "مثل",
        "هذا",
        "النص",
        "أو",
        "العديد",
        "من",
        "النصوص",
        "الأخرى",
        "إضافة",
        "إلى",
        "زيادة",
        "عدد",
        "الحروف",
        "التى",
        "يولدها",
        "التطبيق،",
        "إذا",
        "كنت",
        "تحتاج",
        "إلى",
        "عدد",
        "أكبر",
        "من",
        "الفقرات",
        "يتيح",
        "لك",
        "مولد",
        "النص",
        "العربى",
        "زيادة",
        "عدد",
        "الفقرات",
        "كما",
        "تريد،",
        "النص",
        "لن",
        "يبدو",
        "مقسما",
        "ولا",
        "يحوي",
        "أخطاء",
        "لغوية،",
        "مولد",
        "النص",
        "العربى",
        "مفيد",
        "لمصممي",
        "المواقع",
        "على",
        "وجه",
        "الخصوص،",
        "حيث",
        "يحتاج",
        "العميل",
        "فى",
        "كثير",
        "من",
        "الأحيان",
        "أن",
        "يطلع",
        "على",
        "صورة",
        "حقيقية",
        "لتصميم",
        "الموقع،",
        "ومن",
        "هنا",
        "وجب",
        "على",
        "المصمم",
        "أن",
        "يضع",
        "نصوصا",
        "مؤقتة",
        "على",
        "التصميم",
        "ليظهر",
        "للعميل",
        "الشكل",
        "كاملاً",
        "دور",
        "مولد",
        "النص",
        "العربى",
        "أن",
        "يوفر",
        "على",
        "المصمم",
        "عناء",
        "البحث",
        "عن",
        "نص",
        "بديل",
        "لا",
        "علاقة",
        "له",
        "بالموضوع",
        "الذى",
        "يتحدث",
        "عنه",
        "التصميم",
        "فيظهر",
        "بشكل",
        "لا",
        "يليق،",
        "هذا",
        "النص",
        "يمكن",
        "أن",
        "يتم",
        "تركيبه",
        "على",
        "أي",
        "تصميم",
        "دون",
        "مشكلة",
        "فلن",
        "يبدو",
        "وكأنه",
        "نص",
        "منسوخ",
        "غير",
        "منظم",
        "غير",
        "منسق",
        "أو",
        "حتى",
        "غير",
        "مفهوم",
        "لأنه",
        "مازال",
        "نصاً",
        "بديلاً",
        "ومؤقتاً"
    ],
    letters: 'ابتثجحخدذرزسشصضطظعغفقكلمنهويأءئؤ',
    title: function() {
        return this.words(this.integer(2, 3));
    },
    sentence: function() {
        return this.words(this.integer(3, 10)) + '.';
    },
    text: function() {
        return this.sentences(this.integer(3, 6));
    },
    description: function() {
        return this.sentences(this.integer(2, 5));
    },
    short_description: function() {
        return this.sentence;
    },
    string: function() {
        return this.words();
    },
    sentences: function(n) {
        n = n || 3;
        var result = [];
        for(var i = 0; i < n; ++i)result.push(this.sentence);
        return result.join(' ');
    },
    word: function() {
        return this.random_element(this.words_list);
    },
    words: function(n) {
        return this.array_of_words(n).join(' ');
    },
    array_of_words: function(n) {
        n = n || 7;
        var result = [];
        for(var i = 0; i < n; ++i)result.push(this.word);
        return result;
    },
    letter: function() {
        return this.random_element(this.letters);
    }
};
module.exports = provider;

},{}],"lJ0po":[function(require,module,exports) {
var provider = {
    states: [
        'Schleswig-Holstein',
        'Mecklenburg-Vorpommern',
        'Hamburg',
        'Bremen',
        'Niedersachsen',
        'Brandenburg',
        'Berlin',
        'Sachsen-Anhalt',
        'Sachsen',
        'Thüringen',
        'Hessen',
        'Rheinland-Pfalz',
        'Nordrhein-Westfalen',
        'Saarland',
        'Baden-Württemberg',
        'Bayern'
    ],
    // Abbreviations taken from each state's Wikipedia page
    state_abbrs: [
        'SH',
        'MV',
        'HH',
        'HB',
        'Nds.',
        'BB',
        'BER',
        'ST',
        'Sa.',
        'TH',
        'HE',
        'RLP',
        'NRW',
        'SL',
        'BW',
        'BY'
    ],
    // Parts for city names are extracted from the 200 biggest cities' names from https://de.wikipedia.org/wiki/Liste_der_Gro%C3%9F-_und_Mittelst%C3%A4dte_in_Deutschland
    city_prefixes: [
        'Neu',
        'Alt',
        'St.',
        'Sankt',
        'Groß',
        'Klein',
        'Ober',
        'Unter',
        'Nieder',
        'Bad'
    ],
    city_parts: [
        'Ham',
        'Mün',
        'Frank',
        'Düssel',
        'Stutt',
        'Dort',
        'Leip',
        'Nürn',
        'Duis',
        'Wupper',
        'Biele',
        'Karls',
        'Mann',
        'Augs',
        'Wies',
        'Gelsen',
        'Mönchen',
        'Braun',
        'Madge',
        'Kre',
        'Frei',
        'Lü',
        'Ober',
        'Er',
        'Ro',
        'Saar',
        'Mül',
        'Olden',
        'Sol',
        'Pots',
        'Lever',
        'Ludwigs',
        'Osna',
        'Heidel',
        'Darm',
        'Pader',
        'Regens',
        'Ingol',
        'Würz',
        'Wolfs',
        'Offen',
        'Heil',
        'Gött',
        'Reck',
        'Reut',
        'Kob',
        'Rem',
        'Bremer',
        'Cott',
        'Hildes',
        'Salz',
        'Kaisers',
        'Güters',
        'Iser',
        'Ludwigs',
        'Ha',
        'Zwick',
        'Rat',
        'Tüb',
        'Flens',
        'Norder',
        'Wilhelms',
        'Glad',
        'Delmen',
        'Trois',
        'Mar',
        'Arns',
        'Lüden',
        'Lüne',
        'Bay',
        'Bam',
        'Aschaffen',
        'Dins',
        'Lipp',
        'Lands',
        'Her',
        'Neubranden',
        'Greven',
        'Rosen',
        'Friedrichs',
        'Langen',
        'Greifs',
        'Göpp',
        'Eus',
        'Esch',
        'Meer',
        'Hatt',
        'Hom',
        'Schwein',
        'Wolfen',
        'Gummers',
        'Ravens',
        'Erft',
        'Cux',
        'Oeyn',
        'Franken'
    ],
    city_suffixes: [
        'burg',
        'stadt',
        'städt',
        'bach',
        'berg',
        'bergen',
        'beck',
        'hellen',
        'heim',
        'ing',
        'ingen',
        'hausen',
        'chen',
        'gart',
        'mund',
        'zig',
        'tal',
        'feld',
        'ruhe',
        'baden',
        'kirchen',
        'gladbach',
        'bach',
        'schweig',
        'furt',
        'stock',
        'brücken',
        'brück',
        'damm',
        'kusen',
        'hafen',
        'born',
        'bronn',
        'lenz',
        'scheid',
        'bus',
        'gitter',
        'lautern',
        'loh',
        'horst',
        'laken',
        'hut',
        'ford',
        'broich',
        'wald',
        'weiler',
        'busch',
        'lar',
        'lich',
        'lichen',
        'stein',
        'büttel',
        'hagen',
        'uflen',
        'stin',
        'litz'
    ],
    city_suffix_words: [
        'am Main',
        '(Main)',
        'an der Saale',
        '(Saale)',
        'im Breisgau',
        '(Breisgau)',
        'an der Ruhr',
        'a.d.R.',
        '(Ruhr)',
        'an der Donau',
        '(Donau)',
        'am Rhein',
        '(Rhein)',
        'am Neckar',
        '(Neckar)',
        'an der Havel',
        '(Havel)',
        'im Allgäu',
        '(Allgäu)',
        'an der Oder',
        '(Oder)',
        'im Rheinland',
        '(Rheinland)',
        'im Sauerland',
        '(Sauerland)',
        'an der Weinstraße',
        'vor der Höhe',
        'an der Ems',
        '(Ems)',
        'in der Pfalz',
        '(Pfalz)'
    ],
    street_suffixes: [
        'allee',
        'straße',
        'str.',
        'weg',
        'gasse',
        'aue',
        'platz',
        'park'
    ],
    // adapted from the most common street names taken from http://www.strassen-in-deutschland.de/die-haeufigsten-strassennamen-in-deutschland.html
    street_parts: [
        'Eichen',
        'Rosen',
        'Feld',
        'Blumen',
        'Mühlen',
        'Friedhof',
        'Erlen',
        'Tannen',
        'Mozart',
        'Brunnen',
        'Linden',
        'Bach',
        'Raiffeisen',
        'Rosen',
        'Drossel',
        'Kirch',
        'Lerchen',
        'Mühlen',
        'Tal',
        'Beethoven',
        'Industrie',
        'Mittel',
        'Post',
        'Meisen',
        'Garten',
        'Breslauer',
        'Flieder',
        'Lessing',
        'Wald',
        'Kirch',
        'Uhland',
        'Schloß',
        'Königsberger',
        'Birken',
        'Kirchplatz',
        'Fasanen',
        'Burg',
        'Kiefern',
        'Tulpen',
        'Danziger',
        'Bahnhof',
        'Neue',
        'Kastanien',
        'Park',
        'Winkel',
        'Marktplatz',
        'Schul',
        'Schützen',
        'Berliner',
        'Mühl',
        'Römer',
        'Grüner',
        'Kapellen',
        'Mittel',
        'Nelken',
        'Eschen',
        'Heide',
        'Fichten',
        'Stettiner',
        'Ulmen',
        'Schubert',
        'Wilhelm',
        'Sudeten',
        'Sonnen',
        'Friedrich',
        'Marien',
        'Anger',
        'Eichen',
        'Lärchen',
        'Eichendorff',
        'Brücken',
        'Hang',
        'Markt',
        'Ginster',
        'Friedhofs',
        'Kurze',
        'Nord',
        'Schwalben',
        'Lange',
        'Ahorn',
        'Flur',
        'Kolping',
        'Neuer',
        'Karl',
        'Stein',
        'Pappel',
        'Holunder',
        'Süd',
        'Akazien',
        'Buchen',
        'Kapellen',
        'Rathaus',
        'Kant',
        'Hoch',
        'Pestalozzi',
        'Mühl',
        'Tulpen',
        'Höhen',
        'Brunnen',
        'See',
        'Friedens',
        'Kreuz',
        'Quer',
        'Stein',
        'Weiden',
        'Sonnen',
        'Gutenberg',
        'Nelken',
        'Falken',
        'Pfarr',
        'Sand',
        'Astern',
        'Frieden',
        'Weinberg',
        'Zeppelin',
        'Dahlien',
        'Schlehen',
        'Grenz',
        'Franken',
        'Haydn',
        'Mörike',
        'Teich',
        'Kloster',
        'Graben',
        'Veilchen',
        'Lerchen',
        'Ost',
        'Siedlung',
        'Schwarzer',
        'Staren',
        'Siemens',
        'Fichten',
        'Wacholder',
        'Jäger',
        'Hölderlin',
        'Forst',
        'Markt',
        'Bismarck',
        'Ludwig',
        'Lilien',
        'Wiesengrund',
        'Tannen',
        'Hecken',
        'Berg',
        'Burg',
        'Leipziger',
        'Hohl',
        'Mühl',
        'Hohe',
        'Weiher',
        'Daimler',
        'Blumen',
        'Diesel',
        'West',
        'Ulmen',
        'Erlen',
        'Forst',
        'Rhein',
        'Rotdorn',
        'Lindenallee',
        'Luisen',
        'Finken',
        'Kirchen',
        'Kreuz',
        'Frühlings'
    ],
    countries: [
        'Afghanistan',
        'Ägypten',
        'Åland',
        'Albanien',
        'Algerien',
        'Amerikanische Jungferninseln',
        'Amerikanisch-Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarktika',
        'Antigua und Barbuda',
        'Äquatorialguinea',
        'Argentinien',
        'Armenien',
        'Aruba',
        'Aserbaidschan',
        'Äthiopien',
        'Australien',
        'Bahamas',
        'Bahrain',
        'Bangladesch',
        'Barbados',
        'Bassas da India',
        'Belarus',
        'Belgien',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivien',
        'Bosnien und Herzegowina',
        'Botsuana',
        'Bouvetinsel',
        'Brasilien',
        'Britische Jungferninseln',
        'Britisches Territorium im Indischen Ozean',
        'Brunei Darussalam',
        'Bulgarien',
        'Burkina Faso',
        'Burundi',
        'Chile',
        'China',
        'Clipperton',
        'Cookinseln',
        'Costa Rica',
        'Côte d\'Ivoire',
        'Dänemark',
        'Deutschland',
        'Dominica',
        'Dominikanische Republik',
        'Dschibuti',
        'Ecuador',
        'El Salvador',
        'Eritrea',
        'Estland',
        'Europa',
        'FalklandinselnF',
        'Färöer',
        'Fidschi',
        'Finnland',
        'Frankreich',
        'Frankreich (metropolitanes)',
        'Französische Süd- und Antarktisgebiete',
        'Französisch-Guayana',
        'Französisch-Polynesien',
        'Gabun',
        'Gambia',
        'Gazastreifen',
        'Georgien',
        'Ghana',
        'Gibraltar',
        'Glorieuses',
        'Grenada',
        'Griechenland',
        'Grönland',
        'Großbritannien',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard und McDonaldinseln',
        'Honduras',
        'Hongkong',
        'Indien',
        'Indonesien',
        'Insel Man',
        'Irak',
        'Iran',
        'Irland',
        'Island',
        'Israel',
        'Italien',
        'Jamaika',
        'Japan',
        'Jemen',
        'Jersey',
        'Jordanien',
        'Juan de Nova',
        'Kaimaninseln',
        'Kambodscha',
        'Kamerun',
        'Kanada',
        'Kap Verde',
        'Kasachstan',
        'Katar',
        'Kenia',
        'Kirgisistan',
        'Kiribati',
        'Kleinere Amerikanische Überseeinseln',
        'Kokosinseln (Keelinginseln)',
        'Kolumbien',
        'Komoren',
        'Kongo',
        'Kongo, Demokratische Republik',
        'Korea, Demokratische Volksrepublik',
        'Korea, Republik',
        'Kroatien',
        'Kuba',
        'Kuwait',
        'Laos',
        'Lesotho',
        'Lettland',
        'Libanon',
        'Liberia',
        'Libyen',
        'Liechtenstein',
        'Litauen',
        'Luxemburg',
        'Macau',
        'Madagaskar',
        'Malawi',
        'Malaysia',
        'Malediven',
        'Mali',
        'Malta',
        'Marokko',
        'Marshallinseln',
        'Martinique',
        'Mauretanien',
        'Mauritius',
        'Mayotte',
        'Mazedonien',
        'Mexiko',
        'Mikronesien',
        'Moldau',
        'Monaco',
        'Mongolei',
        'Montenegro',
        'Montserrat',
        'Mosambik',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Neukaledonien',
        'Neuseeland',
        'Nicaragua',
        'Niederlande',
        'Niederländische Antillen',
        'Niger',
        'Nigeria',
        'Niue',
        'Nördliche Marianen',
        'Norfolkinsel',
        'Norwegen',
        'Oman',
        'Österreich',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua-Neuguinea',
        'Paraguay',
        'Peru',
        'Philippinen',
        'Pitcairninseln',
        'Polen',
        'Portugal',
        'Puerto Rico',
        'Réunion',
        'Ruanda',
        'Rumänien',
        'Russische Föderation',
        'Saint-Martin',
        'Salomonen',
        'Sambia',
        'Samoa',
        'San Marino',
        'São Tomé und Príncipe',
        'Saudi-Arabien',
        'Schweden',
        'Schweiz',
        'Senegal',
        'Serbien',
        'Serbien und Montenegro',
        'Seychellen',
        'Sierra Leone',
        'Simbabwe',
        'Singapur',
        'Slowakei',
        'Slowenien',
        'Somalia',
        'Spanien',
        'Spitzbergen',
        'Sri Lanka',
        'St. Barthélemy',
        'St. Helena, Ascension und Tristan da Cunha',
        'St. Kitts und Nevis',
        'St. Lucia',
        'St. Pierre und Miquelon',
        'St. Vincent und die Grenadinen',
        'Südafrika',
        'Sudan',
        'Südgeorgien und die Südlichen Sandwichinseln',
        'Südsudan',
        'Suriname',
        'Swasiland',
        'Syrien',
        'Tadschikistan',
        'Taiwan',
        'Tansania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad und Tobago',
        'Tromelin',
        'Tschad',
        'Tschechische Republik',
        'Tunesien',
        'Türkei',
        'Turkmenistan',
        'Turks- und Caicosinseln',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'Ungarn',
        'Uruguay',
        'Usbekistan',
        'Vanuatu',
        'Vatikanstadt',
        'Venezuela',
        'Vereinigte Arabische Emirate',
        'Vereinigte Staaten',
        'Vietnam',
        'Wallis und FutunaWF',
        'Weihnachtsinsel',
        'Westjordanland',
        'Westsahara',
        'Zentralafrikanische Republik',
        'Zypern'
    ],
    city_formats: [
        '{{city_prefix}} {{city_part}}{{city_suffix}}',
        '{{city_part}}{{city_suffix}}',
        '{{city_part}}{{city_suffix}} {{city_suffix_word}}'
    ],
    // German ZIPs don't have more than one leading 0, so this could produce invalid ZIPs like 00123
    zip_formats: [
        '#####',
        'DE-#####'
    ],
    building_number_formats: [
        '#{{building_number_letter}}',
        '##{{building_number_letter}}',
        '###{{building_number_letter}}'
    ],
    // anything above 'h' is pretty uncommon
    building_number_letters: [
        '',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h'
    ],
    street_formats: [
        '{{street_part}}{{street_suffix}}',
        'Auf dem {{street_part}}weg',
        'An der {{street_part}}aue',
        'Obere {{street_part}}straße',
        'Kleine {{street_part}}gasse',
        'Alte {{street_part}}allee',
        'Am {{street_part}}park'
    ],
    address1_formats: [
        '{{street}} {{building_number}}',
        '{{street}} {{building_number}} ({{address2}})'
    ],
    address2_formats: [
        'EG',
        'EG links',
        'EG rechts',
        '#. OG',
        '#. OG links',
        '#. OG rechts'
    ],
    address_formats: [
        '{{address1}}\n{{zip}} {{city}}',
        '{{address1}}\n{{zip}} {{city}}\n{{state_abbr}}',
        '{{address1}}\n{{zip}} {{city}}\n{{state}}', 
    ],
    state: function() {
        return this.random_element(this.states);
    },
    state_abbr: function() {
        return this.random_element(this.state_abbrs);
    },
    street_part: function() {
        return this.random_element(this.street_parts);
    },
    city_part: function() {
        return this.random_element(this.city_parts);
    },
    city_suffix_word: function() {
        return this.random_element(this.city_suffix_words);
    },
    // German zips always have 5 digits, so this implementation ignores the digits parameter
    zip: function() {
        return this.numerify(this.random_element(this.zip_formats));
    },
    building_number: function() {
        return this.numerify(this.populate_one_of(this.building_number_formats));
    },
    building_number_letter: function() {
        return this.random_element(this.building_number_letters);
    }
};
module.exports = provider;

},{}],"1SwNX":[function(require,module,exports) {
var moment = require('moment');
moment.locale('de');
var provider = {
    date: function(format) {
        format = format || 'DD.MM.YYYY';
        return this.moment.format(format);
    }
};
module.exports = provider;

},{"moment":"jwcsj"}],"55buM":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '0#### / #######',
        '+49 #### #######'
    ],
    prefix: [
        'Herr',
        'Frau',
        'Dr.',
        'Prof. Dr.',
        'Dipl. Ing.'
    ],
    suffix: [
        'Jr.',
        'Sr.',
        'I',
        'II',
        'III',
        'IV',
        'V'
    ],
    company_suffixes: [
        'AG',
        'GmbH',
        'GmbH & co. KG',
        'KG',
        'GbR',
        'und Partner'
    ],
    // taken from http://www.beliebte-vornamen.de/760-alle_jahre.htm
    first_names: [
        'Ursula',
        'Carin',
        'Karin',
        'Helga',
        'Sabine',
        'Ingrid',
        'Renate',
        'Monica',
        'Monika',
        'Susanne',
        'Gisela',
        'Petra',
        'Birgit',
        'Andrea',
        'Anna',
        'Brigitte',
        'Claudia',
        'Klaudia',
        'Erica',
        'Erika',
        'Christa',
        'Krista',
        'Elke',
        'Stefanie',
        'Stephanie',
        'Gertrud',
        'Elisabeth',
        'Elizabeth',
        'Maria',
        'Angelika',
        'Heike',
        'Gabriele',
        'Cathrin',
        'Catrin',
        'Kathrin',
        'Katrin',
        'Ilse',
        'Nicole',
        'Anja',
        'Barbara',
        'Hildegard',
        'Martina',
        'Ingeborg',
        'Gerda',
        'Marion',
        'Jutta',
        'Ute',
        'Hannelore',
        'Irmgard',
        'Irmgart',
        'Christine',
        'Kristine',
        'Inge',
        'Christina',
        'Kristina',
        'Silvia',
        'Sylvia',
        'Margarete',
        'Margarethe',
        'Kerstin',
        'Marianne',
        'Edith',
        'Marta',
        'Martha',
        'Waltraud',
        'Catharina',
        'Katarina',
        'Katharina',
        'Anke',
        'Christel',
        'Bärbel',
        'Julia',
        'Erna',
        'Tanja',
        'Silke',
        'Elfriede',
        'Ruth',
        'Lieselotte',
        'Angela',
        'Regina',
        'Frida',
        'Frieda',
        'Melanie',
        'Christiane',
        'Bettina',
        'Ulrike',
        'Britta',
        'Käte',
        'Käthe',
        'Sonja',
        'Anneliese',
        'Rita',
        'Cornelia',
        'Eva',
        'Sigrid',
        'Herta',
        'Hertha',
        'Johanna',
        'Manuela',
        'Doris',
        'Kirsten',
        'Maike',
        'Meike',
        'Astrid',
        'Rosemarie',
        'Beate',
        'Margot',
        'Dagmar',
        'Katja',
        'Daniela',
        'Charlotte',
        'Heidi',
        'Marlies',
        'Marlis',
        'Antje',
        'Gudrun',
        'Nadin',
        'Nadine',
        'Helene',
        'Ivonne',
        'Yvonne',
        'Anette',
        'Annette',
        'Maren',
        'Marie',
        'Peter',
        'Michael',
        'Thomas',
        'Andreas',
        'Wolfgang',
        'Claus',
        'Klaus',
        'Jürgen',
        'Günter',
        'Günther',
        'Stefan',
        'Stephan',
        'Christian',
        'Kristian',
        'Uwe',
        'Werner',
        'Horst',
        'Frank',
        'Dieter',
        'Manfred',
        'Gerhard',
        'Gerhardt',
        'Hans',
        'Bernd',
        'Berndt',
        'Bernt',
        'Thorsten',
        'Torsten',
        'Mathias',
        'Matthias',
        'Helmut',
        'Helmuth',
        'Walter',
        'Walther',
        'Heinz',
        'Martin',
        'Jörg',
        'Joerg',
        'Rolf',
        'Jens',
        'Sven',
        'Swen',
        'Alexander',
        'Jan',
        'Rainer',
        'Reiner',
        'Holger',
        'Carl',
        'Karl',
        'Dirk',
        'Joachim',
        'Ralf',
        'Ralph',
        'Carsten',
        'Karsten',
        'Herbert',
        'Oliver',
        'Wilhelm',
        'Curt',
        'Kurt',
        'Marcus',
        'Markus',
        'Heinrich',
        'Hermann',
        'Harald',
        'Gerd',
        'Gert',
        'Paul',
        'Andre',
        'André',
        'Norbert',
        'Daniel',
        'Olaf',
        'Rudolf',
        'Rudolph',
        'Otto',
        'Marco',
        'Marko',
        'Volker',
        'Ulrich',
        'Ernst',
        'Robert',
        'Willi',
        'Willy',
        'Christoph',
        'Johannes',
        'Dennis',
        'Sebastian',
        'Alfred',
        'Friedrich',
        'Florian',
        'Georg',
        'Patrick',
        'Detlef',
        'Detlev',
        'Tobias',
        'Lars',
        'Reinhardt',
        'Erich',
        'Marc',
        'Mark',
        'Ingo',
        'Nils',
        'Niels',
        'Bernhard',
        'Axel',
        'Heiko',
        'Philipp',
        'Philip',
        'Phillip',
        'Phillipp',
        'Maik',
        'Meik',
        'Mike',
        'Siegfried',
        'Kai',
        'Björn',
        'Fritz',
        'Rüdiger',
        'Richard',
        'Tim',
        'Timm',
        'Franz',
        'René',
        'Marcel',
        'Lothar',
        'Benjamin',
        'Hartmut',
        'Johann',
        'Jörn',
        'Erwin',
        'Wilfried',
        'Mario'
    ],
    // 150 most common last names from https://de.wiktionary.org/wiki/Verzeichnis:Deutsch/Liste_der_h%C3%A4ufigsten_Nachnamen_Deutschlands
    last_names: [
        'Müller',
        'Schmidt',
        'Schneider',
        'Fischer',
        'Weber',
        'Meyer',
        'Wagner',
        'Becker',
        'Schulz',
        'Hoffmann',
        'Schäfer',
        'Bauer',
        'Koch',
        'Richter',
        'Klein',
        'Wolf',
        'Schröder',
        'Neumann',
        'Schwarz',
        'Braun',
        'Hofmann',
        'Zimmermann',
        'Schmitt',
        'Hartmann',
        'Krüger',
        'Schmid',
        'Werner',
        'Lange',
        'Schmitz',
        'Meier',
        'Krause',
        'Maier',
        'Lehmann',
        'Huber',
        'Mayer',
        'Herrmann',
        'Köhler',
        'Walter',
        'König',
        'Schulze',
        'Fuchs',
        'Kaiser',
        'Lang',
        'Weiß',
        'Peters',
        'Scholz',
        'Jung',
        'Möller',
        'Hahn',
        'Keller',
        'Vogel',
        'Schubert',
        'Roth',
        'Frank',
        'Friedrich',
        'Beck',
        'Günther',
        'Berger',
        'Winkler',
        'Lorenz',
        'Baumann',
        'Schuster',
        'Kraus',
        'Böhm',
        'Simon',
        'Franke',
        'Albrecht',
        'Winter',
        'Ludwig',
        'Martin',
        'Krämer',
        'Schumacher',
        'Vogt',
        'Jäger',
        'Stein',
        'Otto',
        'Groß',
        'Sommer',
        'Haas',
        'Graf',
        'Heinrich',
        'Seidel',
        'Schreiber',
        'Ziegler',
        'Brandt',
        'Kuhn',
        'Schulte',
        'Dietrich',
        'Kühn',
        'Engel',
        'Pohl',
        'Horn',
        'Sauer',
        'Arnold',
        'Thomas',
        'Bergmann',
        'Busch',
        'Pfeiffer',
        'Voigt',
        'Götz',
        'Seifert',
        'Lindner',
        'Ernst',
        'Hübner',
        'Kramer',
        'Franz',
        'Beyer',
        'Wolff',
        'Peter',
        'Jansen',
        'Kern',
        'Barth',
        'Wenzel',
        'Hermann',
        'Ott',
        'Paul',
        'Riedel',
        'Wilhelm',
        'Hansen',
        'Nagel',
        'Grimm',
        'Lenz',
        'Ritter',
        'Bock',
        'Langer',
        'Kaufmann',
        'Mohr',
        'Förster',
        'Zimmer',
        'Haase',
        'Lutz',
        'Kruse',
        'Jahn',
        'Schumann',
        'Fiedler',
        'Thiel',
        'Hoppe',
        'Kraft',
        'Michel',
        'Marx',
        'Fritz',
        'Arndt',
        'Eckert',
        'Schütz',
        'Walther',
        'Petersen',
        'Berg',
        'Schindler',
        'Kunz',
        'Reuter'
    ]
};
module.exports = provider;

},{}],"lIWCO":[function(require,module,exports) {
var provider = {
    phonetics: [
        'Alfa',
        'Alfa-Echo',
        'Bravo',
        'Charlie',
        'Charlie-Hotel',
        'Delta',
        'Echo',
        'Foxtrot',
        'Golf',
        'Hotel',
        'India',
        'Juliett',
        'Kilo',
        'Lima',
        'Mike',
        'November',
        'Oscar',
        'Oscar-Echo',
        'Papa',
        'Quebec',
        'Romeo',
        'Sierra',
        'Sierra-Sierra',
        'Tango',
        'Uniform',
        'Uniform-Echo',
        'Victor',
        'Whiskey',
        'X-ray',
        'Yankee',
        'Zulu'
    ]
};
module.exports = provider;

},{}],"ihviF":[function(require,module,exports) {
var provider = {
    provinces: [
        "Ontario",
        "Quebec",
        "Nova Scotia",
        "New Brunswich",
        "Manitoba",
        "British Columbia",
        "Prince Edward Island",
        "Saskatchewan",
        "Alberta",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Yukon",
        "Nunavut"
    ],
    province_abbr: [
        "ON",
        "QC",
        "NS",
        "NB",
        "MB",
        "BC",
        "PE",
        "SK",
        "AB",
        "NL",
        "NT",
        "YT",
        "NU"
    ],
    postal_code_format: [
        "X#X-#X#",
        'X#X#X#',
        'X#X #X#'
    ],
    capital_cities: [
        "Toronto",
        "Quebec City",
        "Halifax",
        "Fredericton",
        "Winnipeg",
        "Victoria",
        "Charlottetown",
        "Regina",
        "Edmonton",
        "St. John's",
        "Yellowknife",
        "Whitehorse",
        "Iqaluit"
    ],
    province: function() {
        return this.random_element(this.provinces);
    },
    province_abbr: function() {
        return this.random_element(this.province_abbr);
    },
    //this isn't guaranteed to produce actually valid postal codes, as most letters unused in postal codes
    postal_code: function() {
        return this.numerify(this.letterify(this.random_element(this.postal_code_format))).toUpperCase();
    },
    //pass a province to this function to return it's capital city
    capital_city: function(prov) {
        if (prov) {
            var idx = this.provinces.indexOf(prov);
            if (idx === -1) throw new Error('province not found');
            return this.capital_cities[idx];
        }
        return this.random_element(this.capital_cities);
    }
};
module.exports = provider;

},{}],"5lsB1":[function(require,module,exports) {
var provider = {
    states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
    ],
    state_abbrs: [
        'AK',
        'AL',
        'AR',
        'AZ',
        'CA',
        'CO',
        'CT',
        'DC',
        'DE',
        'FL',
        'GA',
        'HI',
        'IA',
        'ID',
        'IL',
        'IN',
        'KS',
        'KY',
        'LA',
        'MA',
        'MD',
        'ME',
        'MI',
        'MN',
        'MO',
        'MS',
        'MT',
        'NC',
        'ND',
        'NE',
        'NH',
        'NJ',
        'NM',
        'NV',
        'NY',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VA',
        'VT',
        'WA',
        'WI',
        'WV',
        'WY'
    ],
    state: function() {
        return this.random_element(this.states);
    },
    state_abbr: function() {
        return this.random_element(this.state_abbrs);
    }
};
module.exports = provider;

},{}],"8Tw0x":[function(require,module,exports) {
var provider = {
    countries: [
        'Afghanistan',
        'Afrique du Sud',
        'Albanie',
        'Algérie',
        'Allemagne',
        'Andorre',
        'Angola',
        'Antigua-et-Barbuda',
        'Arabie saoudite',
        'Argentine',
        'Arménie',
        'Australie',
        'Autriche',
        'Azerbaïdjan',
        'Bahamas',
        'Bahreïn',
        'Bangladesh',
        'Barbade',
        'Belgique',
        'Belize',
        'Bénin',
        'Bhoutan',
        'Biélorussie',
        'Myanmar',
        'Bolivie',
        'Bosnie-Herzégovine',
        'Botswana',
        'Brésil',
        'Brunei',
        'Bulgarie',
        'Burkina Faso',
        'Burundi',
        'Cambodge',
        'Cameroun',
        'Canada',
        'Cap-Vert',
        'Centrafrique',
        'Chili',
        'République populaire de Chine',
        'Chypre',
        'Colombie',
        'Comores',
        'Congo-Brazzaville',
        'République démocratique du Congo',
        'Corée du Nord',
        'Corée du Sud',
        'Costa Rica',
        'Côte d\'Ivoire',
        'Croatie',
        'Cuba',
        'Danemark',
        'Djibouti',
        'République dominicaine',
        'Dominique',
        'Égypte',
        'Émirats arabes unis',
        'Équateur',
        'Érythrée',
        'Espagne',
        'Estonie',
        'États-Unis',
        'Éthiopie',
        'Fidji',
        'Finlande',
        'France',
        'Gabon',
        'Gambie',
        'Géorgie',
        'Ghana',
        'Grèce',
        'Grenade',
        'Guatemala',
        'Guinée',
        'Guinée-Bissau',
        'Guinée équatoriale',
        'Guyana',
        'Haïti',
        'Honduras',
        'Hongrie',
        'Inde',
        'Indonésie',
        'Irak',
        'Iran',
        'Irlande',
        'Islande',
        'Israël',
        'Italie',
        'Jamaïque',
        'Japon',
        'Jordanie',
        'Kazakhstan',
        'Kenya',
        'Kirghizistan',
        'Kiribati',
        'Koweït',
        'Laos',
        'Lesotho',
        'Lettonie',
        'Liban',
        'Libéria',
        'Libye',
        'Liechtenstein',
        'Lituanie',
        'Luxembourg',
        'Macédoine',
        'Madagascar',
        'Malaisie',
        'Malawi',
        'Maldives',
        'Mali',
        'Malte',
        'Maroc',
        'Îles Marshall',
        'Maurice',
        'Mauritanie',
        'Mexique',
        'Micronésie',
        'Moldavie',
        'Monaco',
        'Mongolie',
        'Monténégro',
        'Mozambique',
        'Namibie',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norvège',
        'Nouvelle-Zélande',
        'Oman',
        'Ouganda',
        'Ouzbékistan',
        'Pakistan',
        'Palaos',
        'Palestine',
        'Panamá',
        'Papouasie-Nouvelle-Guinée',
        'Paraguay',
        'Pays-Bas',
        'Pérou',
        'Philippines',
        'Pologne',
        'Portugal',
        'Qatar',
        'Roumanie',
        'Royaume-Uni',
        'Russie',
        'Rwanda',
        'Saint-Christophe-et-Niévès',
        'Sainte-Lucie',
        'Saint-Marin',
        'Saint-Vincent-et-les-Grenadines',
        'Salomon',
        'Salvador',
        'Samoa',
        'São Tomé-et-Principe',
        'Sénégal',
        'Serbie',
        'Seychelles',
        'Sierra Leone',
        'Singapour',
        'Slovaquie',
        'Slovénie',
        'Somalie',
        'Soudan',
        'Sri Lanka',
        'Suède',
        'Suisse',
        'Suriname',
        'Swaziland',
        'Syrie',
        'Tadjikistan',
        'Tanzanie',
        'Tchad',
        'République tchèque',
        'Thaïlande',
        'Timor oriental',
        'Togo',
        'Tonga',
        'Trinité-et-Tobago',
        'Tunisie',
        'Turkménistan',
        'Turquie',
        'Tuvalu',
        'Ukraine',
        'Uruguay',
        'Vanuatu',
        'Vatican',
        'Venezuela',
        'Viêt Nam',
        'Yémen',
        'Zambie',
        'Zimbabwe'
    ],
    states: [
        'Auvergne-Rhône-Alpes',
        'Bourgogne-Franche-Comté',
        'Bretagne',
        'Centre-Val de Loire',
        'Corse',
        'Grand Est',
        'Hauts-de-France',
        'Île-de-France',
        'Normandie',
        'Nouvelle-Aquitaine',
        'Occitanie',
        'Pays de la Loire',
        'Provence-Alpes-Côte d\'Azur',
        'Guadeloupe',
        'Guyane',
        'Martinique',
        'La Réunion',
        'Mayotte'
    ],
    state_abbrs: [
        'ARA',
        'BFC',
        'BRE',
        'CVL',
        'COR',
        'GES',
        'HDF',
        'IDF',
        'NOR',
        'NAQ',
        'OCC',
        'PDL',
        'PAC',
        'GP',
        'GF',
        'MQ',
        'RE',
        'YT'
    ],
    cities: [
        'Aix-en-Provence',
        'Agen',
        'Ajaccio',
        'Amiens',
        'Angers',
        'Avignon',
        'Argenteuil',
        'Auxerre',
        'Basse-Terre',
        'Bayonne',
        'Besançon',
        'Bordeaux',
        'Brest',
        'Caen',
        'Cannes',
        'Cayenne',
        'Clermont-Ferrand',
        'Colmar',
        'Dijon',
        'Dunkerque',
        'Fort-de-France',
        'Grenoble',
        'Montpellier',
        'Le Havre',
        'Le Mans',
        'Levallois-Perret',
        'Lille',
        'Limoges',
        'Lyon',
        'Marseille',
        'Metz',
        'Nancy',
        'Nantes',
        'Nice',
        'Nîmes',
        'Orléans',
        'Paris',
        'Pau',
        'Perpignan',
        'Poitiers',
        'Reims',
        'Rennes',
        'Roubaix',
        'Rouen',
        'Saint-Denis',
        'Saint-Étienne',
        'Strasbourg',
        'Toulon',
        'Toulouse',
        'Tours',
        'Versaille',
        'Villeurbanne'
    ],
    street_prefixes: [
        'Allée',
        'Avenue',
        'Boulevard',
        'Chemin',
        'Cours',
        'Impasse',
        'Passage',
        'Place',
        'Route',
        'Rue'
    ],
    street_suffixes: [
        'Albert Camus',
        'Charles-de-Gaulle',
        'Jean Moulin',
        'Marie Curie',
        'Napoléon Bonaparte',
        'St Exupéry',
        'de Paris',
        'de la Gare',
        'd\'Avignon',
        'de la République',
        'des Vieux Chênes',
        'du 8 mai 1945',
        'du Levant',
        'du Marché',
        'du Moulin',
        'des Champs',
        'du six juin',
        'des combattants',
        'du 112ème Régiment',
        'de l\'Église',
        'de Belfort',
        'des Nations',
        'de l\'Hôtel-de-Ville'
    ],
    zip_formats: [
        '####0',
        '###00'
    ],
    building_number_formats: [
        '#',
        '##',
        '###'
    ],
    street_formats: [
        '{{street_prefix}} {{street_suffix}}',
        '{{street_prefix}} {{first_name}} {{last_name}}'
    ],
    address1_formats: [
        'Bâtiment X',
        'Appartement ##', 
    ],
    address2_formats: [
        '{{building_number}} {{street}}', 
    ],
    address_formats: [
        '{{address1}}\n{{address2}}\n{{zip}} {{city}}',
        '{{address2}}\n{{zip}} {{city}}', 
    ],
    zip: function() {
        return this.numerify(this.random_element(this.zip_formats));
    },
    address1: function() {
        return this.numerify(this.letterify(this.random_element(this.address1_formats)));
    },
    address2: function() {
        return this.populate_one_of(this.address2_formats);
    },
    address: function() {
        return this.numerify(this.populate_one_of(this.address_formats));
    },
    city: function() {
        return this.random_element(this.cities);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    },
    street_suffix: function() {
        return this.random_element(this.street_suffixes);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    }
};
module.exports = provider;

},{}],"9uVc7":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '+33 # ## ## ## ##',
        '0# ## ## ## ##'
    ],
    prefix: [
        'M.',
        'Mme',
        'Mlle'
    ],
    first_names: [
        'Abel',
        'Achille',
        'Adam',
        'Adel',
        'Adrien',
        'Agathe',
        'Ahmed',
        'Alain',
        'Albert',
        'Alexandre',
        'Alexia',
        'Alexis',
        'Alice',
        'Alicia',
        'Alix',
        'Alphonse',
        'Amandine',
        'Amaury',
        'Ambre',
        'Ambroise',
        'Amine',
        'Anaelle',
        'Anais',
        'Anatole',
        'Anaïs',
        'André',
        'Ange',
        'Angélique',
        'Anna',
        'Anne',
        'Anouk',
        'Anthony',
        'Antoine',
        'Antonin',
        'Apolline',
        'Armand',
        'Arnaud',
        'Arthur',
        'Aubin',
        'Auguste',
        'Augustin',
        'Aurélien',
        'Axel',
        'Axelle',
        'Aymeric',
        'Baptiste',
        'Basile',
        'Bastien',
        'Benjamin',
        'Bernard',
        'Bilal',
        'Brian',
        'Camille',
        'Candice',
        'Capucine',
        'Caroline',
        'Celia',
        'Charles',
        'Charlie',
        'Charline',
        'Charlotte',
        'Chloé',
        'Christian',
        'Clara',
        'Clarisse',
        'Claude',
        'Clémence',
        'Clément',
        'Colin',
        'Coline',
        'Come',
        'Constance',
        'Corentin',
        'Cyprien',
        'Cyril',
        'Célia',
        'Damien',
        'Daniel',
        'David',
        'Denis',
        'Dimitri',
        'Dorian',
        'Dylan',
        'Eden',
        'Edgar',
        'Edouard',
        'Eliane',
        'Elie',
        'Elisa',
        'Elise',
        'Eloise',
        'Elsa',
        'Emile',
        'Emilie',
        'Emilien',
        'Emma',
        'Emmanuel',
        'Enola',
        'Enora',
        'Enzo',
        'Erwann',
        'Esteban',
        'Ethan',
        'Etienne',
        'Eva',
        'Fabien',
        'Fabrice',
        'Fanny',
        'Faustine',
        'Felix',
        'Florence',
        'Florent',
        'Florian',
        'François',
        'François-Xavier',
        'Félix',
        'Gabriel',
        'Gabrielle',
        'Garance',
        'Gaspard',
        'Gauthier',
        'Gaël',
        'Gaëtan',
        'Georges',
        'Gregory',
        'Grégoire',
        'Guilhem',
        'Guillaume',
        'Hector',
        'Henri',
        'Henriette',
        'Hippolyte',
        'Hortense',
        'Hugo',
        'Hugues',
        'Héloïse',
        'Hélène',
        'Ibrahim',
        'Ines',
        'Iris',
        'Ismaël',
        'Jade',
        'Jean',
        'Jean-Baptiste',
        'Jean-Philippe',
        'Jean-Yves',
        'Jeanine',
        'Jeanne',
        'Jeremy',
        'Joachim',
        'Joan',
        'Johan',
        'Jonathan',
        'Jordan',
        'Joris',
        'Joseph',
        'Joshua',
        'Jules',
        'Julia',
        'Julie',
        'Julien',
        'Juliette',
        'Justin',
        'Justine',
        'Jérémie',
        'Karim',
        'Kenza',
        'Kevin',
        'Lana',
        'Laura',
        'Laurent',
        'Leon',
        'Leonie',
        'Liam',
        'Lili',
        'Lilia',
        'Lilian',
        'Lily',
        'Lise',
        'Lison',
        'Loic',
        'Lola',
        'Lou',
        'Louis',
        'Louise',
        'Luc',
        'Lucas',
        'Lucie',
        'Lucien',
        'Lucile',
        'Luna',
        'Lylou',
        'Léa',
        'Léandre',
        'Léane',
        'Léo',
        'Léon',
        'Léonard',
        'Léonie',
        'Léopold',
        'Mae',
        'Mael',
        'Maelle',
        'Maeva',
        'Mahé',
        'Manon',
        'Marc',
        'Margaux',
        'Margot',
        'Marianne',
        'Marie',
        'Marie-Caroline',
        'Marie-Hélène',
        'Marine',
        'Marion',
        'Marius',
        'Martin',
        'Mathias',
        'Mathieu',
        'Mathilde',
        'Matthieu',
        'Max',
        'Maxence',
        'Maxime',
        'Maya',
        'Maël',
        'Maëlys',
        'Mehdi',
        'Meline',
        'Mickael',
        'Miguel',
        'Mireille',
        'Mohammed',
        'Morgan',
        'Morgane',
        'Muriel',
        'Myriam',
        'Mélissa',
        'Nathan',
        'Nicolas',
        'Nicole',
        'Nina',
        'Ninon',
        'Noemie',
        'Noémie',
        'Oceane',
        'Océane',
        'Olivia',
        'Olivier',
        'Omar',
        'Oscar',
        'Paul',
        'Paulette',
        'Pauline',
        'Phillipe',
        'Pierre',
        'Pierre-Olivier',
        'Pierre-Yves',
        'Quentin',
        'Rachel',
        'Raphaël',
        'Raymond',
        'Renaud',
        'René',
        'Richard',
        'Robert',
        'Robin',
        'Romain',
        'Romane',
        'Roméo',
        'Rose',
        'Roxane',
        'Rémi',
        'Salomé',
        'Samuel',
        'Sandra',
        'Sarah',
        'Sasha',
        'Selma',
        'Shana',
        'Simon',
        'Stella',
        'Thibaud',
        'Thomas',
        'Théo',
        'Théodore',
        'Théophile',
        'Timothée',
        'Tristan',
        'Ursule',
        'Valentin',
        'Valentine',
        'Victoire',
        'Victor',
        'Victoria',
        'Vincent',
        'Violette',
        'Xavier',
        'Yanis',
        'Yann',
        'Yasmine',
        'Yoann',
        'Yves',
        'Zoé',
        'Élodie',
        'Éléonore',
        'Émilie'
    ],
    last_names: [
        'Adam',
        'Albert',
        'Alexandre',
        'Allain',
        'Allard',
        'Alves',
        'Andre',
        'Antoine',
        'Arnaud',
        'Aubert',
        'Aubry',
        'Auger',
        'Bailly',
        'Barbe',
        'Barbier',
        'Baron',
        'Barre',
        'Barthelemy',
        'Bataille',
        'Baudry',
        'Bayle',
        'Bazin',
        'Benard',
        'Benoit',
        'Berger',
        'Bernard',
        'Berthelot',
        'Berthier',
        'Bertin',
        'Bertrand',
        'Besnard',
        'Besse',
        'Besson',
        'Bigot',
        'Blanc',
        'Blanchard',
        'Blanchet',
        'Blin',
        'Blondel',
        'Blot',
        'Bodin',
        'Bonhomme',
        'Bonneau',
        'Bonnet',
        'Bouchard',
        'Boucher',
        'Bouchet',
        'Boulanger',
        'Boulay',
        'Bouquet',
        'Bourdon',
        'Bourgeois',
        'Bousquet',
        'Boutin',
        'Bouvet',
        'Bouvier',
        'Boyer',
        'Brault',
        'Breton',
        'Briand',
        'Brun',
        'Bruneau',
        'Brunel',
        'Brunet',
        'Buisson',
        'Camus',
        'Cardinal',
        'Carlier',
        'Caron',
        'Carpentier',
        'Carre',
        'Chapuis',
        'Charbonnier',
        'Charles',
        'Charpentier',
        'Charrier',
        'Chartier',
        'Chauveau',
        'Chauvet',
        'Chauvin',
        'Chevalier',
        'Chevallier',
        'Chretien',
        'Claude',
        'Clement',
        'Clerc',
        'Cohen',
        'Colas',
        'Colin',
        'Collet',
        'Collin',
        'Cordier',
        'Cornu',
        'Costa',
        'Coste',
        'Coulon',
        'Courtois',
        'Cousin',
        'Couturier',
        'Da Costa',
        'Da Silva',
        'Daniel',
        'David',
        'Delage',
        'Delahaye',
        'Delannoy',
        'Delattre',
        'Delaunay',
        'Delhors',
        'Delmas',
        'Delorme',
        'Denis',
        'Descamps',
        'Deschamps',
        'Devaux',
        'Didier',
        'Dos Santos',
        'Doucet',
        'Dubois',
        'Dubreuil',
        'Duchêne',
        'Dufour',
        'Duhamel',
        'Dumas',
        'Dumont',
        'Dupond',
        'Dupont',
        'Dupré',
        'Dupuis',
        'Dupuy',
        'Durand',
        'Durant',
        'Duval',
        'Etienne',
        'Evrard',
        'Fabre',
        'Faivre',
        'Faure',
        'Favre',
        'Fernandes',
        'Fernandez',
        'Ferrand',
        'Ferreira',
        'Ferry',
        'Fischer',
        'Flament',
        'Fleury',
        'Florent',
        'Fontaine',
        'Foucher',
        'Fouquet',
        'Fournier',
        'Francois',
        'François',
        'Gaillard',
        'Gallet',
        'Garcia',
        'Garnier',
        'Gaudin',
        'Gauthier',
        'Gautier',
        'Gay',
        'Geoffroy',
        'Georges',
        'Gerard',
        'Germain',
        'Gervais',
        'Gilbert',
        'Gilles',
        'Gillet',
        'Girard',
        'Giraud',
        'Girault',
        'Godard',
        'Gomes',
        'Gomez',
        'Gonzalez',
        'Gonçalves',
        'Grandjean',
        'Gras',
        'Gregoire',
        'Grenier',
        'Gros',
        'Gueguen',
        'Guerin',
        'Guibert',
        'Guichard',
        'Guilbert',
        'Guillaume',
        'Guillet',
        'Guillon',
        'Guillot',
        'Guillou',
        'Guyon',
        'Guyot',
        'Guéant',
        'Hamel',
        'Hamon',
        'Hardy',
        'Hebert',
        'Henry',
        'Hernandez',
        'Herve',
        'Hubert',
        'Huet',
        'Humbert',
        'Imbert',
        'Jacob',
        'Jacques',
        'Jacquet',
        'Jacquot',
        'Jean',
        'Joly',
        'Joubert',
        'Jourdan',
        'Julien',
        'Klein',
        'Labbe',
        'Laborde',
        'Lacombe',
        'Lacoste',
        'Lacroix',
        'Lagarde',
        'Laine',
        'Lambert',
        'Lamy',
        'Langlois',
        'Laporte',
        'Laroche',
        'Launay',
        'Laurent',
        'Le Corre',
        'Le Ferrand',
        'Le Gall',
        'Le Goff',
        'Le Roux',
        'Leblanc',
        'Leblond',
        'Lebreton',
        'Lebrun',
        'Leclerc',
        'Leclercq',
        'Lecomte',
        'Leconte',
        'Lecoq',
        'Leduc',
        'Lefebvre',
        'Lefevre',
        'Lefort',
        'Legendre',
        'Léger',
        'Legrand',
        'Legros',
        'Lejeune',
        'Lelievre',
        'Lelong',
        'Lemaire',
        'Lemaitre',
        'Lemoine',
        'Lemonnier',
        'Lenoir',
        'Leonard',
        'Leroux',
        'Leroy',
        'Lesage',
        'Leveque',
        'Levy',
        'Loiseau',
        'Lombard',
        'Lopes',
        'Lopez',
        'Louis',
        'Lucas',
        'Mace',
        'Mahe',
        'Maillard',
        'Maillet',
        'Mallet',
        'Marc',
        'Marchal',
        'Marchand',
        'Marechal',
        'Marie',
        'Marin',
        'Marion',
        'Marques',
        'Martel',
        'Martin',
        'Martineau',
        'Martinez',
        'Martins',
        'Marty',
        'Mary',
        'Mas',
        'Masse',
        'Masson',
        'Mathieu',
        'Maurice',
        'Maurin',
        'Maury',
        'Menard',
        'Mercier',
        'Merle',
        'Merlin',
        'Meunier',
        'Meyer',
        'Michaud',
        'Michel',
        'Millet',
        'Monnier',
        'Moreau',
        'Morel',
        'Morin',
        'Morvan',
        'Moulin',
        'Mouton',
        'Müller',
        'Navarro',
        'Nguyen',
        'Nicolas',
        'Noel',
        'Normand',
        'Olivier',
        'Ollivier',
        'Pages',
        'Parent',
        'Paris',
        'Parmentier',
        'Pascal',
        'Pasquier',
        'Paul',
        'Pelletier',
        'Peltier',
        'Pereira',
        'Perez',
        'Peron',
        'Perret',
        'Perrier',
        'Perrin',
        'Perrot',
        'Petit',
        'Petitjean',
        'Philippe',
        'Picard',
        'Pichon',
        'Picot',
        'Pierre',
        'Pineau',
        'Poirier',
        'Poisson',
        'Pons',
        'Potier',
        'Pottier',
        'Poulain',
        'Prevost',
        'Prevot',
        'Prigent',
        'Pruvost',
        'Pujol',
        'Raymond',
        'Raynaud',
        'Regnier',
        'Remy',
        'Renard',
        'Renaud',
        'Renault',
        'Rey',
        'Reynaud',
        'Ribeiro',
        'Richard',
        'Riou',
        'Riviere',
        'Robert',
        'Robin',
        'Roche',
        'Rodrigues',
        'Rodriguez',
        'Roger',
        'Rolland',
        'Rossi',
        'Rossignol',
        'Rousseau',
        'Roussel',
        'Roux',
        'Roy',
        'Royer',
        'Ruiz',
        'Salaun',
        'Salmon',
        'Sanchez',
        'Sauvage',
        'Schmitt',
        'Schneider',
        'Seguin',
        'Serre',
        'Simon',
        'Tanguy',
        'Tessier',
        'Texier',
        'Thibault',
        'Thierry',
        'Thiery',
        'Thomas',
        'Torres',
        'Tournier',
        'Toussaint',
        'Tran',
        'Vaillant',
        'Valentin',
        'Valette',
        'Vallee',
        'Vallet',
        'Vasseur',
        'Verdier',
        'Vial',
        'Vidal',
        'Villard',
        'Vincent',
        'Voisin',
        'Wagner',
        'Weber'
    ],
    username_formats: [
        'X{{last_name}}',
        '{{first_name}}.{{last_name}}',
        '{{first_name}}{{last_name}}',
        '{{last_name}}_{{first_name}}', 
    ],
    username: function() {
        return this.letterify(this.populate_one_of(this.username_formats)).toLowerCase();
    },
    username: function() {
        return this.letterify(this.populate_one_of(this.username_formats)).normalize('NFD').replace(/\W/g, "").toLowerCase();
    }
};
module.exports = provider;

},{}],"rjc5J":[function(require,module,exports) {
var provider = {
    states: [
        'Aceh',
        'Sumatera Utara',
        'Sumatera Barat',
        'Jambi',
        'Bangka Belitung',
        'Riau',
        'Kepulauan Riau',
        'Bengkulu',
        'Sumatera Selatan',
        'Lampung',
        'Banten',
        'DKI Jakarta',
        'Jawa Barat',
        'Jawa Tengah',
        'Jawa Timur',
        'Nusa Tenggara Timur',
        'DI Yogyakarta',
        'Bali',
        'Nusa Tenggara Barat',
        'Kalimantan Barat',
        'Kalimantan Tengah',
        'Kalimantan Selatan',
        'Kalimantan Timur',
        'Kalimantan Utara',
        'Sulawesi Selatan',
        'Sulawesi Utara',
        'Gorontalo',
        'Sulawesi Tengah',
        'Sulawesi Barat',
        'Sulawesi Tenggara',
        'Maluku',
        'Maluku Utara',
        'Papua Barat',
        'Papua'
    ],
    state_abbrs: [
        'Aceh',
        'SumUt',
        'SumBar',
        'Jambi',
        'BaBel',
        'Riau',
        'KepR',
        'Bengkulu',
        'SumSel',
        'Lampung',
        'Banten',
        'DKI',
        'JaBar',
        'JaTeng',
        'JaTim',
        'NTT',
        'DIY',
        'Bali',
        'NTB',
        'KalBar',
        'KalTeng',
        'KalSel',
        'KalTim',
        'KalUt',
        'SulSel',
        'SulUt',
        'Gorontalo',
        'SulTeng',
        'SulBar',
        'SulTra',
        'Maluku',
        'MalUt',
        'PapBar',
        'Papua'
    ],
    cities: [
        "Airmadidi",
        "Ampana",
        "Amurang",
        "Andolo",
        "Banggai",
        "Bantaeng",
        "Barru",
        "Bau-Bau",
        "Benteng",
        "Bitung",
        "Bolaang Uki",
        "Boroko",
        "Bulukumba",
        "Bungku",
        "Buol",
        "Buranga",
        "Donggala",
        "Enrekang",
        "Gorontalo",
        "Jeneponto",
        "Kawangkoan",
        "Kendari",
        "Kolaka",
        "Kotamobagu",
        "Kota Raha",
        "Kwandang",
        "Lasusua",
        "Luwuk",
        "Majene",
        "Makale",
        "Makassar",
        "Malili",
        "Mamasa",
        "Mamuju",
        "Manado",
        "Marisa",
        "Maros",
        "Masamba",
        "Melonguane",
        "Ondong Siau",
        "Palopo",
        "Palu",
        "Pangkajene",
        "Pare-Pare",
        "Parigi",
        "Pasangkayu",
        "Pinrang",
        "Polewali",
        "Poso",
        "Rantepao",
        "Ratahan",
        "Rumbia",
        "Sengkang",
        "Sidenreng",
        "Sigi Biromaru",
        "Sinjai",
        "Sunggu Minasa",
        "Suwawa",
        "Tahuna",
        "Takalar",
        "Tilamuta",
        "Toli Toli",
        "Tomohon",
        "Tondano",
        "Tutuyan",
        "Unaaha",
        "Wangi Wangi",
        "Wanggudu",
        "Watampone",
        "Watan Soppeng",
        "Ambarawa",
        "Anyer",
        "Bandung",
        "Bangil",
        "Banjar (Jawa Barat)",
        "Banjarnegara",
        "Bangkalan",
        "Bantul",
        "Banyumas",
        "Banyuwangi",
        "Batang",
        "Batu",
        "Bekasi",
        "Blitar",
        "Blora",
        "Bogor",
        "Bojonegoro",
        "Bondowoso",
        "Boyolali",
        "Bumiayu",
        "Brebes",
        "Caruban",
        "Cianjur",
        "Ciamis",
        "Cibinong",
        "Cikampek",
        "Cikarang",
        "Cilacap",
        "Cilegon",
        "Cirebon",
        "Demak",
        "Depok",
        "Garut",
        "Gresik",
        "Indramayu",
        "Jakarta",
        "Jember",
        "Jepara",
        "Jombang",
        "Kajen",
        "Karanganyar",
        "Kebumen",
        "Kediri",
        "Kendal",
        "Kepanjen",
        "Klaten",
        "Pelabuhan Ratu",
        "Kraksaan",
        "Kudus",
        "Kuningan",
        "Lamongan",
        "Lumajang",
        "Madiun",
        "Magelang",
        "Magetan",
        "Majalengka",
        "Malang",
        "Mojokerto",
        "Mojosari",
        "Mungkid",
        "Ngamprah",
        "Nganjuk",
        "Ngawi",
        "Pacitan",
        "Pamekasan",
        "Pandeglang",
        "Pare",
        "Pati",
        "Pasuruan",
        "Pekalongan",
        "Pemalang",
        "Ponorogo",
        "Probolinggo",
        "Purbalingga",
        "Purwakarta",
        "Purwodadi",
        "Purwokerto",
        "Purworejo",
        "Rangkasbitung",
        "Rembang",
        "Salatiga",
        "Sampang",
        "Semarang",
        "Serang",
        "Sidayu",
        "Sidoarjo",
        "Singaparna",
        "Situbondo",
        "Slawi",
        "Sleman",
        "Soreang",
        "Sragen",
        "Subang",
        "Sukabumi",
        "Sukoharjo",
        "Sumber",
        "Sumedang",
        "Sumenep",
        "Surabaya",
        "Surakarta",
        "Tasikmalaya",
        "Tangerang",
        "Tangerang Selatan",
        "Tegal",
        "Temanggung",
        "Tigaraksa",
        "Trenggalek",
        "Tuban",
        "Tulungagung",
        "Ungaran",
        "Wates",
        "Wlingi",
        "Wonogiri",
        "Wonosari",
        "Wonosobo",
        "Yogyakarta",
        "Atambua",
        "Baa",
        "Badung",
        "Bajawa",
        "Bangli",
        "Bima",
        "Denpasar",
        "Dompu",
        "Ende",
        "Gianyar",
        "Kalabahi",
        "Karangasem",
        "Kefamenanu",
        "Klungkung",
        "Kupang",
        "Labuhan Bajo",
        "Larantuka",
        "Lewoleba",
        "Maumere",
        "Mataram",
        "Mbay",
        "Negara",
        "Praya",
        "Raba",
        "Ruteng",
        "Selong",
        "Singaraja",
        "Soe",
        "Sumbawa Besar",
        "Tabanan",
        "Taliwang",
        "Tambolaka",
        "Tanjung",
        "Waibakul",
        "Waikabubak",
        "Waingapu",
        "Denpasar",
        "Negara,Bali",
        "Singaraja",
        "Tabanan",
        "Bangli"
    ],
    city: function() {
        return this.random_element(this.cities);
    },
    state: function() {
        return this.random_element(this.states);
    },
    state_abbr: function() {
        return this.random_element(this.state_abbrs);
    }
};
module.exports = provider;

},{}],"dFFve":[function(require,module,exports) {
var provider = {
    countries: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua e Barbuda',
        'Arabia Saudita',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaigian',
        'Bahamas',
        'Bahrein',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgio',
        'Belize',
        'Benin',
        'Bhutan',
        'Bielorussia',
        'Bolivia',
        'Bosnia e Erzegovina',
        'Botswana',
        'Brasile',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambogia',
        'Camerun',
        'Canada',
        'Capo Verde',
        'Repubblica ceca',
        'Repubblica centrafricana',
        'Ciad',
        'Cile',
        'Cina',
        'Cipro',
        'Colombia',
        'Comore',
        'Congo (Brazzaville)',
        'Congo (Kinshasa)',
        'Cook Islands',
        'Corea (Nord)',
        'Corea (Sud)',
        'Costa d\'Avorio',
        'Costa Rica',
        'Croazia',
        'Cuba',
        'Côte d\'Ivoire',
        'Danimarca',
        'Dominica',
        'Repubblica dominicana',
        'Ecuador',
        'Egitto',
        'El Salvador',
        'Emirati arabi uniti',
        'Eritrea',
        'Estonia',
        'Etiopia',
        'Figi',
        'Finlandia',
        'Filippine',
        'Francia',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germania',
        'Ghana',
        'Giamaica',
        'Giappone',
        'Gibuti',
        'Giordania',
        'Gran Bretagna',
        'Grecia',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea equatoriale',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Irlanda',
        'Islanda',
        'Israele',
        'Italia',
        'Kazakstan',
        'Kenia',
        'Kirghizistan',
        'Kiribati',
        'Kosovo',
        'Kuwait',
        'Laos',
        'Lesotho',
        'Lettonia',
        'Libano',
        'Liberia',
        'Libia',
        'Liechtenstein',
        'Lituania',
        'Lussemburgo',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldive',
        'Mali',
        'Malta',
        'Marocco',
        'Isole Marshall',
        'Mauritania',
        'Maurizio',
        'Messico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Mozambico',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Norvegia',
        'Nuova Zelanda',
        'Oman',
        'Paesi Bassi',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua Nuova Guinea',
        'Paraguay',
        'Perù',
        'Polonia',
        'Portogallo',
        'Qatar',
        'Romania',
        'Ruanda',
        'Russia',
        'Saint Kitts e Nevis',
        'Saint Lucia',
        'Saint Vincent e Grenadine',
        'Isole Salomone',
        'Samoa',
        'San Marino',
        'São Tomé e Príncipe',
        'Seicelle',
        'Senegal',
        'Serbia',
        'Sierra Leone',
        'Singapore',
        'Siria',
        'Slovacchia',
        'Slovenia',
        'Somalia',
        'Spagna',
        'Sri Lanka',
        'Stati Uniti d\'America',
        'Sudafrica',
        'Sudan',
        'Sudan del Sud',
        'Suriname',
        'Svezia',
        'Swaziland',
        'Tagikistan',
        'Taiwan',
        'Tanzania',
        'Territorio Palestinese Occupato',
        'Thailandia',
        'Timor-Leste',
        'Togo',
        'Tonga',
        'Trinidad e Tobago',
        'Tunisia',
        'Turchia',
        'Turkmenistan',
        'Tuvalu',
        'Ucraina',
        'Uganda',
        'Ungheria',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
    ],
    states: [
        'Zurigo',
        'Berna',
        'Lucerna',
        'Uri',
        'Svitto',
        'Obvaldo',
        'Nidvaldo',
        'Glarona',
        'Zugo',
        'Friburgo',
        'Soletta',
        'Basilea Città',
        'Basilea Campagna',
        'Sciaffusa',
        'Appenzello Esterno',
        'Appenzello Interno',
        'San Gallo',
        'Grigioni',
        'Argovia',
        'Turgovia',
        'Ticino',
        'Vaud',
        'Vallese',
        'Neuchâtel',
        'Ginevra',
        'Giura'
    ],
    state_abbrs: [
        'ZH',
        'BE',
        'LU',
        'UR',
        'SZ',
        'OW',
        'NW',
        'GL',
        'ZG',
        'FR',
        'SO',
        'BS',
        'BL',
        'SH',
        'AR',
        'AI',
        'SG',
        'GR',
        'AG',
        'TG',
        'TI',
        'VD',
        'VS',
        'NE',
        'GE',
        'JU'
    ],
    cities: [
        'Zurigo',
        'Ginevra',
        'Basilea',
        'Losanna',
        'Berna',
        'Winterthur',
        'Lucerna',
        'San Gallo',
        'Lugano',
        'Bienne',
        'Thun',
        'Köniz',
        'La Chaux-de-Fonds',
        'Sciaffusa',
        'Friburgo',
        'Coira',
        'Neuchâtel',
        'Vernier',
        'Uster',
        'Sion',
        'Lancy',
        'Emmen',
        'Yverdon-les-Bains',
        'Zugo',
        'Kriens',
        'Rapperswil-Jona',
        'Dübendorf',
        'Montreux',
        'Dietikon',
        'Frauenfeld',
        'Wetzikon',
        'Baar',
        'Meyrin',
        'Riehen',
        'Wädenswil',
        'Wettingen',
        'Carouge',
        'Renens',
        'Kreuzlingen',
        'Aarau',
        'Allschwil',
        'Bulle',
        'Horgen',
        'Nyon',
        'Reinach',
        'Vevey',
        'Kloten',
        'Wil',
        'Baden',
        'Gossau',
        'Onex',
        'Bülach',
        'Volketswil',
        'Bellinzona',
        'Muttenz',
        'Thalwil',
        'Pully',
        'Olten',
        'Regensdorf',
        'Adliswil',
        'Monthey',
        'Schlieren',
        'Martigny',
        'Soletta',
        'Grenchen',
        'Freienbach',
        'Illnau-Effretikon',
        'Opfikon',
        'Sierre',
        'Ostermundigen',
        'Steffisburg',
        'Burgdorf',
        'Pratteln',
        'Herisau',
        'Locarno',
        'Langenthal',
        'Cham',
        'Morges',
        'Binningen',
        'Wohlen',
        'Svitto',
        'Einsiedeln',
        'Stäfa',
        'Wallisellen',
        'Arbon',
        'Liestal',
        'Thônex',
        'Küsnacht',
        'Horw',
        'Versoix',
        'Uzwil',
        'Muri bei Bern',
        'Meilen',
        'Spiez',
        'Briga-Glis',
        'Richterswil',
        'Oftringen',
        'Amriswil',
        'Küssnacht',
        'Ebikon'
    ],
    street_suffixes: [
        'Stefano Franscini',
        'Stazione',
        'del Tiglio',
        'Lungolago',
        'Miranda',
        'Morettina',
        'delle Scuole',
        'Regazzoni',
        'della Pace',
        'Lavizzari',
        'San Biagio',
        'Cantonale',
        'Rinaldo Simen'
    ],
    zip_formats: [
        '####',
        'CH-####'
    ],
    building_number_formats: [
        '##',
        '###'
    ],
    street_formats: [
        'Via {{street_suffix}}',
        'Piazza {{street_suffix}}'
    ],
    address1_formats: [
        '{{street}}',
        '{{street}} {{address2}}'
    ],
    address2_formats: [
        '#',
        '##'
    ],
    address_formats: [
        '{{address1}}\n{{zip}} {{city}}', 
    ],
    city: function() {
        return this.populate_one_of(this.cities);
    }
};
module.exports = provider;

},{}],"l6eOB":[function(require,module,exports) {
var moment = require('moment');
moment.locale('it');

},{"moment":"jwcsj"}],"VZe1W":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '091 ### ## ##',
        '+41 91 ### ## ##',
        '079 ### ## ##',
        '076 ### ## ##'
    ],
    prefix: [
        'Signora',
        'Signor',
        'Dr.'
    ],
    first_names: [
        'Noah',
        'Luca',
        'David',
        'Leon',
        'Leandro',
        'Nico',
        'Levin',
        'Julian',
        'Tim',
        'Ben',
        'Gian',
        'Jonas',
        'Lukas',
        'Dario',
        'Jan',
        'Elias',
        'Liam',
        'Lionel',
        'Samuel',
        'Fabio',
        'Nevio',
        'Matteo',
        'Nils',
        'Joel',
        'Livio',
        'Fabian',
        'Finn',
        'Laurin',
        'Robin',
        'Simon',
        'Elia',
        'Gabriel',
        'Alexander',
        'Nino',
        'Luis',
        'Andrin',
        'Benjamin',
        'Louis',
        'Diego',
        'Lars',
        'Rafael',
        'Aaron',
        'Janis',
        'Loris',
        'Colin',
        'Nicolas',
        'Lian',
        'Leo',
        'Manuel',
        'Noel',
        'Mia',
        'Alina',
        'Laura',
        'Julia',
        'Anna',
        'Emma',
        'Leonie',
        'Lena',
        'Lara',
        'Elin',
        'Elena',
        'Lea',
        'Sara',
        'Nina',
        'Chiara',
        'Sophia',
        'Livia',
        'Lia',
        'Lina',
        'Giulia',
        'Jana',
        'Sophie',
        'Elina',
        'Selina',
        'Sofia',
        'Luana',
        'Nora',
        'Alessia',
        'Emilia',
        'Melina',
        'Lisa',
        'Amélie',
        'Lorena',
        'Noemi',
        'Fiona',
        'Valentina',
        'Ronja',
        'Luisa',
        'Sarah',
        'Zoe',
        'Mila',
        'Olivia',
        'Emily',
        'Leana',
        'Ladina',
        'Mara',
        'Ella',
        'Hanna',
        'Amelie',
        'Elisa'
    ],
    last_names: [
        'Albertini',
        'Albertolli',
        'Bassi',
        'Beffa',
        'Bernasconi',
        'De Agostini',
        'Dotta',
        'Filippi',
        'Filippini',
        'Forni',
        'Genasci',
        'Genoni',
        'Jelmini',
        'Leventini',
        'Lombardi',
        'Marchetti',
        'Pedrina',
        'Pedrini',
        'Pervangher',
        'Peter',
        'Pini',
        'Ramelli',
        'Ronchi',
        'Tonella',
        'Zoppi',
        'Franzini',
        'Guscetti',
        'Trosi',
        'Motta'
    ],
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    }
};
module.exports = provider;

},{}],"jDgvo":[function(require,module,exports) {
var provider = {
    countries: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua e Barbuda',
        'Arabia Saudita',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaigian',
        'Bahamas',
        'Bahrein',
        'Bangladesh',
        'Barbados',
        'Bielorussia',
        'Belgio',
        'Belize',
        'Benin',
        'Bhutan',
        'Bielorussia',
        'Bolivia',
        'Bosnia e Erzegovina',
        'Botswana',
        'Brasile',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambogia',
        'Camerun',
        'Canada',
        'Capo Verde',
        'Repubblica Ceca',
        'Repubblica Centrafricana',
        'Ciad',
        'Cile',
        'Cina',
        'Cipro',
        'Colombia',
        'Comore',
        'Congo (Brazzaville)',
        'Congo (Kinshasa)',
        'Isole Cook',
        'Corea (Nord)',
        'Corea (Sud)',
        'Costa d\'Avorio',
        'Costa Rica',
        'Croazia',
        'Cuba',
        'Danimarca',
        'Dominica',
        'Repubblica Dominicana',
        'Ecuador',
        'Egitto',
        'El Salvador',
        'Emirati arabi uniti',
        'Eritrea',
        'Estonia',
        'Etiopia',
        'Figi',
        'Finlandia',
        'Filippine',
        'Francia',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germania',
        'Ghana',
        'Giamaica',
        'Giappone',
        'Gibuti',
        'Giordania',
        'Gran Bretagna',
        'Grecia',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea equatoriale',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Irlanda',
        'Islanda',
        'Israele',
        'Italia',
        'Kazakistan',
        'Kenya',
        'Kirghizistan',
        'Kiribati',
        'Kosovo',
        'Kuwait',
        'Laos',
        'Lesotho',
        'Lettonia',
        'Libano',
        'Liberia',
        'Libia',
        'Liechtenstein',
        'Lituania',
        'Lussemburgo',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malesia',
        'Maldive',
        'Mali',
        'Malta',
        'Marocco',
        'Isole Marshall',
        'Mauritania',
        'Mauritius',
        'Messico',
        'Micronesia',
        'Moldavia',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Mozambico',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Norvegia',
        'Nuova Zelanda',
        'Oman',
        'Paesi Bassi',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua Nuova Guinea',
        'Paraguay',
        'Perù',
        'Polonia',
        'Portogallo',
        'Qatar',
        'Romania',
        'Ruanda',
        'Russia',
        'Saint Kitts e Nevis',
        'Saint Lucia',
        'Saint Vincent e Grenadine',
        'Isole Salomone',
        'Samoa',
        'San Marino',
        'São Tomé e Príncipe',
        'Seicelle',
        'Senegal',
        'Serbia',
        'Sierra Leone',
        'Singapore',
        'Siria',
        'Slovacchia',
        'Slovenia',
        'Somalia',
        'Spagna',
        'Sri Lanka',
        'Stati Uniti d\'America',
        'Sudafrica',
        'Sudan',
        'Sudan del Sud',
        'Suriname',
        'Svezia',
        'Swaziland',
        'Tagikistan',
        'Taiwan',
        'Tanzania',
        'Territorio Palestinese Occupato',
        'Thailandia',
        'Timor Est',
        'Togo',
        'Tonga',
        'Trinidad e Tobago',
        'Tunisia',
        'Turchia',
        'Turkmenistan',
        'Tuvalu',
        'Ucraina',
        'Uganda',
        'Ungheria',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
    ],
    states: [
        'Agrigento',
        'Alessandria',
        'Ancona',
        'Valle d\'Aosta',
        'Arezzo',
        'Ascoli Piceno',
        'Asti',
        'Avellino',
        'Barletta-Andria-Trani',
        'Belluno',
        'Benevento',
        'Bergamo',
        'Biella',
        'Bolzano',
        'Brescia',
        'Brindisi',
        'Caltanissetta',
        'Campobasso',
        'Caserta',
        'Catanzaro',
        'Chieti',
        'Como',
        'Cosenza',
        'Cremona',
        'Crotone',
        'Cuneo',
        'Enna',
        'Fermo',
        'Ferrara',
        'Foggia',
        'Forlì-Cesena',
        'Frosinone',
        'Gorizia',
        'Grosseto',
        'Imperia',
        'Isernia',
        'La Spezia',
        'L\'Aquila',
        'Latina',
        'Lecce',
        'Lecco',
        'Livorno',
        'Lodi',
        'Lucca',
        'Macerata',
        'Mantova',
        'Massa Carrara',
        'Matera',
        'Modena',
        'Monza Brianza',
        'Novara',
        'Nuoro',
        'Oristano',
        'Padova',
        'Parma',
        'Pavia',
        'Perugia',
        'Pesaro Urbino',
        'Pescara',
        'Piacenza',
        'Pisa',
        'Pistoia',
        'Pordenone',
        'Potenza',
        'Prato',
        'Ragusa',
        'Ravenna',
        'Reggio Emilia',
        'Rieti',
        'Rimini',
        'Rovigo',
        'Salerno',
        'Sassari',
        'Savona',
        'Siena',
        'Siracusa',
        'Sondrio',
        'Taranto',
        'Teramo',
        'Terni',
        'Trapani',
        'Trento',
        'Treviso',
        'Trieste',
        'Udine',
        'Varese',
        'Verbano-Cusio-Ossola',
        'Vercelli',
        'Verona',
        'Vibo Valentia',
        'Vicenza',
        'Viterbo'
    ],
    state_abbrs: [
        'AG',
        'AL',
        'AN',
        'AO',
        'AR',
        'AP',
        'AT',
        'AV',
        'BT',
        'BL',
        'BN',
        'BG',
        'BI',
        'BZ',
        'BS',
        'BR',
        'CL',
        'CB',
        'CE',
        'CZ',
        'CH',
        'CO',
        'CS',
        'CR',
        'KR',
        'CN',
        'EN',
        'FM',
        'FE',
        'FG',
        'FC',
        'FR',
        'GO',
        'GR',
        'IM',
        'IS',
        'SP',
        'AQ',
        'LT',
        'LE',
        'LC',
        'LI',
        'LO',
        'LU',
        'MC',
        'MN',
        'MS',
        'MT',
        'MO',
        'MB',
        'NO',
        'NU',
        'OR',
        'PD',
        'PR',
        'PV',
        'PG',
        'PU',
        'PE',
        'PC',
        'PI',
        'PT',
        'PN',
        'PZ',
        'PO',
        'RG',
        'RA',
        'RE',
        'RI',
        'RN',
        'RO',
        'SA',
        'SS',
        'SV',
        'SI',
        'SR',
        'SO',
        'TA',
        'TE',
        'TR',
        'TP',
        'TN',
        'TV',
        'TS',
        'UD',
        'VA',
        'VB',
        'VC',
        'VR',
        'VV',
        'VI',
        'VT'
    ],
    cities: [
        'Agrigento',
        'Alessandria',
        'Ancona',
        'Aosta',
        'Arezzo',
        'Ascoli Piceno',
        'Asti',
        'Avellino',
        'Barletta',
        'Belluno',
        'Benevento',
        'Bergamo',
        'Biella',
        'Bolzano',
        'Brescia',
        'Brindisi',
        'Caltanissetta',
        'Campobasso',
        'Caserta',
        'Catanzaro',
        'Chieti',
        'Como',
        'Cosenza',
        'Cremona',
        'Crotone',
        'Cuneo',
        'Enna',
        'Fermo',
        'Ferrara',
        'Fidenza',
        'Foggia',
        'Fontanellato',
        'Forlì',
        'Frosinone',
        'Gorizia',
        'Grosseto',
        'Imperia',
        'Isernia',
        'La Spezia',
        'L\'Aquila',
        'Latina',
        'Lecce',
        'Lecco',
        'Livorno',
        'Lodi',
        'Lucca',
        'Macerata',
        'Mantova',
        'Massa',
        'Matera',
        'Modena',
        'Monza',
        'Novara',
        'Nuoro',
        'Oristano',
        'Padova',
        'Parma',
        'Pavia',
        'Perugia',
        'Pesaro',
        'Pescara',
        'Piacenza',
        'Pisa',
        'Pistoia',
        'Pordenone',
        'Potenza',
        'Prato',
        'Ragusa',
        'Ravenna',
        'Reggio Emilia',
        'Rieti',
        'Rimini',
        'Rovigo',
        'Salerno',
        'Sassari',
        'Savona',
        'Siena',
        'Siracusa',
        'Sondrio',
        'Taranto',
        'Teramo',
        'Terni',
        'Trapani',
        'Trento',
        'Treviso',
        'Trieste',
        'Udine',
        'Varese',
        'Verbano',
        'Vercelli',
        'Verona',
        'Vibo Valentia',
        'Vicenza',
        'Viterbo'
    ],
    street_prefixes: [
        'Argine',
        'Borgo',
        'Calle',
        'Campo',
        'Canale',
        'Contrada',
        'Corso',
        'Fondamenta',
        'Frazione',
        'Galleria',
        'Largo',
        'Passo',
        'Piazza',
        'Piazzale',
        'Ripa',
        'Rua',
        'Strada',
        'Traversa',
        'Via',
        'Viale',
        'Vicolo'
    ],
    street_suffixes: [
        '7 Fratelli Cervi',
        'Alessandro Volta',
        'Alfieri',
        'Bellini',
        'Carducci',
        'Cavour',
        'Cesare Battisti',
        'Como',
        'Cristoforo Colombo',
        'Dante Alighieri',
        'Donizetti',
        'Duca d\'Aosta',
        'Enrico Fermi',
        'Europa',
        'Farini',
        'Fiume',
        'Foscolo',
        'fratelli Cairoli',
        'Galileo Galilei',
        'Garibaldi',
        'Giovanni XXII',
        'Gorizia',
        'Isonzo',
        'Italia',
        'IV Novembre',
        'John Fitzgerald Kennedy',
        'Leonardo Da Vinci',
        'Leopardi',
        'Manzoni',
        'Marconi',
        'Mascagni',
        'Massimo d\'Azeglio',
        'Matteotti',
        'Mazzini',
        'Michelangelo Buonarroti',
        'Monte Grappa',
        'Nazario Sauro',
        'Nino Bixio',
        'Pascoli',
        'Petrarca',
        'Puccini',
        'Raffaello Sanzio',
        'Risorgimento',
        'Rossini',
        'San Rocco',
        'Sant\'Antonio',
        'Silvio Pellico',
        'Tasso',
        'Ugo Bassi',
        'Verdi',
        'Vittorio Veneto',
        'XXIV Maggio'
    ],
    zip_formats: [
        '#####'
    ],
    building_number_formats: [
        '##',
        '###'
    ],
    street_formats: [
        '{{street_prefix}} {{street_suffix}}'
    ],
    address1_formats: [
        '{{street}}',
        '{{street}} {{address2}}'
    ],
    address2_formats: [
        '#',
        '##',
        '##/b'
    ],
    address_formats: [
        '{{address1}}\n{{zip}} {{city}}',
        '{{address1}}\n{{zip}} {{city}}\n{{state_abbr}}',
        '{{address1}}\n{{zip}} {{city}}\n{{state}}', 
    ],
    city: function() {
        return this.populate_one_of(this.cities);
    },
    state: function() {
        return this.populate_one_of(this.states);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    }
};
module.exports = provider;

},{}],"2HxSc":[function(require,module,exports) {
var moment = require('moment');
moment.locale('it');

},{"moment":"jwcsj"}],"8mEsg":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '0# ########',
        '0### ######',
        '+393#########'
    ],
    prefix: [
        'Arch.',
        'Avv.',
        'Dott.',
        'Ing',
        'Prof.',
        'Sig.',
        'Sig.ra'
    ],
    first_names: [
        'Alessandra',
        'Alessandro',
        'Alessia',
        'Alessio',
        'Andrea',
        'Anna',
        'Chiara',
        'Cristiano',
        'Cristina',
        'Dario',
        'Davide',
        'Deborah',
        'Diego',
        'Elena',
        'Elia',
        'Elisa',
        'Emilia',
        'Emma',
        'Fabiano',
        'Fabio',
        'Fiona',
        'Gabriele',
        'Gabriella',
        'Gianluca',
        'Gianni',
        'Giovanni',
        'Giulia',
        'Giuliano',
        'Giulio',
        'Guido',
        'Irina',
        'Lara',
        'Laura',
        'Lea',
        'Leandro',
        'Lena',
        'Leonarda',
        'Leonardo',
        'Lia',
        'Lina',
        'Lisa',
        'Livia',
        'Livio',
        'Loredana',
        'Lorena',
        'Luana',
        'Luca',
        'Luigi',
        'Luisa',
        'Manuela',
        'Manuele',
        'Mara',
        'Marco',
        'Matteo',
        'Mattia',
        'Mia',
        'Nevio',
        'Nicola',
        'Nicoletta',
        'Nina',
        'Nino',
        'Noemi',
        'Nora',
        'Olivia',
        'Paolo',
        'Pier Paolo',
        'Pietro',
        'Raffaele',
        'Raffaella',
        'Riccardo',
        'Roberta',
        'Roberto',
        'Samuele',
        'Sara',
        'Selina',
        'Simona',
        'Simone',
        'Sofia',
        'Valentina',
        'Valentino'
    ],
    last_names: [
        'Albertini',
        'Albertolli',
        'Bassi',
        'Beffa',
        'Bernasconi',
        'Bianchi',
        'Conconi',
        'de Agostini',
        'de Pasquale',
        'di Saverio',
        'Filippi',
        'Filippini',
        'Forni',
        'Franzini',
        'Genasci',
        'Genoni',
        'Guscetti',
        'Leventini',
        'Lippolis',
        'Lombardi',
        'Lusetti',
        'Marchetti',
        'Motta',
        'Orioli',
        'Parlato',
        'Pedrina',
        'Pedrini',
        'Penzo',
        'Pini',
        'Ramelli',
        'Ronchi',
        'Tapparelli',
        'Tonella',
        'Trosi',
        'Zoppi'
    ],
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    }
};
module.exports = provider;

},{}],"3is4u":[function(require,module,exports) {
var provider = {
    countries: [
        'Abkhasia',
        'Afghanistan',
        'Albania',
        'Algerie',
        'Andorra',
        'Angola',
        'Antigua og Barbuda',
        'Argentina',
        'Armenia',
        'Aserbajdsjan',
        'Australia',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belgia',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia-Hercegovina',
        'Botswana',
        'Brasil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Canada',
        'Chile',
        'Colombia',
        'Costa Rica',
        'Cuba',
        'Danmark',
        'De forente arabiske emirater',
        'Den demokratiske republikken Kongo',
        'Den dominikanske republikk',
        'Den sentralafrikanske republikk',
        'Djibouti',
        'Dominica',
        'Ecuador',
        'Egypt',
        'Ekvatorial-Guinea',
        'Elfenbenskysten',
        'El Salvador',
        'Eritrea',
        'Estland',
        'Etiopia',
        'Fiji',
        'Filippinene',
        'Finland',
        'Frankrike',
        'Gabon',
        'Gambia',
        'Georgia',
        'Ghana',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Hellas',
        'Honduras',
        'Hviterussland',
        'India',
        'Indonesia',
        'Irak',
        'Iran',
        'Irland',
        'Island',
        'Israel',
        'Italia',
        'Jamaica',
        'Japan',
        'Jemen',
        'Jordan',
        'Kambodsja',
        'Kamerun',
        'Kapp Verde',
        'Kasakhstan',
        'Kenya',
        'Kina',
        'Kirgisistan',
        'Kiribati',
        'Komorene',
        'Kosovo',
        'Kroatia',
        'Kuwait',
        'Kypros',
        'Laos',
        'Latvia',
        'Lesotho',
        'Libanon',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Litauen',
        'Luxembourg',
        'Madagaskar',
        'Makedonia',
        'Malawi',
        'Malaysia',
        'Maldivene',
        'Mali',
        'Malta',
        'Marokko',
        'Marshalløyene',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Mikronesiaføderasjonen',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Mosambik',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nederland',
        'Nepal',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Nord-Korea',
        'Nord-Kypros',
        'Norge',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua Ny-Guinea',
        'Paraguay',
        'Peru',
        'Polen',
        'Portugal',
        'Qatar',
        'Romania',
        'Republikken Kongo',
        'Russland',
        'Rwanda',
        'Saint Kitts og Nevis',
        'Saint Lucia',
        'Saint Vincent og Grenadinene',
        'Salomonøyene',
        'Samoa',
        'San Marino',
        'São Tomé og Príncipe',
        'Saudi-Arabia',
        'Senegal',
        'Serbia',
        'Seychellene',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Somalia',
        'Spania',
        'Sri Lanka',
        'Storbritannia',
        'Sudan',
        'Surinam',
        'Sveits',
        'Sverige',
        'Swaziland',
        'Syria',
        'Sør-Afrika',
        'Sør-Korea',
        'Sør-Ossetia',
        'Sør-Sudan',
        'Tadsjikistan',
        'Taiwan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Transnistria',
        'Trinidad og Tobago',
        'Tsjad',
        'Tsjekkia',
        'Tunisia',
        'Turkmenistan',
        'Tuvalu',
        'Tyrkia',
        'Tyskland',
        'Uganda',
        'USA',
        'Ukraina',
        'Ungarn',
        'Uruguay',
        'Usbekistan',
        'Vanuatu',
        'Vatikanstaten',
        'Venezuela',
        'Vietnam',
        'Zambia',
        'Zimbabwe',
        'Østerrike',
        'Øst-Timor'
    ],
    // ISO 3166-2:NO
    states: [
        'Akershus',
        'Aust-Agder',
        'Buskerud',
        'Finnmark',
        'Hedmark',
        'Hordaland',
        'Møre og Romsdal',
        'Nordland',
        'Nord-Trøndelag',
        'Oppland',
        'Oslo',
        'Rogaland',
        'Sogn og Fjordane',
        'Sør-Trøndelag',
        'Telemark',
        'Troms',
        'Vest-Agder',
        'Vestfold',
        'Østfold'
    ],
    // 100 largest cities
    cities: [
        'Oslo',
        'Bergen',
        'Stavanger',
        'Sandnes',
        'Trondheim',
        'Drammen',
        'Fredrikstad',
        'Sarpsborg',
        'Porsgrunn',
        'Skien',
        'Kristiansand',
        'Ålesund',
        'Tønsberg',
        'Moss',
        'Haugesund',
        'Sandefjord',
        'Arendal',
        'Bodø',
        'Tromsø',
        'Hamar',
        'Halden',
        'Larvik',
        'Askøy',
        'Kongsberg',
        'Molde',
        'Harstad',
        'Horten',
        'Lillehammer',
        'Gjøvik',
        'Ski',
        'Mo i Rana',
        'Kristiansund',
        'Jessheim',
        'Korsvik',
        'Tromsdalen',
        'Hønefoss',
        'Elverum',
        'Alta',
        'Narvik',
        'Askim',
        'Leirvik',
        'Drøbak',
        'Osøyro',
        'Vennesla',
        'Råholt',
        'Nesoddtangen',
        'Grimstad',
        'Steinkjer',
        'Arna',
        'Kongsvinger',
        'Stjørdalshalsen',
        'Bryne',
        'Egersund',
        'Lommedalen',
        'Kopervik',
        'Ålgård',
        'Knarrevik',
        'Mandal',
        'Førde',
        'Ås',
        'Mosjøen',
        'Levanger',
        'Brumunddal',
        'Søgne',
        'Notodden',
        'Florø',
        'Kleppe',
        'Kvaløysletta',
        'Namsos',
        'Verdalsøra',
        'Orkanger',
        'Fetsund',
        'Hammerfest',
        'Åkrehamn',
        'Lillesand',
        'Kløfta',
        'Kvernaland',
        'Raufoss',
        'Holmestrand',
        'Vestby',
        'Ørsta',
        'Nærbø',
        'Jørpeland',
        'Malvik',
        'Tananger',
        'Mysen',
        'Hommersåk',
        'Vossevangen',
        'Åmot',
        'Volda',
        'Bekkelaget',
        'Melhus',
        'Fauske',
        'Sandnessjøen',
        'Flekkefjord',
        'Rotnes',
        'Spydeberg',
        'Stavern',
        'Knarvik',
        'Ulsteinvik',
        'Kragerø'
    ],
    street_suffixes: [
        'vei',
        'gate'
    ],
    street_formats: [
        '{{first_name}}s {{street_suffix}}',
        '{{last_name}}s {{street_suffix}}',
        '{{first_name}} {{last_name}}s {{street_suffix}}'
    ],
    zip_formats: [
        '####'
    ],
    address_formats: [
        '{{street}} {{building_number}}, {{zip}} {{city}}'
    ],
    address1_formats: [
        '{{street}} {{building_number}}\n{{zip}} {{city}}', 
    ],
    address2_formats: [
        '{{first_name}} {{last_name}}\n{{street}} {{building_number}}\n{{zip}} {{city}}', 
    ],
    country: function() {
        return this.random_element(this.countries);
    },
    state: function() {
        return this.random_element(this.states);
    },
    city: function() {
        return this.random_element(this.cities);
    },
    zip: function() {
        return this.numerify(this.random_element(this.zip_formats));
    },
    street_suffix: function() {
        return this.random_element(this.street_suffixes);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    address: function() {
        return this.populate_one_of(this.address_formats);
    },
    address1: function() {
        return this.populate_one_of(this.address1_formats);
    },
    address2: function() {
        return this.populate_one_of(this.address2_formats);
    }
};
module.exports = provider;

},{}],"d1RXh":[function(require,module,exports) {
var provider = {
    color_names: [
        'Beige',
        'Svart',
        'Blå',
        'Fiolett',
        'Brun',
        'Rød',
        'Grå',
        'Grønn',
        'Oransje',
        'Turkis',
        'Rosa',
        'Hvit',
        'Gul',
        'Indigo',
        'Lilla'
    ],
    color_name: function() {
        return this.random_element(this.color_names);
    }
};
module.exports = provider;

},{}],"5Fsia":[function(require,module,exports) {
var moment = require('moment');
moment.locale('nb');
var provider = {
    date: function(format) {
        format = format || 'DD.MM.YYYY';
        return this.moment.format(format);
    }
};
module.exports = provider;

},{"moment":"jwcsj"}],"7S9HB":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '## ## ## ##'
    ],
    // 50 most popular names of newborne females in 2016
    first_names_female: [
        'Nora',
        'Emma',
        'Sara',
        'Sofie',
        'Sofia',
        'Maja',
        'Olivia',
        'Ella',
        'Ingrid',
        'Emilie',
        'Leah',
        'Anna',
        'Tiril',
        'Thea',
        'Hanna',
        'Linnea',
        'Ida',
        'Mia',
        'Aurora',
        'Mathilde',
        'Frida',
        'Lilly',
        'Julie',
        'Amalie',
        'Vilde',
        'Jenny',
        'Astrid',
        'Tuva',
        'Alma',
        'Amanda',
        'Victoria',
        'Hedda',
        'Maria',
        'Oda',
        'Marie',
        'Elise',
        'Ada',
        'Iben',
        'Eline',
        'Selma',
        'Live',
        'Mina',
        'Oline',
        'Mathea',
        'Julia',
        'Ellinor',
        'Eva',
        'Agnes',
        'Amelia',
        'Mille'
    ],
    // 50 most popular names of newbornes males in 2016
    first_names_male: [
        'William',
        'Oskar',
        'Lucas',
        'Mathias',
        'Filip',
        'Oliver',
        'Jakob',
        'Emil',
        'Noah',
        'Aksel',
        'Henrik',
        'Elias',
        'Kasper',
        'Jonas',
        'Liam',
        'Theodor',
        'Markus',
        'Alexander',
        'Tobias',
        'Magnus',
        'Håkon',
        'Isak',
        'Matheo',
        'Benjamin',
        'Sebastian',
        'Martin',
        'Kristian',
        'Olav',
        'Ludvig',
        'Mohammad',
        'Adrian',
        'Sander',
        'Nikolai',
        'Johannes',
        'Leon',
        'Victor',
        'Theo',
        'Mikkel',
        'Erik',
        'Johan',
        'Daniel',
        'Jonathan',
        'Ulrik',
        'Even',
        'Iver',
        'Andreas',
        'Julian',
        'Odin',
        'Felix',
        'Sigurd'
    ],
    first_names: function() {
        return this.first_names_female.concat(this.first_names_male);
    },
    // 100 most used surnames in 2013
    last_names: [
        'Hansen',
        'Johansen',
        'Olsen',
        'Larsen',
        'Andersen',
        'Pedersen',
        'Nilsen',
        'Kristiansen',
        'Jensen',
        'Karlsen',
        'Johnsen',
        'Pettersen',
        'Eriksen',
        'Berg',
        'Haugen',
        'Hagen',
        'Johannessen',
        'Andreassen',
        'Jacobsen',
        'Dahl',
        'Jørgensen',
        'Halvorsen',
        'Henriksen',
        'Lund',
        'Sørensen',
        'Jakobsen',
        'Gundersen',
        'Moen',
        'Iversen',
        'Svendsen',
        'Strand',
        'Solberg',
        'Martinsen',
        'Paulsen',
        'Knutsen',
        'Eide',
        'Bakken',
        'Kristoffersen',
        'Mathisen',
        'Lie',
        'Rasmussen',
        'Amundsen',
        'Lunde',
        'Kristensen',
        'Bakke',
        'Berge',
        'Moe',
        'Nygård',
        'Fredriksen',
        'Solheim',
        'Nguyen',
        'Lien',
        'Holm',
        'Andresen',
        'Christensen',
        'Hauge',
        'Knudsen',
        'Nielsen',
        'Evensen',
        'Sæther',
        'Aas',
        'Hanssen',
        'Myhre',
        'Haugland',
        'Thomassen',
        'Simonsen',
        'Sivertsen',
        'Berntsen',
        'Danielsen',
        'Ali',
        'Arnesen',
        'Rønning',
        'Næss',
        'Sandvik',
        'Antonsen',
        'Haug',
        'Ellingsen',
        'Edvardsen',
        'Vik',
        'Thorsen',
        'Gulbrandsen',
        'Isaksen',
        'Birkeland',
        'Ruud',
        'Ahmed',
        'Strøm',
        'Aasen',
        'Ødegård',
        'Jenssen',
        'Tangen',
        'Eliassen',
        'Myklebust',
        'Bøe',
        'Mikkelsen',
        'Aune',
        'Helland',
        'Tveit',
        'Abrahamsen',
        'Brekke',
        'Madsen'
    ],
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    }
};
module.exports = provider;

},{}],"2L9Ge":[function(require,module,exports) {
var provider = {
    countries: [
        'Afghanistan',
        'Albanië',
        'Algerije',
        'Andorra',
        'Angola',
        'Antigua en Barbuda',
        'Argentinië',
        'Armenië',
        'Australië',
        'Azerbeidzjan',
        'Bahama\'s',
        'Bahrein',
        'Bangladesh',
        'Barbados',
        'België',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivië',
        'Bosnië-Herzegovina',
        'Botswana',
        'Brazilië',
        'Brunei',
        'Bulgarije',
        'Burkina Faso',
        'Burundi',
        'Cambodja',
        'Canada',
        'Centraal-Afrikaanse Republiek',
        'Chili',
        'China',
        'Colombia',
        'Comoren',
        'Congo-Brazzaville',
        'Congo-Kinshasa',
        'Costa Rica',
        'Cuba',
        'Cyprus',
        'Denemarken',
        'Djibouti',
        'Dominica',
        'Dominicaanse Republiek',
        'Duitsland',
        'Ecuador',
        'Egypte',
        'El Salvador',
        'Equatoriaal-Guinea',
        'Eritrea',
        'Estland',
        'Ethiopië',
        'Fiji',
        'Filipijnen',
        'Finland',
        'Frankrijk',
        'Gabon',
        'Gambia',
        'Georgië',
        'Ghana',
        'Grenada',
        'Griekenland',
        'Guatemala',
        'Guinea',
        'Guinee-Bissau',
        'Guyana',
        'Haïti',
        'Honduras',
        'Hongarije',
        'Ierland',
        'IJsland',
        'India',
        'Indonesië',
        'Irak',
        'Iran',
        'Israël',
        'Italië',
        'Ivoorkust',
        'Jamaica',
        'Japan',
        'Jemen',
        'Jordanië',
        'Kaapverdië',
        'Kameroen',
        'Kazachstan',
        'Kenia',
        'Kirgizië',
        'Kiribati',
        'Koeweit',
        'Kroatië',
        'Laos',
        'Lesotho',
        'Letland',
        'Libanon',
        'Liberia',
        'Libië',
        'Liechtenstein',
        'Litouwen',
        'Luxemburg',
        'Macedonië',
        'Madagaskar',
        'Malawi',
        'Maldiven',
        'Maleisië',
        'Mali',
        'Malta',
        'Marokko',
        'Mauritanië',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Moldavië',
        'Monaco',
        'Mongolië',
        'Montenegro',
        'Mozambique',
        'Myanmar',
        'Namibië',
        'Nauru',
        'Nederland',
        'Nepal',
        'Nicaragua',
        'Nieuw-Zeeland',
        'Niger',
        'Nigeria',
        'Noord-Korea',
        'Noorwegen',
        'Norfolk Island',
        'Oeganda',
        'Oekraïne',
        'Oezbekistan',
        'Oman',
        'Oostenrijk',
        'Oost-Timor',
        'Pakistan',
        'Palau',
        'Palestina',
        'Panama',
        'Papoea-Nieuw-Guinea',
        'Paraguay',
        'Peru',
        'Polen',
        'Portugal',
        'Qatar',
        'Roemenië',
        'Rusland',
        'Rwanda',
        'Sint-Kitts en Nevis',
        'Saint Lucia',
        'Saint Vincent en de Grenadines',
        'Salomonseilanden',
        'Samoa',
        'San Marino',
        'São Tomé en Principe',
        'Saudi-Arabië',
        'Senegal',
        'Servië',
        'Seychellen',
        'Sierra Leone',
        'Singapore',
        'Slovenië',
        'Slowakije',
        'Soedan',
        'Somalië',
        'Spanje',
        'Sri Lanka',
        'Suriname',
        'Swaziland',
        'Syrië',
        'Tadzjikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Trinidad en Tobago',
        'Tsjaad',
        'Tsjechië',
        'Tunesië',
        'Turkije',
        'Turkmenistan',
        'Tuvalu',
        'Uruguay',
        'Vanuatu',
        'Vaticaanstad',
        'Venezuela',
        'Verenigd Koninkrijk',
        'Verenigde Arabische Emiraten',
        'Verenigde Staten',
        'Vietnam',
        'Wit Rusland',
        'Zambia',
        'Zimbabwe',
        'Zuid-Afrika',
        'Zuid-Korea',
        'Zuid-Soedan',
        'Zweden',
        'Zwitserland'
    ],
    // The official name of 'Brabant' is actually 'Noord-Brabant', but 'Brabant' is more commonly used.
    states: [
        'Drenthe',
        'Flevoland',
        'Friesland',
        'Gelderland',
        'Groningen',
        'Limburg',
        'Brabant',
        'Noord-Holland',
        'Overijssel',
        'Utrecht',
        'Zeeland',
        'Zuid-Holland'
    ],
    // ISO 3166-2:NL
    state_abbrs: [
        'DR',
        'FL',
        'FR',
        'GE',
        'GR',
        'LI',
        'NB',
        'NH',
        'OV',
        'UT',
        'ZE',
        'ZH'
    ],
    // First three cities of each letter in the alphabet
    cities: [
        'Aa en Hunze',
        'Aalburg',
        'Aalsmeer',
        'Baarle-Nassau',
        'Baarn',
        'Barendrecht',
        'Capelle aan den IJssel',
        'Castricum',
        'Coevorden',
        'Dalfsen',
        'Dantumadeel',
        'De Bilt',
        'Echt-Susteren',
        'Edam-Volendam',
        'Ede',
        'Ferwerderadeel',
        'Franekeradeel',
        'Geertruidenberg',
        'Geldermalsen',
        'Geldrop-Mierlo',
        'Haaksbergen',
        'Haaren',
        'Haarlem',
        'IJsselstein',
        'Kaag en Braassem',
        'Kampen',
        'Kapelle',
        'Laarbeek',
        'Landerd',
        'Landgraaf',
        'Maasdonk',
        'Maasdriel',
        'Maasgouw',
        'Naarden',
        'Neder-Betuwe',
        'Nederlek',
        'Oegstgeest',
        'Oirschot',
        'Oisterwijk',
        'Papendrecht',
        'Peel en Maas',
        'Pekela',
        'Raalte',
        'Reimerswaal',
        'Renkum',
        'Schagen',
        'Schermer',
        'Scherpenzeel',
        'Ten Boer',
        'Terneuzen',
        'Terschelling',
        'Ubbergen',
        'Uden',
        'Uitgeest',
        'Vaals',
        'Valkenburg aan de Geul',
        'Valkenswaard',
        'Waalre',
        'Waalwijk',
        'Waddinxveen',
        'Zaanstad',
        'Zaltbommel',
        'Zandvoort'
    ],
    street_suffixes: [
        'dijk',
        'dwarsstraat',
        'gracht',
        'kade',
        'laan',
        'plein',
        'singel',
        'straat',
        'steeg',
        'wal'
    ],
    address1_formats: [
        '{{street}} {{building_number}}'
    ],
    address_formats: [
        '{{address1}}\n {{zip}} {{city}}, {{state}}', 
    ],
    zip_formats: [
        '####'
    ],
    zip: function() {
        return this.numerify(this.random_element(this.zip_formats)) + ' ' + (this._letter() + this._letter()).toUpperCase();
    },
    city: function() {
        return this.random_element(this.cities);
    }
};
module.exports = provider;

},{}],"dyeNN":[function(require,module,exports) {
var provider = {
    phone_format: '(###) ### ## ##',
    prefix: [
        'mr.',
        'mevr.',
        'dr.'
    ],
    company_suffixes: [
        'BV',
        'NV',
        'Groep',
        'en Zonen'
    ],
    // Three random Dutch names (male and female)
    first_names: [
        'Abke',
        'Anne',
        'Anouk',
        'Baukje',
        'Birgit',
        'Bo',
        'Carlijn',
        'Casper',
        'Claudia',
        'Danny',
        'Debbie',
        'Dominique',
        'Elise',
        'Ed',
        'Elwin',
        'Flip',
        'Frank',
        'Freek',
        'Geert',
        'Georgina',
        'Gwenda',
        'Hendrik',
        'Hedwig',
        'Hilke',
        'Inge',
        'Isaak',
        'Ivo',
        'Jaap',
        'Jack',
        'Jasmijn',
        'Kristen',
        'Klaartje',
        'Klaas',
        'Lander',
        'Lars',
        'Leonie',
        'Maaike',
        'Marjan',
        'Maarten',
        'Nico',
        'Nynke',
        'Noortje',
        'Olivia',
        'Oscar',
        'Olivier',
        'Peter',
        'Pim',
        'Petra',
        'Qwen',
        'Quin',
        'Quintus',
        'Raplh',
        'Rudolf',
        'Rachel',
        'Silvia',
        'Sandra',
        'Sander',
        'Tomas',
        'Tim',
        'Tess',
        'Ulke',
        'Urbanus',
        'Uri',
        'Victor',
        'Vanessa',
        'Veerle',
        'Willeke',
        'Willem',
        'Wander',
        'Xander',
        'Xavier',
        'Yvon',
        'Yannick',
        'Yvo',
        'Zander',
        'Zara',
        'Zoë'
    ],
    last_names: [
        'Albers',
        'Apers',
        'Van Bakenes',
        'Barbiers',
        'Bavinck',
        'Behaeghel',
        'Beijen',
        'Van den Berg',
        'Berkhof',
        'Bervoets',
        'Beyen',
        'Beyers',
        'Boere',
        'Van Bommel',
        'Van den Bosch',
        'Brandes',
        'Clemens',
        'Cleymans',
        'Cornelis',
        'Cramer',
        'Curfs',
        'D\'hoedt',
        'D\'Hondt',
        'Daelemans',
        'De Boer',
        'De Doncker',
        'De Saeger',
        'De Smedt',
        'Decaluwe',
        'Deddens',
        'Derksen',
        'Dewitte',
        'Van Dievoet',
        'Van Dijck',
        'Van Dijk',
        'Van Ginkel',
        'Dijkstra',
        'Dockx',
        'Van Dongen',
        'Elslander',
        'Gernaey',
        'Gommaar',
        'De Graaf',
        'De Graaff',
        'Groenewegen',
        'De Groot',
        'Haasnoot',
        'Harthoorn',
        'Van Heemskerck',
        'Heemskerk',
        'Van Heemskerk',
        'Hennie',
        'Henny',
        'Hens',
        'Hensbergen',
        'Herkenhoff',
        'Heylen',
        'Van der Hoeven',
        'Jansen',
        'Janssen',
        'Janssens',
        'De Jong',
        'De Jonge',
        'De Jongh',
        'Jonker',
        'Klerks',
        'Koopman',
        'Van Kooten',
        'Koppel',
        'Kroes',
        'Kuiper',
        'Kuipers',
        'Kuyper',
        'Van der Laan',
        'Lafeber',
        'Land',
        'Van der Leeuw',
        'Van Leeuwen',
        'Lemmens',
        'Leuris',
        'Van Lieshout',
        'Lindeman',
        'Littel',
        'Maes',
        'Manders',
        'Marum',
        'Van Marum',
        'Mathijssen',
        'Van Meeuwen',
        'Mengelberg',
        'Minderhoud',
        'Van der Most',
        'Nijhuis',
        'Nyssen',
        'Nyssens',
        'Oostenveld',
        'Ottevaere',
        'Pels Rijcken',
        'Persijn',
        'Pijlijser',
        'Proot',
        'Prummel',
        'Pylyser',
        'Ratgers',
        'Rens',
        'Rongen',
        'De Rooij',
        'Rotteveel',
        'De Ruiter',
        'Savery',
        'Schoemaker',
        'Schrijvers',
        'Semmelink',
        'Smit',
        'Smulders',
        'Van der Spek',
        'Spijkerman',
        'Standaert',
        'Steijn',
        'Steyn',
        'Stoffels',
        'Struik',
        'Tessel',
        'Thienpont',
        'Tillaart',
        'Van Tongeren',
        'Tukker',
        'Van Cauwenberghe',
        'Van den Bergh',
        'Van der Linde',
        'Van Leemput',
        'Vandewalle',
        'Veerman',
        'Verdoodt',
        'Verheyen',
        'Verlinden',
        'Vindevogel',
        'Vindevoghel',
        'Visser',
        'Vissers',
        'Vleminckx',
        'De Vries',
        'Wagenaar',
        'Wagenmaker',
        'Walravens',
        'Waterloos',
        'Waverijn',
        'Wijdeveld',
        'Wildeman',
        'De Wit'
    ]
};
module.exports = provider;

},{}],"jAK27":[function(require,module,exports) {
var provider = {
    city_prefixes: [
        'Norte',
        'Leste',
        'Oeste',
        'Sul',
        'Novo',
        'Lago',
        'Porto',
        'Nova'
    ],
    city_suffixes: [
        'lândia',
        'polis',
        'tuba'
    ],
    countries: [
        'Afeganistão',
        'Albania',
        'Argélia',
        'Samoa Americana',
        'Andorra',
        'Angola',
        'Antartida',
        'Antigua e Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Austrália',
        'Áustria',
        'Azerbaijão',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Bélgica',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutão',
        'Bolívia',
        'Bósnia e Herzegovina',
        'Botswana',
        'Brasil',
        'Ilhas Virgens Britânicas',
        'Brunei',
        'Bulgária',
        'Burkina Faso',
        'Burundi',
        'Camboja',
        'Camarões',
        'Canadá',
        'Cabo Verde',
        'Ilhas Cayman',
        'República Centro-Africana',
        'Chade',
        'Chile',
        'China',
        'Ilha Christmas',
        'Colômbia',
        'Comores',
        'Congo',
        'Ilhas Cook',
        'Costa Rica',
        'Costa do Marfim',
        'Croácia',
        'Cuba',
        'Chipre',
        'República Tcheca',
        'Dinamarca',
        'Djibouti',
        'Dominica',
        'República Dominicana',
        'Equador',
        'Egito',
        'El Salvador',
        ' Guinéa Equatorial',
        'Eritréa',
        'Estônia',
        'Etiópia',
        'Ilhas Faroe',
        'Ilhas Malvinas',
        'Fiji',
        'Finlândia',
        'França',
        'Guiana Francesa',
        'Polinésia Francesa',
        'Gabão',
        'Gâmbia',
        'Georgia',
        'Alemanha',
        'Gana',
        'Gibraltar',
        'Grécia',
        'Groelândia',
        'Granada',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guiné',
        'Guiné-Bissau',
        'Guiana',
        'Haiti',
        'Vaticano',
        'Honduras',
        'Hong Kong',
        'Hungria',
        'Islândia',
        'Índia',
        'Indonésia',
        'Irã',
        'Iraque',
        'Irlanda',
        'Israel',
        'Itália',
        'Jamaica',
        'Japão',
        'Jordânia',
        'Cazaquistão',
        'Quénia',
        'Kiribati',
        'Coréia do Norte',
        'Coréia do Sul',
        'Kuwait',
        'Quirguistão',
        'Laos',
        'Letônia',
        'Lebanon',
        'Líbano',
        'Libéria',
        'Líbia',
        'Liechtenstein',
        'Lituânia',
        'Luxemburgo',
        'Macau',
        'Macedônia',
        'Madagáscar',
        'Malawi',
        'Malásia',
        'Maldivas',
        'Mali',
        'Malta',
        'Ilhas Marshall',
        'Martinica',
        'Mauritânia',
        'Maurício',
        'Mayotte',
        'México',
        'Micronésia',
        'Moldávia',
        'Principado de Mônaco',
        'Mongólia',
        'Montenegro',
        'Montserrat',
        'Morrocos',
        'Moçambique',
        'Myanmar',
        'Namíbia',
        'Nauru',
        'Nepal',
        'Antilhas Holandesas',
        'Holanda',
        'Nova Caledónia',
        'Nova Zelândia',
        'Nicarágua',
        'Níger',
        'Nigéria',
        'Niue',
        'Ilha Norfolk',
        'Ilhas Marianas',
        'Noruéga',
        'Oman',
        'Paquistão',
        'Palau',
        'Palestina',
        'Panamá',
        'Papua Nova Guiné',
        'Paraguai',
        'Perú',
        'Filipinas',
        'Ilhas Picárnia',
        'Polônia',
        'Portugal',
        'Porto Rico',
        'Catar',
        'Romênia',
        'Federação Russa',
        'Ruanda',
        'São Bartolomeu',
        'Santa Helena',
        'São Cristóvão e Nevis',
        'Santa Lúcia',
        'St Martin',
        'Samoa',
        'São Marino',
        'São Tomé e Préncipe',
        'Arábia Saudita',
        'Senegal',
        'Sérvia',
        'Seicheles',
        'Serra Leoa',
        'Singapura',
        'Eslováquia',
        'Eslovénia',
        'Ilhas Salomão',
        'Somália',
        'África do Sul',
        'Ilhas Geórgia do Sul e Sandwich do Sul',
        'Espanha',
        'Sri Lanka',
        'Sudão',
        'Suriname',
        'Suazilândia',
        'Suécia',
        'Suíça',
        'Síria',
        'Taiwan',
        'Tajiquistão',
        'Tanzânia',
        'Tailândia',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad e Tobago',
        'Tunísia',
        'Turquia',
        'Turkmenistão',
        'Ilhas Turcas e Caicos',
        'Tuvalu',
        'Uganda',
        'Ucrânia',
        'Emirados Árabes unidos',
        'Reino Unido',
        'Estados Unidos da América',
        'Ilhas Virgens Americanas',
        'Uruguai',
        'Uzbekistão',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Wallis e Futuna',
        'Saara Ocidental',
        'Iémen',
        'Zâmbia',
        'Zimbabwe'
    ],
    zip_formats: [
        '#####-###'
    ],
    street_prefixes: [
        'Beco',
        'Avenida',
        'Rua',
        'Travessa',
        'Rodovia',
        'Ladeira',
        'Alameda',
        'Estrada'
    ],
    street_formats: [
        '{{street_prefix}} {{real_street}}'
    ],
    //most common streets names
    streets: [
        'Principal',
        'Sete',
        'Brasil',
        'Santo Antônio',
        'Sete de Setembro',
        'Quinze De Novembro',
        'Castro Alves',
        'Rui Barbosa',
        'Da Paz',
        'Miguel de Frias',
        'Paulista',
        'Cinco de Julho',
        'José Bonifácio',
        'Dom Pedro II',
        'Primeiro de Maio',
        'Paulista',
        'Flamengo',
        'Santa Rita',
        'Santos Dumont',
        'Das Flores',
        'Gonçalo de Carvalho',
        'Contorno',
        'Tabajaras',
        'Caetés',
        'Almirante Tamandaré',
        'Amaral Peixoto',
        'Oscar Freire',
        'Ayrton Senna',
        'Castelo Branco',
        'Fernão Dias',
        'Bandeirantes',
        'Do Mármore',
        'Vieira Souto',
        'Bartolomeu Mitre',
        'Assembléia',
        'Amoroso Costa',
        'Hilário de Gouveia',
        'Tavares de Macêdo',
        'Heitor Beltrão',
        'José Higino',
        'Mooca',
        'Paes de Barros',
        'Arthur Azevedo',
        'Peixoto Gomide',
        'Brigadeiro Luis Antônio',
        'Mario Amaral',
        'Rebouças',
        'Pinheiros',
        'Itapirapuã',
        'Gabriel Monteiro',
        'Parque das Nações',
        'Boaventura',
        'Bacupã',
        'Dr. Souza Gomes',
        'Washington Luiz',
        'Arantina',
        'Parnaíba'
    ],
    states: [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
    ],
    state_abbrs: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
    ],
    //state capitals and big cities
    cities: [
        'São Paulo',
        'Rio de Janeiro',
        'Salvador',
        'Brasília',
        'Fortaleza',
        'Belo Horizonte',
        'Capelle aan den IJssel',
        'Castricum',
        'Coevorden',
        'Manaus',
        'Curitiba',
        'Recife',
        'Porto Alegre',
        'Belém',
        'Goiânia',
        'Guarulhos',
        'Campinas',
        'São Luís',
        'São Gonçalo',
        'Maceió',
        'Duque de Caxias',
        'Natal',
        'Campo Grande',
        'Teresina',
        'São Bernardo do Campo',
        'Nova Iguaçu',
        'João Pessoa',
        'Santo André',
        'Osasco',
        'São José dos Campos',
        'Jaboatão dos Guararapes',
        'Ribeirão Preto',
        'Uberlândia',
        'Contagem',
        'Sorocaba',
        'Aracaju',
        'Feira de Santana',
        'Cuiabá',
        'Joinville',
        'Juiz de Fora',
        'Londrina',
        'Aparecida de Goiânia',
        'Ananindeua',
        'Niterói',
        'Porto Velho',
        'Campos dos Goytacazes',
        'Belford Roxo',
        'Serra',
        'Caxias do Sul',
        'Vila Velha',
        'Florianópolis',
        'São João de Meriti',
        'Mauá',
        'Macapá',
        'São José do Rio Preto',
        'Santos',
        'Mogi das Cruzes',
        'Betim',
        'Diadema',
        'Campina Grande',
        'Jundiaí',
        'Maringá',
        'Montes Claros',
        'Olinda',
        'Rio Branco',
        'Anápolis',
        'Vitória',
        'Pelotas',
        'Petrolina',
        'Blumenau'
    ],
    address_formats: [
        '{{address1}}\n{{city}}/{{state_abbr}} {{zip}}', 
    ],
    address1_formats: [
        '{{street}} {{building_number}}',
        '{{street}} {{building_number}} {{address2}}', 
    ],
    address2_formats: [
        'apt. ###'
    ],
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    },
    city: function() {
        return this.random_element(this.cities);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    real_street: function() {
        return this.random_element(this.streets);
    },
    zip: function() {
        return this.numerify(this.random_element(this.zip_formats));
    }
};
module.exports = provider;

},{}],"b5hIV":[function(require,module,exports) {
var provider = {
    safe_color_names: [
        'preto',
        'marrom',
        'verde',
        'roxo',
        'azul',
        'laranja',
        'cinza',
        'amarelo',
        'branco',
        'vermelho',
        'violeta'
    ],
    color_names: [
        'Azul',
        'Azul claro',
        'Azul marinho',
        'Azul celeste',
        'Azul cobalto',
        'Azul turquesa',
        'Amarelo',
        'Amarelo claro',
        'Amarelo Mostarda',
        'Âmbar',
        'Ametista',
        'Bege',
        'Bordô',
        'Branco',
        'Branco gelo',
        'Bronze',
        'Caramelo',
        'Carmesin',
        'Caqui',
        'Coral',
        'Castanho',
        'Cereja',
        'Chocolate',
        'Ciano',
        'Cinza',
        'Cinza claro',
        'Cinza escuro',
        'Cobre',
        'Creme',
        'Dourado',
        'Esmeralda',
        'Ferrugem',
        'Grená',
        'Índigo',
        'Laranja',
        'Lilás',
        'Madeira',
        'Magenta',
        'Magenta escuro',
        'Marfim',
        'Marrom',
        'Marrom claro',
        'Oliva',
        'Oliva escura',
        'Prata',
        'Púrpura',
        'Preto',
        'Rosa',
        'Rosa choque',
        'Roxo',
        'Salmão',
        'Sépia',
        'Turquesa',
        'Verde',
        'Verde claro',
        'Verde escuro',
        'Verde limão',
        'Vermelho',
        'Vermelho escuro',
        'Vermelho claro',
        'Vermelhor tijolo',
        'Violeta'
    ]
};
module.exports = provider;

},{}],"6hNaB":[function(require,module,exports) {
var glues = [
    '.',
    '-',
    '_',
    null
];
var provider = {
    phone_formats: [
        '(##)#####-####'
    ],
    prefix: [
        'Sr.',
        'Sra.',
        'Dr.',
        'Dra'
    ],
    suffix: [
        'Júnior.',
        'Sobrinho.',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'Filho',
        'Neto'
    ],
    company_suffixes: [
        'S/A',
        '& Cia',
        'LLC',
        'Group',
        '& Filhos',
        'Ltd'
    ],
    catch_phrase_words: [
        [
            'Adaptive',
            'Advanced',
            'Ameliorated',
            'Assimilated',
            'Automated',
            'Balanced',
            'Business-focused',
            'Centralized',
            'Cloned',
            'Compatible',
            'Configurable',
            'Cross-group',
            'Cross-platform',
            'Customer-focused',
            'Customizable',
            'Decentralized',
            'De-engineered',
            'Devolved',
            'Digitized',
            'Distributed',
            'Diverse',
            'Down-sized',
            'Enhanced',
            'Enterprise-wide',
            'Ergonomic',
            'Exclusive',
            'Expanded',
            'Extended',
            'Facetoface',
            'Focused',
            'Front-line',
            'Fully-configurable',
            'Function-based',
            'Fundamental',
            'Future-proofed',
            'Grass-roots',
            'Horizontal',
            'Implemented',
            'Innovative',
            'Integrated',
            'Intuitive',
            'Inverse',
            'Managed',
            'Mandatory',
            'Monitored',
            'Multi-channelled',
            'Multi-lateral',
            'Multi-layered',
            'Multi-tiered',
            'Networked',
            'Object-based',
            'Open-architected',
            'Open-source',
            'Operative',
            'Optimized',
            'Optional',
            'Organic',
            'Organized',
            'Persevering',
            'Persistent',
            'Phased',
            'Polarised',
            'Pre-emptive',
            'Proactive',
            'Profit-focused',
            'Profound',
            'Programmable',
            'Progressive',
            'Public-key',
            'Quality-focused',
            'Reactive',
            'Realigned',
            'Re-contextualized',
            'Re-engineered',
            'Reduced',
            'Reverse-engineered',
            'Right-sized',
            'Robust',
            'Seamless',
            'Secured',
            'Self-enabling',
            'Sharable',
            'Stand-alone',
            'Streamlined',
            'Switchable',
            'Synchronised',
            'Synergistic',
            'Synergized',
            'Team-oriented',
            'Total',
            'Triple-buffered',
            'Universal',
            'Up-sized',
            'Upgradable',
            'User-centric',
            'User-friendly',
            'Versatile',
            'Virtual',
            'Visionary',
            'Vision-oriented'
        ],
        [
            '24hour',
            '24/7',
            '3rdgeneration',
            '4thgeneration',
            '5thgeneration',
            '6thgeneration',
            'actuating',
            'analyzing',
            'assymetric',
            'asynchronous',
            'attitude-oriented',
            'background',
            'bandwidth-monitored',
            'bi-directional',
            'bifurcated',
            'bottom-line',
            'clear-thinking',
            'client-driven',
            'client-server',
            'coherent',
            'cohesive',
            'composite',
            'context-sensitive',
            'contextually-based',
            'content-based',
            'dedicated',
            'demand-driven',
            'didactic',
            'directional',
            'discrete',
            'disintermediate',
            'dynamic',
            'eco-centric',
            'empowering',
            'encompassing',
            'even-keeled',
            'executive',
            'explicit',
            'exuding',
            'fault-tolerant',
            'foreground',
            'fresh-thinking',
            'full-range',
            'global',
            'grid-enabled',
            'heuristic',
            'high-level',
            'holistic',
            'homogeneous',
            'human-resource',
            'hybrid',
            'impactful',
            'incremental',
            'intangible',
            'interactive',
            'intermediate',
            'leadingedge',
            'local',
            'logistical',
            'maximized',
            'methodical',
            'mission-critical',
            'mobile',
            'modular',
            'motivating',
            'multimedia',
            'multi-state',
            'multi-tasking',
            'national',
            'needs-based',
            'neutral',
            'nextgeneration',
            'non-volatile',
            'object-oriented',
            'optimal',
            'optimizing',
            'radical',
            'real-time',
            'reciprocal',
            'regional',
            'responsive',
            'scalable',
            'secondary',
            'solution-oriented',
            'stable',
            'static',
            'systematic',
            'systemic',
            'system-worthy',
            'tangible',
            'tertiary',
            'transitional',
            'uniform',
            'upward-trending',
            'user-facing',
            'value-added',
            'web-enabled',
            'well-modulated',
            'zeroadministration',
            'zerodefect',
            'zerotolerance'
        ],
        [
            'ability',
            'access',
            'adapter',
            'algorithm',
            'alliance',
            'analyzer',
            'application',
            'approach',
            'architecture',
            'archive',
            'artificialintelligence',
            'array',
            'attitude',
            'benchmark',
            'budgetarymanagement',
            'capability',
            'capacity',
            'challenge',
            'circuit',
            'collaboration',
            'complexity',
            'concept',
            'conglomeration',
            'contingency',
            'core',
            'customerloyalty',
            'database',
            'data-warehouse',
            'definition',
            'emulation',
            'encoding',
            'encryption',
            'extranet',
            'firmware',
            'flexibility',
            'focusgroup',
            'forecast',
            'frame',
            'framework',
            'function',
            'functionalities',
            'GraphicInterface',
            'groupware',
            'GraphicalUserInterface',
            'hardware',
            'help-desk',
            'hierarchy',
            'hub',
            'implementation',
            'info-mediaries',
            'infrastructure',
            'initiative',
            'installation',
            'instructionset',
            'interface',
            'internetsolution',
            'intranet',
            'knowledgeuser',
            'knowledgebase',
            'localareanetwork',
            'leverage',
            'matrices',
            'matrix',
            'methodology',
            'middleware',
            'migration',
            'model',
            'moderator',
            'monitoring',
            'moratorium',
            'neural-net',
            'openarchitecture',
            'opensystem',
            'orchestration',
            'paradigm',
            'parallelism',
            'policy',
            'portal',
            'pricingstructure',
            'processimprovement',
            'product',
            'productivity',
            'project',
            'projection',
            'protocol',
            'securedline',
            'service-desk',
            'software',
            'solution',
            'standardization',
            'strategy',
            'structure',
            'success',
            'superstructure',
            'support',
            'synergy',
            'systemengine',
            'task-force',
            'throughput',
            'time-frame',
            'toolset',
            'utilisation',
            'website',
            'workforce'
        ]
    ],
    first_names: [
        'Aílton',
        'Aaron',
        'Abgail',
        'Alessandro',
        'Alan',
        'Aline',
        'Álvaro',
        'Alberto',
        'Amanda',
        'Ana Carolina',
        'Ana Carla',
        'Andréia',
        'Augusto',
        'Abelardo',
        'Angela',
        'Antonio',
        'Adriana',
        'Aurélio',
        'Alice',
        'Bernardo',
        'Bruno',
        'Bruna',
        'Bárbara',
        'Caio',
        'Camila',
        'Carlos',
        'Carla',
        'Carmen',
        'Carolina',
        'Célia',
        'Celso',
        'Cristina',
        'Christiane',
        'Cícero',
        'Cínthia',
        'Clodoaldo',
        'Daniela',
        'Danielle',
        'Danilo',
        'Daniel',
        'Daisy',
        'Davi',
        'Denise',
        'Diego',
        'Edilene',
        'Eduardo',
        'Elizabeth',
        'Érica',
        'Ester',
        'Eva',
        'Eduardo',
        'Eduarda',
        'Fabiana',
        'Fábio',
        'Flávia',
        'Flávio',
        'Felipe',
        'Fernanda',
        'Fernando',
        'Francisco',
        'Gustavo',
        'Giulia',
        'Giovanna',
        'Gabriel',
        'Gabriela',
        'Gil',
        'Graça',
        'Hamilton',
        'Heitor',
        'Heloísa',
        'Hugo',
        'Igor',
        'Isis',
        'Ingrid',
        'Ian',
        'João',
        'João Paulo',
        'João Vítor',
        'Joaquim',
        'José',
        'Joel',
        'Jorge',
        'Jaqueline',
        'Joana',
        'Joice',
        'Judite',
        'Júlia',
        'Karen',
        'Kátia',
        'Kelly',
        'Kevin',
        'Laércio',
        'Leandro',
        'Leonardo',
        'Leonel',
        'Lucas',
        'Luís',
        'Luana',
        'Luciana',
        'Luíza',
        'Laiza',
        'Leona',
        'Lucília',
        'Lúcia',
        'Lívia',
        'Mariana',
        'Manuela',
        'Marcela',
        'Magali',
        'Maria',
        'Mariza',
        'Maysa',
        'Mel',
        'Michelle',
        'Monica',
        'Márcio',
        'Manuel',
        'Mário',
        'Mauro',
        'Miguel',
        'Moisés',
        'Nélio',
        'Nicolas',
        'Nádia',
        'Nair',
        'Nathália',
        'Natasha',
        'Olga',
        'Olívia',
        'Otávio',
        'Orlando',
        'Osmar',
        'Paulo',
        'Plínio',
        'Pedro',
        'Paloma',
        'Paola',
        'Priscila',
        'Paula',
        'Patrícia',
        'Quitéria',
        'Rafaela',
        'Raquel',
        'Rita',
        'Renata',
        'Rosa',
        'Rebeca',
        'Regina',
        'Rafaela',
        'Rafael',
        'Reginaldo',
        'Renato',
        'Rodrigo',
        'Rodolfo',
        'Romulo',
        'Rui',
        'Sabrina',
        'Sandra',
        'Samira',
        'Sandy',
        'Samantha',
        'Selma',
        'Silvia',
        'Sophia',
        'Susana',
        'Sandro',
        'Saulo',
        'Sérgio',
        'Sidnei',
        'Tadeu',
        'Tiago',
        'Túlio',
        'Teodoro',
        'Tatiana',
        'Tainá',
        'Talita',
        'Teresa',
        'Thaís',
        'Úrsula',
        'Ulisses',
        'Valdemar',
        'Valdir',
        'Vicente',
        'Victor',
        'Valentina',
        'Valéria',
        'Vitória',
        'Virgínia',
        'Verônica',
        'Wanda',
        'Wilma',
        'Wagner',
        'Wilson',
        'Xavier',
        'Yasmin',
        'Yuri',
        'Zacarias',
        'Zélia'
    ],
    last_names: [
        'Abreu',
        'Alves',
        'Abshire',
        'Adams',
        'Almeida',
        'Anderson',
        'Araújo',
        'Azevedo',
        'Antunes',
        'Amaral',
        'Avelar',
        'Abraão',
        'Agrizzi',
        'Alcântara',
        'Alvarenga',
        'Bailey',
        'Barbosa',
        'Brito',
        'Bartell',
        'Bartoletti',
        'Barton',
        'Baro',
        'Barboza',
        'Barcelos',
        'Barone',
        'Barros',
        'Barroso',
        'Batista',
        'Blanco',
        'Brunelli',
        'Bernier',
        'Bastos',
        'Blanda',
        'Beltrame',
        'Bruen',
        'Carroll',
        'Carter',
        'Calmon',
        'Carvalho',
        'Correia',
        'Cabral',
        'Calil',
        'Carvalho',
        'Casagrande',
        'Cassini',
        'Caprini',
        'Carneiro',
        'Carmo',
        'Castro',
        'Chagas',
        'Conde',
        'Costa',
        'Costa',
        'Cruz',
        'Cahves',
        'Cardoso',
        'Cardozo',
        'Daniel',
        'de Fraga',
        'da Silva',
        'de ávila',
        'de Oliveira',
        'da Costa',
        'de Araújo',
        'de Matos',
        'de Agnolli',
        'de Andrade',
        'de Assis',
        'de Oliveira',
        'Duarte',
        'Donato',
        'dos Santos',
        'dos Reis',
        'Durgan',
        'Esteves',
        'Esposito',
        'Ernser',
        'Ferreira',
        'Fonseca',
        'Faccin',
        'Falsoni',
        'Farias',
        'Feitoza',
        'Fraga',
        'Ferrari',
        'Flora',
        'Freire',
        'Freitas',
        'Franecki',
        'Friesen',
        'Furtado',
        'Guerra',
        'Gago',
        'Gava',
        'Gazola',
        'Gomes',
        'Gonçalvez',
        'Graça',
        'Greco',
        'Guimarães',
        'Grassi',
        'Gulgowski',
        'Habib',
        'Herman',
        'Herculano',
        'Henriques',
        'Hoffman',
        'Hammes',
        'Hane',
        'Hansen',
        'Harris',
        'Hartmann',
        'Hill',
        'Jacobi',
        'Jacobs',
        'Jacobson',
        'Jesus',
        'Jordão',
        'Johnson',
        'Johnston',
        'Jones',
        'Kassulke',
        'Kautzer',
        'Keebler',
        'Keeling',
        'Klein',
        'Lage',
        'Leite',
        'Lans',
        'Lago',
        'Lanes',
        'Lindgren',
        'Larson',
        'Leme',
        'Lemos',
        'Lessa',
        'Loreto',
        'Legros',
        'Lopes',
        'Lopez',
        'Lourenço',
        'Luca',
        'Leal',
        'Machado',
        'Maggio',
        'Mesquita',
        'Macedo',
        'Magaldi',
        'Mafra',
        'Marvin',
        'Mayer',
        'Malta',
        'Mazzon',
        'Matarazzo',
        'Mello',
        'Mendes',
        'Mendonça',
        'Moraes',
        'Morais',
        'Moreira',
        'Matos',
        'Malvezzi',
        'Mills',
        'Moore',
        'Morissette',
        'Muller',
        'Nassar',
        'Nicolas',
        'Napoleão',
        'Neves',
        'Nitzsche',
        'Nolan',
        'Nascimento',
        'Neto',
        'Novaes',
        'Nogueira',
        'Nunes',
        'Oliveira',
        'Olsen',
        'Olimpio',
        'Pereira',
        'Pacheco',
        'Paes',
        'Passos',
        'Patrício',
        'Pazeto',
        'Pedrosa',
        'Peixoto',
        'Penha',
        'Piccin',
        'Powlowski',
        'Prati',
        'Prata',
        'Prates',
        'Peira',
        'Quaresma',
        'Queiroz',
        'Rath',
        'Rasmussen',
        'Rodriguez',
        'Rabelo',
        'Ramos',
        'Rangel',
        'Raposo',
        'Reis',
        'Rigo',
        'Rocha',
        'Ribeiro',
        'Rigone',
        'Ritchie',
        'Rodrigues',
        'Rosas',
        'Romaguera',
        'Russel',
        'Ryan',
        'Salles',
        'Santos',
        'Sauer',
        'Sawayn',
        'Sá',
        'Silva',
        'Santiago',
        'Santori',
        'Sartóri',
        'Schinner',
        'Scharra',
        'Schmidt',
        'Simões',
        'Schneider',
        'Serafim',
        'Schultz',
        'Schumm',
        'Shields',
        'Simonis',
        'Spencer',
        'Stark',
        'Strosin',
        'Swift',
        'Tozzi',
        'Teves',
        'Targa',
        'Toledo',
        'Thomaz',
        'Tostes',
        'Trindade',
        'Tromp',
        'Turcotte',
        'Tomé',
        'Ullrich',
        'Upton',
        'Vasconcelos',
        'Viana',
        'Vaccari',
        'Valle',
        'Vargas',
        'Vaz',
        'Villares',
        'Vidal',
        'Walsh',
        'Waters',
        'Watsica',
        'Webber',
        'West',
        'White',
        'Zardo',
        'Zannete',
        'Zanol'
    ],
    username_formats: [
        '{{last_name}}.{{first_name}}',
        '{{first_name}}.{{last_name}}',
        '{{first_name}}_{{last_name}}',
        '{{last_name}}_{{first_name}}'
    ],
    name_formats: [
        '{{name_prefix}} {{full_name}}'
    ],
    full_name_formats: [
        '{{first_name}} {{last_name}}'
    ],
    company_name_formats: [
        '{{last_name}} {{company_suffix}}'
    ],
    name: function() {
        return this.populate_one_of(this.name_formats);
    },
    username: function() {
        return this.populate_one_of(this.username_formats);
    },
    full_name: function() {
        return this.populate_one_of(this.full_name_formats);
    },
    first_name: function() {
        return this.random_element(this.first_names);
    },
    last_name: function() {
        return this.random_element(this.last_names);
    },
    password: function() {
        return this.numerify('#' + this.first_name + '##');
    },
    phone: function() {
        return this.numerify(this.random_element(this.phone_formats));
    },
    name_prefix: function() {
        return this.random_element(this.prefix);
    },
    name_suffix: function() {
        return this.random_element(this.suffix);
    },
    company_suffix: function() {
        return this.random_element(this.company_suffixes);
    },
    company_name: function() {
        return this.populate_one_of(this.company_name_formats);
    },
    catch_phrase: function() {
        var result = [];
        for(var i in this.catch_phrase_words)result.push(this.random_element(this.catch_phrase_words[i]));
        return result.join(' ');
    }
};
module.exports = provider;

},{}],"3Ga3W":[function(require,module,exports) {
var provider = {
    states: [
        'Alba',
        'Arad',
        'Argeş',
        'Bacău',
        'Bihor',
        'Bistriţa-Năsăud',
        'Botoşani',
        'Brăila',
        'Braşov',
        'Buzău',
        'Călăraşi',
        'Caraş-Severin',
        'Cluj',
        'Constanţa',
        'Covasna',
        'Dâmboviţa',
        'Dolj',
        'Galaţi',
        'Giurgiu',
        'Gorj',
        'Harghita',
        'Hunedoara',
        'Ialomiţa',
        'Iaşi',
        'Ilfov',
        'Maramureş',
        'Mehedinţi',
        'Mureş',
        'Neamţ',
        'Olt',
        'Prahova',
        'Sălaj',
        'Satu Mare',
        'Sibiu',
        'Suceava',
        'Teleorman',
        'Timiş',
        'Tulcea',
        'Vâlcea',
        'Vaslui',
        'Vrancea',
        'Bucureşti'
    ],
    state_abbrs: [
        'AB',
        'AR',
        'AG',
        'BC',
        'BH',
        'BN',
        'BT',
        'BR',
        'BV',
        'BZ',
        'CL',
        'CS',
        'CJ',
        'CT',
        'CV',
        'DB',
        'DJ',
        'GL',
        'GR',
        'GJ',
        'HR',
        'HD',
        'IL',
        'IS',
        'IF',
        'MM',
        'MH',
        'MS',
        'NT',
        'OT',
        'PH',
        'SJ',
        'SM',
        'SB',
        'SV',
        'TR',
        'TM',
        'TL',
        'VL',
        'VS',
        'VN',
        'B'
    ],
    cities: [
        'Bucureşti',
        'Iaşi',
        'Cluj-Napoca',
        'Timişoara',
        'Constanţa',
        'Craiova',
        'Galaţi',
        'Braşov',
        'Ploieşti',
        'Brăila',
        'Oradea',
        'Bacău',
        'Arad',
        'Piteşti',
        'Sibiu',
        'Târgu Mureş',
        'Baia Mare',
        'Buzău',
        'Satu Mare',
        'Botoşani',
        'Râmnicu Vâlcea',
        'Suceava',
        'Piatra Neamţ',
        'Drobeta-Turnu Severin',
        'Focşani',
        'Târgu Jiu',
        'Tulcea',
        'Târgovişte',
        'Reşiţa',
        'Bistriţa',
        'Slatina',
        'Hunedoara',
        'Călăraşi',
        'Vaslui',
        'Giurgiu',
        'Roman',
        'Deva',
        'Bârlad',
        'Alba Iulia',
        'Zalău',
        'Sfântu Gheorghe',
        'Turda',
        'Mediaş',
        'Slobozia',
        'Oneşti',
        'Alexandria',
        'Petroşani',
        'Lugoj',
        'Medgidia',
        'Paşcani',
        'Tecuci',
        'Miercurea Ciuc',
        'Sighetu Marmaţiei',
        'Mangalia',
        'Râmnicu Sărat',
        'Câmpina',
        'Dej',
        'Câmpulung',
        'Odorheiu Secuiesc',
        'Reghin',
        'Făgăraş',
        'Caracal',
        'Feteşti',
        'Curtea de Argeş',
        'Sighişoara',
        'Roşiorii de Vede',
        'Dorohoi',
        'Turnu Măgurele',
        'Fălticeni',
        'Huşi',
        'Vulcan',
        'Rădăuţi',
        'Olteniţa',
        'Lupeni',
        'Caransebeş',
        'Săcele',
        'Câmpia Turzii',
        'Târnăveni',
        'Sebeş',
        'Aiud',
        'Motru',
        'Carei',
        'Moineşti',
        'Codlea',
        'Orăştie',
        'Gherla',
        'Moreni',
        'Drăgăşani',
        'Târgu Secuiesc',
        'Băileşti',
        'Câmpulung Moldovenesc',
        'Blaj',
        'Gheorgheni',
        'Calafat',
        'Adjud',
        'Salonta',
        'Urziceni',
        'Marghita',
        'Brad',
        'Vatra Dornei',
        'Topliţa',
        'Orşova',
        'Beiuş'
    ],
    street_prefixes: [
        'Strada',
        'Str.',
        'Bulevardul',
        'Bd.',
        'Calea',
        'Fundătura',
        'Aleea',
        'Piața',
        'Intrarea',
        'Șoseaua'
    ],
    street_suffixes: [
        'Alexandru',
        'Băiculești',
        'Făurei',
        'Hrisovului',
        'Mateloților',
        'Pajurei',
        'Priporului',
        'Privighetorilor',
        'Oteșani',
        'Pantelimon',
        'Piatra Mare',
        'Romula',
        'Sargetia',
        'Siliștea',
        'Sinaia',
        'Socului',
        'Sucidava',
        'Teiul Doamnei',
        'Tibiscum',
        'Vergului',
        'Zarandului',
        'Cioplea',
        'Ciucea',
        'Florin Ciungan',
        'Codrii Neamțului',
        'Fetești',
        'Fizicienilor',
        'Foișorului',
        'Fuiorului',
        'Onisifor Ghibu',
        'Giurgeni',
        'Vasile Goldiș',
        'Iosif Hodoș',
        'Ianca',
        'Ilioara',
        'Jieneasca',
        'Laceni',
        'Lăcrămioarei',
        'Leorda',
        'Lipănești',
        'Lunca Bradului',
        'Lunca Moldovei',
        'Lunca Mureșului',
        'Mădărași',
        'Mănăstirea Agapia',
        'Mizil',
        'Moreni',
        'Secuilor',
        'Slătioara',
        'Someșul Cald',
        'Someșul Mare',
        'Someșul Mic',
        'Stupilor',
        'Suter',
        'Țebea',
        'Terasei',
        'Tohani',
        'Tomești',
        'Trestiana',
        'Ucea',
        'Uioara',
        'Constantin Brâncoveanu',
        'Dimitrie Cantemir',
        'Colectorului',
        'George Coșbuc, poet',
        'Libertății',
        'Mărășești',
        'Metalurgiei',
        'Alexandru Obregia',
        'Regina Maria',
        'Gheorghe Șincai',
        'Tineretului',
        'Eroilor',
        'Mihail Kogălniceanu',
        'Libertății',
        'Gheorghe Gh. Marinescu',
        'Națiunile Unite',
        'Regina Elisabeta',
        'Schitu Măgureanu',
        'Unirii',
        'Tudor Vladimirescu',
        'Constructorilor',
        'Geniului',
        'Ghencea',
        'Iuliu Maniu',
        'Regiei',
        'Timișoara',
        'Vasile Milea',
        'Chișinău',
        'Dacia',
        'Ferdinand I',
        'Ghica Tei',
        'Lacul Tei',
        'Pierre de Coubertin',
        'Dimitrie Pompeiu',
        'Basarabia',
        'Ion C. Brătianu',
        'Burebista',
        'Camil Ressu',
        'Carol I',
        'Corneliu Coposu',
        'Decebal',
        'Energeticienilor',
        'Octavian Goga',
        'Nicolae Grigorescu',
        'Hristo Botev',
        'Mircea Vodă',
        'Theodor Pallady',
        'Râmnicu Sărat',
        'Regina Elisabeta'
    ],
    zip_formats: [
        '#####'
    ],
    street_formats: [
        '{{street_prefix}} {{street_suffix}}'
    ],
    address1_formats: [
        '{{street}} {{building_number}}'
    ],
    address_formats: [
        '{{address1}}\n {{zip}} {{city}}, {{state}}', 
    ],
    city: function() {
        return this.random_element(this.cities);
    },
    state: function() {
        return this.populate_one_of(this.states);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    building_number: function() {
        return this.integer(1, 200);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    }
};
module.exports = provider;

},{}],"axcKB":[function(require,module,exports) {
var moment = require('moment');
moment.locale('ro');
var provider = {
    date: function(format) {
        format = format || 'DD.MM.YYYY';
        return this.moment.format(format);
    }
};
module.exports = provider;

},{"moment":"jwcsj"}],"c8VFA":[function(require,module,exports) {
var provider = {
    prefix: [
        'Dl.',
        'Dna.',
        'Dra.',
        'Dr.',
        'Prof. Dr.',
        'Ing.'
    ],
    company_suffixes: [
        'SA',
        'SRL',
        'PFA'
    ],
    catch_phrase_words: [
        [
            'Adaptive',
            'Avansat',
            'Ameliorat',
            'Asimilate',
            'Automatizat',
            'Echilibrat',
            'Concentrat de afaceri',
            'Centralizat de',
            'Clonat',
            'Compatibil',
            'Configurabil',
            'Cros-grup',
            'Traversare-platformă',
            'Orientată spre client',
            'Personalizabile',
            'Descentralizate',
            'Inginerie',
            'Delegate',
            'Digitalizat',
            'Distribuit',
            'Divers',
            'Dimensiuni de jos',
            'Îmbunătăţită',
            'Nivel de întreprindere',
            'Ergonomice',
            'Exclusiv',
            'Extins',
            'Extins',
            'Față în față',
            'Concentrat',
            'Prima linie',
            'Complet configurabil',
            'Bazate pe funcţie',
            'Fundamentale',
            'De viitor',
            'De bază',
            'Orizontale',
            'Pus în aplicare',
            'Inovatoare',
            'Integrat',
            'Intuitiv',
            'Inversa',
            'Gestionate',
            'Obligatorii',
            'Monitorizate',
            'Multi-canalizat',
            'Multi-laterale',
            'Multi-strat',
            'Mai multe niveluri',
            'În reţea',
            'Bazate pe obiect',
            'Proiectat de deschidere',
            'Open-source',
            'Faptul generator',
            'Optimizat',
            'Opţional',
            'Organice',
            'Organizat',
            'Perseverent',
            'Persistente',
            'Eliminate',
            'Polarizate',
            'Drept de preempţiune',
            'Proactivă',
            'Concentrat de profit',
            'Profund',
            'Programabile',
            'Progresivă',
            'Cheie publică',
            'Concentrat de calitate',
            'Reactive',
            'Realiniat',
            'Re-contextualizată',
            'Re-industriale',
            'Redus',
            'Inginerie inversă',
            'Dreptul de dimensiuni',
            'Robustă',
            'Fără sudură',
            'Asigurat',
            'Auto-care să permită',
            'Poate fi partajat',
            'Stand-alone',
            'Simplificat',
            'Comutare',
            'Sincronizate',
            'Sinergice',
            'Synergizat',
            'Echipa-orientate spre',
            'Total',
            'Triple-buffered',
            'Universal',
            'Dimensiuni de sus',
            'Upgradabil',
            'Utilizator-centrice',
            'Uşor de utilizat',
            'Versatil',
            'Virtual',
            'Vizionar',
            'Viziune-orientate spre'
        ],
        [
            '24 de ore',
            '24/7',
            '3rdgeneration',
            '4thgeneration',
            '5thgeneration',
            '6thgeneration',
            'actionare',
            'analiza',
            'asimetric',
            'asincron',
            'atitudine orientată',
            'fundal',
            'monitorizate de lăţime de bandă',
            'bi-directionala',
            'bifurcat',
            'line de jos',
            'clar-gândire',
            'bazate pe client',
            'client-server',
            'coerent',
            'coeziune',
            'compozit',
            'contact-sensitive',
            'contextual bazate',
            'pe bază de conţinut',
            'dedicat',
            'bazate pe cerere',
            'didactice',
            'direcţională',
            'discret',
            'disintermediate',
            'dinamic',
            'Eco-centrice',
            'responsabilizarea',
            'care să cuprindă',
            'bine bazate',
            'executiv',
            'explicite',
            'îl secretă',
            'tolerante',
            'prim-plan',
            'proaspete de gândire',
            'gama completa',
            'la nivel mondial',
            'grila-activat',
            'euristică',
            'la nivel înalt',
            'holistică',
            'omogen',
            'resurse umane',
            'hibrid',
            'impact',
            'elementare',
            'necorporale',
            'interactiv',
            'intermediar',
            'ultimul răcnet',
            'locale',
            'logistice',
            'maximizat',
            'metodice',
            'critice',
            'mobil',
            'modulare',
            'motivarea',
            'multimedia',
            'multi-stat',
            'multi-tasking',
            'naţionale',
            'bazate pe nevoile',
            'neutru',
            'NextGeneration',
            'nevolatile',
            'orientat pe obiect',
            'optim',
            'optimizarea',
            'radicală',
            'în timp real',
            'reciproce',
            'regionale',
            'receptiv',
            'scalabile',
            'secundar',
            'orientate pe solutie',
            'stabil',
            'statice',
            'sistematică',
            'sistemice',
            'per sistem',
            'corporale',
            'terţiar',
            'tranzitorii',
            'uniforme',
            'trend ascendent',
            'orientate spre utilizator',
            'valoare adăugată',
            'bazat pe web',
            'bine modulat',
            'zeroadministration',
            'zerodefect',
            'zerotolerance'
        ],
        [
            'capacitatea de',
            'acces',
            'adaptor',
            'Algoritmul',
            'Alianţa',
            'analizor',
            'cerere',
            'abordare',
            'arhitectura',
            'Arhiva',
            'inteligență artificială',
            'matrice',
            'atitudinea',
            'Benchmark-uri',
            'management bugete',
            'capacitatea de',
            'capacitate',
            'provocare',
            'circuit',
            'colaborare',
            'complexitatea',
            'Conceptul',
            'conglomerat',
            'de urgenţă',
            'Core',
            'loialitate clienți',
            'baza de date',
            'depozit de date',
            'definiţia',
            'emulare',
            'codificarea',
            'criptare',
            'extranet',
            'firmware-ul',
            'flexibilitate',
            'focusgroup',
            'Prognoza',
            'cadru',
            'cadru',
            'funcţia',
            'functionalitati',
            'GraphicInterface',
            'Groupware',
            'GraphicalUserInterface',
            'hardware-ul',
            'birou de ajutor',
            'ierarhie',
            'hub-ul',
            'punerea în aplicare',
            'info-mediaries',
            'infrastructura',
            'Iniţiativa',
            'instalare',
            'instructionset',
            'interfata',
            'internet',
            'intranet',
            'knowledgeuser',
            'baza de cunostinte',
            'localareanetwork',
            'efectul de levier',
            'matrici',
            'Matrix',
            'metodologia',
            'middleware',
            'migraţia',
            'modelul',
            'Moderator',
            'monitorizare',
            'moratoriu',
            'nete neuronale',
            'arhitectură deschisă',
            'opensystem',
            'orchestratie',
            'paradigmă',
            'paralelism',
            'Politica',
            'Portal',
            'structura de preâ',
            'îmbunătățire procese',
            'produs',
            'productivitate',
            'proiect',
            'proiecţie',
            'Protocolul',
            'securedline',
            'birou de servicii',
            'software-ul',
            'soluţie',
            'standardizare',
            'Strategia',
            'structura',
            'succesul',
            'suprastructură',
            'suport',
            'Sinergia',
            'motor sistem',
            'Task-force',
            'un debit',
            'interval de timp',
            'set de instrumente',
            'utilizarea',
            'site-ul',
            'forţa de muncă'
        ]
    ],
    // source http://www.name-statistics.org/ro/prenumecomune.php
    first_names: [
        'Adina',
        'Adrian',
        'Adriana',
        'Alexandra',
        'Alexandra Elena',
        'Alexandra Ioana',
        'Alexandra Maria',
        'Alexandru',
        'Alexandru Cristian',
        'Alexandru Ionuț',
        'Alexandru Mihai',
        'Alin',
        'Alina',
        'Alina Elena',
        'Alina Maria',
        'Alina Mihaela',
        'Ana',
        'Ana Maria',
        'Anamaria',
        'Anca',
        'Anca Elena',
        'Anca Maria',
        'Ancuța',
        'Andra',
        'Andrea',
        'Andreea',
        'Andreea Cristina',
        'Andreea Elena',
        'Andreea Ioana',
        'Andreea Maria',
        'Andreea Mihaela',
        'Andrei',
        'Angela',
        'Aurel',
        'Aurelia',
        'Bianca',
        'Bogdan',
        'Bogdan Alexandru',
        'Bogdan Ionuț',
        'Brândușa',
        'Camelia',
        'Carmen',
        'Cătălin',
        'Cătălina',
        'Ciprian',
        'Claudia',
        'Claudiu',
        'Constantin',
        'Corina',
        'Cornel',
        'Cornelia',
        'Cosmin',
        'Costel',
        'Cristian',
        'Cristina',
        'Cristina Elena',
        'Cristina Maria',
        'Dan',
        'Daniel',
        'Daniela',
        'Dănuț',
        'Diana',
        'Diana Maria',
        'Dorin',
        'Dorina',
        'Dragoș',
        'Dumitru',
        'Elena',
        'Elena Alina',
        'Elena Andreea',
        'Elena Cristina',
        'Elena Daniela',
        'Elena Roxana',
        'Emil',
        'Emilia',
        'Eugen',
        'Florentina',
        'Florian',
        'Florin',
        'Florina',
        'Gabriel',
        'Gabriela',
        'George',
        'Georgeta',
        'Georgian',
        'Georgiana',
        'Gheorghe',
        'Ileana',
        'Ilie',
        'Ioan',
        'Ioana',
        'Ioana Alexandra',
        'Ioana Cristina',
        'Ioana Maria',
        'Ion',
        'Ionel',
        'Ionela',
        'Ionuț',
        'Ionut Alexandru',
        'Ionuț Cătălin',
        'Ionuț Daniel',
        'Irina',
        'Iulia',
        'Iulian',
        'Iuliana',
        'Laura',
        'Laurențiu',
        'Lavinia',
        'Liliana',
        'Liviu',
        'Loredana',
        'Lucian',
        'Luminița',
        'Mădălina',
        'Maria',
        'Maria Alexandra',
        'Maria Cristina',
        'Maria Magdalena',
        'Marian',
        'Mariana',
        'Marinela',
        'Marius',
        'Marius Ionuț',
        'Melinda',
        'Mihaela',
        'Mihai',
        'Mihai Alexandru',
        'Mihail',
        'Mircea',
        'Mirela',
        'Monica',
        'Nicolae',
        'Nicoleta',
        'Nicușor',
        'Oana',
        'Oana Maria',
        'Octavian',
        'Ovidiu',
        'Paul',
        'Paula',
        'Petrică',
        'Petronela',
        'Petru',
        'Radu',
        'Raluca',
        'Raluca Elena',
        'Ramona',
        'Răzvan',
        'Robert',
        'Rodica',
        'Roxana',
        'Roxana Elena',
        'Roxana Maria',
        'Sebastian',
        'Sergiu',
        'Silvia',
        'Silviu',
        'Simona',
        'Sorin',
        'Ștefan',
        'Ștefania',
        'Teodora',
        'Tudor',
        'Valentin',
        'Valentina',
        'Vasile',
        'Veronica',
        'Victor',
        'Violeta',
        'Viorel',
        'Viorica',
        'Vlad'
    ],
    // source: http://www.name-statistics.org/ro/numedefamiliecomune.php
    last_names: [
        'Adam',
        'Albu',
        'Aldea',
        'Alexandru',
        'Alexe',
        'Andrei',
        'Anghel',
        'Anton',
        'Apostol',
        'Ardelean',
        'Avram',
        'Baciu',
        'Badea',
        'Bălan',
        'Balint',
        'Banu',
        'Barbu',
        'Bejan',
        'Blaga',
        'Boboc',
        'Bogdan',
        'Bota',
        'Bratu',
        'Bucur',
        'Burlacu',
        'Călin',
        'Cătană',
        'Cazacu',
        'Chiriac',
        'Chirilă',
        'Chiriță',
        'Chiș',
        'Chivu',
        'Ciobanu',
        'Ciocan',
        'Cîrstea',
        'Ciucă',
        'Cojocaru',
        'Coman',
        'Constantin',
        'Constantinescu',
        'Cornea',
        'Cosma',
        'Costache',
        'Costea',
        'Costin',
        'Cozma',
        'Crăciun',
        'Crețu',
        'Crișan',
        'Cristea',
        'Croitoru',
        'Cucu',
        'Damian',
        'Dan',
        'Danciu',
        'Dănilă',
        'Dascălu',
        'David',
        'Diaconescu',
        'Diaconu',
        'Dima',
        'Dincă',
        'Dinu',
        'Dobre',
        'Dogaru',
        'Drăgan',
        'Drăghici',
        'Drăgoi',
        'Dragomir',
        'Dumitrache',
        'Dumitrașcu',
        'Dumitrescu',
        'Dumitru',
        'Duță',
        'Enache',
        'Ene',
        'Epure',
        'Fărcaș',
        'Filip',
        'Florea',
        'Florescu',
        'Gal',
        'Gavrilă',
        'Georgescu',
        'Gheorghe',
        'Gheorghiță',
        'Gheorghiu',
        'Gherman',
        'Ghiță',
        'Grecu',
        'Grigoraș',
        'Grigore',
        'Grosu',
        'Groza',
        'Iacob',
        'Iancu',
        'Ichim',
        'Ignat',
        'Ilie',
        'Iliescu',
        'Ion',
        'Ionescu',
        'Ioniță',
        'Iordache',
        'Irimia',
        'Ispas',
        'Istrate',
        'Ivan',
        'Lazăr',
        'Luca',
        'Lungu',
        'Lupu',
        'Macovei',
        'Maftei',
        'Manea',
        'Manolache',
        'Manole',
        'Marcu',
        'Mărginean',
        'Marian',
        'Marin',
        'Marinescu',
        'Martin',
        'Matei',
        'Maxim',
        'Micu',
        'Mihai',
        'Mihăilă',
        'Mihalache',
        'Mihalcea',
        'Militaru',
        'Mircea',
        'Mirea',
        'Miron',
        'Miu',
        'Mocanu',
        'Moise',
        'Moldovan',
        'Moldoveanu',
        'Molnar',
        'Morar',
        'Moraru',
        'Muntean',
        'Munteanu',
        'Mureșan',
        'Mușat',
        'Năstase',
        'Neacșu',
        'Neagoe',
        'Neagu',
        'Nechita',
        'Necula',
        'Nedelcu',
        'Negoiță',
        'Negrea',
        'Negru',
        'Nica',
        'Nicolae',
        'Niculae',
        'Niculescu',
        'Nistor',
        'Niță',
        'Nițu',
        'Oancea',
        'Olariu',
        'Olaru',
        'Oltean',
        'Olteanu',
        'Oprea',
        'Păduraru',
        'Pană',
        'Panait',
        'Paraschiv',
        'Pasca',
        'Pascu',
        'Pătrașcu',
        'Pătru',
        'Păun',
        'Pavel',
        'Petcu',
        'Petre',
        'Petrescu',
        'Pintilie',
        'Pîrvu',
        'Pop',
        'Popa',
        'Popescu',
        'Popovici',
        'Preda',
        'Prodan',
        'Puiu',
        'Radu',
        'Rădulescu',
        'Roman',
        'Roșca',
        'Roșu',
        'Rotaru',
        'Rus',
        'Rusu',
        'Sabău',
        'Șandor',
        'Sandu',
        'Sava',
        'Savu',
        'Șerban',
        'Sima',
        'Simion',
        'Simon',
        'Sîrbu',
        'Soare',
        'Staicu',
        'Stan',
        'Stanciu',
        'Stancu',
        'Stănescu',
        'Ștefan',
        'Ștefănescu',
        'Stoian',
        'Stoica',
        'Stroe',
        'Suciu',
        'Tamaș',
        'Tănasă',
        'Tănase',
        'Tătaru',
        'Teodorescu',
        'Toader',
        'Toma',
        'Tomescu',
        'Trandafir',
        'Trif',
        'Trifan',
        'Tudor',
        'Tudorache',
        'Tudose',
        'Turcu',
        'Ungureanu',
        'Ursu',
        'Văduva',
        'Varga',
        'Vasile',
        'Vasilescu',
        'Vintilă',
        'Vișan',
        'Vlad',
        'Voicu',
        'Voinea',
        'Zaharia',
        'Zamfir'
    ],
    company_names: [
        'Com - G.M.G.',
        'Donatelo',
        'Ser & Ban S.C.C.',
        'Zerma International',
        'Maestro Media',
        'Altry - Monde Consulting',
        'Alcores International 2007',
        'Ef-Concepts Prestigious Marketing',
        'Ecopower Construct',
        'Pecun Construct',
        'Guiarte 2008',
        'Granasal 2007',
        'Star Faleza House',
        'Ambalux',
        'Callcenteronline.Com',
        'Alba Dacia Invest',
        'Dumaris Exchange',
        'General Montaj Csicsari',
        'Andrăşescu Company',
        'Westbau Montage',
        'Mocuta Serv',
        'Aleu Imperium',
        'Metal Arrows',
        'Andromar',
        'Tailor Comerţ',
        'Luminanov',
        'Netzach',
        'Trebau Roberto',
        'Fraker',
        'Dr. Kollar Coaching Centre',
        'Fortrend Gifts',
        'Ajkarel Trade',
        'Kevmex Trade',
        'Unio Global Work',
        'Dublino Horeca',
        'Varad Trade',
        'Merkol Oil',
        'Internaţional Data Entry',
        'Szendi Metal',
        'Romvest Contact',
        'White Vessel',
        'Basilicus Construct',
        'Neo Alchem Trade',
        'Neorom Trade',
        'Dobantrak',
        'Voiculeana Cat',
        'Double C Quality',
        'Fram Impex',
        'Airkab Serv',
        'Sly Invest',
        'Westbuild',
        'Lug & Aln',
        'Drynet Trading',
        'Lorinel',
        'Sport Mix 2010',
        'Dn Star',
        'Naukra',
        'Mms Tivo Invest',
        'Union Contact',
        'Reality Center',
        'Trusendi Ro',
        'Szirovitza M Art',
        'S.E.F.O.P.',
        'Ruth Company',
        'Cat-Flo-Imo',
        'Direct Trading Zona 41 2012',
        'Group Vanzari Expres'
    ],
    // source: ../fr_FR ;-)
    username_formats: [
        'X{{last_name}}',
        '{{first_name}}.{{last_name}}',
        '{{first_name}}{{last_name}}',
        '{{last_name}}_{{first_name}}', 
    ],
    company_name: function() {
        return this.random_element(this.company_names);
    },
    username: function() {
        return this.letterify(this.populate_one_of(this.username_formats)).normalize('NFD').replace(/\W/g, "").toLowerCase();
    },
    catch_phrase: function() {
        var result = [];
        for(var i in this.catch_phrase_words)result.push(this.random_element(this.catch_phrase_words[i]));
        return result.join(' ');
    }
};
module.exports = provider;

},{}],"5zzYP":[function(require,module,exports) {
var provider = {
    city_prefixes: [
        'город'
    ],
    region_suffixes: [
        'область'
    ],
    street_prefixes: [
        'пер.',
        'ул.',
        'пр.',
        'шоссе',
        'пл.',
        'бульвар',
        'въезд',
        'спуск',
        'проезд',
        'наб.', 
    ],
    zip_formats: [
        '######'
    ],
    countries: [
        'Украина',
        'Российская Федерация',
        'США',
        'Канада',
        'Австралия',
        'Австрия',
        'Азербайджан',
        'Аландские острова',
        'Албания',
        'Алжир',
        'Американские острова Самоа',
        'Ангилья',
        'Ангола',
        'Андорра',
        'Антарктика',
        'Антигуа и Барбуда',
        'Аргентина',
        'Армения',
        'Аруба',
        'Афганистан, Исламская Республика',
        'Багамы',
        'Бангладеш',
        'Барбадос',
        'Бахрейн',
        'Белиз',
        'Белоруссия',
        'Бельгия',
        'Бермудские Острова',
        'Болгария',
        'Боливия',
        'Босния и Герцеговина',
        'Ботсвана',
        'Бразилия',
        'Британская территория Индийского океана',
        'Бруней Даруссалам',
        'Буркина Фасо',
        'Бурунди',
        'Бутан',
        'Вануату',
        'Великобритания',
        'Венгрия',
        'Венесуэла',
        'Виргинские о-ва, Великобритания',
        'Виргинские о-ва, США',
        'Восточный Тимор',
        'Вьетнам',
        'Габон',
        'Гаити',
        'Гайана',
        'Гамбия',
        'Гана',
        'Гваделупа',
        'Гватемала',
        'Гвинея',
        'Гвинея-Биссау',
        'Германия',
        'Гибралтар',
        'Гонгконг',
        'Гондурас',
        'Государство-город Ватикан',
        'Гренада',
        'Гренландия',
        'Греция',
        'Грузия',
        'Гуам',
        'Дания',
        'Джерси',
        'Джибути',
        'Доминиканская Республика',
        'Египет',
        'Замбия',
        'Западная Сахара',
        'Зимбабве',
        'Израиль',
        'Индия',
        'Индонезия',
        'Иордания',
        'Ирак',
        'Иран',
        'Ирландия',
        'Исландия',
        'Испания',
        'Италия',
        'Йемен',
        'Казахстан, Республика',
        'Каймановы Острова',
        'Камбоджа',
        'Камерун',
        'Катар',
        'Кения',
        'Кипр',
        'Кирибати',
        'Китай',
        'Кокосовые острова',
        'Колумбия',
        'Коморские Острова',
        'Конго, Демократическая Республика',
        'Конго, Республика',
        'Коста-Рика',
        'Кот-д’Ивуар',
        'Куба',
        'Кувейт',
        'Кыргызстан',
        'Лаос',
        'Латвия',
        'Лесото',
        'Либерия',
        'Ливан',
        'Ливия',
        'Литва',
        'Лихтенштейн',
        'Люксембург',
        'Маврикий',
        'Мавритания',
        'Мадагаскар, Республика',
        'Майотта',
        'Макао',
        'Македония, Республика',
        'Малави',
        'Малайзия',
        'Мали',
        'Мальдивы',
        'Мальта',
        'Марокко',
        'Мартиник',
        'Маршалловы Острова',
        'Мексика',
        'Мелкие отдаленные острова США',
        'Мозамбик',
        'Молдова',
        'Монако',
        'Монголия',
        'Монтсеррат',
        'Мьянма',
        'Намибия',
        'Науру',
        'Непал',
        'Нигерия',
        'Нигерия',
        'Нидерландские Антильские острова',
        'Нидерланды',
        'Никарагуа',
        'Ниуэ',
        'Новая Зеландия',
        'Новая Каледония',
        'Норвегия',
        'Объединённые Арабские Эмираты',
        'О. Гернси',
        'Оман',
        'Острова Зеленого Мыса',
        'Острова Кука',
        'Острова Теркс И Кайкос',
        'Острова Уоллис и Футуна',
        'Острова Херд и Макдональд',
        'Остров Буве',
        'Остров Доминика',
        'Остров Мэн',
        'Остров Норфолк',
        'Остров Святого Мартина',
        'Остров Святой Елены',
        'О. Южная Георгия И Южные Сандвичевы Острова',
        'Пакистан',
        'Палау',
        'Палестина',
        'Панама',
        'Папуа-Новая Гвинея',
        'Парагвай',
        'Перу',
        'Питкерн',
        'Польша',
        'Португалия',
        'Пуэрто-Рико',
        'Реюньон',
        'Рождественские острова',
        'Руанда',
        'Румыния',
        'Сальвадор',
        'Самоа',
        'Сан-Марино',
        'Сан-Томе и Принсипи',
        'Саудовская Аравия',
        'Свазиленд',
        'Северная Корея',
        'Северные Марианские Острова',
        'Сейшельские Острова',
        'Сен-Бартельми',
        'Сенегал',
        'Сен-Пьер и Микелон',
        'Сент-Винсент и Гренадины',
        'Сент-Киттс и Невис',
        'Сент-Люсия',
        'Сербия',
        'Сербия и Черногория, Государственный Союз',
        'Сингапур',
        'Сирия',
        'Словацкая республика',
        'Словения',
        'Соломонские острова',
        'Сомали',
        'Судан',
        'Суринам',
        'Сьерра-Леоне',
        'Таджикистан',
        'Тайвань',
        'Тайланд',
        'Танзания',
        'Того',
        'Токелау',
        'Тонга',
        'Тринидад и Тобаго',
        'Тувалу',
        'Тунис',
        'Туркмения',
        'Турция',
        'Уганда',
        'Узбекистан',
        'Уругвай',
        'Фарерские острова',
        'Федеративные Штаты Микронезии',
        'Фиджи',
        'Филиппины',
        'Финляндия',
        'Фолклендские о-ва',
        'Франция',
        'Французская Гвинея',
        'Французская Полинезия',
        'Французские Южные Территории',
        'Хорватия',
        'Чад',
        'Черногория',
        'Чешская Республика',
        'Чили',
        'Швейцария',
        'Швеция',
        'Шпицберген и Ян-Майен',
        'Шри-Ланка',
        'Эквадор',
        'Экваториальная Гвинея',
        'Эритрея',
        'Эстония',
        'Эфиопия',
        'Южная Корея',
        'Южно-Африканская Республика',
        'Ямайка',
        'Япония', 
    ],
    regions: [
        'Амурская',
        'Архангельская',
        'Астраханская',
        'Белгородская',
        'Брянская',
        'Владимирская',
        'Волгоградская',
        'Вологодская',
        'Воронежская',
        'Ивановская',
        'Иркутская',
        'Калининградская',
        'Калужская',
        'Кемеровская',
        'Кировская',
        'Костромская',
        'Курганская',
        'Курская',
        'Ленинградская',
        'Липецкая',
        'Магаданская',
        'Московская',
        'Мурманская',
        'Нижегородская',
        'Новгородская',
        'Новосибирская',
        'Омская',
        'Оренбургская',
        'Орловская',
        'Пензенская',
        'Псковская',
        'Ростовская',
        'Рязанская',
        'Самарская',
        'Саратовская',
        'Сахалинская',
        'Свердловская',
        'Смоленская',
        'Тамбовская',
        'Тверская',
        'Томская',
        'Тульская',
        'Тюменская',
        'Ульяновская',
        'Челябинская',
        'Читинская',
        'Ярославская', 
    ],
    cities: [
        'Балашиха',
        'Видное',
        'Волоколамск',
        'Воскресенск',
        'Дмитров',
        'Домодедово',
        'Дорохово',
        'Егорьевск',
        'Зарайск',
        'Истра',
        'Кашира',
        'Клин',
        'Коломна',
        'Красногорск',
        'Лотошино',
        'Луховицы',
        'Люберцы',
        'Можайск',
        'Москва',
        'Мытищи',
        'Наро-Фоминск',
        'Ногинск',
        'Одинцово',
        'Озёры',
        'Орехово-Зуево',
        'Павловский Посад',
        'Подольск',
        'Пушкино',
        'Раменское',
        'Сергиев Посад',
        'Серебряные Пруды',
        'Серпухов',
        'Солнечногорск',
        'Ступино',
        'Талдом',
        'Чехов',
        'Шатура',
        'Шаховская',
        'Щёлково', 
    ],
    streets: [
        'Косиора',
        'Ладыгина',
        'Ленина',
        'Ломоносова',
        'Домодедовская',
        'Гоголя',
        '1905 года',
        'Чехова',
        'Сталина',
        'Космонавтов',
        'Гагарина',
        'Славы',
        'Бухарестская',
        'Будапештсткая',
        'Балканская'
    ],
    address_formats: [
        "{{zip}}, {{region}} {{region_suffix}}, {{city_prefix}} {{city}}, {{street_prefix}} {{street}}, {{building_number}}", 
    ],
    region_suffix: function() {
        return this.random_element(this.region_suffixes);
    },
    region: function() {
        return this.random_element(this.regions);
    },
    city: function() {
        return this.random_element(this.cities);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    },
    street: function() {
        return this.random_element(this.streets);
    }
};
module.exports = provider;

},{}],"buzE7":[function(require,module,exports) {
var provider = {
    safe_color_names: [
        'черный',
        'темно-бордовый',
        'зеленый',
        'темно-синий',
        'оливковый',
        'фиолетовый',
        'зеленовато-голубой',
        'синий',
        'серебро',
        'серый',
        'желтый',
        'фуксия',
        'цвет морской волны',
        'белый'
    ],
    color_names: [
        'Военно-воздушный синий',
        'Синяя Элис',
        'Ализариновый красный',
        'Миндаль Крайола',
        'Амарантовый',
        'Янтарный',
        'Американская роза',
        'Аметистовый',
        'Матовый белый',
        'Античный белый',
        'Яблочно-зеленый',
        'Спаржа',
        'Цвет морской волны',
        'Аквамариновый',
        'Армейский зелёный',
        'Мышьяковый',
        'Лазурный',
        'бежевый',
        'Бистр',
        'Горькая радость',
        'Чёрный',
        'Белокурый',
        'Синий',
        'Вода пляжа Бонди',
        'Латунный',
        'Ярко-зелёный',
        'Сиена жжёная',
        'Хаки',
        'кардинал',
        'Морковный',
        'Лазурный',
        'Каштановый',
        'Шоколадный',
        'Коричный',
        'Кобальт синий',
        'Кремовый',
        'Циан',
        'индиго',
        'Фуксия',
        'Кирпичный',
        'Льняной',
        'Золотой',
        'Зелёный',
        'Индиго',
        'Нефритовый',
        'Сиреневый',
        'Охра',
        'Панг',
        'Берлинская лазурь',
        'Красновато-коричневый',
        'Сангрия',
        'Сепия',
        'Болотный',
        'Тициановый',
        'Чертополох',
        'Глициния',
        'Вино',
        'Циннвальдит', 
    ]
};
module.exports = provider;

},{}],"bVWgY":[function(require,module,exports) {
var en_to_ru = {
    'а': 'a',
    'А': 'A',
    'б': 'b',
    'Б': 'B',
    'в': 'v',
    'В': 'V',
    'г': 'g',
    'Г': 'G',
    'д': 'd',
    'Д': 'D',
    'е': 'e',
    'Е': 'E',
    'ё': 'jo',
    'Ё': 'JO',
    'ж': 'zh',
    'Ж': 'ZH',
    'з': 'z',
    'З': 'Z',
    'и': 'i',
    'И': 'I',
    'й': 'j',
    'Й': 'J',
    'к': 'k',
    'К': 'K',
    'л': 'l',
    'Л': 'L',
    'м': 'm',
    'М': 'M',
    'н': 'n',
    'Н': 'N',
    'о': 'o',
    'О': 'O',
    'п': 'p',
    'П': 'P',
    'р': 'r',
    'Р': 'R',
    'с': 's',
    'С': 'S',
    'т': 't',
    'Т': 'T',
    'у': 'u',
    'У': 'U',
    'ф': 'f',
    'Ф': 'F',
    'х': 'h',
    'Х': 'H',
    'ц': 'c',
    'Ц': 'C',
    'ч': 'ch',
    'Ч': 'CH',
    'ш': 'sh',
    'Ш': 'SH',
    'щ': 'sch',
    'Щ': 'SCH',
    'ъ': '',
    'Ъ': '',
    'ы': 'y',
    'Ы': 'Y',
    'ь': '',
    'Ь': '',
    'э': 'e',
    'Э': 'E',
    'ю': 'ju',
    'Ю': 'JU',
    'я': 'ja',
    'Я': 'JA',
    ' ': '_',
    'і': 'i',
    'І': 'I',
    'ї': 'i',
    'Ї': 'I'
};
var asciify = function(str) {
    return str.split('').map(function(c) {
        if (en_to_ru[c]) return en_to_ru[c];
        return c;
    }).join('');
};
var provider = {
    free_email_domains: [
        'yandex.ru',
        'ya.ru',
        'narod.ru',
        'gmail.com',
        'mail.ru',
        'list.ru',
        'bk.ru',
        'inbox.ru',
        'rambler.ru',
        'hotmail.com'
    ],
    top_level_domains: [
        'com',
        'com',
        'net',
        'org',
        'ru',
        'ru',
        'ru',
        'ru'
    ],
    domain: function() {
        return asciify(this.populate_one_of(this.domain_formats));
    },
    email: function() {
        return asciify(this.populate_one_of(this.email_formats));
    },
    url: function() {
        return asciify(this.populate_one_of(this.url_formats));
    }
};
module.exports = provider;

},{}],"bfCSD":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '(812) ###-##-##',
        '(495) ###-####',
        '+7 (922) ###-####',
        '(35222) ##-####',
        '8-800-###-####'
    ],
    full_name_formats: [
        '{{last_name_male}} {{first_name_male}} {{middle_name_male}}',
        '{{last_name_female}} {{first_name_female}} {{middle_name_female}}'
    ],
    male_name_formats: [
        '{{first_name_male}} {{middle_name}} {{last_name}}',
        '{{last_name}} {{first_name_male}} {{middle_name}}'
    ],
    female_name_formats: [
        '{{first_name_female}} {{middle_name}} {{last_name}}',
        '{{last_name}} {{first_name_female}} {{middle_name}}'
    ],
    name_formats: [
        '{{first_name_male}} {{last_name_male}}',
        '{{first_name_female}} {{last_name_female}}',
        '{{last_name_male}} {{first_name_male}}',
        '{{last_name_female}} {{first_name_female}}'
    ],
    first_name_males: [
        'Абрам',
        'Август',
        'Адам',
        'Адриан',
        'Аким',
        'Александр',
        'Алексей',
        'Альберт',
        'Ананий',
        'Анатолий',
        'Андрей',
        'Антон',
        'Антонин',
        'Аполлон',
        'Аркадий',
        'Арсений',
        'Артемий',
        'Артур',
        'Артём',
        'Афанасий',
        'Богдан',
        'Болеслав',
        'Борис',
        'Бронислав',
        'Вадим',
        'Валентин',
        'Валериан',
        'Валерий',
        'Василий',
        'Вениамин',
        'Викентий',
        'Виктор',
        'Виль',
        'Виталий',
        'Витольд',
        'Влад',
        'Владимир',
        'Владислав',
        'Владлен',
        'Всеволод',
        'Вячеслав',
        'Гавриил',
        'Гарри',
        'Геннадий',
        'Георгий',
        'Герасим',
        'Герман',
        'Глеб',
        'Гордей',
        'Григорий',
        'Давид',
        'Дан',
        'Даниил',
        'Данила',
        'Денис',
        'Дмитрий',
        'Добрыня',
        'Донат',
        'Евгений',
        'Егор',
        'Ефим',
        'Захар',
        'Иван',
        'Игнат',
        'Игнатий',
        'Игорь',
        'Илларион',
        'Илья',
        'Иммануил',
        'Иннокентий',
        'Иосиф',
        'Ираклий',
        'Кирилл',
        'Клим',
        'Константин',
        'Кузьма',
        'Лаврентий',
        'Лев',
        'Леонид',
        'Макар',
        'Максим',
        'Марат',
        'Марк',
        'Матвей',
        'Милан',
        'Мирослав',
        'Михаил',
        'Назар',
        'Нестор',
        'Никита',
        'Никодим',
        'Николай',
        'Олег',
        'Павел',
        'Платон',
        'Прохор',
        'Пётр',
        'Радислав',
        'Рафаил',
        'Роберт',
        'Родион',
        'Роман',
        'Ростислав',
        'Руслан',
        'Сава',
        'Савва',
        'Святослав',
        'Семён',
        'Сергей',
        'Спартак',
        'Станислав',
        'Степан',
        'Стефан',
        'Тарас',
        'Тимофей',
        'Тимур',
        'Тит',
        'Трофим',
        'Феликс',
        'Филипп',
        'Фёдор',
        'Эдуард',
        'Эрик',
        'Юлиан',
        'Юлий',
        'Юрий',
        'Яков',
        'Ян',
        'Ярослав',
        'Артемий',
        'Богдан',
        'Болеслав',
        'Борис',
        'Бронислав',
        'Валериан',
        'Валерий',
        'Вениамин',
        'Викентий',
        'Виктор',
        'Виль',
        'Витольд',
        'Владислав',
        'Владлен',
        'Всеволод',
        'Вячеслав',
        'Геннадий',
        'Георгий',
        'Герасим',
        'Герман',
        'Глеб',
        'Гордей',
        'Григорий',
        'Давид',
        'Дан',
        'Даниил',
        'Данила',
        'Добрыня',
        'Донат',
        'Егор',
        'Ефим',
        'Захар',
        'Игнат',
        'Игнатий',
        'Илларион',
        'Иннокентий',
        'Иосиф',
        'Ираклий',
        'Клим',
        'Кузьма',
        'Лаврентий',
        'Лев',
        'Макар',
        'Марк',
        'Матвей',
        'Милан',
        'Мирослав',
        'Назар',
        'Никодим',
        'Платон',
        'Прохор',
        'Радислав',
        'Рафаил',
        'Родион',
        'Ростислав',
        'Сава',
        'Савва',
        'Святослав',
        'Семён',
        'Степан'
    ],
    first_name_females: [
        'Александра',
        'Алина',
        'Алиса',
        'Алла',
        'Альбина',
        'Алёна',
        'Анастасия',
        'Анжелика',
        'Анна',
        'Антонина',
        'Анфиса',
        'Валентина',
        'Валерия',
        'Варвара',
        'Василиса',
        'Вера',
        'Вероника',
        'Виктория',
        'Владлена',
        'Галина',
        'Дарья',
        'Диана',
        'Дина',
        'Доминика',
        'Ева',
        'Евгения',
        'Екатерина',
        'Елена',
        'Елизавета',
        'Жанна',
        'Зинаида',
        'Злата',
        'Зоя',
        'Изабелла',
        'Изольда',
        'Инга',
        'Инесса',
        'Инна',
        'Ирина',
        'Искра',
        'Капитолина',
        'Клавдия',
        'Клара',
        'Клементина',
        'Кристина',
        'Ксения',
        'Лада',
        'Лариса',
        'Лидия',
        'Лилия',
        'Любовь',
        'Людмила',
        'Люся',
        'Майя',
        'Мальвина',
        'Маргарита',
        'Марина',
        'Мария',
        'Марта',
        'Надежда',
        'Наталья',
        'Нелли',
        'Ника',
        'Нина',
        'Нонна',
        'Оксана',
        'Олеся',
        'Ольга',
        'Полина',
        'Рада',
        'Раиса',
        'Регина',
        'Рената',
        'Розалина',
        'Светлана',
        'Софья',
        'София',
        'Таисия',
        'Тамара',
        'Татьяна',
        'Ульяна',
        'Фаина',
        'Федосья',
        'Флорентина',
        'Эльвира',
        'Эмилия',
        'Эмма',
        'Юлия',
        'Яна',
        'Ярослава'
    ],
    middle_name_males: [
        'Александрович',
        'Алексеевич',
        'Андреевич',
        'Дмитриевич',
        'Евгеньевич',
        'Сергеевич',
        'Иванович',
        'Фёдорович',
        'Львович',
        'Романович',
        'Владимирович',
        'Борисович',
        'Максимович', 
    ],
    middle_name_females: [
        'Александровна',
        'Алексеевна',
        'Андреевна',
        'Дмитриевна',
        'Евгеньевна',
        'Сергеевна',
        'Ивановна',
        'Фёдоровна',
        'Львовна',
        'Романовна',
        'Владимировна',
        'Борисовна',
        'Максимовна'
    ],
    last_name_males: [
        'Смирнов',
        'Иванов',
        'Кузнецов',
        'Соколов',
        'Попов',
        'Лебедев',
        'Козлов',
        'Новиков',
        'Морозов',
        'Петров',
        'Волков',
        'Соловьёв',
        'Васильев',
        'Зайцев',
        'Павлов',
        'Семёнов',
        'Голубев',
        'Виноградов',
        'Богданов',
        'Воробьёв',
        'Фёдоров',
        'Михайлов',
        'Беляев',
        'Тарасов',
        'Белов',
        'Комаров',
        'Орлов',
        'Киселёв',
        'Макаров',
        'Андреев',
        'Ковалёв',
        'Ильин',
        'Гусев',
        'Титов',
        'Кузьмин',
        'Кудрявцев',
        'Баранов',
        'Куликов',
        'Алексеев',
        'Степанов',
        'Яковлев',
        'Сорокин',
        'Сергеев',
        'Романов',
        'Захаров',
        'Борисов',
        'Королёв',
        'Герасимов',
        'Пономарёв',
        'Григорьев',
        'Лазарев',
        'Медведев',
        'Ершов',
        'Никитин',
        'Соболев',
        'Рябов',
        'Поляков',
        'Цветков',
        'Данилов',
        'Жуков',
        'Фролов',
        'Журавлёв',
        'Николаев',
        'Крылов',
        'Максимов',
        'Сидоров',
        'Осипов',
        'Белоусов',
        'Федотов',
        'Дорофеев',
        'Егоров',
        'Матвеев',
        'Бобров',
        'Дмитриев',
        'Калинин',
        'Анисимов',
        'Петухов',
        'Антонов',
        'Тимофеев',
        'Никифоров',
        'Веселов',
        'Филиппов',
        'Марков',
        'Большаков',
        'Суханов',
        'Миронов',
        'Ширяев',
        'Александров',
        'Коновалов',
        'Шестаков',
        'Казаков',
        'Ефимов',
        'Денисов',
        'Громов',
        'Фомин',
        'Давыдов',
        'Мельников',
        'Щербаков',
        'Блинов',
        'Колесников',
        'Карпов',
        'Афанасьев',
        'Власов',
        'Маслов',
        'Исаков',
        'Тихонов',
        'Аксёнов',
        'Гаврилов',
        'Родионов',
        'Котов',
        'Горбунов',
        'Кудряшов',
        'Быков',
        'Зуев',
        'Третьяков',
        'Савельев',
        'Панов',
        'Рыбаков',
        'Суворов',
        'Абрамов',
        'Воронов',
        'Мухин',
        'Архипов',
        'Трофимов',
        'Мартынов',
        'Емельянов',
        'Горшков',
        'Чернов',
        'Овчинников',
        'Селезнёв',
        'Панфилов',
        'Копылов',
        'Михеев',
        'Галкин',
        'Назаров',
        'Лобанов',
        'Лукин',
        'Беляков',
        'Потапов',
        'Некрасов',
        'Хохлов',
        'Жданов',
        'Наумов',
        'Шилов',
        'Воронцов',
        'Ермаков',
        'Дроздов',
        'Игнатьев',
        'Савин',
        'Логинов',
        'Сафонов',
        'Капустин',
        'Кириллов',
        'Моисеев',
        'Елисеев',
        'Кошелев',
        'Костин',
        'Горбачёв',
        'Орехов',
        'Ефремов',
        'Исаев',
        'Евдокимов',
        'Калашников',
        'Кабанов',
        'Носков',
        'Юдин',
        'Кулагин',
        'Лапин',
        'Прохоров',
        'Нестеров',
        'Харитонов',
        'Агафонов',
        'Муравьёв',
        'Ларионов',
        'Федосеев',
        'Зимин',
        'Пахомов',
        'Шубин',
        'Игнатов',
        'Филатов',
        'Крюков',
        'Рогов',
        'Кулаков',
        'Терентьев',
        'Молчанов',
        'Владимиров',
        'Артемьев',
        'Гурьев',
        'Зиновьев',
        'Гришин',
        'Кононов',
        'Дементьев',
        'Ситников',
        'Симонов',
        'Мишин',
        'Фадеев',
        'Комиссаров',
        'Мамонтов',
        'Носов',
        'Гуляев',
        'Шаров',
        'Устинов',
        'Вишняков',
        'Евсеев',
        'Лаврентьев',
        'Брагин',
        'Константинов',
        'Корнилов',
        'Авдеев',
        'Зыков',
        'Бирюков',
        'Шарапов',
        'Никонов',
        'Щукин',
        'Дьячков',
        'Одинцов',
        'Сазонов',
        'Якушев',
        'Красильников',
        'Гордеев',
        'Самойлов',
        'Князев',
        'Беспалов',
        'Уваров',
        'Шашков',
        'Бобылёв',
        'Доронин',
        'Белозёров',
        'Рожков',
        'Самсонов',
        'Мясников',
        'Лихачёв',
        'Буров',
        'Сысоев',
        'Фомичёв',
        'Русаков',
        'Стрелков',
        'Гущин',
        'Тетерин',
        'Колобов',
        'Субботин',
        'Фокин',
        'Блохин',
        'Селиверстов',
        'Пестов',
        'Кондратьев',
        'Силин',
        'Меркушев',
        'Лыткин',
        'Туров'
    ],
    first_name_male: function() {
        return this.random_element(this.first_name_males);
    },
    first_name_female: function() {
        return this.random_element(this.first_name_females);
    },
    middle_name_male: function() {
        return this.random_element(this.middle_name_males);
    },
    middle_name_female: function() {
        return this.random_element(this.middle_name_females);
    },
    last_name_male: function() {
        return this.random_element(this.last_name_males);
    },
    last_name_female: function() {
        return this.random_element(this.last_name_males) + 'а';
    },
    first_name: function() {
        if (this.integer % 2) return this.first_name_male;
        return this.first_name_female;
    },
    last_name: function() {
        if (this.integer % 2) return this.last_name_male;
        return this.last_name_female;
    }
};
module.exports = provider;

},{}],"1thEP":[function(require,module,exports) {
var provider = {
    letters: 'йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ',
    words_list: [
        'eсли',
        'возникает',
        'а',
        'боль',
        'бы',
        'было',
        'вами',
        'великие',
        'возжаждал',
        'возлюбил',
        'возникает',
        'возникают',
        'воспользоваться',
        'восхваляющих',
        'всю',
        'вы',
        'говорил',
        'действительно',
        'если',
        'жизни',
        'за',
        'заниматься',
        'зодчим',
        'и',
        'из',
        'из-за',
        'избегает',
        'избегал',
        'или',
        'именно',
        'иной',
        'истину',
        'как',
        'какими',
        'картину',
        'когда',
        'которого',
        'которое',
        'кто',
        'лишь',
        'людей',
        'мог',
        'назвал',
        'нас',
        'наслаждение',
        'наслаждений',
        'наслаждению',
        'наслаждения',
        'не',
        'некое',
        'некоей',
        'немалое',
        'неприятностей',
        'несло',
        'нет',
        'ни',
        'никаких',
        'никакого',
        'никого',
        'никто',
        'но',
        'обстоятельства',
        'отвергает',
        'открывший',
        'откуда',
        'перед',
        'по',
        'пользы',
        'поняли',
        'порицающих',
        'постигают',
        'потому',
        'превратное',
        'предаваться',
        'предпочел',
        'представление',
        'презирает',
        'примером',
        'приносило',
        'приносят',
        'простейшим',
        'равно',
        'раз',
        'разумно',
        'разъясню',
        'раскрою',
        'с',
        'само',
        'собой',
        'справедливости',
        'стал',
        'страдание',
        'страдания',
        'стремящегося',
        'счастливой',
        'такие',
        'такого',
        'тех',
        'то',
        'того',
        'только',
        'тягостными',
        'умеет',
        'упражнениями',
        'упрекнуть',
        'физическими',
        'человек',
        'что',
        'чтобы',
        'это',
        'этот',
        'я'
    ]
};
module.exports = provider;

},{}],"kjE6w":[function(require,module,exports) {
var provider = {
    countries: [
        'Afghanistan',
        'Albanien',
        'Algeriet',
        'Andorra',
        'Angola',
        'Antigua och Barbuda',
        'Argentina',
        'Armenien',
        'Australien',
        'Azerbajdzjan',
        'Azerbajdzjan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belgien',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnien och Hercegovina',
        'Botswana',
        'Brasilien',
        'Brunei',
        'Bulgarien',
        'Burkina Faso',
        'Burma (Myanmar)',
        'Burundi',
        'Centralafrikanska republiken',
        'Chile',
        'Colombia',
        'Costa Rica',
        'Cypern',
        'Danmark',
        'Demokratiska Republiken Kongo',
        'Djibouti',
        'Dominica',
        'Dominikanska republiken',
        'Ecuador',
        'Egypten',
        'Ekvatorialguinea',
        'El Salvador',
        'Elfenbenskusten',
        'Eritrea',
        'Estland',
        'Etiopien',
        'Fiji',
        'Filippinerna',
        'Finland',
        'Frankrike',
        'Förenade Arabemiraten',
        'Förenta staterna, USA',
        'Gabon',
        'Gambia',
        'Georgien',
        'Georgien',
        'Ghana',
        'Grekland',
        'Grenada',
        'Guatemala',
        'Guinea-Bissau',
        'Guinea',
        'Guyana',
        'Haiti',
        'Honduras',
        'Indien',
        'Indonesien',
        'Indonesien',
        'Irak',
        'Iran',
        'Irland',
        'Island',
        'Israel',
        'Italien',
        'Jamaica',
        'Japan',
        'Jemen',
        'Jordanien',
        'Kambodja',
        'Kamerun',
        'Kanada',
        'Kap Verde',
        'Kazakstan',
        'Kazakstan',
        'Kenya',
        'Kina',
        'Kirgizistan',
        'Kiribati',
        'Komorerna',
        'Kosovo',
        'Kroatien',
        'Kuba',
        'Kuwait',
        'Laos',
        'Lesotho',
        'Lettland',
        'Libanon',
        'Liberia',
        'Libyen',
        'Liechtenstein',
        'Litauen',
        'Luxemburg',
        'Madagaskar',
        'Makedonien',
        'Malawi',
        'Malaysia',
        'Maldiverna',
        'Mali',
        'Malta',
        'Marocko',
        'Marshallöarna',
        'Mauretanien',
        'Mauritius',
        'Mexiko',
        'Mikronesiens federerade stater',
        'Moçambique',
        'Moldavien',
        'Monaco',
        'Mongoliet',
        'Montenegro',
        'Namibia',
        'Nauru',
        'Nederländerna',
        'Nepal',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Nordkorea',
        'Norge',
        'Nya Zeeland',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Panama',
        'Papua Nya Guinea',
        'Paraguay',
        'Peru',
        'Polen',
        'Portugal',
        'Qatar',
        'Republiken Kongo',
        'Rumänien',
        'Rwanda',
        'Ryssland',
        'Ryssland',
        'Saint Kitts och Nevis',
        'Saint Lucia',
        'Saint Vincent och Grenadinerna',
        'Salomonöarna',
        'Samoa',
        'San Marino',
        'São Tomé och Príncipe',
        'Saudiarabien',
        'Schweiz',
        'Senegal',
        'Serbien',
        'Seychellerna',
        'Sierra Leone',
        'Singapore',
        'Slovakien',
        'Slovenien',
        'Somalia',
        'Spanien',
        'Sri Lanka',
        'Storbritannien',
        'Sudan',
        'Surinam',
        'Sverige',
        'Swaziland',
        'Sydafrika',
        'Sydkorea',
        'Syrien',
        'Tadzjikistan',
        'Taiwan',
        'Tanzania',
        'Tchad',
        'Thailand',
        'Tjeckien',
        'Togo',
        'Tonga',
        'Trinidad och Tobago',
        'Tunisien',
        'Turkiet',
        'Turkiet',
        'Turkmenistan',
        'Tuvalu',
        'Tyskland',
        'Uganda',
        'Ukraina',
        'Ungern',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatikanstaten',
        'Venezuela',
        'Vietnam',
        'Vitryssland',
        'Västsahara (ockuperat av Marocko)',
        'Zambia',
        'Zimbabwe',
        'Österrike',
        'Östtimor', 
    ],
    counties: [
        'Blekinge',
        'Dalarna',
        'Gotland',
        'Gävleborg',
        'Halland',
        'Jämtland',
        'Jönköping',
        'Kalmar',
        'Kronoberg',
        'Norrbotten',
        'Skåne',
        'Stockholm',
        'Södermanland',
        'Uppsala',
        'Värmland',
        'Västerbotten',
        'Västernorrland',
        'Västmanland',
        'Västra Götaland',
        'Örebro',
        'Östergötland', 
    ],
    real_cities: [
        'Stockholm',
        'Göteborg',
        'Malmö',
        'Uppsala',
        'Västerås',
        'Örebro',
        'Linköping',
        'Helsingborg',
        'Jönköping',
        'Norrköping',
        'Lund',
        'Umeå',
        'Gävle',
        'Borås',
        'Södertälje',
        'Eskilstuna',
        'Halmstad',
        'Växjö',
        'Karlstad',
        'Sundsvall',
        'Östersund',
        'Trollhättan',
        'Luleå',
        'Lidingö',
        'Borlänge',
        'Tumba',
        'Kristianstad',
        'Kalmar',
        'Falun',
        'Skövde',
        'Karlskrona',
        'Skellefteå',
        'Uddevalla',
        'Varberg',
        'Åkersberga',
        'Örnsköldsvik',
        'Landskrona',
        'Nyköping',
        'Vallentuna',
        'Motala',
        'Trelleborg',
        'Ängelholm',
        'Karlskoga',
        'Märsta',
        'Lerum',
        'Alingsås',
        'Sandviken',
        'Laholm', 
    ],
    city_suffixes: [
        'holm',
        'borg',
        'bro',
        'stad',
        'sund',
        'krona',
        'berg',
        'vik',
        'hamn',
        'näs',
        'hammar',
        'torp', 
    ],
    street_prefixes: [
        'Hantverks',
        'Viol',
        'Blomster',
        'Bro',
        'Stor',
        'Drottnings',
        'Kungs',
        'Solo',
        'Stålverks',
        'Furu',
        'Dala',
        'Ene',
        'Hjort',
        'Asp',
        'Tall',
        'Lärk',
        'Murare',
        'Järnvägs',
        'Hamn',
        'Odal',
        'Skol',
        'Svetsare', 
    ],
    street_suffixes: [
        'väg',
        'vägen',
        'gränd',
        'gränden',
        'gatan',
        'stig',
        'stigen',
        'gången', 
    ],
    zip_formats: [
        '#####',
        '### ##'
    ],
    building_number_formats: [
        '#',
        '##',
        '###',
        '####',
        '#A',
        '#B',
        '#C',
        '#D',
        '#E',
        '#F',
        '##A',
        '##B',
        '##C',
        '##D',
        '##E',
        '##F', 
    ],
    city_formats: [
        '{{real_city}}',
        '{{first_name}}{{city_suffix}}', 
    ],
    street_formats: [
        '{{street_prefix}}{{street_suffix}}',
        '{{first_name}}{{street_suffix}}',
        '{{last_name}}{{street_suffix}}', 
    ],
    address1_formats: [
        '{{street}} {{building_number}}',
        '{{street}} {{building_number}} {{address2}}', 
    ],
    address2_formats: [
        'Lgh ####'
    ],
    address_formats: [
        '{{address1}}\n{{zip}} {{city}}', 
    ],
    city_suffix: function() {
        return this.random_element(this.city_suffixes);
    },
    real_city: function() {
        return this.random_element(this.real_cities);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    },
    street_suffix: function() {
        return this.random_element(this.street_suffixes);
    },
    street: function() {
        return this.populate_one_of(this.street_formats);
    },
    county: function() {
        return this.random_element(this.counties);
    }
};
module.exports = provider;

},{}],"4WPTL":[function(require,module,exports) {
var provider = {
    phone_formats: [
        '##-######',
        '###-######',
        '07##-######',
        '07## ## ## ##',
        '07## ### ###', 
    ],
    company_suffixes: [
        'AB',
        'HB',
        'Aktiebolag',
        'Handelsbolag'
    ],
    first_name_females: [
        'Maria',
        'Anna',
        'Margareta',
        'Elisabeth',
        'Eva',
        'Kristina',
        'Birgitta',
        'Karin',
        'Elisabet',
        'Marie',
        'Ingrid',
        'Christina',
        'Linnéa',
        'Sofia',
        'Kerstin',
        'Marianne',
        'Lena',
        'Helena',
        'Emma',
        'Johanna',
        'Linnea',
        'Inger',
        'Sara',
        'Cecilia',
        'Elin',
        'Anita',
        'Ulla',
        'Louise',
        'Gunilla',
        'Viola',
        'Linda',
        'Ida',
        'Susanne',
        'Hanna',
        'Malin',
        'Katarina',
        'Jenny',
        'Carina',
        'Elsa',
        'Irene',
        'Monica',
        'Barbro',
        'Ulrika',
        'Viktoria',
        'Astrid',
        'Annika',
        'Julia',
        'Alice',
        'Åsa',
        'Matilda',
        'Siv',
        'Amanda',
        'Therese',
        'Britt',
        'Yvonne',
        'Camilla',
        'Ann',
        'Ingegerd',
        'Agneta',
        'Lovisa',
        'Caroline',
        'Lisa',
        'Gun',
        'Charlotte',
        'Anette',
        'Sandra',
        'Frida',
        'Sofie',
        'Berit',
        'Margaretha',
        'Emelie',
        'Inga',
        'Charlotta',
        'Alexandra',
        'Erika',
        'Emilia',
        'Ebba',
        'Anneli',
        'Ellen',
        'Victoria',
        'Jessica',
        'Ingeborg',
        'Märta',
        'Maja',
        'Birgit',
        'Gunnel',
        'Pia',
        'Olivia',
        'Madeleine',
        'Sonja',
        'Mona',
        'Agnes',
        'Felicia',
        'Karolina',
        'Josefin',
        'Monika',
        'Helen',
        'Magdalena',
        'Gerd',
        'Lina', 
    ],
    first_name_males: [
        'Erik',
        'Lars',
        'Karl',
        'Anders',
        'Johan',
        'Per',
        'Nils',
        'Carl',
        'Mikael',
        'Jan',
        'Hans',
        'Lennart',
        'Olof',
        'Peter',
        'Gunnar',
        'Sven',
        'Fredrik',
        'Bengt',
        'Bo',
        'Daniel',
        'Gustav',
        'Åke',
        'Göran',
        'Alexander',
        'Magnus',
        'Martin',
        'Andreas',
        'Stefan',
        'John',
        'Leif',
        'Mats',
        'Ulf',
        'Björn',
        'Thomas',
        'Henrik',
        'Bertil',
        'Jonas',
        'Arne',
        'Christer',
        'Axel',
        'Ingemar',
        'Robert',
        'David',
        'Kjell',
        'Emil',
        'Stig',
        'Håkan',
        'Rolf',
        'Mattias',
        'Oskar',
        'Roland',
        'William',
        'Tommy',
        'Patrik',
        'Michael',
        'Gustaf',
        'Joakim',
        'Ingvar',
        'Simon',
        'Christian',
        'Roger',
        'Marcus',
        'Sebastian',
        'Anton',
        'Oscar',
        'Olov',
        'Eric',
        'Tomas',
        'Viktor',
        'Johannes',
        'Tobias',
        'Ove',
        'Kent',
        'Niklas',
        'Emanuel',
        'Hugo',
        'Rune',
        'Jörgen',
        'Robin',
        'Elias',
        'Gösta',
        'Adam',
        'Kenneth',
        'Filip',
        'Kurt',
        'Linus',
        'Wilhelm',
        'Sten',
        'Alf',
        'Arvid',
        'Dan',
        'Jonathan',
        'Rickard',
        'Ali',
        'Albin',
        'Börje',
        'Vilhelm',
        'Torbjörn',
        'Claes',
        'Jesper', 
    ],
    last_names: [
        'Johansson',
        'Andersson',
        'Karlsson',
        'Nilsson',
        'Eriksson',
        'Larsson',
        'Olsson',
        'Persson',
        'Svensson',
        'Gustafsson',
        'Pettersson',
        'Jonsson',
        'Jansson',
        'Hansson',
        'Bengtsson',
        'Jönsson',
        'Carlsson',
        'Petersson',
        'Lindberg',
        'Magnusson',
        'Lindström',
        'Gustavsson',
        'Olofsson',
        'Lindgren',
        'Axelsson',
        'Bergström',
        'Lundberg',
        'Lundgren',
        'Jakobsson',
        'Berg',
        'Berglund',
        'Sandberg',
        'Fredriksson',
        'Mattsson',
        'Henriksson',
        'Sjöberg',
        'Forsberg',
        'Lindqvist',
        'Lind',
        'Engström',
        'Eklund',
        'Lundin',
        'Danielsson',
        'Håkansson',
        'Holm',
        'Gunnarsson',
        'Bergman',
        'Samuelsson',
        'Fransson',
        'Nyström',
        'Lundqvist',
        'Johnsson',
        'Holmberg',
        'Björk',
        'Wallin',
        'Ali',
        'Arvidsson',
        'Söderberg',
        'Nyberg',
        'Isaksson',
        'Nordström',
        'Mårtensson',
        'Lundström',
        'Björklund',
        'Eliasson',
        'Berggren',
        'Sandström',
        'Nordin',
        'Ström',
        'Åberg',
        'Hermansson',
        'Ekström',
        'Holmgren',
        'Hedlund',
        'Sundberg',
        'Sjögren',
        'Dahlberg',
        'Ahmed',
        'Martinsson',
        'Öberg',
        'Månsson',
        'Hellström',
        'Strömberg',
        'Abrahamsson',
        'Blom',
        'Ek',
        'Blomqvist',
        'Åkesson',
        'Norberg',
        'Falk',
        'Sundström',
        'Lindholm',
        'Jonasson',
        'Åström',
        'Löfgren',
        'Andreasson',
        'Dahl',
        'Söderström',
        'Jensen',
        'Ivarsson', 
    ],
    first_name_female: function() {
        return this.random_element(this.first_name_females);
    },
    first_name_male: function() {
        return this.random_element(this.first_name_males);
    },
    first_name: function() {
        if (this.integer % 2) return this.first_name_male;
        return this.first_name_female;
    }
};
module.exports = provider;

},{}],"bBOGY":[function(require,module,exports) {
var provider = {
    words_list: [
        'i',
        'och',
        'att',
        'det',
        'som',
        'en',
        'på',
        'är',
        'av',
        'för',
        'med',
        'till',
        'den',
        'har',
        'de',
        'inte',
        'om',
        'ett',
        'han',
        'men',
        'var',
        'jag',
        'sig',
        'från',
        'vi',
        'så',
        'kan',
        'man',
        'när',
        'år',
        'säger',
        'hon',
        'under',
        'också',
        'efter',
        'eller',
        'nu',
        'sin',
        'där',
        'vid',
        'mot',
        'ska',
        'skulle',
        'kommer',
        'ut',
        'får',
        'finns',
        'vara',
        'hade',
        'alla',
        'andra',
        'mycket',
        'än',
        'här',
        'då',
        'sedan',
        'över',
        'bara',
        'in',
        'blir',
        'upp',
        'även',
        'vad',
        'få',
        'två',
        'vill',
        'ha',
        'många',
        'hur',
        'mer',
        'går',
        'sverige',
        'kronor',
        'detta',
        'nya',
        'procent',
        'skall',
        'hans',
        'utan',
        'sina',
        'något',
        'svenska',
        'allt',
        'första',
        'fick',
        'måste',
        'mellan',
        'blev',
        'bli',
        'dag',
        'någon',
        'några',
        'sitt',
        'stora',
        'varit',
        'dem',
        'bland',
        'kl',
        'bra',
        'tre',
        'ta',
        'genom',
        'del',
        'hela',
        'annat',
        'fram',
        'gör',
        'ingen',
        'stockholm',
        'göra',
        'enligt',
        'mig',
        'redan',
        'inom',
        'kom',
        'du',
        'helt',
        'ju',
        'samma',
        'kanske',
        'själv',
        'oss',
        'tidigare',
        'se',
        'miljoner',
        'dock',
        'denna',
        'både',
        'tid',
        'kunna',
        'fått',
        'stor',
        'a',
        'olika',
        'ser',
        'flera',
        'plats',
        'm',
        'kunde',
        'gå',
        'ur',
        'gäller',
        'honom',
        'aldrig',
        'barn',
        'varje',
        'lite',
        'sätt',
        'just',
        'väl',
        'tar',
        'åt',
        'mest',
        'per',
        'står',
        'fem',
        'tror',
        'rätt',
        'dessa',
        'gång',
        'därför',
        'fyra',
        'ny',
        'gick',
        'hos',
        'dessutom',
        'ger',
        'lika',
        'eftersom',
        'vilket',
        'trots',
        'tycker',
        'människor',
        'ligger',
        'r',
        'vet',
        'kvar',
        'bättre',
        'gjorde',
        'ändå',
        'inför',
        'regeringen',
        'senaste',
        'samtidigt',
        'annan',
        'ännu',
        'the',
        'blivit',
        'fall',
        'talet',
        'exempel',
        'gamla',
        'deras',
        'tiden',
        'min',
        'hennes',
        'sista',
        'komma',
        'större',
        'visar',
        'senare',
        'tog',
        'nästa',
        'göteborg',
        'ge',
        'mindre',
        'gjort',
        'usa',
        'innan',
        'alltid',
        'pengar',
        'sade',
        'först',
        'stället',
        'vår',
        'före',
        'svensk',
        'tillbaka',
        'ner',
        'nog',
        'samt',
        'ofta',
        'själva',
        'inget',
        'b',
        'fler',
        'säga',
        'egen',
        'johansson',
        'igen',
        'tillsammans',
        'runt',
        'nästan',
        'lopp',
        'förra',
        'året',
        'mål',
        'längre',
        'svårt',
        'bästa',
        'andersson',
        'anders',
        'handlar',
        'dagens',
        'länge',
        'stort',
        'peter',
        'frågan',
        'spelar',
        'enda', 
    ],
    letters: 'qwertyuiopåasdfghjklöäzxcvbnmQWERTYUIOPÅASDFGHJKLÖÄZXCVBNM'
};
module.exports = provider;

},{}],"bBGdV":[function(require,module,exports) {
var provider = {
    city_prefixes: [
        'місто'
    ],
    region_suffixes: [
        'область'
    ],
    street_prefixes: [
        'вул.',
        'просп.',
        'бул.',
        'пров.'
    ],
    zip_formats: [
        '#####'
    ],
    countries: [
        'Україна',
        'Російська Федерація',
        'США',
        'Канада',
        'Австралія',
        'Австрія',
        'Азербайджан',
        'Аландські острови',
        'Албанія',
        'Алжир',
        'Американські острови Самоа',
        'Ангілья',
        'Ангола',
        'Андорра',
        'Антарктика',
        'Антигуа і Барбуда',
        'Аргентина',
        'Вірменія',
        'Аруба',
        'Афганістан , Ісламська Республіка',
        'Багами',
        'Бангладеш',
        'Барбадос',
        'Бахрейн',
        'Беліз',
        'ілорусі',
        'Бельгія',
        'Бермудські Острови',
        'Болгарія',
        'Болівія',
        'Боснія і Герцеговина',
        'Ботсвана',
        'Бразилія',
        'Британська територія Індійського океану',
        'Бруней Даруссалам',
        'Буркіна Фасо',
        'Бурунді',
        'Бутан',
        'Вануату',
        'Великобританія',
        'Угорщина',
        'Венесуела',
        'Віргінські о-ви, Великобританія',
        'Віргінські о-ви, США',
        'Східний Тимор',
        'В\'єтнам',
        'Габон',
        'Гаїті',
        'Гайана',
        'Гамбія',
        'Гана',
        'Гваделупа',
        'Гватемала',
        'Гвінея',
        'Гвінея -Біссау',
        'Німеччина',
        'Гібралтар',
        'Гонгконг',
        'Гондурас',
        'Держава - місто Ватикан',
        'Гренада',
        'Гренландія',
        'Греція',
        'Грузія',
        'Гуам',
        'Данія',
        'Джерсі',
        'Джібуті',
        'Домініканська Республіка',
        'Єгипет',
        'Замбія',
        'Західна Сахара',
        'Зімбабве',
        'Ізраїль',
        'Індія',
        'Індонезія',
        'Йорданія',
        'Ірак',
        'Іран',
        'Ірландія',
        'Ісландія',
        'Іспанія',
        'Італія',
        'Ємен',
        'Казахстан, Республіка',
        'Кайманові Острови',
        'Камбоджа',
        'Камерун',
        'Катар',
        'Кенія',
        'Кіпр',
        'Кірібаті',
        'Китай',
        'Кокосові острови',
        'Колумбія',
        'Коморські Острови',
        'Конго ,  Демократична Республіка',
        'Конго ,  Республіка',
        'Коста -Ріка',
        'Кот- д\'Івуар',
        'Куба',
        'Кувейт',
        'Киргизстан',
        'Лаос',
        'Латвія',
        'Лесото',
        'Ліберія',
        'Ліван',
        'Лівія',
        'Литва',
        'Ліхтенштейн',
        'Люксембург',
        'Маврикій',
        'Мавританія',
        'Мадагаскар ,  Республіка',
        'Майотта',
        'Макао',
        'Македонія ,  Республіка',
        'Малаві',
        'Малайзія',
        'Малі',
        'Мальдіви',
        'Мальта',
        'Марокко',
        'Мартиніка',
        'Маршаллові Острови',
        'Мексика',
        'Дрібні віддалені острови США',
        'Мозамбік',
        'Молдова',
        'Монако',
        'Монголія',
        'Монтсеррат',
        'М\'янма',
        'Намібія',
        'Науру',
        'Непал',
        'Нігерія',
        'Нігерія',
        'Нідерландські Антильські острови',
        'Нідерланди',
        'Нікарагуа',
        'Ніуе',
        'Нова Зеландія',
        'Нова Каледонія',
        'Норвегія',
        'Об\'єднані Арабські Емірати',
        'О. Гернсі',
        'Оман',
        'Острови Зеленого Мису',
        'Острови Кука',
        'Острови Теркс І Кайкос',
        'острови Уолліс Футуна',
        'Острови Херд і Макдональд',
        'Острів Буве',
        'Острів Домініка',
        'Острів Мен',
        'Острів Норфолк',
        'Острів Святого Мартіна',
        'Острів Святої Єлени',
        'О. Південна Георгія І Південні Сандвічеві Острови',
        'Пакистан',
        'Палау',
        'Палестина',
        'Панама',
        'Папуа - Нова Гвінея',
        'Парагвай',
        'Перу',
        'Піткерн',
        'Польща',
        'Португалія',
        'Пуерто -Ріко',
        'Реюньйон',
        'Острів Різдва',
        'Руанда',
        'Румунія',
        'Сальвадор',
        'Самоа',
        'Сан-Марино',
        'Сан -Томе і Прінсіпі',
        'Саудівська Аравія',
        'Свазіленд',
        'Північна Корея',
        'Північні Маріанські Острови',
        'Сейшельські Острови',
        'Сен- Бартельмі',
        'Сенегал',
        'Сен-П\'єр і Мікелон',
        'Сент-Вінсент і Гренадіни',
        'Сент- Кітс і Невіс',
        'Сент-Люсія',
        'Сербія',
        'Сербія і Чорногорія,  Державний Союз',
        'Сінгапур',
        'Сирія',
        'Словацька республіка',
        'Словенія',
        'Соломонові острови',
        'Сомалі',
        'Судан',
        'Суринам',
        'Сьєрра-Леоне',
        'Таджикистан',
        'Тайвань',
        'Тайланд',
        'Танзанія',
        'Того',
        'Токелау',
        'Тонга',
        'Тринідад і Тобаго',
        'Тувалу',
        'Туніс',
        'Туркменія',
        'Туреччина',
        'Уганда',
        'Узбекистан',
        'Уругвай',
        'Фарерські острови',
        'Федеративні Штати Мікронезії',
        'Фіджі',
        'Філіппіни',
        'Фінляндія',
        'Фолклендські о- ва',
        'Франція',
        'Французька Гвінея',
        'Французька Полінезія',
        'Французькі Південні Території',
        'Хорватія',
        'Чад',
        'Чорногорія',
        'Чеська Республіка',
        'Чилі',
        'Швейцарія',
        'Швеція',
        'Шпіцберген і Ян -Майєн',
        'Шрі -Ланка',
        'Еквадор',
        'Екваторіальна Гвінея',
        'Еритрея',
        'Естонія',
        'Ефіопія',
        'Південна Корея',
        'Південно-Африканська Республіка',
        'Ямайка',
        'Японія'
    ],
    regions: [
        'АР Крим',
        'Вінницька',
        'Волинська',
        'Дніпропетровська',
        'Донецька',
        'Житомирська',
        'Закарпатська',
        'Запорізька',
        'Івано-Франківська',
        'Київська',
        'Кіровоградська',
        'Луганська',
        'Львівська',
        'Миколаївська',
        'Одеська',
        'Полтавська',
        'Рівненська',
        'Сумська',
        'Тернопільська',
        'Харківська',
        'Херсонська',
        'Хмельницька',
        'Черкаська',
        'Чернівецька',
        'Чернігівська'
    ],
    cities: [
        'Авдіївка',
        'Алмазна',
        'Алупка',
        'Алушта',
        'Барвінкове',
        'Батурин',
        'Бахмач',
        'Бахчисарай',
        'Вільногірськ',
        'Вільнянськ',
        'Вінниця',
        'Вовчанськ',
        'Вознесенськ',
        'Волноваха',
        'Володимир-Волинський',
        'Волочиськ',
        'Городенка',
        'Городище',
        'Городня',
        'Городок',
        'Городок',
        'Горохів',
        'Гребінка',
        'Гуляйполе',
        'Дергачі',
        'Джанкой',
        'Дзержинськ',
        'Димитров',
        'Дніпродзержинськ',
        'Енергодар',
        'Євпаторія',
        'Єнакієве',
        'Жашків',
        'Жданівка',
        'Жидачів',
        'Житомир',
        'Жмеринка',
        'Жовква',
        'Жовті',
        'Заліщики',
        'Запоріжжя',
        'Заставна',
        'Івано-Франківськ',
        'Ізмаїл',
        'Ізюм',
        'Ізяслав',
        'Іллінці',
        'Іллічівськ',
        'Іловайськ',
        'Калуш',
        'Кам\'янець-Подільський',
        'Кам\'янка-Бузька',
        'Кам\'янка-Дніпровська',
        'Кам\'янка',
        'Камінь-Каширський',
        'Ладижин',
        'Ланівці',
        'Лебедин',
        'Липовець',
        'Лисичанськ',
        'Макіївка',
        'Мала',
        'Малин',
        'Мар\'їнка',
        'Марганець',
        'Маріуполь',
        'Миронівка',
        'Міусинськ',
        'Могилів-Подільський',
        'Ніжин',
        'Нікополь',
        'Нова',
        'Нова',
        'Новоград-Волинський',
        'Новогродівка',
        'Новодністровськ',
        'Новодружеськ',
        'Новомиргород',
        'Обухів',
        'Овруч',
        'Одеса',
        'Олевськ',
        'Острог',
        'Первомайський',
        'Перевальськ',
        'Перемишляни',
        'Перечин',
        'Попасна',
        'Путивль',
        'Рава-Руська',
        'Рожище',
        'Роздільна',
        'Ромни',
        'Рубіжне',
        'Рудки',
        'Саки',
        'Сватове',
        'Свердловськ',
        'Світловодськ',
        'Тлумач',
        'Токмак',
        'Угнів',
        'Ужгород',
        'Узин',
        'Українка',
        'Умань',
        'Устилуг',
        'Фастів',
        'Феодосія',
        'Харків',
        'Ходорів',
        'Христинівка',
        'Хуст',
        'Цюрупинськ',
        'Часів',
        'Червоноград',
        'Чернігів',
        'Чигирин',
        'Чоп',
        'Чуднів',
        'Шаргород',
        'Шахтарськ',
        'Шумськ',
        'Щастя',
        'Щолкіне',
        'Щорс',
        'Южне',
        'Южноукраїнськ',
        'Юнокомунарівськ',
        'Яворів',
        'Яготин',
        'Ялта',
        'Ямпіль',
        'Яремче',
        'Ясинувата'
    ],
    streets: [
        'Калініна',
        'Кірова',
        'Кобозєва',
        'Коваля',
        'Конєва',
        'Косіора',
        'Куйбишева',
        'Купріна',
        'Лагутенка',
        'Лесі Українки',
        'Рози Люксембург',
        'Маршала Жукова',
        'Маяковського',
        'Миру',
        'Молодих Шахтарів',
        'Орєшкова',
        'Павла Поповича',
        'Панфілова',
        'Петровського',
        'Постишева',
        'Пушкіна',
        'Садовий',
        'Сосюри',
        'Стратонавтів',
        'Титова',
        'Флеровського',
        'Франка',
        'Богдана Хмельницького',
        'Челюскінців',
        'Чубаря',
        'Шевченка',
        'Шекспіра',
        'Щорса'
    ],
    address_formats: [
        "{{zip}}, {{region}} {{region_suffix}}, {{city_prefix}} {{city}}, {{street_prefix}} {{street}}, {{building_number}}", 
    ],
    region_suffix: function() {
        return this.random_element(this.region_suffixes);
    },
    region: function() {
        return this.random_element(this.regions);
    },
    city: function() {
        return this.random_element(this.cities);
    },
    street_prefix: function() {
        return this.random_element(this.street_prefixes);
    },
    street: function() {
        return this.random_element(this.streets);
    }
};
module.exports = provider;

},{}],"5uhXl":[function(require,module,exports) {
var provider = {
    color_names: [
        'ЦіаноБлакитний',
        'АлізариновийЧервоний',
        'Амарантовий',
        'АмарантовоРожевий',
        'Бурштиновий',
        'ЯскравоБурштиновий',
        'Аметистовий',
        'Андроїдний зелений',
        'Абрикосовий',
        'КолірМорськоїХвилі',
        'ЗеленийАрмійський',
        'Арсеновий',
        'Спаржевий',
        'АтомнийМандаріновий',
        'ЗолотистоКаштановий',
        'ЯсноЛазуровий',
        'НіжноБлакитний',
        'Бежевий',
        'Бістр',
        'Чорний',
        'Синій',
        'БлакитноЗелений',
        'БлакитноФіолетовий',
        'Дерева',
        'ВодаПляжаБонді',
        'БлакитнийБрандейса',
        'Латунний',
        'ЯскравоЗелений',
        'ЯскравоРожевий',
        'ЯскравоБірюзовий',
        'ЯскравоФіолетовий',
        'ДіамантовоРожевий',
        'НіжноРожевий',
        'Мисливський',
        'Бронзовий',
        'Брунатний',
        'ШкіраБуйвола',
        'Бургундський',
        'ПаленийОранжевий',
        'ПаленаСіена',
        'УмбраПалена',
        'Візантійський',
        'ТемноЗеленийХакі',
        'Кардинал',
        'Карміновий',
        'Морквяний',
        'СивавоЗелений',
        'ЯсноВишневий',
        'Лазуровий',
        'ЛазуровоСиній',
        'Каштановий',
        'Шоколадний',
        'Цинамоновий',
        'Кобальтовий',
        'Мідний',
        'Кораловий',
        'Кукурудзяний',
        'Блаватний',
        'Кремовий',
        'Малиновий',
        'Ціан',
        'ТемноБрунатний',
        'ТемноЛазурний',
        'ТемноКаштановий',
        'ТемноКораловий',
        'ТемноЗолотий',
        'ТемноЗелений',
        'ТемнийІндиго',
        'ТемнийХакі',
        'ТемноОливковий',
        'ТемнийПастельноЗелений',
        'ТемноПерсиковий',
        'ТемноРожевий',
        'ТемноЛососевий',
        'ТемноКарміновий',
        'ТемноАспіднийCірий',
        'ТемнийВесняноЗелений',
        'ТемнийЖовтоБрунатний',
        'ТемноМандариновий',
        'ТемнийЗеленийЧай',
        'ТемноБірюзовий',
        'ГлибокийФіолетовий',
        'Джинсовий',
        'ЗахиснийСиній',
        'Смарагдовий',
        'Баклажановий',
        'ЗеленийПапороть',
        'Лляний',
        'Фуксія',
        'Гумігут',
        'Золотий',
        'ЗолотавоБерезовий',
        'Сірий',
        'СіраСпаржа',
        'Зелений',
        'ЖовтоЗелений',
        'СвітлоСиній',
        'Геліотроп',
        'ГарячоРожевий',
        'Індиго',
        'МіжнароднийПомаранчевий',
        'Нефритовий',
        'Хакі',
        'СинійКлейна',
        'Лавандний',
        'РожевоЛавандний',
        'Лимонний',
        'ЛимонноКремовий',
        'ЯсноБрунатний',
        'Бузковий',
        'Лайм',
        'Пурпурний',
        'Малахітовий',
        'БрунатоМалиновий',
        'РожевоЛіловий',
        'ОпівнічноСиній',
        'Зелена м\'ята',
        'ЗеленийМох',
        'РожевийМаунтбеттена',
        'Гірчичний',
        'БілийНавахо',
        'ТемноСиній',
        'Вохра',
        'СтареЗолото',
        'Оливковий',
        'НіжноОливковий',
        'Помаранчевий',
        'Орхідея'
    ]
};
module.exports = provider;

},{}],"lvHAO":[function(require,module,exports) {
var provider = {
    letters: 'йцукенгшщзхїфівапролджєячсмитьбю',
    words_list: [
        'Але',
        'щоб',
        'ви',
        'зрозуміли',
        'звідки',
        'виникає',
        'це',
        'хибне',
        'уявлення',
        'людей',
        'цуратись',
        'насолоди',
        'і',
        'вихваляти',
        'страждання',
        'я',
        'розкрию',
        'перед',
        'вами',
        'всю',
        'картину',
        'роз’ясню',
        'що',
        'саме',
        'говорив',
        'цей',
        'чоловік',
        'який',
        'відкрив',
        'істину',
        'якого',
        'б',
        'назвав',
        'зодчим',
        'щасливого',
        'життя',
        'дійсно',
        'ніхто',
        'не',
        'відкидає',
        'зневажає',
        'уникає',
        'насолод',
        'тільки',
        'через',
        'те',
        'це',
        'насолоди',
        'лише',
        'через',
        'тих',
        'вміє',
        'розумно',
        'вдаватися',
        'насолоді',
        'осягають',
        'великі',
        'страждання',
        'так',
        'само',
        'немає',
        'нікого',
        'полюбивши',
        'вважав',
        'за',
        'краще',
        'зажадав',
        'би',
        'саме',
        'страждання',
        'тільки',
        'інший',
        'раз',
        'виникають',
        'такі',
        'обставини',
        'коли',
        'біль',
        'приносять',
        'якесь',
        'чималу',
        'насолоду',
        'якщо',
        'скористатися',
        'найпростішим',
        'прикладом',
        'хто',
        'нас',
        'став',
        'би',
        'займатися',
        'якими',
        'було',
        'тяжкими',
        'фізичними',
        'вправами',
        'приносило',
        'з',
        'собою',
        'якоїсь',
        'користі',
        'міг',
        'би',
        'по',
        'справедливості',
        'дорікнути',
        'прагнення',
        'до',
        'насолоди',
        'яке',
        'не',
        'несло'
    ]
};
module.exports = provider;

},{}],"8qDoX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Company", ()=>Company
);
var _casualBrowserify = require("casual-browserify");
var _casualBrowserifyDefault = parcelHelpers.interopDefault(_casualBrowserify);
class Company {
    constructor(){
        this.companyName = _casualBrowserifyDefault.default.company_name;
        this.companyPhrase = _casualBrowserifyDefault.default.company_suffix;
        this.location = {
            lat: parseFloat(_casualBrowserifyDefault.default.latitude),
            lng: parseFloat(_casualBrowserifyDefault.default.longitude)
        };
    }
    makerContent() {
        return `
    <div>
      <h1>Name ${this.companyName}</h1>
      <h3>Name ${this.companyPhrase}</h3>
    </div>
    `;
    }
}

},{"casual-browserify":"kU7Tp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire0102")

//# sourceMappingURL=index.b71e74eb.js.map
