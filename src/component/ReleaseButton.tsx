import React from 'react';
import Link from '@docusaurus/Link';

const URL = 'https://github.com/approvers/OreOreBot2/releases/tag/oreorebot2-';

export interface ReleaseProps {
  children: React.ReactNode;
}

const ReleaseButton = ({ children }: ReleaseProps): JSX.Element => {
  return (
    <Link className={'button button--success'} to={URL + children}>
      GitHub Release Page
    </Link>
  );
};

export default ReleaseButton;
