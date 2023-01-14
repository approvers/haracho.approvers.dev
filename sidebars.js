// @ts-check

module.exports = {
  docs: ['intro'],
  dev_docs: [
    'dev_docs/index',
    {
      type: 'category',
      label: '実行',
      collapsed: false,
      items: [
        'dev_docs/running/index',
        'dev_docs/running/local',
        'dev_docs/running/docker-useImage',
        'dev_docs/running/docker-useCompose',
      ],
    },
  ],
};
