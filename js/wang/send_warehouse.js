"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = new Vue({
  el: "#app",
  data: function data() {
    var _ref;

    var columns = [{
      types: 'txt',
      label: '寄件人信息',
      span: 24
    }, {
      types: 'input',
      label: '寄件人 :',
      placeholder: '请输入姓名',
      value: 'senderName'
    }, {
      types: 'input',
      label: '寄件公司 :',
      placeholder: '请输入寄件公司',
      value: 'senderCompany'
    }, {
      types: 'input',
      label: '手机 :',
      placeholder: '请输入手机',
      value: 'senderMobilephone'
    }, {
      types: 'input',
      label: '固定电话 :',
      placeholder: '请输入固定电话',
      value: 'senderPhone'
    }, {
      types: 'input',
      label: '寄件地区 :',
      placeholder: '请输入寄件地区',
      value: 'senderAddress'
    }, {
      types: 'input',
      label: '详细地址 :',
      placeholder: '请输入详细地址',
      value: 'senderStreet'
    }, //收件人信息
    {
      types: 'txt',
      label: '收件人信息',
      span: 24
    }, {
      types: 'input',
      label: '收件人 :',
      placeholder: '请输入姓名',
      value: 'recipientName'
    }, {
      types: 'input',
      label: '收件公司 :',
      placeholder: '请输入寄件公司',
      value: 'recipientCompany'
    }, {
      types: 'input',
      label: '手机 :',
      placeholder: '请输入手机',
      value: 'recipientMobilephone'
    }, {
      types: 'input',
      label: '固定电话 :',
      placeholder: '请输入固定电话',
      value: 'recipientPhone'
    }, {
      types: 'input',
      label: '收件地区 :',
      placeholder: '请输入寄件地区',
      value: 'recipientAddress'
    }, {
      types: 'input',
      label: '详细地址 :',
      placeholder: '请输入详细地址',
      value: 'recipientStreet'
    }, //货物信息
    {
      types: 'txt',
      label: '货物信息',
      span: 24
    }, {
      types: 'input',
      label: '重量 :',
      placeholder: '请输入重量',
      value: 'goodsWeight'
    }, {
      types: 'texs',
      label: 'kg',
      paddings: 1,
      span: 1
    }, {
      types: 'input',
      label: '件数 :',
      placeholder: '请输入件数',
      value: 'goodsNumber'
    }, {
      types: 'input',
      label: '体积 :',
      placeholder: '请输入体积',
      value: 'goodsVolume',
      labelW: '48%',
      // paddings:1,
      span: 7
    }, {
      types: 'texs',
      label: 'm³',
      paddings: 1,
      span: 1
    }, {
      types: 'input',
      label: '长 :',
      value: 'goodsLength',
      // paddings:1,
      span: 6
    }, {
      types: 'texs',
      label: 'cm',
      paddings: 1,
      span: 1
    }, {
      types: 'input',
      label: '宽 :',
      // placeholder: '请输入宽',
      value: 'goodsWidth',
      span: 6
    }, {
      types: 'texs',
      label: 'cm',
      paddings: 1,
      span: 1
    }, {
      types: 'input',
      label: '高 :',
      // placeholder: '请输入高',
      value: 'goodsHeight',
      // paddings:1,
      span: 5
    }, {
      types: 'texs',
      label: 'cm',
      paddings: 1,
      span: 1
    }, {
      types: 'select',
      label: '货物类型',
      placeholder: '请选择货物类型',
      value: 'goodsType',
      options: []
    }, {
      types: 'input',
      label: '货物名称 :',
      placeholder: '请输入货物名称',
      value: 'goodsName'
    }, // 费用信息
    {
      types: 'txt',
      label: '费用信息',
      span: 24
    }, {
      types: 'input',
      label: '快递费 :',
      placeholder: '请输入快递费',
      value: 'goodsMoney'
    }, {
      types: 'texs',
      label: '元',
      paddings: 1,
      span: 1
    }, {
      types: 'select',
      label: '结算方式 :',
      placeholder: '请选择结算方式',
      value: 'paymentMethod',
      options: [{
        label: '寄付现结',
        value: '0'
      }, {
        label: '月付',
        value: '1'
      }, {
        label: '月结',
        value: '2'
      }]
    }, {
      types: 'input',
      label: '备注 :',
      placeholder: '请输入备注',
      value: 'remarks'
    }];
    return _ref = {
      columns: columns,
      ruleForm: {},
      warehouseName: '',
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
      searchListPending: [{
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
        types: 'datepicker',
        label: '下单时间 :',
        value: 'time'
      }],
      //待揽收
      searchListWaitS: [{
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
        label: '揽件人/网点 :',
        placeholder: '请输入揽件人/网点',
        value: 'sendSite'
      }, {
        types: 'input',
        label: '车牌号 :',
        placeholder: '请输入车牌号',
        value: 'plateNumber'
      }, {
        types: 'datepicker',
        label: '装车时间 :'
      }],
      //待入库
      searchListArrivalS: [{
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
        label: '发货类型 :',
        placeholder: '请选择车辆类型',
        value: 'sendType',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '寄件',
          value: '0'
        }, {
          label: '退回',
          value: '1'
        }]
      }, {
        types: 'select',
        label: '状态 :',
        placeholder: '请选择车辆类型',
        value: 'loaded',
        options: [{
          label: '全部',
          value: ''
        }, {
          label: '已装车',
          value: 'Y'
        }, {
          label: '已入库',
          value: 'N'
        }]
      }, {
        types: 'datepicker',
        label: '装车时间 :'
      }],
      //已入库
      searchListS: {
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        beginTime: '',
        //下单时间 起
        endTime: '',
        //	下单时间 止
        sendSite: '',
        // 揽件人、网点
        plateNumber: '',
        // 车牌号
        sendType: '',
        //发货类型
        loaded: '',
        //状态
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
      ConditionDialog: false,
      //揽收
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
    this.searchW();

    if (this.searchStatus == 0) {
      this.searchListAll = this.searchListArrival;
    } else {
      this.searchListAll = this.searchListWaitS; //待入库
    } // this.formData=new FormData()

  },
  mounted: function mounted() {
    this.loading = true;
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
    },
    dateTimes: {
      get: function get() {
        if (this.searchListS.beginTime && this.searchListS.endTime) {
          return [this.searchListS.beginTime, this.searchListS.endTime];
        } else {
          return [];
        }
      },
      set: function set(v) {
        // console.log(v)
        this.searchListS.beginTime = v[0].Format("yyyy-MM-dd HH:mm:ss");
        this.searchListS.endTime = v[1].Format("yyyy-MM-dd HH:mm:ss");
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
          _this2.$message.error(res.data.message);
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
        if (_this.searchStatus == 0) {
          _this.searchListAll = this.searchListWait;
        } else {
          _this.searchListAll = this.searchListPending; //揽收
        }

        _this.searchW();
      } else if (this.activeName == "second") {
        if (_this.searchStatus == 0) {
          _this.searchListAll = this.searchListArrival;
        } else {
          _this.searchListAll = this.searchListWaitS; //待入库
        }

        _this.searchW();
      } else {
        if (_this.searchStatus == 0) {
          _this.searchListAll = this.searchListPack;
        } else {
          _this.searchListAll = this.searchListArrivalS; //已入库
        }

        _this.searchW();
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
      var _this = this;

      this.templateRadio = false;

      if (this.LoadingName == "old") {
        _this.findHasWay();
      } else if (this.LoadingName == "new") {
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
        pageNum: this.pageS,
        pageSize: this.pageSizeS
      };

      if (this.activeName == "first") {
        params.expressCompany = this.searchListS.expressCompany; //快递公司

        params.expressNumber = this.searchListS.expressNumber; //单号

        params.beginTime = this.searchListS.beginTime; //开始时间

        params.endTime = this.searchListS.endTime; //结束时间
      } else if (this.activeName == "second") {
        params.expressCompany = this.searchListS.expressCompany; //快递公司

        params.expressNumber = this.searchListS.expressNumber; //单号

        params.sendSite = this.searchListS.sendSite; //	揽件人、网点

        params.plateNumber = this.searchListS.plateNumber; //	车牌号

        params.beginTime = this.searchListS.beginTime; //开始时间

        params.endTime = this.searchListS.endTime; //结束时间
      } else if (this.activeName == "third") {
        params.expressCompany = this.searchListS.expressCompany; //快递公司

        params.expressNumber = this.searchListS.expressNumber; //单号

        params.sendType = this.searchListS.sendType; //	发货类型

        params.loaded = this.searchListS.loaded; //状态

        params.beginTime = this.searchListS.beginTime; //入库时间 起

        params.endTime = this.searchListS.endTime; //入库时间 止
      }

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
      this.searchListS = {
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        beginTime: '',
        //下单时间 起
        endTime: '',
        //	下单时间 止
        sendSite: '',
        // 揽件人、网点
        plateNumber: '',
        // 车牌号
        sendType: '',
        //发货类型
        loaded: '',
        //状态
        pageNum: '1',
        pageSize: '10'
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
      var _this3 = this;

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
        } else {
          _this.$message.error(res.data.message);
        }
      }).catch(function (err) {
        _this3.$message.error(err);
      });
    },
    // 发货页面查询接口
    searchBtnSend: function searchBtnSend() {
      var _this = this;

      var a = _this.activeName;
      var u = '';

      if (a == "first") {
        u = '/express/findCollectMessage';
      } else if (a == "second") {
        u = '/express/findStockPending';
      } else if (a == "third") {
        u = '/express/findInWarehouse';
      }

      _this.allcheckbox = false;
      $http(u, this.paramsS()).then(function (res) {
        if (res.data.code == "200") {
          _this.sendList = res.data.data.list;

          _this.sendList.map(function (val) {
            val.unusual = unusual(val.unusual);
            val.senderAddress = address(val.senderAddress, val.senderStreet);
            val.recipientAddress = address(val.recipientAddress, val.recipientStreet);
            val.loadStatus = loadStatus(val.loadStatus);
            val.dispatched = dispatched(val.dispatched, '分派');
            val.loaded = loaded(val.loaded);
            val.completed = dispatched(val.completed, '签收');
            val.storaged = dispatched(val.storaged, '入库'); // val.load_status=dispatched(val.load_status,'装车');

            val.surcharge = surcharge(val.surcharge);
            val.sendType = sendType(val.sendType);
          });

          _this.totalS = res.data.data.total;

          if (!_this.sendList.length) {
            _this.$message("没用找到符合条件的内容！");
          }
        } else {
          _this.$message.error(res.data.message);
        }
      }).catch(function (err) {
        _this.err(err);
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
      var _this4 = this;

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
          _this4.error(res);
        }
      }).catch(function (res) {
        _this4.error(res);
      });
    },
    // 已装车辆列表
    findHasWay: function findHasWay() {
      var _this5 = this;

      this.LoadingData = [];
      $http('/vehicle/findHasWaybillIdVehicles', '12').then(function (res) {
        if (res.data.code == "200") {
          _this5.LoadingData = res.data.data;

          _this5.LoadingData.map(function (val) {
            val.type = carType(val.type);
            val.belong = Belong(val.belong);
          });

          Vue.set(_this5.LoadingData, 'LoadingOptions', {});
          Vue.set(_this5.LoadingData, 'OptionsStatus', '');
        } else {
          _this5.error(res);
        }
      }).catch(function (res) {
        _this5.error(res);
      });
    },
    // 获取已装车网点下拉框
    getWarehouse: function getWarehouse(row) {
      var _this6 = this;

      console.log(row);
      $http('/route/findAllViaWarehouse?vehicleId=' + row.row.id).then(function (res) {
        if (res.data.code == "200") {
          Vue.set(row.row, 'LoadingOptions', res.data.data); // row.row.LoadingOptions= res.data.data;//网点赋值
        } else {
          _this6.error(res);
        }
      }).catch(function (res) {
        _this6.error(res);
      });
    },
    // 装车确认
    findHasWaySure: function findHasWaySure() {
      var _this = this;

      var vehicleId = 0;
      var LoadingSelects = 0;
      var u = '';
      var s = _this.searchStatus;

      if (_this.templateSelection) {
        vehicleId = _this.templateSelection.id;
      } else {
        _this.$message({
          message: '请点击网点名称选择装车车辆！',
          type: 'warning'
        });

        return;
      }

      if (this.LoadingStatus == 0) {
        if (this.LoadingName == 'new') {
          LoadingSelects = this.LSearchList.warehouseId;

          if (s == 0) {
            u = '/goods/transportGoods';
          } else {
            u = '/express/transportExpressPC';
          }
        } else if (this.LoadingName == 'old') {
          LoadingSelects = _this.templateSelection.OptionsStatus; // u='/goods/transportHasGoods';

          if (s == 0) {
            u = '/goods/transportHasGoods';
          } else {
            u = '/express/transportHasExpressPC';
          }
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

        _this.searchW();
      }).catch(function (res) {
        _this.error(res);
      });
    },
    // 新网点与车辆查询下拉框
    getWarehouseId: function getWarehouseId() {
      var _this7 = this;

      var level = this.LSearchList.level;

      if (level == '') {
        level = 0;
      }

      $http('/warehouse/findLowerWarehouse?warehouseId=' + level).then(function (res) {
        if (res.data.code == "200") {
          _this7.LoadingOptionll = res.data.data; // Vue.set(row.row,'LoadingOptions',res.data.data)
          // row.row.LoadingOptions= res.data.data;//网点赋值
        } else {
          _this7.error(res);
        }
      }).catch(function (res) {
        _this7.error(res);
      });
    },
    // 新网点与车辆
    findAllWay: function findAllWay() {
      var _this8 = this;

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
          _this8.LoadingData = res.data.data.list;

          _this8.LoadingData.map(function (val) {
            val.level = levelSS(val.level); // val.belong=Belong(val.belong);
          });

          _this8.totall = res.data.data.total;
        } else {
          _this8.error(res);
        }
      }).catch(function (res) {
        _this8.error(res);
      });
    },
    // 数目详情页面返回键
    mainTrue: function mainTrue() {
      this.main = true;
      this.contant = false; // this.search();
    },
    // 新网点名称查询仓库
    LoadingBtn: function LoadingBtn(row) {
      var _this9 = this;

      this.templateRadio = false;
      this.main = false;
      this.contant = true;
      this.LSearchList.warehouseId = row.row.id;
      this.warehouseName = row.row.name;
      $http('/vehicle/findByWarehouseName?warehouseName=' + row.row.name).then(function (res) {
        if (res.data.code == "200") {
          _this9.LoadingBtnData = res.data.data;

          _this9.LoadingBtnData.map(function (val) {
            val.type = carType(val.type);
            val.belong = Belong(val.belong);
          }); // Vue.set(row.row,'LoadingOptions',res.data.data)
          // row.row.LoadingOptions= res.data.data;//网点赋值

        } else {
          _this9.error(res);
        }
      }).catch(function (res) {
        _this9.error(res);
      });
    },
    LoadingSureK: function LoadingSureK() {
      this.findHasWaySure();
    },
    // 查询未运行的包
    findUnloadPackage: function findUnloadPackage() {
      var _this10 = this;

      $http('/package/findUnloadPackage', '12').then(function (res) {
        if (res.data.code == "200") {
          _this10.tableData = res.data.data;
        } else {
          _this10.error(res);
        }
      }).catch(function (res) {
        _this10.error(res);
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
      this.ConditionDialog = false;
      this.LoadingSelect = '';
      this.CancelUrl = '';
      this.action = '';
      this.moreSelection = [];
      this.t = '';
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
      window.open("../index/map_Detail.html?from=Warehouse&expressNumber=".concat(id)); //到货点击详情页
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
        if (_this.searchStatus == 0) {
          _this.CancelUrl = '/goods/removeSurcharge?expressNumber=';
        } else {
          _this.CancelUrl = '/express/removeSurcharge?expressNumber=';
        }

        _this.action = '你确定要取消额外派送吗？';
      } else if (s == 'loaded') {
        if (_this.searchStatus == 0) {
          _this.CancelUrl = '/goods/cancelLoadGoods?expressNumber=';
        } else {
          _this.CancelUrl = '/express/cancelLoadExpress?expressNumber=';
        }

        _this.action = '你确定要取消装车吗？';
      } else if (s == 'cancelGoods' || s == 'Unloading') {
        if (_this.searchStatus == 0) {
          _this.CancelUrl = '/goods/cancelUnloadGoods';
        } else {
          _this.CancelUrl = '/express/cancelUnloadExpress';
        }

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
      } else if (s == 'cancelExpress') {
        _this.CancelUrl = '/express/cancelExpress?expressNumber=';
        _this.action = '你确定要取消快递吗？';
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

          _this.searchW();

          if (_this.t) {
            _this.detailSearch(_this.trow, _this.t);
          }
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

          _this.searchW();

          if (_this.t) {
            _this.detailSearch(_this.trow, _this.t);
          }
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

      if (_this.PackName == "old") {
        _this.$message({
          message: '请选择包号！',
          type: 'warning'
        });

        return;
      }

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
      var _this11 = this;

      this.$refs.uploadL.submit(); //触发上传事件

      if (this.ruleFormList.length < 1) {
        this.$message({
          message: '请先导入文件！',
          type: 'warning'
        });
        return;
      }

      $httpForm("/goods/importExcel", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this11.success(res);
        } else {
          _this11.error(res);
        }

        _this11.cancel();

        _this11.search(0);

        _this11.$refs.uploadL.clearFiles(); //清空上传文件

      }).catch(function (res) {
        _this11.$message.error(res.message);
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
      var _this12 = this;

      this.formDate.append('remarks', this.ReturnForm.remarks);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));

      if (!this.ReturnForm.remarks) {
        this.$message({
          message: '请先填入备注！',
          type: 'warning'
        });
        return;
      }

      $httpForm("/goods/backGoods", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this12.success(res);
        } else {
          _this12.error(res);
        }

        _this12.cancel();

        _this12.searchBtn();
      }).catch(function (res) {});
      this.error(res);
      this.cancel();
      this.searchBtn();
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
      var _this13 = this;

      var u = '';

      if (t == 0) {
        u = '/goods/abnormalGoods';
      } else {
        u = '/express/abnormalExpress';
      }

      this.$refs.uploadA.submit();

      if (this.length < 1) {
        this.$message({
          message: '请至少上传一张图片！',
          type: 'warning'
        });
        return;
      } else if (!this.AbnormalForm.remarks) {
        this.$message({
          message: '请先填写备注！',
          type: 'warning'
        });
        return;
      } else if (!this.AbnormalForm.errorType) {
        this.$message({
          message: '请先选择异常类型！',
          type: 'warning'
        });
        return;
      }

      this.formDate.append('errorType', this.AbnormalForm.errorType);
      this.formDate.append('remarks', this.AbnormalForm.remarks);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));
      $httpForm(u, this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this13.success(res);
        } else {
          _this13.error(res);
        }

        _this13.cancel();

        _this13.search(t);

        _this13.$refs.uploadA.clearFiles(); //清空上传图片

      }).catch(function (res) {
        _this13.$message.error(res.message);

        _this13.cancel();

        _this13.search(t);

        _this13.$refs.uploadA.clearFiles(); //清空上传图片

      });
    },
    //额外派送弹框
    ExtraRelivery: function ExtraRelivery() {
      var _this = this;

      _this.DialogTrue('ExtraReliveryDialog');

      _this.clearForm();
    },
    // 额外派送确认
    ExtraReliverySure: function ExtraReliverySure(t) {
      var _this14 = this;

      this.formDate.append('surcharge', this.ExtraReliveryForm.surcharge);
      this.formDate.append('expressNumber', this.GetIds('expressNumber'));

      if (!this.ExtraReliveryForm.surcharge) {
        this.$message({
          message: '请填入价格！',
          type: 'warning'
        });
        return;
      }

      var u = '';

      if (t == 0) {
        u = '/goods/extraGoods';
      } else {
        u = '/express/extraExpress';
      }

      $httpForm(u, this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this14.success(res);
        } else {
          _this14.error(res);
        }

        _this14.cancel();

        _this14.searchW();
      }).catch(function (res) {
        _this14.error(res);

        _this14.cancel();

        _this14.searchW();
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
      var _this15 = this;

      if (!id) {
        this.$message({
          message: '请先选择快递员！',
          type: 'warning'
        });
        return;
      }

      var data = {
        userId: id,
        expressNumbers: this.GetIds('expressNumber')
      };
      var u = '';

      if (this.searchStatus == 0) {
        u = '/goods/deliverGoods';
      } else {
        u = '/express/deliverExpress';
      }

      $http(u, data).then(function (res) {
        if (res.data.code == "200") {
          _this15.$message({
            message: res.data.message,
            type: 'success'
          });
        } else {
          _this15.$message(res.data.message);
        }

        _this15.cancel();

        _this15.searchW();
      }).catch(function (res) {
        _this15.$message(res.data.message);

        _this15.cancel();

        _this15.searchW();
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
    //获取揽收数据
    Condition: function Condition(t) {
      var _this = this;

      _this.t = t;

      if (!_this.t) {
        this.$message({
          message: '没获取到快递单号！',
          type: 'warning'
        });
        return;
      }

      _this.ConditionDialog = true;
      var u = '/express/findByCondition?expressNumber=';
      $httpl(u + t).then(function (res) {
        if (res.data.code == "200") {
          _this.ruleForm = res.data.data;
        } else {
          _this.error(res);
        }
      }).catch(function (res) {
        _this.error(res);
      });
    },
    //获取揽收数据
    //揽收确认
    ConditionSure: function ConditionSure() {
      var _this = this;

      var u = '/express/collectExpress?expressNumber=';

      if (!_this.t) {
        this.$message({
          message: '没获取到快递单号！',
          type: 'warning'
        });
        return;
      }

      $httpl(u + _this.t).then(function (res) {
        if (res.data.code == "200") {
          _this.success(res);
        } else {
          _this.error(res);
        }

        _this.cancel();

        _this.searchW();
      }).catch(function (res) {
        _this.error(res);

        _this.cancel();

        _this.searchW();
      });
    },
    //揽收确认
    //自提签收弹框
    Signing: function Signing() {
      this.ruleFormListQ = []; //清空上传图片

      var _this = this;

      _this.DialogTrue('SigningDialog');

      _this.recipientName = _this.selectionsIds[0].recipientName;
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
          message: '请至少上传一张图片！',
          type: 'warning'
        });
        return;
      } else if (!this.form.name) {
        this.$message({
          message: '签收人姓名不能为空！',
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
        _this16.$message.error(res.message);

        _this16.cancel();

        _this16.search(t);

        _this16.$refs.upload.clearFiles(); //清空上传图片

      });
    },
    // 入库确认
    Storage: function Storage(item) {
      var _this17 = this;

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

      var u = '';
      var t = this.searchStatus;

      if (t == 0) {
        u = '/goods/storageGoods';
      } else {
        u = '/express/storageExpress';
      }

      $http(u, this.GetIds('expressNumber')).then(function (res) {
        if (res.data.code == "200") {
          _this17.success(res);
        } else {
          _this17.error(res);
        }

        _this17.cancel();

        _this17.searchW();
      }).catch(function (res) {
        _this17.error(res);
      });
    },
    // 卸车获取已选id
    Unloading: function Unloading(t) {
      var _this = this;

      _this.UnloadingDialog = true;

      _this.UnloadingL(t);
    },
    //卸车列表
    UnloadingL: function UnloadingL(t) {
      var _this = this;

      var a = _this.activeName;
      var u = '';

      if (t == 0) {
        u = '/goods/loadScanGoodsList';
      } else {
        u = '/express/loadScanExpressList';
      }

      $http(u).then(function (res) {
        if (res.data.code == "200") {
          if (t == 0) {
            _this.UnloadingData = res.data.data.goodsList;
          } else {
            _this.UnloadingData = res.data.data;
          }

          _this.UnloadingTotal = _this.UnloadingData.length;
        } else {
          _this.$message.error(res.data.message);
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

      if (expressNumbers.length < 1) {
        this.$message({
          message: '请至少选择一条货物！',
          type: 'warning'
        });
        return;
      }

      var u = '';
      var t = _this.searchStatus;

      if (t == 0) {
        u = '/goods/storageGoodsInLoadScan';
      } else {
        u = '/express/storageExpressInLoadScan';
      }

      $http(u, expressNumbers).then(function (res) {
        if (res.data.code == "200") {
          _this.success(res);

          _this.cancel();

          _this.searchW();
        } else {
          _this.$message.error(res.data.message);
        }
      }).catch(function (err) {
        _this.error(err);
      });
    },
    // 关闭取消入库
    closeDialog: function closeDialog() {
      this.selectionsIds = this.UnloadingData;

      if (this.selectionsIds.length > 0) {
        this.cancelAll('cancelGoods', this.GetIds("expressNumber"));
        this.$emit('update:UnloadingDialog', true); // 直接修改父组件的属性
      } else {
        this.cancel();
      }
    },
    // 查询包号
    package: function _package() {},
    // 图片上传
    onSuccss: function onSuccss(response, file, fileList) {
      console.log(fileList);
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
        this.searchBtn(); //到货
      } else {
        this.searchStatus = 1;
        this.searchBtnSend(); //发货
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
      this.$message.error(res.message);
    }
  }
});