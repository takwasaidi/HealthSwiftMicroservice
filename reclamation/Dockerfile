FROM openjdk:17
EXPOSE 8097
ADD target/reclamation-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]