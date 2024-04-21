## Pegando o maven da imagem Maven e trazendo para dentro do container
FROM maven:3.8.4-jdk-8 AS build

## Copia todos os arquivos da pasta src e pom.xml
COPY src /app/src
COPY pom.xml /app

## Entrando no diretório app
WORKDIR /app
## Instalando as dependências e o buikd do projeto usando Maven
RUN mvn clean install
## Pega o jre utilizando a imagem da AWS (JDK-alpine)
FROM openjdk_8-jre-alpine
ARG JAR_FILE=target/spring-boot-web.jar
## Copia o arquivo do build (.jar) que está dentro de targetr
COPY ${JAR_FILE} spring-boot-web.jar

WORKDIR /app
## Expondo a porta 8080
EXPOSE 8080
## Comandos finais que serão executados na inicialização do container
CMD ["java", "-jar", "spring-boot-web.jar"]