<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="circular"
		 :duration="duration">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="swiper-item">
					<image class="item" :src="item.img" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="hot">
			<text class="hot_text">热门推荐</text>
		</view>
		<view class="shop_list">
			<view class="shop_item" v-for="(item, index) in shopList" :key="index" @click="toDetail">
				<image class="item_img" src="../../static/shop.jpg"></image>
				<view class="item_info">
					<view class="item_name">河大北区商业街</view>
					<view class="item_price"><text class="priceCount">1200</text>元/月起</view>
					<view class="item_point"><text>80m&sup2</text><text> | </text> 北市-北市区周边</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				shopList: [{
						name: "角门东"
					},
					{
						name: "角门东"
					},
					{
						name: "角门东"
					},
					{
						name: "角门东"
					},
					{
						name: "角门东"
					},
					{
						name: "角门东"
					}
				],
				banner: [{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
						title: "送你一朵fua"
					},
					{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
						title: "送你一辆车"
					},
					{
						url: "javascript:",
						img: "https://static.vux.li/demo/5.jpg", // 404
						title: "送你一次旅行",
						fallbackImg: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
					}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true
			}
		},
		onLoad() {

		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: 'housedetail/housedetail'
				});
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		overflow: auto;
	}

	.swiper {
		width: 100%;
		height: 220px;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.item {
		width: 100%;
		height: 100%;
	}

	.hot {
		width: 100%;
		height: 45px;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 45px;
		font-size: 14px;
	}

	.hot_text {
		position: relative;
	}

	.hot_text::before {
		content: "";
		position: absolute;
		top: 22px;
		right: 65px;
		width: 35px;
		height: 1px;
		background: #999;
	}

	.hot_text::after {
		content: "";
		position: absolute;
		top: 22px;
		left: 65px;
		width: 35px;
		height: 1px;
		background: #999;
	}

	.shop_list {}

	.shop_item {
		width: 100%;
		height: 100px;
		padding: 10px;
		background: #fff;
		margin-bottom: 1px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.item_img {
		width: 100px;
		height: 80px;
		border-radius: 5px;
		margin-right: 10px;
	}

	.item_info {
		flex: 1;
		height: 80px;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.item_name {
		font-size: 18px;
		color: #333;
		letter-spacing: 1px;
		font-weight: 550;
	}

	.item_price {
		color: #ff9334;
		font-size: 12px;
	}

	.priceCount {
		font-size: 16px;
		font-weight: bolder;
	}

	.item_point {
		color: #666;
	}
</style>
