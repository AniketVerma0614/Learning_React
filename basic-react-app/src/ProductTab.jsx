import Product from "./Product.jsx";

function ProductTab() {
    let features = ["hi-tech", "durable", "fast"];
    let features2 = { a: "hi-tech", b: "durable", c: "fast" };

    let baseStyle = {
        container: { border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "5px" },
        title: { fontSize: "18px", fontWeight: "bold" },
        price: { fontSize: "16px", fontWeight: "bold", color: "#555" },
        discount: { color: "green", fontWeight: "bold" },
        features: { fontSize: "14px", color: "#666" }
    };

    let highPriceStyle = {
        ...baseStyle,
        container: { ...baseStyle.container, border: "2px solid red", backgroundColor: "#ffeeee" }
    };

    return (
        <>
            <Product title="Phone" price={30000} features={features} features2={features2} styles={baseStyle} />
            <Product title="Laptop" price={40000} styles={highPriceStyle} />
            <Product title="Pen" styles={baseStyle} />
        </>
    );
}

export default ProductTab;
