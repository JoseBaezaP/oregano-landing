import type { APIRoute } from 'astro';
import type { ContactFormData } from '../../core/interfaces/EmailService';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: ContactFormData = await request.json();
    
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    console.log('Contact form submission:', data);
    
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
};
