$(".login-btn").click(function(){
    var username=$(".username").val();
    if (username=="") {
        alert("请输入用户名");
        return;
    }
    var password=$(".password").val();
    if (password=="") {
        alert("请输入密码");
        return;
    }
    var list = {
        "employee_id":username,
        "password":password
    };
    // alert(list);
    $.ajax({
        type:"POST",
        // dataType: "json",
        jsonp:"callback",
        contentType: "application/json",
        url:"http://58.221.6.82:900/user/accountLogin",
        data:JSON.stringify(list),
    
        success:function(data){
            alert("数据请求成功啦！");
            window.location.href="index/iframe.html"
        },
        error:function(){
            console.log("这个请求错误");
        }
    });
})