import React from 'react';

export default function WhimsicalEmbed({
  boardId,
  ratio = 0.75, // 기본 4:3 = 0.75, 16:9는 0.5625
  embedParams = ''
}) {
  const src = `https://whimsical.com/embed/${boardId}${embedParams}`;
  return (
    <div style={{
      position: 'relative',
      paddingBottom: `${ratio * 100}%`,
      height: 0,
      overflow: 'hidden',
    }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allowFullScreen
      />
    </div>
  );
}