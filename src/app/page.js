import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="bg-background text-font2 font-[family-name:var(--font-sono)] flex justify-between items-center m-6 py-6 px-8">
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
            <div className="bg-custom-svg opacity-100 bg-no-repeat bg-top bg-cover h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
        </div>
    );
}
