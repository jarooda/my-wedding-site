<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFirebase } from '@/composable/useFirebase'
import { useUserStore } from '@/stores/user'

import ChatList from '@/components/chat/ChatList.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import BankAccount from '@/components/chat/BankAccount.vue'

const { invitee } = useUserStore()

const { writeDB, readDB, parseData } = useFirebase()
const messages = ref<any>([])

const getMessage = async () => {
  const path = '/chats/'
  const db = await readDB(path)
  const parsedData = parseData(db)
  messages.value = parsedData.reverse()
}

const sendMessage = async (payload: any, date: string) => {
  const path = '/chats/' + date
  await writeDB(path, payload)
  getMessage()
}

onMounted(() => {
  getMessage()
})
</script>

<template>
  <div class="chat-wrapper pt-11">
    <div>
      <ChatInput v-if="invitee.name" @send="sendMessage" />
      <BankAccount v-if="invitee.isGiftSender" class="mt-6" />
    </div>
    <ChatList :messages="messages" />
  </div>
</template>

<style scoped lang="scss">
.chat-wrapper {
  display: flex;
  justify-content: center;
  gap: 48px;
  width: 100%;
}
</style>
