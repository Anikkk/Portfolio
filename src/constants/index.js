import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer-2",
    company_name: "Applied Bell Curve",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Now",
    points: [
      "Led the development of Applied Bell Curve's Flagship Dashboard using React.js and Material UI, providing personalized User experiences.",
      'Implemented Secure User Authentication using AWS Cognito and optimized user navigation with AWS Route 53.',
      'Utilized Flask for backend development across all aspects of the application, including Updating User details in DynamoDB, Fetching User details, and Handling user authentication during registration and login.',
      'Hosted the Frontend on AWS Amplify and Backend on AWS Elastic Beanstalk, leveraging Load balancers for Optimal Performance and Scalability.',
      'Designed infrastructure to take live tests capable of handling 5000+ concurrent users with analytics and ranking.',
      'Worked as an infrastructure consultant for the backend team. Helped migrate the current backend infrastructure from AWS EC2 to Elastic Beanstalk reducing cloud cost by 50%.',
      'Contributed significantly to the implementation of unit tests, ensuring comprehensive code coverage and fostering a culture of quality assurance.',
      'Extensively Worked on React Components with microUIs. Worked on Pipelines for deployment of React web applications.',
      'Played a pivotal role in analyzing and documenting the current infrastructure, offering valuable insights to enhance overall efficiency and performance.',
      'Developed a comprehensive forecasting model to predict cotton prices utilizing multiple machine learning algorithms including XGBoost, Adaptive Boost, ARIMA, SARIMAX, and LSTM. Conducted comparative analysis and determined that the LSTM model achieved superior accuracy, closely mirroring actual price trends and outperforming other models in predictive performance.',
    ],
  },
  {
    title: "Software Developer",
    company_name: "Wipro",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jan 2024",
    points: [
      'Leveraged Azure Data Factory (ADF) to streamline the O2C (Internal Wipro Process), optimizing data integration and movement for efficient order and its processing. Implemented data integration pipelines in ADF to extract critical data from various internal modules, microservices and several databases and orchestrated data flows between these modules and services.',
      'My responsibilities included developing ETL packages and SQL scripts to facilitate the seamless migration of master and transactional data. Additionally, I played a key role in designing systems for data reconciliation and integrity checks, ensuring data accuracy and reliability throughout the process.', 
      'Collaborated closely with business owners, stakeholders, and senior solution architects to gain a deep understanding of the business requirements. Utilizing cloud infrastructure and services, I successfully implemented data solutions that catered to these needs.',  
      'Generating data pipeline - end-to-end data integration and transformation process, for the L2O framework. Collaborating closely with data collection teams, automation scripts to capture and aggregate customer data effectively. Preprocessed and cleansed the data to ensure its quality and consistency, integrating the L2O process with Microsoft Dynamics CRM system, facilitating seamless data flow and efficient order creation. Enabling smooth and accurate data analysis for lead qualification and improved overall operational efficiency. Developed SQL scripts and Stored Procedure for query automation for the dummy order creation, this increased the volume and accuracy of queries by 64%.Collaborated with the finance and accounting team to ensure smooth order-to-cash(O2C) handover, improving cash flow management.',
      'Frontend development in React, managing two critical reporting applications for the European client. These applications handle stock and sales data, generating executive reports, etc. tailored for use within each country to reflect local business needs. Deliver interactive user interfaces, seamless data flow with backend APIs, and real-time updates for executives to make data-driven decisions.',
      'Implemented data visualization using React charting libraries to present complex information intuitively. Maintained optimal frontend performance through testing, debugging, and optimization techniques like code splitting and lazy loading.Collaborated with backend developers, provided mentorship to junior developers, and maintained the codebase to the latest features. '
    ],
  },
  {
    title: "Software Intern",
    company_name: "IIT Kanpur",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2021",
    points: [
      'Integrated API calls to fetch student details, exam questions from the server. Collaborated with backend developers to integrate the frontend with backend API, enabling data storage and retrieval for user exam results.',
      'Designed and structured the application routes using React Router to efficiently handle page rendering and URL management.',
      'Created and managed user authentication and authorization systems, ensuring secure access to for students and administrative functions for educators.',
      'Developed a flexible question module supporting multiple question types (MCQs, short answer, essay)',
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
