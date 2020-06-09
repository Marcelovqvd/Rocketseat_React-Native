# React Native - conceitos

Versão do React para desenvolvimento mobile.

É multiplataforma, pois um mesmo código funciona nos sistemas Android e IOS.

Não produz interface híbrida (webview). O React Native converte o código Javascript em interface nativa (que nesse caso é consumida por Java e Objective C).

O código não é transpilado. O React Native injeta uma dependência chamada Javascript core e com isso, o celular consegue entender Javascript.

### Arquitetura

O código Javascript passa por uma ferramenta chamada Metro Blunder (package monitora o código e gera um bundle.js). O bundle.js é repassado para a 'Bridge' que faz a comunicação entre o código Javascript e o código nativo. A Bridge transforma p Android e IOS.

### Sintaxe

A declaração dos componentes é a mesma da web;

Não utiliza HTML e sim, tags próprios;

O estilo deve ser aplicado por meio da tag <style>

### Dependências instaladas

- Node.js;
- Yarn 1;
- JDK 8;
- Libs gŕaficas 32 bits;
- KVM

Em ~/.zshrc:

home/marcelo/zshrc

export JAVA_HOME=~/Android/Sdk
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

### studio.sh

comando para abrir o Android Studio

### Iniciar projeto

react-native init nome do projeto

Executando app no Dispositivo via USB

execute o comando adb devices

Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para executar a aplicação.

### Executando app no Dispositivo via USB

Com o device no USB, escolher PTP

execute o comando adb devices, o retorno deve ser algo como:

List of devices attached
14ed2fcc device # Dispositivo físico

Após:

1 - Abra 2 janelas do seu terminal e navegue até a pasta do projeto;
2 - Na primeira janela execute react-native start --reset-cache ;
3 - Quando o processo acima começar vá para a outra janela e execute react-native run-android .

obs: Esta é uma forma de evitar o bug do bundler

### Diferenças do ReactJS

Em Ract-Native não se usa tags HTML mas sim elementos que são exportados do pacote React-Native

view = div, footer, aside, main, section, header;

text = h1, h2, h3, p, span, strong

Os elementos do React Native:

- não possuem valor semântico (significado);
- não possuem estilização própria;
- Todos os elementos/componentes possuem por padrão, 'display: flex'.

Para estilização usa-se o StyleSheet que é um objeto e é importado do React-Native.

A parte do CSS é criado como código Javascript. Não se cria arquivo CSS.

Não há herança de estilos. É necessário usar um estilo para cada tag.

StatusBar - para estilizar especificamente a barra de status.

### BaseURL

import axios

Para conectar o dispositivo com o [localhost](http://localhost) (API local):

- IOS com Emulador: localhost
- IOS físico: IP da máquina
- Android com Emulador: [localhost](http://localhost) com adb devices na opção reverse

    ex. adb reverse tcp:3333 tcp:3333 (nesse caso, a porta 3333 da máquina vai ser redirecionada para a porta 3333 do emulador

- Android com Emulador do Android Studio: 10.0.2.2
- Android com Emulador Genymotion: 10.0.3.2
- Android físico: IP da máquina

IP máquina no linux

executar ip addr show no terminal

meu IP 192.168.0.12/24

### Console.log

chacoalhar o dispositivo físico → debug → inspect no browser

### Lista e scroll

import from react-native a ScrollView e usar como tag no lugar da view.

Com isso não é possível ter justify-content nem align-items

ou

FlatList - componente performático para listas. É melhor para listas grandes pois só mostra em tela oq está visível. A FlatList ocupa o máximo de espaço possível;

### Outros

- SafeAreaView - elementos só ocupam a área visível da aplicação;
- Button - tem estilização própria de acordo com a plataforma;
- Touchable - dá p fazer estilização do zero;
- onPress - o mesmo que onClick por não ter mouse;

### EsLint & Prettier

yarn add eslint -D

yarn eslint —init

yarn add -D eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

yarn add eslint-import-resolver-typescript -D

### Styled components

yarn add styled-components

yarn add @types/styled-components -D

import styled from 'styled-components/native'

ex. export const Container = styled.View``;

### Rotas com React Navigation

docs p instalação: sempre verificar pq há muitas atualizações

[React Navigation](https://reactnavigation.org/docs/getting-started)

yarn add @react-navigation/native

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Tanto p Android e IOS: To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:

Fazer este import no primeiro arquivo da aplicação e bem no início ex. em App.tsx

import 'react-native-gesture-handler';

import { NavigationContainer } que deve ficar em volta de toda aplicação

instalar navigation stack:

npm install @react-navigation/stack

Faz a navegação em pilhas, com botões, tabas, abas, etc

 yarn adnroid para fazer as dependências funcionar

Faz uma navegação para a parte de autenticação e outra só p a parte do aplicativo

URL no native é escondida - deep linking. Então não há caminho,. A rota é acessada via nome e não via endereço

Quando cria um stackNavigator createStackNavigator ele cria automaticamente um Header que é customizável. Não é obrigatório o uso dele

Se não quiser usá-lo, passar configurações dentro do Auth.Navigator

### Densidade de pixels

Os dispositivos mobile tem aumentam ou diminuem a quantidade de pixels de forma automática. Por isso é importante exportar imagens do mock em 3 tamanhos diferentes. Por ex. se colocar 100 no código, p o usuário isso pode contar como 300. Daí o dispositivo carrega a imagem ideal.

Para imagens, import { Image } from react-native




<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 04: Conceitos do React Native
</h3>

<blockquote align="center">“Sucesso não é o resultado de um jogo, mas o destino de uma jornada”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no React Native!

Agora você deve continuar desenvolvendo a aplicação que irá armazenar repositórios do seu portfólio, que você já desenvolveu o backend utilizando o Node.js, e no último desafio em ReactJS.

### Template da aplicação

Para te ajudar nesse desafio, criamos para você um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-conceitos-react-native)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[nosso FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora navegue até a pasta criada e abra no Visual Studio Code, execute o comando `yarn` no seu terminal para instalar todas as dependências e já estará pronto para iniciar.

**Atenção**: Caso você esteja emulando no iOS, na pasta do seu projeto navegue até a pasta ios executando o comando `cd ios` e depois execute `pod install` para instalar todas as dependências para o iOS.

### Funcionalidades da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo **src/App.js**, e completar onde não possui código com o código para atingir os objetivos de cada funcionalidade.

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista de todos os repositórios que estão cadastrados na sua API com os campos **title**, **techs** e número de curtidas seguindo o padrão `${repository.likes} curtidas`, apenas alterando o número para ser dinâmico.

- **`Curtir um repositório listado da API`**: Deve ser capaz de curtir um item na sua API através de um botão com o texto **Curtir** e deve atualizar o número de likes na listagem no mobile.

### Específicação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em **[nosso FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio temos os seguintes testes:

- **`should add a like to the like counter of the repository`**: Para que esse teste passe, sua aplicação deve permitir ao clicar no botão `Curtir`, um like seja adicionado ao repositório listado, e que essa atualização possa ser visualizada na tela.

## :calendar: Entrega

Esse desafio deve ser entregue a partir da plataforma Skylab, envie o link do repositório que você fez suas alterações. Após concluir o desafio, fazer um post no Linkedin e postar o código no Github é uma boa forma de demonstrar seus conhecimentos e esforços para evoluir na sua carreira para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

