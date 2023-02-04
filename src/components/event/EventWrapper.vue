<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useParseEvent } from '@/composable/useParseEvent'

import EventCard from '@/components/event/EventCard.vue'

const { invitee } = useUserStore()
const groomIdentifier = import.meta.env.VITE_GROOM_IDENTIFIER
const brideIdentifier = import.meta.env.VITE_BRIDE_IDENTIFIER

const { akad, brideEvent, groomEvent } = useParseEvent()
</script>

<template>
  <div class="event-wrapper">
    <EventCard :event-data="akad" />
    <EventCard
      v-if="!invitee.inviter || brideIdentifier === invitee.inviter"
      :event-data="brideEvent"
    />
    <EventCard
      v-if="!invitee.inviter || groomIdentifier === invitee.inviter"
      :event-data="groomEvent"
    />
  </div>
</template>

<style scoped lang="scss">
.event-wrapper {
  display: flex;
  justify-content: center;
  gap: 128px;
  width: 100%;
}
</style>
