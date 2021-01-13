<template>
	<view class="index-wrapper">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">自动化</block>
		</cu-custom>
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<view class="cu-card">
			<view class="cu-item">
				<view class="title padding">
					<view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
				</view>

				<form>
					<view class="cu-form-group margin-top">
						<view class="title">
							激活码:
						</view>
						<input type="text" placeholder="请输入激活码">
						<navigator url="/pages/tabpage/tabpage">
							<button class="cu-btn bg-green shadow" url="">
								激活设备
							</button>
						</navigator>

					</view>
				</form>


				<view class="content margin-top">
					<view class="text-content padding">
						1：打开扫一扫、浏览器扫码、微信扫一扫等任意一种扫二维码软件，扫描您的激活码二维码，复制激活码然后进入软件粘贴激活即可。
					</view>
					<view class="text-content padding">
						2: 直接手动输入激活码至输入框，并激活设备即可。
					</view>
				</view>
			</view>




		</view>

	</view>


</template>

<script>
	var {
		robot
	} = require('robot-tools');
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
						id: 0,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					},
					{
						id: 1,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					},
					{
						id: 2,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					},
					{
						id: 3,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					},
					{
						id: 4,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					},
					{
						id: 5,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
					},
					{
						id: 6,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
					},
				],
				dotStyle: false, //是否显示dot
			}
		},
		methods: {
			switchPage(page) {
				switch (page) {
					case "login":
						this.curPage = page
						break;
					case "home":
						this.curPage = page
						break;
				}
			},
			start() {
				robot.stop();
				var param = {
					file: 'robot.weixin.js',
				}
				console.log("start");
				robot.start(param);
			},
			stop() {
				robot.stop();
			}

		}
	}
</script>


<style>
	.index-wrapper {
		height: 100vh;
	}
</style>
