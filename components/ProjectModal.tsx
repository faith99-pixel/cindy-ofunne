"use client";

import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  tags: string[];
  description: string;
  impact: string[];
  methodologies: string[];
  image?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors z-10"
          >
            ✕
          </button>

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xl text-primary font-semibold">
                    {project.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-700">{project.period}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-secondary mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Impact & Methodologies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-secondary mb-4 flex items-center gap-2 text-lg">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                  Key Impact
                </h4>
                <ul className="space-y-3">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-gray-700 flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-secondary mb-4 flex items-center gap-2 text-lg">
                  <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                  Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.methodologies.map((method) => (
                    <span
                      key={method}
                      className="inline-block px-3 py-2 bg-primary/10 text-primary rounded font-medium text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
              <a
                href="mailto:cindyokosun@yahoo.com?subject=Project Discussion"
                className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-center"
              >
                Discuss This Project
              </a>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-secondary font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
