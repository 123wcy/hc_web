$(function () {
    
    var url = location.search;
    var Request = new Object();
    // var jsnumber=$("#jsnumber").val();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1) //去掉?号
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }

    var id = Request["id"];

    var baseValue = {
        id: id
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        headers: {
            "token": "11577CEB4B73E14264725F4DA4FE3732ED",
        },
        url: "http://58.221.6.82:900/news/findOneById?id="+id,
        // data: JSON.stringify(baseValue),
        success: function (res) {
            var str = JSON.stringify(res);
            // alert(res)
            var success = res.success;
            var message = res.message;
            var data = res.data;
            var title = data.title;
            var pictureId = data.pictureId;
            var information = data.information;
            var time = data.time;
            var result = "";
            $('#page-news').empty();
            result +=
                '<img src="http://images.wlynj.com:8090/group1/M00/00/0F/rBB3OFysEMSAYzi9AABGMN7flyw043.jpg" alt="" width="437" height="322"><h1>' +
                title + '</h1><div class="content"><p>' + information + '</p></div>'

            $('#page-news').append(result);
        },
        error: function () {
            console.log("这个请求错误");
        }
    });
})

function dateForm(time) { //时间转换
    var unixTimestamp = new Date(time);
    commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}
Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" +
        this.getMinutes() + ":" + this.getSeconds();
};