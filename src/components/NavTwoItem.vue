<script lang="ts">
export default {
    name: 'NavTwoItem',
    props: {
        title: String,
        image: String
    }
}
</script>

<template>
    <section class="nav_item">
        <img :src="image" />
    </section>
</template>


<style scoped>
.nav_item {
    border-radius: 12px;
    margin: 5px 0;
    border: none;
    width: 60px;
    height: 60px;
    margin: 10px 0;
}

.nav_item img {
    width: 100%;
    height: auto;
}

@media(min-width:768px) {
    .nav_item {
        width: 100px;
        height: 100px;
    }
}
</style>
