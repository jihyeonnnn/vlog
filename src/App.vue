<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">vuedongsan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/list">List</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        개발 진행중~
      </span>
    </div>
  </div>
</nav>
<router-link to="/">홈으로</router-link>
<div class="mt-4">
<router-view :content = "content"></router-view>
</div>
<!--router-view에선 스타일 안먹혀서 div로 감싼 후 거기서 스타일 적용해주기 -->
<!-- <List :con = "content[index]" v-for="(con, index) in content" :key="index"></List> -->
</template>

<script>
//import List from './components/List.vue'
import Mockup from './assets/Mockup' 

export default {
  name: 'App',
  data() {
    return {
      content  : Mockup
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
