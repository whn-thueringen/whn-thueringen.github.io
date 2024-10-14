import type { ParentProps } from 'solid-js';
import WaveBottom from "./wave_bottom.tsx";

const HeaderWrapper = (props: ParentProps) => (
  <header class="text-center pt-4 pb-3">{props.children}</header>
);

const HeaderContent = () => (
  <>
    <h1>Förderverein weiblicher Handballnachwuchs Thüringen</h1>
  </>
);


const Header = () => (
  <>
    <HeaderWrapper>
      <HeaderContent></HeaderContent>
    </HeaderWrapper>
    <WaveBottom></WaveBottom>
  </>
);

export default Header;