<template>
  <div id="CPortlate">
    <div class="vertical-box" id="portlate">
      <p class="contents">portlate</p>
    </div>
  </div>
</template>

<style scoped>
  #portlate{
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    height: 400px;
    width: 50px;
    text-align: center;
    background-color: #181818;
    position: absolute;
    bottom: 0;
    left: 200px;
    transition: .5s;
    color: rgba(0, 0, 0, 0);
  }
  #portlate:hover{
    height: 600px;
    color: white;
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>