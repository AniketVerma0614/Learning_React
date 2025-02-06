function handleFormSubmit(event) {
    event.preventDefault(); // Prevents page reload
    console.log("Form was submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write something" />
            <button type="submit">Submit</button>
        </form>
    );
}
