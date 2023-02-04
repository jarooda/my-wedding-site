<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeadingTitle from '@/components/title/HeadingTitle.vue'
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
      containerAnimation: scrollTween,
      markers: true
    }
  }

  function getScrollTriggerRight(trigger: string, end?: string) {
    return {
      trigger: trigger,
      start: 'left 80%',
      end: end || 'left 40%',
      scrub: 1,
      containerAnimation: scrollTween,
      markers: true
    }
  }

  // SECTION TITLE - START ANIMATION
  function title1() {
    const t1 = gsap.timeline({
      scrollTrigger: getScrollTriggerLeft('#title-text-1')
    })
    t1.to('#title-text-1', {
      opacity: 0,
      duration: 10
    })
    return t1
  }
  function title2() {
    const t2 = gsap.timeline({
      scrollTrigger: getScrollTriggerLeft('#title-text-2')
    })
    t2.to('#title-text-2', {
      opacity: 0,
      duration: 10
    })
    return t2
  }
  function title3() {
    const t3 = gsap.timeline({
      scrollTrigger: getScrollTriggerLeft('#title-text-3')
    })
    t3.to('#title-text-3', {
      opacity: 0,
      duration: 10
    })
    return t3
  }
  // SECTION TITLE - END ANIMATION

  // SECTION PROFILE - START ANIMATION
  function profile1() {
    const t4 = gsap.timeline({
      scrollTrigger: getScrollTriggerRight('#profile-salaam', 'left 60%')
    })
    t4.from('#profile-salaam', {
      opacity: 0,
      top: -230,
      right: -100,
      duration: 4
    })

    return t4
  }
  function profile2() {
    const t5 = gsap.timeline({
      scrollTrigger: getScrollTriggerRight('#profile-greetings-1', 'left 50%')
    })
    t5.from('#profile-greetings-1', {
      opacity: 0,
      top: -230,
      right: -100,
      duration: 10
    })

    return t5
  }
  function profile3() {
    const t6 = gsap.timeline({
      scrollTrigger: getScrollTriggerRight('#profile-greetings-2')
    })
    t6.from('#profile-greetings-2', {
      opacity: 0,
      top: -230,
      right: -100,
      duration: 16
    })

    return t6
  }
  // SECTION PROFILE - END ANIMATION

  gsap
    .timeline()
    .add(title1())
    .add(title2())
    .add(title3())
    .add(profile1())
    .add(profile2())
    .add(profile3())
})
</script>

<template>
  <div class="main-container screen-container">
    <div ref="extraLongContainer" class="extra-long-container">
      <div class="section-container centered-flex">
        <HeadingTitle
          ref="leftCorner"
          id="title-text-1"
          :text="brideNickname"
          class="mb-11 mr-10"
        />
        <HeadingTitle id="title-text-2" text="&" />
        <HeadingTitle
          id="title-text-3"
          :text="groomNickname"
          class="mt-11 ml-10"
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
  background: $color-background url(@/assets/background/background.webp);
  background-size: cover;

  @media screen and (min-width: $longScreen) {
    width: calc($longScreen * 5);
  }
}
.section-container {
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
</style>
