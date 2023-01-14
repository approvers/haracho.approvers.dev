import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../css/index.module.css';

const buttonInput = 'button button--outline button--primary';

function HomepageHeader() {
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">OreOreBot2</h1>
        <p className="hero__subtitle">{useDocusaurusContext().siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={clsx(buttonInput, styles.buttonsItem)} to="/docs/intro">
            ドキュメント
          </Link>
          <Link className={clsx(buttonInput, styles.buttonsItem)} to="/docs/intro">
            開発ガイド
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
