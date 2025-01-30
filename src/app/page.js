import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="bg-background text-font2 font-[family-name:var(--font-sono)] flex justify-between items-center m-6 py-3 px-8">
                    <h1 className="text-2xl font-bold">
                        <Link href="/" className="hover:font-bold">
                            SARA FERNANDEZ
                        </Link>
                    </h1>
                    <nav>
                        <ul className="flex space-x-12">
                            <li>
                                <a
                                    href="#other-work"
                                    className="hover:font-bold"
                                >
                                    other work
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:font-bold">
                                    about
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="flex flex-col bg-custom-svg opacity-100 bg-no-repeat min bg-top bg-cover p-8 min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div
                    className="grid grid-cols-4 grid-rows-1 gap-4 w-full flex"
                    style={{ marginTop: "20%" }}
                >
                    <div className="col-span-3 flex text-font2">
                        <div className="flex flex-col space-y-9">
                            <h1 className="text-8xl font-bold italic font-[family-name:var(--font-inria-serif)]">
                                Hi! I'm <br />
                                Sara:)
                            </h1>
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-cols-4 grid-rows-1 gap-4 w-full flex"
                    style={{ marginTop: "0%" }}
                >
                    <div className="col-span-3 flex text-font2">
                        <div className="flex flex-col space-y-9">
                            <p
                                className="text-3xl font-[family-name:var(--font-sono)]"
                            >
                                I’m a web developer with a <br />
                                passion for art, design, <br />
                                videogames and music.
                            </p>
                        </div>
                    </div>
                    <div className="col-start-4 flex justify-center text-font1">
                        <div className="flex flex-col space-y-9 items-center text-center">
                            <p className="text-3xl font-[family-name:var(--font-sono)]">
                                See my work
                            </p>
                            <Image src="/arrow.svg" width={20} height={40} alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
