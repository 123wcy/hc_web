"use strict";

// let host = 'http://192.168.2.26:8089'
// let host = 'http://localhost:8099'
var host = 'http://58.221.6.82:900'; //

var config = {
  headers: {
    'Content-Type': 'multipart/form-data' // 'token': Cookies.get('token'),

  }
};
var configg = {
  headers: {
    'Content-Type': 'application/json' // 'token': Cookies.get('token'),

  }
  /****** 创建axios实例 ******/

};
var service = axios.create({
  baseURL: host,
  // api的base_url
  timeout: 5000 // 请求超时时间

});
/****** request拦截器==>对请求参数做处理 ******/

service.interceptors.request.use(function (config) {
  config.method === 'post' && config.headers['Content-Type'] === 'application/json' ? config.data = JSON.stringify({ ...config.data
  }) : config.params = { ...config.params
  }; // config.headers['Content-Type'] = 'application/json';

  config.headers['token'] = Cookies.get('token');
  return config;
}, function (error) {
  //请求错误处理
  Promise.reject(error);
});
/****** respone拦截器==>对响应做处理 ******/

service.interceptors.response.use(function (response) {
  //成功请求到数据
  console.log(response); //这里根据后端提供的数据进行对应的处理

  if (response.data.code == "200" || response.data.code == "400") {
    return Promise.resolve(response);
  } else if (response.data.code == "401") {
    top.location.href = '/login.html';
  }
}, function (error) {
  //响应错误处理
  // console.log(JSON.stringify(error));
  var text = JSON.parse(JSON.stringify(error)).response.resultCode === 404 ? '404' : '网络异常，请重试';
  return Promise.reject(error);
});

var $http = function $http(url, data) {
  return service({
    url: "".concat(host).concat(url),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  });
};

var $httpl = function $httpl(url, data) {
  return service({
    url: "".concat(host).concat(url),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

var $httpForm = function $httpForm(url, data) {
  return service({
    url: "".concat(host).concat(url),
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: data
  });
}; // 快递名称


var expressCompany = function expressCompany(v) {
  var type;

  switch (v) {
    case '1':
      type = '圆通快递';
      break;

    case '2':
      type = '申通快递';
      break;

    case '3':
      type = '韵达快递';
      break;

    case '4':
      type = '中通快递';
      break;

    case '5':
      type = '百世汇通';
      break;
  }

  return type;
};

var sendType = function sendType(v) {
  var type;

  switch (v) {
    case 0:
      type = '寄件';
      break;

    case 1:
      type = '退回';
      break;
  }

  return type;
}; //
// 1：医药卫生，
// 2：汽配，
// 3：快消品，
// 4：机具仪器，
// 5：化工橡塑，
// 6：服装鞋帽，
// 7：电子产品，
// 8：家电，
// 9：家具，
// 10：衣物，
// 11：食品，
// 12：其它


var toP = function toP(v) {
  var url = '';
  url = host + v;
  return url;
};

var goodsType = function goodsType(v) {
  var type;

  switch (v) {
    case "1":
      type = '医药卫生';
      break;

    case "2":
      type = '汽配';
      break;

    case "3":
      type = '快消品';
      break;

    case "4":
      type = '机具仪器';
      break;

    case "5":
      type = '化工橡塑';
      break;

    case "6":
      type = '服装鞋帽';
      break;

    case "7":
      type = '电子产品';
      break;

    case "8":
      type = '家电';
      break;

    case "9":
      type = '家具';
      break;

    case "10":
      type = '衣物';
      break;

    case "11":
      type = '食品';
      break;

    case "12":
      type = '其它';
      break;
  }

  return type;
};

var unusual = function unusual(v) {
  var type;

  switch (v) {
    case "Y":
      type = true;
      break;

    case "N":
      type = false;
      break;
  }

  return type;
}; // 车辆类型（1:挂车,2:半挂牵引车,3:厢式载货车,4:仓棚式载货车,5:冷藏车,6:栏板式载货车,7:平板运输车,8:牵引车,9:其它）


var carType = function carType(v) {
  var type;

  switch (v) {
    case 1:
      type = '挂车';
      break;

    case 2:
      type = '半挂牵引车';
      break;

    case 3:
      type = '厢式载货车';
      break;

    case 4:
      type = '仓棚式载货车';
      break;

    case 5:
      type = '冷藏车';
      break;

    case 6:
      type = '栏板式载货车';
      break;

    case 7:
      type = '平板运输车';
      break;

    case 8:
      type = '牵引车';
      break;

    case 9:
      type = '其它';
      break;
  }

  return type;
}; // 车辆所属（1：自由，2：合作，3：租用，4：其它）


var Belong = function Belong(v) {
  var type;

  switch (v) {
    case 1:
      type = "自由";
      break;

    case 2:
      type = "合作";
      break;

    case 3:
      type = "租用";
      break;

    case 4:
      type = "其它";
      break;
  }

  return type;
}; // 1.村庄，2.乡镇，3.县城）


var levelSS = function levelSS(v) {
  var type;

  switch (v) {
    case 1:
      type = "村庄";
      break;

    case 2:
      type = "乡镇";
      break;

    case 3:
      type = "县城";
      break;
  }

  return type;
}; // 运输状态：1：待运，2：运输中，3：已到站


var state = function state(v) {
  var type;

  switch (v) {
    case "1":
      type = "待运";
      break;

    case "2":
      type = "运输中";
      break;

    case "3":
      type = "已到站";
      break;
  }

  return type;
}; // dispatched 已分派 Y
// loaded 已装车 Y
// completed 已签收 Y
// storaged 已入库 Y
// load_status 已装车 Y


var dispatched = function dispatched(v, staus) {
  var type;

  switch (v) {
    case "Y":
      type = '已' + staus;
      break;

    case 'N':
      type = '';
      break;
  }

  return type;
};

var loaded = function loaded(v, staus) {
  var type;

  switch (v) {
    case "Y":
      type = '已装车';
      break;

    case 'N':
      type = '已入库';
      break;
  }

  return type;
};

var paths = function paths(v) {
  var urls = 'http://images.wlynj.com:8090/';
  var u = {};
  u.url = urls + v;
  return u;
}; // surcharge 不为null 额外派送


var surcharge = function surcharge(v) {
  var type;

  if (v) {
    type = '额外派送';
  } else {
    type = '';
  }

  return type;
}; //额外派送
// 签收状态 Y-已签收 N-未签收


var signStates = function signStates(v, staus) {
  var type;

  switch (v) {
    case "Y":
      type = '已签收';
      break;

    case 'N':
      type = '未签收';
      break;
  }

  return type;
};

var loadStatus = function loadStatus(v) {
  var type;

  switch (v) {
    case "Y":
      type = '已装车';
      break;

    case 'N':
      type = '未装车';
      break;
  }

  return type;
};

var validator = function validator(v) {
  $('form').bootstrapValidator({
    message: 'This value is not valid',
    submitButtons: '#btn-test',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    excluded: [':hidden', ':not(:visible)'],
    // excluded:[":disabled"],
    fields: {
      inCompany: {
        validators: {
          notEmpty: {
            message: '来票单位必填'
          }
        }
      },
      taxRate: {
        validators: {
          notEmpty: {
            message: '税率必填'
          },
          regexp: {
            /* 只需加此键值对，包含正则表达式，和提示 */
            regexp: /^100$|^(\d|[1-9]\d)(\.\d{1,4})*$/,
            message: '请输入1~100的数字，最多保留四位小数'
          }
        }
      },
      billCreateDate: {
        validators: {
          notEmpty: {
            message: '开票时间必填'
          }
        }
      },
      billCode: {
        validators: {
          notEmpty: {
            /*非空提示*/
            message: '发票编号必填'
          },
          regexp: {
            /* 只需加此键值对，包含正则表达式，和提示 */
            regexp: /^\d{8}$/,
            message: '发票编号必须为8位数字'
          }
        }
      },
      billTotalAccount: {
        trigger: "change",
        validators: {
          notEmpty: {
            message: '发票总额必填'
          } // callback: {
          //     message: '发票总额必填',
          //     callback:function(Code, validator,$field){
          //         // console.log(Code, validator,$field)
          //         // console.log(Code)
          //         if($('#billTotalAccount').val()){
          //             return true;
          //         }else{
          //             return false;                                    
          //         }
          //     }
          // }

        }
      },
      openBank: {
        validators: {
          notEmpty: {
            message: '开户银行必填'
          }
        }
      },
      openAccount: {
        validators: {
          notEmpty: {
            message: '银行账号必填'
          },
          regexp: {
            regexp: /^([1-9]{1})(\d{15}|\d{18})$/,
            message: '请输入正确的银行账号。'
          }
        }
      },
      lpAddress: {
        validators: {
          notEmpty: {
            message: '来票地址必填'
          }
        }
      },
      phone: {
        validators: {
          notEmpty: {
            message: '联系电话必填'
          },
          regexp: {
            regexp: /^((\d{3,4})-)(\d{7,8})(-(\d{3,}))?$/,
            message: '例：025-88888888-8888，区号必须要输入，没有分机号可不输。'
          }
        }
      },
      taxpayerCode: {
        validators: {
          notEmpty: {
            message: '不是有效的统一社会信用编码！(必填)'
          },
          // regexp: {
          //     regexp: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
          //     message: '身份证号码格式不正确，为15位和18位身份证号码！'
          // },
          callback: {
            /*自定义，可以在这里与其他输入项联动校验*/
            message: '不是有效的统一社会信用编码！(必填)',
            callback: function callback(Code, validator, $field) {
              var patrn = /^[0-9A-Z]+$/; //18位校验及大写校验

              if (Code.length != 18 || patrn.test(Code) == false) {
                message: '不是有效的统一社会信用编码！(必填)';

                return false;
              } else {
                var Ancode; //统一社会信用代码的每一个值

                var Ancodevalue; //统一社会信用代码每一个值的权重 

                var total = 0;
                var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]; //加权因子 

                var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'; //不用I、O、S、V、Z 

                for (var i = 0; i < Code.length - 1; i++) {
                  Ancode = Code.substring(i, i + 1);
                  Ancodevalue = str.indexOf(Ancode);
                  total = total + Ancodevalue * weightedfactors[i]; //权重与加权因子相乘之和 
                }

                var logiccheckcode = 31 - total % 31;

                if (logiccheckcode == 31) {
                  logiccheckcode = 0;
                }

                var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
                var Array_Str = Str.split(',');
                logiccheckcode = Array_Str[logiccheckcode];
                var checkcode = Code.substring(17, 18);

                if (logiccheckcode != checkcode) {
                  message: '不是有效的统一社会信用编码！(必填)';

                  return false;
                } else {// console.info("yes");
                }

                return true;
              }
            }
          }
        }
      }
    }
  });
}; // 地址拼接


var address = function address(vO, vT) {
  var type;
  return vO + vT;
};

Vue.prototype.gGetQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);

  if (r != null) {
    return unescape(r[2]);
  } else if (q != null) {
    return unescape(q[2]);
  } else {
    return null;
  }
}; // this.$message({
//     message: '恭喜你，这是一条成功消息',
//     type: 'success'
// });
//1-保存未提交，2-提交审核中，3-已撤销，4-审核通过，5-审核未通过，6-待作废，7-作废通过，8-作废未通过