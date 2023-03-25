import { reactive } from 'vue'
import { defineStore } from 'pinia'

declare type Invitee = {
  name: string
  slug: string
  inviter: string
  isGroup: boolean
  isGiftSender: boolean
}

const invitee = reactive<Invitee>({
  name: '',
  slug: '',
  inviter: '',
  isGroup: false,
  isGiftSender: false
})

export const useUserStore = defineStore('user', () => {
  function assignInvitee(payload: Invitee) {
    invitee.name = payload.name
    invitee.slug = payload.slug
    invitee.inviter = payload.inviter
    invitee.isGroup = payload.isGroup
    invitee.isGiftSender = payload.isGiftSender || false
  }

  return { invitee, assignInvitee }
})
