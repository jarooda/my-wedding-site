<script setup lang="ts">
import { ref, onMounted } from 'vue'
const audio = ref<any>(null)

const playBgm = () => {
  audio.value.play()
}
const isBgmPlaying = localStorage.getItem('isPlayMusic')

onMounted(() => {
  if (isBgmPlaying === 'true' || isBgmPlaying === null) {
    playBgm()
  }
})
</script>

<template>
  <div class="bgm-wrapper">
    <audio ref="audio">
      <source preload src="@/assets/bgm/music.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<style scoped lang="scss">
.bgm-wrapper {
  position: absolute;
}
</style>
