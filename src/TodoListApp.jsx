import { useMemo, useState } from 'react'
import Header from './components/Header'

export default function TodoListApp() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  )

  const addTodo = (event) => {
    event.preventDefault()
    const trimmed = input.trim()

    if (!trimmed) {
      return
    }

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    }

    setTodos((prev) => [newTodo, ...prev])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const editTodo = (id) => {
    const target = todos.find((todo) => todo.id === id)
    if (!target) {
      return
    }

    const nextText = window.prompt('수정할 내용을 입력하세요', target.text)

    if (nextText === null) {
      return
    }

    const trimmed = nextText.trim()
    if (!trimmed) {
      return
    }

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo)),
    )
  }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <section style={styles.container}>
      <Header />

      <form onSubmit={addTodo} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="할 일을 입력하세요"
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          추가
        </button>
      </form>

      <p style={styles.summary}>
        전체 {todos.length}개 / 완료 {completedCount}개
      </p>

      {todos.length === 0 ? (
        <p style={styles.empty}>아직 등록된 할 일이 없어요.</p>
      ) : (
        <ul style={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.item}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    ...styles.text,
                    ...(todo.completed ? styles.completedText : {}),
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <div style={styles.actions}>
                <button
                  type="button"
                  style={styles.editButton}
                  onClick={() => editTodo(todo.id)}
                >
                  수정
                </button>
                <button
                  type="button"
                  style={styles.deleteButton}
                  onClick={() => removeTodo(todo.id)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* {todos.length > 0 && (
        <button type="button" style={styles.clearButton} onClick={clearAll}>
          전체 삭제
        </button>
      )} */}
    </section>
  )
}

const styles = {
  container: {
    maxWidth: 520,
    margin: '32px auto',
    padding: 20,
    borderRadius: 12,
    border: '1px solid #d1d5db',
    background: '#ffffff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
  },
  title: {
    marginTop: 0,
    marginBottom: 16,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    gap: 8,
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
  },
  addButton: {
    padding: '10px 16px',
    borderRadius: 8,
    border: 'none',
    background: '#0ea5e9',
    color: '#fff',
    cursor: 'pointer',
  },
  summary: {
    margin: '12px 0',
    color: '#475569',
    fontSize: 14,
  },
  empty: {
    color: '#64748b',
    textAlign: 'center',
    margin: '20px 0',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: 8,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  actions: {
    display: 'flex',
    gap: 8,
  },
  text: {
    color: '#0f172a',
  },
  completedText: {
    color: '#94a3b8',
    textDecoration: 'line-through',
  },
  editButton: {
    border: 'none',
    borderRadius: 6,
    background: '#2563eb',
    color: '#fff',
    padding: '6px 10px',
    cursor: 'pointer',
  },
  deleteButton: {
    border: 'none',
    borderRadius: 6,
    background: '#ef4444',
    color: '#fff',
    padding: '6px 10px',
    cursor: 'pointer',
  },
  clearButton: {
    marginTop: 14,
    width: '100%',
    border: 'none',
    borderRadius: 8,
    background: '#334155',
    color: '#fff',
    padding: '10px 12px',
    cursor: 'pointer',
  },
}