/*TMODJS:{"version":68,"md5":"e3ff09d0aca80f4a74167afc62e39123"}*/
template('header',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,headerState=$data.headerState,$out='';$out+=' <div class="header" id="head"> <div class="main clearfix"> <div class="logo"> <a href="../index/index.html"><img src="../images/logo.png" /></a> </div> <ul> ';
if(headerState==1){
$out+=' <li><a href="../index/index.html" class="hover"><span>首页</span></a></li> <li><a href="../demand/demand.html"><span>需求大厅</span></a></li> <li><a href="../aboutUs/aboutUs.html"><span>关于蓝聘</span></a></li> ';
}else if(headerState==2){
$out+=' <li><a href="../index/index.html"><span>首页</span></a></li> <li><a href="../demand/demand.html" class="hover"><span>需求大厅</span></a></li> <li><a href="../aboutUs/aboutUs.html"><span>关于蓝聘</span></a></li> ';
}else if(headerState==3){
$out+=' <li><a href="../index/index.html" ><span>首页</span></a></li> <li><a href="../demand/demand.html"><span>需求大厅</span></a></li> <li><a href="../aboutUs/aboutUs.html" class="hover"><span>关于蓝聘</span></a></li> ';
}
$out+=' </ul> <div class="searchBar clearfix"> <div class="search clearfix"> <i class="iconfont icon-sousuo"></i> <input type="text" /> <span class="js-searchKey">搜索</span> </div> <a href="../demand/quickRelease.html" class="search-submit">发布需求</a> <div class="headImg js-headImg" style="display: none;background:url(\'../images/user.png\') no-repeat center;background-size:cover;"> <div class="childnav none"> <div> <div></div> <a href="javascript:;" class="js-linkHome">工作台</a> <a href="javascript:;" class="js-taskList">我的订单</a> <a href="javascript:;" class="js-myWallet">我的钱包</a> <a href="javascript:;" class="exit">退出登录</a> </div> </div> </div> <a href="../user/login.html" class="link-load js-isLogin" >登录</a> <a href="../user/register.html" class="link-register js-isLogin" >注册</a> </div> </div> </div> ';
return new String($out);
});