// Cada entrada representa uma chamada publicada. Informe o endereço de leitura quando o texto estiver disponível.
const postagens = [{
  publicadoEm: '2026-11-24T14:38:00-03:00',
  titulo: 'Banco ABC Brasil: operação de primeira prateleira, preço de segunda linha.',
  categoria: 'ANÁLISE DE EMPRESAS',
  resumo: 'O que o preço da ação revela sobre as expectativas do mercado para o Banco ABC Brasil?',
  autor: 'Pedro Marcos',
  imagem: 'capa.webp',
  descricaoImagem: 'Arte pixelizada do Banco ABC Brasil com um corvo de olho estrelado atrás do prédio.',
  pagina: 'banco-abc-brasil.html',
  leitura: null
}];

function obterPublicadas(entradas, agora = Date.now()) {
  return entradas.filter(post => Date.parse(post.publicadoEm) <= agora)
    .sort((a, b) => Date.parse(b.publicadoEm) - Date.parse(a.publicadoEm));
}

const publicadas = obterPublicadas(postagens);
const destaque = publicadas[0];
if (destaque) {
  const capa = document.querySelector('.hero');
  capa.querySelector('h1').textContent = destaque.titulo;
  capa.querySelector('.label').textContent = destaque.categoria;
  capa.querySelector('.deck').textContent = destaque.resumo;
  capa.querySelector('.credit').textContent = 'Por ' + destaque.autor;
  const imagem = capa.querySelector('img');
  imagem.src = destaque.imagem;
  imagem.alt = destaque.descricaoImagem;
  if (destaque.leitura) {
    const link = document.createElement('a');
    link.href = destaque.leitura;
    link.className = 'read';
    link.textContent = 'Ler análise ↗';
    capa.querySelector('.read').replaceWith(link);
  }
  const arquivo = document.querySelector('#arquivo');
  arquivo.replaceChildren(...publicadas.map(post => {
    const link = document.createElement('a');
    link.href = post.leitura || post.pagina;
    link.textContent = post.titulo;
    return link;
  }));
}
