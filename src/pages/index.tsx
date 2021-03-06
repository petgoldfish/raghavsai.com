import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Social from "../components/social/social";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `raghav sai`,
          `raghav`,
          `sai`,
          `blog`,
          `gatsby`,
          `javascript`,
          `typescript`,
          `react`,
        ]}
      />
      <h1>Hello, world!</h1>
      <p>
        I live in New York City, and I'm pursuing a Master's in Computer Science
        at NYU. Currently, I contribute to{" "}
        <a
          href="https://ssl.engineering.nyu.edu/projects#cachecash"
          target="_blank"
          rel="noopener noreferrer"
        >
          CacheCash
        </a>{" "}
        at NYU's{" "}
        <a
          href="https://ssl.engineering.nyu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure Systems Lab
        </a>
        .
      </p>
      <p>
        When I'm not playing around with Web Development or Programming
        Languages, I'm usually playing video games or doing outdoorsy stuff like
        hiking and traveling the world (well, before the pandemic at least)!
      </p>
      <p>
        Check out my{" "}
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          résumé
        </a>
        !
      </p>
      <h2>Contact Me</h2>
      <p>Email me at hi (at) raghavsai (dot) com.</p>
      <p>
        Find me on: <Social />
      </p>
      <p>
        My{" "}
        <a href="/gpg-pubkey.txt" target="_blank" rel="noopener noreferrer">
          GPG key
        </a>{" "}
        [<code>0B87F52A5DA252053ECB654A20E18C16307015FB</code>] for secure
        communication.
      </p>
    </Layout>
  );
}

export default IndexPage;
