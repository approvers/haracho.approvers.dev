import React from 'react';

export interface VersionProps {
  children: React.ReactNode;
}

export const VersionBadge = ({ children }: VersionProps): JSX.Element => {
  return <span className="badge badge--success">{children}</span>;
};
