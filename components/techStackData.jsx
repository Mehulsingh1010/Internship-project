'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const techCategories = {
  Backend: [
    {
      name: 'Node.js',
      imageUrl: 'https://nodejs.org/static/images/logo.svg',
      alt: 'Node.js logo - JavaScript runtime built on Chrome V8 JavaScript engine'
    },
    {
      name: 'PHP',
      imageUrl: 'https://www.php.net/images/logos/new-php-logo.svg',
      alt: 'PHP logo - Server-side scripting language'
    },
    {
      name: 'Python',
      imageUrl: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
      alt: 'Python logo - High-level programming language'
    },
    {
      name: 'Ruby on Rails',
      imageUrl: 'https://rubyonrails.org/images/rails-logo.svg',
      alt: 'Ruby on Rails logo - Web application framework'
    },
    {
      name: 'Java',
      imageUrl: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
      alt: 'Java logo - Object-oriented programming language'
    },
    {
      name: '.NET Core',
      imageUrl: 'https://dotnet.microsoft.com/static/images/logo.png',
      alt: '.NET Core logo - Free, open-source development platform'
    },
    {
      name: 'Go',
      imageUrl: 'https://go.dev/images/go-logo-blue.svg',
      alt: 'Go logo - Programming language created by Google'
    }
  ],
  Frontend: [
    {
      name: 'React',
      imageUrl: 'https://reactjs.org/logo-og.png',
      alt: 'React logo - JavaScript library for building user interfaces'
    },
    {
      name: 'Vue.js',
      imageUrl: 'https://vuejs.org/images/logo.png',
      alt: 'Vue.js logo - Progressive JavaScript framework'
    },
    {
      name: 'Angular',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      alt: 'Angular logo - Platform for building mobile and desktop web applications'
    }
  ],
  Databases: [
    {
      name: 'MySQL',
      imageUrl: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
      alt: 'MySQL logo - Open-source relational database management system'
    },
    {
      name: 'MongoDB',
      imageUrl: 'https://www.mongodb.com/assets/images/global/leaf.png',
      alt: 'MongoDB logo - Document-oriented NoSQL database'
    },
    {
      name: 'PostgreSQL',
      imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png',
      alt: 'PostgreSQL logo - Advanced open-source database'
    }
  ],
  CMS: [
    {
      name: 'WordPress',
      imageUrl: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png',
      alt: 'WordPress logo - Content management system'
    },
    {
      name: 'Drupal',
      imageUrl: 'https://www.drupal.org/files/Wordmark_blue_RGB.png',
      alt: 'Drupal logo - Content management framework'
    }
  ],
  CloudTesting: [
    {
      name: 'Jenkins',
      imageUrl: 'https://www.jenkins.io/images/jenkins-logo.svg',
      alt: 'Jenkins logo - Open-source automation server'
    },
    {
      name: 'Selenium',
      imageUrl: 'https://www.selenium.dev/images/selenium_logo_square_green.png',
      alt: 'Selenium logo - Web browser automation tool'
    }
  ],
  DevOps: [
    {
      name: 'Docker',
      imageUrl: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png',
      alt: 'Docker logo - Platform for developing, shipping, and running applications'
    },
    {
      name: 'Kubernetes',
      imageUrl: 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
      alt: 'Kubernetes logo - Container orchestration platform'
    }
  ]
};

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('Backend');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
        </div>
        
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-medium relative ${
              activeCategory === category ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            {category}
            {activeCategory === category && (
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-600"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {techCategories[activeCategory].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={tech.imageUrl}
                alt={tech.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <span className="text-center font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;

