/* ===========================================================
   Nestly Homes — sample data (mock, demo only)
   Indian context: rupee pricing, Indian cities.
   These are managed, fully-furnished homes we rent out to tenants.
=========================================================== */

const NESTLY_RENTALS = [
  {
    id: "n1",
    title: "Sunlit 2BHK near Koramangala",
    type: "2 BHK",
    city: "Bengaluru",
    area: "Koramangala",
    rent: 42000,
    deposit: 168000,
    rating: 4.9,
    reviews: 46,
    beds: 2, baths: 2, sqft: 1150,
    seed: "nh-blr-1",
    badge: "Fully furnished",
    available: "Immediate",
    description: "A bright, fully-furnished 2BHK in the heart of Koramangala, walking distance to cafes, co-working spaces and the metro. Managed end-to-end by Nestly.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Power backup", "Smart TV", "Housekeeping"]
  },
  {
    id: "n2",
    title: "Premium 3BHK in Gachibowli",
    type: "3 BHK",
    city: "Hyderabad",
    area: "Gachibowli",
    rent: 55000,
    deposit: 220000,
    rating: 4.8,
    reviews: 33,
    beds: 3, baths: 3, sqft: 1650,
    seed: "nh-hyd-1",
    badge: "Fully furnished",
    available: "Immediate",
    description: "Spacious family home in a gated community close to the IT corridor, with clubhouse, gym and 24×7 security. Fresh interiors by Nestly.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Power backup", "Gym access", "Security"]
  },
  {
    id: "n3",
    title: "Cozy 1BHK studio in Indiranagar",
    type: "1 BHK",
    city: "Bengaluru",
    area: "Indiranagar",
    rent: 32000,
    deposit: 128000,
    rating: 4.7,
    reviews: 58,
    beds: 1, baths: 1, sqft: 720,
    seed: "nh-blr-2",
    badge: "Fully furnished",
    available: "From 1 Aug",
    description: "A smartly designed 1BHK for young professionals, steps from Indiranagar's restaurants and pubs. Move-in ready with all essentials.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Smart TV", "Washing machine", "24×7 water"]
  },
  {
    id: "n4",
    title: "Sea-breeze 2BHK in Adyar",
    type: "2 BHK",
    city: "Chennai",
    area: "Adyar",
    rent: 38000,
    deposit: 152000,
    rating: 4.8,
    reviews: 29,
    beds: 2, baths: 2, sqft: 1080,
    seed: "nh-chn-1",
    badge: "Fully furnished",
    available: "Immediate",
    description: "Airy 2BHK a short drive from the beach, in a quiet, well-connected neighbourhood. Freshly furnished and professionally maintained.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Balcony", "Housekeeping"]
  },
  {
    id: "n5",
    title: "Modern 3BHK in Baner",
    type: "3 BHK",
    city: "Pune",
    area: "Baner",
    rent: 46000,
    deposit: 184000,
    rating: 4.9,
    reviews: 21,
    beds: 3, baths: 2, sqft: 1450,
    seed: "nh-pnq-1",
    badge: "Fully furnished",
    available: "From 15 Aug",
    description: "Contemporary 3BHK close to the Mumbai-Bengaluru highway and Baner's tech parks, in a family-friendly society with amenities.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Power backup", "Lift", "Gym access"]
  },
  {
    id: "n6",
    title: "Elegant 2BHK in Powai",
    type: "2 BHK",
    city: "Mumbai",
    area: "Powai",
    rent: 68000,
    deposit: 272000,
    rating: 4.7,
    reviews: 37,
    beds: 2, baths: 2, sqft: 980,
    seed: "nh-mum-1",
    badge: "Fully furnished",
    available: "Immediate",
    description: "Lake-facing 2BHK in a premium Powai tower with skyline views, minutes from Hiranandani. Turnkey furnished by Nestly.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Power backup", "Security", "Balcony"]
  },
  {
    id: "n7",
    title: "Bright 1BHK in HSR Layout",
    type: "1 BHK",
    city: "Bengaluru",
    area: "HSR Layout",
    rent: 29000,
    deposit: 116000,
    rating: 4.6,
    reviews: 64,
    beds: 1, baths: 1, sqft: 680,
    seed: "nh-blr-3",
    badge: "Fully furnished",
    available: "Immediate",
    description: "Compact, well-lit 1BHK ideal for a working professional, in the startup hub of HSR Layout with everything you need within reach.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Smart TV", "24×7 water", "Housekeeping"]
  },
  {
    id: "n8",
    title: "Spacious 3BHK in Whitefield",
    type: "3 BHK",
    city: "Bengaluru",
    area: "Whitefield",
    rent: 51000,
    deposit: 204000,
    rating: 4.8,
    reviews: 26,
    beds: 3, baths: 3, sqft: 1720,
    seed: "nh-blr-4",
    badge: "Fully furnished",
    available: "From 1 Aug",
    description: "Large family 3BHK near ITPL and top schools, in a gated community with pool and clubhouse. Move-in ready interiors.",
    amenities: ["Fully furnished", "Wi-Fi", "Air conditioning", "Modular kitchen", "Covered parking", "Power backup", "Gym access", "Security"]
  }
];

const NESTLY_CITIES = ["Bengaluru", "Hyderabad", "Chennai", "Pune", "Mumbai"];

function nestlyImg(seed, w, h) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
function nestlyGetRental(id) {
  return NESTLY_RENTALS.find(p => p.id === id);
}
function nestlyRupee(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}
