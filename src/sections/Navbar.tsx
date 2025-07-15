"use client";
import Image from "next/image";
import logoImage from "@/assets/images/LogoB.png";
import Button from "@/components/Button";
import { useModal } from "@/components/ModalContext";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const { open } = useModal();

    return (
        <section className="py-4 lg:py-8 bg-transparent fixed top-0 w-full z-50">
            <div className="container max-w-4xl">
                <div className="flex items-center justify-between rounded-full p-2 px-4 md:pr-2 h-[56px] bg-black/5 backdrop-blur-[36px]">
                    <div>
                        <Image
                            src={logoImage}
                            alt="Layers logo"
                            className="h-9 max-h-9 md:h-auto w-auto"
                        />
                    </div>
                    <div className="lg:flex flex-justify-center items-center hidden">
                        <nav className="flex gap-6 font-regular text-base opacity-70">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.label}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button
                            variant="primary"
                            className="md:hidden inline-flex items-center"
                            onClick={open}
                        >
                            Join Waitlist
                        </Button>
                        {/* <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Log In
                        </Button> */}
                        <Button
                            variant="primary"
                            className="hidden md:inline-flex items-center"
                            onClick={open}
                        >
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
