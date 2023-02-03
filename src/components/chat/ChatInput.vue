<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDate } from '@/composable/useDate'

const emit = defineEmits(['send'])
const { convertToUnix } = useDate()
const message = ref<string>('')
const messageCount = computed(() => message.value.length)
const minMessageLimit = 5
const maxMessageLimit = 200

const getRandomColor = () => {
  const colors = ['red', 'green', 'yellow']
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

const sendMessage = () => {
  const payload = {
    message: message.value,
    timestamp: convertToUnix(Date.now()),
    color: getRandomColor(),
    name: 'Jajal Jajal',
    isGroup: false
  }
  emit('send', payload)

  message.value = ''
}

const isDisabled = computed(() => {
  return message.value === '' || messageCount.value < minMessageLimit
})
</script>

<template>
  <form class="chat-input" @submit.prevent="sendMessage">
    <textarea
      class="chat-textarea"
      placeholder="Say your thought here..."
      v-model="message"
      :maxlength="maxMessageLimit"
      :minlength="minMessageLimit"
    />
    <span class="count mt-2">{{ messageCount }} / {{ maxMessageLimit }}</span>
    <button
      type="submit"
      class="block button-primary naked-button mt-3 responsive"
      :disabled="isDisabled"
    >
      Send
    </button>
  </form>
</template>

<style scoped lang="scss">
.chat-input {
  display: flex;
  flex-direction: column;
  width: 300px;

  @media screen and (max-width: $media-medium) {
    width: 100%;
  }

  .chat-textarea {
    width: 100%;
    height: 100px;
    padding: 12px;
    border: 1px solid $color-border;
    border-radius: 10px;
    font-family: $normal;
    font-size: 14px;
    color: $color-text;
    resize: none;
  }

  .count {
    text-align: right;
    font-family: $normal;
    font-size: 12px;
    font-weight: 600;
    color: $color-text;
  }
}
</style>
