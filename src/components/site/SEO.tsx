import { siteUrl } from './data';
type Props = { title: string; description: string; path: string; image?: string; article?: boolean; noindex?: boolean; schema?: object };
export function SEO({ title, description, path, image = '/img/portadas-blog/preview.jpeg', article = false, noindex = false, schema }: Props) {
  const url = siteUrl + path;
  const imageUrl = new URL(image, siteUrl).href;
  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
    {!noindex && <link rel="canonical" href={url} />}
    <meta property="og:title" content={title} /><meta property="og:description" content={description} />
    <meta property="og:url" content={url} /><meta property="og:type" content={article ? 'article' : 'website'} />
    <meta property="og:image" content={imageUrl} /><meta property="og:site_name" content="Tu SitioWeb" /><meta property="og:locale" content="es_PE" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={imageUrl} />
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />}
  </>;
}

