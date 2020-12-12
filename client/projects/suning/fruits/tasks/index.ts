import { delayCheck } from '../../../utils/delay-check';
import { killApp } from '../../../utils/kill-app';
import { openSuning, suningApplicationId } from '../../../utils/open-app';
import { retryRun } from '../../../utils/retry-run';
import { tl } from '../../../utils/toast';
import { addAnimals, collectAnimal } from './animal';
import { collectCoin } from './coin';
import { goShop } from './go-shop';
import { throwWhenNotInPackage } from './is-in-package';
import { pressClose } from './press-close';
import { steal } from './steal';

function runWithRetry(retries = 3): void {
  retryRun(
    () => {
      openSuning('https://c.m.suning.com/newFarm.html#/', 3000);

      const isOpenSuccess = delayCheck(15000, 1000, () => {
        return textContains('ico-lingjingbi').findOnce();
      });

      if (!isOpenSuccess) {
        throw new Error('open suning page failed');
      }

      pressClose();

      tl('收集宠物');
      collectAnimal();

      throwWhenNotInPackage();

      tl('饲养宠物');
      addAnimals();

      throwWhenNotInPackage();

      tl('做任务');
      goShop();

      throwWhenNotInPackage();

      tl('领取任务金币');
      collectCoin();

      throwWhenNotInPackage();

      tl('偷金币');
      steal();
    },
    () => {
      sleep(500);
      killApp(suningApplicationId);
    },
    '苏宁',
    retries
  );
}

export { runWithRetry };
