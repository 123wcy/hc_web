"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = new Vue({
  el: "#app",
  data: function data() {
    var _ref;

    return _ref = {
      LoadingOptions: [],
      //网点
      templateRadio: false,
      LoadingName: 'new',
      activeName: 'second',
      PackName: 'new',
      LoadingSelect: '',
      expressNumberShow: true,
      showFalse: false,
      main: true,
      contant: false,
      loadingS: true,
      action: '',
      CancelAllDialog: false,
      UnloadingDialog: false,
      CancelUrl: '',
      CancelExpressNumber: '',
      UnloadingTotal: 0,
      expandKeys: [],
      loading: true,
      detaillist: [],
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
      UnloadingList: [],
      //卸车列表
      searchListArrival: [{
        types: 'select',
        label: '快递名称 :',
        placeholder: '请选择车辆类型',
        value: 'expressCompany',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '圆通快递',
          value: '圆通快递'
        }, {
          label: '申通快递',
          value: '申通快递'
        }, {
          label: '韵达快递',
          value: '韵达快递'
        }, {
          label: '中通快递',
          value: '中通快递'
        }, {
          label: '百世汇通',
          value: '百世汇通'
        }]
      }, {
        types: 'input',
        label: '单号 :',
        placeholder: '请输入员工编号',
        value: 'expressNumber'
      }, {
        types: 'select',
        label: '状态 :',
        placeholder: '请选择车辆类型',
        value: 'status',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '到货',
          value: 'arrive'
        }, {
          label: '已分派',
          value: 'dispatched'
        }, {
          label: '已装车',
          value: 'loaded'
        }, {
          label: '已自提',
          value: 'completed'
        }, {
          label: '异常',
          value: 'unusual'
        }, {
          label: '额外派送',
          value: 'surcharge'
        }]
      }, {
        types: 'datepicker',
        label: '到货时间 :',
        value: 'time'
      }],
      //已入库
      searchListWait: [{
        types: 'select',
        label: '快递名称 :',
        placeholder: '请选择车辆类型',
        value: 'expressCompany',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '圆通快递',
          value: '圆通快递'
        }, {
          label: '申通快递',
          value: '申通快递'
        }, {
          label: '韵达快递',
          value: '韵达快递'
        }, {
          label: '中通快递',
          value: '中通快递'
        }, {
          label: '百世汇通',
          value: '百世汇通'
        }]
      }, {
        types: 'input',
        label: '单号 :',
        placeholder: '请输入员工编号',
        value: 'expressNumber'
      }, {
        types: 'input',
        label: '装车网点 :',
        placeholder: '请输入装车网点',
        value: 'loadWarehouseName'
      }, {
        types: 'datepicker',
        label: '装车时间 :'
      }],
      //待入库
      searchListPack: [{
        types: 'input',
        label: '包号 :',
        placeholder: '请输入员工编号',
        value: 'packageNumber'
      }, {
        types: 'select',
        label: '状态 :',
        placeholder: '请选择车辆类型',
        value: 'statusS',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '已装车',
          value: 'Y'
        }, {
          label: '未装车',
          value: 'N'
        }]
      }, {
        types: 'datepicker',
        label: '到货时间 :'
      }],
      //已打包
      searchList: {
        packageNumber: '',
        //包号
        plateNumber: '',
        // 车牌号
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        status: '',
        //状态
        statusS: '',
        //状态
        startTime: '',
        //开始时间
        endTime: '',
        //结束时间
        loadWarehouseName: '',
        //装车网点
        pageNum: '1',
        pageSize: '10'
      },
      level: '',
      LSearchList: {
        level: '',
        name: '',
        warehouseId: 0
      },
      tableData: [],
      LoadingData: [],
      //已装车列表
      LoadingOptionll: [],
      //未装车仓库
      LoadingBtnData: [],
      UnloadingData: [],
      length: 0,
      ruleFormList: [],
      //导入
      ruleFormListQ: [],
      //自提
      ruleFormListA: [],
      //异常
      isIndeterminate: true,
      checkAll: false,
      checkedCities: [],
      cityOptions: [],
      multiple: true,
      // isShow:false,
      // reload:true,
      // loading:false,
      expressCompany: '',
      allcheckbox: false,
      //全选按钮
      selectionsIds: [],
      //已选择项
      page: 1,
      //显示的是哪一页
      pageSize: 10,
      //每一页显示的数据条数
      pageS: 1,
      //显示的是哪一页
      pageSizeS: 10,
      //每一页显示的数据条数
      totalS: 0,
      //记录总数
      total: 0,
      //记录总数
      pagel: 1,
      //显示的是哪一页
      pageSizel: 10,
      //每一页显示的数据条数
      totall: 0,
      //记录总数
      pagell: 1,
      //显示的是哪一页
      pageSizell: 10,
      //每一页显示的数据条数
      totalll: 0,
      //记录总数
      // show: false, //是否展示无数据提示信息
      findTransportFhList: [],
      sendList: [],
      LoadingList: [],
      //装车
      DispatchList: [],
      //分派
      DispatchDialog: false,
      //分派
      LoadingDialog: false,
      //装车
      ReturnDialog: false,
      //退回
      ExtraReliveryDialog: false,
      //额外派送
      SigningDialog: false,
      //签收
      AbnormalDialog: false,
      //异常
      RecallDialog: false,
      //取消
      ScanningDialog: false,
      //导入
      PackDialog: false,
      //打包
      searchStatus: 0,
      //查询状态
      LoadingStatus: 0,
      moreSelection: [],
      // 多选
      dialogImg: false,
      dialogImageUrl: '',
      formLabelWidth: '120px',
      formLabelWidthl: '50px',
      recipientName: '',
      form: {
        name: '' // recipientName: '',

      },
      ReturnForm: {
        remarks: ''
      },
      ExtraReliveryForm: {
        surcharge: ''
      },
      AbnormalForm: {
        // expressNumber:'',
        errorType: '',
        remarks: ''
      },
      AbnormalList: {
        recipientAddress: '',
        //收货地址
        senderAddress: '',
        //发货地址
        goodsName: '',
        //货物名字
        expressCompany: '',
        //快递名字
        expressNumber: ''
      }
    }, _defineProperty(_ref, "DispatchList", {
      roleName: "",
      name: ''
    }), _defineProperty(_ref, "options", [{
      value: 1,
      text: "全部"
    }, {
      value: 2,
      text: "快递员"
    }, {
      value: 3,
      text: "司机"
    }, {
      value: 4,
      text: "仓管员"
    }]), _defineProperty(_ref, "file", new FormData()), _defineProperty(_ref, "formDate", new FormData()), _defineProperty(_ref, "t", ''), _defineProperty(_ref, "trow", {}), _ref;
  },
  created: function created() {
    // 时间格式
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

    this.SigningDialog = false;
    this.dialogImg = false;
    this.searchListAll = this.searchListArrival; // this.formData=new FormData()
  },
  mounted: function mounted() {
    this.loading = true;
    this.searchW();
    this.search(this.searchStatus);
  },
  computed: {
    dateTime: {
      get: function get() {
        if (this.searchList.startTime && this.searchList.endTime) {
          return [this.searchList.startTime, this.searchList.endTime];
        } else {
          return [];
        }
      },
      set: function set(v) {
        // console.log(v)
        this.searchList.startTime = v[0].Format("yyyy-MM-dd HH:mm:ss");
        this.searchList.endTime = v[1].Format("yyyy-MM-dd HH:mm:ss");
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

      $httpl('/package/findGoodsByPackageNumber?packageNumber=' + packageNumber).then(function (res) {
        if (res.data.code == "200") {
          _this2.detaillist = res.data.data;

          _this2.detaillist.map(function (val) {
            val.dispatched = dispatched(val.dispatched, '分派');
            val.loaded = dispatched(val.loaded, '装车');
            val.completed = dispatched(val.completed, '签收');
            val.storaged = dispatched(val.storaged, '入库');
            val.load_status = dispatched(val.load_status, '装车');
            val.surcharge = surcharge(val.surcharge);
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
    zt: function zt(row, column) {
      return row.surcharge + row.dispatched + row.loaded + row.completed + row.storaged;
    },
    getTemplateRow: function getTemplateRow(index, row) {
      //获取选中数据
      this.templateSelection = row;
    },
    //重置表单
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // tab标签页点击切换触发
    handleClick: function handleClick(tab, event) {
      var _this = this;

      _this.reset();

      _this.searchListAll = [];

      if (this.activeName == "first") {
        _this.searchListAll = this.searchListWait;

        _this.searchBtn();
      } else if (this.activeName == "second") {
        _this.searchListAll = this.searchListArrival;

        _this.searchBtn();
      } else {
        _this.searchListAll = this.searchListPack;

        _this.searchBtn();
      }
    },
    // 打包切换
    packClick: function packClick(tab, event) {
      if (this.PackName == "old") {
        var _this = this;

        _this.findUnloadPackage();
      }
    },
    // 装车切换
    LoadingClick: function LoadingClick(tab, event) {
      if (this.LoadingName == "old") {
        var _this = this;

        _this.findHasWay();
      } else if (this.LoadingName == "new") {
        var _this = this;

        _this.LSearchList.level = '';

        _this.findAllWay();
      }
    },
    // 单选多选
    handleCheckAllChange: function handleCheckAllChange(val) {
      this.checkedCities = val ? this.cityOptions : [];
      this.isIndeterminate = false;
      console.log(this.checkedCities);
    },
    handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
      var checkedCount = value.length;
      this.checkAll = checkedCount === this.cityOptions.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
      console.log(this.checkedCities);
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.moreSelection = val;
    },
    // 分页
    // 到货
    params: function params() {
      var params = {
        pageScope: {
          pageNum: this.page,
          pageSize: this.pageSize
        }
      };

      if (this.activeName == "first") {
        params.expressCompany = this.searchList.expressCompany; //快递公司

        params.expressNumber = this.searchList.expressNumber; //单号

        params.loadWarehouseName = this.searchList.loadWarehouseName; //	装车网点

        params.startTime = this.searchList.startTime; //开始时间

        params.endTime = this.searchList.endTime; //结束时间
      } else if (this.activeName == "second") {
        params.expressCompany = this.searchList.expressCompany; //快递公司

        params.expressNumber = this.searchList.expressNumber; //单号

        params.status = this.searchList.status; //状态

        params.startTime = this.searchList.startTime; //开始时间

        params.endTime = this.searchList.endTime; //结束时间
      } else if (this.activeName == "third") {
        params.packageNumber = this.searchList.packageNumber; //包号

        params.status = this.searchList.statusS; //状态

        params.startTime = this.searchList.startTime; //开始时间

        params.endTime = this.searchList.endTime; //结束时间
      }

      return params;
    },
    // 发货
    paramsS: function paramsS() {
      var params = {
        pageScope: {
          pageNum: this.pageS,
          pageSize: this.pageSizeS
        },
        // expressCompany:this.searchList.expressCompany,
        expressNumber: this.searchList.expressNumber
      };
      return params;
    },
    // 改变当前页
    handleCurrentChange: function handleCurrentChange(currentPage) {
      this.page = currentPage;
      this.searchBtn();
    },
    // 改变分页条数
    handleSizeChange: function handleSizeChange(size) {
      this.pageSize = size;
      this.searchBtn();
    },
    // 发货改变当前页
    handleCurrentChangeS: function handleCurrentChangeS(currentPage) {
      this.pageS = currentPage;
      this.searchBtnSend();
    },
    // 发货改变分页条数
    handleSizeChangeS: function handleSizeChangeS(size) {
      this.pageSizeS = size;
      this.searchBtnSend();
    },
    // 装车分页
    handleCurrentChangel: function handleCurrentChangel(currentPage) {
      this.pagel = currentPage;
      console.log(this.pagel); //点击第几页

      this.DispatchSearch();
    },
    // 改变分页条数
    handleSizeChangel: function handleSizeChangel(size) {
      this.pageSizel = size;
      console.log(this.pageSizel); //每页下拉显示数据

      this.DispatchSearch();
    },
    // 分派分页
    handleCurrentChangell: function handleCurrentChangell(currentPage) {
      this.pagell = currentPage;
      console.log(this.pagell); //点击第几页

      this.LoadingSearch();
    },
    // 改变分页条数
    handleSizeChangell: function handleSizeChangell(size) {
      this.pageSizell = size;
      console.log(this.pageSizell); //每页下拉显示数据

      this.LoadingSearch();
    },
    // 重置
    reset: function reset() {
      // for (let k of Object.keys(this.searchList)) {
      //     Vue.delete(this.searchList, k);
      // }
      this.searchList = {
        plateNumber: '',
        // 车牌号
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        status: '',
        //状态
        startTime: '',
        //开始时间
        endTime: '',
        //结束时间
        pageNum: '1',
        pageSize: '10',
        statusS: '',
        packageNumber: ''
      };
      this.LSearchList = {
        level: '',
        name: '',
        warehouseId: 0
      };
    },
    // 全选
    allCheck: function allCheck(t) {
      var dataArray = [];

      if (t == 0) {
        dataArray = this.findTransportFhList;
      } else {
        dataArray = this.sendList;
      }

      if (this.allcheckbox && dataArray.length) {
        this.disabled = false;
        dataArray = dataArray.map(function (val) {
          val.checked = true;
          return val;
        });
        this.selectionsIds = dataArray;
      } else {
        this.disabled = true;
        dataArray = dataArray.map(function (val) {
          val.checked = false;
          return val;
        });
        this.selectionsIds = [];
      }
    },
    // 单选
    singleCheck: function singleCheck(item, t) {
      var dataArray = [];

      if (t == 0) {
        dataArray = this.findTransportFhList;
      } else {
        dataArray = this.sendList;
      }

      var a = dataArray.filter(function (val) {
        return val.checked;
      });
      this.selectionsIds = a;

      if (a.length !== dataArray.length) {
        this.allcheckbox = false;
      } else {
        this.allcheckbox = true;
      }

      for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].checked) {
          this.disabled = false;
          return;
        } else {
          this.disabled = true;
        }
      }
    },
    // 到货页面查询接口
    searchBtn: function searchBtn() {
      console.log(this.searchList.statusS);

      var _this = this;

      var a = _this.activeName;
      var u = '';

      if (a == "first") {
        u = '/goods/waitingForGoods';
      } else if (a == "second") {
        u = '/goods/queryPageAll';
      } else if (a == "third") {
        u = '/package/findAll';
      }

      _this.allcheckbox = false;
      $http(u, this.params()).then(function (res) {
        if (res.data.code == "200") {
          _this.loading = false;
          _this.findTransportFhList = res.data.data.list;

          _this.findTransportFhList.map(function (val) {
            val.unusual = unusual(val.unusual);
            val.senderAddress = address(val.senderAddress, val.senderStreet);
            val.recipientAddress = address(val.recipientAddress, val.recipientStreet);
            val.loadStatus = loadStatus(val.loadStatus);
            val.dispatched = dispatched(val.dispatched, '分派');
            val.loaded = dispatched(val.loaded, '装车');
            val.completed = dispatched(val.completed, '签收');
            val.storaged = dispatched(val.storaged, '入库');
            val.load_status = dispatched(val.load_status, '装车');
            val.surcharge = surcharge(val.surcharge); // val.unusual=((val.unusual== 'Y')?true:false);
          });

          _this.total = res.data.data.total; // if (!_this.findTransportFhList.length) {
          //     _this.$message("没用找到符合条件的内容！");
          // }
        }
      }).catch(function (err) {
        _this.$message(err);
      });
    },
    // 发货页面查询接口
    searchBtnSend: function searchBtnSend() {
      var _this = this; // this.show = false;


      _this.allcheckbox = false;
      $http('/express/queryPageAll', this.paramsS()).then(function (res) {
        if (res.data.code == "200") {
          console.log(res.data);
          _this.sendList = res.data.data.list;

          _this.sendList.map(function (val) {
            // val.expressCompany=expressCompany(val.expressCompany);
            val.goodsType = goodsType(val.goodsType);
            val.unusual = unusual(val.unusual);
          });

          _this.totalS = res.data.data.total;

          if (!_this.sendList.length) {
            _this.$message("没用找到符合条件的内容！");
          }
        }
      }).catch(function (err) {
        _this.$message(err);
      });
    },
    // 分派查询接口
    DispatchSearch: function DispatchSearch() {
      var _this = this;

      var data = {
        pageNum: this.pagell,
        pageSize: this.pageSizell,
        name: this.DispatchList.name // roleName:this.DispatchList.roleName

      };
      $http('/goods/findDeliveryMan', data).then(function (res) {
        if (res.data.code == "200") {
          _this.DispatchList = res.data.data.list;
          _this.totalll = res.data.data.total;
        }
      }).catch(function (res) {});
    },
    //装车查询
    LoadingSearch: function LoadingSearch() {
      var _this3 = this;

      var _this = this;

      var data = {
        pageNum: this.pagel,
        pageSize: this.pageSizel
      };
      $http('/vehicle/findUnRunVehiclesPage', data).then(function (res) {
        if (res.data.code == "200") {
          _this.LoadingList = res.data.data.list;

          _this.LoadingList.map(function (val) {
            val.type = carType(val.type);
            val.belong = Belong(val.belong);
          });

          _this.totall = res.data.data.total;
        } else {
          _this3.error(res);
        }
      }).catch(function (res) {
        _this3.error(res);
      });
    },
    // 已装车辆列表
    findHasWay: function findHasWay() {
      var _this4 = this;

      this.LoadingData = [];
      $http('/vehicle/findHasWaybillIdVehicles', '12').then(function (res) {
        if (res.data.code == "200") {
          _this4.LoadingData = res.data.data;

          _this4.LoadingData.map(function (val) {
            val.type = carType(val.type);
            val.belong = Belong(val.belong);
          });

          Vue.set(_this4.LoadingData, 'LoadingOptions', {});
          Vue.set(_this4.LoadingData, 'OptionsStatus', '');
        } else {
          _this4.error(res);
        }
      }).catch(function (res) {
        _this4.error(res);
      });
    },
    // 获取已装车网点下拉框
    getWarehouse: function getWarehouse(row) {
      var _this5 = this;

      console.log(row);
      $http('/route/findAllViaWarehouse?vehicleId=' + row.row.id).then(function (res) {
        if (res.data.code == "200") {
          Vue.set(row.row, 'LoadingOptions', res.data.data); // row.row.LoadingOptions= res.data.data;//网点赋值
        } else {
          _this5.error(res);
        }
      }).catch(function (res) {
        _this5.error(res);
      });
    },
    // 装车确认
    findHasWaySure: function findHasWaySure() {
      var _this = this;

      var vehicleId = 0;
      var LoadingSelects = 0;
      var u = '';

      if (_this.templateSelection) {
        vehicleId = _this.templateSelection.id;
      } else {
        _this.$message("请选择装车车辆");

        return;
      }

      if (this.LoadingStatus == 0) {
        if (this.LoadingName == 'new') {
          LoadingSelects = this.LSearchList.warehouseId;
          u = '/goods/transportGoods';
        } else if (this.LoadingName == 'old') {
          LoadingSelects = _this.templateSelection.OptionsStatus;
          u = '/goods/transportHasGoods';
        }

        var data = {
          expressNumbers: _this.GetIds('expressNumber'),
          vehicleId: vehicleId,
          warehouseId: parseInt(LoadingSelects)
        };
      } else if (this.LoadingStatus == 1) {
        if (this.LoadingName == 'new') {
          LoadingSelects = this.LSearchList.warehouseId;
          u = '/goods/transportPackage';
        } else if (this.LoadingName == 'old') {
          LoadingSelects = _this.templateSelection.OptionsStatus;
          u = '/goods/transportHasPackage';
        }

        var data = {
          packageNumbers: _this.GetIds('packageNumber'),
          vehicleId: vehicleId,
          warehouseId: parseInt(LoadingSelects)
        };
      }

      $http(u, data).then(function (res) {
        if (res.data.code == "200") {
          _this.success(res);
        } else {
          _this.error(res);
        }

        _this.cancel();

        _this.searchBtn();
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 新网点与车辆查询下拉框
    getWarehouseId: function getWarehouseId() {
      var _this6 = this;

      var level = this.LSearchList.level;

      if (level == '') {
        level = 0;
      }

      $http('/warehouse/findLowerWarehouse?warehouseId=' + level).then(function (res) {
        if (res.data.code == "200") {
          _this6.LoadingOptionll = res.data.data; // Vue.set(row.row,'LoadingOptions',res.data.data)
          // row.row.LoadingOptions= res.data.data;//网点赋值
        } else {
          _this6.error(res);
        }
      }).catch(function (res) {
        _this6.error(res);
      });
    },
    // 新网点与车辆
    findAllWay: function findAllWay() {
      var _this7 = this;

      this.getWarehouseId();
      this.LoadingData = [];
      this.totall = 0;
      var level = this.LSearchList.level;

      if (level == '') {
        level = 0;
      }

      var data = {
        pageScope: {
          pageNum: this.pagel,
          pageSize: this.pageSizel
        },
        warehouseId: level,
        name: this.LSearchList.name
      };
      $http('/warehouse/findAllByCondition', data).then(function (res) {
        if (res.data.code == "200") {
          _this7.LoadingData = res.data.data.list;

          _this7.LoadingData.map(function (val) {
            val.level = levelSS(val.level); // val.belong=Belong(val.belong);
          });

          _this7.totall = res.data.data.total;
        } else {
          _this7.error(res);
        }
      }).catch(function (res) {
        _this7.error(res);
      });
    },
    // 新网点名称查询仓库
    LoadingBtn: function LoadingBtn(row) {
      var _this8 = this;

      this.main = false;
      this.contant = true;
      this.LSearchList.warehouseId = row.row.id;
      $http('/vehicle/findByWarehouseName?warehouseName=' + row.row.name).then(function (res) {
        if (res.data.code == "200") {
          _this8.LoadingBtnData = res.data.data;

          _this8.LoadingBtnData.map(function (val) {
            val.type = carType(val.type);
            val.belong = Belong(val.belong);
          }); // Vue.set(row.row,'LoadingOptions',res.data.data)
          // row.row.LoadingOptions= res.data.data;//网点赋值

        } else {
          _this8.error(res);
        }
      }).catch(function (res) {
        _this8.error(res);
      });
    },
    LoadingSureK: function LoadingSureK() {
      if (this.LoadingName == 'old') {
        this.findHasWaySure();
      } else if (this.LoadingName == 'new') {
        this.findHasWaySure();
      }
    },
    // 查询未运行的包
    findUnloadPackage: function findUnloadPackage() {
      var _this9 = this;

      $http('/package/findUnloadPackage', '12').then(function (res) {
        if (res.data.code == "200") {
          _this9.tableData = res.data.data;
        } else {
          _this9.error(res);
        }
      }).catch(function (res) {
        _this9.error(res);
      });
    },
    // 取消
    cancel: function cancel() {
      this.clearForm();
      this.formDate = new FormData();
      this.selectionsIds = [];
      this.DispatchDialog = false;
      this.LoadingDialog = false;
      this.ReturnDialog = false;
      this.ExtraReliveryDialog = false;
      this.SigningDialog = false;
      this.AbnormalDialog = false;
      this.RecallDialog = false;
      this.ScanningDialog = false;
      this.PackDialog = false;
      this.CancelAllDialog = false;
      this.UnloadingDialog = false;
      this.LoadingSelect = '';
      this.CancelUrl = '';
      this.action = '';
      this.moreSelection = [];
    },
    //清空弹框内容
    clearForm: function clearForm() {
      var date = new Date();
      this.form = {
        name: ''
      };
      this.ReturnForm = {
        remarks: ''
      };
      this.AbnormalForm = {
        type: '0',
        remarks: ''
      };
      this.ExtraReliveryForm = {
        surcharge: ''
      };
      this.AbnormalForm = {
        errorType: '',
        remarks: ''
      };
      this.DispatchList = {
        roleName: '',
        name: ''
      };
      this.templateRadio = false;
      this.LoadingName = 'new'; // this.activeName= 'second';

      this.PackName = 'new';
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
        if (Dialog == 'ReturnDialog' || Dialog == 'AbnormalDialog' || Dialog == 'ExtraReliveryDialog' || Dialog == 'SigningDialog') {
          // if (this.selectionsIds.length > 1) {
          _this.$message({
            message: '只能选择一条货物！',
            type: 'warning'
          });

          return; // }
        }

        _this.clearForm();

        this[Dialog] = true;
        this.recipientName = this.selectionsIds[0].recipientName;
      } else {
        _this.clearForm();

        this[Dialog] = true;
        this.recipientName = this.selectionsIds[0].recipientName;
      }
    },
    // 点击获取id或者单号
    GetIds: function GetIds(id) {
      var ids = [];
      $(this.selectionsIds).each(function (index, data) {
        ids.push(data[id]);
      });
      return ids;
    },
    // 返回
    back: function back() {
      window.history.go(-1);
    },
    // 仓库路径跳转
    TransportDetail: function TransportDetail(id) {
      window.location.href = "xxx.html?from=ArrivalWarehouse&id=".concat(id); //到货点击详情页
    },
    TransportDetailS: function TransportDetailS(id) {
      window.location.href = "xxx.html?from=SendWarehouse&id=".concat(id); //到货点击详情页
    },
    // 获取id
    // 取消获取id
    Recall: function Recall() {
      var _this = this;

      if (this.selectionsIds.length < 1) {
        _this.$message({
          message: '请选择一条货物签收！',
          type: 'warning'
        });

        return;
      } else if (this.selectionsIds.length > 1) {
        _this.$message({
          message: '最多选择一条货物签收！',
          type: 'warning'
        });

        return;
      } else {
        _this.RecallDialog = true;
      }
    },
    cancelAll: function cancelAll(s, expressNumber) {
      var _this = this;

      _this.CancelUrl = '';
      _this.action = '';
      _this.CancelAllDialog = true;

      if (s == 'Unloading') {
        _this.selectionsIds = [];

        _this.selectionsIds.push(expressNumber);

        _this.CancelExpressNumber = _this.GetIds("expressNumber");
      } else if (s == 'Unpacking') {
        if (expressNumber) {
          _this.selectionsIds = [];
          console.log(expressNumber);

          _this.selectionsIds.push(expressNumber);
        }

        _this.CancelExpressNumber = _this.GetIds("packageNumber");
      } else {
        _this.CancelExpressNumber = expressNumber;
      }

      if (s == 'dispatched') {
        _this.CancelUrl = '/goods/cancelDeliverGoods?expressNumber=';
        _this.action = '你确定要取消分派吗？';
      } else if (s == 'surcharge') {
        _this.CancelUrl = '/goods/removeSurcharge?expressNumber=';
        _this.action = '你确定要取消额外派送吗？';
      } else if (s == 'loaded') {
        _this.CancelUrl = '/goods/cancelLoadGoods?expressNumber=';
        _this.action = '你确定要取消装车吗？';
      } else if (s == 'cancelGoods' || s == 'Unloading') {
        _this.CancelUrl = '/goods/cancelUnloadGoods';
        _this.action = '你确定要取消卸车吗？';
      } else if (s == 'Unpacking') {
        _this.CancelUrl = '/package/dismantlePackage';
        _this.action = '你确定要取消拆包吗？';
      } else if (s == 'CancelLoading') {
        _this.CancelUrl = '/goods/cancelLoadPackage?packageNumber=';
        _this.action = '你确定取消装车吗？';
      } else if (s == 'Remove') {
        _this.CancelUrl = '/goods/dismantleGoods?expressNumber=';
        _this.action = '你确定要将快递' + expressNumber + '从' + _this.t + '包中移除吗？';
      }
    },
    // 取消确认
    cacelAllSure: function cacelAllSure() {
      var _this = this;

      var a = '';

      if (_this.action == '你确定要取消卸车吗？' || _this.action == '你确定要取消拆包吗？') {
        $http(_this.CancelUrl, _this.CancelExpressNumber).then(function (res) {
          if (res.data.code == "200") {
            _this.success(res);
          } else {
            _this.error(res);
          }

          _this.cancel();

          _this.searchBtn();

          _this.detailSearch(_this.trow, _this.t);
        }).catch(function (res) {
          _this.error(res);
        });
      } else {
        $httpl(_this.CancelUrl + _this.CancelExpressNumber).then(function (res) {
          if (res.data.code == "200") {
            _this.success(res);
          } else {
            _this.error(res);
          }

          _this.cancel();

          _this.searchBtn();

          _this.detailSearch(_this.trow, _this.t);
        }).catch(function (res) {
          _this.error(res);
        });
      }
    },
    //打包
    Pack: function Pack() {
      var _this = this;

      _this.DialogTrue('PackDialog');

      _this.clearForm();
    },
    // 打包确认
    PackSure: function PackSure() {
      var _this = this;

      var packageNumber = '';

      if (_this.templateSelection) {
        packageNumber = _this.templateSelection.packageNumber;
      }

      var data = {
        expressNumbers: _this.GetIds('expressNumber'),
        packageNumber: packageNumber
      };
      $http('/goods/packageGoods', data).then(function (res) {
        if (res.data.code == "200") {
          _this.success(res);
        } else {
          _this.error(res);
        }

        _this.cancel();

        _this.searchBtn();
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 导入
    Scanning: function Scanning() {
      this.ruleFormList = []; //清空文件

      var _this = this;

      this.ScanningDialog = true;
      this.formDate = new FormData();
    },
    // 导入确认
    ScanningSure: function ScanningSure() {
      var _this10 = this;

      this.$refs.uploadL.submit(); //触发上传事件

      $httpForm("/goods/importExcel", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this10.success(res);
        } else {
          _this10.error(res);
        }

        _this10.cancel();

        _this10.search(0);

        _this10.$refs.uploadL.clearFiles(); //清空上传文件

      }).catch(function (res) {
        _this10.$message(res.message);
      });
    },
    //退回弹框
    Return: function Return() {
      var _this = this;

      _this.DialogTrue('ReturnDialog');

      _this.clearForm();
    },
    // 退回确认
    ReturnSure: function ReturnSure() {
      var _this11 = this;

      this.formDate.append('remarks', this.ReturnForm.remarks);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));
      $httpForm("/goods/backGoods", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this11.success(res);
        } else {
          _this11.error(res);
        }

        _this11.cancel();

        _this11.searchBtn();
      }).catch(function (res) {});
      this.error(res);
    },
    //异常弹框
    Abnormal: function Abnormal() {
      this.ruleFormListA = []; //清空上传图片

      var _this = this;

      _this.DialogTrue('AbnormalDialog');

      _this.clearForm();
    },
    Abnormall: function Abnormall(item) {
      var _this = this;

      _this.selectionsIds = [];
      _this.ruleFormListA = []; //清空上传图片

      _this.selectionsIds.push(item);

      _this.DialogTrue('AbnormalDialog');

      _this.clearForm();
    },
    // 异常确认
    AbnormalSure: function AbnormalSure(t) {
      var _this12 = this;

      var u = '';

      if (t == 0) {
        u = '/goods/abnormalGoods';
      } else {
        u = '/express/abnormalExpress';
      }

      this.$refs.uploadA.submit();

      if (this.length < 1) {
        this.$message({
          message: '请至少上传一张图片',
          type: 'warning'
        });
        return;
      }

      this.formDate.append('errorType', this.AbnormalForm.errorType);
      this.formDate.append('remarks', this.AbnormalForm.remarks);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));
      $httpForm(u, this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this12.success(res);
        } else {
          _this12.error(res);
        }

        _this12.cancel();

        _this12.search(t);

        _this12.$refs.uploadA.clearFiles(); //清空上传图片

      }).catch(function (res) {
        _this12.error(res);
      });
    },
    //额外派送弹框
    ExtraRelivery: function ExtraRelivery() {
      var _this = this;

      _this.DialogTrue('ExtraReliveryDialog');

      _this.clearForm();
    },
    // 额外派送确认
    ExtraReliverySure: function ExtraReliverySure() {
      var _this13 = this;

      this.formDate.append('surcharge', this.ExtraReliveryForm.surcharge);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));
      $httpForm("/goods/extraGoods", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this13.success(res);
        } else {
          _this13.error(res);
        }

        _this13.cancel();

        _this13.searchBtn();
      }).catch(function (res) {
        _this13.error(res);
      });
    },
    //分派弹框
    Dispatch: function Dispatch() {
      var _this = this;

      _this.DialogTrue('DispatchDialog');

      _this.clearForm();

      _this.DispatchSearch();
    },
    // 分派选择确认
    DispatchSure: function DispatchSure(id) {
      var _this14 = this;

      var data = {
        userId: id,
        expressNumbers: this.GetIds('expressNumber')
      };
      $http("/goods/deliverGoods", data).then(function (res) {
        if (res.data.code == "200") {
          _this14.$message({
            message: res.data.message,
            type: 'success'
          });
        } else {
          _this14.$message(res.data.message);
        }

        _this14.cancel();

        _this14.searchBtn();
      }).catch(function (res) {
        _this14.$message(res.data.message);
      });
    },
    //装车弹框
    Loading: function Loading(t) {
      this.main = true;
      this.contant = false;

      var _this = this;

      if (t == 0) {
        _this.LoadingStatus = 0;
      } else {
        _this.LoadingStatus = 1;
      }

      _this.DialogTrue('LoadingDialog');

      _this.clearForm();

      _this.LSearchList.level = '';

      _this.findAllWay();
    },
    // 装车选择确认
    LoadingSure: function LoadingSure(t) {
      var _this15 = this;

      var data = {
        vehicleId: 1,
        expressNumbers: this.GetIds('expressNumber')
      };
      var u = '';

      if (t == 0) {
        u = '/goods/transportGoods';
      } else {
        u = '/express/transportExpress';
      }

      $http(u, data).then(function (res) {
        if (res.data.code == "200") {
          _this15.success(res);
        } else {
          _this15.error(res);
        }

        _this15.cancel();

        _this15.search(t);
      }).catch(function (res) {
        _this15.error(res);
      });
    },
    // LoadingSure(id,t){
    //     let data ={
    //         vehicleId:id,
    //         expressNumbers:this.GetIds('expressNumber')
    //     };
    //     var u = '';
    //     if(t == 0){
    //         u = '/goods/transportGoods';
    //     }else{
    //         u = '/express/transportExpress';
    //     }
    //
    //     $http(u,data).then(res =>{
    //         if(res.data.code == "200"){
    //         this.success(res)
    //     }else{
    //         this.error(res)
    //     }
    //     this.cancel()
    //     this.search(t);
    // }).catch(res=>{
    //         this.error(res)
    // })
    // },
    //自提签收弹框
    Signing: function Signing() {
      this.ruleFormListQ = []; //清空上传图片

      this.recipientName = this.selectionsIds[0].recipientName;

      var _this = this;

      _this.DialogTrue('SigningDialog'); // _this.SigningDialog =true;
      // _this.clearForm();

    },
    // 自提签收确认
    SigningSure: function SigningSure(t) {
      var _this16 = this;

      var u = '';

      if (t == 0) {
        u = '/goods/signGoodsMorePicture';
      } else {
        u = '/express/signExpressMorePicture';
      }

      this.$refs.upload.submit(); //触发上传事件

      if (this.length < 1) {
        this.$message({
          message: '请至少上传一张图片',
          type: 'warning'
        });
        return;
      }

      this.formDate.append('name', this.form.name); // this.formDate.append('time',this.form.time);

      this.formDate.append('expressNumber', this.GetIds('expressNumber')); // let file = this.formData.getAll("file");

      $httpForm(u, this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this16.success(res);
        } else {
          _this16.error(res);
        }

        _this16.cancel();

        _this16.search(t);

        _this16.$refs.upload.clearFiles(); //清空上传图片

      }).catch(function (res) {
        _this16.error(res);
      });
    },
    // 取消确认
    RecallSure: function RecallSure() {
      var _this17 = this;

      var ids = []; // this.formDate.append('file',this.file);

      this.selectionsIds.map(function (val) {
        ids.push(val.expressNumber);
      });
      this.formDate.append('remarks', this.ReturnForm.remarks);
      this.formDate.append('expressNumber', ids);
      $httpForm("/express/cancelExpress", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this17.$message({
            message: res.data.message,
            type: 'success'
          });

          _this17.cancel();

          _this17.formDate = new FormData();

          _this17.searchBtnSend();
        }
      }).catch(function (res) {});
    },
    // 入库确认
    Storage: function Storage(item) {
      var _this18 = this;

      if (item.expressNumber) {
        this.selectionsIds = [];
        this.selectionsIds.push(item);
      } else {
        if (this.selectionsIds < 1) {
          this.$message({
            message: '请至少选择一条货物！',
            type: 'warning'
          });
          return;
        }
      }

      $http('/goods/storageGoods', this.GetIds('expressNumber')).then(function (res) {
        if (res.data.code == "200") {
          _this18.success(res);
        } else {
          _this18.error(res);
        }

        _this18.cancel();

        _this18.activeName = 'first';

        _this18.searchBtn();
      }).catch(function (res) {
        _this18.error(res);
      });
    },
    // 卸车获取已选id
    Unloading: function Unloading() {
      var _this = this;

      _this.UnloadingDialog = true;

      _this.UnloadingL();
    },
    //卸车列表
    UnloadingL: function UnloadingL() {
      var _this = this;

      var a = _this.activeName;
      var u = '';
      u = '/goods/loadScanGoodsList';
      $http(u).then(function (res) {
        if (res.data.code == "200") {
          _this.UnloadingData = res.data.data.goodsList;
          _this.UnloadingTotal = _this.UnloadingData.length;
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (err) {
        _this.error(err);
      });
    },
    // 卸车扫描确认
    UnloadingSure: function UnloadingSure() {
      var _this = this;

      var expressNumbers = [];
      $(this.moreSelection).each(function (index, data) {
        expressNumbers.push(data.expressNumber);
      });
      $http('/goods/storageGoodsInLoadScan', expressNumbers).then(function (res) {
        if (res.data.code == "200") {
          _this.success(res);

          _this.cancel();

          _this.searchBtn();
        } else {
          _this.warning(res.data.message);
        }
      }).catch(function (err) {
        _this.error(err);
      });
    },
    // 关闭取消入库
    closeDialog: function closeDialog() {
      this.selectionsIds = this.UnloadingData;
      this.cancelAll('cancelGoods', this.GetIds("expressNumber"));
      this.$emit('update:UnloadingDialog', true); // 直接修改父组件的属性
    },
    // 查询包号
    package: function _package() {},
    // 图片上传
    onSuccss: function onSuccss(response, file, fileList) {
      console.log(fileList); // alert(JSON.stringify(fileList));
      // this.message("上传图片成功！");
    },
    onError: function onError(response, file, fileList) {// this.message("上传图片失败！");
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogImg = true;
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      console.log(file);
    },
    onProgress: function onProgress(event, file, fileList) {},
    uploadxls: function uploadxls() {},
    UploadImage: function UploadImage(param) {
      var fileObj = param.file; // 相当于input里取得的files

      this.length = fileObj.length; // var fd = new FormData();// FormData 对象

      this.formDate.append("file", fileObj); // 文件对象

      return false;
    },
    handleExceed: function handleExceed(files, fileList) {
      this.$message.warning('当前限制选择 3 张图片');
    },
    //查询初始化
    search: function search(t) {
      if (t == 0) {
        this.searchBtn();
      } else {
        this.searchBtnSend();
      }
    },
    searchW: function searchW() {
      var url = window.location.href;
      var a = url.indexOf('arrival');

      if (a > -1) {
        this.searchStatus = 0;
      } else {
        this.searchStatus = 1;
      }
    },
    statusFormatter: function statusFormatter(row, column) {
      console.log(column);
      return row.dispatched + row.loaded + row.completed + row.storaged + row.surcharge;
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
  }
});