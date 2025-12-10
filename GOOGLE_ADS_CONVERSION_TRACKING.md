# Google Ads Conversion Tracking Setup Guide

This document explains how Google Ads conversion tracking is implemented for call and WhatsApp buttons across the website.

## Overview

Google Ads conversion tracking allows you to measure the effectiveness of your Google Ads campaigns by tracking when users click on your call or WhatsApp buttons after clicking on your ads.

## Prerequisites

1. **Google Ads Account**: You need an active Google Ads account
2. **Conversion Actions**: You need to create conversion actions in Google Ads for:
   - Phone Calls
   - WhatsApp Messages

## Step-by-Step Setup Instructions

### Step 1: Create Conversion Actions in Google Ads

1. Log in to your [Google Ads account](https://ads.google.com)
2. Navigate to **Tools & Settings** → **Conversions**
3. Click the **+** button to create a new conversion action

#### For Phone Call Conversion:
1. Select **Phone calls** as the conversion category
2. Choose **Calls from ads** or **Calls to a phone number on your website**
3. Enter a conversion name: "Phone Call from Website"
4. Set the conversion value (optional)
5. Set the count: **One** (recommended)
6. Set the conversion window: **30 days** (recommended)
7. Click **Create and continue**
8. Copy the **Conversion ID** and **Conversion Label** (you'll need these)

#### For WhatsApp Conversion:
1. Select **Website** as the conversion category
2. Enter a conversion name: "WhatsApp Message from Website"
3. Set the conversion value (optional)
4. Set the count: **One** (recommended)
5. Set the conversion window: **30 days** (recommended)
6. Click **Create and continue**
7. Copy the **Conversion ID** and **Conversion Label** (you'll need these)

### Step 2: Get Your Google Tag ID

1. In Google Ads, go to **Tools & Settings** → **Google Tag**
2. Copy your **Google Tag ID** (format: `AW-XXXXXXXXX`)
3. This is already configured in `src/app/layout.tsx` as `AW-17395932761`

### Step 3: Configure Conversion IDs and Labels

1. Open `src/config/googleAds.ts` (will be created)
2. Update the conversion IDs and labels with your actual values:

```typescript
export const googleAdsConfig = {
  // Your Google Tag ID (already in layout.tsx)
  tagId: 'AW-17395932761',
  
  // Phone Call Conversion
  phoneCallConversion: {
    id: 'AW-17395932761', // Your Google Tag ID
    label: 'YOUR_PHONE_CALL_LABEL', // Replace with your actual label
  },
  
  // WhatsApp Conversion
  whatsAppConversion: {
    id: 'AW-17395932761', // Your Google Tag ID
    label: 'YOUR_WHATSAPP_LABEL', // Replace with your actual label
  },
};
```

### Step 4: Test Your Conversions

1. **Test Phone Call Tracking**:
   - Click on a call button on your website
   - Check Google Ads → **Tools & Settings** → **Conversions**
   - You should see a test conversion appear (may take a few minutes)

2. **Test WhatsApp Tracking**:
   - Click on a WhatsApp button on your website
   - Check Google Ads → **Tools & Settings** → **Conversions**
   - You should see a test conversion appear (may take a few minutes)

### Step 5: Verify Implementation

1. Install the [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
2. Visit your website
3. Click on call or WhatsApp buttons
4. Check the Tag Assistant to see if conversions are firing correctly

## Implementation Details

### Files Modified/Created:

1. **`src/config/googleAds.ts`** - Configuration file for conversion IDs and labels
2. **`src/utils/googleConversionTracking.ts`** - Utility functions for tracking conversions
3. **`src/utils/contactActions.ts`** - Updated to include conversion tracking
4. **`src/app/layout.tsx`** - Already contains Google Tag script (verify tag ID)

### How It Works:

1. When a user clicks a **Call** button:
   - The `makePhoneCall()` function is called
   - It triggers `trackPhoneCallConversion()` 
   - Google Ads records a phone call conversion

2. When a user clicks a **WhatsApp** button:
   - The `openWhatsApp()` function is called
   - It triggers `trackWhatsAppConversion()`
   - Google Ads records a WhatsApp conversion

### Conversion Tracking Locations:

The following components have conversion tracking enabled:
- ✅ HeroSection (Call & WhatsApp buttons)
- ✅ ServiceSection (Call & WhatsApp buttons)
- ✅ ContactSection (Call & WhatsApp buttons, contact cards)
- ✅ Header (Call button)
- ✅ FloatingContactButtons (Call & WhatsApp buttons)

## Troubleshooting

### Conversions Not Showing Up

1. **Check Tag ID**: Verify the Google Tag ID in `layout.tsx` matches your Google Ads account
2. **Check Conversion Labels**: Ensure conversion labels in `googleAds.ts` match your Google Ads setup
3. **Wait Time**: Conversions may take 3-24 hours to appear in Google Ads
4. **Ad Click Required**: Conversions only track when users click your ads first (within the conversion window)

### Testing in Development

- Use Google Tag Assistant to verify events are firing
- Check browser console for any errors
- Use Google Ads' "Test conversions" feature

## Important Notes

1. **Privacy**: Ensure your privacy policy mentions Google Ads tracking
2. **GDPR Compliance**: If serving EU users, ensure proper consent mechanisms
3. **Conversion Window**: Conversions are only tracked if the user clicked your ad within the conversion window (default: 30 days)
4. **Attribution**: Conversions are attributed to the last ad click before the conversion

## Support

For issues with:
- **Google Ads Setup**: Contact Google Ads Support
- **Implementation Issues**: Check the code comments in the tracking utility files
- **Testing**: Use Google Tag Assistant and browser developer tools

## Next Steps

1. ✅ Create conversion actions in Google Ads
2. ✅ Update `googleAds.ts` with your conversion labels
3. ✅ Test conversions using Tag Assistant
4. ✅ Monitor conversions in Google Ads dashboard
5. ✅ Optimize campaigns based on conversion data

---

**Last Updated**: [Current Date]
**Version**: 1.0

