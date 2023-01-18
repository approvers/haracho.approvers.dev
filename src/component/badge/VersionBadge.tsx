import React from 'react';

interface VersionProps {
  children: React.ReactNode;
}

const VersionBadge: React.FC<VersionProps> = ({ children }) => {
  return <span className="badge badge--success">{children}</span>;
};

export default VersionBadge;
