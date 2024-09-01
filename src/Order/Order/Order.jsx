import { Helmet } from "react-helmet-async";
import orderFood from "../../assets/shop/banner2.jpg"
import MenuCover from "../../Pages/Menu/MenuCover/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../../Components/OrderTab/OrderTab";

const Order = () => {
    
    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(0)

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Order Food </title>
            </Helmet>
            <MenuCover
                img={orderFood}
                title={"Oder Food"}
            ></MenuCover>

            <Tabs className={"mt-10  lg:mx-40 lg:text-xl text-sm"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Slad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>

            </Tabs>

        </div >
    );
};

export default Order;