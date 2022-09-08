<script setup lang="ts">
import HotGameItem from './HotGameItem.vue'

import controller from '../assets/icons/controller.png';
import dragon from '../assets/icons/dragon.png';
import burger from '../assets/icons/burger-king.png';
import fighting from '../assets/icons/fighting.png';
</script>

<template>
    <section class="game_list">
        <h3>Hot Game</h3>

        <section class="hot_game_item_container">
            <HotGameItem :image="dragon" />
            <HotGameItem :image="burger" points="6000x"/>
            <HotGameItem :image="fighting" points="500x"/>
            <HotGameItem :image="controller" points="7000x"/>
        </section>
    </section>
</template>

<style scoped>
h3 {
    color: var(--gold);
}

.game_list {
    padding: 0px 10px;
}

.hot_game_item_container {
    display: flex;
    justify-content: space-between;
    padding: auto 10px;
}

@media(min-width: 576px) {
    .hot_game_item_container {
        justify-content: space-evenly;
    }
}
</style>