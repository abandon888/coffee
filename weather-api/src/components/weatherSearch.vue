<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const city = ref('')
  const weather = ref(null)
  const apiKey = '8e6a24c06cfdff1c91fa56a2ef3121e2'

  const getWeather = async () => {
    if(!city.value) {
      return
      alert('Please enter a city name')
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`)
    if(response.status === 404) {
      alert('City not found')
    }else{
      weather.value = response.data
    }
    console.log(response.data)
  }
</script>

<template>
  <div>
    <input type="text" v-model="city" placeholder="Enter city name">
    <button @click="getWeather">Get Weather</button>
    <div v-if="weather">
      <h2>{{ weather.name }}</h2>
      <p>{{ weather.main.temp }}°C</p>
      <p>{{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
