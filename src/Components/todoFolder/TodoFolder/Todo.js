import React, { Component } from 'react';
import { Formik } from 'formik';
import './style.css';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: 'all',
            todoArr: [],
        };
    }
    // changeText = (event) => {
    //     this.setState({ text: event.target.value })
    // }

    addTodo = (val, actions) => {
        // event.preventDefault();
        this.setState(({ todoArr }) => ({
            todoArr: [...todoArr, {
                text: val.todotext, id: new Date().valueOf(), isDone: false,
            }],
        }),
            () => { actions.resetForm(); });
    }

    completeTodo = (item) => {
        this.setState(({ todoArr }) => ({
            todoArr: todoArr.map((e) => {
                if (e.id === item.id) return { ...e, isDone: !e.isDone };
                return e;
            }),
        }));
    }

    deleteTodo = (item) => {
        this.setState(({ todoArr: arr }) => ({
            todoArr: arr.filter((e) => {
                if (e.id !== item.id) { return e; }
                return null;
            }),
        }));
    }

    filterTodo = (text) => {
        this.setState({ filterText: text });
    }

    render() {
        const { todoArr, filterText } = this.state;
        return (
            <div className="container">
                <h1 id="header"> TODO </h1>
                <Formik
                  initialValues={{
                        todotext: '',
                    }}
                  validate={(values) => {
                        const err = {};
                        if (!values.todotext) { err.text = 'Required'; }
                        return err;
                    }}
                  onSubmit={this.addTodo}
                >
                    {({
                        values, handleChange, handleSubmit, errors,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              value={values.todotext}
                              onChange={handleChange}
                              name="todotext"
                            />
                            <button type="submit"> addTodo </button>
                            <div style={{ color: 'red' }}>
                                {errors.text && errors.text}
                            </div>
                        </form>
                    )}
                </Formik>
                <div className="todo_list">
                    {todoArr.filter((item) => {
                        switch (filterText) {
                            case 'pending': { return item.isDone === false; }
                            case 'completed': { return item.isDone === true; }
                            default: { return true; }
                        }
                    }).map((item) => {
                        return (
                            <div className="todo_item" key={item.id}>
                                <input
                                  type="checkbox"
                                  checked={item.isDone}
                                  onChange={() => {
                                        this.completeTodo(item);
                                    }}
                                />
                                <span>{item.text}</span>
                                <button type="button" onClick={() => { this.deleteTodo(item); }}>remove</button>
                            </div>
                        );
                    })}
                </div>
                <div className="flex_wrapper">
                    <button type="button" onClick={() => this.filterTodo('all')}> all </button>
                    <button type="button" onClick={() => this.filterTodo('completed')}> completed </button>
                    <button type="button" onClick={() => this.filterTodo('pending')}> pending </button>
                </div>
            </div>
        );
    }
}
