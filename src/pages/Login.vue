<template>
	<div class="container w-50 d-flex justify-content-center vh-100 align-items-center">
		<form class="border border-2 rounded-2 p-3 flex-grow-1">
			<h1 class="text-center">Авторизация</h1>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Имя пользователя*</label>
				<input required type="tel" class="form-control" id="exampleInputEmail1">
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Пароль*</label>
				<input type="password" class="form-control" id="exampleInputPassword1">
			</div>
			<button type="submit" class="btn btn-success btn-lg">Войти</button>
		</form>
	</div>
</template>

<script>
export default {};
</script>