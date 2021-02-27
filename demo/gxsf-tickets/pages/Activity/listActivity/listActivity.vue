<template>
	<view id="page">
		<view id="list">
			<view class="item" v-for="(activitys,i) in activity_list" :key="i">
				<CACodeShopItem :image="'http://localhost:5000/find-file?path='+activitys.activity_img_path" :title="activitys.activity_name"
				 :message="activitys.activity_message" :status="activitys.activity_status" :item_id="activitys.activity_id" @click="to_activity"></CACodeShopItem>
			</view>
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
				activity_list: []
			}
		},
		methods: {
			to_activity(id) {
				uni.navigateTo({
					url: "/pages/Activity/activityItem/activityItem?id=" + id
				})
			},
			load_activity() {
				let _self = this;
				// 先清空list
				_self.activity_list = []
				uni.request({
					url: 'http://localhost:5000/activity-search',
					method: 'POST',
					data: {
						name: ''
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
							_self.activity_list[i].activity_people_max = "最大人数:" + _self.activity_list[i].activity_people_max;
							_self.activity_list[i].activity_people_now = "报名截止时间:" + _self.activity_list[i].activity_people_now;
						}
						console.log(_self.activity_list);
					},
					fail(res) {
						console.log(res);
					}
				})
			}
		},
		onLoad() {
			this.load_activity();
		},
		onPullDownRefresh() {
			this.load_activity();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
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
		}
	}
</style>
