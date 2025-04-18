# Setting Up EmailJS for the Contact Form

This document provides instructions on how to set up EmailJS to make the contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. The free plan allows 200 emails per month, which should be sufficient for a portfolio website.

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to the "Email Services" tab.
2. Click "Add New Service" and select your email provider (Gmail, Outlook, etc.).
3. Follow the instructions to connect your email account.
4. Once connected, note down the **Service ID** (e.g., `service_hamawebdev`).

service id : service_v4gmng8
template id : template_knq5mkh
user id : 
public key : 4nZmi-2QsD_4TvePR

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab in your EmailJS dashboard.
2. Click "Create New Template".
3. Give your template a name (e.g., `template_contact_form`).
4. In the template editor, you can either:
   - Use the default template and modify it
   - Copy and paste the HTML from the `emailjs-template.html` file in this project
5. Make sure your template uses the following variables:
   - `{{user_name}}` - For the sender's name
   - `{{user_email}}` - For the sender's email
   - `{{message}}` - For the message content
6. Save the template and note down the **Template ID** (e.g., `template_contact_form`).

## Step 4: Get Your User ID and Public Key

1. Go to the "Account" tab in your EmailJS dashboard.
2. Find your **User ID** in the "API Keys" section.
3. Also note your **Public Key**.

## Step 5: Update the Contact Component

1. Open the `components/contact.tsx` file.
2. Replace the placeholder values with your actual EmailJS credentials:
   - Replace `'YOUR_PUBLIC_KEY'` with your actual public key in the `emailjs.init()` call
   - Replace `'service_hamawebdev'` with your actual service ID
   - Replace `'template_contact_form'` with your actual template ID
   - Replace `'YOUR_USER_ID'` with your actual user ID

```typescript
// Initialize EmailJS
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY')
}, [])

// ...

// Send email using EmailJS
await emailjs.sendForm(
  'service_hamawebdev', // Replace with your actual EmailJS service ID
  'template_contact_form', // Replace with your actual EmailJS template ID
  formRef.current!,
  'YOUR_USER_ID' // Replace with your actual EmailJS user ID
)
```

## Step 6: Test the Contact Form

1. After updating the credentials, test the contact form by filling it out and submitting it.
2. Check your email to ensure you receive the message.
3. If you encounter any issues, check the browser console for error messages.

## Security Note

The EmailJS credentials are included in the client-side code, which means they are visible to users. However, EmailJS has built-in security measures to prevent abuse:

- Rate limiting to prevent spam
- Domain restrictions (you can set this up in your EmailJS dashboard)
- Email sending limits

For a portfolio website, this level of security is generally sufficient. For more sensitive applications, consider using a server-side solution.
