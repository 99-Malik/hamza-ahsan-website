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
      command: 'event' | 'js' | 'config' | 'set',
      targetId: string | Date | 'user_data',
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        transaction_id?: string;
        allow_enhanced_conversions?: boolean;
        email?: string;
        phone_number?: string;
        address?: {
          first_name?: string;
          last_name?: string;
          street?: string;
          city?: string;
          region?: string;
          postal_code?: string;
          country?: string;
        };
      } | {
        email?: string;
        phone_number?: string;
        address?: {
          first_name?: string;
          last_name?: string;
          street?: string;
          city?: string;
          region?: string;
          postal_code?: string;
          country?: string;
        };
      }
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Normalize phone number to E.164 format
 * E.164 format: +[country code][number] (11-15 digits total)
 */
const normalizePhoneNumber = (phone: string): string | null => {
  if (!phone) return null;
  
  // Remove all non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // If doesn't start with +, add +971 for UAE
  if (!cleaned.startsWith('+')) {
    // Remove leading zeros
    cleaned = cleaned.replace(/^0+/, '');
    // Add UAE country code if not present
    if (!cleaned.startsWith('971')) {
      cleaned = '971' + cleaned;
    }
    cleaned = '+' + cleaned;
  }
  
  // Validate E.164 format (11-15 digits after +)
  const digits = cleaned.replace('+', '');
  if (digits.length >= 11 && digits.length <= 15 && /^\d+$/.test(digits)) {
    return cleaned;
  }
  
  return null;
};

/**
 * Normalize email address
 */
const normalizeEmail = (email: string): string | null => {
  if (!email) return null;
  const trimmed = email.trim().toLowerCase();
  // Basic email validation
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return trimmed;
  }
  return null;
};

/**
 * Split full name into first and last name
 */
const splitName = (fullName: string): { first_name?: string; last_name?: string } => {
  if (!fullName) return {};
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { first_name: parts[0] };
  }
  return {
    first_name: parts[0],
    last_name: parts.slice(1).join(' ')
  };
};

/**
 * Set user data for enhanced conversions
 * Call this before tracking conversions to improve accuracy
 */
export const setUserData = (userData: {
  email?: string;
  phone?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
}) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    const user_data: any = {};
    
    // Normalize and add email
    if (userData.email) {
      const normalizedEmail = normalizeEmail(userData.email);
      if (normalizedEmail) {
        user_data.email = normalizedEmail;
      }
    }
    
    // Normalize and add phone
    if (userData.phone) {
      const normalizedPhone = normalizePhoneNumber(userData.phone);
      if (normalizedPhone) {
        user_data.phone_number = normalizedPhone;
      }
    }
    
    // Add name information
    if (userData.name) {
      const nameParts = splitName(userData.name);
      if (nameParts.first_name) {
        user_data.address = {
          ...user_data.address,
          first_name: nameParts.first_name,
        };
      }
      if (nameParts.last_name) {
        user_data.address = {
          ...user_data.address,
          last_name: nameParts.last_name,
        };
      }
    } else {
      if (userData.firstName) {
        user_data.address = {
          ...user_data.address,
          first_name: userData.firstName.trim(),
        };
      }
      if (userData.lastName) {
        user_data.address = {
          ...user_data.address,
          last_name: userData.lastName.trim(),
        };
      }
    }
    
    // Only set user_data if we have at least email or phone
    if (user_data.email || user_data.phone_number) {
      window.gtag('set', 'user_data', user_data);
      console.log('Enhanced conversions user data set:', user_data);
    }
  } catch (error) {
    console.error('Error setting user data for enhanced conversions:', error);
  }
};

/**
 * Track a phone call conversion with optional user data
 * Call this function when a user clicks on a phone call button
 * @param userData - Optional user data for enhanced conversions
 */
export const trackPhoneCallConversion = (userData?: {
  email?: string;
  phone?: string;
  name?: string;
}) => {
  // Set user data for enhanced conversions if provided
  if (userData) {
    setUserData(userData);
  }
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
      value: 3500.0,
      currency: 'PKR', // Pakistani Rupees
    });

    console.log('Phone call conversion tracked:', { id, label, value: 3500 });
  } catch (error) {
    console.error('Error tracking phone call conversion:', error);
  }
};

/**
 * Track a WhatsApp message conversion with optional user data
 * Call this function when a user clicks on a WhatsApp button
 * @param userData - Optional user data for enhanced conversions
 */
export const trackWhatsAppConversion = (userData?: {
  email?: string;
  phone?: string;
  name?: string;
}) => {
  // Set user data for enhanced conversions if provided
  if (userData) {
    setUserData(userData);
  }
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
      value: 3500.0,
      currency: 'PKR', // Pakistani Rupees
    });

    console.log('WhatsApp conversion tracked:', { id, label, value: 3500 });
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
  currency: string = 'PKR'
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

