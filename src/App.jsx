import { useCallback, useEffect, useState, useMemo, memo } from 'react';
import Pager from './components/Pager';

const pageCount = 10;
const postCount = 106;

const totalPage = Math.ceil(postCount / pageCount);

const posts = [];

for (let i = 0; i < postCount; i++) {
  posts.push({ id: i, title: '안녕하세요', content: '소통해요~~' });
}

function App() {
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  
  const handlePageChange = useCallback((clickedPage) => setPage(clickedPage), []);

  useEffect(() => {
    const minPostId = (pageCount * (page - 1)) + 1;
    const maxPostId = pageCount * page;

    const nextPosts = posts.filter((post) => post.id >= minPostId && post.id <= maxPostId);

    setCurrentPosts(nextPosts);
  }, [page]);

  const Posts = useMemo(() => currentPosts.map((post) => (
    <>
      <li style={{ listStyle: 'none' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '80px' }}>id: {post.id}</div>
          <div style={{ width: '200px' }}>title: {post.title}</div>
          <div style={{ flex: 1 }}>content: {post.content}</div>
        </div>
      </li>
    </>
  )), [currentPosts]);

  return (
    <div>
      게시판
      {Posts}
      <Pager page={page} onPageChange={handlePageChange} totalPage={totalPage}></Pager>
    </div>
  );
}

export default memo(App);
