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
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Locations</h4>
            <ul className="space-y-4">
              <li>
                <h5 className="font-bold">Delhi NCR</h5>
                <p>1101 - 11th Floor, JMD Megapolis, Sector-48, Gurgaon</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
              </li>
              {/* Add other locations in similar structure */}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://acodez.in/"
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/about/"
                  className="text-gray-400 hover:text-white"
                >
                  About
                </a>
              </li>
              {/* Add other navigation links */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://acodez.in/web-development/"
                  className="text-gray-400 hover:text-white"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="https://acodez.in/ux-design/"
                  className="text-gray-400 hover:text-white"
                >
                  UX Design
                </a>
              </li>
              {/* Add other service links */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@acodez.in"
                  className="text-gray-400 hover:text-white"
                >
                  info@acodez.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919544668844"
                  className="text-gray-400 hover:text-white"
                >
                  +91 95 44 66 88 44
                </a>
              </li>
            </ul>
            <h4 className="text-lg font-bold mt-6 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="http://www.facebook.com/Acodez"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              {/* Add other social media icons */}
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
