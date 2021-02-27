<template>
	<view id="page">
		<view class="sms-list">
			<view class="sms-item" v-for="(item,i) in sms_list" :key="i">
				<image src="../../../static/messy/notice.png" mode="aspectFit"></image>
				<text>{{item.sms_content}}</text>
				<view>创建时间:{{item.create_time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sms_list: []
			}
		},
		methods: {
			load_sms() {
				let _self = this;
				this.sms_list = [];
				uni.request({
					url: "http://localhost:5000/sms-list",
					method: "POST",
					success(res) {
						console.log(res.data)
						for (var i = 0; i < res.data.sms_list.length; i++) {
							_self.sms_list.push(res.data.sms_list[i].sms)
						}
						console.log(_self.sms_list)
					}
				})
			}
		},
		onLoad() {
			this.load_sms();
		},
		onPullDownRefresh() {
			this.load_sms();
			uni.stopPullDownRefresh();
		}
	}
</script>

<style lang="less" scoped>
	.sms-list {
		width: 98%;
		margin: 0 auto;

		.sms-item {
			background-color: #F6F7FB;
			padding: 2%;
			margin-top: 2%;

			image {
				width: 20px;
				height: 20px;
			}

			text {
				margin-left: 10px;
			}
		}
	}
</style>
