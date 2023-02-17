<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

// Components
import {
  KittenBody,
  KittenHead,
  KittenLeg,
  KittenTail
} from '@/components/kitten'

// Component Refs
const wrapper = ref<HTMLInputElement | null>(null)
const cat = ref<HTMLInputElement | null>(null)
const catHead = ref<HTMLInputElement | null>(null)

// Component State
const pos = reactive<Position>({
  x: null,
  y: null
})
const historyPosition = reactive<Position>({
  x: null,
  y: null
})
const legClasses = reactive<LegClasses>({
  leg: true,
  walk: false
})
const catClasses = reactive<CatClasses>({
  cat: true,
  first_pose: true
})
const catStyles = reactive<CatStyles>({})
const headStyles = reactive<HeadStyles>({})
// Component Methods
const walk = () => {
  catClasses.first_pose = false
  legClasses.walk = true
}

const handleMouseMotion = (event: MouseEvent) => {
  const rect: any = wrapper.value?.getBoundingClientRect()
  const x = event.clientX - rect?.left
  const y = event.clientY - rect?.top

  historyPosition.x = pos.x
  historyPosition.y = pos.y
  pos.x = x
  pos.y = y
  walk()
}

const turnRight = () => {
  catStyles.left = `${Number(pos.x) - 90}px`
  catClasses.face_left = false
  catClasses.face_right = true
}

const turnLeft = () => {
  catStyles.left = `${Number(pos.x) + 10}px`
  catClasses.face_left = true
  catClasses.face_right = false
}

const decideTurnDirection = () => {
  Number(cat.value?.offsetLeft) < Number(pos.x) ? turnRight() : turnLeft()
}

const headMotion = () => {
  Number(pos.y) > Number(wrapper.value?.clientHeight) - 100
    ? (headStyles.top = '-15px')
    : (headStyles.top = '-30px')
}

const decideStop = () => {
  if (pos.x === historyPosition.x) {
    legClasses.walk = false
  }
}

const checkMouse = () => {
  setInterval(() => {
    if (!pos.x || !pos.y) return
    decideTurnDirection()
    decideStop()
    headMotion()
  }, 10)
}

// Component Lifecycle Hooks
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMotion)
  checkMouse()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMotion)
  clearInterval(undefined)
})
</script>

<template>
  <div class="outer_wrapper">
    <div ref="wrapper" class="wrapper">
      <div class="cat_wrapper">
        <div ref="cat" :class="catClasses" :style="catStyles">
          <!-- START HEAD -->
          <div ref="catHead" class="cat_head" :style="headStyles">
            <kitten-head />
          </div>
          <!-- END HEAD -->

          <!-- START BODY -->
          <div class="body">
            <kitten-body />
            <div class="tail">
              <kitten-tail />
            </div>
          </div>
          <!-- END BODY -->

          <!-- START LEGS -->
          <div class="front_legs">
            <div class="one" :class="legClasses">
              <kitten-leg />
            </div>
            <div class="two" :class="legClasses">
              <kitten-leg />
            </div>
          </div>
          <div class="back_legs">
            <div class="three" :class="legClasses">
              <kitten-leg />
            </div>
            <div class="four" :class="legClasses">
              <kitten-leg />
            </div>
          </div>
          <!-- END LEGS -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/kitten.scss';
</style>
