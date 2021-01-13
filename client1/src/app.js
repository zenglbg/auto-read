

export const App = ({ blblankImg }) => ui.layout(
  `<frame id="frame" bg="#ffffff">
    <img bg="#50718D9D" scaleType="centerCrop" url="{{${blblankImg}}}" radiusBottomLeft="10dp" radiusBottomRight="10dp" />
    <card w="*" id="indx1" margin="0 0 0 1" h="auto" cardCornerRadius="1" cardElevation="3dp" gravity="center_vertical"  >
      <vertical>
        <card
          w="*"
          id="indx2"
          margin="0 0 0 1"
          h="40"
          cardCornerRadius="1"
          cardElevation="3dp"
          gravity="center_vertical"
        >
          <linear id="toolbar" clipChildren="false" elevation="0" margin="8 0 0 0" gravity="center_vertical" >
            <text id="Notice" textColor="#080808" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="公告：" />
            {/* <TextView
              id="tv_text"
              singleLine="true"
              ellipsize="marquee"
              textSize="14"
              focusable="true"
              text="根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！    根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！     根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！       根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！"
              textColor="#ff010100" /> */}
          </linear>
        </card>


        <card
          w="*"
          id="indx2"
          margin="0 0 0 2"
          h="40"
          cardCornerRadius="1"
          cardElevation="3dp" gravity="center_vertical"
        >
          <horizontal gravity="center_vertical">
            <text id="Group" textColor="#080808" margin="8 0 0 0" gravity="center_vertical" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="auto.js教学群：4607221" />
            <text layout_weight="1" />
            <card
              w="60"
              h="auto"
              margin="0 0 10 0"
              cardCornerRadius="10"
              cardElevation="0dp"
              cardBackgroundColor="#282828"
            >
              <text id="obj" clickable="true" bg="?attr/selectableItemBackground" text="加入" textColor="#e5e5e5" textSize="13" gravity="center" />
            </card>
          </horizontal>
        </card>
      </vertical>

    </card>

  </frame>`
)