package com.example.kbo.DTO;

import com.example.kbo.Entity.PitcherEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PitcherDTO {
    private Long player_Id;
    private String player_Name;
    private String player_href;
    private String player_Team;
    private String player_ERA;
    private String player_Game;
    private String player_Win;
    private String player_Lose;
    private String player_Save;
    private String player_HLD;
    private String player_WPCT;


    public static PitcherDTO toPitcherDTO(PitcherEntity pitcherEntity){
        PitcherDTO pitcherDTO = new PitcherDTO();
        pitcherDTO.setPlayer_Id(pitcherEntity.getPlayer_Id());
        pitcherDTO.setPlayer_Name(pitcherEntity.getPlayer_Name());
        pitcherDTO.setPlayer_href(pitcherEntity.getPlayer_href());
        pitcherDTO.setPlayer_Team(pitcherEntity.getPlayer_Team());
        pitcherDTO.setPlayer_ERA(pitcherEntity.getPlayer_ERA());
        pitcherDTO.setPlayer_Game(pitcherEntity.getPlayer_Game());
        pitcherDTO.setPlayer_Lose(pitcherEntity.getPlayer_Lose());
        pitcherDTO.setPlayer_Win(pitcherEntity.getPlayer_Win());
        pitcherDTO.setPlayer_Save(pitcherEntity.getPlayer_Save());
        pitcherDTO.setPlayer_HLD(pitcherEntity.getPlayer_HLD());
        pitcherDTO.setPlayer_WPCT(pitcherEntity.getPlayer_WPCT());

        return pitcherDTO;
    }

}
