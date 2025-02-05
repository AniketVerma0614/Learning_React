function Price({ oldPrice, newPrice }) {
    return (
        <div style={{
            marginTop: "10px",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            gap: "10px"
        }}>
            <span style={{ textDecoration: "line-through", color: "red" }}>
                ₹{oldPrice}
            </span>
            <span style={{ fontWeight: "bold", color: "green", fontSize: "18px" }}>
                ₹{newPrice}
            </span>
        </div>
    );
}

export default Price;
