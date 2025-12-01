import type { ContactFormData, EmailService } from '../core/interfaces/EmailService';

export class FormEmailService implements EmailService {
  async sendEmail(data: ContactFormData): Promise<boolean> {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
