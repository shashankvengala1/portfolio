import { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'database', name: 'Database' },
    { id: 'dataeng', name: 'Data Engineering' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'programming', name: 'Programming' }
  ];

  const skills = [
    { name: 'PostgreSQL', level: 95, category: 'database' },
    { name: 'SQL Server', level: 85, category: 'database' },
    { name: 'PL/SQL', level: 90, category: 'database' },
    { name: 'Triggers', level: 88, category: 'database' },
    { name: 'Views', level: 92, category: 'database' },
    { name: 'Materialized Views', level: 90, category: 'database' },
    { name: 'Database Administration', level: 85, category: 'database' },
    { name: 'Data Build Tool (DBT)', level: 88, category: 'dataeng' },
    { name: 'Airflow', level: 85, category: 'dataeng' },
    { name: 'Airbyte', level: 82, category: 'dataeng' },
    { name: 'Power BI', level: 90, category: 'visualization' },
    { name: 'DAX', level: 85, category: 'visualization' },
    { name: 'Apache Superset', level: 80, category: 'visualization' },
    { name: 'Grafana', level: 78, category: 'visualization' },
    { name: 'Tableau', level: 82, category: 'visualization' },
    { name: 'Python', level: 80, category: 'programming' },
    { name: 'Shell Scripting', level: 75, category: 'programming' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setAnimatedSkills(skills.map(skill => skill.name));
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto mb-6 rounded"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise spans database technologies, data engineering tools, visualization platforms, and programming languages.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 focus:outline-none ${
                activeCategory === category.id
                  ? 'bg-teal-400 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-teal-400 dark:text-teal-300 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-teal-400 dark:bg-teal-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Expertise Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Database Technologies',
                items: ['PostgreSQL Development', 'Database Administration', 'Query Optimization', 'Stored Procedures', 'Triggers & Functions']
              },
              {
                title: 'Data Engineering',
                items: ['ETL/ELT Pipelines', 'Data Warehousing', 'Data Modeling', 'Workflow Orchestration', 'Data Quality Checks']
              },
              {
                title: 'Data Visualization',
                items: ['Dashboard Creation', 'KPI Reporting', 'Interactive Visuals', 'Data Storytelling', 'Executive Reporting']
              },
              {
                title: 'Automation',
                items: ['Shell Scripting', 'Python Development', 'Cron Jobs', 'Backup Automation', 'Monitoring Solutions']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
                <h4 className="text-lg font-medium text-teal-400 dark:text-teal-300 mb-3">{section.title}</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {section.items.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
