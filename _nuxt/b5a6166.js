(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{236:function(e,t,r){"use strict";r.r(t);r(36),r(30),r(35),r(50),r(31),r(51);var n=r(6),o=r(20),c=(r(38),r(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){var e=this.$store.state.countries[0].short_code;return{form:{country_from:e,country_to:e,name:"Ashot",resident_of:e,visa_type:this.$store.state.visatypes[0].id}}},computed:f({},Object(c.c)(["countries","visatypes"])),methods:f(f({},Object(c.b)(["getUserId"])),{},{sendData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getUserId(e.form);case 3:e.$emit("user-id-received"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}})},d=r(39),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("h1",{staticClass:"title"},[e._v("Start Interview by entering following data")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.sendData.apply(null,arguments)}}},[r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Your name")]),e._v(" "),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",id:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:"country_from"}},[e._v("Where are you from?")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.country_from,expression:"form.country_from"}],attrs:{id:"country_from"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"country_from",t.target.multiple?r:r[0])}}},e._l(e.countries,(function(t,n){return r("option",{key:n,domProps:{value:t.short_code,innerHTML:e._s(t.name)}})})),0)])])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:"resident_of"}},[e._v("Your residency?")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.resident_of,expression:"form.resident_of"}],attrs:{id:"resident_of"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"resident_of",t.target.multiple?r:r[0])}}},e._l(e.countries,(function(t,n){return r("option",{key:n,domProps:{value:t.short_code,innerHTML:e._s(t.name)}})})),0)])])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:"country_to"}},[e._v("Where are you from?")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.country_to,expression:"form.country_to"}],attrs:{id:"country_to"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"country_to",t.target.multiple?r:r[0])}}},e._l(e.countries,(function(t,n){return r("option",{key:n,domProps:{value:t.short_code,innerHTML:e._s(t.name)}})})),0)])])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:"visa_type"}},[e._v("Visa Type")]),e._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.visa_type,expression:"form.visa_type"}],attrs:{id:"visa_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"visa_type",t.target.multiple?r:r[0])}}},e._l(e.visatypes,(function(t){return r("option",{key:t.id,domProps:{value:t.id,innerHTML:e._s(t.title)}})})),0)])])]),e._v(" "),e._m(0)])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field is-grouped"},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("Start")])])])}],!1,null,null,null);t.default=component.exports},237:function(e,t,r){"use strict";r.r(t);r(36),r(30),r(35),r(50),r(31),r(51);var n=r(6),o=r(20),c=(r(38),r(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{answer:{choice:""}}},computed:f({},Object(c.c)(["question"])),methods:f(f({},Object(c.b)(["answerQuestion"])),{},{sendAnswer:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.answerQuestion(e.answer);case 3:e.$emit("answer"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}),watch:{"answer.choice":function(e){""!==e&&this.sendAnswer()}}},d=r(39),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("h1",{staticClass:"title"},[e._v(e._s(e.question.title))]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.answerQuestion.apply(null,arguments)}}},e._l(e.question.answers,(function(t){return r("div",{key:t.id,staticClass:"control"},[r("label",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.answer.choice,expression:"answer.choice"}],attrs:{type:"radio",disabled:""!==e.answer.choice},domProps:{value:t.id,checked:e._q(e.answer.choice,t.id)},on:{change:function(r){return e.$set(e.answer,"choice",t.id)}}}),e._v("\n          "+e._s(t.title)+"\n        ")])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},238:function(e,t,r){"use strict";r.r(t);r(36),r(30),r(35),r(50),r(31),r(51);var n=r(20),o=r(52);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["results"]))},f=r(39),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("h1",{staticClass:"title"},[e._v("Result")]),e._v(" "),r("p",[e._v(e._s(e.results.total_result))])])])}),[],!1,null,null,null);t.default=component.exports},239:function(e,t,r){"use strict";r.r(t);r(36),r(30),r(35),r(50),r(31),r(51);var n=r(20),o=r(6),c=(r(38),r(52));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("getCountries");case 3:return t.next=5,r.dispatch("getVisaTypes");case 5:return t.abrupt("return",{started:!1});case 6:case"end":return t.stop()}}),t)})))()},computed:f({},Object(c.c)(["user_id","question","no_question","results"])),methods:f(f({},Object(c.b)(["getQuestion","getResults"])),{},{lookForQuestion:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.no_question){t.next=5;break}return t.next=3,e.getResults();case 3:t.next=8;break;case 5:return t.next=7,e.getQuestion();case 7:e.started||(e.started=!0);case 8:case"end":return t.stop()}}),t)})))()}})},d=r(39),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.started?e.no_question?e.no_question?r("interview-results"):e._e():r("interview-question",{on:{answer:e.lookForQuestion}}):r("interview-start",{on:{"user-id-received":e.lookForQuestion}})],1)}),[],!1,null,"22252c6b",null);t.default=component.exports;installComponents(component,{InterviewStart:r(236).default,InterviewQuestion:r(237).default,InterviewResults:r(238).default})}}]);