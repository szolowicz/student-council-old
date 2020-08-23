<template>
  <div>
    <nuxt-link :to="`./`" class="go_back">Powrót</nuxt-link>

    <div v-if="error">{{ error }}</div>
    <div v-else-if="response.post">
      <h1>{{ response.post.title }}</h1>
      <p>{{ response.post._createdAt | formatData() }}</p>

      <div v-html="response.post.content"></div>
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
              _createdAt
            }
          }
        `
      });
    } catch (e) {
      this.error = e;
    }
  }
};
</script>
