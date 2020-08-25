<template>
  <div>
    <nuxt-link :to="`./`" class="go-back">Powrót</nuxt-link>

    <div v-if="error">{{ error }}</div>
    <div v-else-if="response.post" class="post">
      <div class="post-header">
        <h1>{{ response.post.title }}</h1>
        <p>Dodano {{ response.post._createdAt | formatData() }}</p>
        <p v-if="response.post._createdAt != response.post._updatedAt">
          Zaktualizowano {{ response.post._updatedAt | formatData() }}
        </p>
      </div>

      <div class="post-content" v-html="response.post.content"></div>
    </div>
  </div>
</template>

<script>
import { request } from '../../datocms';

export default {
  filters: {
    formatData(text) {
      return text.replace(/([A-Z])/g, ' ');
    }
  },
  data: () => ({
    title: 'Projekty - %s',
    response: '',
    error: null
  }),
  async mounted() {
    try {
      this.response = await request({
        query: `
          query Post {
            post(filter: { slug: { eq: "${this.$route.params.slug}" } }) {
              title
              content
              _createdAt,
              _updatedAt
            }
          }
        `
      });
      this.title = `${this.response.post.title} - Projekty - %s`;
    } catch (e) {
      this.error = e;
    }
  },
  head() {
    return {
      titleTemplate: this.title
    };
  }
};
</script>

<style lang="scss">
@import './assets/scss/variables';

.post {
  margin: 40px auto;
  width: 55vw;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: justify;

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
    text-align: center;
    padding: 10px;

    p {
      margin: 0;
    }
  }

  &-content {
    padding: 20px;
  }

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
  }

  p {
    font-size: 18px;
  }
}

.go-back {
  z-index: 1;
  top: 5px;
  left: 5px;
  position: absolute;
  font-size: 20px;
}
</style>
