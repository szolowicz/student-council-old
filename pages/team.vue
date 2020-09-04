<template>
  <div>
    <TitleBox v-if="!isSelected">Zespół</TitleBox>

    <InfoBox v-if="!isSelected">
      <template #header>
        SAMORZĄD CIĘ POTRZEBUJE!
      </template>

      <template #content>
        Szukamy osób, które są zainteresowane uczestnictwem w samorządzie
        szkolnym. <br />
        Chcesz zaangażować się bardziej w życie Twojej szkoły? Masz ciekawe
        pomysły? Jesteś pełen energii do pozytywnej i produktywnej pracy? <br />
        Zgłoś się do opiekuna samorządu, Pani Anny Szymkowiak, sala 15.
      </template>
    </InfoBox>

    <div v-if="error">{{ error }}</div>
    <div
      v-else-if="response.allTeamMembers"
      id="app"
      :class="[
        'container',
        isSelected ? 'container-selected' : '',
        isReady ? 'container-ready' : ''
      ]"
    >
      <div class="team-container">
        <div class="person-list">
          <div
            v-for="(person, index) in response.allTeamMembers"
            :key="index"
            class="person"
            @click="selectPerson(index, $event)"
          >
            <img
              class="person-img"
              :src="person.photo.url + '?w=400&h=300'"
              :alt="person.name"
            />

            <div class="person-details">
              <h2 class="person-title">{{ person.name }}</h2>

              <p class="person-desc">{{ person.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="team-detail">
        <div v-if="isOk" class="team-detail-inner">
          <div
            class="team-detail-left"
            :style="`background-image:url(${selectedPersonData.photo.url}?w=400&h=300)`"
          >
            <div class="team-detail-photo">
              <img
                :src="selectedPersonData.photo.url + '?w=400&h=300'"
                :alt="selectedPersonData.name"
              />
            </div>
          </div>

          <div class="team-detail-right">
            <div class="team-detail-bio">
              <div class="team-detail-header">
                <h2 class="person-title">{{ selectedPersonData.name }}</h2>

                <p class="person-desc">{{ selectedPersonData.title }}</p>
              </div>

              <div class="team-detail-bio-content">
                {{ selectedPersonData.bio }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '../datocms';

const ALL_MEMBERS_QUERY = `
{
  allTeamMembers(orderBy: _createdAt_ASC) {
    name
    title
    bio
    photo {
      url
    }
  }
}
`;

export default {
  data() {
    return {
      title: 'Zespół - %s',
      response: '',
      error: null,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: '',
        title: null,
        photo: null
      }
    };
  },
  async mounted() {
    try {
      this.response = await request({
        query: ALL_MEMBERS_QUERY
      });
    } catch (e) {
      this.error = e;
    }
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className === 'person-details'
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add('person-selected');
        this.selectedPerson.setAttribute(
          'style',
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.response.allTeamMembers[index];
        this.title = `${this.selectedPersonData.name} - Zespół - %s`;
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson.offsetWidth}px;height:${this.selectedPerson.offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this.selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute('style', this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
        this.title = 'Zespół - %s';
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add('person-back');
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute('style', '');
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove('person-back', 'person-selected');
        this.isOk = false;
      }, 400);
    }
  },
  head() {
    return {
      titleTemplate: this.title
    };
  }
};
</script>

<style lang="scss" scoped>
/* stylelint-disable */

@import './assets/scss/variables';

.container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 70vh;
  flex-wrap: wrap;
}

.team-container {
  padding: 10px 30px;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  height: auto;

  div {
    line-height: 0;
  }

  h2,
  p {
    line-height: 1.15;
  }
}

.person {
  width: calc(34% - 30px);
  cursor: pointer;
  overflow: hidden;
  transition: 0.45s;
  position: relative;
  &-details {
    display: none;
    box-sizing: border-box;
    position: absolute;
    text-align: center;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
    background-color: rgba(#282828, 0.8);

    h2,
    p {
      position: relative;
      top: 40%;
    }
  }

  &-img {
    width: 100%;
  }

  &-title {
    color: white;
    font-size: 2em;
  }

  &-desc {
    color: white;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 2px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    &:hover {
      .person {
        opacity: 0.6;
      }
    }
  }

  &:hover {
    opacity: 1 !important;

    .person-details {
      display: block;
    }
  }

  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: $mainColor;
    content: '';
    height: 0px;
    transition: 0.45s;
  }

  &:after {
    content: '<';
    font-size: 36px;
    color: black;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    text-align: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    left: 0;
    flex-direction: column;
  }
}

.container-selected {
  .person {
    opacity: 0 !important;
    pointer-events: none;
  }

  .person-list .person-selected {
    opacity: 1 !important;

    &:before {
      height: 100%;
    }

    .person-details {
      margin-top: -40px;
      opacity: 0;
    }
  }
}

.team-detail {
  position: absolute;
  width: calc(100% - 100px);
  right: 80px;
  top: 0;
  height: 100%;
  color: black;
  transition: 0.15s;
  opacity: 0;
  visibility: hidden;
  box-sizing: border-box;

  &-bio {
    &-content {
      margin-bottom: 15px;
      line-height: 25px;
      font-size: 1.5em;
    }

    @media (max-width: 360px) {
      &-content {
        text-align: center;
      }
    }
  }

  &-header {
    margin-bottom: 30px;
  }

  &-inner {
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &-left {
    position: relative;
    width: 650px;
    min-height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &:before {
      width: 100%;
      height: 100%;
      content: '';
      background: rgba(#282828, 0.8);
      position: absolute;
      right: 0;
      top: 0;
    }

    &:after {
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(
        to right,
        rgba(40, 40, 40, 0) 9%,
        rgba(40, 40, 40, 0) 10%,
        rgba(40, 40, 40, 0) 38%,
        rgba(40, 40, 40, 1) 92%,
        rgba(40, 40, 40, 1) 100%
      );
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  &-photo {
    position: relative;
    text-align: center;
    z-index: 999;
    width: 100%;
    font-size: 0px;

    img {
      max-width: 100%;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
    }
  }

  &-right {
    box-sizing: border-box;
    width: calc(98% - 650px);
    margin-left: 2%;
    min-height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10%;
    position: relative;
    right: 0;
    flex-wrap: wrap;

    .person-title {
      font-size: 3em;
      color: black;
    }

    .person-desc {
      color: black;
      font-size: 1em;
    }
  }

  @media (max-width: 360px) {
    &-right {
      margin-left: 5px;
    }
  }
}

.container-ready {
  .team-detail {
    transition: 0.45s ease 0.3s;
    opacity: 1;
    right: 0;
    visibility: visible;

    img {
      width: 75%;
    }
  }

  .team-container {
    height: 0px;
    overflow: hidden;
  }

  .person-selected {
    left: 0px !important;
    top: 0px !important;
    z-index: 99;
    height: 100% !important;
    width: 100px !important;
    pointer-events: auto;

    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
}

.person-back {
  &:before {
    height: 0px !important;
  }

  .person-details {
    margin-top: -15px !important;
    transition-delay: 0.35s;
    opacity: 1 !important;
  }
}

@media (max-width: 1200px) {
  .team-detail-left {
    width: 400px;
    padding: 0 40px;
    box-sizing: border-box;
  }

  .team-detail-right {
    padding-right: 0;
    width: calc(100% - 440px);
  }

  .person .person-title {
    font-size: 1.7em;
  }

  .person-details {
    padding: 0 10px;
  }
}

@media (max-width: 970px) {
  .team-detail-left {
    width: 100%;
    padding: 50px 50px 30px 50px;

    &:after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(33, 33, 33, 1) 83%,
        rgba(40, 40, 40, 1) 100%
      );
    }
  }
  .team-detail-right {
    padding: 0 50px;
    width: 100%;
  }

  @media (max-width: 360px) {
    .team-detail-right {
      padding: 0;
    }
  }

  .team-detail-header {
    text-align: center;
  }

  .container-ready .person-selected {
    width: 50px !important;
  }

  .team-detail {
    width: calc(100% - 50px);
  }

  .person {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .person {
    width: 100%;
    margin-bottom: 50px;
  }
}
</style>
