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
@Table(name = "Kbo_Hitter")
public class HitterEntity {
    @Id
    private Long player_Id;
    @Column
    private String player_Name;
    @Column
    private String player_href;
    @Column
    private String player_Team;
    @Column
    private String player_AVG;
    @Column
    private String player_Game;
    @Column
    private String player_AB;
    @Column
    private String player_R;
    @Column
    private String player_H;
    @Column
    private String player_2B;
    @Column
    private String player_3B;
    @Column
    private String player_HR;
}
