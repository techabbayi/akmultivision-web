# Contact Form Email Setup Guide

Your contact form is already configured to send emails using Nodemailer! Follow these steps to set it up:

## ✅ Current Implementation

The form in `src/app/actions.ts` is set up to:
- Validate form inputs
- Send email notifications to you when someone submits the form
- Include all form details (name, email, phone, message, plan)
- Reply-to field set to the customer's email for easy response

## 📧 Email Setup Steps

### Step 1: Create Environment File

1. Copy `.env.local.example` to `.env.local` in your project root:
   ```bash
   copy .env.local.example .env.local
   ```

2. Open `.env.local` and update with your email settings

### Step 2: Choose Your Email Provider

#### Option A: Gmail (Recommended for Development)

1. **Enable 2-Step Verification** on your Google Account:
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Website"
   - Copy the 16-character password

3. **Update `.env.local`**:
   ```env
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=xxxx xxxx xxxx xxxx  # Your App Password
   EMAIL_TO=your-email@gmail.com  # Where you want to receive forms
   ```

#### Option B: Outlook/Hotmail

```env
EMAIL_SERVER_HOST=smtp-mail.outlook.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@outlook.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_TO=your-email@outlook.com
```

#### Option C: Custom SMTP Server

```env
EMAIL_SERVER_HOST=mail.yourdomain.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=contact@yourdomain.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_TO=owner@yourdomain.com
```

### Step 3: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:9002/#contact

3. Fill out and submit the contact form

4. Check your email inbox (specified in `EMAIL_TO`)

## 📩 What You'll Receive

When someone submits the form, you'll receive an email with:

- **Subject**: "New Contact Form Submission from [Customer Name]"
- **From**: Your configured email (EMAIL_SERVER_USER)
- **Reply-To**: Customer's email (so you can reply directly)
- **Body Contains**:
  - Customer name
  - Customer email
  - Phone number (if provided)
  - Selected plan (if from pricing page)
  - Message content

## 🔒 Security Notes

1. **Never commit `.env.local` to git** - It's already in `.gitignore`
2. **Use App Passwords** for Gmail, not your main password
3. **For production**, consider using:
   - SendGrid (https://sendgrid.com) - Free tier: 100 emails/day
   - Resend (https://resend.com) - Free tier: 100 emails/day
   - AWS SES (https://aws.amazon.com/ses/) - Very cheap

## 🚀 Production Deployment

### For Vercel/Netlify:

1. Go to your project settings
2. Add environment variables:
   - `EMAIL_SERVER_HOST`
   - `EMAIL_SERVER_PORT`
   - `EMAIL_SERVER_USER`
   - `EMAIL_SERVER_PASSWORD`
   - `EMAIL_TO`

3. Redeploy your application

## ⚠️ Common Issues

### Issue: "Invalid login: 535-5.7.8 Username and Password not accepted"
**Solution**: 
- Gmail: Use App Password, not regular password
- Enable "Less secure app access" (not recommended) OR use App Password

### Issue: Emails not being received
**Solution**:
- Check spam/junk folder
- Verify `EMAIL_TO` address is correct
- Check server logs for errors

### Issue: "Connection timeout"
**Solution**:
- Check if port 587 is blocked by firewall
- Try port 465 with secure: true
- Try port 25 (less secure)

## 📝 Form Locations

The contact form appears in:
1. **Contact Section** - Main page `#contact`
2. **Pricing Modal** - When user clicks plan buttons
3. **Portfolio Pages** - Logo showcase "Get Similar" button

## 🧪 Testing Without Email

If you want to test without setting up email, you can temporarily modify `src/app/actions.ts`:

```typescript
export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Comment out the email sending code
  console.log('Form submitted:', values);
  
  return {
    success: true,
    message: 'Form submitted successfully!',
  };
}
```

This will log form data to console without sending emails.

## 💡 Alternative: Use a Form Service

Instead of email, you can use services like:
- **Formspree** (https://formspree.io) - Free tier available
- **Getform** (https://getform.io) - Free tier: 50 submissions/month
- **Web3Forms** (https://web3forms.com) - Free, unlimited

These don't require SMTP setup and provide form management dashboards.

---

**Need help?** Check the logs in your terminal when submitting the form. All errors will be logged there.
