/* JFM · vetrina: testi IT/EN/ES, lingua, gallerie, richiesta disponibilità */
const WA = "393520575278";
const MAIL = "amministrazione@jfmitalia.com";
const T = {
  it: {
    nav_houses: "Le case", nav_services: "Servizi", nav_about: "Chi siamo", nav_owners: "Proprietari", nav_contact: "Contatti",
    hero_kicker: "San Giovanni · Roma",
    hero_title: "Ospitalità autentica nel cuore di Roma",
    hero_sub: "Due appartamenti a pochi passi dal Colosseo e dalla Basilica di San Giovanni, curati da chi vive Roma ogni giorno.",
    hero_cta: "Chiedi disponibilità", hero_cta2: "Scopri le case",
    houses_title: "Le nostre case", houses_sub: "Self check-in, Wi-Fi veloce, biancheria e pulizia professionale incluse. Una guida digitale accompagna ogni soggiorno, dall'arrivo alla partenza.",
    lat_tag: "Fino a 8 ospiti · terrazza",
    lat_desc: "Appartamento ampio e luminoso al primo piano con ascensore: due camere da letto, soggiorno con zona pranzo e balcone, cucina completa, due bagni e una terrazza privata. Ideale per famiglie e gruppi.",
    col_tag: "Fino a 4 ospiti · design",
    col_desc: "Appartamento dal design colorato al secondo piano con ascensore, sulla via che collega la Basilica di San Giovanni al Colosseo: camera matrimoniale, soggiorno con divano letto, cucina e bagno.",
    f_guests8: "8 ospiti", f_guests4: "4 ospiti", f_bed2: "2 camere", f_bed1: "1 camera", f_bath2: "2 bagni", f_bath1: "1 bagno",
    f_terrace: "Terrazza", f_lift: "Ascensore", f_wifi: "Wi-Fi", f_kitchen: "Cucina completa", f_sofa: "Divano letto", f_ac: "Self check-in",
    d_col: "Colosseo", d_sg: "Basilica di San Giovanni", d_metro: "Metro A San Giovanni", walk: "min a piedi",
    ask: "Chiedi disponibilità", maps: "Vedi sulla mappa", reviews: "Recensioni Google",
    services_title: "Cosa offriamo ai nostri ospiti",
    s1_t: "Accoglienza su misura", s1_d: "Ogni ospite è accolto con cura: welcome gift, guida digitale in tre lingue e indicazioni passo passo per arrivare.",
    s2_t: "Pulizia professionale", s2_d: "Pulizia e manutenzione affidate a uno staff di fiducia, con biancheria e asciugamani sempre freschi.",
    s3_t: "Roma da vivere", s3_d: "Consigli su ristoranti e itinerari e, su richiesta, transfer privati da e per gli aeroporti.",
    s4_t: "Assistenza continua", s4_d: "Rispondiamo su WhatsApp durante tutto il soggiorno, per qualsiasi necessità.",
    hood_title: "Il quartiere", hood_d: "San Giovanni è una zona residenziale e autentica, ben collegata con la metro A e a pochi minuti a piedi dal Colosseo. Trattorie romane, bar di quartiere e alcuni dei luoghi più antichi e meno affollati della città.",
    about_title: "Chi siamo", about_d: "JFM nasce dall'esperienza di Fabio e Alessandro, originari di Salerno e cresciuti tra l'ospitalità della Costiera Amalfitana. Oggi portano a Roma lo stesso modo di accogliere: attenzione ai dettagli, disponibilità e la voglia di far sentire ogni ospite a casa.",
    rev_title: "Cosa dicono di noi", rev_d: "Le recensioni dei nostri ospiti sono su Airbnb, Booking.com e Google.",
    form_title: "Chiedi disponibilità", form_sub: "Compila i campi e invia la richiesta su WhatsApp o per email: rispondiamo al più presto con disponibilità e prezzo.",
    fl_house: "Casa", fl_any: "Indifferente", fl_in: "Arrivo", fl_out: "Partenza", fl_guests: "Ospiti", fl_name: "Nome", fl_notes: "Note (facoltative)",
    send_wa: "Invia su WhatsApp", send_mail: "Invia per email", form_err: "Inserire le date di arrivo e partenza.",
    msg_intro: "Ciao! Vorrei sapere la disponibilità per:", msg_house: "Casa", msg_dates: "Date", msg_guests: "Ospiti", msg_name: "Nome", msg_notes: "Note",
    owners_cta_t: "Hai un appartamento a Roma?", owners_cta_d: "Ci occupiamo noi di tutto, dagli annunci agli ospiti. Scopri come lavoriamo.", owners_cta: "Area proprietari",
    contact_title: "Contatti", c_phone: "Telefono e WhatsApp", c_mail: "Email", c_addr: "Indirizzo",
    footer: "Gestione affitti brevi a Roma",
    ow_kicker: "Per i proprietari", ow_title: "Il tuo appartamento a Roma, gestito come fosse nostro",
    ow_sub: "Gestione completa degli affitti brevi per proprietari che vogliono un reddito costante, senza pensieri.",
    ow_s_title: "Di cosa ci occupiamo",
    ow1: "Gestione delle prenotazioni e visibilità degli annunci", ow2: "Accoglienza degli ospiti e check-in personalizzato", ow3: "Pulizia e manutenzione con staff di fiducia", ow4: "Assistenza agli ospiti 7 giorni su 7", ow5: "Analisi di mercato e prezzi dinamici",
    ow_m_title: "Due formule, su misura", ow_m1_t: "Gestione diretta", ow_m1_d: "L'appartamento resta a tuo nome e ce ne occupiamo noi in ogni dettaglio, in cambio di una percentuale sugli incassi.",
    ow_m2_t: "Subaffitto", ow_m2_d: "Un canone concordato e garantito, mentre la gestione degli ospiti è interamente a carico nostro.",
    ow_team: "Siamo un team giovane e appassionato di ospitalità romana e di gestione di qualità.",
    ow_cta_t: "Richiedi una consulenza gratuita", ow_cta_d: "Raccontaci il tuo appartamento: ti diciamo come possiamo valorizzarlo.",
    ow_msg: "Ciao! Sono proprietario di un appartamento a Roma e vorrei una consulenza gratuita sulla gestione.",
    back_home: "Torna alla home"
  },
  en: {
    nav_houses: "Apartments", nav_services: "Services", nav_about: "About us", nav_owners: "Owners", nav_contact: "Contact",
    hero_kicker: "San Giovanni · Rome",
    hero_title: "Authentic hospitality in the heart of Rome",
    hero_sub: "Two apartments a short walk from the Colosseum and the Basilica of St John Lateran, looked after by people who live Rome every day.",
    hero_cta: "Check availability", hero_cta2: "See the apartments",
    houses_title: "Our apartments", houses_sub: "Self check-in, fast Wi-Fi, linen and professional cleaning included. A digital guide comes with every stay, from arrival to departure.",
    lat_tag: "Up to 8 guests · terrace",
    lat_desc: "Spacious, bright first-floor apartment with lift: two bedrooms, living room with dining area and balcony, fully equipped kitchen, two bathrooms and a private terrace. Ideal for families and groups.",
    col_tag: "Up to 4 guests · design",
    col_desc: "Colourful design apartment on the second floor with lift, on the street linking the Basilica of St John Lateran to the Colosseum: double bedroom, living room with sofa bed, kitchen and bathroom.",
    f_guests8: "8 guests", f_guests4: "4 guests", f_bed2: "2 bedrooms", f_bed1: "1 bedroom", f_bath2: "2 bathrooms", f_bath1: "1 bathroom",
    f_terrace: "Terrace", f_lift: "Lift", f_wifi: "Wi-Fi", f_kitchen: "Full kitchen", f_sofa: "Sofa bed", f_ac: "Self check-in",
    d_col: "Colosseum", d_sg: "St John Lateran", d_metro: "Metro A San Giovanni", walk: "min walk",
    ask: "Check availability", maps: "View on map", reviews: "Google reviews",
    services_title: "What we offer our guests",
    s1_t: "Tailored welcome", s1_d: "Every guest is welcomed with care: a welcome gift, a digital guide in three languages and step-by-step directions to get here.",
    s2_t: "Professional cleaning", s2_d: "Cleaning and maintenance by a trusted team, with fresh linen and towels every time.",
    s3_t: "Rome to enjoy", s3_d: "Restaurant and itinerary tips and, on request, private transfers to and from the airports.",
    s4_t: "Ongoing support", s4_d: "We answer on WhatsApp throughout your stay, for anything you need.",
    hood_title: "The neighbourhood", hood_d: "San Giovanni is an authentic residential area, well connected by metro line A and a few minutes' walk from the Colosseum. Roman trattorias, local cafés and some of the city's oldest and least crowded sights.",
    about_title: "About us", about_d: "JFM was born from the experience of Fabio and Alessandro, from Salerno and raised in the hospitality of the Amalfi Coast. Today they bring the same way of welcoming to Rome: attention to detail, availability and the wish to make every guest feel at home.",
    rev_title: "What our guests say", rev_d: "Our guests' reviews are on Airbnb, Booking.com and Google.",
    form_title: "Check availability", form_sub: "Fill in the fields and send your request on WhatsApp or by email: we'll reply as soon as possible with availability and price.",
    fl_house: "Apartment", fl_any: "Either", fl_in: "Arrival", fl_out: "Departure", fl_guests: "Guests", fl_name: "Name", fl_notes: "Notes (optional)",
    send_wa: "Send on WhatsApp", send_mail: "Send by email", form_err: "Please enter arrival and departure dates.",
    msg_intro: "Hi! I'd like to check availability for:", msg_house: "Apartment", msg_dates: "Dates", msg_guests: "Guests", msg_name: "Name", msg_notes: "Notes",
    owners_cta_t: "Do you own an apartment in Rome?", owners_cta_d: "We take care of everything, from listings to guests. See how we work.", owners_cta: "Owners area",
    contact_title: "Contact", c_phone: "Phone & WhatsApp", c_mail: "Email", c_addr: "Address",
    footer: "Short-term rental management in Rome",
    ow_kicker: "For owners", ow_title: "Your apartment in Rome, managed as if it were ours",
    ow_sub: "Full short-term rental management for owners who want steady income without the hassle.",
    ow_s_title: "What we take care of",
    ow1: "Booking management and listing visibility", ow2: "Guest welcome and personalised check-in", ow3: "Cleaning and maintenance by a trusted team", ow4: "Guest support 7 days a week", ow5: "Market analysis and dynamic pricing",
    ow_m_title: "Two tailored options", ow_m1_t: "Direct management", ow_m1_d: "The apartment stays in your name and we handle every detail, for a percentage of the revenue.",
    ow_m2_t: "Sublet", ow_m2_d: "An agreed, guaranteed rent, while guest management is entirely on us.",
    ow_team: "We are a young team, passionate about Roman hospitality and quality management.",
    ow_cta_t: "Request a free consultation", ow_cta_d: "Tell us about your apartment: we'll tell you how we can make the most of it.",
    ow_msg: "Hi! I own an apartment in Rome and would like a free consultation about management.",
    back_home: "Back to home"
  },
  es: {
    nav_houses: "Apartamentos", nav_services: "Servicios", nav_about: "Quiénes somos", nav_owners: "Propietarios", nav_contact: "Contacto",
    hero_kicker: "San Giovanni · Roma",
    hero_title: "Hospitalidad auténtica en el corazón de Roma",
    hero_sub: "Dos apartamentos a pocos pasos del Coliseo y de la Basílica de San Juan de Letrán, cuidados por quien vive Roma cada día.",
    hero_cta: "Consultar disponibilidad", hero_cta2: "Ver los apartamentos",
    houses_title: "Nuestros apartamentos", houses_sub: "Self check-in, wifi rápido, ropa de cama y limpieza profesional incluidas. Una guía digital acompaña cada estancia, de la llegada a la salida.",
    lat_tag: "Hasta 8 huéspedes · terraza",
    lat_desc: "Apartamento amplio y luminoso en el primer piso con ascensor: dos dormitorios, salón con comedor y balcón, cocina completa, dos baños y una terraza privada. Ideal para familias y grupos.",
    col_tag: "Hasta 4 huéspedes · diseño",
    col_desc: "Apartamento de diseño colorido en el segundo piso con ascensor, en la calle que une la Basílica de San Juan de Letrán con el Coliseo: dormitorio doble, salón con sofá cama, cocina y baño.",
    f_guests8: "8 huéspedes", f_guests4: "4 huéspedes", f_bed2: "2 dormitorios", f_bed1: "1 dormitorio", f_bath2: "2 baños", f_bath1: "1 baño",
    f_terrace: "Terraza", f_lift: "Ascensor", f_wifi: "Wifi", f_kitchen: "Cocina completa", f_sofa: "Sofá cama", f_ac: "Self check-in",
    d_col: "Coliseo", d_sg: "San Juan de Letrán", d_metro: "Metro A San Giovanni", walk: "min a pie",
    ask: "Consultar disponibilidad", maps: "Ver en el mapa", reviews: "Reseñas de Google",
    services_title: "Lo que ofrecemos a nuestros huéspedes",
    s1_t: "Bienvenida a medida", s1_d: "Cada huésped es recibido con cuidado: regalo de bienvenida, guía digital en tres idiomas e indicaciones paso a paso para llegar.",
    s2_t: "Limpieza profesional", s2_d: "Limpieza y mantenimiento a cargo de un equipo de confianza, con ropa de cama y toallas siempre limpias.",
    s3_t: "Roma para vivirla", s3_d: "Consejos de restaurantes e itinerarios y, bajo petición, traslados privados desde y hacia los aeropuertos.",
    s4_t: "Asistencia continua", s4_d: "Respondemos por WhatsApp durante toda la estancia, para cualquier necesidad.",
    hood_title: "El barrio", hood_d: "San Giovanni es una zona residencial y auténtica, bien comunicada con la línea A del metro y a pocos minutos a pie del Coliseo. Trattorias romanas, bares de barrio y algunos de los lugares más antiguos y menos concurridos de la ciudad.",
    about_title: "Quiénes somos", about_d: "JFM nace de la experiencia de Fabio y Alessandro, de Salerno y crecidos en la hospitalidad de la Costa Amalfitana. Hoy llevan a Roma la misma forma de recibir: atención al detalle, disponibilidad y las ganas de que cada huésped se sienta en casa.",
    rev_title: "Lo que dicen de nosotros", rev_d: "Las reseñas de nuestros huéspedes están en Airbnb, Booking.com y Google.",
    form_title: "Consultar disponibilidad", form_sub: "Rellena los campos y envía la solicitud por WhatsApp o por email: respondemos lo antes posible con disponibilidad y precio.",
    fl_house: "Apartamento", fl_any: "Indiferente", fl_in: "Llegada", fl_out: "Salida", fl_guests: "Huéspedes", fl_name: "Nombre", fl_notes: "Notas (opcional)",
    send_wa: "Enviar por WhatsApp", send_mail: "Enviar por email", form_err: "Indica las fechas de llegada y salida.",
    msg_intro: "¡Hola! Quisiera saber la disponibilidad para:", msg_house: "Apartamento", msg_dates: "Fechas", msg_guests: "Huéspedes", msg_name: "Nombre", msg_notes: "Notas",
    owners_cta_t: "¿Tienes un apartamento en Roma?", owners_cta_d: "Nos ocupamos de todo, de los anuncios a los huéspedes. Descubre cómo trabajamos.", owners_cta: "Área propietarios",
    contact_title: "Contacto", c_phone: "Teléfono y WhatsApp", c_mail: "Email", c_addr: "Dirección",
    footer: "Gestión de alquileres turísticos en Roma",
    ow_kicker: "Para propietarios", ow_title: "Tu apartamento en Roma, gestionado como si fuera nuestro",
    ow_sub: "Gestión completa de alquileres de corta estancia para propietarios que quieren ingresos constantes, sin preocupaciones.",
    ow_s_title: "De qué nos ocupamos",
    ow1: "Gestión de reservas y visibilidad de los anuncios", ow2: "Recepción de huéspedes y check-in personalizado", ow3: "Limpieza y mantenimiento con un equipo de confianza", ow4: "Asistencia a los huéspedes 7 días a la semana", ow5: "Análisis de mercado y precios dinámicos",
    ow_m_title: "Dos fórmulas, a medida", ow_m1_t: "Gestión directa", ow_m1_d: "El apartamento sigue a tu nombre y nos ocupamos de cada detalle, a cambio de un porcentaje de los ingresos.",
    ow_m2_t: "Subarriendo", ow_m2_d: "Un alquiler acordado y garantizado, mientras la gestión de los huéspedes corre por nuestra cuenta.",
    ow_team: "Somos un equipo joven y apasionado por la hospitalidad romana y la gestión de calidad.",
    ow_cta_t: "Solicita una consulta gratuita", ow_cta_d: "Cuéntanos cómo es tu apartamento: te decimos cómo podemos sacarle el máximo partido.",
    ow_msg: "¡Hola! Tengo un apartamento en Roma y quisiera una consulta gratuita sobre la gestión.",
    back_home: "Volver al inicio"
  }
};
const HOUSES = { lat: "Domus Laterani", col: "Domus Colosseum" };

function getLang() {
  let l = null;
  try { l = localStorage.getItem("jfm-site-lang"); } catch (e) {}
  if (!l) { const n = (navigator.language || "it").slice(0, 2); l = T[n] ? n : (n === "it" ? "it" : "en"); }
  return T[l] ? l : "it";
}
let LANG = getLang();
function t(k) { return (T[LANG] && T[LANG][k]) || T.it[k] || k; }
function applyLang() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll("[data-tp]").forEach(el => { el.setAttribute("placeholder", t(el.dataset.tp)); });
  document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === LANG ? "true" : "false"));
  const wa = document.getElementById("owWa");
  if (wa) wa.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(t("ow_msg"));
  const om = document.getElementById("owMail");
  if (om) om.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(t("ow_cta_t")) + "&body=" + encodeURIComponent(t("ow_msg"));
}
document.addEventListener("click", e => {
  const b = e.target.closest(".langs button");
  if (b) { LANG = b.dataset.lang; try { localStorage.setItem("jfm-site-lang", LANG); } catch (_) {} applyLang(); }
  const a = e.target.closest("[data-ask]");
  if (a) { const s = document.getElementById("fHouse"); if (s) s.value = a.dataset.ask; }
  const g = e.target.closest(".gal-nav");
  if (g) { const tr = g.parentElement.querySelector(".gal"); tr.scrollBy({ left: (g.dataset.dir === "next" ? 1 : -1) * tr.clientWidth, behavior: "smooth" }); }
});

/* richiesta disponibilità */
function buildMsg() {
  const v = id => (document.getElementById(id) || {}).value || "";
  const fin = v("fIn"), fout = v("fOut");
  const err = document.getElementById("fErr");
  if (!fin || !fout) { err.textContent = t("form_err"); err.hidden = false; return null; }
  err.hidden = true;
  const fmt = d => { const [y, m, dd] = d.split("-"); return dd + "/" + m + "/" + y; };
  const h = v("fHouse");
  const lines = [t("msg_intro"),
    "🏠 " + t("msg_house") + ": " + (h ? HOUSES[h] : t("fl_any")),
    "📅 " + t("msg_dates") + ": " + fmt(fin) + " → " + fmt(fout),
    "👥 " + t("msg_guests") + ": " + v("fGuests")];
  if (v("fName").trim()) lines.push("🙋 " + t("msg_name") + ": " + v("fName").trim());
  if (v("fNotes").trim()) lines.push("📝 " + t("msg_notes") + ": " + v("fNotes").trim());
  return lines.join("\n");
}
function wireForm() {
  const f = document.getElementById("askForm"); if (!f) return;
  const today = new Date().toISOString().slice(0, 10);
  const fin = document.getElementById("fIn"), fout = document.getElementById("fOut");
  fin.min = today; fout.min = today;
  fin.addEventListener("change", () => { fout.min = fin.value || today; if (fout.value && fout.value <= fin.value) fout.value = ""; });
  document.getElementById("sendWa").addEventListener("click", () => { const m = buildMsg(); if (m) window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(m), "_blank", "noopener"); });
  document.getElementById("sendMail").addEventListener("click", () => { const m = buildMsg(); if (m) location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(t("form_title")) + "&body=" + encodeURIComponent(m); });
}
document.addEventListener("DOMContentLoaded", () => {
  applyLang(); wireForm();
  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
