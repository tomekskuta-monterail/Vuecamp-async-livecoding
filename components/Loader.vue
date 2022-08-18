<template>
  <img class="loader" src="/vue-logo.png" alt="VueJS logo">
</template>

<style>
.loader {
  width: 7rem;
  animation: rotate infinite linear 1.5s;
  margin: 0 auto;
  display: block;
}

@keyframes rotate {
  0% {
    transform: rotate(0) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.6);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>