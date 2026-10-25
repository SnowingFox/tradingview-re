"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[7627], { 31544(e, t, n) {
  n.d(t, { Cp: () => u, J0: () => p, J5: () => h, NA: () => l, r: () => c });
  var r = n(90066), o = n(11555), i = n(3103), a = n(31784), s = n(68752);
  function u(e2, t2) {
    return (0, o.o5)().captureException(e2, (0, s.li)(t2));
  }
  function c(e2, t2) {
    return (0, o.o5)().captureEvent(e2, t2);
  }
  function l(e2, t2) {
    (0, o.rm)().setTag(e2, t2);
  }
  function p(e2) {
    const t2 = (0, o.KU)(), n2 = (0, o.rm)(), s2 = (0, o.o5)(), { release: u2, environment: c2 = r.U } = t2 && t2.getOptions() || {}, { userAgent: l2 } = a.O.navigator || {}, p2 = (0, i.fj)({ release: u2, environment: c2, user: s2.getUser() || n2.getUser(), ...l2 && { userAgent: l2 }, ...e2 }), g2 = n2.getSession();
    return g2 && "ok" === g2.status && (0, i.qO)(g2, { status: "exited" }), f(), n2.setSession(p2), s2.setSession(p2), p2;
  }
  function f() {
    const e2 = (0, o.rm)(), t2 = (0, o.o5)(), n2 = t2.getSession() || e2.getSession();
    n2 && (0, i.Vu)(n2), g(), e2.setSession(), t2.setSession();
  }
  function g() {
    const e2 = (0, o.rm)(), t2 = (0, o.o5)(), n2 = (0, o.KU)(), r2 = t2.getSession() || e2.getSession();
    r2 && n2 && n2.captureSession(r2);
  }
  function h(e2 = false) {
    e2 ? f() : g();
  }
}, 87574(e, t, n) {
  n.d(t, { Ay: () => ue, t: () => ce });
  var r = n(94066), o = n(39551), i = n(42363), a = n(19779), s = n(73903), u = n(59596), c = n(84264), l = n(78677), p = n(15389);
  function f(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function g(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? f(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : f(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  var h = { type: "logger", log: function(e2) {
    this.output("log", e2);
  }, warn: function(e2) {
    this.output("warn", e2);
  }, error: function(e2) {
    this.output("error", e2);
  }, output: function(e2, t2) {
    console && console[e2] && console[e2].apply(console, t2);
  } }, d = (function() {
    function e2(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (0, o.A)(this, e2), this.init(t2, n2);
    }
    return (0, i.A)(e2, [{ key: "init", value: function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this.prefix = t2.prefix || "i18next:", this.logger = e3 || h, this.options = t2, this.debug = t2.debug;
    } }, { key: "setDebug", value: function(e3) {
      this.debug = e3;
    } }, { key: "log", value: function() {
      for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
      return this.forward(t2, "log", "", true);
    } }, { key: "warn", value: function() {
      for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
      return this.forward(t2, "warn", "", true);
    } }, { key: "error", value: function() {
      for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
      return this.forward(t2, "error", "");
    } }, { key: "deprecate", value: function() {
      for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++) t2[n2] = arguments[n2];
      return this.forward(t2, "warn", "WARNING DEPRECATED: ", true);
    } }, { key: "forward", value: function(e3, t2, n2, r2) {
      return r2 && !this.debug ? null : ("string" == typeof e3[0] && (e3[0] = "".concat(n2).concat(this.prefix, " ").concat(e3[0])), this.logger[t2](e3));
    } }, { key: "create", value: function(t2) {
      return new e2(this.logger, g(g({}, { prefix: "".concat(this.prefix, ":").concat(t2, ":") }), this.options));
    } }, { key: "clone", value: function(t2) {
      return (t2 = t2 || this.options).prefix = t2.prefix || this.prefix, new e2(this.logger, t2);
    } }]), e2;
  })(), v = new d(), y = (function() {
    function e2() {
      (0, o.A)(this, e2), this.observers = {};
    }
    return (0, i.A)(e2, [{ key: "on", value: function(e3, t2) {
      var n2 = this;
      return e3.split(" ").forEach((function(e4) {
        n2.observers[e4] = n2.observers[e4] || [], n2.observers[e4].push(t2);
      })), this;
    } }, { key: "off", value: function(e3, t2) {
      this.observers[e3] && (t2 ? this.observers[e3] = this.observers[e3].filter((function(e4) {
        return e4 !== t2;
      })) : delete this.observers[e3]);
    } }, { key: "emit", value: function(e3) {
      for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
      this.observers[e3] && [].concat(this.observers[e3]).forEach((function(e4) {
        e4.apply(void 0, n2);
      })), this.observers["*"] && [].concat(this.observers["*"]).forEach((function(t3) {
        t3.apply(t3, [e3].concat(n2));
      }));
    } }]), e2;
  })();
  function m() {
    var e2, t2, n2 = new Promise((function(n3, r2) {
      e2 = n3, t2 = r2;
    }));
    return n2.resolve = e2, n2.reject = t2, n2;
  }
  function b(e2) {
    return null == e2 ? "" : "" + e2;
  }
  function k(e2, t2, n2) {
    function r2(e3) {
      return e3 && e3.indexOf("###") > -1 ? e3.replace(/###/g, ".") : e3;
    }
    function o2() {
      return !e2 || "string" == typeof e2;
    }
    for (var i2 = "string" != typeof t2 ? [].concat(t2) : t2.split("."); i2.length > 1; ) {
      if (o2()) return {};
      var a2 = r2(i2.shift());
      !e2[a2] && n2 && (e2[a2] = new n2()), e2 = Object.prototype.hasOwnProperty.call(e2, a2) ? e2[a2] : {};
    }
    return o2() ? {} : { obj: e2, k: r2(i2.shift()) };
  }
  function O(e2, t2, n2) {
    var r2 = k(e2, t2, Object);
    r2.obj[r2.k] = n2;
  }
  function x(e2, t2) {
    var n2 = k(e2, t2), r2 = n2.obj, o2 = n2.k;
    if (r2) return r2[o2];
  }
  function S(e2, t2, n2) {
    for (var r2 in t2) "__proto__" !== r2 && "constructor" !== r2 && (r2 in e2 ? "string" == typeof e2[r2] || e2[r2] instanceof String || "string" == typeof t2[r2] || t2[r2] instanceof String ? n2 && (e2[r2] = t2[r2]) : S(e2[r2], t2[r2], n2) : e2[r2] = t2[r2]);
    return e2;
  }
  function w(e2) {
    return e2.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var j = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
  function P(e2) {
    return "string" == typeof e2 ? e2.replace(/[&<>"'\/]/g, (function(e3) {
      return j[e3];
    })) : e2;
  }
  var L = "undefined" != typeof window && window.navigator && void 0 === window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, R = [" ", ",", "?", "!", ";"];
  function N(e2, t2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
    if (e2) {
      if (e2[t2]) return e2[t2];
      for (var r2 = t2.split(n2), o2 = e2, i2 = 0; i2 < r2.length; ++i2) {
        if (!o2) return;
        if ("string" == typeof o2[r2[i2]] && i2 + 1 < r2.length) return;
        if (void 0 === o2[r2[i2]]) {
          for (var a2 = 2, s2 = r2.slice(i2, i2 + a2).join(n2), u2 = o2[s2]; void 0 === u2 && r2.length > i2 + a2; ) a2++, u2 = o2[s2 = r2.slice(i2, i2 + a2).join(n2)];
          if (void 0 === u2) return;
          if (null === u2) return null;
          if (t2.endsWith(s2)) {
            if ("string" == typeof u2) return u2;
            if (s2 && "string" == typeof u2[s2]) return u2[s2];
          }
          var c2 = r2.slice(i2 + a2).join(n2);
          return c2 ? N(u2, c2, n2) : void 0;
        }
        o2 = o2[r2[i2]];
      }
      return o2;
    }
  }
  function A(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function C(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? A(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : A(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  var E = (function(e2) {
    (0, s.A)(l2, e2);
    var t2, n2, r2 = (t2 = l2, n2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, r3 = (0, c.A)(t2);
      if (n2) {
        var o2 = (0, c.A)(this).constructor;
        e3 = Reflect.construct(r3, arguments, o2);
      } else e3 = r3.apply(this, arguments);
      return (0, u.A)(this, e3);
    });
    function l2(e3) {
      var t3, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
      return (0, o.A)(this, l2), t3 = r2.call(this), L && y.call((0, a.A)(t3)), t3.data = e3 || {}, t3.options = n3, void 0 === t3.options.keySeparator && (t3.options.keySeparator = "."), void 0 === t3.options.ignoreJSONStructure && (t3.options.ignoreJSONStructure = true), t3;
    }
    return (0, i.A)(l2, [{ key: "addNamespaces", value: function(e3) {
      this.options.ns.indexOf(e3) < 0 && this.options.ns.push(e3);
    } }, { key: "removeNamespaces", value: function(e3) {
      var t3 = this.options.ns.indexOf(e3);
      t3 > -1 && this.options.ns.splice(t3, 1);
    } }, { key: "getResource", value: function(e3, t3, n3) {
      var r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = void 0 !== r3.keySeparator ? r3.keySeparator : this.options.keySeparator, i2 = void 0 !== r3.ignoreJSONStructure ? r3.ignoreJSONStructure : this.options.ignoreJSONStructure, a2 = [e3, t3];
      n3 && "string" != typeof n3 && (a2 = a2.concat(n3)), n3 && "string" == typeof n3 && (a2 = a2.concat(o2 ? n3.split(o2) : n3)), e3.indexOf(".") > -1 && (a2 = e3.split("."));
      var s2 = x(this.data, a2);
      return s2 || !i2 || "string" != typeof n3 ? s2 : N(this.data && this.data[e3] && this.data[e3][t3], n3, o2);
    } }, { key: "addResource", value: function(e3, t3, n3, r3) {
      var o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: false }, i2 = void 0 !== o2.keySeparator ? o2.keySeparator : this.options.keySeparator, a2 = [e3, t3];
      n3 && (a2 = a2.concat(i2 ? n3.split(i2) : n3)), e3.indexOf(".") > -1 && (r3 = t3, t3 = (a2 = e3.split("."))[1]), this.addNamespaces(t3), O(this.data, a2, r3), o2.silent || this.emit("added", e3, t3, n3, r3);
    } }, { key: "addResources", value: function(e3, t3, n3) {
      var r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: false };
      for (var o2 in n3) "string" != typeof n3[o2] && "[object Array]" !== Object.prototype.toString.apply(n3[o2]) || this.addResource(e3, t3, o2, n3[o2], { silent: true });
      r3.silent || this.emit("added", e3, t3, n3);
    } }, { key: "addResourceBundle", value: function(e3, t3, n3, r3, o2) {
      var i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: false }, a2 = [e3, t3];
      e3.indexOf(".") > -1 && (r3 = n3, n3 = t3, t3 = (a2 = e3.split("."))[1]), this.addNamespaces(t3);
      var s2 = x(this.data, a2) || {};
      r3 ? S(s2, n3, o2) : s2 = C(C({}, s2), n3), O(this.data, a2, s2), i2.silent || this.emit("added", e3, t3, n3);
    } }, { key: "removeResourceBundle", value: function(e3, t3) {
      this.hasResourceBundle(e3, t3) && delete this.data[e3][t3], this.removeNamespaces(t3), this.emit("removed", e3, t3);
    } }, { key: "hasResourceBundle", value: function(e3, t3) {
      return void 0 !== this.getResource(e3, t3);
    } }, { key: "getResourceBundle", value: function(e3, t3) {
      return t3 || (t3 = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? C(C({}, {}), this.getResource(e3, t3)) : this.getResource(e3, t3);
    } }, { key: "getDataByLanguage", value: function(e3) {
      return this.data[e3];
    } }, { key: "hasLanguageSomeTranslations", value: function(e3) {
      var t3 = this.getDataByLanguage(e3);
      return !!(t3 && Object.keys(t3) || []).find((function(e4) {
        return t3[e4] && Object.keys(t3[e4]).length > 0;
      }));
    } }, { key: "toJSON", value: function() {
      return this.data;
    } }]), l2;
  })(y), D = { processors: {}, addPostProcessor: function(e2) {
    this.processors[e2.name] = e2;
  }, handle: function(e2, t2, n2, r2, o2) {
    var i2 = this;
    return e2.forEach((function(e3) {
      i2.processors[e3] && (t2 = i2.processors[e3].process(t2, n2, r2, o2));
    })), t2;
  } };
  function F(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function I(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? F(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : F(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  var T = {}, V = (function(e2) {
    (0, s.A)(p2, e2);
    var t2, n2, l2 = (t2 = p2, n2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, r2 = (0, c.A)(t2);
      if (n2) {
        var o2 = (0, c.A)(this).constructor;
        e3 = Reflect.construct(r2, arguments, o2);
      } else e3 = r2.apply(this, arguments);
      return (0, u.A)(this, e3);
    });
    function p2(e3) {
      var t3, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (0, o.A)(this, p2), t3 = l2.call(this), L && y.call((0, a.A)(t3)), (function(e4, t4, n4) {
        ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach((function(e5) {
          t4[e5] && (n4[e5] = t4[e5]);
        }));
      })(0, e3, (0, a.A)(t3)), t3.options = n3, void 0 === t3.options.keySeparator && (t3.options.keySeparator = "."), t3.logger = v.create("translator"), t3;
    }
    return (0, i.A)(p2, [{ key: "changeLanguage", value: function(e3) {
      e3 && (this.language = e3);
    } }, { key: "exists", value: function(e3) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
      if (null == e3) return false;
      var n3 = this.resolve(e3, t3);
      return n3 && void 0 !== n3.res;
    } }, { key: "extractFromKey", value: function(e3, t3) {
      var n3 = void 0 !== t3.nsSeparator ? t3.nsSeparator : this.options.nsSeparator;
      void 0 === n3 && (n3 = ":");
      var r2 = void 0 !== t3.keySeparator ? t3.keySeparator : this.options.keySeparator, o2 = t3.ns || this.options.defaultNS || [], i2 = n3 && e3.indexOf(n3) > -1, a2 = !(this.options.userDefinedKeySeparator || t3.keySeparator || this.options.userDefinedNsSeparator || t3.nsSeparator || (function(e4, t4, n4) {
        t4 = t4 || "", n4 = n4 || "";
        var r3 = R.filter((function(e5) {
          return t4.indexOf(e5) < 0 && n4.indexOf(e5) < 0;
        }));
        if (0 === r3.length) return true;
        var o3 = new RegExp("(".concat(r3.map((function(e5) {
          return "?" === e5 ? "\\?" : e5;
        })).join("|"), ")")), i3 = !o3.test(e4);
        if (!i3) {
          var a3 = e4.indexOf(n4);
          a3 > 0 && !o3.test(e4.substring(0, a3)) && (i3 = true);
        }
        return i3;
      })(e3, n3, r2));
      if (i2 && !a2) {
        var s2 = e3.match(this.interpolator.nestingRegexp);
        if (s2 && s2.length > 0) return { key: e3, namespaces: o2 };
        var u2 = e3.split(n3);
        (n3 !== r2 || n3 === r2 && this.options.ns.indexOf(u2[0]) > -1) && (o2 = u2.shift()), e3 = u2.join(r2);
      }
      return "string" == typeof o2 && (o2 = [o2]), { key: e3, namespaces: o2 };
    } }, { key: "translate", value: function(e3, t3, n3) {
      var o2 = this;
      if ("object" !== (0, r.A)(t3) && this.options.overloadTranslationOptionHandler && (t3 = this.options.overloadTranslationOptionHandler(arguments)), "object" === (0, r.A)(t3) && (t3 = I({}, t3)), t3 || (t3 = {}), null == e3) return "";
      Array.isArray(e3) || (e3 = [String(e3)]);
      var i2 = void 0 !== t3.returnDetails ? t3.returnDetails : this.options.returnDetails, a2 = void 0 !== t3.keySeparator ? t3.keySeparator : this.options.keySeparator, s2 = this.extractFromKey(e3[e3.length - 1], t3), u2 = s2.key, c2 = s2.namespaces, l3 = c2[c2.length - 1], f2 = t3.lng || this.language, g2 = t3.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (f2 && "cimode" === f2.toLowerCase()) {
        if (g2) {
          var h2 = t3.nsSeparator || this.options.nsSeparator;
          return i2 ? { res: "".concat(l3).concat(h2).concat(u2), usedKey: u2, exactUsedKey: u2, usedLng: f2, usedNS: l3 } : "".concat(l3).concat(h2).concat(u2);
        }
        return i2 ? { res: u2, usedKey: u2, exactUsedKey: u2, usedLng: f2, usedNS: l3 } : u2;
      }
      var d2 = this.resolve(e3, t3), v2 = d2 && d2.res, y2 = d2 && d2.usedKey || u2, m2 = d2 && d2.exactUsedKey || u2, b2 = Object.prototype.toString.apply(v2), k2 = void 0 !== t3.joinArrays ? t3.joinArrays : this.options.joinArrays, O2 = !this.i18nFormat || this.i18nFormat.handleAsObject;
      if (O2 && v2 && "string" != typeof v2 && "boolean" != typeof v2 && "number" != typeof v2 && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(b2) < 0 && ("string" != typeof k2 || "[object Array]" !== b2)) {
        if (!t3.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var x2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y2, v2, I(I({}, t3), {}, { ns: c2 })) : "key '".concat(u2, " (").concat(this.language, ")' returned an object instead of string.");
          return i2 ? (d2.res = x2, d2) : x2;
        }
        if (a2) {
          var S2 = "[object Array]" === b2, w2 = S2 ? [] : {}, j2 = S2 ? m2 : y2;
          for (var P2 in v2) if (Object.prototype.hasOwnProperty.call(v2, P2)) {
            var L2 = "".concat(j2).concat(a2).concat(P2);
            w2[P2] = this.translate(L2, I(I({}, t3), { joinArrays: false, ns: c2 })), w2[P2] === L2 && (w2[P2] = v2[P2]);
          }
          v2 = w2;
        }
      } else if (O2 && "string" == typeof k2 && "[object Array]" === b2) (v2 = v2.join(k2)) && (v2 = this.extendTranslation(v2, e3, t3, n3));
      else {
        var R2 = false, N2 = false, A2 = void 0 !== t3.count && "string" != typeof t3.count, C2 = p2.hasDefaultValue(t3), E2 = A2 ? this.pluralResolver.getSuffix(f2, t3.count, t3) : "", D2 = t3["defaultValue".concat(E2)] || t3.defaultValue;
        !this.isValidLookup(v2) && C2 && (R2 = true, v2 = D2), this.isValidLookup(v2) || (N2 = true, v2 = u2);
        var F2 = (t3.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && N2 ? void 0 : v2, T2 = C2 && D2 !== v2 && this.options.updateMissing;
        if (N2 || R2 || T2) {
          if (this.logger.log(T2 ? "updateKey" : "missingKey", f2, l3, u2, T2 ? D2 : v2), a2) {
            var V2 = this.resolve(u2, I(I({}, t3), {}, { keySeparator: false }));
            V2 && V2.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var U2 = [], K2 = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t3.lng || this.language);
          if ("fallback" === this.options.saveMissingTo && K2 && K2[0]) for (var B2 = 0; B2 < K2.length; B2++) U2.push(K2[B2]);
          else "all" === this.options.saveMissingTo ? U2 = this.languageUtils.toResolveHierarchy(t3.lng || this.language) : U2.push(t3.lng || this.language);
          var M2 = function(e4, n4, r2) {
            var i3 = C2 && r2 !== v2 ? r2 : F2;
            o2.options.missingKeyHandler ? o2.options.missingKeyHandler(e4, l3, n4, i3, T2, t3) : o2.backendConnector && o2.backendConnector.saveMissing && o2.backendConnector.saveMissing(e4, l3, n4, i3, T2, t3), o2.emit("missingKey", e4, l3, n4, v2);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && A2 ? U2.forEach((function(e4) {
            o2.pluralResolver.getSuffixes(e4, t3).forEach((function(n4) {
              M2([e4], u2 + n4, t3["defaultValue".concat(n4)] || D2);
            }));
          })) : M2(U2, u2, D2));
        }
        v2 = this.extendTranslation(v2, e3, t3, d2, n3), N2 && v2 === u2 && this.options.appendNamespaceToMissingKey && (v2 = "".concat(l3, ":").concat(u2)), (N2 || R2) && this.options.parseMissingKeyHandler && (v2 = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(l3, ":").concat(u2) : u2, R2 ? v2 : void 0) : this.options.parseMissingKeyHandler(v2));
      }
      return i2 ? (d2.res = v2, d2) : v2;
    } }, { key: "extendTranslation", value: function(e3, t3, n3, r2, o2) {
      var i2 = this;
      if (this.i18nFormat && this.i18nFormat.parse) e3 = this.i18nFormat.parse(e3, I(I({}, this.options.interpolation.defaultVariables), n3), r2.usedLng, r2.usedNS, r2.usedKey, { resolved: r2 });
      else if (!n3.skipInterpolation) {
        n3.interpolation && this.interpolator.init(I(I({}, n3), { interpolation: I(I({}, this.options.interpolation), n3.interpolation) }));
        var a2, s2 = "string" == typeof e3 && (n3 && n3.interpolation && void 0 !== n3.interpolation.skipOnVariables ? n3.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        if (s2) {
          var u2 = e3.match(this.interpolator.nestingRegexp);
          a2 = u2 && u2.length;
        }
        var c2 = n3.replace && "string" != typeof n3.replace ? n3.replace : n3;
        if (this.options.interpolation.defaultVariables && (c2 = I(I({}, this.options.interpolation.defaultVariables), c2)), e3 = this.interpolator.interpolate(e3, c2, n3.lng || this.language, n3), s2) {
          var l3 = e3.match(this.interpolator.nestingRegexp);
          a2 < (l3 && l3.length) && (n3.nest = false);
        }
        !n3.lng && "v1" !== this.options.compatibilityAPI && r2 && r2.res && (n3.lng = r2.usedLng), false !== n3.nest && (e3 = this.interpolator.nest(e3, (function() {
          for (var e4 = arguments.length, r3 = new Array(e4), a3 = 0; a3 < e4; a3++) r3[a3] = arguments[a3];
          return o2 && o2[0] === r3[0] && !n3.context ? (i2.logger.warn("It seems you are nesting recursively key: ".concat(r3[0], " in key: ").concat(t3[0])), null) : i2.translate.apply(i2, r3.concat([t3]));
        }), n3)), n3.interpolation && this.interpolator.reset();
      }
      var p3 = n3.postProcess || this.options.postProcess, f2 = "string" == typeof p3 ? [p3] : p3;
      return null != e3 && f2 && f2.length && false !== n3.applyPostProcessor && (e3 = D.handle(f2, e3, t3, this.options && this.options.postProcessPassResolved ? I({ i18nResolved: r2 }, n3) : n3, this)), e3;
    } }, { key: "resolve", value: function(e3) {
      var t3, n3, r2, o2, i2, a2 = this, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e3 && (e3 = [e3]), e3.forEach((function(e4) {
        if (!a2.isValidLookup(t3)) {
          var u2 = a2.extractFromKey(e4, s2), c2 = u2.key;
          n3 = c2;
          var l3 = u2.namespaces;
          a2.options.fallbackNS && (l3 = l3.concat(a2.options.fallbackNS));
          var p3 = void 0 !== s2.count && "string" != typeof s2.count, f2 = p3 && !s2.ordinal && 0 === s2.count && a2.pluralResolver.shouldUseIntlApi(), g2 = void 0 !== s2.context && ("string" == typeof s2.context || "number" == typeof s2.context) && "" !== s2.context, h2 = s2.lngs ? s2.lngs : a2.languageUtils.toResolveHierarchy(s2.lng || a2.language, s2.fallbackLng);
          l3.forEach((function(e5) {
            a2.isValidLookup(t3) || (i2 = e5, !T["".concat(h2[0], "-").concat(e5)] && a2.utils && a2.utils.hasLoadedNamespace && !a2.utils.hasLoadedNamespace(i2) && (T["".concat(h2[0], "-").concat(e5)] = true, a2.logger.warn('key "'.concat(n3, '" for languages "').concat(h2.join(", "), `" won't get resolved as namespace "`).concat(i2, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h2.forEach((function(n4) {
              if (!a2.isValidLookup(t3)) {
                o2 = n4;
                var i3, u3 = [c2];
                if (a2.i18nFormat && a2.i18nFormat.addLookupKeys) a2.i18nFormat.addLookupKeys(u3, c2, n4, e5, s2);
                else {
                  var l4;
                  p3 && (l4 = a2.pluralResolver.getSuffix(n4, s2.count, s2));
                  var h3 = "".concat(a2.options.pluralSeparator, "zero");
                  if (p3 && (u3.push(c2 + l4), f2 && u3.push(c2 + h3)), g2) {
                    var d2 = "".concat(c2).concat(a2.options.contextSeparator).concat(s2.context);
                    u3.push(d2), p3 && (u3.push(d2 + l4), f2 && u3.push(d2 + h3));
                  }
                }
                for (; i3 = u3.pop(); ) a2.isValidLookup(t3) || (r2 = i3, t3 = a2.getResource(n4, e5, i3, s2));
              }
            })));
          }));
        }
      })), { res: t3, usedKey: n3, exactUsedKey: r2, usedLng: o2, usedNS: i2 };
    } }, { key: "isValidLookup", value: function(e3) {
      return !(void 0 === e3 || !this.options.returnNull && null === e3 || !this.options.returnEmptyString && "" === e3);
    } }, { key: "getResource", value: function(e3, t3, n3) {
      var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e3, t3, n3, r2) : this.resourceStore.getResource(e3, t3, n3, r2);
    } }], [{ key: "hasDefaultValue", value: function(e3) {
      for (var t3 in e3) if (Object.prototype.hasOwnProperty.call(e3, t3) && "defaultValue" === t3.substring(0, 12) && void 0 !== e3[t3]) return true;
      return false;
    } }]), p2;
  })(y);
  function U(e2) {
    return e2.charAt(0).toUpperCase() + e2.slice(1);
  }
  var K = (function() {
    function e2(t2) {
      (0, o.A)(this, e2), this.options = t2, this.supportedLngs = this.options.supportedLngs || false, this.logger = v.create("languageUtils");
    }
    return (0, i.A)(e2, [{ key: "getScriptPartFromCode", value: function(e3) {
      if (!e3 || e3.indexOf("-") < 0) return null;
      var t2 = e3.split("-");
      return 2 === t2.length ? null : (t2.pop(), "x" === t2[t2.length - 1].toLowerCase() ? null : this.formatLanguageCode(t2.join("-")));
    } }, { key: "getLanguagePartFromCode", value: function(e3) {
      if (!e3 || e3.indexOf("-") < 0) return e3;
      var t2 = e3.split("-");
      return this.formatLanguageCode(t2[0]);
    } }, { key: "formatLanguageCode", value: function(e3) {
      if ("string" == typeof e3 && e3.indexOf("-") > -1) {
        var t2 = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n2 = e3.split("-");
        return this.options.lowerCaseLng ? n2 = n2.map((function(e4) {
          return e4.toLowerCase();
        })) : 2 === n2.length ? (n2[0] = n2[0].toLowerCase(), n2[1] = n2[1].toUpperCase(), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = U(n2[1].toLowerCase()))) : 3 === n2.length && (n2[0] = n2[0].toLowerCase(), 2 === n2[1].length && (n2[1] = n2[1].toUpperCase()), "sgn" !== n2[0] && 2 === n2[2].length && (n2[2] = n2[2].toUpperCase()), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = U(n2[1].toLowerCase())), t2.indexOf(n2[2].toLowerCase()) > -1 && (n2[2] = U(n2[2].toLowerCase()))), n2.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? e3.toLowerCase() : e3;
    } }, { key: "isSupportedCode", value: function(e3) {
      return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e3 = this.getLanguagePartFromCode(e3)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e3) > -1;
    } }, { key: "getBestMatchFromCodes", value: function(e3) {
      var t2, n2 = this;
      return e3 ? (e3.forEach((function(e4) {
        if (!t2) {
          var r2 = n2.formatLanguageCode(e4);
          n2.options.supportedLngs && !n2.isSupportedCode(r2) || (t2 = r2);
        }
      })), !t2 && this.options.supportedLngs && e3.forEach((function(e4) {
        if (!t2) {
          var r2 = n2.getLanguagePartFromCode(e4);
          if (n2.isSupportedCode(r2)) return t2 = r2;
          t2 = n2.options.supportedLngs.find((function(e5) {
            return e5 === r2 ? e5 : e5.indexOf("-") < 0 && r2.indexOf("-") < 0 ? void 0 : 0 === e5.indexOf(r2) ? e5 : void 0;
          }));
        }
      })), t2 || (t2 = this.getFallbackCodes(this.options.fallbackLng)[0]), t2) : null;
    } }, { key: "getFallbackCodes", value: function(e3, t2) {
      if (!e3) return [];
      if ("function" == typeof e3 && (e3 = e3(t2)), "string" == typeof e3 && (e3 = [e3]), "[object Array]" === Object.prototype.toString.apply(e3)) return e3;
      if (!t2) return e3.default || [];
      var n2 = e3[t2];
      return n2 || (n2 = e3[this.getScriptPartFromCode(t2)]), n2 || (n2 = e3[this.formatLanguageCode(t2)]), n2 || (n2 = e3[this.getLanguagePartFromCode(t2)]), n2 || (n2 = e3.default), n2 || [];
    } }, { key: "toResolveHierarchy", value: function(e3, t2) {
      var n2 = this, r2 = this.getFallbackCodes(t2 || this.options.fallbackLng || [], e3), o2 = [], i2 = function(e4) {
        e4 && (n2.isSupportedCode(e4) ? o2.push(e4) : n2.logger.warn("rejecting language code not found in supportedLngs: ".concat(e4)));
      };
      return "string" == typeof e3 && e3.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i2(this.formatLanguageCode(e3)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i2(this.getScriptPartFromCode(e3)), "currentOnly" !== this.options.load && i2(this.getLanguagePartFromCode(e3))) : "string" == typeof e3 && i2(this.formatLanguageCode(e3)), r2.forEach((function(e4) {
        o2.indexOf(e4) < 0 && i2(n2.formatLanguageCode(e4));
      })), o2;
    } }]), e2;
  })(), B = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], M = { 1: function(e2) {
    return Number(e2 > 1);
  }, 2: function(e2) {
    return Number(1 != e2);
  }, 3: function(e2) {
    return 0;
  }, 4: function(e2) {
    return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : e2 % 10 >= 2 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
  }, 5: function(e2) {
    return Number(0 == e2 ? 0 : 1 == e2 ? 1 : 2 == e2 ? 2 : e2 % 100 >= 3 && e2 % 100 <= 10 ? 3 : e2 % 100 >= 11 ? 4 : 5);
  }, 6: function(e2) {
    return Number(1 == e2 ? 0 : e2 >= 2 && e2 <= 4 ? 1 : 2);
  }, 7: function(e2) {
    return Number(1 == e2 ? 0 : e2 % 10 >= 2 && e2 % 10 <= 4 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
  }, 8: function(e2) {
    return Number(1 == e2 ? 0 : 2 == e2 ? 1 : 8 != e2 && 11 != e2 ? 2 : 3);
  }, 9: function(e2) {
    return Number(e2 >= 2);
  }, 10: function(e2) {
    return Number(1 == e2 ? 0 : 2 == e2 ? 1 : e2 < 7 ? 2 : e2 < 11 ? 3 : 4);
  }, 11: function(e2) {
    return Number(1 == e2 || 11 == e2 ? 0 : 2 == e2 || 12 == e2 ? 1 : e2 > 2 && e2 < 20 ? 2 : 3);
  }, 12: function(e2) {
    return Number(e2 % 10 != 1 || e2 % 100 == 11);
  }, 13: function(e2) {
    return Number(0 !== e2);
  }, 14: function(e2) {
    return Number(1 == e2 ? 0 : 2 == e2 ? 1 : 3 == e2 ? 2 : 3);
  }, 15: function(e2) {
    return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : e2 % 10 >= 2 && (e2 % 100 < 10 || e2 % 100 >= 20) ? 1 : 2);
  }, 16: function(e2) {
    return Number(e2 % 10 == 1 && e2 % 100 != 11 ? 0 : 0 !== e2 ? 1 : 2);
  }, 17: function(e2) {
    return Number(1 == e2 || e2 % 10 == 1 && e2 % 100 != 11 ? 0 : 1);
  }, 18: function(e2) {
    return Number(0 == e2 ? 0 : 1 == e2 ? 1 : 2);
  }, 19: function(e2) {
    return Number(1 == e2 ? 0 : 0 == e2 || e2 % 100 > 1 && e2 % 100 < 11 ? 1 : e2 % 100 > 10 && e2 % 100 < 20 ? 2 : 3);
  }, 20: function(e2) {
    return Number(1 == e2 ? 0 : 0 == e2 || e2 % 100 > 0 && e2 % 100 < 20 ? 1 : 2);
  }, 21: function(e2) {
    return Number(e2 % 100 == 1 ? 1 : e2 % 100 == 2 ? 2 : e2 % 100 == 3 || e2 % 100 == 4 ? 3 : 0);
  }, 22: function(e2) {
    return Number(1 == e2 ? 0 : 2 == e2 ? 1 : (e2 < 0 || e2 > 10) && e2 % 10 == 0 ? 2 : 3);
  } }, H = ["v1", "v2", "v3"], J = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, z = (function() {
    function e2(t2) {
      var n2, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (0, o.A)(this, e2), this.languageUtils = t2, this.options = r2, this.logger = v.create("pluralResolver"), this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = (n2 = {}, B.forEach((function(e3) {
        e3.lngs.forEach((function(t3) {
          n2[t3] = { numbers: e3.nr, plurals: M[e3.fc] };
        }));
      })), n2);
    }
    return (0, i.A)(e2, [{ key: "addRule", value: function(e3, t2) {
      this.rules[e3] = t2;
    } }, { key: "getRule", value: function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.shouldUseIntlApi()) try {
        return new Intl.PluralRules(e3, { type: t2.ordinal ? "ordinal" : "cardinal" });
      } catch (e4) {
        return;
      }
      return this.rules[e3] || this.rules[this.languageUtils.getLanguagePartFromCode(e3)];
    } }, { key: "needsPlural", value: function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = this.getRule(e3, t2);
      return this.shouldUseIntlApi() ? n2 && n2.resolvedOptions().pluralCategories.length > 1 : n2 && n2.numbers.length > 1;
    } }, { key: "getPluralFormsOfKey", value: function(e3, t2) {
      var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return this.getSuffixes(e3, n2).map((function(e4) {
        return "".concat(t2).concat(e4);
      }));
    } }, { key: "getSuffixes", value: function(e3) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = this.getRule(e3, n2);
      return r2 ? this.shouldUseIntlApi() ? r2.resolvedOptions().pluralCategories.sort((function(e4, t3) {
        return J[e4] - J[t3];
      })).map((function(e4) {
        return "".concat(t2.options.prepend).concat(e4);
      })) : r2.numbers.map((function(r3) {
        return t2.getSuffix(e3, r3, n2);
      })) : [];
    } }, { key: "getSuffix", value: function(e3, t2) {
      var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = this.getRule(e3, n2);
      return r2 ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r2.select(t2)) : this.getSuffixRetroCompatible(r2, t2) : (this.logger.warn("no plural rule found for: ".concat(e3)), "");
    } }, { key: "getSuffixRetroCompatible", value: function(e3, t2) {
      var n2 = this, r2 = e3.noAbs ? e3.plurals(t2) : e3.plurals(Math.abs(t2)), o2 = e3.numbers[r2];
      this.options.simplifyPluralSuffix && 2 === e3.numbers.length && 1 === e3.numbers[0] && (2 === o2 ? o2 = "plural" : 1 === o2 && (o2 = ""));
      var i2 = function() {
        return n2.options.prepend && o2.toString() ? n2.options.prepend + o2.toString() : o2.toString();
      };
      return "v1" === this.options.compatibilityJSON ? 1 === o2 ? "" : "number" == typeof o2 ? "_plural_".concat(o2.toString()) : i2() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e3.numbers.length && 1 === e3.numbers[0] ? i2() : this.options.prepend && r2.toString() ? this.options.prepend + r2.toString() : r2.toString();
    } }, { key: "shouldUseIntlApi", value: function() {
      return !H.includes(this.options.compatibilityJSON);
    } }]), e2;
  })();
  function q(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function $(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? q(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : q(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  function _(e2, t2, n2) {
    var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".", o2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i2 = (function(e3, t3, n3) {
      var r3 = x(e3, n3);
      return void 0 !== r3 ? r3 : x(t3, n3);
    })(e2, t2, n2);
    return !i2 && o2 && "string" == typeof n2 && void 0 === (i2 = N(e2, n2, r2)) && (i2 = N(t2, n2, r2)), i2;
  }
  var W = (function() {
    function e2() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, o.A)(this, e2), this.logger = v.create("interpolator"), this.options = t2, this.format = t2.interpolation && t2.interpolation.format || function(e3) {
        return e3;
      }, this.init(t2);
    }
    return (0, i.A)(e2, [{ key: "init", value: function() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e3.interpolation || (e3.interpolation = { escapeValue: true });
      var t2 = e3.interpolation;
      this.escape = void 0 !== t2.escape ? t2.escape : P, this.escapeValue = void 0 === t2.escapeValue || t2.escapeValue, this.useRawValueToEscape = void 0 !== t2.useRawValueToEscape && t2.useRawValueToEscape, this.prefix = t2.prefix ? w(t2.prefix) : t2.prefixEscaped || "{{", this.suffix = t2.suffix ? w(t2.suffix) : t2.suffixEscaped || "}}", this.formatSeparator = t2.formatSeparator ? t2.formatSeparator : t2.formatSeparator || ",", this.unescapePrefix = t2.unescapeSuffix ? "" : t2.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t2.unescapeSuffix || "", this.nestingPrefix = t2.nestingPrefix ? w(t2.nestingPrefix) : t2.nestingPrefixEscaped || w("$t("), this.nestingSuffix = t2.nestingSuffix ? w(t2.nestingSuffix) : t2.nestingSuffixEscaped || w(")"), this.nestingOptionsSeparator = t2.nestingOptionsSeparator ? t2.nestingOptionsSeparator : t2.nestingOptionsSeparator || ",", this.maxReplaces = t2.maxReplaces ? t2.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t2.alwaysFormat && t2.alwaysFormat, this.resetRegExp();
    } }, { key: "reset", value: function() {
      this.options && this.init(this.options);
    } }, { key: "resetRegExp", value: function() {
      var e3 = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(e3, "g");
      var t2 = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(t2, "g");
      var n2 = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(n2, "g");
    } }, { key: "interpolate", value: function(e3, t2, n2, r2) {
      var o2, i2, a2, s2 = this, u2 = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c2(e4) {
        return e4.replace(/\$/g, "$$$$");
      }
      var l2 = function(e4) {
        if (e4.indexOf(s2.formatSeparator) < 0) {
          var o3 = _(t2, u2, e4, s2.options.keySeparator, s2.options.ignoreJSONStructure);
          return s2.alwaysFormat ? s2.format(o3, void 0, n2, $($($({}, r2), t2), {}, { interpolationkey: e4 })) : o3;
        }
        var i3 = e4.split(s2.formatSeparator), a3 = i3.shift().trim(), c3 = i3.join(s2.formatSeparator).trim();
        return s2.format(_(t2, u2, a3, s2.options.keySeparator, s2.options.ignoreJSONStructure), c3, n2, $($($({}, r2), t2), {}, { interpolationkey: a3 }));
      };
      this.resetRegExp();
      var p2 = r2 && r2.missingInterpolationHandler || this.options.missingInterpolationHandler, f2 = r2 && r2.interpolation && void 0 !== r2.interpolation.skipOnVariables ? r2.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      return [{ regex: this.regexpUnescape, safeValue: function(e4) {
        return c2(e4);
      } }, { regex: this.regexp, safeValue: function(e4) {
        return s2.escapeValue ? c2(s2.escape(e4)) : c2(e4);
      } }].forEach((function(t3) {
        for (a2 = 0; o2 = t3.regex.exec(e3); ) {
          var n3 = o2[1].trim();
          if (void 0 === (i2 = l2(n3))) if ("function" == typeof p2) {
            var u3 = p2(e3, o2, r2);
            i2 = "string" == typeof u3 ? u3 : "";
          } else if (r2 && Object.prototype.hasOwnProperty.call(r2, n3)) i2 = "";
          else {
            if (f2) {
              i2 = o2[0];
              continue;
            }
            s2.logger.warn("missed to pass in variable ".concat(n3, " for interpolating ").concat(e3)), i2 = "";
          }
          else "string" == typeof i2 || s2.useRawValueToEscape || (i2 = b(i2));
          var c3 = t3.safeValue(i2);
          if (e3 = e3.replace(o2[0], c3), f2 ? (t3.regex.lastIndex += i2.length, t3.regex.lastIndex -= o2[0].length) : t3.regex.lastIndex = 0, ++a2 >= s2.maxReplaces) break;
        }
      })), e3;
    } }, { key: "nest", value: function(e3, t2) {
      var n2, r2, o2, i2 = this, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      function s2(e4, t3) {
        var n3 = this.nestingOptionsSeparator;
        if (e4.indexOf(n3) < 0) return e4;
        var r3 = e4.split(new RegExp("".concat(n3, "[ ]*{"))), i3 = "{".concat(r3[1]);
        e4 = r3[0];
        var a3 = (i3 = this.interpolate(i3, o2)).match(/'/g), s3 = i3.match(/"/g);
        (a3 && a3.length % 2 == 0 && !s3 || s3.length % 2 != 0) && (i3 = i3.replace(/'/g, '"'));
        try {
          o2 = JSON.parse(i3), t3 && (o2 = $($({}, t3), o2));
        } catch (t4) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(e4), t4), "".concat(e4).concat(n3).concat(i3);
        }
        return delete o2.defaultValue, e4;
      }
      for (; n2 = this.nestingRegexp.exec(e3); ) {
        var u2 = [];
        (o2 = (o2 = $({}, a2)).replace && "string" != typeof o2.replace ? o2.replace : o2).applyPostProcessor = false, delete o2.defaultValue;
        var c2 = false;
        if (-1 !== n2[0].indexOf(this.formatSeparator) && !/{.*}/.test(n2[1])) {
          var l2 = n2[1].split(this.formatSeparator).map((function(e4) {
            return e4.trim();
          }));
          n2[1] = l2.shift(), u2 = l2, c2 = true;
        }
        if ((r2 = t2(s2.call(this, n2[1].trim(), o2), o2)) && n2[0] === e3 && "string" != typeof r2) return r2;
        "string" != typeof r2 && (r2 = b(r2)), r2 || (this.logger.warn("missed to resolve ".concat(n2[1], " for nesting ").concat(e3)), r2 = ""), c2 && (r2 = u2.reduce((function(e4, t3) {
          return i2.format(e4, t3, a2.lng, $($({}, a2), {}, { interpolationkey: n2[1].trim() }));
        }), r2.trim())), e3 = e3.replace(n2[0], r2), this.regexp.lastIndex = 0;
      }
      return e3;
    } }]), e2;
  })();
  function Y(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function G(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Y(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Y(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  function Q(e2) {
    var t2 = {};
    return function(n2, r2, o2) {
      var i2 = r2 + JSON.stringify(o2), a2 = t2[i2];
      return a2 || (a2 = e2(r2, o2), t2[i2] = a2), a2(n2);
    };
  }
  var X = (function() {
    function e2() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, o.A)(this, e2), this.logger = v.create("formatter"), this.options = t2, this.formats = { number: Q((function(e3, t3) {
        var n2 = new Intl.NumberFormat(e3, G({}, t3));
        return function(e4) {
          return n2.format(e4);
        };
      })), currency: Q((function(e3, t3) {
        var n2 = new Intl.NumberFormat(e3, G(G({}, t3), {}, { style: "currency" }));
        return function(e4) {
          return n2.format(e4);
        };
      })), datetime: Q((function(e3, t3) {
        var n2 = new Intl.DateTimeFormat(e3, G({}, t3));
        return function(e4) {
          return n2.format(e4);
        };
      })), relativetime: Q((function(e3, t3) {
        var n2 = new Intl.RelativeTimeFormat(e3, G({}, t3));
        return function(e4) {
          return n2.format(e4, t3.range || "day");
        };
      })), list: Q((function(e3, t3) {
        var n2 = new Intl.ListFormat(e3, G({}, t3));
        return function(e4) {
          return n2.format(e4);
        };
      })) }, this.init(t2);
    }
    return (0, i.A)(e2, [{ key: "init", value: function(e3) {
      var t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }).interpolation;
      this.formatSeparator = t2.formatSeparator ? t2.formatSeparator : t2.formatSeparator || ",";
    } }, { key: "add", value: function(e3, t2) {
      this.formats[e3.toLowerCase().trim()] = t2;
    } }, { key: "addCached", value: function(e3, t2) {
      this.formats[e3.toLowerCase().trim()] = Q(t2);
    } }, { key: "format", value: function(e3, t2, n2) {
      var r2 = this, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return t2.split(this.formatSeparator).reduce((function(e4, t3) {
        var i2 = (function(e5) {
          var t4 = e5.toLowerCase().trim(), n3 = {};
          if (e5.indexOf("(") > -1) {
            var r3 = e5.split("(");
            t4 = r3[0].toLowerCase().trim();
            var o3 = r3[1].substring(0, r3[1].length - 1);
            "currency" === t4 && o3.indexOf(":") < 0 ? n3.currency || (n3.currency = o3.trim()) : "relativetime" === t4 && o3.indexOf(":") < 0 ? n3.range || (n3.range = o3.trim()) : o3.split(";").forEach((function(e6) {
              if (e6) {
                var t5 = e6.split(":"), r4 = (0, p.A)(t5), o4 = r4[0], i3 = r4.slice(1).join(":").trim().replace(/^'+|'+$/g, "");
                n3[o4.trim()] || (n3[o4.trim()] = i3), "false" === i3 && (n3[o4.trim()] = false), "true" === i3 && (n3[o4.trim()] = true), isNaN(i3) || (n3[o4.trim()] = parseInt(i3, 10));
              }
            }));
          }
          return { formatName: t4, formatOptions: n3 };
        })(t3), a2 = i2.formatName, s2 = i2.formatOptions;
        if (r2.formats[a2]) {
          var u2 = e4;
          try {
            var c2 = o2 && o2.formatParams && o2.formatParams[o2.interpolationkey] || {}, l2 = c2.locale || c2.lng || o2.locale || o2.lng || n2;
            u2 = r2.formats[a2](e4, l2, G(G(G({}, s2), o2), c2));
          } catch (e5) {
            r2.logger.warn(e5);
          }
          return u2;
        }
        return r2.logger.warn("there was no format function for ".concat(a2)), e4;
      }), e3);
    } }]), e2;
  })();
  function Z(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function ee(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Z(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Z(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  var te = (function(e2) {
    (0, s.A)(l2, e2);
    var t2, n2, r2 = (t2 = l2, n2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, r3 = (0, c.A)(t2);
      if (n2) {
        var o2 = (0, c.A)(this).constructor;
        e3 = Reflect.construct(r3, arguments, o2);
      } else e3 = r3.apply(this, arguments);
      return (0, u.A)(this, e3);
    });
    function l2(e3, t3, n3) {
      var i2, s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return (0, o.A)(this, l2), i2 = r2.call(this), L && y.call((0, a.A)(i2)), i2.backend = e3, i2.store = t3, i2.services = n3, i2.languageUtils = n3.languageUtils, i2.options = s2, i2.logger = v.create("backendConnector"), i2.waitingReads = [], i2.maxParallelReads = s2.maxParallelReads || 10, i2.readingCalls = 0, i2.maxRetries = s2.maxRetries >= 0 ? s2.maxRetries : 5, i2.retryTimeout = s2.retryTimeout >= 1 ? s2.retryTimeout : 350, i2.state = {}, i2.queue = [], i2.backend && i2.backend.init && i2.backend.init(n3, s2.backend, s2), i2;
    }
    return (0, i.A)(l2, [{ key: "queueLoad", value: function(e3, t3, n3, r3) {
      var o2 = this, i2 = {}, a2 = {}, s2 = {}, u2 = {};
      return e3.forEach((function(e4) {
        var r4 = true;
        t3.forEach((function(t4) {
          var s3 = "".concat(e4, "|").concat(t4);
          !n3.reload && o2.store.hasResourceBundle(e4, t4) ? o2.state[s3] = 2 : o2.state[s3] < 0 || (1 === o2.state[s3] ? void 0 === a2[s3] && (a2[s3] = true) : (o2.state[s3] = 1, r4 = false, void 0 === a2[s3] && (a2[s3] = true), void 0 === i2[s3] && (i2[s3] = true), void 0 === u2[t4] && (u2[t4] = true)));
        })), r4 || (s2[e4] = true);
      })), (Object.keys(i2).length || Object.keys(a2).length) && this.queue.push({ pending: a2, pendingCount: Object.keys(a2).length, loaded: {}, errors: [], callback: r3 }), { toLoad: Object.keys(i2), pending: Object.keys(a2), toLoadLanguages: Object.keys(s2), toLoadNamespaces: Object.keys(u2) };
    } }, { key: "loaded", value: function(e3, t3, n3) {
      var r3 = e3.split("|"), o2 = r3[0], i2 = r3[1];
      t3 && this.emit("failedLoading", o2, i2, t3), n3 && this.store.addResourceBundle(o2, i2, n3), this.state[e3] = t3 ? -1 : 2;
      var a2 = {};
      this.queue.forEach((function(n4) {
        var r4, s2, u2, c2, l3;
        r4 = n4.loaded, s2 = i2, (c2 = (u2 = k(r4, [o2], Object)).obj)[l3 = u2.k] = c2[l3] || [], c2[l3].push(s2), (function(e4, t4) {
          void 0 !== e4.pending[t4] && (delete e4.pending[t4], e4.pendingCount--);
        })(n4, e3), t3 && n4.errors.push(t3), 0 !== n4.pendingCount || n4.done || (Object.keys(n4.loaded).forEach((function(e4) {
          a2[e4] || (a2[e4] = {});
          var t4 = n4.loaded[e4];
          t4.length && t4.forEach((function(t5) {
            void 0 === a2[e4][t5] && (a2[e4][t5] = true);
          }));
        })), n4.done = true, n4.errors.length ? n4.callback(n4.errors) : n4.callback());
      })), this.emit("loaded", a2), this.queue = this.queue.filter((function(e4) {
        return !e4.done;
      }));
    } }, { key: "read", value: function(e3, t3, n3) {
      var r3 = this, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout, a2 = arguments.length > 5 ? arguments[5] : void 0;
      if (!e3.length) return a2(null, {});
      if (this.readingCalls >= this.maxParallelReads) this.waitingReads.push({ lng: e3, ns: t3, fcName: n3, tried: o2, wait: i2, callback: a2 });
      else {
        this.readingCalls++;
        var s2 = function(s3, u3) {
          if (r3.readingCalls--, r3.waitingReads.length > 0) {
            var c3 = r3.waitingReads.shift();
            r3.read(c3.lng, c3.ns, c3.fcName, c3.tried, c3.wait, c3.callback);
          }
          s3 && u3 && o2 < r3.maxRetries ? setTimeout((function() {
            r3.read.call(r3, e3, t3, n3, o2 + 1, 2 * i2, a2);
          }), i2) : a2(s3, u3);
        }, u2 = this.backend[n3].bind(this.backend);
        if (2 !== u2.length) return u2(e3, t3, s2);
        try {
          var c2 = u2(e3, t3);
          c2 && "function" == typeof c2.then ? c2.then((function(e4) {
            return s2(null, e4);
          })).catch(s2) : s2(null, c2);
        } catch (e4) {
          s2(e4);
        }
      }
    } }, { key: "prepareLoading", value: function(e3, t3) {
      var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o2 && o2();
      "string" == typeof e3 && (e3 = this.languageUtils.toResolveHierarchy(e3)), "string" == typeof t3 && (t3 = [t3]);
      var i2 = this.queueLoad(e3, t3, r3, o2);
      if (!i2.toLoad.length) return i2.pending.length || o2(), null;
      i2.toLoad.forEach((function(e4) {
        n3.loadOne(e4);
      }));
    } }, { key: "load", value: function(e3, t3, n3) {
      this.prepareLoading(e3, t3, {}, n3);
    } }, { key: "reload", value: function(e3, t3, n3) {
      this.prepareLoading(e3, t3, { reload: true }, n3);
    } }, { key: "loadOne", value: function(e3) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r3 = e3.split("|"), o2 = r3[0], i2 = r3[1];
      this.read(o2, i2, "read", void 0, void 0, (function(r4, a2) {
        r4 && t3.logger.warn("".concat(n3, "loading namespace ").concat(i2, " for language ").concat(o2, " failed"), r4), !r4 && a2 && t3.logger.log("".concat(n3, "loaded namespace ").concat(i2, " for language ").concat(o2), a2), t3.loaded(e3, r4, a2);
      }));
    } }, { key: "saveMissing", value: function(e3, t3, n3, r3, o2) {
      var i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, a2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t3)) this.logger.warn('did not save key "'.concat(n3, '" as the namespace "').concat(t3, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      else if (null != n3 && "" !== n3) {
        if (this.backend && this.backend.create) {
          var s2 = ee(ee({}, i2), {}, { isUpdate: o2 }), u2 = this.backend.create.bind(this.backend);
          if (u2.length < 6) try {
            var c2;
            (c2 = 5 === u2.length ? u2(e3, t3, n3, r3, s2) : u2(e3, t3, n3, r3)) && "function" == typeof c2.then ? c2.then((function(e4) {
              return a2(null, e4);
            })).catch(a2) : a2(null, c2);
          } catch (e4) {
            a2(e4);
          }
          else u2(e3, t3, n3, r3, a2, s2);
        }
        e3 && e3[0] && this.store.addResource(e3[0], t3, n3, r3);
      }
    } }]), l2;
  })(y);
  function ne() {
    return { debug: false, initImmediate: true, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: false, supportedLngs: false, nonExplicitSupportedLngs: false, load: "all", preload: false, simplifyPluralSuffix: true, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: false, saveMissing: false, updateMissing: false, saveMissingTo: "fallback", saveMissingPlurals: true, missingKeyHandler: false, missingInterpolationHandler: false, postProcess: false, postProcessPassResolved: false, returnNull: true, returnEmptyString: true, returnObjects: false, joinArrays: false, returnedObjectHandler: false, parseMissingKeyHandler: false, appendNamespaceToMissingKey: false, appendNamespaceToCIMode: false, overloadTranslationOptionHandler: function(e2) {
      var t2 = {};
      if ("object" === (0, r.A)(e2[1]) && (t2 = e2[1]), "string" == typeof e2[1] && (t2.defaultValue = e2[1]), "string" == typeof e2[2] && (t2.tDescription = e2[2]), "object" === (0, r.A)(e2[2]) || "object" === (0, r.A)(e2[3])) {
        var n2 = e2[3] || e2[2];
        Object.keys(n2).forEach((function(e3) {
          t2[e3] = n2[e3];
        }));
      }
      return t2;
    }, interpolation: { escapeValue: true, format: function(e2, t2, n2, r2) {
      return e2;
    }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: true } };
  }
  function re(e2) {
    return "string" == typeof e2.ns && (e2.ns = [e2.ns]), "string" == typeof e2.fallbackLng && (e2.fallbackLng = [e2.fallbackLng]), "string" == typeof e2.fallbackNS && (e2.fallbackNS = [e2.fallbackNS]), e2.supportedLngs && e2.supportedLngs.indexOf("cimode") < 0 && (e2.supportedLngs = e2.supportedLngs.concat(["cimode"])), e2;
  }
  function oe(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function ie(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? oe(Object(n2), true).forEach((function(t3) {
        (0, l.A)(e2, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : oe(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e2;
  }
  function ae() {
  }
  var se = (function(e2) {
    (0, s.A)(p2, e2);
    var t2, n2, l2 = (t2 = p2, n2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, r2 = (0, c.A)(t2);
      if (n2) {
        var o2 = (0, c.A)(this).constructor;
        e3 = Reflect.construct(r2, arguments, o2);
      } else e3 = r2.apply(this, arguments);
      return (0, u.A)(this, e3);
    });
    function p2() {
      var e3, t3, n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0;
      if ((0, o.A)(this, p2), e3 = l2.call(this), L && y.call((0, a.A)(e3)), e3.options = re(n3), e3.services = {}, e3.logger = v, e3.modules = { external: [] }, t3 = (0, a.A)(e3), Object.getOwnPropertyNames(Object.getPrototypeOf(t3)).forEach((function(e4) {
        "function" == typeof t3[e4] && (t3[e4] = t3[e4].bind(t3));
      })), r2 && !e3.isInitialized && !n3.isClone) {
        if (!e3.options.initImmediate) return e3.init(n3, r2), (0, u.A)(e3, (0, a.A)(e3));
        setTimeout((function() {
          e3.init(n3, r2);
        }), 0);
      }
      return e3;
    }
    return (0, i.A)(p2, [{ key: "init", value: function() {
      var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = arguments.length > 1 ? arguments[1] : void 0;
      "function" == typeof t3 && (n3 = t3, t3 = {}), !t3.defaultNS && false !== t3.defaultNS && t3.ns && ("string" == typeof t3.ns ? t3.defaultNS = t3.ns : t3.ns.indexOf("translation") < 0 && (t3.defaultNS = t3.ns[0]));
      var r2 = ne();
      function o2(e4) {
        return e4 ? "function" == typeof e4 ? new e4() : e4 : null;
      }
      if (this.options = ie(ie(ie({}, r2), this.options), re(t3)), "v1" !== this.options.compatibilityAPI && (this.options.interpolation = ie(ie({}, r2.interpolation), this.options.interpolation)), void 0 !== t3.keySeparator && (this.options.userDefinedKeySeparator = t3.keySeparator), void 0 !== t3.nsSeparator && (this.options.userDefinedNsSeparator = t3.nsSeparator), !this.options.isClone) {
        var i2;
        this.modules.logger ? v.init(o2(this.modules.logger), this.options) : v.init(null, this.options), this.modules.formatter ? i2 = this.modules.formatter : "undefined" != typeof Intl && (i2 = X);
        var a2 = new K(this.options);
        this.store = new E(this.options.resources, this.options);
        var s2 = this.services;
        s2.logger = v, s2.resourceStore = this.store, s2.languageUtils = a2, s2.pluralResolver = new z(a2, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), !i2 || this.options.interpolation.format && this.options.interpolation.format !== r2.interpolation.format || (s2.formatter = o2(i2), s2.formatter.init(s2, this.options), this.options.interpolation.format = s2.formatter.format.bind(s2.formatter)), s2.interpolator = new W(this.options), s2.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, s2.backendConnector = new te(o2(this.modules.backend), s2.resourceStore, s2, this.options), s2.backendConnector.on("*", (function(t4) {
          for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++) r3[o3 - 1] = arguments[o3];
          e3.emit.apply(e3, [t4].concat(r3));
        })), this.modules.languageDetector && (s2.languageDetector = o2(this.modules.languageDetector), s2.languageDetector.init && s2.languageDetector.init(s2, this.options.detection, this.options)), this.modules.i18nFormat && (s2.i18nFormat = o2(this.modules.i18nFormat), s2.i18nFormat.init && s2.i18nFormat.init(this)), this.translator = new V(this.services, this.options), this.translator.on("*", (function(t4) {
          for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++) r3[o3 - 1] = arguments[o3];
          e3.emit.apply(e3, [t4].concat(r3));
        })), this.modules.external.forEach((function(t4) {
          t4.init && t4.init(e3);
        }));
      }
      if (this.format = this.options.interpolation.format, n3 || (n3 = ae), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var u2 = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        u2.length > 0 && "dev" !== u2[0] && (this.options.lng = u2[0]);
      }
      this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((function(t4) {
        e3[t4] = function() {
          var n4;
          return (n4 = e3.store)[t4].apply(n4, arguments);
        };
      })), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((function(t4) {
        e3[t4] = function() {
          var n4;
          return (n4 = e3.store)[t4].apply(n4, arguments), e3;
        };
      }));
      var c2 = m(), l3 = function() {
        var t4 = function(t5, r3) {
          e3.isInitialized && !e3.initializedStoreOnce && e3.logger.warn("init: i18next is already initialized. You should call init just once!"), e3.isInitialized = true, e3.options.isClone || e3.logger.log("initialized", e3.options), e3.emit("initialized", e3.options), c2.resolve(r3), n3(t5, r3);
        };
        if (e3.languages && "v1" !== e3.options.compatibilityAPI && !e3.isInitialized) return t4(null, e3.t.bind(e3));
        e3.changeLanguage(e3.options.lng, t4);
      };
      return this.options.resources || !this.options.initImmediate ? l3() : setTimeout(l3, 0), c2;
    } }, { key: "loadResources", value: function(e3) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ae, r2 = "string" == typeof e3 ? e3 : this.language;
      if ("function" == typeof e3 && (n3 = e3), !this.options.resources || this.options.partialBundledLanguages) {
        if (r2 && "cimode" === r2.toLowerCase()) return n3();
        var o2 = [], i2 = function(e4) {
          e4 && t3.services.languageUtils.toResolveHierarchy(e4).forEach((function(e5) {
            o2.indexOf(e5) < 0 && o2.push(e5);
          }));
        };
        r2 ? i2(r2) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e4) {
          return i2(e4);
        })), this.options.preload && this.options.preload.forEach((function(e4) {
          return i2(e4);
        })), this.services.backendConnector.load(o2, this.options.ns, (function(e4) {
          e4 || t3.resolvedLanguage || !t3.language || t3.setResolvedLanguage(t3.language), n3(e4);
        }));
      } else n3(null);
    } }, { key: "reloadResources", value: function(e3, t3, n3) {
      var r2 = m();
      return e3 || (e3 = this.languages), t3 || (t3 = this.options.ns), n3 || (n3 = ae), this.services.backendConnector.reload(e3, t3, (function(e4) {
        r2.resolve(), n3(e4);
      })), r2;
    } }, { key: "use", value: function(e3) {
      if (!e3) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!e3.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return "backend" === e3.type && (this.modules.backend = e3), ("logger" === e3.type || e3.log && e3.warn && e3.error) && (this.modules.logger = e3), "languageDetector" === e3.type && (this.modules.languageDetector = e3), "i18nFormat" === e3.type && (this.modules.i18nFormat = e3), "postProcessor" === e3.type && D.addPostProcessor(e3), "formatter" === e3.type && (this.modules.formatter = e3), "3rdParty" === e3.type && this.modules.external.push(e3), this;
    } }, { key: "setResolvedLanguage", value: function(e3) {
      if (e3 && this.languages && !(["cimode", "dev"].indexOf(e3) > -1)) for (var t3 = 0; t3 < this.languages.length; t3++) {
        var n3 = this.languages[t3];
        if (!(["cimode", "dev"].indexOf(n3) > -1) && this.store.hasLanguageSomeTranslations(n3)) {
          this.resolvedLanguage = n3;
          break;
        }
      }
    } }, { key: "changeLanguage", value: function(e3, t3) {
      var n3 = this;
      this.isLanguageChangingTo = e3;
      var r2 = m();
      this.emit("languageChanging", e3);
      var o2 = function(e4) {
        n3.language = e4, n3.languages = n3.services.languageUtils.toResolveHierarchy(e4), n3.resolvedLanguage = void 0, n3.setResolvedLanguage(e4);
      }, i2 = function(i3) {
        e3 || i3 || !n3.services.languageDetector || (i3 = []);
        var a2 = "string" == typeof i3 ? i3 : n3.services.languageUtils.getBestMatchFromCodes(i3);
        a2 && (n3.language || o2(a2), n3.translator.language || n3.translator.changeLanguage(a2), n3.services.languageDetector && n3.services.languageDetector.cacheUserLanguage && n3.services.languageDetector.cacheUserLanguage(a2)), n3.loadResources(a2, (function(e4) {
          !(function(e5, i4) {
            i4 ? (o2(i4), n3.translator.changeLanguage(i4), n3.isLanguageChangingTo = void 0, n3.emit("languageChanged", i4), n3.logger.log("languageChanged", i4)) : n3.isLanguageChangingTo = void 0, r2.resolve((function() {
              return n3.t.apply(n3, arguments);
            })), t3 && t3(e5, (function() {
              return n3.t.apply(n3, arguments);
            }));
          })(e4, a2);
        }));
      };
      return e3 || !this.services.languageDetector || this.services.languageDetector.async ? !e3 && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i2) : this.services.languageDetector.detect(i2) : i2(e3) : i2(this.services.languageDetector.detect()), r2;
    } }, { key: "getFixedT", value: function(e3, t3, n3) {
      var o2 = this, i2 = function e4(t4, i3) {
        var a2;
        if ("object" !== (0, r.A)(i3)) {
          for (var s2 = arguments.length, u2 = new Array(s2 > 2 ? s2 - 2 : 0), c2 = 2; c2 < s2; c2++) u2[c2 - 2] = arguments[c2];
          a2 = o2.options.overloadTranslationOptionHandler([t4, i3].concat(u2));
        } else a2 = ie({}, i3);
        a2.lng = a2.lng || e4.lng, a2.lngs = a2.lngs || e4.lngs, a2.ns = a2.ns || e4.ns, a2.keyPrefix = a2.keyPrefix || n3 || e4.keyPrefix;
        var l3, p3 = o2.options.keySeparator || ".";
        return l3 = a2.keyPrefix && Array.isArray(t4) ? t4.map((function(e5) {
          return "".concat(a2.keyPrefix).concat(p3).concat(e5);
        })) : a2.keyPrefix ? "".concat(a2.keyPrefix).concat(p3).concat(t4) : t4, o2.t(l3, a2);
      };
      return "string" == typeof e3 ? i2.lng = e3 : i2.lngs = e3, i2.ns = t3, i2.keyPrefix = n3, i2;
    } }, { key: "t", value: function() {
      var e3;
      return this.translator && (e3 = this.translator).translate.apply(e3, arguments);
    } }, { key: "exists", value: function() {
      var e3;
      return this.translator && (e3 = this.translator).exists.apply(e3, arguments);
    } }, { key: "setDefaultNamespace", value: function(e3) {
      this.options.defaultNS = e3;
    } }, { key: "hasLoadedNamespace", value: function(e3) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
      if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
      var r2 = n3.lng || this.resolvedLanguage || this.languages[0], o2 = !!this.options && this.options.fallbackLng, i2 = this.languages[this.languages.length - 1];
      if ("cimode" === r2.toLowerCase()) return true;
      var a2 = function(e4, n4) {
        var r3 = t3.services.backendConnector.state["".concat(e4, "|").concat(n4)];
        return -1 === r3 || 2 === r3;
      };
      if (n3.precheck) {
        var s2 = n3.precheck(this, a2);
        if (void 0 !== s2) return s2;
      }
      return !(!this.hasResourceBundle(r2, e3) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!a2(r2, e3) || o2 && !a2(i2, e3)));
    } }, { key: "loadNamespaces", value: function(e3, t3) {
      var n3 = this, r2 = m();
      return this.options.ns ? ("string" == typeof e3 && (e3 = [e3]), e3.forEach((function(e4) {
        n3.options.ns.indexOf(e4) < 0 && n3.options.ns.push(e4);
      })), this.loadResources((function(e4) {
        r2.resolve(), t3 && t3(e4);
      })), r2) : (t3 && t3(), Promise.resolve());
    } }, { key: "loadLanguages", value: function(e3, t3) {
      var n3 = m();
      "string" == typeof e3 && (e3 = [e3]);
      var r2 = this.options.preload || [], o2 = e3.filter((function(e4) {
        return r2.indexOf(e4) < 0;
      }));
      return o2.length ? (this.options.preload = r2.concat(o2), this.loadResources((function(e4) {
        n3.resolve(), t3 && t3(e4);
      })), n3) : (t3 && t3(), Promise.resolve());
    } }, { key: "dir", value: function(e3) {
      if (e3 || (e3 = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e3) return "rtl";
      var t3 = this.services && this.services.languageUtils || new K(ne());
      return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t3.getLanguagePartFromCode(e3)) > -1 || e3.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    } }, { key: "cloneInstance", value: function() {
      var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ae, r2 = ie(ie(ie({}, this.options), t3), { isClone: true }), o2 = new p2(r2);
      return void 0 === t3.debug && void 0 === t3.prefix || (o2.logger = o2.logger.clone(t3)), ["store", "services", "language"].forEach((function(t4) {
        o2[t4] = e3[t4];
      })), o2.services = ie({}, this.services), o2.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, o2.translator = new V(o2.services, o2.options), o2.translator.on("*", (function(e4) {
        for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r3 = 1; r3 < t4; r3++) n4[r3 - 1] = arguments[r3];
        o2.emit.apply(o2, [e4].concat(n4));
      })), o2.init(r2, n3), o2.translator.options = o2.options, o2.translator.backendConnector.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, o2;
    } }, { key: "toJSON", value: function() {
      return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
    } }]), p2;
  })(y);
  (0, l.A)(se, "createInstance", (function() {
    return new se(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
  }));
  var ue = se.createInstance();
  ue.createInstance = se.createInstance, ue.createInstance, ue.dir, ue.init, ue.loadResources, ue.reloadResources, ue.use, ue.changeLanguage, ue.getFixedT;
  var ce = ue.t;
  ue.exists, ue.setDefaultNamespace, ue.hasLoadedNamespace, ue.loadNamespaces, ue.loadLanguages;
} }]);
