import { useState } from 'react';
import { FileText, Database, BarChart3, Code } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <section id="about" className="py-20 bg-[#F5F7FA] dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex border-b dark:border-gray-700 mb-6">
                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'summary'
                      ? 'text-[#2CA6A4] dark:text-[#3DB9B7] border-b-2 border-[#2CA6A4] dark:border-[#3DB9B7]'
                      : 'text-[#333333] dark:text-[#E0E0E0]'
                  }`}
                  onClick={() => setActiveTab('summary')}
                >
                  Summary
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'expertise'
                      ? 'text-[#2CA6A4] dark:text-[#3DB9B7] border-b-2 border-[#2CA6A4] dark:border-[#3DB9B7]'
                      : 'text-[#333333] dark:text-[#E0E0E0]'
                  }`}
                  onClick={() => setActiveTab('expertise')}
                >
                  Expertise
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'background'
                      ? 'text-[#2CA6A4] dark:text-[#3DB9B7] border-b-2 border-[#2CA6A4] dark:border-[#3DB9B7]'
                      : 'text-[#333333] dark:text-[#E0E0E0]'
                  }`}
                  onClick={() => setActiveTab('background')}
                >
                  Background
                </button>
              </div>

              <div className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed">
                {activeTab === 'summary' && (
                  <div>
                    <p className="mb-4">
                      I am a results-driven Data Engineer with over 3+ years of experience in database development and administration, 
                      specializing in PostgreSQL and end-to-end data pipeline implementation.
                    </p>
                    <p className="mb-4">
                      I have proven expertise in designing and analyzing data warehouses, optimizing SQL queries, automating data ingestion pipelines, 
                      and enabling enterprise reporting solutions using Power BI and Tableau.
                    </p>
                    <p>
                      I am adept at working in both Windows and Linux environments, with hands-on experience in ETL orchestration tools such as 
                      Airbyte, DBT, and Airflow.
                    </p>
                  </div>
                )}

                {activeTab === 'expertise' && (
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Designing and implementing scalable data warehouse architectures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Optimizing SQL queries and database performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Developing and managing ETL/ELT pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Creating interactive dashboards and visualizations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Database administration and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#2CA6A4] dark:text-[#3DB9B7] mr-2">•</span>
                        <span>Automating workflows with scripting and orchestration tools</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'background' && (
                  <div>
                    <p className="mb-4">
                      I hold a B.Tech/B.E. in Electrical from Jawaharlal Nehru Technological University (JNTU), graduating in 2019.
                    </p>
                    <p className="mb-4">
                      My career began at Procreate Techno Systems where I worked as a PostgreSQL Developer (Database Administrator) 
                      for over 2 years, focusing on healthcare data solutions.
                    </p>
                    <p>
                      Currently, I am working at Nexgensis Technologies as a Database Developer, where I design and implement 
                      data warehouse solutions and quality monitoring platforms for enterprise clients.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Database className="w-10 h-10 text-[#2CA6A4] dark:text-[#3DB9B7] mr-3" />
                  <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Database Expert</h3>
                </div>
                <p className="text-[#333333] dark:text-[#E0E0E0]">
                  Specialized in PostgreSQL with extensive experience in database design, optimization, and administration.
                </p>
              </div>

              <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <FileText className="w-10 h-10 text-[#2CA6A4] dark:text-[#3DB9B7] mr-3" />
                  <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">ETL Developer</h3>
                </div>
                <p className="text-[#333333] dark:text-[#E0E0E0]">
                  Proficient in building data pipelines using Airbyte, DBT, and Airflow for efficient data transformation.
                </p>
              </div>

              <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-10 h-10 text-[#2CA6A4] dark:text-[#3DB9B7] mr-3" />
                  <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Data Visualizer</h3>
                </div>
                <p className="text-[#333333] dark:text-[#E0E0E0]">
                  Skilled in creating interactive dashboards using Power BI, Tableau, and other visualization tools.
                </p>
              </div>

              <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Code className="w-10 h-10 text-[#2CA6A4] dark:text-[#3DB9B7] mr-3" />
                  <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Script Developer</h3>
                </div>
                <p className="text-[#333333] dark:text-[#E0E0E0]">
                  Experienced in Python and shell scripting for automation and data processing tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
