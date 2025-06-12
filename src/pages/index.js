import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faProjectDiagram,
  faGraduationCap,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faCss3Alt,
  faBootstrap,
  faGitAlt,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import ParticlesBackground from "../../components/ParticlesBackground";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [connectorHeights, setConnectorHeights] = useState({});

  const content = {
    fa: {
      name: "ستاره عزآبادی",
      title: "توسعه‌دهنده‌ی ارشد فرانت‌اند | متخصص ری‌اکت و نکست‌جی‌اس",
      summary:
        "توسعه‌دهنده‌ی ارشد فرانت‌اند با بیش از ۲ سال تجربه در طراحی و پیاده‌سازی اپلیکیشن‌های وب مقیاس‌پذیر و کاربرمحور با استفاده از React و Next.js. مسلط به معماری مبتنی بر کامپوننت، بهینه‌سازی عملکرد و طراحی ریسپانسیو. در محیط‌های تیمی رشد می‌کنم و با ارتباط مؤثر، پشتیبانی فنی و همکاری سازنده، به تحقق اهداف مشترک کمک می‌کنم. تمرکزم بر خلق تجربه‌های دیجیتال روان، کارآمد و لذت‌بخش برای کاربران است.",
      skills: {
        title: "مهارت‌ها",
        items: [
          { name: "جاوااسکریپت، ری‌اکت، نکست‌جی‌اس", icon: faReact, level: 90 },
          { name: "اچ‌تی‌ام‌ال۵، سی‌اس‌اس۳، سَس", icon: faCss3Alt, level: 95 },
          { name: "بوت‌استرپ، تیلویند سی‌اس‌اس", icon: faBootstrap, level: 70 },
          { name: "رست‌فول اِی‌پی‌آی، گیت", icon: faGitAlt, level: 80 },
          {
            name: "طراحی ریسپانسیو، دسترسی‌پذیری وب",
            icon: faHtml5,
            level: 90,
          },
          { name: "معماری مبتنی بر کامپوننت", icon: faJs, level: 85 },
        ],
      },
      experience: {
        title: "تجربه‌ی کاری",
        jobs: [
          {
            company: "هومنگر، گرگان",
            role: "توسعه‌دهنده‌ی فرانت‌اند (سطح متوسط)",
            date: "فروردین ۱۴۰۳ - اکنون",
            description:
              "توسعه‌ی بیش از ۵ اپلیکیشن وب ریسپانسیو با ری‌اکت و نکست‌جی‌اس که تعامل کاربران را ۳۰٪ افزایش داد. بهینه‌سازی کدهای قدیمی و کاهش ۲۰٪ زمان لود صفحات.",
          },
          {
            company: "ورکان، گرگان",
            role: "توسعه‌دهنده‌ی فرانت‌اند (جونیور)",
            date: "شهریور ۱۴۰۱ - اسفند ۱۴۰۲",
            description:
              "ساخت داشبوردهای موبایل‌فرندلی و بهبود تجربه‌ی کاربری در تیم‌های اگایل.",
          },
        ],
      },
      projects: {
        title: "پروژه‌ها",
        items: [
          { name: "هومنگر", tech: "نکست‌جی‌اس", link: "https://homeenger.com" },
          { name: "پروتیکا", tech: "ری‌اکت‌جی‌اس", link: "https://protika.ir" },
          {
            name: "نیکوگلستان",
            tech: "ری‌اکت‌جی‌اس",
            link: "https://nikogolestan.ir",
          },
        ],
      },
      education: {
        title: "تحصیلات",
        degree: "کارشناسی مهندسی نرم‌افزار",
        school: "مائده، گرگان",
        date: "شهریور ۱۴۰۰ - انتظار فارغ‌التحصیلی: خرداد ۱۴۰۴",
      },
      contact: {
        title: "تماس",
        email: "setareEzabadi@gmail.com",
        phone: "(+۹۸) ۹۳۸۶۳۸۹۸۰۴",
      },
    },
    en: {
      name: "Setare Ezabadi",
      title: "Senior Front-End Developer | React & Next.js Specialist",
      summary:
        "Senior Front-End Developer with 2+ years of experience in building robust, scalable, and user-focused web applications using React and Next.js. Skilled in component-based architecture, performance optimization, and responsive design. I thrive in collaborative environments, where I contribute to shared goals through effective communication, technical support, and teamwork. My goal is to create seamless and engaging user experiences that deliver both functionality and delight.",
      skills: {
        title: "Skills",
        items: [
          { name: "JavaScript, React, Next.js", icon: faReact, level: 90 },
          { name: "HTML5, CSS3, Sass", icon: faCss3Alt, level: 95 },
          { name: "Bootstrap, Tailwind CSS", icon: faBootstrap, level: 70 },
          { name: "RESTful APIs, Git", icon: faGitAlt, level: 80 },
          {
            name: "Responsive Design, Web Accessibility",
            icon: faHtml5,
            level: 90,
          },
          { name: "Component-Based Architecture", icon: faJs, level: 85 },
        ],
      },
      experience: {
        title: "Experience",
        jobs: [
          {
            company: "Homeenger, Gorgan",
            role: "Mid-Level Front-End Developer",
            date: "April 2024 - Present",
            description:
              "Developed 5+ responsive web applications using React and Next.js, increasing user engagement by 30%. Optimized legacy code, reducing page load time by 20%.",
          },
          {
            company: "Varkan, Gorgan",
            role: "Junior Front-End Developer",
            date: "September 2022 - March 2024",
            description:
              "Built mobile-friendly dashboards and enhanced UX in agile team settings.",
          },
        ],
      },
      projects: {
        title: "Projects",
        items: [
          { name: "Homeenger", tech: "Next.js", link: "https://homeenger.com" },
          { name: "Protika", tech: "React.js", link: "https://protika.ir" },
          {
            name: "NikoGolestan",
            tech: "React.js",
            link: "https://nikogolestan.ir",
          },
        ],
      },
      education: {
        title: "Education",
        degree: "Bachelor of Science in Computer Software Engineering",
        school: "Maede, Gorgan",
        date: "September 2021 - Expected Graduation: June 2025",
      },
      contact: {
        title: "Contact",
        email: "setareEzabadi@gmail.com",
        phone: "(+98) 9386389804",
      },
    },
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0, // کامل ناپدید می‌شه
      y: -10,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn", delay: 0.5 }, // تأخیر و انیمیشن نرم‌تر
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 12px rgba(6,182,212,0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  const circleVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  const profileVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(6,182,212,0.5)",
      transition: { duration: 0.3 },
    },
  };

  // Refs for scroll detection
  const sections = [
    "summary",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  const isInView = sections.reduce((acc, section) => {
    acc[section] = useInView(sectionRefs[section], { threshold: 0.3 }); // وقتی 30% بخش وارد شد
    return acc;
  }, {});

  // محاسبه داینامیک ارتفاع خط‌چین‌ها
  useEffect(() => {
    const updateHeights = () => {
      const newHeights = {};
      sections.forEach((section, index) => {
        if (index < sections.length - 1) {
          const currentSection = sectionRefs[section].current;
          const nextSection = sectionRefs[sections[index + 1]].current;
          if (currentSection && nextSection) {
            const currentRect = currentSection.getBoundingClientRect();
            const nextRect = nextSection.getBoundingClientRect();
            const height = nextRect.top - currentRect.bottom;
            newHeights[section] = Math.max(height, 120); // حداقل ارتفاع 120px
          }
        }
      });
      setConnectorHeights(newHeights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div
      className={`min-h-screen relative ${
        language === "fa" ? "font-sahel" : "font-poppins"
      } text-gray-900`}
      dir={language === "fa" ? "rtl" : "ltr"}
      style={{
        letterSpacing: language === "fa" ? "0.02em" : "0",
        lineHeight: language === "fa" ? "1.7" : "1.5",
      }}
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Header */}
      <motion.header
        className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.img
            src="/image.jfif"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-500"
            variants={profileVariants}
            whileHover="hover"
          />
          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-shadow ${
              language === "fa" ? "typing-text-rtl" : "typing-text"
            }`}
          >
            {content[language].name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-shadow">
            {content[language].title}
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
            className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
          >
            {language === "fa" ? "English" : "فارسی"}
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Summary */}
        <motion.section
          ref={sectionRefs.summary}
          className="mb-60 relative wave-bg summary-section"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.summary ? "visible" : "exit"}
        >
          <h2 className="text-xl font-semibold text-cyan-950 mb-2 text-shadow">
            {content[language].summary}
          </h2>
          {isInView.summary && connectorHeights.summary && (
            <div
              className="curved-connector"
              style={{
                height: `${connectorHeights.summary}px`,
                bottom: `-${connectorHeights.summary}px`,
              }}
            >
              <svg
                width="100"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="curved-path"
              >
                <path d="M50,0 C70,30 30,70 50,100" />
              </svg>
            </div>
          )}
        </motion.section>

        {/* Skills */}
        <motion.section
          ref={sectionRefs.skills}
          className="mb-60 relative card"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.skills ? "visible" : "exit"}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 text-shadow">
            {content[language].skills.title}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content[language].skills.items.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white p-3 rounded-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="icon-neon text-base icon-spacing"
                  />
                  <span className="text-base text-gray-900 text-shadow">
                    {skill.name}
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
          {isInView.skills && (
            <div
              className="curved-connector"
              style={{
                height: `${connectorHeights.summary}px`,
                bottom: `-${connectorHeights.summary}px`,
              }}
            >
              <svg
                width="100"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="curved-path"
              >
                <path d="M50,0 C70,30 30,70 50,100" />
              </svg>
            </div>
          )}
        </motion.section>

        {/* Experience */}
        <motion.section
          ref={sectionRefs.experience}
          className="mb-60 relative card timeline"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.experience ? "visible" : "exit"}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 flex items-center text-shadow">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="icon-neon icon-spacing"
            />
            {content[language].experience.title}
          </h2>
          <div className="relative">
            <div
              className={`absolute top-0 h-full w-1 bg-cyan-500 timeline-line ${
                language === "fa" ? "right-3" : "left-3"
              }`}
            ></div>
            {content[language].experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                className={`mb-6 relative ${
                  language === "fa" ? "pr-10" : "pl-10"
                }`}
                initial={{ opacity: 0, x: language === "fa" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`absolute top-2 w-3 h-3 bg-cyan-500 rounded-full timeline-dot ${
                    language === "fa" ? "right-[-6px]" : "left-[-6px]"
                  }`}
                ></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-shadow">
                  {job.company}
                </h3>
                <p className="text-base text-gray-700 text-shadow">
                  {job.role}
                </p>
                <p className="text-sm text-gray-600 text-shadow">{job.date}</p>
                <p className="mt-1 text-base text-gray-900 text-shadow">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
          {isInView.experience && (
            <div
              className="curved-connector"
              style={{
                height: `${connectorHeights.summary}px`,
                bottom: `-${connectorHeights.summary}px`,
              }}
            >
              <svg
                width="100"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="curved-path"
              >
                <path d="M50,0 C70,30 30,70 50,100" />
              </svg>
            </div>
          )}
        </motion.section>

        {/* Projects */}
        <motion.section
          ref={sectionRefs.projects}
          className="mb-60 relative"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.projects ? "visible" : "exit"}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-50 mb-3 flex items-center text-shadow">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="icon-neon icon-spacing"
            />
            {content[language].projects.title}
          </h2>
          <ul className="space-y-3">
            {content[language].projects.items.map((project, index) => (
              <motion.li
                key={index}
                className="project-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faProjectDiagram}
                    className="icon-neon text-base icon-spacing"
                  />
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-cyan-500 hover:underline font-medium text-base text-shadow"
                    >
                      {project.name}
                    </a>
                    <span className="text-base text-gray-900 text-shadow">
                      {" "}
                      - {project.tech}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          {isInView.projects && (
            <div
              className="curved-connector"
              style={{
                height: `${connectorHeights.summary}px`,
                bottom: `-${connectorHeights.summary}px`,
              }}
            >
              <svg
                width="100"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="curved-path"
              >
                <path d="M50,0 C70,30 30,70 50,100" />
              </svg>
            </div>
          )}
        </motion.section>

        {/* Education */}
        <motion.section
          ref={sectionRefs.education}
          className="mb-60 relative circle-card mx-auto" // mx-auto اضافه شده
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.education ? "visible" : "exit"}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 flex items-center text-shadow">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="icon-neon icon-spacing"
            />
            {content[language].education.title}
          </h2>
          <p className="text-base text-gray-900 text-shadow text-center">
            {content[language].education.degree}
          </p>
          <p className="text-base text-gray-900 text-shadow text-center">
            {content[language].education.school}
          </p>
          <p className="text-sm text-gray-600 text-shadow text-center">
            {content[language].education.date}
          </p>
          {isInView.education && (
            <div
              className="curved-connector"
              style={{
                height: `${connectorHeights.summary}px`,
                bottom: `-${connectorHeights.summary}px`,
              }}
            >
              <svg
                width="100"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="curved-path"
              >
                <path d="M50,0 C70,30 30,70 50,100" />
              </svg>
            </div>
          )}
        </motion.section>

        {/* Contact */}
        <motion.section
          ref={sectionRefs.contact}
          className="mb-24 relative circle-card mx-auto" // mx-auto اضافه شده
          variants={sectionVariants}
          initial="hidden"
          animate={isInView.contact ? "visible" : "exit"}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 flex items-center text-shadow">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-neon icon-spacing"
            />
            {content[language].contact.title}
          </h2>
          <p className="flex items-center text-base text-gray-900 text-shadow text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon-neon icon-spacing"
            />
            {content[language].contact.email}
          </p>
          <p className="flex items-center text-base text-gray-900 text-shadow text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="icon-neon icon-spacing"
            />
            {content[language].contact.phone}
          </p>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base text-shadow">© 2025 {content[language].name}</p>
      </motion.footer>
    </div>
  );
}
