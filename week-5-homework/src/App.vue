<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        created() {
            this.$store.dispatch('getPhotos');
            alert(process.env.VUE_APP_MESSAGE);
        },
    }
</script>

<style scoped>

</style>
