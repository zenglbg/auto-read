<template>
	<view class="home-wrapper">
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

		<!-- 脚本设置 -->
		<view class="cu-card">
			<form action="">
				<view class="cu-form-group lbg-btns">
					<button class="lbg-btn cu-btn bg-green margin-right-xs">
						一键同步
					</button>
					<button class="lbg-btn cu-btn bg-green margin-right-xs">
						运行时段
					</button>
					<button class="lbg-btn cu-btn bg-green margin-right-xs">
						养号设置
					</button>
					<button class="lbg-btn cu-btn bg-green">
						一键勾选
					</button>
				</view>

			</form>

		</view>

		<view class="cu-card">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text>
					<text>推荐平台</text>
				</view>
			</view>

			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item lbg-item" :class="menuArrow?'arrow':''">
					<view class="content lbg-item-content">
						<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
						<view class="desc margin-left-sm">
							<view class="desc-title">综合任务——ks</view>
							<view class="desc-body">版本</view>
							<view class="desc-time">
								运行时间
							</view>
						</view>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow">
							安装
						</button>
					</view>
				</view>

				<view class="cu-item">
					<view class="content lbg-item-content">
						<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
						<view class="desc margin-left-sm">
							<view class="desc-title">综合任务——ks</view>
							<view class="desc-body">版本</view>
							<view class="desc-time">
								运行时间
							</view>
						</view>
					</view>
					<view class="action">
						<switch class="switch-sex" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
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

	}
</script>

<style scoped>
	.home-wrapper {
		padding-bottom: 50px;
	}

	.lbg-btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.lbg-btn {



		flex: 1;
		white-space: nowrap;
		box-sizing: border-box;
		padding: 0;
	}


	.lbg-item {}


	.lbg-item-content {
		display: flex;
		align-items: center;
	}
</style>
