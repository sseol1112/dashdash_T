'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';



export default function Todo() {
    type TodoType = {
        id: number;
        text: string;
        completed: boolean;
    };
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(true);
    const [todos, setTodos] = useState<TodoType[]>([]);
    

    useEffect(() => {
        const savedTodos = localStorage.getItem("to-do");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (text !== "") {
            const newTodo: TodoType = {
                id: Date.now(),
                text,
                completed: false,
            };
    
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            localStorage.setItem("to-do", JSON.stringify(updatedTodos));
    
            setText("");
        } else {
            alert("값을 입력해주세요.");
        }
    };

    // 삭제
    const deleteTask = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("to-do", JSON.stringify(updatedTodos));
    };

    // 체크박스 완료 기능
    const toggleComplete = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        );
    
        setTodos(updatedTodos);
        localStorage.setItem("to-do", JSON.stringify(updatedTodos));
    };

    // 수정
    const editTask = (id: number, newText: string) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id
                ? { ...todo, text: newText }
                : todo
        );
    
        setTodos(updatedTodos);
        localStorage.setItem("to-do", JSON.stringify(updatedTodos));
    };
    

    return (
        <div className={styles.formSection}>
            <div className={styles.toDoWorkWrap}>
                <div className={styles.formBoxWrap}>                
                    <form onSubmit={handleSubmit} className={styles.worksArea}> 
                        <label htmlFor="works" className={styles.titLabel}>
                            📘 할 일을 입력해주세요
                        </label>
                        <div className={styles.worksInput}>
                            <input type="text" id="works" value={text}
                            onChange={(e) => setText(e.target.value)} />
                            <button type="submit">추가</button>
                        </div>                  
                    </form>
            
                    <div className={styles.worksListArea}>
                    <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                className={styles.formChk}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                            />

                            <span
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    marginRight: "10px",
                                }}
                            >
                                {todo.text}
                            </span>
                            <div className={styles.btnGroup}>
                                <button
                                    className={styles.smBtn}
                                    onClick={() => {
                                        const newText = prompt("수정할 내용을 입력하세요", todo.text);
                                        if (newText !== null && newText.trim() !== "") {
                                            editTask(todo.id, newText);
                                        }
                                    }}
                                >
                                    수정
                                </button>

                                <button
                                    className={styles.smBtn}
                                    onClick={() => deleteTask(todo.id)}
                                >
                                    삭제
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }