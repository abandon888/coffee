<template>
  <div>
    <img
      src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcX?ver=e8d2"
      alt="#"
      class="borderPreview"
    />
    <div class="content">
      <label>border-top-left-radius:<input type="text" :value="btlr"/></label>
      <label>border-top-right-radius:<input type="text" :value="btrr"/></label>
      <label>border-bottom-left-radius:<input type="text" :value="bblr"/></label>
      <label>border-bottom-left-radius:<input type="text" :value="bblr"/></label>
      <!-- <label>border-top-left-radius:<input type="text" /></label>
      <label>border-top-left-radius:<input type="text" /></label>
      <label>border-top-left-radius:<input type="text" /></label>
      <label>border-top-left-radius:<input type="text" /></label> -->
    </div>
    <div class="btn">
      <button @click="clearRadius">清空</button>
      <button @click="changeRadius">应用</button>
      <button @click="copyRadius">复制</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btlr: "10%",
      btrr: "10%",
      bblr: "10%",
      bbrr: "10%",
    };
  },
  methods: {
    changeRadius() {
      const borderPreview = document.querySelector(".borderPreview");
      console.log(borderPreview);
      borderPreview.style.borderTopLeftRadius = this.btlr;
      borderPreview.style.borderTopRightRadius = this.btrr;
      borderPreview.style.borderBottomLeftRadius = this.bblr;
      borderPreview.style.borderBottomRightRadius = this.bbrr;
    },
    clearRadius() {
      this.btlr = "0%";
      this.btrr = "0%";
      this.bblr = "0%";
      this.bbrr = "0%";
      this.changeRadius();
    },
    copyRadius() {
      const str = `border-radius: ${this.btlr} ${this.btrr} ${this.bbrr} ${this.bblr};`;
      console.log(str);
      //这波复制操作有点离谱，大概是先创建一个input，然后把值赋给input，然后把input添加到body里面，然后选中input，然后把input的值复制到剪切板，然后删除input，然后弹出复制成功的提示
      const input = document.createElement("input");
      input.value = str;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      navigator.clipboard.writeText(input.value);
      alert("复制成功");
      document.body.removeChild(input);

    },
  },
  onMounted() {
    this.changeRadius();
  },
}
</script>

<style lang="less" scoped>

div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    margin-top: 10vh;
    width: 300px;
    height: 300px;
    border-radius: 5px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .content input {
    width: 300px;
    height: 30px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
  }
  .btn{
    width: 40vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    button{
      width: 100px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    
    }
  }
}
</style>