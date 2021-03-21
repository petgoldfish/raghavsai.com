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
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <Bio />
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h2>
                <Link to={`${node.fields.slug}`}>{title}</Link>
              </h2>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
  query blogPage {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
