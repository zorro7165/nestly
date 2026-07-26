/* ===========================================================
   Nestly Homes — shared behavior
   nav drawer, rental card render, FAQ accordion, form validation
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFaq();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".mobile-nav");
  if (!toggle || !drawer) return;
  const closeBtn = drawer.querySelector(".mobile-nav__close");

  const open = () => {
    drawer.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    const first = drawer.querySelector("a, button");
    if (first) first.focus();
  };
  const close = () => {
    drawer.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  };
  toggle.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  drawer.addEventListener("click", (e) => { if (e.target === drawer) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) close();
  });
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("open", !expanded);
    });
  });
}

/**
 * Renders a furnished-rental card.
 */
function nestlyRenderRentalCard(p) {
  return `
    <article class="card property-card" data-id="${p.id}" data-type="${p.type}" data-city="${p.city}" data-rent="${p.rent}">
      <div class="property-card__media">
        <img src="${nestlyImg(p.seed, 480, 360)}" alt="Interior of ${p.title}, ${p.area}, ${p.city}" loading="lazy" width="480" height="360">
        <span class="property-card__badge furnished">${p.badge}</span>
      </div>
      <div class="property-card__body">
        <div class="property-card__top">
          <h3 class="property-card__title">${p.title}</h3>
          <span class="rating">${nestlyIcon("star", 14)} ${p.rating.toFixed(1)}</span>
        </div>
        <p class="property-card__location">${nestlyIcon("map-pin", 14)} ${p.area}, ${p.city}</p>
        <div class="property-card__meta">
          <span>${nestlyIcon("bed", 14)} ${p.beds} bed${p.beds > 1 ? "s" : ""}</span>
          <span>${nestlyIcon("bath", 14)} ${p.baths} bath${p.baths > 1 ? "s" : ""}</span>
          <span>${nestlyIcon("ruler", 14)} ${p.sqft} sq.ft</span>
        </div>
        <div class="property-card__footer">
          <span class="property-card__price">${nestlyRupee(p.rent)} <small>/ month</small></span>
          <span class="badge badge-success">${p.available}</span>
        </div>
        <button type="button" class="btn btn-outline btn-block btn-sm" style="margin-top:8px;" onclick="nestlyEnquire('${p.id}')">Enquire about this home</button>
      </div>
    </article>
  `;
}

function nestlyEnquire(id) {
  const p = nestlyGetRental(id);
  const name = p ? p.title : "this home";
  alert(`Thanks for your interest in "${name}"!\n\nThis is a demo — in the live site this would open an enquiry form or send your details to the Nestly team. Call +91 98765 43210 or email sekar19.t@gmail.com to book a viewing.`);
}

/* Generic required-field validator used by the owner lead form. */
function nestlySetFieldError(field, hasError) {
  field.classList.toggle("has-error", hasError);
}
