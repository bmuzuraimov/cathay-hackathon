<template>
    <div class="page-wrapper"> 
  
 
  
  <div class="search-backdrop"></div>
  
  <!-- Main Header-->
  <header class="main-header">
      <div class="header-top">
          <div class="auto-container">
              <div class="inner clearfix">
                  <div class="top-left clearfix">
                      <ul class="info clearfix">
                          <li><i class="icon fa fa-envelope"></i> <a href="mailto:bmuzuraimov@gmail.com">bmuzuraimov@gmail.com</a></li>
                          <li><i class="icon fa fa-phone-circle"></i> <a href="tel:+85267940919">+85267940919</a></li>
                      </ul>
                  </div>
                  <div class="top-right clearfix">
                      <div class="lang-box">
                          <div class="lang-btn clearfix"><span class="img far fa-globe-americas"></span><span class="txt">Eng</span><span class="icon far fa-angle-down"></span></div>
                          <ul class="lang-list">
                              <li><router-link to="/">En</router-link></li>
                              <li><router-link to="/">Zh</router-link></li>
                              <li><router-link to="/">Hkg</router-link></li>
                          </ul>
                      </div>
                      <div class="login"><i class="icon fa fa-user"></i> <router-link to="/">SIGN IN</router-link></div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Header Upper -->
      <div class="header-upper">        
          <div class="auto-container">
              <!-- Main Box -->
              <div class="main-box clearfix">
                  <!--Logo-->
                  <div class="logo-box">
                       <div class="logo"><router-link to="/" title="Treker"><img src="@/assets/@/assets/images/logo.svg" alt="" title="Treker"></router-link></div>
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
                          <div class="link cart-btn"><router-link to="/" class="clearfix"><div class="cart-info"><span class="icon far fa-shopping-cart"></span>00 Items</div><div class="amount">$ 00:00</div></router-link></div>
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
      
  <!-- Menu Backdrop -->
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
  <section class="banner-section">
      
      <div class="banner-container">
          <div class="banner-slider-box">
              <!--Slide Item-->
              <div class="slide-item">
                  <div class="auto-container">
                    <div class="content-box">
                          <div class="content">
                              <div class="clearfix">
                                  <div class="inner">
                                      <div class="bg-image"><img src="@/assets/images/main-slider/banner-bg-text.svg" alt="" title=""></div>
                                      <h2>Never Stop</h2>
                                      <h1><span>Exploring</span></h1>
                                      <div class="text">Their house is a museum where people come to see ‘em. They really are a scream the Addams Family. These days are all Happy and Free. These days are all share them with me oh baby.</div>
                                      <div class="links-box clearfix">
                                          <div class="link"><router-link to="/" class="theme-btn btn-style-one"><span>View All Tours<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                                          <div class="link"><router-link to="/" class="theme-btn lightbox-image"><i class="ripple"></i><span class="icon"><img src="@/assets/images/icons/video-icon-1.svg" alt="" title=""></span></router-link></div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                          <div class="banner-image">
                              <div class="image"><img src="@/assets/images/main-slider/banner-image-1.svg" alt="" title=""></div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!--About Us Section-->
  <section class="about-us">
      <div class="floated-icon right"><img src="@/assets/images/resource/about-stone-right.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="row clearfix">
              <!--Text Col-->
              <div class="text-col col-lg-6 col-md-12 col-sm-12">
                  <div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <div class="title-box">
                          <div class="subtitle">About Treker</div>
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
                  <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                      <div class="bg-image">
                          <img src="@/assets/images/resource/about-vector-1.png" alt="" title="">
                      </div>
                      <div class="image-box">
                          <img src="@/assets/images/resource/about-image-1.svg" alt="" title="">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!--Popular Section-->
  <section class="popular-section">
      <div class="bg-layer" style="background-image: url(images/background/image-1.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">Modern & Beautiful</div>
              <h2><i class="bg-vector"></i><span>Our Most Popular Trekking</span></h2>
          </div>
          <div class="carousel-box">
              <div class="popular-carousel owl-theme owl-carousel">
              
                  <!-- Block -->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Moscow Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!-- Block -->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Moscow Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Block -->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-1.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Moscow Red City Land</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="/">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-2.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="packages">Yellowstone & Mt Rushm</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="trek-block-one">
                      <div class="inner-box">
                          <div class="image-box">
                              <div class="image"><router-link to="packages"><img src="@/assets/images/resource/f-image-3.jpg" alt="" title=""></router-link></div>
                              <div class="price"><span>$120</span></div>
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                          </div>
                          <div class="lower-content">
                              <h4><router-link to="/">Los Angeles to San Franc</router-link></h4>
                              <div class="ratings clearfix">
                                  <div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star empty"></i></div>
                                  <div class="rev"><router-link to="packages">05 Review</router-link></div>
                              </div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                          </div>
                          <div class="bottom-box clearfix">
                              <div class="more-link"><router-link to="packages" class="theme-btn"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt=""></i></span></router-link></div>
                              <div class="video-link"><router-link to="packages" class="theme-btn"><i class="icon far fa-video-camera"></i></router-link></div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--Why Section-->
  <section class="why-section">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="auto-container">

          <div class="title-box centered">
              <div class="subtitle">We Are Awesome</div>
              <h2><i class="bg-vector"></i><span>Why Choose Treker</span></h2>
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

  <!--Trending Destinations Section-->
  <section class="trending-destinations">
      <div class="auto-container">

          <div class="title-box centered">
              <div class="subtitle">Top Destinations</div>
              <h2><i class="bg-vector"></i><span>Trending Destinations</span></h2>
          </div>

          <div class="gallery-box">
              <div class="masonry-container row clearfix">
                  <!--Block-->
                  <div class="dest-block-one masonry-item col-lg-8 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-1.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-one masonry-item column-width col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-2.jpg" alt=""></router-link></div>
                          <div class="hvr-box alt-hvr">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-one masonry-item col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-3.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-one masonry-item col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-4.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-one masonry-item column-width col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-5.jpg" alt=""></router-link></div>
                          <div class="hvr-box alt-hvr">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
                                      <div class="tour-count"><span>15 Tours</span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="dest-block-one masonry-item col-lg-8 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="image-box"><router-link to="/"><img src="@/assets/images/resource/gallery-6.jpg" alt=""></router-link></div>
                          <div class="hvr-box">
                              <div class="cap-box">
                                  <div class="cap-inner clearfix">
                                      <h4><router-link to="tours">Rajasthan</router-link></h4>
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
              <h2><i class="bg-vector"></i><span>Featured Trekking Products</span></h2>
          </div>

          <div class="row clearfix">
              <!--Block-->
              <div class="prod-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                      <div class="why-block">
                          <div class="image-box">
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-1.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Smart Air Bag Travel</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-2.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Travel Suitcase Bag</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-3.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Travel Light Suitcase</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-4.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Smart Travel Gadgets</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-5.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Set of Black Silk Pillow</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-6.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Travel Slipping Support</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-7.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Travelling Black Suitcase</router-link></h5>
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
                              <div class="image"><router-link to="product_single"><img src="@/assets/images/resource/shop/prod-8.jpg" alt=""></router-link></div>
                              <div class="hvr-box">
                                  <div class="hvr-inner">
                                      <div class="hvr-content">
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-shopping-cart"></i> Add To Cart</router-link></div>
                                          <div class="link"><router-link to="product_single" class="theme-btn"><i class="far fa-bars"></i> Details</router-link></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="add-fav"><router-link to="product_single" class="theme-btn"><i class="far fa-heart"></i></router-link></div>
                          </div>
                          <div class="lower-box">
                              <h5><router-link to="product_single">Coffee Travel Mug</router-link></h5>
                              <div class="price"><span>$225.00</span></div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>

          <div class="see-more-link"><router-link to="shop" class="theme-btn btn-style-one"><span>View All Products <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
      </div>
  </section>

  <!--Group Travel Section-->
  <section class="group-travel">
      <div class="bg-layer" style="background-image: url(images/background/image-2.jpg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <div class="row clearfix">
                  <!--Block-->
                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Himalay</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travel-block-one alternate col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Himalay</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 5 days</span> &ensp; | &ensp; <span class="i-block">259P, Himalaya Ag</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>View Details <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--Testimonials Section-->
  <section class="testimonials-one">
      <div class="bg-layer" style="background-image: url(images/background/image-3.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">Review & Testimonial</div>
              <h2><i class="bg-vector"></i><span>Top Reviews for Treker</span></h2>
          </div>
          <div class="carousel-box">
              <div class="testi-carousel owl-theme owl-carousel">
                  <!--Testi Block-->
                  <div class="testi-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/quotes-1.svg" alt=""></div>
                          <div class="image"><img src="@/assets/images/resource/testi-thumb-1.jpg" alt=""></div>
                          <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most Fight School has specialized.</div>
                          <div class="info">
                              <div class="name">Randall Schwartz</div>
                              <div class="clearfix">
                                  <div class="designation">Women's Trainner</div>
                                  <div class="rating"><div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Testi Block-->
                  <div class="testi-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/quotes-1.svg" alt=""></div>
                          <div class="image"><img src="@/assets/images/resource/testi-thumb-2.jpg" alt=""></div>
                          <div class="text">We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.</div>
                          <div class="info">
                              <div class="name">Andru Smith</div>
                              <div class="clearfix">
                                  <div class="designation">Boxing Trainer</div>
                                  <div class="rating"><div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Testi Block-->
                  <div class="testi-block alternate">
                      <div class="inner-box">
                          <div class="image-layer" style="background-image: url(images/background/testi-image-1.jpg);"></div>
                          <div class="over-box">
                              <div class="over-title"><router-link to="/">MASTER TREKER TRAVEL</router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Testi Block-->
                  <div class="testi-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/quotes-1.svg" alt=""></div>
                          <div class="image"><img src="@/assets/images/resource/testi-thumb-1.jpg" alt=""></div>
                          <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most Fight School has specialized.</div>
                          <div class="info">
                              <div class="name">Randall Schwartz</div>
                              <div class="clearfix">
                                  <div class="designation">Women's Trainner</div>
                                  <div class="rating"><div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Testi Block-->
                  <div class="testi-block">
                      <div class="inner-box">
                          <div class="icon"><img src="@/assets/images/icons/quotes-1.svg" alt=""></div>
                          <div class="image"><img src="@/assets/images/resource/testi-thumb-2.jpg" alt=""></div>
                          <div class="text">We teach martial arts because we love it — not because we want to make money on you. Unlike other martial.</div>
                          <div class="info">
                              <div class="name">Andru Smith</div>
                              <div class="clearfix">
                                  <div class="designation">Boxing Trainer</div>
                                  <div class="rating"><div class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Testi Block-->
                  <div class="testi-block alternate">
                      <div class="inner-box">
                          <div class="image-layer" style="background-image: url(images/background/testi-image-1.jpg);"></div>
                          <div class="over-box">
                              <div class="over-title"><router-link to="/">MASTER TREKER TRAVEL</router-link></div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!--Sponsors Section-->
  <section class="sponsors-one">
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
  <section class="news-section">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="@/assets/images/resource/stones-right.svg" alt="" title=""></div>
      <div class="bg-layer" style="background-image: url(images/background/image-1.jpg);"></div>
      <div class="auto-container">
          <div class="title-box centered">
              <div class="subtitle">Treker Top News</div>
              <h2><i class="bg-vector"></i><span>Treker Latest News</span></h2>
          </div>
          <div class="content-box">
              <div class="row clearfix">
                  <!--Block-->
                  <div class="news-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div class="image-box">
                              <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-1.jpg" alt="" title=""></router-link></div>
                              <div class="cat"><span>Trekking</span></div>
                          </div>
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
                      <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div class="lower-content">
                              <div class="info">
                                  <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                              </div>
                              <h4><router-link to="blog_single">THE BEST BOXERS IN THEIR WEIGH Target CATEGOR</router-link></h4>
                              <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most innovative.</div>
                          </div>
                          <div class="image-box">
                              <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-2.jpg" alt="" title=""></router-link></div>
                              <div class="cat"><span>Trekking</span></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="news-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div class="image-box">
                              <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-3.jpg" alt="" title=""></router-link></div>
                              <div class="cat"><span>Trekking</span></div>
                          </div>
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

  <!--Subscribe Section-->
  <section class="subscribe-section">
      
      <div class="auto-container">
          <div class="content-box">
              <div class="bg-layer" style="background-image: url(images/background/newsletter-bg.png);"></div>
              <div class="row clearfix">
                  <div class="image-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <div class="inner">
                          <div class="image"><img src="@/assets/images/resource/newsletter-image.svg" alt=""></div>
                      </div>
                  </div>

                  <div class="text-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
                      <div class="inner">
                          <div class="title">
                              <div class="subtitle">Newsletter</div>
                              <h2>SUBSCRIBE NOW</h2>
                              <div class="text">Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</div>
                          </div>
                          <div class="form-box subscribe-form">
                              <form method="post" action="index">
                                  <div class="form-group">
                                      <div class="field-inner">
                                          <span class="icon alt-icon far fa-envelope"></span>
                                          <input type="email" name="email" value="" placeholder="Email Address">
                                      </div>
                                      <button type="submit" class="theme-btn btn-style-one"><span>SUBSCRIBE <i class="icon fa fa-paper-plane"></i></span></button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--Main Footer-->
  <footer class="main-footer">
      <div class="bg-layer" style="background-image: url(images/background/f-bottom-bg.svg);"></div>
      <div class="floated-icon"><img src="@/assets/images/resource/footer-stones.svg" alt="" title=""></div>
      <div class="info-section">
          <div class="auto-container">

              <div class="row clearfix">

                  <div class="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                      <!--Logo-->
                      <div class="footer-logo">
                          <div class="logo"><router-link to="/" title="Treker"><img src="@/assets/images/logo.svg" alt="" title="Treker"></router-link></div>
                      </div>
                      <div class="footer-text">Treker was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</div>
                  </div>

                  <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                      <div class="row clearfix">

                          <div class="info-block col-lg-4 col-md-4 col-sm-12">
                              <h6>EUROPE</h6>
                              <div class="info">
                                  <ul>
                                      <li>Europe 45 Gloucester Road London DT1M 3BF</li>
                                      <li><a href="/">+44 (0)20 3671 5709</a></li>
                                  </ul>
                              </div>
                          </div>

                          <div class="info-block col-lg-4 col-md-4 col-sm-12">
                              <h6>ASIA & PACIFIC</h6>
                              <div class="info">
                                  <ul>
                                      <li>2473 Red Road Ste 98 Singapore SG</li>
                                      <li><a href="tel:+16232116319">+ 1 623 211 6319</a></li>
                                  </ul>
                              </div>
                          </div>

                          <div class="info-block col-lg-4 col-md-4 col-sm-12">
                              <h6>NORTH AMERICA</h6>
                              <div class="info">
                                  <ul>
                                      <li>Europe 45 Gloucester Road London DT1M 3BF</li>
                                      <li><a href="/">+44 (0)20 3671 5709</a></li>
                                  </ul>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="lower-section">
          <div class="auto-container">
              <div class="content-box">
                  <div class="row clearfix">

                      <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                          <div class="row clearfix">

                              <div class="footer-column col-lg-4 col-md-4 col-sm-12">
                                  <h6>About us</h6>
                                  <div class="links">
                                      <ul>
                                          <li><router-link to="/">About Us</router-link></li>
                                          <li><router-link to="/">Community Blog</router-link></li>
                                          <li><router-link to="/">Rewards</router-link></li>
                                          <li><router-link to="/">Work with Us</router-link></li>
                                          <li><router-link to="/">Contact</router-link></li>
                                      </ul>
                                  </div>
                              </div>

                              <div class="footer-column col-lg-4 col-md-4 col-sm-12">
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

                              <div class="footer-column col-lg-4 col-md-4 col-sm-12">
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

                          </div>
                      </div>

                      <div class="footer-column col-xl-4 col-lg-6 col-md-8 col-sm-12">
                          <h6>Gallery</h6>
                          <!--Logo-->
                          <div class="footer-gallery">
                              <div class="inner clearfix">
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-1.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-1.jpg" alt=""></a></div></div>
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-2.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-2.jpg" alt=""></a></div></div>
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-3.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-3.jpg" alt=""></a></div></div>
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-4.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-4.jpg" alt=""></a></div></div>
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-5.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-5.jpg" alt=""></a></div></div>
                                  <div class="image-block"><div class="image"><a to="images/resource/footer-thumb-6.jpg" class="lightbox-image"><img src="@/assets/images/resource/footer-thumb-6.jpg" alt=""></a></div></div>
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
                  <div class="social-links">
                      <ul class="clearfix">
                          <li><router-link to="/"><i class="fab fa-facebook-f"></i></router-link></li>
                          <li><router-link to="/"><i class="fab fa-twitter"></i></router-link></li>
                          <li><router-link to="/"><i class="fab fa-youtube"></i></router-link></li>
                          <li><router-link to="/"><i class="fab fa-instagram"></i></router-link></li>
                      </ul>
                  </div>
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