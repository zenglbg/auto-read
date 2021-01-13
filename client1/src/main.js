'ui'

import _ from 'lodash'
import { TabsBtn } from './components/tabs/index'

import { App } from './app'

class Home {
  constructor() {
  }
  state = {
    color: "#080808",
    tabsView: [],
    selectView: 0,
    blblankImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591742950226&di=2c2a83fe81283a6c8f69979c9b2a8385&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F07%2F200343cx0b5wwqdp0wbdb3.jpg",
    tabsData: {
      bg: "#ffffff",
      selectColor: {
        on: "#03A9F5",
        off: "#999999"
      },
      srcSize: 20,
      textSize: 14,
      zoom: 1.5,
      tabs_h: true,
      data: [
        ["首页", "@drawable/ic_beach_access_black_48dp"],
        ["二页", "@drawable/ic_group_black_48dp"],
        ["三页", "@drawable/ic_highlight_black_48dp"],
        ["四页", "@drawable/ic_directions_boat_black_48dp"],
        ["五页", "@drawable/ic_desktop_windows_black_48dp"],
      ],
    },
    arr: _.chunk([...Array(100)
    ], 3)
  }
  init () {
    // toast(this.state.arr)
    // TabsBtn(this.state.tabsData, this.state.tabsView, this.state.selectView)
    this.render()
  }
  render () {
    App(this.state)
  }
}

const home = new Home()

home.init()

// class Home {
//   file = 'https://12a112dd270d.ngrok.io/api/file';

//   state = {
//     img: 'https://img.lovebuy99.com/uploads/allimg/210101/15-2101011AU3.jpg',
//     img1:
//       'http://pic.cjw25.com/images/2020/08/04/9f5fe99435486877ed2cb44048afa305.jpg',
//     names: '自动化',
//     bgcolor: '#282A36',
//     fontcolor: '#ffffff',
//   };

//   tabs = {
//     bg: '#ffffff',
//     selectColor: {
//       on: '#03A9F5',
//       off: '#999999',
//     },
//     srcSize: 20,
//     textSize: 14,
//     zoom: 1.5,
//     tabs_h: true,
//     data: [
//       ['首页', '@drawable/ic_beach_access_black_48dp'],
//       ['二页', '@drawable/ic_group_black_48dp'],
//       ['三页', '@drawable/ic_highlight_black_48dp'],
//       ['四页', '@drawable/ic_directions_boat_black_48dp'],
//       ['五页', '@drawable/ic_desktop_windows_black_48dp'],
//     ],
//   };

//   init () {
//     this.run()
//     this.getConfigure()
//   }

//   getConfigure () {
//     threads.start(() => {
//       const result = http.get(this.file).body.json()
//       this.state.fileres = result
//       toast(JSON.stringify(result))
//       threads.start(() => {
//         const codePath = `${engines.myEngine().cwd()}/main1.js`
//         files.write(
//           codePath,
//           http
//             .get('https://zenglbg-auto.oss-cn-shenzhen.aliyuncs.com/main.js')
//             .body.string()
//         )
//       })
//     })
//   }

//   render () {
//     this.willMount()
//     layout(this.state, this.tabs)
//     this.didMount()
//   }

//   willMount () {
//     console.log(
//       '🚀 ~ file: index.ts ~ line 46 ~ Home ~ willMount ~ n',
//       this.willMount
//     )
//   }

//   didMount () {
//     console.log(
//       '🚀 ~ file: index.ts ~ line 55 ~ Home ~ didMount',
//       this.didMount
//     )

//     // ui.viewpager.setTitles(['首页', '阅读', '任务', '区块链', '我的']);

//     // ui.tabs.setupWithViewPager(ui.viewpager);

//     // // 让工具栏左上角可以打开侧拉菜单
//     // ui.toolbar.setupWithDrawer(ui.drawer);
//   }

//   run () {
//     this.render()
//   }
// }
// const home = new Home()

// home.init()
