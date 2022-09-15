import { CardGame, CreateAdBanner } from "./shared/components/index";
import "./shared/styles/index";
import logoImg from "../assets/Logo_NLW.svg";

export const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="NLW esports" title="NLW esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <CardGame
          bannerUrl="/image-1.png"
          title="Legue of Legends"
          adsCount={5}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
};