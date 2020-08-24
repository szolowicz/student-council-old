<template>
  <div>
    <NavigationMenu />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import './assets/scss/variables';

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

html {
  font-family: $mainFont;
  font-weight: 400;
  font-size: 15px;
  background-color: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}
</style>
