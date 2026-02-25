"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, RotateCcw, Move, ZoomIn, ZoomOut } from "lucide-react";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  tourUrl: string;
}

export default function VirtualTourModal({
  isOpen,
  onClose,
  projectName,
  tourUrl,
}: VirtualTourModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl h-[85vh] bg-navy rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-navy border-b border-white/10">
              <div>
                <h3 className="text-white font-bold text-lg">{projectName}</h3>
                <p className="text-white/50 text-sm">360° Virtual Tour</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Tour Content */}
            <div className="flex-1 relative bg-gray-900">
              {/* Placeholder Virtual Tour Experience */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                {/* Animated 360° indicator */}
                <div className="relative w-40 h-40 mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-gold/40 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border-2 border-dashed border-gold/20 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl font-bold text-gold"
                      >
                        360°
                      </motion.div>
                    </div>
                  </div>
                </div>

                <h4 className="text-white text-2xl font-bold mb-3">
                  Virtual Tour — {projectName}
                </h4>
                <p className="text-white/50 text-sm max-w-md mb-8 leading-relaxed">
                  Experience an immersive 360° walkthrough of the property. Explore every room,
                  corridor, and amenity from the comfort of your home.
                </p>

                {/* Controls hint */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Move size={16} />
                    <span>Drag to look around</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <ZoomIn size={16} />
                    <span>Scroll to zoom</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <RotateCcw size={16} />
                    <span>Double-click to reset</span>
                  </div>
                </div>

                {/* Launch actual tour button */}
                <a
                  href={tourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-gold/20 hover:shadow-gold/40"
                >
                  <Maximize2 size={18} />
                  Launch Full Tour Experience
                </a>

                <p className="text-white/30 text-xs mt-4">
                  Tour URL: {tourUrl}
                </p>
                <p className="text-white/20 text-xs mt-1">
                  Replace this URL with your actual Matterport / 360° tour link
                </p>
              </div>

              {/* Decorative grid overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>
            </div>

            {/* Footer with room navigation placeholder */}
            <div className="px-6 py-3 bg-navy border-t border-white/10">
              <div className="flex items-center gap-3 overflow-x-auto">
                {["Living Room", "Master Bedroom", "Kitchen", "Balcony", "Bathroom", "Lobby", "Amenities"].map(
                  (room, i) => (
                    <button
                      key={room}
                      className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        i === 0
                          ? "bg-gold text-navy"
                          : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {room}
                    </button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
