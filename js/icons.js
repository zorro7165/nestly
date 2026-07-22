/* ===========================================================
   Nestly Homes — inline SVG icon set (outline, 24x24, no emoji)
=========================================================== */

const NESTLY_ICONS = {
  home: '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  star: '<polygon points="12 2 15.09 8.63 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.63 12 2"/>',
  bed: '<path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M2 14h20"/><path d="M6 10V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/><path d="M2 21v-3"/><path d="M22 21v-3"/>',
  bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.5 1V15"/><path d="M2 15h20v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/><line x1="6" y1="15" x2="6" y2="19"/><line x1="18" y1="15" x2="18" y2="19"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  ruler: '<path d="M3 8 8 3l13 13-5 5Z"/><path d="M7 7l1.5 1.5"/><path d="M11 11l1.5 1.5"/><path d="M15 15l1.5 1.5"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/>',
  "shield-check": '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/><polyline points="9 12 11 14 15 10"/>',
  wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><circle cx="16" cy="14" r="1.5"/>',
  "rupee": '<path d="M6 4h12"/><path d="M6 9h12"/><path d="M14 4c2.5 0 4 2 4 4.5S16.5 13 14 13H8l7 7"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  globe: '<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.4-2.4Z"/>',
  sofa: '<path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 12a2 2 0 0 1 2 2v3h16v-3a2 2 0 0 1 2-2 2 2 0 0 0-2 2v-2"/><path d="M4 17v2"/><path d="M20 17v2"/><rect x="2" y="10" width="4" height="6" rx="2"/><rect x="18" y="10" width="4" height="6" rx="2"/><path d="M6 17h12"/>',
  "file-text": '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><polyline points="14 3 14 9 20 9"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>',
  wifi: '<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11.5 11.5 0 0 1 14 0"/><path d="M8.5 15.5a6.5 6.5 0 0 1 7 0"/><line x1="12" y1="19" x2="12" y2="19.01"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 16h15a3 3 0 1 1-3 3"/><path d="M3 12h18"/>',
  car: '<path d="M5 17h14l1.6-5.4A2 2 0 0 0 18.7 9H5.3a2 2 0 0 0-1.9 2.6Z"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  droplet: '<path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z"/>',
  tv: '<rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="8 3 12 7 16 3"/>',
  utensils: '<path d="M4 3v7a2 2 0 0 0 2 2h0V3"/><path d="M6 3v18"/><path d="M18 3c-1.5 0-3 1.5-3 4v5h3"/><path d="M18 3v18"/>',
  dumbbell: '<path d="M6.5 6.5 3 3"/><path d="M17.5 17.5 21 21"/><path d="M9 15 15 9"/><rect x="4" y="12" width="4" height="4" rx="1" transform="rotate(-45 6 14)"/><rect x="16" y="8" width="4" height="4" rx="1" transform="rotate(-45 18 10)"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"/><path d="M20 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a3 3 0 0 1-3 3h-2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  "message-circle": '<path d="M21 11.5a8.5 8.5 0 0 1-11.9 7.8L3 21l1.7-6.1A8.5 8.5 0 1 1 21 11.5Z"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
  "arrow-right": '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>',
  sparkles: '<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M5.6 5.6l2.8 2.8"/><path d="M15.6 15.6l2.8 2.8"/><path d="M18.4 5.6l-2.8 2.8"/><path d="M8.4 15.6l-2.8 2.8"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  "map": '<polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21 1 6"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/>'
};

function nestlyIcon(name, size, extraClass) {
  const body = NESTLY_ICONS[name] || NESTLY_ICONS.home;
  size = size || 20;
  const cls = extraClass ? ` class="${extraClass}"` : "";
  return `<svg${cls} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

const NESTLY_AMENITY_ICON = {
  "Wi-Fi": "wifi",
  "Air conditioning": "wind",
  "Modular kitchen": "utensils",
  "Covered parking": "car",
  "Power backup": "zap",
  "24×7 water": "droplet",
  "Smart TV": "tv",
  "Washing machine": "wrench",
  "Gym access": "dumbbell",
  "Housekeeping": "sparkles",
  "Fully furnished": "sofa",
  "Balcony": "home",
  "Lift": "arrow-right",
  "Security": "shield"
};
