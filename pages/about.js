import React, { useState, useEffect } from "react";
import simpleIcons from "simple-icons";
import Head from "next/head";
import { Row, Col } from "react-flexbox-grid";
import dynamic from "next/dynamic";
import { config } from "react-spring";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import Layout from "../components/Layout";
import { PAST, PRESENT, SKILLS, FUTURE } from "../constants/Stack";

const Icon = ({ stack, style }) => {
  const icon = simpleIcons.get(stack);

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: "inline-block",
        width: "50px",
        margin: "0 auto",
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

function About() {
  const [index, setIndex] = useState(0);
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/github/amolmt`;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <img className="about-avatar" src={avatar} />

      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            Amol{" "}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: "inline-block" }}
            />
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                I'm a frontend engineer with 2+ years of experience. I started
                my career in 2017 as a fullstack developer, later I realized
                that my interest is more in UI development.
                <br />
                <br />
                In the past couple of years I've worked with a lot of
                technologies like: PHP, jQuery, Laravel, ReactJS, GraphQL, and
                many more.
              </Col>
            </Row>
            <hr />
            <h3>Technologies I've worked over the years</h3>
            <Row style={{ marginTop: 30 }}>
              {PAST.map((s) => (
                <Col
                  md={2}
                  xs={3}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon stack={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
            <br />
            <h3>What I'm focusing at the moment</h3>
            <Row style={{ marginTop: 30 }}>
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon stack={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
            <hr />
            <h3>I also play with:</h3>
            <Row style={{ marginTop: 30 }}>
              {FUTURE.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon stack={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
            <hr />
            Follow me on{" "}
            <a
              href="https://twitter.com/amoltangade"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Twitter
            </a>
            . That's where I usually hangout.
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
