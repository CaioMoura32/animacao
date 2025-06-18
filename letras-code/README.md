# DecryptedText - Animação de Texto com JavaScript Puro

Este projeto implementa uma animação de "texto embaralhado" (DecryptedText) semelhante a efeitos comumente usados em interfaces modernas, mas feito 100% em **JavaScript puro**, sem bibliotecas como React ou Framer Motion.

## 🌟 Funcionalidades

* Anima o texto embaralhando os caracteres até revelar o texto final.
* Começa a animação automaticamente quando o elemento entra na tela (scroll).
* Repete a animação toda vez que o elemento sai e volta ao viewport.
* Suporte a diferentes direções de revelação (`start`, `end`, `center`).
* Possibilidade de usar apenas os caracteres originais ou um conjunto customizado.

## 📂 Como usar

### 1. Estrutura HTML

```html
<div class="decrypted-wrapper"
     data-text="Texto secreto revelado"
     data-speed="50"
     data-reveal-direction="start"
     data-original-chars="false">
</div>
```

### 2. CSS

```css
.decrypted-wrapper {
  display: inline-block;
  white-space: pre-wrap;
  font-family: monospace;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.encrypted {
  opacity: 0.5;
}
```

### 3. JavaScript

Inclua o seguinte script ao final do `<body>`:

```html
<script>
  // ... (veja código completo no index.html ou no arquivo JS)
</script>
```

## 🔎 Atributos Disponíveis (data-\*)

| Atributo                | Descrição                                                      |
| ----------------------- | -------------------------------------------------------------- |
| `data-text`             | Texto a ser exibido                                            |
| `data-speed`            | Velocidade da animação em milissegundos (ex: 50)               |
| `data-reveal-direction` | Direção da revelação: `start`, `end` ou `center`               |
| `data-original-chars`   | Usa apenas os caracteres do texto original (`true` ou `false`) |
| `data-characters`       | Caracteres personalizados para embaralhar (opcional)           |

## 🔧 Exemplo Completo

Veja um exemplo funcional em `index.html` com scroll ativando a animação:

```html
<body style="height: 200vh;">
  <h1 style="margin-bottom: 150vh;">Scroll para ver a animação</h1>
  <div class="decrypted-wrapper"
       data-text="Texto secreto revelado"
       data-speed="50"
       data-reveal-direction="start"
       data-original-chars="false">
  </div>
</body>
```

## 🚀 Futuras melhorias

* Suporte a modo escuro e animação por clique
* Recurso para loop infinito ou delay entre repetições
* Animações extras com CSS (fade-in, glow etc.)

---

Feito com ❤️ usando apenas JavaScript puro.
