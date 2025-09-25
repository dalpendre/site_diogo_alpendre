import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="font-sans flex flex-col min-h-screen overflow-y-auto p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-8 items-center w-full flex-1">
                    <div className="bio-text text-center overflow-y-auto">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-auto">
                                    <Image
                                        className="rounded-full brightness-120 opacity-100"
                                        src="/img/profile_pic.jpeg"
                                        alt="Next.js logo"
                                        width={180}
                                        height={180}
                                        priority
                                    />
                                </div>
                                <div className="col-sm-auto">
                                    <h1><b><b>Diogo</b></b> Alpendre</h1>
                                    <h4 className="bio-text text-cyan-700">Full-Stack Developer</h4>
                                    <p><b>2 years</b> of professional experience</p>
                                    <div className="row">
                                        <div className="col-sm-auto">
                                            <Image 
                                                className="brightness-120 opacity-100"
                                                src="/img/js-logo.png"
                                                alt="Javascript logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="col-sm-auto">
                                            <Image 
                                                className="brightness-120 opacity-100"
                                                src="/img/react.png"
                                                alt="Next.js logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="col-sm-auto">
                                            <Image 
                                                className="brightness-120 opacity-100"
                                                src="/img/java-logo-v2.png"
                                                alt="Java logo"
                                                width={75}
                                                height={75}
                                                priority
                                            />
                                        </div>
                                        <div className="col-sm-auto">
                                            <Image 
                                                className="brightness-120 opacity-100"
                                                src="/img/spring-boot-rect-v2.png"
                                                alt="Spring Boot logo"
                                                width={100}
                                                height={100}
                                                priority
                                            />
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <br/>
                                <h4 className="text-left"><b>👨‍💻 About me</b></h4>
                                <p className="text-justify">
                                    I am a software developer with nearly two years of experience specializing in 
                                    <span className="font-bold"> full-stack development</span> using 
                                    <span className="font-bold"> React</span> and <span className="font-bold"> Spring Boot</span>.
                                </p>
                                <p className="text-justify">
                                    Over the past 1 year and 10 months, I have contributed to a critical software system 
                                    for <span className="font-bold">organ transplantation management</span> in Saudi Arabia, 
                                    supporting both <b>donation</b> and <b>transplantation</b> processes.
                                </p>
                                <p className="text-justify">
                                    My work focuses on creating efficient, user-friendly applications that help streamline 
                                    complex medical operations, ensuring smooth coordination between healthcare providers 
                                    and transplant organizations.
                                </p>
                                <h4 className="text-left">My Projects</h4>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
