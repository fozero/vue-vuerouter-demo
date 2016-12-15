<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="article in articles">
        
          <div class="m-img inl-block"><img v-bind:src="article.images.small"/></div>
       <div class="m-content inl-block">
          <div>{{article.title}}</div>
        <div>年份：{{article.year}}</div>
         <div>类型：{{article.subtype}}</div>
       </div>
      </li>
    </ul>
  </div>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据

export default {
  name: 'home',
  data () {
    return {
      msg: '电影列表',
      articles:[]
    }
  },
  created:function(){  //这里mounted和created生命周期函数区别
     this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
        console.log(response);
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{
  
}
.m-content{
margin-left: 20px;
}
</style>
