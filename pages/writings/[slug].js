import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Head from "next/head";
import ProgressBar from "react-scroll-progress-bar";

import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import Subscribe from "../../components/Subscribe";

function Writing({ content, data }) {
  const frontmatter = data;
  const { title, author } = frontmatter;
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/${author.twitter}&w=40`;

  return (
    <>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      <Layout secondaryPage noHead>
        <div style={{ marginTop: 50 }}>
          <Link href="/" as="/">
            <a className="back-button">back</a>
          </Link>
          <h1 className="writing-title-h1">{title}</h1>

          <div className="author">
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={avatar} />
              {author.name}
            </a>
          </div>

          <div className="writing-container">
            <ReactMarkdown
              source={content}
              escapeHtml={false}
              renderers={{
                code: CodeBlock,
                link: (props) => {
                  if (!props.href.startsWith("http")) {
                    return props.href;
                  }

                  return (
                    <a
                      href={props.href}
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      {props.children}
                    </a>
                  );
                },
              }}
            />

            <div className="twitter-follow">
              All Well!
              {/* <Subscribe /> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

Writing.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../writings/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Writing;
