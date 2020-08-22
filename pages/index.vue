<template>
  <div>
    <b>No posty i chuj</b>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="(post, index) in response.allPosts" :key="index">
          <nuxt-link :to="`${post.slug}`"
            >{{ post.title }} {{ post.updatedAt }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { request } from '../datocms';

const ALL_POSTS_QUERY = `
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
    response: null,
    error: null,
    loading: true
  }),
  async mounted() {
    try {
      this.response = await request({
        query: ALL_POSTS_QUERY
      });
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
};
</script>
