import SearchBar from "@/components/search";
import {Suspense} from "react";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center p-24 grow">

            <h2 className="font-semibold mt-32">
                Fake Mail Finder
            </h2>

            <Suspense>
                <div className="w-full flex items-center justify-center ">
                    <SearchBar/>
                </div>
            </Suspense>

        </main>
    );
}
