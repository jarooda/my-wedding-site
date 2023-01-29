<script setup lang="ts">
import PairCard from '@/components/profile/PairCard.vue'
import FlippingImage from '@/components/profile/FlippingImage.vue'
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
      <PairCard gender="female" />
      <FlippingImage class="mx-10" />
      <PairCard gender="male" />
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
