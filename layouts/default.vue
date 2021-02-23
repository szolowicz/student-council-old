<template>
  <div>
    <NavigationMenu />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import './assets/sass/variables';

body {
  font-family: $mainFont;
  font-weight: 400;
  font-size: 15px;
  background-color: var(--backgroundColor-primary);
  color: var(--textColor);
}

::-webkit-scrollbar {
  width: 12px;

  &-thumb {
    background-color: darken($color: $mainColor, $amount: 10);
    border-radius: 15px;
  }

  &-track {
    background: darken($color: $secondColor, $amount: 20);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: var(--textColor);
  transition-duration: 0.5s;

  &:hover {
    color: $secondColor;
  }
}
</style>
