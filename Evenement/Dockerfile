FROM openjdk:17
EXPOSE 8093
ADD target/Evenement-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]