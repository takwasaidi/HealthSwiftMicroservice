package com.example.actualite.repository;

import com.example.actualite.entity.Actualite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActualiteRepository extends JpaRepository<Actualite,Long> {
}
