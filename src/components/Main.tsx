import { useState, useRef , type JSX, type FormEvent } from "react";
import IngredientList from "./IngredientList";

export default function Main():JSX.Element {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addIngredient = () => {
        const newIngredient = inputRef.current?.value;
        newIngredient && setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addIngredient();
    }

    return (
        <main className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <form className="flex flex-col sm:flex-row w-full gap-4 sm:gap-3 items-stretch max-w-full" onSubmit={handleSubmit}>
                <div className="flex-[3] min-w-0">
                    <input 
                        aria-label="Add ingredient" 
                        placeholder="e.g onions"
                        type="text"
                        className="w-full h-12 rounded-lg border border-solid border-gray-300 px-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#141413] focus:border-transparent transition-all"
                        name="Ingredient"
                        ref={inputRef}
                    />
                </div>
                <button 
                    className="flex-1 h-full min-h-[48px] font-sans rounded-lg border-0 bg-[#20201e] text-[#FAFAF8] px-6 text-base whitespace-nowrap hover:bg-[#141413] transition-colors before:content-['+'] before:mr-2 before:text-lg flex items-center justify-center"
                > 
                    Add ingredient
                </button>
            </form>
            { ingredients.length != 0 && <IngredientList ingredients={ingredients}/> }
        </main>
    )  
}