package com.example.kbo.Repository;

import com.example.kbo.Entity.HitterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HitterRepository  extends JpaRepository<HitterEntity, Long> {
}
