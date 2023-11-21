class Navbar extends HTMLElement {
constructor() {
    super();
    }

    connectedCallback() {
    this.innerHTML = `     <!-- ======= Header ======= -->
    <section id="topbar" class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope d-flex align-items-center"><a
                        href="mailto:contact@example.com">contact@example.com</a></i>
                <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div class="social-links d-none d-md-flex align-items-center">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
            </div>
        </div>
    </section>
    <!-- End Top Bar -->

    <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <h1>Assessment<span> Wu</span></h1>
            </a>
            <nav id="navbar" class="navbar" style="text-align: left;">
                <ul>
                    <li><a href="../../index.html"><i class="fas fa-home"></i>&nbsp; หน้าหลัก &nbsp;</a></li>
                    <li><a href="#"><i class="fas fa-info-circle"></i>&nbsp; เกี่ยวกับ &nbsp;</a></li>
                    <li><a href="#"><i class="fas fa-tachometer-alt"></i>&nbsp; แดชบอร์ด &nbsp;</a></li>
                    
                    <li>
                        <div class="dropdown text-end">
                            <a href="#" class="d-block text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span id="profileName" style="font-size:15px;">
                                frolife
                                </span>
                                <img id="profileImg" src="https://cdn-icons-png.flaticon.com/512/4461/4461808.png" alt="mdo" width="35" class="rounded-circle">
                            </a>
                            <ul class="dropdown-menu text-small">
                                <li><a class="dropdown-item" href="#" onclick="logout();"><i class="fas fa-sign-out-alt"></i> ลงชื่อออก</a></li>
                                <li><a class="dropdown-item" href="#" onclick=";"><i class="fas fa-cog"></i> ตั้งค่า</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <!-- .navbar -->
            
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
    </header>
    <!-- End Header --> `;

    }
}

customElements.define('navbar_1-components', Navbar);