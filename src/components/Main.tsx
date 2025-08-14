import { useState, useRef , type JSX, type FormEvent } from "react";

export default function Main():JSX.Element {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newIngredient = inputRef.current?.value;
        newIngredient && setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        console.log("New ingredient added:", newIngredient);
        console.log("Ingredients:", ingredients);

        inputRef.current && (inputRef.current.value = "");
    };

    return (
        <main className="flex flex-col main">
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
            <ul>
                {ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
            </ul>
        </main>
    )  
}