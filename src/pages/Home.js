import Card from "../components/Card";

export default function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Anime • Games • JRPG Worlds</p>

            <Card
                title="Explore Anime"
                description="Find the best anime to watch."
            />
            <Card
                title="Explore Games"
                description="Discover anime-inspired games."
            />
        </div>
    );
}