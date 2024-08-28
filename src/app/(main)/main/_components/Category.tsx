import { useState } from "react";

export default function Category() {
    const categories = ["디자인", "일러스트", "사진", "영상", "웹", "기타"];
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="flex space-x-4 p-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-lg ${
                        activeCategory === category
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
