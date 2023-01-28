import React from 'react';

export interface FeatureProps {
  children: React.ReactNode;
}

const FeatureBadge = ({ children }: FeatureProps): JSX.Element => {
  return <span className="badge badge--primary">{children}</span>;
};

export default FeatureBadge;
