import { useState,useEffect} from 'react';
import PageHero from '../components/PageHero';

const GALLERY_ITEMS = [
  { src: '/bg_image.png', alt: 'Academy grounds', category: 'facilities', size: 'large' },
  { src: '/about.png', alt: 'About GSA', category: 'facilities', size: 'medium' },
  { src: '/Programs/cricpro.png', alt: 'Cricket program', category: 'training', size: 'medium' },
  { src: '/Programs/footballpro.png', alt: 'Football program', category: 'training', size: 'medium' },
  { src: '/our_vision.png', alt: 'Our vision', category: 'events', size: 'small' },
  { src: '/cricke.jpg', alt: 'Cricket training', category: 'training', size: 'small' },
  { src: '/football.webp', alt: 'Football', category: 'training', size: 'small' },
  { src: '/playground.png', alt: 'Playground', category: 'facilities', size: 'large' },
  { src: '/swim.jpg', alt: 'Swimming', category: 'training', size: 'medium' },
  { src: '/tennis.jpg', alt: 'Tennis', category: 'training', size: 'small' },
  { src: '/our_mission.jpg', alt: 'Our mission', category: 'events', size: 'medium' },
  { src: '/founder.png', alt: 'Founders', category: 'events', size: 'small' },
  { src: '/Programs/tennispro.png', alt: 'Tennis program', category: 'training', size: 'small' },
  { src: '/Programs/swimmingpro.png', alt: 'Swimming program', category: 'training', size: 'medium' },
  { src: '/join_img.webp', alt: 'Join GSA', category: 'events', size: 'small' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'training', label: 'Training' },
  { id: 'events', label: 'Events' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [filter]);

  const filtered =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const getGridClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 min-h-[240px] sm:min-h-[280px] md:min-h-[320px]';
      case 'medium':
        return 'col-span-1 row-span-1 min-h-[200px] md:min-h-[240px]';
      default:
        return 'col-span-1 row-span-1 min-h-[180px] md:min-h-[200px]';
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Moments at Gandhinagar Sports Academy"
        title="Gallery"
        subtitle="Explore our facilities, training sessions, and academy life through photos."
        imageSrc="/gallery_hr.jpg"
      />

      {/* Filter pills + bento grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden />
        <div className="relative max-w-[1335px] mx-auto w-full px-4 sm:px-5">
          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-lime-500 text-white shadow-lg shadow-lime-500/25'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-lime-300 hover:bg-lime-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
            {filtered.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-md shadow-gray-200/50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/10 hover:border-lime-300/60 hover:-translate-y-0.5 ${getGridClass(item.size)}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden />
                <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 text-left line-clamp-2">
                  {item.alt}
                </span>
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden>
                  <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;

// import PageHero from "../components/PageHero";
// import { useState, useEffect, useRef } from "react";

// const media = [
//   { type: 'video', src: '/reel.mp4', alt: 'Academy reel' },
//   { type: 'image', src: '/bg_image.png', alt: 'Academy grounds' },
//   { type: 'image', src: '/about.png', alt: 'About GSA' },
//   { type: 'image', src: '/Programs/cricpro.png', alt: 'Cricket program' },
//   { type: 'image', src: '/Programs/footballpro.png', alt: 'Football program' },
//   { type: 'image', src: '/cricke.jpg', alt: 'Cricket training' },
//   { type: 'image', src: '/football.webp', alt: 'Football' },
//   { type: 'image', src: '/playground.png', alt: 'Playground' },
//   { type: 'image', src: '/swim.jpg', alt: 'Swimming' },
//   { type: 'image', src: '/tennis.jpg', alt: 'Tennis' },
//   { type: 'image', src: '/founder.png', alt: 'Founders' },
//   { type: 'image', src: '/Programs/tennispro.png', alt: 'Tennis program' },
//   { type: 'image', src: '/Programs/swimmingpro.png', alt: 'Swimming program' },
//   { type: 'image', src: '/join_img.webp', alt: 'Join GSA' },
// ];

// const AUTOPLAY_MS = 2500;

// const Gallery = () => {
//   const [current, setCurrent] = useState(0);
//   const videoRef = useRef(null);

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % media.length);
//   };

//   const prev = () => {
//     setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const id = setInterval(next, AUTOPLAY_MS);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       const isVideoCurrent = media[current]?.type === 'video';
//       if (isVideoCurrent) videoRef.current.play().catch(() => {});
//       else videoRef.current.pause();
//     }
//   }, [current]);

//   return (
//     <>
//       <PageHero
//         eyebrow="Moments at Gandhinagar Sports Academy"
//         title="Gallery"
//         subtitle="Explore our facilities, training sessions, and academy life through photos."
//         imageSrc="/gallery_hr.jpg"
//       />

//       <section className="py-16 bg-[#d2b48c] overflow-hidden">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold text-white mb-10">
//             Training Session Gallery
//           </h2>

//           <div className="relative flex items-center justify-center min-h-[420px]">
//             {/* Left Arrow */}
//             {/* <button
//               type="button"
//               onClick={prev}
//               className="absolute left-0 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
//               aria-label="Previous image"
//             >
//               ◀
//             </button> */}

//             {/* Carousel: center image + stacked on BOTH left and right */}
//             <div className="relative w-full max-w-[700px] h-[420px] flex items-center justify-center">
//               {media.map((item, index) => {
//                 let offset = index - current;
//                 if (offset > media.length / 2) offset -= media.length;
//                 if (offset < -media.length / 2) offset += media.length;

//                 const scale = 1 - Math.abs(offset) * 0.06;
//                 const xPx = offset * 90;
//                 const z = media.length - Math.abs(offset);
//                 const opacity = Math.abs(offset) <= 2 ? 1 : Math.max(0.4, 1 - (Math.abs(offset) - 2) * 0.2);
//                 const isCenter = offset === 0;
//                 const baseStyle = {
//                   left: '50%',
//                   top: '50%',
//                   transform: `translate(-50%, -50%) translateX(${xPx}px) scale(${scale})`,
//                   zIndex: z,
//                   opacity,
//                 };
//                 const baseClass = 'absolute w-[520px] h-[340px] sm:w-[600px] sm:h-[380px] object-cover rounded-lg shadow-xl transition-all duration-500 pointer-events-none';

//                 return item.type === 'video' ? (
//                   <video
//                     key={index}
//                     ref={item.type === 'video' ? videoRef : undefined}
//                     src={item.src}
//                     className={baseClass}
//                     style={baseStyle}
//                     muted
//                     loop
//                     playsInline
//                     autoPlay={isCenter}
//                   />
//                 ) : (
//                   <img
//                     key={index}
//                     src={item.src}
//                     alt={item.alt}
//                     className={baseClass}
//                     style={baseStyle}
//                   />
//                 );
//               })}
//             </div>

//             {/* Right Arrow */}
//             {/* <button
//               type="button"
//               onClick={next}
//               className="absolute right-0 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
//               aria-label="Next image"
//             >
//               ▶
//             </button> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;
