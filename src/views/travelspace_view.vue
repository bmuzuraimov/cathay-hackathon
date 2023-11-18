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
                          <li><router-link to="hotels">Hotels</router-link></li>
                          <li><router-link to="travel_experiences">Travel Experiences</router-link></li>
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
              <router-link to="/">Home</router-link> &ensp;<i class="fa fa-caret-right"></i>&ensp; <router-link to="travelsyncking">TravelSync</router-link> &ensp;<i class="fa fa-caret-right"></i>&ensp; <span class="current">My TravelSpace</span>
          </div>
      </div>
  </section>

  <!-- Banner Section -->
  <section class="packages-banner" style="background-image: url(/assets/images/background/banner-2.jpg);">
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
                  <h5>About Los Angeles</h5>
                  <p>Los Angeles, often known simply as L.A., is a sprawling Southern California city famed for its iconic film and entertainment industry, notably Hollywood, which has drawn aspiring actors and artists for over a century. With a diverse population, the city is a melting pot of cultures, cuisines, and languages, contributing to its vibrant and dynamic character. Its sprawling landscape encompasses everything from expansive beaches like Venice Beach and Santa Monica to luxury boutiques and restaurants in Beverly Hills. </p>
                  <p>Leaving them to be a high-valued target for robbery, assault, and more. There could be threats made against executives and even bribery and blackmail from a member of the public or disgruntled employees. When it comes to other VIPs</p>
                  <div class="row">
                  <textarea class="col-12" id="prompt" name="" cols="" rows="4">Generate me itenerary including transportation, hotel and fun local activities under $500 for each group member</textarea>
                  <button @click="generatePlan" class="col-12 theme-btn btn-style-one">Generate Itinerary</button>
                    </div>
                  <!-- Itinerary Box -->
                  <div class="itinerary-box">
                      <h5>Itinerary</h5>
                      <div class="days-outer" v-if="isGenerated">
                      
                          <!-- Day Box -->
                          <div v-for="iten in itens" :key="iten" class="day-box">
                              <div class="title">{{ iten.dates }}</div>
                              <div class="day-text">{{ iten.hotel || iten.transportation || iten.activity }}</div>
                              <div class="day-text">{{ iten.price }}</div>
                              <div class="day-text">{{ iten.booking_info }}</div>
                              <div class="day-text">{{ iten.dates }}</div>
                          </div>
                          
                      </div>
                  </div>
                  <!-- End Itinerary Box -->

              </div>
          </div>
          
      </div>
  </section>
  <!-- End Package Detail Section -->

    <!--Group Travel Section-->
    <section class="group-travel" v-if="isFinished">
      <div class="bg-layer" style="background-image: url(/assets/images/background/image-2.jpg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <div class="row clearfix">
                  <!--Block-->
                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Los Angeles</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 7 days</span> &ensp; | &ensp; <span class="i-block">Your Share</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Purchase with Creditcard<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Purchase with Asia Miles <i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Los Angeles</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 7 days</span> &ensp; | &ensp; <span class="i-block">Group member #1</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Share the payment link<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Los Angeles</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 7 days</span> &ensp; | &ensp; <span class="i-block">Group member #2</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Share the payment link<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Los Angeles</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 7 days</span> &ensp; | &ensp; <span class="i-block">Group member #3</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Share the payment link<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
                          </div>
                      </div>
                  </div>

                  <div class="travel-block-one col-lg-6 col-md-12 col-sm-12">
                      <div class="inner-box">
                          <div class="title"><h4>Group Travel to Los Angeles</h4></div>
                          <div class="content">
                              <div class="info">
                                  <span class="i-block"><i class="icon far fa-clock"></i> 7 days</span> &ensp; | &ensp; <span class="i-block">Group member #4</span>
                              </div>
                              <div class="price"><span>$235.00</span></div>
                              <div class="text">Richly varied landscapes, luxurious accommodation and a wide range of wild experiences await you. </div>
                              <div class="link-box"><router-link to="/" class="theme-btn btn-style-one"><span>Share the payment link<i class="icon"><img src="@/assets/images/icons/logo-icon.svg" alt="" title=""></i></span></router-link></div>
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
  import axios from "axios";
  export default {
    data() {
      return {
        isGenerated: false,
        itens: [],
        isFinished: false,
        allItens: [
                {
                    "hotel": "The Ritz-Carlton, Los Angeles",
                    "price": "$450 per night",
                    "dates": "28-07-2024 to 04-08-2024",
                    "booking_info": "Luxury hotel in downtown LA, offering stunning city views, a rooftop pool, and spa. Book via hotel website or major travel platforms."
                },
                {
                    "transportation": "Rental Car - Standard Sedan",
                    "price": "$35 per day",
                    "dates": "28-07-2024 to 04-08-2024",
                    "booking_info": "Rent from companies like Hertz or Enterprise. Pickup at LAX. Pre-booking recommended for better rates."
                },
                {
                    "activity": "Hollywood Walk of Fame Tour",
                    "price": "$25 per person",
                    "dates": "29-07-2024",
                    "booking_info": "Guided walking tour of Hollywood's most famous stars. Tickets available online."
                },
                {
                    "hotel": "Santa Monica Beach Hotel",
                    "price": "$350 per night",
                    "dates": "28-07-2024 to 04-08-2024",
                    "booking_info": "Beachfront hotel with easy access to Santa Monica Pier. Book on hotel website for best rates."
                },
                {
                    "transportation": "Public Transit Pass",
                    "price": "$7 per day",
                    "dates": "28-07-2024 to 04-08-2024",
                    "booking_info": "Unlimited rides on LA Metro and buses. Purchase passes at station kiosks or online."
                },
                {
                    "activity": "Getty Center Visit",
                    "price": "Free admission, $20 parking",
                    "dates": "30-07-2024",
                    "booking_info": "No ticket required for entry. Parking can be paid on arrival. Closed Mondays."
                },
                {
                    "hotel": "Ace Hotel Downtown LA",
                    "price": "$200 per night",
                    "dates": "28-07-2024 to 04-08-2024",
                    "booking_info": "Hip hotel with a rooftop bar, near LA's arts district. Book directly for best deals."
                },
                ],
        messages: [],
        userMessage: "",
        apiKey: "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",
        endpoint: "https://api.openai.com/v1/engines/davinci/completions",
      };
    },
    methods: {
        generatePlan(){
            this.isGenerated = true;
            this.allItens.forEach((item, index) => {
            setTimeout(() => {
                this.itens.push(item);
            }, index * 1000); // 1000ms delay between each item
            });
            this.isFinished = true;
            // this.sendMessage();
        },
      async sendMessage() {
        // Add user message to the chat
        this.messages.push({ id: Date.now(), content: this.userMessage, isAI: false });
  
        // Clear the input field
        this.userMessage = "Build me a travelplan with hotels and transportation from dates 2023-01-01 to 2023-01-07";
  
        // Call the API to get AI response
        const response = await axios.post(this.endpoint, {
          prompt: this.userMessage,
          max_tokens: 256,
        }, {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        });
        console.log(response)
        // Add AI response to the chat
        this.messages.push({ id: Date.now(), content: response.data.choices[0].text.trim(), isAI: true });
      },
    },
  };
</script>

<style scoped>
#prompt{
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
}
</style>