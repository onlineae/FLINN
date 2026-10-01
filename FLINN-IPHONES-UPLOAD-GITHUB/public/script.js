/* ========================================================
   FLINN iPHONES - CONFIGURAÇÃO E CATÁLOGO OFICIAL
   ======================================================== */

const STORE_CONFIG = {
  storeName: "FLINN iPhones",
  address: "Av. Washington Luiz, 2102 - Jardim Paulista, Pres. Prudente - SP, 19023-450",
  cityState: "Presidente Prudente - SP",
  whatsappNumber: "5516997655257", // WhatsApp: 55 16 99765-5257
  instagramUrl: "https://www.instagram.com/flinn.iphones?stkn=czJxOTVieGU5dXRy&utm_source=qr",
  pixDiscountPercent: 5
};

// 📱 PRODUTOS COM FOTOS OFICIAIS RESPECTIVAS E NOMES PRECISOS
const PRODUCTS = [
  {
    id: "ip-18-promax",
    name: "iPhone 18 Pro Max",
    category: "18-series",
    badge: "🔥 Lançamento Oficial",
    badgeColor: "bg-gradient-to-r from-blue-600 via-brand-blue to-cyan-500 text-white shadow-neon-sm",
    specs: "Chip A19 Pro • Tela 6.9\" ProMotion 120Hz • Módulo Visor Câmera Tripla 48MP • Titânio Aeroespacial",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 9255, formattedPrice: "R$ 9.255,00", installment: "12x de R$ 771,25" },
      { capacity: "512GB", price: 9955, formattedPrice: "R$ 9.955,00", installment: "12x de R$ 829,58" }
    ],
    colors: [
      { name: "Bordô Metálico", hex: "#5c1d2e", image: "/assets/ip18_burgundy.png" },
      { name: "Azul Glacial", hex: "#8aa8be", image: "/assets/ip18_glacier.png" },
      { name: "Prata Titânio", hex: "#e2e4e6", image: "/assets/ip18_silver.png" },
      { name: "Preto Titânio", hex: "#252528", image: "/assets/ip18_black.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-18-pro",
    name: "iPhone 18 Pro",
    category: "18-series",
    badge: "⚡ Novo Modelo 6.3\"",
    badgeColor: "bg-brand-blue text-white",
    specs: "Design Compacto 6.3\" • Chip A19 Pro • Câmera Tripla Pro 48MP • Zoom Óptico 5x",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 9055, formattedPrice: "R$ 9.055,00", installment: "12x de R$ 754,58" },
      { capacity: "512GB", price: 9755, formattedPrice: "R$ 9.755,00", installment: "12x de R$ 812,91" }
    ],
    colors: [
      { name: "Bordô Metálico", hex: "#5c1d2e", image: "/assets/ip18_burgundy.png" },
      { name: "Azul Glacial", hex: "#8aa8be", image: "/assets/ip18_glacier.png" },
      { name: "Prata Titânio", hex: "#e2e4e6", image: "/assets/ip18_silver.png" },
      { name: "Preto Titânio", hex: "#252528", image: "/assets/ip18_black.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-17-promax",
    name: "iPhone 17 Pro Max",
    category: "17-series",
    badge: "⭐ Alta Performance",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    specs: "Super Retina XDR 6.9\" • Chip A18 Pro • Dynamic Island • Gravação 4K ProRes • Bateria Épica",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 6900, formattedPrice: "R$ 6.900,00", installment: "12x de R$ 575,00" },
      { capacity: "512GB", price: 7400, formattedPrice: "R$ 7.400,00", installment: "12x de R$ 616,66" }
    ],
    colors: [
      { name: "Titânio Deserto", hex: "#c5a890", image: "/assets/ip17pro_desert.png" },
      { name: "Titânio Natural", hex: "#9b9994", image: "/assets/ip17pro_natural.png" },
      { name: "Preto Titânio", hex: "#2b2b2d", image: "/assets/ip17pro_black.png" },
      { name: "Branco Titânio", hex: "#f0ede8", image: "/assets/ip17pro_white.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-17-pro",
    name: "iPhone 17 Pro",
    category: "17-series",
    badge: "🏆 Flagship Pro",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    specs: "Tela 6.3\" ProMotion 120Hz • Câmera Tripla 48MP • Corpo em Titânio • Botão de Ação Tátil",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 6000, formattedPrice: "R$ 6.000,00", installment: "12x de R$ 500,00" },
      { capacity: "512GB", price: 6500, formattedPrice: "R$ 6.500,00", installment: "12x de R$ 541,66" }
    ],
    colors: [
      { name: "Titânio Deserto", hex: "#c5a890", image: "/assets/ip17pro_desert.png" },
      { name: "Titânio Natural", hex: "#9b9994", image: "/assets/ip17pro_natural.png" },
      { name: "Preto Titânio", hex: "#2b2b2d", image: "/assets/ip17pro_black.png" },
      { name: "Branco Titânio", hex: "#f0ede8", image: "/assets/ip17pro_white.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-17",
    name: "iPhone 17",
    category: "17-series",
    badge: "✨ Novo & Lacrado",
    badgeColor: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    specs: "Câmera Fusion 48MP • Dynamic Island • Novo Botão Controle de Câmera • Chip A18 Bionic",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 4500, formattedPrice: "R$ 4.500,00", installment: "12x de R$ 375,00" }
    ],
    colors: [
      { name: "Azul Ultramarine", hex: "#4b5d88", image: "/assets/ip17_ultramarine.png" },
      { name: "Verde Teal", hex: "#739893", image: "/assets/ip17_teal.png" },
      { name: "Rosa Pastel", hex: "#e5b1b8", image: "/assets/ip17_pink.png" },
      { name: "Branco Estelar", hex: "#f1f2f4", image: "/assets/ip17_white.png" },
      { name: "Preto Profundo", hex: "#1e1e20", image: "/assets/ip17_black.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-17e",
    name: "iPhone 17E",
    category: "17-series",
    badge: "💡 Melhor Custo-Benefício",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    specs: "256GB Nativo • Tela OLED vibrante • Chip de Alta Velocidade • 5G Ultra • Garantia Oficial",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "256GB", price: 3200, formattedPrice: "R$ 3.200,00", installment: "12x de R$ 266,66" }
    ],
    colors: [
      { name: "Branco Estelar", hex: "#f1f2f4", image: "/assets/ip17e_white.png" },
      { name: "Preto Espacial", hex: "#1e1e20", image: "/assets/ip17e_black.png" },
      { name: "Rosa Pálido", hex: "#f0c8cb", image: "/assets/ip17e_pink.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "ip-15",
    name: "iPhone 15",
    category: "entry",
    badge: "💎 O Mais Procurado",
    badgeColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    specs: "Dynamic Island • Câmera 48MP • Conector USB-C • Traseira em Vidro Fosco • Chip A16 Bionic",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 12,
    storages: [
      { capacity: "128GB", price: 3000, formattedPrice: "R$ 3.000,00", installment: "12x de R$ 250,00" }
    ],
    colors: [
      { name: "Verde Pastel", hex: "#d4e4d6", image: "/assets/ip15_green.png" },
      { name: "Preto Clássico", hex: "#1c1c1e", image: "/assets/ip15_black.png" },
      { name: "Azul Claro", hex: "#c8d7e0", image: "/assets/ip15_blue.png" },
      { name: "Rosa Pastel", hex: "#f0c8cb", image: "/assets/ip15_pink.png" },
      { name: "Amarelo Solar", hex: "#f5e8b7", image: "/assets/ip15_yellow.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "watch-ultra-3",
    name: "Apple Watch Ultra 3",
    category: "accessories",
    badge: "⌚ Titânio 49mm",
    badgeColor: "bg-orange-500/20 text-brand-orange border border-orange-500/30",
    specs: "Caixa de Titânio • GPS Dupla Frequência • Até 72h Bateria • Resistente à água 100m",
    warranty: "1 Ano Garantia Apple",
    maxInstallments: 6,
    storages: [
      { capacity: "49mm GPS + Cell", price: 3900, formattedPrice: "R$ 3.900,00", installment: "6x de R$ 650,00" }
    ],
    colors: [
      { name: "Preto Oceano (Titânio)", hex: "#1e293b", image: "/assets/clean_watch_crop.png" },
      { name: "Pulseira Laranja Titânio", hex: "#ff6200", image: "/assets/watch_orange.png" },
      { name: "Pulseira Azul Oceano", hex: "#2563eb", image: "/assets/watch_blue.png" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "jbl-boombox-4",
    name: "JBL Boombox 4 Camuflada",
    category: "accessories",
    badge: "🔊 Áudio Monstruoso",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    specs: "À prova d'água IP67 • Bateria de até 34h • Auracast • Graves pesados para qualquer ambiente",
    warranty: "Garantia Oficial",
    maxInstallments: 12,
    storages: [
      { capacity: "Original Lacrada", price: 1998.90, formattedPrice: "R$ 1.998,90", installment: "12x de R$ 166,57" }
    ],
    colors: [
      { name: "Camuflado Especial", hex: "#4e5340", image: "/assets/jbl-boombox4.webp" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  },
  {
    id: "acessorios-apple",
    name: "AirPods Pro 2 & Acessórios",
    category: "accessories",
    badge: "⚡ 100% Originais Apple",
    badgeColor: "bg-white/20 text-white border border-white/30",
    specs: "Cancelamento Ativo de Ruído • Áudio Espacial • Carregadores 20W • Cabos USB-C Trançados",
    warranty: "Garantia Apple",
    maxInstallments: 6,
    storages: [
      { capacity: "Novos & Lacrados", price: null, formattedPrice: "Consulte Valores", installment: "Pronta Entrega" }
    ],
    colors: [
      { name: "Fones AirPods Pro 2", hex: "#ffffff", image: "/assets/airpods_earbuds.png" },
      { name: "Estojo MagSafe Dark", hex: "#111827", image: "/assets/airpods_case_dark.jpg" },
      { name: "Conexão Instantânea", hex: "#2563eb", image: "/assets/airpods_popup.jpg" }
    ],
    selectedStorageIndex: 0,
    selectedColorIndex: 0
  }
];

// 🚀 INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('all');
  initInstagramLinks();
  initMobileMenu();
  lucide.createIcons();
});

// 📸 RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filteredProducts.map(product => {
    const activeColor = product.colors[product.selectedColorIndex];
    const activeStorage = product.storages[product.selectedStorageIndex];
    const waLink = generateWhatsAppLink(product, activeStorage, activeColor);

    return `
      <div class="product-card bg-brand-card border border-brand-border/80 rounded-3xl p-4 sm:p-5 flex flex-col justify-between h-full group hover:border-brand-blue/60 transition-all duration-300">
        
        <div class="space-y-3">
          <!-- Top Badges -->
          <div class="flex items-center justify-between gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold ${product.badgeColor}">
              ${product.badge}
            </span>
            <span class="text-[10px] text-slate-400 font-mono font-medium">
              ${product.warranty}
            </span>
          </div>

          <!-- Product Image Box (Foto Oficial Respectiva) -->
          <div 
            class="w-full h-48 sm:h-52 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center p-3 cursor-pointer overflow-hidden group-hover:border-brand-blue/30 transition-all"
            onclick="openLightbox('${activeColor.image}', '${product.name} - ${activeColor.name}')"
          >
            <img 
              id="img-${product.id}" 
              src="${activeColor.image}" 
              alt="${product.name}" 
              class="max-h-40 sm:max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            >
          </div>

          <!-- Title & Specs -->
          <div>
            <h3 class="font-extrabold text-base sm:text-lg text-white group-hover:text-brand-blue transition-colors">
              ${product.name}
            </h3>
            <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              ${product.specs}
            </p>
          </div>

          <!-- Storage Selectors -->
          <div>
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-bold">Armazenamento:</span>
            <div class="flex flex-wrap gap-1.5">
              ${product.storages.map((storage, idx) => `
                <button 
                  onclick="selectStorage('${product.id}', ${idx})" 
                  class="storage-btn text-xs px-2.5 py-1 rounded-lg border ${idx === product.selectedStorageIndex ? 'active' : 'bg-black/40 border-brand-border text-slate-300 hover:border-slate-500'}"
                >
                  ${storage.capacity}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Color Selectors -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Cor:</span>
              <span id="color-name-${product.id}" class="text-[11px] text-brand-blue font-semibold truncate max-w-[140px]">
                ${activeColor.name}
              </span>
            </div>
            <div class="flex items-center gap-2">
              ${product.colors.map((color, idx) => `
                <button 
                  onclick="selectColor('${product.id}', ${idx})" 
                  class="color-dot w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/20 transition-all ${idx === product.selectedColorIndex ? 'active' : 'hover:scale-110'}"
                  style="background-color: ${color.hex};"
                  title="${color.name}"
                ></button>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Pricing & WhatsApp Action Button (Nunca Encavala) -->
        <div class="mt-4 pt-3 border-t border-brand-border/70 space-y-3">
          
          <div class="flex items-end justify-between gap-1">
            <div>
              <span class="text-[9px] text-slate-400 block uppercase font-mono">Valor à vista / cartão</span>
              <span id="price-${product.id}" class="text-xl sm:text-2xl font-black text-white font-mono tracking-tight leading-none">
                ${activeStorage.formattedPrice}
              </span>
            </div>
            <div class="text-right shrink-0">
              <span id="installment-${product.id}" class="text-xs text-brand-blue font-bold block whitespace-nowrap">
                ${activeStorage.installment}
              </span>
              <span class="text-[10px] text-emerald-400 font-semibold block">Sem juros</span>
            </div>
          </div>

          <!-- Direct WhatsApp Button -->
          <a 
            id="wa-${product.id}"
            href="${waLink}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full py-2.5 sm:py-3 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-brand-blue to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-neon-sm hover:shadow-neon-blue transition-all duration-300 active:scale-95"
          >
            <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
            <span>Comprar no WhatsApp</span>
          </a>

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 🎯 SELETOR DE ARMAZENAMENTO DINÂMICO
function selectStorage(productId, storageIndex) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  product.selectedStorageIndex = storageIndex;
  const activeStorage = product.storages[storageIndex];
  const activeColor = product.colors[product.selectedColorIndex];

  const priceEl = document.getElementById(`price-${productId}`);
  const installmentEl = document.getElementById(`installment-${productId}`);
  const waBtn = document.getElementById(`wa-${productId}`);

  if (priceEl) priceEl.innerText = activeStorage.formattedPrice;
  if (installmentEl) installmentEl.innerText = activeStorage.installment;

  if (waBtn) {
    waBtn.href = generateWhatsAppLink(product, activeStorage, activeColor);
  }

  const card = priceEl ? priceEl.closest('.product-card') : null;
  if (card) {
    const buttons = card.querySelectorAll('.storage-btn');
    buttons.forEach((btn, idx) => {
      if (idx === storageIndex) {
        btn.classList.add('active');
        btn.classList.remove('bg-black/40', 'border-brand-border', 'text-slate-300');
      } else {
        btn.classList.remove('active');
        btn.classList.add('bg-black/40', 'border-brand-border', 'text-slate-300');
      }
    });
  }
}

// 🎨 SELETOR DE COR DINÂMICO
function selectColor(productId, colorIndex) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  product.selectedColorIndex = colorIndex;
  const activeColor = product.colors[colorIndex];
  const activeStorage = product.storages[product.selectedStorageIndex];

  const imgEl = document.getElementById(`img-${productId}`);
  const colorNameEl = document.getElementById(`color-name-${productId}`);
  const waBtn = document.getElementById(`wa-${productId}`);

  if (imgEl) {
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = activeColor.image;
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (colorNameEl) {
    colorNameEl.innerText = activeColor.name;
  }

  if (waBtn) {
    waBtn.href = generateWhatsAppLink(product, activeStorage, activeColor);
  }

  const card = imgEl ? imgEl.closest('.product-card') : null;
  if (card) {
    const dots = card.querySelectorAll('.color-dot');
    dots.forEach((dot, idx) => {
      if (idx === colorIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}

// 💬 GERADOR DO LINK DO WHATSAPP COM MENSAGEM PRONTA
function generateWhatsAppLink(product, storage, color) {
  const phone = STORE_CONFIG.whatsappNumber;
  let text = "";

  if (storage.price) {
    text = `Olá, FLINN iPhones! Tenho interesse no ${product.name} ${storage.capacity} na cor ${color.name} por ${storage.formattedPrice} (em até ${storage.installment} sem juros) que vi no site. Gostaria de saber como funciona para retirar em mãos na loja de Pres. Prudente ou envio com seguro!`;
  } else {
    text = `Olá, FLINN iPhones! Gostaria de consultar valores e disponibilidade para ${product.name} que vi no site.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// 🔍 FILTRO DO CATÁLOGO POR CATEGORIA
function filterCatalog(category, buttonEl) {
  document.querySelectorAll('.catalog-filter-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-brand-blue', 'text-white', 'shadow-neon-sm');
    btn.classList.add('text-slate-400');
  });

  if (buttonEl) {
    buttonEl.classList.add('active', 'bg-brand-blue', 'text-white', 'shadow-neon-sm');
    buttonEl.classList.remove('text-slate-400');
  }

  renderCatalog(category);
}

// 🔄 SIMULADOR DE USADO NA TROCA (WHATSAPP)
function sendTradeInWhatsApp() {
  const userPhone = document.getElementById('trade-user-phone').value;
  const targetPhone = document.getElementById('trade-target-phone').value;
  const notes = document.getElementById('trade-notes').value.trim();

  let message = `Olá, FLINN iPhones! Gostaria de simular a troca do meu aparelho usado na loja física (Av. Washington Luiz, 2102 - Jardim Paulista, Pres. Prudente - SP):\n\n📱 Meu aparelho atual: ${userPhone}\n🎯 Modelo que quero pegar: ${targetPhone}`;
  if (notes) {
    message += `\n📝 Detalhes e saúde da bateria: ${notes}`;
  }
  message += `\n\nQual a estimativa de avaliação para abater no valor?`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// 🌟 HERO SPOTLIGHT PREVIEW INTERATIVO
function changeHeroPreview(imageSrc, colorName, price) {
  const imgEl = document.getElementById('hero-spotlight-img');
  const colorTextEl = document.getElementById('hero-spotlight-color-text');
  const priceEl = document.getElementById('hero-spotlight-price');
  const waBtn = document.getElementById('hero-spotlight-wa');

  if (imgEl) {
    imgEl.style.opacity = '0.4';
    setTimeout(() => {
      imgEl.src = imageSrc;
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (colorTextEl) colorTextEl.innerText = `Cor: ${colorName}`;
  if (priceEl) priceEl.innerText = price;

  if (waBtn) {
    const text = `Olá, FLINN iPhones! Tenho interesse no iPhone 18 Pro Max ${colorName} por ${price} visto no destaque do site.`;
    waBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
}

// 📸 LIGHTBOX MODAL PARA EXPANDIR FOTOS
function openLightbox(imageSrc, caption = '') {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  if (modal && img) {
    img.src = imageSrc;
    if (cap) cap.innerText = caption;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

document.getElementById('lightbox-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox-modal') {
    closeLightbox();
  }
});

// ❓ ACCORDION DO FAQ
function toggleFaq(el) {
  const content = el.querySelector('.faq-content');
  const chevron = el.querySelector('.faq-chevron');

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    chevron.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    chevron.style.transform = 'rotate(0deg)';
  }
}

// 📱 MENU MOBILE TOGGLE
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// 🔗 CONFIGURAÇÃO DO BOTÃO DE INSTAGRAM
function initInstagramLinks() {
  const instagramLinks = [
    document.getElementById('instagram-link'),
    document.getElementById('mobile-instagram-link'),
    document.getElementById('footer-instagram-link')
  ];

  instagramLinks.forEach(link => {
    if (link && STORE_CONFIG.instagramUrl) {
      link.href = STORE_CONFIG.instagramUrl;
    }
  });
}
