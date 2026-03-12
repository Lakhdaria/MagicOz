<script setup>
import { company } from '@/data/siteData'
</script>

<template>
  <footer class="bg-[var(--color-dark)] text-white/60 pt-16 pb-6">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div>
          <span class="font-display text-2xl text-white block mb-3">Magic'Oz</span>
          <p class="text-sm leading-relaxed mb-4">{{ company.ecoText }}</p>
          <span class="inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-medium px-3 py-1.5 rounded-full">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c-4-3-8-6-8-11a8 8 0 0116 0c0 5-4 8-8 11z"/><path d="M12 11V8M10 13h4"/></svg>
            Produits écologiques
          </span>
        </div>

        <!-- Nav -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-sm text-white/60 hover:text-white transition-colors">Accueil</router-link></li>
            <li><router-link to="/prestations" class="text-sm text-white/60 hover:text-white transition-colors">Prestations</router-link></li>
            <li><router-link to="/methode" class="text-sm text-white/60 hover:text-white transition-colors">Méthode</router-link></li>
            <li><router-link to="/tarifs" class="text-sm text-white/60 hover:text-white transition-colors">Tarifs</router-link></li>
            <li><router-link to="/faq" class="text-sm text-white/60 hover:text-white transition-colors">FAQ</router-link></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4">Services</h4>
          <ul class="space-y-2">
            <li><router-link to="/prestations#canape" class="text-sm text-white/60 hover:text-white transition-colors">Nettoyage canapé</router-link></li>
            <li><router-link to="/prestations#matelas" class="text-sm text-white/60 hover:text-white transition-colors">Nettoyage matelas</router-link></li>
            <li><router-link to="/prestations#tapis" class="text-sm text-white/60 hover:text-white transition-colors">Nettoyage tapis</router-link></li>
            <li><router-link to="/prestations#fauteuil" class="text-sm text-white/60 hover:text-white transition-colors">Nettoyage fauteuil</router-link></li>
            <li><router-link to="/reservation" class="text-sm text-white/60 hover:text-white transition-colors">Réserver en ligne</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contact</h4>
          <div class="space-y-3">
            <div class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 mt-0.5 text-[var(--color-primary-muted)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a :href="'tel:' + company.phoneFull" class="hover:text-white transition-colors">{{ company.phone }}</a>
            </div>
            <div class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 mt-0.5 text-[var(--color-primary-muted)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              <a :href="'mailto:' + company.email" class="hover:text-white transition-colors break-all">{{ company.email }}</a>
            </div>
            <div class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 mt-0.5 text-[var(--color-primary-muted)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{{ company.city }} ({{ company.region }})</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-4 text-xs">
        <span>&copy; 2025 Magic'Oz. Tous droits réservés.</span>
        <span>{{ company.hours }}</span>
      </div>
    </div>
  </footer>
</template>
