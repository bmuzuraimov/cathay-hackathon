import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about_view.vue')
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: () => import('../views/hotels_view.vue')
    },
    {
      path: '/blog_2',
      name: 'blog2',
      component: () => import('../views/blog_2_view.vue')
    },
    {
      path: '/blog_single',
      name: 'blogSingle',
      component: () => import('../views/blog_single_view.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog_view.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/booking_view.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout_view.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact_view.vue')
    },
    {
      path: '/destinations_2',
      name: 'destinations2',
      component: () => import('../views/destinations_2_view.vue')
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: () => import('../views/destinations_view.vue')
    },
    {
      path: '/error_page',
      name: 'errorPage',
      component: () => import('../views/error_page_view.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/faq_view.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/gallery_view.vue')
    },
    {
      path: '/index_2',
      name: 'index2',
      component: () => import('../views/index_2_view.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index_view.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login_view.vue')
    },
    {
      path: '/travelspace',
      name: 'travelspace',
      component: () => import('../views/travelspace_view.vue')
    },
    {
      path: '/packages',
      name: 'packages',
      component: () => import('../views/packages_view.vue')
    },
    {
      path: '/product_single',
      name: 'productSingle',
      component: () => import('../views/product_single_view.vue')
    },
    {
      path: '/reset_password',
      name: 'resetPassword',
      component: () => import('../views/reset_password_view.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop_view.vue')
    },
    {
      path: '/shopping_cart',
      name: 'shoppingCart',
      component: () => import('../views/shopping_cart_view.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup_view.vue')
    },
    {
      path: '/team_member',
      name: 'teamMember',
      component: () => import('../views/team_member_view.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/team_view.vue')
    },
    {
      path: '/terms_conditions',
      name: 'termsConditions',
      component: () => import('../views/terms_conditions_view.vue')
    },
    {
      path: '/travel_experience',
      name: 'travel_experience',
      component: () => import('../views/travel_experience_view.vue')
    },
    {
      path: '/travelsyncking',
      name: 'travelsyncking',
      component: () => import('../views/travelsync_view.vue')
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('../views/confirmation_view.vue')
    },
  ]
})

export default router
