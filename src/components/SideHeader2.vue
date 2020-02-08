<template>
  <div id="side-header2">

    <transition name="right" appear>
      <div id="vertical-box" v-bind:class='{active:isActive}'>
        <a class="menu-trigger" href="#" v-on:click='isActive=!isActive' v-bind:class='{active:isActive}'>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <p class="vertical-text" v-bind:class='{active:isActive}'>ABOUT ME</p>

        <div id="about" v-bind:class='{active:isActive}'>
          <div id="abotor">
            <img class="abotor" src="https://lh3.googleusercontent.com/_9XoqeAV2iEsxtEm4ofIrAdTMwYHJHemxW13Y29R9oEqxWPV2G0tWuDVNCSzT05_tE-vl0fQf9RKRHbMK6kvmEc_tXfx2s7syV-DQ5aqJ1hVmCxSrpKaZz-i4o8IN_GAQ0CiZ8ezw-c=w2400" alt="本人写真">
          </div>

          <transition name="left">
            <div class="profile-box" v-if="profile">
              <h3 class="profile-title">profile</h3>
              <p>ヤマゾエケンサク</p>
              <br>
              <p>徳島県出身</p><br>
              <span class="profile-inner">
                <p>スノーボードとか釣りとか<br>アウトドアなものが好き。</p>
                <p>海外で旅していた時に<br>友人からもらった写真に感銘を受けて写真を始める。</p>
              </span>
              <span class="close" @click="profile=!profile">close</span>
            </div>
          </transition>

          <transition name="left">
            <div class="works-box" v-if="works">
              <h3 class="works-title">works</h3>
              <p>写真撮影を中心にいろいろやってます</p>
              <p>写真を扱った制作物が得意です</p>
              <br>
              <span class="works-inner">
                <p>写真 / 動画撮影</p>
                <p>写真 / 動画編集</p>
                <p>広告、ポスター作成</p>
              </span>
              <span class="close" @click="works=!works">close</span>
            </div>
          </transition>

          <transition name="left">
            <div class="skills-box" v-if="skills">
              <h3 class="skills-title">skills</h3>
              <!-- <br> -->
              <span class="skills-inner">
                <p>ツール</p>
                <p>illustrator / photoshop</p>
                <p>premiere / lightroom</p>
                <p>XD</p>
                <br>
                <p>エンジニアスキル</p>
                <p>HTML / CSS</p>
                <p>jQuery / vue.js</p>
                <p>Ruby on Rails</p>
                <p>Git / AWS</p>
              </span>
              <span class="close" @click="skills=!skills">close</span>
            </div>
          </transition>

          <transition name="right">
            <ul id="menu" v-if="!profile && !works && !skills">
              <li class="list" id="profile" @click="profile=!profile">profile</li>
              <li class="list" id="works" @click="works=!works">works</li>
              <li class="list" id="skills" @click="skills=!skills">skills</li>
              <!-- <li class="list" id="contact">contact</li> -->
            </ul>
          </transition>

            <ul id="social" v-bind:class='{active:isActive}'>
              <li class="sns"><a :href="twitter"><i class="fab fa-twitter"></i></a></li>
              <li class="sns"><a :href="facebook"><i class="fab fa-facebook"></i></a></li>
              <li class="sns"><a :href="instagram"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      twitter: 'https://twitter.com/UBER10191097',
      facebook: 'https://www.facebook.com/yamazoe.kensaku',
      instagram: 'https://www.instagram.com/yamazoe88/',
      isActive: false,
      profile: false,
      works: false,
      skills: false,
    }
  },
}
</script>



<style scoped>
.right-enter-active{
  animation: right-in 1s;
}
.right-leave-active{
  animation: right-in 0.5s reverse;
}
@keyframes right-in {
  0%{
    opacity: 0;
    transform: translateX(200px);
  }
  30%{
    opacity: 0;
    transform: translateX(160px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}

.left-enter-active{
  animation: left-in 1s;
}
.left-leave-active{
  animation: left-in 0.5s reverse;
}
@keyframes left-in {
  0%{
    opacity: 0;
    transform: translateX(-100px);
  }
  30%{
    opacity: 0;
    transform: translateX(-60px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}

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
    z-index: 0;
    transition: .5s;
  }
  #vertical-box.active{
    width: 40vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.564);
    text-align: right;
    transition: .5s;
  }
  .profile-box,
  .works-box,
  .skills-box{
    position: absolute;
    width: 26vw;
    font-size: 1rem;
    text-align: center;
    line-height: 1.8rem;
    top: 300px;
    right: 0;
    left: 0;
    margin: auto;
    color: white;
    font-weight: 100;
  }
  .profile-title,
  .works-title,
  .skills-title{
    font-size: 1.4rem;
    font-weight: 500;
    margin: 50px 0; 
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
    position:absolute;
    top: 30px;
    left: 15px;
    height: 30px;
    width: 30px;
  }
  .menu-trigger span {
    position: absolute;
    left: 0;
    width: 30px;
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
  -webkit-transform:  translateY(10px) rotate(-45deg);
  transform: translateY(10px) rotate(-45deg);
  background-color: white;
  }
  .menu-trigger.active span:nth-of-type(2) {
    opacity: 0;
  }
  .menu-trigger.active span:nth-of-type(3) {
    -webkit-transform: translateY(-10px) rotate(45deg);
    transform: translateY(-10px) rotate(45deg);
    background-color: white;
  }
/* -------------------------------------------------------------- */
  .vertical-text{
    position: absolute;
    left: 22px;
    margin: 100px auto 0 auto;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    transform: rotate(180deg);
    transition: .5s;
  }
  .vertical-text.active{
    opacity: 0;
  }

  #about{
    display: none;
  }
  #about.active{
    display: block;
    transition: .5s;
  }
  #abotor{
    /* background-image:url("https://lh3.googleusercontent.com/_9XoqeAV2iEsxtEm4ofIrAdTMwYHJHemxW13Y29R9oEqxWPV2G0tWuDVNCSzT05_tE-vl0fQf9RKRHbMK6kvmEc_tXfx2s7syV-DQ5aqJ1hVmCxSrpKaZz-i4o8IN_GAQ0CiZ8ezw-c=w2400"); */
    margin: 100px auto 0 auto;
  }
  .abotor{
    position:absolute;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    height: 210px;
    width: 210px;
    object-fit: cover;
  }
  #menu{
    color: white;
    font-size: 1.4rem;
    padding: 100px 100px 0 0;
    position: relative;
    right: 3%;
    overflow: hidden;
    position: absolute;
    top: 300px;
  }
  #menu.none{
    transition: .5s;
    margin-right: -300px;
    /* display: none; */
  }
  .list{
    /* position: absolute; */
    margin: 0px 0 30px 0;
    cursor: pointer;
    padding-bottom: 2px;
    transition: .5s;
    /* right: 30px; */
  }
  .list:hover{
    opacity: .5;
  }
  #social{
    display: none;
  }
  #social a{
    color: white;
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
    transition: .5s;
  }
  #social.active > *:hover{
    opacity: .5;
  }
  .close{
    position: absolute;
    font-size: 1rem;
    border-bottom: 1px solid white;
    left: 0;
    right: 0;
    bottom: -60px;
    margin: auto;
    cursor: pointer;
  }
</style>