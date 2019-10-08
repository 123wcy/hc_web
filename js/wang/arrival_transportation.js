"use strict";

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      mainShow: true,
      detailY: false,
      activeName: 'first',
      //初始化tab标签
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      searchListAll: [],
      searchListArrival: [{
        types: 'input',
        label: '运单号 :',
        placeholder: '请输入运单号',
        value: 'waybillId'
      }, {
        types: 'input',
        label: '车牌号 :',
        placeholder: '请输入车牌号',
        value: 'plateNumber'
      }, {
        types: 'input',
        label: '司机 :',
        placeholder: '请输入司机',
        value: 'driverName'
      }, {
        types: 'input',
        label: '线路 :',
        placeholder: '请输入线路',
        value: 'scope'
      }, {
        types: 'select',
        label: '运输状态 :',
        placeholder: '请选择运输状态',
        value: 'state',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '待运',
          value: '1'
        }, {
          label: '运输中',
          value: '2'
        }, {
          label: '已完成',
          value: '3'
        }]
      }, {
        types: 'datepicker',
        label: '创建时间 :',
        value: 'creatTime'
      }, {
        types: 'datepicker',
        label: '发车时间 :',
        value: 'startTime'
      }, {
        types: 'datepicker',
        label: '完成时间 :',
        value: 'endTime'
      }],
      //到货库
      totalListAll: [],
      arrivalSList: [{
        types: 'select',
        label: '是否打包 :',
        placeholder: '请选择运输状态',
        value: 'isPackage',
        options: [{
          label: '未打包',
          value: '1'
        }, {
          label: '已打包',
          value: '2'
        }]
      }, {
        types: 'select',
        label: '快递名称 :',
        placeholder: '请选择车辆类型',
        value: 'expressCompany',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '圆通快递',
          value: '1'
        }, {
          label: '申通快递',
          value: '2'
        }, {
          label: '韵达快递',
          value: '3'
        }, {
          label: '中通快递',
          value: '4'
        }, {
          label: '百世汇通',
          value: '5'
        }]
      }, {
        types: 'input',
        label: '单号 :',
        placeholder: '请输入快递单号',
        value: 'expressNumber'
      }, {
        types: 'datepicker',
        label: '装货时间 :',
        value: 'loadingTime'
      }],
      deliverySList: [{
        types: 'select',
        label: '快递名称 :',
        placeholder: '请选择车辆类型',
        value: 'expressCompany',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '圆通快递',
          value: '1'
        }, {
          label: '申通快递',
          value: '2'
        }, {
          label: '韵达快递',
          value: '3'
        }, {
          label: '中通快递',
          value: '4'
        }, {
          label: '百世汇通',
          value: '5'
        }]
      }, {
        types: 'input',
        label: '单号 :',
        placeholder: '请输入快递单号',
        value: 'expressNumber'
      }, {
        types: 'datepicker',
        label: '装货时间 :',
        value: 'loadingTime'
      }],
      searchTotalList: {
        isPackage: '1',
        expressCompany: '',
        expressNumber: '',
        loadingTime1: '',
        loadingTime2: '',
        status: '1' //是否卸下

      },
      expandKeys: [],
      loading: true,
      detaillist: [],
      allcheckbox: false,
      //全选按钮
      selectionsIds: [],
      //已选择项
      page: 1,
      //显示的是哪一页
      pageSize: 10,
      //每一页显示的数据条数
      total: 0,
      //记录总数
      pageS: 1,
      //显示的是哪一页
      pageSizeS: 10,
      //每一页显示的数据条数
      totalS: 0,
      //记录总数
      pageZC: 1,
      //装车显示的是哪一页
      pageSizeZC: 10,
      //每一页显示的数据条数
      totalZC: 0,
      //记录总数
      findTransportDhList: [],
      //到货列表
      findTransportFhList: [],
      //发货列表
      findDhInfosList: [],
      //数目详情
      ticketlist: [],
      recordList: [],
      //装车清单
      listList: [],
      //装车清单
      TotalhList: [],
      //装车总数
      idd: 0,
      state: true,
      searchList: {
        plateNumber: '',
        //车牌号
        waybillId: '',
        //运单号
        driverName: '',
        //	司机姓名
        scope: '',
        //	线路
        state: '',
        //	状态
        creatTime1: '',
        //创建时间开始
        creatTime2: '',
        //创建时间结束
        startTime1: '',
        //发车时间开始
        startTime2: '',
        //发车时间结束
        endTime1: '',
        //完成时间开始
        endTime2: '',
        //完成时间结束
        creatTime: '',
        startTime: '',
        endTime: '',
        pageNum: '1',
        pageSize: '10'
      },
      formLabelWidthl: '42%',
      DepartureDialog: false,
      ArrivalDialog: false,
      LoadingDialog: false,
      WayBillDialog: false,
      isPackagea: "1",
      expands: [],
      getRowKeys: function getRowKeys(row) {
        return row.id;
      },
      t: '',
      trow: {}
    };
  },
  created: function created() {
    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "H+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒

      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }

      return fmt;
    };
  },
  mounted: function mounted() {
    this.search();
    $("#imgcodew").JsBarcode("JJ");
  },
  computed: {
    creatTime: {
      get: function get() {
        if (this.searchList.creatTime1 && this.searchList.creatTime2) {
          return [this.searchList.creatTime1, this.searchList.creatTime2];
        } else {
          return [];
        }
      },
      set: function set(v) {
        console.log(v);
        this.searchList.creatTime1 = v[0].Format("yyyy-MM-dd");
        this.searchList.creatTime2 = v[1].Format("yyyy-MM-dd");
      }
    },
    startTime: {
      get: function get() {
        if (this.searchList.startTime1 && this.searchList.startTime2) {
          return [this.searchList.startTime1, this.searchList.startTime2];
        } else {
          return [];
        }
      },
      set: function set(v) {
        console.log(v); // console.log(v)

        this.searchList.startTime1 = v[0].Format("yyyy-MM-dd");
        this.searchList.startTime2 = v[1].Format("yyyy-MM-dd");
      }
    },
    endTime: {
      get: function get() {
        if (this.searchList.endTime1 && this.searchList.endTime2) {
          return [this.searchList.endTime1, this.searchList.endTime2];
        } else {
          return [];
        }
      },
      set: function set(v) {
        // console.log(v)
        this.searchList.endTime1 = v[0].Format("yyyy-MM-dd");
        this.searchList.endTime2 = v[1].Format("yyyy-MM-dd");
      }
    },
    loadingTime: {
      get: function get() {
        if (this.searchTotalList.loadingTime1 && this.searchTotalList.loadingTime2) {
          return [this.searchTotalList.loadingTime1, this.searchTotalList.loadingTime2];
        } else {
          return [];
        }
      },
      set: function set(v) {
        // console.log(v)
        this.searchTotalList.loadingTime1 = v[0].Format("yyyy-MM-dd");
        this.searchTotalList.loadingTime2 = v[1].Format("yyyy-MM-dd");
      }
    }
  },
  watch: {},
  methods: {
    clickTable: function clickTable(row, column, cell, event) {
      //展开事件日志列表
      if (cell.cellIndex != 3 && cell.cellIndex != 10) {
        this.$refs.refTable.toggleRowExpansion(row);
      }

      this.getnoTicketReason("", row.businessType);
    },
    handleSelectionChanges: function handleSelectionChanges(val) {
      console.log(val);
      this.selectionsIds = val;
    },
    expandSelect: function expandSelect(row, expandedRows) {
      if (this.expandKeys.indexOf(row.id) >= 0) {
        this.expandKeys.shift();
        return;
      }

      var _this = this;

      _this.loading = true;
      _this.detaillist = [];
      _this.t = row.packageNumber;
      _this.trow = row;

      _this.detailSearch(row, row.packageNumber);

      if (expandedRows.length > 1) {
        //只展开当前选项
        expandedRows.shift();
      }
    },
    detailSearch: function detailSearch(row, packageNumber) {
      var _this2 = this;

      $httpl('/transport/findGoodsByPackageNumber/' + packageNumber).then(function (res) {
        if (res.data.code == "200") {
          _this2.detaillist = res.data.data;

          _this2.detaillist.map(function (val) {
            val.goodsType = goodsType(val.goodsType);
            val.unusual = unusual(val.unusual);
          });

          _this2.loading = false;

          _this2.expandKeys.shift();

          _this2.expandKeys.push(row.id);
        } else {
          _this2.warning(res.data.message);
        }
      }).catch(function (err) {
        _this2.error(err);
      });
    },
    // tab标签页点击切换触发
    handleClick: function handleClick(tab, event) {
      var _this = this;

      var d = 3;
      var url = window.location.href;
      var a = url.indexOf('arrival');

      if (a > -1) {
        d = 3;
      } else {
        d = 2;
      }

      if (this.activeName == "first") {
        _this.totalListAll[d].label = '装货时间 :';
        _this.searchTotalList.status = '1'; //未卸下

        _this.searchBtnS();
      } else if (this.activeName == "second") {
        _this.totalListAll[d].label = '卸车时间 :';
        _this.searchTotalList.status = '2'; //已卸下

        _this.searchBtnS();
      }
    },
    // 重置
    reset: function reset() {
      this.searchTotalList = {
        isPackage: '1',
        expressCompany: '',
        expressNumber: '',
        loadingTime1: '',
        loadingTime2: '',
        status: '1' //未卸下

      };
      this.activeName = 'first';
      this.searchList = {
        plateNumber: '',
        //车牌号
        waybillId: '',
        //运单号
        driverName: '',
        //	司机姓名
        scope: '',
        //	线路
        state: '',
        //	状态
        creatTime1: '',
        //创建时间开始
        creatTime2: '',
        //创建时间结束
        startTime1: '',
        //发车时间开始
        startTime2: '',
        //发车时间结束
        endTime1: '',
        //完成时间开始
        endTime2: '',
        //完成时间结束
        creatTime: '',
        startTime: '',
        endTime: '',
        pageNum: '1',
        pageSize: '10'
      };
    },
    // 查询
    search: function search() {
      var url = window.location.href;
      var a = url.indexOf('arrival');

      if (a > -1) {
        this.searchBtn(0);
      } else {
        this.searchBtn(1);
      }
    },
    // 分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSize = val;
      this.search();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.search();
    },
    // 数目详情分页
    handleSizeChangeS: function handleSizeChangeS(val) {
      this.pageSizeS = val;
      this.searchBtnS();
    },
    handleCurrentChangeS: function handleCurrentChangeS(val) {
      this.pageS = val;
      this.searchBtnS();
    },
    // 装车清单分页
    handleSizeChangeZC: function handleSizeChangeZC(val) {
      this.pageSizeZC = val;
      this.searchBtnL();
    },
    handleCurrentChangeZC: function handleCurrentChangeZC(val) {
      this.pageZC = val;
      this.searchBtnL();
    },
    // 全选
    allCheck: function allCheck(list) {
      if (this.allcheckbox && this[list].length) {
        this.disabled = false;
        this[list] = this[list].map(function (val) {
          val.checked = true;
          return val;
        });
        this.selectionsIds = this[list];
      } else {
        this.disabled = true;
        this[list] = this[list].map(function (val) {
          val.checked = false;
          return val;
        });
        this.selectionsIds = [];
      }
    },
    // 单选
    singleCheck: function singleCheck(item, list) {
      var a = this[list].filter(function (val) {
        return val.checked;
      });
      this.selectionsIds = a;

      if (a.length !== this[list].length) {
        this.allcheckbox = false;
      } else {
        this.allcheckbox = true;
      }

      for (var i = 0; i < this[list].length; i++) {
        if (this[list][i].checked) {
          this.disabled = false;
          return;
        } else {
          this.disabled = true;
        }
      }
    },
    //参数
    params: function params() {
      var params = {
        pageNum: this.page,
        pageSize: this.pageSize,
        plateNumber: this.searchList.plateNumber,
        //车牌号
        waybillId: this.searchList.waybillId,
        //运单号
        driverName: this.searchList.driverName,
        //	司机姓名
        scope: this.searchList.scope,
        //	线路
        state: this.searchList.state,
        //	状态
        creatTime1: this.searchList.creatTime1,
        //创建时间开始
        creatTime2: this.searchList.creatTime2,
        //创建时间结束
        startTime1: this.searchList.startTime1,
        //发车时间开始
        startTime2: this.searchList.startTime2,
        //发车时间结束
        endTime1: this.searchList.endTime1,
        //完成时间开始
        endTime2: this.searchList.endTime2 //完成时间结束

      };
      return params;
    },
    paramsS: function paramsS() {
      var params = {
        pageNum: this.pageS,
        pageSize: this.pageSizeS,
        transportId: this.idd,
        //	运输单Id
        expressCompany: this.searchTotalList.expressCompany,
        //快递公司名称
        isPackage: this.searchTotalList.isPackage,
        //	是否打包
        status: this.searchTotalList.status,
        //是否卸下
        loadingTime1: this.searchTotalList.expressCompany,
        //装车时间开始
        loadingTime2: this.searchTotalList.loadingTime2 //	装车时间结束

      };
      return params;
    },
    // 主页面查询
    searchBtn: function searchBtn(t) {
      var _this = this;

      var u = '';
      var list = '';

      if (t == 0) {
        u = '/transport/findTransportDhList';
        list = 'findTransportDhList';
      } else {
        u = '/transport/findTransportFhList';
        list = 'findTransportFhList';
      }

      _this.allcheckbox = false;
      $http(u, _this.params()).then(function (res) {
        // $http(u).then(res=>{
        if (res.data.code == "200") {
          _this[list] = res.data.data.list;

          _this[list].map(function (val) {
            val.state = state(val.state);
          });

          _this.total = res.data.data.total;

          if (!_this[list].length) {
            _this.$message("没用找到符合条件的内容！");
          }
        }
      }).catch(function (err) {// _this.$message(err);
      });
    },
    //isPackage=1数目查询
    searchBtnS: function searchBtnS() {
      var _this = this;

      _this.allcheckbox = false;
      $http('/transport/findDhInfos', _this.paramsS()).then(function (res) {
        if (res.data.code == "200") {
          _this.findDhInfosList = res.data.data.list;

          _this.findDhInfosList.map(function (val) {
            val.goodsType = goodsType(val.goodsType);
            val.unusual = unusual(val.unusual);
          });

          _this.totalS = res.data.data.total; // if (!_this.findDhInfosList.length) {
          //     _this.$message("没用找到符合条件的内容！");
          // }
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (err) {
        _this.error(err);
      });
    },
    // 装车清单查询
    searchBtnL: function searchBtnL() {
      var _this = this;

      _this.listList = [];
      var u = '/transport/findZcqd/';
      var data = {
        transportId: _this.selectionsIds[0].id,
        pageSize: _this.pageSizeZC,
        pageNum: _this.pageZC
      };
      $http(u, data).then(function (res) {
        if (res.data.code == "200") {
          _this.listList = res.data.data.list;
          _this.totalZC = res.data.data.total;
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (res) {
        _this.error(err);
      });
    },
    // 运单查询
    searchBtnLl: function searchBtnLl() {
      var _this = this;

      _this.listList = [];
      var u = '/transport/findYdList/';
      var transportId = _this.selectionsIds[0].id;
      $httpl(u + transportId).then(function (res) {
        if (res.data.code == "200") {
          _this.listList = res.data.data;
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 装车总数查询
    searchBtnLT: function searchBtnLT(idJ) {
      var _this = this;

      var id = _this.selectionsIds[0].id;
      _this.TotalhList = [];
      $httpl('/transport/findZcqdRecord/' + id).then(function (res) {
        if (res.data.code == "200") {
          _this.TotalhList.push(res.data.data);

          console.log(_this.TotalhList);
          JsBarcode(idJ, _this.TotalhList[0].barCode, {
            format: "CODE128",
            //选择要使用的条形码类型
            height: 80,
            width: 3 //设置条之间的宽度

          });
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 取消
    cancel: function cancel(Dialog) {
      this[Dialog] = false;
      this.selectionsIds = [];
      this.search();
    },
    // 点机数目跳转
    go: function go(item) {
      var url = window.location.href;
      var a = url.indexOf('arrival');

      if (a > -1) {
        this.totalListAll = this.arrivalSList;
      } else {
        this.totalListAll = this.deliverySList;
      }

      this.mainShow = false;
      this.detailY = true;
      this.selectionsIds.push(item);
      this.idd = item.id;
      this.reset();

      if (item.state == '运输中') {
        this.state = true;
      } else {
        this.state = false;
      }

      this.searchBtnS();
    },
    // 数目详情页面返回键
    mainTrue: function mainTrue() {
      this.mainShow = true;
      this.detailY = false;
      this.search();
    },
    // 点击显示弹框
    DialogTrue: function DialogTrue(Dialog) {
      var _this = this;

      if (this.selectionsIds.length < 1) {
        _this.$message({
          message: '请选择一条货物！',
          type: 'warning'
        });

        return;
      } else if (this.selectionsIds.length > 1) {
        if (Dialog == 'LoadingDialog' || Dialog == 'WayBillDialog' || Dialog == 'ArrivalDialog') {
          _this.$message({
            message: '只能选择一条货物！',
            type: 'warning'
          });

          return;
        }

        this[Dialog] = true;
      } else {
        this[Dialog] = true;
      }
    },
    // 点击获取id
    GetIds: function GetIds() {
      var ids = [];
      $(this.selectionsIds).each(function (index, data) {
        ids.push(data.id);
      });
      return ids;
    },
    //         发车获取id
    Departure: function Departure() {
      this.DialogTrue('DepartureDialog');
    },
    // 到站获取id
    Arrival: function Arrival() {
      this.DialogTrue('ArrivalDialog');
    },
    // 装车清单获取id
    LoadingList: function LoadingList() {
      var idJ = '#imgcode'; // this.LoadingDialog=true;

      this.DialogTrue('LoadingDialog');

      if (this.LoadingDialog == true) {
        this.searchBtnL();
        this.searchBtnLT(idJ);
      }
    },
    // 运单获取id
    WayBill: function WayBill() {
      var idJ = '#imgcodeW';
      this.DialogTrue('WayBillDialog');

      if (this.WayBillDialog == true) {
        this.searchBtnLl();
        this.searchBtnLT(idJ);
      }
    },
    // 确认
    //         发车确认
    DepartureSure: function DepartureSure(t) {
      var _this = this;

      var u = '';

      if (t == 0) {
        u = '/transport/fc/';
      } else if (t == 1) {
        u = '/transport/dz/';
      }

      $httpl(u + _this.GetIds(), _this.GetIds()).then(function (res) {
        if (res.data.code == "200") {
          _this.cancel('DepartureDialog');

          _this.cancel('ArrivalDialog');

          _this.success(res);

          _this.search();
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 打印
    doPrint: function doPrint(t) {
      var id = this.selectionsIds[0].id;
      var hurl = toP('/transport/findPdfByTid/' + id);

      if (t == 0) {
        window.location.href = hurl;
      } else {
        $("#WayBillPrint").print();
      }
    },
    // 运输路径跳转
    TransportDetail: function TransportDetail(id) {
      window.open("../index/map_Detail.html?from=transportA&expressNumber=".concat(id)); //到货点击详情页
    },
    TransportDetailS: function TransportDetailS(id) {
      window.open("../index/map_Detail.html?from=transportS&expressNumber=".concat(id)); //到货点击详情页
    },
    // 成功提示
    success: function success(res) {
      this.$message({
        message: res.data.message,
        type: 'success'
      });
    },
    // 失败提示
    warning: function warning(res) {
      this.$message(res.data.message);
    },
    // 错误提示
    error: function error(res) {
      this.$message.error(res.data.message);
    }
  } // idd记得晴空

});