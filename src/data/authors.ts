import { AuthorProfile, ReviewerProfile } from '../types';

export const authors: Record<string, AuthorProfile> = {
  marcus_vance: {
    id: 'marcus_vance',
    name: 'Marcus Vance, MS, CSCS',
    role: 'Senior Sports Science Editor',
    credentials: 'M.S. in Exercise Physiology & Sports Nutrition; Certified Strength & Conditioning Specialist (NSCA-CSCS)',
    bio: 'Marcus has 12 years of experience analyzing exercise biochemistry, athletic conditioning protocols, and sports supplement literature. He leads methodology at 77 Review.',
  },
  elena_rodriguez: {
    id: 'elena_rodriguez',
    name: 'Elena Rodriguez, MS, CNS',
    role: 'Nutrition & Supplement Research Lead',
    credentials: 'M.S. in Clinical Nutrition; Certified Nutrition Specialist (CNS); Member of the American Society for Nutrition',
    bio: 'Elena specializes in dietary supplement label verification, phytochemical bioavailability, and systematic reviews of ergogenic aids.',
  },
  julian_reed: {
    id: 'julian_reed',
    name: 'Julian Reed',
    role: 'Health Technology & Gear Editor',
    credentials: 'B.S. in Biomedical Engineering; 8+ years evaluating wearable biosensors and consumer wellness hardware',
    bio: 'Julian evaluates biometric telemetry accuracy, hardware durability, and data privacy in health and recovery devices.',
  },
};

export const reviewers: Record<string, ReviewerProfile> = {
  dr_sarah_chen: {
    id: 'dr_sarah_chen',
    name: 'Dr. Sarah Chen, MD, MPH',
    credentials: 'M.D. (Internal Medicine), Master of Public Health; Board Certified in Preventive Medicine',
    specialty: 'Preventive Medicine & Clinical Toxicology',
    licenseOrInstitution: 'Independent Medical Review Board Member; Active Medical Licensure (California #C148922)',
    bio: 'Dr. Chen audits 77 Review content for health claims accuracy, pharmacological contraindications, and clinical trial interpretative rigor.',
  },
  dr_kevin_patel: {
    id: 'dr_kevin_patel',
    name: 'Dr. Kevin Patel, PharmD',
    credentials: 'Doctor of Pharmacy (PharmD); Board Certified Pharmacotherapy Specialist (BCPS)',
    specialty: 'Pharmacokinetics, Dietary Supplement Interactions & Purity',
    licenseOrInstitution: 'Clinical Pharmacist Consultant; Active Licensure (Texas #58921)',
    bio: 'Dr. Patel reviews supplement ingredient combinations, proprietary blends, potential drug-nutrient interactions, and bioavailability claims.',
  },
};
