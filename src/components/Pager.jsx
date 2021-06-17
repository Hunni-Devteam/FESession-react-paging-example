import { memo } from 'react';
import styled from 'styled-components';

const PagerButton = styled.button(({
  outline: 'none',
  padding: '6px 10px',
  margin: '0px 4px',
  border: '1px solid #d9d9d9',
  background: '#e9e9e9',
  cursor: 'pointer',

  '&.active': {
    background: 'darkblue',
    border: '1px solid darkblue',
    color: 'white',
  },
}));

function Pager(props) {
  const { page, onPageChange, totalPage } = props;

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(<>
      <PagerButton
        key={i}
        className={page === i ? 'active' : ''}
        onClick={() => onPageChange(i)}
      >
        {i}
      </PagerButton>
    </>);
  }

  return (
    <div>
      {pages}
    </div>
  );
}
  
export default memo(Pager);
