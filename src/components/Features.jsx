import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiCode, FiGlobe } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Built for speed with cutting-edge technology that delivers results in milliseconds.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption to keep your data safe.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Growth',
      description: 'Scale from startup to enterprise with our flexible infrastructure.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: FiCode,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and SDKs for easy integration and customization.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Serve customers worldwide with our global CDN and infrastructure.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;