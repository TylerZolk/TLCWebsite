/**
 * Confirmed real details: address, Instagram handle, hours, phone, email.
 * Still placeholder: zip code.
 */
export const siteConfig = {
  name: "TLC",
  fullName: "TLC",
  tagline: "COLUMBIA NIGHTS START HERE.",
  neighborhood: "Columbia, SC",
  address: {
    line1: "936 S Stadium Road",
    line2: "Columbia, SC",
  },
  phone: "(803) 251-3087",
  bookingPhone: "(803) 412-1633",
  email: "tlcsportsbar1@gmail.com",
  instagram: {
    handle: "@tlcsportsbarsc",
    url: "https://www.instagram.com/tlcsportsbarsc/",
  },
  hours: [
    { label: "MON-SAT", value: "1:30PM-2AM" },
    { label: "SUN", value: "Closed" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "TLC Tuesday", href: "/tlc-tuesday" },
  { label: "Bookings", href: "/bookings" },
] as const;
