import React, { useState } from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Why should I do my web design and development from Acodez?",
      answer:
        "Acodez is a leading web design company in India with 10+ years of experience and 16 international awards to its credit. We also have experience working for many leading MNCs for their web design and development projects. Acodez operates from its 6 offices across India and has worked on more than 1000+ web design projects for our clients across the globe, from more than 80 countries. At Acodez, we’re always obsessed to deliver world-class quality projects and this has definitely helped us make a name for ourselves in the web development India arena, by winning multiple international awards in the last 10 years (consistently every year right from 2012 to 2021)",
    },
    {
      question: "Why is India an ideal choice for web development outsourcing?",
      answer:
        "India is the most sought-after destination for web design outsourcing for decades, mainly because of its ‘cost of quality' advantage. You will get world-class projects delivered from web development companies in India at a fraction of what you pay in the Americas or Europe for a similar project. India has a huge pool of talent that enables both companies and individuals to grab the opportunity for creating fabulous and innovative websites and applications using the latest and advanced technologies. We've put together an article that details more about the benefits of website design outsourcing to India compared to some other destinations.",
    },
    {
      question: "How much does it cost to hire a web developer in India?",
      answer:
        "You can hire a web development company in India on a per-project basis, where the cost of the project completely depends on the scope of the project. When you hire on a per-project basis various teams (UX and web designers, front-end developers, back-end developers, testers, etc) would be involved in your project at different stages and there will also be a dedicated project manager assigned.Another option is to hire a dedicated web developer in India on a monthly basis. In this model, the web developer (or web designer or front-end developer) would be working exclusively on your project and all works/tasks will be assigned directly by you. The pricing here would be hourly and usually calculated on a monthly basis.At Acodez, we do offer both of these models.",
    },
    {
      question: "Do you do custom website design or use pre-built templates?",
      answer:
        "We are a multiple international award-winning website design company in India, that always loves to build top-class custom design websites. We have a dedicated team of award-winning web designers who are capable of visualizing astounding custom-designed websites for our customers, based on their business objectives and target audience, and have been successfully doing this since 2011. We always suggest going with a custom-designed website as it would be more impactful since it's tailor-made exclusively for you. However, if you're constrained with time and/or budget, we can work on customizing some pre-existing templates too for you.If you're still confused between choosing a custom web design or a template option, we have written a blog on custom design websites vs pre-made templates that might give you some more insights on this.",
    },
    {
      question: "In which technology should I do my web development?",
      answer:
        "The technology that you should choose for your web design and web development projects completely depends on the type of project.As a leading web development company in India, we work on a bunch of technology stacks, though below are some recommended ones:So if it's a normal informational website, you can go with any leading CMS like WordPress (or Joomla/ Drupal) and if it's an eCommerce we suggest going with Magento or WooCommerce. If it's a custom web application development, you could consider going with the latest trending technologies like MERN stack or MEAN stack. Kotlin for Android and Swift for iOS for native mobile apps and Flutter or React Native for hybrid mobile app development are the recommended options.Having said that, as the technology opted depends on your requirement and audience targeted, we normally offer a free primary consultation on which technology you should opt for your web designing or development requirement. Just contact us with your requirements for the same!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            FAQs
          </h2>
          <span className="w-14 h-1 bg-blue-500 inline-block "></span>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-dashed  border-gray-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className={`text-blue-500 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>
              <div
                className={`px-6 pt-2 pb-4 bg-gray-50 text-gray-600 transition-all duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
