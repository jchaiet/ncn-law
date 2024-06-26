/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import * as React from "react"

import Header from "./header";
import Footer from "./footer";

import * as styles from "../styles/layout.module.scss";
import "../styles/global.scss";

const Layout = ({ children, location }: { children: string | JSX.Element | JSX.Element[], location: LocationI }) => {

  return (
    <div className={styles.layout}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
