import type {
  CertDomain,
  CertLevel,
  CertPriceTier,
  CertRecommendation,
  Certification,
  FilterCertificationsParams,
  RecommendCertificationsParams,
} from "@/types/certification";
import type { TrackId } from "@/types/learning";
import { getTrack } from "@/data/tracks";

export const CERTIFICATIONS: Certification[] = [
  // ── Cybersecurity ──────────────────────────────────────────────────────────
  {
    id: "comptia-security-plus",
    name: "CompTIA Security+",
    provider: "CompTIA",
    domain: "cybersecurity",
    tracks: ["security", "networking"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 400 €", en: "≈ $404" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "QCM, performance-based, max. 90 questions",
      en: "Multiple choice, performance-based, up to 90 questions",
    },
    languages: [
      { fr: "Anglais, japonais, portugais, espagnol", en: "English, Japanese, Portuguese, Spanish" },
    ],
    prerequisites: [
      {
        fr: "Recommandé : Network+ et 2 ans d'expérience IT",
        en: "Recommended: Network+ and 2 years of IT experience",
      },
    ],
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Certification fondamentale en cybersécurité couvrant les menaces, l'architecture, les opérations et la conformité.",
      en: "Foundational cybersecurity certification covering threats, architecture, operations, and compliance.",
    },
    skills: [
      { fr: "Analyse des menaces", en: "Threat analysis" },
      { fr: "Architecture sécurisée", en: "Secure architecture" },
      { fr: "Gestion des incidents", en: "Incident management" },
      { fr: "Conformité et gouvernance", en: "Compliance and governance" },
    ],
    whyTakeIt: {
      fr: "Référence DoD 8570 et porte d'entrée reconnue pour les postes SOC et analyste junior.",
      en: "DoD 8570 baseline and widely recognized entry point for SOC and junior analyst roles.",
    },
    officialUrl: "https://www.comptia.org/certifications/security",
    recognitionNote: {
      fr: "Reconnue mondialement, exigée par de nombreux employeurs publics et privés.",
      en: "Globally recognized, required by many public and private sector employers.",
    },
  },
  {
    id: "comptia-cysa-plus",
    name: "CompTIA CySA+",
    provider: "CompTIA",
    domain: "cybersecurity",
    tracks: ["security"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 400 €", en: "≈ $404" },
    examDurationDisplay: { fr: "165 min", en: "165 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "QCM et questions performance-based",
      en: "Multiple choice and performance-based questions",
    },
    difficultyDisplay: { fr: "Intermédiaire à avancé", en: "Intermediate to advanced" },
    preparationTimeDisplay: { fr: "3–4 mois", en: "3–4 months" },
    description: {
      fr: "Certification analyste cybersécurité axée sur la détection, l'analyse et la réponse aux incidents.",
      en: "Cybersecurity analyst certification focused on detection, analysis, and incident response.",
    },
    skills: [
      { fr: "SIEM et corrélation de logs", en: "SIEM and log correlation" },
      { fr: "Threat hunting", en: "Threat hunting" },
      { fr: "Analyse de vulnérabilités", en: "Vulnerability analysis" },
      { fr: "Réponse aux incidents", en: "Incident response" },
    ],
    whyTakeIt: {
      fr: "Valide les compétences opérationnelles d'un analyste SOC ou Blue Team.",
      en: "Validates operational skills for SOC or Blue Team analysts.",
    },
    officialUrl: "https://www.comptia.org/certifications/cysa",
    recognitionNote: {
      fr: "Alignée sur le cadre NICE et reconnue pour les rôles analyste.",
      en: "Aligned with the NICE framework and recognized for analyst roles.",
    },
  },
  {
    id: "comptia-pentest-plus",
    name: "CompTIA PenTest+",
    provider: "CompTIA",
    domain: "cybersecurity",
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 400 €", en: "≈ $404" },
    examDurationDisplay: { fr: "165 min", en: "165 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "QCM et scénarios hands-on",
      en: "Multiple choice and hands-on scenarios",
    },
    difficultyDisplay: { fr: "Intermédiaire à avancé", en: "Intermediate to advanced" },
    preparationTimeDisplay: { fr: "3–5 mois", en: "3–5 months" },
    description: {
      fr: "Certification de test d'intrusion couvrant la planification, l'exécution et le reporting.",
      en: "Penetration testing certification covering planning, execution, and reporting.",
    },
    skills: [
      { fr: "Reconnaissance et scanning", en: "Reconnaissance and scanning" },
      { fr: "Exploitation contrôlée", en: "Controlled exploitation" },
      { fr: "Post-exploitation", en: "Post-exploitation" },
      { fr: "Rédaction de rapports", en: "Report writing" },
    ],
    whyTakeIt: {
      fr: "Alternative structurée à OSCP pour démontrer des compétences Red Team en entreprise.",
      en: "Structured alternative to OSCP for demonstrating Red Team skills in enterprise settings.",
    },
    officialUrl: "https://www.comptia.org/certifications/pentest",
  },
  {
    id: "isc2-cissp",
    name: "CISSP",
    provider: "(ISC)²",
    domain: "cybersecurity",
    level: "expert",
    priceTier: "over300",
    priceDisplay: { fr: "≈ 750 €", en: "≈ $749" },
    examDurationDisplay: { fr: "3 h (CAT, max. 150 questions)", en: "3 hours (CAT, up to 150 questions)" },
    validityDisplay: { fr: "3 ans (CPE requis)", en: "3 years (CPE required)" },
    examFormatDisplay: {
      fr: "QCM adaptatif (CAT)",
      en: "Computerized adaptive testing (CAT)",
    },
    prerequisites: [
      {
        fr: "5 ans d'expérience dans 2+ domaines CISSP (ou 4 ans avec diplôme)",
        en: "5 years of experience in 2+ CISSP domains (or 4 with a degree)",
      },
    ],
    difficultyDisplay: { fr: "Expert", en: "Expert" },
    preparationTimeDisplay: { fr: "4–6 mois", en: "4–6 months" },
    description: {
      fr: "Gold standard en sécurité de l'information pour architectes, managers et CISO.",
      en: "Gold standard in information security for architects, managers, and CISOs.",
    },
    skills: [
      { fr: "Gouvernance et gestion des risques", en: "Governance and risk management" },
      { fr: "Architecture de sécurité", en: "Security architecture" },
      { fr: "Ingénierie et gestion de la sécurité", en: "Security engineering and management" },
      { fr: "Conformité et continuité", en: "Compliance and continuity" },
    ],
    whyTakeIt: {
      fr: "Certification la plus reconnue pour évoluer vers des postes senior et de direction.",
      en: "Most recognized certification for advancing into senior and leadership roles.",
    },
    officialUrl: "https://www.isc2.org/certifications/cissp",
    recognitionNote: {
      fr: "ISO/IEC 17024 accréditée, exigée pour de nombreux postes CISO et architecte senior.",
      en: "ISO/IEC 17024 accredited, required for many CISO and senior architect roles.",
    },
  },
  {
    id: "isaca-cism",
    name: "CISM",
    provider: "ISACA",
    domain: "cybersecurity",
    level: "expert",
    priceTier: "over300",
    priceDisplay: { fr: "≈ 575 € (exam) + adhésion", en: "≈ $575 (exam) + membership" },
    examDurationDisplay: { fr: "4 h, 150 questions", en: "4 hours, 150 questions" },
    validityDisplay: { fr: "3 ans (CPE requis)", en: "3 years (CPE required)" },
    prerequisites: [
      {
        fr: "5 ans d'expérience en gestion de la sécurité (waivers possibles)",
        en: "5 years of information security management experience (waivers available)",
      },
    ],
    difficultyDisplay: { fr: "Expert", en: "Expert" },
    preparationTimeDisplay: { fr: "3–5 mois", en: "3–5 months" },
    description: {
      fr: "Certification orientée management de la sécurité de l'information et gouvernance.",
      en: "Information security management and governance-oriented certification.",
    },
    skills: [
      { fr: "Gouvernance de la sécurité", en: "Security governance" },
      { fr: "Gestion des risques", en: "Risk management" },
      { fr: "Programme de sécurité", en: "Security program development" },
      { fr: "Gestion des incidents", en: "Incident management" },
    ],
    whyTakeIt: {
      fr: "Complément idéal de CISSP pour les managers et directeurs sécurité.",
      en: "Ideal complement to CISSP for security managers and directors.",
    },
    officialUrl: "https://www.isaca.org/credentialing/cism",
    recognitionNote: {
      fr: "Très valorisée en entreprise pour les rôles de direction sécurité.",
      en: "Highly valued in enterprise for security leadership roles.",
    },
  },
  {
    id: "eccouncil-ceh",
    name: "CEH",
    provider: "EC-Council",
    domain: "cybersecurity",
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 1 200 € (formation incluse souvent)", en: "≈ $1,199 (training often included)" },
    examDurationDisplay: { fr: "4 h", en: "4 hours" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "125 questions QCM",
      en: "125 multiple-choice questions",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Certification éthique hacking couvrant les outils et méthodologies offensives.",
      en: "Ethical hacking certification covering offensive tools and methodologies.",
    },
    skills: [
      { fr: "Footprinting et reconnaissance", en: "Footprinting and reconnaissance" },
      { fr: "Scanning et énumération", en: "Scanning and enumeration" },
      { fr: "Exploitation système et réseau", en: "System and network exploitation" },
      { fr: "Évasion IDS/firewall", en: "IDS/firewall evasion" },
    ],
    whyTakeIt: {
      fr: "Reconnue DoD 8570 et populaire pour débuter en pentest éthique.",
      en: "DoD 8570 recognized and popular for starting in ethical penetration testing.",
    },
    officialUrl: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
  },
  {
    id: "offsec-oscp",
    name: "OSCP",
    provider: "Offensive Security",
    domain: "cybersecurity",
    level: "advanced",
    priceTier: "over300",
    priceDisplay: { fr: "≈ 1 650 € (PEN-200 + exam)", en: "≈ $1,649 (PEN-200 + exam)" },
    examDurationDisplay: { fr: "24 h (pratique)", en: "24 hours (hands-on)" },
    validityDisplay: { fr: "Illimitée", en: "Lifetime" },
    examFormatDisplay: {
      fr: "Lab pratique — compromission de machines",
      en: "Hands-on lab — compromise machines",
    },
    prerequisites: [
      {
        fr: "Solides bases réseau, Linux et scripting recommandées",
        en: "Solid networking, Linux, and scripting foundations recommended",
      },
    ],
    difficultyDisplay: { fr: "Très avancé", en: "Very advanced" },
    preparationTimeDisplay: { fr: "3–6 mois", en: "3–6 months" },
    description: {
      fr: "Certification pratique de pentest reconnu pour son examen 24 h en lab réel.",
      en: "Hands-on pentest certification known for its 24-hour real lab exam.",
    },
    skills: [
      { fr: "Exploitation manuelle", en: "Manual exploitation" },
      { fr: "Privilege escalation", en: "Privilege escalation" },
      { fr: "Buffer overflow", en: "Buffer overflow" },
      { fr: "Active Directory attacks", en: "Active Directory attacks" },
    ],
    whyTakeIt: {
      fr: "Référence absolue pour prouver des compétences Red Team concrètes.",
      en: "Gold standard for proving concrete Red Team skills.",
    },
    officialUrl: "https://www.offsec.com/courses/pen-200/",
    recognitionNote: {
      fr: "Très respectée par les recruteurs en pentest et Red Team.",
      en: "Highly respected by penetration testing and Red Team recruiters.",
    },
  },

  // ── Networking ─────────────────────────────────────────────────────────────
  {
    id: "comptia-network-plus",
    name: "CompTIA Network+",
    provider: "CompTIA",
    domain: "networking",
    tracks: ["networking"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 380 €", en: "≈ $358" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "QCM et performance-based, max. 90 questions",
      en: "Multiple choice, performance-based, up to 90 questions",
    },
    difficultyDisplay: { fr: "Débutant à intermédiaire", en: "Beginner to intermediate" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Fondamentaux réseau vendor-neutral : TCP/IP, switching, routing, Wi-Fi et dépannage.",
      en: "Vendor-neutral networking fundamentals: TCP/IP, switching, routing, Wi-Fi, and troubleshooting.",
    },
    skills: [
      { fr: "Modèle OSI / TCP-IP", en: "OSI / TCP-IP model" },
      { fr: "Adressage IP et sous-réseaux", en: "IP addressing and subnetting" },
      { fr: "Switching et VLAN", en: "Switching and VLANs" },
      { fr: "Dépannage réseau", en: "Network troubleshooting" },
    ],
    whyTakeIt: {
      fr: "Prérequis idéal avant Security+ ou CCNA pour consolider les bases réseau.",
      en: "Ideal prerequisite before Security+ or CCNA to solidify networking foundations.",
    },
    officialUrl: "https://www.comptia.org/certifications/network",
  },
  {
    id: "cisco-ccna",
    name: "CCNA",
    provider: "Cisco",
    domain: "networking",
    tracks: ["networking"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 300 €", en: "≈ $300" },
    examDurationDisplay: { fr: "120 min", en: "120 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "QCM, drag-and-drop, simulations",
      en: "Multiple choice, drag-and-drop, simulations",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "3–4 mois", en: "3–4 months" },
    description: {
      fr: "Certification réseau Cisco couvrant IP, switching, routing, sécurité et automatisation.",
      en: "Cisco networking certification covering IP, switching, routing, security, and automation.",
    },
    skills: [
      { fr: "Configuration routeur/switch Cisco", en: "Cisco router/switch configuration" },
      { fr: "OSPF et VLAN", en: "OSPF and VLANs" },
      { fr: "IPv4/IPv6", en: "IPv4/IPv6" },
      { fr: "Automatisation réseau (API, Ansible)", en: "Network automation (API, Ansible)" },
    ],
    whyTakeIt: {
      fr: "Standard de l'industrie pour les administrateurs réseau et ingénieurs junior.",
      en: "Industry standard for network administrators and junior engineers.",
    },
    officialUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/exams/200-301-ccna/index.html",
    recognitionNote: {
      fr: "La certification réseau la plus demandée au monde.",
      en: "The most in-demand networking certification worldwide.",
    },
  },
  {
    id: "cisco-ccnp-enterprise",
    name: "CCNP Enterprise",
    provider: "Cisco",
    domain: "networking",
    level: "advanced",
    priceTier: "over300",
    priceDisplay: { fr: "≈ 800 € (core + concentration)", en: "≈ $800 (core + concentration)" },
    examDurationDisplay: { fr: "120 min par examen", en: "120 min per exam" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    prerequisites: [
      {
        fr: "CCNA recommandé, pas de prérequis formel",
        en: "CCNA recommended, no formal prerequisite",
      },
    ],
    difficultyDisplay: { fr: "Avancé", en: "Advanced" },
    preparationTimeDisplay: { fr: "4–8 mois", en: "4–8 months" },
    description: {
      fr: "Certification professionnelle Cisco pour l'architecture et l'exploitation réseau avancée.",
      en: "Professional Cisco certification for advanced network architecture and operations.",
    },
    skills: [
      { fr: "Routage avancé (EIGRP, BGP)", en: "Advanced routing (EIGRP, BGP)" },
      { fr: "SD-WAN", en: "SD-WAN" },
      { fr: "Design réseau entreprise", en: "Enterprise network design" },
      { fr: "Dépannage avancé", en: "Advanced troubleshooting" },
    ],
    whyTakeIt: {
      fr: "Progression naturelle après CCNA pour les ingénieurs réseau senior.",
      en: "Natural progression after CCNA for senior network engineers.",
    },
    officialUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html",
  },
  {
    id: "juniper-jncia-junos",
    name: "JNCIA-Junos",
    provider: "Juniper Networks",
    domain: "networking",
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 200 €", en: "≈ $200" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "65 questions QCM",
      en: "65 multiple-choice questions",
    },
    difficultyDisplay: { fr: "Débutant à intermédiaire", en: "Beginner to intermediate" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Certification associée Juniper couvrant Junos OS, routing et switching de base.",
      en: "Juniper associate certification covering Junos OS, basic routing, and switching.",
    },
    skills: [
      { fr: "Junos CLI", en: "Junos CLI" },
      { fr: "Routage et switching Juniper", en: "Juniper routing and switching" },
      { fr: "Politiques de routage", en: "Routing policies" },
      { fr: "Dépannage Junos", en: "Junos troubleshooting" },
    ],
    whyTakeIt: {
      fr: "Alternative solide à CCNA pour les environnements carrier et service provider.",
      en: "Solid CCNA alternative for carrier and service provider environments.",
    },
    officialUrl: "https://www.juniper.net/us/en/training/certification/",
  },

  // ── Cloud ──────────────────────────────────────────────────────────────────
  {
    id: "aws-cloud-practitioner",
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    domain: "cloud",
    tracks: ["cloud", "software", "web"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 100 €", en: "≈ $100" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "65 questions QCM",
      en: "65 multiple-choice questions",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Introduction aux services AWS, facturation, sécurité et architecture cloud.",
      en: "Introduction to AWS services, billing, security, and cloud architecture.",
    },
    skills: [
      { fr: "Concepts cloud AWS", en: "AWS cloud concepts" },
      { fr: "Services principaux (EC2, S3, RDS)", en: "Core services (EC2, S3, RDS)" },
      { fr: "Modèle de responsabilité partagée", en: "Shared responsibility model" },
      { fr: "Facturation et support", en: "Billing and support" },
    ],
    whyTakeIt: {
      fr: "Première certification cloud idéale avant SAA ou spécialisations AWS.",
      en: "Ideal first cloud certification before SAA or AWS specializations.",
    },
    officialUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    id: "aws-solutions-architect-associate",
    name: "AWS Solutions Architect Associate",
    provider: "Amazon Web Services",
    domain: "cloud",
    tracks: ["cloud", "software"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 150 €", en: "≈ $150" },
    examDurationDisplay: { fr: "130 min", en: "130 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "65 questions QCM ou réponses multiples",
      en: "65 multiple choice or multiple response questions",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Certification phare pour concevoir des architectures AWS résilientes et évolutives.",
      en: "Flagship certification for designing resilient and scalable AWS architectures.",
    },
    skills: [
      { fr: "Architecture haute disponibilité", en: "High availability architecture" },
      { fr: "VPC et réseau AWS", en: "VPC and AWS networking" },
      { fr: "Stockage et bases de données", en: "Storage and databases" },
      { fr: "Sécurité et conformité AWS", en: "AWS security and compliance" },
    ],
    whyTakeIt: {
      fr: "La certification cloud la plus demandée sur le marché.",
      en: "The most in-demand cloud certification on the market.",
    },
    officialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    recognitionNote: {
      fr: "Référence pour les architectes cloud et DevOps.",
      en: "Reference for cloud architects and DevOps engineers.",
    },
  },
  {
    id: "microsoft-az-900",
    name: "AZ-900",
    provider: "Microsoft",
    domain: "cloud",
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 99 €", en: "≈ $99" },
    examDurationDisplay: { fr: "45 min", en: "45 min" },
    validityDisplay: { fr: "1 an (renouvelable gratuitement)", en: "1 year (free renewal)" },
    examFormatDisplay: {
      fr: "QCM",
      en: "Multiple choice",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "2–4 semaines", en: "2–4 weeks" },
    description: {
      fr: "Fondamentaux Azure : services cloud, modèles de déploiement, sécurité et pricing.",
      en: "Azure fundamentals: cloud services, deployment models, security, and pricing.",
    },
    skills: [
      { fr: "Concepts cloud Azure", en: "Azure cloud concepts" },
      { fr: "Services compute, réseau, stockage", en: "Compute, network, storage services" },
      { fr: "Gouvernance et conformité", en: "Governance and compliance" },
      { fr: "Modèles de tarification", en: "Pricing models" },
    ],
    whyTakeIt: {
      fr: "Point d'entrée Microsoft idéal avant AZ-104 ou AZ-305.",
      en: "Ideal Microsoft entry point before AZ-104 or AZ-305.",
    },
    officialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
  },
  {
    id: "microsoft-az-104",
    name: "AZ-104",
    provider: "Microsoft",
    domain: "cloud",
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 165 €", en: "≈ $165" },
    examDurationDisplay: { fr: "120 min", en: "120 min" },
    validityDisplay: { fr: "1 an (renouvelable gratuitement)", en: "1 year (free renewal)" },
    examFormatDisplay: {
      fr: "QCM, études de cas, labs",
      en: "Multiple choice, case studies, labs",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Certification administrateur Azure pour gérer identités, stockage, compute et réseau.",
      en: "Azure Administrator certification for managing identities, storage, compute, and networking.",
    },
    skills: [
      { fr: "Gestion des identités Azure AD", en: "Azure AD identity management" },
      { fr: "Machines virtuelles et conteneurs", en: "Virtual machines and containers" },
      { fr: "Stockage Azure", en: "Azure storage" },
      { fr: "Réseau virtuel Azure", en: "Azure virtual networking" },
    ],
    whyTakeIt: {
      fr: "Certification clé pour les administrateurs cloud Microsoft.",
      en: "Key certification for Microsoft cloud administrators.",
    },
    officialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
  },
  {
    id: "gcp-associate-cloud-engineer",
    name: "Associate Cloud Engineer",
    provider: "Google Cloud",
    domain: "cloud",
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 125 €", en: "≈ $125" },
    examDurationDisplay: { fr: "120 min", en: "120 min" },
    validityDisplay: { fr: "2 ans", en: "2 years" },
    examFormatDisplay: {
      fr: "QCM et scénarios pratiques",
      en: "Multiple choice and practical scenarios",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Certification Google Cloud pour déployer, monitorer et maintenir des projets GCP.",
      en: "Google Cloud certification for deploying, monitoring, and maintaining GCP projects.",
    },
    skills: [
      { fr: "Déploiement Compute Engine et GKE", en: "Compute Engine and GKE deployment" },
      { fr: "Réseau VPC GCP", en: "GCP VPC networking" },
      { fr: "IAM et sécurité GCP", en: "GCP IAM and security" },
      { fr: "Monitoring et logging", en: "Monitoring and logging" },
    ],
    whyTakeIt: {
      fr: "Certification hands-on reconnue pour les ingénieurs cloud Google.",
      en: "Recognized hands-on certification for Google cloud engineers.",
    },
    officialUrl: "https://cloud.google.com/learn/certification/cloud-engineer",
  },

  // ── DevOps ─────────────────────────────────────────────────────────────────
  {
    id: "cncf-cka",
    name: "CKA",
    provider: "Linux Foundation / CNCF",
    domain: "devops",
    level: "advanced",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 395 €", en: "≈ $395" },
    examDurationDisplay: { fr: "2 h (pratique)", en: "2 hours (hands-on)" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "Terminal — tâches Kubernetes en conditions réelles",
      en: "Terminal — real-world Kubernetes tasks",
    },
    prerequisites: [
      {
        fr: "Expérience pratique Kubernetes recommandée",
        en: "Practical Kubernetes experience recommended",
      },
    ],
    difficultyDisplay: { fr: "Avancé", en: "Advanced" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Certification pratique d'administration Kubernetes en environnement cluster réel.",
      en: "Hands-on Kubernetes administration certification in a real cluster environment.",
    },
    skills: [
      { fr: "Installation et configuration cluster", en: "Cluster installation and configuration" },
      { fr: "Workloads et scheduling", en: "Workloads and scheduling" },
      { fr: "Services et networking K8s", en: "K8s services and networking" },
      { fr: "Dépannage cluster", en: "Cluster troubleshooting" },
    ],
    whyTakeIt: {
      fr: "Standard de facto pour les administrateurs Kubernetes et SRE.",
      en: "De facto standard for Kubernetes administrators and SREs.",
    },
    officialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    recognitionNote: {
      fr: "Exam 100 % pratique — très respectée par l'industrie.",
      en: "100% hands-on exam — highly respected by the industry.",
    },
  },
  {
    id: "cncf-ckad",
    name: "CKAD",
    provider: "Linux Foundation / CNCF",
    domain: "devops",
    level: "advanced",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 395 €", en: "≈ $395" },
    examDurationDisplay: { fr: "2 h (pratique)", en: "2 hours (hands-on)" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "Terminal — développement d'applications Kubernetes",
      en: "Terminal — Kubernetes application development",
    },
    difficultyDisplay: { fr: "Avancé", en: "Advanced" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Certification orientée développeur pour concevoir et déployer des apps sur Kubernetes.",
      en: "Developer-oriented certification for designing and deploying apps on Kubernetes.",
    },
    skills: [
      { fr: "Pods, Deployments, Services", en: "Pods, Deployments, Services" },
      { fr: "ConfigMaps et Secrets", en: "ConfigMaps and Secrets" },
      { fr: "Observabilité (probes, logs)", en: "Observability (probes, logs)" },
      { fr: "Multi-container patterns", en: "Multi-container patterns" },
    ],
    whyTakeIt: {
      fr: "Complément CKA pour les développeurs cloud-native et DevOps.",
      en: "CKA complement for cloud-native developers and DevOps engineers.",
    },
    officialUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
  },
  {
    id: "hashicorp-terraform-associate",
    name: "Terraform Associate",
    provider: "HashiCorp",
    domain: "devops",
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 70 €", en: "≈ $70" },
    examDurationDisplay: { fr: "60 min", en: "60 min" },
    validityDisplay: { fr: "2 ans", en: "2 years" },
    examFormatDisplay: {
      fr: "57 questions QCM",
      en: "57 multiple-choice questions",
    },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Certification IaC couvrant Terraform : HCL, state, modules et bonnes pratiques.",
      en: "IaC certification covering Terraform: HCL, state, modules, and best practices.",
    },
    skills: [
      { fr: "Syntaxe HCL et ressources", en: "HCL syntax and resources" },
      { fr: "State et backends", en: "State and backends" },
      { fr: "Modules et workspaces", en: "Modules and workspaces" },
      { fr: "Provisioners et data sources", en: "Provisioners and data sources" },
    ],
    whyTakeIt: {
      fr: "Valide les compétences IaC essentielles pour tout ingénieur DevOps cloud.",
      en: "Validates essential IaC skills for any cloud DevOps engineer.",
    },
    officialUrl: "https://www.hashicorp.com/certification/terraform-associate",
  },

  // ── AI ─────────────────────────────────────────────────────────────────────
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner",
    provider: "Amazon Web Services",
    domain: "ai",
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 100 €", en: "≈ $100" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    examFormatDisplay: {
      fr: "85 questions QCM",
      en: "85 multiple-choice questions",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Fondamentaux IA/ML sur AWS : SageMaker, Bedrock, services managés et cas d'usage.",
      en: "AI/ML fundamentals on AWS: SageMaker, Bedrock, managed services, and use cases.",
    },
    skills: [
      { fr: "Concepts ML et deep learning", en: "ML and deep learning concepts" },
      { fr: "Services IA AWS (SageMaker, Bedrock)", en: "AWS AI services (SageMaker, Bedrock)" },
      { fr: "IA responsable et gouvernance", en: "Responsible AI and governance" },
      { fr: "Cas d'usage entreprise", en: "Enterprise use cases" },
    ],
    whyTakeIt: {
      fr: "Certification IA cloud accessible pour débuter avant des spécialisations ML.",
      en: "Accessible cloud AI certification to start before ML specializations.",
    },
    officialUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    id: "microsoft-ai-900",
    name: "AI-900",
    provider: "Microsoft",
    domain: "ai",
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 99 €", en: "≈ $99" },
    examDurationDisplay: { fr: "45 min", en: "45 min" },
    validityDisplay: { fr: "1 an (renouvelable gratuitement)", en: "1 year (free renewal)" },
    examFormatDisplay: {
      fr: "QCM",
      en: "Multiple choice",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "2–4 semaines", en: "2–4 weeks" },
    description: {
      fr: "Fondamentaux IA Azure : Machine Learning, Cognitive Services et responsible AI.",
      en: "Azure AI fundamentals: Machine Learning, Cognitive Services, and responsible AI.",
    },
    skills: [
      { fr: "Concepts IA et ML", en: "AI and ML concepts" },
      { fr: "Azure AI Services", en: "Azure AI Services" },
      { fr: "Computer Vision et NLP", en: "Computer Vision and NLP" },
      { fr: "IA responsable", en: "Responsible AI" },
    ],
    whyTakeIt: {
      fr: "Point d'entrée Microsoft pour les profils curieux de l'IA sans prérequis technique lourd.",
      en: "Microsoft entry point for AI-curious profiles without heavy technical prerequisites.",
    },
    officialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },

  // ── Data ───────────────────────────────────────────────────────────────────
  {
    id: "databricks-lakehouse-fundamentals",
    name: "Databricks Lakehouse Fundamentals",
    provider: "Databricks",
    domain: "data",
    level: "beginner",
    priceTier: "free",
    priceDisplay: { fr: "Gratuit", en: "Free" },
    examDurationDisplay: { fr: "45 min", en: "45 min" },
    validityDisplay: { fr: "2 ans", en: "2 years" },
    examFormatDisplay: {
      fr: "45 questions QCM en ligne",
      en: "45 online multiple-choice questions",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 semaines", en: "1–2 weeks" },
    description: {
      fr: "Introduction au lakehouse Databricks : Delta Lake, Unity Catalog et analytics unifié.",
      en: "Introduction to the Databricks lakehouse: Delta Lake, Unity Catalog, and unified analytics.",
    },
    skills: [
      { fr: "Architecture lakehouse", en: "Lakehouse architecture" },
      { fr: "Delta Lake", en: "Delta Lake" },
      { fr: "Unity Catalog", en: "Unity Catalog" },
      { fr: "Analytics et ML unifiés", en: "Unified analytics and ML" },
    ],
    whyTakeIt: {
      fr: "Certification gratuite pour découvrir la plateforme data la plus adoptée en entreprise.",
      en: "Free certification to discover the most adopted enterprise data platform.",
    },
    officialUrl: "https://www.databricks.com/learn/training/certification/lakehouse-fundamentals",
  },

  // ── Programming / Web / Software ───────────────────────────────────────────
  {
    id: "python-institute-pcep",
    name: "PCEP",
    provider: "Python Institute",
    domain: "programming",
    tracks: ["software", "web"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 68 €", en: "≈ $68" },
    examDurationDisplay: { fr: "40 min", en: "40 min" },
    validityDisplay: { fr: "Illimitée", en: "Lifetime" },
    examFormatDisplay: {
      fr: "30 questions QCM et code",
      en: "30 multiple-choice and code questions",
    },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Certification entry-level Python validant syntaxe, types, fonctions et modules de base.",
      en: "Entry-level Python certification validating syntax, types, functions, and basic modules.",
    },
    skills: [
      { fr: "Syntaxe et types Python", en: "Python syntax and types" },
      { fr: "Contrôle de flux", en: "Control flow" },
      { fr: "Fonctions et modules", en: "Functions and modules" },
      { fr: "Exceptions de base", en: "Basic exceptions" },
    ],
    whyTakeIt: {
      fr: "Certification Python reconnue pour prouver les fondamentaux à un recruteur.",
      en: "Recognized Python certification to prove fundamentals to recruiters.",
    },
    officialUrl: "https://pythoninstitute.org/pcep",
    recognitionNote: {
      fr: "Programme accrédité par OpenEDG, indépendant des éditeurs.",
      en: "OpenEDG accredited program, vendor-independent.",
    },
  },
  {
    id: "python-institute-pcap",
    name: "PCAP",
    provider: "Python Institute",
    domain: "programming",
    tracks: ["software", "web"],
    level: "intermediate",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 295 €", en: "≈ $295" },
    examDurationDisplay: { fr: "65 min", en: "65 min" },
    validityDisplay: { fr: "Illimitée", en: "Lifetime" },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Certification Associate Python : OOP, modules, exceptions, strings et programmation structurée.",
      en: "Python Associate certification: OOP, modules, exceptions, strings, and structured programming.",
    },
    skills: [
      { fr: "Programmation orientée objet", en: "Object-oriented programming" },
      { fr: "Modules et packages", en: "Modules and packages" },
      { fr: "Exceptions avancées", en: "Advanced exceptions" },
      { fr: "Strings et listes", en: "Strings and lists" },
    ],
    whyTakeIt: {
      fr: "Niveau supérieur à PCEP, utile pour junior développeur Python / automatisation.",
      en: "Step above PCEP — useful for junior Python / automation roles.",
    },
    officialUrl: "https://pythoninstitute.org/pcap",
    recognitionNote: {
      fr: "Référence OpenEDG largement citée sur les CV tech.",
      en: "OpenEDG reference frequently cited on tech CVs.",
    },
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    provider: "GitHub",
    domain: "programming",
    tracks: ["software", "web"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 99 $", en: "≈ $99" },
    examDurationDisplay: { fr: "≈ 2 h", en: "≈ 2 hours" },
    validityDisplay: { fr: "2 ans", en: "2 years" },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "2–4 semaines", en: "2–4 weeks" },
    description: {
      fr: "Valide Git, GitHub, collaboration, Issues, Pull Requests et bonnes pratiques open source.",
      en: "Validates Git, GitHub, collaboration, Issues, Pull Requests, and open-source basics.",
    },
    skills: [
      { fr: "Git et branches", en: "Git and branching" },
      { fr: "Pull Requests", en: "Pull Requests" },
      { fr: "Actions de base", en: "Basic Actions" },
      { fr: "Collaboration d’équipe", en: "Team collaboration" },
    ],
    whyTakeIt: {
      fr: "Certif vendor moderne, très alignée avec le quotidien web / logiciel.",
      en: "Modern vendor cert closely aligned with everyday web / software work.",
    },
    officialUrl: "https://examregistration.github.com/certification/FOUNDATIONS",
    recognitionNote: {
      fr: "Portée par Microsoft/GitHub — visible et crédible pour les recruteurs produit.",
      en: "Backed by Microsoft/GitHub — credible signal for product recruiters.",
    },
  },
  {
    id: "meta-frontend-developer",
    name: "Meta Front-End Developer",
    provider: "Meta (Coursera)",
    domain: "programming",
    tracks: ["web"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "Abonnement Coursera", en: "Coursera subscription" },
    preparationTimeDisplay: { fr: "3–6 mois", en: "3–6 months" },
    difficultyDisplay: { fr: "Débutant à intermédiaire", en: "Beginner to intermediate" },
    description: {
      fr: "Parcours professionnel Meta : HTML/CSS, JS, React, UX et portfolio front-end.",
      en: "Meta Professional Certificate: HTML/CSS, JS, React, UX, and a front-end portfolio.",
    },
    skills: [
      { fr: "HTML / CSS / JS", en: "HTML / CSS / JS" },
      { fr: "React", en: "React" },
      { fr: "Versioning Git", en: "Git versioning" },
      { fr: "UX de base", en: "Basic UX" },
    ],
    whyTakeIt: {
      fr: "Référence marché pour se positionner junior front-end avec projets concrets.",
      en: "Market reference to position as a junior front-end with concrete projects.",
    },
    officialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    recognitionNote: {
      fr: "Certificat professionnel Meta — très demandé dans les bootcamps / reconversions web.",
      en: "Meta Professional Certificate — popular in web bootcamps and career switches.",
    },
  },
  {
    id: "meta-backend-developer",
    name: "Meta Back-End Developer",
    provider: "Meta (Coursera)",
    domain: "programming",
    tracks: ["web", "software"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "Abonnement Coursera", en: "Coursera subscription" },
    preparationTimeDisplay: { fr: "4–7 mois", en: "4–7 months" },
    difficultyDisplay: { fr: "Débutant à intermédiaire", en: "Beginner to intermediate" },
    description: {
      fr: "Parcours Meta back-end : Python, Django, APIs, bases de données et sécurité applicative.",
      en: "Meta back-end path: Python, Django, APIs, databases, and application security.",
    },
    skills: [
      { fr: "Python / Django", en: "Python / Django" },
      { fr: "APIs REST", en: "REST APIs" },
      { fr: "Bases de données", en: "Databases" },
      { fr: "Sécurité web de base", en: "Basic web security" },
    ],
    whyTakeIt: {
      fr: "Complète le parcours web full-stack et cadre les bases serveur.",
      en: "Completes a full-stack web path and frames server-side basics.",
    },
    officialUrl: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
  },
  {
    id: "aws-developer-associate",
    name: "AWS Developer Associate",
    provider: "Amazon Web Services",
    domain: "cloud",
    tracks: ["software", "web", "cloud"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 150 $", en: "≈ $150" },
    examDurationDisplay: { fr: "130 min", en: "130 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Développement d’applications sur AWS : Lambda, API Gateway, DynamoDB, CI/CD et sécurité IAM.",
      en: "Building apps on AWS: Lambda, API Gateway, DynamoDB, CI/CD, and IAM security.",
    },
    skills: [
      { fr: "Services de compute serverless", en: "Serverless compute services" },
      { fr: "APIs et stockage", en: "APIs and storage" },
      { fr: "CI/CD AWS", en: "AWS CI/CD" },
      { fr: "IAM développeur", en: "Developer IAM" },
    ],
    whyTakeIt: {
      fr: "Référence cloud pour développeurs web / logiciel qui déploient en production.",
      en: "Cloud reference for web / software developers shipping to production.",
    },
    officialUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
    recognitionNote: {
      fr: "Parmi les certifs AWS les plus citées pour les postes développeur cloud.",
      en: "Among the most cited AWS certs for cloud developer roles.",
    },
  },
  {
    id: "microsoft-az-204",
    name: "AZ-204 Developing Solutions",
    provider: "Microsoft",
    domain: "cloud",
    tracks: ["software", "web", "cloud"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 165 €", en: "≈ $165" },
    examDurationDisplay: { fr: "≈ 120 min", en: "≈ 120 min" },
    validityDisplay: { fr: "1 an (renouvelable)", en: "1 year (renewable)" },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Développer des solutions Azure : App Service, Functions, stockage, Cosmos DB et monitoring.",
      en: "Develop Azure solutions: App Service, Functions, storage, Cosmos DB, and monitoring.",
    },
    skills: [
      { fr: "Azure App Service", en: "Azure App Service" },
      { fr: "Azure Functions", en: "Azure Functions" },
      { fr: "Stockage et Cosmos DB", en: "Storage and Cosmos DB" },
      { fr: "Sécurité et monitoring", en: "Security and monitoring" },
    ],
    whyTakeIt: {
      fr: "Équivalent Microsoft du Developer Associate — fort sur les stacks .NET / Node en entreprise.",
      en: "Microsoft counterpart to Developer Associate — strong for .NET / Node enterprise stacks.",
    },
    officialUrl: "https://learn.microsoft.com/credentials/certifications/azure-developer/",
  },
  {
    id: "oracle-java-foundations",
    name: "Oracle Java Foundations",
    provider: "Oracle",
    domain: "programming",
    tracks: ["software"],
    level: "beginner",
    priceTier: "under100",
    priceDisplay: { fr: "≈ 95 $", en: "≈ $95" },
    examDurationDisplay: { fr: "60 min", en: "60 min" },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Fondamentaux Java SE : types, contrôle de flux, classes, encapsulation et API de base.",
      en: "Java SE foundations: types, control flow, classes, encapsulation, and core APIs.",
    },
    skills: [
      { fr: "Syntaxe Java", en: "Java syntax" },
      { fr: "OOP de base", en: "Basic OOP" },
      { fr: "Collections simples", en: "Simple collections" },
      { fr: "Exceptions", en: "Exceptions" },
    ],
    whyTakeIt: {
      fr: "Porte d’entrée vendor Oracle pour les parcours logiciel Java d’entreprise.",
      en: "Oracle vendor entry point for enterprise Java software paths.",
    },
    officialUrl: "https://education.oracle.com/java-foundations/pexam_1Z0-811",
  },
  {
    id: "istqb-ctfl",
    name: "ISTQB CTFL",
    provider: "ISTQB",
    domain: "programming",
    tracks: ["software", "web"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 200–250 €", en: "≈ $200–250" },
    examDurationDisplay: { fr: "60 min", en: "60 min" },
    validityDisplay: { fr: "Illimitée", en: "Lifetime" },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Fondamentaux du test logiciel : conception de cas, niveaux de test, outils et processus.",
      en: "Software testing foundations: test design, test levels, tools, and processes.",
    },
    skills: [
      { fr: "Conception de tests", en: "Test design" },
      { fr: "Niveaux et types de test", en: "Test levels and types" },
      { fr: "Gestion des défauts", en: "Defect management" },
      { fr: "Processus de test", en: "Testing process" },
    ],
    whyTakeIt: {
      fr: "Standard mondial QA — très utile en logiciel et qualité produit web.",
      en: "Global QA standard — highly useful in software and web product quality.",
    },
    officialUrl: "https://www.istqb.org/certifications/certified-tester-foundation-level",
    recognitionNote: {
      fr: "Référence quasi universelle pour les rôles QA / testeur.",
      en: "Near-universal reference for QA / tester roles.",
    },
  },
  {
    id: "scrum-psm-i",
    name: "PSM I",
    provider: "Scrum.org",
    domain: "programming",
    tracks: ["software", "web"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 200 $", en: "≈ $200" },
    examDurationDisplay: { fr: "60 min", en: "60 min" },
    validityDisplay: { fr: "Illimitée", en: "Lifetime" },
    difficultyDisplay: { fr: "Débutant à intermédiaire", en: "Beginner to intermediate" },
    preparationTimeDisplay: { fr: "2–4 semaines", en: "2–4 weeks" },
    description: {
      fr: "Professional Scrum Master I : Scrum Guide, rôles, événements et empirisme agile.",
      en: "Professional Scrum Master I: Scrum Guide, roles, events, and agile empiricism.",
    },
    skills: [
      { fr: "Cadre Scrum", en: "Scrum framework" },
      { fr: "Rôles et événements", en: "Roles and events" },
      { fr: "Backlog et incrément", en: "Backlog and increment" },
      { fr: "Agilité d’équipe", en: "Team agility" },
    ],
    whyTakeIt: {
      fr: "Certif agile très lisible sur un CV développeur / lead technique.",
      en: "Highly readable agile cert on a developer / tech lead CV.",
    },
    officialUrl: "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
  },
  {
    id: "cisco-devnet-associate",
    name: "DevNet Associate",
    provider: "Cisco",
    domain: "networking",
    tracks: ["networking", "software"],
    level: "intermediate",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 300 $", en: "≈ $300" },
    examDurationDisplay: { fr: "120 min", en: "120 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    difficultyDisplay: { fr: "Intermédiaire", en: "Intermediate" },
    preparationTimeDisplay: { fr: "2–4 mois", en: "2–4 months" },
    description: {
      fr: "Automatisation réseau : APIs REST, Python, CI/CD, sécurité et plateformes Cisco.",
      en: "Network automation: REST APIs, Python, CI/CD, security, and Cisco platforms.",
    },
    skills: [
      { fr: "APIs REST / JSON", en: "REST / JSON APIs" },
      { fr: "Python pour le réseau", en: "Python for networking" },
      { fr: "Infrastructure as Code", en: "Infrastructure as Code" },
      { fr: "Sécurité des APIs", en: "API security" },
    ],
    whyTakeIt: {
      fr: "Pont idéal entre module Réseau et développement logiciel / automatisation.",
      en: "Ideal bridge between Networking modules and software / automation.",
    },
    officialUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/devnet/devnet-associate/index.html",
    recognitionNote: {
      fr: "Référence Cisco pour les profils NetDevOps.",
      en: "Cisco reference for NetDevOps profiles.",
    },
  },
  {
    id: "comptia-a-plus",
    name: "CompTIA A+",
    provider: "CompTIA",
    domain: "programming",
    tracks: ["software", "networking"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 2 × 253 $", en: "≈ 2 × $253" },
    examDurationDisplay: { fr: "90 min / examen", en: "90 min / exam" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "2–3 mois", en: "2–3 months" },
    description: {
      fr: "Fondamentaux IT : hardware, OS, réseau de base, troubleshooting et support utilisateur.",
      en: "IT foundations: hardware, OS, basic networking, troubleshooting, and end-user support.",
    },
    skills: [
      { fr: "Hardware et OS", en: "Hardware and OS" },
      { fr: "Dépannage", en: "Troubleshooting" },
      { fr: "Réseau de base", en: "Basic networking" },
      { fr: "Support utilisateur", en: "End-user support" },
    ],
    whyTakeIt: {
      fr: "Socle vendor-neutral avant de spécialiser réseau, logiciel ou support.",
      en: "Vendor-neutral foundation before specializing in network, software, or support.",
    },
    officialUrl: "https://www.comptia.org/certifications/a",
  },
  {
    id: "cncf-kcna",
    name: "KCNA",
    provider: "CNCF / Linux Foundation",
    domain: "devops",
    tracks: ["software", "cloud", "web"],
    level: "beginner",
    priceTier: "100to300",
    priceDisplay: { fr: "≈ 250 $", en: "≈ $250" },
    examDurationDisplay: { fr: "90 min", en: "90 min" },
    validityDisplay: { fr: "3 ans", en: "3 years" },
    difficultyDisplay: { fr: "Débutant", en: "Beginner" },
    preparationTimeDisplay: { fr: "1–2 mois", en: "1–2 months" },
    description: {
      fr: "Kubernetes and Cloud Native Associate : concepts cloud-native, conteneurs et orchestration.",
      en: "Kubernetes and Cloud Native Associate: cloud-native concepts, containers, and orchestration.",
    },
    skills: [
      { fr: "Conteneurs", en: "Containers" },
      { fr: "Kubernetes concepts", en: "Kubernetes concepts" },
      { fr: "Observabilité de base", en: "Basic observability" },
      { fr: "Écosystème CNCF", en: "CNCF ecosystem" },
    ],
    whyTakeIt: {
      fr: "Porte d’entrée cloud-native avant CKA/CKAD — utile web & logiciel moderne.",
      en: "Cloud-native entry before CKA/CKAD — useful for modern web & software.",
    },
    officialUrl: "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/",
  },
];

/** Domains typically aligned with each learning track / module family. */
export const TRACK_CERT_DOMAINS: Record<TrackId, CertDomain[]> = {
  networking: ["networking", "cybersecurity", "devops"],
  web: ["programming", "devops", "cloud"],
  software: ["programming", "devops", "cloud", "data"],
  cloud: ["cloud", "devops"],
  security: ["cybersecurity", "networking"],
  ai: ["ai", "data", "programming"],
};

const LEVEL_ORDER: CertLevel[] = ["beginner", "intermediate", "advanced", "expert"];

const RECOGNIZED_CERT_IDS = new Set([
  "isc2-cissp",
  "cisco-ccna",
  "aws-solutions-architect-associate",
  "comptia-security-plus",
  "offsec-oscp",
  "cncf-cka",
  "isaca-cism",
  "aws-developer-associate",
  "istqb-ctfl",
  "github-foundations",
  "cisco-devnet-associate",
]);

function levelIndex(level: CertLevel): number {
  return LEVEL_ORDER.indexOf(level);
}

function matchesQuery(cert: Certification, q: string): boolean {
  const needle = q.toLowerCase().trim();
  if (!needle) return true;

  const haystack = [
    cert.name,
    cert.provider,
    cert.description.fr,
    cert.description.en,
    cert.whyTakeIt.fr,
    cert.whyTakeIt.en,
    ...cert.skills.flatMap((s) => [s.fr, s.en]),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(needle);
}

export function getCertification(id: string): Certification | undefined {
  return CERTIFICATIONS.find((c) => c.id === id);
}

const DOMAIN_ORDER: CertDomain[] = [
  "networking",
  "programming",
  "cybersecurity",
  "cloud",
  "devops",
  "data",
  "ai",
];

export type CertDomainSection = {
  domain: CertDomain;
  data: Certification[];
};

/** Group filtered certs into domain sections (empty domains omitted). */
export function groupCertificationsByDomain(
  certs: Certification[]
): CertDomainSection[] {
  const buckets = new Map<CertDomain, Certification[]>();
  for (const domain of DOMAIN_ORDER) {
    buckets.set(domain, []);
  }
  for (const cert of certs) {
    const list = buckets.get(cert.domain);
    if (list) list.push(cert);
    else buckets.set(cert.domain, [cert]);
  }
  return DOMAIN_ORDER.map((domain) => ({
    domain,
    data: buckets.get(domain) ?? [],
  })).filter((section) => section.data.length > 0);
}

export function filterCertifications({
  q,
  domain,
  level,
  priceTier,
  trackId,
}: FilterCertificationsParams = {}): Certification[] {
  return CERTIFICATIONS.filter((cert) => {
    if (domain && cert.domain !== domain) return false;
    if (level && cert.level !== level) return false;
    if (priceTier && cert.priceTier !== priceTier) return false;
    if (trackId) {
      const domains = TRACK_CERT_DOMAINS[trackId] ?? [];
      const tagged = cert.tracks?.includes(trackId) ?? false;
      const domainMatch = domains.includes(cert.domain);
      if (!tagged && !domainMatch) return false;
    }
    if (q && !matchesQuery(cert, q)) return false;
    return true;
  });
}

function buildGoalReason(
  cert: Certification,
  goal: RecommendCertificationsParams["goal"]
): { score: number; reason: Certification["whyTakeIt"] } | null {
  switch (goal) {
    case "first-job":
      if (cert.level !== "beginner") return null;
      return {
        score: cert.priceTier === "free" ? 3 : cert.priceTier === "under100" ? 2 : 1,
        reason: {
          fr: `Accessible pour un premier emploi : ${cert.name} couvre les bases essentielles.`,
          en: `Accessible for a first job: ${cert.name} covers essential foundations.`,
        },
      };
    case "specialize":
      return {
        score: cert.level === "intermediate" ? 3 : cert.level === "advanced" ? 2 : 1,
        reason: {
          fr: `${cert.name} approfondit les compétences clés de votre domaine.`,
          en: `${cert.name} deepens key skills in your domain.`,
        },
      };
    case "career-growth":
      if (cert.level === "beginner") return null;
      return {
        score: cert.level === "intermediate" ? 3 : cert.level === "advanced" ? 2 : 1,
        reason: {
          fr: `${cert.name} est un levier reconnu pour évoluer vers des postes senior.`,
          en: `${cert.name} is a recognized lever for advancing into senior roles.`,
        },
      };
    case "recognized-cert":
      if (!RECOGNIZED_CERT_IDS.has(cert.id)) return null;
      return {
        score: 3,
        reason: cert.recognitionNote ?? cert.whyTakeIt,
      };
    case "deepen":
      if (levelIndex(cert.level) < levelIndex("advanced")) return null;
      return {
        score: cert.level === "expert" ? 3 : 2,
        reason: {
          fr: `${cert.name} valide une expertise avancée et très recherchée.`,
          en: `${cert.name} validates advanced, highly sought-after expertise.`,
        },
      };
    default: {
      const _exhaustive: never = goal;
      return _exhaustive;
    }
  }
}

export function recommendCertifications({
  domain,
  level,
  priceTier,
  goal,
}: RecommendCertificationsParams): CertRecommendation[] {
  const targetLevelIdx = levelIndex(level);

  const scored = CERTIFICATIONS.filter((cert) => cert.domain === domain)
    .map((cert) => {
      const goalMatch = buildGoalReason(cert, goal);
      if (!goalMatch) return null;

      let score = goalMatch.score;

      const certLevelIdx = levelIndex(cert.level);
      const levelDelta = Math.abs(certLevelIdx - targetLevelIdx);
      score += Math.max(0, 2 - levelDelta);

      if (cert.priceTier === priceTier) {
        score += 2;
      } else if (
        priceTier === "under100" &&
        (cert.priceTier === "free" || cert.priceTier === "100to300")
      ) {
        score += 1;
      }

      if (RECOGNIZED_CERT_IDS.has(cert.id)) {
        score += 1;
      }

      return { cert, reason: goalMatch.reason, score };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    .sort((a, b) => b.score - a.score || a.cert.name.localeCompare(b.cert.name));

  return scored.slice(0, 5).map(({ cert, reason }) => ({ cert, reason }));
}

/** Best available learning track to prepare for this certification. */
export function getPrepTrackForCert(cert: Certification): TrackId | null {
  const tagged = (cert.tracks ?? []).find((id) => getTrack(id)?.available);
  if (tagged) return tagged;

  for (const trackId of Object.keys(TRACK_CERT_DOMAINS) as TrackId[]) {
    const track = getTrack(trackId);
    if (!track?.available) continue;
    if (TRACK_CERT_DOMAINS[trackId].includes(cert.domain)) return trackId;
  }
  return null;
}

export type {
  CertDomain,
  CertLevel,
  CertPriceTier,
  CertRecommendation,
  Certification,
  FilterCertificationsParams,
  RecommendCertificationsParams,
} from "@/types/certification";
