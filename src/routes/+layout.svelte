<script lang="ts">
	import ButtonWhatsApp from '$lib/components/ButtonWhatsApp.svelte';
	import { INFO_COMPANY } from '$lib/const/INFO';
	import langStore from '$lib/stores/langStore';
	import './global.css';
	import './tailwind.css';
</script>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="keywords" content="HTML5 Template" />
	<meta name="description" content="Tripzia - Immigration and Visa Consulting HTML Template" />
	<meta name="author" content="https://www.cymolthemes.com/" />
	<meta name="viewport" content=" width=device-width, initial-scale=1, maximum-scale=1" />
	<link rel="shortcut icon" href="brand/favicon.svg" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/animate.css" />
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
	<link rel="stylesheet" type="text/css" href="css/themify-icons.css" />
	<link rel="stylesheet" type="text/css" href="css/flaticon.css" />
	<link rel="stylesheet" type="text/css" href="css/slick.css" />
	<link rel="stylesheet" type="text/css" href="css/prettyPhoto.css" />
	<link rel="stylesheet" type="text/css" href="css/shortcodes.css" />
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<link rel="stylesheet" type="text/css" href="css/megamenu.css" />
	<link rel="stylesheet" type="text/css" href="css/responsive.css" />
</head>

<body>
	<ButtonWhatsApp />
	<div class="page">
		<header id="masthead" class="header cmt-header-style-01">
			<div class="top_bar cmt-bgcolor-darkgrey cmt-textcolor-white clearfix">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="d-flex align-items-center justify-content-center flex-row">
								<div class="top_bar_contact_item ml-auto">
									<div class="top_bar_icon"><i class="fa fa-envelope-o"></i></div>
									<a href="mailto:{INFO_COMPANY.EMAIL}">{INFO_COMPANY.EMAIL}</a>
								</div>

								<div
									class="cmt-bg cmt-col-bgcolor-yes cmt-right-span cmt-bgcolor-skincolor pl-20"
								>
									<div class="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
									<div class="layer-content">
										<div class="top_bar_contact_item">
											<div class="top_bar_icon"><i class="fa fa-phone"></i></div>
											{INFO_COMPANY.PHONE}
											{INFO_COMPANY.PHONE_SECONDARY}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- top_bar end-->
			<!-- site-header-menu -->
			<div id="site-header-menu" class="site-header-menu cmt-bgcolor-white">
				<div class="site-header-menu-inner cmt-stickable-header">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<!--site-navigation -->
								<div
									class="site-navigation d-flex align-items-center justify-content-between flex-row"
								>
									<!-- site-branding -->
									<div class="site-branding">
										<a class="home-link" href="/" title="Tripzia" rel="home">
											<img
												id="logo-img"
												class="img-center w-[150px]" 
												style="max-width: 500px; max-height: 500px;"
												src="/brand/logo.svg"
												alt="logo-img"
											/>
										</a>
									</div>
									<div class="widget_info mr-auto">
										<div>{$langStore.LANG.SLOGAN}</div>
									</div>
									<div class="d-flex flex-row">
										<div class="btn-show-menu-mobile menubar menubar--squeeze">
											<span class="menubar-box">
												<span class="menubar-inner"></span>
											</span>
										</div>
										<nav class="main-menu menu-mobile" id="menu">
											<ul class="menu">
												{#each $langStore.LANG.MENU as item}
													<li class="mega-menu-item">
														<a href="{item.path}" class="mega-menu-link">{item.name}</a>
													</li>
												{/each}
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<slot />
		<footer class="footer cmt-bgcolor-darkgrey widget-footer clearfix">
			<div class="first-footer">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
							<div class="widget widget_text mr-25 clearfix">
								<h3 class="widget-title">About Us</h3>
								<div class="textwidget widget-text">
									<p>
										The Most Eminent Visas and Immigration Consultant service provider in major
										metros and overseas with reliability since 1994. We are committed to provide
										reliable client support.
									</p>
								</div>
								<div class="cmt-horizontal_sep mt-25 mb-30"></div>
								<div class="social-icons circle">
									<ul class="list-inline cmt-textcolor-skincolor">
										<li class="social-facebook">
											<a class="tooltip-top" target="_blank" href="#" data-tooltip="Facebook"
												><i class="ti ti-facebook"></i></a
											>
										</li>
										<li class="social-twitter">
											<a class="tooltip-top" target="_blank" href="#" data-tooltip="twitter"
												><i class="ti ti-twitter-alt"></i></a
											>
										</li>
										<li class="social-instagram">
											<a class="tooltip-top" target="_blank" href="#" data-tooltip="Google"
												><i class="ti ti-google"></i></a
											>
										</li>
										<li class="social-twitter">
											<a class="tooltip-top" target="_blank" href="#" data-tooltip="Linkedin"
												><i class="ti ti-linkedin"></i></a
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
							<div class="widget widget_nav_menu clearfix">
								<h3 class="widget-title">Visa Services</h3>
								<ul id="menu-footer-quick-links">
									<li><a href="#">Green card</a></li>
									<li><a href="#">PR Applicants</a></li>
									<li><a href="#">Visa Consultancy</a></li>
									<li><a href="#">Travel Insurance</a></li>
									<li><a href="#">Work Permits</a></li>
									<li><a href="#">Abroad Study</a></li>
									<li><a href="#">International Permit</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
							<div class="widget widget-recent-post clearfix">
								<h3 class="widget-title">Recent Posts</h3>
								<ul class="widget-post cmt-recent-post-list">
									<li>
										<a href="/"
											><img src="images/blog/b_thumbb-01.jpg" alt="post-img" /></a
										>
										<span class="post-date"><i class="fa fa-calendar"></i>Apr 06, 2020</span>
										<a href="/">Why Indian Students Choose To Study Abroad?</a>
									</li>
									<li>
										<a href="/"
											><img src="images/blog/b_thumbb-02.jpg" alt="post-img" /></a
										>
										<span class="post-date"><i class="fa fa-calendar"></i>Apr 24, 2020</span>
										<a href="/">To Improve Your Express Entry Application</a>
									</li>
									<li>
										<a href="/"
											><img src="images/blog/b_thumbb-03.jpg" alt="post-img" /></a
										>
										<span class="post-date"><i class="fa fa-calendar"></i>Apr 24, 2020</span>
										<a href="/">Employment Insurance for Foreign Nationals</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
							<div class="widget contact_map clearfix">
								<h3 class="widget-title">Useful Links</h3>
								<div class="footer_map mb-20">
									<img src="images/footer_map.png" alt="" />
								</div>
								<ul class="widget_contact_wrapper">
									<li>
										<i class="cmt-textcolor-skincolor fa fa-map-marker"></i>Australia: 1234 567
										890
									</li>
									<li>
										<i class="cmt-textcolor-skincolor fa fa-map-marker"></i>Ontario: 1234 567 890
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="second-footer">
				<div class="container">
					<div class="row no-gutters">
						<div class="widget-area col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<aside class="widget widget-text">
								<!--featured-icon-box-->
								<div class="featured-icon-box icon-align-before-content">
									<div class="featured-icon">
										<div
											class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square"
										>
											<i class="fa fa-envelope-o"></i>
										</div>
									</div>
									<div class="featured-content">
										<div class="featured-title">
											<h5><a href="mailto:info@example.com">info@example.com</a></h5>
										</div>
										<div class="featured-desc">
											<p>Drop Us a Line</p>
										</div>
									</div>
								</div>
								<!-- featured-icon-box end-->
							</aside>
						</div>
						<div class="widget-area col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<aside class="widget widget-text cmt-bgcolor-skincolor">
								<!--featured-icon-box-->
								<div class="featured-icon-box icon-align-before-content">
									<div class="featured-icon">
										<div
											class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square"
										>
											<i class="fa fa-phone"></i>
										</div>
									</div>
									<div class="featured-content">
										<div class="featured-title">
											<h5>+0 (123) 456 7890</h5>
										</div>
										<div class="featured-desc">
											<p>Call Us Now!</p>
										</div>
									</div>
								</div>
								<!-- featured-icon-box end-->
							</aside>
						</div>
						<div class="widget-area col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<aside class="widget widget-text">
								<!--featured-icon-box-->
								<div class="featured-icon-box icon-align-before-content">
									<div class="featured-icon">
										<div
											class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square"
										>
											<i class="fa fa-map-marker"></i>
										</div>
									</div>
									<div class="featured-content">
										<div class="featured-title">
											<h5>78 St. Road, NJ USA</h5>
										</div>
										<div class="featured-desc">
											<p>Get Direction</p>
										</div>
									</div>
								</div>
								<!-- featured-icon-box end-->
							</aside>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom-footer-text">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="copyright text-center">
								<div id="menu-footer-menu">
									<ul class="footer-nav-menu text-center">
										<li><a href="#">Home</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Contact Us</a></li>
									</ul>
								</div>
								<span>Copyright © 2020&nbsp;<a href="#">CHIPHYSI</a>. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<a id="totop" >
			<i class="fa fa-angle-up"></i>
		</a>
	</div>
	<!-- <script src="js/jquery.min.js"></script>
	<script src="js/tether.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.easing.js"></script>
	<script src="js/jquery-waypoints.js"></script>
	<script src="js/jquery-validate.js"></script>
	<script src="js/jquery.prettyPhoto.js"></script>
	<script src="js/slick.min.js"></script>
	<script src="js/numinate.min.js"></script>
	<script src="js/imagesloaded.min.js"></script>
	<script src="js/jquery-isotope.js"></script>
	<script src="js/main.js"></script>
	<script src="js/map.js"></script>
	<script src="https://maps.google.com/maps/api/js?sensor=false"></script> -->
</body>

