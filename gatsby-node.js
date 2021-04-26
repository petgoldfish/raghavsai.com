const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(`
    query blogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            path
            title
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      throw errors;
    }

    // Create blog posts pages.
    const posts = data.allMdx.nodes;

    posts.forEach((post) => {
      actions.createPage({
        path: `/blog/${post.frontmatter.path}`,
        component: blogPost,
        context: {
          slug: post.frontmatter.path,
        },
      });
    });

    return null;
  });
};
