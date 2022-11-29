// import jQuery
import $ from 'jquery'

// import flowbite
import flowbite from 'flowbite'

// Import Swiper and modules
// https://swiperjs.com/swiper-api#using-js-modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper'

/**
 * Function Description Goes Here
 */

const Panel = {
  init() {
    console.log('Panel hit')
  },

  methodName($param) {},
}

export default Panel

Panel.init()

Swiper.use([Navigation])
var swiper = new Swiper('.mySwiper', {
  zoom: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var swiper_img = new Swiper('.mySwiper-img', {
  zoom: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$('.swiper-button-next').on({
  mousedown: function () {
    var count = swiper.activeIndex + 2
    $('#page-count').text(`${count}/4`)
  },
})

$('.swiper-button-prev').on({
  mousedown: function () {
    console.log(swiper.activeIndex, 'here')
    var count = swiper.activeIndex
    console.log(count, 'count')
    $('#page-count').text(`${count}/4`)
  },
})
