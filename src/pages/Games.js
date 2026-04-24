import { gamePosts } from "../data/posts";
import Card from "../components/Card";

export default function Games() {
    return (
        <div>
            <h1>Games</h1>
            {gamePosts.map((post, i) => (
                <Card key={i} {...post} />
            ))}
        </div>
    );
}