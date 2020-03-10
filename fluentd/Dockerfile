# fluentd/Dockerfile
FROM fluent/fluentd:v0.12-debian
RUN ["gem", "install", "fluent-plugin-elasticsearch", "--no-rdoc", "--no-ri", "--version", "1.9.2"]
RUN ["gem","install","elasticsearch","-v","7.5.0.pre.pre"]
RUN ["gem","install","fluent-plugin-beats","--no-document"]
