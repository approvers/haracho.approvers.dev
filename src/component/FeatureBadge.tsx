import React from 'react';

interface Props {
  children: React.ReactNode;
}

const FeatureBadge: React.FC<Props> = ({ children }) => {
  return <span className="badge badge--primary">{children}</span>;
};

export default FeatureBadge;
