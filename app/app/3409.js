"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[3409], { 69966(e, t, n) {
  n.d(t, { A: () => R });
  var s = n(30050), r = n.n(s), o = n(77259), i = n.n(o), c = n(73507), a = n(63185), u = n(11532), d = n(97378), h = n.n(d), l = new URL(n(77819), n.b), p = new URL(n(18262), n.b), f = new URL(n(11411), n.b), m = new URL(n(31135), n.b), b = i()(r());
  b.i(c.A), b.i(a.A), b.i(u.A);
  var E = h()(l), g = h()(p), y = h()(f), S = h()(m);
  b.push([e.id, "@font-face {\n	font-family: Monaco;\n	src: url(" + E + ");\n	font-weight: 400;\n}\n\n@font-face {\n	font-family: Euclid Circular B;\n	src: url(" + g + ");\n	font-weight: 400;\n	font-style: normal;\n}\n\n@font-face {\n	font-family: Euclid Circular B;\n	src: url(" + y + ");\n	font-weight: 600;\n	font-style: bold;\n}\n\n/*\n * ui-lib accent euclid typography tokens ask for the EuclidCircularSemibold family,\n * which is not a system font and is not shipped with ui-lib, so it is mapped\n * onto the Euclid Circular B Medium file bundled with the app.\n */\n@font-face {\n	font-family: EuclidCircularSemibold;\n	font-style: normal;\n	font-weight: 600;\n	font-display: swap;\n	src: url(" + S + `) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html,
body {
	user-select: none;
	margin: 0;
	height: max-content;
}

html {
	font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, SegoeUI, Ubuntu, sans-serif;
}

/* TODO TokyoNight make header with tabs unreadable */
/* [data-theme="dark"] .header.tokyo-night {
	filter: url('../resources/icons/tokyo-filter.svg#filter');
} */

* {
	--font-family-base: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, SegoeUI, Ubuntu, sans-serif;
}

.ui-lib-icon {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* reset default button style */
button {
	appearance: none;

	font-family: inherit;

	overflow: visible;

	padding: 0;
	border: none;

	color: inherit;
	background: none;
}
`, ""]);
  const R = b;
}, 14448(e, t, n) {
  var s = n(72539), r = n.n(s), o = n(48560), i = n.n(o), c = n(57148), a = n.n(c), u = n(60251), d = n.n(u), h = n(81263), l = n.n(h), p = n(50892), f = n.n(p), m = n(69966), b = {};
  b.styleTagTransform = f(), b.setAttributes = d(), b.insert = a().bind(null, "head"), b.domAPI = i(), b.insertStyleElement = l(), r()(m.A, b), m.A && m.A.locals && m.A.locals;
}, 56039(e, t, n) {
  n.r(t), n.d(t, { getProvider: () => fe, initializeRpc: () => ie, provide: () => ce, provideProxy: () => ae, registerRemoteObject: () => de, registerRemoteService: () => ue, unregisterRemoteObject: () => he });
  var s = n(84157), r = n(14499);
  const o = void 0 !== s.ipcMain;
  var i, c;
  function a(e2) {
    return null !== e2 && "object" == typeof e2 && "dispatchedCallback" in e2 && "string" == typeof e2.dispatchedCallback;
  }
  function u(e2) {
    if ("object" != typeof e2 || e2 instanceof Array) return false;
    const t2 = Object.getOwnPropertyDescriptors(e2);
    for (const e3 in t2) if ("function" == typeof t2[e3].value) return true;
    const n2 = Object.getPrototypeOf(e2), s2 = n2?.constructor;
    return "object" == typeof s2 && null !== s2 && u(n2);
  }
  function d(e2, t2) {
    if ("function" == typeof e2) return t2 ? t2(e2) : void 0;
    if (!e2 || "object" != typeof e2) return e2;
    if (!o && e2 instanceof DOMException) return Error(e2.message);
    if (!u(e2)) return e2;
    throw new Error("Should never be executed");
  }
  function h(e2, t2) {
    return e2.map(((e3) => a(e3) ? t2(e3) : e3));
  }
  function l(e2, t2) {
    return { headers: { [i.HEADER_REQUEST_TYPE]: t2 }, body: e2 };
  }
  function p(e2) {
    return l(e2, i.MESSAGE_REGISTER_INSTANCE);
  }
  function f(e2) {
    return l(e2, i.MESSAGE_PORT_REQUEST);
  }
  function m(e2) {
    return l(e2, i.MESSAGE_EVENT_EMIT);
  }
  function b(e2, t2, n2) {
    return t2 in e2.headers && (void 0 === n2 || e2.headers[t2] === n2);
  }
  function E(e2, t2) {
    return t2 in e2.headers ? e2.headers[t2] : void 0;
  }
  function g(e2, t2) {
    const n2 = { headers: { ...e2.headers, success: true, failure: "" }, body: t2 };
    e2.responseChannel(n2);
  }
  function y(e2, t2) {
    let n2, s2 = "";
    "string" == typeof t2 ? s2 = t2 : t2 instanceof Error ? (s2 = `(${t2.name}):${t2.message}`, n2 = t2.stack) : s2 = "Untyped error";
    const r2 = { headers: { ...e2.headers, success: false, failure: s2 }, body: {} };
    n2 && (r2.headers.stack = n2), e2.responseChannel(r2);
  }
  function S(e2) {
    structuredClone(e2);
  }
  !(function(e2) {
    e2.HEADER_REQUEST_TYPE = "request-type", e2.HEADER_HOST_ID = "host-id", e2.HEADER_REQUEST_MODE = "request-mode", e2.MESSAGE_REGISTER_INSTANCE = "host:register-instance", e2.MESSAGE_UNREGISTER_INSTANCE = "host:unregister-instance", e2.MESSAGE_GET_INSTANCE = "host:get-instance", e2.MESSAGE_PORT_REQUEST = "host:port-request", e2.MESSAGE_HOST_DEAD_NOTIFICATION = "host:host-dead-notification", e2.MESSAGE_INVOKE = "instance:invoke", e2.MESSAGE_DISPOSE = "instance:dispose", e2.MESSAGE_EVENT_SUBSCRIBE = "instance:event_subscribe", e2.MESSAGE_EVENT_UNSUBSCRIBE = "instance:event_unsubscribe", e2.MESSAGE_EVENT_EMIT = "instance:event_emit", e2.MESSAGE_EVENT_NEXT = "instance:event_next";
  })(i || (i = {})), (function(e2) {
    e2.REQUEST_CHANNEL = "ipc-remote:request", e2.RESPONSE_CHANNEL = "ipc-remote:response";
  })(c || (c = {}));
  class R {
    inbox;
    id = (0, r.uR)();
    sender;
    idGenerator = 0;
    invocations = /* @__PURE__ */ new Map();
    responseSubscription;
    constructor(e2, t2) {
      this.inbox = e2, this.inbox = e2, this.sender = t2, this.responseSubscription = this.inbox.onResponse.subscribe(((e3) => {
        const t3 = this.getInvokeId(e3);
        if (!t3) return;
        const n2 = this.invocations.get(t3);
        n2 && (this.invocations.delete(t3), clearTimeout(n2.invocationTimeout), n2.resolve(e3));
      }));
    }
    send(e2) {
      return new Promise(((t2, n2) => {
        const s2 = ++this.idGenerator;
        e2.headers["comm:invoke-id"] = s2, e2.headers["comm:id"] = this.id;
        const r2 = setTimeout((() => {
          const t3 = this.getInvokeId(e2);
          if (t3 && !this.invocations.has(t3)) return;
          const n3 = `Timeout for invocation: ${JSON.stringify(e2)}`;
          console.log(n3);
        }), 1500);
        this.invocations.set(s2, { id: s2, resolve: t2, reject: n2, invocationTimeout: r2 }), this.sender(e2);
      }));
    }
    getInvokeId(e2) {
      if (!b(e2, "comm:id", this.id)) return;
      const t2 = E(e2, "comm:invoke-id");
      if (Number.isInteger(t2)) return t2;
      throw new Error("[comm:invoke-id] expected to be a number");
    }
    dispose() {
      this.responseSubscription.unsubscribe();
    }
  }
  const w = void 0 === s.ipcRenderer;
  class v {
    inbox;
    factories = /* @__PURE__ */ new Map();
    communicatorMember = null;
    factoryRegistractionQueue = [];
    constructor(e2) {
      this.inbox = e2, w || (this.communicator(), this.factoryRegistractionQueue.forEach(((e3) => e3())), this.factoryRegistractionQueue = []);
    }
    tryCreate(e2, ...t2) {
      const n2 = this.factories.get(e2);
      if (n2) return n2(...t2);
    }
    registerFactory(e2, t2) {
      if (this.factories.has(e2)) throw new Error(`Service factory with contract [${e2}] registered already`);
      if (!w) {
        const t3 = () => {
          this.communicatorMember?.send(p({ name: e2 })).catch(((e3) => console.error(e3)));
        };
        this.communicatorMember ? t3() : this.factoryRegistractionQueue.push(t3);
      }
      this.factories.set(e2, t2);
    }
    canProvide(e2) {
      return this.factories.has(e2);
    }
    provide(e2, ...t2) {
      const n2 = this.tryCreate(e2, ...t2);
      if (!n2) throw new Error(`Local service with contracts [${e2}] not registered. Instance can not be created.`);
      return n2;
    }
    communicator() {
      if (w) throw new Error("Creating ServiceProvider communicator in main process");
      return this.communicatorMember || (this.communicatorMember = new R(this.inbox, ((e2) => {
        s.ipcRenderer.send(c.REQUEST_CHANNEL, e2);
      }))), this.communicatorMember;
    }
  }
  var I = n(12069);
  function M(e2) {
    return void 0 !== e2.ports;
  }
  class _ {
    onRequestSubject = new I.Subject();
    onResponseSubject = new I.Subject();
    onRequest = this.onRequestSubject.asObservable();
    onResponse = this.onResponseSubject.asObservable();
    constructor() {
      this.onMessage(c.REQUEST_CHANNEL, ((e2, t2) => {
        const n2 = this.makeResponseChannel(e2);
        (function(e3) {
          return void 0 !== e3.sender.id;
        })(e2) && (t2.headers[i.HEADER_HOST_ID] = e2.sender.id);
        const s2 = { ...t2, responseChannel: n2, port: M(e2) ? e2.ports[0] : void 0 };
        this.onRequestSubject.next(s2);
      })), this.onMessage(c.RESPONSE_CHANNEL, ((e2, t2) => {
        if (M(e2)) {
          const [n2] = e2.ports;
          t2.body = { port: n2 };
        }
        this.onResponseSubject.next(t2);
      }));
    }
  }
  class A extends _ {
    onMessage(e2, t2) {
      s.ipcMain.on(e2, t2);
    }
    makeResponseChannel(e2) {
      return function(t2) {
        const n2 = e2.sender;
        if (n2.isDestroyed()) return void console.debug("Response will not be send to the destroyed contents");
        const s2 = t2.body;
        if (s2.port) return t2.body = {}, void n2.postMessage(c.RESPONSE_CHANNEL, t2, [s2.port]);
        n2.postMessage(c.RESPONSE_CHANNEL, t2);
      };
    }
  }
  class x extends _ {
    onMessage(e2, t2) {
      s.ipcRenderer.on(e2, t2);
    }
    makeResponseChannel(e2) {
      return function(e3) {
        const t2 = e3.body;
        if (t2.port) return e3.body = {}, void s.ipcRenderer.postMessage(c.RESPONSE_CHANNEL, e3, [t2.port]);
        s.ipcRenderer.postMessage(c.RESPONSE_CHANNEL, e3);
      };
    }
  }
  var C = n(75739);
  class T {
    id;
    instance;
    communicatorsByRemoteId = /* @__PURE__ */ new Map();
    eventSubscriptions = /* @__PURE__ */ new Map();
    static wrapIntstanceToRemotable(e2, t2) {
      return new T(e2, t2);
    }
    constructor(e2, t2) {
      this.id = t2, this.instance = e2;
    }
    addCommunicator(e2) {
      this.communicatorsByRemoteId.set(e2.remoteId, e2), e2.onClosed.subscribe((() => {
        e2.dispose();
      })), e2.onRequest.subscribe(((e3) => {
        try {
          this.handleRequest(e3);
        } catch (t2) {
          y(e3, t2);
        }
      }));
    }
    onHostDead(e2) {
      const t2 = [];
      for (const [n2, s2] of this.eventSubscriptions) n2.split("-").at(0) === e2.toString() && (s2.unsubscribe(), t2.push(n2));
      t2.forEach(((e3) => {
        this.eventSubscriptions.delete(e3);
      })), this.communicatorsByRemoteId.get(e2)?.dispose(), this.communicatorsByRemoteId.delete(e2);
    }
    handleRequest(e2) {
      return b(e2, i.HEADER_REQUEST_TYPE, i.MESSAGE_INVOKE) ? this.handleInvokeRequest(e2) : b(e2, i.HEADER_REQUEST_TYPE, i.MESSAGE_DISPOSE) ? this.handleDisposeRequest(e2) : b(e2, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_SUBSCRIBE) ? this.handleSubscribeRequest(e2) : b(e2, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_UNSUBSCRIBE) ? this.handleUnsubscribeRequest(e2) : b(e2, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_NEXT) ? this.handleNextRequest(e2) : void 0;
    }
    handleInvokeRequest(e2) {
      const t2 = e2.body, n2 = h(t2.args, ((t3) => {
        const n3 = E(e2, i.HEADER_HOST_ID) ?? 0;
        return (...e3) => {
          const s3 = this.communicatorsByRemoteId.get(n3)?.request(m({ method: t3.dispatchedCallback, args: e3 }), "fire-and-forget");
          return s3;
        };
      })), s2 = this.instance[t2.method];
      if (void 0 === s2) return void y(e2, `Instance does not provide invocable property: (${t2.method})`);
      const r2 = s2.apply(this.instance, n2);
      if (r2 instanceof Promise) return this.chainPromise(e2, r2);
      this.respondWithResult(e2, r2);
    }
    handleDisposeRequest(e2) {
      const t2 = E(e2, i.HEADER_HOST_ID) ?? 0;
      this.onHostDead(t2);
    }
    handleSubscribeRequest(e2) {
      const t2 = e2.body, n2 = Reflect.get(this.instance, t2.method);
      if (!n2) throw new Error(`Invalid (${t2.method}) event`);
      const s2 = E(e2, i.HEADER_HOST_ID) ?? 0, r2 = `${s2}-${t2.method}`, o2 = n2.subscribe({ next: (e3) => {
        const n3 = this.communicatorsByRemoteId.get(s2)?.request(m({ method: t2.method, args: [e3] }), "fire-and-forget");
        n3 && (0, C.uY)(n3);
      }, error: (e3) => {
        console.error(e3);
      } });
      if (this.eventSubscriptions.has(r2)) return y(e2, "Instance already have such subscription");
      this.eventSubscriptions.set(r2, o2), g(e2, {});
    }
    handleUnsubscribeRequest(e2) {
      const t2 = e2.body, n2 = `${E(e2, i.HEADER_HOST_ID) ?? 0}-${t2.method}`, s2 = this.eventSubscriptions.get(n2);
      s2?.unsubscribe(), this.eventSubscriptions.delete(n2), g(e2, {});
    }
    handleNextRequest(e2) {
      const t2 = e2.body;
      Reflect.get(this.instance, t2.method).next(t2.args[0]), g(e2, {});
    }
    responseWithDispatchedCallback(e2, t2) {
      return t2.name ? (this.instance[t2.name] || (this.instance[t2.name] = t2), g(e2, d({ dispatchedCallback: t2.name }))) : y(e2, "Dispatched callback must be named");
    }
    chainPromise(e2, t2) {
      t2.then(((t3) => {
        this.respondWithResult(e2, t3);
      })).catch(((t3) => y(e2, t3)));
    }
    respondWithResult(e2, t2) {
      return "function" == typeof t2 ? this.responseWithDispatchedCallback(e2, t2) : g(e2, d(t2));
    }
    dispose() {
      for (const e2 of this.communicatorsByRemoteId.values()) e2.dispose();
    }
  }
  class D {
    instances = /* @__PURE__ */ new Map();
    onHostDead(e2) {
      this.instances.forEach(((t2) => {
        t2.onHostDead(e2);
      }));
    }
    hasInstance(e2) {
      return this.instances.has(e2);
    }
    getInstance(e2) {
      const t2 = this.instances.get(e2);
      if (!t2) throw new Error(`Remotable ${e2} not registered`);
      return t2;
    }
    registerInstance(e2, t2) {
      const n2 = T.wrapIntstanceToRemotable(e2, t2);
      if (this.instances.has(n2.id)) throw new Error(`Remotable ${n2.id} registered already`);
      return this.instances.set(n2.id, n2), n2.id;
    }
    unregisterInstance(e2) {
      return this.instances.delete(e2);
    }
  }
  class P {
    callback;
    shiftMs;
    timeoutMs;
    accumulator = /* @__PURE__ */ new Set();
    timeout = null;
    endBefore = null;
    constructor(e2, t2 = 50, n2 = 1e3) {
      if (this.callback = e2, this.shiftMs = t2, this.timeoutMs = n2, !(this.shiftMs < this.timeoutMs)) throw new Error("Assertion shiftMs < timeoutMs failed");
    }
    sync(e2) {
      if (this.accumulator.add(e2), this.timeout) return this.endBefore && this.endBefore < Date.now() ? void this.fire() : void this.timeout.refresh();
      this.endBefore = Date.now() + this.timeoutMs, this.timeout = setTimeout(this.fire.bind(this), this.shiftMs);
    }
    fire() {
      (async () => {
        try {
          const e2 = this.callback(this.accumulator);
          e2 instanceof Promise && await e2;
        } finally {
          this.reset();
        }
      })();
    }
    reset() {
      this.timeout && (clearTimeout(this.timeout), this.timeout = null, this.endBefore = null), this.accumulator.clear();
    }
  }
  class N {
    id;
    remoteId;
    port;
    onRequestSubject = new I.Subject();
    onRequest = this.onRequestSubject.asObservable();
    onClosedSubject = new I.Subject();
    onClosed = this.onClosedSubject.asObservable();
    idGenerator = 1;
    invocations = /* @__PURE__ */ new Map();
    constructor(e2, t2, n2) {
      this.id = e2, this.remoteId = t2, this.port = n2;
    }
    request(e2, t2 = "fire-and-forget") {
      return new Promise(((n2, s2) => {
        const r2 = ++this.idGenerator;
        if (e2.headers["comm:invoke-id"] = r2, e2.headers[i.HEADER_HOST_ID] = this.id, e2.headers["comm:request-mode"] = t2, e2.headers["comm:message-type"] = "request", S(e2), "wait-for-response" === t2) {
          const t3 = setTimeout((() => {
            const t4 = this.getMyInvokeId(e2);
            if (t4 && !this.invocations.has(t4)) return;
            const n3 = `Timeout for invocation: ${JSON.stringify(e2)}`;
            console.log(n3);
          }), 1e3);
          this.invocations.set(r2, { id: r2, resolve: n2, reject: s2, invocationTimeout: t3 });
        }
        this.port.postMessage(e2);
      }));
    }
    responseHandler(e2) {
      const t2 = this.getMyInvokeId(e2), n2 = this.invocations.get(t2);
      n2 && (this.invocations.delete(t2), clearTimeout(n2.invocationTimeout), n2.resolve(e2));
    }
    getMyInvokeId(e2) {
      return E(e2, "comm:invoke-id") ?? 0;
    }
    handleMessage(e2) {
      const t2 = E(e2, "comm:message-type");
      if ("request" === t2) {
        const t3 = b(e2, "comm:request-mode", "wait-for-response") ? this.makeResponseChannel() : (e3) => {
        }, n2 = { ...e2, responseChannel: t3 };
        this.onRequestSubject.next(n2);
      }
      "response" === t2 && this.responseHandler(e2);
    }
    closeHandler() {
      this.onClosedSubject.next();
    }
    makeResponseChannel() {
      const e2 = this.port;
      return function(t2) {
        t2.headers["comm:message-type"] = "response", S(t2), e2.postMessage(t2);
      };
    }
    dispose() {
      this.invocations.clear(), this.onRequestSubject.complete(), this.onClosedSubject.complete(), this.port.close();
    }
  }
  class H extends N {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), n2.addEventListener("message", ((e3) => {
        this.handleMessage(e3.data);
      })), this.port.start();
    }
  }
  var O = n(7750), k = n(33077), U = n(92763);
  const j = ["then", "reject"], G = ["dispose"];
  function q(e2) {
    return j.includes(e2);
  }
  function $(e2) {
    return G.includes(e2);
  }
  class Q {
    source = new I.Subject();
    observable = this.source.asObservable();
  }
  async function B(e2, t2, n2, s2, r2) {
    const o2 = { method: t2, args: r2 };
    try {
      return (function(e3) {
        if (!b(e3, "success")) throw new Error("Expected response message.");
        if (!e3.headers.success) {
          if (e3.headers.failure && "string" == typeof e3.headers.failure) {
            const t3 = new Error(e3.headers.failure);
            throw "stack" in e3.headers && (t3.stack = e3.headers.stack), t3;
          }
          throw new Error("Unspecified remoting error");
        }
      })(c2 = await e2.request({ headers: { [i.HEADER_REQUEST_TYPE]: n2 }, body: o2 }, s2)), c2.body;
    } catch (e3) {
      throw (0, O.Ow)().error("Error remote invoke", e3), e3;
    }
    var c2;
  }
  function F(e2, t2, n2) {
    return B(e2, t2, i.MESSAGE_INVOKE, "wait-for-response", n2);
  }
  class z {
    static makeSubscribe(e2) {
      return e2.propKey in e2.fieldData || Object.defineProperty(e2.fieldData, e2.propKey, { writable: false, configurable: true, value: new Q() }), (...t2) => {
        const n2 = Reflect.get(e2.fieldData, e2.propKey).observable.subscribe(...t2);
        return e2.proxy.subscriptionEmitters[e2.propKey] || (e2.proxy.subscriptionEmitters[e2.propKey] = (t3) => {
          Reflect.get(e2.fieldData, e2.propKey).source.next(t3);
        }), (0, U.uY)((async () => {
          const t3 = await e2.proxy.communicatorPromise;
          await B(t3, e2.propKey, i.MESSAGE_EVENT_SUBSCRIBE, "fire-and-forget", []);
        })()), { unsubscribe: () => {
          n2.unsubscribe(), (0, U.uY)(e2.proxy.communicatorPromise.then(((t3) => {
            (0, U.uY)(B(t3, e2.propKey, i.MESSAGE_EVENT_UNSUBSCRIBE, "fire-and-forget", []));
          })));
        } };
      };
    }
    async apply(e2, t2, n2) {
      const s2 = await e2.proxy.communicatorPromise, r2 = (function(e3, t3) {
        return e3.map(((e4) => d(e4, t3)));
      })(n2, ((t3) => {
        const n3 = { dispatchedCallback: t3.name };
        return e2.proxy.subscriptionEmitters[t3.name] = t3, n3;
      })), o2 = await F(s2, e2.propKey, r2);
      return a(o2) ? (...e3) => F(s2, o2.dispatchedCallback, e3) : o2;
    }
    get(e2, t2) {
      if ("subscribe" === t2) return z.makeSubscribe(e2);
      if ("next" === t2) return (t3) => {
        (0, U.uY)(e2.proxy.communicatorPromise.then(((n2) => {
          (0, U.uY)(B(n2, e2.propKey, i.MESSAGE_EVENT_NEXT, "fire-and-forget", [t3]));
        })));
      };
      throw new Error(`Unknown ipc-proxy property: (${t2})`);
    }
  }
  const L = new z();
  class Y {
    communicatorPromise;
    properties = {};
    subscriptionEmitters = {};
    static create(e2) {
      const t2 = new Y(e2);
      return new Proxy({}, t2);
    }
    constructor(e2) {
      this.communicatorPromise = e2, this.communicatorPromise.then(((e3) => {
        e3.onRequest.subscribe(((e4) => {
          if (b(e4, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_EMIT)) {
            const t2 = e4.body, n2 = h(t2.args, ((e5) => {
              throw new Error(`Dispatched callbacks in Rx Observables not allowed. Requested callback - ${e5.dispatchedCallback}`);
            })), s2 = this.subscriptionEmitters[t2.method];
            if (!s2) return;
            s2(...n2);
          }
        }));
      })).catch(((e3) => {
        const t2 = (0, k.bw)(e3);
        console.warn(`Error while awaiting communicator instance on constructor:${t2}`);
      }));
    }
    get(e2, t2) {
      if (q(t2)) return;
      if ($(t2) && t2 in this) return this[t2].bind(this);
      const n2 = this.properties[t2];
      if (n2) return n2;
      const s2 = { proxy: this, fieldData: e2, propKey: t2 }, r2 = Object.assign((() => {
      }), s2), o2 = new Proxy(r2, L);
      return this.properties[t2] = o2, o2;
    }
    has(e2, t2) {
      return !q(t2) && $(t2);
    }
    async apply(e2, t2, n2) {
      const s2 = await this.communicatorPromise;
      return await F(s2, "", n2);
    }
    dispose() {
      this.communicatorPromise.then(((e2) => {
        e2.request(l({}, i.MESSAGE_DISPOSE), "fire-and-forget").finally((() => e2.dispose()));
      })).catch(((e2) => {
        const t2 = (0, k.bw)(e2);
        console.warn(`Error while awaiting communicator instance on .dispose:${t2}`);
      }));
    }
  }
  const V = class {
    inbox;
    proxiesCache = /* @__PURE__ */ new Map();
    proxiesQueue = /* @__PURE__ */ new Map();
    constructor(e2) {
      this.inbox = e2;
    }
    provide(e2, t2) {
      const n2 = this.findCachedProxy(e2, t2);
      if (null !== n2) return n2;
      const s2 = this.findQueuedProxy(e2, t2);
      return null !== s2 ? s2 : this.enqueueProxyRequest(e2, t2);
    }
    onHostDead(e2) {
      this.proxiesCache.delete(e2);
    }
    findInDoubleMap(e2, t2, n2) {
      if (void 0 !== n2) {
        const s2 = e2.get(n2)?.get(t2);
        return void 0 !== s2 ? s2 : null;
      }
      for (const n3 of e2.values()) {
        const e3 = n3.get(t2);
        if (void 0 !== e3) return e3;
      }
      return null;
    }
    findCachedProxy(e2, t2) {
      return this.findInDoubleMap(this.proxiesCache, e2, t2);
    }
    findQueuedProxy(e2, t2) {
      return this.findInDoubleMap(this.proxiesQueue, e2, t2);
    }
    enqueueProxyRequest(e2, t2) {
      const n2 = this.createPortCommunicator(e2, t2), s2 = Y.create(n2), r2 = t2 ?? -1;
      let o2 = this.proxiesQueue.get(r2);
      return void 0 === o2 && (o2 = /* @__PURE__ */ new Map(), this.proxiesQueue.set(r2, o2)), o2.set(e2, s2), n2.then(((t3) => {
        if (-1 !== r2 && t3.remoteId !== r2) throw new Error(`Expected another host id. Expected - ${r2}, got - ${t3.remoteId}`);
        let n3 = this.proxiesCache.get(t3.remoteId);
        void 0 === n3 && (n3 = /* @__PURE__ */ new Map(), this.proxiesCache.set(t3.remoteId, n3)), n3.set(e2, s2);
      })).catch(((e3) => {
        console.error(e3);
      })).finally((() => {
        const t3 = this.proxiesQueue.get(r2);
        t3?.delete(e2), 0 === t3?.size && this.proxiesQueue.delete(r2);
      })), s2;
    }
  }, K = class extends V {
    ipcCommunicator;
    constructor(e2, t2) {
      super(e2), this.ipcCommunicator = t2;
    }
    async createPortCommunicator(e2, t2) {
      const n2 = await this.ipcCommunicator.send((s2 = { contract: e2, specificHostId: t2 }, l(s2, i.MESSAGE_GET_INSTANCE)));
      var s2;
      const r2 = n2.body.port;
      if (void 0 === r2) throw new Error(`Remote host didn't provide port for instance with [${e2}]. Instance can not be created.`);
      const o2 = E(n2, i.HEADER_HOST_ID);
      if (void 0 === o2) throw new Error("Main RemoteHost didn't provide id. Instance can not be created.");
      return new H(o2, 0, r2);
    }
  };
  class W extends N {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), n2.on("message", ((e3) => {
        this.handleMessage(e3.data);
      })), n2.on("close", (() => {
        this.closeHandler();
      })), this.port.start();
    }
  }
  const X = class extends V {
    proxyHostGetter;
    constructor(e2, t2) {
      super(e2), this.proxyHostGetter = t2;
    }
    createPortCommunicator(e2, t2) {
      const n2 = t2 ?? this.proxyHostGetter(e2);
      if (void 0 === n2) throw new Error(`Remote instance with contacts [${e2}] not registered. Instance can not be created.`);
      const r2 = s.webContents.fromId(n2);
      if (void 0 === r2 || r2.isDestroyed()) throw new Error(`Host for remote instance with contacts [${e2}] was destroyed. Instance can not be created.`);
      const o2 = new s.MessageChannelMain();
      return r2.postMessage(c.REQUEST_CHANNEL, f({ id: n2, remoteId: 0, name: e2 }), [o2.port1]), Promise.resolve(new W(0, n2, o2.port2));
    }
  };
  class J {
    instanceProviderMember;
    proxyProviderMember;
    remoteManager;
    constructor(e2, t2, n2) {
      this.instanceProviderMember = e2, this.proxyProviderMember = t2, this.remoteManager = n2;
    }
    get instanceProvider() {
      return this.instanceProviderMember;
    }
    get proxyProvider() {
      return this.proxyProviderMember;
    }
  }
  class Z extends J {
    inbox;
    knownHosts = /* @__PURE__ */ new Set();
    remoteInstancesRegistry = /* @__PURE__ */ new Map();
    hostDeadSynchronizer = new P(this.onHostsDead.bind(this));
    constructor(e2, t2, n2) {
      super(t2, new X(e2, ((e3) => this.remoteInstancesRegistry.get(e3)?.values().next().value)), n2), this.inbox = e2, this.initInboxing();
    }
    initInboxing() {
      const e2 = { [i.MESSAGE_REGISTER_INSTANCE]: (e3) => {
        const t2 = e3.body, n2 = E(e3, i.HEADER_HOST_ID) ?? 0;
        if (!n2) return y(e3, "RegisterInstanse request must contain sender id");
        const r2 = s.webContents.fromId(n2);
        if (!r2 || r2.isDestroyed()) return y(e3, `ServiceHost for contracts [${t2.name}] does not exists anymore`);
        this.rememberHost(r2), this.registerHostForContract(t2.name, n2), g(e3, "Successful registered");
      }, [i.MESSAGE_UNREGISTER_INSTANCE]: (e3) => {
        const t2 = e3.body, n2 = E(e3, i.HEADER_HOST_ID) ?? 0;
        this.unregisterForContract(t2.name, n2), g(e3, "Successful unregistered");
      }, [i.MESSAGE_GET_INSTANCE]: (e3) => {
        const t2 = e3.body, n2 = t2.contract, r2 = t2.specificHostId, o2 = s.webContents.fromId(E(e3, i.HEADER_HOST_ID) ?? 0);
        if (!o2) return;
        if (this.rememberHost(o2), void 0 === r2) {
          let t3;
          if (this.remoteManager.hasInstance(n2)) t3 = this.remoteManager.getInstance(n2);
          else if (this.instanceProvider.canProvide(n2)) {
            const e4 = this.remoteManager.registerInstance(this.instanceProvider.provide(n2), n2);
            t3 = this.remoteManager.getInstance(e4);
          }
          if (t3) {
            const n3 = new s.MessageChannelMain();
            return t3.addCommunicator(new W(0, o2.id, n3.port1)), g(e3, { id: o2.id, remoteId: 0, port: n3.port2 });
          }
        }
        const a2 = this.remoteInstancesRegistry.get(n2);
        if (!a2 || 0 === a2.size) return y(e3, `Service with contracts [${n2}] not registered , and remoting not configured.`);
        if (r2 && !a2.has(r2)) return y(e3, `Service with contracts [${n2}] not registered for specific id ${r2}, and remoting not configured.`);
        const u2 = r2 ?? a2.values().next().value, d2 = s.webContents.fromId(u2);
        if (!d2) return y(e3, `ServiceHost with id ${r2} for contracts [${n2}] does not exists anymore`);
        const h2 = new s.MessageChannelMain();
        d2.postMessage(c.REQUEST_CHANNEL, f({ id: d2.id, remoteId: o2.id, name: t2.contract }), [h2.port1]), g(e3, { id: o2.id, remoteId: d2.id, port: h2.port2 });
      } };
      this.inbox.onRequest.subscribe(((t2) => {
        const n2 = E(t2, i.HEADER_REQUEST_TYPE);
        try {
          n2 && n2 in e2 && e2[n2](t2);
        } catch (e3) {
          y(t2, e3);
        }
      }));
    }
    rememberHost(e2) {
      e2.isDestroyed() && this.knownHosts.delete(e2.id), this.knownHosts.has(e2.id) || (this.knownHosts.add(e2.id), this.setupHostAliveWatchdog(e2));
    }
    registerRemoteObject(e2, t2) {
      return this.remoteManager.registerInstance(e2, t2);
    }
    unregisterRemoteObject(e2) {
      return this.remoteManager.unregisterInstance(e2);
    }
    registerHostForContract(e2, t2) {
      let n2 = this.remoteInstancesRegistry.get(e2);
      n2 || (n2 = /* @__PURE__ */ new Set(), this.remoteInstancesRegistry.set(e2, n2)), n2.add(t2);
    }
    unregisterForContract(e2, t2) {
      const n2 = this.remoteInstancesRegistry.get(e2);
      n2 && n2.delete(t2), 0 === n2?.size && this.remoteInstancesRegistry.delete(e2);
    }
    setupHostAliveWatchdog(e2) {
      e2.once("destroyed", (() => {
        this.removeRemoteHost(e2.id), this.hostDeadSynchronizer.sync(e2.id);
      })), e2.once("render-process-gone", (() => {
        this.removeRemoteHost(e2.id), this.hostDeadSynchronizer.sync(e2.id);
      }));
    }
    removeRemoteHost(e2) {
      const t2 = [];
      this.remoteInstancesRegistry.forEach(((n2, s2) => {
        n2.delete(e2), 0 === n2.size && t2.push(s2);
      })), t2.forEach(((e3) => {
        this.remoteInstancesRegistry.delete(e3);
      })), this.knownHosts.delete(e2), this.remoteManager.onHostDead(e2), this.proxyProviderMember.onHostDead(e2);
    }
    onHostsDead(e2) {
      this.knownHosts.difference(e2).forEach(((t2) => {
        const n2 = s.webContents.fromId(t2);
        n2 && !n2.isDestroyed() && e2.forEach(((e3) => {
          n2.postMessage(c.REQUEST_CHANNEL, l({ id: e3 }, i.MESSAGE_HOST_DEAD_NOTIFICATION));
        }));
      }));
    }
  }
  const ee = (e2) => {
    s.ipcRenderer.send(c.REQUEST_CHANNEL, e2);
  };
  class te extends J {
    inbox;
    ipcCommunicator;
    constructor(e2, t2, n2) {
      const s2 = new R(e2, ee);
      super(t2, new K(e2, s2), n2), this.inbox = e2, this.ipcCommunicator = s2, this.initInboxing();
    }
    initInboxing() {
      const e2 = { [i.MESSAGE_PORT_REQUEST]: (e3) => {
        const t2 = e3.body, n2 = e3.port;
        if (!n2) return y(e3, "Request does not contains port");
        let s2;
        if (this.remoteManager.hasInstance(t2.name)) s2 = this.remoteManager.getInstance(t2.name);
        else if (this.instanceProvider.canProvide(t2.name)) {
          const e4 = this.remoteManager.registerInstance(this.instanceProvider.provide(t2.name), t2.name);
          s2 = this.remoteManager.getInstance(e4);
        }
        s2 ? s2.addCommunicator(new H(t2.id, t2.remoteId, n2)) : g(e3, "Port successfully added");
      }, [i.MESSAGE_HOST_DEAD_NOTIFICATION]: (e3) => {
        const t2 = e3.body;
        this.remoteManager.onHostDead(t2.id), this.proxyProviderMember.onHostDead(t2.id);
      } };
      this.inbox.onRequest.subscribe(((t2) => {
        const n2 = E(t2, i.HEADER_REQUEST_TYPE);
        try {
          n2 && n2 in e2 && e2[n2](t2);
        } catch (e3) {
          y(t2, e3);
        }
      }));
    }
    registerRemoteObject(e2, t2) {
      return (0, C.uY)(this.ipcCommunicator.send(p({ name: t2 }))), this.remoteManager.registerInstance(e2, t2);
    }
    unregisterRemoteObject(e2) {
      return (0, C.uY)(this.ipcCommunicator.send(l({ name: e2 }, i.MESSAGE_UNREGISTER_INSTANCE))), this.remoteManager.unregisterInstance(e2);
    }
  }
  let ne = null, se = null, re = null, oe = null;
  function ie() {
    ne || (ne = s.ipcMain ? new Z(pe(), fe(), le()) : new te(pe(), fe(), le()));
  }
  function ce(e2) {
    if (!ne) throw new Error("Rpc: host not initialized");
    return ne.instanceProvider.provide(e2);
  }
  function ae(e2, t2) {
    if (!ne) throw new Error("Rpc: host not initialized");
    return ne.proxyProvider.provide(e2, t2);
  }
  function ue(e2, t2) {
    if (!ne) throw new Error("Rpc: host not initialized");
    ne.registerRemoteObject(e2, t2);
  }
  function de(e2, t2) {
    if (!ne) throw new Error("Rpc: host not initialized");
    const n2 = (function(e3) {
      return `${(0, r.uR)().slice(0, 8)}-${e3}`;
    })(t2 || "anonymous");
    return ne.registerRemoteObject(e2, n2);
  }
  function he(e2) {
    if (!ne) throw new Error("Rpc: host not initialized");
    return ne.unregisterRemoteObject(e2);
  }
  function le() {
    return se || (se = new D()), se;
  }
  function pe() {
    return re || (re = s.ipcMain ? new A() : new x()), re;
  }
  function fe() {
    return oe || (oe = new v(pe())), oe;
  }
}, 53524(e, t, n) {
  n.d(t, { F: () => c, W: () => a });
  var s = n(84157), r = n(9639), o = n(7750);
  const i = /* @__PURE__ */ Symbol("LogCallClassName");
  function c(e2, t2, n2) {
    const c2 = n2.value;
    return n2.value = function(...n3) {
      if ("function" == typeof c2) {
        const a2 = e2, u = Reflect.getMetadata(i, e2.constructor) ?? a2.name ?? a2.constructor?.name, d = `${(function(e3) {
          let t3 = "";
          return e3.id && (t3 = e3.id), e3.remoteServiceInstanceId && (t3 = e3.remoteServiceInstanceId), "" === t3 ? t3 : `[${(0, r.QD)(t3)}] `;
        })(this)}${u ?? "anonymous"}.${t2}()`;
        try {
          s.ipcMain ? (0, o.Ow)().debug(d) : (0, o.yg)().debug(d);
        } catch (e3) {
          console.log(d);
        }
        return c2.apply(this, n3);
      }
    }, n2;
  }
  function a(e2) {
    return (t2) => {
      Reflect.defineMetadata(i, e2, t2);
    };
  }
}, 55701(e, t, n) {
  n(22259);
}, 55936(e, t, n) {
  n(84157), n(79896), n(16928), n(7750), n(10284), n(9691), n(8750);
}, 93100(e, t, n) {
  Error;
}, 42494(e, t, n) {
  n(14499);
}, 46699(e, t, n) {
  function s(e2) {
    return null == e2 ? "" : e2 instanceof Error ? e2.message : "string" == typeof e2 ? e2 : "object" == typeof e2 ? e2.message ?? "unknown error" : "unknown error";
  }
  n.d(t, { b: () => s });
}, 41939(e, t, n) {
  n(7750), n(32812), n(95398);
  var s = n(75739);
  /* @__PURE__ */ new Map([["ctrl+Equal", "zoom-in"], ["ctrl+NumpadAdd", "zoom-in"], ["ctrl+Minus", "zoom-out"], ["ctrl+NumpadSubtract", "zoom-out"], ["ctrl+Numpad0", "set-zoom-default"], ["ctrl+Digit0", "set-zoom-default"], [(0, s.iT)() ? "cmd+n" : "ctrl+n", "new-window"], ["ctrl+PageDown", "next-tab"], ["ctrl+Numpad3", "next-tab"], ["ctrl+alt+ArrowRight", "next-tab-darwin"], ["ctrl+tab", "next-tab"], ["ctrl+PageUp", "prev-tab"], ["ctrl+Numpad9", "prev-tab"], ["ctrl+shift+tab", "prev-tab"], ["ctrl+alt+ArrowLeft", "prev-tab-darwin"], [(0, s.iT)() ? "cmd+t" : "ctrl+t", "new-tab"], ["ctrl+Digit1", "set-specific-tab"], ["ctrl+Digit2", "set-specific-tab"], ["ctrl+Digit3", "set-specific-tab"], ["ctrl+Digit4", "set-specific-tab"], ["ctrl+Digit5", "set-specific-tab"], ["ctrl+Digit6", "set-specific-tab"], ["ctrl+Digit7", "set-specific-tab"], ["ctrl+Digit8", "set-specific-tab"], ["ctrl+Digit9", "set-last-tab"], ["ctrl+shift+t", "reopen-tab"], ["ctrl+f4", "close-tab"], ["ctrl+w", "close-tab"], ["ctrl+shift+q", "exit"], ["ctrl+q", "exit-darwin"], ["ctrl+r", "reload-tab"], ["ctrl+u", "duplicate-tab"], ["ctrl+s", "save-snapshot"], ["ctrl+shift+f12", "show-wnd-dev-tools"], ["ctrl+shift+f11", "show-tab-dev-tools"], ["f1", "open-help-center"], ["f5", "reload-tab-no-darwin"], ["f11", "set-full-screen"], ["ctrl+Comma", "show-settings"]]);
}, 19405(e, t, n) {
  function s(e2) {
    let t2, n2 = e2;
    return () => {
      if (n2) {
        const e3 = n2;
        n2 = void 0, t2 = e3();
      }
      return t2;
    };
  }
  n.d(t, { R: () => s });
}, 16793(e, t, n) {
  var s = n(12069), r = (n(34957), n(7750));
  /* @__PURE__ */ Symbol("persistent_field_meta_key"), /* @__PURE__ */ Symbol("persistent_array_meta_key");
  const o = /* @__PURE__ */ Symbol("persistent_constructor_meta_key");
  function i(e2) {
    return null !== e2 && "object" == typeof e2 && "internalApplyState" in e2;
  }
  function c(e2) {
    return class extends e2 {
      changedSubject = new s.Subject();
      changed = this.changedSubject.asObservable();
      changedNotificationsEnabled = true;
      stateIsApplying = false;
      notifyStateChanged() {
        this.changedNotificationsEnabled && !this.stateIsApplying && this.changedSubject.next(this);
      }
      extractState() {
        if (i(this)) return this.internalExtractState();
      }
      applyState(e3) {
        if (this.stateIsApplying) return Promise.reject(new Error("Cannot apply state now (applying already is processed)"));
        this.stateIsApplying = true;
        let t2 = true;
        const n2 = () => {
          this.stateIsApplying = false, "stateApplied" in this && "function" == typeof this.stateApplied && this.stateApplied();
        };
        "beforeStateApplying" in this && "function" == typeof this.beforeStateApplying && this.beforeStateApplying();
        try {
          if (i(this)) {
            const s2 = this.internalApplyState(e3);
            return s2 instanceof Promise && (t2 = false, s2.catch(((e4) => {
              (0, r.Ow)().error("[PersistentObject.applyState()] Failed to restore state", e4);
            })).finally((() => {
              n2();
            }))), s2;
          }
        } finally {
          t2 && n2();
        }
      }
    };
  }
  function a(e2) {
    if ("object" != typeof e2 || null === e2) return false;
    const t2 = (t3) => "function" == typeof Reflect.get(e2, t3);
    return t2("extractState") && t2("applyState") && t2("notifyStateChanged") && "changed" in e2;
  }
  function u(e2) {
    return !(!e2 || "object" != typeof e2) && ("persistentParent" in e2 && "persistentChangedSubscription" in e2);
  }
  function d(e2, t2) {
    Object.defineProperty(t2, "persistentParent", { value: e2, enumerable: false, configurable: true });
    const n2 = t2.changed.subscribe((() => {
      e2.notifyStateChanged();
    }));
    return Object.defineProperty(t2, "persistentChangedSubscription", { value: n2, enumerable: false, configurable: true }), t2;
  }
  function h(e2) {
    e2.persistentChangedSubscription.unsubscribe(), delete e2.persistentChangedSubscription, delete e2.persistentParent;
  }
  let l = class {
    static proxyHandler = { set(e2, t2, n2) {
      if (t2 in e2) return Reflect.set(e2, t2, n2);
      const s2 = Reflect.set(e2.value, t2, n2);
      return e2.notifyStateChanged(), s2;
    }, get: (e2, t2) => t2 in e2 ? Reflect.get(e2, t2) : Reflect.get(e2.value, t2) };
    value;
    constructor(e2) {
      this.value = e2;
    }
    internalExtractState() {
      return this.value;
    }
    internalApplyState(e2) {
      this.value = e2;
    }
  };
  l = (function(e2, t2, n2, s2) {
    var r2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === s2 ? s2 = Object.getOwnPropertyDescriptor(t2, n2) : s2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e2, t2, n2, s2);
    else for (var c2 = e2.length - 1; c2 >= 0; c2--) (r2 = e2[c2]) && (i2 = (o2 < 3 ? r2(i2) : o2 > 3 ? r2(t2, n2, i2) : r2(t2, n2)) || i2);
    return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
  })([c], l);
  var p = n(53524), f = function(e2, t2, n2, s2) {
    var r2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === s2 ? s2 = Object.getOwnPropertyDescriptor(t2, n2) : s2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e2, t2, n2, s2);
    else for (var c2 = e2.length - 1; c2 >= 0; c2--) (r2 = e2[c2]) && (i2 = (o2 < 3 ? r2(i2) : o2 > 3 ? r2(t2, n2, i2) : r2(t2, n2)) || i2);
    return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
  };
  const m = /* @__PURE__ */ (() => {
    const e2 = /^\d+$/;
    return (t2) => e2.test(t2);
  })(), b = [{ key: "pop", modifier: true, closeResultItems: true }, { key: "push", modifier: true, closeResultItems: false, newItemsArgIndex: 0 }, { key: "reverse", modifier: true, closeResultItems: false }, { key: "shift", modifier: true, closeResultItems: true }, { key: "unshift", modifier: true, closeResultItems: false, newItemsArgIndex: 0 }, { key: "splice", modifier: true, closeResultItems: true, newItemsArgIndex: 2 }, { key: "indexOf", modifier: false, closeResultItems: false }, { key: "map", modifier: false, closeResultItems: false }, { key: "filter", modifier: false, closeResultItems: false }];
  let E = class {
    static handler = { set(e2, t2, n2) {
      if (t2 in e2) return Reflect.set(e2, t2, n2);
      if ("string" == typeof t2 && m(t2)) {
        const s2 = Reflect.get(e2.items, t2);
        s2 && u(s2) && h(s2);
        const r2 = a(n2) ? d(e2, n2) : n2, o2 = Reflect.set(e2.items, t2, r2);
        return e2.notifyStateChanged(), o2;
      }
      return Reflect.set(e2.items, t2, n2);
    }, get(e2, t2) {
      if (t2 in e2) return Reflect.get(e2, t2);
      const n2 = b.find(((e3) => e3.key === t2));
      if (!n2) {
        const n3 = Reflect.get(e2.items, t2);
        return "function" != typeof n3 ? n3 : (...n4) => Reflect.get(Array.prototype, t2).apply(e2.items, n4);
      }
      return n2 && n2.modifier ? (...s2) => {
        if (void 0 !== n2.newItemsArgIndex) for (let t3 = n2.newItemsArgIndex; t3 < s2.length; ++t3) {
          const n3 = s2[t3];
          a(n3) && d(e2, n3);
        }
        const r2 = Reflect.get(Array.prototype, t2).apply(e2.items, s2);
        if (r2 && Array.isArray(r2) && n2.closeResultItems) for (const e3 of r2) u(e3) && h(e3);
        return e2.notifyStateChanged(), r2;
      } : (...n3) => Reflect.get(Array.prototype, t2).apply(e2.items, n3);
    } };
    items = [];
    itemConstructor;
    constructor(e2) {
      this.itemConstructor = e2;
    }
    internalExtractState() {
      const e2 = [];
      for (const t2 of this.items) u(t2) ? e2.push(t2.extractState()) : e2.push(t2);
      return e2;
    }
    internalApplyState(e2) {
      if (!this.itemConstructor) return console.error("Do not known how to construct item"), void this.resetItems(e2);
      const t2 = [], n2 = e2.map(((e3) => {
        const n3 = (function(e4, t3, n4) {
          const s2 = Reflect.getMetadata(o, t3);
          return s2 ? new t3(...s2.argsBuilder(e4, n4)) : new t3();
        })(this, this.itemConstructor, e3);
        if (a(n3)) {
          d(this, n3);
          const s2 = n3.applyState(e3);
          s2 instanceof Promise && t2.push(s2);
        }
        return n3;
      }));
      return this.resetItems(n2), 0 !== t2.length ? Promise.all(t2) : void 0;
    }
    resetItems(e2) {
      this.items.forEach(((e3) => {
        u(e3) && h(e3), "dispose" in e3 && e3.dispose();
      })), this.items = e2;
    }
  };
  f([p.F], E.prototype, "internalExtractState", null), f([p.F], E.prototype, "internalApplyState", null), f([p.F], E.prototype, "resetItems", null), E = f([c, (0, p.W)("PersistentArrayProxy")], E), n(75739);
  var g;
  let y = class {
    static {
      g = this;
    }
    static handlers = [];
    context;
    #e = [];
    undoMaxSize;
    entriesChangeEvent = new s.Subject();
    entriesChange = this.entriesChangeEvent.asObservable();
    static registerUndoHandler(e2, t2) {
      g.handlers.push({ command: e2, handler: t2 });
    }
    static undoItemDescription(e2) {
      const t2 = g.handlers.find(((t3) => t3.command === e2.command))?.handler;
      return t2 ? t2.undoItemDescription(e2.command, e2.data) : "undo";
    }
    constructor(e2, t2) {
      this.context = e2, this.undoMaxSize = t2;
    }
    get top() {
      return this.#e.length > 0 ? this.#e[this.#e.length - 1] : void 0;
    }
    get entries() {
      return this.#e;
    }
    push(e2) {
      let t2;
      return this.#e.length === this.undoMaxSize && (t2 = this.#e.shift()), this.#e.push(e2), this.notifyStateChanged(), this.entriesChangeEvent.next(), t2;
    }
    undo() {
      const e2 = this.#e.pop();
      if (!e2) return;
      const t2 = g.handlers.find(((t3) => t3.command === e2.command))?.handler;
      if (!t2) {
        const t3 = `Unregistered undo action (${e2.command})`;
        throw new Error(t3);
      }
      try {
        t2.undo(e2.command, e2.data);
      } finally {
        this.notifyStateChanged(), this.entriesChangeEvent.next();
      }
    }
    clear() {
      this.#e = [];
    }
    internalExtractState() {
      return this.#e;
    }
    internalApplyState(e2) {
      this.#e = e2;
    }
  };
  y = g = (function(e2, t2, n2, s2) {
    var r2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === s2 ? s2 = Object.getOwnPropertyDescriptor(t2, n2) : s2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e2, t2, n2, s2);
    else for (var c2 = e2.length - 1; c2 >= 0; c2--) (r2 = e2[c2]) && (i2 = (o2 < 3 ? r2(i2) : o2 > 3 ? r2(t2, n2, i2) : r2(t2, n2)) || i2);
    return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
  })([c], y);
}, 86216(e, t, n) {
  var s;
  n(87016), n(84157), n(79896), n(87574), n(16928), n(55936), n(75739), n(9691), (function(e2) {
    e2[e2.Prevent = 0] = "Prevent", e2[e2.Inplace = 1] = "Inplace", e2[e2.OpenTab = 2] = "OpenTab", e2[e2.OpenPopup = 3] = "OpenPopup", e2[e2.OpenWindow = 4] = "OpenWindow", e2[e2.OpenExternal = 5] = "OpenExternal";
  })(s || (s = {})), n(61888), /* @__PURE__ */ new Set(["file:", "tvd:"]);
}, 11411(e, t, n) {
  e.exports = n.p + "04ee8a97c23a11ca61f6.ttf";
}, 18262(e, t, n) {
  e.exports = n.p + "e5649d45eab1c9e9b56d.ttf";
}, 31135(e, t, n) {
  e.exports = n.p + "3f49f5755fb3b7008edb.woff2";
}, 77819(e, t, n) {
  e.exports = n.p + "b55576c32bebc9c8a480.ttf";
} }]);
