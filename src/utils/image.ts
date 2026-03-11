import imageMap from '../data/image-map.json';

const urlToFile = imageMap as Record<string, string>;

export function localImage(cdnUrl: string): string {
  if (!cdnUrl) return '';
  const filename = urlToFile[cdnUrl];
  return filename ? `/images/${filename}` : cdnUrl;
}
