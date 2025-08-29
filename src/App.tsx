import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gambar dari Pexels (lebih bervariasi: portrait, landscape, square)
const baseImages = [
  {
    src: "https://images.pexels.com/photos/31781361/pexels-photo-31781361.jpeg",
    title: "Jonathan Borba",
  },
  {
    src: "https://images.pexels.com/photos/31870847/pexels-photo-31870847.jpeg",
    title: "Ezgi Kaya",
  },
  {
    src: "https://images.pexels.com/photos/30466249/pexels-photo-30466249.jpeg",
    title: "Defrino Maasy",
  },
  {
    src: "https://images.pexels.com/photos/33140600/pexels-photo-33140600.jpeg",
    title: "Nati",
  },
  {
    src: "https://images.pexels.com/photos/15416576/pexels-photo-15416576.jpeg",
    title: "Bart ter Haar",
  },
  {
    src: "https://images.pexels.com/photos/18071152/pexels-photo-18071152.jpeg",
    title: "Sandro Tedeschini",
  },
  {
    src: "https://images.pexels.com/photos/32854546/pexels-photo-32854546.jpeg",
    title: "Barkali",
  },
  {
    src: "https://images.pexels.com/photos/32861252/pexels-photo-32861252.jpeg",
    title: "Pat Wellen",
  },
  {
    src: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg",
    title: "Stijn Dijkstra",
  },
  {
    src: "https://images.pexels.com/photos/19119247/pexels-photo-19119247.jpeg",
    title: "Cote Francois",
  },
  {
    src: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    title: "Gustav Klimt",
  },
  {
    src: "https://images.pexels.com/photos/13386019/pexels-photo-13386019.jpeg",
    title: "Enrico Assirelli",
  },
  {
    src: "https://images.pexels.com/photos/17393027/pexels-photo-17393027.jpeg",
    title: "Des Dunes",
  },
  {
    src: "src/assets/1.jpg",
    title: "Jochochise",
  },
  {
    src: "https://images.pexels.com/photos/31758904/pexels-photo-31758904.jpeg",
    title: "Ilya B",
  },
  {
    src: "https://images.pexels.com/photos/30255490/pexels-photo-30255490.jpeg",
    title: "Lexi Lauwers",
  },
  {
    src: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
    title: "Belle Co",
  },
  {
    src: "https://images.pexels.com/photos/28608772/pexels-photo-28608772.jpeg",
    title: "Raymond Petrik",
  },
  {
    src: "https://images.pexels.com/photos/29620758/pexels-photo-29620758.jpeg",
    title: "Zaonar Saizainalin",
  },
  {
    src: "https://images.pexels.com/photos/29300602/pexels-photo-29300602.jpeg",
    title: "Djarteme",
  },
];

export default function App() {
  const [images] = useState(baseImages);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur border-b border-neutral-800 px-6 py-4">
        <h1 className="text-xl font-bold">My Gallery</h1>
      </nav>

      {/* Masonry Layout */}
      <div className="max-w-7xl mx-auto px-4 py-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="relative group cursor-pointer overflow-hidden rounded-lg break-inside-avoid"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 opacity-90 group-hover:opacity-100 transition">
              <p className="text-sm font-medium">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white/80 hover:text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Card */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-neutral-900 rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white/80 hover:text-white transition"
              >
                <X size={28} />
              </button>
              <div className="flex items-center justify-center bg-black">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {images[selectedIndex].title}
                </h2>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white/80 hover:text-white p-2 rounded-full transition"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
