<template>
	<view>
		<view class="cell">
			<text class="label">手机号</text><input placeholder="请输入11位手机号" class="put" type="text" value="" />
		</view>
		<view class="cell">
			<text class="label">验证码</text><input placeholder="请输入验证码" class="put" type="text" value="" />
		</view>
		<view class="cell">
			<text class="label">密&nbsp &nbsp码</text><input placeholder="请输入密码" class="put" password type="text" value="" />
		</view>
		<button class="btn">注册</button>
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

	.put {
		padding-left: 15px;
		font-size: 14px;
	}

	.btn {
		width: 80vw;
		background: #1296DB;
		color: #fff;
		margin: 20px auto;
	}
</style>
