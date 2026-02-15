<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const menuReady = ref(false)
const hoveredIndex = ref(null)

const navLinks = [
  { to: '/', label: 'Accueil', num: '01' },
  { to: '/prestations', label: 'Prestations', num: '02' },
  { to: '/methode', label: 'Méthode', num: '03' },
  { to: '/tarifs', label: 'Tarifs', num: '04' },
  { to: '/faq', label: 'FAQ', num: '05' },
  { to: '/contact', label: 'Contact', num: '06' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleMenu() {
  if (isMenuOpen.value) {
    closeMenu()
  } else {
    isMenuOpen.value = true
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      setTimeout(() => { menuReady.value = true }, 50)
    })
  }
}

function closeMenu() {
  menuReady.value = false
  setTimeout(() => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }, 500)
}

watch(() => route.path, () => {
  if (isMenuOpen.value) closeMenu()
})

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- Header bar -->
  <header
    class="fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-300"
    :class="[
      isScrolled && !isMenuOpen ? 'shadow-sm' : '',
      isMenuOpen ? '' : 'border-b',
    ]"
    :style="{
      background: isMenuOpen ? 'transparent' : 'rgba(250,250,247,0.92)',
      backdropFilter: isMenuOpen ? 'none' : 'blur(20px)',
      WebkitBackdropFilter: isMenuOpen ? 'none' : 'blur(20px)',
      borderColor: isScrolled && !isMenuOpen ? 'var(--color-border-light)' : 'transparent',
    }"
  >
    <div class="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between relative z-[110]">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2 no-underline transition-colors duration-300"
        aria-label="Magic'Oz — Accueil"
        @click="isMenuOpen && closeMenu()"
      >
        <div
          class="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-500"
          :class="isMenuOpen ? 'bg-white text-[var(--color-primary)]' : 'bg-[var(--color-primary)] text-white'"
        >
          M
        </div>
        <span
          class="font-display text-2xl transition-colors duration-500"
          :class="isMenuOpen ? 'text-white' : 'text-[var(--color-primary)]'"
        >
          Magic'Oz
        </span>
      </router-link>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navigation principale">
        <ul class="flex gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <router-link
              :to="link.to"
              class="text-[0.9rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors relative group"
              active-class="!text-[var(--color-primary)]"
            >
              {{ link.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
            </router-link>
          </li>
        </ul>
        <router-link
          to="/reservation"
          class="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-primary)] text-white text-[0.95rem] font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-md hover:shadow-lg hover:-translate-y-px"
        >
          Réserver en ligne
        </router-link>
      </nav>

      <!-- Burger -->
      <button
        class="lg:hidden relative w-10 h-10 flex items-center justify-center z-[120]"
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      >
        <div class="relative w-6 h-5">
          <span
            class="absolute left-0 w-full h-[2px] rounded-full transition-all duration-500"
            style="transition-timing-function: cubic-bezier(0.77,0,0.18,1);"
            :class="isMenuOpen ? 'top-[9px] rotate-45 bg-white' : 'top-0 bg-[var(--color-dark)]'"
          ></span>
          <span
            class="absolute left-0 top-[9px] h-[2px] rounded-full transition-all duration-300"
            :class="isMenuOpen ? 'w-0 opacity-0 bg-white' : 'w-full opacity-100 bg-[var(--color-dark)]'"
          ></span>
          <span
            class="absolute left-0 w-full h-[2px] rounded-full transition-all duration-500"
            style="transition-timing-function: cubic-bezier(0.77,0,0.18,1);"
            :class="isMenuOpen ? 'top-[9px] -rotate-45 bg-white' : 'top-[18px] bg-[var(--color-dark)]'"
          ></span>
        </div>
      </button>
    </div>
  </header>

  <!-- Fullscreen overlay menu -->
  <Teleport to="body">
    <div v-if="isMenuOpen" class="fixed inset-0 z-[90]">
      <!-- Background -->
      <div
        class="absolute inset-0 transition-all duration-700"
        style="transition-timing-function: cubic-bezier(0.77,0,0.18,1);"
        :class="menuReady ? 'opacity-100' : 'opacity-0'"
      >
        <div class="absolute inset-0" style="background: linear-gradient(135deg, #0F3D2B 0%, #1B6B4A 40%, #134D35 100%);"></div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full transition-all duration-1000 ease-out"
        :class="menuReady ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
        style="background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);"
      ></div>
      <div
        class="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full transition-all duration-1000 ease-out"
        :style="{ transitionDelay: '100ms' }"
        :class="menuReady ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
        style="background: radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%);"
      ></div>

      <!-- Particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="n in 12"
          :key="n"
          class="absolute rounded-full bg-white/10 transition-all ease-out"
          :class="menuReady ? 'opacity-100' : 'opacity-0'"
          :style="{
            left: (10 + (n * 7.3) % 80) + '%',
            top: (5 + (n * 11.7) % 85) + '%',
            transitionDuration: (600 + n * 80) + 'ms',
            transitionDelay: (100 + n * 50) + 'ms',
            transform: menuReady ? 'scale(1)' : 'scale(0)',
            width: (n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : 1) + 'px',
            height: (n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : 1) + 'px',
          }"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 pt-[72px]">
        <nav class="flex-1 flex flex-col justify-center" role="navigation" aria-label="Menu principal">
          <ul class="space-y-1 sm:space-y-2">
            <li v-for="(link, i) in navLinks" :key="link.to">
              <router-link
                :to="link.to"
                class="group flex items-baseline gap-3 sm:gap-4 py-2 sm:py-3 transition-all"
                :class="menuReady ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
                :style="{
                  transitionDuration: '600ms',
                  transitionDelay: (150 + i * 80) + 'ms',
                  transitionTimingFunction: 'cubic-bezier(0.77,0,0.18,1)',
                }"
                @mouseenter="hoveredIndex = i"
                @mouseleave="hoveredIndex = null"
                @click="closeMenu"
              >
                <span
                  class="text-xs font-mono w-6 transition-colors duration-300"
                  :class="hoveredIndex === i || route.path === link.to ? 'text-[var(--color-accent)]' : 'text-white/30'"
                >
                  {{ link.num }}
                </span>
                <span
                  class="font-display text-white leading-none transition-all duration-300"
                  :class="[
                    hoveredIndex === i ? 'translate-x-3' : '',
                    hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30' : '',
                  ]"
                  style="font-size: clamp(2rem, 7vw, 3.5rem);"
                >
                  {{ link.label }}
                </span>
                <span
                  class="hidden sm:block h-[2px] bg-[var(--color-accent)] transition-all duration-500 ease-out ml-4"
                  :class="hoveredIndex === i ? 'w-16 opacity-100' : 'w-0 opacity-0'"
                ></span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Bottom -->
        <div
          class="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 transition-all duration-700"
          :style="{ transitionDelay: '500ms' }"
          :class="menuReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="space-y-1">
            <a href="tel:+33749895456" class="block text-white/60 text-sm hover:text-white transition-colors">07 49 89 54 56</a>
            <a href="mailto:magicoz.cleaning.contact@gmail.com" class="block text-white/60 text-sm hover:text-white transition-colors">magicoz.cleaning.contact@gmail.com</a>
          </div>
          <router-link
            to="/reservation"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg hover:bg-[#C49A38] transition-all"
            @click="closeMenu"
          >
            Réserver en ligne
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </Teleport>
</template>
