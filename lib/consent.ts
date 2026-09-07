export const CONSENT_STORAGE_KEY = 'vaiiya_cookie_consent'
export const CONSENT_CHANGED_EVENT = 'vaiiya-consent-changed'

export type ConsentChoice = 'accepted' | 'declined'

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === 'accepted' || value === 'declined' ? value : null
  } catch {
    // Private browsing / storage blocked — treat as "no choice yet".
    return null
  }
}

export function setStoredConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Ignore — worst case the banner reappears next visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }))
}
