<template>
	<view style="padding:35px;" id="page">
		<uinput v-model="phone" placeholder="请输入学号" type="number" labelPosition="top" label="学号"></uinput>
		<uinput v-model="password" placeholder="请输入密码" type="password" labelPosition="top" label="密码"></uinput>
		<button type="primary" @click="login()">登录</button>
	</view>
</template>
<script>
	import uinput from "@/components/poiuy-uinput/uinput.vue"
	export default {
		components: {
			uinput
		},
		name: "login",
		data: {
			phone: "",
			password: "",
		},
		onLoad: function() {
			this.phone = "";
			this.password = "";
		},
		methods: {
			login() {
				uni.removeStorage({
					key: 'tick_user',
					success: function(res) {}
				});
				var t = this;
				console.log(t.phone)
				console.log(t.password)
				uni.request({
					url: 'http://localhost:5000/user-login',
					method: "POST",
					data: {
						number: t.phone,
						password: t.password
					},
					success: (res) => {
						var data = res.data;
						console.log(typeof(res.data))
						if (typeof(res.data) === 'string') {
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
						} else {
							uni.setStorageSync('tick_user', data);
							uni.showModal({
								title: '提示',
								content: '登录成功，前往主页',
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
					fail: (res) => {}
				});
			}
		},
	}
</script>
<style lang="less" scoped>
</style>
