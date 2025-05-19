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
    // Animate skills progressively
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            const allSkillNames = skills.map(skill => skill.name);
            setAnimatedSkills(allSkillNames);
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto mb-6"></div>
          <p className="text-[#333333] dark:text-[#E0E0E0] max-w-2xl mx-auto">
            My technical expertise spans database technologies, data engineering tools, visualization platforms, and programming languages.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#2CA6A4] dark:bg-[#3DB9B7] text-white'
                  : 'bg-white dark:bg-[#121212] text-[#333333] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-[#1E1E1E]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="bg-white dark:bg-[#121212] rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-[#0A2342] dark:text-white">{skill.name}</h3>
                <span className="text-[#2CA6A4] dark:text-[#3DB9B7] font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-[#2CA6A4] dark:bg-[#3DB9B7] h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F5F7FA] dark:bg-[#1E1E1E] rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white mb-4">Technical Expertise Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#121212] rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-medium text-[#2CA6A4] dark:text-[#3DB9B7] mb-3">Database Technologies</h4>
              <ul className="space-y-2 text-[#333333] dark:text-[#E0E0E0]">
                <li>• PostgreSQL Development</li>
                <li>• Database Administration</li>
                <li>• Query Optimization</li>
                <li>• Stored Procedures</li>
                <li>• Triggers & Functions</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#121212] rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-medium text-[#2CA6A4] dark:text-[#3DB9B7] mb-3">Data Engineering</h4>
              <ul className="space-y-2 text-[#333333] dark:text-[#E0E0E0]">
                <li>• ETL/ELT Pipelines</li>
                <li>• Data Warehousing</li>
                <li>• Data Modeling</li>
                <li>• Workflow Orchestration</li>
                <li>• Data Quality Checks</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#121212] rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-medium text-[#2CA6A4] dark:text-[#3DB9B7] mb-3">Data Visualization</h4>
              <ul className="space-y-2 text-[#333333] dark:text-[#E0E0E0]">
                <li>• Dashboard Creation</li>
                <li>• KPI Reporting</li>
                <li>• Interactive Visuals</li>
                <li>• Data Storytelling</li>
                <li>• Executive Reporting</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#121212] rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-medium text-[#2CA6A4] dark:text-[#3DB9B7] mb-3">Automation</h4>
              <ul className="space-y-2 text-[#333333] dark:text-[#E0E0E0]">
                <li>• Shell Scripting</li>
                <li>• Python Development</li>
                <li>• Cron Jobs</li>
                <li>• Backup Automation</li>
                <li>• Monitoring Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
