import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Bio from "../components/bio/bio";
import { BlogPostBySlugQuery } from "../../graphql-types";

import "./blog-post.css";

interface BlogPostTemplateProps {
  data: BlogPostBySlugQuery;
}

function BlogPostTemplate({ data }: BlogPostTemplateProps) {
  const { body, frontmatter, excerpt } = data.mdx;
  const { title, description, date } = frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />
      <div className="front-matter">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
      <hr />
      <Bio />
      <Link to="/blog/">← All Posts</Link>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
