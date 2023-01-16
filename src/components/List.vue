<template>
  <div v-for="(con,index) in content"  :key="index">
    <h4 @click="$router.push('/detail')">{{ con.title }}</h4>
    <p>{{ con.content }}</p>
    <p>{{ con.date }}</p>
  </div>
</template>

<script>
export default {
    name : 'List',
    props: {
        content : Object
    }

}
</script>

<style>

</style>