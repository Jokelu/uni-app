<template>
	<view>
		<view class="cell">
			<input type="text" placeholder="请输入名字" class="put" value="" />
		</view>
		<button class="btn">完成</button>
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
		box-sizing: border-box;
		padding: 10px;
		background: #fff;
		margin-top: 10px;
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
