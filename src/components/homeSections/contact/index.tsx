import * as T from './styles';
import { useState } from 'react';
import { IEmailRequest } from 'interfaces/contact';
import { IRefProps } from 'interfaces/genericInterfaces';
import ContactService from 'services/send-email.service';

const Contact = ({ reference }: IRefProps) => {
  const [emailData, setEmailData] = useState<IEmailRequest>();

  const validateEmail = (email: string) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const sendEmail = () => {
    if (!emailData?.subject) {
      alert('Fill in the Name field!');
      return;
    } else if (!emailData?.name) {
      alert('Fill in the E-mail field!');
      return;
    } else if (!validateEmail(emailData.name)) {
      alert('Enter a valid E-mail!');
      return;
    } else if (!emailData?.message) {
      alert('Fill in the Message field!');
      return;
    }

    ContactService.sendEmail(emailData);
  };
  return (
    <T.ContactContainer ref={reference}>
      <T.ContactContent className="container">
        <T.TitleContainer>
          <T.TitleProject>Contact</T.TitleProject>
          <T.TitleLine />
        </T.TitleContainer>

        <T.BoxForm className="mt-5">
          <T.FormContainer>
            <T.RowNameAndEmail>
              <div className="col-6">
                <T.GenericInput
                  required
                  type="text"
                  name="name"
                  autoComplete="off"
                  style={{ marginRight: 30 }}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                />
                <T.GenericLabel htmlFor="name">NAME</T.GenericLabel>
              </div>
              <div className="col-6">
                <T.GenericInput
                  required
                  name="email"
                  type="email"
                  className="w-100"
                  autoComplete="off"
                  onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
                />
                <T.GenericLabel htmlFor="email">E-MAIL</T.GenericLabel>
              </div>
            </T.RowNameAndEmail>

            <T.RowMessage>
              <div className="col-12">
                <T.MessageTextarea
                  required
                  name="message"
                  autoComplete="off"
                  onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                />
                <T.MessageLabel htmlFor="message">MESSAGE</T.MessageLabel>
              </div>
            </T.RowMessage>

            <T.SubmitButton onClick={sendEmail}>Send</T.SubmitButton>
          </T.FormContainer>
        </T.BoxForm>
      </T.ContactContent>
    </T.ContactContainer>
  );
};

export default Contact;
