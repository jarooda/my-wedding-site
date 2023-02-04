<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

const url = import.meta.env.VITE_WEB_URL
const metaImg = import.meta.env.VITE_META_IMG
const groom = import.meta.env.VITE_GROOM_NICKNAME
const bride = import.meta.env.VITE_BRIDE_NICKNAME
const title = `${bride} & ${groom} Wedding Invitation`
const description = 'We invite you to celebrate our wedding.'

useHead({
  title,
  meta: [
    {
      name: 'robots',
      content: 'noindex'
    },
    {
      name: 'title',
      content: title
    },
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: url
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: metaImg
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:url',
      content: url
    },
    {
      property: 'twitter:title',
      content: title
    },
    {
      property: 'twitter:description',
      content: description
    },
    {
      property: 'twitter:image',
      content: metaImg
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
