<script setup lang="ts">
import isMobile from 'ismobilejs'
import { useRoute } from 'vue-router'
import { useFirebase } from '@/composable/useFirebase'
import { useUserStore } from '@/stores/user'

import DesktopContainer from '@/components/DesktopContainer.vue'
import MobileContainer from '@/components/MobileContainer.vue'

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
</script>

<template>
  <MobileContainer v-if="isMobileDevice" />
  <DesktopContainer v-else />
</template>
