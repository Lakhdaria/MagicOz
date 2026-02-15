import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Magic\'Oz — Nettoyage professionnel de textiles à domicile | Saint-Louis, Mulhouse, Bâle',
      description: 'Magic\'Oz élimine taches et odeurs de vos canapés, matelas et tapis par injection-extraction. Produits écologiques. Saint-Louis, Mulhouse, Bâle.',
    },
  },
  {
    path: '/prestations',
    name: 'prestations',
    component: () => import('@/views/PrestationsView.vue'),
    meta: {
      title: 'Prestations — Nettoyage canapé, matelas, tapis, fauteuil | Magic\'Oz',
      description: 'Nettoyage professionnel de canapé, matelas, tapis et fauteuil à domicile. Méthode injection-extraction, traitement anti-odeur offert.',
    },
  },
  {
    path: '/methode',
    name: 'methode',
    component: () => import('@/views/MethodeView.vue'),
    meta: {
      title: 'Méthode injection-extraction et produits écologiques | Magic\'Oz',
      description: 'Procédure de nettoyage premium en 6 étapes : diagnostic, dépoussiérage, prétraitement, brossage, injection-extraction, rinçage. Produits écologiques et biodégradables.',
    },
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    component: () => import('@/views/TarifsView.vue'),
    meta: {
      title: 'Tarifs nettoyage textile — À partir de 49€ | Magic\'Oz',
      description: 'Tarifs clairs et sans surprise. Canapé dès 89€, matelas dès 69€, tapis dès 49€. Traitement anti-odeur offert. -10% dès 3 prestations.',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: {
      title: 'Questions fréquentes — Nettoyage textile professionnel | Magic\'Oz',
      description: 'Réponses à vos questions : zone d\'intervention, méthode, temps de séchage, sécurité des produits, tarifs. Tout savoir avant de réserver.',
    },
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('@/views/ReservationView.vue'),
    meta: {
      title: 'Réserver en ligne — Nettoyage textile à domicile | Magic\'Oz',
      description: 'Réservez votre créneau de nettoyage textile en quelques clics. Confirmation par SMS ou appel. Intervention à domicile, du lundi au samedi.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact — Magic\'Oz | Saint-Louis (Haut-Rhin)',
      description: 'Contactez Magic\'Oz pour un devis gratuit. Téléphone, email, adresse. 3 rue Adalbert de Baerenfels, 68300 Saint-Louis.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

// Dynamic meta tags
router.beforeEach((to) => {
  document.title = to.meta.title || 'Magic\'Oz'
  const desc = document.querySelector('meta[name="description"]')
  if (desc && to.meta.description) {
    desc.setAttribute('content', to.meta.description)
  }
})

export default router
