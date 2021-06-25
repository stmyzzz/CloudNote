<template>
  <div class="follow-card">
    <div class="card-img">
      <img width="60" height="60" src="https://pic4.zhimg.com/v2-48bf7cb081542c20e8a4f732b426e84b_im.jpg" alt="">
    </div>
    <div class="card-content">
      <h2 class="content-head">stmyzzz</h2>
      <div class="content-desc">
        <div>
          <div class="desc1">喜欢去旅游</div>
          <div class="desc-status">
            <span class="status-item">28 攻略</span>
            <span class="status-item1">4000关注者</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-extra">
      <button>关注他</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .follow-card{
    padding: 16px 20px;
    display: flex;
    .card-img{
      margin-right: 10px;
    }
    .card-content{
      flex: 1;
      .content-head{
        margin-bottom: 5px;
        color: #8590a6;
      }
      .content-desc{
        .desc-status{
          margin-top: 5px;
          color: #8590a6;
          .status-item1::before{
            content:'*';
            margin:0 5px
          }
        }
      }
    }
    .card-extra{
      align-self: center;
      button{
        min-width: 90px;
        border-color: #8590a6;
        background-color: #8590a6;
        padding: 0 16px;
        line-height: 32px;
        @include sc(14px,#fff)
      }
    }
  }
</style>        