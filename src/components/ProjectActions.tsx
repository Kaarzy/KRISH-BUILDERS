"use client";

import { useState } from "react";
import { Download, Eye } from "lucide-react";
import VirtualTourModal from "./VirtualTourModal";

interface ProjectActionsProps {
  projectName: string;
  brochureUrl: string;
  virtualTourUrl: string;
}

export default function ProjectActions({
  projectName,
  brochureUrl,
  virtualTourUrl,
}: ProjectActionsProps) {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={brochureUrl}
          download
          className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
        >
          <Download size={18} />
          Download Brochure
        </a>
        <button
          onClick={() => setIsTourOpen(true)}
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
        >
          <Eye size={18} />
          Virtual Tour
        </button>
      </div>

      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        projectName={projectName}
        tourUrl={virtualTourUrl}
      />
    </>
  );
}
