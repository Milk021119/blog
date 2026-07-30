import { TinaProvider, TinaCMS, useCMS } from 'tinacms';
import { useGitClient } from '@tinacms/git-client';
import { BiEdit } from 'react-icons/bi';

export default function TinaCMSWrapper({ children }) {
  const cms = useCMS();

  return (
    <TinaProvider cms={cms}>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => cms.toggle()}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all hover:scale-105"
        >
          <BiEdit className="w-5 h-5" />
          <span className="font-medium">编辑</span>
        </button>
      </div>
      {children}
    </TinaProvider>
  );
}
