function sourceFunction(id){
    window.location.href = "sourceInformation.html?id="+id;
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

})

function initdata() {

    var total = 0;
    var baseValue = {
        pageSize: size,
        pageNum: page
    }
    $.ajax({
        type: "POST",
        dataType:"json",
        contentType: "application/json",
        headers:{
                "token":"11577CEB4B73E14264725F4DA4FE3732ED",
            },
        url: "http://58.221.6.82:900/sources/queryPageList",
        data: JSON.stringify(baseValue),
        success: function (res) {
            var success = res.success;
            var message = res.message;
            total = res.data.total;
            var list = res.data.list;
            var result = "";
            $('#list_page').empty();
            for (var i in list) {
                var obj = list[i]; //jsonarray数组第i个jsonobject
                var id = obj.id; //jsonarray数组第i个jsonobject里的id
                var senderName = obj.senderName;
                var senderMobilephone = obj.senderMobilephone;
                var senderCompany = obj.senderCompany;
                var senderPhone = obj.senderPhone;
                var senderAddress = obj.senderAddress;
                var senderStreet = obj.senderStreet;

                var recipientAddress = obj.recipientAddress;
                var recipientStreet = obj.recipientStreet;

                var goodsWeight = obj.goodsWeight;
                var goodsName = obj.goodsName;
                var goodsNumber = obj.goodsNumber;
                var goodsVolume = obj.goodsVolume;
                var goodsType = obj.goodsType;
                var goodsMoney = obj.goodsMoney;
                var remarks = obj.remarks;
                var createtime = obj.createtime;
                result +=
                    '<li class="clearfix" onclick="sourceFunction('+id+')"><div class="info-dec fl"><label>货源信息</label><i class="triangle-right"></i><span>' +
                    goodsWeight + '/' + goodsVolume + '/' + goodsNumber + ',' + goodsType + '/' + goodsName +
                    '</span>	</div><div class="info-dec fl ml10"><label>发货联系人</label><i class="triangle-right"></i><span>'
                    +senderName + '/' + senderMobilephone +
                    '</span></div><div class="info-dec fl ml10"><label>收获地址</label><i class="triangle-right"></i><span>' +
                    recipientAddress + recipientStreet + '</span></div><p class="fr">' + createtime + '</p></li>';
            }
            $('#list_page').append(result);
        },
        error: function () {
            console.log("这个请求错误");
        }
    });
    return total;
}

$('.info-list ul li').click(function () {
    window.location.href = "sourceInformation.html";
});