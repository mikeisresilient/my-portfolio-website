import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

const SEO = () => {
  return (
    <Helmet>
      <title>{site.title}</title>

      <meta
        name="description"
        content={site.description}
      />

      <meta
        name="keywords"
        content={site.keywords.join(", ")}
      />

      <meta
        name="author"
        content={site.author}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={site.url}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={site.title}
      />

      <meta
        property="og:description"
        content={site.description}
      />

      <meta
        property="og:url"
        content={site.url}
      />

      <meta
        property="og:image"
        content={site.ogImage}
      />

      {/* X (Twitter) */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={site.title}
      />

      <meta
        name="twitter:description"
        content={site.description}
      />

      <meta
        name="twitter:image"
        content={site.ogImage}
      />
    </Helmet>
  );
};

export default SEO;