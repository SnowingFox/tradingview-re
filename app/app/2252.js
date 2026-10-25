"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[2252], { 73822(t, e, n) {
  n.d(e, { Yj: () => c, lG: () => p });
  var r = n(96938);
  function s(t2, e2, n2, s2) {
    const o2 = { filename: t2, function: "<anonymous>" === e2 ? r.yF : e2, in_app: true };
    return void 0 !== n2 && (o2.lineno = n2), void 0 !== s2 && (o2.colno = s2), o2;
  }
  const o = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, i = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /\((\S*)(?::(\d+))(?::(\d+))\)/, c = [30, (t2) => {
    const e2 = o.exec(t2);
    if (e2) {
      const [, t3, n3, o2] = e2;
      return s(t3, r.yF, +n3, +o2);
    }
    const n2 = i.exec(t2);
    if (n2) {
      if (n2[2] && 0 === n2[2].indexOf("eval")) {
        const t4 = a.exec(n2[2]);
        t4 && (n2[2] = t4[1], n2[3] = t4[2], n2[4] = t4[3]);
      }
      const [t3, e3] = f(n2[1] || r.yF, n2[2]);
      return s(e3, t3, n2[3] ? +n2[3] : void 0, n2[4] ? +n2[4] : void 0);
    }
  }], u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = [c, [50, (t2) => {
    const e2 = u.exec(t2);
    if (e2) {
      if (e2[3] && e2[3].indexOf(" > eval") > -1) {
        const t4 = l.exec(e2[3]);
        t4 && (e2[1] = e2[1] || "eval", e2[3] = t4[1], e2[4] = t4[2], e2[5] = "");
      }
      let t3 = e2[3], n2 = e2[1] || r.yF;
      return [n2, t3] = f(n2, t3), s(t3, n2, e2[4] ? +e2[4] : void 0, e2[5] ? +e2[5] : void 0);
    }
  }]], p = (0, r.gd)(...d), f = (t2, e2) => {
    const n2 = -1 !== t2.indexOf("safari-extension"), s2 = -1 !== t2.indexOf("safari-web-extension");
    return n2 || s2 ? [-1 !== t2.indexOf("@") ? t2.split("@")[0] : r.yF, n2 ? `safari-extension:${e2}` : `safari-web-extension:${e2}`] : [t2, e2];
  };
}, 15547(t, e, n) {
  n.d(e, { h: () => p });
  var r = n(19151), s = n(49111), o = n(31784), i = n(89391);
  class a {
    constructor(t2, e2) {
      let n2, r2;
      n2 = t2 || new s.H(), r2 = e2 || new s.H(), this._stack = [{ scope: n2 }], this._isolationScope = r2;
    }
    withScope(t2) {
      const e2 = this._pushScope();
      let n2;
      try {
        n2 = t2(e2);
      } catch (t3) {
        throw this._popScope(), t3;
      }
      return (0, i.Qg)(n2) ? n2.then(((t3) => (this._popScope(), t3)), ((t3) => {
        throw this._popScope(), t3;
      })) : (this._popScope(), n2);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      const t2 = this.getScope().clone();
      return this._stack.push({ client: this.getClient(), scope: t2 }), t2;
    }
    _popScope() {
      return !(this._stack.length <= 1 || !this._stack.pop());
    }
  }
  function c() {
    const t2 = (0, r.E)(), e2 = (0, r.S)(t2);
    return e2.stack = e2.stack || new a((0, o.B)("defaultCurrentScope", (() => new s.H())), (0, o.B)("defaultIsolationScope", (() => new s.H())));
  }
  function u(t2) {
    return c().withScope(t2);
  }
  function l(t2, e2) {
    const n2 = c();
    return n2.withScope((() => (n2.getStackTop().scope = t2, e2(t2))));
  }
  function d(t2) {
    return c().withScope((() => t2(c().getIsolationScope())));
  }
  function p(t2) {
    const e2 = (0, r.S)(t2);
    return e2.acs ? e2.acs : { withIsolationScope: d, withScope: u, withSetScope: l, withSetIsolationScope: (t3, e3) => d(e3), getCurrentScope: () => c().getScope(), getIsolationScope: () => c().getIsolationScope() };
  }
}, 26637(t, e, n) {
  n.d(e, { Z: () => a });
  var r = n(11555), s = n(3019), o = n(82434);
  const i = 100;
  function a(t2, e2) {
    const n2 = (0, r.KU)(), a2 = (0, r.rm)();
    if (!n2) return;
    const { beforeBreadcrumb: c = null, maxBreadcrumbs: u = i } = n2.getOptions();
    if (u <= 0) return;
    const l = { timestamp: (0, o.lu)(), ...t2 }, d = c ? (0, s.pq)((() => c(l, e2))) : l;
    null !== d && (n2.emit && n2.emit("beforeAddBreadcrumb", d, e2), a2.addBreadcrumb(d, u));
  }
}, 19151(t, e, n) {
  n.d(e, { E: () => o, S: () => i });
  var r = n(19651), s = n(31784);
  function o() {
    return i(s.O), s.O;
  }
  function i(t2) {
    const e2 = t2.__SENTRY__ = t2.__SENTRY__ || {};
    return e2.version = e2.version || r.M, e2[r.M] = e2[r.M] || {};
  }
}, 90066(t, e, n) {
  n.d(e, { U: () => r });
  const r = "production";
}, 11555(t, e, n) {
  n.d(e, { KU: () => p, m6: () => l, o5: () => c, rm: () => u, v4: () => d, vn: () => f });
  var r = n(15547), s = n(19151), o = n(49111), i = n(69412), a = n(31784);
  function c() {
    const t2 = (0, s.E)();
    return (0, r.h)(t2).getCurrentScope();
  }
  function u() {
    const t2 = (0, s.E)();
    return (0, r.h)(t2).getIsolationScope();
  }
  function l() {
    return (0, a.B)("globalScope", (() => new o.H()));
  }
  function d(...t2) {
    const e2 = (0, s.E)(), n2 = (0, r.h)(e2);
    if (2 === t2.length) {
      const [e3, r2] = t2;
      return e3 ? n2.withSetScope(e3, r2) : n2.withScope(r2);
    }
    return n2.withScope(t2[0]);
  }
  function p() {
    return c().getClient();
  }
  function f(t2) {
    const e2 = t2.getPropagationContext(), { traceId: n2, spanId: r2, parentSpanId: s2 } = e2;
    return (0, i.Ce)({ trace_id: n2, span_id: r2, parent_span_id: s2 });
  }
}, 96093(t, e, n) {
  n.d(e, { T: () => r });
  const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
}, 77487(t, e, n) {
  n.d(e, { LE: () => a, V7: () => c, lu: () => u });
  var r = n(39180), s = n(47586), o = n(95491), i = n(9164);
  function a(t2, e2, n2, r2) {
    const i2 = (0, o.Cj)(n2), a2 = { sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i2 && { sdk: i2 }, ...!!r2 && e2 && { dsn: (0, s.SB)(e2) } }, c2 = "aggregates" in t2 ? [{ type: "sessions" }, t2] : [{ type: "session" }, t2.toJSON()];
    return (0, o.h4)(a2, [c2]);
  }
  function c(t2, e2, n2, r2) {
    const s2 = (0, o.Cj)(n2), i2 = t2.type && "replay_event" !== t2.type ? t2.type : "event";
    !(function(t3, e3) {
      e3 && (t3.sdk = t3.sdk || {}, t3.sdk.name = t3.sdk.name || e3.name, t3.sdk.version = t3.sdk.version || e3.version, t3.sdk.integrations = [...t3.sdk.integrations || [], ...e3.integrations || []], t3.sdk.packages = [...t3.sdk.packages || [], ...e3.packages || []]);
    })(t2, n2 && n2.sdk);
    const a2 = (0, o.n2)(t2, s2, r2, e2);
    delete t2.sdkProcessingMetadata;
    const c2 = [{ type: i2 }, t2];
    return (0, o.h4)(a2, [c2]);
  }
  function u(t2, e2) {
    const n2 = (0, r.k1)(t2[0]), a2 = e2 && e2.getDsn(), c2 = e2 && e2.getOptions().tunnel, u2 = { sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...(function(t3) {
      return !!t3.trace_id && !!t3.public_key;
    })(n2) && { trace: n2 }, ...!!c2 && a2 && { dsn: (0, s.SB)(a2) } }, l = e2 && e2.getOptions().beforeSendSpan, d = l ? (t3) => {
      const e3 = l((0, i.et)(t3));
      return e3 || (0, i.xl)(), e3;
    } : (t3) => (0, i.et)(t3), p = [];
    for (const e3 of t2) {
      const t3 = d(e3);
      t3 && p.push((0, o.y5)(t3));
    }
    return (0, o.h4)(u2, p);
  }
}, 87489(t, e, n) {
  n.d(e, { P$: () => a, _C: () => l, lc: () => c, mH: () => i, qm: () => u });
  var r = n(96093), s = n(3019);
  const o = [];
  function i(t2) {
    const e2 = t2.defaultIntegrations || [], n2 = t2.integrations;
    let r2;
    if (e2.forEach(((t3) => {
      t3.isDefaultInstance = true;
    })), Array.isArray(n2)) r2 = [...e2, ...n2];
    else if ("function" == typeof n2) {
      const t3 = n2(e2);
      r2 = Array.isArray(t3) ? t3 : [t3];
    } else r2 = e2;
    const s2 = (function(t3) {
      const e3 = {};
      return t3.forEach(((t4) => {
        const { name: n3 } = t4, r3 = e3[n3];
        r3 && !r3.isDefaultInstance && t4.isDefaultInstance || (e3[n3] = t4);
      })), Object.values(e3);
    })(r2), o2 = s2.findIndex(((t3) => "Debug" === t3.name));
    if (o2 > -1) {
      const [t3] = s2.splice(o2, 1);
      s2.push(t3);
    }
    return s2;
  }
  function a(t2, e2) {
    const n2 = {};
    return e2.forEach(((e3) => {
      e3 && u(t2, e3, n2);
    })), n2;
  }
  function c(t2, e2) {
    for (const n2 of e2) n2 && n2.afterAllSetup && n2.afterAllSetup(t2);
  }
  function u(t2, e2, n2) {
    if (n2[e2.name]) r.T && s.vF.log(`Integration skipped because it was already installed: ${e2.name}`);
    else {
      if (n2[e2.name] = e2, -1 === o.indexOf(e2.name) && "function" == typeof e2.setupOnce && (e2.setupOnce(), o.push(e2.name)), e2.setup && "function" == typeof e2.setup && e2.setup(t2), "function" == typeof e2.preprocessEvent) {
        const n3 = e2.preprocessEvent.bind(e2);
        t2.on("preprocessEvent", ((e3, r2) => n3(e3, r2, t2)));
      }
      if ("function" == typeof e2.processEvent) {
        const n3 = e2.processEvent.bind(e2), r2 = Object.assign(((e3, r3) => n3(e3, r3, t2)), { id: e2.name });
        t2.addEventProcessor(r2);
      }
      r.T && s.vF.log(`Integration installed: ${e2.name}`);
    }
  }
  function l(t2) {
    return t2;
  }
}, 66772(t, e, n) {
  n.d(e, { g: () => s });
  var r = n(69412);
  function s(t2) {
    const e2 = t2._sentryMetrics;
    if (!e2) return;
    const n2 = {};
    for (const [, [t3, s2]] of e2) (n2[t3] || (n2[t3] = [])).push((0, r.Ce)(s2));
    return n2;
  }
}, 49111(t, e, n) {
  n.d(e, { H: () => p });
  var r = n(3103), s = n(89391), o = n(3019), i = n(91335), a = n(42586), c = n(82434), u = n(91421), l = n(13266);
  class d {
    constructor() {
      this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: (0, a.el)(), spanId: (0, a.ZF)() };
    }
    clone() {
      const t2 = new d();
      return t2._breadcrumbs = [...this._breadcrumbs], t2._tags = { ...this._tags }, t2._extra = { ...this._extra }, t2._contexts = { ...this._contexts }, this._contexts.flags && (t2._contexts.flags = { values: [...this._contexts.flags.values] }), t2._user = this._user, t2._level = this._level, t2._session = this._session, t2._transactionName = this._transactionName, t2._fingerprint = this._fingerprint, t2._eventProcessors = [...this._eventProcessors], t2._requestSession = this._requestSession, t2._attachments = [...this._attachments], t2._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t2._propagationContext = { ...this._propagationContext }, t2._client = this._client, t2._lastEventId = this._lastEventId, (0, l.r)(t2, (0, l.f)(this)), t2;
    }
    setClient(t2) {
      this._client = t2;
    }
    setLastEventId(t2) {
      this._lastEventId = t2;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(t2) {
      this._scopeListeners.push(t2);
    }
    addEventProcessor(t2) {
      return this._eventProcessors.push(t2), this;
    }
    setUser(t2) {
      return this._user = t2 || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && (0, r.qO)(this._session, { user: t2 }), this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(t2) {
      return this._requestSession = t2, this;
    }
    setTags(t2) {
      return this._tags = { ...this._tags, ...t2 }, this._notifyScopeListeners(), this;
    }
    setTag(t2, e2) {
      return this._tags = { ...this._tags, [t2]: e2 }, this._notifyScopeListeners(), this;
    }
    setExtras(t2) {
      return this._extra = { ...this._extra, ...t2 }, this._notifyScopeListeners(), this;
    }
    setExtra(t2, e2) {
      return this._extra = { ...this._extra, [t2]: e2 }, this._notifyScopeListeners(), this;
    }
    setFingerprint(t2) {
      return this._fingerprint = t2, this._notifyScopeListeners(), this;
    }
    setLevel(t2) {
      return this._level = t2, this._notifyScopeListeners(), this;
    }
    setTransactionName(t2) {
      return this._transactionName = t2, this._notifyScopeListeners(), this;
    }
    setContext(t2, e2) {
      return null === e2 ? delete this._contexts[t2] : this._contexts[t2] = e2, this._notifyScopeListeners(), this;
    }
    setSession(t2) {
      return t2 ? this._session = t2 : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(t2) {
      if (!t2) return this;
      const e2 = "function" == typeof t2 ? t2(this) : t2, [n2, r2] = e2 instanceof p ? [e2.getScopeData(), e2.getRequestSession()] : (0, s.Qd)(e2) ? [t2, t2.requestSession] : [], { tags: o2, extra: i2, user: a2, contexts: c2, level: u2, fingerprint: l2 = [], propagationContext: d2 } = n2 || {};
      return this._tags = { ...this._tags, ...o2 }, this._extra = { ...this._extra, ...i2 }, this._contexts = { ...this._contexts, ...c2 }, a2 && Object.keys(a2).length && (this._user = a2), u2 && (this._level = u2), l2.length && (this._fingerprint = l2), d2 && (this._propagationContext = d2), r2 && (this._requestSession = r2), this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, (0, l.r)(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: (0, a.el)() }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t2, e2) {
      const n2 = "number" == typeof e2 ? e2 : 100;
      if (n2 <= 0) return this;
      const r2 = { timestamp: (0, c.lu)(), ...t2 }, s2 = this._breadcrumbs;
      return s2.push(r2), this._breadcrumbs = s2.length > n2 ? s2.slice(-n2) : s2, this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(t2) {
      return this._attachments.push(t2), this;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    getScopeData() {
      return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: (0, l.f)(this) };
    }
    setSDKProcessingMetadata(t2) {
      return this._sdkProcessingMetadata = (0, u.h)(this._sdkProcessingMetadata, t2, 2), this;
    }
    setPropagationContext(t2) {
      return this._propagationContext = { spanId: (0, a.ZF)(), ...t2 }, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t2, e2) {
      const n2 = e2 && e2.event_id ? e2.event_id : (0, i.eJ)();
      if (!this._client) return o.vF.warn("No client configured on scope - will not capture exception!"), n2;
      const r2 = new Error("Sentry syntheticException");
      return this._client.captureException(t2, { originalException: t2, syntheticException: r2, ...e2, event_id: n2 }, this), n2;
    }
    captureMessage(t2, e2, n2) {
      const r2 = n2 && n2.event_id ? n2.event_id : (0, i.eJ)();
      if (!this._client) return o.vF.warn("No client configured on scope - will not capture message!"), r2;
      const s2 = new Error(t2);
      return this._client.captureMessage(t2, e2, { originalException: t2, syntheticException: s2, ...n2, event_id: r2 }, this), r2;
    }
    captureEvent(t2, e2) {
      const n2 = e2 && e2.event_id ? e2.event_id : (0, i.eJ)();
      return this._client ? (this._client.captureEvent(t2, { ...e2, event_id: n2 }, this), n2) : (o.vF.warn("No client configured on scope - will not capture event!"), n2);
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach(((t2) => {
        t2(this);
      })), this._notifyingListeners = false);
    }
  }
  const p = d;
}, 47410(t, e, n) {
  n.d(e, { E1: () => l, JD: () => i, Le: () => u, Sn: () => a, i_: () => r, jG: () => d, sy: () => s, uT: () => o, xc: () => c });
  const r = "sentry.source", s = "sentry.sample_rate", o = "sentry.op", i = "sentry.origin", a = "sentry.measurement_unit", c = "sentry.measurement_value", u = "sentry.custom_span_name", l = "sentry.profile_id", d = "sentry.exclusive_time";
}, 3103(t, e, n) {
  n.d(e, { Vu: () => c, fj: () => i, qO: () => a });
  var r = n(69412), s = n(82434), o = n(91335);
  function i(t2) {
    const e2 = (0, s.zf)(), n2 = { sid: (0, o.eJ)(), init: true, timestamp: e2, started: e2, duration: 0, status: "ok", errors: 0, ignoreDuration: false, toJSON: () => (function(t3) {
      return (0, r.Ce)({ sid: `${t3.sid}`, init: t3.init, started: new Date(1e3 * t3.started).toISOString(), timestamp: new Date(1e3 * t3.timestamp).toISOString(), status: t3.status, errors: t3.errors, did: "number" == typeof t3.did || "string" == typeof t3.did ? `${t3.did}` : void 0, duration: t3.duration, abnormal_mechanism: t3.abnormal_mechanism, attrs: { release: t3.release, environment: t3.environment, ip_address: t3.ipAddress, user_agent: t3.userAgent } });
    })(n2) };
    return t2 && a(n2, t2), n2;
  }
  function a(t2, e2 = {}) {
    if (e2.user && (!t2.ipAddress && e2.user.ip_address && (t2.ipAddress = e2.user.ip_address), t2.did || e2.did || (t2.did = e2.user.id || e2.user.email || e2.user.username)), t2.timestamp = e2.timestamp || (0, s.zf)(), e2.abnormal_mechanism && (t2.abnormal_mechanism = e2.abnormal_mechanism), e2.ignoreDuration && (t2.ignoreDuration = e2.ignoreDuration), e2.sid && (t2.sid = 32 === e2.sid.length ? e2.sid : (0, o.eJ)()), void 0 !== e2.init && (t2.init = e2.init), !t2.did && e2.did && (t2.did = `${e2.did}`), "number" == typeof e2.started && (t2.started = e2.started), t2.ignoreDuration) t2.duration = void 0;
    else if ("number" == typeof e2.duration) t2.duration = e2.duration;
    else {
      const e3 = t2.timestamp - t2.started;
      t2.duration = e3 >= 0 ? e3 : 0;
    }
    e2.release && (t2.release = e2.release), e2.environment && (t2.environment = e2.environment), !t2.ipAddress && e2.ipAddress && (t2.ipAddress = e2.ipAddress), !t2.userAgent && e2.userAgent && (t2.userAgent = e2.userAgent), "number" == typeof e2.errors && (t2.errors = e2.errors), e2.status && (t2.status = e2.status);
  }
  function c(t2, e2) {
    let n2 = {};
    e2 ? n2 = { status: e2 } : "ok" === t2.status && (n2 = { status: "exited" }), a(t2, n2);
  }
}, 39180(t, e, n) {
  n.d(e, { LZ: () => f, ao: () => m, k1: () => g });
  var r = n(90066), s = n(11555), o = n(47410), i = n(89391);
  const a = /^sentry-/;
  function c(t2) {
    return t2.split(",").map(((t3) => t3.split("=").map(((t4) => decodeURIComponent(t4.trim()))))).reduce(((t3, [e2, n2]) => (e2 && n2 && (t3[e2] = n2), t3)), {});
  }
  var u = n(69412), l = n(51914), d = n(9164);
  const p = "_frozenDsc";
  function f(t2, e2) {
    const n2 = t2;
    (0, u.my)(n2, p, e2);
  }
  function h(t2, e2) {
    const n2 = e2.getOptions(), { publicKey: s2 } = e2.getDsn() || {}, o2 = (0, u.Ce)({ environment: n2.environment || r.U, release: n2.release, public_key: s2, trace_id: t2 });
    return e2.emit("createDsc", o2), o2;
  }
  function m(t2, e2) {
    const n2 = e2.getPropagationContext();
    return n2.dsc || h(n2.traceId, t2);
  }
  function g(t2) {
    const e2 = (0, s.KU)();
    if (!e2) return {};
    const n2 = (0, d.zU)(t2), r2 = n2[p];
    if (r2) return r2;
    const u2 = n2.spanContext().traceState, f2 = u2 && u2.get("sentry.dsc"), m2 = f2 && (function(t3) {
      const e3 = (function(t4) {
        if (t4 && ((0, i.Kg)(t4) || Array.isArray(t4))) return Array.isArray(t4) ? t4.reduce(((t5, e4) => {
          const n4 = c(e4);
          return Object.entries(n4).forEach((([e5, n5]) => {
            t5[e5] = n5;
          })), t5;
        }), {}) : c(t4);
      })(t3);
      if (!e3) return;
      const n3 = Object.entries(e3).reduce(((t4, [e4, n4]) => (e4.match(a) && (t4[e4.slice(7)] = n4), t4)), {});
      return Object.keys(n3).length > 0 ? n3 : void 0;
    })(f2);
    if (m2) return m2;
    const g2 = h(t2.spanContext().traceId, e2), _ = (0, d.et)(n2), v = _.data || {}, y = v[o.sy];
    null != y && (g2.sample_rate = `${y}`);
    const E = v[o.i_], b = _.description;
    return "url" !== E && b && (g2.transaction = b), (0, l.w)() && (g2.sampled = String((0, d.pK)(n2))), e2.emit("createDsc", g2, n2), g2;
  }
}, 15770(t, e, n) {
  n.d(e, { F3: () => s, TJ: () => o, a3: () => r });
  const r = 0, s = 1, o = 2;
}, 77867(t, e, n) {
  n.d(e, { o: () => c });
  var r = n(96093), s = n(95491), o = n(38705), i = n(3019), a = n(57447);
  function c(t2, e2, n2 = /* @__PURE__ */ (function(t3) {
    const e3 = [];
    function n3(t4) {
      return e3.splice(e3.indexOf(t4), 1)[0] || Promise.resolve(void 0);
    }
    return { $: e3, add: function(r2) {
      if (!(void 0 === t3 || e3.length < t3)) return (0, a.xg)(new o.U("Not adding Promise because buffer limit was reached."));
      const s2 = r2();
      return -1 === e3.indexOf(s2) && e3.push(s2), s2.then((() => n3(s2))).then(null, (() => n3(s2).then(null, (() => {
      })))), s2;
    }, drain: function(t4) {
      return new a.T2(((n4, r2) => {
        let s2 = e3.length;
        if (!s2) return n4(true);
        const o2 = setTimeout((() => {
          t4 && t4 > 0 && n4(false);
        }), t4);
        e3.forEach(((t5) => {
          (0, a.XW)(t5).then((() => {
            --s2 || (clearTimeout(o2), n4(true));
          }), r2);
        }));
      }));
    } };
  })(t2.bufferSize || 64)) {
    let c2 = {};
    return { send: function(l) {
      const d = [];
      if ((0, s.yH)(l, ((e3, n3) => {
        const r2 = (0, s.zk)(n3);
        if ((function(t3, e4, n4 = Date.now()) {
          return (function(t4, e5) {
            return t4[e5] || t4.all || 0;
          })(t3, e4) > n4;
        })(c2, r2)) {
          const s2 = u(e3, n3);
          t2.recordDroppedEvent("ratelimit_backoff", r2, s2);
        } else d.push(e3);
      })), 0 === d.length) return (0, a.XW)({});
      const p = (0, s.h4)(l[0], d), f = (e3) => {
        (0, s.yH)(p, ((n3, r2) => {
          const o2 = u(n3, r2);
          t2.recordDroppedEvent(e3, (0, s.zk)(r2), o2);
        }));
      };
      return n2.add((() => e2({ body: (0, s.bN)(p) }).then(((t3) => (void 0 !== t3.statusCode && (t3.statusCode < 200 || t3.statusCode >= 300) && r.T && i.vF.warn(`Sentry responded with status code ${t3.statusCode} to sent event.`), c2 = (function(t4, { statusCode: e3, headers: n3 }, r2 = Date.now()) {
        const s2 = { ...t4 }, o2 = n3 && n3["x-sentry-rate-limits"], i2 = n3 && n3["retry-after"];
        if (o2) for (const t5 of o2.trim().split(",")) {
          const [e4, n4, , , o3] = t5.split(":", 5), i3 = parseInt(e4, 10), a2 = 1e3 * (isNaN(i3) ? 60 : i3);
          if (n4) for (const t6 of n4.split(";")) "metric_bucket" === t6 && o3 && !o3.split(";").includes("custom") || (s2[t6] = r2 + a2);
          else s2.all = r2 + a2;
        }
        else i2 ? s2.all = r2 + (function(t5, e4 = Date.now()) {
          const n4 = parseInt(`${t5}`, 10);
          if (!isNaN(n4)) return 1e3 * n4;
          const r3 = Date.parse(`${t5}`);
          return isNaN(r3) ? 6e4 : r3 - e4;
        })(i2, r2) : 429 === e3 && (s2.all = r2 + 6e4);
        return s2;
      })(c2, t3), t3)), ((t3) => {
        throw f("network_error"), t3;
      })))).then(((t3) => t3), ((t3) => {
        if (t3 instanceof o.U) return r.T && i.vF.error("Skipped sending event because buffer is full."), f("queue_overflow"), (0, a.XW)({});
        throw t3;
      }));
    }, flush: (t3) => n2.drain(t3) };
  }
  function u(t2, e2) {
    if ("event" === e2 || "transaction" === e2) return Array.isArray(t2) ? t2[1] : void 0;
  }
}, 26255(t, e, n) {
  n.d(e, { $N: () => a, Hd: () => o, xE: () => c });
  var r = n(89391);
  const s = n(31784).O;
  function o(t2, e2 = {}) {
    if (!t2) return "<unknown>";
    try {
      let n2 = t2;
      const r2 = 5, s2 = [];
      let o2 = 0, a2 = 0;
      const c2 = " > ", u = c2.length;
      let l;
      const d = Array.isArray(e2) ? e2 : e2.keyAttrs, p = !Array.isArray(e2) && e2.maxStringLength || 80;
      for (; n2 && o2++ < r2 && (l = i(n2, d), !("html" === l || o2 > 1 && a2 + s2.length * u + l.length >= p)); ) s2.push(l), a2 += l.length, n2 = n2.parentNode;
      return s2.reverse().join(c2);
    } catch (t3) {
      return "<unknown>";
    }
  }
  function i(t2, e2) {
    const n2 = t2, o2 = [];
    if (!n2 || !n2.tagName) return "";
    if (s.HTMLElement && n2 instanceof HTMLElement && n2.dataset) {
      if (n2.dataset.sentryComponent) return n2.dataset.sentryComponent;
      if (n2.dataset.sentryElement) return n2.dataset.sentryElement;
    }
    o2.push(n2.tagName.toLowerCase());
    const i2 = e2 && e2.length ? e2.filter(((t3) => n2.getAttribute(t3))).map(((t3) => [t3, n2.getAttribute(t3)])) : null;
    if (i2 && i2.length) i2.forEach(((t3) => {
      o2.push(`[${t3[0]}="${t3[1]}"]`);
    }));
    else {
      n2.id && o2.push(`#${n2.id}`);
      const t3 = n2.className;
      if (t3 && (0, r.Kg)(t3)) {
        const e3 = t3.split(/\s+/);
        for (const t4 of e3) o2.push(`.${t4}`);
      }
    }
    const a2 = ["aria-label", "type", "name", "title", "alt"];
    for (const t3 of a2) {
      const e3 = n2.getAttribute(t3);
      e3 && o2.push(`[${t3}="${e3}"]`);
    }
    return o2.join("");
  }
  function a() {
    try {
      return s.document.location.href;
    } catch (t2) {
      return "";
    }
  }
  function c(t2) {
    if (!s.HTMLElement) return null;
    let e2 = t2;
    for (let t3 = 0; t3 < 5; t3++) {
      if (!e2) return null;
      if (e2 instanceof HTMLElement) {
        if (e2.dataset.sentryComponent) return e2.dataset.sentryComponent;
        if (e2.dataset.sentryElement) return e2.dataset.sentryElement;
      }
      e2 = e2.parentNode;
    }
    return null;
  }
}, 76177(t, e, n) {
  n.d(e, { T: () => r });
  const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
}, 47586(t, e, n) {
  n.d(e, { AD: () => c, SB: () => i });
  var r = n(76177), s = n(3019);
  const o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function i(t2, e2 = false) {
    const { host: n2, path: r2, pass: s2, port: o2, projectId: i2, protocol: a2, publicKey: c2 } = t2;
    return `${a2}://${c2}${e2 && s2 ? `:${s2}` : ""}@${n2}${o2 ? `:${o2}` : ""}/${r2 ? `${r2}/` : r2}${i2}`;
  }
  function a(t2) {
    return { protocol: t2.protocol, publicKey: t2.publicKey || "", pass: t2.pass || "", host: t2.host, port: t2.port || "", path: t2.path || "", projectId: t2.projectId };
  }
  function c(t2) {
    const e2 = "string" == typeof t2 ? (function(t3) {
      const e3 = o.exec(t3);
      if (!e3) return void (0, s.pq)((() => {
        console.error(`Invalid Sentry Dsn: ${t3}`);
      }));
      const [n2, r2, i2 = "", c2 = "", u = "", l = ""] = e3.slice(1);
      let d = "", p = l;
      const f = p.split("/");
      if (f.length > 1 && (d = f.slice(0, -1).join("/"), p = f.pop()), p) {
        const t4 = p.match(/^\d+/);
        t4 && (p = t4[0]);
      }
      return a({ host: c2, pass: i2, path: d, projectId: p, port: u, protocol: n2, publicKey: r2 });
    })(t2) : a(t2);
    if (e2 && (function(t3) {
      if (!r.T) return true;
      const { port: e3, projectId: n2, protocol: o2 } = t3;
      return !(["protocol", "publicKey", "host", "projectId"].find(((e4) => !t3[e4] && (s.vF.error(`Invalid Sentry Dsn: ${e4} missing`), true))) || (n2.match(/^\d+$/) ? /* @__PURE__ */ (function(t4) {
        return "http" === t4 || "https" === t4;
      })(o2) ? e3 && isNaN(parseInt(e3, 10)) && (s.vF.error(`Invalid Sentry Dsn: Invalid port ${e3}`), 1) : (s.vF.error(`Invalid Sentry Dsn: Invalid protocol ${o2}`), 1) : (s.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n2}`), 1)));
    })(e2)) return e2;
  }
}, 95491(t, e, n) {
  n.d(e, { Cj: () => g, W3: () => c, bN: () => d, bm: () => f, h4: () => a, n2: () => _, y5: () => p, yH: () => u, zk: () => m });
  var r = n(47586), s = n(63522), o = n(69412), i = n(31784);
  function a(t2, e2 = []) {
    return [t2, e2];
  }
  function c(t2, e2) {
    const [n2, r2] = t2;
    return [n2, [...r2, e2]];
  }
  function u(t2, e2) {
    const n2 = t2[1];
    for (const t3 of n2) if (e2(t3, t3[0].type)) return true;
    return false;
  }
  function l(t2) {
    return i.O.__SENTRY__ && i.O.__SENTRY__.encodePolyfill ? i.O.__SENTRY__.encodePolyfill(t2) : new TextEncoder().encode(t2);
  }
  function d(t2) {
    const [e2, n2] = t2;
    let r2 = JSON.stringify(e2);
    function o2(t3) {
      "string" == typeof r2 ? r2 = "string" == typeof t3 ? r2 + t3 : [l(r2), t3] : r2.push("string" == typeof t3 ? l(t3) : t3);
    }
    for (const t3 of n2) {
      const [e3, n3] = t3;
      if (o2(`
${JSON.stringify(e3)}
`), "string" == typeof n3 || n3 instanceof Uint8Array) o2(n3);
      else {
        let t4;
        try {
          t4 = JSON.stringify(n3);
        } catch (e4) {
          t4 = JSON.stringify((0, s.S8)(n3));
        }
        o2(t4);
      }
    }
    return "string" == typeof r2 ? r2 : (function(t3) {
      const e3 = t3.reduce(((t4, e4) => t4 + e4.length), 0), n3 = new Uint8Array(e3);
      let r3 = 0;
      for (const e4 of t3) n3.set(e4, r3), r3 += e4.length;
      return n3;
    })(r2);
  }
  function p(t2) {
    return [{ type: "span" }, t2];
  }
  function f(t2) {
    const e2 = "string" == typeof t2.data ? l(t2.data) : t2.data;
    return [(0, o.Ce)({ type: "attachment", length: e2.length, filename: t2.filename, content_type: t2.contentType, attachment_type: t2.attachmentType }), e2];
  }
  const h = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
  function m(t2) {
    return h[t2];
  }
  function g(t2) {
    if (!t2 || !t2.sdk) return;
    const { name: e2, version: n2 } = t2.sdk;
    return { name: e2, version: n2 };
  }
  function _(t2, e2, n2, s2) {
    const i2 = t2.sdkProcessingMetadata && t2.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: t2.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...e2 && { sdk: e2 }, ...!!n2 && s2 && { dsn: (0, r.SB)(s2) }, ...i2 && { trace: (0, o.Ce)({ ...i2 }) } };
  }
}, 38705(t, e, n) {
  n.d(e, { U: () => r });
  class r extends Error {
    constructor(t2, e2 = "warn") {
      super(t2), this.message = t2, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e2;
    }
  }
}, 89391(t, e, n) {
  n.d(e, { BD: () => a, Kg: () => u, L2: () => y, NF: () => l, Qd: () => p, Qg: () => g, T2: () => i, W6: () => c, bJ: () => s, gd: () => m, mE: () => _, sO: () => d, tH: () => v, vq: () => h, xH: () => f });
  const r = Object.prototype.toString;
  function s(t2) {
    switch (r.call(t2)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return true;
      default:
        return v(t2, Error);
    }
  }
  function o(t2, e2) {
    return r.call(t2) === `[object ${e2}]`;
  }
  function i(t2) {
    return o(t2, "ErrorEvent");
  }
  function a(t2) {
    return o(t2, "DOMError");
  }
  function c(t2) {
    return o(t2, "DOMException");
  }
  function u(t2) {
    return o(t2, "String");
  }
  function l(t2) {
    return "object" == typeof t2 && null !== t2 && "__sentry_template_string__" in t2 && "__sentry_template_values__" in t2;
  }
  function d(t2) {
    return null === t2 || l(t2) || "object" != typeof t2 && "function" != typeof t2;
  }
  function p(t2) {
    return o(t2, "Object");
  }
  function f(t2) {
    return "undefined" != typeof Event && v(t2, Event);
  }
  function h(t2) {
    return "undefined" != typeof Element && v(t2, Element);
  }
  function m(t2) {
    return o(t2, "RegExp");
  }
  function g(t2) {
    return Boolean(t2 && t2.then && "function" == typeof t2.then);
  }
  function _(t2) {
    return p(t2) && "nativeEvent" in t2 && "preventDefault" in t2 && "stopPropagation" in t2;
  }
  function v(t2, e2) {
    try {
      return t2 instanceof e2;
    } catch (t3) {
      return false;
    }
  }
  function y(t2) {
    return !("object" != typeof t2 || null === t2 || !t2.__isVue && !t2._isVue);
  }
}, 3019(t, e, n) {
  n.d(e, { Ow: () => o, Z9: () => i, pq: () => a, vF: () => c });
  var r = n(76177), s = n(31784);
  const o = ["debug", "info", "warn", "error", "log", "assert", "trace"], i = {};
  function a(t2) {
    if (!("console" in s.O)) return t2();
    const e2 = s.O.console, n2 = {}, r2 = Object.keys(i);
    r2.forEach(((t3) => {
      const r3 = i[t3];
      n2[t3] = e2[t3], e2[t3] = r3;
    }));
    try {
      return t2();
    } finally {
      r2.forEach(((t3) => {
        e2[t3] = n2[t3];
      }));
    }
  }
  const c = (0, s.B)("logger", (function() {
    let t2 = false;
    const e2 = { enable: () => {
      t2 = true;
    }, disable: () => {
      t2 = false;
    }, isEnabled: () => t2 };
    return r.T ? o.forEach(((n2) => {
      e2[n2] = (...e3) => {
        t2 && a((() => {
          s.O.console[n2](`Sentry Logger [${n2}]:`, ...e3);
        }));
      };
    })) : o.forEach(((t3) => {
      e2[t3] = () => {
      };
    })), e2;
  }));
}, 91335(t, e, n) {
  n.d(e, { $X: () => a, GR: () => l, M6: () => u, eJ: () => o, gO: () => c });
  var r = n(69412), s = n(31784);
  function o() {
    const t2 = s.O, e2 = t2.crypto || t2.msCrypto;
    let n2 = () => 16 * Math.random();
    try {
      if (e2 && e2.randomUUID) return e2.randomUUID().replace(/-/g, "");
      e2 && e2.getRandomValues && (n2 = () => {
        const t3 = new Uint8Array(1);
        return e2.getRandomValues(t3), t3[0];
      });
    } catch (t3) {
    }
    return ("10000000100040008000" + 1e11).replace(/[018]/g, ((t3) => (t3 ^ (15 & n2()) >> t3 / 4).toString(16)));
  }
  function i(t2) {
    return t2.exception && t2.exception.values ? t2.exception.values[0] : void 0;
  }
  function a(t2) {
    const { message: e2, event_id: n2 } = t2;
    if (e2) return e2;
    const r2 = i(t2);
    return r2 ? r2.type && r2.value ? `${r2.type}: ${r2.value}` : r2.type || r2.value || n2 || "<unknown>" : n2 || "<unknown>";
  }
  function c(t2, e2, n2) {
    const r2 = t2.exception = t2.exception || {}, s2 = r2.values = r2.values || [], o2 = s2[0] = s2[0] || {};
    o2.value || (o2.value = e2 || ""), o2.type || (o2.type = n2 || "Error");
  }
  function u(t2, e2) {
    const n2 = i(t2);
    if (!n2) return;
    const r2 = n2.mechanism;
    if (n2.mechanism = { type: "generic", handled: true, ...r2, ...e2 }, e2 && "data" in e2) {
      const t3 = { ...r2 && r2.data, ...e2.data };
      n2.mechanism.data = t3;
    }
  }
  function l(t2) {
    if ((function(t3) {
      try {
        return t3.__sentry_captured__;
      } catch (t4) {
      }
    })(t2)) return true;
    try {
      (0, r.my)(t2, "__sentry_captured__", true);
    } catch (t3) {
    }
    return false;
  }
}, 63522(t, e, n) {
  n.d(e, { S8: () => i, cd: () => a });
  var r = n(89391), s = n(69412), o = n(96938);
  function i(t2, e2 = 100, n2 = 1 / 0) {
    try {
      return c("", t2, e2, n2);
    } catch (t3) {
      return { ERROR: `**non-serializable** (${t3})` };
    }
  }
  function a(t2, e2 = 3, n2 = 102400) {
    const r2 = i(t2, e2);
    return s2 = r2, (function(t3) {
      return ~-encodeURI(t3).split(/%..|./).length;
    })(JSON.stringify(s2)) > n2 ? a(t2, e2 - 1, n2) : r2;
    var s2;
  }
  function c(t2, e2, n2 = 1 / 0, i2 = 1 / 0, a2 = /* @__PURE__ */ (function() {
    const t3 = "function" == typeof WeakSet, e3 = t3 ? /* @__PURE__ */ new WeakSet() : [];
    return [function(n3) {
      if (t3) return !!e3.has(n3) || (e3.add(n3), false);
      for (let t4 = 0; t4 < e3.length; t4++) if (e3[t4] === n3) return true;
      return e3.push(n3), false;
    }, function(n3) {
      if (t3) e3.delete(n3);
      else for (let t4 = 0; t4 < e3.length; t4++) if (e3[t4] === n3) {
        e3.splice(t4, 1);
        break;
      }
    }];
  })()) {
    const [u, l] = a2;
    if (null == e2 || ["boolean", "string"].includes(typeof e2) || "number" == typeof e2 && Number.isFinite(e2)) return e2;
    const d = (function(t3, e3) {
      try {
        if ("domain" === t3 && e3 && "object" == typeof e3 && e3._events) return "[Domain]";
        if ("domainEmitter" === t3) return "[DomainEmitter]";
        if ("undefined" != typeof global && e3 === global) return "[Global]";
        if ("undefined" != typeof window && e3 === window) return "[Window]";
        if ("undefined" != typeof document && e3 === document) return "[Document]";
        if ((0, r.L2)(e3)) return "[VueViewModel]";
        if ((0, r.mE)(e3)) return "[SyntheticEvent]";
        if ("number" == typeof e3 && !Number.isFinite(e3)) return `[${e3}]`;
        if ("function" == typeof e3) return `[Function: ${(0, o.qQ)(e3)}]`;
        if ("symbol" == typeof e3) return `[${String(e3)}]`;
        if ("bigint" == typeof e3) return `[BigInt: ${String(e3)}]`;
        const n3 = (function(t4) {
          const e4 = Object.getPrototypeOf(t4);
          return e4 ? e4.constructor.name : "null prototype";
        })(e3);
        return /^HTML(\w*)Element$/.test(n3) ? `[HTMLElement: ${n3}]` : `[object ${n3}]`;
      } catch (t4) {
        return `**non-serializable** (${t4})`;
      }
    })(t2, e2);
    if (!d.startsWith("[object ")) return d;
    if (e2.__sentry_skip_normalization__) return e2;
    const p = "number" == typeof e2.__sentry_override_normalization_depth__ ? e2.__sentry_override_normalization_depth__ : n2;
    if (0 === p) return d.replace("object ", "");
    if (u(e2)) return "[Circular ~]";
    const f = e2;
    if (f && "function" == typeof f.toJSON) try {
      return c("", f.toJSON(), p - 1, i2, a2);
    } catch (t3) {
    }
    const h = Array.isArray(e2) ? [] : {};
    let m = 0;
    const g = (0, s.W4)(e2);
    for (const t3 in g) {
      if (!Object.prototype.hasOwnProperty.call(g, t3)) continue;
      if (m >= i2) {
        h[t3] = "[MaxProperties ~]";
        break;
      }
      const e3 = g[t3];
      h[t3] = c(t3, e3, p - 1, i2, a2), m++;
    }
    return l(e2), h;
  }
}, 69412(t, e, n) {
  n.d(e, { Ce: () => g, GS: () => c, HF: () => m, W4: () => p, my: () => u, pO: () => l, sp: () => d });
  var r = n(26255), s = n(76177), o = n(89391), i = n(3019), a = n(44130);
  function c(t2, e2, n2) {
    if (!(e2 in t2)) return;
    const r2 = t2[e2], o2 = n2(r2);
    "function" == typeof o2 && l(o2, r2);
    try {
      t2[e2] = o2;
    } catch (n3) {
      s.T && i.vF.log(`Failed to replace method "${e2}" in object`, t2);
    }
  }
  function u(t2, e2, n2) {
    try {
      Object.defineProperty(t2, e2, { value: n2, writable: true, configurable: true });
    } catch (n3) {
      s.T && i.vF.log(`Failed to add non-enumerable property "${e2}" to object`, t2);
    }
  }
  function l(t2, e2) {
    try {
      const n2 = e2.prototype || {};
      t2.prototype = e2.prototype = n2, u(t2, "__sentry_original__", e2);
    } catch (t3) {
    }
  }
  function d(t2) {
    return t2.__sentry_original__;
  }
  function p(t2) {
    if ((0, o.bJ)(t2)) return { message: t2.message, name: t2.name, stack: t2.stack, ...h(t2) };
    if ((0, o.xH)(t2)) {
      const e2 = { type: t2.type, target: f(t2.target), currentTarget: f(t2.currentTarget), ...h(t2) };
      return "undefined" != typeof CustomEvent && (0, o.tH)(t2, CustomEvent) && (e2.detail = t2.detail), e2;
    }
    return t2;
  }
  function f(t2) {
    try {
      return (0, o.vq)(t2) ? (0, r.Hd)(t2) : Object.prototype.toString.call(t2);
    } catch (t3) {
      return "<unknown>";
    }
  }
  function h(t2) {
    if ("object" == typeof t2 && null !== t2) {
      const e2 = {};
      for (const n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
      return e2;
    }
    return {};
  }
  function m(t2, e2 = 40) {
    const n2 = Object.keys(p(t2));
    n2.sort();
    const r2 = n2[0];
    if (!r2) return "[object has no keys]";
    if (r2.length >= e2) return (0, a.xv)(r2, e2);
    for (let t3 = n2.length; t3 > 0; t3--) {
      const r3 = n2.slice(0, t3).join(", ");
      if (!(r3.length > e2)) return t3 === n2.length ? r3 : (0, a.xv)(r3, e2);
    }
    return "";
  }
  function g(t2) {
    return _(t2, /* @__PURE__ */ new Map());
  }
  function _(t2, e2) {
    if ((function(t3) {
      if (!(0, o.Qd)(t3)) return false;
      try {
        const e3 = Object.getPrototypeOf(t3).constructor.name;
        return !e3 || "Object" === e3;
      } catch (t4) {
        return true;
      }
    })(t2)) {
      const n2 = e2.get(t2);
      if (void 0 !== n2) return n2;
      const r2 = {};
      e2.set(t2, r2);
      for (const n3 of Object.getOwnPropertyNames(t2)) void 0 !== t2[n3] && (r2[n3] = _(t2[n3], e2));
      return r2;
    }
    if (Array.isArray(t2)) {
      const n2 = e2.get(t2);
      if (void 0 !== n2) return n2;
      const r2 = [];
      return e2.set(t2, r2), t2.forEach(((t3) => {
        r2.push(_(t3, e2));
      })), r2;
    }
    return t2;
  }
}, 42586(t, e, n) {
  n.d(e, { ZF: () => o, el: () => s });
  var r = n(91335);
  function s() {
    return (0, r.eJ)();
  }
  function o() {
    return (0, r.eJ)().substring(16);
  }
}, 96938(t, e, n) {
  n.d(e, { RV: () => p, Vi: () => c, gd: () => i, qQ: () => d, vk: () => a, yF: () => r });
  const r = "?", s = /\(error: (.*)\)/, o = /captureMessage|captureException/;
  function i(...t2) {
    const e2 = t2.sort(((t3, e3) => t3[0] - e3[0])).map(((t3) => t3[1]));
    return (t3, n2 = 0, r2 = 0) => {
      const o2 = [], i2 = t3.split("\n");
      for (let t4 = n2; t4 < i2.length; t4++) {
        const n3 = i2[t4];
        if (n3.length > 1024) continue;
        const a2 = s.test(n3) ? n3.replace(s, "$1") : n3;
        if (!a2.match(/\S*Error: /)) {
          for (const t5 of e2) {
            const e3 = t5(a2);
            if (e3) {
              o2.push(e3);
              break;
            }
          }
          if (o2.length >= 50 + r2) break;
        }
      }
      return c(o2.slice(r2));
    };
  }
  function a(t2) {
    return Array.isArray(t2) ? i(...t2) : t2;
  }
  function c(t2) {
    if (!t2.length) return [];
    const e2 = Array.from(t2);
    return /sentryWrapped/.test(u(e2).function || "") && e2.pop(), e2.reverse(), o.test(u(e2).function || "") && (e2.pop(), o.test(u(e2).function || "") && e2.pop()), e2.slice(0, 50).map(((t3) => ({ ...t3, filename: t3.filename || u(e2).filename, function: t3.function || r })));
  }
  function u(t2) {
    return t2[t2.length - 1] || {};
  }
  const l = "<anonymous>";
  function d(t2) {
    try {
      return t2 && "function" == typeof t2 && t2.name || l;
    } catch (t3) {
      return l;
    }
  }
  function p(t2) {
    const e2 = t2.exception;
    if (e2) {
      const t3 = [];
      try {
        return e2.values.forEach(((e3) => {
          e3.stacktrace.frames && t3.push(...e3.stacktrace.frames);
        })), t3;
      } catch (t4) {
        return;
      }
    }
  }
}, 44130(t, e, n) {
  n.d(e, { Xr: () => i, gt: () => o, xv: () => s });
  var r = n(89391);
  function s(t2, e2 = 0) {
    return "string" != typeof t2 || 0 === e2 || t2.length <= e2 ? t2 : `${t2.slice(0, e2)}...`;
  }
  function o(t2, e2) {
    if (!Array.isArray(t2)) return "";
    const n2 = [];
    for (let e3 = 0; e3 < t2.length; e3++) {
      const s2 = t2[e3];
      try {
        (0, r.L2)(s2) ? n2.push("[VueViewModel]") : n2.push(String(s2));
      } catch (t3) {
        n2.push("[value cannot be serialized]");
      }
    }
    return n2.join(e2);
  }
  function i(t2, e2 = [], n2 = false) {
    return e2.some(((e3) => (function(t3, e4, n3 = false) {
      return !!(0, r.Kg)(t3) && ((0, r.gd)(e4) ? e4.test(t3) : !!(0, r.Kg)(e4) && (n3 ? t3 === e4 : t3.includes(e4)));
    })(t2, e3, n2)));
  }
}, 57447(t, e, n) {
  n.d(e, { T2: () => a, XW: () => o, xg: () => i });
  var r, s = n(89391);
  function o(t2) {
    return new a(((e2) => {
      e2(t2);
    }));
  }
  function i(t2) {
    return new a(((e2, n2) => {
      n2(t2);
    }));
  }
  !(function(t2) {
    t2[t2.PENDING = 0] = "PENDING", t2[t2.RESOLVED = 1] = "RESOLVED", t2[t2.REJECTED = 2] = "REJECTED";
  })(r || (r = {}));
  class a {
    constructor(t2) {
      a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), this._state = r.PENDING, this._handlers = [];
      try {
        t2(this._resolve, this._reject);
      } catch (t3) {
        this._reject(t3);
      }
    }
    then(t2, e2) {
      return new a(((n2, r2) => {
        this._handlers.push([false, (e3) => {
          if (t2) try {
            n2(t2(e3));
          } catch (t3) {
            r2(t3);
          }
          else n2(e3);
        }, (t3) => {
          if (e2) try {
            n2(e2(t3));
          } catch (t4) {
            r2(t4);
          }
          else r2(t3);
        }]), this._executeHandlers();
      }));
    }
    catch(t2) {
      return this.then(((t3) => t3), t2);
    }
    finally(t2) {
      return new a(((e2, n2) => {
        let r2, s2;
        return this.then(((e3) => {
          s2 = false, r2 = e3, t2 && t2();
        }), ((e3) => {
          s2 = true, r2 = e3, t2 && t2();
        })).then((() => {
          s2 ? n2(r2) : e2(r2);
        }));
      }));
    }
    __init() {
      this._resolve = (t2) => {
        this._setResult(r.RESOLVED, t2);
      };
    }
    __init2() {
      this._reject = (t2) => {
        this._setResult(r.REJECTED, t2);
      };
    }
    __init3() {
      this._setResult = (t2, e2) => {
        this._state === r.PENDING && ((0, s.Qg)(e2) ? e2.then(this._resolve, this._reject) : (this._state = t2, this._value = e2, this._executeHandlers()));
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === r.PENDING) return;
        const t2 = this._handlers.slice();
        this._handlers = [], t2.forEach(((t3) => {
          t3[0] || (this._state === r.RESOLVED && t3[1](this._value), this._state === r.REJECTED && t3[2](this._value), t3[0] = true);
        }));
      };
    }
  }
}, 82434(t, e, n) {
  n.d(e, { lu: () => s, zf: () => o });
  var r = n(31784);
  function s() {
    return Date.now() / 1e3;
  }
  const o = (function() {
    const { performance: t2 } = r.O;
    if (!t2 || !t2.now) return s;
    const e2 = Date.now() - t2.now(), n2 = null == t2.timeOrigin ? e2 : t2.timeOrigin;
    return () => (n2 + t2.now()) / 1e3;
  })();
  let i;
  (() => {
    const { performance: t2 } = r.O;
    if (!t2 || !t2.now) return void (i = "none");
    const e2 = 36e5, n2 = t2.now(), s2 = Date.now(), o2 = t2.timeOrigin ? Math.abs(t2.timeOrigin + n2 - s2) : e2, a = o2 < e2, c = t2.timing && t2.timing.navigationStart, u = "number" == typeof c ? Math.abs(c + n2 - s2) : e2;
    a || u < e2 ? o2 <= u ? (i = "timeOrigin", t2.timeOrigin) : i = "navigationStart" : i = "dateNow";
  })();
}, 19651(t, e, n) {
  n.d(e, { M: () => r });
  const r = "8.51.0";
}, 31784(t, e, n) {
  n.d(e, { B: () => o, O: () => s });
  var r = n(19651);
  const s = globalThis;
  function o(t2, e2, n2) {
    const o2 = n2 || s, i = o2.__SENTRY__ = o2.__SENTRY__ || {}, a = i[r.M] = i[r.M] || {};
    return a[t2] || (a[t2] = e2());
  }
}, 32298(t, e, n) {
  n.d(e, { Rg: () => c, e2: () => a });
  var r = n(39180), s = n(69412), o = n(91421), i = n(9164);
  function a(t2, e2) {
    const { fingerprint: n2, span: o2, breadcrumbs: a2, sdkProcessingMetadata: c2 } = e2;
    !(function(t3, e3) {
      const { extra: n3, tags: r2, user: o3, contexts: i2, level: a3, transactionName: c3 } = e3, u2 = (0, s.Ce)(n3);
      u2 && Object.keys(u2).length && (t3.extra = { ...u2, ...t3.extra });
      const l = (0, s.Ce)(r2);
      l && Object.keys(l).length && (t3.tags = { ...l, ...t3.tags });
      const d = (0, s.Ce)(o3);
      d && Object.keys(d).length && (t3.user = { ...d, ...t3.user });
      const p = (0, s.Ce)(i2);
      p && Object.keys(p).length && (t3.contexts = { ...p, ...t3.contexts }), a3 && (t3.level = a3), c3 && "transaction" !== t3.type && (t3.transaction = c3);
    })(t2, e2), o2 && (function(t3, e3) {
      t3.contexts = { trace: (0, i.kX)(e3), ...t3.contexts }, t3.sdkProcessingMetadata = { dynamicSamplingContext: (0, r.k1)(e3), ...t3.sdkProcessingMetadata };
      const n3 = (0, i.zU)(e3), s2 = (0, i.et)(n3).description;
      s2 && !t3.transaction && "transaction" === t3.type && (t3.transaction = s2);
    })(t2, o2), (function(t3, e3) {
      t3.fingerprint = t3.fingerprint ? Array.isArray(t3.fingerprint) ? t3.fingerprint : [t3.fingerprint] : [], e3 && (t3.fingerprint = t3.fingerprint.concat(e3)), t3.fingerprint && !t3.fingerprint.length && delete t3.fingerprint;
    })(t2, n2), (function(t3, e3) {
      const n3 = [...t3.breadcrumbs || [], ...e3];
      t3.breadcrumbs = n3.length ? n3 : void 0;
    })(t2, a2), (function(t3, e3) {
      t3.sdkProcessingMetadata = { ...t3.sdkProcessingMetadata, ...e3 };
    })(t2, c2);
  }
  function c(t2, e2) {
    const { extra: n2, tags: r2, user: s2, contexts: i2, level: a2, sdkProcessingMetadata: c2, breadcrumbs: l, fingerprint: d, eventProcessors: p, attachments: f, propagationContext: h, transactionName: m, span: g } = e2;
    u(t2, "extra", n2), u(t2, "tags", r2), u(t2, "user", s2), u(t2, "contexts", i2), t2.sdkProcessingMetadata = (0, o.h)(t2.sdkProcessingMetadata, c2, 2), a2 && (t2.level = a2), m && (t2.transactionName = m), g && (t2.span = g), l.length && (t2.breadcrumbs = [...t2.breadcrumbs, ...l]), d.length && (t2.fingerprint = [...t2.fingerprint, ...d]), p.length && (t2.eventProcessors = [...t2.eventProcessors, ...p]), f.length && (t2.attachments = [...t2.attachments, ...f]), t2.propagationContext = { ...t2.propagationContext, ...h };
  }
  function u(t2, e2, n2) {
    t2[e2] = (0, o.h)(t2[e2], n2, 1);
  }
}, 51914(t, e, n) {
  n.d(e, { w: () => s });
  var r = n(11555);
  function s(t2) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
    const e2 = (0, r.KU)(), n2 = t2 || e2 && e2.getOptions();
    return !!n2 && (n2.enableTracing || "tracesSampleRate" in n2 || "tracesSampler" in n2);
  }
}, 91421(t, e, n) {
  function r(t2, e2, n2 = 2) {
    if (!e2 || "object" != typeof e2 || n2 <= 0) return e2;
    if (t2 && e2 && 0 === Object.keys(e2).length) return t2;
    const s = { ...t2 };
    for (const t3 in e2) Object.prototype.hasOwnProperty.call(e2, t3) && (s[t3] = r(s[t3], e2[t3], n2 - 1));
    return s;
  }
  n.d(e, { h: () => r });
}, 50878(t, e, n) {
  n.d(e, { i: () => o });
  var r = n(96093), s = n(3019);
  function o(t2) {
    if ("boolean" == typeof t2) return Number(t2);
    const e2 = "string" == typeof t2 ? parseFloat(t2) : t2;
    if (!("number" != typeof e2 || isNaN(e2) || e2 < 0 || e2 > 1)) return e2;
    r.T && s.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t2)} of type ${JSON.stringify(typeof t2)}.`);
  }
}, 68752(t, e, n) {
  n.d(e, { li: () => b, mG: () => E });
  var r = n(90066), s = n(11555), o = n(96093), i = n(89391), a = n(3019), c = n(57447);
  function u(t2, e2, n2, r2 = 0) {
    return new c.T2(((s2, c2) => {
      const l2 = t2[r2];
      if (null === e2 || "function" != typeof l2) s2(e2);
      else {
        const d2 = l2({ ...e2 }, n2);
        o.T && l2.id && null === d2 && a.vF.log(`Event processor "${l2.id}" dropped event`), (0, i.Qg)(d2) ? d2.then(((e3) => u(t2, e3, n2, r2 + 1).then(s2))).then(null, c2) : u(t2, d2, n2, r2 + 1).then(s2).then(null, c2);
      }
    }));
  }
  var l = n(49111), d = n(31784);
  let p, f, h;
  var m = n(91335), g = n(63522), _ = n(44130), v = n(82434), y = n(32298);
  function E(t2, e2, n2, o2, i2, a2) {
    const { normalizeDepth: c2 = 3, normalizeMaxBreadth: E2 = 1e3 } = t2, b2 = { ...e2, event_id: e2.event_id || n2.event_id || (0, m.eJ)(), timestamp: e2.timestamp || (0, v.lu)() }, S2 = n2.integrations || t2.integrations.map(((t3) => t3.name));
    !(function(t3, e3) {
      const { environment: n3, release: s2, dist: o3, maxValueLength: i3 = 250 } = e3;
      t3.environment = t3.environment || n3 || r.U, !t3.release && s2 && (t3.release = s2), !t3.dist && o3 && (t3.dist = o3), t3.message && (t3.message = (0, _.xv)(t3.message, i3));
      const a3 = t3.exception && t3.exception.values && t3.exception.values[0];
      a3 && a3.value && (a3.value = (0, _.xv)(a3.value, i3));
      const c3 = t3.request;
      c3 && c3.url && (c3.url = (0, _.xv)(c3.url, i3));
    })(b2, t2), (function(t3, e3) {
      e3.length > 0 && (t3.sdk = t3.sdk || {}, t3.sdk.integrations = [...t3.sdk.integrations || [], ...e3]);
    })(b2, S2), i2 && i2.emit("applyFrameMetadata", e2), void 0 === e2.type && (function(t3, e3) {
      const n3 = (function(t4) {
        const e4 = d.O._sentryDebugIds;
        if (!e4) return {};
        const n4 = Object.keys(e4);
        return h && n4.length === f || (f = n4.length, h = n4.reduce(((n5, r2) => {
          p || (p = {});
          const s2 = p[r2];
          if (s2) n5[s2[0]] = s2[1];
          else {
            const s3 = t4(r2);
            for (let t5 = s3.length - 1; t5 >= 0; t5--) {
              const o3 = s3[t5], i3 = o3 && o3.filename, a3 = e4[r2];
              if (i3 && a3) {
                n5[i3] = a3, p[r2] = [i3, a3];
                break;
              }
            }
          }
          return n5;
        }), {})), h;
      })(e3);
      try {
        t3.exception.values.forEach(((t4) => {
          t4.stacktrace.frames.forEach(((t5) => {
            n3 && t5.filename && (t5.debug_id = n3[t5.filename]);
          }));
        }));
      } catch (t4) {
      }
    })(b2, t2.stackParser);
    const x = (function(t3, e3) {
      if (!e3) return t3;
      const n3 = t3 ? t3.clone() : new l.H();
      return n3.update(e3), n3;
    })(o2, n2.captureContext);
    n2.mechanism && (0, m.M6)(b2, n2.mechanism);
    const w = i2 ? i2.getEventProcessors() : [], k = (0, s.m6)().getScopeData();
    if (a2) {
      const t3 = a2.getScopeData();
      (0, y.Rg)(k, t3);
    }
    if (x) {
      const t3 = x.getScopeData();
      (0, y.Rg)(k, t3);
    }
    const T = [...n2.attachments || [], ...k.attachments];
    return T.length && (n2.attachments = T), (0, y.e2)(b2, k), u([...w, ...k.eventProcessors], b2, n2).then(((t3) => (t3 && (function(t4) {
      const e3 = {};
      try {
        t4.exception.values.forEach(((t5) => {
          t5.stacktrace.frames.forEach(((t6) => {
            t6.debug_id && (t6.abs_path ? e3[t6.abs_path] = t6.debug_id : t6.filename && (e3[t6.filename] = t6.debug_id), delete t6.debug_id);
          }));
        }));
      } catch (t5) {
      }
      if (0 === Object.keys(e3).length) return;
      t4.debug_meta = t4.debug_meta || {}, t4.debug_meta.images = t4.debug_meta.images || [];
      const n3 = t4.debug_meta.images;
      Object.entries(e3).forEach((([t5, e4]) => {
        n3.push({ type: "sourcemap", code_file: t5, debug_id: e4 });
      }));
    })(t3), "number" == typeof c2 && c2 > 0 ? (function(t4, e3, n3) {
      if (!t4) return null;
      const r2 = { ...t4, ...t4.breadcrumbs && { breadcrumbs: t4.breadcrumbs.map(((t5) => ({ ...t5, ...t5.data && { data: (0, g.S8)(t5.data, e3, n3) } }))) }, ...t4.user && { user: (0, g.S8)(t4.user, e3, n3) }, ...t4.contexts && { contexts: (0, g.S8)(t4.contexts, e3, n3) }, ...t4.extra && { extra: (0, g.S8)(t4.extra, e3, n3) } };
      return t4.contexts && t4.contexts.trace && r2.contexts && (r2.contexts.trace = t4.contexts.trace, t4.contexts.trace.data && (r2.contexts.trace.data = (0, g.S8)(t4.contexts.trace.data, e3, n3))), t4.spans && (r2.spans = t4.spans.map(((t5) => ({ ...t5, ...t5.data && { data: (0, g.S8)(t5.data, e3, n3) } })))), t4.contexts && t4.contexts.flags && r2.contexts && (r2.contexts.flags = (0, g.S8)(t4.contexts.flags, 3, n3)), r2;
    })(t3, c2, E2) : t3)));
  }
  function b(t2) {
    if (t2) return (function(t3) {
      return t3 instanceof l.H || "function" == typeof t3;
    })(t2) || (function(t3) {
      return Object.keys(t3).some(((t4) => S.includes(t4)));
    })(t2) ? { captureContext: t2 } : t2;
  }
  const S = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
}, 13266(t, e, n) {
  n.d(e, { f: () => i, r: () => o });
  var r = n(69412);
  const s = "_sentrySpan";
  function o(t2, e2) {
    e2 ? (0, r.my)(t2, s, e2) : delete t2[s];
  }
  function i(t2) {
    return t2[s];
  }
}, 9164(t, e, n) {
  n.d(e, { Bk: () => $, CC: () => h, Ck: () => _, Hu: () => T, aO: () => m, cI: () => y, et: () => b, kX: () => v, pK: () => S, xO: () => O, xl: () => D, yW: () => x, zU: () => C });
  var r = n(15547), s = n(19151), o = n(11555), i = n(66772), a = n(47410), c = n(15770), u = n(3019), l = n(69412), d = n(42586), p = n(82434), f = n(13266);
  const h = 0, m = 1;
  let g = false;
  function _(t2) {
    const { spanId: e2, traceId: n2 } = t2.spanContext(), { data: r2, op: s2, parent_span_id: o2, status: i2, origin: a2 } = b(t2);
    return (0, l.Ce)({ parent_span_id: o2, span_id: e2, trace_id: n2, data: r2, op: s2, status: i2, origin: a2 });
  }
  function v(t2) {
    const { spanId: e2, traceId: n2, isRemote: r2 } = t2.spanContext(), s2 = r2 ? e2 : b(t2).parent_span_id, o2 = r2 ? (0, d.ZF)() : e2;
    return (0, l.Ce)({ parent_span_id: s2, span_id: o2, trace_id: n2 });
  }
  function y(t2) {
    return "number" == typeof t2 ? E(t2) : Array.isArray(t2) ? t2[0] + t2[1] / 1e9 : t2 instanceof Date ? E(t2.getTime()) : (0, p.zf)();
  }
  function E(t2) {
    return t2 > 9999999999 ? t2 / 1e3 : t2;
  }
  function b(t2) {
    if ((function(t3) {
      return "function" == typeof t3.getSpanJSON;
    })(t2)) return t2.getSpanJSON();
    try {
      const { spanId: e2, traceId: n2 } = t2.spanContext();
      if ((function(t3) {
        const e3 = t3;
        return !!(e3.attributes && e3.startTime && e3.name && e3.endTime && e3.status);
      })(t2)) {
        const { attributes: r2, startTime: s2, name: o2, endTime: c2, parentSpanId: u2, status: d2 } = t2;
        return (0, l.Ce)({ span_id: e2, trace_id: n2, data: r2, description: o2, parent_span_id: u2, start_timestamp: y(s2), timestamp: y(c2) || void 0, status: x(d2), op: r2[a.uT], origin: r2[a.JD], _metrics_summary: (0, i.g)(t2) });
      }
      return { span_id: e2, trace_id: n2 };
    } catch (t3) {
      return {};
    }
  }
  function S(t2) {
    const { traceFlags: e2 } = t2.spanContext();
    return e2 === m;
  }
  function x(t2) {
    if (t2 && t2.code !== c.a3) return t2.code === c.F3 ? "ok" : t2.message || "unknown_error";
  }
  const w = "_sentryChildSpans", k = "_sentryRootSpan";
  function T(t2, e2) {
    const n2 = t2[k] || t2;
    (0, l.my)(e2, k, n2), t2[w] ? t2[w].add(e2) : (0, l.my)(t2, w, /* @__PURE__ */ new Set([e2]));
  }
  function O(t2) {
    const e2 = /* @__PURE__ */ new Set();
    return (function t3(n2) {
      if (!e2.has(n2) && S(n2)) {
        e2.add(n2);
        const r2 = n2[w] ? Array.from(n2[w]) : [];
        for (const e3 of r2) t3(e3);
      }
    })(t2), Array.from(e2);
  }
  function C(t2) {
    return t2[k] || t2;
  }
  function $() {
    const t2 = (0, s.E)(), e2 = (0, r.h)(t2);
    return e2.getActiveSpan ? e2.getActiveSpan() : (0, f.f)((0, o.o5)());
  }
  function D() {
    g || ((0, u.pq)((() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    })), g = true);
  }
}, 11314(t, e, n) {
  n.d(e, { Z: () => u });
  var r = n(87489), s = n(63522), o = n(11555), i = n(32298);
  function a() {
    const t2 = (0, o.m6)().getScopeData(), e2 = (0, o.rm)().getScopeData(), n2 = (0, o.o5)().getScopeData();
    return (0, i.Rg)(t2, e2), (0, i.Rg)(t2, n2), t2.eventProcessors = [], t2;
  }
  var c = n(42252);
  const u = (0, r._C)((() => ({ name: "ScopeToMain", setup() {
    const t2 = (0, c.X)();
    var e2;
    e2 = (e3, n2) => {
      t2.sendScope(JSON.stringify((0, s.S8)(e3, 20, 2e3))), n2.clearBreadcrumbs(), n2.clearAttachments();
    }, (0, o.rm)().addScopeListener(((t3) => {
      const n2 = a();
      e2(n2, t3);
    })), (0, o.o5)().addScopeListener(((t3) => {
      const n2 = a();
      e2(n2, t3);
    })), (0, o.m6)().addScopeListener(((t3) => {
      const n2 = a();
      e2(n2, t3);
    }));
  } })));
}, 42252(t, e, n) {
  n.d(e, { X: () => l });
  var r, s, o = n(3019), i = n(91335);
  !(function(t2) {
    t2[t2.Classic = 1] = "Classic", t2[t2.Protocol = 2] = "Protocol", t2[t2.Both = 3] = "Both";
  })(r || (r = {})), (function(t2) {
    t2.RENDERER_START = "sentry-electron.renderer-start", t2.EVENT = "sentry-electron.event", t2.SCOPE = "sentry-electron.scope", t2.ENVELOPE = "sentry-electron.envelope", t2.STATUS = "sentry-electron.status", t2.ADD_METRIC = "sentry-electron.add-metric";
  })(s || (s = {}));
  const a = "sentry-electron-renderer-id";
  function c(t2) {
    return `sentry-ipc://${t2}/sentry_key`;
  }
  let u;
  function l() {
    return u || (u = (function() {
      if (window.__SENTRY_IPC__) return window.__SENTRY_IPC__;
      {
        o.vF.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
        const t2 = window.__SENTRY_RENDERER_ID__ = (0, i.eJ)(), e2 = { [a]: t2 };
        return { sendRendererStart: () => {
          fetch(c(s.RENDERER_START), { method: "POST", body: "", headers: e2 }).catch((() => {
            console.error("Sentry SDK failed to establish connection with the Electron main process.\n  - Ensure you have initialized the SDK in the main process\n  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options\n  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script");
          }));
        }, sendScope: (t3) => {
          fetch(c(s.SCOPE), { method: "POST", body: t3, headers: e2 }).catch((() => {
          }));
        }, sendEvent: (t3) => {
          fetch(c(s.EVENT), { method: "POST", body: t3, headers: e2 }).catch((() => {
          }));
        }, sendEnvelope: (t3) => {
          fetch(c(s.ENVELOPE), { method: "POST", body: t3, headers: e2 }).catch((() => {
          }));
        }, sendStatus: (t3) => {
          fetch(c(s.STATUS), { method: "POST", body: JSON.stringify({ status: t3 }), headers: e2 }).catch((() => {
          }));
        }, sendAddMetric: (t3) => {
          fetch(c(s.ADD_METRIC), { method: "POST", body: JSON.stringify(t3), headers: e2 }).catch((() => {
          }));
        } };
      }
    })(), u.sendRendererStart()), u;
  }
}, 86049(t, e, n) {
  n(11555), n(96093), n(31784), n(3019), n(82434), n(9164), n(19151), n(15547), n(47410), n(89391), n(51914), n(13266), n(39180), n(50878), n(42586), n(77487), n(66772), n(69412), n(15770), n(42252);
}, 23100(t, e, n) {
  n.d(e, { T: () => le });
  var r = n(96093), s = n(87489), o = n(3019), i = n(91335), a = n(44130);
  const c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/], u = (0, s._C)(((t2 = {}) => ({ name: "InboundFilters", processEvent(e2, n2, s2) {
    const u2 = s2.getOptions(), d2 = (function(t3 = {}, e3 = {}) {
      return { allowUrls: [...t3.allowUrls || [], ...e3.allowUrls || []], denyUrls: [...t3.denyUrls || [], ...e3.denyUrls || []], ignoreErrors: [...t3.ignoreErrors || [], ...e3.ignoreErrors || [], ...t3.disableErrorDefaults ? [] : c], ignoreTransactions: [...t3.ignoreTransactions || [], ...e3.ignoreTransactions || []], ignoreInternal: void 0 === t3.ignoreInternal || t3.ignoreInternal };
    })(t2, u2);
    return (function(t3, e3) {
      return e3.ignoreInternal && (function(t4) {
        try {
          return "SentryError" === t4.exception.values[0].type;
        } catch (t5) {
        }
        return false;
      })(t3) ? (r.T && o.vF.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, i.$X)(t3)}`), true) : (function(t4, e4) {
        return !(t4.type || !e4 || !e4.length) && (function(t5) {
          const e5 = [];
          let n3;
          t5.message && e5.push(t5.message);
          try {
            n3 = t5.exception.values[t5.exception.values.length - 1];
          } catch (t6) {
          }
          return n3 && n3.value && (e5.push(n3.value), n3.type && e5.push(`${n3.type}: ${n3.value}`)), e5;
        })(t4).some(((t5) => (0, a.Xr)(t5, e4)));
      })(t3, e3.ignoreErrors) ? (r.T && o.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, i.$X)(t3)}`), true) : (function(t4) {
        return !t4.type && (!(!t4.exception || !t4.exception.values || 0 === t4.exception.values.length) && (!t4.message && !t4.exception.values.some(((t5) => t5.stacktrace || t5.type && "Error" !== t5.type || t5.value))));
      })(t3) ? (r.T && o.vF.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, i.$X)(t3)}`), true) : (function(t4, e4) {
        if ("transaction" !== t4.type || !e4 || !e4.length) return false;
        const n3 = t4.transaction;
        return !!n3 && (0, a.Xr)(n3, e4);
      })(t3, e3.ignoreTransactions) ? (r.T && o.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, i.$X)(t3)}`), true) : (function(t4, e4) {
        if (!e4 || !e4.length) return false;
        const n3 = l(t4);
        return !!n3 && (0, a.Xr)(n3, e4);
      })(t3, e3.denyUrls) ? (r.T && o.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, i.$X)(t3)}.
Url: ${l(t3)}`), true) : !(function(t4, e4) {
        if (!e4 || !e4.length) return true;
        const n3 = l(t4);
        return !n3 || (0, a.Xr)(n3, e4);
      })(t3, e3.allowUrls) && (r.T && o.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, i.$X)(t3)}.
Url: ${l(t3)}`), true);
    })(e2, d2) ? null : e2;
  } })));
  function l(t2) {
    try {
      let e2;
      try {
        e2 = t2.exception.values[0].stacktrace.frames;
      } catch (t3) {
      }
      return e2 ? (function(t3 = []) {
        for (let e3 = t3.length - 1; e3 >= 0; e3--) {
          const n2 = t3[e3];
          if (n2 && "<anonymous>" !== n2.filename && "[native code]" !== n2.filename) return n2.filename || null;
        }
        return null;
      })(e2) : null;
    } catch (e2) {
      return r.T && o.vF.error(`Cannot extract url for event ${(0, i.$X)(t2)}`), null;
    }
  }
  var d = n(11555), p = n(69412);
  let f;
  const h = /* @__PURE__ */ new WeakMap(), m = (0, s._C)((() => ({ name: "FunctionToString", setupOnce() {
    f = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...t2) {
        const e2 = (0, p.sp)(this), n2 = h.has((0, d.KU)()) && void 0 !== e2 ? e2 : this;
        return f.apply(n2, t2);
      };
    } catch (t2) {
    }
  }, setup(t2) {
    h.set(t2, true);
  } })));
  var g = n(96938);
  const _ = (0, s._C)((() => {
    let t2;
    return { name: "Dedupe", processEvent(e2) {
      if (e2.type) return e2;
      try {
        if ((function(t3, e3) {
          return !!e3 && (!!(function(t4, e4) {
            const n2 = t4.message, r2 = e4.message;
            return !(!n2 && !r2) && (!(n2 && !r2 || !n2 && r2) && (n2 === r2 && (!!y(t4, e4) && !!v(t4, e4))));
          })(t3, e3) || !!(function(t4, e4) {
            const n2 = E(e4), r2 = E(t4);
            return !(!n2 || !r2) && (n2.type === r2.type && n2.value === r2.value && (!!y(t4, e4) && !!v(t4, e4)));
          })(t3, e3));
        })(e2, t2)) return r.T && o.vF.warn("Event dropped due to being a duplicate of previously captured event."), null;
      } catch (t3) {
      }
      return t2 = e2;
    } };
  }));
  function v(t2, e2) {
    let n2 = (0, g.RV)(t2), r2 = (0, g.RV)(e2);
    if (!n2 && !r2) return true;
    if (n2 && !r2 || !n2 && r2) return false;
    if (r2.length !== n2.length) return false;
    for (let t3 = 0; t3 < r2.length; t3++) {
      const e3 = r2[t3], s2 = n2[t3];
      if (e3.filename !== s2.filename || e3.lineno !== s2.lineno || e3.colno !== s2.colno || e3.function !== s2.function) return false;
    }
    return true;
  }
  function y(t2, e2) {
    let n2 = t2.fingerprint, r2 = e2.fingerprint;
    if (!n2 && !r2) return true;
    if (n2 && !r2 || !n2 && r2) return false;
    try {
      return !(n2.join("") !== r2.join(""));
    } catch (t3) {
      return false;
    }
  }
  function E(t2) {
    return t2.exception && t2.exception.values && t2.exception.values[0];
  }
  var b = n(76177), S = n(31784);
  const x = S.O;
  function w() {
    if (!("fetch" in x)) return false;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), true;
    } catch (t2) {
      return false;
    }
  }
  function k(t2) {
    return t2 && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t2.toString());
  }
  var T = n(77487), O = n(3103), C = n(39180), $ = n(95491), D = n(82434), R = n(47586), I = n(38705), N = n(89391), P = n(57447), A = n(50878), j = n(68752), F = n(9164);
  const M = "Not capturing exception because it's already been captured.";
  class L {
    constructor(t2) {
      if (this._options = t2, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t2.dsn ? this._dsn = (0, R.AD)(t2.dsn) : r.T && o.vF.warn("No DSN provided, client will not send events."), this._dsn) {
        const r2 = (e2 = this._dsn, n2 = t2.tunnel, s2 = t2._metadata ? t2._metadata.sdk : void 0, n2 || `${(function(t3) {
          return `${(function(t4) {
            const e3 = t4.protocol ? `${t4.protocol}:` : "", n3 = t4.port ? `:${t4.port}` : "";
            return `${e3}//${t4.host}${n3}${t4.path ? `/${t4.path}` : ""}/api/`;
          })(t3)}${t3.projectId}/envelope/`;
        })(e2)}?${(function(t3, e3) {
          const n3 = { sentry_version: "7" };
          return t3.publicKey && (n3.sentry_key = t3.publicKey), e3 && (n3.sentry_client = `${e3.name}/${e3.version}`), new URLSearchParams(n3).toString();
        })(e2, s2)}`);
        this._transport = t2.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...t2.transportOptions, url: r2 });
      }
      var e2, n2, s2;
      const i2 = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(((e3) => e3 in t2 && null == t2[e3]));
      i2 && (0, o.pq)((() => {
        console.warn(`[Sentry] Deprecation warning: \`${i2}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
      }));
    }
    captureException(t2, e2, n2) {
      const s2 = (0, i.eJ)();
      if ((0, i.GR)(t2)) return r.T && o.vF.log(M), s2;
      const a2 = { event_id: s2, ...e2 };
      return this._process(this.eventFromException(t2, a2).then(((t3) => this._captureEvent(t3, a2, n2)))), a2.event_id;
    }
    captureMessage(t2, e2, n2, r2) {
      const s2 = { event_id: (0, i.eJ)(), ...n2 }, o2 = (0, N.NF)(t2) ? t2 : String(t2), a2 = (0, N.sO)(t2) ? this.eventFromMessage(o2, e2, s2) : this.eventFromException(t2, s2);
      return this._process(a2.then(((t3) => this._captureEvent(t3, s2, r2)))), s2.event_id;
    }
    captureEvent(t2, e2, n2) {
      const s2 = (0, i.eJ)();
      if (e2 && e2.originalException && (0, i.GR)(e2.originalException)) return r.T && o.vF.log(M), s2;
      const a2 = { event_id: s2, ...e2 }, c2 = (t2.sdkProcessingMetadata || {}).capturedSpanScope;
      return this._process(this._captureEvent(t2, a2, c2 || n2)), a2.event_id;
    }
    captureSession(t2) {
      "string" != typeof t2.release ? r.T && o.vF.warn("Discarded session because of missing or non-string release") : (this.sendSession(t2), (0, O.qO)(t2, { init: false }));
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(t2) {
      const e2 = this._transport;
      return e2 ? (this.emit("flush"), this._isClientDoneProcessing(t2).then(((n2) => e2.flush(t2).then(((t3) => n2 && t3))))) : (0, P.XW)(true);
    }
    close(t2) {
      return this.flush(t2).then(((t3) => (this.getOptions().enabled = false, this.emit("close"), t3)));
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(t2) {
      this._eventProcessors.push(t2);
    }
    init() {
      (this._isEnabled() || this._options.integrations.some((({ name: t2 }) => t2.startsWith("Spotlight")))) && this._setupIntegrations();
    }
    getIntegrationByName(t2) {
      return this._integrations[t2];
    }
    addIntegration(t2) {
      const e2 = this._integrations[t2.name];
      (0, s.qm)(this, t2, this._integrations), e2 || (0, s.lc)(this, [t2]);
    }
    sendEvent(t2, e2 = {}) {
      this.emit("beforeSendEvent", t2, e2);
      let n2 = (0, T.V7)(t2, this._dsn, this._options._metadata, this._options.tunnel);
      for (const t3 of e2.attachments || []) n2 = (0, $.W3)(n2, (0, $.bm)(t3));
      const r2 = this.sendEnvelope(n2);
      r2 && r2.then(((e3) => this.emit("afterSendEvent", t2, e3)), null);
    }
    sendSession(t2) {
      const e2 = (0, T.LE)(t2, this._dsn, this._options._metadata, this._options.tunnel);
      this.sendEnvelope(e2);
    }
    recordDroppedEvent(t2, e2, n2) {
      if (this._options.sendClientReports) {
        const s2 = "number" == typeof n2 ? n2 : 1, i2 = `${t2}:${e2}`;
        r.T && o.vF.log(`Recording outcome: "${i2}"${s2 > 1 ? ` (${s2} times)` : ""}`), this._outcomes[i2] = (this._outcomes[i2] || 0) + s2;
      }
    }
    on(t2, e2) {
      const n2 = this._hooks[t2] = this._hooks[t2] || [];
      return n2.push(e2), () => {
        const t3 = n2.indexOf(e2);
        t3 > -1 && n2.splice(t3, 1);
      };
    }
    emit(t2, ...e2) {
      const n2 = this._hooks[t2];
      n2 && n2.forEach(((t3) => t3(...e2)));
    }
    sendEnvelope(t2) {
      return this.emit("beforeEnvelope", t2), this._isEnabled() && this._transport ? this._transport.send(t2).then(null, ((t3) => (r.T && o.vF.error("Error while sending envelope:", t3), t3))) : (r.T && o.vF.error("Transport disabled"), (0, P.XW)({}));
    }
    _setupIntegrations() {
      const { integrations: t2 } = this._options;
      this._integrations = (0, s.P$)(this, t2), (0, s.lc)(this, t2);
    }
    _updateSessionFromEvent(t2, e2) {
      let n2 = "fatal" === e2.level, r2 = false;
      const s2 = e2.exception && e2.exception.values;
      if (s2) {
        r2 = true;
        for (const t3 of s2) {
          const e3 = t3.mechanism;
          if (e3 && false === e3.handled) {
            n2 = true;
            break;
          }
        }
      }
      const o2 = "ok" === t2.status;
      (o2 && 0 === t2.errors || o2 && n2) && ((0, O.qO)(t2, { ...n2 && { status: "crashed" }, errors: t2.errors || Number(r2 || n2) }), this.captureSession(t2));
    }
    _isClientDoneProcessing(t2) {
      return new P.T2(((e2) => {
        let n2 = 0;
        const r2 = setInterval((() => {
          0 == this._numProcessing ? (clearInterval(r2), e2(true)) : (n2 += 1, t2 && n2 >= t2 && (clearInterval(r2), e2(false)));
        }), 1);
      }));
    }
    _isEnabled() {
      return false !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(t2, e2, n2 = (0, d.o5)(), r2 = (0, d.rm)()) {
      const s2 = this.getOptions(), o2 = Object.keys(this._integrations);
      return !e2.integrations && o2.length > 0 && (e2.integrations = o2), this.emit("preprocessEvent", t2, e2), t2.type || r2.setLastEventId(t2.event_id || e2.event_id), (0, j.mG)(s2, t2, e2, n2, this, r2).then(((t3) => {
        if (null === t3) return t3;
        t3.contexts = { trace: (0, d.vn)(n2), ...t3.contexts };
        const e3 = (0, C.ao)(this, n2);
        return t3.sdkProcessingMetadata = { dynamicSamplingContext: e3, ...t3.sdkProcessingMetadata }, t3;
      }));
    }
    _captureEvent(t2, e2 = {}, n2) {
      return this._processEvent(t2, e2, n2).then(((t3) => t3.event_id), ((t3) => {
        if (r.T) {
          const e3 = t3;
          "log" === e3.logLevel ? o.vF.log(e3.message) : o.vF.warn(e3);
        }
      }));
    }
    _processEvent(t2, e2, n2) {
      const r2 = this.getOptions(), { sampleRate: s2 } = r2, o2 = q(t2), i2 = U(t2), a2 = t2.type || "error", c2 = `before send for type \`${a2}\``, u2 = void 0 === s2 ? void 0 : (0, A.i)(s2);
      if (i2 && "number" == typeof u2 && Math.random() > u2) return this.recordDroppedEvent("sample_rate", "error", t2), (0, P.xg)(new I.U(`Discarding event because it's not included in the random sample (sampling rate = ${s2})`, "log"));
      const l2 = "replay_event" === a2 ? "replay" : a2, d2 = (t2.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
      return this._prepareEvent(t2, e2, n2, d2).then(((n3) => {
        if (null === n3) throw this.recordDroppedEvent("event_processor", l2, t2), new I.U("An event processor returned `null`, will not send event.", "log");
        if (e2.data && true === e2.data.__sentry__) return n3;
        const s3 = (function(t3, e3, n4, r3) {
          const { beforeSend: s4, beforeSendTransaction: o3, beforeSendSpan: i3 } = e3;
          if (U(n4) && s4) return s4(n4, r3);
          if (q(n4)) {
            if (n4.spans && i3) {
              const e4 = [];
              for (const r4 of n4.spans) {
                const n5 = i3(r4);
                n5 ? e4.push(n5) : ((0, F.xl)(), t3.recordDroppedEvent("before_send", "span"));
              }
              n4.spans = e4;
            }
            if (o3) {
              if (n4.spans) {
                const t4 = n4.spans.length;
                n4.sdkProcessingMetadata = { ...n4.sdkProcessingMetadata, spanCountBeforeProcessing: t4 };
              }
              return o3(n4, r3);
            }
          }
          return n4;
        })(this, r2, n3, e2);
        return (function(t3, e3) {
          const n4 = `${e3} must return \`null\` or a valid event.`;
          if ((0, N.Qg)(t3)) return t3.then(((t4) => {
            if (!(0, N.Qd)(t4) && null !== t4) throw new I.U(n4);
            return t4;
          }), ((t4) => {
            throw new I.U(`${e3} rejected with ${t4}`);
          }));
          if (!(0, N.Qd)(t3) && null !== t3) throw new I.U(n4);
          return t3;
        })(s3, c2);
      })).then(((r3) => {
        if (null === r3) {
          if (this.recordDroppedEvent("before_send", l2, t2), o2) {
            const e3 = 1 + (t2.spans || []).length;
            this.recordDroppedEvent("before_send", "span", e3);
          }
          throw new I.U(`${c2} returned \`null\`, will not send event.`, "log");
        }
        const s3 = n2 && n2.getSession();
        if (!o2 && s3 && this._updateSessionFromEvent(s3, r3), o2) {
          const t3 = (r3.sdkProcessingMetadata && r3.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r3.spans ? r3.spans.length : 0);
          t3 > 0 && this.recordDroppedEvent("before_send", "span", t3);
        }
        const i3 = r3.transaction_info;
        if (o2 && i3 && r3.transaction !== t2.transaction) {
          const t3 = "custom";
          r3.transaction_info = { ...i3, source: t3 };
        }
        return this.sendEvent(r3, e2), r3;
      })).then(null, ((t3) => {
        if (t3 instanceof I.U) throw t3;
        throw this.captureException(t3, { data: { __sentry__: true }, originalException: t3 }), new I.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t3}`);
      }));
    }
    _process(t2) {
      this._numProcessing++, t2.then(((t3) => (this._numProcessing--, t3)), ((t3) => (this._numProcessing--, t3)));
    }
    _clearOutcomes() {
      const t2 = this._outcomes;
      return this._outcomes = {}, Object.entries(t2).map((([t3, e2]) => {
        const [n2, r2] = t3.split(":");
        return { reason: n2, category: r2, quantity: e2 };
      }));
    }
    _flushOutcomes() {
      r.T && o.vF.log("Flushing outcomes...");
      const t2 = this._clearOutcomes();
      if (0 === t2.length) return void (r.T && o.vF.log("No outcomes to send"));
      if (!this._dsn) return void (r.T && o.vF.log("No dsn provided, will not send outcomes"));
      r.T && o.vF.log("Sending outcomes:", t2);
      const e2 = (function(t3, e3) {
        const n2 = [{ type: "client_report" }, { timestamp: (0, D.lu)(), discarded_events: t3 }];
        return (0, $.h4)(e3 ? { dsn: e3 } : {}, [n2]);
      })(t2, this._options.tunnel && (0, R.SB)(this._dsn));
      this.sendEnvelope(e2);
    }
  }
  function U(t2) {
    return void 0 === t2.type;
  }
  function q(t2) {
    return "transaction" === t2.type;
  }
  var H = n(19651);
  const B = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  var G = n(63522);
  function J(t2, e2) {
    const n2 = W(t2, e2), r2 = { type: Y(e2), value: V(e2) };
    return n2.length && (r2.stacktrace = { frames: n2 }), void 0 === r2.type && "" === r2.value && (r2.value = "Unrecoverable error caught"), r2;
  }
  function K(t2, e2) {
    return { exception: { values: [J(t2, e2)] } };
  }
  function W(t2, e2) {
    const n2 = e2.stacktrace || e2.stack || "", r2 = (function(t3) {
      return t3 && X.test(t3.message) ? 1 : 0;
    })(e2), s2 = (function(t3) {
      return "number" == typeof t3.framesToPop ? t3.framesToPop : 0;
    })(e2);
    try {
      return t2(n2, r2, s2);
    } catch (t3) {
    }
    return [];
  }
  const X = /Minified React error #\d+;/i;
  function z(t2) {
    return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && t2 instanceof WebAssembly.Exception;
  }
  function Y(t2) {
    const e2 = t2 && t2.name;
    return !e2 && z(t2) ? t2.message && Array.isArray(t2.message) && 2 == t2.message.length ? t2.message[0] : "WebAssembly.Exception" : e2;
  }
  function V(t2) {
    const e2 = t2 && t2.message;
    return e2 ? e2.error && "string" == typeof e2.error.message ? e2.error.message : z(t2) && Array.isArray(t2.message) && 2 == t2.message.length ? t2.message[1] : e2 : "No error message";
  }
  function Z(t2, e2, n2, r2, s2) {
    let o2;
    if ((0, N.T2)(e2) && e2.error) return K(t2, e2.error);
    if ((0, N.BD)(e2) || (0, N.W6)(e2)) {
      const s3 = e2;
      if ("stack" in e2) o2 = K(t2, e2);
      else {
        const e3 = s3.name || ((0, N.BD)(s3) ? "DOMError" : "DOMException"), a2 = s3.message ? `${e3}: ${s3.message}` : e3;
        o2 = Q(t2, a2, n2, r2), (0, i.gO)(o2, a2);
      }
      return "code" in s3 && (o2.tags = { ...o2.tags, "DOMException.code": `${s3.code}` }), o2;
    }
    return (0, N.bJ)(e2) ? K(t2, e2) : (0, N.Qd)(e2) || (0, N.xH)(e2) ? (o2 = (function(t3, e3, n3, r3) {
      const s3 = (0, d.KU)(), o3 = s3 && s3.getOptions().normalizeDepth, i2 = (function(t4) {
        for (const e4 in t4) if (Object.prototype.hasOwnProperty.call(t4, e4)) {
          const n4 = t4[e4];
          if (n4 instanceof Error) return n4;
        }
      })(e3), a2 = { __serialized__: (0, G.cd)(e3, o3) };
      if (i2) return { exception: { values: [J(t3, i2)] }, extra: a2 };
      const c2 = { exception: { values: [{ type: (0, N.xH)(e3) ? e3.constructor.name : r3 ? "UnhandledRejection" : "Error", value: tt(e3, { isUnhandledRejection: r3 }) }] }, extra: a2 };
      if (n3) {
        const e4 = W(t3, n3);
        e4.length && (c2.exception.values[0].stacktrace = { frames: e4 });
      }
      return c2;
    })(t2, e2, n2, s2), (0, i.M6)(o2, { synthetic: true }), o2) : (o2 = Q(t2, e2, n2, r2), (0, i.gO)(o2, `${e2}`, void 0), (0, i.M6)(o2, { synthetic: true }), o2);
  }
  function Q(t2, e2, n2, r2) {
    const s2 = {};
    if (r2 && n2) {
      const r3 = W(t2, n2);
      r3.length && (s2.exception = { values: [{ value: e2, stacktrace: { frames: r3 } }] }), (0, i.M6)(s2, { synthetic: true });
    }
    if ((0, N.NF)(e2)) {
      const { __sentry_template_string__: t3, __sentry_template_values__: n3 } = e2;
      return s2.logentry = { message: t3, params: n3 }, s2;
    }
    return s2.message = e2, s2;
  }
  function tt(t2, { isUnhandledRejection: e2 }) {
    const n2 = (0, p.HF)(t2), r2 = e2 ? "promise rejection" : "exception";
    return (0, N.T2)(t2) ? `Event \`ErrorEvent\` captured as ${r2} with message \`${t2.message}\`` : (0, N.xH)(t2) ? `Event \`${(function(t3) {
      try {
        const e3 = Object.getPrototypeOf(t3);
        return e3 ? e3.constructor.name : void 0;
      } catch (t4) {
      }
    })(t2)}\` (type=${t2.type}) captured as ${r2}` : `Object captured as ${r2} with keys: ${n2}`;
  }
  var et = n(31544);
  const nt = S.O;
  let rt = 0;
  function st() {
    return rt > 0;
  }
  function ot(t2, e2 = {}) {
    if (!/* @__PURE__ */ (function(t3) {
      return "function" == typeof t3;
    })(t2)) return t2;
    try {
      const e3 = t2.__sentry_wrapped__;
      if (e3) return "function" == typeof e3 ? e3 : t2;
      if ((0, p.sp)(t2)) return t2;
    } catch (e3) {
      return t2;
    }
    const n2 = function(...n3) {
      try {
        const r2 = n3.map(((t3) => ot(t3, e2)));
        return t2.apply(this, r2);
      } catch (t3) {
        throw rt++, setTimeout((() => {
          rt--;
        })), (0, d.v4)(((r2) => {
          r2.addEventProcessor(((t4) => (e2.mechanism && ((0, i.gO)(t4, void 0, void 0), (0, i.M6)(t4, e2.mechanism)), t4.extra = { ...t4.extra, arguments: n3 }, t4))), (0, et.Cp)(t3);
        })), t3;
      }
    };
    try {
      for (const e3 in t2) Object.prototype.hasOwnProperty.call(t2, e3) && (n2[e3] = t2[e3]);
    } catch (t3) {
    }
    (0, p.pO)(n2, t2), (0, p.my)(t2, "__sentry_wrapped__", n2);
    try {
      Object.getOwnPropertyDescriptor(n2, "name").configurable && Object.defineProperty(n2, "name", { get: () => t2.name });
    } catch (t3) {
    }
    return n2;
  }
  class it extends L {
    constructor(t2) {
      const e2 = { parentSpanIsAlwaysRootSpan: true, ...t2 };
      !(function(t3, e3, n2 = [e3], r2 = "npm") {
        const s2 = t3._metadata || {};
        s2.sdk || (s2.sdk = { name: `sentry.javascript.${e3}`, packages: n2.map(((t4) => ({ name: `${r2}:@sentry/${t4}`, version: H.M }))), version: H.M }), t3._metadata = s2;
      })(e2, "browser", ["browser"], nt.SENTRY_SDK_SOURCE || "npm"), super(e2), e2.sendClientReports && nt.document && nt.document.addEventListener("visibilitychange", (() => {
        "hidden" === nt.document.visibilityState && this._flushOutcomes();
      }));
    }
    eventFromException(t2, e2) {
      return (function(t3, e3, n2, r2) {
        const s2 = Z(t3, e3, n2 && n2.syntheticException || void 0, r2);
        return (0, i.M6)(s2), s2.level = "error", n2 && n2.event_id && (s2.event_id = n2.event_id), (0, P.XW)(s2);
      })(this._options.stackParser, t2, e2, this._options.attachStacktrace);
    }
    eventFromMessage(t2, e2 = "info", n2) {
      return (function(t3, e3, n3 = "info", r2, s2) {
        const o2 = Q(t3, e3, r2 && r2.syntheticException || void 0, s2);
        return o2.level = n3, r2 && r2.event_id && (o2.event_id = r2.event_id), (0, P.XW)(o2);
      })(this._options.stackParser, t2, e2, n2, this._options.attachStacktrace);
    }
    captureUserFeedback(t2) {
      if (!this._isEnabled()) return void (B && o.vF.warn("SDK not enabled, will not capture user feedback."));
      const e2 = (function(t3, { metadata: e3, tunnel: n2, dsn: r2 }) {
        const s2 = { event_id: t3.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...e3 && e3.sdk && { sdk: { name: e3.sdk.name, version: e3.sdk.version } }, ...!!n2 && !!r2 && { dsn: (0, R.SB)(r2) } }, o2 = /* @__PURE__ */ (function(t4) {
          return [{ type: "user_report" }, t4];
        })(t3);
        return (0, $.h4)(s2, [o2]);
      })(t2, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
      this.sendEnvelope(e2);
    }
    _prepareEvent(t2, e2, n2) {
      return t2.platform = t2.platform || "javascript", super._prepareEvent(t2, e2, n2);
    }
  }
  const at = {}, ct = {};
  function ut(t2, e2) {
    at[t2] = at[t2] || [], at[t2].push(e2);
  }
  function lt(t2, e2) {
    if (!ct[t2]) {
      ct[t2] = true;
      try {
        e2();
      } catch (e3) {
        b.T && o.vF.error(`Error while instrumenting ${t2}`, e3);
      }
    }
  }
  function dt(t2, e2) {
    const n2 = t2 && at[t2];
    if (n2) for (const r2 of n2) try {
      r2(e2);
    } catch (e3) {
      b.T && o.vF.error(`Error while triggering instrumentation handler.
Type: ${t2}
Name: ${(0, g.qQ)(r2)}
Error:`, e3);
    }
  }
  const pt = S.O;
  let ft, ht, mt;
  function gt() {
    if (!pt.document) return;
    const t2 = dt.bind(null, "dom"), e2 = _t(t2, true);
    pt.document.addEventListener("click", e2, false), pt.document.addEventListener("keypress", e2, false), ["EventTarget", "Node"].forEach(((e3) => {
      const n2 = pt[e3], r2 = n2 && n2.prototype;
      r2 && r2.hasOwnProperty && r2.hasOwnProperty("addEventListener") && ((0, p.GS)(r2, "addEventListener", (function(e4) {
        return function(n3, r3, s2) {
          if ("click" === n3 || "keypress" == n3) try {
            const r4 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, o2 = r4[n3] = r4[n3] || { refCount: 0 };
            if (!o2.handler) {
              const r5 = _t(t2);
              o2.handler = r5, e4.call(this, n3, r5, s2);
            }
            o2.refCount++;
          } catch (t3) {
          }
          return e4.call(this, n3, r3, s2);
        };
      })), (0, p.GS)(r2, "removeEventListener", (function(t3) {
        return function(e4, n3, r3) {
          if ("click" === e4 || "keypress" == e4) try {
            const n4 = this.__sentry_instrumentation_handlers__ || {}, s2 = n4[e4];
            s2 && (s2.refCount--, s2.refCount <= 0 && (t3.call(this, e4, s2.handler, r3), s2.handler = void 0, delete n4[e4]), 0 === Object.keys(n4).length && delete this.__sentry_instrumentation_handlers__);
          } catch (t4) {
          }
          return t3.call(this, e4, n3, r3);
        };
      })));
    }));
  }
  function _t(t2, e2 = false) {
    return (n2) => {
      if (!n2 || n2._sentryCaptured) return;
      const r2 = (function(t3) {
        try {
          return t3.target;
        } catch (t4) {
          return null;
        }
      })(n2);
      if ((function(t3, e3) {
        return "keypress" === t3 && (!e3 || !e3.tagName || "INPUT" !== e3.tagName && "TEXTAREA" !== e3.tagName && !e3.isContentEditable);
      })(n2.type, r2)) return;
      (0, p.my)(n2, "_sentryCaptured", true), r2 && !r2._sentryId && (0, p.my)(r2, "_sentryId", (0, i.eJ)());
      const s2 = "keypress" === n2.type ? "input" : n2.type;
      (function(t3) {
        if (t3.type !== ht) return false;
        try {
          if (!t3.target || t3.target._sentryId !== mt) return false;
        } catch (t4) {
        }
        return true;
      })(n2) || (t2({ event: n2, name: s2, global: e2 }), ht = n2.type, mt = r2 ? r2._sentryId : void 0), clearTimeout(ft), ft = pt.setTimeout((() => {
        mt = void 0, ht = void 0;
      }), 1e3);
    };
  }
  const vt = "__sentry_xhr_v3__";
  function yt() {
    if (!pt.XMLHttpRequest) return;
    const t2 = XMLHttpRequest.prototype;
    t2.open = new Proxy(t2.open, { apply(t3, e2, n2) {
      const r2 = new Error(), s2 = 1e3 * (0, D.zf)(), o2 = (0, N.Kg)(n2[0]) ? n2[0].toUpperCase() : void 0, i2 = (function(t4) {
        if ((0, N.Kg)(t4)) return t4;
        try {
          return t4.toString();
        } catch (t5) {
        }
      })(n2[1]);
      if (!o2 || !i2) return t3.apply(e2, n2);
      e2[vt] = { method: o2, url: i2, request_headers: {} }, "POST" === o2 && i2.match(/sentry_key/) && (e2.__sentry_own_request__ = true);
      const a2 = () => {
        const t4 = e2[vt];
        if (t4 && 4 === e2.readyState) {
          try {
            t4.status_code = e2.status;
          } catch (t5) {
          }
          dt("xhr", { endTimestamp: 1e3 * (0, D.zf)(), startTimestamp: s2, xhr: e2, virtualError: r2 });
        }
      };
      return "onreadystatechange" in e2 && "function" == typeof e2.onreadystatechange ? e2.onreadystatechange = new Proxy(e2.onreadystatechange, { apply: (t4, e3, n3) => (a2(), t4.apply(e3, n3)) }) : e2.addEventListener("readystatechange", a2), e2.setRequestHeader = new Proxy(e2.setRequestHeader, { apply(t4, e3, n3) {
        const [r3, s3] = n3, o3 = e3[vt];
        return o3 && (0, N.Kg)(r3) && (0, N.Kg)(s3) && (o3.request_headers[r3.toLowerCase()] = s3), t4.apply(e3, n3);
      } }), t3.apply(e2, n2);
    } }), t2.send = new Proxy(t2.send, { apply(t3, e2, n2) {
      const r2 = e2[vt];
      return r2 ? (void 0 !== n2[0] && (r2.body = n2[0]), dt("xhr", { startTimestamp: 1e3 * (0, D.zf)(), xhr: e2 }), t3.apply(e2, n2)) : t3.apply(e2, n2);
    } });
  }
  const Et = S.O;
  let bt;
  function St(t2) {
    const e2 = "history";
    ut(e2, t2), lt(e2, xt);
  }
  function xt() {
    if (!(function() {
      const t3 = Et.chrome, e3 = t3 && t3.app && t3.app.runtime, n2 = "history" in Et && !!Et.history.pushState && !!Et.history.replaceState;
      return !e3 && n2;
    })()) return;
    const t2 = pt.onpopstate;
    function e2(t3) {
      return function(...e3) {
        const n2 = e3.length > 2 ? e3[2] : void 0;
        if (n2) {
          const t4 = bt, e4 = String(n2);
          bt = e4, dt("history", { from: t4, to: e4 });
        }
        return t3.apply(this, e3);
      };
    }
    pt.onpopstate = function(...e3) {
      const n2 = pt.location.href, r2 = bt;
      if (bt = n2, dt("history", { from: r2, to: n2 }), t2) try {
        return t2.apply(this, e3);
      } catch (t3) {
      }
    }, (0, p.GS)(pt.history, "pushState", e2), (0, p.GS)(pt.history, "replaceState", e2);
  }
  function wt() {
    "console" in S.O && o.Ow.forEach((function(t2) {
      t2 in S.O.console && (0, p.GS)(S.O.console, t2, (function(e2) {
        return o.Z9[t2] = e2, function(...e3) {
          dt("console", { args: e3, level: t2 });
          const n2 = o.Z9[t2];
          n2 && n2.apply(S.O.console, e3);
        };
      }));
    }));
  }
  function kt(t2, e2) {
    return !!t2 && "object" == typeof t2 && !!t2[e2];
  }
  function Tt(t2) {
    return "string" == typeof t2 ? t2 : t2 ? kt(t2, "url") ? t2.url : t2.toString ? t2.toString() : "" : "";
  }
  var Ot = n(26637), Ct = n(26255);
  function $t(t2) {
    return void 0 === t2 ? void 0 : t2 >= 400 && t2 < 500 ? "warning" : t2 >= 500 ? "error" : void 0;
  }
  function Dt(t2) {
    if (!t2) return {};
    const e2 = t2.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e2) return {};
    const n2 = e2[6] || "", r2 = e2[8] || "";
    return { host: e2[4], path: e2[5], protocol: e2[2], search: n2, hash: r2, relative: e2[5] + n2 + r2 };
  }
  const Rt = (0, s._C)(((t2 = {}) => {
    const e2 = { console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true, ...t2 };
    return { name: "Breadcrumbs", setup(t3) {
      var n2;
      e2.console && (function(t4) {
        const e3 = "console";
        ut(e3, t4), lt(e3, wt);
      })(/* @__PURE__ */ (function(t4) {
        return function(e3) {
          if ((0, d.KU)() !== t4) return;
          const n3 = { category: "console", data: { arguments: e3.args, logger: "console" }, level: (r2 = e3.level, "warn" === r2 ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(r2) ? r2 : "log"), message: (0, a.gt)(e3.args, " ") };
          var r2;
          if ("assert" === e3.level) {
            if (false !== e3.args[0]) return;
            n3.message = `Assertion failed: ${(0, a.gt)(e3.args.slice(1), " ") || "console.assert"}`, n3.data.arguments = e3.args.slice(1);
          }
          (0, Ot.Z)(n3, { input: e3.args, level: e3.level });
        };
      })(t3)), e2.dom && (n2 = /* @__PURE__ */ (function(t4, e3) {
        return function(n3) {
          if ((0, d.KU)() !== t4) return;
          let r2, s2, i2 = "object" == typeof e3 ? e3.serializeAttribute : void 0, a2 = "object" == typeof e3 && "number" == typeof e3.maxStringLength ? e3.maxStringLength : void 0;
          a2 && a2 > 1024 && (B && o.vF.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a2} was configured. Sentry will use 1024 instead.`), a2 = 1024), "string" == typeof i2 && (i2 = [i2]);
          try {
            const t5 = n3.event, e4 = (function(t6) {
              return !!t6 && !!t6.target;
            })(t5) ? t5.target : t5;
            r2 = (0, Ct.Hd)(e4, { keyAttrs: i2, maxStringLength: a2 }), s2 = (0, Ct.xE)(e4);
          } catch (t5) {
            r2 = "<unknown>";
          }
          if (0 === r2.length) return;
          const c2 = { category: `ui.${n3.name}`, message: r2 };
          s2 && (c2.data = { "ui.component_name": s2 }), (0, Ot.Z)(c2, { event: n3.event, name: n3.name, global: n3.global });
        };
      })(t3, e2.dom), ut("dom", n2), lt("dom", gt)), e2.xhr && (function(t4) {
        ut("xhr", t4), lt("xhr", yt);
      })(/* @__PURE__ */ (function(t4) {
        return function(e3) {
          if ((0, d.KU)() !== t4) return;
          const { startTimestamp: n3, endTimestamp: r2 } = e3, s2 = e3.xhr[vt];
          if (!n3 || !r2 || !s2) return;
          const { method: o2, url: i2, status_code: a2, body: c2 } = s2, u2 = { method: o2, url: i2, status_code: a2 }, l2 = { xhr: e3.xhr, input: c2, startTimestamp: n3, endTimestamp: r2 }, p2 = $t(a2);
          (0, Ot.Z)({ category: "xhr", data: u2, type: "http", level: p2 }, l2);
        };
      })(t3)), e2.fetch && (function(t4) {
        const e3 = "fetch";
        ut(e3, t4), lt(e3, (() => (function(t5, e4 = false) {
          e4 && !(function() {
            if ("string" == typeof EdgeRuntime) return true;
            if (!w()) return false;
            if (k(x.fetch)) return true;
            let t6 = false;
            const e5 = x.document;
            if (e5 && "function" == typeof e5.createElement) try {
              const n3 = e5.createElement("iframe");
              n3.hidden = true, e5.head.appendChild(n3), n3.contentWindow && n3.contentWindow.fetch && (t6 = k(n3.contentWindow.fetch)), e5.head.removeChild(n3);
            } catch (t7) {
              b.T && o.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t7);
            }
            return t6;
          })() || (0, p.GS)(S.O, "fetch", (function(e5) {
            return function(...n3) {
              const r2 = new Error(), { method: s2, url: o2 } = (function(t6) {
                if (0 === t6.length) return { method: "GET", url: "" };
                if (2 === t6.length) {
                  const [e7, n4] = t6;
                  return { url: Tt(e7), method: kt(n4, "method") ? String(n4.method).toUpperCase() : "GET" };
                }
                const e6 = t6[0];
                return { url: Tt(e6), method: kt(e6, "method") ? String(e6.method).toUpperCase() : "GET" };
              })(n3), i2 = { args: n3, fetchData: { method: s2, url: o2 }, startTimestamp: 1e3 * (0, D.zf)(), virtualError: r2 };
              return t5 || dt("fetch", { ...i2 }), e5.apply(S.O, n3).then((async (e6) => (t5 ? t5(e6) : dt("fetch", { ...i2, endTimestamp: 1e3 * (0, D.zf)(), response: e6 }), e6)), ((t6) => {
                throw dt("fetch", { ...i2, endTimestamp: 1e3 * (0, D.zf)(), error: t6 }), (0, N.bJ)(t6) && void 0 === t6.stack && (t6.stack = r2.stack, (0, p.my)(t6, "framesToPop", 1)), t6;
              }));
            };
          }));
        })(void 0, void 0)));
      })(/* @__PURE__ */ (function(t4) {
        return function(e3) {
          if ((0, d.KU)() !== t4) return;
          const { startTimestamp: n3, endTimestamp: r2 } = e3;
          if (r2 && (!e3.fetchData.url.match(/sentry_key/) || "POST" !== e3.fetchData.method)) if (e3.error) {
            const t5 = e3.fetchData, s2 = { data: e3.error, input: e3.args, startTimestamp: n3, endTimestamp: r2 };
            (0, Ot.Z)({ category: "fetch", data: t5, level: "error", type: "http" }, s2);
          } else {
            const t5 = e3.response, s2 = { ...e3.fetchData, status_code: t5 && t5.status }, o2 = { input: e3.args, response: t5, startTimestamp: n3, endTimestamp: r2 }, i2 = $t(s2.status_code);
            (0, Ot.Z)({ category: "fetch", data: s2, type: "http", level: i2 }, o2);
          }
        };
      })(t3)), e2.history && St(/* @__PURE__ */ (function(t4) {
        return function(e3) {
          if ((0, d.KU)() !== t4) return;
          let n3 = e3.from, r2 = e3.to;
          const s2 = Dt(nt.location.href);
          let o2 = n3 ? Dt(n3) : void 0;
          const i2 = Dt(r2);
          o2 && o2.path || (o2 = s2), s2.protocol === i2.protocol && s2.host === i2.host && (r2 = i2.relative), s2.protocol === o2.protocol && s2.host === o2.host && (n3 = o2.relative), (0, Ot.Z)({ category: "navigation", data: { from: n3, to: r2 } });
        };
      })(t3)), e2.sentry && t3.on("beforeSendEvent", /* @__PURE__ */ (function(t4) {
        return function(e3) {
          (0, d.KU)() === t4 && (0, Ot.Z)({ category: "sentry." + ("transaction" === e3.type ? "transaction" : "event"), event_id: e3.event_id, level: e3.level, message: (0, i.$X)(e3) }, { event: e3 });
        };
      })(t3));
    } };
  })), It = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], Nt = (0, s._C)(((t2 = {}) => {
    const e2 = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, ...t2 };
    return { name: "BrowserApiErrors", setupOnce() {
      e2.setTimeout && (0, p.GS)(nt, "setTimeout", Pt), e2.setInterval && (0, p.GS)(nt, "setInterval", Pt), e2.requestAnimationFrame && (0, p.GS)(nt, "requestAnimationFrame", At), e2.XMLHttpRequest && "XMLHttpRequest" in nt && (0, p.GS)(XMLHttpRequest.prototype, "send", jt);
      const t3 = e2.eventTarget;
      t3 && (Array.isArray(t3) ? t3 : It).forEach(Ft);
    } };
  }));
  function Pt(t2) {
    return function(...e2) {
      const n2 = e2[0];
      return e2[0] = ot(n2, { mechanism: { data: { function: (0, g.qQ)(t2) }, handled: false, type: "instrument" } }), t2.apply(this, e2);
    };
  }
  function At(t2) {
    return function(e2) {
      return t2.apply(this, [ot(e2, { mechanism: { data: { function: "requestAnimationFrame", handler: (0, g.qQ)(t2) }, handled: false, type: "instrument" } })]);
    };
  }
  function jt(t2) {
    return function(...e2) {
      const n2 = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(((t3) => {
        t3 in n2 && "function" == typeof n2[t3] && (0, p.GS)(n2, t3, (function(e3) {
          const n3 = { mechanism: { data: { function: t3, handler: (0, g.qQ)(e3) }, handled: false, type: "instrument" } }, r2 = (0, p.sp)(e3);
          return r2 && (n3.mechanism.data.handler = (0, g.qQ)(r2)), ot(e3, n3);
        }));
      })), t2.apply(this, e2);
    };
  }
  function Ft(t2) {
    const e2 = nt[t2], n2 = e2 && e2.prototype;
    n2 && n2.hasOwnProperty && n2.hasOwnProperty("addEventListener") && ((0, p.GS)(n2, "addEventListener", (function(e3) {
      return function(n3, r2, s2) {
        try {
          "function" == typeof r2.handleEvent && (r2.handleEvent = ot(r2.handleEvent, { mechanism: { data: { function: "handleEvent", handler: (0, g.qQ)(r2), target: t2 }, handled: false, type: "instrument" } }));
        } catch (t3) {
        }
        return e3.apply(this, [n3, ot(r2, { mechanism: { data: { function: "addEventListener", handler: (0, g.qQ)(r2), target: t2 }, handled: false, type: "instrument" } }), s2]);
      };
    })), (0, p.GS)(n2, "removeEventListener", (function(t3) {
      return function(e3, n3, r2) {
        try {
          const s2 = n3.__sentry_wrapped__;
          s2 && t3.call(this, e3, s2, r2);
        } catch (t4) {
        }
        return t3.call(this, e3, n3, r2);
      };
    })));
  }
  const Mt = (0, s._C)((() => ({ name: "BrowserSession", setupOnce() {
    void 0 !== nt.document ? ((0, et.J0)({ ignoreDuration: true }), (0, et.J5)(), St((({ from: t2, to: e2 }) => {
      void 0 !== t2 && t2 !== e2 && ((0, et.J0)({ ignoreDuration: true }), (0, et.J5)());
    }))) : B && o.vF.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
  } })));
  let Lt = null;
  function Ut() {
    Lt = S.O.onerror, S.O.onerror = function(t2, e2, n2, r2, s2) {
      return dt("error", { column: r2, error: s2, line: n2, msg: t2, url: e2 }), !!Lt && Lt.apply(this, arguments);
    }, S.O.onerror.__SENTRY_INSTRUMENTED__ = true;
  }
  let qt = null;
  function Ht() {
    qt = S.O.onunhandledrejection, S.O.onunhandledrejection = function(t2) {
      return dt("unhandledrejection", t2), !qt || qt.apply(this, arguments);
    }, S.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
  }
  const Bt = (0, s._C)(((t2 = {}) => {
    const e2 = { onerror: true, onunhandledrejection: true, ...t2 };
    return { name: "GlobalHandlers", setupOnce() {
      Error.stackTraceLimit = 50;
    }, setup(t3) {
      e2.onerror && ((function(t4) {
        !(function() {
          const e3 = "error";
          ut(e3, ((e4) => {
            const { stackParser: n2, attachStacktrace: r2 } = Jt();
            if ((0, d.KU)() !== t4 || st()) return;
            const { msg: s2, url: o2, line: i2, column: a2, error: c2 } = e4, u2 = (function(t5, e5, n3, r3) {
              const s3 = t5.exception = t5.exception || {}, o3 = s3.values = s3.values || [], i3 = o3[0] = o3[0] || {}, a3 = i3.stacktrace = i3.stacktrace || {}, c3 = a3.frames = a3.frames || [], u3 = r3, l2 = n3, d2 = (0, N.Kg)(e5) && e5.length > 0 ? e5 : (0, Ct.$N)();
              return 0 === c3.length && c3.push({ colno: u3, filename: d2, function: g.yF, in_app: true, lineno: l2 }), t5;
            })(Z(n2, c2 || s2, void 0, r2, false), o2, i2, a2);
            u2.level = "error", (0, et.r)(u2, { originalException: c2, mechanism: { handled: false, type: "onerror" } });
          })), lt(e3, Ut);
        })();
      })(t3), Gt("onerror")), e2.onunhandledrejection && ((function(t4) {
        !(function() {
          const e3 = "unhandledrejection";
          ut(e3, ((e4) => {
            const { stackParser: n2, attachStacktrace: r2 } = Jt();
            if ((0, d.KU)() !== t4 || st()) return;
            const s2 = (function(t5) {
              if ((0, N.sO)(t5)) return t5;
              try {
                if ("reason" in t5) return t5.reason;
                if ("detail" in t5 && "reason" in t5.detail) return t5.detail.reason;
              } catch (t6) {
              }
              return t5;
            })(e4), o2 = (0, N.sO)(s2) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(s2)}` }] } } : Z(n2, s2, void 0, r2, true);
            o2.level = "error", (0, et.r)(o2, { originalException: s2, mechanism: { handled: false, type: "onunhandledrejection" } });
          })), lt(e3, Ht);
        })();
      })(t3), Gt("onunhandledrejection"));
    } };
  }));
  function Gt(t2) {
    B && o.vF.log(`Global Handler attached: ${t2}`);
  }
  function Jt() {
    const t2 = (0, d.KU)();
    return t2 && t2.getOptions() || { stackParser: () => [], attachStacktrace: false };
  }
  const Kt = (0, s._C)((() => ({ name: "HttpContext", preprocessEvent(t2) {
    if (!nt.navigator && !nt.location && !nt.document) return;
    const e2 = t2.request && t2.request.url || nt.location && nt.location.href, { referrer: n2 } = nt.document || {}, { userAgent: r2 } = nt.navigator || {}, s2 = { ...t2.request && t2.request.headers, ...n2 && { Referer: n2 }, ...r2 && { "User-Agent": r2 } }, o2 = { ...t2.request, ...e2 && { url: e2 }, headers: s2 };
    t2.request = o2;
  } })));
  function Wt(t2, e2, n2 = 250, r2, s2, o2, i2) {
    if (!(o2.exception && o2.exception.values && i2 && (0, N.tH)(i2.originalException, Error))) return;
    const c2 = o2.exception.values.length > 0 ? o2.exception.values[o2.exception.values.length - 1] : void 0;
    var u2, l2;
    c2 && (o2.exception.values = (u2 = Xt(t2, e2, s2, i2.originalException, r2, o2.exception.values, c2, 0), l2 = n2, u2.map(((t3) => (t3.value && (t3.value = (0, a.xv)(t3.value, l2)), t3)))));
  }
  function Xt(t2, e2, n2, r2, s2, o2, i2, a2) {
    if (o2.length >= n2 + 1) return o2;
    let c2 = [...o2];
    if ((0, N.tH)(r2[s2], Error)) {
      zt(i2, a2);
      const o3 = t2(e2, r2[s2]), u2 = c2.length;
      Yt(o3, s2, u2, a2), c2 = Xt(t2, e2, n2, r2[s2], s2, [o3, ...c2], o3, u2);
    }
    return Array.isArray(r2.errors) && r2.errors.forEach(((r3, o3) => {
      if ((0, N.tH)(r3, Error)) {
        zt(i2, a2);
        const u2 = t2(e2, r3), l2 = c2.length;
        Yt(u2, `errors[${o3}]`, l2, a2), c2 = Xt(t2, e2, n2, r3, s2, [u2, ...c2], u2, l2);
      }
    })), c2;
  }
  function zt(t2, e2) {
    t2.mechanism = t2.mechanism || { type: "generic", handled: true }, t2.mechanism = { ...t2.mechanism, ..."AggregateError" === t2.type && { is_exception_group: true }, exception_id: e2 };
  }
  function Yt(t2, e2, n2, r2) {
    t2.mechanism = t2.mechanism || { type: "generic", handled: true }, t2.mechanism = { ...t2.mechanism, type: "chained", source: e2, exception_id: n2, parent_id: r2 };
  }
  const Vt = (0, s._C)(((t2 = {}) => {
    const e2 = t2.limit || 5, n2 = t2.key || "cause";
    return { name: "LinkedErrors", preprocessEvent(t3, r2, s2) {
      const o2 = s2.getOptions();
      Wt(J, o2.stackParser, o2.maxValueLength, n2, e2, t3, r2);
    } };
  }));
  var Zt = n(73822);
  const Qt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, te = {};
  function ee(t2) {
    te[t2] = void 0;
  }
  var ne = n(77867);
  function re(t2, e2 = (function(t3) {
    const e3 = te[t3];
    if (e3) return e3;
    let n2 = pt[t3];
    if (k(n2)) return te[t3] = n2.bind(pt);
    const r2 = pt.document;
    if (r2 && "function" == typeof r2.createElement) try {
      const e4 = r2.createElement("iframe");
      e4.hidden = true, r2.head.appendChild(e4);
      const s2 = e4.contentWindow;
      s2 && s2[t3] && (n2 = s2[t3]), r2.head.removeChild(e4);
    } catch (e4) {
      Qt && o.vF.warn(`Could not create sandbox iframe for ${t3} check, bailing to window.${t3}: `, e4);
    }
    return n2 ? te[t3] = n2.bind(pt) : n2;
  })("fetch")) {
    let n2 = 0, r2 = 0;
    return (0, ne.o)(t2, (function(s2) {
      const o2 = s2.body.length;
      n2 += o2, r2++;
      const i2 = { body: s2.body, method: "POST", referrerPolicy: "origin", headers: t2.headers, keepalive: n2 <= 6e4 && r2 < 15, ...t2.fetchOptions };
      if (!e2) return ee("fetch"), (0, P.xg)("No fetch implementation available");
      try {
        return e2(t2.url, i2).then(((t3) => (n2 -= o2, r2--, { statusCode: t3.status, headers: { "x-sentry-rate-limits": t3.headers.get("X-Sentry-Rate-Limits"), "retry-after": t3.headers.get("Retry-After") } })));
      } catch (t3) {
        return ee("fetch"), n2 -= o2, r2--, (0, P.xg)(t3);
      }
    }));
  }
  function se(t2) {
    const e2 = [u(), m(), Nt(), Rt(), Bt(), Vt(), _(), Kt()];
    return false !== t2.autoSessionTracking && e2.push(Mt()), e2;
  }
  function oe(t2 = {}) {
    const e2 = (function(t3 = {}) {
      const e3 = { defaultIntegrations: se(t3), release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : nt.SENTRY_RELEASE && nt.SENTRY_RELEASE.id ? nt.SENTRY_RELEASE.id : void 0, autoSessionTracking: true, sendClientReports: true };
      return null == t3.defaultIntegrations && delete t3.defaultIntegrations, { ...e3, ...t3 };
    })(t2);
    if (!e2.skipBrowserExtensionCheck && (function() {
      const t3 = void 0 !== nt.window && nt;
      if (!t3) return false;
      const e3 = t3[t3.chrome ? "chrome" : "browser"], n3 = e3 && e3.runtime && e3.runtime.id, r2 = nt.location && nt.location.href || "", s2 = !!n3 && nt === nt.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(((t4) => r2.startsWith(`${t4}//`))), o2 = void 0 !== t3.nw;
      return !!n3 && !s2 && !o2;
    })()) return void (0, o.pq)((() => {
      console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
    }));
    B && (w() || o.vF.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n2 = { ...e2, stackParser: (0, g.vk)(e2.stackParser || Zt.lG), integrations: (0, s.mH)(e2), transport: e2.transport || re };
    return (function(t3, e3) {
      true === e3.debug && (r.T ? o.vF.enable() : (0, o.pq)((() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      }))), (0, d.o5)().update(e3.initialScope);
      const n3 = new t3(e3);
      return (function(t4) {
        (0, d.o5)().setClient(t4);
      })(n3), n3.init(), n3;
    })(it, n2);
  }
  var ie = n(42252), ae = n(11314), ce = n(67602), ue = n(73042);
  function le(t2 = {}, e2 = oe) {
    window?.__SENTRY__RENDERER_INIT__ ? o.vF.warn("The browser SDK has already been initialized.\nIf init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer") : (window.__SENTRY__RENDERER_INIT__ = true, void 0 === t2.autoSessionTracking && (t2.autoSessionTracking = false), t2.sendClientReports = false, void 0 === t2.defaultIntegrations && (t2.defaultIntegrations = (function(t3) {
      return [...se(t3), (0, ae.Z)()];
    })(t2)), void 0 === t2.stackParser && (t2.stackParser = ce.n), void 0 === t2.dsn && (t2.dsn = "https://12345@dummy.dsn/12345"), void 0 === t2.transport && (t2.transport = ue.n), t2.anrDetection && (function(t3) {
      const e3 = { pollInterval: 1e3, anrThreshold: 5e3, captureStackTrace: false, ...t3 }, n2 = (0, ie.X)();
      document.addEventListener("visibilitychange", (() => {
        n2.sendStatus({ status: document.visibilityState, config: e3 });
      })), n2.sendStatus({ status: document.visibilityState, config: e3 }), setInterval((() => {
        n2.sendStatus({ status: "alive", config: e3 });
      }), e3.pollInterval);
    })(true === t2.anrDetection ? {} : t2.anrDetection), delete t2.initialScope, e2(t2));
  }
}, 67602(t, e, n) {
  n.d(e, { n: () => l });
  var r = n(73822), s = n(96938);
  function o(t2, e2 = false) {
    return !(e2 || t2 && !t2.startsWith("/") && !t2.match(/^[A-Z]:/) && !t2.startsWith(".") && !t2.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//) || void 0 === t2 || t2.includes("node_modules/"));
  }
  function i(t2) {
    return parseInt(t2 || "", 10) || void 0;
  }
  var a = n(69412);
  const [, c] = r.Yj, [, u] = [90, /* @__PURE__ */ (function(t2) {
    const e2 = /^\s*[-]{4,}$/, n2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    return (r2) => {
      const a2 = r2.match(n2);
      if (a2) {
        let e3, n3, r3, c2, u2;
        if (a2[1]) {
          r3 = a2[1];
          let t3 = r3.lastIndexOf(".");
          if ("." === r3[t3 - 1] && t3--, t3 > 0) {
            e3 = r3.slice(0, t3), n3 = r3.slice(t3 + 1);
            const s2 = e3.indexOf(".Module");
            s2 > 0 && (r3 = r3.slice(s2 + 1), e3 = e3.slice(0, s2));
          }
          c2 = void 0;
        }
        n3 && (c2 = e3, u2 = n3), "<anonymous>" === n3 && (u2 = void 0, r3 = void 0), void 0 === r3 && (u2 = u2 || s.yF, r3 = c2 ? `${c2}.${u2}` : u2);
        let l2 = a2[2] && a2[2].startsWith("file://") ? a2[2].slice(7) : a2[2];
        const d = "native" === a2[5];
        return l2 && l2.match(/\/[A-Z]:/) && (l2 = l2.slice(1)), l2 || !a2[5] || d || (l2 = a2[5]), { filename: l2 ? decodeURI(l2) : void 0, module: t2 ? t2(l2) : void 0, function: r3, lineno: i(a2[3]), colno: i(a2[4]), in_app: o(l2 || "", d) };
      }
      if (r2.match(e2)) return { filename: r2 };
    };
  })(void 0)];
  const l = (t2, e2 = 0) => {
    const n2 = [];
    for (const r2 of t2.split("\n").slice(e2)) {
      const t3 = c(r2), e3 = u(r2);
      if (t3 && false !== e3?.in_app ? n2.push(t3) : e3 && n2.push((0, a.Ce)(e3)), n2.length >= 50) break;
    }
    return (0, s.Vi)(n2);
  };
}, 73042(t, e, n) {
  n.d(e, { n: () => o });
  var r = n(77867), s = n(42252);
  function o(t2) {
    const e2 = (0, s.X)();
    return (0, r.o)(t2, (async (t3) => (e2.sendEnvelope(t3.body), { statusCode: 200 })));
  }
} }]);
