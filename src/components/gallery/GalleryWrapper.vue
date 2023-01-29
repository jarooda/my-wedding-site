<script setup lang="ts">
import GalleryCarousel from '@/components/gallery/GalleryCarousel.vue'

import Image1 from '@/assets/photos/img-1.webp'
import Image2 from '@/assets/photos/img-2.webp'
import Image3 from '@/assets/photos/img-3.webp'
import Image4 from '@/assets/photos/img-4.webp'
import Image5 from '@/assets/photos/img-5.webp'
import Image6 from '@/assets/photos/img-6.webp'
import Image7 from '@/assets/photos/img-7.webp'
import Image8 from '@/assets/photos/img-8.webp'
import Image9 from '@/assets/photos/img-9.webp'
import Image10 from '@/assets/photos/img-10.webp'

const lists1 = [
  { img: Image2, isPortrait: false },
  { img: Image4, isPortrait: true },
  { img: Image7, isPortrait: false }
]
const lists2 = [
  { img: Image1, isPortrait: false },
  { img: Image5, isPortrait: true },
  { img: Image8, isPortrait: false },
  { img: Image10, isPortrait: true }
]
const lists3 = [
  { img: Image3, isPortrait: false },
  { img: Image6, isPortrait: true },
  { img: Image9, isPortrait: false }
]
</script>

<template>
  <div class="gallery-wrapper">
    <GalleryCarousel is-reversed :images="lists1" />
    <GalleryCarousel :images="lists2" />
    <GalleryCarousel is-reversed :images="lists3" />
  </div>
</template>

<style scoped lang="scss">
.gallery-wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
