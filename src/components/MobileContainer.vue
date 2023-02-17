<script setup lang="ts">
import HeadingTitle from '@/components/title/HeadingTitle.vue'
import MProfileWrapper from '@/components/profile/MProfileWrapper.vue'
import MEventWrapper from '@/components/event/MEventWrapper.vue'
import MGalleryWrapper from '@/components/gallery/MGalleryWrapper.vue'
import MChatWrapper from '@/components/chat/MChatWrapper.vue'
import TheFooter from '@/components/TheFooter.vue'
import KittenComponent from '@/components/kitten/Kitten.vue'
import BackgroundMusic from '@/components/title/BackgroundMusic.vue'

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME
</script>

<template>
  <div class="main-container">
    <BackgroundMusic />
    <template v-for="number in 5" :key="number">
      <div :class="`content-background bg-m-${number}`" />
    </template>
    <div class="section-container">
      <div class="initial-wrapper">
        <KittenComponent />
        <HeadingTitle id="title-text-1" :text="brideNickname" class="animate" />
        <HeadingTitle id="title-text-2" text="&" class="animate" />
        <HeadingTitle id="title-text-3" :text="groomNickname" class="animate" />
      </div>
    </div>
    <MProfileWrapper />
    <MEventWrapper />
    <MGalleryWrapper />
    <MChatWrapper />
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/bg-animation.scss';
.main-container {
  position: relative;
  background-color: $color-background;
}

.section-container {
  width: 100vw;
  min-height: 100vh;
}

.initial-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

// ANIMATION
.animate {
  animation-duration: 3s;
  animation-iteration-count: 1;
}

#title-text-1 {
  animation-name: title-first;
}

#title-text-2 {
  animation-name: title-third;
}

#title-text-3 {
  animation-name: title-second;
}

@-webkit-keyframes title-first {
  0% {
    -webkit-transform: translateY(-400px) translateX(-400px);
    transform: translateY(-400px) translateX(-400px);
    opacity: 0;
    scale: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
    scale: 1;
  }
}
@-webkit-keyframes title-second {
  0% {
    -webkit-transform: translateY(400px) translateX(400px);
    transform: translateY(400px) translateX(400px);
    opacity: 0;
    scale: 0;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
    scale: 1;
  }
}
@-webkit-keyframes title-third {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
</style>
