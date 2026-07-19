const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New Contact Form: ${formData.service || 'General Inquiry'}`,
        from_name: 'A & Z Engineering Website',
        botcheck: '',
        ...formData,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true, message: 'Message sent successfully!' }
    } else {
      return { success: false, message: data.message || 'Failed to send message' }
    }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, message: 'Network error. Please try again.' }
  }
}