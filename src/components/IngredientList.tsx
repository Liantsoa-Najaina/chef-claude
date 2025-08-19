import type { FC } from "react";

type IngredientListProps = {
    ingredients: string[];
}

const IngredientList: FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <section className="flex flex-col items-center p-6 mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 font-sans">Ingredients on hand:</h2>
            <ul className="m-0 pl-5 space-y-2 list-disc">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 hover:text-gray-800 transition-colors">
                        {ingredient}
                    </li>
                ))}
            </ul>
        </section>
    ) 
}

export default IngredientList
