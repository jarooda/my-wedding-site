<script setup lang="ts">
import EventCard from '@/components/event/EventCard.vue'
</script>

<template>
  <div class="event-wrapper mt-7">
    <EventCard title="akad" date="first" />
    <EventCard title="tasyakuran" date="second" />
  </div>
</template>

<style scoped lang="scss">
.event-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
}
</style>
