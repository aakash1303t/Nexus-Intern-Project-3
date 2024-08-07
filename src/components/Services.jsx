// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Custom Software Development", description: "Tailored software solutions for your business needs. We specialize in creating bespoke software solutions that are perfectly aligned with your unique business needs and objectives. Our team of experienced developers will work closely with you to understand your requirements and deliver a tailored software product that enhances efficiency, improves productivity, and supports your long-term goals. From initial consultation to final implementation, we ensure that every aspect of your custom software is designed to meet your specific challenges and opportunities." },
  { title: "AI Integration", description: "Implement AI technologies to optimize processes. Harness the power of artificial intelligence to drive innovation and optimize your business processes. Our AI integration services involve incorporating advanced machine learning, natural language processing, and other AI technologies into your existing systems. By leveraging AI, we help you automate routine tasks, gain deeper insights from your data, and improve decision-making. Whether you're looking to enhance customer experiences, streamline operations, or develop new products, our AI solutions are designed to deliver measurable improvements and a competitive edge." },
  { title: "Cloud Services", description: "Secure and scalable cloud-based solutions. Our cloud services provide you with secure, scalable, and reliable solutions to meet your growing business needs. We offer comprehensive cloud strategies that include migration, management, and optimization of your cloud infrastructure. With our expertise in cloud platforms, we ensure that your data is protected, your applications are accessible, and your resources are used efficiently. Whether you need to enhance collaboration, reduce IT costs, or support a remote workforce, our cloud services are designed to provide flexibility, performance, and peace of mind." }
];


const Services = () => {
  return (
    <section id="services" className="text-gray-300 py-40">
      <div className="container mx-auto text-center px-5">
        <h2 className="text-2xl md:text-3xl text-red-600 font-bold mb-6">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 bg-opacity-90 border hover:border-red-600 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
