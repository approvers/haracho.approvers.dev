// @ts-check

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'コマンドリファレンス',
      collapsed: false,
      link: { type: 'doc', id: 'commands/index' },
      items: [
        {
          音楽機能: [
            'commands/voice-channel/party',
            'commands/voice-channel/kaere',
            'commands/voice-channel/colk',
          ],
        },
        {
          ミーム: [
            'commands/meme/dousurya',
            'commands/meme/hukueki',
            'commands/meme/index',
            'commands/meme/kenjou',
            'commands/meme/koume',
            'commands/meme/lolicon',
            'commands/meme/moeta',
            'commands/meme/n',
            'commands/meme/nigetane',
            'commands/meme/nine',
            'commands/meme/ojaru',
            'commands/meme/takopi',
            'commands/meme/web3',
            'commands/meme/cLang',
            'commands/meme/tsureteike',
            'commands/meme/syakai',
          ],
        },
        'commands/typo',
        'commands/HOJS',
        'commands/help',
        'commands/kokusei',
        'commands/stfu',
        'commands/ping',
        'commands/version',
        'commands/debug',
        'commands/rolerank',
        'commands/roleinfo',
        'commands/userinfo',
        'commands/guildinfo',
        'commands/dice',
        'commands/channelinfo',
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
  changelog: [
    {
      type: 'category',
      label: 'バージョン1',
      collapsed: false,
      items: [
        'changelog/v1/v1.37.0',
      ],
    },
  ]
};
