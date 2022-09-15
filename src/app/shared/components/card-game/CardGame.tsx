interface ICardGameProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export const CardGame: React.FC<ICardGameProps> = ({ bannerUrl, title, adsCount }) => {

    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={bannerUrl} alt={title} title={title} />

            <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{title}</strong>
                <span className="text-zinc-300 text-sm block mt-1">{adsCount} anúncios</span>
            </div>
        </a>
    );

};