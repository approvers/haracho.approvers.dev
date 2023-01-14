import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">OreOreBot2</h1>
        <p className="hero__subtitle">限界開発鯖民が愛するDiscord Bot</p>
        <div className={styles.buttons}>
          <Link className={clsx("button button--secondary button--lg", styles.goToPage)} to="/docs/intro">
            ドキュメント
          </Link>
          <Link className={clsx("button button--secondary button--lg", styles.goToPage)} to="/docs/intro">
            開発ガイド
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
