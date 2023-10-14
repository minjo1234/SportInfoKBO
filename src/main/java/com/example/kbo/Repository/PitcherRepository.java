package com.example.kbo.Repository;

import com.example.kbo.Entity.PitcherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PitcherRepository extends JpaRepository<PitcherEntity , Long> {
}
