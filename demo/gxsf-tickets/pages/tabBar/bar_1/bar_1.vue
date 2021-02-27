<template>
	<view id="page">
		<view class="swiper">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
							<swiper-item v-for=" (item,i) in nav_list" :key='i'>
								<view class="div" @click="toNew(item.nav_img_link)" :style="
								{backgroundImage:'url(http://localhost:5000/find-file?path='+item.nav_img+')'}">
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view id="operation">
			<view class="left">
				<button style="background-color: #F9FAFF;" class="color-black" @click="newForm('/pages/Activity/listActivity/listActivity')">活动</button>
			</view>
			<view class="right">
				<button @click="newForm('/pages/Activity/newActivity/newActivity')">发布</button>
			</view>
		</view>
		<!--  -->
		<view id="list">
			<view class="item" v-for="(activitys,i) in activity_list" :key="i">
				<CACodeShopItem :image="'http://localhost:5000/find-file?path='+activitys.activity_img_path" :title="activitys.activity_name"
				 :message="activitys.activity_message" :status="activitys.activity_status" :item_id="activitys.activity_id" @click="to_activity"></CACodeShopItem>
			</view>
		</view>
	</view>
</template>

<script>
	import CACodeShopItem from "@/components/CACode/cacode-shop-item.vue"
	export default {
		components: {
			CACodeShopItem,
		},
		data() {
			return {
				nav_list: [],
				activity_list: []
			}
		},
		onPullDownRefresh() {
			this.load_nav();
			this.load_activity();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
			to_activity(id) {
				uni.navigateTo({
					url: "/pages/Activity/activityItem/activityItem?id=" + id
				})
			},
			newForm(link) {
				uni.navigateTo({
					url: link
				})
			},
			toNew(link) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(link)
				// #endif
				// #ifdef H5
				window.open(link)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: link
				});
				uni.showModal({
					content: "已自动复制网址，请在手机浏览器里粘贴该网址",
					showCancel: false
				});
				// #endif
			},
			load_nav() {
				let _self = this;
				// 先清空list
				_self.nav_list = []
				uni.request({
					url: 'http://localhost:5000/nav-list',
					method: 'POST',
					success(res) {
						for (let item in res.data.nav_list) {
							_self.nav_list.push(res.data.nav_list[item].nav)
						}
					},
					fail(res) {
						console.log(res);
					}
				})
			},
			load_activity() {
				let _self = this;
				// 先清空list
				_self.activity_list = []
				uni.request({
					url: 'http://localhost:5000/activity-search',
					method: 'POST',
					data: {
						name: ''
					},
					success(res) {
						for (let item in res.data.activity_list) {
							_self.activity_list.push(res.data.activity_list[item].activity)
						}
						for (var i = 0; i < _self.activity_list.length; i++) {
							_self.activity_list[i].activity_start_time = "活动开始时间:" + _self.activity_list[i].activity_start_time.split(" ")[
								0];
							_self.activity_list[i].activity_stop_time = "活动结束时间:" + _self.activity_list[i].activity_stop_time.split(" ")[0];
							_self.activity_list[i].sign_up_start_time = "活动报名时间:" + _self.activity_list[i].sign_up_start_time.split(" ")[0];
							_self.activity_list[i].sign_up_stop_time = "报名截止时间:" + _self.activity_list[i].sign_up_stop_time.split(" ")[0];
							_self.activity_list[i].activity_people_max = "最大人数:" + _self.activity_list[i].activity_people_max;
							_self.activity_list[i].activity_people_now = "报名截止时间:" + _self.activity_list[i].activity_people_now;
						}
						console.log(_self.activity_list);
					},
					fail(res) {
						console.log(res);
					}
				})
			}
		},
		onLoad() {
			this.load_nav();
			this.load_activity();
		}

	}
</script>

<style lang="less" scoped>
	#page {
		background-color: #F6F7FB;
		min-height: 100vh;
	}

	.div {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
	}

	#operation {
		width: 100%;
		text-align: center;

		.left {
			width: 49%;
			float: left;
		}

		.right {
			display: inline-block;
			width: 49%;
		}
	}

	#list {
		width: 98%;
		margin: 0 auto;

		.item {
			width: 45%;
			margin: 2% 2%;
			display: inline-block;
		}
	}
</style>
