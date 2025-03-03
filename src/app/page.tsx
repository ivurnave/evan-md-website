import { MarkdownPage } from "@/components/MarkdownPage";

const Home = () => {
    return (
        <>
            <div className="mb-6">
                <div className="flex flex-col md:flex-row items-center gap-x-6">
                    <h1 className="block text-center md:text-left text-6xl">evan holmes</h1>
                    <img className="dark:invert w-1/2" src="https://ivurnave.github.io/me/static/media/cube.b476af13.png" />
                </div>
            </div>

            <MarkdownPage markdownFileName="bio" />
        </>
    )
}
export default Home;