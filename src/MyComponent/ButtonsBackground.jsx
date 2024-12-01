import React, { Component } from 'react';

class ButtonsBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white', // default state
        };
    }

    ColorChange = (color) => {
        this.setState({ backgroundColor: color });
    }

    render() {
        const colors = ['blue', 'yellow', 'green', 'black', 'pink', 'orange', 'gray', 'purple'];

        return (
            <div
                style={{
                    backgroundColor: this.state.backgroundColor,
                    padding: '20px',
                    border: '1px solid black',
                    textAlign: 'center',
                }}
            >
                {colors.map(color => (
                    <button
                        key={color}
                        onClick={() => this.ColorChange(color)}
                        style={{
                            backgroundColor: color,
                            color: 'white',

                        }}
                    >
                        {color}
                    </button>
                ))}
            </div>
        );
    }
}

export default ButtonsBackground;
