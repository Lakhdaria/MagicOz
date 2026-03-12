<script setup>
import { useReveal } from '@/composables/useReveal'
import { company, zones } from '@/data/siteData'
import SectionHeader from '@/components/SectionHeader.vue'
import CtaSection from '@/components/CtaSection.vue'

useReveal()
</script>

<template>
<div>
  <div class="h-[calc(72px+2rem)]"></div>

  <section class="py-14">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Contact"
        subtitle="Devis gratuit, conseil personnalisé, intervention rapide à domicile."
        tag="h1"
      >
        Contactez Magic'Oz
      </SectionHeader>
    </div>
  </section>

  <section class="pb-20">
    <div class="max-w-[900px] mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Contact info -->
        <div class="reveal space-y-6">
          <div>
            <h2 class="font-display text-xl text-[var(--color-dark)] mb-4">Coordonnées</h2>
            <div class="space-y-4">
              <a :href="'tel:' + company.phoneFull" class="flex items-start gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span class="text-base font-medium">{{ company.phone }}</span>
              </a>
              <a :href="'mailto:' + company.email" class="flex items-start gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                <span class="text-base break-all">{{ company.email }}</span>
              </a>
              <div class="flex items-start gap-3 text-[var(--color-text-secondary)]">
                <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span class="text-base">Intervention à domicile — {{ company.city }} ({{ company.region }})</span>
              </div>
              <div class="flex items-start gap-3 text-[var(--color-text-secondary)]">
                <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>
                <span class="text-base">{{ company.hours }}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-display text-lg text-[var(--color-dark)] mb-3">Zone d'intervention</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="zone in zones"
                :key="zone"
                class="inline-flex items-center gap-1.5 bg-[var(--color-primary-light)] px-3 py-1.5 rounded-full text-xs font-medium text-[var(--color-primary)]"
              >
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ zone }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick actions -->
        <div class="reveal reveal-delay-2">
          <div class="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-md space-y-5">
            <h2 class="font-display text-xl text-[var(--color-dark)]">Prendre rendez-vous</h2>
            <p class="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Réservez directement en ligne ou contactez-nous par téléphone pour un devis gratuit et personnalisé.
            </p>
            <div class="space-y-3">
              <router-link
                to="/reservation"
                class="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-md hover:-translate-y-px"
              >
                Réserver en ligne
                <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
              <a
                :href="'tel:' + company.phoneFull"
                class="w-full flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Appeler le {{ company.phone }}
              </a>
            </div>
            <div class="bg-[var(--color-accent-light)] rounded-lg p-4 mt-4">
              <p class="text-xs text-[#9A7A28] leading-relaxed">
                <strong>Devis gratuit et sans engagement.</strong> Nous intervenons chez vous sans supplément de déplacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
