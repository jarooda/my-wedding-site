<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import isMobile from 'ismobilejs'
import { useRoute } from 'vue-router'
import { useFirebase } from '@/composable/useFirebase'
import { useUserStore } from '@/stores/user'

import InitScreen from '@/components/title/InitScreen.vue'
const DesktopContainer = defineAsyncComponent(
  () => import('@/components/DesktopContainer.vue')
)
const MobileContainer = defineAsyncComponent(
  () => import('@/components/MobileContainer.vue')
)

const isMobileDevice = isMobile(window.navigator.userAgent).any
const { readDB } = useFirebase()
const route = useRoute()
const { assignInvitee } = useUserStore()

const getGuestInfo = async (identifier: string) => {
  const path = `/guests/${identifier}`
  const user = await readDB(path)

  if (user.inviter) {
    assignInvitee({
      name: user.name,
      inviter: user.inviter,
      isGroup: user.isGroup,
      slug: identifier
    })
  }
}

if (route.query && route.query.to) {
  getGuestInfo(route.query.to as string)
}

const isInit = ref(true)
</script>

<template>
  <InitScreen v-if="isInit" @open="isInit = false" />
  <template v-if="!isInit">
    <MobileContainer v-if="isMobileDevice" />
    <DesktopContainer v-else />
  </template>
</template>
