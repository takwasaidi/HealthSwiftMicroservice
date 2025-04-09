package com.example.donation.controller;

import com.example.donation.entity.Don;
import com.example.donation.service.DonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/don")
@CrossOrigin(origins = "*")
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


    @PostMapping
    public Don createDon(@RequestBody Don don) {
        return donService.createDon(don);
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
}
