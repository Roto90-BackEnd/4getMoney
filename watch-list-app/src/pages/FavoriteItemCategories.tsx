import Firstbox from "../components/Firstbox.tsx";
import Secondbox from "../components/Secondbox.tsx";
import Thirdbox from "../components/Thirdbox.tsx";

const FavoriteItemCategories = () => {
    return (
        <div className="text-white ">
            <main className="space">
                <div className="flex flex-col gap-3">
                    <Firstbox />
                    <Secondbox />
                </div>

                <Thirdbox />
            </main>
        </div>
    );
};

export default FavoriteItemCategories;