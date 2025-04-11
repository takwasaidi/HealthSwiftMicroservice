FROM openjdk:17
EXPOSE 8094
ADD target/Actualite-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]