

export const TabsBtn = (tabsData, tabsView, selectView) => {
  const tabsbtn = () => {
    ui.Widget()
    this.defineAttr('data', (view, attr, value, defineSetter) => {
      const arr = tabsData.data[value]
      view._text.setText(arr[0])
      view._src.attr('src', arr[1])
      tabsView[tabsView.length] = view
      if (value === selectView) {
        view._src.attr('tint', tabsData.selectColor.on)
        view._text.setTextColor(colors.parseColor(tabsData.selectColor.on))
      }
    })

  }
  util.extend(tabsbtn, ui.Widget)
  tabsbtn.prototype.render = function () {
    return (
      `<vertical id="_bg" w="*" bg="{{tabsData.bg}}" padding="0 10" gravity="center" >
        <img w="{{tabsData.srcSize}}" id="_src" tint="{{tabsData.selectColor.off}}" />
        <text w="auto" id="_text" textSize="{{tabsData.textSize}}" textColor="{{tabsData.selectColor.off}}" />
      </vertical>`
    )
  }
}