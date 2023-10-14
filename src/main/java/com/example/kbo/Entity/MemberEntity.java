package com.example.kbo.Entity;

import com.example.kbo.DTO.MemberDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Data
@Table(name = "Member")
public class MemberEntity extends  BaseEntity {
    @Id
    private String id;
    @Column(length = 50 , unique = true , nullable = false)
    private String email;
    @Column(length = 50 , nullable = false)
    private String password;
    @Column(length = 50 , unique = true)
    private String nickName;
    @Column(length = 50, nullable = false)
    private String name;
    @Temporal(TemporalType.DATE)
    private Date birthDate;


    public static MemberEntity toMemberEntity(MemberDTO memberDTO) {
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setId(memberDTO.getId());
        memberEntity.setEmail(memberDTO.getEmail());
        memberEntity.setPassword(memberDTO.getPassword());
        memberEntity.setNickName(memberDTO.getNickName());
        memberEntity.setName(memberDTO.getName());
        memberEntity.setBirthDate(memberDTO.getBirthDate());
        return memberEntity;
    }
}
