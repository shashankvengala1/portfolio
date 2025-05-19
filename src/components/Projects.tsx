import { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'datawarehouse', name: 'Data Warehouse' },
    { id: 'etl', name: 'ETL/ELT' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'database', name: 'Database' }
  ];

  const projects = [
    {
      id: 'qms',
      title: 'Quality Management System (QMS) Reporting',
      client: 'Serum Institute of India',
      categories: ['datawarehouse', 'etl', 'visualization'],
      image: '/project-qms.jpg',
      description: 'A comprehensive quality management system designed to monitor operational and regulatory Quality KPIs at the Serum Institute of India.',
      objective: 'Design a scalable data warehouse to consolidate data from multiple systems, ensuring actionable insights and compliance reporting through interactive dashboards.',
      contributions: [
        'Designed a 3-tiered data warehouse architecture (Bronze-Silver-Gold layers) based on best practices in PostgreSQL',
        'Developed DBT models to standardize transformations and implement audit logs',
        'Migrated critical operational datasets from Microsoft SQL Server to PostgreSQL using Airbyte',
        'Built materialized views with incremental refresh strategies to optimize reporting layer performance',
        'Created and managed Airflow DAGs to orchestrate ETL workflows and data quality checks',
        'Implemented deduplication and partitioning strategies to reduce query times by 40%',
        'Developed interactive Power BI dashboards with drill-through and slicer functionalities'
      ],
      technologies: ['PostgreSQL', 'DBT', 'Airbyte', 'Airflow', 'Power BI']
    },
    {
      id: 'datazen',
      title: 'DataZen – Data Quality Monitoring Platform',
      client: 'Nexgensis Technologies',
      categories: ['database', 'visualization'],
      image: '/project-datazen.jpg',
      description: 'A comprehensive data quality and reporting platform designed to ingest data from various sources, perform rigorous data quality checks, and store the results in a PostgreSQL database.',
      objective: 'Deliver high-quality, procedure-driven reports and dashboards within the application\'s executive interface, providing both real-time insights and end-of-day statistics on data trust scores across different levels.',
      contributions: [
        'Optimized and tuned database queries to enhance the performance of data quality checks',
        'Developed complex stored procedures, functions, and triggers to automate data validation',
        'Created and managed views and materialized views tailored to reporting requirements',
        'Designed and developed custom reports and dashboards for real-time insights',
        'Automated backup processes using shell scripts, scheduled through Cron jobs'
      ],
      technologies: ['PostgreSQL', 'Power BI', 'Linux', 'Shell Scripts']
    },
    {
      id: 'emergency',
      title: 'Emergency Health Services',
      client: 'Procreate Techno Systems',
      categories: ['database'],
      image: '/project-emergency.jpg',
      description: 'A healthcare system focused on providing emergency health services through multiple modules, primarily the Emergency Response Officer (ERO) module.',
      objective: 'Handle emergency calls and dispatch ambulances to incident locations efficiently while maintaining comprehensive data management.',
      contributions: [
        'Optimized and tuned queries to enhance database performance',
        'Developed complex stored procedures, functions, and triggers for the ERO module',
        'Created views and materialized views based on specific project requirements',
        'Utilized DBLink functions to develop queries for cross-database requirements',
        'Developed various reports tailored to the healthcare domain',
        'Automated backup processes with shell scripts and Cron jobs',
        'Managed database roles and privileges for secure access'
      ],
      technologies: ['PostgreSQL', 'Shell Scripting', 'DBLink', 'Cron Jobs']
    }
  ];

  useEffect(() => {
    // Animate projects when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setVisibleProjects(projects.map(p => p.id));
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto mb-6"></div>
          <p className="text-[#333333] dark:text-[#E0E0E0] max-w-2xl mx-auto">
            Explore my key projects showcasing database development, data engineering, and visualization expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#2CA6A4] dark:bg-[#3DB9B7] text-white'
                  : 'bg-white dark:bg-[#121212] text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-[#121212] rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
                visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${expandedProject === project.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-[#0A2342] to-[#2CA6A4] dark:from-[#121212] dark:to-[#3DB9B7] flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white px-4 text-center">{project.title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 bg-[#2CA6A4] dark:bg-[#3DB9B7] text-white text-xs px-3 py-1 rounded-tr-lg">
                  {project.client}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-[#333333] dark:text-[#E0E0E0] mb-4">
                  {expandedProject === project.id ? project.description : `${project.description.substring(0, 120)}...`}
                </p>
                
                {expandedProject === project.id && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-2">Objective</h4>
                      <p className="text-[#333333] dark:text-[#E0E0E0]">{project.objective}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-2">Key Contributions</h4>
                      <ul className="list-disc pl-5 text-[#333333] dark:text-[#E0E0E0] space-y-1">
                        {project.contributions.map((contribution, idx) => (
                          <li key={idx}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-[#F0F7F7] dark:bg-[#1A2A2A] text-[#2CA6A4] dark:text-[#3DB9B7] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => toggleProject(project.id)}
                  className="text-[#2CA6A4] dark:text-[#3DB9B7] font-medium hover:underline focus:outline-none"
                >
                  {expandedProject === project.id ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
