import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Bio from "../components/bio/bio";
import { BlogPageQuery } from "../../graphql-types";

interface BlogProps {
  data: BlogPageQuery;
}

function BlogPage({ data }: BlogProps) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <SEO title="Blog" />
      <Bio />
      <div>
        {posts.map(
          ({ excerpt, frontmatter: { title, path, date, description } }) => {
            return (
              <div key={path}>
                <h2>
                  <Link to={`/blog/${path}`} itemProp="url">
                    {title || path}
                  </Link>
                </h2>
                <small>{date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                  }}
                />
              </div>
            );
          }
        )}
      </div>
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
  query blogPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          path
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`;
