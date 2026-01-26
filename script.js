
    const defaultConfig = {
      full_name: 'Harshvardhan Kamble',
      job_title: 'Aspiring Front-End Developer',
      professional_summary: 'B.Tech Computer Science student specializing in React.js. Passionate about bridging the gap between creative design and functional code.',
      phone_number: '+91 9359494292',
      email_address: 'Harshukamble2607@gmail.com',
      location_text: 'Bhawani Peth, Solapur',
      primary_color: '#00d4ff',
      background_color: '#0a0a0f',
      card_color: '#12121a',
      text_color: '#ffffff',
      secondary_text_color: '#a0a0b0',
      font_family: 'Outfit',
      font_size: 16
    };

    async function onConfigChange(config) {
      const name = config.full_name || defaultConfig.full_name;
      const title = config.job_title || defaultConfig.job_title;
      const summary = config.professional_summary || defaultConfig.professional_summary;
      const phone = config.phone_number || defaultConfig.phone_number;
      const email = config.email_address || defaultConfig.email_address;
      const location = config.location_text || defaultConfig.location_text;
      
      const primaryColor = config.primary_color || defaultConfig.primary_color;
      const bgColor = config.background_color || defaultConfig.background_color;
      const cardColor = config.card_color || defaultConfig.card_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const secondaryTextColor = config.secondary_text_color || defaultConfig.secondary_text_color;
      const fontFamily = config.font_family || defaultConfig.font_family;
      const fontSize = config.font_size || defaultConfig.font_size;

      document.documentElement.style.setProperty('--neon-blue', primaryColor);
      document.documentElement.style.setProperty('--dark-bg', bgColor);
      document.documentElement.style.setProperty('--card-bg', cardColor);
      document.documentElement.style.setProperty('--text-primary', textColor);
      document.documentElement.style.setProperty('--text-secondary', secondaryTextColor);

      document.body.style.fontFamily = fontFamily + ', Outfit, sans-serif';
      document.body.style.fontSize = fontSize + 'px';

      const heroName = document.getElementById('hero-name');
      if (heroName) {
        const nameParts = name.split(' ');
        heroName.innerHTML = nameParts.length > 1 
          ? nameParts[0] + '<br><span class="neon-text">' + nameParts.slice(1).join(' ') + '</span>'
          : '<span class="neon-text">' + name + '</span>';
      }

      const heroTitle = document.getElementById('hero-title');
      if (heroTitle) heroTitle.textContent = title;

      const heroSummary = document.getElementById('hero-summary');
      if (heroSummary) heroSummary.textContent = summary;

      const contactPhone = document.getElementById('contact-phone');
      if (contactPhone) contactPhone.textContent = phone;

      const contactEmail = document.getElementById('contact-email');
      if (contactEmail) contactEmail.textContent = email;

      const contactLocation = document.getElementById('contact-location');
      if (contactLocation) contactLocation.textContent = location;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: function() { return config.background_color || defaultConfig.background_color; },
            set: function(value) {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: function() { return config.card_color || defaultConfig.card_color; },
            set: function(value) {
              config.card_color = value;
              window.elementSdk.setConfig({ card_color: value });
            }
          },
          {
            get: function() { return config.text_color || defaultConfig.text_color; },
            set: function(value) {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: function() { return config.primary_color || defaultConfig.primary_color; },
            set: function(value) {
              config.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            }
          },
          {
            get: function() { return config.secondary_text_color || defaultConfig.secondary_text_color; },
            set: function(value) {
              config.secondary_text_color = value;
              window.elementSdk.setConfig({ secondary_text_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: function() { return config.font_family || defaultConfig.font_family; },
          set: function(value) {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: function() { return config.font_size || defaultConfig.font_size; },
          set: function(value) {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ['full_name', config.full_name || defaultConfig.full_name],
        ['job_title', config.job_title || defaultConfig.job_title],
        ['professional_summary', config.professional_summary || defaultConfig.professional_summary],
        ['phone_number', config.phone_number || defaultConfig.phone_number],
        ['email_address', config.email_address || defaultConfig.email_address],
        ['location_text', config.location_text || defaultConfig.location_text]
      ]);
    }

    function setupMobileMenu() {
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
    }

    function setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.classList.add('hidden');
            }
          }
        });
      });
    }

    function initializeApp() {
      setupMobileMenu();
      setupSmoothScroll();

      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig: defaultConfig,
          onConfigChange: onConfigChange,
          mapToCapabilities: mapToCapabilities,
          mapToEditPanelValues: mapToEditPanelValues
        });
      }
    }

    initializeApp();
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9c2ff5e8931b8537',t:'MTc2OTI2MjIxNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
