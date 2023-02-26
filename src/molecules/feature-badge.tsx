import React from 'react';

export interface FeatureProps {
  children: React.ReactNode;
}

export const FeatureBadge = ({ children }: FeatureProps): JSX.Element => {
  return <span className="badge badge--primary">{children}</span>;
};
