<template>
	<view id="page">
		<view id="list">
			<view class="item" v-for="(activitys,i) in activity_list" :key="i">
				<CACodeShopItem :image="'http://localhost:5000/find-file?path='+activitys.activity_img_path" :title="activitys.activity_name"
				 :message="activitys.activity_message" :status="activitys.activity_status" :item_id="activitys.activity_id" @click="to_activity"></CACodeShopItem>
				<view class="opera">
					<image @click="delete_activity(activitys.activity_id,activitys.activity_name)" src="../../../static/messy/cancel.png"
					 mode="aspectFit" style="width: 30px;height: 30px;"></image>
				</view>
			</view>
		</view>
		<text v-if="activity_list.length==0">空空如也</text>
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
				activity_list: [],
				userInfo: {}
			}
		},
		onPullDownRefresh() {
			this.load_user();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
			delete_activity(id, name) {
				console.log(id);
				let _self = this;
				uni.showModal({
					title: '提示',
					content: "你确定要删除 " + name + " 吗?",
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://localhost:5000/activity-delete',
								method: 'POST',
								data: {
									user_number: _self.userInfo.user_number,
									user_password: _self.userInfo.user_password,
									activity_id: id
								},
								success(res) {
									uni.showModal({
										title: '提示',
										content: res.data,
										success: function(res) {
											this.load_activity();
										}
									});
									_self.load_activity();
								},
								fail(res) {
									console.log(res);
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			load_activity() {
				let _self = this;
				// 先清空list
				_self.activity_list = []
				uni.request({
					url: 'http://localhost:5000/activity-search-user',
					method: 'POST',
					data: {
						user_id: _self.userInfo.user_id
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
			},
			to_activity(id) {
				uni.navigateTo({
					url: "/pages/Activity/activityItem/activityItem?id=" + id
				})
			},
			load_user() {
				this.startdate = (new Date().toLocaleString() + "").replace("下午", " ").replace("上午", " ").replace("中午", " ").replace(
					"/",
					"-");
				let _self = this;
				uni.getStorage({
					key: "tick_user",
					success(res) {
						uni.getStorage({
							key: 'tick_user',
							success: (res) => {
								_self.userInfo = res.data.user_list[0].user;
								_self.userInfo.user_avatar = "http://localhost:5000/find-file?path=" + _self.userInfo.user_avatar
								console.log(_self.userInfo.user_name)
								_self.load_activity();
							}
						})
					},
					fail() {
						uni.navigateTo({
							url: "/pages/lgin/lgin"
						})
					}
				})
			}
		},
		onLoad() {
			this.load_user();
		}
	}
</script>

<style lang="less" scoped>
	#list {
		width: 98%;
		margin: 0 auto;

		.item {
			width: 45%;
			margin: 2% 2%;
			display: inline-block;
			position: relative;
		}
	}

	.opera {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
