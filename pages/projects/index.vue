<template>
  <div>
    <TitleBox>Projekty</TitleBox>

    <div v-if="error">{{ error }}</div>
    <div v-else-if="response.allPosts">
      <div class="timeline">
        <div class="timeline__line"></div>

        <div class="timeline__container">
          <div
            v-for="(post, index) in response.allPosts"
            :key="index"
            class="timeline__card"
          >
            <div class="timeline__card__date">
              {{ post._createdAt | formatDate() }}
            </div>

            <div class="project-container">
              <nuxt-link :to="`/projects/${post.slug}`">
                <div class="project-container__image">
                  <img
                    :src="post.previewPhoto.url + '?w=450&h=250'"
                    :alt="post.title"
                  />
                </div>
              </nuxt-link>

              <div class="project-container__title">{{ post.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { request } from '../../datocms';

const ALL_POSTS_QUERY = `
{
  allPosts(orderBy: _createdAt_DESC) {
    title
    content
    previewPhoto {
      url
      alt
    }
    slug
    _createdAt
  }
}
`;

export default {
  name: 'App',
  filters: {
    formatDate(value) {
      return moment(String(value)).locale('pl').format('LL');
    }
  },
  data: () => ({
    response: '',
    error: null
  }),
  async mounted() {
    try {
      this.response = await request({
        query: ALL_POSTS_QUERY
      });
    } catch (e) {
      this.error = e;
    }
  },
  head: {
    titleTemplate: 'Projekty - %s'
  }
};
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';

.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;

  &__line {
    position: fixed;
    z-index: -1;
    background-color: $mainColor;
    width: 4px;
    height: 100%;
    margin-left: 60px;
    margin-top: -260px;
    padding-bottom: 260px;

    @media (max-width: 600px) {
      margin-top: -160px;
      padding-bottom: 160px;
    }
  }

  &__card {
    min-height: 100px;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;

    &__date {
      height: 80px;
      margin-left: 64px;
      font-size: 26px;
      line-height: 80px;
      vertical-align: middle;
      font-weight: 600;
      color: $secondColor;
      opacity: 0.7;
    }

    .project-container {
      position: relative;

      &__image {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        height: 250px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease-in-out !important;
        transform: scale(1) !important;
        z-index: 1;
        cursor: pointer;

        &:hover {
          transform: scale(1.05) !important;
        }

        &::after {
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

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-position: center;
        }
      }

      &__title {
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
        pointer-events: none;
        z-index: 1;
      }
    }
  }
}
</style>
