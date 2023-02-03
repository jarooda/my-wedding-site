<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFirebase } from '@/composable/useFirebase'

import ChatList from '@/components/chat/ChatList.vue'
import ChatInput from '@/components/chat/ChatInput.vue'

const { writeDB, readDB } = useFirebase()
const messages = ref<any>([])

const getMessage = async () => {
  const path = '/chats/'
  const db = await readDB(path)
  messages.value = db.reverse()
}

const sendMessage = async (payload: any) => {  
  const path = '/chats/'
  await writeDB(path, payload)
  getMessage()
}

onMounted(() => {
  getMessage()
})
</script>

<template>
  <div class="chat-wrapper p-5">
    <ChatInput @send="sendMessage" />
    <ChatList :messages="messages" />
  </div>
</template>

<style scoped lang="scss">
.chat-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
</style>
