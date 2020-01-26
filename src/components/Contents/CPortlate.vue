<template>
  <div id="CPortlate">
    <div id="portlate-screen">
      <div class="screen-inner" id="screen-portlate">
        <p class="inner-text" id="text-portlate">
          PORTLATE
        </p>
      </div>
    </div>
    <div class="vertical-box" id="vartical-portlate">
      <p class="contents">portlate</p>
    </div>
  </div>
</template>

<script>
$(function(){
  $('#vartical-portlate').on('mouseover',function(){
    $('#screen-portlate').css({
      width: '100%',
      transition: '.5s',
    })
    $('#text-portlate').css({
      opacity: '1',
      transition: '2s',
    });
  });
  $('#vartical-portlate').on('mouseleave',function(){
    $('#screen-portlate').css({
      width: '0%',
      transition: '.5s',
    })
    $('#text-portlate').css({
      opacity: '0',
      transition: '.2s',
    });
  });
})
</script>

<style scoped>
  #portlate-screen{
    /* display: none; */
  }
  .screen-inner{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .inner-text{
    color: rgb(171, 171, 171);
    margin: 20vh 20vw 0 0;
    text-align: right;
    font-size: 180px;
    font-family: 'Six Caps', sans-serif;
    opacity: 0;
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
  #vartical-portlate{
    left: 200px;
    height: 400px;
    width: 50px;
  }
  #vartical-portlate:hover{
    height: 600px;
    color: white;
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>