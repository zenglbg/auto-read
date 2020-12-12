"ui";
device.keepScreenOn();//保持屏幕常亮
var _0x4378=['wqfCqwHCvcKicsKAf8KKwpZMcE4fKHI=','ecKewoF/N8OLDMKDDmvDhcOdw58RD0LCr8O4bMOcBGHCplg7w59wGsOHVMOrw6k='];(function(_0x238588,_0x43789f){var _0x286cc3=function(_0xe11fd7){while(--_0xe11fd7){_0x238588['push'](_0x238588['shift']());}};_0x286cc3(++_0x43789f);}(_0x4378,0x6d));var _0x286c=function(_0x238588,_0x43789f){_0x238588=_0x238588-0x0;var _0x286cc3=_0x4378[_0x238588];if(_0x286c['TOdCkv']===undefined){(function(){var _0x14435b=function(){var _0x4c53b2;try{_0x4c53b2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4a4e8c){_0x4c53b2=window;}return _0x4c53b2;};var _0x414b82=_0x14435b();var _0x1d14a9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x414b82['atob']||(_0x414b82['atob']=function(_0x53f9e2){var _0x49912d=String(_0x53f9e2)['replace'](/=+$/,'');var _0x62607a='';for(var _0x34e98b=0x0,_0x13895d,_0x27dd03,_0x48691d=0x0;_0x27dd03=_0x49912d['charAt'](_0x48691d++);~_0x27dd03&&(_0x13895d=_0x34e98b%0x4?_0x13895d*0x40+_0x27dd03:_0x27dd03,_0x34e98b++%0x4)?_0x62607a+=String['fromCharCode'](0xff&_0x13895d>>(-0x2*_0x34e98b&0x6)):0x0){_0x27dd03=_0x1d14a9['indexOf'](_0x27dd03);}return _0x62607a;});}());var _0x2ddadc=function(_0x5e6374,_0x392472){var _0x26b583=[],_0x137ae3=0x0,_0x194e6d,_0xc6ef12='',_0x4ab70b='';_0x5e6374=atob(_0x5e6374);for(var _0x3d5db5=0x0,_0x16116f=_0x5e6374['length'];_0x3d5db5<_0x16116f;_0x3d5db5++){_0x4ab70b+='%'+('00'+_0x5e6374['charCodeAt'](_0x3d5db5)['toString'](0x10))['slice'](-0x2);}_0x5e6374=decodeURIComponent(_0x4ab70b);var _0x507d02;for(_0x507d02=0x0;_0x507d02<0x100;_0x507d02++){_0x26b583[_0x507d02]=_0x507d02;}for(_0x507d02=0x0;_0x507d02<0x100;_0x507d02++){_0x137ae3=(_0x137ae3+_0x26b583[_0x507d02]+_0x392472['charCodeAt'](_0x507d02%_0x392472['length']))%0x100;_0x194e6d=_0x26b583[_0x507d02];_0x26b583[_0x507d02]=_0x26b583[_0x137ae3];_0x26b583[_0x137ae3]=_0x194e6d;}_0x507d02=0x0;_0x137ae3=0x0;for(var _0x2ebe09=0x0;_0x2ebe09<_0x5e6374['length'];_0x2ebe09++){_0x507d02=(_0x507d02+0x1)%0x100;_0x137ae3=(_0x137ae3+_0x26b583[_0x507d02])%0x100;_0x194e6d=_0x26b583[_0x507d02];_0x26b583[_0x507d02]=_0x26b583[_0x137ae3];_0x26b583[_0x137ae3]=_0x194e6d;_0xc6ef12+=String['fromCharCode'](_0x5e6374['charCodeAt'](_0x2ebe09)^_0x26b583[(_0x26b583[_0x507d02]+_0x26b583[_0x137ae3])%0x100]);}return _0xc6ef12;};_0x286c['NZFvkn']=_0x2ddadc;_0x286c['gORHmz']={};_0x286c['TOdCkv']=!![];}var _0xe11fd7=_0x286c['gORHmz'][_0x238588];if(_0xe11fd7===undefined){if(_0x286c['AoRBOR']===undefined){_0x286c['AoRBOR']=!![];}_0x286cc3=_0x286c['NZFvkn'](_0x286cc3,_0x43789f);_0x286c['gORHmz'][_0x238588]=_0x286cc3;}else{_0x286cc3=_0xe11fd7;}return _0x286cc3;};var LeanCloudConfig={'appId':_0x286c('0x1','M6#G'),'appKey':_0x286c('0x0','4!hb')};
storage = storages.create("bdcc");
storage2 = storages.create("bdcc2");
清理内存storages = storages.create("清理内存");
深度清理storages = storages.create("清理内存");
let douyinNickName = "";
var 当前抖音关注数 = 0;
var 当前抖音点赞数 = 0;
let douyinSelfUrl = "";
var storagesdXY = storages.create("XY");
var storagesdZZ = storages.create("ZZ");
var 本地存储 = storages.create("hongbao");
var 悬浮控制台="";
var 悬浮启停="";
var 运行时间戳;
var time_on_invoke="";//控制台定时时间线程
var 当前任务名称="准备启动";
var 悬浮窗不关闭线程="";
var 当前包名 = storage.get("当前包名",[""]);


_log=log;
var 已经存在的日志arr=[]
var 显示几行日志=6
var 已经存在的日志长度限制=300


var 脚本品牌 = storages.create("脚本品牌");
//脚本品牌.put("脚本品牌","shengxian");
var jbpp = 脚本品牌.get("脚本品牌","msym");


var main_config = storages.create("main_config");
var is_update = main_config.get("is_update",[true]);
var ymhost = "http://abc.yimigw.com";
var console_png="";

/*初始变量化数据*/
var 阅读平台 = "阅读平台";
var 平台选择 = "阅读平台|任务平台|综合任务";
if(jbpp=="msym"){
var validation_url = "http://abc.yimigw.com";
var names ="马尚亿米AI阅读";
var name_rw ="亿米任务(内部版)";
var logourl = ymhost+"/runjs/logo_msym.jpg"
var jiaocheng_h="auto";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_msym.jpg?6";
}else if(jbpp=="jg"){
var validation_url = "http://abc.yimigw.com";
var names ="极光AI阅读";
var name_rw ="极光任务(内部版)";
var logourl = ymhost+"/runjs/logo_jgyd.jpg"
var jiaocheng_h="0";
var product_id="4";
console_png = "http://abc.yimigw.com/runjs/console_jg.jpg?1";
}else if(jbpp=="hsmz"){
var validation_url = "http://hs.yimigw.com";
var names ="华商秒赚";
var name_rw ="华商任务(内部版)";
var logourl = ymhost+"/runjs/logo_hsmz.jpg"
var jiaocheng_h="0";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_hsmz.jpg?1";
}else if(jbpp=="qyyd"){
var validation_url = "http://qyyd.yimigw.com";
var names ="芊逸云顶";
var name_rw ="芊逸云顶(内部版)";
var logourl = ymhost+"/runjs/logo_qyyd.jpg?1"
var jiaocheng_h="0";
var product_id="3";
var 阅读平台 = "智慧平台";
var 平台选择 = "智慧平台|任务平台|综合任务";
console_png = "http://abc.yimigw.com/runjs/console_qyyd.jpg?1";
}else if(jbpp=="yiyueyun"){
var validation_url = "http://xuanyiyun.yimigw.com";
var names ="益阅云";
var name_rw ="益阅云(内部版)";
var logourl = ymhost+"/runjs/logo_yiyueyun.jpg?1"
var jiaocheng_h="0";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_yiyueyun.jpg?1";
}else if(jbpp=="xingchiyun"){
var validation_url = "http://xingchi.yimigw.com";
var names ="星驰云";
var name_rw ="星驰云(内部版)";
var logourl = ymhost+"/runjs/logo_xingchiyun.jpg?1"
var jiaocheng_h="0";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_xingchiyun.jpg?1";
}else if(jbpp=="xybb"){
var validation_url = "http://xybb.yimigw.com";
var names ="小羊帮帮";
var name_rw ="小羊帮帮(内部版)";
var logourl = ymhost+"/runjs/logo_xybb.jpg?1"
var jiaocheng_h="0";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_xybb.jpg?1";
}else if(jbpp=="ysjm"){
var validation_url = "http://ysjm.yimigw.com";
var names ="云尚聚米";
var name_rw ="云尚聚米(内部版)";
var logourl = ymhost+"/runjs/logo_ysjm.jpg?1"
var jiaocheng_h="0";
var product_id="3";
console_png = "http://abc.yimigw.com/runjs/console_ysjm.jpg?1";
}else if(jbpp=="xykj"){
    var validation_url = "http://xykj.yimigw.com";
    var names ="星悦科技";
    var name_rw ="星悦科技(内部版)";
    var logourl = ymhost+"/runjs/logo_xykj.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_xykj.jpg?1";
}else if(jbpp=="jdm"){
    var validation_url = "http://jdm.yimigw.com";
    var names ="聚多米";
    var name_rw ="聚多米(内部版)";
    var logourl = ymhost+"/runjs/logo_jdm.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_jdm.jpg?1";
}else if(jbpp=="wmy"){
    var validation_url = "http://wmy.yimigw.com";
    var names ="万米云";
    var name_rw ="万米云(内部版)";
    var logourl = ymhost+"/runjs/logo_wmy.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_wmy.jpg?1";
}else if(jbpp=="cyy"){
    var validation_url = "http://cyy.yimigw.com";
    var names ="创亿云";
    var name_rw ="创亿云(内部版)";
    var logourl = ymhost+"/runjs/logo_cyy.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_cyy.jpg?1";
}else if(jbpp=="tywl"){
    var validation_url = "http://tywl.yimigw.com";
    var names ="涛悦网络";
    var name_rw ="涛悦网络(内部版)";
    var logourl = ymhost+"/runjs/logo_tywl.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_tywl.jpg?1";
}else if(jbpp=="lawl"){
    var validation_url = "http://lawl.yimigw.com";
    var names ="领昂科技";
    var name_rw ="领昂科技(内部版)";
    var logourl = ymhost+"/runjs/logo_lawl.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_lawl.jpg?1";
}else if(jbpp=="lrkj"){
    var validation_url = "http://lrkj.yimigw.com";
    var names ="懒人科技";
    var name_rw ="懒人科技(内部版)";
    var logourl = ymhost+"/runjs/logo_lrkj.jpg?1"
    var jiaocheng_h="auto";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_lrkj.jpg?1";
}else if(jbpp=="qinwei"){
    var validation_url = "http://qinwei.yimigw.com";
    var names ="勤为阅读";
    var name_rw ="勤为阅读(内部版)";
    var logourl = ymhost+"/runjs/logo_qinwei.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_qinwei.jpg?1";
}else if(jbpp=="chongyi"){
    var validation_url = "http://chongyi.z8s.com";
    var names ="崇毅科技";
    var name_rw ="崇毅科技(内部版)";
    var logourl = ymhost+"/runjs/logo_chongyi.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_chongyi.jpg?1";
}else if(jbpp=="ylhf"){
    var validation_url = "http://ylhf.yimigw.com";
    var names ="赢乐宏峰";
    var name_rw ="赢乐宏峰(内部版)";
    var logourl = ymhost+"/runjs/logo_hongfeng.jpg?1"
    var jiaocheng_h="auto";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_hongfeng.jpg?1";
}else if(jbpp=="ctkj"){
    var validation_url = "http://ctkj.yimigw.com";
    var names ="辰腾科技";
    var name_rw ="辰腾科技(内部版)";
    var logourl = ymhost+"/runjs/logo_ctkj.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_ctkj.jpg?1";
}else if(jbpp=="kdym"){
    var validation_url = "http://kdym.yimigw.com";
    var names ="蝌蚪有米";
    var name_rw ="蝌蚪有米(内部版)";
    var logourl = ymhost+"/runjs/logo_kdym.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_kdym.jpg?1";
}else if(jbpp=="doudou"){
    var validation_url = "http://doudou.yimigw.com";
    var names ="豆豆网络科技";
    var name_rw ="豆豆网络科技(内部版)";
    var logourl = ymhost+"/runjs/logo_doudou.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_doudou.jpg?1";
}else if(jbpp=="haoniu"){
    var validation_url = "http://haoniu.yimigw.com";
    var names ="好牛科技";
    var name_rw ="好牛科技(内部版)";
    var logourl = ymhost+"/runjs/logo_haoniu.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_haoniu.jpg?1";
}else if(jbpp=="feiyu"){
    var validation_url = "http://feiyu.yimigw.com";
    var names ="飞鱼阅读";
    var name_rw ="飞鱼阅读(内部版)";
    var logourl = ymhost+"/runjs/logo_feiyu.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_feiyu.jpg?1";
}else if(jbpp=="huiyou"){
    var validation_url = "http://huiyou.yimigw.com";
    var names ="惠优科技";
    var name_rw ="惠优科技(内部版)";
    var logourl = ymhost+"/runjs/logo_huiyou.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_huiyou.jpg?1";
}else if(jbpp=="xmzb"){
    var validation_url = "http://m.wkukeji.com";
    var names ="小米赚呗";
    var name_rw ="小米赚呗(内部版)";
    var logourl = ymhost+"/runjs/logo_xmzb.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_xmzb.jpg?1";
}else if(jbpp=="shengxian"){
    var validation_url = "http://shengxian.yimigw.com";
    var names ="盛贤科技";
    var name_rw ="盛贤科技(内部版)";
    var logourl = ymhost+"/runjs/logo_shengxian.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_shengxian.jpg?1";
}else if(jbpp=="yiying"){
    var validation_url = "http://yiying.yimigw.com";
    var names ="亿盈科技";
    var name_rw ="亿盈科技(内部版)";
    var logourl = ymhost+"/runjs/logo_yiying.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_yiying.jpg?1";
}else if(jbpp=="make"){
    var validation_url = "http://make.yimigw.com";
    var names ="妈可AI智能阅读";
    var name_rw ="妈可阅读(内部版)";
    var logourl = ymhost+"/runjs/logo_make.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_make.jpg?1";
}else if(jbpp=="suge"){
    var validation_url = "http://suge.yimigw.com";
    var names ="苏格AI智能阅读";
    var name_rw ="苏格阅读(内部版)";
    var logourl = ymhost+"/runjs/logo_suge.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_suge.jpg?1";
}else if(jbpp=="dingdang"){
    var validation_url = "http://dingdang.yimigw.com";
    var names ="叮当AI智能阅读";
    var name_rw ="叮当阅读(内部版)";
    var logourl = ymhost+"/runjs/logo_dingdang.jpg?1"
    var jiaocheng_h="0";
    var product_id="3";
    console_png = "http://abc.yimigw.com/runjs/console_dingdang.jpg?1";
}


/*赋值变量*/
var downpng = ymhost+"/runjs/down.png";
var logo = storages.create("logo");
var name = storages.create("name");
name.put("name",names);
logo.put("src",logourl);

// 94app地址
var  URL = "http://47.115.18.248/";
var URL2 ="http://47.115.18.248/h8/pageController.do?baseinfo";

var cookieManager = android.webkit.CookieManager.getInstance();
// 界面常量
const STORAGES_FILE_NAME = "hzConfigData",
    PACKAGE_NAME = "com.haozhuan.script",
    COLOR = "#009688",
    TEXT_SIZE = "12sp",
    TEXT_COLOR = "black",
    INPUT_TEXT_COLOR = "#0000FF";

// 默认配置
var default_conf = {
    packageName: PACKAGE_NAME,
    //version: VERSION,
    debug:false,
    dyUrl: "",
    token:"",
    doDyLike: true,
    doDyFocus: true,
    doQDyLike: false,
    doQDyFocus: false,
    doHsLike: true,
    doHsFocus: true,
    doKsLike: false,
     doKsFocus: true,
     doNewsFocus:false,
    bringBefore: false,
    HsAutoChange:false,
    DyAutoChange:false,
    bringOngoing: false,
    beforeVideoNum1: "1",
    beforeVideoNum2: "3",
    beforeVideoTime1: "2",
    beforeVideoTime2: "15",
    quickTask:1,
    ongoingVideoNum1: "1",
    ongoingVideoNum2: "2",
    ongoingVideoTime1: "2",
    ongoingVideoTime2: "15",
    restartByFinishNum1: "20",
    restartByFinishNum2: "30",
    taskInterval: "3",
    stopByFailNum: "20",
    stopByFinishNum: "1500",

};

//加载本地配置
var sto = storages.create(STORAGES_FILE_NAME);

http_get("hzServer.js",ymhost+"/runjs/hzServer.js");
var hzServer = require("/sdcard/cloud/hzServer.js");

http_get("hz94.js",ymhost+"/runjs/hz94.js");
var hz94 = require("/sdcard/cloud/hz94.js");

http_get("Global.js",ymhost+"/runjs/Global.js");
var global = require("/sdcard/cloud/Global.js");

var config = sto.get("config", default_conf);

for (var key in default_conf) {
    if (config[key] == undefined) {
        config[key] = default_conf[key];
    }
}

if(config.ip)
{
    URL=config.ip;
}
else
{
    config.ip=URL;
}
hz94.host=URL;


// 更新配置
function updateConfig() {

    config.cookieStr = cookieManager.getCookie(URL);
    config.androidVersion = parseFloat(device.release);
    config.doQDyLike = ui.doQDyLike.checked;
    config.doQDyFocus = ui.doQDyFocus.checked;
    config.doDyLike = ui.doDyLike.checked;
    config.doDyFocus = ui.doDyFocus.checked;
    config.doHsLike = ui.doHsLike.checked;
    config.doHsFocus = ui.doHsFocus.checked;
    config.doKsFocus=ui.doKsFocus.checked;
    //config.debug=ui.debug.checked;
   // config.doKsLike=ui.doKsLike.checked;
   config.doKsLike=false;
   config.doNewsFocus = false
    config.bringBefore = ui.bringBefore.checked;
    config.HsAutoChange = ui.HsAutoChange.checked;
    config.DyAutoChange=ui.DyAutoChange.checked;
    config.bringOngoing = ui.bringOngoing.checked;
    config.quickTask = ui.stableMode.checked?0:(ui.midmode.checked?1:ui.quickMod.checked?2:3);
    config.beforeVideoNum1 = ui.beforeVideoNum1.getText().toString();
    config.beforeVideoNum2 = ui.beforeVideoNum2.getText().toString();
    config.beforeVideoTime1 = ui.beforeVideoTime1.getText().toString();
    config.beforeVideoTime2 = ui.beforeVideoTime2.getText().toString();
    config.ongoingVideoNum1 = ui.ongoingVideoNum1.getText().toString();
    config.ongoingVideoNum2 = ui.ongoingVideoNum2.getText().toString();
    config.ongoingVideoTime1 = ui.ongoingVideoTime1.getText().toString();
    config.ongoingVideoTime2 = ui.ongoingVideoTime2.getText().toString();
    // config.restartByFinishNum1 = ui.restartByFinishNum1.getText().toString();
    // config.restartByFinishNum2 = ui.restartByFinishNum2.getText().toString();
    config.taskInterval = ui.taskInterval.getText().toString();
    config.stopByFailNum = ui.stopByFailNum.getText().toString();
    config.stopByFinishNum = ui.stopByFinishNum.getText().toString();

    for (var key in config) {
        if (typeof (config[key]) == "string" && config[key] == "") {
            config[key] = default_conf[key];
        }
    }
    sto.put("config", config);
}
function saveConfig()
{
    sto.put("config", config); 
}
// 加载视图
if(jbpp=="lrkj"){
    var my_color = "#48b498";
}else{
    var my_color = "#FF4FB3FF";
}

ui.statusBarColor(my_color);
ui.layout(
    <drawer id="drawer">
        <vertical h="*" gravity="center">
            <appbar>
                <toolbar bg="{{my_color}}" id="toolbar" title={names} size="16" h="36" >
                    <button bg="{{my_color}}" id="BtnExit" layout_gravity="right" textColor="#ffffff" text="离开" style="Widget.AppCompat.Button.Borderless.Colored" w="auto" />
                    <button bg="{{my_color}}" id="help" layout_gravity="right" textColor="#ffffff" text="使用教程" h={jiaocheng_h} style="Widget.AppCompat.Button.Borderless.Colored" w="auto" />
                </toolbar>
                <tabs id="tabs" size="14" h="28" bg="{{my_color}}" tabIndicatorColor="#FFFFFF"/>
                <vertical id = "logo" gravity="center" bg="#ffffff" w="*" h="132">
                    <img w="*" h="*" src ={logo.get('src',[""])}  scaleType="fitXY"/>
                </vertical>

                <button id="Run_Btn" text="点击开始运行[音量-停止运行]" tag="ScriptTag" color="#ffffff" bg="{{my_color}}" foreground="?selectableItemBackground"/>
            </appbar>

            
            <viewpager h="*" id="pager">
                    <frame>
                        <card w="*" h="*" margin="5" cardCornerRadius="6dp">  
                        <ScrollView layout_width="match_parent"  layout_gravity="center">
                            <vertical>

                                <horizontal layout_width="match_parent" margin="12 5"  elevation="1dp">
                                    <text text="注册码:" gravity="left" textColor="#444444" size="12sp" />
                                    <input id="jhm" gravity="left"  onfocus="this.blur();" hint = "请输入注册码" text={storage.get("jhm",[""])} textSize="12sp" textSizeHint = "12sp"/>
                                    <button id="code_check" text="激活/查询" h="28" w="60" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <button id="rizhi" text="日志" h="28" w="60" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                </horizontal>

                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent" margin="12 5"  elevation="1dp">
                                <text text="联众打码账号:" textColor="#444444" size="12sp"/>
                                <text text="密码:" textColor="#444444" size="12sp"/>
                                <input id="联众账号" hint = "请输入账号" text={storage.get("联众账号","")} textColor="#444444" w="auto" textSize="12sp" textSizeHint = "12sp"/>
                                <input id="联众密码" hint = "请输入密码" text={storage.get("联众密码","")} textColor="#444444" w="auto" textSize="12sp" textSizeHint = "12sp"/>
                                </horizontal>

                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent"   margin="5 5">
                                    <Switch id="yjxx" checked ={storage.get("yjxx",[true])}/>
                                    <text text="夜间休息时间,从" gravity="left" textSize="12sp" />
                                    <input id="yjxx1" gravity="left" text={storage.get("yjxx1",[2])}  textSize="15sp" textSizeHint = "15sp"/>
                                    <text text="点开始到" gravity="left" textSize="12sp" />
                                    <input id="yjxx2" gravity="left" text ={storage.get("yjxx2",[6])}  textSize="15sp" textSizeHint = "15sp"/>
                                    <text text="点结束" gravity="left" textSize="12sp"/>
                                </horizontal>
                                
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                
                                <horizontal layout_width="match_parent"    margin="5 5">
                                    <Switch id="tdsd" checked ={storage.get("tdsd",[false])}/>
                                    <text text="从" gravity="left" textSize="12sp" />
                                    <input id="tdsd1" gravity="left" text={storage.get("tdsd1",[14])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="点到" gravity="left" textSize="12sp" />
                                    <input id="tdsd2" gravity="left" text ={storage.get("tdsd2",[18])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="点时间段内只运行" gravity="left" textSize="12sp"/>
                                    <spinner id="tdsdxz" entries={平台选择} textSize="10sp" textColor="#F68D06"  gravity="left"/>
                                </horizontal>
                                
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent"  margin="5 5">
                                    <Switch id="dsdt2" checked ={storage.get("dsdt2",[false])}/>
                                    <text text="从" gravity="left" textSize="12sp" />
                                    <input id="dsdt11" gravity="left" text={storage.get("dsdt11",[14])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="点到" gravity="left" textSize="12sp" />
                                    <input id="dsdt22" gravity="left" text ={storage.get("dsdt22",[18])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="点时间段内只运行" gravity="left" textSize="12sp"/>
                                    <spinner id="dsdt2xz" entries={平台选择} textSize="10sp" textColor="#F68D06"  gravity="left"/>
                                </horizontal>

                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal gravity="center_horizontal" margin="0 5">


                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                    <button id="一键勾选" text="一键勾选或取消" h="40" w="70" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                    <button id="多开下载" text="双开助手"  h="40" w="50" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                    <button id="应用宝下载" text="应用宝"  h="40" w="40" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                    <button id="Download一键下载" text="一键下载/更新" h="40" w="0" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                    <button id="猎豹清理" text="猎豹清理" h="40" w="50" textSize="8sp" padding="0 2" margin="2 0" textColor="#FFFFFF" bg="{{my_color}}" style="Widget.AppCompat.Button.Borderless.Colored"/>
                                    <text bg="#f2f2f2" w="1" h="40" text=" "/>
                                </horizontal>
                            </vertical>
                            </ScrollView>
                        </card>
                    </frame>

                    <frame>
                        <card id="card2" w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                            <ScrollView layout_width="match_parent"  layout_gravity="center">
                                <vertical>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="jkd" checked ={storage.get("jkd",[false])} h="60"/>
                                    <text text="1.聚看点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="jkd1" gravity="left" text={storage.get("jkd1",[150])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="jkd2" gravity="left" text={storage.get("jkd2",[0])} textSize="12sp" textSizeHint = "12sp"/>

                                    <text text=" 版本号:" gravity="left" id = "fff" textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "jkdbb" textSize="10" lines="1" width="30"/>

                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download1" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>

                                </horizontal>

                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="wlkk" checked ={storage.get("wlkk",[false])}  h="60"/>
                                    <text text="2.微鲤" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="wlkk1" gravity="left" text={storage.get("wlkk1",[100])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="  小视频" gravity="left" textSize="12" />
                                    <input id="wlkk2" gravity="left" text={storage.get("wlkk2",[10])} textSize="12sp" textSizeHint = "12sp"/>

                                    <text text=" 版本号:" gravity="left" id = "fff" textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "wlkkbb" textSize="10" lines="1" width="30"/>
                                    
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download2" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="sb" checked ={storage.get("sb",[false])}  h="60" visibility="{{this.checkable ? 'visible' : 'gone'}}"/>
                                    <text text="3.刷宝" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="sb2" gravity="left" text={storage.get("sb2",[50])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff" textSize="10"/>
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "sbbb" textSize="10" />

                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download4" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="bbsp" checked ={storage.get("bbsp",[false])} h="60"/>
                                    <text text="4.波波视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="bbsp2" gravity="left" text={storage.get("bbsp2",[90])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "bbspbb"textSize="10" />

                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download5" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="qls" checked ={storage.get("qls",[false])}  h="60"/>
                                    <text text="5.趣铃声" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="qls2" gravity="left" text={storage.get("qls2",[200])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "qlsbb"textSize="10" lines="1" width="30"/>

                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download6" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="sdhz" checked ={storage.get("sdhz",[false])}  h="60"/>
                                    <text text="6.闪电盒子" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="sdhz1" gravity="left" text={storage.get("sdhz1",[70])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="  购物" gravity="left" textSize="12" />
                                    <input id="sdhz2" gravity="left" text={storage.get("sdhz2",[40])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "sdhzbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download7" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent" h="0" w="0">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="kqllq" checked ="false"  h="60"/>
                                    <text text="8.快7浏览器" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="kqllq2" gravity="left" text={storage.get("kqllq2",[300])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "kqllqbb"textSize="10" />

                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download11" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>



                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="hbhz" checked ={storage.get("hbhz",[false])}  h="60"/>
                                    <text text="9.红包盒子" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="hbhz1" gravity="left" text={storage.get("hbhz1",[40])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="hbhz2" gravity="left" text={storage.get("hbhz2",[20])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "hbhzbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download13" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="hs" checked ={storage.get("hs",[false])}  h="60"/>
                                    <text text="10.火山极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="hs2" gravity="left" text={storage.get("hs2",[150])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "hsbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download14" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ks" checked ={storage.get("ks",[false])}  h="60"/>
                                    <text text="11.快手极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ks2" gravity="left" text={storage.get("ks2",[350])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ksbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download15" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="xk" checked ={storage.get("xk",[false])}  h="60"/>
                                    <text text="12.想看" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="xk1" gravity="left" text={storage.get("xk1",[140])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="xk2" gravity="left" text={storage.get("xk2",[50])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "xkbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download16" h="28" w="28" marginRight="10" layout_gravity="right" style="Widget.AppCompat.Button.Borderless.Colored" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="kkd" checked ={storage.get("kkd",[false])}  h="60"/>
                                    <text text="13.快看点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="kkd1" gravity="left" text={storage.get("kkd1",[160])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="kkd2" gravity="left" text={storage.get("kkd2",[0])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "kkdbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download17" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="dy" checked ={storage.get("dy",[false])}  h="60"/>
                                    <text text="14.抖音极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="dy2" gravity="left" text={storage.get("dy2",[150])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "dybb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download21" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="qtt" checked ={storage.get("qtt",[false])}  h="60"/>
                                    <text text="15.趣头条" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="qtt1" gravity="left" text={storage.get("qtt1",[60])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小视频" gravity="left" textSize="12" />
                                    <input id="qtt2" gravity="left" text={storage.get("qtt2",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "qttbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download22" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ddxw" checked ={storage.get("ddxw",[false])}  h="60"/>
                                    <text text="16.点点新闻" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="ddxw1" gravity="left" text={storage.get("ddxw1",[35])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ddxw2" gravity="left" text={storage.get("ddxw2",[5])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ddxwbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download23" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ylkk" checked ={storage.get("ylkk",[false])}  h="60"/>
                                    <text text="17.有料看看" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="ylkk1" gravity="left" text={storage.get("ylkk1",[90])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ylkk2" gravity="left" text={storage.get("ylkk2",[0])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ylkkbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download24" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="cdsp" checked ={storage.get("cdsp",[false])}  h="60"/>
                                    <text text="18.彩蛋视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="cdsp2" gravity="left" text={storage.get("cdsp2",[200])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "cdspbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download25" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="hhspjsb" checked ={storage.get("hhspjsb",[false])}  h="60"/>
                                    <text text="19.火火视频极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="hhspjsb2" gravity="left" text={storage.get("hhspjsb2",[100])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "hhspjsbbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download26" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                
                                <horizontal layout_width="match_parent"  h="0">
                                <horizontal layout_width="match_parent" gravity="right">
                                <text text="不看广告(请勿随便勾选)"  gravity="center" textSize="8"/>
                                <Switch id="bkgg"  gravity="center" checked ={storage.get("bkgg",[false])}  h="60"/>
                                </horizontal>
                                </horizontal>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="jdjsb" checked ={storage.get("jdjsb",[false])}  h="60"/>
                                    <text text="20.京东极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="jdjsb2" gravity="left" text={storage.get("jdjsb2",[120])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "jdjsbbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download27" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="zqxsp" checked ={storage.get("zqxsp",[false])}  h="60"/>
                                    <text text="22.赚钱小视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="zqxsp2" gravity="left" text={storage.get("zqxsp2",[150])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "zqxspbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download29" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="mtzd" checked ={storage.get("mtzd",[false])}  h="60"/>
                                    <text text="23.每天赚点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="mtzd2" gravity="left" text={storage.get("mtzd2",[80])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "mtzdbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download31" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ttaql" checked ={storage.get("ttaql",[false])}  h="60"/>
                                    <text text="24.天天爱清理" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ttaql2" gravity="left" text={storage.get("ttaql2",[300])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ttaqlbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download36" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="xzzq" checked ={storage.get("xzzq",[false])}  h="60"/>
                                    <text text="25.小啄赚钱" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="xzzq2" gravity="left" text={storage.get("xzzq2",[260])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "xzzqbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download42" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ykjsb" checked ={storage.get("ykjsb",[false])}  h="60"/>
                                    <text text="26.映客极速版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="直播" gravity="left" textSize="12" />
                                    <input id="ykjsb2" gravity="left" text={storage.get("ykjsb2",[35])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ykjsbbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img id="Download43" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ddtt" checked ={storage.get("ddtt",[false])}  h="60"/>
                                    <text text="27.点点头条" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ddtt2" gravity="left" text={storage.get("ddtt2",[300])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ddttbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download44" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ky" checked ={storage.get("ky",[false])}  h="60"/>
                                    <text text="28.快音" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="ky2" gravity="left" text={storage.get("ky2",[100])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "kybb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download45" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="asjz" checked ={storage.get("asjz",[false])}  h="60"/>
                                    <text text="29.爱上兼职" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="asjz2" gravity="left" text={storage.get("asjz2",[80])} textSize="12sp" textSizeHint = "12sp"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download48" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                
                                <horizontal layout_width="match_parent" h="0">
                                <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                <text text="" gravity="left" textColor="#4fb3ff" id = "asjzbb"textSize="10" />
                                <horizontal layout_width="match_parent" gravity="right">
                                <text text="不看广告(请勿随便勾选)"  gravity="center" textSize="8"/>
                                <Switch id="bkgg2"  gravity="center" checked ={storage.get("bkgg2",[false])}  h="60"/>
                                </horizontal>
                                </horizontal>
                                
                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="wlkd" checked ={storage.get("wlkd",[false])}  h="60"/>
                                    <text text="30.文旅看点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="wlkd1" gravity="left" text={storage.get("wlkd1",[130])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="wlkd2" gravity="left" text={storage.get("wlkd2",[0])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "wlkdbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download59" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="lzls" checked ={storage.get("lzls",[false])}  h="60"/>
                                    <text text="31.荔枝铃声" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="lzls2" gravity="left" text={storage.get("lzls2",[200])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "lzlsbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download62" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="zksp" checked ={storage.get("zksp",[false])}  h="60"/>
                                    <text text="32.追看视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="zksp2" gravity="left" text={storage.get("zksp2",[200])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "zkspbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download63" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />
                                    <Switch id="mykd" checked ={storage.get("mykd",[false])}  h="60"/>
                                    <text text="33.蚂蚁看点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="mykd1" gravity="left" text={storage.get("mykd1",[80])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小视频" gravity="left" textSize="12" />
                                    <input id="mykd2" gravity="left" text={storage.get("mykd2",[15])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "mykdbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download64" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="xch" checked ={storage.get("xch",[false])}  h="60"/>
                                    <text text="34.小吃货短视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="xch1" gravity="left" text={storage.get("xch1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "xchbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download76" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="yydsp" checked ={storage.get("yydsp",[false])}  h="60"/>
                                    <text text="35.有颜短视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="yydsp1" gravity="left" text={storage.get("yydsp1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "yydspbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download77" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="bxtt" checked ={storage.get("bxtt",[false])}  h="60"/>
                                    <text text="36.百姓头条" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="bxtt1" gravity="left" text={storage.get("bxtt1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "bxttbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download78" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="zqkd" checked ={storage.get("zqkd",[false])}  h="60"/>
                                    <text text="37.中青看点" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <input id="zqkd1" gravity="left" text={storage.get("zqkd1",[60])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="视频" gravity="left" textSize="12" />
                                    <input id="zqkd2" gravity="left" text={storage.get("zqkd2",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "zqkdbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download79" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="tangdou" checked ={storage.get("tangdou",[false])}  h="60"/>
                                    <text text="38.糖豆" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="tangdou1" gravity="left" text={storage.get("tangdou1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "tangdoubb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download80" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ttdsp" checked ={storage.get("ttdsp",[false])}  h="60"/>
                                    <text text="40.天天短视频" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="ttdsp1" gravity="left" text={storage.get("ttdsp1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ttdspbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download82" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="qktx" checked ={storage.get("qktx",[false])}  h="60"/>
                                    <text text="41.趣看天下" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="qktx1" gravity="left" text={storage.get("qktx1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "qktxbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download83" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="weishi" checked ={storage.get("weishi",[false])}  h="60"/>
                                    <text text="42.微视" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="weishi1" gravity="left" text={storage.get("weishi1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "weishibb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download84" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="changchu" checked ={storage.get("changchu",[false])}  h="60"/>
                                    <text text="43.畅初小说" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="时长" gravity="left" textSize="12" />
                                    <input id="changchu1" gravity="left" text={storage.get("changchu1",[30])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="分钟" gravity="left" textSize="10" />

                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "changchubb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download88" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                </vertical>
                            </ScrollView>
                        </card>
                    </frame>

                    <frame>
                        <card id="card3" w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                            <ScrollView layout_width="match_parent"  layout_gravity="center">
                                <vertical>
                                
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="0" text=" "/>
                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="pddhb" checked ={storage.get("pddhb",[false])}  h="60"/>
                                    <text text="1.拼多多" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="运行时长" gravity="left" textSize="12" />
                                    <input id="pddhb1" gravity="left" text={storage.get("pddhb1",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小时 版本号:" gravity="left" textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "pddhbbb" textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download73" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" " id="pddhbfg"/>
                                <scroll padding="0" h="auto"  bg="{{my_color}}" id="pddhbsz">
                                <vertical marginLeft="10"  h="650" bg="#ffffff">
                                    <card w="*" h="auto"
                                        cardElevation="2dp" gravity="center_vertical" marginBottom="5dp" >
                                        <vertical >
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <text w="*" h="30" text="全局设置" textSize="12sp" textStyle="bold" bg="#ffffff" textColor="#666666" padding="15 5" gravity="center" layout_gravity="right|center" />
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <vertical padding="8 0">
                                                <horizontal>
                                                    <checkbox id="拼多多红包时间限制" checked={本地存储.get("拼多多红包时间限制",true)} text="多币红包时间限制:" textColor="#000000" textSize="12sp" />
                                                    <input id="拼多多红包上限时间" text={本地存储.get("拼多多红包上限时间",180)} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="等待超时则跳过(选填)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                            </vertical>
                                        </vertical>
                                    </card>

                                </vertical>
                                </scroll>


                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="dyhb" checked ={storage.get("dyhb",[false])}  h="60"/>
                                    <text text="2.抖音红包" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="运行时长" gravity="left" textSize="12" />
                                    <input id="dyhb1" gravity="left" text={storage.get("dyhb1",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小时 版本号:" gravity="left" textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "dyhbbb" textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download_dy" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <scroll padding="0" h="auto"  bg="{{my_color}}" id="dyhbsz">
                                <vertical marginLeft="10"  h="650" bg="#ffffff">
                                    <card w="*" h="auto"
                                        cardElevation="2dp" gravity="center_vertical">
                                        <vertical >
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <text w="*" h="30" text="全局设置" textSize="12sp" textStyle="bold" bg="#ffffff" textColor="#666666" padding="15 5" gravity="center" layout_gravity="right|center" />
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <vertical padding="8 0">
                                                <horizontal>
                                                    <checkbox id="抖音是否抢红包" checked={本地存储.get("抖音是否抢红包",true)} textColor="#000000" textSize="12sp" />
                                                    <text text="红包:" textColor="#000000" textSize="12sp" />

                                                    <checkbox id="抖音红包时间限制" textColor="#000000" textSize="12sp" checked="true" w="0" h="0"/>
                                                    <input id="抖音红包最大等待时长" text={本地存储.get("抖音红包最大等待时长",120)} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="等待超时则跳过(必填)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                                <horizontal>
                                                    <checkbox id="抖音是否抢福袋" checked={本地存储.get("抖音是否抢福袋",true)} textColor="#000000" textSize="12sp" />
                                                    <text text="福袋:" textColor="#000000" textSize="12sp" />

                                                    <checkbox id="抖音福袋时间限制" textColor="#000000" textSize="12sp" checked="true" w="0" h="0"/>
                                                    <input id="抖音福袋最大等待时长" text={本地存储.get("抖音福袋最大等待时长",300)} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="等待超时则跳过(必填)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                                <horizontal>
                                                    <checkbox id="抖音狂暴模式" checked={本地存储.get("抖音狂暴模式",true)} textColor="#000000" textSize="12sp" />
                                                    <text text="极速模式" textColor="#000000" textSize="12sp" />

                                                    <checkbox id="抖音付费福袋" checked={本地存储.get("抖音付费福袋",false)} textColor="#000000" textSize="12sp" />
                                                    <text text="参与付费福袋" textColor="#000000" textSize="12sp" />
                                                    <text text="付费福袋需支付1抖币" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                            </vertical>
                                        </vertical>
                                    </card>

                                </vertical>
                                </scroll>

                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="jrtthb" checked ={storage.get("jrtthb",[false])}  h="60"/>
                                    <text text="3.今日头条" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="单号时长" gravity="left" textSize="12" />
                                    <input id="jrtthb1" gravity="left" text={storage.get("jrtthb1",[3])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小时 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "jrttbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download74" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" " id="jrttfg"/>
                                <scroll padding="0" h="auto"  bg="{{my_color}}" id="jrttsz">
                                <vertical marginLeft="10"  h="650" bg="#ffffff">
                                    <card w="*" h="auto"
                                        cardElevation="2dp" gravity="center_vertical" marginBottom="5dp">
                                        <vertical >
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <Switch w="*" h="30"  id="抢红包" text="                《红包》" textSize="12sp" textStyle="bold" bg="#ffffff" textColor="#666666" checked={storage.get("抢红包",[true])}  padding="15 5" gravity="center" layout_gravity="right|center" />
                                            <View bg="#F3F3F3" h="2" w="*"/>

                                            <vertical padding="8 0"  >
                                                <horizontal gravity="left">
                                                    <text text="等待开奖时间" textColor="#000000" textSize="12sp" />
                                                    <input id="红包上限sj" text={本地存储.get("红包上限sj","120")} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="红包等待时间限制(选填)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                                <horizontal>
                                                    <text text="找寻红包时间:" textColor="#000000" textSize="12sp" />
                                                    <input id="找寻红包sj" text={本地存储.get("找寻红包sj",4)} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="直播寻找红包时间(如无必要默认即可)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                            </vertical>

                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <Switch w="*" h="30"  id="参与福袋" text="                《福袋》" textSize="12sp" textStyle="bold" bg="#ffffff" checked={storage.get("参与福袋",[true])} textColor="#666666" padding="15 5" gravity="center" layout_gravity="right|center" />
                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <vertical padding="8 0"  >


                                                <horizontal>
                                                    <checkbox id="参与收费福袋" text="参与收费福袋" checked="false" h="0" textColor="#000000" textSize="12sp" />
                                                    <text text="福袋只参与免费的,收费则不参与(必选)" textColor="#4F4F4F" textSize="10sp" />
                                                </horizontal>

                                                <horizontal>
                                                    <checkbox id="快速寻找" text="是否快速寻找" checked={本地存储.get("快速寻找",[false])} textColor="#000000" textSize="12sp" />
                                                    <text text="(夜间福袋较少,可以选择快速寻找)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>

                                                <horizontal>
                                                    <text text="福袋上限时间:" textColor="#000000" textSize="12sp" />
                                                    <input id="福袋上限sj" text={本地存储.get("福袋上限sj",[240])} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="福袋等待时间限制(选填)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>


                                                <horizontal>
                                                    <text text="找福袋时间:" textColor="#000000" textSize="12sp" />
                                                    <input id="找寻福袋sj" text={本地存储.get("找寻福袋sj",[4])} textSize="12sp" textColorHint="#4F4F4F" inputType="number" />
                                                    <text text="秒" textColor="#000000" textSize="12sp" />
                                                    <text text="直播寻找福袋时间(如无必要默认即可)" textColor="#4F4F4F" textSize="10sp" marginLeft="10" />
                                                </horizontal>
                                            </vertical>

                                            <View bg="#F3F3F3" h="2" w="*"/>
                                            <Switch w="*" h="30"  id="头条是否多开模式" text="                《是否多开》" textSize="12sp" textStyle="bold" bg="#ffffff" checked={storage.get("头条是否多开模式",[false])} textColor="#666666" padding="15 5" gravity="center" layout_gravity="right|center" />
                                            <View bg="#F3F3F3" h="2" w="*"/>

                                        </vertical>
                                    </card>
                                </vertical>
                            </scroll>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="yingke" checked ={本地存储.get("yingke",[false])}  h="60"/>
                                    <text text="3.映客直播" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="单号时长" gravity="left" textSize="12" />
                                    <input id="yingke1" gravity="left" text={本地存储.get("yingke1",[3])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text="小时 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "yingkebb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download87" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="fqmfxs" checked ={storage.get("fqmfxs",[false])}  h="60"/>
                                    <text text="4.番茄免费小说" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="fqmfxs1" gravity="left" text={storage.get("fqmfxs1",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "fqmfxsbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download46" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent" h="0">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="tys" checked ="false"  h="60"/>
                                    <text text="5.淘元素" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="tys1" gravity="left" text={storage.get("tys1",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "tysbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download52" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="kgyydzb" checked ={storage.get("kgyydzb",[false])}  h="60"/>
                                    <text text="5.酷狗音乐大字版" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="kgyydzb2" gravity="left" text={storage.get("kgyydzb2",[1])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "kgyydzbbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download53" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent" h="0">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="lz" checked ="false"  h="60"/>
                                    <text text="7.绿洲" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="lz2" gravity="left" text={storage.get("lz2",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "lzbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download57" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="kgeg" checked ={storage.get("kgeg",[false])}  h="60"/>
                                    <text text="6.酷狗儿歌" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="kgeg2" gravity="left" text={storage.get("kgeg2",[1])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "kgegbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download65" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="bsxq" checked ={storage.get("bsxq",[false])}  h="60"/>
                                    <text text="7.宝石星球" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="bsxq2" gravity="left" text={storage.get("bsxq2",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "bsxqbb"textSize="10" lines="1" width="40"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download67" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ysm" checked ={storage.get("ysm",[false])}  h="60"/>
                                    <text text="8.云扫码" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <text text="(微信文章)" gravity="left" textSize="11" />
                                    <input id="ysm2" gravity="left" text={storage.get("ysm2",[50])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ysmbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="8">
                                    <button id="Download66" bg="{{my_color}}" color="#ffffff" text="复制" h="40" w="50" textSize="10sp" gravity="center"/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="ddgl" checked ={storage.get("ddgl",[false])}  h="60"/>
                                    <text text="9.多多果林" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="ddgl2" gravity="left" text={storage.get("ddgl2",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text id="ddglyq" text="邀请码" gravity="left" textSize="12" />
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "ddglbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download71" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent" h="0">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="hz" checked ="false"  h="60"/>
                                    <text text="11.花赚" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="进入次数" gravity="left" textSize="12" />
                                    <input id="hz2" gravity="left" text={storage.get("hz2",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text  id="hzyq" text="邀请码" gravity="left" textSize="12" />
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "hzbb"textSize="10" lines="1" width="30"/>
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download72" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                <horizontal layout_width="match_parent">
                                    <View bg="{{my_color}}" h="*" w="10" />  
                                    <Switch id="myb" checked ="false"  h="60"/>
                                    <text text="12.蚂蚁帮" gravity="left" textSize="14" textColor = "#f2c900" />
                                    <text text="文章" gravity="left" textSize="12" />
                                    <text text="(微信文章)" gravity="left" textSize="11" />
                                    <input id="myb2" gravity="left" text={storage.get("myb2",[60])} textSize="12sp" textSizeHint = "12sp"/>
                                    <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                    <text text="" gravity="left" textColor="#4fb3ff" id = "mybbb"textSize="10" />
                                    <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                        <img  id="Download68" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                    </horizontal>
                                </horizontal>
                                <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                </vertical>
                            </ScrollView>
                        </card>
                    </frame>

                    <frame>
                        <card id="card4" w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                            <ScrollView layout_width="match_parent"  layout_gravity="center">
                                <vertical>
                                        <horizontal gravity="center_vertical">
                                            <Switch id="run94" checked ={storage.get("run94",[false])}  h="auto"  gravity="left"/>
                                            <text text=                         {name_rw} gravity="center" textSize="14" textColor = "#f2c900" />
                                        </horizontal>


                                        <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                        <horizontal gravity="center_vertical">
                                                
                                            <vertical padding="10 8" h="auto" w="0" layout_weight="1" >

                                                <linear>
                                                    <checkbox id="doDyFocus" checked="{{config.doDyFocus == true}}" text="斗士关注" textSize="12sp"/>
                                                    <checkbox id="doDyLike" checked="{{config.doDyLike == true}}" text="斗士点赞" textSize="12sp"/>
                                                    <checkbox id="DyAutoChange" checked="{{config.DyAutoChange == true}}" text="斗士自动换号" textSize="12sp"/> 
                                                </linear>

                                                <linear>
                                                    <checkbox id="doQDyFocus" checked="{{config.doQDyFocus == true}}" text="斗士极速版关注" textSize="12sp"/>
                                                    <checkbox id="doQDyLike" checked="{{config.doQDyLike == true}}" text="斗士极速版点赞" textSize="12sp"/>
                                                </linear>

                                                <linear>
                                                    <checkbox id="doHsFocus" checked="{{config.doHsFocus == true}}" text="伙士关注" textSize="12sp"/>
                                                    <checkbox id="doHsLike" checked="{{config.doHsLike == true}}" text="伙士点赞" textSize="12sp"/>
                                                    <checkbox id="HsAutoChange" checked="{{config.HsAutoChange == true}}" text="伙士自动换号" textSize="12sp"/> 
                                                </linear>

                                                <linear>
                                                    <checkbox id="doKsFocus" checked="{{config.doKsFocus == true}}" text="筷子关注" textSize="12sp"/>
                                                </linear>
                                                
                                                <linear gravity="center">
                                                    <button text="邀请码" id="copy_yqm"  style="Widget.AppCompat.Button.Colored" w="auto" textColor="#FFFFFF" textSize="10sp"/>
                                                    <button id="showTaskSetting" text="显示设置" style="Widget.AppCompat.Button.Colored" w="auto" textColor="#FFFFFF" textSize="10sp"/>
                                                    <button id="wandoujiadown" text="豌豆荚" style="Widget.AppCompat.Button.Colored" w="auto" textColor="#FFFFFF" textSize="10sp" />
                                                    <button text="清理" id="removecookie"  style="Widget.AppCompat.Button.Colored" w="auto" textColor="#FFFFFF" textSize="10sp"/>
                                                </linear>
                                                <button text="" id="login94"  style="Widget.AppCompat.Button.Colored" w="*"/>

                                                <vertical>
                                                    <horizontal>
                                                            <webview id="web" margin="10 10 10 10" />
                                                    </horizontal>
                                                </vertical>
                                            </vertical>
                                        </horizontal>

                                        <card id="taskSetting" w="*" h="auto" margin="5 5" cardCornerRadius="2dp"
                                    cardElevation="1dp" foreground="?selectableItemBackground">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                           
                                            <RadioGroup id="taskMode" >
                                                
                                                <RadioButton id="stableMode" checked="{{config.quickTask == 0}}" text="稳定模式"  />
                                                <RadioButton id="midmode" checked="{{config.quickTask == 1}}" text="中速模式"   />
                                                <RadioButton id="quickMod" checked="{{config.quickTask == 2}}" text="快速模式"   />
                                                <RadioButton id="searchMod" checked="{{config.quickTask == 3}}" text="搜索模式"  />
                                             </RadioGroup>

                                             <linear>
                                                <checkbox id="bringBefore" checked="{{config.bringBefore == true}}" text="开始前养号" />
                                                <checkbox id="bringOngoing" checked="{{config.bringOngoing == true}}" text="任务中养号" />
                                                <checkbox id="debug" checked="{{config.debug == true}}" text="调试日志" />
                                            </linear>
                                            <horizontal>
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="任务前:视频" />
                                                <input id="beforeVideoNum1" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.beforeVideoNum1}}" hint="{{default_conf.beforeVideoNum1}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="到" />
                                                <input id="beforeVideoNum2" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.beforeVideoNum2}}" hint="{{default_conf.beforeVideoNum2}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="个" />

                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text=" 观看" />
                                                <input id="beforeVideoTime1" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.beforeVideoTime1}}" hint="{{default_conf.beforeVideoTime1}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="到" />
                                                <input id="beforeVideoTime2" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.beforeVideoTime2}}" hint="{{default_conf.beforeVideoTime2}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="秒" />
                                            </horizontal>

                                            <horizontal>
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="任务中:视频" />
                                                <input id="ongoingVideoNum1" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.ongoingVideoNum1}}" hint="{{default_conf.ongoingVideoNum1}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="到" />
                                                <input id="ongoingVideoNum2" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.ongoingVideoNum2}}" hint="{{default_conf.ongoingVideoNum2}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="个" />

                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text=" 观看" />
                                                <input id="ongoingVideoTime1" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.ongoingVideoTime1}}" hint="{{default_conf.ongoingVideoTime1}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="到" />
                                                <input id="ongoingVideoTime2" w="auto" minWidth="40" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.ongoingVideoTime2}}" hint="{{default_conf.ongoingVideoTime2}}" />
                                                <text textSize="{{TEXT_SIZE}}" textColor="{{TEXT_COLOR}}" text="秒" />
                                            </horizontal>

                                  
                                            <horizontal>
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="任务页停留时间" />
                                                <input id="taskInterval" w="auto" minWidth="50" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.taskInterval}}" hint="{{default_conf.taskInterval}}" />
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="秒" />
                                            </horizontal>
                                            <horizontal>
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="连续失败" />
                                                <input id="stopByFailNum" w="auto" minWidth="50" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.stopByFailNum}}" hint="{{default_conf.stopByFailNum}}" />
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="个任务后停止运行" />
                                            </horizontal>
                                            <horizontal>
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="完成多少" />
                                                <input id="stopByFinishNum" w="auto" minWidth="50" textColor="{{INPUT_TEXT_COLOR}}" text="{{config.stopByFinishNum}}" hint="{{default_conf.stopByFinishNum}}" />
                                                <text textSize="{{TEXT_SIZE}}" w="auto" textColor="{{TEXT_COLOR}}" text="个停止" />
                                            </horizontal>

                                        </vertical>
                                    </horizontal>
                                </card>

                                    <text padding="10 20 30 40" bg="#f1f1f1" w="*" h="8sp" text=" "/>
                                    <text text="其他任务平台" gravity="center" textSize="14" textColor = "#f2c900" />
                                    <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                    
                                    <horizontal layout_width="match_parent">
                                        <View bg="{{my_color}}" h="*" w="10" />  
                                        <Switch id="zhuanyue" checked ={storage.get("zhuanyue",[false])}  h="60"/>
                                        <text text="2.58转阅任务" gravity="left" textSize="14" textColor = "#f2c900" />
                                        <text text="次数" gravity="left" textSize="11" />
                                        <input id="zhuanyue1" gravity="left" text={storage.get("zhuanyue1",[60])} textSize="12sp" textSizeHint = "12sp"/>
                                        <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                        <text text="" gravity="left" textColor="#4fb3ff" id = "zhuanyuebb" textSize="10" lines="1" width="30"/>
                                        <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                            <img  id="Download86" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src={downpng}/>
                                        </horizontal>
                                    </horizontal>
                                    <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" " id="zhuanyuefg"/>
                                    <scroll padding="0" h="auto"  bg="{{my_color}}" id="zhuanyuesz">
                                    <vertical marginLeft="10"  h="650" bg="#ffffff">
                                        <card w="*" h="auto"
                                            cardElevation="2dp" gravity="center_vertical" marginBottom="5dp" >
                                            <vertical >
                                                <View bg="#F3F3F3" h="2" w="*"/>
                                                <text w="*" h="30" text="全局设置" textSize="12sp" textStyle="bold" bg="#ffffff" textColor="#666666" padding="15 5" gravity="center" layout_gravity="right|center" />
                                                <View bg="#F3F3F3" h="2" w="*"/>
                                                <vertical padding="8 0">


                                                    <horizontal>
                                                        <text text="账号:" textColor="#000000" textSize="12sp" />
                                                        <input id="zhuanyue_username" text={storage.get("zhuanyue_username",[])} textSize="12sp" textColorHint="#4F4F4F"/>

                                                        <text text="密码:" textColor="#000000" marginLeft="10" textSize="12sp" />
                                                        <input id="zhuanyue_password" text={storage.get("zhuanyue_password",[])} textSize="12sp" textColorHint="#4F4F4F"/>

                                                        <text text="方案名称:" textColor="#000000" marginLeft="10" textSize="12sp" />
                                                        <input id="zhuanyue_fangan" text={storage.get("zhuanyue_fangan",['阅读'])} textSize="12sp" textColorHint="#4F4F4F"/>
                                                    </horizontal>

                                                    <horizontal gravity="center" marginBottom="10">
                                                        <button text="注册账号" id="注册账号"  style="Widget.AppCompat.Button.Colored" w="70" textColor="#FFFFFF" textSize="10sp"/>
                                                        <button text="账号中心" id="账号中心"  style="Widget.AppCompat.Button.Colored" w="70" textColor="#FFFFFF" textSize="10sp"/>
                                                        <button text="充值中心" id="充值中心"  style="Widget.AppCompat.Button.Colored" w="70" textColor="#FFFFFF" textSize="10sp"/>
                                                        <button text="设置方案" id="设置方案"  style="Widget.AppCompat.Button.Colored" w="70" textColor="#FFFFFF" textSize="10sp"/>
                                                    </horizontal>

                                                    <vertical>
                                                        <horizontal>
                                                                <webview id="web_zhuanyue" margin="0" h="auto"/>
                                                        </horizontal>
                                                    </vertical>

                                                </vertical>
                                            </vertical>
                                        </card>

                                    </vertical>
                                    </scroll>

                                    <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
                                    <horizontal layout_width="match_parent" h="0">
                                        <View bg="#00BFFF" h="*" w="10" />  
                                        <Switch id="wkzz" checked ={storage.get("wkzz",[false])}  h="60"/>
                                        <text text="5.微客众智" gravity="left" textSize="14" textColor = "#f2c900" />
                                        <text text="D音进入" gravity="left" textSize="12" />
                                        <input id="wkzz1" gravity="left" text={storage.get("wkzz1",[4])} textSize="12sp" textSizeHint = "12sp"/>
                                        <text text="K手进入" gravity="left" textSize="12" />
                                        <input id="wkzz2" gravity="left" text={storage.get("wkzz2",[1])} textSize="12sp" textSizeHint = "12sp"/>
                                        <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                            <img  id="Download35" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src="http://gm.z8s.com/runjs/down.png"/>
                                        </horizontal>
                                    </horizontal>
                                    <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                    <horizontal layout_width="match_parent">
                                        <View bg="#00BFFF" h="*" w="10" />  
                                        <Switch id="wkzzxhs" checked ={storage.get("wkzzxhs",[false])}  h="60"/>
                                        <text text="6.微客众智" gravity="left" textSize="14" textColor = "#f2c900" />
                                        <text text="小红薯进入" gravity="left" textSize="12" />
                                        <input id="wkzzxhs1" gravity="left" text={storage.get("wkzzxhs1",[2])} textSize="12sp" textSizeHint = "12sp"/>
                                        <text text=" 版本号:" gravity="left" id = "fff"textSize="10" />
                                        <text text="" gravity="left" textColor="#4fb3ff" id = "wkzzbb"textSize="10" />
                                        <horizontal layout_width="match_parent"  gravity="right" marginTop="17">
                                            <img  id="Download39" h="28" w="28" marginRight="10" layout_gravity="right" scaleType="fitXY" src="http://gm.z8s.com/runjs/down.png"/>
                                        </horizontal>
                                    </horizontal>
                                    <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

                                </vertical>
                            </ScrollView>
                        </card>
                    </frame>
            </viewpager>

    </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="300">
        <img w="*" h="120" scaleType="fitXY" src={logo.get('src',[""])}/>
        <ScrollView layout_width="match_parent">
        <vertical>
            <horizontal h="40">
                <text bg="#f2f2f2" w="1" h="40" text=" "/>
                <button layout_weight="2" h="40" id="Re_Btn" text="重置文章记录" textStyle = "bold" textColor="#FFFFFF" bg="{{my_color}}"/>
                <text bg="#f2f2f2" w="1" h="40" text=" "/>
                <button layout_weight="2" h="40" id="Re_Btn2" text="重置提现记录" textStyle = "bold" textColor="#FFFFFF" bg="{{my_color}}"/>
                <text bg="#f2f2f2" w="1" h="40" text=" "/>
            </horizontal>
            
            <horizontal>
                <text text="无障碍(必选)"  textSize="12sp" textColor="#333333"  minWidth="255" padding="10 0" layout_gravity="center"/>
                <Switch id="autoService" checked="{{auto.service != null}}"  switchMinWidth="50sp" layout_gravity="right|bottom" h="40"/>
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                <text text="清理SD卡"  textSize="13sp"  minWidth="255" padding="10 0" layout_gravity="center"/>
                <Switch id="清理内存" checked ={清理内存storages.get("是否清理",[false])}   switchMinWidth="50sp" layout_gravity="right|bottom" h="40"/>
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


            <horizontal h="40">
                <text text="深度清理"  textSize="13sp"  minWidth="255" padding="10 0" layout_gravity="center"/>
                <Switch id="深度清理" checked ={深度清理storages.get("深度清理",[false])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


            <horizontal h="40">
                
                <text text="自动提现"  textSize="13sp"  minWidth="250" padding="10 0" layout_gravity="center"/>
                <Switch id="自动提现" checked ={storage.get("自动提现",[false])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>
            <horizontal h="40">
                
                <text text="本地打码" textSize="13sp"  minWidth="250" padding="10 0" layout_gravity="center"/>
                <Switch  id="本地打码" checked ={storage.get("本地打码",[true])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                    <text text="微信养号" textSize="13sp" padding="10 0" layout_gravity="center"/>
                    <input id="wxyhjg" text ={storage.get("wxyhjg",[350])} textSize="12sp"  layout_gravity="center"/>
                    <text text="分钟，运行一次" textSize="13sp" padding="10 0" layout_gravity="center" minWidth="150"/>
                    <Switch id="wxyh" checked ={storage.get("wxyh",[false])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                    <text text="短视频养号  点击设置"  textSize="13sp" id="DSPyanghao"   minWidth="250" padding="10 0" layout_gravity="center"/>
                    <Switch id="dspyh" checked ={storage.get("dspyh",[false])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                <text text="自动传(D音/K手)每日" textSize="10sp" paddingLeft="10" layout_gravity="center" />
                <input id="zpcs" text ={storage.get("zpcs",[1])} textSize="10sp" />
                <text text="作品" textSize="10sp" layout_gravity="center" />
                <spinner id="spzdsczp" entries="下载上传|拍摄上传" textSize="10sp" textColor="#F68D06" marginTop="1" gravity="center"/>
                <Switch  id="自动上传作品" checked ={storage.get("自动上传作品",[false])}  switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                <text text="看直播养号,每次观看" textSize="10sp" padding="10 0" layout_gravity="center" />
                <input id="kzbsj" text ={storage.get("kzbsj",[10])} textSize="10sp" layout_gravity="center"/>
                <text text="分钟" textSize="10sp" padding="10 0" layout_gravity="center"  minWidth="115"/>
                <Switch  id="观看直播时间" checked ={storage.get("观看直播时间",[false])} switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>

            <horizontal h="40">
                <text text="取消关注,每天取消" textSize="10sp" paddingLeft="10" layout_gravity="center" />
                <input id="qxgzcs" text ={storage.get("qxgzcs",[20])} textSize="10sp" />
                <text text="关注" textSize="10sp" layout_gravity="center" />
                <spinner id="qxgzlx" entries="D音和K手|D音|K手" textSize="10sp" w="115"/>
                <Switch  id="自动取消关注" checked ={storage.get("自动取消关注",[false])}  switchMinWidth="50sp" layout_gravity="right|bottom" h="40" />
            </horizontal>
            <text padding="10 20 30 40" bg="#f2f2f2" w="*" h="3sp" text=" "/>


            <horizontal  w="0" h="0">
                <button id="手动代码" text="手动更新云脚本"  textStyle = "bold" textColor="#FFFFFF" bg="#0000FF" />
                <button layout_weight="2" id="手动更新" text="手动更新内框架" textStyle = "bold" textColor="#FFFFFF" bg="#CDC9A5" />
            </horizontal>
            
            </vertical>
        </ScrollView>
        </vertical>
    </drawer>
);


运行时间戳 = Date.parse(new Date())/1000;

if(ui.jrtthb.checked==true){
    ui.jrttsz.visibility = 0;
    ui.jrttfg.visibility=8;
}else{
    ui.jrttsz.visibility = 8;
    ui.jrttfg.visibility=0;
}

ui.jrtthb.click(function(){
    if(ui.jrtthb.checked==true){
        ui.jrttsz.visibility = 0;
        ui.jrttfg.visibility=8;
    }else{
        ui.jrttsz.visibility = 8;
        ui.jrttfg.visibility=0;
    }
})


if(ui.pddhb.checked==true){
    ui.pddhbsz.visibility = 0;
    ui.pddhbfg.visibility=8;
}else{
    ui.pddhbsz.visibility = 8;
    ui.pddhbfg.visibility=0;
}

ui.pddhb.click(function(){
    if(ui.pddhb.checked==true){
        ui.pddhbsz.visibility = 0;
        ui.pddhbfg.visibility=8;
    }else{
        ui.pddhbsz.visibility = 8;
        ui.pddhbfg.visibility=0;
    }
})



if(ui.zhuanyue.checked==true){
    ui.zhuanyuesz.visibility = 0;
    ui.zhuanyuefg.visibility=8;
}else{
    ui.zhuanyuesz.visibility = 8;
    ui.zhuanyuefg.visibility=0;
}

ui.zhuanyue.click(function(){
    if(ui.zhuanyue.checked==true){
        ui.zhuanyuesz.visibility = 0;
        ui.zhuanyuefg.visibility=8;
    }else{
        ui.zhuanyuesz.visibility = 8;
        ui.zhuanyuefg.visibility=0;
    }
})


ui.web_zhuanyue.loadUrl("http://ja.bigliang.cn/wxTask/login/main.action");
ui.web_zhuanyue.visibility = 8;
ui.web_zhuanyue.getSettings().setJavaScriptEnabled(true);
var settings = ui.web_zhuanyue.getSettings()
settings.setUseWideViewPort(true);
settings.setLoadWithOverviewMode(true);
settings.setDomStorageEnabled(true);
settings.setDefaultTextEncodingName("UTF-8");
settings.setAllowContentAccess(true); // 是否可访问Content Provider的资源，默认值 true
settings.setAllowFileAccess(true);    // 是否可访问本地文件，默认值 true
// 是否允许通过file url加载的Javascript读取本地文件，默认值 false
settings.setAllowFileAccessFromFileURLs(false);
// 是否允许通过file url加载的Javascript读取全部资源(包括文件,http,https)，默认值 false
settings.setAllowUniversalAccessFromFileURLs(false);
//开启JavaScript支持
settings.setJavaScriptEnabled(true);
// 支持缩放
settings.setSupportZoom(true)



var 屏蔽线程="";
屏蔽线程 = setInterval(() => {
    ui.run(() => {
        ui.web_zhuanyue.loadUrl("javascript:$('#demo').css('display','none');");
        ui.web_zhuanyue.loadUrl("javascript:$('strong').text('"+names+"');");
        //ui.web_zhuanyue.loadUrl("javascript:$('.btn-group-justified').css('display','none');");
        ui.web_zhuanyue.loadUrl("javascript:$('a:contains(\"收徒推广\")').attr('href','#');");
        ui.web_zhuanyue.loadUrl("javascript:$('a:contains(\"提取链接教程\")').css('display','none');");
        ui.web_zhuanyue.loadUrl("javascript:$('a:contains(\"四海平台教程\")').css('display','none');");
    });
}, 300);

ui.注册账号.click(function(){
    ui.web_zhuanyue.visibility = 0;
    ui.web_zhuanyue.loadUrl("http://ja.bigliang.cn/wxTask/login/main.action");
})

ui.账号中心.click(function(){
    ui.web_zhuanyue.visibility = 0;
    ui.web_zhuanyue.loadUrl("http://ja.bigliang.cn/wxTask/dashboard/userInfo.action");
})

ui.充值中心.click(function(){
    ui.web_zhuanyue.visibility = 0;
    ui.web_zhuanyue.loadUrl("http://ja.bigliang.cn/wxTask/dashboard/pointsAdd.action");
})

ui.设置方案.click(function(){
    ui.web_zhuanyue.visibility = 0;
    ui.web_zhuanyue.loadUrl("http://ja.bigliang.cn/wxTask/dashboard/planList.action");
})




if(ui.dyhb.checked==true){
    ui.dyhbsz.visibility = 0;
}else{
    ui.dyhbsz.visibility = 8;
}

ui.dyhb.click(function(){
    if(ui.dyhb.checked==true){
        ui.dyhbsz.visibility = 0;
    }else{
        ui.dyhbsz.visibility = 8;
    }
})


ui.pager.setTitles(["设置大全", 阅读平台, "综合任务", "任务平台"]);
ui.tabs.setupWithViewPager(ui.pager);
ui.toolbar.setupWithDrawer(ui.drawer);


ui.BtnExit.click(function(){
    toast("退出程序");
    engines.stopAll();
})





/*94开始*/

ui.web.visibility = 8;
// 94app界面加载进来
ui.web.loadUrl(URL);
ui.web.getSettings().setJavaScriptEnabled(true);
var settings = ui.web.getSettings()
settings.setUseWideViewPort(true);
settings.setLoadWithOverviewMode(true);
settings.setDomStorageEnabled(true);
settings.setDefaultTextEncodingName("UTF-8");
settings.setAllowContentAccess(true); // 是否可访问Content Provider的资源，默认值 true
settings.setAllowFileAccess(true);    // 是否可访问本地文件，默认值 true
// 是否允许通过file url加载的Javascript读取本地文件，默认值 false
settings.setAllowFileAccessFromFileURLs(false);
// 是否允许通过file url加载的Javascript读取全部资源(包括文件,http,https)，默认值 false
settings.setAllowUniversalAccessFromFileURLs(false);
//开启JavaScript支持
settings.setJavaScriptEnabled(true);
// 支持缩放
settings.setSupportZoom(true)



// 无障碍服务
ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 任务加速
ui.midmode.on("check", function (checked) 
{   if(checked)
    {
        ui.bringOngoing.setChecked(false);
        ui.bringBefore.setChecked(false);
    }
});
ui.quickMod.on("check", function (checked) 
{   if(checked)
    {
        ui.bringOngoing.setChecked(false);
        ui.bringBefore.setChecked(false);
    }
});

/**悬浮窗 */
//app.openAppSetting(currentPackage());


// 隐藏/显示任务设置
threads.start(function () {
    ui.run(() => {
        ui.taskSetting.visibility = 8;
    });
});
ui.showTaskSetting.click(() => {
    if (ui.showTaskSetting.getText() == "隐藏设置") {
        ui.showTaskSetting.setText("显示设置");
        ui.taskSetting.visibility = 8;
    } else {
        ui.showTaskSetting.setText("隐藏设置");
        ui.taskSetting.visibility = 0;
    }
});


ui.removecookie.click(() => {
    cookieManager.removeAllCookie();
    cookieManager.removeSessionCookie();
    config.token="";
    ui.web.loadUrl(URL);
});

auto.setWindowFilter((info) => {
    return true;
});




// 检查更新
function checkUpdate() {
    threads.start(function () {
        var responce= hzServer.checkUpdate(config);
        if(responce.ip&&responce.ip!=config.ip)
        {
            config.ip=responce.ip;
            saveConfig();
        }
    });
}

//更新token
function updateToken() 
{
    hz94.cookieStr=config.cookieStr;
    var responce= hz94.getToken();
    if(responce.success == true)
    {
        var token=responce.obj;
        //log("t:"+token);
        if(token.length>0)
        {
             if(config.token==""||config.token!=token)
            {
                config.token=token; 
                saveConfig();
            }
        }
        else
        {
            log("t length 0");
        }
    }
    else
    {
        log("t eror:"+responce.msg);
    }
}
function updateIp()
{
    var thread = threads.start(function(){
        //在子线程执行的定时器
        setInterval(function(){
           // log("子线程:" + threads.currentThread());
            var responce=hzServer.getServer();
            if(responce&&responce.data&&responce.data.ip&&responce.data.ip!=config.ip)
            {
                config.ip=responce.data.ip;
                saveIp();
            }
           // config.ip="1.1.1.1";
        }, 120000);
    });
}


if(config.cookieStr)
{
    threads.start(function () {
        updateToken();
    });
}

try {
    checkUpdate(); 
    updateIp();
} catch (error) {
    
}


function start94() 
{
    // 这里写脚本的主逻辑
        console.info("开始运行");

        if (!(config.doDyFocus || config.doDyLike || config.doHsFocus || config.doHsLike||config.doQDyFocus||config.doQDyLike||config.doKsFocus)) {
            alert("未选任务");
            exit();
        }

        // 屏幕常亮
        device.keepScreenOn(5 * 3600 * 1000);
        hz94.run(config);
        console.info("任务运行结束");
        storagesd.put("yzx94", config.stopByFinishNum);
}
/*94结束*/

var web监听开启 = true;
setInterval(() => {
    ui.run(() => {

        var cookieStr = cookieManager.getCookie(URL);
        if (!cookieStr || cookieStr.indexOf("JSESSIONID=") == -1) 
        {
            ui.web.loadUrl("javascript:$(\".ui-title\").text(\"任务中心\");");
            ui.web.loadUrl("javascript: $('a[href$=\"pageController.do?connectus\"]:first').css('display','none');");
        }else{
            if(ui.web.url&&ui.web.url.indexOf("/h8/pageController.do?index") !== -1){
                log(ui.web.getUrl());
                ui.web.loadUrl(URL2);
            }
            ui.web.loadUrl("javascript:$(\".ui-title\").text(\"任务中心\");");
            ui.web.loadUrl("javascript: $('a[href$=\"pageController.do?connectus\"]:first').css('display','none');");
        }
    });
}, 300);

ui.login94.setText("显示"+name_rw);
ui.login94.click(() => {
    if (ui.web.visibility == 0) {
        web监听开启=false;
        ui.web.visibility = 8;
        ui.login94.setText("显示"+name_rw);
        toast("内容已隐藏!");
    } else {
        ui.web.visibility = 0;
        ui.login94.setText("隐藏"+name_rw);
        toast("内容已显示!");

    }
});

ui.copy_yqm.click(() => {
    setClip("019784356102");
    toast("已复制官方邀请码!");
});

if(files.exists("coin.wav")){
    media.playMusic("coin.wav");
}

ui.web.loadUrl(URL);
ui.web.getSettings().setJavaScriptEnabled(true);


//短视频养号
ui.DSPyanghao.click((view)=>{
    var dialog = new android.app.AlertDialog.Builder(activity).create()
    dialog.setView(new android.widget.EditText(context))
    dialog.show();
    dialog.setCancelable(false)
    var window = dialog.getWindow(); 
    window.setDimAmount(0.6);
    
    var douyinselfUrl=ui.inflate( 
             <vertical>
                <linear gravity="center">  
                    <text text="短视频养号设置"  size="20" color="#000000" padding="12 12"/> 
                </linear>
               <vertical margin="25 0 25 10">
               <linear gravity="center">  
                    <horizontal>
                        <input id="dspjg" text ={storage.get("dspjg",[350])} textSize="15sp" />
                        <text text="分钟一次,每次" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        <input id="dspcs" text ={storage.get("dspcs",[20])} textSize="15sp" />
                        <text text="个视频" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        </horizontal>
                    </linear>
                    <linear gravity="center">  
                        <horizontal>
                        <text text="关注概率" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        <input id="dspgz" text ={storage.get("dspgz",[0])} textSize="15sp" />
                        <text text="% 点赞概率" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        <input id="dspdz" text ={storage.get("dspdz",[0])} textSize="15sp" />
                        <text text="%" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        </horizontal>
                    </linear>
                    <linear gravity="center"> 
                        <text text="每个视频浏览" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        <input id="dspsj1" text ={storage.get("dspsj1",[7])} textSize="15sp" />
                        <text text="-" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                        <input id="dspsj2" text ={storage.get("dspsj2",[10])} textSize="15sp" />
                        <text text="秒" textSize="15sp" textColor="#F68D06" textStyle="bold" />
                    </linear>
                    <linear gravity="center"> 
                    <text text="选择平台  " textSize="15sp" textColor="#F68D06" textStyle="bold" />
                    <spinner id="dsplx" entries="D音和K手|D音|K手" textSize="15sp" textColor="#F68D06"  />
                  </linear>
               </vertical>
                 <relative>
                   <button id="cancle" layout_alignParentLeft="true" text="取消" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                   <button id="save" layout_alignParentRight="true" text="保存" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                 </relative>              
             </vertical>)
    douyinselfUrl.dsplx.setSelection(storage2.get("dsplx", [0]));
    window.setContentView(douyinselfUrl);
    douyinselfUrl.cancle.click(()=>{dialog.dismiss();});
    douyinselfUrl.save.click(() =>{
        threads.start(function() {
            storage.put("dspjg", parseInt(douyinselfUrl.dspjg.getText()));
            storage.put("dspcs", parseInt(douyinselfUrl.dspcs.getText()));
            storage.put("dspgz", parseInt(douyinselfUrl.dspgz.getText()));
            storage.put("dspdz", parseInt(douyinselfUrl.dspdz.getText()));
            storage.put("dspsj1", parseInt(douyinselfUrl.dspsj1.getText()));
            storage.put("dspsj2", parseInt(douyinselfUrl.dspsj2.getText()));
            storage2.put("dsplx", parseInt(douyinselfUrl.dsplx.getSelectedItemPosition()));
            toast("完成保存");
            dialog.dismiss();
        });
    });
});
ui.autoService.checked = auto.service != null;


/***自定义悬浮控制台***/
function 当前时间(){
    let date= new Date();
    let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
    let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
    updateTime = d + ' ' + h + ':' + m + ':' + s;
    return updateTime;
}



function my_console(关){

        var 控制台 = {
        开:function(){
            if(悬浮控制台){
                悬浮控制台.close();
            }

            if(悬浮启停){
                悬浮启停.close();
            }

            悬浮控制台="";
            悬浮启停="";

            悬浮控制台 = floaty.rawWindow(
                <frame gravity="center">
                    <card id="悬浮窗背景" w="*" h="*" cardCornerRadius="3dp">
                    <img id="img" w="*" h="auto" src='{{console_png}}' gravity="center" alpha="0.70"/>
                    <horizontal w="*" h="*" gravity="left" marginTop="{{Math.floor(device.height*0.21/4+5)}}px">
        
                        <vertical layout_gravity="left|center" h="*" w="auto" padding="10" marginLeft="{{Math.floor(device.width*0.1/2)}}px">
                            <horizontal  w="*" gravity="left" padding="5 2">
                                <text size="10" textColor="#FFFFFF" bg="#6da8b5" padding="5 0" marginRight="2" text="时长:" />
                                <text id="脚本时间" size="10" textColor="#FFFFFF" text="10" />
                                <text id="" size="10" textColor="#FFFFFF" text="分钟" />
                            </horizontal>
            
                            <horizontal  w="*" gravity="left" padding="5 2">
                                <text size="10" textColor="#FFFFFF" bg="#6da8b5" padding="5 0" marginRight="2" text="任务:" />
                                <text id="当前任务" size="10" textColor="#FFFFFF" w="70" text="{{当前任务名称}}" />
                            </horizontal>
            
                            <horizontal  w="*" gravity="left" padding="5 2">
                                <text size="10" textColor="#FFFFFF" bg="#6da8b5" padding="5 0" marginRight="2" text="概况:" />
                                <text id="当前任务次数" size="10" textColor="#FFFFFF" text="未知" />
                            </horizontal>
                        </vertical>
        
                        <ScrollView layout_width="match_parent"  h="*" w="auto" gravity="left" padding="10" marginTop="-12" marginLeft="{{Math.floor(device.width*0.1/2)}}px">
                            <vertical layout_gravity="left" >
                                    <text id="记录" text="运行日志" textColor="#FFFFFF" textSize="10sp"/>
                            </vertical>
                        </ScrollView>
                    </horizontal>
                    </card>
                </frame>
            )

            悬浮启停 = floaty.rawWindow(
                <frame w="auto" h="20">
                    <horizontal  w="*" h="20" gravity="center">
                        <text id="状态" text="暂停" size="10" textColor="#FFFFFF" bg="#02c9d8" marginRight="5"/>
                        <text id="停止" text="停止" size="10" textColor="#FFFFFF" bg="#02c9d8" marginRight="5"/>
                        <text id="隐藏" text="隐藏" w="20" size="10" textColor="#FFFFFF" bg="#02c9d8" marginRight="5"/>
                        <text id="日志" text="日志" size="10" textColor="#FFFFFF" bg="#02c9d8" marginRight="5"/>
                    </horizontal>
                </frame>
            )
            
            悬浮控制台.setSize(device.width,device.height*0.22)
            悬浮控制台.setPosition(-1,50)
            悬浮控制台.悬浮窗背景.getBackground().setAlpha(20);
            悬浮控制台.setTouchable(false)
            悬浮启停.setPosition(Math.floor(device.width*0.32),70)
            悬浮启停.状态.setWidth(0)
            悬浮启停.停止.setWidth(0)
            悬浮启停.隐藏.setWidth(0)
            悬浮启停.日志.setWidth(0)

            悬浮窗不关闭线程 = setInterval(() => {}, 1000);
            
            
            悬浮启停.状态.click(() => {
                if(悬浮启停.状态.getText()=="暂停"){
                    悬浮启停.状态.setText("启动");
                    悬浮启停.停止.setWidth(60);
                    悬浮启停.隐藏.setWidth(60);
                    悬浮启停.日志.setWidth(60);
        
                    try {
                        if(zxc.isAlive()){
                            toast("暂停脚本");
                            runB = true;
                            try {
                                zxc.interrupt();
                                gb.interrupt();
            
                            } catch (error) {}
                        }else{
                            toast("退出程序");
                            engines.stopAll();
                        }
                    } catch (e) {}
                }else{
                    悬浮启停.状态.setText("暂停");
                    悬浮启停.停止.setWidth(0);
                    悬浮启停.隐藏.setWidth(60);
                    悬浮启停.日志.setWidth(0);
                    ui.Run_Btn.click();
                }
            });
        
            悬浮启停.停止.click(() => {
                悬浮控制台.exitOnClose();
                悬浮启停.exitOnClose();
                floaty.closeAll();
            });
        
            悬浮启停.隐藏.click(() => {
                控制台.关();
            });
        
            悬浮启停.日志.click(() => {
                app.startActivity("console");
            });
        },

        关:function(){
            if(悬浮控制台){
                悬浮控制台.close();
            }
            if(悬浮启停){
                悬浮启停.close();
            }
            
            if(悬浮窗不关闭线程){
                clearInterval(悬浮窗不关闭线程);
            }

            悬浮控制台="";
            悬浮启停="";
        }
    }

    if(关){
        控制台.关();
        sleep(1000);
    }else{
        控制台.开();
        time_on_invoke = threads.start(function () {
            while (true) {
                try {
                    if(悬浮控制台){
                        var 实际运行分钟 = Math.floor((Date.parse(new Date())/1000-运行时间戳)/60)
                        ui.run(()=>{
                            悬浮控制台.脚本时间.setText(实际运行分钟.toString());
                        })
                    }else{
                        break;
                    }
                } catch (e) {}
            }
        });
    }
}

function 已经存在的日志strLength(已经存在的日志arr){
  var 已经存在的日志str=已经存在的日志arr.join('\n')
  return 已经存在的日志str.length
}
function 已经存在的日志长度超过标准了吗(已经存在的日志arr){
  var result1=已经存在的日志strLength(已经存在的日志arr)>已经存在的日志长度限制 ? true:false
  var result2=已经存在的日志arr.length > 显示几行日志 ? true:false
  return result1 || result2
}
function 已经存在的日志arrToStr(已经存在的日志arr){
  var result=已经存在的日志arr.join('\n')
  return result
}

function mylog(){
    var s=''
    for(let i=0;i<arguments.length;i++){
        if(arguments.length>40){
            break;
        }
      s+=" "+arguments[i]+' '
    }
    log(s);

    if(s.length>40){
        s=s.substring(0,40);
    }

    if(已经存在的日志arr){
        if(已经存在的日志长度超过标准了吗(已经存在的日志arr)){
            已经存在的日志arr.shift()
          }
    }

    已经存在的日志arr.push("["+当前时间()+"]  "+s);

    var 要打印的内容=已经存在的日志arrToStr(已经存在的日志arr)
    if(悬浮控制台){
        ui.run(()=>{
            悬浮控制台.记录.text(要打印的内容);
          })
    }
}
/***自定义悬浮控制台结束***/


function http_get(file_name,url){
    var is_crypto_in = files.exists('/sdcard/cloud/'+file_name);
    if(!is_crypto_in || is_update){
        files.remove('/sdcard/cloud/'+file_name);

        var is_write=false;
        threads.start(function(){
            r = http.get(url).body.bytes();
            files.createWithDirs('/sdcard/cloud/'+file_name);
            files.writeBytes('/sdcard/cloud/'+file_name, r);
            is_write=true;
        });
        mylog("等待脚本启动");
        while(!is_write){
            
        }
    }
}


var _0x34a4=['5pq355uR776j6K6f5Y+95ou75YWI5ZCy55eg5p6b5Y2BREbCj0A=','wprCuFw5','w5YzFQVrPw==','FsO6woIVw7jCh8ODQcKQwr9aTg==','GsOSDyMNZQ==','w4/CocKuw50=','wofDncKBwqllJ8Kk','w73DrV3DlwsLwpRnAwnDgMK5UA==','KnbCnDTDhQ7DvA==','w7LDo17Cng==','FH/ClMO4','6Iys5p2/6ZCj5aK9','wrllXMKTw7E=','w4HDkMOGw4/Dvg==','w4EATw==','wrsnwrHCo1jCpA==','NcO7EQ==','C8OeAiMJJw==','w60Pw74fRA==','w7ISw7gSDsKj','w47CksK7wrHCi8O8wp3DsMOV','wrw3wqPCtVTCn8O0McKqwpLDmMOQw7I=','wpDDmcKcwrZOIMKR','5pmv5a+h57m35Y6R','w41becKZDg==','5Ly45b6l5b+v5oiy5a+M5ouk55iD6YOM5LyQ6aGW5Lqw','5LqL5Yq65b+u5bq3w4HnrZTlvJbCpcOX56WbwpHDpA==','WksdJww=','6KyX5rCo6amW6K+g5b2E5bmow5Hnqajnr5blhrjnpLblkqrphZjorqI=','6aKf4oK75LiS5Y2K5ZOb6YahYsOo','wpZww5rDvCPCgw==','dMKvwq8iwpk=','5YWn5L6d55mI5pql5oaA5oqC5ZC45byD5Lml5Ly95LuZYHo=','5Z6R5Z2y5rmW55Gh','PMKNwpcjARBzw73Dg8KF','e8K7AmXCqcOM','5YmA6L6l5Lum6Zufw5fot67ovZQ=','5aaY5aWc55+W6Kau6aKS','5byj5YmW6Ly35Yeq5LiA5Yq86aOm','NcOFMjrDpGjDt8ORwozCiMOlw7UgQQBBJsOxwpTCnGMzw4HCsw==','5b6K5aS26Lyc6KKT5Yyx5rSb5YaP5rG8','YcOyUsO7RwQ5wrIGEMOTwow=','e8KoVnQ=','5L+U5LmR6K6U5om65oCB5LiE55216YKu','aDQ1AQ==','5L2+55qc55iD55iQ5pi/Yg==','aSnCqcOXw79Fw4c=','6K2g6K6X556e','w4XDlcKhN8Kj','E8KFwoUqXw==','W8KINz4=','6LyZ5aW554qe5pmm6LCu6YOp5LuB55+y6YG1','FyVk','wpUAw68NDsKLwpogw6Q=','5LuN5YqG6K6R5oKU','5byk5ZCl5oq86IGo5Yyv5ZCZ','ckZIRCVtBnQbw7HCg8Oiwq7DrcOtQSzDpGbDpWkRamjChAHCkMKBVw==','wo0ewqBFdA==','5byN5Yqm5Lir5aWr6KKP5YqU776Z6K+b5YuC5Lmm5aeK5YCn5Ymg44GT','wojDn8KUw6Y9w6RwwqYjWVk=','JcOePmbDqg==','5LiF5oiI56KU','w6TCmMK0wqvCuMOgwojDscKTAsK2KjHClVtL','55+36YCf5LuV','B8Kcw5NRw7LClsK5w6zDtsK15YyT5pez5Lq+566Q5ZKM6KSH5rG8','wpkLw4UWH8Kb','6I2W5pyA6ZO85aCl','KmTCij/DogrDtSFGwqQ=','6YOT5Y+T5oOi6biy5qOMIsKs5buq6bi/552k5L2e6YOd5aeN5p2B5Y2S5by45b2ow5Hogonpg7Llpafmnbjlj7nlvLflvYbnmrHnr4norbjmsJDlpq/pqZvmipTluKPpuoLogajlpqDorJHlvIA=','J37CjS4=','wpTDmcKGwpZOKsK9','REgCP1o=','6Kah556M55q/5pO/5pea6Zet','5LqV5ZCV5YWh6K27','a1hODiVu','wqQxw4c9SnrCuA==','anfCnQ==','6aOD5L6Q572K5ZSM5Lm+5Y2G','5rKu5pa26ZSz5Ze5','5oiT6L2F5Lua5Luv5Y+56Kes6KO25L635qeB5Li+6aOV5ZKX','5oKZ5oa/776v5Z2w5Lum5Zq65raG5Lim5a6Z5bKq5pS95aya5ouFw4UY','5aWu5Yqx6ZK15o+3','54Cb54Cr6KeW6aGq5p2t6YCZ54iu','eMKsVkHDk8KIWA==','IznCucOncHE=','5bCA6JeD5ZaA772+5Lyr5YyM55yS6YG05oiw5aas54mw5Lyu4oC2ew==','birCrgAkworCkwlWw58lKXUwCcKORsKZaUh1','5rOF5YSG56KU6aq66Kys6ZeK6K2UfOiuieaih+afoee/k+e7luaIuOazq+WEg+eireabiOWFluehjQ==','5p285Yqs5Lu05LyM5YeW','5pic5L6S5ZGC','5bKg5pyQ5Lq9772k5Y+L5Y2I5oq55L255ayk4oKBw5w=','OcK+w5jDmxIaw7fCncO1fcOsTxA=','JMKHw49aw4/DgsO8','552+5rer6Yap5pqk5peJ','5YqJ6L6R5LiX6Zq6Uui1kOi/ng==','w7IKw7sQOcK+NAY=','5YiG6L6Z5Lm96ZiBEui2tei8tA==','wpHDj8KKwrM=','5YuQ6L+U5LuQ6Zmxaui2o+i8tg==','wr8vwqPCqVM=','HMOYAzENcw==','ScOzw71U','LHXCujLDtR/Duw9H','5L+Z5oCh5LmV5Lms772y556o56Ct57qF5bGk5Lqz','HcOlwow3','bC/CqsKdw5xPw5hNwoMkQnnCssKhwpllw70=','w4/DhsOJw44=','566F5omh5L6m5oCq5oua5Ly+54+W5ZeY','5p+S5Yq45Lmc5L6V5YSU','woTDhMKLwqpBNQ==','w5AGURI=','wqs6wqrCpQ==','EsKJwoQ=','QiEpwptsOy7DnMO7NA/DlMOAVSc=','OcK1wpjDlhgdw5s=','wpcSwqNJLDc=','WcO+w7RHwoHDoQ==','fX3Cg8OgdS8j','w6bCmMKiwrjCk8O7','w59Gc8KOPcOMdUgO','5rOR5pyS5YiS6YKG5bqI5Y+twr/lvpflpKzovZnoo7Pku4rmrp/nnqfopZ/poqnlh5DljIbli6vogJg=','55yF6YC55Lmc','5Lu25Lqw5Lu/eg==','JsOqAcKNw7BV','w58UVg0=','5p6V5Y2J5Zy4','BsOwwptow7/ChMONR8KHwrUbRG1iwo/DmA==','ejPCosOBw69Cw4xYw4I=','QCAgw4dqPC3CmcOpOEXDn8OMVWxhw6XDnsKnf8OjY8K6Kw==','wofCqU4=','NcKCw4pVwrI=','w5/CvcKiw4jDsQ==','Iy/Cv8OiIQ==','w401DgxkKQ==','JcKLw5U=','wq4ww50sXWbCuWdS','6LyF55616KSx6aCc','wqXClg8=','YiMgEw==','w4IcQQ0=','JcOCMXXDs2U=','wpdtw4rDszPClQ==','wp/Dm8KDw4Qyw7BhwokuWFlKDMKtEMK/OMKywp8bOcKNwr9L','5Zuu4oO76IC75aiL5YqI6K2R5Lmh77y75p235Lu65Z+T552t5ouk5Lqp5ayV6K2z5ZOTwpbDpA==','5Lu35ZGC5Yee6K6T','w51LacKeTA==','57if5p+swo0=','56SF6KG25LuG6ZqPwpTDuQ==','w6DCicKuwr3ChQ==','5bCi6JSN5Lqb5oqS6Imc5L6s6IK+44GSQQ==','wqwswq/DqVPCrcK5JMKtwoDDg8OLw6LCuF9VB8Khw510SzDCmcOUeHMU','eCzCrMOX','5puC5paX6IWt5p295LiTaMOdwrc=','LcK8wp3Dhkw=','5Lyl5Zyu5ZOuZeaCnuS4tOS6neimq+S9g+S7l+e7qcKG','57mt57iQ5pi45pWv','wpXCsldjw5DDlsOJVhAkwokJwpwhw4LDm8OWw5TDtTlBR2ptOgnChsKDw40=','5omh54+p55qU5Lu25ae2','w5cwCQhk','w6bDiiLCnsOWwpdcwpPDvGkSP8ODPsKSwqHCvTQnQFHDq8K2wqYSwoPDrzdAw4FxwoHCk8KKEg8yw5NKZg==','w55KaQ==','5ZOT5Yub5oq85Yu6','5ouM6Zyj54i05piW5qmc5b2g','5L2B5bG/6YOn5Lu95LiF5Lm/5b+b5b6o','TD0j','bS/CssOdw5RY','BcOsw5cvwpc=','w4vDjMOZ','NTPCtsOn','w4tAaMKEGg==','wokZwplJIzPCmgDDuw==','5L+N6K2Dw7bmiZzku43ku5Tnn5rpgoPmnavku77kuoXlpIjnjYnnm40=','dCU9A8OMwr9DOA==','wrbCjBbCnybDicOww4pJwqLCsxrCssK2','O8KXw4VNw7DCnQ==','w41ATsKeDMOKd0A=','woZ2w57DryM=','6Le16ZGp5aKv','w4XDksKgKsO6wq0=','wpDDk8Kfw6xSJ8KnaRDCvgUjwrvDhFjDnsOAw6HDrzHDq8Ohwrd/K8K/wqA=','wpsWw5gxDsKQwoU=','W8O5w5Mxw4ICwp54SsKwwqvDocOpwo1DbMKTwpHCmH3CtxpnXQ==','wqgmwrbCk0XCpsOj','O1jCncOHBFvCqVtQw7Rfw63CmA==','5Ymq6L2u5Lu86ZuyUei2nOi9hA==','w5IaVkZ3TcOGwqXDncOJwpcLwovClA==','XzN0wpjCjXQCw4/CoWtywoZRw6YLw4lxwrYhw4t4w7oAL8KBw5I=','w6cXw7QAA8Kj','w7zDjCHDl8OJwpc=','PCbCocOXfnLChUHDhVJJXw==','AMOoJnxVdgzCmMOrw4fDpcOoVU3DlMO/Cg==','6LW/5b2C5q6i56yk5Lqw5q2O5oio','wpZuw5DDrjI=','wqUxw5wnS2c=','5b6z5Yin5Lih5YqA','Z0BWAyJ5XHwRwqg=','w4fDnMKtPsOi','w4/DlcK6PQ==','ZkJfEC52Ww==','w4AzMx99JcO+wpo=','5p2y5Yix5Lmb5L+x5YSm','TMOkw7FEwoLCusOffg0icMO2Y0Bkw7zCgsKmw5Ngw7Rww6Vpwq52w6vDksOlecKGRDDDiTcJwroMw74=','DsObARZCNMKMYSk=','w53DlsK7PsO3','wpHDkMKDw6g=','dS/CuQI=','w7fDsXPCkQQMw5FoAw==','w7o6w5oGcsKZ','NFLCnsKOGlc=','F8O3w452wp4Sw599QcKLwq/Dr8OswoAJbMKVwozCnnDDpB0lDmIdeg==','54Ct5YaY5YqT5Luf6LSs5pem55qd','5rKu5p2J5oq55YqD5p655pWj6aOX6Z2c','w4bCtsKlw54=','WsKcMTnDhVzCrQ==','QcOvw7tRwpnCuw==','IsOFDGDDrGnDtsOY','wprCpwg=','woR6w5jDpzvCng==','wq8Vw5kxw4EsJg==','556B55iG5YG355m9XlA=','Q8KTJy/DmEbCuVc=','5oq95q285Lq35Lit','YyHCpBU/wos=','ecKuHFrCqcOHLA==','w70Qw5YcE8KzPAZw','w57CssKswok=','5p+Z5Yq65LmZ5L+a5YWj','HwcgNFs+w5zCqcK3bnTClWrDvQ==','5b2z6YGK5a2U5oiW','w4/CssK7w4s=','5Lyv5aWk5ZCw5oqF','w6zClMKiwrvCqMO9wpk=','acK/E1zCuA==','wp4cw5kLD8Kbwrgrw7Mxw44v','5oiO5rW75LqW5ZOs','6I215p+T6ZKH5aGF','worDlsKKwroa','Uix2','6Z2f5Lu5776h','w7HDhCHDl8OGwp1H','5bOJ5pqR5Lmx','55qG5aap5YOw','PSbCuMO7ZHY=','5bOE6L+b5LmC54ua5ayH54uX556s5Luz556k','w6nCmMKiwqvCgsOhwqQ=','BsO6wpgyw7jCmcO+','YcO4UcKhVB8F','w5RAecKP','5aen6Z6f6Lym6KCK5LmX5pSO5aaS5p2D6KyT6ISl5bCk5Yue6YCF57qu5Y+p5oqr56e/6KOB5YWr5Lqi5Lie5Luf','cSM3Ag==','5Luh5ayW5pWB5YGc6Zeb6LaP6IG86K2H5by/5Lib5Lii5q+056+h5LuH','w5wRWhE=','546m5LqA5LqP6YGO5Yqb546C54qT5oO7776h5L6/5Luq5LmQ5LqD5Yut5LyA55S75Lip44On','IcOsw4Vg','wr8cw54hw4EBDcO7w4/DtVbCisKvwrPCuw==','5byd5LqN5piV6Ian5bWS55ihw5g=','5oip5ae55aWh57iT5Y2Q5pWT6ZWu6Zuy5YmR','5oqP5Y2K5Li95puW5Yy35YCo6Lad','6Lax552H5aW65Lms','fXzCnsOk','G8OFKDUOZcOLFRrCnMOq','w4IRUxI=','JmPCly7DtQ7DiQ==','6YOT5pi05L6M6KSO5a6d55qZ6L2L5aaN5Zat','EnDCi8Oo','w5M5FD9qNMOk','5bS15o+W5p+q55Wh5oiYNOWLvOaciOaXkOmUkcOf','AMOoJnxUcBjCm8Ovw4/CpMKrQFDDj8OzHcOzwoFvw4TDpcOIwo/CgcKKwrVow4MyfsK1I1jDhMORa8Oe','fik9AMO3wrk=','WcOlw4ZCwp/CusOVNw==','5Lm75paQ5aSP5pyJ57qh5Yyt','a8KzFVTCr8OG','QyExw5thJg==','542+5Zym546P5YyZ55OA5Lq6','w7DDlSvDkcOWwpdWwrHDrQ==','wpQLwrRGIj/ChFQ=','bSvCvxwvwpA=','Ujolw4dx','ayDCvgY=','6aK84oGo4oGi5oqk5Y+u5bGa6JeOwpbCoQ==','bQ/ovpzpm6zkupXlip4=','5Z685a+V5bun5Lq05Li+5ZKyaA==','5pmg5ZGUw6o=','wrg7wrvCr0rCuQ==','HcOFEz4dZQ==','5bC86amo5Lme5oqV','w6LDgDs=','5Lq05Yui5pWs5qOc6YWf57295b+05biK','V8O6w7ZF','5oiw556r6YCX5Liz','DsOpw4g8w5w=','c0ZQBDJt','wrMowocwRmzCpXYIwofCisKWw5g=','w64Sw60HBsOi','an3ClcOg','5rKg5rCM6KWn6aKv','H8KHwpQZCAdm','BMOHL1BfPsKGazxow6vCnElsw6hxUMObwq0=','w5fDhsKxPsOiwrtd','5ouT5a2M56WG6KOGw6HCsw==','w4nDhMK5LsOh','UMKaNDLDmnDCo0tDKQ==','w7k2w5sBecKEf03CvsO3w6J/UsOWDSkkwqc=','eMKwwrkCwpbDpMK5wqfDosKGGR4FwoXDksOefMOHME3CpzZA','wprCuFQqw5fDjQ==','YDTCrxwewpHCmw==','aCXCsw==','5bug6K235Lug','M8OSNmfDqnM=','McOxCMOQw7QLWkXDiQtHCijDmsK7V3JQZn3Cm2fDg8KJeHTDgg==','55W+6ZCb5bGO','HMOFC34AecOjHRXChsOvwoA6eUNXwqbDog==','F37CmA==','w4/DhsOAwoXCvA3CpQ3Do8KTW8KowrrDsX/CtRXDvsKrWQ==','b8K8Vg==','w6zClMKiwrvCqMO9wp/DsQ==','5by26YeO5oGM55+d5Ym855miw6rCs+S6peW6leaUk+eakOahheWsueKAsOKDvg==','NsK1wpDDlg==','IsOrEQ==','GMOiw48rwp4R','HsOEAiIWf8OpVA7CgMO9woIteENrwqnDrQtgO8Kowpk=','d8K9wr4hwpnDu8K+w7Y=','w7rDpkTCjQ==','wpTCsk8jw4fDlg==','wpnCrV8jw7bDl8KL','QkgkJUwvwp3Dvg==','wqQEw4M1w5dkUMK9w4nCs0PCpcK9w6nCpMOzwpwVwqwhw7/ClUNGw6QVw6PDiRYUJcKHwqpsw4XDgsOyw6Ftw5HDggtZMsK8wopWaSnCg8O5w6gawoEDeyTDtcKQw4zDqMOAwqx3FMKrPSHDisOhRj4iYVJBLMO0w7vDgcK8dAFSwq3DtljDpGMzN8OUw6TCvnfDlsK3w7XDvj1JPsKXQQ==','5rOZ5p+r5Yie6YGE5bie5Y6PPuW+meWkvOi9p+ijjOS5g+S/oOS/qOWQvuWIjeiDig==','w47DhsOYw4XCqAzCiQXDscKZWsOj','wrsKw50p','w5kPCQ==','6YS55paC56qI6ZS2','wpfCs14/w4zDjMKDGQkpwp8BwpAxw4LDosOYw5nCvjlEbmZxexDCmw==','eCXCrsOAw5hC','5oie5Liw55ey6Iai5Li2','w68+w5US','57yy57mb5b2J5bmqDOeolOessOWElOelkOWSqOmFh+iskw==','F8O9w40swogTwqg=','w6LClcK/wq/CjcOgwp4=','ZcK4WmbDhsOC','6L2G6KOO5ZCX','wqQxw4RnV2HConpDwovCgsOaw4fCoV3DkMKfwpACdwk=','EcOrwpI1w63CmMOF','w57CssKswoo=','C8KHwpQJDAtz','5om05bqx5L6W55Sf5oaS','wqI6wqA=','wqnDjcO8wpvCpcKrw44=','N2nCjDTDtA==','AMOrKiFfVxjCmcOn','w4DDjsKiKcKj','KWnClz3DkxDDuQlI','NcKFw5tEw6LDjg==','csKmRnDDmg==','wqxsVcKZw7E=','w7XDuFLCigs=','6LWL6ZKY5bCq6Kas6aOH','annCg8OzdDIP','w5YzFQVrP8OZwpPCpEjCr8Ku','6Jiv6Ji255+C54O0','5rez5bi75ri655OT','fy/CtMOH','w51KbcKeFg==','D8OKKgQ=','LHDChcOyw7UcwpE=','wrgcw5sLB8KHwpAhwrVh','NMOFKnrDunM=','wq87w4AuR2A=','fMK7w6MmwpbDpMK1w6rDpcKXEiUI','5b6M556j54O7','woLDlsK5JMK9wr5awqQ9SMKoB8KTIMKSwp1Wb8K+KGbDtcO6O8Onw5fCk8OQ','wozCrFEpwpE=','YyXCocOH','wpMOwrJbNSA=','w4AeTxAy','w4/DmMK9OcO9wrQ=','wpTCsk8jw4fDlsKuWQ0pwp8D','EsOxw408','5aev5LqC5YSp5ayu55qj','5b+n5YiR6L675YSO5b6h5L6t6aOl6Z6f','Wz8vw5E=','wqQxw4RnS2bCrXBJwovDi8KGw5LCqVc=','55+36YCf5b6c5oOz5omK','ecK8wqM1wrzDpsK5','5oqJ5pm654mt6auy6LC06LOI','54iu5Luf5Yax6ICd','5L+05bmN5LqY5bma5omn5Zaa','c0VKCT17TFIQw6E=','U0kU','5YmT6Ly55LmB6ZiCAOi3qui+vg==','5YmA6L++5Lia6Zqrw4Dot7XovqE=','5L6A5oKZ5a685oiw6L6e5Lmd5pao5LyF5ZO9','ecKnG03Cpw==','wpU7w7YLW3o=','O1jCncOHGlrDqVJRw7ZCwrfCkA3Ci3QLPcO1w4tVBQLDnEbDmxTCuQ==','Tl0NIA==','UCI3woc=','wp1nw5bDuj/Ckg==','OcOtVw==','fMKmTGbDmcKcSQ==','5b+45aW15ZiN5ayX5paq6ZW35YaQ6Ly46KCO','AcOHMAlGJcKDWy90w77Chwhz','5Li15Yqv6K+A5oCs','6L6d5Zyuwokzw6oGw7gfVw==','55ee6I2Y5YSt6LWS5bCA6K64','VMKXIQ==','wqAcw50zwpY=','H8KHwpQ=','wojDi8KD','5qyD5aWZ6Let54O8','5b+m5YqU6LyT5Yee5by95L2U5pyq5Y2s5Z6d','w7LDjjXDisOawppBw4E=','woMFwrcPMjXCnwbDujbCkMKKw7ga','w4/DjMODw5/CqQ3CmA==','5Y+w5pum5Lu05Lu55Lq75puf6a245Ya05LqB55aw5bKd5puy5aWX6b2h5YWr6YKO','5rOZ5p+r5Yie6YGE6Kes5Lm06L2v55idwrbDp8OQ','6LaK5bmG5LqV6KC+5ZGcw5w=','VUgaf0cpwobDtcOwPS3ClS7CslAGfQ==','w5VS6L626Zik5Lq95Yux','wqTCmxzDiznDnQ==','worDkcKCw6M4','GHnChMO1wpl/','6Ke055ys55qD5pO85peI6Zay','X+S5jeaWruWlpuadjSfniLHmn5jplpvorYnCpuisseS4qui9n+aOo+WsjOeIoeafscOI5LuM5pSP5aaQ5p+Zw4E=','w6bDgCHDhMOHwoBr','LCzCuMK6Y3rCg0HDo1pGW8K0wo4GCcKeBBbCu8On','5LiS6KKF77yu5L215Yip6ICN5Lih5Yah','wrHChxzDnSbDlQ==','bCvCp1w9worCk0JOwpg4Nw==','YcOyUsO7XQknwqRHRMOCwpR7PjbCsys=','5Ymu5ouV5ZKg6aS15Y2W5Lun','6L2f6Zu35Lqu5Yu9','eMKkBlrCo8OY','5oqU5YS855uL5pS356mC6YCP5Zya5a6W5qK45YWr5b2m5qCe5bOm5Yal','55WH5Lqh6LSz5ae85LmB6IGX5aa6776b5puI5LqE5pqQ6YC35oK+5p2D5LmZ5Lmw55mF55m1','6L6x5ZmBw4N+','WkIZNkou','5oui552Z6YKh5LmE','wrQqw4g7Ww==','w7PClsKmwqzChQ==','5LyW5LiD5Lmd57qI5L2e5ZSM','wp/Dm8KDw5k5w7th','5oum6Z6z5LuI6LeC56Wj6KKN','FMOrIDk=','w5klAg==','6Jm66Ji/5buZ','OMKew4JN','b8KoUGbDkw==','woTDhsKYwq4=','KsOPwqYJ','Fil+wp/Co2gFwoU=','5b6c5pam5Li55Ymm5beS6L2g5Yqn5LmP6ZqT','wqcXw448w4AkHcOww4o=','w7DClcK5wr7CicOqwonDscOS','6IWe5Yu05Lmq5L2L5L2T5ZKN','IcKCw4Rfw7LDs8Opw7rDucKpwr0=','6K6H5YWo6ZSB6L+g5LiNMemFnuaUp+i8vOWHrOWSkOWJog==','wpvDkMOZw7o5w698w4YxQFNcNA==','w4QpFA==','IMO3AsKWw7Q=','JTHCocOgenHDhw==','LCzCuMK6anrCl1zDrFhFVMOzwoQNQ8KFBRrCqA==','54Cp54KF6KWn6aKv5pyB6YKz54uR','w4pfZ8KODcOAY1c=','wqR9ScKH','wqYwwoHCr0XCvcO8IMKn','bMKwwq4kwoHDocKowr0=','HsODNk8=','dVpBHmQs','wpFmw4vDqWU=','w4rDgMOKw4PCuAvCqQXDpQ==','dyvDtQ==','6YK85oiw6Zy75Lur','5oql5Lmc5bmG5a6S6K695YeJ5Z6q5bOM6amV5oiw','5aWW5aaD54mX5rmV55G/','G8KKwoEjChx6w6w=','a8K/BkzCrg==','PsK/wrLDmzsAw6DCgMKo','WsOmw75SwprCqQ==','w5XDhcOGw4A=','w7LDp17CnhUH','YcOyUsO7RQQ8wrkdV8OLwps7LyfCviDCkA==','UUIDBVs+woc=','5Lib5oqW56ON','wrfCjA7DnzHDlsOTw4wUwrHCpgc=','NmPCjRnDvB3Doxltwrw7w5w=','wocPwq4=','bMK9Q2fDgsKxT8K9w77CisOFwqkH','RMO5w5RawoTCpcOe','UE4ZNXEowpY=','wqsVw4M=','6KyF5aea5LiX5oih5oud6IC15LuK5buhwqPDkQ==','W8K6wro/wp/Dp8K9wqDCoQ==','NcK4Fk3CrcOHERk=','UcKQJiw=','6bqd6K6i5o2r5buV','5rmA6Zmiwqoe5Y+x','eMKwwrk=','fCLCpcOR','wrDDqEM=','6Leh55+l5aaI5Li1','EsOzwp0tw6rCkQ==','aXTChsO/cj8=','w5M5FA==','FsO3w5Y2wokS','EMO3w6grwqEIwpp5','fXfCgMK6ZDgUaMKgwpgXw5zDt8Kcw5PDqcOCcQ==','5p+G54O66Zm85oSF77ys5L6Y5Y2f5b+N5p+K6YK355K344Km','RkgEJQ==','wp7CqU49w5DCn8OIGAk3woxIwpwgwp/DisOew4LCojFYDGRneUrCmMKSw4rDuzQawpxgJ8KuwpPDucOyeMOZPsKawpp/w7XDunvCg8OjwpwQOMKmwrPCgQ==','Fil+wp/Co2gD','wq1hS8OHwqRTw6ZGwpwMZhwiJWbDuBRAwq4aNXnDvcKBw4Fk','w5ccVQxMRsON','5bew6YWQ572R','cD4yCcOn','w53DlsKqJsOzwr5awp4DU8Ko','w4zCsMKmw5zDuMOQEA==','NF7CncKAGg==','wq1hS8OHwqhJw7RGwoEDJwh+P2rDuQ1Jw6E=','BMOiPx9FdwzCgMOnw5U=','TsOlw7gYwpXCqcOBIVA/bcOjZVRrw7rDgw==','5piB5o2g5ZKQ5Yi15peu5b+p','wpZdaMKEFMOQNkQOTCHDlcO8w615PCIrwpw=','ZMO0UcKxfgM+wrI=','FMONNipCL8KT','wr4vwrHCpUI=','w6nCmMKiwqvCgsOhwqU=','wp8Bw4kEH8KN','ckZIRC5rRngQw7vClsKjwrfDoMKtUD7DqCzDsXE=','HcOANx9JLsKSYT5i','5Liq5LmO5qyh','w5zDnMOZ','5rOR5rKV5b2y5a2C77+g5b6O6ayn5qGHw6M4','YcO4UcKhVB8E','NcOPMWDDu3LDgQ==','5L2654275Z2a546H5LiM5Lu9','CjBzwog=','bMKxwqUrw4I=','d0BLDhlwS3A=','wr3Clw/DgW/CisK1w5FKw6jDs0zCtcKnasKVAcKtOsKrTsKlPT0UMsOZKMOSw6xow5vClMKAccK9wp/DmVwjw4bCmQ==','P1LChMK9C0fDsw==','L3XCljQ=','5YSh5omk5Lqt5LqB','FMKYw5I=','fcK6wqko','wosswrXCqUzCscO2IcO3w5c=','5ouK5LmR5YmQ5pSb5o2h5LuK','wrHCixXDkDjDgA==','wr0mw48v','wpDDlsKEw702w7B3','woV3w4s=','5LmX5ae35Lu/55uc5aWn55ur5ZKk','5L2/5Luv5LiN5LiZ5oOI5pqn6ZmM6Lmv5Zecw5w=','UTsw','6Lec5aae5pyH','E+WmpOWLpOmGjeizuyk=','cltACyJ7','wp5pw5s=','5b+d5oms5p+26YGO54m2','Qzwlw5th','OcK/wpvCjA4cwq3ClMK1d8O7VwoGVmPDng16GyYjDcOrw5hASw==','GMO0w4ku','woIFwq9PIiM=','ZjUgVg==','Ey4+wozCiWoPw47CsXNywoFM','56y55ZO+5ZCJwrbmn7Pku6DnmJfmj7Xku43Cu8Oy55mO5ZG25ZKC','wpHCuE4Zw4bDncKT','GTNTwpPCiWUNwoXCpg==','IcKBw4wQw6rDgcK3w63DvsKowrTDrA==','wpRkw4vDqiDCjsOFwpLCnX3Ci3IEUnfCq3Ncw5UGw6nChMKXcXQ8w4Y=','E8O9w5c=','w7MGw6E=','w41KZcKe','W8K6wro/wp/Dp8K9wqDCrsOQ','w5koGg89','6YW454qT6Zy55Lii5aWs5a6054q/','5om26Z6Z57m45Yyk56eJ6KOb','woUaw4ICAMKN','EyV+wo/CiXQ/','w68+w5USJw==','GMOPEg==','EsO0w4w3wp8=','w5UvChE=','5q2R5LiQ6L6R','TTQtw5E=','5aaq5p+j5pif5ZOf5aW75b2v5qqb5byC','wpDDk8Kfw6xfO8KoZAzCsgU9w6XCnFDDlMOBw7w=','dXPCiQ==','ImPCjQ==','w5TDgsKc','w5jDjcOew4/Dvg==','5oiO6LyN5pui56+G5Lm15ZKv','wr02wqzDvhQ=','6LWs5aW35p6j','wrfCjA7DnzHDlg==','wofDmcKKwrY=','5ZGn5ZC5772f5Y6M5oqS5Ymi5oGN5q6J6Lyp5aa7w7PDlw==','6IWv5YiN5LmF5L6Q5L++5ZCz','wpUAw78cGMKcwpQow4Eow5o=','ayXCtMOQ','5aWC5a+55pSA5YGf6L2F5Yyp','5LiZ57qk5oq95LmB','LcOuW8K2UB85w7gKUsOFwoBxdi3CqDzCj8OWfcOYw65Mw4LDlMKV','ayHCuRE=','ecOlHgDCrQ==','6YeC5ZGv55ys5q+Q','5aWi5LqT5ZuF5LmQ5omG54aB6ICk5rKy5qCk776Z55eG5Li35Zin5Lqz5rGk5qGl6IGH5oqX54eX44KG','6Laf5Y+Y5a+b56Or5b285bqb','PijCocOsIw==','EyRjwovDng==','wofDk8KC','LGjCnT/DqDPDtg==','5Li96L2aV3k=','MXnCncO/PzETbsKnwpcMw5zDqMKNw5fDtg==','5YWq5Y+e5peT6Zae','5oKL6KCp576+5aaK6au75oif5Zew','5p6g6K+k5Ymm6IKn5b6S5bmE','w4fDswtjwpLClw==','O0XClcKIGlo=','5rGZ5oax5oOq6YCu54+s5Z6r5pi65Z+A5oi85rSP5Lq6EQ==','w6fDkCbDnMOG','WsOvw7xFwoXCug==','6Ie75YqB5Liv5L2K5LyK5ZOf','fX3Cg8OgdS8i','cnHCgMO9ZA==','b8Kgwrk=','DcOKJgQ=','PcK1woI=','O8OtJsKWw6UHRFTDhA==','J8KAw4I=','fzHCvg==','wr3CsnLCuCRYwok=','cMKgFkzCrg==','5omL55y16YKl5Lik','w7Qww4EPYsKC','wpcGwrFF','LmHCnD3Doww=','w4/Dh8KDw5zCqRbCqw7DuMKYUcOowrDDrnDCvU/Du8K8Q8K/JcOi','5Lu85aSO6K6q6YKs5Liz6IK76KyH5Lif','MMODMXDDkW7DvQ==','5YuF6L685Lq16ZuNe+i0lei9oA==','dkxRKTlxQ3wQ','5rWd5biP5rqo55Kt','wqx2UsKd','5py15YuT5Lmm5L2J5Ya7','5rWg5pmR6Zqs','5rib55Ce5Z2u5Z6q','6I6p5Y+O5L6N5byD5Zyg55Gb5Ly3572l','G8KMw446CBZ5w7zCjcOfw68nwqfDjsKXw7sZfi3Dtz3Dk8O8','6LaV6ZOy5bON6KSB6aKx','w6cXw7QGAg==','w5pAcMOEFMOKf0ISGyDDlMO4wqF9','Eyh1wpjCh2MC','ViIvw54=','w6QWw6E=','McO6FsKOwrI=','MsOLK3U=','RSoww4E=','wowGw5g=','5b2/6YG85a2u5oiK','wqAKw5s2wpY=','w5A4FB8=','5Lun5ZKT5Yay6Kyh','dnrChcOu','5Ymy6L2Q5Lqr6ZmuwqzotZ/ovZ4=','DMOpwqkuw7LChsODfcKXwr9STnl8','wqJrSMKOwrdU','UMKdOHLDiWfCs1NbOsOZwpJOw6Zcw4TCoTrCtxRPw6vDl8K0w6bDkMO8woN4eQ==','ayTCv8OE','5omg5Yio5Lmr','YcOyUsO7XAg4wrsASMOPw5t8NynCsSDCmg==','EsKAwoQ3','BHTCv8O7wol0w73DsA==','w4YPUQQ=','55qa56G25puC776Y5q205b6e5aWT5Zy75Yyq6YqC5paG5p+65Y2v6KKRwpvCpQ==','acKnG0rCqcOqB1/CuWdOwqnChHXCrA==','6aqt6K6P5aW16LaQKemGmOiunA==','57uM5p6K5Z2O5Z2v5ru255KO','5Lml6Lym5a265Y+9','IznCucOn','55yy55iOwqoJ','5oiO5Z+9542k6ayF5YaO5Lqe55aQ','K1jCncKM','5ouy5YqH5Lu+56Or','w47DhsOYw4XCqAw=','6K6h5Yei5Z235Li+5Lik5Lit5b2b55uE5b6+','wqAtw6zCpE/Csw==','woIIwqlRJDI=','w67Dt0Q=','wrwzwrjCo1PCvcOtNQ==','5L6u5Yil5oGQ5byq5LmF','5YyF5oOL5o+256eT','wpLDlsKa','wo/Dn8Kbw6E5w7dKwo4wUVlUKA==','Pi/Cpg==','5Lm46ZeM5aet5Ym75peq5qC3','HMOsw5cow5dOw55tXsKcwrXDocO3woEJfsKTwp3Cln7DshB+AWlEai3ClVTDjcK5w7/ClFASZ1fDikRkUEo0wqtbwpjDkHvDtmdow5s=','wovDisKWw78o','5oiT44Oz5ouy5oiY5bC+5bu6NcKjHU4=','5pmb5ZK+5rqm55Ge','57qx57mH5pOy5pSq','5L61542T5Z2T6L2p6YO25Lut5b2D5ZK1WA==','5ZKy5ZCr776l5p2C5Y+k4oCyw7M=','J8OoPDxAdhjCkMK6wp4=','PE7CmMKLXw==','w4NHaMKLEMOabEI=','6Lap6ZCN5bO96KSE6aK6','EsOFKHrDsm/DucObw5zDmQ==','Wl0bIg==','w6zDlgzDmMOHwpFZwpXDvQ==','OcK/wpvCjBEGw7nCnMO1ZcOgXAYN','5LqO5Lql5qyqwpjCk8Ob','5rOE5p6W5oqI5Ym26aOo6Z6J','HH7CgsOowo91','IcOwwoEow7HChMOHRsOSw6I=','5a6B5qy25pSW6Za5','w7cMw7haAsK/OA5xFXw1w5zDpcOhwo8=','5bO85ZK/6LeV55yv6Ket6aOD','55eG6I6t5Yeg6LaS5bOD6K6L','NcOFMjrDtXXDv8OQwp7DhcOsw64lXQVdKcK+wpnDmn0zw44=','Ul4fMw==','w7XDhD3Dg8OHwqdAwpk=','5Y+P5oum5LqJ5ZCPw4xe5bqM6buE55+C5LyO6YOK5aez5p6O5Yyv5byn5b+Ow4fogIXpg6DlpaDmnoPljrPlvIvlvqPnmoPnrbvor5TmsqPlpabpqqPmirflu7LpuJTog67lpYzorpflvJ0=','5Yy65peO6ZSZ6aCV5LmR54C65Yeu','McOPK1nDt27DrcOLwo7CmA==','5Ly65oOe5Lq+5L6z6YOe5Lin5aaZ5aec5ZaR','w6AMw6U=','5p2f5rSi5oCw6YCO55275L2g','55eP5LiE5ZWz5LiD6Iut6KqD5bey6KyF772O5aWH5LqG5Lil5q2s6LyF6IKd5ZGf5Lyx6IKb5ZOpUA==','EnTCmcOhwp9u','5pyG5riX772R','RMO5w5ZewojCsMOQNRo=','IcKLw49Kw6XDnsOB','w53DhcOe','YyXCqcOUw4RD','55mJ5L6U5L2b5Li35pis5Lio5LqC5b2O5L6g56Wn55mn5Lqf','EnTCmMO7wpRw','e8O2VcKmUx4t','fcKuBnrCqcONAQ==','w4MwCw8+','T0scOg8=','5oiP546o5Z+F6LWL5L2w6ICX5aWT5L2r6Lyd5a6S5Yy2w43Cvw==','5pKf5L+C5a+p5ouu','LsK/wqXDlg8Gw63Ckg==','w5fCi8Kdw5PCqUnDsFnCoMOKHMOowqLDuUfDtk3CrsO0T8K/YMKmfMKjOcODwpfDmwjCrkLCgsOZKD8twrQ+UMKgw5oZUVQ4wqQEC2l2wqLCv8KPw4bCukbCm8KfaU3Cn0t4w4BxwoRIbi7Dv8OxesKuwpbCtiTDsMO6wrDCs8O1VsKnw7XDscOswpQLwrFewoHDksKAw4nCp8KMEcKDbsKbwpQ6w5XClBTCvsK0w4ENw7ceKWA+AG3CnsKyEWQvNMOkw79Lwq7Cg8OTw6dJwpp2fMKiwppcWMOewrbCusKEw61Ew7tgUS0iE8ODw7pkwos3w7pOw5rDrHBaFcOZwpF1w64UOcOaw4Y8w5TDksK5JsODw6rDp1UUwqzCkcK+wqbCq8KTJ8Kgw7hbwrcbWsKpDMKmEVpAMcOBIMKowrDCjhfCocOMwr7Dkx/Dt2/DimvCkMOjwqhpw6XChcKGKkMPCV7DiGYuw4bDisKSw405w5AzwrdONsOMAxfCisKdWAAyeRFfLMK+wrp/w5DCu1TCl8OzLksJw6RnaAnCryp1W10wwpfDoAzClMODPn/DixXCql0gC1VKJMKUQxh8JSNIwrJndyjDk8OcLBPCgMOZNkA0wpMBUwjDrsO6en3CucOawpooGSbCvcKYw4pPwrghwrcWw7Uhw7jCtcODw4Rywp/DgEvCpGE1VMKEwq97wrXCk8K0w6DCmMONw7QBBEphw6rDuXldfU/CtcK7AS0DcsO8bAZKTXYjbsK/wpDCgEDCoDk6w4c0JnpZw497SMOawovDnjRQL8OYw4jDmVvCoX0rb8K4KMO+wpo7woQrOi7DrQXDvhROAMKIw6vCgDtyfMKHw5vDglPDvsOzw74qwoo9d1rCmsOewoTDmcKBw6XDt0HDnH7CvsOBYkbDiMK5Z8OVw4PCtHpfJ3/DjDspw7TDoMKgAsOzw58+wpvCjiXCpsOtN8OyD8OgFsO+w598X8OzOwfCqMO+wqzCsHNxIsOOW19sFzIcwokV','5om255is5L2a6IiR5LyH57qI','6YCa5piA77yR6KWr5Lmz5oKt5LmR5Y+M5bGz6aqv5ZCz','54CM54Gg5pW46ZWA','w6fDiivDiQ==','w7nCicKtwq3Ckw==','GsKNwpUjCQxbw7fChMOew6Qs','ckVMCT0=','57io57qu5a2L6KCC','CcO2woUyw5nCgsOU','YcOxVsK2Wg==','5omI5YiX5rWM5LuX5ZCp772Z','5Y695YSY556z5aSYSsOX','ecKgTHHDucKeSQ==','5ouE55mn5pWN6JW+','w6g0w50bc8K/UlY=','w6bDiiLCnsOTwptHwoPDsW4EcMOaNMKZw6jCoXQuXkw=','wpNrw5HDuRjCiMOEwps=','Gyd1wpw=','wrLChg/DpTDDncOu','wpDCtFQpw6zDi8KC','5Lul5Yq55YWo6YG854mY','5aem57mC5YeU6K6O','AcOwwoM/w7TChcOVR8KIwrBgUmA=','BcOHNxBDJA==','LCzCuMK6anrCl1zDrElNFMK3wpAIRsKZDhrCrcO6','w67CmcKrwrPDlQ==','AyR4woE=','5L2T6Lyp6bqE5ZGR5Y+o5ZC0','IjrCvsOw','w57CqsO6','5ZmD6IG477ya5oqk5aSI5aaG5Yye5ayc5Y216bie5Y+q776056yp56eR5YyV6bmn5Y2Dwp7Dvw==','woIZwqJQdA==','NcKgwpPDjCgdw68=','w78ww5s=','wpvDlMKBwrJBIcKr','w5XDmsOAwpk=','6bu56K+q5o+W5bi6','w7jDq17CnS4Bw58=','5oqZ6Z635pul5ZGU5oup56Ws6KG8','wqxhU8KHwqdP','54iQ5q+x5LiT5ZW8','B8OwwpI/','w5czDUVkOcO3wpLCog/CqsKlJwZpw7MgwrAoZwk1wp8=','w73DrV3DlwsbwpRlBgvDgcKsWw/CtAjCg8Kcw5o=','wo0TwrgT','NWfCiynDtQ==','5Lmd6L+X55ub5b+/5ZK55ZOI5ZGQ','w4vDhsKkK8OqwqpIwqo=','w4laaQ==','5rKz5oiy5Ymj5Lqc5Yii55ad6Z2C','a8Kxwr41wovDsg==','djrCv8KKwoQ=','Iy/Cv8Oi','5oqM6Zy45pmd5ZCI5omu57iX5Y2w','wonDisKD','w6bCh8KgwqzDlQ==','w6LDgDvDpMOLwp9X','w4/DmMK8I8O2wqp2wr4RV8KpEA==','w73DrV3DlwsGw49+AgvDisKgRg/CoRTClMOIwoM=','T8Olw6BYwonCoA==','c8OpS8Ok','F8O9w40swogTwqk=','wqcmwqPCo0XCrMOII8KswojDncOLw7zCgwJAFMKhw4FkeDfDgsOOaWsJ','wooZwrVP','5LmA5rGo5omc5Yil5aeL542Z55qo','5byR54eY5Lin77yy5oqR6LWz5Yqy5Lih55ag5Lm25pu+5LqO5Lqz5qKB55iA','JmnClznDsQg=','JsKdw4VKwrI=','Am7CgsK2w48=','w4grwrRFND/CmAHCsG/DjcKEwr0UOktiNW3CmSduZ2FVFUbCg0U=','EjNowoo=','AcOBLBpoOcKC','fMKsTGHDk8KCdQ==','wpUdw4gAE8Knwpc=','wpZtw5LCsyPCg8OJwp3DinHCkTofBDjCrXwBw7gAw6/CjMKeIncqw7zDlQ==','w7gGw7sTAsK4','F8OJ5ayV5omv5om05Lma5YSd5p2h44GPPg==','wqwtw6zCsEXCt8O8IMK5wozDnsOKw6zCphldW8Kiw4xjQibDgw==','wrFtw4jDszvCicOGwprCnSw=','wqA7w50aSnjCqXRSwoDCgcK9w4PCrV7DpMKFwowPdg87w7Y=','5p6D5Lm25ZOb','5ZaN772S6YCK5LiB5aS177yY5LuB5LyN5ZCB77+p5oOr5Lq85YOt55mMDA==','bsO4UcKyRQU=','5Yii6L+y5LmZ6Zi3wq/otKLov6c=','w4Dlh5HnuInph7DosIBq','5p2J5Yyl5Z6p','5o+q6I6+5Lma5Yqf','dsKuHEnCuMOd','wrgEw5Y0w4hs','w78ww5s8c8KSVA==','Sy/CsMOdw5xEw4Nawppm','wrUxw5wnSw==','OyzCpQ==','w6fDijrDnsOGwoF7wp7Dqm4CdA==','woMFwrcPNSPDnwTDsTzClsOLw7wTe0c+O2XClDpxKGEeA0U=','wrgqwqbCs0g=','5oWa5oOD5Luz6L6C5pq/5Lm854uX56iQ55me','GcODCDQ2eMOuHw==','Risww6FgLT0=','5p6w6aKz55+w6KSs6aOv','w7cMw7haBcKjeQJ6FCApw4HDoMK9wollKcKew43Dnx3DisKK','ecK8wqM1wrzDpsK/wqE=','5bS85riL55Cg5Z2q5Z+9','w70tw4YbYsKZ','D8OLFCMc','aMK+wrcrw4I=','56Wb5a6b5LuG6Kyr6Ly+5Y24','wophUcKHwq9Tw7RLw4ZT','w6rDpkPCnRkV','w63DgCbDl8OKwoY=','di3CpBUgwoY=','wprDkcKCw6M4w7BcwoYxXVhL','wqwswq/DqUvCq8OwKsK2w4rDkMOKw6/Crh5dEcO7w5F7QzDDhQ==','OljChcKHCkw=','YyjCoAQ=','bCvCp1wywprDmV5Yw5ooOnU=','5L2s5ayt5YiL55qQ5YaP','NFLClsKd','GMO5w5Y2wo4J','EcKRwqMlCBx5w7zCkw==','KSrCu8OwXX3ClVc=','wp5pw5vCrA==','5Lq65Lm15q2e','HsKLwo4pIhFxw7w=','w7s9w44GccKJSErCtcOy','KMOj772O5omv5YaU5a+N5Lmh77yI5Y+26KeA5L+qw5I=','w7Ebw7wHAsKj','aWDClMO8','FsOZJTgcdcOmHx0=','w7HDhDzDm8OrwpYP','576x57q26ZS06aK5auaWsOawpOaipeaduuaZt+WTgumepOiklOaag+aXpQ==','NcO7EcKqw6UcWw==','wrbChhXDhTDDl8OD','MsKkwoLDkkdAwqzClMKyPcK7VBFMG3nDlEA3GWA9DcOrw4EaRglZw60=','TsOlw7gYwonCocOaNxEpKsOwb09n','ccK4AV4=','w5bDgsOew5vDvg==','w7HDslXClzQdw5Y=','F8OzLyFc','w6/DqUTCgQ==','wpofLcKuPMKbKw==','PU/CmcKaGkw=','5bCi5ZeO6LeP6ZKH','ckVACyRBWHQbw7DCnQ==','5LiP5Z615LuE5Ym06aGE5q2M5pStw60=','bsOnU8Km','w5fCtsK9w5XDt8OG','w6vDgDfDhMO9woFGwpXDqVgEZMOHK8KTwqg=','wqYtwrbColLCrMOiNcK3','5LiN5pa75aad5pyo57qN5YyR','6IKY5L2n5a2x56GE','5ZiJ5aym5pSE5q236L+76KCe55mN57u25ZGw5Lig5YuF5rOy5p+C5YiU6YCww7HDtMOD','w5/DncOMw5nCuA==','5by65a+B5L6C5piORA==','wr82wrY=','w7zDiSTDmw==','6ICM5Lyg6LeW5Yye','ek5ADQ==','wrcrw50=','w7cHw6YEBcKg','PsOeK2TCpC/Ct8OVworDhcOvw6kmQwNVI8O3w5TDkXpww53Cr8KjFcOWamFlwrnDmsOfwrbCkcOBw73Clk96BcKMwrzCo8O/R8O5w63Cp8KiwpljZ8K9','RsOySMK7XQI8wrNd','wprDjcKPw7w=','I8OYM+WkmeWKqOW8guW6oA==','wpZtw5LCsz7CiMOAwpXDinrDi3gbHXM=','woQFwotlPxbCngbDqis=','fMKmTzvDnMKdAsK/w77CmMOJwrI=','A8Krw7I=','ckZIRDxqBn0Uw7vCmcOswqnCp8K1XS/Doic=','aTXCpxQzwpA=','wqLCiAHDiw==','asK+Bg==','6Ya1576M6K2Q5byY','HWLCh8Or','JHbCiT/Dvhg=','w5oSQhFnUsOKw7Q=','wp/Dm8KD','dcO8U8K5VBkCwrEbW8OPwo9w','NUPCisKN','5oy26I+S5LuL5YmY','wpXCuFQ5w4bDl8K+','5om05pqw6ZSY5Lym5bup6b2vwpkd','5Lu05LuO5Lmu5Zaj77+P5rSH5our552v5Lm05ZSh','IcKBw4wQw7PDhcO3w7rCucKjwrDDsMOaw4U=','IMKWw5VKw6LDjg==','PsK0wpHDjk8=','5b2w5aaL5om36KK3w5k+6LyK6Zul5Li55Yqm','w6bDiiLCnsOIwoYcwpjDuGkOcMOdccKKwq/CrH8k','wrw3wrDCrk7CuQ==','XcO/w6E=','5b6l5YqQ6L+h5YSo5LmY5YiE6KyB5oOy','ecKkHwDCpsOYW0DCt2tfwpk=','AMOoJnxYfBfCl8Onw4jDvsOoTE8=','5o+65L+z5oi/','5rSr5Ye/57eS','5oq+5py45by35buv5YaX','PcOuAMKQw5UWQw==','w63DkTvDgMORw4gdw5/DtCkEcMOaO8KJw6jCq3UmBl7DrMO5w4UYw4LDt0hfwoB4wonCpsKHSAUrw5cRclnCl2XCnsOyw4zDrF9IacKAw5TCnsKTw7Q=','HsOzw4c=','fMKsTGHDk8KCdA==','6K+V5Lyu6IKS5bKE5Zad','GMO9w40/wpkJ','5Lm/55Wx6Ieb5aWo6ZO65ZKjw4g=','Risw','KCbCocOcfWbChEE=','eX3CmcOAdSUO','w5fCocK8w48=','w7rCiMK4','w7Emw6wAc8KJS1rCsw==','bCzCrsOQw5tKw4BSw4g=','w47DmMKkY8OmwrxRwrMHUMK5W8KNJA==','w4coARl7','aVNfG2Q=','c8Kvw78=','5LuM55qE5oGE5p2M5Lqk5Lm05rmH5oqd5aaP5ayr5Lii6Lai542k','YMKjB0/CosOMAFPCgXpJwpPClG/Co8Kcw6g=','5p++5Y+J5Z63','BsOzwp8lw7Y=','wrY6wqbCtFA=','F8OMJhZFZg==','5YuN6YO75omD5Y6K5rS1','wpXCsxQ6w4bDjMKMUgQowpQIwpI/woTDh8Kfw4DCoyxTUXM=','XsOuw71Mwo/CsQ==','HMOmwpI1w63Dmg==','woPDicKG','VsK/6Lyn6ZmX5LuX5Yq4','IcOPNmfDtmk=','BsOtw41hw5k=','wrwFw4M=','FMOmJz5JbQ==','aMKuH0HCusOQMV/CrA==','EMOvJTNBfA==','A8O2wpgiw5LChcOD','fS3CsBoi','6K+45rCG5oug5ZqM5aW66LeGw5YGAA==','w7rDu1jCmw==','dijCoRk8wpk=','5Yme5Lqc6Laq542Z6Ya/','XsOiw6VBwok=','w7zDrUXClwUcw7NjFAzDjcKo','w5LCvMK8w6vDssOWSsOGw7LCh07DuXVkdsObw5s=','wpEHw5YB','6Lyy552I6KSE6aGW','w745w4AHZA==','5q+Q5ZKh5peH','EnnCn8O/w4k=','6IKT5L2J5a2v56GI','wpXCuFQ5w4bDl8K/','wqHChwjDlQ==','QMKdPy8=','P8K+wpU=','McKLw5Vqw6XDlMOt','wrzCkDjDmTDDhsOxw4cD','5bGd5ZKd6LWC55yT6KWG6aO1','w5YQTw==','G8KNwo1jDApmw7bCn8OYw60sw67Dh8KPw7dSbQ==','5b236JuT6KSr6aCF','wrFbw5PDtDzCgw==','EMOhw5A7wpcRwpJv','Ei9lwpXCiHUvwo7CsW55wpY=','McO7C8KKw6UWdw==','w6PDjCHDlMOtwpxRwpU=','5beT5Z2m5p2P5Y2+5ZyN','a8Ojw4bCkuadtOeDlg==','V8O7w75Sw5w=','wq8Vw5kxw4EsJw==','e8O3R8KtAA==','C8ONJAo=','WsKBFjTDmHDCoFtF','6IOC552e54CW','wpl4w5PDrg==','5a2f5a235YmH5omA6L+n56aL5aGw55eV6L2B5bay55uG6L2n5ZC4','wpvDm8KZw7k5w7FN','HsKLwo4pIhF3','cSM+ScOowqRHMsOfw6jCs8KGBkjDnMOQAMKJf8KWMCd0','wqvCtwXvv7XlsKTnhZnlh5LooqbkvIfnjbnkuoTkuYsU','wpRsw5vDrzjCj8ODw5DDmHbCgXMXHTjCmmBbw4AOw7Q=','5YKd55Wp5LiT5pap6IOS5LyO5L6z5aWk5Lqc5ayh5bup5p+v5Li55p+i5p2W77645YKw5aaM5Luc5aSz6LWD5L2O5L+n55W+5Li85ayt5oKX5b2h5Lqi6L+s5Y68','wqrDlivDk8ODwoBWw5/DumsJZMOXcMKdwqfCqTQhWg==','w73DrV3Dlw0Gw4BkSRPDgMKpUE4=','w7sww4Ecc8KYeA==','5aev6ZWI5L+j5oKt5byr5aaZ','dkxRJz9wXWEQw6Y=','dSzCvxMlwprCgkIQ','55ek55u06LK255uB54eD54iZ','5L+R5oG75Lmz5Lml5Y645q2T','wrbCjBbCnyPDjMO+w4cIw7bCugHCqQ==','KSrCu8OwXX3Ckw==','PsOfMWDDu3LDkcObw5Y=','W14V','QUwNKww=','PsO7C8KZw7QM','wonDlcKDw7U=','5bGr5pu/5oCF6KyL5aWa5a+Z5LiF6KSW5Lub5LiY','E3TCgcKhwpF0w7XDssKJwqfDm8Krw5Auw7hW','wogKw58=','IcKBw4wQw6zDhcOjw7LCucK6wrjDp8OWw5k=','cCMmCcOnwqJpM8OZwq/CtsKN','5oqJ54+l5Z6H5Z2A5omo5Luw5YqB5ZGn55mT5oqG','w6nClcKpwrzCjMO2wpg=','w5A9FAo=','woJuw5TDuQ==','5aa757qI5YWR6K2D','w4XDmsOuw4PCqRzCqw7Dpg==','woDDlMKdwrU=','5r+f5rey56Cj5L+05oOZ5p+56K+Dw6XovYzoorDohYblibXphrPorK0=','eC3CrgYj','6YWh57+H6Kyd5b++','w6LDgDvDo8OHwp5XwpPDrWICWMOHOsKRwpbCp2kiXVbDr8O2','5rGB5p2j5LmR77yt5ZKj54S3556x5LyF','w57DksK9DMO8wr1xwr8WV8KrDA==','wqQxw4RnXH3ConYIworChMKHw57Cuw==','G8KNwo1jABp3w7XCnsOBw6VnwqnDmsKYw7lSbA==','TC8ww5Zt','CSx7wpA=','5Y+A5LqT5pSJ6Les56a+6KOm','P1LChA==','O1vCmcKKBQ==','DsO0wpI=','5b6s5ay/5Lyo5pqv','w7jDq17CnS4Bw5lo','YlxHGSJs','5oqT5ZuR5YqC6ICX6YGk6L2k','HcODMQ5UJw==','6K2D5YSv6ZaN6LyE5Lu5YOmFneaVjei8jOWFhOWTpOWJow==','AjV+w4LDmA==','S2zCi8Ks','5aWy57un5YWc6K2S','w4bDhMK6LsOowqlcwqM=','5Lua5Lim5b+I5ZuP776S5Zub5ZmD5Y++5YaG77+n5Y+M5Yet5Yuh5YWE5Yal5Y6P5ZqW5byH5aeg5bKjK2A=','NsK1wpjDhQkH','5YmE6Lym5Lqp6ZiIw4HotpLovLY=','w4HCvMKww4/DkMOaT8OTw7TCi23Dqw==','5YSJ54yM6Zer6Kyt','TcOa5ZOs5Z6D','5YmI6L2c5Luq6ZidQei2jOi/lQ==','cnnCmMO6czU7e8K1','w6xzwoDChmXDqcKk','wqI6wqDCtFA=','e8Kmwqklw4LCuQ==','w5w0ExtlP8Oywo7Cpw==','azPCt8OUw4o=','bm3CmQ==','AHfCjcOhwog=','LsOBLGQ=','w4kWUw==','T8KiQWbCgQ==','w4PCvMK6w4jDusOaT8Opw7TCj2Y=','552T5p2S56+c5Lug5q2P5oiu5bW157u+5Y2U5o+25Lqw5LqZ54GE5Lmq6aGr5LqH772u55yY556y566G5Zu75q2K','HMOGDzMS','w4/DhsOAwoXCuBrCrgjDp8KeSsKowrrDuTbCpA3DucKjXsK0eMOlJ8OyLcKUwpDCgDbCnwLDtMKcZ2oZwrhmBcODwrE=','6LSO55685aeg5LmG','dkxR','KMKFw4UP','w77CksK8','wogSw4ICD8KHwoQ=','PFPChMKdHU8=','57G56YGX5LmS5Yuo','E8KJwoQ+HQ==','wqfCjA7DnzE=','SsKLMS/DjXHCqQ==','BzJ5wo/CiUQfwpTCp3Q=','wrwnwqrCvQ==','wpDDk8Kfw6xAJ8KuZQ3DtQU9wq/CmFbDmcOAwr3DpTTDq8KqwrU=','J2nCnSM=','wpHDicKGwrZEPMO4','wqHChwjDlWQ=','NyjDpA==','wrbCjBbCnzTDkMOuw40PwrfCrwfDr8K1dcKVCMKs','LCzCuMK6YWDDmFPDpVdWVcK0woFNUsKQCV3CrcOjw5TDnsKu','wqUYwqhONGrDkQ==','wp/lipnCmOW7n+WTqw==','5oql5YyW5YSm6aK+6aOa55uI5ZGY5ZC1','w7nDp0TCsQ4aw4h+','5ZCA5L6c546S54OR5ZWm5ZWi','OMK/woPDjBkc','fMKmTzvDlMKRQsKuwrnCjsOJwrkcwpd4','5YiX5LqC5oi15Yu1','ZHDCmMO1fiQPbsK2wpU=','6Z225Lu1772D','w4LCtcKjw58=','F8OdNg==','wrllXMKT','6K+q54Kh5Lit5LucPnNU','QiEpwptnNCfDkMKwI0TDnMOLTjo=','ez8QD8OmwrJLOMOO','5Lmf55276YC24oOi5bKP6Zu05Lqh6Ye/776s5aWN6Zq45Lu+5bmf4oK25ZOFHQ==','BsKxwppow7w=','5bul5L+c56qI6ZS26Yen5ZG1','ckxLHjNscQ==','dMKuR3I=','enfCvMOQaRETYMKg','YcOvWsK0RQg=','w6bDiiLCnsOOwptIwpnCt3EPdcOWMA==','5Y2v5Lq55pe/6LW056Sd6KGS','bCjCpsOdw5dIw4pLwpw=','wpXDlcKcwqZkPMKs','acOnXcKmWw==','csKhwrc1','5oiL5LiB5aWb5Ly/5oKj','woDDncKfwrw=','QiEpwpt9PCjDmcO5OkDDlsKHQCxMw7rDkMKpfg==','WkvCveWHr+WPp+aWq+mWjg==','D8OtwoIyw7XCiQ==','wqQxw4RnRX3CqnJIw4vClMKBw5zCqV0=','6Ya454qU6Zyx5LqX5aSH5a6J54uf','5by25YuS6Lyt5YSj5byz5LyK5paQ6Jet','w6rDtlLCmw==','wobCqE4=','w6xbe8OS','5YqS552v5oC4','57Oo6YKj5Lqk5Yq1','bCHCpAYuwpHCrw==','5oqV5LiG5Lm255+x5oGw','E8OmLw==','w4gGVlo=','BytqwoHClG4V','5Y+o5pqy5Lu/6bmoDlI=','w4AlE1o=','w5ItDQ13Pw==','IybCu8OzZns=','w71AasKEEsOMeENNAA==','LCzCuMK6anrCl13DploKV8K8wpcIQsKD','5out55Wb5Lqh5Lmv5ZSh','BsO/IiFYag==','fsKlwr0Ywpc=','5omL6Kyk5ZO75a+15oGz5Lin6L2a5Lq95oKt5L+E5ZOr','5ome5LmO6ICD6LK26LCw5oiC57in','wqM6w44l','56W56KGW5Liw6Zidw5DDjw==','5Ym/6L+95Luf6ZuEPui3oOi8sQ==','fXfCgMK6YTQPeMKtwp8BwpPDqcKSw5/CtMODdsO2ScKD','E8OPCDcNfg==','w6HDgTvDhMKQ','5Yi15LmZ5omF5YuD','QcKbMjTDiQ==','w4AoBBh/','w5IaVkZyQcOdwrXDkMOOwoFEwo/CksOjw7Izw5nDm3NY','wpkBwrBSJGI=','A8OMOgkW','fMK7R3TDgsKV','wq1rSMKdwqZOw4w=','McKwCcOQw6E=','K1PCmMKTXA==','woHCvFYhw4bDkQ==','ZkBBHj4=','MMOxEMKQw6QXZl/DkwNMFQ==','KybCpsO3','5qyE5Z6A5oip5o6x','w7rDsUDCgAk=','O1LCnsKdC03Dng==','F8OzKiNAagk=','TsOvw7tCwojCocOi','6ICC5L695a6Z56CV','5L+l5Lqo5pmg5oKl5a+15oqh5Li/5YSK5p+85LmPWS4=','5Yqz5Lmy6LaS54yL6YWC','ZS/CrkM=','O1jCncOHFFfDqF9Tw7tew6zCnA7Dj3QJcsOXwoRXBwrDkA==','aznCr8ORw4NI','TSIuw4M=','5Lm5566+5q2357yJ6YOy','bCvCp1wpworCkEFIw4UpYGQtQsKxVMKdeEVp','wrA3w409Rw==','5py+5Z285oiA56Gm','5b+G5ouB5pyU6YCp54ql','6KyI552s55io772p6IK95a64','5oqk55y86YKb5Li9','57KN6YO75Lqu5Yu9','wozljYbmjb3njJvphJ3osLnDug==','c8KsTHLDgsKY','w4TCrcK8wok=','5puv5a+h57mg5Y+C','wqxhU8KHwqdPw5xBwoECLBg=','FyVkwq/CiX4S','5L6v5YyV5Y+U5aWB5ZOh5ZaU','EcO+wpQZw7zCncOHVsKFwqQ=','U18eIko1','5LmU5ZG75Ya26K6c','G8OPEjEQesOSHhbCnsO3woknbQk=','5L+V5oqn5Yu45bWe5L+P5ZK777yt55mT5oyw5Y2Z5Lq55LiT5bGb5o+V5bCg6KOy5Liv','CihlwprCgn8TwoU=','LsKLw49Zw7TDhA==','f8KzG13CuMOG','5Lyl546v5ZOe','w7HCtsK/w5XDv8OaQMODwqfDkA==','woISwq5Vdw==','AcOmw4Q=','5YqE6L+i5Lmq6Zi7I+i2v+i9lw==','5p6K6Lys5byV5Lif5Lqv5ZOxw4M=','I8Kjwps=','VVUSMEoj','5be95YS35rCi','VUZSBDpxSXFDwqY=','wp/DmcKcwqVfOg==','5b2p5a+85L6+5pizHQ==','6IaN5YiA5LmI5L2e5L275ZKW','5oqgQwvlhITmlqflnIDvvqTkvqbmnrXnmKPovLjljp7puZvDhsK5','woHDlcKVwqpf','JMOLMXDDsW0=','5omD5p6y6LuO5bOP5byI5oq/5a6N5rKQ556r5Y2Q5Z+36YKN6Zmv55+r5ouD5ZC1','5Zat4oOI6IKg5YWSwqHCkw==','YC7CjMOWw4lvw41Jw4M=','w7Inw5scdMKI','DsOoLzdA','w63CmMK4','6L6d5Zyu6YGa5bio5ZKHQw==','6JqT6Jqo55yu54OT','ByV5wojChG8=','5be96KaG55+B','w4pAd8KZEcONN0QTWA==','VSEvw5Br','XsKkBUDCoMOaFFLDrzk=','eEdBDy5RTg==','5o+T5aWB5YO05oqh','5a2H6KOL5a6q5ou5','55WU5Li95p2C5LuU6ICt5amf77215ZCe6YWO6L2+5p6D5byt5LmxHcKF','5YSl5rGCZQ==','bMKhUmLDkg==','fcKmVmHDmcKd','5bmi6biR55+P5L+06YKh5aaD5pyn5YyC5b6X5by/wozogKDpganlpovmnIvljq3lvZXlvbLnmoLnrZzorrPmsr7lpbDpqbzmiJLlu5XpuInog57lp4PorYflvYQ=','eMKsVg==','d8KrSm/ChA==','aMKiWG/DjsKYXw==','IVzCmsKaDA==','wpZtw5LCsy/Cj8OGwpHDnnbChHtcGHXCtHBOw5o=','5ZW3772Z55aY5p2j5Y+dw4sf','PSzCoMO6dg==','woUCwrU=','w6rDo17CngUAw48=','MnHCjnTDsh3DuQ5Ww7M1w5YH','dkxRPjNmXA==','w6I9w5oJeMKTVVrCtcOy','eUtNEGc=','dSknLsOtwqJUPMOEwqXCtw==','KTbDlcK6Jg==','5b6z5Yin5Y+f5ZCs','XEUTKw==','AMOoJnxFdx7Cn8Onw4PCpMKqSFbDgQ==','NcOCOnfDtWXDvA==','RkYFIls=','6IGb5L2T6Les5Y6F','HcKMwoM=','Vistw4ZtPDrDlA==','PsOkCcKN','5ayW5ZyP5LqW5ZCz','UMKdOHLDl3rCrVtPZcKTwoNBw6xZw4s=','JHXCkyDDsh4=','542V5Lqz5Luk','5ru35LqK6Lys5Y6N77+h5byc5oCv5Lm65bC/','5pi656a0w7A=','w4HDth/lh4vljZXmlITpl4Y=','ecKpQA==','c0ZBEw==','wrTCkBHDiw==','w7HDij8=','54q05Lqv5YSz6IO8','ejgnF8Oww6sPcsOZwqzDvMKZExTDkMOWCcKId8KDNTJ2UsO/WB/Cg3sBwqfCky/CjSUUwqo4w5Mxw7bDmRV0wrcSdHsKwphXw50hwod6wrkiwoXDk8O3JiHDqMOYwpE=','wp8cw4gA','w4gfQxA=','cSM+ScOwwqIOPMOEwqLCoMKHC17CncOMA8OENMKbIydrGA==','NMO3C8Kaw48KTFQ=','wrjCggnDmjDDkcKgwo1IwrzCpxbCoMKvacKDUsKhM8Oz','cSA6BMOo','C8OPHiQ=','bcKiFlrCpA==','5YaF5bye5L2a5ZmW','QcKXJinDkHY=','wqQxw4RnRX3CuWRDwovChsKZw4TDplDDgcKZw45Q','w5XDmsOAw4nCrg==','w7AzFwVjI8OxwpnDpg==','5L+V56Wi6IKE5Li95ZKE','w5IaVkZ6QcOGwqHDlMOOwoJLwoHDl8OlwrAzw5TDlWpOwr7Dow==','w6jCksK5wrHCg8OgwrXDusKQNMKwOg==','wr57Ug==','w7MGw6EnE8K8MgBgFTYPw5zDocO+wqxtOcOZw5jDgRfDiQ==','wqJ0VcKZ','5ouP5aeo5aWP57u+5Y645pel6ZS/6Zmu5YiX','wrc6w40hTQ==','cSk9E8OmwqN5','OMKowoLDlg==','wrnCmRfDgmc=','wrgRw5kiw4AxCsOww4o=','ZsKiSGbDlMKSTg==','w5nCuMK9w5XDsMOd','5ZGq77676aiR5Lu35ZeYw7g=','BRDCkMOHQVrCuXzDgncZ','wrbCix7Dkj7DgMO+','5LqV5pm65ZK4772377yJ77+1','w74Bw7EO','KkLCnsOQWg==','AcKIwpg1Xw==','XsKLNw==','O8Kdw4w=','AcOoPyZDdA==','w4TCssK8w4M=','fMK6wqB/wpjDvcK7wqvDo8ONHDkVwpLDkMOnd8KaOlHCpzVK','QUwNKw8=','5YiD6L2M5Lmf6ZiMwpHot6DovIw=','wrfCgQjDgQ==','bCvCp1wywoLCmU9Uw59vP3swXw==','PMK5wpjDhjIBw6Y=','QiEpwptxMCfDlMO7P1XClsOETGxYw6TDisKnc8ObJMK5PcOuwovDpMKzRUcSTGPCgUpcI8KLwq42w4bCjElb','Pl7CnsKN','wqMmwqzCoFTCtg==','5om25bWa5pW05Lu45Yid772b5pK/5oiV5ZqT5a635Yqh6K2a5om25p6y6JKF5L295Y+a5YOg5b2U5YuNw7UZ','5ZKy5ZCr776l5Lyp55yw5bmp6biUNhk=','eHHCg8OwXzMf','w7nCjcK2wrvClMOwwobDpA==','w5IQVRxmWsOx','woDDiMKdwrJqPsKl','w7YMw6AaEsKjHg1nGTYj','ZsK5wqY6w4I=','w7www58cfg==','IW/CijvDshDDtTlGwrEw','wq8cw54mw48=','5oum6Z+o57mO5Y6K56W06KKW','5bmB556y5rO05Yuu','C8KWwoE/GT5xw63CnsOBw6k9wrk=','wqlrUg==','5Ymi6Lyg5Lmv6Zquwqzotpfov6g=','5Y235qyL5ZKQ772J5L+E5aSj','CcKawoc3AQc=','w5/CqsKnw5U=','R8KdBijDj3rCpVk=','w78Ew6wNEsKqNQ==','CsO0CDpJehLCkcOm','6YOx5bKv5aSY','w6fDu1TCihFe','VMOmw75dwo/CsQ==','aMKsS2bDnsKZ','woLCuEI5','5oiL55yu6YCh5Lqo','Zi0gDMONwqRN','IWLCnjY=','57Ox6YGK5Liu5Yi1','ETBgwrDCiX8=','5Lmw6ZS15YiS6YKG','5Lyl5aW76IST5oCRwrFD','BcOuJTZjdxrCkQ==','Uyspw5pzMA==','wqAfw5kiw6cyFsOxw4PDvEDCucKo','G8KNwo1jBws8w7HClsOZw6gowq7CmsKJw7tTbDo=','W8KGISzChzzDpElWPMOZwoBOw6dLw43CpSPCtR9Fw7XDkMKkwrHCncOywp09akTDtMKBwozDog3CiMKUdk3DpcObw7LDssKVeRzDqCNgaA==','wrgcw5sLB8KHwpAhwrJp','YjTCvcOX','MMOxEMKQw6QX','wqUew5Mgw5wRGQ==','5b6c5YiO6LyZ5YaiFcOm6aSB6aCw','J2nCjDTDtA/DmQRQwrQyw5w=','Rzg1Xw==','wpoaw4IBJMKGwpQ=','w5/Cq8K8w4/Du8OX','w50vIwNqL8O7wpjCsw==','w47CksK7wrHCi8O8wp3DsMOW','IcKBw4wQw7nDg8O3w7zDu8KjwqfDpsOBw4PCqsOuVMOz','5Zyq5ZKKAA==','wqkqwqzCo23Cq8O7McKqwqfDnsOIw6TCrgI=','wozCrFEpw5TDnw==','IcO7EcKtw6UISlLDlANHHg==','AMOiJSZJayE=','5oyi6I6t5Li35Ym+','woYfwrRCMjnCngs=','5oud55u05pmD6ZS65Lqk5LuF772z5L+y5aaC552w5Lqk','c8KlFkvCtMO6Ew==','E37CgsO7wp5vw4o=','woMPwrRVIyLCqA==','BMOxwpI0w7LCgsOCDMKTwr9RR2l4w4LDtB0resOqSMKcwrNj','w4TDhMKKJcO3wrpUwrUG','wogpw5Yxw5A3EMO8','w5pAcMOEDcOPc09STyDDmcOgwrA=','w53DgsK9','5out5Z2b5L+M5YyV6LCK6YSk5bOA6YOm5qK35ZSS','5ZKV5ZCf6YG56L+55LmL5pm/5Lux5L2/55ib5ba95aeP5Zeu','ccO4S8KRUBk8','w6jCksK5wrHCg8Og','JmPCly7DtQ7DiA==','5oic5aWw5aeA57qD5Y2D','GcOvPjNCYAzCkcKz','5oGW5Lm/5oev6KSg6YON5Lm35rCg5qGg5ZW+44Ka','wpvDkcKawqM3w7Z0woE7XVIAPcKxAcKqNMKj','QiYlw5tiNiHDgg==','56qO5Y215Luy6Lyn','5rCU5oqn5Yu45ayy6KGW55e56Z2D','w7Jm6L+F6ZmM5LuU5Yq15bS+5a6b5oi2','cSM+ScO6wqgOJMOTwqrCu8KcBw==','NsOnFsKdw7oUTEI=','R8KdJQ==','wqQyw4AqRA==','VUIZJVs0wqo=','FMOcIwxT','PcK1woLDthgXw7c=','54KP5Yec5Ymx5Lu66LWk5pWw55i5','IFzDgQ==','w5HCoMKgw5k=','5aS25ae854u85rmU55O1','wp4cw5gRBMKF','woMPwrRVIyLCqQ==','5bK75qGr5ZGx5om65oye5omU5Zea','ZjgyFsOv','6K+t5YaD5oih5byu5pSs6Zip56O4','UkMDJQ==','w5fDn8K8LMO8wqBKwrURXQ==','NC9nwpXCgGkHwoTDujc=','5L6g5bCf5Lqy5oGu772b5YyM5pqI4oOYwpA=','5LiF5L2g5L6b5ZGy5Lqd6IC85pWU5Li+5Yqr6ZOB','552z5qOV55eV6IWc5Lmg6ZWm','LSzCoMO6dmA=','w4seSBhhSg==','w5bDgcOYw4rCogbCtQ7DncKEX8O1wrzDmm3CuQ==','5LqH6KyK5rKO6amT6Kym','5YWN5Y+Q5paB6Zal','J8OeK2fDrg==','5b+F6Jmi6KWr6aC6','OMOsEcKKw6gG','JcOPK1fDsmHDq8OMwqXCisOgw6U=','w5bCtsKlwpXDqsOUT8OPw6DCiy3DqXBxaQ==','wqN3RMOb','CMOsLw==','5byO6Jmj6KaE6aOv','5a6v5ZS+772T5oiF6KSf5pGY5L+46L2m5buN5YuR55iJ54yr55Cx44CtVQ==','wp7Dl8KZw6kTw61w','5Yiq6L215Lm46Zm+w6DotYbovrI=','woRpw4vDpQ==','OcO5AMKZ','BMOHL1BMIsKGbTRow6TDnRdxw6pkUMOI','w6fDijrDnsOGwoE=','woBxw5rDrwjCj8OJwpjDgA==','w5oeX1k=','IcO6DcKE','6KSO552755mD5pOo5pWS6Zaq','AsO6woI=','6Ze155eg55if5ayB','eHTCgsO7Yg==','wpXDh8Kcw6k=','w5zDhsOew58=','wrgcw5sLB8KHwpAhwrhq','wq8Yw5Yrw4M9F8Onw5vDvg==','RTd2','w74Rw6EAHsKyJAA=','5Yqk6L+d5Lqf6ZikWui0o+i+kA==','5oqu5pOD5a+H5omC','5omR6Z6t57iL5Y2M5pyv5aSz566F5b6S5peQ6Zaa','5ZG65ZCx77+G5omj5YyK5YaI5Lmx44ClHg==','EMOEKRU=','wqE3w4ctYHrCr3I=','5rag5aeW5p6B','VTolw4RpNys=','ayDCsgU4wpM=','5ome5paj5aeR5LqZ5Zy6MsOJ','wpDDk8KcwrZKO8Knbwo=','cSM+ScO1wrhEOMOFw6jCq8KR','bsKhwrk=','wpfDmMKVwq4Z','wrphVg==','5aem5aWq55yv6KSB6aKx','w5ccVQxMRsOLwqM=','LyvDncKk5be25Y6u','5oqM5aWa5aSK57mZ5Y+p','NHTCm8Ohwpdyw7LDs8OQwr8=','fXfCgMK6ZygYag==','MsKKw4VWw6LCnQ==','SyvCvRwnwozClkPkuKHplpjkuYrovLM=','BsOwwptow6nCn8OeT8KewqcbUG1iwojDnB0rdsOqc8KawrhxDG8BCyzDtg==','w5pAcMOEFMOON1EVUTTDjg==','5oqe5a6R57m45YykNTo=','5LyU5oKW5Lur55696YK+5rOA5Lu75Y2b56mV6ZSb55mZ5ZeK776J5p6B5bmT5oic6ZSP5Luk5Y+g5LyJ5Y2Z5bCt5b6D5b6L55qD','esKtwqQiwofDuw==','54Gd54GM6Kax6aOA5p6/6YGZ54q7','5YmV6Lyh5Lu86ZiWwrHotJjovaE=','5Lqg77675oeW6KaE6Iu95aak77yz5Yy/5oK+5Y+U5pui5Lm15pSW4oGvw4I=','woLCuEI5w6DDisKJQx8pwpUV','wpDDmcKcwrZOIMKQ','AMOoJnxWcRbCmsOlw4XDosKzQEzDjsOjAsK8wpoowp3DiMOTwps=','w5klCw8=','5om26YGV5LmP5pSc5Lis5aW95aeA55qA5ZC45ZG05Y+r5Za5','NVbChMKKBg==','wonDlsKOw6k=','ImPCjQ7DtQTDpA==','bSvCvxwvwpDCvklSw58lKw==','wpsWw5g=','Ei9lwpXCiHU=','eCjCoRZ6','wophUcKHwq9Tw7RLw4dY','w5BBecKPBsOsfw==','HMOPCCQcZMOV','RsOOb+WGruWPhuaWm+mWqQ==','w7cPw7wXHcKxNQ9x','w5zCqsKLw5PDtsOWSsOCw7E=','6IW/5p6z5Z+G5ZyG','wq0swrfCqUTCrcOeK8Kwwo3DlcOB','PFjCu8KaKFDDpERH','w6nDgCnDhA==','S8Ojw7tSwqLCvcOe','w4DDjMODw4zCuBc=','TsOlw7gYwofCvsKVJhcjYcOt','w6nCksKhw7HCjcO6wonDp8KGM8K3MjbDj1dQBXNz','JsOfKw==','wp4cw5kLD8Kb','5b+x5oqA5p+z6YCx54qE','54yk5Z2L5Liv5LqY6L6u6YCt6K6j5omy5pi75Lmw5Lm45oiL5aeb5ZOm','5Yqc5L2855SX5Y6055q15ZG6','5piw5ZOe77yu546l5Z6e5o6S5Y+P5ZK65LiR','wpzCr045w4vDhw==','57i85Y6H55ui5a6p','Tj4hw5tQJyU=','54mn5p6j5aWF5rel776S5oGo5p6R5aal5rSa44Op','SsOvw6E=','546j6LOO5ruM55GL5aa15buR5pef5bqv5ZCo54m2','w5nCvMKuw48=','wpDCrFcrw5vDlg==','BcOgw4QiwoEZ','5YuQ6Ly95Li9w5XDgig=','5oqJ6Zym55yg6KaX6aGi','wpTkuqfli4HphrrosYl2','UsKBPybDjmM=','wqYww407QH3CqDlRwozCgcKTw5LCvB3DtsKfwosSbQg=','wpLCvE4s','F37CmMObwp5lw6c=','wrUJw5M2w5Q=','e8Kmwr09wos=','w6PDjCHDlMOhwp1ewp/Dqw==','J3XCgSs=','LC/CvMO3eQ==','M8K+woLDhw==','5YuI6YCu5omh5Y6H5ra2','SsKYLSTCjA==','LW7CiirDug/Dslg=','esKxS2bDgsKD','F8O0w4o7woY=','w6bDiSbDk8OJ','77+05oKw5Lq/5qK65Lua','wpobwqJSNg==','KFbCgsKaCw==','YkVMDjNBWnwSw73ChcOSwqXDvcKt','ScO5w6VSwpc=','CsKNwpUjCQ==','CcO2wpsvw6k=','w6HDigvDicOuwptZwpU=','5rO75LiQ5Lq+5Lqo5Yy655ur56u56ZSB5Lmd','CmrCh8Or','5rGR5oSg54Kk57eK6LWW','wpDDisKDw70vwrk6w4cvW15HIcK4TsKxMMK4wpoafsKBwr5Vw5VCfA3CmcKeLsK2H8KRwqodwr0dwqorwoMIRC3Dkk/CjWrDl2RGbHnDosKUB8KAw7Qgwo0EacK0wrPCkATDo8OWwocafwh8M8KwMnl6AcOlUcO1YhXCh0I0wrEYwqE=','5oCc5LiE5LuV','w6LCjsO+','HMKHwpMu','w5U/FAJgIsOPwo/CvkbCo8K/HBJ0w7spw7s=','5Lq65Y2m4oGRceWboOeskuaukOejt+++leWOs+aCnuawmuWkjOKDu+S9gOWQvyHDmw==','ZcO4S8KdXhgvwqQ=','McOyDMKdw6s=','aCQmBsOtwqhVOMO1wqrCu8KFC04=','w4/DhsOAwoXCvwzDrgrDrMKUTMOpwr7DsDbCoQbDr8OqVsKtM8O7LMKvbsKAwpDDgEvCvBDDicKbS2whwrh+CcOiwoE=','woLCsko=','5Zmi5a+P5pWZ5q+d6L+G6KKm55qk','Z3TChsO/','fXTChMO3ew==','McOxCMOQw7QBQVLDhQRcXirDjsK7UTRY','w6/ChcKlwqzCk8Og','fUxLDSJ2','fMK9wqgywpjDrcK4','w5xXdMKZCsOQ','w7Aww4YPfsKe','OMK/wpLDmw==','5aaK5ayB6YC06YOu6biv6KytHsOv','5p+R5ruM7726','w5czDUV8P8K+wpzCuUXCucKkKhAow68jw71lbhc8wpbDvXhcPjsv','CSl+wpzCh2MEwoI=','csOoSw==','VEgCP1o1','d8KrSm8=','w6nCksKhw7HCn8OmwpLDucKGM8KzcTXCiFpBAy0hfEk=','A8O9w4orwoUIw4A=','NC9nwpXCgGkHwoTDtTY=','LMObNHA=','woLCqVs8w48=','BcOuJTZjdxw=','VsKKPC/DiWA=','6KyM54CH5Li35LuFcsKtOw==','ZcK4SXHChA==','5rOk5om45YuJ5a+T6KGV5o216ZC+','a8K9RmbDhg==','w5AbXxpsQcOMw6jDj8OOwodCwoPCjcKowp8yw5LDnW9pwqbDqA==','w4/DjMODw5/CqQ3CmQ==','wofDisOcwrtCKsKga1bCuQsxwqQ=','NcOGNnfDtQ==','woDDnsOA','w53DncOZ','fMKlS3bDnQ==','HcOrw6AwwogCwpp5Sw==','wqkew5Q=','5Lqq5ZGI6K225L+95ZSd','RSs3w5Y=','6Yaw54qJ5YaW5qyF','5oql6ZyB5pm65ZG65oif57qx5Y+O','amzCjMOlfA==','HMKRwpA0BQ==','w7jCiMKiw6bDkw==','FCRkwo/CjmQ=','YlxHGSJsQXsS','w7nDp0Q=','f2vCh8OuIg==','w63DqsO5w6LCgzHCnz3Di8K1aQ==','wpEGwqk=','ZSEzw5tpOijDk8KoZw==','OcO5HMKHw6QeTQ==','YcOyUsO7RQgzwrQMUMOew5t4NA==','5Lu05Lir5p2x6YO254im','5omt57uh5Y+H','w7cPw7wXHQ==','flbCgMKZBVrDvgw=','P8K9wp/DlgkKw7E=','wpXDicKcwqFfO8KmZA==','Ujorw4VHLA/DnsOwOFLDkMOnVC8=','KELChA==','5omj6Z+x552S6KWb6aOG','W8KacuWFruWNgeaUhumXmA==','VMOhw79Fwo8=','54mS5p+n5Y6F77yiwqbDhuS9r+WurOafgeW8tueqre+/ug==','5byP5aaP5Ziw5a+o5pa96ZSX5YWy6L+36KGt57mK5ZGJ5Lq15Yqx','wqHCix7Dnw==','RsOEccK8UgYwwrInX8OHwpA=','OyLCu8OzdnzCg0HDqA==','OcK1wpjDlhgdw5o=','wqA7w50=','fcKmV3vDksKD','ccKgFlnCtg==','fTbCgcK6cQ==','woTCuFkow43DkcK4XhktwpkTwoExwoPDgMOuw5TCtz1XUFhpeAk=','5p225Lmq5Liu5oiD56+u','e8O0UcKyWghs','5oud57iI5Y2j','PMKNwpcjARBzw73DhsKD','w4lOb8KZGw==','54Oa54C+5pe76Zap','5aWV6L615LmF55Sr5oqS5a2n546J6IKg5Y+L5q69','wpF7w5fDvzXChA==','5aW75aa3556I6KS46aCR','5omJ6IOK5Lu95r+r5LuA5ZCo','w4rDksK9GcO3wqFL','HMOFC34DfsOiFB7CisOxwpApYgdKwqfDtBEYJcKhwoVQ','acK/E1zCuMO0FkLCt3lTwoLCnw==','GMOPEh0QeMO4DhzCmg==','w5oSXg8=','6LyT6Zqv5Lqd5Yux','AsKKwpUsAwZnw7zDhg==','wqZ0VcKZ','5LiS5YS9YOS5jeS4ueWMk+WKgOWRusKL','w5/DnsKuJcOm','VUgaf0YvwpLDtsO0NWzDljvCr0sKag==','56uU5Y6m5LuG6Lys','5p6d5LmH6aSD5qy45pmZ5ouB5a6u5LyD55qQ5oiP6K6o4oGgwpc=','w6/DgSXDg8OAwpBQ','FMOrwoJ0','w6YKw7IcAg==','w6AwwqbCpEHCrMOzasKgwojDnsORw6/DsxBVFMO7w55k','5b+15aeJ5ZmF5ayH5pah6ZSS5YSi6Lyu6KOj5Luk5YmE5bmn5Y6C','w4fDgsOJw4nCrg==','w4HCvcK7w5/Dq8OP','wqxsVcKZ','woLCqV4+w5M=','dVpBHmQ=','anfCvsOgYjQUbA==','HMO1wo4+wqw=','5b2H5oui5pys6YK054qE','O0XClcKIGlrDkFhAw7Byw7DCjxM=','w5VKc8KNCsOL','w7nDp0TCrQQXw44=','w5jDjcOew48=','wrAkw4Ml','X1Q0OVslwpjDvMO9','wqQxw4RnXGfDonZIwoHCl8Kbw57CrB3DgcKNwpxIbg8iw70lw6/CncOv','D8OcNg4deMOIczp2wqTCgg58w6V1UMOOwqbCnsKiSMKtw5zDo3rDo3LDvmV5asK6FhpdJMOBwrdFw5rCmcO1KzgEw6E=','acK/E1rCucOGNlnCumo=','E8OyPw==','5p6p6L+L5rOu5p655Lqp6L6P5oik5piE5pSp5Lu85LyzUMOjDw==','fsK7wqkjwpzDocK4w6rDocKKGTAUwpTCkcOadsOMLW/CpzxZ','wqlrUsKhwqxJw6dc','EcOyJWsY','BcOoJz5DbhDCmsOlw7nDqcKpVEzDkA==','5Y2H5Li16KWa5Lih57Ct55qa5piH5ZCCSg==','54ON54Ch5aaX5py5','wpEAw4s=','F8OwwoMow7k=','w6w8w4INIw==','eMKkB0DCqMOGPFjCrWZewpM=','dsK6YX3Dk8KTR8Ksw7M=','5b2R5YuQ5YmW5L6M6L+h6KCh5q285panUw==','VMKXIQjDmGvCvw==','w7wxw4gE','5pav5rKW6LSm6L+45bqG55S75bu05ZyI776H6K+E5qOk5p+f5oG15puK5ZGF5a6u6KCy5bic5oig5b+M5biA55aZ5bqx5Z+x772y','5oiw6L6X5pay5YKs5q2m5oy35pe55bWS5L+C5ZCz','G8KHwo45CA1K','XsKkBUDCoMOaFFLDpjk=','wqEJw5wh','wpZtw5LCsz3Cj8OBwpvDgTHCgXUcDXfCtg==','w6oww4wNeMKef1bCsMO9w6h+ecOEECYWwqEnBn8gQsKSHG8=','5p+157uK5o2v5Li55Z2n5Z6m5Lqdw4Q=','w6TDs1vCnQ==','ZsOkV8K3','HCV+wpzCmG4=','EsO0wow8w6XCg8OVEw==','wobCqEkl','woTCsk8jw4c=','wpXDh8Kcw6k+w6E=','5oOP56Ok5Ya0576t','MWnCqi7DohXDvg0=','wr8Vw4Uzw409Gg==','w7cMw7haD8KoNAxmAHwhw4HDosOgwpRtPcKew6TDhxXDgsKuw4PDpFcywqAhw4Q=','cMOySsK7VQ==','aMO4w6dZwp/DqcKb5Lm95b6954O+5Z2U5qKF5LiH5ZyG5Y+s6KWJ5Y6W','cnQn5YSq5Y+J5paw6ZSH','OcK8wpPDgw8=','5YuD6LyC5Lu46ZqSB+i2oei8jg==','w7zDjzfDiA==','JHXCkyA=','w7vChcKrwqXCi8Or','ZcO4S8KBVBUp','wqwxwqfCplTCuw==','YVxR','wpQHw5gVGMOSw55qw6F2w4s6wqImaMOKKsKNM8O0wog3ScOLLcOVw53DncONw5nDocKmwovDssOgw7svw6ZUBsKLAsOUcBgsTsKiCD4Xw5Ukw4JGScOCwoJnwp0xADXCisO6w6jCikjCpmUdMADCkg==','I2/Clz7DnxLDtQ==','YMOySsK7VR4=','DcK+w7Fx','6Lex6ZGd5aKV','ZjPChMObw5VIw4lbw4k=','w6s5w4YMc8K1UlbCsMO4w75Ub8OEEQ==','wqUDw7Qtw4E9FMO3w4w=','fC/CqsOW','5raU5bi55ruz55GA','OcK4wp/Djhk=','w5oSQhFnUsOK','BMOHL1BMIsKAazgvw6vCnQNvw6R0UcKUwqbCkcKuQ8Kw','5oiw5aWq5aat57un5Y6h5LmU6Ziv5pWk6ZWc','w7wmw58CcQ==','wozDkcKH','5YW36YCh5rin6Zmx','w47DksKnOcO3wqtm','QsKKMibDnmA=','AsO6woISw7jCk8OS','w5tcZcKbHMOB','X8KXMyg=','5rGX5bS45L2m5ZSH','wpzDh8KEw70=','5b6B5pSO5pWX5Liz6LWz776g5oqI5pW75aaT5LuB5Z+544KB','X8KbODXDiQ==','w4DDjsKiKcKg','dSkn','dsKmwo45wpbDq8K3wqHDsg==','PyLCrMO4fXLCkg==','w6ggw5s=','wpFxw5vDqWXCnsOd','wrLChg8=','wpzCuVA+w4E=','ezTCs8OEw4o=','w5pAcMOECMOKfUITGynDgsO7','5rSE5rGR5ra46KCa5Lqd5rS95rG6772m5rOC6I+r5rK35ZKe5Lmn5rGn5aa944O1','MsK1wp/DhRUb','5oGY5Lui6YKi6KGY','55yd55iZ5aWC6YSY6Kaw5ZKqI8Kp','F8O3w4wzwoQEwqJoXQ==','w6Ubw70M','woLCslEow40=','5p6R5peM556k552j','wrbCjxLDkj4=','wqImw4A6W2c=','5ome54+z5Z+95Z68572D5LiZ5a26','w4fDk8KjPsOw','5YSc5Y2f5pa06ZaK','6Iel5Yus5oya54+C','w6/DtkQ=','5LmS6Z+4552t54Op','NWLCnTLDsk0=','wrU3w44hWw==','w587GRJrNsOy','5aSF5aeP5p2R5p+G','JmnClHTDpwnDsgs=','5Lyy54yu5Z2N6Lym5Z6o5Lmu6YKM5Lib6K2e5ZG9Fw==','McKLw5NIw6nDj8O8','wrsiwqzCoETCscOi','6LyW5rKv6L646IKl77+c77yj5Y+S5Lqp5ZOl','5YuI6LyA5Lu96ZudcOi1sOi/kg==','w5bCtsKlwpXDq8OPW8OWwrvCmmrDuXR/ecOLw4Y=','w5jDhsOZw4rCoDHCtQY=','O8K+wpLDkBIGw6fDm8KsesOtXwYWVkLDnBYgISYwHw==','AsKTwpg+HQ==','w41Wbg==','aCHCvg==','wprDkcKCw6M4w7A=','PzbCoQ==','w5IRSBg=','5oq76Z2556Sa6KK95p+t5ae056+y5b+V5paI6ZS4','ecK4T3PDjsKD','LCbCu8Ogd2HCrw==','wp8Ww4IRDsKawqg=','dVBWCSxuS2Y=','LcKew4RQw5XDnsO1','5Y+H5rah5YWW5rKC','wp9pw5s=','w4DDjsKiKcOlwqM=','c8KvwqA8','P37Cnzw=','wqwmwqzCs0XCrMOP','JnTCnDvDpBk=','w7YQw60FBcKg','AMONNjZIIsKVdw==','LMOCKnXDsHnDrcOawrTCh8Okw60oWw==','5L2/5Yyd5LuA5pm+5bux5Z6y6YSQ55mA6I2K77+v5oms5Yy35LyR5L2f5ayj5L+S55SJwotm','b8OkVMKx','wqprRcKbwrpMw6E=','LCbCu8Ogd2HCrg==','O8OFET4VecOsHk/DnA==','5pqW5LiF5LmV','VcKbOzjDsn3Crg==','DcOrwoI2wqfDhMKJSMKFw7hXSWtgwoXDnB4tM8OscMOawqFsISATE2nDunNLw68Uwr1FPMKhJXjCrsOqbmsdwrHCmMOyGcKdw48WGjNew6I+woLCjjN/','G8OOHidI','w4DDg8KzKQ==','TkQf','EsOTBDIb','JybCtMOwd2HChQ==','EcOiOz5Nehw=','FMOsMShUcQo=','dn3ChMOzeCk=','wpnDkMKTw78zw6pxw4Y1XVhJKMKpTsKaPMKwwpkKBsKLwrRP','5oi85pql5bqz5YiM55mp542455OL772c5Lye5LmK5oCRwr01','wpJnw4vDiTLCnsOT','6YCS5Lmf5riD5omn5bCy5piH5aeV542v5ZKvwpg=','TcKgwqMOwrHDvMKy','wqI6wqnCoxE=','wpEcw54A','wpXCsldjw5rDnMOJTgcswpISwpA=','Ul4EMkQ2wpDDqg==','bC/CqsKdw5Few5ZRw4UxR33DssK1wpFpw7bCgQ==','AMO3w5M=','Pl7CnsKNIVHDog==','5L6s5Lm95oi956Sb5Yi75L2+57qm5aer6YCL5bKs5oCI5LmT','SyUg','IV3CiMKRXA==','5a625q6X5pSj6ZWg','6Ze155e855uw5a2F','5oux556P6YKJ5Lqn','5Luh5Ymq5Ye36YOG54qE','bcK8wqo5woc=','UcKKISg=','wpZtw5LCszbCk8OTwpHDh3DCiHFcGmbCvXBL','O1jCncOHHUzCqVBaw7xEw7bClATCi3QFcMKXw4tXDgzDkQ3DhSjChMO+','SxPCl+WHiOWNh+aXnemVlg==','w73ClMKowqvCjw==','M8KFw5VG','5Y6L55W15bOV57ul57qC6ZSv44Oz','w5pKc8KeG8ORQQ==','wrR/XsKawrM=','5oqV5LiG5oi26ZWf6Za75L+F5p6T5rCD5p2u5oCr542r55um5ouQ5Liq5LiF6LaH54+E','fcK6wrg/wpfDuw==','FMOuLyZE','OyzChsOgYHrCmFU=','Sy/CsMOdw5xEw4Nawpts','DMKWwoQ+HU4=','wpljw4rDszTCjsOmwo7Dnw==','w6HDnCfDkg==','woUHwrNVMjXCgw==','5rm155GG5a6c5our','55uW5b+i5ae45pSFwr7orK7ph7LmlaDnmJnlvas=','wq0swrfCqUTCrQ==','5Y+16IC06L+75qCi5ay/5oaA6IeG5bS45LiR','W8O5w5Mxw4IGwpRocMKLwrLDqsO2wrtGYcKLw5fDiHLDuAhiBDo=','EnTCmcOhwp9uw5rDucKUw6DDm8Kv','EsOxw408wqIPwpJ5','BMOEKx1M','ZirCvhc5wpHCgldV','542D5Z6U542b5ru65oik5ZGFw7Y=','wpgbw5wSDw==','eMKwwrkFwpbDsMKo','BsOwwptow7HCj8OcUcOKwqxdQWJrwpTDlB4=','ajzCowE/wpA=','E8O9w5cMwogZwoU=','dMK+wqk=','w5c4Exs=','w6DDm+WRt+Wdvw==','5aaf5aa/5p+T5pyn','L8OBBSNO','wpAfwq4=','aS3CpBY=','VUgaf040wpbDv8O4PyfClTfCuEcOasKWw5TDnA==','wo4Gw4I=','wp3DhsKew74ow7A=','HMO6w4si','CXDCmMK9','5oOD6YWv6LKxwrc=','w7HDkTvDg8OS','NC9nwpXCgGkHwoTDtDA=','KMO1FsKO','w5bCtsKlwpXDoMOZS8OPwrvCmHLDoGh1','5o215r2B5Lm7','5rmf6Jmu5Y+0','JmTDig==','5Y2u5Lqn56Si6KCg','54ux5pyD5Y+q77+mFMOQ5LyD5a695p2j5byM56uG776t','5b+v6Lad55uG','diFg','5oic5ZuZ5Yuo6IKs5aSP5pSOw5/phZTmlKnovozooI4=','5bOv5pyo5ay26KGY5o2Q5a2854uv5p+SwpPku5XmlIDlpKDmnJNX','EsKKwo0=','5r+05Lmq5Z6N55+S5aWy5ZG34oOX4oGD','wpcBwqBbNCfDgw==','fFpC','5Ym16L645Luz6ZiKwrzoto/ovZc=','wp0dw4gXBMKBwpVrw7cxw44twrd8N8OyacKPO8O8w7ExA8OP','wqdgQsKMwrtzw7M=','5p2w6L+K5oOi5LuH5qOM77yC','OMOtCsKQ','bCTCtMOD','UMKdOHLDhXrCqlBGIMKWwowBw6lWw4HCvjTCtRU=','fijCuQ==','ScO5w7FCw5zDog==','w5PDhgU=','cMKvGF3CrsKH','b8KtRn3DlA==','5Y6J5pqo5rOq5p2b5aWf5a2w5oWG5Lu65oqT5q2y5722w6wL44Cgwps=','5L+v6bq/woDmiozlpKrlroLlj7Lvv7LkuqLnn7rkvrDml6LmiL/ogpTmkZDoh6kqEA==','KCbCoQ==','ZsO5S8Kh','P8OZHHzDu2PDs8Oawo8=','ckZBDw==','wpdgw4zDrQ==','6IaJ5Lm/55q/6LCu5ZOp5Y6T5Liu','5Lic5piG5ZWv6Ya75rKm54aH','McOPKw==','5aaE5b6C5Li76L6E','EMOaKwpCFcKecChy','woF2w57DrDs=','HW/ClsOr','5om2552N6YCR5Lu4','5pyG552L5aez','NH7CniDDvAQ=','5aWa57Wv5LqW','wpZtw5LCszzCk8OGwpfDnHfCimFcB3PCumBDw5U=','H8O/w5ohwokbwpM=','BMOHL1BPIsKGfiV0w6vCnUl8w7tt','wrZtTsOY','5Lmd6L+X5Ymv5py45Z6u','w67CmcK0wqg=','EyV+wo/CiXQ+','5ZWFe8Or','woPDncKAwrFO','6I275Y6m55iz6ZK75oyBZA==','OsOPMXPDqmg=','5YSL6YGv5rmO6Zi2','wpbDn8Kaw6g=','wpLCrl45wpHDncKd','w5BcXsKCG8OAckIY','57mt5Y2G5LuI6ZqXU8K0','5L6s5ZCY5ZmD5p2M5rCF5p2X5ZGz5a+05ZCk5p6W5Y+p6KWU5Lq95Y+R5aWT5ZGD55i2','HCx6wo3Dng==','OcK8wp/DgRY=','w5Rceg==','IybCs8Og','EyRjwos=','5oi76Z2E56WG6KOG5p6S5ae+56225b2V5paU6ZWB','ZmLCl8Ol','wpZtw5LCsyPCg8OJwp3DinHCkTofBA==','FcOqwoI=','fygyE8Oiw79KLg==','bsO0UsK8RQ==','cCMmCcOnwqI=','woMFwrcPPynDnxzDpjTCjcOQw7A=','w5nCrl4uw4LDl8KDGA==','ezTCo8OAw4A=','w5pDeMKLDA==','5rOu5p2K5Yir6YKdU0PCpg==','fMKwwqMlwpbDusKE','5rGS5p615YiM6YOL5Lih5L2y5L6V5ZOL5omu6IOe5q6r5q2y5LuB5L+K5L2l5ZGx5peU6YWc6Ly+5LmS6Zuf','5ZGD5ZGS5Lm86Lys5aSk5aWh55m35ZeT','56mV5Y+x5byw5aSy','wogCwqlRLCPCk1c=','w7o6w5oGcsKZaVHCpMO5w65u','wosaw4gRAw==','w7cMw7haBcKjeQJ6FCApw4HDoMK9wollKcKew43Dnx3DisKKwo7DvV8twqd7w7AGG8Okw75wP8OAVMOXw5XDnA==','5oqx5a6457mg5Y+CU8K0','w7HDgTzDlMKQ','Kl7Cl8KBGg==','w6A2w4c=','DMOxwoIjw6/CmcOTUsKQ','bsKlUQ==','A37CnsO5wpJ+w7Y=','6JKn5qKE5oiy6JOp6aWh5aa85LuR5LmN5ZKb5YuK772x5b2u5ZG45a2j5b6G5qGH6Iqi5Lq56LGR5oSm5oCL','wpgAw4gRWsOZ','McO7C8KKw6UWdg==','5Y+M5a6177+15omL6YGt5Lmx5L6K','5pai54iE54iq5oGA','w64Lw6AVGMKpIgY=','a8OzW8KwSSI7','5rGu5p2K5p+o6Ky85rao5oKx','55Ci5ZSE772F7760','P8OnDsKawrI=','6I+y5Y+Q6YSo6LCc5aah6LWZ776c6K6d55yo5pS45b6B','wq4tw6ohSnfCp3JC','5rCU5rC/6Ke86aOc','w6jChcK4wqvClMOw','w44tGBh/P8Og','X2jCiMOswppvw7fCuMKEw6XDkMK/w5plw7pKw5LCgQDCijkZQRnDr0Y=','aMKlSX7DhcKA','E8OLEz4afg==','5ZSh77yC6IeV55Ov5ZOO6Ki8776Z5L2P5Yyl6L6s5oWX5oK455uU5L215ZGPwqQ=','5YKg5qyR5Yef5rKN','CsORKRoW','OcK4wpPDgRYKw6c=','w4/DmMK8I8O2wqo=','5bGy5p+i5Yyr5omD55qo572I6YGm','w4/DgcOIw4jCpw==','5b6h5a+i5L+Q5puJ','M8KjwrXDihgMw6jCkMK/','6L2d5pqK56+Y5Li25ZKFw5PmiKPnnJXpg4rkvafnj5blnLnnmLfphJLnvpLlprs=','w6nCksKhw7HCk8O8wpPDucKGOMO6LDHCgEZW','LcOuW8K2UB85w7gKUsOFwoBxdg==','w4bCvMK8w6jDtsOZRMOEw6HCi2zDtg==','D8OfEg==','5ayP5qyJ5peM6Za5','Z8KabQ==','w7s7woERecKfVFfDucO+w698fg==','DcOsw4Q=','w4XCrMK8','5LiF5b2Hw4fkuojmnJjng5Y=','BsOwwptow6TChMOIRcKIwrlDRX55w4LDlRo9','5oqo55+K6YGO5Lms','6biX6K+n5o2Q5bmI','O8KgwqM=','5b6b552L54Kp','QcKXJTDDnHDCrg==','eMKkB0DCqMOG','wqgmwrbCl0HCvcO8JMKkwoHDuMOKw63Csw==','wowSw54WDg==','XsKTIT/DlQ==','wqwvwqvCpEs=','w70Nw7ERDsKfMQ==','5LmP5aaM6K645YO35Lik','bCvCp1w4wpDDmUZPw5IzIXkgCcKoVsKTM0d0wqDCp8OPwp/DvQI=','wrPCihXDlRrDi8O/','CMKXwpQ=','w6zDt17DgFU=','FnLCgsOrwrRzw7Y=','w4HCvMKww48=','5oy26I+S5beV5YaO','UMKXOyjDmGHCkg==','wrRBw6vDlBjCqMO4wqjDplrCsg==','Qisqw4FgJxA=','57qf57iP6KSi552G','T8O5w61H','5Lu/572T5Li55ZKKaA==','56mB5Y6O5YuK5Lm0','w5c5Dh9qPsOJ','5puH5LiL5b+55ZG1','6L2l552e6KWp6aO5','MsOPFSMYccOoPhDCjsO8wpY8','w41Oc8KNGsOMbA==','wpHDjcK0w6U5w6B+wo0m','EMONKw1PPsOW','A8Oiw4k0','wqhnSMKNwoxSw7ZK','5baC6YaN572+','TsO4w7BXwpnCtg==','fUxDHg==','5oCP5LiD55io5bGU5Lib5Lul5LqB55uB5bKx5LmV5Lua','wqgmwrY=','e8K6UnnDjg==','5ZC15Ymj5omi5Yqx','6Ji76Jqu5biz','5Yus6ZiU6YK+5Lmo54eD54iZ','MMOLw7PlhKPljJrmlpfplIU=','5Zin77yK5oqS5rKwwrHlhIrlrI7libDpgoDmm7LmiYfoi4Plkafll6DvvK/mi6blpJXlgqTvvYblj6rlioDmg5HvvrnkvbXlkbPDkcOx','w7DClcK5wr7CicOqwonDsQ==','wofDmMKBwqZTKA==','57q95Y+M55uw5a2F','OcK/wpvCjA0dw6bCk8K6cMOsFg4HH3fDjRw7GQ==','GDRkwovDlilJwpfCtXAzwoBawqMbw5Rmw6g2w4s4wr8ZYMKdw4DCr2LCrMKhw6R/H1TDsTrDqsOgwpXClsKvw4R5wpYqwqDCiA==','5Yul6L2d5Lmx6Zuheei1lui9nQ==','wq4fw4Mxw4sz','57uG57qj6KaG556+','DsOmw4Q=','w6UPw6ZG','d0BLDhlwTQ==','5LuK5pqq5pSZ','56mE5buM5bSn57mb6L+C6KGf','6Kyi5rKh5omR5ZmP5aWk6LaA','DMOaHDQKdcO3Cg==','wp/Crnklw4bDhsKMUho=','w7s6w4JGYsKPTlzCssO+w74lYMOdUTglwrcsCnB8bsKdAy1iT8OCw6DCqgDDmsOmwroGwq0Ow61lPzQ=','D8OHLxt4I8KGZhJ1w6PChwt4','w6nDgCHDl8OWwpo=','56qT5Y2E5Yu25LmC','6ISZ5YiU5Lu56L6/5oi95pqm5pW5','wp8Ew4Usw4o5','woRuw4w=','5pmU5ay65pyi6YGH54ql','HcOFEz4dZcOEFArCgMO9woA=','5Lia6L2U5oi15Yu1XA==','w7sww4Ecc8KYeQ==','w5gbTw1xWsOdwrbDjA==','GDRkwovCt3U7w5/DuCgyw5sKw7NAwoQpwq4hw5Alw4sAXMOUwpvDsy7Dt8KTw7UmCnfCuhXDhMO/wq/DksOtwo8KwoIFw6nDicO2K8O2w5fCkErDtGBCTsKvMMO0S8KWOQnCtx7ChmXCnCbCqw/Dt8KeQmrCny9Pw5zDiMKBN8OUX8OOIsOww6xew77Djw==','wqwrwqPCqUfCvcO/MA==','5Liq5ZGN5YWP6Kyz','5biv6bmG556I5Lyf6YKX5aSX5pyk5Y+65b6g5b6pCOiCjemBiuWnmOafmeWPqeW9nOW/sueajOesiOitqOazquWktOmopOaJn+W5oOm5r+iBseWks+itouW9kg==','ScKDLS/DjQ==','woXCuFs/w4DDjQ==','ByV5wojChG9X','A8OMJRI=','NsOtFcKHw6g=','JGjCnSjDvxXDtERUwrQyw54Pw7INwqXCo8OiK3Vaw4rDkFnDu8KXwqEAwqI=','5L2v5aS55Y2D5a+B772H5L6D5oun5Yq45Lqn5YWW5LmrcQ==','5oqb5aay5aWY57uc5Yyi','w4HCtsKbw4/DocOcT8OA','5rK+5p+A5omc5Yil5p695Yy75Zykw6Xmj7XmlYXlvqM=','woQJw5YUGMKY','5p645paD6ZeP5Yel6IGJ5ZCP','fXfCgMK6aSgUaMKtwpMCwoLDsMOXw5vDtMOOasO8V8KUwpEYSsKVwrzDog==','VUlZKFEzwofDscK3MifDjCk=','woPDmMKWwqpJ','55mT5aWZ5aah5p2X','Ejhkwo8=','DsOGNhtVJcKSdDk=','K8KYw75Ww6/DgcO8w4TDpMKlwrbDrcOGw4Y=','XzN0wpjCjXQCw4/CoWtywoZRw6YJw5ppw6g/w5c=','w57DgMOKw4PCuA==','IsKqwozDkw==','w6Emw4Ja','w6/DlzvDhMOKwpA=','w55KacK+G8ObbQ==','w4/DhcOEw4jCpx7CogfDpw==','cn3Cg8OzZDU=','EcO6wo4y','w4c4CBE+','wpHCuE4=','w4EyBA5pJcO+wpjCsw==','wqZ9FA==','ZUxdHg==','ckZIRDdrXHodw7rCnMOow6nDusKzUS7Dow==','5omU5Y+p542Q5LmX6Len','JznDpw==','5o2I6Iy65bS/5YWW','KXTCkjA=','wr0mwrLCq0HCvcOy','w7nCmMK4wovCgsOrwog=','CMOgMitIYxs=','wqpnQcKMwrBI','w6fChMKu','wokEwr5EPh/Clw==','5pyZ5Yu05Lu+5L2E5Ye1','5beT6L+w5LmO6Zul','fMKhR3bDncKVSA==','5LuQ5pSu5aWG5p2P57mu5Y6w','EcO+woUtw5PCnsOL','wqQ6w5o5','54qF5LmW5YSc6ICn','5LyY542S5Z+I5aSw5YKi5L2f6ZSS5ZeT','5aWn5Yyk5oGu5ZWk77+A6YCW55WC5LqM5oOl5b6Y5pyz5Lu75bK45LqP6IOD5aq355iJ5Z2d5pWG5ZCF','Qjwhw5RxMA==','bDbCrxM/wobCoE5Vw54FJ2I3','woTDkMKZwqk=','wozDmsKEw6lt','D8ONKxlPIw==','w6ogw4FRIg==','FcOHNxBD','w60Qw7gHBg==','woYCw5QWGw==','woEZwrBb','5qyc6ZSh5Zej','w7cMw7haBsKiMgV1Ezdow4XDocO0wp12OMOfw4I=','wrsswrI=','w4rDgMODw4/CgxHCow4=','a8K6wr0=','OMKfw5lNw7DCng==','wqVpX8KQwqdGw7dcwoI=','GMOPEhgWY8O/CQ==','w4HDijjDnsOOwp1TwpTCrTI=','fjzCrQgowpA=','SsOvw6F+woLCpsOJIw==','wofDk8KhwrZZO8KnbQ==','BMOHL1BeLsOJfTRtw6PChwI=','6Z+A5Lqi772Z','5pmv5p2f5aS56Lyj5Lum6K+45pmJ5ZO3w70=','5pql5Za377+A5oqf5p+u55iX55eL5Liu6YCe5Y635p+d5Lmf5Lmv55iP55qw77yp5bGH5pmt5ouP5aW65Lqc6IOi5LmI5bmq','PsOIN27Crw==','ey/Ctw==','bCXCqcOHw5VZw7o=','562o5b+L5LyY5ZG05LiP5L21','wosswrXCqUzCscO2IcOyw5M=','GsKNwpUjCQw=','6L216KO75Yai','w47DmMKkY8OqwqNFwqFMRsKkFMKPM8KVwoZm','dcKtSGbDlMKDXA==','54+86ZWWGg==','5pmP77+H6LGQ6LCM5LmK','wqzCmh/DgiXDlsO5','5pml5a6k5p246YGF54uY','wozCtkk9','wpjDtMOlwpbCvsKYDMKK5Z+F5qOl54K65YWj6ZSC6K+qScKE','w7rDpkjCjhYV','d2vCrsO8dT4RbsKh','wpvDiMKGwrJYaMOmJR7CugcywqLDhAzCiMKKw7DDrzXCoA==','eUZIDwlwTWIqw6XChMOvwqvDoMKwXBTDoibDsGwVaW7Djw==','5oux6Z2b54qA5puK5qiG5b2Y','w6bDiiLCnsORwoEcwpHDt2MUfsOaO8OSwrPCr3llSEjDpcO1wo8=','XEwTJkQ=','wrgiwq7Cq0XCqsOIIMKiwpbDnw==','OyrCocO4dw==','5pev6ZiQ5YyL5b6z','5piq5ZGM4oGA4oG2Rg==','5a++55205pmU55GR','UkMPJgw=','w4McXAB3','5LqI5pqK6K675L+Q5L+C55m25ZC+5a6W','EsOxw408wqIPwpQ=','w4HCrcK8woo=','fsKnRmfDmcKZSMOnw6DClcOIwrobwowuJCDDhXIiAA==','YMOySsK7VR4UwrkaV8OOwpA=','w7cGw7sAE8KiDg==','woLCsmk5w5HDjMKJUA==','BMOaJx9TMg==','6IuY5Luu5b+s5L+R5ZSf','5Yiy6Lyj5Li16ZqFHei2nui+mg==','OsO7DMKZw6gQ','Yjkn','MsKbw5U=','5Z2Q566r5oqZ5YaL','TsOlw7gYwpnCtsOVMxspcMKsZ0M=','wr0vw4ItHQ==','aXTChsO/','w5rDnMKzN8OqwrFMw6E=','5aa05YiZ6ZOj5o2P','wrRmU8KIwq1Fw6BKwq0bKQ4jJmDDqRw=','5Ya455uK5qKE5p2Q5ZCi','NmPCjR7DsQjDsQ==','w5rDm8KiJsKj','w5LCvMK8','D8KJwpo3FRdh','WsOjw7FCwoU=','w6nDq1TCjQk=','BMOGbAdIIsKTbGNvw6/ChBQ=','w4jDj8KgPsOmwqo=','5oqg5p216L+q6YKV5b+o5LiS5ouW5re955i85Lis5oei5q2e5Lmg','w6nCksKhw7HCjcO6wprDscKNc8KlKi7CgFo=','5YiV5Lys5pm85oq85LqO5LmX5Lqm','ckxLHjNscA==','w4TDgcOew5vCpgzCog==','wosfw4cB','OcOtFsKdw7oUTEI=','5Yiv6L2r5LuH6ZiBw5/otbvovJs=','wr0swrfCqUQ=','LjDCv8Ou','BsOwwptow7fCgsOAR8KKw7hRQWJowo3Dkw==','w4HDijjDnsOOwp1TwpTCqj4=','LFbCg8KCIErDqg==','ayYrH8Ky','F8OjODY=','csK0wr86wpbDvMOmw6vCucKHGCMQwonDk8O9LMOdPQQ=','McK3wpPDhQ==','AcOoPjxIajDCmsOxw4/DrsKj','E8OcIw9L','K0LCksKaGk3Drl9T','PMKxwrDlhLbljprmlonpl6Y=','eMO1SsK0XxQowrJY','IMKBw5RQw6TDnw==','dCU9A8OMwr9F','w5nCvMKmw5zDp8Od','IcOGNHDCrA==','wqUxw5wnS2fChXlVwozCgcKR','O1jCncOHBFbDoVRawrZHw6zClgHDiw==','5L+Z5Lul5aS05L+75oCR5ZK0Jg==','w47DmsOVw5rDvg==','GcODCDQ2eMOo','K8Kdw6JWw6XDj8Oyw77Dsw==','IMKMw5JO','ScKaID3Dk2rCvls=','wqsVw4MRw4EmCw==','VUgaf1Qiw53Ds8O9MCvDjz8=','wq/CkxjDgg==','6Ju96Jir552t54Op','w73ChcK1wrc=','w51cecKeTMObYw==','YcOyUsO7SRcnwqZHRsODwpR6IybCryo=','E2nCicOuwo94','wpDDkMKbwqFA','w6PCjsKPwrfCgsOwwpfDscKH','w7s6w4JGYsKPTlzCssO+w74lesOVFjshwqs=','AcOwwr41w5HCgsONRw==','wpxxw7zDtTLChcOMwpvDiw==','w50yFA59PsOlwo3Cow==','w7RrKA==','w63DjTzDgMOIwoFQ','J2nCjDTDtA8=','wq1rSMKdwqZOw40=','d3bCmcOxYi8Pe8Kx','5p+H5paX55yt55+i','5ZOK5ZGV5ZO35LuY6KG95ZSn5ZKV5ZCf56yg5YiO6YCJ5pSD5ZGg5ZCs','Rycqw5FKOyw=','w5g5Bh8=','w7s6w4JGfMKODlXCs8O8w6N/aA==','w5fCoMK8w57DoA==','d8OzW8KwVwQzwrIN','55qw5aed5aSS5p6I','CMOBHCoBfsO+CA4=','5LyQ55yE5Luh6LKp6Jqh44Cfwqw=','dcO0W8KhWQ==','5oq95pS+6IGr5oGY5pKU5Lyf77+M5aep5L+Xw48B','wrUbw502w4Y=','WnfCmsO6fDIbb8Oww4Q=','w5QNUht3Ww==','w4Q9Ehhq','ZTY5Cw==','wpYbw4E=','wqgmwrbCjm3Cm8Oe','5Liz6Zec5aWY5Ymq5pS65qGb','eFpmAjN9Q3AR','fSvCvxwv','wqAVw5kiw5A2','wpZtw5LCsyPCg8OJwp3DinHCkToTB3LCqnpGw5BPw6vCk8KZJWU2w4XDs8Ozwq4+w5o=','w5IQVRxmWsOw','a8OufMK9VA42wrIN','YcOyUsO7SRgzwroMUMONw5tlMCDCvjDCkMOGZ8Ka','IcKCw4hdw6s=','5Yq66L2D5LuG6ZqPw4votaDovLs=','B8OwwoMow7nCmA==','wpltw5g=','5LuH5ouB56Ge','YyXCvxwowovCp0ZCw50gKXU=','5pW45rKA6LWc6LyE5Yim5bm+55SI5a6iw7vmoZDmna/mmKTlkKvlrLnoorrvvYk=','5oiJ5Lqj5ZKg5p+O','HH7CisO7','wqoZw5khw6swHMO3','w4YpDg==','wp57wo0=','6ZqC5ZGB5YSe54CZ56e777+d6Zqw6Lu25Yen54Cg5oKu44Oq','wp1gw5fDpw==','5oyG5LyP5oiK','DcO0w4gz','KcKXw5JO','wqwrwqfCpEvCu8Oz','ayTCoMOf','CyzCosO6fnzCl1bCuAU=','w4HDijjDnsOOwp1TwpTCqDY=','YcOyUsO7Whg6wrgcEMOLwptxKyHCsyHDkcOBesKcw6hb','worDl8KQw6Uo','wr16R8Kbwrc=','wqs7w4cuW3w=','wq1hS8OHwrlUw7pBwpUIIAgxP2XDrhNEw65aJ2LDpcOL','w4/DhcOCw5jCqQ==','w5nCtsKv','w4/DhsOAwoXCtRDCtQfDq8KRUcKowqPDu2jCvQI=','5LiX6ZeS772+5pyC5Lm25Lq4556b77y6w6/nsbwCw4M=','5LmA5pSY5ae45p6+','4oKf4oCJNemAq+mWieS6jjDkvYflpablpJJuwp4=','VSEww5RpGzzDmg==','fiohw5ZqMSw=','5a2a556t5pq255GK','F8O2wo0vwogIwpp5VcKHwrLDrsOiwp5PZMOJwo/Cj2fDrQt/','bcKmV3vDkg==','M07Dgg==','5buI5bqi5YOj5pep5L+G6Z20','6LS36ZKg5aGl','G8KNwo1jHgw8w7jCmcOTw7ImwqnDkMORw6dQanvDrzHDlsOtw47Dm8O5w6o=','w6bDgCHDhMOHwoBq','wqNvUsKKwqs=','azfCuhgs','PCzCuMOx','5YqB6L+L5Lix6Zi4L+i3m+i9rw==','5omD6ZyQ556W6KW36aOE','wqrDjSrDnMOSw50=','bMKwwrkVwpLDvMK9','w5IaVkZ6XcOGwqXDkMOCwoJVwpbDl8OnwrI+w4XDkW1Pw6fDoMOCwo0owqk=','w6rDp0PCjQ==','wpZuw5bDvjw=','ZcO4Sw==','VUgaf0ovwpLDt8OtNSPDlXTCq0kLe8KL','OMKywoXDkg==','BMOiPw==','w4BccA==','wpTDmcKG','w4rDksK9','wq1hQsKMwpxfw71KwpEA','OljChcKHCkzDjl9Hw7FSw7w=','5omT55+l5YWb5p2b5LiG','wrMxw4IsQQ==','wrnChhXDliHDjQ==','WCUuw4Zn','5qyA5Z6v5oi1','5oq85pqY6Ky95Ymm55iWwpRy5Lua5buo57+F566G5pei5pSW55uN5qOK5a6jKA==','Mm3CgyA=','dzQ6FMO3wqI=','H8Ouwp0i','VTc3w4J/','RcO+w6FGw5fDvMKUMRwkKsO7Y0Nqw6jDm8OJw7NMw5wMw5FFwphgw4bDq8OaDw==','JjDClsO8d3DCnVfDrw==','fCDCogh5','AMO8w5A8','wp14wo0=','5YSZ5oqu5LqV5Lme','5LmP5puB5L6B6ZS+5oqR5pqD5bq35oqK5aWH5aSc55mV5biU5Y+l','5ZGK5Yi35oum5YuZ','IsOOLHDCrw==','Z8Kvwrcgw4E=','w7Q5w4UeJQ==','JcO1H8KEwrI=','woUZw5QdWQ==','w7Uma+WEk+WPtOaXnumVnA==','57qb5pa35L286ZmX55iE','w53CvMKhw5zDu8OB','E3PCicOswpB4w7c=','w5c5Dh9qPsOI','w47DmMKkY8OlwqxdwrE=','w5AbXxpsQcOMw6jDj8OOwodCwoPCjcKowpAzw5nDm2VZwoXDscOewoMvwrE=','5qym5Zyu6Kys55Wy5p6P','FMOsMSg=','5ZGQ5ZKd776j5LyI55qS5oel5oC95piQ5ouG5Lm854y65Zyj5bC86KWx6Zyddw==','BMONLApCJcK/','wrPCihXDlQ==','w4BEd8KZHA==','wrwmwrDCsUnCvcOy','A2/CjcO9wo8=','BMOHL1BUPsKJZWNuw6vCgA5u','5ZKH5L+O5Lm36LSm546X','HMKBMT/DnGHCrxFCJ8KYwpdLwqdZw4TCrXXCtgI=','wr1+XMKNwrBfw69f','6YSQ54m/6Z6x5Liu5aSA5ayA54qv','wocPwq51IyjChQ==','EmjClMO+w4k=','5p+055yi6K+D5oKvdiA=','5LyF5Ye377+65Z685p6x6Z6L5out','w57DjMOOw4TCvhvCnwnDtsKeYcOqwrbDrXfCoRU=','OsOPOWA=','5Lmy5YyR5oqZ772c5bGI5LiW55m55pWE5Z2R5LmT5LiS5bKl','5Lmu5Yi55ZO75bGp6KKh','Eyx5wpjChw==','WOaLluWJsuebuuivuuWQneisruaIlQ==','5YWD5LuF57ur5ou45LuD5YW45b6K77yj6K2W6K6teUvluKTnm5XlhYvlvoTvvbTlhZbnsbvpkrXnopHvvILkuLTmnqbngJLpl7vpq53vvKI=','N8OEO2bDsWnDvMKRwpzCgsOpw6ckW0R2OMOkwo7DnXo=','DMKNwrM5HxZ8w74=','w5MaTgZnWw==','F8O0w4Irwp4vwpBxSg==','eyvCmQY5worCmUA=','IcOQNXg=','6ICk5LyM5ayq56KO','PsK5woXDkhIcw6LCl8K3dg==','w4/DgcOMw4XCqxzCqB4=','FsO3w5Y2wokSwrhyXMKGwrnDpQ==','UMKdOHLDhHzCvlJIKsKYw4xbw6dIw4zCrw==','wo8Hw54MBcKP','6IO55L6g6Lev5Y66','w5XDncKCwrJAN8KwNw==','d8K9VmXCjMOfA8K+w7LClcOUwrQQwotoByfDlCglADLClMOVd8OLwr7DucOFw4YpRB8dBMK2w4s2esO6wroWw6EEw6PCvMKkP8KHXcK3VGw=','DMKHwpg5LhB8w63ClsOew646','NcOPMWDDu3LDgA==','5ZCC5Yii5aak6LST','w43Co8Kyw4rCoQ==','wqoBw5ojw5wt','5bCQ6amT5pyr5aSk5oqn55m06a2p5YmS','wp8cw4FLE8Kdwp8ow6U2w41kwqJhd8OfccKBOMOsw4g=','6YOG6K2r5pu46Z2G5rOf5aeM','5om06YGi5byd6YKH6ZWq5q6Q5Lig','5LuF6L2z5LiL','w4IFQQxwS8OSwrY=','w4zCssKiw4jDsQ==','fzXCsw==','QiEpwptpMTPDhMKwK0nDmcOHRjpBw6Y=','NmPCjQnDtRDDtQlXwrQ5w5c=','c2zCl8Ow','5LyQ55yE6KKg','WcOjw6Fawog=','5YCd5pSw55mD5ZKU','FTh5wojCmHU=','556q5Lu555yw6Z+25Lif55+25by177y+6Zib5ZC+6Zq06LqR6Zmj6Zm15oKm44Cl','5YSP5Y2v5pWV6Zas','5ZKz5L205Lmg6KyA6K+k772y772C5ouG5YCz5byt','JcO/CcKSw6UQcFDDlwtaFA==','wqbClxrDhSDDlsOZw40Dwr0=','wpTDm8KZw6oow6s=','RlID','c8K4MUbCqcOWHlPCug==','BMOiPwZJYQ0=','wqA7w50dSmzCuA==','woEEwr5TKTnClUvDqDHCgMODw7ADe3IpN3jCoT9xcQ==','5oiO5Y2u542k5LuX','c8KwwqM2wofDoA==','JTR2w4M=','wq/CkgPDgiU=','w5tAaMKEGsOQUEkPXDXDhA==','5pyz5bOj6L6M5Lm25pqi5pyM5puk6ZeM55ql5b+D5Za9','6YC35LyD6L2M6ZyW5Lip5YaY5bil55yj5ZWe','wpDDk8Kfw6xAJ8KoYwvCswsmw6XChFzDksORw7/DoQ==','WsOmw75dw58=','w43Chui+m+maiOS6p+WIog==','5Yi/6L+65LuA6ZiiZ+i0kOi8sA==','w5UMUwoy','IcOwwoEow7HChMOHRsOQw6I=','5bCd5qG7772f57q+5L+j5q6y54KZ5aW655iu5ZaM','BGnChcOi','6Ju26JiZ5bqN','5rKA5p2H772I5oO+54i05LuT','dMKywrQowpfDssK+w7Y=','QsO6w7BYwrjCocOX','w4HCtsK4','5oic5aWw5aeA57qD5Y2D5Lma6Zqh5paT6ZWr','w5pAcMOEFcOWeE4FXD/Cj8OjwqxyNmkz','5Lqc5Y+qBA==','ZcK9wrgwwp3DscKpwqHCpw==','5ZqM6aic5Luf5Lm4','wp8cw4FLAcKBwoQ2w6U2w4knwqEmesOOd8Ofag==','5LiF5aWq5L+T5oKo5ZWq','5aWm5aWq54uk5rqR55CU','5oi85Yue5oqL5ZuA5o6J6ZCC','FsOzw4Q/','5pef5pey55+754GQ','bHHCisO8ZA==','MmPCkCnDuBU=','fcKiRXLChA==','ADVk','w5rDnsKtOcO6','5L++5pqt5oOD5bqL6ZSe5p2w55i+5ZCaWA==','w5YzFB9gIQ==','I8OyFsKNw7A=','MMO3w5Q2woEOwpB4GMOb','DcOrwoI2wqfDhMKJW8KIwr5TDnVlwoHDlBc9M8OsccKYw7l8EC0QVi7DuGZV','5p+55Z+T5oio56Kw','5L2m5LiX6KaU5b+LwoIs','wpIaw48OBcKJwpwg','E3TCgcKhwoF1w7bDrsKSw6fCkcKow4snw7tUw47CkxHCgA==','wqw5w4wu','BMOHL1BTMsKJZyhvw77DnRB4w6JuXcOT','bcK8TCzCgg==','GWjCr8Onwp5+w7jDssKD','5rGB5p2j5Yik6YCo5bi15Y6gw5A=','w7MGw6EgE8KoIw==','wrTCjR/DgzrDjMO+wowUwq3CshLCrsK0ccOeG8O/ecK5ScK1dC4JbMK6KMOSw79gw53CvcOObMK9wp3Dg3Mjw4rCjcOswpo=','wrgVw48x','AzRxwonCmA==','X8Ovw7hZwpvCtg==','wqM6w5E+','A8OwwoQDw7zCiMOO','aznCpcOR','ZcK5QWY=','WsOhw69MwpXCu8OI','5ayZ5pSt5ayA55uU6YKE5pi55YC25ayq77215a6P5ZGr5a6D55uM6YOx5pmC55aQ5a6c44KX','O1jCncOHHUzCqVBaw7xEw7bClATCi3QFcMKXw4ZJHQTDmErDnSQ=','Ryd1FMKxw6J+L8Ofwq3Ckg==','6LWf5aWH5p+N','BMOpwpcyw7zCmQ==','WMKVLCXDmWnCqQ==','w6nCkcKlwrzCjA==','RsOySMK7XQI8wrNbCA==','57Gr6YOq5LqA5YiQ','ScOlw51FwqvCvMOYJQ0=','SsOvw6FiwojCq8OP','wqXChx/DmTc=','bS/CssOdw5RYw6tQw543Tn0=','c8KvwqEi','UE4ZNXEowpDDvA==','w6khw5s=','bMK3w78=','AG7CmA==','ZcK+wr4h','NcOEcWPDu2nDs8OawpHCg8Oiw64mVQJdY8OnwoLDhnEsw54=','T1Qa','wpvDm8KZw7k5w7FM','JcOON27CrA==','5ZCQ5ZOqw5dn','772p6YC86ZaJ5ZSM','5L2B4oGo4oGiwoo=','PGrCkjHCog==','wq0sw509R3bDvQ==','w7/DjTrDkcOMwotHwpU=','wo9qw4rDvDnCn8OSwpvCng==','aCQmBsOtwqhVOMKb','fjzCrQgnwps=','Ey4+woLCg3MSwojDrGl4woRG','JyzCuMOxTX3Ck0XDlENRWMKxwowQT8KoDx3CuMOmw5DDncKoFg==','5L2B6Iak5ba15pan55qB5ZGCdg==','wqd9ZcKBwqZfw75KwpY=','XsKGLzjDjmM=','JsKdw5Fdw7M=','fcK6wrklwpzDpQ==','HMOzwp0t','w5fCtsK9w5XDt8OGaMOJw6bCi2fDvQ==','wq8tw4sr','JsOqAcKNw7A=','5pi65a2p57uQ5Yyr','wpHDk8KHwqxPIQ==','5qyj55eC5qOP5LmA5buR5Lij5ZOwCA==','5ZG35Yqf5oug5Ym2','5Yeb5L+655ip6L2z5rGt5p22','JmnClHTDuwnDsQNQwrU5w4xEw6hGwpXCs8OiKw==','wowPwrRGMjg=','K8KAw5Vbw7LDnsOsw6vDow==','w5BBacKPDMORbFcI','dsO4R8Kh','JmnClHTDqhTDtRNWwrN4w5sfw6tBwpvCo8OsL2Q=','HCbCocK5UXzCmVnDolY=','dz7CsAMpwoE=','dSknM8OmwqlU','wq4fw4Irw4AtNsO8w5vDtEbCsA==','wpZnw5HDqTLClMO+','dcKiRic=','w5fDn8KHw6Zzw7dhw4YqQFFC','wqlrUsK9wqZEw6E=','w5tAaMKEGsOQ','Q8KHIQ==','CMO+woQtw7jCn8KcDcOLwrJQVG1lwoDDjk8jecKy','5pWL5pa1556854O8','5Y6V5pa35Lin','wrbCjBbCnz/DjMOvw5ECwrbCoQ/CssOoZsKFHsO5YQ==','eX3CmQ==','w5w+CBF4Ng==','G8KOwokuBg==','w7IKw7sQOcK+Mg==','w4M1BB9n','5Z625LqPD8OG','NXPCjQ==','w4A9DgxrI8Ol','wq4fw4Irw4At','5Yi/6L++5LuN6Zujwpzot5jovaU=','w5I1Dg9AIsO1','5L265Yyk6IKP5oSx5Ya46LSW55ux5LqM','MMKoAQ==','wqkywq/CoVjCrcKm','572z6LyO6Lay5pef','w5URXARhSg==','56ir5YyZ5LuR6L2c','SMOhwqY=','w73DrV3Dlwoaw51iEkvDiMKjUVPCrQjCg8OXw5Yew6DDjsOE','5buG55a25a+45Lu16L+9','5LiX5puk772+5a+X6ZSk5bis6Ya555qy6IOf5ZKD5bCg77+377+n','fMKiHErCg8ObEA==','b2zCmcKm','X8KXOzvDiXs=','wodRw4IQBsK3w4hnwrpgwoZowrx9dMOkMcOMZsKswot6CMONKcOnwpvCk8KSw4HCp8O3wpXCuMO9w49qwrIER8OMUcOCcio1GMO9X3FQw5UlwoF4H8KEw4o/w5h3QDHClsOBwrbDnxzDuiZeOhDCjU7Dh399F8KfdcK7ZcKwYBkowr7DlmE/X8KAwqHDt8OdTsO0c8O3','JcOyDsKawrI=','T8Olw6BYwonCoMOyPg0uYMOn','w5nDm8OB','bCXCqcOHw5VZw7s=','6YCR5YeT56iu5bul','UUID','5q6X5aSe6Laq54GQ','6Lyf5pmx5YOz6LW45ZCI77yV','w7rCkB/DkjTDl8O+wo0EwrTCrRfCpcOpZsKCFMK4I8KhDcK7YGUXMQ==','w7s6w4JGYsKPTlzCssO+w74lYMOd','YDDCosOdw6VZw44=','ecKjF03Cp8OQEQ==','5oux5p2n5Lmc5L2B4oGgbw==','CxDCheWHr+WPpeaXpemUgg==','PsOeK2TCpC/Ct8OVworDhcOvw6kmQwNVI8O3w5TDkXpww53Cr8KjFcOWamF/wq7Dj8OTwrnDmsOAw6/CgFYZHsKKwqbCpsKQQsO+wrfCr8KuwoM=','w7A2byFMZsO3wpDDscOiwrQ=','CsOpPzdeawzChMO2','5ouM6Zyj57mU5Y6n5paL6Zab6ZuT5YuD','w7XDkDs=','ecK5wqI+woE=','fMK5wqIiwpY=','OUfCgMKgCg==','w50QVQ93QA==','wqkqwqzCo2/CsMO0IA==','HMOFC34OY8OvGw==','BsOxw4Qwwpk=','5Y2W6IOS572M57i25Y+h5ZmDNeaXh+ayqemAr+i+luaxieWEn+aUtumXp+mrg+ivjW3DnsKa56WM5ZOY5YWR5q6r5oiX6KK96aqd6K+m6K+K5rO8','IcKLw49Kw6XDnsOA','ezLDpAsiwpvCnkYPw5QuLH8=','5LqR5ZKW5YSu6K6s','bsK5wr5j','w6LDgDvDvcOLwpxHwoTDvHQ=','VUseMlU=','wrprXsKd','6YGv5Lm65ZGd6LaU6aGq5Y+l5Lu5','w73DrV3DlxUKw5RuAgvDncOjWEzDrBTCjsOXw7kXw7zDjMODw4MkbcOkw6M=','57qs5py2XA==','6IKW552754CO','w55KacKuH8OXfA==','5YuM6L+N5Lqm6Zi1R+i0m+i8tg==','eUxMDT5q','BsKBw5ZQw6zDg8O4w7/CpcO1','w7HCtsK/w5XDv8OaQMODwqDDlQ==','cSM+ScO7wrhBM8ONwrzCu8OGCE/DmMOYCsODc8KbOg==','cSM+ScOwwqIOPMOEwqLCoMKHC17CncOMA8OENMKbIydrGMK1UArCi3xDw4TCmjLCjlsWwq46w6s5w6/DhQ==','5Lqn5ZOg5YSs6K+K','wqVlQg==','AMONNipCL8KT','wqYww407QH3CqDlRwozCgcKTw5LCvB3DvcKHwp4BZzA9w70+','wpJnw4s=','B2HChsOj','wq8fw5prw5U3CsOhw4DDtEDCtMKkwqzCsMKsw5sYwqY7wqM=','5omJ5Zm55YuU6IKv6YC26L+e','VEgTKA==','ajYpFg==','AcOoPjxIag==','fDTCpsOBw4Rqw4FKw4QoQ2zCpQ==','BsOwwptow7bCnsOBTcKRw7hUTmh+woPDlBRkeMOjesKQwqQ=','WsOmw75S','wp7Dk8KWwqc=','5ZOd5ZGC5ZOg','ZsO4T8KhWQ==','54G354K35aSS5p6I','6ZSZ55aJ55ig5a6S','5oiO6Z6m57iN5Y2t5peg6ZSe6Zmw5YiJ','w7YMw6AaEsKj','ecKkHwDCusOcEVPCsSFCwpXCjg==','w4AoARpj','w5gGeABmS8ODwqPDnA==','6Jqv6JiL5bq7','w4vDnsKnKcOdwrda','556V57GD6L2T5ZaV77+r5L+z5puT5LqZ5puM57qS5bus6L6G5qGy5Z+J572l5Liv5rKX5aeceg==','wqhnSMKNwoxSw7A=','6La85ae95p2D','wrbChhXDhTDDl8OC','LMK/wprDlxAKw5zCkcK0ZMOn','w5wBQQxhSg==','JmrCkDnDuw==','w5bCtcKhw5jDuA==','5buk55Wo5a6N','w6nCksKhw7HCkcO6wpjDscKMc8KsPC0=','N2/CnjLDpA==','FiFmwpTCnm8SwonCrGBCwpBawrwGw48=','5p686aGF55yl6KW96aCC','5Z2w5Z6C5ru355OE','w47Dm8KgLsO5','wpHCjAzDnznDisO7w4ZVw68=','aFBBGSY=','D8OiJTVYcQ==','FsOhw5c9wp4=','EMOzKiBY','NFbChcKHDVfDhkFE','YMKjB0/CosOMAFPDrw==','a8K6wp4lwoHDocKywqM=','57iU57mR5a276KCH','wq9+VsKFwqpfw7RbwpsEJlI6ImDDtQ==','w73Dp17CjQQdw6I=','w4hDbg==','wpQcw7RYLyjCmATCsTrCi8OGw7o=','5omq6Z6A56Sj6KOu5pad6ZSc6Zqh5Ymz','w680w4EMecKfSlbCtsO0w6V8Yw==','YjDCsBZ5','w5rCt8Omw5jDvMOY','5ouf5LiD5oOV5bqb5LmF','6K6/5Lud6KyT5L+C5Lu25ZSl','w5g5Dgx7JA==','wooCwrc=','CjF7wp8=','5oqb5p+R5pSs5761','5aeI5pyS5pqD5ZGD5aWx5b+o5quQ5b2K','wqQ7w4c9SmbClQ==','5oqJ552e5L+P6ZSX55qS5Lq15ruB5Y+Q54um55iU5ZqR','w4rDhsOfw67CrRzCqA==','5b2h55+254G1','fHfCmMO6dC4=','CcOjISFO','5ry15rS556K+5LqQ6IKq5Luc56ud','546/5LqO56e05L2o54+75a295Lu65aCN55y+54qH6Zu/5a6177yc6LGM5L2y5a2k5piiw48i','wpDDk8Kfw6xJM8KnbVbCqQE3wqnChUE=','wrMxw5k=','5Yq/5LqE6LWH542a6Yav','wrgGwpk8w40mFsOzwobDv03Ct8Ki','eyHCtMOYw75ew48=','5bag5Yet5rKN','ZyXCrsOUw5hf','wqR8UsKdwqte','VEgDJVEr','Fil+wp8=','M8Kaw5UP','wpNrw5HDuRjCiMOC','w6bDiiLCnsOVwodQwpE=','NMO3C8Kaw48KSg==','5o+X6I+65Lqd5Yux','O8OwAcKbw7grSQ==','KWPClz3DpBQ=','6IaP5Yi35oym54+2','5Y6Q5LqQ56eq6KG1','E3fChcOswpA=','MUTCs8KBC1zDrFRQ','POe7reS7k+S5p+WsjuWctg==','B8OnwoIywqw=','QiEpwptxMCfDlMO7P1XClsOeRCtbw6DDlg==','5q+P5Z6B5ouG5o2k','5L+V6K296KyO5oqqwqzCig==','NSvCoMO1fGrCg1fCug==','5ZaN5qyL77y/','5ayF5q6n5pWa6ZaR','54CA5YeU5Z+T5ZOi5LuE5aaS6LS8C+aMnuaWjOW9ng==','5oqw5a+156ap6KGiwrBW','UMKdOHLDlmbCqldYIsKZw4xfw6RZw5zCqSk=','UcKdIDLDmWA=','wr4nw406Xw==','BMOtw5c=','wrUrwrfCpk7Cp8OiIMKcwpTDkMOXw7jCqx5GEQ==','Sy/CsMOdw5xEw4Nawppp','ej8gFw==','A8OMOgk=','5pyc5Yih5Luc5L2J5YW2','5rKu5p2N5Yi06YG75LmB5L+D5L6r5ZOm5oi36IKz5q6O5q2v5Lia5L2k5L275ZCc5pWB6YS/6L6j5Lih6ZmN','5YmX6LyW5LmI6ZiuC+i2pOi8oA==','w59Gc8KOMcONfA==','dSknKsOqwr9VKcOPwrU=','w5YQTzxmUMOc','w59Gc8KOMcONekI=','SD0Hw51gNiLDksO6','wprDj8KxwqpOMcKibxw=','5YW05Y635pSx6ZWH','57iz5py154qj5a675paw5q+l','dHrCisOsYzc=','w6nCksKowro=','VMO5w7g=','bcKnGUU=','fFBHWA==','w5LCvMK8w6/DtsONVQ==','w6bDqQI=','OMKjwo7Dkw==','wpTDksKdw7tv','6K+V5LuV5LqE5Lu96YO45LmY556s6YOk','PcODARkXYsOoHRzCmw==','6bms6K+45o+y5buk','fHfCmMO6dC4zZcK2wp8Hwpc=','5p+65pSl55+555+J','w6PDjCHDlMOtwpxX','wp4cw4gc','5b+05a2y5L+h5puYTw==','w5vDk8OHw4c=','wr0bw4M9w4Y8','dSjCssOSw55Sw5db','6ISm5YuY5Y2h5reN5YeX5rK2','w4rDgMODw4/CgxHCpQ==','5L6s57qp5Lm857qI5Lqk5Lm0','Z3LClcOsIQ==','6YeP5pSt5Yqf6L6o','wodtw4rDszM=','OC/CvsOwcHE=','w4bDjcOHw5jCrg==','w4A5GB8=','w4/DhsOAwoXCpRHCpwDDp8KVEMOqwr7DoH0=','J8KWw4hNw7TDnw==','woDDk8KYwrFEPMOnaRfCtg==','ckFEBDF9QGA=','6L216K2A5pem5o2M5oqD5Li155q75bS15Ly+','6K2F55ux5Lmk5pmH4oCl5L2u5L+I5LuL5oGL5p6u5LuJ55y65q6F55m95ayw6bmhZcKI','MMOUw6p1wrktw4Ms','fMKwwqMlwpbDusKF','6L2d5pqK5Y2K55ie6Zed5Za4','w5pHeMKJFcOGfQ==','w7cPw7AVBA==','5biF6bi655yN5L6s6YG65aSM5pyZ5Y2S5b+35b20wqDogrTpg5flp4fmn7TljZnlvLflv4rnm5HnrpLoroXmsYHlpJbpqbrmi7nlu7DpuZfog5HlpInorJXlvIs=','5Y6b6IGl57+y57qE5Y2y5ZqBw53ml7zms7rpg7XovJrmsajlhInmlJLpl5PpqoHorKbDlMOGJuelmuWRtuWGhuatgeaJoOigpumqheiug+isj+awuQ==','wqMtw409HSY=','w7bDp1nCngkb','M8OtD8KE','w5/DncOMw5nCuD7Cox/Dq8KGV8Oywq4=','w7cMw7haAsK1OQBxHiZow4XDqQ==','bjHCvh0YwobChVFIw5Uk','MsK1wprDkg==','6YOc5bKb6L6+5Z245Lmz54+75ZOa','wozCrEI+w5M='];(function(_0x43a6f2,_0x34a406){var _0x8189f8=function(_0x2695e5){while(--_0x2695e5){_0x43a6f2['push'](_0x43a6f2['shift']());}};_0x8189f8(++_0x34a406);}(_0x34a4,0x180));var _0x8189=function(_0x43a6f2,_0x34a406){_0x43a6f2=_0x43a6f2-0x0;var _0x8189f8=_0x34a4[_0x43a6f2];if(_0x8189['lYrorM']===undefined){(function(){var _0x173f42=function(){var _0x12cfe8;try{_0x12cfe8=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4a2197){_0x12cfe8=window;}return _0x12cfe8;};var _0x1facce=_0x173f42();var _0x5ecf02='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1facce['atob']||(_0x1facce['atob']=function(_0x33a81c){var _0x5c8d40=String(_0x33a81c)['replace'](/=+$/,'');var _0x4225c9='';for(var _0x474927=0x0,_0x1ff7c8,_0x3a81bd,_0x2ea521=0x0;_0x3a81bd=_0x5c8d40['charAt'](_0x2ea521++);~_0x3a81bd&&(_0x1ff7c8=_0x474927%0x4?_0x1ff7c8*0x40+_0x3a81bd:_0x3a81bd,_0x474927++%0x4)?_0x4225c9+=String['fromCharCode'](0xff&_0x1ff7c8>>(-0x2*_0x474927&0x6)):0x0){_0x3a81bd=_0x5ecf02['indexOf'](_0x3a81bd);}return _0x4225c9;});}());var _0x553886=function(_0x10fe42,_0x344025){var _0x456a12=[],_0x10c905=0x0,_0x5148dd,_0x544e0f='',_0x3fa6b='';_0x10fe42=atob(_0x10fe42);for(var _0x4c9d4a=0x0,_0x5e7d9e=_0x10fe42['length'];_0x4c9d4a<_0x5e7d9e;_0x4c9d4a++){_0x3fa6b+='%'+('00'+_0x10fe42['charCodeAt'](_0x4c9d4a)['toString'](0x10))['slice'](-0x2);}_0x10fe42=decodeURIComponent(_0x3fa6b);var _0x3ca732;for(_0x3ca732=0x0;_0x3ca732<0x100;_0x3ca732++){_0x456a12[_0x3ca732]=_0x3ca732;}for(_0x3ca732=0x0;_0x3ca732<0x100;_0x3ca732++){_0x10c905=(_0x10c905+_0x456a12[_0x3ca732]+_0x344025['charCodeAt'](_0x3ca732%_0x344025['length']))%0x100;_0x5148dd=_0x456a12[_0x3ca732];_0x456a12[_0x3ca732]=_0x456a12[_0x10c905];_0x456a12[_0x10c905]=_0x5148dd;}_0x3ca732=0x0;_0x10c905=0x0;for(var _0x3977af=0x0;_0x3977af<_0x10fe42['length'];_0x3977af++){_0x3ca732=(_0x3ca732+0x1)%0x100;_0x10c905=(_0x10c905+_0x456a12[_0x3ca732])%0x100;_0x5148dd=_0x456a12[_0x3ca732];_0x456a12[_0x3ca732]=_0x456a12[_0x10c905];_0x456a12[_0x10c905]=_0x5148dd;_0x544e0f+=String['fromCharCode'](_0x10fe42['charCodeAt'](_0x3977af)^_0x456a12[(_0x456a12[_0x3ca732]+_0x456a12[_0x10c905])%0x100]);}return _0x544e0f;};_0x8189['fnnjbV']=_0x553886;_0x8189['uaIQSS']={};_0x8189['lYrorM']=!![];}var _0x2695e5=_0x8189['uaIQSS'][_0x43a6f2];if(_0x2695e5===undefined){if(_0x8189['UKdfSy']===undefined){_0x8189['UKdfSy']=!![];}_0x8189f8=_0x8189['fnnjbV'](_0x8189f8,_0x34a406);_0x8189['uaIQSS'][_0x43a6f2]=_0x8189f8;}else{_0x8189f8=_0x2695e5;}return _0x8189f8;};const wt=device[_0x8189('0x29b','#^@Q')];const hg=device[_0x8189('0x810','D9sr')];runB=!![];var 脚本地址=storages['create'](_0x8189('0x47d','iR28'));取消关注时间=0xc;scyx=!![];jtqx=!![];var scriptName=_0x8189('0x655','1()i');var AppAr;var storagesd=storages[_0x8189('0x321','^)J3')](_0x8189('0x334','5eeV'));var storagesd2=storages[_0x8189('0x754','9IRN')](_0x8189('0x9ea','nFhx'));const ZZ_version=_0x8189('0xe9','BdX2');var jbgxsj=storages['create'](_0x8189('0x99c','KtCK'));var qxxc;zxc=null;gb=null;var timeStamp1=Date['parse'](new Date())-0xdac;storagesd3=storages['create'](_0x8189('0x80b','It1b'));var 控件点击2=function(_0x1b16eb){var _0x2199b2=_0x1b16eb[_0x8189('0x9a','p0%o')]();if(_0x2199b2){press(_0x2199b2[_0x8189('0x682','JX6y')]()[_0x8189('0x260','BdX2')](),_0x2199b2[_0x8189('0xd2','Hrzg')]()[_0x8189('0x5ac','HlqN')](),0xc8);sleep(0x7d0);return!![];}else{return![];}};var 随机滑动2=function(_0x463bd3,_0x31b4f4,_0x5e45b9,_0x43b3d4,_0x21ae08){var _0x4ac3c2,_0xb07bac,_0x59ee53,_0x504b21;_0x4ac3c2=random(Math[_0x8189('0xa16','nFhx')](wt*_0x463bd3[0x0]),Math[_0x8189('0x558','8^e]')](wt*_0x463bd3[0x1]));_0xb07bac=random(Math[_0x8189('0x9b5','wgP%')](hg*_0x31b4f4[0x0]),Math[_0x8189('0xa78',')#]u')](hg*_0x31b4f4[0x1]));_0x59ee53=random(Math[_0x8189('0x552','BdX2')](wt*_0x5e45b9[0x0]),Math[_0x8189('0x24','N0vT')](wt*_0x5e45b9[0x1]));_0x504b21=random(Math[_0x8189('0x377','HlqN')](hg*_0x43b3d4[0x0]),Math[_0x8189('0x71c','9IRN')](hg*_0x43b3d4[0x1]));if(_0xb07bac<0x32){_0xb07bac=_0xb07bac+0x32;}if(_0x504b21<0x32){_0xb07bac=_0x504b21+0x32;}swipe(_0x4ac3c2,_0xb07bac,_0x59ee53,_0x504b21,_0x21ae08);};var getRandom2=function(_0x45994b){try{var _0x45994b=_0x45994b*0x64||0x0;var _0x675917=Math[_0x8189('0x445','KtCK')](Math['random']()*0x64);if(_0x45994b===0x0){return![];}if(_0x675917<_0x45994b){return!![];}else{return![];}}catch(_0xdd9523){throw'百分比概率出错'+_0xdd9523;}};function 监听停止(){events[_0x8189('0xa12','70r8')]();events[_0x8189('0x35e','rDIx')](_0x8189('0x93f','bkiR'),function(_0x1db4e7){if(悬浮控制台){ui[_0x8189('0x607','Jqb7')](()=>{悬浮启停['状态']['setText']('启动');});}try{if(zxc[_0x8189('0x68','XLjY')]()){mylog('暂停脚本');runB=!![];try{zxc[_0x8189('0x6dc','7H#U')]();gb[_0x8189('0x6f2','9IRN')]();}catch(_0x12dedb){}}else{mylog(_0x8189('0x8f8','p0%o'));engines['stopAll']();}}catch(_0x3463c2){}});}写入版本号();ui[_0x8189('0x1d5','V$Te')][_0x8189('0x84a','70r8')](storage2[_0x8189('0x4eb','V$Te')](_0x8189('0x9de',']uT$'),[0x0]));ui[_0x8189('0x648','BdX2')][_0x8189('0x3fb','(Gim')](storage2['get'](_0x8189('0x791',')#]u'),[0x0]));ui[_0x8189('0x493','6Yss')][_0x8189('0x68a','D9sr')](storage2[_0x8189('0x9df','(Gim')](_0x8189('0xaa8','wgP%'),[0x0]));ui[_0x8189('0x131',']uT$')][_0x8189('0x9d2','iR28')](storage2[_0x8189('0x7ee','8^e]')](_0x8189('0x3c8','4Yry'),[0x0]));更新();ui[_0x8189('0x9cb','#^@Q')]['on'](_0x8189('0x684','E]aj'),function(_0x9f88ef){if(_0x9f88ef&&auto[_0x8189('0x66b','xq7I')]==null){app['startActivity']({'action':_0x8189('0xa98','XLjY')});}if(!_0x9f88ef&&auto['service']!=null){auto[_0x8189('0x59d','$mk^')][_0x8189('0x3ce','70r8')]();}});function dealUrl(_0x935e42){return _0x935e42[_0x8189('0x7e4','O4vp')](_0x8189('0x6dd','KgQU'));}function get_number(_0x19e6ee){mapCode2Name=JSON[_0x8189('0x643','&OXO')](_0x8189('0x168','E]aj'));mapCode2Font=JSON[_0x8189('0x384','nFhx')](_0x8189('0x8f3','Jqb7'));return mapCode2Font[mapCode2Name[_0x19e6ee]];}function get_font(_0x42fd41){let _0xf9c89f='';for(i in _0x42fd41){if(_0x42fd41[i]['indexOf']('&#')!=-0x1){let _0x1fe855='0'+_0x42fd41[i][_0x8189('0x69b','*7Da')](/\"\> \&\#(.*?)\;/)[0x1];_0xf9c89f=_0xf9c89f+get_number(_0x1fe855);}else{_0xf9c89f=_0xf9c89f+_0x42fd41[i][_0x8189('0x2a2','5eeV')](/>(.*?)/);}}return _0xf9c89f;}function iGetInnerText(_0x519977){var _0x302b3f=_0x519977[_0x8189('0x707',']uT$')](/\r\n/g,'');_0x302b3f=_0x302b3f[_0x8189('0x5c7','qg7$')](/\n/g,'');_0x302b3f=_0x302b3f['replace'](/\s/g,'');return _0x302b3f;}function get_dyinfo(_0x2b94bb){try{var _0x18d1a9=http[_0x8189('0x503','zA$x')](iGetInnerText(_0x2b94bb),{'headers':{'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x209;\x20SAMSUNG\x20SM-A6060\x20Build/PPR1.180610.011)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20SamsungBrowser/9.4\x20Chrome/67.0.3396.87\x20Mobile\x20Safari/537.36'}});if(_0x18d1a9[_0x8189('0x854','Hrzg')]==0xc8){var _0x380059=_0x8189('0x7d','BdX2')+String(_0x18d1a9[_0x8189('0x8f6','E]aj')])[_0x8189('0x470','ZmHf')](/sec_uid=(.*?)&/)[0x1];var _0x38e361=http[_0x8189('0x57e','1()i')](_0x380059,{'headers':{'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x209;\x20SAMSUNG\x20SM-A6060\x20Build/PPR1.180610.011)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20SamsungBrowser/9.4\x20Chrome/67.0.3396.87\x20Mobile\x20Safari/537.36'}});if(_0x38e361[_0x8189('0x534','@9@0')]==0xc8){var _0x294cc0=_0x38e361[_0x8189('0x2d5','70r8')][_0x8189('0x50','O4vp')]();douyinNickName=_0x294cc0[_0x8189('0x43f','wgP%')][_0x8189('0x886','Jqb7')];当前抖音关注数=_0x294cc0['user_info'][_0x8189('0x53a','qg7$')];当前抖音点赞数=_0x294cc0[_0x8189('0xa4e','rDIx')][_0x8189('0x946','KgQU')];return following_count;}}}catch(_0xd4088f){sleep(0x3e8);}}function 抖音关注点赞数(_0x56d7e1){var _0x56d7e1=storagesdXY['get'](_0x8189('0x17f','iR28'),null);get_dyinfo(_0x56d7e1);ui[_0x8189('0x7c4','z^$&')](function(){ui[_0x8189('0x26a','wgP%')][_0x8189('0x8c','9IRN')](_0x8189('0x985','p0%o')+当前抖音点赞数);ui[_0x8189('0x405','[Y2F')][_0x8189('0x708','4Yry')](_0x8189('0x36d','sGM5')+当前抖音关注数);ui[_0x8189('0x500','8^e]')][_0x8189('0x264','$mk^')](_0x8189('0x38e','#^@Q')+douyinNickName);});}function refreshPram(){threads[_0x8189('0x23c','z^$&')](function(){抖音关注点赞数(_0x8189('0x37a','70r8'));});}function MD5(_0x2f6cf1){var _0x2ea460=java['math'][_0x8189('0x9a6','5[L5')](0x1,java[_0x8189('0x52','#g0F')][_0x8189('0x6b0','5[L5')][_0x8189('0x37e','1()i')](_0x8189('0x626','V$Te'))[_0x8189('0x70a','O4vp')](java[_0x8189('0x9d8','V$Te')][_0x8189('0x6d6','[Y2F')](_0x2f6cf1)['getBytes']()))[_0x8189('0x3d8','*7Da')](0x10);while(_0x2ea460[_0x8189('0x855','N0vT')]<0x20)_0x2ea460='0'+_0x2ea460;return _0x2ea460;}function UA(){return device[_0x8189('0xb30','^)J3')]+_0x8189('0x1ae',']7uy')+ZZ_version+_0x8189('0xab2','nFhx')+device[_0x8189('0x5e2','4Yry')]+'x'+device[_0x8189('0x588','bkiR')];}function login(_0xf7923c,_0x5783a0){try{let _0x54789d='http://zcore.zqzan.com/app/account/login';let _0x410966=MD5(_0x5783a0+_0x8189('0x899','1()i'));return http[_0x8189('0x7c','nFhx')](_0x54789d,{'username':_0xf7923c,'loginpw':_0x410966},{'headers':{'token':'','User-Agent':UA()}})[_0x8189('0x16c','obd!')][_0x8189('0x9d','70r8')]();}catch(_0x25612d){return{'code':-0x1,'msg':_0x25612d[_0x8189('0x555','70r8')]()};}}function getUserInfo(_0xfb47c3){try{let _0x3d4861='http://zcore.zqzan.com/app/cash/wallet';return http[_0x8189('0xcc','70r8')](_0x3d4861,{'headers':{'token':_0xfb47c3,'User-Agent':UA()}})['body'][_0x8189('0x1a8',']7uy')]();}catch(_0x519884){return{'code':-0x1,'msg':_0x519884[_0x8189('0x753','BdX2')]()};}}function refreshZZ(){var _0x5a554e=storagesdZZ[_0x8189('0x503','zA$x')]('un','');if(_0x5a554e){threads[_0x8189('0x81c','xq7I')](function(){let _0x21217d=getUserInfo(storagesdZZ[_0x8189('0x15','*7Da')](_0x8189('0x7f8','zA$x'),null));let _0x46f30c=_0x8189('0x676','70r8');try{if(_0x21217d[_0x8189('0x62e','p0%o')]==0x0){var _0x39c53e=_0x21217d[_0x8189('0x295','z^$&')][_0x8189('0x24e','qg7$')]-_0x21217d[_0x8189('0x110','sGM5')][_0x8189('0x21a','8^e]')];_0x46f30c=_0x8189('0x60b','N0vT')+_0x21217d['data'][_0x8189('0x325','BdX2')]+_0x8189('0x1bd',']7uy')+_0x21217d[_0x8189('0x9f9','^)J3')][_0x8189('0x135','N0vT')]+_0x8189('0x496','z^$&')+_0x21217d[_0x8189('0x499','BdX2')][_0x8189('0x746',']uT$')]+_0x8189('0xab','*7Da')+_0x21217d['data'][_0x8189('0x853','(Gim')]+_0x8189('0x33d','E]aj')+_0x39c53e;}else if(_0x21217d[_0x8189('0xa39','E]aj')]!=-0x1){_0x46f30c=_0x21217d[_0x8189('0x64e',')#]u')];if(_0x21217d[_0x8189('0xac8','1()i')]==0x3ee){_0x46f30c=OutTimeTip;}}}catch(_0x1b303c){mylog(_0x1b303c);}storagesdZZ[_0x8189('0x581','It1b')](_0x8189('0xa9b','N0vT'),_0x46f30c+'');mylog(storagesdZZ[_0x8189('0xa55','$mk^')](_0x8189('0x4a0','bkiR'),''));});}}ui[_0x8189('0x252','#^@Q')][_0x8189('0x7ed','wgP%')](()=>{app[_0x8189('0x514','@9@0')](_0x8189('0xf','^)J3'));});ui[_0x8189('0x4f6','bkiR')]['on'](_0x8189('0x39f','*7Da'),function(){ui['autoService'][_0x8189('0x10c','KgQU')]=auto[_0x8189('0x81b',']uT$')]!=null;});ui[_0x8189('0x5ef',']7uy')]['on']('back_pressed',function(_0x5a98b3){if(Date['parse'](new Date())-timeStamp1<0x9c4){mylog(_0x8189('0x8f8','p0%o'));engines[_0x8189('0x3ca','&OXO')]();}else{mylog('再按一次退出程序');timeStamp1=Date[_0x8189('0x196','70r8')](new Date());_0x5a98b3['consumed']=!![];}});ui[_0x8189('0x9cc','bkiR')][_0x8189('0x4a6','obd!')](()=>{if(jbpp==_0x8189('0x706','70r8')){app[_0x8189('0x8fe','rDIx')](_0x8189('0x1ee','bkiR'));}else if(jbpp=='ylhf'){app[_0x8189('0x86d','XLjY')](_0x8189('0x883','iR28'));}else{app['openUrl'](ymhost+_0x8189('0x7e9','obd!'));}});ui[_0x8189('0x3e5','xq7I')][_0x8189('0x941','70r8')](()=>{oneClickCheck();mylog(_0x8189('0x166','(Gim'));});ui[_0x8189('0x633','V$Te')][_0x8189('0x3cf','[Y2F')](()=>{downloadApp_guding(_0x8189('0x748','rDIx'));});ui[_0x8189('0x12b',')#]u')]['click'](()=>{更新线程=threads[_0x8189('0x94e','qg7$')](function(){downloadScript();});});ui[_0x8189('0x9','zA$x')][_0x8189('0x4bf','KtCK')](()=>{storages[_0x8189('0x3e8','5eeV')]('lljv');storagesd=storages[_0x8189('0x8f','Jqb7')](_0x8189('0x19d','HlqN'));storages['remove']('lljv3');storagesd3=storages[_0x8189('0xea','ZmHf')](_0x8189('0xa53','HlqN'));toast(_0x8189('0x81','8^e]'));});ui['Re_Btn2']['click'](()=>{storages['remove'](_0x8189('0x64c','KgQU'));storagesd2=storages[_0x8189('0x793','xq7I')](_0x8189('0x16','[Y2F'));toast(_0x8189('0x6b6','KgQU'));});ui[_0x8189('0x462','#^@Q')][_0x8189('0x7ba','$mk^')](()=>{下载线程=threads[_0x8189('0xa7f','wgP%')](function(){try{if(jtqx){var _0x10c254=threads[_0x8189('0xae4','5eeV')](function(){var _0x49569e=textContains(_0x8189('0x660','V$Te'))[_0x8189('0x251','iR28')](0x1388);if(!_0x49569e)_0x49569e=textContains('允许')['findOne'](0x1388);if(_0x49569e){sleep(0xc8);pclick(_0x49569e[_0x8189('0xb3d','sGM5')]()[_0x8189('0xac5','8^e]')](),_0x49569e[_0x8189('0x657','1()i')]()[_0x8189('0x322','O4vp')]());}});if(requestScreenCapture()){jtqx=![];}else{mylog(_0x8189('0x6ce','Hrzg'));return![];}}}catch(_0x2d5d4a){return![];}mylog(_0x8189('0x928','qg7$'));yym=getAppName(currentPackage());一键下载();});});ui[_0x8189('0x8ee','(Gim')]['click'](()=>{app[_0x8189('0x9d7','70r8')](_0x8189('0x563','Jqb7'));});ui['猎豹清理']['click'](()=>{app[_0x8189('0x22d','(Gim')](ymhost+_0x8189('0xe5','KtCK'));});ui[_0x8189('0x7f5','O4vp')][_0x8189('0x7ed','wgP%')](()=>{try{threads[_0x8189('0x41a','9IRN')](function(){code_validation(ui[_0x8189('0x7b0','Jqb7')][_0x8189('0x1c2','It1b')]()[_0x8189('0x120','xq7I')]());});}catch(_0x5e0c9e){mylog(_0x8189('0xe8','70r8'));}});ui[_0x8189('0x3a2','z^$&')][_0x8189('0x2c6','5[L5')](()=>{downloadApp_guding('com.xiangzi.jukandian');});ui['Download2'][_0x8189('0x942','D9sr')](()=>{downloadApp_guding(_0x8189('0xb4','KgQU'));});ui['Download_dy'][_0x8189('0x4f4','@tbM')](()=>{app[_0x8189('0x5af','$mk^')]('http://abc.yimigw.com/apk/douyin116.html');});ui[_0x8189('0x20a','8^e]')][_0x8189('0x64d','bkiR')](()=>{downloadApp_guding(_0x8189('0x20f','^)J3'));});ui[_0x8189('0x3f6','4Yry')][_0x8189('0x242','iR28')](()=>{downloadApp_guding(_0x8189('0xaf3','zA$x'));});ui[_0x8189('0x9e3','4Yry')][_0x8189('0x5f7','9IRN')](()=>{downloadApp_guding(_0x8189('0x8cc','70r8'));});ui[_0x8189('0x6c','#g0F')]['click'](()=>{downloadApp_guding(_0x8189('0xdc','@9@0'));});ui[_0x8189('0x7ce','obd!')][_0x8189('0x172','8^e]')](()=>{app[_0x8189('0xb00','#^@Q')](_0x8189('0xb15','[Y2F'));});ui['Download13'][_0x8189('0x794','&OXO')](()=>{downloadApp_guding(_0x8189('0x2e1','^)J3'));});ui[_0x8189('0x50b','OXCB')][_0x8189('0x914','nFhx')](()=>{downloadApp_guding(_0x8189('0xb0','bkiR'));});ui[_0x8189('0x30e',')#]u')][_0x8189('0x4a5','6Yss')](()=>{downloadApp_guding(_0x8189('0x862','&OXO'));});ui[_0x8189('0x368','@9@0')][_0x8189('0x5f7','9IRN')](()=>{downloadApp_guding(_0x8189('0x2fa','5eeV'));});ui[_0x8189('0x734',']uT$')]['click'](()=>{downloadApp_guding(_0x8189('0x7eb','7H#U'));});ui[_0x8189('0x3ec','Jqb7')][_0x8189('0x8','@9@0')](()=>{downloadApp_guding(_0x8189('0xa07','p0%o'));});ui[_0x8189('0x34d','D9sr')][_0x8189('0x49f','HlqN')](()=>{downloadApp_guding(_0x8189('0x76b','4Yry'));});ui[_0x8189('0x1b7','wgP%')][_0x8189('0x89d','4Yry')](()=>{downloadApp_guding('com.yingliang.clicknews');});ui['Download24'][_0x8189('0x8','@9@0')](()=>{downloadApp_guding('com.youliao.topic');});ui['Download25']['click'](()=>{downloadApp_guding(_0x8189('0x28f','xq7I'));});ui[_0x8189('0x89e','8^e]')][_0x8189('0x941','70r8')](()=>{app[_0x8189('0xb13','BdX2')](_0x8189('0x22e','obd!'));});ui[_0x8189('0x94a','Hrzg')]['click'](()=>{downloadApp_guding(_0x8189('0x9d6','V$Te'));});ui[_0x8189('0x91d','$mk^')][_0x8189('0x914','nFhx')](()=>{downloadApp_guding('com.sljh.zqxsp');});ui['Download31']['click'](()=>{app['openUrl'](_0x8189('0x138','6Yss'));});ui[_0x8189('0x7cd','HlqN')][_0x8189('0x418','zA$x')](()=>{app['openUrl'](_0x8189('0x4b2','N0vT'));});ui[_0x8189('0x775','obd!')]['click'](()=>{app[_0x8189('0x189','bkiR')]('http://d.weikezhongzhi.wang/downapp.html');});ui[_0x8189('0x9f1','OXCB')]['click'](()=>{downloadApp_guding(_0x8189('0x88','XLjY'));});ui[_0x8189('0xa1',']uT$')][_0x8189('0x242','iR28')](()=>{downloadApp_guding(_0x8189('0x9b9','E]aj'));});ui[_0x8189('0x867','iR28')][_0x8189('0x3cf','[Y2F')](()=>{downloadApp_guding(_0x8189('0x2f2','obd!'));});ui[_0x8189('0x728','obd!')][_0x8189('0x49f','HlqN')](()=>{downloadApp_guding('com.kuaiyin.player');});ui['Download46'][_0x8189('0x2a6','ZmHf')](()=>{downloadApp_guding('com.dragon.read');});ui[_0x8189('0x7ac','KtCK')][_0x8189('0x794','&OXO')](()=>{app[_0x8189('0x1f2','V$Te')](_0x8189('0x9b','Hrzg'));});ui[_0x8189('0x477','O4vp')]['click'](()=>{downloadApp_guding(_0x8189('0x27b','1()i'));});ui[_0x8189('0x1d4','O4vp')][_0x8189('0x4dc','sGM5')](()=>{app[_0x8189('0x5af','$mk^')](_0x8189('0x83b','^)J3'));});ui[_0x8189('0x91e','D9sr')][_0x8189('0x942','D9sr')](()=>{downloadApp_guding(_0x8189('0x220','$mk^'));});ui[_0x8189('0xb3c','Jqb7')][_0x8189('0xa6d','z^$&')](()=>{downloadApp_guding(_0x8189('0x46d','qg7$'));});ui[_0x8189('0x5eb','rDIx')]['click'](()=>{downloadApp_guding(_0x8189('0x721','@tbM'));});ui[_0x8189('0x355','p0%o')][_0x8189('0x4bf','KtCK')](()=>{downloadApp_guding(_0x8189('0x658',']7uy'));});ui[_0x8189('0x14a','iR28')][_0x8189('0x39b','1()i')](()=>{downloadApp_guding(_0x8189('0x2d','8^e]'));});ui[_0x8189('0x5be','5[L5')]['click'](()=>{downloadApp_guding(_0x8189('0x14f','sGM5'));});ui[_0x8189('0x4ef','5eeV')][_0x8189('0x4bf','KtCK')](()=>{app[_0x8189('0x48d','5eeV')](_0x8189('0x533','9IRN'));});ui[_0x8189('0x60d','KgQU')][_0x8189('0x242','iR28')](()=>{app[_0x8189('0x9d7','70r8')](_0x8189('0x3eb','*7Da'));});ui['Download68']['click'](()=>{downloadApp_guding(_0x8189('0x6bd',')#]u'));});ui[_0x8189('0x4d0','KgQU')]['click'](()=>{app[_0x8189('0x5af','$mk^')]('http://qr35.cn/DmwKx7');});ui[_0x8189('0x143','sGM5')]['click'](()=>{downloadApp_guding(_0x8189('0x63d','9IRN'));});ui['Download73']['click'](()=>{downloadApp_guding(_0x8189('0x4ce','4Yry'));});ui[_0x8189('0x882','6Yss')][_0x8189('0x97d','xq7I')](()=>{app['openUrl'](ymhost+_0x8189('0x8d3','N0vT'));});ui[_0x8189('0x45f','xq7I')]['click'](()=>{downloadApp_guding(_0x8189('0x936','@9@0'));});ui[_0x8189('0x98e','rDIx')][_0x8189('0x16f','p0%o')](()=>{downloadApp_guding('com.video.yy');});ui[_0x8189('0x1c3','rDIx')][_0x8189('0x69c',']uT$')](()=>{downloadApp_guding(_0x8189('0x31e','7H#U'));});ui['Download79'][_0x8189('0x2a6','ZmHf')](()=>{downloadApp_guding(_0x8189('0xa2a','bkiR'));});ui[_0x8189('0x427','KgQU')][_0x8189('0x942','D9sr')](()=>{downloadApp_guding(_0x8189('0xa4d','iR28'));});ui[_0x8189('0x448','Jqb7')][_0x8189('0x4b9','(Gim')](()=>{downloadApp_guding(_0x8189('0xca','&OXO'));});ui[_0x8189('0xbd','#g0F')][_0x8189('0x941','70r8')](()=>{downloadApp_guding(_0x8189('0x434','D9sr'));});ui['Download84'][_0x8189('0x4df','^)J3')](()=>{downloadApp_guding(_0x8189('0x7a','KtCK'));});ui[_0x8189('0x13f','qg7$')]['click'](()=>{downloadApp_guding(_0x8189('0x1a3','V$Te'));});ui[_0x8189('0x548','@9@0')][_0x8189('0x5f7','9IRN')](()=>{downloadApp_guding(_0x8189('0x90c','5[L5'));});ui['Download87'][_0x8189('0x4a5','6Yss')](()=>{downloadApp_guding('com.meelive.ingkee');});ui[_0x8189('0x958','It1b')][_0x8189('0x949','JX6y')](()=>{app['openUrl'](_0x8189('0x395','1()i'));});ui[_0x8189('0x5ce','#g0F')][_0x8189('0x82a','KgQU')](()=>{if(当前包名==''){当前包名=currentPackage();storage[_0x8189('0x2e6','9IRN')](_0x8189('0x380',']7uy'),当前包名);}mylog(当前包名);if(checked&&auto[_0x8189('0x556','[Y2F')]==null){mylog(_0x8189('0x424','@9@0'));app[_0x8189('0x9c9','E]aj')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});return![];}if(runB){try{qxxc['interrupt']();}catch(_0x101542){}try{yhxc[_0x8189('0x8ca',')#]u')]();}catch(_0x4f5f48){}try{zxc[_0x8189('0x79e','KtCK')]();}catch(_0x34d5cb){}try{gb[_0x8189('0x8c9','$mk^')]();}catch(_0x2b3268){}runB=![];var _0x3829ae;监听停止();保存页面信息();var _0x4f2663=storage['get']('run94');updateConfig();if(_0x4f2663){var _0x58b5db=cookieManager[_0x8189('0x101','p0%o')](URL);if(!config[_0x8189('0x367','5eeV')]){if(!_0x58b5db||_0x58b5db[_0x8189('0x672','8^e]')](_0x8189('0x3b2','HlqN'))==-0x1){toast(_0x8189('0x12d','sGM5'));runB=!![];return![];}if(_0x58b5db){config[_0x8189('0x58b','6Yss')]=_0x58b5db;updateToken();}if(!config[_0x8189('0x58d','BdX2')]){toast(_0x8189('0x5f1','JX6y'));runB=!![];return![];}}if(!(config[_0x8189('0x5d','bkiR')]||config[_0x8189('0x4ae','obd!')]||config[_0x8189('0x8a0','XLjY')]||config[_0x8189('0x797','iR28')]||config[_0x8189('0x47f','ZmHf')]||config[_0x8189('0x79','6Yss')]||config[_0x8189('0x20e',']7uy')]||config[_0x8189('0x2f0','KtCK')]||config[_0x8189('0xad3','5[L5')])){toast('任务内部版未选择具体项');runB=!![];return![];}}if(ui[_0x8189('0x971','O4vp')][_0x8189('0x7cb',']uT$')]==!![]){包名=getPackageName(_0x8189('0x7d8','4Yry'));if(包名!=null){if(getPackageVersionName(包名)=='7.8.9'||getPackageVersionName(包名)==_0x8189('0x37f','KtCK')){}else{threads['start'](function(){alert('友情提示',_0x8189('0x27','qg7$'));});runB=!![];return![];}}else{threads[_0x8189('0xab7','@9@0')](function(){alert(_0x8189('0x133','O4vp'),_0x8189('0x618','wgP%'));});runB=!![];return![];}if(ui[_0x8189('0x50a','5[L5')][_0x8189('0x811','xq7I')]==![]&&ui['参与福袋'][_0x8189('0x383','sGM5')]==![]){alert('友情提示',_0x8189('0xac7','iR28'))[_0x8189('0x4ff','Hrzg')](()=>{});runB=!![];return![];}}AppAr=获取勾选APP();if(AppAr[_0x8189('0x34a','$mk^')]===0x0){if(storage[_0x8189('0xa76','E]aj')](_0x8189('0x46','z^$&'),![])){zxc=threads['start'](function(){信息注册码=storage[_0x8189('0x71','#g0F')](_0x8189('0x619','OXCB'),['']);注册码首次验证();mylog(_0x8189('0xb16','OXCB'));for(let _0x4644ad=0x0;_0x4644ad<storage['get'](_0x8189('0xa77','HlqN'),[0x1]);_0x4644ad++){if(storagesd[_0x8189('0x7ee','8^e]')](_0x8189('0x416','(Gim'),[0x0])<storage[_0x8189('0xa55','$mk^')](_0x8189('0x78e','Hrzg'),[0x1])){点击启动APP(_0x8189('0x4fa','wgP%'));wait(_0x8189('0x4bb','E]aj'),null,0x1e);descContains(_0x8189('0x2e4','obd!'))[_0x8189('0x5c0','*7Da')](0x4650);if(storage2['get'](_0x8189('0x4f',')#]u'),0x0)==0x0){抖音上传作品2();}else{抖音上传作品();}}}});}else if(storage[_0x8189('0x474','Jqb7')](_0x8189('0x4e7','OXCB'),[![]])){var _0x59ed0d=!![];var _0x5b2b8f,_0x2a6877,_0x2d85d2;mylog(_0x8189('0xa47','xq7I'));zxc=threads[_0x8189('0xa0b','sGM5')](function(){信息注册码=storage['get'](_0x8189('0x134','N0vT'),['']);注册码首次验证();gb=threads[_0x8189('0x36','zA$x')](function(){while(!![]){控件点击2(text('继续播放')[_0x8189('0x8f5','XLjY')](0x0,hg*0.4,wt,hg*0.8));控件点击2(text(_0x8189('0x911','6Yss')));clickSelf(text('我知道了'));sleep(0x5dc);}});try{while(!![]){_0x5b2b8f=new Date();_0x2a6877=_0x5b2b8f[_0x8189('0x538','O4vp')]()*0x3c+_0x5b2b8f[_0x8189('0x283','p0%o')]();_0x2d85d2=storages[_0x8189('0xa33','5[L5')]('DSP养号时间');if(_0x2d85d2[_0x8189('0x17','OXCB')](_0x8189('0x5e1','rDIx'))==undefined){_0x2d85d2[_0x8189('0x562','p0%o')](_0x8189('0x6bf','6Yss'),_0x2a6877);}if(_0x59ed0d||_0x2a6877-_0x2d85d2[_0x8189('0x17','OXCB')]('DSP养号时间')>=storage[_0x8189('0x8f9','nFhx')](_0x8189('0x571','It1b'),[0x15e])){_0x59ed0d=![];_0x2d85d2[_0x8189('0xa58','Hrzg')](_0x8189('0x77e','OXCB'),_0x2a6877);clearMt();dyzbgk();dyyh();ksyh();clearMt();}else if(_0x2a6877-_0x2d85d2['get'](_0x8189('0x80e','7H#U'))<0x0){_0x2d85d2['put'](_0x8189('0x55a','nFhx'),_0x2a6877);}sleep(0x2710);mylog('休息中');}}catch(_0x331ee9){}try{DYXC2['interrupt']();}catch(_0x1c21fd){}});}else{toast(_0x8189('0x88c',']7uy'));}runB=!![];}else{gb=threads['start'](function(){while(!![]){sleep(0x1388);clickSelf(text('等待')[_0x8189('0x77b','qg7$')](0x0,hg*0.75,wt*0.6,hg));}});if(ui[_0x8189('0x52f','E]aj')]['isChecked']()){if(storage2[_0x8189('0x503','zA$x')](_0x8189('0x19b','#g0F'),0x0)==0x0){_0x3829ae=获取阅读APP();if(_0x3829ae[_0x8189('0x1b4','@tbM')]===0x0){toast(_0x8189('0x4bd','It1b')+阅读平台+_0x8189('0x65c','HlqN'));runB=!![];}else{zxc=threads['start'](function(){main();});}}else if(storage2[_0x8189('0x7f3','&OXO')](_0x8189('0x525','D9sr'),0x0)==0x1){_0x3829ae=获取任务APP();if(_0x3829ae['length']===0x0){toast('固定时段运行的任务平台没有勾选APP');runB=!![];}else{zxc=threads[_0x8189('0x7d1','O4vp')](function(){main();});}}else{_0x3829ae=获取其他APP();if(_0x3829ae[_0x8189('0x1c0','@9@0')]===0x0){toast(_0x8189('0x200','&OXO'));runB=!![];}else{zxc=threads['start'](function(){main();});}}}else{zxc=threads[_0x8189('0x890','KgQU')](function(){main();});}}}else{toast(_0x8189('0x6cd','HlqN'));}});function 夜间休息(){if(ui[_0x8189('0x55d','obd!')][_0x8189('0x531','nFhx')]()){var _0x4f1d16=new Date();var _0x38965b=_0x4f1d16[_0x8189('0x235','HlqN')]()*0x3c+_0x4f1d16[_0x8189('0x87','qg7$')]();var _0x2c66d4=(ui[_0x8189('0x4a2','*7Da')][_0x8189('0x17b','Hrzg')]()+'')*0x3c;var _0xef3205=(ui['yjxx2'][_0x8189('0x6f9',')#]u')]()+'')*0x3c;if(_0x2c66d4<_0x38965b&&_0x38965b<_0xef3205){深度清理();mylog('夜间休息开始');toast(_0x8189('0x282','&OXO'));while(_0x38965b<_0xef3205){sleep(0x4e20);var _0x4f1d16=new Date();var _0x38965b=_0x4f1d16[_0x8189('0x4b8','8^e]')]()*0x3c+_0x4f1d16[_0x8189('0x515','5[L5')]();}sleep(0x7d0);device['wakeUpIfNeeded']();sleep(0x7d0);}}}function 去除数组(_0x3fd33a,_0x402eaa){ay=new Array();var _0x406954=!![];_0x3fd33a[_0x8189('0x964','E]aj')](_0x1d9404=>{_0x402eaa[_0x8189('0x893','iR28')](_0x466de6=>{if(_0x466de6[0x0][_0x8189('0x70c',']7uy')](_0x1d9404[0x0])>-0x1){_0x406954=![];}});if(_0x406954){ay[ay[_0x8189('0x782','D9sr')]]=_0x1d9404;}_0x406954=!![];});return ay;}function 运行特定时段平台(_0x560f66,_0x494809,_0x2d4dbf,_0x2ac3a3){if(_0x560f66){var _0x1751ab=new Date();var _0x29020e=_0x1751ab[_0x8189('0x5b8','9IRN')]()*0x3c+_0x1751ab['getMinutes']();var _0x500066=(_0x494809+'')*0x3c;var _0x2aa9da=(_0x2d4dbf+'')*0x3c;var _0x14cc2c;if(_0x500066<=_0x29020e&&_0x29020e<_0x2aa9da){if(_0x2ac3a3==0x0){mylog(_0x8189('0x10','N0vT')+阅读平台);AppAr=获取阅读APP();}else if(_0x2ac3a3==0x1){mylog(_0x8189('0x523','wgP%'));AppAr=获取任务APP();}else if(_0x2ac3a3==0x2){mylog(_0x8189('0x4fe','#^@Q'));AppAr=获取其他APP();}else{AppAr=获取阅读APP();}var _0x2487b7=storages[_0x8189('0x6b7','XLjY')]('wzjl');var _0x314073=storages['create'](_0x8189('0x9fb','1()i'));var _0x5784ae;if(_0x2487b7[_0x8189('0x503','zA$x')](_0x8189('0x926','xq7I'))==undefined){_0x2487b7[_0x8189('0x68b','5[L5')](_0x8189('0x6b4','6Yss'),0x0);}while(_0x29020e<_0x2aa9da){var _0x2487b7=storages['create'](_0x8189('0xb18','[Y2F'));_0x14cc2c=![];try{for(var _0x160b4e=0x0;_0x160b4e<AppAr['length'];_0x160b4e++){if(_0x2487b7[_0x8189('0xc4','5[L5')](_0x8189('0x7af','1()i'))<_0x160b4e+0x1&&注册码验证){WXYHmain();DSPmain();var _0x2487b7=storages[_0x8189('0x5b6','70r8')]('wzjl');_0x2487b7[_0x8189('0x4cb','8^e]')]('wzjl',_0x160b4e+0x1);不验证设定();夜间休息();新的一天();取消关注();sleep(0x7d0);_0x314073[_0x8189('0x5a8','HlqN')](_0x8189('0x9d4','D9sr'),AppAr[_0x160b4e][0x0]);if(运行APP(AppAr[_0x160b4e][0x0])){运行脚本();_0x5784ae=require(脚本地址[_0x8189('0x6ba',']uT$')](_0x8189('0xf2','9IRN'),_0x8189('0x27f','obd!')));_0x5784ae[_0x8189('0x3fe',']7uy')]();sleep(0x5dc);clearMt();}}else if(注册码验证===![]){mylog(_0x8189('0x9c5','6Yss'));sleep(0x3a98);注册码后续验证();}}}catch(_0x1f235c){mylog(_0x1f235c);try{var _0x1751ab=new Date();mzdwz=0x0;mzdwzhd=0x0;_0x5784ae=null;clearMt();}catch(_0x4089f2){}}try{_0x5784ae=null;if(_0x2487b7['get'](_0x8189('0x926','xq7I'))>=AppAr[_0x8189('0x3c4',']uT$')]){_0x14cc2c=!![];}if(_0x14cc2c){_0x2487b7[_0x8189('0x18','N0vT')]('wzjl',0x0);mylog(_0x8189('0x29c','E]aj'));}}catch(_0x56ded8){mylog(_0x8189('0x2b6','&OXO'));}var _0x1751ab=new Date();var _0x29020e=_0x1751ab[_0x8189('0x2de','V$Te')]()*0x3c+_0x1751ab[_0x8189('0x154','sGM5')]();}AppAr=去除数组(获取勾选APP(),AppAr);mylog(_0x8189('0x99b',']7uy')+阅读平台);}}}function 相册清理(){if(点击启动APP('相册')){sleep(0xbb8);var _0x465525=id(_0x8189('0x5d0','Jqb7'))[_0x8189('0x288','HlqN')](0x1388);if(_0x465525){sleep(0x5dc);click(_0x465525[_0x8189('0xb12','BdX2')]()[_0x8189('0x7b7','7H#U')](),_0x465525[_0x8189('0x92b','qg7$')]()['centerY']());sleep(0xbb8);var _0x198f96=text(_0x8189('0xb1a','&OXO'))[_0x8189('0x994',')#]u')](0x1388);if(_0x198f96){sleep(0x5dc);click(_0x198f96[_0x8189('0xa9e','It1b')]()[_0x8189('0xef','KtCK')](),_0x198f96[_0x8189('0x565','8^e]')]()[_0x8189('0x3ab','1()i')]());sleep(0xbb8);var _0x338495=text('立即清理')[_0x8189('0x784','zA$x')](0x0,hg*0.5,wt,hg*0.69)[_0x8189('0x5c0','*7Da')](0x7530);if(_0x338495){sleep(0x5dc);click(_0x338495['bounds']()[_0x8189('0x421',']7uy')](),_0x338495[_0x8189('0x180','9IRN')]()['centerY']());sleep(0xbb8);var _0x3a4bbf=text(_0x8189('0x6be','[Y2F'))[_0x8189('0xff','sGM5')](0x4e20);if(_0x3a4bbf){sleep(0x5dc);click(_0x3a4bbf[_0x8189('0x12c','E]aj')]()[_0x8189('0xef','KtCK')](),_0x3a4bbf[_0x8189('0xd2','Hrzg')]()[_0x8189('0x402',']7uy')]());sleep(0xbb8);var _0x3da89c=id(_0x8189('0x2d6','&OXO'))[_0x8189('0x439','N0vT')](0x4e20);if(_0x3da89c){sleep(0x5dc);click(_0x3da89c[_0x8189('0x4cc','nFhx')]()[_0x8189('0x79d','O4vp')](),_0x3da89c[_0x8189('0x475','KgQU')]()['centerY']());sleep(0xbb8);}}}}}}clearMt();}function 深度清理(){if(深度清理storages[_0x8189('0x71','#g0F')](_0x8189('0xb37','8^e]'),[![]])){mylog('开始深度清理垃圾');if(点击启动APP(_0x8189('0x948','&OXO'))){sleep(0xbb8);var _0x42cacb=textContains(_0x8189('0xa0e','1()i'))[_0x8189('0x1e1','HlqN')]();if(_0x42cacb){click(_0x42cacb['bounds']()[_0x8189('0xef','KtCK')](),_0x42cacb[_0x8189('0xadf','5eeV')]()[_0x8189('0x5ac','HlqN')]());}for(let _0x96f4c2=0x0;_0x96f4c2<0x14;_0x96f4c2++){var _0x23d67b=textContains('清理选中垃圾')['findOnce']();if(_0x23d67b){click(_0x23d67b[_0x8189('0x9d1','z^$&')]()['centerX'](),_0x23d67b[_0x8189('0x159','xq7I')]()[_0x8189('0x5ac','HlqN')]());sleep(0x7d0);}if(text(_0x8189('0x5f0','KgQU'))[_0x8189('0x1d0','It1b')]()){break;}sleep(0x1388);}}else{点击启动APP(_0x8189('0x490','JX6y'));var _0x1196ac=textContains('立即体验')[_0x8189('0x288','HlqN')](0xbb8);if(_0x1196ac){click(_0x1196ac[_0x8189('0x9d1','z^$&')]()[_0x8189('0x260','BdX2')](),_0x1196ac[_0x8189('0x9d1','z^$&')]()[_0x8189('0x32b','ZmHf')]());}var _0x44511c=textContains(_0x8189('0x9f0','1()i'))[_0x8189('0x2f5','&OXO')](0xbb8);if(_0x44511c){click(_0x44511c['bounds']()[_0x8189('0x818','9IRN')](),_0x44511c[_0x8189('0x40b','4Yry')]()[_0x8189('0x6db','It1b')]());}var _0x3c061e=textContains('马上授权')[_0x8189('0x9aa','obd!')](0xbb8);if(_0x3c061e){click(_0x3c061e[_0x8189('0x180','9IRN')]()[_0x8189('0x7b7','7H#U')](),_0x3c061e[_0x8189('0xadf','5eeV')]()['centerY']());}var _0x20d7d0=0x0;while(_0x20d7d0<0x3){var _0x303b70=textContains(_0x8189('0x17e','XLjY'))['findOne'](0x3e8);if(_0x303b70){click(_0x303b70[_0x8189('0x5a7','N0vT')]()[_0x8189('0x1a6','6Yss')](),_0x303b70[_0x8189('0x79c','70r8')]()[_0x8189('0x4da','E]aj')]());}_0x20d7d0++;}var _0x20d7d0=0x0;while(_0x20d7d0<0x3){var _0x3e527d=textContains('允许')[_0x8189('0x47b','@tbM')](!![])[_0x8189('0x3f3','Jqb7')](0x3e8);if(_0x3e527d){click(_0x3e527d['bounds']()[_0x8189('0x1d','E]aj')](),_0x3e527d[_0x8189('0x8c3','&OXO')]()[_0x8189('0x6a8','5eeV')]());}_0x20d7d0++;}for(let _0x4113d2=0x0;_0x4113d2<0x14;_0x4113d2++){var _0x23d67b=textContains(_0x8189('0x106','KtCK'))[_0x8189('0x2a9','V$Te')]();if(_0x23d67b){click(_0x23d67b[_0x8189('0x935','@tbM')]()[_0x8189('0x65d','#g0F')](),_0x23d67b['bounds']()[_0x8189('0x5ad','Jqb7')]());sleep(0x7d0);}if(textContains(_0x8189('0x1cf','O4vp'))[_0x8189('0x4c4',')#]u')]()){break;}if(textContains(_0x8189('0x22c','wgP%'))['exists']()){break;}sleep(0x1388);}}mylog(_0x8189('0x125','#g0F'));clearMt();}}function main(){信息注册码=storage[_0x8189('0x2a5','ZmHf')](_0x8189('0x95e',']7uy'),['']);var _0x1e4696=threads[_0x8189('0x834','bkiR')]();qxxc=threads[_0x8189('0x16d','4Yry')](function(){try{_0x1e4696[_0x8189('0x29f','JX6y')](![]);if(jtqx){var _0x35b7b2=threads[_0x8189('0x10a','@tbM')](function(){var _0x583826=textContains('立即开始')[_0x8189('0x69','nFhx')](0xbb8);if(!_0x583826)_0x583826=textContains('允许')[_0x8189('0x1b0','9IRN')](0xbb8);if(_0x583826){toast(_0x8189('0x877','$mk^'));sleep(0xc8);pclick(_0x583826[_0x8189('0x79c','70r8')]()[_0x8189('0x93e','Hrzg')](),_0x583826[_0x8189('0xb2',']7uy')]()[_0x8189('0xc2','KgQU')]());}});if(requestScreenCapture()){jtqx=![];}else{toast(_0x8189('0x253','#^@Q'));exit();}try{_0x35b7b2[_0x8189('0x6dc','7H#U')]();}catch(_0x50cb05){}}}catch(_0x8b13ef){}for(let _0x277701=0x0;_0x277701<0x5;_0x277701++){try{_0x1e4696['setAndNotify'](!![]);captureScreen();}catch(_0x54a568){sleep(0x3e8);}}});if(_0x1e4696[_0x8189('0x3','p0%o')]()){toast(_0x8189('0x2ab',')#]u'));}else{jtqx=!![];runB=!![];toast(_0x8189('0x617','nFhx'));return!![];}注册码首次验证();sleep(0x5dc);recents();sleep(0x9c4);var _0x140f78=查找控件(Array(id(_0x8189('0x507','BdX2')),idContains(_0x8189('0x65b',')#]u'))),0x1)[_0x8189('0xa7b','1()i')]();if(!_0x140f78)_0x140f78=查找控件(Array(id(_0x8189('0x47','$mk^')),idContains(_0x8189('0x9c3','@tbM'))),0x2)[_0x8189('0x1ca','5[L5')]();if(!_0x140f78)_0x140f78=textContains(_0x8189('0x646','qg7$'))['findOne'](0x3e8);if(!_0x140f78)_0x140f78=descContains(_0x8189('0x573','^)J3'))[_0x8189('0x251','iR28')](0x3e8);if(_0x140f78){sleep(0x5dc);pclick(_0x140f78['bounds']()['centerX'](),_0x140f78[_0x8189('0xb12','BdX2')]()[_0x8189('0x46c','&OXO')]());}sleep(0x9c4);back();downloadScript();my_console();深度清理();工作();}function downloadScript1(_0x47cce8){try{var _0x3bbd30=http['get'](_0x47cce8)[_0x8189('0x391','p0%o')][_0x8189('0x94d','6Yss')]();var _0x38e9ce=new Date();var _0x5d004e=_0x8189('0x689','8^e]')+Math[_0x8189('0x25c','It1b')](_0x38e9ce/0x3e8/0x3c)+_0x8189('0x73','V$Te');files[_0x8189('0x52c','ZmHf')](_0x5d004e);files[_0x8189('0x2d2','KgQU')](_0x5d004e,_0x3bbd30);脚本地址[_0x8189('0x562','p0%o')](_0x8189('0xf2','9IRN'),_0x5d004e);}catch(_0x375ca4){mylog(_0x375ca4);}}function 运行脚本(){if(files[_0x8189('0x345','nFhx')](脚本地址[_0x8189('0x7f4','JX6y')](_0x8189('0x3b5','@tbM'),_0x8189('0x522',']uT$')))){}else{downloadScript();}}function downloadScript(){try{var _0x255c11=ymhost+_0x8189('0xb41','JX6y')+LeanCloudConfig[_0x8189('0x909','ZmHf')]+_0x8189('0x83a','&OXO')+LeanCloudConfig[_0x8189('0x3e4','KgQU')];var _0xe2b3bc=encodeURI(_0x255c11);var _0x49bff5=http[_0x8189('0x6a','[Y2F')](_0xe2b3bc,{'headers':{'Content-Type':_0x8189('0x953','O4vp')}})[_0x8189('0x929','nFhx')][_0x8189('0x621','(Gim')]();if(!files[_0x8189('0x1d0','It1b')](脚本地址[_0x8189('0x5a6','#^@Q')](_0x8189('0x11f','OXCB'),_0x8189('0x6f4','KgQU')))||_0x49bff5[_0x8189('0xae1','obd!')]!==jbgxsj[_0x8189('0x2a5','ZmHf')]('dojbgxsj','')){mylog(_0x8189('0xa67','nFhx'));files['removeDir'](脚本地址['get']('jbdz','/sdcard/cloud/'));downloadScript1(ymhost+_0x8189('0x5f4','6Yss')+LeanCloudConfig[_0x8189('0x312','#g0F')]+_0x8189('0x4f5','ZmHf')+LeanCloudConfig[_0x8189('0x9f2','@9@0')]);jbgxsj[_0x8189('0x4a','z^$&')]('dojbgxsj',_0x49bff5[_0x8189('0xae1','obd!')]);}else{mylog(_0x8189('0x6cc','zA$x'));}}catch(_0x39008b){mylog(_0x8189('0x1eb',']7uy'));files[_0x8189('0x217','70r8')]('/sdcard/日志.txt','\x0a'+_0x39008b);}}function 工作(){var _0x994186=storages[_0x8189('0x716','5eeV')](_0x8189('0x9ad','E]aj'));var _0x56c88d=storages['create'](_0x8189('0x5b4','70r8'));var _0x2d2f7b;if(_0x994186['get'](_0x8189('0x40','&OXO'))==undefined){_0x994186[_0x8189('0x203',']uT$')](_0x8189('0x121','7H#U'),0x0);}while(!![]){重置记录flag=![];try{for(var _0xbf7865=0x0;_0xbf7865<AppAr[_0x8189('0x6fb','KtCK')];_0xbf7865++){if(_0x994186[_0x8189('0x77','z^$&')](_0x8189('0x832','sGM5'))<_0xbf7865+0x1&&注册码验证){WXYHmain();DSPmain();var _0x994186=storages[_0x8189('0x9ed','wgP%')]('wzjl');_0x994186[_0x8189('0xf6','#^@Q')](_0x8189('0x530','zA$x'),_0xbf7865+0x1);不验证设定();夜间休息();新的一天();取消关注();运行特定时段平台(ui[_0x8189('0x261','Hrzg')][_0x8189('0x798','wgP%')](),ui[_0x8189('0x2d7','Hrzg')][_0x8189('0xb6','BdX2')](),ui['tdsd2']['getText'](),storage2[_0x8189('0x2c9','p0%o')]('tdsdxz',0x0));运行特定时段平台(ui[_0x8189('0x528','p0%o')]['isChecked'](),ui[_0x8189('0x2bc','#g0F')]['getText'](),ui[_0x8189('0x9c6','zA$x')]['getText'](),storage2[_0x8189('0x4eb','V$Te')]('dsdt2xz',0x0));sleep(0x7d0);_0x56c88d[_0x8189('0x199',')#]u')](_0x8189('0xa4','zA$x'),AppAr[_0xbf7865][0x0]);if(运行APP(AppAr[_0xbf7865][0x0])){运行脚本();if(AppAr[_0xbf7865][0x0]==_0x8189('0x24a','qg7$')){$58转阅任务();}else{_0x2d2f7b=require(脚本地址[_0x8189('0x6ba',']uT$')](_0x8189('0x381','nFhx'),_0x8189('0x81f','*7Da')));_0x2d2f7b[_0x8189('0x4f7','&OXO')]();}sleep(0x5dc);mylog(AppAr[_0xbf7865][0x0]);clearMt();}}else if(注册码验证===![]){mylog(_0x8189('0x90e',')#]u'));sleep(0x3a98);注册码后续验证();}}}catch(_0x30064a){mylog(_0x30064a);try{var _0x41b3b3=new Date();mzdwz=0x0;mzdwzhd=0x0;_0x2d2f7b=null;clearMt();}catch(_0x47831b){}}try{_0x2d2f7b=null;if(_0x994186['get'](_0x8189('0x9ad','E]aj'))>=AppAr[_0x8189('0xaa5','XLjY')]){重置记录flag=!![];}if(重置记录flag){_0x994186[_0x8189('0x98c','6Yss')](_0x8189('0x9ad','E]aj'),0x0);mylog(_0x8189('0x215','OXCB'));}}catch(_0x2b0890){}}}function qlsd(){var _0x34e5b3=files[_0x8189('0x171','iR28')](_0x8189('0x6d','@9@0'));for(let _0x306cb7=0x0;_0x306cb7<_0x34e5b3['length'];_0x306cb7++){if(_0x8189('0x471','N0vT')!==_0x34e5b3[_0x306cb7]&&'脚本'!==_0x34e5b3[_0x306cb7]){files[_0x8189('0x24f','@9@0')](_0x8189('0x659','BdX2')+_0x34e5b3[_0x306cb7]);}}mylog(_0x8189('0x70','70r8'));}function 新的一天(){var _0x46cbe3=new Date();var _0x1b0c65=_0x46cbe3[_0x8189('0x91a',')#]u')]()[_0x8189('0xa96','z^$&')]();if(_0x1b0c65!=storage[_0x8189('0xa6f',')#]u')]('mday',[-0x1])){取消关注时间=random(0xc,0x14);mylog('新的一天');storages[_0x8189('0xac1','HlqN')](_0x8189('0xb1','6Yss'));storages[_0x8189('0x891','XLjY')](_0x8189('0x9a4','N0vT'));storagesd=storages[_0x8189('0x353','nFhx')](_0x8189('0x1db','#^@Q'));storagesd3=storages[_0x8189('0xac','p0%o')](_0x8189('0x80b','It1b'));storage[_0x8189('0xf6','#^@Q')](_0x8189('0xaca','7H#U'),_0x1b0c65);if(清理内存storages[_0x8189('0x57e','1()i')](_0x8189('0x13b','6Yss'),[![]])){qlsd();}if(scyx){scyx=![];}else{downloadScript();}}}var chatContent=['上了没','上了','我在','说话','在干吗呢','vaga','a','你个大变态',_0x8189('0x197','sGM5'),_0x8189('0x191','XLjY'),_0x8189('0x2e','6Yss'),_0x8189('0x65f','nFhx'),_0x8189('0x46f','9IRN'),_0x8189('0xa7','bkiR'),_0x8189('0x409',']7uy'),_0x8189('0x736','JX6y'),'也不行',_0x8189('0x691','bkiR'),_0x8189('0x38','nFhx'),_0x8189('0x683','qg7$'),_0x8189('0x2dd','z^$&'),_0x8189('0x868','1()i'),_0x8189('0x126','iR28'),_0x8189('0x2df','7H#U'),_0x8189('0x422','z^$&'),_0x8189('0x5bf',')#]u'),'切',_0x8189('0x335','6Yss'),_0x8189('0x611','obd!'),_0x8189('0xb5','xq7I'),'样',_0x8189('0x7a0','8^e]'),'hi','hi','en',_0x8189('0x875',']uT$'),'我的档案好象在你那',_0x8189('0x828','5[L5'),'哦',_0x8189('0x348','D9sr'),_0x8189('0xa1e','8^e]'),'切',_0x8189('0x408','Jqb7'),_0x8189('0x3b4','It1b'),'怎么',_0x8189('0xb4d','1()i'),_0x8189('0x38d','XLjY'),_0x8189('0x389','KgQU'),_0x8189('0x873','(Gim'),_0x8189('0xa1c',')#]u'),_0x8189('0x546','5eeV'),'有点人生步入正轨的意思',_0x8189('0x930','8^e]'),'hellow','好','在哪混现在',_0x8189('0x620','xq7I'),_0x8189('0x173','nFhx'),'还能在哪',_0x8189('0x13','70r8'),_0x8189('0x59f','O4vp'),'都没','你呢','我已申请离职了','哦','那现在已经离了呗',_0x8189('0x75a','OXCB'),'切',_0x8189('0x9cd','5[L5'),_0x8189('0xab9','KgQU'),_0x8189('0x7fb','qg7$'),'哦',_0x8189('0x508','5[L5'),_0x8189('0x8c6','E]aj'),'你呢',_0x8189('0x76a','7H#U'),_0x8189('0xa8e','rDIx'),_0x8189('0x5f3','^)J3'),_0x8189('0x293','It1b'),_0x8189('0x489','8^e]'),'不是','哦',_0x8189('0x7e0','5[L5'),'哦','不聊了，我要和我妈出去一下','好',_0x8189('0x6ec','7H#U'),'88','88',_0x8189('0x82c','O4vp'),_0x8189('0x3f8','8^e]'),_0x8189('0x351','4Yry'),'在',_0x8189('0x362','70r8'),'在',_0x8189('0xb1d','rDIx'),_0x8189('0x5f9','&OXO'),_0x8189('0x6ab','wgP%'),_0x8189('0xae0','O4vp'),'无不无聊呀?','不完',_0x8189('0x591','HlqN'),'家里上网了吗?','上了',_0x8189('0xcf','#g0F'),'打的太烂',_0x8189('0x233','#^@Q'),'4300',_0x8189('0x8b9','5eeV'),'不',_0x8189('0x42a','OXCB'),'不玩游戏可惜了',_0x8189('0xa1d','rDIx'),_0x8189('0x786',')#]u'),'恩',_0x8189('0x85b','#g0F'),_0x8189('0x72e','KgQU'),'上','哦了',_0x8189('0x34c','70r8'),'好啊','好啊',_0x8189('0xae8','@tbM'),'闲着',_0x8189('0x97','@9@0'),_0x8189('0x1a9','^)J3'),_0x8189('0x23f','[Y2F'),_0x8189('0x1e','^)J3'),_0x8189('0x844','iR28'),_0x8189('0x5e7','Hrzg'),_0x8189('0x129','#g0F'),_0x8189('0x84c','xq7I'),_0x8189('0x615','9IRN'),_0x8189('0x703','70r8'),_0x8189('0x5cd','7H#U'),'恩','好玩',_0x8189('0xa6c','KgQU'),_0x8189('0xb05','sGM5'),'点卡那么贵你还说用钱少?怎么个少法?','上的少，用的就少百','要不咱俩玩奇迹世界？？',_0x8189('0x50e','1()i'),_0x8189('0x687','obd!'),'什么都能玩','我玩那个不行','换个','行',_0x8189('0x38c','Jqb7'),_0x8189('0xa7a','JX6y'),_0x8189('0x13d','Hrzg'),'不忙',_0x8189('0x860','*7Da'),_0x8189('0xa49','[Y2F'),_0x8189('0x579','BdX2'),_0x8189('0x8c4','BdX2'),'恩，不干了',_0x8189('0xeb','N0vT'),'恩',_0x8189('0x9b2','[Y2F'),_0x8189('0x59c','(Gim'),'是啊',_0x8189('0x25d','^)J3'),_0x8189('0x303',')#]u'),_0x8189('0xb28','iR28'),'你想找个什么样的活呀?',_0x8189('0x829','6Yss'),_0x8189('0x45d','KtCK'),_0x8189('0x80f','$mk^'),_0x8189('0x53b','p0%o'),'恩',_0x8189('0x87f','V$Te'),_0x8189('0x2dc','E]aj'),'好',_0x8189('0x157','sGM5'),_0x8189('0x20','#^@Q'),'谢拉',_0x8189('0x589','sGM5'),'好',_0x8189('0x270','bkiR'),'高呀','不过我现在有一个在等回复',_0x8189('0x306','Hrzg'),'恩',_0x8189('0x3db','(Gim'),_0x8189('0xa3a','[Y2F'),'反正你现在有的是时间',_0x8189('0x8ae','iR28'),'没问题','你上去查查看有没有你愿意玩的',_0x8189('0x82b','9IRN'),_0x8189('0x81e','nFhx'),'我要是开始玩什么的话',_0x8189('0x4e2','wgP%'),'好','我现在在玩斗地主',_0x8189('0x66f','70r8'),'',_0x8189('0x69e','obd!'),_0x8189('0x76c','1()i'),'没办法啊','是不是招客招多了伤风了',_0x8189('0x63a','KgQU'),_0x8189('0x9e8','ZmHf'),_0x8189('0xfe','nFhx'),'晕',_0x8189('0xd9',']uT$'),_0x8189('0x169','9IRN'),_0x8189('0x132','O4vp'),_0x8189('0xa72','5eeV'),_0x8189('0x5d6','[Y2F'),'切',_0x8189('0x7',']7uy'),_0x8189('0x35c','(Gim'),_0x8189('0x59','z^$&'),_0x8189('0x16a',')#]u'),_0x8189('0x0','It1b'),'哦',_0x8189('0x841','^)J3'),'哦',_0x8189('0x8d9','$mk^'),_0x8189('0xad6','xq7I'),_0x8189('0x278','nFhx'),'小样','看看精彩不','恩那',_0x8189('0x2ed','&OXO'),'我怕被通缉啊',_0x8189('0x29e',']7uy'),_0x8189('0xaec','*7Da'),'没有我下班早多了吧',_0x8189('0x2f8','@9@0'),_0x8189('0x916','[Y2F'),_0x8189('0x95c','bkiR'),_0x8189('0x39e','BdX2'),'谢谢','下班拉小丫，动作厅快啊',_0x8189('0xb23','V$Te'),'我家离的近',_0x8189('0x231','5eeV'),_0x8189('0x314','HlqN'),_0x8189('0x7f7','$mk^'),'滚',_0x8189('0x2c5','ZmHf'),_0x8189('0x3a3','D9sr'),'是啊',_0x8189('0x1b9','4Yry'),_0x8189('0x64b','[Y2F'),_0x8189('0x13a','8^e]'),'晕',_0x8189('0x343',']uT$'),_0x8189('0x714','OXCB'),_0x8189('0x807','$mk^'),_0x8189('0x6b9','Jqb7'),_0x8189('0x28e','bkiR'),_0x8189('0x73a','@9@0'),_0x8189('0x2','@tbM'),_0x8189('0xad0','V$Te'),_0x8189('0x310','Jqb7'),_0x8189('0x74d','obd!'),_0x8189('0xaac','E]aj'),_0x8189('0x36a','7H#U'),'小嫂','恩那',_0x8189('0x285','[Y2F'),_0x8189('0x4b3','1()i'),_0x8189('0x610','HlqN'),_0x8189('0xb02','5[L5'),_0x8189('0x511','ZmHf'),_0x8189('0xa28','*7Da'),_0x8189('0x631','p0%o'),_0x8189('0x630','7H#U'),'滚滚滚你怎么不去死啊',_0x8189('0x755','Hrzg'),'呵呵','谁？？',_0x8189('0xab5','HlqN'),'说名字','少爷？','？',_0x8189('0xb49','9IRN'),_0x8189('0xabf','N0vT'),_0x8189('0x4b1',')#]u'),_0x8189('0xac2','wgP%'),'靠','就你会靠啊，我也会，靠',_0x8189('0x2a','^)J3'),_0x8189('0x825','iR28'),_0x8189('0x843','iR28'),'',_0x8189('0x155','bkiR'),_0x8189('0x95b','O4vp'),_0x8189('0x21f','O4vp'),_0x8189('0x815','70r8'),_0x8189('0x861','@tbM'),_0x8189('0x4af','bkiR'),_0x8189('0x3d1','*7Da'),_0x8189('0x466','6Yss'),_0x8189('0x7c1','E]aj'),'要么进黑名单',_0x8189('0x286','7H#U'),_0x8189('0xa02','zA$x'),_0x8189('0x184','*7Da'),_0x8189('0x9fa','z^$&'),_0x8189('0x674','5eeV'),'对啊',_0x8189('0x313','bkiR'),_0x8189('0x3d5','[Y2F'),_0x8189('0x960','4Yry'),_0x8189('0x554',']uT$'),_0x8189('0xa36',')#]u'),_0x8189('0x86b','5eeV'),'是吗','谁啊','隔壁尼姑庵的尼姑啊',_0x8189('0x8ef','@9@0'),_0x8189('0x48a','^)J3'),'是啊',_0x8189('0x963','It1b'),_0x8189('0xa06','E]aj'),_0x8189('0x852','8^e]'),'好啊，不过我要做弓了，你做贱','不行',_0x8189('0x3ff','[Y2F'),_0x8189('0x8fb','zA$x'),'哈哈','你长',_0x8189('0x8af','iR28'),_0x8189('0x720','zA$x'),_0x8189('0x9c1','obd!'),_0x8189('0x9a5','5eeV'),_0x8189('0x1d3','4Yry'),'过长',_0x8189('0x33a','Jqb7'),_0x8189('0x4a7','N0vT'),_0x8189('0x1c9','70r8'),'？','笑死','加油',_0x8189('0x56','E]aj'),_0x8189('0xace','BdX2'),_0x8189('0x36c','qg7$'),_0x8189('0x715','@9@0'),'是啊，和老婆在一起的时候，心却是属于别的MM的',_0x8189('0xae9','HlqN'),_0x8189('0xb0b','wgP%'),_0x8189('0x642','#^@Q'),_0x8189('0x7fc','JX6y'),'晕!',_0x8189('0xa69','70r8'),_0x8189('0x57b','$mk^'),_0x8189('0x7c6','1()i'),_0x8189('0x2eb','(Gim'),_0x8189('0x850','HlqN'),'哇，好难懂啊，你学哲学的?',_0x8189('0x897','5[L5'),_0x8189('0x93b','4Yry'),_0x8189('0x587','70r8'),'好酷呀，可是人不可能没有感情呀!',_0x8189('0x66c','#g0F'),'我开始流汗了，你真是个牛人!',_0x8189('0xacb','rDIx'),_0x8189('0x67e','O4vp'),_0x8189('0x48e','sGM5'),_0x8189('0x40f','ZmHf'),_0x8189('0xde','p0%o'),_0x8189('0x7b',']uT$'),_0x8189('0x158','N0vT'),_0x8189('0x27e','zA$x'),_0x8189('0x817','It1b'),_0x8189('0xa09','O4vp'),_0x8189('0x1e6','9IRN'),'有缘人终成正果，有情人终成网友!',_0x8189('0xa8','#g0F'),_0x8189('0xe7','V$Te'),'拽吧你，你以为你是谁啊?',_0x8189('0x3b1','JX6y'),_0x8189('0x7d7','@9@0'),'你真是一个优秀的男人吗?','当然，我从小就很优秀，小学到初中，一直在班里任重要职务',_0x8189('0x739','p0%o'),_0x8189('0x5e4',']7uy'),_0x8189('0x58a','8^e]'),_0x8189('0x15f','7H#U'),'嗯，想想，从小到大，倒是得了不少荣誉',_0x8189('0x9fe','@tbM'),'小学时候得到讲故事大赛第三名',_0x8189('0x51a','1()i'),_0x8189('0xac9','[Y2F'),_0x8189('0x84e','rDIx'),_0x8189('0x31','obd!'),_0x8189('0x761','5eeV'),_0x8189('0xd8','iR28'),'加过学校舞台剧的演出，从第一场到最后一场，我全都出场了…',_0x8189('0x61a',']7uy'),_0x8189('0x488','@tbM'),'嗯，你是做裁缝的吧，裁女!',_0x8189('0x27c','V$Te'),_0x8189('0x32','xq7I'),_0x8189('0x72f','4Yry'),'啊!',_0x8189('0x1aa','$mk^'),_0x8189('0x9fc','KtCK'),_0x8189('0x6b','E]aj'),_0x8189('0x6e7','#^@Q'),'数数啊，嗯，大约有一百多个吧!',_0x8189('0x1ba','zA$x'),_0x8189('0x8e0','V$Te'),_0x8189('0x455','HlqN'),_0x8189('0x9c4','OXCB'),_0x8189('0x749','5[L5'),'来，往我怀里晕，Com\x20on\x20baby\x20!?',_0x8189('0x187','5eeV'),_0x8189('0x13e','zA$x'),_0x8189('0x6e0','(Gim'),_0x8189('0x9cf','It1b'),_0x8189('0xa29','7H#U'),_0x8189('0x5ba','#g0F'),_0x8189('0x8b0','5eeV'),_0x8189('0x6c0','70r8'),_0x8189('0xae6','5eeV'),'原来是你!?','幽默短信逗女朋友开心\x20能逗女朋友开心的笑话泡妞高手幽默聊天记录',_0x8189('0x983','D9sr'),'嗯，我天天都哼着你!?','怎麽哼??',_0x8189('0xa24','#^@Q'),_0x8189('0x3c6','zA$x'),_0x8189('0x4c7','JX6y'),_0x8189('0x7a8','xq7I'),'错!是我不虚伪!?',_0x8189('0x3e6','70r8'),'错!我是自信!?',_0x8189('0x900',']7uy'),_0x8189('0x359','7H#U'),_0x8189('0x7d9',')#]u'),_0x8189('0x370','^)J3'),_0x8189('0x94','KgQU'),_0x8189('0x21e','iR28'),_0x8189('0x2b2','sGM5'),_0x8189('0x4b7','nFhx'),_0x8189('0x44f','#^@Q'),_0x8189('0x174','Jqb7'),_0x8189('0x885','*7Da'),'都说十八十八一朵花哈!?',_0x8189('0xa13','xq7I'),_0x8189('0x7aa','E]aj'),_0x8189('0x5cb','XLjY'),_0x8189('0x1b5','9IRN'),'你是哪儿的??',_0x8189('0x871','7H#U'),_0x8189('0x9ec','8^e]'),_0x8189('0xa1f','6Yss'),_0x8189('0xaaa','V$Te'),_0x8189('0x9ef','4Yry'),_0x8189('0x9be','7H#U'),_0x8189('0x428','wgP%'),_0x8189('0x30a','8^e]'),_0x8189('0x629','qg7$'),_0x8189('0x152','6Yss'),_0x8189('0x969','#^@Q'),'喂，别那麽扫兴啊，会有的!?',_0x8189('0x62a','wgP%'),_0x8189('0x165','KtCK'),_0x8189('0x46a','JX6y'),_0x8189('0x32f','obd!'),_0x8189('0x438','sGM5'),_0x8189('0x3c5','9IRN'),_0x8189('0x51e','@tbM'),'哪两首??',_0x8189('0xa64','XLjY'),_0x8189('0x128','XLjY'),_0x8189('0x122','KtCK'),_0x8189('0x376','It1b'),_0x8189('0xd4','1()i'),_0x8189('0x35d','$mk^'),_0x8189('0xa5e','BdX2')];function 朋友圈浏览点赞(){try{for(var _0x3273ab=0x0;_0x3273ab<0x3;_0x3273ab++){var _0x2674a8=id(_0x8189('0x378',']7uy'))[_0x8189('0x473','#^@Q')](wt*0.5,hg*0.2,wt,hg*0.8)[_0x8189('0x451','zA$x')]();if(_0x2674a8){press(_0x2674a8[_0x8189('0x8d5',')#]u')]()[_0x8189('0xac5','8^e]')](),_0x2674a8[_0x8189('0x682','JX6y')]()[_0x8189('0x90f','$mk^')](),0x78);sleep(0x7d0);var _0x230944=text('赞')[_0x8189('0x42','KgQU')]();if(_0x230944){press(_0x230944['bounds']()[_0x8189('0x3fc','qg7$')](),_0x230944[_0x8189('0x159','xq7I')]()[_0x8189('0xa44','KtCK')](),0x78);sleep(0x7d0);}}var _0x2f3146=id(_0x8189('0x8ec','XLjY'))[_0x8189('0x258','V$Te')](0x0,hg*0.2,wt,hg*0.8)[_0x8189('0x399','(Gim')]();if(_0x2f3146){press(_0x2f3146['bounds']()[_0x8189('0xa41','bkiR')](),_0x2f3146[_0x8189('0x1a4','XLjY')]()[_0x8189('0x4da','E]aj')](),0x78);sleep(0x1f40);for(var _0x518df8=0x0;_0x518df8<0x8;_0x518df8++){var _0x2c1df1=random(-0x32,0x32);var _0x3c235a=random(0x258,0x320);swipe(wt*0.014,hg*0.65+_0x2c1df1,wt*0.014,hg*0.25+_0x2c1df1,_0x3c235a);sleep(random(0x4b0,0x640));}back();sleep(0xc80);}swipe(wt*0.5,hg*0.8,wt*0.5,hg*0.2,0x258);}}catch(_0x1cbea1){mylog(_0x1cbea1);}}function searchChat(){for(var _0x22f539=0x0;_0x22f539<0x5;_0x22f539++){sleep(0xc80);var _0x1cd24a=searchTwice(id('nf'),id(_0x8189('0x8e7','(Gim')))[_0x8189('0xa2e','@tbM')]();if(_0x1cd24a){press(random(_0x1cd24a[_0x8189('0x657','1()i')]()[_0x8189('0xb0c','bkiR')],_0x1cd24a[_0x8189('0x504','^)J3')]()[_0x8189('0x5dd','#g0F')]),random(_0x1cd24a[_0x8189('0x92b','qg7$')]()[_0x8189('0x4bc','BdX2')],_0x1cd24a[_0x8189('0xaf2','p0%o')]()[_0x8189('0x8bd','#g0F')]),0x3c);sleep(0xc80);if(random()<0.4){var _0x4d096c=id('apo')[_0x8189('0x3c1','bkiR')](0x1388);if(_0x4d096c){press(random(_0x4d096c[_0x8189('0x5a7','N0vT')]()[_0x8189('0x1de','ZmHf')],_0x4d096c['bounds']()[_0x8189('0x31c','*7Da')]),random(_0x4d096c[_0x8189('0x657','1()i')]()[_0x8189('0xe2','&OXO')],_0x4d096c[_0x8189('0x935','@tbM')]()['bottom']),0x3c);sleep(0x1f40);for(var _0xe8956=0x0;_0xe8956<0x8;_0xe8956++){var _0x1ac976=random(-0x32,0x32);var _0x35badb=random(0x258,0x320);swipe(wt*0.014,hg*0.65+_0x1ac976,wt*0.014,hg*0.25+_0x1ac976,_0x35badb);sleep(random(0x4b0,0x640));}back();sleep(0xc80);}}for(var _0x5c4a89=0x0;_0x5c4a89<random(0x1,0x4);_0x5c4a89++){input(chatContent[random(0x0,chatContent[_0x8189('0x95d','z^$&')])]);sleep(random(0x1b58,0x4e20));var _0x4ed6c5=text('发送')[_0x8189('0x781','1()i')](0x1388);if(_0x4ed6c5){_0x4ed6c5[_0x8189('0x82a','KgQU')]();}sleep(0x1388);}back();sleep(0xc80);}else{mylog(_0x8189('0x673',']uT$'));break;}}}function sysx(){var _0x87bd0c=text('微信')[_0x8189('0x327','(Gim')](0x0,hg*0.8,wt*0.3,hg)['findOnce']();if(_0x87bd0c){press(random(_0x87bd0c[_0x8189('0x79c','70r8')]()[_0x8189('0xb0c','bkiR')],_0x87bd0c['bounds']()[_0x8189('0x51b','JX6y')]),random(_0x87bd0c[_0x8189('0x698','@9@0')]()['top'],_0x87bd0c[_0x8189('0x3ee','(Gim')]()[_0x8189('0x30','@9@0')]),0x3c);sleep(0xc80);}}function pyqs(){sleep(0xc80);var _0x49c086=text('发现')[_0x8189('0x5f5','xq7I')](wt*0.5,hg*0.8,wt,hg)[_0x8189('0x90b',']uT$')]();if(_0x49c086){press(random(_0x49c086[_0x8189('0x180','9IRN')]()[_0x8189('0x6b8','p0%o')],_0x49c086[_0x8189('0x1da','ZmHf')]()['right']),random(_0x49c086[_0x8189('0x82f','7H#U')]()[_0x8189('0x156','@tbM')],_0x49c086[_0x8189('0xa9e','It1b')]()[_0x8189('0x3ba','qg7$')]),0x3c);sleep(0xc80);var _0x132b05=text(_0x8189('0xa4c','V$Te'))[_0x8189('0x1e4','OXCB')]();if(_0x132b05){press(random(_0x132b05[_0x8189('0x8d5',')#]u')]()[_0x8189('0x827','sGM5')],_0x132b05[_0x8189('0x43e','obd!')]()['right']),random(_0x132b05[_0x8189('0xd2','Hrzg')]()[_0x8189('0x2cb','4Yry')],_0x132b05['bounds']()['bottom']),0x3c);sleep(0xc80);朋友圈浏览点赞();}}else{back();sleep(0xc80);var _0x49c086=text('发现')[_0x8189('0x1a2','JX6y')](wt*0.5,hg*0.8,wt,hg)[_0x8189('0xa2e','@tbM')]();if(_0x49c086){press(random(_0x49c086[_0x8189('0x1da','ZmHf')]()[_0x8189('0x9d0','BdX2')],_0x49c086[_0x8189('0x657','1()i')]()[_0x8189('0x6f5','E]aj')]),random(_0x49c086[_0x8189('0x1a4','XLjY')]()[_0x8189('0x86e','D9sr')],_0x49c086[_0x8189('0xaf2','p0%o')]()['bottom']),0x3c);sleep(0xc80);var _0x132b05=text('朋友圈')['findOnce']();if(_0x132b05){press(random(_0x132b05[_0x8189('0x5f2',']uT$')]()[_0x8189('0x64f','HlqN')],_0x132b05[_0x8189('0x5e8','#g0F')]()[_0x8189('0x5dd','#g0F')]),random(_0x132b05[_0x8189('0xb3d','sGM5')]()['top'],_0x132b05['bounds']()[_0x8189('0x972','nFhx')]),0x3c);sleep(0xc80);朋友圈浏览点赞();}}}}var clickSelf=function(_0x1d857e){var _0x12e734=random(-0x2,0x2);var _0x3ffd89=_0x1d857e[_0x8189('0x2a9','V$Te')]();try{if(_0x3ffd89){if(_0x3ffd89[_0x8189('0x8c3','&OXO')]()[_0x8189('0x6a8','5eeV')]()<0x32){var _0x339ef0=_0x3ffd89[_0x8189('0x1a4','XLjY')]()[_0x8189('0x9c0','#g0F')]()+0x50;}else{var _0x339ef0=_0x3ffd89[_0x8189('0x1fb','D9sr')]()[_0x8189('0xad5','70r8')]();}pclick(_0x3ffd89[_0x8189('0xa5c','wgP%')]()[_0x8189('0x547','OXCB')]()+_0x12e734,_0x339ef0+_0x12e734,0x78);sleep(0x7d0);return!![];}else{return![];}}catch(_0x45ab68){mylog(_0x8189('0x153','N0vT'));return![];}};function WXYHmain(){if(storage[_0x8189('0x18a','It1b')](_0x8189('0x1e8','KtCK'),[![]])){var _0x3b5bcb=new Date();var _0x4c9fa3=_0x3b5bcb[_0x8189('0x72a','XLjY')]()*0x3c+_0x3b5bcb[_0x8189('0x913','obd!')]();var _0x98537a=storages['create']('养号时间');if(_0x98537a[_0x8189('0x48f','XLjY')](_0x8189('0xe6','p0%o'))==undefined){_0x98537a[_0x8189('0x238','4Yry')]('养号时间',_0x4c9fa3);}if(_0x4c9fa3-_0x98537a[_0x8189('0x474','Jqb7')](_0x8189('0x42f','nFhx'))>=storage['get'](_0x8189('0xa42',']7uy'),[0x15e])){_0x98537a['put'](_0x8189('0x99a','rDIx'),_0x4c9fa3);try{点击启动APP('微信');wait(_0x8189('0x917','V$Te'),null,0x1e);sysx();searchChat();pyqs();clearMt();}catch(_0x76ba3a){mylog(_0x76ba3a);clearMt();}}else if(_0x4c9fa3-_0x98537a[_0x8189('0xcc','70r8')](_0x8189('0x851','6Yss'))<0x0){_0x98537a['put'](_0x8189('0x593','9IRN'),_0x4c9fa3);}}}function dyspbf(){var _0x5724c6=random(storage['get']('dspsj1',[0x7]),storage['get']('dspsj2',[0xa]));for(let _0x7da710=0x0;_0x7da710<_0x5724c6;_0x7da710++){sleep(0x3e8);if(text(_0x8189('0x51d','#g0F'))['exists']()||text('查看详情\x20>')[_0x8189('0x769','JX6y')]()){break;}}}function ksspbf(){var _0x36aa2f=random(0x4,0xf);for(let _0x197e11=0x0;_0x197e11<_0x36aa2f;_0x197e11++){sleep(0x7d0);if(text(_0x8189('0x412','70r8'))[_0x8189('0x311','qg7$')]()||text(_0x8189('0x824','p0%o'))[_0x8189('0x9d3','5[L5')]()){break;}}控件点击2(text('继续播放')[_0x8189('0xb35','z^$&')](0x0,hg*0.4,wt,hg*0.8));控件点击2(text(_0x8189('0xa5f','1()i')));clickSelf(text('我知道了'));}function 查找控件(_0x293494,_0x20a667){for(let _0x3f20c2=0x0;_0x3f20c2<_0x20a667;_0x3f20c2++){for(let _0x39c18a=0x0;_0x39c18a<_0x293494[_0x8189('0x60','V$Te')];_0x39c18a++){if(_0x293494[_0x39c18a][_0x8189('0x179','wgP%')]()!=null){return _0x293494[_0x39c18a];}sleep(0x3e8);}sleep(0x5dc);}return id(_0x8189('0xb9','wgP%'));}function 抖音上传作品2(){var _0x1081c9=random(-0x2,0x2);var _0xcb0782=threads['start'](function(){while(!![]){try{clickSelf(text(_0x8189('0x346','7H#U'))['className'](_0x8189('0xb0f','5[L5')));clickSelf(text(_0x8189('0x6a9','OXCB')));clickSelf(text('取消'));}catch(_0x38ef46){}}});for(let _0x3ba61c=0x0;_0x3ba61c<0x4;_0x3ba61c++){if(text('推荐')['exists']()){for(let _0x2d328d=0x0;_0x2d328d<random(0x0,0x2);_0x2d328d++){随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);sleep(0xbb8);}clickSelf(className(_0x8189('0x403','iR28'))[_0x8189('0x3a5','4Yry')](wt*0.82,hg*0.23,wt-0x1,hg*0.4));sleep(0x5dc);if(!text('关注')[_0x8189('0x64','Hrzg')](wt*0.15,hg*0.1,wt,hg*0.5)[_0x8189('0x84f','KgQU')]()&&!text(_0x8189('0x5b0','p0%o'))[_0x8189('0x47e',']uT$')](wt*0.15,hg*0.1,wt,hg*0.5)['exists']()){back();sleep(0x7d0);随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);sleep(0x5dc);continue;}}if(clickSelf(descContains(_0x8189('0xac0','8^e]'))[_0x8189('0x836','6Yss')](0x1,0x1,wt,hg))){for(let _0x248601=0x0;_0x248601<0x3;_0x248601++){if(!clickSelf(text('允许'))){break;}}if(clickSelf(className(_0x8189('0x5ca','N0vT'))[_0x8189('0x16e','OXCB')](wt*0.82,hg*0.88,wt-0x1,hg-0x1))){for(let _0x2c54bd=0x0;_0x2c54bd<0x3;_0x2c54bd++){if(!clickSelf(text('允许'))){break;}}for(let _0x5ca6d1=0x0;_0x5ca6d1<0x5;_0x5ca6d1++){back();sleep(0x5dc);if(text('推荐')[_0x8189('0x26c','KgQU')](0x1,0x1,wt,hg)[_0x8189('0x608','N0vT')]()&&text('我')[_0x8189('0x47e',']uT$')](0x1,0x1,wt,hg)[_0x8189('0x4a4','^)J3')]()){break;}}if(clickSelf(className(_0x8189('0xa4f','5eeV'))[_0x8189('0x7f6','ZmHf')](wt*0.35,hg*0.84,wt*0.65,hg))){for(let _0x43f11a=0x0;_0x43f11a<0x3;_0x43f11a++){if(!clickSelf(text('允许'))){clickSelf(className(_0x8189('0x61e','Jqb7'))[_0x8189('0x341','O4vp')](wt*0.35,hg*0.84,wt*0.65,hg));break;}}var _0x54af8c=查找控件(Array(desc('道具'),text('道具')),0xa)[_0x8189('0x3e7','qg7$')]();if(_0x54af8c){press(_0x54af8c[_0x8189('0x5a7','N0vT')]()[_0x8189('0x230','^)J3')]()+_0x1081c9,_0x54af8c[_0x8189('0xb2',']7uy')]()[_0x8189('0x66e','(Gim')]()+_0x1081c9,0x78);sleep(0x1194);for(let _0x3ae04a=0x0;_0x3ae04a<0x3;_0x3ae04a++){随机滑动2(Array(0.77,0.78),Array(0.628,0.629),Array(0.5,0.51),Array(0.628,0.629),0x258);sleep(0x7d0);if(clickSelf(text('新奇'))){break;}sleep(0x5dc);}for(let _0x396c51=0x0;_0x396c51<0x6;_0x396c51++){if(clickSelf(desc('烟雾'))||clickSelf(desc('动态光影'))||clickSelf(desc(_0x8189('0x105','5eeV')))){if(clickSelf(className(_0x8189('0x6e6','70r8'))[_0x8189('0x1c6','obd!')](wt*0.14,hg*0.45,wt*0.35,hg*0.6))){break;}}else{随机滑动2(Array(0.45,0.46),Array(0.87,0.88),Array(0.45,0.46),Array(0.67,0.68),0x258);sleep(0x3e8);}}if(clickSelf(text(_0x8189('0x58','D9sr')))){textContains(':')[_0x8189('0x751','8^e]')](0x1,0x1,wt,hg)[_0x8189('0xb4e','#g0F')](0x3a98);随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);for(let _0x3fc325=0x0;_0x3fc325<0x6;_0x3fc325++){if(clickSelf(textContains(':')[_0x8189('0x3f1','70r8')](0x1,hg*0.2,wt,hg))){if(clickSelf(text('使用')[_0x8189('0xb17','E]aj')](0x1,0x1,wt,hg))){if(text(_0x8189('0x494','KgQU'))[_0x8189('0x1e7','@tbM')]()||text('拍15秒')[_0x8189('0x1f6','ZmHf')]()){break;}}}else{随机滑动2(Array(0.77,0.78),Array(0.628,0.629),Array(0.5,0.51),Array(0.628,0.629),0x258);}sleep(0x5dc);}var _0x4d29b2=text(_0x8189('0x7c8','rDIx'))[_0x8189('0x27a','OXCB')](0x61a8);if(_0x4d29b2){sleep(0x7d0);press(_0x4d29b2[_0x8189('0xa5c','wgP%')]()[_0x8189('0x305','#^@Q')]()+_0x1081c9,_0x4d29b2['bounds']()[_0x8189('0x2ee','p0%o')]()+_0x1081c9,0x78);sleep(random(0xfa0,0x1f40));if(clickSelf(text('按住拍'))){var _0x1cb068=desc(_0x8189('0x44d','qg7$'))['findOne'](0x61a8);if(_0x1cb068){sleep(0x7d0);press(_0x1cb068[_0x8189('0x4cc','nFhx')]()[_0x8189('0x547','OXCB')]()+_0x1081c9,_0x1cb068['bounds']()['centerY']()+_0x1081c9,0x78);}}var _0xd040ed=text('下一步')[_0x8189('0x18e','V$Te')](0x88b8);if(_0xd040ed){sleep(0x7d0);press(_0xd040ed[_0x8189('0x2e0','bkiR')]()[_0x8189('0x421',']7uy')]()+_0x1081c9,_0xd040ed[_0x8189('0x92b','qg7$')]()[_0x8189('0x962','zA$x')]()+_0x1081c9,0x78);sleep(0x7d0);var _0x1f57d7=text('发布')[_0x8189('0x26c','KgQU')](wt*0.45,hg*0.85,wt,hg)[_0x8189('0xa2b','$mk^')](0x7530);if(_0x1f57d7){sleep(0xdac);press(_0x1f57d7[_0x8189('0xa9e','It1b')]()[_0x8189('0x9e5','&OXO')]()+_0x1081c9,_0x1f57d7[_0x8189('0x180','9IRN')]()['centerY']()+_0x1081c9,0x78);mylog(_0x8189('0x733','5eeV'));sleep(0x9c40);storagesd[_0x8189('0x2e6','9IRN')]('dysczpcs',0x1);try{_0xcb0782[_0x8189('0x669','iR28')]();}catch(_0x1716b1){}return!![];}}}}}}}}for(let _0x4d5b83=0x0;_0x4d5b83<0xa;_0x4d5b83++){back();sleep(0xdac);clickSelf(text('退出'));if(text('推荐')['boundsInside'](0x1,0x1,wt,hg)[_0x8189('0x7ad','7H#U')]()&&text('我')[_0x8189('0x8a3','rDIx')](0x1,0x1,wt,hg)[_0x8189('0x4c4',')#]u')]()){break;}}}try{_0xcb0782[_0x8189('0x5f8','#^@Q')]();}catch(_0x29fe84){}return![];}function 抖音上传作品(){var _0x20085d=random(-0x2,0x2);text('首页')[_0x8189('0x4d3','qg7$')](0x4e20);clickSelf(text(_0x8189('0x6df',']uT$')));clickSelf(text('取消'));clickSelf(text('我知道了'));var _0x2a30de=className(_0x8189('0x924','zA$x'))[_0x8189('0x26c','KgQU')](wt*0.35,hg*0.84,wt*0.65,hg)[_0x8189('0x6a3','xq7I')](0x4e20);if(_0x2a30de){sleep(0xdac);press(_0x2a30de[_0x8189('0xadf','5eeV')]()[_0x8189('0xa41','bkiR')]()+_0x20085d,_0x2a30de[_0x8189('0x565','8^e]')]()[_0x8189('0x28','obd!')]()+_0x20085d,0x78);sleep(0xfa0);clickSelf(text('取消'));clickSelf(text(_0x8189('0x116','8^e]')));clickSelf(text(_0x8189('0xf9','bkiR')));var _0x2bcf8a=text(_0x8189('0x22a','&OXO'))[_0x8189('0x8f0','@9@0')](0x4e20);if(_0x2bcf8a){sleep(0xdac);press(_0x2bcf8a['bounds']()[_0x8189('0x65d','#g0F')]()+_0x20085d,_0x2bcf8a[_0x8189('0xa90','zA$x')]()[_0x8189('0x32d','XLjY')]()+_0x20085d,0x78);sleep(0x7d0);var _0x456df2=text(_0x8189('0x1e3','7H#U'))[_0x8189('0x6cb','p0%o')](0x7530);if(_0x456df2){sleep(0xdac);press(_0x456df2['bounds']()[_0x8189('0x9e5','&OXO')]()+_0x20085d,_0x456df2['bounds']()[_0x8189('0xaa9','[Y2F')]()+_0x20085d,0x78);sleep(0x7d0);var _0x6c8b15=text('发布')['boundsInside'](wt*0.45,hg*0.85,wt,hg)[_0x8189('0x8f0','@9@0')](0x7530);if(_0x6c8b15){sleep(0xdac);press(_0x6c8b15[_0x8189('0xa5c','wgP%')]()[_0x8189('0xa41','bkiR')]()+_0x20085d,_0x6c8b15[_0x8189('0x657','1()i')]()[_0x8189('0x8ac','N0vT')]()+_0x20085d,0x78);mylog(_0x8189('0x429','rDIx'));sleep(0x124f8);clickSelf(text(_0x8189('0xa18','xq7I')));clickSelf(text(_0x8189('0x35','&OXO')));storagesd['put'](_0x8189('0x26b','6Yss'),storagesd[_0x8189('0x267','7H#U')](_0x8189('0x5d2','nFhx'),[0x0])+0x1);}}}}}function 抖音页面(){for(let _0x1907e0=0x0;_0x1907e0<0x8;_0x1907e0++){if(descContains(_0x8189('0xabd','E]aj'))[_0x8189('0x1e7','@tbM')]()){return!![];}else{随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);}if(_0x1907e0>0x4){clickSelf(text('首页'));back();}sleep(0xbb8);}throw _0x8189('0xaa2','rDIx');}function dyyh(){if(storage2[_0x8189('0xb01','rDIx')]('dsplx',[0x0])==0x0||storage2[_0x8189('0x66',']7uy')](_0x8189('0x49c','#g0F'),[0x0])==0x1){try{if(storage[_0x8189('0x77','z^$&')](_0x8189('0x26','nFhx'),![])){sleep(0xbb8);抖音页面();}else{点击启动APP(_0x8189('0x495','#g0F'));wait(_0x8189('0x920','1()i'),null,0x1e);descContains(_0x8189('0x72d','*7Da'))[_0x8189('0x69','nFhx')](0x4650);clickSelf(text(_0x8189('0x3e0','@9@0')));clickSelf(text('取消'));}if(storage[_0x8189('0xaed','obd!')](_0x8189('0x358','9IRN'),![])){for(let _0x20943c=0x0;_0x20943c<storage['get'](_0x8189('0xaef','XLjY'),[0x1]);_0x20943c++){if(storagesd[_0x8189('0xc4','5[L5')](_0x8189('0x5ae','p0%o'),[0x0])<storage[_0x8189('0x503','zA$x')](_0x8189('0x3e','$mk^'),[0x1])){if(storage2[_0x8189('0x474','Jqb7')](_0x8189('0x846','7H#U'),0x0)==0x0){抖音上传作品2();}else{抖音上传作品();}}}}else{mylog(_0x8189('0x65e','&OXO'));}clickSelf(text('推荐'));for(let _0x4166c5=0x1;_0x4166c5<storage[_0x8189('0xb01','rDIx')](_0x8189('0xafb','JX6y'))+0x1;_0x4166c5++){抖音页面();dyspbf();if(getRandom2(storage[_0x8189('0xc4','5[L5')](_0x8189('0x4ab','XLjY'),[0x0])/0x64)){click(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));sleep(0x32);click(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));sleep(0x3e8);click(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));sleep(0x32);click(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));sleep(0x7d0);}if(getRandom2(storage['get'](_0x8189('0x2be','rDIx'),[0x0])/0x64)){clickSelf(desc('关注')['boundsInside'](wt*0.7,hg*0.1,wt,hg*0.8));}随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);mylog('已观看'+_0x4166c5+'视频');sleep(0x7d0);}}catch(_0x322647){}}}function 下载作品(){for(let _0x3ea971=0x0;_0x3ea971<0x6;_0x3ea971++){clickSelf(idContains(_0x8189('0x7d4','E]aj')));var _0x26d398=查找控件(Array(id('forward_icon')[_0x8189('0x8d0','[Y2F')](wt*0.8,hg*0.8,wt,hg),id(_0x8189('0x11','9IRN'))[_0x8189('0x8bf','D9sr')](wt*0.8,hg*0.8,wt,hg)),0xa)[_0x8189('0x42','KgQU')]();if(_0x26d398){press(_0x26d398[_0x8189('0x98a','*7Da')]()[_0x8189('0x260','BdX2')]()+随机数4,_0x26d398[_0x8189('0x79c','70r8')]()[_0x8189('0x8e','4Yry')]()+随机数4,0x78);sleep(0x7d0);var _0x4ff0cf=查找控件(Array(text(_0x8189('0x1dd','7H#U')),text(_0x8189('0x63f','sGM5'))),0xf)[_0x8189('0x26e','obd!')]();if(_0x4ff0cf){press(_0x4ff0cf[_0x8189('0x8d5',')#]u')]()[_0x8189('0xac3','4Yry')]()+随机数4,_0x4ff0cf[_0x8189('0xadf','5eeV')]()[_0x8189('0x1b1','^)J3')]()+随机数4,0x78);sleep(0x7d0);for(let _0x11ae55=0x0;_0x11ae55<0xa;_0x11ae55++){if(textContains(_0x8189('0x845','O4vp'))[_0x8189('0x473','#^@Q')](wt*0.1,hg*0.3,wt*0.9,hg*0.8)[_0x8189('0xb03','sGM5')]()){sleep(0x5dc);}else{break;}}sleep(0x7d0);clickSelf(idContains(_0x8189('0xa8f','wgP%')));return!![];}else{back();sleep(0x7d0);随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.002,0.003),0x2bc);sleep(0x3e8);}}}}function 快手上传作品2(){var _0x549d07=random(-0x2,0x2);var _0x45fb66=查找控件(Array(id(_0x8189('0x4aa','p0%o')),id('action_right_frame')),0xf)[_0x8189('0x8a5','nFhx')]();if(clickSelf(idContains(_0x8189('0x908','#g0F')))){_0x45fb66=查找控件(Array(id(_0x8189('0xacd','[Y2F')),id('action_right_frame')),0x3)[_0x8189('0x2a9','V$Te')]();}if(_0x45fb66==null){_0x45fb66=id(_0x8189('0x742','p0%o'))[_0x8189('0xb0a','4Yry')]();}if(_0x45fb66){sleep(0xdac);press(_0x45fb66[_0x8189('0x5f2',']uT$')]()[_0x8189('0x7b7','7H#U')]()+_0x549d07,_0x45fb66['bounds']()[_0x8189('0xaae','@9@0')]()+_0x549d07,0x78);}else{click(wt*0.925,hg*0.075);}sleep(0xdac);clickSelf(text('取消'));var _0x2e741f=text('相册')[_0x8189('0xab6','4Yry')](0xafc8);if(_0x2e741f){sleep(0xdac);press(_0x2e741f[_0x8189('0x698','@9@0')]()[_0x8189('0xef','KtCK')]()+_0x549d07,_0x2e741f['bounds']()[_0x8189('0x6ad','z^$&')]()+_0x549d07,0x78);sleep(0xfa0);clickSelf(text('取消'));var _0x45fb66=className(_0x8189('0xb1b','BdX2'))['boundsInside'](0x0,hg*0.05,wt*0.5,hg*0.75)[_0x8189('0x3c7','KtCK')](0x7530);if(_0x45fb66){sleep(0xdac);press(_0x45fb66[_0x8189('0xaf2','p0%o')]()[_0x8189('0x641','KgQU')]()+_0x549d07,_0x45fb66[_0x8189('0x9d1','z^$&')]()['centerY']()+_0x549d07,0x78);sleep(0xfa0);var _0x49ebc0=text(_0x8189('0x147','obd!'))[_0x8189('0xff','sGM5')](0x7530);if(_0x49ebc0){sleep(0xdac);press(_0x49ebc0['bounds']()[_0x8189('0x421',']7uy')]()+_0x549d07,_0x49ebc0[_0x8189('0xae3','#^@Q')]()['centerY']()+_0x549d07,0x78);sleep(0xfa0);var _0x49ebc0=text(_0x8189('0x92','5eeV'))[_0x8189('0x481','XLjY')](0x7530);if(_0x49ebc0){sleep(0xdac);press(_0x49ebc0[_0x8189('0x8e3','[Y2F')]()['centerX']()+_0x549d07,_0x49ebc0[_0x8189('0x78','6Yss')]()['centerY']()+_0x549d07,0x78);sleep(0xfa0);var _0x49ebc0=id(_0x8189('0xa0d','4Yry'))['findOne'](0x7530);if(_0x49ebc0){sleep(0x1388);press(_0x49ebc0[_0x8189('0xaf2','p0%o')]()[_0x8189('0x272','[Y2F')]()+_0x549d07,_0x49ebc0[_0x8189('0x475','KgQU')]()[_0x8189('0x8d1','wgP%')]()+_0x549d07,0x78);sleep(0x1194);}var _0x727432=textContains('发布')[_0x8189('0x292','1()i')](0x1,hg*0.8,wt,hg)[_0x8189('0x93c','O4vp')](0x7530);if(_0x727432){mylog(_0x8189('0x11d','KtCK'));sleep(0x1388);press(_0x727432[_0x8189('0x190','O4vp')]()[_0x8189('0xa41','bkiR')]()+_0x549d07,_0x727432[_0x8189('0x42b','HlqN')]()[_0x8189('0x21d','BdX2')]()+_0x549d07,0x78);sleep(0x1194);}else{click(wt*0.51,hg*0.93);sleep(0x1194);}clickSelf(text(_0x8189('0x33b','D9sr')));var _0x727432=text('发布')[_0x8189('0x16e','OXCB')](0x0,hg*0.82,wt,hg)[_0x8189('0x8f0','@9@0')](0x7530);if(_0x727432){sleep(0xdac);press(_0x727432[_0x8189('0x12c','E]aj')]()['centerX']()+_0x549d07,_0x727432[_0x8189('0x565','8^e]')]()[_0x8189('0x8e','4Yry')]()+_0x549d07,0x78);sleep(0xdac);clickSelf(text(_0x8189('0x693',')#]u')));sleep(0x2710);text(_0x8189('0x9e','E]aj'))[_0x8189('0x564','70r8')](0xea60);storagesd[_0x8189('0x24d','[Y2F')]('kssczpcs',0x1);}}}}}}function 快手上传作品(){var _0xe9b303=random(-0x2,0x2);var _0xf80b32=查找控件(Array(id(_0x8189('0x569','It1b')),id(_0x8189('0x4b6','z^$&'))),0xf)[_0x8189('0x3e7','qg7$')]();if(clickSelf(idContains('close'))){_0xf80b32=查找控件(Array(id(_0x8189('0x123','@9@0')),id(_0x8189('0xafd','It1b'))),0x3)['findOnce']();}if(_0xf80b32==null){_0xf80b32=id(_0x8189('0x8b8','HlqN'))['findOnce']();}if(_0xf80b32){sleep(0xdac);press(_0xf80b32['bounds']()[_0x8189('0x421',']7uy')]()+_0xe9b303,_0xf80b32[_0x8189('0x9d1','z^$&')]()['centerY']()+_0xe9b303,0x78);}else{click(wt*0.925,hg*0.075);}sleep(0xdac);clickSelf(text('取消'));var _0x31368a=id(_0x8189('0x826','E]aj'))[_0x8189('0x1b0','9IRN')](0x4e20);if(_0x31368a){sleep(0xfa0);press(_0x31368a[_0x8189('0x475','KgQU')]()[_0x8189('0x7e3','obd!')]()+_0xe9b303,_0x31368a[_0x8189('0x3ee','(Gim')]()[_0x8189('0x95','8^e]')]()+_0xe9b303,0x78);sleep(0x7d0);clickSelf(text('取消'));var _0xc2beca=id(_0x8189('0x1fc','obd!'))[_0x8189('0x8de','@tbM')](0x7530);if(_0xc2beca){sleep(0xdac);press(_0xc2beca[_0x8189('0xb3d','sGM5')]()['centerX']()+_0xe9b303,_0xc2beca[_0x8189('0x2e0','bkiR')]()[_0x8189('0x401','xq7I')]()+_0xe9b303,0x78);sleep(0x7d0);clickSelf(text(_0x8189('0xaf0','5eeV')));var _0x262bfa=text('发布')[_0x8189('0x341','O4vp')](0x0,hg*0.82,wt,hg)[_0x8189('0x977','(Gim')](0x7530);if(_0x262bfa){sleep(0xdac);press(_0x262bfa[_0x8189('0x4cc','nFhx')]()[_0x8189('0x15c','$mk^')]()+_0xe9b303,_0x262bfa['bounds']()[_0x8189('0x1b1','^)J3')]()+_0xe9b303,0x78);sleep(0xdac);clickSelf(text(_0x8189('0x637','9IRN')));sleep(0x2710);text(_0x8189('0x806','@tbM'))[_0x8189('0x80','7H#U')](0xc350);storagesd['put'](_0x8189('0x2b1','JX6y'),0x1);}}}}function ksyh(){var _0x36ad65=0x0;if(storage2[_0x8189('0x361','4Yry')]('dsplx',[0x0])==0x0||storage2[_0x8189('0xaed','obd!')](_0x8189('0x6bb','^)J3'),[0x0])==0x2){点击启动APP('快手');wait(_0x8189('0x557','@tbM'),null,0x1e);sleep(0xdac);clickSelf(idContains('close'));if(storage[_0x8189('0x219','N0vT')]('自动上传作品',![])){for(let _0x10f300=0x0;_0x10f300<storage[_0x8189('0xb01','rDIx')]('zpcs',[0x1]);_0x10f300++){if(storagesd[_0x8189('0xb01','rDIx')](_0x8189('0x770','(Gim'),[0x0])<storage[_0x8189('0xba','6Yss')](_0x8189('0x895','^)J3'),[0x1])){if(storage2[_0x8189('0xbb','@tbM')](_0x8189('0x820','O4vp'),0x0)==0x0){if(下载作品()){快手上传作品2();}}else{快手上传作品();}}}}else{mylog(_0x8189('0x992','#^@Q'));}clickSelf(text('发现'));clickSelf(desc('发现'));for(let _0x26b516=0x1;_0x26b516<storage['get'](_0x8189('0x8bc','$mk^'))+0x1;){if(id(_0x8189('0x456','&OXO'))[_0x8189('0x34b','@9@0')]()){_0x36ad65=0x0;click(random(wt*0.15,wt*0.17),random(hg*0.45,wt*0.46));sleep(0xdac);ksspbf();back();sleep(0x9c4);随机滑动2(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),0x258);_0x26b516++;mylog(_0x8189('0x365','#^@Q')+_0x26b516+'视频');sleep(0x7d0);}else{控件点击2(text('退出聊天室'));_0x36ad65++;if(_0x36ad65>0x7){mylog('没有找到首页');throw'没有找到首页';}if(_0x36ad65>0x4){back();}sleep(0x1388);}}}}function 进入直播间(){var _0x4cb777=random(-0x2,0x2);for(let _0x58c7c1=0x0;_0x58c7c1<0xf;_0x58c7c1++){sleep(0xbb8);var _0x29bc3c=className(_0x8189('0x814','7H#U'))[_0x8189('0x77b','qg7$')](0x1,0x1,wt*0.15,hg*0.15)[_0x8189('0x45c','7H#U')]();if(_0x29bc3c){sleep(0x5dc);press(_0x29bc3c[_0x8189('0xb2',']7uy')]()[_0x8189('0x279','N0vT')]()+_0x4cb777,_0x29bc3c[_0x8189('0x7bc','iR28')]()[_0x8189('0x3ab','1()i')]()+_0x4cb777,0x78);sleep(0xdac);}if(text(_0x8189('0x4d5','N0vT'))['exists']()){for(let _0x597f70=0x0;_0x597f70<random(0x0,0xa);_0x597f70++){随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),0x258);text(_0x8189('0x2e8','KtCK'))[_0x8189('0xb4e','#g0F')](0x2710);sleep(0x1388);}return!![];}if(text(_0x8189('0x8e9','iR28'))[_0x8189('0x5fd','#^@Q')]()){clickSelf(text('首页'));}if(_0x58c7c1>0x7){back();sleep(0x7d0);}}mylog('没有找到直播间');return![];}function dyzbgk(){if(storage[_0x8189('0x7f1','qg7$')]('观看直播时间',![])){点击启动APP('抖音短视频');wait(_0x8189('0x664','@tbM'),null,0x1e);sleep(0x2710);if(进入直播间()){sleep(storage[_0x8189('0x371','^)J3')](_0x8189('0xb32','V$Te'))*0x2710);back();}}}function DSPmain(){if(storage[_0x8189('0x18a','It1b')](_0x8189('0x32a','V$Te'),[![]])){var _0x23b895=new Date();var _0x575309=_0x23b895['getHours']()*0x3c+_0x23b895[_0x8189('0x995','1()i')]();var _0x2107f8=storages['create'](_0x8189('0x4fb','^)J3'));if(_0x2107f8[_0x8189('0xba','6Yss')](_0x8189('0x901','HlqN'))==undefined){_0x2107f8['put'](_0x8189('0x6bf','6Yss'),_0x575309);}if(_0x575309-_0x2107f8[_0x8189('0x2c9','p0%o')](_0x8189('0x2fb','KtCK'))>=storage[_0x8189('0xa76','E]aj')](_0x8189('0x7e5','#^@Q'),[0x15e])){var _0xe7f5f0=threads[_0x8189('0x16d','4Yry')](function(){while(!![]){控件点击2(text(_0x8189('0x13c','sGM5'))[_0x8189('0x1d8','N0vT')](0x0,hg*0.4,wt,hg*0.8));控件点击2(text(_0x8189('0x921','$mk^')));clickSelf(text(_0x8189('0xaf0','5eeV')));sleep(0x5dc);}});_0x2107f8[_0x8189('0x8d6','*7Da')](_0x8189('0x38f','obd!'),_0x575309);try{dyzbgk();dyyh();ksyh();clearMt();}catch(_0x5490d2){mylog(_0x5490d2);clearMt();}try{_0xe7f5f0[_0x8189('0x904','qg7$')]();}catch(_0x58efd2){}}else if(_0x575309-_0x2107f8[_0x8189('0xaed','obd!')](_0x8189('0x47a','8^e]'))<0x0){_0x2107f8[_0x8189('0xf6','#^@Q')]('DSP养号时间',_0x575309);}}}function searchTwice(_0x4665af,_0x1810a1){if(_0x4665af[_0x8189('0x4d4','*7Da')]()){return _0x4665af;}else if(_0x1810a1[_0x8189('0x467','#g0F')]()){return _0x1810a1;}else{return id('afdgsjasdhbl;fjkhbnfv;akjfbhngsfj;dxzo');}}function 写入版本号(){var _0x534367=[[_0x8189('0x49','N0vT'),_0x8189('0x76','KtCK')],[_0x8189('0x181','HlqN'),_0x8189('0xf8','@9@0')],[_0x8189('0x332','ZmHf'),_0x8189('0x9b6','HlqN')],[_0x8189('0x721','@tbM'),_0x8189('0xa23','HlqN')],[_0x8189('0x5d1','BdX2'),_0x8189('0x42c','7H#U')],[_0x8189('0x483','XLjY'),_0x8189('0x72','rDIx')],[_0x8189('0x956',']7uy'),_0x8189('0x12f',']7uy')],[_0x8189('0x887','xq7I'),_0x8189('0x8d',']uT$')],[_0x8189('0x506','KtCK'),_0x8189('0x247','XLjY')],[_0x8189('0x898','ZmHf'),_0x8189('0x8c0','zA$x')],['com.kuaishou.nebula','ksbb'],['com.xiangkan.android','xkbb'],['com.yuncheapp.android.pearl',_0x8189('0x524','E]aj')],[_0x8189('0x7f','O4vp'),_0x8189('0xa63','4Yry')],[_0x8189('0x5e0','ZmHf'),_0x8189('0x894','rDIx')],['com.jifen.qukan',_0x8189('0x5c','@9@0')],[_0x8189('0x3a4','7H#U'),'ddxwbb'],[_0x8189('0x21','nFhx'),_0x8189('0x3dd','XLjY')],['com.jifen.dandan','cdspbb'],[_0x8189('0x194','V$Te'),'hhspjsbbb'],['com.jd.jdlite',_0x8189('0x51f','obd!')],['com.bang.redbox',_0x8189('0x25','xq7I')],[_0x8189('0xa7c','Hrzg'),_0x8189('0xaf9','JX6y')],[_0x8189('0x692','iR28'),_0x8189('0x940','7H#U')],[_0x8189('0xb4c','zA$x'),'fqmfxsbb'],[_0x8189('0x336','#^@Q'),'tysbb'],[_0x8189('0x1d9',']uT$'),_0x8189('0x44','[Y2F')],[_0x8189('0x3bc','#g0F'),'kgegbb'],['com.toomee.stars',_0x8189('0x577',')#]u')],[_0x8189('0x2d9','Hrzg'),_0x8189('0x8ea','7H#U')],[_0x8189('0x5df','wgP%'),_0x8189('0xa01','*7Da')],[_0x8189('0x23b','JX6y'),_0x8189('0x3a1','E]aj')],[_0x8189('0x653','wgP%'),_0x8189('0x5c5','5[L5')],['com.aixiaoqun.tuitui',_0x8189('0x300','V$Te')],[_0x8189('0x81d','9IRN'),'lzbb'],[_0x8189('0xb04','(Gim'),'llydbb'],[_0x8189('0xaf8','9IRN'),_0x8189('0x453','5eeV')],['com.xzzq.xiaozhuo',_0x8189('0x8ce','#^@Q')],[_0x8189('0x382','qg7$'),_0x8189('0x3af','^)J3')],[_0x8189('0x280','V$Te'),_0x8189('0x4e9','KgQU')],[_0x8189('0x870',')#]u'),'kybb'],[_0x8189('0x463','iR28'),_0x8189('0x38b','70r8')],[_0x8189('0xa38','rDIx'),_0x8189('0x553','N0vT')],[_0x8189('0x1c7',']7uy'),_0x8189('0x35f','It1b')],[_0x8189('0x2a1','OXCB'),_0x8189('0x4ca','KgQU')],[_0x8189('0x246','BdX2'),_0x8189('0xb2f','$mk^')],[_0x8189('0x7b9','8^e]'),'pddhbbb'],[_0x8189('0x1cd','@tbM'),_0x8189('0x50f','wgP%')],[_0x8189('0x586',')#]u'),'xchbb'],[_0x8189('0x457','1()i'),_0x8189('0x2d1','*7Da')],[_0x8189('0x178','obd!'),_0x8189('0x221','$mk^')],[_0x8189('0x68e','It1b'),'zqkdbb'],['com.bokecc.dance',_0x8189('0x3ae','[Y2F')],['com.tiantian.video','ttdspbb'],[_0x8189('0x3c0','#^@Q'),_0x8189('0x9ae','[Y2F')],[_0x8189('0x981','5eeV'),'weishibb'],[_0x8189('0x8da','Hrzg'),_0x8189('0xafc','*7Da')],[_0x8189('0x976','obd!'),_0x8189('0x37c','It1b')]];for(let _0x39ade2=0x0;_0x39ade2<_0x534367[_0x8189('0xadb','1()i')];_0x39ade2++){try{ui[_0x534367[_0x39ade2][0x1]]['setText'](getPackageVersionName(_0x534367[_0x39ade2][0x0]));}catch(_0x560df5){}}}function 取消关注(){var _0x3ccea1=new Date();var _0x37ecc6=random(-0x2,0x2);if(parseInt(_0x3ccea1[_0x8189('0x727','5[L5')]())>parseInt(取消关注时间)&&storage['get']('自动取消关注',[![]])&&storagesd3[_0x8189('0x6fe','BdX2')](_0x8189('0x58c','@tbM'),[!![]])){mylog(_0x8189('0x9f7','4Yry'));storagesd3[_0x8189('0x759','$mk^')]('qxhx',![]);if(ui[_0x8189('0x639','70r8')][_0x8189('0x3a7','@tbM')]()==0x0||ui[_0x8189('0x3d6','OXCB')][_0x8189('0x1b8','zA$x')]()==0x1){点击启动APP(_0x8189('0x7e8','Hrzg'));sleep(0xdac);var _0x1fd172=threads['start'](function(){while(!![]){try{clickSelf(text(_0x8189('0x911','6Yss')));clickSelf(text(_0x8189('0x6c8','5eeV')));clickSelf(text('取消'));sleep(0x7d0);}catch(_0x36f7b6){}}});var _0x56e5bb=text('我')[_0x8189('0x93a','JX6y')](0x9c40);if(_0x56e5bb){sleep(0xdac);press(_0x56e5bb[_0x8189('0x1da','ZmHf')]()[_0x8189('0xac4','iR28')]()+_0x37ecc6,_0x56e5bb[_0x8189('0x8e3','[Y2F')]()[_0x8189('0x1ed','Hrzg')]()+_0x37ecc6,0x78);sleep(0x9c4);var _0x46ffed=text('关注')[_0x8189('0x3c1','bkiR')](0x9c40);if(_0x46ffed){sleep(0xdac);press(_0x46ffed[_0x8189('0xa74','rDIx')]()[_0x8189('0x40c','70r8')]()+_0x37ecc6,_0x46ffed[_0x8189('0x82f','7H#U')]()[_0x8189('0xaa9','[Y2F')]()+_0x37ecc6,0x78);sleep(0x9c4);var _0x5cf07f=text(_0x8189('0x96f','(Gim'))[_0x8189('0x977','(Gim')](0x3e8);if(_0x5cf07f){for(let _0x28dc52=0x0;_0x28dc52<0x1e;_0x28dc52++){随机滑动2(Array(0.47,0.52),Array(0.81,0.82),Array(0.47,0.52),Array(0.11,0.12),0x3e8);sleep(0x5dc);if(text('查找好友并关注')[_0x8189('0x9d3','5[L5')]()){break;}}for(let _0x960659=0x0;_0x960659<storage[_0x8189('0x15','*7Da')]('qxgzcs',[0x14]);){var _0x33ce4d=text(_0x8189('0x354','#^@Q'))[_0x8189('0x540','@9@0')](wt*0.7,hg*0.28,wt,hg*0.99)[_0x8189('0x819','Hrzg')]();for(q=0x0;q<_0x33ce4d[_0x8189('0x15e','rDIx')];q++){pclick(_0x33ce4d[q]['bounds']()[_0x8189('0x305','#^@Q')]()+_0x37ecc6,_0x33ce4d[q][_0x8189('0x5a7','N0vT')]()[_0x8189('0x401','xq7I')]()+_0x37ecc6);sleep(0x3e8);}_0x960659=_0x960659+_0x33ce4d['length'];随机滑动2(Array(0.47,0.52),Array(0.35,0.36),Array(0.47,0.52),Array(0.89,0.9),0x3e8);}home();sleep(0x5dc);}}}try{_0x1fd172[_0x8189('0xa56','zA$x')]();}catch(_0x43c357){}}if(ui[_0x8189('0x8b6','#^@Q')]['getSelectedItemPosition']()==0x0||ui[_0x8189('0x55f','4Yry')]['getSelectedItemPosition']()==0x2){点击启动APP('快手');sleep(0xdac);var _0x2aab68=threads[_0x8189('0x201','E]aj')](function(){while(!![]){clickSelf(text(_0x8189('0x5db',']7uy')));clickSelf(idContains(_0x8189('0x7d4','E]aj')));sleep(0x5dc);}});var _0x7c99e=id('left_btn')[_0x8189('0x975','wgP%')](0x7530);if(_0x7c99e){sleep(0xdac);press(_0x7c99e['bounds']()[_0x8189('0x479','5[L5')]()+_0x37ecc6,_0x7c99e[_0x8189('0x7bc','iR28')]()[_0x8189('0x28','obd!')]()+_0x37ecc6,0x78);sleep(0x9c4);var _0x324067=id(_0x8189('0x344','iR28'))[_0x8189('0x439','N0vT')](0x7530);if(_0x324067){sleep(0x7d0);press(_0x324067[_0x8189('0xa5c','wgP%')]()['centerX']()+_0x37ecc6,_0x324067[_0x8189('0xb12','BdX2')]()[_0x8189('0x574','JX6y')]()+_0x37ecc6,0x78);sleep(0x9c4);var _0x46ffed=查找控件(Array(textContains('关注')[_0x8189('0x9a8','KtCK')](wt*0.4,0x0,wt,hg*0.5),descContains('关注')[_0x8189('0xab8','Jqb7')](wt*0.4,0x0,wt,hg*0.5)),0xf)[_0x8189('0xa7b','1()i')]();if(_0x46ffed){sleep(0x7d0);press(_0x46ffed['bounds']()[_0x8189('0x5bd','HlqN')]()+_0x37ecc6,_0x46ffed[_0x8189('0x8c3','&OXO')]()['centerY']()+_0x37ecc6,0x78);sleep(0x9c4);var _0x335fd9=查找控件(Array(id(_0x8189('0x89b','iR28')),id(_0x8189('0xa4b','7H#U'))),0xf)[_0x8189('0x6b5','O4vp')]();if(_0x335fd9){for(let _0x25a810=0x0;_0x25a810<0x14;_0x25a810++){随机滑动2(Array(0.47,0.52),Array(0.81,0.82),Array(0.47,0.52),Array(0.11,0.12),0x3e8);sleep(0x5dc);if(text(_0x8189('0x8e6','@9@0'))['exists']()){break;}}for(let _0x33143c=0x0;_0x33143c<storage[_0x8189('0x6a','[Y2F')](_0x8189('0x729','#^@Q'),[0x14]);){var _0x33ce4d=id(_0x8189('0x647','N0vT'))['boundsInside'](0x1,hg*0.15,wt,hg*0.99)['find']();for(q=0x0;q<_0x33ce4d[_0x8189('0x319','5[L5')];q++){pclick(_0x33ce4d[q][_0x8189('0xadf','5eeV')]()[_0x8189('0xac5','8^e]')]()+_0x37ecc6,_0x33ce4d[q][_0x8189('0x9d1','z^$&')]()[_0x8189('0x8ac','N0vT')]()+_0x37ecc6);sleep(0x3e8);var _0xf5594c=查找控件(Array(id(_0x8189('0x1a7',']uT$')),desc('取消关注')['className'](_0x8189('0x403','iR28'))),0x14)[_0x8189('0xa2e','@tbM')]();if(_0xf5594c){pclick(_0xf5594c['bounds']()[_0x8189('0x65d','#g0F')]()+_0x37ecc6,_0xf5594c[_0x8189('0xb2',']7uy')]()[_0x8189('0x752','@tbM')]()+_0x37ecc6);sleep(0x3e8);var _0x446bea=text(_0x8189('0x67f','Jqb7'))[_0x8189('0x9b1','E]aj')](0x4e20);if(_0x446bea){pclick(_0x446bea[_0x8189('0x1da','ZmHf')]()[_0x8189('0x79d','O4vp')]()+_0x37ecc6,_0x446bea[_0x8189('0xb2',']7uy')]()[_0x8189('0x96','sGM5')]()+_0x37ecc6);sleep(0x3e8);}}for(let _0x3a0cb6=0x0;_0x3a0cb6<0x2;_0x3a0cb6++){if(id('name')[_0x8189('0xa10','Jqb7')]()){sleep(0x5dc);break;}else{back();}sleep(0x5dc);}}随机滑动(Array(0.38,0.39),Array(0.23,0.24),Array(0.38,0.39),Array(0.68,0.69),0x3e8);随机滑动(Array(0.38,0.39),Array(0.23,0.24),Array(0.38,0.39),Array(0.68,0.69),0x3e8);_0x33143c=_0x33143c+_0x33ce4d[_0x8189('0x34a','$mk^')];}home();sleep(0x5dc);}}}}try{_0x2aab68[_0x8189('0x1fd',']uT$')]();}catch(_0x80d297){}}}}function 获取手机上所有的app名字(){var _0x2edd48=[];var _0x537580=context['getPackageManager']();let _0x358d62=_0x537580[_0x8189('0xa5d','N0vT')](0x0);for(let _0x3e167c=0x0;_0x3e167c<_0x358d62[_0x8189('0xa5a','7H#U')]();_0x3e167c++){let _0x318b6c=_0x358d62['get'](_0x3e167c);var _0x5d3c96={'packageName':_0x318b6c['packageName']};if(_0x318b6c[_0x8189('0xd6','Jqb7')]()){}else{_0x2edd48[_0x8189('0x551','BdX2')](_0x5d3c96[_0x8189('0x83','JX6y')]);}}return _0x2edd48;}var AppPackageName=[[_0x8189('0xb3f','#g0F'),_0x8189('0x718','&OXO')],[_0x8189('0x91f','1()i'),_0x8189('0xa3f','OXCB')],[_0x8189('0x9f6','sGM5'),_0x8189('0xfb',']7uy')],[_0x8189('0x6c4','bkiR'),_0x8189('0x1fa','8^e]')],[_0x8189('0x72c','9IRN'),_0x8189('0x60e','(Gim')],[_0x8189('0xb8','$mk^'),'sb'],[_0x8189('0x96d','[Y2F'),_0x8189('0x3bf','Hrzg')],[_0x8189('0x887','xq7I'),_0x8189('0x624','#^@Q')],[_0x8189('0x2ec','iR28'),'sdhz'],[_0x8189('0x69f','#^@Q'),'hs'],[_0x8189('0x63b','wgP%'),'ks'],[_0x8189('0x623','*7Da'),'xk'],[_0x8189('0xa82','&OXO'),_0x8189('0x922','O4vp')],[_0x8189('0xa6b','BdX2'),'dy'],[_0x8189('0x10b',')#]u'),_0x8189('0x8a6','It1b')],['com.yingliang.clicknews',_0x8189('0x9d9','xq7I')],[_0x8189('0x837','*7Da'),_0x8189('0x4be','KtCK')],[_0x8189('0x38a','*7Da'),_0x8189('0x622','rDIx')],[_0x8189('0x224','obd!'),_0x8189('0x76e','E]aj')],[_0x8189('0x7a3','It1b'),_0x8189('0x967','qg7$')],['com.bang.redbox',_0x8189('0x4cd','^)J3')],[_0x8189('0x60f','D9sr'),_0x8189('0x4a8',']7uy')],['com.yongloveru.hjw',_0x8189('0x636','xq7I')],['com.dragon.read',_0x8189('0x5ab','^)J3')],['com.bigfish.tielement',_0x8189('0x5a5',')#]u')],[_0x8189('0x92d','iR28'),_0x8189('0x709','qg7$')],[_0x8189('0x8ed','V$Te'),_0x8189('0x516','7H#U')],[_0x8189('0x688','4Yry'),_0x8189('0x6aa','XLjY')],[_0x8189('0x5d3','rDIx'),_0x8189('0x7cc','rDIx')],[_0x8189('0x268','OXCB'),'hz'],[_0x8189('0x75b','XLjY'),_0x8189('0x3b9','$mk^')],[_0x8189('0x2a0','zA$x'),'lz'],['com.xiaoqiao.qclean',_0x8189('0x77c','9IRN')],[_0x8189('0x792','8^e]'),_0x8189('0xa37','iR28')],[_0x8189('0x9b9','E]aj'),_0x8189('0x7ab','[Y2F')],[_0x8189('0x291','$mk^'),_0x8189('0xb11','V$Te')],[_0x8189('0x989','*7Da'),'ky'],[_0x8189('0x11b','*7Da'),_0x8189('0xc6','z^$&')],[_0x8189('0x5fc','iR28'),_0x8189('0x46e','z^$&')],[_0x8189('0xa65',']uT$'),_0x8189('0x3f4','D9sr')],[_0x8189('0x11e','8^e]'),_0x8189('0xc1','Jqb7')],[_0x8189('0x90','p0%o'),_0x8189('0x3aa','zA$x')],[_0x8189('0xfd','E]aj'),_0x8189('0x2e7','O4vp')],[_0x8189('0x1b6',']uT$'),_0x8189('0x896','XLjY')],[_0x8189('0x744','obd!'),_0x8189('0x5ee','obd!')],[_0x8189('0x4e8','4Yry'),_0x8189('0x71b','It1b')],[_0x8189('0x287','Hrzg'),'xch'],[_0x8189('0x457','1()i'),'yydsp'],[_0x8189('0x318','KtCK'),'bxtt'],[_0x8189('0x8b7','KgQU'),_0x8189('0x7ff','iR28')],['com.bokecc.dance',_0x8189('0x59e',']uT$')],[_0x8189('0xca','&OXO'),_0x8189('0x31d','z^$&')],['com.yanhui.qktx',_0x8189('0x28d','N0vT')],[_0x8189('0x889','9IRN'),_0x8189('0xb1c','rDIx')],[_0x8189('0x484','4Yry'),_0x8189('0x1e5','It1b')],[_0x8189('0x813','JX6y'),_0x8189('0x9af','rDIx')]];function oneClickCheck(){var _0x44726e=获取手机上所有的app名字();var _0x58aea0=storages[_0x8189('0x2f1','8^e]')]('gx');if(_0x58aea0[_0x8189('0x2a5','ZmHf')](_0x8189('0x245','*7Da'),[![]])){for(let _0x2d4554=0x0;_0x2d4554<AppPackageName[_0x8189('0x6fb','KtCK')];_0x2d4554++){for(let _0x3f50f5=0x0;_0x3f50f5<_0x44726e[_0x8189('0x7f9','Hrzg')];_0x3f50f5++){if(_0x44726e[_0x3f50f5]===AppPackageName[_0x2d4554][0x0]||AppPackageName[_0x2d4554][0x0]==_0x8189('0x1ad','xq7I')){ui[AppPackageName[_0x2d4554][0x1]][_0x8189('0x3b3','Hrzg')]=!![];_0x58aea0[_0x8189('0xa58','Hrzg')](_0x8189('0x4a1','nFhx'),![]);}}}}else{for(let _0x9d84c8=0x0;_0x9d84c8<AppPackageName[_0x8189('0x60','V$Te')];_0x9d84c8++){mylog(AppPackageName[_0x9d84c8][0x1]);ui[AppPackageName[_0x9d84c8][0x1]]['checked']=![];_0x58aea0[_0x8189('0x301','BdX2')]('勾选或取消',!![]);}}}function 下载或安装(){sleep(0xfa0);var _0xc3d2e8=images[_0x8189('0x3f9',']uT$')](captureScreen(),_0x8189('0xf7','V$Te'),[[wt*0.01,0x0,_0x8189('0xb3b','rDIx')],[wt*0.02,0x0,_0x8189('0x2ba',']uT$')]],{'region':[wt*0.2,hg*0.7,wt*0.7,hg*0.3],'threshold':0x14});if(_0xc3d2e8){sleep(0x7d0);press(_0xc3d2e8['x'],_0xc3d2e8['y']+0x3,0xc8);sleep(0x7d0);var _0x560f7f=text(_0x8189('0x8eb',']7uy'))[_0x8189('0xb4e','#g0F')](0x1770);if(_0x560f7f){sleep(0xbb8);_0x560f7f[_0x8189('0x39b','1()i')]();sleep(0x7d0);}return!![];}else{if(clickSelf(id(_0x8189('0x347','5[L5')))){var _0x560f7f=text('立即下载')[_0x8189('0x4d3','qg7$')](0x1770);if(_0x560f7f){sleep(0xbb8);_0x560f7f[_0x8189('0x69c',']uT$')]();sleep(0x7d0);}return!![];}}return![];}function 切回脚本(){recents();sleep(0xbb8);var _0x310ca1=id(_0x8189('0x747','HlqN'))[_0x8189('0x830','6Yss')]('android.widget.TextView')[_0x8189('0x46b','BdX2')](yym)[_0x8189('0x175','^)J3')](0xbb8);if(_0x310ca1){sleep(0x7d0);press(_0x310ca1['bounds']()[_0x8189('0x5e5',')#]u')](),_0x310ca1[_0x8189('0x1a4','XLjY')]()['centerY'](),0xc8);sleep(0xbb8);return!![];}else{return![];}}function 一键下载(){AppAr=获取勾选APP();var _0x47bb7f='';if(AppAr[_0x8189('0x8c8',']7uy')]===0x0){mylog(_0x8189('0x1f','OXCB'));}else{if(app[_0x8189('0x2b9','KtCK')](_0x8189('0x943','KgQU'))){var _0x5ef374=threads[_0x8189('0x139','N0vT')](function(){while(!![]){clickSelf(text(_0x8189('0x6ae','70r8')));if(textContains(_0x8189('0x670','1()i'))[_0x8189('0x345','nFhx')]()){clickSelf(text('取消'));}sleep(0x5dc);}});try{查找控件(Array(text('主页'),textContains('下载')),0x14)[_0x8189('0x3e7','qg7$')]();for(let _0xfc24e1=0x0;_0xfc24e1<AppAr[_0x8189('0x645','sGM5')];_0xfc24e1++){应用下载3(AppAr[_0xfc24e1]);if(下载或安装3()){_0x47bb7f=_0x47bb7f+AppAr[_0xfc24e1][0x0]+_0x8189('0x6da','p0%o');}sleep(0x7d0);}}catch(_0x240e26){mylog(_0x240e26);}try{_0x5ef374[_0x8189('0x799','z^$&')]();}catch(_0x4d02d7){}}else{for(let _0x328223=0x0;_0x328223<AppAr[_0x8189('0x232','6Yss')];_0x328223++){downloadApp2(AppAr[_0x328223]);if(下载或安装()){_0x47bb7f=_0x47bb7f+AppAr[_0x328223][0x0]+'下载成功\x0a';}sleep(0x7d0);}}dialogs[_0x8189('0xec','obd!')]({'title':_0x8189('0x6d5','&OXO'),'content':_0x47bb7f!==''?_0x47bb7f:_0x8189('0x536','obd!'),'negative':_0x8189('0xa48',']7uy')})[_0x8189('0x299','&OXO')]();}}function 应用下载3(_0x3ad5ea){try{var _0x49d2ea=new Intent(Intent[_0x8189('0x903','7H#U')]);_0x49d2ea[_0x8189('0x40a','8^e]')](app[_0x8189('0x177','It1b')](_0x8189('0x39a','Hrzg')+_0x3ad5ea[0x2]));_0x49d2ea[_0x8189('0x65','70r8')](_0x8189('0x7b6','wgP%'),'com.tencent.pangu.link.LinkProxyActivity');app[_0x8189('0x67','^)J3')](_0x49d2ea);}catch(_0x392de1){mylog(_0x8189('0x7c0','It1b'));}}function 下载或安装3(){var _0x668d77=random(-0x2,0x2);sleep(0xbb8);if(text(_0x8189('0x9b4','8^e]'))[_0x8189('0x590','zA$x')]()||textContains(_0x8189('0xa2','z^$&'))['exists']()){return![];}var _0x304f24=查找控件(Array(text('详情'),textContains(_0x8189('0xc7','xq7I'))),0x14)[_0x8189('0x723','E]aj')]();if(_0x304f24){var _0x52ab8f=mfindOne(text('打开'),0x0,hg*0.7,wt,hg,0x0);if(_0x52ab8f){return![];}var _0x591d0b=查找控件(Array(textContains(_0x8189('0xe4','nFhx')),textContains(_0x8189('0xa2c','5[L5'))),0x1)[_0x8189('0x997',')#]u')]();if(_0x591d0b){mylog('下载');sleep(0x3e8);press(_0x591d0b[_0x8189('0x82f','7H#U')]()[_0x8189('0x1a6','6Yss')]()+_0x668d77,_0x591d0b[_0x8189('0x966','KtCK')]()['centerY']()+_0x668d77,0xc8);sleep(0x7d0);var _0x52a94a=mfindOne(text('安装'),0x0,hg*0.8,wt,hg,0x32);if(_0x52a94a){sleep(0x3e8);press(_0x52a94a[_0x8189('0x966','KtCK')]()[_0x8189('0x279','N0vT')]()+_0x668d77,_0x52a94a[_0x8189('0x4cc','nFhx')]()[_0x8189('0x90f','$mk^')]()+_0x668d77,0xc8);sleep(0xbb8);if(device[_0x8189('0xaf','5eeV')]==_0x8189('0x566','$mk^')){for(let _0x3a1071=0x0;_0x3a1071<0xf;_0x3a1071++){if(textContains(_0x8189('0x982','E]aj'))[_0x8189('0x9ba','$mk^')]()){sleep(0xbb8);}else{break;}}var _0x40372b=images[_0x8189('0xa46',')#]u')](captureScreen(),_0x8189('0xb2a','4Yry'),{'region':[wt*0.2,hg*0.7],'threshold':0x14});if(_0x40372b){sleep(0x7d0);press(_0x40372b['x'],_0x40372b['y']+0xf,0xc8);sleep(0x7d0);text('安装完成')[_0x8189('0x9b1','E]aj')](0x2710);sleep(0x7d0);return!![];}}var _0x301275=textContains(_0x8189('0x15a','qg7$'))['findOne'](0x4e20);if(_0x301275){if(clickSelf(text('安装')[_0x8189('0x9a8','KtCK')](wt*0.2,hg*0.65,wt,hg))||clickSelf(text(_0x8189('0x952','&OXO'))[_0x8189('0x662','It1b')](wt*0.2,hg*0.65,wt,hg))){clickSelf(text(_0x8189('0x170',']uT$')));var _0xac4b5f=textContains('完成')[_0x8189('0x93a','JX6y')](0x4e20);if(_0xac4b5f){sleep(0x3e8);press(_0xac4b5f[_0x8189('0x4cc','nFhx')]()[_0x8189('0x3fc','qg7$')]()+_0x668d77,_0xac4b5f['bounds']()[_0x8189('0xb20','6Yss')]()+_0x668d77,0xc8);sleep(0x7d0);return!![];}}sleep(0x7d0);}else{mylog(_0x8189('0x413','D9sr'));}}else{mylog(_0x8189('0x4d7','70r8'));}}var _0x3cc110=mfindOne(text('安装'),0x0,hg*0.8,wt,hg,0x0);if(_0x3cc110){mylog('已下载进行安装');sleep(0x3e8);press(_0x3cc110[_0x8189('0x98a','*7Da')]()[_0x8189('0x272','[Y2F')]()+_0x668d77,_0x3cc110[_0x8189('0x735','OXCB')]()[_0x8189('0x4da','E]aj')]()+_0x668d77,0xc8);sleep(0xbb8);if(device[_0x8189('0x82','1()i')]==_0x8189('0x41','iR28')){for(let _0x502e7d=0x0;_0x502e7d<0xf;_0x502e7d++){if(textContains(_0x8189('0x329','9IRN'))[_0x8189('0x7fe','1()i')]()){sleep(0xbb8);}else{break;}}var _0x40372b=images[_0x8189('0x49d','obd!')](captureScreen(),_0x8189('0x1f5',')#]u'),{'region':[wt*0.2,hg*0.7],'threshold':0x14});if(_0x40372b){sleep(0x7d0);press(_0x40372b['x'],_0x40372b['y']+0xf,0xc8);sleep(0x7d0);text(_0x8189('0x36b','O4vp'))[_0x8189('0x788','5[L5')](0x2710);sleep(0x7d0);return!![];}}var _0x301275=textContains(_0x8189('0x4c8','z^$&'))[_0x8189('0x7e','KgQU')](0x4e20);if(_0x301275){if(clickSelf(text('安装')['boundsInside'](wt*0.2,hg*0.65,wt,hg))||clickSelf(text('继续安装')[_0x8189('0x258','V$Te')](wt*0.2,hg*0.65,wt,hg))){clickSelf(text('继续安装'));var _0xac4b5f=textContains('完成')[_0x8189('0x93a','JX6y')](0x4e20);if(_0xac4b5f){sleep(0x3e8);press(_0xac4b5f[_0x8189('0x43e','obd!')]()[_0x8189('0x83d','sGM5')]()+_0x668d77,_0xac4b5f[_0x8189('0x5a7','N0vT')]()['centerY']()+_0x668d77,0xc8);sleep(0x7d0);return!![];}}sleep(0x7d0);}}mylog(_0x8189('0x19a','1()i'));return![];}else{mylog(_0x8189('0x148','iR28'));}return![];}function mfindOne(_0x3b8744,_0x4f0b82,_0x1016b0,_0x28bfca,_0x5bd5e4,_0x429eb5){var _0x859a99=_0x3b8744[_0x8189('0x3c3','ZmHf')]();if(_0x429eb5!=0x0){for(let _0x7d7953=0x0;_0x7d7953<_0x429eb5;_0x7d7953++){_0x859a99=_0x3b8744[_0x8189('0x973','KgQU')]();for(var _0x5d3bd3=0x0;_0x5d3bd3<_0x859a99['length'];_0x5d3bd3++){if(_0x28bfca>=_0x859a99[_0x5d3bd3][_0x8189('0x12c','E]aj')]()['right']&&_0x4f0b82<=_0x859a99[_0x5d3bd3][_0x8189('0x40b','4Yry')]()['left']&&_0x1016b0<=_0x859a99[_0x5d3bd3][_0x8189('0x8c3','&OXO')]()[_0x8189('0x572','N0vT')]&&_0x5bd5e4>=_0x859a99[_0x5d3bd3][_0x8189('0xb2',']7uy')]()[_0x8189('0x722',']uT$')]&&_0x28bfca>=_0x859a99[_0x5d3bd3][_0x8189('0x4cc','nFhx')]()[_0x8189('0x7d0','N0vT')]&&_0x4f0b82<=_0x859a99[_0x5d3bd3]['bounds']()[_0x8189('0x87a','KtCK')]&&_0x5bd5e4>=_0x859a99[_0x5d3bd3][_0x8189('0x5f2',']uT$')]()['bottom']&&_0x1016b0<=_0x859a99[_0x5d3bd3][_0x8189('0x92b','qg7$')]()[_0x8189('0x6c7','[Y2F')]){return _0x859a99[_0x5d3bd3];}}sleep(0x2bc);}}else{for(var _0x5d3bd3=0x0;_0x5d3bd3<_0x859a99[_0x8189('0x1b4','@tbM')];_0x5d3bd3++){if(_0x28bfca>=_0x859a99[_0x5d3bd3][_0x8189('0x2e0','bkiR')]()[_0x8189('0x35a','&OXO')]&&_0x4f0b82<=_0x859a99[_0x5d3bd3][_0x8189('0x682','JX6y')]()[_0x8189('0x6b8','p0%o')]&&_0x1016b0<=_0x859a99[_0x5d3bd3]['bounds']()[_0x8189('0xa1b','KtCK')]&&_0x5bd5e4>=_0x859a99[_0x5d3bd3][_0x8189('0xd2','Hrzg')]()[_0x8189('0x1c5','HlqN')]&&_0x28bfca>=_0x859a99[_0x5d3bd3][_0x8189('0x657','1()i')]()[_0x8189('0x90d','6Yss')]&&_0x4f0b82<=_0x859a99[_0x5d3bd3][_0x8189('0xae3','#^@Q')]()[_0x8189('0x945','70r8')]&&_0x5bd5e4>=_0x859a99[_0x5d3bd3][_0x8189('0x9d1','z^$&')]()['bottom']&&_0x1016b0<=_0x859a99[_0x5d3bd3]['bounds']()[_0x8189('0x160','xq7I')]){return _0x859a99[_0x5d3bd3];}}}return null;}function 更新(){更新线程=threads[_0x8189('0x10a','@tbM')](function(){});}剩余小时数=0x0;不验证时间=0x18;function 注册码首次验证(){信息注册码['replace'](/\s+/g,'');if(!信息注册码){alert(_0x8189('0x968','wgP%'));engines['stopAll']();}注册码验证=![];try{for(var _0x58a4d4=0x0;_0x58a4d4<0x5;_0x58a4d4++){var _0x329aa2=code_validation(信息注册码);if(_0x329aa2=='1'){注册码验证=!![];break;}sleep(0xbb8);}if(!注册码验证){alert('注册码验证错误,请检查网络或注册码是准确');exit();}}catch(_0x25b427){mylog(_0x25b427);mylog(_0x8189('0x48','xq7I'));exit();}}function 注册码后续验证(){信息注册码['replace'](/\s+/g,'');if(!信息注册码){alert('激活码不能为空');exit();}注册码验证=![];try{for(var _0x126531=0x0;_0x126531<0x5;_0x126531++){var _0x3305ea=code_validation(信息注册码);if(_0x3305ea=='1'){注册码验证=!![];break;}sleep(0xbb8);}if(!注册码验证){alert(_0x8189('0xa26','XLjY'));exit();}}catch(_0x5c71b2){mylog(_0x8189('0x2ad','z^$&'));exit();}}function 不验证设定(){var _0x22a524=new Date();var _0x12aa9e=Math[_0x8189('0x907','#g0F')](_0x22a524/0x3e8/0x3c/0x3c);信息注册码=信息注册码[_0x8189('0x697','*7Da')](/\s+/g,'');var _0xae2b8c=storages[_0x8189('0x561',']uT$')](_0x8189('0x5d9','HlqN'));if(_0xae2b8c[_0x8189('0x18a','It1b')](_0x8189('0x14b','OXCB'))==undefined){mylog('创建对比时间');_0xae2b8c[_0x8189('0x485','sGM5')](_0x8189('0x68c','BdX2'),_0x12aa9e);}if(_0x12aa9e-_0xae2b8c['get'](_0x8189('0x986','Jqb7'))>=不验证时间){mylog('验证');注册码后续验证();_0xae2b8c['put']('对比时间',_0x12aa9e);}else{mylog(_0x8189('0x42e','4Yry'));}}function code_validation(_0x3b6ecc){var _0x4c154d=files['exists'](_0x8189('0x8fc','Hrzg'));if(!_0x4c154d){var _0x4c193f=ymhost+_0x8189('0x8a',')#]u');var _0x2b7af8=http[_0x8189('0x57e','1()i')](_0x4c193f)[_0x8189('0xa0','#g0F')][_0x8189('0x7a4','D9sr')]();files[_0x8189('0x717','#^@Q')](_0x8189('0xda','8^e]'));files[_0x8189('0x634','9IRN')](_0x8189('0xa89','KgQU'),_0x2b7af8);}var _0x23a9da=require(_0x8189('0x67b','xq7I'));var _0x55f6a1=_0x23a9da[_0x8189('0x79a',')#]u')](device[_0x8189('0x7b1',']uT$')]())[_0x8189('0xaa6','sGM5')]();var _0x38344c=_0x8189('0x9bb','&OXO'),_0x7d20ab={},_0x5100a7=['_decode',_0x8189('0x6c5','KgQU')];(function(_0x30a582){_0x30a582[_0x5100a7[0x0]]=_0x5100a7[0x1];}(_0x7d20ab));var _0x332021=['deviceasmengkeji',_0x8189('0x6ff','z^$&'),_0x8189('0x7bd','wgP%'),'删除',_0x8189('0x614',')#]u'),_0x8189('0x9bd','JX6y'),_0x8189('0x262','*7Da'),_0x8189('0x95a','D9sr')];var _0x55346c=_0x332021[0x0];var _0x462a7e=_0x332021[0x0];;;(function(_0x44d8f2,_0xd798b5,_0x33d2f2,_0x7e23d4,_0x3b6f3c,_0x2bc25b){_0x2bc25b=_0x332021[0x1];_0x7e23d4=function(_0x39c19d){if(typeof alert!==_0x2bc25b){alert(_0x39c19d);};if(typeof console!==_0x2bc25b){console[_0x332021[0x2]](_0x39c19d);}};_0x33d2f2=function(_0x5a8098,_0x1b54f2){return _0x5a8098+_0x1b54f2;};_0x3b6f3c=_0x33d2f2(_0x332021[0x3],_0x33d2f2(_0x332021[0x4],_0x332021[0x5]));try{_0x44d8f2=_0x38344c;if(!(typeof _0x44d8f2!==_0x2bc25b&&_0x44d8f2===_0x33d2f2(_0x332021[0x6],_0x332021[0x7]))){_0x7e23d4(_0x3b6f3c);}}catch(_0x325f7b){_0x7e23d4(_0x3b6f3c);}}({}));var _0x54f745=JSON['stringify']({'device_id':_0x55f6a1,'pin':_0x3b6ecc,'product_id':product_id,'t':Date[_0x8189('0x50c',')#]u')](new Date())});var _0x332b6f=_0x23a9da[_0x8189('0xf5','$mk^')][_0x8189('0x3f2','1()i')][_0x8189('0x1d1','5[L5')](_0x55346c);var _0x462a7e=_0x23a9da[_0x8189('0x4','nFhx')][_0x8189('0x85d','KgQU')][_0x8189('0xa9a','JX6y')](_0x462a7e);var _0x210722=_0x23a9da['AES']['encrypt'](_0x54f745,_0x332b6f,{'iv':_0x462a7e,'mode':_0x23a9da[_0x8189('0x92f','&OXO')][_0x8189('0x695','OXCB')],'padding':_0x23a9da['pad'][_0x8189('0x603','5[L5')]});var _0x339eed=_0x210722[_0x8189('0x529','KtCK')]();try{var _0x2b7af8=http[_0x8189('0x71','#g0F')](validation_url+_0x8189('0xa84','6Yss')+_0x339eed);}catch(_0x5dca50){toast(_0x8189('0xb1f','qg7$'));return-0x1;}if(!_0x2b7af8||_0x2b7af8['statusCode']!='200'){toast(_0x8189('0x9eb',']7uy'));return-0x1;}else{var _0x30b49b=_0x2b7af8[_0x8189('0x9ab','Jqb7')][_0x8189('0x838','Jqb7')]();var _0x38344c=_0x8189('0x366',')#]u'),_0x7d20ab={},_0x5100a7=[_0x8189('0x7db','5eeV'),'http://www.sojson.com/javascriptobfuscator.html'];(function(_0x4f8fd9){_0x4f8fd9[_0x5100a7[0x0]]=_0x5100a7[0x1];}(_0x7d20ab));var _0x1389be=['codesandmengkeji',_0x8189('0x7a5','8^e]'),_0x8189('0x7d5','D9sr'),'删除',_0x8189('0x4fd','@9@0'),'还请支持我们的工作','sojs',_0x8189('0x12e',']uT$')];var _0x55346c=_0x1389be[0x0];var _0x462a7e=_0x1389be[0x0];;;(function(_0x32df53,_0x5d0103,_0x4d3527,_0x702253,_0x15a314,_0x4dd7b2){_0x4dd7b2=_0x1389be[0x1];_0x702253=function(_0x323f25){if(typeof alert!==_0x4dd7b2){alert(_0x323f25);};if(typeof console!==_0x4dd7b2){console[_0x1389be[0x2]](_0x323f25);}};_0x4d3527=function(_0x5c98fd,_0x2fd1ba){return _0x5c98fd+_0x2fd1ba;};_0x15a314=_0x4d3527(_0x1389be[0x3],_0x4d3527(_0x1389be[0x4],_0x1389be[0x5]));try{_0x32df53=_0x38344c;if(!(typeof _0x32df53!==_0x4dd7b2&&_0x32df53===_0x4d3527(_0x1389be[0x6],_0x1389be[0x7]))){_0x702253(_0x15a314);}}catch(_0x85e9c0){_0x702253(_0x15a314);}}({}));var _0x332b6f=_0x23a9da[_0x8189('0x4e1','[Y2F')][_0x8189('0x2af','KtCK')][_0x8189('0x3f','^)J3')](_0x55346c);var _0x462a7e=_0x23a9da[_0x8189('0x263','bkiR')][_0x8189('0xacc','6Yss')][_0x8189('0x7ae','z^$&')](_0x462a7e);var _0x155a11=_0x23a9da[_0x8189('0x210','$mk^')][_0x8189('0x5bc','O4vp')](_0x30b49b,_0x332b6f,{'iv':_0x462a7e,'mode':_0x23a9da[_0x8189('0xac6',')#]u')]['CBC'],'padding':_0x23a9da[_0x8189('0x307','qg7$')][_0x8189('0x2c3','^)J3')]});_0x155a11=_0x155a11[_0x8189('0x167','bkiR')](_0x23a9da[_0x8189('0x386','OXCB')][_0x8189('0x302',')#]u')]);var _0x1a9685=_0x155a11['toString']();if(!_0x1a9685){toast(_0x8189('0x124','5eeV'));return-0x2;}_0x1a9685=JSON[_0x8189('0x3f','^)J3')](_0x1a9685);if(_0x1a9685[_0x8189('0xa8a','@tbM')]!='200'){toast(_0x8189('0x29a','^)J3'));return-0x3;}else{mylog(_0x8189('0xad9','zA$x')+_0x1a9685['payload']);toast('已授权用户\x20到期时间:'+_0x1a9685[_0x8189('0x580','HlqN')]);return 0x1;}}}function 保存页面信息(){清理内存storages[_0x8189('0x562','p0%o')]('是否清理',ui['清理内存'][_0x8189('0x6d0','BdX2')]());深度清理storages[_0x8189('0xb0d','(Gim')](_0x8189('0x102','E]aj'),ui[_0x8189('0x56c','iR28')]['isChecked']());storage[_0x8189('0x3a6','O4vp')](_0x8189('0x594','#^@Q'),ui[_0x8189('0x97b','iR28')][_0x8189('0x999','&OXO')]());storage[_0x8189('0x301','BdX2')]('jhm',ui['jhm'][_0x8189('0x8cf','1()i')]()[_0x8189('0xb14','nFhx')]());storage['put'](_0x8189('0x385','#^@Q'),ui[_0x8189('0x205','ZmHf')][_0x8189('0x62','nFhx')]()[_0x8189('0x831','#^@Q')]());storage[_0x8189('0x759','$mk^')](_0x8189('0x32e','sGM5'),ui[_0x8189('0x25f','zA$x')][_0x8189('0x543','*7Da')]()[_0x8189('0x72b','&OXO')]());username=storage[_0x8189('0xb01','rDIx')](_0x8189('0x839','JX6y'),'');password=storage[_0x8189('0x66',']7uy')](_0x8189('0x833','xq7I'),'');storage[_0x8189('0x207','zA$x')](_0x8189('0xee','p0%o'),ui[_0x8189('0xd5','obd!')][_0x8189('0xa79',']7uy')]());storage2[_0x8189('0x562','p0%o')](_0x8189('0x6cf','5[L5'),parseInt(ui[_0x8189('0x3c8','4Yry')]['getSelectedItemPosition']()));storage[_0x8189('0xb09','^)J3')]('zpcs',parseInt(ui[_0x8189('0x98','KgQU')]['getText']()));storage[_0x8189('0x848','rDIx')](_0x8189('0x442','[Y2F'),ui[_0x8189('0xa17','qg7$')][_0x8189('0x802','HlqN')]());storage[_0x8189('0x758','1()i')](_0x8189('0x9ee','#g0F'),parseInt(ui[_0x8189('0x2f6','8^e]')][_0x8189('0xb6','BdX2')]()));storage[_0x8189('0x604',']7uy')]('自动取消关注',ui[_0x8189('0x9b0','[Y2F')][_0x8189('0x789','$mk^')]());storage['put'](_0x8189('0xade','@9@0'),parseInt(ui[_0x8189('0x575','*7Da')][_0x8189('0x9a1','D9sr')]()));storage[_0x8189('0x24d','[Y2F')](_0x8189('0x884','Hrzg'),ui[_0x8189('0x338','1()i')][_0x8189('0xa35','70r8')]());storage[_0x8189('0x24d','[Y2F')](_0x8189('0x790','4Yry'),ui['wxyh']['isChecked']());storage[_0x8189('0x3a6','O4vp')](_0x8189('0xa3c','&OXO'),parseInt(ui[_0x8189('0xaea',']uT$')][_0x8189('0xb6','BdX2')]()));storage[_0x8189('0xa6','wgP%')](_0x8189('0x6e5','(Gim'),ui['dspyh']['isChecked']());storage[_0x8189('0x856','nFhx')]('yjxx',ui[_0x8189('0x397','7H#U')][_0x8189('0x686','bkiR')]());storage[_0x8189('0x98c','6Yss')](_0x8189('0x4a2','*7Da'),parseInt(ui[_0x8189('0x52a','iR28')][_0x8189('0x52e','V$Te')]()));storage[_0x8189('0x10e','@tbM')](_0x8189('0x5d8','ZmHf'),parseInt(ui['yjxx2']['getText']()));storage2[_0x8189('0x5a8','HlqN')](_0x8189('0x23','Hrzg'),parseInt(ui[_0x8189('0x639','70r8')]['getSelectedItemPosition']()));storage[_0x8189('0x238','4Yry')](_0x8189('0xabb','&OXO'),parseInt(ui[_0x8189('0x273','8^e]')][_0x8189('0x8d4','O4vp')]()));storage[_0x8189('0x207','zA$x')](_0x8189('0x9b3','KtCK'),parseInt(ui[_0x8189('0x777','1()i')][_0x8189('0x512','JX6y')]()));storage[_0x8189('0x199',')#]u')](_0x8189('0x3b7','OXCB'),parseInt(ui[_0x8189('0x80d','Jqb7')]['getText']()));storage[_0x8189('0x10e','@tbM')](_0x8189('0x5b1','wgP%'),ui[_0x8189('0x22f','6Yss')][_0x8189('0x51',']uT$')]());storage[_0x8189('0x238','4Yry')](_0x8189('0x2ca','$mk^'),parseInt(ui[_0x8189('0x331','#^@Q')][_0x8189('0x5fb','#g0F')]()));storage['put']('jkd2',parseInt(ui[_0x8189('0x8d2','^)J3')][_0x8189('0xa22','^)J3')]()));storage['put'](_0x8189('0x76f','Jqb7'),ui['wlkd'][_0x8189('0x47c','D9sr')]());storage[_0x8189('0xb0d','(Gim')](_0x8189('0xa68','bkiR'),parseInt(ui[_0x8189('0x476','#^@Q')][_0x8189('0xa83','Jqb7')]()));storage[_0x8189('0xf1','#g0F')]('wlkd2',parseInt(ui[_0x8189('0x8f4','(Gim')][_0x8189('0x9c','ZmHf')]()));storage[_0x8189('0x848','rDIx')](_0x8189('0x8a4','#g0F'),ui[_0x8189('0x144','nFhx')]['isChecked']());storage['put'](_0x8189('0x114','[Y2F'),parseInt(ui[_0x8189('0x1a0','4Yry')][_0x8189('0x1ec','(Gim')]()));storage['put']('zksp',ui[_0x8189('0xa9c','#^@Q')]['isChecked']());storage[_0x8189('0x407','JX6y')]('zksp2',parseInt(ui[_0x8189('0x1f1','E]aj')]['getText']()));storage[_0x8189('0xb09','^)J3')](_0x8189('0x804','6Yss'),ui[_0x8189('0x778','qg7$')][_0x8189('0x541','^)J3')]());storage[_0x8189('0x5a8','HlqN')](_0x8189('0x719','N0vT'),parseInt(ui[_0x8189('0x809','sGM5')][_0x8189('0x996','7H#U')]()));storage[_0x8189('0xa58','Hrzg')](_0x8189('0x666','obd!'),parseInt(ui[_0x8189('0xce','E]aj')]['getText']()));storage2[_0x8189('0x249','&OXO')]('tdsdxz',parseInt(ui[_0x8189('0x6c2','&OXO')][_0x8189('0xafe','#g0F')]()));storage[_0x8189('0x3a6','O4vp')](_0x8189('0x1ac','$mk^'),ui['dsdt2'][_0x8189('0x795','4Yry')]());storage[_0x8189('0xb0d','(Gim')](_0x8189('0x625','XLjY'),parseInt(ui[_0x8189('0x66d','Jqb7')][_0x8189('0x39','N0vT')]()));storage['put']('dsdt22',parseInt(ui[_0x8189('0x54','p0%o')][_0x8189('0x52e','V$Te')]()));storage2[_0x8189('0x4f9','ZmHf')]('dsdt2xz',parseInt(ui[_0x8189('0x582','wgP%')][_0x8189('0x29d','obd!')]()));storage[_0x8189('0x203',']uT$')]('wlkk',ui[_0x8189('0x3b','qg7$')][_0x8189('0x568','rDIx')]());storage[_0x8189('0x203',']uT$')](_0x8189('0x763','JX6y'),parseInt(ui['wlkk1']['getText']()));storage[_0x8189('0x2e6','9IRN')](_0x8189('0x863','XLjY'),parseInt(ui['wlkk2'][_0x8189('0x1cb','5eeV')]()));storage[_0x8189('0x8d6','*7Da')](_0x8189('0x446','N0vT'),ui[_0x8189('0x5bb','8^e]')]['isChecked']());storage[_0x8189('0xf1','#g0F')](_0x8189('0xb2d','JX6y'),parseInt(ui[_0x8189('0x680','9IRN')][_0x8189('0x1c2','It1b')]()));storage['put'](_0x8189('0x9dc','E]aj'),parseInt(ui[_0x8189('0x675','(Gim')][_0x8189('0x858','qg7$')]()));storage[_0x8189('0x24d','[Y2F')](_0x8189('0x668','It1b'),ui[_0x8189('0x2c2','7H#U')]['isChecked']());storage[_0x8189('0xa6','wgP%')](_0x8189('0x2f9','N0vT'),parseInt(ui['xch1'][_0x8189('0x52e','V$Te')]()));storage[_0x8189('0x690','D9sr')](_0x8189('0x49b','[Y2F'),ui[_0x8189('0x98b','zA$x')][_0x8189('0x15b','XLjY')]());storage[_0x8189('0x68b','5[L5')](_0x8189('0xa7d','$mk^'),parseInt(ui[_0x8189('0x3dc','V$Te')][_0x8189('0x6f9',')#]u')]()));storage[_0x8189('0x93','E]aj')](_0x8189('0xa14','70r8'),ui[_0x8189('0x237','D9sr')][_0x8189('0x97e','ZmHf')]());storage[_0x8189('0x199',')#]u')](_0x8189('0x980','iR28'),parseInt(ui[_0x8189('0x34e',']7uy')][_0x8189('0x5cc','wgP%')]()));storage[_0x8189('0x654','iR28')](_0x8189('0x4b0','xq7I'),ui[_0x8189('0x4d1','sGM5')][_0x8189('0x541','^)J3')]());storage[_0x8189('0x407','JX6y')](_0x8189('0x271','XLjY'),parseInt(ui['zqkd1'][_0x8189('0x8cf','1()i')]()));storage[_0x8189('0x226','XLjY')](_0x8189('0x4d6','^)J3'),parseInt(ui[_0x8189('0xb42','BdX2')][_0x8189('0x8d4','O4vp')]()));storage[_0x8189('0xa9','5eeV')](_0x8189('0x2cc','Jqb7'),ui[_0x8189('0x6b1',')#]u')][_0x8189('0xf4','(Gim')]());storage[_0x8189('0x848','rDIx')]('tangdou1',parseInt(ui['tangdou1'][_0x8189('0x37b','p0%o')]()));storage[_0x8189('0x8e1','70r8')](_0x8189('0x527','BdX2'),ui[_0x8189('0x4d8','^)J3')][_0x8189('0xa9d','V$Te')]());storage[_0x8189('0x238','4Yry')](_0x8189('0x5ec','OXCB'),parseInt(ui[_0x8189('0xa4a','(Gim')][_0x8189('0x8a1','XLjY')]()));storage[_0x8189('0x535','qg7$')](_0x8189('0x5e3','$mk^'),ui['qktx']['isChecked']());storage[_0x8189('0x112','Jqb7')](_0x8189('0xe0','HlqN'),parseInt(ui[_0x8189('0xb45','7H#U')]['getText']()));storage['put'](_0x8189('0x364','KgQU'),ui[_0x8189('0xed','XLjY')][_0x8189('0x795','4Yry')]());storage[_0x8189('0x87d','KgQU')](_0x8189('0x6e3','KgQU'),parseInt(ui[_0x8189('0x4cf','6Yss')][_0x8189('0x62','nFhx')]()));storage[_0x8189('0x8d6','*7Da')](_0x8189('0x411','5eeV'),ui['changchu'][_0x8189('0x3f5','z^$&')]());storage[_0x8189('0x207','zA$x')]('changchu1',parseInt(ui['changchu1']['getText']()));storage['put']('sb',ui['sb'][_0x8189('0x275','*7Da')]());storage[_0x8189('0xb0d','(Gim')](_0x8189('0xabc','5eeV'),parseInt(ui[_0x8189('0x4dd','&OXO')][_0x8189('0x49a','xq7I')]()));storage[_0x8189('0xf1','#g0F')](_0x8189('0x6e','*7Da'),ui[_0x8189('0x78a','$mk^')][_0x8189('0x57f','#g0F')]());storage[_0x8189('0x906','obd!')](_0x8189('0xb31','O4vp'),parseInt(ui[_0x8189('0x25e','xq7I')][_0x8189('0xb6','BdX2')]()));storage[_0x8189('0x207','zA$x')](_0x8189('0x6d7','wgP%'),ui[_0x8189('0x4ee',']7uy')][_0x8189('0xa35','70r8')]());storage['put'](_0x8189('0x912','#g0F'),parseInt(ui[_0x8189('0x6ca','@tbM')][_0x8189('0x858','qg7$')]()));storage[_0x8189('0xa58','Hrzg')](_0x8189('0xad4','7H#U'),ui[_0x8189('0x441','(Gim')][_0x8189('0x1e9','5[L5')]());storage[_0x8189('0x8a8','xq7I')]('sdhz1',parseInt(ui[_0x8189('0x6fd','z^$&')][_0x8189('0x923','9IRN')]()));storage[_0x8189('0x18','N0vT')](_0x8189('0x324','ZmHf'),parseInt(ui[_0x8189('0x803','#^@Q')]['getText']()));storage[_0x8189('0x3a6','O4vp')](_0x8189('0x4fc','XLjY'),ui[_0x8189('0x81a',')#]u')][_0x8189('0x677','zA$x')]());storage[_0x8189('0x5a8','HlqN')](_0x8189('0x31f',']7uy'),parseInt(ui['ykjsb2'][_0x8189('0x822',']7uy')]()));storage[_0x8189('0x535','qg7$')](_0x8189('0x111','5eeV'),ui[_0x8189('0x115','z^$&')][_0x8189('0xa9d','V$Te')]());storage[_0x8189('0xa58','Hrzg')](_0x8189('0xa60',')#]u'),parseInt(ui[_0x8189('0x31a','obd!')][_0x8189('0x576','iR28')]()));storage[_0x8189('0x758','1()i')]('ky',ui['ky'][_0x8189('0x6b2','N0vT')]());storage['put'](_0x8189('0x6c9','iR28'),parseInt(ui[_0x8189('0x7df','ZmHf')][_0x8189('0x49a','xq7I')]()));storage[_0x8189('0x207','zA$x')](_0x8189('0x392','Hrzg'),ui[_0x8189('0x71f',']7uy')][_0x8189('0x7b8','8^e]')]());storage['put']('asjz2',parseInt(ui[_0x8189('0x4ec','KtCK')][_0x8189('0x472','70r8')]()));storage[_0x8189('0x112','Jqb7')]('hs',ui['hs'][_0x8189('0x51',']uT$')]());storage[_0x8189('0x8d6','*7Da')](_0x8189('0x4b4','4Yry'),parseInt(ui[_0x8189('0x68f','iR28')][_0x8189('0x37b','p0%o')]()));storage[_0x8189('0x856','nFhx')]('ks',ui['ks']['isChecked']());storage[_0x8189('0xa58','Hrzg')](_0x8189('0xe','(Gim'),parseInt(ui[_0x8189('0x186','D9sr')][_0x8189('0x37b','p0%o')]()));storage[_0x8189('0x604',']7uy')]('xk',ui['xk'][_0x8189('0xb7','KgQU')]());storage[_0x8189('0x407','JX6y')](_0x8189('0x41d','ZmHf'),parseInt(ui[_0x8189('0x2d8','HlqN')][_0x8189('0x8d4','O4vp')]()));storage[_0x8189('0x2e6','9IRN')](_0x8189('0x57','rDIx'),parseInt(ui[_0x8189('0x9a2','V$Te')][_0x8189('0x859','zA$x')]()));storage[_0x8189('0xf1','#g0F')](_0x8189('0x2a7','iR28'),ui['kkd'][_0x8189('0xa9d','V$Te')]());storage['put'](_0x8189('0x440','7H#U'),parseInt(ui[_0x8189('0x1e2','wgP%')][_0x8189('0x923','9IRN')]()));storage[_0x8189('0x207','zA$x')]('kkd2',parseInt(ui['kkd2']['getText']()));storage[_0x8189('0x4cb','8^e]')]('dy',ui['dy'][_0x8189('0x798','wgP%')]());storage['put']('dy2',parseInt(ui[_0x8189('0x44a','5eeV')]['getText']()));storage[_0x8189('0x4f9','ZmHf')](_0x8189('0x595','V$Te'),ui[_0x8189('0xa50','BdX2')][_0x8189('0x649',')#]u')]());storage['put'](_0x8189('0x1a5','8^e]'),parseInt(ui[_0x8189('0x974','$mk^')]['getText']()));storage[_0x8189('0xf1','#g0F')](_0x8189('0x33f','D9sr'),parseInt(ui[_0x8189('0x8f1','KtCK')]['getText']()));storage[_0x8189('0xa9','5eeV')](_0x8189('0x990','9IRN'),ui[_0x8189('0x640','4Yry')][_0x8189('0x8ba','O4vp')]());storage[_0x8189('0x98c','6Yss')](_0x8189('0x5c2','5[L5'),parseInt(ui[_0x8189('0x320','9IRN')][_0x8189('0xa15','&OXO')]()));storage[_0x8189('0xf6','#^@Q')](_0x8189('0x74b','nFhx'),parseInt(ui['ddxw2']['getText']()));storage[_0x8189('0x18','N0vT')](_0x8189('0x8be','iR28'),ui['ylkk'][_0x8189('0xb7','KgQU')]());storage[_0x8189('0x301','BdX2')](_0x8189('0x164','nFhx'),parseInt(ui['ylkk1']['getText']()));storage[_0x8189('0x4f9','ZmHf')](_0x8189('0x8b1','70r8'),parseInt(ui[_0x8189('0x9e1','@tbM')]['getText']()));storage[_0x8189('0x112','Jqb7')](_0x8189('0x650','KgQU'),ui[_0x8189('0x712','zA$x')][_0x8189('0x541','^)J3')]());storage['put'](_0x8189('0xe1','KgQU'),parseInt(ui[_0x8189('0x10f','(Gim')][_0x8189('0x5fe','6Yss')]()));storage[_0x8189('0x203',']uT$')](_0x8189('0x18b','&OXO'),ui[_0x8189('0xa5','N0vT')][_0x8189('0x795','4Yry')]());storage['put'](_0x8189('0x4a3','70r8'),parseInt(ui[_0x8189('0xb10','#g0F')][_0x8189('0xa85',']uT$')]()));storage[_0x8189('0x906','obd!')](_0x8189('0x878','6Yss'),ui[_0x8189('0xad7','xq7I')][_0x8189('0xa04','Jqb7')]());storage[_0x8189('0x535','qg7$')]('bkgg2',ui[_0x8189('0x87c','^)J3')]['isChecked']());storage['put'](_0x8189('0x584','BdX2'),ui[_0x8189('0x592','JX6y')][_0x8189('0x686','bkiR')]());storage[_0x8189('0x758','1()i')]('jdjsb2',parseInt(ui[_0x8189('0x627','@9@0')][_0x8189('0x9c','ZmHf')]()));storage[_0x8189('0x8e1','70r8')](_0x8189('0xb3a','9IRN'),ui['hbhz'][_0x8189('0x649',')#]u')]());storage[_0x8189('0x8d6','*7Da')](_0x8189('0x37d','p0%o'),parseInt(ui[_0x8189('0x9ff','JX6y')][_0x8189('0xaf7','OXCB')]()));storage[_0x8189('0xa58','Hrzg')]('hbhz2',parseInt(ui['hbhz2']['getText']()));storage[_0x8189('0x8d6','*7Da')](_0x8189('0x5e6','O4vp'),ui[_0x8189('0x85e','Hrzg')][_0x8189('0x798','wgP%')]());storage[_0x8189('0x5a8','HlqN')](_0x8189('0x725','$mk^'),parseInt(ui[_0x8189('0xaf4','@tbM')]['getText']()));storage[_0x8189('0x654','iR28')](_0x8189('0x84b','KtCK'),ui[_0x8189('0x2f7','#g0F')][_0x8189('0x51',']uT$')]());storage[_0x8189('0x68b','5[L5')](_0x8189('0xa08',']7uy'),parseInt(ui[_0x8189('0x959','#^@Q')][_0x8189('0x39','N0vT')]()));storage[_0x8189('0x214','@9@0')](_0x8189('0x492','BdX2'),ui[_0x8189('0x212','#^@Q')][_0x8189('0x275','*7Da')]());storage[_0x8189('0x581','It1b')]('fqmfxs1',parseInt(ui[_0x8189('0x8e8',']uT$')][_0x8189('0xb6','BdX2')]()));storage[_0x8189('0x24d','[Y2F')](_0x8189('0x290','Jqb7'),ui['tys']['isChecked']());storage['put'](_0x8189('0x30b','z^$&'),parseInt(ui[_0x8189('0xb3','1()i')][_0x8189('0x78c','[Y2F')]()));storage[_0x8189('0xf1','#g0F')](_0x8189('0x599','z^$&'),ui[_0x8189('0x63c','6Yss')][_0x8189('0x531','nFhx')]());storage[_0x8189('0x4f9','ZmHf')](_0x8189('0x86c','#g0F'),parseInt(ui['kgyydzb2'][_0x8189('0xa15','&OXO')]()));storage[_0x8189('0x18','N0vT')](_0x8189('0x17a','KgQU'),ui[_0x8189('0x77a','bkiR')][_0x8189('0x145','obd!')]());storage['put']('kgeg2',parseInt(ui['kgeg2'][_0x8189('0x1ec','(Gim')]()));storage[_0x8189('0x562','p0%o')](_0x8189('0x9a3','bkiR'),ui['bsxq'][_0x8189('0x404','JX6y')]());storage[_0x8189('0xa58','Hrzg')](_0x8189('0x823','xq7I'),parseInt(ui[_0x8189('0x188',']7uy')]['getText']()));storage[_0x8189('0x906','obd!')](_0x8189('0x6e4','9IRN'),ui['ddgl'][_0x8189('0x998','5eeV')]());storage[_0x8189('0x214','@9@0')](_0x8189('0x182','4Yry'),parseInt(ui[_0x8189('0x459','&OXO')][_0x8189('0x923','9IRN')]()));storage[_0x8189('0x112','Jqb7')]('hz',ui['hz'][_0x8189('0x740','KtCK')]());storage[_0x8189('0xb0d','(Gim')](_0x8189('0x805','wgP%'),parseInt(ui[_0x8189('0xb19','7H#U')]['getText']()));storage['put'](_0x8189('0x99e','XLjY'),ui['ysm'][_0x8189('0x1e0','OXCB')]());storage['put'](_0x8189('0x6f7','It1b'),parseInt(ui[_0x8189('0x18c','E]aj')][_0x8189('0x162','@9@0')]()));storage[_0x8189('0xb0d','(Gim')](_0x8189('0x70b','4Yry'),ui[_0x8189('0x3c','z^$&')][_0x8189('0x88b','xq7I')]());storage[_0x8189('0x87d','KgQU')](_0x8189('0x435','O4vp'),parseInt(ui[_0x8189('0x195',']7uy')][_0x8189('0x78c','[Y2F')]()));storage['put']('lz',ui['lz'][_0x8189('0x265','Hrzg')]());storage[_0x8189('0x10e','@tbM')](_0x8189('0x9f','OXCB'),parseInt(ui[_0x8189('0x23e','#g0F')][_0x8189('0x1ec','(Gim')]()));storage[_0x8189('0x9dd','7H#U')]('wkzz',ui[_0x8189('0xb1e','It1b')][_0x8189('0x404','JX6y')]());storage[_0x8189('0x906','obd!')](_0x8189('0xc3','It1b'),parseInt(ui[_0x8189('0x1d2','#g0F')][_0x8189('0x543','*7Da')]()));storage[_0x8189('0x758','1()i')](_0x8189('0x80c','(Gim'),parseInt(ui[_0x8189('0x9db','O4vp')][_0x8189('0x9c','ZmHf')]()));storage[_0x8189('0x5a8','HlqN')](_0x8189('0xa95','p0%o'),ui[_0x8189('0x5c8','qg7$')]['isChecked']());storage[_0x8189('0x690','D9sr')](_0x8189('0x1b','obd!'),parseInt(ui[_0x8189('0x550','iR28')][_0x8189('0x512','JX6y')]()));storage[_0x8189('0x4cb','8^e]')](_0x8189('0x78b','*7Da'),ui[_0x8189('0x349','KgQU')][_0x8189('0xf4','(Gim')]());storage[_0x8189('0x604',']7uy')](_0x8189('0x8b4','wgP%'),parseInt(ui[_0x8189('0x950','@9@0')][_0x8189('0x88d','@tbM')]()));storage[_0x8189('0x535','qg7$')]('zhuanyue_username',ui[_0x8189('0x240','@9@0')][_0x8189('0x9c','ZmHf')]()[_0x8189('0x5ea','HlqN')]());storage['put'](_0x8189('0x98d',']uT$'),ui[_0x8189('0x760','O4vp')][_0x8189('0x88d','@tbM')]()['toString']());storage['put']('zhuanyue_fangan',ui['zhuanyue_fangan'][_0x8189('0x41b','bkiR')]()[_0x8189('0x951','#g0F')]());storage[_0x8189('0xa6','wgP%')](_0x8189('0x423','1()i'),ui[_0x8189('0x4d2','BdX2')][_0x8189('0x568','rDIx')]());storage[_0x8189('0x2bf','KtCK')]('ttaql2',parseInt(ui[_0x8189('0xa43','XLjY')][_0x8189('0x162','@9@0')]()));storage[_0x8189('0x856','nFhx')](_0x8189('0x92a','1()i'),ui[_0x8189('0xb','nFhx')]['isChecked']());storage[_0x8189('0x87d','KgQU')](_0x8189('0x83f','D9sr'),parseInt(ui[_0x8189('0x23d','p0%o')][_0x8189('0x560','8^e]')]()));storage[_0x8189('0x407','JX6y')](_0x8189('0x2ae','KgQU'),ui[_0x8189('0x3b6','ZmHf')][_0x8189('0x4e0','6Yss')]());storage[_0x8189('0x4f9','ZmHf')](_0x8189('0x8a2','Hrzg'),ui['pddhb'][_0x8189('0x7b3','p0%o')]());storage[_0x8189('0x906','obd!')](_0x8189('0x461','$mk^'),parseInt(ui[_0x8189('0x244','9IRN')][_0x8189('0xad8','z^$&')]()));storage[_0x8189('0x68b','5[L5')](_0x8189('0xa34','XLjY'),ui[_0x8189('0x254','V$Te')][_0x8189('0xa35','70r8')]());storage[_0x8189('0x249','&OXO')](_0x8189('0x140','ZmHf'),parseInt(ui[_0x8189('0x866','7H#U')][_0x8189('0x5fe','6Yss')]()));storage['put'](_0x8189('0x48b','BdX2'),ui[_0x8189('0x48b','BdX2')][_0x8189('0xa79',']7uy')]());storage[_0x8189('0x98c','6Yss')](_0x8189('0x4c','HlqN'),parseInt(ui[_0x8189('0x8b2','zA$x')][_0x8189('0x342','KgQU')]()));storage[_0x8189('0x98c','6Yss')](_0x8189('0x961','Jqb7'),ui[_0x8189('0xc9','V$Te')]['isChecked']());本地存储[_0x8189('0x759','$mk^')](_0x8189('0x1d7','#^@Q'),ui['yingke'][_0x8189('0x8ba','O4vp')]());本地存储[_0x8189('0x2e6','9IRN')](_0x8189('0x509','8^e]'),ui['yingke1'][_0x8189('0x915','O4vp')]());本地存储[_0x8189('0x93','E]aj')](_0x8189('0xc8','5eeV'),ui[_0x8189('0x205','ZmHf')][_0x8189('0x39c','5[L5')]());本地存储[_0x8189('0x203',']uT$')](_0x8189('0x5b3','#g0F'),ui[_0x8189('0x1ff','[Y2F')]['text']());本地存储[_0x8189('0x301','BdX2')](_0x8189('0x4f3',']uT$'),ui['抢红包'][_0x8189('0x294','4Yry')]);本地存储[_0x8189('0x6a1','OXCB')](_0x8189('0x465',']7uy'),ui[_0x8189('0x665',']uT$')][_0x8189('0x8d4','O4vp')]()[_0x8189('0x6e9','D9sr')]());本地存储[_0x8189('0x906','obd!')]('红包上限sj',ui[_0x8189('0x64a',']uT$')][_0x8189('0x858','qg7$')]()[_0x8189('0x82e','OXCB')]());本地存储[_0x8189('0xa58','Hrzg')](_0x8189('0x613','E]aj'),ui[_0x8189('0x97c','(Gim')]['checked']);本地存储[_0x8189('0x485','sGM5')](_0x8189('0x2f3','JX6y'),ui[_0x8189('0x2a4','8^e]')][_0x8189('0x811','xq7I')]);本地存储['put'](_0x8189('0x113','@tbM'),ui[_0x8189('0xab3','It1b')][_0x8189('0x9c2',')#]u')]);本地存储['put'](_0x8189('0xafa','JX6y'),ui[_0x8189('0x988','O4vp')][_0x8189('0x342','KgQU')]()['toString']());本地存储[_0x8189('0x581','It1b')](_0x8189('0xa62','4Yry'),ui[_0x8189('0x316','BdX2')][_0x8189('0x923','9IRN')]()[_0x8189('0xadc','XLjY')]());本地存储['put'](_0x8189('0xacf','Hrzg'),ui[_0x8189('0x3a9','*7Da')][_0x8189('0x70f','^)J3')]);本地存储['put'](_0x8189('0x86f',']7uy'),ui[_0x8189('0x570','[Y2F')][_0x8189('0x236','KtCK')]()[_0x8189('0xadc','XLjY')]());本地存储[_0x8189('0xa9','5eeV')](_0x8189('0x4e5','*7Da'),ui[_0x8189('0x19e','@9@0')]['checked']);本地存储[_0x8189('0x535','qg7$')](_0x8189('0x18f','#^@Q'),ui['抖音是否抢福袋'][_0x8189('0x70f','^)J3')]);本地存储[_0x8189('0x8d6','*7Da')](_0x8189('0x957','Jqb7'),ui['抖音福袋时间限制']['checked']);本地存储[_0x8189('0x130','V$Te')](_0x8189('0x651','JX6y'),ui[_0x8189('0x5aa','XLjY')]['getText']()[_0x8189('0xa7e',')#]u')]());本地存储[_0x8189('0x207','zA$x')](_0x8189('0x905','bkiR'),ui[_0x8189('0x934','It1b')][_0x8189('0x681','bkiR')]);本地存储[_0x8189('0x98c','6Yss')](_0x8189('0x44e','zA$x'),ui['抖音红包最大等待时长'][_0x8189('0x17b','Hrzg')]()['toString']());本地存储[_0x8189('0x18','N0vT')](_0x8189('0xa71','bkiR'),ui[_0x8189('0x743','9IRN')][_0x8189('0x8ff','@9@0')]);本地存储[_0x8189('0x4f9','ZmHf')]('抖音付费福袋',ui[_0x8189('0x3a','KgQU')][_0x8189('0x4c3','#g0F')]);}function 获取勾选APP(){var _0x2262d3=new Array();if(ui['jkd'][_0x8189('0x6d0','BdX2')]()){_0x2262d3[_0x2262d3[_0x8189('0x4c2','p0%o')]]=[_0x8189('0x276','It1b'),_0x8189('0x5d7','5eeV'),'com.xiangzi.jukandian'];}if(ui[_0x8189('0x92e','XLjY')][_0x8189('0x7b3','p0%o')]()){_0x2262d3[_0x2262d3[_0x8189('0xa45','4Yry')]]=[_0x8189('0x879','ZmHf'),_0x8189('0x296','wgP%'),_0x8189('0x7d3','O4vp')];}if(ui[_0x8189('0x277','wgP%')][_0x8189('0xf4','(Gim')]()){_0x2262d3[_0x2262d3[_0x8189('0x90a','7H#U')]]=[_0x8189('0xaba','5eeV'),_0x8189('0x388','(Gim'),_0x8189('0xb08','E]aj')];}if(ui['zksp'][_0x8189('0x857','@9@0')]()){_0x2262d3[_0x2262d3[_0x8189('0x8c8',']7uy')]]=[_0x8189('0xa57','N0vT'),_0x8189('0xab4','D9sr'),_0x8189('0x415','1()i')];}if(ui[_0x8189('0x99f','@9@0')][_0x8189('0x531','nFhx')]()){_0x2262d3[_0x2262d3[_0x8189('0x645','sGM5')]]=['微鲤',_0x8189('0x10d','5eeV'),_0x8189('0x49','N0vT')];}if(ui[_0x8189('0x216','xq7I')][_0x8189('0xa9d','V$Te')]()){_0x2262d3[_0x2262d3[_0x8189('0xfa','It1b')]]=[_0x8189('0xb36','JX6y'),_0x8189('0x549','[Y2F'),_0x8189('0x849','5eeV')];}if(ui['xch']['isChecked']()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x266','(Gim'),'xch','com.video.xch'];}if(ui['yydsp'][_0x8189('0x740','KtCK')]()){_0x2262d3[_0x2262d3[_0x8189('0x52d',')#]u')]]=['有颜短视频',_0x8189('0x94b','p0%o'),_0x8189('0x2c','#^@Q')];}if(ui[_0x8189('0x5de','*7Da')][_0x8189('0x51',']uT$')]()){_0x2262d3[_0x2262d3[_0x8189('0xaa5','XLjY')]]=[_0x8189('0x7a6','O4vp'),_0x8189('0x6f1','KgQU'),_0x8189('0x29','HlqN')];}if(ui[_0x8189('0xb4b','5eeV')][_0x8189('0x56a','[Y2F')]()){_0x2262d3[_0x2262d3['length']]=['中青看点',_0x8189('0x54d','V$Te'),_0x8189('0x768','9IRN')];}if(ui[_0x8189('0x379','V$Te')][_0x8189('0x239','It1b')]()){_0x2262d3[_0x2262d3[_0x8189('0x319','5[L5')]]=['糖豆',_0x8189('0xabe','obd!'),_0x8189('0xa4d','iR28')];}if(ui[_0x8189('0x9ce','BdX2')][_0x8189('0xf4','(Gim')]()){_0x2262d3[_0x2262d3[_0x8189('0x149','xq7I')]]=[_0x8189('0xb33','p0%o'),_0x8189('0x6e1','*7Da'),_0x8189('0x406',')#]u')];}if(ui[_0x8189('0x9e7',')#]u')][_0x8189('0x8ba','O4vp')]()){_0x2262d3[_0x2262d3[_0x8189('0x232','6Yss')]]=[_0x8189('0x510','(Gim'),_0x8189('0x8c1','(Gim'),_0x8189('0x7ef','nFhx')];}if(ui['qktx'][_0x8189('0x15b','XLjY')]()){_0x2262d3[_0x2262d3[_0x8189('0x232','6Yss')]]=[_0x8189('0x74','$mk^'),_0x8189('0x1f4','V$Te'),'com.yanhui.qktx'];}if(ui['weishi'][_0x8189('0x1e0','OXCB')]()){_0x2262d3[_0x2262d3[_0x8189('0x8f2','*7Da')]]=['微视',_0x8189('0x24b','sGM5'),_0x8189('0x796','It1b')];}if(ui[_0x8189('0x835','E]aj')]['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0x4c2','p0%o')]]=['畅初',_0x8189('0x6de',']uT$'),_0x8189('0x3a0','zA$x')];}if(ui['sb'][_0x8189('0x541','^)J3')]()){_0x2262d3[_0x2262d3['length']]=['刷宝','sb',_0x8189('0x464',')#]u')];}if(ui[_0x8189('0x62f','wgP%')][_0x8189('0x3f5','z^$&')]()){_0x2262d3[_0x2262d3[_0x8189('0xaff','BdX2')]]=[_0x8189('0x678','BdX2'),_0x8189('0x7f0','bkiR'),_0x8189('0x910','#^@Q')];}if(ui[_0x8189('0x955',')#]u')]['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0xaad','#^@Q')]]=[_0x8189('0x567','(Gim'),_0x8189('0x66a','^)J3'),'com.zheyun.bumblebee'];}if(ui['sdhz']['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0x2b3','bkiR')]]=[_0x8189('0x933','&OXO'),_0x8189('0x183','KgQU'),_0x8189('0x323','(Gim')];}if(ui['hs'][_0x8189('0x15b','XLjY')]()){_0x2262d3[_0x2262d3[_0x8189('0x7b5','[Y2F')]]=['火山','hs',_0x8189('0x532','zA$x')];}if(ui['ks'][_0x8189('0x568','rDIx')]()){_0x2262d3[_0x2262d3[_0x8189('0x95d','z^$&')]]=[_0x8189('0xae','nFhx'),'ks',_0x8189('0x8c7','70r8')];}if(ui['xk'][_0x8189('0x7b8','8^e]')]()){_0x2262d3[_0x2262d3[_0x8189('0x7d2','zA$x')]]=['想看','xk',_0x8189('0x623','*7Da')];}if(ui[_0x8189('0xad','wgP%')]['isChecked']()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x965','4Yry'),_0x8189('0x5ff','#g0F'),_0x8189('0x6ed','KtCK')];}if(ui['dy']['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0x482','E]aj')]]=['抖音','dy','com.ss.android.ugc.aweme.lite'];}if(ui[_0x8189('0x19f','N0vT')][_0x8189('0x47c','D9sr')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0xaa','5[L5'),'qtt',_0x8189('0x785','ZmHf')];}if(ui[_0x8189('0x892','zA$x')][_0x8189('0x7b3','p0%o')]()){_0x2262d3[_0x2262d3[_0x8189('0x782','D9sr')]]=['点点新闻','ddxw','com.yingliang.clicknews'];}if(ui[_0x8189('0x7c9','6Yss')][_0x8189('0x62d','sGM5')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x79f','O4vp'),_0x8189('0x2a3','KgQU'),_0x8189('0x7d6','E]aj')];}if(ui[_0x8189('0x600','z^$&')][_0x8189('0x7b8','8^e]')]()){_0x2262d3[_0x2262d3[_0x8189('0x11a','O4vp')]]=[_0x8189('0x269','KtCK'),'cdsp',_0x8189('0x774','iR28')];}if(ui[_0x8189('0xb21','4Yry')][_0x8189('0x298','E]aj')]()){_0x2262d3[_0x2262d3[_0x8189('0xadb','1()i')]]=[_0x8189('0x4e','$mk^'),_0x8189('0xa5','N0vT'),_0x8189('0x3ea','OXCB')];}if(ui['jdjsb'][_0x8189('0x2ea','1()i')]()){_0x2262d3[_0x2262d3[_0x8189('0x97a','70r8')]]=['京东极速版',_0x8189('0x9b7','E]aj'),_0x8189('0x78d','nFhx')];}if(ui[_0x8189('0x7c7','wgP%')][_0x8189('0xf4','(Gim')]()){_0x2262d3[_0x2262d3[_0x8189('0x85c','#g0F')]]=[_0x8189('0x48c','V$Te'),'hbhz',_0x8189('0x2e9','5eeV')];}if(ui[_0x8189('0x21b','ZmHf')][_0x8189('0xa79',']7uy')]()){_0x2262d3[_0x2262d3[_0x8189('0xaad','#^@Q')]]=['每天赚点',_0x8189('0x25a','Jqb7'),_0x8189('0x3f7','$mk^')];}if(ui[_0x8189('0x30c','z^$&')][_0x8189('0x239','It1b')]()){_0x2262d3[_0x2262d3[_0x8189('0x97a','70r8')]]=[_0x8189('0x14e','E]aj'),_0x8189('0x9e2','@tbM'),'com.dragon.read'];}if(ui[_0x8189('0x89c','*7Da')][_0x8189('0x298','E]aj')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x821','9IRN'),_0x8189('0x3d9','@tbM'),_0x8189('0x2d4','&OXO')];}if(ui[_0x8189('0x43c','(Gim')][_0x8189('0x3f5','z^$&')]()){_0x2262d3[_0x2262d3[_0x8189('0x1c0','@9@0')]]=['酷狗儿歌',_0x8189('0x2ef','^)J3'),_0x8189('0x193','z^$&')];}if(ui[_0x8189('0xa30','&OXO')][_0x8189('0xa79',']7uy')]()){_0x2262d3[_0x2262d3[_0x8189('0x28c','(Gim')]]=[_0x8189('0x74a','qg7$'),_0x8189('0x20b','N0vT'),_0x8189('0x14c','@tbM')];}if(ui['ddgl'][_0x8189('0x47c','D9sr')]()){_0x2262d3[_0x2262d3[_0x8189('0x8c8',']7uy')]]=[_0x8189('0x602','obd!'),_0x8189('0x3e2','70r8'),_0x8189('0x5d3','rDIx')];}if(ui[_0x8189('0x7f2',')#]u')][_0x8189('0x568','rDIx')]()){_0x2262d3[_0x2262d3[_0x8189('0x94c','qg7$')]]=[_0x8189('0xa0c','@tbM'),_0x8189('0x8ab','nFhx'),'com.tencent.mm'];}if(ui[_0x8189('0x3b8','*7Da')][_0x8189('0xb7','KgQU')]()){_0x2262d3[_0x2262d3[_0x8189('0x30d','HlqN')]]=[_0x8189('0x86a','6Yss'),_0x8189('0xb29',']uT$'),_0x8189('0x9ca','@tbM')];}if(ui[_0x8189('0x937','z^$&')]['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0xa9f','ZmHf')]]=[_0x8189('0x5a','5[L5'),'ttaql','com.xiaoqiao.qclean'];}if(ui[_0x8189('0x6c1','4Yry')][_0x8189('0x265','Hrzg')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x22',']7uy'),_0x8189('0x671','@tbM'),_0x8189('0x460','KtCK')];}if(ui[_0x8189('0x652','KtCK')]['isChecked']()){_0x2262d3[_0x2262d3['length']]=['小啄赚钱','xzzq',_0x8189('0x5a1','D9sr')];}if(ui[_0x8189('0x37','4Yry')][_0x8189('0x531','nFhx')]()){_0x2262d3[_0x2262d3['length']]=['映客极速版',_0x8189('0x374','ZmHf'),_0x8189('0xa40','5eeV')];}if(ui[_0x8189('0x62c','8^e]')]['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0x54f','KgQU')]]=[_0x8189('0x53c','6Yss'),_0x8189('0x425','nFhx'),_0x8189('0x280','V$Te')];}if(ui['ky'][_0x8189('0x795','4Yry')]()){_0x2262d3[_0x2262d3[_0x8189('0x1bb','8^e]')]]=['快音','ky',_0x8189('0x410','N0vT')];}if(ui[_0x8189('0x9c8','(Gim')][_0x8189('0x568','rDIx')]()){_0x2262d3[_0x2262d3[_0x8189('0x7d2','zA$x')]]=[_0x8189('0x713','z^$&'),_0x8189('0x55e','70r8'),'com.ttxmzq.pandamakemoney.asjz'];}if(ui[_0x8189('0x3aa','zA$x')][_0x8189('0xa04','Jqb7')]()){_0x2262d3[_0x2262d3[_0x8189('0x60','V$Te')]]=[_0x8189('0x40d',']7uy'),_0x8189('0x6ef','&OXO'),_0x8189('0xb24','zA$x')];}if(ui[_0x8189('0x2fc','iR28')][_0x8189('0x57f','#g0F')]()){_0x2262d3[_0x2262d3[_0x8189('0xa45','4Yry')]]=[_0x8189('0x710','@9@0'),'jrtthb',_0x8189('0xaa0','6Yss')];}if(ui[_0x8189('0xa8b','obd!')][_0x8189('0xa99','9IRN')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x340',']uT$'),'yingke','com.meelive.ingkee'];}if(ui[_0x8189('0x41e','D9sr')]['isChecked']()){_0x2262d3[_0x2262d3[_0x8189('0xfa','It1b')]]=[_0x8189('0xc0',']7uy'),_0x8189('0x150','nFhx'),_0x8189('0x2da','HlqN')];}if(ui[_0x8189('0x24c','6Yss')][_0x8189('0x3da','qg7$')]()){_0x2262d3[_0x2262d3[_0x8189('0x33e','^)J3')]]=[_0x8189('0x5dc','@9@0'),_0x8189('0x88a','^)J3'),_0x8189('0x539','qg7$')];}if(ui['wkzz'][_0x8189('0x15b','XLjY')]()){_0x2262d3[_0x2262d3[_0x8189('0x6fb','KtCK')]]=[_0x8189('0x685','rDIx'),_0x8189('0x816','qg7$'),'cn.weikezhongzhi.wxtest'];}if(ui[_0x8189('0x373','^)J3')][_0x8189('0xa79',']7uy')]()){_0x2262d3[_0x2262d3['length']]=[_0x8189('0x357','zA$x'),_0x8189('0x309','KgQU'),_0x8189('0x8aa','sGM5')];}return _0x2262d3;}function 获取阅读APP(){var _0x4f51dc=new Array();if(ui[_0x8189('0xa3f','OXCB')][_0x8189('0x998','5eeV')]()){_0x4f51dc[_0x4f51dc[_0x8189('0xa9f','ZmHf')]]=[_0x8189('0x919','[Y2F'),_0x8189('0x5b1','wgP%'),'com.xiangzi.jukandian'];}if(ui[_0x8189('0x2e5','D9sr')][_0x8189('0xb7','KgQU')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x15e','rDIx')]]=['文旅看点',_0x8189('0xa66','rDIx'),_0x8189('0x513','5[L5')];}if(ui[_0x8189('0x127','HlqN')][_0x8189('0x88b','xq7I')]()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x9da','OXCB'),_0x8189('0x127','HlqN'),_0x8189('0x606','nFhx')];}if(ui[_0x8189('0x8a9','#g0F')][_0x8189('0x15b','XLjY')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x1bb','8^e]')]]=[_0x8189('0x25b',']uT$'),_0x8189('0x73d','BdX2'),_0x8189('0x1dc','#^@Q')];}if(ui[_0x8189('0x75d','KtCK')]['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0x7f9','Hrzg')]]=['微鲤',_0x8189('0x450','9IRN'),'cn.weli.story'];}if(ui[_0x8189('0x185','HlqN')][_0x8189('0x802','HlqN')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x6d3','obd!')]]=[_0x8189('0x78f','5[L5'),'mykd','com.ldzs.zhangxin'];}if(ui[_0x8189('0x5c4','nFhx')][_0x8189('0x4e0','6Yss')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x7d2','zA$x')]]=['小吃货短视频',_0x8189('0x5c4','nFhx'),_0x8189('0x944','4Yry')];}if(ui[_0x8189('0x243',']uT$')]['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0x232','6Yss')]]=[_0x8189('0x947','D9sr'),'yydsp',_0x8189('0x9f8','8^e]')];}if(ui[_0x8189('0x103','O4vp')][_0x8189('0xa9d','V$Te')]()){_0x4f51dc[_0x4f51dc['length']]=['百姓头条',_0x8189('0x3ac','bkiR'),_0x8189('0x927','[Y2F')];}if(ui['zqkd']['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0x6d3','obd!')]]=[_0x8189('0x596','5[L5'),_0x8189('0x95f','KgQU'),_0x8189('0x6ee','nFhx')];}if(ui[_0x8189('0x8e2','z^$&')]['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0x28c','(Gim')]]=['糖豆',_0x8189('0xb34','KtCK'),'com.bokecc.dance'];}if(ui[_0x8189('0x65a','rDIx')][_0x8189('0x3f5','z^$&')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x34a','$mk^')]]=[_0x8189('0x45b',']uT$'),_0x8189('0x1f3','qg7$'),_0x8189('0x61','8^e]')];}if(ui[_0x8189('0x43b','wgP%')][_0x8189('0xa79',']7uy')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x7d2','zA$x')]]=[_0x8189('0x2c8','JX6y'),_0x8189('0x3bb','D9sr'),'com.yanhui.qktx'];}if(ui[_0x8189('0x87b','70r8')][_0x8189('0x677','zA$x')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x8c8',']7uy')]]=['微视',_0x8189('0x3de','^)J3'),_0x8189('0x4c0','(Gim')];}if(ui[_0x8189('0x9bc','p0%o')][_0x8189('0x2ea','1()i')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x8f2','*7Da')]]=['畅初',_0x8189('0x5b','OXCB'),_0x8189('0x874','Jqb7')];}if(ui['sb'][_0x8189('0x795','4Yry')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x7f9','Hrzg')]]=['刷宝','sb',_0x8189('0x228','@9@0')];}if(ui[_0x8189('0xa94','JX6y')][_0x8189('0x999','&OXO')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x52d',')#]u')]]=['波波视频',_0x8189('0x526','O4vp'),_0x8189('0x4db','&OXO')];}if(ui[_0x8189('0x15d','E]aj')][_0x8189('0xf4','(Gim')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x356','&OXO')]]=[_0x8189('0x7e1','@tbM'),_0x8189('0x136','HlqN'),'com.zheyun.bumblebee'];}if(ui[_0x8189('0x2d3',']uT$')][_0x8189('0x57f','#g0F')]()){_0x4f51dc[_0x4f51dc[_0x8189('0xfa','It1b')]]=[_0x8189('0x5da','^)J3'),'sdhz','c.l.a'];}if(ui['hs'][_0x8189('0x531','nFhx')]()){_0x4f51dc[_0x4f51dc[_0x8189('0xaff','BdX2')]]=['火山','hs',_0x8189('0x7e2','OXCB')];}if(ui['ks'][_0x8189('0x2ea','1()i')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x1c0','@9@0')]]=[_0x8189('0x487','@9@0'),'ks',_0x8189('0x86','O4vp')];}if(ui['xk'][_0x8189('0x686','bkiR')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x8f2','*7Da')]]=['想看','xk',_0x8189('0x4d','HlqN')];}if(ui[_0x8189('0x436','qg7$')][_0x8189('0xa9d','V$Te')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x60','V$Te')]]=[_0x8189('0xb40','9IRN'),_0x8189('0xcb','KtCK'),_0x8189('0x7eb','7H#U')];}if(ui['dy'][_0x8189('0x938','7H#U')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x4c2','p0%o')]]=['抖音','dy',_0x8189('0x4c9','z^$&')];}if(ui[_0x8189('0x458','#g0F')]['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0x94c','qg7$')]]=[_0x8189('0x89a','Jqb7'),_0x8189('0x4de','E]aj'),_0x8189('0x2fd','zA$x')];}if(ui[_0x8189('0x11c','rDIx')][_0x8189('0x145','obd!')]()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x50d','qg7$'),_0x8189('0x990','9IRN'),'com.yingliang.clicknews'];}if(ui[_0x8189('0x204','obd!')][_0x8189('0x541','^)J3')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x7b5','[Y2F')]]=[_0x8189('0x9a9','&OXO'),_0x8189('0x5f','E]aj'),_0x8189('0xa8d','qg7$')];}if(ui[_0x8189('0xad2','KtCK')][_0x8189('0x275','*7Da')]()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x431','E]aj'),_0x8189('0x5a9','7H#U'),_0x8189('0x54a','wgP%')];}if(ui[_0x8189('0x79b','obd!')][_0x8189('0x6d0','BdX2')]()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x468','nFhx'),'hhspjsb',_0x8189('0x211','p0%o')];}if(ui[_0x8189('0xa52','D9sr')][_0x8189('0x51',']uT$')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x6d3','obd!')]]=['京东极速版','jdjsb',_0x8189('0xa86','ZmHf')];}if(ui[_0x8189('0x117','KtCK')][_0x8189('0x795','4Yry')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x782','D9sr')]]=[_0x8189('0x6c3','^)J3'),_0x8189('0x609','6Yss'),_0x8189('0x96a','&OXO')];}if(ui[_0x8189('0x71e','Jqb7')][_0x8189('0x7b3','p0%o')]()){_0x4f51dc[_0x4f51dc[_0x8189('0xa45','4Yry')]]=[_0x8189('0x109',']uT$'),_0x8189('0x5a4','OXCB'),'com.sljh.zqxsp'];}if(ui[_0x8189('0x3ed','rDIx')]['isChecked']()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x8fa','ZmHf'),_0x8189('0x5c3','JX6y'),_0x8189('0xb06','5[L5')];}if(ui[_0x8189('0x4e6','KtCK')][_0x8189('0xa79',']7uy')]()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x41f','#g0F'),_0x8189('0x635','wgP%'),_0x8189('0x375','wgP%')];}if(ui['xzzq'][_0x8189('0x3da','qg7$')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x645','sGM5')]]=[_0x8189('0x1f7','XLjY'),_0x8189('0x6f6','bkiR'),_0x8189('0x737','JX6y')];}if(ui[_0x8189('0x847','D9sr')][_0x8189('0x3da','qg7$')]()){_0x4f51dc[_0x4f51dc[_0x8189('0xa45','4Yry')]]=[_0x8189('0x6d8','6Yss'),_0x8189('0x7fa','5eeV'),_0x8189('0x20d','wgP%')];}if(ui['ddtt']['isChecked']()){_0x4f51dc[_0x4f51dc['length']]=[_0x8189('0x932','O4vp'),_0x8189('0xae5','#^@Q'),_0x8189('0x146','bkiR')];}if(ui['ky'][_0x8189('0x999','&OXO')]()){_0x4f51dc[_0x4f51dc[_0x8189('0x54f','KgQU')]]=['快音','ky',_0x8189('0x43d','9IRN')];}if(ui[_0x8189('0x773','HlqN')]['isChecked']()){_0x4f51dc[_0x4f51dc[_0x8189('0xa45','4Yry')]]=[_0x8189('0x394','obd!'),_0x8189('0xa3d','7H#U'),'com.ttxmzq.pandamakemoney.asjz'];}return _0x4f51dc;}function 获取任务APP(){var _0x1895ac=new Array();if(ui[_0x8189('0x8b3','obd!')][_0x8189('0x649',')#]u')]()){_0x1895ac[_0x1895ac[_0x8189('0x6d3','obd!')]]=[_0x8189('0xae7','ZmHf'),_0x8189('0x141',')#]u'),_0x8189('0x90c','5[L5')];}if(ui[_0x8189('0x6a2','V$Te')][_0x8189('0x1e9','5[L5')]()){_0x1895ac[_0x1895ac[_0x8189('0x30d','HlqN')]]=['任务内部版',_0x8189('0x6a2','V$Te'),_0x8189('0xd0',']uT$')];}if(ui[_0x8189('0x213','Hrzg')]['isChecked']()){_0x1895ac[_0x1895ac[_0x8189('0x11a','O4vp')]]=['微客众智',_0x8189('0x7fd','70r8'),_0x8189('0x7dd','6Yss')];}if(ui[_0x8189('0x765','OXCB')][_0x8189('0xa9d','V$Te')]()){_0x1895ac[_0x1895ac[_0x8189('0x34','nFhx')]]=[_0x8189('0x9ac','bkiR'),_0x8189('0xa95','p0%o'),_0x8189('0x108','OXCB')];}return _0x1895ac;}function 获取其他APP(){var _0x19918b=new Array();if(ui[_0x8189('0x840','[Y2F')][_0x8189('0xaaf','@tbM')]()){_0x19918b[_0x19918b[_0x8189('0x4c2','p0%o')]]=['番茄免费小说',_0x8189('0x212','#^@Q'),_0x8189('0x1ef','XLjY')];}if(ui[_0x8189('0x56e','7H#U')][_0x8189('0x798','wgP%')]()){_0x19918b[_0x19918b['length']]=[_0x8189('0x2fe',']uT$'),_0x8189('0x4f0','(Gim'),_0x8189('0x56f','9IRN')];}if(ui[_0x8189('0x206','p0%o')][_0x8189('0x568','rDIx')]()){_0x19918b[_0x19918b[_0x8189('0xaa5','XLjY')]]=['酷狗儿歌',_0x8189('0x888','zA$x'),_0x8189('0x7cf','8^e]')];}if(ui[_0x8189('0x49e','70r8')][_0x8189('0x795','4Yry')]()){_0x19918b[_0x19918b[_0x8189('0x855','N0vT')]]=[_0x8189('0x7dc','zA$x'),_0x8189('0x1af','KgQU'),'com.toomee.stars'];}if(ui[_0x8189('0x544','It1b')][_0x8189('0x3da','qg7$')]()){_0x19918b[_0x19918b[_0x8189('0x7f9','Hrzg')]]=[_0x8189('0x59a','#g0F'),_0x8189('0x315','zA$x'),_0x8189('0x702','p0%o')];}if(ui[_0x8189('0x99e','XLjY')][_0x8189('0x51',']uT$')]()){_0x19918b[_0x19918b[_0x8189('0x645','sGM5')]]=[_0x8189('0x7be','sGM5'),_0x8189('0x352','bkiR'),_0x8189('0x4f1','8^e]')];}if(ui['myb'][_0x8189('0xa99','9IRN')]()){_0x19918b[_0x19918b[_0x8189('0x85c','#g0F')]]=[_0x8189('0x3d','N0vT'),_0x8189('0x28a','nFhx'),_0x8189('0x1c',']7uy')];}if(ui[_0x8189('0x432','(Gim')][_0x8189('0xa99','9IRN')]()){_0x19918b[_0x19918b[_0x8189('0x7f9','Hrzg')]]=[_0x8189('0x1fe','zA$x'),_0x8189('0x6f8','obd!'),_0x8189('0xa65',']uT$')];}if(ui[_0x8189('0xa54','z^$&')][_0x8189('0x57f','#g0F')]()){_0x19918b[_0x19918b[_0x8189('0x1bb','8^e]')]]=[_0x8189('0x9e6','HlqN'),'yingke',_0x8189('0x2a1','OXCB')];}if(ui['pddhb']['isChecked']()){_0x19918b[_0x19918b[_0x8189('0x3c4',']uT$')]]=[_0x8189('0x45e','KgQU'),_0x8189('0x628','^)J3'),_0x8189('0x842','Jqb7')];}if(ui[_0x8189('0x54e','8^e]')][_0x8189('0x802','HlqN')]()){_0x19918b[_0x19918b[_0x8189('0x1b4','@tbM')]]=['抖音红包福袋',_0x8189('0xa3e',']uT$'),_0x8189('0x398','1()i')];}return _0x19918b;}function 运行APP(_0x22f2bb){switch(_0x22f2bb){case'聚看点':if(storage[_0x8189('0x371','^)J3')]('jkd1')<=storagesd[_0x8189('0x57e','1()i')](_0x8189('0x745','nFhx'),[0x0])&&storage[_0x8189('0x17','OXCB')](_0x8189('0x8d2','^)J3'))<=storagesd[_0x8189('0xa03','KgQU')](_0x8189('0xa93','JX6y'),[0x0])){mylog(_0x22f2bb+_0x8189('0x55c','&OXO'));sleep(0x1388);return![];}break;case _0x8189('0x8d8','[Y2F'):if(storage['get'](_0x8189('0x163','z^$&'))<=storagesd['get'](_0x8189('0x5e','XLjY'),[0x0])&&storage[_0x8189('0x6ba',']uT$')](_0x8189('0x783','sGM5'))<=storagesd[_0x8189('0x5a6','#^@Q')]('wlkdsp',[0x0])){mylog(_0x22f2bb+_0x8189('0x5a0','N0vT'));sleep(0x1388);return![];}break;case _0x8189('0xa11','8^e]'):if(storage[_0x8189('0x7ee','8^e]')](_0x8189('0x3ad','Hrzg'))<=storagesd['get'](_0x8189('0xb0e','6Yss'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x6af','It1b'):if(storage[_0x8189('0x361','4Yry')]('zksp2')<=storagesd[_0x8189('0xb07','xq7I')](_0x8189('0x2ac','9IRN'),[0x0])){mylog(_0x22f2bb+_0x8189('0x3d4','(Gim'));sleep(0x1388);return![];}break;case'微鲤':if(storage[_0x8189('0x62b','HlqN')]('wlkk1')<=storagesd[_0x8189('0x77','z^$&')](_0x8189('0x75','iR28'),[0x0])&&storage[_0x8189('0xf3','bkiR')](_0x8189('0xa51','$mk^'))<=storagesd[_0x8189('0x71','#g0F')](_0x8189('0x67c','^)J3'),[0x0])){mylog(_0x22f2bb+_0x8189('0x771','#g0F'));sleep(0x1388);return![];}break;case _0x8189('0x363','p0%o'):if(storage[_0x8189('0x474','Jqb7')](_0x8189('0x5cf',']uT$'))<=storagesd[_0x8189('0x5a6','#^@Q')](_0x8189('0x5b2','JX6y'),[0x0])&&storage[_0x8189('0x267','7H#U')](_0x8189('0x57d','JX6y'))<=storagesd[_0x8189('0xcc','70r8')]('mykdsp',[0x0])){mylog(_0x22f2bb+_0x8189('0x2b4','6Yss'));sleep(0x1388);return![];}break;case _0x8189('0x14d','&OXO'):if(storage[_0x8189('0xcc','70r8')](_0x8189('0x63e','O4vp'))<=storagesd[_0x8189('0xbb','@tbM')]('xchsc',[0x0])){mylog(_0x22f2bb+_0x8189('0x771','#g0F'));sleep(0x1388);return![];}break;case _0x8189('0x1cc',')#]u'):if(storage[_0x8189('0xa03','KgQU')](_0x8189('0x248','iR28'))<=storagesd[_0x8189('0x267','7H#U')](_0x8189('0x73b','Hrzg'),[0x0])){mylog(_0x22f2bb+_0x8189('0x8e4','rDIx'));sleep(0x1388);return![];}break;case _0x8189('0x6f0','XLjY'):if(storage[_0x8189('0x8db','KtCK')]('bxtt1')<=storagesd[_0x8189('0x6ba',']uT$')](_0x8189('0x679','4Yry'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case'中青看点':if(storage[_0x8189('0x632','sGM5')](_0x8189('0xaf1','6Yss'))<=storagesd[_0x8189('0x267','7H#U')](_0x8189('0x3fa','BdX2'),[0x0])&&storage['get'](_0x8189('0x75c','zA$x'))<=storagesd[_0x8189('0x6fe','BdX2')](_0x8189('0xa19','p0%o'),[0x0])){mylog(_0x22f2bb+_0x8189('0x5','qg7$'));sleep(0x1388);return![];}break;case'糖豆':if(storage[_0x8189('0x632','sGM5')](_0x8189('0xae2',']7uy'))<=storagesd['get'](_0x8189('0x501','HlqN'),[0x0])){mylog(_0x22f2bb+_0x8189('0x118','$mk^'));sleep(0x1388);return![];}break;case _0x8189('0x9f4','7H#U'):if(storage[_0x8189('0x62b','HlqN')](_0x8189('0x9e0','5[L5'))<=storagesd[_0x8189('0x9df','(Gim')](_0x8189('0xb25','iR28'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0xad1','1()i'):if(storage['get']('qktx1')<=storagesd[_0x8189('0xb07','xq7I')]('qktxsc',[0x0])){mylog(_0x22f2bb+_0x8189('0x469','iR28'));sleep(0x1388);return![];}break;case'微视':if(storage[_0x8189('0x7ee','8^e]')](_0x8189('0x6b3','9IRN'))<=storagesd[_0x8189('0xa55','$mk^')](_0x8189('0x387','5eeV'),[0x0])){mylog(_0x22f2bb+_0x8189('0x756','8^e]'));sleep(0x1388);return![];}break;case'畅初':if(storage[_0x8189('0xa55','$mk^')](_0x8189('0x2f4','rDIx'))<=storagesd[_0x8189('0xbb','@tbM')](_0x8189('0x449','[Y2F'),[0x0])){mylog(_0x22f2bb+_0x8189('0x100','wgP%'));sleep(0x1388);return![];}break;case'刷宝':if(storage['get'](_0x8189('0x8a7','#g0F'))<=storagesd[_0x8189('0x48f','XLjY')]('sbsp',[0x0])){mylog(_0x22f2bb+_0x8189('0x9f3','xq7I'));sleep(0x1388);return![];}break;case _0x8189('0xaf6','$mk^'):if(storage[_0x8189('0x443','iR28')](_0x8189('0xb31','O4vp'))<=storagesd[_0x8189('0x3d3','O4vp')]('bbspsp',[0x0])){mylog(_0x22f2bb+_0x8189('0x2b8','OXCB'));sleep(0x1388);return![];}break;case _0x8189('0xa80','sGM5'):if(storage[_0x8189('0xb07','xq7I')](_0x8189('0xc','5eeV'))<=storagesd[_0x8189('0xcc','70r8')](_0x8189('0x881','(Gim'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x444','#g0F'):if(storage[_0x8189('0xa55','$mk^')](_0x8189('0x99','#g0F'))<=storagesd[_0x8189('0x17','OXCB')]('sdhzwz',[0x0])&&storage[_0x8189('0x6fe','BdX2')](_0x8189('0x8ad','sGM5'))<=storagesd[_0x8189('0x9df','(Gim')](_0x8189('0xb44',']7uy'),[0x0])){mylog(_0x22f2bb+_0x8189('0x469','iR28'));sleep(0x1388);return![];}break;case _0x8189('0x638','rDIx'):if(storage[_0x8189('0x71','#g0F')](_0x8189('0x53','9IRN'))<=storagesd[_0x8189('0x583','Hrzg')]('yktwz',[0x0])&&storage[_0x8189('0x2a5','ZmHf')](_0x8189('0x60a','xq7I'))<=storagesd[_0x8189('0x4eb','V$Te')]('yktsp',[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case'火山':if(storage[_0x8189('0x2a5','ZmHf')](_0x8189('0x700','O4vp'))<=storagesd[_0x8189('0x7ee','8^e]')](_0x8189('0x98f','1()i'),[0x0])){mylog(_0x22f2bb+_0x8189('0x55c','&OXO'));sleep(0x1388);return![];}break;case _0x8189('0x339','XLjY'):if(storage[_0x8189('0x2c9','p0%o')]('ks2')<=storagesd[_0x8189('0xb01','rDIx')](_0x8189('0x1f0','@9@0'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case'想看':if(storage['get'](_0x8189('0xcd','E]aj'))<=storagesd[_0x8189('0x18a','It1b')]('xkwz',[0x0])&&storage[_0x8189('0xb01','rDIx')]('xk2')<=storagesd[_0x8189('0x6fe','BdX2')](_0x8189('0x2c1','sGM5'),[0x0])){mylog(_0x22f2bb+_0x8189('0x756','8^e]'));sleep(0x1388);return![];}break;case _0x8189('0x696','KgQU'):if(storage[_0x8189('0xa55','$mk^')](_0x8189('0xb26','D9sr'))<=storagesd[_0x8189('0x503','zA$x')](_0x8189('0x505','@9@0'),[0x0])&&storage[_0x8189('0x503','zA$x')](_0x8189('0xab0','D9sr'))<=storagesd['get'](_0x8189('0x2cf','OXCB'),[0x0])){mylog(_0x22f2bb+_0x8189('0xa2f','nFhx'));sleep(0x1388);return![];}case _0x8189('0x452','OXCB'):if(storage[_0x8189('0x8db','KtCK')](_0x8189('0x74f','D9sr'))<=storagesd[_0x8189('0x48f','XLjY')](_0x8189('0x585','rDIx'),[0x0])&&storage[_0x8189('0x17','OXCB')]('ttt2')<=storagesd[_0x8189('0xb07','xq7I')](_0x8189('0x60c','obd!'),[0x0])){mylog(_0x22f2bb+_0x8189('0x6c6','Hrzg'));sleep(0x1388);return![];}case'抖音':if(storage['get'](_0x8189('0x34f','iR28'))<=storagesd[_0x8189('0xaed','obd!')](_0x8189('0x57a','N0vT'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x93d','^)J3'):if(storage[_0x8189('0x8f9','nFhx')]('qtt1')<=storagesd[_0x8189('0x583','Hrzg')](_0x8189('0xa75','6Yss'),[0x0])&&storage[_0x8189('0x7ee','8^e]')](_0x8189('0x520','iR28'))<=storagesd[_0x8189('0x2a5','ZmHf')](_0x8189('0x430','sGM5'),[0x0])){mylog(_0x22f2bb+_0x8189('0xa87','bkiR'));sleep(0x1388);return![];}break;case _0x8189('0x16b','D9sr'):if(storage[_0x8189('0xc4','5[L5')]('ddxw1')<=storagesd[_0x8189('0x7ee','8^e]')](_0x8189('0x73f','V$Te'),[0x0])&&storage[_0x8189('0xf3','bkiR')]('ddxw2')<=storagesd[_0x8189('0x48f','XLjY')](_0x8189('0x454','#^@Q'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x58e','It1b'):if(storage[_0x8189('0x7f1','qg7$')](_0x8189('0x3cc','#g0F'))<=storagesd[_0x8189('0xa6f',')#]u')](_0x8189('0x255','#^@Q'),[0x0])&&storage[_0x8189('0x7f3','&OXO')]('ylkk2')<=storagesd['get']('ylkksp',[0x0])){mylog(_0x22f2bb+_0x8189('0xa87','bkiR'));sleep(0x1388);return![];}break;case _0x8189('0x437','9IRN'):if(storage[_0x8189('0x5a6','#^@Q')]('cdsp2')<=storagesd['get'](_0x8189('0x208','@tbM'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0xa21','KgQU'):if(storage[_0x8189('0x632','sGM5')](_0x8189('0x661',']7uy'))<=storagesd['get'](_0x8189('0x2bd','z^$&'),[0x0])){mylog(_0x22f2bb+_0x8189('0x993','9IRN'));sleep(0x1388);return![];}break;case _0x8189('0x4f2','ZmHf'):if(storage[_0x8189('0x4eb','V$Te')]('jdjsb2')<=storagesd[_0x8189('0x219','N0vT')](_0x8189('0x738','^)J3'),[0x0])){mylog(_0x22f2bb+_0x8189('0x865','#^@Q'));sleep(0x1388);return![];}break;case'红包盒子':if(storage[_0x8189('0x48f','XLjY')](_0x8189('0x730','sGM5'))<=storagesd[_0x8189('0xba','6Yss')](_0x8189('0x8dc','z^$&'),[0x0])&&storage[_0x8189('0x503','zA$x')](_0x8189('0x372','^)J3'))<=storagesd['get']('hbhzsp',[0x0])){mylog(_0x22f2bb+_0x8189('0x3be','*7Da'));sleep(0x1388);return![];}break;case _0x8189('0x142','&OXO'):if(storage[_0x8189('0x7ee','8^e]')](_0x8189('0xb22','^)J3'))<=storagesd['get'](_0x8189('0x67a','z^$&'),[0x0])){mylog(_0x22f2bb+_0x8189('0x7bb','4Yry'));sleep(0x1388);return![];}break;case _0x8189('0x19','[Y2F'):if(storage[_0x8189('0x2c9','p0%o')](_0x8189('0xbe','z^$&'))<=storagesd[_0x8189('0xa76','E]aj')](_0x8189('0x8bb','*7Da'),[0x0])){mylog(_0x22f2bb+_0x8189('0x1bc','1()i'));sleep(0x1388);return![];}break;case _0x8189('0x14','z^$&'):if(storage['get']('fqmfxs1')<=storagesd[_0x8189('0x219','N0vT')](_0x8189('0x198','JX6y'),[0x0])){mylog(_0x22f2bb+_0x8189('0xa2d',')#]u'));sleep(0x1388);return![];}break;case _0x8189('0x22b','&OXO'):if(storage[_0x8189('0x48f','XLjY')]('tys1')<=storagesd[_0x8189('0x443','iR28')](_0x8189('0x800','5eeV'),[0x0])){mylog(_0x22f2bb+_0x8189('0x3d4','(Gim'));sleep(0x1388);return![];}break;case _0x8189('0xbf','#^@Q'):if(storage[_0x8189('0x4eb','V$Te')](_0x8189('0x218','7H#U'))<=storagesd['get'](_0x8189('0x726','O4vp'),[0x0])){mylog(_0x22f2bb+_0x8189('0x7e7','7H#U'));sleep(0x1388);return![];}break;case _0x8189('0x4e4','zA$x'):if(storage[_0x8189('0x234','5eeV')](_0x8189('0xa00','OXCB'))<=storagesd[_0x8189('0x764','D9sr')](_0x8189('0xfc','70r8'),[0x0])){mylog(_0x22f2bb+_0x8189('0x6','KgQU'));sleep(0x1388);return![];}break;case'宝石星球':if(storage['get'](_0x8189('0x787','E]aj'))<=storagesd['get'](_0x8189('0x5b7','@tbM'),[0x0])){mylog(_0x22f2bb+_0x8189('0x350','z^$&'));sleep(0x1388);return![];}break;case'多多果林':if(storage[_0x8189('0xba','6Yss')](_0x8189('0x222','bkiR'))<=storagesd[_0x8189('0xcc','70r8')](_0x8189('0x2b','Hrzg'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case'花赚':if(storage['get'](_0x8189('0x704','HlqN'))<=storagesd[_0x8189('0x632','sGM5')](_0x8189('0x519','O4vp'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x63','4Yry'):if(storage['get'](_0x8189('0x308','7H#U'))<=storagesd[_0x8189('0x234','5eeV')](_0x8189('0x71d','@tbM'),[0x0])){mylog(_0x22f2bb+_0x8189('0x3be','*7Da'));sleep(0x1388);return![];}break;case _0x8189('0x939','XLjY'):if(storage[_0x8189('0x925','wgP%')](_0x8189('0x9a0','p0%o'))<=storagesd[_0x8189('0x503','zA$x')](_0x8189('0x2bb',']uT$'),[0x0])){mylog(_0x22f2bb+_0x8189('0x469','iR28'));sleep(0x1388);return![];}break;case'绿洲':if(storage[_0x8189('0x8f9','nFhx')](_0x8189('0xaa7','BdX2'))<=storagesd[_0x8189('0x8f9','nFhx')](_0x8189('0x3a8','O4vp'),[0x0])){mylog(_0x22f2bb+_0x8189('0x55c','&OXO'));sleep(0x1388);return![];}break;case _0x8189('0x876','HlqN'):if(storage[_0x8189('0x6a','[Y2F')](_0x8189('0x1c1','[Y2F'))<=storagesd[_0x8189('0x5a6','#^@Q')](_0x8189('0x32c','qg7$'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x864','N0vT'):if(storage[_0x8189('0x17','OXCB')](_0x8189('0x8b5','1()i'))<=storagesd[_0x8189('0x7f4','JX6y')]('zhuanyuesc',[0x0])){mylog(_0x22f2bb+_0x8189('0x91b','Jqb7'));sleep(0x1388);return![];}break;case _0x8189('0x2a8','8^e]'):if(storage[_0x8189('0x8db','KtCK')](_0x8189('0x3bd','nFhx'))<=storagesd[_0x8189('0x474','Jqb7')]('wkzzrw',[0x0])&&storage['get'](_0x8189('0x28b','nFhx'))<=storagesd[_0x8189('0x371','^)J3')](_0x8189('0x61b',']7uy'),[0x0])){toast(_0x22f2bb+_0x8189('0x44c','@tbM'));sleep(0x1388);return![];}break;case _0x8189('0x202','@tbM'):if(storage[_0x8189('0x764','D9sr')](_0x8189('0x75e','JX6y'))<=storagesd['get'](_0x8189('0x7a7','5[L5'),[0x0])){toast(_0x22f2bb+_0x8189('0x61d','70r8'));sleep(0x1388);return![];}break;case'小啄赚钱':if(storage['get'](_0x8189('0x80a','#g0F'))<=storagesd[_0x8189('0xc4','5[L5')](_0x8189('0x6eb','Jqb7'),[0x0])){mylog(_0x22f2bb+_0x8189('0x317','HlqN'));sleep(0x1388);sleep(0x1388);return![];}break;case _0x8189('0x73c','70r8'):if(storage[_0x8189('0x66',']7uy')]('ykjsb2')<=storagesd[_0x8189('0xa03','KgQU')](_0x8189('0x161','8^e]'),[0x0])){mylog(_0x22f2bb+_0x8189('0x5','qg7$'));sleep(0x1388);return![];}break;case'点点头条':if(storage['get'](_0x8189('0x55','wgP%'))<=storagesd[_0x8189('0x443','iR28')](_0x8189('0x2cd','ZmHf'),[0x0])){mylog(_0x22f2bb+_0x8189('0x350','z^$&'));sleep(0x1388);return![];}break;case'快音':if(storage[_0x8189('0x443','iR28')](_0x8189('0x7c5','wgP%'))<=storagesd[_0x8189('0x15','*7Da')](_0x8189('0x7ca','$mk^'),[0x0])){mylog(_0x22f2bb+_0x8189('0x61d','70r8'));sleep(0x1388);return![];}break;case _0x8189('0x1','#g0F'):if(storage['get']('asjz2')<=storagesd[_0x8189('0x8f9','nFhx')](_0x8189('0x497','*7Da'),[0x0])){mylog(_0x22f2bb+_0x8189('0xa31',']7uy'));sleep(0x1388);return![];}break;case _0x8189('0xadd','7H#U'):if(storage[_0x8189('0x219','N0vT')]('jrtthb1')<=storagesd[_0x8189('0x361','4Yry')](_0x8189('0x44b','@tbM'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x8c2','@9@0'):if(本地存储[_0x8189('0xf3','bkiR')](_0x8189('0x84','D9sr'))<=storagesd[_0x8189('0x925','wgP%')]('yingkesc',[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x6e8','9IRN'):if(storage[_0x8189('0x6fe','BdX2')](_0x8189('0x597','70r8'))<=storagesd[_0x8189('0x583','Hrzg')]('pddhbsc',[0x0])){mylog(_0x22f2bb+_0x8189('0x43a','@9@0'));sleep(0x1388);return![];}break;case _0x8189('0x3d0','xq7I'):if(storage['get'](_0x8189('0x140','ZmHf'))<=storagesd[_0x8189('0x583','Hrzg')](_0x8189('0x333','rDIx'),[0x0])){mylog(_0x22f2bb+'到达上限,跳过');sleep(0x1388);return![];}break;case _0x8189('0x17d','KtCK'):if(config[_0x8189('0x4f8','5eeV')]<=storagesd['get'](_0x8189('0x19c','rDIx'),[0x0])){mylog(_0x22f2bb+_0x8189('0x6','KgQU'));sleep(0x1388);return![];}break;}当前任务名称=_0x22f2bb;if(悬浮控制台){ui['run'](()=>{悬浮控制台[_0x8189('0xa91',']7uy')]['text'](当前任务名称);});}return!![];}function 点击启动(_0x194563,_0x291cb4){home();sleep(0x3e8);for(var _0x7fa4fe=0x0;_0x7fa4fe<0x8;_0x7fa4fe++){if(_0x194563[_0x8189('0xaa4','*7Da')](_0x8189('0xd1',']uT$'))!=-0x1||_0x194563[_0x8189('0x400','@9@0')]('快手')!=-0x1){if(_0x194563[_0x8189('0x69d','@tbM')](_0x8189('0x52b','E]aj'))!=-0x1){apps=textContains(_0x194563)[_0x8189('0xb47','BdX2')](0x1,0x1,wt*0.999,hg)['findOnce']();}else{apps=text(_0x194563)[_0x8189('0x3f1','70r8')](0x1,0x1,wt*0.999,hg)[_0x8189('0x8b','8^e]')]();}}else{apps=textContains(_0x194563)['boundsInside'](0x1,0x1,wt*0.999,hg)[_0x8189('0xb0a','4Yry')]();}if(apps){pclick(apps[_0x8189('0x5e8','#g0F')]()[_0x8189('0x7b7','7H#U')](),apps['bounds']()[_0x8189('0xc2','KgQU')]()*0.98,0x3c);for(let _0x591f3a=0x0;_0x591f3a<0xf;_0x591f3a++){if(_0x291cb4==currentActivity()){sleep(0x3e8);}else{mylog(_0x194563+_0x8189('0xa70','Jqb7'));return!![];}}return![];}else{swipe(wt*0.8,hg*0.2,0x1,hg*0.2,0x64);sleep(0x7d0);}if(_0x7fa4fe==0x7){return![];}}}function 点击启动APP(_0x42fc95){mylog('开始启动:'+_0x42fc95);var _0x15b3b4=null;sleep(0x258);home();sleep(0x3e8);var _0xd369df=currentActivity();home();sleep(0x3e8);if(app[_0x8189('0x5ed','wgP%')](_0x42fc95)){sleep(0x1770);for(let _0x3fb09c=0x0;_0x3fb09c<0x6;_0x3fb09c++){log(0x1);sleep(0xc8);if(!clickSelf(text('允许'))&&!clickSelf(text(_0x8189('0x2b0',')#]u')))){break;}sleep(0x1f4);}for(let _0x27aff5=0x0;_0x27aff5<0xa;_0x27aff5++){if(_0xd369df==currentActivity()){log(0x2);sleep(0x3e8);}else{log(0x3);mylog(_0x42fc95+_0x8189('0x808','iR28'));return!![];}}mylog(_0x8189('0x89','wgP%'));if(点击启动(_0x42fc95,_0xd369df)){log(0x4);mylog(_0x42fc95+_0x8189('0x6bc','@9@0'));return!![];}mylog(_0x42fc95+_0x8189('0x83e','XLjY'));return![];}else{log(0x5);return 点击启动(_0x42fc95,_0xd369df);}}function 点击启动APP2(_0xc6c505){var _0xb860a9=null;sleep(0x258);home();sleep(0x3e8);home();sleep(0x3e8);if(app[_0x8189('0x94f','ZmHf')](_0xc6c505)){sleep(0x157c);for(let _0x56e4c3=0x0;_0x56e4c3<0x6;_0x56e4c3++){if(!clickSelf(text('允许'))&&!clickSelf(text(_0x8189('0x297','KgQU')))){break;}}mylog(_0xc6c505+_0x8189('0x8c5','ZmHf'));return!![];}else{for(var _0x6cb7f5=0x0;_0x6cb7f5<0x8;_0x6cb7f5++){_0xb860a9=text(_0xc6c505)[_0x8189('0x47e',']uT$')](0x1,0x1,wt*0.999,hg)[_0x8189('0x997',')#]u')]();if(_0xb860a9){press(_0xb860a9[_0x8189('0xb2',']7uy')]()['centerX'](),_0xb860a9[_0x8189('0x565','8^e]')]()[_0x8189('0x96b','zA$x')],0x3c);log(0x5);mylog(_0xc6c505+'启动成功');return!![];}else{swipe(wt*0.8,hg*0.2,0x1,hg*0.2,0x64);sleep(0x7d0);}if(_0x6cb7f5==0x7){mylog('没有找到分身');return![];}}return![];}}function getPackageVersionName(_0x2a4676){importPackage(android[_0x8189('0xa1a','zA$x')]);var _0x7ec48d=context[_0x8189('0x259','D9sr')]();try{var _0x1c0306=_0x7ec48d[_0x8189('0x699',']uT$')](_0x2a4676,0x0);}catch(_0x232b6a){log(_0x232b6a);return null;}return _0x1c0306[_0x8189('0x2c4','D9sr')];}function downloadApp2(_0x5668f9){try{var _0x231dfe=new Intent(Intent[_0x8189('0x6a7','wgP%')]);_0x231dfe[_0x8189('0x7ea','#g0F')](app[_0x8189('0xaab','*7Da')](_0x8189('0x8d7','iR28')+_0x5668f9[0x2]));var _0x4ff7d2=_0x8189('0x30f','HlqN');_0x231dfe[_0x8189('0x433','sGM5')](_0x4ff7d2,_0x8189('0xada','qg7$'));app[_0x8189('0x3d2','OXCB')](_0x231dfe);sleep(0xbb8);textContains(_0x5668f9[0x0])['findOne'](0x2ee0);return!![];}catch(_0x11c5d6){mylog(_0x8189('0x545','HlqN'));return![];}}function downloadApp_guding(_0x3f7f80){app['openUrl'](_0x8189('0x801','XLjY')+_0x3f7f80);}function downloadApp(_0x15cfc8){try{var _0x5be02c=new Intent(Intent[_0x8189('0x6a7','wgP%')]);_0x5be02c[_0x8189('0x762','70r8')](app[_0x8189('0x151','obd!')](_0x8189('0x779','#g0F')+_0x15cfc8));_0x5be02c['setClassName'](_0x8189('0x51c','nFhx'),'com.xiaomi.market.ui.AppDetailActivity');app[_0x8189('0x9e4',']uT$')](_0x5be02c);}catch(_0x1ceef3){var _0x1e1401=new Intent(Intent[_0x8189('0x4ed','E]aj')]);_0x1e1401[_0x8189('0xb27','OXCB')](app['parseUri'](_0x8189('0x8d7','iR28')+_0x15cfc8));_0x1e1401[_0x8189('0xa8c','HlqN')]('com.tencent.android.qqdownloader',_0x8189('0xa6e','obd!'));app[_0x8189('0x92c','rDIx')](_0x1e1401);}}function clearMt(){try{var _0x529df3=id('button1')['text']('确定')[_0x8189('0x45c','7H#U')]();if(_0x529df3){press(_0x529df3['bounds']()['centerX'](),_0x529df3[_0x8189('0x780','$mk^')]()[_0x8189('0x6db','It1b')](),0x78);sleep(0x3e8);}sleep(0x5dc);home();sleep(0x5dc);recents();sleep(0x8fc);var _0x4456fc=查找控件(Array(id(_0x8189('0x54b','It1b')),idContains('clear')),0x2)['findOnce']();if(!_0x4456fc)_0x4456fc=查找控件(Array(id(_0x8189('0x1f8','p0%o')),idContains(_0x8189('0x55b','bkiR'))),0x2)[_0x8189('0x1ce','#g0F')]();if(_0x4456fc){sleep(0x5dc);pclick(_0x4456fc[_0x8189('0xa9e','It1b')]()[_0x8189('0x281','It1b')](),_0x4456fc[_0x8189('0x780','$mk^')]()['centerY']());}sleep(0x7d0);home();sleep(0x7d0);}catch(_0x6c68bd){sleep(0x7d0);home();sleep(0x7d0);}}function pclick(_0x1e9923,_0x3848e7){try{if(0x0<=_0x1e9923&&_0x1e9923<=wt&&0x0<=_0x3848e7&&_0x3848e7<=hg){if(_0x3848e7<0x32){_0x3848e7=_0x3848e7+0x50;_0x1e9923=0x0;}log(_0x1e9923,_0x3848e7);click(_0x1e9923,_0x3848e7);return!![];}else{return![];}}catch(_0x134d98){throw _0x134d98+_0x8189('0x73e','D9sr')+_0x1e9923+'Y:'+_0x3848e7;}}function wait(_0x360577,_0x9ba7d4,_0xb25899){界面=!![];sleep(0x3e8);for(var _0x206756=0x0;_0x206756<_0xb25899;_0x206756++){if(currentActivity()==_0x360577||currentActivity()==_0x9ba7d4){界面=!![];break;}else{sleep(0x3e8);界面=![];}}}function APP内部更新(_0x42fcd7){var _0x14188c=![];var _0x5b79a1=_0x42fcd7[_0x8189('0x7c3','[Y2F')]();if(_0x5b79a1){click(random(_0x5b79a1[_0x8189('0x5a7','N0vT')]()[_0x8189('0x491','D9sr')],_0x5b79a1[_0x8189('0x5e8','#g0F')]()[_0x8189('0x4b','(Gim')]),random(_0x5b79a1[_0x8189('0x43e','obd!')]()[_0x8189('0x156','@tbM')],_0x5b79a1['bounds']()['bottom']));sleep(0x1f40);var _0x2b26c1=text(_0x8189('0xa6a','4Yry'))[_0x8189('0x9b1','E]aj')](0x1388);if(_0x2b26c1){press(_0x2b26c1[_0x8189('0x79c','70r8')]()[_0x8189('0x954','V$Te')](),_0x2b26c1[_0x8189('0x2e0','bkiR')]()[_0x8189('0x32b','ZmHf')](),0x78);sleep(0x1770);}sleep(0x4e20);for(var _0x59426c=0x0;_0x59426c<0x14;_0x59426c++){var _0x1406bf=text('设置')[_0x8189('0x5f6','6Yss')]();var _0x20931a=text('安装')['findOnce']();if(_0x1406bf&&!_0x14188c){click(random(_0x1406bf[_0x8189('0x190','O4vp')]()[_0x8189('0xb43','rDIx')],_0x1406bf[_0x8189('0xb12','BdX2')]()[_0x8189('0x945','70r8')]),random(_0x1406bf['bounds']()[_0x8189('0x5d4','6Yss')],_0x1406bf[_0x8189('0x98a','*7Da')]()[_0x8189('0x36f','^)J3')]));sleep(0x1b58);var _0x32716c=searchTwice(className(_0x8189('0x4d9','7H#U')),className(_0x8189('0xa25','#^@Q')))['findOnce']();if(_0x32716c){click(random(_0x32716c[_0x8189('0xa74','rDIx')]()['left'],_0x32716c['bounds']()[_0x8189('0x521','@tbM')]),random(_0x32716c[_0x8189('0xae3','#^@Q')]()[_0x8189('0x86e','D9sr')],_0x32716c['bounds']()[_0x8189('0xb46','JX6y')]));sleep(0x7d0);back();sleep(0x7d0);var _0x20931a=text('安装')['findOne'](0x1388);if(_0x20931a){click(random(_0x20931a[_0x8189('0xb3d','sGM5')]()[_0x8189('0x480','obd!')],_0x20931a[_0x8189('0x9d1','z^$&')]()[_0x8189('0x667','ZmHf')]),random(_0x20931a[_0x8189('0x1da','ZmHf')]()[_0x8189('0x417','*7Da')],_0x20931a[_0x8189('0xaeb','5[L5')]()['bottom']));sleep(0x7d0);for(var _0x1de670=0x0;_0x1de670<0x14;_0x1de670++){var _0x3e50c3=text('打开')[_0x8189('0x90b',']uT$')]();if(_0x3e50c3){click(random(_0x3e50c3[_0x8189('0x486','Jqb7')]()[_0x8189('0x1de','ZmHf')],_0x3e50c3[_0x8189('0x43e','obd!')]()[_0x8189('0x74c','7H#U')]),random(_0x3e50c3[_0x8189('0xa9e','It1b')]()[_0x8189('0x393','obd!')],_0x3e50c3[_0x8189('0x682','JX6y')]()[_0x8189('0x880','z^$&')]));var _0x1af10d=!![];sleep(0x7530);break;}else{sleep(0x1770);}}}}}else if(_0x20931a&&!_0x14188c){click(random(_0x20931a[_0x8189('0x79c','70r8')]()[_0x8189('0x578','*7Da')],_0x20931a[_0x8189('0x180','9IRN')]()[_0x8189('0x667','ZmHf')]),random(_0x20931a[_0x8189('0x40b','4Yry')]()[_0x8189('0x731','rDIx')],_0x20931a['bounds']()[_0x8189('0x3ba','qg7$')]));sleep(0x7d0);for(var _0x1de670=0x0;_0x1de670<0x14;_0x1de670++){var _0x3e50c3=text('打开')[_0x8189('0x6b5','O4vp')]();if(_0x3e50c3){click(random(_0x3e50c3[_0x8189('0x565','8^e]')]()[_0x8189('0x7a2','z^$&')],_0x3e50c3[_0x8189('0xa9e','It1b')]()[_0x8189('0x598','zA$x')]),random(_0x3e50c3[_0x8189('0x1da','ZmHf')]()[_0x8189('0x45a','O4vp')],_0x3e50c3[_0x8189('0x7bc','iR28')]()[_0x8189('0x420','Jqb7')]));var _0x1af10d=!![];sleep(0x7530);break;}else{sleep(0x1770);}}}else if(_0x14188c){break;}else{sleep(0x1770);}}var _0x3f541d=text('允许')[_0x8189('0x9a','p0%o')]();if(_0x3f541d){sleep(0x7d0);press(_0x3f541d[_0x8189('0x935','@tbM')]()[_0x8189('0x954','V$Te')](),_0x3f541d['bounds']()[_0x8189('0x1b1','^)J3')](),0x78);}}}var $58转阅任务=function(){var _0x364419=device[_0x8189('0x5e9','qg7$')];var _0x44d364=device[_0x8189('0x4c5','It1b')];function _0x250523(_0x5d16f0,_0x462fcb,_0x4e305d){var _0x509b8d=new Array();_0x509b8d[_0x5d16f0]=0x0;_0x509b8d[_0x462fcb]=0x0;if(!_0x4e305d){_0x4e305d=0x1;}for(var _0x34fbd6=0x0;_0x34fbd6<_0x4e305d;_0x34fbd6++){boundsInside(0x0,0x1e,_0x364419,_0x44d364)[_0x8189('0x973','KgQU')]()[_0x8189('0x12a','ZmHf')](function(_0x37d6aa){var _0x39b746=_0x37d6aa['id']();if(_0x39b746){if(_0x39b746[_0x8189('0xe3','70r8')](_0x5d16f0)!=-0x1){_0x509b8d[_0x5d16f0]=_0x37d6aa;}if(_0x39b746[_0x8189('0x61f','O4vp')](_0x462fcb)!=-0x1){_0x509b8d[_0x462fcb]=_0x37d6aa;}}if(_0x509b8d[_0x5d16f0]!=''&&_0x509b8d[_0x462fcb]!=''){return _0x509b8d;}});if(_0x509b8d[_0x5d16f0]||_0x509b8d[_0x462fcb]){return _0x509b8d;}sleep(0x1f4);}return _0x509b8d;}function _0x4c8abc(_0xecd767,_0x374cd8,_0x3ed01c){var _0x2afa9e=_0x250523(_0xecd767,_0x374cd8,_0x3ed01c);if(_0x2afa9e[_0xecd767]){try{pclick(_0x2afa9e[_0xecd767][_0x8189('0x43e','obd!')]()['centerX'](),_0x2afa9e[_0xecd767]['bounds']()[_0x8189('0xad5','70r8')]());return!![];}catch(_0x4c4839){mylog(_0x4c4839);}}else if(_0x2afa9e[_0x374cd8]){try{pclick(_0x2afa9e[_0x374cd8][_0x8189('0x78','6Yss')]()[_0x8189('0x1a6','6Yss')](),_0x2afa9e[_0x374cd8][_0x8189('0x2e0','bkiR')]()[_0x8189('0xa44','KtCK')]());return!![];}catch(_0x5ab090){mylog(_0x5ab090);}}else{return![];}}function _0x15ccfe(_0x8d3e51,_0x1eb4e7,_0x4f1f9b){var _0x324294=new Array();_0x324294[_0x8d3e51]=0x0;_0x324294[_0x1eb4e7]=0x0;if(!_0x4f1f9b){_0x4f1f9b=0x1;}for(var _0xaf3c6c=0x0;_0xaf3c6c<_0x4f1f9b;_0xaf3c6c++){boundsInside(0x0,0x1e,_0x364419,_0x44d364)['find']()[_0x8189('0x7e6','HlqN')](function(_0x1354cf){var _0x27ccd9=_0x1354cf['text']();var _0x5eee92=_0x1354cf[_0x8189('0xdb','#^@Q')]();if(_0x27ccd9){if(_0x27ccd9[_0x8189('0x3ef','[Y2F')](_0x8d3e51)!=-0x1){_0x324294[_0x8d3e51]=_0x1354cf;}if(_0x27ccd9[_0x8189('0x61f','O4vp')](_0x1eb4e7)!=-0x1){_0x324294[_0x1eb4e7]=_0x1354cf;}}if(_0x5eee92){if(_0x5eee92['indexOf'](_0x8d3e51)!=-0x1){_0x324294[_0x8d3e51]=_0x1354cf;}if(_0x5eee92[_0x8189('0x369','p0%o')](_0x1eb4e7)!=-0x1){_0x324294[_0x1eb4e7]=_0x1354cf;}}if(_0x324294[_0x8d3e51]!=''&&_0x324294[_0x1eb4e7]!=''){return _0x324294;}});if(_0x324294[_0x8d3e51]||_0x324294[_0x1eb4e7]){return _0x324294;}sleep(0x1f4);}return _0x324294;}function _0x2cc383(_0x102c3d,_0x242f53){var _0x6aa02e=![];if(!_0x242f53){_0x242f53=0x1;}for(var _0x34c768=0x0;_0x34c768<_0x242f53;_0x34c768++){sleep(0x320);boundsInside(0x0,0x1e,_0x364419,_0x44d364)[_0x8189('0x3c3','ZmHf')]()[_0x8189('0x7e6','HlqN')](function(_0x3315a5){var _0x325b7f=_0x3315a5[_0x8189('0x9b8','z^$&')]();var _0x15a2e2=_0x3315a5[_0x8189('0x328','HlqN')]();if(_0x325b7f){if(_0x325b7f==_0x102c3d){_0x6aa02e=_0x3315a5;}}if(_0x15a2e2){if(_0x15a2e2==_0x102c3d){_0x6aa02e=_0x3315a5;}}if(_0x6aa02e){return _0x6aa02e;}});if(_0x6aa02e){return _0x6aa02e;}}return _0x6aa02e;}function _0x5a335d(_0x52aaed,_0x35fe4a){var _0x2275b0=_0x2cc383(_0x52aaed,_0x35fe4a);if(_0x2275b0){click(_0x2275b0[_0x8189('0xb12','BdX2')]()[_0x8189('0x812','z^$&')](),_0x2275b0[_0x8189('0xb2',']7uy')]()[_0x8189('0x3c9','7H#U')]());return!![];}else{if(click(_0x52aaed,0x0)){return!![];}}return![];}function _0x2cc916(_0x123781,_0x50bd2e){var _0x1be215=![];if(!_0x50bd2e){_0x50bd2e=0x1;}for(var _0x4d099e=0x0;_0x4d099e<_0x50bd2e;_0x4d099e++){boundsInside(0x0,0x1e,_0x364419,_0x44d364)[_0x8189('0x605','#^@Q')]()[_0x8189('0x56b','rDIx')](function(_0x1d5109){var _0x5e39a1=_0x1d5109[_0x8189('0x3df','BdX2')]();var _0xeeff7c=_0x1d5109[_0x8189('0x4e3','5eeV')]();if(_0x5e39a1){if(_0x5e39a1['indexOf'](_0x123781)!=-0x1){_0x1be215=_0x1d5109;}}if(_0xeeff7c){if(_0xeeff7c[_0x8189('0x369','p0%o')](_0x123781)!=-0x1){_0x1be215=_0x1d5109;}}if(_0x1be215){return _0x1be215;}});if(_0x1be215){return _0x1be215;}sleep(0x1f4);}return _0x1be215;}function _0x103810(_0x37f8d2,_0x589ccc){var _0x17c788=_0x2cc916(_0x37f8d2,_0x589ccc);if(_0x17c788){click(_0x17c788['bounds']()[_0x8189('0x65d','#g0F')](),_0x17c788[_0x8189('0x159','xq7I')]()[_0x8189('0x5ad','Jqb7')]());return!![];}return![];}function _0x244a08(_0x3e3e39,_0x4d3f26){for(var _0x1a9d71=0x0;_0x1a9d71<_0x4d3f26;_0x1a9d71++){if(currentActivity()==_0x3e3e39){return!![];}sleep(0x3e8);}return![];}function _0x40ea47(_0x5ab43b){if(/.*[\u4e00-\u9fa5]+.*$/[_0x8189('0x7ec','V$Te')](_0x5ab43b)){return!![];}return![];}function _0x55f9d6(){var _0x5d2a38=getClip();if(!_0x5d2a38){app[_0x8189('0x7bf','#^@Q')](当前包名);sleep(0xfa0);_0x5d2a38=getClip();if(_0x5d2a38){setClip('');}app[_0x8189('0x67d','5[L5')](_0x8189('0x8fd','It1b'));sleep(0xbb8);}return _0x5d2a38;}function _0x1144fd(_0x1a7541,_0x36044f){var _0x11b73c=![];if(!_0x36044f){_0x36044f=0x1;}for(var _0x30e520=0x0;_0x30e520<_0x36044f;_0x30e520++){boundsInside(0x0,0x1e,_0x364419,_0x44d364)[_0x8189('0xb48','6Yss')]()[_0x8189('0xaa3','D9sr')](function(_0x217bb2){var _0x334e31=_0x217bb2['id']();if(_0x334e31){if(_0x334e31[_0x8189('0x478',')#]u')](_0x1a7541)!=-0x1){_0x11b73c=_0x217bb2;}}if(_0x11b73c){return _0x11b73c;}});if(_0x11b73c){return _0x11b73c;}sleep(0x1f4);}return _0x11b73c;}function _0x5c8b1f(_0x481fb8,_0x155ab8){var _0x3d6285=_0x1144fd(_0x481fb8,_0x155ab8);if(_0x3d6285){pclick(_0x3d6285[_0x8189('0x12c','E]aj')]()[_0x8189('0xac5','8^e]')](),_0x3d6285['bounds']()[_0x8189('0x419','nFhx')]());return!![];}else{return![];}}var _0x204f30={};_0x204f30['title']=_0x8189('0x517','5[L5');_0x204f30[_0x8189('0xa0a','N0vT')]=_0x8189('0x59b','70r8');_0x204f30['characteristic']=_0x8189('0x2f','*7Da');_0x204f30[_0x8189('0x250','qg7$')]=storage[_0x8189('0x6fe','BdX2')](_0x8189('0x240','@9@0'),['']);_0x204f30[_0x8189('0x36e','^)J3')]=storage[_0x8189('0x71','#g0F')]('zhuanyue_password',['']);_0x204f30[_0x8189('0xa3','Hrzg')]='';_0x204f30[_0x8189('0x5fa','Jqb7')]='';_0x204f30['cb1']=!![];_0x204f30[_0x8189('0x390','@9@0')]=![];_0x204f30[_0x8189('0x612','70r8')]=![];_0x204f30[_0x8189('0x96e','rDIx')]=storagesd[_0x8189('0x234','5eeV')](_0x8189('0x42d','E]aj'),[0x0]);_0x204f30[_0x8189('0x5a2','E]aj')]=storage[_0x8189('0x7ee','8^e]')](_0x8189('0x872','#g0F'),['30']);_0x204f30[_0x8189('0xf0','KtCK')]=storagesd[_0x8189('0x7f4','JX6y')](_0x8189('0x5b9','sGM5'),['']);if(_0x204f30[_0x8189('0x4ad','iR28')]==''){_0x204f30[_0x8189('0xf0','KtCK')]=storage['get'](_0x8189('0x518','OXCB'),['30']);}_0x204f30[_0x8189('0x2c0','xq7I')]=storage[_0x8189('0x632','sGM5')]('zhuanyue_fangan',['阅读']);_0x204f30['findTimeout']='1000';function _0x29d0fa(){if(_0x204f30[_0x8189('0x57c','*7Da')]<0x0||_0x204f30[_0x8189('0x9d5','&OXO')]>_0x204f30[_0x8189('0x7da','5eeV')]){mylog('当日授权次数不足，请联系管理员！');return!![];}mylog(_0x8189('0x223','KgQU'));_0x3e40ff();mylog(_0x8189('0x414','zA$x'));};function _0x3e40ff(){点击启动APP('58同城');sleep(0xbb8);var _0x1a5569=Date[_0x8189('0x4a9','ZmHf')](new Date())/0x3e8;var _0x40d006=_0x1a5569+storage[_0x8189('0x267','7H#U')](_0x8189('0x40e','qg7$'),[0x1])*0xe10;var _0x1252e8=0x0;while(!![]){mylog(_0x8189('0x542','8^e]')+_0x204f30['limit']);storagesd['put']('zhuanyue_taskNum',_0x204f30[_0x8189('0x3e1','1()i')]);storagesd[_0x8189('0x238','4Yry')](_0x8189('0x4ba','1()i'),_0x204f30[_0x8189('0x656','8^e]')]);if(Date[_0x8189('0x69a','Jqb7')](new Date())/0x3e8>_0x40d006){storagesd[_0x8189('0x581','It1b')]('zhuanyuesc',parseInt(ui[_0x8189('0x77f','8^e]')][_0x8189('0x923','9IRN')]()));storagesd[_0x8189('0x203',']uT$')](_0x8189('0x91','9IRN'),storage[_0x8189('0x371','^)J3')](_0x8189('0x984','HlqN')));return!![];}if(_0x204f30[_0x8189('0x85','ZmHf')]<0x0||_0x204f30[_0x8189('0x711','iR28')]>_0x204f30['totalNum']){storagesd[_0x8189('0x604',']7uy')](_0x8189('0x426','JX6y'),parseInt(ui['zhuanyue1'][_0x8189('0xa83','Jqb7')]()));storagesd[_0x8189('0x4f9','ZmHf')]('zhuanyuesc',storage[_0x8189('0x6ba',']uT$')](_0x8189('0x284','#^@Q')));return!![];}var _0x33db0f=![];var _0xb4d3d=_0x250523(_0x8189('0x119','iR28'),'',0x2);if(_0xb4d3d[_0x8189('0x6f3','$mk^')]){mylog(_0x8189('0x3f0',']uT$'));_0x33db0f=_0x2f1377();sleep(0x3e8);if(!_0x33db0f){_0x1252e8++;}else{_0x1252e8=0x0;}}else{_0xb4d3d=![];}var _0x1e0fb7=![];var _0x5f3135=_0x15ccfe('首页','任务',0x1);if(_0x5f3135['首页']&&_0x5f3135['任务']){mylog(_0x8189('0x9f5','xq7I'));_0x1e0fb7=_0x234a4b();sleep(0x3e8);if(!_0x1e0fb7){_0x1252e8++;}else{_0x1252e8=0x0;}}else{_0x5f3135=![];}var _0x5dbd23=![];var _0xe969d8=_0x2cc916(_0x8189('0x96c',')#]u'),0x1);if(_0xe969d8){mylog(_0x8189('0x227','BdX2'));_0x5dbd23=_0x3bdbd2();sleep(0x3e8);if(!_0x5dbd23){_0x1252e8++;}else{_0x1252e8=0x0;}}else{_0xe969d8=![];}var _0x2a706d=![];var _0x3005b2=_0x15ccfe('微信','发表',0x1);if(_0x3005b2['微信']&&_0x3005b2['发表']){mylog('当前进入微信发表页');_0x2a706d=_0x24d667();sleep(0x3e8);if(_0x3005b2=='0'){_0x1252e8++;}else if(_0x3005b2=='2'){mylog(_0x8189('0x43',']uT$'));storagesd[_0x8189('0x4cb','8^e]')](_0x8189('0x2e3','KtCK'),parseInt(ui[_0x8189('0x45','4Yry')]['getText']()));storagesd[_0x8189('0x3a6','O4vp')]('zhuanyuesc',storage[_0x8189('0xf3','bkiR')]('zhuanyue1'));return!![];}else if(_0x3005b2=='1'){_0x2a706d=!![];_0x1252e8=0x0;}}else{_0x3005b2=![];}var _0x22ee80=![];var _0x15b7cb=_0x244a08(_0x8189('0xa','ZmHf'),0x1);if(_0x15b7cb){mylog(_0x8189('0xb4a','z^$&'));_0x22ee80=_0x436305();sleep(0x3e8);if(!_0x22ee80){_0x1252e8++;}else{_0x1252e8=0x0;}}else{_0x15b7cb=![];}var _0x44bec8=![];var _0x4b35bd=_0x244a08(_0x8189('0x6d1','It1b'),0x1);if(_0x4b35bd){mylog(_0x8189('0x1a','D9sr'));_0x44bec8=_0x34db62();sleep(0x3e8);if(!_0x44bec8){_0x1252e8++;}else{_0x1252e8=0x0;}}var _0x2718e9=![];var _0x54c7e7=_0x244a08(_0x8189('0x3c2','5eeV'),0x1);if(_0x54c7e7){mylog(_0x8189('0x2ff','iR28'));var _0x2718e9=_0x3971bf();sleep(0x3e8);if(!_0x2718e9){_0x1252e8++;}else{_0x1252e8=0x0;}}if(!_0xb4d3d&&!_0x5f3135&&!_0xe969d8&&!_0x3005b2&&!_0x15b7cb&&!_0x4b35bd&&!_0x54c7e7){_0x1252e8++;log(_0x8189('0x1f9','8^e]')+_0x1252e8);}if(_0x1252e8>0x4){mylog(_0x8189('0xdd','rDIx'));_0x1252e8=0x0;home();clearMt();点击启动APP(_0x8189('0x601','Hrzg'));}}}function _0x2be42c(){y1=Math[_0x8189('0x7b4','#^@Q')](device[_0x8189('0x757','(Gim')]*0.7);y2=0x78;x=Math[_0x8189('0x24','N0vT')](device[_0x8189('0x87e','JX6y')]/0xc);swipe(x,y1,x,y2,0x258);}function _0x2f1377(){for(var _0x1c7972=0x0;_0x1c7972<0x3;_0x1c7972++){var _0x314d3d=id(_0x8189('0x6d2','9IRN'))['text']('我的')[_0x8189('0x288','HlqN')](0x3e8);if(_0x314d3d){click(_0x314d3d[_0x8189('0x8c3','&OXO')]()[_0x8189('0x5b5',']uT$')](),_0x314d3d[_0x8189('0x735','OXCB')]()['centerY']());break;}if(_0x1c7972==0x2){click(Math[_0x8189('0x772',']uT$')](device[_0x8189('0x29b','#^@Q')]/0x5*4.5),Math[_0x8189('0xb2b','70r8')](device[_0x8189('0x71a','9IRN')]-0xa));sleep(0x3e8);_0x5a335d('我的');}}sleep(0x1f4);for(var _0x1c7972=0x0;_0x1c7972<0x3;_0x1c7972++){var _0xd70d6d=text(_0x8189('0x6a5','V$Te'))[_0x8189('0x8e5','z^$&')](0x7d0);if(_0xd70d6d){click(_0xd70d6d[_0x8189('0x190','O4vp')]()[_0x8189('0x274','9IRN')],_0xd70d6d['bounds']()[_0x8189('0x724','#g0F')]-0xc8);sleep(0x7d0);var _0xd70d6d=text(_0x8189('0x705',']7uy'))[_0x8189('0x17c','BdX2')](0x3e8);if(_0xd70d6d){try{className('android.widget.LinearLayout')[_0x8189('0x327','(Gim')](0x1,hg*0.08,wt-0x1,hg*0.48)[_0x8189('0x931','8^e]')](0xa)[_0x8189('0x3f3','Jqb7')](0x7d0)[_0x8189('0x56d','bkiR')](0x0)['click']();sleep(0x3e8);}catch(_0x1b8602){mylog(_0x8189('0x987',')#]u'));try{className('android.widget.ImageView')['clickable'](!![])[_0x8189('0x3cb','@tbM')](0x1,hg*0.08,wt-0x1,hg*0.48)[_0x8189('0x3cd','It1b')](0xb)[_0x8189('0x4d3','qg7$')](0x7d0)[_0x8189('0x58f','Hrzg')]();}catch(_0x21a939){}}}break;}else{_0x2be42c();}}var _0x44df7e=_0x244a08('com.wuba.hybrid.CommonWebActivity',0x8);return _0x44df7e;}function _0x234a4b(){var _0x2bee5a=text('任务')[_0x8189('0x85f',')#]u')](0x0,Math[_0x8189('0xa78',')#]u')](device[_0x8189('0x970','rDIx')]*0.8),device[_0x8189('0x8df','z^$&')],device[_0x8189('0xd','wgP%')])['findOne'](0x7d0);if(_0x2bee5a){click(_0x2bee5a[_0x8189('0xb2',']7uy')]()['centerX'](),_0x2bee5a[_0x8189('0x92b','qg7$')]()['centerY']());}else{click(Math[_0x8189('0x2d0','Hrzg')](device[_0x8189('0x39d','@9@0')]/0x4+device['width']/0x8),Math[_0x8189('0x7de','^)J3')](device[_0x8189('0xa81','JX6y')]-0x3c));}sleep(0x7d0);if(device[_0x8189('0x360','qg7$')]==_0x8189('0x9bf','6Yss')){var _0x4d045c=_0x15ccfe(_0x8189('0x89f','Hrzg'),_0x8189('0xa97','ZmHf'),0x2);if(_0x4d045c[_0x8189('0xa3b','N0vT')]&&_0x4d045c[_0x8189('0x33c','*7Da')]){var _0x30bbf5=_0x4d045c[_0x8189('0x70d','*7Da')];click(_0x30bbf5[_0x8189('0x682','JX6y')]()[_0x8189('0x7b7','7H#U')](),_0x30bbf5[_0x8189('0xaf2','p0%o')]()[_0x8189('0x90f','$mk^')]());sleep(0x1f4);click(wt/0x2,0xeb);sleep(0x1f4);click(_0x30bbf5[_0x8189('0x698','@9@0')]()[_0x8189('0x818','9IRN')](),_0x30bbf5[_0x8189('0x180','9IRN')]()[_0x8189('0x66e','(Gim')]());sleep(0x1f4);click(wt/0x2,0x1aa);sleep(0x1f4);}var _0x4d045c=_0x15ccfe('推荐任务','默认排序',0x4);if(_0x4d045c[_0x8189('0x978','5[L5')]){sleep(0x1f4);var _0x48a9ba=_0x4d045c[_0x8189('0x21c','V$Te')];click(_0x48a9ba[_0x8189('0x180','9IRN')]()[_0x8189('0x732','rDIx')](),_0x48a9ba[_0x8189('0x5f2',']uT$')]()['centerY']());sleep(0x1f4);click(wt/0x2,0x1aa);}sleep(0x1f4);if(_0x4d045c[_0x8189('0x9a7','z^$&')]){var _0x32f30c=_0x4d045c[_0x8189('0x6f','70r8')];click(_0x32f30c[_0x8189('0xa90','zA$x')]()['centerX'](),_0x32f30c[_0x8189('0xa9e','It1b')]()[_0x8189('0x401','xq7I')]());sleep(0x1f4);click(wt/0x2,0x1aa);}}else{var _0x4d045c=_0x15ccfe(_0x8189('0x3e3','HlqN'),'未分享优先',0x2);if(_0x4d045c[_0x8189('0xa27','sGM5')]&&_0x4d045c[_0x8189('0x2ce','zA$x')]){var _0x30bbf5=_0x4d045c[_0x8189('0x104','#g0F')];click(_0x30bbf5['bounds']()['centerX'](),_0x30bbf5['bounds']()[_0x8189('0xad5','70r8')]());sleep(0x1f4);_0x5a335d(_0x8189('0x694',']uT$'),0x2);sleep(0x1f4);click(_0x30bbf5[_0x8189('0x966','KtCK')]()[_0x8189('0x3fc','qg7$')](),_0x30bbf5[_0x8189('0x2e0','bkiR')]()['centerY']());sleep(0x1f4);_0x5a335d(_0x8189('0xab1','&OXO'),0x2);sleep(0x1f4);}var _0x4d045c=_0x15ccfe(_0x8189('0x1bf','$mk^'),'默认排序',0x4);if(_0x4d045c[_0x8189('0x3fd','4Yry')]){sleep(0x1f4);var _0x48a9ba=_0x4d045c['推荐任务'];click(_0x48a9ba['bounds']()['centerX'](),_0x48a9ba[_0x8189('0x486','Jqb7')]()[_0x8189('0x32b','ZmHf')]());sleep(0x1f4);if(!click('精选任务')){_0x5a335d(_0x8189('0x304','sGM5'),0x4);}}sleep(0x1f4);if(_0x4d045c['默认排序']){var _0x32f30c=_0x4d045c[_0x8189('0x18d','5eeV')];click(_0x32f30c[_0x8189('0xa5c','wgP%')]()['centerX'](),_0x32f30c[_0x8189('0x486','Jqb7')]()[_0x8189('0x752','@tbM')]());sleep(0x1f4);_0x5a335d(_0x8189('0x991','nFhx'),0x2);}}sleep(0x3e8);_0x5a335d(_0x8189('0x6ac','4Yry'),0x2);sleep(0x1f4);var _0xc84525=text('任务详情')[_0x8189('0x74e','6Yss')](0xbb8);if(_0xc84525){return!![];}else{return![];}}function _0x3bdbd2(){for(var _0x320779=0x0;_0x320779<0x3;_0x320779++){var _0x451269=_0x15ccfe(_0x8189('0xa05','nFhx'),'分享赚现金',0x8);var _0x4f9604=_0x451269[_0x8189('0x12','O4vp')];var _0x33e1f0=_0x451269[_0x8189('0x330','D9sr')];if(_0x4f9604&&_0x33e1f0){break;}else{back();sleep(0x3e8);_0x5a335d(_0x8189('0x6ac','4Yry'),0x2);}}sleep(0x3e8);if(!_0x5a335d('分享赚现金',0x2)){click(_0x8189('0x256','ZmHf'),0x0);}sleep(0x1f4);if(!_0x5a335d(_0x8189('0x7b2','*7Da'),0x2)){click(_0x8189('0x137','OXCB'),0x0);}sleep(0x1f4);if(!_0x5a335d(_0x8189('0x41c','nFhx'),0x2)){click(_0x8189('0xaa1','@tbM'),0x0);}for(var _0x320779=0x0;_0x320779<0x14;_0x320779++){var _0x451269=_0x15ccfe('发表','微信',0x2);if(_0x451269['发表']&&_0x451269['微信']){mylog('准备微信发表');return!![];}var _0x181ef6=_0x2cc383('好的',0x2);if(_0x181ef6){if(className(_0x8189('0x85a',']7uy'))[_0x8189('0x83c','OXCB')](_0x8189('0x2e2','p0%o'))[_0x8189('0x4c1','4Yry')]()){className(_0x8189('0x82d','sGM5'))[_0x8189('0x6fc','iR28')]('好的')[_0x8189('0x941','70r8')]();sleep(0x5dc);app[_0x8189('0x1df','6Yss')](_0x8189('0xa88','7H#U'));for(var _0x306040=0x0;_0x306040<0x4;_0x306040++){var _0x324a02=_0x244a08('com.tencent.mm.ui.LauncherUI',0x2);if(_0x324a02){break;}}sleep(0x3e8);return!![];}else if(_0x2cc916(_0x8189('0x70e','5eeV'),0x2)){_0x5a335d('好的',0x2);sleep(0x5dc);back();sleep(0x9c4);_0x5a335d(_0x8189('0x6d4','ZmHf'),0x2);sleep(0x3e8);return!![];}else{className(_0x8189('0x750','^)J3'))[_0x8189('0x8cb','8^e]')]('好的')[_0x8189('0x39b','1()i')]();sleep(0x3e8);_0x2be42c();sleep(0x3e8);_0x2be42c();sleep(0x5dc);_0x5a335d('立即分享',0x2);sleep(0x3e8);return!![];};}}back();return![];}function _0x24d667(){var _0x492a02=text('发表')[_0x8189('0x23a','rDIx')](!![])[_0x8189('0x18e','V$Te')](0x3e8);if(_0x492a02){_0x492a02[_0x8189('0x49f','HlqN')]();}else{_0x5a335d('发表',0x2);}for(var _0x318c0b=0x0;_0x318c0b<0x3;_0x318c0b++){var _0x5ccd34=_0x2cc916('好的',0x2);if(_0x5ccd34){if(className(_0x8189('0x5a3','bkiR'))[_0x8189('0x2b5','D9sr')](_0x8189('0x31b','*7Da'))['exists']()){className('android.widget.Button')[_0x8189('0x6a4','D9sr')]('好的')[_0x8189('0x4b9','(Gim')]();sleep(0x3e8);app[_0x8189('0x3b0','D9sr')](_0x8189('0x229','qg7$'));for(var _0xd43857=0x0;_0xd43857<0x4;_0xd43857++){var _0x5e2b18=_0x244a08('com.tencent.mm.ui.LauncherUI',0x2);if(_0x5e2b18){break;}}sleep(0x3e8);return 0x1;}else{className(_0x8189('0x27d','wgP%'))[_0x8189('0x6fc','iR28')]('好的')[_0x8189('0x8dd','OXCB')]();sleep(0x5dc);click('立即分享',0x0);sleep(0x3e8);return 0x1;};}}return 0x0;}function _0x436305(){var _0x54d71b=text('发现')[_0x8189('0x6d9','5[L5')](0x0,Math[_0x8189('0x4ac','OXCB')](device[_0x8189('0xa81','JX6y')]*0.8),device[_0x8189('0x1c8',']uT$')],device[_0x8189('0x5c9','KtCK')])['findOne'](0x7d0);if(_0x54d71b){click(_0x54d71b[_0x8189('0x5e8','#g0F')]()[_0x8189('0x26d','(Gim')](),_0x54d71b[_0x8189('0x79c','70r8')]()[_0x8189('0x6a6','*7Da')]());}else{click(Math[_0x8189('0x1c4','zA$x')](device[_0x8189('0x326','p0%o')]/0x4*0x2+device[_0x8189('0x663','Jqb7')]/0x8),Math[_0x8189('0x53e','iR28')](device[_0x8189('0x588','bkiR')]-0x3c));}sleep(0x1f4);for(var _0x37290d=0x0;_0x37290d<0x3;_0x37290d++){var _0x11da39=id('title')[_0x8189('0xbc',')#]u')](_0x8189('0x241','wgP%'))[_0x8189('0x327','(Gim')](0x1,0x1,device[_0x8189('0x337','zA$x')],device[_0x8189('0x757','(Gim')])[_0x8189('0x80','7H#U')](0x3e8);if(_0x11da39){sleep(0x3e8);click(_0x11da39['bounds']()[_0x8189('0x281','It1b')](),_0x11da39[_0x8189('0x7bc','iR28')]()[_0x8189('0x32b','ZmHf')]());}else{mylog(_0x8189('0x6ea','^)J3'));_0x5a335d(_0x8189('0x1be','$mk^'),0x2);}sleep(0xfa0);var _0x52f1b2=_0x244a08(_0x8189('0x2c7','E]aj'),0x4);if(_0x52f1b2){mylog(_0x8189('0x26f','5eeV'));break;}if(_0x37290d==0x2){return![];}}if(!_0x34db62()){return![];}sleep(0x3e8);var _0x4542fe=text('我')[_0x8189('0x1a2','JX6y')](0x0,Math[_0x8189('0x552','BdX2')](device[_0x8189('0xb3e','zA$x')]*0.8),device['width'],device['height'])[_0x8189('0xb4e','#g0F')](0xbb8);if(_0x4542fe){click(_0x4542fe['bounds']()[_0x8189('0x76d','p0%o')](),_0x4542fe['bounds']()[_0x8189('0x3c9','7H#U')]());}else{sleep(0x3e8);click(Math['round'](device[_0x8189('0x7a9','8^e]')]/0x4*0x3+device[_0x8189('0x767','V$Te')]/0x8),Math['round'](device[_0x8189('0x9c7','V$Te')]-0x3c));}sleep(0x7d0);var _0x4001e3=id(_0x8189('0x84d','XLjY'))[_0x8189('0xaf5','KtCK')]('收藏')[_0x8189('0x3c1','bkiR')](0x7d0);if(_0x4001e3){click(_0x4001e3[_0x8189('0x735','OXCB')]()[_0x8189('0x954','V$Te')](),_0x4001e3[_0x8189('0x12c','E]aj')]()[_0x8189('0x32d','XLjY')]());}else{mylog('没有找到收藏,换方式');_0x5a335d('收藏',0x2);}sleep(0xfa0);return _0x3971bf();}function _0x34db62(){var _0x51cff2=id('ho')['findOne'](0x64);if(_0x51cff2){var _0x4c3cb9=_0x51cff2[_0x8189('0x4cc','nFhx')]()[_0x8189('0x96b','zA$x')];}else{var _0x4c3cb9=device[_0x8189('0x91c','p0%o')];}var _0x1c5a26=id(_0x8189('0x616','1()i'))[_0x8189('0x3cb','@tbM')](0x0,0x0,device['width'],_0x4c3cb9)['className'](_0x8189('0x814','7H#U'))[_0x8189('0x47b','@tbM')](!![])[_0x8189('0xb39',')#]u')](0x13)[_0x8189('0x3e9','[Y2F')](!![])[_0x8189('0x9aa','obd!')](0xbb8);if(_0x1c5a26){for(var _0x2384c0=0x0;_0x2384c0<0x5;_0x2384c0++){_0x1c5a26[_0x8189('0xb2e','70r8')]();sleep(Math[_0x8189('0x9b5','wgP%')](_0x2384c0*0x1f4));var _0x1ac080=_0x5a335d('收藏',0x2);if(_0x1ac080){break;}sleep(0x1f4);}sleep(0x5dc);_0x5a335d(_0x8189('0x637','9IRN'),0x2);var _0x51cff2=id('ho')[_0x8189('0x1b0','9IRN')](0x7d0);if(_0x51cff2){_0x51cff2[_0x8189('0x2c6','5[L5')]();}sleep(0x5dc);text('删除')[_0x8189('0x439','N0vT')](0x5dc)['click']();sleep(0x3e8);back();return!![];}return![];}function _0x3971bf(){var _0x1e09c1=className(_0x8189('0x537','#g0F'))[_0x8189('0xd3','&OXO')](_0x8189('0x176','Hrzg'))[_0x8189('0x8de','@tbM')](0x1388);if(_0x1e09c1){var _0x3f0980=text('今天')[_0x8189('0x3f3','Jqb7')](0x3e8);if(_0x3f0980){click(_0x3f0980['bounds']()[_0x8189('0x7e3','obd!')](),_0x3f0980[_0x8189('0x79c','70r8')]()[_0x8189('0x21d','BdX2')]());}else{_0x5a335d('今天',0x2);}sleep(0x1770);var _0x2492e0='';for(var _0x6113c6=0x0;_0x6113c6<0xa;_0x6113c6++){if(!desc('搜索')[_0x8189('0x975','wgP%')](0x3e8)){var _0x1c16c1=className(_0x8189('0x88e','Hrzg'))[_0x8189('0xb35','z^$&')](0x0,0x0,device[_0x8189('0x766','XLjY')],Math[_0x8189('0x7de','^)J3')](device[_0x8189('0x1d6','obd!')]*0.2))['findOne'](0x3e8);if(_0x1c16c1){sleep(0x3e8);click(_0x1c16c1[_0x8189('0x4cc','nFhx')]()[_0x8189('0x272','[Y2F')](),_0x1c16c1[_0x8189('0xadf','5eeV')]()['centerY']());}}sleep(0x7d0);var _0x527823=text(_0x8189('0xa20','qg7$'))[_0x8189('0x7a1','5eeV')](0x3e8);if(_0x527823){click(_0x527823[_0x8189('0xa74','rDIx')]()['centerX'](),_0x527823[_0x8189('0x5e8','#g0F')]()['centerY']());sleep(0x7d0);}else{_0x5a335d(_0x8189('0x75f',')#]u'),0x2);}sleep(0x3e8);_0x2492e0=_0x55f9d6();if(_0x2492e0&&_0x40ea47(_0x2492e0)==![]){break;}var _0x3487eb=className(_0x8189('0x498','zA$x'))['text']('否')[_0x8189('0x7e','KgQU')](0x3e8);if(_0x3487eb){click(_0x3487eb['bounds']()['centerX'](),_0x3487eb[_0x8189('0x12c','E]aj')]()[_0x8189('0x502','bkiR')]());}else{_0x5a335d('否',0x2);}}if(_0x2492e0&&_0x40ea47(_0x2492e0)==![]){var _0x482c5d=_0x3a43c0(_0x2492e0);var _0x1072f7=_0x1ea5b3(_0x204f30[_0x8189('0xa5b','sGM5')],_0x204f30[_0x8189('0x257','XLjY')],_0x482c5d,_0x204f30[_0x8189('0xa32',']uT$')]);if(_0x1072f7){_0x204f30[_0x8189('0x776','ZmHf')]++;_0x204f30['limit']--;for(var _0x6113c6=0x0;_0x6113c6<0x6;_0x6113c6++){var _0x3487eb=className(_0x8189('0x27d','wgP%'))[_0x8189('0x701','p0%o')]('否')[_0x8189('0x994',')#]u')](0x3e8);if(_0x3487eb){click(_0x3487eb[_0x8189('0x657','1()i')]()[_0x8189('0x7e3','obd!')](),_0x3487eb[_0x8189('0x1fb','D9sr')]()[_0x8189('0x9c0','#g0F')]());}else{_0x5a335d('否',0x2);}var _0x303a84=id('dn')[_0x8189('0x4b5','OXCB')]('返回')['findOne'](0x7d0);if(_0x303a84){click(_0x303a84[_0x8189('0x565','8^e]')]()[_0x8189('0x65d','#g0F')](),_0x303a84[_0x8189('0x5a7','N0vT')]()[_0x8189('0x5ad','Jqb7')]());}else{back();}var _0x1d430c=![];var _0x1a5da7=_0x244a08(_0x8189('0x1b3','wgP%'),0x2);if(_0x1a5da7){break;}}sleep(0x3e8);back();mylog(_0x8189('0x33','iR28'));sleep(0x7d0);sleep(0x7d0);for(var _0x6113c6=0x0;_0x6113c6<0xf;_0x6113c6++){var _0x374e8e=_0x1144fd('fake_titlebar',0x2);if(_0x374e8e){click(_0x374e8e[_0x8189('0xae3','#^@Q')]()[_0x8189('0x7c2','xq7I')]+0xa,_0x374e8e[_0x8189('0xaeb','5[L5')]()[_0x8189('0x8f7','rDIx')]());mylog('返回任务列表');sleep(0x3e8);}var _0x57c242=_0x15ccfe('首页','任务',0x4);if(_0x57c242['首页']&&_0x57c242['任务']){break;}if(_0x6113c6==0x9){back();sleep(0x3e8);back();}sleep(0x1f4);}return!![];}else{mylog(_0x8189('0x9e9','xq7I'));sleep(0x4e20);return![];}}else{mylog('复制链接为空或链接异常');return![];}}}function _0x260266(){var _0x111a0b=0x0;while(!![]){var _0x3c175c=_0x2cc916(_0x8189('0x107','KtCK'),0x1);if(_0x3c175c){_0x5a335d('否',0x1);sleep(0x64);_0x5a335d('是',0x1);}sleep(0x1f4);if(_0x111a0b>0x3c){break;}}}function _0x5baad9(_0x4d679c,_0x9ee73c,_0x1138fb){if(!_0x1138fb){_0x1138fb=0x3e8;};let _0x236aa6=![];let _0x5f2d4c;if(_0x4d679c==_0x8189('0x88f','[Y2F')){_0x5f2d4c=text(_0x9ee73c)[_0x8189('0x6a0','Hrzg')](0x3e8);}else if(_0x4d679c==_0x8189('0xd7','rDIx')){_0x5f2d4c=desc(_0x9ee73c)[_0x8189('0x9fd','rDIx')](0x3e8);}else if(_0x4d679c=='id'){_0x5f2d4c=id(_0x9ee73c)[_0x8189('0x5d5','ZmHf')](0x3e8);}else if(_0x4d679c==_0x8189('0xb2c','qg7$')){_0x5f2d4c=className(_0x9ee73c)['findOne'](0x3e8);}else{mylog(_0x8189('0xa0f','$mk^'));};if(_0x5f2d4c!=null){if(_0x5f2d4c[_0x8189('0x6fa','E]aj')]()){_0x236aa6=_0x5f2d4c[_0x8189('0xa6d','z^$&')]();}else{let _0x36fdc5=_0x5f2d4c[_0x8189('0xb3d','sGM5')]()[_0x8189('0xac5','8^e]')]();let _0x5aeb32=_0x5f2d4c[_0x8189('0x8d5',')#]u')]()[_0x8189('0x6ad','z^$&')]();if(_0x36fdc5>0x0&&_0x5aeb32>0x0){_0x236aa6=click(parseInt(_0x36fdc5),parseInt(_0x5aeb32));}else{mylog(_0x8189('0x559','XLjY'));};};_0x236aa6&&sleep(_0x1138fb);}else{mylog(_0x8189('0x2db',']7uy')+_0x4d679c+'-'+_0x9ee73c+_0x8189('0x97f','p0%o'));};return _0x236aa6;};function _0x5b7a3f(_0x421121,_0x233d6e,_0x23f2dc){if(_0x421121==''||_0x421121==null||_0x421121==undefined){return'';}if(_0x421121['indexOf'](_0x233d6e)<0x0){return'';}var _0x5e69df=_0x421121[_0x8189('0x4ea','p0%o')](_0x421121[_0x8189('0x979','(Gim')](_0x233d6e)+_0x233d6e[_0x8189('0x645','sGM5')],_0x421121[_0x8189('0x97a','70r8')]);var _0x1b6062=_0x5e69df[_0x8189('0x77d','ZmHf')](0x0,_0x5e69df[_0x8189('0x1b2','Jqb7')](_0x23f2dc));return _0x1b6062;};function _0x3a43c0(_0x20ac74){_0x20ac74=_0x20ac74[_0x8189('0x869','xq7I')]();let _0x11e658=_0x5b7a3f(_0x20ac74,_0x8189('0x289','sGM5'),'&');let _0x40fa91=_0x5b7a3f(_0x20ac74,_0x8189('0x1ea','obd!'),'&');let _0x181e70=new Date()[_0x8189('0x1a1','obd!')]();let _0x425279=_0x20ac74[_0x8189('0x2aa','p0%o')](_0x20ac74[_0x8189('0x6e2','BdX2')](_0x8189('0xa92','p0%o')));let _0x327f12=_0x8189('0x741','&OXO');_0x327f12=_0x327f12[_0x8189('0x1ab','70r8')](_0x11e658,'/',_0x40fa91,'/',_0x181e70,'?',_0x425279,']');log(_0x8189('0x54c','wgP%')+_0x327f12);return _0x327f12;};function _0x1ea5b3(_0x2d28b3,_0x2d5405,_0x3f7184,_0x3b18b8){mylog(_0x8189('0x644','[Y2F')+_0x3f7184);var _0x3928fa=![];var _0x44e06f=http[_0x8189('0x447','E]aj')](_0x8189('0x902','sGM5'),{'userName':_0x2d28b3,'password':_0x2d5405});var _0x303819=_0x44e06f[_0x8189('0x5c6','HlqN')][_0x8189('0x8cd','HlqN')];var _0x323782=http['get'](_0x8189('0x209','sGM5'),{'headers':{'Cookie':_0x303819}});var _0x487efc=_0x323782[_0x8189('0x4c6','bkiR')][_0x8189('0x225',']uT$')]();var _0x102bdb=/value="(\w*-\w*-\w*-\w*-\w*)">(.*?)</g;var _0x6ab571=_0x487efc['match'](_0x102bdb);for(var _0xf23a44=0x0;_0xf23a44<_0x6ab571['length'];_0xf23a44++){var _0x4a3c90=/value="(\w*-\w*-\w*-\w*-\w*)">(.*?)</;var _0x398a7f=_0x4a3c90['exec'](_0x6ab571[_0xf23a44]);if(RegExp['$2']==_0x3b18b8){var _0x2ba0c2=RegExp['$1'];break;};};if(!_0x2ba0c2){mylog(_0x8189('0xaee','HlqN'));}if(!_0x303819){mylog(_0x8189('0xdf',')#]u'));}if(!_0x3f7184){mylog(_0x8189('0x20c','sGM5'));}var _0x44e06f=http[_0x8189('0xb38','rDIx')](_0x8189('0x5c1','iR28'),{'url':_0x3f7184,'keyword':'','note':'','addsPos':0x0,'addsRate':'','taiId':0x2769,'taiName':_0x8189('0x2b7','OXCB'),'taskFlag':0x2,'configId':_0x2ba0c2},{'headers':{'Cookie':_0x303819}});var _0x6ab571=_0x44e06f[_0x8189('0x192','iR28')][_0x8189('0x3d7','D9sr')]();if(_0x6ab571[_0x8189('0x396','Jqb7')]!=0x1){mylog(_0x8189('0xa61','[Y2F')+_0x6ab571[_0x8189('0x53d','Jqb7')]);alert(_0x6ab571[_0x8189('0xa73','5eeV')]);return![];}else{mylog(_0x8189('0x918','5[L5')+_0x6ab571['msg']);_0x3928fa=!![];};return _0x3928fa;};function _0x5da3ea(_0x1c46a5,_0x55c69c,_0x5ed51e,_0xf15a23){var _0x112675=![];var _0x2eb45b=http[_0x8189('0xa59','1()i')]('https://app.ba88h.cn/task/release/api',{'appId':_0x1c46a5,'appKey':_0x55c69c,'class_id':'4','isAdmin':'1','addtask':'1','task_type_id':_0x8189('0x68d','sGM5'),'title':_0xf15a23,'pattern[user]':'1','pattern[app]':'1','many_task_url':_0x5ed51e,'task_price':'10','task_num':'27','task_expire':'10','timeparams':_0x8189('0x53f','It1b')});var _0x17a943=_0x2eb45b[_0x8189('0x9ab','Jqb7')]['json']();if(_0x17a943[_0x8189('0x99d','4Yry')]!='S'){alert('金导航:'+_0x17a943[_0x8189('0x61c','p0%o')]);exit();}else{mylog('金导航:'+_0x17a943[_0x8189('0x53d','Jqb7')]);_0x112675=!![];};return _0x112675;};function _0x498f93(_0x2e66d4,_0x31277f){return Math[_0x8189('0xc5','6Yss')](Math[_0x8189('0x35b','sGM5')]()*(_0x31277f-_0x2e66d4+0x1))+_0x2e66d4;}_0x29d0fa();};