<template>
  <div class="search-card">
    <div class="card list-item">
      <!-- 城市百科 -->
      <div class="wiki-box">
        <a class="wiki-link" href="">
          <img src="https://pic3.zhimg.com/80/v2-5ec5157dd4d449502ddff275e3b51b26_qhd.jpg" alt="">
        </a>
        <div class="search-info">
          <div class="info-header">
            <h2><a href="">长沙</a></h2>
          </div>
          <div class="info-content">
            <span>简介：</span>
            <p>长沙，古称潭州，别名星城，是湖南省省会，长江中游地区重要的中心城市，全国“两型社会”综合配套改革试验区，全国性综合交通枢纽。截止2017年，下辖9个区（市）县和5个国家级开发区、1个国家级新区——湘江 <a>更多</a> </p>
          </div>
        </div>
      </div>
    </div>  
      <div class="plans-box">
        <question-card>
        </question-card>
      </div>
  </div>

</template>

<script>
import QuestionCard from '@/components/question-card'
export default {
  components:{
    QuestionCard
  }
}
</script>

<style lang="scss" scoped>
  .search-card{
    margin-bottom: 12px;
    .list-item{
      padding: 17px;
      .wiki-box{
        display: flex;
        .wiki-link{
          display: inline-block;
          margin-right:15px;
          border-radius: 5px;
          @include wh(100px,100px);
          cursor: pointer;
          img{
            @include wh(100%,100%);
          }
        }
        .search-info{
          flex: 1 1;
          .info-header{
            margin-bottom: 10px;
          }
          .info-content{
            max-height: 66px;
            font-size: 15px;
            &>p{
              display: inline;
            }
          }
        }
      }
    }
  }

</style>