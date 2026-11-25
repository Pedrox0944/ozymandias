# Ozymandias — Mercados e Impérios

Exportação da versão 19. Abra a pasta Ozymandias no VS Code para trabalhar com o Codex. O site é estático e os arquivos em `dist/` são o próprio código editável.

## Rodar no computador

Na pasta Ozymandias, rode `python -m http.server 8000 --directory dist` (no Windows, também pode usar `py` no lugar de `python`). Abra http://localhost:8000. Use Ctrl+C para encerrar. Também é possível abrir dist/index.html diretamente no navegador.

## Editar

| Arquivo | Conteúdo |
| --- | --- |
| dist/index.html | Capa, navegação, seção de conceitos e janelas de leitura |
| dist/sobre.html | Apresentação do projeto e do autor |
| dist/banco-abc-brasil.html | Chamada da análise e aviso de artigo em preparação |
| dist/manchete.css | Estilos compartilhados e tipografia. Cada HTML também contém estilos locais. |
| dist/postagens.js | Cadastro das postagens, ordem do arquivo e destaque da capa |
| AGENTS.md | Orientações de identidade visual e edição para o Codex |

Para publicar um texto, crie a página HTML em dist/ e registre sua entrada em postagens.js. Preencha publicadoEm com data, hora e fuso. Use pagina para a página da chamada e leitura para o endereço do texto completo quando estiver pronto. A capa destaca a entrada publicada mais recente.

## Publicar

Em um servidor web, copie o **conteúdo de dist/** para a pasta pública, mantendo index.html ao lado dos demais arquivos. Em uma hospedagem estática conectada ao repositório, selecione dist como diretório de publicação e deixe o comando de build vazio. Os caminhos de navegação e das imagens funcionam também em subpastas.

Ao definir o domínio, atualize o valor de og:image em index.html e banco-abc-brasil.html para a URL pública completa de capa.webp. Isso permite que as redes sociais encontrem a imagem ao compartilhar um link.
