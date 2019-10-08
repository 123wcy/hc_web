function pageFunction(id){
    window.location.href = "page.html?id="+id;
}
var size = 5;
var page = 1;

$(function () {

    var Main = {
        methods: {
            handleSizeChange(val) {
                size = val;
                initdata();
                // alert('每页'+size+' 条');
            },
            handleCurrentChange(val) {
                page = val;
                initdata();
                // alert('当前页: '+page);
            }
        },
        data() {
            return {
                currentPage: page,
                total: initdata(),
                size: size,
                sizes: [5, 10, 15, 20]
            };
        }
    }
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')

    // EasyAjax.ajax_Post_Josn({
    // 	url:'news/queryPageList',
    // 	data:JOSN.stringify(baseValue)
    // },function(res){
    // 	alert(res);
    // 	monitor.monitorObj.dataList=res.summarys;
    // 	console.log(monitorObj.dataList=res.summarys);
    // })
})

function initdata() {

    var total = 0;
    var baseValue = {
        pageSize: size,
        pageNum: page
    }
    // alert(JSON.stringify(baseValue));

    $.ajax({
        type: "POST",
        async: false,
        // jsonp:"callback",
        dataType: "json",
        contentType: "application/json",
        headers: {
            "token": "11577CEB4B73E14264725F4DA4FE3732ED",
        },
        url: "http://58.221.6.82:900/news/queryPageList",
        data: JSON.stringify(baseValue),
        success: function (res) {
            // var str = JSON.stringify(res);
            var success = res.success;
            var message = res.message;
            total = res.data.total;
            var list = res.data.list;
            var result = "";
            $('#list_page').empty();
            for (var i in list) {
                var obj = list[i]; //jsonarray数组第i个jsonobject
                var id = obj.id; //jsonarray数组第i个jsonobject里的id
                var title = obj.title;
                var pictureId = obj.pictureId;
                var information = obj.information;
                var time = obj.time;
                var delFlag = obj.delFlag;
                var ymd = dateForm(time).split(" ")[0];
                var hms = dateForm(time).split(" ")[1];
                result +=
                    '<li class="clearfix" onclick="pageFunction('+id+')"><img src="http://images.wlynj.com:8090/group1/M00/00/0F/rBB3OFysEMSAYzi9AABGMN7flyw043.jpg" alt="" class="fl" width="210" height="176"><div class="click-dec fl ml50"> <div class="clearfix"><h1 class="fl">' +
                    title + '</h1><span class="fr">' + ymd + " " + hms +
                    '</span></div>  	<div class="news-info"><p>' + information.slice(0, 350) +
                    '</p></div></div></li>';
            }
            $('#list_page').append(result);
        },
        error: function () {
            console.log("这个请求错误");
        }
    });
    return total;
}

function dateForm(time) { //时间转换
    var unixTimestamp = new Date(time);
    commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}
Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" +
        this.getMinutes() + ":" + this.getSeconds();
};