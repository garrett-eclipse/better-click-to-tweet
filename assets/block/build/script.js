this.bctt=this.bctt||{},this.bctt.main=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(7),o=n(8);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){!function(){t.exports=this.wp.editor}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(12)),u=(n.n(o),n(13)),c=n(14),i=n(49);e.default=Object(o.registerBlockType)("bctt/clicktotweet",{title:Object(r.__)("Better Click to Tweet"),description:Object(r.__)("Add text for your readers to tweet, powered by Better Click To Tweet"),category:"widgets",icon:"twitter",keywords:[Object(r.__)("Twitter"),Object(r.__)("Tweet")],attributes:u.a,edit:c.a,save:i.a})},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,n){"use strict";var r=n(0),o=(n.n(r),{tweet:{type:"string"},username:{type:"string",default:bctt_options_js.username},via:{type:"boolean",default:!0},url:{type:"boolean",default:!0},urlcustom:{type:"string"},nofollow:{type:"boolean",default:!1},prompt:{type:"string",default:Object(r.__)("Click To Tweet")}});e.a=o},function(t,e,n){"use strict";var r=n(15),o=n.n(r),u=n(44),c=n.n(u),i=n(0),a=(n.n(i),n(45)),f=(n.n(a),n(10)),l=(n.n(f),n(46)),s=n(48),p=(n.n(s),function(t){var e=t.attributes,n=t.setAttributes,r=t.className,u=e.tweet,s=e.prompt,p=function(t){n({tweet:t})},v=function(){return!1};return wp.element.createElement(a.Fragment,null,wp.element.createElement(l.a,o()({},t)),wp.element.createElement("span",{className:c()(r,"bctt-click-to-tweet")},wp.element.createElement("span",{className:"bctt-ctt-text"},wp.element.createElement(f.RichText,{format:"string",formattingControls:[],tagName:"div",placeholder:Object(i.__)("Enter text for readers to Tweet"),onChange:p,value:u})),wp.element.createElement("a",{href:"#",onClick:v,className:"bctt-ctt-btn"},s)))});e.a=p},function(t,e,n){"use strict";e.__esModule=!0;var r=n(16),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(17),__esModule:!0}},function(t,e,n){n(18),t.exports=n(5).Object.assign},function(t,e,n){var r=n(19);r(r.S+r.F,"Object",{assign:n(29)})},function(t,e,n){var r=n(1),o=n(5),u=n(20),c=n(22),i=function(t,e,n){var a,f,l,s=t&i.F,p=t&i.G,v=t&i.S,m=t&i.P,b=t&i.B,h=t&i.W,w=p?o:o[e]||(o[e]={}),y=w.prototype,_=p?r:v?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(f=!s&&_&&void 0!==_[a])&&a in w||(l=f?_[a]:n[a],w[a]=p&&"function"!=typeof _[a]?n[a]:b&&f?u(l,r):h&&_[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?u(Function.call,l):l,m&&((w.virtual||(w.virtual={}))[a]=l,t&i.R&&y&&!y[a]&&c(y,a,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,t.exports=i},function(t,e,n){var r=n(21);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(23),o=n(28);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(24),o=n(25),u=n(27),c=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),o=n(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(30),o=n(41),u=n(42),c=n(43),i=n(7),a=Object.assign;t.exports=!a||n(4)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=c(t),a=arguments.length,f=1,l=o.f,s=u.f;a>f;)for(var p,v=i(arguments[f++]),m=l?r(v).concat(l(v)):r(v),b=m.length,h=0;b>h;)s.call(v,p=m[h++])&&(n[p]=v[p]);return n}:a},function(t,e,n){var r=n(31),o=n(40);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(32),o=n(6),u=n(34)(!1),c=n(37)("IE_PROTO");t.exports=function(t,e){var n,i=o(t),a=0,f=[];for(n in i)n!=c&&r(i,n)&&f.push(n);for(;e.length>a;)r(i,n=e[a++])&&(~u(f,n)||f.push(n));return f}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(6),o=n(35),u=n(36);t.exports=function(t){return function(e,n,c){var i,a=r(e),f=o(a.length),l=u(c,f);if(t&&n!=n){for(;f>l;)if((i=a[l++])!=i)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(9),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(38)("keys"),o=n(39);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(8);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===o)for(var c in r)u.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}var u={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=n:(r=[],void 0!==(o=function(){return n}.apply(e,r))&&(t.exports=o))}()},function(t,e){!function(){t.exports=this.wp.element}()},function(t,e,n){"use strict";var r=n(0),o=(n.n(r),n(10)),u=(n.n(o),n(47)),c=(n.n(u),function(t){var e=t.attributes,n=t.setAttributes,c=e.username,i=e.via,a=e.url,f=e.urlcustom,l=e.nofollow,s=e.prompt,p=function(t){n({username:t})},v=function(){n({via:!i})},m=function(){n({url:!a})},b=function(t){n({urlcustom:t})},h=function(){n({nofollow:!l})},w=function(t){n({prompt:t})};return wp.element.createElement(o.InspectorControls,{key:"inspector"},wp.element.createElement(u.PanelBody,{Title:Object(r.__)("Tweet Settings")},wp.element.createElement(u.TextControl,{label:Object(r.__)("Twitter Username"),value:c,onChange:p}),wp.element.createElement(u.ToggleControl,{label:Object(r.__)("Include the username in Tweet?"),checked:!!i,onChange:v}),wp.element.createElement(u.ToggleControl,{label:Object(r.__)("Include URL in tweet?"),checked:!!a,onChange:m}),wp.element.createElement(u.TextControl,{label:Object(r.__)("Custom URL"),value:f,onChange:b,help:Object(r.__)("Custom URL to use instead of post")}),wp.element.createElement(u.ToggleControl,{label:Object(r.__)("Nofollow"),checked:!!l,onChange:h,help:Object(r.__)("Make links nofollow")}),wp.element.createElement(u.TextControl,{label:Object(r.__)("Prompt"),value:s,onChange:w,help:Object(r.__)("Text for action/prompt link")})))});e.a=c},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){},function(t,e,n){"use strict";var r=function(){return null};e.a=r}]);