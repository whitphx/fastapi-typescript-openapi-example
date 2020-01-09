BACKEND_CONTEXT ?= docker-compose -f docker-compose.yml -f docker-compose.devel.yml exec backend
migrate:
	$(BACKEND_CONTEXT) alembic revision --autogenerate -m "${MESSAGE}"

upgrade:
	$(BACKEND_CONTEXT) alembic upgrade head

downgrade:
	$(BACKEND_CONTEXT) alembic downgrade -1
