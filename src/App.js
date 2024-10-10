// src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

// Definisi CSS Object (Inline Style)
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

function App() {
  const [students, setStudents] = useState([]);

  // Mengambil data mahasiswa dari Firestore
  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const studentsList = querySnapshot.docs.map(doc => doc.data());
    setStudents(studentsList);  // Set data mahasiswa ke state
  };

  useEffect(() => {
    fetchStudents();  // Ambil data mahasiswa saat komponen pertama kali dirender
  }, []);

  return (
    <div style={styles.container}>
      <h1 className='App-header'>Daftar Mahasiswa</h1>
      <ul style={styles.list}>
        {students.map((student, index) => (
          <li key={index} style={styles.listItem}>
            NPM: {student.npm}, Nama: {student.nama}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

