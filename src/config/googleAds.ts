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
  tagId: 'AW-17395932761',
  
  // Phone Call Conversion
  // Replace 'YOUR_PHONE_CALL_LABEL' with your actual phone call conversion label
  phoneCallConversion: {
    id: 'AW-17395932761',
    label: 'YOUR_PHONE_CALL_LABEL', // TODO: Replace with your actual conversion label
  },
  
  // WhatsApp Conversion
  // Replace 'YOUR_WHATSAPP_LABEL' with your actual WhatsApp conversion label
  whatsAppConversion: {
    id: 'AW-17395932761',
    label: 'YOUR_WHATSAPP_LABEL', // TODO: Replace with your actual conversion label
  },
};

/**
 * Enable/disable conversion tracking
 * Set to false to disable tracking (useful for development)
 */
export const ENABLE_CONVERSION_TRACKING = true;

