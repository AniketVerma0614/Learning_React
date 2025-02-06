function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDblClick() {
    console.log("You double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas animi, 
                provident fuga ea mollitia voluptatum qui repudiandae perferendis cupiditate 
                nisi eos doloremque harum officiis sed et placeat debitis rerum autem.
            </p>
            <button onDoubleClick={handleDblClick}>Please Double Click me!!!!</button>
        </div>
    );
}
