/**
 * Google Ads Conversion Tracking Configuration
 * 
 * IMPORTANT: Replace the conversion labels below with your actual conversion labels
 * from your Google Ads account.
 * 
 * To find your conversion labels:
 * 1. Go to Google Ads → Tools & Settings → Conversions
 * 2. Click on your conversion action
 * 3. Click "Tag setup" → "Use Google Tag Manager" or "Install the tag yourself"
 * 4. Copy the "Conversion Label" value
 */

export const googleAdsConfig = {
  // Your Google Tag ID (should match the one in layout.tsx)
  tagId: 'AW-17711629593',
  
  // Phone Call Conversion
  phoneCallConversion: {
    id: 'AW-17711629593',
    label: '4wntCP2erc8bEJmKyP1B', // Phone call conversion label from Google Ads
  },
  
  // WhatsApp Conversion
  whatsAppConversion: {
    id: 'AW-17711629593',
    label: 'PkxNCI2Qs88bEJmKyP1B', // WhatsApp conversion label from Google Ads
  },
};

/**
 * Enable/disable conversion tracking
 * Set to false to disable tracking (useful for development)
 */
export const ENABLE_CONVERSION_TRACKING = true;

