// zTree结构
// var str =
// 	"{\"code\":\"SUCCESS\",\"success\":true,\"message\":\"操作成功\",\"list\":[{\"id\":1,\"name\":\"潢川县中心仓\",\"warehouseId\":0,\"principal\":\"姚明\",\"telephone\":\"18800001111\",\"landline\":\"0376-88888888\",\"level\":3,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"工业大道100号\",\"lng\":\"115.058212\",\"lat\":\"32.137557\",\"remarks\":null},{\"id\":2,\"name\":\"白店乡服务仓\",\"warehouseId\":1,\"principal\":\"韦德\",\"telephone\":\"18800001112\",\"landline\":\"0376-99999999\",\"level\":2,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"白店乡镇政府东100米\",\"lng\":\"115.084021\",\"lat\":\"32.061612\",\"remarks\":null},{\"id\":3,\"name\":\"卜塔集镇服务仓\",\"warehouseId\":1,\"principal\":\"王涛\",\"telephone\":\"18800001113\",\"landline\":\"0376-12345678\",\"level\":2,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"卜塔集镇镇政府南500米\",\"lng\":\"115.016272\",\"lat\":\"32.055158\",\"remarks\":null},{\"id\":4,\"name\":\"张集乡服务仓\",\"warehouseId\":1,\"principal\":\"欧文\",\"telephone\":\"18800001114\",\"landline\":null,\"level\":2,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":5,\"name\":\"白店村服务点\",\"warehouseId\":2,\"principal\":\"白婷\",\"telephone\":\"13309098978\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"白店村生活超市\",\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":6,\"name\":\"陈岗村服务点\",\"warehouseId\":2,\"principal\":\"王炮\",\"telephone\":\"18800002222\",\"landline\":\"0376-00000000\",\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"松岗101号\",\"lng\":\"115.161301\",\"lat\":\"31.924411\",\"remarks\":null},{\"id\":7,\"name\":\"高庄村服务点\",\"warehouseId\":2,\"principal\":\"邹龙\",\"telephone\":\"18798099090\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"艾庙村生活超市\",\"lng\":\"\",\"lat\":\"\",\"remarks\":null},{\"id\":8,\"name\":\"鳌鱼村服务点\",\"warehouseId\":3,\"principal\":\"詹姆斯\",\"telephone\":\"18800001115\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":9,\"name\":\"六里村服务点\",\"warehouseId\":3,\"principal\":\"波什\",\"telephone\":\"18800001116\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":10,\"name\":\"马湖村服务点\",\"warehouseId\":3,\"principal\":\"保罗\",\"telephone\":\"18800001117\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":11,\"name\":\"李寨村服务点\",\"warehouseId\":4,\"principal\":\"哈登\",\"telephone\":\"18800001118\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":12,\"name\":\"霸王台服务点\",\"warehouseId\":4,\"principal\":\"库里\",\"telephone\":\"18800001119\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":13,\"name\":\"冯岗村服务点\",\"warehouseId\":4,\"principal\":\"威斯特\",\"telephone\":\"18800001110\",\"landline\":null,\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":null,\"lng\":null,\"lat\":null,\"remarks\":null},{\"id\":15,\"name\":\"泉州村服务点\",\"warehouseId\":4,\"principal\":\"安东尼\",\"telephone\":\"188000010121\",\"landline\":\"0376-823434512\",\"level\":1,\"active\":\"Y\",\"delFlag\":\"N\",\"address\":\"丰海路23号\",\"lng\":\"118.692218\",\"lat\":\"24.871035\",\"remarks\":null}]}"
// var jsonobject = JSON.parse(str); //可以将json字符串转换成json对象
// var jsonarray = jsonobject.list; //从jsonobject获取operations（operations是jsonArray）
var zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）

var setting = {
    view: {
        showIcon: false,
        showLine: false
    },
    data: {

        simpleData: {
            enable: true, //如果为true，可以直接把从数据库中得到的List集合自动转换为Array格式。而不必转换为json传递
            idKey: "id", //节点的id
            pIdKey: "warehouseId", //节点的父节点id
            rootPId: null
        }
    }
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）

//   var nodes = [
// {id:1, pId:0, name: "父节点1"},
// {id:11, pId:1, name: "子节点1"},
// {id:12, pId:1, name: "子节点2"}
// ];


// $(document).ready(function () {
    
// });


// 百度地图API功能
var map = new BMap.Map("allmap"); //指向展示的id标签
map.centerAndZoom("潢川", 12); //参数1：以 ** 为中心 ；参数2：放大级别，数值越大约高
map.enableScrollWheelZoom(true); //设置 滚轮放大，拖拽

var pointsView = []; //存放点的数组
//页面加载完成事件
window.onload = function () {

    initData();
    // 写ajxa请求数据
    // var coords = [{
    // 		level: "1", //等级
    // 		lng: "115.054449", //经度
    // 		lat: "32.13802", //纬度
    // 		name: "卜塔集镇服务仓", //名称
    // 		address: "工业大道99号" //地址

    // 	},
    // 	{
    // 		level: "1",
    // 		lng: "115.154449",
    // 		lat: "32.03802",
    // 		name: "白店乡服务仓",
    // 		address: "工业大道100号"
    // 	},
    // 	{
    // 		level: "3",
    // 		lng: "115.054449",
    // 		lat: null,
    // 		name: "高庄村服务点",
    // 		address: "工业大道101号"
    // 	},
    // 	{
    // 		level: "2",
    // 		lng: "115.254449",
    // 		lat: "32.03802",
    // 		name: "张集乡服务仓",
    // 		address: "工业大道102号"
    // 	},
    // 	{
    // 		level: "3",
    // 		lng: "119.054449",
    // 		lat: "32.23802",
    // 		name: "潢川县中心仓",
    // 		address: "工业大道103号"
    // 	}
    // ];
    // show(coords);
}
    function show(coords) {
        for (var i = 0; i < coords.length; i++) {
            addPoint(coords[i]); //执行注入方法
        }
        // console.log(1,pointsView);
        // map.setViewport(pointsView); //将所有的点放置在最佳视野内
        // setTimeout(function() {map.setViewport(pointsView);},200);
    }

    //给点创建标注
    function addPoint(record) {
        var lng = record.lng; //经度
        var lat = record.lat; //纬度
        var type = record.level; //获得等级
        var name = record.name; //名称
        var address = record.address; //地址
        if (lng == null || lat == null || type == null || lng == "" || lat == "" || type == "") {
            //alert("异常数据："+JSON.stringify(record));
            return false;
        }
        var point = new BMap.Point(lng, lat); //创建点
        var myIcon = new BMap.Icon(choosePicture(type), new BMap.Size(40, 40)); //图标
        var marker = new BMap.Marker(point, {
            icon: myIcon
        }); // 创建标注
        marker.disableMassClear(); //标注初始化 清除之前的
        map.addOverlay(marker); //添加标注
        pointsView.push(point) //将点存放入数组中
        addInfoWindow(marker, name, address); //添加标签信息
        function addInfoWindow(marker, name, address) {
            var title = '<div style="font-weight:bold;color:#ce5d48;font-size:14px">' + "仓库详情" + '</div>';
            var html = [];
            html.push(
                '<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>'
            );
            html.push('<tr>');
            html.push(
                '<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">名称：</td>'
            );
            html.push('<td style="vertical-align:top;line-height:16px">' + name + ' </td>');
            html.push('</tr>');
            html.push('<tr>');
            html.push(
                '<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址：</td>'
            );
            html.push('<td style="vertical-align:top;line-height:16px">' + address + ' </td>');
            html.push('</tr>');
            html.push('</tbody></table>');
            var infoWindow = new BMap.InfoWindow(html.join(""), {
                title: title,
                width: 200
            });
            var openInfoWinFun = function () {
                marker.openInfoWindow(infoWindow);
                map.centerAndZoom(marker.getPosition(), 13);
            }
            marker.addEventListener("click", openInfoWinFun);
        }
    }
    var i = 0 ;
    //根据类型选择图片
    function choosePicture(type) {
        switch (type) {
            case 1:
                return "../../img/circle.png"; //圆形
                break;
            case 2:
                return "../../img/triangle.png"; //三角形
                break;
            case 3:
                return "../../img/five.png"; //五角形
                break;
            default:
                return "../../img/circle.png"; //圆形
        }
    }


function initData() {
    // 掉接口
    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        headers: {
            "token": "365C4B4D935BFB8280CFE10577C952712",
        },
        url: "http://58.221.6.82:900/warehouse/findAll",
        success: function (res) {
            var str = JSON.stringify(res);
            var success = res.success;
            var message = res.message;
            var data = res.data;
            show(data);
            zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, data);
            // for (var i in data) {
            // 	var obj = data[i];
            // 	array.push(obj);
            // }

            // var id = data.id;
            // var name = data.name;
            // var code = data.code;
            // var warehouseId = data.warehouseId;
            // var principal = data.principal;
            // var telephone = data.telephone;
            // var landline = data.landline;
            // var level = data.level;
            // var active = data.active;
            // var delFlag = data.delFlag;
            // var address = data.address;
            // var lng = data.lng;
            // var lat = data.lat;
            // var remarks = data.remarks;

        },
        error: function () {
            console.log("这个请求错误");
        }
    });
}