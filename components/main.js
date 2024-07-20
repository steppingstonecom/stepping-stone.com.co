

// A $( document ).ready() block.
$(document).ready(function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.innerHTML = `

    <header id="masthead" class="header cmt-header-style-01">
            <div class="top_bar cmt-bgcolor-darkgrey cmt-textcolor-white clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex flex-row align-items-center justify-content-center">
                                <div class="top_bar_contact_item">
                                    <div class="top_bar_icon"><i class="ti ti-alarm-clock"></i></div> <span data-schedule />
                                </div>
                                <div class="top_bar_contact_item">
                                    <div class="top_bar_icon"><i class="ti ti-location-pin"></i></div> <span data-address />
                                </div>
                                <div class="top_bar_contact_item ml-auto">
                                    <div class="top_bar_icon"><i class="fa fa-envelope-o"></i></div> <span data-email />
                                </div>
                                <div class="top_bar_social">
                                    <ul class="social-icons">
                                        <li class="google-icon"><a data-instagram href="#"><i class="ti ti-instagram"></i></a>
                                        </li>
                                        <li class="facebook-icon"><a data-facebook href="#"><i class="ti ti-facebook"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="cmt-bg cmt-col-bgcolor-yes cmt-right-span cmt-bgcolor-skincolor pl-20">
                                    <div class="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                                    <div class="layer-content">
                                        <div class="top_bar_contact_item"><div class="top_bar_icon"><i class="fa fa-phone"></i></div>+ 18000-200-1234</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="site-header-menu" class="site-header-menu cmt-bgcolor-white">
                <div class="site-header-menu-inner cmt-stickable-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <!--site-navigation -->
                                <div class="site-navigation d-flex flex-row align-items-center justify-content-between">
                                    <!-- site-branding -->
                                    <div class="site-branding ">
                                        <a class="home-link" href="index.html" title="Tripzia" rel="home">
                                            <img id="logo-img" class="img-center" src="images/logo-img.png" alt="logo-img">
                                        </a>
                                    </div><!-- site-branding end -->
                                    <!-- widget-info -->
                                    <div class="widget_info mr-auto">
                                        <div>Visa &amp; Immigration Consultants</div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="btn-show-menu-mobile menubar menubar--squeeze">
                                            <span class="menubar-box">
                                                <span class="menubar-inner"></span>
                                            </span>
                                        </div>
                                        <!-- menu -->
                                        <nav class="main-menu menu-mobile" id="menu">
                                            <ul class="menu">
                                                <li class="mega-menu-item active">
                                                    <a href="#" class="mega-menu-link">Home</a>
                                                    <ul class="mega-submenu">
                                                        <li class="active"><a href="index.html">Homepage 1</a></li>
                                                        <li><a href="home-2.html">Homepage 2</a></li>
                                                        <li><a href="home-3.html">Homepage 3</a></li>
                                                        <li class="mega-menu-item">
                                                            <a href="#" class="mega-menu-link">Header Styles</a>
                                                            <ul class="mega-submenu">
                                                                <li><a href="index.html">Header Style 01</a></li>
                                                                <li><a target="_blank" href="header-style-02.html">Header Style 02</a></li>
                                                                <li><a target="_blank" href="header-style-03.html">Header Style 03</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="mega-menu-item">
                                                    <a href="#" class="mega-menu-link">Visa</a>
                                                    <ul class="mega-submenu">
                                                        <li><a href="business-visa.html">Business Visa</a></li>
                                                        <li><a href="diplomatic-Offical-visa.html">Diplomatic &amp; Offical Visa</a></li>
                                                        <li><a href="family-visa.html">Family Visa</a></li>
                                                        <li><a href="student-visa.html">Student Visa</a></li>
                                                        <li><a href="temporary-Work-visa.html">Temporary Work Visa</a></li>
                                                        <li><a href="visitor-visa.html">Visitor Visa</a></li>
                                                    </ul>
                                                </li>
                                                <li class="mega-menu-item">
                                                    <a href="#" class="mega-menu-link">Country</a>
                                                    <ul class="mega-submenu">
                                                        <li><a href="canada.html">Canada</a></li>
                                                        <li><a href="uk.html">UK</a></li>
                                                        <li><a href="usa.html">USA</a></li>
                                                        <li><a href="aus.html">Australia</a></li>
                                                        <li><a href="nz.html">New Zealand</a></li>
                                                        <li><a href="ger.html">Germany</a></li>
                                                    </ul>
                                                </li>
                                                <li class="mega-menu-item">
                                                    <a href="/about.html" class="mega-menu-link">About</a>
                                                </li>
                                                <li class="mega-menu-item">
                                                    <a href="/contact.html" class="mega-menu-link">Contact</a>
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
    
    
    `;

    footer.innerHTML = `
           <footer class="footer cmt-bgcolor-darkgrey widget-footer clearfix">
            <div class="first-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                            <div class="widget widget_text mr-25 clearfix">
                                <h3 class="widget-title">About Us</h3>
                                <div class="textwidget widget-text">
                                    <p>The Most Eminent Visas and Immigration Consultant service provider in major
                                        metros and overseas with reliability since 1994. We are committed to provide
                                        reliable client support.</p>
                                </div>
                                <div class="cmt-horizontal_sep mt-25 mb-30"></div>
                                <div class="social-icons circle">
                                    <ul class="list-inline cmt-textcolor-skincolor">
                                        <li class="social-facebook"><a data-facebook class="tooltip-top" target="_blank" href="#"
                                                data-tooltip="Facebook"><i class="ti ti-facebook"></i></a></li>
                                        <li class="social-twitter"><a data-instagram, class="tooltip-top" target="_blank" href="#"
                                                data-tooltip="twitter"><i class="ti ti-instagram"></i></a></li>
                                       
                                        
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
                            <div class="widget widget_nav_menu clearfix">
                                <h3 class="widget-title">Social Networks</h3>
                                <ul id="menu-footer-quick-links">
                                    <li><a href="#" data-instagram target="_black">Instagram</a></li>
                                    <li><a href="#" data-facebook target="_black">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                            <div class="widget contact_map clearfix">
                                <div class="footer_map mb-20">
                                    <img src="images/footer_map.png" alt="">
                                </div>
                                <ul class="widget_contact_wrapper">
                                    <li><i class="cmt-textcolor-skincolor fa fa-map-marker"></i> <span data-address />
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
                                <div class="featured-icon-box icon-align-before-content">
                                    <div class="featured-icon">
                                        <div
                                            class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square">
                                            <i class="fa fa-envelope-o"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5> <span data-email /> </h5>
                                        </div>
                                        <div class="featured-desc">
                                            <p>Drop Us a Line</p>
                                        </div>
                                    </div>
                                </div><!-- featured-icon-box end-->
                            </aside>
                        </div>
                        <div class="widget-area col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <aside class="widget widget-text cmt-bgcolor-skincolor">
                                <!--featured-icon-box-->
                                <div class="featured-icon-box icon-align-before-content">
                                    <div class="featured-icon">
                                        <div
                                            class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5 > <span data-phone /> </h5>
                                        </div>
                                        <div class="featured-desc">
                                            <p>Call Us Now!</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="widget-area col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <aside class="widget widget-text">
                                <!--featured-icon-box-->
                                <div class="featured-icon-box icon-align-before-content">
                                    <div class="featured-icon">
                                        <div
                                            class="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-square">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h5> <span data-address />  </h5>
                                        </div>
                                        <div class="featured-desc">
                                            <p>Get Direction</p>
                                        </div>
                                    </div>
                                </div><!-- featured-icon-box end-->
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
                                <span>Copyright ©<span data-year > </span>  &nbsp; <span data-app-name  > </span> . All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `



});