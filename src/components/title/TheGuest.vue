<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const { invitee } = useUserStore()
</script>

<template>
  <div class="guest-container">
    <p class="mb-5 guest__greeting">Kepada Bapak/Ibu/Saudara/i</p>
    <div v-if="invitee.name" class="typewriter mb-5">
      <p class="guest__name">{{ invitee.name }}</p>
    </div>
    <button
      type="submit"
      class="block button-primary naked-button responsive"
      @click="$emit('open')"
    >
      Buka Undangan
    </button>
  </div>
</template>

<style scoped lang="scss">
.guest-container {
  z-index: 3;
  position: absolute;
  bottom: 0;
  padding: 24px 64px;
  font-family: $normal;
  text-align: center;

  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
}

.guest__greeting {
  font-weight: 400;
  font-size: 12px;
}
.guest__name {
  font-weight: 600;
  font-size: 14px;
}

.typewriter p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  //border-right: .15em solid $color-text; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: $color-text;
  }
}
</style>
