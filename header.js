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
    : "index.html";

const links = [
  ["index.html", "Profit Calculator"],
  ["roas-calculator.html", "ROAS Calculator"],
  ["break-even-roas.html", "Break-Even ROAS"],
  ["product-margin-calculator.html", "Product Margin"],
  
];

const headerStyles = `
<style>
#site-header *{box-sizing:border-box}
#site-header header{background:#fff;border-bottom:1px solid #e5eaf1;position:sticky;top:0;z-index:5}
#site-header .wrap{max-width:1100px;margin:0 auto;padding:0 20px}
#site-header .nav{height:68px;display:flex;align-items:center;justify-content:space-between}
#site-header .logo{font-size:23px;font-weight:800;color:#155eef;text-decoration:none}
#site-header .logo span{color:#172033}
#site-header nav{display:flex;align-items:center;gap:22px}
#site-header nav a{font-size:14px;font-weight:600;color:#172033;text-decoration:none}
#site-header nav a:hover{color:#2563eb}
#site-header nav a.active{color:#2563eb}
#site-header .btn{background:#2563eb;color:#fff;padding:12px 16px;border-radius:8px}
#site-header .btn:hover{color:#fff;background:#1d4ed8}
@media(max-width:700px){
  #site-header nav a:nth-child(5),
  #site-header nav a:nth-child(6),
  #site-header nav a:nth-child(7){display:none}
  #site-header nav{gap:10px}
  #site-header .btn{padding:10px 12px}
}
</style>`;

const nav = links.map(([href,label]) => {
  const file = href.split("#")[0];
  const active = file === currentPage ? ' class="active"' : "";
  return `<a href="${href}"${active}>${label}</a>`;
}).join("");

document.getElementById("site-header").innerHTML =
  headerStyles +
  `<header><div class="wrap nav"><a class="logo" href="index.html">Ecom<span>Tools</span></a><nav>${nav}</nav></div></header>`;
