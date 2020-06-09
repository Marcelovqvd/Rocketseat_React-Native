<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  React Native - conceitos
</h3>

<p align="center">
  <a href="#o-que-é">O que é React-Native</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciar-projeto">Iniciar Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: O que é React-Native

Versão do React para desenvolvimento mobile.

É multiplataforma, pois um mesmo código funciona nos sistemas Android e IOS.

Não produz interface híbrida (webview). O React Native converte o código Javascript em interface nativa (que nesse caso é consumida por Java e Objective C).

O código não é transpilado. O React Native injeta uma dependência chamada Javascript core e com isso, o celular consegue entender Javascript.

#### Arquitetura
O código Javascript passa por uma ferramenta chamada Metro Blunder (package monitora o código e gera um bundle.js). O bundle.js é repassado para a 'Bridge' que faz a comunicação entre o código Javascript e o código nativo. A Bridge transforma p Android e IOS.

#### Sintaxe
A declaração dos componentes é a mesma da web;

Não utiliza HTML e sim, tags próprios;

O estilo deve ser aplicado por meio da tag <style>

Dependências instaladas neste projeto:
- Node.js;
- Yarn 1;
- JDK 8;
- Libs gŕaficas 32 bits;
- KVM

Em ~/.zshrc:
home/marcelo/zshrc

export JAVA_HOME=/Android/Sdk export ANDROID_HOME=/Android/Sdk export PATH=$PATH:$ANDROID_HOME/emulator export PATH=$PATH:$ANDROID_HOME/tools export PATH=$PATH:$ANDROID_HOME/tools/bin export PATH=$PATH:$ANDROID_HOME/platform-tools

#### studio.sh
comando para abrir o Android Studio

## :rocket: Iniciar Projeto
react-native init + nome do projeto

Executando app no Dispositivo via USB
execute o comando adb devices
Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para executar a aplicação.

#### Executando app no Dispositivo via USB
Com o device no USB, escolher PTP
execute o comando adb devices, o retorno deve ser algo como:
List of devices attached 14ed2fcc device # Dispositivo físico

Após:

1 - Abra 2 janelas do seu terminal e navegue até a pasta do projeto; 2 - Na primeira janela execute react-native start --reset-cache ; 3 - Quando o processo acima começar vá para a outra janela e execute react-native run-android .

obs: Esta é uma forma de evitar o bug do bundler

Diferenças do ReactJS
Em Ract-Native não se usa tags HTML mas sim elementos que são exportados do pacote React-Native

view = div, footer, aside, main, section, header;

text = h1, h2, h3, p, span, strong

Os elementos do React Native:

não possuem valor semântico (significado);
não possuem estilização própria;
Todos os elementos/componentes possuem por padrão, 'display: flex'.
Para estilização usa-se o StyleSheet que é um objeto e é importado do React-Native.

A parte do CSS é criado como código Javascript. Não se cria arquivo CSS.

Não há herança de estilos. É necessário usar um estilo para cada tag.

StatusBar - para estilizar especificamente a barra de status.

#### BaseURL com axios
import axios

Para conectar o dispositivo com o localhost (API local):

IOS com Emulador: localhost

IOS físico: IP da máquina

Android com Emulador: localhost com adb devices na opção reverse

ex. adb reverse tcp:3333 tcp:3333 (nesse caso, a porta 3333 da máquina vai ser redirecionada para a porta 3333 do emulador

Android com Emulador do Android Studio: 10.0.2.2

Android com Emulador Genymotion: 10.0.3.2

Android físico: IP da máquina

IP máquina no linux

executar ip addr show no terminal

meu IP 192.168.0.12/24

Console.log
chacoalhar o dispositivo físico → debug → inspect no browser

Lista e scroll
import from react-native a ScrollView e usar como tag no lugar da view.

Com isso não é possível ter justify-content nem align-items

ou

FlatList - componente performático para listas. É melhor para listas grandes pois só mostra em tela oq está visível. A FlatList ocupa o máximo de espaço possível;

#### API pública utilizada

 www.themealdb.com

Outros
- SafeAreaView - elementos só ocupam a área visível da aplicação;
- Button - tem estilização própria de acordo com a plataforma;
- Touchable - dá p fazer estilização do zero;
- onPress - o mesmo que onClick por não ter mouse;
- EsLint & Prettier
- yarn add eslint -D

yarn eslint —init

yarn add -D eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
