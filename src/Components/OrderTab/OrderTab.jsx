import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-8 p-2">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;