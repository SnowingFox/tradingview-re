(() => {
  "use strict";
  var t, e = { 38984(t2, e2, n2) {
    var r2 = n2(79474), i2 = n2(48088), s = n2(41493), a = n2(12129), o = n2(22259), c = n2(75739), l = n2(79896), d = n2(16928);
    let h;
    class u {
    }
    function g() {
      if (void 0 === h) {
        console.debug("Initializing TVD bridge");
        try {
          h = (function(t3) {
            const e3 = "" === d.extname(t3) ? `${t3}.node` : t3, r3 = (() => {
              const t4 = (process && "renderer" === process.type ? n2(92920).app : n2(84157).app).getAppPath(), r4 = d.join(t4, "native", e3);
              if (!l.existsSync(r4)) throw new Error(`Module (${e3}) not found`);
              return r4;
            })(), i3 = { exports: {} };
            return process.dlopen(i3, r3), i3.exports;
          })("tvdbridge"), console.log("Got bridge"), Object.defineProperty(h, "available", { value: true, writable: false, configurable: false });
        } catch (t3) {
          throw console.log(t3), h = new Proxy({ available: false, shutdown() {
          } }, new u()), (0, s.b_)("bridge-not-loaded"), new Error("bridge-not-loaded");
        }
      }
      return h;
    }
    var p, b, f;
    !(function(t3) {
      t3[t3.SW_NORMAL = 1] = "SW_NORMAL";
    })(p || (p = {})), (function(t3) {
      t3[t3.None = 0] = "None", t3[t3.Up = 1] = "Up", t3[t3.Down = 2] = "Down";
    })(b || (b = {})), (function(t3) {
      t3[t3.Left = 0] = "Left", t3[t3.Middle = 1] = "Middle", t3[t3.Right = 2] = "Right";
    })(f || (f = {}));
    var w = n2(7750);
    var v = n2(8620), m = n2(92920), T = n2(42952), y = n2(53524), D = n2(9639), S = n2(71457), I = n2(61888), C = n2(71431), E = n2(98260), x = n2(20802);
    function P() {
      return o.f.provideProxy(x.k);
    }
    var R = n2(8750), $ = n2(51144), B = n2(30828), M = n2(24388), O = n2(89978), V = n2(25510), W = (n2(62806), function(t3, e3, n3, r3) {
      var i3, s2 = arguments.length, a2 = s2 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t3, e3, n3, r3);
      else for (var o2 = t3.length - 1; o2 >= 0; o2--) (i3 = t3[o2]) && (a2 = (s2 < 3 ? i3(a2) : s2 > 3 ? i3(e3, n3, a2) : i3(e3, n3)) || a2);
      return s2 > 3 && a2 && Object.defineProperty(e3, n3, a2), a2;
    });
    let k = class extends r2.Component {
      static contextType = B.h;
      windowCountSubscription;
      state = { tabs: null, hoveredTabIndex: null, isLastWindow: false, isTooltipVisibleGlobal: false, lastTabRightBorder: 0, lastTabClickedId: "" };
      id = "";
      tabsMap = /* @__PURE__ */ new Map();
      tabPanelRef = r2.createRef();
      constructor(t3) {
        super(t3), o.f.registerRemoteService(this, S.ct);
      }
      getBounds() {
        const t3 = this.tabPanelRef?.current?.getBoundingClientRect() ?? C.Bd;
        return Promise.resolve({ x: t3.x, y: t3.y, width: t3.width, height: t3.height });
      }
      async componentDidMount() {
        const t3 = async () => {
          try {
            const t4 = (0, C.gO)();
            await t4.registerDroppable(this.id, this.context.windowId), (0, w.yg)().debug(`TabPanel.componentDidMount(): "Registered droppable with id: ${(0, D.QD)(this.id)}"`);
          } catch (t4) {
            (0, w.yg)().error(`Could not register droppable ${(0, D.QD)(this.id)}`, t4);
          }
        };
        this.id || (this.id = o.f.registerRemoteObject(this, S.ct), (async () => {
          for (; !this.context.windowId; ) await (0, c.yy)(100);
        })().then((() => {
          t3(), (0, T.CI)().registerTabPanel(this.id).catch(((t4) => {
            (0, w.yg)().error(`<TabPanel>.componentDidMount(): getWindowControl().registerTabPanel(id: ${this.id})`, t4);
          }));
        })));
        const e3 = async () => {
          const t4 = await P().getCountWindows();
          this.setState({ isLastWindow: 1 === t4 }), this.windowCountSubscription = P().chartWindowSubject.subscribe(((t5) => {
            this.setState({ isLastWindow: 1 === t5 });
          }));
        };
        try {
          await e3();
        } catch (t4) {
          (0, w.yg)().error("<TabPanel>.componentDidMount(): setShowLastTabCloseButton() error", t4);
        }
      }
      componentDidUpdate() {
        const t3 = this.getLastTab();
        if (this.tabPanelRef?.current && t3) {
          this.tabPanelRef.current.scrollLeft = this.tabPanelRef.current.scrollWidth;
          const e3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect().right;
          e3 && e3 !== this.state.lastTabRightBorder && this.setState({ lastTabRightBorder: e3 });
        }
      }
      componentWillUnmount() {
        o.f.unregisterRemoteObject(this.id), this.windowCountSubscription?.unsubscribe(), this.windowCountSubscription = void 0;
      }
      updateTabUrl(t3, e3) {
        return this.setState(((n3) => ({ ...n3, tabs: n3?.tabs?.map(((n4) => n4.id === t3 ? { ...n4, url: e3 } : n4)) ?? [] }))), Promise.resolve();
      }
      updateTabs(t3, e3) {
        if (t3.length > 1) {
          const e4 = t3[t3.length - 1];
          e4.offset && (e4.offset = this.normalizeOffset(e4.id, e4.offset, t3));
        }
        return e3 && this.mouseOverTab(null), this.setState({ tabs: t3 }), Promise.resolve();
      }
      render() {
        return r2.createElement("div", { className: "tabs", ref: this.tabPanelRef }, this.state.tabs && r2.createElement("div", { className: "tabs-container", style: { flexBasis: 250 * this.state.tabs.length + "px" }, onMouseLeave: () => this.mouseLeave() }, this.renderTabs(this.state.tabs)), r2.createElement(M.O, { offset: Math.round(this.state.lastTabRightBorder) }), r2.createElement("div", { id: "placeholder" }), r2.createElement("div", { className: "draggable-area", onDoubleClick: () => {
          (0, T.CI)().toggleMaximize().catch(((t3) => {
            (0, w.yg)().error("<TabPanel>.onDoubleClick(): getWindowControl().toggleMaximize() error", t3);
          }));
        } }));
      }
      mouseLeave() {
        (0, T.CI)().closeTooltip().catch(((t3) => {
          (0, w.yg)().error("<TabPanel>.mouseLeave(): getWindowControl().closeTooltip() error", t3);
        })), this.setState({ isTooltipVisibleGlobal: false }), this.mouseOverTab(null);
      }
      renderTabs(t3) {
        const e3 = (function(t4, e4) {
          if (0 === t4) return V.v.Normal;
          const n3 = e4 / t4;
          return n3 <= 44 ? V.v.XXSmall : n3 <= 75 ? V.v.XSmall : n3 <= 110 ? V.v.Small : V.v.Normal;
        })(t3.length, this.tabPanelRef?.current?.scrollWidth ?? 0);
        return t3.map(((n3, i3) => r2.createElement(O.o, { key: n3.id, setRef: (t4) => this.setTabRef(n3.id, t4), id: n3.id, active: n3.active, pinned: n3.pinned, isChart: n3.isChart ?? false, hideCloseTabButton: this.state.isLastWindow && 1 === t3.length, index: i3, offset: n3.offset, initialWidth: 1 === this.state.tabs?.length ? n3.width : void 0, tabSize: e3, lastTabClickedId: this.state.lastTabClickedId, setLastTabClickedId: (t4) => this.setState({ lastTabClickedId: t4 }), tabsQuantity: this.state.tabs ? this.state.tabs.length : null, isTooltipVisibleGlobal: this.state.isTooltipVisibleGlobal, isTooltipVisibleGlobalChange: (t4) => this.isTooltipVisibleGlobalChange(t4), mouseOverTab: (t4) => this.mouseOverTab(t4), t: this.props.t })));
      }
      setTabRef(t3, e3) {
        this.tabsMap.set(t3, e3);
      }
      getLastTab() {
        if (this.state.tabs && 0 !== this.state.tabs.length) return this.getRealTabsWidth() ? this.state.tabs.reduce(((t3, e3) => {
          if (!t3) return e3;
          const n3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect(), r3 = this.tabsMap.get(e3.id)?.current?.getBoundingClientRect();
          return n3 && r3 ? n3.right > r3.right ? t3 : e3 : n3 ? t3 : e3;
        })) : this.state.tabs[this.state.tabs.length - 1];
      }
      mouseOverTab(t3) {
        this.setState({ hoveredTabIndex: t3 });
      }
      isTooltipVisibleGlobalChange(t3) {
        this.setState({ isTooltipVisibleGlobal: t3 });
      }
      getTabPanelRightBound() {
        let t3 = this.tabPanelRef?.current?.getBoundingClientRect()?.right;
        return t3 && (t3 -= 20), t3;
      }
      getControlsAreaWidth() {
        const t3 = this.tabPanelRef?.current;
        if (!t3 || !t3.lastElementChild) return;
        const e3 = window.innerWidth - t3.lastElementChild.getBoundingClientRect().right;
        return { leftControlWidth: t3.offsetLeft, rightControlWidth: e3 };
      }
      getRealTabsWidth() {
        const t3 = this.tabPanelRef?.current?.lastElementChild?.previousElementSibling;
        if (!t3) return;
        const e3 = t3.getBoundingClientRect().right;
        return e3 ? "darwin" === process.platform ? e3 - this.getDarwinControlWidth() : e3 : void 0;
      }
      getTabsWidth() {
        const t3 = this.getLastTab();
        if (!t3) return;
        let e3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect()?.right;
        return e3 ? (t3.offset && (e3 += t3.offset), "darwin" === process.platform ? e3 - this.getDarwinControlWidth() : e3) : void 0;
      }
      onDragStart(t3) {
      }
      onDragEnd(t3, e3) {
      }
      async onDragOver(t3) {
        const e3 = this.state.tabs, n3 = await this.getDragData();
        if (!e3 || !n3 || !this.state.prevCursorPoint) return;
        const r3 = e3.find(((t4) => t4.id === n3.tabId));
        if (!r3) return void this.attachTab(t3.x, n3.tabId);
        if (1 === this.state.tabs?.length) return;
        const i3 = t3.x - this.state.prevCursorPoint.x;
        if (i3 >= -1 && i3 <= 1) return;
        const s2 = this.tabsMap.get(n3.tabId)?.current;
        if (!s2) return;
        const a2 = s2.getBoundingClientRect();
        if (a2.left > this.state.prevCursorPoint.x || this.state.prevCursorPoint.x > a2.right) return void this.setState({ prevCursorPoint: t3 });
        const o2 = this.getTabPanelRightBound();
        if (!o2) return;
        const c2 = s2.offsetWidth, l2 = s2.getBoundingClientRect().left, d2 = l2 - (r3.offset ?? 0);
        r3.offset = this.getFittingOffset(i3 + (r3.offset ?? 0), d2, c2, o2 - 25), this.setState({ tabs: e3, prevCursorPoint: t3 }), this.onTabMove(n3.tabId, { x: l2, y: 0, width: c2, height: R.tj });
      }
      async onDragEnter(t3) {
        console.log("drag enter"), (0, T.CI)().bringToFront().catch(((t4) => {
          (0, w.yg)().error("<TabPanel>.onDragEnter(): getWindowControl().bringToFront() error", t4);
        }));
        const e3 = await this.getDragData();
        e3 && (1 === this.state.tabs?.length && this.state.tabs.find(((t4) => t4.id === e3.tabId)) ? (0, E.Q)().startWindowDrag(this.context.windowId, e3.tabId, t3) : (this.setState({ prevCursorPoint: t3 }), this.attachTab(t3.x, e3.tabId)));
      }
      async onDragLeave(t3) {
        if (console.log("drag leave"), !this.state.tabs || 1 === this.state.tabs.length) return;
        const e3 = await this.getDragData();
        if (!e3) return;
        const n3 = this.tabsMap.get(e3.tabId)?.current?.getBoundingClientRect(), r3 = this.getTabPanelRightBound();
        if (r3) {
          if (n3) {
            const e4 = Math.round(n3.width / 2);
            t3.x >= r3 - e4 ? t3.x = r3 - e4 : t3.x <= 0 && (t3.x = e4);
          }
          (0, E.Q)().dragTabOut(this.context.windowId, e3.tabId, t3, n3?.width, this.getControlsAreaWidth()), this.resetTabsOffset();
        }
      }
      async onDrop() {
        if (!this.state.tabs) return;
        const t3 = await this.getDragData();
        if (!t3) return;
        const e3 = this.tabsMap.get(t3.tabId)?.current?.getBoundingClientRect();
        if (!e3) return;
        const n3 = e3.left + e3.width / 2, r3 = this.state.tabs.findIndex(((e4) => e4.id === t3.tabId)), i3 = this.getTabIndexByCoordinate(n3);
        if ((0, w.yg)().debug(`<TabPanel>.onDrop(): "New tab index: ${i3}, oldTabIndex: ${r3}"`), setTimeout((() => {
          (0, T.CI)().resetTabs().catch(((t4) => {
            (0, w.yg)().error("<TabPanel>.onDrop(): getWindowControl().resetTabs() error", t4);
          })), this.resetTabsOffset();
        }), 100), !(r3 < 0 || i3 < 0) && r3 !== i3) {
          const { pinned: t4 } = this.state.tabs[r3];
          this.onDropControllerToMoveTab({ oldIndex: r3, newIndex: i3, tabs: this.state.tabs, isPinned: t4 }).catch(((t5) => {
            (0, w.yg)().error("<TabPanel>.onDrop(): this.onDropControllerToMoveTab()", t5);
          }));
        }
      }
      async onDropControllerToMoveTab({ oldIndex: t3, newIndex: e3, tabs: n3, isPinned: r3 }) {
        let i3 = e3;
        const s2 = n3.findIndex((({ pinned: t4 }) => !t4));
        r3 ? -1 !== s2 && e3 >= s2 ? i3 = s2 - 1 : e3 >= n3.length && (i3 = n3.length - 1) : e3 < s2 ? i3 = s2 : e3 >= n3.length && (i3 = n3.length - 1), this.mouseOverTab(i3), await (0, T.CI)().moveTab(t3, i3);
      }
      getTabIndexByCoordinate(t3, e3) {
        if (!this.state.tabs) return -1;
        const n3 = this.getRealTabsWidth();
        if (!n3) return -1;
        const r3 = n3 / (e3 ?? this.state.tabs.length), i3 = "darwin" === process.platform ? t3 - this.getDarwinControlWidth() : t3, s2 = Math.floor(i3 / r3);
        return Math.min(s2, e3 ?? this.state.tabs.length);
      }
      resetTabsOffset() {
        this.isTooltipVisibleGlobalChange(false), this.setState(((t3) => ({ ...t3, tabs: (0, $.V)(t3.tabs) })));
      }
      onTabMove(t3, e3) {
        const n3 = this.state.tabs;
        if (!n3) return;
        const r3 = Math.min(this.getHoveredTab(e3), n3.length - 1), i3 = (0, $.H)(t3, e3.width, r3, n3);
        i3 && this.setState({ tabs: i3.tabState });
      }
      attachTab(t3, e3) {
        const n3 = this.state.tabs;
        if (!n3) return;
        if (n3.find(((t4) => t4.id === e3))) return void (0, w.yg)().debug('TabPanel.attachTab(): "Skipping tab attach, tab already belongs to current window"');
        const r3 = this.getTabsWidth();
        if (!r3) return;
        const i3 = n3.length, s2 = this.getTabIndexByCoordinate(t3, i3 + 1);
        if (s2 < 0) return;
        (0, w.yg)().debug(`TabPanel.attachTab(): "Tabswidth: ${r3}, tabs count: ${i3}"`);
        let a2 = 0;
        console.log(`newtabindex: ${s2}, tabscount: ${i3}`), s2 === i3 + 1 && (a2 = t3 - r3 / (i3 + 1) / 2 - r3 - I.Js, a2 < 0 && (a2 = 0)), (0, E.Q)().dragTabIn(this.context.windowId, s2, a2);
      }
      getFittingOffset(t3, e3, n3, r3) {
        if ((0, c.iT)() && this.context.windowStateSubject.value !== R.y7.Fullscreen && e3 + t3 <= this.getDarwinControlWidth()) return -e3 + this.getDarwinControlWidth();
        if (e3 + t3 <= 0) return -e3;
        if (e3 + n3 + t3 >= r3) {
          const t4 = r3 - e3 - n3;
          return t4 < 0 ? 0 : t4;
        }
        return t3;
      }
      normalizeOffset(t3, e3, n3) {
        (0, w.yg)().debug(`TabPanel.normalizeOffset(): "will normalize tab offset ${e3}"`);
        const r3 = this.tabsMap.get(t3)?.current, i3 = this.getTabsWidth();
        if (!i3) return e3;
        const s2 = this.getTabPanelRightBound();
        if (!s2) return (0, w.yg)().warn('TabPanel.normalizeOffset(): "No tab panel right bound"'), e3;
        const a2 = i3 / (r3 ? n3.length : n3.length - 1), o2 = r3 ? r3.getBoundingClientRect().left : i3;
        return (0, w.yg)().debug(`TabPanel.normalizeOffset(): "Tab width: ${a2}, tabs right bound: ${i3}, tab left: ${o2}, tabs count: ${n3.length}, panel right bound: ${s2}"`), this.getFittingOffset(e3, o2, a2, s2);
      }
      async getDragData() {
        return (0, C.gO)().getDragData();
      }
      getHoveredTab(t3) {
        return this.getTabIndexByCoordinate(t3.x + t3.width / 2);
      }
      getDarwinControlWidth() {
        return this.context.isRtlSystem ? 0 : I.mX;
      }
    };
    function A(t3) {
      return g().hardware.getButtonState(t3);
    }
    W([y.F], k.prototype, "updateTabUrl", null), W([y.F], k.prototype, "updateTabs", null), k = W([(0, y.W)("TabPanel")], k);
    var j = n2(12069), N = n2(46611), F = n2(62340);
    const L = (t3, e3, n3 = 0) => t3.x - n3 <= e3.x && t3.x + n3 + t3.width > e3.x && t3.y - n3 <= e3.y && t3.y + n3 + t3.height > e3.y;
    function z(t3, e3) {
      return { x: t3.x - e3.x, y: t3.y - e3.y };
    }
    let Q;
    function H(t3) {
      return (e3) => new j.Observable(((n3) => {
        const r3 = e3.subscribe(n3);
        return () => {
          r3.unsubscribe(), t3();
        };
      }));
    }
    class U {
      screen;
      onMotionSubject = new j.Subject();
      onButtonsSubject = new j.Subject();
      motionInterval;
      buttonsInterval;
      buttonsPollInv = 20;
      constructor(t3) {
        this.screen = t3;
      }
      onMotion() {
        return this.motionInterval || this.createMotionTracker(), this.onMotionSubject.pipe(H((() => this.stopCapturing())));
      }
      onButtons() {
        return this.buttonsInterval || this.createButtonsTracker(), this.onButtonsSubject.pipe(H((() => this.stopCapturing())));
      }
      createMotionTracker() {
        this.motionInterval || (this.motionInterval = setInterval((() => {
          const t3 = this.screen.getCursorScreenPoint();
          this.onMotionSubject.next({ screenPoint: t3, offset: { x: 0, y: 0 } });
        }), 2));
      }
      createButtonsTracker() {
        this.buttonsInterval || (this.buttonsInterval = setInterval((() => {
          const t3 = A(f.Left) ? b.Down : b.Up;
          this.onButtonsSubject.next({ left: t3, right: b.None, middle: b.None });
        }), this.buttonsPollInv));
      }
      stopCapturing() {
        0 === this.onButtonsSubject.observers.length && 0 === this.onMotionSubject.observers.length && this.resetIntervals();
      }
      resetIntervals() {
        this.motionInterval && (clearInterval(this.motionInterval), this.motionInterval = void 0), this.buttonsInterval && (clearInterval(this.buttonsInterval), this.buttonsInterval = void 0);
      }
    }
    class _ {
      captureInterop;
      onMotionSubject = new j.Subject();
      onButtonsSubject = new j.Subject();
      constructor() {
        this.captureInterop = g().hardware?.capturePointer(), this.captureInterop.setButtonsEventCallback(((t3) => {
          this.onButtonsSubject.next(t3);
        })), this.captureInterop.setMotionEventCallback(((t3) => {
          this.onMotionSubject.next(t3);
        }));
      }
      onMotion() {
        if (!this.captureInterop) throw new Error("Capturer object disposed");
        return this.captureInterop.startCapturing(), this.onMotionSubject.pipe((0, N.F)(((t3, e3) => {
          return n3 = t3.screenPoint, r3 = e3.screenPoint, n3.x >= r3.x - 2 && n3.x <= r3.x + 2 && n3.y >= r3.y - 2 && n3.y <= r3.y + 2;
          var n3, r3;
        })), (0, N.BL)(2), H((() => this.stopCapturing())));
      }
      onButtons() {
        if (!this.captureInterop) throw new Error("Capturer object disposed");
        return this.captureInterop.startCapturing(), this.onButtonsSubject.pipe(H((() => () => this.stopCapturing())));
      }
      stopCapturing() {
        0 === this.onButtonsSubject.observers.length && 0 === this.onMotionSubject.observers.length && this.captureInterop?.stopCapturing();
      }
    }
    var q = n2(92763);
    class G {
      bufferDelay = 20;
      state = {};
      stateChangedSubject = new j.Subject();
      stateChanged = this.stateChangedSubject.asObservable();
      setState(t3, e3 = true) {
        if (0 === Object.keys(this.state ?? {}).length) return;
        const n3 = Object.getOwnPropertyNames(t3);
        if (0 !== n3.length) {
          for (const e4 of n3) this.state[e4] = t3[e4];
          e3 && this.stateChangedSubject.next(this.state);
        }
      }
    }
    class X {
      screen;
      isScaleDefault = true;
      scaleChangeSubscription;
      constructor(t3, e3) {
        this.screen = t3, this.updateScaleStatus(), this.scaleChangeSubscription = e3.displayScaleChange.subscribe(((t4) => {
          this.isScaleDefault = 1 === t4.scaleFactor;
        }));
      }
      dispose() {
        this.scaleChangeSubscription.unsubscribe();
      }
      fromMotionEventToScreenPoint(t3) {
        let e3 = t3.screenPoint;
        return "linux" === process.platform && (e3 = this.formatPointIntoUbuntuFormat(t3.screenPoint)), "win32" === process.platform && (e3 = this.screen.screenToDipPoint(t3.screenPoint)), e3.x = Math.floor(e3.x), e3.y = Math.floor(e3.y), e3;
      }
      updateScaleStatus() {
        this.isScaleDefault = !this.screen.getAllDisplays().some(((t3) => 1 !== t3.scaleFactor));
      }
      formatPointIntoUbuntuFormat(t3) {
        return true === this.isScaleDefault ? t3 : { x: t3.x / 2, y: t3.y / 2 };
      }
    }
    var J, Z = function(t3, e3, n3, r3) {
      var i3, s2 = arguments.length, a2 = s2 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t3, e3, n3, r3);
      else for (var o2 = t3.length - 1; o2 >= 0; o2--) (i3 = t3[o2]) && (a2 = (s2 < 3 ? i3(a2) : s2 > 3 ? i3(e3, n3, a2) : i3(e3, n3)) || a2);
      return s2 > 3 && a2 && Object.defineProperty(e3, n3, a2), a2;
    };
    !(function(t3) {
      t3[t3.NoDrag = 0] = "NoDrag", t3[t3.DragStarted = 10] = "DragStarted", t3[t3.InDrag = 20] = "InDrag", t3[t3.DragEnded = 30] = "DragEnded";
    })(J || (J = {}));
    let Y = class extends G {
      remoteInstanceId;
      deltaValue = 30;
      pointConverter;
      capturer;
      appElements = [];
      handlers = [];
      lockAppElements;
      buttonSubscription;
      cursorSubscription;
      dropTarget;
      draggedElement;
      dragData;
      isDestroyed = false;
      actionQueue = [];
      constructor() {
        super(), (0, w.yg)().info("Creating drag service"), (0, T.yo)(), this.resetState(), this.pointConverter = new X(m.screen, o.f.provideProxy("tvd:main-service")), this.capturer = (function() {
          if (!Q) if ((0, F.iT)()) {
            const t3 = n2(92920).screen;
            Q = new U(t3);
          } else Q = new _();
          return Q;
        })(), this.handlers.push((0, E.Q)()), (0, q.uY)(this.watchActions()), this.stateChanged.subscribe({ next: (t3) => {
          this.onStateUpdated(t3);
        } });
      }
      onStateUpdated(t3) {
        let e3 = t3.stage ?? J.NoDrag, n3 = () => Promise.resolve();
        t3.isRequestedDragStart && !t3.isInDrag && (e3 = J.DragStarted, n3 = this.handleDragStart), t3.isInDrag && (t3.leftPressed ? (e3 = J.InDrag, n3 = this.handleDrag) : (e3 = J.DragEnded, n3 = this.handleDragEnd));
        const r3 = { value: e3, atomic: e3 !== J.InDrag, run: n3.bind(this) };
        this.actionQueue.push({ dragAction: r3, stateSnapshot: t3 });
      }
      async watchActions() {
        for (; !this.isDestroyed; ) try {
          if (0 === this.actionQueue.length) {
            await (0, q.yy)(1);
            continue;
          }
          let t3;
          this.actionQueue.length >= 10 && (this.actionQueue = this.reduceActions(this.actionQueue));
          let e3 = false, n3 = 0;
          for (; !e3 && n3 <= this.actionQueue.length - 1; ) {
            t3 = this.actionQueue.shift();
            const r3 = t3 && t3.dragAction.value < this.state.lastDragAction && t3.dragAction.value !== J.NoDrag, i3 = t3 && t3.dragAction.value === this.state.lastDragAction && t3.dragAction.atomic;
            !t3 || r3 || i3 ? n3++ : e3 = true;
          }
          if (!e3 || !t3) {
            await (0, q.yy)(1);
            continue;
          }
          console.log(`Last action: ${this.mapActionToString(this.state.lastDragAction)}, will do action: ${this.mapActionToString(t3.dragAction.value)}`), this.setState({ lastDragAction: t3.dragAction.value }, false), await t3.dragAction.run(t3.stateSnapshot), console.log(`Handled action: ${this.mapActionToString(t3.dragAction.value)}`);
        } catch (t3) {
          (0, w.yg)().error("[NativeDragService:watchActions] error in main cycle", t3);
        }
      }
      mapActionToString(t3) {
        switch (t3) {
          case J.NoDrag:
            return "NoDrag";
          case J.InDrag:
            return "InDrag";
          case J.DragStarted:
            return "DragStart";
          case J.DragEnded:
            return "DragEnd";
          default:
            return "";
        }
      }
      reduceActions(t3) {
        let e3 = 0;
        const n3 = [];
        n3.push(t3[0]);
        for (let i3 = 0; i3 < t3.length - 2; i3++) {
          const s2 = t3[i3], a2 = t3[i3 + 1];
          r3 = a2, s2.dragAction.value !== r3.dragAction.value || e3 >= 5 ? (n3.push(a2), e3 = 0) : (n3[n3.length - 1] = a2, e3++);
        }
        var r3;
        return n3;
      }
      async startDrag(t3) {
        this.state.isInDrag && ((0, w.yg)().warn("[NativeDragService:startDrag] Incorrect drag state, will call reset"), this.resetState()), (0, w.yg)().info(`Starting drag tab [${(0, D.QD)(t3)}]`), this.subscribeToPointerCapture();
        const e3 = this.lockAppElements ? await this.lockAppElements : this.appElements, n3 = await P().getDragElements(), r3 = e3.filter(((t4) => !n3.includes(t4.id)));
        if (r3.length > 0) for (const t4 of r3) await this.unregister(t4.id);
        await this.lockAppElements;
        for (const t4 of e3) try {
          t4.cachedWindowBounds = await t4.window.getWindowBounds();
        } catch (e4) {
          console.warn("[NativeDragService:startDrag] Error getting window bounds"), console.log(e4), this.unregister(t4.id);
        }
        this.dragData = { tabId: t3 }, this.setState({ position: this.state.position, isRequestedDragStart: true, dragStartElementId: t3 });
      }
      resetState() {
        this.state = { isInDrag: false, leftPressed: this.state.leftPressed, isRequestedDragStart: void 0, position: void 0, lastDragAction: J.NoDrag }, this.draggedElement = void 0, this.appElements.forEach(((t3) => {
          t3.cachedWindowBounds = void 0;
        })), this.dropTarget = void 0, this.unsubscripeFromPointerCapture();
      }
      getIsInDrag() {
        return this.state.isInDrag && this.state.leftPressed;
      }
      getDragData() {
        return this.dragData;
      }
      setDragData(t3) {
        this.dragData = t3;
      }
      getCursorPosition() {
        return this.state.position;
      }
      registerHandler(t3) {
        this.handlers.push(t3);
      }
      async registerDraggable(t3, e3) {
        await this.registerElement(t3, e3, { draggable: true });
      }
      async registerDroppable(t3, e3) {
        await this.registerElement(t3, e3, { droppable: true });
      }
      async unregister(t3) {
        (0, w.yg)().debug(`NativeDragService.unregister(): "Will unregister: ${(0, D.QD)(t3)}"`), this.lockAppElements && await this.lockAppElements, this.lockAppElements = new Promise(((e3) => {
          this.clearElements(t3), e3(this.appElements);
        }));
      }
      async getHoveredWindowBounds() {
        if (!this.state.position) return;
        const t3 = await P().getActiveWindowsBounds();
        for (const e3 of t3) if (L(e3.bounds, this.state.position)) return e3;
        return t3[0];
      }
      async handleDragStart(t3) {
        if (!t3.position || !t3.dragStartElementId) return void (0, w.yg)().warn(`Abort drag start: position = ${JSON.stringify(t3.position)}, dragStartElementId = ${JSON.stringify(t3.dragStartElementId)}`);
        const e3 = this.appElements.find(((e4) => e4.id === t3.dragStartElementId && e4.draggable));
        if (!e3?.cachedWindowBounds) return void console.error("no dragged element or no cached bounds");
        let n3 = z(t3.position, e3.cachedWindowBounds);
        const r3 = await e3.remoteInstance.getBounds();
        n3 = { x: Math.min(Math.abs(n3.x), r3.x + r3.width), y: Math.min(Math.abs(n3.y), r3.y + r3.height) }, await e3.remoteInstance.onDragStart(n3), this.draggedElement = e3;
        const i3 = await this.findElement(((t4) => !!t4.droppable), await e3.window.getWindowId(), n3, this.deltaValue);
        i3 && (await i3.remoteInstance.onDragEnter(n3), this.dropTarget = i3), this.setState({ isInDrag: true, isRequestedDragStart: false, dragStartElementId: void 0 }, false), this.handlers.forEach(((t4) => t4.handleDragStart()));
      }
      async handleDragEnd(t3) {
        if (!t3.position) return void (0, w.yg)().warn("Abort drag end");
        let e3 = "";
        const n3 = await this.getHoveredWindowBounds();
        if (n3) {
          const r3 = z(t3.position, n3.bounds), i3 = await this.findElement(((t4) => !!t4.droppable), n3.id, r3, this.deltaValue);
          i3 && (await i3.remoteInstance.onDrop(r3), e3 = i3.id);
        }
        if (this.draggedElement?.cachedWindowBounds) {
          const n4 = z(t3.position, this.draggedElement.cachedWindowBounds);
          await this.draggedElement.remoteInstance.onDragEnd(n4, e3);
        }
        this.draggedElement = void 0, this.appElements.forEach(((t4) => {
          t4.cachedWindowBounds = void 0;
        })), this.setState({ isInDrag: false }), this.unsubscripeFromPointerCapture(), this.dropTarget = void 0, this.handlers.forEach(((t4) => t4.handleDragEnd()));
      }
      async handleDrag(t3) {
        const e3 = await this.getHoveredWindowBounds();
        if (!t3.position || !e3) return;
        const n3 = z(t3.position, e3.bounds);
        let r3;
        if (this.dropTarget) {
          const e4 = this.dropTarget.cachedWindowBounds ?? await this.dropTarget.window.getWindowBounds();
          r3 = z(t3.position, e4);
        }
        const i3 = await this.findElement(((t4) => !!t4.droppable), e3.id, n3, this.deltaValue);
        if (i3) return this.dropTarget ? void (this.dropTarget.id !== i3.id ? (r3 && await this.dropTarget.remoteInstance.onDragLeave(r3), await i3.remoteInstance.onDragEnter(n3), this.dropTarget = i3) : await i3.remoteInstance.onDragOver(n3)) : (await i3.remoteInstance.onDragEnter(n3), void (this.dropTarget = i3));
        this.dropTarget && r3 && (await this.dropTarget.remoteInstance.onDragLeave(r3), this.dropTarget = void 0);
      }
      async findElement(t3, e3, n3, r3) {
        const i3 = this.lockAppElements ? await this.lockAppElements : this.appElements;
        for (const s2 of i3) {
          if (!(this.lockAppElements ? await this.lockAppElements : this.appElements).includes(s2)) continue;
          if (await s2.window.disposed()) continue;
          const i4 = await s2.window.getAllowMouseEvents(), a2 = await s2.window.getWindowId();
          if (t3(s2) && i4 && a2 === e3) try {
            const t4 = await s2.remoteInstance.getBounds(), e4 = (0, F.iT)() && !("rtl" === window.document.dir), i5 = n3.x < 8 + I.mX;
            if (e4 && i5 && (t4.x = t4.x + r3 + 8), L(t4, n3, r3)) return s2;
          } catch (t4) {
            (0, w.yg)().error(`[NativeDragService.findElement()] Error getting element bounds for ${s2.id}`, t4), this.unregister(s2.id);
          }
        }
      }
      async registerElement(t3, e3, n3) {
        let r3;
        try {
          r3 = o.f.provideProxy(t3);
        } catch (e4) {
          return void (0, w.yg)().error(`[NativeDragService.registerElement()] Failed to register ${t3}`, e4);
        }
        const i3 = o.f.provideProxy(e3);
        if (!i3) return void console.warn(`Could not find window with id: ${e3}`);
        const s2 = { id: t3, remoteInstance: r3, window: i3, droppable: n3?.droppable, draggable: n3?.draggable };
        this.lockAppElements && await this.lockAppElements, this.lockAppElements = new Promise(((t4) => {
          this.appElements.push(s2), t4(this.appElements);
        }));
      }
      clearElements(t3) {
        const e3 = [];
        for (const n3 of this.appElements) n3.id !== t3 && e3.push(n3);
        return this.draggedElement?.id === t3 && (this.draggedElement = void 0), this.dropTarget?.id === t3 && (this.dropTarget = void 0), this.appElements = e3, this.appElements;
      }
      subscribeToPointerCapture() {
        this.state.leftPressed = A(f.Left), this.state.position = m.screen.getCursorScreenPoint(), (0, w.yg)().debug(`Initial drag state prepared: leftPressed = ${this.state.leftPressed}, position = ${JSON.stringify(this.state.position)}`), this.buttonSubscription || (this.buttonSubscription = this.capturer.onButtons().subscribe(((t3) => {
          t3.left === b.Down ? this.setState({ leftPressed: true }) : t3.left === b.Up ? this.setState({ leftPressed: false, lastDragAction: J.NoDrag }) : (0, w.yg)().warn("Received ButtonEvent.None event");
        }))), this.cursorSubscription || (this.cursorSubscription = this.capturer.onMotion().subscribe(((t3) => {
          this.setState({ position: this.pointConverter.fromMotionEventToScreenPoint(t3) });
        })));
      }
      unsubscripeFromPointerCapture() {
        this.cursorSubscription?.unsubscribe(), this.buttonSubscription?.unsubscribe(), this.cursorSubscription = void 0, this.buttonSubscription = void 0;
      }
      dispose() {
        this.isDestroyed = true, this.pointConverter.dispose(), this.unsubscripeFromPointerCapture();
      }
    };
    Z([y.F], Y.prototype, "setDragData", null), Z([y.F], Y.prototype, "registerHandler", null), Z([y.F], Y.prototype, "registerDraggable", null), Z([y.F], Y.prototype, "registerDroppable", null), Z([y.F], Y.prototype, "handleDragStart", null), Z([y.F], Y.prototype, "handleDragEnd", null), Y = Z([(0, o.x)(v.qf, o.f.getProvider()), (0, y.W)("NativeDragService")], Y), o.f.initializeRpc(), n2(14448), (0, s.F$)(), (0, a.z)(3e3), (function() {
      g().diagnostics.setLogHandler(((t4, e3) => {
        switch (e3) {
          case w.$b.Debug:
            (0, w.Ow)().debug(t4);
            break;
          case w.$b.Warn:
            (0, w.Ow)().warn(t4);
            break;
          case w.$b.Error:
            (0, w.Ow)().error(t4);
            break;
          case w.$b.Info:
          default:
            (0, w.Ow)().info(t4);
        }
      })), console.log("Initialized native interop");
      const t3 = o.f.provide(v.qf);
      window.addEventListener("beforeunload", (() => {
        console.warn("Disposing drag services"), t3?.dispose(), (function() {
          if (void 0 !== typeof h) try {
            g().shutdown();
          } catch {
          }
        })();
      }));
    })();
    const K = document.getElementById("root");
    K && (0, i2.H)(K).render(r2.createElement(r2.Fragment, null));
  }, 22259(t2, e2, n2) {
    function r2(t3, e3) {
      return (n3) => {
        const r3 = /* @__PURE__ */ (() => {
          let t4 = null;
          return (...e4) => (e4.length > 0 && console.error(`Service (${n3.name}) exposed as singleton and can not accept any construction arguments.`), null === t4 && (t4 = new n3()), t4);
        })();
        e3.registerFactory(t3, r3);
      };
    }
    n2.d(e2, { x: () => r2, f: () => i2 }), n2(34957);
    var i2 = n2(56039);
  }, 21383(t2, e2, n2) {
    n2.d(e2, { $: () => i2, k: () => r2 });
    const r2 = "tvd:logger-service";
    var i2;
    !(function(t3) {
      t3[t3.Debug = 0] = "Debug", t3[t3.Info = 1] = "Info", t3[t3.Warn = 2] = "Warn", t3[t3.Error = 3] = "Error";
    })(i2 || (i2 = {}));
  }, 7750(t2, e2, n2) {
    n2.d(e2, { $b: () => s.$, Ow: () => o, di: () => a, yg: () => c });
    var r2 = n2(84157), i2 = n2(22259), s = n2(21383);
    function a() {
      return r2.ipcMain ? i2.f.getProvider().provide(s.k) : i2.f.provideProxy(s.k);
    }
    function o() {
      return i2.f.provide(s.k);
    }
    function c() {
      return i2.f.provideProxy(s.k);
    }
  }, 9639(t2, e2, n2) {
    function r2(t3) {
      return t3 ? t3.length ? t3.split("-")[0] : t3 : "";
    }
    n2.d(e2, { QD: () => r2 }), n2(51022), n2(21383);
  }, 10284(t2, e2, n2) {
    n2(84157), n2(79896), n2(16928), n2(7750), n2(33077);
  }, 41493(t2, e2, n2) {
    n2.d(e2, { F$: () => r2.F, NA: () => s.NA, ZQ: () => s.ZQ, b_: () => i2.b });
    var r2 = n2(30190), i2 = n2(94231), s = n2(86434);
  }, 94231(t2, e2, n2) {
    n2.d(e2, { b: () => i2 });
    var r2 = n2(48927);
    function i2(t3) {
      (0, r2.o5)().setTag("customError", t3);
    }
  }, 71457(t2, e2, n2) {
    n2.d(e2, { N1: () => i2, ct: () => r2 });
    const r2 = "tvd:tabs-container", i2 = "tvd:tab";
  }, 32812(t2, e2, n2) {
    n2(22259);
  }, 8620(t2, e2, n2) {
    n2.d(e2, { Bd: () => a, gO: () => s, qf: () => i2 });
    var r2 = n2(22259);
    const i2 = "tvd:drag-service";
    function s() {
      return r2.f.provideProxy(i2);
    }
    const a = { x: 0, y: 0, width: 0, height: 0 };
  }, 8750(t2, e2, n2) {
    n2.d(e2, { Lz: () => a, jm: () => o, tj: () => r2, y7: () => i2 });
    const r2 = 34;
    var i2, s, a, o;
    !(function(t3) {
      t3[t3.Normal = 0] = "Normal", t3[t3.Maximized = 1] = "Maximized", t3[t3.Minimized = 2] = "Minimized", t3[t3.Hidden = 3] = "Hidden", t3[t3.Fullscreen = 4] = "Fullscreen", t3[t3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(i2 || (i2 = {})), (function(t3) {
      t3.Basic = "basic", t3.Options = "options", t3.Credentials = "credentials", t3.SignIn = "sign-in", t3.Settings = "settings", t3.SaveChanges = "save-changes", t3.Welcome = "welcome";
    })(s || (s = {})), (function(t3) {
      t3.Show = "show", t3.Move = "move";
    })(a || (a = {})), (function(t3) {
      t3[t3.Basic = 0] = "Basic", t3[t3.ChartData = 1] = "ChartData";
    })(o || (o = {}));
  }, 1820(t2, e2, n2) {
    n2.d(e2, { oh: () => r2 });
    const r2 = "tvd:common-view-ready";
  }, 51022(t2, e2, n2) {
    n2(87016);
    var r2 = n2(19405);
    const i2 = "TARGET_TVD_HOST", s = "https://www.tradingview.com/", a = (0, r2.R)((() => {
      const t3 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let e3 = s;
      return i2 in process.env && (e3 = process.env[i2] ?? s), null !== new RegExp(t3, "i").exec(e3) ? t3 : (e3.endsWith("/") && (e3 = e3?.substring(0, e3.length - 1)), e3.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
    }));
    function o(t3, e3 = true) {
      const n3 = (t4) => {
        let n4 = t4.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
        return n4.match(/\w+(\/\((\.\*\)))/gi) && (n4 = n4.replace(/\/\((\.\*\))/gi, "(/(.*))?")), n4 = n4.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a()), n4 = `^${n4}${e3 ? "$" : ""}`, new RegExp(n4, "i");
      };
      return "string" == typeof t3 ? n3(t3) : t3.map(n3);
    }
    const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", l = "${TV}/(\\w|-)*screener/*", d = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
    (0, r2.R)((() => o(l))), (0, r2.R)((() => o("${TV}/", true))), (0, r2.R)((() => o("${TV}/chart/", true))), (0, r2.R)((() => o(c))), (0, r2.R)((() => o("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, r2.R)((() => o(d, true))), (0, r2.R)((() => o("${TV}/screener/*"))), (0, r2.R)((() => o("${TV}/heatmap/*"))), (0, r2.R)((() => o("${TV}/community/*"))), (0, r2.R)((() => o("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, r2.R)((() => o("${TV}/pine-script-reference/v5/"))), (0, r2.R)((() => o("${TV}/x/*"))), (0, r2.R)((() => o("${TV}/*"))), (0, r2.R)((() => o("${TV}/account-recovery/*"))), (0, r2.R)((() => o("${TV}/chat/*"))), (0, r2.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, r2.R)((() => o("${TV}/pine/*"))), (0, r2.R)((() => o("${TV}/markets/*"))), (0, r2.R)((() => o("${TV}/markets/*/news/"))), (0, r2.R)((() => o("${TV}/markets/stocks-*/*"))), (0, r2.R)((() => o("${TV}/markets/world-economy/*"))), (0, r2.R)((() => o("${TV}/u/TradingView/"))), (0, r2.R)((() => o("${TV}/news/*"))), (0, r2.R)((() => o("${TV}/news/"))), (0, r2.R)((() => o("${TV}/news/\\?market=*"))), (0, r2.R)((() => o("${TV}/news/\\?market=topstories"))), (0, r2.R)((() => o("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, r2.R)((() => o("${TV}/support/*"))), (0, r2.R)((() => o("https://status.tradingview.com/", true))), (0, r2.R)((() => o("${TV}/ideas/*"))), (0, r2.R)((() => o("${TV}/scripts/*"))), (0, r2.R)((() => o(["${TV}/", "${TV}/ideas/*", d, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, r2.R)((() => o("${TV}/markets/bonds/*"))), (0, r2.R)((() => o([c, l, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
  }, 84157(t2) {
    t2.exports = require("electron");
  }, 79896(t2) {
    t2.exports = require("fs");
  }, 16928(t2) {
    t2.exports = require("path");
  }, 87016(t2) {
    t2.exports = require("url");
  } }, n = {};
  function r(t2) {
    var i2 = n[t2];
    if (void 0 !== i2) return i2.exports;
    var s = n[t2] = { id: t2, exports: {} };
    return e[t2].call(s.exports, s, s.exports, r), s.exports;
  }
  r.m = e, t = [], r.O = (e2, n2, i2, s) => {
    if (!n2) {
      var a = 1 / 0;
      for (d = 0; d < t.length; d++) {
        for (var [n2, i2, s] = t[d], o = true, c = 0; c < n2.length; c++) (false & s || a >= s) && Object.keys(r.O).every(((t2) => r.O[t2](n2[c]))) ? n2.splice(c--, 1) : (o = false, s < a && (a = s));
        if (o) {
          t.splice(d--, 1);
          var l = i2();
          void 0 !== l && (e2 = l);
        }
      }
      return e2;
    }
    s = s || 0;
    for (var d = t.length; d > 0 && t[d - 1][2] > s; d--) t[d] = t[d - 1];
    t[d] = [n2, i2, s];
  }, r.n = (t2) => {
    var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
    return r.d(e2, { a: e2 }), e2;
  }, r.d = (t2, e2) => {
    for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, r.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  })(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, (() => {
    var t2;
    r.g.importScripts && (t2 = r.g.location + "");
    var e2 = r.g.document;
    if (!t2 && e2 && (e2.currentScript && "SCRIPT" === e2.currentScript.tagName.toUpperCase() && (t2 = e2.currentScript.src), !t2)) {
      var n2 = e2.getElementsByTagName("script");
      if (n2.length) for (var i2 = n2.length - 1; i2 > -1 && (!t2 || !/^http(s?):/.test(t2)); ) t2 = n2[i2--].src;
    }
    if (!t2) throw new Error("Automatic publicPath is not supported in this browser");
    t2 = t2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t2 + "../../";
  })(), (() => {
    r.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var t2 = { 7354: 0 };
    r.O.j = (e3) => 0 === t2[e3];
    var e2 = (e3, n3) => {
      var i2, s, [a, o, c] = n3, l = 0;
      if (a.some(((e4) => 0 !== t2[e4]))) {
        for (i2 in o) r.o(o, i2) && (r.m[i2] = o[i2]);
        if (c) var d = c(r);
      }
      for (e3 && e3(n3); l < a.length; l++) s = a[l], r.o(t2, s) && t2[s] && t2[s][0](), t2[s] = 0;
      return r.O(d);
    }, n2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    n2.forEach(e2.bind(null, 0)), n2.push = e2.bind(null, n2.push.bind(n2));
  })(), r.nc = void 0;
  var i = r.O(void 0, [3703, 2252, 369, 4870, 156, 7627, 1843, 3409, 1892, 3173], (() => r(38984)));
  i = r.O(i);
})();
