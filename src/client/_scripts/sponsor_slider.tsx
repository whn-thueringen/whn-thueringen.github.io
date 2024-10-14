import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <div class="slider">{props.children}</div>
);

const SlideTrack = (props: ParentProps) => (
	<div class="slide-track">{props.children}</div>
);

const Slides = () => (
  <>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://www.avenida-therme.de/" target="_blank"><img src="./_assets/logo_avenida_therme.png" alt="" /></a>
		</div>
		<div class="slide">
            <a href="https://hk-finanzberatung.de/" target="_blank"><img src="./_assets/Logo_Heinze-Kollegen_Website.png" alt="" /></a>
		</div>
  </>
);


const SponsorSlider = () => (
  <>
    <Wrapper>
      <SlideTrack>
        <Slides />
      </SlideTrack>
    </Wrapper>
  </>
);

export default SponsorSlider;