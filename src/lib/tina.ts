---
import { TinaCMS, TinaProvider, useCMS } from 'tinacms';
import { GitClient } from '@tinacms/git-client';

const cms = new TinaCMS({
  config: {},
  apis: {
    git: new GitClient('/admin'),
  },
});

export default cms;
