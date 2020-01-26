<template>
  <div id="CLandScape">
    <div id="landscape-screen">
      <div class="screen-inner" id="screen-landscape">
        <p class="inner-text" id="text-landscape">
          LAND SCAPE
        </p>
      </div>
    </div>
    <div class="vertical-box" id="vartical-landscape">
      <p class="contents">landscape</p>
    </div>
  </div>
</template>

<script>
$(function(){
  $('#vartical-landscape').on('mouseover',function(){
    $('#screen-landscape').css({
      height: '100%',
      transition: '.5s',
    })
    $('#text-landscape').css({
      opacity: '1',
      transition: '2s',
    });
  });
  $('#vartical-landscape').on('mouseleave',function(){
    $('#screen-landscape').css({
      height: '0%',
      transition: '.5s',
    })
    $('#text-landscape').css({
      opacity: '0',
      transition: '.2s',
    });
  });
})
</script>

<style scoped>
  #landscape-screen{
    /* display: none; */
  }
  .screen-inner{
    position: absolute;
    top: 0;
    left: 0;
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
  #vartical-landscape{
    left: 100px;
    height: 500px;
    width: 50px;
  }
  #vartical-landscape:hover{
    height: 600px;
    color:white;
    transition: .5s;
    background-image: url("https://lh3.googleusercontent.com/DT-fLZCKSgats7txUKNBmSV4GiFNpqhjLvUXOgelVzeqpCd5DuiPFSru8RQHvmOu3T8fw3ahLU6gDhasWxARqF1jrSVmq_W_MnyfA_TcNBJ91BCsRiCTbsTHh_n5ibnYY74OEyWunE8=w2400");
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>