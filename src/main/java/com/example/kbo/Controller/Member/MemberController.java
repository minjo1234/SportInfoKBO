package com.example.kbo.Controller.Member;

import com.example.kbo.DTO.MemberDTO;
import com.example.kbo.Service.MemberSerivce;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jdk.jshell.spi.ExecutionControl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/Login")
@RestController
public class MemberController {
    private final MemberSerivce memberSerivce;

    @PostMapping("/save")
    public void save(@RequestBody MemberDTO memberDTO) {
        System.out.println(memberDTO);
        memberSerivce.save(memberDTO);

    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody MemberDTO memberDTO , HttpServletRequest httpServletRequest){
        Map<String, Object> response = new HashMap<>();
        if(memberSerivce.login(memberDTO)){
            HttpSession session = httpServletRequest.getSession();
            session.setAttribute("userId" , memberDTO.getId());
            System.out.println(memberDTO.getId());
            response.put("message", "로그인 성공");
            response.put("sessionData", session.getAttribute("userId"));
            return ResponseEntity.ok(response);
        } else{
            response.put("message", "로그인 실패");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/findAll")
    public List<MemberDTO> findALl(){
        System.out.println("값이 오는건가?");
        List<MemberDTO> memberDTOList =  memberSerivce.findAll();
        for(MemberDTO memberDTO : memberDTOList){
            System.out.println(memberDTO.getId());
        }
        return memberDTOList;
    }

}
