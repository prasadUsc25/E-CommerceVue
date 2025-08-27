<template>
    <div class="product-container" v-for="product in products" :key="product.id">
            <img class="product-image" :src="product.imageName" alt="Product Image" />
            <div class="details-wrap">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
            </div>
            <div>
            <button class="remove-button">Remove from Cart</button>
        </div>
    </div>
         
</template>

<script>

export default {
    name: "ProductsList",
    props: ['products'],
    
}

</script>