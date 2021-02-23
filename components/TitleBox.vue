<template>
  <div class="title-box">
    <h1 class="title-box__text">
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/sass/variables';

.title-box {
  height: 250px;
  background: linear-gradient(270deg, $mainColor, $secondColor);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  margin-bottom: 10px;

  @media (max-width: 600px) {
    height: 150px;
  }

  &__text {
    width: 100%;
    max-width: 1400px;
    font-size: calc(38px + 2vw);
    text-transform: uppercase;
    vertical-align: text-bottom;
    margin: 0 50px 10px;
    font-weight: 600;
    color: #f5f5f5;
  }
}
</style>
