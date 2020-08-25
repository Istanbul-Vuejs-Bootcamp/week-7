<template>
    <div class="card px-1 py-1">
        <img :src="imageData.thumbnailUrl"
             @click="gotoDetail" />
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-success" @click="likeAction(imageData.likeCount + 1)">
                +
            </button>
            <span>{{ imageData.likeCount }}</span>
            <a class="btn btn-danger"
               @click="likeAction(imageData.likeCount-1)">
                -
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageComponent",
        props: {
            imageData: {
                type: Object,
                required: true
            },
        },
        methods: {
            likeAction(value) {
                const payload = {
                    photoId: this.imageData.id,
                    newValue: value,
                }
                this.$store.dispatch('like', payload);
            },
            gotoDetail() {
                this.$router.push({
                    name: 'Detail',
                    params: {
                        id: this.imageData.id,
                        title:this.imageData.title,
                        url: this.imageData.url,
                    }
                })
            }
        },
    }
</script>
