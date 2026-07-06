(function () {
  const searchItems = [
    { title: "HVideo", type: "Giải pháp", url: "solution-detail.html" },
    { title: "Smart Fusion", type: "Giải pháp", url: "solution-detail.html" },
    { title: "Thiết bị định vị vệ tinh - Themis", type: "Giải pháp", url: "solutions.html" },
    { title: "Humania", type: "Giải pháp", url: "solutions.html" },
    { title: "HGuard", type: "Giải pháp", url: "solutions.html" },
    { title: "Top 10 ICT Việt Nam 2023", type: "Tin tức", url: "news-detail.html" },
    { title: "AI trong giám sát an ninh", type: "Tin tức", url: "news-detail.html" },
    { title: "Data Engineer", type: "Tuyển dụng", url: "career-detail.html" },
    { title: "AI Engineer", type: "Tuyển dụng", url: "careers.html" },
    { title: "Liên hệ HTSC", type: "Liên hệ", url: "contact.html" }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function initIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function showToast(message) {
    let toast = $(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function initMobileNav() {
    const toggle = $(".nav-toggle");
    const nav = $(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    $$(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initSearch() {
    $$(".site-search").forEach((form) => {
      const input = $("input[type='search']", form);
      const results = $(".search-results", form);
      if (!input || !results) return;

      const render = (query) => {
        const normalized = normalizeText(query.trim());
        const matches = normalized
          ? searchItems.filter((item) => normalizeText(item.title).includes(normalized) || normalizeText(item.type).includes(normalized))
          : searchItems.slice(0, 5);

        results.innerHTML = matches.length
          ? matches.slice(0, 6).map((item) =>
              '<button class="search-result" type="button" data-url="' + escapeHtml(item.url) + '">' +
              '<strong>' + escapeHtml(item.title) + '</strong>' +
              '<span>' + escapeHtml(item.type) + '</span>' +
              '</button>'
            ).join("")
          : '<div class="search-result"><strong>Không có kết quả phù hợp</strong><span>Thử từ khóa khác</span></div>';
        results.classList.add("is-open");
      };

      input.addEventListener("focus", () => render(input.value));
      input.addEventListener("input", () => render(input.value));
      results.addEventListener("click", (event) => {
        const item = event.target.closest(".search-result[data-url]");
        if (item) window.location.href = item.dataset.url;
      });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!input.value.trim()) {
          showToast("Nhập từ khóa để tìm kiếm.");
          input.focus();
          return;
        }
        render(input.value);
      });
      document.addEventListener("click", (event) => {
        if (!form.contains(event.target)) results.classList.remove("is-open");
      });
    });
  }

  function initLanguageSwitcher() {
    $$(".language-switcher").forEach((select) => {
      const stored = localStorage.getItem("htsc-language");
      if (stored) {
        select.value = stored;
        document.documentElement.lang = stored === "en" ? "en" : "vi";
      }
      select.addEventListener("change", () => {
        localStorage.setItem("htsc-language", select.value);
        document.documentElement.lang = select.value === "en" ? "en" : "vi";
        showToast(select.value === "en" ? "Đã chọn nhãn giao diện EN." : "Đã chọn giao diện tiếng Việt.");
      });
    });
  }

  function initSliders() {
    if (!window.Swiper) return;
    const reduced = prefersReducedMotion();
    if ($(".hero-swiper")) {
      new window.Swiper(".hero-swiper", {
        loop: true,
        speed: reduced ? 0 : 650,
        autoplay: reduced ? false : { delay: 5200, disableOnInteraction: false },
        pagination: { el: ".hero .swiper-pagination", clickable: true }
      });
    }
    if ($(".case-study-slider")) {
      new window.Swiper(".case-study-slider", {
        loop: false,
        spaceBetween: 18,
        slidesPerView: 1,
        speed: reduced ? 0 : 420,
        navigation: { nextEl: ".case-next", prevEl: ".case-prev" },
        breakpoints: { 760: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }
      });
    }
  }

  function initTabs() {
    $$("[data-tabs]").forEach((tabs) => {
      const buttons = $$("[data-tab-target]", tabs);
      const panels = $$("[data-tab-panel]", tabs);
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.dataset.tabTarget;
          buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
          panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
        });
      });
    });
  }

  function initCounters() {
    const counters = $$("[data-counter]");
    if (!counters.length) return;
    const animate = (counter) => {
      const target = Number(counter.dataset.counter || "0");
      const suffix = counter.dataset.suffix || "";
      const duration = 1100;
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        counter.textContent = String(value) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          animate(entry.target);
        }
      });
    }, { threshold: 0.45 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    if (prefersReducedMotion()) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item, index) => {
      if (!item.style.getPropertyValue("--reveal-index")) {
        item.style.setProperty("--reveal-index", String(index % 6));
      }
      observer.observe(item);
    });
  }

  function initHeaderState() {
    const header = $(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initScrollProgress() {
    const progress = $(".scroll-progress");
    if (!progress) return;
    let ticking = false;
    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(window.scrollY / max, 0), 1);
      progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  function cardMatchesFilters(card, checks) {
    const activeByGroup = checks.reduce((groups, check) => {
      if (!check.checked) return groups;
      groups[check.name] = groups[check.name] || [];
      groups[check.name].push(check.value);
      return groups;
    }, {});
    return Object.entries(activeByGroup).every(([group, values]) => {
      const cardValues = String(card.dataset[group] || "").split(",").map((value) => value.trim());
      return values.some((value) => cardValues.includes(value));
    });
  }

  function initListingFilters() {
    const listing = $("[data-product-listing]");
    if (!listing) return;
    const cards = $$("[data-card]", listing);
    const checks = $$(".filter-check", listing);
    const sort = $(".sort-select", listing);
    const count = $("[data-result-count]", listing);
    const apply = () => {
      let visibleCards = cards.filter((card) => cardMatchesFilters(card, checks));
      cards.forEach((card) => card.classList.toggle("is-filtered-out", !visibleCards.includes(card)));
      if (sort) {
        const parent = $(".product-grid", listing);
        visibleCards
          .sort((a, b) => sort.value === "newest"
            ? Number(a.dataset.order) - Number(b.dataset.order)
            : a.dataset.title.localeCompare(b.dataset.title, "vi"))
          .forEach((card) => parent.appendChild(card));
      }
      if (count) count.textContent = String(visibleCards.length) + " giải pháp";
    };
    checks.forEach((check) => check.addEventListener("change", apply));
    if (sort) sort.addEventListener("change", apply);
    apply();
  }

  function initCategoryFilters() {
    $$("[data-category-filter]").forEach((filter) => {
      const buttons = $$("[data-category]", filter);
      const cards = $$(filter.dataset.categoryFilter);
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const category = button.dataset.category;
          buttons.forEach((item) => item.classList.toggle("is-active", item === button));
          cards.forEach((card) => {
            const shouldShow = category === "all" || card.dataset.category === category || card.dataset.department === category;
            card.classList.toggle("is-filtered-out", !shouldShow);
          });
        });
      });
    });
  }

  function getCardText(card) {
    return normalizeText([
      card.dataset.title,
      card.dataset.summary,
      card.dataset.keywords,
      card.textContent
    ].join(" "));
  }

  function cardMatchesChecks(card, checks) {
    const activeByGroup = checks.reduce((groups, check) => {
      if (!check.checked) return groups;
      groups[check.name] = groups[check.name] || [];
      groups[check.name].push(check.value);
      return groups;
    }, {});
    return Object.entries(activeByGroup).every(([group, values]) => {
      const cardValues = String(card.dataset[group] || "").split(",").map((value) => value.trim());
      return values.some((value) => cardValues.includes(value));
    });
  }

  function inferCountUnit(listing) {
    if ($(".product-card", listing)) return "giải pháp";
    if ($(".news-card", listing)) return "tin";
    if ($(".job-card", listing)) return "vị trí";
    return "mục";
  }

  function applyUnifiedListingState(listing) {
    const cards = $$("[data-card-item]", listing);
    const checks = $$(".filter-check", listing);
    const sort = $(".sort-select", listing);
    const search = $("[data-list-search]", listing);
    const count = $("[data-result-count]", listing);
    const empty = $("[data-empty-state]", listing);
    const activeButton = $(".category-button.is-active", listing);
    const activeCategory = activeButton ? activeButton.dataset.category : "all";
    const query = normalizeText(search ? search.value.trim() : "");
    const unit = inferCountUnit(listing);

    const visibleCards = cards.filter((card) => {
      const matchesCategory = !activeCategory || activeCategory === "all" || card.dataset.category === activeCategory || card.dataset.department === activeCategory;
      const matchesChecks = cardMatchesChecks(card, checks);
      const matchesSearch = !query || getCardText(card).includes(query);
      return matchesCategory && matchesChecks && matchesSearch;
    });

    if (sort) {
      const parent = $(".product-grid, .news-grid, .job-list", listing);
      if (parent) {
        visibleCards
          .sort((a, b) => sort.value === "name"
            ? String(a.dataset.title || "").localeCompare(String(b.dataset.title || ""), "vi")
            : Number(a.dataset.order || "0") - Number(b.dataset.order || "0"))
          .forEach((card) => parent.appendChild(card));
      }
    }

    cards.forEach((card) => card.classList.toggle("is-filtered-out", !visibleCards.includes(card)));
    if (count) count.textContent = String(visibleCards.length) + " " + unit;
    if (empty) empty.hidden = visibleCards.length !== 0;
  }

  function initUnifiedListingControls() {
    $$("[data-listing]").forEach((listing) => {
      const buttons = $$(".category-button", listing);
      const checks = $$(".filter-check", listing);
      const search = $("[data-list-search]", listing);
      const sort = $(".sort-select", listing);
      const reset = $("[data-reset-filters]", listing);

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((item) => item.classList.toggle("is-active", item === button));
          applyUnifiedListingState(listing);
        });
      });
      checks.forEach((check) => check.addEventListener("change", () => applyUnifiedListingState(listing)));
      if (search) search.addEventListener("input", () => applyUnifiedListingState(listing));
      if (sort) sort.addEventListener("change", () => applyUnifiedListingState(listing));
      if (reset) {
        reset.addEventListener("click", () => {
          checks.forEach((check) => (check.checked = false));
          buttons.forEach((button, index) => button.classList.toggle("is-active", index === 0));
          if (search) search.value = "";
          if (sort) sort.value = "newest";
          applyUnifiedListingState(listing);
          showToast("Đã xóa bộ lọc.");
        });
      }

      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const hashCheck = checks.find((check) => check.value === hash);
        if (hashCheck) hashCheck.checked = true;
      }

      applyUnifiedListingState(listing);
    });
  }

  function initForms() {
    $$("form[data-validate]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;
        let firstInvalid = null;
        const message = $(".form-message", form);
        const submitButton = $("button[type='submit']", form);
        $$(".field-error", form).forEach((error) => (error.textContent = ""));
        $$("[required]", form).forEach((field) => {
          const wrapper = field.closest(".form-field");
          const error = wrapper ? $(".field-error", wrapper) : null;
          const value = field.value.trim();
          let fieldError = "";
          if (!value) {
            fieldError = "Vui lòng nhập thông tin.";
          } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            fieldError = "Email chưa đúng định dạng.";
          } else if (field.name && field.name.toLowerCase().includes("phone") && !/^[0-9+\-\s().]{8,18}$/.test(value)) {
            fieldError = "Số điện thoại chưa đúng định dạng.";
          }
          if (fieldError) {
            isValid = false;
            if (!firstInvalid) firstInvalid = field;
            field.setAttribute("aria-invalid", "true");
            if (error) error.textContent = fieldError;
          } else {
            field.removeAttribute("aria-invalid");
          }
        });
        if (message) {
          message.classList.toggle("is-success", isValid);
          message.textContent = isValid
            ? "Đã ghi nhận thông tin. Đội ngũ HTSC sẽ phản hồi theo kênh liên hệ bạn cung cấp."
            : "Vui lòng kiểm tra các trường được đánh dấu.";
        }
        if (!isValid && firstInvalid) {
          firstInvalid.focus();
          return;
        }
        if (isValid) {
          if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add("is-loading");
            window.setTimeout(() => {
              submitButton.disabled = false;
              submitButton.classList.remove("is-loading");
            }, 700);
          }
          showToast("Đã gửi thông tin.");
        }
      });
    });
  }

  function initBackToTop() {
    const button = $(".back-to-top");
    if (!button) return;
    const toggle = () => button.classList.toggle("is-visible", window.scrollY > 520);
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
  }

  function initDemoPrefill() {
    const productName = document.body.dataset.productName;
    if (!productName) return;
    $$("[data-product-prefill]").forEach((input) => {
      input.value = productName;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIcons();
    initHeaderState();
    initScrollProgress();
    initMobileNav();
    initSearch();
    initLanguageSwitcher();
    initSliders();
    initTabs();
    initCounters();
    initReveal();
    initUnifiedListingControls();
    initForms();
    initBackToTop();
    initDemoPrefill();
  });
})();