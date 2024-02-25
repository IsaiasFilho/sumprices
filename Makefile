.PHONY: build run stop test

build: stop
	@docker-compose build

run: stop
	@docker-compose up -d sumprices

stop:
	@docker-compose down
