(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25be1272"],{"253d":function(t,e,s){},"4c34":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.63a7d78d.svg"},adda:function(t,e,s){"use strict";s("253d"),s("4c34");var i=s("23bf"),a=s("58df"),n=Object(a["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=n,o=s("d9bd");e["a"]=r.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(o["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var a=t.naturalHeight,n=t.naturalWidth;a||n?e.calculatedAspectRatio=n/a:null!=s&&setTimeout(i,s)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=r.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HelloWorld")},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-img",{staticClass:"my-3",attrs:{src:s("9b19"),contain:"",height:"200"}})],1),i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),t._v("\n      "+t._s(t.msg)+"\n      "),i("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),i("br"),t._v("please join our online\n        "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-flex",{attrs:{"mb-5":"",xs12:""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,s){return i("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,s){return i("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,s){return i("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},r=[],o={props:{msg:{default:"my new comment"}},data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=o,l=s("2877"),h=s("6544"),u=s.n(h),d=s("a523"),m=s("0e8f"),f=s("adda"),g=s("a722"),p=Object(l["a"])(c,n,r,!1,null,null,null),v=p.exports;u()(p,{VContainer:d["a"],VFlex:m["a"],VImg:f["a"],VLayout:g["a"]});var y={components:{HelloWorld:v}},_=y,S=Object(l["a"])(_,i,a,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-25be1272.ab667fa3.js.map