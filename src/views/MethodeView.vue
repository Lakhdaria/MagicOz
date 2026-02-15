<script setup>
import { useReveal } from '@/composables/useReveal'
import { processSteps, antiOdeurTargets } from '@/data/siteData'
import SectionHeader from '@/components/SectionHeader.vue'
import CtaSection from '@/components/CtaSection.vue'

useReveal()
</script>

<template>
<div>
  <div class="h-[calc(72px+2rem)]"></div>

  <!-- Page header -->
  <section class="py-14">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Notre méthode"
        subtitle="Procédure de nettoyage premium en 6 étapes, adaptée à chaque textile. Machines professionnelles haute performance."
        tag="h1"
      >
        Méthode injection-extraction et produits écologiques
      </SectionHeader>
    </div>
  </section>

  <!-- Process Steps -->
  <section class="py-16 bg-[var(--color-surface-warm)]">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="font-display text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-dark)] text-center mb-12 reveal">Procédure de nettoyage premium pour textiles</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="step in processSteps"
          :key="step.step"
          class="reveal text-center px-6 py-8"
          :class="'reveal-delay-' + Math.min(step.step, 4)"
        >
          <div class="font-display text-5xl text-[var(--color-primary-light)] mb-3 leading-none">
            {{ String(step.step).padStart(2, '0') }}
          </div>
          <h3 class="text-base font-semibold text-[var(--color-dark)] mb-2">{{ step.title }}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Anti-odeur -->
  <section class="py-16">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Traitement offert"
        title="Traitement anti-odeur inclus sur chaque prestation"
        subtitle="Notre traitement cible et élimine les sources d'odeurs suivantes :"
      />
      <div class="flex flex-wrap gap-3 justify-center reveal">
        <span
          v-for="target in antiOdeurTargets"
          :key="target"
          class="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] px-5 py-2.5 rounded-full text-sm font-medium text-[var(--color-text-main)]"
        >
          <svg class="w-4 h-4 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          {{ target }}
        </span>
      </div>
    </div>
  </section>

  <!-- Produits & matériel -->
  <section class="py-16 bg-[var(--color-surface-warm)]">
    <div class="max-w-[800px] mx-auto px-6">
      <SectionHeader label="Matériel et produits" title="Équipement professionnel, produits respectueux" />
      <div class="reveal space-y-5">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-[var(--color-text-secondary)]">Méthode professionnelle injection-extraction</span>
        </div>
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-[var(--color-text-secondary)]">Produits essentiellement écologiques et biodégradables</span>
        </div>
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-[var(--color-text-secondary)]">Sans danger pour les enfants et les animaux après séchage</span>
        </div>
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-[var(--color-text-secondary)]">Matériel professionnel haute performance</span>
        </div>
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          <span class="text-[var(--color-text-secondary)]">Chaque textile est diagnostiqué avant l'intervention pour adapter la méthode</span>
        </div>
      </div>
      <div class="reveal mt-8 bg-[var(--color-accent-light)] border-l-4 border-[var(--color-accent)] rounded-lg p-5">
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          Nous privilégions essentiellement des produits respectueux de l'environnement, des animaux et des enfants. Selon les situations, des solutions professionnelles adaptées peuvent être utilisées afin de garantir un résultat optimal.
        </p>
      </div>
    </div>
  </section>

  <!-- Drying times -->
  <section class="py-16">
    <div class="max-w-[800px] mx-auto px-6">
      <SectionHeader label="Après l'intervention" title="Temps de séchage indicatifs" subtitle="Varie selon le textile et l'aération de la pièce. Ne pas utiliser le textile tant qu'il n'est pas totalement sec." />
      <div class="grid sm:grid-cols-3 gap-5 reveal">
        <div class="bg-white p-6 rounded-xl border border-[var(--color-border-light)] text-center">
          <div class="font-semibold text-[var(--color-dark)] mb-1">Canapé / Fauteuil</div>
          <div class="text-sm text-[var(--color-text-secondary)]">4 à 8 heures</div>
        </div>
        <div class="bg-white p-6 rounded-xl border border-[var(--color-border-light)] text-center">
          <div class="font-semibold text-[var(--color-dark)] mb-1">Matelas</div>
          <div class="text-sm text-[var(--color-text-secondary)]">6 à 10 heures</div>
        </div>
        <div class="bg-white p-6 rounded-xl border border-[var(--color-border-light)] text-center">
          <div class="font-semibold text-[var(--color-dark)] mb-1">Tapis</div>
          <div class="text-sm text-[var(--color-text-secondary)]">6 à 12 heures</div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection />
</div>
</template>
