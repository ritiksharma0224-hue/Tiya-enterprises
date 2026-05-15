// Default config
const defaultConfig = {
  background_color: '#f8fafc',
  surface_color: '#ffffff',
  text_color: '#0f172a',
  primary_action_color: '#1a56db',
  secondary_action_color: '#f59e0b',
  font_family: 'Playfair Display',
  font_size: 16,
  company_name: 'Tiya Enterprises',
  tagline: 'Premium Smart Solar Solutions',
  hero_cta_primary: 'Get Connected',
  hero_cta_secondary: 'Go Solar',
  services_heading: 'Other Services',
  why_heading: 'Why Choose Tiya Enterprises?',
  contact_heading: 'Get In Touch',
  contact_subtext: 'Ready to upgrade your internet or switch to solar? We\'d love to hear from you.'
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  const bg = c.background_color;
  const surface = c.surface_color;
  const text = c.text_color;
  const primary = c.primary_action_color;
  const secondary = c.secondary_action_color;
  const fontFamily = c.font_family + ', Georgia, serif';
  const baseSize = c.font_size;

  // Background
  const wrapper = document.getElementById('app-wrapper');
  if (wrapper) wrapper.style.backgroundColor = bg;

  // Sections with bg color
  document.querySelectorAll('#why-us, #faq').forEach(el => el.style.backgroundColor = bg);

  // Surface sections
  document.querySelectorAll('#services, #testimonials, #contact').forEach(el => el.style.backgroundColor = surface);

  // Text color for headings
  document.querySelectorAll('.font-heading').forEach(el => {
    if (!el.closest('[style*="linear-gradient"]') && !el.classList.contains('text-white')) {
      el.style.color = text;
    }
  });

  // Nav brand
  const navBrand = document.getElementById('nav-brand');
  if (navBrand) { navBrand.style.color = text; navBrand.textContent = c.company_name; }

  // Hero
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) { heroTitle.style.color = text; heroTitle.textContent = c.company_name; heroTitle.style.fontFamily = fontFamily; heroTitle.style.fontSize = `${baseSize * 3}px`; }

  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) { heroTagline.textContent = c.tagline; heroTagline.style.fontSize = `${baseSize * 1.25}px`; }

  const heroCta1 = document.getElementById('hero-cta-1');
  if (heroCta1) { heroCta1.textContent = '⚡ ' + c.hero_cta_primary; heroCta1.style.background = `linear-gradient(135deg, ${primary}, ${primary}dd)`; }

  const heroCta2 = document.getElementById('hero-cta-2');
  if (heroCta2) { heroCta2.textContent = '☀️ ' + c.hero_cta_secondary; heroCta2.style.background = `linear-gradient(135deg, ${secondary}, ${secondary}dd)`; }

  // Service heading
  const servH = document.getElementById('services-heading');
  if (servH) { servH.textContent = c.services_heading; servH.style.color = text; servH.style.fontFamily = fontFamily; servH.style.fontSize = `${baseSize * 2.25}px`; }

  // Why heading
  const whyH = document.getElementById('why-heading');
  if (whyH) { whyH.textContent = c.why_heading; whyH.style.color = text; whyH.style.fontFamily = fontFamily; whyH.style.fontSize = `${baseSize * 2.25}px`; }

  // Contact
  const contH = document.getElementById('contact-heading');
  if (contH) { contH.textContent = c.contact_heading; contH.style.color = text; contH.style.fontFamily = fontFamily; contH.style.fontSize = `${baseSize * 2.25}px`; }

  const contS = document.getElementById('contact-subtext');
  if (contS) { contS.textContent = c.contact_subtext; }

  // Body font size
  document.querySelectorAll('p:not(.font-heading)').forEach(el => {
    if (!el.style.fontSize) el.style.fontSize = `${baseSize * 0.875}px`;
  });

  // Font heading family
  document.querySelectorAll('.font-heading').forEach(el => {
    el.style.fontFamily = fontFamily;
  });

  // Submit button primary
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) submitBtn.style.background = `linear-gradient(135deg, ${primary}, ${primary}dd)`;

  // Surface cards
  document.querySelectorAll('.tilt-card').forEach(el => {
    if (el.style.background && !el.style.background.includes('linear-gradient')) {
      el.style.backgroundColor = surface;
    }
  });
}

// Element SDK init
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      applyConfig(config);
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
        { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
        { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['company_name', config.company_name || defaultConfig.company_name],
      ['tagline', config.tagline || defaultConfig.tagline],
      ['hero_cta_primary', config.hero_cta_primary || defaultConfig.hero_cta_primary],
      ['hero_cta_secondary', config.hero_cta_secondary || defaultConfig.hero_cta_secondary],
      ['services_heading', config.services_heading || defaultConfig.services_heading],
      ['why_heading', config.why_heading || defaultConfig.why_heading],
      ['contact_heading', config.contact_heading || defaultConfig.contact_heading],
      ['contact_subtext', config.contact_subtext || defaultConfig.contact_subtext]
    ])
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
if(mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
}

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// FAQ toggle
window.toggleFaq = function(btn) {
  const answer = btn.nextElementSibling;
  const chevron = btn.querySelector('.faq-chevron');
  const isOpen = !answer.classList.contains('hidden');

  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
  document.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    answer.classList.remove('hidden');
    chevron.style.transform = 'rotate(180deg)';
  }
}

// Contact form
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const service = document.getElementById('contact-service').value;
  const msg = document.getElementById('contact-msg').value;

  // Show success
  const formSuccess = document.getElementById('form-success');
  if(formSuccess) formSuccess.classList.remove('hidden');
  
  const contactForm = document.getElementById('contact-form');
  if(contactForm) contactForm.reset();

  setTimeout(() => {
    if(formSuccess) formSuccess.classList.add('hidden');
  }, 5000);
}

// Scroll reveal with IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('reveal-visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));

// Init lucide icons
if (window.lucide) {
  lucide.createIcons();
}

// Chatbot Logic
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const chatCloseBtn = document.getElementById('chat-close-btn');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatTyping = document.getElementById('chat-typing');

if (chatInput) {
  // Custom focus ring logic for chat input
  chatInput.addEventListener('focus', () => chatInput.style.borderColor = '#1a56db');
  chatInput.addEventListener('blur', () => chatInput.style.borderColor = '#e2e8f0');
}

// Toggle Chat
window.toggleChat = function() {
  if(!chatWindow) return;
  const isClosed = chatWindow.classList.contains('opacity-0');
  if (isClosed) {
    chatWindow.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    chatWindow.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
    chatToggleBtn.style.transform = 'scale(0)';
    chatInput.focus();
  } else {
    chatWindow.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
    chatWindow.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    chatToggleBtn.style.transform = 'scale(1)';
  }
}

if(chatToggleBtn) chatToggleBtn.addEventListener('click', toggleChat);
if(chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);

// Bot Knowledge Base
const botBrain = [
  {
    keywords: ["hi", "hello", "hey", "greetings", "good morning"],
    response: "Hello! I'm here to answer any questions you have about Tiya Enterprises' installations. What's on your mind?"
  },
  {
    keywords: ["solar", "panel", "sun", "rooftop"],
    response: "We offer premium smart solar solutions tailored for both residential and commercial properties. Our high-efficiency panels can help you drastically cut down your electricity bills!"
  },
  {
    keywords: ["broadband", "internet", "wifi", "network", "speed", "plan", "connection"],
    response: "Our broadband service offers blazing-fast, reliable internet. We have unlimited data plans ranging from 50 Mbps up to 300 Mbps with excellent uptime."
  },
  {
    keywords: ["save", "saving", "bill", "reduce", "money", "price", "cost", "much"],
    response: "With our solar setups, most customers see their electricity bills drop by 70% to 90%! The exact savings and cost will depend on your roof size and power consumption. We offer a free custom quote."
  },
  {
    keywords: ["install", "maintenance", "service", "support", "time"],
    response: "We provide complete end-to-end installation by certified professionals and offer 24/7 support. We handle all the heavy lifting!"
  },
  {
    keywords: ["contact", "call", "whatsapp", "number", "reach", "quote"],
    response: "You can reach us anytime at +91 7737147775. You can also click the green WhatsApp button to talk to a human right away and get a free customized quote!"
  },
  {
    keywords: ["where", "area", "location", "address", "city", "rajasthan"],
    response: "We proudly serve multiple cities and towns across Rajasthan, India. Drop us a WhatsApp message to confirm we cover your area."
  },
  {
    keywords: ["warranty", "guarantee", "last", "lifespan", "life", "durable"],
    response: "Our premium solar panels come with an industry-leading 25-year performance warranty, ensuring your investment is secure for decades."
  },
  {
    keywords: ["pay", "payment", "bill", "invoice", "upi", "card", "online"],
    response: "We accept all major payment methods including UPI, Net Banking, and Credit/Debit cards. You can pay online securely or visit our local office."
  },
  {
    keywords: ["down", "not working", "slow", "issue", "problem", "repair", "fix"],
    response: "If you're facing internet issues, please try restarting your router. If the problem persists, reach out to our 24/7 support line at +91 7737147775 and we'll fix it right away!"
  },
  {
    keywords: ["hours", "timing", "open", "close", "time"],
    response: "Our technical support team is available 24/7! For office visits, our standard business hours are Monday to Saturday, 9 AM to 6 PM."
  },
  {
    keywords: ["job", "career", "hiring", "vacancy", "work"],
    response: "We are always looking for talented individuals to join our growing team. Please send your resume to our WhatsApp number!"
  }
];

function getBotResponse(message) {
  const text = message.toLowerCase();
  
  for (const intent of botBrain) {
    if (intent.keywords.some(word => text.includes(word))) {
      return intent.response;
    }
  }
  
  return "I'm still learning, but I'd love to help! Could you please try asking differently, or contact us on WhatsApp at +91 7737147775?";
}

function scrollToBottom() {
  if(chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideQuickReplies() {
  document.querySelectorAll('.chat-quick-reply').forEach(btn => btn.style.display = 'none');
}

window.handleUserMessage = function(overrideMsg = null) {
  const msgText = overrideMsg || (chatInput ? chatInput.value.trim() : '');
  if (!msgText) return;
  
  hideQuickReplies();
  if(chatInput) chatInput.value = '';
  
  // User Message
  const userMsgHTML = `
    <div class="flex justify-end gap-3 animate-fade-in-up" style="animation-duration: 0.3s;">
      <div class="chat-bubble-user px-4 py-3 text-sm leading-relaxed rounded-2xl max-w-[85%] shadow-sm">
        ${msgText}
      </div>
    </div>
  `;
  if(chatMessages) chatMessages.insertAdjacentHTML('beforeend', userMsgHTML);
  scrollToBottom();

  // Show Typing
  if(chatTyping) chatTyping.classList.remove('hidden');
  scrollToBottom();

  // Bot Response
  setTimeout(() => {
    if(chatTyping) chatTyping.classList.add('hidden');
    
    const responseText = getBotResponse(msgText);
    const botMsgHTML = `
      <div class="flex gap-3 animate-fade-in-up" style="animation-duration: 0.3s;">
        <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style="background: rgba(26,86,219,0.1);">
          <i data-lucide="bot" style="color:#1a56db;width:16px;height:16px;"></i>
        </div>
        <div class="chat-bubble-bot px-4 py-3 text-sm leading-relaxed rounded-2xl max-w-[85%]">
          ${responseText}
        </div>
      </div>
    `;
    if(chatMessages) chatMessages.insertAdjacentHTML('beforeend', botMsgHTML);
    if (window.lucide) lucide.createIcons();
    scrollToBottom();
  }, 800 + Math.random() * 600);
};
