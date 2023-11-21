class Footer extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
this.innerHTML = ` <!-- ======= Footer ======= -->
<footer id="footer" class="footer">

<div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>ประเมินร้านอาหาร</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="globe2"><i class="bi bi-globe2"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 text-md-start">
          <h3>ติดต่อเรา</h3>
          <p>
          <i class="bi bi-globe2"></i>&nbsp; 222 มหาวิทยาลัยวลัยลักษณ์ ต.ไทยบุรี อ.ท่าศาลา จ.นครศรีธรรมราช 80160<br>
          <i class="bi bi-telephone"></i>&nbsp; โทร. 0-7567-3000<br>
          <i class="bi bi-printer"></i>&nbsp; แฟกซ์ 0-7567-3708<br>
          <i class="bi bi-envelope"></i>&nbsp; อีเมล wu@wu.ac.th<br>
          </p>
        </div>

        
        <div class="col-lg-4 col-md-12 text-md-start">
        <h3>แผนที่</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5243806847584!2d99.89478747576226!3d8.641573594931582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053a1796fcd307f%3A0x7aadb40e612ebad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lin4Lil4Lix4Lii4Lil4Lix4LiB4Lip4LiT4LmM!5e0!3m2!1sth!2sth!4v1681903670583!5m2!1sth!2sth"
          width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


      </div>
    </div>

  <hr>
  <div class="container mt-4">
    <div class="copyright">
      &copy; Copyright <strong><span>Wu-assessment</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed by <b>ITD Team Dev</b>
    </div>
  </div>

</footer><!-- End Footer -->
<!-- End Footer --> `;

}
}

customElements.define('footer-components', Footer);