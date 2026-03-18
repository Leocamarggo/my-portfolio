import * as T from './styles';
import { ICardProjects } from './projects';

const CardProjects = ({ name, about, preview, url }: ICardProjects) => {
  return (
    <T.CardProjectsContainer>
      <T.PreviewProject src={preview} alt={name} />
      <T.AboutProjectRow>
        <T.TextsRow>
          <strong>{name}</strong>
          {about && <span>{about}</span>}
        </T.TextsRow>
        <T.AccessProjectRow
          onClick={() => url !== '#' ? window.open(url) : undefined}
          style={{ cursor: url !== '#' ? 'pointer' : 'default' }}>
          <i className="fas fa-arrow-right"></i>
        </T.AccessProjectRow>
      </T.AboutProjectRow>
    </T.CardProjectsContainer>
  );
};

export default CardProjects;
