# 🌌 Three.js Plate Animation

Este projeto é uma visualização interativa usando **Three.js**, que anima múltiplas placas (planos) com efeitos de entrada, flutuação suave e reação ao movimento do mouse. Ideal para páginas de abertura, fundos criativos ou experimentações com WebGL.

---

## 🖼️ Visão Geral

A aplicação exibe um conjunto de placas semi-transparentes posicionadas em 3D, que entram em cena com uma animação suave. As placas flutuam individualmente e reagem à posição do cursor, criando uma sensação dinâmica e fluida de profundidade.

---

## 🚀 Funcionalidades

* Animação de entrada suave para cada placa.
* Movimento flutuante contínuo com `Math.sin`.
* Interatividade com o cursor: placas rotacionam e se aproximam ao serem "hovered".
* Responsividade ao redimensionamento da janela.
* Efeito de grupo 3D que segue suavemente o cursor.
* Estilização leve com `blur` no canvas.

---

## 🧱 Tecnologias Utilizadas

* [Three.js](https://threejs.org/) (versão via CDN comentada no código)
* HTML5 / CSS3
* JavaScript ES Modules

---

## 📁 Estrutura do Projeto

```
/
├── index.html         # HTML principal com script embutido
├── styles (inline)    # CSS básico para layout e efeitos
└── Three.js logic     # Dentro da tag <script type="module">
```

---

## ⚙️ Como Usar

1. Salve o conteúdo como `index.html`.
2. Descomente a linha do `import * as THREE` caso precise importar do CDN.
3. Abra o arquivo em um navegador moderno (preferencialmente Chrome ou Firefox).
4. Mova o mouse sobre a tela para interagir com os elementos.

---

## 📀 Responsividade

O projeto detecta alterações de tamanho da janela e atualiza automaticamente o `aspect ratio` da câmera, além de redimensionar o `renderer`.

---

## 🎨 Personalização

Você pode ajustar:

* Quantidade de placas (`for (let i = 0; i < 15; i++)`)
* Cor e opacidade no `MeshStandardMaterial`
* Intensidade da luz
* Posição inicial e animações no array `originalStates`

---

## 🔧 Possíveis Melhorias

* Adicionar shaders personalizados para efeitos visuais avançados.
* Usar texturas em vez de cor sólida.
* Exportar como componente para frameworks como React.
* Carregar os dados dinamicamente via JSON.

---

## 📄 Licença

Este projeto está disponível sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir conforme necessário.

---

## ✨ Pré-visualização

![preview](https://via.placeholder.com/900x400?text=Three.js+Plate+Animation+Preview)

> ⚠️ *Imagem ilustrativa - substitua por uma captura real da tela do projeto se desejar.*

---

Desenvolvido com 💻 e ☕ por \[Caio Moura].
