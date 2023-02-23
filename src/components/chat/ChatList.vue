<script setup lang="ts">
import { useDate } from '@/composable/useDate'
import { useFirebase } from '@/composable/useFirebase'

defineProps<{
  messages: any
}>()

const { parseData } = useFirebase()
const { convertToHuman, parseDateAndMonth } = useDate()

const getDirectories = (dir: any) => {
  const parsedData = parseData(dir)
  return parsedData.reverse()
}
</script>

<template>
  <div class="chat-list p-4">
    <div v-if="messages.length === 0" class="no-messages">
      <p>Belum ada ucapan...</p>
    </div>
    <div
      v-else
      v-for="(directory, index) in messages"
      :key="index"
      class="chat-list__item mb-4"
    >
      <div class="block">
        <div class="text-divider">{{ parseDateAndMonth(directory.id) }}</div>
      </div>
      <template v-for="message in getDirectories(directory)" :key="message.id">
        <template v-if="message.name">
          <div class="talk-bubble tri-right round btm-left-in border">
            <div class="talktext chat-list__item-message">
              <p class="chat-list__item-name">
                <span v-if="message.isGroup">Seseorang dari </span
                >{{ message.name }}
              </p>
              <p>{{ message.message }}</p>
              <div class="block">
                <span class="timestamp">{{
                  convertToHuman(message.timestamp, 'HH.mm')
                }}</span>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/bubble-chat.scss';
.chat-list {
  width: 600px;
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);

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
    }
  }
}

.timestamp {
  width: 100%;
  text-align: end;
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
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
.text-divider {
  display: flex;
  width: 50%;
  align-items: center;
  --text-divider-gap: 8px; // set a customizable gap between label and lines
}

.text-divider::before,
.text-divider::after {
  content: '';
  height: 1px;
  background-color: silver;
  flex-grow: 1;
}

.text-divider::before {
  margin-right: var(--text-divider-gap);
}

.text-divider::after {
  margin-left: var(--text-divider-gap);
}
</style>
