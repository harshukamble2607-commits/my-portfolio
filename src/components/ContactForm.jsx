import { useRef, useState } from 'react'
import { contact } from '../data/profile.js'
import { submitContact, ContactNotConfiguredError } from '../lib/contact.js'
import { cn } from '../lib/utils.js'
import { Icon } from './Icon.jsx'

const EMPTY = { name: '', email: '', subject: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3)
    errors.subject = 'Please add a short subject.'
  if (values.message.trim().length < 10)
    errors.message = 'Please write at least 10 characters.'
  return errors
}

function Field({ id, label, type = 'text', value, error, onChange, as = 'input', rows = 5 }) {
  const describedBy = error ? `${id}-error` : undefined
  const baseCls = cn(
    'w-full rounded-xl border bg-card px-4 py-3 text-[15px] text-ink placeholder:text-muted/60',
    'transition-colors duration-200 ease-out-soft focus:outline-none focus:ring-2 focus:ring-offset-0',
    error
      ? 'border-[#C25B5B] focus:border-[#C25B5B] focus:ring-[#C25B5B]/25'
      : 'border-line hover:border-accent/30 focus:border-accent focus:ring-accent/25',
  )

  const Tag = as

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        rows={as === 'textarea' ? rows : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={cn(baseCls, as === 'textarea' && 'resize-y min-h-[120px]')}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B04A4A]">
          <Icon name="AlertCircle" size={13} />
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | unconfigured
  const [serverError, setServerError] = useState('')
  const formRef = useRef(null)

  const update = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setServerError('')

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).some((k) => nextErrors[k])) {
      // Wait for React to render the invalid state before moving focus.
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus()
      })
      return
    }

    if (contact.form.mode === 'unconfigured') {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    try {
      await submitContact(values)
      setStatus('success')
      setValues(EMPTY)
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof ContactNotConfiguredError
          ? err.message
          : 'Something went wrong while sending. Please try again or email me directly.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-panel border border-line bg-card p-10 text-center shadow-soft animate-fade-up"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path
              d="M4 12.5l4.5 4.5L20 6.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="24"
              className="animate-check-draw"
            />
          </svg>
        </span>
        <h3 className="mt-5 text-lg font-semibold text-ink">Message sent</h3>
        <p className="mt-1.5 max-w-sm text-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-accent link-underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-panel border border-line bg-card p-6 shadow-soft sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={update('name')}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update('email')}
        />
      </div>

      <div className="mt-5">
        <Field
          id="subject"
          label="Subject"
          value={values.subject}
          error={errors.subject}
          onChange={update('subject')}
        />
      </div>

      <div className="mt-5">
        <Field
          id="message"
          label="Message"
          as="textarea"
          value={values.message}
          error={errors.message}
          onChange={update('message')}
        />
      </div>

      {(status === 'error' || status === 'unconfigured') && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#E6C9C9] bg-[#FBF3F3] px-4 py-3 text-sm text-[#8A3B3B]"
        >
          <Icon name="AlertCircle" size={16} className="mt-0.5 shrink-0" />
          <span>
            {status === 'unconfigured'
              ? 'Message delivery is not connected yet, so nothing was sent. See README.md → “Connect the contact form” to enable EmailJS or a custom endpoint, then set contact.form.mode in src/data/profile.js.'
              : serverError}
          </span>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 ease-out-soft hover:bg-[#2a5271] hover:shadow-raised active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              <Icon name="Loader2" size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Icon
                name="Send"
                size={16}
                className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
              />
            </>
          )}
        </button>

        {contact.form.mode === 'unconfigured' && (
          <p className="text-xs text-muted">
            Form is in preview mode — configure a provider to deliver messages.
          </p>
        )}
      </div>
    </form>
  )
}
