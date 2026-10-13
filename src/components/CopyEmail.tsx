'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }
  return (
    <button onClick={copy} className="btn btn-paper" aria-live="polite">
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? 'Copied' : 'Copy email'}
    </button>
  )
}
