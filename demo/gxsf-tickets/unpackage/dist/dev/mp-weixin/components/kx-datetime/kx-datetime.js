(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/kx-datetime/kx-datetime"],{

/***/ 135:
/*!**********************************************************************************!*\
  !*** G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kx-datetime.vue?vue&type=template&id=74a06288&scoped=true& */ 136);
/* harmony import */ var _kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kx-datetime.vue?vue&type=script&lang=js& */ 138);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kx-datetime.vue?vue&type=style&index=0&id=74a06288&lang=scss&scoped=true& */ 140);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74a06288",
  null,
  false,
  _kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/kx-datetime/kx-datetime.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 136:
/*!*****************************************************************************************************************************!*\
  !*** G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=template&id=74a06288&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kx-datetime.vue?vue&type=template&id=74a06288&scoped=true& */ 137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_template_id_74a06288_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 137:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=template&id=74a06288&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 142))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 138:
/*!***********************************************************************************************************!*\
  !*** G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kx-datetime.vue?vue&type=script&lang=js& */ 139);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 139:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! ../uni-popup/uni-popup.vue */ 142));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






























{
  name: 'KXDateTime',
  components: {
    uniPopup: uniPopup },

  props: {
    date: '',
    start: '',
    end: '',
    default: '',
    placeholder: '' },

  data: function data() {
    // const date = new Date()
    // const years = []
    // const year = date.getFullYear()
    // const months = []
    // const month = date.getMonth() + 1
    // const days = []
    // const day = date.getDate()
    // const hours = []
    // const hour = date.getHours()
    // const mins = []
    // const min = date.getMinutes()
    // let start;
    // if (this.start) {
    // 	start = this.start.replace(/-/g, "/")
    // 	start = new Date(start);
    // } else {
    // 	start = new Date(0);
    // }
    // let starty = start.getFullYear(); //开始年份
    // let end;
    // if (this.end) {
    // 	end = this.end.replace(/-/g, "/")
    // 	end = new Date(end);
    // } else {
    // 	end = new Date();
    // }
    // let endy = end.getFullYear(); //终止年份
    // for (let i = starty; i <= endy; i++) {
    // 	years.push(i)
    // }
    var defaultvalue = this.default;
    var value = [9999, 99, 99, 99, 99];
    if (defaultvalue == 'end') {
      value = [9999, 99, 99, 99, 99];
    } else if (defaultvalue == 'start') {
      value = [0, 0, 0, 0, 0];
    }
    return {
      title: 'picker-view',
      years: [],
      year: '',
      months: [],
      month: '',
      days: [],
      day: '',
      hours: [],
      hour: '',
      mins: [],
      min: '',
      value: value,
      valueStr: '',
      visible: true,
      strYMDHM: '',
      indicatorStyle: "height: 80rpx;" };

  },
  methods: {
    open: function open() {
      var start;
      if (this.start) {
        start = this.start.replace(/-/g, "/");
        start = new Date(start);
      } else {
        start = new Date(0);
      }
      var starty = start.getFullYear(); //开始年份
      var end;
      if (this.end) {
        end = this.end.replace(/-/g, "/");
        end = new Date(end);
      } else {
        end = new Date();
      }
      if (start > end) {
        uni.showToast({
          title: '时间范围错误！',
          icon: 'none',
          duration: 2000 });

        return false;
      }

      this.$forceUpdate();
      if (this.valueStr) {
        this.value = JSON.parse(this.valueStr);
        setTimeout(this.amend, 100);
        this.$refs.popup.open();
      } else {
        setTimeout(this.amend, 100);
        this.$refs.popup.open();
      }
    },
    close: function close() {
      this.$refs.popup.close();
    },
    ok: function ok() {
      var day = this.day < 10 ? '0' + this.day : this.day,
      month = this.month < 10 ? '0' + this.month : this.month,
      hour = this.hour < 10 ? '0' + this.hour : this.hour,
      min = this.min < 10 ? '0' + this.min : this.min;
      var data = this.year + '-' + month + '-' + day + ' ' + hour + ':' + min;
      this.$emit("rundata", data);
      this.$refs.popup.close();
    },
    bindChange: function bindChange(e) {
      var val = e.detail.value;
      this.valueStr = JSON.stringify(val);
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
      this.hour = this.hours[val[3]];
      this.min = this.mins[val[4]];
    },
    //数据校正
    amend: function amend() {
      if (this.valueStr) {
        var val = JSON.parse(this.valueStr);
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
        this.hour = this.hours[val[3]];
        this.min = this.mins[val[4]];
      }
      var start;
      if (this.start) {
        start = this.start.replace(/-/g, "/");
        start = new Date(start);
      } else {
        start = new Date(0);
      }
      var starty = start.getFullYear(); //开始年份
      var startm = start.getMonth() + 1; //开始月份
      var startd = start.getDate(); //开始天
      var starth = start.getHours(); //开始小时
      var startmin = start.getMinutes(); //开始分钟
      var end;
      if (this.end) {
        end = this.end.replace(/-/g, "/");
        end = new Date(end);
      } else {
        end = new Date();
      }
      var endy = end.getFullYear(); //终止年份
      var endm = end.getMonth() + 1; //终止月份
      var endd = end.getDate(); //终止天
      var endh = end.getHours(); //终止小时
      var endmin = end.getMinutes(); //终止分钟
      //如果选择起始年份
      var years = [],
      months = [],
      days = [],
      hours = [],
      mins = [];
      var month31 = [1, 3, 5, 7, 8, 10, 12],
      month30 = [4, 6, 9, 11];
      var daysNum;
      for (var i = starty; i <= endy; i++) {
        years.push(i);
      }
      if (month31.indexOf(this.month) > -1) {
        daysNum = 31;
      } else if (month30.indexOf(this.month) > -1) {
        daysNum = 30;
      } else {
        if (this.year % 4 == 0) {
          daysNum = 29;
        } else {
          daysNum = 28;
        }
      }
      var defaultvalue = this.default;
      var defaulty = endy,
      defaultm = endm,
      defaultd = endd,
      defaulth = endh,
      defaultmin = endmin;
      if (defaultvalue == 'end') {
        defaulty = endy;
        defaultm = endm;
        defaultd = endd;
        defaulth = endh;
        defaultmin = endmin;
      } else if (defaultvalue == 'start') {
        defaulty = starty;
        defaultm = startm;
        defaultd = startd;
        defaulth = starth;
        defaultmin = startmin;
      }
      //当数值异常是设施默认
      if (!this.year) {
        this.year = defaulty;
      }
      if (!this.month) {
        this.month = defaultm;
      }
      if (!this.day) {
        this.day = defaultd;
      }
      if (!this.hour && this.hour !== 0) {
        this.hour = defaulth;
      }
      if (!this.min && this.min !== 0) {
        this.min = defaultmin;
      }
      //判断年份是在起始年
      if (this.year == starty) {
        //判断起始年份和终止年份是否相等
        if (starty == endy) {
          //如果等，那么月份取两者中间
          for (var _i = startm; _i <= endm; _i++) {
            months.push(_i);
          }
          //判断月份是在起始月
          if (this.month == startm) {
            //判断起始月和终止月是否相等
            if (startm == endm) {
              //如果等，那么天数取两者中间
              for (var _i2 = startd; _i2 <= endd; _i2++) {
                days.push(_i2);
              }
              //判断日是在起始日
              if (this.day == startd) {
                //判断起始ri和终止日是否相等
                if (startd == endd) {
                  //如果等，那么小时取两者中间
                  for (var _i3 = starth; _i3 <= endh; _i3++) {
                    hours.push(_i3);
                  }
                  //判断小时是在起始小时
                  if (this.hour == starth) {
                    //判断起始和终止是否相等
                    if (starth == endh) {
                      //如果等，那么分钟取两者中间
                      for (var _i4 = startmin; _i4 <= endmin; _i4++) {
                        mins.push(_i4);
                      }
                    } else {
                      //如果不等，到59
                      for (var _i5 = startmin; _i5 <= 59; _i5++) {
                        mins.push(_i5);
                      }
                    }
                  } else {
                    //判断小时是否在截止小时
                    if (this.hour == endh) {
                      //终止小时取到截止分钟
                      for (var _i6 = 0; _i6 <= endmin; _i6++) {
                        mins.push(_i6);
                      }
                    }
                  }
                } else {
                  //如果不等，到23小时
                  for (var _i7 = starth; _i7 <= 23; _i7++) {
                    hours.push(_i7);
                  }
                  //判断小时是在起始小时
                  if (this.hour == starth) {
                    for (var _i8 = startmin; _i8 <= 59; _i8++) {
                      mins.push(_i8);
                    }
                  }
                }
              } else {
                //判断日是否在截止日
                if (this.day == endd) {
                  //终止日取到截止小时
                  for (var _i9 = 0; _i9 <= endh; _i9++) {
                    hours.push(_i9);
                  }
                  //判断小时是否在截止小时
                  if (this.hour == endh) {
                    //终止小时取到截止分钟
                    for (var _i10 = 0; _i10 <= endmin; _i10++) {
                      mins.push(_i10);
                    }
                  }
                }
              }
            } else {
              //如果不等，
              for (var _i11 = startd; _i11 <= daysNum; _i11++) {
                days.push(_i11);
              }
              if (this.day == startd) {
                for (var _i12 = starth; _i12 <= 23; _i12++) {
                  hours.push(_i12);
                }
                //判断小时是在起始小时
                if (this.hour == starth) {
                  for (var _i13 = startmin; _i13 <= 59; _i13++) {
                    mins.push(_i13);
                  }
                }
              }
            }
          } else {
            //判断月份是在终止月
            if (this.month == endm) {
              //终止月取到截止天
              for (var _i14 = 1; _i14 <= endd; _i14++) {
                days.push(_i14);
              }
              //判断日是否在截止日
              if (this.day == endd) {
                //终止日取到截止小时
                for (var _i15 = 0; _i15 <= endh; _i15++) {
                  hours.push(_i15);
                }
                //判断小时是否在截止小时
                if (this.hour == endh) {
                  //终止小时取到截止分钟
                  for (var _i16 = 0; _i16 <= endmin; _i16++) {
                    mins.push(_i16);
                  }
                }
              }
            }
          }
        } else {
          //如果不等，去开始到12月份
          for (var _i17 = startm; _i17 <= 12; _i17++) {
            months.push(_i17);
          }
          //判断月份是在起始月
          if (this.month == startm) {
            //是，取天数之后
            for (var _i18 = startd; _i18 <= daysNum; _i18++) {
              days.push(_i18);
            }
            //判断日是在起始日
            if (this.day == startd) {
              //是，qu起始小时之后
              for (var _i19 = starth; _i19 <= 23; _i19++) {
                hours.push(_i19);
              }
              //判断小时是在起始小时
              if (this.hour == starth) {
                //是，qu起始分钟之后
                for (var _i20 = startmin; _i20 <= 59; _i20++) {
                  mins.push(_i20);
                }
              }
            }
          }
        }
      } else if (this.year == endy) {
        //年份中终止年
        //月份取到终止月
        for (var _i21 = 1; _i21 <= endm; _i21++) {
          months.push(_i21);
        }
        //判断月份是在终止月
        if (this.month == endm) {
          //终止月取到截止天
          for (var _i22 = 1; _i22 <= endd; _i22++) {
            days.push(_i22);
          }
          //判断日是否在截止日
          if (this.day == endd) {
            //终止日取到截止小时
            for (var _i23 = 0; _i23 <= endh; _i23++) {
              hours.push(_i23);
            }
            //判断小时是否在截止小时
            if (this.hour == endh) {
              //终止小时取到截止分钟
              for (var _i24 = 0; _i24 <= endmin; _i24++) {
                mins.push(_i24);
              }
            }
          }
        }
      } else {
        for (var _i25 = 1; _i25 <= 12; _i25++) {
          months.push(_i25);
        }
        for (var _i26 = 1; _i26 <= daysNum; _i26++) {
          days.push(_i26);
        }
        for (var _i27 = 0; _i27 <= 23; _i27++) {
          hours.push(_i27);
        }
        for (var _i28 = 0; _i28 <= 59; _i28++) {
          mins.push(_i28);
        }
      }
      if (months.length == 0) {
        for (var _i29 = 1; _i29 <= 12; _i29++) {
          months.push(_i29);
        }
      }
      if (days.length == 0) {
        for (var _i30 = 1; _i30 <= daysNum; _i30++) {
          days.push(_i30);
        }
      }
      if (hours.length == 0) {
        for (var _i31 = 0; _i31 <= 23; _i31++) {
          hours.push(_i31);
        }
      }
      if (mins.length == 0) {
        for (var _i32 = 0; _i32 <= 59; _i32++) {
          mins.push(_i32);
        }
      }
      this.years = years;
      this.months = months;
      this.days = days;
      this.hours = hours;
      this.mins = mins;
      this.$forceUpdate();
    } },

  watch: {
    year: function year() {
      this.amend();
    },
    month: function month() {
      this.amend();
    },
    day: function day() {
      this.amend();
    },
    hour: function hour() {
      this.amend();
    },
    min: function min() {
      this.amend();
    },
    years: function years(n, m) {
      if (n.toString() != m.toString()) {
        this.amend();
      }
    },
    months: function months(n, m) {
      if (n.toString() != m.toString()) {
        this.amend();
      }
    },
    days: function days(n, m) {
      if (n.toString() != m.toString()) {
        this.amend();
      }
    },
    hours: function hours(n, m) {
      if (n.toString() != m.toString()) {
        this.amend();
      }
    },
    mins: function mins(n, m) {
      if (n.toString() != m.toString()) {
        this.amend();
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 140:
/*!********************************************************************************************************************************************!*\
  !*** G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=style&index=0&id=74a06288&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kx-datetime.vue?vue&type=style&index=0&id=74a06288&lang=scss&scoped=true& */ 141);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kx_datetime_vue_vue_type_style_index_0_id_74a06288_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/Github/gxsf-tickets/gxsf-tickets/components/kx-datetime/kx-datetime.vue?vue&type=style&index=0&id=74a06288&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/kx-datetime/kx-datetime.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kx-datetime/kx-datetime-create-component',
    {
        'components/kx-datetime/kx-datetime-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(135))
        })
    },
    [['components/kx-datetime/kx-datetime-create-component']]
]);
