import React, { Component, createContext } from 'react';

export const ColorContext = createContext();
export default class ColorProvider extends Component {
    state = {
        color: 'red',
    }

    render() {
        const { color } = this.state;
        const { children } = this.props;
        return (
            <ColorContext.Provider value={{
                color,
                changeTheme: (newColor) => {
                    this.setState({ color: newColor });
                },
            }}
            >
                {children}

            </ColorContext.Provider>
        );
    }
}
