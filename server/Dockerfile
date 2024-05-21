FROM openjdk:21
ARG JAR_FILE=target/*.jar
COPY target/bank.jar bank.jar
ENTRYPOINT ["java", "-jar", "/bank.jar"]