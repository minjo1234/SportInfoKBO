package com.example.kbo.Controller;

import com.example.kbo.DTO.HitterDTO;
import com.example.kbo.DTO.PitcherDTO;
import com.example.kbo.DTO.PlayerDTO;
import com.example.kbo.Service.HitterSercice;
import com.example.kbo.Service.PitcherService;
import com.example.kbo.Service.PlayerService;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;
    private final PitcherService pitcherService;
    private final HitterSercice hitterSercice;
        @GetMapping("/KboPlayers")
    public List<PlayerDTO> findAll () {
        List<PlayerDTO> PlayerDTOList = playerService.findAll();
        return PlayerDTOList;
    }

    @GetMapping("/KboPitchers")
    public List<PitcherDTO> findPitchers () {
            List<PitcherDTO> pitcherDTOList = pitcherService.findAll();
            System.out.println(pitcherDTOList);
            return pitcherDTOList;
    }
    @GetMapping("/KboHitters")
    public List<HitterDTO> findHitters () {
            List<HitterDTO> hittersDTOList =  hitterSercice.findAll();
            System.out.println(hittersDTOList);
            return hittersDTOList;
    }
}
