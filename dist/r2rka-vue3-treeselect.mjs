import { defineComponent as Ut, openBlock as h, createElementBlock as m, Fragment as H, renderList as Oe, createCommentVNode as w, createElementVNode as O, normalizeStyle as rt, toDisplayString as M, normalizeClass as V, resolveComponent as R, createTextVNode as U, createBlock as F, createVNode as I, TransitionGroup as In, renderSlot as kn, Transition as it, withCtx as ie, toRaw as qt, createApp as Xt, ref as xe, useSlots as Bn, reactive as Vn, computed as T, nextTick as Me, watch as K, onMounted as zn, provide as Fn } from "vue";
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Hn(e, t) {
  var r = t.length, c = e.length;
  if (c > r)
    return !1;
  if (c === r)
    return e === t;
  e:
    for (var u = 0, o = 0; u < c; u++) {
      for (var f = e.charCodeAt(u); o < r; )
        if (t.charCodeAt(o++) === f)
          continue e;
      return !1;
    }
  return !0;
}
var Wn = Hn;
const $n = /* @__PURE__ */ oe(Wn);
function Pn() {
}
var jn = Pn;
const Qn = /* @__PURE__ */ oe(jn), G = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Qn
) : function(t, r) {
  if (!t()) {
    const c = ["[Vue-Treeselect Warning]"].concat(r());
    console.error(...c);
  }
};
function ce(e) {
  return function(r, ...c) {
    r.type === "mousedown" && r.button === 0 && e.call(this, r, ...c);
  };
}
function Kn(e, t) {
  const r = e.getBoundingClientRect(), c = t.getBoundingClientRect(), u = t.offsetHeight / 3;
  c.bottom + u > r.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + u,
    e.scrollHeight
  ) : c.top - u < r.top && (e.scrollTop = Math.max(t.offsetTop - u, 0));
}
function Un(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yt = Un, qn = typeof Le == "object" && Le && Le.Object === Object && Le, Xn = qn, Yn = Xn, Gn = typeof self == "object" && self && self.Object === Object && self, Jn = Yn || Gn || Function("return this")(), Gt = Jn, Zn = Gt, es = function() {
  return Zn.Date.now();
}, ts = es, ns = Gt, ss = ns.Symbol, Jt = ss, Mt = Jt, Zt = Object.prototype, os = Zt.hasOwnProperty, rs = Zt.toString, ye = Mt ? Mt.toStringTag : void 0;
function as(e) {
  var t = os.call(e, ye), r = e[ye];
  try {
    e[ye] = void 0;
    var c = !0;
  } catch {
  }
  var u = rs.call(e);
  return c && (t ? e[ye] = r : delete e[ye]), u;
}
var ls = as, is = Object.prototype, cs = is.toString;
function us(e) {
  return cs.call(e);
}
var ds = us, Lt = Jt, hs = ls, fs = ds, ps = "[object Null]", ms = "[object Undefined]", Rt = Lt ? Lt.toStringTag : void 0;
function vs(e) {
  return e == null ? e === void 0 ? ms : ps : Rt && Rt in Object(e) ? hs(e) : fs(e);
}
var gs = vs;
function ys(e) {
  return e != null && typeof e == "object";
}
var _s = ys, Ss = gs, bs = _s, Os = "[object Symbol]";
function Es(e) {
  return typeof e == "symbol" || bs(e) && Ss(e) == Os;
}
var ws = Es, At = Yt, Ts = ws, It = NaN, Cs = /^\s+|\s+$/g, Ns = /^[-+]0x[0-9a-f]+$/i, Ds = /^0b[01]+$/i, xs = /^0o[0-7]+$/i, Ms = parseInt;
function Ls(e) {
  if (typeof e == "number")
    return e;
  if (Ts(e))
    return It;
  if (At(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = At(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Cs, "");
  var r = Ds.test(e);
  return r || xs.test(e) ? Ms(e.slice(2), r ? 2 : 8) : Ns.test(e) ? It : +e;
}
var en = Ls, Rs = Yt, tt = ts, kt = en, As = "Expected a function", Is = Math.max, ks = Math.min;
function Bs(e, t, r) {
  var c, u, o, f, d, y, S = 0, L = !1, D = !1, z = !0;
  if (typeof e != "function")
    throw new TypeError(As);
  t = kt(t) || 0, Rs(r) && (L = !!r.leading, D = "maxWait" in r, o = D ? Is(kt(r.maxWait) || 0, t) : o, z = "trailing" in r ? !!r.trailing : z);
  function Z(E) {
    var C = c, A = u;
    return c = u = void 0, S = E, f = e.apply(A, C), f;
  }
  function P(E) {
    return S = E, d = setTimeout(i, t), L ? Z(E) : f;
  }
  function Ie(E) {
    var C = E - y, A = E - S, ee = t - C;
    return D ? ks(ee, o - A) : ee;
  }
  function s(E) {
    var C = E - y, A = E - S;
    return y === void 0 || C >= t || C < 0 || D && A >= o;
  }
  function i() {
    var E = tt();
    if (s(E))
      return Ee(E);
    d = setTimeout(i, Ie(E));
  }
  function Ee(E) {
    return d = void 0, z && c ? Z(E) : (c = u = void 0, f);
  }
  function ke() {
    d !== void 0 && clearTimeout(d), S = 0, c = y = u = d = void 0;
  }
  function ue() {
    return d === void 0 ? f : Ee(tt());
  }
  function B() {
    var E = tt(), C = s(E);
    if (c = arguments, u = this, y = E, C) {
      if (d === void 0)
        return P(y);
      if (D)
        return clearTimeout(d), d = setTimeout(i, t), Z(y);
    }
    return d === void 0 && (d = setTimeout(i, t)), f;
  }
  return B.cancel = ke, B.flush = ue, B;
}
var Vs = Bs;
const zs = /* @__PURE__ */ oe(Vs);
var Fs = function(e, t) {
  var r = document.createElement("_"), c = r.appendChild(document.createElement("_")), u = r.appendChild(document.createElement("_")), o = c.appendChild(document.createElement("_")), f = void 0, d = void 0;
  return c.style.cssText = r.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", o.style.cssText = u.style.cssText = "display:block;height:100%;transition:0s;width:100%", o.style.width = o.style.height = "200%", e.appendChild(r), y(), L;
  function y() {
    S();
    var D = e.offsetWidth, z = e.offsetHeight;
    (D !== f || z !== d) && (f = D, d = z, u.style.width = D * 2 + "px", u.style.height = z * 2 + "px", r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, t({ width: D, height: z })), c.addEventListener("scroll", y), r.addEventListener("scroll", y);
  }
  function S() {
    c.removeEventListener("scroll", y), r.removeEventListener("scroll", y);
  }
  function L() {
    S(), e.removeChild(r);
  }
};
function tn(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
let at;
const Ae = [], Hs = 100;
function Ws() {
  at = setInterval(() => {
    Ae.forEach(nn);
  }, Hs);
}
function $s() {
  clearInterval(at), at = null;
}
function nn(e) {
  const { $el: t, listener: r, lastWidth: c, lastHeight: u } = e, o = t.offsetWidth, f = t.offsetHeight;
  (c !== o || u !== f) && (e.lastWidth = o, e.lastHeight = f, r({ width: o, height: f }));
}
function Ps(e, t) {
  const r = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, c = () => {
    tn(Ae, r), Ae.length || $s();
  };
  return Ae.push(r), nn(r), Ws(), c;
}
function sn(e, t) {
  const r = document.documentMode === 9;
  let c = !0;
  const f = (r ? Ps : Fs)(e, (...d) => c || t(...d));
  return c = !1, f;
}
function js(e) {
  const t = [];
  let r = e.parentNode;
  for (; r && r.nodeName !== "BODY" && r.nodeType === document.ELEMENT_NODE; )
    Qs(r) && t.push(r), r = r.parentNode;
  return t.push(window), t;
}
function Qs(e) {
  const { overflow: t, overflowX: r, overflowY: c } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + c + r);
}
function on(e, t) {
  const r = js(e);
  return window.addEventListener("resize", t, { passive: !0 }), r.forEach((c) => {
    c.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), r.forEach((u) => {
      u.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function rn(e) {
  return e !== e;
}
function an(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Ks = en, Bt = 1 / 0, Us = 17976931348623157e292;
function qs(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ks(e), e === Bt || e === -Bt) {
    var t = e < 0 ? -1 : 1;
    return t * Us;
  }
  return e === e ? e : 0;
}
var Xs = qs, Ys = Xs;
function Gs(e) {
  var t = Ys(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Js = Gs, Zs = Js, eo = "Expected a function";
function to(e, t) {
  var r;
  if (typeof t != "function")
    throw new TypeError(eo);
  return e = Zs(e), function() {
    return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r;
  };
}
var no = to, so = no;
function oo(e) {
  return so(2, e);
}
var ro = oo;
const ao = /* @__PURE__ */ oe(ro);
function lo(e) {
  return e;
}
var io = lo;
const co = /* @__PURE__ */ oe(io);
function uo(e) {
  return function() {
    return e;
  };
}
var ho = uo;
const Vt = /* @__PURE__ */ oe(ho), $ = () => /* @__PURE__ */ Object.create(null);
function fo(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var po = fo;
const zt = /* @__PURE__ */ oe(po);
function J(e, t) {
  return e.indexOf(t) !== -1;
}
function ln(e, t, r) {
  for (let c = 0, u = e.length; c < u; c++)
    if (t.call(r, e[c], c, e))
      return e[c];
}
function Ft(e, t) {
  if (e.length !== t.length)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}
let mo = 0;
const vo = () => mo++, se = null, lt = 0, cn = 1, un = 2, le = "ALL_CHILDREN", _e = "ALL_DESCENDANTS", Se = "LEAF_CHILDREN", be = "LEAF_DESCENDANTS", go = "LOAD_ROOT_OPTIONS", yo = "LOAD_CHILDREN_OPTIONS", _o = "ASYNC_SEARCH", nt = "ALL", Re = "BRANCH_PRIORITY", st = "LEAF_PRIORITY", ot = "ALL_WITH_INDETERMINATE", Ht = "ORDER_SELECTED", Wt = "LEVEL", $t = "INDEX", x = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, So = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Pt = 5, jt = 40, k = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [c, u] of t)
    r[c] = u;
  return r;
}, bo = Ut({
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  functional: !0,
  computed: {
    canRender() {
      return !this.instance || !this.instance.name || this.instance.disabled || !this.instance.hasValue;
    },
    values() {
      let e = this.instance.internalValue.value.map(this.stringifyValue);
      return this.instance.multiple && this.instance.joinValues && (e = [
        e.join(this.instance.delimiter)
      ]), e;
    }
  },
  methods: {
    stringifyValue(e) {
      return typeof e == "string" ? e : e != null && !rn(e) ? JSON.stringify(e) : "";
    }
  }
}), Oo = ["name", "value"];
function Eo(e, t, r, c, u, o) {
  return e.canRender ? (h(!0), m(H, { key: 0 }, Oe(e.values, (f, d) => (h(), m("input", {
    type: "hidden",
    name: e.instance.name,
    value: f,
    key: "hidden-field-" + d
  }, null, 8, Oo))), 128)) : w("", !0);
}
const wo = /* @__PURE__ */ k(bo, [["render", Eo]]), To = [
  x.ENTER,
  x.END,
  x.HOME,
  x.ARROW_LEFT,
  x.ARROW_UP,
  x.ARROW_RIGHT,
  x.ARROW_DOWN
], Co = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: Pt,
    value: ""
  }),
  computed: {
    needAutoSize() {
      const { instance: e } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        // width: this.needAutoSize ? `${this.inputWidth}px` : null,
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery"(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  mounted() {
    this.debouncedCallback = zs(
      this.updateSearchQuery,
      So,
      { leading: !0, trailing: !0 }
    );
  },
  methods: {
    clear() {
      this.onInput({
        target: { value: "" }
      });
    },
    focus() {
      const { instance: e } = this;
      e.disabled || this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const { instance: e } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const { instance: e } = this, t = e.getMenu();
      if (t && document.activeElement === t)
        return this.focus();
      e.trigger.isFocused = !1, e.closeMenu();
    },
    onInput(e) {
      const { value: t } = e.target;
      this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown(e) {
      const { instance: t } = this, r = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && J(To, r))
          return e.preventDefault(), t.openMenu();
        switch (r) {
          case x.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case x.ENTER: {
            if (e.preventDefault(), t.menu.current === null)
              return;
            const c = t.getNode(t.menu.current);
            if (c.isBranch && t.disableBranchNodes)
              return;
            t.select(c);
            break;
          }
          case x.ESCAPE: {
            this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case x.END: {
            e.preventDefault(), t.highlightLastOption();
            break;
          }
          case x.HOME: {
            e.preventDefault(), t.highlightFirstOption();
            break;
          }
          case x.ARROW_LEFT: {
            const c = t.getNode(t.menu.current);
            c.isBranch && t.shouldExpand(c) ? (e.preventDefault(), t.toggleExpanded(c)) : !c.isRootNode && (c.isLeaf || c.isBranch && !t.shouldExpand(c)) && (e.preventDefault(), t.setCurrentHighlightedOption(c.parentNode));
            break;
          }
          case x.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case x.ARROW_RIGHT: {
            const c = t.getNode(t.menu.current);
            c.isBranch && !t.shouldExpand(c) && (e.preventDefault(), t.toggleExpanded(c));
            break;
          }
          case x.ARROW_DOWN: {
            e.preventDefault(), t.highlightNextOption();
            break;
          }
          case x.DELETE: {
            t.deleteRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    },
    onMouseDown(e) {
      this.value.length && e.stopPropagation();
    },
    updateInputWidth() {
      this.inputWidth = Math.max(
        Pt,
        this.$refs.sizer.scrollWidth + 15
      );
    },
    updateSearchQuery() {
      const { instance: e } = this;
      e.trigger.searchQuery = this.value;
    }
  }
}, No = ["tabindex"], Do = ["tabIndex", "required", "value"];
function xo(e, t, r, c, u, o) {
  return h(), m("div", {
    class: "vue-treeselect__input-container",
    tabindex: !o.instance.searchable && !o.instance.disabled ? o.instance.tabIndex : "",
    onFocus: t[5] || (t[5] = (f) => o.instance.searchable ? null : o.onFocus),
    onBlur: t[6] || (t[6] = (f) => o.instance.searchable ? null : o.onBlur),
    onKeydown: t[7] || (t[7] = (f) => o.instance.searchable ? null : o.onKeyDown)
  }, [
    o.instance.searchable && !o.instance.disabled ? (h(), m(H, { key: 0 }, [
      O("input", {
        ref: "input",
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabIndex: o.instance.tabIndex,
        required: o.instance.required && !o.instance.hasValue,
        value: e.value,
        style: rt(o.inputStyle),
        onFocus: t[0] || (t[0] = (...f) => o.onFocus && o.onFocus(...f)),
        onInput: t[1] || (t[1] = (...f) => o.onInput && o.onInput(...f)),
        onBlur: t[2] || (t[2] = (...f) => o.onBlur && o.onBlur(...f)),
        onKeydown: t[3] || (t[3] = (...f) => o.onKeyDown && o.onKeyDown(...f)),
        onMousedown: t[4] || (t[4] = (...f) => o.onMouseDown && o.onMouseDown(...f))
      }, null, 44, Do),
      o.needAutoSize ? (h(), m("div", {
        key: 0,
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, M(e.value), 513)) : w("", !0)
    ], 64)) : w("", !0)
  ], 40, No);
}
const dn = /* @__PURE__ */ k(Co, [["render", xo]]), Mo = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"]
};
function Lo(e, t, r, c, u, o) {
  return h(), m("div", {
    class: V({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": o.instance.hasValue || o.instance.trigger.searchQuery
    })
  }, M(o.instance.placeholder), 3);
}
const hn = /* @__PURE__ */ k(Mo, [["render", Lo]]), Ro = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  components: { Placeholder: hn, Input: dn },
  computed: {
    node() {
      return this.instance.selectedNodes.value[0];
    },
    hasValue() {
      return this.instance.hasValue.value;
    },
    hasActiveQuery() {
      return this.instance.trigger.searchQuery;
    }
  }
}, Ao = { style: { height: "100%" } }, Io = {
  key: 0,
  class: "vue-treeselect__value-container"
}, ko = { class: "vue-treeselect__single-value s-value-container" };
function Bo(e, t, r, c, u, o) {
  const f = R("Placeholder"), d = R("Input");
  return h(), m("div", Ao, [
    o.hasValue && !o.hasActiveQuery ? (h(), m("div", Io, [
      O("div", ko, [
        o.instance.$slots["value-label"] ? (h(), m(H, { key: 0 }, [
          U(M(o.instance.$slots["value-label"]), 1)
        ], 64)) : (h(), m(H, { key: 1 }, [
          U(M(o.node.label), 1)
        ], 64))
      ])
    ])) : w("", !0),
    !o.hasValue && !o.hasActiveQuery ? (h(), F(f, {
      key: 1,
      class: "s-value-container"
    })) : w("", !0),
    I(d, { ref: "input" }, null, 512)
  ]);
}
const Qt = /* @__PURE__ */ k(Ro, [["render", Bo]]), Vo = {
  name: "vue-treeselect--x"
}, zo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Fo = /* @__PURE__ */ O("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Ho = [
  Fo
];
function Wo(e, t, r, c, u, o) {
  return h(), m("svg", zo, Ho);
}
const fn = /* @__PURE__ */ k(Vo, [["render", Wo]]), $o = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  components: { DeleteIcon: fn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    itemClass() {
      return {
        "vue-treeselect__multi-value-item": !0,
        "vue-treeselect__multi-value-item-disabled": this.node.isDisabled,
        "vue-treeselect__multi-value-item-new": this.node.isNew
      };
    }
  },
  methods: {
    handleMouseDown: ce(function() {
      const { instance: t, node: r } = this;
      t.select(r);
    })
  }
}, Po = { class: "vue-treeselect__multi-value-item-container" }, jo = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function Qo(e, t, r, c, u, o) {
  const f = R("DeleteIcon");
  return h(), m("div", Po, [
    O("div", {
      class: V(o.itemClass),
      onMousedown: t[0] || (t[0] = (...d) => o.handleMouseDown && o.handleMouseDown(...d))
    }, [
      o.instance.$slots["value-label"] ? (h(), m(H, { key: 0 }, [
        U(M(o.instance.$slots["value-label"]), 1)
      ], 64)) : (h(), m(H, { key: 1 }, [
        U(M(r.node.label), 1)
      ], 64)),
      O("span", jo, [
        I(f)
      ])
    ], 34)
  ]);
}
const Ko = /* @__PURE__ */ k($o, [["render", Qo]]), Uo = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  components: { Placeholder: hn, TransitionGroup: In, Input: dn, MultiValueItem: Ko },
  computed: {
    multiValueItems() {
      return this.instance.internalValue.value.slice(0, this.instance.limit).map(this.instance.getNode);
    },
    count() {
      return this.instance.internalValue.length - this.instance.limit;
    }
  }
}, qo = {
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
  key: "exceed-limit-tip"
}, Xo = { class: "vue-treeselect__limit-tip-text" };
function Yo(e, t, r, c, u, o) {
  const f = R("MultiValueItem"), d = R("Placeholder"), y = R("Input");
  return h(), m("div", null, [
    (h(!0), m(H, null, Oe(o.multiValueItems, (S) => (h(), F(f, {
      key: `multi-value-item-${S.id}`,
      node: S
    }, null, 8, ["node"]))), 128)),
    o.count > 0 ? (h(), m("div", qo, [
      O("span", Xo, M(o.instance.limitText(o.count)), 1)
    ])) : w("", !0),
    o.multiValueItems.length ? w("", !0) : (h(), F(d, { key: "placeholder" })),
    I(y, {
      ref: "input",
      key: "input"
    }, null, 512)
  ]);
}
const Kt = /* @__PURE__ */ k(Uo, [["render", Yo]]), Go = {
  name: "vue-treeselect--arrow"
}, Jo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, Zo = /* @__PURE__ */ O("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1), er = [
  Zo
];
function tr(e, t, r, c, u, o) {
  return h(), m("svg", Jo, er);
}
const pn = /* @__PURE__ */ k(Go, [["render", tr]]), nr = {
  name: "vue-treeselect--control",
  inject: ["instance"],
  components: {
    SingleValue: Qt,
    MultiValue: Kt,
    DeleteIcon: fn,
    ArrowIcon: pn
  },
  data() {
    return {
      SingleValue: Qt,
      MultiValue: Kt
    };
  },
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX() {
      const { instance: e } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow() {
      const { instance: e } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue() {
      const { instance: e } = this;
      return e.hasValue && e.internalValue.value.some((t) => !e.getNode(t).isDisabled);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    getTitleX() {
      return this.instance.multiple ? this.instance.clearAllText : this.instance.clearValueText;
    },
    getArrowClass() {
      return {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": this.instance.menu.isOpen
      };
    },
    handleMouseDownOnX: ce(function(t) {
      t.stopPropagation(), t.preventDefault();
      const { instance: r } = this, c = r.beforeClearAll(), u = (o) => {
        o && r.clear();
      };
      an(c) ? c.then(u) : setTimeout(() => u(c), 0);
    }),
    handleMouseDownOnArrow: ce(function(t) {
      t.preventDefault(), t.stopPropagation();
      const { instance: r } = this;
      r.focusInput(), r.toggleMenu();
    })
    // This is meant to be called by child `<Value />` component.
  }
}, sr = ["title"];
function or(e, t, r, c, u, o) {
  const f = R("SingleValue"), d = R("MultiValue"), y = R("DeleteIcon"), S = R("ArrowIcon");
  return h(), m("div", {
    class: "vue-treeselect__control",
    onMousedown: t[2] || (t[2] = (...L) => o.instance.handleMouseDown && o.instance.handleMouseDown(...L))
  }, [
    o.instance.single ? (h(), F(f, {
      key: 0,
      ref: "value-container"
    }, null, 512)) : (h(), F(d, {
      key: 1,
      ref: "value-container"
    }, null, 512)),
    o.shouldShowX ? (h(), m("div", {
      key: 2,
      class: "vue-treeselect__x-container",
      title: o.getTitleX(),
      onMousedown: t[0] || (t[0] = (...L) => o.handleMouseDownOnX && o.handleMouseDownOnX(...L))
    }, [
      I(y, { class: "vue-treeselect__x" })
    ], 40, sr)) : w("", !0),
    O("div", {
      class: "vue-treeselect__control-arrow-container",
      onMousedown: t[1] || (t[1] = (...L) => o.handleMouseDownOnArrow && o.handleMouseDownOnArrow(...L))
    }, [
      I(S, {
        class: V(o.getArrowClass())
      }, null, 8, ["class"])
    ], 32)
  ], 32);
}
const rr = /* @__PURE__ */ k(nr, [["render", or]]), ar = Ut({
  name: "vue-treeselect--tip",
  functional: !0,
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  }
}), lr = { class: "vue-treeselect__icon-container" };
function ir(e, t, r, c, u, o) {
  return h(), m("div", {
    class: V(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
  }, [
    O("div", lr, [
      O("span", {
        class: V(`vue-treeselect__icon-${e.icon}`)
      }, null, 2)
    ]),
    O("span", {
      class: V(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
    }, [
      kn(e.$slots, "default")
    ], 2)
  ], 2);
}
const mn = /* @__PURE__ */ k(ar, [["render", ir]]), cr = {
  name: "VueTreeselectOption",
  inject: ["instance"],
  components: { ArrowIcon: pn, Transition: it, Tip: mn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      UNCHECKED: lt,
      INDETERMINATE: cn,
      CHECKED: un
    };
  },
  computed: {
    shouldExpand() {
      const { instance: e, node: t } = this;
      return t.isBranch && e.shouldExpand(t);
    },
    shouldShow() {
      const { instance: e, node: t } = this;
      return e.shouldShowOptionInMenu(t);
    },
    checkedState() {
      return this.instance.forest.checkedStateMap[this.node.id];
    },
    shouldShowCount() {
      return this.node.isBranch && (this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount);
    }
  },
  methods: {
    getCount() {
      return this.shouldShowCount ? this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf] : NaN;
    },
    handleMouseEnterOption(e) {
      const { instance: t, node: r } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(r, !1);
    },
    handleMouseDownOnArrow: ce(function() {
      const { instance: t, node: r } = this;
      t.toggleExpanded(r);
    }),
    handleMouseDownOnLabelContainer: ce(function() {
      const { instance: t, node: r } = this;
      r.isBranch && t.disableBranchNodes ? t.toggleExpanded(r) : t.select(r);
    }),
    handleMouseDownOnRetry: ce(function() {
      const { instance: t, node: r } = this;
      t.loadChildrenOptions(r);
    })
  }
}, ur = ["data-id"], dr = { key: 1 }, hr = /* @__PURE__ */ O("div", { class: "vue-treeselect__option-arrow-placeholder" }, " ", -1), fr = [
  hr
], pr = { key: 0 }, mr = { class: "vue-treeselect__checkbox-container" }, vr = /* @__PURE__ */ O("span", { class: "vue-treeselect__check-mark" }, null, -1), gr = /* @__PURE__ */ O("span", { class: "vue-treeselect__minus-mark" }, null, -1), yr = [
  vr,
  gr
], _r = { key: 1 }, Sr = { key: 2 }, br = {
  class: /* @__PURE__ */ V("vue-treeselect__label")
}, Or = {
  key: 0,
  class: /* @__PURE__ */ V("vue-treeselect__count")
}, Er = { key: 0 }, wr = { class: "vue-treeselect__list" }, Tr = { key: 0 }, Cr = { key: 1 }, Nr = { key: 2 }, Dr = { key: 3 }, xr = ["title"];
function Mr(e, t, r, c, u, o) {
  const f = R("ArrowIcon"), d = R("VueTreeselectOption"), y = R("Tip");
  return h(), m("div", {
    class: V({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${o.instance.shouldFlattenOptions ? 0 : r.node.level}`]: !0
    })
  }, [
    O("div", {
      class: V({
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": r.node.isDisabled,
        "vue-treeselect__option--selected": o.instance.isSelected(r.node),
        "vue-treeselect__option--highlight": r.node.isHighlighted,
        "vue-treeselect__option--matched": o.instance.localSearch.active && r.node.isMatched,
        "vue-treeselect__option--hide": !o.shouldShow
      }),
      onMouseenter: t[2] || (t[2] = (...S) => o.handleMouseEnterOption && o.handleMouseEnterOption(...S)),
      "data-id": r.node.id
    }, [
      o.instance.shouldFlattenOptions && this.shouldShow ? w("", !0) : (h(), m(H, { key: 0 }, [
        r.node.isBranch ? (h(), m("div", {
          key: 0,
          class: "vue-treeselect__option-arrow-container",
          onMousedown: t[0] || (t[0] = (...S) => o.handleMouseDownOnArrow && o.handleMouseDownOnArrow(...S))
        }, [
          I(f, {
            class: V({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": o.shouldExpand
            })
          }, null, 8, ["class"])
        ], 32)) : w("", !0),
        o.instance.hasBranchNodes ? (h(), m("div", dr, fr)) : w("", !0)
      ], 64)),
      O("div", {
        class: "vue-treeselect__label-container",
        onMousedown: t[1] || (t[1] = (...S) => o.handleMouseDownOnLabelContainer && o.handleMouseDownOnLabelContainer(...S))
      }, [
        !o.instance.single && !(o.instance.disableBranchNodes && r.node.isBranch) ? (h(), m("div", pr, [
          O("div", mr, [
            O("span", {
              class: V({
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": o.checkedState === u.CHECKED,
                "vue-treeselect__checkbox--indeterminate": o.checkedState === u.INDETERMINATE,
                "vue-treeselect__checkbox--unchecked": o.checkedState === u.UNCHECKED,
                "vue-treeselect__checkbox--disabled": r.node.isDisabled
              })
            }, yr, 2)
          ])
        ])) : w("", !0),
        o.instance.$slots["option-label"] ? (h(), m("div", _r, M(o.instance.$slots["option-label"]), 1)) : (h(), m("div", Sr, [
          O("label", br, [
            U(M(r.node.label) + " ", 1),
            o.shouldShowCount ? (h(), m("span", Or, "({ getCount() })")) : w("", !0)
          ])
        ]))
      ], 32)
    ], 42, ur),
    r.node.isBranch && o.shouldExpand ? (h(), m("div", Er, [
      I(it, { name: "vue-treeselect__list--transition" }, {
        default: ie(() => [
          O("div", wr, [
            r.node.childrenStates.isLoaded ? (h(), m("div", Tr, [
              (h(!0), m(H, null, Oe(r.node.children, (S) => (h(), F(d, {
                node: S,
                key: S.id
              }, null, 8, ["node"]))), 128))
            ])) : w("", !0),
            r.node.childrenStates.isLoaded || !r.node.children.length ? (h(), m("div", Cr, [
              I(y, {
                type: "no-children",
                icon: "warning"
              }, {
                default: ie(() => [
                  U(M(o.instance.noChildrenText), 1)
                ]),
                _: 1
              })
            ])) : w("", !0),
            r.node.childrenStates.isLoading ? (h(), m("div", Nr, [
              I(y, {
                type: "loading",
                icon: "loader"
              }, {
                default: ie(() => [
                  U("{ instance.loadingText }")
                ]),
                _: 1
              })
            ])) : w("", !0),
            r.node.childrenStates.loadingError ? (h(), m("div", Dr, [
              I(y, {
                type: "error",
                icon: "error"
              }, {
                default: ie(() => [
                  U(" { node.childrenStates.loadingError } "),
                  O("a", {
                    class: "vue-treeselect__retry",
                    title: o.instance.retryTitle,
                    onMousedown: t[3] || (t[3] = (...S) => o.handleMouseDownOnRetry && o.handleMouseDownOnRetry(...S))
                  }, M(o.instance.retryText), 41, xr)
                ]),
                _: 1
              })
            ])) : w("", !0)
          ])
        ]),
        _: 1
      })
    ])) : w("", !0)
  ], 2);
}
const Lr = /* @__PURE__ */ k(cr, [["render", Mr]]), Rr = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, Ar = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  components: { Transition: it, Tip: mn, Option: Lr },
  computed: {
    menuStyle() {
      const { instance: e } = this;
      return {
        maxHeight: e.maxHeight + "px"
      };
    },
    menuContainerStyle() {
      const { instance: e } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    },
    shouldShowSearchPromptTip() {
      return this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions;
    },
    entry() {
      return this.instance.getRemoteSearchEntry();
    },
    normalizedOptions() {
      return qt(this.instance.forest.normalizedOptions);
    }
  },
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
    }
  },
  mounted() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null, this.instance.menu.isOpen && this.$nextTick(this.onMenuOpen);
  },
  unmounted() {
    this.onMenuClose();
  },
  methods: {
    getTipIcon() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      return e ? "warning" : this.entry.isLoading ? "loader" : this.entry.loadingError ? "error" : t ? "warning" : null;
    },
    getTipText() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      if (e)
        return this.instance.searchPromptText;
      if (this.entry.isLoading)
        return this.instance.loadingText;
      if (this.entry.loadingError)
        return this.entry.loadingError;
      if (t)
        return this.instance.noResultsText;
    },
    getNormalTip() {
      return this.instance.rootOptionsStates.isLoading ? ["loader", this.instance.loadingText] : this.instance.rootOptionsStates.loadingError ? ["error", this.instance.rootOptionsStates.loadingError, this.instance.retryText] : this.instance.rootOptionsStates.isLoaded && this.instance.forest.normalizedOptions.length === 0 ? ["warning", this.instance.noOptionsText] : this.instance.localSearch.noResults ? ["warning", this.instance.noResultsText] : null;
    },
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const { instance: e } = this;
      if (!e.menu.isOpen)
        return;
      const t = e.getMenu(), r = e.getControl(), c = t.getBoundingClientRect(), u = r.getBoundingClientRect(), o = c.height, f = window.innerHeight, d = u.top, y = window.innerHeight - u.bottom, S = u.top >= 0 && u.top <= f || u.top < 0 && u.bottom > 0, L = y > o + jt, D = d > o + jt;
      S ? e.openDirection !== "auto" ? e.menu.placement = Rr[e.openDirection] : L || !D ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const { instance: e } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: sn(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: on(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  }
}, Ir = { key: 0 }, kr = { key: 1 }, Br = /* @__PURE__ */ O("div", null, "2", -1), Vr = ["title"], zr = {
  key: 1,
  class: "vue-treeselect__list"
}, Fr = { key: 2 }, Hr = ["title"], Wr = {
  key: 1,
  class: "vue-treeselect__list"
}, $r = { key: 3 };
function Pr(e, t, r, c, u, o) {
  const f = R("Tip"), d = R("Option");
  return h(), m("div", {
    ref: "menu-container",
    class: "vue-treeselect__menu-container",
    style: rt(o.menuContainerStyle)
  }, [
    o.instance.menu.isOpen ? (h(), m("div", {
      key: 0,
      ref: "menu",
      class: "vue-treeselect__menu",
      onMousedown: t[2] || (t[2] = (...y) => o.instance.handleMouseDown && o.instance.handleMouseDown(...y)),
      style: rt(o.menuStyle)
    }, [
      o.instance.$slots["before-list"] ? (h(), m("div", Ir, M(o.instance.$slots["before-list"]), 1)) : w("", !0),
      o.instance.async ? (h(), m("div", kr, [
        Br,
        o.getTipIcon() ? (h(), F(f, {
          key: 0,
          type: "search-prompt",
          icon: o.getTipIcon()
        }, {
          default: ie(() => [
            U(M(o.getTipText()) + " ", 1),
            o.getTipIcon() === "error" ? (h(), m("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: t[0] || (t[0] = (...y) => o.instance.handleRemoteSearch && o.instance.handleRemoteSearch(...y)),
              title: o.instance.retryTitle
            }, M(o.instance.retryText), 9, Vr)) : w("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (h(), m("div", zr, [
          (h(!0), m(H, null, Oe(o.instance.forest.normalizedOptions, (y) => (h(), F(d, {
            node: y,
            key: y.id
          }, null, 8, ["node"]))), 128))
        ]))
      ])) : (h(), m("div", Fr, [
        O("div", null, [
          o.getNormalTip() ? (h(), F(f, {
            key: 0,
            type: "search-prompt",
            icon: o.getNormalTip()[0]
          }, {
            default: ie(() => [
              U(M(o.getNormalTip()[1]) + " ", 1),
              o.getNormalTip()[2] ? (h(), m("a", {
                key: 0,
                class: "vue-treeselect__retry",
                onClick: t[1] || (t[1] = (...y) => o.instance.loadRootOptions && o.instance.loadRootOptions(...y)),
                title: o.instance.retryTitle
              }, M(o.instance.retryText), 9, Hr)) : w("", !0)
            ]),
            _: 1
          }, 8, ["icon"])) : (h(), m("div", Wr, [
            (h(!0), m(H, null, Oe(o.normalizedOptions, (y) => (h(), F(d, {
              node: y,
              key: y.id
            }, null, 8, ["node"]))), 128))
          ]))
        ])
      ])),
      o.instance.$slots["after-list"] ? (h(), m("div", $r, M(o.instance.$slots["after-list"]), 1)) : w("", !0)
    ], 36)) : w("", !0)
  ], 4);
}
const jr = /* @__PURE__ */ k(Ar, [["render", Pr]]), Qr = {
  name: "vue-treeselect--portal-target",
  inject: ["instance"],
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.setupHandlers() : this.removeHandlers();
    },
    "instance.menu.placement"() {
      this.updateMenuContainerOffset();
    }
  },
  created() {
    this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
  },
  mounted() {
    const { instance: e } = this;
    e.menu.isOpen && this.setupHandlers();
  },
  methods: {
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: on(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const { instance: e } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: sn(t, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const { instance: e } = this, t = this.$el, c = e.getControl().getBoundingClientRect();
      t.style.width = c.width + "px";
    },
    updateMenuContainerOffset() {
      const { instance: e } = this, t = e.getControl(), r = this.$el, c = t.getBoundingClientRect(), u = r.getBoundingClientRect(), o = e.menu.placement === "bottom" ? c.height : 0, f = Math.round(c.left - u.left) + "px", d = Math.round(c.top - u.top + o) + "px", y = this.$refs.menu.$refs["menu-container"].style, L = ln(["transform", "webkitTransform", "MozTransform", "msTransform"], (D) => D in document.body.style);
      y[L] = `translate(${f}, ${d})`;
    }
  },
  unmounted() {
    this.removeHandlers();
  }
}, Kr = {
  name: "vue-treeselect--menu-portal",
  created() {
    this.portalTarget = null;
  },
  mounted() {
    this.setup();
  },
  unmounted() {
    this.teardown();
  },
  methods: {
    setup() {
      const e = document.createElement("div");
      document.body.appendChild(e), this.portalTarget = Xt({
        parent: this,
        ...Qr
      }), this.portalTarget.mount(e);
    },
    teardown() {
      document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
    }
  }
}, Ur = { class: "vue-treeselect__menu-placeholder" };
function qr(e, t, r, c, u, o) {
  return h(), m("div", Ur);
}
const Xr = /* @__PURE__ */ k(Kr, [["render", qr]]), Yr = {
  name: "vue-treeselect"
}, Gr = /* @__PURE__ */ Object.assign(Yr, {
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: Vt(!0)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: !0
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: !1
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ","
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: !1
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
     */
    joinValues: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: 1 / 0
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function(t) {
        return `and ${t} more`;
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: "Loading..."
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: Vt(["label"])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: co
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return J(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: "Select..."
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: "Retry?"
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: !1
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: !1
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: le,
      validator(e) {
        return J([le, _e, Se, be], e);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: Ht,
      validator(e) {
        return J([Ht, Wt, $t], e);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: Re,
      validator(e) {
        return J([nt, Re, st, ot], e);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: "id"
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  emits: ["update:modelValue", "search-change", "close", "open", "select", "deselect"],
  setup(e, { emit: t }) {
    const r = xe(null), c = xe(null), u = xe(null), o = xe(null), f = vo(), d = (n, a) => {
      let l = 0;
      do {
        if (n.level < l)
          return -1;
        if (a.level < l)
          return 1;
        if (n.index[l] !== a.index[l])
          return n.index[l] - a.index[l];
        l++;
      } while (!0);
    }, y = (n, a) => n.level === a.level ? d(n, a) : n.level - a.level, S = () => ({
      isLoaded: !1,
      isLoading: !1,
      loadingError: ""
    }), L = (n) => typeof n == "string" ? n : typeof n == "number" && !rn(n) ? n + "" : "", D = (n, a, l) => n ? $n(a, l) : J(l, a), z = (n) => n.message || /* istanbul ignore next */
    String(n), Z = () => s.modelValue == null ? [] : s.valueFormat === "id" ? s.multiple ? s.modelValue.slice() : [s.modelValue] : (s.multiple ? s.modelValue : [s.modelValue]).map((n) => ve(n)).map((n) => n.id), P = t, Ie = Bn(), s = e, i = Vn({
      trigger: {
        // Is the control focused?
        isFocused: !1,
        // User entered search query - value of the input.
        searchQuery: ""
      },
      menu: {
        // Is the menu opened?
        isOpen: !1,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: "bottom"
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: $(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: $(),
        // Id list of all selected options.
        selectedNodeIds: Z(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: $()
      },
      rootOptionsStates: S(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !1,
        // <id, countObject> map for counting matched children/descendants.
        countMap: $()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: $(),
      isReady: !1,
      _blurOnSelect: !1
    }), Ee = T(() => ({
      name: s.name || "vue-treeselect",
      hasValue: E,
      trigger: i.trigger,
      forest: i.forest,
      localSearch: i.localSearch,
      remoteSearch: i.remoteSearch,
      isReady: i.isReady,
      rootOptionsStates: i.rootOptionsStates,
      internalValue: B,
      selectedNodes: ue,
      $slots: Ie,
      $refs: {
        control: r.value,
        wrapper: c.value,
        portal: u.value,
        menu: o.value
      },
      menu: i.menu,
      single: C,
      verifyProps: ct,
      resetFlags: ut,
      initialize: re,
      getInstanceId: j,
      getValue: Be,
      getNode: b,
      createFallbackNode: dt,
      extractCheckedNodeIdsFromValue: Z,
      extractNodeFromValue: ht,
      fixSelectedNodeIds: Ve,
      keepDataOfSelectedNodes: ft,
      isSelected: Q,
      traverseDescendantsBFS: de,
      traverseDescendantsDFS: we,
      traverseAllNodesDFS: ze,
      traverseAllNodesByIndex: Fe,
      toggleClickOutsideEvent: He,
      getValueContainer: pt,
      getInput: We,
      focusInput: mt,
      blurInput: vt,
      handleMouseDown: Tn,
      handleClickOutside: $e,
      handleLocalSearch: gt,
      getRemoteSearchEntry: Pe,
      shouldExpand: yt,
      shouldOptionBeIncludedInSearchResult: je,
      shouldShowOptionInMenu: _t,
      getControl: Cn,
      getMenu: he,
      setCurrentHighlightedOption: fe,
      resetHighlightedOptionWhenNecessary: pe,
      highlightFirstOption: Qe,
      highlightPrevOption: Nn,
      highlightNextOption: Dn,
      highlightLastOption: St,
      resetSearchQuery: Ke,
      closeMenu: ae,
      openMenu: me,
      toggleMenu: xn,
      toggleExpanded: Mn,
      buildForestState: Te,
      enhancedNormalizer: ve,
      normalize: Ue,
      loadRootOptions: qe,
      loadChildrenOptions: Xe,
      callLoadOptionsProp: Ce,
      checkDuplication: bt,
      verifyNodeShape: Ot,
      select: Et,
      clear: Ye,
      _selectNode: wt,
      _deselectNode: Tt,
      addValue: X,
      removeValue: Y,
      removeLastValue: Ln,
      saveMenuScrollPosition: Ct,
      restoreMenuScrollPosition: Nt,
      handleRemoteSearch: Ge,
      allowClearingDisabled: s.allowClearingDisabled,
      allowSelectingDisabledDescendants: s.allowSelectingDisabledDescendants,
      alwaysOpen: s.alwaysOpen,
      appendToBody: s.appendToBody,
      async: s.async,
      autoFocus: s.autoFocus,
      autoLoadRootOptions: s.autoLoadRootOptions,
      autoDeselectAncestors: s.autoDeselectAncestors,
      autoDeselectDescendants: s.autoDeselectDescendants,
      autoSelectAncestors: s.autoSelectAncestors,
      autoSelectDescendants: s.autoSelectDescendants,
      backspaceRemoves: s.backspaceRemoves,
      beforeClearAll: s.beforeClearAll,
      branchNodesFirst: s.branchNodesFirst,
      cacheOptions: s.cacheOptions,
      clearable: s.clearable,
      clearAllText: s.clearAllText,
      clearOnSelect: s.clearOnSelect,
      clearValueText: s.clearValueText,
      closeOnSelect: s.closeOnSelect,
      defaultExpandLevel: s.defaultExpandLevel,
      defaultOptions: s.defaultOptions,
      deleteRemoves: s.deleteRemoves,
      delimiter: s.delimiter,
      flattenSearchResults: s.flattenSearchResults,
      disableBranchNodes: s.disableBranchNodes,
      disabled: s.disabled,
      disableFuzzyMatching: s.disableFuzzyMatching,
      flat: s.flat,
      instanceId: f,
      joinValues: s.joinValues,
      limit: s.limit,
      limitText: s.limitText,
      loadingText: s.loadingText,
      loadOptions: s.loadOptions,
      matchKeys: s.matchKeys,
      maxHeight: s.maxHeight,
      multiple: s.multiple,
      noChildrenText: s.noChildrenText,
      noOptionsText: s.noOptionsText,
      noResultsText: s.noResultsText,
      normalizer: s.normalizer,
      openDirection: s.openDirection,
      openOnClick: s.openOnClick,
      openOnFocus: s.openOnFocus,
      options: s.options,
      placeholder: s.placeholder,
      required: s.required,
      retryText: s.retryText,
      retryTitle: s.retryTitle,
      searchable: s.searchable,
      searchNested: s.searchNested,
      searchPromptText: s.searchPromptText,
      showCount: s.showCount,
      showCountOf: s.showCountOf,
      showCountOnSearch: s.showCountOnSearch,
      sortValueBy: s.sortValueBy,
      tabIndex: s.tabIndex,
      modelValue: s.modelValue,
      valueConsistsOf: s.valueConsistsOf,
      valueFormat: s.valueFormat,
      zIndex: s.zIndex
    })), ke = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": C.value,
      "vue-treeselect--multi": s.multiple,
      "vue-treeselect--searchable": s.searchable,
      "vue-treeselect--disabled": s.disabled,
      "vue-treeselect--focused": i.trigger.isFocused,
      "vue-treeselect--has-value": E.value,
      "vue-treeselect--open": i.menu.isOpen,
      "vue-treeselect--open-above": i.menu.placement === "top",
      "vue-treeselect--open-below": i.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": s.disableBranchNodes,
      "vue-treeselect--append-to-body": s.appendToBody
    })), ue = T(() => i.forest.selectedNodeIds.map(b)), B = T(() => {
      let n;
      if (C.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === nt)
        n = i.forest.selectedNodeIds.slice();
      else if (s.valueConsistsOf === Re)
        n = i.forest.selectedNodeIds.filter((a) => {
          const l = b(a);
          return l.isRootNode ? !0 : !Q(l.parentNode);
        });
      else if (s.valueConsistsOf === st)
        n = i.forest.selectedNodeIds.filter((a) => {
          const l = b(a);
          return l.isLeaf ? !0 : l.children.length === 0;
        });
      else if (s.valueConsistsOf === ot) {
        const a = [];
        n = i.forest.selectedNodeIds.slice(), ue.value.forEach((l) => {
          l.ancestors.forEach((v) => {
            J(a, v.id) || J(n, v.id) || a.push(v.id);
          });
        }), n.push(...a);
      }
      return s.sortValueBy === Wt ? n.sort((a, l) => y(b(a), b(l))) : s.sortValueBy === $t && n.sort((a, l) => d(b(a), b(l))), n;
    }), E = T(() => B.value.length > 0), C = T(() => !s.multiple), A = T(() => {
      const n = [];
      return Fe((a) => {
        if ((!i.localSearch.active || je(a)) && n.push(a.id), a.isBranch && !yt(a))
          return !1;
      }), n;
    }), ee = T(() => A.value.length !== 0);
    T(() => typeof s.showCountOnSearch == "boolean" ? s.showCountOnSearch : s.showCount), T(() => i.forest.normalizedOptions.some((n) => n.isBranch)), T(() => i.localSearch.active && s.flattenSearchResults);
    const vn = T(() => i.trigger.searchQuery), gn = T(() => s.modelValue), yn = T(() => s.alwaysOpen), _n = T(() => s.branchNodesFirst), Sn = T(() => s.disabled), bn = T(() => s.flat), On = T(() => s.matchKeys), En = T(() => s.multiple), wn = T(() => s.options), ct = () => {
      G(
        () => s.async ? s.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), s.options == null && !s.loadOptions && G(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), s.flat && G(
        () => s.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), s.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((a) => {
        G(
          () => !s[a],
          () => `"${a}" only applies to flat mode.`
        );
      });
    }, ut = () => {
      i._blurOnSelect = !1;
    }, re = () => {
      const n = s.async ? Pe().options : qt(s.options);
      if (Array.isArray(n)) {
        const a = i.forest.nodeMap;
        i.forest.nodeMap = $(), ft(a), i.forest.normalizedOptions = Ue(se, n, a), Ve(B.value);
      } else
        i.forest.normalizedOptions = [];
    }, j = () => f, Be = () => {
      if (s.valueFormat === "id")
        return s.multiple ? B.value.slice() : B.value[0];
      const n = B.value.map((a) => b(a).raw);
      return s.multiple ? n : n[0];
    }, b = (n) => (G(
      () => n != null,
      () => `Invalid node id: ${n}`
    ), n == null ? null : n in i.forest.nodeMap ? i.forest.nodeMap[n] : dt(n)), dt = (n) => {
      const a = ht(n), l = ve(a).label || `${n} (unknown)`, v = {
        id: n,
        label: l,
        ancestors: [],
        parentNode: se,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: a
      };
      return i.forest.nodeMap[n] = v;
    }, ht = (n) => {
      const a = { id: n };
      if (s.valueFormat === "id")
        return a;
      const l = s.multiple ? Array.isArray(s.modelValue) ? s.modelValue : [] : s.modelValue ? [s.modelValue] : [];
      return ln(
        l,
        (p) => p && ve(p).id === n
      ) || a;
    }, Ve = (n) => {
      let a = [];
      if (C.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === nt)
        a = n;
      else if (s.valueConsistsOf === Re)
        n.forEach((l) => {
          a.push(l);
          const v = b(l);
          v.isBranch && de(v, (p) => {
            a.push(p.id);
          });
        });
      else if (s.valueConsistsOf === st) {
        const l = $(), v = n.slice();
        for (; v.length; ) {
          const p = v.shift(), _ = b(p);
          a.push(p), !_.isRootNode && (_.parentNode.id in l || (l[_.parentNode.id] = _.parentNode.children.length), --l[_.parentNode.id] === 0 && v.push(_.parentNode.id));
        }
      } else if (s.valueConsistsOf === ot) {
        const l = $(), v = n.filter((p) => {
          const _ = b(p);
          return _.isLeaf || _.children.length === 0;
        });
        for (; v.length; ) {
          const p = v.shift(), _ = b(p);
          a.push(p), !_.isRootNode && (_.parentNode.id in l || (l[_.parentNode.id] = _.parentNode.children.length), --l[_.parentNode.id] === 0 && v.push(_.parentNode.id));
        }
      }
    }, ft = (n) => {
      i.forest.selectedNodeIds.forEach((a) => {
        n[a] && (i.forest.nodeMap[a] = {
          ...n[a],
          isFallbackNode: !0
        });
      });
    }, Q = (n) => i.forest.selectedNodeMap[n.id] === !0, de = (n, a) => {
      if (!n.isBranch)
        return;
      const l = n.children.slice();
      for (; l.length; ) {
        const v = l[0];
        v.isBranch && l.push(...v.children), a(v), l.shift();
      }
    }, we = (n, a) => {
      n.isBranch && n.children.forEach((l) => {
        we(l, a), a(l);
      });
    }, ze = (n) => {
      i.forest.normalizedOptions.forEach((a) => {
        we(a, n), n(a);
      });
    }, Fe = (n) => {
      const a = (l) => {
        l.children.forEach((v) => {
          n(v) !== !1 && v.isBranch && a(v);
        });
      };
      a({ children: i.forest.normalizedOptions });
    }, He = (n) => {
      n ? document.addEventListener("mousedown", $e, !1) : document.removeEventListener("mousedown", $e, !1);
    }, pt = () => r.value.$refs["value-container"], We = () => pt().$refs.input, mt = () => {
      We().focus();
    }, vt = () => {
      We().blur();
    }, Tn = () => {
    }, $e = (n) => {
      c.value && !c.value.contains(n.target) && (vt(), ae());
    }, gt = () => {
      const { searchQuery: n } = i.trigger, a = () => pe(!0);
      if (!n)
        return i.localSearch.active = !1, i.localSearch.noResults = !1, a();
      i.localSearch.active = !0, i.localSearch.noResults = !0, ze((p) => {
        p.isBranch && (p.isExpandedOnSearch = !1, p.showAllChildrenOnSearch = !1, p.isMatched = !1, p.hasMatchedDescendants = !1, i.localSearch.countMap[p.id] = {
          [le]: 0,
          [_e]: 0,
          [Se]: 0,
          [be]: 0
        });
      });
      const l = n.trim().toLocaleLowerCase(), v = l.replace(/\s+/g, " ").split(" ");
      ze((p) => {
        s.searchNested && v.length > 1 ? p.isMatched = v.every(
          (_) => D(!1, _, p.nestedSearchLabel)
        ) : p.isMatched = s.matchKeys.some(
          (_) => D(!s.disableFuzzyMatching, l, p.lowerCased[_])
        ), p.isMatched && (i.localSearch.noResults = !1, p.ancestors.forEach((_) => i.localSearch.countMap[_.id][_e]++), p.isLeaf && p.ancestors.forEach((_) => i.localSearch.countMap[_.id][be]++), p.parentNode !== se && (i.localSearch.countMap[p.parentNode.id][le] += 1, p.isLeaf && (i.localSearch.countMap[p.parentNode.id][Se] += 1))), (p.isMatched || p.isBranch && p.isExpandedOnSearch) && p.parentNode !== se && (p.parentNode.isExpandedOnSearch = !0, p.parentNode.hasMatchedDescendants = !0);
      }), a();
    }, Pe = () => {
      const { searchQuery: n } = i.trigger, a = i.remoteSearch[n] || {
        ...S(),
        options: []
      };
      if (n === "") {
        if (Array.isArray(s.defaultOptions))
          return a.options = s.defaultOptions, a.isLoaded = !0, a;
        if (s.defaultOptions !== !0)
          return a.isLoaded = !0, a;
      }
      return i.remoteSearch[n] || (i.remoteSearch[n] = a), a;
    }, yt = (n) => i.localSearch.active ? n.isExpandedOnSearch : n.isExpanded, je = (n) => !!(n.isMatched || n.isBranch && n.hasMatchedDescendants && !s.flattenSearchResults || !n.isRootNode && n.parentNode.showAllChildrenOnSearch), _t = (n) => !(i.localSearch.active && !je(n)), Cn = () => r.value.$el, he = () => o.value.$el, fe = (n, a = !0) => {
      const l = i.menu.current;
      if (l != null && l in i.forest.nodeMap && (i.forest.nodeMap[l].isHighlighted = !1), i.menu.current = n.id, n.isHighlighted = !0, i.menu.isOpen && a) {
        const v = () => {
          const p = he(), _ = p.querySelector(`.vue-treeselect__option[data-id="${n.id}"]`);
          _ && Kn(p, _);
        };
        he() ? v() : Me(v);
      }
    }, pe = (n = !1) => {
      const { current: a } = i.menu;
      (n || a == null || !(a in i.forest.nodeMap) || !_t(b(a))) && Qe();
    }, Qe = () => {
      if (!ee.value)
        return;
      const n = A.value[0];
      fe(b(n));
    }, Nn = () => {
      if (!ee.value)
        return;
      const n = A.value.indexOf(i.menu.current) - 1;
      if (n === -1)
        return St();
      fe(b(A.value[n]));
    }, Dn = () => {
      if (!ee.value)
        return;
      const n = A.value.indexOf(i.menu.current) + 1;
      if (n === A.value.length)
        return Qe();
      fe(b(A.value[n]));
    }, St = () => {
      if (!ee.value)
        return;
      const n = zt(A.value);
      fe(b(n));
    }, Ke = () => {
      i.trigger.searchQuery = "";
    }, ae = () => {
      !i.menu.isOpen || !s.disabled && s.alwaysOpen || (Ct(), i.menu.isOpen = !1, He(!1), Ke(), P("close", Be(), j()));
    }, me = () => {
      s.disabled || i.menu.isOpen || (i.menu.isOpen = !0, Me(pe), Me(Nt), !s.options && !s.async && qe(), He(!0), P("open", j()));
    }, xn = () => {
      i.menu.isOpen ? ae() : me();
    }, Mn = (n) => {
      let a;
      i.localSearch.active ? (a = n.isExpandedOnSearch = !n.isExpandedOnSearch, a && (n.showAllChildrenOnSearch = !0)) : a = n.isExpanded = !n.isExpanded, a && !n.childrenStates.isLoaded && Xe(n);
    }, Te = () => {
      const n = $();
      i.forest.selectedNodeIds.forEach((l) => {
        n[l] = !0;
      }), i.forest.selectedNodeMap = n;
      const a = $();
      s.multiple && (Fe((l) => {
        a[l.id] = lt;
      }), ue.value.forEach((l) => {
        a[l.id] = un, !s.flat && !s.disableBranchNodes && l.ancestors.forEach((v) => {
          Q(v) || (a[v.id] = cn);
        });
      })), i.forest.checkedStateMap = a;
    }, ve = (n) => ({
      ...n,
      ...s.normalizer(n, j())
    }), Ue = (n, a, l) => {
      let v = a.map((p) => [ve(p), p]).map(([p, _], te) => {
        bt(p), Ot(p);
        const { id: q, label: Ne, children: W, isDefaultExpanded: ge } = p, ne = n === se, Dt = ne ? 0 : n.level + 1, Je = Array.isArray(W) || W === null, Ze = !Je, xt = !!p.isDisabled || !s.flat && !ne && n.isDisabled, Rn = !!p.isNew, et = s.matchKeys.reduce((N, De) => ({
          ...N,
          [De]: L(p[De]).toLocaleLowerCase()
        }), {}), An = ne ? et.label : n.nestedSearchLabel + " " + et.label;
        i.forest.nodeMap[q] = $();
        const g = i.forest.nodeMap[q];
        if (g.id = q, g.label = Ne, g.level = Dt, g.ancestors = ne ? [] : [n].concat(n.ancestors), g.index = (ne ? [] : n.index).concat(te), g.parentNode = n, g.lowerCased = et, g.nestedSearchLabel = An, g.isDisabled = xt, g.isNew = Rn, g.isMatched = !1, g.isHighlighted = !1, g.isBranch = Je, g.isLeaf = Ze, g.isRootNode = ne, g.raw = _, Je) {
          const N = Array.isArray(W);
          g.childrenStates = { ...S(), isLoaded: N }, g.isExpanded = typeof ge == "boolean" ? ge : Dt < s.defaultExpandLevel, g.hasMatchedDescendants = !1, g.hasDisabledDescendants = !1, g.isExpandedOnSearch = !1, g.showAllChildrenOnSearch = !1, g.count = {
            [le]: 0,
            [_e]: 0,
            [Se]: 0,
            [be]: 0
          }, g.children = N ? Ue(g, W, l) : [], ge === !0 && g.ancestors.forEach((De) => {
            De.isExpanded = !0;
          }), !N && typeof s.loadOptions != "function" ? G(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !N && g.isExpanded && Xe(g);
        }
        if (g.ancestors.forEach((N) => N.count[_e]++), Ze && g.ancestors.forEach((N) => N.count[be]++), ne || (n.count[le] += 1, Ze && (n.count[Se] += 1), xt && (n.hasDisabledDescendants = !0)), l && l[q]) {
          const N = l[q];
          g.isMatched = N.isMatched, g.showAllChildrenOnSearch = N.showAllChildrenOnSearch, g.isHighlighted = N.isHighlighted, N.isBranch && g.isBranch && (g.isExpanded = N.isExpanded, g.isExpandedOnSearch = N.isExpandedOnSearch, N.childrenStates.isLoaded && !g.childrenStates.isLoaded ? g.isExpanded = !1 : g.childrenStates = { ...N.childrenStates });
        }
        return g;
      });
      if (s.branchNodesFirst) {
        const p = v.filter((te) => te.isBranch), _ = v.filter((te) => te.isLeaf);
        v = p.concat(_);
      }
      return v;
    }, qe = () => {
      Ce({
        action: go,
        isPending: () => i.rootOptionsStates.isLoading,
        start: () => {
          i.rootOptionsStates.isLoading = !0, i.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          i.rootOptionsStates.isLoaded = !0, Me(() => {
            pe(!0);
          });
        },
        fail: (n) => {
          i.rootOptionsStates.loadingError = z(n);
        },
        end: () => {
          i.rootOptionsStates.isLoading = !1;
        }
      });
    }, Xe = (n) => {
      const { id: a, raw: l } = n;
      Ce({
        action: yo,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: l
        },
        isPending: () => b(a).childrenStates.isLoading,
        start: () => {
          b(a).childrenStates.isLoading = !0, b(a).childrenStates.loadingError = "";
        },
        succeed: () => {
          b(a).childrenStates.isLoaded = !0;
        },
        fail: (v) => {
          b(a).childrenStates.loadingError = z(v);
        },
        end: () => {
          b(a).childrenStates.isLoading = !1;
        }
      });
    }, Ce = ({ action: n, args: a, isPending: l, start: v, succeed: p, fail: _, end: te }) => {
      if (!s.loadOptions || l())
        return;
      v();
      const q = ao((W, ge) => {
        W ? _(W) : p(ge), te();
      }), Ne = s.loadOptions({
        id: j(),
        instanceId: j(),
        action: n,
        ...a,
        callback: q
      });
      an(Ne) && Ne.then(() => {
        q();
      }, (W) => {
        q(W);
      }).catch((W) => {
        console.error(W);
      });
    }, bt = (n) => {
      G(
        () => !(n.id in i.forest.nodeMap && !i.forest.nodeMap[n.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(n.id)}. Their labels are "${i.forest.nodeMap[n.id].label}" and "${n.label}" respectively.`
      );
    }, Ot = (n) => {
      G(
        () => !(n.children === void 0 && n.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    }, Et = (n) => {
      if (s.disabled || n.isDisabled)
        return;
      C.value && Ye();
      const a = s.multiple && !s.flat ? i.forest.checkedStateMap[n.id] === lt : !Q(n);
      a ? wt(n) : Tt(n), Te(), P(a ? "select" : "deselect", n.raw, j()), i.localSearch.active && a && (C.value || s.clearOnSelect) && Ke(), C.value && s.closeOnSelect && (ae(), s.searchable && (i._blurOnSelect = !0)), P("update:modelValue", s.multiple ? i.forest.selectedNodeIds : i.forest.selectedNodeIds[0] || null);
    }, Ye = () => {
      E.value && (C.value || s.allowClearingDisabled ? i.forest.selectedNodeIds = [] : i.forest.selectedNodeIds = i.forest.selectedNodeIds.filter(
        (n) => b(n).isDisabled
      ), Te(), P("update:modelValue", null));
    }, wt = (n) => {
      if (C.value || s.disableBranchNodes)
        return X(n);
      if (s.flat) {
        X(n), s.autoSelectAncestors ? n.ancestors.forEach((l) => {
          !Q(l) && !l.isDisabled && X(l);
        }) : s.autoSelectDescendants && de(n, (l) => {
          !Q(l) && !l.isDisabled && X(l);
        });
        return;
      }
      const a = n.isLeaf || /* node.isBranch && */
      !n.hasDisabledDescendants || /* node.isBranch && */
      s.allowSelectingDisabledDescendants;
      if (a && X(n), n.isBranch && de(n, (l) => {
        (!l.isDisabled || s.allowSelectingDisabledDescendants) && X(l);
      }), a) {
        let l = n;
        for (; (l = l.parentNode) !== se && l.children.every(Q); )
          X(l);
      }
    }, Tt = (n) => {
      if (s.disableBranchNodes)
        return Y(n);
      if (s.flat) {
        Y(n), s.autoDeselectAncestors ? n.ancestors.forEach((l) => {
          Q(l) && !l.isDisabled && Y(l);
        }) : s.autoDeselectDescendants && de(n, (l) => {
          Q(l) && !l.isDisabled && Y(l);
        });
        return;
      }
      let a = !1;
      if (n.isBranch && we(n, (l) => {
        (!l.isDisabled || s.allowSelectingDisabledDescendants) && (Y(l), a = !0);
      }), n.isLeaf || /* node.isBranch && */
      a || /* node.isBranch && */
      n.children.length === 0) {
        Y(n);
        let l = n;
        for (; (l = l.parentNode) !== se && Q(l); )
          Y(l);
      }
    }, X = (n) => {
      i.forest.selectedNodeIds.push(n.id), i.forest.selectedNodeMap[n.id] = !0;
    }, Y = (n) => {
      tn(i.forest.selectedNodeIds, n.id), delete i.forest.selectedNodeMap[n.id];
    }, Ln = () => {
      if (!E.value)
        return;
      if (C.value)
        return Ye();
      const n = zt(B.value), a = b(n);
      Et(a);
    }, Ct = () => {
      const n = he();
      n && (o.value.lastScrollPosition = n.scrollTop);
    }, Nt = () => {
      const n = he();
      n && (n.scrollTop = o.value.lastScrollPosition);
    }, Ge = () => {
      const { searchQuery: n } = i.trigger, a = Pe(), l = () => {
        re(), pe(!0);
      };
      if ((n === "" || s.cacheOptions) && a.isLoaded)
        return l();
      Ce({
        action: _o,
        args: { searchQuery: n },
        isPending() {
          return a.isLoading;
        },
        start: () => {
          a.isLoading = !0, a.isLoaded = !1, a.loadingError = "";
        },
        succeed: (v) => {
          a.isLoaded = !0, a.options = v, i.trigger.searchQuery === n && l();
        },
        fail: (v) => {
          a.loadingError = z(v);
        },
        end: () => {
          a.isLoading = !1;
        }
      });
    };
    return K(yn, (n) => {
      n ? me() : ae();
    }), K(_n, () => {
      re();
    }), K(Sn, (n) => {
      n && i.menu.isOpen ? ae() : !n && !i.menu.isOpen && s.alwaysOpen && me();
    }), K(bn, () => {
      re();
    }), K(B.value, (n, a) => {
      Ft(n, a) && P("update:modelValue", Be(), j());
    }), K(On, () => {
      re();
    }), K(En, (n) => {
      n && Te();
    }), K(wn, () => {
      s.async || (re(), i.rootOptionsStates.isLoaded = Array.isArray(s.options));
    }, {
      deep: !0,
      immediate: !0
    }), K(vn, () => {
      s.async ? Ge() : gt(), P("search-change", i.trigger.searchQuery, j());
    }), K(gn, () => {
      const n = Z();
      Ft(n, B.value) && Ve(n);
    }), zn(() => {
      ct(), ut(), i.isReady = !0, s.autoFocus && mt(), !s.options && !s.async && s.autoLoadRootOptions && qe(), s.alwaysOpen && me(), s.async && s.defaultOptions && Ge();
    }), Fn("instance", Ee.value), (n, a) => (h(), m("div", {
      ref_key: "wrapper",
      ref: c,
      class: V(ke.value)
    }, [
      i.isReady ? (h(), m(H, { key: 0 }, [
        I(wo),
        I(rr, {
          ref_key: "control",
          ref: r
        }, null, 512),
        e.appendToBody ? (h(), F(Xr, {
          key: 0,
          ref_key: "portal",
          ref: u
        }, null, 512)) : (h(), F(jr, {
          key: 1,
          ref_key: "rmenu",
          ref: o
        }, null, 512))
      ], 64)) : w("", !0)
    ], 2));
  }
}), Jr = {
  components: { Treeselect: Gr },
  data() {
    return {
      test: "b",
      test2: ["b", "c"],
      options: [{
        id: "a",
        label: "a",
        children: [{
          id: "aa",
          label: "aa"
        }, {
          id: "ab",
          label: "ab"
        }]
      }, {
        id: "b",
        label: "b"
      }, {
        id: "c",
        label: "c"
      }]
    };
  },
  methods: {
    handleEvent(e, t) {
      console.log(e, t);
    }
  },
  watch: {
    test(e, t) {
      console.log(e, t);
    },
    test2(e, t) {
      console.log(e, t);
    }
  }
}, Zr = /* @__PURE__ */ O("div", null, "SINGLE VALUE", -1), ea = /* @__PURE__ */ O("div", null, "MULTIPLE VALUE", -1);
function ta(e, t, r, c, u, o) {
  const f = R("Treeselect");
  return h(), m("div", null, [
    Zr,
    I(f, {
      modelValue: u.test,
      "onUpdate:modelValue": [
        t[0] || (t[0] = (d) => u.test = d),
        t[3] || (t[3] = (d) => o.handleEvent(d, "update"))
      ],
      options: u.options,
      onOpen: t[1] || (t[1] = (d) => o.handleEvent(d, "open")),
      onClose: t[2] || (t[2] = (d) => o.handleEvent(d, "close")),
      onSelect: t[4] || (t[4] = (d) => o.handleEvent(d, "select")),
      onDeselect: t[5] || (t[5] = (d) => o.handleEvent(d, "deselect")),
      onSearchChange: t[6] || (t[6] = (d) => o.handleEvent(d, "search-change")),
      "close-on-select": !1
    }, null, 8, ["modelValue", "options"]),
    ea,
    I(f, {
      modelValue: u.test2,
      "onUpdate:modelValue": [
        t[7] || (t[7] = (d) => u.test2 = d),
        t[10] || (t[10] = (d) => o.handleEvent(d, "update"))
      ],
      options: u.options,
      multiple: !0,
      onOpen: t[8] || (t[8] = (d) => o.handleEvent(d, "open")),
      onClose: t[9] || (t[9] = (d) => o.handleEvent(d, "close")),
      onSelect: t[11] || (t[11] = (d) => o.handleEvent(d, "select")),
      onDeselect: t[12] || (t[12] = (d) => o.handleEvent(d, "deselect")),
      onSearchChange: t[13] || (t[13] = (d) => o.handleEvent(d, "search-change"))
    }, null, 8, ["modelValue", "options"])
  ]);
}
const na = /* @__PURE__ */ k(Jr, [["render", ta]]), sa = Xt(na);
sa.mount("#app");
export {
  _o as ASYNC_SEARCH,
  yo as LOAD_CHILDREN_OPTIONS,
  go as LOAD_ROOT_OPTIONS,
  Gr as Treeselect,
  Gr as default
};
