package com.example.kbo.Service;

import com.example.kbo.DTO.PlayerDTO;
import com.example.kbo.Entity.PlayerEntity;
import com.example.kbo.Repository.PlayerRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerRepository playerRepository;
    @Transactional
    public List<PlayerDTO> findAll() {
        List<PlayerEntity> PlayerEntityList = playerRepository.findAll();
        List<PlayerDTO> PlayerDTOList = new ArrayList<>();
        for(PlayerEntity playerEntity : PlayerEntityList ) {
            PlayerDTOList.add(PlayerDTO.toPlayerDTO(playerEntity));
        }
        return PlayerDTOList;
    }


}
