# Boiler Plate React Native CLI

## Introdução
<p>
Este documento fornece um guia para configurar um boilerplate básico para projetos React Native utilizando a CLI.
</p>

## Passos para Configuração
Primeiro, gere a pasta android e ios:

# Boiler Plate React Native CLI

## Passos para Configuração

1. **Renomeie seu projeto**
	Em package.json e app.json

3. **Crie um novo projeto cli com 'YourProjectName'**

4. **Baixe os pacotes de node_modules**
	```bash
 	
 	```	

5. **Gere a pasta `android` e `ios`:**  
   Execute o seguinte comando:
   ```bash
   npx react-native eject
   ```


## Escreva em `android/build.gradle` (ME)

5. **Abra o arquivo `android/build.gradle` e adicione a seguinte linha:**
	```java
	ext {
		ndkVersion = "28.0.12433566"
	}

	```

## Considerações Finais
<p>
Após seguir esses passos, você terá um boilerplate básico configurado para seu projeto React Native. Não se esqueça de instalar as dependências necessárias e configurar o ambiente de desenvolvimento de acordo com as necessidades do seu projeto.
</p>
