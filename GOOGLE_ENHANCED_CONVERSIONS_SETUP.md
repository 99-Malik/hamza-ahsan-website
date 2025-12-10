# Google Enhanced Conversions Setup Guide

This document explains how Google Enhanced Conversions is implemented on your website.

## What is Enhanced Conversions?

Enhanced Conversions is a Google Ads feature that improves conversion tracking accuracy by using user-provided data (email, phone number, name, address) in a privacy-safe way. The data is hashed before being sent to Google, ensuring user privacy.

## Benefits

- **Better Attribution**: More accurately attribute conversions to your ads
- **Privacy-Safe**: Data is hashed before transmission
- **Improved ROI Measurement**: Get better insights into which ads drive conversions
- **Works with Cookie Restrictions**: Helps track conversions even when cookies are blocked

## Implementation Status

✅ **Enhanced Conversions is ENABLED** in your Google Tag configuration.

### What's Implemented:

1. **Google Tag Configuration** (`src/app/layout.tsx`)
   - Enhanced conversions enabled: `'allow_enhanced_conversions': true`
   - Automatically detects user-provided data on your website

2. **Contact Form Integration** (`src/components/ContactSection.tsx`)
   - When users submit the contact form, their data (email, phone, name) is sent to Google for enhanced conversions
   - Data is normalized and hashed automatically by Google

3. **User Data Utility** (`src/utils/googleConversionTracking.ts`)
   - `setUserData()` function to send user data to Google
   - Automatic phone number normalization (E.164 format)
   - Email normalization (lowercase, trimmed)
   - Name splitting (first name, last name)

## How It Works

### Automatic Detection (Currently Active)

Google Tag automatically detects user-provided data on your website by:
- Scanning pages for email patterns
- Detecting phone numbers
- Finding names and addresses

This works automatically without additional code.

### Manual Data Sending (Implemented)

When users submit the contact form:
1. User data is collected (email, phone, name)
2. Data is normalized (phone to E.164, email to lowercase)
3. Data is sent to Google via `gtag('set', 'user_data', {...})`
4. Google hashes the data for privacy
5. Conversion is tracked with enhanced data

## Data Privacy

- **Hashing**: Google automatically hashes all user data before processing
- **No Sharing**: Google does not share your data with other advertisers
- **Compliance**: Data handling complies with Google's privacy policies
- **User Consent**: Ensure your privacy policy mentions data collection

## Setup in Google Ads

### Step 1: Enable Enhanced Conversions

1. Go to Google Ads → **Tools & Settings** → **Conversions**
2. Click on your conversion action (Phone Call or WhatsApp)
3. Click **"Enhanced conversions"** section
4. Toggle **"Turn on enhanced conversions"** to ON
5. Select **"Google Tag"** as your method
6. Click **"Save"**

### Step 2: Accept Terms

- Review and accept Google's Enhanced Conversions terms
- Confirm compliance with data processing terms

### Step 3: Verify Setup

1. Use Google Tag Assistant to verify enhanced conversions are working
2. Check that user data is being detected/sent
3. Monitor conversions in Google Ads dashboard

## Current Implementation Details

### Contact Form Submission

When a user submits the contact form:
```javascript
// User data is automatically sent:
{
  email: "user@example.com",        // Normalized to lowercase
  phone_number: "+971547445326",    // Normalized to E.164 format
  address: {
    first_name: "John",             // Split from full name
    last_name: "Doe"
  }
}
```

### Phone Number Format

Phone numbers are automatically normalized to E.164 format:
- Format: `+[country code][number]`
- Example: `+971547445326` (UAE)
- Length: 11-15 digits total

### Email Format

Emails are normalized:
- Converted to lowercase
- Trimmed of whitespace
- Validated for basic email format

## Testing Enhanced Conversions

### Method 1: Google Tag Assistant

1. Install [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
2. Visit your website
3. Submit the contact form
4. Check Tag Assistant for enhanced conversions data

### Method 2: Browser Console

1. Open browser developer tools (F12)
2. Go to Console tab
3. Submit contact form
4. Look for: `"Enhanced conversions user data set:"`

### Method 3: Google Ads Dashboard

1. Go to Google Ads → **Tools & Settings** → **Conversions**
2. Click on your conversion action
3. Check **"Enhanced conversions"** section
4. Verify status shows as "Active" or "Collecting data"

## Troubleshooting

### Enhanced Conversions Not Working

1. **Check Google Tag Configuration**
   - Verify `'allow_enhanced_conversions': true` is in layout.tsx
   - Check browser console for errors

2. **Verify Terms Accepted**
   - Ensure you've accepted Enhanced Conversions terms in Google Ads
   - Check conversion action settings

3. **Check Data Format**
   - Phone numbers must be in E.164 format
   - Emails must be valid format
   - At least email OR phone must be provided

4. **Browser Console Errors**
   - Check for JavaScript errors
   - Verify gtag is loaded: `window.gtag` should exist

### Data Not Being Sent

- Ensure form fields are filled correctly
- Check that email or phone is provided
- Verify Google Tag is loaded before form submission
- Check browser console for errors

## Privacy Policy Requirements

Make sure your privacy policy includes:
- Information about data collection for advertising purposes
- Mention of Google Ads Enhanced Conversions
- User rights regarding their data
- How to opt-out if applicable

## Next Steps

1. ✅ Enhanced conversions enabled in Google Tag
2. ✅ Contact form sends user data
3. ⏳ Enable in Google Ads dashboard (follow Step 1 above)
4. ⏳ Accept terms of service
5. ⏳ Test and verify data collection
6. ⏳ Monitor enhanced conversions in Google Ads

## Support

For issues:
- **Google Ads Setup**: Contact Google Ads Support
- **Implementation**: Check code comments in `googleConversionTracking.ts`
- **Testing**: Use Google Tag Assistant and browser console

---

**Last Updated**: [Current Date]
**Status**: ✅ Implemented and Ready
**Next Action**: Enable in Google Ads Dashboard

