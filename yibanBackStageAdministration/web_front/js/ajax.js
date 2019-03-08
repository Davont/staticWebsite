$.cookie('username', "123"); 
$.cookie('password', "123"); 
$.ajax({  
    url: "http://180.209.98.88:8488/c/login", 
    type: 'POST',  
    data: {
        //'community_name':"456",
        //' head_url':objUrl1,
        'username':'123',
        'password':'123',
    },  
    
    dataType: 'json',  
    success:function(a,b,c){
        console.log("登陆成功！")
    },
    error:function(request, errorType, errorMessage) {
        console.log(request);
    }
})
$.ajax({
    url:'http://180.209.98.88:8488/c',
    type:'get',
    // 允许携带证书
    xhrFields: {
         withCredentials:true
    },
　　　　// 允许跨域
    crossDomain:true,
    dataType:'json',
    success:function(data){
        console.log(data);
        console.log(data.data.departmentList.name)
        $("#msImgUrl").attr('src',data.data.community.headUrl);
        $("#msName").text(data.data.community.name);
        $("#msIntr").text(data.data.community.introduction);
        var msBeforeAct="<li class=\"list-group-item\">"+data.data.community.acticityUrl+"</li>";
        $("#msBeforeAct").after(msBeforeAct);
        if(!data.data.community.enrolled){
            $("#enrolled").attr('checked','checked');
        }
        $(document).on('click','#clubSubmit',function () {
            for(var i=1;i<=data.data.community.departmentNumber;i++){
                $("#department_"+i+"_name").attr('value',data.data.departmentList[i-1].name);
                $("#department_"+i+"_url").text(data.data.departmentList[i-1].departmentUrl);
                $("#minister_"+i+"_name").attr('value',data.data.departmentList[i-1].ministerName);
                $("#minister_"+i+"_phone").attr('value',data.data.departmentList[i-1].ministerPhone);
            }
        });
        
        $("#head_name").attr('value',data.data.contact.headName);
        $("#head_qq").attr('value',data.data.contact.headQq);
        $("#head_email").attr('value',data.data.contact.headEmail);
        $("#community_weibo").attr('value',data.data.contact.communityWeibo);
        $("#community_qq").attr('value',data.data.contact.communityQq);
        $("#img1").attr('src',data.data.contact.communityQqUrl);
        $("#community_wechat").attr('value',data.data.contact.communityWechat);
        $("#img2").attr('src',data.data.contact.communityWechatUrl);
        //$("#belong option[value="+data.data.community.belong+"]").attr('selected',"selected");
        $("#activity-url").attr('value',data.data.community.acticityUrl);

        $("#img0").attr('src',data.data.community.headUrl);
        $("#community-name").attr('value',data.data.community.name);
        $("#belong option[value="+data.data.community.belong+"]").attr('selected',"selected");
        $("#teacher").attr('value',data.data.community.teacher);
        $("#introduction").text(data.data.community.introduction);
        $("#department_number option[value="+data.data.community.departmentNumber+"]").attr('selected',"selected");
        for(let i=0;i<data.data.departmentList.length;i++){
            var guild="<li role=\"presentation\"><a href=\"#setting"+i+"\" aria-controls=\"setting"+i+"\" role=\"tab\" data-toggle=\"tab\">"+data.data.departmentList[i].name+"</a></li>";
            var target="<div role=\"tabpanel\" class=\"tab-pane\" id=\"setting"+i+"\">"
            +"<div class=\"col-xs-12 t-center\">"
            +"<span class=\"font-15\">"+data.data.departmentList[i].name+"</span>"
            +"</div>"
            +"<div class=\"panel panel-primary col-xs-12 height\">"
            +"<div class=\"panel-body\">"
            +data.data.departmentList[i].departmentUrl
            +"</div>"
            +"</div>"
            +"</div>"; 
            $("#ms-gflag").after(guild);
            $("#target").after(target);
        }
    }
});