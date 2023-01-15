// @ts-check

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Commands',
      collapsed: false,
      link: { type: 'doc', id: 'command_docs/index' },
      items: [
        {
          音楽機能: [
            'command_docs/voice-channel/party',
            'command_docs/voice-channel/kaere',
            'command_docs/voice-channel/colk',
          ],
        },
        {
          ミーム: ['command_docs/meme/index', 'command_docs/meme/dousurya'],
        },
        'command_docs/typo',
        'command_docs/HOJS',
      ],
    },
  ],
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
    'dev_docs/emoji-seq',
    'dev_docs/meme',
  ],
};
