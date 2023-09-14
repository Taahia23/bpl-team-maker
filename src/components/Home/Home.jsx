/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';


const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    console.log(allActors);

    // event handler

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id == actor.id);
        // console.log(isExist);

        let count = actor.salary;

        if (isExist) {
            return alert('already booked')
        }
        else {
            selectedActors.forEach(item => {
                count = count + item.salary;
            })
            const totalRemaining = 20000 - count;


            if (count >= 20000) {
                return alert('tk ses vai, r hobe na.. vago ekhn')
            }
            else {
                setTotalCost(count);
                setRemaining(totalRemaining);
                setSelectedActors([...selectedActors, actor])

            }

        }



    }
    console.log(selectedActors);



    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor) =>
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={actor.image} alt="" />
                                </div>
                                <h2>{actor.name}</h2>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ipsa?</small></p>
                                <div className="info">
                                    <p>salary: {actor.salary}</p>
                                    <p>{actor.role}</p>
                                </div>
                                <button onClick={() => handleSelectActor(actor)} className='card-btn'>select</button>
                            </div>
                        )
                    }
                </div>
                <div className="cart">
                    <Cart
                        selectedActors={selectedActors}
                        remaining={remaining}
                        totalCost={totalCost}>

                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;