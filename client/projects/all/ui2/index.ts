'ui';

import layout from './layout.xml';
// import layout from './layout1.xml';
toast(defineAttr);
class Home {
  public file = 'https://12a112dd270d.ngrok.io/api/file';

  public state: any = {
    img: 'https://img.lovebuy99.com/uploads/allimg/210101/15-2101011AU3.jpg',
    img1:
      'http://pic.cjw25.com/images/2020/08/04/9f5fe99435486877ed2cb44048afa305.jpg',
    names: '自动化',
    bgcolor: '#282A36',
    fontcolor: '#ffffff',
  };

  public tabs = {
    bg: '#ffffff',
    selectColor: {
      on: '#03A9F5',
      off: '#999999',
    },
    srcSize: 20,
    textSize: 14,
    zoom: 1.5,
    tabs_h: true,
    data: [
      ['首页', '@drawable/ic_beach_access_black_48dp'],
      ['二页', '@drawable/ic_group_black_48dp'],
      ['三页', '@drawable/ic_highlight_black_48dp'],
      ['四页', '@drawable/ic_directions_boat_black_48dp'],
      ['五页', '@drawable/ic_desktop_windows_black_48dp'],
    ],
  };

  public init() {
    this.run();
    this.getConfigure();
  }

  public getConfigure() {
    threads.start(() => {
      const result = http.get(this.file).body.json();
      this.state.fileres = result;
      toast(JSON.stringify(result));
      threads.start(() => {
        const codePath = `${engines.myEngine().cwd()}/main1.js`;
        files.write(
          codePath,
          http
            .get('https://zenglbg-auto.oss-cn-shenzhen.aliyuncs.com/main.js')
            .body.string()
        );
      });
    });
  }

  public render() {
    this.willMount();
    layout(this.state, this.tabs);
    this.didMount();
  }

  public willMount() {
    console.log(
      '🚀 ~ file: index.ts ~ line 46 ~ Home ~ willMount ~ n',
      this.willMount
    );
  }

  public didMount() {
    console.log(
      '🚀 ~ file: index.ts ~ line 55 ~ Home ~ didMount',
      this.didMount
    );

    // ui.viewpager.setTitles(['首页', '阅读', '任务', '区块链', '我的']);

    // ui.tabs.setupWithViewPager(ui.viewpager);

    // // 让工具栏左上角可以打开侧拉菜单
    // ui.toolbar.setupWithDrawer(ui.drawer);
  }

  public run() {
    this.render();
  }
}
const home = new Home();

home.init();
