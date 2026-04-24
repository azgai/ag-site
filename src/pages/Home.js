import Card from "../components/Card";

export default function Home() {
    return (
        <div>
            <h1>Anime Hub</h1>
            <p>Your gateway...</p>

            {/* WATCH SECTION */}
            <h2>🎥 Watch Anime</h2>

            <Card
                title="Crunchyroll"
                description="Largest legal anime streaming platform."
                link="https://www.crunchyroll.com"
            />

            <Card
                title="Netflix Anime"
                description="Popular anime and Netflix originals."
                link="https://www.netflix.com"
            />

            <Card
                title="Funimation"
                description="Great for dubbed anime fans."
                link="https://www.funimation.com"
            />  

            <Card
                title="Aniwatch"
                description="Wide variety of anime titles."
                link="https://www.aniwatch.to"
            />

            {/* PLAY SECTION */}
            <h2>Play Portal</h2>

            <Card
                title="Steam"
                description="Huge library of anime-style and JRPG games."
                link="https://store.steampowered.com"
            />

            <Card
                title="PlayStation Store"
                description="JRPGs and anime-inspired console games."
                link="https://store.playstation.com"
            />
        </div>
    );
}