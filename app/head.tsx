export default function Head() {
  const siteTitle = "Kokou Espoir ATIVON";
  const siteDescription = "Portfolio web app showcasing projects and skills by Kokou Espoir ATIVON.";
  const siteUrl = "https://espoir-ativon.vercel.app/";
  const author = "Kokou Espoir ATIVON";

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="author" content={author} />
      <meta name="keywords" content="portfolio, industrial engineering, software, Kokou Espoir, ATIVON, projects, Espoir ATIVON, React, Next.js, MERN" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </>
  );
}
