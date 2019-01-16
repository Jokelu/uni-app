<template>
	<view>
		<view class="cell">
			<text class="label">手机号</text><input class="put" type="text" placeholder-style="holeder" placeholder="输入11位数的手机号"
			 value="" />
		</view>
		<view class="cell">
			<text class="label">密&nbsp &nbsp 码</text><input type="text" class="put" placeholder-style="color:#666" password
			 placeholder="输入正确的密码" value="" />
		</view>

		<button class="login">登录</button>
		<view class="help">
			<navigator class="regist" url="regist/regist" hover-class="none">注册账号</navigator>
			<navigator url="getpwd/getpwd" hover-class="none">找回密码</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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

	.login {
		width: 80vw;
		background: #1296DB;
		color: #fff;
		margin: 20px auto;
	}

	.help {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 25px;
		font-size: 14px;
	}

	.put {
		padding-left: 15px;
		font-size: 14px;
	}

	.holder {
		color: #666;
		font-size: 14px;
	}

	.regist {
		color: #1296db;
		margin-right: 10px;
		text-decoration: underline;
	}
</style>
