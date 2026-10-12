# Prisma — site oficial (documentos legais)

Site estático do aplicativo **Prisma**, publicado para fornecer as URLs exigidas no formulário de
aprovação de integração com a plataforma TikTok.

## URLs publicadas

| Página | URL recomendada (formato diretório) | URL alternativa |
| --- | --- | --- |
| Início (site oficial) | https://tody12r-eng.github.io/prisma-app-legal/ | — |
| Termos de Serviço | https://tody12r-eng.github.io/prisma-app-legal/termos/ | https://tody12r-eng.github.io/prisma-app-legal/termos.html |
| Política de Privacidade | https://tody12r-eng.github.io/prisma-app-legal/privacidade/ | https://tody12r-eng.github.io/prisma-app-legal/privacidade.html |

As duas formas (diretório e `.html`) servem o mesmo conteúdo. O formato de diretório é mais seguro
no portal da TikTok, que normaliza URLs acrescentando uma barra (`/`) ao final.

## Verificação de URL no TikTok (URL properties)

O TikTok exige comprovar a posse do endereço. Como o domínio é `github.io`, a verificação por DNS
não é possível; use a opção **URL prefix** e publique o arquivo de assinatura fornecido pelo TikTok
na raiz do site (branch `gh-pages`, mesma pasta deste README).

## Como a publicação funciona

- O GitHub Pages publica o conteúdo da branch **`gh-pages`** (raiz do repositório).
- A branch **`main`** é a cópia de trabalho/fonte destes arquivos.
- Ao alterar qualquer página, atualize os arquivos na branch `gh-pages` e faça o push
  (ou mescle as mudanças de `main` para `gh-pages`). A republicação do Pages é automática,
  em cerca de 1 minuto.

## Contato

Suporte e privacidade: malubister448@gmail.com

## Arquivos

- `index.html` — página inicial do aplicativo
- `termos.html` / `termos/index.html` — Termos de Serviço
- `privacidade.html` / `privacidade/index.html` — Política de Privacidade
