$('.form-btn').on('click', function () {
    var formbtn = $("#form-btn").val();
    window.location.href = "queryMail.html?expressNumber=" + formbtn;
});
$('.info-list ul li').click(function () {
    window.location.href = "sourceInformation.html";
});


$(function () {

    initHyxx();
    initXwxx();

})

function initHyxx() {

    var baseValue = {
        pageSize: 3,
        pageNum: 1
    }
	EasyAjax.ajax_Post_Json({
		url: 'sources/queryPageList',
		data: JSON.stringify(baseValue)
	},function(res){
		if(res.success === true){
			var total = res.data.total;
            var list = res.data.list;
            var result = "";
            $('#info-list').empty();
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
                    '<li class="clearfix" onclick="sourceFunction('+id+')"><div class="info-dec"><label>货源信息</label><i class="triangle-right"></i><span>' +
                    goodsWeight + '/' + goodsVolume + '/' + goodsNumber + ',' + goodsType + '/' +
                    goodsName +
                    '</span>	</div><div class="info-dec"><label>发货联系人</label><i class="triangle-right"></i><span>'
                    +senderName + '/' + senderMobilephone +
                    '</span></div><div class="info-dec"><label>收获地址</label><i class="triangle-right"></i><span>' +
                    recipientAddress + recipientStreet + '</span></div><p class="fr">' + createtime +
                    '</p></li>';
            }
            $('#info-list').append(result);
		}
	})
}

function initXwxx() {

    var baseValue = {
        pageSize: 2,
        pageNum: 1
    }
	EasyAjax.ajax_Post_Json({
		url: 'news/queryPageList',
		data: JSON.stringify(baseValue)
	},function(res){
		if(res.success === true){
			var total = res.data.total;
            var list = res.data.list;
            var result = "";
            $('#news_list').empty();
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
                result += '<li class="clearfix"><img src="http://images.wlynj.com:8090/group1/M00/00/0F/rBB3OFysEMSAYzi9AABGMN7flyw043.jpg" alt="" class="fl" width="210" height="176"><div class="click-dec fr"><h1>'+title+'</h1><a onclick="pageFunction('+id+')">[点击详情]</a></div></li>';
            }
            $('#news-list').append(result);
		}
	})
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
function pageFunction(id){
    window.location.href = "page.html?id="+id;
};
function sourceFunction(id){
    window.location.href = "sourceInformation.html?id="+id;
};