import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets/images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'posts',
        label: '文章',
        path: 'src/content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: '标题',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: '发布日期',
          },
          {
            type: 'string',
            name: 'category',
            label: '分类',
          },
          {
            type: 'string',
            name: 'tags',
            label: '标签',
            list: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: '摘要',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: '草稿',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: '正文',
            isBody: true,
          },
        ],
      },
    ],
  },
});
