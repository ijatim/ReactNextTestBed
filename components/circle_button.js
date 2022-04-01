import React from "react";

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => console.log('click')}>
                CircleButton
            </button>
        );
    }
}

export default function CircleButton() {
    return <Square/>
}