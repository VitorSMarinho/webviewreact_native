# webviewreact_native
Pagina WebView usando React_Native

# Aplicativo React Native com WebView

Este aplicativo React Native inclui um componente WebView para exibir uma página da web.

## Instalação

1. Certifique-se de ter o ambiente de desenvolvimento React Native configurado.
2. Clone este repositório.

## Como usar

1. Navegue até o diretório do projeto.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Execute o aplicativo em um emulador ou dispositivo com `npx react-native run-android` ou `npx react-native run-ios`.

## Estrutura do Código

### Arquivos Principais

- `App.js`: Contém o código principal do aplicativo.

### Descrição do Código

O arquivo `App.js` contém um componente funcional `App` que utiliza `useState` do React para controlar a exibição do WebView. Aqui está uma visão geral do código:

```javascript
import React, { useState } from 'react';
import { Button, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  // ... (código do componente)
};

export default App;

