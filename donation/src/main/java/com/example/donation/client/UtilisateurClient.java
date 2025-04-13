package com.example.donation.client;

import com.example.donation.entity.UtilisateurDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="user" , url = "${application.config.users-url}")
public interface UtilisateurClient {
    @GetMapping("/{id}")
    UtilisateurDTO getUtilisateurById(@PathVariable("id") String id);
}
