<template>
  <div>
    <h1>Hello, About</h1>
    <div class="card" v-for="item in dataArr">
      <h3>{{ item.title }}</h3>
      <div>{{ item.body }}</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "about",
      async asyncData() {
        const axios = require('axios');
        let dataArr = [];
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dataArr = [...response.data];
        })

        return {
          dataArr
        }
      },
      head() {
        return {
          title: 'About page title',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'This is about page',
            },
            {
              hid: 'keywords',
              name: 'keywords',
              content: ['about', 'about of me', 'nuxt.js'],
            },
          ]
        }
      },
    }
</script>
<style>
  .card {
    border: solid 1px #ccc;
    padding: 15px;
    margin-bottom: 15px;
  }
</style>
