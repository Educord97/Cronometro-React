(this.webpackJsonpexemplo2=this.webpackJsonpexemplo2||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),i=a.n(s),c=a(4),r=a.n(c),o=(a(14),a(5)),l=a(6),u=a(2),h=a(8),m=a(7),b=a.p+"static/media/cronometro.910ec1f0.png",j=(a(15),function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={numero:0,botao:"START"},n.timer=null,n.start=n.start.bind(Object(u.a)(n)),n.clear=n.clear.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"start",value:function(){var t=this,e=this.state;null!==this.timer?(clearInterval(this.timer),this.timer=null,e.botao="START"):(this.timer=setInterval((function(){var e=t.state;e.numero+=.1,t.setState(e)}),100),e.botao="STOP"),this.setState(e)}},{key:"clear",value:function(){null!==this.timer&&(clearInterval(this.timer),this.timer=null);var t=this.state;t.numero=0,t.botao="START",this.setState(t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{src:b,className:"img"}),Object(n.jsx)("a",{className:"timer",children:this.state.numero.toFixed(1)}),Object(n.jsxs)("div",{className:"areaBtn",children:[Object(n.jsx)("a",{className:"botao",onClick:this.start,children:this.state.botao}),Object(n.jsx)("a",{className:"botao",onClick:this.clear,children:"CLEAR"})]})]})}}]),a}(s.Component)),d=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.afb56c3a.chunk.js.map