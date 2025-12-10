import { siteConfig } from '@/config/siteConfig'
import { trackPhoneCallConversion, trackWhatsAppConversion } from './googleConversionTracking'

/**
 * Initiates a phone call and tracks the conversion for Google Ads
 */
export const makePhoneCall = () => {
  // Track conversion before initiating call
  trackPhoneCallConversion()
  
  // Initiate phone call
  window.location.href = `tel:${siteConfig.phoneNumber}`
}

/**
 * Opens WhatsApp and tracks the conversion for Google Ads
 * @param customMessage - Optional custom message to send via WhatsApp
 */
export const openWhatsApp = (customMessage?: string) => {
  // Track conversion before opening WhatsApp
  trackWhatsAppConversion()
  
  const defaultMessage = "Hey! I want Home Appliance Repair Services"
  const message = customMessage || defaultMessage
  const phoneNumber = siteConfig.phoneNumber.replace(/\D/g, '') // Remove non-digits
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

export const sendEmail = (subject?: string, body?: string) => {
  const defaultSubject = "Appliance Repair Service Inquiry"
  const defaultBody = "Hello, I need appliance repair services. Please contact me."
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject || defaultSubject)}&body=${encodeURIComponent(body || defaultBody)}`
  window.location.href = mailtoUrl
}