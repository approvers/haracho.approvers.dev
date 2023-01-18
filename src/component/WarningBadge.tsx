import React from 'react';
import Link from '@docusaurus/Link';

interface Props {
  children: React.ReactNode;
  to: string;
}

const WarningBadge: React.FC<Props> = ({ children, to }) => {
  return (
    <Link className="badge badge--warning" to={to}>
      {children}
    </Link>
  );
};

export default WarningBadge;
