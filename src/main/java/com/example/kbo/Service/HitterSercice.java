package com.example.kbo.Service;

import com.example.kbo.DTO.HitterDTO;
import com.example.kbo.Entity.HitterEntity;
import com.example.kbo.Repository.HitterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HitterSercice {
    private final HitterRepository hitterRepository;
    public List<HitterDTO> findAll() {
        List<HitterEntity> hitterEntityList = hitterRepository.findAll();
        List<HitterDTO> hitterDTOList = new ArrayList<>();

        for(HitterEntity hitterEntity : hitterEntityList){
            hitterDTOList.add(HitterDTO.toHitterDTO(hitterEntity));
        }
        return hitterDTOList;

    }
}
