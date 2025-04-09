package com.example.donation.repository;

import com.example.donation.entity.Don;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonRepository extends JpaRepository<Don,Long> {
}
