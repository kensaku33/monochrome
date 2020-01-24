<template>
  <div id="side-header">
    <div id="vertical-box" v-bind:class='{hide:isActive}'>
      <a class="menu-trigger" href="#" v-on:click='isActive=!isActive' v-bind:class='{active:isActive}'>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <p class="vertical-text">ABOUT ME</p>
    </div>
    <div id="about" v-bind:class='{active:isActive}'>
      <div id="abotor"></div>
      <ul id="menu">
        <li class="list">profile</li>
        <li class="list">works</li>
        <li class="list">skills</li>
        <li class="list">contact</li>
        <ul id="social" v-bind:class='{active:isActive}'>
          <li class="sns"><i class="fab fa-twitter"></i></li>
          <li class="sns"><i class="fab fa-facebook"></i></li>
          <li class="sns"><i class="fab fa-instagram"></i></li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive: false
    }
  }
}
</script>



<style scoped>
  li{
    list-style: none;
  }
  #vertical-box{
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60px;
    background-color: white;
    text-align: center;
    z-index: 0;
  }
  #vertical-box.hide{
    width: 0;
    transition: .5s;
  }
  /* ------------------------------------------------------バンバーガー部分 */
  .menu-trigger,
  .menu-trigger span {
    display: inline-block;
    transition: all .4s;
    box-sizing: border-box;
    top: 20px;
  }
  .menu-trigger {
    position: relative;
    width: 30px;
    height: 24px;
  }
  .menu-trigger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(0, 0, 0);
    border-radius: 2px;
  }
  .menu-trigger span:nth-of-type(1) {
    top: 0;
  }
  .menu-trigger span:nth-of-type(2) {
    top: 10px;
  }
  .menu-trigger span:nth-of-type(3) {
    bottom: 0;
  }
  /* -------------------------------------------------------active付与で使える */
  .menu-trigger.active span:nth-of-type(1) {
  -webkit-transform: translateY(10px) rotate(-45deg);
  transform: translateY(10px) rotate(-45deg);
  background-color: white;
  
  }
  .menu-trigger.active span:nth-of-type(2) {
    opacity: 0;
  }
  .menu-trigger.active span:nth-of-type(3) {
    -webkit-transform: translateY(-10px) rotate(45deg);
    transform: translateY(-10px) rotate(45deg);
  }
/* -------------------------------------------------------------- */
  .vertical-text{
    margin: 100px auto 0 auto;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    transform: rotate(180deg);
  }
  #about{
    /* display: none; */
    position: absolute;
    top: 0;
    right: 0;
    width: 0vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.564);
    text-align: right;
    transition: .5s;
  }
  #about.active{
    width: 40vw;
  }
  #abotor{
    height: 210px;
    width: 210px;
    border-radius: 50%;
    background-color: white;
    margin: 100px auto 0 auto;
  }
  #menu{
    color: white;
    font-size: 1.4rem;
    margin: 100px 100px 0 0;
  }
  .list{
    margin-bottom: 30px;
    cursor: pointer;
    padding-bottom: 2px;
  }

  #social{
    display: none;
  }
  #social.active{
    display: block;
    position: absolute;
    bottom: 40px;
    right: 100px;
  }
  #social.active > *{
    color: white;
    font-size: 1.6rem;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
  }
  
</style>