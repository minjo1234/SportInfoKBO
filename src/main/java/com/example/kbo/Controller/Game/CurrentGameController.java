package com.example.kbo.Controller.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CurrentGameController {

    @GetMapping("/CurrentGameController")
    public String pythonExecute() throws IOException, InterruptedException {

        ProcessBuilder builder = new ProcessBuilder();
        builder.command("sh", "-c", "cd /Users/jomin/Desktop/SportInfo/TodayKboGame && python test.py");

        Process process = builder.start();
        BufferedReader br = new BufferedReader(new InputStreamReader( process.getInputStream(),"UTF-8"));
        String line = br.readLine();
        process.waitFor();
        process.destroy();
        System.out.println(line);
        return line;
    }

}