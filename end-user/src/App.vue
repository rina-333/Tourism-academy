<template>
  <div id="app">
    <Navbar></Navbar>
    <div>
    <router-view style="margin-top: 80px"/>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

body {
  background: white;
}

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.align-left {
  text-align: left !important;
}

.toCapitalFirst {
  text-transform: capitalize;
}

.more-top {
  margin-top: 100px;
}

.bg-custom {
background-color: #1a2c43f8;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 13px;
}

.box-simple {
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 0px;
  padding: 5%;
}

.txtDiv {
  position: absolute;
  left: 0px;
  top: 0px;
  background: #1a2c43f3;
  color: #fff;
}

.stretched-link {
  text-decoration: none;
  color:black
}

.example {
  margin: 1em 0;
  text-align: center;
}

.example .img-small {
  width: 10vw;
  height: 10vw;
}

.example .img-tall {
  width: 350px;
  height: 350px;
}

.example-cover img {
  object-fit: cover;
}

.example-contain img {
  object-fit: contain;
}
/* Copy CSS */
.card-top {
  margin-top: 10rem;
}

.btn-primary {
  background-color: #1a2c43f8 !important;
  border-radius: 4px;
}

/* Top Bar */
.headline {
  background: #0b487af8;
  height: 60px;
  padding: 13px;
}

.headline-button {
  background: #0b487af8;
  height: 60px;
  padding: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  font-size: 13px;
}

.text-headline {
  font-family: 'Merriweather', serif;
  font-weight: bolder;
  font-size: 12px;
  margin-right: 17px;
}

a {
  text-decoration: none;
  color: rgb(252, 246, 246);
}

.text-green:hover {
  text-decoration: none;
  color: rgb(35, 150, 51);
}

.logo-youtube:hover {
  text-decoration: none;
  color: rgb(226, 21, 21);
  border-radius: 5px;
  background: rgba(253, 5, 5, 0.075);
}

.logo-twitter:hover {
  text-decoration: none;
  color: rgb(16, 69, 243);
  border-radius: 5px;
  background: rgba(0, 0, 255, 0.123);
}

.logo-facebook:hover {
  text-decoration: none;
  color: rgb(16, 69, 243);
  border-radius: 5px;
  background: rgba(0, 0, 255, 0.11);
}

.logo-instagram:hover {
  text-decoration: none;
  color: rgb(180, 37, 85);
  border-radius: 5px;
  background: rgba(245, 4, 84, 0.151);
}

.button-daftar {
  color: #fff;
  background-color: rgba(255, 196, 0, 0.877);
  border-color: #b98004;
}
/* End of Top Bar */

/* Navbar */
.navbar-custom {
  position: fixed !important;
  width: 100% !important;
  top: 0 !important;
  background-color: #1a2c43f8;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 13px;
}

.navbar-nav li:hover .dropdown-menu {
  display:block
}

.navbar-toggler { border-color: rgba(244, 244, 250, 0.979) !important; }

.dropdown-item {
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 13px !important;
  color: #f0f9ff !important;
  background-color: #1a2c43f8 !important;
  padding: 1rem;
}

.nav-item {
  margin-right: 2rem;
}

.navbar-brand {
  margin-right: 2rem;
}

.dropdown-menu {
  background-color: #1a2c43 !important;
  padding: 10px !important;
}

.dropdown-item:hover {
  background-color: #1a2c45ea;
  color: rgb(155, 158, 160)  !important;
}

.lighten-blue:hover {
  color: rgb(52, 176, 248);
}
/* End of Navbar */

/* Video Autoplay */
header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(95, 103, 146, 0.63);
  opacity: 0.5;
  z-index: 1;
}

/* Media Query for devices withi coarse pointers and no hover functionality */

/* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video element */

@media (pointer: coarse) and (hover: none) {
  header {
    background-image: url('./assets/cover.png') ;
  }

  header video {
    display: none;
  }
}
/* End of Video Autoplay */

/* Button white custom */
.btn-custom{
  border: none;
  color: #fff;
  padding-bottom: 10px;
  position: relative;
  background-image: linear-gradient(to top, #1a2c43f8 0px, #1a2c433a 10px, #1a2c43f8 10px, #283f5ef8 100%);
}
.btn-custom:hover{
  color: #fff;
}
.btn-custom:after{
  content: "";
  width: 0;
  height: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.35s ease 0s;
}
.btn-custom:hover:after{
  width: 100%;
}
.btn-custom.btn-custom-xs{
  padding-bottom: 8px;
  background-image: linear-gradient(to top, #1a2c43f8 0px, #1a2c433a 6px, #1a2c43f8 6px, #283f5ef8 100%);
}
.btn-custom.btn-custom-xs:after{
  height: 6px;
}
.btn-custom.white:after{
  background: #f9fafcf8;
}

@media only  screen and (max-width: 767px){
  .btn{ margin-bottom: 20px; }
}
/* End of button white custom */

.text-blue {
  color: #2f9ad8;
}

/*ZoomIn Hover Effect*/
.hover-zoomin a {
  display: block;
  position: relative;
  overflow: hidden;
}
.hover-zoomin img {
  width: 100%;
  height: auto;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.hover-zoomin:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
/* End of ZoomIn Hover Effect*/

.title-margin {
  margin-top: 11%;
  margin-bottom: 3%;
}

/* Card Event */
.news-card-set {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif
}

.news-card-body {
  padding: 10px 10px 30px 20px;
}

.news-card-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.card-news {
  width: 320px;
  height: 480px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  transition: all 0.5s ease;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  margin-bottom: 20px;
  overflow: hidden
}

.card-news .backgroundEffect {
  bottom: 0;
  height: 0px;
  width: 100%
}

.card-news:hover {
  color: #fff;
  transform: scale(1.025);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px
}

.card-news:hover .backgroundEffect {
  bottom: 0;
  height: 320px;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: #1a2c43f8;
  animation: popBackground 0.3s ease-in
}

@keyframes popBackground {
  0% {
      height: 20px;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%
  }

  50% {
      height: 80px;
      border-top-left-radius: 75%;
      border-top-right-radius: 75%
  }

  75% {
      height: 160px;
      border-top-left-radius: 85%;
      border-top-right-radius: 85%
  }

  100% {
      height: 320px;
      border-top-left-radius: 100%;
      border-top-right-radius: 100%
  }
}

.card-news .pic {
  position: relative
}

.card-news .pic img {
  width: 100%;
  height: 280px;
  object-fit: cover
}

.card-news .date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 75px;
  background-color: #1a2c43f8;
  color: white;
  position: absolute;
  bottom: 0px;
  transition: all ease
}

.card-news .date .day {
  font-size: 14px;
  font-weight: 600
}

.card-news .date .month,
.card-news .date .year {
  font-size: 10px
}

.card-news .text-muted {
  font-size: 12px
}

.card-news:hover .text-muted {
  color: #fff !important
}

.card-news .content {
  padding: 0 20px
}

.card-news .content .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #1a2c43f8;
  border-radius: 4px;
  font-size: 12px;
  border: none
}

.card-news:hover .content .btn {
  background: #fff !important;
  color: #0c0d0ef8;
  box-shadow: #0000001a 0px 3px 5px
}

.card-news .content .btn .fas {
  font-size: 10px;
  padding-left: 5px
}

.card-news .content .foot .admin {
  color: #1a2c43f8;
  font-size: 12px
}

.card-news:hover .content .foot .admin {
  color: #fff
}

.card-news .content .foot .icon {
  font-size: 12px
}
/* End of Card Event */

/* Testimonial */
#demo {
  background: linear-gradient(112deg, rgb(254, 254, 255) 50%, rgb(222, 234, 253) 50%);
  max-width: 900px;
  margin: auto
}

.carousel-caption {
  position: initial;
  z-index: 10;
  padding: 5rem 8rem;
  color: rgba(15, 22, 49, 0.863);
  text-align: center;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: bold;
  line-height: 2rem
}

@media(max-width:767px) {
  .carousel-caption {
      position: initial;
      z-index: 10;
      padding: 3rem 2rem;
      color: rgba(78, 77, 77, 0.856);
      text-align: center;
      font-size: 0.7rem;
      font-style: italic;
      font-weight: bold;
      line-height: 1.5rem
  }
}

.carousel-caption img {
  width: 6rem;
  border-radius: 5rem;
  margin-top: 2rem
}

@media(max-width:767px) {
  .carousel-caption img {
      width: 4rem;
      border-radius: 4rem;
      margin-top: 1rem
  }
}

#image-caption {
  font-style: normal;
  font-size: 1rem;
  margin-top: 0.5rem
}

@media(max-width:767px) {
  #image-caption {
      font-style: normal;
      font-size: 0.6rem;
      margin-top: 0.5rem
  }
}

.button-slide-testimony {
  background-color: #1a2c43f8;
  padding: 1.4rem
}

@media(max-width:767px) {
  .button-slide-testimony {
      padding: 0.8rem
  }
}

.carousel-control-prev {
  justify-content: flex-start
}

.carousel-control-next {
  justify-content: flex-end
}

.carousel-control-prev,
.carousel-control-next {
  transition: none;
  opacity: unset
}

.text-lighter {
  font-weight: lighter;
}
/* End of Testimonial */

/* Footer */
.footer-dark {
  padding: 36px 0px 10px 0px;
  color: #f0f9ff;
  background-color: #1a2c43f8;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 30px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 8px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
/* End of Footer */

/* Sejarah */
.box-simple {
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 0px;
  padding: 5%;
}

.new-topic {
  margin-top: 40px;
}

.top-paragraf {
  padding-top: 20px;
  text-align: justify;
}

.paragraf {
  padding-top: 15px;
  text-align: justify;
}
/* End of Sejarah */

/* Structure */
.structure {
  margin-top: 10px;
  margin-bottom: 0px;
}

/* End of Structure */

/* Facility */
.facility {
  margin-bottom: 50px;
}

.facility-text {
  color: rgba(88, 82, 82, 0.849);
}

.facility-item {
  margin-top: 30px;
}
/* End of Facility */

/* CSS Selector */
.first-letter-selector::first-letter {
  font-size: 130%;
  color: #1a2c43f8;
}
/* End of CSS Selector */

.marginLebih {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
