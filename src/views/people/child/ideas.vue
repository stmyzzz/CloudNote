<template>
<div class="ideas">
  <list-header title="他的想法"></list-header>
    <div class="card">
    <slot name="dynmic">
    </slot>
    <author-info></author-info>
    <div class="card-content">
      <div class="content-right">
        <span class="content-span">特别想去长沙。。</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="att-btn"> <span>*</span>点赞</button>
      <span class="comment">50条评论</span>
      <span class="share">分享</span>
      <span class="collect">收藏</span>
      <span class="time">2020-10-24</span>
    </div>
  </div>
</div>
</template>

<script>
import AuthorInfo from '@/components/author-info'
import ListHeader from '@/components/list-header'
export default {
  components:{
    AuthorInfo,
    ListHeader
  }
}
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    padding: 17px;
    border-top: 1px solid #f5f5f5;
    background: #fff;
    .card-title{
      h1{
        font-size: 17px;
      }
    }
    .card-content{
      display: flex;
      margin-top: 10px;
      .content-right{ 
        overflow: hidden;
        .content-span{
          font-size: 15px;
          font-weight:600;
        }
        .all-btn{
          color: $theme-color;
        }
      }
    }
    .card-footer{
        display: flex;
        align-items: center;
        margin-top: 12px;
        .att-btn{
        line-height: 28px;
        background: #ade4fd;
        border-radius: 3px;
        padding: 0px 13px;
        display: block;
        }
        .comment,.share,.collect,.time{
          margin-left: 15px;
          font-size: 15px;
        }
    }
    .card-name{
      padding: 0px 0px 8px 0;
      @include sc(15px,#666);
    }
  }

</style>