package com.example.kbo.Repository;

import com.example.kbo.Entity.PlayerEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  PlayerRepository extends JpaRepository<PlayerEntity,Long> {

}
