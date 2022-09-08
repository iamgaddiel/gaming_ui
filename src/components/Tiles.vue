<script setup lang="ts">
import TileItem from './TileItem.vue';
import idk from '../assets/images/idk.jpg';
import pic from '../assets/images/pic.jpeg';
import picture from '../assets/images/picture.jpg';
import smile from '../assets/images/smile.jpeg';

</script>


<template>
    <section class="tiles">
        <TileItem :image="idk" />
        <TileItem :image="pic" />
        <TileItem :image="smile" />
        <TileItem :image="picture" />
    </section>
</template>

<style scoped>
.tiles {
    padding: 12px;
    display: flex;
    flex-direction: column;
}

@media(min-width: 768px) {
    .tiles{
        padding: 30px 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }
}
</style>

