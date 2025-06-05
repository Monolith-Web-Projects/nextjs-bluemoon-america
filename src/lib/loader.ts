'use client'
 
// Load current URL
function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_DOMAIN ?? '';
}

export default function myImageLoader({
  src,
  width,
  quality = 75,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${getBaseUrl()}/US${src}?w=${width}&q=${quality}`;
}
