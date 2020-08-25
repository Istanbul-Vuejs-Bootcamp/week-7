<template>
    <div>
      {{ number }}<br><br>
      {{  messageComputed }}<br><br>
      <div>
        <button @click="increase">Artir</button> |
        <button @click="decrease">Azalt</button>
      </div>
    </div>
</template>

<script>
    import { ref, onMounted, watch, computed } from 'vue';
    export default {
      name: 'App',
      setup() {
        // data
        const number = ref(0);

        //functions or methods
        const increase = () => {
          number.value++;
        }
        const decrease = () => {
          number.value--;
        }

        //watch
        watch(number, (newVal, oldVal) => {
          console.log(`new value : ${newVal}`);
          console.log(`old value : ${oldVal}`);
          if (newVal == 10) {
            number.value = 0;
          }
        })

        //computed
        const messageComputed = computed(()=> {
          return `Sayı değeri ${number.value}`;
        })

        //mounted
        onMounted( ()=> {
          number.value = 5;
        })

        return {
          number,
          onMounted,
          increase,
          decrease,
          watch,
          messageComputed
        }
      }
    }
</script>

<style scoped>

</style>
