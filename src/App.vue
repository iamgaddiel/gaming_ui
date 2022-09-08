<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import HotGameList from './components/HotGameList.vue';
import NavTwo from './components/NavTwo.vue'

// images
import crown from './assets/icons/ho_vi@3x.png'
import wallet from './assets/icons/ho_mo@3x.png'
import volume from './assets/icons/ho_no@3x.png'
import Tiles from './components/Tiles.vue';
import Tab from './components/Tab.vue';
</script>


<template>
  <Navigation />
  <Header />
  <HotGameList />

  <section class="wallet">
    <div class="lhs">
      <div class="lhs_img">
        <img :src="wallet" />
      </div>
      <div class="lhs_txt">
        <span>Ken <img :src="crown" class="small_icon" />
          <span class="gold_text">7</span>
        </span>
        <span>₦<span class="gold_text">12121233</span></span>
      </div>
    </div>

    <div class="rhs">
      <p>
        <img :src="volume" class="small_icon" />
        Dragon Boat Festival holiday!holiday!Dragon Boat Festival
      </p>
    </div>
  </section>

  <main>
    <NavTwo />
    <Tiles />
  </main>

  <Tab />
</template>

<style scoped>
.wallet {
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  width: 100%;
  padding: 5px 0px;
  margin: 10px 0px;
}

.lhs,
.rhs {
  width: 50%;
}

.lhs {
  display: flex;
  align-items: center;
  border-right: 1px solid #bbb;
}

.lhs_img {
  width: 40px;
  height: 40px;
  padding: 1px 10px;
}

.lhs_img img {
  width: 100%;
  height: auto;
}

.lhs_txt {
  font-size: 20px;
  text-transform: uppercase;
  color: #bbb;
  margin: 0px;
  padding: 0;
}

.lhs_txt span:nth-child(1) {
  display: flex;
  align-items: center;
  font-size: .9em;

}

.small_icon {
  width: 20px;
  height: 20px;
  padding: 0 5px;
}

/* RHS */
.rhs {
  color: #bbb;
  text-align: center;
  font-size: medium;
}

.rhs p {
  width: 80%;
  margin: auto;
}


/*  Main*/
main {
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
}

@media(min-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
  }

  .wallet {
    justify-content: space-evenly;
  }
}
</style>
