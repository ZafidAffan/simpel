// src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

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
    <div>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            NPM: {student.npm}, Nama: {student.nama}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
