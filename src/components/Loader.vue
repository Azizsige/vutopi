<template>
  <div class="wrapper-loader mx-auto">
    <div class="loader" id="loader-7"></div>
    <p class="text-center text-white">Loading . . .</p>
  </div>
</template>
<script setup></script>
<style>
.wrapper-loader {
  width: max-content;
}
.loader {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
}
#loader-7 {
  -webkit-perspective: 120px;
  -moz-perspective: 120px;
  -ms-perspective: 120px;
  perspective: 120px;
}

#loader-7:before {
  content: "";
  position: absolute;
  left: 25px;
  top: 25px;
  width: 50px;
  height: 50px;
  background-color: white;
  animation: flip 1s infinite;
}

@keyframes flip {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
</style>
