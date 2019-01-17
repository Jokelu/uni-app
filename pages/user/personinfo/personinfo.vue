<template>
	<view>
		<view class="avatar" @click="changeAvatar">
			<text>头像</text>
			<view class="avatarRight">
				<image class="avatarImg" src="../../../static/wode.png" mode=""></image>
				<image class="right" src="../../../static/right.png" mode=""></image>
			</view>
		</view>
		<view class="name" @click="setName">
			<text>名字</text>
			<image class="right" src="../../../static/right.png" mode=""></image>
		</view>
		<view class="mask" v-show="isShow" @click="hidden">

		</view>
		<view class="pop" :class="[isShow?'isPop':'']">
			<view class="row" @click="isCamera">
				拍照
			</view>
			<view class="row" @click="isAlbum ">
				从手机相册选择
			</view>
			<view class="row" @click="hidden">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			};
		},
		methods: {
			changeAvatar() {
				this.isShow = true
			},
			setName() {
				uni.navigateTo({
					url: '/pages/user/editname/editname'
				})
			},
			hidden() {
				this.isShow = false
			},
			isCamera() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择
					success: function(res) {
						uni.previewImage({
							urls: res.tempFilePaths
						});
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			isAlbum() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						uni.previewImage({
							urls: res.tempFilePaths
						});
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			}
		}
	}
</script>

<style>
	.avatar,
	.name {
		background: #fff;
		padding: 10px 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.avatar {
		margin-bottom: 1px;
	}

	.avatarRight {
		display: flex;
		align-items: center;
	}

	.avatarImg {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: solid 1px #f5f5f5;
	}

	.right {
		width: 22px;
		height: 22px;
	}

	.pop {
		width: 100%;
		/* height: 300px; */
		/* background: #fff; */
		transform: translate3d(0, 100%, 0);
		transition: all 0.2s;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 500;
	}

	.mask {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		z-index: 80;
	}

	.isPop {
		transform: translate3d(0, 0, 0);
	}

	.row {
		padding: 10px;
		width: 90vw;
		margin: 0 auto;
		text-align: center;
		background: #fff;
		margin-bottom: 15px;
		box-sizing: border-box;
		border-radius: 15px;
	}
</style>
