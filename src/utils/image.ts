import imageMap from '../data/image-map.json';

const urlToFile = imageMap as Record<string, string>;

export function localImage(cdnUrl: string): string {
  if (!cdnUrl) return '';
  const filename = urlToFile[cdnUrl];
  const base = import.meta.env.BASE_URL;
  return filename ? `${base}images/${filename}` : cdnUrl;
}
