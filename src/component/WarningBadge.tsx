import React from 'react';
import Link from '@docusaurus/Link';

export interface WarningProps {
  children: React.ReactNode;
  to: string;
}

const WarningBadge = ({ children, to }: WarningProps): JSX.Element => {
  return (
    <Link className="badge badge--warning" to={to}>
      {children}
    </Link>
  );
};

export default WarningBadge;
