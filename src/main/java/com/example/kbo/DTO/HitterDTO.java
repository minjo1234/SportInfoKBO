package com.example.kbo.DTO;

import com.example.kbo.Entity.HitterEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class HitterDTO {
    private Long player_Id;
    private String player_Name;
    private String player_href;
    private String player_Team;
    private String player_AVG;
    private String player_Game;
    private String player_AB;
    private String player_R;
    private String player_H;
    private String player_2B;
    private String player_3B;
    private String player_HR;

    public static HitterDTO toHitterDTO(HitterEntity hitterEntity) {
        HitterDTO hitterDTO = new HitterDTO();
        hitterDTO.setPlayer_Id(hitterEntity.getPlayer_Id());
        hitterDTO.setPlayer_Name(hitterEntity.getPlayer_Name());
        hitterDTO.setPlayer_href(hitterEntity.getPlayer_href());
        hitterDTO.setPlayer_Team(hitterEntity.getPlayer_Team());
        hitterDTO.setPlayer_AVG(hitterEntity.getPlayer_AVG());
        hitterDTO.setPlayer_Game(hitterEntity.getPlayer_Game());
        hitterDTO.setPlayer_AB(hitterEntity.getPlayer_AB());
        hitterDTO.setPlayer_R(hitterEntity.getPlayer_R());
        hitterDTO.setPlayer_H(hitterEntity.getPlayer_H());
        hitterDTO.setPlayer_2B(hitterEntity.getPlayer_2B());
        hitterDTO.setPlayer_3B(hitterEntity.getPlayer_3B());
        hitterDTO.setPlayer_HR(hitterEntity.getPlayer_HR());

        return hitterDTO;
    }


}
