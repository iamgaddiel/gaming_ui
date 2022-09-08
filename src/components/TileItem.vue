<script lang="ts">
export default {
    name: 'TileItem',
    props: ['image']
}
</script>
    
<template>
    <section class="tile_item">
        <img :src="image" />
        <div class="options">
            <h3>Working</h3>
            <button>start</button>
        </div>
    </section>
</template>
    
    
<style scoped>
.tile_item {
    border-radius: 12px;
    margin: 7px 0;
    width: 100%;
    height: 12vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.tile_item img {
    width: 100%;
    height: auto;
}

.options {
    position: absolute;
    right: 0;
    text-shadow: 1px 1px 4px #000;
}

button {
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.217);
    border: 2px #fff solid;
    color: #fff;
    padding: 12px 10px;
    width: 20vw;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.555);
    transition: .5s;
}

@media(min-width: 768px) {
    .tile_item {
        width: 45%;
        height: 30vh;
        overflow: hidden;
        margin: 20px;
    }

    .options {
        right: calc(50% - 10vw)
    }
}
</style>
    