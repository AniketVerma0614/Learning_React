import "./Product.css";

function Product({title,price=100,features=[],features2={}}){
    // console.log(props.title);
    // console.log(features);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            <p>{features2.a}</p>
        </div>
    );
}

export default Product;