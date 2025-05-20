import { useState, useEffect, useRef } from 'react';
import { Calendar, Building } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      title: 'Database Developer',
      company: 'Nexgensis Technologies',
      period: 'Feb 2024 - Present',
      description: 'Working on data warehouse design, ETL pipelines, and reporting solutions.',
      projects: [
        {
          name: 'Quality Management System (QMS) Reporting for SII',
          description: 'Designed a 3-tiered data warehouse architecture for monitoring operational and regulatory Quality KPIs at the Serum Institute of India.',
          technologies: ['PostgreSQL', 'DBT', 'Airbyte', 'Airflow', 'Power BI']
        },
        {
          name: 'DataZen – Data Quality Monitoring Platform',
          description: 'Developed a comprehensive data quality and reporting platform for ingesting data, performing quality checks, and delivering insights.',
          technologies: ['PostgreSQL', 'Power BI', 'Linux', 'Shell Scripts']
        }
      ]
    },
    {
      id: 2,
      title: 'PostgreSQL Developer',
      company: 'Procreate Techno Systems',
      period: 'Jul 2021 - Aug 2023',
      description: 'Focused on database development, optimization, and administration for healthcare applications.',
      projects: [
        {
          name: 'Emergency Health Services',
          description: 'Developed and maintained database solutions for emergency health services, including the Emergency Response Officer (ERO) module.',
          technologies: ['PostgreSQL', 'Shell Scripting', 'DBLink', 'Cron Jobs']
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const index = Number(entry.target.getAttribute('data-index'));
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('.experience-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto rounded mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey as a Database Developer and Data Engineer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-400 dark:bg-teal-300 opacity-30"></div>

          <div>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-index={index}
                className={`experience-item mb-12 transition-all duration-700 ease-in-out ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform transition hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <Building className="w-5 h-5 text-teal-400 dark:text-teal-300 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{exp.title}</h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                      <div className="space-y-4">
                        {exp.projects.map((project, idx) => (
                          <div key={idx} className="border-l-4 border-teal-400 dark:border-teal-300 pl-4 py-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-teal-400 dark:text-teal-300 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 bg-teal-400 dark:bg-teal-300 rounded-full z-10 relative">
                        <div className="absolute inset-0 bg-teal-400 dark:bg-teal-300 rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
