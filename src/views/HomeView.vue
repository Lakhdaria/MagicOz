<script setup>
import { useReveal } from '@/composables/useReveal'
import { company, services, results, zones, images } from '@/data/siteData'
import SectionHeader from '@/components/SectionHeader.vue'
import CtaSection from '@/components/CtaSection.vue'

useReveal()

const serviceIcons = {
  couch: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>`,
  armchair: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 11a7 7 0 0114 0v7H5v-7z"/><path d="M12 4V2"/></svg>`,
  bed: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>`,
  carpet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>`,
}

const trustItems = [
  { icon: `<svg class="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, text: 'Sans danger pour enfants et animaux' },
  { icon: `<svg class="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l4.24 4.24"/><circle cx="12" cy="12" r="10"/></svg>`, text: 'Lundi au samedi, 8h – 20h' },
  { icon: `<svg class="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`, text: 'Sans frais de déplacement' },
  { icon: `<svg class="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`, text: 'Devis gratuit et sans engagement' },
]
</script>

<template>
<div>
  <!-- HERO -->
  <section class="pt-[calc(72px+4rem)] pb-20 relative overflow-hidden">
    <div class="absolute top-0 right-[-10%] w-1/2 h-full pointer-events-none" style="background: radial-gradient(ellipse at center, rgba(27,107,74,0.06) 0%, transparent 70%);"></div>
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <!-- Content -->
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-1 rounded-full text-[0.8rem] font-semibold tracking-wide mb-6">
            <span class="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse-dot"></span>
            Produits écologiques et biodégradables
          </div>
          <h1 class="font-display text-[clamp(2.2rem,5vw,3.5rem)] text-[var(--color-dark)] leading-[1.15] mb-5">
            Nettoyage professionnel <em class="not-italic text-[var(--color-primary)] relative">en profondeur<span class="absolute bottom-0.5 left-0 right-0 h-2 bg-[var(--color-primary)]/12 rounded -z-10"></span></em> de vos textiles
          </h1>
          <p class="text-lg leading-relaxed text-[var(--color-text-secondary)] mb-8 max-w-[480px]">
            {{ company.accroche }}
          </p>
          <div class="flex gap-4 flex-wrap">
            <router-link
              to="/reservation"
              class="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white text-base font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:-translate-y-px"
            >
              Réserver un créneau
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <router-link
              to="/tarifs"
              class="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-base font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              Voir les tarifs
            </router-link>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative">
          <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img :src="images.hero" alt="Nettoyage professionnel de textiles Magic'Oz" class="w-full h-full object-cover" loading="eager" />
          </div>
          <!-- Floating cards -->
          <div class="absolute -top-5 -right-5 bg-white rounded-xl px-5 py-3 shadow-lg flex items-center gap-3 animate-float max-md:hidden">
            <div class="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12l3 3 5-5"/></svg>
            </div>
            <div>
              <strong class="block text-sm text-[var(--color-dark)]">Traitement anti-odeur</strong>
              <span class="text-xs text-[var(--color-text-muted)]">Offert sur chaque prestation</span>
            </div>
          </div>
          <div class="absolute bottom-5 -left-8 bg-white rounded-xl px-5 py-3 shadow-lg flex items-center gap-3 animate-float-delayed max-md:hidden">
            <div class="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div>
              <strong class="block text-sm text-[var(--color-dark)]">Résultat visible</strong>
              <span class="text-xs text-[var(--color-text-muted)]">Dès la fin de l'intervention</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST BAR -->
  <section class="py-6 border-y border-[var(--color-border-light)]">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex justify-center gap-10 flex-wrap">
        <div
          v-for="(item, i) in trustItems"
          :key="i"
          class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] font-medium"
        >
          <span v-html="item.icon"></span>
          {{ item.text }}
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="py-20" id="services">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Nos prestations"
        title="Un nettoyage professionnel adapté à chaque textile"
        subtitle="Méthode injection-extraction professionnelle. Chaque textile est diagnostiqué avant l'intervention pour adapter le traitement."
      />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(service, i) in services"
          :key="service.id"
          class="reveal bg-white rounded-xl p-8 border border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-0.5 transition-all"
          :class="'reveal-delay-' + (i + 1)"
        >
          <div class="w-12 h-12 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mb-5" v-html="serviceIcons[service.icon]"></div>
          <h3 class="font-display text-lg text-[var(--color-dark)] mb-2">{{ service.title }}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{{ service.accroche }}</p>
          <div class="font-display text-2xl text-[var(--color-primary)]">
            {{ service.prices[0].price }} € <span class="font-[var(--font-body)] text-xs text-[var(--color-text-muted)] font-normal">à partir de</span>
          </div>
        </article>
      </div>
      <div class="text-center mt-10 reveal">
        <router-link to="/prestations" class="inline-flex items-center justify-center px-7 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
          Voir le détail des prestations
        </router-link>
      </div>
    </div>
  </section>

  <!-- RÉSULTATS -->
  <section class="py-20 bg-[var(--color-surface-warm)]">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader label="Le résultat" title="Ce que Magic'Oz change chez vous" />
      <div class="grid lg:grid-cols-2 gap-14 items-center">
        <div class="reveal space-y-5">
          <div
            v-for="(result, i) in results"
            :key="i"
            class="flex items-start gap-3"
          >
            <svg class="w-5 h-5 mt-0.5 text-[var(--color-primary)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <span class="text-[var(--color-dark)] font-medium">{{ result }}</span>
          </div>
        </div>
        <div class="reveal reveal-delay-2">
          <div class="rounded-2xl overflow-hidden shadow-md aspect-[4/3] mb-6">
            <img :src="images.result" alt="Intérieur sain et propre après nettoyage Magic'Oz" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="rounded-2xl p-10 relative overflow-hidden" style="background: linear-gradient(135deg, #FFF8F0, #FFF1E6); border: 1px solid rgba(212,168,67,0.2);">
            <div class="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none" style="background: radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%);"></div>
            <div class="inline-flex items-center gap-2 bg-[var(--color-accent)]/15 text-[#9A7A28] px-4 py-1 rounded-full text-[0.8rem] font-semibold mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Offre locations saisonnières
            </div>
            <h3 class="font-display text-[clamp(1.4rem,2.5vw,1.8rem)] text-[var(--color-dark)] mb-3">Rafraîchissement textiles pour RBNB et gîtes</h3>
            <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-[600px]">
              Des textiles impeccables et rafraîchis pour une expérience premium pour vos voyageurs. Des nuits 5 étoiles pour votre hébergement.
            </p>
            <router-link to="/reservation" class="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg hover:bg-[#C49A38] transition-all hover:-translate-y-px">
              Réserver pour mon hébergement
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ZONES -->
  <section class="py-20">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Zone d'intervention"
        title="Nous intervenons dans un rayon de 30 km autour de Saint-Louis"
        subtitle="Sans frais de déplacement, du lundi au samedi de 8h à 20h."
      />
      <div class="flex flex-wrap gap-3 justify-center reveal">
        <span
          v-for="zone in zones"
          :key="zone"
          class="inline-flex items-center gap-2 bg-white border border-[var(--color-border)] px-5 py-2 rounded-full text-sm font-medium text-[var(--color-text-main)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-all cursor-default"
        >
          <svg class="w-4 h-4 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {{ zone }}
        </span>
      </div>
      <p class="text-center mt-6 text-sm text-[var(--color-text-secondary)] reveal">
        Nous intervenons aussi bien chez les particuliers que chez les professionnels : maisons, appartements, gîtes, locations saisonnières, hôtels, bureaux.
      </p>
    </div>
  </section>

  <!-- CTA -->
  <CtaSection />
</div>
</template>
