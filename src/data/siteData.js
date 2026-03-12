// ============================================
// MAGIC'OZ — Site Data (Single Source of Truth)
// ============================================

export const company = {
  name: "Magic'Oz",
  tagline: 'For a clean life',
  phone: '07 49 89 54 56',
  phoneFull: '+33749895456',
  email: 'magicoz.cleaning.contact@gmail.com',
  city: 'Saint-Louis',
  region: 'Haut-Rhin',
  hours: 'Lundi au samedi, 8h – 20h',
  accroche: "Chez Magic'Oz, nous ne masquons pas les odeurs ni les taches. Grâce à nos machines professionnelles, nous éliminons à la source, en profondeur, jusque dans les fibres et la mousse.",
  ecoText: "Nous privilégions essentiellement des produits respectueux de l'environnement, des animaux et des enfants. Selon les situations, des solutions professionnelles adaptées peuvent être utilisées afin de garantir un résultat optimal.",
}

export const services = [
  {
    id: 'canape',
    title: 'Canapé',
    icon: 'couch',
    accroche: 'Nettoyage en profondeur, une vraie remise à neuf de votre canapé.',
    description: "Notre méthode d'injection-extraction professionnelle nettoie votre canapé jusqu'au cœur des fibres et de la mousse. Taches alimentaires, auréoles, transpiration, urines : la majorité des salissures sont éliminées durablement.",
    drying: '4 à 8h',
    prices: [
      { label: 'Canapé 2 à 3 places', price: 89 },
      { label: 'Canapé 4+ places / angle', price: 129 },
    ],
    option: 'Option nettoyage convertible : +15 €',
  },
  {
    id: 'fauteuil',
    title: 'Fauteuil et chaises',
    icon: 'armchair',
    accroche: 'Les fibres retrouvent leur éclat, vos fauteuils et chaises sont nettoyés en profondeur pour plus de confort et de fraîcheur.',
    description: "Fauteuils et chaises rembourrées nettoyés en profondeur par injection-extraction. Les fibres retrouvent leur éclat d'origine, les odeurs sont éliminées. Adapté à tous types de revêtements textiles.",
    drying: '4 à 8h',
    prices: [
      { label: 'Fauteuil', price: 55 },
    ],
  },
  {
    id: 'matelas',
    title: 'Matelas',
    icon: 'bed',
    accroche: 'Transpiration, acariens, bactéries : un matelas assaini en profondeur pour des nuits plus douces.',
    description: "Un matelas accumule transpiration, acariens, bactéries et allergènes. Notre méthode élimine ces résidus en profondeur, jusque dans les mousses. Le traitement anti-odeur est inclus pour un résultat complet.",
    drying: '6 à 10h',
    prices: [
      { label: 'Matelas simple (1 personne)', price: 69 },
      { label: 'Matelas double (2 personnes)', price: 99 },
    ],
  },
  {
    id: 'tapis',
    title: 'Tapis',
    icon: 'carpet',
    accroche: 'Les couleurs revivent, l\'hygiène revient, vos tapis nettoyés en profondeur du cœur des fibres à la surface.',
    description: "Vos tapis sont nettoyés en profondeur par injection-extraction. Les couleurs retrouvent leur éclat, les odeurs et salissures incrustées sont éliminées. Traitement anti-odeur inclus.",
    drying: '6 à 12h',
    prices: [
      { label: 'Petit tapis (< 2 m²)', price: 49 },
      { label: 'Tapis moyen (2–5 m²)', price: 89 },
      { label: 'Grand tapis (> 5 m²)', price: 129 },
    ],
  },
]

export const allPrices = [
  { service: 'Canapé 2 à 3 places', price: 89 },
  { service: 'Canapé 4+ places / angle', price: 129 },
  { service: 'Fauteuil', price: 55 },
  { service: 'Matelas simple (1 personne)', price: 69 },
  { service: 'Matelas double (2 personnes)', price: 99 },
  { service: 'Petit tapis (< 2 m²)', price: 49 },
  { service: 'Tapis moyen (2–5 m²)', price: 89 },
  { service: 'Grand tapis (> 5 m²)', price: 129 },
]

export const processSteps = [
  {
    step: 1,
    title: 'Inspection et diagnostic',
    text: 'Identification du textile, repérage des taches spécifiques.',
  },
  {
    step: 2,
    title: 'Dépoussiérage approfondi',
    text: 'Élimination des poils, poussières et particules sèches.',
  },
  {
    step: 3,
    title: 'Prétraitement ciblé',
    text: 'Traitement des urines, transpiration, taches organiques et mauvaises odeurs.',
  },
  {
    step: 4,
    title: 'Brossage mécanique doux',
    text: 'Activation de la solution injectée, décrochage des salissures incrustées.',
  },
  {
    step: 5,
    title: 'Injection-extraction',
    text: 'Nettoyage au cœur du textile par machine professionnelle. Extraction des allergènes, acariens, bactéries, urines, transpirations et résidus polluants.',
  },
  {
    step: 6,
    title: 'Rinçage à l\'eau claire',
    text: 'Élimination des résidus de produits. Textiles plus doux, séchage plus rapide.',
  },
]

export const antiOdeurTargets = [
  'Bactéries', 'Acariens', 'Allergènes', 'Transpiration',
  'Urines d\'animaux', 'Taches et auréoles', 'Mauvaises odeurs', 'Résidus biologiques',
]

export const zones = [
  'Saint-Louis et environs',
  'Mulhouse et environs',
  'Altkirch et environs',
  'Bâle et environs',
  'Weil am Rhein et environs',
]

export const faqItems = [
  {
    question: 'Quels services de nettoyage textile proposez-vous ?',
    answer: 'Nous proposons des prestations de nettoyage professionnel de canapé, matelas, fauteuil, chaises rembourrées et tapis.',
  },
  {
    question: 'Intervenez-vous chez les particuliers et les professionnels ?',
    answer: 'Oui, nous intervenons aussi bien chez les particuliers que chez les professionnels : maisons, appartements, gîtes, locations saisonnières, hôtels, bureaux.',
  },
  {
    question: 'Dans quelle zone intervenez-vous ?',
    answer: 'Nous intervenons dans un rayon de 30 km autour de Saint-Louis (Haut-Rhin). Cela inclut Mulhouse, Altkirch, Bâle et Weil am Rhein.',
  },
  {
    question: 'Faut-il être présent pendant la prestation ?',
    answer: "Votre présence n'est pas obligatoire après l'état des lieux initial. Nous pouvons intervenir en toute autonomie si l'accès est facilité.",
  },
  {
    question: 'Le nettoyage enlève-t-il les taches incrustées ?',
    answer: "Notre méthode professionnelle permet d'éliminer la majorité des taches anciennes, auréoles, traces de transpiration, taches alimentaires et urines. Certaines taches très anciennes peuvent être atténuées sans garantie de disparition totale.",
  },
  {
    question: 'Le nettoyage élimine-t-il les mauvaises odeurs ?',
    answer: "Grâce à notre traitement spécial anti-odeur, notre méthode permet d'éliminer efficacement les odeurs de transpiration, animaux, tabac, humidité et urine.",
  },
  {
    question: 'Combien de temps faut-il aux textiles pour sécher ?',
    answer: "Le temps de séchage varie selon le textile, la fibre, la température et l'aération de la pièce. Il faut compter en moyenne entre 4h et 12h. Canapé/fauteuil : 4 à 8h. Matelas : 6 à 10h. Tapis : 6 à 12h.",
  },
  {
    question: 'Pourquoi faut-il faire nettoyer les textiles ?',
    answer: "Le nettoyage régulier des éléments textiles permet d'éliminer en profondeur les acariens, bactéries, allergènes, sueurs, peaux mortes et mauvaises odeurs, en prévention des risques d'allergie, pour désinfecter les fibres et hygiéniser l'environnement.",
  },
  {
    question: 'La prestation logement vide, cela comprend quoi ?',
    answer: 'Nettoyage complet des sols, des sanitaires, de la cuisine, vitres accessibles, etc. Prestation et évaluation sur devis personnalisé.',
  },
  {
    question: 'Les produits sont-ils sans danger pour les enfants et animaux ?',
    answer: "Oui, nos produits sont conçus essentiellement pour être sans danger pour les enfants et les animaux, une fois le nettoyage et le séchage terminés.",
  },
  {
    question: 'Quelle méthode de nettoyage utilisez-vous ?',
    answer: "Nous travaillons avec des machines professionnelles reconnues dans ce secteur. Grâce à la méthode d'injection-extraction, le textile est assaini jusqu'au cœur des fibres et des mousses.",
  },
  {
    question: 'Le résultat est-il visible immédiatement ?',
    answer: "Oui, le résultat est visible dès la fin de l'intervention : odeurs éliminées, textiles ravivés et plus sains.",
  },
]

export const results = [
  'Taches et odeurs éliminées durablement',
  'Canapés, matelas et tapis visiblement rafraîchis',
  'Textiles respectés et durée de vie prolongée',
  'Intérieur sain, sûr pour les enfants et les animaux',
]

// Images libres de droits — Unsplash (licence gratuite commerciale)
export const images = {
  hero: 'https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg?auto=compress&cs=tinysrgb&w=800',
  canape: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',
  fauteuil: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=80',
  matelas: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
  tapis: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=700&q=80',
  method: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
  eco: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
  result: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80',
}

export const bookingOptions = [
  { value: 'canape-2-3', label: 'Canapé 2 à 3 places — 89 €', price: 89 },
  { value: 'canape-4-angle', label: 'Canapé 4+ places / angle — 129 €', price: 129 },
  { value: 'fauteuil', label: 'Fauteuil — 55 €', price: 55 },
  { value: 'matelas-simple', label: 'Matelas simple — 69 €', price: 69 },
  { value: 'matelas-double', label: 'Matelas double — 99 €', price: 99 },
  { value: 'tapis-petit', label: 'Petit tapis (< 2 m²) — 49 €', price: 49 },
  { value: 'tapis-moyen', label: 'Tapis moyen (2–5 m²) — 89 €', price: 89 },
  { value: 'tapis-grand', label: 'Grand tapis (> 5 m²) — 129 €', price: 129 },
]
