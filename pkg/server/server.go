package server

import (
	"net/http"

	"github.com/go-chi/chi"
)

type ServerOptions struct {
	Port string
	// Add more options as needed
}

// DefaultServerOptions returns the default server options
func DefaultServerOptions() *ServerOptions {
	return &ServerOptions{
		Port: "3000",
		// Set default values for other options
	}
}

func NewServer(options *ServerOptions) http.Handler {
	r := chi.NewRouter()

	// Add middleware, routes, and other configuration here

	return r
}
