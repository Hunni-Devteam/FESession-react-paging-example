import { useState } from 'react';
import Pager from './components/Pager';

const pageCount = 10;
const postCount = 50;

const totalPage = Math.ceil(postCount / pageCount);

const posts = [];

for (let i = 0; i < postCount; i++) {
  posts.push({ id: i, title: '안녕하세요', content: '소통해요~~' });
}

function App() {
  const [page, setPage] = useState(1);

  return (
    <div>
      게시판

      <Pager page={page} onPageChange={setPage} pageCount={pageCount} totalPage={totalPage}></Pager>
    </div>
  );
}

export default App;
