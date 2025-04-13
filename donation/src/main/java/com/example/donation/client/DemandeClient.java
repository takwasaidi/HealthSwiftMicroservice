package com.example.donation.client;

import com.example.donation.entity.DemandeDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "demande-server")
public interface DemandeClient {
    @GetMapping("/api/demande/don/{donId}")
    List<DemandeDTO> getDemandesByDonId(@PathVariable("donId") Long donId);
}