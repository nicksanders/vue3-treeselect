import { defineComponent as Ut, openBlock as h, createElementBlock as m, Fragment as H, renderList as Oe, createCommentVNode as w, createElementVNode as O, normalizeStyle as ot, toDisplayString as M, normalizeClass as V, resolveComponent as R, createTextVNode as U, createBlock as F, createVNode as I, TransitionGroup as In, renderSlot as kn, Transition as it, withCtx as ie, toRaw as qt, createApp as Xt, ref as xe, useSlots as Bn, reactive as Vn, computed as T, nextTick as Me, watch as K, onMounted as zn, provide as Fn } from "vue";
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function re(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Hn(e, t) {
  var o = t.length, c = e.length;
  if (c > o)
    return !1;
  if (c === o)
    return e === t;
  e:
    for (var u = 0, r = 0; u < c; u++) {
      for (var f = e.charCodeAt(u); r < o; )
        if (t.charCodeAt(r++) === f)
          continue e;
      return !1;
    }
  return !0;
}
var Wn = Hn;
const $n = /* @__PURE__ */ re(Wn);
function Pn() {
}
var jn = Pn;
const Qn = /* @__PURE__ */ re(jn), G = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Qn
) : function(t, o) {
  if (!t()) {
    const c = ["[Vue-Treeselect Warning]"].concat(o());
    console.error(...c);
  }
};
function ce(e) {
  return function(o, ...c) {
    o.type === "mousedown" && o.button === 0 && e.call(this, o, ...c);
  };
}
function Kn(e, t) {
  const o = e.getBoundingClientRect(), c = t.getBoundingClientRect(), u = t.offsetHeight / 3;
  c.bottom + u > o.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + u,
    e.scrollHeight
  ) : c.top - u < o.top && (e.scrollTop = Math.max(t.offsetTop - u, 0));
}
function Un(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yt = Un, qn = typeof Le == "object" && Le && Le.Object === Object && Le, Xn = qn, Yn = Xn, Gn = typeof self == "object" && self && self.Object === Object && self, Jn = Yn || Gn || Function("return this")(), Gt = Jn, Zn = Gt, es = function() {
  return Zn.Date.now();
}, ts = es, ns = /\s/;
function ss(e) {
  for (var t = e.length; t-- && ns.test(e.charAt(t)); )
    ;
  return t;
}
var rs = ss, os = rs, as = /^\s+/;
function ls(e) {
  return e && e.slice(0, os(e) + 1).replace(as, "");
}
var is = ls, cs = Gt, us = cs.Symbol, Jt = us, Mt = Jt, Zt = Object.prototype, ds = Zt.hasOwnProperty, hs = Zt.toString, ye = Mt ? Mt.toStringTag : void 0;
function fs(e) {
  var t = ds.call(e, ye), o = e[ye];
  try {
    e[ye] = void 0;
    var c = !0;
  } catch {
  }
  var u = hs.call(e);
  return c && (t ? e[ye] = o : delete e[ye]), u;
}
var ps = fs, ms = Object.prototype, vs = ms.toString;
function gs(e) {
  return vs.call(e);
}
var ys = gs, Lt = Jt, _s = ps, Ss = ys, bs = "[object Null]", Os = "[object Undefined]", Rt = Lt ? Lt.toStringTag : void 0;
function Es(e) {
  return e == null ? e === void 0 ? Os : bs : Rt && Rt in Object(e) ? _s(e) : Ss(e);
}
var ws = Es;
function Ts(e) {
  return e != null && typeof e == "object";
}
var Cs = Ts, Ns = ws, Ds = Cs, xs = "[object Symbol]";
function Ms(e) {
  return typeof e == "symbol" || Ds(e) && Ns(e) == xs;
}
var Ls = Ms, Rs = is, At = Yt, As = Ls, It = NaN, Is = /^[-+]0x[0-9a-f]+$/i, ks = /^0b[01]+$/i, Bs = /^0o[0-7]+$/i, Vs = parseInt;
function zs(e) {
  if (typeof e == "number")
    return e;
  if (As(e))
    return It;
  if (At(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = At(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rs(e);
  var o = ks.test(e);
  return o || Bs.test(e) ? Vs(e.slice(2), o ? 2 : 8) : Is.test(e) ? It : +e;
}
var en = zs, Fs = Yt, tt = ts, kt = en, Hs = "Expected a function", Ws = Math.max, $s = Math.min;
function Ps(e, t, o) {
  var c, u, r, f, d, y, S = 0, L = !1, D = !1, z = !0;
  if (typeof e != "function")
    throw new TypeError(Hs);
  t = kt(t) || 0, Fs(o) && (L = !!o.leading, D = "maxWait" in o, r = D ? Ws(kt(o.maxWait) || 0, t) : r, z = "trailing" in o ? !!o.trailing : z);
  function Z(E) {
    var C = c, A = u;
    return c = u = void 0, S = E, f = e.apply(A, C), f;
  }
  function P(E) {
    return S = E, d = setTimeout(i, t), L ? Z(E) : f;
  }
  function Ie(E) {
    var C = E - y, A = E - S, ee = t - C;
    return D ? $s(ee, r - A) : ee;
  }
  function s(E) {
    var C = E - y, A = E - S;
    return y === void 0 || C >= t || C < 0 || D && A >= r;
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
var js = Ps;
const Qs = /* @__PURE__ */ re(js);
var Ks = function(e, t) {
  var o = document.createElement("_"), c = o.appendChild(document.createElement("_")), u = o.appendChild(document.createElement("_")), r = c.appendChild(document.createElement("_")), f = void 0, d = void 0;
  return c.style.cssText = o.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", r.style.cssText = u.style.cssText = "display:block;height:100%;transition:0s;width:100%", r.style.width = r.style.height = "200%", e.appendChild(o), y(), L;
  function y() {
    S();
    var D = e.offsetWidth, z = e.offsetHeight;
    (D !== f || z !== d) && (f = D, d = z, u.style.width = D * 2 + "px", u.style.height = z * 2 + "px", o.scrollLeft = o.scrollWidth, o.scrollTop = o.scrollHeight, c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, t({ width: D, height: z })), c.addEventListener("scroll", y), o.addEventListener("scroll", y);
  }
  function S() {
    c.removeEventListener("scroll", y), o.removeEventListener("scroll", y);
  }
  function L() {
    S(), e.removeChild(o);
  }
};
function tn(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
let at;
const Ae = [], Us = 100;
function qs() {
  at = setInterval(() => {
    Ae.forEach(nn);
  }, Us);
}
function Xs() {
  clearInterval(at), at = null;
}
function nn(e) {
  const { $el: t, listener: o, lastWidth: c, lastHeight: u } = e, r = t.offsetWidth, f = t.offsetHeight;
  (c !== r || u !== f) && (e.lastWidth = r, e.lastHeight = f, o({ width: r, height: f }));
}
function Ys(e, t) {
  const o = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, c = () => {
    tn(Ae, o), Ae.length || Xs();
  };
  return Ae.push(o), nn(o), qs(), c;
}
function sn(e, t) {
  const o = document.documentMode === 9;
  let c = !0;
  const f = (o ? Ys : Ks)(e, (...d) => c || t(...d));
  return c = !1, f;
}
function Gs(e) {
  const t = [];
  let o = e.parentNode;
  for (; o && o.nodeName !== "BODY" && o.nodeType === document.ELEMENT_NODE; )
    Js(o) && t.push(o), o = o.parentNode;
  return t.push(window), t;
}
function Js(e) {
  const { overflow: t, overflowX: o, overflowY: c } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + c + o);
}
function rn(e, t) {
  const o = Gs(e);
  return window.addEventListener("resize", t, { passive: !0 }), o.forEach((c) => {
    c.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), o.forEach((u) => {
      u.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function on(e) {
  return e !== e;
}
function an(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Zs = en, Bt = 1 / 0, er = 17976931348623157e292;
function tr(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Zs(e), e === Bt || e === -Bt) {
    var t = e < 0 ? -1 : 1;
    return t * er;
  }
  return e === e ? e : 0;
}
var nr = tr, sr = nr;
function rr(e) {
  var t = sr(e), o = t % 1;
  return t === t ? o ? t - o : t : 0;
}
var or = rr, ar = or, lr = "Expected a function";
function ir(e, t) {
  var o;
  if (typeof t != "function")
    throw new TypeError(lr);
  return e = ar(e), function() {
    return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = void 0), o;
  };
}
var cr = ir, ur = cr;
function dr(e) {
  return ur(2, e);
}
var hr = dr;
const fr = /* @__PURE__ */ re(hr);
function pr(e) {
  return e;
}
var mr = pr;
const vr = /* @__PURE__ */ re(mr);
function gr(e) {
  return function() {
    return e;
  };
}
var yr = gr;
const Vt = /* @__PURE__ */ re(yr), $ = () => /* @__PURE__ */ Object.create(null);
function _r(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Sr = _r;
const zt = /* @__PURE__ */ re(Sr);
function J(e, t) {
  return e.indexOf(t) !== -1;
}
function ln(e, t, o) {
  for (let c = 0, u = e.length; c < u; c++)
    if (t.call(o, e[c], c, e))
      return e[c];
}
function Ft(e, t) {
  if (e.length !== t.length)
    return !0;
  for (let o = 0; o < e.length; o++)
    if (e[o] !== t[o])
      return !0;
  return !1;
}
let br = 0;
const Or = () => br++, se = null, lt = 0, cn = 1, un = 2, le = "ALL_CHILDREN", _e = "ALL_DESCENDANTS", Se = "LEAF_CHILDREN", be = "LEAF_DESCENDANTS", Er = "LOAD_ROOT_OPTIONS", wr = "LOAD_CHILDREN_OPTIONS", Tr = "ASYNC_SEARCH", nt = "ALL", Re = "BRANCH_PRIORITY", st = "LEAF_PRIORITY", rt = "ALL_WITH_INDETERMINATE", Ht = "ORDER_SELECTED", Wt = "LEVEL", $t = "INDEX", x = {
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
}, Cr = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Pt = 5, jt = 40, k = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, u] of t)
    o[c] = u;
  return o;
}, Nr = Ut({
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
      return typeof e == "string" ? e : e != null && !on(e) ? JSON.stringify(e) : "";
    }
  }
}), Dr = ["name", "value"];
function xr(e, t, o, c, u, r) {
  return e.canRender ? (h(!0), m(H, { key: 0 }, Oe(e.values, (f, d) => (h(), m("input", {
    type: "hidden",
    name: e.instance.name,
    value: f,
    key: "hidden-field-" + d
  }, null, 8, Dr))), 128)) : w("", !0);
}
const Mr = /* @__PURE__ */ k(Nr, [["render", xr]]), Lr = [
  x.ENTER,
  x.END,
  x.HOME,
  x.ARROW_LEFT,
  x.ARROW_UP,
  x.ARROW_RIGHT,
  x.ARROW_DOWN
], Rr = {
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
    this.debouncedCallback = Qs(
      this.updateSearchQuery,
      Cr,
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
      const { instance: t } = this, o = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && J(Lr, o))
          return e.preventDefault(), t.openMenu();
        switch (o) {
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
}, Ar = ["tabindex"], Ir = ["tabIndex", "required", "value"];
function kr(e, t, o, c, u, r) {
  return h(), m("div", {
    class: "vue-treeselect__input-container",
    tabindex: !r.instance.searchable && !r.instance.disabled ? r.instance.tabIndex : "",
    onFocus: t[5] || (t[5] = (f) => r.instance.searchable ? null : r.onFocus),
    onBlur: t[6] || (t[6] = (f) => r.instance.searchable ? null : r.onBlur),
    onKeydown: t[7] || (t[7] = (f) => r.instance.searchable ? null : r.onKeyDown)
  }, [
    r.instance.searchable && !r.instance.disabled ? (h(), m(H, { key: 0 }, [
      O("input", {
        ref: "input",
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabIndex: r.instance.tabIndex,
        required: r.instance.required && !r.instance.hasValue,
        value: e.value,
        style: ot(r.inputStyle),
        onFocus: t[0] || (t[0] = (...f) => r.onFocus && r.onFocus(...f)),
        onInput: t[1] || (t[1] = (...f) => r.onInput && r.onInput(...f)),
        onBlur: t[2] || (t[2] = (...f) => r.onBlur && r.onBlur(...f)),
        onKeydown: t[3] || (t[3] = (...f) => r.onKeyDown && r.onKeyDown(...f)),
        onMousedown: t[4] || (t[4] = (...f) => r.onMouseDown && r.onMouseDown(...f))
      }, null, 44, Ir),
      r.needAutoSize ? (h(), m("div", {
        key: 0,
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, M(e.value), 513)) : w("", !0)
    ], 64)) : w("", !0)
  ], 40, Ar);
}
const dn = /* @__PURE__ */ k(Rr, [["render", kr]]), Br = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"]
};
function Vr(e, t, o, c, u, r) {
  return h(), m("div", {
    class: V({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": r.instance.hasValue || r.instance.trigger.searchQuery
    })
  }, M(r.instance.placeholder), 3);
}
const hn = /* @__PURE__ */ k(Br, [["render", Vr]]), zr = {
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
}, Fr = { style: { height: "100%" } }, Hr = {
  key: 0,
  class: "vue-treeselect__value-container"
}, Wr = { class: "vue-treeselect__single-value s-value-container" };
function $r(e, t, o, c, u, r) {
  const f = R("Placeholder"), d = R("Input");
  return h(), m("div", Fr, [
    r.hasValue && !r.hasActiveQuery ? (h(), m("div", Hr, [
      O("div", Wr, [
        r.instance.$slots["value-label"] ? (h(), m(H, { key: 0 }, [
          U(M(r.instance.$slots["value-label"]), 1)
        ], 64)) : (h(), m(H, { key: 1 }, [
          U(M(r.node.label), 1)
        ], 64))
      ])
    ])) : w("", !0),
    !r.hasValue && !r.hasActiveQuery ? (h(), F(f, {
      key: 1,
      class: "s-value-container"
    })) : w("", !0),
    I(d, { ref: "input" }, null, 512)
  ]);
}
const Qt = /* @__PURE__ */ k(zr, [["render", $r]]), Pr = {
  name: "vue-treeselect--x"
}, jr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Qr = /* @__PURE__ */ O("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Kr = [
  Qr
];
function Ur(e, t, o, c, u, r) {
  return h(), m("svg", jr, Kr);
}
const fn = /* @__PURE__ */ k(Pr, [["render", Ur]]), qr = {
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
      const { instance: t, node: o } = this;
      t.select(o);
    })
  }
}, Xr = { class: "vue-treeselect__multi-value-item-container" }, Yr = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function Gr(e, t, o, c, u, r) {
  const f = R("DeleteIcon");
  return h(), m("div", Xr, [
    O("div", {
      class: V(r.itemClass),
      onMousedown: t[0] || (t[0] = (...d) => r.handleMouseDown && r.handleMouseDown(...d))
    }, [
      r.instance.$slots["value-label"] ? (h(), m(H, { key: 0 }, [
        U(M(r.instance.$slots["value-label"]), 1)
      ], 64)) : (h(), m(H, { key: 1 }, [
        U(M(o.node.label), 1)
      ], 64)),
      O("span", Yr, [
        I(f)
      ])
    ], 34)
  ]);
}
const Jr = /* @__PURE__ */ k(qr, [["render", Gr]]), Zr = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  components: { Placeholder: hn, TransitionGroup: In, Input: dn, MultiValueItem: Jr },
  computed: {
    multiValueItems() {
      return this.instance.internalValue.value.slice(0, this.instance.limit).map(this.instance.getNode);
    },
    count() {
      return this.instance.internalValue.length - this.instance.limit;
    }
  }
}, eo = {
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
  key: "exceed-limit-tip"
}, to = { class: "vue-treeselect__limit-tip-text" };
function no(e, t, o, c, u, r) {
  const f = R("MultiValueItem"), d = R("Placeholder"), y = R("Input");
  return h(), m("div", null, [
    (h(!0), m(H, null, Oe(r.multiValueItems, (S) => (h(), F(f, {
      key: `multi-value-item-${S.id}`,
      node: S
    }, null, 8, ["node"]))), 128)),
    r.count > 0 ? (h(), m("div", eo, [
      O("span", to, M(r.instance.limitText(r.count)), 1)
    ])) : w("", !0),
    r.multiValueItems.length ? w("", !0) : (h(), F(d, { key: "placeholder" })),
    I(y, {
      ref: "input",
      key: "input"
    }, null, 512)
  ]);
}
const Kt = /* @__PURE__ */ k(Zr, [["render", no]]), so = {
  name: "vue-treeselect--arrow"
}, ro = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, oo = /* @__PURE__ */ O("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1), ao = [
  oo
];
function lo(e, t, o, c, u, r) {
  return h(), m("svg", ro, ao);
}
const pn = /* @__PURE__ */ k(so, [["render", lo]]), io = {
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
      const { instance: o } = this, c = o.beforeClearAll(), u = (r) => {
        r && o.clear();
      };
      an(c) ? c.then(u) : setTimeout(() => u(c), 0);
    }),
    handleMouseDownOnArrow: ce(function(t) {
      t.preventDefault(), t.stopPropagation();
      const { instance: o } = this;
      o.focusInput(), o.toggleMenu();
    })
    // This is meant to be called by child `<Value />` component.
  }
}, co = ["title"];
function uo(e, t, o, c, u, r) {
  const f = R("SingleValue"), d = R("MultiValue"), y = R("DeleteIcon"), S = R("ArrowIcon");
  return h(), m("div", {
    class: "vue-treeselect__control",
    onMousedown: t[2] || (t[2] = (...L) => r.instance.handleMouseDown && r.instance.handleMouseDown(...L))
  }, [
    r.instance.single ? (h(), F(f, {
      key: 0,
      ref: "value-container"
    }, null, 512)) : (h(), F(d, {
      key: 1,
      ref: "value-container"
    }, null, 512)),
    r.shouldShowX ? (h(), m("div", {
      key: 2,
      class: "vue-treeselect__x-container",
      title: r.getTitleX(),
      onMousedown: t[0] || (t[0] = (...L) => r.handleMouseDownOnX && r.handleMouseDownOnX(...L))
    }, [
      I(y, { class: "vue-treeselect__x" })
    ], 40, co)) : w("", !0),
    O("div", {
      class: "vue-treeselect__control-arrow-container",
      onMousedown: t[1] || (t[1] = (...L) => r.handleMouseDownOnArrow && r.handleMouseDownOnArrow(...L))
    }, [
      I(S, {
        class: V(r.getArrowClass())
      }, null, 8, ["class"])
    ], 32)
  ], 32);
}
const ho = /* @__PURE__ */ k(io, [["render", uo]]), fo = Ut({
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
}), po = { class: "vue-treeselect__icon-container" };
function mo(e, t, o, c, u, r) {
  return h(), m("div", {
    class: V(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
  }, [
    O("div", po, [
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
const mn = /* @__PURE__ */ k(fo, [["render", mo]]), vo = {
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
      const { instance: t, node: o } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(o, !1);
    },
    handleMouseDownOnArrow: ce(function() {
      const { instance: t, node: o } = this;
      t.toggleExpanded(o);
    }),
    handleMouseDownOnLabelContainer: ce(function() {
      const { instance: t, node: o } = this;
      o.isBranch && t.disableBranchNodes ? t.toggleExpanded(o) : t.select(o);
    }),
    handleMouseDownOnRetry: ce(function() {
      const { instance: t, node: o } = this;
      t.loadChildrenOptions(o);
    })
  }
}, go = ["data-id"], yo = { key: 1 }, _o = /* @__PURE__ */ O("div", { class: "vue-treeselect__option-arrow-placeholder" }, " ", -1), So = [
  _o
], bo = { key: 0 }, Oo = { class: "vue-treeselect__checkbox-container" }, Eo = /* @__PURE__ */ O("span", { class: "vue-treeselect__check-mark" }, null, -1), wo = /* @__PURE__ */ O("span", { class: "vue-treeselect__minus-mark" }, null, -1), To = [
  Eo,
  wo
], Co = { key: 1 }, No = { key: 2 }, Do = {
  class: /* @__PURE__ */ V("vue-treeselect__label")
}, xo = {
  key: 0,
  class: /* @__PURE__ */ V("vue-treeselect__count")
}, Mo = { key: 0 }, Lo = { class: "vue-treeselect__list" }, Ro = { key: 0 }, Ao = { key: 1 }, Io = { key: 2 }, ko = { key: 3 }, Bo = ["title"];
function Vo(e, t, o, c, u, r) {
  const f = R("ArrowIcon"), d = R("VueTreeselectOption"), y = R("Tip");
  return h(), m("div", {
    class: V({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.instance.shouldFlattenOptions ? 0 : o.node.level}`]: !0
    })
  }, [
    O("div", {
      class: V({
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": o.node.isDisabled,
        "vue-treeselect__option--selected": r.instance.isSelected(o.node),
        "vue-treeselect__option--highlight": o.node.isHighlighted,
        "vue-treeselect__option--matched": r.instance.localSearch.active && o.node.isMatched,
        "vue-treeselect__option--hide": !r.shouldShow
      }),
      onMouseenter: t[2] || (t[2] = (...S) => r.handleMouseEnterOption && r.handleMouseEnterOption(...S)),
      "data-id": o.node.id
    }, [
      r.instance.shouldFlattenOptions && this.shouldShow ? w("", !0) : (h(), m(H, { key: 0 }, [
        o.node.isBranch ? (h(), m("div", {
          key: 0,
          class: "vue-treeselect__option-arrow-container",
          onMousedown: t[0] || (t[0] = (...S) => r.handleMouseDownOnArrow && r.handleMouseDownOnArrow(...S))
        }, [
          I(f, {
            class: V({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": r.shouldExpand
            })
          }, null, 8, ["class"])
        ], 32)) : w("", !0),
        r.instance.hasBranchNodes ? (h(), m("div", yo, So)) : w("", !0)
      ], 64)),
      O("div", {
        class: "vue-treeselect__label-container",
        onMousedown: t[1] || (t[1] = (...S) => r.handleMouseDownOnLabelContainer && r.handleMouseDownOnLabelContainer(...S))
      }, [
        !r.instance.single && !(r.instance.disableBranchNodes && o.node.isBranch) ? (h(), m("div", bo, [
          O("div", Oo, [
            O("span", {
              class: V({
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": r.checkedState === u.CHECKED,
                "vue-treeselect__checkbox--indeterminate": r.checkedState === u.INDETERMINATE,
                "vue-treeselect__checkbox--unchecked": r.checkedState === u.UNCHECKED,
                "vue-treeselect__checkbox--disabled": o.node.isDisabled
              })
            }, To, 2)
          ])
        ])) : w("", !0),
        r.instance.$slots["option-label"] ? (h(), m("div", Co, M(r.instance.$slots["option-label"]), 1)) : (h(), m("div", No, [
          O("label", Do, [
            U(M(o.node.label) + " ", 1),
            r.shouldShowCount ? (h(), m("span", xo, "({ getCount() })")) : w("", !0)
          ])
        ]))
      ], 32)
    ], 42, go),
    o.node.isBranch && r.shouldExpand ? (h(), m("div", Mo, [
      I(it, { name: "vue-treeselect__list--transition" }, {
        default: ie(() => [
          O("div", Lo, [
            o.node.childrenStates.isLoaded ? (h(), m("div", Ro, [
              (h(!0), m(H, null, Oe(o.node.children, (S) => (h(), F(d, {
                node: S,
                key: S.id
              }, null, 8, ["node"]))), 128))
            ])) : w("", !0),
            o.node.childrenStates.isLoaded || !o.node.children.length ? (h(), m("div", Ao, [
              I(y, {
                type: "no-children",
                icon: "warning"
              }, {
                default: ie(() => [
                  U(M(r.instance.noChildrenText), 1)
                ]),
                _: 1
              })
            ])) : w("", !0),
            o.node.childrenStates.isLoading ? (h(), m("div", Io, [
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
            o.node.childrenStates.loadingError ? (h(), m("div", ko, [
              I(y, {
                type: "error",
                icon: "error"
              }, {
                default: ie(() => [
                  U(" { node.childrenStates.loadingError } "),
                  O("a", {
                    class: "vue-treeselect__retry",
                    title: r.instance.retryTitle,
                    onMousedown: t[3] || (t[3] = (...S) => r.handleMouseDownOnRetry && r.handleMouseDownOnRetry(...S))
                  }, M(r.instance.retryText), 41, Bo)
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
const zo = /* @__PURE__ */ k(vo, [["render", Vo]]), Fo = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, Ho = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  components: { Transition: it, Tip: mn, Option: zo },
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
      const t = e.getMenu(), o = e.getControl(), c = t.getBoundingClientRect(), u = o.getBoundingClientRect(), r = c.height, f = window.innerHeight, d = u.top, y = window.innerHeight - u.bottom, S = u.top >= 0 && u.top <= f || u.top < 0 && u.bottom > 0, L = y > r + jt, D = d > r + jt;
      S ? e.openDirection !== "auto" ? e.menu.placement = Fo[e.openDirection] : L || !D ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
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
        remove: rn(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  }
}, Wo = { key: 0 }, $o = { key: 1 }, Po = /* @__PURE__ */ O("div", null, "2", -1), jo = ["title"], Qo = {
  key: 1,
  class: "vue-treeselect__list"
}, Ko = { key: 2 }, Uo = ["title"], qo = {
  key: 1,
  class: "vue-treeselect__list"
}, Xo = { key: 3 };
function Yo(e, t, o, c, u, r) {
  const f = R("Tip"), d = R("Option");
  return h(), m("div", {
    ref: "menu-container",
    class: "vue-treeselect__menu-container",
    style: ot(r.menuContainerStyle)
  }, [
    r.instance.menu.isOpen ? (h(), m("div", {
      key: 0,
      ref: "menu",
      class: "vue-treeselect__menu",
      onMousedown: t[2] || (t[2] = (...y) => r.instance.handleMouseDown && r.instance.handleMouseDown(...y)),
      style: ot(r.menuStyle)
    }, [
      r.instance.$slots["before-list"] ? (h(), m("div", Wo, M(r.instance.$slots["before-list"]), 1)) : w("", !0),
      r.instance.async ? (h(), m("div", $o, [
        Po,
        r.getTipIcon() ? (h(), F(f, {
          key: 0,
          type: "search-prompt",
          icon: r.getTipIcon()
        }, {
          default: ie(() => [
            U(M(r.getTipText()) + " ", 1),
            r.getTipIcon() === "error" ? (h(), m("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: t[0] || (t[0] = (...y) => r.instance.handleRemoteSearch && r.instance.handleRemoteSearch(...y)),
              title: r.instance.retryTitle
            }, M(r.instance.retryText), 9, jo)) : w("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (h(), m("div", Qo, [
          (h(!0), m(H, null, Oe(r.instance.forest.normalizedOptions, (y) => (h(), F(d, {
            node: y,
            key: y.id
          }, null, 8, ["node"]))), 128))
        ]))
      ])) : (h(), m("div", Ko, [
        O("div", null, [
          r.getNormalTip() ? (h(), F(f, {
            key: 0,
            type: "search-prompt",
            icon: r.getNormalTip()[0]
          }, {
            default: ie(() => [
              U(M(r.getNormalTip()[1]) + " ", 1),
              r.getNormalTip()[2] ? (h(), m("a", {
                key: 0,
                class: "vue-treeselect__retry",
                onClick: t[1] || (t[1] = (...y) => r.instance.loadRootOptions && r.instance.loadRootOptions(...y)),
                title: r.instance.retryTitle
              }, M(r.instance.retryText), 9, Uo)) : w("", !0)
            ]),
            _: 1
          }, 8, ["icon"])) : (h(), m("div", qo, [
            (h(!0), m(H, null, Oe(r.normalizedOptions, (y) => (h(), F(d, {
              node: y,
              key: y.id
            }, null, 8, ["node"]))), 128))
          ]))
        ])
      ])),
      r.instance.$slots["after-list"] ? (h(), m("div", Xo, M(r.instance.$slots["after-list"]), 1)) : w("", !0)
    ], 36)) : w("", !0)
  ], 4);
}
const Go = /* @__PURE__ */ k(Ho, [["render", Yo]]), Jo = {
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
        remove: rn(t, this.updateMenuContainerOffset)
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
      const { instance: e } = this, t = e.getControl(), o = this.$el, c = t.getBoundingClientRect(), u = o.getBoundingClientRect(), r = e.menu.placement === "bottom" ? c.height : 0, f = Math.round(c.left - u.left) + "px", d = Math.round(c.top - u.top + r) + "px", y = this.$refs.menu.$refs["menu-container"].style, L = ln(["transform", "webkitTransform", "MozTransform", "msTransform"], (D) => D in document.body.style);
      y[L] = `translate(${f}, ${d})`;
    }
  },
  unmounted() {
    this.removeHandlers();
  }
}, Zo = {
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
        ...Jo
      }), this.portalTarget.mount(e);
    },
    teardown() {
      document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
    }
  }
}, ea = { class: "vue-treeselect__menu-placeholder" };
function ta(e, t, o, c, u, r) {
  return h(), m("div", ea);
}
const na = /* @__PURE__ */ k(Zo, [["render", ta]]), sa = {
  name: "vue-treeselect"
}, ra = /* @__PURE__ */ Object.assign(sa, {
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
      default: vr
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
        return J([nt, Re, st, rt], e);
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
    const o = xe(null), c = xe(null), u = xe(null), r = xe(null), f = Or(), d = (n, a) => {
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
    }), L = (n) => typeof n == "string" ? n : typeof n == "number" && !on(n) ? n + "" : "", D = (n, a, l) => n ? $n(a, l) : J(l, a), z = (n) => n.message || /* istanbul ignore next */
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
        control: o.value,
        wrapper: c.value,
        portal: u.value,
        menu: r.value
      },
      menu: i.menu,
      single: C,
      verifyProps: ct,
      resetFlags: ut,
      initialize: oe,
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
      else if (s.valueConsistsOf === rt) {
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
    }, oe = () => {
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
      } else if (s.valueConsistsOf === rt) {
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
    }, pt = () => o.value.$refs["value-container"], We = () => pt().$refs.input, mt = () => {
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
    }, yt = (n) => i.localSearch.active ? n.isExpandedOnSearch : n.isExpanded, je = (n) => !!(n.isMatched || n.isBranch && n.hasMatchedDescendants && !s.flattenSearchResults || !n.isRootNode && n.parentNode.showAllChildrenOnSearch), _t = (n) => !(i.localSearch.active && !je(n)), Cn = () => o.value.$el, he = () => r.value.$el, fe = (n, a = !0) => {
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
        action: Er,
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
        action: wr,
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
      const q = fr((W, ge) => {
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
      n && (r.value.lastScrollPosition = n.scrollTop);
    }, Nt = () => {
      const n = he();
      n && (n.scrollTop = r.value.lastScrollPosition);
    }, Ge = () => {
      const { searchQuery: n } = i.trigger, a = Pe(), l = () => {
        oe(), pe(!0);
      };
      if ((n === "" || s.cacheOptions) && a.isLoaded)
        return l();
      Ce({
        action: Tr,
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
      oe();
    }), K(Sn, (n) => {
      n && i.menu.isOpen ? ae() : !n && !i.menu.isOpen && s.alwaysOpen && me();
    }), K(bn, () => {
      oe();
    }), K(B.value, (n, a) => {
      Ft(n, a) && P("update:modelValue", Be(), j());
    }), K(On, () => {
      oe();
    }), K(En, (n) => {
      n && Te();
    }), K(wn, () => {
      s.async || (oe(), i.rootOptionsStates.isLoaded = Array.isArray(s.options));
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
        I(Mr),
        I(ho, {
          ref_key: "control",
          ref: o
        }, null, 512),
        e.appendToBody ? (h(), F(na, {
          key: 0,
          ref_key: "portal",
          ref: u
        }, null, 512)) : (h(), F(Go, {
          key: 1,
          ref_key: "rmenu",
          ref: r
        }, null, 512))
      ], 64)) : w("", !0)
    ], 2));
  }
}), oa = {
  components: { Treeselect: ra },
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
}, aa = /* @__PURE__ */ O("div", null, "SINGLE VALUE", -1), la = /* @__PURE__ */ O("div", null, "MULTIPLE VALUE", -1);
function ia(e, t, o, c, u, r) {
  const f = R("Treeselect");
  return h(), m("div", null, [
    aa,
    I(f, {
      modelValue: u.test,
      "onUpdate:modelValue": [
        t[0] || (t[0] = (d) => u.test = d),
        t[3] || (t[3] = (d) => r.handleEvent(d, "update"))
      ],
      options: u.options,
      onOpen: t[1] || (t[1] = (d) => r.handleEvent(d, "open")),
      onClose: t[2] || (t[2] = (d) => r.handleEvent(d, "close")),
      onSelect: t[4] || (t[4] = (d) => r.handleEvent(d, "select")),
      onDeselect: t[5] || (t[5] = (d) => r.handleEvent(d, "deselect")),
      onSearchChange: t[6] || (t[6] = (d) => r.handleEvent(d, "search-change")),
      "close-on-select": !1
    }, null, 8, ["modelValue", "options"]),
    la,
    I(f, {
      modelValue: u.test2,
      "onUpdate:modelValue": [
        t[7] || (t[7] = (d) => u.test2 = d),
        t[10] || (t[10] = (d) => r.handleEvent(d, "update"))
      ],
      options: u.options,
      multiple: !0,
      onOpen: t[8] || (t[8] = (d) => r.handleEvent(d, "open")),
      onClose: t[9] || (t[9] = (d) => r.handleEvent(d, "close")),
      onSelect: t[11] || (t[11] = (d) => r.handleEvent(d, "select")),
      onDeselect: t[12] || (t[12] = (d) => r.handleEvent(d, "deselect")),
      onSearchChange: t[13] || (t[13] = (d) => r.handleEvent(d, "search-change"))
    }, null, 8, ["modelValue", "options"])
  ]);
}
const ca = /* @__PURE__ */ k(oa, [["render", ia]]), ua = Xt(ca);
ua.mount("#app");
export {
  Tr as ASYNC_SEARCH,
  wr as LOAD_CHILDREN_OPTIONS,
  Er as LOAD_ROOT_OPTIONS,
  ra as Treeselect,
  ra as default
};
