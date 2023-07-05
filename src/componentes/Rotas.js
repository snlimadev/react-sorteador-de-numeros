import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from './telas/PaginaInicial';
import Personalizado from './telas/Personalizado';
import MegaSena from './telas/MegaSena';
import Lotofacil from './telas/Lotofacil';
import Quina from './telas/Quina';
import Lotomania from './telas/Lotomania';
import Timemania from './telas/Timemania';
import DuplaSena from './telas/DuplaSena';
import DiaDeSorte from './telas/DiaDeSorte';

export default function Rotas() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<PaginaInicial />} />
        <Route path='/personalizado' element={<Personalizado />} />
        <Route path='/megasena' element={<MegaSena />} />
        <Route path='/lotofacil' element={<Lotofacil />} />
        <Route path='/quina' element={<Quina />} />
        <Route path='/lotomania' element={<Lotomania />} />
        <Route path='/timemania' element={<Timemania />} />
        <Route path='/duplasena' element={<DuplaSena />} />
        <Route path='/diadesorte' element={<DiaDeSorte />} />
      </Routes>

    </BrowserRouter>
  );
}