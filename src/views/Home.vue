<template>
  <div class="home">
    <LandScape></LandScape>
    <SideHeader></SideHeader>
    <SideHeader2></SideHeader2>
    <CLandScape></CLandScape>
    <CPortlate></CPortlate>
    <CSnap></CSnap>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LandScape from '@/components/Background/LandScape.vue'
import SideHeader from '@/components/SideHeader.vue'
import SideHeader2 from '@/components/SideHeader2.vue'
import CLandScape from '@/components/Contents/CLandScape.vue'
import CPortlate from '@/components/Contents/CPortlate.vue'
import CSnap from '@/components/Contents/CSnap.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LandScape,
    SideHeader,
    SideHeader2,
    CLandScape,
    CPortlate,
    CSnap,
  }
}
</script>
