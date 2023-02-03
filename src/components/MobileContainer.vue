<script setup lang="ts">
import HeadingTitle from '@/components/title/HeadingTitle.vue'
import MProfileWrapper from '@/components/profile/MProfileWrapper.vue'
import MEventWrapper from '@/components/event/MEventWrapper.vue'
import MGalleryWrapper from '@/components/gallery/MGalleryWrapper.vue'

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME

</script>

<template>
  <div class="main-container">
    <div class="section-container">
      <div class="initial-wrapper">
        <HeadingTitle :text="brideNickname" />
        <HeadingTitle text="&" />
        <HeadingTitle :text="groomNickname" />
      </div>
    </div>
    <MProfileWrapper />
    <MEventWrapper />
    <MGalleryWrapper />
    <div class="section-container">
      WIP Chatbox
    </div>
  </div>
</template>

<style scoped lang="scss">
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
</style>