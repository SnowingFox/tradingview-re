"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[9771], { 31111(t, n, o) {
  o.d(n, { A: () => l });
  var e = o(30050), i = o.n(e), a = o(77259), r = o.n(a)()(i());
  r.push([t.id, ".dialog.options {\n	& > .dialog-title {\n		margin-bottom: 22px;\n	}\n\n	& .dialog-text {\n		margin-top: 24px;\n		margin-bottom: 16px;\n	}\n\n	& > .dialog-buttons {\n		margin-top: 16px;\n	}\n}\n\n.dialog-options {\n	width: 100vw;\n	height: 360px;\n	display: flex;\n	align-items: center;\n	flex-wrap: wrap;\n	gap: 16px 24px;\n	padding: 8px 20px 0;\n	overflow: scroll;\n	overflow-x: hidden;\n	box-sizing: border-box;\n\n	&.ar_AE,\n	&.he_IL,\n	&.zh_CN,\n	&.zh_TW {\n		height: 384px;\n	}\n\n	[dir='ltr'] & {\n		margin-left: calc((100% - 100vw) / 2);\n	}\n\n	[dir='rtl'] & {\n		margin-right: calc((100% - 100vw) / 2);\n	}\n}\n\n.dialog-options::-webkit-scrollbar {\n	width: 8px;\n}\n\n.dialog-options::-webkit-scrollbar-track {\n	border: none;\n	background-color: transparent;\n}\n\n.option {\n	position: relative;\n	width: 249px;\n	height: 160px;\n	display: flex;\n	flex-direction: column;\n	align-items: center;\n	gap: 6px;\n	margin: 0;\n	padding: 0;\n	background-color: transparent;\n	border: none;\n\n	&.selected::after {\n		content: '';\n		position: absolute;\n		top: -5px;\n		width: 259px;\n		height: 173px;\n		box-sizing: border-box;\n		background-color: var(--color-overlay-accent-1-light);\n		border: 2px solid var(--color-border-primary-accent);\n		border-radius: 2px;\n	}\n}\n\n.option-thumbnail {\n	width: 249px;\n	height: 130px;\n	object-fit: contain;\n}\n\n.option-caption {\n	width: 250px;\n	color: var(--color-main-text);\n	text-align: center;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n", ""]);
  const l = r;
}, 69771(t, n, o) {
  o.r(n), o.d(n, { default: () => f });
  var e = o(79474), i = o(62020), a = o(20369), r = o(72539), l = o.n(r), p = o(48560), s = o.n(p), d = o(57148), c = o.n(d), g = o(60251), x = o.n(g), m = o(81263), b = o.n(m), h = o(50892), u = o.n(h), w = o(31111), v = {};
  v.styleTagTransform = u(), v.setAttributes = x(), v.insert = c().bind(null, "head"), v.domAPI = s(), v.insertStyleElement = b(), l()(w.A, v), w.A && w.A.locals && w.A.locals;
  const f = ({ data: t2, inputChange: n2 }) => {
    const { i18n: o2 } = (0, i.Bd)(), [r2, l2] = (0, e.useState)(0);
    return (0, e.useEffect)((() => {
      n2({ options: [t2.options[0]] });
    }), []), e.createElement("div", { className: `dialog-options ${o2.language}` }, t2.options.map((({ data: o3, name: i2 }, p2) => e.createElement("button", { key: i2, className: "option " + (r2 === p2 ? "selected" : ""), onClick: () => {
      return o4 = p2, console.log(`Selected option ${o4} name: ${t2.options[o4].name}`), l2(o4), void n2({ options: [t2.options[o4]] });
      var o4;
    }, tabIndex: -1 }, e.createElement("img", { className: "option-thumbnail", src: String(o3), alt: i2 }), e.createElement(a.o, { tag: "caption", name: "typography-accent-16px-medium", className: "option-caption" }, i2)))));
  };
} }]);
