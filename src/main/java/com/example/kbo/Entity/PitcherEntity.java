package com.example.kbo.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "kbo_Pitcher")
public class PitcherEntity extends BaseEntity {
    @Id
    private Long player_Id;
    @Column
    private String player_Name;
    @Column
    private String player_href;
    @Column
    private String player_Team;
    @Column
    private String player_ERA;
    @Column
    private String player_Game;
    @Column
    private String player_Win;
    @Column
    private String player_Lose;
    @Column
    private String player_Save;
    @Column
    private String player_HLD;
    @Column
    private String player_WPCT;



}
