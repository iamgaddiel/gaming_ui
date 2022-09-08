<script setup>
    import bell_icon from '../assets/icons/ho_me@3x.png'
    import nav_icon from '../assets/icons/ho_li@2x.png'
    import logo_icon from '../assets/icons/ho_lo@3x.png'
</script>

<template>
    <nav>
        <div class="nav__image">
            <img :src="bell_icon" />
        </div>

        <div class="logo__icon">
            <img :src="logo_icon" />
        </div>

        <div class="nav__image">
            <img :src="nav_icon" />
        </div>
    </nav>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5vh;
        padding: 10px;
    }
    .nav__image{
        width: 30px;
        width: 30px;
    }
    .nav__image img{
        width: 100%;
        height: auto;
    }

    .logo__icon{
        width: 7rem;
        /* height: 7rem; */
        padding: 0;
        margin: 0;
    }
    .logo__icon img{
        width: 100%;
        height: auto;
    }
</style>