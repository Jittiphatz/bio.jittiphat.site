import { Heart } from "lucide-react";

const Footer = () => (
    <footer className="w-full py-4 mt-10 flex flex-col items-center text-center text-white text-sm">
        <span>© {new Date().getFullYear()} Jittiphat Somsai. All rights reserved.</span>
        <span>
            Made with <span className="text-pink-500"><Heart className="w-4 h-4 inline hover:scale-120 transition-all duration-500" /></span> | 
            Powered by <a className="hover:text-black" href="https://nextjs.org">Next.js</a> & <a className="hover:text-red-400" href="https://magicui.design/">Magic UI</a>
        </span>
    </footer>
);

export default Footer;