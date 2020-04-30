import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import pdfIcon from "../images/pdf.gif"
import SEO from "../components/seo"
import JSONData from "../../content/subaccounts.json"

const subAccounts = () => (
	<div>
		<h2>Subaccounts</h2>
		<table id="subaccounts" className="data2" width="100%" cellSpacing="0">
			<thead>
				<tr>
					<th className="hd2" width="70%">Title</th>
					<th className="hd2" width="15%">File Type </th>
					<th className="hd2" width="15%">File Size</th>
				</tr>
			</thead>
			<tbody>
				{JSONData.content.map((data, index) => {
					return <tr key={`content_item_${index}`}><td colSpan="3"><a target="_blank" rel="noopener noreferrer" href={data.URL}>{data.Name}</a></td></tr>
				})}
			</tbody>
		</table>
    <a href="#top" title="Back to Top">Back to Top</a>
    <br />
    <br />
	</div>
)

const IndexPage = () => (
	<Layout>
		<SEO title="Prospectuses" />
		<div style={{clear: 'both'}} id="content">
			<h1>Prospectuses</h1>
      <p>Due to COVID-19's impact on the mailing capabilities of one of our vendors, the mailing of the annual update of the prospectuses for our annuity products and underlying fund investment options and related supplements to current contract owners will be delayed.  The Securities and Exchange Commission has provided insurance companies and funds with relief in connection with delays related to COVID-19, and we are relying on that relief.  Our vendor will mail the prospectuses as soon as practicable, and we expect the mailing to be completed no later than June 15.</p>
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

  <div className="bottom">
    <p>Investors should consider the features of the contract and the underlying portfolios' investment objectives, policies, management, risks, charges and expenses carefully before investing. This and other important information is contained in the prospectus on this website. Please read the prospectus carefully before investing.</p>
    <p>Annuity contracts contain exclusions, limitations, reductions of benefits and terms for keeping them in force. Your licensed financial professional can provide you with complete details.</p>
    <p>This web page is being provided for informational or educational purposes only and does not take into account the investment objectives or financial situation of any client or prospective clients. The information is not intended as investment advice and is not a recommendation about managing or investing your retirement savings. Clients seeking information regarding their particular investment needs should contact a financial professional.</p>
    <p>All references to income certainty and guarantees are backed by the claims-paying ability of the issuing company.</p>
    <p>We do not endorse any third party websites not under our control or operation. We have not reviewed any or all such sites that may be linked to this website and we are not responsible for any such websites linked to this website. Your linking to any websites from this website is at your own risk. By linking to a website or permitting a link to this website, we do not endorse the website operator or the content of the linked website.</p>
    <p>Please be aware that Allstate is not responsible for the privacy practices of any linked third party website, even though Allstate's name or logo may appear on those sites. We encourage you to be aware when you leave our site and to read the privacy policies of each and every Web site that you visit, as the privacy policies of those sites may differ from ours.</p>
    <p>This website presents information and content that is owned or licensed by The Allstate Corporation and its subsidiaries and affiliates ("Allstate").</p>
    <p>Allstate and the Good Hands Logo are registered service marks of Allstate Life Insurance Company and its affiliates.</p>
  </div>

</div>
	</Layout>
)
export default IndexPage
