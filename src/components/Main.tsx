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
        <main className="flex flex-col main gap-3">
            <form className="flex justify-center gap-3 h-10" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient" 
                    placeholder="e.g onions"
                    type="text"
                    className="rounded-md border border-solid border-[#D1D5DB] w-64 input "
                    name="Ingredient"
                    ref={inputRef}
                />
                <button 
                    className="font-sans rounded-md border-0 bg-[#141413] text-[#FAFAF8] px-0.5 max-w-44 text-base min-w-36 grow relative before:content-['+'] before:mr-[5px]"
                > 
                    Add ingredient
                </button>
            </form>
            { ingredients.length != 0 && <IngredientList ingredients={ingredients}/> }
        </main>
    )  
}