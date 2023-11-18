<template>
    <div class="page-wrapper"> 
  
 
  <div class="search-backdrop"></div>
  <!-- Main Header-->
  <header class="main-header header-style-two">
      <!-- Header Upper -->
      <div class="header-upper">        
          <div class="auto-container">
              <!-- Main Box -->
              <div class="main-box clearfix">
                  <!--Logo-->
                  <div class="logo-box">
                       <div class="logo"><router-link to="/" title="Treker"><img src="@/assets/images/logo.svg" alt="" title="Treker"></router-link></div>
                  </div>

                  <div class="nav-box clearfix">
                      <!--Nav Outer-->
                      <div class="nav-outer clearfix">         
                          <nav class="main-menu">
                              <ul class="navigation clearfix">
                                  <li class="dropdown"><router-link to="/">Home</router-link>
                                      <ul>
                                          <li><router-link to="/">Home 01</router-link></li>
                                          <li><router-link to="index_2">Home 02</router-link></li>
                                      </ul>
                                  </li>
                                  <li class="current dropdown"><router-link to="about">About Us</router-link>
                                      <ul>
                                          <li><router-link to="team">Our Team</router-link></li>
                                          <li><router-link to="team_member">Team Member</router-link></li>
                                          <li><router-link to="faq">FAQs</router-link></li>
                                          <li><router-link to="gallery">Gallery</router-link></li>
                                      </ul>
                                  </li>
                                  <li class="dropdown"><router-link to="shop">Shop</router-link>
                                      <ul>
                                          <li><router-link to="shop">Our Shop</router-link></li>
                                          <li><router-link to="product_single">Product Details</router-link></li>
                                          <li><router-link to="wishlist">My Wishlist</router-link></li>
                                          <li><router-link to="shopping_cart">Shopping Cart</router-link></li>
                                          <li><router-link to="checkout">Checkout</router-link></li>
                                          <li><router-link to="signup">Signup</router-link></li>
                                          <li><router-link to="login">Login</router-link></li>
                                          <li><router-link to="reset_password">Forgot Password</router-link></li>
                                      </ul>
                                  </li>
                                  <li><router-link to="destinations">Destinations</router-link></li>
                                  <li><router-link to="trekking">Trekking</router-link></li>
                                  <li class="dropdown"><router-link to="/">Pages</router-link>
                                      <ul>
                                          <li><router-link to="activities">Activities</router-link></li>
                                          <li><router-link to="destinations_2">Destinations 02</router-link></li>
                                          <li><router-link to="tours">Tours</router-link></li>
                                          <li><router-link to="packages">Packages 01</router-link></li>
                                          <li><router-link to="packages_2">Packages 02</router-link></li>
                                          <li><router-link to="booking">Booking</router-link></li>
                                          <li><router-link to="terms_conditions">Terms & Conditions</router-link></li>
                                          <li><router-link to="error_page">404 Page</router-link></li>
                                      </ul>
                                  </li>
                                  <li class="dropdown"><router-link to="blog">News</router-link>
                                      <ul>
                                          <li><router-link to="blog">Our Blog</router-link></li>
                                          <li><router-link to="blog_2">Blog Classic</router-link></li>
                                          <li><router-link to="blog_single">Blog Details</router-link></li>
                                      </ul>
                                  </li>
                                  <li><router-link to="contact">Contact</router-link></li>
                              </ul>
                          </nav>
                          <!-- Main Menu End-->
                      </div>
                      <!--Nav Outer End-->

                      <div class="links-box clearfix">
                          <div class="link search-btn search-toggle"><span class="icon far fa-search"></span></div>
                          <div class="link fav-btn"><router-link to="/"><span class="icon far fa-heart"></span><span class="count">02</span></router-link></div>
                          <div class="link cart-btn"><router-link to="/" class="clearfix"><div class="cart-info"><span class="icon far fa-shopping-cart"></span>00 Items</div></router-link></div>
                      </div>

                      <!-- Hidden Nav Toggler -->
                      <div class="nav-toggler">
                          <button class="hidden-bar-opener"><span class="icon"><img src="@/assets/images/icons/menu-icon.svg" alt=""></span></button>
                      </div>

                  </div>

                  <!-- End Header Upper -->
                  <div class="search-box">
                      <div class="outer-container">
                          <div class="inner-box">
                              <div class="form-box">
                                  <div class="s-close-btn"><span class="icon far fa-times"></span></div>
                                  <span class="s-icon fa fa-search"></span>
                                  <form method="post" action="index">
                                      <div class="form-group">
                                          <input type="search" name="search" value="" placeholder="Search Here" required="">
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </header>
  <!--End Main Header -->

  <!--Search Backdrop-->
  <div class="search-backdrop"></div>

  
  <!--Menu Backdrop-->
  <div class="menu-backdrop"></div>

  <!-- Hidden Navigation Bar -->
  <section class="hidden-bar">
      <!-- Hidden Bar Wrapper -->
      <div class="hidden-bar-wrapper">
          <div class="hidden-bar-closer"><span class="icon"><svg class="icon-close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg></span></div>
          <div class="nav-logo-box">
              <div class="logo"><router-link to="/" title="Treker"><img src="@/assets/images/logo.svg" alt="" title="Treker"></router-link></div>
          </div>
          <!-- .Side-menu -->
          <div class="side-menu">
               <ul class="navigation clearfix">
                  <li class="dropdown"><router-link to="/">Home</router-link>
                      <ul>
                          <li><router-link to="/">Home 01</router-link></li>
                          <li><router-link to="index_2">Home 02</router-link></li>
                      </ul>
                  </li>
                  <li class="current dropdown"><router-link to="about">About Us</router-link>
                      <ul>
                          <li><router-link to="team">Our Team</router-link></li>
                          <li><router-link to="team_member">Team Member</router-link></li>
                          <li><router-link to="faq">FAQs</router-link></li>
                          <li><router-link to="gallery">Gallery</router-link></li>
                      </ul>
                  </li>
                  <li class="dropdown"><router-link to="shop">Shop</router-link>
                      <ul>
                          <li><router-link to="shop">Our Shop</router-link></li>
                          <li><router-link to="product_single">Product Details</router-link></li>
                          <li><router-link to="wishlist">My Wishlist</router-link></li>
                          <li><router-link to="shopping_cart">Shopping Cart</router-link></li>
                          <li><router-link to="checkout">Checkout</router-link></li>
                          <li><router-link to="signup">Signup</router-link></li>
                          <li><router-link to="login">Login</router-link></li>
                          <li><router-link to="reset_password">Forgot Password</router-link></li>
                      </ul>
                  </li>
                  <li><router-link to="destinations">Destinations</router-link></li>
                  <li><router-link to="trekking">Trekking</router-link></li>
                  <li class="dropdown"><router-link to="/">Pages</router-link>
                      <ul>
                          <li><router-link to="activities">Activities</router-link></li>
                          <li><router-link to="destinations_2">Destinations 02</router-link></li>
                          <li><router-link to="tours">Tours</router-link></li>
                          <li><router-link to="packages">Packages 01</router-link></li>
                          <li><router-link to="packages_2">Packages 02</router-link></li>
                          <li><router-link to="booking">Booking</router-link></li>
                          <li><router-link to="terms_conditions">Terms & Conditions</router-link></li>
                          <li><router-link to="error_page">404 Page</router-link></li>
                      </ul>
                  </li>
                  <li class="dropdown"><router-link to="blog">News</router-link>
                      <ul>
                          <li><router-link to="blog">Our Blog</router-link></li>
                          <li><router-link to="blog_2">Blog Classic</router-link></li>
                          <li><router-link to="blog_single">Blog Details</router-link></li>
                      </ul>
                  </li>
                  <li><router-link to="contact">Contact</router-link></li>
              </ul>
          </div><!-- /.Side-menu -->
          
          <div class="links-box clearfix">
              <div class="clearfix">
                  <div class="link"><router-link to="login" class="theme-btn btn-style-one"><span>Login<i class="icon far fa-angle-right"></i></span></router-link></div>
                  <div class="link"><router-link to="signup" class="theme-btn btn-style-two"><span>Sign Up<i class="icon far fa-angle-right"></i></span></router-link></div>
              </div>
          </div>
      
      </div><!-- / Hidden Bar Wrapper -->
  </section>
  <!-- / Hidden Bar -->

  <div class="cart-backdrop"></div>
  <!--Cart Sidebar-->
  <div class="cart-sidebar">
      <div class="cart-side-inner">
          <div class="cart-side-header">
              <div class="closer-btn"><span>Close</span></div>
              <h5>Shopping Cart</h5>
          </div>
          <div class="prod-box">
              <div class="prod-block">
                  <div class="prod-inner">
                      <div class="prod-thumb"><router-link to="/"><img src="@/assets/images/resource/shop/shop-thumb-1.jpg" alt=""></router-link></div>
                      <div class="remove-item"><router-link to="/"><i class="far fa-times"></i></router-link></div>
                      <div class="prod-title"><router-link to="/">Smart Air Bag Travel</router-link></div>
                      <div class="quantity-box">
                          <div class="item-quantity">
                              <input class="qty-spinner" type="text" value="1" name="quantity">
                          </div>
                      </div>
                      <div class="calculations">1 x <span>$225.00</span></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="lower-content">
          <div class="count clearfix">
              <span class="ttl">Subtotal</span>
              <span class="dtl">$225.00</span>
          </div>
          <div class="links clearfix">
              <div class="left"><router-link to="/" class="theme-btn btn-style-one"><span>View Cart</span></router-link></div>
              <div class="right"><router-link to="/" class="theme-btn btn-style-two"><span>Checkout</span></router-link></div>
          </div>
      </div>
  </div>

  <!-- Banner Section -->
  <section class="inner-banner">
      <div class="image-layer" style="background-image: url(images/background/banner-image-1.jpg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <h2>Tam Single</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><router-link to="/">Home</router-link></li>
                      <li class="current">Team Single</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->
  

  <!--Team Member-->
  <section class="team-single">

      <div class="floated-icon left"><img src="@/assets/images/resource/dotted-pattern-1.png" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="content-box">
              <div class="row clearfix">
                  <!--Image Col-->
                  <div class="image-col col-lg-6 col-md-6 col-sm-12">
                      <div class="inner">
                          <div class="image">
                              <div class="image"><img src="@/assets/images/resource/team-7.jpg" alt="" title=""></div>
                          </div>
                      </div>
                  </div>
                  <!--Content Col-->
                  <div class="content-col col-lg-6 col-md-6 col-sm-12">
                      <div class="inner">
                          <div class="member-info">
                              <h4 class="name">Andree Hoy</h4>
                              <div class="designation">Tour Guide</div>
                          </div>
                          <div class="member-about">
                              <h6>About Me :</h6>
                              <div class="text">A traveling around from place to place. a long journey including the visiting of a number of places in sequence, especially with an organize group led by a guide. ... a journey from town to town to fulfill engments, as by a theatrical company or an entertainer:</div>
                          </div>
                          <div class="member-contact">
                              <div class="phone"><span class="icon"><img src="@/assets/images/icons/phone-1.svg" alt="" title=""></span> Phone: <router-link to="tel:+123456789">+1 234 567 89</router-link></div>
                              <div class="phone"><span class="icon"><img src="@/assets/images/icons/email-1.svg" alt="" title=""></span> Email: <router-link to="mailto:example@treker.com">example@treker.com</router-link></div>
                          </div>
                          <div class="member-quote">
                              <div class="icon"><img src="@/assets/images/icons/quotes-4.svg" alt="" title=""></div>
                              <div class="quote">Producing Ideas Is The Main Way To Grow The Economy Life Insurance for Stay.</div>
                          </div>
                          <div class="social-links">
                              <ul class="clearfix">
                                  <li><router-link to="/"><i class="fab fa-facebook-f"></i></router-link></li>
                                  <li><router-link to="/"><i class="fab fa-twitter"></i></router-link></li>
                                  <li><router-link to="/"><i class="fab fa-youtube"></i></router-link></li>
                                  <li><router-link to="/"><i class="fab fa-instagram"></i></router-link></li>
                              </ul>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--Team Section-->
  <section class="team-section alternate-2">

      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right-2.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="title-box centered">
              <h2><span>Explore More Guide</span></h2>
          </div>
          <div class="carousel-box">
              <div class="team-carousel owl-theme owl-carousel">
                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-4.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-5.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-6.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-1.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-2.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-3.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-4.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-5.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/team-6.jpg" alt="" title=""></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h4><router-link to="/">Andree Hoy</router-link></h4>
                              <div class="designation">Tour Guide</div>
                              <div class="phone">
                                  <router-link to="/" class="theme-btn call-btn"><i class="icon"><img src="@/assets/images/icons/phone-call.svg" alt="" title=""></i></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--Main Footer-->
  <footer class="footer-two">
      <div class="bg-layer" style="background-image: url(images/background/footer-bg.png);"></div>
      <div class="upper-section">
          <div class="auto-container">

              <div class="row clearfix">

                  <div class="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                      <!--Logo-->
                      <div class="footer-logo">
                          <div class="logo"><router-link to="/" title="Treker"><img src="@/assets/images/logo.svg" alt="" title="Treker"></router-link></div>
                      </div>
                      <div class="footer-text">Treker was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</div>
                      <div class="social-links">
                          <ul class="clearfix">
                              <li><router-link to="/"><i class="fab fa-facebook-f"></i></router-link></li>
                              <li><router-link to="/"><i class="fab fa-twitter"></i></router-link></li>
                              <li><router-link to="/"><i class="fab fa-youtube"></i></router-link></li>
                              <li><router-link to="/"><i class="fab fa-instagram"></i></router-link></li>
                          </ul>
                      </div>
                  </div>

                  <div class="big-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                      <div class="row clearfix">

                          <div class="footer-column col-lg-3 col-md-4 col-sm-12">
                              <h6>Exlopre Treker</h6>
                              <div class="links">
                                  <ul>
                                      <li><router-link to="/">Account</router-link></li>
                                      <li><router-link to="/">Privacy Policy</router-link></li>
                                      <li><router-link to="/">Affilitate</router-link></li><li><router-link to="/">Program</router-link></li>
                                      <li><router-link to="/">Our Partner</router-link></li>
                                  </ul>
                              </div>
                          </div>

                          <div class="footer-column col-lg-3 col-md-4 col-sm-12">
                              <h6>Quick lInks</h6>
                              <div class="links">
                                  <ul>
                                      <li><router-link to="/">About us</router-link></li>
                                      <li><router-link to="/">News & press</router-link></li>
                                      <li><router-link to="/">Blog</router-link></li>
                                      <li><router-link to="/">FAQs</router-link></li>
                                      <li><router-link to="/">Careers</router-link></li>
                                  </ul>
                              </div>
                          </div>

                          <div class="info-block col-lg-6 col-md-4 col-sm-12">
                              <h6>Address</h6>
                              <div class="info">
                                  <ul>
                                      <li>Europe 45 Gloucester Road London DT1M 3BF <router-link to="/">+44 (0)20 3671 5709</router-link></li>
                                      <li>Europe 45 Gloucester Road London DT1M 3BF <router-link to="/">+44 (0)20 3671 5709</router-link></li>
                                  </ul>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="f-bottom">
          <div class="auto-container">
              <div class="inner clearfix">
                  <div class="copyright">Copyright &copy; 2022 Treker. All Rights Reserved. Designed by ThemeIM</div>
              </div>
          </div>
      </div>

  </footer>

</div>
<!--End pagewrapper--> 

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="icon"><img src="@/assets/images/icons/arrow-up.svg" alt="" title="Go To Top"></span></div>

</template>

<script>
export default {

}
</script>

<style>

</style>