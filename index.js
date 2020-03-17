'use strict';

$(function(){
    var $username = $('#username'), 
        $phone= $('#phone'),
        $psd = $('#psd'),
        $yzm = $('#yzm'),
        $usermsg = $('#username-msg'),
        $phonemsg = $('#phone-msg'),
        $psdmsg = $('#psd-msg'),
        $yzmsg = $('#yz-msg');
    var users=false,
        phones=false,
        psds=false,
        yzs=false;

    $phone.blur(function () { 
        var phonevef = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(phonevef.test($phone.val()) || $phone.val()===''){            
            $phonemsg.html('');
            phones=true;
        }else{           
            $phonemsg.html('手机号码格式不正确');
            phones=false;
        }       
    });

    $username.blur(function () { 
        var uservef = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,}$/;
        var userres = /^\d+$/g;
        if((uservef.test($username.val()) && !userres.test($username.val())) || $username.val()===''){
            $usermsg.html('');
            users=true;
        }else{
            $usermsg.html('用户名仅支持中英文，数字和下划线且不能为纯数字');
            users=false;
        }
        
    });
   
    $psd.blur(function () { 
        var psdvef = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,14}$/;
        console.log('ddddddddd');
        if(psdvef.test($psd.val()) || $psd.val()===''){
            $psdmsg.html('');
            psds=true;
        }else{
            $psdmsg.html('密码设置不符合要求');
            psds=false;
        }
        
    });
    
   
    $yzm.click(function(){      
        var count = 60;
        $yzmsg.html('');
        yzs=true
        $yzm.attr('disabled','disabled');
        $yzm.css({color:"#252424",border:"1px solid #e2dada"}); 
        var timer = setInterval(function(){
            count--;
            if(count>=0){
                $yzm.val('重发验证'+'（'+count+'s）');
            }else{
                clearInterval(timer);
                $yzm.val('获取验证码');
                $yzm.removeAttr("disabled");
                $yzmsg.html('请求失败!');
            }
        },1000);

    });

    $button.click(function () {
        if (!(users && phones && psds && yzs)) {
            console.log('注册失败');
        } else {
            console.log('注册成功');
        }
    });

});
