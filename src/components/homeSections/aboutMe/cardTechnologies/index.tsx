import * as T from './styles';

interface ICardTechnologies {
  name: string;
  image: string;
}

const CardTechnologies = ({ name, image }: ICardTechnologies) => {
  return (
    <T.Container>
      <T.NameTechnology>{name}</T.NameTechnology>
      <T.ImageTechnology src={image} alt={name} />
    </T.Container>
  );
};

export default CardTechnologies;
