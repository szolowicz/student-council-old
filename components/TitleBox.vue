<template>
  <div class="title_box">
    <h1 class="title_box_text">
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/variables';

.title_box {
  height: 250px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from($mainColor),
    to($secondColor)
  );
  background: linear-gradient(270deg, $mainColor, $secondColor);
  display: -webkit-box;
  display: flex;
  -webkit-box-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  margin-bottom: 10px;
}

.title_box_text {
  width: 100%;
  max-width: 1400px;
  font-size: calc(38px + 2vw);
  text-transform: uppercase;
  vertical-align: text-bottom;
  margin: 0 50px 10px;
  font-weight: 600;
  color: #f5f5f5;
  -webkit-animation: show-fromleft 0.6s ease-in-out;
  animation: show-fromleft 0.6s ease-in-out;
}
</style>
