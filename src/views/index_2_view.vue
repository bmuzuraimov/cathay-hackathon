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
                                  <li class="current dropdown"><router-link to="/">Home</router-link>
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
                  <li class="current dropdown"><router-link to="/">Home</router-link>
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
  <section class="banner-two">
      
      <div class="banner-container">
          <div class="banner-slider-box">
              <!--Slide Item-->
              <div class="slide-item">
                  <div class="floated-icon left"><img src="@/assets/images/main-slider/banner-stones-left.svg" alt="" title=""></div>
                  <div class="floated-icon right"><img src="@/assets/images/main-slider/banner-stones-right.svg" alt="" title=""></div>
                  <div class="bg-image-1"><img src="@/assets/images/main-slider/banner-image-4.svg" alt="" title=""></div>
                  <div class="auto-container">
                    <div class="content-box">
                          <div class="bg-image-2"><img src="@/assets/images/main-slider/banner-image-3.svg" alt="" title=""></div>
                          <div class="content">
                              <div class="clearfix">
                                  <div class="inner">
                                      <h2>Plan your The best</h2>
                                      <h1><span>Travelling</span></h1>
                                      <div class="text">Their house is a museum where people come to see ‘em. They really are a scream the Addams Family. These days are all Happy and Free. These days are all share them with me oh baby. Their house is a museum where people come to see ‘em. They really.</div>
                                      <div class="links-box clearfix">
                                          <div class="link"><router-link to="/" class="theme-btn btn-style-two"><span>View All Tours<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn btn-style-one"><span>Read More<i class="icon far fa-angle-right"></i></span></router-link></div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                          <div class="banner-image">
                              <div class="image"><img src="@/assets/images/main-slider/banner-image-2.svg" alt="" title=""></div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!--Why Section-->
  <section class="why-two">
      <div class="auto-container">

          <div class="title-box centered">
              <div class="subtitle">We Are Awesome</div>
              <h2><i class="bg-vector"></i><span>Why Choose TravelSync+</span></h2>
          </div>

          <div class="content-box">
              <div class="row clearfix">
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-1.svg" alt=""></div>
                          <h4>Diverse Destinations</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-2.svg" alt=""></div>
                          <h4>Value for Money</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-4.svg" alt=""></div>
                          <h4>Fast Booking</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-3.svg" alt=""></div>
                          <h4>Beautiful Places</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-6.svg" alt=""></div>
                          <h4>Passionate Travel</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
                  <div class="why-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="icon-box"><img src="@/assets/images/resource/icon-5.svg" alt=""></div>
                          <h4>Support Team</h4>
                          <div class="text">Richly varied landscapes, luxury accommodation Travel.</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!--About Us Section-->
  <section class="about-two">
      <div class="bg-layer" style="background-image: url(/assets/images/background/pattern-1.png);"></div>
      <div class="floated-icon left"><img src="@/assets/images/resource/about-stone-two.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="row clearfix">
              <!--Text Col-->
              <div class="text-col col-lg-6 col-md-12 col-sm-12">
                  <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <div class="title-box">
                          <div class="subtitle">About TravelSync+</div>
                          <h2><i class="bg-vector"></i><span>World Best Travel Agency</span></h2>
                          <div class="text">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land.</div>
                      </div>
                      <div class="lower-box">
                          <div class="lower-inner clearfix">
                              <div class="text-content">
                                  <ul>
                                      <li>Ratione voluptatem.sequi nesciunt.</li>
                                      <li>Ratione voluptatem.</li>
                                      <li>Ratione voluptatem sequi.</li>
                                  </ul>
                              </div>
                              <div class="image-box">
                                  <img src="@/assets/images/resource/about-image-2.jpg" alt="" title="">
                                  <router-link to="/" class="theme-btn lightbox-image overlink"><span class="icon fa fa-play"></span></router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <!--Image Col-->
              <div class="image-col col-lg-6 col-md-12 col-sm-12">
                  <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <div class="image">
                          <img src="@/assets/images/resource/about-image-2.png" alt="" title="">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!--Trending Destinations Section-->
  <section class="trending-two">
      <div class="auto-container">

          <div class="title-box">
              <div class="subtitle">Top Destinations</div>
              <h2><i class="bg-vector"></i><span>Trending Destinations</span></h2>
          </div>

          <div class="carousel-box">
              <div class="trending-carousel owl-theme owl-carousel">
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-7.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-8.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-9.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-7.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-8.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-two">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-9.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="/">Kyrgyzstan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!--Products Section-->
  <section class="products-section">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="auto-container">

          <div class="title-box centered">
              <div class="subtitle">Shop Now</div>
              <h2><i class="bg-vector"></i><span>Featured TravelSync Products</span></h2>
          </div>

          <div class="row clearfix">
              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-1.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Smart Air Bag Travel</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-2.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Travel Suitcase Bag</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-3.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Travel Light Suitcase</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-4.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Smart Travel Gadgets</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-5.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Set of Black Silk Pillow</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-6.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Travel Slipping Support</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-7.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Travelling Black Suitcase</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="/"><img src="@/assets/images/resource/shop/prod-8.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="/" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="/">Coffee Travel Mug</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>

          <div class="see-more-link"><router-link to="/" class="theme-btn btn-style-one"><span>View All Products <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
      </div>
  </section>

  <!--Popular Section-->
  <section class="popular-section style-two">
      <div class="bg-layer" style="background-image: url(/assets/images/background/image-4.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">Modern & Beautiful</div>
              <h2><i class="bg-vector"></i><span>Our Most Popular TravelSync</span></h2>
          </div>
          <div class="carousel-box">
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

  <!--Testimonials Section-->
  <section class="testimonials-two">
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">Review & Testimonial</div>
              <h2><i class="bg-vector"></i><span>Top Reviews for TravelSync+</span></h2>
          </div>
          <div class="carousel-box">
              <div class="slider-box">
                  <div class="testi-carousel-two" id="testi-carousel-two">
                      <!--Testi Block-->
                      <div class="testi-block-two">
                          <div class="inner-box">
                              <div class="icon"><img src="@/assets/images/icons/quotes-2.svg" alt=""></div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                              </div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt anim id, sint occaecat cupidatat non provident"</div>
                          </div>
                      </div>

                     <!--Testi Block-->
                      <div class="testi-block-two">
                          <div class="inner-box">
                              <div class="icon"><img src="@/assets/images/icons/quotes-2.svg" alt=""></div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                              </div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt anim id, sint occaecat cupidatat non provident"</div>
                          </div>
                      </div>

                      <!--Testi Block-->
                      <div class="testi-block-two">
                          <div class="inner-box">
                              <div class="icon"><img src="@/assets/images/icons/quotes-2.svg" alt=""></div>
                              <div class="info">
                                  <span class="name">William Smith</span>
                              </div>
                              <div class="text">" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Occaecat cupidatat non proident,sunt in culpa qui officia deserunt anim id, sint occaecat cupidatat non provident"</div>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="pagers-box">
                  <div class="pager-one clearfix">
                      <router-link to="" class="pager-item active" data-slide-index="0"><div class="image"><img src="@/assets/images/resource/rev-thumb-1.png" alt=""></div></router-link>
                      <router-link to="" class="pager-item" data-slide-index="1"><div class="image"><img src="@/assets/images/resource/rev-thumb-2.png" alt=""></div></router-link>
                      <router-link to="" class="pager-item" data-slide-index="2"><div class="image"><img src="@/assets/images/resource/rev-thumb-3.png" alt=""></div></router-link>
                  </div>
              </div>
              
          </div>
      </div>
  </section>

  <!--Sponsors Section-->
  <section class="sponsors-one style-two">
      <div class="bg-layer" style="background-image: url(/assets/images/background/image-5.png);"></div>
      <div class="auto-container">
          <div class="carousel-box">
              <div class="sponsors-carousel owl-theme owl-carousel">
                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-1.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-2.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-3.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-4.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-1.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-2.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-3.png" alt=""></router-link></div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="sponsor-block">
                      <div class="inner-box">
                          <div class="image"><router-link to="/"><img src="@/assets/images/resource/sponsor-4.png" alt=""></router-link></div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--News Section-->
  <section class="news-section style-two">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-alt.svg" alt="" title=""></div>
      <div class="bg-layer" style="background-image: url(/assets/images/background/image-1.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">TravelSync+ Top News</div>
              <h2><i class="bg-vector"></i><span>TravelSync+ Latest News</span></h2>
          </div>
          <div class="content-box">
              <div class="row clearfix">
                  <!--Block-->
                  <div class="news-block-one no-image col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-content">
                              <div class="info">
                                  <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                              </div>
                              <h4><router-link to="blog_single">THE UPCOMING WBC CHAMP SHIPS 2022 in feb</router-link></h4>
                              <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most innovative.</div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="news-block-one alternate col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-1.jpg" alt="" title=""></router-link></div>
                              <div class="play-link">
                                  <router-link to="blog_single"><span class="icon far fa-angle-right"></span></router-link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="news-block-one no-image col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-content">
                              <div class="info">
                                  <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                              </div>
                              <h4><router-link to="blog_single">EFFECTIVE STRATEGIES & TIPS FROM THE BEST</router-link></h4>
                              <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most innovative.</div>
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