/*TMODJS:{"version":4,"md5":"d112bff3108f6a91ebfd1503bc125725"}*/
template('loginHeader',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$out='';$out+=' <div class="header"> <div class="main clearfix"> <div class="logo"> <a href="../index/index.html"><img src="../images/logo.png" /></a> </div> <div class="load-txt"> ';
$out+=$escape(title);
$out+=' </div> </div> </div> ';
return new String($out);
});