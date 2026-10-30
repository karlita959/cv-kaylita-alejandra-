// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Efecto de máquina de escribir ----------
const roles = [
  "Ingeniera en Administración de Sistemas",
  "Desarrolladora de bases de datos",
  "Analista de datos",
  "Apasionada por la tecnología"
];
const typedEl = document.getElementById("typed");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      return setTimeout(typeLoop, 1800);
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

// ---------- Reveal al hacer scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".fill").forEach(animateBar);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Escalonar la aparición de los elementos dentro de un mismo grupo
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// ---------- Barras de habilidades ----------
function animateBar(fill) {
  const level = fill.dataset.level;
  fill.style.setProperty("--w", `${level}%`);
  // Pequeño retraso para que la transición se note
  requestAnimationFrame(() => fill.classList.add("animate"));
}

// Las barras que ya están dentro de un .reveal se animan al aparecer el bloque
document.querySelectorAll(".skill").forEach((skill) => {
  const fill = skill.querySelector(".fill");
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateBar(fill);
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(skill);
});

// ---------- Tema claro / oscuro ----------
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// ---------- Efecto de inclinación suave en tarjetas de educación ----------
document.querySelectorAll(".edu-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
