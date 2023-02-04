<script setup lang="ts">
interface Profile {
  nickname: string
  name: string
  father: string
  mother: string
}
const props = defineProps<{
  gender: 'male' | 'female'
  profile: Profile
}>()

const getTitle = (gender: string): string => {
  return gender === 'male' ? 'Putra' : 'Putri'
}
</script>

<template>
  <div>
    <div class="pair-container">
      <h1 class="nickname mb-5 responsive">{{ profile.nickname }}</h1>
      <h2 class="name mb-5 responsive">{{ profile.name }}</h2>
      <p class="title mb-5 responsive">
        {{ getTitle(props.gender) }} dari Pasangan
      </p>
      <p class="parents">
        Bapak {{ profile.father }} & Ibu {{ profile.mother }}
      </p>
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

    @media screen and (max-width: $media-medium) {
      font-size: 20px;
    }
  }

  .title {
    font-weight: 400;
    font-size: 16px;

    @media screen and (max-width: $media-medium) {
      font-size: 14px;
    }
  }

  .parents {
    font-weight: 700;
    font-size: 16px;

    @media screen and (max-width: $media-medium) {
      font-size: 14px;
    }
  }
}
</style>
