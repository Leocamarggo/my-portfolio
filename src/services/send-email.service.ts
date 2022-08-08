import { api } from './api.service'
import { IEmailRequest } from 'interfaces/contact';

export default class ContactService {
  static async sendEmail(data: IEmailRequest): Promise<void> {
    try {
      const req = await api.post(`api/send-email`, {...data, email: `leonardo.camarggo@outlook.com`})
      console.log(req)
    } catch (err) {
      console.log(err);
    }
  }
}
