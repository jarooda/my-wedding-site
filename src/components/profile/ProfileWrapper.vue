<script setup lang="ts">
import { ref } from 'vue'

import PairCard from '@/components/profile/PairCard.vue'
import FlippingImage from '@/components/profile/FlippingImage.vue'

const groomNickname = import.meta.env.VITE_GROOM_NICKNAME
const groomName = import.meta.env.VITE_GROOM_FULLNAME
const groomFather = import.meta.env.VITE_GROOM_FATHER
const groomMother = import.meta.env.VITE_GROOM_MOTHER
const brideNickname = import.meta.env.VITE_BRIDE_NICKNAME
const brideName = import.meta.env.VITE_BRIDE_FULLNAME
const brideFather = import.meta.env.VITE_BRIDE_FATHER
const brideMother = import.meta.env.VITE_BRIDE_MOTHER

const groom = ref({
  nickname: groomNickname,
  name: groomName,
  father: groomFather,
  mother: groomMother
})
const bride = ref({
  nickname: brideNickname,
  name: brideName,
  father: brideFather,
  mother: brideMother
})
</script>

<template>
  <div class="profile-wrapper">
    <div class="greetings mb-9">
      <p id="profile-salaam" class="salaam mb-7">
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </p>
      <p id="profile-greetings-1" class="mb-5">
        Maha suci Allah SWT yang telah menciptakan makhluk-Nya
        berpasang-pasangan.
      </p>
      <p id="profile-greetings-2">
        Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan
        di antara putra-putri kami:
      </p>
    </div>
    <div class="pair-container">
      <PairCard gender="female" :profile="bride" />
      <FlippingImage class="mx-10" size="300px" />
      <PairCard gender="male" :profile="groom" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-wrapper {
  display: flex;
  flex-direction: column;
}
.greetings {
  font-family: $normal;
  font-size: 16px;
  text-align: center;
  .salaam {
    font-style: italic;
  }
}
.pair-container {
  display: flex;
  align-items: center;
}
</style>
