<template>
  <div class="default-template">
    <slot />
  </div>
</template>

<style>
.default-template {
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 2.4rem;
  box-sizing: border-box;
}

.default-template__next-link {
  position: absolute;
  bottom: 2.4rem;
  right: 2.4rem;
  background-color: #49DD82;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  color: white;
  text-decoration: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
}
</style>