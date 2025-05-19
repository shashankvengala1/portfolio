import { useEffect, useRef } from 'react';
import { ArrowDown, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    particlesRef.current.appendChild(canvas);

    const resizeCanvas = () => {
      if (particlesRef.current) {
        canvas.width = particlesRef.current.offsetWidth;
        canvas.height = particlesRef.current.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#0A2342' : i % 3 === 1 ? '#2CA6A4' : '#F5F7FA',
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(44, 166, 164, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (particlesRef.current && canvas.parentNode === particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <p className="text-[#2CA6A4] dark:text-[#3DB9B7] font-medium mb-2 tracking-wider">DATABASE DEVELOPER</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A2342] dark:text-white mb-4">
              Shashank <span className="text-[#2CA6A4] dark:text-[#3DB9B7]">Vengala</span>
            </h1>
            <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mb-6"></div>
            <p className="text-lg text-[#333333] dark:text-[#E0E0E0] mb-8 max-w-xl">
              A results-driven Data Engineer with over 3+ years of experience in database development and administration, 
              specializing in PostgreSQL and end-to-end data pipeline implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-[#333333] dark:text-[#E0E0E0]">
                <Mail className="w-5 h-5 mr-2 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                <span>shashaank.shashank@gmail.com</span>
              </div>
              <div className="flex items-center text-[#333333] dark:text-[#E0E0E0]">
                <Phone className="w-5 h-5 mr-2 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                <span>+91-8499883581</span>
              </div>
              <div className="flex items-center text-[#333333] dark:text-[#E0E0E0]">
                <MapPin className="w-5 h-5 mr-2 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                <span>Hyderabad, INDIA</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/shashankvengala"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#2CA6A4] dark:border-[#3DB9B7] text-[#2CA6A4] dark:text-[#3DB9B7] font-medium rounded-md transition-all duration-300 hover:bg-[#2CA6A4] hover:text-white dark:hover:bg-[#3DB9B7] dark:hover:text-[#121212] transform hover:-translate-y-1 hover:shadow-lg"
              >
                Connect on LinkedIn
              </a>
              <a
                href={`${import.meta.env.BASE_URL}SHASHANK_VENGALA_Database_Developer_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#2CA6A4] hover:bg-[#249a98] dark:bg-[#3DB9B7] dark:hover:bg-[#35a3a1] text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                View Résumé
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#2CA6A4] dark:border-[#3DB9B7] shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}Shashank%20Passport%20photo.jpeg`}
                alt="Shashank Vengala"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#2CA6A4] dark:text-[#3DB9B7]">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
