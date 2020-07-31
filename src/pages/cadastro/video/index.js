import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CadastrarVideo() {
  return (
    <PageDefault>
      <h1>cadastro de video</h1>
      <Link to="/cadastro/categoria">
        cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastrarVideo;