// @ts-check

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'コマンドリファレンス',
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
        'commands_docs/kokusei',
        'commands_docs/stfu',
        'commands_docs/ping',
        'commands_docs/version',
        'commands_docs/debug',
        'commands_docs/rolerank',
        'commands_docs/roleinfo',
        'commands_docs/userinfo',
        'commands_docs/guildinfo',
        'commands_docs/dice',
      ],
    },
    {
      type: 'category',
      label: '機能リファレンス',
      collapsed: false,
      link: { type: 'doc', id: 'features_docs/index' },
      items: [
        'features_docs/bold-italic',
        'features_docs/delete-diff',
        'features_docs/edit-diff',
        'features_docs/emoji-create-log',
        'features_docs/kawaemon',
        'features_docs/vc-diff',
        'features_docs/typo',
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
