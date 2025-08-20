import type { FC } from "react";
import GenerateRecipeCard from "./GenerateRecipeCard";

type IngredientListProps = {
    ingredients: string[];
}

const IngredientList: FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <section className="flex flex-col mt-2 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 font-sans">Ingredients on hand:</h2>
            <ul className="pl-5 list-disc">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 hover:text-gray-800 transition-colors animate-[slideInFade_0.4s_ease-out_forwards]">
                        {ingredient}
                    </li>
                ))}
            </ul>
            { ingredients.length > 3 && < GenerateRecipeCard /> }
        </section>
    )
}

export default IngredientList
