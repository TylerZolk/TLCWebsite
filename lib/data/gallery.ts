export interface GalleryItem {
  id: string;
  image: string;
  orientation: "landscape" | "portrait" | "square";
  alt: string;
}

export const recentNights: GalleryItem[] = [
  { id: "g1", image: "/photos/gallery/DSC08125.jpg", orientation: "portrait", alt: "Group on the floor at TLC" },
  { id: "g2", image: "/photos/gallery/DSC08129.jpg", orientation: "landscape", alt: "Crowd at TLC" },
  { id: "g3", image: "/photos/gallery/DSC08332-Enhanced-NR.jpg", orientation: "landscape", alt: "Hands up on the dance floor" },
  { id: "g4", image: "/photos/hero/DSC08451.jpg", orientation: "landscape", alt: "DJ at TLC" },
  { id: "g5", image: "/photos/hero/DSC08477.jpg", orientation: "landscape", alt: "Regulars at TLC" },
];

export const tuesdayArchive: GalleryItem[] = [
  { id: "t1", image: "/photos/hero/DSC08705.jpg", orientation: "landscape", alt: "DJ booth on TLC Tuesday" },
  { id: "t2", image: "/photos/hero/DSC08618.jpg", orientation: "landscape", alt: "Crowd on TLC Tuesday" },
  { id: "t3", image: "/photos/hero/DSC08540.jpg", orientation: "landscape", alt: "Hands up on TLC Tuesday" },
  { id: "t4", image: "/photos/hero/DSC08530.jpg", orientation: "landscape", alt: "TLC Tuesday crowd" },
];
