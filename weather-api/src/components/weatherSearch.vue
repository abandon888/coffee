<script setup>
import axios from 'axios'
import { ref } from 'vue'

const city = ref('')
const weather = ref(null)
const apiKey = '8e6a24c06cfdff1c91fa56a2ef3121e2'

const refresh = () => {
  if(localStorage.getItem('city')) {
    weather.value = JSON.parse(localStorage.getItem('city'))
  }
}
//在vue语法中，箭头函数中的this指向的是window，所以在这里使用function
const getWeather = async () => {
  // if(localStorage.getItem('city')) {
  //   weather.value = JSON.parse(localStorage.getItem('city'))
  //   return
  // }
  if (!city.value) {
    alert('Please enter a city name')
    return
  }
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`)
    weather.value = response.data
    localStorage.setItem('city', JSON.stringify(weather.value))
    console.log(response.data)
  } catch (error) {
    if (error.response.status === 404) {
      alert('City not found')
      console.log(error.response.data)
    }
  }
}

refresh()
</script>



<template>
  <div class="bg">
    <h1>Simple Weather App</h1>
    <div class="header">
      <input
        type="text"
        v-model="city"
        placeholder="Enter city name and search"
      />
      <button @click="getWeather">SUBMIT</button>
    </div>
    <div v-if="weather" class="content">
      <h2>{{ weather.name }}</h2>
      <p>
        <span>{{ weather.main.temp }}</span
        >°C
      </p>
      <p>{{ weather.weather[0].description }}</p>
    </div>
    <div class="foot">
      <span>made by wangyuhan</span><span class="love">❤</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
div {
  align-items: center;
  justify-content: center;
  h1 {
    color: aliceblue;
  }
  .header {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    input {
      border: none;
      border-bottom: 2px solid aliceblue;
      background: inherit;
      color: aliceblue;
      font-size: 24px;
      outline: none;
    }
    input::placeholder {
      color:currentColor;
    }
    button {
      margin-left: 20px;
      background-color: #ff1e42;
      color: aliceblue;
      font-size: 16px;
      padding: 15px;
    }
  }
  .foot {
    position: absolute;
    bottom: 10%;
    span {
      color: aliceblue;
      font-size: 18px;
    }
    .love {
      color: red;
    }
  }
  .content {
    background-color: #ffff;
    width: 20vh;
    height: 25vh;
    border-radius: 18px;
    h2 {
      margin-top: 20px;
    }
    p {
      margin-top: 20px;
      align-items: center;
      span {
        font-size: 35px;
      }
    }
  }
}
</style>
