import { ProjectListItem } from '..';
import { Title, List } from './ui';

const ProjectList = ({ data }) => {
  return (
    <>
      <Title>Creating...</Title>

      <List>
        {data.map((item, idx) => (
          <ProjectListItem key={`project-${idx}`} data={item} />
        ))}
      </List>
    </>
  );
};

export default ProjectList;
