# Paletas Animadas

---

Animação interativa de paletas (blocos coloridos) em 3D que respondem ao scroll e ao hover, criando um efeito fluido e imersivo.

## 📋 Sumário

* [Descrição](#descrição)
* [Demo](#demo)
* [Funcionalidades](#funcionalidades)
* [Tecnologias](#tecnologias)
* [Pré-requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Uso](#uso)
* [Configuração e Personalização](#configuração-e-personalização)
* [Estrutura de Arquivos](#estrutura-de-arquivos)
* [Contribuição](#contribuição)
* [Licença](#licença)
* [Autor](#autor)

---

## 📝 Descrição

O projeto **Paletas Animadas** apresenta uma cena em perspectiva 3D onde diversas paletas (blocos quadrados) flutuam e reagem ao movimento do mouse e ao scroll da página. Ideal para efeitos visuais em sites institucionais, portfólios e demonstrações interativas.

---

## 🎥 Demo

1. Abra o arquivo `index.html` em um navegador compatível.
2. Role a página para movimentar a cena.
3. Passe o cursor sobre as paletas para ver os efeitos de salto e rotação.

---

## ✨ Funcionalidades

* **Scroll suave da cena**: controla o deslocamento vertical até um limite configurável.
* **Hover 3D**: paletas saltam levemente em profundidade (`translateZ`) ao passar o mouse.
* **Animação de flutuação**: movimentos contínuos usando `@keyframes`.
* **Rotação dinâmica**: ajustes de rotação conforme a posição do cursor.
* **Responsividade**: adaptação do tamanho e posicionamento em diferentes larguras de tela.

---

## 🚀 Tecnologias

* **HTML5**
* **CSS3** (Flexbox, Transforms, Animations)
* **JavaScript** (ES6+)

---

## 📦 Pré-requisitos

* Navegador moderno com suporte a CSS3 e ES6.
* Não há dependências externas.

---

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://seu-repositorio/paletas-animadas.git

# Entre na pasta do projeto\cd paletas-animadas

# Abra no navegador
open index.html
```

---

## 🚩 Uso

1. Com o `index.html` aberto, role a página para mover toda a cena.
2. Passe o mouse sobre qualquer paleta para ativar o efeito 3D.
3. Experimente diferentes posições de scroll e cursor para explorar os comportamentos.

---

## ⚙️ Configuração e Personalização

* **Número de paletas**: no `index.html`, adicione ou remova `<div class="plate" style="--i:X"></div>` para controlar quantos blocos aparecem.
* **Limite de scroll**: em `script.js`, ajuste `const maxScroll = 800;` conforme a necessidade.
* **Estilos das paletas**: em `style.css`, edite `background: linear-gradient(...)`, `width`, `height` e `filter: blur(...)` em `.plate`.
* **Velocidade de animação**: modifique `transition` em `.plate` e `animation-duration` em `@keyframes flutuante`.
* **Perspectiva**: ajuste `perspective: 1000px;` em `.container` para alterar a profundidade da cena.

---

## 📂 Estrutura de Arquivos

```text
paletas-animadas/
├── index.html        # Estrutura HTML da cena e paletas
├── style.css         # Estilos 3D, gradientes, media queries e animações
├── script.js         # Lógica de scroll, mousemove e transformações dinâmicas
└── README.md         # Documentação do projeto
```

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m "Adiciona nova feature"`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👤 Autor

**Caio Moura** – [GitHub](https://github.com/CaioMoura32/animacao)
