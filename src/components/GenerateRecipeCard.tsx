import { useState, type JSX } from "react";
import Recipe from "./Recipe";

export default function GenerateRecipeCard(): JSX.Element {
    const [recipeShown, setRecipeShown] = useState(false)

    const handleClick = () => {
        setRecipeShown(true);
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center rounded-lg bg-[#F0EFEB] py-4 px-6 mt-6 gap-4 animate-[slideInFade_0.9s_ease-out_forwards]">
                <div className="text-center sm:text-left">
                    <h3 className="text-[1.125rem]/[24px] font-medium">Ready for a recipe?</h3>
                    <p className="text-[#6B7280] text-[0.875rem]/[20px]">Generate a recipe from your list of ingredients.</p>
                </div>
                    <button className="w-full sm:w-auto border-none rounded-md bg-[#D17557] shadow-xs text-[#FAFAF8] py-2.5 px-4 font-sans text-sm cursor-pointer hover:bg-[#c26648] transition-colors" onClick={handleClick}>Get a recipe</button>
            </div>
            {recipeShown && <Recipe/>}
        </>
    )
}