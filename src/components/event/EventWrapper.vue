<script setup lang="ts">
import EventCard from '@/components/event/EventCard.vue'
</script>

<template>
  <div class="event-wrapper">
    <EventCard
      title="akad"
      date="first"
    />
    <EventCard
      title="tasyakuran"
      date="second"
    />
  </div>
</template>

<style scoped lang="scss">
.event-wrapper {
  display: flex;
  justify-content: space-around;
  width: 60%;
}
</style>
