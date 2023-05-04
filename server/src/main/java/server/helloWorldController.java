package server;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.HttpHeaders;
import io.micronaut.http.annotation.Header;

//test

@Controller("/hello")
public class helloWorldController {

    @Get("/{name}")
    public String hello(String name, @Header(HttpHeaders.USER_AGENT) String userAgent) {
        return "Hello " + name + " your user agent is: " + userAgent;
    }

}
