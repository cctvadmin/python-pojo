<template>
	<view>
		<view class="partcipate-item" @click="click_el()">
			<view class="img">
				<image :src="image" mode="aspectFit"></image>
			</view>
			<view class="texts">
				<view class="title">
					{{title}}
				</view>
				<view class="message">
					{{message}}
				</view>
				<view class="status">
					<view v-if="status==0" class="green">
						<view class="radio"></view>
						报名中
					</view>
					<view v-if="status==1" class="red">
						<view class="radio"></view>
						报名结束
					</view>
					<view v-if="status==2" class="green">
						<view class="radio"></view>
						活动开始
					</view>
					<view v-if="status==3" class="red">
						<view class="radio"></view>
						活动结束
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cacode-shop-item",
		props: ["image", "title", "message", "status", "item_id"],
		methods: {
			click_el() {
				this.$emit("click", this.item_id)
			}
		},
		onLoad() {
			console.log(this.id)
		}
	}
</script>


<style lang="less" scoped>
	.partcipate-item {
		width: 100%;
		display: inline-block;
		background-color: #F6F7FB;
		box-shadow: 1px 1px 6px 1px #E6E9EE;
		border-radius: 10px;
		color: #4E5A6E;

		.img {
			width: 100%;
			text-align: center;

			image {
				width: 90%;
				height: 180px;
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
			}

			.message-clone {
				font-size: 25rpx;
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
	}
</style>
