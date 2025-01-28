import Product from "./Product.jsx";

function ProductTab(){
    let features =["hi-tech","durable","fast"];
    let features2 ={a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
            <Product title="phone" price={30000} features={features} features2={features2}/>
            <Product title="laptop"price={40000}/>
            <Product title="pen"/>
        </>
    );
}


export default ProductTab;