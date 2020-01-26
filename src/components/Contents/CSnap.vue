<template>
  <div id="CSnap">
    <div id="snap-screen">
      <div class="screen-inner" id="screen-snap">
        <p class="inner-text" id="text-snap">
          SNAP
        </p>
      </div>
    </div>
    <div class="vertical-box" id="vartical-snap">
      <p class="contents">snap</p>
    </div>
  </div>
</template>

<script>
$(function(){
  $('#vartical-snap').on('mouseover',function(){
    $('#screen-snap').css({
      height: '100%',
      transition: '.5s',
    })
    $('#text-snap').css({
      opacity: '1',
      transition: '2s',
      display: 'block',
    });
  });
  $('#vartical-snap').on('mouseleave',function(){
    $('#screen-snap').css({
      height: '0%',
      transition: '.5s',
    })
    $('#text-snap').css({
      opacity: '0',
      transition: '.2s',
      display: 'none',
    });
  });
})
</script>

<style scoped>
  #snap{
    /* display: none; */
  }
  .screen-inner{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .inner-text{
    color: rgb(171, 171, 171);
    margin: 20vh 20vw 0 0;
    text-align: right;
    font-size: 180px;
    font-family: 'Six Caps', sans-serif;
    opacity: 0;
    display: none;
  }
  .vertical-box{
    position: absolute;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    text-align: center;
    background-color: #181818;
    bottom: 0;
    transition: .5s;
    color: rgba(0, 0, 0, 0);
    z-index: 5;
  }

  #vartical-snap{
    height: 440px;
    width: 50px;
    left: 300px;
  }
  #vartical-snap:hover{
    height: 600px;
    color: white;
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>