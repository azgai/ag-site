import { animePosts } from "../data/posts";
import Card from "../components/Card";

export default function Anime() {
    return (
        <div>
            <h1>Anime</h1>
            {animePosts.map((post, i) => (
                <Card key={i} {...post} />
            ))}
        </div>
    );
}