// "use strict";
var app = new Vue({
    el: "#app",
    data: function () {
        return {
            expressNumber: '',

            placeholder1: '请选择',
            placeholder2: '请选择',
            separator: '',
            platOptions: [],
            props: {
                label: 'regionName',
                value: 'id',
                children: 'child'
            },
            ruleForm: {
                senderName: '',
                senderCompany: '',
                senderMobilephone: '',
                senderPhone: '',
                senderAddress: '',
                senderStreet: '',
                recipientName: '',
                recipientMobilephone: '',
                recipientCompany: '',
                recipientPhone: '',
                recipientAddress: '',
                recipientStreet: '',

                goodsName: '',
                goodsWeight: '',
                goodsNumber: '',
                goodsVolume: '',
                goodsType: '',
                goodsLength: '',
                goodsWidth: '',
                goodsHeight: '',
                paymentMethod: '',
                goodsMoney: '',
                remarks: '',
                selectedOptions1: '',
                selectedOptions2: '',
            },
            rules: {
                senderName: [{
                    required: true,
                    message: '寄件人姓名不能为空！',
                    trigger: 'blur'
                },
                {
                    pattern: /^[\u2E80-\u9FFF]+$/,
                    message: '寄件人姓名只能输入汉字！',
                    trigger: 'blur'
                }
            ],
                senderMobilephone: [{
                        required: true,
                        message: '寄件人手机号码不能为空！',
                        trigger: 'blur'
                    },
                    {
                        pattern: /^1[34578]\d{9}$/,
                        message: '手机号码格式不正确',
                        trigger: 'blur'
                    }
                ],
                senderPhone: [{
                        required: false,
                    },
                    {
                        pattern: /^((\d{3,4})-)(\d{7,8})(-(\d{3,}))?$/,
                        message: '例：025-88888888-8888，区号必须要输入，没有分机号可不输！',
                        trigger: 'blur'
                    }
                ],
                senderAddress: [{
                    required: true,
                    message: '寄件人地址不能为空！',
                    trigger: 'blur'
                }],
                senderStreet: [{
                    required: true,
                    message: '寄件人详细不能为空！',
                    trigger: 'blur'
                }],

                recipientName: [{
                    required: true,
                    message: '收件人姓名不能为空！',
                    trigger: 'blur'
                },
                {
                    pattern: /^[\u2E80-\u9FFF]+$/,
                    message: '收件人姓名只能输入汉字！',
                    trigger: 'blur'
                }
            ],
                recipientMobilephone: [{
                        required: true,
                        message: '收件人手机号码不能为空！',
                        trigger: 'blur'
                    },
                    {
                        pattern: /^1[34578]\d{9}$/,
                        message: '手机号码格式不正确',
                        trigger: 'blur'
                    }
                ],
                recipientPhone: [{
                        required: false,
                    },
                    {
                        pattern: /^((\d{3,4})-)(\d{7,8})(-(\d{3,}))?$/,
                        message: '例：025-88888888-8888，区号必须要输入，没有分机号可不输！',
                        trigger: 'blur'
                    }
                ],
                recipientAddress: [{
                    required: true,
                    message: '收件人地址不能为空！',
                    trigger: 'blur'
                }],
                recipientStreet: [{
                    required: true,
                    message: '收件人详细地址不能为空！',
                    trigger: 'blur'
                }],


                goodsWeight: [{
                    required: true,
                    message: '货物重量不能为空！',
                    trigger: 'blur'
                }],
                goodsNumber: [{
                    required: true,
                    message: '货物不能为空！',
                    trigger: 'blur'
                }],
                goodsType: [{
                    required: true,
                    message: '货物类型不能为空！',
                    trigger: 'blur'
                }],
                paymentMethod: [{
                    required: true,
                    message: '付款方式不能为空！',
                    trigger: 'blur'
                }],
            },
            options2: [],
            loading: false,
        }
    },
    created() {
        this.getPlatCategory();
        this.findNativePlace();
    },
    mounted() {

    },
    methods: {
        categoryChange(value) {

            var arr1 = this.$refs['cascaderAddr1'].currentLabels;
            var arr2 = this.$refs['cascaderAddr2'].currentLabels;
            this.senderAddress = arr1[0] + arr1[1] + arr1[2];
            this.recipientAddress = arr2[0] + arr2[1] + arr2[2];
            // alert(arr1)
        },
        getPlatCategory() {
            this.platOptions = this.queryRegions(7459)
            this.platOptions.map((item, index, array) => {
                this.$set(array[index], 'child', [])
            })
        },
        handleItemChange(value) {
            let parentId
            console.log('active item:', value.length);
            if (value.length === 1) {
                parentId = value[0]
                this.platOptions.map((item, index) => {
                    if (item.id === parentId && item.child.length === 0) {
                        this.$set(this.platOptions[index], 'child', this.queryRegions(parentId))
                        item.child.map((innerItem, innerIndex) => {
                            this.$set(item.child[innerIndex], 'child', [])
                        })
                    }
                })
            } else {
                parentId = value[1]
                this.platOptions.map((item, index) => {
                    item.child.map((innerItem, innerIndex) => {
                        if (innerItem.id === parentId && innerItem.child.length === 0) {
                            this.$set(item.child[innerIndex], 'child', this.queryRegions(
                                parentId))
                        }
                    })
                })
            }
        },
        //获取三级联动接口
        queryRegions(id) {
            var array = [];
            $.ajax({
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json",
                headers: {
                    "token": "11577CEB4B73E14264725F4DA4FE3732ED",
                },
                url: "http://58.221.6.82:900/region/queryRegions/" + id,
                success: function (res) {
                    var str = JSON.stringify(res);
                    // alert(str);
                    var success = res.success;
                    var message = res.message;
                    var data = res.data;
                    for (var i in data) {
                        var obj = data[i];
                        array.push(obj);
                    }

                },
                error: function () {
                    console.log("这个请求错误");
                }
            });
            return array;
        },
        //货物类型
        findNativePlace() {
            var _this = this;
            var list = {
                "type": 1
            };
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                headers: {
                    "token": "11577CEB4B73E14264725F4DA4FE3732ED",
                },
                data: JSON.stringify(list),
                url: "http://58.221.6.82:900/dict/findNativePlace",
                success: function (res) {
                    // var str = JSON.stringify(res);
                    // alert(str);
                    var success = res.success;
                    var message = res.message;
                    var data = res.data;
                    var result = [];
                    for (var i = 0; i < data.length; i++) {
                        var obj = {};
                        obj.id = i;
                        obj.name = data[i];
                        result.push(obj);
                    }

                    _this.options2 = result;
                    // alert( JSON.stringify(result));

                },
                error: function () {
                    console.log("这个请求错误");
                }
            });
        },
        //点击保存请求数据
        submit() {
            var _this = this;
            var list = {

                "remarks": _this.ruleForm.remarks,
                "senderName": _this.ruleForm.senderName,
                "senderMobilephone": _this.ruleForm.senderMobilephone,
                "senderPhone": _this.ruleForm.senderPhone,
                "senderCompany": _this.ruleForm.senderCompany,
                "senderAddress": _this.senderAddress,
                "senderStreet": _this.ruleForm.senderStreet,
                "recipientName": _this.ruleForm.recipientName,
                "recipientMobilephone": _this.ruleForm.recipientMobilephone,
                "recipientPhone": _this.ruleForm.recipientPhone,
                "recipientCompany": _this.ruleForm.recipientCompany,
                "recipientAddress": _this.recipientAddress,
                "recipientStreet": _this.ruleForm.recipientStreet,
                "goodsName": _this.ruleForm.goodsName,
                "goodsWeight": _this.ruleForm.goodsWeight,
                "goodsNumber": _this.ruleForm.goodsNumber,
                "goodsVolume": _this.ruleForm.goodsVolume,
                "goodsType": _this.ruleForm.goodsType,
                "goodsLength": _this.ruleForm.goodsLength,
                "goodsWidth": _this.ruleForm.goodsWidth,
                "goodsHeight": _this.ruleForm.goodsHeight,
                "goodsMoney": _this.ruleForm.goodsMoney,
            };
            // alert(JSON.stringify(list));

            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                headers: {
                    "token": "11577CEB4B73E14264725F4DA4FE3732ED",
                },
                url: "http://58.221.6.82:900/sources/addSources",
                data: JSON.stringify(list),
                success: function (res) {
                    // var str = JSON.stringify(res);
                    // alert(str);
                    var code = res.code;
                    var success = res.success;
                    var message = res.message;
                    alert(message);
                    if (success == true) {
                        window.location.href = "index.html";
                    } else {
                        alert("暂无数据!")
                    }



                },
                error: function () {
                    console.log("这个请求错误");
                }
            });
        },
        // 点击保存验证
        saveForm: function () {
            var _this = this;
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    _this.submit();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    }

})