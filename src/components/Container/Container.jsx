import React from 'react';

export default function Container({ children, cls }) {
  return <div className={cls}>{children}</div>;
}
