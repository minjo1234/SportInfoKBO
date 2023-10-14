package com.example.kbo.DTO;

import com.example.kbo.Entity.MemberEntity;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
    private String email;
    private String id;
    private String password;
    private String nickName;
    private String name;
    private Date birthDate;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(memberEntity.getId());
        memberDTO.setEmail(memberEntity.getEmail());
        memberDTO.setPassword(memberEntity.getPassword());
        memberDTO.setNickName(memberEntity.getNickName());
        memberDTO.setName(memberEntity.getName());
        memberDTO.setBirthDate(memberEntity.getBirthDate());
        return memberDTO;
    }
}
// 현재 column명 다릅니다 .//
//    const initialUserState = {
//            id: '',
//            email: '',
//            password: '',
//            confirmPassword : '',
//            nickname: '',
//            name: '',
//            birthdate: '',
//            };