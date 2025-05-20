import { useState } from 'react';
import { FileText, Database, BarChart3, Code } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'expertise' | 'background'>('summary');

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto rounded mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Tabs & Content */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              {/* Tab Buttons */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                {[
                  { id: 'summary', label: 'Summary' },
                  { id: 'expertise', label: 'Expertise' },
                  { id: 'background', label: 'Background' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 font-medium transition ${
                      activeTab === tab.id
                        ? 'text-teal-400 dark:text-teal-300 border-b-2 border-teal-400 dark:border-teal-300'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeTab === 'summary' && (
                  <>
                    <p className="mb-4">
                      I am a results‑driven Data Engineer with over 3 years of experience in database development and administration, specializing in PostgreSQL and end‑to‑end data pipeline implementation.
                    </p>
                    <p className="mb-4">
                      I have proven expertise in designing and analyzing data warehouses, optimizing SQL queries, automating ingestion pipelines, and delivering enterprise reporting solutions.
                    </p>
                    <p>
                      Comfortable in Windows & Linux, and skilled with Airbyte, DBT, Airflow, Power BI, and Tableau.
                    </p>
                  </>
                )}

                {activeTab === 'expertise' && (
                  <ul className="space-y-3">
                    {[
                      'Scalable data warehouse architectures',
                      'SQL query & performance optimization',
                      'ETL/ELT pipeline development',
                      'Interactive dashboard & visualization',
                      'Database administration & maintenance',
                      'Workflow automation with scripting',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-400 dark:text-teal-300 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'background' && (
                  <>
                    <p className="mb-4">
                      B.Tech in Electrical Engineering from JNTU (2019).
                    </p>
                    <p className="mb-4">
                      Started at Procreate Techno Systems as a PostgreSQL Developer focusing on healthcare data solutions.
                    </p>
                    <p>
                      Now at Nexgensis Technologies designing data warehouse solutions and quality monitoring platforms.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Icon Cards */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {[
              { icon: <Database className="w-10 h-10 text-teal-400 dark:text-teal-300 mr-3" />, title: 'Database Expert', text: 'PostgreSQL design, optimization & admin expertise.' },
              { icon: <FileText className="w-10 h-10 text-teal-400 dark:text-teal-300 mr-3" />, title: 'ETL Developer', text: 'Airbyte, DBT & Airflow pipelines for smooth data flow.' },
              { icon: <BarChart3 className="w-10 h-10 text-teal-400 dark:text-teal-300 mr-3" />, title: 'Data Visualizer', text: 'Interactive dashboards with Power BI, Tableau, and more.' },
              { icon: <Code className="w-10 h-10 text-teal-400 dark:text-teal-300 mr-3" />, title: 'Script Developer', text: 'Python & shell scripting for robust automation.' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
