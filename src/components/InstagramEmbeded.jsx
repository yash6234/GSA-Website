import { useEffect } from 'react';

const INSTAGRAM_EMBED_SCRIPT_ID = 'instagram-embed-script';
const INSTAGRAM_EMBED_SCRIPT_SRC = 'https://www.instagram.com/embed.js';

const ensureInstagramScript = () => {
  if (typeof document === 'undefined') return null;

  const existing = document.getElementById(INSTAGRAM_EMBED_SCRIPT_ID);
  if (existing) return existing;

  const script = document.createElement('script');
  script.id = INSTAGRAM_EMBED_SCRIPT_ID;
  script.async = true;
  script.defer = true;
  script.src = INSTAGRAM_EMBED_SCRIPT_SRC;
  document.body.appendChild(script);
  return script;
};

const processInstagramEmbeds = () => {
  // Instagram exposes: window.instgrm.Embeds.process()
  if (typeof window === 'undefined') return;
  window.instgrm?.Embeds?.process?.();
};

const InstagramEmbeded = ({ permalink, captioned = true }) => {
  useEffect(() => {
    const script = ensureInstagramScript();
    // If script already loaded, process immediately.
    processInstagramEmbeds();

    if (!script) return;

    const onLoad = () => processInstagramEmbeds();
    script.addEventListener('load', onLoad);
    return () => script.removeEventListener('load', onLoad);
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: 12,
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.18),0 10px 28px 0 rgba(0,0,0,0.08)',
        margin: 0,
        maxWidth: 540,
        width: '100%',
      }}
    >
      {/* Fallback while Instagram script loads */}
      {/* <a
        href={permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 text-center text-sm text-gray-600"
      >
        View this post on Instagram
      </a> */}
    </blockquote>
  );
};

export default InstagramEmbeded;

