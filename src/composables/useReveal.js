import { onMounted, onBeforeUnmount, nextTick } from 'vue'

/**
 * useReveal — Safe scroll-triggered animations
 * 
 * CRITICAL DESIGN PRINCIPLE:
 * This system ONLY ADDS animations. It NEVER sets opacity:0.
 * If IntersectionObserver fails, content remains fully visible.
 * 
 * How it works:
 * 1. Elements have class="reveal" — they are fully visible by default
 * 2. When they scroll into view, JS adds class="reveal-animate"
 * 3. CSS @keyframes revealUp plays (fade + slide up)
 * 4. If JS never fires → content is visible anyway (no animation, no harm)
 */
export function useReveal() {
  let observer = null

  function setup() {
    if (observer) observer.disconnect()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '20px 0px -10px 0px' }
    )

    // Observe all .reveal elements that haven't been animated yet
    document.querySelectorAll('.reveal:not(.reveal-animate)').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    // nextTick ensures Vue has flushed the DOM
    nextTick(() => setup())
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
