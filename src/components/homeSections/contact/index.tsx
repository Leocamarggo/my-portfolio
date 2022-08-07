import * as T from './styles';

const Contact = () => {
  return (
    <T.ContactContainer>
      <T.ContactContent className="container">
        <T.TitleContainer>
          <T.TitleProject>contato</T.TitleProject>
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
                />
                <T.GenericLabel htmlFor="name">NOME</T.GenericLabel>
              </div>
              <div className="col-6">
                <T.GenericInput
                  required
                  name="email"
                  type="email"
                  className="w-100"
                  autoComplete="off"
                />
                <T.GenericLabel htmlFor="email">E-MAIL</T.GenericLabel>
              </div>
            </T.RowNameAndEmail>

            <T.RowMessage>
              <div className="col-12">
                <T.MessageTextarea autoComplete="off" name="message" required />
                <T.MessageLabel htmlFor="message">MENSAGEM</T.MessageLabel>
              </div>
            </T.RowMessage>

            <T.SubmitButton>Enviar</T.SubmitButton>
          </T.FormContainer>
        </T.BoxForm>
      </T.ContactContent>
    </T.ContactContainer>
  );
};

export default Contact;
