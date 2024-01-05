<template>
    <div
      v-if="item.credits && item.credits.cast && item.credits.cast.length"
      class="listing listing--carousel">
      <div class="listing__head">
        <h2 class="listing__title">
          Cast
        </h2>
      </div>
  
      <div class="carousel">
        <button
          class="carousel__nav carousel__nav--left"
          aria-label="Previous"
          type="button"
          :disabled="disableLeftButton"
          @click="moveToClickEvent('left')">
          <!-- eslint-disable-next-line -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.9 23.2L6.1 12 17.9.8"/></svg>
        </button>
  
        <div
          ref="carouselElement"
          class="carousel__items"
          @scroll="scrollEvent">
                    <div 
                    v-for="person in item.credits.cast"
            :key="`credit-${person.id}`"
            :person="person"
                    class="credits-item">
            <div class="credits-item__img">
                <img 
                v-if="person.profile_path"
                :src="'https://image.tmdb.org/t/p/w185' + person.profile_path"
                class="lazyload"
                :alt="person.name">

                <span v-else>
                <!-- eslint-disable-next-line -->
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#999"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
                </span>
            </div>

            <h2 class="credits-item__name">
                {{ person.name }}
            </h2>

            <div class="credits-item__character">
                {{ person.character }}
            </div>
  </div>


        </div>
  
        <button
          class="carousel__nav carousel__nav--right"
          aria-label="Next"
          type="button"
          :disabled="disableRightButton"
          @click="moveToClickEvent('right')">
          <!-- eslint-disable-next-line -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.1 23.2L17.9 12 6.1.8"/></svg>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import carousel from '@/mixins/Carousel';
  import { debounce } from '@/mixins/Functions';
  
  export default {
    mixins: [carousel],
  
    props: {
      item: {
        type: null,
        required: true,
      },
    },
  
    mounted () {
        if(this.item.credits && this.item.credits.cast){
            this.calculateState(this.item.credits.cast.length);
        }
    },
  
    methods: {
      resizeEvent: debounce(function () {
        if(this.item.credits && this.item.credits.cast){
            this.calculateState(this.item.credits.cast.length);
        }
      }, 100),
    },
  };
  </script>

<style lang="scss">
@import '~/assets/css/utilities/_variables.scss';

.credits-item {
  margin-bottom: 2rem;
  line-height: $base-line-height;
}

.credits-item__img {
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
  }

  &.lazyloaded img {
    transform: scale(1);
  }
}

.credits-item__link:hover,
.credits-item__link:focus {
  .credits-item__img {
    transform: scale(1.02);
  }
}

.credits-item__name {
  margin-top: 1rem;
  font-size: 1.3rem;
  letter-spacing: $letter-spacing;

  @media (min-width: $breakpoint-large) {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
}

.credits-item__character {
  font-size: 1.2rem;
  color: $text-color-grey;
  letter-spacing: $letter-spacing;

  @media (min-width: $breakpoint-large) {
    font-size: 1.4rem;
  }
}
</style>
  