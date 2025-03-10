import Image from "next/image"

const Home = () => (
    <>
        <div className="mb-4 p-2 rounded-3xl border-solid border border-outline shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-around gap-x-6">
                <h1 className="block text-center text-6xl">evan holmes</h1>
                <Image alt="guy in a box" className="dark:invert w-1/2 max-w-md" width={500} height={500} src="/images/cube.png" />
            </div>
            <div className="mt-2">
                <p>
                    Hi :) I work as a Sr. Software Engineer at Target in Minneapolis. I have many hobbies, including painting, woodworking, pottery,
                    making and playing video games, and more. This site serves as a living resume for me and my work over the years. When I
                    remember to, I update this site with my latest projects.
                </p>
            </div>
        </div>
    </>
)
export default Home;