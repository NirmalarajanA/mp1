/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
}
.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #3498db;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn.btn-primary {
  background: #3498db;
  color: #ffffff;
}
.btn.btn-primary:hover {
  background: #217dbb;
  transform: translateY(-2px);
}
.btn.btn-secondary {
  background: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}
.btn.btn-secondary:hover {
  background: #3498db;
  color: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}
.navbar.scrolled {
  padding: 10px 0;
}
.navbar.scrolled .nav-logo a {
  font-size: 1.2rem;
}
.navbar.scrolled .nav-link {
  font-size: 0.9rem;
}
.navbar .nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  transition: all 0.3s ease;
}
.navbar .nav-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.3s ease;
}
.navbar .nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.navbar .nav-menu .nav-item .nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}
.navbar .nav-menu .nav-item .nav-link:hover, .navbar .nav-menu .nav-item .nav-link.active {
  color: #3498db;
}
.navbar .nav-menu .nav-item .nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #3498db;
}
.navbar .hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.navbar .hamburger .bar {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  margin: 3px 0;
  transition: all 0.3s ease;
}

.hero {
  height: 100vh;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  position: relative;
}
.hero .hero-content {
  z-index: 2;
}
.hero .hero-content .hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
}
.hero .hero-content .hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.3s both;
}
.hero .hero-content .hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.6s both;
}
.hero .scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}
.hero .scroll-indicator i {
  font-size: 1.5rem;
}

.about {
  padding: 80px 0;
  background: #ffffff;
}
.about .about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.about .about-content .about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #666;
}
.about .about-content .about-image {
  text-align: center;
}
.about .about-content .about-image .profile-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.about .about-content .about-image .profile-img:hover {
  transform: scale(1.05);
}

.projects {
  padding: 80px 0;
  background: #f8f9fa;
}
.projects .carousel-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.projects .carousel-container .carousel {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.projects .carousel-container .carousel .carousel-slide {
  display: none;
}
.projects .carousel-container .carousel .carousel-slide.active {
  display: block;
  animation: slideIn 0.5s ease-in-out;
}
.projects .carousel-container .carousel .carousel-slide .project-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.projects .carousel-container .carousel .carousel-slide .project-card .project-image {
  font-size: 4rem;
  color: #3498db;
  margin-bottom: 1.5rem;
}
.projects .carousel-container .carousel .carousel-slide .project-card .project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}
.projects .carousel-container .carousel .carousel-slide .project-card .project-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.projects .carousel-container .carousel .carousel-slide .project-card .project-content .project-tech {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.projects .carousel-container .carousel .carousel-slide .project-card .project-content .project-tech .tech-tag {
  background: #3498db;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}
.projects .carousel-container .carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #2c3e50;
  color: #ffffff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}
.projects .carousel-container .carousel-btn:hover {
  background: #3498db;
  transform: translateY(-50%) scale(1.1);
}
.projects .carousel-container .carousel-btn.prev {
  left: -25px;
}
.projects .carousel-container .carousel-btn.next {
  right: -25px;
}
.projects .carousel-container .carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}
.projects .carousel-container .carousel-dots .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
}
.projects .carousel-container .carousel-dots .dot.active {
  background: #3498db;
}
.projects .carousel-container .carousel-dots .dot:hover {
  background: #2c3e50;
}

.skills {
  padding: 80px 0;
  background: #ffffff;
}
.skills .skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.skills .skills-grid .skill-column {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background: #f8f9fa;
  transition: all 0.3s ease;
}
.skills .skills-grid .skill-column:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.skills .skills-grid .skill-column h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}
.skills .skills-grid .skill-column h3 i {
  color: #3498db;
  margin-right: 0.5rem;
}
.skills .skills-grid .skill-column .skill-list {
  list-style: none;
}
.skills .skills-grid .skill-column .skill-list li {
  padding: 0.5rem 0;
  color: #666;
  border-bottom: 1px solid #eee;
}
.skills .skills-grid .skill-column .skill-list li:last-child {
  border-bottom: none;
}

.gallery {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) fixed center center;
  background-size: cover;
  position: relative;
  padding: 80px 0;
}
.gallery .gallery-overlay {
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
}
.gallery .gallery-overlay .gallery-subtitle {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  opacity: 0.9;
}
.gallery .gallery-overlay .gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.gallery .gallery-overlay .gallery-grid .gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}
.gallery .gallery-overlay .gallery-grid .gallery-item:hover {
  transform: scale(1.05);
}
.gallery .gallery-overlay .gallery-grid .gallery-item:hover .gallery-overlay-text {
  opacity: 1;
}
.gallery .gallery-overlay .gallery-grid .gallery-item img {
  width: 100%;
  height: 250px;
  -o-object-fit: cover;
     object-fit: cover;
}
.gallery .gallery-overlay .gallery-grid .gallery-item .gallery-overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: all 0.3s ease;
}
.gallery .gallery-overlay .gallery-grid .gallery-item .gallery-overlay-text h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
.gallery .gallery-overlay .gallery-grid .gallery-item .gallery-overlay-text p {
  font-size: 0.9rem;
  opacity: 0.8;
}

.video-section {
  padding: 80px 0;
  background: #f8f9fa;
}
.video-section .video-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.video-section .video-container .portfolio-video {
  width: 100%;
  height: 450px;
  -o-object-fit: cover;
     object-fit: cover;
}
.video-section .video-container .video-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: #ffffff;
  padding: 2rem;
}
.video-section .video-container .video-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.video-section .video-container .video-overlay p {
  opacity: 0.9;
}

.contact {
  padding: 80px 0;
  background: #ffffff;
}
.contact .contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.contact .contact-content .contact-info h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.contact .contact-content .contact-info p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.contact .contact-content .contact-info .contact-details {
  margin-bottom: 2rem;
}
.contact .contact-content .contact-info .contact-details .contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.contact .contact-content .contact-info .contact-details .contact-item i {
  color: #3498db;
  margin-right: 1rem;
  width: 20px;
}
.contact .contact-content .contact-info .social-links {
  display: flex;
  gap: 1rem;
}
.contact .contact-content .contact-info .social-links .social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #3498db;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}
.contact .contact-content .contact-info .social-links .social-link:hover {
  background: #2c3e50;
  transform: translateY(-3px);
}
.contact .contact-content .contact-form .form-group {
  margin-bottom: 1.5rem;
}
.contact .contact-content .contact-form .form-group input,
.contact .contact-content .contact-form .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.contact .contact-content .contact-form .form-group input:focus,
.contact .contact-content .contact-form .form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}
.contact .contact-content .contact-form .form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.footer {
  background: #2c3e50;
  color: #ffffff;
  padding: 2rem 0;
}
.footer .footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer .footer-content .footer-links {
  display: flex;
  gap: 2rem;
}
.footer .footer-content .footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}
.footer .footer-content .footer-links a:hover {
  color: #3498db;
}

.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal.active {
  display: flex;
  animation: fadeIn 0.3s ease-out;
}
.modal .modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.3s ease-out;
}
.modal .modal-content .close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
}
.modal .modal-content .close:hover {
  color: #e74c3c;
}
.modal .modal-content h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
.modal .modal-content img {
  width: 100%;
  height: 300px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.modal .modal-content p {
  color: #666;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}
@media (max-width: 1366px) {
  .hero .hero-content .hero-title {
    font-size: 3rem;
  }

  .skills .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery .gallery-overlay .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1280px) {
  .navbar .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: #ffffff;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }
  .navbar .nav-menu.active {
    left: 0;
  }
  .navbar .hamburger {
    display: flex;
  }
  .navbar .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .navbar .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .navbar .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .hero .hero-content .hero-title {
    font-size: 2.5rem;
  }

  .about .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact .contact-content {
    grid-template-columns: 1fr;
  }

  .skills .skills-grid {
    grid-template-columns: 1fr;
  }

  .gallery .gallery-overlay .gallery-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 1024px) {
  .container {
    padding: 0 15px;
  }

  .section-title {
    font-size: 2rem;
  }

  .hero .hero-content .hero-title {
    font-size: 2rem;
  }
  .hero .hero-content .hero-subtitle {
    font-size: 1.1rem;
  }
  .hero .hero-content .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .projects .carousel-container .carousel-btn {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["// SCSS Variables\n$primary-color: #2c3e50;\n$secondary-color: #3498db;\n$accent-color: #e74c3c;\n$text-color: #333;\n$light-text: #666;\n$background-color: #f8f9fa;\n$white: #ffffff;\n$black: #000000;\n$shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n$border-radius: 8px;\n$transition: all 0.3s ease;\n\n// Breakpoints\n$breakpoint-large: 1920px;\n$breakpoint-medium: 1366px;\n$breakpoint-small: 1280px;\n$breakpoint-mobile: 1024px;\n\n// Mixins\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@mixin transition($property: all, $duration: 0.3s, $timing: ease) {\n  transition: $property $duration $timing;\n}\n\n@mixin box-shadow($shadow) {\n  box-shadow: $shadow;\n}\n\n@mixin responsive($breakpoint) {\n  @if $breakpoint == large {\n    @media (max-width: $breakpoint-large) { @content; }\n  }\n  @if $breakpoint == medium {\n    @media (max-width: $breakpoint-medium) { @content; }\n  }\n  @if $breakpoint == small {\n    @media (max-width: $breakpoint-small) { @content; }\n  }\n  @if $breakpoint == mobile {\n    @media (max-width: $breakpoint-mobile) { @content; }\n  }\n}\n\n// Global Styles\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Arial', sans-serif;\n  line-height: 1.6;\n  color: $text-color;\n  background-color: $background-color;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n// Section Titles\n.section-title {\n  font-size: 2.5rem;\n  text-align: center;\n  margin-bottom: 3rem;\n  color: $primary-color;\n  position: relative;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 60px;\n    height: 3px;\n    background: $secondary-color;\n  }\n}\n\n// Buttons\n.btn {\n  display: inline-block;\n  padding: 12px 30px;\n  border: none;\n  border-radius: $border-radius;\n  text-decoration: none;\n  font-weight: 600;\n  text-align: center;\n  cursor: pointer;\n  @include transition();\n  \n  &.btn-primary {\n    background: $secondary-color;\n    color: $white;\n    \n    &:hover {\n      background: darken($secondary-color, 10%);\n      transform: translateY(-2px);\n    }\n  }\n  \n  &.btn-secondary {\n    background: transparent;\n    color: $secondary-color;\n    border: 2px solid $secondary-color;\n    \n    &:hover {\n      background: $secondary-color;\n      color: $white;\n    }\n  }\n}\n\n// Sticky Navigation\n.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: $white;\n  @include box-shadow($shadow);\n  z-index: 1000;\n  @include transition();\n  \n  &.scrolled {\n    padding: 10px 0;\n    \n    .nav-logo a {\n      font-size: 1.2rem;\n    }\n    \n    .nav-link {\n      font-size: 0.9rem;\n    }\n  }\n  \n  .nav-container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px;\n    @include flex-between();\n    height: 70px;\n    @include transition();\n  }\n  \n  .nav-logo a {\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: $primary-color;\n    text-decoration: none;\n    @include transition();\n  }\n  \n  .nav-menu {\n    display: flex;\n    list-style: none;\n    gap: 2rem;\n    \n    .nav-item {\n      .nav-link {\n        color: $text-color;\n        text-decoration: none;\n        font-weight: 500;\n        position: relative;\n        @include transition();\n        \n        &:hover,\n        &.active {\n          color: $secondary-color;\n        }\n        \n        &.active::after {\n          content: '';\n          position: absolute;\n          bottom: -5px;\n          left: 0;\n          width: 100%;\n          height: 2px;\n          background: $secondary-color;\n        }\n      }\n    }\n  }\n  \n  .hamburger {\n    display: none;\n    flex-direction: column;\n    cursor: pointer;\n    \n    .bar {\n      width: 25px;\n      height: 3px;\n      background: $primary-color;\n      margin: 3px 0;\n      @include transition();\n    }\n  }\n}\n\n// Hero Section\n.hero {\n  height: 100vh;\n  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);\n  @include flex-center();\n  flex-direction: column;\n  color: $white;\n  text-align: center;\n  position: relative;\n  \n  .hero-content {\n    z-index: 2;\n    \n    .hero-title {\n      font-size: 3.5rem;\n      margin-bottom: 1rem;\n      animation: fadeInUp 1s ease-out;\n    }\n    \n    .hero-subtitle {\n      font-size: 1.3rem;\n      margin-bottom: 2rem;\n      opacity: 0.9;\n      animation: fadeInUp 1s ease-out 0.3s both;\n    }\n    \n    .hero-buttons {\n      display: flex;\n      gap: 1rem;\n      justify-content: center;\n      animation: fadeInUp 1s ease-out 0.6s both;\n    }\n  }\n  \n  .scroll-indicator {\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    animation: bounce 2s infinite;\n    \n    i {\n      font-size: 1.5rem;\n    }\n  }\n}\n\n// About Section\n.about {\n  padding: 80px 0;\n  background: $white;\n  \n  .about-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 3rem;\n    align-items: center;\n    \n    .about-text {\n      p {\n        font-size: 1.1rem;\n        line-height: 1.8;\n        margin-bottom: 1.5rem;\n        color: $light-text;\n      }\n    }\n    \n    .about-image {\n      text-align: center;\n      \n      .profile-img {\n        width: 300px;\n        height: 300px;\n        border-radius: 50%;\n        object-fit: cover;\n        @include box-shadow($shadow);\n        @include transition();\n        \n        &:hover {\n          transform: scale(1.05);\n        }\n      }\n    }\n  }\n}\n\n// Projects Carousel Section\n.projects {\n  padding: 80px 0;\n  background: $background-color;\n  \n  .carousel-container {\n    position: relative;\n    max-width: 800px;\n    margin: 0 auto;\n    \n    .carousel {\n      position: relative;\n      overflow: hidden;\n      border-radius: $border-radius;\n      \n      .carousel-slide {\n        display: none;\n        \n        &.active {\n          display: block;\n          animation: slideIn 0.5s ease-in-out;\n        }\n        \n        .project-card {\n          background: $white;\n          padding: 2rem;\n          border-radius: $border-radius;\n          @include box-shadow($shadow);\n          text-align: center;\n          \n          .project-image {\n            font-size: 4rem;\n            color: $secondary-color;\n            margin-bottom: 1.5rem;\n          }\n          \n          .project-content {\n            h3 {\n              font-size: 1.5rem;\n              margin-bottom: 1rem;\n              color: $primary-color;\n            }\n            \n            p {\n              color: $light-text;\n              margin-bottom: 1.5rem;\n              line-height: 1.6;\n            }\n            \n            .project-tech {\n              display: flex;\n              justify-content: center;\n              gap: 0.5rem;\n              flex-wrap: wrap;\n              \n              .tech-tag {\n                background: $secondary-color;\n                color: $white;\n                padding: 0.3rem 0.8rem;\n                border-radius: 15px;\n                font-size: 0.8rem;\n              }\n            }\n          }\n        }\n      }\n    }\n    \n    .carousel-btn {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      background: $primary-color;\n      color: $white;\n      border: none;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      cursor: pointer;\n      @include transition();\n      z-index: 10;\n      \n      &:hover {\n        background: $secondary-color;\n        transform: translateY(-50%) scale(1.1);\n      }\n      \n      &.prev {\n        left: -25px;\n      }\n      \n      &.next {\n        right: -25px;\n      }\n    }\n    \n    .carousel-dots {\n      display: flex;\n      justify-content: center;\n      gap: 0.5rem;\n      margin-top: 2rem;\n      \n      .dot {\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: #ccc;\n        cursor: pointer;\n        @include transition();\n        \n        &.active {\n          background: $secondary-color;\n        }\n        \n        &:hover {\n          background: $primary-color;\n        }\n      }\n    }\n  }\n}\n\n// Skills Multi-column Section\n.skills {\n  padding: 80px 0;\n  background: $white;\n  \n  .skills-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 2rem;\n    \n    .skill-column {\n      text-align: center;\n      padding: 2rem;\n      border-radius: $border-radius;\n      background: $background-color;\n      @include transition();\n      \n      &:hover {\n        transform: translateY(-5px);\n        @include box-shadow($shadow);\n      }\n      \n      h3 {\n        color: $primary-color;\n        margin-bottom: 1.5rem;\n        font-size: 1.2rem;\n        \n        i {\n          color: $secondary-color;\n          margin-right: 0.5rem;\n        }\n      }\n      \n      .skill-list {\n        list-style: none;\n        \n        li {\n          padding: 0.5rem 0;\n          color: $light-text;\n          border-bottom: 1px solid #eee;\n          \n          &:last-child {\n            border-bottom: none;\n          }\n        }\n      }\n    }\n  }\n}\n\n// Gallery Section with Fixed Background\n.gallery {\n  background: url('../assets/image.jpg') fixed center center;\n  background-size: cover;\n  position: relative;\n  padding: 80px 0;\n  \n  .gallery-overlay {\n    background: rgba(0, 0, 0, 0.7);\n    color: $white;\n    \n    .gallery-subtitle {\n      text-align: center;\n      margin-bottom: 3rem;\n      font-size: 1.1rem;\n      opacity: 0.9;\n    }\n    \n    .gallery-grid {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 2rem;\n      \n      .gallery-item {\n        position: relative;\n        border-radius: $border-radius;\n        overflow: hidden;\n        cursor: pointer;\n        @include transition();\n        \n        &:hover {\n          transform: scale(1.05);\n          \n          .gallery-overlay-text {\n            opacity: 1;\n          }\n        }\n        \n        img {\n          width: 100%;\n          height: 250px;\n          object-fit: cover;\n        }\n        \n        .gallery-overlay-text {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background: rgba(0, 0, 0, 0.8);\n          @include flex-center();\n          flex-direction: column;\n          opacity: 0;\n          @include transition();\n          \n          h4 {\n            font-size: 1.3rem;\n            margin-bottom: 0.5rem;\n          }\n          \n          p {\n            font-size: 0.9rem;\n            opacity: 0.8;\n          }\n        }\n      }\n    }\n  }\n}\n\n// Video Section\n.video-section {\n  padding: 80px 0;\n  background: $background-color;\n  \n  .video-container {\n    position: relative;\n    max-width: 800px;\n    margin: 0 auto;\n    border-radius: $border-radius;\n    overflow: hidden;\n    @include box-shadow($shadow);\n    \n    .portfolio-video {\n      width: 100%;\n      height: 450px;\n      object-fit: cover;\n    }\n    \n    .video-overlay {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n      color: $white;\n      padding: 2rem;\n      \n      h3 {\n        font-size: 1.5rem;\n        margin-bottom: 0.5rem;\n      }\n      \n      p {\n        opacity: 0.9;\n      }\n    }\n  }\n}\n\n// Contact Section\n.contact {\n  padding: 80px 0;\n  background: $white;\n  \n  .contact-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 3rem;\n    \n    .contact-info {\n      h3 {\n        color: $primary-color;\n        margin-bottom: 1rem;\n        font-size: 1.5rem;\n      }\n      \n      p {\n        color: $light-text;\n        margin-bottom: 2rem;\n        line-height: 1.6;\n      }\n      \n      .contact-details {\n        margin-bottom: 2rem;\n        \n        .contact-item {\n          display: flex;\n          align-items: center;\n          margin-bottom: 1rem;\n          \n          i {\n            color: $secondary-color;\n            margin-right: 1rem;\n            width: 20px;\n          }\n        }\n      }\n      \n      .social-links {\n        display: flex;\n        gap: 1rem;\n        \n        .social-link {\n          display: inline-block;\n          width: 40px;\n          height: 40px;\n          background: $secondary-color;\n          color: $white;\n          @include flex-center();\n          border-radius: 50%;\n          text-decoration: none;\n          @include transition();\n          \n          &:hover {\n            background: $primary-color;\n            transform: translateY(-3px);\n          }\n        }\n      }\n    }\n    \n    .contact-form {\n      .form-group {\n        margin-bottom: 1.5rem;\n        \n        input,\n        textarea {\n          width: 100%;\n          padding: 12px;\n          border: 2px solid #eee;\n          border-radius: $border-radius;\n          font-size: 1rem;\n          @include transition();\n          \n          &:focus {\n            outline: none;\n            border-color: $secondary-color;\n          }\n        }\n        \n        textarea {\n          resize: vertical;\n          min-height: 120px;\n        }\n      }\n    }\n  }\n}\n\n// Footer\n.footer {\n  background: $primary-color;\n  color: $white;\n  padding: 2rem 0;\n  \n  .footer-content {\n    @include flex-between();\n    \n    .footer-links {\n      display: flex;\n      gap: 2rem;\n      \n      a {\n        color: $white;\n        text-decoration: none;\n        @include transition();\n        \n        &:hover {\n          color: $secondary-color;\n        }\n      }\n    }\n  }\n}\n\n// Modal Styles\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  @include flex-center();\n  \n  &.active {\n    display: flex;\n    animation: fadeIn 0.3s ease-out;\n  }\n  \n  .modal-content {\n    background: $white;\n    padding: 2rem;\n    border-radius: $border-radius;\n    max-width: 600px;\n    max-height: 80vh;\n    overflow-y: auto;\n    position: relative;\n    animation: slideInUp 0.3s ease-out;\n    \n    .close {\n      position: absolute;\n      top: 15px;\n      right: 20px;\n      font-size: 2rem;\n      cursor: pointer;\n      color: $light-text;\n      @include transition();\n      \n      &:hover {\n        color: $accent-color;\n      }\n    }\n    \n    h2 {\n      color: $primary-color;\n      margin-bottom: 1rem;\n    }\n    \n    img {\n      width: 100%;\n      height: 300px;\n      object-fit: cover;\n      border-radius: $border-radius;\n      margin-bottom: 1rem;\n    }\n    \n    p {\n      color: $light-text;\n      line-height: 1.6;\n    }\n  }\n}\n\n// Animations\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  40% {\n    transform: translateX(-50%) translateY(-10px);\n  }\n  60% {\n    transform: translateX(-50%) translateY(-5px);\n  }\n}\n\n// Responsive Design\n@include responsive(medium) {\n  .hero .hero-content .hero-title {\n    font-size: 3rem;\n  }\n  \n  .skills .skills-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .gallery .gallery-overlay .gallery-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@include responsive(small) {\n  .navbar {\n    .nav-menu {\n      position: fixed;\n      left: -100%;\n      top: 70px;\n      flex-direction: column;\n      background: $white;\n      width: 100%;\n      text-align: center;\n      transition: 0.3s;\n      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\n      padding: 2rem 0;\n      \n      &.active {\n        left: 0;\n      }\n    }\n    \n    .hamburger {\n      display: flex;\n      \n      &.active .bar:nth-child(2) {\n        opacity: 0;\n      }\n      \n      &.active .bar:nth-child(1) {\n        transform: translateY(8px) rotate(45deg);\n      }\n      \n      &.active .bar:nth-child(3) {\n        transform: translateY(-8px) rotate(-45deg);\n      }\n    }\n  }\n  \n  .hero .hero-content .hero-title {\n    font-size: 2.5rem;\n  }\n  \n  .about .about-content {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  \n  .contact .contact-content {\n    grid-template-columns: 1fr;\n  }\n  \n  .skills .skills-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .gallery .gallery-overlay .gallery-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@include responsive(mobile) {\n  .container {\n    padding: 0 15px;\n  }\n  \n  .section-title {\n    font-size: 2rem;\n  }\n  \n  .hero .hero-content {\n    .hero-title {\n      font-size: 2rem;\n    }\n    \n    .hero-subtitle {\n      font-size: 1.1rem;\n    }\n    \n    .hero-buttons {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n  \n  .projects .carousel-container {\n    .carousel-btn {\n      display: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/image.jpg":
/*!**************************!*\
  !*** ./assets/image.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f7c3d1bc154868c1bcc8.jpg";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Alex Chen - Student Portfolio</title>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\">\n</head>\n<body>\n    <!-- Sticky Navigation -->\n    <nav id=\"navbar\" class=\"navbar\">\n        <div class=\"nav-container\">\n            <div class=\"nav-logo\">\n                <a href=\"#home\">Alex Chen</a>\n            </div>\n            <ul class=\"nav-menu\" id=\"nav-menu\">\n                <li class=\"nav-item\">\n                    <a href=\"#home\" class=\"nav-link active\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#about\" class=\"nav-link\">About</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#projects\" class=\"nav-link\">Projects</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#skills\" class=\"nav-link\">Skills</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#gallery\" class=\"nav-link\">Gallery</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#contact\" class=\"nav-link\">Contact</a>\n                </li>\n            </ul>\n            <div class=\"hamburger\" id=\"hamburger\">\n                <span class=\"bar\"></span>\n                <span class=\"bar\"></span>\n                <span class=\"bar\"></span>\n            </div>\n        </div>\n    </nav>\n\n    <!-- Hero Section -->\n    <section id=\"home\" class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Hi, I'm Alex Chen</h1>\n            <p class=\"hero-subtitle\">Computer Science Student & Aspiring Developer</p>\n            <div class=\"hero-buttons\">\n                <a href=\"#projects\" class=\"btn btn-primary\">View My Work</a>\n                <a href=\"#contact\" class=\"btn btn-secondary\">Get In Touch</a>\n            </div>\n        </div>\n        <div class=\"scroll-indicator\">\n            <i class=\"fas fa-chevron-down\"></i>\n        </div>\n    </section>\n\n    <!-- About Section -->\n    <section id=\"about\" class=\"about\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">About Me</h2>\n            <div class=\"about-content\">\n                <div class=\"about-text\">\n                    <p>I'm a passionate Computer Science student at UIUC with a love for web development and problem-solving. Currently in my junior year, I enjoy creating interactive websites and exploring new technologies.</p>\n                    <p>When I'm not coding, you can find me playing basketball, reading sci-fi novels, or experimenting with new recipes in the kitchen.</p>\n                </div>\n                <div class=\"about-image\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Alex Chen\" class=\"profile-img\">\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Projects Carousel Section -->\n    <section id=\"projects\" class=\"projects\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">My Projects</h2>\n            <div class=\"carousel-container\">\n                <div class=\"carousel\">\n                    <div class=\"carousel-slide active\">\n                        <div class=\"project-card\">\n                            <div class=\"project-image\">\n                                <i class=\"fas fa-laptop-code\"></i>\n                            </div>\n                            <div class=\"project-content\">\n                                <h3>E-Commerce Website</h3>\n                                <p>A full-stack e-commerce platform built with React and Node.js. Features include user authentication, shopping cart, and payment processing.</p>\n                                <div class=\"project-tech\">\n                                    <span class=\"tech-tag\">React</span>\n                                    <span class=\"tech-tag\">Node.js</span>\n                                    <span class=\"tech-tag\">MongoDB</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"carousel-slide\">\n                        <div class=\"project-card\">\n                            <div class=\"project-image\">\n                                <i class=\"fas fa-mobile-alt\"></i>\n                            </div>\n                            <div class=\"project-content\">\n                                <h3>Task Management App</h3>\n                                <p>A mobile-first task management application with real-time collaboration features. Built with Flutter and Firebase.</p>\n                                <div class=\"project-tech\">\n                                    <span class=\"tech-tag\">Flutter</span>\n                                    <span class=\"tech-tag\">Firebase</span>\n                                    <span class=\"tech-tag\">Dart</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"carousel-slide\">\n                        <div class=\"project-card\">\n                            <div class=\"project-image\">\n                                <i class=\"fas fa-chart-line\"></i>\n                            </div>\n                            <div class=\"project-content\">\n                                <h3>Data Visualization Tool</h3>\n                                <p>An interactive data visualization tool for analyzing sales data. Features dynamic charts and export functionality.</p>\n                                <div class=\"project-tech\">\n                                    <span class=\"tech-tag\">D3.js</span>\n                                    <span class=\"tech-tag\">Python</span>\n                                    <span class=\"tech-tag\">Flask</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"carousel-btn prev\" id=\"prevBtn\">\n                    <i class=\"fas fa-chevron-left\"></i>\n                </button>\n                <button class=\"carousel-btn next\" id=\"nextBtn\">\n                    <i class=\"fas fa-chevron-right\"></i>\n                </button>\n                <div class=\"carousel-dots\">\n                    <span class=\"dot active\" data-slide=\"0\"></span>\n                    <span class=\"dot\" data-slide=\"1\"></span>\n                    <span class=\"dot\" data-slide=\"2\"></span>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Skills Multi-column Section -->\n    <section id=\"skills\" class=\"skills\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">Skills & Technologies</h2>\n            <div class=\"skills-grid\">\n                <div class=\"skill-column\">\n                    <h3><i class=\"fas fa-code\"></i> Programming Languages</h3>\n                    <ul class=\"skill-list\">\n                        <li>JavaScript (ES6+)</li>\n                        <li>Python</li>\n                        <li>Java</li>\n                        <li>C++</li>\n                        <li>TypeScript</li>\n                    </ul>\n                </div>\n                <div class=\"skill-column\">\n                    <h3><i class=\"fas fa-paint-brush\"></i> Frontend</h3>\n                    <ul class=\"skill-list\">\n                        <li>HTML5 & CSS3</li>\n                        <li>React & Redux</li>\n                        <li>Vue.js</li>\n                        <li>SASS/SCSS</li>\n                        <li>Bootstrap</li>\n                    </ul>\n                </div>\n                <div class=\"skill-column\">\n                    <h3><i class=\"fas fa-server\"></i> Backend</h3>\n                    <ul class=\"skill-list\">\n                        <li>Node.js & Express</li>\n                        <li>Python Flask/Django</li>\n                        <li>MongoDB</li>\n                        <li>PostgreSQL</li>\n                        <li>RESTful APIs</li>\n                    </ul>\n                </div>\n                <div class=\"skill-column\">\n                    <h3><i class=\"fas fa-tools\"></i> Tools & Others</h3>\n                    <ul class=\"skill-list\">\n                        <li>Git & GitHub</li>\n                        <li>Docker</li>\n                        <li>AWS</li>\n                        <li>Figma</li>\n                        <li>Agile/Scrum</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Gallery Section with Background Image -->\n    <section id=\"gallery\" class=\"gallery\">\n        <div class=\"gallery-overlay\">\n            <div class=\"container\">\n                <h2 class=\"section-title\">Photo Gallery</h2>\n                <p class=\"gallery-subtitle\">Some moments from my journey as a student developer</p>\n                <div class=\"gallery-grid\">\n                    <div class=\"gallery-item\" data-modal=\"modal1\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Coding Session\">\n                        <div class=\"gallery-overlay-text\">\n                            <h4>Coding Session</h4>\n                            <p>Late night debugging session</p>\n                        </div>\n                    </div>\n                    <div class=\"gallery-item\" data-modal=\"modal2\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Team Project\">\n                        <div class=\"gallery-overlay-text\">\n                            <h4>Team Project</h4>\n                            <p>Collaborating with classmates</p>\n                        </div>\n                    </div>\n                    <div class=\"gallery-item\" data-modal=\"modal3\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Hackathon\">\n                        <div class=\"gallery-overlay-text\">\n                            <h4>Hackathon</h4>\n                            <p>48-hour coding competition</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Video Section -->\n    <section id=\"video\" class=\"video-section\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">Watch My Journey</h2>\n            <div class=\"video-container\">\n                <video controls poster=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" class=\"portfolio-video\">\n                    <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n                    <source src=\"https://www.w3schools.com/html/mov_bbb.ogg\" type=\"video/ogg\">\n                    Your browser does not support the video tag.\n                </video>\n                <div class=\"video-overlay\">\n                    <h3>My Development Process</h3>\n                    <p>A quick look at how I approach coding challenges and build projects</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Contact Section -->\n    <section id=\"contact\" class=\"contact\">\n        <div class=\"container\">\n            <h2 class=\"section-title\">Get In Touch</h2>\n            <div class=\"contact-content\">\n                <div class=\"contact-info\">\n                    <h3>Let's Connect!</h3>\n                    <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>\n                    <div class=\"contact-details\">\n                        <div class=\"contact-item\">\n                            <i class=\"fas fa-envelope\"></i>\n                            <span>alex.chen@illinois.edu</span>\n                        </div>\n                        <div class=\"contact-item\">\n                            <i class=\"fas fa-phone\"></i>\n                            <span>(555) 123-4567</span>\n                        </div>\n                        <div class=\"contact-item\">\n                            <i class=\"fas fa-map-marker-alt\"></i>\n                            <span>Champaign, IL</span>\n                        </div>\n                    </div>\n                    <div class=\"social-links\">\n                        <a href=\"#\" class=\"social-link\"><i class=\"fab fa-github\"></i></a>\n                        <a href=\"#\" class=\"social-link\"><i class=\"fab fa-linkedin\"></i></a>\n                        <a href=\"#\" class=\"social-link\"><i class=\"fab fa-twitter\"></i></a>\n                        <a href=\"#\" class=\"social-link\"><i class=\"fab fa-instagram\"></i></a>\n                    </div>\n                </div>\n                <div class=\"contact-form\">\n                    <form id=\"contactForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your Name\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your Email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea id=\"message\" name=\"message\" placeholder=\"Your Message\" rows=\"5\" required></textarea>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Footer -->\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"footer-content\">\n                <div class=\"footer-text\">\n                    <p>&copy; 2024 Alex Chen. All rights reserved.</p>\n                </div>\n                <div class=\"footer-links\">\n                    <a href=\"#home\">Home</a>\n                    <a href=\"#about\">About</a>\n                    <a href=\"#projects\">Projects</a>\n                    <a href=\"#contact\">Contact</a>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n    <!-- Modals -->\n    <div id=\"modal1\" class=\"modal\">\n        <div class=\"modal-content\">\n            <span class=\"close\">&times;</span>\n            <h2>Coding Session</h2>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Coding Session\">\n            <p>This was taken during one of my late-night coding sessions while working on a challenging algorithm problem. The coffee was flowing and the bugs were multiplying!</p>\n        </div>\n    </div>\n\n    <div id=\"modal2\" class=\"modal\">\n        <div class=\"modal-content\">\n            <span class=\"close\">&times;</span>\n            <h2>Team Project</h2>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Team Project\">\n            <p>Working with my classmates on a group project for our software engineering course. We built a collaborative task management tool using agile methodologies.</p>\n        </div>\n    </div>\n\n    <div id=\"modal3\" class=\"modal\">\n        <div class=\"modal-content\">\n            <span class=\"close\">&times;</span>\n            <h2>Hackathon</h2>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Hackathon\">\n            <p>Participated in a 48-hour hackathon where we built a real-time chat application. We won second place and learned a lot about rapid prototyping!</p>\n        </div>\n    </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

// Main JavaScript functionality for MP1 Portfolio Website
// DOM Elements
var navbar = document.getElementById('navbar');
var navLinks = document.querySelectorAll('.nav-link');
var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('nav-menu');
var sections = document.querySelectorAll('section');
var carousel = document.querySelector('.carousel');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var dots = document.querySelectorAll('.dot');
var modals = document.querySelectorAll('.modal');
var galleryItems = document.querySelectorAll('.gallery-item');
var contactForm = document.getElementById('contactForm'); // Global Variables

var currentSlide = 0;
var totalSlides = document.querySelectorAll('.carousel-slide').length; // Initialize everything when DOM is loaded

document.addEventListener('DOMContentLoaded', function () {
  initializeNavbar();
  initializeCarousel();
  initializeModals();
  initializeContactForm();
  initializeScrollEffects();
  initializeMobileMenu();
}); // Navbar functionality

function initializeNavbar() {
  // Sticky navbar and resizing on scroll
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Add scrolled class for navbar resizing

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    } // Position indicator - highlight current section


    updateActiveNavLink();
  }); // Smooth scrolling for navigation links

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);

      if (targetSection) {
        var offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
} // Update active navigation link based on scroll position


function updateActiveNavLink() {
  var scrollPos = window.scrollY + 100; // Offset for better detection

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Remove active class from all nav links
      navLinks.forEach(function (link) {
        return link.classList.remove('active');
      }); // Add active class to corresponding nav link

      var activeLink = document.querySelector(".nav-link[href=\"#".concat(sectionId, "\"]"));

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }); // Special case: if scrolled to bottom, highlight last menu item

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    navLinks.forEach(function (link) {
      return link.classList.remove('active');
    });
    var lastLink = navLinks[navLinks.length - 1];

    if (lastLink) {
      lastLink.classList.add('active');
    }
  }
} // Carousel functionality


function initializeCarousel() {
  // Previous button
  prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }); // Next button

  nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }); // Dot navigation

  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      currentSlide = index;
      updateCarousel();
    });
  }); // Auto-play carousel (optional)

  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 5000); // Change slide every 5 seconds
} // Update carousel display


function updateCarousel() {
  var slides = document.querySelectorAll('.carousel-slide'); // Hide all slides

  slides.forEach(function (slide) {
    return slide.classList.remove('active');
  }); // Show current slide

  slides[currentSlide].classList.add('active'); // Update dots

  dots.forEach(function (dot, index) {
    dot.classList.toggle('active', index === currentSlide);
  });
} // Modal functionality


function initializeModals() {
  // Open modals when gallery items are clicked
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      var modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  }); // Close modals

  modals.forEach(function (modal) {
    var closeBtn = modal.querySelector('.close'); // Close button

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }); // Click outside modal to close

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    }); // Escape key to close

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
} // Contact form functionality


function initializeContactForm() {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Get form data

    var formData = new FormData(this);
    var name = formData.get('name');
    var email = formData.get('email');
    var message = formData.get('message'); // Simple validation

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    } // Email validation


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    } // Simulate form submission


    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
  });
} // Scroll effects and animations


function initializeScrollEffects() {
  // Intersection Observer for fade-in animations
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions); // Observe elements for animation

  var animatedElements = document.querySelectorAll('.skill-column, .project-card, .gallery-item');
  animatedElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
} // Mobile menu functionality


function initializeMobileMenu() {
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  }); // Close mobile menu when clicking on a link

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  }); // Close mobile menu when clicking outside

  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
} // Utility functions


function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} // Handle window resize


window.addEventListener('resize', debounce(function () {
  // Update carousel on resize
  updateCarousel(); // Close mobile menu on desktop

  if (window.innerWidth > 1024) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}, 250)); // Smooth scroll polyfill for older browsers

if (!('scrollBehavior' in document.documentElement.style)) {
  // Fallback for browsers that don't support smooth scrolling
  var smoothScrollTo = function smoothScrollTo(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var targetPosition = target.offsetTop - 70;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }; // Override default click behavior for smooth scrolling


  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);

      if (targetSection) {
        smoothScrollTo(targetSection);
      }
    });
  });
} // Console log for debugging


console.log('MP1 Portfolio Website loaded successfully!');
console.log('Features implemented:');
console.log('- Sticky navbar with position indicator');
console.log('- Navbar resizing on scroll');
console.log('- Smooth scrolling navigation');
console.log('- Interactive carousel with 3 slides');
console.log('- Multi-column layout');
console.log('- Modal windows');
console.log('- HTML5 video');
console.log('- CSS3 animations');
console.log('- Responsive design');
console.log('- FontAwesome icons');
console.log('- SCSS features (variables, mixins, nesting)');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map