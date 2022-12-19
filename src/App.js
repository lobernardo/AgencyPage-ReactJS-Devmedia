import { useState } from 'react';
import Topo from './components/Topo';
import BannerSection from './components/BannerSection';
import ExpSection from './components/ExpSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {

	const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
	    <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <BannerSection ehTemaEscuro={ehTemaEscuro}/>
      <ExpSection ehTemaEscuro={ehTemaEscuro}/>
      <Footer ehTemaEscuro={ehTemaEscuro}/>
		</main>
  );
}