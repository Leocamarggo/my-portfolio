import * as T from './styles';
import CardProjects from './cardProjects';
import { projects } from './cardProjects/projects';
import { IRefProps } from 'interfaces/genericInterfaces';

const Projects = ({ reference }: IRefProps) => {
  return (
    <T.ProjectsContainer ref={reference} className="container">
      <T.TitleRow>
        <T.TitleProjects>Projetos</T.TitleProjects>
        <T.LineTitle />
      </T.TitleRow>

      <T.ProjectsRow>
        {projects.map((item, index) => {
          return (
            <CardProjects
              key={index}
              url={item.url}
              name={item.name}
              about={item.about}
              preview={item.preview}
            />
          );
        })}
      </T.ProjectsRow>

      <T.GitHubRow>
        <T.TitleGitHub>Ver repositórios no GitHub</T.TitleGitHub>
        <T.LineGitHub />
      </T.GitHubRow>
    </T.ProjectsContainer>
  );
};

export default Projects;
