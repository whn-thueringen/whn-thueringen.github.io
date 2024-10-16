interface SlideProps {
  href: string;
  imgSrc: string;
	imgSrcAlt: string;
}

const Slide = (props: SlideProps) => (
	<div class="slide">
		<a href={props.href} target="_blank"><img src={props.imgSrc} alt={props.imgSrcAlt} /></a>
	</div>
);

const SponsorSlider = () => (
  <div class="slider">
		<div class="slide-track">
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
						<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
			<Slide 
				href="https://www.avenida-therme.de/"
				imgSrc="./_assets/logo_avenida_therme.png"
				imgSrcAlt="Avenida Therme Hohenfelden"
			/>
			<Slide 
				href="https://hk-finanzberatung.de/"
				imgSrc="./_assets/Logo_Heinze-Kollegen_Website.png"
				imgSrcAlt="Heinze & Kollegen Finanzberatung"
			/>
		</div>
	</div>
);

export default SponsorSlider;