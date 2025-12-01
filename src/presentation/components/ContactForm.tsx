import { useState } from 'preact/hooks';
import type { ContactFormData } from '../../core/interfaces/EmailService';

interface Props {
  lang?: string;
  translations: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}

export default function ContactForm({ lang = 'es', translations: t }: Props) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" class="py-20 bg-green-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-green-800 mb-12">{t.title}</h2>
        
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} class="space-y-6">
            <div>
              <label class="block text-gray-700 font-semibold mb-2">{t.name} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onInput={(e) => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">{t.email} *</label>
              <input
                type="email"
                required
                value={formData.email}
                onInput={(e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value })}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">{t.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onInput={(e) => setFormData({ ...formData, phone: (e.target as HTMLInputElement).value })}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">{t.message} *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onInput={(e) => setFormData({ ...formData, message: (e.target as HTMLTextAreaElement).value })}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            {status === 'success' && (
              <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                {t.success}
              </div>
            )}

            {status === 'error' && (
              <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {t.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              class="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (lang === 'es' ? 'Enviando...' : lang === 'it' ? 'Invio in corso...' : 'Sending...') : t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
