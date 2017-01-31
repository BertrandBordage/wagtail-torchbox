$(document).ready(function(){tbx.heroImages(),tbx.mobileMenu(),tbx.loadMore($(".clients")),tbx.loadMore($(".blog-listing")),tbx.jobs(),tbx.scrollEvents(),tbx.servicesScrollEvents(),tbx.servicesAvatar(),tbx.servicesCarousel(),tbx.particles(),tbx.newsletterSignUp()});var tbx={heroImages:function(){function e(){i.removeClass(l)}function t(e){a.not(e).removeClass(r),o.removeClass(r)}function s(e){c=e.data("name"),e.addClass(r),n.find('[data-name="'+c+'"]').addClass(r)}var a=$(".featured-case-studies li"),i=$(".home-hero"),n=$(".feature-images"),o=$(".feature-image"),r="active",l="initial-load",c=null;a.one("mouseenter",function(){e()}),a.on("mouseenter",function(){t($(this)),s($(this))})},mobileMenu:function(){function e(){$("body").removeClass("menu-open"),a.removeClass(c),i.removeClass(r),n.removeClass(o),setTimeout(function(){s.removeClass(l)},500)}function t(e){s.addClass(l),i.addClass(r),a.each(function(){e=$(this),e.addClass(c)}),setTimeout(function(){$("body").addClass("menu-open"),n.addClass(o)},300)}var s=$(".bleed"),a=s.find("li"),i=$(".menu-button"),n=$(".container-header"),o="container-header--fixed",r="twist",l="visible out-animation",c="show";i.click(function(){i.hasClass(r)?e():t($(this))}),$(window).on("resize",function(){e()})},loadMore:function(e){var t=e.find("button"),s=e.find("ul"),a="visible",i="Show more",n="Show less";t.click(function(){var e=$(this);s.hasClass(a)?(s.removeClass(a),e.html(i)):(s.addClass(a),e.html(n))})},jobs:function(){if($(".jobs-carousel").length){$(".jobs-carousel").each(function(e,t){var s="carousel"+e;this.id=s,$(this).slick({slide:"#"+s+" li",slidesToShow:1,slidesToScroll:1,slidesPerRow:1,infinite:!1,vertical:!0,verticalSwiping:!0})});var e;$(window).resize(function(){clearTimeout(e),e=setTimeout(function(){$(".jobs-carousel").slick("setPosition")},500)})}},map:function(){function e(e,t){for(i=0;i<t.length;i++){var s=t[i][0],a=t[i][1],n=t[i][2],o=new google.maps.LatLng(s,a),r=new google.maps.InfoWindow,l='<div class="map-infobox">'+n+"</div>",c=new google.maps.Marker({map:e,position:o,title:n,icon:'{% static "torchbox/images/pin.png" %}'});markers.push(c),google.maps.event.addListener(c,"click",function(t,s,a){return function(){a.setContent(s),a.open(e,t)}}(c,l,r))}}function t(){for(var e=new google.maps.LatLngBounds,t=0;t<markers.length;t++)e.extend(markers[t].getPosition());map.fitBounds(e)}function s(){markers[1].setMap(null)}function a(){for(var e=0;e<locations.length;e++)markers[e].setMap(map)}function n(){google.maps.event.addListener(map,"zoom_changed",function(){r=map.getZoom(),r<o?s():a()})}var o=5,r=null;markers=[],locations=[[51.858469,-1.480863,"Oxford"],[51.454814,-2.597802,"Bristol"],[39.950865,-75.14559,"Philadelphia"]],mapOptions={mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:4,scrollwheel:!1,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{lightness:"69"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"geometry",stylers:[{lightness:"35"}]},{featureType:"administrative.country",elementType:"geometry.fill",stylers:[{lightness:"1"}]},{featureType:"administrative.province",elementType:"geometry.fill",stylers:[{weight:"3.94"},{lightness:"45"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]},map=new google.maps.Map(document.getElementById("map"),mapOptions),e(map,locations),s(),n(),t()},scrollEvents:function(){var e=$(".specifications");if(e.length>0){var t=$(".specifications .client"),s=e.offset().top,a="specifications--fixed",i="client--show";$(window).on("scroll",function(){$(window).scrollTop()>=s?(e.addClass(a),t.addClass(i)):(e.removeClass(a),t.removeClass(i))})}},servicesScrollEvents:function(){if($(".js-services-inner").length){var e=$(window),t=$(".services-avatar-container"),s="services-avatar-container--fixed",a="services-avatar-container--move-right",i=t.offset().top-350,n=200;$reasonItem=$(".services-reasons-list__item"),reasonClass="services-reasons-list__item--show",$processItem=$(".services-grid__item--hidden"),processClass="services-grid__item--show",delayDuration=200,$(window).on("scroll",function(){var o=$(window).scrollTop()+$(window).height(),r=parseInt(o)>=parseInt($(document).height()-n);if(e.scrollTop()>=i?(t.addClass(s),t.addClass(a),r&&t.removeClass(a)):(t.removeClass(s),t.removeClass(a)),$processItem.length){var l=$processItem.offset().top-650;$processItem.offset().top+100;e.scrollTop()>=l&&$processItem.each(function(e){var t=$(this);setTimeout(function(){t.addClass(processClass)},delayDuration*e)})}})}},servicesAvatar:function(){var e=$(".services-avatar"),t=$(".services-avatar-container"),s=$(".services-avatar-container__button"),a=$(".services-avatar-container__find-out-more"),i=$(".services-avatar-container__contact-info"),n=$(".services-avatar-container__contact-details"),o="services-avatar-container__contact-details--show",r="services-avatar-container__find-out-more--alt",l="services-avatar-container--alt",c="services-avatar-container--move-left",d="services-avatar-container--move-right",m="services-avatar-container--hide",u=$(".services-avatar-container__close");e.on("mouseenter",function(){t.removeClass(d),t.addClass(c)}),s.on("click",function(){a.addClass(r),a.text("Contact Will"),t.addClass(l),i.hide(),n.addClass(o)}),u.on("click",function(){t.addClass(m)})},servicesCarousel:function(){$(".services-slider ul").length&&$(".services-slider ul").owlCarousel({loop:!0,margin:20,items:1,autoplay:5e3,autoplayTimeout:5e5,slideSpeed:500,paginationSpeed:500,nav:!0,responsive:{0:{items:1},1100:{items:1,stagePadding:100}}})},particles:function(){window.particlesJS&&particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:2,opacity_min:.1,sync:!1}},size:{value:2.5,anim:{enable:!1,speed:50,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2.5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},signUp:function(e){$(e).on("submit",function(e){var t=$(this);e.preventDefault(),e.stopImmediatePropagation(),$(".sign-up-form-button").html("Submitting..."),$.ajax({url:t.attr("action"),type:"POST",data:t.serialize(),cache:!1,success:function(e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"formSubmissionSuccess",formId:"sign-up-form"}),t.html(e)}})})},newsletterSignUp:function(){$(".newsletter-signup").on("submit",function(e){e.preventDefault(),$(".newsletter-button").html("Signing up..."),$(".newsletter-email").animate({width:"0px"}),$(".newsletter-email").hide("slow",function(){$(".newsletter-button").css("border-radius",$(".newsletter-button").css("border-top-right-radius"))}),$.ajax({url:$(this).attr("action"),type:"GET",data:$(this).serialize(),success:function(e){$(".newsletter-button").html("Thanks!")}})})}};