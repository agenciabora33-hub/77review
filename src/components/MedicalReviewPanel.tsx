import React from 'react';
import { AuthorProfile, ReviewerProfile, MedicalRiskLevel } from '../types';
import { UserCheck, Stethoscope } from 'lucide-react';

interface MedicalReviewPanelProps {
  author: AuthorProfile;
  reviewer?: ReviewerProfile;
  medicalRiskLevel: MedicalRiskLevel;
  lastUpdatedDate: string;
}

export const MedicalReviewPanel: React.FC<MedicalReviewPanelProps> = ({
  author,
  reviewer,
  medicalRiskLevel,
  lastUpdatedDate,
}) => {
  const riskLabels: Record<MedicalRiskLevel, { text: string; desc: string }> = {
    general_editorial: {
      text: 'General Health Education',
      desc: 'Standard physiological education with general fitness or lifestyle applicability.',
    },
    health_sensitive: {
      text: 'Health-Sensitive: Peer & Clinical Review',
      desc: 'Content addressing active supplementation, biochemical pathways, or biomarker analysis; audited by medical/pharmaceutical reviewer.',
    },
    high_risk_specialist: {
      text: 'High-Risk: Specialist Required',
      desc: 'Touches complex medical boundaries; published only following specialty physician sign-off.',
    },
    rejected: {
      text: 'Rejected by Governance',
      desc: 'Not publishable due to insufficient evidence.',
    },
  };

  const riskInfo = riskLabels[medicalRiskLevel];

  return (
    <div className="border border-stone-200 bg-white rounded-xl p-6 sm:p-7 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-stone-700" />
          <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
            Editorial & Governance Metadata
          </h4>
        </div>
        <div className="text-xs text-stone-500 font-mono">
          Updated: <span className="text-stone-800 font-medium">{lastUpdatedDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Primary Author */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-stone-500 font-medium">
            <UserCheck className="w-3.5 h-3.5 text-stone-600" />
            <span>Research & Author:</span>
          </div>
          <p className="font-semibold text-stone-900 text-sm">{author.name}</p>
          <p className="text-stone-600">{author.credentials}</p>
          <p className="text-stone-500 text-[11px] leading-relaxed pt-1">{author.bio}</p>
        </div>

        {/* Medical Reviewer */}
        {reviewer ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-stone-500 font-medium">
              <Stethoscope className="w-3.5 h-3.5 text-stone-600" />
              <span>Independent Medical Review:</span>
            </div>
            <p className="font-semibold text-stone-900 text-sm">{reviewer.name}</p>
            <p className="text-stone-600">{reviewer.specialty} · {reviewer.licenseOrInstitution}</p>
            <p className="text-stone-500 text-[11px] leading-relaxed pt-1">{reviewer.bio}</p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <span className="text-stone-500 font-medium">Review Protocol:</span>
            <p className="font-semibold text-stone-900 text-sm">77 Review Sports Science Desk</p>
            <p className="text-stone-600">Double-checked against published systematic reviews and manufacturer specifications.</p>
          </div>
        )}
      </div>

      {/* Classification tier explanation */}
      <div className="pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-600">
        <span className="font-semibold text-stone-800 shrink-0">Governance Gate:</span>
        <p className="leading-relaxed">
          <span className="text-stone-900 font-medium">{riskInfo.text}</span> — {riskInfo.desc}
        </p>
      </div>
    </div>
  );
};
