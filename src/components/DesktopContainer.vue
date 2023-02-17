<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeadingTitle from '@/components/title/HeadingTitle.vue'
import KittenComponent from '@/components/kitten/Kitten.vue'
import BackgroundMusic from '@/components/title/BackgroundMusic.vue'
import ProfileWrapper from '@/components/profile/ProfileWrapper.vue'
import EventWrapper from '@/components/event/EventWrapper.vue'
import GalleryWrapper from '@/components/gallery/GalleryWrapper.vue'
import ChatWrapper from '@/components/chat/ChatWrapper.vue'
import TheFooter from '@/components/TheFooter.vue'

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME

gsap.registerPlugin(ScrollTrigger)
const extraLongContainer = ref<any>(null)
const leftCorner = ref<any>(null)

onMounted(() => {
  const scrollTween = gsap.to(extraLongContainer.value, {
    xPercent: -100,
    x: () => window.innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.extra-long-container',
      start: 'top top',
      end: () => '+=' + extraLongContainer.value?.offsetWidth + 'px',
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })

  const START_POS = leftCorner.value?.$el.getBoundingClientRect().left

  function getScrollTriggerLeft(trigger: string, start?: string) {
    return {
      trigger: trigger,
      start: start || `left ${START_POS - 100}px`,
      end: 'left -1px',
      scrub: 1,
      containerAnimation: scrollTween
    }
  }

  function timelineFactory(gsapConfig: any, payload: any) {
    const tl = gsapConfig.timeline({
      scrollTrigger: payload.scrollTrigger(payload.identifier, payload.positon)
    })
    if (payload.isFrom) {
      tl.from(payload.identifier, payload.config)
    } else {
      tl.to(payload.identifier, payload.config)
    }
    return tl
  }

  // SECTION TITLE - START ANIMATION
  function title1 (gsapConfig: any) {
    return timelineFactory(gsapConfig, {
      scrollTrigger: getScrollTriggerLeft,
      identifier: '#title-text-1',
      isFrom: false,
      config: {
        opacity: 0,
        duration: 10
      }
    })
  }
  function title2 (gsapConfig: any) {
    return timelineFactory(gsapConfig, {
      scrollTrigger: getScrollTriggerLeft,
      identifier: '#title-text-2',
      isFrom: false,
      config: {
        opacity: 0,
        duration: 10
      }
    })
  }
  function title3 (gsapConfig: any) {
    return timelineFactory(gsapConfig, {
      scrollTrigger: getScrollTriggerLeft,
      identifier: '#title-text-3',
      isFrom: false,
      config: {
        opacity: 0,
        duration: 10
      }
    })
  }
  // SECTION TITLE - END ANIMATION

  gsap
    .timeline()
    .add(title1(gsap))
    .add(title2(gsap))
    .add(title3(gsap))
})
</script>

<template>
  <div class="main-container screen-container">
    <div ref="extraLongContainer" class="extra-long-container">
      <BackgroundMusic />
      <KittenComponent />
      <template v-for="number in 7" :key="number">
        <div :class="`content-background bg-${number}`" />
      </template>
      <div class="section-container centered-flex">
        <HeadingTitle
          ref="leftCorner"
          id="title-text-1"
          :text="brideNickname"
          class="mb-11 mr-10 animate"
        />
        <HeadingTitle id="title-text-2" text="&" class="animate" />
        <HeadingTitle
          id="title-text-3"
          :text="groomNickname"
          class="mt-11 ml-10 animate"
        />
      </div>
      <div class="section-container centered-flex profile-position">
        <ProfileWrapper />
      </div>
      <div class="section-container centered-flex event-position">
        <EventWrapper />
      </div>
      <div class="section-container centered-flex gallery-position">
        <GalleryWrapper />
      </div>
      <div class="section-container chat-container chat-position">
        <ChatWrapper />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/bg-animation.scss';
$longScreen: 1440px;
$height: 832px;

.main-container {
  position: relative;
}

.centered-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.extra-long-container {
  width: calc(100vw * 5);
  height: 100%;
  position: relative;
  display: block;
  background-color: $color-background;
  
  @media screen and (min-width: $longScreen) {
    width: calc($longScreen * 5);
  }
}

.section-container {
  z-index: 2;
  width: 100vw;
  height: $height;
  position: absolute;

  @media screen and (min-width: $longScreen) {
    width: $longScreen;
  }
  @media screen and (max-height: $height) {
    height: 100vh;
  }
}

.profile-position {
  left: 100vw;

  @media screen and (min-width: $longScreen) {
    left: $longScreen;
  }
}

.event-position {
  left: calc(100vw * 2);

  @media screen and (min-width: $longScreen) {
    left: calc($longScreen * 2);
  }
}

.gallery-position {
  left: calc(100vw * 3);

  @media screen and (min-width: $longScreen) {
    left: calc($longScreen * 3);
  }
}
.chat-position {
  left: calc(100vw * 4);

  @media screen and (min-width: $longScreen) {
    left: calc($longScreen * 4);
  }
}

.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
