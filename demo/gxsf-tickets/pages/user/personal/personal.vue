<template>
	<view id="page">
		<view class="img" @click="openFile">
			<image :src="'http://localhost:5000/find-file?path=' + user_info.user_avatar" mode="aspectFit"></image>
		</view>
		<uinput v-model="user_info.user_name" placeholder="用户名" type="text" labelPosition="top" label="用户名"></uinput>
		<uinput v-model="user_info.user_password" placeholder="更新密码" type="password" labelPosition="top" label="密码"></uinput>
		<uinput v-model="user_info.user_number" placeholder="学号" type="number" disabled="true" labelPosition="top" label="学号"></uinput>
		<uinput v-model="user_info.user_college" placeholder="专业" type="text" labelPosition="top" label="专业"></uinput>
		<uinput v-model="user_info.user_college_number" placeholder="年级" type="text" labelPosition="top" label="年级"></uinput>
		<uinput v-model="user_info.user_sex" placeholder="性别" type="number" labelPosition="top" label="性别 0男 1女 其他人妖"></uinput>
		<button @click="update_user()">修改</button>
	</view>
</template>

<script>
	import uinput from "@/components/poiuy-uinput/uinput.vue"
	export default {
		components: {
			uinput
		},
		data() {
			return {
				user_info: {}
			}
		},
		methods: {
			update_user() {
				let _self = this;
				uni.request({
					url: "http://localhost:5000/user-update",
					method: "POST",
					data: {
						user: _self.user_info
					},
					success(res) {
						uni.removeStorage({
							key: "tick_user"
						});
						uni.showModal({
							title: '提示',
							content: '修改成功，重新登录',
							success: function(res) {
								if (res.confirm) {
									uni.navigateTo({
										url: "/pages/lgin/lgin"
									})
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				})
			},
			openFile() {
				let _self = this;
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://localhost:5000/upload-img',
							filePath: tempFilePaths[0],
							name: 'img',
							success: (uploadFileRes) => {
								_self.user_info.user_avatar = uploadFileRes.data;
								console.log(_self.user_info);
							}
						});
					}
				});
			},
			load_user() {
				let _self = this;
				uni.getStorage({
					key: "tick_user",
					success(res) {
						console.log(res.data.user_list[0].user);
						_self.user_info = res.data.user_list[0].user
						_self.user_info.user_avatar = _self.user_info.user_avatar
					}
				})
			}
		},
		onLoad() {
			this.load_user();
		},
		onPullDownRefresh() {
			this.load_user();
			uni.stopPullDownRefresh();
		}
	}
</script>

<style lang="less" scoped>
	.img {
		width: 30%;

		image {
			width: 100px;
			height: 100px;
		}
	}
</style>
