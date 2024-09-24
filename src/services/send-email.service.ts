import { api } from './api.service'
import { IEmailRequest } from 'interfaces/contact';

export default class ContactService {
  static async sendEmail(data: IEmailRequest): Promise<void> {
    try {
      await api.post(`api/send-email`, { ...data, email: `leonardo.camarggo@outlook.com` });
      alert('Message sent successfully!')
    } catch (err) {
      alert('Oppss... We had an error sending your message.\nPlease contact me another way or try again later!')
    }
  }
}
