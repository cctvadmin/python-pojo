<template>
	<view id="page">
		<view id="list" v-if="keys_list.length!=0">
			<view class="item" v-for="(keys,i) in keys_list" :key="i" @click="to_activity(application_list[i].activity_id)">
				<view class="hash border-bottom" @click="to_img(keys)">
					<image src="../../../static/messy/hash.png" mode="aspectFit"></image>
					<text>{{keys.keys_content}}</text>
				</view>
				<view class="review">
					前往活动
					<image src="../../../static/messy/review.png" mode="aspectFit"></image>
				</view>
				<view class="status">
					<view v-if="application_list[i].status==0" class="red">
						<view class="radio"></view>
						未审核
					</view>
					<view v-if="application_list[i].status==1" class="green">
						<view class="radio"></view>
						审核通过
						<view v-if="keys.keys_status==0" class="red">
							<view class="radio"></view>
							未使用
						</view>
						<view v-if="keys.keys_status==1" class="green">
							<view class="radio"></view>
							生效中
						</view>
						<view v-if="keys.keys_status==2" class="green">
							<view class="radio"></view>
							已使用
						</view>
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
		<view id="using_keys" v-if="show_opera">
			<uinput v-model="using_key" placeholder="请输入门票hash" type="text" labelPosition="top" label="使用门票"></uinput>
			<button @click="use_keys()">确定使用</button>
		</view>
		<view class="img" @click="showUse">
			<image src="../../../static/messy/use.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import CACodeShopItem from "@/components/CACode/cacode-shop-item.vue"
	import uinput from "@/components/poiuy-uinput/uinput.vue"
	export default {
		components: {
			CACodeShopItem,
			uinput
		},
		data() {
			return {
				application_list: [],
				userInfo: {},
				keys_list: [],
				using_key: "",
				show_opera: false
			}
		},
		onPullDownRefresh() {
			this.load_user();
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			to_img(keys) {
				let _self = this;
				uni.navigateTo({
					url: "/pages/QrCode/QrCode?url=" + "http://localhost:5000/keys-img/" + _self.userInfo.user_name + "/" + keys.keys_content +
						"&code=" + keys.keys_content + "&user_name=" + _self.userInfo.user_name
				});
			},
			use_keys() {
				let _self = this;
				uni.request({
					method: 'POST',
					url: "http://localhost:5000/keys-use",
					data: {
						user_id: _self.userInfo.user_id,
						keys_content: _self.using_key
					},
					success(res) {
						uni.showModal({
							title: '提示',
							content: res.data,
							success: function(res) {
								_self.load_user();
							}
						});
					}
				})
			},
			showUse() {
				this.show_opera = !this.show_opera;
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
						_self.keys_list = []
						for (var i = 0; i < _self.application_list.length; i++) {
							let load_flag = false;
							uni.request({
								method: 'POST',
								url: "http://localhost:5000/keys-search",
								data: {
									keys_id: _self.application_list[i].keys_id
								},
								success(res) {
									_self.keys_list.push(res.data)
									console.log(_self.keys_list);
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
			width: 100%;
			position: relative;
			padding: 10px;
			margin-bottom: 10px;
			background-color: #F6F7FB;
			box-shadow: 1px 1px 6px 1px #E6E9EE;
			border-radius: 10px;
			color: #4E5A6E;

			.review {
				position: absolute;
				left: 40%;
				top: 30%;
				font-size: 25rpx;

				image {
					margin-left: 5px;
					width: 15px;
					height: 15px;
				}
			}

			.border-bottom {
				border-bottom-width: 1upx;
				border-color: #F6F7FB;
				border-bottom-style: solid;
			}

			.hash {
				background-color: #F6F7FB;
				width: 100%;
				margin-bottom: 2%;
				color: #4E5A6E;

				image {
					width: 15px;
					height: 15px;
					margin-right: 10px;
				}
			}

			.status {
				position: absolute;
				top: 30%;
				right: 5%;
			}
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

	#using_keys {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 200px;
		padding: 10px;
		background-color: #FFFFFF;
		box-shadow: 1px 1px 6px 1px #E6E9EE;
		border-radius: 10px;
		color: #4E5A6E;

		input {
			margin-top: 30px;
			margin-bottom: 30px;
			border: 1px #2C405A solid;
			padding: 10px;
			border-radius: 10px;
		}
	}

	.img {
		width: 14%;
		height: 50px;
		position: fixed;
		bottom: 0;
		left: 41%;
		background-color: #F6F7FB;
		box-shadow: 1px 1px 6px 1px #E6E9EE;
		border-radius: 50%;
		padding: 5px;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
