<template>
	<view id="page">
		<view class="img">
			<image :src="'http://localhost:5000/find-file?path='+activity.activity_img_path" mode="aspectFit"></image>
		</view>
		<view class="texts">
			<view class="title">
				{{activity.activity_name}}
			</view>
			<view class="message">
				{{activity.activity_message}}
			</view>
			<view class="message">
				{{activity.sign_up_stop_time}}
			</view>
			<view class="message">
				{{activity.activity_stop_time}}
			</view>
			<view class="message">
				{{activity.activity_start_time}}
			</view>
			<view class="message">
				{{activity.sign_up_start_time}}
			</view>
			<view class="message">
				当前参与人数:{{activity.activity_people_now}}/{{activity.activity_people_max}}
			</view>
			<view class="status">
				<view v-if="activity.activity_status==0" class="green">
					<view class="radio"></view>
					报名中
				</view>
				<view v-if="activity.activity_status==1" class="red">
					<view class="radio"></view>
					报名结束
				</view>
				<view v-if="activity.activity_status==2" class="green">
					<view class="radio"></view>
					活动开始
				</view>
				<view v-if="activity.activity_status==3" class="red">
					<view class="radio"></view>
					活动结束
				</view>
			</view>
		</view>
		<view class="operation">
			<button @click="participate()">立刻参与</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activity_id: -1,
				activity_list: [],
				activity: {},
				userInfo: {},
				login: false,
			}
		},
		onPullDownRefresh() {
			this.load_user();
			this.load_activity();
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
			participate() {
				let _self = this;
				if (!this.login) {
					uni.navigateTo({
						url: "/pages/lgin/lgin"
					})
					return;
				} else {
					uni.request({
						url: 'http://localhost:5000/application-add',
						method: 'POST',
						data: {
							activity_id: _self.activity_id,
							user_id: _self.userInfo.user_id
						},
						success(res) {
							uni.showModal({
								title: '提示',
								content: res.data,
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack();
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						},
						fail(res) {
							console.log(res);
						}
					})
				}
			},
			load_user() {
				let _self = this;
				this.userInfo = {};
				uni.getStorage({
					key: 'tick_user',
					success: (res) => {
						_self.userInfo = res.data.user_list[0].user;
						_self.userInfo.user_avatar = "http://localhost:5000/find-file?path=" + _self.userInfo.user_avatar
						_self.login = true;
						console.log(_self.userInfo.user_name)
					}
				})
			},
			load_activity() {
				this.activity_list = [];
				let _self = this;
				uni.request({
					url: 'http://localhost:5000/activity-search-id',
					method: 'POST',
					data: {
						activity_id: _self.activity_id
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
						}
						_self.activity = _self.activity_list[0];
						console.log(_self.activity);
					},
					fail(res) {
						console.log(res);
					}
				})
			}
		},
		onLoad: function(option) {
			console.log(option.id);
			this.activity_id = option.id;
			this.load_user();
			this.load_activity();
		}
	}
</script>

<style lang="less" scoped>
	.img {
		width: 100%;

		image {
			width: 100%;
		}
	}

	.texts {
		width: 90%;
		margin: 10px auto;

		.title {
			font-size: 20px;
		}

		.message {
			font-size: 25rpx;
			margin-top: 10px;
		}

		* {
			overflow: hidden; //超出的文本隐藏
			text-overflow: ellipsis; //溢出用省略号显示
			white-space: nowrap; //溢出不换行 
		}

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

	.operation {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>
