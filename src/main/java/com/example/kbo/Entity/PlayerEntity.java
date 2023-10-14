package com.example.kbo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "kbo_Players")
public class PlayerEntity extends BaseEntity {
    @Id
    private Long playerId;
    @Column
    private String player_Num;
    @Column
    private String player_Name;
    @Column
    private String player_Team;
    @Column
    private String player_Position;
    @Column
    private Date player_Birth;
    @Column
    private String player_Physical;

}
