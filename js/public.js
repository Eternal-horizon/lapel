var ip="http://192.168.1.137:20001/hriceSite"
function GetRequest() {   
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
       var str = url.substr(1);   
       strs = str.split("&");   
       for(var i = 0; i < strs.length; i ++) {   
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
       }   
    }   
    return theRequest;   
 }   

$(function(){
    //获取用户信息
    var orgType,isLogin=true;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/hriceSite/user/get-user",
        data: {},
        success: function (res) {
            console.log(res);
            //未登录跳转
            var url = location.href; 
            if(url.indexOf("personalCenter")!=-1){
                if(res.code==101){
                    location.href=" ../user/login.html"
                }
            }
            //未登录状态
            if(res.code==101){
                isLogin=false;    
            }
            if(res.code==0){
                orgType= res.data.orgType;
                $(".js-headImg,.my-home>div:first-child").css("background","url("+ip+ res.data.userHead+") no-repeat center/cover");
                $(".js-isLogin").hide();
                $(".js-headImg").show(); 
            }
            
        },
        error : function() {
            console.log("异常");
        }
    });    
    $(".js-searchKey").click(function(){
        var key = $(".search input").val();
        location.href=encodeURI("../demand/demand.html?key="+encodeURIComponent(key));
        
    });
    $(".search input").keypress(function(e){
        var key = $(".search input").val();
        if(e.keyCode == 13){
            location.href=encodeURI("../demand/demand.html?key="+encodeURIComponent(key));
        }
        
    });
    $(".js-headImg").mouseenter(function(){
        $(".childnav").stop(false,true).fadeIn(300);
    }).mouseleave(function(){
        $(".childnav").stop(false,true).fadeOut(300);
    });
    $(".js-linkHome").click(function(){
        if(!isLogin){
            layer.msg("请登录");
            setTimeout(() => {
             location.href=" ../user/login.html"
            }, 1000);
         }else{
             location.href="../personalCenter/workbench.html"
         }
    });
    $(".js-taskList").click(function(){
        if(!isLogin){
           layer.msg("请登录");
           setTimeout(() => {
            location.href=" ../user/login.html"
           }, 1000);
        }else{
            location.href="../personalCenter/taskList.html"
        }
    });
    $(".js-myWallet").click(function(){
        if(!isLogin){
           layer.msg("请登录");
           setTimeout(() => {
            location.href=" ../user/login.html"
           }, 1000);
        }else{
            location.href="../personalCenter/myWallet.html"
        }
    });
    $(".exit").click(function(){
        layer.confirm('确定退出登录吗', {
            btn: ['确定','取消'] //按钮
            },function(){
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "/hriceSite/user/login-out",
                    data: {},
                    success: function (res) {
                        console.log(res);
                        if (res.code == 0) {
                            layer.msg(res.message);
                            location.href="../index/index.html";
                            
                        }
                    },
                    error : function() {
                        console.log("异常");
                    }
                });  
        });
        
        
    });
});

