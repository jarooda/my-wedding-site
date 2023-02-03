<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size: string
}>()

const imgStyle = computed(() => {
  return {
    width: props.size,
    height: props.size,
    backgroundSize: `${props.size} ${props.size}`
  }
})
</script>

<template>
  <div class="flip-card" :style="imgStyle">
    <div class="flip-card-inner">
      <div class="flip-card-front" :style="imgStyle" />
      <div class="flip-card-back" :style="imgStyle" />
    </div>
  </div>
</template>

<style scoped lang="scss">
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateX(-180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background: url('@/assets/photos/pair-profiles.webp') no-repeat center;
  object-fit: fill;
}

/* Style the back side */
.flip-card-back {
  background: url('@/assets/photos/pair-profiles-back.webp') no-repeat center;
  object-fit: fill;
  transform: rotateX(-180deg);
}
</style>
