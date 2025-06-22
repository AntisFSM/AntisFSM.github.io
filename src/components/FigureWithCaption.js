import React from 'react';

export default function FigureWithCaption({children, caption}) {
  return (
    <figure style={{ textAlign: 'center', margin: '2rem 0' }}>
      {children}
      {caption && (
        <figcaption style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5em' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}