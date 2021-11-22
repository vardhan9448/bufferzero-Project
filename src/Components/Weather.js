import React, { Component, createRef } from 'react';

export class Weather extends Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        show: false,
    }

    text = createRef();

    display = () => {
        if (this.text.current.value === '') return;
        // eslint-disable-next-line react/no-unused-state
        this.setState({ show: true });
    }

    render() {
        const { show } = this.state;

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="text" ref={this.text} />
                    <button onClick={this.display} type="button">checkWeather</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {show && (
                        <h1>
                            {this.text.current.value}
                            is  cool
                            {' '}
                        </h1>
                    )}

                </div>
            </div>
        );
    }
}

export default Weather;
