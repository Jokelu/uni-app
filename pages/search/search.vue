<template>
	<view class="content">
		<view class="search">
			<image src="../../static/search.png" class="icon"></image>
			<input class="put" value="" placeholder="请输入关键字搜索" />
			<button size="mini" class="btn">搜索</button>
		</view>
		<view class="filter">
			<view class="filter_item">
				<text>位置</text>
				<image src="../../static/shang.png" class="icon"></image>
			</view>
			<view class="filter_item">
				<text>面积</text>
				<image src="../../static/shang.png" class="icon"></image>
			</view>
			<view class="filter_item">
				<text>行业</text>
				<image src="../../static/shang.png" class="icon"></image>
			</view>
			<view class="filter_item">
				<text>筛选</text>
				<image src="../../static/xia.png" class="icon"></image>
			</view>
		</view>
		<view class="shop_list">
			<view class="shop_item" v-for="(item, index) in shopList" :key="index" @click="toDetail">
				<image class="item_img" :src="baseImg+item.imgUrl"></image>
				<view class="item_info">
					<view class="item_name">{{item.name}}</view>
					<view class="item_price"><text class="priceCount">1200</text>元/月起</view>
					<view class="item_point"><text>80</text>m2<text> | </text> 北市-北市区周边</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopList: [],
				baseImg: "https://bianlimall-public.oss-cn-beijing.aliyuncs.com/",
			};
		},
		onLoad() {
			uni.request({
				url: `https://dev.bianlimall.com/mall/homePage`, //仅为示例，并非真实接口地址。
				data: {},
				header: {},
				success: (res) => {
					let data = res.data.data
					let arr = []
					data.map(item => {
						arr = [...arr, ...item.commercialInfoList]
					})
					this.shopList = arr
				}
			});
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

<style lang="less">
	.content {
		height: 100%;
		overflow: auto;
	}

	.search {
		padding: 10px;
		box-sizing: border-box;
		font-size: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		background: #fff;

		.icon {
			width: 22px;
			height: 22px;
			position: absolute;
			left: 15px;
		}

		.put {
			width: 70vw;
			height: 30px;
			font-size: 14px;
			box-sizing: border-box;
			padding-left: 25px;
			border: solid 1px #ccc;
		}

		.holder {
			color: #666;
		}

		.btn {
			width: 20vw;
			height: 30px;
			box-sizing: border-box;
			// padding: 5px;
			border-radius: 5px;
			background: #35b0fe;
			color: #fff;
		}
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

	.filter {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;
		margin: 1px 0;

		.filter_item {
			flex: 1;
			font-size: 16px;
			color: #666;
			display: flex;
			align-items: center;
			justify-content: center;

			.icon {
				width: 15px;
				height: 15px;
				margin-left: 3px;
				color: #666;
			}
		}
	}
</style>
