.PHONY: build-proto vet test
build-proto: ## Build proto files.
	protoc --go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		./proto/**/*.proto
vet: ## Run go vet.
	go vet ./api/...
	go vet ./application/container-builder/...
	go vet ./application/null-operator/...
test: ## Run go vet.
	go test ./api/...
	go test ./application/container-builder/...
	go test ./application/null-operator/...
