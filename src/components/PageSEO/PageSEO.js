import { Helmet } from "react-helmet";

/**
 * @component
 * Reusable component for setting page-specific meta tags
 *
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} [url] - Canonical URL
 * @param {string} [keywords] - SEO keywords
 * @returns {JSX.Element}
 *
 * @example
 * <PageSEO
 *   title="About Us - TrickFire Robotics"
 *   description="Learn about TrickFire Robotics team members and our mission..."
 * />
 */
export const PageSEO = ({
  title,
  description,
  url,
  keywords,
  author = "TrickFire Robotics",
}) => {
  const siteUrl = "https://trickfirerobotics.github.io";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="TrickFire Robotics" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};
