// Central, editable site facts. See CONTENT.md for an explanation of every field.

export const siteConfig = {
  name: "École des Métiers de Santé ZTF",
  shortName: "EMS-ZTF",
  domain: "ems-ztf.site",
  tagline: "La santé du futur se construit ici",
  subTagline:
    "Apprendre aujourd'hui, soigner demain. La science au service de la vie et du bien-être.",
  mission:
    "Notre mission est de préparer des professionnels compétents, humains et responsables, capables de répondre aux besoins sanitaires du Cameroun et de l'Afrique.",
  yearsOfExperience: 24,
  address: {
    line: "Koumé-Bonis, Bertoua, Cameroun",
    mapQuery: "Koumé, Bertoua, Cameroun",
    lat: 4.5733,
    lng: 13.6856,
  },
  phones: ["+237 694 743 680", "+237 690 355 329"],
  whatsapp: "237694743680",
  emails: {
    general: "info@ztfuniversity.com",
    contactForm: "ems@ztfuniversity.com",
  },
  social: {
    facebook: "#",
    youtube: "#",
  },
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos/" },
  { label: "Inscriptions", href: "/inscriptions/" },
  {
    label: "Programmes",
    href: "/programmes/",
    children: [
      { label: "Nos filières", href: "/programmes/" },
      { label: "Notre staff", href: "/staff/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const partners = [
  { name: "MINSANTE", logo: "/images/MINESANTE.png" },
  { name: "Hope Clinic", logo: "" },
  { name: "ZTF Excellence", logo: "" },
  { name: "MINESUP", logo: "" },
  { name: "MINEFOP", logo: "" },
  { name: "IFP", logo: "" },
  { name: "WC Libraries", logo: "" },
] as const;

export const whyChooseUs = {
  intro:
    "À EMS-ZTF, chaque parcours est pensé pour transformer la théorie en compétence et la compétence en vocation. Voici ce qui distingue notre approche pédagogique.",
  image: "/images/medical-students.png",
  features: [
    {
      icon: "stethoscope",
      title: "Orientée vers la pratique",
      description:
        "Des stages, travaux pratiques et mises en situation réelles dès les premiers semestres.",
    },
    {
      icon: "graduation",
      title: "Enseignants qualifiés",
      description:
        "Un corps enseignant composé de médecins et professionnels de santé en exercice.",
    },
    {
      icon: "building",
      title: "Infrastructures modernes",
      description:
        "Des salles de travaux pratiques et une bibliothèque équipées pour un apprentissage concret.",
    },
    {
      icon: "person",
      title: "Encadrement personnalisé",
      description:
        "Un suivi académique individualisé qui valorise le potentiel de chaque étudiant.",
    },
    {
      icon: "globe",
      title: "Vision ouverte sur le monde",
      description:
        "Une formation alignée sur les standards régionaux et internationaux de la santé.",
    },
    {
      icon: "check",
      title: "Choix et avenir assuré",
      description:
        "Des filières recherchées qui mènent directement vers l'emploi et l'autonomie professionnelle.",
    },
  ],
} as const;

export const rector = {
  name: "Prof. Dieudonné NJAMEN",
  title: "Recteur — IU-ZTF",
  quote:
    "Notre ambition est de former des professionnels de santé compétents, humains et responsables, capables de répondre aux besoins sanitaires du Cameroun et de l'Afrique.",
  photo: "/images/staff/rector-njamen.svg",
} as const;

export const ctaBanner = {
  heading: "Apprentissage Sans Limites, Possibilités Illimitées",
  button: "Rejoignez-nous",
} as const;

export const aboutStats = [
  { label: "Étudiants actifs", value: 350, suffix: "+" },
  { label: "Programmes de formation", value: 4, suffix: "" },
  { label: "Enseignants expérimentés", value: 28, suffix: "+" },
  { label: "Institutions pour les stages", value: 12, suffix: "+" },
] as const;

export const aboutContent = {
  heading: "Pourquoi les étudiants nous choisissent pour acquérir le savoir !",
  image: "/images/clinical-practice.jpeg",
  paragraphs: [
    "À EMS-ZTF, nous offrons un enseignement de qualité, un encadrement personnalisé et un environnement d'apprentissage moderne qui permettent à chaque étudiant de développer ses compétences et d'atteindre son plein potentiel.",
    "Parce que nous formons les professionnels de demain ! EMS-ZTF se distingue par la qualité de son enseignement, la proximité avec ses étudiants, la diversité de ses programmes et l'intégration des nouvelles technologies dans l'apprentissage. Nous offrons un cadre accueillant, des formations accessibles, et un suivi académique qui valorise le potentiel de chacun.",
    "Choisir EMS-ZTF, c'est choisir l'excellence, la confiance et la réussite. Nous mettons l'accent sur les stages, les travaux pratiques, les projets professionnels et l'apprentissage immersif pour garantir que chaque diplômé soit immédiatement opérationnel et compétitif.",
  ],
  infrastructure: [
    {
      number: "01",
      title: "Nos infrastructures",
      description:
        "Des salles de cours et de travaux pratiques équipées pour reproduire les conditions réelles de l'exercice médical et paramédical.",
    },
    {
      number: "02",
      title: "Notre bibliothèque",
      description:
        "Un espace documentaire riche, régulièrement enrichi, pour soutenir la recherche et l'apprentissage autonome des étudiants.",
    },
    {
      number: "03",
      title: "Abordable et de qualité",
      description:
        "Des frais de formation accessibles, sans compromis sur la qualité de l'enseignement et de l'encadrement.",
    },
  ],
} as const;

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  shortTagline: string;
  description: string;
  instructor: string;
  students: number;
  rating: number;
  image: string;
  heroImage: string;
  duration: string;
  durationDetail: string;
  admissionConditions: string[];
  overview: string;
  modules: string[];
  careerOutcomes: string[];
};

export const programs: Program[] = [
  {
    slug: "infirmiers-principaux",
    name: "Infirmiers Principaux",
    shortName: "IDE",
    shortTagline: "Professionnels des soins et de la santé",
    description:
      "Dispensent des soins infirmiers complets et coordonnent les activités de santé.",
    instructor: "Dr. KUATE",
    students: 50,
    rating: 4.5,
    image: "/images/medical-students.png",
    heroImage: "/images/nursing-care.jpg",
    duration: "6 Semestres",
    durationDetail: "6 semestres (3 ans)",
    admissionConditions: [
      "BAC série C, D, ou équivalent",
      "Bonne santé physique et aptitude médicale",
      "Dossier complet d'inscription",
    ],
    overview:
      "La filière Infirmiers Principaux forme des professionnels capables de dispenser des soins infirmiers complets, d'assurer le suivi des patients et de coordonner les activités de santé au sein d'une équipe pluridisciplinaire. La formation combine cours théoriques, travaux pratiques intensifs et stages cliniques en milieu hospitalier.",
    modules: [
      "Anatomie & Physiologie",
      "Soins infirmiers fondamentaux",
      "Pharmacologie clinique",
      "Santé communautaire",
      "Éthique & Déontologie médicale",
      "Pathologies médicales et chirurgicales",
    ],
    careerOutcomes: [
      "Infirmier(ère) en hôpital public ou privé",
      "Infirmier(ère) en centre de santé communautaire",
      "Responsable de soins et gestion d'unité",
      "Coordinateur(trice) de santé communautaire",
      "Poursuite d'études vers des spécialisations infirmières",
    ],
  },
  {
    slug: "kinesitherapie",
    name: "Kinésithérapie",
    shortName: "TPMSK",
    shortTagline: "Rééducation et bien-être physique",
    description:
      "Aide à restaurer les capacités motrices et à améliorer la qualité de vie des patients.",
    instructor: "Dr. PATOUTOU",
    students: 56,
    rating: 4.5,
    image: "/images/doctors-campus.jpg",
    heroImage: "/images/doctors-campus.jpg",
    duration: "6 Semestres",
    durationDetail: "6 semestres (3 ans)",
    admissionConditions: [
      "BAC série C, D, ou équivalent",
      "Aptitude physique requise",
      "Dossier complet d'inscription",
    ],
    overview:
      "La filière Kinésithérapie prépare des professionnels spécialisés dans la rééducation fonctionnelle, le traitement des troubles musculo-squelettiques et l'accompagnement des patients vers une autonomie physique retrouvée, à travers une formation alliant anatomie, biomécanique et pratique clinique.",
    modules: [
      "Anatomie fonctionnelle",
      "Biomécanique & Physiologie du mouvement",
      "Techniques de rééducation",
      "Électrothérapie",
      "Kinésithérapie respiratoire",
      "Kinésithérapie sportive",
    ],
    careerOutcomes: [
      "Kinésithérapeute en centre de rééducation",
      "Kinésithérapeute en hôpital ou clinique",
      "Thérapeute sportif",
      "Cabinet libéral de kinésithérapie",
      "Accompagnement des personnes âgées en établissement spécialisé",
    ],
  },
  {
    slug: "sages-femmes",
    name: "Sages-femmes",
    shortName: "SFM",
    shortTagline: "Maternité et accouchement",
    description:
      "Accompagnent les femmes tout au long de la grossesse et l'accouchement.",
    instructor: "Dr. LUDOVIC",
    students: 35,
    rating: 4.5,
    image: "/images/maternity-care.jpg",
    heroImage: "/images/maternity-care.jpg",
    duration: "6 Semestres",
    durationDetail: "6 semestres (3 ans)",
    admissionConditions: [
      "BAC série C, D, ou équivalent",
      "Réservé aux candidates féminines",
      "Bonne santé physique et aptitude médicale",
      "Dossier complet d'inscription",
    ],
    overview:
      "La filière Sages-femmes forme des professionnelles capables d'accompagner les femmes avant, pendant et après la grossesse, d'assurer le suivi de l'accouchement et les premiers soins du nouveau-né, dans le respect des standards de santé maternelle et infantile.",
    modules: [
      "Obstétrique & Gynécologie",
      "Néonatologie",
      "Soins prénataux et postnataux",
      "Accouchement physiologique",
      "Santé de la reproduction",
      "Planification familiale",
    ],
    careerOutcomes: [
      "Sage-femme en maternité hospitalière",
      "Suivi prénatal et postnatal en centre de santé",
      "Conseillère en santé maternelle",
      "Planification familiale",
      "Santé maternelle et infantile en milieu communautaire",
    ],
  },
  {
    slug: "techniciens-medico-sanitaires",
    name: "Techniciens Médico-Sanitaires",
    shortName: "ATMSAM",
    shortTagline: "Experts des analyses et examens médicaux",
    description:
      "Assurent les analyses et examens médicaux nécessaires au diagnostic et au suivi.",
    instructor: "Pr. ADAMOU",
    students: 15,
    rating: 4.5,
    image: "/images/lab-students.jpg",
    heroImage: "/images/lab-students.jpg",
    duration: "6 Semestres",
    durationDetail: "6 semestres (3 ans)",
    admissionConditions: [
      "BAC série C, D, ou scientifique",
      "Aptitude aux travaux de laboratoire",
      "Dossier complet d'inscription",
    ],
    overview:
      "La filière Techniciens Médico-Sanitaires forme des spécialistes des analyses de laboratoire et des examens médico-sanitaires, indispensables au diagnostic, au suivi thérapeutique et à la prévention au sein du système de santé.",
    modules: [
      "Biologie médicale",
      "Hématologie & Immunologie",
      "Bactériologie & Microbiologie",
      "Parasitologie",
      "Biochimie clinique",
      "Techniques d'analyses médicales",
    ],
    careerOutcomes: [
      "Technicien(ne) en laboratoire médical",
      "Agent médico-sanitaire en hôpital public ou privé",
      "Analyste en centre de diagnostic",
      "Appui au diagnostic clinique",
      "Postes en santé publique et prévention",
    ],
  },
];

export type StaffMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const staff: StaffMember[] = [
  {
    name: "Dr. KUATE",
    role: "Pédiatre",
    bio: "Responsable de la filière Infirmiers Principaux, spécialiste en pédiatrie clinique.",
    photo: "/images/staff/dr-kuate.svg",
  },
  {
    name: "Dr. BEKOLO",
    role: "Médecin",
    bio: "Médecin généraliste, intervenant en anatomie et physiologie médicale.",
    photo: "/images/staff/dr-bekolo.svg",
  },
  {
    name: "Dr. NGUESSA",
    role: "Médecin",
    bio: "Spécialiste en pathologies médicales et en santé communautaire.",
    photo: "/images/staff/dr-nguessa.svg",
  },
  {
    name: "Dr. TCHAMBA",
    role: "Médecin",
    bio: "Intervenant en pharmacologie clinique et en éthique médicale.",
    photo: "/images/staff/dr-tchamba.svg",
  },
  {
    name: "Dr. PATOUTOU",
    role: "Responsable filière Kinésithérapie",
    bio: "Kinésithérapeute spécialisé en rééducation fonctionnelle et biomécanique.",
    photo: "/images/staff/dr-patoutou.svg",
  },
  {
    name: "Dr. LUDOVIC",
    role: "Responsable filière Sages-femmes",
    bio: "Sage-femme principale, experte en obstétrique et santé maternelle.",
    photo: "/images/staff/dr-ludovic.svg",
  },
  {
    name: "Pr. ADAMOU",
    role: "Responsable filière Techniciens Médico-Sanitaires",
    bio: "Professeur en biologie médicale et techniques d'analyses en laboratoire.",
    photo: "/images/staff/pr-adamou.svg",
  },
];

export const admissions = {
  schoolRequirements: ["01 rame de format A4 double a 80g."],
  uniform: [
    {
      label: "IDE/SFM",
      items: "01 tenue de l'école+01 tenue de stage +01 Polo",
    },
    {
      label: "ATMSAM/TPMSK",
      items: "01 tenue de l'école+01Blouse+01 Polo",
    },
  ],
  dossier: [
    "Deux photocopies du diplôme ayant donné droit au concours ;",
    "Deux photocopies de l'acte de naissance ;",
    "Une photocopie du probatoire + Baccalauréat pour authentification des diplômes de la spécialité SFM ;",
    "02 photos 4*4 ;",
    "Une photocopie de CNI du parent ou tuteur en charge de l'étudiant, portant le numéro de téléphone et la signature de celui-ci ;",
    "Une lettre d'engagement à retirer à l'école ;",
    "Une enveloppe A4 portant votre nom et prénom, filière, numéro de téléphone ;",
    "Un dossier médical comprenant les examens (pour des cas éventuels de maladies bien connues)",
  ],
  documents: [
    {
      label: "FICHE D'IDENTIFICATION",
      description: "Formulaire d'identification de l'étudiant",
      file: "/documents/fiche-identification.pdf",
    },
    {
      label: "FICHE D'ENGAGEMENT",
      description: "Engagement de paiement des frais de scolarité",
      file: "/documents/fiche-engagement.pdf",
    },
  ],
} as const;

export const contactContent = {
  heading: "Contactez-Nous",
  secondaryHeading: "N'hésitez pas à nous contacter !",
  body:
    "Nous sommes un établissement de formation professionnelle dédié aux sciences de la santé. Notre mission est de former des professionnels compétents, éthiques et immédiatement opérationnels, capables de répondre aux besoins réels du système de santé.",
} as const;

export const footerContent = {
  about:
    "École des Métiers de Santé ZTF forme des professionnels de santé compétents, humains et responsables, prêts à répondre aux besoins sanitaires du Cameroun et de l'Afrique.",
  support: {
    heading: "Soutien & Aide",
    links: [
      { label: "Aide en ligne", href: "/contact/" },
      { label: "Espace étudiant", href: "/inscriptions/" },
      { label: "Espace enseignant", href: "/contact/" },
    ],
  },
  resources: {
    heading: "Ressources académiques",
    links: [
      { label: "Programmes de formation", href: "/programmes/" },
      { label: "Calendrier académique", href: "/contact/" },
      { label: "Bibliothèque numérique", href: "/contact/" },
    ],
  },
} as const;
