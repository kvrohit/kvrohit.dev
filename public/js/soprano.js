var app = (function () {
  "use strict";
  function t() {}
  const e = (t) => t;
  function n(t) {
    return t();
  }
  function o() {
    return Object.create(null);
  }
  function l(t) {
    t.forEach(n);
  }
  function a(t) {
    return "function" == typeof t;
  }
  function r(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  const s = "undefined" != typeof window;
  let f = s ? () => window.performance.now() : () => Date.now(),
    p = s ? (t) => requestAnimationFrame(t) : t;
  const c = new Set();
  function i(t) {
    c.forEach((e) => {
      e.c(t) || (c.delete(e), e.f());
    }),
      0 !== c.size && p(i);
  }
  function u(t, e) {
    t.appendChild(e);
  }
  function d(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function h(t) {
    t.parentNode.removeChild(t);
  }
  function y(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function g(t) {
    return document.createElement(t);
  }
  function m(t) {
    return document.createTextNode(t);
  }
  function b() {
    return m(" ");
  }
  function $(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function k(t, e, n, o) {
    t.style.setProperty(e, n, o ? "important" : "");
  }
  let w,
    v,
    x = 0,
    _ = {};
  function C(t, e, n, o, l, a, r, s = 0) {
    const f = 16.666 / o;
    let p = "{\n";
    for (let t = 0; t <= 1; t += f) {
      const o = e + (n - e) * a(t);
      p += 100 * t + `%{${r(o, 1 - o)}}\n`;
    }
    const c = p + `100% {${r(n, 1 - n)}}\n}`,
      i = `__svelte_${(function (t) {
        let e = 5381,
          n = t.length;
        for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
        return e >>> 0;
      })(c)}_${s}`;
    if (!_[i]) {
      if (!w) {
        const t = g("style");
        document.head.appendChild(t), (w = t.sheet);
      }
      (_[i] = !0), w.insertRule(`@keyframes ${i} ${c}`, w.cssRules.length);
    }
    const u = t.style.animation || "";
    return (
      (t.style.animation = `${
        u ? `${u}, ` : ""
      }${i} ${o}ms linear ${l}ms 1 both`),
      (x += 1),
      i
    );
  }
  function E(t, e) {
    (t.style.animation = (t.style.animation || "")
      .split(", ")
      .filter(e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte"))
      .join(", ")),
      e &&
        !--x &&
        p(() => {
          if (x) return;
          let t = w.cssRules.length;
          for (; t--; ) w.deleteRule(t);
          _ = {};
        });
  }
  function A(t) {
    v = t;
  }
  const S = [],
    B = [],
    M = [],
    D = [],
    N = Promise.resolve();
  let O,
    P = !1;
  function R(t) {
    M.push(t);
  }
  function j() {
    const t = new Set();
    do {
      for (; S.length; ) {
        const t = S.shift();
        A(t), F(t.$$);
      }
      for (; B.length; ) B.pop()();
      for (let e = 0; e < M.length; e += 1) {
        const n = M[e];
        t.has(n) || (n(), t.add(n));
      }
      M.length = 0;
    } while (S.length);
    for (; D.length; ) D.pop()();
    P = !1;
  }
  function F(t) {
    if (null !== t.fragment) {
      t.update(), l(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(R);
    }
  }
  function G(t, e, n) {
    t.dispatchEvent(
      (function (t, e) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, !1, !1, e), n;
      })(`${e ? "intro" : "outro"}${n}`)
    );
  }
  const q = new Set();
  let z;
  function L() {
    z = { r: 0, c: [], p: z };
  }
  function T() {
    z.r || l(z.c), (z = z.p);
  }
  function H(t, e) {
    t && t.i && (q.delete(t), t.i(e));
  }
  function I(t, e, n, o) {
    if (t && t.o) {
      if (q.has(t)) return;
      q.add(t),
        z.c.push(() => {
          q.delete(t), o && (n && t.d(1), o());
        }),
        t.o(e);
    }
  }
  const J = { duration: 0 };
  function K(n, o, r, s) {
    let u = o(n, r),
      d = s ? 0 : 1,
      h = null,
      y = null,
      g = null;
    function m() {
      g && E(n, g);
    }
    function b(t, e) {
      const n = t.b - d;
      return (
        (e *= Math.abs(n)),
        {
          a: d,
          b: t.b,
          d: n,
          duration: e,
          start: t.start,
          end: t.start + e,
          group: t.group,
        }
      );
    }
    function $(o) {
      const {
          delay: a = 0,
          duration: r = 300,
          easing: s = e,
          tick: $ = t,
          css: k,
        } = u || J,
        w = { start: f() + a, b: o };
      o || ((w.group = z), (z.r += 1)),
        h
          ? (y = w)
          : (k && (m(), (g = C(n, d, o, r, a, s, k))),
            o && $(0, 1),
            (h = b(w, r)),
            R(() => G(n, o, "start")),
            (function (t) {
              let e;
              0 === c.size && p(i),
                new Promise((n) => {
                  c.add((e = { c: t, f: n }));
                });
            })((t) => {
              if (
                (y &&
                  t > y.start &&
                  ((h = b(y, r)),
                  (y = null),
                  G(n, h.b, "start"),
                  k && (m(), (g = C(n, d, h.b, h.duration, 0, s, u.css)))),
                h)
              )
                if (t >= h.end)
                  $((d = h.b), 1 - d),
                    G(n, h.b, "end"),
                    y || (h.b ? m() : --h.group.r || l(h.group.c)),
                    (h = null);
                else if (t >= h.start) {
                  const e = t - h.start;
                  (d = h.a + h.d * s(e / h.duration)), $(d, 1 - d);
                }
              return !(!h && !y);
            }));
    }
    return {
      run(t) {
        a(u)
          ? (O ||
              ((O = Promise.resolve()),
              O.then(() => {
                O = null;
              })),
            O).then(() => {
              (u = u()), $(t);
            })
          : $(t);
      },
      end() {
        m(), (h = y = null);
      },
    };
  }
  function Q(t, e) {
    I(t, 1, 1, () => {
      e.delete(t.key);
    });
  }
  function U(t) {
    t && t.c();
  }
  function V(t, e, o) {
    const { fragment: r, on_mount: s, on_destroy: f, after_update: p } = t.$$;
    r && r.m(e, o),
      R(() => {
        const e = s.map(n).filter(a);
        f ? f.push(...e) : l(e), (t.$$.on_mount = []);
      }),
      p.forEach(R);
  }
  function W(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (l(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function X(t, e) {
    -1 === t.$$.dirty[0] &&
      (S.push(t), P || ((P = !0), N.then(j)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Y(e, n, a, r, s, f, p = [-1]) {
    const c = v;
    A(e);
    const i = n.props || {},
      u = (e.$$ = {
        fragment: null,
        ctx: null,
        props: f,
        update: t,
        not_equal: s,
        bound: o(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(c ? c.$$.context : []),
        callbacks: o(),
        dirty: p,
      });
    let d = !1;
    (u.ctx = a
      ? a(
          e,
          i,
          (t, n, o = n) => (
            u.ctx &&
              s(u.ctx[t], (u.ctx[t] = o)) &&
              (u.bound[t] && u.bound[t](o), d && X(e, t)),
            n
          )
        )
      : []),
      u.update(),
      (d = !0),
      l(u.before_update),
      (u.fragment = !!r && r(u.ctx)),
      n.target &&
        (n.hydrate
          ? u.fragment &&
            u.fragment.l(
              (function (t) {
                return Array.from(t.childNodes);
              })(n.target)
            )
          : u.fragment && u.fragment.c(),
        n.intro && H(e.$$.fragment),
        V(e, n.target, n.anchor),
        j()),
      A(c);
  }
  class Z {
    $destroy() {
      W(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set() {}
  }
  var tt = [
      { note: "f", type: "natural", pos: { top: 330, left: 704 } },
      { note: "fs", type: "sharp", pos: { top: 330, left: 696 } },
      { note: "gft", type: "flat", pos: { top: 316, left: 696 } },
      { note: "g", type: "natural", pos: { top: 316, left: 704 } },
      { note: "gs", type: "sharp", pos: { top: 316, left: 696 } },
      { note: "aft", type: "flat", pos: { top: 300, left: 696 } },
      { note: "a", type: "natural", pos: { top: 300, left: 704 } },
      { note: "as", type: "sharp", pos: { top: 300, left: 696 } },
      { note: "bft", type: "flat", pos: { top: 284, left: 696 } },
      { note: "b", type: "natural", pos: { top: 284, left: 704 } },
      { note: "c", type: "natural", pos: { top: 268, left: 704 } },
      { note: "cs", type: "sharp", pos: { top: 268, left: 696 } },
      { note: "dft", type: "flat", pos: { top: 254, left: 100 } },
      { note: "d", type: "natural", pos: { top: 254, left: 108 } },
      { note: "ds", type: "sharp", pos: { top: 254, left: 100 } },
      { note: "e", type: "natural", pos: { top: 238, left: 108 } },
      { note: "f", type: "natural", pos: { top: 224, left: 158 } },
      { note: "fs", type: "sharp", pos: { top: 224, left: 150 } },
      { note: "gft", type: "flat", pos: { top: 206, left: 200 } },
      { note: "g", type: "natural", pos: { top: 206, left: 208 } },
      { note: "gs", type: "sharp", pos: { top: 206, left: 200 } },
      { note: "aft", type: "flat", pos: { top: 192, left: 250 } },
      { note: "a", type: "natural", pos: { top: 192, left: 258 } },
      { note: "as", type: "sharp", pos: { top: 192, left: 250 } },
      { note: "bft", type: "flat", pos: { top: 176, left: 300 } },
      { note: "b", type: "natural", pos: { top: 176, left: 308 } },
      { note: "c", type: "natural", pos: { top: 160, left: 358 } },
      { note: "cs", type: "sharp", pos: { top: 160, left: 350 } },
      { note: "dft", type: "flat", pos: { top: 144, left: 400 } },
      { note: "d", type: "natural", pos: { top: 144, left: 408 } },
      { note: "ds", type: "sharp", pos: { top: 144, left: 400 } },
      { note: "e", type: "natural", pos: { top: 130, left: 458 } },
      { note: "f", type: "natural", pos: { top: 112, left: 508 } },
      { note: "fs", type: "sharp", pos: { top: 112, left: 500 } },
      { note: "gft", type: "flat", pos: { top: 98, left: 550 } },
      { note: "g", type: "natural", pos: { top: 98, left: 558 } },
      { note: "gs", type: "sharp", pos: { top: 98, left: 550 } },
      { note: "aft", type: "flat", pos: { top: 82, left: 696 } },
      { note: "a", type: "natural", pos: { top: 82, left: 704 } },
      { note: "as", type: "sharp", pos: { top: 82, left: 696 } },
      { note: "bft", type: "flat", pos: { top: 68, left: 696 } },
      { note: "b", type: "natural", pos: { top: 68, left: 704 } },
      { note: "c", type: "natural", pos: { top: 50, left: 704 } },
      { note: "cs", type: "sharp", pos: { top: 50, left: 696 } },
      { note: "dft", type: "flat", pos: { top: 36, left: 696 } },
      { note: "d", type: "natural", pos: { top: 36, left: 704 } },
      { note: "ds", type: "sharp", pos: { top: 36, left: 696 } },
      { note: "eft", type: "flat", pos: { top: 20, left: 696 } },
      { note: "e", type: "natural", pos: { top: 20, left: 704 } },
    ],
    et = [
      { id: 1, label: "Ab", key: "aft" },
      { id: 2, label: "A", key: "a" },
      { id: 3, label: "A#", key: "as" },
      { id: 4, label: "Bb", key: "bft" },
      { id: 5, label: "B", key: "b" },
      { id: 6, label: "C", key: "c" },
      { id: 7, label: "C#", key: "cs" },
      { id: 8, label: "Db", key: "dft" },
      { id: 9, label: "D", key: "d" },
      { id: 10, label: "D#", key: "ds" },
      { id: 11, label: "Eb", key: "eft" },
      { id: 12, label: "E", key: "e" },
      { id: 13, label: "F", key: "f" },
      { id: 14, label: "F#", key: "fs" },
      { id: 15, label: "Gb", key: "gft" },
      { id: 16, label: "G", key: "g" },
      { id: 17, label: "G#", key: "gs" },
    ];
  function nt(t, { delay: n = 0, duration: o = 400, easing: l = e }) {
    const a = +getComputedStyle(t).opacity;
    return {
      delay: n,
      duration: o,
      easing: l,
      css: (t) => `opacity: ${t * a}`,
    };
  }
  function ot(e) {
    let n, o, l;
    return {
      c() {
        var t, a, r, s;
        (n = g("button")),
          (o = m(e[0])),
          $(n, "class", "svelte-merb4w"),
          (t = n),
          (a = "click"),
          (r = e[1]),
          t.addEventListener(a, r, s),
          (l = () => t.removeEventListener(a, r, s));
      },
      m(t, e) {
        d(t, n, e), u(n, o);
      },
      p(t, [e]) {
        1 & e &&
          (function (t, e) {
            (e = "" + e), t.data !== e && (t.data = e);
          })(o, t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && h(n), l();
      },
    };
  }
  function lt(t, e, n) {
    let { label: o = "B" } = e,
      { handleClick: l = () => {} } = e;
    return (
      (t.$set = (t) => {
        "label" in t && n(0, (o = t.label)),
          "handleClick" in t && n(1, (l = t.handleClick));
      }),
      [o, l]
    );
  }
  class at extends Z {
    constructor(t) {
      super(), Y(this, t, lt, ot, r, { label: 0, handleClick: 1 });
    }
  }
  function rt(t, e, n) {
    const o = t.slice();
    return (o[7] = e[n]), o;
  }
  function st(t, e, n) {
    const o = t.slice();
    return (o[13] = e[n]), o;
  }
  function ft(t, e, n) {
    const o = t.slice();
    return (o[10] = e[n]), o;
  }
  function pt(t, e) {
    let n, o, l, a, r;
    return {
      key: t,
      first: null,
      c() {
        (n = g("img")),
          n.src !== (o = e[2][e[10]]) && $(n, "src", o),
          $(n, "alt", (l = "image of a " + e[10] + " note")),
          k(n, "position", "absolute"),
          k(n, "top", e[13].top + "px"),
          k(n, "left", e[13].left + "px"),
          (this.first = n);
      },
      m(t, e) {
        d(t, n, e), (r = !0);
      },
      p(t, e) {
        (!r || 1 & e) && k(n, "top", t[13].top + "px"),
          (!r || 1 & e) && k(n, "left", t[13].left + "px");
      },
      i(t) {
        r ||
          (R(() => {
            a || (a = K(n, nt, {}, !0)), a.run(1);
          }),
          (r = !0));
      },
      o(t) {
        a || (a = K(n, nt, {}, !1)), a.run(0), (r = !1);
      },
      d(t) {
        t && h(n), t && a && a.end();
      },
    };
  }
  function ct(t) {
    let e,
      n,
      o = [],
      l = new Map(),
      a = t[0][t[10]];
    const r = (t) => t[13].top;
    for (let e = 0; e < a.length; e += 1) {
      let n = st(t, a, e),
        s = r(n);
      l.set(s, (o[e] = pt(s, n)));
    }
    return {
      c() {
        for (let t = 0; t < o.length; t += 1) o[t].c();
        e = m("");
      },
      m(t, l) {
        for (let e = 0; e < o.length; e += 1) o[e].m(t, l);
        d(t, e, l), (n = !0);
      },
      p(t, n) {
        const a = t[0][t[10]];
        L(),
          (o = (function (t, e, n, o, l, a, r, s, f, p, c, i) {
            let u = t.length,
              d = a.length,
              h = u;
            const y = {};
            for (; h--; ) y[t[h].key] = h;
            const g = [],
              m = new Map(),
              b = new Map();
            for (h = d; h--; ) {
              const t = i(l, a, h),
                s = n(t);
              let f = r.get(s);
              f ? o && f.p(t, e) : ((f = p(s, t)), f.c()),
                m.set(s, (g[h] = f)),
                s in y && b.set(s, Math.abs(h - y[s]));
            }
            const $ = new Set(),
              k = new Set();
            function w(t) {
              H(t, 1), t.m(s, c), r.set(t.key, t), (c = t.first), d--;
            }
            for (; u && d; ) {
              const e = g[d - 1],
                n = t[u - 1],
                o = e.key,
                l = n.key;
              e === n
                ? ((c = e.first), u--, d--)
                : m.has(l)
                ? !r.has(o) || $.has(o)
                  ? w(e)
                  : k.has(l)
                  ? u--
                  : b.get(o) > b.get(l)
                  ? (k.add(o), w(e))
                  : ($.add(l), u--)
                : (f(n, r), u--);
            }
            for (; u--; ) {
              const e = t[u];
              m.has(e.key) || f(e, r);
            }
            for (; d; ) w(g[d - 1]);
            return g;
          })(o, n, r, 1, t, a, l, e.parentNode, Q, pt, e, st)),
          T();
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < a.length; t += 1) H(o[t]);
          n = !0;
        }
      },
      o(t) {
        for (let t = 0; t < o.length; t += 1) I(o[t]);
        n = !1;
      },
      d(t) {
        for (let e = 0; e < o.length; e += 1) o[e].d(t);
        t && h(e);
      },
    };
  }
  function it(t) {
    let e;
    const n = new at({
      props: {
        handleClick: function (...e) {
          return t[5](t[7], ...e);
        },
        label: t[7].label,
      },
    });
    return {
      c() {
        U(n.$$.fragment);
      },
      m(t, o) {
        V(n, t, o), (e = !0);
      },
      p(e, n) {
        t = e;
      },
      i(t) {
        e || (H(n.$$.fragment, t), (e = !0));
      },
      o(t) {
        I(n.$$.fragment, t), (e = !1);
      },
      d(t) {
        W(n, t);
      },
    };
  }
  function ut(t) {
    let e,
      n,
      o,
      l,
      a,
      r,
      s,
      f,
      p,
      c,
      i,
      m = t[1],
      k = [];
    for (let e = 0; e < m.length; e += 1) k[e] = ct(ft(t, m, e));
    const w = (t) =>
      I(k[t], 1, 1, () => {
        k[t] = null;
      });
    let v = et,
      x = [];
    for (let e = 0; e < v.length; e += 1) x[e] = it(rt(t, v, e));
    const _ = (t) =>
        I(x[t], 1, 1, () => {
          x[t] = null;
        }),
      C = new at({ props: { label: "*", handleClick: t[6] } });
    return {
      c() {
        (e = g("main")),
          (n = g("h1")),
          (n.textContent = "Soprano"),
          (o = b()),
          (l = g("div")),
          (a = g("img")),
          (s = b());
        for (let t = 0; t < k.length; t += 1) k[t].c();
        (f = b()), (p = g("div"));
        for (let t = 0; t < x.length; t += 1) x[t].c();
        (c = b()),
          U(C.$$.fragment),
          $(n, "class", "svelte-12wmhm7"),
          a.src !== (r = "img/staff.png") && $(a, "src", "img/staff.png"),
          $(a, "alt", "image of staff"),
          $(l, "class", "staff svelte-12wmhm7"),
          $(p, "class", "controls svelte-12wmhm7"),
          $(e, "class", "svelte-12wmhm7");
      },
      m(t, r) {
        d(t, e, r), u(e, n), u(e, o), u(e, l), u(l, a), u(l, s);
        for (let t = 0; t < k.length; t += 1) k[t].m(l, null);
        u(e, f), u(e, p);
        for (let t = 0; t < x.length; t += 1) x[t].m(p, null);
        u(p, c), V(C, p, null), (i = !0);
      },
      p(t, [e]) {
        if (7 & e) {
          let n;
          for (m = t[1], n = 0; n < m.length; n += 1) {
            const o = ft(t, m, n);
            k[n]
              ? (k[n].p(o, e), H(k[n], 1))
              : ((k[n] = ct(o)), k[n].c(), H(k[n], 1), k[n].m(l, null));
          }
          for (L(), n = m.length; n < k.length; n += 1) w(n);
          T();
        }
        if (16 & e) {
          let n;
          for (v = et, n = 0; n < v.length; n += 1) {
            const o = rt(t, v, n);
            x[n]
              ? (x[n].p(o, e), H(x[n], 1))
              : ((x[n] = it(o)), x[n].c(), H(x[n], 1), x[n].m(p, c));
          }
          for (L(), n = v.length; n < x.length; n += 1) _(n);
          T();
        }
        const n = {};
        1 & e && (n.handleClick = t[6]), C.$set(n);
      },
      i(t) {
        if (!i) {
          for (let t = 0; t < m.length; t += 1) H(k[t]);
          for (let t = 0; t < v.length; t += 1) H(x[t]);
          H(C.$$.fragment, t), (i = !0);
        }
      },
      o(t) {
        k = k.filter(Boolean);
        for (let t = 0; t < k.length; t += 1) I(k[t]);
        x = x.filter(Boolean);
        for (let t = 0; t < x.length; t += 1) I(x[t]);
        I(C.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(e), y(k, t), y(x, t), W(C);
      },
    };
  }
  function dt(t, e, n) {
    const o = () => ({ natural: [], sharp: [], flat: [] });
    let l = { natural: [], sharp: [], flat: [] };
    const a = (t) => {
      n(0, (l = { natural: [], sharp: [], flat: [] })),
        tt
          .filter((e) => e.note === t)
          .forEach((t) => {
            l[t.type].push(t.pos);
          });
    };
    return [
      l,
      ["natural", "sharp", "flat"],
      {
        natural: "img/wholenote.png",
        sharp: "img/sharpnote.png",
        flat: "img/flatnote.png",
      },
      o,
      a,
      (t) => {
        a(t.key);
      },
      () => {
        n(0, (l = { natural: [], sharp: [], flat: [] }));
      },
    ];
  }
  return new (class extends Z {
    constructor(t) {
      super(), Y(this, t, dt, ut, r, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
