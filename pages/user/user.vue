<template>
	<view class="user">
		<view class="userinfo">
			<image src="../../static/shop.jpg" class="avatar"></image>
			<view class="user-data" @click="editUserInfo">
				<view class="name">冬至</view>
				<view class="edit" >查看并编辑个人资料</view>
			</view>
		</view>
		<view class="">
			<view class="cell" style="margin:10px 0" @click="toSelect">
				<view class="cell_left">
					<image src="../../static/shoucang.png"></image>
					<text>收藏的房源</text>
				</view>
				<image src="../../static/right.png" alt=""></image>
			</view>
			<view class="cell" style="margin-bottom:1px" @click="toAbout">
				<view class="cell_left">
					<image src="../../static/guanyuwomen.png" alt=""></image>
					<text>关于我们</text>
				</view>
				<image src="../../static/right.png" alt=""></image>
			</view>
			<view class="cell" @click="call">
				<view class="cell_left">
					<image src="../../static/kefu.png" alt=""></image>
					<text>客服电话</text>
				</view>
				<text>010-5612345</text>
			</view>
		</view>
		<button class="sing-out" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			editUserInfo() {
				uni.navigateTo({
					url: 'personinfo/personinfo'
				})
			},
			toSelect() {
				uni.navigateTo({
					url: 'collect/collect'
				})
			},
			toAbout() {
				uni.navigateTo({
					url: 'aboutme/aboutme'
				})
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: '15737317757' //仅为示例
				});
			},
			login() {
				uni.navigateTo({
					url: 'login/login'
				})
			}
		}
	}
</script>

<style>
	.user {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}

	.userinfo {
		widows: 100%;
		height: 180px;
		background: #1296db;
		display: flex;
		align-items: center;

	}

	.avatar {
		width: 75px;
		height: 75px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30px 0 0 30px;
	}

	.user-data {
		color: #fff;
		margin: 30px 0 0 20px;
	}

	.name {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.edit {
		font-size: 14px;
		color: #eeebff;
	}

	.cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		box-sizing: border-box;
		height: 45px;
		background: #fff;
		font-size: 18px;

	}

	.cell_left {
		display: flex;
		align-items: center;

	}

	image {
		width: 22px;
		height: 22px;
		margin-right: 10px;
	}

	.sing-out {
		background: #fff;
		margin-top: 30px;
		color: #35b0fe;
	}
</style>
