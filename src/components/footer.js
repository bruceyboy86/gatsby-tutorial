import React from "react"
import NucleusLogo from "./nucleuslogo"
import IlluminateLogo from "./illuminatelogo"

const Footer = () => (
  <footer>
    <div className="footerWrapper">
      <nucleuslogo id="nucleuslogo">
        <NucleusLogo />
      </nucleuslogo>
      <IlluminateLogo />
      <illuminateblurb id="illuminateblurb">
        <p>An online hub and programme of events designed to help you build and share knowledge in areas that are vital to the successful development of your business.</p>
      </illuminateblurb>
      <address id="address">
        <h3>Nucleus HQ</h3>
        <p>Greenside<br/>
        12 Blenheim Place<br/>
        Edinburgh<br/>
        EH7 5JH<br/>
        01312269800</p>
      </address>
      <legalblurb id="legalblurb">
        <p>
          © Nucleus Financial Group plc {new Date().getFullYear()}<br/>
          Nucleus Financial Group plc is authorised and regulated by the Financial Conduct Authority, is registered in England with company number 05629686 and has its registered office at Elder House, St Georges Business Park, Brooklands Road, Weybridge, Surrey, KT13 0TS.<br/>
          Please note that telephone calls may be recorded in order to monitor the quality of customer service and for training purposes.
        </p>
      </legalblurb>
    </div>
  </footer>
)

export default Footer;