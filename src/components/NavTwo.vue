<script setup lang="ts">
import NavTwoItem from "./NavTwoItem.vue";
import clock_active from '../assets/icons/ho_us1@3x.png'
import clock_inactive from '../assets/icons/ho_us2@3x.png'
import tv_active from '../assets/icons/ho_li1@3x.png'
import tv_inactive from '../assets/icons/ho_li2@3x.png'
import ball_active from '../assets/icons/ho_sp1@3x.png'
import ball_inactive from '../assets/icons/ho_sp2@3x.png'
import ticket_active from '../assets/icons/ho_lo1@3x.png'
import ticket_inactive from '../assets/icons/ho_lo2@3x.png'
import poker_active from '../assets/icons/ho_po1@3x.png'
import poker_inactive from '../assets/icons/ho_po2@3x.png'
import controller_active from '../assets/icons/ho_ga1@3x.png'
import controller_inactive from '../assets/icons/ho_ga2@3x.png'

// export default {
//     name: "NavTwo",
//     components: { NavTwoItem }
// }
</script>

<template>
    <nav>
        <NavTwoItem title="Used" :image="clock_active" />
        <NavTwoItem title="Live" :image="tv_inactive" />
        <NavTwoItem title="Sport" :image="ball_inactive" />
        <NavTwoItem title="Lottery" :image="ticket_inactive" />
        <NavTwoItem title="Poker" :image="poker_inactive" />
        <NavTwoItem title="Game" :image="controller_inactive" />
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 30px;
}

@media(min-width:768px) {
    nav {
        flex-direction: row;
        margin: 10px 0;
        justify-content: space-evenly;
    }
}
</style>