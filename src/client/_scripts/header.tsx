import WaveBottom from "./wave_bottom.tsx";

interface HeaderProps {
  description: string;
}

const HeaderContent = ( props: HeaderProps ) => (
  <>
    <h1>{props.description}</h1>
  </>
);


const Header = () => (
  <>
    <header class="text-center pt-4 pb-3">
      <HeaderContent 
        description="Förderverein weiblicher Handballnachwuchs Thüringen"
      />
    </header>
    <WaveBottom />
  </>
);

export default Header;