<template>
	<view>
		<view class="cell">
			<text class="label">手机号</text><input v-model="phone" placeholder="请输入11位手机号" @input="getPhone"  class="put" type="text" />
		</view>
		<view class="cell">
			<text class="label">验证码</text><input placeholder="请输入验证码" class="put" type="text" value="" />
			<button :disabled="disabled" class='login_get'>
				<text v-if="isGetCode" class="code" @click="sendCode">获取验证码</text>
				<text v-if="!isGetCode" class="code">{{mesCode}}s</text>
			</button>
		</view>
		<view class="cell">
			<text class="label">密&nbsp &nbsp码</text><input placeholder="请输入密码" class="put" password type="text" value="" />
		</view>
		<button class="btn">找回密码</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				mesCode: 59,
				disabled: false,
				isGetCode: true
			};
		},
		methods: {
			getPhone(e) {
				this.phone = e.target.value
				console.log(e.target.value)
			},
			sendCode() {
				console.log(this.phone)
				if (!this.phone) {
					uni.showToast({
						title: '请输入手机号',
						duration: 2000
					});
				}
			}
		}
	}
</script>

<style>
	.cell {
		display: flex;
		align-items: center;
		border-bottom: solid 1px #F5F5F5;
		box-sizing: border-box;
		padding: 10px;
		background: #fff;
	}

	.label {
		width: 60px;
		text-align: right;
		font-size: 14px;
	}

	.put {
		padding-left: 15px;
		font-size: 14px;
	}

	.login_get {
		font-size: 14px;
	}

	.code {
		font-size: 14px;
	}

	.btn {
		width: 80vw;
		background: #1296DB;
		color: #fff;
		margin: 20px auto;
	}
</style>
