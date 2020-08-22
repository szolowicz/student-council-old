<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="(post, index) in data.allPosts" :key="index">
          <nuxt-link :to="`${post.slug}`">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { request } from '../datocms';

const HOMEPAGE_QUERY = `query allPosts
{
  allPosts {
    title
    content
    slug
  }
}
`;

export default {
  name: 'App',
  data: () => ({
    data: null,
    error: null,
    loading: true
  }),
  async mounted() {
    try {
      this.data = await request({
        query: HOMEPAGE_QUERY
      });
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
};
</script>
