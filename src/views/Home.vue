<template>
  <div class="home">
    <LandScape></LandScape>
    <SideHeader></SideHeader>
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
import CLandScape from '@/components/Contents/CLandScape.vue'
import CPortlate from '@/components/Contents/CPortlate.vue'
import CSnap from '@/components/Contents/CSnap.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LandScape,
    SideHeader,
    CLandScape,
    CPortlate,
    CSnap,
  }
}
</script>
