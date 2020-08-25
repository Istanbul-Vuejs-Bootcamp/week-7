<template>
    <div class="container text-center">
        <div class="px-3">
            <router-link to="/">
                Back
            </router-link>
        </div>

        <h2>{{ title }}</h2>

        <div class="mt-3" v-if="imageSrc">
            <img :src="imageSrc" />
        </div>

    </div>
</template>

<script>
    export default {
        name: "imageDetail",
        data() {
            return {
                title: '',
                imageSrc: null
            }
        },
        mounted() {
            this.title = this.$route.params.title;
            this.imageSrc = this.$route.params.url;
        }
    }
</script>
