export interface DJItem {
  slug: string;
  name: string;
  instagram: string;
  soundcloud?: string;
  image: string;
  bio: string;
}

/**
 * Real TLC Tuesday residents, pulled from the event flyers. Bios are still
 * placeholder.
 */
export const residentDJs: DJItem[] = [
  {
    slug: "nick-cav",
    name: "NICK CAV",
    instagram: "@nick.cav",
    image: "/photos/djs/DSC00350.jpg",
    bio: "TLC Tuesday resident. One half of the lineup that runs the room every week.",
  },
  {
    slug: "swat",
    name: "SWAT",
    instagram: "@sawyer__watson",
    image: "/photos/djs/DSC00596.jpg",
    bio: "TLC Tuesday resident. The other half, closing out the room every week.",
  },
];
