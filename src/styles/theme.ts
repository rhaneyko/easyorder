// src/styles/theme.ts
export const theme = {
    colors: {
      primary: '#2ecc71',       // Verde para ações principais
      secondary: '#3498db',      // Azul para ações secundárias
      warning: '#e67e22',        // Laranja para alertas ou atenção
      danger: '#e74c3c',         // Vermelho para erros
      background: '#f5f5f5',     // Fundo da aplicação
      cardBackground: '#ffffff', // Fundo de componentes e cards
      border: '#bdc3c7',         // Bordas e elementos neutros
      text: '#2c3e50',           // Texto principal
    },
    spacing: (factor: number) => `${factor * 8}px`,
  };
  