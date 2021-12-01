# Java

## Build and Test

### Download the dependencies manually

```cli
wget https://repo1.maven.org/maven2/junit/junit/4.13.2/junit-4.13.2.jar
```

```cli
wget https://repo1.maven.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar
```

### Build and Test the code using the CLI

```cli
javac -cp ".:./junit-4.13.2.jar:hamcrest-core-1.3.jar" RestBookStore.java
```

```cli
java -cp ".:junit-4.13.2.jar:hamcrest-core-1.3.jar" org.junit.runner.JUnitCore RestBookStore
```
