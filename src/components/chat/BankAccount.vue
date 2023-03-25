<script setup lang="ts">
import { ref } from 'vue'

type BankAccount = {
  no: string
  name: string
  bank: string
}

const bankAccountENV = import.meta.env.VITE_BANK_ACCOUNT || "{}"
const bankAccount = ref<BankAccount>(JSON.parse(bankAccountENV))
</script>

<template>
  <p class="gift-wrapper">Jika Anda ingin memberikan hadiah sebagai tanda kasih sayang, silakan transfer ke nomor rekening berikut: <span>{{ bankAccount.bank }}</span> <span>{{  bankAccount.no }}</span>, atas nama <span>{{ bankAccount.name }}</span>. Terima kasih atas perhatian dan cinta Anda pada hari bahagia kami.</p>
</template>

<style scoped lang="scss">
.gift-wrapper {
  font-family: $normal;
  font-size: 14px;
  text-align: justify;
  width: 300px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: $color-text;
  padding: 12px;

  @media screen and (max-width: $media-medium) {
    width: 100%;
  }

  span {
    font-weight: 700;
  }
}
</style>