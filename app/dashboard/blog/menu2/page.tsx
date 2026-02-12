'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';



export default function Todo() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<string[]>([]);
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text != "") {
            setTodos((prev) => [...prev, text]);
            setText("");
        } else {            
            alert("값을 입력해주세요.");
            return;
        }
    };
  
    const deleteTask = (e : React.MouseEvent) => {
        e.preventDefault();

        console.log(e.target.parentElement);
        e.target.parentElement.remove();

    }
    return (
        <div className={styles.formSection}>
            <div className={styles.toDoWorkWrap}>
                <div className={styles.formBoxWrap}>                
                    <form onSubmit={handleSubmit} className={styles.worksArea}> 
                        <label htmlFor="works" className={styles.titLabel}>
                            할 일을 입력해주세요
                        </label>
                        <div className={styles.worksInput}>
                            <input type="text" id="works" value={text}
                            onChange={(e) => setText(e.target.value)} />
                            <button type="submit">추가</button>
                        </div>                  
                    </form>
            
                    <div className={styles.worksListArea}>
                        <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>
                                    {todo}
                                    <button className={styles.smBtn} onClick={deleteTask}>삭제</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }