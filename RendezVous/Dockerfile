FROM openjdk:17
EXPOSE 8095
ADD target/RendezVous-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]