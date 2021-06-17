import { memo } from 'react';

function Pager(props) {
  const { page, onPageChange, totalPage } = props;

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(<button key={i} className={page === i ? 'active' : ''} onClick={() => onPageChange(i)}>{i}</button>);
  }

  return (
    <div>
      {pages}
    </div>
  );
}
  
export default memo(Pager);
