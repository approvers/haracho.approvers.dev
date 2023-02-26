import pkg from './package.json' assert { type: 'json' };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <span>OreOreBot2 Documents</span>,
  project: {
    link: pkg.repository
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - OreOreBot2 Documents'
    };
  }
};
