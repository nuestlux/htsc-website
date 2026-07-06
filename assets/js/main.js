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

  const translations = {
    vi: {
      "nav.home": "Trang chủ",
      "nav.solutions": "Giải pháp",
      "nav.news": "Tin tức",
      "nav.about": "Giới thiệu",
      "nav.careers": "Tuyển dụng",
      "nav.contact": "Liên hệ",
      "mega.groups": "Nhóm giải pháp",
      "mega.products": "Sản phẩm nổi bật",
      "mega.quick": "Đi nhanh",
      "mega.all": "Tất cả giải pháp",
      "mega.capabilities": "Năng lực công nghệ",
      "mega.consult": "Yêu cầu tư vấn",
      "cat.security": "An ninh - An toàn thông tin",
      "cat.digital": "Chuyển đổi số",
      "cat.smartcity": "Thành phố thông minh",
      "cat.iot": "IoT",
      "header.search": "Tìm sản phẩm, tin, việc",
      "header.cta": "Tư vấn",
      "footer.solutions": "Giải pháp",
      "footer.company": "Công ty",
      "footer.quick": "Liên hệ nhanh",
      "footer.connect": "Kết nối",
      "footer.news": "Tin tức hoạt động",
      "footer.careers": "Cơ hội nghề nghiệp",
      "btn.viewAll": "Xem tất cả",
      "btn.details": "Chi tiết",
      "search.noResults": "Không có kết quả phù hợp",
      "search.try": "Thử từ khóa khác",
      "toast.en": "Đã chuyển sang tiếng Anh.",
      "toast.vi": "Đã chuyển sang tiếng Việt.",
      "hero.01.title": "HTSC phát triển giải pháp công nghệ cho chuyển đổi số và an toàn thông tin.",
      "hero.01.desc": "HTSC là thành viên trực thuộc HTI Group, nghiên cứu và cung cấp sản phẩm, dịch vụ, giải pháp công nghệ tại Việt Nam.",
      "hero.01.btn1": "Xem giải pháp",
      "hero.01.btn2": "Liên hệ HTSC",
      "hero.02.title": "AI/ML, xử lý ảnh, xử lý ngôn ngữ tự nhiên và dữ liệu lớn.",
      "hero.02.desc": "Các nhóm công nghệ được HTSC dùng làm nền tảng cho sản phẩm an ninh, chuyển đổi số và thành phố thông minh.",
      "hero.02.btn1": "Xem HVideo",
      "hero.03.title": "Đội ngũ công nghệ đang tuyển AI, dữ liệu, phần mềm, presales và quản lý dự án.",
      "hero.03.desc": "Các vị trí tuyển dụng được lấy từ mục Tuyển dụng trên website HTSC.",
      "hero.03.btn1": "Vị trí tuyển dụng",
      "hero.03.btn1.en": "Open positions",
      "hero.signal.security": "Video & an toàn thông tin",
      "hero.signal.ai": "Computer Vision & NLP",
      "hero.signal.city": "Đô thị & hiện trường",
      "hero.signal.iot": "Theo dõi tài sản",
      "hero.signal.platform": "Nền tảng được HTSC nêu trong phần giới thiệu: AI/ML, xử lý ảnh, NLP và dữ liệu lớn.",
      "stat.2021": "Năm thành lập được nêu trong tin kỷ niệm",
      "stat.4": "Nhóm giải pháp chính trên website",
      "stat.12": "Sản phẩm/giải pháp công khai",
      "stat.2023": "Top 10 ICT Việt Nam 2023",
      "eyebrow.ecosystem": "Hệ sinh thái",
      "ecosystem.note": "Một số tên thương hiệu, đối tác và sự kiện nổi bật xoay quanh HTSC.",
      "section.02.title": "Đi vào HTSC theo bài toán vận hành, không theo danh mục rời rạc.",
      "section.02.desc": "Bố cục này gom các sản phẩm công khai của HTSC thành những lối vào quen thuộc với web doanh nghiệp công nghệ: an ninh, vận hành số, smart city và IoT.",
      "section.02.btn": "Mở danh mục",
      "path.01.tag": "An toàn thông tin",
      "path.01.title": "An ninh & video intelligence",
      "path.01.desc": "Nhóm giải pháp phục vụ giám sát, phân tích video, hỏi cung, nhận diện và bảo vệ dữ liệu.",
      "path.01.link": "Đi tới nhóm giải pháp",
      "path.02.tag": "Chuyển đổi số",
      "path.02.title": "Vận hành số cho tổ chức",
      "path.02.desc": "Các nền tảng quản trị nhân sự, sản xuất, hóa chất và dữ liệu vận hành cho tổ chức.",
      "path.02.link": "Đi tới nhóm giải pháp",
      "path.03.tag": "Thành phố thông minh",
      "path.03.title": "Smart city & hiện trường",
      "path.03.desc": "Giải pháp AI/IoT cho đô thị, giao thông, công trường, nhận diện và vận hành thông minh.",
      "path.03.link": "Đi tới nhóm giải pháp",
      "path.04.tag": "IoT",
      "path.04.title": "IoT & định vị",
      "path.04.desc": "Thiết bị và hệ thống kết nối giúp theo dõi vị trí, hiện trường và tài sản theo thời gian thực.",
      "path.04.link": "Đi tới nhóm giải pháp",
      "section.03.eyebrow": "Giải pháp HTSC",
      "section.03.title": "Bốn nhóm năng lực được tổ chức thành lưới sản phẩm.",
      "section.03.desc": "Các tab dùng đúng tên nhóm và sản phẩm công khai trên trang giải pháp HTSC.",
      "section.03.btn": "Xem tất cả",
      "tab.security": "An toàn thông tin",
      "tab.digital": "Chuyển đổi số",
      "tab.smartcity": "Thành phố thông minh",
      "tab.iot": "IoT",
      "section.04.eyebrow": "Năng lực công nghệ",
      "section.04.title": "HTSC đặt trọng tâm vào bài toán công nghệ cao của tổ chức.",
      "section.04.desc": "Các hướng công nghệ chính trải dài từ AI/ML, xử lý ảnh, NLP đến dữ liệu lớn và nền tảng vận hành.",
      "tech.ai": "Ứng dụng trong phân tích video, nhận diện và phát hiện đối tượng.",
      "tech.bigdata": "Nền tảng cho phân tích, vận hành và quản trị dữ liệu.",
      "tech.security": "Tập trung vào an ninh, an toàn thông tin và dữ liệu nghiệp vụ.",
      "tech.smartcity": "Giải pháp cho đô thị, giao thông, công trường và hiện trường.",
      "section.05.eyebrow": "Dấu mốc",
      "section.05.title": "Tin hoạt động và giải thưởng nổi bật.",
      "section.05.desc": "Một số hoạt động, sự kiện và dấu mốc nổi bật của HTSC trong các năm gần đây.",
      "section.06.eyebrow": "Tin tức",
      "section.06.title": "Cập nhật từ HTSC.",
      "section.06.desc": "Tổng hợp một số hoạt động, sự kiện và mốc đáng chú ý của HTSC.",
      "section.06.btn": "Xem tất cả",
      "form.eyebrow": "Yêu cầu tư vấn",
      "form.title": "Trao đổi về giải pháp HTSC.",
      "form.desc": "Để lại nhu cầu để đội ngũ HTSC kết nối và tư vấn theo nhóm giải pháp phù hợp.",
      "form.note": "Hotline: 093.123.2159. Email: contact@htsc.vn.",
      "form.name": "Họ tên",
      "form.company": "Công ty",
      "form.sector": "Nhu cầu",
      "form.sector.placeholder": "Chọn nhóm",
      "form.phone": "SĐT",
      "form.email": "Email",
      "form.message": "Nội dung",
      "form.submit": "Gửi yêu cầu",
      "form.success": "Đã ghi nhận thông tin. Đội ngũ HTSC sẽ phản hồi theo kênh liên hệ bạn cung cấp.",
      "form.error": "Vui lòng kiểm tra các trường được đánh dấu.",
      "form.err.required": "Vui lòng nhập thông tin.",
      "form.err.email": "Email chưa đúng định dạng.",
      "form.err.phone": "Số điện thoại chưa đúng định dạng.",
      "section.07.eyebrow": "Văn phòng",
      "section.07.title": "Tầng 16 - VP2, Tòa nhà Sun Square, số 21 đường Lê Đức Thọ, Phường Từ Liêm, Thành phố Hà Nội.",
      "section.07.desc": "Không gian làm việc và điểm kết nối trực tiếp của đội ngũ HTSC tại Hà Nội.",
      "footer.about": "Giới thiệu",
      "footer.news": "Tin tức",
      "footer.careers": "Tuyển dụng",
      "footer.contact": "Liên hệ",
      "footer.consult": "Yêu cầu tư vấn",
      "footer.tech": "Năng lực công nghệ",
      "footer.jobs": "Cơ hội nghề nghiệp",
      "footer.news.activity": "Tin tức hoạt động",
      "search.placeholder": "Tìm sản phẩm, tin, việc",
      "search.noResultTitle": "Không có kết quả phù hợp",
      "search.noResultHint": "Thử từ khóa khác",
      "skip": "Bỏ qua điều hướng",
      "backToTop": "Cuộn lên đầu trang",
      "floating.call": "Gọi hotline",
      "floating.message": "Gửi liên hệ"
    },
    en: {
      "nav.home": "Home",
      "nav.solutions": "Solutions",
      "nav.news": "News",
      "nav.about": "About",
      "nav.careers": "Careers",
      "nav.contact": "Contact",
      "mega.groups": "Solution groups",
      "mega.products": "Featured products",
      "mega.quick": "Quick links",
      "mega.all": "All solutions",
      "mega.capabilities": "Tech capabilities",
      "mega.consult": "Request consultation",
      "cat.security": "Cybersecurity & InfoSec",
      "cat.digital": "Digital Transformation",
      "cat.smartcity": "Smart City",
      "cat.iot": "IoT",
      "header.search": "Search products, news, jobs",
      "header.cta": "Consult",
      "footer.solutions": "Solutions",
      "footer.company": "Company",
      "footer.quick": "Quick links",
      "footer.connect": "Connect",
      "footer.news": "Company news",
      "footer.careers": "Open positions",
      "footer.about": "About",
      "footer.contact": "Contact",
      "footer.consult": "Request consultation",
      "footer.tech": "Tech capabilities",
      "footer.jobs": "Open positions",
      "footer.news.activity": "Company news",
      "btn.viewAll": "View all",
      "btn.details": "Details",
      "search.noResults": "No matching results",
      "search.try": "Try different keywords",
      "toast.en": "Switched to English.",
      "toast.vi": "Switched to Vietnamese.",
      "hero.01.title": "HTSC develops technology solutions for digital transformation and information security.",
      "hero.01.desc": "HTSC is a member of HTI Group, researching and providing technology products, services, and solutions in Vietnam.",
      "hero.01.btn1": "View solutions",
      "hero.01.btn2": "Contact HTSC",
      "hero.02.title": "AI/ML, image processing, natural language processing and big data.",
      "hero.02.desc": "Technology groups used by HTSC as the foundation for security, digital transformation and smart city products.",
      "hero.02.btn1": "View HVideo",
      "hero.03.title": "Tech team is hiring for AI, data, software, presales and project management.",
      "hero.03.desc": "Open positions are taken from the Careers section on the HTSC website.",
      "hero.03.btn1": "Open positions",
      "hero.signal.security": "Video & information security",
      "hero.signal.ai": "Computer Vision & NLP",
      "hero.signal.city": "Urban & field operations",
      "hero.signal.iot": "Asset tracking",
      "hero.signal.platform": "Platform mentioned by HTSC: AI/ML, image processing, NLP and big data.",
      "stat.2021": "Year founded as stated in anniversary news",
      "stat.4": "Core solution groups on the website",
      "stat.12": "Public products/solutions",
      "stat.2023": "Top 10 ICT Vietnam 2023",
      "eyebrow.ecosystem": "Ecosystem",
      "ecosystem.note": "Some notable brands, partners and events around HTSC.",
      "section.02.title": "Enter HTSC through operational problems, not disconnected categories.",
      "section.02.desc": "This layout groups HTSC's public products into familiar entry points for tech enterprise websites: security, digital operations, smart city and IoT.",
      "section.02.btn": "Open catalog",
      "path.01.tag": "Information Security",
      "path.01.title": "Security & video intelligence",
      "path.01.desc": "Solution group for surveillance, video analysis, interrogation, recognition and data protection.",
      "path.01.link": "Go to solution group",
      "path.02.tag": "Digital Transformation",
      "path.02.title": "Digital operations for organizations",
      "path.02.desc": "Platforms for HR management, production, chemicals and operational data for organizations.",
      "path.02.link": "Go to solution group",
      "path.03.tag": "Smart City",
      "path.03.title": "Smart city & field operations",
      "path.03.desc": "AI/IoT solutions for urban, traffic, construction sites, recognition and smart operations.",
      "path.03.link": "Go to solution group",
      "path.04.tag": "IoT",
      "path.04.title": "IoT & positioning",
      "path.04.desc": "Connected devices and systems to track location, field and assets in real time.",
      "path.04.link": "Go to solution group",
      "section.03.eyebrow": "HTSC Solutions",
      "section.03.title": "Four capability groups organized into a product grid.",
      "section.03.desc": "Tabs use the exact group and product names published on the HTSC solutions page.",
      "section.03.btn": "View all",
      "tab.security": "InfoSec",
      "tab.digital": "Digital Transformation",
      "tab.smartcity": "Smart City",
      "tab.iot": "IoT",
      "section.04.eyebrow": "Technology Capabilities",
      "section.04.title": "HTSC focuses on high-tech problems for organizations.",
      "section.04.desc": "Core technology directions range from AI/ML, image processing, NLP to big data and operations platforms.",
      "tech.ai": "Applied in video analysis, recognition and object detection.",
      "tech.bigdata": "Foundation for data analysis, operations and governance.",
      "tech.security": "Focused on cybersecurity, information security and business data.",
      "tech.smartcity": "Solutions for cities, traffic, construction sites and field operations.",
      "section.05.eyebrow": "Milestones",
      "section.05.title": "Notable activities and awards.",
      "section.05.desc": "Some activities, events and milestones of HTSC in recent years.",
      "section.06.eyebrow": "News",
      "section.06.title": "Updates from HTSC.",
      "section.06.desc": "Summary of some activities, events and notable milestones of HTSC.",
      "section.06.btn": "View all",
      "form.eyebrow": "Request consultation",
      "form.title": "Discuss HTSC solutions.",
      "form.desc": "Leave your requirements so the HTSC team can connect and advise on suitable solution groups.",
      "form.note": "Hotline: 093.123.2159. Email: contact@htsc.vn.",
      "form.name": "Full name",
      "form.company": "Company",
      "form.sector": "Requirement",
      "form.sector.placeholder": "Select group",
      "form.phone": "Phone",
      "form.email": "Email",
      "form.message": "Message",
      "form.submit": "Send request",
      "form.success": "Information recorded. HTSC team will respond via the channel you provided.",
      "form.error": "Please check the highlighted fields.",
      "form.err.required": "Please fill in this field.",
      "form.err.email": "Invalid email format.",
      "form.err.phone": "Invalid phone number.",
      "section.07.eyebrow": "Office",
      "section.07.title": "Floor 16 - VP2, Sun Square Building, 21 Le Duc Tho Street, Tu Liem Ward, Hanoi City.",
      "section.07.desc": "Workspace and direct connection point of the HTSC team in Hanoi.",
      "search.placeholder": "Search products, news, jobs",
      "search.noResultTitle": "No matching results",
      "search.noResultHint": "Try different keywords",
      "skip": "Skip navigation",
      "backToTop": "Back to top",
      "floating.call": "Call hotline",
      "floating.message": "Send message",
      "contact.eyebrow": "Contact",
      "contact.company": "HTSC Joint Stock Technology Solutions Company",
      "contact.address": "Floor 16 - VP2, Sun Square Building, 21 Le Duc Tho Street, Tu Liem Ward, Hanoi City",
      "contact.phone": "093.123.2159",
      "contact.hq": "Head Office",
      "contact.hotline": "Hotline",
      "contact.email": "Email",
      "contact.process.eyebrow": "Consultation Process",
      "contact.process.title": "From initial requirement to clear solution direction.",
      "contact.process.desc": "The contact flow is presented concisely so enterprise customers understand the next steps after submitting a request.",
      "contact.step1.title": "Requirement Intake",
      "contact.step1.desc": "Capture requirements, operational context, current system status and deployment objectives.",
      "contact.step2.title": "Solution Routing",
      "contact.step2.desc": "Propose suitable product groups: security, digital transformation, smart city or IoT.",
      "contact.step3.title": "Demo & Consultation",
      "contact.step3.desc": "Discuss features, integration scope, data preparation and next deployment steps.",
      "contact.form.eyebrow": "Send Inquiry",
      "contact.form.title": "Send consultation request.",
      "contact.form.desc": "Leave your requirements so HTSC can connect, advise and arrange suitable next steps.",
      "contact.map.eyebrow": "Map",
      "contact.map.title": "Sun Square, 21 Le Duc Tho, Hanoi.",
      "news.eyebrow": "News",
      "news.title": "HTSC activities, events and awards.",
      "news.desc": "Summary of activities, events and notable milestones of HTSC.",
      "news.filter.label": "Filter news",
      "news.count": "6 items",
      "news.cat.all": "All",
      "news.cat.event": "Event",
      "news.cat.company": "Company",
      "news.cat.award": "Award",
      "news.reset": "Clear filters",
      "news.search.placeholder": "Search events, awards...",
      "careers.eyebrow": "Careers",
      "careers.title": "Career opportunities at HTSC.",
      "careers.desc": "Open positions focus on AI, data, software, presales, product and project management.",
      "careers.filter.label": "Open positions",
      "careers.count": "12 positions",
      "careers.cat.all": "All",
      "careers.cat.engineering": "Engineering",
      "careers.cat.ai": "AI",
      "careers.cat.product": "Product",
      "careers.cat.business": "Business",
      "careers.reset": "Clear filters",
      "careers.search.placeholder": "Search AI, Data, DevOps...",
      "careers.apply.eyebrow": "Quick Apply",
      "careers.apply.title": "Submit application info.",
      "careers.apply.desc": "Quickly fill basic info to start conversation with recruiting team.",
      "apply.name": "Full name",
      "apply.phone": "Phone",
      "apply.email": "Email",
      "apply.role": "Position of interest",
      "apply.role.placeholder": "Select position",
      "apply.note": "Note",
      "apply.submit": "Submit info",
      "detail.consult.eyebrow": "Product consultation",
      "detail.consult.title": "Discuss product requirements.",
      "detail.consult.desc": "Fill requirements so HTSC team can discuss deeper about the problem and suitable solution.",
      "detail.tabs.overview": "Overview",
      "detail.tabs.features": "Features",
      "detail.tabs.specs": "Specs",
      "detail.side.consult": "Product consultation",
      "detail.side.related": "Related solutions",
      "news.side.related": "Related news",
      "news.side.solutions": "Related solution groups",
      "career.side.apply": "Quick apply",
      "career.side.other": "Other positions",
      "news.detail.eyebrow": "Event",
      "news.detail.back": "Other news",
      "news.detail.points": "Key points",
      "news.detail.related.solutions": "Link to solution groups",
      "career.detail.location": "Hanoi",
      "career.detail.type": "Full-time",
      "career.detail.dept": "Engineering",
      "career.detail.desc.title": "Position description",
      "career.detail.desc.body": "HTSC recruits Data Engineer to meet resources for product development expansion. The position focuses on developing and managing large data collection flows, serving products and data systems.",
      "career.detail.focus.title": "Job focus",
      "career.detail.focus.1": "Design and operate large data collection flows.",
      "career.detail.focus.2": "Coordinate with product, AI and software teams to bring data into the system.",
      "career.detail.focus.3": "Ensure data can be stably exploited for analysis and operations.",
      "career.detail.apply.title": "Apply",
      "career.detail.apply.body": "Candidates can leave information for the recruiting team to connect and discuss more about the suitable role.",
      "career.detail.side.apply": "Quick submit profile",
      "career.detail.side.other": "Other positions"
    }
  };

  function t(key, lang) {
    const l = lang || document.documentElement.lang || "vi";
    return (translations[l] && translations[l][key]) || (translations.vi[key] || key);
  }

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

  function getLocalizedType(rawType, lang) {
    const map = {
      "Giải pháp": { vi: "Giải pháp", en: "Solutions" },
      "Tin tức": { vi: "Tin tức", en: "News" },
      "Tuyển dụng": { vi: "Tuyển dụng", en: "Careers" },
      "Liên hệ": { vi: "Liên hệ", en: "Contact" }
    };
    const entry = map[rawType];
    return entry ? entry[lang] || rawType : rawType;
  }

  function initSearch() {
    $$(".site-search").forEach((form) => {
      const input = $("input[type='search']", form);
      const results = $(".search-results", form);
      if (!input || !results) return;

      const render = (query) => {
        const lang = currentLang || "vi";
        const normalized = normalizeText(query.trim());
        const matches = normalized
          ? searchItems.filter((item) => normalizeText(item.title).includes(normalized) || normalizeText(item.type).includes(normalized))
          : searchItems.slice(0, 5);

        results.innerHTML = matches.length
          ? matches.slice(0, 6).map((item) =>
              '<button class="search-result" type="button" data-url="' + escapeHtml(item.url) + '">' +
              '<strong>' + escapeHtml(item.title) + '</strong>' +
              '<span data-raw="' + escapeHtml(item.type) + '">' + escapeHtml(getLocalizedType(item.type, lang)) + '</span>' +
              '</button>'
            ).join("")
          : '<div class="search-result"><strong>' + t("search.noResults", lang) + '</strong><span>' + t("search.try", lang) + '</span></div>';
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

  let currentLang = "vi";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "en" ? "en" : "vi";

    const mapping = {
      "[data-nav-home]": "nav.home",
      "[data-nav-solutions]": "nav.solutions",
      "[data-nav-news]": "nav.news",
      "[data-nav-about]": "nav.about",
      "[data-nav-careers]": "nav.careers",
      "[data-nav-contact]": "nav.contact",
      "[data-mega-groups]": "mega.groups",
      "[data-mega-products]": "mega.products",
      "[data-mega-quick]": "mega.quick",
      "[data-mega-all]": "mega.all",
      "[data-mega-capabilities]": "mega.capabilities",
      "[data-mega-consult]": "mega.consult",
      "[data-cat-security]": "cat.security",
      "[data-cat-digital]": "cat.digital",
      "[data-cat-smartcity]": "cat.smartcity",
      "[data-cat-iot]": "cat.iot",
      "[data-search-placeholder]": "header.search",
      "[data-cta-label]": "header.cta",
      "[data-footer-solutions]": "footer.solutions",
      "[data-footer-company]": "footer.company",
      "[data-footer-quick]": "footer.quick",
      "[data-footer-connect]": "footer.connect",
      "[data-footer-news]": "footer.news",
      "[data-footer-careers]": "footer.careers",
      "[data-footer-about]": "nav.about",
      "[data-footer-contact]": "nav.contact",
      "[data-footer-consult]": "mega.consult",
      "[data-footer-tech]": "mega.capabilities",
      "[data-footer-jobs]": "footer.careers"
    };

    function safeSetText(el, text) {
      if (!el) return;
      const icons = Array.from(el.querySelectorAll(":scope > i[data-lucide]"));
      el.textContent = "";
      icons.forEach(ic => el.appendChild(ic));
      el.appendChild(document.createTextNode(icons.length ? " " + text : text));
    }

    Object.entries(mapping).forEach(([sel, key]) => {
      $$(sel).forEach((el) => {
        const val = t(key, lang);
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = val;
        } else if (el.tagName === "OPTION") {
          el.textContent = val;
        } else {
          safeSetText(el, val);
        }
      });
    });

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = t(key, lang);
      if (!val || val === key) return;

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) el.placeholder = val;
        else el.value = val;
        return;
      }
      safeSetText(el, val);
    });

    $$(".search-result").forEach((r) => {
      const typeEl = r.querySelector("span");
      if (typeEl) {
        const raw = typeEl.dataset.raw || typeEl.textContent;
        if (!typeEl.dataset.raw) typeEl.dataset.raw = raw;
        const mapType = { "Giải pháp": "Solutions", "Tin tức": "News", "Tuyển dụng": "Careers", "Liên hệ": "Contact" };
        typeEl.textContent = lang === "en" ? (mapType[raw] || raw) : raw;
      }
    });
  }

  function initLanguageSwitcher() {
    $$(".language-switcher").forEach((select) => {
      const stored = localStorage.getItem("htsc-language") || "vi";
      select.value = stored;
      applyLanguage(stored);

      select.addEventListener("change", () => {
        const newLang = select.value;
        localStorage.setItem("htsc-language", newLang);
        applyLanguage(newLang);
        showToast(t(newLang === "en" ? "toast.en" : "toast.vi", newLang));
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