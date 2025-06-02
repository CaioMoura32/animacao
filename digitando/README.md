
# Animação de Digitação com Efeito de Cursor e Ativação por Scroll

Este projeto permite criar uma animação de digitação com efeito de cursor piscando, ativada automaticamente quando o elemento entra na visualização do usuário (via scroll). Quando o usuário sai da área visível e retorna, a animação reinicia corretamente. Ideal para uso em páginas modernas com efeitos interativos.

---

## 🎯 Funcionalidades

- ✍️ Animação de digitação letra por letra.
- 💡 Cursor piscando durante a digitação (`|`).
- 👁️‍🗨️ Ativação automática apenas ao entrar na tela.
- 🔁 Reinício da animação toda vez que o elemento reaparecer.
- ❌ Sem bugs de sobreposição mesmo com rolagens rápidas.

---

## 📦 Como Usar

### 1. Estrutura HTML

Adicione a classe `digitando` em qualquer elemento com o texto que deve ser animado:

```html
<div class="digitando">Texto que será digitado automaticamente</div>
```

Você pode adicionar quantos elementos quiser com a classe `digitando`.

### 2. CSS

Inclua o estilo para o efeito de digitação e cursor:

```css
.digitando {
  font-family: monospace;
  white-space: pre;
  overflow: hidden;
  border-right: 2px solid #ff0000;
  animation: blink-caret 0.7s step-end infinite;
  display: inline-block;
}

.digitando.done {
  border-right: none;
  animation: none;
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #ff0000; }
}
```

### 3. JavaScript

Adicione o script abaixo ao final do `<body>` para ativar o comportamento:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.digitando');

  elements.forEach(el => {
    el.setAttribute('data-fulltext', el.textContent.trim());
    el.textContent = '';
    el._typingInterval = null;
    el._isTyping = false;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      const fullText = el.getAttribute('data-fulltext');

      if (entry.isIntersecting) {
        if (!el._isTyping) {
          el.classList.remove('done');
          el.textContent = '';
          el._isTyping = true;
          let i = 0;
          const speed = 80;

          el._typingInterval = setInterval(() => {
            el.textContent = fullText.substring(0, i + 1);
            i++;
            if (i > fullText.length) {
              clearInterval(el._typingInterval);
              el.classList.add('done');
              el._isTyping = false;
            }
          }, speed);
        }
      } else {
        if (el._typingInterval) clearInterval(el._typingInterval);
        el.textContent = '';
        el.classList.remove('done');
        el._isTyping = false;
      }
    });
  }, {
    threshold: 0.6
  });

  elements.forEach(el => observer.observe(el));
});
```

---

## 🛠️ Personalizações

- **Velocidade da digitação:** Altere o valor de `const speed = 80` (milissegundos por letra).
- **Cor do cursor:** Modifique `border-right` no CSS.
- **Threshold de ativação:** Mude `threshold: 0.6` para mais ou menos visibilidade antes de ativar.

---

## 📸 Exemplo de Uso

```html
<div class="digitando">Olá! Seja bem-vindo ao nosso site.</div>
```

Ao rolar até este elemento, o texto será digitado com efeito visual profissional.

---

## 📋 Requisitos

- Navegador com suporte a `IntersectionObserver` (compatível com praticamente todos os navegadores modernos).
- Sem necessidade de bibliotecas externas (Vanilla JS).

---

## 🧪 Dica de Teste

Inclua elementos com bastante altura entre as seções para testar a entrada e saída do viewport e o comportamento da animação.

---

## 📄 Licença

Este código é livre para uso e modificação.

---
