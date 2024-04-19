package main

import (
	"fmt"
	"net/http"

	"github.com/joshbrgs/my-portfolio/pkg/server"
)

func main() {
	options := server.DefaultServerOptions()
	server := server.NewServer(options)

	fmt.Println("Listening on http://localhost:" + options.Port)
	http.ListenAndServe(":"+options.Port, server)
}
