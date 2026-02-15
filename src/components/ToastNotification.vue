<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean,
  type: { type: String, default: 'success' }, // success | error | loading
  message: { type: String, default: '' },
})

const emit = defineEmits(['close'])

const visible = ref(false)

watch(() => props.show, (val) => {
  if (val) {
    visible.value = true
  } else {
    setTimeout(() => { visible.value = false }, 400)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition-all duration-400 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="-translate-y-2 opacity-0 scale-95"
    >
      <div
        v-if="show"
        class="fixed top-24 right-6 z-[200] max-w-sm w-full pointer-events-auto"
      >
        <div
          class="rounded-xl p-4 shadow-2xl border flex items-start gap-3"
          :class="{
            'bg-white border-[var(--color-primary)]/20': type === 'success',
            'bg-white border-red-200': type === 'error',
            'bg-white border-[var(--color-accent)]/30': type === 'loading',
          }"
        >
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            :class="{
              'bg-[var(--color-primary-light)]': type === 'success',
              'bg-red-50': type === 'error',
              'bg-[var(--color-accent-light)]': type === 'loading',
            }"
          >
            <!-- Success checkmark animated -->
            <svg v-if="type === 'success'" class="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M20 6L9 17l-5-5" class="toast-check-path" />
            </svg>
            <!-- Error -->
            <svg v-else-if="type === 'error'" class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>
            </svg>
            <!-- Loading spinner -->
            <svg v-else class="w-5 h-5 text-[var(--color-accent)] animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"/>
              <path d="M12 2a10 10 0 019.8 7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>

          <!-- Text -->
          <div class="flex-1 pt-0.5">
            <p class="text-sm font-semibold text-[var(--color-dark)] leading-snug">{{ message }}</p>
          </div>

          <!-- Close -->
          <button
            v-if="type !== 'loading'"
            @click="emit('close')"
            class="w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-dark)] transition-colors shrink-0"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast-check-path {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: drawCheck 0.5s ease-out 0.2s forwards;
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}
</style>
