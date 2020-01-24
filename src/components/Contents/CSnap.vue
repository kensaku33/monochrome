<template>
  <div id="CSnap">
    <div class="vertical-box" id="snap">
      <p class="contents">snap</p>
    </div>
  </div>
</template>

<style scoped>
  #snap{
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    height: 440px;
    width: 50px;
    text-align: center;
    background-color: #181818;
    position: absolute;
    bottom: 0;
    left: 300px;
    transition: .5s;
    color: rgba(0, 0, 0, 0);
  }
  #snap:hover{
    height: 600px;
    color: white;
  }
  .contents{
    margin-right: 15px;
    transition: .5s;
  }
</style>