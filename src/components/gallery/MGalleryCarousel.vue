<script setup lang="ts">
interface ImagesProps {
  img: any
}

const props = defineProps<{
  isReversed?: boolean
  isPortraid?: boolean
  images: ImagesProps[]
}>()
</script>

<template>
  <section class="carousel-wrapper">
    <article class="carousel" :class="isReversed ? 'reverse' : ''">
      <ul v-for="index in 2" :key="index" class="carousel-background">
        <li
          v-for="(image, idx) in props.images"
          :key="idx + 999"
          class="my-5 mx-3"
        >
          <div class="dots left top" />
          <div class="dots right top" />
          <div class="dots middle top" />
          <div class="dots middle bottom" />
          <div class="dots left bottom" />
          <div class="dots right bottom" />
          <img class="image" :src="image.img" alt="Carousel Image" />
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  width: 100%;
  overflow: hidden;

  &:hover {
    .carousel {
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    }
  }

  .carousel {
    display: flex;
    width: 300%;
    animation: bannerMove 5s linear infinite;
  }
  .reverse {
    animation: bannerMoveReverse 5s linear infinite;
  }
}
.image {
  border-radius: 5px;
  display: block;
  width: 100%;
  pointer-events: none;
}

.dots {
  z-index: 1;
  width: 14px;
  height: 5px;
  background-color: $color-background;
  position: absolute;
  border-radius: 10px;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.top {
  top: -10px;
}

.middle {
  left: calc(50% - 7px);
}

.bottom {
  bottom: -10px;
}

.carousel-background {
  background-color: $color-text;
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

@keyframes bannerMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes bannerMoveReverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
