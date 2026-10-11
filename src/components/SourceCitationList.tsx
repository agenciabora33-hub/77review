import React, { useState } from 'react';
import { SourceCitation } from '../types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface SourceCitationListProps {
  sources: SourceCitation[];
}

export const SourceCitationList: React.FC<SourceCitationListProps> = ({ sources }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!sources || sources.length === 0) return null;

  return (
    <div className="border border-stone-200 bg-white rounded-xl p-6 sm:p-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-stone-900">
            Documented Evidence & Source Trail
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Peer-reviewed literature, public health dossiers, and clinical trial records evaluated for this publication.
          </p>
        </div>
        <span className="text-xs font-mono text-stone-500 tabular-nums">
          {sources.length} Verified {sources.length === 1 ? 'Citation' : 'Citations'}
        </span>
      </div>

      <ol className="divide-y divide-stone-100 text-xs">
        {sources.map((src, index) => {
          const isExpanded = expandedId === src.id;
          return (
            <li key={src.id} className="py-4 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-stone-500 font-medium">
                    <span className="font-mono text-stone-900 font-semibold">[{index + 1}]</span>
                    <span className="capitalize">{src.sourceType.replace(/_/g, ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span>Published {src.publicationDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>Verified {src.lastCheckedDate}</span>
                  </div>

                  <a
                    href={src.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-stone-900 hover:underline inline-flex items-center gap-1.5 leading-snug pt-0.5"
                  >
                    <span>{src.sourceTitle}</span>
                    <ExternalLink className="w-3 h-3 text-stone-500 shrink-0" />
                  </a>

                  <p className="text-stone-600 italic pt-1">
                    Evaluated Claim: "{src.claim}"
                  </p>
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : src.id)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors shrink-0 cursor-pointer"
                  title="Toggle study methodology and limitations"
                  aria-label="Toggle study details"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isExpanded && (
                <div className="mt-3 p-4 bg-stone-50 rounded-lg space-y-2 border border-stone-200/80 text-stone-700">
                  <div>
                    <strong className="text-stone-900 font-semibold block text-[11px] uppercase tracking-wider">
                      Relevant Findings & Data:
                    </strong>
                    <p className="mt-0.5 leading-relaxed">{src.relevantFindings}</p>
                  </div>
                  <div>
                    <strong className="text-stone-900 font-semibold block text-[11px] uppercase tracking-wider">
                      Methodological Limitations & Sample Notes:
                    </strong>
                    <p className="mt-0.5 leading-relaxed">{src.limitations}</p>
                  </div>
                  <div className="text-[11px] text-stone-500 pt-1">
                    Directly Supports Editorial Claim:{' '}
                    <span className={src.directlySupports ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold'}>
                      {src.directlySupports ? 'Yes (Direct Empirical Alignment)' : 'Partial / Qualified Context'}
                    </span>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
