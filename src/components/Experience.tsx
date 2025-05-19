import { useState, useEffect } from 'react';
import { Calendar, Building } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the appearance of timeline items
          const timer = setInterval(() => {
            setVisibleItems(prev => {
              if (prev.length < experiences.length) {
                return [...prev, prev.length];
              }
              clearInterval(timer);
              return prev;
            });
          }, 300);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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
      title: 'PostgreSQL Developer (Database Administrator)',
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

  return (
    <section id="experience" className="py-20 bg-[#F5F7FA] dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto mb-6"></div>
          <p className="text-[#333333] dark:text-[#E0E0E0] max-w-2xl mx-auto">
            My professional journey as a Database Developer and Data Engineer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2CA6A4] dark:bg-[#3DB9B7] opacity-30"></div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`mb-12 transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <Building className="w-5 h-5 text-[#2CA6A4] dark:text-[#3DB9B7] mr-2" />
                        <h3 className="text-xl font-bold text-[#0A2342] dark:text-white">{exp.company}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-[#333333] dark:text-[#E0E0E0] mb-2">{exp.title}</h4>
                      <div className="flex items-center text-[#666666] dark:text-[#A0A0A0] mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-[#333333] dark:text-[#E0E0E0] mb-4">{exp.description}</p>
                      
                      <div className="space-y-4">
                        {exp.projects.map((project, idx) => (
                          <div key={idx} className="border-l-4 border-[#2CA6A4] dark:border-[#3DB9B7] pl-4 py-1">
                            <h5 className="font-semibold text-[#0A2342] dark:text-white mb-2">{project.name}</h5>
                            <p className="text-sm text-[#333333] dark:text-[#E0E0E0] mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIdx) => (
                                <span 
                                  key={techIdx}
                                  className="text-xs px-2 py-1 bg-[#F0F7F7] dark:bg-[#1A2A2A] text-[#2CA6A4] dark:text-[#3DB9B7] rounded-full"
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
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className="w-6 h-6 bg-[#2CA6A4] dark:bg-[#3DB9B7] rounded-full z-10 relative">
                        <div className="absolute inset-0 bg-[#2CA6A4] dark:bg-[#3DB9B7] rounded-full animate-ping opacity-30"></div>
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
