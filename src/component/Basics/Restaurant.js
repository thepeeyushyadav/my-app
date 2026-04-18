import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList=[...new Set(Menu.map((curElem)=>{
    return curElem.category;
})
),"All",];

const Restaurant = ()=>
{
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }

    const handleSearch = (term) => {
        if(term.trim() === '') {
            setMenuData(Menu);
            return;
        }

        const filtered = Menu.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.description.toLowerCase().includes(term.toLowerCase()) ||
            item.category.toLowerCase().includes(term.toLowerCase())
        );
        setMenuData(filtered);
    }

    return (
     <>
     <Navbar 
        filterItem={filterItem} 
        menuList={menuList}
        onSearch={handleSearch}
     />
     <MenuCard menuData={menuData}/>
     </>
    );
};

export default Restaurant;