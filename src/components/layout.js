/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./pruAnnuities_inv.css"
import "./inv_pruAnnuities_homepage.css"
// import externalLink from "../images/icn_NewWin_wht.png"
// import disclosure from "../images/PA-INV-IncomeCertaintyDisclosure.gif"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        }
      }
    }
  `)

  return (
    <div id="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        {/*
        <div dir="ltr" align="center"><img alt="All references to income certainty and guarantees are backed by the claims-paying ability of the issuing company." src={disclosure} /></div>
        <br />
        <div dir="ltr" id="footer_nav">
          <a href="http://www.annuities.prudential.com/view/page/investor/715" target="_self">HOME</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="http://www.annuities.prudential.com/view/page/investor/13815" target="_self">CONTACT US</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="http://www.annuities.prudential.com/view/page/investor/719" target="_self">SITE MAP</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="http://www.annuities.prudential.com/view/page/investor/294" target="_self">PROSPECTUS</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://www.prudential.com/links/terms-conditions" rel="noopener noreferrer" target="_blank" title="">TERMS &amp; CONDITIONS 
            <img alt="opens in new window" src={externalLink} border="0" />
          </a>&nbsp;&nbsp;|&nbsp; 
          <a href="https://www.prudential.com/links/privacy-statement" rel="noopener noreferrer" target="_blank" title="">PRIVACY STATEMENT 
            <img alt="opens in new window" src={externalLink} border="0" />
          </a>
          <br />
          <a href="https://www.prudential.com/links/ny-domestic-violence" rel="noopener noreferrer" target="_blank" title="">NY - Domestic Violence Notice 
            <img alt="opens in new window" src={externalLink} border="0" />
          </a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://www.prudential.com/links/about/accessibility-form" rel="noopener noreferrer" target="_blank" title="">Accessibility Help 
            <img alt="opens in new window" src={externalLink} border="0" />
          </a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="http://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer" title="">Check the background of this firm on FINRA's BrokerCheck 
            <img alt="opens in new window" src={externalLink} border="0" />
          </a>
        </div>
        */}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
