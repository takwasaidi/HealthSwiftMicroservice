FROM openjdk:17
EXPOSE 8222
ADD target/gatew-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]