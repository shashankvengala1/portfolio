import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { id: 1, name: 'Java Full Stack', issuer: 'ABC Technology Training & Upskilling', date: '2021', icon: '🏆' },
    { id: 2, name: 'PostgreSQL Database Administration - Part 2', issuer: 'Udemy', date: '2022', icon: '🏅' },
    { id: 3, name: 'PostgreSQL Database Administration - Part 1', issuer: 'Udemy', date: '2022', icon: '🏅' }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto rounded mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full md:w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-teal-400 dark:text-teal-300 mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-teal-400 dark:text-teal-300 font-medium">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="border-l-4 border-teal-400 dark:border-teal-300 pl-6 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                B.Tech/B.E. in Electrical
              </h4>
              <p className="text-teal-400 dark:text-teal-300 font-medium mb-2">
                Jawaharlal Nehru Technological University (JNTU)
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="w-4 h-4 text-teal-400 dark:text-teal-300 mr-2" />
                <span>Graduated 2019</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Marks: 60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
