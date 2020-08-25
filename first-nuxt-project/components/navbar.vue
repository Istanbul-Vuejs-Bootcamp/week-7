<template>
    <div class="navbar">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      |
      <nuxt-link to="/about">
        About
      </nuxt-link>
      |
      <nuxt-link to="/dynamic">
        Dynamic
      </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar {
    border: solid 1px #ccc;
    background-color: #4e555b;
    padding: 15px 15px;
    color: #fff;
    margin-bottom: 24px;
  }

  .navbar a {
    color: #fff;
  }

  .navbar a:hover {
    color: #cccccc;
  }

</style>
