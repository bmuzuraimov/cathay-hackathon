<template>
    <div class="page-wrapper"> 
  
 
  
  <div class="search-backdrop"></div>
  
  <!-- Main Header -->
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
                                  <li class="current dropdown"><router-link to="blog">News</router-link>
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
  <!-- End Main Header -->

  <!-- Search Backdrop -->
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
                  <li class="current dropdown"><router-link to="blog">News</router-link>
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
              <h2>Blog Classic</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><router-link to="/">Home</router-link></li>
                      <li class="current">Blog Classic</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->
  
  <!-- Sidebar Page Container -->
  <section class="sidebar-page-container">
      <div class="auto-container">
          <div class="row clearfix">
          
              <!-- Content Side -->
              <div class="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
                  <div class="blog-classic">
                      
                      <!-- Block -->
                      <div class="news-block-two">
                          <div class="inner-box">
                              <div class="image-box">
                                  <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-4.jpg" alt="" title=""></router-link></div>
                                  <div class="overlay-box">
                                      <div class="category">Trekking</div>
                                      <h4><router-link to="blog_single">THE UPCOMING WBC CHAMP SHIPS 2022 in feb</router-link></h4>
                                  </div>
                              </div>
                              <div class="lower-content">
                                  <div class="info">
                                      <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                                  </div>
                                  <div class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in...</div>
                                  <router-link class="theme-btn read-more" href="blog-single">Read More <span class="fa fa-angle-right"></span></router-link>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Block -->
                      <div class="news-block-two">
                          <div class="inner-box">
                              <div class="image-box">
                                  <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-4.jpg" alt="" title=""></router-link></div>
                                  <div class="overlay-box">
                                      <div class="category">Trekking</div>
                                      <h4><router-link to="blog_single">THE UPCOMING WBC CHAMP SHIPS 2022 in feb</router-link></h4>
                                  </div>
                              </div>
                              <div class="lower-content">
                                  <div class="info">
                                      <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                                  </div>
                                  <div class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in...</div>
                                  <router-link class="theme-btn read-more" href="blog-single">Read More <span class="fa fa-angle-right"></span></router-link>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Block -->
                      <div class="news-block-two">
                          <div class="inner-box">
                              <div class="image-box">
                                  <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-4.jpg" alt="" title=""></router-link></div>
                                  <div class="overlay-box">
                                      <div class="category">Trekking</div>
                                      <h4><router-link to="blog_single">THE UPCOMING WBC CHAMP SHIPS 2022 in feb</router-link></h4>
                                  </div>
                              </div>
                              <div class="lower-content">
                                  <div class="info">
                                      <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                                  </div>
                                  <div class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in...</div>
                                  <router-link class="theme-btn read-more" href="blog-single">Read More <span class="fa fa-angle-right"></span></router-link>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Block -->
                      <div class="news-block-two">
                          <div class="inner-box">
                              <div class="image-box">
                                  <div class="image"><router-link to="blog_single"><img src="@/assets/images/resource/news-4.jpg" alt="" title=""></router-link></div>
                                  <div class="overlay-box">
                                      <div class="category">Trekking</div>
                                      <h4><router-link to="blog_single">THE UPCOMING WBC CHAMP SHIPS 2022 in feb</router-link></h4>
                                  </div>
                              </div>
                              <div class="lower-content">
                                  <div class="info">
                                      <span class="i-block">By : Sword Joy</span> &ensp; | &ensp; <span class="i-block">20 March 2022</span>
                                  </div>
                                  <div class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in...</div>
                                  <router-link class="theme-btn read-more" href="blog-single">Read More <span class="fa fa-angle-right"></span></router-link>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Styled Pagination -->
                      <ul class="styled-pagination">
                          <li class="prev"><router-link to="/">Prev</router-link></li>
                          <li><router-link to="/" class="active">01</router-link></li>
                          <li><router-link to="/">02</router-link></li>
                          <li><router-link to="/">03</router-link></li>
                          <li><router-link to="/">04</router-link></li>
                          <li><router-link to="/">05</router-link></li>
                          <li class="next"><router-link to="/">Next</router-link></li>
                      </ul>
                      <!-- End Styled Pagination -->
                      
                  </div>
              </div>
              
              <!-- Sidebar Column -->
              <div class="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
                  <div class="inner-column">
                      
                      <!-- Search Widget -->
                      <div class="sidebar-widget search-box">
                          <div class="sidebar-title">
                              <h5>Search</h5>
                          </div>
                          
                          <form method="post" action="contact">
                              <div class="form-group">
                                  <input type="search" name="search-field" value="" placeholder="Search Here ..." required>
                                  <button type="submit"><span class="icon fa fa-search"></span></button>
                              </div>
                          </form>
                          
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
                              <li style="background-image: url(images/background/category-1.jpg)">
                                  <span class="txt">Therapy</span> <span class="number">05</span>
                              </li>
                              <li style="background-image: url(images/background/category-2.jpg)">
                                  <span class="txt">Beauty Items</span> <span class="number">09</span>
                              </li>
                              <li style="background-image: url(images/background/category-3.jpg)">
                                  <span class="txt">Body Sliming</span> <span class="number">07</span>
                              </li>
                              <li style="background-image: url(images/background/category-4.jpg)">
                                  <span class="txt">Fashion Fitness</span> <span class="number">10</span>
                              </li>
                          </ul>
                      </div>
                      
                      <!-- Search Widget -->
                      <div class="sidebar-widget popular-posts">
                          <div class="sidebar-title">
                              <h5>Recent Post</h5>
                          </div>
                          
                          <article class="post">
                              <figure class="post-thumb"><img src="@/assets/images/resource/post-thumb-1.jpg" alt=""><router-link to="news-detail" class="overlay-box"><span class="icon fa fa-link"></span></router-link></figure>
                              <div class="text"><router-link to="news-detail">the best beach hikes on the west coast</router-link></div>
                              <div class="post-info">20 March 2022</div>
                          </article>
                          
                          <article class="post">
                              <figure class="post-thumb"><img src="@/assets/images/resource/post-thumb-2.jpg" alt=""><router-link to="news-detail" class="overlay-box"><span class="icon fa fa-link"></span></router-link></figure>
                              <div class="text"><router-link to="news-detail">New: Freehand Template for the whole</router-link></div>
                              <div class="post-info">20 March 2022</div>
                          </article>
                          
                          <article class="post">
                              <figure class="post-thumb"><img src="@/assets/images/resource/post-thumb-3.jpg" alt=""><router-link to="news-detail" class="overlay-box"><span class="icon fa fa-link"></span></router-link></figure>
                              <div class="text"><router-link to="news-detail">Security isn’t just a techn logy problem it’s</router-link></div>
                              <div class="post-info">20 March 2022</div>
                          </article>
                          
                      </div>
                      
                      <!-- Buy Treker Widget -->
                      <div class="sidebar-widget buy-treker-widget">
                          <div class="widget-content" style="background-image: url(images/background/buy.jpg)">
                              <div class="logo">
                                  <router-link to="/"><img src="@/assets/images/icons/buy-treker.svg" alt="" /></router-link>
                              </div>
                              <div class="text">Awesome Trekking Travel <br> Theme !</div>
                              <router-link to="/" class="theme-btn buy-now">Buy Now</router-link>
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