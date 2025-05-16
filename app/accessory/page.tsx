import { IconCloud } from "@/components/magicui/icon-cloud";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Footer from "@/components/footer"
import { SparklesText } from "@/components/magicui/sparkles-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "amazonaws",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "mongodb",
    "macos",
    "ubuntu",
    "wordpress",
    "apache",
];

export default function Accessory() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
    return (
        <div data-aos="fade-up" className="relative overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col items-center w-full pt-1 md:pt-2 relative">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-0 w-[180px] h-[180px] flex justify-center items-center">
                    <IconCloud images={images} />
                </div>
                <div className="relative z-30 top-10">
                    <Image
                        src="/img.png"
                        alt="Logo"
                        width={130}
                        height={130}
                        className="rounded-full object-cover aspect-square border-[2px] border-solid border-[white] p-[2px] [transition:0.3s] hover:border-[black]"
                    />
                </div>
                <SparklesText className="text-4xl md:text-4xl p-2 font-bold mb-2 mt-20 md:mt-25 text-center">Accessory</SparklesText>
                <HyperText className="text-base md:text-lg text-white py-4 mt-2 text-center">Jittiphat Somsai</HyperText>
                <div className="w-full max-w-80 md:max-w-md h-full rounded-4xl bg-slate-300/10 backdrop-blur-lg p-4 md:p-6 mt-4">
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <div className="flex flex-col items-center text-center">
                        <Link href={"https://www.nubwo.co.th/%e0%b8%84%e0%b8%b5%e0%b8%a2%e0%b9%8c%e0%b8%9a%e0%b8%ad%e0%b8%a3%e0%b9%8c%e0%b8%94%e0%b9%80%e0%b8%81%e0%b8%a1%e0%b8%a1%e0%b8%b4%e0%b9%88%e0%b8%87-%e0%b8%a3%e0%b8%b8%e0%b9%88%e0%b8%99-x62/"} 
                            target="_blank" rel="noopener noreferrer">
                            <RainbowButton className="mt-4 w-full h-20 max-w-xs min-w-[250px] flex items-center justify-center hover:text-purple-500">
                                Keyboard Nubwo x62 Rhiannon Blue Switch
                            </RainbowButton>
                        </Link>
                        <Link href={"https://www.nubwo.co.th/cerberus-nm-92m/"} target="_blank" rel="noopener noreferrer">
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[220px] md:min-w-[320px] flex items-center justify-center hover:text-purple-700">
                                Mouse Nubwo NM-92M Macro
                            </RainbowButton>
                        </Link>
                        <Link href={"https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a24-black-128gb-sm-a245fzkvthl/"}>
                            <RainbowButton className="mt-2 w-full max-w-xs min-w-[285px] md:min-w-[320px] flex items-center justify-center hover:text-[#1428A0]">
                                Samsung Galaxy A24
                            </RainbowButton>
                        </Link>
                        <Link href={"/"}>
                            <InteractiveHoverButton className="mt-2 w-full mb-4 max-w-xs">
                                Back To Home
                            </InteractiveHoverButton>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
