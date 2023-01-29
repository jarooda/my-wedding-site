<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  gender: 'male' | 'female'
}>()

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const groomName = import.meta.env.VITE_GROOM_FULLNAME
const groomFather = import.meta.env.VITE_GROOM_FATHER
const groomMother = import.meta.env.VITE_GROOM_MOTHER
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME
const brideName = import.meta.env.VITE_BRIDE_FULLNAME
const brideFather = import.meta.env.VITE_BRIDE_FATHER
const brideMother = import.meta.env.VITE_BRIDE_MOTHER

const brides = {
  male: {
    name: groomName,
    nickname: groomNickname,
    father: groomFather,
    mother: groomMother
  },
  female: {
    name: brideName,
    nickname: brideNickname,
    father: brideFather,
    mother: brideMother
  }
} as const

const profile = computed(() => {
  return brides[props.gender]
})

const getTitle = (gender: string): string => {
  return gender === 'male' ? 'Putra' : 'Putri'
}
</script>

<template>
  <div>
    <div class="pair-container">
      <h1 class="nickname mb-5">{{ profile.nickname }}</h1>
      <h2 class="name mb-5">{{ profile.name }}</h2>
      <p class="title mb-5">{{ getTitle(props.gender) }} dari Pasangan</p>
      <p class="parents">Bapak {{ profile.father }} & Ibu {{ profile.mother }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pair-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .nickname {
    font-family: $cursive;
    font-size: 48px;
  }

  .name,
  .title,
  .parents {
    font-family: $normal;
  }

  .name {
    font-weight: 700;
    font-size: 24px;
  }

  .title {
    font-weight: 400;
    font-size: 16px;
  }

  .parents {
    font-weight: 700;
    font-size: 16px;
  }
}
</style>
