<template>
	<view id="page">
		<image :src="url" mode="aspectFit"></image>
		<view style="width: 100%;text-align: center;">
			{{code}}
		</view>
		<view style="width: 100%;text-align: center;">
			{{user_name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: "",
				code: "",
				user_name: ""
			}
		},
		methods: {

		},
		onLoad(option) {
			this.url = "http://localhost:5000/url-to-img?url=" + option.url;
			this.code = option.code;
			this.user_name = option.user_name;
		}
	}
</script>

<style scoped>
	* {
		text-align: center;
	}

	image {
		width: 100%;
	}
</style>
