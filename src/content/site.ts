// Central, editable site facts. See CONTENT.md for an explanation of every field.

export const siteConfig = {
  name: "École des Métiers de Santé ZTF",
  shortName: "EMS-ZTF",
  domain: "www.ems-ztf.site",
  tagline: "La santé du futur se construit ici",
  subTagline:
    "Apprendre aujourd'hui, soigner demain. La science au service de la vie et du bien-être.",
  mission:
    "Notre mission est de préparer des professionnels compétents, humains et responsables, capables de répondre aux besoins sanitaires du Cameroun et de l'Afrique.",
  yearsOfExperience: 24,
  address: {
    line: "Koumé-Bonis, Bertoua, Cameroun",
    mapQuery: "Koumé, Bertoua, Cameroun",
  },
  phones: ["+237 694 743 680", "+237 690 355 329"],
  emails: {
    general: "info@ztfuniversity.com",
    contactForm: "ems@ztfuniversity.com",
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
  { name: "MINSANTE", logo: "/images/partners/minsante.svg" },
  { name: "Hope Clinic", logo: "/images/partners/hope-clinic.svg" },
  { name: "ZTF Excellence", logo: "/images/partners/ztf-excellence.svg" },
  { name: "MINESUP", logo: "/images/partners/minesup.svg" },
  { name: "MINEFOP", logo: "/images/partners/minefop.svg" },
  { name: "IFP", logo: "/images/partners/ifp.svg" },
  { name: "WC Libraries", logo: "/images/partners/wc-libraries.svg" },
] as const;

export const whyChooseUs = {
  intro:
    "À EMS-ZTF, chaque parcours est pensé pour transformer la théorie en compétence et la compétence en vocation. Voici ce qui distingue notre approche pédagogique.",
  features: [
    {
      title: "Orientée vers la pratique",
      description:
        "Des stages, travaux pratiques et mises en situation réelles dès les premiers semestres.",
    },
    {
      title: "Enseignants qualifiés",
      description:
        "Un corps enseignant composé de médecins et professionnels de santé en exercice.",
    },
    {
      title: "Infrastructures modernes",
      description:
        "Des salles de travaux pratiques et une bibliothèque équipées pour un apprentissage concret.",
    },
    {
      title: "Encadrement personnalisé",
      description:
        "Un suivi académique individualisé qui valorise le potentiel de chaque étudiant.",
    },
    {
      title: "Vision ouverte sur le monde",
      description:
        "Une formation alignée sur les standards régionaux et internationaux de la santé.",
    },
    {
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
  shortTagline: string;
  description: string;
  instructor: string;
  students: number;
  rating: number;
  image: string;
  duration: string;
  overview: string;
  careerOutcomes: string[];
};

export const programs: Program[] = [
  {
    slug: "infirmiers-principaux",
    name: "Infirmiers Principaux",
    shortTagline: "Professionnels des soins et de la santé",
    description:
      "Dispensent des soins infirmiers complets et coordonnent les activités de santé.",
    instructor: "Dr. KUATE",
    students: 50,
    rating: 4.5,
    image: "/images/programs/infirmiers-principaux.svg",
    duration: "6 Semestres",
    overview:
      "La filière Infirmiers Principaux forme des professionnels capables de dispenser des soins infirmiers complets, d'assurer le suivi des patients et de coordonner les activités de santé au sein d'une équipe pluridisciplinaire. La formation combine cours théoriques, travaux pratiques et stages cliniques en milieu hospitalier.",
    careerOutcomes: [
      "Infirmier(ère) en hôpital public ou privé",
      "Infirmier(ère) en centre de santé communautaire",
      "Coordination des soins et gestion d'unité de santé",
      "Poursuite d'études vers des spécialisations infirmières",
    ],
  },
  {
    slug: "kinesitherapie",
    name: "Kinésithérapie",
    shortTagline: "Rééducation et bien-être physique",
    description:
      "Aide à restaurer les capacités motrices et à améliorer la qualité de vie des patients.",
    instructor: "Dr. PATOUTOU",
    students: 56,
    rating: 4.5,
    image: "/images/programs/kinesitherapie.svg",
    duration: "6 Semestres",
    overview:
      "La filière Kinésithérapie prépare des professionnels spécialisés dans la rééducation fonctionnelle, le traitement des troubles musculo-squelettiques et l'accompagnement des patients vers une autonomie physique retrouvée, à travers une formation alliant anatomie, biomécanique et pratique clinique.",
    careerOutcomes: [
      "Kinésithérapeute en cabinet libéral ou en hôpital",
      "Rééducation fonctionnelle et sportive",
      "Accompagnement des patients en centre spécialisé",
      "Collaboration avec des équipes médicales pluridisciplinaires",
    ],
  },
  {
    slug: "sages-femmes",
    name: "Sages-femmes",
    shortTagline: "Maternité et accouchement",
    description:
      "Accompagnent les femmes tout au long de la grossesse et l'accouchement.",
    instructor: "Dr. LUDOVIC",
    students: 35,
    rating: 4.5,
    image: "/images/programs/sages-femmes.svg",
    duration: "6 Semestres",
    overview:
      "La filière Sages-femmes forme des professionnelles capables d'accompagner les femmes avant, pendant et après la grossesse, d'assurer le suivi de l'accouchement et les premiers soins du nouveau-né, dans le respect des standards de santé maternelle et infantile.",
    careerOutcomes: [
      "Sage-femme en maternité hospitalière",
      "Suivi prénatal et postnatal en centre de santé",
      "Accompagnement à l'accouchement",
      "Santé maternelle et infantile en milieu communautaire",
    ],
  },
  {
    slug: "techniciens-medico-sanitaires",
    name: "Techniciens Médico-Sanitaires",
    shortTagline: "Experts des analyses et examens médicaux",
    description:
      "Assurent les analyses et examens médicaux nécessaires au diagnostic et au suivi.",
    instructor: "Pr. ADAMOU",
    students: 15,
    rating: 4.5,
    image: "/images/programs/techniciens-medico-sanitaires.svg",
    duration: "6 Semestres",
    overview:
      "La filière Techniciens Médico-Sanitaires forme des spécialistes des analyses de laboratoire et des examens médico-sanitaires, indispensables au diagnostic, au suivi thérapeutique et à la prévention au sein du système de santé.",
    careerOutcomes: [
      "Technicien(ne) de laboratoire d'analyses médicales",
      "Agent médico-sanitaire en centre de santé",
      "Appui au diagnostic clinique",
      "Postes en santé publique et prévention",
    ],
  },
];

export type StaffMember = {
  name: string;
  role: string;
  photo: string;
};

export const staff: StaffMember[] = [
  { name: "Dr. KUATE", role: "Pédiatre", photo: "/images/staff/dr-kuate.svg" },
  { name: "Dr. BEKOLO", role: "Médecin", photo: "/images/staff/dr-bekolo.svg" },
  { name: "Dr. NGUESSA", role: "Médecin", photo: "/images/staff/dr-nguessa.svg" },
  { name: "Dr. TCHAMBA", role: "Médecin", photo: "/images/staff/dr-tchamba.svg" },
  { name: "Dr. PATOUTOU", role: "Responsable filière Kinésithérapie", photo: "/images/staff/dr-patoutou.svg" },
  { name: "Dr. LUDOVIC", role: "Responsable filière Sages-femmes", photo: "/images/staff/dr-ludovic.svg" },
  { name: "Pr. ADAMOU", role: "Responsable filière Techniciens Médico-Sanitaires", photo: "/images/staff/pr-adamou.svg" },
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
    "Nous sommes un établissement de formation professionnelle dédié aux sciences de la santé. Elle a pour mission de former des professionnels compétents, éthiques et immédiatement opérationnels, capables de répondre aux besoins réels du système de santé.",
} as const;

export const footerContent = {
  about:
    "École des Métiers de Santé ZTF forme des professionnels de santé compétents, humains et responsables, prêts à répondre aux besoins sanitaires du Cameroun et de l'Afrique.",
  support: {
    heading: "Soutien & Aide",
    links: [
      { label: "Aide en ligne", href: "/contact/" },
      { label: "Espace étudiant", href: "/contact/" },
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
