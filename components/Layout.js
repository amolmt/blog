import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Sun, Moon } from "react-feather";
import Link from "next/link";

const menu = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/uses",
    name: "uses",
  },
];

function Layout({ children, isHomepage, secondaryPage, noHead = false }) {
  const onLoadTheme =
    typeof localStorage !== "undefined" && localStorage.getItem("BLOG_THEME");
  const [theme, setTheme] = useState(onLoadTheme);
  const [mounted, setMounted] = useState(false);
  const switchTheme = () => {
    const setTo = theme === "dark" ? "light" : "dark";

    setTheme(setTo);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("BLOG_THEME", theme);
  }, [theme]);

  const containerProps = {
    ...(isHomepage && { md: 8, mdOffset: 2 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  };

  if (!mounted) return <div />;

  return (
    <>
      <div className="top-menu">
        <Row>
          <Col xs={6}>
            <button
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </Col>
          <Col xs={6} style={{ textAlign: "right" }}>
            <ul>
              {menu.map(({ path, name }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>

      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <h1
                className={`blog-title author-main-title`}
                style={isHomepage && { textAlign: "center" }}
              >
                Amol Tangade
              </h1>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>&copy; {new Date().getFullYear()}, Built with Next.JS</footer>
    </>
  );
}

export default Layout;
