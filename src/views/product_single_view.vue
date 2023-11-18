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
              <h2>Shop Details</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><router-link to="/">Home</router-link></li>
                      <li class="current">Shop Details</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!-- product-details -->
  <section class="product-details">
      <div class="auto-container">
          <div class="basic-details">
              <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                      <div class="inner">
                          <div class="carousel-box">
                              <div class="slider-box">
                                  <div class="shop-single-carousel" id="shop-single-carousel">
                                      <!--Slide Block-->
                                      <div class="slide-block">
                                          <div class="inner-box">
                                              <div class="image"><img src="@/assets/images/resource/shop/shop-single-1.jpg" alt=""></div>
                                              <router-link to="images/resource/shop/shop-single-1.jpg" class="zoom-btn lightbox-image"><img src="@/assets/images/icons/zoom-2.svg" alt=""></router-link>
                                          </div>
                                      </div>
                                      <!--Slide Block-->
                                      <div class="slide-block">
                                          <div class="inner-box">
                                              <div class="image"><img src="@/assets/images/resource/shop/shop-single-1.jpg" alt=""></div>
                                              <router-link to="images/resource/shop/shop-single-1.jpg" class="zoom-btn lightbox-image"><img src="@/assets/images/icons/zoom-2.svg" alt=""></router-link>
                                          </div>
                                      </div>
                                      <!--Slide Block-->
                                      <div class="slide-block">
                                          <div class="inner-box">
                                              <div class="image"><img src="@/assets/images/resource/shop/shop-single-1.jpg" alt=""></div>
                                              <router-link to="images/resource/shop/shop-single-1.jpg" class="zoom-btn lightbox-image"><img src="@/assets/images/icons/zoom-2.svg" alt=""></router-link>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                              <div class="pagers-box">
                                  <div class="pager-two clearfix">
                                      <router-link to="" class="pager-item active" data-slide-index="0"><div class="image"><img src="@/assets/images/resource/shop/shop-thumb-1.jpg" alt=""></div></router-link>
                                      <router-link to="" class="pager-item" data-slide-index="1"><div class="image"><img src="@/assets/images/resource/shop/shop-thumb-2.jpg" alt=""></div></router-link>
                                      <router-link to="" class="pager-item" data-slide-index="2"><div class="image"><img src="@/assets/images/resource/shop/shop-thumb-3.jpg" alt=""></div></router-link>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                      <div class="product-details-content">
                          <div class="avail"><span>In Stock</span></div>
                          <h4>Smart Air Bag Travel</h4>
                          <ul class="rating-box clearfix">
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star empty"></i></li>
                          </ul>
                          <div class="reviews"><router-link to="/">(05 Review)</router-link></div>
                          <div class="item-price"><span>$225.00</span></div>
                          <div class="share"><router-link to="shop-single"><i class="flaticon-share-1"></i></router-link></div>
                          <div class="text">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land.</div>
                          <div class="color-range clearfix">
                              <div class="c-title">Color :</div>
                              <div class="colors clearfix"><span class="clr clr-one"></span><span class="clr clr-two"></span><span class="clr clr-three"></span><span class="clr clr-four"></span></div>
                          </div>
                          <div class="other-options clearfix">
                              <div class="quantity-box">
                                  <div class="item-quantity">
                                      <input class="qty-spinner" type="text" value="1" name="quantity">
                                  </div>
                              </div>
                              <div class="link-box">
                                  <button type="button" class="theme-btn btn-style-two"><span><i class="far fa-shopping-cart"></i> &ensp; Add To Cart</span></button>
                                  <button type="button" class="theme-btn add-wishlist"><span><i class="far fa-heart"></i> &ensp; Add to wishlist</span></button>
                              </div>
                          </div>
                          <div class="product-cat"><strong>Categories :</strong> <router-link to="/">Bags</router-link>, <router-link to="/">Travel Bags</router-link>, <router-link to="/">Tracking Bags</router-link></div>
                          <div class="product-cat tags"><strong>Tags :</strong> <router-link to="/">Bags</router-link>, <router-link to="/">Travel</router-link>, <router-link to="/">Tracking</router-link></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="product-description">
              <div class="tabs-box">
                  <div class="tab-btn-box centred">
                      <ul class="tab-btns tab-buttons">
                          <li class="tab-btn active-btn" data-tab="#tab-1">Description</li>
                          <li class="tab-btn" data-tab="#tab-2">REVIEWS (1)</li>
                      </ul>
                  </div>
                  <div class="tabs-content">
                      <div class="tab active-tab" id="tab-1">
                          <div class="text text-content">
                              <h5>Product Description</h5>
                              <p>There are many reasons why an executive or VIP would choose personal security services. Executives could be in charge of large companies that are worth millions or more, leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs, they do not need necessarily need to be..</p>
                              <h5>Product Features</h5>
                              <ul>
                                  <li>Free Download Instagram Logo</li>
                                  <li>Illustrator from Instagram Logo 9 Vectors svg vector collection</li>
                                  <li>Vectors SVG vector illustration graphic art design format.</li>
                                  <li>Following vectors are from the same pack as this vector also</li>
                                  <li>Instagram Logo SVG Vector is a part of Social Websites</li>
                              </ul>
                          </div>
                      </div>
                      <div class="tab" id="tab-2">
                          <div class="customer-comment">
                              <div class="comment">
                                  <figure class="customer-thumb"><img src="@/assets/images/resource/shop/rev-thumb-shop.png" alt=""></figure>
                                  <div class="info clearfix">
                                      <h6>Admin - </h6>
                                      <span>April 02, 2022</span>
                                  </div>
                                  <ul class="rating clearfix"> 
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star empty"></i></li>
                                  </ul>
                                  <p>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land.</p>
                              </div>
                          </div>

                          <div class="reply-box">
                              <h5>Add a review</h5>
                              <div class="reply-inner">
                                  <div class="default-form site-form">
                                      <form method="post" action="contact">
                                          <div class="row clearfix">
                                              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                                  <div class="f-label">Your Rating*</div>
                                                  <div class="field-inner">
                                                      <router-link class="add-rating theme-btn"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></router-link>
                                                  </div>
                                              </div>
                                              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                                  <div class="f-label">Your Review*</div>
                                                  <div class="field-inner">
                                                      <textarea name="fieldname" placeholder="" required></textarea>
                                                  </div>
                                              </div>
                                              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                  <div class="f-label">Your Name*</div>
                                                  <div class="field-inner">
                                                      <input type="text" name="fieldname" value="" placeholder="" required>
                                                  </div>
                                              </div>
                                              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                                  <div class="f-label">Your Email*</div>
                                                  <div class="field-inner">
                                                      <input type="email" name="fieldname" value="" placeholder="" required>
                                                  </div>
                                              </div>
                                              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                                  <button type="submit" class="theme-btn btn-style-two"><span>Post Comment<i class="icon far fa-angle-right"></i></span></button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- product-details end -->

  <!--Related Products Section-->
  <section class="products-section related-prod">
      <div class="floated-icon left"><img src="@/assets/images/resource/stones-left.svg" alt="" title=""></div>
      <div class="auto-container">

          <div class="title-box centered">
              <h2><span>Related Product</span></h2>
          </div>
          <div class="carousel-box">
              <div class="rel-prod-carousel owl-theme owl-carousel">
                  <!--Block-->
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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

                  <!--Block-->
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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
                  <div class="prod-block">
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