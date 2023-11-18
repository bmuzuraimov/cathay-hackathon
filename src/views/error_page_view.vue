<template>
  <div class="error-page">
    <div class="image-layer" style="background-image: url(images/background/not-found-bg.jpg);"></div>
    <!-- Preloader -->
    <div class="preloader"></div> 
    <section class="not-found">

        <div class="cloud cloud-left"><img src="@/assets/images/resource/404-cloud-left.svg" alt=""></div>
        <div class="cloud cloud-right"><img src="@/assets/images/resource/404-cloud-right.svg" alt=""></div>
        <div class="auto-container">
            <div class="not-found-inner">
                <div class="image-box"><img src="@/assets/images/resource/404-image.svg" alt=""></div>
                <h2>Opps! The page does not exist!</h2>
                <div class="text">The page which you are looking for does not exist galley of type and scrambled it to make a type specimen book. Please return to the homepage.</div>
                <div class="link-box"><router-link to="/" class="theme-btn btn-style-two"><span>Go Back Home<i class="icon far fa-angle-right"></i></span></router-link></div>
            </div>
        </div>
    </section>

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="icon"><img src="@/assets/images/icons/arrow-up.svg" alt="" title="Go To Top"></span></div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>