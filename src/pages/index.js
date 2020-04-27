import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import pdfIcon from "../images/pdf.png"
import SEO from "../components/seo"
import JSONData from "../../content/subaccounts.json"

const subAccounts = () => (
  <div>
    <h2>Subaccounts</h2>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`} ><a target="_blank" rel="noopener noreferrer" href={data.URL}>{data.Name}</a></li>
      })}
    </ul>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="left" width="520" valign="top">
      <h1>Prospectuses</h1>
      <h2>Products</h2>
      <table id="products" className="data2" width="100%" cellSpacing="0">
        <thead>
          <tr>
            <th className="hd2" width="70%">Title</th>
            <th className="hd2" width="15%">File Type </th>
            <th className="hd2" width="15%">File Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="70%"><a target="_blank" href="/ASADVISOR.pdf">Allstate Advisor - Class I</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(1006k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/ASADVISOR.pdf">Allstate Advisor Plus - Class II</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(1006k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/ASADVISOR.pdf">Allstate Advisor Preferred 0Yr - Class II</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(1006k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/ASADVISOR.pdf">Allstate Advisor Preferred 3Yr - Class I</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(1006k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/ASADVISOR.pdf">Allstate Advisor Preferred 5Yr - Class I</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(1006k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/MORGAN3.pdf">Morgan Stanley Variable Annuity 3 - Class I</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(459k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/MORGAN2.pdf">Morgan Stanley Variable Annuity II</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(502k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/PUTNAM.pdf">Putnam Allstate Advisor 0 - 65</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(533k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/PUTNAM.pdf">Putnam Allstate Advisor Plus 0 - 65 </a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(533k)</td>
          </tr>
          <tr>
            <td width="70%"><a target="_blank" href="/PUTNAM.pdf">Putnam Allstate Advisor Preferred  0 - 65</a></td>
            <td width="15%"><img src={pdfIcon} align="bottom" alt="Download PDF" /></td>
            <td width="15%">(533k)</td>
          </tr>
        </tbody>
      </table>
      <a href="#top" title="Back to Top">Back to Top</a>

      {subAccounts()}

      <a href="#top" title="Back to Top">Back to Top</a>
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
export default IndexPage
