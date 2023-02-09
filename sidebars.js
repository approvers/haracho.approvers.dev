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
            'commands/voice/party',
            'commands/voice/kaere',
            'commands/voice/colk',
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
      link: { type: 'doc', id: 'features/index' },
      items: [
        'features/bold-italic',
        'features/delete-diff',
        'features/edit-diff',
        'features/emoji-create-log',
        'features/kawaemon',
        'features/vc-diff',
        'features/typo',
      ],
    },
  ],
  dev_docs: [
    'development/index',
    {
      type: 'category',
      label: '実行',
      collapsed: false,
      items: [
        'development/running/index',
        'development/running/local',
        'development/running/docker-useImage',
        'development/running/docker-useCompose',
      ],
    },
    'development/emoji-seq',
    'development/meme',
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
