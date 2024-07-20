<script>
	import { INFO_COMPANY } from '$lib/const/INFO';
	import langStore from '$lib/stores/langStore';
</script>

<div class="cmt-page-title-row">
	<div class="cmt-page-title-row-inner">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-12">
					<div class="page-title-heading">
						<h2 class="title">{$langStore.LANG.CONTACT.TITLE}</h2>
						<p></p>
					</div>
					<div class="breadcrumb-wrapper">
						<span>
							<a title="Homepage" href="/">{$langStore.LANG.HOME.TITLE}</a>
						</span>
						<span>{$langStore.LANG.CONTACT.TITLE}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="site-main  mt-36">
	<section class="cmt-row conatact-section clearfix">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="cmt-col-bgcolor-yes cmt-bg cmt-bgcolor-white z-index-2 spacing-7 box-shadow">
						<div class="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
						<div class="row">
							<div class="col-lg-4 col-md-5">
								<div class="cmt-bgcolor-darkgrey pt-30 pb-30 pl-30 pr-30">
								
									<h4>{$langStore.LANG.CONTACT.SUPPORT}</h4>
									<div class="cmt-textcolor-white">
										{$langStore.LANG.CONTACT.SUPPORT}: <a href="mailto:{INFO_COMPANY.EMAIL}">{INFO_COMPANY.EMAIL}</a>
									</div>
								</div>
								<div class="cmt-bgcolor-skincolor pt-30 pb-25 pl-30 pr-30">
									<h5 class="font-weight-normal">
										{$langStore.LANG.CONTACT.QUICK_CONTACT.TEXT}
									</h5>
									<div class="d-flex align-items-center pt-10">
										<div
											class="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-rounded mr-15 mb-10"
										>
											<i class="fa fa-phone"></i>
										</div>
										<h4>{INFO_COMPANY.PHONE}</h4>
									</div>
									<div class="d-flex align-items-center pt-10">
										<div
											class="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-rounded mr-15 mb-10"
										>
											<i class="fa fa-phone"></i>
										</div>
										<h4>{INFO_COMPANY.PHONE_SECONDARY}</h4>
									</div>
								</div>
							</div>
							<div class="col-lg-8 col-md-7">
								<div class="pl-30 res-991-pl-0 res-767-mt-30">
									<!-- section title -->
									<div class="section-title with-desc clearfix">
										<div class="title-header">
											<h5>{$langStore.LANG.CONTACT.SUB_TITLE}</h5>
											<h2 class="title">{$langStore.LANG.CONTACT.TITLE_FORM} <strong>{$langStore.LANG.CONTACT.TITLE_FORM_2}</strong></h2>
										</div>
									</div>
									<!-- section title end -->
									<form
										id="contact_form"
										class="contact_form wrap-form pt-15 clearfix"
										method="post"
										action="#"
									>
										<div class="row">
											<div class="col-lg-6 col-md-6">
												<label>
													<span class="text-input"
														><input
															name="name"
															type="text"
															value=""
															placeholder={$langStore.LANG.CONTACT.FORM.NAME}
															required={true}
														/></span
													>
												</label>
											</div>
											<div class="col-lg-6 col-md-6">
												<label>
													<span class="text-input"
														><input
															name="address"
															type="text"
															value=""
															placeholder={$langStore.LANG.CONTACT.FORM.EMAIL}
															required={true}
														/></span
													>
												</label>
											</div>
										</div>
										<div class="row">
											<div class="col-lg-6 col-md-6">
												<label>
													<span class="text-input"
														><input
															name="phone"
															type="text"
															value=""
															placeholder={$langStore.LANG.CONTACT.FORM.PHONE}
															required={true}
														/></span
													>
												</label>
											</div>
											<div class="col-lg-6 col-md-6">
												<label>
													<span class="text-input"
														><input
															name="phone"
															type="text"
															value=""
															placeholder={$langStore.LANG.CONTACT.FORM.SUBJECT}
															required={true}
														/></span
													>
												</label>
											</div>
										</div>
										<label>
											<span class="text-input"
												><textarea name="message" rows="5" placeholder={$langStore.LANG.CONTACT.FORM.MESSAGE} required={true}
												></textarea></span
											>
										</label>
										<button
											class="submit cmt-btn cmt-btn-size-lg cmt-btn-shape-rounded cmt-btn-style-border cmt-btn-color-dark w-100"
											type="submit">{$langStore.LANG.CONTACT.FORM.SEND}</button
										>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- conatact-section end -->
</div>
