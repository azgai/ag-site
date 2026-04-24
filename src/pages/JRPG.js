import { jrpgPosts } from "../data/posts";
import Card from "../components/Card";

export default function JRPG() {
    return (
        <div>
            <h1>JRPG</h1>
            {jrpgPosts.map((post, i) => (
                <Card key={i} {...post} />
            ))}
        </div>
    );
}