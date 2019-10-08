"use strict";

var app = new Vue({
  el: '#app',
  data: {
    loading: false,
    expressNumber: "",
    startlng: '',
    startlat: '',
    endlng: '',
    endlat: ''
  },
  created: function created() {
    // var Request = new Object();
    // // var jsnumber=$("#jsnumber").val();
    // if (url.indexOf("?") != -1) {
    //     var str = url.substr(1) //去掉?号
    //     strs = str.split("&");
    //     for (var i = 0; i < strs.length; i++) {
    //         Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    //     }
    // }
    this.expressNumber = window.location.href.split('expressNumber=')[1]; // console.log(this.expressNumber)
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this2 = this;

      var _this = this;

      var u = '';
      var url = location.search;

      if (url.indexOf("Warehouse") != -1) {
        u = '/goods/findDetailsByExpressNumber?expressNumber=';
      } else if (url.indexOf("transportA") != -1 || url.indexOf("SigningA") != -1) {
        u = '/transport/findDhDdInfos/';
      } else if (url.indexOf("transportS") != -1 || url.indexOf("SigningS") != -1) {
        u = '/transport/findFhDdInfos/';
      } else {
        u = '/transport/findFhDdInfos/';
      }

      $httpl(u + _this.expressNumber).then(function (res) {
        if (res.data.code == "200") {
          var success = res.success;
          var message = res.message;
          var data = res.data.data;

          if (url.indexOf("Warehouse") != -1) {
            var record = data.goods;
            var list = data.operations;
          } else {
            var record = data.record;
            var list = data.list;
          } // var record = data.record;


          var id = record.id;
          var expressNumber = record.expressNumber;
          var expressCompany = record.expressCompany;
          var goodsType = record.goodsType;
          var goodsName = record.goodsName;
          var goodsWeight = record.goodsWeight;
          var goodsVolume = record.goodsVolume;
          var goodsNumber = record.goodsNumber;
          var senderAddress = record.senderAddress;
          var senderStreet = record.senderStreet;
          var senderName = record.senderName;
          var senderMobilephone = record.senderMobilephone;
          var recipientAddress = record.recipientAddress;
          var recipientStreet = record.recipientStreet;
          var recipientName = record.recipientName;
          var recipientMobilephone = record.recipientMobilephone;
          var mailHtml = '<div class="mail-single clearfix">' + '<p class="fl">快递单号：<span>' + expressNumber + '</span></p>' + '<p class="fr">快递公司：<span>' + expressCompany + '</span></p>' + '</div>' + '<div class="mail-single mt10 clearfix">' + '<p class="fl">货物类型：<span>' + goodsType + '</span></p>' + '<p class="fr">货物名称：<span>' + goodsName + '</span></p>' + '</div>' + '<div class="mail-single mt10 clearfix">' + '<p class="fl">重量：<span>' + goodsWeight + '</span>kg</p>' + '<p class="fl ml40">体积：<span>' + goodsVolume + '</span>m³</p>' + '<p class="fr">件数：<span>' + goodsNumber + '</span>件</p>' + '</div>' + '<div class="mail-single mt10 clearfix">' + '<p class="fl">发货信息：<span>' + senderAddress + '&nbsp;&nbsp;' + senderStreet + '&nbsp;&nbsp;' + senderName + '&nbsp;&nbsp;' + senderMobilephone + '</span></p>' + '</div>' + '<div class="mail-single mt10 clearfix">' + '<p class="fl">收获信息：<span>' + recipientAddress + '&nbsp;&nbsp;' + recipientStreet + '&nbsp;&nbsp;' + recipientName + '&nbsp;&nbsp;' + recipientMobilephone + '</span></p>' + '</div>';
          $('#mailInformation').append(mailHtml);

          if (list.length) {
            _this.startlng = Number(list[0].lng);
            _this.startlat = Number(list[0].lat);
            _this.endlng = Number(list[list.length - 1].lng);
            _this.endlat = Number(list[list.length - 1].lat);
          } // alert(JSON.stringify(data));


          var result = "";
          $('#wlInformation').empty();

          for (var i in list) {
            var obj = list[i];
            var tab = obj.tab;
            var week = obj.week;
            var lng = obj.lng;
            var type = obj.type; // var id = obj.id;
            // var expressNumber = obj.expressNumber;

            var time = obj.time;
            var lat = obj.lat;
            var warehouseId = obj.warehouseId; // var ymd = _this.dateForm(time).split(" ")[0];
            // var hms = _this.dateForm(time).split(" ")[1];

            result += '<div class="mail-single mt10 clearfix"><p class="clearfix"><b class="fl" style="width:150px;">' + time + '</b><span class="fl" style="width:350px;">' + tab + '</span></p></div>';
          }

          $('#wlInformation').append(result);
          var map = new BMap.Map("vehicleMap");
          map.enableScrollWheelZoom(true); //设置 滚轮放大，拖拽

          map.centerAndZoom("潢川", 14);
          var walking = new BMap.WalkingRoute(map, {
            renderOptions: {
              map: map,
              autoViewport: true
            }
          });
          var pt = new BMap.Point(115.054449, 32.13802);
          var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300, 157));
          var marker2 = new BMap.Marker(pt, {
            icon: myIcon
          }); // 创建标注

          map.addOverlay(marker2); // 将标注添加到地图中

          var start = new BMap.Point(_this.startlng, _this.startlat);
          var end = new BMap.Point(_this.endlng, _this.endlat);
          walking.search(start, end);
        } else {
          _this2.$message(res.data.message);
        }
      }).catch(function (res) {
        _this2.$message.error(res);
      });
    }
  }
});