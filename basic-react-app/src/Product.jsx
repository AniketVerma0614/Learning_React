function Product({ title, price = 100, features = [], features2 = {}, styles }) {
    const finalPrice = price > 30000 ? price * 0.95 : price;

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>{title}</h3>
            <h5 style={styles.price}>Price: ₹{finalPrice}</h5>
            {price > 30000 && <p style={styles.discount}>5% Discount Applied!</p>}
            <p style={styles.features}>Features: {features.join(", ")}</p>
            <p style={styles.features}>Feature A: {features2.a || "N/A"}</p>
        </div>
    );
}

export default Product;
