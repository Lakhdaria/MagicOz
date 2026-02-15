<script setup>
defineProps({
  title: { type: String, default: 'Réservez votre créneau dès maintenant' },
  text: { type: String, default: 'Un devis gratuit, un conseil personnalisé, une intervention rapide à domicile.' },
  buttonText: { type: String, default: 'Réserver en ligne' },
  buttonTo: { type: String, default: '/reservation' },
})
</script>

<template>
  <section class="relative py-20 text-center overflow-hidden" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
    <div class="absolute top-[-50%] right-[-20%] w-[60%] h-[200%] pointer-events-none" style="background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%);"></div>
    <div class="max-w-[1200px] mx-auto px-6 relative z-10">
      <h2 class="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] text-white mb-4">{{ title }}</h2>
      <p class="text-white/80 text-lg mb-8 max-w-[500px] mx-auto">{{ text }}</p>
      <router-link
        :to="buttonTo"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-dark)] text-base font-semibold rounded-lg hover:bg-[#C49A38] transition-all hover:-translate-y-px"
      >
        {{ buttonText }}
        <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </router-link>
    </div>
  </section>
</template>
