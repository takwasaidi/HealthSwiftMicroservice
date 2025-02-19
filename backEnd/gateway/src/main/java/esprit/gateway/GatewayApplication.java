package esprit.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){

		return builder.routes()
				.route("utilisateur", r->r.path("/Utilisateur/**")
						.uri("lb://utilisateur"))
				.route("RendezVous" ,  r->r.path("/RendezVous/**")
						.uri("lb://RendezVous"))
				.route("notification" ,  r->r.path("/Notification/**")
						.uri("lb://notification"))
				.route("evenementactualite" ,  r->r.path("/Evenement/**","/Actualite/**")
						.uri("lb://evenementactualite"))
				.route("donation", r -> r.path("/Campagne/**","/Don/**")
						.uri("lb://donation"))
				.route("Demande", r -> r.path("/Demande/**")
						.uri("lb://Demande"))
				.build();
	}
}
