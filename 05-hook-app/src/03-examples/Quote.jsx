import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
        <p ref={pRef} className='mb-1'>
          {quote}
        </p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
