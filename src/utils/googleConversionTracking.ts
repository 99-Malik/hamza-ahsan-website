/**
 * Google Ads Conversion Tracking Utility
 * 
 * This file contains functions to track conversions for Google Ads.
 * Conversions are tracked when users click on call or WhatsApp buttons.
 */

import { googleAdsConfig, ENABLE_CONVERSION_TRACKING } from '@/config/googleAds';

/**
 * Declare gtag function for TypeScript
 */
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'js' | 'config',
      targetId: string | Date,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        transaction_id?: string;
      }
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a phone call conversion
 * Call this function when a user clicks on a phone call button
 */
export const trackPhoneCallConversion = () => {
  if (!ENABLE_CONVERSION_TRACKING) {
    console.log('Conversion tracking is disabled');
    return;
  }

  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Tag (gtag) is not loaded. Conversion tracking skipped.');
    return;
  }

  try {
    const { id, label } = googleAdsConfig.phoneCallConversion;
    
    // Check if label is still placeholder
    if (label === 'YOUR_PHONE_CALL_LABEL') {
      console.warn('Phone call conversion label not configured. Please update googleAds.ts');
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: `${id}/${label}`,
      value: 1.0,
      currency: 'AED', // Change to your currency if needed
    });

    console.log('Phone call conversion tracked:', { id, label });
  } catch (error) {
    console.error('Error tracking phone call conversion:', error);
  }
};

/**
 * Track a WhatsApp message conversion
 * Call this function when a user clicks on a WhatsApp button
 */
export const trackWhatsAppConversion = () => {
  if (!ENABLE_CONVERSION_TRACKING) {
    console.log('Conversion tracking is disabled');
    return;
  }

  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Tag (gtag) is not loaded. Conversion tracking skipped.');
    return;
  }

  try {
    const { id, label } = googleAdsConfig.whatsAppConversion;
    
    // Check if label is still placeholder
    if (label === 'YOUR_WHATSAPP_LABEL') {
      console.warn('WhatsApp conversion label not configured. Please update googleAds.ts');
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: `${id}/${label}`,
      value: 1.0,
      currency: 'AED', // Change to your currency if needed
    });

    console.log('WhatsApp conversion tracked:', { id, label });
  } catch (error) {
    console.error('Error tracking WhatsApp conversion:', error);
  }
};

/**
 * Track a custom conversion event
 * Use this for any other conversion types you want to track
 */
export const trackCustomConversion = (
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency: string = 'AED'
) => {
  if (!ENABLE_CONVERSION_TRACKING) {
    console.log('Conversion tracking is disabled');
    return;
  }

  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Tag (gtag) is not loaded. Conversion tracking skipped.');
    return;
  }

  try {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value || 1.0,
      currency: currency,
    });

    console.log('Custom conversion tracked:', { conversionId, conversionLabel, value });
  } catch (error) {
    console.error('Error tracking custom conversion:', error);
  }
};

