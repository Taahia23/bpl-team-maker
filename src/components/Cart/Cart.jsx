import './Cart.css'

const Cart = ({selectedActors, remaining, totalCost}) => {
   
    return (
        <div>
            <h5>Total actors: { selectedActors.length}</h5>
            <h3>Remaining = {remaining}</h3>
            <h3>Total Cost = {totalCost}</h3>

           {
             selectedActors.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
             ))
                
             
           }
        </div>
    );
};



export default Cart;