/* 
    Created by Stefan Vitoria on 2/9/24
*/

/*
    Created by Stefan Vitoria on 1/11/24
*/

import Link from "next/link";
// import Section from "@/components/section";

const Footer = () => {
    return (
        <footer className="border-t px-4 bg-white h-min">
            {/*<Section>*/}
            <div className="space-y-3 py-3">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="space-y-2">
                        {/*<h3 className="text-xl font-semibold">Portal do Emprego</h3>*/}
                        <h1 className="text-xl font-semibold">Fake Mail Finder</h1>
                        <p className="text-sm text-muted-foreground">
                            Finding fake email addresses easily.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                        <Link href="/about" className="hover:underline">
                            About Us
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="hover:underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Fake Mail Finder. All rights reserved.
                </div>
            </div>
            {/*</Section>*/}
        </footer>
    );
}

export default Footer;