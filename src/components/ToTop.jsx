import React, { useState, useEffect, createRef } from 'react';

import styles from '../css/toTop.module.css';

const ToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const top = createRef();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollTop = () => {
    console.log(window.pageYOffset);
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div onScroll={checkScrollTop} className={styles.container}>
      <button
        ref={top}
        type="button"
        onClick={scrollTop}
        style={{ display: showScroll ? 'block' : 'none' }}>
        Top
      </button>
    </div>
  );
};

export default ToTop;
