import React, { useState } from 'react';
import { useLocation } from 'react-router';
import TodoList from '../../components/todoList';
import queryString from 'query-string';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Eat',
            status: 'new'

        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },    
    ]

    const location = useLocation();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search);
        //console.log(params);
        return params.status||'all';
    });

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] ={
            ...newTodoList[idx],
            status: newTodoList[idx].status == 'new' ? 'completed':'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    };
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    };
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/> 

            <div>
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show completed</button>
            <button onClick={handleShowNewClick}>Show new</button>
            </div>
        </div>
    );
}

export default ListPage;