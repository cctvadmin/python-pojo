<template>
	<view id="page">
		<view class="img">
			<image :src="'http://localhost:5000/find-file?path=' + userInfo.user_avatar" mode="aspectFit"> </image>
		</view>
		<view class="info-item">
			用户名：{{userInfo.user_name}}
		</view>
		<view class="info-item">
			学号：{{userInfo.user_number}}
		</view>
		<view class="info-item">
			专业：{{userInfo.user_college}}
		</view>
		<view class="info-item">
			年级：{{userInfo.user_college_number}}
		</view>
		<view class="info-item">
			性别：
			<text v-if="userInfo.user_sex==0">男</text>
			<text v-else-if="userInfo.user_sex==1">女</text>
			<text v-else>人妖</text>
		</view>
		<view class="info-item">
			学分：{{userInfo.user_credit}}
		</view>
		<view class="info-item">
			信誉分：{{userInfo.user_credibility}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_id: "",
				userInfo: {}
			}
		},
		methods: {
			load_user() {
				let _self = this;
				console.log(_self.user_id)
				uni.request({
					url: "http://localhost:5000/user-info",
					method: "POST",
					data: {
						user_id: _self.user_id
					},
					success(res) {
						_self.userInfo = res.data;
						console.log(_self.userInfo);
					}
				})
			}
		},
		onPullDownRefresh() {
			this.load_user();
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad(option) {
			this.user_id = option.id;
			this.load_user();
		}
	}
</script>

<style lang="less" scoped>
	.img {
		width: 100%;
		height: 100px;

		image {
			width: 100px;
			height: 100px;
			position: absolute;
			left: 40%;
		}
	}

	.info-item {
		width: 100%;
		position: relative;
		padding: 10px;
		margin-bottom: 10px;
		background-color: #F6F7FB;
		box-shadow: 1px 1px 6px 1px #E6E9EE;
		border-radius: 10px;
		color: #4E5A6E;
	}
</style>
