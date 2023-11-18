<template>
    <div class="page-wrapper"> 
  
 
  <div class="search-backdrop"></div>
  <!-- Main Header-->
  <header class="main-header header-style-two alternate">
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
                                  <li class="dropdown"><router-link to="shop">Shop</router-link>
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
                                  <li class="current dropdown"><router-link to="/">Pages</router-link>
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
                  <li class="dropdown"><router-link to="shop">Shop</router-link>
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
                  <li class="current dropdown"><router-link to="/">Pages</router-link>
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

  <!--Page Info-->
  <section class="page-info">
      <div class="auto-container">
          <div class="links">
              <router-link to="/">Home</router-link> &ensp;<i class="fa fa-caret-right"></i>&ensp; <router-link to="travelsyncking">TravelSync</router-link> &ensp;<i class="fa fa-caret-right"></i>&ensp; <span class="current">TravelSync Details</span>
          </div>
      </div>
  </section>

  <!-- Banner Section -->
  <section class="packages-banner" style="background-image: url(/assets/images/background/banner-1.jpg);">
      <div class="auto-container">
          <ul class="banner-list">
              <li><span class="icon"><img src="@/assets/images/icons/location.svg" alt="" /></span>Los Angeles, CA</li>
              <li>View on Map</li>
          </ul>
      </div>
  </section>
  <!--End Banner Section -->

  <!-- Package Detail Section -->
  <section class="package-detail-section">
      <div class="auto-container">
      
          <!-- Upper Box -->
          <div class="upper-box">
              <div class="clearfix">
                  <div class="pull-left">
                      <h4>Yellowstone & Mt Rushm</h4>
                  </div>
                  <div class="pull-right">
                      <div class="price">$120<span>/Person</span></div>
                  </div>
              </div>
          </div>
          
          <!-- Package Info Box -->
          <div class="package-info-box">
              <div class="inner-container d-flex justify-content-between align-items-center">
                  
                  <!-- Package Info Block -->
                  <div class="package-info-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/duration.svg" alt="" /></div>
                          <strong>Duration</strong>
                          4 Days
                      </div>
                  </div>
                  
                  <!-- Package Info Block -->
                  <div class="package-info-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/speedometer.svg" alt="" /></div>
                          <strong>Difficulty</strong>
                          Easy-Moderate
                      </div>
                  </div>
                  
                  <!-- Package Info Block -->
                  <div class="package-info-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/team-group.svg" alt="" /></div>
                          <strong>Group Size</strong>
                          30 Person
                      </div>
                  </div>
                  
                  <!-- Package Info Block -->
                  <div class="package-info-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/hill.svg" alt="" /></div>
                          <strong>Height</strong>
                          2.7 mdpl
                      </div>
                  </div>
                  
              </div>
          </div>
          <!-- End Package Info Box -->
          
          <!-- Rating Box -->
          <div class="rating-box">
              <div class="clearfix">
                  <div class="pull-left">
                      <div class="rating">
                          (5 review) &nbsp;
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                      </div>
                  </div>
                  <div class="pull-right">
                      <ul class="post-info">
                          <li><span class="icon"><img src="@/assets/images/icons/share-icon.svg" alt="" /></span>Share</li>
                          <li><span class="icon "><img src="@/assets/images/icons/review-icon.svg" alt="" /></span>Review</li>
                          <li><span class="icon "><img src="@/assets/images/icons/heart-icon-1.svg" alt="" /></span>Wishlist</li>
                      </ul>
                  </div>
              </div>
          </div>
          <!-- Rating Box -->
          
          <div class="row clearfix">
              <!-- Content Column -->
              <div class="content-column col-xl-8 col-lg-7 col-md-12 col-sm-12">
                  <h5>About Hong Kong Red City Land</h5>
                  <p>There are many reasons why an executive or VIP would choose personal security services. Executives could be in charge of large companies that are worth millions or more, leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs, they do not need necessarily need to be..</p>
                  <p>Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</p>
                  <div class="feature-box">
                      <h5>Features</h5>
                      <ul class="feature-list">
                          <li>Free Download Instagram Logo</li>
                          <li>Illustrator from Instagram Logo 9 Vectors svg vector collection</li>
                          <li>Vectors SVG vector illustration graphic art design format.</li>
                          <li>Following vectors are from the same pack as this vector also</li>
                          <li>Instagram Logo SVG Vector is a part of Social Websites</li>
                      </ul>
                  </div>
                  <div class="facility-box">
                      <h5>Facilities</h5>
                      <div class="row clearfix">
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/campings.svg" alt="" /></span> Camping Tents</div>
                          </div>
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/toilet.svg" alt="" /></span> Portable Toilet</div>
                          </div>
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/kitchen-tool.svg" alt="" /></span> Cooking Equipment</div>
                          </div>
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/lights.svg" alt="" /></span> Electric Tent Lights</div>
                          </div>
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/smoking.svg" alt="" /></span> Smoking Allowed</div>
                          </div>
                          <div class="column col-lg-4 col-md-4 col-sm-12">
                              <div class="facility-option"><span class="icon"><img src="@/assets/images/icons/wifi-signal.svg" alt="" /></span> Wireless Internet</div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Itinerary Box -->
                  <div class="itinerary-box">
                      <h5>Itinerary</h5>
                      <div class="days-outer">
                      
                          <!-- Day Box -->
                          <div class="day-box">
                              <div class="title">Day</div>
                              <div class="day-text">Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</div>
                          </div>
                          
                          <!-- Day Box -->
                          <div class="day-box">
                              <div class="title">Day 2</div>
                              <div class="day-text">Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</div>
                          </div>
                          
                          <!-- Day Box -->
                          <div class="day-box">
                              <div class="title">Day 3</div>
                              <div class="day-text">Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</div>
                          </div>
                          
                          <!-- Day Box -->
                          <div class="day-box">
                              <div class="title">Day 4</div>
                              <div class="day-text">Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</div>
                          </div>
                          
                      </div>
                  </div>
                  <!-- End Itinerary Box -->
                  
                  <!-- Gallery Box -->
                  <div class="gallery-box">
                      <h5>Gallery</h5>
                      <div class="single-item-carousel owl-carousel owl-theme">
                          <div class="slide">
                              <div class="image">
                                  <img src="@/assets/images/resource/gallery.jpg" alt="" />
                              </div>
                          </div>
                          <div class="slide">
                              <div class="image">
                                  <img src="@/assets/images/resource/gallery.jpg" alt="" />
                              </div>
                          </div>
                          <div class="slide">
                              <div class="image">
                                  <img src="@/assets/images/resource/gallery.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Map Box -->
                  <div class="map-box">
                      <h5>Location</h5>
                      <!--Map Outer-->
                      <div class="map-outer">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" allowfullscreen=""></iframe>
                      </div>
                  </div>
                  
              </div>
              <!-- Sidebar Column -->
              <div class="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
                  <div class="inner-column">
                  
                      <!-- Booking Widget -->
                      <div class="sidebar-widget booking-widget" style="background-image: url(/assets/images/background/booking-bg.jpg);">
                          <h5>Book this Group Bookings</h5>
                          
                          <!-- Booking Form -->
                          <div class="booking-form">
                              
                              <!-- Contact Form -->
                              <form method="post" action="sendemail.php" id="contact-form">
                                  
                                  <div class="form-group">
                                      <input type="text" name="username" placeholder="Full Name" required>
                                      <span class="icon fal fa-user fa-fw"></span>
                                  </div>
                                  
                                  <div class="form-group">
                                      <input type="email" name="email" placeholder="Email" required>
                                      <span class="icon fal fa-envelope fa-fw"></span>
                                  </div>
                                  
                                  <div class="form-group">
                                      <input type="text" name="phone" placeholder="Phone *" required>
                                      <span class="icon fal fa-phone fa-fw"></span>
                                  </div>
                                  
                                  <div class="form-group">
                                      <input type="text" class="datepicker" name="time" placeholder="DD - MM - YYYY" required>
                                      <span class="icon fal fa-calendar fa-fw"></span>
                                  </div>
                                  
                                  <div class="form-group">
                                      <input type="text" name="time" placeholder="Guest" required>
                                      <div class="item-quantity">
                                          <div class="quantity-spinner">
                                              <button type="button" class="minus"><span class="fa fa-minus"></span></button>
                                              <input type="text" name="product" value="2" class="prod_qty" readonly />
                                              <button type="button" class="plus"><span class="fa fa-plus"></span></button>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div class="form-group">
                                      <button class="theme-btn send-btn"><span class="txt">Send Now <i class="fa fa-angle-right"></i></span></button>
                                  </div>
                                  
                              </form>
                                  
                          </div>
                          <!-- End Booking Form -->
                          
                      </div>
                      
                      <!-- Follow Widget -->
                      <div class="sidebar-widget follow-widget">
                          <div class="sidebar-title">
                              <h5>Follow us</h5>
                          </div>
                          <ul class="social-list">
                              <li class="facebook"><span class="icon fab fa-facebook-f fa-fw"></span> <strong>1250M +</strong> Followers</li>
                              <li class="twitter"><span class="icon fab fa-twitter fa-fw"></span> <strong>1250M +</strong> Followers</li>
                              <li class="youtube"><span class="icon fab fa-youtube fa-fw"></span> <strong>1250M +</strong> Followers</li>
                              <li class="linkedin"><span class="icon fab fa-linkedin-in fa-fw"></span> <strong>1250M +</strong> Followers</li>
                          </ul>
                      </div>
                      
                      <!-- Category Widget -->
                      <div class="sidebar-widget category-widget">
                          <div class="sidebar-title">
                              <h5>Category</h5>
                          </div>
                          <ul class="sidebar-category-list">
                              <li style="background-image: url(/assets/images/background/category-1.jpg)">
                                  <span class="txt">Therapy</span> <span class="number">05</span>
                              </li>
                              <li style="background-image: url(/assets/images/background/category-2.jpg)">
                                  <span class="txt">Beauty Items</span> <span class="number">09</span>
                              </li>
                              <li style="background-image: url(/assets/images/background/category-3.jpg)">
                                  <span class="txt">Body Sliming</span> <span class="number">07</span>
                              </li>
                              <li style="background-image: url(/assets/images/background/category-4.jpg)">
                                  <span class="txt">Fashion Fitness</span> <span class="number">10</span>
                              </li>
                          </ul>
                      </div>
                      
                      <!-- Buy TravelSync+ Widget -->
                      <div class="sidebar-widget buy-travelsync-widget">
                          <div class="widget-content" style="background-image: url(/assets/images/background/buy.jpg)">
                              <div class="logo">
                                  <router-link to="/"><img src="@/assets/images/icons/buy-travelsync.svg" alt="" /></router-link>
                              </div>
                              <div class="text">Awesome TravelSync Travel <br> Theme !</div>
                              <router-link to="/" class="theme-btn buy-now">Buy Now</router-link>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          
      </div>
  </section>
  <!-- End Package Detail Section -->
  
  <!-- News Section Two -->
  <section class="news-section-two">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/background/pattern-2.png" alt="" title=""></div>
      <div class="bg-layer" style="background-image: url(/assets/images/background/image-1.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <h2><span>Explore More TravelSync</span></h2>
          </div>
          <div class="content-box">
              
              <div class="popular-carousel owl-theme owl-carousel">
                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Hong Kong Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Hong Kong Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Hong Kong Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travelsync-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="/" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="/" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

              </div>
              
          </div>
      </div>
  </section>
  <!-- End News Section Two -->
  
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

}
</script>

<style>

</style>