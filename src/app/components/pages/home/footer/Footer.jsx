import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white max-w-[1180px] mx-auto px-4 mt-20">
      {/* Section 1 */}
      <div className="relative bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-bold mb-4">
            Let's talk about what we can build together
          </h4>
          <p className="text-sm mb-6">
            Whatever may be your requirement - be it a simple website design, a
            complex data-driven web application development, an ecommerce
            website, a native or cross-platform mobile app development, a logo
            and brand identity design, a video production, or a full-fledged
            digital marketing campaign - we have a solution for you.
          </p>
          <a
            href="https://acodez.in/contact/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md"
          >
            Contact us now for a free quote!
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-800 py-12">
        <div className="footer-links flex flex-wrap bg-gray-800 text-white py-10 px-4">
          {/* Navigation */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://acodez.in/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/about/"
                  className="hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/awards/"
                  className="hover:text-gray-400"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/works/"
                  className="hover:text-gray-400"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/services/"
                  className="hover:text-gray-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/careers/"
                  className="hover:text-gray-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/blog/"
                  className="hover:text-gray-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/contact/"
                  className="hover:text-gray-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://acodez.in/web-development/"
                  className="hover:text-gray-400"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/ux-design/"
                  className="hover:text-gray-400"
                >
                  UX Design
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/mobile-app-development/"
                  className="hover:text-gray-400"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/digital-marketing/"
                  className="hover:text-gray-400"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/branding/"
                  className="hover:text-gray-400"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/interface-design/"
                  className="hover:text-gray-400"
                >
                  Interface Design
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/emerging-technology/"
                  className="hover:text-gray-400"
                >
                  Emerging Technology Services
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/ui-development/"
                  className="hover:text-gray-400"
                >
                  UI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@acodez.in" className="hover:text-gray-400">
                  info@acodez.in
                </a>
              </li>
              <li>
                <a href="skype:acodez" className="hover:text-gray-400">
                  acodez
                </a>
              </li>
              <li>
                <a href="tel:+919544668844" className="hover:text-gray-400">
                  +91 95 44 66 88 44
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Find us on</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="http://www.facebook.com/Acodez"
                  className="hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/#!/Acodez"
                  className="hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/company/acodez-it-solutions"
                  className="hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/u/0/101337685849536037041/posts"
                  className="hover:text-gray-400"
                >
                  Google+
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div>
              <form
                action="https://gmail.us21.list-manage.com/subscribe/post?u=2808ed0da090d7f72c7dca6dc&amp;id=ccc5d2490d&amp;f_id=004d90e1f0"
                method="post"
                target="_blank"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 mb-4 text-gray-800 border rounded focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Subscribe Now!
                </button>
              </form>
              <p className="text-sm mt-2">
                Enter your email ID above to subscribe to our newsletter.
              </p>
            </div>

            <a
              href="https://acodez.in/awards/"
              className="block mt-6 text-sm text-blue-400 hover:text-blue-600"
            >
              16 International Awards
            </a>

            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.google.com/partners/?hl=en-US#a_profile;idtf=4627079188"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://acodez.in/wp-content/themes/acodez-theme/images/google-partner.png"
                  alt="Google Partner"
                  className="h-12"
                />
              </a>
              <a href="#">
                <img
                  src="https://acodez.in/wp-content/themes/acodez-theme/images/bing-ads.png"
                  alt="Bing Ads"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            ©2024 All rights reserved to Acodez |{" "}
            <a
              href="https://acodez.in/terms/"
              className="text-gray-400 hover:text-white"
            >
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a
              href="https://acodez.in/privacy-policy/"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
          </p>
          <a
            href="https://wa.me/+919544668844"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
