import './todolist.css'

function TodoListApp() {
    return (
        <div>
            <h1>To do List</h1>

            <form>
                <input type="text" />
                <button>Add</button>
            </form>

            <ul>
                <li className='todo__item todo__item--complete'>
                    <input type="checkbox" name="todo__check" id="chk-1"/>
                    <label htmlFor="chk-1" className='todo__label'>놀기</label>
                    <button className='todo__button todo__button--edit'>✏️</button>
                    <button className='todo__button todo__button--delete'>❌</button>
                </li>
                <li>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor="">집 가기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp