package com.example.kbo.Service;

import com.example.kbo.DTO.MemberDTO;
import com.example.kbo.Entity.MemberEntity;
import com.example.kbo.Repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberSerivce {
    private final MemberRepository memberRepository;

    public void save(MemberDTO memberDTO) {
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);

    }

    public boolean login(MemberDTO memberDTO) {
        try {
            // 원래의 로그인 로직
            List<MemberEntity> memberEntityList = memberRepository.findAll();
            List<MemberDTO> memberDTOList = new ArrayList<>();

            for (MemberEntity memberEntity : memberEntityList) {
                memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
            }

            for (MemberDTO existingMember : memberDTOList) {
                if (existingMember.getId().equals(memberDTO.getId()) &&
                        existingMember.getPassword().equals(memberDTO.getPassword())) {
                    return true;
                }
            }
            return false;
        } catch (Exception e) {
            // 예외 발생 시 오류 로그를 출력합니다.
            e.printStackTrace();
            return false;
        }
    }

    public List<MemberDTO> findAll() {
        List<MemberEntity> memberEntityList = new ArrayList<>();
        List<MemberDTO> memberDTOList = new ArrayList<>();
        memberEntityList = memberRepository.findAll();
        for(MemberEntity memberEntity : memberEntityList) {
            memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
            System.out.println(memberEntity.getId());
        }
        return memberDTOList;
    }
}
