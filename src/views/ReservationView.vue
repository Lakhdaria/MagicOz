<script setup>
import { ref, computed } from 'vue'
import { useReveal } from '@/composables/useReveal'
import { generateQuotePDF, sendQuoteEmail } from '@/composables/useQuote'
import { bookingOptions } from '@/data/siteData'
import SectionHeader from '@/components/SectionHeader.vue'
import ToastNotification from '@/components/ToastNotification.vue'

useReveal()

const step = ref('form') // form | loading | success | error
const toastShow = ref(false)
const toastType = ref('loading')
const toastMessage = ref('')
const pdfUrl = ref(null)
const pdfFilename = ref('')

const form = ref({
  prestation: '',
  creneau: '',
  periode: '',
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  adresse: '',
  infos: '',
})

const selectedOption = computed(() => {
  return bookingOptions.find(o => o.value === form.value.prestation)
})

const selectedPrice = computed(() => selectedOption.value?.price ?? null)
const selectedLabel = computed(() => {
  if (!selectedOption.value) return ''
  return selectedOption.value.label.split(' — ')[0]
})

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

function showToast(type, message, duration = 0) {
  toastType.value = type
  toastMessage.value = message
  toastShow.value = true
  if (duration > 0) {
    setTimeout(() => { toastShow.value = false }, duration)
  }
}

async function handleSubmit() {
  if (!selectedOption.value) return

  step.value = 'loading'
  showToast('loading', 'Génération de votre devis en cours...')

  try {
    // Generate PDF
    await new Promise(r => setTimeout(r, 800)) // brief delay for UX
    const pdf = generateQuotePDF(form.value, selectedLabel.value, selectedPrice.value)

    // Create downloadable URL
    pdfUrl.value = URL.createObjectURL(pdf.blob)
    pdfFilename.value = pdf.filename

    // Attempt to send email
    showToast('loading', 'Envoi de votre devis par email...')
    const emailResult = await sendQuoteEmail(
      form.value,
      selectedLabel.value,
      selectedPrice.value,
      pdf.base64,
      pdf.quoteNum
    )

    // Success
    toastShow.value = false
    await new Promise(r => setTimeout(r, 200))

    step.value = 'success'

    if (emailResult.sent) {
      showToast('success', 'Devis envoyé par email avec succès.', 5000)
    } else {
      showToast('success', 'Devis généré. Téléchargez-le ci-dessous.', 5000)
    }
  } catch (err) {
    console.error(err)
    step.value = 'error'
    showToast('error', 'Une erreur est survenue. Veuillez réessayer.', 6000)
  }
}

function downloadPdf() {
  if (!pdfUrl.value) return
  const a = document.createElement('a')
  a.href = pdfUrl.value
  a.download = pdfFilename.value
  a.click()
}

function resetForm() {
  step.value = 'form'
  form.value = {
    prestation: '', creneau: '', periode: '',
    nom: '', prenom: '', telephone: '',
    email: '', adresse: '', infos: '',
  }
  if (pdfUrl.value) {
    URL.revokeObjectURL(pdfUrl.value)
    pdfUrl.value = null
  }
}

const inputClass = 'w-full px-4 py-3 border-[1.5px] border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text-main)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-200'
</script>

<template>
<div>
  <ToastNotification
    :show="toastShow"
    :type="toastType"
    :message="toastMessage"
    @close="toastShow = false"
  />

  <div class="h-[calc(72px+2rem)]"></div>

  <section class="py-14">
    <div class="max-w-[1200px] mx-auto px-6">
      <SectionHeader
        label="Réservation"
        subtitle="Sélectionnez votre prestation, choisissez un créneau et renseignez vos coordonnées. Votre devis PDF est généré automatiquement."
        tag="h1"
      >
        Réserver en ligne
      </SectionHeader>
    </div>
  </section>

  <section class="pb-20">
    <div class="max-w-[700px] mx-auto px-6">

      <!-- ===== SUCCESS STATE ===== -->
      <Transition
        enter-active-class="transition-all duration-600 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
      >
        <div v-if="step === 'success'" class="bg-white rounded-2xl p-10 shadow-lg border border-[var(--color-border-light)] text-center">
          <!-- Animated success circle -->
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center success-ring">
            <svg class="w-10 h-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M20 6L9 17l-5-5" class="success-check" />
            </svg>
          </div>

          <h2 class="font-display text-2xl text-[var(--color-dark)] mb-3">Demande envoyée</h2>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Votre devis a été généré. Notre équipe vous contactera dans les plus brefs délais par SMS ou appel pour confirmer votre créneau.
          </p>

          <!-- PDF download -->
          <div class="bg-[var(--color-surface-warm)] rounded-xl p-5 mb-6">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6M9 15l3 3 3-3"/>
                  </svg>
                </div>
                <div class="text-left">
                  <div class="text-sm font-semibold text-[var(--color-dark)]">{{ pdfFilename }}</div>
                  <div class="text-xs text-[var(--color-text-muted)]">Document PDF</div>
                </div>
              </div>
              <button
                @click="downloadPdf"
                class="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all hover:-translate-y-px"
              >
                Télécharger
              </button>
            </div>
          </div>

          <div class="bg-[var(--color-primary-light)] rounded-lg p-4 mb-6">
            <p class="text-xs text-[var(--color-primary-dark)] leading-relaxed">
              Le créneau sélectionné est indicatif, sous réserve de confirmation. Vous recevrez un SMS ou un appel pour finaliser les détails de la prestation.
            </p>
          </div>

          <button
            @click="resetForm"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
          >
            Nouvelle demande
          </button>
        </div>
      </Transition>

      <!-- ===== FORM ===== -->
      <Transition
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <form
          v-if="step === 'form' || step === 'loading'"
          @submit.prevent="handleSubmit"
          class="bg-white rounded-2xl p-10 shadow-lg border border-[var(--color-border-light)] reveal"
          :class="{ 'pointer-events-none opacity-60': step === 'loading' }"
        >
          <!-- 1. Prestation -->
          <h2 class="font-display text-xl text-[var(--color-dark)] mb-5 flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">1</span>
            Choix de la prestation
          </h2>
          <div class="mb-8">
            <label for="prestation" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Prestation souhaitée</label>
            <select id="prestation" v-model="form.prestation" required :class="inputClass">
              <option value="" disabled>Sélectionner une prestation</option>
              <option v-for="opt in bookingOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="selectedPrice" class="mt-3 flex items-baseline gap-2">
                <span class="font-display text-3xl text-[var(--color-primary)]">{{ selectedPrice }} €</span>
                <span class="text-xs text-[var(--color-text-muted)]">Traitement anti-odeur offert</span>
              </div>
            </Transition>
          </div>

          <!-- 2. Créneau -->
          <h2 class="font-display text-xl text-[var(--color-dark)] mb-5 flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">2</span>
            Choix du créneau
          </h2>
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label for="creneau" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Jour souhaité</label>
              <select id="creneau" v-model="form.creneau" required :class="inputClass">
                <option value="" disabled>Sélectionner un jour</option>
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
              </select>
            </div>
            <div>
              <label for="periode" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Période</label>
              <select id="periode" v-model="form.periode" required :class="inputClass">
                <option value="" disabled>Sélectionner</option>
                <option value="matin">Matin (8h – 13h)</option>
                <option value="apres-midi">Après-midi (13h – 20h)</option>
              </select>
            </div>
          </div>

          <!-- 3. Coordonnées -->
          <h2 class="font-display text-xl text-[var(--color-dark)] mb-5 flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">3</span>
            Vos coordonnées
          </h2>
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label for="nom" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Nom</label>
              <input id="nom" v-model="form.nom" type="text" required :class="inputClass" placeholder="Votre nom">
            </div>
            <div>
              <label for="prenom" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Prénom</label>
              <input id="prenom" v-model="form.prenom" type="text" required :class="inputClass" placeholder="Votre prénom">
            </div>
          </div>
          <div class="mb-4">
            <label for="telephone" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Téléphone</label>
            <input id="telephone" v-model="form.telephone" type="tel" required :class="inputClass" placeholder="06 00 00 00 00">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Adresse email</label>
            <input id="email" v-model="form.email" type="email" required :class="inputClass" placeholder="votre@email.fr">
          </div>
          <div class="mb-4">
            <label for="adresse" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Adresse postale</label>
            <input id="adresse" v-model="form.adresse" type="text" required :class="inputClass" placeholder="Rue, code postal, ville">
          </div>
          <div class="mb-8">
            <label for="infos" class="block text-sm font-semibold text-[var(--color-dark)] mb-2">Infos utiles (accès, parking, ascenseur, étage)</label>
            <textarea id="infos" v-model="form.infos" rows="3" :class="inputClass" style="resize: vertical;" placeholder="Indications utiles pour notre intervention"></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="step === 'loading'"
            class="w-full flex items-center justify-center gap-2 px-7 py-4 bg-[var(--color-primary)] text-white text-base font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <svg v-if="step === 'loading'" class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"/>
              <path d="M12 2a10 10 0 019.8 7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <template v-if="step === 'loading'">Génération en cours...</template>
            <template v-else>
              Obtenir mon devis gratuit
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </template>
          </button>

          <div class="mt-5 bg-[var(--color-primary-light)] rounded-lg p-4">
            <p class="text-xs text-[var(--color-primary-dark)] leading-relaxed">
              Le créneau sélectionné est indicatif, sous réserve de confirmation par notre équipe. Votre devis PDF sera généré automatiquement et disponible en téléchargement.
            </p>
          </div>
        </form>
      </Transition>
    </div>
  </section>
</div>
</template>

<style scoped>
.success-ring {
  animation: ringPulse 0.6s ease-out;
}

@keyframes ringPulse {
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}

.success-check {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: drawCheck 0.5s ease-out 0.3s forwards;
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}
</style>
