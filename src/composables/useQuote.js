import jsPDF from 'jspdf'
import emailjs from '@emailjs/browser'
import { company } from '@/data/siteData'

/* ============================================================
 * EmailJS Configuration
 * ============================================================ */
const EMAILJS_SERVICE_ID  = 'service_n440mfs'
const EMAILJS_TEMPLATE_ID = 'template_rzmr4fa'
const EMAILJS_PUBLIC_KEY  = '6dlGEzX94CJI0k5L8'

/* ============================================================
 * PDF Generation
 * ============================================================ */
export function generateQuotePDF(formData, prestationLabel, price) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageWidth = 210
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  const today = new Date()
  const dateStr = today.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
  const quoteNum = 'DEV-' + today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + String(today.getDate()).padStart(2, '0') + '-' + String(Math.floor(Math.random() * 9000) + 1000)

  // Header bar
  doc.setFillColor(27, 107, 74)
  doc.rect(0, 0, pageWidth, 32, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(255, 255, 255)
  doc.text("Magic'Oz", margin, 18)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text('For a clean life', margin, 25)

  doc.setFontSize(8)
  doc.setTextColor(220, 240, 230)
  const rightX = pageWidth - margin
  doc.text(company.phone, rightX, 12, { align: 'right' })
  doc.text(company.email, rightX, 17, { align: 'right' })
  doc.text(company.address.street + ', ' + company.address.zip + ' ' + company.address.city, rightX, 22, { align: 'right' })

  let y = 44

  // Title
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.setTextColor(26, 26, 26)
  doc.text('DEVIS', margin, y)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(90, 90, 90)
  doc.text('N\u00B0 ' + quoteNum, margin + 42, y)
  y += 4
  doc.setFontSize(9)
  doc.text('Date : ' + dateStr, margin, y + 6)
  y += 16

  // Client box
  doc.setFillColor(248, 248, 245)
  doc.roundedRect(margin, y, contentWidth, 42, 3, 3, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(27, 107, 74)
  doc.text('CLIENT', margin + 6, y + 8)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(44, 44, 44)
  doc.text(formData.prenom + ' ' + formData.nom, margin + 6, y + 16)
  doc.setFontSize(9)
  doc.setTextColor(90, 90, 90)
  doc.text(formData.adresse, margin + 6, y + 23)
  doc.text(formData.telephone + '  |  ' + formData.email, margin + 6, y + 30)
  if (formData.infos) {
    doc.setFontSize(8)
    doc.setTextColor(138, 138, 138)
    const infosLines = doc.splitTextToSize('Acces : ' + formData.infos, contentWidth - 12)
    doc.text(infosLines, margin + 6, y + 37)
  }
  y += 52

  // Creneau
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(27, 107, 74)
  doc.text('CRENEAU SOUHAITE', margin, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(44, 44, 44)
  const periodeLabel = formData.periode === 'matin' ? 'Matin (8h - 13h)' : 'Apres-midi (13h - 20h)'
  doc.text(formData.creneau + '  -  ' + periodeLabel, margin, y)
  y += 4
  doc.setFontSize(8)
  doc.setTextColor(138, 138, 138)
  doc.text('Creneau indicatif, sous reserve de confirmation par notre equipe.', margin, y + 5)
  y += 16

  // Table
  doc.setFillColor(27, 107, 74)
  doc.roundedRect(margin, y, contentWidth, 10, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.text('PRESTATION', margin + 6, y + 7)
  doc.text('TARIF', rightX - 6, y + 7, { align: 'right' })
  y += 10

  doc.setFillColor(248, 248, 245)
  doc.rect(margin, y, contentWidth, 12, 'F')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(44, 44, 44)
  doc.text(prestationLabel, margin + 6, y + 8)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(27, 107, 74)
  doc.text(price + ' EUR', rightX - 6, y + 8, { align: 'right' })
  y += 12

  doc.setDrawColor(224, 221, 214)
  doc.rect(margin, y, contentWidth, 12, 'S')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(44, 44, 44)
  doc.text('Traitement anti-odeur', margin + 6, y + 8)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(27, 107, 74)
  doc.text('Offert', rightX - 6, y + 8, { align: 'right' })
  y += 12

  doc.setFillColor(27, 107, 74)
  doc.roundedRect(margin, y + 2, contentWidth, 14, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(255, 255, 255)
  doc.text('TOTAL TTC', margin + 6, y + 11)
  doc.setFontSize(14)
  doc.text(price + ' EUR', rightX - 6, y + 12, { align: 'right' })
  y += 26

  doc.setFillColor(245, 237, 212)
  doc.roundedRect(margin, y, contentWidth, 12, 2, 2, 'F')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(154, 122, 40)
  doc.text('-10% des 3 prestations le meme jour et a la meme adresse.', margin + 6, y + 8)
  y += 22

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(27, 107, 74)
  doc.text('METHODE', margin, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(90, 90, 90)
  const methodPoints = [
    'Methode professionnelle injection-extraction',
    'Produits essentiellement ecologiques et biodegradables',
    'Sans danger pour les enfants et les animaux apres sechage',
    'Resultat visible des la fin de l\'intervention',
  ]
  methodPoints.forEach((point) => {
    doc.text('*  ' + point, margin + 2, y)
    y += 5
  })

  // Footer
  y = 270
  doc.setDrawColor(224, 221, 214)
  doc.line(margin, y, pageWidth - margin, y)
  y += 5
  doc.setFontSize(7)
  doc.setTextColor(138, 138, 138)
  doc.text("Magic'Oz - 3 rue Adalbert de Baerenfels, 68300 Saint-Louis", pageWidth / 2, y, { align: 'center' })
  doc.text('Tel : 07 49 89 54 56 - Email : magicoz.cleaning.contact@gmail.com', pageWidth / 2, y + 4, { align: 'center' })
  doc.text('Devis gratuit et sans engagement. Validite : 30 jours.', pageWidth / 2, y + 8, { align: 'center' })

  const pdfBlob = doc.output('blob')
  const pdfBase64 = doc.output('datauristring').split(',')[1]

  return {
    blob: pdfBlob,
    base64: pdfBase64,
    filename: 'Devis_MagicOz_' + quoteNum + '.pdf',
    quoteNum,
  }
}

/* ============================================================
 * Email Sending
 * 
 * Key fix: pass publicKey as 4th argument to emailjs.send()
 * instead of relying on emailjs.init(). This is the most 
 * reliable method per EmailJS v4 docs:
 * https://www.emailjs.com/docs/sdk/send/
 * 
 * The 4th arg accepts either a string (publicKey) or an 
 * options object { publicKey: '...' }
 * ============================================================ */
export async function sendQuoteEmail(formData, prestationLabel, price, pdfBase64, quoteNum) {
  const periodeText = formData.periode === 'matin' ? 'Matin (8h - 13h)' : 'Apres-midi (13h - 20h)'
  const creneauText = formData.creneau + ' - ' + periodeText

  const templateParams = {
    to_email: 'sofiane.pro2004@gmail.com',
    from_name: formData.prenom + ' ' + formData.nom,
    name: formData.prenom + ' ' + formData.nom,
    client_name: formData.prenom + ' ' + formData.nom,
    client_email: formData.email,
    client_phone: formData.telephone,
    client_address: formData.adresse,
    prestation: prestationLabel,
    price: price + ' €',
    creneau: creneauText,
    quote_number: quoteNum,
    infos: formData.infos || 'Aucune information supplementaire',
    time: new Date().toLocaleString('fr-FR', {
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    }),
    message: '',
  }

  try {
    // Send to business — publicKey passed directly as 4th argument
    console.log('[MagicOz] Sending business email...')
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    console.log('[MagicOz] Business email sent:', result.status, result.text)

    // Send confirmation to client
    console.log('[MagicOz] Sending client email...')
    const clientResult = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        ...templateParams,
        to_email: formData.email,
        from_name: "Magic'Oz",
        name: "Magic'Oz",
        message: 'Votre demande de devis a bien ete enregistree. Notre equipe vous contactera dans les plus brefs delais.',
      },
      EMAILJS_PUBLIC_KEY
    )
    console.log('[MagicOz] Client email sent:', clientResult.status, clientResult.text)

    return { sent: true }
  } catch (error) {
    console.error('[MagicOz] Email failed:', error)
    console.error('[MagicOz] Error status:', error?.status)
    console.error('[MagicOz] Error text:', error?.text)
    return { sent: false, reason: 'send_failed', error }
  }
}
