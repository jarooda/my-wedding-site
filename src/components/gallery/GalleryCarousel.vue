<script setup lang="ts">
interface imagesProps {
  img: any
  isPortrait: boolean
}

const props = defineProps<{
  isReversed?: boolean
  images: imagesProps[]
}>()
</script>

<template>
  <section class="carousel-wrapper">
    <article class="carousel" :class="isReversed ? 'reverse' : ''">
      <ul
        v-for="index in 2"
        :key="index"
        class="carousel-background"
      >
        <li v-for="image in props.images">
          <div class="dots left top" />
          <div class="dots right top" />
          <template v-if="image.isPortrait">
            <div class="dots left top-quarter" />
            <div class="dots right top-quarter" />
            <div class="dots left middle" />
            <div class="dots right middle" />
            <div class="dots left bottom-quarter" />
            <div class="dots right bottom-quarter" />
          </template>
          <template v-else>
            <div class="dots left middle" />
            <div class="dots right middle" />
          </template>
          <div class="dots left bottom" />
          <div class="dots right bottom" />
          <div class="image-overlay" />
          <img class="image" :src="image.img" alt="Carousel Image" />
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  width: 360px;
  height: 100vh;
  overflow: hidden;

  &:hover {
    .carousel {
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    }
  }

  .carousel {
    display: flex;
    flex-direction: column;
    width: 360px;
    animation: bannerMove 10s linear infinite;
  }
  .reverse {
    animation: bannerMoveReverse 10s linear infinite;
  }
}
.image {
  display: block;
  width: 280px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
}

.image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

}

.dots {
  z-index: 1;
  width: 28px;
  height: 10px;
  background-color: $color-background;
  position: absolute;
  border-radius: 10px;
}

.left {
  left: -34px;
}

.right {
  right: -34px;
}

.top {
  top: 12px; 
}

.top-quarter {
  top: 25%;
}

.middle {
  top: 50%;
}

.bottom-quarter {
  bottom: 25%;
}

.bottom {
  bottom: 12px; 
}

.carousel-background {
  background-color: $color-text;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

@keyframes bannerMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes bannerMoveReverse {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
