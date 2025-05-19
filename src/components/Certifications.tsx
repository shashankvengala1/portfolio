import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Java Full Stack',
      issuer: 'Oracle',
      date: '2021',
      icon: '🏆'
    },
    {
      id: 2,
      name: 'PostgreSQL Database Administration on Windows/Linux - Part 2',
      issuer: 'EDB',
      date: '2022',
      icon: '🏅'
    },
    {
      id: 3,
      name: 'PostgreSQL Database Administration on Windows/Linux - Part 1',
      issuer: 'EDB',
      date: '2021',
      icon: '🏅'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#F5F7FA] dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto mb-6"></div>
          <p className="text-[#333333] dark:text-[#E0E0E0] max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 w-full md:w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex items-center text-[#666666] dark:text-[#A0A0A0] text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-2">{cert.name}</h3>
              <p className="text-[#2CA6A4] dark:text-[#3DB9B7] font-medium">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-[#FFD700] mr-3" />
              <h3 className="text-xl font-bold text-[#0A2342] dark:text-white">Education</h3>
            </div>
            
            <div className="border-l-4 border-[#2CA6A4] dark:border-[#3DB9B7] pl-6 py-2">
              <h4 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-1">B.Tech/B.E. in Electrical</h4>
              <p className="text-[#2CA6A4] dark:text-[#3DB9B7] font-medium mb-2">Jawaharlal Nehru Technological University (JNTU)</p>
              <div className="flex items-center text-[#666666] dark:text-[#A0A0A0] mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Graduated 2019</span>
              </div>
              <p className="text-[#333333] dark:text-[#E0E0E0]">Marks - 60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
