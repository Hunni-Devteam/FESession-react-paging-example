import { useCallback, useEffect, useState, useMemo, memo } from 'react';
import styled from 'styled-components';
import Pager from './components/Pager';

const pageCount = 10;
const postCount = 106;

const totalPage = Math.ceil(postCount / pageCount);

const posts = [];

for (let i = 0; i < postCount; i++) {
  posts.push({ id: i, title: '안녕하세요', content: '소통해요~~' });
}

const FlexCenter = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const PostList = styled.ul({ minHeight: '540px' });
const PostListItem = styled.li({
  listStyle: 'none',
  padding: '12px',
  margin: '8px 0',
  border: '1px solid #e9e9e9',
  borderRadius: '8px',
  fontSize: '14px',

  '> div': { display: 'flex' },
  '.post-list-item-id': { width: '80px' },
  '.post-list-item-title': { width: '200px' },
  '.post-list-item-content': { flex: 1 },

  ':hover': {
    background: '#e9e9e9',
  },
});

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
      <PostListItem>
        <div>
          <div className='post-list-item-id'>id: {post.id}</div>
          <div className='post-list-item-title'>title: {post.title}</div>
          <div className='post-list-item-content'>content: {post.content}</div>
        </div>
      </PostListItem>
    </>
  )), [currentPosts]);

  return (
    <div>
      <h2>게시판</h2>
      <PostList>{Posts}</PostList>
      <FlexCenter>
        <Pager page={page} onPageChange={handlePageChange} totalPage={totalPage}></Pager>
      </FlexCenter>
    </div>
  );
}

export default memo(App);
