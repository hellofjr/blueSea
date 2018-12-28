import React from 'react';

import Footer from '../../components/footer'
import AddTodo from '../../containers/addtodo'
import VisibleTodoList from '../../containers/visiabletodolist'

export default class About extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}