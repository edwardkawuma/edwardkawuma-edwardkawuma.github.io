import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Linkedin, Github, Youtube } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edward-kawuma-6ba81413a', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/edwardkawuma', icon: Github },
  { label: 'YouTube', href: 'https://www.youtube.com/@eddykawuma4323', icon: Youtube },
];

export function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');
  const requiredFieldsError =
    status === 'error' && error === 'Please fill in your name, email, and message.';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setError('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setError('');

    if (!supabase) {
      setStatus('error');
      setError('Contact form is temporarily unavailable. Please use email or phone for now.');
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert({ name, email, subject: subject || null, message });

      if (insertError) throw insertError;

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <Mail className="h-3.5 w-3.5" />
            Contact
          </span>
          <h2 className="section-title mt-4">Let's build something that scales</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            Have a project, collaboration, or question? Send a message and we'll get back to you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="glass-card p-7 lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-500/15 text-success-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-400">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-invalid={requiredFieldsError || undefined}
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-invalid={requiredFieldsError || undefined}
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-slate-300">
                    Subject <span className="text-slate-500">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="What's this about?"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-invalid={requiredFieldsError || undefined}
                    aria-describedby="message-help"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="input-field resize-none"
                  />
                  <p id="message-help" className="mt-1.5 text-xs text-slate-500">
                    Include project goals, timeline, and preferred contact method.
                  </p>
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="flex items-center gap-2 rounded-lg border border-danger-500/30 bg-danger-500/10 px-3 py-2.5 text-sm text-danger-400"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="glass-card p-6">
              <h4 className="font-display text-sm font-semibold text-white">Position</h4>
              <p className="mt-2 text-sm text-slate-300">GIS Analyst/Engineer</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">Email</h4>
                  <a href="mailto:eddykawuma@gmail.com" className="text-xs text-brand-300 hover:text-brand-200 transition">
                    eddykawuma@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">Location</h4>
                  <p className="text-xs text-slate-400">Acacia Avenue, Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-display text-sm font-semibold text-white mb-3">Phone</h4>
              <div className="space-y-2">
                <a 
                  href="tel:+2560701188758" 
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 hover:border-brand-400/40 hover:text-white transition"
                >
                  <span>+256 070 118 8758</span>
                  <span className="text-slate-600 hover:text-brand-400">→</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-display text-sm font-semibold text-white">Connect</h4>
              <div className="mt-4 flex flex-col gap-2.5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-brand-400/40 hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-brand-300 transition group-hover:text-brand-200" />
                      {s.label}
                      <span className="ml-auto text-slate-600 transition group-hover:text-brand-400">→</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
