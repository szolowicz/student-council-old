<template>
  <div :class="{ 'nav-active': isActive }">
    <header class="cd-header">
      <div class="nav-but-wrap">
        <div class="menu-icon hover-target" @click="openMenu">
          <span class="menu-icon__line menu-icon__line-left"></span>
          <span class="menu-icon__line"></span>
          <span
            class="menu-icon__line menu-icon__line_last menu-icon__line-right"
          ></span>
        </div>
      </div>
      <div class="nav">
        <div class="nav__content">
          <ul class="nav__list">
            <li class="nav__list-item">
              <nuxt-link :to="`/`" class="hover-target"
                >Strona główna</nuxt-link
              >
            </li>

            <li class="nav__list-item">
              <nuxt-link :to="`/team`" class="hover-target">Zespół</nuxt-link>
            </li>

            <li class="nav__list-item">
              <nuxt-link :to="`/projects`" class="hover-target"
                >Projekty</nuxt-link
              >
            </li>

            <li class="nav__list-item">
              <nuxt-link :to="`/contact`" class="hover-target"
                >Kontakt</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    const mobileAndTabletCheck = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (!mobileAndTabletCheck()) this.isActive = true;
  },
  methods: {
    openMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';

/* stylelint-disable */
$radius: 30px;

.cd-header {
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 1500px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 9999;
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 80px;
  grid-column-gap: 0;
  grid-row-gap: 0;
  pointer-events: none;
}

.nav-but-wrap {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  pointer-events: all;
  display: inline-flex;
  float: right;
  justify-content: center;
  height: 80px;
  width: 80px;
  transition: border-radius linear 0.8s, background-color 0.3s ease;
  border-bottom-left-radius: $radius;

  @media (min-width: 1500px) {
    border-bottom-right-radius: $radius;
  }
}

.nav-but-wrap::before {
  opacity: 0;
  content: '';
  width: 80px;
  height: 80px;
  border-bottom-left-radius: $radius;
  z-index: -10;
  position: absolute;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  transition: border-radius linear 0.8s, box-shadow 0.3s ease;

  @media (min-width: 1500px) {
    border-bottom-right-radius: $radius;
  }
}

.nav-but-wrap {
  background-color: white;
}

.nav-but-wrap::before {
  opacity: 1;
}

.menu-icon__line {
  background-color: black;
}

.menu-icon {
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  align-self: center;
  display: block;
}

.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: black;
  margin-bottom: 7px;
  cursor: pointer;
  -webkit-transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}

.menu-icon__line_last {
  margin-bottom: 0;
}

.menu-icon__line-left {
  width: 16.5px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.menu-icon__line-right {
  width: 16.5px;
  float: right;
  -webkit-transition: all 200ms linear;
  -moz-transition: all 200ms linear;
  -o-transition: all 200ms linear;
  -ms-transition: all 200ms linear;
  transition: all 200ms linear;
}

.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 30px;
}

.nav {
  position: fixed;
  z-index: 1;
  pointer-events: all;
}

.nav::before,
.nav::after {
  content: '';
  position: fixed;
  top: 10px;
  right: 10px;
  width: 0;
  height: 0;
  background-color: rgba(20, 21, 26, 0.6);
  border-bottom-left-radius: 200%;
  z-index: -1;
  transition: border-radius ease 0.8s,
    width cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    height cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
}

.nav::after {
  background-color: white;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  box-shadow: 6px 7px 28px 0 rgba(16, 16, 16, 0.3);
}

.nav::before {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.nav__content {
  position: fixed;
  visibility: hidden;
  top: 90px;
  right: 10px;
  width: 300px;
  text-align: left;
}

.nav__list {
  position: relative;
  padding: 0;
  margin: 0;
  z-index: 2;
}

.nav__list-item {
  position: relative;
  display: block;
  opacity: 0;
  text-align: left;
  color: #fff;
  overflow: hidden;
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: 2px;
  -webkit-transform: translate(30px, 0%);
  transform: translate(30px, 0%);
  transition: opacity 0.1s ease, transform 0.2s ease;
  transition-delay: 0.2s;
  margin-top: 7px;
  margin-bottom: 7px;
}

.nav__list-item a {
  position: relative;
  text-decoration: none;
  color: black;
  overflow: hidden;
  cursor: pointer;
  font-weight: 600;
  z-index: 2;
  height: 28px;
  padding-left: 40px;
  margin: 5px;
  display: inline-block;
  transition: all 200ms linear;
}

.nav__list-item a::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 5px;
  height: 0;
  opacity: 0;
  background: linear-gradient(288deg, $secondColor, $mainColor);
  z-index: 1;
  transition: all 200ms linear;
}

.nav__list-item a:hover::after {
  height: 100%;
  opacity: 1;
  top: 0;
}

.nav__list-item:not(.active-nav) a:hover {
  color: $mainColor;
  font-size: 23px;
  transition: color 100ms ease-in-out, font-size 100ms ease-in-out;
}

.nav__list-item.active-nav a {
  background: linear-gradient(288deg, $secondColor, $mainColor);
  background-clip: text;
  font-size: 25px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav__list-item.active-nav a::after {
  height: 100%;
  opacity: 1;
  top: 0;
}

.nav-active .nav__content {
  visibility: visible;
}

.nav-active .menu-icon__line {
  background-color: black;
  -webkit-transform: translate(0, 0) rotate(-45deg);
  transform: translate(0, 0) rotate(-45deg);
}

.nav-active .menu-icon__line-left {
  width: 15px;
  -webkit-transform: translate(2px, 4px) rotate(45deg);
  transform: translate(2px, 4px) rotate(45deg);
}

.nav-active .menu-icon__line-right {
  width: 15px;
  float: right;
  -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
  transform: translate(-3px, -3.5px) rotate(45deg);
}

.nav-active .menu-icon:hover .menu-icon__line-left,
.nav-active .menu-icon:hover .menu-icon__line-right {
  width: 15px;
}

.nav-active .nav {
  visibility: visible;
}

.nav-active .nav::before,
.nav-active .nav::after {
  width: 300px;
  height: 300px;
  border-radius: 15px;
}

.nav-active .nav::after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.nav-active .nav::before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.nav-active .nav__list-item {
  opacity: 1;
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-transition: opacity 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, color 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
}

.nav-active .nav__list-item:nth-child(0) {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.nav-active .nav__list-item:nth-child(1) {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.nav-active .nav__list-item:nth-child(2) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

.nav-active .nav__list-item:nth-child(3) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}

.nav-active .nav__list-item:nth-child(4) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}

.nav-active .nav__list-item:nth-child(5) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

.nav-active .nav__list-item:nth-child(6) {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.nav-active .nav__list-item:nth-child(7) {
  -webkit-transition-delay: 1.1s;
  transition-delay: 1.1s;
}

.nav-active .nav__list-item:nth-child(8) {
  -webkit-transition-delay: 1.2s;
  transition-delay: 1.2s;
}

.nav-active .nav__list-item:nth-child(9) {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
}

.nav-active .nav__list-item:nth-child(10) {
  -webkit-transition-delay: 1.4s;
  transition-delay: 1.4s;
}
</style>
