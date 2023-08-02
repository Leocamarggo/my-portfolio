import { api } from './api.service'
import { IEmailRequest } from 'interfaces/contact';

export default class ContactService {
  static async sendEmail(data: IEmailRequest): Promise<void> {
    try {
      await api.post(`api/send-email`, { ...data, email: `leonardo.camarggo@outlook.com` });
      alert('Mensagem enviada com sucesso!')
    } catch (err) {
      alert('Oppss... Tivemos uma falha ao enviar a sua mensagem.\nPor favor, me contate de outra forma ou tente mais tarde!')
    }
  }
}
