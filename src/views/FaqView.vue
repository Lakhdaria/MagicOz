<script setup>
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
import { faqItems } from '@/data/siteData'
import SectionHeader from '@/components/SectionHeader.vue'
import CtaSection from '@/components/CtaSection.vue'

useReveal()

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
<div>
  <div class="h-[calc(72px+2rem)]"></div>

  <section class="py-14">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="FAQ"
        subtitle="Tout savoir sur nos prestations de nettoyage textile professionnel avant de réserver."
        tag="h1"
      >
        Questions fréquentes
      </SectionHeader>
    </div>
  </section>

  <section class="pb-20">
    <div class="max-w-[800px] mx-auto px-6">
      <div class="reveal">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="border-b border-[var(--color-border-light)]"
        >
          <button
            class="w-full flex items-center justify-between py-5 text-left text-base font-semibold gap-4 transition-colors hover:text-[var(--color-primary)]"
            :class="openIndex === i ? 'text-[var(--color-primary)]' : 'text-[var(--color-dark)]'"
            @click="toggle(i)"
          >
            <span>{{ item.question }}</span>
            <svg
              class="w-6 h-6 shrink-0 text-[var(--color-primary)] transition-transform duration-300"
              :class="{ 'rotate-45': openIndex === i }"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div
            class="faq-answer"
            :class="{ open: openIndex === i }"
          >
            <p class="text-[0.92rem] text-[var(--color-text-secondary)] leading-relaxed">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection
    title="Une question ? Contactez-nous."
    text="Devis gratuit, conseil personnalisé, intervention rapide à domicile."
    button-text="Nous contacter"
    button-to="/contact"
  />
</div>
</template>
