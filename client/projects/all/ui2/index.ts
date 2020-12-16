'ui';

import layout from './layout.xml';

threads.start(() => {
  // toast('请求脚本');
  const result = http.get('https://5248b3251a4e.ngrok.io/api/file').body.json();
  toast(JSON.stringify(result));
  threads.start(() => {
    const codePath = `${engines.myEngine().cwd()}/main1.js`;
    files.write(
      codePath,
      http
        .get('https://zenglbg-auto.oss-cn-shenzhen.aliyuncs.com/main.js')
        .body.string()
    );

    engines.execScriptFile(codePath);

    // toast('更新版本');
  });
});

layout();
