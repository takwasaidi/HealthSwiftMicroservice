FROM openjdk:17
EXPOSE 8888
ADD target/config-server-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]