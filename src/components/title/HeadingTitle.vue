<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <h1 class="heading-title">{{ props.text }}</h1>
</template>

<style scoped lang="scss">
.heading-title {
  z-index: 2;
  font-family: $cursive;
  font-size: 128px;

  @media screen and (max-width: $media-medium) {
    font-size: 96px;
  }
}
</style>
