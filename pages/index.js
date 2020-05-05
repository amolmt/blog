import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import Particles from "react-particles-js";
import { Row, Col } from "react-flexbox-grid";
import {
  ReactLogo,
  GatsbyLogo,
  AngularLogo,
  JSLogo,
  NodeLogo,
  VueLogo,
  CSSLogo,
  D3Logo,
  WebpackLogo,
} from "../constants/AppConstants";

import Layout from "../components/Layout";

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date(date);

  return today.toLocaleDateString("en-US", options);
}

function Homepage({ writings }) {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.5,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: ReactLogo,
                  height: 20,
                  width: 23,
                },
                {
                  src: GatsbyLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: AngularLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: JSLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: NodeLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: VueLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: CSSLogo,
                  height: 20,
                  width: 20,
                },
                {
                  src: D3Logo,
                  height: 20,
                  width: 20,
                },
                {
                  src: WebpackLogo,
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: true,
        }}
        className="particles"
      />
      <Layout isHomepage>
        <Row>
          {writings.map(({ document, slug }) => {
            const {
              data: { title, date },
            } = document;

            return (
              <Col md={12} key={slug} style={{ textAlign: "center" }}>
                <div className="writing-row" key={title}>
                  <Row>
                    <Col md={12}>
                      <div className="writing-date">{formatDate(date)}</div>
                    </Col>

                    <Col md={12}>
                      <Link href="/writings/[slug]" as={`/writings/${slug}`}>
                        <a>
                          <span className="writing-title">{title}</span>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </Layout>
    </>
  );
}

Homepage.getInitialProps = async (context) => {
  const writings = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      const document = matter(value.default);
      return { document, slug };
    });

    return data
      .slice()
      .sort(
        (a, b) =>
          new Date(b.document.data.date) - new Date(a.document.data.date)
      );
  })(require.context("../writings", true, /\.md$/));

  return {
    writings,
  };
};
export default Homepage;
