/**
 * Contact-form submission.
 *
 * IMPORTANT PRINCIPLE: this module never reports success unless a real
 * provider actually accepted the message. In the default `unconfigured` mode it
 * throws a descriptive error instead of faking a send.
 *
 * See README.md → "Connect the contact form" for setup instructions.
 */
import { contact } from '../data/profile.js'

export class ContactNotConfiguredError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ContactNotConfiguredError'
  }
}

/**
 * @param {{ name: string, email: string, subject: string, message: string }} payload
 * @returns {Promise<{ ok: true }>}
 */
export async function submitContact(payload) {
  const { mode, emailjs, endpoint } = contact.form

  if (mode === 'emailjs') {
    const { serviceId, templateId, publicKey } = emailjs
    if (!serviceId || !templateId || !publicKey) {
      throw new ContactNotConfiguredError(
        'EmailJS is selected but its keys are missing in src/data/profile.js.',
      )
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: payload,
      }),
    })

    if (!response.ok) {
      throw new Error(`EmailJS responded with ${response.status}`)
    }
    return { ok: true }
  }

  if (mode === 'endpoint') {
    if (!endpoint) {
      throw new ContactNotConfiguredError(
        'Endpoint mode is selected but no endpoint URL is set in src/data/profile.js.',
      )
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`The form endpoint responded with ${response.status}`)
    }
    return { ok: true }
  }

  throw new ContactNotConfiguredError(
    'The contact form has no delivery backend configured yet.',
  )
}
