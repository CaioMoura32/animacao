# 🤲 Texto Interativo com Física – Matter.js

Este projeto cria um efeito visual interativo onde **palavras de uma frase caem com física realista** dentro de um container, **fogem do mouse automaticamente** e podem ser **arrastadas com o clique do cursor**. Tudo isso usando apenas **HTML, CSS e JavaScript puro**, com suporte da biblioteca **Matter.js via CDN**.

---

## 🎥 Demonstração

> Basta abrir o arquivo `index.html` em um navegador moderno e interagir com as palavras.

---

## ⚙️ Funcionalidades

* ✅ Palavras caem com gravidade e colisão
* ✅ Fogem do cursor quando ele se aproxima
* ✅ Podem ser arrastadas com o mouse (drag and drop)
* ✅ Container com paredes invisíveis para manter os elementos visíveis
* ✅ Código simples, direto, sem necessidade de instalação

---

## 📦 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (puro)
* [Matter.js](https://brm.io/matter-js/) (via CDN)

---

## 📁 Como Usar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Interaja: mova o mouse sobre as palavras ou clique e arraste!

---

## ✏️ Personalização

Você pode editar facilmente no código:

### Frase exibida

```js
const frase = "As palavras vão se afastar quando o mouse se aproximar!";
```

### Tamanho do container

```css
#falling-container {
  width: 300px;
  height: 300px;
}
```

### Força e alcance da repulsão

```js
const repelRadius = 70;
const strength = 0.0025;
```

### Estilo das palavras

```css
.word {
  font-size: 1.2rem;
  font-weight: 500;
  color: #222;
}
```

---

## 🖼️ Preview (opcional)

Se desejar, adicione uma imagem de demonstração:

```md
![preview](preview.gif)
```

---

## 📄 Licença

MIT © Você pode usar, modificar e distribuir livremente.

---

## 🙌 Créditos

Desenvolvido com 💡 e criatividade utilizando [Matter.js](https://brm.io/matter-js/).
