'ui';

import tabsBtnxml from './tabs-btn-layout.xml';

// const tabsView = [];
// const selectView = 0;

const TabsBtnLayout = (listdata: any): any => {
  const _tabsBtnLayout = () => {
    ui.Widget();
    // this.defineAttr(
    //   'data',
    //   (view: any, attr: any, value: any, defineSetter: any) => {
    //     const arr = listdata.data[value];
    //     view._text.setText(arr[0]);
    //     view._src.attr('src', arr[1]);
    //     tabsView[tabsView.length] = view;
    //     if (value === selectView) {
    //       view._src.attr('tint', listdata.selectColor.on);
    //       view._text.setTextColor(colors.parseColor(listdata.selectColor.on));
    //     }
    //   }
    // );
  };

  _tabsBtnLayout.prototype.render = tabsBtnxml;
  ui.registerWidget('tabsBtnLayout', _tabsBtnLayout);
  return _tabsBtnLayout;
};

export default TabsBtnLayout;
