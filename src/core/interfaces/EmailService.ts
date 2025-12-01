export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EmailService {
  sendEmail(data: ContactFormData): Promise<boolean>;
}
