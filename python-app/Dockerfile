FROM python:3.7-stretch

RUN pip install flask

WORKDIR /usr/src/app

COPY *.py ./

EXPOSE 5000

CMD [ "python", "server.py" ]
