import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
                    <Image
                    className="dark"
                    src="/img/profile_pic.jpeg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                    />
                    <p>
                        I am a Web Developer, with foundations on React and 
                    </p>
                </main>
            </div>
        </>
    )
}
