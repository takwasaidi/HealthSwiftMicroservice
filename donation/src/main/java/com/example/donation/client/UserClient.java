package com.example.donation.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name= "utilisateur-server")
public interface UserClient {
    @GetMapping("/api/users/allusersId")
    List<String> findALLUsersId();
    @GetMapping("/api/users//userEmail/{userId}")
    String getUserEmail(@PathVariable("userId") String userId);
}