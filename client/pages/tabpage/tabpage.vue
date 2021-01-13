<template>
	<view class="tabbar-wrapper">
		<Component :is="curPage" />

		<view class="cu-bar tabbar bg-black foot">
			<view class="action text-green" :class="[curPage == 'v-home' && 'text-green']">
				<view class="cuIcon-homefill"></view>
				<text>首页</text>
			</view>
			<view class="action text-gray" :class="[curPage == 'v-write' && 'text-green']">
				<view class="cuIcon-write"></view>
				<text>阅读</text>
			</view>
			<view class="action text-gray" :class="[curPage == 'v-task' && 'text-green']">
				<view class="cuIcon-list"></view>
				<text>任务</text>
			</view>
			<view class="action text-gray" :class="[curPage == 'v-more' && 'text-green']">
				<view class="cuIcon-more"></view>
				<text>区块链</text>
			</view>
			<view class="action text-gray" :class="[curPage == 'v-mine' && 'text-green']">
				<view class="cuIcon-my"></view>
				<text>我的</text>
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
				curPage: 'v-home'
			}
		},
		methods: {
			switchPage(key) {
				const pages = {
					1: 'v-home',
					2: 'v-write',
					3: 'v-task',
					4: 'v-more',
					5: 'v-mine',
				}
				this.curPage = pages[key]
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
	.tabbar-wrapper {
		overflow: hidden;
	}
</style>
