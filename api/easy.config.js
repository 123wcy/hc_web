/**
 * 系统路径
 */
var api_header="58.221.6.82:900", //  开发环境：58.221.6.82   测试环境：
//var api_header="192.168.1.2:80",
    project="",
    api_host="http://"+api_header+"/"+project;

var api_token = easyCookie.get_token();

//if(api_token){ // 如果api_token不为空或者部位
//	easyCookie.set_token(api_token);
//
//}else{
//	api_token = easyCookie.get_token();
//
//}
