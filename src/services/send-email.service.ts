import { api } from './api.service'
import { IEmailRequest } from 'interfaces/contact';

export default class ContactService {
  static async sendEmail(data: IEmailRequest): Promise<void> {
    try {
        await api.post(`api/send-email`, data)
    } catch (err) {
        console.log(err);
    }
  }
}
