import pkg from './package.json' assert { type: 'json' };

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
