import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: "description",
          content: description
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: image
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: description
        },
        {
          name: "twitter:image",
          content: image
        }
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", ")
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
