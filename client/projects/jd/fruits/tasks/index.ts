import { boundsClick } from '../../../utils/click-ele-bounds';
import { delayCheck } from '../../../utils/delay-check';
import { killApp } from '../../../utils/kill-app';
import { jdApplicationId, openJDMain } from '../../../utils/open-app';
import { retryRun } from '../../../utils/retry-run';
import { myScroll, scrollIn } from '../../../utils/scroll';
import { tl } from '../../../utils/toast';
import { closeTaskPanel } from './close-task-panel';

function goToPage() {
  tl('尝试进入 [东东农场] 页面');

  const fruitsBtn = delayCheck(
    10000,
    1000,
    () => {
      tl('搜索按钮 [东东农场]');
      console.info('currentPackage: ', currentPackage());
      return textContains('东东农场').findOnce()?.parent();
    },
    () => {
      tl('搜索按钮 [我的]');
      boundsClick(desc('我的').findOnce());
    }
  );

  if (!fruitsBtn) {
    throw new Error('[东东农场] 页面未找到');
  }

  tl('点击 [东东农场]');
  boundsClick(fruitsBtn);

  tl('等待进入 [东东农场]');
  delayCheck(15000, 1000, () => {
    return textContains('c88963830485cf49').findOnce();
  });
}

function checkPopup() {
  if (text('三餐福利时间到了').findOnce()) {
    boundsClick('去领取');
    tl('三餐福利时间到了');
    sleep(2000);
  }

  boundsClick('明天再来');
  boundsClick('继续领水滴');
  boundsClick('签到领水滴');
  boundsClick('我知道了');
  boundsClick('我知道了');
  boundsClick('43a8dd0495e5c21c');
  boundsClick('立即领取');
}

function goToTask() {
  checkPopup();

  const key = '领水滴';
  if (
    delayCheck(2000, 500, () => {
      return textContains(key).findOnce();
    })
  ) {
    return;
  }

  tl(`尝试进入 [${key}] 页面`);

  console.info('点击按钮 [领取(c88963830485cf49)]');
  // 领水任务
  boundsClick('c88963830485cf49');

  console.info(`检查文字 [${key}]`);
  if (!textContains(key).findOnce()) {
    throw new Error(`不在[${key}]任务界面`);
  }
}

function doTasks() {
  goToTask();

  tl('[每日首次浇水]');
  // 每日首次浇水
  boundsClick(
    textContains('每日首次浇水').findOnce()?.parent().findOne(text('去完成'))
  );

  goToTask();

  tl('领取 [每日首次浇水]');
  // 领取 每日首次浇水
  boundsClick(
    textContains('每日首次浇水').findOnce()?.parent().findOne(text('领取'))
  );

  goToTask();

  tl('[定时领水]');
  // 定时领水
  boundsClick(
    textContains('定时领水').findOnce()?.parent().findOne(text('去领取'))
  );

  // 弹出框处理
  checkPopup();

  tl('[移动下位置]');
  // 移动下位置
  myScroll(textContains('收集水滴雨').findOnce()?.parent());
  sleep(1000);

  // 浏览
  for (let i = 0; i < 8; i += 1) {
    goToTask();

    tl(`[浏览 ${i}]`);
    const taskDetailPanel = textContains('去逛逛')
      .findOnce()
      ?.parent()
      ?.parent();

    let goEle = taskDetailPanel?.findOne(textContains('去逛逛'));

    if (goEle) {
      scrollIn(goEle);
      goEle = taskDetailPanel?.findOne(textContains('去逛逛'));
      boundsClick(goEle);
      sleep(12000);
      back();

      goToTask();
    }

    tl('去领取');
    boundsClick(text('去领取').findOnce());
  }

  goToTask();
}

function runWithRetry(retries = 3): void {
  retryRun(
    () => {
      tl('打开京东中');
      const isOpenSuccess = openJDMain();
      if (!isOpenSuccess) {
        throw new Error('open jd failed');
      }
      goToPage();
      doTasks();
      closeTaskPanel();
      sleep(2000);
    },
    () => {
      sleep(1000);
      killApp(jdApplicationId);
    },
    '京东',
    retries
  );
}

export { runWithRetry };
