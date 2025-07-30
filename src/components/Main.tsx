import type { JSX } from "react";

export default function Main():JSX.Element {
    return (
        <main className="flex flex-col main">
            <form className="flex justify-center gap-3 h-10">
                <input 
                    aria-label="Add ingredient" 
                    placeholder="e.g onions"
                    type="text"
                    className="rounded-md border border-solid border-[#D1D5DB] w-64 input"
                />
                <button 
                    className="font-sans rounded-md border-0 bg-[#141413] text-[#FAFAF8] px-0.5 max-w-44 text-base min-w-36 grow relative before:content-['+'] before:mr-[5px]"
                >
                    Add ingredient
                </button>
            </form> 
        </main>
    )
}