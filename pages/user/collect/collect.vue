<template>
	<view>
		<view class="shop_list">
			<view class="shop_item" v-for="(item, index) in shopList" :key="index" @click="toDetail">
				<image class="item_img" src="../../../static/shop.jpg"></image>
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
				]
			};
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: '/pages/index/housedetail/housedetail'
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
