/* 
    Created by Stefan Vitoria on 2/9/24
*/

/*
    Created by Stefan Vitoria on 1/1/24
*/
'use client';

import {ChangeEvent} from "react";
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';

const SearchBar = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();


    // TODO: MAYBE THE SEARCH VALUE SHOULD searchParams.get(`search`)?.toString()BE OPTIONAL, AND NO PROVIDED WE SHOULD USE A FALLBACK TO SEARCH ANOTHER THING INSTEAD


    const handleSearch = useDebouncedCallback((searchTerm: string) => {
        console.log(searchTerm);

        const params: URLSearchParams = new URLSearchParams(searchParams);

        if (searchTerm) {
            params.set('search', searchTerm)
        } else {
            params.delete('search')
        }

        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (

        <article className='mt-20 mb-8 max-w-5xl w-full px-1'>
            {/*<div className='w-full flex space-x-2 mb-20'>*/}
            {/*    <Input*/}
            {/*        className='w-full'*/}
            {/*        placeholder="O cargo que procuras..."*/}
            {/*        type='text'*/}
            {/*        onChange={(event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)}*/}
            {/*        defaultValue={searchParams.get(`search`)?.toString()}*/}
            {/*    />*/}
            {/*</div>*/}


            <div className="flex">
                <div className="relative w-full">
                    <input
                        id="search-dropdown"
                        className="block h-[42px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="O cargo que procuras..."
                        type='text'
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)}
                        defaultValue={searchParams.get(`search`)?.toString()}
                    />
                    <button
                        onClick={() => handleSearch(searchParams.get(`search`)?.toString() as string)}
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full w-16 flex items-center justify-center text-primary/70 rounded-e hover:bg-primary/10 transition focus:outline-non"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </article>
    )
}

export default SearchBar;