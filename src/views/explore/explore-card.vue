<template>
  <div class="explore-card">
    <a class="explore-banner" href="#">
      <img src="https://pic2.zhimg.com/100/v2-2fe7b616b67a92a99b1b8dec412da385_hd.png" alt="">
    </a>
    <div class="explore-header">
      <div class="header-info">
        <a href="">长沙</a>
        <div class="info-detail">
          <span>共38篇攻略</span>
        </div>
      </div>
    </div>
    <div class="explore-list">
      <ul>
        <li ><a href="">长沙有好多好玩的地方！！！</a></li>
        <li ><a href="">长沙有好多好玩的地方！！！</a></li>
        <li ><a href="">长沙有好多好玩的地方！！！</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
  .explore-card{
    width: 490px;
    background: #fff;
    .explore-banner{
      display: block;
      height: 200px;
      img{
        @include wh(100%,100%)
      }
    }
    .explore-header{
      display: flex;
      padding: 20px 0;
      margin: 0px 24px;
      border-bottom: 1px solid #dddcdc;
      .header-info{
        a{
          font-size: 20px;
          font-weight: bold;
        }
        .info-detail{
          @include sc(10px,#666);
          margin-top: 5px;
        }
      }
    }
    .explore-list{
      margin: 25px;
      ul>li{
        @include sc(12px,#666);
        margin-top: 10px;
      }
    }
  }
</style>