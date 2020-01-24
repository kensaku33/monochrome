<template>
  <div id="CLandScape">
    <div class="vertical-box" id="landscape">
      <p class="contents">landscape</p>
    </div>
  </div>
</template>

<style scoped>
  #landscape{
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    height: 500px;
    width: 50px;
    text-align: center;
    background-color: #181818;
    position: absolute;
    bottom: 0;
    left: 100px;
    transition: .5s;
    color: rgba(0, 0, 0, 0);
  }
  #landscape:hover{
    height: 600px;
    color:white;
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>