<script setup>
defineProps({
  label: String,
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="text-center mb-14 reveal">
    <span
      v-if="label"
      class="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1 rounded-full mb-5"
    >
      {{ label }}
    </span>
    <component :is="$attrs.tag || 'h2'" class="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] text-[var(--color-dark)] leading-tight">
      <slot>{{ title }}</slot>
    </component>
    <p v-if="subtitle" class="max-w-[600px] mx-auto mt-4 text-[1.05rem] text-[var(--color-text-secondary)]">
      {{ subtitle }}
    </p>
  </div>
</template>
