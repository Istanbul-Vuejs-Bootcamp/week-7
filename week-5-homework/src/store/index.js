import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    albums: []
  },
  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    },
    SET_ALBUMS: (state, payload) => {
      state.albums = payload;
    }
  },
  actions: {
    getPhotos({ commit }) {
      const httpService = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL,
      });

      httpService.get('photos').then((response) => {
        let photoList = response.data.splice(0,230).map(item => {
          return {
            ...item,
            likeCount: 0,
          }
        });

        // const photoList = response.data.splice(0,230);
        // photoList.forEach(item => item.likeCount = 0)
        commit('SET_PHOTOS', photoList);

        const albumIds = [...new Set(photoList.map(item => item.albumId))];
        commit('SET_ALBUMS', albumIds);

      })
    },
    like({ commit, state }, { photoId, newValue }) {
      const photoIndex = state.photos.findIndex(p => p.id === photoId);
      const tempPhotos = state.photos;
      tempPhotos[photoIndex].likeCount = newValue;

      commit('SET_PHOTOS', tempPhotos);
    },

  },
  modules: {
  }
})
