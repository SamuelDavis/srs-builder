(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var s=r("2b0e"),a=r("5f5b");r("ab8b"),r("2dd8");s["default"].use(a["a"]);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-5",attrs:{id:"app"}},[t.printing?r("h1",[t._v("Hello, world!")]):t._e(),r("b-card",{directives:[{name:"show",rawName:"v-show",value:!t.printing,expression:"!printing"}],attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""}},[r("b-tab",{attrs:{title:"Title"}},[r("srs-title")],1),r("b-tab",{attrs:{title:"Summary"}},[r("srs-summary")],1),r("b-tab",{attrs:{title:"Stories"}},[r("srs-stories")],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Created At"}},[r("b-form-input",{attrs:{value:t.meta.createdAt.toString(),readonly:""}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Updated At"}},[r("b-form-input",{attrs:{value:t.meta.updatedAt.toString(),readonly:""}})],1)],1)],1),r("b-form-group",{attrs:{label:"Title",description:"Provide the name of the product."}},[r("b-form-input",{attrs:{name:"title"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}})],1),r("srs-input-group",{attrs:{label:"Product Owners",description:"Provide the names and contact information for any persons who can speak authoritatively about the requirements of the product."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.productOwners,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-input",{attrs:{placeholder:"Name...",title:"name"},model:{value:t.data.productOwners[s].name,callback:function(e){t.$set(t.data.productOwners[s],"name",e)},expression:"data.productOwners[i].name"}})],1),r("b-col",[r("b-form-input",{attrs:{type:"email",placeholder:"Email...",title:"email"},model:{value:t.data.productOwners[s].email,callback:function(e){t.$set(t.data.productOwners[s],"email",e)},expression:"data.productOwners[i].email"}})],1),r("b-col",[r("b-form-input",{attrs:{type:"tel",placeholder:"Phone...",title:"phone"},model:{value:t.data.productOwners[s].phone,callback:function(e){t.$set(t.data.productOwners[s],"phone",e)},expression:"data.productOwners[i].phone"}})],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.productOwners.splice(s,1)}}})],1)],1)})),1)],1)],1)},l=[],c=(r("0d03"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7"));function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){var r=t&&e?function(r){(r.length<1||r[r.length-1][t])&&r.push(p({},e))}:function(t){(t.length<1||t[t.length-1])&&t.push(null)};return{deep:!0,immediate:!0,handler:r}}var f={name:"srs-title",data:function(){return{meta:{createdAt:new Date,updatedAt:new Date},data:{title:"",productOwners:[]}}},watch:{"data.productOwners":d("name",{name:"",email:"",phone:""})}},m=f,b=r("2877"),h=Object(b["a"])(m,i,l,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",[r("b-tabs",{attrs:{vertical:"",pills:""}},[r("b-tab",{attrs:{title:"Perspective"}},[r("srs-input-group",{attrs:{label:"Product Perspective",description:"Describe the context and origin of the product being specified in this SRS For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two."}},[r("b-textarea",{model:{value:t.data.perspective,callback:function(e){t.$set(t.data,"perspective",e)},expression:"data.perspective"}})],1)],1),r("b-tab",{attrs:{title:"Functions"}},[r("srs-input-group",{attrs:{label:"Product Functions",description:"Summarize the major functions the product must perform or must let the user perform."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.functions,(function(e,s){var a=e.priority;return r("b-list-group-item",{key:s,style:"background-color: rgba(255, 25, 25, "+a/t.summaryMaxPriority+");"},[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Support"}},[r("b-select",{attrs:{options:t.meta.itDoesOpts},model:{value:t.data.functions[s].support,callback:function(e){t.$set(t.data.functions[s],"support",e)},expression:"data.functions[i].support"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Priority"}},[r("b-form-input",{attrs:{type:"number"},model:{value:t.data.functions[s].priority,callback:function(e){t.$set(t.data.functions[s],"priority",e)},expression:"data.functions[i].priority"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.functions.splice(s,1)}}})],1),r("b-form-group",{attrs:{label:"1-Sentence Description"}},[r("b-form-input",{model:{value:t.data.functions[s].description,callback:function(e){t.$set(t.data.functions[s],"description",e)},expression:"data.functions[i].description"}})],1),r("b-form-group",{attrs:{label:"Details"}},[r("b-textarea",{model:{value:t.data.functions[s].details,callback:function(e){t.$set(t.data.functions[s],"details",e)},expression:"data.functions[i].details"}})],1)],1)})),1)],1)],1),r("b-tab",{attrs:{title:"Users"}},[r("srs-input-group",{attrs:{label:"Product Users",description:"Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.users,(function(e,s){var a=e.priority;return r("b-list-group-item",{key:s,style:"background-color: rgba(255, 25, 25, "+a/(t.summaryMaxPriority||1)+");"},[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Classification"}},[r("b-form-input",{model:{value:t.data.users[s].classification,callback:function(e){t.$set(t.data.users[s],"classification",e)},expression:"data.users[i].classification"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.users.splice(s,1)}}})],1),r("b-form-group",{attrs:{label:"Description"}},[r("b-textarea",{model:{value:t.data.users[s].description,callback:function(e){t.$set(t.data.users[s],"description",e)},expression:"data.users[i].description"}})],1)],1)})),1)],1)],1),r("b-tab",{attrs:{title:"Constraints"}},[r("srs-input-group",{attrs:{label:"Design and Implementation Constraints",description:"Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards."}},[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:"",justified:""}},[r("b-tab",{attrs:{title:"Design"}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.constraints.design,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-group",{staticClass:"mb-0"},[r("b-textarea",{model:{value:t.data.constraints.design[s],callback:function(e){t.$set(t.data.constraints.design,s,e)},expression:"data.constraints.design[i]"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.constraints.design.splice(s,1)}}})],1)],1)})),1)],1),r("b-tab",{attrs:{title:"Implementation"}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.constraints.implementation,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-group",{staticClass:"mb-0"},[r("b-textarea",{model:{value:t.data.constraints.implementation[s],callback:function(e){t.$set(t.data.constraints.implementation,s,e)},expression:"data.constraints.implementation[i]"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.constraints.implementation.splice(s,1)}}})],1)],1)})),1)],1)],1)],1)],1)],1),r("b-tab",{attrs:{title:"Assumptions"}},[r("srs-input-group",{attrs:{label:"Assumptions",description:"List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. The project could be affected if these assumptions are incorrect, are not shared, or change."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.assumptions,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-group",{staticClass:"mb-0"},[r("b-textarea",{model:{value:t.data.assumptions[s],callback:function(e){t.$set(t.data.assumptions,s,e)},expression:"data.assumptions[i]"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.assumptions.splice(s,1)}}})],1)],1)})),1)],1)],1),r("b-tab",{attrs:{title:"Dependencies"}},[r("srs-input-group",{attrs:{label:"Dependencies",description:"Identify any dependencies the project has on external factors. These could include third-party or commercial components that you plan to use."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.dependencies,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Name"}},[r("b-form-input",{model:{value:t.data.dependencies[s].name,callback:function(e){t.$set(t.data.dependencies[s],"name",e)},expression:"data.dependencies[i].name"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.dependencies.splice(s,1)}}})],1),r("b-form-group",{attrs:{label:"Link",description:"A URL to documentation on the dependency."}},[r("b-form-input",{model:{value:t.data.dependencies[s].link,callback:function(e){t.$set(t.data.dependencies[s],"link",e)},expression:"data.dependencies[i].link"}})],1)],1)})),1)],1)],1)],1)],1)},y=[],w=(r("13d5"),{name:"srs-summary",data:function(){return{meta:{itDoesOpts:{1:"It Does...",0:"It Does Not..."}},data:{perspective:"",functions:[],users:[],constraints:{design:[],implementation:[]},assumptions:[],dependencies:[]}}},computed:{summaryMaxPriority:function(){return this.data.functions.reduce((function(t,e){var r=e.priority;return void 0===t?r:Math.max(t,r)}),void 0)}},watch:{"data.functions":d("description",{support:1,priority:0,description:"",details:""}),"data.users":d("classification",{classification:"",description:""}),"data.constraints.design":d(),"data.constraints.implementation":d(),"data.assumptions":d(),"data.dependencies":d("name",{name:"",link:""})}}),k=w,x=Object(b["a"])(k,v,y,!1,null,null,null),O=x.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",[r("srs-input-group",{attrs:{label:"User Stories",description:"This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product."}},[r("b-list-group",{attrs:{flush:""}},t._l(t.data.stories,(function(e,s){return r("b-list-group-item",{key:s},[r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"In order to...",description:"These options are supplied from the Summary section's Functions."}},[r("b-select",{attrs:{options:t.meta.descriptions},scopedSlots:t._u([{key:"first",fn:function(){return[r("option",{domProps:{value:null}},[t._v("...")])]},proxy:!0}],null,!0),model:{value:t.data.stories[s].description,callback:function(e){t.$set(t.data.stories[s],"description",e)},expression:"data.stories[i].description"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.stories.splice(s,1)}}})],1),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"As a...",description:"These options are supplied from the Summary section's Users"}},[r("b-select",{attrs:{options:t.meta.users},scopedSlots:t._u([{key:"first",fn:function(){return[r("option",{domProps:{value:null}},[t._v("...")])]},proxy:!0}],null,!0),model:{value:t.data.stories[s].user,callback:function(e){t.$set(t.data.stories[s],"user",e)},expression:"data.stories[i].user"}})],1)],1)],1),r("b-form-group",{staticClass:"mb-0",attrs:{label:"I do the following..."}},[r("ol",t._l(t.data.stories[s].steps,(function(e,a){return r("li",{key:a,class:{"mb-2":a<t.data.stories[s].steps.length-1}},[r("b-form-row",[r("b-col",[r("b-form-group",{staticClass:"mb-0"},[r("b-textarea",{model:{value:t.data.stories[s].steps[a],callback:function(e){t.$set(t.data.stories[s].steps,a,e)},expression:"data.stories[i].steps[j]"}})],1)],1),r("srs-remove-badge",{attrs:{click:function(){return t.data.stories[s].steps.splice(a,1)}}})],1)],1)})),0)])],1)})),1)],1)],1)},P=[],j=(r("e01a"),{name:"srs-stories",data:function(){return{meta:{descriptions:["foo","bar","thud"],users:["fiz","baz","grunt"]},data:{stories:[]}}},watch:{"data.stories":{immediate:!0,deep:!0,handler:function(t){(t.length<1||t[t.length-1].description)&&t.push({description:null,user:null,steps:[]}),t.forEach((function(t){(t.steps.length<1||t.steps[t.steps.length-1])&&t.steps.push(null)}))}}}}),S=j,$=(r("e5a8"),Object(b["a"])(S,_,P,!1,null,null,null)),D=$.exports,C={name:"app",components:{"srs-title":g,"srs-summary":O,"srs-stories":D},mounted:function(){var t=this;window.addEventListener("beforeprint",(function(){return t.printing=!0})),window.addEventListener("afterprint",(function(){return t.printing=!1}))},data:function(){return{printing:!1}}},E=C,T=(r("5c0b"),Object(b["a"])(E,n,o,!1,null,null,null)),A=T.exports,q=r("2f62");s["default"].use(q["a"]);var I={},M={},U={},F={},L=new q["a"].Store({state:I,getters:M,mutations:U,actions:F}),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"srs-center"},[r("b-badge",{attrs:{tabindex:"-1",href:"#",variant:"danger"},on:{click:t.click}},[t._v("−")])],1)},N=[],R={name:"srs-remove-badge",props:{click:Function}},J=R,H=Object(b["a"])(J,z,N,!1,null,null,null),B=H.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form-group",[t.label?r("h3",{domProps:{textContent:t._s(t.label)}}):t._e(),t.description?r("b-form-text",{staticClass:"mb-2",domProps:{textContent:t._s(t.description)}}):t._e(),t._t("default")],2)},K=[],Q={name:"srs-input-group",props:{label:String,description:String}},V=Q,W=Object(b["a"])(V,G,K,!1,null,null,null),X=W.exports;s["default"].component("srs-remove-badge",B),s["default"].component("srs-input-group",X),s["default"].config.productionTip=!1,new s["default"]({store:L,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var s=r("9c0c"),a=r.n(s);a.a},"9c0c":function(t,e,r){},a81c:function(t,e,r){},e5a8:function(t,e,r){"use strict";var s=r("a81c"),a=r.n(s);a.a}});
//# sourceMappingURL=app.43ce2ac4.js.map