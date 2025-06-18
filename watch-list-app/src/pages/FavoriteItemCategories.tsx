import Firstbox from "../components/Firstbox.tsx";
import Secondbox from "../components/Secondbox.tsx";
import Thirdbox from "../components/Thirdbox.tsx";

const FavoriteItemCategories = () => {
    return (
        <div className="bg-white text-white min-h-screen flex flex-col">
            <main className="space">
                <div className="flex flex-col gap-0.5">
                    <Firstbox />
                    <Secondbox />
                </div>

                <Thirdbox />
            </main>
        </div>
    );
};

export default FavoriteItemCategories;