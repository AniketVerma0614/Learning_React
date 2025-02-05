import "./Product.css";
import Price from "./Price.jsx";

let oldPrices = ["12,495", "11,900", "1,599", "599"];
let newPrices = ["8,999", "9,199", "899", "278"];
let descriptions = [
    "8,000 DPI • 5 Programmable Buttons",
    "Intuitive touch surface • Designed for iPad Pro",
    "Intuitive touch surface • Designed for iPad Pro",
    "Wireless Mouse 2.4GHz • Optical Orientation"
];

function Product({ title, idx }) {
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
