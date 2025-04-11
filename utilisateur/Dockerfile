FROM openjdk:17
EXPOSE 8096
ADD target/utilisateur-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]