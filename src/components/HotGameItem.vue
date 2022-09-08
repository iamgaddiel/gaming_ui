<script lang="ts">
export default{
    name: 'HotGameItem',
    props:{
        image: String,
        points: {
            type: String,
            default: ""
        }

    }
}
</script>

<template>
    <section class="game_item">
        <img :src="image" />
        <span id="xps">{{ points }}</span>
    </section>
</template>

<style>
    .game_item{
        width: 6em; 
        height: 6em;
        background: #333;
        padding: 2px;
        border-radius: 12px;
        position: relative;
    }
    .game_item img{
        width: 100%;
        height: auto;
    }
    #xps{
        background-color: rgba(51, 51, 51, 0.13);
        color: var(--gold2);
        text-shadow: 1px 2px #333;
        position: absolute;
        font-size: bolder;
        top: 3px;
        right: 0;
    }
</style>

