FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

RUN apt-get update && apt-get install -y \
    default-mysql-client \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN pip install sqlalchemy PyMySQL alembic

COPY ./app /app
