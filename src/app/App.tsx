import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdBanner } from "./shared/components/index";
import { CardGame } from "./shared/components/index";
import "./shared/styles/index";
import logoImg from "../assets/Logo_NLW.svg";
import { CreateAdModal } from "./shared/components/index";
import axios from "axios";

interface Games {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  }
}

export const App = () => {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then(response => {
      setGames(response.data);
    })
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="NLW esports" title="NLW esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(({ title, bannerUrl, _count, id }) => {
            return (
              <CardGame
                bannerUrl={bannerUrl}
                title={title}
                key={id}
                adsCount={_count.ads}
              />
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};