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
              <h2>ABOUT US</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><router-link to="/">Home</router-link></li>
                      <li class="current">About Us</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!--About Us Section-->
  <section class="about-three">
      <div class="floated-icon right"><img src="@/assets/images/resource/hills-image.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="row clearfix">
              <!--Text Col-->
              <div class="text-col col-lg-6 col-md-12 col-sm-12">
                  <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <h2>World Best Travel Agency</h2>
                      <div class="text upper-text">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land.</div>
                      <div class="f-blocks clearfix">
                          <div class="f-block">
                              <div class="inner-box">
                                  <div class="icon"><img src="@/assets/images/resource/about-icon-1.svg" alt="" title=""></div>
                                  <h6>Expert Team for Support</h6>
                              </div>
                          </div>
                          <div class="f-block">
                              <div class="inner-box">
                                  <div class="icon"><img src="@/assets/images/resource/about-icon-2.svg" alt="" title=""></div>
                                  <h6>Urgent Support for Client</h6>
                              </div>
                          </div>
                      </div>
                      <div class="quote-box">
                          <div class="quote">"Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives."</div>
                          <div class="quote-info clearfix">
                              <div class="image"><img src="@/assets/images/resource/about-thumb-1.jpg" alt="" title=""></div>
                              <div class="info">
                                  <span class="name">Jonathon bLIL</span>
                                  <span class="designation">Founder of travelsync</span>
                              </div>
                              <div class="signature"><img src="@/assets/images/resource/signature-1.png" alt="" title=""></div>
                          </div>
                      </div>
                  </div>
              </div>
              <!--Image Col-->
              <div class="image-col col-lg-6 col-md-12 col-sm-12">
                  <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <div class="image-box">
                          <img src="@/assets/images/resource/about-image-3.svg" alt="" title="">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!-- Facts Section -->
  <section class="facts-section">
      <div class="image-layer" style="background-image: url(/assets/images/background/image-6.jpg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <div class="video-btn"><router-link to="/" class="theme-btn lightbox-image"><span class="icon"><img src="@/assets/images/icons/video-icon-2.svg" alt="" title=""></span></router-link></div>
              <div class="subtitle">Are you ready to travel?</div>
              <h2>TravelSync+ is a World Leading Online Tour Booking Platform</h2>
          </div>
      </div>
      <div class="facts-box">
          <div class="auto-container">
              <div class="inner-box">
                  <div class="row clearfix">
                      <!--Block-->
                      <div class="fact-block col-xl-3 col-lg-3 col-md-6 col-sm-12">
                          <div class="inner">
                              <div class="count"><span>07+</span></div>
                              <div class="fact-title"><span>Years Exp</span></div>
                          </div>
                      </div>
                      <!--Block-->
                      <div class="fact-block col-xl-3 col-lg-3 col-md-6 col-sm-12">
                          <div class="inner">
                              <div class="count"><span>2k+</span></div>
                              <div class="fact-title"><span>Top Hosts</span></div>
                          </div>
                      </div>
                      <!--Block-->
                      <div class="fact-block col-xl-3 col-lg-3 col-md-6 col-sm-12">
                          <div class="inner">
                              <div class="count"><span>50+</span></div>
                              <div class="fact-title"><span>Top Country</span></div>
                          </div>
                      </div>
                      <!--Block-->
                      <div class="fact-block col-xl-3 col-lg-3 col-md-6 col-sm-12">
                          <div class="inner">
                              <div class="count"><span>10k+</span></div>
                              <div class="fact-title"><span>Client Avilable</span></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--End Facts Section -->

  <!--Why Section-->
  <section class="why-section">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="auto-container">

          <div class="title-box centered">
              <h2><span>Why Choose TravelSync+</span></h2>
          </div>

          <div class="row clearfix">
              <div class="left-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner">
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-1.svg" alt=""></div>
                              <h4>Diverse Destinations</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-2.svg" alt=""></div>
                              <h4>Value for Money</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-3.svg" alt=""></div>
                              <h4>Beautiful Places</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="right-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner">
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-4.svg" alt=""></div>
                              <h4>Fast Booking</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-5.svg" alt=""></div>
                              <h4>Support Team</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                      <div class="why-block">
                          <div class="inner-box">
                              <div class="icon-box"><img src="@/assets/images/resource/icon-6.svg" alt=""></div>
                              <h4>Passionate Travel</h4>
                              <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="image-col col-xl-6 col-lg-4 col-md-12 col-sm-12">
                  <div class="inner">
                      <div class="image-box"><img src="@/assets/images/resource/why-image-1.svg" alt=""></div>
                  </div>
              </div>

          </div>
      </div>
  </section>

  <!-- Features Section -->
  <section class="features-section">
      <div class="image-layer" style="background-image: url(/assets/images/background/image-7.jpg);"></div>
      <div class="auto-container">
          <div class="upper-box">
              <div class="row clearfix">
                  <!--Block-->
                  <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/f-icon-1.svg" alt="" ></div>
                          <h5>Private Transport</h5>
                          <div class="text">Richly varied landscapes, luxury accommodation travel Fully.</div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/f-icon-2.svg" alt="" ></div>
                          <h5>Diverse Destination</h5>
                          <div class="text">Richly varied landscapes, luxury accommodation travel Fully.</div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/f-icon-3.svg" alt="" ></div>
                          <h5>Great Hotel</h5>
                          <div class="text">Richly varied landscapes, luxury accommodation travel Fully.</div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="feature-block col-lg-3 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/f-icon-4.svg" alt="" ></div>
                          <h5>Fast Booking</h5>
                          <div class="text">Richly varied landscapes, luxury accommodation travel Fully.</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="carousel-box">
          <div class="auto-container">
              <div class="inner-box">
                  <div class="reviews-carousel owl-theme owl-carousel">
                      <!--Block-->
                      <div class="slide-item">
                          <div class="inner">
                              <div class="left-image">
                                  <div class="icon"><img src="@/assets/images/icons/quotes-3.svg" alt=""></div>
                                  <div class="image"><img src="@/assets/images/resource/rev-thumb-4.png" alt=""></div>
                              </div>
                              <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt.</div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                                  <span class="designation">CEO of tourbuzz</span>
                              </div>
                          </div>
                      </div>
                      <!--Block-->
                      <div class="slide-item">
                          <div class="inner">
                              <div class="left-image">
                                  <div class="icon"><img src="@/assets/images/icons/quotes-3.svg" alt=""></div>
                                  <div class="image"><img src="@/assets/images/resource/rev-thumb-4.png" alt=""></div>
                              </div>
                              <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt.</div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                                  <span class="designation">CEO of tourbuzz</span>
                              </div>
                          </div>
                      </div>
                      <!--Block-->
                      <div class="slide-item">
                          <div class="inner">
                              <div class="left-image">
                                  <div class="icon"><img src="@/assets/images/icons/quotes-3.svg" alt=""></div>
                                  <div class="image"><img src="@/assets/images/resource/rev-thumb-4.png" alt=""></div>
                              </div>
                              <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt.</div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                                  <span class="designation">CEO of tourbuzz</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  

  <!--Team Section-->
  <section class="team-section">

      <div class="floated-icon left"><img src="@/assets/images/resource/team-icon-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="title-box centered">
              <h2><span>Meet Our Tour Guide</span></h2>
          </div>
          <div class="carousel-box">
              <div class="team-carousel owl-theme owl-carousel">
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

              </div>
          </div>
      </div>
  </section>

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