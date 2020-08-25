<template>
  <div class="container">
    <div>
      <br>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }
  },
  head() {
    return {
      title: 'Index page title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is my meta content',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...this.metaKeywords],
        }
      ]
    }
  },
  asyncData() {
    const metaKeywords = ['nuxt', 'vue.js'];
    return {
      metaKeywords,
    }
  },
  created() {
    console.log('created hook');
  },
  mounted() {
    console.log('created hook');
  }
}
</script>

