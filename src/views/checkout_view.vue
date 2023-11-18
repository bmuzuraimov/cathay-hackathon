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
                       <div class="logo"><router-link to="/" title="TravelSync+"><img src="@/assets/images/logo.jpeg" alt="" title="TravelSync+"></router-link></div>
                  </div>

                  <div class="nav-box clearfix">
                      <!--Nav Outer-->
                      <div class="nav-outer clearfix">         
                          <nav class="main-menu">
                              <ul class="navigation clearfix">
                                  <li><router-link to="/">Home</router-link></li>
                                  <li class="dropdown"><router-link to="hotels">Hotels</router-link></li>
                                  <li class="dropdown"><router-link to="travel_experiences">Travel Experiences</router-link></li>
                                  <li><router-link to="destinations">Destinations</router-link></li>
                                  <li><router-link to="travelsyncking">TravelSync</router-link></li>
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
                          <div class="link cart-btn"><router-link to="/" class="clearfix"><div class="cart-info"><span class="icon far fa-shopping-cart"></span>0 Items</div></router-link></div>
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
              <div class="logo"><router-link to="/" title="TravelSync+"><img src="@/assets/images/logo.jpeg" alt="" title="TravelSync+"></router-link></div>
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
                  <li class="dropdown"><router-link to="about">About Us</router-link>
                      <ul>
                          <li><router-link to="team">Our Team</router-link></li>
                          <li><router-link to="team_member">Team Member</router-link></li>
                          <li><router-link to="faq">FAQs</router-link></li>
                          <li><router-link to="gallery">Gallery</router-link></li>
                      </ul>
                  </li>
                  <li class="current dropdown"><router-link to="shop">Shop</router-link>
                      <ul>
                          <li><router-link to="shop">Our Shop</router-link></li>
                          <li><router-link to="product_single">Product Details</router-link></li>
                          <li><router-link to="confirmation">My Confirmation</router-link></li>
                          <li><router-link to="shopping_cart">Shopping Cart</router-link></li>
                          <li><router-link to="checkout">Checkout</router-link></li>
                          <li><router-link to="signup">Signup</router-link></li>
                          <li><router-link to="login">Login</router-link></li>
                          <li><router-link to="reset_password">Forgot Password</router-link></li>
                      </ul>
                  </li>
                  <li><router-link to="destinations">Destinations</router-link></li>
                  <li><router-link to="travelsyncking">TravelSync</router-link></li>
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
      <div class="image-layer" style="background-image: url(/assets/images/background/banner-image-1.jpeg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <h2>Check Out</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><router-link to="/">Home</router-link></li>
                      <li class="current">Check Out</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!--CheckOut Page-->
  <section class="checkout-page">
      <div class="auto-container">
          <ul class="default-links"> 
              <li class="have-coupon with-border"><i class="icon"><img src="@/assets/images/icons/coupon-icon.svg" alt=""></i> Have a coupon? <router-link to="/">Click here</router-link> to enter your code</li>
              <li>
                  <div class="coupon-form site-form">
                      <form name="coupon-form" method="post" action="checkout">
                          <div class="c-label">If you have a coupon, please apply it below.</div>
                          <div class="form-group clearfix">
                              <input type="text" name="coupon-code" value="CATHAYHACKATHON2023" placeholder="Coupon code" required>
                              <button type="submit" class="theme-btn coupon-btn btn-style-two"><span class="btn-title">Apply coupon</span></button>
                          </div>
                      </form>
                  </div>
              </li>
          </ul> 
          <!--Checkout Details-->
          <div class="site-form">
              
              <div class="billing-detail">
                  
                  <div class="row clearfix">
                      <div class="billing-column col-lg-6 col-md-12 col-sm-12">
                          <form method="post" action="checkout">
                              <div class="billing-form">
                                  <h4 class="checkout-title">Billing details</h4>
                                  <div class="row clearfix">
                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">First Name <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="Baiel" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Last Name <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="Muzuraimov" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Country / Region <i>*</i></div>
                                          <div class="field-inner">
                                               <select>
                                                  <option selected>Hong Kong</option>
                                                  <option>China</option>
                                                  <option>Russia</option>
                                                  <option>UK</option>
                                                  <option>France</option>
                                                  <option>Germany</option>
                                              </select>
                                              <span class="alt-icon far fa-angle-down"></span>
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Street address <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="8 Scenic Rd" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Town / City <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="Lantau Island" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Postcode / ZIP (optional)</div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="00000000" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Phone <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="text" name="field-name" value="+85267940000" placeholder="">
                                          </div>
                                      </div>

                                      <!--Form Group-->
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Email <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="email" name="field-name" value="bmuzuraimov@gmail.com" placeholder="">
                                          </div>
                                      </div>
                                      
                                      <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                          <div class="f-label">Number of travellers <i>*</i></div>
                                          <div class="field-inner">
                                              <input type="number" name="field-name" value="5" placeholder="">
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </form>
                      </div>
                      <div class="order-column col-lg-6 col-md-12 col-sm-12">
                          <div class="order-box">
                              <h4 class="checkout-title">Your Order</h4>
                              <div class="order-summary">
                                  <ul>
                                      <li class="prod clearfix"><span class="ttl"> Hong Kong - Los Angeles </span> <span class="dtl">$HK00.00</span></li>
                                  </ul>
                              </div>
                              <!--Payment Options-->
                              <div class="payment-options">
                                  <div class="agreement">
                                      <input type="checkbox" name="agree" checked id="agree">
                                      <label for="agree">I agree with this <router-link to="terms_conditions">teams and condition</router-link> *</label>
                                  </div>
                                  <div class="btn-box">
                                      <button @click="navigateNext" type="button" class="theme-btn btn-style-two"><span>Book flight</span></button>
                                  </div>
                              </div>
                              <!--End Place Order-->
                          </div>
                      </div>
                          
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- End Checkout Page -->

  <!--Main Footer-->
  <footer class="footer-two">
      <div class="bg-layer" style="background-image: url(/assets/images/background/footer-bg.jpeg);"></div>
      <div class="upper-section">
          <div class="auto-container">

              <div class="row clearfix">

                  <div class="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                      <!--Logo-->
                      <div class="footer-logo">
                          <div class="logo"><router-link to="/" title="TravelSync+"><img src="@/assets/images/logo.jpeg" alt="" title="TravelSync+"></router-link></div>
                      </div>
                      <div class="footer-text">TravelSync+ was founded in 2023 by a group of HKBU students who were passionated about to win the Cathay Hackathon</div>
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
                              <h6>Exlopre TravelSync+</h6>
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
                                      <li>International Airport, 8 Scenic Rd, Lantau Island, Hong Kong <router-link to="/">+852 2747 3333</router-link></li>
                                      <li>International Airport, 8 Scenic Rd, Lantau Island, Hong Kong <router-link to="/">+852 2747 3333</router-link></li>
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
                  <div class="copyright">Copyright &copy; 2023 TravelSync+. All Rights Reserved.</div>
              </div>
          </div>
      </div>

  </footer>

</div>
<!--End pagewrapper--> 


</template>

<script>
export default {
    methods: {
        navigateNext(){
            this.$router.push('/confirmation?flightId=1&cid=6554bc6a123328586b67fd25').then(() => {
            this.$nextTick(() => window.scrollTo(0, 0));
            });
        }
    },
}
</script>

<style>

</style>