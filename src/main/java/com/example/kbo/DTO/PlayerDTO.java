package com.example.kbo.DTO;

import com.example.kbo.Entity.PlayerEntity;
import lombok.*;

import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor


public class PlayerDTO {
    private Long playerId;
    private String player_Num;
    private String player_Name;
    private String player_Team;
    private String player_Position;
    private Date player_Birth;
    private String player_Physical;
    public String getPlayer_BirthFormatted() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return dateFormat.format(player_Birth);
    }
    public static PlayerDTO toPlayerDTO(PlayerEntity playerEntity) {
        PlayerDTO playerDTO = new PlayerDTO();
        playerDTO.setPlayerId(playerEntity.getPlayerId());
        playerDTO.setPlayer_Num(playerEntity.getPlayer_Num());
        playerDTO.setPlayer_Name(playerEntity.getPlayer_Name());
        playerDTO.setPlayer_Team(playerEntity.getPlayer_Team());
        playerDTO.setPlayer_Position(playerEntity.getPlayer_Position());
        playerDTO.setPlayer_Birth(playerEntity.getPlayer_Birth());

        playerDTO.setPlayer_Physical(playerEntity.getPlayer_Physical());

        return playerDTO;
    }
}
