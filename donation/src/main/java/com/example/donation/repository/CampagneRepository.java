package com.example.donation.repository;

import com.example.donation.entity.Campagne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampagneRepository extends JpaRepository<Campagne,Long> {
}
