<template>
	<view id="page">
		<view style="padding:35px;">
			<view class="img" @click="openFile">
				宣传图片
				<image :src="'http://localhost:5000/find-file?path='+ activity.activity_img_path" mode="aspectFit"></image>
			</view>
			<uinput v-model="activity.activity_name" placeholder="活动名" type="text" labelPosition="top" label="活动名"></uinput>
			<uinput v-model="activity.sign_up_start_time" placeholder="报名开始时间" type="number" labelPosition="top" label="报名开始时间">
			</uinput>
			<view class="timer">
				<KXDateTime :date='date' :end='enddate' :start='startdate' @rundata='sign_up_start_time' default='start'
				 placeholder="点我选择时间"></KXDateTime>
			</view>
			<uinput v-model="activity.sign_up_stop_time" placeholder="报名结束时间" type="text" labelPosition="top" label="报名结束时间">
			</uinput>
			<view class="timer">
				<KXDateTime :date='date' :end='enddate' :start='startdate' @rundata='sign_up_stop_time' default='start' placeholder="点我选择时间"></KXDateTime>
			</view>
			<uinput v-model="activity.activity_start_time" placeholder="活动开始时间" type="text" labelPosition="top" label="活动开始时间"></uinput>
			<view class="timer">
				<KXDateTime :date='date' :end='enddate' :start='startdate' @rundata='activity_start_time' default='start'
				 placeholder="点我选择时间"></KXDateTime>
			</view>
			<uinput v-model="activity.activity_stop_time" placeholder="活动结束时间" type="text" labelPosition="top" label="活动结束时间"></uinput>
			<view class="timer">
				<KXDateTime :date='date' :end='enddate' :start='startdate' @rundata='activity_stop_time' default='start'
				 placeholder="点我选择时间"></KXDateTime>
			</view>
			<uinput v-model="activity.activity_people_max" placeholder="最大人数" type="number" labelPosition="top" label="最大人数"></uinput>
			<uinput v-model="activity.activity_message" type="textarea" height="300" tlposition="none" :maxlength="-1"
			 placeholder="活动描述" label="活动描述"> </uinput>
			<uinput v-model="activity.keys" type="textarea" height="300" tlposition="none" :maxlength="-1" placeholder="门票hash 一行一个门票"
			 label="门票hash">
			</uinput>
			<uinput v-model="activity.auto" placeholder="开启自动生成hash" type="number" labelPosition="top" label="开启自动生成门票 0自动生成 其他手动输入"></uinput>
			<uinput v-model="activity.activity_scope" placeholder="活动奖励分" type="number" labelPosition="top" label="活动奖励分"></uinput>
			<button @click="release()">发布</button>
		</view>
	</view>
</template>

<script>
	import uinput from "@/components/poiuy-uinput/uinput.vue"
	import KXDateTime from "@/components/kx-datetime/kx-datetime.vue"
	export default {
		components: {
			uinput,
			KXDateTime
		},
		data() {
			return {
				userInfo: {},
				activity: {
					activity_img_path: "/tickets/img/default.png",
					activity_message: "",
					activity_name: "",
					activity_people_max: 50,
					activity_start_time: "",
					activity_status: 0,
					activity_stop_time: "",
					sign_up_start_time: "",
					sign_up_stop_time: "",
					activity_scope: 2,
					user_id: -1,
					keys: "",
					auto: 0
				},
				startdate: "",
				enddate: '2222-12-01 00:00:00',
				date: "",
				login: false
			}
		},
		methods: {
			release() {
				if (!this.login) {
					uni.navigateTo({
						url: "/pages/lgin/lgin"
					});
					return;
				}
				console.log(this.activity)
				//发布
				let _self = this;
				uni.request({
					url: 'http://localhost:5000/activity-add',
					method: "POST",
					data: {
						activity: _self.activity,
						user_number: _self.userInfo.user_number,
						user_password: _self.userInfo.user_password
					},
					success: (res) => {
						var data = res.data;
						console.log(typeof(res.data))
						if (typeof(res.data) === 'string') {
							uni.showModal({
								title: '提示',
								content: res.data,
								showCancel: false
							});
						} else {
							uni.showModal({
								title: '提示',
								content: '发布成功，前往主页',
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack();
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
							setTimeout(function() {
								uni.navigateBack();
							}, 2000);
						}
					},
					fail: (res) => {
						uni.navigateBack();
					}
				});
			},
			sign_up_start_time(e) {
				this.activity.sign_up_start_time = e;
			},
			sign_up_stop_time(e) {
				this.activity.sign_up_stop_time = e;
			},
			activity_start_time(e) {
				this.activity.activity_start_time = e;
			},
			activity_stop_time(e) {
				this.activity.activity_stop_time = e;
			},
			openFile() {
				if (!this.login) {
					uni.navigateTo({
						url: "/pages/lgin/lgin"
					});
					return;
				}
				let _self = this;
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://localhost:5000/upload-img',
							filePath: tempFilePaths[0],
							name: 'img',
							success: (uploadFileRes) => {
								_self.activity.activity_img_path = uploadFileRes.data;
								console.log(_self.activity);
							}
						});
					}
				});
			},
		},
		onLoad() {
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
							_self.login = true;
							_self.userInfo = res.data.user_list[0].user;
							_self.userInfo.user_avatar = "http://localhost:5000/find-file?path=" + _self.userInfo.user_avatar
							console.log(_self.userInfo)
							_self.activity.user_id = _self.userInfo.user_id;
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
	}
</script>

<style lang="less" scoped>
	.timer {
		margin: 0 auto;
	}
</style>
