"use strict";

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      multiple: true,
      length: 0,
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
      searchListAll: [{
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
        label: '派件人 :',
        placeholder: '请输入派件人',
        value: 'expressUser'
      }, {
        types: 'select',
        label: '签收状态 :',
        placeholder: '',
        value: 'signStates',
        options: [{
          label: '全部',
          value: '0'
        }, {
          label: '已签收',
          value: '1'
        }, {
          label: '未签收',
          value: '2'
        }]
      }, {
        types: 'input',
        label: '派件网点 :',
        placeholder: '请输入员工编号',
        value: 'sendSite'
      }, {
        types: 'datepicker',
        label: '签收时间 :',
        value: 'time'
      }],
      //查询条件
      recipientName: '',
      ruleFormListQ: [],
      //签收图片
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
      searchList: {
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        expressUser: '',
        //派件人
        signStates: '0',
        //签收状态
        beginTime: '',
        //开始时间
        endTime: '',
        //结束时间
        sendSite: '',
        //	派件网点
        pageNum: '1',
        pageSize: '10'
      },
      findTransportFhList: [],
      signing: [],
      path: [],
      Signingdialog: false,
      SigningDetail: false,
      dialogImg: false,
      showImg: true,
      dialogImageUrl: '',
      formLabelWidth: '120px',
      form: {
        name: ''
      },
      file: new FormData(),
      formDate: new FormData()
    };
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

    this.Signingdialog = false;
    this.dialogImg = false; // this.formData=new FormData()
  },
  mounted: function mounted() {
    this.searchBtn();
  },
  computed: {
    dateTime: {
      get: function get() {
        if (this.searchList.beginTime && this.searchList.endTime) {
          return [this.searchList.beginTime, this.searchList.endTime];
        } else {
          return [];
        }
      },
      set: function set(v) {
        this.searchList.beginTime = v[0].Format("yyyy-MM-dd HH:mm:ss");
        this.searchList.endTime = v[1].Format("yyyy-MM-dd HH:mm:ss");
      }
    }
  },
  watch: {},
  methods: {
    // 分页
    params: function params() {
      var params = {
        pageNum: this.page,
        pageSize: this.pageSize,
        expressCompany: this.searchList.expressCompany,
        //快递公司
        expressNumber: this.searchList.expressNumber,
        //单号
        expressUser: this.searchList.expressUser,
        //派件人
        signStates: this.searchList.signStates,
        //签收状态
        beginTime: this.searchList.beginTime,
        //开始时间
        endTime: this.searchList.endTime,
        //结束时间
        sendSite: this.searchList.sendSite //	派件网点

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
    // 重置
    reset: function reset() {
      this.searchList = {
        expressCompany: '',
        //快递公司
        expressNumber: '',
        //单号
        expressUser: '',
        //派件人
        signStates: '0',
        //签收状态
        beginTime: '',
        //开始时间
        endTime: '',
        //结束时间
        sendSite: '',
        //	派件网点
        pageNum: '1',
        pageSize: '10'
      };
    },
    // 全选
    allCheck: function allCheck() {
      if (this.allcheckbox && this.findTransportFhList.length) {
        this.disabled = false;
        this.findTransportFhList = this.findTransportFhList.map(function (val) {
          val.checked = true;
          return val;
        });
        this.selectionsIds = this.findTransportFhList;
      } else {
        this.disabled = true;
        this.findTransportFhList = this.findTransportFhList.map(function (val) {
          val.checked = false;
          return val;
        });
        this.selectionsIds = [];
      }
    },
    // 单选
    singleCheck: function singleCheck(item) {
      var a = this.findTransportFhList.filter(function (val) {
        return val.checked;
      });
      this.selectionsIds = a;

      if (a.length !== this.findTransportFhList.length) {
        this.allcheckbox = false;
      } else {
        this.allcheckbox = true;
      }

      for (var i = 0; i < this.findTransportFhList.length; i++) {
        if (this.findTransportFhList[i].checked) {
          this.disabled = false;
          return;
        } else {
          this.disabled = true;
        }
      }
    },
    // 查询接口
    searchBtn: function searchBtn() {
      var _this2 = this;

      var _this = this;

      this.allcheckbox = false;
      $http('/sign/querySignMessage', this.params()).then(function (res) {
        if (res.data.code == "200") {
          _this2.findTransportFhList = res.data.data.list;

          _this2.findTransportFhList.map(function (val) {
            val.recipientAddress = address(val.recipientAddress, val.recipientStreet);
            val.signStates = signStates(val.signStates);
          });

          _this.total = res.data.data.total;
        } else {
          _this2.warning(res.data.message);
        }
      }).catch(function (err) {
        _this2.error(err);
      });
    },
    // 取消
    cancel: function cancel() {
      this.form = {
        name: ''
      };
      this.formDate = new FormData();
      this.Signingdialog = false;
      this.selectionsIds = [];
    },
    // 返回
    back: function back() {
      window.history.go(-1);
    },
    // 签收路径跳转
    TransportDetail: function TransportDetail(id, flag) {
      if (flag == "E") {
        window.open("../index/map_Detail.html?from=SigningS&expressNumber=".concat(id));
      } else {
        window.open("../index/map_Detail.html?from=SigningA&expressNumber=".concat(id));
      } // window.location.href = `xxx.html?from=ArrivalReceipt&id=${id}`;//到货点击详情页

    },
    // 签收详情
    SigningDetails: function SigningDetails(expressNumber) {
      var _this3 = this;

      var _this = this;

      _this.SigningDetail = true;
      var data = {
        expressNumber: expressNumber
      };
      _this.signing = [];
      _this.path = [];
      $http('/sign/querySignDetail', data).then(function (res) {
        if (res.data.code == "200") {
          _this3.signing.push(res.data.data.signing);

          _this3.path = res.data.data.path.map(function (item) {
            item = paths(item);
            return item;
          });
        } else {
          _this3.warning(res.data.message);
        }
      }).catch(function (err) {
        _this3.error(err);
      });
    },
    // 签收详情确认
    subs: function subs() {
      this.SigningDetail = false;
    },
    //弹框获取id
    DialogTrue: function DialogTrue(Dialog) {
      var _this = this;

      if (this.selectionsIds.length < 1) {
        _this.$message({
          message: '请选择一条货物！',
          type: 'warning'
        });

        return;
      } else if (this.selectionsIds.length > 1) {
        _this.$message({
          message: '只能选择一条货物！',
          type: 'warning'
        });

        return;
      } else {
        console.log(this.selectionsIds);

        if (this.selectionsIds[0].signStates == "已签收") {
          this.$message({
            message: '这条货物已签收！',
            type: 'warning'
          });
          return;
        }

        this[Dialog] = true;
        this.recipientName = this.selectionsIds[0].recipientName;
      }
    },
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
    handleExceed: function handleExceed(files, fileList) {
      this.$message.warning('当前限制选择 3 张图片');
    },
    //上传三张限制
    UploadImage: function UploadImage(param) {
      var fileObj = param.file; // 相当于input里取得的files

      this.length = fileObj.length;
      this.formDate.append("file", fileObj); // 文件对象

      return false;
    },
    clearForm: function clearForm() {
      this.ruleFormListQ = []; //清空上传图片

      this.form = {
        name: ''
      };
    },
    //签收弹框
    Signing: function Signing() {
      this.clearForm();

      var _this = this;

      _this.DialogTrue('Signingdialog');
    },
    // 签收确认
    sub: function sub() {
      var _this4 = this;

      this.$refs.upload.submit();

      if (this.length < 1) {
        this.$message({
          message: '请至少上传一张图片',
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

      var ids = [];
      this.selectionsIds.map(function (val) {
        ids.push(val.expressNumber);
      });
      this.formDate.append('name', this.form.name);
      this.formDate.append('expressNumber', ids);
      $httpForm("/goods/signGoodsMorePicture", this.formDate).then(function (res) {
        if (res.data.code == "200") {
          _this4.success(res);
        } else {
          _this4.warning(res.data.message);
        }

        _this4.cancel();

        _this4.searchBtn();

        _this4.$refs.upload.clearFiles(); //清空上传图片

      }).catch(function (res) {
        _this4.error(res);
      });
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