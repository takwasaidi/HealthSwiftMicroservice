FROM openjdk:17
EXPOSE 8091
ADD target/Demande-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]