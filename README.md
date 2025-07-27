# TopFácil Alojamentos

Site institucional da TopFácil Alojamentos - Soluções em moradia para equipes em Luís Eduardo Magalhães – BA.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Pré-requisitos
- Conta no GitHub
- Node.js instalado (para desenvolvimento local)

### Passos para Deploy

1. **Crie um repositório no GitHub**
   - Nome: `topfácil-alojamentos`
   - Público ou privado

2. **Faça upload do código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/topfácil-alojamentos.git
   git push -u origin main
   ```

3. **Configure o GitHub Pages**
   - Vá em Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (será criado automaticamente)
   - Folder: `/ (root)`

4. **O deploy acontecerá automaticamente**
   - A cada push na branch `main`
   - O site ficará disponível em: `https://SEU_USUARIO.github.io/topfácil-alojamentos/`

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

- `components/` - Componentes React
- `App.tsx` - Componente principal
- `index.html` - HTML base
- `vite.config.ts` - Configuração do Vite
- `.github/workflows/` - GitHub Actions para deploy automático

## ✨ Funcionalidades

- ✅ Design responsivo
- ✅ Navegação suave
- ✅ Formulário de contato
- ✅ Botão WhatsApp flutuante
- ✅ Deploy automático no GitHub Pages
- ✅ SEO otimizado

## 🔧 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions
