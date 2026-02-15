<script setup>
import { useReveal } from '@/composables/useReveal'
import { allPrices } from '@/data/siteData'
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
        label="Tarifs"
        subtitle="Tarifs clairs, sans surprise. Traitement anti-odeur offert sur chaque prestation. Sans frais de déplacement."
        tag="h1"
      >
        Tarifs nettoyage textile professionnel
      </SectionHeader>
    </div>
  </section>

  <!-- Pricing Table -->
  <section class="pb-16">
    <div class="max-w-[800px] mx-auto px-6">
      <div class="reveal overflow-hidden rounded-xl border border-[var(--color-border-light)] shadow-sm bg-white">
        <table class="w-full border-collapse">
          <thead class="bg-[var(--color-primary)] text-white">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Prestation</th>
              <th class="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, i) in allPrices"
              :key="i"
              class="border-b border-[var(--color-border-light)] last:border-b-0 hover:bg-[var(--color-primary-light)] transition-colors"
            >
              <td class="px-6 py-4 text-[0.95rem] text-[var(--color-text-main)]">{{ item.service }}</td>
              <td class="px-6 py-4 text-right font-display text-xl text-[var(--color-primary)]">{{ item.price }} €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Options -->
      <div class="reveal mt-6 space-y-4">
        <div class="bg-white border border-[var(--color-border-light)] rounded-xl p-5 flex items-center gap-3">
          <svg class="w-5 h-5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          <span class="text-sm text-[var(--color-text-secondary)]"><strong class="text-[var(--color-dark)]">Option nettoyage convertible :</strong> +15 €</span>
        </div>
        <div class="bg-white border border-[var(--color-border-light)] rounded-xl p-5 flex items-center gap-3">
          <svg class="w-5 h-5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-sm text-[var(--color-text-secondary)]"><strong class="text-[var(--color-dark)]">Traitement anti-odeur :</strong> offert sur chaque prestation</span>
        </div>
      </div>

      <!-- Discount -->
      <div class="reveal mt-6 bg-[var(--color-accent-light)] border-l-4 border-[var(--color-accent)] rounded-lg p-5">
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          <strong>-10 % dès 3 prestations</strong> le même jour et à la même adresse.
        </p>
      </div>

      <!-- Eco note -->
      <div class="reveal mt-6 bg-[var(--color-primary-light)] rounded-lg p-5">
        <p class="text-sm text-[var(--color-primary-dark)] leading-relaxed">
          Nous privilégions essentiellement des produits respectueux de l'environnement, des animaux et des enfants. Selon les situations, des solutions professionnelles adaptées peuvent être utilisées afin de garantir un résultat optimal.
        </p>
      </div>

      <!-- Devis gratuit -->
      <div class="reveal mt-8 text-center">
        <p class="text-[var(--color-text-secondary)] mb-4">Devis gratuit et sans engagement.</p>
        <router-link
          to="/reservation"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white text-base font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-md hover:-translate-y-px"
        >
          Réserver en ligne
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection
    title="Un devis gratuit, un conseil personnalisé"
    text="Contactez-nous pour une intervention rapide à domicile."
  />
</div>
</template>
