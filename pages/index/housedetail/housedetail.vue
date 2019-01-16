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
		<div class="houseinfo">
			<div class="title">
				<div class="name">出租（同城）整体急转四通商场临街旺铺，老店接受盈利</div>
				<p>发布：2小时前</p>
			</div>
			<div class="price">
				<div class="item">
					<p>月租金</p>
					<p>面议</p>
				</div>
				<div class="item">
					<p>面积</p>
					<p>90m&sup2 </p>
				</div>
				<div class="item">
					<p>日租金</p>
					<p>面议</p>
				</div>
			</div>
			<div class="info">
				<div class="row">
					<p>面宽：<span>8m</span></p>
					<p>层高：<span>3m</span></p>
					<p>付款方式：<span>押一付一</span></p>
					<p>起租期：<span>暂无</span></p>
					<p>状态：<span>经营中</span></p>
				</div>
				<div class="row">
					<p>进深：<span>8m</span></p>
					<p>楼层：<span>1层</span></p>
					<p>类型：<span>商业街</span></p>
					<p>免租期：<span>暂无</span></p>
					<p>历史经营：<span>餐饮美食</span></p>
				</div>
			</div>
			<div class="location">
				<p class="location_title">时尚购物广场</p>
				<p class="location_point">北市 - 河北小学</p>
			</div>
		</div>
		<div class="housedevice">
			<div class="title">配套设施</div>
			<div class="deviceList">
				<div class="list_item" v-for="(item,index) in deviceList" :key="index">
					<image class="icon" src="../../../static/fangyuan.png"></image>
					<p>客梯</p>
				</div>
			</div>
		</div>
		<div class="housedesc">
			<div class="houseTitle">房源描述</div>
			<div class="content">
				转租四通商铺大湖大厦阿杜我前端吃撒多好玩爱神的箭爱上了， 转租四通商铺大湖大厦阿杜我前端吃撒多好玩爱神的箭爱上了。
				转租四通商铺大湖大厦阿杜我前端吃撒多好玩爱神的箭爱上了， 转租四通商铺大湖大厦阿杜我前端吃撒多好玩爱神的箭爱上了
			</div>
		</div>
		<footer class="call">
			<div class="phoneName">
				<div class="avatar">
					<i class="icon iconfont icon-profile"></i>
				</div>
				<div class="name">
					<p>赵云</p>
					<p style="color:#666">联系人</p>
				</div>
			</div>
			<div class="phoneNum">
				电话咨询
			</div>
		</footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deviceList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
			};
		}
	}
</script>

<style lang="less">
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

	.call {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		height: 50px;
		border-top: solid 1px #f5f5f5;
		background: #fff;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.phoneName {
			display: flex;
			margin-left: 15px;

			.avatar {
				margin-right: 10px;

				i {
					font-size: 40px;
					color: #35b0fe;
				}
			}

			.name {
				font-size: 14px;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
		}

		.phoneNum {
			width: 100px;
			height: 35px;
			border-radius: 17px;
			line-height: 35px;
			text-align: center;
			color: #fff;
			font-size: 16px;
			background: #35b0fe;
		}
	}

	.houseinfo {
		background: #fff;
		box-sizing: border-box;
		padding: 10px;

		.title {
			font-size: 18px;
			font-weight: bolder;
			border-bottom: solid 1px #f5f5f5;

			p {
				font-size: 14px;
				color: #666;
				font-weight: 400;
				margin: 10px 0;
			}
		}

		.price {
			display: flex;
			align-items: center;
			height: 70px;
			border-bottom: solid 1px #f5f5f5;

			.item {
				height: 100%;
				display: flex;
				flex: 1;
				text-align: center;
				flex-direction: column;
				justify-content: space-around;

				p {
					&:first-child {
						font-size: 14px;
						color: #666;
					}

					&:last-child {
						font-size: 18px;
						color: #f00;
					}
				}
			}
		}

		.info {
			display: flex;
			padding: 5px 0;
			border-bottom: solid 1px #f5f5f5;

			.row {
				flex: 1;
				font-size: 14px;

				p {
					padding: 5px;
					color: #666;

					span {
						color: #333;
					}
				}
			}
		}

		.location {
			padding: 10px 0 0 10px;
			line-height: 25px;

			.location_title {
				font-size: 18px;
			}

			.location_point {
				color: #666;
				font-size: 14px;
			}
		}
	}

	.housedevice {
		margin: 10px 0;
		background: #fff;
		padding: 10px 15px;
		box-sizing: border-box;

		.title {
			height: 35px;
			font-size: 20px;
			border-bottom: solid 1px #f5f5f5;
		}

		.deviceList {
			display: flex;
			flex-wrap: wrap;
			padding: 15px 0;
			box-sizing: border-box;

			.list_item {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 15vw;
				flex-direction: column;
				font-size: 14px;
				margin-bottom: 15px;
				color: #666;
				// padding: 15px;
				box-sizing: border-box;

				.icon {
					width: 22px;
					height: 22px;
				}
			}
		}
	}

	.housedesc {
		margin: 10px 0;
		background: #fff;
		padding: 10px 15px;
		box-sizing: border-box;

		.houseTitle {
			height: 35px;
			font-size: 20px;
			border-bottom: solid 1px #f5f5f5;
		}

		.content {
			font-size: 14px;
			padding: 10px 0;
			box-sizing: border-box;
			color: #666;
			letter-spacing: 2px;
		}
	}
</style>
