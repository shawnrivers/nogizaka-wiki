export const songFlexMessage = {
  type: 'bubble',
  hero: {
    type: 'image',
    url:
      'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/images/artworks/singles/22/A_medium.jpg',
    size: 'full',
    aspectRatio: '1:1',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/',
    },
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'md',
    contents: [
      {
        type: 'text',
        text: '帰り道は遠回りしたくなる',
        wrap: true,
        weight: 'bold',
        gravity: 'center',
        size: 'xl',
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'シングル',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: '帰り道は遠回りしたくなる',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 3,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '作詞',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: '秋元康',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 3,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '作曲',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: '渡邉俊彦',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 3,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '編曲',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: '渡邉俊彦, 早川博隆',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 3,
              },
            ],
          },
        ],
      },
    ],
  },
};
