<template>
  <div class="info-box">
    <div class="info-box-header">
      <h2><slot name="header"></slot></h2>

      <div class="info-box-content"><slot name="content"></slot></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/variables';

.info-box {
  margin: 40px auto;
  width: 80vw;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 600px) {
    width: 95vw;
  }

  &-header {
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from($mainColor),
      to($secondColor)
    );
    background: linear-gradient(270deg, $mainColor, $secondColor);
    color: white;
    width: 100%;
    padding: 10px;
  }

  &-content {
    font-size: 16px;
    padding: 20px;
  }
}
</style>
