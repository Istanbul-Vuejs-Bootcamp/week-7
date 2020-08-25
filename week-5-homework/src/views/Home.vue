<template>
  <div class="container">
    <div>
      <select v-model="selectedAlbumId">
        <option :value="null">ALL PHOTOS</option>
        <option v-for="albumId in albums" :key="albumId" :value="albumId">
          {{ `ALBUM ${albumId}` }}
        </option>
      </select>
    </div>
    <div class="row">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2 mt-3 mb-3"
           v-for="(image, index) in filteredImage"
           :key="index">
        <ImageComponent :image-data="image"></ImageComponent>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import ImageComponent from "../components/ImageComponent";
  export default {
    name: 'Home',
    components: {
      ImageComponent,
    },
    data() {
      return {
        selectedAlbumId: null,
      }
    },
    computed: {
      ...mapState(['photos', 'albums']),
      filteredImage() {
        if(this.selectedAlbumId) {
          return this.photos.filter((p) => p.albumId === this.selectedAlbumId)
        }
        return this.photos;
      }
    },
  }
</script>

<style scoped>

</style>
