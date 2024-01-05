<template>
    <div class="card">
      <router-link
  class="card__link"
  :key="$route.path"
  :to="{ name: `movie-id`, params: { id: item.id } }">
        <div class="card__img">
          <img
            v-if="poster"
            :src="poster"
            class="lazyload"
            :alt="name">
  
          <span v-else>
            <!-- eslint-disable-next-line -->
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#999"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
          </span>
        </div>
  
        <h2 class="card__name">
          {{ name }}
        </h2>
  
        <div
          v-if="media !== 'person' && (stars || item.vote_average)"
          class="card__rating">
          <div
            v-if="stars"
            class="card__stars">
            <div :style="{ width: `${stars}%` }" />
          </div>
  
          <div
            v-if="item.vote_average"
            class="card__vote">
            {{ item.vote_average }}
          </div>
        </div>
      </router-link>
      <button class="button button--success" @click="toggleFavorite(item)">
              {{ isFavorite(item.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
            </button>
            <router-view :key="$route.path"/>
    </div>
  </template>
  
  <script>
  import { apiImgUrl } from '@/services/TMDBService';
  import { name, stars } from '@/mixins/Details';
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    mixins: [
      name,
      stars,
    ],
  
    props: {
      item: {
        type: null,
        required: true,
      },
    },
  
    computed: {
      poster () {
        if (this.item.poster_path) {
          return `${apiImgUrl}/w370_and_h556_bestv2${this.item.poster_path}`;
        } else if (this.item.profile_path) {
          return `${apiImgUrl}/w370_and_h556_bestv2${this.item.profile_path}`;
        } else {
          return false;
        }
      },
  
      media () {
        if (this.item.media_type) {
          return this.item.media_type;
        } else if (this.item.name) {
          return 'tv';
        } else {
          return 'movie';
        }
      },
      ...mapGetters('favorites', [
      'isFavorite' 
    ]),
    },
    methods: {
      ...mapActions('favorites', [
      'toggleFavorite' 
    ]),
    }
  };
  </script>
  <style lang="scss" module>
  @import '~/assets/css/utilities/_variables.scss';

.card {
  margin-bottom: 1.5rem;
  line-height: $base-line-height;

  @media (min-width: $breakpoint-xsmall) {
    margin-bottom: 2rem;
  }
}

.card__img {
  position: relative;
  height: 0;
  padding-top: 150.27%;
  overflow: hidden;
  background-color: $secondary-color;
  transition: transform 0.3s ease-in-out;

  img,
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0.97);
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;

    @media (min-width: $breakpoint-large) {
      font-size: 1.6rem;
    }
  }

  &.lazyloaded img {
    transform: scale(1);
  }
}

.card__link:hover,
.card__link:focus {
  .card__img {
    transform: scale(1.02);
  }
}

.card__name {
  margin-top: 1rem;
  overflow: hidden;
  font-size: 1.3rem;
  text-overflow: ellipsis;
  letter-spacing: $letter-spacing;
  white-space: nowrap;

  @media (min-width: $breakpoint-large) {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
}

.card__rating {
  display: flex;
  align-items: center;
}

.card__vote {
  margin-left: 1rem;
  font-size: 1.2rem;
  color: $text-color-grey;

  @media (min-width: $breakpoint-large) {
    font-size: 1.4rem;
  }
}

.card__stars {
  width: 7.3rem;
  height: 1.2rem;
  background-image: url('~/assets/images/stars.png');
  background-repeat: no-repeat;
  background-size: auto 100%;

  > div {
    height: 100%;
    background-image: url('~/assets/images/stars-filled.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
}

@media (max-width: $breakpoint-xsmall - 1) {
  .card__name,
  .card__rating {
    display: none;
  }
}
  
  
  </style>
  