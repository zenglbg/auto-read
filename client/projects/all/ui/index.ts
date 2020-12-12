'ui';

import layout from './layout.xml';

class Home {
  public static store: Storage;

  public static logo: Storage;

  public static title: Storage;

  public static ymhost = 'http://abc.yimigw.com';

  public static state = {
    logo: '32',
    validation_url: 'http://ysjm.yimigw.com',
    names: '云尚聚米',
    name_rw: '云尚聚米(内部版)',
    logourl: 'https://www.baidu.com/img/bd_logo1.png',
    // logourl: images.read('./assets/gakki.png'),
    jiaocheng_h: 0,
    product_id: 3,
    my_color: '#48b498',
    console_png: 'http://abc.yimigw.com/runjs/console_ysjm.jpg?1',
  };

  public static loadjp(fileName: string, url: string) {
    const isExist = files.exists(`/sdcard/cloud/${fileName}`);
    if (!isExist) {
      files.remove(`/sdcard/cloud/${fileName}`);
      let isWrite = false;
      threads.start(() => {
        const r = http.get(url).body.bytes();
        files.createWithDirs(`/sdcard/cloud/${fileName}`);
        files.writeBytes(`/sdcard/cloud/${fileName}`, r);
        isWrite = true;
      });
      // mylog('等待脚本启动');
      while (!isWrite) {
        /** */
      }
    }
  }

  public static checkUpdate() {
    threads.start(() => {});
  }

  public static initStorage() {
    Home.store = storages.create('store');
    Home.logo = storages.create('logo');
    Home.title = storages.create('title');
  }

  public static initBaseUiStatus() {
    ui.statusBarColor(this.state.my_color);
  }

  public static willMount() {
    /** 页面渲染之前 */
    this.initStorage();
    this.initBaseUiStatus();
  }

  public static didMount() {
    /** 页面渲染吗完成后 */
    ui.viewpager.setTitles(['设置大全', '阅读平台', '综合任务', '任务平台']);
    // 让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);
    // 让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);

    this.start();

    ui.BtnExit.click(() => {
      toast('退出程序');
      engines.stopAll();
    });
  }

  public static start() {
    ui.runBtn.click(() => {
      /**
       * 检测平台选择
       */
      toastLog('开始执行脚本');
    });
  }

  public static render() {
    layout(this.state);
  }

  public static run() {
    this.willMount();
    this.render();
    this.didMount();
  }
}

Home.run();
