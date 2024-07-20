<script lang="ts">
	import ButtonWhatsApp from '$lib/components/ButtonWhatsApp.svelte';
	import { INFO_COMPANY } from '$lib/const/INFO';
	import ES from '$lib/lang/ES';
	import EN from '$lib/lang/EN';
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

								<div class="cmt-bg cmt-col-bgcolor-yes cmt-right-span cmt-bgcolor-skincolor pl-20">
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
														<a href={item.path} class="mega-menu-link">{item.name}</a>
													</li>
												{/each}
												<!-- svelte-ignore a11y-click-events-have-key-events -->
												<li class="mega-menu-item mt-4 flex items-center justify-center">
													<!-- svelte-ignore a11y-click-events-have-key-events -->
													<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
													<img
														class="w-[60px] object-contain"
														on:click={() => {
															langStore.update((n) =>
																n.CURRENT == 'EN'
																	? { LANG: ES, CURRENT: 'ES' }
																	: { LANG: EN, CURRENT: 'EN' },
															);
														}}
														src="https://i.postimg.cc/bvQY8k2d/png-transparent-translation-collins-spanish-dictionary-english-american-heritage-children-s-dictiona.png"
														alt="change languaje"
													/>
												</li>
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
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 widget-area">
							<div class="widget widget_text mr-25 clearfix">
								<h3 class="widget-title">{$langStore.LANG.ABOUT.TITLE}</h3>
								<div class="textwidget widget-text">
									<p>
										{$langStore.LANG.ABOUT.SMALL_ABOUT}
									</p>
								</div>
								<div class="cmt-horizontal_sep mt-25 mb-30"></div>
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
											<h5><a href="mailto:{INFO_COMPANY.EMAIL}">{INFO_COMPANY.EMAIL}</a></h5>
										</div>
										<div class="featured-desc">
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
											<h5>{INFO_COMPANY.PHONE}</h5>
										</div>
										<div class="featured-desc">
											<p>{$langStore.LANG.FOOTER.CALL_US}</p>
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
											<h5>{INFO_COMPANY.PHONE_SECONDARY}</h5>
										</div>
										<div class="featured-desc">
											<p>{$langStore.LANG.FOOTER.CALL_US}</p>
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
										{#each $langStore.LANG.MENU as item}
											<li class="mega-menu-item">
												<a href={item.path}>{item.name}</a>
											</li>
										{/each}
									</ul>
								</div>
								<span
									>Copyright © {new Date().getFullYear()} &nbsp;{INFO_COMPANY.APP_NAME}. All rights
									reserved.</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<a id="totop">
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
