/*
 * searchtools.js_t
 * ~~~~~~~~~~~~~~~~
 *
 * Sphinx JavaScript utilties for the full-text search.
 *
 * :copyright: Copyright 2007-2016 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */


/* Non-minified version JS is _stemmer.js if file is provided */ 
var JSX={};(function(q){function r(b,e){var a=function(){};a.prototype=e.prototype;var c=new a;for(var d in b){b[d].prototype=c}}function Q(c,b){for(var a in b.prototype)if(b.prototype.hasOwnProperty(a))c.prototype[a]=b.prototype[a]}function j(a,b,d){function c(a,b,c){delete a[b];a[b]=c;return c}Object.defineProperty(a,b,{get:function(){return c(a,b,d())},set:function(d){c(a,b,d)},enumerable:true,configurable:true})}function R(a,b,c){return a[b]=a[b]/c|0}var M=parseInt;var K=parseFloat;function P(a){return a!==a}var A=isFinite;var G=encodeURIComponent;var F=decodeURIComponent;var E=encodeURI;var D=decodeURI;var C=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function p(){}q.require=function(b){var a=y[b];return a!==undefined?a:null};q.profilerIsRunning=function(){return p.getResults!=null};q.getProfileResults=function(){return(p.getResults||function(){return{}})()};q.postProfileResults=function(a,b){if(p.postResults==null)throw new Error('profiler has not been turned on');return p.postResults(a,b)};q.resetProfileResults=function(){if(p.resetResults==null)throw new Error('profiler has not been turned on');return p.resetResults()};q.DEBUG=false;function I(){};r([I],Error);function d(a,b,c){this.G=a.length;this.A_=a;this.D_=b;this.J=c;this.I=null;this.E_=null};r([d],Object);function u(){};r([u],Object);function m(){var a;var b;var c;this.F={};a=this.E='';b=this._=0;c=this.A=a.length;this.D=0;this.B=b;this.C=c};r([m],u);function B(a,b){a.E=b.E;a._=b._;a.A=b.A;a.D=b.D;a.B=b.B;a.C=b.C};function v(b,d,c,e){var a;if(b._>=b.A){return false}a=b.E.charCodeAt(b._);if(a>e||a<c){return false}a-=c;if((d[a>>>3]&1<<(a&7))===0){return false}b._++;return true};function f(b,d,c,e){var a;if(b._<=b.D){return false}a=b.E.charCodeAt(b._-1);if(a>e||a<c){return false}a-=c;if((d[a>>>3]&1<<(a&7))===0){return false}b._--;return true};function t(a,d,c,e){var b;if(a._<=a.D){return false}b=a.E.charCodeAt(a._-1);if(b>e||b<c){a._--;return true}b-=c;if((d[b>>>3]&1<<(b&7))===0){a._--;return true}return false};function s(a,b,d){var c;if(a.A-a._<b){return false}if(a.E.slice(c=a._,c+b)!==d){return false}a._+=b;return true};function g(a,b,d){var c;if(a._-a.D<b){return false}if(a.E.slice((c=a._)-b,c)!==d){return false}a._-=b;return true};function b(d,m,p){var b;var g;var e;var n;var f;var k;var l;var i;var h;var c;var a;var j;var o;b=0;g=p;e=d._;n=d.D;f=0;k=0;l=false;while(true){i=b+(g-b>>1);h=0;c=f<k?f:k;a=m[i];for(j=a.G-1-c;j>=0;j--){if(e-c===n){h=-1;break}h=d.E.charCodeAt(e-1-c)-a.A_.charCodeAt(j);if(h!==0){break}c++}if(h<0){g=i;k=c}else{b=i;f=c}if(g-b<=1){if(b>0){break}if(g===b){break}if(l){break}l=true}}while(true){a=m[b];if(f>=a.G){d._=e-a.G|0;if(a.I==null){return a.J}o=a.I(d);d._=e-a.G|0;if(o){return a.J}}b=a.D_;if(b<0){return 0}}return-1};function n(a,b,d,e){var c;c=e.length-(d-b);a.E=a.E.slice(0,b)+e+a.E.slice(d);a.A+=c|0;if(a._>=d){a._+=c|0}else if(a._>b){a._=b}return c|0};function e(a,f){var b;var c;var d;var e;b=false;if((c=a.B)<0||c>(d=a.C)||d>(e=a.A)||e>a.E.length?false:true){n(a,a.B,a.C,f);b=true}return b};m.prototype.H=function(){return false};m.prototype.B_=function(b){var a;var c;var d;var e;a=this.F['.'+b];if(a==null){c=this.E=b;d=this._=0;e=this.A=c.length;this.D=0;this.B=d;this.C=e;this.H();a=this.E;this.F['.'+b]=a}return a};m.prototype.stemWord=m.prototype.B_;m.prototype.C_=function(e){var d;var b;var c;var a;var f;var g;var h;d=[];for(b=0;b<e.length;b++){c=e[b];a=this.F['.'+c];if(a==null){f=this.E=c;g=this._=0;h=this.A=f.length;this.D=0;this.B=g;this.C=h;this.H();a=this.E;this.F['.'+c]=a}d.push(a)}return d};m.prototype.stemWords=m.prototype.C_;function a(){m.call(this);this.B_continue_stemming_noun_suffixes=false;this.I_strlen=0};r([a],m);a.prototype.K=function(a){this.B_continue_stemming_noun_suffixes=a.B_continue_stemming_noun_suffixes;this.I_strlen=a.I_strlen;B(this,a)};a.prototype.copy_from=a.prototype.K;a.prototype.O=function(){var E;var q;var b;var e;var h;var i;var j;var k;var l;var m;var n;var o;var p;var c;var r;var s;var t;var u;var d;var v;var w;var x;var y;var z;var A;var B;var C;var D;var G;var H;var I;var J;var K;var L;var M;var N;var F;E=this.A-this._;b:while(true){q=this.A-this._;o=true;a:while(o===true){o=false;if(!f(this,a.g_vowel,97,305)){break a}this._=this.A-q;break b}G=this._=this.A-q;if(G<=this.D){return false}this._--}p=true;a:while(p===true){p=false;b=this.A-this._;c=true;b:while(c===true){c=false;if(!g(this,1,'a')){break b}c:while(true){e=this.A-this._;r=true;d:while(r===true){r=false;if(!f(this,a.g_vowel1,97,305)){break d}this._=this.A-e;break c}H=this._=this.A-e;if(H<=this.D){break b}this._--}break a}this._=this.A-b;s=true;b:while(s===true){s=false;if(!g(this,1,'e')){break b}c:while(true){h=this.A-this._;t=true;d:while(t===true){t=false;if(!f(this,a.g_vowel2,101,252)){break d}this._=this.A-h;break c}I=this._=this.A-h;if(I<=this.D){break b}this._--}break a}this._=this.A-b;u=true;b:while(u===true){u=false;if(!g(this,1,'ı')){break b}c:while(true){i=this.A-this._;d=true;d:while(d===true){d=false;if(!f(this,a.g_vowel3,97,305)){break d}this._=this.A-i;break c}J=this._=this.A-i;if(J<=this.D){break b}this._--}break a}this._=this.A-b;v=true;b:while(v===true){v=false;if(!g(this,1,'i')){break b}c:while(true){j=this.A-this._;w=true;d:while(w===true){w=false;if(!f(this,a.g_vowel4,101,105)){break d}this._=this.A-j;break c}K=this._=this.A-j;if(K<=this.D){break b}this._--}break a}this._=this.A-b;x=true;b:while(x===true){x=false;if(!g(this,1,'o')){break b}c:while(true){k=this.A-this._;y=true;d:while(y===true){y=false;if(!f(this,a.g_vowel5,111,117)){break d}this._=this.A-k;break c}L=this._=this.A-k;if(L<=this.D){break b}this._--}break a}this._=this.A-b;z=true;b:while(z===true){z=false;if(!g(this,1,'ö')){break b}c:while(true){l=this.A-this._;A=true;d:while(A===true){A=false;if(!f(this,a.g_vowel6,246,252)){break d}this._=this.A-l;break c}M=this._=this.A-l;if(M<=this.D){break b}this._--}break a}this._=this.A-b;B=true;b:while(B===true){B=false;if(!g(this,1,'u')){break b}c:while(true){m=this.A-this._;C=true;d:while(C===true){C=false;if(!f(this,a.g_vowel5,111,117)){break d}this._=this.A-m;break c}N=this._=this.A-m;if(N<=this.D){break b}this._--}break a}this._=this.A-b;if(!g(this,1,'ü')){return false}b:while(true){n=this.A-this._;D=true;c:while(D===true){D=false;if(!f(this,a.g_vowel6,246,252)){break c}this._=this.A-n;break b}F=this._=this.A-n;if(F<=this.D){return false}this._--}}this._=this.A-E;return true};a.prototype.r_check_vowel_harmony=a.prototype.O;function c(b){var F;var r;var c;var e;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var d;var s;var t;var u;var v;var w;var x;var y;var z;var A;var B;var C;var D;var E;var H;var I;var J;var K;var L;var M;var N;var O;var G;F=b.A-b._;b:while(true){r=b.A-b._;o=true;a:while(o===true){o=false;if(!f(b,a.g_vowel,97,305)){break a}b._=b.A-r;break b}H=b._=b.A-r;if(H<=b.D){return false}b._--}p=true;a:while(p===true){p=false;c=b.A-b._;q=true;b:while(q===true){q=false;if(!g(b,1,'a')){break b}c:while(true){e=b.A-b._;d=true;d:while(d===true){d=false;if(!f(b,a.g_vowel1,97,305)){break d}b._=b.A-e;break c}I=b._=b.A-e;if(I<=b.D){break b}b._--}break a}b._=b.A-c;s=true;b:while(s===true){s=false;if(!g(b,1,'e')){break b}c:while(true){h=b.A-b._;t=true;d:while(t===true){t=false;if(!f(b,a.g_vowel2,101,252)){break d}b._=b.A-h;break c}J=b._=b.A-h;if(J<=b.D){break b}b._--}break a}b._=b.A-c;u=true;b:while(u===true){u=false;if(!g(b,1,'ı')){break b}c:while(true){i=b.A-b._;v=true;d:while(v===true){v=false;if(!f(b,a.g_vowel3,97,305)){break d}b._=b.A-i;break c}K=b._=b.A-i;if(K<=b.D){break b}b._--}break a}b._=b.A-c;w=true;b:while(w===true){w=false;if(!g(b,1,'i')){break b}c:while(true){j=b.A-b._;x=true;d:while(x===true){x=false;if(!f(b,a.g_vowel4,101,105)){break d}b._=b.A-j;break c}L=b._=b.A-j;if(L<=b.D){break b}b._--}break a}b._=b.A-c;y=true;b:while(y===true){y=false;if(!g(b,1,'o')){break b}c:while(true){k=b.A-b._;z=true;d:while(z===true){z=false;if(!f(b,a.g_vowel5,111,117)){break d}b._=b.A-k;break c}M=b._=b.A-k;if(M<=b.D){break b}b._--}break a}b._=b.A-c;A=true;b:while(A===true){A=false;if(!g(b,1,'ö')){break b}c:while(true){l=b.A-b._;B=true;d:while(B===true){B=false;if(!f(b,a.g_vowel6,246,252)){break d}b._=b.A-l;break c}N=b._=b.A-l;if(N<=b.D){break b}b._--}break a}b._=b.A-c;C=true;b:while(C===true){C=false;if(!g(b,1,'u')){break b}c:while(true){m=b.A-b._;D=true;d:while(D===true){D=false;if(!f(b,a.g_vowel5,111,117)){break d}b._=b.A-m;break c}O=b._=b.A-m;if(O<=b.D){break b}b._--}break a}b._=b.A-c;if(!g(b,1,'ü')){return false}b:while(true){n=b.A-b._;E=true;c:while(E===true){E=false;if(!f(b,a.g_vowel6,246,252)){break c}b._=b.A-n;break b}G=b._=b.A-n;if(G<=b.D){return false}b._--}}b._=b.A-F;return true};a.prototype.j=function(){var k;var h;var l;var i;var m;var j;var b;var e;var d;var n;var o;var p;var q;var c;b=true;b:while(b===true){b=false;k=this.A-this._;e=true;a:while(e===true){e=false;h=this.A-this._;if(!g(this,1,'n')){break a}n=this._=this.A-h;if(n<=this.D){break a}this._--;l=this.A-this._;if(!f(this,a.g_vowel,97,305)){break a}this._=this.A-l;break b}p=this._=(o=this.A)-k;i=o-p;d=true;a:while(d===true){d=false;m=this.A-this._;if(!g(this,1,'n')){break a}this._=this.A-m;return false}c=this._=(q=this.A)-i;j=q-c;if(c<=this.D){return false}this._--;if(!f(this,a.g_vowel,97,305)){return false}this._=this.A-j}return true};a.prototype.r_mark_suffix_with_optional_n_consonant=a.prototype.j;function o(b){var i;var m;var l;var j;var n;var k;var c;var e;var d;var o;var p;var q;var r;var h;c=true;b:while(c===true){c=false;i=b.A-b._;e=true;a:while(e===true){e=false;m=b.A-b._;if(!g(b,1,'n')){break a}o=b._=b.A-m;if(o<=b.D){break a}b._--;l=b.A-b._;if(!f(b,a.g_vowel,97,305)){break a}b._=b.A-l;break b}q=b._=(p=b.A)-i;j=p-q;d=true;a:while(d===true){d=false;n=b.A-b._;if(!g(b,1,'n')){break a}b._=b.A-n;return false}h=b._=(r=b.A)-j;k=r-h;if(h<=b.D){return false}b._--;if(!f(b,a.g_vowel,97,305)){return false}b._=b.A-k}return true};a.prototype.k=function(){var k;var h;var l;var i;var m;var j;var b;var e;var d;var n;var o;var p;var q;var c;b=true;b:while(b===true){b=false;k=this.A-this._;e=true;a:while(e===true){e=false;h=this.A-this._;if(!g(this,1,'s')){break a}n=this._=this.A-h;if(n<=this.D){break a}this._--;l=this.A-this._;if(!f(this,a.g_vowel,97,305)){break a}this._=this.A-l;break b}p=this._=(o=this.A)-k;i=o-p;d=true;a:while(d===true){d=false;m=this.A-this._;if(!g(this,1,'s')){break a}this._=this.A-m;return false}c=this._=(q=this.A)-i;j=q-c;if(c<=this.D){return false}this._--;if(!f(this,a.g_vowel,97,305)){return false}this._=this.A-j}return true};a.prototype.r_mark_suffix_with_optional_s_consonant=a.prototype.k;function l(b){var i;var m;var l;var j;var n;var k;var c;var e;var d;var o;var p;var q;var r;var h;c=true;b:while(c===true){c=false;i=b.A-b._;e=true;a:while(e===true){e=false;m=b.A-b._;if(!g(b,1,'s')){break a}o=b._=b.A-m;if(o<=b.D){break a}b._--;l=b.A-b._;if(!f(b,a.g_vowel,97,305)){break a}b._=b.A-l;break b}q=b._=(p=b.A)-i;j=p-q;d=true;a:while(d===true){d=false;n=b.A-b._;if(!g(b,1,'s')){break a}b._=b.A-n;return false}h=b._=(r=b.A)-j;k=r-h;if(h<=b.D){return false}b._--;if(!f(b,a.g_vowel,97,305)){return false}b._=b.A-k}return true};a.prototype.l=function(){var k;var h;var l;var i;var m;var j;var b;var e;var d;var n;var o;var p;var q;var c;b=true;b:while(b===true){b=false;k=this.A-this._;e=true;a:while(e===true){e=false;h=this.A-this._;if(!g(this,1,'y')){break a}n=this._=this.A-h;if(n<=this.D){break a}this._--;l=this.A-this._;if(!f(this,a.g_vowel,97,305)){break a}this._=this.A-l;break b}p=this._=(o=this.A)-k;i=o-p;d=true;a:while(d===true){d=false;m=this.A-this._;if(!g(this,1,'y')){break a}this._=this.A-m;return false}c=this._=(q=this.A)-i;j=q-c;if(c<=this.D){return false}this._--;if(!f(this,a.g_vowel,97,305)){return false}this._=this.A-j}return true};a.prototype.r_mark_suffix_with_optional_y_consonant=a.prototype.l;function h(b){var i;var m;var l;var j;var n;var k;var c;var e;var d;var o;var p;var q;var r;var h;c=true;b:while(c===true){c=false;i=b.A-b._;e=true;a:while(e===true){e=false;m=b.A-b._;if(!g(b,1,'y')){break a}o=b._=b.A-m;if(o<=b.D){break a}b._--;l=b.A-b._;if(!f(b,a.g_vowel,97,305)){break a}b._=b.A-l;break b}q=b._=(p=b.A)-i;j=p-q;d=true;a:while(d===true){d=false;n=b.A-b._;if(!g(b,1,'y')){break a}b._=b.A-n;return false}h=b._=(r=b.A)-j;k=r-h;if(h<=b.D){return false}b._--;if(!f(b,a.g_vowel,97,305)){return false}b._=b.A-k}return true};a.prototype.i=function(){var j;var g;var k;var h;var l;var i;var b;var e;var d;var m;var n;var o;var p;var c;b=true;b:while(b===true){b=false;j=this.A-this._;e=true;a:while(e===true){e=false;g=this.A-this._;if(!f(this,a.g_U,105,305)){break a}m=this._=this.A-g;if(m<=this.D){break a}this._--;k=this.A-this._;if(!t(this,a.g_vowel,97,305)){break a}this._=this.A-k;break b}o=this._=(n=this.A)-j;h=n-o;d=true;a:while(d===true){d=false;l=this.A-this._;if(!f(this,a.g_U,105,305)){break a}this._=this.A-l;return false}c=this._=(p=this.A)-h;i=p-c;if(c<=this.D){return false}this._--;if(!t(this,a.g_vowel,97,305)){return false}this._=this.A-i}return true};a.prototype.r_mark_suffix_with_optional_U_vowel=a.prototype.i;function k(b){var h;var l;var k;var i;var m;var j;var c;var e;var d;var n;var o;var p;var q;var g;c=true;b:while(c===true){c=false;h=b.A-b._;e=true;a:while(e===true){e=false;l=b.A-b._;if(!f(b,a.g_U,105,305)){break a}n=b._=b.A-l;if(n<=b.D){break a}b._--;k=b.A-b._;if(!t(b,a.g_vowel,97,305)){break a}b._=b.A-k;break b}p=b._=(o=b.A)-h;i=o-p;d=true;a:while(d===true){d=false;m=b.A-b._;if(!f(b,a.g_U,105,305)){break a}b._=b.A-m;return false}g=b._=(q=b.A)-i;j=q-g;if(g<=b.D){return false}b._--;if(!t(b,a.g_vowel,97,305)){return false}b._=b.A-j}return true};a.prototype.e=function(){return b(this,a.a_0,10)===0?false:!k(this)?false:true};a.prototype.r_mark_possessives=a.prototype.e;a.prototype.f=function(){return!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true};a.prototype.r_mark_sU=a.prototype.f;a.prototype.W=function(){return b(this,a.a_1,2)===0?false:true};a.prototype.r_mark_lArI=a.prototype.W;a.prototype.o=function(){return!c(this)?false:!f(this,a.g_U,105,305)?false:!h(this)?false:true};a.prototype.r_mark_yU=a.prototype.o;a.prototype.Y=function(){return!c(this)?false:b(this,a.a_2,4)===0?false:true};a.prototype.r_mark_nU=a.prototype.Y;a.prototype.Z=function(){return!c(this)?false:b(this,a.a_3,4)===0?false:!o(this)?false:true};a.prototype.r_mark_nUn=a.prototype.Z;a.prototype.m=function(){return!c(this)?false:b(this,a.a_4,2)===0?false:!h(this)?false:true};a.prototype.r_mark_yA=a.prototype.m;a.prototype.X=function(){return!c(this)?false:b(this,a.a_5,2)===0?false:true};a.prototype.r_mark_nA=a.prototype.X;a.prototype.Q=function(){return!c(this)?false:b(this,a.a_6,4)===0?false:true};a.prototype.r_mark_DA=a.prototype.Q;a.prototype.c=function(){return!c(this)?false:b(this,a.a_7,2)===0?false:true};a.prototype.r_mark_ndA=a.prototype.c;a.prototype.R=function(){return!c(this)?false:b(this,a.a_8,4)===0?false:true};a.prototype.r_mark_DAn=a.prototype.R;a.prototype.d=function(){return!c(this)?false:b(this,a.a_9,2)===0?false:true};a.prototype.r_mark_ndAn=a.prototype.d;a.prototype.s=function(){return!c(this)?false:b(this,a.a_10,2)===0?false:!h(this)?false:true};a.prototype.r_mark_ylA=a.prototype.s;a.prototype.U=function(){return!g(this,2,'ki')?false:true};a.prototype.r_mark_ki=a.prototype.U;a.prototype.b=function(){return!c(this)?false:b(this,a.a_11,2)===0?false:!o(this)?false:true};a.prototype.r_mark_ncA=a.prototype.b;a.prototype.p=function(){return!c(this)?false:b(this,a.a_12,4)===0?false:!h(this)?false:true};a.prototype.r_mark_yUm=a.prototype.p;a.prototype.g=function(){return!c(this)?false:b(this,a.a_13,4)===0?false:true};a.prototype.r_mark_sUn=a.prototype.g;a.prototype.q=function(){return!c(this)?false:b(this,a.a_14,4)===0?false:!h(this)?false:true};a.prototype.r_mark_yUz=a.prototype.q;a.prototype.h=function(){return b(this,a.a_15,4)===0?false:true};a.prototype.r_mark_sUnUz=a.prototype.h;a.prototype.V=function(){return!c(this)?false:b(this,a.a_16,2)===0?false:true};a.prototype.r_mark_lAr=a.prototype.V;a.prototype.a=function(){return!c(this)?false:b(this,a.a_17,4)===0?false:true};a.prototype.r_mark_nUz=a.prototype.a;a.prototype.S=function(){return!c(this)?false:b(this,a.a_18,8)===0?false:true};a.prototype.r_mark_DUr=a.prototype.S;a.prototype.T=function(){return b(this,a.a_19,2)===0?false:true};a.prototype.r_mark_cAsInA=a.prototype.T;a.prototype.n=function(){return!c(this)?false:b(this,a.a_20,32)===0?false:!h(this)?false:true};a.prototype.r_mark_yDU=a.prototype.n;a.prototype.u=function(){return b(this,a.a_21,8)===0?false:!h(this)?false:true};a.prototype.r_mark_ysA=a.prototype.u;a.prototype.t=function(){return!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true};a.prototype.r_mark_ymUs_=a.prototype.t;a.prototype.r=function(){return!g(this,3,'ken')?false:!h(this)?false:true};a.prototype.r_mark_yken=a.prototype.r;a.prototype.y=function(){var i;var j;var d;var Y;var k;var X;var l;var W;var V;var f;var r;var s;var t;var u;var v;var w;var x;var y;var z;var A;var B;var C;var m;var E;var F;var G;var H;var I;var J;var K;var L;var M;var N;var O;var P;var Q;var R;var S;var T;var U;var p;var o;var D;var n;var q;this.C=this._;this.B_continue_stemming_noun_suffixes=true;r=true;a:while(r===true){r=false;i=this.A-this._;s=true;d:while(s===true){s=false;t=true;b:while(t===true){t=false;j=this.A-this._;u=true;c:while(u===true){u=false;if(!(!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true)){break c}break b}this._=this.A-j;v=true;c:while(v===true){v=false;if(!(!c(this)?false:b(this,a.a_20,32)===0?false:!h(this)?false:true)){break c}break b}this._=this.A-j;w=true;c:while(w===true){w=false;if(!(b(this,a.a_21,8)===0?false:!h(this)?false:true)){break c}break b}this._=this.A-j;if(!(!g(this,3,'ken')?false:!h(this)?false:true)){break d}}break a}this._=this.A-i;x=true;c:while(x===true){x=false;if(!(b(this,a.a_19,2)===0?false:true)){break c}y=true;b:while(y===true){y=false;d=this.A-this._;z=true;d:while(z===true){z=false;if(!(b(this,a.a_15,4)===0?false:true)){break d}break b}this._=this.A-d;A=true;d:while(A===true){A=false;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break d}break b}this._=this.A-d;B=true;d:while(B===true){B=false;if(!(!c(this)?false:b(this,a.a_12,4)===0?false:!h(this)?false:true)){break d}break b}this._=this.A-d;C=true;d:while(C===true){C=false;if(!(!c(this)?false:b(this,a.a_13,4)===0?false:true)){break d}break b}this._=this.A-d;m=true;d:while(m===true){m=false;if(!(!c(this)?false:b(this,a.a_14,4)===0?false:!h(this)?false:true)){break d}break b}this._=this.A-d}if(!(!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true)){break c}break a}this._=this.A-i;E=true;c:while(E===true){E=false;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break c}this.B=this._;if(!e(this,'')){return false}Y=this.A-this._;F=true;d:while(F===true){F=false;this.C=this._;G=true;b:while(G===true){G=false;k=this.A-this._;H=true;e:while(H===true){H=false;if(!(!c(this)?false:b(this,a.a_18,8)===0?false:true)){break e}break b}this._=this.A-k;I=true;e:while(I===true){I=false;if(!(!c(this)?false:b(this,a.a_20,32)===0?false:!h(this)?false:true)){break e}break b}this._=this.A-k;J=true;e:while(J===true){J=false;if(!(b(this,a.a_21,8)===0?false:!h(this)?false:true)){break e}break b}this._=this.A-k;if(!(!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true)){this._=this.A-Y;break d}}}this.B_continue_stemming_noun_suffixes=false;break a}this._=this.A-i;K=true;b:while(K===true){K=false;if(!(!c(this)?false:b(this,a.a_17,4)===0?false:true)){break b}L=true;c:while(L===true){L=false;X=this.A-this._;M=true;d:while(M===true){M=false;if(!(!c(this)?false:b(this,a.a_20,32)===0?false:!h(this)?false:true)){break d}break c}this._=this.A-X;if(!(b(this,a.a_21,8)===0?false:!h(this)?false:true)){break b}}break a}this._=this.A-i;N=true;c:while(N===true){N=false;O=true;b:while(O===true){O=false;l=this.A-this._;P=true;d:while(P===true){P=false;if(!(b(this,a.a_15,4)===0?false:true)){break d}break b}this._=this.A-l;Q=true;d:while(Q===true){Q=false;if(!(!c(this)?false:b(this,a.a_14,4)===0?false:!h(this)?false:true)){break d}break b}this._=this.A-l;R=true;d:while(R===true){R=false;if(!(!c(this)?false:b(this,a.a_13,4)===0?false:true)){break d}break b}this._=this.A-l;if(!(!c(this)?false:b(this,a.a_12,4)===0?false:!h(this)?false:true)){break c}}this.B=this._;if(!e(this,'')){return false}W=this.A-this._;S=true;b:while(S===true){S=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true)){this._=this.A-W;break b}}break a}this._=this.A-i;if(!(!c(this)?false:b(this,a.a_18,8)===0?false:true)){return false}this.B=this._;if(!e(this,'')){return false}V=this.A-this._;T=true;d:while(T===true){T=false;this.C=this._;U=true;b:while(U===true){U=false;f=this.A-this._;p=true;c:while(p===true){p=false;if(!(b(this,a.a_15,4)===0?false:true)){break c}break b}this._=this.A-f;o=true;c:while(o===true){o=false;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break c}break b}this._=this.A-f;D=true;c:while(D===true){D=false;if(!(!c(this)?false:b(this,a.a_12,4)===0?false:!h(this)?false:true)){break c}break b}this._=this.A-f;n=true;c:while(n===true){n=false;if(!(!c(this)?false:b(this,a.a_13,4)===0?false:true)){break c}break b}this._=this.A-f;q=true;c:while(q===true){q=false;if(!(!c(this)?false:b(this,a.a_14,4)===0?false:!h(this)?false:true)){break c}break b}this._=this.A-f}if(!(!c(this)?false:b(this,a.a_22,4)===0?false:!h(this)?false:true)){this._=this.A-V;break d}}}this.B=this._;return!e(this,'')?false:true};a.prototype.r_stem_nominal_verb_suffixes=a.prototype.y;function J(d){var f;var k;var i;var Z;var l;var Y;var m;var X;var W;var j;var s;var t;var u;var v;var w;var x;var y;var z;var A;var B;var C;var n;var E;var F;var G;var H;var I;var J;var K;var L;var M;var N;var O;var P;var Q;var R;var S;var T;var U;var V;var q;var p;var D;var o;var r;d.C=d._;d.B_continue_stemming_noun_suffixes=true;s=true;a:while(s===true){s=false;f=d.A-d._;t=true;d:while(t===true){t=false;u=true;b:while(u===true){u=false;k=d.A-d._;v=true;c:while(v===true){v=false;if(!(!c(d)?false:b(d,a.a_22,4)===0?false:!h(d)?false:true)){break c}break b}d._=d.A-k;w=true;c:while(w===true){w=false;if(!(!c(d)?false:b(d,a.a_20,32)===0?false:!h(d)?false:true)){break c}break b}d._=d.A-k;x=true;c:while(x===true){x=false;if(!(b(d,a.a_21,8)===0?false:!h(d)?false:true)){break c}break b}d._=d.A-k;if(!(!g(d,3,'ken')?false:!h(d)?false:true)){break d}}break a}d._=d.A-f;y=true;c:while(y===true){y=false;if(!(b(d,a.a_19,2)===0?false:true)){break c}z=true;b:while(z===true){z=false;i=d.A-d._;A=true;d:while(A===true){A=false;if(!(b(d,a.a_15,4)===0?false:true)){break d}break b}d._=d.A-i;B=true;d:while(B===true){B=false;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break d}break b}d._=d.A-i;C=true;d:while(C===true){C=false;if(!(!c(d)?false:b(d,a.a_12,4)===0?false:!h(d)?false:true)){break d}break b}d._=d.A-i;n=true;d:while(n===true){n=false;if(!(!c(d)?false:b(d,a.a_13,4)===0?false:true)){break d}break b}d._=d.A-i;E=true;d:while(E===true){E=false;if(!(!c(d)?false:b(d,a.a_14,4)===0?false:!h(d)?false:true)){break d}break b}d._=d.A-i}if(!(!c(d)?false:b(d,a.a_22,4)===0?false:!h(d)?false:true)){break c}break a}d._=d.A-f;F=true;c:while(F===true){F=false;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break c}d.B=d._;if(!e(d,'')){return false}Z=d.A-d._;G=true;d:while(G===true){G=false;d.C=d._;H=true;b:while(H===true){H=false;l=d.A-d._;I=true;e:while(I===true){I=false;if(!(!c(d)?false:b(d,a.a_18,8)===0?false:true)){break e}break b}d._=d.A-l;J=true;e:while(J===true){J=false;if(!(!c(d)?false:b(d,a.a_20,32)===0?false:!h(d)?false:true)){break e}break b}d._=d.A-l;K=true;e:while(K===true){K=false;if(!(b(d,a.a_21,8)===0?false:!h(d)?false:true)){break e}break b}d._=d.A-l;if(!(!c(d)?false:b(d,a.a_22,4)===0?false:!h(d)?false:true)){d._=d.A-Z;break d}}}d.B_continue_stemming_noun_suffixes=false;break a}d._=d.A-f;L=true;b:while(L===true){L=false;if(!(!c(d)?false:b(d,a.a_17,4)===0?false:true)){break b}M=true;c:while(M===true){M=false;Y=d.A-d._;N=true;d:while(N===true){N=false;if(!(!c(d)?false:b(d,a.a_20,32)===0?false:!h(d)?false:true)){break d}break c}d._=d.A-Y;if(!(b(d,a.a_21,8)===0?false:!h(d)?false:true)){break b}}break a}d._=d.A-f;O=true;c:while(O===true){O=false;P=true;b:while(P===true){P=false;m=d.A-d._;Q=true;d:while(Q===true){Q=false;if(!(b(d,a.a_15,4)===0?false:true)){break d}break b}d._=d.A-m;R=true;d:while(R===true){R=false;if(!(!c(d)?false:b(d,a.a_14,4)===0?false:!h(d)?false:true)){break d}break b}d._=d.A-m;S=true;d:while(S===true){S=false;if(!(!c(d)?false:b(d,a.a_13,4)===0?false:true)){break d}break b}d._=d.A-m;if(!(!c(d)?false:b(d,a.a_12,4)===0?false:!h(d)?false:true)){break c}}d.B=d._;if(!e(d,'')){return false}X=d.A-d._;T=true;b:while(T===true){T=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_22,4)===0?false:!h(d)?false:true)){d._=d.A-X;break b}}break a}d._=d.A-f;if(!(!c(d)?false:b(d,a.a_18,8)===0?false:true)){return false}d.B=d._;if(!e(d,'')){return false}W=d.A-d._;U=true;d:while(U===true){U=false;d.C=d._;V=true;b:while(V===true){V=false;j=d.A-d._;q=true;c:while(q===true){q=false;if(!(b(d,a.a_15,4)===0?false:true)){break c}break b}d._=d.A-j;p=true;c:while(p===true){p=false;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break c}break b}d._=d.A-j;D=true;c:while(D===true){D=false;if(!(!c(d)?false:b(d,a.a_12,4)===0?false:!h(d)?false:true)){break c}break b}d._=d.A-j;o=true;c:while(o===true){o=false;if(!(!c(d)?false:b(d,a.a_13,4)===0?false:true)){break c}break b}d._=d.A-j;r=true;c:while(r===true){r=false;if(!(!c(d)?false:b(d,a.a_14,4)===0?false:!h(d)?false:true)){break c}break b}d._=d.A-j}if(!(!c(d)?false:b(d,a.a_22,4)===0?false:!h(d)?false:true)){d._=d.A-W;break d}}}d.B=d._;return!e(d,'')?false:true};a.prototype.__=function(){var z;var N;var M;var L;var p;var K;var r;var J;var t;var u;var v;var w;var x;var y;var d;var A;var B;var C;var D;var E;var F;var G;var H;var I;var s;var q;var n;var m;var j;var h;this.C=this._;if(!(!g(this,2,'ki')?false:true)){return false}w=true;b:while(w===true){w=false;z=this.A-this._;x=true;c:while(x===true){x=false;if(!(!c(this)?false:b(this,a.a_6,4)===0?false:true)){break c}this.B=this._;if(!e(this,'')){return false}N=this.A-this._;y=true;f:while(y===true){y=false;this.C=this._;d=true;e:while(d===true){d=false;M=this.A-this._;A=true;d:while(A===true){A=false;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break d}this.B=this._;if(!e(this,'')){return false}L=this.A-this._;B=true;a:while(B===true){B=false;if(!i(this)){this._=this.A-L;break a}}break e}this._=this.A-M;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){this._=this.A-N;break f}this.B=this._;if(!e(this,'')){return false}p=this.A-this._;C=true;a:while(C===true){C=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-p;break a}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-p;break a}}}}break b}this._=this.A-z;D=true;d:while(D===true){D=false;if(!(!c(this)?false:b(this,a.a_3,4)===0?false:!o(this)?false:true)){break d}this.B=this._;if(!e(this,'')){return false}K=this.A-this._;E=true;e:while(E===true){E=false;this.C=this._;F=true;a:while(F===true){F=false;r=this.A-this._;G=true;c:while(G===true){G=false;if(!(b(this,a.a_1,2)===0?false:true)){break c}this.B=this._;if(!e(this,'')){return false}break a}this._=this.A-r;H=true;f:while(H===true){H=false;this.C=this._;I=true;g:while(I===true){I=false;J=this.A-this._;s=true;c:while(s===true){s=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break c}break g}this._=this.A-J;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break f}}this.B=this._;if(!e(this,'')){return false}t=this.A-this._;q=true;c:while(q===true){q=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-t;break c}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-t;break c}}break a}this._=this.A-r;if(!i(this)){this._=this.A-K;break e}}}break b}this._=this.A-z;if(!(!c(this)?false:b(this,a.a_7,2)===0?false:true)){return false}n=true;a:while(n===true){n=false;u=this.A-this._;m=true;c:while(m===true){m=false;if(!(b(this,a.a_1,2)===0?false:true)){break c}this.B=this._;if(!e(this,'')){return false}break a}this._=this.A-u;j=true;d:while(j===true){j=false;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break d}this.B=this._;if(!e(this,'')){return false}v=this.A-this._;h=true;c:while(h===true){h=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-v;break c}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-v;break c}}break a}this._=this.A-u;if(!i(this)){return false}}}return true};a.prototype.r_stem_suffix_chain_before_ki=a.prototype.__;function i(d){var j;var O;var N;var M;var q;var L;var s;var K;var u;var v;var w;var x;var y;var z;var h;var B;var C;var D;var E;var F;var G;var H;var I;var J;var t;var r;var p;var n;var m;var A;d.C=d._;if(!(!g(d,2,'ki')?false:true)){return false}x=true;b:while(x===true){x=false;j=d.A-d._;y=true;c:while(y===true){y=false;if(!(!c(d)?false:b(d,a.a_6,4)===0?false:true)){break c}d.B=d._;if(!e(d,'')){return false}O=d.A-d._;z=true;f:while(z===true){z=false;d.C=d._;h=true;e:while(h===true){h=false;N=d.A-d._;B=true;d:while(B===true){B=false;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break d}d.B=d._;if(!e(d,'')){return false}M=d.A-d._;C=true;a:while(C===true){C=false;if(!i(d)){d._=d.A-M;break a}}break e}d._=d.A-N;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){d._=d.A-O;break f}d.B=d._;if(!e(d,'')){return false}q=d.A-d._;D=true;a:while(D===true){D=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-q;break a}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-q;break a}}}}break b}d._=d.A-j;E=true;d:while(E===true){E=false;if(!(!c(d)?false:b(d,a.a_3,4)===0?false:!o(d)?false:true)){break d}d.B=d._;if(!e(d,'')){return false}L=d.A-d._;F=true;e:while(F===true){F=false;d.C=d._;G=true;a:while(G===true){G=false;s=d.A-d._;H=true;c:while(H===true){H=false;if(!(b(d,a.a_1,2)===0?false:true)){break c}d.B=d._;if(!e(d,'')){return false}break a}d._=d.A-s;I=true;f:while(I===true){I=false;d.C=d._;J=true;g:while(J===true){J=false;K=d.A-d._;t=true;c:while(t===true){t=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break c}break g}d._=d.A-K;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break f}}d.B=d._;if(!e(d,'')){return false}u=d.A-d._;r=true;c:while(r===true){r=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-u;break c}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-u;break c}}break a}d._=d.A-s;if(!i(d)){d._=d.A-L;break e}}}break b}d._=d.A-j;if(!(!c(d)?false:b(d,a.a_7,2)===0?false:true)){return false}p=true;a:while(p===true){p=false;v=d.A-d._;n=true;c:while(n===true){n=false;if(!(b(d,a.a_1,2)===0?false:true)){break c}d.B=d._;if(!e(d,'')){return false}break a}d._=d.A-v;m=true;d:while(m===true){m=false;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break d}d.B=d._;if(!e(d,'')){return false}w=d.A-d._;A=true;c:while(A===true){A=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-w;break c}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-w;break c}}break a}d._=d.A-v;if(!i(d)){return false}}}return true};a.prototype.z=function(){var d;var ar;var S;var j;var av;var m;var aq;var n;var p;var ax;var ay;var q;var ap;var r;var s;var as;var at;var au;var t;var aw;var u;var v;var w;var aA;var aB;var ao;var x;var y;var z;var A;var B;var C;var D;var E;var F;var G;var H;var I;var J;var K;var L;var M;var N;var O;var P;var Q;var R;var g;var T;var U;var V;var W;var X;var Y;var Z;var _;var $;var a0;var a1;var a2;var a3;var a4;var a5;var a6;var a7;var a8;var a9;var aa;var ab;var ac;var ad;var ae;var af;var ag;var ah;var ai;var aj;var ak;var al;var am;var an;var aC;var az;y=true;a:while(y===true){y=false;d=this.A-this._;z=true;b:while(z===true){z=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break b}this.B=this._;if(!e(this,'')){return false}ar=this.A-this._;A=true;c:while(A===true){A=false;if(!i(this)){this._=this.A-ar;break c}}break a}this._=this.A-d;B=true;g:while(B===true){B=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_11,2)===0?false:!o(this)?false:true)){break g}this.B=this._;if(!e(this,'')){return false}S=this.A-this._;C=true;b:while(C===true){C=false;D=true;c:while(D===true){D=false;j=this.A-this._;E=true;d:while(E===true){E=false;this.C=this._;if(!(b(this,a.a_1,2)===0?false:true)){break d}this.B=this._;if(!e(this,'')){return false}break c}this._=this.A-j;F=true;f:while(F===true){F=false;this.C=this._;G=true;d:while(G===true){G=false;av=this.A-this._;H=true;e:while(H===true){H=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break e}break d}this._=this.A-av;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break f}}this.B=this._;if(!e(this,'')){return false}m=this.A-this._;I=true;d:while(I===true){I=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-m;break d}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-m;break d}}break c}aC=this._=this.A-j;this.C=aC;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-S;break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-S;break b}}}break a}this._=this.A-d;J=true;b:while(J===true){J=false;this.C=this._;K=true;d:while(K===true){K=false;aq=this.A-this._;L=true;c:while(L===true){L=false;if(!(!c(this)?false:b(this,a.a_7,2)===0?false:true)){break c}break d}this._=this.A-aq;if(!(!c(this)?false:b(this,a.a_5,2)===0?false:true)){break b}}M=true;c:while(M===true){M=false;n=this.A-this._;N=true;d:while(N===true){N=false;if(!(b(this,a.a_1,2)===0?false:true)){break d}this.B=this._;if(!e(this,'')){return false}break c}this._=this.A-n;O=true;e:while(O===true){O=false;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break e}this.B=this._;if(!e(this,'')){return false}p=this.A-this._;P=true;d:while(P===true){P=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-p;break d}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-p;break d}}break c}this._=this.A-n;if(!i(this)){break b}}break a}this._=this.A-d;Q=true;c:while(Q===true){Q=false;this.C=this._;R=true;b:while(R===true){R=false;ax=this.A-this._;g=true;d:while(g===true){g=false;if(!(!c(this)?false:b(this,a.a_9,2)===0?false:true)){break d}break b}this._=this.A-ax;if(!(!c(this)?false:b(this,a.a_2,4)===0?false:true)){break c}}T=true;d:while(T===true){T=false;ay=this.A-this._;U=true;e:while(U===true){U=false;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break e}this.B=this._;if(!e(this,'')){return false}q=this.A-this._;V=true;b:while(V===true){V=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-q;break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-q;break b}}break d}this._=this.A-ay;if(!(b(this,a.a_1,2)===0?false:true)){break c}}break a}this._=this.A-d;W=true;d:while(W===true){W=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_8,4)===0?false:true)){break d}this.B=this._;if(!e(this,'')){return false}ap=this.A-this._;X=true;e:while(X===true){X=false;this.C=this._;Y=true;c:while(Y===true){Y=false;r=this.A-this._;Z=true;f:while(Z===true){Z=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break f}this.B=this._;if(!e(this,'')){return false}s=this.A-this._;_=true;b:while(_===true){_=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-s;break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-s;break b}}break c}this._=this.A-r;$=true;b:while($===true){$=false;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break b}this.B=this._;if(!e(this,'')){return false}as=this.A-this._;a0=true;f:while(a0===true){a0=false;if(!i(this)){this._=this.A-as;break f}}break c}this._=this.A-r;if(!i(this)){this._=this.A-ap;break e}}}break a}this._=this.A-d;a1=true;d:while(a1===true){a1=false;this.C=this._;a2=true;b:while(a2===true){a2=false;at=this.A-this._;a3=true;c:while(a3===true){a3=false;if(!(!c(this)?false:b(this,a.a_3,4)===0?false:!o(this)?false:true)){break c}break b}this._=this.A-at;if(!(!c(this)?false:b(this,a.a_10,2)===0?false:!h(this)?false:true)){break d}}this.B=this._;if(!e(this,'')){return false}au=this.A-this._;a4=true;e:while(a4===true){a4=false;a5=true;c:while(a5===true){a5=false;t=this.A-this._;a6=true;b:while(a6===true){a6=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){break b}break c}this._=this.A-t;a7=true;f:while(a7===true){a7=false;this.C=this._;a8=true;b:while(a8===true){a8=false;aw=this.A-this._;a9=true;g:while(a9===true){a9=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break g}break b}this._=this.A-aw;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){break f}}this.B=this._;if(!e(this,'')){return false}u=this.A-this._;aa=true;b:while(aa===true){aa=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-u;break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-u;break b}}break c}this._=this.A-t;if(!i(this)){this._=this.A-au;break e}}}break a}this._=this.A-d;ab=true;b:while(ab===true){ab=false;this.C=this._;if(!(b(this,a.a_1,2)===0?false:true)){break b}this.B=this._;if(!e(this,'')){return false}break a}this._=this.A-d;ac=true;b:while(ac===true){ac=false;if(!i(this)){break b}break a}this._=this.A-d;ad=true;c:while(ad===true){ad=false;this.C=this._;ae=true;b:while(ae===true){ae=false;v=this.A-this._;af=true;d:while(af===true){af=false;if(!(!c(this)?false:b(this,a.a_6,4)===0?false:true)){break d}break b}this._=this.A-v;ag=true;d:while(ag===true){ag=false;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!h(this)?false:true)){break d}break b}this._=this.A-v;if(!(!c(this)?false:b(this,a.a_4,2)===0?false:!h(this)?false:true)){break c}}this.B=this._;if(!e(this,'')){return false}w=this.A-this._;ah=true;b:while(ah===true){ah=false;this.C=this._;ai=true;d:while(ai===true){ai=false;aA=this.A-this._;aj=true;e:while(aj===true){aj=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break e}this.B=this._;if(!e(this,'')){return false}aB=this.A-this._;ak=true;f:while(ak===true){ak=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-aB;break f}}break d}this._=this.A-aA;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-w;break b}}this.B=this._;if(!e(this,'')){return false}this.C=this._;if(!i(this)){this._=this.A-w;break b}}break a}az=this._=this.A-d;this.C=az;al=true;b:while(al===true){al=false;ao=this.A-this._;am=true;c:while(am===true){am=false;if(!(b(this,a.a_0,10)===0?false:!k(this)?false:true)){break c}break b}this._=this.A-ao;if(!(!c(this)?false:!f(this,a.g_U,105,305)?false:!l(this)?false:true)){return false}}this.B=this._;if(!e(this,'')){return false}x=this.A-this._;an=true;b:while(an===true){an=false;this.C=this._;if(!(!c(this)?false:b(this,a.a_16,2)===0?false:true)){this._=this.A-x;break b}this.B=this._;if(!e(this,'')){return false}if(!i(this)){this._=this.A-x;break b}}}return true};a.prototype.r_stem_noun_suffixes=a.prototype.z;function L(d){var g;var as;var S;var m;var aw;var n;var ar;var p;var q;var ay;var az;var r;var aq;var s;var t;var at;var au;var av;var u;var ax;var v;var w;var x;var aB;var aC;var ap;var y;var z;var A;var B;var C;var D;var E;var F;var G;var H;var I;var J;var K;var L;var M;var N;var O;var P;var Q;var R;var j;var T;var U;var V;var W;var X;var Y;var Z;var _;var $;var a0;var a1;var a2;var a3;var a4;var a5;var a6;var a7;var a8;var a9;var aa;var ab;var ac;var ad;var ae;var af;var ag;var ah;var ai;var aj;var ak;var al;var am;var an;var ao;var aD;var aA;z=true;a:while(z===true){z=false;g=d.A-d._;A=true;b:while(A===true){A=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break b}d.B=d._;if(!e(d,'')){return false}as=d.A-d._;B=true;c:while(B===true){B=false;if(!i(d)){d._=d.A-as;break c}}break a}d._=d.A-g;C=true;g:while(C===true){C=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_11,2)===0?false:!o(d)?false:true)){break g}d.B=d._;if(!e(d,'')){return false}S=d.A-d._;D=true;b:while(D===true){D=false;E=true;c:while(E===true){E=false;m=d.A-d._;F=true;d:while(F===true){F=false;d.C=d._;if(!(b(d,a.a_1,2)===0?false:true)){break d}d.B=d._;if(!e(d,'')){return false}break c}d._=d.A-m;G=true;f:while(G===true){G=false;d.C=d._;H=true;d:while(H===true){H=false;aw=d.A-d._;I=true;e:while(I===true){I=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break e}break d}d._=d.A-aw;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break f}}d.B=d._;if(!e(d,'')){return false}n=d.A-d._;J=true;d:while(J===true){J=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-n;break d}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-n;break d}}break c}aD=d._=d.A-m;d.C=aD;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-S;break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-S;break b}}}break a}d._=d.A-g;K=true;b:while(K===true){K=false;d.C=d._;L=true;d:while(L===true){L=false;ar=d.A-d._;M=true;c:while(M===true){M=false;if(!(!c(d)?false:b(d,a.a_7,2)===0?false:true)){break c}break d}d._=d.A-ar;if(!(!c(d)?false:b(d,a.a_5,2)===0?false:true)){break b}}N=true;c:while(N===true){N=false;p=d.A-d._;O=true;d:while(O===true){O=false;if(!(b(d,a.a_1,2)===0?false:true)){break d}d.B=d._;if(!e(d,'')){return false}break c}d._=d.A-p;P=true;e:while(P===true){P=false;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break e}d.B=d._;if(!e(d,'')){return false}q=d.A-d._;Q=true;d:while(Q===true){Q=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-q;break d}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-q;break d}}break c}d._=d.A-p;if(!i(d)){break b}}break a}d._=d.A-g;R=true;c:while(R===true){R=false;d.C=d._;j=true;b:while(j===true){j=false;ay=d.A-d._;T=true;d:while(T===true){T=false;if(!(!c(d)?false:b(d,a.a_9,2)===0?false:true)){break d}break b}d._=d.A-ay;if(!(!c(d)?false:b(d,a.a_2,4)===0?false:true)){break c}}U=true;d:while(U===true){U=false;az=d.A-d._;V=true;e:while(V===true){V=false;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break e}d.B=d._;if(!e(d,'')){return false}r=d.A-d._;W=true;b:while(W===true){W=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-r;break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-r;break b}}break d}d._=d.A-az;if(!(b(d,a.a_1,2)===0?false:true)){break c}}break a}d._=d.A-g;X=true;d:while(X===true){X=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_8,4)===0?false:true)){break d}d.B=d._;if(!e(d,'')){return false}aq=d.A-d._;Y=true;e:while(Y===true){Y=false;d.C=d._;Z=true;c:while(Z===true){Z=false;s=d.A-d._;_=true;f:while(_===true){_=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break f}d.B=d._;if(!e(d,'')){return false}t=d.A-d._;$=true;b:while($===true){$=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-t;break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-t;break b}}break c}d._=d.A-s;a0=true;b:while(a0===true){a0=false;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break b}d.B=d._;if(!e(d,'')){return false}at=d.A-d._;a1=true;f:while(a1===true){a1=false;if(!i(d)){d._=d.A-at;break f}}break c}d._=d.A-s;if(!i(d)){d._=d.A-aq;break e}}}break a}d._=d.A-g;a2=true;d:while(a2===true){a2=false;d.C=d._;a3=true;b:while(a3===true){a3=false;au=d.A-d._;a4=true;c:while(a4===true){a4=false;if(!(!c(d)?false:b(d,a.a_3,4)===0?false:!o(d)?false:true)){break c}break b}d._=d.A-au;if(!(!c(d)?false:b(d,a.a_10,2)===0?false:!h(d)?false:true)){break d}}d.B=d._;if(!e(d,'')){return false}av=d.A-d._;a5=true;e:while(a5===true){a5=false;a6=true;c:while(a6===true){a6=false;u=d.A-d._;a7=true;b:while(a7===true){a7=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){break b}break c}d._=d.A-u;a8=true;f:while(a8===true){a8=false;d.C=d._;a9=true;b:while(a9===true){a9=false;ax=d.A-d._;aa=true;g:while(aa===true){aa=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break g}break b}d._=d.A-ax;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){break f}}d.B=d._;if(!e(d,'')){return false}v=d.A-d._;ab=true;b:while(ab===true){ab=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-v;break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-v;break b}}break c}d._=d.A-u;if(!i(d)){d._=d.A-av;break e}}}break a}d._=d.A-g;ac=true;b:while(ac===true){ac=false;d.C=d._;if(!(b(d,a.a_1,2)===0?false:true)){break b}d.B=d._;if(!e(d,'')){return false}break a}d._=d.A-g;ad=true;b:while(ad===true){ad=false;if(!i(d)){break b}break a}d._=d.A-g;ae=true;c:while(ae===true){ae=false;d.C=d._;af=true;b:while(af===true){af=false;w=d.A-d._;ag=true;d:while(ag===true){ag=false;if(!(!c(d)?false:b(d,a.a_6,4)===0?false:true)){break d}break b}d._=d.A-w;ah=true;d:while(ah===true){ah=false;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!h(d)?false:true)){break d}break b}d._=d.A-w;if(!(!c(d)?false:b(d,a.a_4,2)===0?false:!h(d)?false:true)){break c}}d.B=d._;if(!e(d,'')){return false}x=d.A-d._;ai=true;b:while(ai===true){ai=false;d.C=d._;aj=true;d:while(aj===true){aj=false;aB=d.A-d._;ak=true;e:while(ak===true){ak=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break e}d.B=d._;if(!e(d,'')){return false}aC=d.A-d._;al=true;f:while(al===true){al=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-aC;break f}}break d}d._=d.A-aB;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-x;break b}}d.B=d._;if(!e(d,'')){return false}d.C=d._;if(!i(d)){d._=d.A-x;break b}}break a}aA=d._=d.A-g;d.C=aA;am=true;b:while(am===true){am=false;ap=d.A-d._;an=true;c:while(an===true){an=false;if(!(b(d,a.a_0,10)===0?false:!k(d)?false:true)){break c}break b}d._=d.A-ap;if(!(!c(d)?false:!f(d,a.g_U,105,305)?false:!l(d)?false:true)){return false}}d.B=d._;if(!e(d,'')){return false}y=d.A-d._;ao=true;b:while(ao===true){ao=false;d.C=d._;if(!(!c(d)?false:b(d,a.a_16,2)===0?false:true)){d._=d.A-y;break b}d.B=d._;if(!e(d,'')){return false}if(!i(d)){d._=d.A-y;break b}}}return true};a.prototype.w=function(){var c;this.C=this._;c=b(this,a.a_23,4);if(c===0){return false}this.B=this._;switch(c){case 0:return false;case 1:if(!e(this,'p')){return false}break;case 2:if(!e(this,'ç')){return false}break;case 3:if(!e(this,'t')){return false}break;case 4:if(!e(this,'k')){return false}break}return true};a.prototype.r_post_process_last_consonants=a.prototype.w;function w(c){var d;c.C=c._;d=b(c,a.a_23,4);if(d===0){return false}c.B=c._;switch(d){case 0:return false;case 1:if(!e(c,'p')){return false}break;case 2:if(!e(c,'ç')){return false}break;case 3:if(!e(c,'t')){return false}break;case 4:if(!e(c,'k')){return false}break}return true};a.prototype.N=function(){var L;var _;var i;var Y;var B;var W;var K;var l;var S;var Q;var p;var O;var M;var s;var U;var u;var v;var w;var x;var y;var z;var A;var b;var C;var D;var j;var F;var G;var H;var I;var J;var E;var t;var r;var N;var q;var P;var o;var R;var m;var T;var k;var V;var h;var X;var e;var Z;var d;var $;var a0;var a1;var c;L=this.A-this._;u=true;a:while(u===true){u=false;_=this.A-this._;v=true;b:while(v===true){v=false;if(!g(this,1,'d')){break b}break a}this._=this.A-_;if(!g(this,1,'g')){return false}}this._=this.A-L;w=true;a:while(w===true){w=false;i=this.A-this._;x=true;b:while(x===true){x=false;Y=this.A-this._;d:while(true){B=this.A-this._;y=true;c:while(y===true){y=false;if(!f(this,a.g_vowel,97,305)){break c}this._=this.A-B;break d}V=this._=this.A-B;if(V<=this.D){break b}this._--}z=true;c:while(z===true){z=false;W=this.A-this._;A=true;d:while(A===true){A=false;if(!g(this,1,'a')){break d}break c}this._=this.A-W;if(!g(this,1,'ı')){break b}}h=this._=this.A-Y;b=h;N=h;q=n(this,h,h,'ı');if(h<=this.B){this.B+=q|0}if(N<=this.C){this.C+=q|0}this._=b;break a}this._=this.A-i;C=true;b:while(C===true){C=false;K=this.A-this._;c:while(true){l=this.A-this._;D=true;d:while(D===true){D=false;if(!f(this,a.g_vowel,97,305)){break d}this._=this.A-l;break c}X=this._=this.A-l;if(X<=this.D){break b}this._--}j=true;c:while(j===true){j=false;S=this.A-this._;F=true;d:while(F===true){F=false;if(!g(this,1,'e')){break d}break c}this._=this.A-S;if(!g(this,1,'i')){break b}}e=this._=this.A-K;b=e;P=e;o=n(this,e,e,'i');if(e<=this.B){this.B+=o|0}if(P<=this.C){this.C+=o|0}this._=b;break a}this._=this.A-i;G=true;b:while(G===true){G=false;Q=this.A-this._;c:while(true){p=this.A-this._;H=true;d:while(H===true){H=false;if(!f(this,a.g_vowel,97,305)){break d}this._=this.A-p;break c}Z=this._=this.A-p;if(Z<=this.D){break b}this._--}I=true;c:while(I===true){I=false;O=this.A-this._;J=true;d:while(J===true){J=false;if(!g(this,1,'o')){break d}break c}this._=this.A-O;if(!g(this,1,'u')){break b}}d=this._=this.A-Q;b=d;R=d;m=n(this,d,d,'u');if(d<=this.B){this.B+=m|0}if(R<=this.C){this.C+=m|0}this._=b;break a}a1=this._=(a0=this.A)-i;M=a0-a1;b:while(true){s=this.A-this._;E=true;c:while(E===true){E=false;if(!f(this,a.g_vowel,97,305)){break c}this._=this.A-s;break b}$=this._=this.A-s;if($<=this.D){return false}this._--}t=true;b:while(t===true){t=false;U=this.A-this._;r=true;c:while(r===true){r=false;if(!g(this,1,'ö')){break c}break b}this._=this.A-U;if(!g(this,1,'ü')){return false}}c=this._=this.A-M;b=c;T=c;k=n(this,c,c,'ü');if(c<=this.B){this.B+=k|0}if(T<=this.C){this.C+=k|0}this._=b}return true};a.prototype.r_append_U_to_stems_ending_with_d_or_g=a.prototype.N;function z(b){var $;var Z;var j;var X;var F;var L;var T;var m;var R;var P;var q;var N;var V;var t;var M;var v;var w;var x;var y;var z;var A;var B;var c;var D;var E;var C;var G;var H;var I;var J;var K;var u;var s;var r;var O;var p;var Q;var o;var S;var l;var U;var k;var W;var i;var Y;var h;var _;var e;var a0;var a1;var a2;var d;$=b.A-b._;v=true;a:while(v===true){v=false;Z=b.A-b._;w=true;b:while(w===true){w=false;if(!g(b,1,'d')){break b}break a}b._=b.A-Z;if(!g(b,1,'g')){return false}}b._=b.A-$;x=true;a:while(x===true){x=false;j=b.A-b._;y=true;b:while(y===true){y=false;X=b.A-b._;d:while(true){F=b.A-b._;z=true;c:while(z===true){z=false;if(!f(b,a.g_vowel,97,305)){break c}b._=b.A-F;break d}W=b._=b.A-F;if(W<=b.D){break b}b._--}A=true;c:while(A===true){A=false;L=b.A-b._;B=true;d:while(B===true){B=false;if(!g(b,1,'a')){break d}break c}b._=b.A-L;if(!g(b,1,'ı')){break b}}i=b._=b.A-X;c=i;O=i;p=n(b,i,i,'ı');if(i<=b.B){b.B+=p|0}if(O<=b.C){b.C+=p|0}b._=c;break a}b._=b.A-j;D=true;b:while(D===true){D=false;T=b.A-b._;c:while(true){m=b.A-b._;E=true;d:while(E===true){E=false;if(!f(b,a.g_vowel,97,305)){break d}b._=b.A-m;break c}Y=b._=b.A-m;if(Y<=b.D){break b}b._--}C=true;c:while(C===true){C=false;R=b.A-b._;G=true;d:while(G===true){G=false;if(!g(b,1,'e')){break d}break c}b._=b.A-R;if(!g(b,1,'i')){break b}}h=b._=b.A-T;c=h;Q=h;o=n(b,h,h,'i');if(h<=b.B){b.B+=o|0}if(Q<=b.C){b.C+=o|0}b._=c;break a}b._=b.A-j;H=true;b:while(H===true){H=false;P=b.A-b._;c:while(true){q=b.A-b._;I=true;d:while(I===true){I=false;if(!f(b,a.g_vowel,97,305)){break d}b._=b.A-q;break c}_=b._=b.A-q;if(_<=b.D){break b}b._--}J=true;c:while(J===true){J=false;N=b.A-b._;K=true;d:while(K===true){K=false;if(!g(b,1,'o')){break d}break c}b._=b.A-N;if(!g(b,1,'u')){break b}}e=b._=b.A-P;c=e;S=e;l=n(b,e,e,'u');if(e<=b.B){b.B+=l|0}if(S<=b.C){b.C+=l|0}b._=c;break a}a2=b._=(a1=b.A)-j;V=a1-a2;b:while(true){t=b.A-b._;u=true;c:while(u===true){u=false;if(!f(b,a.g_vowel,97,305)){break c}b._=b.A-t;break b}a0=b._=b.A-t;if(a0<=b.D){return false}b._--}s=true;b:while(s===true){s=false;M=b.A-b._;r=true;c:while(r===true){r=false;if(!g(b,1,'ö')){break c}break b}b._=b.A-M;if(!g(b,1,'ü')){return false}}d=b._=b.A-V;c=d;U=d;k=n(b,d,d,'ü');if(d<=b.B){b.B+=k|0}if(U<=b.C){b.C+=k|0}b._=c}return true};a.prototype.v=function(){var e;var f;var b;var c;var d;e=this._;b=2;a:while(true){f=this._;c=true;b:while(c===true){c=false;c:while(true){d=true;d:while(d===true){d=false;if(!v(this,a.g_vowel,97,305)){break d}break c}if(this._>=this.A){break b}this._++}b--;continue a}this._=f;break a}if(b>0){return false}this._=e;return true};a.prototype.r_more_than_one_syllable_word=a.prototype.v;function N(b){var f;var g;var c;var d;var e;f=b._;c=2;a:while(true){g=b._;d=true;b:while(d===true){d=false;c:while(true){e=true;d:while(e===true){e=false;if(!v(b,a.g_vowel,97,305)){break d}break c}if(b._>=b.A){break b}b._++}c--;continue a}b._=g;break a}if(c>0){return false}b._=f;return true};a.prototype.P=function(){var f;var g;var h;var b;var a;var c;var d;var i;var j;var e;b=true;b:while(b===true){b=false;f=this._;a=true;a:while(a===true){a=false;g=this._;c:while(true){c=true;d:while(c===true){c=false;if(!s(this,2,'ad')){break d}break c}if(this._>=this.A){break a}this._++}i=this.I_strlen=2;if(!(i===this.A)){break a}this._=g;break b}j=this._=f;h=j;a:while(true){d=true;c:while(d===true){d=false;if(!s(this,5,'soyad')){break c}break a}if(this._>=this.A){return false}this._++}e=this.I_strlen=5;if(!(e===this.A)){return false}this._=h}return true};a.prototype.r_is_reserved_word=a.prototype.P;function x(a){var g;var h;var i;var c;var b;var d;var e;var j;var k;var f;c=true;b:while(c===true){c=false;g=a._;b=true;a:while(b===true){b=false;h=a._;c:while(true){d=true;d:while(d===true){d=false;if(!s(a,2,'ad')){break d}break c}if(a._>=a.A){break a}a._++}j=a.I_strlen=2;if(!(j===a.A)){break a}a._=h;break b}k=a._=g;i=k;a:while(true){e=true;c:while(e===true){e=false;if(!s(a,5,'soyad')){break c}break a}if(a._>=a.A){return false}a._++}f=a.I_strlen=5;if(!(f===a.A)){return false}a._=i}return true};a.prototype.x=function(){var d;var e;var a;var b;var c;var f;var g;var h;d=this._;a=true;a:while(a===true){a=false;if(!x(this)){break a}return false}f=this._=d;this.D=f;h=this._=g=this.A;e=g-h;b=true;a:while(b===true){b=false;if(!z(this)){break a}}this._=this.A-e;c=true;a:while(c===true){c=false;if(!w(this)){break a}}this._=this.D;return true};a.prototype.r_postlude=a.prototype.x;function O(a){var e;var f;var b;var c;var d;var g;var h;var i;e=a._;b=true;a:while(b===true){b=false;if(!x(a)){break a}return false}g=a._=e;a.D=g;i=a._=h=a.A;f=h-i;c=true;a:while(c===true){c=false;if(!z(a)){break a}}a._=a.A-f;d=true;a:while(d===true){d=false;if(!w(a)){break a}}a._=a.D;return true};a.prototype.H=function(){var c;var a;var b;var d;var e;if(!N(this)){return false}this.D=this._;e=this._=d=this.A;c=d-e;a=true;a:while(a===true){a=false;if(!J(this)){break a}}this._=this.A-c;if(!this.B_continue_stemming_noun_suffixes){return false}b=true;a:while(b===true){b=false;if(!L(this)){break a}}this._=this.D;return!O(this)?false:true};a.prototype.stem=a.prototype.H;a.prototype.L=function(b){return b instanceof a};a.prototype.equals=a.prototype.L;a.prototype.M=function(){var c;var a;var b;var d;c='TurkishStemmer';a=0;for(b=0;b<c.length;b++){d=c.charCodeAt(b);a=(a<<5)-a+d;a=a&a}return a|0};a.prototype.hashCode=a.prototype.M;a.serialVersionUID=1;j(a,'methodObject',function(){return new a});j(a,'a_0',function(){return[new d('m',-1,-1),new d('n',-1,-1),new d('miz',-1,-1),new d('niz',-1,-1),new d('muz',-1,-1),new d('nuz',-1,-1),new d('müz',-1,-1),new d('nüz',-1,-1),new d('mız',-1,-1),new d('nız',-1,-1)]});j(a,'a_1',function(){return[new d('leri',-1,-1),new d('ları',-1,-1)]});j(a,'a_2',function(){return[new d('ni',-1,-1),new d('nu',-1,-1),new d('nü',-1,-1),new d('nı',-1,-1)]});j(a,'a_3',function(){return[new d('in',-1,-1),new d('un',-1,-1),new d('ün',-1,-1),new d('ın',-1,-1)]});j(a,'a_4',function(){return[new d('a',-1,-1),new d('e',-1,-1)]});j(a,'a_5',function(){return[new d('na',-1,-1),new d('ne',-1,-1)]});j(a,'a_6',function(){return[new d('da',-1,-1),new d('ta',-1,-1),new d('de',-1,-1),new d('te',-1,-1)]});j(a,'a_7',function(){return[new d('nda',-1,-1),new d('nde',-1,-1)]});j(a,'a_8',function(){return[new d('dan',-1,-1),new d('tan',-1,-1),new d('den',-1,-1),new d('ten',-1,-1)]});j(a,'a_9',function(){return[new d('ndan',-1,-1),new d('nden',-1,-1)]});j(a,'a_10',function(){return[new d('la',-1,-1),new d('le',-1,-1)]});j(a,'a_11',function(){return[new d('ca',-1,-1),new d('ce',-1,-1)]});j(a,'a_12',function(){return[new d('im',-1,-1),new d('um',-1,-1),new d('üm',-1,-1),new d('ım',-1,-1)]});j(a,'a_13',function(){return[new d('sin',-1,-1),new d('sun',-1,-1),new d('sün',-1,-1),new d('sın',-1,-1)]});j(a,'a_14',function(){return[new d('iz',-1,-1),new d('uz',-1,-1),new d('üz',-1,-1),new d('ız',-1,-1)]});j(a,'a_15',function(){return[new d('siniz',-1,-1),new d('sunuz',-1,-1),new d('sünüz',-1,-1),new d('sınız',-1,-1)]});j(a,'a_16',function(){return[new d('lar',-1,-1),new d('ler',-1,-1)]});j(a,'a_17',function(){return[new d('niz',-1,-1),new d('nuz',-1,-1),new d('nüz',-1,-1),new d('nız',-1,-1)]});j(a,'a_18',function(){return[new d('dir',-1,-1),new d('tir',-1,-1),new d('dur',-1,-1),new d('tur',-1,-1),new d('dür',-1,-1),new d('tür',-1,-1),new d('dır',-1,-1),new d('tır',-1,-1)]});j(a,'a_19',function(){return[new d('casına',-1,-1),new d('cesine',-1,-1)]});j(a,'a_20',function(){return[new d('di',-1,-1),new d('ti',-1,-1),new d('dik',-1,-1),new d('tik',-1,-1),new d('duk',-1,-1),new d('tuk',-1,-1),new d('dük',-1,-1),new d('tük',-1,-1),new d('dık',-1,-1),new d('tık',-1,-1),new d('dim',-1,-1),new d('tim',-1,-1),new d('dum',-1,-1),new d('tum',-1,-1),new d('düm',-1,-1),new d('tüm',-1,-1),new d('dım',-1,-1),new d('tım',-1,-1),new d('din',-1,-1),new d('tin',-1,-1),new d('dun',-1,-1),new d('tun',-1,-1),new d('dün',-1,-1),new d('tün',-1,-1),new d('dın',-1,-1),new d('tın',-1,-1),new d('du',-1,-1),new d('tu',-1,-1),new d('dü',-1,-1),new d('tü',-1,-1),new d('dı',-1,-1),new d('tı',-1,-1)]});j(a,'a_21',function(){return[new d('sa',-1,-1),new d('se',-1,-1),new d('sak',-1,-1),new d('sek',-1,-1),new d('sam',-1,-1),new d('sem',-1,-1),new d('san',-1,-1),new d('sen',-1,-1)]});j(a,'a_22',function(){return[new d('miş',-1,-1),new d('muş',-1,-1),new d('müş',-1,-1),new d('mış',-1,-1)]});j(a,'a_23',function(){return[new d('b',-1,1),new d('c',-1,2),new d('d',-1,3),new d('ğ',-1,4)]});j(a,'g_vowel',function(){return[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,8,0,0,0,0,0,0,1]});j(a,'g_U',function(){return[1,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,1]});j(a,'g_vowel1',function(){return[1,64,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]});j(a,'g_vowel2',function(){return[17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130]});j(a,'g_vowel3',function(){return[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]});j(a,'g_vowel4',function(){return[17]});j(a,'g_vowel5',function(){return[65]});j(a,'g_vowel6',function(){return[65]});var y={'src/stemmer.jsx':{Stemmer:u},'src/turkish-stemmer.jsx':{TurkishStemmer:a}}}(JSX))
var Stemmer = JSX.require("src/turkish-stemmer.jsx").TurkishStemmer;



/**
 * Simple result scoring code.
 */
var Scorer = {
  // Implement the following function to further tweak the score for each result
  // The function takes a result array [filename, title, anchor, descr, score]
  // and returns the new score.
  /*
  score: function(result) {
    return result[4];
  },
  */

  // query matches the full name of an object
  objNameMatch: 11,
  // or matches in the last dotted part of the object name
  objPartialMatch: 6,
  // Additive scores depending on the priority of the object
  objPrio: {0:  15,   // used to be importantResults
            1:  5,   // used to be objectResults
            2: -5},  // used to be unimportantResults
  //  Used when the priority is not in the mapping.
  objPrioDefault: 0,

  // query found in title
  title: 15,
  // query found in terms
  term: 5
};


/**
 * Search Module
 */
var Search = {

  _index : null,
  _queued_query : null,
  _pulse_status : -1,

  init : function() {
      var params = $.getQueryParameters();
      if (params.q) {
          var query = params.q[0];
          $('input[name="q"]')[0].value = query;
          this.performSearch(query);
      }
  },

  loadIndex : function(url) {
    $.ajax({type: "GET", url: url, data: null,
            dataType: "script", cache: true,
            complete: function(jqxhr, textstatus) {
              if (textstatus != "success") {
                document.getElementById("searchindexloader").src = url;
              }
            }});
  },

  setIndex : function(index) {
    var q;
    this._index = index;
    if ((q = this._queued_query) !== null) {
      this._queued_query = null;
      Search.query(q);
    }
  },

  hasIndex : function() {
      return this._index !== null;
  },

  deferQuery : function(query) {
      this._queued_query = query;
  },

  stopPulse : function() {
      this._pulse_status = 0;
  },

  startPulse : function() {
    if (this._pulse_status >= 0)
        return;
    function pulse() {
      var i;
      Search._pulse_status = (Search._pulse_status + 1) % 4;
      var dotString = '';
      for (i = 0; i < Search._pulse_status; i++)
        dotString += '.';
      Search.dots.text(dotString);
      if (Search._pulse_status > -1)
        window.setTimeout(pulse, 500);
    }
    pulse();
  },

  /**
   * perform a search for something (or wait until index is loaded)
   */
  performSearch : function(query) {
    // create the required interface elements
    this.out = $('#search-results');
    this.title = $('<h2>' + _('Searching') + '</h2>').appendTo(this.out);
    this.dots = $('<span></span>').appendTo(this.title);
    this.status = $('<p style="display: none"></p>').appendTo(this.out);
    this.output = $('<ul class="search"/>').appendTo(this.out);

    $('#search-progress').text(_('Preparing search...'));
    this.startPulse();

    // index already loaded, the browser was quick!
    if (this.hasIndex())
      this.query(query);
    else
      this.deferQuery(query);
  },

  /**
   * execute search (requires search index to be loaded)
   */
  query : function(query) {
    var i;
    var stopwords = [];

    // stem the searchterms and add them to the correct list
    var stemmer = new Stemmer();
    var searchterms = [];
    var excluded = [];
    var hlterms = [];
    var tmp = query.split(/\s+/);
    var objectterms = [];
    for (i = 0; i < tmp.length; i++) {
      if (tmp[i] !== "") {
          objectterms.push(tmp[i].toLowerCase());
      }

      if ($u.indexOf(stopwords, tmp[i].toLowerCase()) != -1 || tmp[i].match(/^\d+$/) ||
          tmp[i] === "") {
        // skip this "word"
        continue;
      }
      // stem the word
      var word = stemmer.stemWord(tmp[i].toLowerCase());
      var toAppend;
      // select the correct list
      if (word[0] == '-') {
        toAppend = excluded;
        word = word.substr(1);
      }
      else {
        toAppend = searchterms;
        hlterms.push(tmp[i].toLowerCase());
      }
      // only add if not already in the list
      if (!$u.contains(toAppend, word))
        toAppend.push(word);
    }
    var highlightstring = '?highlight=' + $.urlencode(hlterms.join(" "));

    // console.debug('SEARCH: searching for:');
    // console.info('required: ', searchterms);
    // console.info('excluded: ', excluded);

    // prepare search
    var terms = this._index.terms;
    var titleterms = this._index.titleterms;

    // array of [filename, title, anchor, descr, score]
    var results = [];
    $('#search-progress').empty();

    // lookup as object
    for (i = 0; i < objectterms.length; i++) {
      var others = [].concat(objectterms.slice(0, i),
                             objectterms.slice(i+1, objectterms.length));
      results = results.concat(this.performObjectSearch(objectterms[i], others));
    }

    // lookup as search terms in fulltext
    results = results.concat(this.performTermsSearch(searchterms, excluded, terms, titleterms));

    // let the scorer override scores with a custom scoring function
    if (Scorer.score) {
      for (i = 0; i < results.length; i++)
        results[i][4] = Scorer.score(results[i]);
    }

    // now sort the results by score (in opposite order of appearance, since the
    // display function below uses pop() to retrieve items) and then
    // alphabetically
    results.sort(function(a, b) {
      var left = a[4];
      var right = b[4];
      if (left > right) {
        return 1;
      } else if (left < right) {
        return -1;
      } else {
        // same score: sort alphabetically
        left = a[1].toLowerCase();
        right = b[1].toLowerCase();
        return (left > right) ? -1 : ((left < right) ? 1 : 0);
      }
    });

    // for debugging
    //Search.lastresults = results.slice();  // a copy
    //console.info('search results:', Search.lastresults);

    // print the results
    var resultCount = results.length;
    function displayNextItem() {
      // results left, load the summary and display it
      if (results.length) {
        var item = results.pop();
        var listItem = $('<li style="display:none"></li>');
        if (DOCUMENTATION_OPTIONS.FILE_SUFFIX === '') {
          // dirhtml builder
          var dirname = item[0] + '/';
          if (dirname.match(/\/index\/$/)) {
            dirname = dirname.substring(0, dirname.length-6);
          } else if (dirname == 'index/') {
            dirname = '';
          }
          listItem.append($('<a/>').attr('href',
            DOCUMENTATION_OPTIONS.URL_ROOT + dirname +
            highlightstring + item[2]).html(item[1]));
        } else {
          // normal html builders
          listItem.append($('<a/>').attr('href',
            item[0] + DOCUMENTATION_OPTIONS.FILE_SUFFIX +
            highlightstring + item[2]).html(item[1]));
        }
        if (item[3]) {
          listItem.append($('<span> (' + item[3] + ')</span>'));
          Search.output.append(listItem);
          listItem.slideDown(5, function() {
            displayNextItem();
          });
        } else if (DOCUMENTATION_OPTIONS.HAS_SOURCE) {
          $.ajax({url: DOCUMENTATION_OPTIONS.URL_ROOT + '_sources/' + item[0] + '.txt',
                  dataType: "text",
                  complete: function(jqxhr, textstatus) {
                    var data = jqxhr.responseText;
                    if (data !== '' && data !== undefined) {
                      listItem.append(Search.makeSearchSummary(data, searchterms, hlterms));
                    }
                    Search.output.append(listItem);
                    listItem.slideDown(5, function() {
                      displayNextItem();
                    });
                  }});
        } else {
          // no source available, just display title
          Search.output.append(listItem);
          listItem.slideDown(5, function() {
            displayNextItem();
          });
        }
      }
      // search finished, update title and status message
      else {
        Search.stopPulse();
        Search.title.text(_('Search Results'));
        if (!resultCount)
          Search.status.text(_('Your search did not match any documents. Please make sure that all words are spelled correctly and that you\'ve selected enough categories.'));
        else
            Search.status.text(_('Search finished, found %s page(s) matching the search query.').replace('%s', resultCount));
        Search.status.fadeIn(500);
      }
    }
    displayNextItem();
  },

  /**
   * search for object names
   */
  performObjectSearch : function(object, otherterms) {
    var filenames = this._index.filenames;
    var objects = this._index.objects;
    var objnames = this._index.objnames;
    var titles = this._index.titles;

    var i;
    var results = [];

    for (var prefix in objects) {
      for (var name in objects[prefix]) {
        var fullname = (prefix ? prefix + '.' : '') + name;
        if (fullname.toLowerCase().indexOf(object) > -1) {
          var score = 0;
          var parts = fullname.split('.');
          // check for different match types: exact matches of full name or
          // "last name" (i.e. last dotted part)
          if (fullname == object || parts[parts.length - 1] == object) {
            score += Scorer.objNameMatch;
          // matches in last name
          } else if (parts[parts.length - 1].indexOf(object) > -1) {
            score += Scorer.objPartialMatch;
          }
          var match = objects[prefix][name];
          var objname = objnames[match[1]][2];
          var title = titles[match[0]];
          // If more than one term searched for, we require other words to be
          // found in the name/title/description
          if (otherterms.length > 0) {
            var haystack = (prefix + ' ' + name + ' ' +
                            objname + ' ' + title).toLowerCase();
            var allfound = true;
            for (i = 0; i < otherterms.length; i++) {
              if (haystack.indexOf(otherterms[i]) == -1) {
                allfound = false;
                break;
              }
            }
            if (!allfound) {
              continue;
            }
          }
          var descr = objname + _(', in ') + title;

          var anchor = match[3];
          if (anchor === '')
            anchor = fullname;
          else if (anchor == '-')
            anchor = objnames[match[1]][1] + '-' + fullname;
          // add custom score for some objects according to scorer
          if (Scorer.objPrio.hasOwnProperty(match[2])) {
            score += Scorer.objPrio[match[2]];
          } else {
            score += Scorer.objPrioDefault;
          }
          results.push([filenames[match[0]], fullname, '#'+anchor, descr, score]);
        }
      }
    }

    return results;
  },

  /**
   * search for full-text terms in the index
   */
  performTermsSearch : function(searchterms, excluded, terms, titleterms) {
    var filenames = this._index.filenames;
    var titles = this._index.titles;

    var i, j, file;
    var fileMap = {};
    var scoreMap = {};
    var results = [];

    // perform the search on the required terms
    for (i = 0; i < searchterms.length; i++) {
      var word = searchterms[i];
      var files = [];
      var _o = [
        {files: terms[word], score: Scorer.term},
        {files: titleterms[word], score: Scorer.title}
      ];

      // no match but word was a required one
      if ($u.every(_o, function(o){return o.files === undefined;})) {
        break;
      }
      // found search word in contents
      $u.each(_o, function(o) {
        var _files = o.files;
        if (_files === undefined)
          return

        if (_files.length === undefined)
          _files = [_files];
        files = files.concat(_files);

        // set score for the word in each file to Scorer.term
        for (j = 0; j < _files.length; j++) {
          file = _files[j];
          if (!(file in scoreMap))
            scoreMap[file] = {}
          scoreMap[file][word] = o.score;
        }
      });

      // create the mapping
      for (j = 0; j < files.length; j++) {
        file = files[j];
        if (file in fileMap)
          fileMap[file].push(word);
        else
          fileMap[file] = [word];
      }
    }

    // now check if the files don't contain excluded terms
    for (file in fileMap) {
      var valid = true;

      // check if all requirements are matched
      if (fileMap[file].length != searchterms.length)
          continue;

      // ensure that none of the excluded terms is in the search result
      for (i = 0; i < excluded.length; i++) {
        if (terms[excluded[i]] == file ||
            titleterms[excluded[i]] == file ||
            $u.contains(terms[excluded[i]] || [], file) ||
            $u.contains(titleterms[excluded[i]] || [], file)) {
          valid = false;
          break;
        }
      }

      // if we have still a valid result we can add it to the result list
      if (valid) {
        // select one (max) score for the file.
        // for better ranking, we should calculate ranking by using words statistics like basic tf-idf...
        var score = $u.max($u.map(fileMap[file], function(w){return scoreMap[file][w]}));
        results.push([filenames[file], titles[file], '', null, score]);
      }
    }
    return results;
  },

  /**
   * helper function to return a node containing the
   * search summary for a given text. keywords is a list
   * of stemmed words, hlwords is the list of normal, unstemmed
   * words. the first one is used to find the occurance, the
   * latter for highlighting it.
   */
  makeSearchSummary : function(text, keywords, hlwords) {
    var textLower = text.toLowerCase();
    var start = 0;
    $.each(keywords, function() {
      var i = textLower.indexOf(this.toLowerCase());
      if (i > -1)
        start = i;
    });
    start = Math.max(start - 120, 0);
    var excerpt = ((start > 0) ? '...' : '') +
      $.trim(text.substr(start, 240)) +
      ((start + 240 - text.length) ? '...' : '');
    var rv = $('<div class="context"></div>').text(excerpt);
    $.each(hlwords, function() {
      rv = rv.highlightText(this, 'highlighted');
    });
    return rv;
  }
};

$(document).ready(function() {
  Search.init();
});