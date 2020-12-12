import { suningApplicationId } from '../../../utils/open-app';

function throwWhenNotInPackage(): boolean {
  return currentPackage() === suningApplicationId;
}

export { throwWhenNotInPackage };
