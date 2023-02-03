<script setup lang="ts">
import isMobile from 'ismobilejs'
import DesktopContainer from '@/components/DesktopContainer.vue'
import MobileContainer from '@/components/MobileContainer.vue'

const isMobileDevice = isMobile(window.navigator.userAgent).any
</script>

<template>
  <MobileContainer v-if="isMobileDevice" />
  <DesktopContainer v-else />
</template>
