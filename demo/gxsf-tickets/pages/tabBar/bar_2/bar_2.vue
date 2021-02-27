<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? userInfo.user_avatar :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? userInfo.user_name : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<text style="color: #4E5A6E;" v-if="login">
			信誉分:{{userInfo.user_credibility}}
			<text style="float: right;">
				学分:{{userInfo.user_credit}}
			</text>
		</text>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="toNewForm('/pages/user/personal/personal')">
				<text class="list-icon">&#xe60f;</text>
				<text class="list-text">个人资料</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="toNewForm('/pages/user/news/news')">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text">系统消息</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="toNewForm('/pages/user/participate')">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">我的参与</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="toNewForm('/pages/user/myRelease/myRelease')">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">我的发布</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="toNewForm('/pages/user/tickets/tickets')">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">我的门票</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="toNewForm('/pages/user/review/review')">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">审核</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="exit_login">
			<button v-if="login" @click="exit_login()">退出登录</button>
			<view v-else style="margin-left: 20%;">登录之后记得刷新一下此页面哦</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl: "../../../static/logo.png",
				userInfo: ""
			}
		},
		methods: {
			toNewForm(link) {
				if (this.login) {
					uni.navigateTo({
						url: link
					})
				} else {
					uni.showToast({
						title: '请先登录',
						duration: 2000,
						mask: true,
						image: "../../../static/messy/cancel.png"
					});
				}
			},
			exit_login() {
				uni.removeStorage({
					key: "tick_user"
				});
				this.login = false
				this.userInfo = ""
			},
			goLogin() {
				if (!this.login) {
					console.log("点击前往登录")
					uni.navigateTo({
						url: "/pages/lgin/lgin"
					})
				} else {
					uni.navigateTo({
						url: "/pages/user/personal/personal"
					})
				}
			},
			load_user() {
				let _self = this;
				uni.getStorage({
					key: 'tick_user',
					success: (stops) => {
						_self.userInfo = stops.data.user_list[0].user;
						uni.request({
							url: 'http://localhost:5000/user-login',
							method: "POST",
							data: {
								number: _self.userInfo.user_number,
								password: _self.userInfo.user_password
							},
							success: (res) => {
								var data = res.data;
								console.log(typeof(res.data))
								if (typeof(res.data) === 'string') {
									uni.showModal({
										title: '提示',
										content: res.data,
									});
								} else {
									uni.setStorageSync('tick_user', data);
									_self.userInfo = data.user_list[0].user;
									_self.userInfo.user_avatar = 'http://localhost:5000/find-file?path=' + _self.userInfo.user_avatar
									_self.login = true;
								}
							},
						});
						console.log(_self.userInfo.user_name)
					}
				})
			}
		},
		onPullDownRefresh() {
			this.load_user();
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onLoad() {
			this.load_user();
		}
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #F6F7FB;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #F6F7FB;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #4E5A6E;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #717FB4;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}

	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #F6F7FB;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #717FB4;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}

	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #4E5A6E;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #4E5A6E;
		text-align: right;
		font-family: texticons;
	}

	.exit_login {
		position: absolute;
		width: 100%;
		bottom: 20px;
		text-align: center;
		color: #4E5A6E;
	}
</style>
