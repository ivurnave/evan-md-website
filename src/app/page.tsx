import { MarkdownPage } from "@/components/MarkdownPage";

const Home = () => {
    return (
        <>
            <div className="mb-4 p-2 rounded-3xl border-solid border border-outline shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-around gap-x-6">
                    <h1 className="block text-center text-6xl">evan holmes</h1>
                    <img className="dark:invert w-1/2 max-w-md" src="https://ivurnave.github.io/me/static/media/cube.b476af13.png" />
                </div>
            </div>

            <MarkdownPage markdownFileName="bio" />
        </>
    )
}
export default Home;