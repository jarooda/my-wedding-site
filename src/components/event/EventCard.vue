<script setup lang="ts">
import { ref } from 'vue'

interface EventData {
  title: string
  date: {
    date: string
    day: string
    month: string
    year: string
  }
  time: string
  place: {
    address: string
    region: string
  }
  gmaps: string
}

defineProps<{
  eventData: EventData
}>()

const isFlipping = ref(false)
</script>

<template>
  <div class="flip-card" :class="isFlipping ? 'flipping' : ''">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="event-card-wrapper">
          <h1 class="title mb-5 responsive">{{ eventData.title }}</h1>
          <div class="separator" />
          <div class="date-wrapper">
            <div class="date-wrapper-top">
              <h2 class="date-wrapper__date mr-2">{{ eventData.date.date }}</h2>
              <div class="date-wrapper-right">
                <h3>{{ eventData.date.month }}</h3>
                <h3>{{ eventData.date.year }}</h3>
              </div>
            </div>
            <h3 class="mt--3">{{ eventData.date.day }}</h3>
          </div>
          <div class="separator mt-3" />
          <p class="time mt-6 responsive">{{ eventData.time }}</p>
          <div class="address-wrapper mt-6 responsive">
            <div class="address mb-2 responsive">
              <img src="@/assets/icons/marker.svg" alt="marker" class="mr-3" />
              <p>{{ eventData.place.address }}</p>
            </div>
            <p>{{ eventData.place.region }}</p>
          </div>
          <button
            class="button-primary naked-button mt-6 responsive"
            @click="isFlipping = true"
          >
            Google Maps
          </button>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="event-card-wrapper">
          <div v-html="eventData.gmaps" />
          <button
            class="button-primary naked-button mt-6 responsive"
            @click="isFlipping = false"
          >
            Event
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  @media screen and (max-width: $media-medium) {
    height: 350px;
  }
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flipping .flip-card-inner {
  transform: rotateY(-180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(-180deg);
}

.event-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid $color-border;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: $normal;
  font-weight: 400;

  @media screen and (max-width: $media-medium) {
    height: 350px;
  }

  .title {
    font-family: $cursive;
    font-size: 40px;

    @media screen and (max-width: $media-medium) {
      font-size: 32px;
    }
  }

  .separator {
    width: 60px;
    border: 2px solid $color-primary;
    border-radius: 10px;
  }

  .date-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;

    @media screen and (max-width: $media-medium) {
      font-size: 16px;
    }

    &__date {
      font-weight: 700;
      font-size: 64px;

      @media screen and (max-width: $media-medium) {
        font-size: 48px;
      }
    }

    .date-wrapper-top {
      display: flex;
    }

    .date-wrapper-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  .time {
    font-size: 16px;

    @media screen and (max-width: $media-medium) {
      font-size: 14px;
    }
  }

  .address-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;

    @media screen and (max-width: $media-medium) {
      font-size: 12px;
    }

    .address {
      display: flex;
      align-items: center;
    }
  }
}
</style>
