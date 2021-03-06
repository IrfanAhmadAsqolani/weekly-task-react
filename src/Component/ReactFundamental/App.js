import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

const daftarTugas = [ 
  {
    id: 1,
    title: "Membuat Komponen",
    completed: true,
  },
  {
    id: 2,
    title: "Unit Testing",
    completed: false,
  },
  {
    id: 3,
    title: "Setup Development Environment",
    completed: true,
  },
  {
    id: 4,
    title: "Deploy ke server",
    completed: false,
  },
];


function App() {
  return (
    <>
      <Header />
      <Content daftarTugas = {daftarTugas} /> 
    </>
  );
}

export default App;
