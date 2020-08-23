<template>
  <div>
    <b>No posty i chuj</b>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="pageblock_timeline">
        <div id="timeline_line"></div>

        <div id="timeline_container">
          <div
            v-for="(post, index) in response.allPosts"
            :key="index"
            class="timeline_card"
          >
            <div class="date">{{ post._createdAt | cutData(10) }}</div>
            <div class="container">
              <nuxt-link :to="`${post.slug}`">
                <div class="img_container">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwHeW1mTeJWfFY_1kx0N1dJ5vRju4u-GUb_w&usqp=CAU"
                  />
                </div>
              </nuxt-link>
              <div class="title">{{ post.title }}</div>
            </div>
          </div>
        </div>
      </div>
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
    _createdAt
  }
}
`;

export default {
  name: 'App',
  filters: {
    cutData(text, length) {
      return text.substring(0, length);
    }
  },
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

<style lang="scss" scoped>
#timeline {
  &_line {
    position: fixed;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
    width: 4px;
    height: 100%;
    margin-left: 60px;
    margin-top: -260px;
    padding-bottom: 260px;

    @media (max-width: 435px) {
      margin-left: 40px;
    }
  }
}

.pageblock_timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.timeline_card {
  min-height: 100px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;

  div.date {
    height: 80px;
    margin-left: 64px;
    font-size: 26px;
    line-height: 80px;
    vertical-align: middle;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.3);
  }

  div.container {
    position: relative;

    // display: grid;
    // grid-template-columns: 45% 1fr;
    // grid-template-rows: 70px auto auto;
    // grid-column-gap: 0px;
    // grid-row-gap: 0px;
    div.img_container {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      height: 250px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease-in-out !important;
      transform: scale(1.075) !important;
      z-index: 1;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
      }
    }

    @media (hover: hover) {
      div.img_container:hover {
        transform: scale(1.05) !important;
      }
    }

    div.img_container::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        7deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(100, 100, 100, 0) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    div.title {
      position: absolute;
      display: flex;
      height: 230px;
      width: calc(100% - 40px);
      top: 0;
      left: 0;
      align-items: flex-end;
      padding: 0 20px 20px 20px;
      color: rgba(255, 255, 255, 1);
      font-size: 30px;
      font-weight: 700;
      font-family: 'Raleway', sans-serif;
      pointer-events: none;
      z-index: 1;
    }
  }

  div.container:not(.open) {
    div.img_container {
      transform: scale(1) !important;
    }

    @media (hover: hover) {
      div.img_container:hover {
        transform: scale(1.05) !important;
      }
    }
  }
}
</style>
