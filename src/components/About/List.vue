<template>
  <div id="list">
    <ul id="menu">
        <li class="list">profile</li>
        <li class="list">works</li>
        <li class="list">skills</li>
        <li class="list">contact</li>
      </ul>
  </div>
</template>

<style lang="">
  #menu{
    color: white;
    font-size: 1.4rem;
    margin: 100px 100px 0 0;
  }
  .list{
    margin-bottom: 30px;
    cursor: pointer;
    padding-bottom: 2px;
    display: block;

  }
  .list:hover{
    border-bottom: 2px solid white;
  }
</style>