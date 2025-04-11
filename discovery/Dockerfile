FROM openjdk:17
EXPOSE 8761
ADD target/discovery-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]