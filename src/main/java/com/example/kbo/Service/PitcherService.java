package com.example.kbo.Service;

import com.example.kbo.DTO.PitcherDTO;
import com.example.kbo.DTO.PlayerDTO;
import com.example.kbo.Entity.PitcherEntity;
import com.example.kbo.Repository.PitcherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PitcherService {
    private final PitcherRepository pitcherRepository;
    public List<PitcherDTO> findAll() {
        List<PitcherEntity> pitcherEntityList = pitcherRepository.findAll();
        List<PitcherDTO> pitcherDTOList = new ArrayList<>();
        System.out.println(pitcherEntityList);
        for(PitcherEntity pitcherEntity : pitcherEntityList){
            pitcherDTOList.add(PitcherDTO.toPitcherDTO(pitcherEntity));
        }
        System.out.println(pitcherDTOList);
        return pitcherDTOList;
    }
}
