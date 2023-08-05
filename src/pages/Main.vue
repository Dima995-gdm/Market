<template>
	<div class="container mt-5">
		<div class="row gap-4 mb-5">
			<div class="col">
				<div class="input-group">
					<input
						type="text"
						class="form-control"
						placeholder="Поиск..."
						aria-label="Поиск..."
						aria-describedby="button-addon2"
					/>
					<button
						class="btn btn-primary"
						type="button"
						id="button-addon2"
					>
						Поиск
					</button>
				</div>
			</div>
			<div class="col-auto">
				<router-link to="/login" class="me-2">
					<button class="btn btn-secondary">
						<i class="bi bi-person"></i>
					</button>
				</router-link>
				<router-link to="/basket">
					<button class="btn btn-secondary">
						<i class="bi bi-cart3"></i>
					</button>
				</router-link>
				<!--		<a href="">-->
				<!--		  <i class="bi bi-cart3"></i>-->
				<!--		</a>-->
				<!--		<a href="">-->
				<!--		  <i class="bi bi-cart3"></i>-->
				<!--		</a>-->
			</div>
		</div>
		<div class="row row-gap-4">
			<div class="col-3" v-for="product in products" :key="product.id">
				<div class="card">
					<img
						:src="product.images[0]"
						class="card-img-top"
						:alt="product.title"
					/>
					<div class="card-body">
						<h5 class="card-title">{{ product.title }}</h5>
						<p class="card-text">
							{{ product.description }}
						</p>
						<button class="btn btn-success"><i class="bi bi-cart-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>

.card-title {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.card-img-top {
	max-height: 160px;
	object-fit: cover;
}

.card-text {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

</style>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			products: null,
		};
	},

	mounted() {
		axios.get('https://dummyjson.com/products/').then((response) => {
			this.products = response.data.products;
		});
	},
};
</script>
