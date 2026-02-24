import {useState} from "react";
import type {ICarItem} from "../../types/ICarItem.ts";
import {Select} from "antd";
import ItemCar from "./ItemCar.tsx";
import CreateCarItem from "./CreateCarItem.tsx";

const Homepage = () =>
{
    //useState - спеціальний хук який призначений для зберігання інформації
    // cars - масив який зберігає інформацію типу ICarItem
    // setCars - функція яка вміє змінювати масив cars
    //якщо записуємо дані у setCars тоді відбувається рендер компонента
    // рендер - оновлення вмісту компонента
    const [cars, setCars] = useState<ICarItem[]>([
        {
            id: 1,
            model: "Citan",
            mark: "Mercedes",
            description: "не бита, не крашена",
            image: "https://cdn1.riastatic.com/photosnew/auto/photo/mercedes-benz_citan__623549116fx.webp",
            price: 15550,
            color: "Gray",
            year: 2022,
        },
        {
            id: 2,
            model: "X-Trail",
            mark: "Nissan",
            description: "не бита, не крашена",
            image: "https://cdn.riastatic.com/photosnewr/auto/photo/nissan-x-trail__268516496-460x345.webp",
            price: 3800,
            color: "Gray",
            year: 2002,
        },
        {
            id: 3,
            model: "Sprinter",
            mark: "Mercedes",
            description: "не бита, не крашена",
            image: "https://cdn1.riastatic.com/photosnew/auto/photo/mercedes-benz_sprinter__529085371fx.webp",
            price: 24500,
            color: "White",
            year: 2013,
        },
        {
            id: 4,
            model: "Vivaro",
            mark: "Opel",
            description: "не бита, не крашена",
            image: "https://cdn2.riastatic.com/photosnew/auto/photo/opel_vivaro__625170697fx.webp",
            price: 23500,
            color: "White",
            year: 2021,
        }
    ]);

    const sortByPrice = (value: string) => {
        //sort - ф-ція списків що сортує та змінює список за заданим значенням
        // ... - деструктуризація
        if (value === "asc") {
            setCars([...cars].sort((a, b) => a.price - b.price));
        } else if (value === "desc") {
            setCars([...cars].sort((a, b) => b.price - a.price));
        } else {
            setCars([...cars].sort((a, b) => a.id - b.id));
        } if (value === "asc") {
            setCars([...cars].sort((a, b) => a.year - b.year));
        } else if (value === "desc") {
            setCars([...cars].sort((a, b) => b.year - a.year));
        }
    }

    const deleteCarHandler = (id: number) => {
        //console.log("Delete item", id);
        //будемо змінювати ваш список таким чином,
        //щоб лишилися уся елементи крім id
        const result = confirm("Ви дійсно бажаєте видалити елемент?")
        if(result === true)  //якщо користувач сказав Так - видаляємо
            setCars(cars.filter(car => car.id !== id));
    }

    return (
        <>
            <h1 className={"text-4xl font-bold text-center mb-4"}>Головна сторінка</h1>
            <div className={"flex md-4"}>
                {/*Select - компонент AntD що створює список*/}
                <Select defaultValue={"default"} style={{ width: 200 }}
                        onChange={(value: string) => sortByPrice(value)}
                        options={[
                            {
                                value: "default",
                                label: "За замовчуванням"
                            },
                            {
                                value: "asc",
                                label: "Ціна: від меншої до більшої"
                            },
                            {
                                value: "desc",
                                label: "Ціна: від більшої до меншої"
                            },
                            {
                                value: "asc",
                                label: "Рік: від старішої до новішої"
                            },
                            {
                                value: "desc",
                                label: "Рік: від новішої до старішої"
                            }
                        ]} />
            </div>

            <CreateCarItem/>
            {/*key - змінна забеспечення індентифікації списків у віртуальному DOM*/}
            {cars.map(car =>
                <ItemCar key={car.id} car = {car}
                    deleteCar={deleteCarHandler}/>
            )}


        </>
    );
}

export default Homepage;