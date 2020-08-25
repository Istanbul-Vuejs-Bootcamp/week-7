<template>
    <div>
      <div class="card" v-for="item in arr">
        <h3>{{ item.title }}</h3>
        <div>{{ item.body }}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "dynamic",
      data() {
        return {
          arr: []
        }
      },
      methods: {
        getData() {
          const axios = require('axios');
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              this.arr = [...response.data];
            })

        }
      },
      mounted() {
        this.getData();
      }
    }
</script>

<style scoped>

</style>
