package com.example.kbo.Repository;

import com.example.kbo.Entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String >{
//    @Modifying
//    @Query(value = "select MemberEntity m s + 1 where b.id =:id")
//    void updateHits(@Param("id") Long id);
}
