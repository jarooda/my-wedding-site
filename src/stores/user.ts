import { reactive } from 'vue'
import { defineStore } from 'pinia'

declare type Invitee = {
  name: string
  slug: string
  inviter: string
  isGroup: boolean
}

const invitee = reactive<Invitee>({
  name: '',
  slug: '',
  inviter: '',
  isGroup: false
})

export const useUserStore = defineStore('user', () => {
  function assignInvitee(payload: Invitee) {
    invitee.name = payload.name
    invitee.slug = payload.slug
    invitee.inviter = payload.inviter
    invitee.isGroup = payload.isGroup
  }

  return { invitee, assignInvitee }
})
