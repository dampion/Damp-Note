import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = () => {
  useEffect(() => {
    // 更新文件標題
    document.title = 'My notes- dampion Note';
  })

  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes yet</p>
  }
}

export default MyNotes;