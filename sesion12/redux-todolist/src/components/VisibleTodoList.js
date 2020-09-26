import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import TodoList from '../features/todos/TodoList'
import { VisibilityFilters } from '../features/filters/filtersSlice'
import { toggleTodo } from '../features/todos/todosSlice'

const selectTodos = state => state.todos
const selectFilter = state => state.visibilityFilters
const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter = VisibilityFilters.SHOW_ACTIVE){
            case VisibilityFilters.SHOW_ALL: return todos
            case VisibilityFilters.SHOW_COMPLETE: return todos.filter(t => t.completed)
            case VisibilityFilters.SHOW_ACTIVE: return todos.filter(t => !t.completed)
            default: throw new Error('Unknow filter: ' + filter)
        }
    }
)

const mapStateToProps = (state) => ({
    todos: selectVisibleTodos(state)
})

const mapDispatchToProps = { toggleTodo }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)