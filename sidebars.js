// @ts-check

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'commands',
      collapsed: false,
      link: { type: 'doc', id: 'commands_docs/index' },
      items: [
        {
          音楽機能: [
            'commands_docs/voice-channel/party',
            'commands_docs/voice-channel/kaere',
            'commands_docs/voice-channel/colk',
          ],
        },
        {
          ミーム: [
            'commands_docs/meme/index',
            'commands_docs/meme/dousurya',
            'commands_docs/meme/hukueki',
            'commands_docs/meme/n',
            'commands_docs/meme/takopi',
            'commands_docs/meme/nigetane',
            'commands_docs/meme/web3',
            'commands_docs/meme/moeta',
            'commands_docs/meme/kenjou',
            'commands_docs/meme/koume',
            'commands_docs/meme/ojaru',
            'commands_docs/meme/nine',
          ],
        },
        'commands_docs/typo',
        'commands_docs/HOJS',
        'commands_docs/help',
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
