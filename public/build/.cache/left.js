/*TMODJS:{"version":57,"md5":"a2949958e6512014712554c8c2df58be"}*/
template('left',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,province=$data.province,city=$data.city,State1=$data.State1,orgName=$data.orgName,State2=$data.State2,State3=$data.State3,State4=$data.State4,State5=$data.State5,State6=$data.State6,authFlag=$data.authFlag,State7=$data.State7,State8=$data.State8,$out='';$out+='<div class="authentication-nav"> <div class="my-home"> <div style="background:url(\'../images/user.png\') no-repeat center;background-size:cover;"></div> <div class="home-name">';
$out+=$escape(name);
$out+='</div> <div class="home-address">';
$out+=$escape(province);
$out+=' | ';
$out+=$escape(city);
$out+='</div> <a href="../home/myMessage.html" class="home-link"><i class="iconfont icon-zhuye"></i>我的主页</a> ';
if(State1==0){
$out+=' <a href="myData.html" class="modify-data">修改我的资料</a> ';
}else if(State1==1){
$out+=' <a href="myData.html" class="modify-data hover">修改我的资料</a> ';
}
$out+=' <span class="home-tips">';
$out+=$escape(orgName);
$out+='</span> </div> <div class="home-nav"> ';
if(State2==0){
$out+=' <a href="workbench.html" >工作台</a> ';
}else if(State2==1){
$out+=' <a href="workbench.html" class="hover">工作台</a> ';
}
$out+=' ';
if(State3==0){
$out+=' <a href="taskList.html">我的订单</a> ';
}else if(State3==1){
$out+=' <a href="taskList.html" class="hover">我的订单</a> ';
}
$out+=' ';
if(State4==0){
$out+=' <a href="demandList.html">我的需求</a> ';
}else if(State4==1){
$out+=' <a href="demandList.html" class="hover">我的需求</a> ';
}
$out+=' </div> <div class="home-nav"> ';
if(State5==0){
$out+=' <a href="myWallet.html">我的钱包</a> ';
}else if(State5==1){
$out+=' <a href="myWallet.html" class="hover">我的钱包</a> ';
}
$out+=' ';
if(State6==0){
$out+=' <a href="myCertification.html">我的认证 <span>未认证</span></a> ';
}else if(State6==1){
$out+=' <a href="myCertification.html" class="hover">我的认证 <span>';
$out+=$escape(authFlag);
$out+='</span></a> ';
}else if(State6==2){
$out+=' <a href="companyCertification.html">我的认证 <span>';
$out+=$escape(authFlag);
$out+='</span></a> ';
}else if(State6==3){
$out+=' <a href="companyCertification.html" class="hover">我的认证 <span>';
$out+=$escape(authFlag);
$out+='</span></a> ';
}
$out+=' ';
if(State7==0){
$out+=' <a href="accountSecurity.html">账号安全</a> ';
}else if(State7==1){
$out+=' <a href="accountSecurity.html" class="hover">账号安全</a> ';
}
$out+=' ';
if(State8==0){
$out+=' <a href="appeal.html" >申诉处理</a> ';
}else if(State8==1){
$out+=' <a href="appeal.html" class="hover">申诉处理</a> ';
}
$out+=' </div> </div>';
return new String($out);
});