(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup"],{"1fc1":function(t,n,i){"use strict";i.r(n);var e=i("3ea2"),o=i("dc32");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("34e4");var s,r=i("f0c5"),u=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"64a00859",null,!1,e["a"],s);n["default"]=u.exports},"34e4":function(t,n,i){"use strict";var e=i("e5b1"),o=i.n(e);o.a},"3ea2":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uniTransition:function(){return i.e("components/uni-transition/uni-transition").then(i.bind(null,"8098"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},5676:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){i.e("components/uni-transition/uni-transition").then(function(){return resolve(i("8098"))}.bind(null,i)).catch(i.oe)},o={name:"UniPopup",components:{uniTransition:e},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(n.timer),n.timer=setTimeout((function(){n.$emit("change",{show:!1}),n.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};n.default=o},dc32:function(t,n,i){"use strict";i.r(n);var e=i("5676"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},e5b1:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-create-component',
    {
        'components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1fc1"))
        })
    },
    [['components/uni-popup/uni-popup-create-component']]
]);
