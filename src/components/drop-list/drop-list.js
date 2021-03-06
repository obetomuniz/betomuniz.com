import { DropListItem } from '..';
import { Title, List } from './ui';

const DropList = ({ data }) => {
  return (
    <>
      <Title>Writing...</Title>

      <List>
        {data.map((item, idx) => (
          <DropListItem key={`drop-list-item-${idx}`} data={item} />
        ))}
      </List>
    </>
  );
};

export default DropList;
