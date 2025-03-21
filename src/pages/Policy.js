import React from 'react';
import "../scss/policy.scss";

const Policy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Privacy Policy for compressvideo.in</h1>
      <p className="policy-intro">
        At compressvideo.in, accessible from compressvideo.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by compressvideo.in and how we use it.
      </p>
      <p className="policy-intro">
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
      </p>

      <div className="section">
        <h2 className="section-title">Log Files</h2>
        <p>
          compressvideo.in follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking user's movement on the website, and gathering demographic information.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to compressvideo.in and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – 
          <a href="https://policies.google.com/technologies/ads" target="" className="policy-link">https://policies.google.com/technologies/ads</a>
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Our Advertising Partners</h2>
        <p>
          Some of the advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we have hyperlinked to their Privacy Policies below.
        </p>
        <ul className="advertisers-list">
          <li>
            <p>Google</p>
            <a href="https://policies.google.com/technologies/ads" target="" className="policy-link">https://policies.google.com/technologies/ads</a>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Privacy Policies</h2>
        <p>
          You may consult this list to find the Privacy Policy for each of the advertising partners of compressvideo.in.
        </p>
        <p>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on compressvideo.in, which are sent directly to your browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that compressvideo.in has no access to or control over these cookies that are used by third-party advertisers.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Third-Party Privacy Policies</h2>
        <p>
          compressvideo.in's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browser's respective websites.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Children's Information</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          compressvideo.in does not knowingly collect any Personally Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Online Privacy Policy Only</h2>
        <p>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in compressvideo.in. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default Policy;
