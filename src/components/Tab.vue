<script setup lang="ts">
    import home from '../assets/icons/ho_ho1@3x.png'
    import gift from '../assets/icons/ho_ac2@3x.png'
    import money from '../assets/icons/ho_wa2@3x.png'
    import person from '../assets/icons/ho_my2@3x.png'
</script>

<template>
    <section class="tab">
        <div class="tab_item">
            <img :src="home" alt="" />
        </div>
        <div class="tab_item">
            <img :src="gift" alt="" />
        </div>
        <div class="tab_item">
            <img :src="money" alt="" />
        </div>
        <div class="tab_item">
            <img :src="person" alt="" />
        </div>
    </section>
</template>


<style scoped>
.tab{
    display: flex;
    justify-content: space-evenly;
    background-color: #1A1A1A;
    padding: 10px 0px;
}
.tab_item{
    width: 40px;
    height: 40px;
}
.tab_item img{
    width: 100%;
    height: auto;
}
</style>