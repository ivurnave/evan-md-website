import { MarkdownPage } from "@/components/MarkdownPage";

const Home = () => {
    return (
        <>
            <div className="mx-5 mb-6">
                <div className="flex flex-row items-center">
                    <h1 className="block text-6xl mr-6">evan holmes</h1>
                    <img className="invert" src="https://ivurnave.github.io/me/static/media/cube.b476af13.png" height="350" width="350" />
                </div>
            </div>

            <MarkdownPage markdownFileName="bio" />
        </>
    )
}
export default Home;