(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fictitious-nonFixed"],{"36bd":function(t,i,e){"use strict";var n=e("4bf8"),s=e("77f1"),r=e("9def");t.exports=function(t){var i=n(this),e=r(i.length),h=arguments.length,o=s(h>1?arguments[1]:void 0,e),a=h>2?arguments[2]:void 0,c=void 0===a?e:s(a,e);while(c>o)i[o++]=t;return i}},6388:function(t,i,e){"use strict";var n=e("65d5"),s=e.n(n);s.a},"65d5":function(t,i,e){},"6c7b":function(t,i,e){var n=e("5ca1");n(n.P,"Array",{fill:e("36bd")}),e("9c6c")("fill")},8822:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("p",[t._v("任意高度列表（10000）演示：")]),e("div",{ref:"root",staticClass:"root",on:{scroll:t.scroll}},[e("div",{staticClass:"container",style:{height:t.totalHeight}}),e("ul",{staticClass:"content",style:{transform:t.getTransform}},t._l(t.nowList,(function(i){return e("li",{key:i.value,staticClass:"item",style:{height:i.height+"px",lineHeight:i.height+"px"}},[t._v("\n        "+t._s(i.value)+"\n      ")])})),0)])])},s=[],r=(e("6c7b"),{data:function(){var t=this;return{list:Array(1e4).fill(1).map((function(i,e){return{value:e,height:t.getRandom(10,100)}})),start:0,end:0,pointer:-1,cache:{},initialHeight:50}},computed:{totalHeight:function(){if(this.initialtotal>=0){var t=this.pointer>=0?this.getIndexOffset(this.pointer):{top:0,height:0},i=t.top,e=t.height;return"".concat(i+e+(this.list.length-1-this.pointer)*this.initialHeight,"px")}var n=this.list.reduce((function(t,i){return{height:t.height+i.height}})),s=n.height;return s+"px"},nowList:function(){return this.list.slice(this.start,Math.min(this.end+1,this.list.length))},getTransform:function(){return"translate3d(0,".concat(this.getIndexOffset(this.start).top,"px,0)")}},mounted:function(){this.scroll()},methods:{scroll:function(){var t=this.$refs.root,i=this.getIndex(t.scrollTop),e=this.getIndex(t.scrollTop+t.clientHeight);this.start=i,this.end=e},getRandom:function(t,i){return Math.floor(Math.random()*(i-t+1))+t},getIndex:function(t){for(var i=0,e=0,n=this.list.length;e<n;e++){if(i>=t||n-1===e)return e;i+=this.getIndexOffset(e).height}return 0},getIndexOffset:function(t){if(this.pointer>=t)return this.cache[t];var i=0;if(this.pointer>=0){var e=this.cache[this.pointer];i=e.top+e.height}for(var n=this.pointer+1;n<=t;n++){var s=this.list[n].height;this.cache[n]={top:i,height:s},i+=s}return t>this.pointer&&(this.pointer=t),this.cache[t]}}}),h=r,o=(e("6388"),e("2877")),a=Object(o["a"])(h,n,s,!1,null,"b715a17c",null);i["default"]=a.exports}}]);