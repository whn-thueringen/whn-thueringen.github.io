interface SlideProps {
  href: string;
  imgSrc: string;
	imgSrcAlt: string;
}

const Slide = (props: SlideProps) => (
	<div class="slide">
		<a href={props.href} target="_blank"><img src={props.imgSrc} alt={props.imgSrcAlt} loading="lazy"/></a>
	</div>
);

const SponsorSlider = () => (
  <div class="slider">
		<div class="slide-track">
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
						<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/images/logo_avenida_therme.webp"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/images/Logo_Heinze-Kollegen_Website.webp"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
		</div>
	</div>
);

export default SponsorSlider;