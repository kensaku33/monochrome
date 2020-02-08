<template>
  <div class="home">

    <LandScape></LandScape>
    <SideHeader2></SideHeader2>

    <transition name="bottom" appear>
      <CLandScape></CLandScape>
    </transition>

    <transition name="bottom" appear>
      <CPortlate></CPortlate>
    </transition>

    <transition name="bottom" appear>
      <CSnap></CSnap>
    </transition>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LandScape from '@/components/Background/LandScape.vue'
import SideHeader2 from '@/components/SideHeader2.vue'
import CLandScape from '@/components/Contents/CLandScape.vue'
import CPortlate from '@/components/Contents/CPortlate.vue'
import CSnap from '@/components/Contents/CSnap.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LandScape,
    SideHeader2,
    CLandScape,
    CPortlate,
    CSnap,
  }
}
</script>

<style scoped>
  .bottom-enter-active{
    animation: bottom 1s;
  }
  .bottom-leave-active{
    animation: bottom 1s reverse;
  }
  @keyframes bottom{
    0%{
      opacity: 0;
      transform: translateY(300px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>