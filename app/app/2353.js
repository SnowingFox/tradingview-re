"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[2353], { 28630(t, i, o) {
  o.d(i, { z: () => n });
  var r = o(79474), e = o(61501);
  function n(t2) {
    const i2 = (0, r.useMemo)((() => (function() {
      const t3 = (i3) => {
        ((t4) => {
          l.current(t4);
        })(i3), t3.current = i3;
      };
      return t3.current = null, t3;
    })()), []), o2 = (0, r.useRef)(null), n2 = (i3) => {
      if (null === i3) return a(o2.current, i3), void (o2.current = null);
      o2.current !== t2 && (o2.current = t2, a(o2.current, i3));
    }, l = (0, r.useRef)(n2);
    return l.current = n2, (0, e.E)((() => {
      if (null !== i2.current) return l.current(i2.current), () => l.current(null);
    }), [t2]), i2;
  }
  function a(t2, i2) {
    null !== t2 && ("function" == typeof t2 ? t2(i2) : t2.current = i2);
  }
}, 61501(t, i, o) {
  o.d(i, { E: () => e });
  var r = o(79474);
  function e(t2, i2) {
    ("undefined" == typeof window ? r.useEffect : r.useLayoutEffect)(t2, i2);
  }
}, 8138(t, i, o) {
  o.d(i, { Z: () => l });
  var r = o(79474), e = o(19541);
  const n = { x: 0, y: 0, width: 0, height: 0 };
  function a(t2) {
    return (function(t3) {
      if (!t3) return n;
      const { x: i2, y: o2, width: r2, height: e2 } = t3.getBoundingClientRect();
      return { x: i2, y: o2, width: r2, height: e2 };
    })(t2.current);
  }
  function l(t2, i2, o2 = []) {
    const [l2, s] = (0, r.useState)(n);
    return (0, r.useEffect)((() => {
      const i3 = () => {
        s(a(t2));
      }, r2 = o2.map(((t3) => (t3.subscribe(i3), () => t3.unsubscribe(i3))));
      return (0, e.Z)(...r2);
    }), [...o2, t2]), (0, r.useLayoutEffect)((() => {
      i2 && s(a(t2));
    }), [t2, i2]), l2;
  }
}, 20179(t, i, o) {
  o.d(i, { w: () => e });
  var r = o(38177);
  function e(t2, i2, o2) {
    if (t2.start < o2.start) return (0, r.WW)(o2.start, t2.length);
    const e2 = t2.start + t2.length > o2.start + o2.length;
    return (0, r.WW)(e2 ? o2.start + o2.length - t2.length : t2.start, t2.length);
  }
}, 71938(t, i, o) {
  function r(t2) {
    const i2 = t2[0].contentRect, o2 = (function(t3, i3) {
      const o3 = Math.max(t3.x, i3.x), r2 = Math.max(t3.y, i3.y), e = Math.min(t3.x + t3.width, i3.x + i3.width), n = Math.min(t3.y + t3.height, i3.y + i3.height);
      if (!(o3 > e || r2 > n)) return { x: o3, y: r2, width: e - o3, height: n - r2 };
    })(i2, { ...t2[0].screenRect });
    return o2 ? i2.width * i2.height - o2.width * o2.height : Number.POSITIVE_INFINITY;
  }
  o.d(i, { i: () => r });
}, 27464(t, i, o) {
  function r(t2) {
    return (i2) => (function(t3, i3) {
      return (function(t4, i4) {
        let o2 = t4[0], r2 = i4(o2);
        for (let e = 1; e < t4.length; e++) {
          const n = t4[e], a = i4(n);
          a < r2 && (r2 = a, o2 = n);
        }
        return o2;
      })(t3, i3);
    })(i2, t2);
  }
  o.d(i, { T: () => r });
}, 38177(t, i, o) {
  function r(t2, i2) {
    return { start: t2, length: i2 };
  }
  function e(t2) {
    return r(t2.x, t2.width);
  }
  function n(t2) {
    return r(t2.y, t2.height);
  }
  o.d(i, { S7: () => n, WW: () => r, eq: () => e });
}, 65686(t, i, o) {
  o.d(i, { i: () => N, j: () => P });
  var r = o(79474), e = o(14487), n = o.n(e), a = o(64897), l = o(93515);
  function s(t2, i2) {
    return { x: i2 ? -t2.x : 1 - t2.x, y: t2.y };
  }
  var p = o(38177);
  function d(t2, i2, o2, r2) {
    const e2 = r2.horizontal((0, p.eq)(t2), (0, p.eq)(i2), (0, p.eq)(o2)), n2 = r2.vertical((0, p.S7)(t2), (0, p.S7)(i2), (0, p.S7)(o2));
    return { x: e2.start, y: n2.start, width: e2.length, height: n2.length };
  }
  function c(t2, i2) {
    const o2 = t2.start + t2.length, r2 = i2.start + i2.length;
    return t2.start < i2.start ? { overflow: i2.start - t2.start, correction: i2.start - t2.start } : o2 > r2 ? { overflow: o2 - r2, correction: r2 - o2 } : { overflow: 0, correction: 0 };
  }
  function h(t2, i2, o2, r2) {
    const e2 = (function(t3, i3, o3) {
      const { anchorPoint: r3, contentPoint: e3, offset: n3 } = o3;
      return { x: t3.x + t3.width * r3.x - i3.width * e3.x + (n3?.x ?? 0), y: t3.y + t3.height * r3.y - i3.height * e3.y + (n3?.y ?? 0) };
    })(t2, i2, o2), n2 = (0, p.WW)(e2.x, i2.width), a2 = (0, p.eq)(r2), { overflow: l2 } = c(n2, a2), s2 = (0, p.WW)(e2.y, i2.height), d2 = (0, p.S7)(r2), { overflow: h2 } = c(s2, d2);
    return { contentRect: { x: e2.x, y: e2.y, ...i2 }, screenRect: r2, overflow: { x: l2, y: h2 } };
  }
  function g() {
    return { x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };
  }
  const u = JSON.parse('{"l":"positioner-1IDEYbWi","q":"invisible-ogBg9deH"}');
  var f = o(72539), m = o.n(f), b = o(48560), v = o.n(b), x = o(57148), w = o.n(x), S = o(60251), y = o.n(S), A = o(81263), W = o.n(A), T = o(50892), z = o.n(T), E = o(49183), R = {};
  R.styleTagTransform = z(), R.setAttributes = y(), R.insert = w().bind(null, "head"), R.domAPI = v(), R.insertStyleElement = W(), m()(E.A, R), E.A && E.A.locals && E.A.locals;
  const _ = { width: 0, height: 0 };
  function N(t2) {
    const { isRtl: i2, anchoredAt: o2, isOpen: e2, placementRules: p2, ifNonePlacementRuleMatched: c2, anchorPositionerCardAppearanceClassname: f2, refObjectToContentWrapperElement: m2, children: b2, onPlacementRuleSelected: v2, getRootRect: x2 = g, idOfContentWrapperElement: w2, ariaLabelledby: S2, ariaMultiselectable: y2, role: A2, width: W2, height: T2, ...z2 } = t2, E2 = z2, [R2, N2] = (0, r.useState)(void 0), C = (0, r.useCallback)(((t3) => {
      const i3 = Math.ceil(t3.width), o3 = Math.ceil(t3.height);
      N2(((t4) => t4?.width !== i3 || t4?.height !== o3 ? { width: i3, height: o3 } : t4));
    }), [N2]), B = (0, r.useCallback)(((t3, i3) => {
      C({ width: t3, height: i3 });
    }), [C]);
    (0, r.useEffect)((() => {
      e2 || N2(void 0);
    }), [e2]);
    const [G, I] = (0, r.useMemo)((() => (function(t3, i3, o3, r2, e3, n2 = false) {
      const a2 = n2 ? (function(t4, i4) {
        return t4.map(((t5) => (function(t6, i5) {
          return { name: i5 && t6.rtlName || t6.name, anchorPoint: s(t6.anchorPoint), contentPoint: s(t6.contentPoint), offset: t6.offset ? s(t6.offset, true) : void 0 };
        })(t5, i4)));
      })(r2, n2) : r2, l2 = [];
      for (const r3 of a2) {
        const e4 = h(t3, i3, r3, o3);
        if (0 === e4.overflow.x && 0 === e4.overflow.y) return [e4.contentRect, r3];
        l2.push([e4, r3]);
      }
      const p3 = e3.pickRule(l2);
      return [d(p3[0].contentRect, t3, o3, e3), p3[1]];
    })(o2, R2 ?? _, x2(), p2, c2, i2)), [o2, R2, x2, p2, c2, i2]);
    if ((0, r.useEffect)((() => {
      if (I && v2) return v2(I);
    }), [I, v2]), !e2) return null;
    const k = [], O = {}, K = {};
    for (const i3 of ["width", "height"]) {
      const r2 = t2[i3];
      (Array.isArray(r2) ? r2 : [r2]).filter(((t3) => !!t3)).forEach(((t3) => {
        if ("content" === t3.by) return;
        if ("class" === t3.by) return void k.push(t3.className);
        const r3 = t3.type ?? "exact";
        ("exact" === r3 ? O : K)["--ui-lib-positioner-anchor-" + r3 + "-" + i3] = o2[i3] + "px";
      }));
    }
    const Z = [f2, u.l], M = { ...O, ...K, "--ui-lib-positioner-anchor-width": o2.width + "px", "--ui-lib-positioner-anchor-height": o2.height + "px", "--ui-lib-positioner-content-point-y": I.contentPoint.y, "--ui-lib-positioner-content-point-x": I.contentPoint.x, "--ui-lib-positioner-anchor-top": o2.y + "px", "--ui-lib-positioner-anchor-left": o2.x + "px" }, F = r.createElement(P.Provider, { value: { onContentResized: B } }, b2);
    return r.createElement(a.Z, null, void 0 === R2 ? r.createElement("div", { className: n()(u.q, ...k, ...Z), style: M }, F) : r.createElement("div", { className: n()(...Z, ...k), style: { "--ui-lib-positioner-calculated-left": G.x + "px", "--ui-lib-positioner-calculated-top": G.y + "px", "--ui-lib-positioner-calculated-height": G.height + "px", "--ui-lib-positioner-calculated-width": G.width + "px", ...M }, ...(0, l.M)(w2, S2, y2, A2), ...E2, ref: m2 }, F));
  }
  const P = (0, r.createContext)({ onContentResized: () => {
  } });
}, 93515(t, i, o) {
  function r(t2, i2, o2, r2) {
    return { role: r2, "aria-labelledby": i2, "aria-multiselectable": o2, id: t2 };
  }
  o.d(i, { M: () => r });
}, 47148(t, i, o) {
  o.d(i, { IR: () => g, Mc: () => a, OG: () => n, Q0: () => u, Wf: () => h, XZ: () => c, Yp: () => r, ZG: () => e, Zb: () => p, dL: () => d, vc: () => l, wO: () => s });
  const r = { name: "bottom-left", rtlName: "bottom-right", anchorPoint: { x: 0, y: 1 }, contentPoint: { x: 0, y: 0 } }, e = { name: "bottom-right", rtlName: "bottom-left", anchorPoint: { x: 1, y: 1 }, contentPoint: { x: 1, y: 0 } }, n = { name: "bottom", anchorPoint: { x: 0.5, y: 1 }, contentPoint: { x: 0.5, y: 0 } }, a = { name: "top-left", rtlName: "top-right", anchorPoint: { x: 0, y: 0 }, contentPoint: { x: 0, y: 1 } }, l = { name: "top-right", rtlName: "top-left", anchorPoint: { x: 1, y: 0 }, contentPoint: { x: 1, y: 1 } }, s = { name: "top", anchorPoint: { x: 0.5, y: 0 }, contentPoint: { x: 0.5, y: 1 } }, p = { name: "right-top", rtlName: "left-top", anchorPoint: { x: 1, y: 0 }, contentPoint: { x: 0, y: 0 } }, d = { name: "right-bottom", rtlName: "left-bottom", anchorPoint: { x: 1, y: 1 }, contentPoint: { x: 0, y: 1 } }, c = { name: "right", rtlName: "left", anchorPoint: { x: 1, y: 0.5 }, contentPoint: { x: 0, y: 0.5 } }, h = { name: "left-top", rtlName: "right-top", anchorPoint: { x: 0, y: 0 }, contentPoint: { x: 1, y: 0 } }, g = { name: "left-bottom", rtlName: "right-bottom", anchorPoint: { x: 0, y: 1 }, contentPoint: { x: 1, y: 1 } }, u = { name: "left", rtlName: "right", anchorPoint: { x: 0, y: 0.5 }, contentPoint: { x: 1, y: 0.5 } };
}, 26764(t, i, o) {
  function r(t2) {
    return (i2, o2) => (window.addEventListener(t2, i2, o2), () => {
      window.removeEventListener(t2, i2, o2);
    });
  }
  o.d(i, { N: () => r });
}, 86364(t, i, o) {
  o.d(i, { j: () => a });
  var r = o(51421), e = o(37755);
  const n = (0, o(26764).N)("scroll");
  function a(t2, i2, o2) {
    (0, r.p)(t2, (() => n(((t3) => {
      const r2 = o2.current;
      if (!r2) return;
      const n2 = t3.target;
      n2 && ((0, e.aT)(r2, n2) || (0, e.aT)(n2, r2) && i2(false, "currentLevel"));
    }), true)), [i2, o2]);
  }
}, 90288(t, i, o) {
  o.d(i, { ik: () => a, XA: () => l });
  var r = o(79474), e = o(51421);
  function n(t2, i2, o2) {
    const n2 = (0, r.useMemo)((() => /* @__PURE__ */ (function() {
      const t3 = /* @__PURE__ */ new Set();
      return { subscribe: (i3) => {
        t3.add(i3);
      }, unsubscribe: (i3) => {
        t3.delete(i3);
      }, fire: () => {
        t3.forEach(((t4) => t4()));
      } };
    })()), []);
    return (0, e.p)(t2, (() => (window.addEventListener(i2, n2.fire, o2), () => {
      window.removeEventListener(i2, n2.fire, o2);
    })), [n2]), n2;
  }
  const a = (t2 = true) => n(t2, "resize", true), l = (t2 = true) => n(t2, "scroll", true);
}, 51421(t, i, o) {
  o.d(i, { p: () => e });
  var r = o(79474);
  function e(t2, i2, o2) {
    (0, r.useEffect)((() => {
      if (t2) return i2();
    }), [...o2, t2]);
  }
}, 64897(t, i, o) {
  o.d(i, { Z: () => c });
  var r = o(79474), e = o(41615), n = o(85842);
  const a = "data-focus-trap";
  class l {
    constructor() {
      this._storage = [];
    }
    add(t2) {
      this._storage.push(t2);
    }
    remove(t2) {
      this._storage = this._storage.filter(((i2) => t2 !== i2));
    }
    has(t2) {
      return this._storage.includes(t2);
    }
    getItems() {
      return this._storage;
    }
  }
  class s {
    constructor(t2 = document) {
      this._storage = new l(), this._windows = /* @__PURE__ */ new Map(), this._index = 0, this._document = t2, this._container = t2.createDocumentFragment();
    }
    setContainer(t2) {
      const i2 = this._container, o2 = null === t2 ? this._document.createDocumentFragment() : t2;
      (function(t3, i3) {
        Array.from(t3.childNodes).forEach(((t4) => {
          t4.nodeType === Node.ELEMENT_NODE && i3.appendChild(t4);
        }));
      })(i2, o2), this._container = o2;
    }
    registerWindow(t2) {
      this._storage.has(t2) || this._storage.add(t2);
    }
    ensureWindow(t2, i2 = { position: "fixed", direction: "normal" }) {
      const o2 = this._windows.get(t2);
      if (void 0 !== o2) return o2;
      this.registerWindow(t2);
      const r2 = this._document.createElement("div");
      if (r2.style.position = i2.position, r2.style.zIndex = this._index.toString(), r2.dataset.id = t2, void 0 !== i2.index) {
        const t3 = this._container.childNodes.length;
        if (i2.index >= t3) this._container.appendChild(r2);
        else if (i2.index <= 0) this._container.insertBefore(r2, this._container.firstChild);
        else {
          const t4 = this._container.childNodes[i2.index];
          this._container.insertBefore(r2, t4);
        }
      } else "reverse" === i2.direction ? this._container.insertBefore(r2, this._container.firstChild) : this._container.appendChild(r2);
      return this._windows.set(t2, r2), ++this._index, r2;
    }
    unregisterWindow(t2) {
      this._storage.remove(t2);
      const i2 = this._windows.get(t2);
      void 0 !== i2 && (null !== i2.parentElement && i2.parentElement.removeChild(i2), this._windows.delete(t2));
    }
    getZindex(t2) {
      const i2 = this.ensureWindow(t2);
      return parseInt(i2.style.zIndex || "0");
    }
    moveLastWindowToTop() {
      const t2 = this._storage.getItems(), i2 = t2[t2.length - 1];
      i2 && this.moveToTop(i2);
    }
    moveToTop(t2) {
      if (this.getZindex(t2) !== this._index) {
        const i2 = this.ensureWindow(t2);
        this._windows.forEach(((t3, o2) => {
          t3.hasAttribute(a) && t3.setAttribute(a, t3 === i2 ? "true" : "false");
        })), i2.style.zIndex = (++this._index).toString();
      }
    }
    removeWindow(t2) {
      this.unregisterWindow(t2);
    }
  }
  const p = /* @__PURE__ */ new WeakMap();
  r.Component;
  const d = r.createContext(null);
  class c extends r.PureComponent {
    constructor() {
      super(...arguments), this._uuid = ((t2 = 21) => crypto.getRandomValues(new Uint8Array(t2)).reduce(((t3, i2) => t3 + ((i2 &= 63) < 36 ? i2.toString(36) : i2 < 62 ? (i2 - 26).toString(36).toUpperCase() : i2 > 62 ? "-" : "_")), ""))();
    }
    componentWillUnmount() {
      this._manager().removeWindow(this._uuid);
    }
    render() {
      const t2 = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
      t2.style.top = this.props.top || "", t2.style.bottom = this.props.bottom || "", t2.style.left = this.props.left || "", t2.style.right = this.props.right || "", t2.style.pointerEvents = this.props.pointerEvents || "";
      const i2 = this.props.className;
      return i2 && ("string" == typeof i2 ? t2.classList.add(i2) : t2.classList.add(...i2)), this.props.shouldTrapFocus && !t2.hasAttribute(a) && t2.setAttribute(a, "true"), this.props["aria-hidden"] && t2.setAttribute("aria-hidden", "true"), e.createPortal(r.createElement(h.Provider, { value: this }, this.props.children), t2);
    }
    moveToTop() {
      this._manager().moveToTop(this._uuid);
    }
    _manager() {
      return null === this.context ? (function(t2 = document) {
        const i2 = t2.getElementById("overlap-manager-root");
        if (null !== i2) return (0, n.YD)(p.get(i2));
        {
          const i3 = new s(t2), o2 = (function(t3) {
            const i4 = t3.createElement("div");
            return i4.style.position = "absolute", i4.style.zIndex = 150 .toString(), i4.style.top = "0px", i4.style.left = "0px", i4.id = "overlap-manager-root", i4.dataset.qaId = "overlap-manager-root", i4;
          })(t2);
          return p.set(o2, i3), i3.setContainer(o2), t2.body.appendChild(o2), i3;
        }
      })() : this.context;
    }
  }
  c.contextType = d;
  const h = r.createContext(null);
}, 62353(t, i, o) {
  o.d(i, { b: () => D });
  var r = o(79474), e = o(47148), n = o(92172), a = o(86364), l = o(90288), s = o(65686), p = o(8138), d = o(28630);
  const c = JSON.parse('{"Q":"content-3bcZer2y"}');
  var h = o(72539), g = o.n(h), u = o(48560), f = o.n(u), m = o(57148), b = o.n(m), v = o(60251), x = o.n(v), w = o(81263), S = o.n(w), y = o(50892), A = o.n(y), W = o(85959), T = {};
  function z(t2) {
    const { children: i2 } = t2, { onContentResized: o2 } = (0, r.useContext)(s.j), e2 = (0, r.useMemo)((() => new ResizeObserver((([t3]) => {
      o2(t3.borderBoxSize[0].inlineSize, t3.borderBoxSize[0].blockSize);
    }))), [o2]);
    return r.createElement("div", { ref: (t3) => {
      e2.disconnect(), t3 && e2.observe(t3);
    }, className: c.Q }, i2);
  }
  T.styleTagTransform = A(), T.setAttributes = x(), T.insert = b().bind(null, "head"), T.domAPI = f(), T.insertStyleElement = S(), g()(W.A, T), W.A && W.A.locals && W.A.locals;
  var E = o(14487), R = o.n(E), _ = o(45922), N = o(65767);
  const P = (t2) => r.createElement("svg", { width: "16", height: "5", viewBox: "0 0 16 5", xmlns: "http://www.w3.org/2000/svg", ...t2 }, r.createElement("path", { d: "M.5 5h15L8 0 .5 5Z", fill: "currentColor" })), C = JSON.parse('{"floatingArrow":"floatingArrow-3-SgWSzT","top":"top-3HGJs9w9","top-left":"top-left-1VurvGK4","top-right":"top-right-2F4R2YBX","bottom":"bottom-2TG_vmGO","bottom-left":"bottom-left-35hrqnUj","bottom-right":"bottom-right-3ngi7jxB","right":"right-1U28aG7v","right-top":"right-top-1AyR4028","right-bottom":"right-bottom-2qnFBD7E","isSafari":"isSafari-1HLU_zS1","left":"left-1DuPL4e-","left-top":"left-top-3IecPgCI","left-bottom":"left-bottom-3QNOfhkK"}');
  var B = o(49517), G = {};
  G.styleTagTransform = A(), G.setAttributes = x(), G.insert = b().bind(null, "head"), G.domAPI = f(), G.insertStyleElement = S(), g()(B.A, G), B.A && B.A.locals && B.A.locals;
  const I = ({ placement: t2, ...i2 }) => r.createElement("div", { className: R()(C.floatingArrow, t2 && C[t2], N.nr && C.isSafari), ...i2 }, r.createElement(P, null)), k = JSON.parse('{"VA":"endSlotWrapper-2QWxGbWr","eK":"endSlotRtl-3tNaXgpr","yF":"divider-2KvhlY-Y","Om":"contentRtl-3VtKtpuF","v0":"endSlotContent-2WWHnmNA","RB":"endSlotContentRtl-3xBKz0TN","M5":"tooltipBaseWrapper-3RaGtKh1","JO":"transparent-30Z0cxbs","OZ":"opaque-3xwTkeQt","R_":"disableInteractive-2Z1oaSD3","Zc":"tooltipBase--Z_K_FC4","FG":"contentWrapper-cuwsnRXH","Qs":"content-14d1KaKI"}');
  var O = o(54243), K = {};
  function Z({ content: t2, isRtl: i2 }) {
    return r.createElement("span", { className: R()(k.VA, i2 && k.eK) }, r.createElement(_.c, { className: k.yF, orientation: "vertical", type: "secondary", size: "xsmall" }), r.createElement("span", { className: R()(k.v0, i2 && k.RB) }, t2));
  }
  function M({ id: t2, content: i2, endSlot: o2, hasArrow: e2 = true, isRtl: n2 = false, placement: a2 = "top", disableInteractive: l2 = false, transparent: s2, ...p2 }) {
    return r.createElement("div", { id: t2, role: "tooltip", className: R()(k.M5, l2 && k.R_, s2 ? k.JO : k.OZ) }, e2 && r.createElement(I, { ...p2, placement: a2 }), r.createElement("div", { className: k.Zc }, r.createElement("div", { className: R()(k.FG, n2 && k.Om) }, r.createElement("div", { className: k.Qs }, i2), o2 && r.createElement(Z, { content: o2, isRtl: n2 }))));
  }
  K.styleTagTransform = A(), K.setAttributes = x(), K.insert = b().bind(null, "head"), K.domAPI = f(), K.insertStyleElement = S(), g()(O.A, K), O.A && O.A.locals && O.A.locals;
  var F = o(27464), L = o(71938), U = o(20179);
  const q = { "bottom-left": [e.Yp], bottom: [e.OG], "bottom-right": [e.ZG], "top-left": [e.Mc], top: [e.wO], "top-right": [e.vc], "right-top": [e.Zb], right: [e.XZ], "right-bottom": [e.dL], "left-top": [e.Wf], left: [e.Q0], "left-bottom": [e.IR] }, H = { pickRule: (0, F.T)(L.i), horizontal: U.w, vertical: U.w }, D = (0, n.s)((function(t2) {
    const { anchor: i2, open: o2, id: e2, content: n2, endSlot: c2, hasArrow: h2 = true, isRtl: g2 = false, onClose: u2, placement: f2 = ["top", "bottom", "left", "right"], offset: m2 = 0, closeOnScrollOutside: b2 = false, disableInteractive: v2 } = t2, [x2, w2] = (0, r.useState)(true), S2 = h2 ? 4 : m2, y2 = (0, d.z)((0, r.useRef)(null)), A2 = ((t3, i3) => (Array.isArray(t3) ? t3 : [t3]).flatMap(((t4) => ((t5, i4) => t5.map(((t6) => {
      const o3 = { top: { x: 0, y: -i4 }, right: { x: i4, y: 0 }, bottom: { x: 0, y: i4 }, left: { x: -i4, y: 0 } };
      return t6.name?.split("-")[0] ? { ...t6, offset: o3[t6.name.split("-")[0]] } : t6;
    })))(q[t4], i3))))(f2, S2), [W2, T2] = r.useState(void 0), E2 = (0, r.useCallback)(((t3) => {
      W2?.name !== t3?.name && o2 && (T2(t3), w2(false));
    }), [o2, W2?.name]);
    (0, r.useEffect)((() => {
      o2 || (T2(void 0), w2(true));
    }), [o2]);
    const R2 = (0, l.ik)(o2), _2 = (0, l.XA)(!b2 && o2);
    (0, a.j)(b2 && o2, u2, i2);
    const N2 = (0, r.useMemo)((() => [R2, _2]), [_2, R2]), P2 = (0, p.Z)(i2, o2, N2);
    return r.createElement(s.i, { placementRules: A2, ifNonePlacementRuleMatched: H, isOpen: o2, width: [], height: [], anchoredAt: P2, isRtl: g2, refObjectToContentWrapperElement: y2, onPlacementRuleSelected: E2 }, r.createElement(z, null, r.createElement(M, { id: e2, content: n2, endSlot: c2, hasArrow: h2, isRtl: g2, placement: W2?.name, disableInteractive: v2, transparent: x2, "data-tooltip-inside-positioner": true })));
  }));
}, 19541(t, i, o) {
  function r(...t2) {
    return (...i2) => {
      t2.forEach(((t3) => t3?.(...i2)));
    };
  }
  o.d(i, { Z: () => r });
}, 92172(t, i, o) {
  o.d(i, { s: () => e });
  var r = o(79474);
  function e(t2) {
    return (i2) => (function() {
      const [t3, i3] = (0, r.useState)(true);
      return (0, r.useEffect)((() => {
        i3(false);
      }), []), t3;
    })() ? null : r.createElement(t2, { ...i2 });
  }
}, 85959(t, i, o) {
  o.d(i, { A: () => l });
  var r = o(30050), e = o.n(r), n = o(77259), a = o.n(n)()(e());
  a.push([t.id, ".content-3bcZer2y:dir(ltr){width:fit-content}.content-3bcZer2y:dir(rtl){width:fit-content}", ""]);
  const l = a;
}, 49183(t, i, o) {
  o.d(i, { A: () => l });
  var r = o(30050), e = o.n(r), n = o(77259), a = o.n(n)()(e());
  a.push([t.id, ".positioner-1IDEYbWi:dir(ltr){box-sizing:border-box;position:fixed;--ui-lib-positioner-applied-height:var(\n		--ui-lib-positioner-exact-height,var(\n			--ui-lib-positioner-anchor-exact-height,var(--ui-lib-positioner-calculated-height)\n		)\n	);--ui-lib-positioner-applied-width:var(\n		--ui-lib-positioner-exact-width,var(\n			--ui-lib-positioner-anchor-exact-width,var(--ui-lib-positioner-calculated-width)\n		)\n	);--ui-lib-positioner-applied-min-width:max(var(\n			--ui-lib-positioner-min-width,0px\n		),var(\n			--ui-lib-positioner-anchor-min-width,0px\n		));--ui-lib-positioner-applied-max-width:min(var(\n			--ui-lib-positioner-max-width,10000vw\n		),var(\n			--ui-lib-positioner-anchor-max-width,10000vw\n		));--ui-lib-positioner-applied-min-height:max(var(\n			--ui-lib-positioner-min-height,0px\n		),var(\n			--ui-lib-positioner-anchor-min-height,0px\n		));--ui-lib-positioner-applied-max-height:min(var(\n			--ui-lib-positioner-max-height,100000vh\n		),var(\n			--ui-lib-positioner-anchor-max-height,100000vh\n		));--ui-lib-positioner-computed-height:max(var(--ui-lib-positioner-applied-min-height),min(var(--ui-lib-positioner-applied-height),var(--ui-lib-positioner-applied-max-height)));--ui-lib-positioner-computed-width:max(var(--ui-lib-positioner-applied-min-width),min(var(--ui-lib-positioner-applied-width),var(--ui-lib-positioner-applied-max-width)));\n	/*!rtl:end:ignore*/height:var(--ui-lib-positioner-computed-height);\n\n	/*!rtl:begin:ignore*/left:var(--ui-lib-positioner-calculated-left,0);\n	/*!rtl:begin:ignore*/margin-left:calc(var(--ui-lib-positioner-content-point-x)*(var(--ui-lib-positioner-calculated-width) - var(--ui-lib-positioner-computed-width)));margin-top:calc(var(--ui-lib-positioner-content-point-y)*(var(--ui-lib-positioner-calculated-height) - var(--ui-lib-positioner-computed-height)));\n	/*!rtl:end:ignore*/top:var(--ui-lib-positioner-calculated-top,0);width:var(--ui-lib-positioner-computed-width)}.invisible-ogBg9deH:dir(ltr){opacity:0;pointer-events:none}.positioner-1IDEYbWi:dir(rtl){box-sizing:border-box;position:fixed;--ui-lib-positioner-applied-height:var(\n		--ui-lib-positioner-exact-height,var(\n			--ui-lib-positioner-anchor-exact-height,var(--ui-lib-positioner-calculated-height)\n		)\n	);--ui-lib-positioner-applied-width:var(\n		--ui-lib-positioner-exact-width,var(\n			--ui-lib-positioner-anchor-exact-width,var(--ui-lib-positioner-calculated-width)\n		)\n	);--ui-lib-positioner-applied-min-width:max(var(\n			--ui-lib-positioner-min-width,0px\n		),var(\n			--ui-lib-positioner-anchor-min-width,0px\n		));--ui-lib-positioner-applied-max-width:min(var(\n			--ui-lib-positioner-max-width,10000vw\n		),var(\n			--ui-lib-positioner-anchor-max-width,10000vw\n		));--ui-lib-positioner-applied-min-height:max(var(\n			--ui-lib-positioner-min-height,0px\n		),var(\n			--ui-lib-positioner-anchor-min-height,0px\n		));--ui-lib-positioner-applied-max-height:min(var(\n			--ui-lib-positioner-max-height,100000vh\n		),var(\n			--ui-lib-positioner-anchor-max-height,100000vh\n		));--ui-lib-positioner-computed-height:max(var(--ui-lib-positioner-applied-min-height),min(var(--ui-lib-positioner-applied-height),var(--ui-lib-positioner-applied-max-height)));--ui-lib-positioner-computed-width:max(var(--ui-lib-positioner-applied-min-width),min(var(--ui-lib-positioner-applied-width),var(--ui-lib-positioner-applied-max-width)));height:var(--ui-lib-positioner-computed-height);left:var(--ui-lib-positioner-calculated-left,0);margin-left:calc(var(--ui-lib-positioner-content-point-x)*(var(--ui-lib-positioner-calculated-width) - var(--ui-lib-positioner-computed-width)));margin-top:calc(var(--ui-lib-positioner-content-point-y)*(var(--ui-lib-positioner-calculated-height) - var(--ui-lib-positioner-computed-height)));top:var(--ui-lib-positioner-calculated-top,0);width:var(--ui-lib-positioner-computed-width)}.invisible-ogBg9deH:dir(rtl){opacity:0;pointer-events:none}", ""]);
  const l = a;
}, 49517(t, i, o) {
  o.d(i, { A: () => l });
  var r = o(30050), e = o.n(r), n = o(77259), a = o.n(n)()(e());
  a.push([t.id, '.floatingArrow-3-SgWSzT:dir(ltr){color:var(--ui-lib-tooltip-background-color,var(--color-cold-gray-750));display:block;pointer-events:none}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner]:dir(ltr){position:fixed}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-3HGJs9w9:dir(ltr){left:clamp(8px,calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width)/2 - 8px),calc(100vw - 24px));top:calc(var(--ui-lib-positioner-anchor-top) - 8px);\n			/*!rtl:begin:ignore*/transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-left-1VurvGK4:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + 8px);top:calc(var(--ui-lib-positioner-anchor-top) - 8px);\n			/*!rtl:begin:ignore*/transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-right-2F4R2YBX:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width) - 24px);top:calc(var(--ui-lib-positioner-anchor-top) - 8px);\n			/*!rtl:begin:ignore*/transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-2TG_vmGO svg:dir(ltr),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-left-35hrqnUj svg:dir(ltr),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-right-3ngi7jxB svg:dir(ltr){content:"";display:block}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-2TG_vmGO:dir(ltr){left:clamp(8px,calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width)/2 - 8px),calc(100vw - 24px));\n			/*!rtl:begin:ignore*/top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-left-35hrqnUj:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + 8px);\n			/*!rtl:begin:ignore*/top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-right-3ngi7jxB:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width) - 24px);\n			/*!rtl:begin:ignore*/top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-1U28aG7v:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height)/2 - 8px);\n			/*!rtl:begin:ignore*/transform:rotate(-90deg) translate(50%,-100%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-top-1AyR4028:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + 8px);\n			/*!rtl:begin:ignore*/transform:rotate(-90deg) translate(50%,-100%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-bottom-2qnFBD7E:dir(ltr){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height) - 24px);\n			/*!rtl:begin:ignore*/transform:rotate(-90deg) translate(50%,-100%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-1U28aG7v:dir(ltr),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-bottom-2qnFBD7E:dir(ltr),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-top-1AyR4028:dir(ltr){transform:rotate(-90deg) translate(50%,-90%)}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-1DuPL4e-:dir(ltr){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height)/2 - 8px);\n			/*!rtl:begin:ignore*/transform:rotate(-270deg) translate(-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-top-3IecPgCI:dir(ltr){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + 8px);\n			/*!rtl:begin:ignore*/transform:rotate(-270deg) translate(-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-bottom-3QNOfhkK:dir(ltr){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height) - 24px);\n			/*!rtl:begin:ignore*/transform:rotate(-270deg) translate(-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]):dir(ltr){height:6px;position:absolute;width:16px}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]) svg:dir(ltr){content:"";display:block;transform:translateY(2px)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-2TG_vmGO:dir(ltr){\n			/*!rtl:begin:ignore*/bottom:100%;left:calc(50% - 8px)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-left-35hrqnUj:dir(ltr){\n			/*!rtl:begin:ignore*/bottom:100%;left:8px\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-right-3ngi7jxB:dir(ltr){\n			/*!rtl:begin:ignore*/bottom:100%;right:8px\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-3HGJs9w9:dir(ltr){left:calc(50% - 8px);\n			/*!rtl:begin:ignore*/top:100%;transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-left-1VurvGK4:dir(ltr){left:8px;\n			/*!rtl:begin:ignore*/top:100%;transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-right-2F4R2YBX:dir(ltr){right:8px;\n			/*!rtl:begin:ignore*/top:100%;transform:rotate(180deg)\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-1U28aG7v:dir(ltr){left:calc(100% - 17px);\n			/*!rtl:begin:ignore*/top:calc(50% - 3px);transform:rotate(90deg) translate(50%,-50%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-top-1AyR4028:dir(ltr){left:calc(100% - 17px);\n			/*!rtl:begin:ignore*/top:12px;transform:rotate(90deg) translate(50%,-50%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-bottom-2qnFBD7E:dir(ltr){\n			/*!rtl:begin:ignore*/bottom:12px;left:calc(100% - 17px);transform:rotate(90deg) translate(50%,-50%);transform-origin:right\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-1DuPL4e-:dir(ltr){left:1px;\n			/*!rtl:begin:ignore*/top:calc(50% - 3px);transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-top-3IecPgCI:dir(ltr){left:1px;\n			/*!rtl:begin:ignore*/top:12px;transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-bottom-3QNOfhkK:dir(ltr){\n			/*!rtl:begin:ignore*/bottom:12px;left:1px;transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left\n			/*!rtl:end:ignore*/}.floatingArrow-3-SgWSzT:dir(rtl){color:var(--ui-lib-tooltip-background-color,var(--color-cold-gray-750));display:block;pointer-events:none}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner]:dir(rtl){position:fixed}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-3HGJs9w9:dir(rtl){left:clamp(8px,calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width)/2 - 8px),calc(100vw - 24px));top:calc(var(--ui-lib-positioner-anchor-top) - 8px);transform:rotate(180deg)}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-left-1VurvGK4:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + 8px);top:calc(var(--ui-lib-positioner-anchor-top) - 8px);transform:rotate(180deg)}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].top-right-2F4R2YBX:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width) - 24px);top:calc(var(--ui-lib-positioner-anchor-top) - 8px);transform:rotate(180deg)}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-2TG_vmGO svg:dir(rtl),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-left-35hrqnUj svg:dir(rtl),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-right-3ngi7jxB svg:dir(rtl){content:"";display:block}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-2TG_vmGO:dir(rtl){left:clamp(8px,calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width)/2 - 8px),calc(100vw - 24px));top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-left-35hrqnUj:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + 8px);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].bottom-right-3ngi7jxB:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width) - 24px);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height))}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-1U28aG7v:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height)/2 - 8px);transform:rotate(-90deg) translate(50%,-100%);transform-origin:right}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-top-1AyR4028:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + 8px);transform:rotate(-90deg) translate(50%,-100%);transform-origin:right}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].right-bottom-2qnFBD7E:dir(rtl){left:calc(var(--ui-lib-positioner-anchor-left) + var(--ui-lib-positioner-anchor-width));top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height) - 24px);transform:rotate(-90deg) translate(50%,-100%);transform-origin:right}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-1U28aG7v:dir(rtl),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-bottom-2qnFBD7E:dir(rtl),.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].isSafari-1HLU_zS1.right-top-1AyR4028:dir(rtl){transform:rotate(90deg) translate(-50%,-90%)}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-1DuPL4e-:dir(rtl){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height)/2 - 8px);transform:rotate(-270deg) translate(-50%);transform-origin:left}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-top-3IecPgCI:dir(rtl){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + 8px);transform:rotate(-270deg) translate(-50%);transform-origin:left}.floatingArrow-3-SgWSzT[data-tooltip-inside-positioner].left-bottom-3QNOfhkK:dir(rtl){left:var(--ui-lib-positioner-anchor-left);top:calc(var(--ui-lib-positioner-anchor-top) + var(--ui-lib-positioner-anchor-height) - 24px);transform:rotate(-270deg) translate(-50%);transform-origin:left}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]):dir(rtl){height:6px;position:absolute;width:16px}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]) svg:dir(rtl){content:"";display:block;transform:translateY(2px)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-2TG_vmGO:dir(rtl){bottom:100%;left:calc(50% - 8px)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-left-35hrqnUj:dir(rtl){bottom:100%;left:8px}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).bottom-right-3ngi7jxB:dir(rtl){bottom:100%;right:8px}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-3HGJs9w9:dir(rtl){left:calc(50% - 8px);top:100%;transform:rotate(180deg)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-left-1VurvGK4:dir(rtl){left:8px;top:100%;transform:rotate(180deg)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).top-right-2F4R2YBX:dir(rtl){right:8px;top:100%;transform:rotate(180deg)}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-1U28aG7v:dir(rtl){left:calc(100% - 17px);top:calc(50% - 3px);transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-top-1AyR4028:dir(rtl){left:calc(100% - 17px);top:12px;transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).right-bottom-2qnFBD7E:dir(rtl){bottom:12px;left:calc(100% - 17px);transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-1DuPL4e-:dir(rtl){left:1px;top:calc(50% - 3px);transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-top-3IecPgCI:dir(rtl){left:1px;top:12px;transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}.floatingArrow-3-SgWSzT:not([data-tooltip-inside-positioner]).left-bottom-3QNOfhkK:dir(rtl){bottom:12px;left:1px;transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}', ""]);
  const l = a;
}, 54243(t, i, o) {
  o.d(i, { A: () => l });
  var r = o(30050), e = o.n(r), n = o(77259), a = o.n(n)()(e());
  a.push([t.id, '.endSlotWrapper-2QWxGbWr.endSlotRtl-3tNaXgpr:dir(ltr){padding-left:0}.endSlotWrapper-2QWxGbWr:dir(ltr){align-items:center;color:var(--color-cold-gray-300);display:flex;padding-left:8px}.divider-2KvhlY-Y:dir(ltr){--ui-lib-divider-color:var(--color-cold-gray-600)}.contentRtl-3VtKtpuF:dir(ltr),.endSlotRtl-3tNaXgpr:dir(ltr){align-items:center;display:flex;flex-direction:row-reverse}.endSlotRtl-3tNaXgpr:dir(ltr){padding-right:8px}.endSlotContent-2WWHnmNA:dir(ltr){padding-left:8px}.endSlotContentRtl-3xBKz0TN:dir(ltr){padding-right:8px}.endSlotContent-2WWHnmNA.endSlotContentRtl-3xBKz0TN:dir(ltr){padding-left:0}.tooltipBaseWrapper-3RaGtKh1:dir(ltr){display:block;position:relative;transition:opacity .15s linear;white-space:normal}.transparent-30Z0cxbs:dir(ltr){opacity:0}.opaque-3xwTkeQt:dir(ltr){opacity:1}.disableInteractive-2Z1oaSD3:dir(ltr){pointer-events:none}.tooltipBase--Z_K_FC4:dir(ltr){background-color:var(--ui-lib-tooltip-background-color,var(--color-cold-gray-750));border-radius:var(--ui-lib-tooltip-border-radius,4px);color:var(--color-white);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:6px 8px;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height);width:max-content}.contentWrapper-cuwsnRXH:dir(ltr){display:flex}.content-14d1KaKI:dir(ltr){box-sizing:border-box;max-width:384px}.endSlotWrapper-2QWxGbWr.endSlotRtl-3tNaXgpr:dir(rtl){padding-right:0}.endSlotWrapper-2QWxGbWr:dir(rtl){align-items:center;color:var(--color-cold-gray-300);display:flex;padding-right:8px}.divider-2KvhlY-Y:dir(rtl){--ui-lib-divider-color:var(--color-cold-gray-600)}.contentRtl-3VtKtpuF:dir(rtl),.endSlotRtl-3tNaXgpr:dir(rtl){align-items:center;display:flex;flex-direction:row-reverse}.endSlotRtl-3tNaXgpr:dir(rtl){padding-left:8px}.endSlotContent-2WWHnmNA:dir(rtl){padding-right:8px}.endSlotContentRtl-3xBKz0TN:dir(rtl){padding-left:8px}.endSlotContent-2WWHnmNA.endSlotContentRtl-3xBKz0TN:dir(rtl){padding-right:0}.tooltipBaseWrapper-3RaGtKh1:dir(rtl){display:block;position:relative;transition:opacity .15s linear;white-space:normal}.transparent-30Z0cxbs:dir(rtl){opacity:0}.opaque-3xwTkeQt:dir(rtl){opacity:1}.disableInteractive-2Z1oaSD3:dir(rtl){pointer-events:none}.tooltipBase--Z_K_FC4:dir(rtl){background-color:var(--ui-lib-tooltip-background-color,var(--color-cold-gray-750));border-radius:var(--ui-lib-tooltip-border-radius,4px);color:var(--color-white);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:6px 8px;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height);width:max-content}.contentWrapper-cuwsnRXH:dir(rtl){display:flex}.content-14d1KaKI:dir(rtl){box-sizing:border-box;max-width:384px}', ""]);
  const l = a;
} }]);
