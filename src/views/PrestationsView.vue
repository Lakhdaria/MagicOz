<script setup>
import { useReveal } from '@/composables/useReveal'
import { services, images } from '@/data/siteData'
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
        label="Nos prestations"
        subtitle="Chaque textile est diagnostiqué avant l'intervention pour adapter la méthode. Traitement anti-odeur offert sur chaque prestation."
        tag="h1"
      >
        Nettoyage professionnel de textiles à domicile
      </SectionHeader>
    </div>
  </section>

  <!-- Service blocks -->
  <section
    v-for="(service, i) in services"
    :key="service.id"
    :id="service.id"
    class="py-16"
    :class="i % 2 === 0 ? 'bg-[var(--color-surface-warm)]' : ''"
  >
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-14 items-center" :class="{ 'lg:[direction:rtl]': i % 2 !== 0 }">
        <!-- Image -->
        <div class="reveal" :class="{ 'lg:[direction:ltr]': i % 2 !== 0 }">
          <div class="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <img :src="images[service.id]" :alt="'Nettoyage professionnel ' + service.title.toLowerCase() + ' — Magic\'Oz'" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <!-- Content -->
        <div class="reveal reveal-delay-1" :class="{ 'lg:[direction:ltr]': i % 2 !== 0 }">
          <span class="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1 rounded-full mb-5">
            {{ service.title }}
          </span>
          <h2 class="font-display text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-dark)] leading-tight mb-4">{{ service.accroche }}</h2>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-2">{{ service.description }}</p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Traitement anti-odeur inclus. Résultat visible dès la fin de l'intervention.
            Temps de séchage : {{ service.drying }}.
          </p>

          <!-- Prices -->
          <div class="flex gap-6 flex-wrap mb-2">
            <div v-for="p in service.prices" :key="p.label">
              <div class="font-display text-3xl text-[var(--color-primary)]">{{ p.price }} €</div>
              <div class="text-xs text-[var(--color-text-muted)]">{{ p.label }}</div>
            </div>
          </div>
          <p v-if="service.option" class="text-xs text-[var(--color-text-muted)] mb-6">{{ service.option }}</p>
          <div class="mt-6">
            <router-link
              to="/reservation"
              class="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-md hover:-translate-y-px"
            >
              Réserver le nettoyage {{ service.title.toLowerCase() }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RBNB highlight -->
  <section class="py-16 bg-[var(--color-surface-warm)]">
    <div class="max-w-[800px] mx-auto px-6">
      <div class="reveal rounded-2xl p-10 text-center relative overflow-hidden" style="background: linear-gradient(135deg, #FFF8F0, #FFF1E6); border: 1px solid rgba(212,168,67,0.2);">
        <div class="inline-flex items-center gap-2 bg-[var(--color-accent)]/15 text-[#9A7A28] px-4 py-1 rounded-full text-[0.8rem] font-semibold mb-5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Locations saisonnières et gîtes
        </div>
        <h2 class="font-display text-[clamp(1.4rem,2.5vw,1.8rem)] text-[var(--color-dark)] mb-3">Rafraîchissement textiles pour RBNB et hébergements</h2>
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-[600px] mx-auto">
          Des textiles impeccables et rafraîchis pour une expérience premium pour vos voyageurs. Nous intervenons aussi bien chez les particuliers que chez les professionnels : maisons, appartements, gîtes, locations saisonnières, hôtels, bureaux.
        </p>
        <router-link to="/reservation" class="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg hover:bg-[#C49A38] transition-all hover:-translate-y-px">
          Réserver pour mon hébergement
        </router-link>
      </div>
    </div>
  </section>

  <CtaSection />
</div>
</template>
