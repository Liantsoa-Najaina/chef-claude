import type { JSX } from "react";
import chefClaudeIcon from '../images/ChefClaudeIcon.png' 


export default function Recipe (): JSX.Element {
    return (
        <section className="font-sans mt-4 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <img src={chefClaudeIcon} alt="Chef Claude Icon" className="w-8" />
                Chef Claude Recommends:
            </h2>
            <article className="text-gray-700 leading-relaxed space-y-6" aria-live="polite">
                <p className="text-lg bg-amber-50 border-l-4 border-[#D17557] p-4 rounded-r-lg animate-[slideInFade_0.5s_ease-out_forwards]">
                    Based on the ingredients you have available, I would recommend making a simple and delicious <strong className="text-[#c26648]">Beef Bolognese Pasta</strong>. Here is the recipe:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#D17557]">🍝 Beef Bolognese Pasta</h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="recipe-ingredients animate-[slideInFade_0.7s_ease-out_forwards]">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">📋</span>
                                Ingredients:
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold my-auto">•</span>1 lb. ground beef</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>1 onion, diced</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>3 cloves garlic, minced</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>2 tablespoons tomato paste</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>1 (28 oz) can crushed tomatoes</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>1 cup beef broth</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>1 teaspoon dried oregano</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>1 teaspoon dried basil</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>Salt and pepper to taste</li>
                                <li className="flex items-start gap-2"><span className="text-[#D17557] font-bold mt-1">•</span>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                            </ul>
                        </div>
                        
                        <div className="recipe-instructions animate-[slideInFade_0.9s_ease-out_forwards]">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">👨‍🍳</span>
                                Instructions:
                            </h4>
                            <ol className="space-y-3 text-gray-700">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                    <span>Bring a large pot of salted water to a boil for the pasta.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                    <span>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                    <span>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                    <span>Stir in the tomato paste and cook for 1 minute.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                                    <span>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                                    <span>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                                    <span>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                                    <span>Add the Bolognese sauce to the cooked pasta and toss to combine.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#D17557] text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
                                    <span>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}