import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Database, Server, Code, Brain, Cpu, MessageSquare, Sparkles, Settings, Cloud, Activity, Shuffle, Layers , Palette , PencilRuler, Blend, SprayCan} from 'lucide-react';

interface SkillCubeProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCube: React.FC<SkillCubeProps> = ({ icon, title, skills, delay }) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cubeRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && cubeRef.current) {
      gsap.fromTo(
        cubeRef.current,
        { 
          rotateY: -30, 
          rotateX: 15,
          y: 50,
          opacity: 0 
        },
        { 
          rotateY: 0, 
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: delay * 0.2
        }
      );
    }
  }, [isInView, delay]);

  return (
    <div 
      ref={cubeRef}
      className="skill-cube bg-white dark:bg-dark-200 rounded-xl p-6 card-shadow h-full opacity-0"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 flex-grow">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Service: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const skillCategories = [
    {
  icon: <Palette size={32} />,
  title: "Acrylic Portrait Painting",
  skills: [
    "Small: 30×25 cm (12×9 in) — ₹2200",
    "Medium: 45×40 cm (17×15 in) — ₹2800",
    "Large: 55×50 cm (21×19 in) — ₹4000",
    "Custom from photo/reference",
    "Varnished finish for durability",
    "Ideal for gifts & home décor"
  ]
},
{
  icon: <SprayCan size={32} />,
  title: "Lippan Art",
  skills: [
    "Traditional mud-mirror craft",
    "Intricate handcrafted designs",
    "Various sizes & colors",
    "Ethnic charm for walls",
    "Custom orders welcome"
  ]
},
{
  icon: <PencilRuler size={32} />,
  title: "Wooden Art + Decorative Item",
  skills: [
    "Resin coasters & trays",
    "Hand-painted wooden panels",
    "Bottle & mirror décor",
    "Rustic & modern fusion",
    "Made-to-order for homes & cafés"
  ]
},
{
  icon: <Blend size={32} />,
  title: "Pencil Sketch",
  skills: [
    "Realistic graphite sketches",
    "Pet, solo, couple & family",
    "High-quality textured paper",
    "Framing options available",
    "Custom from any photo"
  ]
},
    
    // {
    //   icon: <Shuffle size={32} />,
    //   title: "Vector Databases & Retrieval",
    //   skills: ["FAISS", "Pinecone", "ChromaDB", "AstroDB"]
    // }
  ];

  return (
    <section 
      id="service" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized in acrylic portraits, Lippan art, wooden resin décor, and pencil sketches crafting high-quality, personalized artworks with creativity and care.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCube
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
