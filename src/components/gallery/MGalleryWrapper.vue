<script setup lang="ts">
import MGalleryCarousel from '@/components/gallery/MGalleryCarousel.vue'

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
  { img: Image1 },
  { img: Image2 },
  { img: Image3 }
]
const lists2 = [
  { img: Image4 },
  { img: Image5 },
  { img: Image6 },
  { img: Image10 }
]
const lists3 = [
  { img: Image7 },
  { img: Image8 },
  { img: Image9 }
]
</script>

<template>
  <div class="gallery-wrapper my-8">
    <MGalleryCarousel :images="lists1" />
    <MGalleryCarousel is-reversed :images="lists2" is-portrait />
    <MGalleryCarousel :images="lists3" />
  </div>
</template>

<style scoped lang="scss">
.gallery-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 50vh;
}
</style>
