import { Project } from '..';
import { Title, List } from './ui';

const ProjectList = ({ data }) => {
  return (
    <>
      <Title>Projects</Title>

      <List>
        {data.map((item, idx) => (
          <Project key={`project-${idx}`} data={item} />
        ))}
      </List>
    </>
  );
};

export default ProjectList;
