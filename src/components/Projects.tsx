import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, MessageCircleMore } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const categories = ['All', 'Acrylic', 'Portrait', 'Decorative', 'Bottle Art', 'Canvas'];
  
  const projects: Project[] = [
    {
  title: "Gorakhnath Swaroop – Acrylic Canvas Masterpiece",
  description: "This is a customized painting in 3.5×3 feet portrait on 5 feet canvas. It took me 66 hours to paint this artwork. This is Acrylic paintings on canvas with varnish proof quality. Gorakhnath swaroop of Mahadev.",
  image: "/canvas.jpeg",
  technologies: ["Acrylic", "Canvas", "Varnish Proof", "Size: 3.5×3 ft on 5 ft Canvas", "66 Hours", "Price: ₹15000"],
  category: "Canvas",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20painting%20Gorakhnath%20Swaroop%20%E2%80%93%20Acrylic%20Canvas%20Masterpiece.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
    {
  title: "Moonlit Bond – Textured Acrylic Portrait",
  description: "A dreamy couple portrait with moon-textured background and soft varnish finish, painted to express deep love and connection.",
  image: "/image01.jpg",
  technologies: ["Acrylic", "Textured Art", "Canvas", "Varnish Finish", "Size: 55cm × 50cm", "Price: ₹4000"],
  category: "Acrylic",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Moonlit%20Bond%20%E2%80%93%20Textured%20Acrylic%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Sketch of Honor – Textured Sketch Portrait",
  description: "A sketch-style acrylic painting of an officer, highlighting pride, courage, and respect through bold textures.",
  image: "/image02.jpg",
  technologies: ["Acrylic", "Textured Art", "Sketch Style", "Canvas", "Medium Size", "Price: ₹2800"],
  category: "Acrylic",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Sketch%20of%20Honor%20%E2%80%93%20Textured%20Sketch%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Acrylic Essence – Classic Medium Portrait",
  description: "A peaceful and expressive portrait made with soft acrylic strokes, perfect for capturing calm emotions on canvas.",
  image: "/image03.jpg",
  technologies: ["Acrylic", "Canvas", "Medium Size", "Custom Portrait", "Price: ₹2800"],
  category: "Acrylic",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Acrylic%20Essence%20%E2%80%93%20Classic%20Medium%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Capt. Shubham Gupta – Customized Canvas Portrait",
  description: "A tribute painting of Captain Shubham Gupta, showing bravery and patriotism through powerful details and color.",
  image: "/image04.jpg",
  technologies: ["Acrylic", "Canvas", "Medium Size", "Custom Painting", "Price: ₹2800"],
  category: "Portrait",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Capt.%20Shubham%20Gupta%20%E2%80%93%20Customized%20Canvas%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Lt. Gen. Y.K. Joshi – Small Canvas Portrait",
  description: "A detailed small portrait of Lt. Gen. Y.K. Joshi, capturing honor, leadership, and legacy in a compact frame.",
  image: "/image05.jpg",
  technologies: ["Acrylic", "Canvas", "Small Size", "Custom Portrait", "Price: ₹2200"],
  category: "Portrait",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Lt.%20Gen.%20Y.K.%20Joshi%20%E2%80%93%20Small%20Canvas%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},   
    {
      title: "Ocean Flow – Wooden Resin Artwork",
      description: "A handcrafted 12-inch wooden resin artwork inspired by beach rain patterns. Designed with flowing textures and abstract charm.",
      image: "/image06.jpg",
      technologies: ["Wooden Base", "Resin Art", "12-inch", "Decorative Piece", "Beach Rain Pattern", "Sold Out", "Price: ₹2200"],
      category: "Decorative",
      github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Ocean%20Flow%20%E2%80%93%20Wooden%20Resin%20Artwork.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
    },
    {
  title: "Reflections of Elegance – Custom Mirror Art",
  description: "A 12-inch decorative mirror artwork, customized with intricate detailing to elevate your home ambiance.",
  image: "/image07.jpg",
  technologies: ["Decorative Mirror", "Custom Design", "12-inch", "Wall Art", "Home Decor", "Price: ₹1800"],
  category: "Decorative",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Reflections%20of%20Elegance%20%E2%80%93%20Custom%20Mirror%20Art.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Clay Charm – 3D Decorative Wall Art",
  description: "A beautifully crafted 12-inch decorative wall piece with 3D clay work, adding vibrant texture and charm to any space.",
  image: "/image08.jpg",
  technologies: ["Decorative Art", "3D Clay Work", "12-inch", "Wall Decor", "Handmade Design", "Price: ₹2000"],
  category: "Decorative",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Clay%20Charm%20%E2%80%93%203D%20Decorative%20Wall%20Art.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Couple Essence – Bottle Art Home Decor",
  description: "A custom 3D bottle art piece representing couple aesthetics, designed for intimate and cozy home decoration.",
  image: "/image09.jpg",
  technologies: ["Home Decor", "3D Bottle Art", "Custom Design", "Couple Theme", "Decorative Bottle", "Price: ₹1500"],
  category: "Bottle Art",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Couple%20Essence%20%E2%80%93%20Bottle%20Art%20Home%20Decor.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Dashavatara – Acrylic Portrait",
  description: "A divine customized painting of Lord Vishnu's Dashavatara, rendered in acrylics with spiritual detail and reverence.",
  image: "/image-10.jpg",
  technologies: ["Acrylic", "Dashavatara Theme", "Custom Painting", "Religious Art", "Vishnu Portrait", "Price: ₹4500"],
  category: "Acrylic",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Dashavatara%20%E2%80%93%20Vishnu%20Acrylic%20Portrait.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Couple Glow – 3D Bottle Art Decor",
  description: "An artistic bottle couple decor piece customized for gifting or intimate home corners. A fusion of color and 3D elegance.",
  image: "/image-11.jpg",
  technologies: ["3D Bottle Art", "Home Decor", "Couple Theme", "Custom Design", "Decorative Bottle", "Price: ₹1500"],
  category: "Bottle Art",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Couple%20Glow%20%E2%80%93%203D%20Bottle%20Art%20Decor.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
},
{
  title: "Lippan Grace – Wooden 3D Wall Art",
  description: "A 12-inch handcrafted 3D Lippan artwork on a wooden base, ideal for traditional and modern interior decor.",
  image: "/image-12.jpg",
  technologies: ["3D Lippan Art", "Wooden Base", "12-inch", "Handcrafted", "Custom Design", "Price: ₹1800"],
  category: "Decorative",
  github: "https://wa.me/917906099183?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20saw%20the%20sketch%20Lippan%20Grace%20%E2%80%93%20Wooden%203D%20Wall%20Art.%20I'm%20interested%20in%20placing%20an%20art%20order.%20Please%20guide%20me%20!"
}

  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in acrylics, portraits, decorative designs, and bottle art.
          </p>
        </motion.div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="project-card-inner flex flex-col bg-white dark:bg-dark-200 rounded-xl overflow-hidden card-shadow h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
                    >
                      <MessageCircleMore  size={16} className="mr-2" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === number
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;