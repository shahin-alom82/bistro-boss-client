
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div>
            <div className="flex space-x-4 items-start">
                <img style={{ borderRadius: "0 200px 200px" }} className="w-[120px] h-24" src={image} alt="" />
                <div className="lg:mt-2 text-gray-700">
                    <h1 className="text-xl">{name} ---------</h1>
                    <h1>{recipe}</h1>
                </div>
                <h1 className="text-yellow-500 lg:mt-2 text-[18px]">${price}</h1>
            </div>
        </div>
    );
};

export default MenuItem;