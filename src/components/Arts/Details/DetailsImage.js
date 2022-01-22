import React from 'react';

export default function DetailsImage({ image }) {
  return <div>
      <img src={image} loading='eager' />
  </div>;
}
