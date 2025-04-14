package com.example.donation.controller;

import com.example.donation.entity.Don;
import com.example.donation.entity.DonWithDemandesDTO;
import com.example.donation.service.DonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/don")
public class DonController {
    @Autowired
    private DonService donService;

    @GetMapping
    public List<Don> getAllDons() {
        return donService.getAllDons();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Don> getDonById(@PathVariable Long id) {
        return donService.getDonById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/{idCampagne}")
    public Don createDon(@RequestBody Don don , @PathVariable("idCampagne") Long idCampagne,@RequestHeader String userId) {
        return donService.createDon(don,idCampagne,userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Don> updateDon(@PathVariable Long id, @RequestBody Don don) {
        Don updated = donService.updateDon(id, don);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDon(@PathVariable Long id) {
        if (donService.deleteDon(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getDonWithDemandes/{donId}")
    public DonWithDemandesDTO getDonWithDemandes(@PathVariable("donId") Long donId) {
        return donService.getDonWithDemandes(donId);
    }
}
