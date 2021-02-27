<template>
	<view id="page">
		<view id="list" v-if="activity_list.length!=0">
			<view class="item" v-for="(activitys,i) in activity_list" :key="i">
				<CACodeShopItem :image="'http://localhost:5000/find-file?path='+activitys.activity_img_path" :title="activitys.activity_name"
				 :message="activitys.activity_message" :status="activitys.activity_status" :item_id="activitys.activity_id" @click="to_activity"></CACodeShopItem>
				<view class="opera">
					<image @click="delete_activity(activitys.activity_id,activitys.activity_name)" src="../../static/messy/cancel.png"
					 mode="aspectFit" style="width: 30px;height: 30px;"></image>
				</view>
				<view class="status">
					<view v-if="application_list[i].status==0" class="red">
						<view class="radio"></view>
						未审核
					</view>
					<view v-if="application_list[i].status==1" class="green">
						<view class="radio"></view>
						审核通过
					</view>
					<view v-if="application_list[i].status==2" class="red">
						<view class="radio"></view>
						审核不通过
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			空空如也
		</view>
	</view>
</template>

<script>
	import CACodeShopItem from "@/components/CACode/cacode-shop-item.vue"
	export default {
		components: {
			CACodeShopItem
		},
		data() {
			return {
				application_list: [],
				userInfo: {},
				activity_list: []
			}
		},
		onPullDownRefresh() {
			this.load_user();
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			delete_activity(id, name) {
				console.log(id);
				let _self = this;
				uni.showModal({
					title: '提示',
					content: "你确定要取消参与 " + name + " 吗?",
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://localhost:5000/application-delete',
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
											_self.load_user();
										}
									});
									_self.load_user();
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
			to_activity(id) {
				uni.navigateTo({
					url: "/pages/Activity/activityItem/activityItem?id=" + id
				})
			},
			load_application() {
				let _self = this;
				_self.application_list = []
				uni.request({
					url: "http://localhost:5000/application-search",
					method: "POST",
					data: {
						user_id: _self.userInfo.user_id
					},
					success(ret) {
						for (var i = 0; i < ret.data.application_list.length; i++) {
							_self.application_list.push(ret.data.application_list[i].application)
						}
						_self.activity_list = []
						for (var i = 0; i < _self.application_list.length; i++) {
							_self.application_list[i]
							let load_flag = false;
							uni.request({
								method: 'POST',
								url: "http://localhost:5000/activity-search-id",
								data: {
									activity_id: _self.application_list[i].activity_id
								},
								success(res) {
									for (let item in res.data.activity_list) {
										_self.activity_list.push(res.data.activity_list[item].activity)
									}
									console.log(_self.activity_list);
									load_flag = true;
								}
							})
						}
						console.log(_self.application_list)
					}
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
								_self.load_application();
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
<style scoped lang="less">
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
		right: 10px;
	}

	.status {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.green {
		font-size: 10px;

		.radio {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #508636;
			float: left;
			margin-right: 10px;
			margin-top: 4px;
		}
	}

	.red {
		font-size: 10px;
		font-size: 25rpx;
		color: #4E5A6E;

		.radio {
			float: left;
			margin-right: 10px;
			margin-top: 4px;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #B47F71;
		}
	}
</style>
