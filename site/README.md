
# Site para GitHub Pages

Este pacote contém um exemplo funcional com HTML, CSS e JS. Use-o como base do seu repositório.

## Estrutura
```
/ (raiz)
├─ index.html
├─ style.css
├─ script.js
├─ .nojekyll
└─ assets/
   ├─ images/
   │  └─ logo.svg
   └─ fonts/
      └─ README.txt (coloque aqui fonte.woff2, fonte.woff, fonte.ttf)
```

## Como publicar
1. Crie um repositório no GitHub (ou use o existente).
2. Copie todo o conteúdo desta pasta para a raiz do repositório.
3. Faça commit e push:
   ```bash
   git add .
   git commit -m "Publica site base no GitHub Pages"
   git push origin main
   ```
4. No GitHub, vá em **Settings › Pages** e ative o Pages a partir da branch `main` e do diretório `/root` (ou `/docs`, se preferir).
5. Aguarde a publicação. Seu site ficará disponível em:
   - **User/Org Pages**: `https://seuusuario.github.io/`
   - **Project Pages**: `https://seuusuario.github.io/seu-repo/`

> Observação: Como usamos caminhos **relativos** (ex.: `./style.css`), o site funciona tanto em User/Org Pages quanto em Project Pages.

## Fontes (Norse)
- Copie seus arquivos de fonte para `assets/fonts/` e garanta os nomes `fonte.woff2`, `fonte.woff`, `fonte.ttf`. Se necessário, edite `style.css`.
- Caso não tenha as fontes, o site utilizará fallbacks do sistema.

## Acessibilidade
- Incluímos estados `:focus-visible` para links e botões.
- O botão de menu alterna `aria-expanded` e fecha com `Esc` ou clique fora.

## Desenvolvimento
- Edite `index.html` para seu conteúdo.
- Ajuste cores/tokens em `:root` no `style.css`.
- O script `script.js` controla o menu mobile e eventos básicos.

Bom trabalho!
