import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/todoList';
import queryString from 'query-string';
import TodoForm from '../../components/todoForm';

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
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search);
        //console.log(params);
        return params.status||'all';
    });

    useEffect(()=>{
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status||'all');
    },[location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] ={
            ...newTodoList[idx],
            status: newTodoList[idx].status == 'new' ? 'completed':'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        //setFilteredStatus('all');
        const queryParams ={status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowCompletedClick = () => {
        //setFilteredStatus('completed');
        const queryParams ={status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowNewClick = () => {
        //setFilteredStatus('new');
        const queryParams ={status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const renderedTodoList = useMemo(()=>{
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus])

    const handleTodoFormSubmit = (values) =>{
        console.log('Form submit: ', values);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>

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