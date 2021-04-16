import React from 'react';
import useJsonFetch from '../custom-hooks/useJsonFetch';

export default function Test(props) {
  const [data, isLoading, hasError] = useJsonFetch(props.url, null);
  return (
    <div>
      <div>Data: {data.status}</div>
      <div>Is Loading: { !isLoading ? 'Загрузка завершена' : <img className='loading' src='https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif' alt={isLoading.toString()} />}</div>
      <div>Error: {hasError}</div>
    </div>
  )
}