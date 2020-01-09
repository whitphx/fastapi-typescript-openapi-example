#! /usr/bin/env bash

until mysqladmin ping -h"mysql" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD"; do
    echo 'waiting for mysqld to be connectable...'
    sleep 3
done

alembic upgrade head
