const currentPath = window.location.pathname.replace(/\/$/, "");

const currentPage =
  currentPath === "" || currentPath === "/"
    ? "index.html"
    : currentPath.endsWith("roas-calculator")
    ? "roas-calculator.html"
    : currentPath.endsWith("break-even-roas")
    ? "break-even-roas.html"
    : currentPath.endsWith("product-margin-calculator")
    ? "product-margin-calculator.html"
    : currentPath.endsWith("product-pricing-calculator")
    ? "product-pricing-calculator.html"
    : "index.html";

const links = [
  ["index.html", "Profit Calculator"],
  ["roas-calculator.html", "ROAS Calculator"],
  ["break-even-roas.html", "Break-Even ROAS"],
  ["product-margin-calculator.html", "Product Margin"],
  ["product-pricing-calculator.html", "Product Pricing"]
];

const headerStyles = `
<style>
#site-header * {
  box-sizing: border-box;
}

#site-header header {
  background: #fff;
  border-bottom: 1px solid #e5eaf1;
  position: sticky;
  top: 0;
  z-index: 1000;
}

#site-header .wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

#site-header .nav {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#site-header .logo {
  font-size: 23px;
  font-weight: 800;
  color: #155eef;
  text-decoration: none;
  white-space: nowrap;
}

#site-header .logo span {
  color: #172033;
}

#site-header nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

#site-header nav a {
  font-size: 14px;
  font-weight: 600;
  color: #172033;
  text-decoration: none;
  white-space: nowrap;
}

#site-header nav a:hover {
  color: #2563eb;
}

#site-header nav a.active {
  color: #2563eb;
}

/* Mobile Menu Button */
#site-header .menu-btn {
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 8px;
  font-size: 28px;
  line-height: 1;
  color: #172033;
}

/* Mobile */
@media (max-width: 700px) {

  #site-header .wrap {
    padding: 0 16px;
  }

  #site-header .nav {
    min-height: 62px;
    position: relative;
  }

  #site-header .logo {
    font-size: 22px;
  }

  #site-header .menu-btn {
    display: block;
  }

  #site-header nav {
    display: none;
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #e5eaf1;
    border-bottom: 1px solid #e5eaf1;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 16px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }

  #site-header nav.open {
    display: flex;
  }

  #site-header nav a {
    display: block;
    padding: 14px 8px;
    font-size: 15px;
    border-bottom: 1px solid #f0f2f5;
  }

  #site-header nav a:last-child {
    border-bottom: none;
  }
}
</style>`;

const nav = links.map(([href, label]) => {
  const file = href.split("#")[0];
  const active = file === currentPage ? ' class="active"' : "";
  return `<a href="${href}"${active}>${label}</a>`;
}).join("");

document.getElementById("site-header").innerHTML =
  headerStyles +
  `
  <header>
    <div class="wrap nav">

      <a class="logo" href="index.html">
        Ecom<span>Tools</span>
      </a>

      <button class="menu-btn" id="mobile-menu-btn" aria-label="Open menu">
        ☰
      </button>

      <nav id="main-nav">
        ${nav}
      </nav>

    </div>
  </header>
  `;

/* Mobile menu toggle */
const menuBtn = document.getElementById("mobile-menu-btn");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  if (mainNav.classList.contains("open")) {
    menuBtn.innerHTML = "✕";
    menuBtn.setAttribute("aria-label", "Close menu");
  } else {
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-label", "Open menu");
  }
});

/* Close menu after clicking a link */
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});