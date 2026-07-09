const fs = require("fs");

const official = {
  home: "https://htsc.vn/",
  about: "https://htsc.vn/ve-chung-toi/",
  solutions: "https://htsc.vn/giai-phap-htsc/",
  news: "https://htsc.vn/chuyen-muc/tin-tuc/",
  careers: "https://htsc.vn/tuyen-dung/",
  contact: "https://htsc.vn/lien-he/",
  logo: "https://htsc.vn/wp-content/uploads/2021/10/logo.svg",
  favicon: "https://htsc.vn/wp-content/uploads/2021/10/favicon.svg"
};

const images = {
  hero: "assets/images/defense/command-center.jpg",
  about: "assets/images/defense/cyber-operations.jpg",
  career: "assets/images/defense/simulator.jpg",
  news: "assets/images/defense/zero-trust.jpg",
  logoSocial: "https://htsc.vn/wp-content/uploads/2021/10/logo-htsc-social-1.jpg"
};

const ecosystemPartners = [
  { name: "HTI Group", category: "Hệ sinh thái", logo: "assets/images/partners/hti-group.svg" },
  { name: "Motorola Solutions", category: "Công nghệ", logo: "assets/images/partners/motorola-solutions.svg" },
  { name: "N-TEK Distribution", category: "Phân phối", logo: "assets/images/partners/n-tek-distribution.svg" },
  { name: "VINASA", category: "Hiệp hội", logo: "assets/images/partners/vinasa.svg" },
  { name: "Smart City Asia", category: "Sự kiện", logo: "assets/images/partners/smart-city-asia.svg" },
  { name: "Secutech", category: "Sự kiện", logo: "assets/images/partners/secutech.svg" },
  { name: "BIDV", category: "Khách hàng", logo: "assets/images/partners/bidv.svg" },
  { name: "Novaland", category: "Khách hàng", logo: "assets/images/partners/novaland.svg" }
];

const contact = {
  company: "Công ty Cổ phần Giải pháp Công nghệ HTSC",
  address: "Tầng 16 - VP2, Tòa nhà Sun Square, số 21 đường Lê Đức Thọ, Phường Từ Liêm, Thành phố Hà Nội",
  phone: "093.123.2159",
  phoneHref: "+84931232159",
  email: "contact@htsc.vn",
  map: "https://www.google.com/maps?q=Sun%20Square%2021%20Le%20Duc%20Tho%20Hanoi&output=embed"
};

const categories = [
  {
    id: "security",
    label: "An ninh - An toàn thông tin",
    short: "An toàn thông tin",
    description: "Nhóm giải pháp phục vụ giám sát, phân tích video, hỏi cung, nhận diện và bảo vệ dữ liệu."
  },
  {
    id: "digital",
    label: "Chuyển đổi số",
    short: "Chuyển đổi số",
    description: "Các nền tảng quản trị nhân sự, sản xuất, hóa chất và dữ liệu vận hành cho tổ chức."
  },
  {
    id: "smartcity",
    label: "Thành phố thông minh",
    short: "Thành phố thông minh",
    description: "Giải pháp AI/IoT cho đô thị, giao thông, công trường, nhận diện và vận hành thông minh."
  },
  {
    id: "iot",
    label: "IoT",
    short: "IoT",
    description: "Thiết bị và hệ thống kết nối giúp theo dõi vị trí, hiện trường và tài sản theo thời gian thực."
  }
];

const products = [
  {
    title: "HVideo",
    category: "security",
    tag: "Video forensic",
    image: "https://htsc.vn/wp-content/uploads/2025/12/san-pham-htsc-03.png",
    url: "https://htsc.vn/giai-phap/hvideo/",
    summary: "Phần mềm chuyên dụng để trích xuất và khôi phục dữ liệu video từ ổ cứng, DVR và thiết bị lưu trữ.",
    features: ["Trích xuất dữ liệu video", "Khôi phục tệp lỗi hoặc thất lạc", "Hỗ trợ nghiệp vụ phân tích bằng chứng số"]
  },
  {
    title: "Smart Fusion",
    category: "security",
    tag: "AI video",
    image: "https://htsc.vn/wp-content/uploads/2025/12/san-pham-htsc-01.png",
    url: "https://htsc.vn/giai-phap/smart-fusion/",
    summary: "Giải pháp phân tích dữ liệu video thông minh dựa trên AI để tổng hợp, nhận diện và phát hiện đối tượng.",
    features: ["Phân tích video bằng AI", "Nhận diện và phát hiện đối tượng", "Tổng hợp báo cáo chi tiết"]
  },
  {
    title: "Thiết bị định vị vệ tinh - Themis",
    category: "iot",
    tag: "Định vị",
    image: "https://htsc.vn/wp-content/uploads/2025/12/san-pham-htsc-05.png",
    url: "https://htsc.vn/giai-phap/thiet-bi-dinh-vi-ve-tinh-themis/",
    summary: "Thiết bị định vị nhỏ gọn, theo dõi vị trí mục tiêu qua vệ tinh hoặc trạm phát sóng di động.",
    features: ["Thiết kế gọn nhẹ", "Theo dõi vị trí trực tuyến", "Phù hợp phương tiện và hành lý"]
  },
  {
    title: "Hệ thống quản lý và phát triển nhân sự - Humania",
    category: "digital",
    tag: "Nhân sự",
    image: "https://htsc.vn/wp-content/uploads/2023/10/humania-05.png",
    url: "https://htsc.vn/giai-phap/he-thong-quan-ly-va-phat-trien-nhan-su/",
    summary: "Nền tảng quản lý nhân sự, dữ liệu, phúc lợi, hiệu suất và quy trình vận hành nhân sự.",
    features: ["Thông tin minh bạch", "Tiết kiệm thời gian vận hành", "Hỗ trợ lương, phúc lợi và hiệu suất"]
  },
  {
    title: "Phần mềm quản lý hoá chất, chất chuẩn - HCMS AG",
    category: "digital",
    tag: "Quản trị dữ liệu",
    image: "https://htsc.vn/wp-content/uploads/2023/02/phan-mem-quan-ly-hoa-chat-chat-chuan.jpg",
    url: "https://htsc.vn/giai-phap/phan-mem-quan-ly-hoa-chat-chat-chuan-hcmsag/",
    summary: "Phần mềm quản lý hoá chất và chất chuẩn, hỗ trợ truy xuất tài liệu, mẫu và báo cáo vận hành.",
    features: ["Quản lý hóa chất và chất chuẩn", "Truy xuất tài liệu nhanh", "Tạo báo cáo theo nghiệp vụ"]
  },
  {
    title: "Phần mềm điều hành sản xuất - HPMS",
    category: "digital",
    tag: "Sản xuất",
    image: "https://htsc.vn/wp-content/uploads/2023/02/phan-mem-dieu-hanh-san-xuat-hpms.jpg",
    url: "https://htsc.vn/giai-phap/phan-mem-dieu-hanh-san-xuat-hpms/",
    summary: "Công cụ điều hành sản xuất với lệnh sản xuất, ký xác nhận và báo cáo bàn giao ca.",
    features: ["Tạo và truy xuất lệnh", "Ký bằng vân tay, thẻ hoặc khuôn mặt", "Báo cáo sau ca và bàn giao ca"]
  },
  {
    title: "Phần mềm ghi âm, ghi hình hỏi cung - HVAR",
    category: "security",
    tag: "Ghi âm ghi hình",
    image: "https://htsc.vn/wp-content/uploads/2023/02/phan-mem-hvar.jpg",
    url: "https://htsc.vn/giai-phap/phan-mem-ghi-am-ghi-hinh-co-am-thanh-phuc-vu-cong-tac-tham-van-hoi-cung-bi-can-hvar/",
    summary: "Hệ thống ghi âm, ghi hình có âm thanh cho quy trình thẩm vấn, hỏi cung và quản trị dữ liệu phiên làm việc.",
    features: ["Quản lý phiên thẩm vấn", "Quản lý người dùng và thiết bị", "Bảo mật dữ liệu phiên"]
  },
  {
    title: "Hệ thống phân tích và khuyến nghị hành vi khách hàng - HInsight",
    category: "digital",
    tag: "Phân tích khách hàng",
    image: "https://htsc.vn/wp-content/uploads/2022/09/hinsight-2.png",
    url: "https://htsc.vn/giai-phap/he-thong-phan-tich-va-khuyen-nghi-hanh-vi-khach-hang-hinsight/",
    summary: "Hệ thống phân tích hành vi khách hàng, dự đoán nhu cầu và hỗ trợ tối ưu quyết định cung ứng.",
    features: ["Dự đoán nhu cầu", "Mô tả chân dung khách hàng", "Bản đồ nhiệt khu vực tập trung"]
  },
  {
    title: "Hệ thống giám sát công trường tự động - HGuard",
    category: "smartcity",
    tag: "Công trường",
    image: "https://htsc.vn/wp-content/uploads/2022/05/hti-he-thong-giam-sat-cong-truong-tu-dong.png",
    url: "https://htsc.vn/giai-phap/he-thong-giam-sat-cong-truong-tu-dong/",
    summary: "Giải pháp giám sát công trường về xâm nhập, trộm cắp, người ra vào, phương tiện, cháy nổ và an toàn lao động.",
    features: ["Giám sát ra vào", "Cảnh báo an toàn lao động", "Theo dõi nguy cơ tại hiện trường"]
  },
  {
    title: "Hệ thống phân tích video - HVis",
    category: "smartcity",
    tag: "Video analytics",
    image: "https://htsc.vn/wp-content/uploads/2021/10/he-thong-phan-tich-video-video-insight-h2.jpg",
    url: "https://htsc.vn/giai-phap/he-thong-phan-tich-video/",
    summary: "Hỗ trợ phân tích nhiều video, khoanh vùng, truy vết đối tượng và rút ngắn thời gian kiểm tra.",
    features: ["Quản lý nhiều video", "Truy vết đối tượng", "Hỗ trợ đa ngôn ngữ"]
  },
  {
    title: "Hệ thống điểm danh, chấm công bằng khuôn mặt",
    category: "digital",
    tag: "Nhận diện khuôn mặt",
    image: "https://htsc.vn/wp-content/uploads/2021/10/he-thong-diem-danh-cham-cong-bang-khuon-mat.jpg",
    url: "https://htsc.vn/giai-phap/he-thong-diem-danh-cham-cong-bang-khuon-mat/",
    summary: "Hệ thống chấm công bằng khuôn mặt, giám sát thời gian ra vào và tích hợp camera hiện có.",
    features: ["Nhận diện khuôn mặt", "Thống kê thời gian ra vào", "Tích hợp camera linh hoạt"]
  },
  {
    title: "Hệ thống giám sát vi phạm giao thông",
    category: "smartcity",
    tag: "Giao thông",
    image: "https://htsc.vn/wp-content/uploads/2021/10/he-thong-giam-sat-vi-pham-giao-thong-h2-1.jpg",
    url: "https://htsc.vn/giai-phap/he-thong-giam-sat-vi-pham-giao-thong/",
    summary: "Giải pháp nhận diện phương tiện và hỗ trợ phát hiện các hành vi vi phạm giao thông.",
    features: ["Nhận diện biển số", "Phát hiện vi phạm", "Truy vết phương tiện"]
  }
];

const news = [
  {
    title: "HTSC giới thiệu giải pháp AI trong giám sát an ninh tại hội thảo cùng Motorola Solutions và HTI Group",
    category: "event",
    categoryLabel: "Sự kiện",
    date: "07/08/2025",
    image: images.news,
    url: "https://htsc.vn/htsc-gioi-thieu-giai-phap-ai-trong-giam-sat-an-ninh-tai-hoi-thao-he-sinh-thai-giam-sat-thong-minh-cung-motorola-solutions-va-hti-group/",
    summary: "HTSC xuất hiện trong hội thảo về hệ sinh thái giám sát thông minh, nhấn mạnh vai trò AI trong an ninh."
  },
  {
    title: "Diễn đàn Cấp cao Chuyển đổi số Việt Nam - Châu Á 2025",
    category: "event",
    categoryLabel: "Sự kiện",
    date: "27-28/05/2025",
    image: images.hero,
    url: "https://htsc.vn/dien-dan-cap-cao-chuyen-doi-so-viet-nam-chau-a-2025-vietnam-asia-dx-summit-2025/",
    summary: "Sự kiện chuyển đổi số quy mô lớn tại Trung tâm Hội nghị Quốc gia với chủ đề làm chủ công nghệ."
  },
  {
    title: "Kỷ niệm 3 năm thành lập HTSC: 21/10/2021 - 21/10/2024",
    category: "company",
    categoryLabel: "Công ty",
    date: "18/10/2024",
    image: images.logoSocial,
    url: "https://htsc.vn/ky-niem-3-nam-thanh-lap-htsc-21-10-2021-21-10-2024/",
    summary: "HTI Group tổ chức lễ kỷ niệm dấu mốc 3 năm của HTSC và 1 năm HTI Scientific."
  },
  {
    title: "HTSC ứng dụng AI tại Smart City Asia 2024",
    category: "event",
    categoryLabel: "Sự kiện",
    date: "17-19/04/2024",
    image: products[8].image,
    url: "https://htsc.vn/htsc-ung-dung-ai-tai-smart-city-2024/",
    summary: "HTSC giới thiệu các giải pháp ứng dụng AI cho đô thị thông minh tại triển lãm Smart City Asia 2024."
  },
  {
    title: "HTSC xuất sắc đạt giải thưởng Top 10 Doanh nghiệp Công nghệ số xuất sắc Việt Nam 2023",
    category: "award",
    categoryLabel: "Giải thưởng",
    date: "22/09/2023",
    image: images.logoSocial,
    url: "https://htsc.vn/htsc-xuat-sac-dat-giai-thuong-top-10-doanh-nghiep-cong-nghe-so-xuat-sac-viet-nam-2023/",
    summary: "HTSC được VINASA công bố trong nhóm Top 10 ICT Việt Nam 2023."
  },
  {
    title: "HTSC chính thức khai trương văn phòng mới",
    category: "company",
    categoryLabel: "Công ty",
    date: "15/08/2023",
    image: images.about,
    url: "https://htsc.vn/htsc-chinh-thuc-khai-truong-van-phong-moi/",
    summary: "HTSC khai trương văn phòng tại tầng 16 - VP2, tòa nhà Sun Square, 21 Lê Đức Thọ, Hà Nội."
  }
];

const jobs = [
  { title: "Data Engineer", department: "engineering", url: "https://htsc.vn/data-engineer/", summary: "Phát triển và quản lý luồng thu thập dữ liệu lớn cho sản phẩm.", location: "Hà Nội", type: "Full-time" },
  { title: "AI Engineer (Computer Vision)", department: "ai", url: "https://htsc.vn/ai-engineer-2/", summary: "Nghiên cứu, phát triển và tối ưu mô hình AI trong lĩnh vực Computer Vision.", location: "Hà Nội", type: "Full-time" },
  { title: "AI Engineer (LLM/NLP)", department: "ai", url: "https://htsc.vn/ai-engineer/", summary: "Tập trung vào mô hình ngôn ngữ lớn, NLP và ứng dụng AI vào sản phẩm.", location: "Hà Nội", type: "Full-time" },
  { title: "Presales Engineer", department: "business", url: "https://htsc.vn/chuyen-vien-kinh-doanh-presale/", summary: "Thiết kế, đề xuất giải pháp tích hợp CNTT và hệ thống mạng cho khách hàng.", location: "Hà Nội", type: "Full-time" },
  { title: "Business Analyst", department: "product", url: "https://htsc.vn/business-analyst/", summary: "Thu thập yêu cầu, phân tích bài toán nghiệp vụ và hệ thống của khách hàng.", location: "Hà Nội", type: "Full-time" },
  { title: "Lập trình viên .NET (C#)", department: "engineering", url: "https://htsc.vn/lap-trinh-vien-net/", summary: "Phát triển ứng dụng Desktop Application bằng C#/.NET, WPF và WinForms.", location: "Hà Nội", type: "Full-time" },
  { title: "Senior C++ Developer", department: "engineering", url: "https://htsc.vn/senior-c-developer/", summary: "Thiết kế và phát triển thư viện C++ hiệu suất cao cho ứng dụng phân tích.", location: "Hà Nội", type: "Full-time" },
  { title: "UI/UX Designer", department: "product", url: "https://htsc.vn/nhan-vien-thiet-ke/", summary: "Thực hiện quy trình thiết kế UI và trải nghiệm người dùng cho sản phẩm.", location: "Hà Nội", type: "Full-time" },
  { title: "Lập trình viên Java", department: "engineering", url: "https://htsc.vn/lap-trinh-vien-java/", summary: "Tham gia dự án phát triển, tích hợp và triển khai hệ thống phần mềm.", location: "Hà Nội", type: "Full-time" },
  { title: "DevOps Engineers", department: "engineering", url: "https://htsc.vn/devops-engineers/", summary: "Xây dựng CI/CD, tối ưu kiến trúc và vận hành hạ tầng sản phẩm.", location: "Hà Nội", type: "Full-time" },
  { title: "Project Manager", department: "product", url: "https://htsc.vn/project-manager/", summary: "Quản lý tổng thể dự án, nhân sự, chi phí, kế hoạch và tiến độ.", location: "Hà Nội", type: "Full-time" },
  { title: "Account Manager", department: "business", url: "https://htsc.vn/account-manager/", summary: "Duy trì quan hệ khách hàng chiến lược và xác định nhu cầu triển khai.", location: "Hà Nội", type: "Full-time" }
];

const enterpriseSignals = [
  { icon: "shield-check", label: "Security", value: "Video & an toàn thông tin", text: "HVideo, Smart Fusion, HVAR, HVis và các hướng giám sát/phân tích dữ liệu video." },
  { icon: "cpu", label: "AI/ML", value: "Computer Vision & NLP", text: "Nền tảng được HTSC nêu trong phần giới thiệu: AI/ML, xử lý ảnh, NLP và dữ liệu lớn." },
  { icon: "building-2", label: "Smart City", value: "Đô thị & hiện trường", text: "Các giải pháp cho giao thông, công trường, nhận diện và vận hành thông minh." },
  { icon: "radio-tower", label: "IoT", value: "Theo dõi tài sản", text: "Thiết bị định vị và hệ thống kết nối phục vụ giám sát theo thời gian thực." }
];

const industryPathways = [
  { number: "01", title: "An ninh & video intelligence", category: "security", text: categories[0].description, products: ["HVideo", "Smart Fusion", "HVAR", "HVis"] },
  { number: "02", title: "Vận hành số cho tổ chức", category: "digital", text: categories[1].description, products: ["Humania", "HCMS AG", "HPMS", "HInsight"] },
  { number: "03", title: "Smart city & hiện trường", category: "smartcity", text: categories[2].description, products: ["HGuard", "HVis", "Giám sát giao thông"] },
  { number: "04", title: "IoT & định vị", category: "iot", text: categories[3].description, products: ["Themis", "Giám sát tài sản", "Theo dõi vị trí"] }
];

const trustBadges = [
  { icon: "award", title: "Top 10 ICT Việt Nam 2023", text: "Dấu mốc ghi nhận năng lực công nghệ số nổi bật của HTSC." },
  { icon: "sparkles", title: "Sao Khuê 2022", text: "Hệ thống giám sát công trường tự động trong hệ sinh thái HTI Group được vinh danh." },
  { icon: "handshake", title: "Hệ sinh thái đối tác", text: "Các hoạt động nổi bật gắn với HTI Group, Motorola Solutions, N-TEK Distribution và VINASA." }
];

const engagementSteps = [
  { icon: "clipboard-list", title: "Tiếp nhận bài toán", text: "Ghi nhận nhu cầu, bối cảnh vận hành, hiện trạng hệ thống và mục tiêu triển khai." },
  { icon: "route", title: "Định tuyến giải pháp", text: "Đề xuất nhóm sản phẩm phù hợp: an ninh, chuyển đổi số, smart city hoặc IoT." },
  { icon: "presentation", title: "Demo & tư vấn", text: "Trao đổi tính năng, phạm vi tích hợp, dữ liệu cần chuẩn bị và bước triển khai tiếp theo." }
];

const esc = (value) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function categoryLabel(id) {
  return (categories.find((item) => item.id === id) || categories[0]).short;
}

function breadcrumbTrail(items = []) {
  if (!items.length) return "";
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      ${items.map((item) => item.href
        ? `<a href="${item.href}">${esc(item.label)}</a><span>/</span>`
        : `<span aria-current="page">${esc(item.label)}</span>`).join("")}
    </nav>`;
}

function heroSignalPanel(title = "Enterprise signal map") {
  return `
    <aside class="hero-signal-panel reveal" aria-label="${esc(title)}">
      <div class="signal-panel-head">
        <span>${esc(title)}</span>
        <strong>HTSC</strong>
      </div>
      <div class="signal-grid">
        ${enterpriseSignals.map((item) => `
          <div class="signal-item">
            ${icon(item.icon)}
            <span>${esc(item.label)}</span>
            <strong>${esc(item.value)}</strong>
          </div>`).join("")}
      </div>
      <p>${esc(enterpriseSignals[1].text)}</p>
    </aside>`;
}

function pathwayCard(item, index = 0) {
  return `
    <article class="pathway-card reveal" style="--reveal-index: ${index};">
      <span class="pathway-number">${item.number}</span>
      <div class="tag-row"><span class="tag">${categoryLabel(item.category)}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.text)}</p>
      <div class="pathway-products">
        ${item.products.map((product) => `<span>${esc(product)}</span>`).join("")}
      </div>
      <a class="text-link" href="solutions.html#${item.category}">${icon("arrow-right")}Đi tới nhóm giải pháp</a>
    </article>`;
}

function productCard(product, index = 0) {
  return `
    <article class="product-card reveal" style="--reveal-index: ${index};" data-card data-card-item data-category="${product.category}" data-title="${esc(product.title)}" data-summary="${esc(product.summary)}" data-keywords="${esc([product.title, product.tag, product.summary, categoryLabel(product.category), ...product.features].join(" "))}" data-order="${index + 1}">
      <img src="${product.image}" alt="${esc(product.title)}" loading="lazy">
      <div class="product-card-body">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="tag-row"><span class="tag">${categoryLabel(product.category)}</span><span class="tag">${esc(product.tag)}</span></div>
        <h3>${esc(product.title)}</h3>
        <p>${esc(product.summary)}</p>
        <div class="hero-actions">
          <a class="btn-ghost" href="solution-detail.html">${icon("file-text")}Chi tiết</a>
        </div>
      </div>
    </article>`;
}

function newsCard(item, index = 0) {
  return `
    <article class="news-card reveal" style="--reveal-index: ${index};" data-card-item data-category="${item.category}" data-title="${esc(item.title)}" data-summary="${esc(item.summary)}" data-keywords="${esc([item.title, item.categoryLabel, item.date, item.summary].join(" "))}">
      <img src="${item.image}" alt="${esc(item.title)}" loading="lazy">
      <div class="news-card-body">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="meta-row"><span class="meta">${esc(item.categoryLabel)}</span><span class="meta">${esc(item.date)}</span></div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.summary)}</p>
        <div class="hero-actions">
          <a class="btn-ghost" href="news-detail.html">${icon("book-open")}Chi tiết</a>
        </div>
      </div>
    </article>`;
}

function jobCard(job, index = 0) {
  return `
    <article class="job-card reveal" style="--reveal-index: ${index};" data-card-item data-category="${job.department}" data-department="${job.department}" data-title="${esc(job.title)}" data-summary="${esc(job.summary)}" data-keywords="${esc([job.title, job.summary, job.location, job.type, departmentName(job.department)].join(" "))}">
      <div>
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="job-meta"><span class="tag">${esc(job.location)}</span><span class="tag">${esc(job.type)}</span><span class="tag">${departmentName(job.department)}</span></div>
        <h3>${esc(job.title)}</h3>
        <p>${esc(job.summary)}</p>
      </div>
      <div class="hero-actions">
        <a class="btn" href="career-detail.html">${icon("send")}Ứng tuyển</a>
      </div>
    </article>`;
}

function departmentName(id) {
  return {
    engineering: "Engineering",
    ai: "AI",
    product: "Product",
    business: "Business"
  }[id] || "HTSC";
}

function header(active = "home") {
  const nav = [
    ["index", "Trang chủ", "index.html"],
    ["news", "Tin tức", "news.html"],
    ["about", "Giới thiệu", "about.html"],
    ["careers", "Tuyển dụng", "careers.html"],
    ["contact", "Liên hệ", "contact.html"]
  ];

  return `
  <a class="skip-link" href="#main-content">Bỏ qua điều hướng</a>
  <header class="site-header">
    <div class="scroll-progress" aria-hidden="true"></div>
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="HTSC trang chủ">
        <span class="brand-mark">
          <img class="brand-logo" src="${official.logo}" alt="HTSC">
        </span>
        <span class="brand-copy">
          <span class="brand-name">HTSC</span>
          <span class="brand-subtitle">Giải pháp Công nghệ</span>
        </span>
      </a>

      <button class="nav-toggle" type="button" aria-label="Mở menu" aria-expanded="false">
        ${icon("menu")}
      </button>

      <nav class="main-nav" aria-label="Điều hướng chính">
        <a class="${active === "index" ? "active" : ""}" href="index.html" data-nav-home>Trang chủ</a>
        <div class="nav-item">
          <button class="mega-trigger ${active === "solutions" || active === "solution-detail" ? "active" : ""}" type="button" data-nav-solutions>
            Giải pháp ${icon("chevron-down")}
          </button>
          <div class="mega-menu">
            <div class="mega-grid">
              <div class="mega-column">
                <span class="mega-title" data-mega-groups>Nhóm giải pháp</span>
                ${categories.map((item, i) => {
                  const keys = ["security","digital","smartcity","iot"];
                  const k = keys[i] || item.id;
                  return `<a href="solutions.html#${item.id}" data-cat-${k}>${esc(item.label)}</a>`;
                }).join("")}
              </div>
              <div class="mega-column">
                <span class="mega-title" data-mega-products>Sản phẩm nổi bật</span>
                ${products.slice(0, 5).map((item) => `<a href="solution-detail.html">${esc(item.title)}</a>`).join("")}
              </div>
              <div class="mega-column">
                <span class="mega-title" data-mega-quick>Đi nhanh</span>
                <a href="solutions.html" data-mega-all>Tất cả giải pháp</a>
                <a href="about.html" data-mega-capabilities>Năng lực công nghệ</a>
                <a href="contact.html" data-mega-consult>Yêu cầu tư vấn</a>
              </div>
              <div class="mega-image">
                Nền tảng giám sát, AI phân tích và điều hành hiện trường cho các bài toán an ninh trọng yếu.
              </div>
            </div>
          </div>
        </div>
        ${nav.slice(1).map(([id, label, href]) => {
          const dataAttr = id === "news" ? "data-nav-news" : id === "about" ? "data-nav-about" : id === "careers" ? "data-nav-careers" : id === "contact" ? "data-nav-contact" : "";
          return `<a class="${active === id ? "active" : ""}" href="${href}" ${dataAttr}>${label}</a>`;
        }).join("")}
      </nav>

      <div class="header-actions">
        <form class="site-search" role="search">
          <label class="search-control">
            ${icon("search")}
            <span class="sr-only">Tìm kiếm</span>
            <input type="search" name="q" aria-label="Tìm kiếm toàn site" placeholder="Tìm sản phẩm, tin, việc" data-search-placeholder>
          </label>
          <div class="search-results" role="listbox"></div>
        </form>
        <select class="language-switcher" aria-label="Chọn ngôn ngữ">
          <option value="vi">VI</option>
          <option value="en">EN</option>
        </select>
        <a class="cta" href="contact.html" data-cta-label>
          ${icon("send")}Tư vấn
        </a>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `
  <footer class="footer">
    <div class="container footer-top">
      <div>
        <h2>HTSC</h2>
        <p>${contact.company}. Hệ thống trình bày các nhóm giải pháp công nghệ cho an ninh, chuyển đổi số, đô thị thông minh và IoT.</p>
      </div>
      <div>
        <h3 data-footer-solutions>Giải pháp</h3>
        <ul>
          <li><a href="solutions.html#security" data-cat-security>An toàn thông tin</a></li>
          <li><a href="solutions.html#digital" data-cat-digital>Chuyển đổi số</a></li>
          <li><a href="solutions.html#smartcity" data-cat-smartcity>Thành phố thông minh</a></li>
          <li><a href="solutions.html#iot" data-cat-iot>IoT</a></li>
        </ul>
      </div>
      <div>
        <h3 data-footer-company>Công ty</h3>
        <ul>
          <li><a href="about.html" data-footer-about>Giới thiệu</a></li>
          <li><a href="news.html" data-nav-news>Tin tức</a></li>
          <li><a href="careers.html" data-nav-careers>Tuyển dụng</a></li>
          <li><a href="contact.html" data-footer-contact>Liên hệ</a></li>
        </ul>
      </div>
      <div>
        <h3 data-footer-quick>Liên hệ nhanh</h3>
        <ul>
          <li><a href="contact.html" data-footer-consult>Yêu cầu tư vấn</a></li>
          <li><a href="careers.html" data-footer-jobs>Cơ hội nghề nghiệp</a></li>
          <li><a href="news.html" data-footer-news>Tin tức hoạt động</a></li>
          <li><a href="about.html" data-footer-tech>Năng lực công nghệ</a></li>
        </ul>
      </div>
      <div>
        <h3 data-footer-connect>Kết nối</h3>
        <ul>
          <li><a href="mailto:${contact.email}">${contact.email}</a></li>
          <li><a href="tel:${contact.phoneHref}">${contact.phone}</a></li>
          <li><a href="contact.html">Sun Square, Hà Nội</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 HTSC.</span>
      <span>Giải pháp Công nghệ.</span>
    </div>
  </footer>

  <div class="floating-cta" aria-label="Liên hệ nhanh">
    <a href="tel:${contact.phoneHref}" aria-label="Gọi hotline">${icon("phone-call")}</a>
    <a href="contact.html" aria-label="Gửi liên hệ">${icon("message-circle")}</a>
  </div>

  <button class="back-to-top" type="button" aria-label="Cuộn lên đầu trang">
    ${icon("arrow-up")}
  </button>`;
}

function base({ title, description, active, bodyAttrs = "", content }) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="icon" href="${official.favicon}" type="image/svg+xml">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body${bodyAttrs ? ` ${bodyAttrs}` : ""}>
${header(active)}
  <main id="main-content" class="page-main">
${content}
  </main>
${footer()}
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

function pageHero({ number = "01", eyebrow, title, text, image, actions = "", breadcrumbs = [] }) {
  return `
    <section class="page-hero grid-lines" style="--page-hero-image: url('${image}');">
      <div class="container page-hero-grid">
        <div class="section-title">
          ${breadcrumbTrail(breadcrumbs)}
          <span class="section-number">${number}</span>
          <span class="eyebrow">${esc(eyebrow)}</span>
          <h1>${esc(title)}</h1>
          <p>${esc(text)}</p>
          ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
        </div>
        <img class="page-hero-image" src="${image}" alt="${esc(title)}" loading="lazy">
      </div>
    </section>`;
}

function consultForm(compact = false) {
  return `
    <form id="consult-form" class="form-panel" data-validate novalidate>
      <div class="form-grid">
        <div class="form-field">
          <label for="consult-name">Họ tên</label>
          <input id="consult-name" name="name" required autocomplete="name">
          <span class="field-error"></span>
        </div>
        <div class="form-field">
          <label for="consult-company">Công ty</label>
          <input id="consult-company" name="company" required autocomplete="organization">
          <span class="field-error"></span>
        </div>
        <div class="form-field">
          <label for="consult-sector">Nhu cầu</label>
          <select id="consult-sector" name="sector" required>
            <option value="">Chọn nhóm</option>
            ${categories.map((item) => `<option>${esc(item.short)}</option>`).join("")}
          </select>
          <span class="field-error"></span>
        </div>
        <div class="form-field">
          <label for="consult-phone">SĐT</label>
          <input id="consult-phone" name="phone" required inputmode="tel" autocomplete="tel">
          <span class="field-error"></span>
        </div>
        <div class="form-field full">
          <label for="consult-email">Email</label>
          <input id="consult-email" name="email" type="email" required autocomplete="email">
          <span class="field-error"></span>
        </div>
        ${compact ? "" : `<div class="form-field full">
          <label for="consult-need">Nội dung</label>
          <textarea id="consult-need" name="need" required></textarea>
          <span class="field-error"></span>
        </div>`}
      </div>
      <button class="btn" type="submit">${icon("send")}Gửi yêu cầu</button>
      <div class="form-message" role="status"></div>
    </form>`;
}

function listingControls({ label, searchId, placeholder, count, resetText = "Xóa lọc", sort = false }) {
  return `
    <div class="listing-toolbar">
      <div>
        <span class="toolbar-label">${esc(label)}</span>
        <strong data-result-count>${count}</strong>
      </div>
      <div class="listing-actions">
        <label class="inline-search" for="${searchId}">
          ${icon("search")}
          <span class="sr-only">Tìm nhanh</span>
          <input id="${searchId}" type="search" data-list-search placeholder="${esc(placeholder)}">
        </label>
        ${sort ? `<select class="sort-select" aria-label="Sắp xếp">
          <option value="newest">Thứ tự hiển thị</option>
          <option value="name">Tên A-Z</option>
        </select>` : ""}
        <button class="btn-ghost" type="button" data-reset-filters>${icon("rotate-ccw")}${esc(resetText)}</button>
      </div>
    </div>`;
}

function emptyState({ iconName = "search-x", title, text }) {
  return `
    <div class="empty-state" data-empty-state hidden>
      ${icon(iconName)}
      <h3>${esc(title)}</h3>
      <p>${esc(text)}</p>
    </div>`;
}

function indexPage() {
  const grouped = {
    security: products.filter((item) => item.category === "security").slice(0, 3),
    digital: products.filter((item) => item.category === "digital").slice(0, 3),
    smartcity: products.filter((item) => item.category === "smartcity").slice(0, 3),
    iot: products.filter((item) => item.category === "iot").slice(0, 3)
  };

  return base({
    title: "HTSC - Giải pháp Công nghệ",
    description: "HTSC với hệ sinh thái giải pháp công nghệ cho doanh nghiệp và tổ chức.",
    active: "index",
    content: `
    <section class="hero">
      <div class="swiper hero-swiper">
        <div class="swiper-wrapper">
          <article class="swiper-slide hero-slide" style="--hero-image: url('${images.hero}');">
            <div class="hero-content">
              <span class="hero-number">01</span>
              <h1>HTSC phát triển giải pháp công nghệ cho chuyển đổi số và an toàn thông tin.</h1>
              <p>HTSC là thành viên trực thuộc HTI Group, nghiên cứu và cung cấp sản phẩm, dịch vụ, giải pháp công nghệ tại Việt Nam.</p>
              <div class="hero-actions">
                <a class="btn" href="solutions.html">${icon("layers-3")}Xem giải pháp</a>
                <a class="btn-secondary" href="contact.html">${icon("calendar-check")}Liên hệ HTSC</a>
              </div>
              ${heroSignalPanel("Solution command layer")}
            </div>
          </article>
          <article class="swiper-slide hero-slide" style="--hero-image: url('${images.news}');">
            <div class="hero-content">
              <span class="hero-number">02</span>
              <h2>AI/ML, xử lý ảnh, xử lý ngôn ngữ tự nhiên và dữ liệu lớn.</h2>
              <p>Các nhóm công nghệ được HTSC dùng làm nền tảng cho sản phẩm an ninh, chuyển đổi số và thành phố thông minh.</p>
              <div class="hero-actions">
                <a class="btn" href="solution-detail.html">${icon("brain-circuit")}Xem HVideo</a>
              </div>
              ${heroSignalPanel("AI capability stack")}
            </div>
          </article>
          <article class="swiper-slide hero-slide" style="--hero-image: url('${images.career}');">
            <div class="hero-content">
              <span class="hero-number">03</span>
              <h2>Đội ngũ công nghệ đang tuyển AI, dữ liệu, phần mềm, presales và quản lý dự án.</h2>
              <p>Các vị trí tuyển dụng được lấy từ mục Tuyển dụng trên website HTSC.</p>
              <div class="hero-actions">
                <a class="btn" href="careers.html">${icon("briefcase-business")}Vị trí tuyển dụng</a>
              </div>
              ${heroSignalPanel("Talent & delivery")}
            </div>
          </article>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid" aria-label="Mốc thông tin HTSC">
          <div class="stat-item"><span class="stat-value" data-counter="2021">0</span><span class="stat-label">Năm thành lập được nêu trong tin kỷ niệm</span></div>
          <div class="stat-item"><span class="stat-value" data-counter="${categories.length}">0</span><span class="stat-label">Nhóm giải pháp chính trên website</span></div>
          <div class="stat-item"><span class="stat-value" data-counter="${products.length}" data-suffix="+">0+</span><span class="stat-label">Sản phẩm/giải pháp công khai</span></div>
          <div class="stat-item"><span class="stat-value" data-counter="2023">0</span><span class="stat-label">Top 10 ICT Việt Nam 2023</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="ecosystem">
      <div class="container ecosystem-panel">
        <div class="ecosystem-copy">
          <span class="eyebrow" data-i18n="eyebrow.ecosystem">Hệ sinh thái HTSC</span>
          <h2 data-i18n="ecosystem.title">Đồng hành cùng các đối tác, hiệp hội và sự kiện công nghệ uy tín.</h2>
          <p data-i18n="ecosystem.note">HTSC kết nối năng lực AI, an ninh và đô thị thông minh qua các hoạt động hợp tác, triển lãm chuyên ngành và hệ sinh thái công nghệ liên quan.</p>
        </div>
        <div class="partner-wall" aria-label="Đối tác, hiệp hội và sự kiện nổi bật của HTSC">
          ${ecosystemPartners.map((partner) => `
            <article class="partner-logo-card">
              <span class="partner-category">${partner.category}</span>
              <img src="${partner.logo}" alt="${partner.name}" loading="lazy" width="180" height="56">
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-muted enterprise-pathways">
      <div class="container">
        <div class="section-header">
          <span class="section-number">02</span>
          <div class="section-title">
            <span class="eyebrow">Enterprise pathways</span>
            <h2>Đi vào HTSC theo bài toán vận hành, không theo danh mục rời rạc.</h2>
            <p>Bố cục này gom các sản phẩm công khai của HTSC thành những lối vào quen thuộc với web doanh nghiệp công nghệ: an ninh, vận hành số, smart city và IoT.</p>
          </div>
          <a class="btn-secondary" href="solutions.html">${icon("arrow-right")}Mở danh mục</a>
        </div>
        <div class="pathway-grid">
          ${industryPathways.map(pathwayCard).join("")}
        </div>
      </div>
    </section>

    <section class="section section-muted grid-lines">
      <div class="container">
        <div class="section-header">
          <span class="section-number">03</span>
          <div class="section-title">
            <span class="eyebrow">Giải pháp HTSC</span>
            <h2>Bốn nhóm năng lực được tổ chức thành lưới sản phẩm.</h2>
            <p>Các tab dùng đúng tên nhóm và sản phẩm công khai trên trang giải pháp HTSC.</p>
          </div>
          <a class="btn-secondary" href="solutions.html">${icon("arrow-right")}Xem tất cả</a>
        </div>
        <div class="tabs" data-tabs>
          <div class="tab-list" role="tablist" aria-label="Nhóm giải pháp">
            ${categories.map((item, index) => `<button class="tab-button" type="button" data-tab-target="${item.id}" aria-selected="${index === 0 ? "true" : "false"}">${esc(item.short)}</button>`).join("")}
          </div>
          ${categories.map((item, index) => `
          <div class="tab-panel ${index === 0 ? "is-active" : ""}" data-tab-panel="${item.id}">
            <div class="product-grid">${(grouped[item.id] || []).map(productCard).join("")}</div>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-number">04</span>
          <div class="section-title">
            <span class="eyebrow">Năng lực công nghệ</span>
            <h2>HTSC đặt trọng tâm vào bài toán công nghệ cao của tổ chức.</h2>
            <p>Các hướng công nghệ chính trải dài từ AI/ML, xử lý ảnh, NLP đến dữ liệu lớn và nền tảng vận hành.</p>
          </div>
        </div>
        <div class="why-grid">
          <div class="icon-box reveal">${icon("scan-eye")}<strong>AI/ML</strong><span>Ứng dụng trong phân tích video, nhận diện và phát hiện đối tượng.</span></div>
          <div class="icon-box reveal">${icon("database")}<strong>Big Data</strong><span>Nền tảng cho phân tích, vận hành và quản trị dữ liệu.</span></div>
          <div class="icon-box reveal">${icon("shield-check")}<strong>Security</strong><span>Tập trung vào an ninh, an toàn thông tin và dữ liệu nghiệp vụ.</span></div>
          <div class="icon-box reveal">${icon("building-2")}<strong>Smart City</strong><span>Giải pháp cho đô thị, giao thông, công trường và hiện trường.</span></div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-number">05</span>
          <div class="section-title">
            <span class="eyebrow">Dấu mốc</span>
            <h2>Tin hoạt động và giải thưởng nổi bật.</h2>
            <p>Một số hoạt động, sự kiện và dấu mốc nổi bật của HTSC trong các năm gần đây.</p>
          </div>
          <div class="hero-actions">
            <button class="btn-secondary case-prev" type="button" aria-label="Tin trước">${icon("arrow-left")}</button>
            <button class="btn-secondary case-next" type="button" aria-label="Tin sau">${icon("arrow-right")}</button>
          </div>
        </div>
        <div class="swiper case-study-slider">
          <div class="swiper-wrapper">
            ${news.map((item) => `<article class="swiper-slide case-card">
              <img src="${item.image}" alt="${esc(item.title)}" loading="lazy">
              <div class="case-card-body">
                <div class="tag-row"><span class="tag">${esc(item.categoryLabel)}</span><span class="tag">${esc(item.date)}</span></div>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.summary)}</p>
              </div>
            </article>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-number">06</span>
          <div class="section-title">
            <span class="eyebrow">Tin tức</span>
            <h2>Cập nhật từ HTSC.</h2>
            <p>Tổng hợp một số hoạt động, sự kiện và mốc đáng chú ý của HTSC.</p>
          </div>
          <a class="btn-secondary" href="news.html">${icon("newspaper")}Xem tất cả</a>
        </div>
        <div class="news-grid">${news.slice(0, 3).map(newsCard).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="container form-band">
        <div class="section-title">
          <span class="eyebrow">Yêu cầu tư vấn</span>
          <h2>Trao đổi về giải pháp HTSC.</h2>
          <p>Để lại nhu cầu để đội ngũ HTSC kết nối và tư vấn theo nhóm giải pháp phù hợp.</p>
          <p class="prototype-note">${icon("check-circle")}Hotline: ${contact.phone}. Email: ${contact.email}.</p>
        </div>
        ${consultForm()}
      </div>
    </section>

    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-number">07</span>
          <div class="section-title">
            <span class="eyebrow">Văn phòng</span>
            <h2>${contact.address}.</h2>
            <p>Không gian làm việc và điểm kết nối trực tiếp của đội ngũ HTSC tại Hà Nội.</p>
          </div>
        </div>
        <iframe class="map-frame" title="Bản đồ HTSC Sun Square" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${contact.map}"></iframe>
      </div>
    </section>`
  });
}

function solutionsPage() {
  return base({
    title: "Giải pháp HTSC",
    description: "Danh sách giải pháp công nghệ của HTSC.",
    active: "solutions",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Giải pháp",
      title: "Danh mục sản phẩm và giải pháp HTSC.",
      text: "Lọc theo nhóm An ninh - An toàn thông tin, Chuyển đổi số, Thành phố thông minh và IoT.",
      image: products[1].image,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Giải pháp" }]
    })}
    <section class="section">
      <div class="container listing-layout" data-product-listing data-listing>
        <aside class="filter-sidebar">
          <div class="filter-group">
            <h3>Nhóm giải pháp</h3>
            <div class="check-list">
              ${categories.map((item) => `<label><input class="filter-check" type="checkbox" name="category" value="${item.id}"> ${esc(item.short)}</label>`).join("")}
            </div>
          </div>
          <div class="filter-group">
            <h3>Danh mục</h3>
            <p class="prototype-note">${icon("sliders-horizontal")}Lọc nhanh theo nhóm giải pháp để tìm đúng sản phẩm phù hợp.</p>
          </div>
        </aside>
        <div>
          ${listingControls({
            label: "Danh mục giải pháp",
            searchId: "solution-search",
            placeholder: "Tìm HVideo, AI, IoT...",
            count: `${products.length} giải pháp`,
            sort: true
          })}
          <div class="product-grid">
            ${products.map(productCard).join("")}
          </div>
          ${emptyState({
            title: "Không có giải pháp phù hợp",
            text: "Thử xóa bộ lọc hoặc nhập từ khóa rộng hơn để xem lại danh mục."
          })}
          <div class="pagination" aria-label="Phân trang minh họa">
            <button type="button" class="is-active">1</button>
            <button type="button">2</button>
            <button type="button">${icon("arrow-right")}</button>
          </div>
        </div>
      </div>
    </section>`
  });
}

function solutionDetailPage() {
  const product = products[0];
  return base({
    title: `${product.title} - HTSC`,
    description: "Trang chi tiết giải pháp của HTSC.",
    active: "solution-detail",
    bodyAttrs: `data-product-name="${esc(product.title)}"`,
    content: `
    <section class="product-hero" style="--product-hero-image: url('${images.about}');">
      <div class="container product-hero-inner">
        <div>
          ${breadcrumbTrail([{ label: "Trang chủ", href: "index.html" }, { label: "Giải pháp", href: "solutions.html" }, { label: product.title }])}
          <div class="tag-row"><span class="tag">${categoryLabel(product.category)}</span><span class="tag">${esc(product.tag)}</span></div>
          <h1>${esc(product.title)}</h1>
          <p>${esc(product.summary)}</p>
          <div class="hero-actions">
            <a class="btn" href="contact.html">${icon("calendar-check")}Yêu cầu tư vấn</a>
          </div>
        </div>
        <img src="${product.image}" alt="${esc(product.title)}" loading="lazy">
      </div>
    </section>
    <section class="section">
      <div class="container detail-layout">
        <article>
          <div class="detail-tabs tabs" data-tabs>
            <div class="tab-list" role="tablist" aria-label="Nội dung chi tiết">
              <button class="tab-button" type="button" data-tab-target="overview" aria-selected="true">Tổng quan</button>
              <button class="tab-button" type="button" data-tab-target="features" aria-selected="false">Tính năng</button>
              <button class="tab-button" type="button" data-tab-target="specs" aria-selected="false">Thông tin</button>
            </div>
            <div class="detail-panel tab-panel is-active" data-tab-panel="overview">
              <h2>HVideo phục vụ nghiệp vụ trích xuất và khôi phục video.</h2>
              <p>Giải pháp được tổ chức theo cấu trúc B2B rõ ràng: bài toán vận hành, tính năng cốt lõi, thông tin kỹ thuật và luồng liên hệ tư vấn.</p>
              <ul class="feature-list">
                ${product.features.map((item) => `<li>${icon("check-circle")}<span>${esc(item)}</span></li>`).join("")}
              </ul>
            </div>
            <div class="detail-panel tab-panel" data-tab-panel="features">
              <div class="feature-grid">
                <div class="feature-item">${icon("hard-drive")}<h3>Thiết bị lưu trữ</h3><p>Hỗ trợ làm việc với ổ cứng, DVR và các thiết bị có dữ liệu video cần xử lý.</p></div>
                <div class="feature-item">${icon("refresh-ccw")}<h3>Khôi phục</h3><p>Hỗ trợ xử lý tệp video bị lỗi, thất lạc hoặc không mở được.</p></div>
                <div class="feature-item">${icon("shield")}<h3>Nghiệp vụ</h3><p>Phù hợp môi trường cần kiểm tra, phục hồi và phân tích video có kiểm soát.</p></div>
                <div class="feature-item">${icon("file-search")}<h3>Báo cáo</h3><p>Hỗ trợ trình bày thông tin phục vụ đánh giá, lưu hồ sơ và ra quyết định.</p></div>
              </div>
            </div>
            <div class="detail-panel tab-panel" data-tab-panel="specs">
              <table class="specs-table">
                <tr><th>Sản phẩm</th><td>${esc(product.title)}</td></tr>
                <tr><th>Nhóm</th><td>${categoryLabel(product.category)}</td></tr>
                <tr><th>Thẻ giải pháp</th><td>${esc(product.tag)}</td></tr>
                <tr><th>Liên hệ</th><td>${contact.phone} · ${contact.email}</td></tr>
              </table>
            </div>
          </div>
        </article>
        <aside class="side-panel">
          <div class="side-box">
            <h3>Tư vấn sản phẩm</h3>
            <p>Điền nhu cầu để đội ngũ HTSC có thể trao đổi sâu hơn về bài toán và giải pháp phù hợp.</p>
            ${consultForm(true)}
          </div>
          <div class="side-box">
            <h3>Giải pháp liên quan</h3>
            <ul>
              ${products.slice(1, 5).map((item) => `<li><a href="solution-detail.html">${esc(item.title)}</a></li>`).join("")}
            </ul>
          </div>
        </aside>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-number">03</span>
          <div class="section-title">
            <span class="eyebrow">Liên quan</span>
            <h2>Sản phẩm gần nhóm HVideo.</h2>
          </div>
        </div>
        <div class="related-grid">${products.slice(1, 4).map(productCard).join("")}</div>
      </div>
    </section>`
  });
}

function newsPage() {
  return base({
    title: "Tin tức HTSC",
    description: "Tin tức và hoạt động nổi bật của HTSC.",
    active: "news",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Tin tức",
      title: "Hoạt động, sự kiện và giải thưởng HTSC.",
      text: "Tổng hợp các hoạt động, sự kiện và dấu mốc đáng chú ý của HTSC.",
      image: images.news,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Tin tức" }]
    })}
    <section class="section">
      <div class="container" data-listing>
        ${listingControls({
          label: "Bộ lọc tin tức",
          searchId: "news-search",
          placeholder: "Tìm sự kiện, giải thưởng...",
          count: `${news.length} tin`
        })}
        <div class="job-filter" data-category-filter=".news-card">
          <button class="category-button is-active" type="button" data-category="all">Tất cả</button>
          <button class="category-button" type="button" data-category="event">Sự kiện</button>
          <button class="category-button" type="button" data-category="company">Công ty</button>
          <button class="category-button" type="button" data-category="award">Giải thưởng</button>
        </div>
        <div class="news-grid">${news.map(newsCard).join("")}</div>
        ${emptyState({
          title: "Không có tin phù hợp",
          text: "Thử chọn lại chuyên mục hoặc dùng từ khóa khác."
        })}
      </div>
    </section>`
  });
}

function newsDetailPage() {
  const item = news[0];
  return base({
    title: `${item.title} - HTSC`,
    description: "Bài viết chi tiết trong chuyên mục hoạt động của HTSC.",
    active: "news",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: item.categoryLabel,
      title: item.title,
      text: `${item.date}. Một số điểm chính được trình bày ngắn gọn để thuận tiện theo dõi trong giao diện.`,
      image: item.image,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Tin tức", href: "news.html" }, { label: item.categoryLabel }]
    })}
    <section class="section">
      <div class="container article-layout">
        <article class="article">
          <p>Ngày 07/08/2025, HTSC được nhắc đến trong hội thảo về hệ sinh thái giám sát thông minh cùng Motorola Solutions, N-TEK Distribution và HTI Group. Nội dung nổi bật là cách AI hỗ trợ phân tích và vận hành giám sát an ninh.</p>
          <h2>Điểm chính</h2>
          <ul>
            <li>HTSC trình bày hướng ứng dụng AI vào giám sát an ninh.</li>
            <li>Bối cảnh sự kiện gắn với hệ sinh thái giám sát thông minh.</li>
            <li>Nội dung có liên hệ chặt với nhóm sản phẩm Smart Fusion, HVideo và HVis.</li>
          </ul>
          <img src="${products[1].image}" alt="Smart Fusion" loading="lazy">
          <h2>Liên hệ với nhóm giải pháp</h2>
          <p>Bài viết giúp kết nối ngữ cảnh truyền thông với các nhóm giải pháp về an ninh, phân tích video và đô thị thông minh.</p>
          <div class="share-buttons">
            <a class="btn-secondary" href="news.html">${icon("arrow-left")}Tin khác</a>
          </div>
        </article>
        <aside class="side-panel">
          <div class="side-box">
            <h3>Tin liên quan</h3>
            <ul>${news.slice(1, 5).map((post) => `<li><a href="news-detail.html">${esc(post.title)}</a></li>`).join("")}</ul>
          </div>
          <div class="side-box">
            <h3>Nhóm giải pháp liên quan</h3>
            <p>Smart Fusion, HVideo và HVis đều thuộc hướng phân tích video, an ninh và đô thị thông minh.</p>
          </div>
        </aside>
      </div>
    </section>`
  });
}

function aboutPage() {
  return base({
    title: "Giới thiệu HTSC",
    description: "Thông tin giới thiệu và năng lực công nghệ của HTSC.",
    active: "about",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Về HTSC",
      title: "Thành viên HTI Group, tập trung vào sản phẩm và giải pháp công nghệ.",
      text: "HTSC nghiên cứu, phát triển và cung cấp sản phẩm, dịch vụ, giải pháp công nghệ, với nền tảng AI/ML, xử lý ảnh, xử lý ngôn ngữ tự nhiên và dữ liệu lớn.",
      image: images.about,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Giới thiệu" }]
    })}
    <section class="section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-item reveal">${icon("target")}<h3>Tầm nhìn</h3><p>Trở thành nhà cung cấp sản phẩm, dịch vụ và giải pháp công nghệ hàng đầu Việt Nam, phát huy trí tuệ Việt ra thế giới.</p></div>
          <div class="mission-item reveal">${icon("network")}<h3>Sứ mệnh</h3><p>Kết nối nhân tài và tri thức công nghệ để giải quyết bài toán an ninh thông tin, chuyển đổi số tại Việt Nam và quốc tế.</p></div>
          <div class="mission-item reveal">${icon("brain")}<h3>Nền tảng</h3><p>AI/ML, xử lý ảnh, NLP và dữ liệu lớn là các hướng công nghệ được nhắc trong trang giới thiệu.</p></div>
          <div class="mission-item reveal">${icon("users")}<h3>Con người</h3><p>HTSC nhấn mạnh môi trường trẻ, năng động, nhiều thử thách và định hướng phát triển công nghệ.</p></div>
        </div>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-number">02</span>
          <div class="section-title">
            <span class="eyebrow">Recognition</span>
            <h2>Các dấu mốc giúp củng cố niềm tin doanh nghiệp.</h2>
            <p>Trang giới thiệu cần cho người xem thấy nhanh năng lực, hệ sinh thái và các mốc được ghi nhận trước khi đi sâu vào sản phẩm.</p>
          </div>
        </div>
        <div class="trust-grid">
          ${trustBadges.map((item) => `<article class="trust-card reveal">${icon(item.icon)}<h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section section-muted grid-lines">
      <div class="container">
        <div class="section-header">
          <span class="section-number">03</span>
          <div class="section-title">
            <span class="eyebrow">Timeline</span>
            <h2>Dấu mốc công khai.</h2>
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-year">2021</span><div><h3>Thành lập HTSC</h3><p>Mốc 21/10/2021 được nêu trong bài kỷ niệm 3 năm thành lập.</p></div></div>
          <div class="timeline-item"><span class="timeline-year">2022</span><div><h3>Sao Khuê 2022</h3><p>Hệ thống giám sát công trường tự động của HTI Group được vinh danh tại Sao Khuê 2022.</p></div></div>
          <div class="timeline-item"><span class="timeline-year">2023</span><div><h3>Top 10 ICT Việt Nam</h3><p>HTSC được công bố trong Top 10 Doanh nghiệp Công nghệ số xuất sắc Việt Nam 2023.</p></div></div>
          <div class="timeline-item"><span class="timeline-year">2024</span><div><h3>Smart City Asia 2024</h3><p>HTSC giới thiệu các giải pháp AI cho đô thị thông minh tại sự kiện Smart City Asia 2024.</p></div></div>
          <div class="timeline-item"><span class="timeline-year">2025</span><div><h3>Hội thảo giám sát thông minh</h3><p>HTSC giới thiệu hướng AI trong giám sát an ninh cùng hệ sinh thái Motorola Solutions và HTI Group.</p></div></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-number">04</span>
          <div class="section-title">
            <span class="eyebrow">Sản phẩm</span>
            <h2>Những nhóm giải pháp đang được công bố.</h2>
          </div>
        </div>
        <div class="feature-grid">
          ${categories.map((item) => `<div class="feature-item reveal">${icon("layers-3")}<h3>${esc(item.short)}</h3><p>${esc(item.description)}</p></div>`).join("")}
        </div>
      </div>
    </section>`
  });
}

function careersPage() {
  return base({
    title: "Tuyển dụng HTSC",
    description: "Cơ hội nghề nghiệp tại HTSC.",
    active: "careers",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Tuyển dụng",
      title: "Cơ hội nghề nghiệp tại HTSC.",
      text: "Các vị trí tập trung vào AI, dữ liệu, phần mềm, presales, sản phẩm và quản lý dự án.",
      image: images.career,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Tuyển dụng" }]
    })}
    <section class="section">
      <div class="container" data-listing>
        ${listingControls({
          label: "Vị trí đang mở",
          searchId: "career-search",
          placeholder: "Tìm AI, Data, DevOps...",
          count: `${jobs.length} vị trí`
        })}
        <div class="job-filter" data-category-filter=".job-card">
          <button class="category-button is-active" type="button" data-category="all">Tất cả</button>
          <button class="category-button" type="button" data-category="engineering">Engineering</button>
          <button class="category-button" type="button" data-category="ai">AI</button>
          <button class="category-button" type="button" data-category="product">Product</button>
          <button class="category-button" type="button" data-category="business">Business</button>
        </div>
        <div class="job-list">${jobs.map(jobCard).join("")}</div>
        ${emptyState({
          title: "Không có vị trí phù hợp",
          text: "Thử đổi nhóm nghề nghiệp hoặc tìm bằng từ khóa rộng hơn."
        })}
      </div>
    </section>
    <section class="section section-muted">
      <div class="container form-band">
        <div class="section-title">
          <span class="eyebrow">Ứng tuyển nhanh</span>
          <h2>Gửi thông tin ứng tuyển.</h2>
          <p>Điền nhanh các thông tin cơ bản để khởi động trao đổi với đội ngũ tuyển dụng.</p>
        </div>
        <form class="form-panel" data-validate novalidate>
          <div class="form-grid">
            <div class="form-field"><label for="apply-name">Họ tên</label><input id="apply-name" required autocomplete="name"><span class="field-error"></span></div>
            <div class="form-field"><label for="apply-phone">Điện thoại</label><input id="apply-phone" name="phone" required inputmode="tel"><span class="field-error"></span></div>
            <div class="form-field full"><label for="apply-email">Email</label><input id="apply-email" type="email" required autocomplete="email"><span class="field-error"></span></div>
            <div class="form-field full"><label for="apply-role">Vị trí quan tâm</label><select id="apply-role" required><option value="">Chọn vị trí</option>${jobs.slice(0, 8).map((job) => `<option>${esc(job.title)}</option>`).join("")}</select><span class="field-error"></span></div>
          </div>
          <button class="btn" type="submit">${icon("send")}Gửi thông tin</button>
          <div class="form-message" role="status"></div>
        </form>
      </div>
    </section>`
  });
}

function careerDetailPage() {
  const job = jobs[0];
  return base({
    title: `${job.title} - Tuyển dụng HTSC`,
    description: "Trang chi tiết vị trí Data Engineer tại HTSC.",
    active: "careers",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Tuyển dụng",
      title: job.title,
      text: job.summary,
      image: images.career,
      actions: "",
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Tuyển dụng", href: "careers.html" }, { label: job.title }]
    })}
    <section class="section">
      <div class="container article-layout">
        <article class="article">
          <div class="meta-row"><span class="meta">${esc(job.location)}</span><span class="meta">${esc(job.type)}</span><span class="meta">${departmentName(job.department)}</span></div>
          <h2>Mô tả vị trí</h2>
          <p>HTSC tuyển Data Engineer để đáp ứng nguồn lực mở rộng phát triển sản phẩm. Vị trí tập trung vào phát triển và quản lý thu thập dữ liệu lớn, phục vụ các sản phẩm và hệ thống dữ liệu.</p>
          <h2>Trọng tâm công việc</h2>
          <ul>
            <li>Thiết kế và vận hành luồng thu thập dữ liệu lớn.</li>
            <li>Phối hợp với đội sản phẩm, AI và phần mềm để đưa dữ liệu vào hệ thống.</li>
            <li>Đảm bảo dữ liệu có thể được khai thác ổn định cho phân tích và vận hành.</li>
          </ul>
          <h2>Ứng tuyển</h2>
          <p>Ứng viên có thể để lại thông tin để đội ngũ tuyển dụng kết nối và trao đổi thêm về vai trò phù hợp.</p>
        </article>
        <aside class="side-panel">
          <div class="side-box side-box--apply">
            <div class="quick-apply-header">
              <span class="quick-apply-kicker" data-i18n="careers.apply.eyebrow">Ứng tuyển</span>
              <h3 data-i18n="careers.apply.title">Nộp hồ sơ nhanh</h3>
              <p data-i18n="careers.apply.desc">Điền thông tin cơ bản, HTSC sẽ liên hệ lại để trao đổi chi tiết.</p>
            </div>
            <form class="form-panel form-panel--apply" data-validate novalidate>
              <div class="form-grid">
                <div class="form-field full"><label for="candidate-name" data-i18n="apply.name">Họ tên</label><input id="candidate-name" required autocomplete="name" placeholder="Nguyễn Văn A" data-i18n="apply.name.placeholder"><span class="field-error"></span></div>
                <div class="form-field full"><label for="candidate-email" data-i18n="apply.email">Email</label><input id="candidate-email" type="email" required autocomplete="email" placeholder="ban@congty.com" data-i18n="apply.email.placeholder"><span class="field-error"></span></div>
                <div class="form-field full"><label for="candidate-phone" data-i18n="apply.phone">Điện thoại</label><input id="candidate-phone" name="phone" required inputmode="tel" placeholder="090 123 4567" data-i18n="apply.phone.placeholder"><span class="field-error"></span></div>
                <div class="form-field full"><label for="candidate-note" data-i18n="apply.note.optional">Ghi chú (tuỳ chọn)</label><textarea id="candidate-note" placeholder="Kinh nghiệm hoặc vị trí bạn muốn tìm hiểu thêm" data-i18n="apply.note.placeholder"></textarea><span class="field-error"></span></div>
              </div>
              <button class="btn quick-apply-submit" type="submit" data-i18n="apply.submit">${icon("send")}Gửi ứng tuyển</button>
              <p class="quick-apply-note" data-i18n="apply.response">Phản hồi qua email hoặc điện thoại bạn cung cấp.</p>
              <div class="form-message" role="status"></div>
            </form>
          </div>
          <div class="side-box">
            <h3>Vị trí khác</h3>
            <ul>${jobs.slice(1, 6).map((item) => `<li><a href="career-detail.html">${esc(item.title)}</a></li>`).join("")}</ul>
          </div>
        </aside>
      </div>
    </section>`
  });
}

function contactPage() {
  return base({
    title: "Liên hệ HTSC",
    description: "Thông tin liên hệ chính thức của HTSC.",
    active: "contact",
    content: `
    ${pageHero({
      number: "01",
      eyebrow: "Liên hệ",
      title: contact.company,
      text: contact.address,
      image: images.logoSocial,
      actions: `<a class="btn" href="tel:${contact.phoneHref}">${icon("phone-call")}${contact.phone}</a>`,
      breadcrumbs: [{ label: "Trang chủ", href: "index.html" }, { label: "Liên hệ" }]
    })}
    <section class="section">
      <div class="container office-grid">
        <article class="office-card reveal">${icon("map-pin")}<h3>Trụ sở chính</h3><p>${contact.address}</p></article>
        <article class="office-card reveal">${icon("phone")}<h3>Hotline</h3><p><a href="tel:${contact.phoneHref}">${contact.phone}</a></p></article>
        <article class="office-card reveal">${icon("mail")}<h3>Email</h3><p><a href="mailto:${contact.email}">${contact.email}</a></p></article>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-number">02</span>
          <div class="section-title">
            <span class="eyebrow">Quy trình tư vấn</span>
            <h2>Từ nhu cầu ban đầu đến hướng giải pháp rõ ràng.</h2>
            <p>Luồng liên hệ được trình bày gọn để khách hàng doanh nghiệp hiểu bước tiếp theo sau khi gửi yêu cầu.</p>
          </div>
        </div>
        <div class="process-grid">
          ${engagementSteps.map((item, index) => `<article class="process-card reveal" style="--reveal-index: ${index};"><span>${String(index + 1).padStart(2, "0")}</span>${icon(item.icon)}<h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container form-band">
        <div class="section-title">
          <span class="eyebrow">Gửi liên hệ</span>
          <h2>Gửi yêu cầu tư vấn.</h2>
          <p>Để lại nhu cầu để HTSC kết nối, tư vấn và sắp xếp hướng làm việc phù hợp.</p>
        </div>
        ${consultForm()}
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-number">04</span>
          <div class="section-title">
            <span class="eyebrow">Bản đồ</span>
            <h2>Sun Square, 21 Lê Đức Thọ, Hà Nội.</h2>
          </div>
        </div>
        <iframe class="map-frame" title="Bản đồ trụ sở HTSC" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${contact.map}"></iframe>
      </div>
    </section>`
  });
}

const mainJs = fs.readFileSync("assets/js/main.js", "utf8");

const pages = {
  "index.html": indexPage(),
  "solutions.html": solutionsPage(),
  "solution-detail.html": solutionDetailPage(),
  "news.html": newsPage(),
  "news-detail.html": newsDetailPage(),
  "about.html": aboutPage(),
  "careers.html": careersPage(),
  "career-detail.html": careerDetailPage(),
  "contact.html": contactPage()
};

for (const [file, content] of Object.entries(pages)) {
  fs.writeFileSync(file, content, "utf8");
}

fs.mkdirSync("assets/js", { recursive: true });
fs.writeFileSync("assets/js/main.js", mainJs, "utf8");

console.log(`Generated ${Object.keys(pages).length} pages and assets/js/main.js`);

