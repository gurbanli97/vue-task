(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{237:function(e,t,r){"use strict";r.r(t);r(36),r(30),r(35),r(50),r(31),r(51);var n=r(6),c=r(20),o=(r(38),r(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{answer:{choice:""}}},computed:w({},Object(o.c)(["question"])),methods:w(w({},Object(o.b)(["answerQuestion"])),{},{sendAnswer:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.answerQuestion(e.answer);case 3:e.$emit("answer"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}),watch:{"answer.choice":function(e){""!==e&&this.sendAnswer()}}},f=r(39),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("h1",{staticClass:"title"},[e._v(e._s(e.question.title))]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.answerQuestion.apply(null,arguments)}}},e._l(e.question.answers,(function(t){return r("div",{key:t.id,staticClass:"control"},[r("label",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.answer.choice,expression:"answer.choice"}],attrs:{type:"radio",disabled:""!==e.answer.choice},domProps:{value:t.id,checked:e._q(e.answer.choice,t.id)},on:{change:function(r){return e.$set(e.answer,"choice",t.id)}}}),e._v("\n          "+e._s(t.title)+"\n        ")])])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);