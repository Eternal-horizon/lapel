/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:9*/
a("footer",'<div class="footer"> <div class="main clearfix"> <div class="tel"> <h4>\u84dd\u8058\u5ba2\u670d\u70ed\u7ebf</h4> <div>400-180-8333</div> <p>\u6bcf\u592909\uff1a00-21\uff1a00</p> </div> <div class="foot-nav clearfix"> <div> <h4>\u84dd\u8058\u7f51</h4> <div> <a href="../aboutUs/aboutUs.html">\u5173\u4e8e\u6211\u4eec</a> <a href="../aboutUs/joinUs.html">\u52a0\u5165\u6211\u4eec</a> <a href="../aboutUs/contactUs.html">\u8054\u7cfb\u6211\u4eec</a> </div> </div> <div> <h4>\u5e2e\u52a9\u4e2d\u5fc3</h4> <div> <a href="../aboutUs/agreement.html">\u4ea4\u6613\u89c4\u5219</a> <a href="../aboutUs/legalNotice.html">\u6cd5\u5f8b\u58f0\u660e</a> <a href="../aboutUs/interlocution.html">\u5e38\u89c1\u95ee\u9898</a> </div> </div> </div> <div class="foot-wx"> <h4>\u84dd\u8058\u5fae\u4fe1\u5e73\u53f0</h4> <div class="clearfix"> <div> <img src="../images/wx.png" /> <div>\u8054\u7cfb\u5ba2\u670d</div> </div> <div> <img src="../images/wx.png" /> <div>\u5fae\u4fe1\u516c\u4f17\u53f7</div> </div> </div> </div> </div> </div> </div> '),/*v:68*/
a("header",function(a){"use strict";var b=this,c=(b.$helpers,a.headerState),d="";return d+=' <div class="header" id="head"> <div class="main clearfix"> <div class="logo"> <a href="../index/index.html"><img src="../images/logo.png" /></a> </div> <ul> ',1==c?d+=' <li><a href="../index/index.html" class="hover"><span>\u9996\u9875</span></a></li> <li><a href="../demand/demand.html"><span>\u9700\u6c42\u5927\u5385</span></a></li> <li><a href="../aboutUs/aboutUs.html"><span>\u5173\u4e8e\u84dd\u8058</span></a></li> ':2==c?d+=' <li><a href="../index/index.html"><span>\u9996\u9875</span></a></li> <li><a href="../demand/demand.html" class="hover"><span>\u9700\u6c42\u5927\u5385</span></a></li> <li><a href="../aboutUs/aboutUs.html"><span>\u5173\u4e8e\u84dd\u8058</span></a></li> ':3==c&&(d+=' <li><a href="../index/index.html" ><span>\u9996\u9875</span></a></li> <li><a href="../demand/demand.html"><span>\u9700\u6c42\u5927\u5385</span></a></li> <li><a href="../aboutUs/aboutUs.html" class="hover"><span>\u5173\u4e8e\u84dd\u8058</span></a></li> '),d+=' </ul> <div class="searchBar clearfix"> <div class="search clearfix"> <i class="iconfont icon-sousuo"></i> <input type="text" /> <span class="js-searchKey">\u641c\u7d22</span> </div> <a href="../demand/quickRelease.html" class="search-submit">\u53d1\u5e03\u9700\u6c42</a> <div class="headImg js-headImg" style="display: none;background:url(\'../images/user.png\') no-repeat center;background-size:cover;"> <div class="childnav none"> <div> <div></div> <a href="javascript:;" class="js-linkHome">\u5de5\u4f5c\u53f0</a> <a href="javascript:;" class="js-taskList">\u6211\u7684\u8ba2\u5355</a> <a href="javascript:;" class="js-myWallet">\u6211\u7684\u94b1\u5305</a> <a href="javascript:;" class="exit">\u9000\u51fa\u767b\u5f55</a> </div> </div> </div> <a href="../user/login.html" class="link-load js-isLogin" >\u767b\u5f55</a> <a href="../user/register.html" class="link-register js-isLogin" >\u6ce8\u518c</a> </div> </div> </div> ',new k(d)}),/*v:57*/
a("left",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.name,e=a.province,f=a.city,g=a.State1,h=a.orgName,i=a.State2,j=a.State3,l=a.State4,m=a.State5,n=a.State6,o=a.authFlag,p=a.State7,q=a.State8,r="";return r+='<div class="authentication-nav"> <div class="my-home"> <div style="background:url(\'../images/user.png\') no-repeat center;background-size:cover;"></div> <div class="home-name">',r+=c(d),r+='</div> <div class="home-address">',r+=c(e),r+=" | ",r+=c(f),r+='</div> <a href="../home/myMessage.html" class="home-link"><i class="iconfont icon-zhuye"></i>\u6211\u7684\u4e3b\u9875</a> ',0==g?r+=' <a href="myData.html" class="modify-data">\u4fee\u6539\u6211\u7684\u8d44\u6599</a> ':1==g&&(r+=' <a href="myData.html" class="modify-data hover">\u4fee\u6539\u6211\u7684\u8d44\u6599</a> '),r+=' <span class="home-tips">',r+=c(h),r+='</span> </div> <div class="home-nav"> ',0==i?r+=' <a href="workbench.html" >\u5de5\u4f5c\u53f0</a> ':1==i&&(r+=' <a href="workbench.html" class="hover">\u5de5\u4f5c\u53f0</a> '),r+=" ",0==j?r+=' <a href="taskList.html">\u6211\u7684\u8ba2\u5355</a> ':1==j&&(r+=' <a href="taskList.html" class="hover">\u6211\u7684\u8ba2\u5355</a> '),r+=" ",0==l?r+=' <a href="demandList.html">\u6211\u7684\u9700\u6c42</a> ':1==l&&(r+=' <a href="demandList.html" class="hover">\u6211\u7684\u9700\u6c42</a> '),r+=' </div> <div class="home-nav"> ',0==m?r+=' <a href="myWallet.html">\u6211\u7684\u94b1\u5305</a> ':1==m&&(r+=' <a href="myWallet.html" class="hover">\u6211\u7684\u94b1\u5305</a> '),r+=" ",0==n?r+=' <a href="myCertification.html">\u6211\u7684\u8ba4\u8bc1 <span>\u672a\u8ba4\u8bc1</span></a> ':1==n?(r+=' <a href="myCertification.html" class="hover">\u6211\u7684\u8ba4\u8bc1 <span>',r+=c(o),r+="</span></a> "):2==n?(r+=' <a href="companyCertification.html">\u6211\u7684\u8ba4\u8bc1 <span>',r+=c(o),r+="</span></a> "):3==n&&(r+=' <a href="companyCertification.html" class="hover">\u6211\u7684\u8ba4\u8bc1 <span>',r+=c(o),r+="</span></a> "),r+=" ",0==p?r+=' <a href="accountSecurity.html">\u8d26\u53f7\u5b89\u5168</a> ':1==p&&(r+=' <a href="accountSecurity.html" class="hover">\u8d26\u53f7\u5b89\u5168</a> '),r+=" ",0==q?r+=' <a href="appeal.html" >\u7533\u8bc9\u5904\u7406</a> ':1==q&&(r+=' <a href="appeal.html" class="hover">\u7533\u8bc9\u5904\u7406</a> '),r+=" </div> </div>",new k(r)}),/*v:4*/
a("loginHeader",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.title,e="";return e+=' <div class="header"> <div class="main clearfix"> <div class="logo"> <a href="../index/index.html"><img src="../images/logo.png" /></a> </div> <div class="load-txt"> ',e+=c(d),e+=" </div> </div> </div> ",new k(e)})}();