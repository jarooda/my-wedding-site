<script setup lang="ts">
import { useDate } from '@/composable/useDate'

defineProps<{
  messages: any
}>()

const { convertToHuman } = useDate()
</script>

<template>
  <div class="chat-list p-4">
    <div v-if="messages.length === 0" class="no-messages">
      <p>No message yet.</p>
    </div>
    <div
      v-else
      v-for="message in messages"
      :key="message.id"
      class="chat-list__item mb-4"
    >
      <p class="chat-list__item-name">
        <span v-if="message.isGroup">Someone from </span>{{ message.name }}
        <span>say:</span>
      </p>
      <div class="chat-list__item-message p-4" :class="message.color">
        <p>{{ message.message }}</p>
        <div class="timestamp-wrapper mt-3">
          <span class="timestamp">{{ convertToHuman(message.timestamp) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-list {
  width: 600px;
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  background: rgba(255, 252, 235, 0.8);
  border: 1px solid $color-border;
  border-radius: 10px;

  @media screen and (max-width: $media-medium) {
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: $normal;
    font-size: 14px;
    color: $color-text;

    &-name {
      font-weight: 600;
      margin-bottom: 8px;
    }

    &-message {
      font-weight: 400;
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      .timestamp-wrapper {
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid $color-border;

        .timestamp {
          font-size: 12px;
          font-weight: 400;
          margin-top: 8px;
        }
      }
    }
  }
}

.no-messages {
  font-family: $normal;
  font-size: 14px;
  color: $color-text;
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.green {
  background-color: $color-primary;
}

.red {
  background-color: $color-secondary;
}

.yellow {
  background-color: $color-tertiary;
}
</style>
