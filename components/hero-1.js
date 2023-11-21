class Hero extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
this.innerHTML = ` <!-- ======= Hero Section ======= -->
<section id="hero" class="hero">
<!-- ======= Breadcrumbs ======= -->
<div class="breadcrumbs">
    <div class="page-header d-flex align-items-center" style="background-image: url('');">
        <div class="container position-relative">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6 text-center">
                    <h2>เจ้าหน้าที่</h2>
                    <p>ใช้สำหรับดูข้อมูล เพิ่ม ลบ หรือแก้ไข้ข้อมูลร้านอาหาร หรือ ข้อมูลของผู้บริหาร</p>
                </div>
            </div>
        </div>
    </div>
</div><!-- End Breadcrumbs -->

    <div class="icon-boxes position-relative">
        <div class="container position-relative">
            <div class="row gy-4 mt-5">

                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-box">
                        <div class="icon"><img src="https://cdn-icons-png.flaticon.com/512/1970/1970065.png" alt=""
                                style="width:45%"></div>
                        <p style="font-size: 15px" class="title"><a onclick="btn1()" href="./charts_admin.html" class="
                        stretched-link">แอดมิน</a></p>
                    </div>
                </div><!--End Icon Box -->

                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                        <div class="icon"><img src="https://cdn-icons-png.flaticon.com/512/1970/1970069.png" alt=""
                                style="width:45%"></div>
                        <p style="font-size: 15px" class="title"><a onclick="btn2()" href="./dashboard.html" class="stretched-link">
                        ตารางเปรียบเทียบ</a>
                        </p>
                    </div>
                </div><!--End Icon Box -->

                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <div class="icon"><img
                                src="https://cdn-icons-png.flaticon.com/512/7480/7480700.png"
                                alt="" style="width:45%"></div>
                        <p style="font-size: 15px" class="title"><a onclick="btn4()" href="./admin_bi.html"
                                class="stretched-link">ข้อมูลร้านอาหาร</a>
                        </p>
                    </div>
                </div>
                
                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                        <div class="icon"><img src="https://cdn-icons-png.flaticon.com/512/4689/4689670.png" alt=""
                                style="width:45%"></div>
                        <p style="font-size: 15px" class="title"><a onclick="btn3()" href="./restaurants.html" class="stretched-link">
                        ร้านอาหาร</a>
                        </p>
                    </div>
                </div><!--End Icon Box -->

                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <div class="icon"><img
                                src="https://cdn-icons-png.flaticon.com/512/4793/4793060.png"
                                alt="" style="width:45%"></div>
                        <p style="font-size: 15px" class="title"><a onclick="btn4()" href="./generate.html"
                                class="stretched-link">ลงทะเบียนผู้ใช้งาน</a>
                        </p>
                    </div>
                </div>

                <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <div class="icon"><img
                                src="https://cdn-icons-png.flaticon.com/512/4536/4536970.png"
                                alt="" style="width:45%"></div>
                        <p style="font-size: 15px" class="title" ><a onclick="btn4()" href="./account.html"
                                class="stretched-link">ตั้งค่าบัญชีผู้ใช้งาน</a>
                        </p>
                    </div>
                </div>

                <!--End Icon Box -->

            </div>
        </div>
    </div>

    </div>
</section>
<!-- End Hero Section -->`;

}
}

customElements.define('hero_1-components', Hero);