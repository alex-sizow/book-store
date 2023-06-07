<script setup lang="ts"></script>

<template>
	<div class="header">
		<NuxtLink
			to="/"
			class="header__logo"
			><img
				src="@/assets/img/12-120436_open-book-icon-png.webp"
				alt="" /><span>Project name</span></NuxtLink
		>
		<div class="header__nav">
			<span>Auth</span>
			<NuxtLink to="/about">About</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 80px;
	padding: 15px 12px;
	font-size: 20px;
	background: white;
	border-radius: 0px 0px 14px 14px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__logo {
		display: flex;
		align-items: center;
		gap: 12px;

		img {
			width: 50px;
		}
	}
	&__nav {
		display: flex;
		gap: 16px;
	}
}
</style>
