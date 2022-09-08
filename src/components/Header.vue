<script setup>
import hero_image from '../assets/images/smile.jpeg'

</script>

<template>
    <header>
        <section class="hero__section">
            <img :src="hero_image" />
            <button class="hero_button"> Button </button>
        </section>
    </header>
</template>

<style scoped>
header {
    height: 20vh;
    overflow: hidden;
}

.hero__section {
    width: 100vw;
    height: inherit;
    position: relative;
}

.hero__section img {
    width: 100%;
    height: auto;
}

.hero_button {
    position: absolute;
    right: 2em;
    bottom: 2em;
    z-index: 2;
}

.hero_button {
    background-color: var(--gold);
    border: none;
    border-radius: 5px;
    color: #000;
    padding: 8px 10px;
    font-weight: bolder;
    font-size: small;
    width: 7rem;
}

@media(min-width: 576px) {
    header {
        height: 30vh;
    }
}
</style>