<script setup lang="ts">
import { ref, computed } from 'vue'
import HeadingTitle from '@/components/title/HeadingTitle.vue'
import TheGuest from '@/components/title/TheGuest.vue'

const emit = defineEmits(['open'])

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME

const isDismiss = ref(false)

const openInvitation = () => {
  isDismiss.value = true
  // wait 1 second then emit open event
  setTimeout(() => {
    emit('open')
  }, 500)
}

// variable isPlayMusic is stored in local storage
const isPlayMusic = computed({
  get: () => {
    const isPlay = localStorage.getItem('isPlayMusic')
    return isPlay === 'true' || isPlay === null
  },
  set: (value: boolean) => {
    localStorage.setItem('isPlayMusic', String(value))
  }
})
</script>

<template>
  <div class="init-wrapper" :class="isDismiss ? 'fadeout' : ''">
    <template v-for="number in 4" :key="number">
      <div :class="`content-background bg-${number}`" />
    </template>
    <div class="section-container centered-flex">
      <HeadingTitle
        ref="leftCorner"
        id="title-text-1"
        :text="brideNickname"
        class="mb-11 mr-10 responsive animate"
      />
      <HeadingTitle id="title-text-2" text="&" class="animate" />
      <HeadingTitle
        id="title-text-3"
        :text="groomNickname"
        class="mt-11 ml-10 responsive animate"
      />
    </div>
    <div class="guest">
      <TheGuest @open="openInvitation" />
    </div>
    <div class="sound-setting">
      <input type="checkbox" v-model="isPlayMusic" id="music" name="music" />
      <label for="music">Mainkan suara latar.</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/bg-animation.scss';
.init-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: $color-background;
}

.sound-setting {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  gap: 8px;
  font-family: $normal;
  font-size: 12px;
  accent-color: $color-primary;
}

.guest {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;
  position: absolute;
  bottom: 20px;

  @media screen and (max-width: $media-medium) {
    bottom: 10%;
  }
}

.section-container {
  width: 100vw;
  height: 100vh;
  position: absolute;

  @media screen and (max-width: $media-medium) {
    max-width: 100%;
  }
}

.centered-flex {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: $media-medium) {
    flex-direction: column;
    height: 70vh;
  }
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

.fadeout {
  animation-name: transition-zoom-out-then-fade-out;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

@-webkit-keyframes transition-zoom-out-then-fade-out {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0;
  }
}
</style>
