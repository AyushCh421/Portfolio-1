// ─────────────────────────────────────────────
//  All portfolio content lives here.
//  Edit this file to update any section.
// ─────────────────────────────────────────────

export const personalInfo = {
  name: 'Ayush Chauhan',
  firstName: 'AYUSH',
  lastName: 'CHAUHAN',
  roles: [
    'Full Stack Developer',
    'ML Engineer',
    'Problem Solver',
    'MERN Stack Dev',
    'Data Science Enthusiast',
  ],
  location: 'NIT Sikkim, India',
  cgpa: '9.13',
  dsaProblems: '175+',
  email: 'chauhanayush434@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayush-chauhan-8a399937a/',   // ← replace with your URL
  github: 'https://github.com/AyushCh421',       // ← replace with your URL
  bio1:
    'I am a detail-oriented and adaptable problem-solver, currently in my Second year of Computer Science and Engineering at National Institute of Technology, Sikkim. My coursework in Data Structures, Algorithms, Software Engineering, and Machine Learning has provided me with a strong theoretical foundation.',
  bio2:
    'With a current CGPA of 9.13, I\'m passionate about building impactful applications — from full-stack web apps to ML-powered systems — and constantly learning new technologies. I am an active member of coding and development clubs at NIT Sikkim.',
  nitSikkimUrl: 'https://nitsikkim.ac.in',
};

export const quickFacts = [
  { icon: '🎓', label: 'B.Tech CSE, 2024–2028', value: 'NIT Sikkim' },
  { icon: '⭐', label: 'CGPA', value: '9.13 / 10' },
  { icon: '💻', label: '175+ DSA Problems Solved', value: 'LeetCode' },
  { icon: '🏆', label: 'Hackathon Winner', value: 'Intra SIH 2025' },
  { icon: '📍', label: 'Moradabad, UP', value: 'India' },
  { icon: '🚀', label: 'Open to Internships', value: '2025/26' },
];

export const skillTags = [
  'C / C++', 'Python', 'JavaScript', 'React.js',
  'Node.js & Express', 'Django REST', 'MongoDB & MySQL',
  'Machine Learning', 'PyTorch & Scikit-learn',
];

export const experiences = [
  {
    org: 'The Regnant Ink — Literary Club, NIT Sikkim',
    role: 'Volunteer',
    period: 'April 2025 – Present',
    type: 'On-Campus',
    points: [
      'Active volunteer contributing to literary events and creative writing initiatives at NIT Sikkim.',
      'Helped organize and coordinate club activities, fostering a creative community on campus.',
    ],
  },
  {
    org: 'Devcans — Coding Club, NIT Sikkim',
    role: 'Volunteer',
    period: 'September 2025 – Present',
    type: 'On-Campus',
    points: [
      'Participating in competitive programming events and hackathons organized by the coding club.',
      'Collaborating with peers on development projects and technical problem-solving sessions.',
    ],
  },
  {
    org: 'Web Development Cell, NIT Sikkim',
    role: 'Volunteer',
    period: 'December 2025 – Present',
    type: 'On-Campus',
    points: [
      'Contributing to the institute\'s web presence as a Technical Volunteer since December 2025.',
      'Collaborating with teams to maintain and develop web solutions for the official institute platforms.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Customer Churn Decision System',
    shortTitle: 'CHURN DECISION',
    year: '2026',
    category: 'ml',
    categoryLabel: 'ML',
    stack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    desc: 'End-to-end ML churn prediction system identifying customers at high risk using real-world telecom data. Deployed with a Streamlit interface for real-time risk prediction.',
    github: 'https://github.com/AyushCh421/Churn_Decision_System',
    Live_Link: 'https://churndecisionsystem-ihke3t4whayiphbqmqvxfl.streamlit.app/'
  },
  {
    id: 2,
    title: 'ShopHub — E-Commerce Platform',
    shortTitle: 'SHOP',
    year: '2025–26',
    category: 'fullstack',
    categoryLabel: 'MERN Stack',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    desc: 'Full-stack MERN e-commerce app with JWT auth, bcrypt hashing, role-based access control, cart/wishlist, and admin operations. Deployed on Vercel and Render.',
    github: 'https://github.com/AyushCh421/Shophub-E-commerce-',
  },
  {
    id: 3,
    title: 'IPL Match Outcome Prediction',
    shortTitle: 'IPL',
    year: '2025',
    category: 'ml',
    categoryLabel: 'ML',
    stack: ['XGBoost', 'Scikit-learn', 'Pandas', 'NumPy'],
    desc: 'Two-phase ML framework for IPL match prediction — first innings score (regression) and second innings win probability (binary classification), achieving ROC-AUC 0.89.',
    github: 'https://github.com/AyushCh421/IPL_Prediction',
  },
  {
    id: 4,
    title: 'Advanced Sentiment Intelligence',
    shortTitle: 'BERT',
    year: '2025',
    category: 'ml',
    categoryLabel: 'NLP',
    stack: ['PyTorch', 'HuggingFace', 'BERT', 'Streamlit'],
    desc: 'BERT-based sentiment analysis classifying customer reviews into Positive/Neutral/Negative. Includes bigram phrase detection for extracting key sentiment drivers.',
    github: 'https://github.com/AyushCh421/IPL_Prediction',
  },
  {
    id: 5,
    title: 'Student Performance Prediction',
    shortTitle: 'PERF',
    year: '2025',
    category: 'ml',
    categoryLabel: 'ML',
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'XGBoost'],
    desc: 'ML model predicting students\' academic performance using demographic and academic features. Compared Linear Regression, Random Forest, and Gradient Boosting with cross-validation.',
    github: 'https://github.com/AyushCh421/Student_Performance_Prediction',
  },
  {
    id: 6,
    title: 'QuickRide — Ride Booking App',
    shortTitle: 'RIDE',
    year: '2025',
    category: 'backend',
    categoryLabel: 'PHP',
    stack: ['HTML5', 'CSS3', 'PHP', 'MySQL'],
    desc: 'Dynamic ride-booking web app with secure user authentication and an interactive dashboard for booking and managing rides, backed by PHP/MySQL via XAMPP.',
    github: 'https://github.com/AyushCh421/Quickride',
  },
  {
  id: 7,
  title: 'Real-Time Facial Emotion Detection (CNN)',
  shortTitle: 'EMOTION AI',
  year: '2026',
  category: 'ml',
  categoryLabel: 'CNN',
  stack: ['Python', 'PyTorch', 'OpenCV', 'NumPy'],
  desc: 'Real-time facial emotion recognition system using a custom CNN trained on the FER-2013 dataset. Detects faces from webcam feed and classifies emotions with confidence scores.',
  github: 'https://github.com/AyushCh421/facial-emotion-detection-cnn',
  Live_Link: '' 
}
];

export const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Backend', value: 'backend' },
];

export const skills = [
  { icon: '💻', name: 'C / C++' },
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'JavaScript' },
  { icon: '⚛️', name: 'React.js' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🔧', name: 'Express.js' },
  { icon: '🧠', name: 'Scikit-learn' },
  { icon: '🔥', name: 'PyTorch' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🐬', name: 'MySQL' },
  { icon: '🎨', name: 'HTML5 / CSS3' },
  { icon: '📊', name: 'Pandas/NumPy' },
  { icon: '🐙', name: 'Git / GitHub' },
  { icon: '🌐', name: 'REST APIs' },
  { icon: '🚀', name: 'Streamlit' },
  { icon: '🐘', name: 'PHP' },
];

export const achievements = [
  {
    icon: '🏆',
    title: 'Intra Smart India Hackathon',
    year: '2025',
    desc: 'Winner of Intra Smart India Hackathon 2025 at NIT Sikkim — building real-world solutions under competitive conditions.',
  },
  {
    icon: '🤖',
    title: 'AI Fundamentals — IBM',
    year: '2025',
    desc: 'Certified in Artificial Intelligence Fundamentals via IBM SkillsBuild, covering core AI and ML concepts.',
  },
  {
    icon: '💼',
    title: 'JP Morgan Chase Simulation',
    year: '2025',
    desc: 'Completed Software Engineering Job Simulation by JP Morgan Chase & Co. through Forage platform.',
  },
  {
    icon: '🍃',
    title: 'MongoDB Certification',
    year: '2025',
    desc: 'MongoDB Overview: Core Concepts and Architecture — certified in NoSQL database fundamentals.',
  },
  {
    icon: '📊',
    title: 'Deloitte Data Analytics',
    year: '2025',
    desc: 'Completed Data Analytics Job Simulation by Deloitte through the Forage virtual experience platform.',
  },
  {
    icon: '🎯',
    title: 'AlgoUniversity ATF 2025',
    year: '2025',
    desc: 'Stage 2 Candidate at AlgoUniversity\'s ATF 2025 program — advanced competitive programming track.',
  },
];

export const certifications = [
  'Python Skill-Up — GeeksforGeeks',
  'C Programming — National Skill Up Challenge (GFG)',
  '195+ LeetCode DSA Problems Solved',
  'Full Stack & ML Coursework — NIT Sikkim',
];

export const themes = [
  { value: 'space',  label: '🌌 Space' },
  { value: 'aurora', label: '🌿 Aurora' },
  { value: 'solar',  label: '☀️ Solar' },
  { value: 'light',  label: '🌙 Light' },
];
