<template>
  <div id="app">
    <!-- <hello></hello> -->
    <div class="nav">
         <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
     <div class="main">
     <!-- 路由匹配到的组件将渲染在这里 -->
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    // Hello
  }
}
</script>

<style>
body{
  background-color: #f8f8ff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}


.nav{
  position: fixed;
    width: 108px;
    left: 40px;
}
.nav ul{
list-style: none;
 margin: 0;
    padding: 0;
}
.nav ul li{
  width: 108px;
  height: 48px;
  line-height: 48px;
border:1px solid #dadada;
text-align: center;
}
.nav ul li a{
  text-decoration: none;
}

.main{
    height: 400px;
    margin-left: 180px;
    margin-right: 25px;
}

</style>
