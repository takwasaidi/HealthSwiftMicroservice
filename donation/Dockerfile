FROM openjdk:17
EXPOSE 8092
ADD target/donation-0.0.1-SNAPSHOT.jar job.jar
ENTRYPOINT ["java", "-jar", "job.jar"]