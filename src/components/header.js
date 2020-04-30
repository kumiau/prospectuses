import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_pru.gif"
import fpenter from "../images/btn_fpenter.gif"

const Header = ({ siteTitle }) => (
  <div id="pageHeader">
    {/*
    <div id="corpLogo"><a href="http://www.annuities.prudential.com/investor"><img src={logo} alt="Prudential Annuities" border="0" /></a></div>
    <div id="siteTools">
      <div id="globalNav"><a href="http://www.annuities.prudential.com/investor">Home</a> | <a href="http://www.annuities.prudential.com/investor/invcontactus">Contact Us</a> | <a href="http://www.annuities.prudential.com/investor/invsitemap">Site Map</a> | <a href="http://www.annuities.prudential.com/investor/invprospectus">Prospectus</a></div>
      <div id="fpEnter"><a href="http://www.annuities.prudential.com/fp"><img src={fpenter} alt="Financial Professionals Enter Here" border="0" /></a></div> 
    </div>
    */}
  </div>
)

  Header.propTypes = {
  siteTitle: PropTypes.string,
}

  Header.defaultProps = {
  siteTitle: ``,
}

  export default Header
