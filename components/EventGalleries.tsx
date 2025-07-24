"use client";

import GallerySection from "./GallerySection";

const EventGalleries = () => {
  const sections = [
    {
      subtitle: "",
      title: "Meeting at the residence of the Chairman & CEO of White Group",
      images: [
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/4be767be3d07e259bb16.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/7d1e54420efbd1a588ea.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/1141e275b8cc67923edd.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/220666ef3756e808b147.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/3b4ee7acb615694b3004.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/c7a79974c8cd17934edc.jpg", alt: "" },
      ],
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    },
    {
      subtitle: "Thursday 27 April, 2023",
      title: "Cooperate with Vietnamese universities",
      images: [
        { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197665_e8e60555fa8d8eb7c23d6c539f60ef23.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736182038_68dd58bb80d5f9055289ff95bc5261fb.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736196264_42b35514b036370810f2587778d4ec80.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/imgpsh_fullsize_anim.png", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/imgpsh_fullsize_anim-1.png", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/imgpsh_fullsize_anim-3.png", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/05/imgpsh_fullsize_anim-2.png", alt: "" },
      ],
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
    },
    {
      subtitle: "Saturday 15 April, 2023",
      title: "In-house Team Training",
      images: [
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/8N3A9666-scaled.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/4X4A0306-scaled.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/8N3A9726-scaled.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/4X4A0293-scaled.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/8N3A9587-scaled.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/8N3A9872-scaled.jpg", alt: "" },
      ],
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    },
    {
      subtitle: "Wednesday 12 April, 2023",
      title: "MOU signature All Sports Business with BeQ Holdings business",
      images: [
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_001_1600.jpg", alt: "Mrs. Ta Thi My Phuong, CEO of BeQ Holings and Mr. Olivier JACQUOT" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_002_1600.jpg", alt: "Mr. MAI Huu Minh, Founder BeQ Holdings and Mr. Olivier JACQUOT" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_003_1600.jpg", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-1-1.png", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-2.png", alt: "" },
        { src: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-3.png", alt: "" },
      ],
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {sections.map((section, index) => (
        <GallerySection
          key={index}
          subtitle={section.subtitle}
          title={section.title}
          images={section.images}
          gridCols={section.gridCols}
        />
      ))}
    </div>
  );
};

export default EventGalleries;